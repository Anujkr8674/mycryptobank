! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a229191e-11a4-5574-85c1-ca49addc2027")
    } catch (e) {}
}();
(self.webpackChunkfaq_anns_ui = self.webpackChunkfaq_anns_ui || []).push([
    [755], {
        "5vN2": (e, t, r) => {
            "use strict";
            r.d(t, {
                Xf: () => s
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("VA12"),
                s = (function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/accounts/v1/public/account/ip/country-short");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/accounts/v2/public/account/ip/country-short", {
                                        usePrefetchCache: !0
                                    });
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.get)("/bapi/accounts/v2/public/account/ip/country-city-short");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.get)("/bapi/accounts/v1/public/account/country/promote/email/show");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        BMJD: (e, t, r) => {
            "use strict";
            r.d(t, {
                Tc: () => s
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("VA12"),
                s = (function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/get-anti-phishing-code", {});
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r, n, o;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/get-user-login-log", t);
                                case 2:
                                    return r = e.sent, n = r.data, o = r.total, e.abrupt("return", {
                                        data: n,
                                        total: o
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/base-detail", {});
                                case 2:
                                    return t = e.sent, r = t.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, i.get)("/bapi/accounts/v1/private/account/get-user-base-info");
                            case 4:
                                (t = e.sent).success && t.data && (t.data.isBindEmail = t.data.bindEmail), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), t = {
                                    success: !1
                                };
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            })(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, i.get)("/bapi/accounts/v1/private/account/get-user-extra-info");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1
                                };
                            case 10:
                                return e.abrupt("return", t);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t, r, n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, i.post)("/bapi/accounts/v2/private/certificate/onlyAccount/baseDetail/kycStatus");
                            case 4:
                                (t = e.sent).success && t.data && (r = t.data.certificateStatus, n = null === r ? "-1" : String(r), t.data.idPhoto = n), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), t = {
                                    success: !1
                                };
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t, r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.get)("/bapi/futures/v1/private/future/web3/user-detail", {});
                            case 2:
                                return t = e.sent, r = t.data, e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r, n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.useBnbFee, e.next = 3, (0, i.post)("/bapi/accounts/v1/private/account/user/set-commission-status", {
                                    useBnbFee: r
                                });
                            case 3:
                                return n = e.sent, e.abrupt("return", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/open-withdraw-white-status", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/close-withdraw-white-status", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/update-password", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v2/private/account/user/updatePassword", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.get)("/bapi/accounts/v1/private/account/user/check/withdraw-face");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/set-anti-phishing-code", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v2/private/account/user/set-anti-phishing-code", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v3/private/account/user/set-anti-phishing-code", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user-login-log/query", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user-operation-log/query", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/forbidden-by-oneself", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, i.post)("/bapi/accounts/v1/private/account/user/signLVTRiskAgreement", t);
                            case 4:
                                r = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), r = {
                                    success: !1
                                };
                            case 10:
                                return e.abrupt("return", r);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, i.get)("/bapi/accounts/v1/public/account/country/promote-and-term/show", {
                                    usePrefetchCache: !0
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, i.get)("/bapi/composite/v1/public/growth/compliance/country/email/show"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, i.post)("/bapi/composite/v1/private/account/user/enableFastWithdraw", t);
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                    success: !1,
                                    message: e.t0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, i.post)("/bapi/pay/v1/private/binance-pay/account/get-self-status", t);
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                    success: !1,
                                    message: e.t0
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/compliance/userComplianceCheck", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, i.post)("/bapi/composite/v1/private/growth-paas/user/agent", {}, {
                                    enableErrorMsgIntercept: !1
                                });
                            case 3:
                                return t = e.sent, e.abrupt("return", t);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                    success: !1,
                                    message: e.t0,
                                    code: "",
                                    data: {}
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t, r, n = arguments;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, e.abrupt("return", (0, i.post)("/bapi/accounts/v3/protect/authcenter/oauth/thirdLogin/verifyMfa", t, r));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t, r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    withdrawStatus: !0
                                }, e.prev = 1, e.next = 4, (0, i.get)("/bapi/accounts/v1/private/account/user/get-withdraw-status");
                            case 4:
                                return r = e.sent, e.abrupt("return", r.success ? r.data : t);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", t);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }()
        },
        tbM7: (e, t, r) => {
            "use strict";
            r.d(t, {
                CY: () => b
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("VA12"),
                s = r("vpUY"),
                c = r("zJWh"),
                u = r("BK7R"),
                l = r("dX47"),
                p = r("Cjys");
            const f = {
                isLogged: function() {
                    var e = (0, n.A)(a().mark((function e(t, r) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/public/authcenter/auth", {}, {
                                        enableErrorMsgIntercept: !1
                                    });
                                case 2:
                                    e.sent.success ? r({
                                        logged: !0
                                    }) : r({
                                        logged: !1
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            };
            const d = (0, p.vt)((0, p.Q)((0, u.A)({}, l, f)));
            var g = (0, s.S)().isHybrid,
                v = {
                    accountsSubDomain: "accounts"
                };
            var h = function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t, r, n, o, s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!g && c.U.read("cr00")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return t = !1, r = window.location.hostname, n = r.match(/[^.]*\.[^.]*$/), o = r, n && (o = "".concat(v.accountsSubDomain, ".").concat(n[0])), e.next = 9, (0, i.post)("//".concat(o, "/bapi/accounts/v1/public/authcenter/auth"), {}, {
                                        credentials: "include",
                                        enableErrorMsgIntercept: !1
                                    });
                                case 9:
                                    if (!e.sent.success) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 13, (0, i.post)("//".concat(o, "/bapi/accounts/v1/private/authcenter/code"), {}, {
                                        credentials: "include"
                                    });
                                case 13:
                                    if (!(s = e.sent).success) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.next = 17, (0, i.get)("/bapi/accounts/v1/public/authcenter/callback?code=".concat(s.data));
                                case 17:
                                    e.sent.success && (t = !0);
                                case 19:
                                    e.next = 22;
                                    break;
                                case 21:
                                    c.U.erase("cr00"), c.U.erase("cr00"), c.U.erase("logined");
                                case 22:
                                    return e.abrupt("return", t);
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, n.A)(a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", d.isLogged());
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !1, e.prev = 1, e.next = 4, m();
                                case 4:
                                    if (!e.sent.logged) {
                                        e.next = 9;
                                        break
                                    }
                                    t = !0, e.next = 12;
                                    break;
                                case 9:
                                    return e.next = 11, h();
                                case 11:
                                    t = e.sent;
                                case 12:
                                    e.next = 16;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(1);
                                case 16:
                                    return e.abrupt("return", t);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 14]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        eZh5: (e, t, r) => {
            "use strict";
            r.d(t, {
                JF: () => l,
                TU: () => p
            });
            var n = r("sViW"),
                o = r("BK7R"),
                a = r("Pz56"),
                i = r.n(a),
                s = r("VA12"),
                c = (0, s.fetchOrigin)().fetch,
                u = function() {
                    var e = (0, n.A)(i().mark((function e(t) {
                        var r, n, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.next = 3, c(t, (0, o.A)({
                                        method: "GET",
                                        mode: "cors"
                                    }, r));
                                case 3:
                                    if (!(n = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", n.json());
                                case 6:
                                    throw new Error("get url:".concat(t, " resource fail"));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, n.A)(i().mark((function e(t) {
                        var r, n, o, a, s, c, p, f;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.i18nHost, n = t.namespace, o = t.language, a = void 0 === o ? "en" : o, s = t.fallback, c = void 0 === s ? "en" : s, r && n) {
                                        e.next = 3;
                                        break
                                    }
                                    throw TypeError("i18nHost and namespace must be defined");
                                case 3:
                                    return e.prev = 3, p = "".concat(r, "/api/i18n/").concat(a, "/").concat(n), e.next = 7, u(p);
                                case 7:
                                    if ((f = e.sent) && Object.keys(f).length) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 10:
                                    return e.abrupt("return", f);
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(3), console.error("query i18n fail: ".concat(n, " | ").concat(a), e.t0), e.abrupt("return", "string" === typeof c && c !== a ? l({
                                        i18nHost: r,
                                        namespace: n,
                                        language: c,
                                        fallback: !1
                                    }) : Object.create(null));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, n.A)(i().mark((function e(t) {
                        var r, n, o, a, s, c, l, f, d, g, v, h, m = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = m.length > 1 && void 0 !== m[1] ? m[1] : {}, n = t.basePath, o = t.namespace, a = t.locale, s = void 0 === a ? "en" : a, c = t.fallback, l = void 0 === c ? "en" : c, f = t.enable2NsKey, d = void 0 !== f && f, n && o) {
                                        e.next = 4;
                                        break
                                    }
                                    throw TypeError("basePath and namespace must be defined");
                                case 4:
                                    return e.prev = 4, g = "".concat(n, "/").concat(s, "/").concat(o), e.next = 8, u(g, r);
                                case 8:
                                    if ((v = e.sent) && Object.keys(v).length) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 11:
                                    if (!d) {
                                        e.next = 15;
                                        break
                                    }
                                    return h = {}, Object.keys(v).forEach((function(e) {
                                        h[e] = "".concat(o, ":").concat(e)
                                    })), e.abrupt("return", h);
                                case 15:
                                    return e.abrupt("return", v);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(4), console.error("query i18n fail: ".concat(o, " | ").concat(s), e.t0), e.abrupt("return", "string" === typeof l && l !== s ? p({
                                        basePath: n,
                                        namespace: o,
                                        locale: l,
                                        fallback: !1
                                    }, r) : Object.create(null));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 18]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        fdP6: (e, t, r) => {
            "use strict";
            r.d(t, {
                b$: () => u
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("VA12"),
                s = r("T3Fm"),
                c = r("zJWh"),
                u = (function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/composite/v1/private/market/site/symbol/userCollect/query");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/market/site/symbol/userCollect/update", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/apex/v1/private/apex/market/compliance/user-compliance-status");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || {});
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/apex/v1/private/apex/market/compliance/user-compliance-status");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t || {});
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r, n, o, u;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.platform, n = t.currency, o = s.o && c.U.read("userPreferredCurrency"), e.prev = 3, e.next = 6, (0, i.get)("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check?platform=".concat(null === r || void 0 === r ? void 0 : r.toUpperCase()), {
                                    headers: {
                                        "bnc-currency": n || o || "USD_USD"
                                    }
                                });
                            case 6:
                                u = e.sent, e.next = 12;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(3), u = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                };
                            case 12:
                                return e.abrupt("return", u);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 9]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r, n, o;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.userId, n = t.bizCode, e.prev = 1, e.next = 4, (0, i.post)("/bapi/compliance/v1/friendly/compliance/market/user-confirm-mnl", {
                                    userId: r,
                                    bizCode: n
                                });
                            case 4:
                                return o = e.sent, e.abrupt("return", o || {});
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                    code: "",
                                    messageDetail: {
                                        suggestion: "",
                                        title: ""
                                    }
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }()
        },
        oFD3: (e, t, r) => {
            "use strict";
            r.d(t, {
                vK: () => s
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("VA12"),
                s = (function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/order-confirm-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/order-confirm-statusV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/usermodule/update", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/usermodule/updateV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/apex/v1/private/apex/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/userlanguage/select");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/composite/v1/public/push-center/preference/language/all-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/composite/v1/private/push-center/preference/language/user-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/language/saveupdate", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/push-center/preference/language/save-user-language", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/composite/v1/private/inbox/config/language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.get)("/bapi/accounts/v1/private/account/user-personal-config/get-marketing-analytics-status");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user-personal-config/modify-marketing-analytics-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/query", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateAvatar", t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    var r, n, o, s, c;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.params, n = void 0 === r ? {} : r, o = t.opts, s = void 0 === o ? {} : o, e.next = 3, (0, i.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateNickName", n, s);
                            case 3:
                                return c = e.sent, e.abrupt("return", c);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, i.get)("/bapi/apex/v1/private/apex/marketing/user/current/profile/avatar/default-list");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, i.post)("/bapi/futures/v1/private/future/user-setting/get-saved-preferences", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, i.post)("/bapi/futures/v1/private/future/user-setting/update-saved-preferences", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(a().mark((function e(t) {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, i.post)("/bapi/futures/v1/private/future/user-setting/reset-saved-preferences", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        iyUK: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wv: () => f,
                x8: () => d
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o);

            function i(e) {
                var t = document.cookie.match(RegExp("(?:^|;\\s*)".concat(e, "=([^;]*)")));
                return t ? t[1] : null
            }
            var s = function() {
                    var e = (0, n.A)(a().mark((function e(t, r) {
                        var n, o;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.url.includes("/public/authcenter/auth")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    if (e.prev = 2, !(t.headers.get("Content-Type") || "").includes("application/json")) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, t.clone().json();
                                case 8:
                                    n = e.sent, e.next = 14;
                                    break;
                                case 11:
                                    return e.next = 13, t.clone().text();
                                case 13:
                                    n = e.sent;
                                case 14:
                                    return o = "1" === i("r30t"), e.abrupt("return", "100002001" === n.code || "100001005" === n.code && o);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(2), r.error("parse isAuthExpired response's data failed", e.t0), e.abrupt("return", !1);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 18]
                        ])
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function(e, t) {
                    var r, n, o = e.headers;
                    return !!(null === o || void 0 === o || null === (r = o.get) || void 0 === r ? void 0 : r.call(o, "risk_challenge_biz_no")) && "true" === (null === o || void 0 === o || null === (n = o.get) || void 0 === n ? void 0 : n.call(o, "risk_challenge_enable_flow"))
                },
                u = !1,
                l = null;

            function p() {
                l || (l = setTimeout((function() {
                    u = !0
                }), 5e3))
            }
            var f = function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r, n = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = n.length > 1 && void 0 !== n[1] ? n[1] : console, !t.url.includes("/mfa-ui/version")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 3:
                                    if (!u) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 7:
                                    p();
                                case 8:
                                    if (e.t1 = 401 === t.status || 418 === t.status, e.t1) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 12, s(t, r);
                                case 12:
                                    e.t1 = e.sent;
                                case 13:
                                    if (e.t0 = e.t1, e.t0) {
                                        e.next = 16;
                                        break
                                    }
                                    e.t0 = c(t);
                                case 16:
                                    return e.abrupt("return", e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r, n = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = n.length > 1 && void 0 !== n[1] ? n[1] : console, !t.url.includes("/mfa-ui/version")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 3:
                                    if (e.t1 = 401 === t.status || 418 === t.status, e.t1) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7, s(t, r);
                                case 7:
                                    e.t1 = e.sent;
                                case 8:
                                    if (e.t0 = e.t1, e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t0 = c(t);
                                case 11:
                                    return e.abrupt("return", e.t0);
                                case 12:
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
        V8AU: (e, t, r) => {
            "use strict";
            r.d(t, {
                l6: () => s,
                pu: () => l
            });
            var n = r("blBx"),
                o = {},
                a = o.toString;
            "Promise AsyncFunction Window global".split(" ").forEach((function(e) {
                o["[object ".concat(e, "]")] = e.toLowerCase()
            }));
            var i = function(e) {
                    return null == e ? "".concat(e) : "object" === typeof e || "function" === typeof e ? o[a.call(e)] || "object" : "undefined" === typeof e ? "undefined" : (0, n.A)(e)
                },
                s = !0,
                c = "undefined" !== typeof r.g,
                u = (s && i(window), c && "global" === i(r.g)),
                l = (s || u) && "undefined" !== typeof console
        },
        "+HWd": (e, t, r) => {
            "use strict";
            r.d(t, {
                YW: () => i,
                hn: () => s,
                s3: () => a
            });
            var n = r("V8AU"),
                o = "CMS_Logs",
                a = function(e) {
                    var t = e.nameSpace,
                        r = void 0 === t ? o : t,
                        a = e.action,
                        i = e.err;
                    n.pu && console.error("[".concat(r, "] Action<").concat(a, "> fetch err, ").concat(i))
                },
                i = function(e) {
                    var t = e.nameSpace,
                        r = void 0 === t ? o : t,
                        a = e.type,
                        i = e.props;
                    if (n.pu) {
                        var s = i.elementId,
                            c = void 0 === s ? "" : s;
                        console.log("[".concat(r, "] Type<").concat(a, "> Tracker<").concat(c, "> triggered"), i)
                    }
                },
                s = function(e) {
                    var t = e.nameSpace,
                        r = void 0 === t ? o : t,
                        a = e.action,
                        i = e.err;
                    n.pu && console.error("[".concat(r, "] Parse<").concat(a, "> err, ").concat(i))
                }
        },
        YvF5: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("eZh5"),
                o = function(e) {
                    var t = e.lng,
                        r = e.ns,
                        o = e.fallback,
                        a = e.basePath,
                        i = e.customPath,
                        s = e.enable2NsKey,
                        c = a || "https://bin.bnbstatic.com/api/i18n/-/web/cms";
                    return (0, n.TU)({
                        basePath: i ? "".concat(c, "/").concat(i) : c,
                        locale: t,
                        namespace: r,
                        fallback: o && void 0,
                        enable2NsKey: s
                    })
                }
        },
        zJWh: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => p
            });
            var n = r("LJ4M"),
                o = r("T3Fm"),
                a = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                };

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }

            function s(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                (0, n.write)(e, t, r, o)
            }
            var c = s,
                u = s,
                l = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    (0, n.write)(e, t, r, o, a)
                },
                p = {
                    parse: n.parse,
                    read: n.read,
                    readAsList: function(e, t) {
                        var r = [];
                        if (a(e))
                            for (var n = "".concat(e, "=").trim(), s = ((o.o ? document : t || {}).cookie || "").split(";"), c = 0; c < s.length; c++) {
                                var u = (s[c] || "").trim();
                                if (0 === u.indexOf(n)) {
                                    var l = u.slice(n.length).trim();
                                    r.push(i('"' === l[0] ? l.slice(1, -1) : l))
                                }
                            }
                        return r
                    },
                    matchRead: function(e, t) {
                        var r = (0, n.parse)(t);
                        return e.reduce((function(e, t) {
                            var n = t.key,
                                o = t.matches;
                            if (a(n)) {
                                var i = r[n];
                                e[n] = o ? o(i) : i
                            }
                            return e
                        }), {})
                    },
                    write: s,
                    erase: function(e) {
                        return s(e, "", -1)
                    },
                    _update: function() {
                        return !1
                    },
                    writeCookieWithDomain: c,
                    writeCookieWithDomainLevel: u,
                    writeCookieWithDomainLevelV2: l
                }
        },
        Bk23: (e, t, r) => {
            "use strict";
            r.d(t, {
                g: () => n
            });
            var n = "undefined" !== typeof globalThis && globalThis.bn && "undefined" !== typeof globalThis.__NEZHA_BRIDGE__
        },
        T3Fm: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            var n = !!window.document
        },
        a59x: (e, t, r) => {
            "use strict";
            r.d(t, {
                E2: () => a,
                Eg: () => i,
                JK: () => c,
                bG: () => s
            });
            r("kPx0");
            var n = r("tKUM"),
                o = r("T3Fm");

            function a(e, t) {
                return Object.keys(e).map((function(t) {
                    return e[t] ? "".concat(t, "=").concat(encodeURIComponent(e[t])) : ""
                })).filter((function(e) {
                    return !!e
                })).join(t || "&")
            }

            function i(e, t) {
                return [e, a(t)].filter(Boolean).join(/\?/.test(e) ? "&" : "?")
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = o.o ? window.location : t,
                    n = r.hostname,
                    a = void 0 === n ? "" : n,
                    i = a.split(".");
                return i.length > 2 ? i.slice(-e).join(".") : a
            }
            var c = function(e) {
                return (0, n.getLanguage)()
            }
        },
        Cjys: (e, t, r) => {
            "use strict";
            r.d(t, {
                vt: () => C,
                Q: () => F
            });
            var n = r("vpUY");
            const o = e => {
                if (e) return JSON.parse(e)
            };
            const a = (e, t) => void 0 === t ? e() : e(t);
            class i {
                constructor() {
                    this._callbacks = Object.create(null), this._handlers = Object.create(null), this._nonce = function(e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
                        let r = "";
                        for (let n = 0; n < e; n++) r += t.charAt(Math.floor(Math.random() * t.length));
                        return r
                    }(10), this._uuid = 0, this._setup()
                }
                _getCallbackId(e) {
                    const t = `${this._nonce}_${this._uuid++}`;
                    return this._callbacks[t] = e, t
                }
                _receiveCallback(e, t) {
                    const r = this._callbacks[e];
                    r && (delete this._callbacks[e], a(r, t))
                }
                _receiveEvent(e, t) {
                    const r = this._handlers[e];
                    r && a(r, t)
                }
                invoke(e, t = {}) {
                    return new Promise((r => {
                        const n = this._getCallbackId(r);
                        this._send(e, t, n)
                    }))
                }
                handler(e, t) {
                    this._handlers[e] = t
                }
                ready() {
                    this._ready()
                }
            }
            const s = e => () => {
                throw new Error(`[bridge-core] ${e} must be implemented`)
            };
            Object.assign(i.prototype, {
                _setup: s("_setup"),
                _send: s("_send"),
                _ready: s("_ready")
            });
            class c {
                constructor() {
                    this._adapters = [], this._default = null
                }
                register({
                    test: e,
                    adapter: t
                }) {
                    return this._adapters.push({
                        test: e,
                        adapter: t
                    }), this
                }
                default (e) {
                    return this._default = e, this
                }
                create(e, t) {
                    const r = (0, n.S)(t);
                    let o = this._default;
                    this._adapters.some((({
                        test: e,
                        adapter: t
                    }) => !!e(r) && (o = t, !0)));
                    return e(new(o(i)), r)
                }
            }

            function u(e) {
                const t = [],
                    r = {
                        $push(e) {
                            t.push(e)
                        }
                    };
                return Object.keys(e).forEach((n => {
                    const o = e[n];
                    r[n] = "function" === typeof o ? (...e) => {
                        for (let r = 0; r < t.length; r++) o.apply(t[r], e)
                    } : o
                })), r
            }
            const l = e => class extends e {
                    _setup() {
                        window.BardApp || (window.BardApp = u({
                            callbackFromNative(e, t, r) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${r} (callbackId: ${e})`), this._receiveCallback(e, o(r))
                            },
                            eventFromNative(e, t) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[eventFromNative] eventType:${e} (data: ${t})`), this._receiveEvent(e, o(t))
                            }
                        })), window.BardApp.$push(this)
                    }
                    _send(e, t, r) {
                        window.BardMagicalJourney.messageSend(e, r, JSON.stringify(t))
                    }
                    _ready() {
                        window.BardMagicalJourney.bridgeReady()
                    }
                },
                p = e => class extends e {
                    _setup() {
                        if (!window.__BNC_BRIDGE_TEMP_VAR__) {
                            window.__BNC_BRIDGE_TEMP_VAR__ = u({
                                onMessage(e) {
                                    window._BNC_BRIDGE_DEBUG_ && console.log(`[node-bridge-core][onMessage] ${e}`);
                                    const t = (e = o(e)).payload.data;
                                    "web-view-post-message" === e.action && "node-bridge" === t.type && this._receiveCallback(t.callbackId, t.data)
                                }
                            }), window.__NEZHA_WEB_BRIDGE__ || (console.log("[node-bridge-core] window.__NEZHA_WEB_BRIDGE__:", window.__NEZHA_WEB_BRIDGE__), window.__NEZHA_WEB_BRIDGE__ = {});
                            const e = window.__NEZHA_WEB_BRIDGE__.onMessage;
                            window.__NEZHA_WEB_BRIDGE__.onMessage = function(...t) {
                                e && e(...t), window.__BNC_BRIDGE_TEMP_VAR__.onMessage(...t)
                            }
                        }
                        window.__BNC_BRIDGE_TEMP_VAR__.$push(this)
                    }
                    _send(e, t, r) {
                        window.__NEZHA_BRIDGE__.postMessage(JSON.stringify({
                            action: "web-view-post-message",
                            payload: {
                                data: {
                                    type: "node-bridge",
                                    payload: {
                                        action: e,
                                        data: t,
                                        callbackId: r
                                    }
                                }
                            },
                            callbackId: r
                        }))
                    }
                    _ready() {
                        window.__NEZHA_BRIDGE__.postMessage(JSON.stringify({
                            action: "web-view-post-message",
                            payload: {
                                data: {
                                    type: "node-bridge",
                                    payload: {
                                        event: "bridge-ready"
                                    }
                                }
                            },
                            callbackId: 0
                        }))
                    }
                },
                f = window.webkit && window.webkit.messageHandlers || {},
                d = (e, t = {}) => {
                    f[e] && f[e].postMessage(t)
                },
                g = e => class extends e {
                    _setup() {
                        window.BNCBridge || (window.BNCBridge = u({
                            receive(e) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${e}`);
                                const {
                                    callbackId: t,
                                    eventType: r,
                                    data: n
                                } = o(e);
                                t ? this._receiveCallback(t, n) : r && this._receiveEvent(r, n)
                            }
                        })), window.BNCBridge.$push(this)
                    }
                    _send(e, t, r) {
                        d(e, {
                            data: JSON.stringify(t),
                            callbackId: r
                        })
                    }
                    _ready() {
                        d("bridgeReady")
                    }
                },
                v = e => class extends e {
                    _setup() {}
                    _send() {}
                    _ready() {}
                };
            const h = class {
                    constructor() {
                        this._methods = Object.create(null)
                    }
                    add(e, t) {
                        return this._methods[e] = t, this
                    }
                    _send(e, t, r) {
                        const n = this._methods[e];
                        if (!n) return console.error(`[bridge-core] bridge.${e} is not defined`);
                        n(t, (e => {
                            this._receiveCallback(r, e)
                        }))
                    }
                    create(e) {
                        const t = this;
                        return r => ({
                            [e]: class extends r {
                                _setup() {
                                    t._bridge || (t._bridge = u({
                                        receiveCallback(...e) {
                                            this._receiveCallback(...e)
                                        },
                                        receiveEvent(...e) {
                                            this._receiveEvent(...e)
                                        }
                                    })), t._receiveCallback = t._bridge.receiveCallback, window.BridgeReceiveEvent = t._bridge.receiveEvent, t._bridge.$push(this)
                                }
                                _send(e, r, n) {
                                    t._send(e, r, n)
                                }
                                _ready() {}
                            }
                        }[e])
                    }
                },
                m = (e, t) => "LT" === function(e, t) {
                    return function(e, t) {
                        if (e.join(".") === t.join(".")) return "EQ";
                        for (let r = 0; r < e.length; r++) {
                            switch (b(e[r], t[r])) {
                                case "EQ":
                                    continue;
                                case "GT":
                                    return "GT";
                                case "LT":
                                    return "LT"
                            }
                        }
                    }(y(e), y(t))
                }(e, t);

            function b(e, t) {
                return e === t ? "EQ" : e > t ? "GT" : "LT"
            }

            function y(e) {
                return e.replace(/-alpha/g, "").split(".").map(Number)
            }
            const _ = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                w = (e, t, r) => Object.defineProperty(e, t, {
                    value: r
                }),
                x = e => {
                    if ("string" !== typeof e) throw new TypeError("agent must be a string");
                    const t = e.match(_),
                        r = Object.create({
                            isHybrid: !1
                        });
                    if (t) {
                        const e = t[1];
                        w(r, "bridgeVersion", e), w(r, "clientType", t[2]), w(r, "clientVersion", t[3]), w(r, "isHybrid", !!e)
                    }
                    return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (r.isHybrid = !0), r
                };
            let E, A;
            const S = () => A || ("undefined" !== typeof navigator ? navigator.userAgent : "");
            const {
                isHybrid: k,
                clientType: O,
                bridgeVersion: T
            } = function(e) {
                return 0 === arguments.length ? E || (E = x(S())) : x(e)
            }(), B = e => {
                const t = Object.create(null);
                t.back = (t = 1) => e.invoke("back", {
                    amount: t
                }), t.setTitle = t => e.invoke("setTitle", {
                    title: t
                }), t.broadcast = t => e.invoke("broadcast", {
                    data: t
                }), t.toast = t => e.invoke("toast", {
                    text: t
                }), t.open = t => {
                    void 0 === t.withNavigationBar && (t.withNavigationBar = !0), e.invoke("open", t)
                };
                ["notExistBridge", "stopLoading", "isLogged", "getUserInfo", "getDiagnosticInfo", "getAppConfig", "isApplePayAvailable", "isAppleWatchPaired", "getSystemInfoSync", "mpHideControlButton", "mpShowControlButton"].forEach((r => {
                    t[r] = () => e.invoke(r)
                })), ["alert", "addDebitCard", "verifyDebitCard", "face", "getImage", "jumio", "captchaResult", "kycVender", "openChatVideo", "setNavBar", "ensureLogged", "setKYCVendorUkrainDiiaPlugin", "refreshKycStatus", "getAutoCaptureImages", "appUpdate", "setStore", "getMicroblinkImages", "isMicroBlinkReady", "payService", "getProvisionedCards", "addCard", "notifyChatVideo", "haodeskFileUpload", "chatCaseToken", "haodeskUploadUerLog", "canShare", "updateEntityTag", "mpPreviewImage", "mpSetControlButton"].forEach((r => {
                    t[r] = t => e.invoke(r, t)
                }));
                const r = Object.create(null),
                    n = e => {
                        r[e] = Object.create({
                            listened: !1,
                            events: []
                        })
                    };
                n("back"), n("broadcast"), n("theme-change"), n("session-change"), n("service-chat-change"), n("sendResultCheckoutForCryptoBox");
                const o = (e, t) => {
                        const r = e.indexOf(t);
                        ~r && ((e, t) => {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        })(e, r)
                    },
                    a = (t, n, a) => {
                        const i = r[t];
                        if (!i) return;
                        const {
                            events: s
                        } = i;
                        i.listened || (i.listened = !0, e.handler(t, (e => {
                            ((e, t) => {
                                const r = new Array(t);
                                for (let n = 0; n < t; ++n) r[n] = e[n];
                                return r
                            })(s, s.length).forEach((t => t(e)))
                        }))), s.push(a ? ((e, t) => {
                            const r = (...n) => {
                                o(e, r), t(...n)
                            };
                            return r
                        })(s, n) : n)
                    };
                return t.on = (e, t) => a(e, t), t.once = (e, t) => a(e, t, !0), t.off = function(e, t) {
                    const n = r[e];
                    if (!n) return;
                    const {
                        events: a
                    } = n;
                    1 !== arguments.length ? o(a, t) : a.length = 0
                }, t.fetch = (t, {
                    method: r = "GET",
                    body: n = "",
                    headers: o = {},
                    credentials: a
                } = {}) => e.invoke("fetch", {
                    url: t,
                    method: r,
                    body: n,
                    headers: o,
                    credentials: a
                }).then((({
                    error: e,
                    response: r
                }) => {
                    if (!k) return e ? Promise.reject(e) : Promise.resolve(r);
                    if (e) {
                        const t = new TypeError("Failed to fetch");
                        switch (typeof e) {
                            case "object":
                                Object.assign(t, e);
                                break;
                            case "string":
                                t.message = e
                        }
                        throw t
                    }
                    const {
                        status: n,
                        headers: o,
                        body: a,
                        statusText: i = ""
                    } = r, s = {};
                    Object.keys(o).forEach((e => {
                        const t = o[e];
                        s[e] = "string" === typeof t ? [t] : t
                    }));
                    const c = (e => e >= 200 && e < 300)(n);
                    return {
                        url: t,
                        ok: c,
                        status: n,
                        statusText: i,
                        json: () => new Promise(((e, t) => {
                            try {
                                e(JSON.parse(a || "{}"))
                            } catch (r) {
                                t(r)
                            }
                        })),
                        text: () => Promise.resolve(a),
                        headers: s,
                        clone: () => ({
                            url: t,
                            ok: c,
                            status: n,
                            statusText: i,
                            json: () => new Promise(((e, t) => {
                                try {
                                    e(JSON.parse(a || "{}"))
                                } catch (r) {
                                    t(r)
                                }
                            })),
                            text: () => Promise.resolve(a),
                            headers: s
                        })
                    }
                })), t.share = t => {
                    const {
                        type: r,
                        image: n
                    } = t;
                    return "iOS" === O && "IMAGE" === r && "string" === typeof n && 0 === n.indexOf("data:image") && (t.image = n.split(",")[1] || ""), e.invoke("share", t).then((({
                        result: e = "UNKNOWN"
                    }) => {
                        if ("SUCCESS" === e) return Promise.resolve(); {
                            const t = new Error(e);
                            return t.code = e, Promise.reject(t)
                        }
                    }))
                }, t.setButtons = (t, o, i) => (o = o.map((e => {
                    const t = `button.${e.type}`;
                    return r[t] || n(t), e.onClick && a(t, e.onClick), t
                })), e.invoke("setButtons", { ...i || {},
                    buttons: o,
                    position: t
                })), t.openURWebview = ({
                    url: t,
                    closePath: r = "/app/bnc/urwebv/close",
                    closeButtonVisible: n,
                    viewExternal: o
                }) => e.invoke("openURWebview", {
                    url: t,
                    closePath: r,
                    closeButtonVisible: n,
                    viewExternal: o
                }).then((({
                    result: e,
                    callbackUrl: t
                }) => "SUCCESS" === e ? Promise.resolve({
                    callbackUrl: t
                }) : Promise.reject({
                    code: e
                }))), t.isSupportDeeplink = t => !k || m(T, "1.8.0") ? Promise.resolve(!1) : e.invoke("isSupportDeeplink", {
                    deeplink: t
                }).then((({
                    supported: e
                }) => e)), t.sendEventToNative = ({
                    name: t,
                    data: r = {}
                }) => e.invoke("sendEventToNative", {
                    name: t,
                    data: r
                }), t.saveFile = ({
                    source: t,
                    filename: r,
                    fileType: n
                }) => e.invoke("saveFile", {
                    source: t,
                    filename: r,
                    fileType: n
                }).then((e => {
                    if (e && e.error) throw error
                })), e.ready(), t
            };
            var P = r("F63i");
            const C = (e = v) => (new c).register({
                    test: ({
                        clientType: e
                    }) => "iOS" === e || "MacOS" === e,
                    adapter: g
                }).register({
                    test: ({
                        clientType: e
                    }) => "Android" === e,
                    adapter: l
                }).register({
                    test: () => window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction,
                    adapter: p
                }).default(e).create(B, function() {
                    const e = "undefined" !== typeof window.document,
                        t = "undefined" !== typeof P && null != P.versions && null != P.versions.node;
                    let r = "";
                    e && (r = window.navigator.userAgent);
                    t && (r = `node ${P.versions.node}`);
                    return r
                }()),
                F = e => {
                    const t = new h;
                    return Object.keys(e).forEach((r => {
                        t.add(r, e[r])
                    })), t.create("BrowserFakeBridge")
                }
        },
        vpUY: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => u
            });
            const n = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                o = (e, t, r) => Object.defineProperty(e, t, {
                    value: r
                }),
                a = e => {
                    if ("string" !== typeof e) throw new TypeError("agent must be a string");
                    const t = e.match(n),
                        r = Object.create({
                            isHybrid: !1
                        });
                    if (t) {
                        const e = t[1];
                        o(r, "bridgeVersion", e), o(r, "clientType", t[2]), o(r, "clientVersion", t[3]), o(r, "isHybrid", !!e)
                    }
                    return r
                };
            let i, s;
            const c = () => s || ("undefined" !== typeof navigator ? navigator.userAgent : "");

            function u(e) {
                return 0 === arguments.length ? i || (i = a(c())) : a(e)
            }
        },
        dX47: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                fetch: () => s,
                setTitle: () => i
            });
            const n = fetchPonyfill;
            var o = r.n(n);
            const {
                fetch: a
            } = o()(), i = ({
                title: e
            }, t) => {
                document.title = e, t()
            }, s = ({
                url: e,
                method: t,
                body: r,
                headers: n,
                credentials: o = "same-origin"
            }, i) => {
                const s = {
                    method: t = t.toUpperCase(),
                    headers: n,
                    credentials: o
                };
                "GET" !== t && "HEAD" !== t && (s.body = r), a(e, s).then((e => {
                    i({
                        response: e
                    })
                })).catch((e => {
                    i({
                        error: e
                    })
                }))
            }
        },
        ofQG: (e, t) => {
            "use strict"
        },
        "64TO": (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fetch = void 0;
            var n = r("E0uk");
            Object.defineProperty(t, "fetch", {
                enumerable: !0,
                get: function() {
                    return n.fetch
                }
            })
        },
        dKjp: (e, t, r) => {
            r("Bihu"), r("htmW")
        },
        "9xYj": (e, t, r) => {
            var n = r("/LHJ"),
                o = r("Oxe1"),
                a = TypeError;
            e.exports = function(e) {
                if (n(e)) return e;
                throw a(o(e) + " is not a function")
            }
        },
        tTsQ: (e, t, r) => {
            var n = r("nFBW"),
                o = String,
                a = TypeError;
            e.exports = function(e) {
                if (n(e)) return e;
                throw a(o(e) + " is not an object")
            }
        },
        JXJY: (e, t, r) => {
            var n = r("/1o8"),
                o = r("cHg0"),
                a = r("C/5I"),
                i = function(e) {
                    return function(t, r, i) {
                        var s, c = n(t),
                            u = a(c),
                            l = o(i, u);
                        if (e && r != r) {
                            for (; u > l;)
                                if ((s = c[l++]) != s) return !0
                        } else
                            for (; u > l; l++)
                                if ((e || l in c) && c[l] === r) return e || l || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: i(!0),
                indexOf: i(!1)
            }
        },
        "3Ckp": (e, t, r) => {
            var n = r("rioE"),
                o = n({}.toString),
                a = n("".slice);
            e.exports = function(e) {
                return a(o(e), 8, -1)
            }
        },
        UI2s: (e, t, r) => {
            var n = r("hKKO"),
                o = r("ELNT"),
                a = r("PSsl"),
                i = r("xluy");
            e.exports = function(e, t, r) {
                for (var s = o(t), c = i.f, u = a.f, l = 0; l < s.length; l++) {
                    var p = s[l];
                    n(e, p) || r && n(r, p) || c(e, p, u(t, p))
                }
            }
        },
        SeAf: (e, t, r) => {
            var n = r("f8nr"),
                o = r("xluy"),
                a = r("lFLE");
            e.exports = n ? function(e, t, r) {
                return o.f(e, t, a(1, r))
            } : function(e, t, r) {
                return e[t] = r, e
            }
        },
        lFLE: e => {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        "9vzw": (e, t, r) => {
            var n = r("/LHJ"),
                o = r("xluy"),
                a = r("iYp9"),
                i = r("2ZLl");
            e.exports = function(e, t, r, s) {
                s || (s = {});
                var c = s.enumerable,
                    u = void 0 !== s.name ? s.name : t;
                if (n(r) && a(r, u, s), s.global) c ? e[t] = r : i(t, r);
                else {
                    try {
                        s.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (error) {}
                    c ? e[t] = r : o.f(e, t, {
                        value: r,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        },
        "2ZLl": (e, t, r) => {
            var n = r("htmW"),
                o = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    o(n, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (error) {
                    n[e] = t
                }
                return t
            }
        },
        f8nr: (e, t, r) => {
            var n = r("L1Gn");
            e.exports = !n((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        vciX: e => {
            var t = "object" == typeof document && document.all,
                r = "undefined" == typeof t && void 0 !== t;
            e.exports = {
                all: t,
                IS_HTMLDDA: r
            }
        },
        LhkG: (e, t, r) => {
            var n = r("htmW"),
                o = r("nFBW"),
                a = n.document,
                i = o(a) && o(a.createElement);
            e.exports = function(e) {
                return i ? a.createElement(e) : {}
            }
        },
        wVGj: e => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        BcTq: (e, t, r) => {
            var n, o, a = r("htmW"),
                i = r("wVGj"),
                s = a.process,
                c = a.Deno,
                u = s && s.versions || c && c.version,
                l = u && u.v8;
            l && (o = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (o = +n[1]), e.exports = o
        },
        XepZ: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        AS9I: (e, t, r) => {
            var n = r("htmW"),
                o = r("PSsl").f,
                a = r("SeAf"),
                i = r("9vzw"),
                s = r("2ZLl"),
                c = r("UI2s"),
                u = r("n1w0");
            e.exports = function(e, t) {
                var r, l, p, f, d, g = e.target,
                    v = e.global,
                    h = e.stat;
                if (r = v ? n : h ? n[g] || s(g, {}) : (n[g] || {}).prototype)
                    for (l in t) {
                        if (f = t[l], p = e.dontCallGetSet ? (d = o(r, l)) && d.value : r[l], !u(v ? l : g + (h ? "." : "#") + l, e.forced) && void 0 !== p) {
                            if (typeof f == typeof p) continue;
                            c(f, p)
                        }(e.sham || p && p.sham) && a(f, "sham", !0), i(r, l, f, e)
                    }
            }
        },
        L1Gn: e => {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (error) {
                    return !0
                }
            }
        },
        "0Ghs": (e, t, r) => {
            var n = r("L1Gn");
            e.exports = !n((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        SE89: (e, t, r) => {
            var n = r("0Ghs"),
                o = Function.prototype.call;
            e.exports = n ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        Tff8: (e, t, r) => {
            var n = r("f8nr"),
                o = r("hKKO"),
                a = Function.prototype,
                i = n && Object.getOwnPropertyDescriptor,
                s = o(a, "name"),
                c = s && "something" === function() {}.name,
                u = s && (!n || n && i(a, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: c,
                CONFIGURABLE: u
            }
        },
        rioE: (e, t, r) => {
            var n = r("0Ghs"),
                o = Function.prototype,
                a = o.call,
                i = n && o.bind.bind(a, a);
            e.exports = n ? i : function(e) {
                return function() {
                    return a.apply(e, arguments)
                }
            }
        },
        O8fN: (e, t, r) => {
            var n = r("htmW"),
                o = r("/LHJ"),
                a = function(e) {
                    return o(e) ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? a(n[e]) : n[e] && n[e][t]
            }
        },
        WsRI: (e, t, r) => {
            var n = r("9xYj"),
                o = r("VzDr");
            e.exports = function(e, t) {
                var r = e[t];
                return o(r) ? void 0 : n(r)
            }
        },
        htmW: function(e, t, r) {
            var n = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n(window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                return this
            }() || this || Function("return this")()
        },
        hKKO: (e, t, r) => {
            var n = r("rioE"),
                o = r("Vir1"),
                a = n({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return a(o(e), t)
            }
        },
        "D/Aq": e => {
            e.exports = {}
        },
        jRkR: (e, t, r) => {
            var n = r("f8nr"),
                o = r("L1Gn"),
                a = r("LhkG");
            e.exports = !n && !o((function() {
                return 7 != Object.defineProperty(a("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        "mV/l": (e, t, r) => {
            var n = r("rioE"),
                o = r("L1Gn"),
                a = r("3Ckp"),
                i = Object,
                s = n("".split);
            e.exports = o((function() {
                return !i("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == a(e) ? s(e, "") : i(e)
            } : i
        },
        lFkn: (e, t, r) => {
            var n = r("rioE"),
                o = r("/LHJ"),
                a = r("vSaM"),
                i = n(Function.toString);
            o(a.inspectSource) || (a.inspectSource = function(e) {
                return i(e)
            }), e.exports = a.inspectSource
        },
        "3aPN": (e, t, r) => {
            var n, o, a, i = r("NW3L"),
                s = r("htmW"),
                c = r("nFBW"),
                u = r("SeAf"),
                l = r("hKKO"),
                p = r("vSaM"),
                f = r("17A7"),
                d = r("D/Aq"),
                g = "Object already initialized",
                v = s.TypeError,
                h = s.WeakMap;
            if (i || p.state) {
                var m = p.state || (p.state = new h);
                m.get = m.get, m.has = m.has, m.set = m.set, n = function(e, t) {
                    if (m.has(e)) throw v(g);
                    return t.facade = e, m.set(e, t), t
                }, o = function(e) {
                    return m.get(e) || {}
                }, a = function(e) {
                    return m.has(e)
                }
            } else {
                var b = f("state");
                d[b] = !0, n = function(e, t) {
                    if (l(e, b)) throw v(g);
                    return t.facade = e, u(e, b, t), t
                }, o = function(e) {
                    return l(e, b) ? e[b] : {}
                }, a = function(e) {
                    return l(e, b)
                }
            }
            e.exports = {
                set: n,
                get: o,
                has: a,
                enforce: function(e) {
                    return a(e) ? o(e) : n(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var r;
                        if (!c(t) || (r = o(t)).type !== e) throw v("Incompatible receiver, " + e + " required");
                        return r
                    }
                }
            }
        },
        "/LHJ": (e, t, r) => {
            var n = r("vciX"),
                o = n.all;
            e.exports = n.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === o
            } : function(e) {
                return "function" == typeof e
            }
        },
        n1w0: (e, t, r) => {
            var n = r("L1Gn"),
                o = r("/LHJ"),
                a = /#|\.prototype\./,
                i = function(e, t) {
                    var r = c[s(e)];
                    return r == l || r != u && (o(t) ? n(t) : !!t)
                },
                s = i.normalize = function(e) {
                    return String(e).replace(a, ".").toLowerCase()
                },
                c = i.data = {},
                u = i.NATIVE = "N",
                l = i.POLYFILL = "P";
            e.exports = i
        },
        VzDr: e => {
            e.exports = function(e) {
                return null === e || void 0 === e
            }
        },
        nFBW: (e, t, r) => {
            var n = r("/LHJ"),
                o = r("vciX"),
                a = o.all;
            e.exports = o.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : n(e) || e === a
            } : function(e) {
                return "object" == typeof e ? null !== e : n(e)
            }
        },
        imG2: e => {
            e.exports = !1
        },
        RTYJ: (e, t, r) => {
            var n = r("O8fN"),
                o = r("/LHJ"),
                a = r("kbQN"),
                i = r("lQr9"),
                s = Object;
            e.exports = i ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = n("Symbol");
                return o(t) && a(t.prototype, s(e))
            }
        },
        "C/5I": (e, t, r) => {
            var n = r("UvTh");
            e.exports = function(e) {
                return n(e.length)
            }
        },
        iYp9: (e, t, r) => {
            var n = r("rioE"),
                o = r("L1Gn"),
                a = r("/LHJ"),
                i = r("hKKO"),
                s = r("f8nr"),
                c = r("Tff8").CONFIGURABLE,
                u = r("lFkn"),
                l = r("3aPN"),
                p = l.enforce,
                f = l.get,
                d = String,
                g = Object.defineProperty,
                v = n("".slice),
                h = n("".replace),
                m = n([].join),
                b = s && !o((function() {
                    return 8 !== g((function() {}), "length", {
                        value: 8
                    }).length
                })),
                y = String(String).split("String"),
                _ = e.exports = function(e, t, r) {
                    "Symbol(" === v(d(t), 0, 7) && (t = "[" + h(d(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || c && e.name !== t) && (s ? g(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), b && r && i(r, "arity") && e.length !== r.arity && g(e, "length", {
                        value: r.arity
                    });
                    try {
                        r && i(r, "constructor") && r.constructor ? s && g(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (error) {}
                    var n = p(e);
                    return i(n, "source") || (n.source = m(y, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = _((function() {
                return a(this) && f(this).source || u(this)
            }), "toString")
        },
        Vu2e: e => {
            var t = Math.ceil,
                r = Math.floor;
            e.exports = Math.trunc || function(e) {
                var n = +e;
                return (n > 0 ? r : t)(n)
            }
        },
        xluy: (e, t, r) => {
            var n = r("f8nr"),
                o = r("jRkR"),
                a = r("lU+J"),
                i = r("tTsQ"),
                s = r("hm6+"),
                c = TypeError,
                u = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                p = "enumerable",
                f = "configurable",
                d = "writable";
            t.f = n ? a ? function(e, t, r) {
                if (i(e), t = s(t), i(r), "function" === typeof e && "prototype" === t && "value" in r && d in r && !r.writable) {
                    var n = l(e, t);
                    n && n.writable && (e[t] = r.value, r = {
                        configurable: f in r ? r.configurable : n.configurable,
                        enumerable: p in r ? r.enumerable : n.enumerable,
                        writable: !1
                    })
                }
                return u(e, t, r)
            } : u : function(e, t, r) {
                if (i(e), t = s(t), i(r), o) try {
                    return u(e, t, r)
                } catch (error) {}
                if ("get" in r || "set" in r) throw c("Accessors not supported");
                return "value" in r && (e[t] = r.value), e
            }
        },
        PSsl: (e, t, r) => {
            var n = r("f8nr"),
                o = r("SE89"),
                a = r("7dK1"),
                i = r("lFLE"),
                s = r("/1o8"),
                c = r("hm6+"),
                u = r("hKKO"),
                l = r("jRkR"),
                p = Object.getOwnPropertyDescriptor;
            t.f = n ? p : function(e, t) {
                if (e = s(e), t = c(t), l) try {
                    return p(e, t)
                } catch (error) {}
                if (u(e, t)) return i(!o(a.f, e, t), e[t])
            }
        },
        Qhjw: (e, t, r) => {
            var n = r("9QHQ"),
                o = r("XepZ").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return n(e, o)
            }
        },
        n9EI: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        },
        kbQN: (e, t, r) => {
            var n = r("rioE");
            e.exports = n({}.isPrototypeOf)
        },
        "9QHQ": (e, t, r) => {
            var n = r("rioE"),
                o = r("hKKO"),
                a = r("/1o8"),
                i = r("JXJY").indexOf,
                s = r("D/Aq"),
                c = n([].push);
            e.exports = function(e, t) {
                var r, n = a(e),
                    u = 0,
                    l = [];
                for (r in n) !o(s, r) && o(n, r) && c(l, r);
                for (; t.length > u;) o(n, r = t[u++]) && (~i(l, r) || c(l, r));
                return l
            }
        },
        "7dK1": (e, t) => {
            "use strict";
            var r = {}.propertyIsEnumerable,
                n = Object.getOwnPropertyDescriptor,
                o = n && !r.call({
                    1: 2
                }, 1);
            t.f = o ? function(e) {
                var t = n(this, e);
                return !!t && t.enumerable
            } : r
        },
        CzCt: (e, t, r) => {
            var n = r("SE89"),
                o = r("/LHJ"),
                a = r("nFBW"),
                i = TypeError;
            e.exports = function(e, t) {
                var r, s;
                if ("string" === t && o(r = e.toString) && !a(s = n(r, e))) return s;
                if (o(r = e.valueOf) && !a(s = n(r, e))) return s;
                if ("string" !== t && o(r = e.toString) && !a(s = n(r, e))) return s;
                throw i("Can't convert object to primitive value")
            }
        },
        ELNT: (e, t, r) => {
            var n = r("O8fN"),
                o = r("rioE"),
                a = r("Qhjw"),
                i = r("n9EI"),
                s = r("tTsQ"),
                c = o([].concat);
            e.exports = n("Reflect", "ownKeys") || function(e) {
                var t = a.f(s(e)),
                    r = i.f;
                return r ? c(t, r(e)) : t
            }
        },
        "4siQ": (e, t, r) => {
            var n = r("VzDr"),
                o = TypeError;
            e.exports = function(e) {
                if (n(e)) throw o("Can't call method on " + e);
                return e
            }
        },
        "17A7": (e, t, r) => {
            var n = r("vDgh"),
                o = r("qGbq"),
                a = n("keys");
            e.exports = function(e) {
                return a[e] || (a[e] = o(e))
            }
        },
        vSaM: (e, t, r) => {
            var n = r("htmW"),
                o = r("2ZLl"),
                a = "__core-js_shared__",
                i = n[a] || o(a, {});
            e.exports = i
        },
        vDgh: (e, t, r) => {
            var n = r("imG2"),
                o = r("vSaM");
            (e.exports = function(e, t) {
                return o[e] || (o[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.31.1",
                mode: n ? "pure" : "global",
                copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        GyT7: (e, t, r) => {
            var n = r("BcTq"),
                o = r("L1Gn"),
                a = r("htmW").String;
            e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var e = Symbol();
                return !a(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
            }))
        },
        cHg0: (e, t, r) => {
            var n = r("P+lJ"),
                o = Math.max,
                a = Math.min;
            e.exports = function(e, t) {
                var r = n(e);
                return r < 0 ? o(r + t, 0) : a(r, t)
            }
        },
        "/1o8": (e, t, r) => {
            var n = r("mV/l"),
                o = r("4siQ");
            e.exports = function(e) {
                return n(o(e))
            }
        },
        "P+lJ": (e, t, r) => {
            var n = r("Vu2e");
            e.exports = function(e) {
                var t = +e;
                return t !== t || 0 === t ? 0 : n(t)
            }
        },
        UvTh: (e, t, r) => {
            var n = r("P+lJ"),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(n(e), 9007199254740991) : 0
            }
        },
        Vir1: (e, t, r) => {
            var n = r("4siQ"),
                o = Object;
            e.exports = function(e) {
                return o(n(e))
            }
        },
        "7ijk": (e, t, r) => {
            var n = r("SE89"),
                o = r("nFBW"),
                a = r("RTYJ"),
                i = r("WsRI"),
                s = r("CzCt"),
                c = r("O2X7"),
                u = TypeError,
                l = c("toPrimitive");
            e.exports = function(e, t) {
                if (!o(e) || a(e)) return e;
                var r, c = i(e, l);
                if (c) {
                    if (void 0 === t && (t = "default"), r = n(c, e, t), !o(r) || a(r)) return r;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), s(e, t)
            }
        },
        "hm6+": (e, t, r) => {
            var n = r("7ijk"),
                o = r("RTYJ");
            e.exports = function(e) {
                var t = n(e, "string");
                return o(t) ? t : t + ""
            }
        },
        Oxe1: e => {
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (error) {
                    return "Object"
                }
            }
        },
        qGbq: (e, t, r) => {
            var n = r("rioE"),
                o = 0,
                a = Math.random(),
                i = n(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++o + a, 36)
            }
        },
        lQr9: (e, t, r) => {
            var n = r("GyT7");
            e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        "lU+J": (e, t, r) => {
            var n = r("f8nr"),
                o = r("L1Gn");
            e.exports = n && o((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        NW3L: (e, t, r) => {
            var n = r("htmW"),
                o = r("/LHJ"),
                a = n.WeakMap;
            e.exports = o(a) && /native code/.test(String(a))
        },
        O2X7: (e, t, r) => {
            var n = r("htmW"),
                o = r("vDgh"),
                a = r("hKKO"),
                i = r("qGbq"),
                s = r("GyT7"),
                c = r("lQr9"),
                u = n.Symbol,
                l = o("wks"),
                p = c ? u.for || u : u && u.withoutSetter || i;
            e.exports = function(e) {
                return a(l, e) || (l[e] = s && a(u, e) ? u[e] : p("Symbol." + e)), l[e]
            }
        },
        Bihu: (e, t, r) => {
            var n = r("AS9I"),
                o = r("htmW");
            n({
                global: !0,
                forced: o.globalThis !== o
            }, {
                globalThis: o
            })
        },
        "h+kG": (e, t, r) => {
            "use strict";

            function n(e) {
                return e && e.Math == Math ? e : void 0
            }
            r.d(t, {
                OW: () => o
            });
            const o = "object" == typeof globalThis && n(globalThis) || n(window) || "object" == typeof self && n(self) || "object" == typeof r.g && n(r.g) || function() {
                return this
            }() || {}
        },
        XGcN: function(e, t) {
            ! function(e) {
                "use strict";
                var t = function() {
                    return (t = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

                function r(e, t, r, n) {
                    return new(r = r || Promise)((function(o, a) {
                        function i(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function n(e, t) {
                    var r, n, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                    switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, n = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = i.trys).length && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || o[0] < a[1] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (s) {
                                    a = [6, s], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                }

                function o() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
                    return n
                }

                function a(e) {}
                var i, s = {
                        exposed: {
                            storeDispatch: function(e, t) {
                                console.warn("Warning: store not yet loaded")
                            },
                            storeGetState: function() {
                                console.warn("Warning: store not yet loaded")
                            },
                            dispatch: function(e) {
                                return this.storeDispatch(e)
                            },
                            createDispatcher: function(e, t) {
                                var o = this;
                                return function(a, i) {
                                    return r(o, void 0, Promise, (function() {
                                        var r;
                                        return n(this, (function(n) {
                                            return r = {
                                                type: e + "/" + t
                                            }, void 0 !== a && (r.payload = a), void 0 !== i && (r.meta = i), [2, this.dispatch(r)]
                                        }))
                                    }))
                                }
                            }
                        },
                        onStoreCreated: function(e) {
                            return this.storeDispatch = e.dispatch, this.storeGetState = e.getState, {
                                dispatch: this.dispatch
                            }
                        },
                        onModel: function(e) {
                            if (this.dispatch[e.name] = {}, e.reducers)
                                for (var t = 0, r = Object.keys(e.reducers); t < r.length; t++) {
                                    var n = r[t];
                                    this.validate([
                                        [!!n.match(/\/.+\//), "Invalid reducer name (" + e.name + "/" + n + ")"],
                                        ["function" != typeof e.reducers[n], "Invalid reducer (" + e.name + "/" + n + "). Must be a function"]
                                    ]), this.dispatch[e.name][n] = this.createDispatcher.call(this, e.name, n)
                                }
                        }
                    },
                    c = {
                        exposed: {
                            effects: {}
                        },
                        onModel: function(e) {
                            if (e.effects)
                                for (var t = "function" == typeof e.effects ? e.effects(this.dispatch) : e.effects, r = 0, n = Object.keys(t); r < n.length; r++) {
                                    var o = n[r];
                                    this.validate([
                                        [!!o.match(/\//), "Invalid effect name (" + e.name + "/" + o + ")"],
                                        ["function" != typeof t[o], "Invalid effect (" + e.name + "/" + o + "). Must be a function"]
                                    ]), this.effects[e.name + "/" + o] = t[o].bind(this.dispatch[e.name]), this.dispatch[e.name][o] = this.createDispatcher.call(this, e.name, o), this.dispatch[e.name][o].isEffect = !0
                                }
                        },
                        middleware: function(e) {
                            var t = this;
                            return function(o) {
                                return function(a) {
                                    return r(t, void 0, void 0, (function() {
                                        return n(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return a.type in this.effects ? [4, o(a)] : [3, 2];
                                                case 1:
                                                    return t.sent(), [2, this.effects[a.type](a.payload, e.getState(), a.meta)];
                                                case 2:
                                                    return [2, o(a)]
                                            }
                                        }))
                                    }))
                                }
                            }
                        }
                    };

                function u() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                }
                i = "undefined" != typeof self ? self : window;
                var l, p, f = ("function" == typeof(p = i.Symbol) ? p.observable ? l = p.observable : (l = p("observable"), p.observable = l) : l = "@@observable", l),
                    d = {
                        INIT: "@@redux/INIT" + u(),
                        REPLACE: "@@redux/REPLACE" + u(),
                        PROBE_UNKNOWN_ACTION: function() {
                            return "@@redux/PROBE_UNKNOWN_ACTION" + u()
                        }
                    };

                function g(e, t, r) {
                    var n;
                    if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                    if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
                        if ("function" != typeof r) throw Error("Expected the enhancer to be a function.");
                        return r(g)(e, t)
                    }
                    if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
                    var o = e,
                        a = t,
                        i = [],
                        s = i,
                        c = !1;

                    function u() {
                        s === i && (s = i.slice())
                    }

                    function l() {
                        if (c) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                        return a
                    }

                    function p(e) {
                        if ("function" != typeof e) throw Error("Expected the listener to be a function.");
                        if (c) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                        var t = !0;
                        return u(), s.push(e),
                            function() {
                                if (t) {
                                    if (c) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                                    t = !1, u();
                                    var r = s.indexOf(e);
                                    s.splice(r, 1), i = null
                                }
                            }
                    }

                    function v(e) {
                        if (! function(e) {
                                if ("object" == typeof e && null !== e) {
                                    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                    return Object.getPrototypeOf(e) === t
                                }
                            }(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
                        if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                        if (c) throw Error("Reducers may not dispatch actions.");
                        try {
                            c = !0, a = o(a, e)
                        } finally {
                            c = !1
                        }
                        for (var t = i = s, r = 0; r < t.length; r++)(0, t[r])();
                        return e
                    }
                    return v({
                        type: d.INIT
                    }), (n = {
                        dispatch: v,
                        subscribe: p,
                        getState: l,
                        replaceReducer: function(e) {
                            if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
                            o = e, v({
                                type: d.REPLACE
                            })
                        }
                    })[f] = function() {
                        var e, t = p;
                        return (e = {
                            subscribe: function(e) {
                                if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                                function r() {
                                    e.next && e.next(l())
                                }
                                return r(), {
                                    unsubscribe: t(r)
                                }
                            }
                        })[f] = function() {
                            return this
                        }, e
                    }, n
                }

                function v(e) {
                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                        var o = t[n];
                        "function" == typeof e[o] && (r[o] = e[o])
                    }
                    var a, i, s = Object.keys(r);
                    try {
                        Object.keys(i = r).forEach((function(e) {
                            var t = i[e];
                            if (void 0 === t(void 0, {
                                    type: d.INIT
                                })) throw Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if (void 0 === t(void 0, {
                                    type: d.PROBE_UNKNOWN_ACTION()
                                })) throw Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + d.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                        }))
                    } catch (e) {
                        a = e
                    }
                    return function(e, t) {
                        if (void 0 === e && (e = {}), a) throw a;
                        for (var n, o, i = !1, c = {}, u = 0; u < s.length; u++) {
                            var l = s[u],
                                p = e[l],
                                f = (0, r[l])(p, t);
                            if (void 0 === f) {
                                var d = "Given " + ((o = (n = t) && n.type) && 'action "' + o + '"' || "an action") + ', reducer "' + l + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
                                throw Error(d)
                            }
                            c[l] = f, i = i || f !== p
                        }
                        return (i = i || s.length !== Object.keys(e).length) ? c : e
                    }
                }

                function h(e, t) {
                    return function() {
                        return t(e.apply(this, arguments))
                    }
                }

                function m(e, t) {
                    var r = Object.keys(e);
                    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r
                }

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? m(r, !0).forEach((function(t) {
                            var n, o, a;
                            a = r[o = t], o in (n = e) ? Object.defineProperty(n, o, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[o] = a
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(r).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function y() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return 0 === t.length ? function(e) {
                        return e
                    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                        return function() {
                            return e(t.apply(void 0, arguments))
                        }
                    }))
                }

                function _() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return function(e) {
                        return function() {
                            var r = e.apply(void 0, arguments),
                                n = function() {
                                    throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                                },
                                o = {
                                    getState: r.getState,
                                    dispatch: function() {
                                        return n.apply(void 0, arguments)
                                    }
                                },
                                a = t.map((function(e) {
                                    return e(o)
                                }));
                            return b({}, r, {
                                dispatch: n = y.apply(void 0, a)(r.dispatch)
                            })
                        }
                    }
                }

                function w(e) {
                    void 0 === e && (e = {});
                    var t = e.disabled,
                        r = function(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && !~t.indexOf(n) && (r[n] = e[n]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) !~t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                            }
                            return r
                        }(e, ["disabled"]);
                    return !t && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(r) : y
                }
                var x = Object.freeze({
                    __proto__: null,
                    __DO_NOT_USE__ActionTypes: d,
                    applyMiddleware: _,
                    bindActionCreators: function(e, t) {
                        if ("function" == typeof e) return h(e, t);
                        if ("object" != typeof e || null === e) throw Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                        var r = {};
                        for (var n in e) {
                            var o = e[n];
                            "function" == typeof o && (r[n] = h(o, t))
                        }
                        return r
                    },
                    combineReducers: v,
                    compose: y,
                    createStore: g
                });

                function E(e) {
                    var r = this,
                        n = e.redux,
                        a = e.models,
                        i = n.combineReducers || v,
                        s = n.createStore || g,
                        c = void 0 !== n.initialState ? n.initialState : {};
                    this.reducers = n.reducers, this.mergeReducers = function(e) {
                        return void 0 === e && (e = {}), r.reducers = t(t({}, r.reducers), e), Object.keys(r.reducers).length ? i(r.reducers) : function(e) {
                            return e
                        }
                    }, this.createModelReducer = function(e) {
                        for (var t = e.baseReducer, n = {}, o = 0, a = Object.keys(e.reducers || {}); o < a.length; o++) {
                            var i = a[o],
                                s = ~i.indexOf("/") ? i : e.name + "/" + i;
                            n[s] = e.reducers[i]
                        }

                        function c(t, r) {
                            return void 0 === t && (t = e.state), "function" == typeof n[r.type] ? n[r.type](t, r.payload, r.meta) : t
                        }
                        r.reducers[e.name] = t ? function(e, r) {
                            return c(t(e, r), r)
                        } : c
                    };
                    for (var u = 0, l = a; u < l.length; u++) this.createModelReducer(l[u]);
                    this.createRootReducer = function(e) {
                        void 0 === e && (e = {});
                        var t = r.mergeReducers();
                        return Object.keys(e).length ? function(r, n) {
                            return t(e[n.type] ? (0, e[n.type])(r, n) : r, n)
                        } : t
                    };
                    var p = this.createRootReducer(n.rootReducers),
                        f = _.apply(x, n.middlewares),
                        d = w(n.devtoolOptions).apply(void 0, o(n.enhancers, [f]));
                    return this.store = s(p, c, d), this
                }
                var A = [s, c],
                    S = (k.prototype.forEachPlugin = function(e, t) {
                        for (var r = 0, n = this.plugins; r < n.length; r++) {
                            var o = n[r];
                            o[e] && t(o[e])
                        }
                    }, k.prototype.getModels = function(e) {
                        return Object.keys(e).map((function(r) {
                            return t(t({
                                name: r
                            }, e[r]), {
                                reducers: e[r].reducers || {}
                            })
                        }))
                    }, k.prototype.addModel = function(e) {
                        this.forEachPlugin("onModel", (function(t) {
                            return t(e)
                        }))
                    }, k.prototype.init = function() {
                        var e = this;
                        this.models = this.getModels(this.config.models);
                        for (var r = 0, n = this.models; r < n.length; r++) this.addModel(n[r]);
                        var o = E.call(this, {
                                redux: this.config.redux,
                                models: this.models
                            }),
                            a = t(t({
                                name: this.config.name
                            }, o.store), {
                                model: function(t) {
                                    e.addModel(t), o.mergeReducers(o.createModelReducer(t)), o.store.replaceReducer(o.createRootReducer(e.config.redux.rootReducers)), o.store.dispatch({
                                        type: "@@redux/REPLACE "
                                    })
                                }
                            });
                        return this.forEachPlugin("onStoreCreated", (function(e) {
                            var t = e(a);
                            t && Object.keys(t || {}).forEach((function(e) {
                                a[e] = t[e]
                            }))
                        })), a
                    }, k);

                function k(e) {
                    var t = this;
                    this.plugins = [], this.config = e, this.pluginFactory = {
                        config: e,
                        validate: a,
                        create: function(e) {
                            e.onInit && e.onInit.call(this);
                            var t = {};
                            if (e.exposed)
                                for (var r = 0, n = Object.keys(e.exposed); r < n.length; r++) {
                                    var o = n[r];
                                    this[o] = "function" == typeof e.exposed[o] ? e.exposed[o].bind(this) : Object.create(e.exposed[o])
                                }
                            for (var a = 0, i = ["onModel", "middleware", "onStoreCreated"]; a < i.length; a++) {
                                var s = i[a];
                                e[s] && (t[s] = e[s].bind(this))
                            }
                            return t
                        }
                    };
                    for (var r = 0, n = A.concat(this.config.plugins); r < n.length; r++) this.plugins.push(this.pluginFactory.create(n[r]));
                    this.forEachPlugin("middleware", (function(e) {
                        t.config.redux.middlewares.push(e)
                    }))
                }

                function O(e) {
                    console.warn(e)
                }

                function T(e, r) {
                    return r ? t(t({}, r), e || {}) : e || {}
                }

                function B(e) {
                    void 0 === e && (e = {});
                    var r = e.name || "" + P;
                    P += 1;
                    var n = function(e) {
                        for (var r = t(t({
                                name: e.name,
                                models: {},
                                plugins: []
                            }, e), {
                                redux: t(t({
                                    reducers: {},
                                    rootReducers: {},
                                    enhancers: [],
                                    middlewares: []
                                }, e.redux), {
                                    devtoolOptions: t({
                                        name: e.name
                                    }, e.redux && e.redux.devtoolOptions ? e.redux.devtoolOptions : {})
                                })
                            }), n = 0, a = r.plugins; n < a.length; n++) {
                            var i = a[n];
                            if (i.config) {
                                var s = T(r.models, i.config.models);
                                r.models = s, r.plugins = o(r.plugins, i.config.plugins || []), i.config.redux && (r.redux.initialState = T(r.redux.initialState, i.config.redux.initialState), r.redux.reducers = T(r.redux.reducers, i.config.redux.reducers), r.redux.rootReducers = T(r.redux.rootReducers, i.config.redux.reducers), r.redux.enhancers = o(r.redux.enhancers, i.config.redux.enhancers || []), r.redux.middlewares = o(r.redux.middlewares, i.config.redux.middlewares || []), r.redux.combineReducers = r.redux.combineReducers || i.config.redux.combineReducers, r.redux.createStore = r.redux.createStore || i.config.redux.createStore)
                            }
                        }
                        return r
                    }(t(t({}, e), {
                        name: r
                    }));
                    return new S(n).init()
                }
                var P = 0,
                    C = {
                        init: B
                    };
                e.createModel = function(e) {
                    return e
                }, e.default = C, e.dispatch = function() {
                    O("global dispatch has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.dispatch.")
                }, e.getState = function() {
                    O("global getState has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.getState.")
                }, e.init = B, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        cpeW: (e, t, r) => {
            "use strict";
            r("dKjp");
            r.g.pika = r.g.pika || {}, r.g.pika.version && "0.3.56" !== r.g.pika.version && console.error("Two versions of pika are loaded, please check the code. There may be potential risks.", r.g.pika.version, "0.3.56"), r.g.pika.version = r.g.pika.version || "0.3.56";
            try {
                r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
            } catch (n) {
                console.error("[@pika/plugin-http]", n)
            }
        },
        jJny: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => kr
            });
            var n = {};
            r.r(n), r.d(n, {
                cmsUI: () => ft,
                cookies: () => Te,
                global: () => ye,
                mpConfig: () => pt,
                mpUser: () => ut,
                persistSetting: () => it,
                products: () => Fe,
                ssrStore: () => Re,
                userCenter: () => Xe
            });
            var o = r("EGIz"),
                a = r("2ae6"),
                i = r("Pz56"),
                s = r.n(i),
                c = r("wIZF"),
                u = r("UCWY"),
                l = r("+HTX"),
                p = r("VP0d");
            var f = r("Dz1D");

            function d() {
                var e = (0, f.PC)().SENSORS_SERVER_HOST;
                if (e) return e
            }
            r("ofQG");

            function g() {
                var e = (0, f.PC)().STATIC_HOST;
                if (e) return e
            }
            var v = function(e) {
                var t = (0, f.PC)();
                return {
                    sensorsConfig: {
                        server_url: d(),
                        staticHost: g(),
                        publicParams: {
                            df_projectName: e.projectName,
                            df_etag: t.COMMIT_HEAD
                        }
                    },
                    autoLogin: e.autoLogin,
                    API_HOST: "",
                    identifyId: ""
                }
            };
            const h = function(e) {
                return (0, u.yO)({
                    appComponent: function(t) {
                        return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function n() {
                            var o;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (d()) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return", (console.log("[@pika/plugin-track] SENSORS_SERVER_HOST is not set, so the track data will not be uploaded."), t));
                                    case 2:
                                        o = v(e), (0, l.uz)(o);
                                        try {
                                            r.g.pika = r.g.pika || {}, r.g.pika.__REPORT_TRACK__ = r.g.pika.__REPORT_TRACK__ || [], r.g.pika.__REPORT_TRACK__.forEach((function(e) {
                                                var t = (0, p.A)(e, 3),
                                                    r = t[0],
                                                    n = t[1],
                                                    o = t[2];
                                                return (0, l.AC)({
                                                    eventName: r,
                                                    data: n,
                                                    options: o
                                                })
                                            })), r.g.pika.__REPORT_TRACK__.length = 0, r.g.pika.__REPORT_TRACK__.push = function(e) {
                                                var t = (0, p.A)(e, 3),
                                                    r = t[0],
                                                    n = t[1],
                                                    o = t[2];
                                                return (0, l.AC)({
                                                    eventName: r,
                                                    data: n,
                                                    options: o
                                                })
                                            }
                                        } catch (a) {
                                            console.error("[@pika/plugin-track] deprecatedTrackInit error", a)
                                        }
                                        return n.abrupt("return", t);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))
                    }
                })
            };
            var m = r("tEf9"),
                b = r("DTvD"),
                y = r.n(b),
                _ = r("AXwM"),
                w = r("2URn"),
                x = r("lmEU"),
                E = function(e) {
                    var t = e.data;
                    (0, x.z)({
                        data: {
                            data: t
                        },
                        key: "reportMonitorEvent"
                    })
                };

            function A(e, t, r) {
                (0, w.A)(e, Error) ? function(e) {
                    "undefined" !== typeof originalSentry && originalSentry.captureException(e)
                }(e) : "string" === typeof e ? t ? function(e) {
                    var t = e.data;
                    (0, x.z)({
                        data: {
                            data: t
                        },
                        key: "reportErrorEvent"
                    })
                }({
                    data: {
                        event: {
                            c: e,
                            bc: t,
                            extra: r
                        }
                    }
                }) : console.warn("reportError: message is required") : console.warn("reportError: invalid error type")
            }
            const S = "PIKA_WEB_VITALS",
                k = {
                    PIKA_CLS: {
                        name: "PAGE-CLS",
                        duration: !1
                    },
                    PIKA_FCP: {
                        name: "PAGE-FCP",
                        duration: !1
                    },
                    PIKA_LCP: {
                        name: "PAGE-LCP",
                        duration: !1
                    },
                    PIKA_FID: {
                        name: "PAGE-FID",
                        duration: !1
                    },
                    PIKA_INP: {
                        name: "PAGE-INP",
                        duration: !1
                    },
                    PIKA_TTFB: {
                        name: "PAGE-TTFB",
                        duration: !1
                    }
                },
                O = e => e.replace(/^\//, "").replace(/\/$/, ""),
                T = e => {
                    if (!e) return "";
                    try {
                        const t = e.map((e => {
                                const {
                                    route: t
                                } = e;
                                return {
                                    id: t.id,
                                    path: t.path
                                }
                            })),
                            {
                                length: r
                            } = e;
                        for (let a = r - 1; a >= 0; a--) {
                            const {
                                route: r
                            } = e[a], {
                                children: n,
                                path: o,
                                id: i
                            } = r;
                            (null === n || void 0 === n ? void 0 : n.length) && t.forEach((e => {
                                n.some((t => t.id === e.id)) && (e.path = `${O(o)}/${O(e.path)}`, e.id = i)
                            }))
                        }
                        const n = t[t.length - 1],
                            {
                                path: o
                            } = n;
                        return /^\//.test(o) ? o : `/${o}`
                    } catch (t) {
                        return ""
                    }
                };
            new class {
                constructor(e) {
                    this.capacity = e, this.cache = new Map
                }
                get(e) {
                    if (!this.cache.has(e)) return null;
                    const t = this.cache.get(e);
                    return this.cache.delete(e), this.cache.set(e, t), t
                }
                put(e, t) {
                    if (this.cache.has(e)) this.cache.delete(e);
                    else if (this.cache.size === this.capacity) {
                        const e = this.cache.keys().next().value;
                        this.cache.delete(e)
                    }
                    this.cache.set(e, t)
                }
            }(10);
            const B = window.requestIdleCallback || function(e, t = {
                    timeout: 3e3
                }) {
                    return setTimeout((() => {
                        e({
                            didTimeout: !1,
                            timeRemaining: () => 50
                        })
                    }), t.timeout)
                },
                P = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                };

            function C({
                remainingTime: e,
                timeout: t
            } = {
                remainingTime: 49,
                timeout: 2e3
            }) {
                return new Promise(((r, n) => {
                    let o;
                    const a = setTimeout((() => {
                        P && o && P(o), r()
                    }), t);

                    function i(t) {
                        t.timeRemaining() >= e ? (console.debug(`[awaitPageLoadAndIdle] Idle time remaining is >= ${e}ms`), clearTimeout(a), r()) : o = B(i)
                    }
                    const s = () => {
                        console.debug("[awaitPageLoadAndIdle] Page has just finished loading"), window.removeEventListener("load", s), o = B(i)
                    };
                    "complete" === document.readyState ? (console.debug("[awaitPageLoadAndIdle] Page is already loaded (document.readyState is complete)"), o = B(i)) : window.addEventListener("load", s)
                }))
            }
            var F = r("LJ4M");

            function R(e) {
                const t = (0, F.read)(e);
                return N(t) ? t : null
            }

            function N(e) {
                if ("string" !== typeof e) return !1;
                const t = /^[a-zA-Z0-9-_]+$/.test(e);
                return t || console.warn(`[@pika/utils] Invalid content: ${e}, it may contain XSS attack.`), t
            }
            var D = r("888e"),
                I = r("nG1z"),
                L = r("m+Lx");

            function j(e, t, r) {
                return j = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, L.A)(e)););
                        return e
                    }(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(r || e) : o.value
                    }
                }, j(e, t, r)
            }
            var M = r("2PCm"),
                H = r("VKAp"),
                U = r("oH+a"),
                G = {
                    componentStack: null,
                    error: null
                },
                W = function(e) {
                    (0, M.A)(r, e);
                    var t = (0, H.A)(r);

                    function r() {
                        var e;
                        return (0, D.A)(this, r), (e = t.call.apply(t, [this].concat(Array.prototype.slice.call(arguments)))).state = G, e.resetErrorBoundary = function() {
                            var t = e.props.onReset,
                                r = e.state,
                                n = r.error,
                                o = r.componentStack;
                            t && t(n, o), e.setState(G)
                        }, (0, U.A)(e)
                    }
                    return (0, I.A)(r, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            var r = t.componentStack,
                                n = this.props.onError;
                            n && n(e, r), this.setState({
                                error: e,
                                componentStack: r
                            }), console.log("ErrorBoundary caught an error:", e)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.onMount;
                            e && e()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.state,
                                t = e.error,
                                r = e.componentStack,
                                n = this.props.onUnmount;
                            n && n(t, r)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                r = t.fallback,
                                n = t.children,
                                o = this.state;
                            return o.error ? (e = "function" === typeof r ? r({
                                error: o.error,
                                componentStack: o.componentStack,
                                resetError: this.resetErrorBoundary
                            }) : r, b.isValidElement(e) ? e : null) : "function" === typeof n ? n() : n
                        }
                    }]), r
                }(b.Component);
            var z = function(e) {
                    (0, M.A)(r, e);
                    var t = (0, H.A)(r);

                    function r() {
                        return (0, D.A)(this, r), t.apply(this, arguments)
                    }
                    return (0, I.A)(r, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            var n, o, a, i = t.componentStack,
                                s = this.props.name;
                            "undefined" !== typeof originalSentry && function(e) {
                                try {
                                    switch (Object.prototype.toString.call(e)) {
                                        case "[object Error]":
                                        case "[object Exception]":
                                        case "[object DOMException]":
                                            return !0;
                                        default:
                                            return (0, w.A)(e, Error)
                                    }
                                } catch (W) {
                                    return !1
                                }
                            }(e) && originalSentry.captureException(e, (function(t) {
                                var r;
                                return t.setExtra("componentStack", i), t.setLevel("fatal"), t.setTag("component", s || "ErrorBoundary ".concat(e.message)), t.setExtra("html-className", null === (r = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === r ? void 0 : r.className), t
                            })), (n = (0, L.A)(r.prototype), o = "componentDidCatch", a = this, j(n, o, a)).call(this, e, {
                                componentStack: i
                            })
                        }
                    }]), r
                }(W),
                V = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = function(r) {
                            return y().createElement(z, Object.assign({}, t), y().createElement(e, Object.assign({}, r)))
                        },
                        n = t.name;
                    return n && (r.displayName = n), r
                };

            function q() {
                var e = (0, f.PC)().STATIC_HOST_SHARE;
                if (e) return e
            }
            var K = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = (0, _.K7)(),
                            o = n.matches;
                        return b.useEffect((function() {
                            try {
                                r.g.pika = r.g.pika || {}, r.g.pika.currentPath = T(o)
                            } catch (e) {}
                        }), [o]), b.createElement(e, Object.assign({}, t))
                    }
                },
                $ = !1;
            const Q = function(e) {
                return (0, u.yO)({
                    appComponent: function(e) {
                        return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                            var n, o, a;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return $ || ((n = q()) ? o = "".concat(n, "/unpkg/monitor/reporter-sdk@").concat(window._bn_reporter_version, ".js") : console.error("[@pika/plugin-monitor] STATIC_HOST_SHARE is not set."), a = function() {
                                            if (o) {
                                                var e = document.createElement("script");
                                                e.src = o, e.id = "Reporter-sdk", e.defer = !0, document.body.appendChild(e), $ = !0
                                            }
                                        }, C({
                                            remainingTime: 49,
                                            timeout: 1e4
                                        }).then(a)), t.abrupt("return", K(V(e, {
                                            onMount: function() {
                                                r.g.pika = r.g.pika || {}, r.g.pika.__REPORT_ERRORS__ = r.g.pika.__REPORT_ERRORS__ || [], r.g.pika.__REPORT_ERRORS__.forEach((function(e) {
                                                    return A.apply(void 0, (0, m.A)(e))
                                                })), r.g.pika.__REPORT_ERRORS__.length = 0, r.g.pika.__REPORT_ERRORS__.push = function(e) {
                                                    return A.apply(void 0, (0, m.A)(e))
                                                }, r.g.pika.__REPORT_MONITOR_EVENTS__ = r.g.pika.__REPORT_MONITOR_EVENTS__ || [], r.g.pika.__REPORT_MONITOR_EVENTS__.forEach((function(e) {
                                                    return E.apply(void 0, (0, m.A)(e))
                                                })), r.g.pika.__REPORT_MONITOR_EVENTS__.length = 0, r.g.pika.__REPORT_MONITOR_EVENTS__.push = function(e) {
                                                    return E.apply(void 0, (0, m.A)(e))
                                                }
                                            },
                                            name: "RootErrorBoundary",
                                            fallback: b.createElement(e, null)
                                        })));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }
                })
            };

            function Y(e) {
                return !!e && /^\d+\.\d+\.\d+$/.test(e)
            }
            var J = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, b.useEffect)((function() {
                        var e = null;
                        try {
                            e = setTimeout((function() {
                                ! function() {
                                    var e, t;
                                    Y(null === (e = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === e ? void 0 : e.version) || console.error("[Risk][pika] You are using an unstable version of pika, please use the official released version.", null === (t = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === t ? void 0 : t.version)
                                }()
                            }), 5e3)
                        } catch (t) {}
                        return function() {
                            e && clearTimeout(e)
                        }
                    }), []), y().createElement(e, Object.assign({}, t))
                }
            };
            var Z = r("E0uk");

            function X() {
                var e, t, n;
                r.g.pika = r.g.pika || {}, r.g.pika.__REQUEST_INTERCEPTORS__ = r.g.pika.__REQUEST_INTERCEPTORS__ || [], null === (e = r.g.pika.__REQUEST_INTERCEPTORS__) || void 0 === e || e.forEach((function(e) {
                    return Z.addRequestInterceptor(e)
                })), r.g.pika.__REQUEST_INTERCEPTORS__.length = 0, r.g.pika.__REQUEST_INTERCEPTORS__.push = function(e) {
                    return Z.addRequestInterceptor(e)
                }, r.g.pika.__RESPONSE_INTERCEPTORS__ = r.g.pika.__RESPONSE_INTERCEPTORS__ || [], null === (t = r.g.pika.__RESPONSE_INTERCEPTORS__) || void 0 === t || t.forEach((function(e) {
                    return Z.addResponseInterceptor(e)
                })), r.g.pika.__RESPONSE_INTERCEPTORS__.length = 0, r.g.pika.__RESPONSE_INTERCEPTORS__.push = function(e) {
                    return Z.addResponseInterceptor(e)
                }, r.g.pika.__RESULT_INTERCEPTORS__ = r.g.pika.__RESULT_INTERCEPTORS__ || [], null === (n = r.g.pika.__RESULT_INTERCEPTORS__) || void 0 === n || n.forEach((function(e) {
                    return Z.addResultInterceptor(e)
                })), r.g.pika.__RESULT_INTERCEPTORS__.length = 0, r.g.pika.__RESULT_INTERCEPTORS__.push = function(e) {
                    return Z.addResultInterceptor(e)
                }
            }
            var ee = function() {
                    try {
                        r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
                    } catch (e) {
                        console.error("[@pika/plugin-http]", e)
                    }
                },
                te = !1;
            const re = function() {
                return (0, u.yO)({
                    init: function() {
                        return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        te || (te = !0, ee(), X(), "function" === typeof r.g.__HTTP_MODULE_DEFER_RESOLVE__ && r.g.__HTTP_MODULE_DEFER_RESOLVE__(), r.g.pika = r.g.pika || {}, r.g.pika.__HTTP_MODULE__ = r.g.pika.__HTTP_MODULE__ || {
                                            _config: Z._config,
                                            get: Z.get,
                                            post: Z.post,
                                            put: Z.put,
                                            del: Z.del,
                                            postForm: Z.postForm,
                                            upload: Z.upload,
                                            uploadHandler: Z.uploadHandler
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                }, {
                    name: "@pika/plugin-http"
                })
            };
            var ne = r("NVnN"),
                oe = r("XGcN"),
                ae = r("sViW"),
                ie = r("5vN2"),
                se = r("eZh5"),
                ce = r("VA12"),
                ue = function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n, o, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.platform, n = t.currency, o = {
                                        headers: {
                                            "bnc-currency": n
                                        }
                                    }, e.next = 4, (0, ce.get)("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check?platform=".concat(null === r || void 0 === r ? void 0 : r.toUpperCase()), o);
                                case 4:
                                    return a = e.sent.data, e.abrupt("return", a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                le = (function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n, o, a, i;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.address, n = t.tagOrMemo, o = t.type, a = {
                                        type: void 0 === o ? "FR_WITHDRAW_AFFIRM" : o,
                                        formValueReq: {
                                            address: r,
                                            tagOrMemo: n
                                        }
                                    }, e.next = 4, (0, ce.post)("/bapi/compliance/v1/private/compliance/market/getComplianceDynamicForm", a);
                                case 4:
                                    return i = e.sent, e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, ce.post)("/bapi/compliance/v1/private/compliance/market/saveStatus", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("BK7R")),
                pe = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                fe = function(e, t) {
                    return (0, le.A)({}, e, t)
                },
                de = [],
                ge = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return (t || []).forEach((function(e) {
                        "function" === typeof e && de.push(e)
                    }))
                },
                ve = r("QUKP"),
                he = r("vpUY"),
                me = {
                    metaTitle: "Binance",
                    metaKeyword: "Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance",
                    metaDescription: "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume",
                    ogImage: ""
                },
                be = function(e) {
                    var t = e.withHeader,
                        r = e.withFooter,
                        n = e.withChat,
                        o = (0, he.S)(window.navigator.userAgent).isHybrid;
                    return (0, ve.A)((0, le.A)({}, e), {
                        isHybrid: o,
                        withChat: n && !o,
                        withHeader: t && !o,
                        withFooter: r && !o
                    })
                };
            ge((function(e, t) {
                return "global" in t && (e.global = be(e.global || {})), e
            }));
            const ye = {
                name: "global",
                state: {
                    origin: "",
                    url: "",
                    path: "",
                    host: "",
                    dir: "ltr",
                    metaData: me,
                    region: "",
                    isHybrid: !1,
                    withChat: !0,
                    withHeader: !0,
                    withFooter: !0,
                    withCompliance: !0,
                    restrictedBusinessKeys: [],
                    noticeInfo: null,
                    pageLayout: 1248
                },
                reducers: {
                    updateState: fe,
                    checkClientType: be
                },
                effects: {
                    queryRegion: function() {
                        return (0, ae.A)(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, ie.Xf)();
                                    case 3:
                                        t = e.sent, this.updateState({
                                            region: null === t || void 0 === t ? void 0 : t.toLowerCase()
                                        }), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 7]
                            ])
                        }))).apply(this)
                    },
                    queryMetaData: function(e) {
                        return (0, ae.A)(s().mark((function t() {
                            var r, n, o, a, i, c, u;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, r = e.i18nHost, n = e.namespace, o = void 0 === n ? "base-seo-meta" : n, a = e.language, i = void 0 === a ? "en" : a, t.next = 4, (0, se.JF)({
                                            i18nHost: r,
                                            namespace: o,
                                            language: i,
                                            fallback: "en"
                                        });
                                    case 4:
                                        (c = t.sent) && Object.keys(c).length > 0 && (u = {
                                            ogImage: e.ogImage,
                                            title: c.mateTitle || me.metaTitle,
                                            keywords: c.metaKeyword || me.metaKeyword,
                                            description: c.metaDescription || me.metaDescription
                                        }, this.updateState({
                                            metaData: u
                                        })), t.next = 10;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 8]
                            ])
                        }))).apply(this)
                    },
                    queryRestrictedBusinessKeys: function(e) {
                        return (0, ae.A)(s().mark((function t() {
                            var r, n, o;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, ue({
                                            platform: "WEB",
                                            currency: null !== e && void 0 !== e ? e : "USD"
                                        });
                                    case 3:
                                        (r = t.sent) && r.success ? this.updateState({
                                            restrictedBusinessKeys: null !== (o = null === r || void 0 === r || null === (n = r.restriction) || void 0 === n ? void 0 : n.keys) && void 0 !== o ? o : []
                                        }) : this.updateState({
                                            restrictedBusinessKeys: []
                                        }), t.next = 9;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 7]
                            ])
                        }))).apply(this)
                    }
                }
            };
            var _e = r("zJWh"),
                we = r("a59x"),
                xe = function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "en", r = (0, we.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, ce.get)(r);
                                case 4:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Ee = (function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "en", r = (0, we.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, ce.get)(r);
                                case 4:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, we.Eg)("/bapi/apex/v1/public/apex/marketing/recommend/hotAsset/list", t), e.next = 3, (0, ce.get)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("ezuS")),
                Ae = "USD_USD",
                Se = "userPreferredCurrency",
                ke = function(e, t) {
                    return e === Se ? /_USD$/i.test(t) ? t : Ae : t
                },
                Oe = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!pe(t)) return e;
                        var r = _e.U.read(t);
                        return (0, ve.A)((0, le.A)({}, e), (0, Ee.A)({}, t, ke(t, r)))
                    }), e)
                };
            ge((function(e, t) {
                if ("cookies" in t) {
                    var r = [Se, "shouldPublicAssets"];
                    e.cookies = Oe(e.cookies || {}, r)
                }
                return e
            }));
            const Te = {
                name: "cookies",
                state: {
                    theme: "light",
                    userPreferredCurrency: Ae
                },
                reducers: {
                    updateState: fe,
                    batchLoad: function(e, t) {
                        return Oe(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!pe(t.key)) return e;
                            var r = ke(t.key, t.value);
                            return _e.U.write(t.key, r), (0, ve.A)((0, le.A)({}, e), (0, Ee.A)({}, t.key, r))
                        }), e)
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return Oe(e, [r])
                    }
                },
                effects: {
                    loadCurrency: function(e) {
                        return (0, ae.A)(s().mark((function t() {
                            var r, n, o, a;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = _e.U.read(Se), t.prev = 1, !r || "false" === r) {
                                            t.next = 6;
                                            break
                                        }
                                        t.t0 = {
                                            currency: r
                                        }, t.next = 9;
                                        break;
                                    case 6:
                                        return t.next = 8, xe(e);
                                    case 8:
                                        t.t0 = t.sent;
                                    case 9:
                                        n = t.t0, o = n.currency, a = void 0 === o ? Ae : o, this.save({
                                            key: Se,
                                            value: a
                                        }), t.next = 17;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t1 = t.catch(1);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 15]
                            ])
                        }))).apply(this)
                    },
                    loadBasisTimeZone: function() {
                        return (0, ae.A)(s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            };
            var Be = function() {
                    var e = (0, ae.A)(s().mark((function e(t, r) {
                        var n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, we.Eg)("/bapi/asset/v2/public/asset-service/product/get-products", t || {}), e.next = 3, (0, ce.get)(n, r);
                                case 3:
                                    return o = e.sent.data, e.abrupt("return", o);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Pe = function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "", e.next = 3, (0, ce.get)("".concat(t, "/bapi/asset/v1/public/asset-service/product/currency"));
                                case 3:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Ce = (function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {}, e.prev = 1, e.next = 4, (0, ce.get)("/bapi/asset/v1/public/asset-service/product/get-exchange-info?symbol=".concat(t));
                                case 4:
                                    n = e.sent.data, Array.isArray(n) && n.length > 0 && (r = n[0]), e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1);
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, ce.get)("/bapi/asset/v1/public/asset-service/product/price-convert?".concat((0, we.E2)(t)));
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, ce.get)((0, we.Eg)("/bapi/asset/v1/public/asset-service/product/get-exchange-info", t || {})));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e, t) {
                    var r = Object.keys(e);
                    return function(n) {
                        return r.reduce((function(r, o) {
                            return "undefined" !== typeof n[o] && (r[t ? e[o] : o] = n[o]), r
                        }), {})
                    }
                }({
                    l: "low",
                    c: "close",
                    h: "high",
                    o: "open",
                    v: "volume",
                    qv: "quoteVolume",
                    s: "symbol",
                    ts: "tickSize",
                    i: "minQty",
                    q: "quoteAsset",
                    b: "baseAsset",
                    qn: "quoteName",
                    an: "baseAssetName",
                    pm: "parentMarket",
                    pn: "parentMarketName",
                    cs: "circulatingSupply",
                    hd: "hidden",
                    tags: "tags",
                    etf: "etf"
                }, !0));
            const Fe = {
                    name: "products",
                    state: {
                        loading: !0,
                        productMap: {},
                        hotProduct: [],
                        updateTime: Date.now()
                    },
                    reducers: {
                        updateState: fe
                    },
                    effects: {
                        queryProduct: function(e) {
                            var t = e.includeEtf,
                                r = e.headers;
                            return (0, ae.A)(s().mark((function e() {
                                var n, o, a, i;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = !1, e.prev = 1, e.next = 4, Be({
                                                includeEtf: t
                                            }, r);
                                        case 4:
                                            o = e.sent, a = Array.isArray(o) ? o : [], i = a.filter((function(e) {
                                                return !1 === e.sd
                                            })).reduce((function(e, t) {
                                                return t.s && (e[t.s] = Ce(t)), e
                                            }), {}), this.updateState({
                                                productMap: i,
                                                loading: n,
                                                updateTime: Date.now()
                                            }), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(1), this.updateState({
                                                loading: n
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 10]
                                ])
                            }))).apply(this)
                        }
                    }
                },
                Re = {
                    state: {},
                    name: "ssrStore",
                    reducers: {
                        updateState: fe
                    }
                };
            var Ne = r("gZfF"),
                De = r("oFD3"),
                Ie = r("fdP6"),
                Le = "ASSET_CONVERSION_PREFERENCE",
                je = function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, ce.post)("/bapi/accounts/v1/private/account/user-config/get", {
                                        needLocalRecommend: !0
                                    });
                                case 2:
                                    return t = e.sent, r = t.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Me = function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configName, n = t.configType, e.next = 3, (0, ce.post)("/bapi/accounts/v1/private/account/user-config/save", {
                                        configName: r,
                                        configType: n
                                    });
                                case 3:
                                    return o = e.sent, e.abrupt("return", o);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                He = (function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, ce.post)("/bapi/accounts/v1/private/account/user-personal-config/withdrawal-whitelist", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, ce.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
                                        configType: Le
                                    });
                                case 2:
                                    return t = e.sent, r = t.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                Ue = (function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configValue, e.next = 3, (0, ce.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
                                        configValue: r,
                                        configType: Le
                                    });
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, e.prev = 1, e.next = 4, (0, ce.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
                                        configType: r
                                    });
                                case 4:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", null);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, ae.A)(s().mark((function e(t) {
                        var r, n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, n = t.configValue, e.next = 3, (0, ce.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
                                        configValue: n,
                                        configType: r
                                    });
                                case 3:
                                    return o = e.sent, e.abrupt("return", o);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return (0, ce.get)((0, we.Eg)("/bapi/apex/v1/public/apex/marketing/web/querylangMappingByKey", {
                        key: e
                    }))
                }),
                Ge = r("tbM7"),
                We = r("BMJD"),
                ze = function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        convertEnabled: !1,
                                        assetDetails: []
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            (function() {
                var e = (0, ae.A)(s().mark((function e() {
                    var t, r, n = arguments;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, ce.post)("/bapi/futures/v1/private/future/account/open", t);
                            case 5:
                                r = e.sent, e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(2), r = {
                                    success: !1
                                };
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8]
                    ])
                })))
            })(),
            function() {
                var e = (0, ae.A)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, ce.post)("/bapi/futures/v1/private/future/agent/agentcode/get"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var Ve, qe = function() {
                var e = (0, ae.A)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, ce.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-basic"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (function() {
                var e = (0, ae.A)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, ce.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-detail"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, ae.A)(s().mark((function e() {
                    var t;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, ce.get)("/bapi/accounts/v1/private/account/futures-account-exist");
                            case 4:
                                (t = e.sent).success && t.data && (t.data.isExistFutureAccount = t.data.existFutureAccount), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: {
                                        existFutureAccount: !1,
                                        isExistFutureAccount: !1
                                    }
                                };
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }();
            Ve = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            }() ? window.localStorage : function() {
                var e = {};
                return {
                    setItem: function(t, r) {
                        e[t] = r
                    },
                    getItem: function(t) {
                        return e[t] || null
                    },
                    removeItem: function(t) {
                        delete e[t]
                    }
                }
            }();
            var Ke = function(e, t, r) {
                    try {
                        Ve.setItem(e, r ? String(t) : JSON.stringify(t))
                    } catch (n) {}
                },
                $e = function(e, t, r) {
                    try {
                        var n = Ve.getItem(e);
                        if ("string" !== typeof n) throw Ke(e, t, r), new Error("init ".concat(e, " - values"));
                        return r ? n : JSON.parse(n || "null")
                    } catch (o) {
                        return t
                    }
                },
                Qe = Ke,
                Ye = $e,
                Je = "nativeCurrency",
                Ze = function() {
                    var e = (0, ae.A)(s().mark((function e() {
                        var t, r, n, o, a, i, c, u, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = {
                                        nicknameQueryType: "NORMAL"
                                    }, e.t0 = p.A, e.next = 5, Promise.all([(0, De.vK)(t), (0, Ie.b$)()]);
                                case 5:
                                    return e.t1 = e.sent, r = (0, e.t0)(e.t1, 2), n = r[0], o = r[1], a = (null === n || void 0 === n ? void 0 : n.data) || {}, i = a.avatarUrl, c = a.nickname, u = (o || {}).userComplianceStatus, l = void 0 === u ? {} : u, e.abrupt("return", (0, ve.A)((0, le.A)({}, l), {
                                        avatarUrl: i,
                                        nickname: c
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
                }();
            const Xe = {
                name: "userCenter",
                state: {
                    userInfo: {},
                    pmAccountInfo: {},
                    languageMap: {},
                    fiatCurrencyInfo: [],
                    userPreferredCurrency: {},
                    fiatCurrency: {
                        USD: {
                            pair: "USD_USD",
                            rate: 1,
                            symbol: "$"
                        }
                    },
                    loginStatus: {
                        isLoggedIn: void 0,
                        isLoading: !0
                    },
                    userContract: {
                        convertEnabled: void 0,
                        assetDetails: []
                    },
                    userQuoteAsset: "BTC",
                    userBncLocation: "BINANCE"
                },
                reducers: {
                    updateState: fe,
                    updateCurrentFiat: function(e, t) {
                        return !window.__RUN_BY_ELECTRON__ && e.loginStatus.isLoggedIn && Me({
                            configType: Je,
                            configName: t
                        }), (0, ve.A)((0, le.A)({}, e), {
                            userPreferredCurrency: {
                                configName: t
                            }
                        })
                    }
                },
                effects: {
                    queryLanguage: function(e) {
                        return (0, ae.A)(s().mark((function t() {
                            var r, n;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Ue(e);
                                    case 3:
                                        r = t.sent, (n = r.data) && this.updateState({
                                            languageMap: n
                                        }), t.next = 10;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 8]
                            ])
                        }))).apply(this)
                    },
                    checkLogin: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, (0, Ge.CY)();
                                    case 4:
                                        t = e.sent, this.updateState({
                                            loginStatus: {
                                                isLoggedIn: t,
                                                isLoading: !1
                                            }
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    queryCurrency: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = (0, le.A)({}, r.fiatCurrency), e.next = 4, Pe();
                                    case 4:
                                        n = e.sent, o = n.reduce((function(e, r) {
                                            var n = r.pair,
                                                o = r.rate,
                                                a = r.symbol,
                                                i = (0, p.A)(n.split("_"), 2),
                                                s = i[0];
                                            return "USD" === i[1] && (t[s] = {
                                                pair: n,
                                                rate: o,
                                                symbol: a
                                            }, e.push({
                                                name: s,
                                                pair: n,
                                                rate: o,
                                                symbol: a
                                            })), e
                                        }), []).concat({
                                            name: "USD",
                                            pair: "USD_USD",
                                            rate: 1,
                                            symbol: "$"
                                        }), this.updateState({
                                            fiatCurrency: t,
                                            fiatCurrencyInfo: o,
                                            currencyList: n
                                        }), e.next = 11;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 9]
                            ])
                        }))).apply(this)
                    },
                    queryUserInfo: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.t0 = p.A, e.next = 6, Promise.all([Ze(), (0, We.Tc)()]);
                                    case 6:
                                        e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), n = t[0], o = t[1], this.updateState({
                                            userInfo: (0, ve.A)((0, le.A)({}, o, n), {
                                                fetched: !0
                                            })
                                        }), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t2 = e.catch(2), this.updateState({
                                            loginStatus: {
                                                isLoggedIn: !1
                                            }
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 13]
                            ])
                        }))).apply(this)
                    },
                    queryUserConfig: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o, a, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (!window.__RUN_BY_ELECTRON__) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, je();
                                    case 7:
                                        t = e.sent, n = 0;
                                    case 9:
                                        if (!(n < t.length)) {
                                            e.next = 17;
                                            break
                                        }
                                        if (o = t[n] || {}, a = o.configType, i = o.configName, a !== Je) {
                                            e.next = 14;
                                            break
                                        }
                                        return this.updateState({
                                            userPreferredCurrency: {
                                                configName: i
                                            }
                                        }), e.abrupt("return", !0);
                                    case 14:
                                        n++, e.next = 9;
                                        break;
                                    case 17:
                                        e.next = 21;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(4);
                                    case 21:
                                        return e.abrupt("return", !1);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [4, 19]
                            ])
                        }))).apply(this)
                    },
                    queryUserContract: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, ze();
                                    case 5:
                                        t = e.sent, this.updateState({
                                            userContract: t
                                        }), e.next = 11;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2);
                                    case 11:
                                        return e.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 9]
                            ])
                        }))).apply(this)
                    },
                    queryUserQuoteAsset: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, t = Ye("userQuoteAsset", "BTC"), this.updateState({
                                            userQuoteAsset: t
                                        }), e.next = 7, He();
                                    case 7:
                                        n = e.sent, (o = null === n || void 0 === n ? void 0 : n.configValue) && (this.updateState({
                                            userQuoteAsset: o
                                        }), Qe("userQuoteAsset", o)), e.next = 14;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 12]
                            ])
                        }))).apply(this)
                    },
                    queryPMAccount: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o, a, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, qe();
                                    case 5:
                                        if (e.t0 = e.sent, e.t0) {
                                            e.next = 8;
                                            break
                                        }
                                        e.t0 = {};
                                    case 8:
                                        t = e.t0.data, o = (n = t || {}).enable, a = n.isRetailUser, i = (0, Ne.A)(n, ["enable", "isRetailUser"]), this.updateState({
                                            pmAccountInfo: (0, le.A)({
                                                isGeneralAccount: !o,
                                                isOldPMAccount: o && !a,
                                                isNewPMAccount: o && a
                                            }, i)
                                        }), e.next = 15;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t1 = e.catch(2);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 13]
                            ])
                        }))).apply(this)
                    },
                    queryUserBNCLocation: function(e, t) {
                        var r = t.userCenter;
                        return (0, ae.A)(s().mark((function e() {
                            var t, n, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (t = _e.U.read("BNC-Location"), e.prev = 3, !t) {
                                            e.next = 8;
                                            break
                                        }
                                        this.updateState({
                                            userBncLocation: t
                                        }), e.next = 14;
                                        break;
                                    case 8:
                                        return e.next = 10, (0, ce.get)("/bapi/accounts/v1/private/account/compliance/getBncLocation");
                                    case 10:
                                        n = e.sent.data, o = (n || {}).bncLocation, this.updateState({
                                            userBncLocation: o
                                        }), _e.U.write("BNC-Location", o);
                                    case 14:
                                        e.next = 18;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(3);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 16]
                            ])
                        }))).apply(this)
                    }
                }
            };
            var et, tt = "favorites",
                rt = "isHideSmallBalance",
                nt = "maskedBalance",
                ot = function(e, t) {
                    switch (e) {
                        case tt:
                            return Array.isArray(t) ? t : [];
                        case nt:
                        case rt:
                            return t && "false" !== t;
                        default:
                            return t
                    }
                },
                at = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!pe(t)) return e;
                        var r = Ye(t, "");
                        return (0, ve.A)((0, le.A)({}, e), (0, Ee.A)({}, t, ot(t, r)))
                    }), e || {})
                };
            ge((function(e, t) {
                if ("persistSetting" in t) {
                    var r = [nt, rt, tt];
                    e.persistSetting = at(e.persistSetting, r)
                }
                return e
            }));
            const it = {
                name: "persistSetting",
                state: (et = {}, (0, Ee.A)(et, tt, []), (0, Ee.A)(et, rt, !1), (0, Ee.A)(et, nt, !1), et),
                reducers: {
                    updateState: fe,
                    batchLoadSetting: function(e, t) {
                        return at(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!pe(t.key)) return e;
                            var r = ot(t.key, t.value);
                            return Qe(t.key, r), (0, ve.A)((0, le.A)({}, e), (0, Ee.A)({}, t.key, r))
                        }), e || {})
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return at(e, [r])
                    }
                }
            };
            var st = r("Bk23"),
                ct = r("rEBH");
            const ut = (0, oe.createModel)({
                name: "mpUser",
                state: {
                    firstLoad: !0,
                    isLoading: !0,
                    isLoggedIn: !1
                },
                reducers: {
                    updateState: function(e, t) {
                        return (0, le.A)({}, e, t)
                    }
                },
                effects: function() {
                    return {
                        loadMpUser: function(e, t) {
                            return (0, ae.A)(s().mark((function e() {
                                var r, n;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st.g && t.mpUser.firstLoad) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return r = !1, e.prev = 3, this.updateState((0, ve.A)((0, le.A)({}, t.mpUser), {
                                                firstLoad: !1,
                                                isLoading: !0
                                            })), e.next = 7, ct.FJ.isLoggedIn();
                                        case 7:
                                            n = e.sent, r = n.result, e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(3), console.error(e.t0);
                                        case 14:
                                            return e.prev = 14, this.updateState({
                                                firstLoad: !1,
                                                isLoading: !1,
                                                isLoggedIn: r
                                            }), e.finish(14);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [3, 11, 14, 17]
                                ])
                            }))).apply(this)
                        }
                    }
                }
            });
            var lt;
            const pt = (0, oe.createModel)({
                    name: "mpConfig",
                    state: {
                        firstLoad: !0,
                        theme: (null === (lt = ct.FJ.getAppBaseInfo()) || void 0 === lt ? void 0 : lt.theme) || "light"
                    },
                    reducers: {
                        updateState: function(e, t) {
                            return (0, le.A)({}, e, t)
                        }
                    },
                    effects: function() {
                        return {
                            loadTheme: function(e, t) {
                                return (0, ae.A)(s().mark((function e() {
                                    var r;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = this, st.g && t.mpConfig.firstLoad) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                ct.FJ.onThemeChange((function(e) {
                                                    var n = e.theme.toLowerCase();
                                                    r.updateState((0, ve.A)((0, le.A)({}, t.mpConfig), {
                                                        theme: n
                                                    }))
                                                })), this.updateState((0, ve.A)((0, le.A)({}, t.mpConfig), {
                                                    firstLoad: !1
                                                }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                }))).apply(this)
                            }
                        }
                    }
                }),
                ft = (0, oe.createModel)({
                    name: "cmsUI",
                    state: {
                        activePath: ""
                    },
                    reducers: {
                        updateActivePath: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            return (0, ve.A)((0, le.A)({}, e), {
                                activePath: t
                            })
                        }
                    }
                });
            const dt = function(e) {
                return (0, oe.init)({
                    models: n,
                    plugins: [],
                    redux: {
                        initialState: e
                    }
                })
            };
            var gt = r("/OND"),
                vt = function(e, t) {
                    var r = function(r) {
                        return y().createElement(gt.Kq, {
                            store: t.redux
                        }, y().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "ReduxAppWrapper", r
                };
            var ht = r("tKUM"),
                mt = r("ztXJ"),
                bt = function(e, t) {
                    var r = function(r) {
                        var n = mt.s.Provider;
                        return y().createElement(n, {
                            value: t.lang
                        }, y().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "LanguageWrapper", r
                };
            const yt = (0, u.l1)({
                appContext: function(e, t) {
                    t.req;
                    e.lang = (0, ht.getLanguage)()
                },
                appComponent: function(e, t) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                        return s().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", bt(e, t));
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))
                }
            }, {
                name: "@pika/plugin-language"
            });
            var _t = r("YvF5"),
                wt = r("sshP"),
                xt = r("rsqs");
            r("wcIl");
            var Et = r("qjHo");

            function At() {
                var e = (0, f.PC)()[Et.x];
                if (e) return e
            }
            var St = !1,
                kt = function(e, t, r) {
                    var n = r.i18n.namespaces || [],
                        o = function(r) {
                            var o = (0, p.A)((0, b.useReducer)((function(e) {
                                    return e + 1
                                }), 0), 2),
                                a = o[0],
                                i = o[1],
                                u = (0, b.useRef)(!0),
                                l = function() {
                                    u.current && i()
                                };
                            (0, b.useEffect)((function() {
                                var e = t.i18n.i18nextIns;
                                return e.store.on("added", l),
                                    function() {
                                        e.store.off("added", l)
                                    }
                            }), []), (0, b.useEffect)((function() {
                                var e, r = (0, ne.K)("i18nNamespaces", []);
                                r.length && !St && (e = r, (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var o, a, i, p, d, g, v, h, m, b, y, _;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = (0, f.PC)()[Et.x], a = (0, ne.K)("i18nRenderAsNsKey", !1), !o) {
                                                    r.next = 25;
                                                    break
                                                }
                                                return i = t.lang, r.next = 5, Promise.all(e.map((function(e) {
                                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                                        var r, c, u, l;
                                                        return s().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return r = n.find((function(t) {
                                                                        var r = t.split("@");
                                                                        return r[r.length - 1] === e
                                                                    })), r && (u = r.split("@")).length > 1 && (c = u[0]), t.prev = 3, t.next = 6, (0, _t.A)({
                                                                        basePath: o,
                                                                        lng: i,
                                                                        ns: e,
                                                                        customPath: c,
                                                                        enable2NsKey: a
                                                                    });
                                                                case 6:
                                                                    return l = t.sent, t.abrupt("return", {
                                                                        ns: e,
                                                                        resourceBundle: l
                                                                    });
                                                                case 10:
                                                                    t.prev = 10, t.t0 = t.catch(3), console.error("Failed to fetch i18n resource", t.t0);
                                                                case 13:
                                                                    return t.abrupt("return", {
                                                                        ns: e,
                                                                        resourceBundle: null
                                                                    });
                                                                case 14:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [3, 10]
                                                        ])
                                                    })))
                                                })));
                                            case 5:
                                                for (p = r.sent, u.current = !1, d = !0, g = !1, v = void 0, r.prev = 8, h = p[Symbol.iterator](); !(d = (m = h.next()).done); d = !0) b = m.value, y = b.ns, (_ = b.resourceBundle) && Object.keys(_).length ? t.i18n.i18nextIns.addResourceBundle(i, y, _, !1, !0) : console.log("Resource bundle is empty", i, y);
                                                r.next = 16;
                                                break;
                                            case 12:
                                                r.prev = 12, r.t0 = r.catch(8), g = !0, v = r.t0;
                                            case 16:
                                                r.prev = 16, r.prev = 17, d || null == h.return || h.return();
                                            case 19:
                                                if (r.prev = 19, !g) {
                                                    r.next = 22;
                                                    break
                                                }
                                                throw v;
                                            case 22:
                                                return r.finish(19);
                                            case 23:
                                                return r.finish(16);
                                            case 24:
                                                u.current = !0, l();
                                            case 25:
                                                St = !0;
                                            case 26:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [8, 12, 16, 24],
                                        [17, , 19, 23]
                                    ])
                                }))))
                            }), []);
                            var d = (0, b.useMemo)((function() {
                                return {
                                    i18n: t.i18n,
                                    __count__: a
                                }
                            }), [a]);
                            return y().createElement(wt.y.Provider, {
                                value: d
                            }, y().createElement(e, Object.assign({}, r)))
                        };
                    return o.displayName = "I18nAppWrapper", o
                };
            var Ot = r("MdGa");
            const Tt = function(e) {
                return (0, u.yO)({})
            };
            var Bt = r("6FIE"),
                Pt = r("iyUK");
            var Ct, Ft = !1;
            const Rt = _bne.utils;
            var Nt = r("jSBn");

            function Dt() {
                throw new Error("@desktop/runtime module is only available in the Binance desktop environment. Please check if it is being used in a server-side rendering (SSR) environment.")
            }
            const It = {
                    isRunningInDesktop: !1,
                    isRunningInDesktopBrowser: !1,
                    desktop: {
                        get version() {
                            return Dt()
                        },
                        get env() {
                            return Dt()
                        },
                        closeCurrentWindow: Dt,
                        getSettings: Dt,
                        setSettings: Dt,
                        openExternal: Dt,
                        openWindow: Dt,
                        showNotification: Dt
                    },
                    app: {
                        getCurrent: Dt,
                        checkForUpdates: Dt
                    },
                    user: {
                        setTemporaryToken: Dt,
                        login: Dt,
                        logout: Dt,
                        getUser: Dt
                    },
                    trading: {
                        getCurrentLayout: Dt
                    },
                    env: {
                        common: {}
                    },
                    bridge: {
                        desktopBridge: {},
                        setBridge: () => {}
                    },
                    on: () => {},
                    off: Dt,
                    emit: Dt,
                    all: Dt
                },
                Lt = window.__DESKTOP_RUNTIME_API__ ? window.__DESKTOP_RUNTIME_API__ : It,
                jt = Lt.isRunningInDesktop,
                Mt = Lt.isRunningInDesktopBrowser;
            Lt.desktop, Lt.app, Lt.user, Lt.trading, Lt.env, Lt.on, Lt.off, Lt.emit, Lt.bridge;
            var Ht = function(e, t) {
                var r = function(r) {
                    return t.ssrData ? y().createElement(Nt.A, Object.assign({}, t.ssrData), y().createElement(e, Object.assign({}, r))) : (console.log("[@pika/plugin-data-provider] ssrData is not found in appContext"), y().createElement(e, Object.assign({}, r)))
                };
                return r.displayName = "DataProviderWrapper", r
            };

            function Ut() {
                return jt && !Mt ? {
                    lang: (0, ht.getLanguage)(),
                    pathPrefix: (0, ht.getPathPrefix)(),
                    level2Domain: (0, Rt.getLevelDomain)(2),
                    isRegionMode: !1
                } : (0, ne.K)("ssrData")
            }
            const Gt = (0, u.yO)({
                appContext: function(e, t) {
                    t.req;
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.ssrData || (e.ssrData = Ut());
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                },
                appComponent: function(e, t) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                        return s().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", Ht(e, t));
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))
                }
            });
            var Wt = r("OFK0"),
                zt = (0, Wt.A)((function() {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, Promise.all([r.e(223), r.e(428)]).then(r.bind(r, "d9Lu"));
                                case 4:
                                    return e.abrupt("return", e.sent.GlobalJSLoaderContent);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }), {
                    ssr: !1
                }),
                Vt = (0, Wt.A)((function() {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, Promise.all([r.e(223), r.e(766)]).then(r.bind(r, "/Nkw"));
                                case 4:
                                    return e.abrupt("return", e.sent.GlobalJSLoader);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }), {
                    ssr: !1
                }),
                qt = function(e, t) {
                    var r = function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.useNewHeaderFooter,
                            o = t.globalJSDisclaimerConfig,
                            a = t.staticHost;
                        return y().createElement(y().Fragment, null, n ? y().createElement(zt, {
                            disclaimerConfig: o
                        }) : y().createElement(Vt, {
                            staticHost: a
                        }), y().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "CommonResourceAppWrapper", r
                };
            var Kt = r("uHCZ"),
                $t = r("HS2I"),
                Qt = function(e, t) {
                    return "string" === typeof e ? new RegExp(e).test(t) : !!e
                },
                Yt = function(e, t) {
                    var r = function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = (0, _.K7)(),
                            o = n.pathname,
                            a = (0, p.A)((0, b.useState)(Qt(t.useHeader, o)), 2),
                            i = a[0],
                            s = a[1],
                            c = (0, p.A)((0, b.useState)(Qt(t.useFooter, o)), 2),
                            u = c[0],
                            l = c[1],
                            f = (0, p.A)((0, b.useState)(Qt(t.useUserCenterSidebar, o)), 2),
                            d = f[0],
                            g = f[1];
                        (0, b.useLayoutEffect)((function() {
                            s(Qt(t.useHeader, o)), l(Qt(t.useFooter, o)), g(Qt(t.useUserCenterSidebar, o))
                        }), [o]);
                        var v = y().useMemo((function() {
                            var e = "";
                            return i || (e = "".concat(e, " #__APP_HEADER { display: none; }")), u || (e = "".concat(e, " #__APP_FOOTER { display: none; }")), d || (e = "".concat(e, " #__APP_SIDEBAR { display: none; width: 100%; }")), e
                        }), [i, u, d]);
                        return (0, b.useEffect)((function() {
                            t.ssr || (0, $t.configInitial)({
                                url: t.apiHost,
                                onWidgetConfig: t.onWidgetConfig,
                                onI18n: t.onI18n,
                                onCommonEnv: t.onCommonEnv,
                                team: t.team
                            })
                        }), []), y().createElement(y().Fragment, null, v && y().createElement(Kt.A, null, y().createElement("style", {
                            id: "header-footer-global-style"
                        }, v)), y().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "HeaderFooterAppWrapper", r
                },
                Jt = function(e, t) {
                    var r = e.useHeader,
                        n = e.useFooter,
                        o = e.useUserCenterSidebar,
                        a = e.useCommonWidgetDataSDK;
                    return Object.assign(Object.assign({}, e), {
                        useHeader: Qt(r, t),
                        useFooter: Qt(n, t),
                        useSidebar: Qt(o, t),
                        useCommonWidgetDataSDK: Qt(a, t)
                    })
                };
            var Zt = r("qK3R"),
                Xt = function(e) {
                    var t = !1;
                    return function() {
                        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        t || (e.apply(void 0, (0, m.A)(n)), t = !0)
                    }
                },
                er = !0,
                tr = -1,
                rr = function(e) {
                    var t = k,
                        n = t.PIKA_CLS,
                        o = t.PIKA_FCP,
                        a = t.PIKA_FID,
                        i = t.PIKA_INP,
                        u = t.PIKA_LCP,
                        l = t.PIKA_TTFB,
                        p = (0, Zt.trace)(S);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            f = (0, _.K7)(),
                            d = f.matches,
                            g = (0, b.useMemo)((function() {
                                return T(d)
                            }), [d]);
                        (0, b.useEffect)((function() {
                            C({
                                remainingTime: 49,
                                timeout: 1e4
                            }).then((function() {
                                return r.e(848).then(r.bind(r, "Rvfj"))
                            })).then((function(e) {
                                var t = e.onLCP,
                                    r = e.onFCP,
                                    n = e.onFID,
                                    f = e.onCLS,
                                    d = e.onINP,
                                    g = e.onTTFB;
                                t(Xt((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = u.name, t.next = 4, m({
                                                        value: e.value
                                                    }, {
                                                        lcp: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop(), setTimeout((function() {
                                                        er = !1
                                                    }), 2e3);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), r(Xt((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = o.name, t.next = 4, m({
                                                        value: e.value
                                                    }, {
                                                        fcp: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop();
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), n(Xt((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = a.name, t.next = 4, m({
                                                        value: e.value
                                                    }, {
                                                        fid: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop();
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), f(Xt((function(e) {
                                    er && e.value > tr && (tr = e.value)
                                }))), d(Xt((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = i.name, t.next = 4, m({
                                                        value: e.value
                                                    }, {
                                                        inp: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop();
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), g(Xt((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = l.name, t.next = 4, m({
                                                        value: e.value
                                                    }, {});
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop();
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                })))
                            })).catch((function(e) {
                                console.error("[Pika] dynamic load failed", e)
                            }))
                        }), []), (0, b.useEffect)((function() {
                            var e = function() {
                                "hidden" === document.visibilityState && (h(), v())
                            };
                            return document.addEventListener("visibilitychange", e),
                                function() {
                                    return document.removeEventListener("visibilitychange", e)
                                }
                        }), []);
                        var v = function() {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.t0 = tr >= 0, !e.t0) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.t1 = p, e.t2 = n.name, e.next = 6, m({
                                                    value: tr
                                                }, {
                                                    cls: tr
                                                });
                                            case 6:
                                                e.t3 = e.sent, e.t1.traceChild.call(e.t1, e.t2, e.t3).stop(), tr = -1;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            },
                            h = (0, b.useCallback)(Xt((function() {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                                    var t, r, n, o, a;
                                    return s().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o = null === (n = null === (r = null === (t = window.performance) || void 0 === t ? void 0 : t.getEntriesByType) || void 0 === r ? void 0 : r.call(t, "navigation")) || void 0 === n ? void 0 : n[0]) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return a = {
                                                    dns: o.domainLookupEnd - o.domainLookupStart,
                                                    tcp: o.connectEnd - o.connectStart,
                                                    tls: o.requestStart - o.secureConnectionStart,
                                                    ttfb: o.responseStart - o.requestStart,
                                                    ddt: o.responseEnd - o.responseStart,
                                                    dpt: o.domInteractive - o.responseStart,
                                                    ldn: o.domComplete - o.startTime,
                                                    drt: o.loadEventStart - o.domInteractive
                                                }, Object.keys(a).forEach((function(e) {
                                                    a[e] <= 0 && delete a[e]
                                                })), a.t = "PAGE", e.t0 = p, e.next = 10, m({}, a);
                                            case 10:
                                                e.t1 = e.sent, e.t0.traceChild.call(e.t0, "PAGE", e.t1).stop();
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            })), []),
                            m = function(e, t) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", Object.assign(Object.assign({}, e), {
                                                    __rootAttrs: Object.assign(t, {
                                                        ts: Date.now(),
                                                        path: g
                                                    }),
                                                    __flush: !0
                                                }));
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            };
                        return y().createElement(e, Object.assign({}, t))
                    }
                };
            var nr = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, _.rd)();
                    return (0, b.useEffect)((function() {
                        return r.listen((function() {
                            if (location.search) {
                                var e = location.search.trim().replace(/^[?#&]/, "");
                                if (e) {
                                    var t = new RegExp(window.gaFilterExp || "^(email|mobile)"),
                                        r = e.split("&");
                                    r = r.filter((function(e) {
                                        return !t.test(e)
                                    }));
                                    var n = r.join("&");
                                    "function" === typeof window.ga && window.ga("set", "location", "".concat(location.origin + location.pathname, "?").concat(n))
                                }
                            } else "function" === typeof window.ga && window.ga("set", "location", location.href)
                        }))
                    }), []), y().createElement(e, Object.assign({}, t))
                }
            };
            const or = (0, u.yO)({
                appComponent: function(e) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                        key: "loadGAScript",
                                        data: {}
                                    }), nr(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            (0, r("NPYb").writeUTMtoCookie)();
            const ar = (0, u.yO)({});
            var ir = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return b.useEffect((function() {
                        C({
                            remainingTime: 49,
                            timeout: 1e4
                        }).then((function() {
                            return r.e(317).then(r.bind(r, "r/AF"))
                        })).then((function(e) {
                            (0, e.syncLocalDfp)({
                                t: "binance",
                                domain: ""
                            })
                        })).catch((function(e) {
                            console.error("[Pika] dynamic load failed", e)
                        }))
                    }), []), b.createElement(e, Object.assign({}, t))
                }
            };
            const sr = (0, u.yO)({
                appComponent: function(e) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", ir(e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            var cr, ur = r("NoXm"),
                lr = r("oVQP"),
                pr = new Map,
                fr = r("MEAY"),
                dr = {
                    dark: fr.zd,
                    light: fr.bK
                },
                gr = "theme",
                vr = "light",
                hr = vr,
                mr = hr;
            mr = (null !== (cr = R(gr)) && void 0 !== cr ? cr : hr).split("_")[0];
            var br = function(e, t, r) {
                return function() {
                    var n, o = (0, p.A)((0, ur.useCacheState)(gr, mr), 1)[0],
                        a = null === r || void 0 === r ? void 0 : r.detectColorMode,
                        i = null === r || void 0 === r ? void 0 : r.useNewHeaderFooter,
                        s = (null === t || void 0 === t ? void 0 : t.uikit) || {},
                        u = s.color,
                        l = s.isRedUpGreenDown,
                        f = s.theme,
                        d = null === (n = null === t || void 0 === t ? void 0 : t.ua) || void 0 === n ? void 0 : n.platform.isMobile,
                        g = i ? o : f,
                        v = b.useMemo((function() {
                            var e = g === vr ? lr.BB : lr.XT,
                                t = a ? function(e) {
                                    var t = e.theme,
                                        r = e.isRedUpGreenDown,
                                        n = e.colorMode,
                                        o = ["fresh" !== n && n ? n : "", "true" === r ? "reverse" : ""].filter(Boolean);
                                    return dr[t][o.join("-")] || {}
                                }({
                                    theme: g,
                                    isRedUpGreenDown: l,
                                    colorMode: u
                                }) : {};
                            d && (e.mobile && (t = Object.assign(Object.assign({}, t), e.mobile)), t.mobile && (t = Object.assign(Object.assign({}, t), t.mobile)));
                            var r = Object.assign(Object.assign({}, e), t);
                            r.mobile;
                            return function(e) {
                                var t = JSON.stringify(e);
                                if (pr.has(t)) return pr.get(t);
                                var r = e.hasOwnProperty("BasicBg"),
                                    n = e.hasOwnProperty("PrimaryText"),
                                    o = "body { ".concat(Object.entries(e).map((function(e) {
                                        var t = (0, p.A)(e, 2),
                                            o = t[0],
                                            a = t[1];
                                        return "BasicBg" === o && r ? "--color-".concat(o, ": ").concat(a, "; background-color: var(--color-").concat(o, ");") : "PrimaryText" === o && n ? "--color-".concat(o, ": ").concat(a, "; color: var(--color-").concat(o, ");") : "--color-".concat(o, ": ").concat(a, ";")
                                    })).join(" "), " }");
                                return pr.set(t, o), o
                            }((0, c.__rest)(r, ["mobile"]))
                        }), [g, d, u, l, a]);
                    return b.createElement(b.Fragment, null, b.createElement(Kt.A, null, b.createElement("style", {
                        id: "webstudio-universal-uikit-colors"
                    }, v)), b.createElement(e, null))
                }
            };
            var yr = {
                    plugin: function() {
                        return (0, u.Uu)({
                            appComponent: function(e, t) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", vt(e, t));
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appContext: function(e) {
                                var t;
                                e.redux || (t = (0, ne.K)("redux", t), e.redux = function(e) {
                                    var t = e.initialState,
                                        r = e.ctx;
                                    return dt(t, Object.assign(Object.assign({}, r), {
                                        isServer: !1
                                    }))
                                }({
                                    initialState: t,
                                    ctx: e
                                }))
                            }
                        }, {
                            name: "@pika/plugin-redux"
                        })
                    }
                },
                _r = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(t, r) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function n() {
                                    return s().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", kt(t, r, e));
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            },
                            appContext: function(t, r) {
                                var n = r.req,
                                    o = r.router;
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var a, i, u, l, f, d, g, v;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (a = t.lang, i = e.i18n, u = i.namespaces, l = void 0 === u ? [] : u, f = i.keySeparator, d = i.nsSeparator, g = At(), t.i18nBasePath = g, v = (0, wt.T)({
                                                        namespaces: l,
                                                        basePath: g,
                                                        keySeparator: f,
                                                        nsSeparator: d
                                                    }), t.i18n = v, !o.beforeResolve) {
                                                    r.next = 10;
                                                    break
                                                }
                                                o.beforeResolve((function(e, r, o) {
                                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                                                        var r, i, c, u, l, f;
                                                        return s().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    e.prev = 0, e.next = 11;
                                                                    break;
                                                                case 7:
                                                                    i = e.sent, t.collectionKeys = r, i && ((0, xt.pu)(n) ? (c = i[a], u = (0, xt.Zu)(c), t.i18nResource = (0, Ee.A)({}, a, u), Object.entries(u).forEach((function(e) {
                                                                        var t = (0, p.A)(e, 2),
                                                                            r = t[0],
                                                                            n = t[1];
                                                                        v.i18nextIns.addResources(a, r, n)
                                                                    })), t.i18nRenderAsNsKey = !0) : t.i18nResource = i), e.next = 16;
                                                                    break;
                                                                case 11:
                                                                    if (v.i18nextIns.isInitialized) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    return (l = (0, ne.K)("i18nResource")) && !l[a] && ((f = Object.keys(l)).length ? l[a] = l[f[0]] : l[a] = {}), e.next = 16, v.init({
                                                                        lng: a,
                                                                        resources: l
                                                                    });
                                                                case 16:
                                                                    e.next = 21;
                                                                    break;
                                                                case 18:
                                                                    e.prev = 18, e.t0 = e.catch(0), console.error("i18n runtime error", e.t0);
                                                                case 21:
                                                                    o();
                                                                case 22:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 18]
                                                        ])
                                                    })))
                                                })), r.next = 14;
                                                break;
                                            case 10:
                                                if (r.t0 = v.i18nextIns.isInitialized, r.t0) {
                                                    r.next = 14;
                                                    break
                                                }
                                                return r.next = 14, v.init({
                                                    lng: a
                                                });
                                            case 14:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            }
                        }, {
                            name: "@pika/plugin-i18n",
                            after: ["@pika/plugin-language"],
                            before: ["shuvi-custom-app"]
                        })
                    },
                    options: '{"i18n":{"namespaces":["support-center","binance-chat"]}}'
                },
                wr = {
                    plugin: function() {
                        return (0, u.yO)({
                            appContext: function(e, t) {
                                t.req;
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                    var r;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = "desktop", "undefined" !== typeof navigator && navigator.userAgent && (r = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent), e.ua = (0, Ot.getDevice)(r);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            }
                        })
                    }
                },
                xr = {
                    plugin: function() {
                        return (0, u.yO)({
                            init: function() {
                                var e = this;
                                if (!Ft) {
                                    Ft = !0;
                                    var t = function() {
                                        var e = (0, f.PC)().STATIC_HOST;
                                        return e ? {
                                            staticHost: e
                                        } : (console.error("[@pika/plugin-bids-interceptor] STATIC_HOST is not defined in runtimeConfig"), null)
                                    }();
                                    t && (0, Bt.addResponseInterceptor)((function(n) {
                                        for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
                                        return (0, c.__awaiter)(e, void 0, void 0, s().mark((function e() {
                                            var o;
                                            return s().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, (0, Pt.Wv)(n);
                                                    case 2:
                                                        if (!e.sent) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        if (!Ct) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 6, Ct.apply(void 0, [n].concat((0, m.A)(a)));
                                                    case 6:
                                                    case 15:
                                                        return e.abrupt("return", e.sent);
                                                    case 7:
                                                        return e.next = 9, C();
                                                    case 9:
                                                        return e.next = 11, Promise.all([r.e(223), r.e(97)]).then(r.bind(r, "6gbb"));
                                                    case 11:
                                                        return o = e.sent, Ct = o.BIDSInterceptor(t), e.next = 15, Ct.apply(void 0, [n].concat((0, m.A)(a)));
                                                    case 16:
                                                        return e.abrupt("return", n);
                                                    case 17:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))
                                    }))
                                }
                            }
                        }, {
                            name: "@pika/plugin-bids-interceptor"
                        })
                    }
                },
                Er = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(t, r) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var n;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return n = (0, f.PC)(), r.abrupt("return", n.API_HOST ? Yt(t, Object.assign(Object.assign({}, e), {
                                                    apiHost: n.API_HOST
                                                })) : (console.error("[@pika/plugin-header-footer] API_HOST is not set."), t));
                                            case 2:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appContext: function(t, r) {
                                var n = r.req;
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (r.t0 = !1, !r.t0) {
                                                    r.next = 4;
                                                    break
                                                }
                                                return r.next = 4, undefined({
                                                    ctx: t,
                                                    req: n,
                                                    options: Jt(e, null === n || void 0 === n ? void 0 : n.pathname)
                                                });
                                            case 4:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            }
                        }, {
                            name: "@pika/plugin-header-footer",
                            after: ["@pika/plugin-http"]
                        })
                    },
                    options: '{"ssr":true,"widgetExtends":{"useStickyHeader":true},"useHeader":true,"useFooter":true}'
                },
                Ar = {
                    plugin: function() {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                    var r, n;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = (0, f.PC)(), (n = r.STATIC_HOST) && (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                                    key: "falconInit",
                                                    data: {
                                                        host: n
                                                    }
                                                })), t.abrupt("return", e);
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            }
                        })
                    }
                },
                Sr = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appContext: function(t, r) {
                                var n = r.req;
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var o, a, i, c;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (null === e || void 0 === e ? void 0 : e.injectColorsInHead) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 2:
                                                null === n || void 0 === n ? void 0 : n.cookies, null === n || void 0 === n ? void 0 : n.headers, c = (0, ne.K)("_uikit", {
                                                    theme: mr,
                                                    color: R("color"),
                                                    isRedUpGreenDown: R("isRedUpGreenDown")
                                                }), o = c.theme, (null === e || void 0 === e ? void 0 : e.detectColorMode) && (a = c.color, i = c.isRedUpGreenDown), o && !N(o) && (o = hr), a && !N(a) && (a = void 0), i && !N(i) && (i = void 0), t.uikit = Object.assign(Object.assign({}, t.uikit), {
                                                    theme: o,
                                                    color: a,
                                                    isRedUpGreenDown: i
                                                });
                                            case 6:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appComponent: function(t, r) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function n() {
                                    return s().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", (null === e || void 0 === e ? void 0 : e.injectColorsInHead) ? br(t, r, e) : t);
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    },
                    options: '{"injectColorsInHead":true,"useNewHeaderFooter":true}'
                },
                kr = {
                    plugin0: {
                        plugin: o.A
                    },
                    plugin1: {
                        plugin: a.A
                    },
                    plugin2: {
                        plugin: h,
                        options: '{"projectName":"faq-anns-ui"}'
                    },
                    plugin3: {
                        plugin: Q,
                        options: '{"serverInjectSDK":true,"sentryDsn":"https://1ee7cbbe9e78c15a00205a960554ae3d@o529943.ingest.us.sentry.io/4507768907300864","sentryEnv":"prod","packageName":"faq-anns-ui","sentryReleaseVersion":"20250417-c6e8226e-228648","sampleRate":0.01,"pikaVersion":"0.3.56","ssr":true,"analyticsId":"faq-anns-ui,COM,clztltzz23290610t2x5ur7wesm","appTarget":"web"}'
                    },
                    plugin4: {
                        plugin: function() {
                            return (0, u.yO)({
                                appComponent: function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.abrupt("return", J(e));
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }
                            })
                        }
                    },
                    plugin5: {
                        plugin: re
                    },
                    plugin6: yr,
                    plugin7: {
                        plugin: yt,
                        options: '{"addHtmlAttr":true}'
                    },
                    plugin8: _r,
                    plugin9: {
                        plugin: function(e) {
                            return (0, u.yO)({
                                appContext: function(e, t) {
                                    t.router;
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                                        return s().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))
                                }
                            }, {
                                name: "@pika/plugin-smart-route"
                            })
                        },
                        options: '{"getPathPrefixFromClientSide":false}'
                    },
                    plugin10: wr,
                    plugin11: {
                        plugin: Tt,
                        options: '{"reactAndReactDomSuffix":"production.min.18.2.0","appTarget":"web"}'
                    },
                    plugin12: xr,
                    plugin13: {
                        plugin: Gt
                    },
                    plugin14: {
                        plugin: function(e) {
                            return (0, u.yO)({
                                appComponent: function(t) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                        var n;
                                        return s().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return n = (0, f.PC)(), r.abrupt("return", n.STATIC_HOST ? qt(t, Object.assign(Object.assign({}, e), {
                                                        staticHost: n.STATIC_HOST
                                                    })) : (console.warn("[@pika/plugin-common-resource] STATIC_HOST is not set."), t));
                                                case 2:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r)
                                    })))
                                }
                            })
                        },
                        options: '{"useNewHeaderFooter":true}'
                    },
                    plugin15: Er,
                    plugin16: {
                        plugin: function(e) {
                            return (0, u.yO)({
                                appComponent: function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.abrupt("return", rr(e));
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }
                            })
                        }
                    },
                    plugin17: {
                        plugin: or,
                        options: '{"queryParamsFilter":[]}'
                    },
                    plugin18: {
                        plugin: ar
                    },
                    plugin19: Ar,
                    plugin20: {
                        plugin: sr
                    },
                    plugin21: Sr
                }
        },
        etBY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = {
                SITE_HOST: "",
                I18N_BASE_PRIVATE: "",
                STATIC_HOST_PRIVATE: "",
                STATIC_HOST_PUBLIC: "",
                SENTRY_DSN: "https://1ee7cbbe9e78c15a00205a960554ae3d@o529943.ingest.us.sentry.io/4507768907300864",
                SENTRY_ENV: "prod",
                COMMIT_HEAD: "c6e8226e0bbd07a97f9beff3c1fe8a393f0b2e00"
            }
        },
        accZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => n
            });
            var n = "browser"
        },
        "3cKB": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = [{
                __import__: function() {
                    return Promise.all([r.e(223), r.e(573)]).then(r.bind(r, "serT"))
                },
                __resolveWeak__: function() {
                    return ["serT"]
                },
                path: "/",
                id: "e084",
                children: [{
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(736)]).then(r.bind(r, "m3Ex"))
                    },
                    __resolveWeak__: function() {
                        return ["m3Ex"]
                    },
                    path: "new/support/self-service",
                    id: "4700"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(223), r.e(34)]).then(r.bind(r, "RrWe"))
                    },
                    __resolveWeak__: function() {
                        return ["RrWe"]
                    },
                    path: "support/law-enforcement/guidelines",
                    id: "ad1e"
                }, {
                    __import__: function() {
                        return r.e(510).then(r.bind(r, "90ru"))
                    },
                    __resolveWeak__: function() {
                        return ["90ru"]
                    },
                    path: "support/requests/new",
                    id: "6b4e"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(223), r.e(857)]).then(r.bind(r, "wR2Y"))
                    },
                    __resolveWeak__: function() {
                        return ["wR2Y"]
                    },
                    path: "support/chat-invitation",
                    id: "456a"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(223), r.e(549)]).then(r.bind(r, "LDkc"))
                    },
                    __resolveWeak__: function() {
                        return ["LDkc"]
                    },
                    path: "support/law-enforcement",
                    id: "0df4"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(191)]).then(r.bind(r, "p0e3"))
                    },
                    __resolveWeak__: function() {
                        return ["p0e3"]
                    },
                    path: "support/search",
                    id: "cd8e"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(673)]).then(r.bind(r, "Ytwb"))
                    },
                    __resolveWeak__: function() {
                        return ["Ytwb"]
                    },
                    path: "support/self-service",
                    id: "ebc2"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(596), r.e(223), r.e(117)]).then(r.bind(r, "YgHN"))
                    },
                    __resolveWeak__: function() {
                        return ["YgHN"]
                    },
                    path: "support/:pageType/detail/:articleCode",
                    id: "6080"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(968)]).then(r.bind(r, "GDqG"))
                    },
                    __resolveWeak__: function() {
                        return ["GDqG"]
                    },
                    path: "support/:pageType/list/:catalogSlug",
                    id: "d72f"
                }, {
                    __import__: function() {
                        return r.e(957).then(r.bind(r, "z97r"))
                    },
                    __resolveWeak__: function() {
                        return ["z97r"]
                    },
                    path: "support/:pageType/:slug",
                    id: "d34e"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(714)]).then(r.bind(r, "MFyd"))
                    },
                    __resolveWeak__: function() {
                        return ["MFyd"]
                    },
                    path: "support/:pageType",
                    id: "ccf9"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(223), r.e(569)]).then(r.bind(r, "5EDR"))
                    },
                    __resolveWeak__: function() {
                        return ["5EDR"]
                    },
                    path: "support",
                    id: "3865"
                }]
            }]
        },
        "6FIE": (e, t, r) => {
            "use strict";
            var n = r("Zu0i");
            r.o(n, "addResponseInterceptor") && r.d(t, {
                addResponseInterceptor: function() {
                    return n.addResponseInterceptor
                }
            }), r.o(n, "fetch") && r.d(t, {
                fetch: function() {
                    return n.fetch
                }
            }), r.o(n, "get") && r.d(t, {
                get: function() {
                    return n.get
                }
            }), r.o(n, "post") && r.d(t, {
                post: function() {
                    return n.post
                }
            })
        },
        ZSsA: (e, t, r) => {
            "use strict";
            r.d(t, {
                x6: () => u,
                WX: () => l.WX,
                o: () => l.o,
                s9: () => c
            });
            var n = r("VP0d"),
                o = r("DTvD"),
                a = r("hRh4"),
                i = r("h+kG"),
                s = r("sshP"),
                c = function(e) {
                    var t = (0, o.useContext)(s.y),
                        r = t.i18n,
                        a = t.__count__,
                        i = r.i18nextIns,
                        c = (0, n.A)((0, o.useState)(i.language), 2),
                        u = c[0],
                        l = c[1],
                        p = (0, o.useCallback)((function(e) {
                            return e
                        }), []),
                        f = (0, o.useMemo)((function() {
                            return i.getFixedT(u, e)
                        }), [u, e, a]);
                    return (0, o.useEffect)((function() {
                        return i.isInitialized ? e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                i.hasResourceBundle(u, e) || i.loadNamespaces(e)
                            })) : r.init(), i.on("languageChanged", l),
                            function() {
                                i.off("languageChanged", l)
                            }
                    }), []), {
                        locale: u,
                        language: u,
                        setLocale: r.setLocale,
                        t: i.isInitialized ? f : p,
                        i18n: i
                    }
                },
                u = function(e) {
                    var t = (0, o.useContext)(s.y).i18n;
                    return (0, a.Trans)(Object.assign({
                        i18n: t.i18nextIns.isInitialized ? t.i18nextIns : void 0
                    }, e))
                };
            if (null === i.OW || void 0 === i.OW ? void 0 : i.OW.PRERENDER);
            s.y.Provider;
            var l = r("rsqs");
            r("ztXJ")
        },
        NebQ: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                __esModule: () => n.B
            });
            var n = r("c2++")
        },
        RFgr: (e, t, r) => {
            "use strict";
            r.d(t, {
                $2: () => n,
                Lv: () => p,
                MD: () => i,
                O_: () => l,
                Rc: () => s,
                Tj: () => u,
                Vm: () => d,
                aZ: () => a,
                cl: () => f,
                ek: () => c,
                vU: () => o
            });
            var n, o = "200001054",
                a = "100001006";
            ! function(e) {
                e.FAQ = "faq", e.ANNOUNCEMENT = "announcement", e.ARTICLES = "articles"
            }(n || (n = {}));
            var i, s, c, u, l, p = "FAQ_ANNS";
            ! function(e) {
                e[e.ANNOUNCEMENT = 1] = "ANNOUNCEMENT", e[e.FAQ = 2] = "FAQ"
            }(i || (i = {})),
            function(e) {
                e[e.Old = 0] = "Old", e[e.New = 1] = "New"
            }(s || (s = {})),
            function(e) {
                e[e.All = 0] = "All", e[e.Faq = 2] = "Faq", e[e.Announcement = 1] = "Announcement"
            }(c || (c = {})),
            function(e) {
                e[e.CAN_URGE = 1] = "CAN_URGE", e[e.CAN_NOT_URGE = 2] = "CAN_NOT_URGE"
            }(u || (u = {})),
            function(e) {
                e.TopQuestions = "topQuestions", e.LatestArticles = "LatestArticles", e.NormalArticles = "NormalArticles", e.LatestArticlesLatestArticles = "LatestArticlesLatestArticles"
            }(l || (l = {}));
            var f = {
                    Account: "self_service_group_account",
                    "Crypto Deposit": "self_service_group_crypto_deposit_withdrawal",
                    Fiat: "self_service_group_buy_sell_crypto",
                    KYC: "self_service_group_kyc",
                    Security: "self_service_group_other",
                    Other: "self_service_group_other"
                },
                d = {
                    e4df6cfe66d940debdc1c77d05ae3381: {
                        type: n.FAQ,
                        dest: {
                            web: "/support/faq/list/1-125",
                            mp: "pages/mp/support/$pageType/list/$catalogSlug/index?pageType=faq&catalogSlug=1-125"
                        }
                    },
                    "884c621e335540e0add5fdce31597121": {
                        type: n.ANNOUNCEMENT,
                        dest: {
                            web: "/support/announcement/detail/bcaa1f68d6a6450099056ff694ad6c46",
                            mp: "pages/mp/support/$pageType/detail/$articleCode/index?pageType=announcement&articleCode=bcaa1f68d6a6450099056ff694ad6c46"
                        }
                    }
                }
        },
        rEBH: (e, t, r) => {
            "use strict";
            r.d(t, {
                tz: () => B,
                vU: () => c.vU,
                aZ: () => c.aZ,
                MD: () => c.MD,
                FH: () => P,
                K0: () => T,
                Lv: () => c.Lv,
                Bi: () => f,
                $2: () => c.$2,
                Vm: () => c.Vm,
                Rc: () => c.Rc,
                dM: () => k,
                K5: () => A,
                Gf: () => S,
                ek: () => c.ek,
                Td: () => g,
                fz: () => d,
                cn: () => a,
                RW: () => m,
                SV: () => ae,
                KB: () => J,
                lv: () => y,
                gL: () => s,
                O4: () => he,
                X1: () => _e,
                VH: () => $,
                bG: () => b,
                yb: () => te,
                US: () => re,
                uo: () => q,
                wy: () => ne,
                UF: () => oe,
                $t: () => K,
                ye: () => ye,
                Zs: () => me,
                B9: () => be,
                FJ: () => i,
                ws: () => we,
                D1: () => C,
                $q: () => h,
                _: () => ve,
                qk: () => _,
                ck: () => ee,
                mB: () => Y,
                Br: () => v
            });
            var n = r("/2pv"),
                o = r("0XUj");

            function a() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, o.QP)((0, n.$)(t))
            }
            var i = {
                getPerformance: function() {},
                getSystemInfoSync: function() {},
                getAppBaseInfo: function() {},
                setNavigationBarTitle: function(e) {},
                showLoading: function() {},
                hideLoading: function() {},
                redirectTo: function(e) {},
                navigateTo: function(e) {},
                isLoggedIn: function() {},
                env: {}
            };
            var s = (0, r("1Ivh").A)((function(e) {
                    return e && e.replace(/<!--[\s\S]*?-->/gm, "").replace(/(&nbsp;|\n)/gim, "").replace(/<\/?.+?>/gm, "")
                }), (function(e) {
                    if (e && "string" === typeof e) return encodeURI(e.replace(/['!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\xa5\uff5e\s\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3021\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/g, "-").toLowerCase().replace(/[-]+/g, "-").replace(/^[-]+/g, "").replace(/[-]$/g, ""))
                })),
                c = r("RFgr");
            var u = r("+HTX");

            function l(e, t, r) {
                var n = (null === t || void 0 === t ? void 0 : t.pageName) || "",
                    o = (null === t || void 0 === t ? void 0 : t.elementID) || "";
                return (0, u.AC)({
                    eventName: e,
                    data: Object.assign({
                        pageName: n,
                        elementID: o
                    }, t),
                    options: r
                })
            }
            var p = r("+HWd"),
                f = {
                    SUPPORT_CENTER_HOMEPAGE: "support_center_homepage",
                    SUPPORT_CENTER_SEARCH_PAGE: "support_center_search_page",
                    FAQ_LANDING_PAGE: "faq_landing_page",
                    FAQ_ARTICLE_LIST_PAGE: "faq_article_list_page",
                    FAQ_ARTICLE_DETAIL_PAGE: "faq_article_detail_page",
                    BINANCE_WEB_FAQ_PAGE: "binance_faq_page",
                    ANNOUNCEMENT_LANDING_PAGE: "announcement_landing_page",
                    ANNOUNCEMENT_ARTICLE_LIST_PAGE: "announcement_article_list_page",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE: "announcement_article_detail_page",
                    BINANCE_APP_ANNOUNCEMENT_PAGE: "binance_announcement_page",
                    BINANCE_OTHER_PAGE: "binance_other_page",
                    SUPPORT_CENTER_SELF_SERVICE: "support_center_self_service"
                },
                d = {
                    SUPPORT_CENTER_SEARCH: "support_center_search",
                    SUPPORT_CENTER_BREADCRUMB: "support_center_breadcrumb",
                    SUPPORT_CENTER_SEARCH_PAGE_TAB: "support_center_search_page_tab",
                    SUPPORT_CENTER_HOMEPAGE_FAQ_ITEM: "support_center_homepage_faq_item",
                    SUPPORT_CENTER_SEARCH_PAGE_FAQ_ITEM: "support_center_search_page_faq_item",
                    SUPPORT_CENTER_SEARCH_PAGE_ANNOUNCEMENT_ITEM: "support_center_search_page_announcement_item",
                    SUPPORT_CENTER_SEARCH_PAGE_ARTICLE: "support_center_search_page_article",
                    SUPPORT_CENTER_SEARCH_PAGE_CATEGORY: "support_center_search_page_category",
                    SUPPORT_CENTER_HOMEPAGE_TOP_ARTICLE_ITEM: "support_center_homepage_top_article_item",
                    SUPPORT_CENTER_HOMEPAGE_ANNOUNCEMENT_ITEM: "support_center_homepage_announcement_item",
                    SUPPORT_CENTER_HOMEPAGE_SELF_SERVICE_ITEM: "support_center_homepage_self_service_item",
                    SUPPORT_CENTER_HOMEPAGE_LATEST_ARTICLE_ITEM: "support_center_homepage_latest_article_item",
                    SUPPORT_CENTER_HOMEPAGE_TOP_QUESTION_ITEM: "support_center_homepage_top_question_item",
                    FAQ_SEARCH: "faq_search",
                    FAQ_NAVIGATION_ITEM: "faq_navigation_item",
                    FAQ_RELATED_ARTICLE: "faq_related_article",
                    FAQ_NAVIGATION_FOLD_BUTTON: "faq_navigation_fold_button",
                    FAQ_NAVIGATION_SECTION_EXPAND_BUTTON: "faq_navigation_section_expand_button",
                    FAQ_LANDING_PAGE_READ_MORE: "faq_landing_page_read_more",
                    FAQ_ARTICLE_LIST_PAGE_ARTICLE: "faq_article_list_page_article",
                    FAQ_LANDING_PAGE_ALL_TOPIC_ITEM: "faq_landing_page_all_topic_item",
                    FAQ_LANDING_PAGE_TOP_QUESTIONS: "faq_landing_page_top_questions",
                    FAQ_ARTICLE_LIST_PAGE_BREAD_CRUMB: "faq_article_list_page_bread_crumb",
                    FAQ_ARTICLE_DETAIL_PAGE_BREAD_CRUMB: "faq_article_detail_page_bread_crumb",
                    FAQ_LANDING_PAGE_POPULAR_TOPIC_ITEM: "faq_landing_page_popular_topic_item",
                    FAQ_ARTICLE_DETAIL_PAGE_INARTICLE_CLICK: "faq_article_detail_page_inarticle_click",
                    ANNOUNCEMENT_SEARCH: "announcement_search",
                    ANNOUNCEMENT_LATEST_ARTICLE: "announcement_latest_article",
                    ANNOUNCEMENT_NAVIGATION_ITEM: "announcement_navigation_item",
                    ANNOUNCEMENT_NAVIGATION_FOLD_BUTTON: "announcement_navigation_fold_button",
                    ANNOUNCEMENT_NAVIGATION_SECTION_EXPAND_BUTTON: "announcement_navigation_section_expand_button",
                    ANNOUNCEMENT_ARTICLE_LIST_PAGE_ARTICLE: "announcement_article_list_page_article",
                    ANNOUNCEMENT_LANDING_PAGE_ALL_TOPIC_ITEM: "announcement_landing_page_all_topic_item",
                    ANNOUNCEMENT_LANDING_PAGE_LATEST_ARTICLE: "announcement_landing_page_latest_article",
                    ANNOUNCEMENT_ARTICLE_LIST_PAGE_BREAD_CRUMB: "announcement_article_list_page_bread_crumb",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE_BREAD_CRUMB: "announcement_article_detail_page_bread_crumb",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE_INARTICLE_CLICK: "announcement_article_detail_page_inarticle_click",
                    FAQ_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_TOP_WEB: "faq_article_detail_page_register_widget_top_web",
                    FAQ_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_BOTTOM: "faq_article_detail_page_register_widget_bottom",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_TOP_WEB: "announcement_article_detail_page_register_widget_top_web",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_BOTTOM: "announcement_article_detail_page_register_widget_bottom",
                    FAQ_ARTICLE_DETAIL_PAGE_SHARE_BUTTON: "faq_article_detail_page_share_button",
                    ANNOUNCEMENT_ARTICLE_DETAIL_PAGE_SHARE_BUTTON: "announcement_article_detail_page_share_button",
                    COIN_PRICE_FOLD: "coin_price_fold",
                    COIN_PRICE_COINS: "coin_price_coins",
                    POPULAR_COINS: "popular_coins",
                    POPULAR_COINS_MORE: "popular_coins_more",
                    SHARE_ENTRANCE: "share_entrance",
                    SHARE_CLICK: "share_click",
                    EXIT_INTENT_CLAIM_REWARD: "exit_intent_claim_reward",
                    SHARE_TRAFFIC_REGISTER_POPUP_CANCEL: "share_traffic_register_popup_cancel",
                    SHARE_TRAFFIC_REGISTER_POPUP_SIGNUP: "share_traffic_register_popup_signup",
                    EXIT_INTENT_EXPOSURE: "exit_intent_exposure",
                    SHARE_TRAFFIC_REGISTER_POPUP_EXPOSURE: "share_traffic_register_popup_exposure",
                    LIST_PAGE_TAB_CLICK: "list_page_tab_click",
                    LIST_PAGE_PAGE_CLICK: "list_page_page_click",
                    LIST_PAGE_ITEM_CLICK: "list_page_item_click"
                },
                g = {
                    WEB_CLICK: "webClick",
                    PAGE_VIEW: "pageView",
                    COMPONENT_SHOW: "ComponentShow"
                },
                v = function(e) {
                    (0, p.YW)({
                        nameSpace: c.Lv,
                        type: g.WEB_CLICK,
                        props: e
                    }), l(g.WEB_CLICK, e)
                },
                h = function(e) {
                    (0, p.YW)({
                        nameSpace: c.Lv,
                        type: g.PAGE_VIEW,
                        props: e
                    }), l(g.PAGE_VIEW, e)
                },
                m = function(e) {
                    (0, p.YW)({
                        nameSpace: c.Lv,
                        type: g.COMPONENT_SHOW,
                        props: e
                    }), l(g.COMPONENT_SHOW, e)
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.hostname,
                        n = void 0 === r ? "" : r,
                        o = n.split(".");
                    return o.length > 2 ? o.slice(-e).join(".") : n
                },
                y = function(e) {
                    return e ? e.replace(/%/g, "%25").replace(/#/g, "%23").replace(/\&/g, "%26").replace(/\+/g, "%2B").replace(/\//g, "%2F") : ""
                },
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(t).reduce((function(e, r) {
                        return e.replace(new RegExp("%".concat(r, "%"), "g"), t[r])
                    }), e || "")
                },
                w = r("Dz1D"),
                x = function() {
                    var e = (0, w.PC)(),
                        t = e.API_HOST,
                        r = e.STATIC_HOST,
                        n = e.STATIC_HOST_SHARE;
                    return {
                        API_HOST: t,
                        SITE_HOST: e.SITE_HOST,
                        STATIC_HOST: r,
                        STATIC_HOST_SHARE: n,
                        ICON_HOST: "https://www.devfdg.net",
                        IS_PROD: !1
                    }
                },
                E = x(),
                A = (E.API_HOST, E.STATIC_HOST),
                S = E.STATIC_HOST_SHARE,
                k = E.SITE_HOST,
                O = E.ICON_HOST;
            E.IS_PROD;
            console.log("debug mp env:", x());
            "".concat(O, "/bapi/fe/micro/static/icon");
            var T = "".concat(S, "/static/images/cms/faq-og-1.jpg"),
                B = "".concat(S, "/static/images/cms/announcement-og-2.png"),
                P = "".concat(S, "/static/images/common/ogImage.jpg");

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = b(2);
                e.startsWith("https://www.binance.com") && (e = e.replace("binance.com", r)), (e = e.replace("{{subdomain}}", r).replace("/{{lang}}", "")).startsWith("http") || (e = "https://www.".concat(b(2)).concat(e)), e.startsWith("https://{{domain}}") && (e = e.replace("https://{{domain}}", "")), window.open(e, !1 === (null === t || void 0 === t ? void 0 : t.external) ? "_self" : "_blank")
            }
            var F = r("Azhy"),
                R = r.n(F),
                N = r("Bk23"),
                D = "Android",
                I = "iOS",
                L = "mobile web",
                j = "electron",
                M = "desktop",
                H = "mp",
                U = "others",
                G = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return R().getParser(e).getPlatformType()
                },
                W = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "Electron" === R().getParser(e).getBrowserName()
                },
                z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return R().getParser(e).getOSName()
                },
                V = function(e) {
                    return e === D || e === I ? e : L
                },
                q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (N.g) return H;
                    if (W(e)) return j;
                    var t = G(e);
                    if ("desktop" === t) return M;
                    if ("mobile" === t) {
                        var r = z(e);
                        return V(r)
                    }
                    return U
                },
                K = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            headers: {}
                        };
                    return t ? (null === r || void 0 === r || null === (e = r.headers) || void 0 === e ? void 0 : e["user-agent"]) || "" : window.navigator.userAgent || ""
                },
                $ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = t;
                    if (!e) return r;
                    var n = e.replace("#", "").split("-").filter((function(e) {
                        return e
                    }));
                    try {
                        n.forEach((function(e) {
                            var t = r.catalogs.find((function(t) {
                                var r = t.catalogId;
                                return String(r) === e
                            }));
                            t && (r = t)
                        }))
                    } catch (o) {}
                    return r
                },
                Q = {
                    "#1c1e29": "t.primary",
                    "#1a1a1b": "t.primary",
                    "#1e2329": "t.primary",
                    "#181a20": "bg5",
                    "#000000": "t.primary",
                    "#000": "t.primary",
                    "#1e2026": "t.primary",
                    "#0e101a": "t.primary",
                    "#202124": "t.primary",
                    "#333333": "t.primary",
                    "#333": "t.primary",
                    "#0f0f0f": "t.primary",
                    "#14151a": "t.primary",
                    "#242a31": "t.primary",
                    "#222231": "t.primary",
                    "#ffffff": "bg1",
                    "#fff": "bg1",
                    "rgb\\(0,0,0\\)": "t.primary",
                    "rgb\\(30,32,38\\)": "t.primary",
                    "rgb\\(30,35,41\\)": "t.primary",
                    "rgb\\(51,51,51\\)": "t.primary",
                    "#474d57": "t.secondary",
                    "#707a8a": "t.third",
                    "#b7bdc6": "t.placeholder"
                },
                Y = function(e) {
                    var t, r;
                    (null === (t = e.attr) || void 0 === t ? void 0 : t.style) && Object.keys(Q).forEach((function(t) {
                        var r = Q[t];
                        if (Array.isArray(e.attr.style)) {
                            var n = e.attr.style.join("");
                            /^color:.*\)$/.test(n) ? e.attr.style = n.replace(new RegExp(t, "gi"), r) : e.attr.style.forEach((function(n, o) {
                                e.attr.style[o] = n.replace(new RegExp(t, "gi"), r)
                            }))
                        } else "string" === typeof e.attr.style && (e.attr.style = e.attr.style.replace(new RegExp(t, "gi"), r))
                    })), (null === (r = e.child) || void 0 === r ? void 0 : r.length) > 0 && e.child.forEach((function(e) {
                        return Y(e)
                    }))
                },
                J = function(e) {
                    if (e) {
                        var t = new RegExp("<p>(<iframe(.*?)</iframe>)</p>", "gi"),
                            r = new RegExp("(<a(.*?)</a>)", "gi"),
                            n = new RegExp("specialSrc", "g");
                        return e.replace(t, N.g ? "$1" : '<div class="cms-video relative" style="padding: 56.25% 0px 0px;"><div class="w-full h-full absolute left-0 top-0">$1</div></div>').replace(r, N.g ? "$1" : '<div class="cms-link">$1</div>').replace(n, "src")
                    }
                    return e
                },
                Z = r("ZSsA"),
                X = {
                    brand: {
                        en: "Binance",
                        cn: "\u5e01\u5b89",
                        tw: "\u5e01\u5b89",
                        kr: "\ubc14\uc774\ub0b8\uc2a4",
                        ru: "\u0411\u0438\u043d\u0430\u043d\u0441",
                        es: "Binance",
                        fr: "Binance",
                        de: "Binance",
                        vn: "Binance",
                        tr: "Binance",
                        nl: "Binance",
                        pt: "Binance",
                        it: "Binance",
                        pl: "Binance"
                    },
                    metaKeyword: {
                        en: "Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex",
                        cn: "\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u5e01\u5e01\u4ea4\u6613,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u5e01\u5b89,\u6760\u6746\u671f\u8d27,Binance",
                        tw: "\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u5e01\u5e01\u4ea4\u6613,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u5e01\u5b89,\u6760\u6746\u671f\u8d27,Binance",
                        kr: "\ube14\ub85d\uccb4\uc778 \uac70\ub798\uc18c, \uac00\uc0c1\ud654\ud3d0 \uac70\ub798\uc18c, \ube44\ud2b8\ucf54\uc778 \uac70\ub798, \uc774\ub354\ub9ac\uc6c0 \uac00\uaca9 \ub3d9\ud5a5, BNB, CZ, BTC \uc2dc\uc138, ETH \uc9c0\uac11 \ub4f1\ub85d, LTC \ube44\uc138, \ubc14\uc774\ub0b8\uc2a4, \ud3f4\ub85c\ub2c8\uc5d1\uc2a4. \ube44\ud2b8\ub809\uc2a4",
                        ru: "\u0411\u043b\u043e\u043a\u0447\u0435\u043d \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430, \u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430, \u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f \u043d\u0430 \u0431\u0438\u0442\u043a\u043e\u0438\u043d, \u0446\u0435\u043d\u043e\u0432\u043e\u0439 \u0442\u0440\u0435\u043d\u0434 Ethereum, BNB, CZ, \u0446\u0435\u043d\u0430 BTC, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 ETH, \u0446\u0435\u043d\u0430 LTC, \u0431\u0438\u043d\u0430\u043d\u0441, Poloniex, Bittrex",
                        es: "Cripto Monedas Blockchain Exchange, Compra Venta de Bitcoin, Tendencia de Precio Ethereum, BNB, CZ, BTC precio, ETH registro cartera, LTC precio, Binance, Poloniex, Bittrex",
                        fr: "Cryptomonnaie Blockchain Echange, Cryptommonaie Echange, Achat Vente de Bitcoin, Tendance des prix ETH, BNB, CZ, Prix du BTC, ETH cr\xe9ation de porte-monnaie, Prix du LTC, Binance, Poloniex, Bittrex",
                        de: "Blockchain und Krypto- Handelsplattform, Handelsplattform f\xfcr Kryptow\xe4hrung, Bitcoin Handeln, Ethereum Preis Trend, BNB, CZ, BTC Preis, ETH-Wallet Anmeldung, LTC Preis, Binance, Poloniex, Bittrex",
                        vn: "S\xe0n giao d\u1ecbch Blockchain Crypto, S\xe0n giao d\u1ecbch Cryptocurrency, Bitcoin Trading, xu h\u01b0\u1edbng gi\xe1 Ethereum , BNB, CZ, gi\xe1 BTC, \u0111\u0103ng k\xed v\xed ETH , gi\xe1 LTC, Binance, Poloniex, Bittrex",
                        tr: "Blockchain Kripto Borsas\u0131, Kripto Para Borsas\u0131,Bitcoin al\u0131m sat\u0131m, Ethereum fiyat trendi,BNB,CZ,BTC fiyat\u0131, Ethereum c\xfczdan kayd\u0131,LTC fiyat\u0131, Binance, Poloniex, Bittrex.",
                        nl: "Blockchain Crypto wisselkoers, Cryptocurrency wisselkoers, Bitcoin handel, Ethereum prijsontwikkeling, BNB, CZ, BTC-prijs, ETH-portemonnee-registratie, LTC-prijs, Binance",
                        pt: "Criptomoedas, Blockchain Cripto Bolsa, Bolsa de Criptomoedas, Bitcoin Trading, Tend\xeancia de pre\xe7os Ethereum, BNB, CZ, pre\xe7o BTC, registro carteira ETH, pre\xe7o LTC, Binance",
                        it: "chiave: Blockchain Piattaforma di scambio di Cripto, Criptomonete, Piattaforma di scambio, Trading di Bitcoin, Trend del prezzo di Ethereum, BNB, CZ, Prezzo di BTC, Registro del Portafoglio di ETH, Prezzo di LTC, Binance, Poloniex, Bittrex",
                        pl: "Gie\u0142da wymiany kryptowalut, handel kryptowalutami, handel walutami cyfrowymi, konto do walut wirtualnych, system handlu bitcoinami, rynek Ethereum, Litecoin, BNB, Zhao Changpeng, cena BTC, rejestracja portfela ETH, cena rynkowa LTC, opcje futures, Binance"
                    },
                    metaDescriptions: {
                        en: "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume",
                        cn: "\u5e01\u5b89\u662f\u5168\u7403\u9886\u5148\u7684\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e01\u3001\u4ee5\u592a\u574a\u3001BNB\u4ee5\u53caUSDT\u4ea4\u6613",
                        tw: "\u5e63\u5b89\u662f\u5168\u7403\u9818\u5148\u7684\u6578\u5b57\u8ca8\u5e63\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e63\u3001\u4ee5\u592a\u574a\u3001BNB\u4ee5\u53caUSDT\u4ea4\u6613",
                        kr: "\ubc14\uc774\ub0b8\uc2a4 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c - \ube44\ud2b8\ucf54\uc778\uacfc \uc54c\ud2b8\ucf54\uc778\uc744 \uac70\ub798\ud560 \uc218 \uc788\ub294 \uc804\uc138\uacc4 \ucd5c\ub300 \uaddc\ubaa8\uc758 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c\uc785\ub2c8\ub2e4",
                        ru: "\u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430 Binance - \u041c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0435\u0439 \u0432 \u043c\u0438\u0440\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u043e\u0439 \u0431\u0438\u0440\u0436\u0435\u0439 \u0411\u0438\u0442\u043a\u043e\u0438\u043d \u0438 \u0430\u043b\u044c\u0442\u043a\u043e\u0438\u043d\u043e\u0432 \u043f\u043e \u043e\u0431\u044a\u0435\u043c\u0443",
                        es: "Binance Exchange de Criptomonedas - Operamos el exchange de criptomonedas con mayor volumen en el mundo",
                        fr: "Binance est une plateforme avanc\xe9e qui vous propose d\u2019\xe9changer BTC, ETH, BNB et d\u2019autres cryptomonnaies",
                        de: "Binance B\xf6rse f\xfcr Kryptow\xe4hrungen \u2013 Wir betreiben f\xfcr Bitcoin und Altcoins die gr\xf6\xdfte B\xf6rse der Welt nach Tradingvolumen",
                        vi: "S\xe0n giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 Binance - Ch\xfang t\xf4i l\xe0 s\xe0n giao d\u1ecbch Bitcoin v\xe0 Altcoin v\u1edbi kh\u1ed1i l\u01b0\u1ee3ng giao d\u1ecbch l\u1edbn nh\u1ea5t th\u1ebf gi\u1edbi",
                        tr: "Binance kriptopara borsas\u0131 - D\xfcnyan\u0131n en y\xfcksek hacimli bitcoin ve altcoin borsas\u0131n\u0131 i\u015fletiyoruz",
                        nl: "Binance cryptocurrency handelsplatform - Wij beheren's werelds grootste bitcoin en altcoin handelsplatform in de wereld gebaseerd op volume",
                        pt: "Binance, exchange de criptomoedas - n\xf3s operamos a maior exchange de bitcoin e altcoins do mundo por volume",
                        it: "Binance, exchange di criptovalute - Il maggior exchange di bitcoin e criptovalute del mondo per volume",
                        pl: "Binance - najwi\u0119ksza na \u015bwiecie gie\u0142da bitcoina i kryptowalut pod wzgl\u0119dem wolumen\xf3w handlowych"
                    }
                },
                ee = {
                    faq: "support-center-faqSeo",
                    1: "support-center-accountFunSeo",
                    2: "support-center-depositSeo",
                    3: "support-center-spotSeo",
                    4: "support-center-cryptoSeo",
                    5: "support-center-finacneSeo",
                    6: "support-center-apiSeo",
                    7: "support-center-securitySeo",
                    8: "support-center-serviceSeo"
                },
                te = function(e) {
                    var t = (0, Z.WX)(e);
                    return {
                        suffix: "cn" === (0, Z.o)(e) ? "\u5e01\u5b89" : "Binance Support",
                        brand: X.brand[t] || X.brand.en,
                        metaKeyword: X.metaKeyword[t] || X.metaKeyword.en,
                        metaDescription: X.metaDescriptions[t] || X.metaDescriptions.en
                    }
                },
                re = function(e) {
                    switch (e) {
                        case "faq":
                            return T;
                        case "announcement":
                            return B;
                        default:
                            return P
                    }
                },
                ne = function(e, t) {
                    var r = (0, Z.WX)(t),
                        n = (0, Z.o)(t),
                        o = X.metaKeyword[r] || X.metaKeyword.en;
                    return "cn" === n ? "\u5e01\u5b89" : e === c.$2.FAQ ? "Binance FAQ" : e === c.$2.ANNOUNCEMENT ? "Binance Announcement" : o
                },
                oe = function(e) {
                    return c.ek[e] || String(e)
                },
                ae = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (["0", "1", "2"].includes(e)) return e;
                    var t = e.toLowerCase();
                    if ("faq" === t) return String(c.ek.Faq);
                    if ("announcement" === t) return String(c.ek.Announcement);
                    if ("all" === t) return String(c.ek.All);
                    if ("" === t) return "";
                    throw new Error("Invalid search type")
                },
                ie = r("VP0d"),
                se = r("YmLP").A.isFinite;
            const ce = function(e) {
                return "number" == typeof e && se(e)
            };
            var ue = /\B(?=(\d{3})+(?!\d))/g;

            function le(e, t, r) {
                return e + (t.replace(/^0+/, "") || "0") + r.replace(/0+$/, "")
            }
            var pe = function(e) {
                    if (ce(e)) {
                        var t = e.toString();
                        if (!/e/i.test(t)) return t;
                        var r = (0, ie.A)(t.toLowerCase().split("e"), 2),
                            n = r[0],
                            o = r[1],
                            a = (0, ie.A)(n.replace(/^-/, "").split("."), 2),
                            i = a[0],
                            s = a[1],
                            c = void 0 === s ? "" : s,
                            u = n.startsWith("-") ? "-" : "",
                            l = parseInt(o, 10);
                        if (l >= 0) {
                            var p = c.length;
                            return l <= p ? le(u, i + c.slice(0, l), c.slice(l)) : u + (i + c + "0".repeat(l - p) || "0")
                        }
                        var f = -l,
                            d = i.length;
                        if (f < d) {
                            var g = d - f;
                            return le(u, i.slice(0, g), i.slice(g) + c)
                        }
                        var v = "0".repeat(f - d) + i + c;
                        return "".concat(u, "0.").concat(v.replace(/\.?0+$/, ""))
                    }
                },
                fe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!(!ce(e) || !ce(t) || t > 20 || t < 0)) {
                        var r = pe(e);
                        if (0 === t) return r;
                        var n = (0, ie.A)(r.split("."), 2),
                            o = n[0],
                            a = n[1],
                            i = void 0 === a ? "" : a,
                            s = i.padEnd(t, "0");
                        return "".concat(o, ".").concat(s)
                    }
                },
                de = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    if (!ce(e) || !ce(t) || t > 20 || t < 0) return n;
                    var o = pe(e);
                    if (0 === t) return o;
                    var a = (0, ie.A)(o.split("."), 2),
                        i = a[0],
                        s = a[1],
                        c = void 0 === s ? "" : s,
                        u = c.length;
                    if (u === t) return o;
                    if (u < t) return fe(e, t) || n;
                    var l = "".concat(i, ".").concat(c.substring(0, t));
                    if (r) {
                        var p = c.substring(t, t + 1);
                        if (parseInt(p, 10) >= 5) {
                            var f = Math.pow(10, t),
                                d = (Math.round(parseFloat(l) * f) + (e < 0 ? -1 : 1)) / f;
                            return fe(d, t) || n
                        }
                    }
                    return l
                };

            function ge(e) {
                var t = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "NaN";
                        if (!ce(e)) return n;
                        var o = de(e, t, r);
                        if (!o) return n;
                        var a = (0, ie.A)(o.split("."), 2),
                            i = a[0],
                            s = a[1],
                            c = void 0 === s ? "" : s,
                            u = i.replace(ue, ",");
                        return "".concat(u).concat(c ? ".".concat(c) : "")
                    }(e, e < .01 ? 8 : 2),
                    r = (0, ie.A)(t.split("."), 2),
                    n = (r[0], r[1]);
                return (void 0 === n ? "" : n).length > 2 ? t.replace(/0+$/, "") : t
            }
            var ve = function(e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                return Array.isArray(e) && e.length ? e.map((function(e) {
                    var o = {};
                    if (1 === r) {
                        var a = Number(e.o) ? Number(e.c) - Number(e.o) : 0,
                            i = a >= 0,
                            s = [i ? "+" : "", (Number(e.o) ? a / Number(e.o) * 100 : 0).toFixed(4), "%"].join("");
                        o.title = "".concat(e.b, "/").concat(e.q), o.icon = e.logo, o.baseAsset = e.b, o.quoteAsset = e.q, o.price = ge(Number(e.c)), o.color = i ? "#2ebd85" : "#f6465d", o.dayChange = s, o.link = "".concat(n, "/trade/").concat(e.b, "_").concat(e.q, "?type=spot")
                    } else {
                        var c = Number(e.dayChange) >= 0,
                            u = [c ? "+" : "", (Number(e.dayChange) || 0).toFixed(4), "%"].join(""),
                            l = t.rate,
                            p = t.symbol;
                        o.title = e.assetName, o.icon = e.logoUrl, o.baseAsset = e.baseAsset, o.quoteAsset = e.quoteAsset, o.subTitle = e.assetCode, o.price = ge(Number(e.price) * l), o.color = c ? "#2ebd85" : "#f6465d", o.dayChange = u, o.link = "".concat(n, "/trade/").concat(e.baseAsset, "_USDT?type=spot"), o.currencyIcon = p
                    }
                    return o
                })) : []
            };
            var he = function(e) {
                    switch (e) {
                        case 1:
                            return c.$2.ANNOUNCEMENT;
                        case 2:
                            return c.$2.FAQ;
                        default:
                            return ""
                    }
                },
                me = function(e) {
                    return !!e && /^[0-9]+$/.test(String(e))
                },
                be = function(e) {
                    return !!e && /^[0-9]+(-[0-9]+){0,2}$/.test(String(e))
                },
                ye = function(e) {
                    return !!e && /^([a-z0-9]{32}|\d{12})$/.test(String(e))
                },
                _e = function(e) {
                    return Array.from(new Set(e.map((function(e) {
                        return Number(e)
                    })))).filter(Boolean)
                },
                we = function(e, t) {
                    if (e && t) {
                        var r = document.querySelector(t);
                        if (r) {
                            var n = new IntersectionObserver(e);
                            return null === n || void 0 === n || n.observe(r),
                                function() {
                                    n && (n.unobserve(r), n.disconnect())
                                }
                        }
                    }
                },
                xe = r("sViW"),
                Ee = r("Pz56"),
                Ae = r.n(Ee);
            ! function() {
                var e = (0, xe.A)(Ae().mark((function e(t) {
                    return Ae().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        Zu0i: (e, t, r) => {
            "use strict";
            var n = r("E0uk");
            r.o(n, "addResponseInterceptor") && r.d(t, {
                addResponseInterceptor: function() {
                    return n.addResponseInterceptor
                }
            }), r.o(n, "fetch") && r.d(t, {
                fetch: function() {
                    return n.fetch
                }
            }), r.o(n, "get") && r.d(t, {
                get: function() {
                    return n.get
                }
            }), r.o(n, "post") && r.d(t, {
                post: function() {
                    return n.post
                }
            })
        },
        qjHo: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => n
            });
            var n = "I18N_BASE_PUBLIC"
        },
        sshP: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => J,
                y: () => Y
            });
            var n = r("tEf9"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("wIZF"),
                s = r("6FIE"),
                c = r("sViW"),
                u = r("888e"),
                l = r("ezuS"),
                p = r("BK7R"),
                f = r("gZfF"),
                d = r("Kzjd"),
                g = r("YvF5"),
                v = r("tKUM"),
                h = function e(t) {
                    var r = this;
                    (0, u.A)(this, e), this._i18nextIns = d.A.createInstance(), this.fetchingResourcesMap = new Map, this.currentNamespaces = [], this.addResources = function(e, t) {
                        var n = r;
                        t && t.length > 0 && (r.currentNamespaces = t);
                        var o = r.currentNamespaces.filter((function(t) {
                            var r = t.split("@"),
                                o = n._i18nextIns.hasResourceBundle(e, r[r.length - 1]);
                            return !o || 0 === Object.keys(o).length
                        }));
                        if (0 !== o.length) {
                            var i = r.fetchingResourcesMap.get(e);
                            if (!i) {
                                var s = r,
                                    u = r;
                                i = Promise.all(o.map(function() {
                                    var t = (0, c.A)(a().mark((function t(r) {
                                        var n, o, i, s;
                                        return a().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return n = r.split("@"), o = n[n.length - 1], i = n.length > 1 ? n[0] : void 0, t.next = 5, (0, g.A)({
                                                        lng: e,
                                                        ns: o,
                                                        fallback: !0,
                                                        basePath: u.basePath,
                                                        customPath: i
                                                    });
                                                case 5:
                                                    return s = t.sent, u._i18nextIns.addResources(e, o, s), t.abrupt("return", {
                                                        res: s,
                                                        ns: o
                                                    });
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }())).then((function(e) {
                                    return e.reduce((function(e, t) {
                                        var r = t.res;
                                        return e[t.ns] = r, e
                                    }), {})
                                })), i.then((function() {
                                    return s.fetchingResourcesMap.delete(e)
                                })), r.fetchingResourcesMap.set(e, i)
                            }
                            return i
                        }
                    };
                    var n = this;
                    this._init = function() {
                        var e = (0, c.A)(a().mark((function e(t) {
                            var r, o, i, s, c, u, d, g, h;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = (r = t || {}).lng, i = r.resources, s = void 0 === i ? {} : i, c = r.ns, u = (0, f.A)(r, ["lng", "resources", "ns"]), o || (o = (0, v.getLanguage)() || "en"), c) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("i18n namespaces is required");
                                    case 4:
                                        n.currentNamespaces = Array.isArray(c) ? c : [c], d = n.currentNamespaces.map((function(e) {
                                            var t = e.split("@");
                                            return t[t.length - 1]
                                        })), e.next = 8;
                                        break;
                                    case 8:
                                        return g = (0, p.A)({
                                            lng: o,
                                            resources: s,
                                            ns: d,
                                            fallbackLng: "en",
                                            defaultNS: d[0],
                                            keySeparator: !1
                                        }, u), e.next = 11, n._i18nextIns.init(g);
                                    case 11:
                                        if (!o || (null === t || void 0 === t ? void 0 : t.resources)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 14, n.addResources(o);
                                    case 14:
                                        (h = e.sent) && (s = (0, l.A)({}, o, h));
                                    case 16:
                                        return e.abrupt("return", s);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    var o = this;
                    this._addNamespaces = function() {
                        var e = (0, c.A)(a().mark((function e(t, r) {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o._i18nextIns.isInitialized) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("i18nInstance has not been initialized");
                                    case 2:
                                        return e.abrupt("return", o.addResources(t, r));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }();
                    var i = this;
                    this.setLanguage = function() {
                        var e = (0, c.A)(a().mark((function e(t) {
                            var r;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i._i18nextIns.isInitialized) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("i18nInstance has not been initialized");
                                    case 3:
                                        return e.next = 5, i.addResources(t);
                                    case 5:
                                        i._i18nextIns.changeLanguage(t), (null === (r = window.chrome) || void 0 === r ? void 0 : r.runtime) && localStorage.setItem("pika_i18n_lang", t);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.translate = this._i18nextIns.t.bind(this._i18nextIns), this.basePath = null === t || void 0 === t ? void 0 : t.basePath
                };
            var m = r("DTvD"),
                b = r("Dz1D"),
                y = r("qjHo"),
                _ = {},
                w = function() {
                    return "undefined" !== typeof window.localStorage
                },
                x = function() {
                    if (!w()) return _;
                    var e = localStorage.getItem("i18n-usage"),
                        t = _;
                    if (e) try {
                        t = JSON.parse(e), t = Object.assign({}, _, t)
                    } catch (error) {
                        console.error("Error parsing i18n-usage:", error)
                    }
                    return t
                },
                E = function() {
                    function e() {
                        (0, u.A)(this, e), this.type = "postProcessor", this.name = "i18n-clean-processor"
                    }
                    return e.prototype.process = function(e, t, r) {
                        var n = r && r.ns ? r.ns : "default";
                        return _[n] || (_[n] = {}), _[n][t] || (_[n][t] = 1),
                            function(e) {
                                if (w()) try {
                                    var t = x(),
                                        r = JSON.stringify(Object.assign({}, t, e));
                                    localStorage.setItem("i18n-usage", r)
                                } catch (error) {
                                    console.error("Error setting i18n-usage:", error)
                                }
                            }(_), e
                    }, e
                }();
            const A = new E;

            function S(e) {
                return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, S(e)
            }

            function k() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : S(XMLHttpRequest))
            }
            var O, T, B, P = r("47/P"),
                C = r.t(P, 2);

            function F(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(r), !0).forEach((function(t) {
                        N(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function N(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != D(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != D(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == D(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function D(e) {
                return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, D(e)
            }
            "function" === typeof fetch && (O = "undefined" !== typeof global && global.fetch ? global.fetch : window.fetch ? window.fetch : fetch), k() && ("undefined" !== typeof global && global.XMLHttpRequest ? T = global.XMLHttpRequest : window.XMLHttpRequest && (T = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? B = global.ActiveXObject : window.ActiveXObject && (B = window.ActiveXObject)), O || !C || T || B || (O = P || C), "function" !== typeof O && (O = void 0);
            var I = function(e, t) {
                    if (t && "object" === D(t)) {
                        var r = "";
                        for (var n in t) r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
                        if (!r) return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + r.slice(1)
                    }
                    return e
                },
                L = function(e, t, r, n) {
                    var o = function(e) {
                        if (!e.ok) return r(e.statusText || "Error", {
                            status: e.status
                        });
                        e.text().then((function(t) {
                            r(null, {
                                status: e.status,
                                data: t
                            })
                        })).catch(r)
                    };
                    if (n) {
                        var a = n(e, t);
                        if (a instanceof Promise) return void a.then(o).catch(r)
                    }
                    "function" === typeof fetch ? fetch(e, t).then(o).catch(r) : O(e, t).then(o).catch(r)
                },
                j = !1;
            const M = function(e, t, r, n) {
                return "function" === typeof r && (n = r, r = void 0), n = n || function() {}, O && 0 !== t.indexOf("file:") ? function(e, t, r, n) {
                    e.queryStringParams && (t = I(t, e.queryStringParams));
                    var o = R({}, "function" === typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    r && (o["Content-Type"] = "application/json");
                    var a = "function" === typeof e.requestOptions ? e.requestOptions(r) : e.requestOptions,
                        i = R({
                            method: r ? "POST" : "GET",
                            body: r ? e.stringify(r) : void 0,
                            headers: o
                        }, j ? {} : a),
                        s = "function" === typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                    try {
                        L(t, i, n, s)
                    } catch (c) {
                        if (!a || 0 === Object.keys(a).length || !c.message || c.message.indexOf("not implemented") < 0) return n(c);
                        try {
                            Object.keys(a).forEach((function(e) {
                                delete i[e]
                            })), L(t, i, n, s), j = !0
                        } catch (u) {
                            n(u)
                        }
                    }
                }(e, t, r, n) : k() || "function" === typeof ActiveXObject ? function(e, t, r, n) {
                    r && "object" === D(r) && (r = I("", r).slice(1)), e.queryStringParams && (t = I(t, e.queryStringParams));
                    try {
                        var o;
                        (o = T ? new T : new B("MSXML2.XMLHTTP.3.0")).open(r ? "POST" : "GET", t, 1), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!e.withCredentials, r && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
                        var a = e.customHeaders;
                        if (a = "function" === typeof a ? a() : a)
                            for (var i in a) o.setRequestHeader(i, a[i]);
                        o.onreadystatechange = function() {
                            o.readyState > 3 && n(o.status >= 400 ? o.statusText : null, {
                                status: o.status,
                                data: o.responseText
                            })
                        }, o.send(r)
                    } catch (s) {
                        console && console.log(s)
                    }
                }(e, t, r, n) : void n(new Error("No fetch and no xhr implementation found!"))
            };

            function H(e) {
                return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, H(e)
            }

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach((function(t) {
                        V(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function W(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function z(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, q(n.key), n)
                }
            }

            function V(e, t, r) {
                return (t = q(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function q(e) {
                var t = function(e, t) {
                    if ("object" != H(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != H(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == H(t) ? t : String(t)
            }
            var K = function() {
                    return {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        parse: function(e) {
                            return JSON.parse(e)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(e, t, r) {
                            return V({}, t, r || "")
                        },
                        parseLoadPayload: function(e, t) {},
                        request: M,
                        reloadInterval: !1,
                        customHeaders: {},
                        queryStringParams: {},
                        crossDomain: !1,
                        withCredentials: !1,
                        overrideMimeType: !1,
                        requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default"
                        }
                    }
                },
                $ = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        W(this, e), this.services = t, this.options = r, this.allOptions = n, this.type = "backend", this.init(t, r, n)
                    }
                    var t, r, n;
                    return t = e, r = [{
                        key: "init",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = e, this.options = G(G(G({}, K()), this.options || {}), r), this.allOptions = n, this.services && this.options.reloadInterval && setInterval((function() {
                                return t.reload()
                            }), this.options.reloadInterval)
                        }
                    }, {
                        key: "readMulti",
                        value: function(e, t, r) {
                            this._readAny(e, e, t, t, r)
                        }
                    }, {
                        key: "read",
                        value: function(e, t, r) {
                            this._readAny([e], e, [t], t, r)
                        }
                    }, {
                        key: "_readAny",
                        value: function(e, t, r, n, o) {
                            var a, i = this,
                                s = this.options.loadPath;
                            "function" === typeof this.options.loadPath && (s = this.options.loadPath(e, r)), (s = function(e) {
                                return !!e && "function" === typeof e.then
                            }(a = s) ? a : Promise.resolve(a)).then((function(a) {
                                if (!a) return o(null, {});
                                var s = i.services.interpolator.interpolate(a, {
                                    lng: e.join("+"),
                                    ns: r.join("+")
                                });
                                i.loadUrl(s, o, t, n)
                            }))
                        }
                    }, {
                        key: "loadUrl",
                        value: function(e, t, r, n) {
                            var o = this,
                                a = "string" === typeof r ? [r] : r,
                                i = "string" === typeof n ? [n] : n,
                                s = this.options.parseLoadPayload(a, i);
                            this.options.request(this.options, e, s, (function(a, i) {
                                if (i && (i.status >= 500 && i.status < 600 || !i.status)) return t("failed loading " + e + "; status code: " + i.status, !0);
                                if (i && i.status >= 400 && i.status < 500) return t("failed loading " + e + "; status code: " + i.status, !1);
                                if (!i && a && a.message && a.message.indexOf("Failed to fetch") > -1) return t("failed loading " + e + ": " + a.message, !0);
                                if (a) return t(a, !1);
                                var s, c;
                                try {
                                    s = "string" === typeof i.data ? o.options.parse(i.data, r, n) : i.data
                                } catch (u) {
                                    c = "failed parsing " + e + " to json"
                                }
                                if (c) return t(c, !1);
                                t(null, s)
                            }))
                        }
                    }, {
                        key: "create",
                        value: function(e, t, r, n, o) {
                            var a = this;
                            if (this.options.addPath) {
                                "string" === typeof e && (e = [e]);
                                var i = this.options.parsePayload(t, r, n),
                                    s = 0,
                                    c = [],
                                    u = [];
                                e.forEach((function(r) {
                                    var n = a.options.addPath;
                                    "function" === typeof a.options.addPath && (n = a.options.addPath(r, t));
                                    var l = a.services.interpolator.interpolate(n, {
                                        lng: r,
                                        ns: t
                                    });
                                    a.options.request(a.options, l, i, (function(t, r) {
                                        s += 1, c.push(t), u.push(r), s === e.length && "function" === typeof o && o(c, u)
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            var e = this,
                                t = this.services,
                                r = t.backendConnector,
                                n = t.languageUtils,
                                o = t.logger,
                                a = r.language;
                            if (!a || "cimode" !== a.toLowerCase()) {
                                var i = [],
                                    s = function(e) {
                                        n.toResolveHierarchy(e).forEach((function(e) {
                                            i.indexOf(e) < 0 && i.push(e)
                                        }))
                                    };
                                s(a), this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                    return s(e)
                                })), i.forEach((function(t) {
                                    e.allOptions.ns.forEach((function(e) {
                                        r.read(t, e, "read", null, null, (function(n, a) {
                                            n && o.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), n), !n && a && o.log("loaded namespace ".concat(e, " for language ").concat(t), a), r.loaded("".concat(t, "|").concat(e), n, a)
                                        }))
                                    }))
                                }))
                            }
                        }
                    }], r && z(t.prototype, r), n && z(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }();
            $.type = "backend";
            const Q = $;
            var Y = (0, m.createContext)(null),
                J = function(e) {
                    var t = e.namespaces,
                        r = e.basePath,
                        o = e.nsSeparator,
                        c = e.keySeparator,
                        u = (0, b.PC)(),
                        l = new h({
                            basePath: r
                        }),
                        p = (l._init, l._i18nextIns),
                        f = l.setLanguage,
                        d = l._addNamespaces,
                        g = (0, i.__rest)(l, ["_init", "_i18nextIns", "setLanguage", "_addNamespaces"]),
                        v = "";
                    return Object.assign({
                        init: function(e) {
                            return (0, i.__awaiter)(this, void 0, void 0, a().mark((function i() {
                                var f, d, g, h, m, b, _, w, x, E;
                                return a().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if ((f = e || {}).ns || (f.ns = t.slice()), f.ns = Array.from(new Set(f.ns)), p.use(A), d = [], g = !0, h = !1, m = void 0, !f.postProcess) {
                                                a.next = 21;
                                                break
                                            }
                                            for (a.prev = 5, b = f.postProcess[Symbol.iterator](); !(g = (_ = b.next()).done); g = !0) w = _.value, d.push(w.name), p.use(w);
                                            a.next = 13;
                                            break;
                                        case 9:
                                            a.prev = 9, a.t0 = a.catch(5), h = !0, m = a.t0;
                                        case 13:
                                            a.prev = 13, a.prev = 14, g || null == b.return || b.return();
                                        case 16:
                                            if (a.prev = 16, !h) {
                                                a.next = 19;
                                                break
                                            }
                                            throw m;
                                        case 19:
                                            return a.finish(16);
                                        case 20:
                                            return a.finish(13);
                                        case 21:
                                            return r && p.use(Q), x = f.ns.slice(), E = {
                                                alternateFetch: s.fetch,
                                                loadPath: function(e, t) {
                                                    if (t.every((function(e) {
                                                            return x.includes(e)
                                                        })) || !e.includes(v || p.language)) return "";
                                                    if (1 === t.length) {
                                                        var r = t[0].split("@");
                                                        if (r.length > 1) return "".concat(u[y.x], "/").concat(r[0], "/{{lng}}/").concat(r[r.length - 1])
                                                    }
                                                    return "".concat(u[y.x], "/{{lng}}/{{ns}}")
                                                }
                                            }, a.next = 25, l._init(Object.assign(Object.assign({
                                                backend: E,
                                                react: {
                                                    useSuspense: !1
                                                },
                                                partialBundledLanguages: !0,
                                                nsSeparator: o,
                                                keySeparator: c || !1
                                            }, f), {
                                                postProcess: [A.name].concat((0, n.A)(d))
                                            }));
                                        case 25:
                                            return a.abrupt("return", a.sent);
                                        case 26:
                                        case "end":
                                            return a.stop()
                                    }
                                }), i, null, [
                                    [5, 9, 13, 21],
                                    [14, , 16, 20]
                                ])
                            })))
                        },
                        i18nextIns: p,
                        setLocale: function(e, t) {
                            return (0, i.__awaiter)(void 0, void 0, void 0, a().mark((function r() {
                                return a().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (v = e, r.t0 = t && t.length > 0, !r.t0) {
                                                r.next = 5;
                                                break
                                            }
                                            return r.next = 5, d(e, t);
                                        case 5:
                                            return r.abrupt("return", (r.t0 && r.sent, f(e)));
                                        case 6:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))
                        }
                    }, g)
                }
        },
        rsqs: (e, t, r) => {
            "use strict";
            r.d(t, {
                WX: () => p,
                o: () => f,
                pu: () => d,
                Zu: () => g
            });
            r("Kzjd");
            var n = r("VP0d"),
                o = r("blBx"),
                a = {
                    cn: "zh-cn",
                    tw: "zh-tw",
                    kr: "ko-kr",
                    ru: "ru-ru",
                    vn: "vi-vn",
                    it: "it-it",
                    es: "es-es",
                    de: "de-de",
                    fr: "fr-fr",
                    jp: "ja-jp"
                },
                i = r("6w+j"),
                s = r.n(i),
                c = (r("tKUM"), "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?")),
                u = s()((function(e) {
                    var t = "en",
                        r = "";
                    if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", "undefined" === typeof e ? "undefined" : (0, o.A)(e)), {
                        lang: t,
                        region: r,
                        path: e
                    };
                    var a, i, s, u = e.match(new RegExp("^".concat(c, "$")));
                    return u ? {
                        lang: t = void 0 === (i = (a = (0, n.A)(u, 4))[1]) ? "" : i,
                        region: r = void 0 === (s = a[3]) ? "" : s,
                        path: e
                    } : {
                        lang: t,
                        region: r,
                        path: e
                    }
                }));

            function l(e) {
                return "string" !== typeof e ? e : (a[e] || e).toLowerCase()
            }

            function p(e) {
                return u(l(e)).lang
            }

            function f(e) {
                return u(l(e)).region
            }

            function d(e) {
                return ((null === e || void 0 === e ? void 0 : e.headers.k8scluster) || "").includes("nskey")
            }

            function g(e) {
                return Object.keys(e).reduce((function(t, r) {
                    var n = e[r],
                        o = Object.keys(n).reduce((function(e, t) {
                            return e[t] = "".concat(r, ":").concat(t), e
                        }), {});
                    return t[r] = o, t
                }), {})
            }
        },
        ztXJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => o
            });
            var n = r("DTvD"),
                o = (0, n.createContext)("")
        },
        Mp1J: (e, t, r) => {
            "use strict";
            var n = r("qK3R"),
                o = r("lmEU");
            (0, n.setReporter)((function(e) {
                return (0, o.z)({
                    key: "traceReporter",
                    data: e
                })
            }))
        },
        lmEU: (e, t, r) => {
            "use strict";

            function n(e) {
                window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push(e)
            }
            r.d(t, {
                z: () => n
            })
        },
        "+HTX": (e, t, r) => {
            "use strict";
            r.d(t, {
                AC: () => a,
                uz: () => i
            });
            var n = r("h+kG");

            function o(e) {
                n.OW._bn_reporter = n.OW._bn_reporter || [], n.OW._bn_reporter.push(e)
            }
            var a = function(e) {
                    o({
                        data: e,
                        key: "reportTrackEvent"
                    })
                },
                i = function(e) {
                    return o({
                        data: e,
                        key: "trackInit"
                    })
                }
        },
        "7laY": (e, t, r) => {
            "use strict";
            r.d(t, {
                j2: () => B,
                qd: () => C,
                K2: () => F,
                z0: () => P,
                ik: () => R,
                w8: () => N,
                vT: () => E,
                C0: () => S,
                mt: () => k,
                $r: () => A,
                eL: () => O,
                Wu: () => T
            });
            var n = "#FFFFFF",
                o = "#FAFAFA",
                a = "#F5F5F5",
                i = "#EAECEF",
                s = "#D8DCE1",
                c = "#B7BDC6",
                u = "#848E9C",
                l = "#707A8A",
                p = "#434C5A",
                f = "#333B47",
                d = "#29313D",
                g = "#202630",
                v = "#FCD535",
                h = "#F0B90B",
                m = "#E6FFF1",
                b = "#2EBD85",
                y = "#102821",
                _ = "#FEF1F2",
                w = "#F6465D",
                x = "#35141D",
                E = {
                    BasicBg: n,
                    SecondaryBg: o,
                    Input: a,
                    InputLine: s,
                    CardBg: n,
                    TagBg: i,
                    Line: i,
                    DisableBtn: s,
                    Grid: i,
                    DisabledText: c,
                    DisableText: c,
                    Placeholder: c,
                    TertiaryText: c,
                    SecondaryText: u,
                    PrimaryText: g,
                    RedGreenBgText: n,
                    EmphasizeText: "#FF693D",
                    TextOnGray: i,
                    TextOnYellow: g,
                    IconNormal: "#929AA5",
                    ToastBg: l,
                    BtnBg: v,
                    PrimaryYellow: h,
                    TextLink: "#D89F00",
                    TradeBg: a,
                    SellHover: w,
                    Sell: w,
                    TextSell: w,
                    DepthBuyBg: m,
                    BuyHover: b,
                    Buy: b,
                    TextBuy: b,
                    Error: w,
                    Success: b,
                    Vessel: o,
                    LiteBg1: n,
                    LiteBg2: o,
                    TextToast: h,
                    DepthSellBg: _,
                    SuccessBg: m,
                    TwoColorIcon: p,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                A = {
                    DepthBuyBg: _,
                    BuyHover: w,
                    Buy: w,
                    TextBuy: w,
                    DepthSellBg: m,
                    SellHover: b,
                    Sell: b,
                    TextSell: b
                },
                S = {
                    Sell: "#DD7A2B",
                    TextSell: "#DD7A2B",
                    SellHover: "#DD7A2B",
                    DepthSellBg: "#FFEFE2",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#1F8DF9",
                    DepthBuyBg: "#E6F3FF",
                    Error: "#DD7A2B",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                k = {
                    Sell: "#1F8DF9",
                    TextSell: "#1F8DF9",
                    SellHover: "#1F8DF9",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#DD7A2B",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#DD7A2B",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#DD7A2B",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                O = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#FFD9EB",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                T = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#FFD9EB",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                B = {
                    BasicBg: "#181E25",
                    SecondaryBg: "#191A1F",
                    Input: d,
                    InputLine: p,
                    CardBg: g,
                    TagBg: p,
                    Line: f,
                    DisableBtn: p,
                    Grid: f,
                    DisabledText: l,
                    DisableText: l,
                    Placeholder: p,
                    TertiaryText: "#4F5867",
                    SecondaryText: u,
                    PrimaryText: i,
                    RedGreenBgText: n,
                    EmphasizeText: "#FF693D",
                    TextOnGray: i,
                    TextOnYellow: g,
                    IconNormal: l,
                    ToastBg: l,
                    BtnBg: v,
                    PrimaryYellow: h,
                    TextLink: h,
                    TradeBg: "#0B0E11",
                    SellHover: w,
                    Sell: w,
                    TextSell: w,
                    DepthBuyBg: y,
                    BuyHover: b,
                    Buy: b,
                    TextBuy: b,
                    Error: w,
                    Success: b,
                    Vessel: d,
                    LiteBg1: n,
                    LiteBg2: o,
                    TextToast: h,
                    DepthSellBg: x,
                    SuccessBg: y,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                P = {
                    DepthBuyBg: x,
                    BuyHover: w,
                    Buy: w,
                    TextBuy: w,
                    DepthSellBg: y,
                    SellHover: b,
                    Sell: b,
                    TextSell: b
                },
                C = {
                    Sell: "#DD7A2B",
                    TextSell: "#DD7A2B",
                    SellHover: "#DD7A2B",
                    DepthSellBg: "#553821",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#1F8DF9",
                    DepthBuyBg: "#22384E",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                F = {
                    Sell: "#1F8DF9",
                    TextSell: "#1F8DF9",
                    SellHover: "#1F8DF9",
                    DepthSellBg: "#22384E",
                    Buy: "#DD7A2B",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#DD7A2B",
                    DepthBuyBg: "#553821",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                R = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#40172B",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                },
                N = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#40172B",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                }
        },
        "/kHH": (e, t, r) => {
            "use strict";
            r.d(t, {
                CY: () => d,
                Cc: () => u,
                NM: () => a,
                NY: () => o,
                Qx: () => g,
                bY: () => l,
                ep: () => s,
                k8: () => c,
                mC: () => i,
                ml: () => v,
                pJ: () => p,
                s: () => f
            });
            var n = r("t50Z"),
                o = {
                    BasicBg: n.wm[0],
                    SecondaryBg: n.wm[5],
                    Input: n.wm[10],
                    InputLine: n.wm[100],
                    CardBg: n.wm[0],
                    Vessel: n.wm[5],
                    Line: n.wm[50],
                    DisableBtn: n.wm[50],
                    DisabledText: n.wm[200],
                    DisableText: n.wm[200],
                    TertiaryText: n.wm[400],
                    SecondaryText: n.wm[600],
                    PrimaryText: n.wm[850],
                    RedGreenBgText: n.wm[0],
                    EmphasizeText: "#FF693D",
                    TextOnGray: n.wm[50],
                    TextOnYellow: n.wm[850],
                    IconNormal: n.wm[250],
                    LiteBg1: n.wm[0],
                    LiteBg2: n.wm[5],
                    BtnBg: n.D9[100],
                    PrimaryYellow: n.D9[200],
                    TextLink: n.D9[300],
                    TradeBg: n.wm[10],
                    TextToast: n.D9[500],
                    DepthSellBg: n.wv[10],
                    SellHover: n.wv[300],
                    Sell: n.wv[400],
                    TextSell: n.wv[450],
                    DepthBuyBg: n.wL[10],
                    BuyHover: n.wL[300],
                    Buy: n.wL[500],
                    TextBuy: n.wL[500],
                    Error: n.wv[450],
                    SuccessBg: n.wL[10],
                    Success: n.wL[500],
                    TagBg: n.wm[50],
                    Grid: n.wm[50],
                    Placeholder: n.wm[200],
                    ToastBg: n.wm[400],
                    TwoColorIcon: n.wm[600],
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                a = {
                    DepthBuyBg: n.wv[10],
                    BuyHover: n.wv[300],
                    Buy: n.wv[400],
                    TextBuy: n.wv[450],
                    DepthSellBg: n.wL[10],
                    SellHover: n.wL[300],
                    Sell: n.wL[500],
                    TextSell: n.wL[500]
                },
                i = {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#FFEFE2",
                    Buy: "#1F8DF9",
                    TextBuy: "#297FD4",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#E6F3FF",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                s = {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                c = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#FFD9EB",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                u = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#FFD9EB",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                l = {
                    BasicBg: n.wm[900],
                    SecondaryBg: n.wm[1e3],
                    Input: n.wm[700],
                    InputLine: n.wm[600],
                    CardBg: n.wm[800],
                    Vessel: n.wm[800],
                    Line: n.wm[700],
                    DisableBtn: n.wm[700],
                    DisabledText: n.wm[500],
                    DisableText: n.wm[500],
                    TertiaryText: n.wm[300],
                    SecondaryText: n.wm[200],
                    PrimaryText: n.wm[50],
                    RedGreenBgText: n.wm[0],
                    EmphasizeText: "#FF693D",
                    TextOnGray: n.wm[50],
                    TextOnYellow: n.wm[850],
                    IconNormal: n.wm[300],
                    LiteBg1: n.wm[850],
                    LiteBg2: n.wm[950],
                    BtnBg: n.D9[100],
                    PrimaryYellow: n.D9[200],
                    TextLink: n.D9[200],
                    TradeBg: n.wm[1e3],
                    TextToast: n.D9[400],
                    DepthSellBg: n.wv[800],
                    SellHover: n.wv[300],
                    Sell: n.wv[400],
                    TextSell: n.wv[400],
                    DepthBuyBg: n.wL[800],
                    BuyHover: n.wL[300],
                    Buy: n.wL[500],
                    TextBuy: n.wL[500],
                    Error: n.wv[400],
                    SuccessBg: n.wL[800],
                    Success: n.wL[500],
                    TagBg: n.wm[600],
                    Grid: n.wm[700],
                    Placeholder: n.wm[600],
                    ToastBg: n.wm[400],
                    TwoColorIcon: n.wm[150],
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                p = {
                    DepthBuyBg: n.wv[800],
                    BuyHover: n.wv[300],
                    Buy: n.wv[400],
                    TextBuy: n.wv[400],
                    DepthSellBg: n.wL[800],
                    SellHover: n.wL[300],
                    Sell: n.wL[500],
                    TextSell: n.wL[500]
                },
                f = {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#553821",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#22384E",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                d = {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                g = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#40172B",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                },
                v = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#40172B",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                }
        },
        MEAY: (e, t, r) => {
            "use strict";
            r.d(t, {
                bK: () => s,
                zd: () => c
            });
            var n = r("wIZF"),
                o = r("/kHH"),
                a = r("7laY"),
                i = r("t50Z"),
                s = {
                    reverse: (0, n.__assign)((0, n.__assign)({
                        sell: i.wL[400],
                        textSell: i.wL[500],
                        sellHover: i.wL[300],
                        depthSellBg: i.wL[10],
                        buy: i.wv[400],
                        textBuy: i.wv[450],
                        buyHover: i.wv[300],
                        depthBuyBg: i.wv[10]
                    }, o.NM), {
                        mobile: (0, n.__assign)({}, a.$r)
                    }),
                    cvd: (0, n.__assign)((0, n.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#FFEFE2",
                        buy: "#1F8DF9",
                        textBuy: "#297FD4",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#E6F3FF",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, o.mC), {
                        mobile: (0, n.__assign)({}, a.C0)
                    }),
                    "cvd-reverse": (0, n.__assign)((0, n.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, o.ep), {
                        mobile: (0, n.__assign)({}, a.mt)
                    }),
                    traditional: (0, n.__assign)((0, n.__assign)({}, o.k8), {
                        mobile: (0, n.__assign)({}, a.eL)
                    }),
                    "traditional-reverse": (0, n.__assign)((0, n.__assign)({}, o.Cc), {
                        mobile: (0, n.__assign)({}, a.Wu)
                    })
                },
                c = {
                    reverse: (0, n.__assign)((0, n.__assign)({
                        sell: i.wL[400],
                        textSell: i.wL[400],
                        sellHover: i.wL[300],
                        depthSellBg: i.wL[800],
                        buy: i.wv[400],
                        textBuy: i.wv[400],
                        buyHover: i.wv[300],
                        depthBuyBg: i.wv[800]
                    }, o.pJ), {
                        mobile: (0, n.__assign)({}, a.z0)
                    }),
                    cvd: (0, n.__assign)((0, n.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#553821",
                        buy: "#1F8DF9",
                        textBuy: "#1F8DF9",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#22384E",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, o.s), {
                        mobile: (0, n.__assign)({}, a.qd)
                    }),
                    "cvd-reverse": (0, n.__assign)((0, n.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, o.CY), {
                        mobile: (0, n.__assign)({}, a.K2)
                    }),
                    traditional: (0, n.__assign)((0, n.__assign)({}, o.Qx), {
                        mobile: (0, n.__assign)({}, a.ik)
                    }),
                    "traditional-reverse": (0, n.__assign)((0, n.__assign)({}, o.ml), {
                        mobile: (0, n.__assign)({}, a.w8)
                    })
                }
        },
        oVQP: (e, t, r) => {
            "use strict";
            r.d(t, {
                BB: () => c,
                XT: () => l
            });
            var n = r("wIZF"),
                o = r("t50Z"),
                a = r("/kHH"),
                i = r("7laY"),
                s = {
                    sell: o.wv[400],
                    textSell: o.wv[450],
                    sellHover: o.wv[300],
                    depthSellBg: o.wv[10],
                    buy: o.wL[400],
                    textBuy: o.wL[500],
                    buyHover: o.wL[300],
                    depthBuyBg: o.wL[10],
                    line: o.wm[50],
                    outlineHover: o.D9[50],
                    primary: o.D9[100],
                    primaryHover: o.D9[200],
                    error: o.wv[450],
                    errorBg: o.wv[10],
                    success: o.wL[400],
                    successBg: o.wL[10],
                    disable: o.wm[50],
                    iconNormal: o.wm[250],
                    textWhite: o.wm[0],
                    textGray: o.wm[50],
                    textBlack: o.wm[1e3],
                    textPrimary: o.wm[800],
                    textSecondary: o.wm[600],
                    textThird: o.wm[400],
                    textDisabled: o.wm[200],
                    textBrand: o.D9[300],
                    textToast: o.D9[500],
                    bg: o.wm[10],
                    bg1: o.wm[0],
                    bg2: o.wm[5],
                    bg3: o.wm[10],
                    bg4: o.wm[500],
                    bg6: o.wm[0],
                    bg7: o.wm[5],
                    popupBg: o.wm[0],
                    badgeBg: o.D9[10],
                    selectedBg: o.wm[5],
                    gradientBrand: o.D7.primary,
                    gradientPrimary: o.D7.light
                },
                c = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, s), a.NY), {
                    mobile: (0, n.__assign)({}, i.vT)
                }),
                u = {
                    sell: o.wv[400],
                    textSell: o.wv[400],
                    sellHover: o.wv[300],
                    depthSellBg: o.wv[800],
                    buy: o.wL[400],
                    textBuy: o.wL[400],
                    buyHover: o.wL[300],
                    depthBuyBg: o.wL[800],
                    line: o.wm[700],
                    outlineHover: o.D9[600],
                    primary: o.D9[100],
                    primaryHover: o.D9[200],
                    error: o.wv[400],
                    errorBg: o.wv[800],
                    success: o.wL[400],
                    successBg: o.wL[800],
                    disable: o.wm[600],
                    iconNormal: o.wm[300],
                    textWhite: o.wm[0],
                    textGray: o.wm[50],
                    textBlack: o.wm[1e3],
                    textPrimary: o.wm[50],
                    textSecondary: o.wm[200],
                    textThird: o.wm[300],
                    textDisabled: o.wm[500],
                    textBrand: o.D9[200],
                    textToast: o.D9[400],
                    bg: o.wm[900],
                    bg1: o.wm[900],
                    bg2: o.wm[1e3],
                    bg3: o.wm[700],
                    bg4: o.wm[500],
                    bg6: o.wm[850],
                    bg7: o.wm[950],
                    popupBg: o.wm[800],
                    badgeBg: o.D9[750],
                    selectedBg: o.wm[875],
                    gradientBrand: o.D7.primary,
                    gradientPrimary: o.D7.dark
                },
                l = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, u), a.bY), {
                    mobile: (0, n.__assign)({}, i.j2)
                })
        },
        t50Z: (e, t, r) => {
            "use strict";
            r.d(t, {
                D7: () => s,
                D9: () => o,
                wL: () => a,
                wm: () => n,
                wv: () => i
            });
            var n = {
                    0: "#FFFFFF",
                    5: "#FAFAFA",
                    10: "#F5F5F5",
                    50: "#EAECEF",
                    100: "#D8DCE1",
                    150: "#CACED3",
                    200: "#B7BDC6",
                    250: "#929AA5",
                    300: "#848E9C",
                    400: "#707A8A",
                    500: "#5E6673",
                    600: "#474D57",
                    700: "#2B3139",
                    800: "#1E2329",
                    850: "#202630",
                    875: "#1E2026",
                    900: "#181A20",
                    950: "#191A1F",
                    1e3: "#0B0E11"
                },
                o = {
                    5: "#FFFDE6",
                    10: "#FEF6D8",
                    50: "#FFEF87",
                    100: "#FCD535",
                    200: "#F0B90B",
                    300: "#C99400",
                    400: "#A37200",
                    500: "#8D5F02",
                    600: "#6A4403",
                    700: "#3C2601",
                    750: "#2D2A20",
                    800: "#281A00",
                    900: "#181301",
                    950: "#2C1C00",
                    1e3: "#0C0900"
                },
                a = {
                    5: "#F2FFF7",
                    10: "#E6FFF1",
                    50: "#B5FFD9",
                    100: "#85F2BE",
                    200: "#5AE6A7",
                    300: "#32D993",
                    400: "#0ECB81",
                    500: "#2EBD85",
                    600: "#008057",
                    700: "#005940",
                    800: "#102821",
                    900: "#091F19",
                    1e3: "#00110B"
                },
                i = {
                    5: "#FEF6F7",
                    10: "#FEF1F2",
                    50: "#FDDDDE",
                    100: "#FFC2C4",
                    200: "#FF99A0",
                    300: "#FF707E",
                    400: "#F6465D",
                    450: "#E33B54",
                    500: "#CF304A",
                    550: "#E33B54",
                    600: "#A81E3A",
                    700: "#82112B",
                    800: "#35141D",
                    900: "#2C1018",
                    1e3: "#1F0A10"
                },
                s = {
                    primary: "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)",
                    dark: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    light: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
        },
        jSBn: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c,
                x: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o);
            const i = (0, o.createContext)({});
            var s = function() {
                return (0, o.useContext)(i)
            };
            const c = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    o = e.level2Domain,
                    s = e.children,
                    c = (0, n.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return a().createElement(i.Provider, (0, n.__assign)({
                    value: {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: o
                    },
                    children: s
                }, c))
            }
        },
        Azhy: function(e) {
            e.exports = function(e) {
                var t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var o = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(e, t) {
                    if (1 & t && (e = r(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) r.d(n, o, function(t) {
                            return e[t]
                        }.bind(null, o));
                    return n
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 90)
            }({
                17: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n = r(18),
                        o = function() {
                            function e() {}
                            return e.getFirstMatch = function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 0 && r[1] || ""
                            }, e.getSecondMatch = function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 1 && r[2] || ""
                            }, e.matchAndReturnConst = function(e, t, r) {
                                if (e.test(t)) return r
                            }, e.getWindowsVersionName = function(e) {
                                switch (e) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return
                                }
                            }, e.getMacOSVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), 10 === t[0]) switch (t[1]) {
                                    case 5:
                                        return "Leopard";
                                    case 6:
                                        return "Snow Leopard";
                                    case 7:
                                        return "Lion";
                                    case 8:
                                        return "Mountain Lion";
                                    case 9:
                                        return "Mavericks";
                                    case 10:
                                        return "Yosemite";
                                    case 11:
                                        return "El Capitan";
                                    case 12:
                                        return "Sierra";
                                    case 13:
                                        return "High Sierra";
                                    case 14:
                                        return "Mojave";
                                    case 15:
                                        return "Catalina";
                                    default:
                                        return
                                }
                            }, e.getAndroidVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                            }, e.getVersionPrecision = function(e) {
                                return e.split(".").length
                            }, e.compareVersions = function(t, r, n) {
                                void 0 === n && (n = !1);
                                var o = e.getVersionPrecision(t),
                                    a = e.getVersionPrecision(r),
                                    i = Math.max(o, a),
                                    s = 0,
                                    c = e.map([t, r], (function(t) {
                                        var r = i - e.getVersionPrecision(t),
                                            n = t + new Array(r + 1).join(".0");
                                        return e.map(n.split("."), (function(e) {
                                            return new Array(20 - e.length).join("0") + e
                                        })).reverse()
                                    }));
                                for (n && (s = i - Math.min(o, a)), i -= 1; i >= s;) {
                                    if (c[0][i] > c[1][i]) return 1;
                                    if (c[0][i] === c[1][i]) {
                                        if (i === s) return 0;
                                        i -= 1
                                    } else if (c[0][i] < c[1][i]) return -1
                                }
                            }, e.map = function(e, t) {
                                var r, n = [];
                                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n
                            }, e.find = function(e, t) {
                                var r, n;
                                if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                for (r = 0, n = e.length; r < n; r += 1) {
                                    var o = e[r];
                                    if (t(o, r)) return o
                                }
                            }, e.assign = function(e) {
                                for (var t, r, n = e, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
                                if (Object.assign) return Object.assign.apply(Object, [e].concat(a));
                                var s = function() {
                                    var e = a[t];
                                    "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                        n[t] = e[t]
                                    }))
                                };
                                for (t = 0, r = a.length; t < r; t += 1) s();
                                return e
                            }, e.getBrowserAlias = function(e) {
                                return n.BROWSER_ALIASES_MAP[e]
                            }, e.getBrowserTypeByAlias = function(e) {
                                return n.BROWSER_MAP[e] || ""
                            }, e
                        }();
                    t.default = o, e.exports = t.default
                },
                18: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    }, t.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    }, t.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    }, t.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    }, t.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, o = (n = r(91)) && n.__esModule ? n : {
                            default: n
                        },
                        a = r(18);

                    function i(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var s = function() {
                        function e() {}
                        var t, r, n;
                        return e.getParser = function(e, t) {
                            if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                            return new o.default(e, t)
                        }, e.parse = function(e) {
                            return new o.default(e).getResult()
                        }, t = e, n = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return a.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return a.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return a.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return a.PLATFORMS_MAP
                            }
                        }], (r = null) && i(t.prototype, r), n && i(t, n), e
                    }();
                    t.default = s, e.exports = t.default
                },
                91: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n = c(r(92)),
                        o = c(r(93)),
                        a = c(r(94)),
                        i = c(r(95)),
                        s = c(r(17));

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = function() {
                        function e(e, t) {
                            if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                            this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                        }
                        var t = e.prototype;
                        return t.getUA = function() {
                            return this._ua
                        }, t.test = function(e) {
                            return e.test(this._ua)
                        }, t.parseBrowser = function() {
                            var e = this;
                            this.parsedResult.browser = {};
                            var t = s.default.find(n.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                        }, t.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }, t.getBrowserName = function(e) {
                            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                        }, t.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }, t.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }, t.parseOS = function() {
                            var e = this;
                            this.parsedResult.os = {};
                            var t = s.default.find(o.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                        }, t.getOSName = function(e) {
                            var t = this.getOS().name;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.getOSVersion = function() {
                            return this.getOS().version
                        }, t.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }, t.getPlatformType = function(e) {
                            void 0 === e && (e = !1);
                            var t = this.getPlatform().type;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.parsePlatform = function() {
                            var e = this;
                            this.parsedResult.platform = {};
                            var t = s.default.find(a.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                        }, t.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }, t.getEngineName = function(e) {
                            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                        }, t.parseEngine = function() {
                            var e = this;
                            this.parsedResult.engine = {};
                            var t = s.default.find(i.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                        }, t.parse = function() {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                        }, t.getResult = function() {
                            return s.default.assign({}, this.parsedResult)
                        }, t.satisfies = function(e) {
                            var t = this,
                                r = {},
                                n = 0,
                                o = {},
                                a = 0;
                            if (Object.keys(e).forEach((function(t) {
                                    var i = e[t];
                                    "string" == typeof i ? (o[t] = i, a += 1) : "object" == typeof i && (r[t] = i, n += 1)
                                })), n > 0) {
                                var i = Object.keys(r),
                                    c = s.default.find(i, (function(e) {
                                        return t.isOS(e)
                                    }));
                                if (c) {
                                    var u = this.satisfies(r[c]);
                                    if (void 0 !== u) return u
                                }
                                var l = s.default.find(i, (function(e) {
                                    return t.isPlatform(e)
                                }));
                                if (l) {
                                    var p = this.satisfies(r[l]);
                                    if (void 0 !== p) return p
                                }
                            }
                            if (a > 0) {
                                var f = Object.keys(o),
                                    d = s.default.find(f, (function(e) {
                                        return t.isBrowser(e, !0)
                                    }));
                                if (void 0 !== d) return this.compareVersion(o[d])
                            }
                        }, t.isBrowser = function(e, t) {
                            void 0 === t && (t = !1);
                            var r = this.getBrowserName().toLowerCase(),
                                n = e.toLowerCase(),
                                o = s.default.getBrowserTypeByAlias(n);
                            return t && o && (n = o.toLowerCase()), n === r
                        }, t.compareVersion = function(e) {
                            var t = [0],
                                r = e,
                                n = !1,
                                o = this.getBrowserVersion();
                            if ("string" == typeof o) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(s.default.compareVersions(o, r, n)) > -1
                        }, t.isOS = function(e) {
                            return this.getOSName(!0) === String(e).toLowerCase()
                        }, t.isPlatform = function(e) {
                            return this.getPlatformType(!0) === String(e).toLowerCase()
                        }, t.isEngine = function(e) {
                            return this.getEngineName(!0) === String(e).toLowerCase()
                        }, t.is = function(e, t) {
                            return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                        }, t.some = function(e) {
                            var t = this;
                            return void 0 === e && (e = []), e.some((function(e) {
                                return t.is(e)
                            }))
                        }, e
                    }();
                    t.default = u, e.exports = t.default
                },
                92: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        a = /version\/(\d+(\.?_?\d+)+)/i,
                        i = [{
                            test: [/googlebot/i],
                            describe: function(e) {
                                var t = {
                                        name: "Googlebot"
                                    },
                                    r = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/opera/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/opr\/|opios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    r = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/SamsungBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Samsung Internet for Android"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/Whale/i],
                            describe: function(e) {
                                var t = {
                                        name: "NAVER Whale Browser"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/MZBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "MZ Browser"
                                    },
                                    r = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/focus/i],
                            describe: function(e) {
                                var t = {
                                        name: "Focus"
                                    },
                                    r = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/swing/i],
                            describe: function(e) {
                                var t = {
                                        name: "Swing"
                                    },
                                    r = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/coast/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera Coast"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/opt\/\d+(?:.?_?\d+)+/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera Touch"
                                    },
                                    r = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/yabrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Yandex Browser"
                                    },
                                    r = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/ucbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "UC Browser"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/Maxthon|mxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Maxthon"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/epiphany/i],
                            describe: function(e) {
                                var t = {
                                        name: "Epiphany"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/puffin/i],
                            describe: function(e) {
                                var t = {
                                        name: "Puffin"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/sleipnir/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sleipnir"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/k-meleon/i],
                            describe: function(e) {
                                var t = {
                                        name: "K-Meleon"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/micromessenger/i],
                            describe: function(e) {
                                var t = {
                                        name: "WeChat"
                                    },
                                    r = o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/qqbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                    },
                                    r = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/msie|trident/i],
                            describe: function(e) {
                                var t = {
                                        name: "Internet Explorer"
                                    },
                                    r = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/\sedg\//i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    r = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/edg([ea]|ios)/i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    r = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/vivaldi/i],
                            describe: function(e) {
                                var t = {
                                        name: "Vivaldi"
                                    },
                                    r = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/seamonkey/i],
                            describe: function(e) {
                                var t = {
                                        name: "SeaMonkey"
                                    },
                                    r = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/sailfish/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sailfish"
                                    },
                                    r = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/silk/i],
                            describe: function(e) {
                                var t = {
                                        name: "Amazon Silk"
                                    },
                                    r = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/phantom/i],
                            describe: function(e) {
                                var t = {
                                        name: "PhantomJS"
                                    },
                                    r = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/slimerjs/i],
                            describe: function(e) {
                                var t = {
                                        name: "SlimerJS"
                                    },
                                    r = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var t = {
                                        name: "BlackBerry"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var t = {
                                        name: "WebOS Browser"
                                    },
                                    r = o.default.getFirstMatch(a, e) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var t = {
                                        name: "Bada"
                                    },
                                    r = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var t = {
                                        name: "Tizen"
                                    },
                                    r = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/qupzilla/i],
                            describe: function(e) {
                                var t = {
                                        name: "QupZilla"
                                    },
                                    r = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Firefox"
                                    },
                                    r = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/electron/i],
                            describe: function(e) {
                                var t = {
                                        name: "Electron"
                                    },
                                    r = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/MiuiBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Miui"
                                    },
                                    r = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/chromium/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chromium"
                                    },
                                    r = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/chrome|crios|crmo/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chrome"
                                    },
                                    r = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/GSA/i],
                            describe: function(e) {
                                var t = {
                                        name: "Google Search"
                                    },
                                    r = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: function(e) {
                                var t = !e.test(/like android/i),
                                    r = e.test(/android/i);
                                return t && r
                            },
                            describe: function(e) {
                                var t = {
                                        name: "Android Browser"
                                    },
                                    r = o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/playstation 4/i],
                            describe: function(e) {
                                var t = {
                                        name: "PlayStation 4"
                                    },
                                    r = o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/safari|applewebkit/i],
                            describe: function(e) {
                                var t = {
                                        name: "Safari"
                                    },
                                    r = o.default.getFirstMatch(a, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/.*/i],
                            describe: function(e) {
                                var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return {
                                    name: o.default.getFirstMatch(t, e),
                                    version: o.default.getSecondMatch(t, e)
                                }
                            }
                        }];
                    t.default = i, e.exports = t.default
                },
                93: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        a = r(18),
                        i = [{
                            test: [/Roku\/DVP/],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                return {
                                    name: a.OS_MAP.Roku,
                                    version: t
                                }
                            }
                        }, {
                            test: [/windows phone/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                return {
                                    name: a.OS_MAP.WindowsPhone,
                                    version: t
                                }
                            }
                        }, {
                            test: [/windows /i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                    r = o.default.getWindowsVersionName(t);
                                return {
                                    name: a.OS_MAP.Windows,
                                    version: t,
                                    versionName: r
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function(e) {
                                var t = {
                                        name: a.OS_MAP.iOS
                                    },
                                    r = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/macintosh/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                    r = o.default.getMacOSVersionName(t),
                                    n = {
                                        name: a.OS_MAP.MacOS,
                                        version: t
                                    };
                                return r && (n.versionName = r), n
                            }
                        }, {
                            test: [/(ipod|iphone|ipad)/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                return {
                                    name: a.OS_MAP.iOS,
                                    version: t
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = !e.test(/like android/i),
                                    r = e.test(/android/i);
                                return t && r
                            },
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                    r = o.default.getAndroidVersionName(t),
                                    n = {
                                        name: a.OS_MAP.Android,
                                        version: t
                                    };
                                return r && (n.versionName = r), n
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                    r = {
                                        name: a.OS_MAP.WebOS
                                    };
                                return t && t.length && (r.version = t), r
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || o.default.getFirstMatch(/\bbb(\d+)/i, e);
                                return {
                                    name: a.OS_MAP.BlackBerry,
                                    version: t
                                }
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                return {
                                    name: a.OS_MAP.Bada,
                                    version: t
                                }
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: a.OS_MAP.Tizen,
                                    version: t
                                }
                            }
                        }, {
                            test: [/linux/i],
                            describe: function() {
                                return {
                                    name: a.OS_MAP.Linux
                                }
                            }
                        }, {
                            test: [/CrOS/],
                            describe: function() {
                                return {
                                    name: a.OS_MAP.ChromeOS
                                }
                            }
                        }, {
                            test: [/PlayStation 4/],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: a.OS_MAP.PlayStation4,
                                    version: t
                                }
                            }
                        }];
                    t.default = i, e.exports = t.default
                },
                94: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        a = r(18),
                        i = [{
                            test: [/googlebot/i],
                            describe: function() {
                                return {
                                    type: "bot",
                                    vendor: "Google"
                                }
                            }
                        }, {
                            test: [/huawei/i],
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                    r = {
                                        type: a.PLATFORMS_MAP.mobile,
                                        vendor: "Huawei"
                                    };
                                return t && (r.model = t), r
                            }
                        }, {
                            test: [/nexus\s*(?:7|8|9|10).*/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/ipad/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/kftt build/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon",
                                    model: "Kindle Fire HD 7"
                                }
                            }
                        }, {
                            test: [/silk/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon"
                                }
                            }
                        }, {
                            test: [/tablet(?! pc)/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = e.test(/ipod|iphone/i),
                                    r = e.test(/like (ipod|iphone)/i);
                                return t && !r
                            },
                            describe: function(e) {
                                var t = o.default.getFirstMatch(/(ipod|iphone)/i, e);
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Apple",
                                    model: t
                                }
                            }
                        }, {
                            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/[^-]mobi/i],
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "blackberry" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "BlackBerry"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "bada" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows phone" === e.getBrowserName()
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile,
                                    vendor: "Microsoft"
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = Number(String(e.getOSVersion()).split(".")[0]);
                                return "android" === e.getOSName(!0) && t >= 3
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                return "android" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "macos" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop,
                                    vendor: "Apple"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "linux" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "playstation 4" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tv
                                }
                            }
                        }, {
                            test: function(e) {
                                return "roku" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: a.PLATFORMS_MAP.tv
                                }
                            }
                        }];
                    t.default = i, e.exports = t.default
                },
                95: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, o = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        a = r(18),
                        i = [{
                            test: function(e) {
                                return "microsoft edge" === e.getBrowserName(!0)
                            },
                            describe: function(e) {
                                if (/\sedg\//i.test(e)) return {
                                    name: a.ENGINE_MAP.Blink
                                };
                                var t = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                return {
                                    name: a.ENGINE_MAP.EdgeHTML,
                                    version: t
                                }
                            }
                        }, {
                            test: [/trident/i],
                            describe: function(e) {
                                var t = {
                                        name: a.ENGINE_MAP.Trident
                                    },
                                    r = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: function(e) {
                                return e.test(/presto/i)
                            },
                            describe: function(e) {
                                var t = {
                                        name: a.ENGINE_MAP.Presto
                                    },
                                    r = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: function(e) {
                                var t = e.test(/gecko/i),
                                    r = e.test(/like gecko/i);
                                return t && !r
                            },
                            describe: function(e) {
                                var t = {
                                        name: a.ENGINE_MAP.Gecko
                                    },
                                    r = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/(apple)?webkit\/537\.36/i],
                            describe: function() {
                                return {
                                    name: a.ENGINE_MAP.Blink
                                }
                            }
                        }, {
                            test: [/(apple)?webkit/i],
                            describe: function(e) {
                                var t = {
                                        name: a.ENGINE_MAP.WebKit
                                    },
                                    r = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }];
                    t.default = i, e.exports = t.default
                }
            })
        },
        "1Fob": e => {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = new RegExp(t, "gi"),
                n = new RegExp("(" + t + ")+", "gi");

            function o(e, t) {
                try {
                    return decodeURIComponent(e.join(""))
                } catch (a) {}
                if (1 === e.length) return e;
                t = t || 1;
                var r = e.slice(0, t),
                    n = e.slice(t);
                return Array.prototype.concat.call([], o(r), o(n))
            }

            function a(e) {
                try {
                    return decodeURIComponent(e)
                } catch (a) {
                    for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = o(t, n).join("")).match(r);
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var r = {
                                "%FE%FF": "\ufffd\ufffd",
                                "%FF%FE": "\ufffd\ufffd"
                            }, o = n.exec(e); o;) {
                            try {
                                r[o[0]] = decodeURIComponent(o[0])
                            } catch (t) {
                                var i = a(o[0]);
                                i !== o[0] && (r[o[0]] = i)
                            }
                            o = n.exec(e)
                        }
                        r["%C2"] = "\ufffd";
                        for (var s = Object.keys(r), c = 0; c < s.length; c++) {
                            var u = s[c];
                            e = e.replace(new RegExp(u, "g"), r[u])
                        }
                        return e
                    }(e)
                }
            }
        },
        oXkQ: (e, t, r) => {
            "use strict";
            var n = r("kvVz"),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function c(e) {
                return n.isMemo(e) ? i : s[e.$$typeof] || o
            }
            s[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[n.Memo] = i;
            var u = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                p = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                g = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (g) {
                        var o = d(r);
                        o && o !== g && e(t, o, n)
                    }
                    var i = l(r);
                    p && (i = i.concat(p(r)));
                    for (var s = c(t), v = c(r), h = 0; h < i.length; ++h) {
                        var m = i[h];
                        if (!a[m] && (!n || !n[m]) && (!v || !v[m]) && (!s || !s[m])) {
                            var b = f(r, m);
                            try {
                                u(t, m, b)
                            } catch (y) {}
                        }
                    }
                }
                return t
            }
        },
        Kzjd: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => G
            });
            var n = r("Cffy"),
                o = r("OHGK");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach((function(t) {
                        (0, o.A)(e, t, r[t])
                    }))
                }
                return e
            }
            var i = r("BxAp"),
                s = r("nTdK"),
                c = r("Zpl/"),
                u = r("bY8i"),
                l = r("+plb"),
                p = r("yDWy"),
                f = {
                    type: "logger",
                    log: function(e) {
                        this.output("log", e)
                    },
                    warn: function(e) {
                        this.output("warn", e)
                    },
                    error: function(e) {
                        this.output("error", e)
                    },
                    output: function(e, t) {
                        console && console[e] && console[e].apply(console, t)
                    }
                },
                d = new(function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, i.A)(this, e), this.init(t, r)
                    }
                    return (0, s.A)(e, [{
                        key: "init",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = t.prefix || "i18next:", this.logger = e || f, this.options = t, this.debug = t.debug
                        }
                    }, {
                        key: "setDebug",
                        value: function(e) {
                            this.debug = e
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return this.forward(t, "log", "", !0)
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return this.forward(t, "warn", "", !0)
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return this.forward(t, "error", "")
                        }
                    }, {
                        key: "deprecate",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                        }
                    }, {
                        key: "forward",
                        value: function(e, t, r, n) {
                            return n && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(r).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                        }
                    }, {
                        key: "create",
                        value: function(t) {
                            return new e(this.logger, a({}, {
                                prefix: "".concat(this.prefix, ":").concat(t, ":")
                            }, this.options))
                        }
                    }]), e
                }()),
                g = function() {
                    function e() {
                        (0, i.A)(this, e), this.observers = {}
                    }
                    return (0, s.A)(e, [{
                        key: "on",
                        value: function(e, t) {
                            var r = this;
                            return e.split(" ").forEach((function(e) {
                                r.observers[e] = r.observers[e] || [], r.observers[e].push(t)
                            })), this
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                                return e !== t
                            })) : delete this.observers[e])
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            if (this.observers[e]) {
                                var o = [].concat(this.observers[e]);
                                o.forEach((function(e) {
                                    e.apply(void 0, r)
                                }))
                            }
                            if (this.observers["*"]) {
                                var a = [].concat(this.observers["*"]);
                                a.forEach((function(t) {
                                    t.apply(t, [e].concat(r))
                                }))
                            }
                        }
                    }]), e
                }();

            function v() {
                var e, t, r = new Promise((function(r, n) {
                    e = r, t = n
                }));
                return r.resolve = e, r.reject = t, r
            }

            function h(e) {
                return null == e ? "" : "" + e
            }

            function m(e, t, r) {
                e.forEach((function(e) {
                    t[e] && (r[e] = t[e])
                }))
            }

            function b(e, t, r) {
                function n(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function o() {
                    return !e || "string" === typeof e
                }
                for (var a = "string" !== typeof t ? [].concat(t) : t.split("."); a.length > 1;) {
                    if (o()) return {};
                    var i = n(a.shift());
                    !e[i] && r && (e[i] = new r), e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {}
                }
                return o() ? {} : {
                    obj: e,
                    k: n(a.shift())
                }
            }

            function y(e, t, r) {
                var n = b(e, t, Object);
                n.obj[n.k] = r
            }

            function _(e, t) {
                var r = b(e, t),
                    n = r.obj,
                    o = r.k;
                if (n) return n[o]
            }

            function w(e, t, r) {
                var n = _(e, r);
                return void 0 !== n ? n : _(t, r)
            }

            function x(e, t, r) {
                for (var n in t) "__proto__" !== n && "constructor" !== n && (n in e ? "string" === typeof e[n] || e[n] instanceof String || "string" === typeof t[n] || t[n] instanceof String ? r && (e[n] = t[n]) : x(e[n], t[n], r) : e[n] = t[n]);
                return e
            }

            function E(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var A = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function S(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return A[e]
                })) : e
            }
            var k = window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                O = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return (0, i.A)(this, t), r = (0, c.A)(this, (0, u.A)(t).call(this)), k && g.call((0, l.A)(r)), r.data = e || {}, r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r
                    }
                    return (0, p.A)(t, e), (0, s.A)(t, [{
                        key: "addNamespaces",
                        value: function(e) {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                        }
                    }, {
                        key: "removeNamespaces",
                        value: function(e) {
                            var t = this.options.ns.indexOf(e);
                            t > -1 && this.options.ns.splice(t, 1)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                o = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                a = [e, t];
                            return r && "string" !== typeof r && (a = a.concat(r)), r && "string" === typeof r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split(".")), _(this.data, a)
                        }
                    }, {
                        key: "addResource",
                        value: function(e, t, r, n) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                a = this.options.keySeparator;
                            void 0 === a && (a = ".");
                            var i = [e, t];
                            r && (i = i.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (n = t, t = (i = e.split("."))[1]), this.addNamespaces(t), y(this.data, i, n), o.silent || this.emit("added", e, t, r, n)
                        }
                    }, {
                        key: "addResources",
                        value: function(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var o in r) "string" !== typeof r[o] && "[object Array]" !== Object.prototype.toString.apply(r[o]) || this.addResource(e, t, o, r[o], {
                                silent: !0
                            });
                            n.silent || this.emit("added", e, t, r)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function(e, t, r, n, o) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                s = [e, t];
                            e.indexOf(".") > -1 && (n = r, r = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
                            var c = _(this.data, s) || {};
                            n ? x(c, r, o) : c = a({}, c, r), y(this.data, s, c), i.silent || this.emit("added", e, t, r)
                        }
                    }, {
                        key: "removeResourceBundle",
                        value: function(e, t) {
                            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                        }
                    }, {
                        key: "hasResourceBundle",
                        value: function(e, t) {
                            return void 0 !== this.getResource(e, t)
                        }
                    }, {
                        key: "getResourceBundle",
                        value: function(e, t) {
                            return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? a({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                        }
                    }, {
                        key: "getDataByLanguage",
                        value: function(e) {
                            return this.data[e]
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return this.data
                        }
                    }]), t
                }(g),
                T = {
                    processors: {},
                    addPostProcessor: function(e) {
                        this.processors[e.name] = e
                    },
                    handle: function(e, t, r, n, o) {
                        var a = this;
                        return e.forEach((function(e) {
                            a.processors[e] && (t = a.processors[e].process(t, r, n, o))
                        })), t
                    }
                },
                B = {},
                P = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, i.A)(this, t), r = (0, c.A)(this, (0, u.A)(t).call(this)), k && g.call((0, l.A)(r)), m(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0, l.A)(r)), r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r.logger = d.create("translator"), r
                    }
                    return (0, p.A)(t, e), (0, s.A)(t, [{
                        key: "changeLanguage",
                        value: function(e) {
                            e && (this.language = e)
                        }
                    }, {
                        key: "exists",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                },
                                r = this.resolve(e, t);
                            return r && void 0 !== r.res
                        }
                    }, {
                        key: "extractFromKey",
                        value: function(e, t) {
                            var r = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                            void 0 === r && (r = ":");
                            var n = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                o = t.ns || this.options.defaultNS;
                            if (r && e.indexOf(r) > -1) {
                                var a = e.match(this.interpolator.nestingRegexp);
                                if (a && a.length > 0) return {
                                    key: e,
                                    namespaces: o
                                };
                                var i = e.split(r);
                                (r !== n || r === n && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()), e = i.join(n)
                            }
                            return "string" === typeof o && (o = [o]), {
                                key: e,
                                namespaces: o
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(e, t, r) {
                            var o = this;
                            if ("object" !== (0, n.A)(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), t || (t = {}), void 0 === e || null === e) return "";
                            Array.isArray(e) || (e = [String(e)]);
                            var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                s = this.extractFromKey(e[e.length - 1], t),
                                c = s.key,
                                u = s.namespaces,
                                l = u[u.length - 1],
                                p = t.lng || this.language,
                                f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (p && "cimode" === p.toLowerCase()) {
                                if (f) {
                                    var d = t.nsSeparator || this.options.nsSeparator;
                                    return l + d + c
                                }
                                return c
                            }
                            var g = this.resolve(e, t),
                                v = g && g.res,
                                h = g && g.usedKey || c,
                                m = g && g.exactUsedKey || c,
                                b = Object.prototype.toString.apply(v),
                                y = ["[object Number]", "[object Function]", "[object RegExp]"],
                                _ = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                                w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                x = "string" !== typeof v && "boolean" !== typeof v && "number" !== typeof v;
                            if (w && v && x && y.indexOf(b) < 0 && ("string" !== typeof _ || "[object Array]" !== b)) {
                                if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, v, t) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                                if (i) {
                                    var E = "[object Array]" === b,
                                        A = E ? [] : {},
                                        S = E ? m : h;
                                    for (var k in v)
                                        if (Object.prototype.hasOwnProperty.call(v, k)) {
                                            var O = "".concat(S).concat(i).concat(k);
                                            A[k] = this.translate(O, a({}, t, {
                                                joinArrays: !1,
                                                ns: u
                                            })), A[k] === O && (A[k] = v[k])
                                        }
                                    v = A
                                }
                            } else if (w && "string" === typeof _ && "[object Array]" === b)(v = v.join(_)) && (v = this.extendTranslation(v, e, t, r));
                            else {
                                var T = !1,
                                    B = !1;
                                if (!this.isValidLookup(v) && void 0 !== t.defaultValue) {
                                    if (T = !0, void 0 !== t.count) {
                                        var P = this.pluralResolver.getSuffix(p, t.count);
                                        v = t["defaultValue".concat(P)]
                                    }
                                    v || (v = t.defaultValue)
                                }
                                this.isValidLookup(v) || (B = !0, v = c);
                                var C = t.defaultValue && t.defaultValue !== v && this.options.updateMissing;
                                if (B || T || C) {
                                    if (this.logger.log(C ? "updateKey" : "missingKey", p, l, c, C ? t.defaultValue : v), i) {
                                        var F = this.resolve(c, a({}, t, {
                                            keySeparator: !1
                                        }));
                                        F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var R = [],
                                        N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && N && N[0])
                                        for (var D = 0; D < N.length; D++) R.push(N[D]);
                                    else "all" === this.options.saveMissingTo ? R = this.languageUtils.toResolveHierarchy(t.lng || this.language) : R.push(t.lng || this.language);
                                    var I = function(e, r) {
                                        o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, r, C ? t.defaultValue : v, C, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, r, C ? t.defaultValue : v, C, t), o.emit("missingKey", e, l, r, v)
                                    };
                                    if (this.options.saveMissing) {
                                        var L = void 0 !== t.count && "string" !== typeof t.count;
                                        this.options.saveMissingPlurals && L ? R.forEach((function(e) {
                                            o.pluralResolver.getPluralFormsOfKey(e, c).forEach((function(t) {
                                                return I([e], t)
                                            }))
                                        })) : I(R, c)
                                    }
                                }
                                v = this.extendTranslation(v, e, t, g, r), B && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(l, ":").concat(c)), B && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
                            }
                            return v
                        }
                    }, {
                        key: "extendTranslation",
                        value: function(e, t, r, n, o) {
                            var i = this;
                            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, r, n.usedLng, n.usedNS, n.usedKey, {
                                resolved: n
                            });
                            else if (!r.skipInterpolation) {
                                r.interpolation && this.interpolator.init(a({}, r, {
                                    interpolation: a({}, this.options.interpolation, r.interpolation)
                                }));
                                var s, c = r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                if (c) {
                                    var u = e.match(this.interpolator.nestingRegexp);
                                    s = u && u.length
                                }
                                var l = r.replace && "string" !== typeof r.replace ? r.replace : r;
                                if (this.options.interpolation.defaultVariables && (l = a({}, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, r.lng || this.language, r), c) {
                                    var p = e.match(this.interpolator.nestingRegexp);
                                    s < (p && p.length) && (r.nest = !1)
                                }!1 !== r.nest && (e = this.interpolator.nest(e, (function() {
                                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                                    return o && o[0] === n[0] && !r.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, n.concat([t]))
                                }), r)), r.interpolation && this.interpolator.reset()
                            }
                            var f = r.postProcess || this.options.postProcess,
                                d = "string" === typeof f ? [f] : f;
                            return void 0 !== e && null !== e && d && d.length && !1 !== r.applyPostProcessor && (e = T.handle(d, e, t, this.options && this.options.postProcessPassResolved ? a({
                                i18nResolved: n
                            }, r) : r, this)), e
                        }
                    }, {
                        key: "resolve",
                        value: function(e) {
                            var t, r, n, o, a, i = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "string" === typeof e && (e = [e]), e.forEach((function(e) {
                                if (!i.isValidLookup(t)) {
                                    var c = i.extractFromKey(e, s),
                                        u = c.key;
                                    r = u;
                                    var l = c.namespaces;
                                    i.options.fallbackNS && (l = l.concat(i.options.fallbackNS));
                                    var p = void 0 !== s.count && "string" !== typeof s.count,
                                        f = void 0 !== s.context && "string" === typeof s.context && "" !== s.context,
                                        d = s.lngs ? s.lngs : i.languageUtils.toResolveHierarchy(s.lng || i.language, s.fallbackLng);
                                    l.forEach((function(e) {
                                        i.isValidLookup(t) || (a = e, !B["".concat(d[0], "-").concat(e)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(a) && (B["".concat(d[0], "-").concat(e)] = !0, i.logger.warn('key "'.concat(r, '" for languages "').concat(d.join(", "), '" won\'t get resolved as namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), d.forEach((function(r) {
                                            if (!i.isValidLookup(t)) {
                                                o = r;
                                                var a, c, l = u,
                                                    d = [l];
                                                if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(d, u, r, e, s);
                                                else p && (a = i.pluralResolver.getSuffix(r, s.count)), p && f && d.push(l + a), f && d.push(l += "".concat(i.options.contextSeparator).concat(s.context)), p && d.push(l += a);
                                                for (; c = d.pop();) i.isValidLookup(t) || (n = c, t = i.getResource(r, e, c, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: t,
                                usedKey: r,
                                exactUsedKey: n,
                                usedLng: o,
                                usedNS: a
                            }
                        }
                    }, {
                        key: "isValidLookup",
                        value: function(e) {
                            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, r, n) : this.resourceStore.getResource(e, t, r, n)
                        }
                    }]), t
                }(g);

            function C(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var F = function() {
                    function e(t) {
                        (0, i.A)(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = d.create("languageUtils")
                    }
                    return (0, s.A)(e, [{
                        key: "getScriptPartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return null;
                            var t = e.split("-");
                            return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                        }
                    }, {
                        key: "getLanguagePartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return e;
                            var t = e.split("-");
                            return this.formatLanguageCode(t[0])
                        }
                    }, {
                        key: "formatLanguageCode",
                        value: function(e) {
                            if ("string" === typeof e && e.indexOf("-") > -1) {
                                var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    r = e.split("-");
                                return this.options.lowerCaseLng ? r = r.map((function(e) {
                                    return e.toLowerCase()
                                })) : 2 === r.length ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = C(r[1].toLowerCase()))) : 3 === r.length && (r[0] = r[0].toLowerCase(), 2 === r[1].length && (r[1] = r[1].toUpperCase()), "sgn" !== r[0] && 2 === r[2].length && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = C(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = C(r[2].toLowerCase()))), r.join("-")
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                        }
                    }, {
                        key: "isWhitelisted",
                        value: function(e) {
                            return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                        }
                    }, {
                        key: "isSupportedCode",
                        value: function(e) {
                            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                        }
                    }, {
                        key: "getBestMatchFromCodes",
                        value: function(e) {
                            var t, r = this;
                            return e ? (e.forEach((function(e) {
                                if (!t) {
                                    var n = r.formatLanguageCode(e);
                                    r.options.supportedLngs && !r.isSupportedCode(n) || (t = n)
                                }
                            })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                if (!t) {
                                    var n = r.getLanguagePartFromCode(e);
                                    if (r.isSupportedCode(n)) return t = n;
                                    t = r.options.supportedLngs.find((function(e) {
                                        if (0 === e.indexOf(n)) return e
                                    }))
                                }
                            })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                        }
                    }, {
                        key: "getFallbackCodes",
                        value: function(e, t) {
                            if (!e) return [];
                            if ("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                            if (!t) return e.default || [];
                            var r = e[t];
                            return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || []
                        }
                    }, {
                        key: "toResolveHierarchy",
                        value: function(e, t) {
                            var r = this,
                                n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                o = [],
                                a = function(e) {
                                    e && (r.isSupportedCode(e) ? o.push(e) : r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                };
                            return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(e))) : "string" === typeof e && a(this.formatLanguageCode(e)), n.forEach((function(e) {
                                o.indexOf(e) < 0 && a(r.formatLanguageCode(e))
                            })), o
                        }
                    }]), e
                }(),
                R = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                N = {
                    1: function(e) {
                        return Number(e > 1)
                    },
                    2: function(e) {
                        return Number(1 != e)
                    },
                    3: function(e) {
                        return 0
                    },
                    4: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function(e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function(e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function(e) {
                        return Number(e >= 2)
                    },
                    10: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function(e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function(e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function(e) {
                        return Number(0 !== e)
                    },
                    14: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function(e) {
                        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                    },
                    18: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function(e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                };

            function D() {
                var e = {};
                return R.forEach((function(t) {
                    t.lngs.forEach((function(r) {
                        e[r] = {
                            numbers: t.nr,
                            plurals: N[t.fc]
                        }
                    }))
                })), e
            }
            var I = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, i.A)(this, e), this.languageUtils = t, this.options = r, this.logger = d.create("pluralResolver"), this.rules = D()
                    }
                    return (0, s.A)(e, [{
                        key: "addRule",
                        value: function(e, t) {
                            this.rules[e] = t
                        }
                    }, {
                        key: "getRule",
                        value: function(e) {
                            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function(e) {
                            var t = this.getRule(e);
                            return t && t.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function(e, t) {
                            var r = this,
                                n = [],
                                o = this.getRule(e);
                            return o ? (o.numbers.forEach((function(o) {
                                var a = r.getSuffix(e, o);
                                n.push("".concat(t).concat(a))
                            })), n) : n
                        }
                    }, {
                        key: "getSuffix",
                        value: function(e, t) {
                            var r = this,
                                n = this.getRule(e);
                            if (n) {
                                var o = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                                    a = n.numbers[o];
                                this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] && (2 === a ? a = "plural" : 1 === a && (a = ""));
                                var i = function() {
                                    return r.options.prepend && a.toString() ? r.options.prepend + a.toString() : a.toString()
                                };
                                return "v1" === this.options.compatibilityJSON ? 1 === a ? "" : "number" === typeof a ? "_plural_".concat(a.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] ? i() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                            }
                            return this.logger.warn("no plural rule found for: ".concat(e)), ""
                        }
                    }]), e
                }(),
                L = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, i.A)(this, e), this.logger = d.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                            return e
                        }, this.init(t)
                    }
                    return (0, s.A)(e, [{
                        key: "init",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.interpolation || (e.interpolation = {
                                escapeValue: !0
                            });
                            var t = e.interpolation;
                            this.escape = void 0 !== t.escape ? t.escape : S, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? E(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? E(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? E(t.nestingPrefix) : t.nestingPrefixEscaped || E("$t("), this.nestingSuffix = t.nestingSuffix ? E(t.nestingSuffix) : t.nestingSuffixEscaped || E(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function() {
                            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(e, "g");
                            var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(t, "g");
                            var r = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(r, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function(e, t, r, n) {
                            var o, a, i, s = this,
                                c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function u(e) {
                                return e.replace(/\$/g, "$$$$")
                            }
                            var l = function(e) {
                                if (e.indexOf(s.formatSeparator) < 0) {
                                    var o = w(t, c, e);
                                    return s.alwaysFormat ? s.format(o, void 0, r) : o
                                }
                                var a = e.split(s.formatSeparator),
                                    i = a.shift().trim(),
                                    u = a.join(s.formatSeparator).trim();
                                return s.format(w(t, c, i), u, r, n)
                            };
                            this.resetRegExp();
                            var p = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                f = n && n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                            return [{
                                regex: this.regexpUnescape,
                                safeValue: function(e) {
                                    return u(e)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function(e) {
                                    return s.escapeValue ? u(s.escape(e)) : u(e)
                                }
                            }].forEach((function(t) {
                                for (i = 0; o = t.regex.exec(e);) {
                                    if (void 0 === (a = l(o[1].trim())))
                                        if ("function" === typeof p) {
                                            var r = p(e, o, n);
                                            a = "string" === typeof r ? r : ""
                                        } else {
                                            if (f) {
                                                a = o[0];
                                                continue
                                            }
                                            s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), a = ""
                                        }
                                    else "string" === typeof a || s.useRawValueToEscape || (a = h(a));
                                    if (e = e.replace(o[0], t.safeValue(a)), t.regex.lastIndex = 0, ++i >= s.maxReplaces) break
                                }
                            })), e
                        }
                    }, {
                        key: "nest",
                        value: function(e, t) {
                            var r, n, o = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = a({}, i);

                            function c(e, t) {
                                var r = this.nestingOptionsSeparator;
                                if (e.indexOf(r) < 0) return e;
                                var n = e.split(new RegExp("".concat(r, "[ ]*{"))),
                                    o = "{".concat(n[1]);
                                e = n[0], o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                                try {
                                    s = JSON.parse(o), t && (s = a({}, t, s))
                                } catch (i) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i), "".concat(e).concat(r).concat(o)
                                }
                                return delete s.defaultValue, e
                            }
                            for (s.applyPostProcessor = !1, delete s.defaultValue; r = this.nestingRegexp.exec(e);) {
                                var u = [],
                                    l = !1;
                                if (r[0].includes(this.formatSeparator) && !/{.*}/.test(r[1])) {
                                    var p = r[1].split(this.formatSeparator).map((function(e) {
                                        return e.trim()
                                    }));
                                    r[1] = p.shift(), u = p, l = !0
                                }
                                if ((n = t(c.call(this, r[1].trim(), s), s)) && r[0] === e && "string" !== typeof n) return n;
                                "string" !== typeof n && (n = h(n)), n || (this.logger.warn("missed to resolve ".concat(r[1], " for nesting ").concat(e)), n = ""), l && (n = u.reduce((function(e, t) {
                                    return o.format(e, t, i.lng, i)
                                }), n.trim())), e = e.replace(r[0], n), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();
            var j = function(e) {
                function t(e, r, n) {
                    var o, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (0, i.A)(this, t), o = (0, c.A)(this, (0, u.A)(t).call(this)), k && g.call((0, l.A)(o)), o.backend = e, o.store = r, o.services = n, o.languageUtils = n.languageUtils, o.options = a, o.logger = d.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(n, a.backend, a), o
                }
                return (0, p.A)(t, e), (0, s.A)(t, [{
                    key: "queueLoad",
                    value: function(e, t, r, n) {
                        var o = this,
                            a = [],
                            i = [],
                            s = [],
                            c = [];
                        return e.forEach((function(e) {
                            var n = !0;
                            t.forEach((function(t) {
                                var s = "".concat(e, "|").concat(t);
                                !r.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? i.indexOf(s) < 0 && i.push(s) : (o.state[s] = 1, n = !1, i.indexOf(s) < 0 && i.push(s), a.indexOf(s) < 0 && a.push(s), c.indexOf(t) < 0 && c.push(t)))
                            })), n || s.push(e)
                        })), (a.length || i.length) && this.queue.push({
                            pending: i,
                            loaded: {},
                            errors: [],
                            callback: n
                        }), {
                            toLoad: a,
                            pending: i,
                            toLoadLanguages: s,
                            toLoadNamespaces: c
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(e, t, r) {
                        var n = e.split("|"),
                            o = n[0],
                            a = n[1];
                        t && this.emit("failedLoading", o, a, t), r && this.store.addResourceBundle(o, a, r), this.state[e] = t ? -1 : 2;
                        var i = {};
                        this.queue.forEach((function(r) {
                            ! function(e, t, r, n) {
                                var o = b(e, t, Object),
                                    a = o.obj,
                                    i = o.k;
                                a[i] = a[i] || [], n && (a[i] = a[i].concat(r)), n || a[i].push(r)
                            }(r.loaded, [o], a),
                            function(e, t) {
                                for (var r = e.indexOf(t); - 1 !== r;) e.splice(r, 1), r = e.indexOf(t)
                            }(r.pending, e), t && r.errors.push(t), 0 !== r.pending.length || r.done || (Object.keys(r.loaded).forEach((function(e) {
                                i[e] || (i[e] = []), r.loaded[e].length && r.loaded[e].forEach((function(t) {
                                    i[e].indexOf(t) < 0 && i[e].push(t)
                                }))
                            })), r.done = !0, r.errors.length ? r.callback(r.errors) : r.callback())
                        })), this.emit("loaded", i), this.queue = this.queue.filter((function(e) {
                            return !e.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function(e, t, r) {
                        var n = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            i = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[r](e, t, (function(s, c) {
                            s && c && o < 5 ? setTimeout((function() {
                                n.read.call(n, e, t, r, o + 1, 2 * a, i)
                            }), a) : i(s, c)
                        })) : i(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function(e, t) {
                        var r = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                        var a = this.queueLoad(e, t, n, o);
                        if (!a.toLoad.length) return a.pending.length || o(), null;
                        a.toLoad.forEach((function(e) {
                            r.loadOne(e)
                        }))
                    }
                }, {
                    key: "load",
                    value: function(e, t, r) {
                        this.prepareLoading(e, t, {}, r)
                    }
                }, {
                    key: "reload",
                    value: function(e, t, r) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, r)
                    }
                }, {
                    key: "loadOne",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = e.split("|"),
                            o = n[0],
                            a = n[1];
                        this.read(o, a, "read", void 0, void 0, (function(n, i) {
                            n && t.logger.warn("".concat(r, "loading namespace ").concat(a, " for language ").concat(o, " failed"), n), !n && i && t.logger.log("".concat(r, "loaded namespace ").concat(a, " for language ").concat(o), i), t.loaded(e, n, i)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function(e, t, r, n, o) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(r, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== r && null !== r && "" !== r && (this.backend && this.backend.create && this.backend.create(e, t, r, n, null, a({}, i, {
                            isUpdate: o
                        })), e && e[0] && this.store.addResource(e[0], t, r, n))
                    }
                }]), t
            }(g);

            function M() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        var t = {};
                        if ("object" === (0, n.A)(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === (0, n.A)(e[2]) || "object" === (0, n.A)(e[3])) {
                            var r = e[3] || e[2];
                            Object.keys(r).forEach((function(e) {
                                t[e] = r[e]
                            }))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(e, t, r, n) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1
                    }
                }
            }

            function H(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function U() {}
            const G = new(function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    if ((0, i.A)(this, t), e = (0, c.A)(this, (0, u.A)(t).call(this)), k && g.call((0, l.A)(e)), e.options = H(r), e.services = {}, e.logger = d, e.modules = {
                            external: []
                        }, n && !e.isInitialized && !r.isClone) {
                        if (!e.options.initImmediate) return e.init(r, n), (0, c.A)(e, (0, l.A)(e));
                        setTimeout((function() {
                            e.init(r, n)
                        }), 0)
                    }
                    return e
                }
                return (0, p.A)(t, e), (0, s.A)(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;

                        function n(e) {
                            return e ? "function" === typeof e ? new e : e : null
                        }
                        if ("function" === typeof t && (r = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = a({}, M(), this.options, H(t)), this.format = this.options.interpolation.format, r || (r = U), !this.options.isClone) {
                            this.modules.logger ? d.init(n(this.modules.logger), this.options) : d.init(null, this.options);
                            var o = new F(this.options);
                            this.store = new O(this.options.resources, this.options);
                            var i = this.services;
                            i.logger = d, i.resourceStore = this.store, i.languageUtils = o, i.pluralResolver = new I(o, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), i.interpolator = new L(this.options), i.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, i.backendConnector = new j(n(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                e.emit.apply(e, [t].concat(n))
                            })), this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = n(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new P(this.services, this.options), this.translator.on("*", (function(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                e.emit.apply(e, [t].concat(n))
                            })), this.modules.external.forEach((function(t) {
                                t.init && t.init(e)
                            }))
                        }
                        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                        c.forEach((function(t) {
                            e[t] = function() {
                                var r;
                                return (r = e.store)[t].apply(r, arguments)
                            }
                        }));
                        var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                        u.forEach((function(t) {
                            e[t] = function() {
                                var r;
                                return (r = e.store)[t].apply(r, arguments), e
                            }
                        }));
                        var l = v(),
                            p = function() {
                                e.changeLanguage(e.options.lng, (function(t, n) {
                                    e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), l.resolve(n), r(t, n)
                                }))
                            };
                        return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), l
                    }
                }, {
                    key: "loadResources",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                            n = r,
                            o = "string" === typeof e ? e : this.language;
                        if ("function" === typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                            if (o && "cimode" === o.toLowerCase()) return n();
                            var a = [],
                                i = function(e) {
                                    e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                        a.indexOf(e) < 0 && a.push(e)
                                    }))
                                };
                            if (o) i(o);
                            else {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.forEach((function(e) {
                                    return i(e)
                                }))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return i(e)
                            })), this.services.backendConnector.load(a, this.options.ns, n)
                        } else n(null)
                    }
                }, {
                    key: "reloadResources",
                    value: function(e, t, r) {
                        var n = v();
                        return e || (e = this.languages), t || (t = this.options.ns), r || (r = U), this.services.backendConnector.reload(e, t, (function(e) {
                            n.resolve(), r(e)
                        })), n
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && T.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }
                }, {
                    key: "changeLanguage",
                    value: function(e, t) {
                        var r = this;
                        this.isLanguageChangingTo = e;
                        var n = v();
                        this.emit("languageChanging", e);
                        var o = function(e) {
                            var o = "string" === typeof e ? e : r.services.languageUtils.getBestMatchFromCodes(e);
                            o && (r.language || (r.language = o, r.languages = r.services.languageUtils.toResolveHierarchy(o)), r.translator.language || r.translator.changeLanguage(o), r.services.languageDetector && r.services.languageDetector.cacheUserLanguage(o)), r.loadResources(o, (function(e) {
                                ! function(e, o) {
                                    o ? (r.language = o, r.languages = r.services.languageUtils.toResolveHierarchy(o), r.translator.changeLanguage(o), r.isLanguageChangingTo = void 0, r.emit("languageChanged", o), r.logger.log("languageChanged", o)) : r.isLanguageChangingTo = void 0, n.resolve((function() {
                                        return r.t.apply(r, arguments)
                                    })), t && t(e, (function() {
                                        return r.t.apply(r, arguments)
                                    }))
                                }(e, o)
                            }))
                        };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), n
                    }
                }, {
                    key: "getFixedT",
                    value: function(e, t) {
                        var r = this,
                            o = function e(t, o) {
                                var i;
                                if ("object" !== (0, n.A)(o)) {
                                    for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++) c[u - 2] = arguments[u];
                                    i = r.options.overloadTranslationOptionHandler([t, o].concat(c))
                                } else i = a({}, o);
                                return i.lng = i.lng || e.lng, i.lngs = i.lngs || e.lngs, i.ns = i.ns || e.ns, r.t(t, i)
                            };
                        return "string" === typeof e ? o.lng = e : o.lngs = e, o.ns = t, o
                    }
                }, {
                    key: "t",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments)
                    }
                }, {
                    key: "exists",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments)
                    }
                }, {
                    key: "setDefaultNamespace",
                    value: function(e) {
                        this.options.defaultNS = e
                    }
                }, {
                    key: "hasLoadedNamespace",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                        var n = this.languages[0],
                            o = !!this.options && this.options.fallbackLng,
                            a = this.languages[this.languages.length - 1];
                        if ("cimode" === n.toLowerCase()) return !0;
                        var i = function(e, r) {
                            var n = t.services.backendConnector.state["".concat(e, "|").concat(r)];
                            return -1 === n || 2 === n
                        };
                        if (r.precheck) {
                            var s = r.precheck(this, i);
                            if (void 0 !== s) return s
                        }
                        return !!this.hasResourceBundle(n, e) || (!this.services.backendConnector.backend || !(!i(n, e) || o && !i(a, e)))
                    }
                }, {
                    key: "loadNamespaces",
                    value: function(e, t) {
                        var r = this,
                            n = v();
                        return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((function(e) {
                            r.options.ns.indexOf(e) < 0 && r.options.ns.push(e)
                        })), this.loadResources((function(e) {
                            n.resolve(), t && t(e)
                        })), n) : (t && t(), Promise.resolve())
                    }
                }, {
                    key: "loadLanguages",
                    value: function(e, t) {
                        var r = v();
                        "string" === typeof e && (e = [e]);
                        var n = this.options.preload || [],
                            o = e.filter((function(e) {
                                return n.indexOf(e) < 0
                            }));
                        return o.length ? (this.options.preload = n.concat(o), this.loadResources((function(e) {
                            r.resolve(), t && t(e)
                        })), r) : (t && t(), Promise.resolve())
                    }
                }, {
                    key: "dir",
                    value: function(e) {
                        if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
                        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                    }
                }, {
                    key: "createInstance",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        return new t(e, r)
                    }
                }, {
                    key: "cloneInstance",
                    value: function() {
                        var e = this,
                            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                            o = a({}, this.options, r, {
                                isClone: !0
                            }),
                            i = new t(o),
                            s = ["store", "services", "language"];
                        return s.forEach((function(t) {
                            i[t] = e[t]
                        })), i.services = a({}, this.services), i.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i.translator = new P(i.services, i.options), i.translator.on("*", (function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            i.emit.apply(i, [e].concat(r))
                        })), i.init(o, n), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i
                    }
                }]), t
            }(g))
        },
        "6w+j": (e, t, r) => {
            var n = "__lodash_hash_undefined__",
                o = "[object Function]",
                a = "[object GeneratorFunction]",
                i = /^\[object .+?Constructor\]$/,
                s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                u = s || c || Function("return this")();
            var l = Array.prototype,
                p = Function.prototype,
                f = Object.prototype,
                d = u["__core-js_shared__"],
                g = function() {
                    var e = /[^.]+$/.exec(d && d.keys && d.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                v = p.toString,
                h = f.hasOwnProperty,
                m = f.toString,
                b = RegExp("^" + v.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                y = l.splice,
                _ = T(u, "Map"),
                w = T(Object, "create");

            function x(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function E(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function A(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function S(e, t) {
                for (var r, n, o = e.length; o--;)
                    if ((r = e[o][0]) === (n = t) || r !== r && n !== n) return o;
                return -1
            }

            function k(e) {
                if (!P(e) || (t = e, g && g in t)) return !1;
                var t, r = function(e) {
                    var t = P(e) ? m.call(e) : "";
                    return t == o || t == a
                }(e) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (r) {}
                    return t
                }(e) ? b : i;
                return r.test(function(e) {
                    if (null != e) {
                        try {
                            return v.call(e)
                        } catch (t) {}
                        try {
                            return e + ""
                        } catch (t) {}
                    }
                    return ""
                }(e))
            }

            function O(e, t) {
                var r = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function T(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return k(r) ? r : void 0
            }

            function B(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        a = r.cache;
                    if (a.has(o)) return a.get(o);
                    var i = e.apply(this, n);
                    return r.cache = a.set(o, i), i
                };
                return r.cache = new(B.Cache || A), r
            }

            function P(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            x.prototype.clear = function() {
                this.__data__ = w ? w(null) : {}
            }, x.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, x.prototype.get = function(e) {
                var t = this.__data__;
                if (w) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return h.call(t, e) ? t[e] : void 0
            }, x.prototype.has = function(e) {
                var t = this.__data__;
                return w ? void 0 !== t[e] : h.call(t, e)
            }, x.prototype.set = function(e, t) {
                return this.__data__[e] = w && void 0 === t ? n : t, this
            }, E.prototype.clear = function() {
                this.__data__ = []
            }, E.prototype.delete = function(e) {
                var t = this.__data__,
                    r = S(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : y.call(t, r, 1), !0)
            }, E.prototype.get = function(e) {
                var t = this.__data__,
                    r = S(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, E.prototype.has = function(e) {
                return S(this.__data__, e) > -1
            }, E.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = S(r, e);
                return n < 0 ? r.push([e, t]) : r[n][1] = t, this
            }, A.prototype.clear = function() {
                this.__data__ = {
                    hash: new x,
                    map: new(_ || E),
                    string: new x
                }
            }, A.prototype.delete = function(e) {
                return O(this, e).delete(e)
            }, A.prototype.get = function(e) {
                return O(this, e).get(e)
            }, A.prototype.has = function(e) {
                return O(this, e).has(e)
            }, A.prototype.set = function(e, t) {
                return O(this, e).set(e, t), this
            }, B.Cache = A, e.exports = B
        },
        F63i: e => {
            var t, r, n = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (r) {
                    try {
                        return t.call(null, e, 0)
                    } catch (r) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var s, c = [],
                u = !1,
                l = -1;

            function p() {
                u && s && (u = !1, s.length ? c = s.concat(c) : l = -1, c.length && f())
            }

            function f() {
                if (!u) {
                    var e = i(p);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (s = c, c = []; ++l < t;) s && s[l].run();
                        l = -1, t = c.length
                    }
                    s = null, u = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function d(e, t) {
                this.fun = e, this.array = t
            }

            function g() {}
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new d(e, t)), 1 !== c.length || u || i(f)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = g, n.addListener = g, n.once = g, n.off = g, n.removeListener = g, n.removeAllListeners = g, n.emit = g, n.prependListener = g, n.prependOnceListener = g, n.listeners = function(e) {
                return []
            }, n.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            }
        },
        emlf: (e, t, r) => {
            "use strict";
            var n = r("YjNL");

            function o() {}

            function a() {}
            a.resetWarningCache = o, e.exports = function() {
                function e(e, t, r, o, a, i) {
                    if (i !== n) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return r.PropTypes = r, r
            }
        },
        aWzz: (e, t, r) => {
            e.exports = r("emlf")()
        },
        YjNL: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        hRh4: function(e, t, r) {
            ! function(e, t) {
                "use strict";

                function r(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function n(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            c(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function o(e) {
                    return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function s(e, t, r) {
                    return t && i(e.prototype, t), r && i(e, r), e
                }

                function c(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function u(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }

                function l(e, t) {
                    if (null == e) return {};
                    var r, n, o = u(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }

                function p(e, t) {
                    return f(e) || d(e, t) || g(e, t) || h()
                }

                function f(e) {
                    if (Array.isArray(e)) return e
                }

                function d(e, t) {
                    var r = e && ("undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (c) {
                            s = !0, o = c
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }

                function g(e, t) {
                    if (e) {
                        if ("string" === typeof e) return v(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(e, t) : void 0
                    }
                }

                function v(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function h() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var m = {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    },
                    b = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

                function y(e) {
                    var t = {
                            type: "tag",
                            name: "",
                            voidElement: !1,
                            attrs: {},
                            children: []
                        },
                        r = e.match(/<\/?([^\s]+?)[/\s>]/);
                    if (r && (t.name = r[1], (m[r[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
                        var n = e.indexOf("--\x3e");
                        return {
                            type: "comment",
                            comment: -1 !== n ? e.slice(4, n) : ""
                        }
                    }
                    for (var o = new RegExp(b), a = null; null !== (a = o.exec(e));)
                        if (a[0].trim())
                            if (a[1]) {
                                var i = a[1].trim(),
                                    s = [i, ""];
                                i.indexOf("=") > -1 && (s = i.split("=")), t.attrs[s[0]] = s[1], o.lastIndex--
                            } else a[2] && (t.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));
                    return t
                }
                var _ = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                    w = /^\s*$/,
                    x = Object.create(null);

                function E(e, t) {
                    switch (t.type) {
                        case "text":
                            return e + t.content;
                        case "tag":
                            return e += "<" + t.name + (t.attrs ? function(e) {
                                var t = [];
                                for (var r in e) t.push(r + '="' + e[r] + '"');
                                return t.length ? " " + t.join(" ") : ""
                            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(E, "") + "</" + t.name + ">";
                        case "comment":
                            return e + "\x3c!--" + t.comment + "--\x3e"
                    }
                }
                var A, S = {
                        parse: function(e, t) {
                            t || (t = {}), t.components || (t.components = x);
                            var r, n = [],
                                o = [],
                                a = -1,
                                i = !1;
                            if (0 !== e.indexOf("<")) {
                                var s = e.indexOf("<");
                                n.push({
                                    type: "text",
                                    content: -1 === s ? e : e.substring(0, s)
                                })
                            }
                            return e.replace(_, (function(s, c) {
                                if (i) {
                                    if (s !== "</" + r.name + ">") return;
                                    i = !1
                                }
                                var u, l = "/" !== s.charAt(1),
                                    p = s.startsWith("\x3c!--"),
                                    f = c + s.length,
                                    d = e.charAt(f);
                                if (p) {
                                    var g = y(s);
                                    return a < 0 ? (n.push(g), n) : ((u = o[a]).children.push(g), n)
                                }
                                if (l && (a++, "tag" === (r = y(s)).type && t.components[r.name] && (r.type = "component", i = !0), r.voidElement || i || !d || "<" === d || r.children.push({
                                        type: "text",
                                        content: e.slice(f, e.indexOf("<", f))
                                    }), 0 === a && n.push(r), (u = o[a - 1]) && u.children.push(r), o[a] = r), (!l || r.voidElement) && (a > -1 && (r.voidElement || r.name === s.slice(2, -1)) && (a--, r = -1 === a ? n : o[a]), !i && "<" !== d && d)) {
                                    u = -1 === a ? n : o[a].children;
                                    var v = e.indexOf("<", f),
                                        h = e.slice(f, -1 === v ? void 0 : v);
                                    w.test(h) && (h = " "), (v > -1 && a + u.length >= 0 || " " !== h) && u.push({
                                        type: "text",
                                        content: h
                                    })
                                }
                            })), n
                        },
                        stringify: function(e) {
                            return e.reduce((function(e, t) {
                                return e + E("", t)
                            }), "")
                        }
                    },
                    k = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    O = {
                        "&amp;": "&",
                        "&#38;": "&",
                        "&lt;": "<",
                        "&#60;": "<",
                        "&gt;": ">",
                        "&#62;": ">",
                        "&apos;": "'",
                        "&#39;": "'",
                        "&quot;": '"',
                        "&#34;": '"',
                        "&nbsp;": " ",
                        "&#160;": " ",
                        "&copy;": "\xa9",
                        "&#169;": "\xa9",
                        "&reg;": "\xae",
                        "&#174;": "\xae",
                        "&hellip;": "\u2026",
                        "&#8230;": "\u2026",
                        "&#x2F;": "/",
                        "&#47;": "/"
                    },
                    T = function(e) {
                        return O[e]
                    },
                    B = {
                        bindI18n: "languageChanged",
                        bindI18nStore: "",
                        transEmptyNodeValue: "",
                        transSupportBasicHtmlNodes: !0,
                        transWrapTextNodes: "",
                        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                        useSuspense: !0,
                        unescape: function(e) {
                            return e.replace(k, T)
                        }
                    },
                    P = t.createContext();

                function C() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    B = n(n({}, B), e)
                }

                function F() {
                    return B
                }
                var R = function() {
                    function e() {
                        a(this, e), this.usedNamespaces = {}
                    }
                    return s(e, [{
                        key: "addUsedNamespaces",
                        value: function(e) {
                            var t = this;
                            e.forEach((function(e) {
                                t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                            }))
                        }
                    }, {
                        key: "getUsedNamespaces",
                        value: function() {
                            return Object.keys(this.usedNamespaces)
                        }
                    }]), e
                }();

                function N(e) {
                    A = e
                }

                function D() {
                    return A
                }
                var I = {
                    type: "3rdParty",
                    init: function(e) {
                        C(e.options.react), N(e)
                    }
                };

                function L(e) {
                    return function(t) {
                        return new Promise((function(r) {
                            var o = j();
                            e.getInitialProps ? e.getInitialProps(t).then((function(e) {
                                r(n(n({}, e), o))
                            })) : r(o)
                        }))
                    }
                }

                function j() {
                    var e = D(),
                        t = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
                        r = {},
                        n = {};
                    return e.languages.forEach((function(r) {
                        n[r] = {}, t.forEach((function(t) {
                            n[r][t] = e.getResourceBundle(r, t) || {}
                        }))
                    })), r.initialI18nStore = n, r.initialLanguage = e.language, r
                }

                function M() {
                    if (console && console.warn) {
                        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        "string" === typeof r[0] && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r)
                    }
                }
                var H = {};

                function U() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    "string" === typeof t[0] && H[t[0]] || ("string" === typeof t[0] && (H[t[0]] = new Date), M.apply(void 0, t))
                }

                function G(e, t, r) {
                    e.loadNamespaces(t, (function() {
                        if (e.isInitialized) r();
                        else {
                            var t = function t() {
                                setTimeout((function() {
                                    e.off("initialized", t)
                                }), 0), r()
                            };
                            e.on("initialized", t)
                        }
                    }))
                }

                function W(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = t.languages[0],
                        o = !!t.options && t.options.fallbackLng,
                        a = t.languages[t.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    var i = function(e, r) {
                        var n = t.services.backendConnector.state["".concat(e, "|").concat(r)];
                        return -1 === n || 2 === n
                    };
                    return !(r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(n, e) || !(t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages)) || !(!i(n, e) || o && !i(a, e)))
                }

                function z(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return t.languages && t.languages.length ? void 0 !== t.options.ignoreJSONStructure ? t.hasLoadedNamespace(e, {
                        precheck: function(t, n) {
                            if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !n(t.isLanguageChangingTo, e)) return !1
                        }
                    }) : W(e, t, r) : (U("i18n.languages were undefined or empty", t.languages), !0)
                }

                function V(e) {
                    return e.displayName || e.name || ("string" === typeof e && e.length > 0 ? e : "Unknown")
                }
                var q = ["format"],
                    K = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

                function $(e, t) {
                    if (!e) return !1;
                    var r = e.props ? e.props.children : e.children;
                    return t ? r.length > 0 : !!r
                }

                function Q(e) {
                    return e ? e.props ? e.props.children : e.children : []
                }

                function Y(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) && e.every((function(e) {
                        return t.isValidElement(e)
                    }))
                }

                function J(e) {
                    return Array.isArray(e) ? e : [e]
                }

                function Z(e, t) {
                    var r = n({}, t);
                    return r.props = Object.assign(e.props, t.props), r
                }

                function X(e, r) {
                    if (!e) return "";
                    var n = "",
                        a = J(e),
                        i = r.transSupportBasicHtmlNodes && r.transKeepBasicHtmlNodesFor ? r.transKeepBasicHtmlNodesFor : [];
                    return a.forEach((function(e, a) {
                        if ("string" === typeof e) n += "".concat(e);
                        else if (t.isValidElement(e)) {
                            var s = Object.keys(e.props).length,
                                c = i.indexOf(e.type) > -1,
                                u = e.props.children;
                            if (!u && c && 0 === s) n += "<".concat(e.type, "/>");
                            else if (u || c && 0 === s)
                                if (e.props.i18nIsDynamicList) n += "<".concat(a, "></").concat(a, ">");
                                else if (c && 1 === s && "string" === typeof u) n += "<".concat(e.type, ">").concat(u, "</").concat(e.type, ">");
                            else {
                                var p = X(u, r);
                                n += "<".concat(a, ">").concat(p, "</").concat(a, ">")
                            } else n += "<".concat(a, "></").concat(a, ">")
                        } else if (null === e) M("Trans: the passed in value is invalid - seems you passed in a null child.");
                        else if ("object" === o(e)) {
                            var f = e.format,
                                d = l(e, q),
                                g = Object.keys(d);
                            if (1 === g.length) {
                                var v = f ? "".concat(g[0], ", ").concat(f) : g[0];
                                n += "{{".concat(v, "}}")
                            } else M("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                        } else M("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                    })), n
                }

                function ee(e, r, a, i, s, c) {
                    if ("" === r) return [];
                    var u = i.transKeepBasicHtmlNodesFor || [],
                        l = r && new RegExp(u.join("|")).test(r);
                    if (!e && !l) return [r];
                    var p = {};

                    function f(e) {
                        J(e).forEach((function(e) {
                            "string" !== typeof e && ($(e) ? f(Q(e)) : "object" !== o(e) || t.isValidElement(e) || Object.assign(p, e))
                        }))
                    }
                    f(e);
                    var d = S.parse("<0>".concat(r, "</0>")),
                        g = n(n({}, p), s);

                    function v(e, t, r) {
                        var n = Q(e),
                            o = m(n, t.children, r);
                        return Y(n) && 0 === o.length ? n : o
                    }

                    function h(e, r, o, a, i) {
                        e.dummy && (e.children = r), o.push(t.cloneElement(e, n(n({}, e.props), {}, {
                            key: a
                        }), i ? void 0 : r))
                    }

                    function m(r, s, p) {
                        var f = J(r);
                        return J(s).reduce((function(r, s, d) {
                            var b = s.children && s.children[0] && s.children[0].content && a.services.interpolator.interpolate(s.children[0].content, g, a.language);
                            if ("tag" === s.type) {
                                var y = f[parseInt(s.name, 10)];
                                !y && 1 === p.length && p[0][s.name] && (y = p[0][s.name]), y || (y = {});
                                var _ = 0 !== Object.keys(s.attrs).length ? Z({
                                        props: s.attrs
                                    }, y) : y,
                                    w = t.isValidElement(_),
                                    x = w && $(s, !0) && !s.voidElement,
                                    E = l && "object" === o(_) && _.dummy && !w,
                                    A = "object" === o(e) && null !== e && Object.hasOwnProperty.call(e, s.name);
                                if ("string" === typeof _) {
                                    var S = a.services.interpolator.interpolate(_, g, a.language);
                                    r.push(S)
                                } else if ($(_) || x) h(_, v(_, s, p), r, d);
                                else if (E) {
                                    var k = m(f, s.children, p);
                                    r.push(t.cloneElement(_, n(n({}, _.props), {}, {
                                        key: d
                                    }), k))
                                } else if (Number.isNaN(parseFloat(s.name)))
                                    if (A) h(_, v(_, s, p), r, d, s.voidElement);
                                    else if (i.transSupportBasicHtmlNodes && u.indexOf(s.name) > -1)
                                    if (s.voidElement) r.push(t.createElement(s.name, {
                                        key: "".concat(s.name, "-").concat(d)
                                    }));
                                    else {
                                        var O = m(f, s.children, p);
                                        r.push(t.createElement(s.name, {
                                            key: "".concat(s.name, "-").concat(d)
                                        }, O))
                                    }
                                else if (s.voidElement) r.push("<".concat(s.name, " />"));
                                else {
                                    var T = m(f, s.children, p);
                                    r.push("<".concat(s.name, ">").concat(T, "</").concat(s.name, ">"))
                                } else if ("object" !== o(_) || w) 1 === s.children.length && b ? r.push(t.cloneElement(_, n(n({}, _.props), {}, {
                                    key: d
                                }), b)) : r.push(t.cloneElement(_, n(n({}, _.props), {}, {
                                    key: d
                                })));
                                else {
                                    var B = s.children[0] ? b : null;
                                    B && r.push(B)
                                }
                            } else if ("text" === s.type) {
                                var P = i.transWrapTextNodes,
                                    C = c ? i.unescape(a.services.interpolator.interpolate(s.content, g, a.language)) : a.services.interpolator.interpolate(s.content, g, a.language);
                                P ? r.push(t.createElement(P, {
                                    key: "".concat(s.name, "-").concat(d)
                                }, C)) : r.push(C)
                            }
                            return r
                        }), [])
                    }
                    return Q(m([{
                        dummy: !0,
                        children: e || []
                    }], d, J(e || []))[0])
                }

                function te(e) {
                    var r = e.children,
                        o = e.count,
                        a = e.parent,
                        i = e.i18nKey,
                        s = e.context,
                        c = e.tOptions,
                        u = void 0 === c ? {} : c,
                        p = e.values,
                        f = e.defaults,
                        d = e.components,
                        g = e.ns,
                        v = e.i18n,
                        h = e.t,
                        m = e.shouldUnescape,
                        b = l(e, K),
                        y = t.useContext(P) || {},
                        _ = y.i18n,
                        w = y.defaultNS,
                        x = v || _ || D();
                    if (!x) return U("You will need to pass in an i18next instance by using i18nextReactModule"), r;
                    var E = h || x.t.bind(x) || function(e) {
                        return e
                    };
                    s && (u.context = s);
                    var A = n(n({}, F()), x.options && x.options.react),
                        S = g || E.ns || w || x.options && x.options.defaultNS;
                    S = "string" === typeof S ? [S] : S || ["translation"];
                    var k = f || X(r, A) || A.transEmptyNodeValue || i,
                        O = A.hashTransKey,
                        T = i || (O ? O(k) : k),
                        B = p ? u.interpolation : {
                            interpolation: n(n({}, u.interpolation), {}, {
                                prefix: "#$?",
                                suffix: "?$#"
                            })
                        },
                        C = n(n(n(n({}, u), {}, {
                            count: o
                        }, p), B), {}, {
                            defaultValue: k,
                            ns: S
                        }),
                        R = ee(d || r, T ? E(T, C) : k, x, A, C, m),
                        N = void 0 !== a ? a : A.defaultTransParent;
                    return N ? t.createElement(N, b, R) : R
                }
                var re = function(e, r) {
                    var n = t.useRef();
                    return t.useEffect((function() {
                        n.current = r ? n.current : e
                    }), [e, r]), n.current
                };

                function ne(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = r.i18n,
                        a = t.useContext(P) || {},
                        i = a.i18n,
                        s = a.defaultNS,
                        c = o || i || D();
                    if (c && !c.reportNamespaces && (c.reportNamespaces = new R), !c) {
                        U("You will need to pass in an i18next instance by using initReactI18next");
                        var u = function(e) {
                                return Array.isArray(e) ? e[e.length - 1] : e
                            },
                            l = [u, {}, !1];
                        return l.t = u, l.i18n = {}, l.ready = !1, l
                    }
                    c.options.react && void 0 !== c.options.react.wait && U("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    var f = n(n(n({}, F()), c.options.react), r),
                        d = f.useSuspense,
                        g = f.keyPrefix,
                        v = e || s || c.options && c.options.defaultNS;
                    v = "string" === typeof v ? [v] : v || ["translation"], c.reportNamespaces.addUsedNamespaces && c.reportNamespaces.addUsedNamespaces(v);
                    var h = (c.isInitialized || c.initializedStoreOnce) && v.every((function(e) {
                        return z(e, c, f)
                    }));

                    function m() {
                        return c.getFixedT(null, "fallback" === f.nsMode ? v : v[0], g)
                    }
                    var b = p(t.useState(m), 2),
                        y = b[0],
                        _ = b[1],
                        w = v.join(),
                        x = re(w),
                        E = t.useRef(!0);
                    t.useEffect((function() {
                        var e = f.bindI18n,
                            t = f.bindI18nStore;

                        function r() {
                            E.current && _(m)
                        }
                        return E.current = !0, h || d || G(c, v, (function() {
                                E.current && _(m)
                            })), h && x && x !== w && E.current && _(m), e && c && c.on(e, r), t && c && c.store.on(t, r),
                            function() {
                                E.current = !1, e && c && e.split(" ").forEach((function(e) {
                                    return c.off(e, r)
                                })), t && c && t.split(" ").forEach((function(e) {
                                    return c.store.off(e, r)
                                }))
                            }
                    }), [c, w]);
                    var A = t.useRef(!0);
                    t.useEffect((function() {
                        E.current && !A.current && _(m), A.current = !1
                    }), [c, g]);
                    var S = [y, c, h];
                    if (S.t = y, S.i18n = c, S.ready = h, h) return S;
                    if (!h && !d) return S;
                    throw new Promise((function(e) {
                        G(c, v, (function() {
                            e()
                        }))
                    }))
                }
                var oe = ["forwardedRef"];

                function ae(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return function(o) {
                        function a(a) {
                            var i = a.forwardedRef,
                                s = l(a, oe),
                                c = p(ne(e, n(n({}, s), {}, {
                                    keyPrefix: r.keyPrefix
                                })), 3),
                                u = c[0],
                                f = c[1],
                                d = c[2],
                                g = n(n({}, s), {}, {
                                    t: u,
                                    i18n: f,
                                    tReady: d
                                });
                            return r.withRef && i ? g.ref = i : !r.withRef && i && (g.forwardedRef = i), t.createElement(o, g)
                        }
                        a.displayName = "withI18nextTranslation(".concat(V(o), ")"), a.WrappedComponent = o;
                        var i = function(e, r) {
                            return t.createElement(a, Object.assign({}, e, {
                                forwardedRef: r
                            }))
                        };
                        return r.withRef ? t.forwardRef(i) : a
                    }
                }
                var ie = ["ns", "children"];

                function se(e) {
                    var t = e.ns,
                        r = e.children,
                        n = p(ne(t, l(e, ie)), 3),
                        o = n[0],
                        a = n[1],
                        i = n[2];
                    return r(o, {
                        i18n: a,
                        lng: a.language
                    }, i)
                }

                function ce(e) {
                    var r = e.i18n,
                        n = e.defaultNS,
                        o = e.children,
                        a = t.useMemo((function() {
                            return {
                                i18n: r,
                                defaultNS: n
                            }
                        }), [r, n]);
                    return t.createElement(P.Provider, {
                        value: a
                    }, o)
                }

                function ue(e, r) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).i18n,
                        o = (t.useContext(P) || {}).i18n,
                        a = n || o || D();
                    a.options && a.options.isClone || (e && !a.initializedStoreOnce && (a.services.resourceStore.data = e, a.options.ns = Object.values(e).reduce((function(e, t) {
                        return Object.keys(t).forEach((function(t) {
                            e.indexOf(t) < 0 && e.push(t)
                        })), e
                    }), a.options.ns), a.initializedStoreOnce = !0, a.isInitialized = !0), r && !a.initializedLanguageOnce && (a.changeLanguage(r), a.initializedLanguageOnce = !0))
                }
                var le = ["initialI18nStore", "initialLanguage"];

                function pe() {
                    return function(e) {
                        function r(r) {
                            var o = r.initialI18nStore,
                                a = r.initialLanguage,
                                i = l(r, le);
                            return ue(o, a), t.createElement(e, n({}, i))
                        }
                        return r.getInitialProps = L(e), r.displayName = "withI18nextSSR(".concat(V(e), ")"), r.WrappedComponent = e, r
                    }
                }
                var fe = function() {
                        return ""
                    },
                    de = function() {
                        return ""
                    },
                    ge = function() {
                        return ""
                    },
                    ve = function() {
                        return ""
                    },
                    he = function() {
                        return ""
                    },
                    me = function() {
                        return ""
                    };
                e.I18nContext = P, e.I18nextProvider = ce, e.Trans = te, e.Translation = se, e.composeInitialProps = L, e.date = fe, e.getDefaults = F, e.getI18n = D, e.getInitialProps = j, e.initReactI18next = I, e.number = ge, e.plural = he, e.select = ve, e.selectOrdinal = me, e.setDefaults = C, e.setI18n = N, e.time = de, e.useSSR = ue, e.useTranslation = ne, e.withSSR = pe, e.withTranslation = ae, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, r("DTvD"))
        },
        hTPx: (e, t) => {
            "use strict";
            var r = "function" === typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                l = r ? Symbol.for("react.async_mode") : 60111,
                p = r ? Symbol.for("react.concurrent_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                g = r ? Symbol.for("react.suspense_list") : 60120,
                v = r ? Symbol.for("react.memo") : 60115,
                h = r ? Symbol.for("react.lazy") : 60116,
                m = r ? Symbol.for("react.block") : 60121,
                b = r ? Symbol.for("react.fundamental") : 60117,
                y = r ? Symbol.for("react.responder") : 60118,
                _ = r ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case l:
                                case p:
                                case a:
                                case s:
                                case i:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case f:
                                        case h:
                                        case v:
                                        case c:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function x(e) {
                return w(e) === p
            }
            t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = h, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = i, t.Suspense = d, t.isAsyncMode = function(e) {
                return x(e) || w(e) === l
            }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
                return w(e) === u
            }, t.isContextProvider = function(e) {
                return w(e) === c
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return w(e) === f
            }, t.isFragment = function(e) {
                return w(e) === a
            }, t.isLazy = function(e) {
                return w(e) === h
            }, t.isMemo = function(e) {
                return w(e) === v
            }, t.isPortal = function(e) {
                return w(e) === o
            }, t.isProfiler = function(e) {
                return w(e) === s
            }, t.isStrictMode = function(e) {
                return w(e) === i
            }, t.isSuspense = function(e) {
                return w(e) === d
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === a || e === p || e === s || e === i || e === d || e === g || "object" === typeof e && null !== e && (e.$$typeof === h || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === b || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === m)
            }, t.typeOf = w
        },
        kvVz: (e, t, r) => {
            "use strict";
            e.exports = r("hTPx")
        },
        "/OND": (e, t, r) => {
            "use strict";
            r.d(t, {
                Kq: () => l,
                bN: () => A,
                wA: () => m,
                d4: () => w
            });
            var n = r("DTvD"),
                o = r.n(n),
                a = (r("aWzz"), o().createContext(null));
            var i = function(e) {
                    e()
                },
                s = function() {
                    return i
                },
                c = {
                    notify: function() {}
                };
            var u = function() {
                function e(e, t) {
                    this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = c, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
                }
                var t = e.prototype;
                return t.addNestedSub = function(e) {
                    return this.trySubscribe(), this.listeners.subscribe(e)
                }, t.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, t.handleChangeWrapper = function() {
                    this.onStateChange && this.onStateChange()
                }, t.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, t.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = function() {
                        var e = s(),
                            t = null,
                            r = null;
                        return {
                            clear: function() {
                                t = null, r = null
                            },
                            notify: function() {
                                e((function() {
                                    for (var e = t; e;) e.callback(), e = e.next
                                }))
                            },
                            get: function() {
                                for (var e = [], r = t; r;) e.push(r), r = r.next;
                                return e
                            },
                            subscribe: function(e) {
                                var n = !0,
                                    o = r = {
                                        callback: e,
                                        next: null,
                                        prev: r
                                    };
                                return o.prev ? o.prev.next = o : t = o,
                                    function() {
                                        n && null !== t && (n = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                                    }
                            }
                        }
                    }())
                }, t.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = c)
                }, e
            }();
            const l = function(e) {
                var t = e.store,
                    r = e.context,
                    i = e.children,
                    s = (0, n.useMemo)((function() {
                        var e = new u(t);
                        return e.onStateChange = e.notifyNestedSubs, {
                            store: t,
                            subscription: e
                        }
                    }), [t]),
                    c = (0, n.useMemo)((function() {
                        return t.getState()
                    }), [t]);
                (0, n.useEffect)((function() {
                    var e = s.subscription;
                    return e.trySubscribe(), c !== t.getState() && e.notifyNestedSubs(),
                        function() {
                            e.tryUnsubscribe(), e.onStateChange = null
                        }
                }), [s, c]);
                var l = r || a;
                return o().createElement(l.Provider, {
                    value: s
                }, i)
            };
            r("oXkQ"), r("kvVz");
            var p = "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? n.useLayoutEffect : n.useEffect;
            "function" === typeof Symbol && Symbol.observable;
            var f = function() {
                return Math.random().toString(36).substring(7).split("").join(".")
            };
            f(), f();
            r("DPeK");

            function d() {
                return (0, n.useContext)(a)
            }

            function g(e) {
                void 0 === e && (e = a);
                var t = e === a ? d : function() {
                    return (0, n.useContext)(e)
                };
                return function() {
                    return t().store
                }
            }
            var v = g();

            function h(e) {
                void 0 === e && (e = a);
                var t = e === a ? v : g(e);
                return function() {
                    return t().dispatch
                }
            }
            var m = h(),
                b = function(e, t) {
                    return e === t
                };

            function y(e) {
                void 0 === e && (e = a);
                var t = e === a ? d : function() {
                    return (0, n.useContext)(e)
                };
                return function(e, r) {
                    void 0 === r && (r = b);
                    var o = t(),
                        a = function(e, t, r, o) {
                            var a, i = (0, n.useReducer)((function(e) {
                                    return e + 1
                                }), 0)[1],
                                s = (0, n.useMemo)((function() {
                                    return new u(r, o)
                                }), [r, o]),
                                c = (0, n.useRef)(),
                                l = (0, n.useRef)(),
                                f = (0, n.useRef)(),
                                d = (0, n.useRef)(),
                                g = r.getState();
                            try {
                                a = e !== l.current || g !== f.current || c.current ? e(g) : d.current
                            } catch (v) {
                                throw c.current && (v.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), v
                            }
                            return p((function() {
                                l.current = e, f.current = g, d.current = a, c.current = void 0
                            })), p((function() {
                                function e() {
                                    try {
                                        var e = l.current(r.getState());
                                        if (t(e, d.current)) return;
                                        d.current = e
                                    } catch (v) {
                                        c.current = v
                                    }
                                    i()
                                }
                                return s.onStateChange = e, s.trySubscribe(), e(),
                                    function() {
                                        return s.tryUnsubscribe()
                                    }
                            }), [r, s]), a
                        }(e, r, o.store, o.subscription);
                    return (0, n.useDebugValue)(a), a
                }
            }
            var _, w = y(),
                x = r("hTvQ");

            function E(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
            }

            function A(e, t) {
                if (E(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (var o = 0; o < r.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !E(e[r[o]], t[r[o]])) return !1;
                return !0
            }
            _ = x.unstable_batchedUpdates, i = _
        },
        "p/97": e => {
            "use strict";
            e.exports = (e, t) => {
                if ("string" !== typeof e || "string" !== typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                const r = e.indexOf(t);
                return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
            }
        },
        UM5q: e => {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
        },
        h7FZ: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => o
            });
            var n = "Invariant failed";
            const o = function(e, t) {
                if (!e) throw new Error(n)
            }
        },
        F3rx: e => {
            "use strict";
            e.exports = MD5
        },
        DTvD: e => {
            "use strict";
            e.exports = React
        },
        hTvQ: e => {
            "use strict";
            e.exports = ReactDOM
        },
        LJ4M: e => {
            "use strict";
            e.exports = _bne.cookies
        },
        MdGa: e => {
            "use strict";
            e.exports = _bne.device
        },
        E0uk: e => {
            "use strict";
            e.exports = _bne.http
        },
        tKUM: e => {
            "use strict";
            e.exports = _bne.language
        },
        mo5a: e => {
            "use strict";
            e.exports = _bne.utils.uuid
        },
        NPYb: e => {
            "use strict";
            e.exports = _bne.utm
        },
        kPx0: e => {
            "use strict";
            e.exports = b2aSDK
        },
        HS2I: e => {
            "use strict";
            e.exports = dataUMD
        },
        VA12: e => {
            "use strict";
            e.exports = httpSDK
        },
        Pz56: e => {
            "use strict";
            e.exports = regeneratorRuntime
        },
        wIZF: e => {
            "use strict";
            e.exports = tslib
        },
        NoXm: e => {
            "use strict";
            e.exports = utilsUMD
        },
        "47/P": (e, t, r) => {
            var n;
            if ("function" === typeof fetch && (n = "undefined" !== typeof r.g && r.g.fetch ? r.g.fetch : window.fetch ? window.fetch : fetch), "undefined" === typeof window.document) {
                var o = n || r("64TO");
                o.default && (o = o.default), t.default = o, e.exports = t.default
            }
        },
        "+plb": (e, t, r) => {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            r.d(t, {
                A: () => n
            })
        },
        BxAp: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(t, {
                A: () => n
            })
        },
        nTdK: (e, t, r) => {
            "use strict";

            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function o(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
            r.d(t, {
                A: () => o
            })
        },
        OHGK: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r.d(t, {
                A: () => n
            })
        },
        DPeK: (e, t, r) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.d(t, {
                A: () => n
            })
        },
        bY8i: (e, t, r) => {
            "use strict";

            function n(e) {
                return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(e)
            }
            r.d(t, {
                A: () => n
            })
        },
        yDWy: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("XDNX");

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (0, n.A)(e, t)
            }
        },
        "Zpl/": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("Cffy"),
                o = r("+plb");

            function a(e, t) {
                if (t && ("object" === (0, n.A)(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, o.A)(e)
            }
        },
        XDNX: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return n = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, n(e, t)
            }
            r.d(t, {
                A: () => n
            })
        },
        Cffy: (e, t, r) => {
            "use strict";

            function n(e) {
                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r.d(t, {
                A: () => n
            })
        },
        BA4h: (e, t, r) => {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            r.d(t, {
                A: () => n
            })
        },
        uqCI: (e, t, r) => {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            r.d(t, {
                A: () => n
            })
        },
        sViW: (e, t, r) => {
            "use strict";

            function n(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        c = s.value
                } catch (error) {
                    return void r(error)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function o(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(o, a) {
                        var i = e.apply(t, r);

                        function s(e) {
                            n(i, o, a, s, c, "next", e)
                        }

                        function c(e) {
                            n(i, o, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            r.d(t, {
                A: () => o
            })
        },
        "888e": (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(t, {
                A: () => n
            })
        },
        nG1z: (e, t, r) => {
            "use strict";

            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function o(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
            r.d(t, {
                A: () => o
            })
        },
        VKAp: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("m+Lx"),
                o = r("oH+a");

            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, a = (0, n.A)(e);
                    if (t) {
                        var i = (0, n.A)(this).constructor;
                        r = Reflect.construct(a, arguments, i)
                    } else r = a.apply(this, arguments);
                    return (0, o.A)(this, r)
                }
            }
        },
        ezuS: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r.d(t, {
                A: () => n
            })
        },
        "m+Lx": (e, t, r) => {
            "use strict";

            function n(e) {
                return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(e)
            }

            function o(e) {
                return n(e)
            }
            r.d(t, {
                A: () => o
            })
        },
        "2PCm": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("Wdkv");

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (0, n.A)(e, t)
            }
        },
        "2URn": (e, t, r) => {
            "use strict";

            function n(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }
            r.d(t, {
                A: () => n
            })
        },
        x9Vb: (e, t, r) => {
            "use strict";

            function n(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }
            r.d(t, {
                A: () => n
            })
        },
        BK7R: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("ezuS");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), o.forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    }))
                }
                return e
            }
        },
        QUKP: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })), e
            }
            r.d(t, {
                A: () => n
            })
        },
        gZfF: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            r.d(t, {
                A: () => n
            })
        },
        "oH+a": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("uqCI"),
                o = r("blBx");

            function a(e, t) {
                return !t || "object" !== (0, o.A)(t) && "function" !== typeof t ? (0, n.A)(e) : t
            }
        },
        Wdkv: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return n = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, n(e, t)
            }

            function o(e, t) {
                return n(e, t)
            }
            r.d(t, {
                A: () => o
            })
        },
        VP0d: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("x9Vb");
            var o = r("xjOY");

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || (0, n.A)(e, t) || (0, o.A)(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        tEf9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("BA4h");
            var o = r("x9Vb");
            var a = r("xjOY");

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, n.A)(e)
                }(e) || (0, o.A)(e) || (0, a.A)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        blBx: (e, t, r) => {
            "use strict";

            function n(e) {
                return e && e.constructor === Symbol ? "symbol" : typeof e
            }
            r.d(t, {
                A: () => n
            })
        },
        xjOY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("BA4h");

            function o(e, t) {
                if (e) {
                    if ("string" === typeof e) return (0, n.A)(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.A)(e, t) : void 0
                }
            }
        },
        "/2pv": (e, t, r) => {
            "use strict";

            function n(e) {
                var t, r, o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (o && (o += " "), o += r)
                    } else
                        for (r in e) e[r] && (o && (o += " "), o += r);
                return o
            }

            function o() {
                for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = n(e)) && (o && (o += " "), o += t);
                return o
            }
            r.d(t, {
                $: () => o
            })
        },
        VMO7: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = r("YmLP").A.Symbol
        },
        KXmo: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("q22z"),
                o = r("YmLP");
            const a = (0, n.A)(o.A, "WeakMap")
        },
        u0SH: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }
        },
        cMJY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
                return e
            }
        },
        itBc: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("Z8yJ"),
                o = Object.create;
            const a = function() {
                function e() {}
                return function(t) {
                    if (!(0, n.A)(t)) return {};
                    if (o) return o(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }()
        },
        O7iy: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("VMO7"),
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = o.toString,
                s = n.A ? n.A.toStringTag : void 0;
            const c = function(e) {
                var t = a.call(e, s),
                    r = e[s];
                try {
                    e[s] = void 0;
                    var n = !0
                } catch (c) {}
                var o = i.call(e);
                return n && (t ? e[s] = r : delete e[s]), o
            };
            var u = Object.prototype.toString;
            const l = function(e) {
                return u.call(e)
            };
            var p = n.A ? n.A.toStringTag : void 0;
            const f = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? c(e) : l(e)
            }
        },
        "D4m/": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }
        },
        G48o: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("q22z");
            const o = function() {
                try {
                    var e = (0, n.A)(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (t) {}
            }()
        },
        N8de: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r("cMJY"),
                o = r("VMO7"),
                a = r("J7fb"),
                i = r("jEyD"),
                s = o.A ? o.A.isConcatSpreadable : void 0;
            const c = function(e) {
                return (0, i.A)(e) || (0, a.A)(e) || !!(s && e && e[s])
            };
            const u = function e(t, r, o, a, i) {
                var s = -1,
                    u = t.length;
                for (o || (o = c), i || (i = []); ++s < u;) {
                    var l = t[s];
                    r > 0 && o(l) ? r > 1 ? e(l, r - 1, o, a, i) : (0, n.A)(i, l) : a || (i[i.length] = l)
                }
                return i
            };
            const l = function(e) {
                return (null == e ? 0 : e.length) ? u(e, 1) : []
            };
            var p = r("TZ12"),
                f = r("MZWg");
            const d = function(e) {
                return (0, f.A)((0, p.A)(e, void 0, l), e + "")
            }
        },
        dCmz: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = "object" == typeof global && global && global.Object === Object && global
        },
        q22z: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => m
            });
            var n = r("QRTr");
            const o = r("YmLP").A["__core-js_shared__"];
            var a = function() {
                var e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();
            const i = function(e) {
                return !!a && a in e
            };
            var s = r("Z8yJ"),
                c = r("Mip2"),
                u = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                p = Object.prototype,
                f = l.toString,
                d = p.hasOwnProperty,
                g = RegExp("^" + f.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const v = function(e) {
                return !(!(0, s.A)(e) || i(e)) && ((0, n.A)(e) ? g : u).test((0, c.A)(e))
            };
            const h = function(e, t) {
                return null == e ? void 0 : e[t]
            };
            const m = function(e, t) {
                var r = h(e, t);
                return v(r) ? r : void 0
            }
        },
        TZ12: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("u0SH"),
                o = Math.max;
            const a = function(e, t, r) {
                return t = o(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var a = arguments, i = -1, s = o(a.length - t, 0), c = Array(s); ++i < s;) c[i] = a[t + i];
                        i = -1;
                        for (var u = Array(t + 1); ++i < t;) u[i] = a[i];
                        return u[t] = r(c), (0, n.A)(e, this, u)
                    }
            }
        },
        YmLP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("dCmz"),
                o = "object" == typeof self && self && self.Object === Object && self;
            const a = n.A || o || Function("return this")()
        },
        MZWg: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            const n = function(e) {
                return function() {
                    return e
                }
            };
            var o = r("G48o"),
                a = r("rnGa");
            const i = o.A ? function(e, t) {
                return (0, o.A)(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: n(t),
                    writable: !0
                })
            } : a.A;
            var s = Date.now;
            const c = function(e) {
                var t = 0,
                    r = 0;
                return function() {
                    var n = s(),
                        o = 16 - (n - r);
                    if (r = n, o > 0) {
                        if (++t >= 800) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(i)
        },
        Mip2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = Function.prototype.toString;
            const o = function(e) {
                if (null != e) {
                    try {
                        return n.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        "1Ivh": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => S
            });
            var n = r("itBc");
            const o = function() {};

            function a(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            a.prototype = (0, n.A)(o.prototype), a.prototype.constructor = a;
            const i = a;
            var s = r("N8de"),
                c = r("KXmo");
            const u = c.A && new c.A;
            var l = r("h/7X");
            const p = u ? function(e) {
                return u.get(e)
            } : l.A;
            const f = {};
            var d = Object.prototype.hasOwnProperty;
            const g = function(e) {
                for (var t = e.name + "", r = f[t], n = d.call(f, t) ? r.length : 0; n--;) {
                    var o = r[n],
                        a = o.func;
                    if (null == a || a == e) return o.name
                }
                return t
            };
            var v = r("jEyD");

            function h(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            h.prototype = (0, n.A)(o.prototype), h.prototype.constructor = h;
            const m = h;
            var b = r("ga/a"),
                y = r("D4m/");
            const _ = function(e) {
                if (e instanceof m) return e.clone();
                var t = new i(e.__wrapped__, e.__chain__);
                return t.__actions__ = (0, y.A)(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            };
            var w = Object.prototype.hasOwnProperty;

            function x(e) {
                if ((0, b.A)(e) && !(0, v.A)(e) && !(e instanceof m)) {
                    if (e instanceof i) return e;
                    if (w.call(e, "__wrapped__")) return _(e)
                }
                return new i(e)
            }
            x.prototype = o.prototype, x.prototype.constructor = x;
            const E = x;
            const A = function(e) {
                var t = g(e),
                    r = E[t];
                if ("function" != typeof r || !(t in m.prototype)) return !1;
                if (e === r) return !0;
                var n = p(r);
                return !!n && e === n[0]
            };
            const S = function(e) {
                return (0, s.A)((function(t) {
                    var r = t.length,
                        n = r,
                        o = i.prototype.thru;
                    for (e && t.reverse(); n--;) {
                        var a = t[n];
                        if ("function" != typeof a) throw new TypeError("Expected a function");
                        if (o && !s && "wrapper" == g(a)) var s = new i([], !0)
                    }
                    for (n = s ? n : r; ++n < r;) {
                        a = t[n];
                        var c = g(a),
                            u = "wrapper" == c ? p(a) : void 0;
                        s = u && A(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? s[g(u[0])].apply(s, u[3]) : 1 == a.length && A(a) ? s[c]() : s.thru(a)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (s && 1 == e.length && (0, v.A)(n)) return s.plant(n).value();
                        for (var o = 0, a = r ? t[o].apply(this, e) : n; ++o < r;) a = t[o].call(this, a);
                        return a
                    }
                }))
            }()
        },
        rnGa: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                return e
            }
        },
        J7fb: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("O7iy"),
                o = r("ga/a");
            const a = function(e) {
                return (0, o.A)(e) && "[object Arguments]" == (0, n.A)(e)
            };
            var i = Object.prototype,
                s = i.hasOwnProperty,
                c = i.propertyIsEnumerable;
            const u = a(function() {
                return arguments
            }()) ? a : function(e) {
                return (0, o.A)(e) && s.call(e, "callee") && !c.call(e, "callee")
            }
        },
        jEyD: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = Array.isArray
        },
        QRTr: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("O7iy"),
                o = r("Z8yJ");
            const a = function(e) {
                if (!(0, o.A)(e)) return !1;
                var t = (0, n.A)(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        Z8yJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        "ga/a": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                return null != e && "object" == typeof e
            }
        },
        "h/7X": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function() {}
        },
        "0XUj": (e, t, r) => {
            "use strict";
            r.d(t, {
                QP: () => Q
            });
            const n = e => {
                    const t = s(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = e;
                    return {
                        getClassGroupId: e => {
                            const r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || i(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            const o = r[e] || [];
                            return t && n[e] ? [...o, ...n[e]] : o
                        }
                    }
                },
                o = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    const r = e[0],
                        n = t.nextPart.get(r),
                        a = n ? o(e.slice(1), n) : void 0;
                    if (a) return a;
                    if (0 === t.validators.length) return;
                    const i = e.join("-");
                    return t.validators.find((({
                        validator: e
                    }) => e(i))) ? .classGroupId
                },
                a = /^\[(.+)\]$/,
                i = e => {
                    if (a.test(e)) {
                        const t = a.exec(e)[1],
                            r = t ? .substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                s = e => {
                    const {
                        theme: t,
                        prefix: r
                    } = e, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    return p(Object.entries(e.classGroups), r).forEach((([e, r]) => {
                        c(r, n, e, t)
                    })), n
                },
                c = (e, t, r, n) => {
                    e.forEach((e => {
                        if ("string" !== typeof e) {
                            if ("function" === typeof e) return l(e) ? void c(e(n), t, r, n) : void t.validators.push({
                                validator: e,
                                classGroupId: r
                            });
                            Object.entries(e).forEach((([e, o]) => {
                                c(o, u(t, e), r, n)
                            }))
                        } else {
                            ("" === e ? t : u(t, e)).classGroupId = r
                        }
                    }))
                },
                u = (e, t) => {
                    let r = e;
                    return t.split("-").forEach((e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    })), r
                },
                l = e => e.isThemeGetter,
                p = (e, t) => t ? e.map((([e, r]) => [e, r.map((e => "string" === typeof e ? t + e : "object" === typeof e ? Object.fromEntries(Object.entries(e).map((([e, r]) => [t + e, r]))) : e))])) : e,
                f = e => {
                    if (e < 1) return {
                        get: () => {},
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        n = new Map;
                    const o = (o, a) => {
                        r.set(o, a), t++, t > e && (t = 0, n = r, r = new Map)
                    };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : o(e, t)
                        }
                    }
                },
                d = e => {
                    const {
                        separator: t,
                        experimentalParseClassName: r
                    } = e, n = 1 === t.length, o = t[0], a = t.length, i = e => {
                        const r = [];
                        let i, s = 0,
                            c = 0;
                        for (let p = 0; p < e.length; p++) {
                            let u = e[p];
                            if (0 === s) {
                                if (u === o && (n || e.slice(p, p + a) === t)) {
                                    r.push(e.slice(c, p)), c = p + a;
                                    continue
                                }
                                if ("/" === u) {
                                    i = p;
                                    continue
                                }
                            }
                            "[" === u ? s++ : "]" === u && s--
                        }
                        const u = 0 === r.length ? e : e.substring(c),
                            l = u.startsWith("!");
                        return {
                            modifiers: r,
                            hasImportantModifier: l,
                            baseClassName: l ? u.substring(1) : u,
                            maybePostfixModifierPosition: i && i > c ? i - c : void 0
                        }
                    };
                    return r ? e => r({
                        className: e,
                        parseClassName: i
                    }) : i
                },
                g = e => {
                    if (e.length <= 1) return e;
                    const t = [];
                    let r = [];
                    return e.forEach((e => {
                        "[" === e[0] ? (t.push(...r.sort(), e), r = []) : r.push(e)
                    })), t.push(...r.sort()), t
                },
                v = /\s+/;

            function h() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = m(e)) && (n && (n += " "), n += t);
                return n
            }
            const m = e => {
                if ("string" === typeof e) return e;
                let t, r = "";
                for (let n = 0; n < e.length; n++) e[n] && (t = m(e[n])) && (r && (r += " "), r += t);
                return r
            };

            function b(e, ...t) {
                let r, o, a, i = function(c) {
                    const u = t.reduce(((e, t) => t(e)), e());
                    return r = (e => ({
                        cache: f(e.cacheSize),
                        parseClassName: d(e),
                        ...n(e)
                    }))(u), o = r.cache.get, a = r.cache.set, i = s, s(c)
                };

                function s(e) {
                    const t = o(e);
                    if (t) return t;
                    const n = ((e, t) => {
                        const {
                            parseClassName: r,
                            getClassGroupId: n,
                            getConflictingClassGroupIds: o
                        } = t, a = [], i = e.trim().split(v);
                        let s = "";
                        for (let c = i.length - 1; c >= 0; c -= 1) {
                            const e = i[c],
                                {
                                    modifiers: t,
                                    hasImportantModifier: u,
                                    baseClassName: l,
                                    maybePostfixModifierPosition: p
                                } = r(e);
                            let f = Boolean(p),
                                d = n(f ? l.substring(0, p) : l);
                            if (!d) {
                                if (!f) {
                                    s = e + (s.length > 0 ? " " + s : s);
                                    continue
                                }
                                if (d = n(l), !d) {
                                    s = e + (s.length > 0 ? " " + s : s);
                                    continue
                                }
                                f = !1
                            }
                            const v = g(t).join(":"),
                                h = u ? v + "!" : v,
                                m = h + d;
                            if (a.includes(m)) continue;
                            a.push(m);
                            const b = o(d, f);
                            for (let r = 0; r < b.length; ++r) {
                                const e = b[r];
                                a.push(h + e)
                            }
                            s = e + (s.length > 0 ? " " + s : s)
                        }
                        return s
                    })(e, r);
                    return a(e, n), n
                }
                return function() {
                    return i(h.apply(null, arguments))
                }
            }
            const y = e => {
                    const t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                _ = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                w = /^\d+\/\d+$/,
                x = new Set(["px", "full", "screen"]),
                E = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                T = e => P(e) || x.has(e) || w.test(e),
                B = e => W(e, "length", z),
                P = e => Boolean(e) && !Number.isNaN(Number(e)),
                C = e => W(e, "number", P),
                F = e => Boolean(e) && Number.isInteger(Number(e)),
                R = e => e.endsWith("%") && P(e.slice(0, -1)),
                N = e => _.test(e),
                D = e => E.test(e),
                I = new Set(["length", "size", "percentage"]),
                L = e => W(e, I, V),
                j = e => W(e, "position", V),
                M = new Set(["image", "url"]),
                H = e => W(e, M, K),
                U = e => W(e, "", q),
                G = () => !0,
                W = (e, t, r) => {
                    const n = _.exec(e);
                    return !!n && (n[1] ? "string" === typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
                },
                z = e => A.test(e) && !S.test(e),
                V = () => !1,
                q = e => k.test(e),
                K = e => O.test(e),
                $ = (Symbol.toStringTag, () => {
                    const e = y("colors"),
                        t = y("spacing"),
                        r = y("blur"),
                        n = y("brightness"),
                        o = y("borderColor"),
                        a = y("borderRadius"),
                        i = y("borderSpacing"),
                        s = y("borderWidth"),
                        c = y("contrast"),
                        u = y("grayscale"),
                        l = y("hueRotate"),
                        p = y("invert"),
                        f = y("gap"),
                        d = y("gradientColorStops"),
                        g = y("gradientColorStopPositions"),
                        v = y("inset"),
                        h = y("margin"),
                        m = y("opacity"),
                        b = y("padding"),
                        _ = y("saturate"),
                        w = y("scale"),
                        x = y("sepia"),
                        E = y("skew"),
                        A = y("space"),
                        S = y("translate"),
                        k = () => ["auto", N, t],
                        O = () => [N, t],
                        I = () => ["", T, B],
                        M = () => ["auto", P, N],
                        W = () => ["", "0", N],
                        z = () => [P, N];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [G],
                            spacing: [T, B],
                            blur: ["none", "", D, N],
                            brightness: z(),
                            borderColor: [e],
                            borderRadius: ["none", "", "full", D, N],
                            borderSpacing: O(),
                            borderWidth: I(),
                            contrast: z(),
                            grayscale: W(),
                            hueRotate: z(),
                            invert: W(),
                            gap: O(),
                            gradientColorStops: [e],
                            gradientColorStopPositions: [R, B],
                            inset: k(),
                            margin: k(),
                            opacity: z(),
                            padding: O(),
                            saturate: z(),
                            scale: z(),
                            sepia: W(),
                            skew: z(),
                            space: O(),
                            translate: O()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", N]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [D]
                            }],
                            "break-after": [{
                                "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                            }],
                            "break-before": [{
                                "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", N]
                            }],
                            overflow: [{
                                overflow: ["auto", "hidden", "clip", "visible", "scroll"]
                            }],
                            "overflow-x": [{
                                "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
                            }],
                            "overflow-y": [{
                                "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
                            }],
                            overscroll: [{
                                overscroll: ["auto", "contain", "none"]
                            }],
                            "overscroll-x": [{
                                "overscroll-x": ["auto", "contain", "none"]
                            }],
                            "overscroll-y": [{
                                "overscroll-y": ["auto", "contain", "none"]
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [v]
                            }],
                            "inset-x": [{
                                "inset-x": [v]
                            }],
                            "inset-y": [{
                                "inset-y": [v]
                            }],
                            start: [{
                                start: [v]
                            }],
                            end: [{
                                end: [v]
                            }],
                            top: [{
                                top: [v]
                            }],
                            right: [{
                                right: [v]
                            }],
                            bottom: [{
                                bottom: [v]
                            }],
                            left: [{
                                left: [v]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", F, N]
                            }],
                            basis: [{
                                basis: k()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", N]
                            }],
                            grow: [{
                                grow: W()
                            }],
                            shrink: [{
                                shrink: W()
                            }],
                            order: [{
                                order: ["first", "last", "none", F, N]
                            }],
                            "grid-cols": [{
                                "grid-cols": [G]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", F, N]
                                }, N]
                            }],
                            "col-start": [{
                                "col-start": M()
                            }],
                            "col-end": [{
                                "col-end": M()
                            }],
                            "grid-rows": [{
                                "grid-rows": [G]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [F, N]
                                }, N]
                            }],
                            "row-start": [{
                                "row-start": M()
                            }],
                            "row-end": [{
                                "row-end": M()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", N]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", N]
                            }],
                            gap: [{
                                gap: [f]
                            }],
                            "gap-x": [{
                                "gap-x": [f]
                            }],
                            "gap-y": [{
                                "gap-y": [f]
                            }],
                            "justify-content": [{
                                justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [b]
                            }],
                            px: [{
                                px: [b]
                            }],
                            py: [{
                                py: [b]
                            }],
                            ps: [{
                                ps: [b]
                            }],
                            pe: [{
                                pe: [b]
                            }],
                            pt: [{
                                pt: [b]
                            }],
                            pr: [{
                                pr: [b]
                            }],
                            pb: [{
                                pb: [b]
                            }],
                            pl: [{
                                pl: [b]
                            }],
                            m: [{
                                m: [h]
                            }],
                            mx: [{
                                mx: [h]
                            }],
                            my: [{
                                my: [h]
                            }],
                            ms: [{
                                ms: [h]
                            }],
                            me: [{
                                me: [h]
                            }],
                            mt: [{
                                mt: [h]
                            }],
                            mr: [{
                                mr: [h]
                            }],
                            mb: [{
                                mb: [h]
                            }],
                            ml: [{
                                ml: [h]
                            }],
                            "space-x": [{
                                "space-x": [A]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [A]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
                            }],
                            "min-w": [{
                                "min-w": [N, t, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [D]
                                }, D]
                            }],
                            h: [{
                                h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [N, t, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", D, B]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", C]
                            }],
                            "font-family": [{
                                font: [G]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", P, C]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", T, N]
                            }],
                            "list-image": [{
                                "list-image": ["none", N]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", N]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [e]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [m]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [e]
                            }],
                            "text-opacity": [{
                                "text-opacity": [m]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", T, B]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", T, N]
                            }],
                            "text-decoration-color": [{
                                decoration: [e]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: O()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", N]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [m]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", j]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", L]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, H]
                            }],
                            "bg-color": [{
                                bg: [e]
                            }],
                            "gradient-from-pos": [{
                                from: [g]
                            }],
                            "gradient-via-pos": [{
                                via: [g]
                            }],
                            "gradient-to-pos": [{
                                to: [g]
                            }],
                            "gradient-from": [{
                                from: [d]
                            }],
                            "gradient-via": [{
                                via: [d]
                            }],
                            "gradient-to": [{
                                to: [d]
                            }],
                            rounded: [{
                                rounded: [a]
                            }],
                            "rounded-s": [{
                                "rounded-s": [a]
                            }],
                            "rounded-e": [{
                                "rounded-e": [a]
                            }],
                            "rounded-t": [{
                                "rounded-t": [a]
                            }],
                            "rounded-r": [{
                                "rounded-r": [a]
                            }],
                            "rounded-b": [{
                                "rounded-b": [a]
                            }],
                            "rounded-l": [{
                                "rounded-l": [a]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [a]
                            }],
                            "rounded-se": [{
                                "rounded-se": [a]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [a]
                            }],
                            "rounded-es": [{
                                "rounded-es": [a]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [a]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [a]
                            }],
                            "rounded-br": [{
                                "rounded-br": [a]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [a]
                            }],
                            "border-w": [{
                                border: [s]
                            }],
                            "border-w-x": [{
                                "border-x": [s]
                            }],
                            "border-w-y": [{
                                "border-y": [s]
                            }],
                            "border-w-s": [{
                                "border-s": [s]
                            }],
                            "border-w-e": [{
                                "border-e": [s]
                            }],
                            "border-w-t": [{
                                "border-t": [s]
                            }],
                            "border-w-r": [{
                                "border-r": [s]
                            }],
                            "border-w-b": [{
                                "border-b": [s]
                            }],
                            "border-w-l": [{
                                "border-l": [s]
                            }],
                            "border-opacity": [{
                                "border-opacity": [m]
                            }],
                            "border-style": [{
                                border: ["solid", "dashed", "dotted", "double", "none", "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [s]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [s]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [m]
                            }],
                            "divide-style": [{
                                divide: ["solid", "dashed", "dotted", "double", "none"]
                            }],
                            "border-color": [{
                                border: [o]
                            }],
                            "border-color-x": [{
                                "border-x": [o]
                            }],
                            "border-color-y": [{
                                "border-y": [o]
                            }],
                            "border-color-t": [{
                                "border-t": [o]
                            }],
                            "border-color-r": [{
                                "border-r": [o]
                            }],
                            "border-color-b": [{
                                "border-b": [o]
                            }],
                            "border-color-l": [{
                                "border-l": [o]
                            }],
                            "divide-color": [{
                                divide: [o]
                            }],
                            "outline-style": [{
                                outline: ["", "solid", "dashed", "dotted", "double", "none"]
                            }],
                            "outline-offset": [{
                                "outline-offset": [T, N]
                            }],
                            "outline-w": [{
                                outline: [T, B]
                            }],
                            "outline-color": [{
                                outline: [e]
                            }],
                            "ring-w": [{
                                ring: I()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [e]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [m]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [T, B]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [e]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", D, U]
                            }],
                            "shadow-color": [{
                                shadow: [G]
                            }],
                            opacity: [{
                                opacity: [m]
                            }],
                            "mix-blend": [{
                                "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [r]
                            }],
                            brightness: [{
                                brightness: [n]
                            }],
                            contrast: [{
                                contrast: [c]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", D, N]
                            }],
                            grayscale: [{
                                grayscale: [u]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [l]
                            }],
                            invert: [{
                                invert: [p]
                            }],
                            saturate: [{
                                saturate: [_]
                            }],
                            sepia: [{
                                sepia: [x]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [r]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [n]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [c]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [u]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [l]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [p]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [m]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [_]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [x]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [i]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [i]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [i]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
                            }],
                            duration: [{
                                duration: z()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", N]
                            }],
                            delay: [{
                                delay: z()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", N]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [w]
                            }],
                            "scale-x": [{
                                "scale-x": [w]
                            }],
                            "scale-y": [{
                                "scale-y": [w]
                            }],
                            rotate: [{
                                rotate: [F, N]
                            }],
                            "translate-x": [{
                                "translate-x": [S]
                            }],
                            "translate-y": [{
                                "translate-y": [S]
                            }],
                            "skew-x": [{
                                "skew-x": [E]
                            }],
                            "skew-y": [{
                                "skew-y": [E]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
                            }],
                            accent: [{
                                accent: ["auto", e]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
                            }],
                            "caret-color": [{
                                caret: [e]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": O()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": O()
                            }],
                            "scroll-my": [{
                                "scroll-my": O()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": O()
                            }],
                            "scroll-me": [{
                                "scroll-me": O()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": O()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": O()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": O()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": O()
                            }],
                            "scroll-p": [{
                                "scroll-p": O()
                            }],
                            "scroll-px": [{
                                "scroll-px": O()
                            }],
                            "scroll-py": [{
                                "scroll-py": O()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": O()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": O()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": O()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": O()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": O()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": O()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", N]
                            }],
                            fill: [{
                                fill: [e, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [T, B, C]
                            }],
                            stroke: [{
                                stroke: [e, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                }),
                Q = b($)
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [593], (() => (t("Mp1J"), t("nlrA"))));
        e.O()
    }
]);
//# debugId=a229191e-11a4-5574-85c1-ca49addc2027