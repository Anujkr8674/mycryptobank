"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5001cdc6-aa6a-5527-9f08-8c400f35cd42")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [9567], {
        BMJD: (t, r, e) => {
            e.d(r, {
                Tc: () => s,
                XJ: () => i,
                _f: () => o,
                o4: () => p
            });
            var n = e("sViW"),
                a = e("Pz56"),
                c = e.n(a),
                u = e("VA12"),
                s = (function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/get-anti-phishing-code", {});
                                case 2:
                                    return r = t.sent.data, t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e, n, a;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/get-user-login-log", r);
                                case 2:
                                    return e = t.sent, n = e.data, a = e.total, t.abrupt("return", {
                                        data: n,
                                        total: a
                                    });
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r, e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/base-detail", {});
                                case 2:
                                    return r = t.sent, e = r.data, t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()),
                o = (function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, u.get)("/bapi/accounts/v1/private/account/get-user-base-info");
                                case 4:
                                    (r = t.sent).success && r.data && (r.data.isBindEmail = r.data.bindEmail), t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(1), r = {
                                        success: !1
                                    };
                                case 11:
                                    return t.abrupt("return", r);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 8]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, u.get)("/bapi/accounts/v1/private/account/get-user-extra-info");
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r, e, n;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, u.post)("/bapi/accounts/v2/private/certificate/onlyAccount/baseDetail/kycStatus");
                                case 4:
                                    (r = t.sent).success && r.data && (e = r.data.certificateStatus, n = null === e ? "-1" : String(e), r.data.idPhoto = n), t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(1), r = {
                                        success: !1
                                    };
                                case 11:
                                    return t.abrupt("return", r);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 8]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r, e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.get)("/bapi/futures/v1/private/future/web3/user-detail", {});
                                case 2:
                                    return r = t.sent, e = r.data, t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e, n;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = r.useBnbFee, t.next = 3, (0, u.post)("/bapi/accounts/v1/private/account/user/set-commission-status", {
                                        useBnbFee: e
                                    });
                                case 3:
                                    return n = t.sent, t.abrupt("return", n);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/open-withdraw-white-status", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/close-withdraw-white-status", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/update-password", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v2/private/account/user/updatePassword", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.get)("/bapi/accounts/v1/private/account/user/check/withdraw-face");
                                case 2:
                                    return r = t.sent, t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()),
                p = (function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/set-anti-phishing-code", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v2/private/account/user/set-anti-phishing-code", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v3/private/account/user/set-anti-phishing-code", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user-login-log/query", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user-operation-log/query", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/user/forbidden-by-oneself", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, u.post)("/bapi/accounts/v1/private/account/user/signLVTRiskAgreement", r);
                                case 4:
                                    e = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), e = {
                                        success: !1
                                    };
                                case 10:
                                    return t.abrupt("return", e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", (0, u.get)("/bapi/accounts/v1/public/account/country/promote-and-term/show", {
                                        usePrefetchCache: !0
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", (0, u.get)("/bapi/composite/v1/public/growth/compliance/country/email/show"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, u.post)("/bapi/composite/v1/private/account/user/enableFastWithdraw", r);
                                case 3:
                                    return e = t.sent, t.abrupt("return", e);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1,
                                        message: t.t0
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, u.post)("/bapi/pay/v1/private/binance-pay/account/get-self-status", r);
                                case 3:
                                    return e = t.sent, t.abrupt("return", e);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1,
                                        message: t.t0
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })));
                    return function(r) {
                        return t.apply(this, arguments)
                    }
                }()),
                i = (function() {
                    var t = (0, n.A)(c().mark((function t(r) {
                        var e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.post)("/bapi/accounts/v1/private/account/compliance/userComplianceCheck", r);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, u.post)("/bapi/composite/v1/private/growth-paas/user/agent", {}, {
                                        enableErrorMsgIntercept: !1
                                    });
                                case 3:
                                    return r = t.sent, t.abrupt("return", r);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1,
                                        message: t.t0,
                                        code: "",
                                        data: {}
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r, e, n = arguments;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e = n.length > 1 && void 0 !== n[1] ? n[1] : {}, t.abrupt("return", (0, u.post)("/bapi/accounts/v3/protect/authcenter/oauth/thirdLogin/verifyMfa", r, e));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }(), function() {
                    var t = (0, n.A)(c().mark((function t() {
                        var r, e;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = {
                                        withdrawStatus: !0
                                    }, t.prev = 1, t.next = 4, (0, u.get)("/bapi/accounts/v1/private/account/user/get-withdraw-status");
                                case 4:
                                    return e = t.sent, t.abrupt("return", e.success ? e.data : r);
                                case 8:
                                    return t.prev = 8, t.t0 = t.catch(1), t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 8]
                        ])
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }())
        }
    }
]);
//# debugId=5001cdc6-aa6a-5527-9f08-8c400f35cd42