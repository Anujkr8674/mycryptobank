! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ef5c7923-d13d-52e2-a289-98945e448c91")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [5363], {
        LQoT: (e, t, n) => {
            "use strict";
            n.d(t, {
                $r: () => f,
                BA: () => l,
                GG: () => p,
                GV: () => u,
                UP: () => d,
                Uq: () => v,
                V3: () => h,
                _e: () => b,
                c_: () => x,
                h4: () => E,
                hW: () => c,
                kK: () => k,
                lA: () => g,
                n0: () => w,
                q5: () => C,
                qO: () => y,
                yV: () => A,
                zP: () => m
            });
            var r, a = n("sViW"),
                o = n("Pz56"),
                i = n.n(o),
                s = n("VA12"),
                c = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/list", t);
                                case 2:
                                    return n = e.sent, r = n.data, e.abrupt("return", r);
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
                l = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/list", t);
                                case 2:
                                    return n = e.sent, r = n.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function(e) {
                e.DEFAULT_UNVERIFIED = "1", e.UNVERIFIED = "2", e.PENDING_VERIFY = "3", e.DECLARED = "4", e.VERIFIED = "5"
            }(r || (r = {}));
            var u = function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var t, n, r, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.next = 3, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/whitelist/list", t);
                                case 3:
                                    return n = e.sent, r = n.data, e.abrupt("return", r);
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
                f = (function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/whitelist/add", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return delete t.mobileVerifyCode, delete t.googleVerifyCode, delete t.emailVerifyCode, delete t.yubikeyVerifyCode, e.next = 6, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/whitelist/addV4", t);
                                case 6:
                                    return n = e.sent, e.abrupt("return", n);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                d = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/whitelist/addV5", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = (function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/apply", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t, n) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v3/private/capital/withdraw/apply", t, n);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                m = function() {
                    var e = (0, a.A)(i().mark((function e(t, n) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v4/private/capital/withdraw/apply", t, n);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = (function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/cancel", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/reSendMail", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/withdrawMessage");
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
                }()),
                h = function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.get)("/bapi/capital/v1/private/capital/withdraw/get-status");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
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
                g = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/download", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v1/private/capital/withdraw/custom-validate", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = {
                    NEED_FILL_COMPLIANCE_INFO: "200003995"
                },
                w = (function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v3/private/capital/withdraw/withdrawForbiddenTimePreCheck", t, {
                                        enableErrorMsgIntercept: !1
                                    });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v3/private/capital/withdraw/lockedData", {
                                        coin: t
                                    });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                x = function(e) {
                    return (0, s.post)("/bapi/capital/v4/private/capital/withdraw/getWithdrawDetail", e)
                },
                E = (function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, s.get)("/bapi/capital/v3/private/capital/withdraw/withdrawExist");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, s.get)("/bapi/capital/v1/public/capital/mbx/state");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                A = function() {
                    var e = (0, a.A)(i().mark((function e(t, n) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/capital/v3/private/capital/withdraw/getExempt2FaResult", t, n);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.get)("/bapi/apex/v1/private/apex/market/recent-withdraw-address?coin=".concat(t));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, a.A)(i().mark((function e(t, n) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.post)("/bapi/composite/v1/private/capital/withdraw/invoice-decode", {
                                        invoice: t,
                                        type: n || 0
                                    });
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        NkzM: (e, t, n) => {
            "use strict";
            n.d(t, {
                b3: () => c,
                kh: () => l,
                yO: () => s
            });
            var r = n("sViW"),
                a = n("Pz56"),
                o = n.n(a),
                i = n("VA12"),
                s = (function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n, r, a, s, c;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/charge-withdraw-histroy", t);
                                case 2:
                                    return n = e.sent, r = n.data, a = r.data, s = r.total, c = r.direction, e.abrupt("return", {
                                        data: a,
                                        total: s,
                                        direction: c
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-methods", t);
                                case 2:
                                    return n = e.sent, r = n.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/payment-calculate", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-account-info", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/get-country-banks", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/apply-charge", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/charge-notify", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v2/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/re-send-withdraw-mail", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/remove-bank", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/bind-confirm", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/submit-offline-charge", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/get-share-kyc-status", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/share-kyc", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, i.post)("/bapi/fiat/v1/private/fiatpayment/etana/check", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, i.post)("/bapi/fiat/v1/private/fiatpayment/offline-charge-bank-list", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-charge-reference-code", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-withdrawal-bank-list", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/get-user-kyclimit-and-available", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/apply-nationality-and-estimated-value", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/cards/get-cards", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/cards/unbind-card", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/account/async-check-account-holder-name", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/private/fiatpayment/account/get-async-check-account-holder-name-result", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/sessionId");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                c = function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/notifyDownload", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
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
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/fiat/v1/friendly/fiatpayment/transactions/get-fiat-currencies", t);
                                case 2:
                                    return n = e.sent.data, e.abrupt("return", {
                                        result: (null === n || void 0 === n ? void 0 : n.fiatCurrencies) || []
                                    });
                                case 4:
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
        kTuL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n("tEf9"),
                a = n("DTvD");

            function o(e) {
                var t = this,
                    n = (0, a.useRef)(e);
                n.current = e;
                var o = (0, a.useCallback)((function() {
                    for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++) a[o] = arguments[o];
                    return ("function" === typeof n.current ? n.current : function() {}).apply(t, (0, r.A)(a))
                }), []);
                return "function" === typeof e ? o : e
            }
        },
        Yipm: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vg: () => a
            });
            var r = n("x7JS"),
                a = function(e) {
                    return (0, r.A)("pageView", e)
                }
        },
        rLOQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("6aZm"),
                s = n("LCuF"),
                c = (0, i.UF)("uikit-core", "Image"),
                l = (0, a.forwardRef)((function(e, t) {
                    return c(), o().createElement(s.A, (0, r.A)({
                        ref: t,
                        as: "img"
                    }, e, {
                        __css: {
                            maxWidth: "100%",
                            height: "auto"
                        }
                    }))
                }));
            l.displayName = "Image";
            const u = l
        },
        HeEp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("6aZm"),
                s = n("LCuF"),
                c = (0, i.UF)("uikit-core", "Mask"),
                l = (0, a.forwardRef)((function(e, t) {
                    return c(), e.visible ? o().createElement(s.A, (0, r.A)({
                        ref: t,
                        variant: "mask"
                    }, e, {
                        __css: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }
                    })) : null
                }));
            l.displayName = "Mask";
            const u = l
        },
        cKr8: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => b
            });
            var r = n("M5j3"),
                a = n("gZfF"),
                o = n("N/Z2"),
                i = n("DTvD"),
                s = n.n(i),
                c = n("g80r"),
                l = n("6aZm"),
                u = n("LCuF"),
                f = (0, l.UF)("uikit-core", "VisuallyHidden");
            const d = function(e) {
                var t = e.children;
                return f(""), s().createElement(u.A, {
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

            function p() {
                var e = (0, o.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var m = (0, l.UF)("uikit-core", "Spinner"),
                v = (0, i.forwardRef)((function(e, t) {
                    e.variant;
                    var n = e.itemsColor,
                        o = void 0 === n ? "primary" : n,
                        i = e.label,
                        c = (0, a.A)(e, ["variant", "itemsColor", "label"]);
                    m("");
                    var l = Array(4).fill(1).map((function(e, t) {
                        return "-".concat(t / 10, "s")
                    })).reverse();
                    return s().createElement(u.A, (0, r.A)({
                        ref: t
                    }, c, {
                        __css: {
                            display: "flex",
                            width: "30px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }), i && s().createElement(d, null, i), l.map((function(e, t) {
                        return s().createElement(g, {
                            key: t,
                            delay: e,
                            color: o
                        })
                    })))
                })),
                h = (0, c.i7)(p()),
                g = function(e) {
                    var t = e.delay,
                        n = e.color;
                    return s().createElement(u.A, {
                        __css: {
                            backgroundColor: n,
                            height: "100%",
                            width: "3px",
                            animation: "".concat(h, " 1.2s infinite ease-in-out"),
                            animationDelay: t
                        }
                    })
                };
            v.displayName = "Spinner";
            const b = v
        },
        qBCg: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z",
                    fill: "currentColor"
                }))
            }
        },
        "7Yse": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        "rR/7": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        "+Pvs": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        eaa7: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 3h11v13h-3V6H9V3zM4 8v13h11V8.02L4 8z",
                    fill: "currentColor"
                }))
            }
        },
        N87B: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z",
                    fill: "currentColor"
                }))
            }
        },
        "8SaB": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const s = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm12.59 3.18L13.41 12l3.18-3.18-1.41-1.41L12 10.59 8.82 7.41 7.41 8.82 10.59 12l-3.18 3.18 1.41 1.41L12 13.41l3.18 3.18 1.41-1.41z",
                    fill: "currentColor"
                }))
            }
        },
        QOOp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => y
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("gZfF"),
                i = n("DTvD"),
                s = n.n(i),
                c = n("C6y2"),
                l = n("LCuF"),
                u = n("5XPI"),
                f = n("+Pvs"),
                d = n("TyPU"),
                p = n("ypKN"),
                m = n("/Lz3"),
                v = function(e) {
                    var t = e.isShow,
                        n = e.variant,
                        r = e.getValid,
                        o = e.customIcon,
                        i = {
                            info: f.A,
                            error: d.A,
                            warning: f.A,
                            success: p.A
                        }[n],
                        l = o && r(o) ? s().cloneElement(o, (0, a.A)({
                            size: 20
                        }, o.props), []) : s().createElement(i, {
                            size: 20
                        });
                    return t ? s().createElement(c.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            mr: "xs",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0
                        }
                    }, l) : null
                },
                h = function(e) {
                    var t = e.isShow,
                        n = e.onClose;
                    return t ? s().createElement(c.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "t.disabled",
                            marginLeft: "auto"
                        }
                    }, s().createElement(m.A, {
                        size: 18,
                        onClick: n,
                        cursor: "pointer"
                    })) : null
                },
                g = (0, i.forwardRef)((function(e, t) {
                    var n = e.children,
                        u = e.icon,
                        f = e.variant,
                        d = void 0 === f ? "warning" : f,
                        p = e.closable,
                        m = void 0 !== p && p,
                        g = e.showIcon,
                        b = void 0 === g || g,
                        y = e.onClose,
                        w = e.title,
                        x = e.insideCenter,
                        E = void 0 !== x && x,
                        A = e.__css,
                        k = (0, o.A)(e, ["children", "icon", "variant", "closable", "showIcon", "onClose", "title", "insideCenter", "__css"]);
                    return s().createElement(c.A, (0, r.A)({
                        tx: "alertV2",
                        variant: d,
                        alignItems: "flex-start",
                        ref: t,
                        width: "100%",
                        __css: (0, a.A)({
                            p: "ls"
                        }, A)
                    }, k), s().createElement(c.A, {
                        justifyContent: E ? "center" : "",
                        flex: "1",
                        alignItems: "flex-start"
                    }, s().createElement(v, {
                        isShow: b,
                        variant: d,
                        getValid: i.isValidElement,
                        customIcon: u
                    }), s().createElement(l.A, {
                        __css: {
                            wordBreak: "break-word",
                            flexShrink: 1,
                            height: "auto",
                            lineHeight: "24px",
                            width: E ? "auto" : "100%",
                            color: "alertV2.".concat(d, "FontColor")
                        }
                    }, w && s().createElement(l.A, {
                        as: "p",
                        __css: {
                            fontWeight: "medium"
                        }
                    }, w), n)), s().createElement(h, {
                        isShow: m,
                        onClose: y
                    }))
                })),
                b = (0, i.forwardRef)((function(e, t) {
                    var n = e.enablePortal,
                        i = e.container,
                        c = e.topOfPage,
                        l = e.__css,
                        f = (0, o.A)(e, ["enablePortal", "container", "topOfPage", "__css"]);
                    return c || n || i ? s().createElement(u.Ay, {
                        container: i
                    }, s().createElement(g, (0, r.A)({
                        __css: c ? (0, a.A)({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: "alert",
                            borderRadius: 0
                        }, l) : {}
                    }, f, {
                        ref: t
                    }))) : s().createElement(g, (0, r.A)({}, f))
                }));
            b.displayName = "AlertV2";
            const y = b
        },
        UhfZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("gZfF"),
                i = n("DTvD"),
                s = n.n(i),
                c = n("5XPI"),
                l = n("C6y2"),
                u = n("HeEp"),
                f = n("LCuF"),
                d = n("yhUQ"),
                p = n("/Lz3"),
                m = s().useLayoutEffect,
                v = (0, i.forwardRef)((function(e, t) {
                    var n = e.open,
                        v = e.title,
                        h = e.titleSx,
                        g = e.containerSx,
                        b = e.contentSx,
                        y = e.mask,
                        w = void 0 === y || y,
                        x = e.maskSx,
                        E = e.showMaskOnMobile,
                        A = void 0 !== E && E,
                        k = e.onMaskClick,
                        C = e.onCloseIconClick,
                        _ = e.showCloseIcon,
                        N = void 0 === _ || _,
                        S = e.children,
                        M = e.onPressEnter,
                        I = void 0 === M ? function() {} : M,
                        R = e.onPressEsc,
                        O = void 0 === R ? function() {} : R,
                        T = e.specialCss,
                        L = void 0 === T ? {} : T,
                        B = e.closeSx,
                        D = void 0 === B ? {} : B,
                        P = e.closeIconProps,
                        F = void 0 === P ? {} : P,
                        z = e.showTitleBottomLine,
                        V = void 0 === z || z,
                        U = e.closeIconSize,
                        j = void 0 === U ? 24 : U,
                        W = e.dialogClassName,
                        q = void 0 === W ? "" : W,
                        H = (0, o.A)(e, ["open", "title", "titleSx", "containerSx", "contentSx", "mask", "maskSx", "showMaskOnMobile", "onMaskClick", "onCloseIconClick", "showCloseIcon", "children", "onPressEnter", "onPressEsc", "specialCss", "closeSx", "closeIconProps", "showTitleBottomLine", "closeIconSize", "dialogClassName"]),
                        $ = function(e) {
                            13 === e.keyCode ? I(e) : 27 === e.keyCode && O(e)
                        };
                    if ((0, i.useEffect)((function() {
                            return n ? document.addEventListener("keydown", $) : document.removeEventListener("keydown", $),
                                function() {
                                    document.removeEventListener("keydown", $)
                                }
                        }), [n]), m((function() {
                            return w && n ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                                function() {
                                    document.body.style.removeProperty("overflow")
                                }
                        }), [w, n]), !n || "undefined" === typeof document || !document.body) return null;
                    var K = !1;
                    window.matchMedia("(max-width: 766px)").matches && (K = !0);
                    var G = (0, a.A)({
                            zIndex: "unset"
                        }, x),
                        Y = w && (A || !K);
                    return s().createElement(c.Ay, null, s().createElement(l.A, {
                        __css: (0, a.A)({
                            zIndex: "modal",
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, L),
                        sx: g,
                        className: q
                    }, Y && s().createElement(u.A, {
                        visible: !0,
                        onClick: function(e) {
                            return k && k(e)
                        },
                        sx: G
                    }), s().createElement(f.A, (0, r.A)({
                        ref: t,
                        __css: {
                            position: "relative",
                            borderRadius: ["0px", "large", "large"],
                            boxShadow: "dialog",
                            backgroundColor: "popupBg",
                            width: ["100%", "auto"],
                            height: ["100%", "auto"],
                            color: "t.primary"
                        }
                    }, H), N && s().createElement(f.A, (0, r.A)({
                        __css: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: "unset",
                            pt: "20px",
                            pr: "md",
                            color: "t.disabled",
                            cursor: "pointer",
                            ":hover": {
                                color: "t.third"
                            }
                        }
                    }, F, {
                        sx: D,
                        onClick: function(e) {
                            return C && C(e)
                        }
                    }), s().createElement(p.A, {
                        size: j,
                        style: {
                            width: "".concat(j, "px"),
                            height: "".concat(j, "px")
                        }
                    })), v && s().createElement(d.A, {
                        variant: "headline6",
                        className: "modal-title",
                        __css: {
                            pl: "md",
                            pr: "lg",
                            pt: "20px",
                            pb: "19px",
                            borderBottom: "1px solid",
                            borderBottomColor: "line",
                            border: V ? "" : "none",
                            textAlign: "left"
                        },
                        sx: h
                    }, v), s().createElement(f.A, {
                        className: "style-dialog-body",
                        __css: {
                            p: "md",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        sx: b
                    }, S))))
                }));
            v.displayName = "StyledDialog";
            const h = v
        },
        "aeV/": (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => l
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("gZfF"),
                i = n("DTvD"),
                s = n.n(i),
                c = n("LCuF"),
                l = (0, i.forwardRef)((function(e, t) {
                    var n = e.children,
                        i = e.sx,
                        l = void 0 === i ? {} : i,
                        u = (0, o.A)(e, ["children", "sx"]);
                    return s().createElement(c.A, (0, r.A)({}, u, {
                        ref: t,
                        __css: (0, a.A)({
                            position: ["fixed", "static"],
                            zIndex: [1, "auto"],
                            left: ["0px", "unset"],
                            bottom: ["0px", "unset"],
                            pt: "md",
                            pb: ["md", "0px"],
                            px: ["md", "0px"],
                            width: ["100%", "unset"],
                            boxShadow: ["0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)", "none"],
                            bg: "popupBg"
                        }, l)
                    }), n)
                }))
        },
        V1ty: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("QUKP"),
                i = n("gZfF"),
                s = n("DTvD"),
                c = n("LCuF"),
                l = n("O94r"),
                u = n.n(l),
                f = n("fUhM"),
                d = {
                    "&,&::before": {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        zIndex: -1
                    },
                    "&::before": {
                        content: '""',
                        display: "block"
                    }
                },
                p = {
                    boxSizing: "content-box",
                    position: "absolute",
                    width: "max-content",
                    wordBreak: "normal",
                    zIndex: "tooltip",
                    maxWidth: "296px",
                    '&[data-popper-placement^="top"] > [data-popper-arrow]': {
                        bottom: "-3px"
                    },
                    "& > .gap-fill": {
                        position: "absolute",
                        display: "block"
                    },
                    '&[data-popper-placement^="top"] > [data-popper-arrow]::before': {
                        transform: "rotate(45deg)"
                    },
                    '&[data-popper-placement^="top"] > .gap-fill': {
                        bottom: "-".concat(f.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(f.rQ, "px")
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]': {
                        top: "-3px"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]::before': {
                        transform: "rotate(225deg)"
                    },
                    '&[data-popper-placement^="bottom"] > .gap-fill': {
                        top: "-".concat(f.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(f.rQ, "px")
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]': {
                        right: "-3px"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]::before': {
                        transform: "rotate(-45deg)"
                    },
                    '&[data-popper-placement^="left"] > .gap-fill': {
                        top: "0",
                        right: "-".concat(f.rQ, "px"),
                        width: "".concat(f.rQ, "px"),
                        height: "100%"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]': {
                        left: "-3px"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]::before': {
                        transform: "rotate(135deg)"
                    },
                    '&[data-popper-placement^="right"] > .gap-fill': {
                        top: "0",
                        left: "-".concat(f.rQ, "px"),
                        width: "".concat(f.rQ, "px"),
                        height: "100%"
                    }
                };
            const m = s.forwardRef((function(e, t) {
                var n = e.arrow,
                    l = e.arrowRef,
                    f = e.arrowStyle,
                    m = e.children,
                    v = e.open,
                    h = e.className,
                    g = e.bg,
                    b = e.sx,
                    y = (0, i.A)(e, ["arrow", "arrowRef", "arrowStyle", "children", "open", "className", "bg", "sx"]);
                return v ? s.createElement(c.A, (0, r.A)({
                    ref: t,
                    variant: "tooltip",
                    bg: g,
                    className: u()(h, "bn-tooltip-box")
                }, y, {
                    __css: (0, o.A)((0, a.A)({}, p), {
                        ".bn-tooltip-arrow[data-popper-arrow]::before": {
                            backgroundColor: g
                        }
                    }),
                    sx: b
                }), m, n && s.createElement(c.A, {
                    className: "bn-tooltip-arrow",
                    ref: l,
                    "data-popper-arrow": !0,
                    __css: d,
                    style: f
                }), s.createElement("i", {
                    className: "gap-fill"
                })) : null
            }))
        },
        "7DEf": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => b
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("gZfF"),
                i = n("aVXY"),
                s = n("DTvD"),
                c = n("GKJf"),
                l = n("LCuF"),
                u = n("5XPI"),
                f = n("yys2"),
                d = n("uxFI"),
                p = n("bg8v"),
                m = n("V1ty"),
                v = n("fUhM"),
                h = n("Uhy9"),
                g = function() {
                    return document.body.offsetHeight
                };
            const b = s.forwardRef((function(e, t) {
                var n = e.arrow,
                    b = void 0 !== n && n,
                    y = e.boundary,
                    w = e.container,
                    x = e.tip,
                    E = e.delay,
                    A = void 0 === E ? 0 : E,
                    k = e.pos,
                    C = e.placement,
                    _ = void 0 === C ? k || "top" : C,
                    N = e.children,
                    S = e.open,
                    M = e.trigger,
                    I = void 0 === M ? "hover" : M,
                    R = e.onClick,
                    O = e.enablePortal,
                    T = void 0 !== O && O,
                    L = e.bg,
                    B = e.scroll,
                    D = e.resize,
                    P = e.boxOffset,
                    F = void 0 === P ? 0 : P,
                    z = e.arrowPadding,
                    V = void 0 === z ? 0 : z,
                    U = e.fallbackPlacements,
                    j = e.onlyShowOnHover,
                    W = void 0 === j || j,
                    q = e.clickOutsideClose,
                    H = void 0 !== q && q,
                    $ = e.onClickOutside,
                    K = e.tooltipBoxProps,
                    G = (0, o.A)(e, ["arrow", "boundary", "container", "tip", "delay", "pos", "placement", "children", "open", "trigger", "onClick", "enablePortal", "bg", "scroll", "resize", "boxOffset", "arrowPadding", "fallbackPlacements", "onlyShowOnHover", "clickOutsideClose", "onClickOutside", "tooltipBoxProps"]),
                    Y = "rtl" === (0, f.A)() ? v.kL[_] : _,
                    Z = s.useRef(null != S).current,
                    Q = s.useRef(null),
                    X = (0, i.A)(s.useState(null), 2),
                    J = X[0],
                    ee = X[1],
                    te = (0, i.A)(s.useState(null), 2),
                    ne = te[0],
                    re = te[1],
                    ae = (0, i.A)(s.useState(null), 2),
                    oe = ae[0],
                    ie = ae[1],
                    se = s.useRef(0),
                    ce = s.useRef(),
                    le = (0, d.E)(J, ne, {
                        placement: Y,
                        modifiers: [{
                            name: "eventListeners",
                            options: {
                                scroll: B,
                                resize: D
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: oe,
                                padding: V
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [F || 0, v.rQ]
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !1,
                                gpuAcceleration: !1
                            }
                        }, {
                            name: "flip",
                            options: {
                                boundary: y,
                                fallbackPlacements: U
                            }
                        }]
                    }),
                    ue = le.state,
                    fe = le.styles,
                    de = le.attributes,
                    pe = le.update,
                    me = s.useMemo((function() {
                        return (0, v.yP)(null === ue || void 0 === ue ? void 0 : ue.placement)
                    }), [null === ue || void 0 === ue ? void 0 : ue.placement]),
                    ve = (0, i.A)(s.useState(S), 2),
                    he = ve[0],
                    ge = ve[1];
                Z && (I = void 0, S !== he && ge(S)), s.useEffect((function() {
                    return function() {
                        ce.current && window.clearTimeout(ce.current), ce.current = 0
                    }
                }), [he]), (0, h.W)(Q, (function(e) {
                    H && ge(!1), $ && $(e)
                }), !!$ || !!H);
                var be = (0, c.A)(ee, t),
                    ye = "click" === I ? function(e) {
                        ce.current && window.clearTimeout(ce.current), se.current = 0, ce.current = 0, ge(!he), pe && pe(), R && R(e)
                    } : R,
                    we = "hover" === I ? function(e) {
                        !he && window.performance.now() - se.current > 500 && (ce.current = A ? ce.current || window.setTimeout((function() {
                            return ge(!0)
                        }), A) : (ge(!0), 0), pe && pe(), se.current = window.performance.now()), G.onMouseMove && G.onMouseMove(e)
                    } : G.onMouseMove,
                    xe = "hover" === I ? function(e) {
                        ce.current && window.clearTimeout(ce.current), se.current = 0, ce.current = 0, ge(!1), pe && pe(), G.onMouseLeave && G.onMouseLeave(e)
                    } : G.onMouseLeave,
                    Ee = W ? {
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEnter: g
                    } : {};
                return s.createElement(l.A, (0, r.A)({
                    ref: be
                }, G, {
                    __css: {
                        display: "inline-block",
                        position: "relative"
                    },
                    onClick: ye,
                    onMouseMove: we,
                    onMouseLeave: xe
                }), s.createElement(p.Ay, (0, r.A)({ in: he,
                    timeout: v.p0
                }, Ee), (function(e) {
                    return w || T ? s.createElement(u.Ay, {
                        container: w
                    }, s.createElement(m.A, (0, r.A)({
                        open: !0,
                        arrow: b,
                        arrowStyle: fe.arrow,
                        style: (0, a.A)({}, fe.popper, v.lv, me[e]),
                        bg: L,
                        arrowRef: ie,
                        ref: re
                    }, de.popper, K), s.createElement(l.A, {
                        ref: Q
                    }, x))) : s.createElement(m.A, (0, r.A)({
                        open: !0,
                        arrow: b,
                        arrowStyle: fe.arrow,
                        style: (0, a.A)({}, fe.popper, v.lv, me[e]),
                        bg: L,
                        arrowRef: ie,
                        ref: re
                    }, de.popper, K), s.createElement(l.A, {
                        ref: Q
                    }, x))
                })), N)
            }))
        },
        fUhM: (e, t, n) => {
            "use strict";
            n.d(t, {
                kL: () => s,
                lv: () => a,
                p0: () => r,
                rQ: () => c,
                yP: () => i
            });
            var r = 120,
                a = {
                    transition: "opacity ".concat(r, "ms ease-in-out, transform ").concat(r, "ms ease-in-out"),
                    opacity: .25,
                    transform: "translate3d(0, 0, 0)"
                },
                o = {
                    bottom: "translate3d(0, 6px, 0)",
                    left: "translate3d(-6px, 0, 0)",
                    right: "translate3d(6px, 0, 0)",
                    top: "translate3d(0, -6px, 0)"
                };
            var i = function(e) {
                    return e = function(e) {
                        return e.split("-")[0]
                    }(e || "top"), {
                        entering: {
                            opacity: .25,
                            transform: "translate3d(0, 0, 0)"
                        },
                        entered: {
                            opacity: 1,
                            transform: "translate3d(0, 0, 0)"
                        },
                        exiting: {
                            opacity: .25,
                            transform: o[e]
                        },
                        exited: {
                            visibility: "hidden",
                            opacity: 0,
                            transform: o[e]
                        }
                    }
                },
                s = {
                    "bottom-end": "bottom-start",
                    "bottom-start": "bottom-end",
                    "left-end": "right-end",
                    "left-start": "right-start",
                    left: "right",
                    "right-end": "left-end",
                    "right-start": "left-start",
                    right: "left",
                    "top-end": "top-start",
                    "top-start": "top-end"
                },
                c = 8
        },
        Uhy9: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => o
            });
            var r = n("DTvD"),
                a = n("kTuL"),
                o = function(e, t, n) {
                    var o = (0, a.Z)((function(n) {
                        e && e.current && !e.current.contains(n.target) && t(n)
                    }));
                    (0, r.useEffect)((function() {
                        return n ? (document.addEventListener("mousedown", o), document.addEventListener("touchstart", o), function() {
                            document.removeEventListener("mousedown", o), document.removeEventListener("touchstart", o)
                        }) : function() {}
                    }), [n, o])
                }
        },
        sitK: (e, t, n) => {
            "use strict";
            n.d(t, {
                uD: () => s,
                Xc: () => v,
                eF: () => H
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("HS2I");
            const s = function(e, t) {
                return function(n) {
                    var s = !!(0, (0, i.useBusinessKeys)().validateBusinessKey)([t]);
                    return (0, a.useMemo)((function() {
                        if (s) return o().createElement(e, (0, r.A)({}, n));
                        var t, a;
                        !1 === s && (null === (t = n) || void 0 === t || null === (a = t.fallback) || void 0 === a || a.call(t));
                        return null
                    }), [s, t])
                }
            };
            var c = n("888e"),
                l = n("2PCm"),
                u = n("VKAp"),
                f = n("m5Gy"),
                d = n("eeEA"),
                p = {
                    hasError: !1,
                    error: null,
                    info: null
                },
                m = function(e) {
                    (0, l.A)(n, e);
                    var t = (0, u.A)(n);

                    function n() {
                        var e;
                        return (0, c.A)(this, n), (e = t.apply(this, arguments)).state = p, e.resetErrorBoundary = function() {
                            var t = e.state,
                                n = t.error,
                                r = t.info,
                                a = e.props.onReset;
                            a && a(n, null === r || void 0 === r ? void 0 : r.componentStack), e.setState(p)
                        }, e
                    }
                    var r = n.prototype;
                    return r.componentDidCatch = function(e, t) {
                        (0, f.N)("0100000", e, t), this.setState({
                            error: e,
                            info: t,
                            hasError: !0
                        })
                    }, r.componentDidMount = function() {
                        var e = this.props.onComponentMounting;
                        e && e()
                    }, r.componentWillUnmount = function() {
                        var e = this.state,
                            t = e.error,
                            n = e.info,
                            r = this.props.onUnmount;
                        r && r(t, null === n || void 0 === n ? void 0 : n.componentStack)
                    }, r.render = function() {
                        var e = this.state,
                            t = e.error,
                            n = e.info,
                            r = e.hasError,
                            a = this.props,
                            i = a.fallbackRender,
                            s = a.fallback;
                        if (r) {
                            var c = {
                                componentStack: null === n || void 0 === n ? void 0 : n.componentStack,
                                error: t,
                                resetErrorBoundary: this.resetErrorBoundary
                            };
                            return o().isValidElement(s) ? s : "function" === typeof i ? i(c) : o().createElement(d.Ay, null, "".concat(this.props.name || "Something", " went wrong."))
                        }
                        return this.props.children
                    }, n.getDerivedStateFromError = function() {
                        return {
                            hasError: !0
                        }
                    }, n
                }(o().Component);
            const v = function(e, t) {
                var n = t.errorBoundaryProps,
                    a = function(t) {
                        return o().createElement(m, (0, r.A)({}, n), o().createElement(e, (0, r.A)({}, t)))
                    },
                    i = e.displayName || e.name || "Unknown";
                return a.displayName = "withErrorBoundary(".concat(i, ")"), a
            };
            var h = n("oVQP"),
                g = n("wIZF"),
                b = n("W3Ja");
            const y = (0, a.createContext)({
                colors: {},
                mode: "light"
            });
            var w = n("qrIQ"),
                x = n("hyZw"),
                E = n("OKx2"),
                A = n("O94r"),
                k = n.n(A),
                C = n("fvKX"),
                _ = {
                    fresh: "",
                    traditional: "traditional"
                };
            const N = function(e) {
                var t = e.scope,
                    n = e.isCVD,
                    r = e.isReverse,
                    i = e.themeColors,
                    s = e.colorMode,
                    c = void 0 === s ? "fresh" : s,
                    l = e.mode,
                    u = void 0 === l ? "light" : l,
                    f = e.themeExtraColors,
                    p = void 0 === f ? {} : f,
                    m = (0, C.r)().isMobile,
                    v = (0, a.useMemo)((function() {
                        var e = [n ? "cvd" : _[c] || "", r ? "reverse" : ""].filter(Boolean),
                            t = (0, g.__assign)({}, i),
                            a = p[e.join("-")] || {};
                        m && ((null === i || void 0 === i ? void 0 : i.mobile) && (t = (0, g.__assign)((0, g.__assign)({}, t), t.mobile)), (null === a || void 0 === a ? void 0 : a.mobile) && (a = (0, g.__assign)((0, g.__assign)({}, a), a.mobile)));
                        var o = (0, g.__assign)((0, g.__assign)({}, t), a);
                        delete o.mobile;
                        var s;
                        return s = Object.keys(o).reduce((function(e, t) {
                            var n;
                            return (0, g.__assign)((0, g.__assign)({}, e), ((n = {})["--color-".concat(t)] = o[t], n))
                        }), {}), {
                            colors: o,
                            styles: s
                        }
                    }), [n, r, i, p, m, c]),
                    h = v.colors,
                    A = v.styles,
                    N = k()("theme-root", u, e.className);
                return (0, b.op)((function() {
                    var e;
                    return w.lq || t || !document.body ? x.es : ((0, E.Dq)(document.body, A, !0), (e = document.body.classList).add.apply(e, N.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, E.Dq)(document.body, A, !1), (e = document.body.classList).remove.apply(e, N.split(" ")))
                    })
                }), [N, t, A]), o().createElement(y.Provider, {
                    value: {
                        isCVD: n,
                        isReverse: r,
                        mode: u,
                        colors: h
                    }
                }, w.lq || t ? o().createElement(d.Ay, {
                    className: N,
                    style: A,
                    children: e.children
                }) : e.children)
            };
            var S = n("jSBn");
            const M = function(e) {
                var t = e.pathPrefix,
                    n = e.isRegionMode,
                    r = e.level2Domain,
                    a = e.lang,
                    i = e.prefixCls,
                    s = e.isRTL,
                    c = e.iconConfig,
                    l = e.children,
                    u = e.isElectron,
                    f = e.isMobile,
                    d = (0, g.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    p = {
                        prefixCls: i,
                        isRTL: s,
                        iconConfig: c,
                        isElectron: u,
                        isMobile: f
                    },
                    m = {
                        pathPrefix: t,
                        isRegionMode: n,
                        level2Domain: r,
                        lang: a
                    },
                    v = Object.values(m).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    h = o().createElement(C.A, (0, g.__assign)({}, p), o().createElement(N, (0, g.__assign)({}, d), l));
                return v ? o().createElement(S.A, (0, g.__assign)({}, m), h) : h
            };
            var I = n("H2//"),
                R = n("k5JY"),
                O = n("Svbh");
            const T = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    r = e.content,
                    i = (0, g.__rest)(e, ["willClose", "closeCallback", "content"]),
                    s = o().useState(!0),
                    c = s[0],
                    l = s[1],
                    u = (0, a.useCallback)((function() {
                        l(!1), setTimeout((function() {
                            n && n()
                        }), O.p)
                    }), [n]);
                return o().useEffect((function() {
                    t && u()
                }), [t, u]), o().createElement(R.Ay, (0, g.__assign)({}, i, {
                    visible: c,
                    onClose: u,
                    children: r
                }))
            };
            var L = n("mk7A");
            const B = function(e) {
                var t = e.duration,
                    n = void 0 === t ? 3e3 : t,
                    r = e.visible,
                    a = e.onClose,
                    i = void 0 === a ? x.es : a,
                    s = e.children,
                    c = (0, g.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    l = o().useRef(),
                    u = (0, C.r)().prefixCls,
                    f = k()("".concat(u, "-toast"), e.className);
                return o().useEffect((function() {
                    return n ? (l.current = setTimeout((function() {
                        r && i(), l.current = null
                    }), n), function() {
                        return clearTimeout(l.current)
                    }) : function() {}
                }), [r, n, i]), o().createElement(L.A, (0, g.__assign)({}, c, {
                    visible: r,
                    onClose: i,
                    className: f
                }), o().createElement(d.Ay, {
                    className: "".concat(u, "-toast-wrap"),
                    children: s
                }))
            };
            const D = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    r = e.content,
                    i = (0, g.__rest)(e, ["willClose", "closeCallback", "content"]),
                    s = o().useState(!0),
                    c = s[0],
                    l = s[1],
                    u = (0, a.useCallback)((function() {
                        l(!1), setTimeout((function() {
                            n && n()
                        }), O.p)
                    }), [n]);
                return o().useEffect((function() {
                    t && u()
                }), [t, u]), o().createElement(B, (0, g.__assign)({}, i, {
                    visible: c,
                    onClose: u,
                    children: r
                }))
            };
            var P = n("lm97");
            const F = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    r = e.direction,
                    i = void 0 === r ? "bottom" : r,
                    s = e.content,
                    c = (0, g.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    l = o().useState(!0),
                    u = l[0],
                    f = l[1],
                    d = (0, a.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            n && n()
                        }), O.p)
                    }), [n]);
                return o().useEffect((function() {
                    t && d()
                }), [t, d]), o().createElement(P.A, (0, g.__assign)({}, c, {
                    direction: i,
                    visible: u,
                    onClose: d,
                    children: s
                }))
            };
            var z = n("mXw3");
            const V = function(e) {
                var t = e.className,
                    n = e.duration,
                    r = void 0 === n ? 3e3 : n,
                    i = e.willClose,
                    s = e.closeCallback,
                    c = (0, g.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    l = o().useState(!0),
                    u = l[0],
                    f = l[1],
                    d = o().useRef(),
                    p = (0, a.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            s && s()
                        }), O.p)
                    }), [s]);
                return o().useEffect((function() {
                    i && p()
                }), [i, p]), o().useEffect((function() {
                    return r ? (d.current = setTimeout((function() {
                        u && p(), d.current = null
                    }), r), function() {
                        return clearTimeout(d.current)
                    }) : function() {}
                }), [u, r, p]), o().createElement(O.A, {
                    className: t,
                    visible: u
                }, o().createElement(z.A, (0, g.__assign)({
                    closable: !0,
                    variant: "push"
                }, c, {
                    onClose: p
                })))
            };
            var U = function(e) {
                var t = e.placement,
                    n = e.offsetX,
                    r = e.offsetY,
                    a = t.split("-"),
                    o = a[0],
                    i = a[1],
                    s = i ? 0 : "50%",
                    c = r,
                    l = i ? n : "50%";
                return ("end" === i ? {
                    top: {
                        transform: "translate(-".concat(s, ", 0)"),
                        top: c,
                        right: l
                    },
                    bottom: {
                        transform: "translate(-".concat(s, ", 0)"),
                        bottom: c,
                        right: l
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(s, ", 0)"),
                        top: c,
                        left: l
                    },
                    bottom: {
                        transform: "translate(-".concat(s, ", 0)"),
                        bottom: c,
                        left: l
                    }
                })[o]
            };
            const j = function(e) {
                var t = e.offsetX,
                    n = void 0 === t ? 16 : t,
                    r = e.offsetY,
                    a = void 0 === r ? 16 : r,
                    i = e.notifies,
                    s = (0, C.r)().prefixCls,
                    c = "".concat(s, "-layer-notifies");
                if (!i.length) return null;
                var l = i.reduce((function(e, t) {
                    var n = t.uid,
                        r = t.placement,
                        a = void 0 === r ? "top-end" : r,
                        i = (0, g.__rest)(t, ["uid", "placement"]);
                    return e[a].push(o().createElement(V, (0, g.__assign)({
                        key: n
                    }, i))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return o().createElement(d.Ay, {
                    className: "".concat(c, "-wrap")
                }, Object.keys(l).map((function(e) {
                    var t, r = e.split("-"),
                        i = (r[0], r[1]),
                        s = l[e],
                        u = k()(c, ((t = {})["data-pos-".concat(i)] = i, t));
                    return s.length ? o().createElement(d.Ay, {
                        key: e,
                        className: u,
                        children: s,
                        style: U({
                            placement: e,
                            offsetX: n,
                            offsetY: a
                        })
                    }) : null
                })))
            };
            var W = (0, a.createContext)({
                openModal: x.es,
                closeModal: x.es,
                openToast: x.es,
                closeToast: x.es,
                openDrawer: x.es,
                closeDrawer: x.es,
                pushNotify: x.es,
                closeNotify: x.es
            });
            const q = function(e) {
                var t = e.children,
                    n = e.notifiesPosition,
                    r = (0, a.useState)(),
                    i = r[0],
                    s = r[1],
                    c = (0, a.useState)(),
                    l = c[0],
                    u = c[1],
                    f = (0, a.useState)(),
                    d = f[0],
                    p = f[1],
                    m = (0, a.useState)([]),
                    v = m[0],
                    h = m[1],
                    b = {};
                return b.openModal = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    s((0, g.__assign)((0, g.__assign)({}, e), {
                        closeCallback: function() {
                            s(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), b.closeModal = (0, a.useCallback)((function() {
                    s((function(e) {
                        return e ? (0, g.__assign)((0, g.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), b.openToast = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    u((0, g.__assign)((0, g.__assign)({}, e), {
                        closeCallback: function() {
                            u(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), b.closeToast = (0, a.useCallback)((function() {
                    u((function(e) {
                        return e ? (0, g.__assign)((0, g.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), b.openDrawer = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    p((0, g.__assign)((0, g.__assign)({}, e), {
                        closeCallback: function() {
                            p(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), b.closeDrawer = (0, a.useCallback)((function() {
                    p((function(e) {
                        return e ? (0, g.__assign)((0, g.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), b.pushNotify = (0, a.useCallback)((function(e) {
                    var t = (0, I.uR)(8),
                        n = (0, g.__assign)((0, g.__assign)({}, e), {
                            uid: t,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), h((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== t
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return h((function(e) {
                        return (0, g.__spreadArray)((0, g.__spreadArray)([], e, !0), [n], !1)
                    })), n.uid
                }), []), b.closeNotify = (0, a.useCallback)((function(e) {
                    h((function(t) {
                        return t.map((function(t) {
                            return t.uid === e ? (0, g.__assign)((0, g.__assign)({}, t), {
                                willClose: !0
                            }) : t
                        }))
                    }))
                }), []), o().createElement(W.Provider, {
                    value: b
                }, t, l && o().createElement(D, (0, g.__assign)({}, l)), i && o().createElement(T, (0, g.__assign)({}, i)), d && o().createElement(F, (0, g.__assign)({}, d)), o().createElement(j, (0, g.__assign)({
                    notifies: v
                }, n)))
            };
            const H = function(e) {
                var t = function(t) {
                        var n = (0, i.useTheme)().isLight,
                            a = n ? "light" : "dark",
                            s = n ? h.BB : h.XT;
                        return o().createElement(M, {
                            themeColors: s,
                            mode: a
                        }, o().createElement(q, null, o().createElement(e, (0, r.A)({}, t))))
                    },
                    n = e.displayName || e.name || "Unknown";
                return t.displayName = "withUniversalRoot(".concat(n, ")"), t
            }
        },
        Jk97: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ru: () => jt,
                YX: () => Fa,
                uz: () => Ja,
                HC: () => Xa,
                WF: () => l,
                vY: () => Ut,
                u8: () => _t,
                Rh: () => h,
                _: () => y,
                $b: () => cl,
                de: () => to,
                yA: () => Tt,
                B3: () => Ht,
                nE: () => Ct
            });
            var r = n("DTvD"),
                a = n.n(r),
                o = n("wIZF"),
                i = n("Y4uf");
            const s = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), a().createElement("path", {
                    opacity: .5,
                    d: "M84 28H64V8l20 20z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    opacity: .2,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24 8h40v20h20v60H24V8zm10 30h40v4H34v-4zm40 8H34v4h40v-4zm-40 8h40v4H34v-4z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.137 64.105c7.828 5.781 18.916 5.127 26.005-1.963 7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.284 0-7.09 7.09-7.744 18.177-1.964 26.005l-14.3 14.3 4.243 4.243 14.3-14.3zM43.9 57.9c-5.467 5.468-14.331 5.468-19.799 0-5.467-5.467-5.467-14.331 0-19.799 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8z",
                    fill: "#AEB4BC"
                }))
            };
            var c = n("eeEA");
            const l = function(e) {
                var t = e.className,
                    n = e.tips;
                return a().createElement(c.Ay, {
                    className: "flex flex-col items-center ".concat(t)
                }, a().createElement(s, {
                    className: "text-[72px]"
                }), n && a().createElement(c.Ay, {
                    className: "body3 mt-4xs pc:mt-2xs text-t-third"
                }, n))
            };
            var u = n("O94r"),
                f = n.n(u),
                d = n("fvKX"),
                p = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                m = function(e) {
                    var t = (0, d.r)().prefixCls,
                        n = f()("".concat(t, "-spinner__nezha"), e.className);
                    return a().createElement(c.Ay, (0, o.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), a().createElement(c.Ay, {
                        className: "nezha-line",
                        style: p(1)
                    }), a().createElement(c.Ay, {
                        className: "nezha-line",
                        style: p(2)
                    }), a().createElement(c.Ay, {
                        className: "nezha-line",
                        style: p(3)
                    }), a().createElement(c.Ay, {
                        className: "nezha-line",
                        style: p(4)
                    }))
                };
            m.displayName = "Spinner";
            const v = m;
            const h = function(e) {
                var t = e.height;
                return a().createElement(c.Ay, {
                    className: "flex items-center justify-center ".concat(t, " w-full")
                }, a().createElement(v, null))
            };
            var g = n("Dz1D"),
                b = n("v7c3");
            const y = function(e) {
                var t = e.className,
                    n = (0, g.PC)().STATIC_HOST,
                    r = (0, b.X)("".concat(n, "/static/images/usercenter/data.json"), {
                        loop: !0,
                        autoplay: !0
                    }).setLottieRef;
                return a().createElement(c.Ay, {
                    className: t,
                    ref: r
                })
            };
            var w = n("ZSsA");
            var x = n("M5j3"),
                E = n("BK7R"),
                A = n("gZfF"),
                k = n("aVXY"),
                C = n("eaa7"),
                _ = n("8p9X"),
                N = n("LCuF"),
                S = n("ovBx"),
                M = n("7DEf"),
                I = n("i9es"),
                R = n("sitK");
            (0, R.Xc)((function(e) {
                var t = e.str,
                    n = e.size,
                    o = e.copyTrack,
                    i = (0, A.A)(e, ["str", "size", "copyTrack"]),
                    s = (0, w.s9)("exchange-wallet").t,
                    c = (0, k.A)((0, r.useState)(!1), 2),
                    l = c[0],
                    u = c[1],
                    f = (0, I.lk)().notifyFailed,
                    d = (0, r.useCallback)((function(e) {
                        var n;
                        return o && o(), (0, S.l)("".concat(t)) ? (u(!0), setTimeout((function() {
                            u(!1)
                        }), 1500)) : f(s("exchange-common-failed")), e.stopPropagation(), null === (n = e.nativeEvent) || void 0 === n || n.stopImmediatePropagation(), !1
                    }), [t]),
                    p = l ? s("common-copy-copied") : i.beforeCopyTipText || s("common-click-toCopy"),
                    m = {
                        verticalAlign: "middle",
                        borderRadius: "4px",
                        cursor: "pointer",
                        ml: "minor",
                        ":hover": {
                            color: "t.primary",
                            path: {
                                fill: "currentcolor"
                            }
                        }
                    };
                return a().createElement(M.Ay, {
                    arrow: !0,
                    tip: a().createElement(N.A, {
                        sx: (0, E.A)({
                            width: "140px",
                            textAlign: "center"
                        }, i.tipSx)
                    }, p),
                    placement: "top"
                }, a().createElement(a().Fragment, null, l ? a().createElement(_.A, {
                    color: "iconNormal",
                    sx: (0, E.A)({}, m, i.sx),
                    size: n || 16
                }) : a().createElement(C.A, (0, x.A)({
                    color: "iconNormal",
                    onClick: d,
                    size: n || 16
                }, i, {
                    sx: (0, E.A)({}, m, i.sx)
                }))))
            }), {
                errorBoundaryProps: {
                    name: "CopyComponent"
                }
            });
            const O = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",
                    fill: "currentColor"
                }))
            };
            var T = n("qrIQ"),
                L = n("QFE7"),
                B = n("hyZw"),
                D = n("hTvQ"),
                P = n.n(D),
                F = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                z = function(e) {
                    var t = e.placement,
                        n = e.offset,
                        r = e.isArrow,
                        a = t.split("-"),
                        o = a[0],
                        i = a[1],
                        s = i ? 0 : "50%",
                        c = r ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[o] : "",
                        l = r ? n - Math.floor(3) : "100%",
                        u = i ? r ? 9 : 0 : "50%";
                    return ("end" === i ? {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: l,
                            right: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: l,
                            bottom: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: l,
                            bottom: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: l,
                            right: u
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: l,
                            left: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: l,
                            top: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: l,
                            top: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: l,
                            left: u
                        }
                    })[o]
                },
                V = function(e) {
                    var t, n, r = e.arrow,
                        i = e.shadow,
                        s = e.isFloat,
                        l = e.offset,
                        u = void 0 === l ? 6 : l,
                        p = e.variant,
                        m = void 0 === p ? "primary" : p,
                        v = e.placement,
                        h = void 0 === v ? "top" : v,
                        g = e.enablePortal,
                        b = e.portalNode,
                        y = e.style,
                        w = e.radius,
                        x = e.bubbleFontSize,
                        E = void 0 === x ? 14 : x,
                        A = (0, o.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        k = (0, d.r)().prefixCls,
                        C = "".concat(k, "-bubble"),
                        _ = f()(C, ((t = {})["".concat(C, "__").concat(m)] = !!m, t["data-shadow"] = !!i, t["data-font-".concat(E)] = !!E, t), e.className);
                    u = r ? Math.max(u, 4) : u;
                    var N = h.split("-")[0],
                        S = s ? z({
                            offset: u,
                            placement: h
                        }) : {},
                        M = z({
                            offset: u,
                            placement: h,
                            isArrow: !0
                        }),
                        I = ((n = {})[F[N]] = u, n.borderRadius = w, n),
                        R = a().createElement(c.Ay, (0, o.__assign)({}, A, {
                            className: _,
                            style: (0, o.__assign)((0, o.__assign)({}, S), y)
                        }), !!r && a().createElement(c.Ay, {
                            className: "".concat(C, "-arrow"),
                            style: M
                        }), !!r && !!i && a().createElement(c.Ay, {
                            className: "".concat(C, "-arrow-shadow"),
                            style: M
                        }), a().createElement(c.Ay, {
                            style: I,
                            className: "".concat(C, "-content"),
                            children: e.children
                        }));
                    return !T.lq && g ? P().createPortal(R, b instanceof HTMLElement ? b : document.body) : R
                };
            V.displayName = "Bubble";
            const U = V;
            var j = {
                    right: "left",
                    left: "right",
                    "top-start": "top-end",
                    "right-start": "left-start",
                    "left-start": "right-start",
                    "bottom-start": "bottom-end",
                    "top-end": "top-start",
                    "right-end": "left-end",
                    "left-end": "right-end",
                    "bottom-end": "bottom-start"
                },
                W = 50,
                q = function(e) {
                    var t;
                    e.stopPropagation(), T.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                H = n("H2//"),
                $ = "tooltip";

            function K(e, t, n) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": n,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function G(e, t, n) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: n ? 0 : -1
                }
            }

            function Y(e, t, n) {
                void 0 === t && (t = $), void 0 === n && (n = !1);
                var a = (0, r.useMemo)((function() {
                    return "".concat(e, "-").concat((0, H.uR)(8))
                }), [e, t, n]);
                return {
                    triggerAriaProps: K(a, t, n),
                    contentAriaProps: G(a, t, n)
                }
            }
            var Z = function(e) {
                var t, n = e.open,
                    i = e.once,
                    s = e.arrow,
                    l = e.offset,
                    u = void 0 === l ? 12 : l,
                    p = e.disabled,
                    m = e.tooltips,
                    v = e.variant,
                    h = void 0 === v ? "gray" : v,
                    g = e.placement,
                    b = void 0 === g ? "top" : g,
                    y = e.trigger,
                    w = void 0 === y ? "hover" : y,
                    x = e.onVisibleChange,
                    E = e.enablePortal,
                    A = e.portalNode,
                    k = e.bubbleClassName,
                    C = e.triggerClassName,
                    _ = e.delay,
                    N = void 0 === _ ? W : _,
                    S = e.enableClickBubble,
                    M = e.ariaRole,
                    I = void 0 === M ? $ : M,
                    R = (0, o.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    O = a().useState(n),
                    D = O[0],
                    P = O[1],
                    F = a().useRef(),
                    z = (0, d.r)(),
                    V = z.prefixCls,
                    H = z.isMobile,
                    K = z.isTablet,
                    G = z.isClient,
                    Z = z.isRTL,
                    Q = !T.lq && !H && !K;
                w = Q ? w : "click";
                var X = "".concat(V, "-tooltips");
                a().useEffect((function() {
                    "undefined" !== typeof n && D !== !!n && P(!D)
                }), [n, D]);
                var J = (0, L.d)({
                        fn: x
                    }).debounceFn,
                    ee = (0, r.useCallback)((function(e) {
                        p || P((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && J(n), t !== n ? n : t
                        }))
                    }), [p, J]),
                    te = (0, r.useMemo)((function() {
                        var e, t, n;
                        return "number" === typeof N ? {
                            enter: N,
                            leave: N,
                            click: N
                        } : {
                            enter: null !== (e = N.enter) && void 0 !== e ? e : W,
                            leave: null !== (t = N.leave) && void 0 !== t ? t : W,
                            click: null !== (n = N.click) && void 0 !== n ? n : W
                        }
                    }), [N]),
                    ne = (0, L.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    re = ne.debounceFn,
                    ae = ne.clearTimer,
                    oe = (0, L.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    ie = oe.debounceFn,
                    se = oe.clearTimer,
                    ce = (0, L.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    le = (0, r.useCallback)(ce, [ce]),
                    ue = (0, r.useCallback)((function() {
                        return ce(!1)
                    }), [ce]);
                a().useEffect((function() {
                    var e = F.current,
                        t = function() {
                            se(), re(!0)
                        },
                        n = function() {
                            ae(), ie(!1)
                        };
                    if (!T.lq && e instanceof Element) {
                        if ("hover" === w) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", n, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", n, !0)
                            };
                        var r = function(e) {
                            if (!F.current.contains(e.target)) return ce(!1)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                document.removeEventListener("click", r)
                            }
                    }
                    return B.es
                }), [w, re, se, ae, ie, ce]);
                var fe = "click" === w,
                    de = !p && D,
                    pe = i ? ue : void 0,
                    me = !fe && !i || S ? void 0 : q,
                    ve = fe ? le : void 0,
                    he = f()("".concat(X, "-wrap"), {
                        active: de
                    }, e.className),
                    ge = f()("".concat(X, "-ele"), ((t = {})["".concat(X, "-ele-rtl")] = !!Z, t), C),
                    be = f()(X, {
                        active: de
                    }, k),
                    ye = Z && j[b] || b,
                    we = (0, o.__assign)({
                        arrow: s,
                        offset: u,
                        variant: h,
                        placement: ye,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: E,
                        portalNode: A
                    }, R);
                "gray" === h && (we = (0, o.__assign)((0, o.__assign)({}, we), {
                    shadow: !1
                }));
                var xe = G && !p,
                    Ee = Y(X, I, xe),
                    Ae = Ee.triggerAriaProps,
                    ke = Ee.contentAriaProps;
                return a().createElement(c.Ay, {
                    ref: F,
                    onClick: me,
                    className: he
                }, a().createElement(c.Ay, (0, o.__assign)({}, Ae, {
                    className: ge,
                    onClick: ve,
                    children: e.children
                })), xe ? a().createElement(U, (0, o.__assign)({}, ke, we, {
                    className: be,
                    onClick: pe,
                    children: m
                })) : null)
            };
            Z.displayName = "Tooltips";
            const Q = Z;
            var X = n("W3Ja");

            function J(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function ee(e) {
                return e instanceof J(e).Element || e instanceof Element
            }

            function te(e) {
                return e instanceof J(e).HTMLElement || e instanceof HTMLElement
            }

            function ne(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof J(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var re = Math.max,
                ae = Math.min,
                oe = Math.round;

            function ie() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function se() {
                return !/^((?!chrome|android).)*safari/i.test(ie())
            }

            function ce(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    a = 1,
                    o = 1;
                t && te(e) && (a = e.offsetWidth > 0 && oe(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && oe(r.height) / e.offsetHeight || 1);
                var i = (ee(e) ? J(e) : window).visualViewport,
                    s = !se() && n,
                    c = (r.left + (s && i ? i.offsetLeft : 0)) / a,
                    l = (r.top + (s && i ? i.offsetTop : 0)) / o,
                    u = r.width / a,
                    f = r.height / o;
                return {
                    width: u,
                    height: f,
                    top: l,
                    right: c + u,
                    bottom: l + f,
                    left: c,
                    x: c,
                    y: l
                }
            }

            function le(e) {
                var t = J(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function ue(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function fe(e) {
                return ((ee(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function de(e) {
                return ce(fe(e)).left + le(e).scrollLeft
            }

            function pe(e) {
                return J(e).getComputedStyle(e)
            }

            function me(e) {
                var t = pe(e),
                    n = t.overflow,
                    r = t.overflowX,
                    a = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + a + r)
            }

            function ve(e, t, n) {
                void 0 === n && (n = !1);
                var r = te(t),
                    a = te(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = oe(t.width) / e.offsetWidth || 1,
                            r = oe(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    o = fe(t),
                    i = ce(e, a, n),
                    s = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== ue(t) || me(o)) && (s = function(e) {
                    return e !== J(e) && te(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : le(e);
                    var t
                }(t)), te(t) ? ((c = ce(t, !0)).x += t.clientLeft, c.y += t.clientTop) : o && (c.x = de(o))), {
                    x: i.left + s.scrollLeft - c.x,
                    y: i.top + s.scrollTop - c.y,
                    width: i.width,
                    height: i.height
                }
            }

            function he(e) {
                var t = ce(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function ge(e) {
                return "html" === ue(e) ? e : e.assignedSlot || e.parentNode || (ne(e) ? e.host : null) || fe(e)
            }

            function be(e) {
                return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : te(e) && me(e) ? e : be(ge(e))
            }

            function ye(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = be(e),
                    a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    o = J(r),
                    i = a ? [o].concat(o.visualViewport || [], me(r) ? r : []) : r,
                    s = t.concat(i);
                return a ? s : s.concat(ye(ge(i)))
            }

            function we(e) {
                return ["table", "td", "th"].indexOf(ue(e)) >= 0
            }

            function xe(e) {
                return te(e) && "fixed" !== pe(e).position ? e.offsetParent : null
            }

            function Ee(e) {
                for (var t = J(e), n = xe(e); n && we(n) && "static" === pe(n).position;) n = xe(n);
                return n && ("html" === ue(n) || "body" === ue(n) && "static" === pe(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(ie());
                    if (/Trident/i.test(ie()) && te(e) && "fixed" === pe(e).position) return null;
                    var n = ge(e);
                    for (ne(n) && (n = n.host); te(n) && ["html", "body"].indexOf(ue(n)) < 0;) {
                        var r = pe(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var Ae = "top",
                ke = "bottom",
                Ce = "right",
                _e = "left",
                Ne = "auto",
                Se = [Ae, ke, Ce, _e],
                Me = "start",
                Ie = "end",
                Re = "viewport",
                Oe = "popper",
                Te = Se.reduce((function(e, t) {
                    return e.concat([t + "-" + Me, t + "-" + Ie])
                }), []),
                Le = [].concat(Se, [Ne]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + Me, t + "-" + Ie])
                }), []),
                Be = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function De(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function a(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && a(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || a(e)
                })), r
            }

            function Pe(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var Fe = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function ze() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function Ve(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    a = t.defaultOptions,
                    o = void 0 === a ? Fe : a;
                return function(e, t, n) {
                    void 0 === n && (n = o);
                    var a = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Fe, o),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        i = [],
                        s = !1,
                        c = {
                            state: a,
                            setOptions: function(n) {
                                var s = "function" === typeof n ? n(a.options) : n;
                                l(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                                    reference: ee(e) ? ye(e) : e.contextElement ? ye(e.contextElement) : [],
                                    popper: ye(t)
                                };
                                var u = function(e) {
                                    var t = De(e);
                                    return Be.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, a.options.modifiers)));
                                return a.orderedModifiers = u.filter((function(e) {
                                    return e.enabled
                                })), a.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var s = o({
                                                state: a,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            l = function() {};
                                        i.push(s || l)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!s) {
                                    var e = a.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (ze(t, n)) {
                                        a.rects = {
                                            reference: ve(t, Ee(n), "fixed" === a.options.strategy),
                                            popper: he(n)
                                        }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < a.orderedModifiers.length; r++)
                                            if (!0 !== a.reset) {
                                                var o = a.orderedModifiers[r],
                                                    i = o.fn,
                                                    l = o.options,
                                                    u = void 0 === l ? {} : l,
                                                    f = o.name;
                                                "function" === typeof i && (a = i({
                                                    state: a,
                                                    options: u,
                                                    name: f,
                                                    instance: c
                                                }) || a)
                                            } else a.reset = !1, r = -1
                                    }
                                }
                            },
                            update: Pe((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(a)
                                }))
                            })),
                            destroy: function() {
                                l(), s = !0
                            }
                        };
                    if (!ze(e, t)) return c;

                    function l() {
                        i.forEach((function(e) {
                            return e()
                        })), i = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !s && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var Ue = {
                passive: !0
            };

            function je(e) {
                return e.split("-")[0]
            }

            function We(e) {
                return e.split("-")[1]
            }

            function qe(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function He(e) {
                var t, n = e.reference,
                    r = e.element,
                    a = e.placement,
                    o = a ? je(a) : null,
                    i = a ? We(a) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    c = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case Ae:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case ke:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case Ce:
                        t = {
                            x: n.x + n.width,
                            y: c
                        };
                        break;
                    case _e:
                        t = {
                            x: n.x - r.width,
                            y: c
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = o ? qe(o) : null;
                if (null != l) {
                    var u = "y" === l ? "height" : "width";
                    switch (i) {
                        case Me:
                            t[l] = t[l] - (n[u] / 2 - r[u] / 2);
                            break;
                        case Ie:
                            t[l] = t[l] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var $e = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function Ke(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    a = e.placement,
                    o = e.variation,
                    i = e.offsets,
                    s = e.position,
                    c = e.gpuAcceleration,
                    l = e.adaptive,
                    u = e.roundOffsets,
                    f = e.isFixed,
                    d = i.x,
                    p = void 0 === d ? 0 : d,
                    m = i.y,
                    v = void 0 === m ? 0 : m,
                    h = "function" === typeof u ? u({
                        x: p,
                        y: v
                    }) : {
                        x: p,
                        y: v
                    };
                p = h.x, v = h.y;
                var g = i.hasOwnProperty("x"),
                    b = i.hasOwnProperty("y"),
                    y = _e,
                    w = Ae,
                    x = window;
                if (l) {
                    var E = Ee(n),
                        A = "clientHeight",
                        k = "clientWidth";
                    if (E === J(n) && "static" !== pe(E = fe(n)).position && "absolute" === s && (A = "scrollHeight", k = "scrollWidth"), a === Ae || (a === _e || a === Ce) && o === Ie) w = ke, v -= (f && E === x && x.visualViewport ? x.visualViewport.height : E[A]) - r.height, v *= c ? 1 : -1;
                    if (a === _e || (a === Ae || a === ke) && o === Ie) y = Ce, p -= (f && E === x && x.visualViewport ? x.visualViewport.width : E[k]) - r.width, p *= c ? 1 : -1
                }
                var C, _ = Object.assign({
                        position: s
                    }, l && $e),
                    N = !0 === u ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            a = t.devicePixelRatio || 1;
                        return {
                            x: oe(n * a) / a || 0,
                            y: oe(r * a) / a || 0
                        }
                    }({
                        x: p,
                        y: v
                    }, J(n)) : {
                        x: p,
                        y: v
                    };
                return p = N.x, v = N.y, c ? Object.assign({}, _, ((C = {})[w] = b ? "0" : "", C[y] = g ? "0" : "", C.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", C)) : Object.assign({}, _, ((t = {})[w] = b ? v + "px" : "", t[y] = g ? p + "px" : "", t.transform = "", t))
            }
            const Ge = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        a = n.offset,
                        o = void 0 === a ? [0, 0] : a,
                        i = Le.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = je(e),
                                    a = [_e, Ae].indexOf(r) >= 0 ? -1 : 1,
                                    o = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    i = o[0],
                                    s = o[1];
                                return i = i || 0, s = (s || 0) * a, [_e, Ce].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: i
                                } : {
                                    x: i,
                                    y: s
                                }
                            }(n, t.rects, o), e
                        }), {}),
                        s = i[t.placement],
                        c = s.x,
                        l = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = i
                }
            };
            var Ye = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Ze(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Ye[e]
                }))
            }
            var Qe = {
                start: "end",
                end: "start"
            };

            function Xe(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Qe[e]
                }))
            }

            function Je(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && ne(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function et(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function tt(e, t, n) {
                return t === Re ? et(function(e, t) {
                    var n = J(e),
                        r = fe(e),
                        a = n.visualViewport,
                        o = r.clientWidth,
                        i = r.clientHeight,
                        s = 0,
                        c = 0;
                    if (a) {
                        o = a.width, i = a.height;
                        var l = se();
                        (l || !l && "fixed" === t) && (s = a.offsetLeft, c = a.offsetTop)
                    }
                    return {
                        width: o,
                        height: i,
                        x: s + de(e),
                        y: c
                    }
                }(e, n)) : ee(t) ? function(e, t) {
                    var n = ce(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : et(function(e) {
                    var t, n = fe(e),
                        r = le(e),
                        a = null == (t = e.ownerDocument) ? void 0 : t.body,
                        o = re(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
                        i = re(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
                        s = -r.scrollLeft + de(e),
                        c = -r.scrollTop;
                    return "rtl" === pe(a || n).direction && (s += re(n.clientWidth, a ? a.clientWidth : 0) - o), {
                        width: o,
                        height: i,
                        x: s,
                        y: c
                    }
                }(fe(e)))
            }

            function nt(e, t, n, r) {
                var a = "clippingParents" === t ? function(e) {
                        var t = ye(ge(e)),
                            n = ["absolute", "fixed"].indexOf(pe(e).position) >= 0 && te(e) ? Ee(e) : e;
                        return ee(n) ? t.filter((function(e) {
                            return ee(e) && Je(e, n) && "body" !== ue(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(a, [n]),
                    i = o[0],
                    s = o.reduce((function(t, n) {
                        var a = tt(e, n, r);
                        return t.top = re(a.top, t.top), t.right = ae(a.right, t.right), t.bottom = ae(a.bottom, t.bottom), t.left = re(a.left, t.left), t
                    }), tt(e, i, r));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }

            function rt(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function at(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function ot(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    a = void 0 === r ? e.placement : r,
                    o = n.strategy,
                    i = void 0 === o ? e.strategy : o,
                    s = n.boundary,
                    c = void 0 === s ? "clippingParents" : s,
                    l = n.rootBoundary,
                    u = void 0 === l ? Re : l,
                    f = n.elementContext,
                    d = void 0 === f ? Oe : f,
                    p = n.altBoundary,
                    m = void 0 !== p && p,
                    v = n.padding,
                    h = void 0 === v ? 0 : v,
                    g = rt("number" !== typeof h ? h : at(h, Se)),
                    b = d === Oe ? "reference" : Oe,
                    y = e.rects.popper,
                    w = e.elements[m ? b : d],
                    x = nt(ee(w) ? w : w.contextElement || fe(e.elements.popper), c, u, i),
                    E = ce(e.elements.reference),
                    A = He({
                        reference: E,
                        element: y,
                        strategy: "absolute",
                        placement: a
                    }),
                    k = et(Object.assign({}, y, A)),
                    C = d === Oe ? k : E,
                    _ = {
                        top: x.top - C.top + g.top,
                        bottom: C.bottom - x.bottom + g.bottom,
                        left: x.left - C.left + g.left,
                        right: C.right - x.right + g.right
                    },
                    N = e.modifiersData.offset;
                if (d === Oe && N) {
                    var S = N[a];
                    Object.keys(_).forEach((function(e) {
                        var t = [Ce, ke].indexOf(e) >= 0 ? 1 : -1,
                            n = [Ae, ke].indexOf(e) >= 0 ? "y" : "x";
                        _[e] += S[n] * t
                    }))
                }
                return _
            }
            const it = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name;
                    if (!t.modifiersData[r]._skip) {
                        for (var a = n.mainAxis, o = void 0 === a || a, i = n.altAxis, s = void 0 === i || i, c = n.fallbackPlacements, l = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, v = n.allowedAutoPlacements, h = t.options.placement, g = je(h), b = c || (g === h || !m ? [Ze(h)] : function(e) {
                                if (je(e) === Ne) return [];
                                var t = Ze(e);
                                return [Xe(e), t, Xe(t)]
                            }(h)), y = [h].concat(b).reduce((function(e, n) {
                                return e.concat(je(n) === Ne ? function(e, t) {
                                    void 0 === t && (t = {});
                                    var n = t,
                                        r = n.placement,
                                        a = n.boundary,
                                        o = n.rootBoundary,
                                        i = n.padding,
                                        s = n.flipVariations,
                                        c = n.allowedAutoPlacements,
                                        l = void 0 === c ? Le : c,
                                        u = We(r),
                                        f = u ? s ? Te : Te.filter((function(e) {
                                            return We(e) === u
                                        })) : Se,
                                        d = f.filter((function(e) {
                                            return l.indexOf(e) >= 0
                                        }));
                                    0 === d.length && (d = f);
                                    var p = d.reduce((function(t, n) {
                                        return t[n] = ot(e, {
                                            placement: n,
                                            boundary: a,
                                            rootBoundary: o,
                                            padding: i
                                        })[je(n)], t
                                    }), {});
                                    return Object.keys(p).sort((function(e, t) {
                                        return p[e] - p[t]
                                    }))
                                }(t, {
                                    placement: n,
                                    boundary: u,
                                    rootBoundary: f,
                                    padding: l,
                                    flipVariations: m,
                                    allowedAutoPlacements: v
                                }) : n)
                            }), []), w = t.rects.reference, x = t.rects.popper, E = new Map, A = !0, k = y[0], C = 0; C < y.length; C++) {
                            var _ = y[C],
                                N = je(_),
                                S = We(_) === Me,
                                M = [Ae, ke].indexOf(N) >= 0,
                                I = M ? "width" : "height",
                                R = ot(t, {
                                    placement: _,
                                    boundary: u,
                                    rootBoundary: f,
                                    altBoundary: d,
                                    padding: l
                                }),
                                O = M ? S ? Ce : _e : S ? ke : Ae;
                            w[I] > x[I] && (O = Ze(O));
                            var T = Ze(O),
                                L = [];
                            if (o && L.push(R[N] <= 0), s && L.push(R[O] <= 0, R[T] <= 0), L.every((function(e) {
                                    return e
                                }))) {
                                k = _, A = !1;
                                break
                            }
                            E.set(_, L)
                        }
                        if (A)
                            for (var B = function(e) {
                                    var t = y.find((function(t) {
                                        var n = E.get(t);
                                        if (n) return n.slice(0, e).every((function(e) {
                                            return e
                                        }))
                                    }));
                                    if (t) return k = t, "break"
                                }, D = m ? 3 : 1; D > 0; D--) {
                                if ("break" === B(D)) break
                            }
                        t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };

            function st(e, t, n) {
                return re(e, ae(t, n))
            }
            const ct = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        a = n.mainAxis,
                        o = void 0 === a || a,
                        i = n.altAxis,
                        s = void 0 !== i && i,
                        c = n.boundary,
                        l = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        p = void 0 === d || d,
                        m = n.tetherOffset,
                        v = void 0 === m ? 0 : m,
                        h = ot(t, {
                            boundary: c,
                            rootBoundary: l,
                            padding: f,
                            altBoundary: u
                        }),
                        g = je(t.placement),
                        b = We(t.placement),
                        y = !b,
                        w = qe(g),
                        x = "x" === w ? "y" : "x",
                        E = t.modifiersData.popperOffsets,
                        A = t.rects.reference,
                        k = t.rects.popper,
                        C = "function" === typeof v ? v(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : v,
                        _ = "number" === typeof C ? {
                            mainAxis: C,
                            altAxis: C
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, C),
                        N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        S = {
                            x: 0,
                            y: 0
                        };
                    if (E) {
                        if (o) {
                            var M, I = "y" === w ? Ae : _e,
                                R = "y" === w ? ke : Ce,
                                O = "y" === w ? "height" : "width",
                                T = E[w],
                                L = T + h[I],
                                B = T - h[R],
                                D = p ? -k[O] / 2 : 0,
                                P = b === Me ? A[O] : k[O],
                                F = b === Me ? -k[O] : -A[O],
                                z = t.elements.arrow,
                                V = p && z ? he(z) : {
                                    width: 0,
                                    height: 0
                                },
                                U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                j = U[I],
                                W = U[R],
                                q = st(0, A[O], V[O]),
                                H = y ? A[O] / 2 - D - q - j - _.mainAxis : P - q - j - _.mainAxis,
                                $ = y ? -A[O] / 2 + D + q + W + _.mainAxis : F + q + W + _.mainAxis,
                                K = t.elements.arrow && Ee(t.elements.arrow),
                                G = K ? "y" === w ? K.clientTop || 0 : K.clientLeft || 0 : 0,
                                Y = null != (M = null == N ? void 0 : N[w]) ? M : 0,
                                Z = T + $ - Y,
                                Q = st(p ? ae(L, T + H - Y - G) : L, T, p ? re(B, Z) : B);
                            E[w] = Q, S[w] = Q - T
                        }
                        if (s) {
                            var X, J = "x" === w ? Ae : _e,
                                ee = "x" === w ? ke : Ce,
                                te = E[x],
                                ne = "y" === x ? "height" : "width",
                                oe = te + h[J],
                                ie = te - h[ee],
                                se = -1 !== [Ae, _e].indexOf(g),
                                ce = null != (X = null == N ? void 0 : N[x]) ? X : 0,
                                le = se ? oe : te - A[ne] - k[ne] - ce + _.altAxis,
                                ue = se ? te + A[ne] + k[ne] - ce - _.altAxis : ie,
                                fe = p && se ? function(e, t, n) {
                                    var r = st(e, t, n);
                                    return r > n ? n : r
                                }(le, te, ue) : st(p ? le : oe, te, p ? ue : ie);
                            E[x] = fe, S[x] = fe - te
                        }
                        t.modifiersData[r] = S
                    }
                },
                requiresIfExists: ["offset"]
            };
            const lt = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        a = e.options,
                        o = n.elements.arrow,
                        i = n.modifiersData.popperOffsets,
                        s = je(n.placement),
                        c = qe(s),
                        l = [_e, Ce].indexOf(s) >= 0 ? "height" : "width";
                    if (o && i) {
                        var u = function(e, t) {
                                return rt("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : at(e, Se))
                            }(a.padding, n),
                            f = he(o),
                            d = "y" === c ? Ae : _e,
                            p = "y" === c ? ke : Ce,
                            m = n.rects.reference[l] + n.rects.reference[c] - i[c] - n.rects.popper[l],
                            v = i[c] - n.rects.reference[c],
                            h = Ee(o),
                            g = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                            b = m / 2 - v / 2,
                            y = u[d],
                            w = g - f[l] - u[p],
                            x = g / 2 - f[l] / 2 + b,
                            E = st(y, x, w),
                            A = c;
                        n.modifiersData[r] = ((t = {})[A] = E, t.centerOffset = E - x, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && Je(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function ut(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ft(e) {
                return [Ae, Ce, ke, _e].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var dt = Ve({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                a = r.scroll,
                                o = void 0 === a || a,
                                i = r.resize,
                                s = void 0 === i || i,
                                c = J(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return o && l.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, Ue)
                                })), s && c.addEventListener("resize", n.update, Ue),
                                function() {
                                    o && l.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, Ue)
                                    })), s && c.removeEventListener("resize", n.update, Ue)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = He({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                a = void 0 === r || r,
                                o = n.adaptive,
                                i = void 0 === o || o,
                                s = n.roundOffsets,
                                c = void 0 === s || s,
                                l = {
                                    placement: je(t.placement),
                                    variation: We(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: a,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ke(Object.assign({}, l, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: c
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ke(Object.assign({}, l, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: c
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    a = t.elements[e];
                                te(a) && ue(a) && (Object.assign(a.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            a = t.attributes[e] || {},
                                            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        te(r) && ue(r) && (Object.assign(r.style, o), Object.keys(a).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, Ge, it, ct, lt, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                a = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                i = ot(t, {
                                    elementContext: "reference"
                                }),
                                s = ot(t, {
                                    altBoundary: !0
                                }),
                                c = ut(i, r),
                                l = ut(s, a, o),
                                u = ft(c),
                                f = ft(l);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: c,
                                popperEscapeOffsets: l,
                                isReferenceHidden: u,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                pt = n("F0GY"),
                mt = n.n(pt),
                vt = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                ht = window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                gt = [],
                bt = (0, r.forwardRef)((function(e, t) {
                    var n, r = e.arrow,
                        i = e.shadow,
                        s = e.variant,
                        l = void 0 === s ? "primary" : s,
                        u = (e.placement, e.style),
                        p = e.radius,
                        m = e.arrowRef,
                        v = e.arrowStyle,
                        h = e.bubbleFontSize,
                        g = void 0 === h ? 14 : h,
                        b = (0, o.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        y = (0, d.r)().prefixCls,
                        w = "".concat(y, "-bubble"),
                        x = f()(w, "".concat(w, "-web"), ((n = {})["".concat(w, "__").concat(l)] = !!l, n["data-font-".concat(g)] = !!g, n["web-shadow"] = !!i, n), e.className),
                        E = {
                            borderRadius: p
                        };
                    if (T.lq) throw new Error("this component only use Web side");
                    return a().createElement(c.Ay, (0, o.__assign)({}, b, {
                        className: x,
                        style: u,
                        ref: t
                    }), a().createElement(c.Ay, {
                        style: E,
                        className: "".concat(w, "-content"),
                        children: e.children
                    }), !!r && a().createElement(c.Ay, {
                        className: "".concat(w, "-web-arrow"),
                        style: v,
                        ref: m,
                        "data-popper-arrow": !0
                    }))
                }));
            bt.displayName = "Bubble";
            const yt = bt;
            var wt = n("Svbh"),
                xt = function(e) {
                    var t, n = e.open,
                        i = e.once,
                        s = e.arrow,
                        l = e.offset,
                        u = void 0 === l ? 12 : l,
                        p = e.disabled,
                        m = e.tooltips,
                        v = e.variant,
                        h = void 0 === v ? "gray" : v,
                        g = e.placement,
                        b = void 0 === g ? "top" : g,
                        y = e.trigger,
                        w = void 0 === y ? "hover" : y,
                        x = e.onVisibleChange,
                        E = e.enablePortal,
                        A = e.portalNode,
                        k = e.reactPopperProps,
                        C = void 0 === k ? {} : k,
                        _ = C.sameWidth,
                        N = C.popperWidth,
                        S = C.offsetX,
                        M = C.screenPadding,
                        I = e.bubbleClassName,
                        R = e.bubbleWrapperClz,
                        O = e.triggerClassName,
                        B = e.enableHoverSafeArea,
                        F = e.delay,
                        z = void 0 === F ? W : F,
                        V = e.enableClickBubble,
                        U = e.ariaRole,
                        H = void 0 === U ? $ : U,
                        K = (0, o.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        G = (0, r.useState)(n),
                        Z = G[0],
                        Q = G[1],
                        J = (0, r.useState)(null),
                        ee = J[0],
                        te = J[1],
                        ne = (0, d.r)(),
                        re = ne.prefixCls,
                        ae = ne.isMobile,
                        oe = ne.isTablet,
                        ie = ne.isRTL,
                        se = ne.isClient,
                        ce = (0, r.useState)(null),
                        le = ce[0],
                        ue = ce[1],
                        fe = (0, r.useState)(null),
                        de = fe[0],
                        pe = fe[1],
                        me = (0, r.useState)(null),
                        ve = me[0],
                        he = me[1],
                        ge = (0, r.useState)(""),
                        be = ge[0],
                        ye = ge[1],
                        we = !T.lq && !ae && !oe,
                        xe = "".concat(re, "-tooltips"),
                        Ee = f()("".concat(re, "-tooltips-trans"), R),
                        Ae = f()("".concat(xe, "-ele"), ((t = {})["".concat(xe, "-ele-rtl")] = !!ie, t["".concat(xe, "-ele-with-safe-area")] = !!B && "hover" === w, t), O),
                        ke = f()(xe, {
                            active: Z
                        }, I),
                        Ce = f()("".concat(xe, "-wrap"), "".concat(xe, "-web"), {
                            active: !p && Z
                        }, K.className);
                    w = we ? w : "click";
                    var _e = ie && j[b] || b;
                    if (T.lq) throw new Error("this component only use Web side");
                    var Ne = (0, L.d)({
                            fn: x
                        }).debounceFn,
                        Se = (0, r.useCallback)((function(e) {
                            p || Q((function(t) {
                                var n = "boolean" === typeof e ? e : !t;
                                return t !== n && (null === Ne || void 0 === Ne || Ne(n)), t !== n ? n : t
                            }))
                        }), [p, Ne]),
                        Me = (0, r.useMemo)((function() {
                            var e, t, n;
                            return "number" === typeof z ? {
                                enter: z,
                                leave: z,
                                click: z
                            } : {
                                enter: null !== (e = z.enter) && void 0 !== e ? e : W,
                                leave: null !== (t = z.leave) && void 0 !== t ? t : W,
                                click: null !== (n = z.click) && void 0 !== n ? n : W
                            }
                        }), [z]),
                        Ie = (0, L.d)({
                            fn: Se,
                            time: Me.enter
                        }),
                        Re = Ie.debounceFn,
                        Oe = Ie.clearTimer,
                        Te = (0, L.d)({
                            fn: Se,
                            time: Me.leave
                        }),
                        Le = Te.debounceFn,
                        Be = Te.clearTimer,
                        De = (0, L.d)({
                            fn: Se,
                            time: Me.click
                        }).debounceFn,
                        Pe = (0, r.useCallback)((function(e) {
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = null === le || void 0 === le ? void 0 : le.contains(e.target);
                            !(!i && t || n) && Z && De(!1)
                        }), [De, le, de, i, Z]);
                    u = s ? Math.max(u, 4) : u;
                    var Fe = a().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = t.placement,
                                        r = t.elements,
                                        a = t.rects,
                                        o = r.arrow,
                                        i = r.reference;
                                    if (o && i) {
                                        var s = (["top", "bottom"].includes(n.split("-")[0]) ? a.reference.width : a.reference.height) / 2 - 3,
                                            c = Math.abs(t.modifiersData.arrow.centerOffset),
                                            l = Math.abs(c) > s;
                                        o && (l ? o.setAttribute("data-hide", "") : o.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        ze = [{
                            name: "arrow",
                            options: {
                                element: ve,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [S || 0, u]
                            }
                        }, Fe],
                        Ve = a().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(N || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(N || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [N]),
                        Ue = a().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: M
                                }
                            }
                        }), [M]);
                    (N || _) && ze.push(Ve), M && ze.push(Ue);
                    var je = function(e, t, n) {
                            void 0 === n && (n = {});
                            var a = r.useRef(null),
                                o = {
                                    onFirstUpdate: n.onFirstUpdate,
                                    placement: n.placement || "bottom",
                                    strategy: n.strategy || "absolute",
                                    modifiers: n.modifiers || gt
                                },
                                i = r.useState({
                                    styles: {
                                        popper: {
                                            position: o.strategy,
                                            left: "0",
                                            top: "0"
                                        },
                                        arrow: {
                                            position: "absolute"
                                        }
                                    },
                                    attributes: {}
                                }),
                                s = i[0],
                                c = i[1],
                                l = r.useMemo((function() {
                                    return {
                                        name: "updateState",
                                        enabled: !0,
                                        phase: "write",
                                        fn: function(e) {
                                            var t = e.state,
                                                n = Object.keys(t.elements);
                                            D.flushSync((function() {
                                                c({
                                                    styles: vt(n.map((function(e) {
                                                        return [e, t.styles[e] || {}]
                                                    }))),
                                                    attributes: vt(n.map((function(e) {
                                                        return [e, t.attributes[e]]
                                                    })))
                                                })
                                            }))
                                        },
                                        requires: ["computeStyles"]
                                    }
                                }), []),
                                u = r.useMemo((function() {
                                    var e = {
                                        onFirstUpdate: o.onFirstUpdate,
                                        placement: o.placement,
                                        strategy: o.strategy,
                                        modifiers: [].concat(o.modifiers, [l, {
                                            name: "applyStyles",
                                            enabled: !1
                                        }])
                                    };
                                    return mt()(a.current, e) ? a.current || e : (a.current = e, e)
                                }), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l]),
                                f = r.useRef();
                            return ht((function() {
                                f.current && f.current.setOptions(u)
                            }), [u]), ht((function() {
                                if (null != e && null != t) {
                                    var r = (n.createPopper || dt)(e, t, u);
                                    return f.current = r,
                                        function() {
                                            r.destroy(), f.current = null
                                        }
                                }
                            }), [e, t, n.createPopper]), {
                                state: f.current ? f.current.state : null,
                                styles: s.styles,
                                attributes: s.attributes,
                                update: f.current ? f.current.update : null,
                                forceUpdate: f.current ? f.current.forceUpdate : null
                            }
                        }(le, de, {
                            placement: _e,
                            strategy: "fixed",
                            modifiers: ze
                        }),
                        We = je.styles,
                        qe = je.attributes,
                        He = je.update,
                        $e = (0, r.useCallback)((function(e) {
                            !V && q(e);
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = !i && t;
                            t && He && He(), n || De(e)
                        }), [i, de, De, He, V]),
                        Ke = (0, r.useCallback)((function(e) {
                            if (de && le) {
                                var t, n, r, a = de.getBoundingClientRect(),
                                    o = le.getBoundingClientRect(),
                                    i = e.clientX - o.left,
                                    s = e.clientY - o.top,
                                    c = {
                                        top: a.top - o.top,
                                        bottom: a.bottom - o.top,
                                        left: a.left - o.left,
                                        right: a.right - o.left
                                    };
                                switch (_e.split("-")[0]) {
                                    case "left":
                                        i = Math.min(i + 4, o.width);
                                        var l = c.top + (i - c.right) * (0 - c.top) / (o.width - c.right),
                                            u = c.bottom + (i - c.right) * (o.height - c.bottom) / (o.width - c.right);
                                        s = Math.min(Math.max(s, l), u), t = "".concat(i, ",").concat(s), n = "".concat(c.right, ",").concat(c.top - 2), r = "".concat(c.right, ",").concat(c.bottom + 2);
                                        break;
                                    case "right":
                                        i = Math.max(i - 4, 0);
                                        var f = c.top + (i - c.left) * (0 - c.top) / (0 - c.left),
                                            d = c.bottom + (i - c.left) * (o.height - c.bottom) / (0 - c.left);
                                        s = Math.min(Math.max(s, f), d), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.top - 2), r = "".concat(c.left, ",").concat(c.bottom + 2);
                                        break;
                                    case "top":
                                        s = Math.min(s + 4, o.height);
                                        var p = c.left + (s - c.bottom) * (0 - c.left) / (o.height - c.bottom),
                                            m = c.right + (s - c.bottom) * (o.width - c.right) / (o.height - c.bottom);
                                        i = Math.min(Math.max(i, p), m), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.bottom), r = "".concat(c.right, ",").concat(c.bottom);
                                        break;
                                    default:
                                        s = Math.max(s - 4, 0);
                                        var v = c.left + (s - c.top) * (0 - c.left) / (0 - c.top),
                                            h = c.right + (s - c.top) * (o.width - c.right) / (0 - c.top);
                                        i = Math.min(Math.max(i, v), h), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.top), r = "".concat(c.right, ",").concat(c.top)
                                }
                                ye("".concat(t, " ").concat(n, " ").concat(r))
                            }
                        }), [de, le, _e]);
                    (0, r.useEffect)((function() {
                        return document.addEventListener("click", Pe),
                            function() {
                                document.removeEventListener("click", Pe)
                            }
                    }), [Pe]), (0, r.useEffect)((function() {
                        "undefined" !== typeof n && !!n !== Z && Q(n)
                    }), [n, Z]), (0, r.useEffect)((function() {
                        A instanceof HTMLElement ? te(A) : te(document.body)
                    }), [A]), (0, X.op)((function() {
                        null === He || void 0 === He || He()
                    }), [m, He]);
                    var Ge = "hover" === w ? {
                            onMouseEnter: function() {
                                Be(), Re(!0)
                            },
                            onMouseLeave: function() {
                                Oe(), Le(!1)
                            },
                            onMouseMove: B ? Ke : void 0
                        } : {
                            onClick: $e
                        },
                        Ye = (0, o.__assign)({
                            arrow: s,
                            variant: h,
                            shadow: !0
                        }, K);
                    "gray" === h && (Ye = (0, o.__assign)((0, o.__assign)({}, Ye), {
                        shadow: !1
                    }));
                    var Ze = !p && Z,
                        Qe = Y(xe, H, Ze),
                        Xe = Qe.triggerAriaProps,
                        Je = Qe.contentAriaProps,
                        et = a().createElement(wt.A, {
                            visible: Ze,
                            className: Ee
                        }, a().createElement(yt, (0, o.__assign)({}, Je, Ye, {
                            className: ke,
                            ref: pe,
                            arrowRef: he,
                            arrowStyle: We.arrow,
                            style: (0, o.__assign)((0, o.__assign)({}, We.popper), null === K || void 0 === K ? void 0 : K.style)
                        }, qe.popper, {
                            children: m
                        })));
                    return a().createElement(c.Ay, (0, o.__assign)({
                        ref: ue
                    }, Ge, {
                        className: Ce
                    }), B && "hover" === w && Z && a().createElement("svg", {
                        className: "".concat(xe, "-safety-triangle"),
                        pointerEvents: "none"
                    }, a().createElement("polygon", {
                        pointerEvents: "auto",
                        points: be
                    })), a().createElement(c.Ay, (0, o.__assign)({}, Xe, {
                        className: Ae,
                        children: K.children
                    })), se && E && null !== ee ? P().createPortal(et, ee) : et)
                };
            xt.displayName = "Tooltips";
            const Et = xt;
            var At = function(e) {
                var t = e.useReactPopper,
                    n = e.reactPopperProps,
                    r = e.enableHoverSafeArea,
                    i = e.bubbleWrapperClz,
                    s = (0, o.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !T.lq && t ? a().createElement(Et, (0, o.__assign)({
                    reactPopperProps: n,
                    enableHoverSafeArea: r,
                    bubbleWrapperClz: i
                }, s)) : a().createElement(Q, (0, o.__assign)({}, s))
            };
            At.displayName = "Tooltips";
            const kt = At;
            const Ct = (0, R.eF)((function(e) {
                var t = e.customClassName,
                    n = e.tooltipsDesc,
                    r = (0, w.s9)("main-uc").t;
                return a().createElement(kt, {
                    useReactPopper: !0,
                    enableHoverSafeArea: !0,
                    arrow: !0,
                    placement: "top-start",
                    className: t,
                    tooltips: a().createElement(c.Ay, {
                        className: "whitespace-pre-line"
                    }, n || r("today-pnl-desc", {
                        defaultValue: "Today's PNL = Current asset total - Today's initial asset total - Today's net transfer and deposit.\n\n            The date is only for your reference, there is no guarantee that the data is absolutely accurate."
                    }))
                }, a().createElement(O, {
                    className: "ml-4xs flex-shrink-0 text-iconNormal w-3 cursor-pointer align-middle text-base"
                }))
            }));
            const _t = function(e) {
                var t = e.canLoadMore,
                    n = e.isLoading,
                    o = e.hasMoreData,
                    i = e.onLoadMore,
                    s = e.children,
                    l = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    if (!("IntersectionObserver" in window)) return t && !n && o && i(),
                        function() {};
                    var e = new IntersectionObserver((function(e) {
                        var r = function(e) {
                            var t;
                            return (null === (t = e.filter((function(e) {
                                return !0 === e.isIntersecting
                            }))) || void 0 === t ? void 0 : t.length) > 0
                        }(e);
                        r && t && !n && o && i()
                    }));
                    return l.current && e.observe(l.current),
                        function() {
                            e.disconnect()
                        }
                }), [t, n, o, i]), a().createElement(a().Fragment, null, s, a().createElement(c.Ay, {
                    ref: l,
                    className: "overflow-hidden",
                    style: {
                        height: 1
                    }
                }))
            };
            var Nt = function(e) {
                    var t, n = e.className,
                        r = e.size,
                        i = void 0 === r ? "large" : r,
                        s = e.shape,
                        l = void 0 === s ? "circle" : s,
                        u = e.active,
                        p = void 0 !== u && u,
                        m = (0, o.__rest)(e, ["className", "size", "shape", "active"]),
                        v = (0, d.r)().prefixCls,
                        h = "".concat(v, "-skeleton-avatar"),
                        g = f()(h, ((t = {})["".concat(h, "-").concat(i)] = !!i, t["".concat(h, "-").concat(l)] = !!l, t["${rootClz}-active"] = !!p, t), n);
                    return a().createElement(c.Ay, (0, o.__assign)({
                        className: g
                    }, m))
                },
                St = function(e) {
                    var t = e.width,
                        n = e.className,
                        r = (0, o.__rest)(e, ["width", "className"]),
                        i = (0, d.r)().prefixCls,
                        s = "".concat(i, "-skeleton-title"),
                        l = f()(s, n);
                    return a().createElement(c.Ay, (0, o.__assign)({
                        className: l,
                        style: {
                            width: t
                        }
                    }, r))
                },
                Mt = function(e) {
                    var t = e.rows,
                        n = void 0 === t ? 2 : t,
                        r = e.width,
                        i = e.className,
                        s = e.avatar,
                        l = (0, o.__rest)(e, ["rows", "width", "className", "avatar"]),
                        u = (0, d.r)().prefixCls,
                        p = "".concat(u, "-skeleton-paragraph"),
                        m = f()(p, i),
                        v = function(e) {
                            return Array.isArray(r) ? r[e] : null !== r && void 0 !== r ? r : void 0
                        };
                    return a().createElement(c.Ay, (0, o.__assign)({
                        className: m
                    }, l), (0, o.__spreadArray)([], Array(n), !0).map((function(e, t) {
                        return s ? a().createElement(c.Ay, {
                            key: t,
                            className: "".concat(p, "-row-wrapper"),
                            style: {
                                width: v(t)
                            }
                        }, a().createElement(Nt, {
                            size: "small"
                        }), a().createElement(c.Ay, {
                            key: t,
                            className: "".concat(p, "-row")
                        })) : a().createElement(a().Fragment, null, a().createElement(c.Ay, {
                            key: t,
                            className: "".concat(p, "-row"),
                            style: {
                                width: v(t)
                            }
                        }))
                    })))
                },
                It = function(e) {
                    var t = e.className,
                        n = e.width,
                        r = e.height,
                        i = (0, o.__rest)(e, ["className", "width", "height"]),
                        s = (0, d.r)().prefixCls,
                        l = "".concat(s, "-skeleton-image"),
                        u = f()(l, t);
                    return a().createElement(c.Ay, (0, o.__assign)({
                        className: u,
                        style: {
                            width: n,
                            height: r
                        }
                    }, i))
                },
                Rt = (0, r.forwardRef)((function(e, t) {
                    var n, r = e.loading,
                        i = e.className,
                        s = e.active,
                        l = void 0 !== s && s,
                        u = e.paragraph,
                        p = void 0 === u || u,
                        m = e.avatar,
                        v = void 0 !== m && m,
                        h = e.title,
                        g = void 0 === h || h,
                        b = e.image,
                        y = void 0 !== b && b,
                        w = e.imageCount,
                        x = void 0 === w ? 2 : w,
                        E = (0, d.r)().prefixCls,
                        A = "".concat(E, "-skeleton"),
                        k = f()(A, ((n = {})["".concat(A, "-with-avatar")] = !!v, n["".concat(A, "-active")] = l, n), i);
                    return "loading" in e && !r ? null : a().createElement(c.Ay, {
                        className: k,
                        ref: t
                    }, !!v && a().createElement(c.Ay, {
                        className: "".concat(A, "-header")
                    }, a().createElement(Nt, (0, o.__assign)({}, "object" === typeof v ? v : {}, {
                        active: l
                    }))), a().createElement(c.Ay, {
                        className: "".concat(A, "-content")
                    }, !!g && a().createElement(St, (0, o.__assign)({}, "object" === typeof g ? g : {})), !!p && a().createElement(Mt, (0, o.__assign)({}, "object" === typeof p ? p : {})), !!y && a().createElement(c.Ay, {
                        className: "".concat(A, "-images")
                    }, Array.from({
                        length: x
                    }).map((function(e, t) {
                        return a().createElement(It, (0, o.__assign)({
                            key: t
                        }, "object" === typeof y ? y : {}))
                    })))))
                }));
            Rt.displayName = "Skeleton";
            const Ot = Rt;
            const Tt = function(e) {
                var t = e.className,
                    n = e.number,
                    r = e.id,
                    o = e.showSkeletonPlaceholder,
                    i = e.skletonProps,
                    s = void 0 === i ? {} : i,
                    l = (0, k.A)((0, I.Z4)(), 1)[0];
                return a().createElement(c.Ay, {
                    id: r,
                    className: t
                }, o ? a().createElement(Ot, (0, x.A)({
                    active: !0,
                    title: !1,
                    paragraph: {
                        rows: 1
                    }
                }, s)) : l ? "******" : n)
            };
            const Lt = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z",
                    fill: "currentColor"
                }))
            };
            var Bt = function() {
                    return a().createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a().createElement("path", {
                        d: "M5.83398 7.00017V5.89919L8.00065 3.56512L10.1673 5.89919V7.00017H5.83398Z",
                        fill: "#848E9C"
                    }), a().createElement("path", {
                        d: "M10.1673 9V10.101L8.00065 12.435L5.83398 10.101V9H10.1673Z",
                        fill: "#FCD535"
                    }))
                },
                Dt = function() {
                    return a().createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a().createElement("path", {
                        d: "M10.166 8.99983L10.166 10.1008L7.99935 12.4349L5.83268 10.1008L5.83268 8.99983L10.166 8.99983Z",
                        fill: "#929AA5"
                    }), a().createElement("path", {
                        d: "M5.83268 7L5.83268 5.89902L7.99935 3.56495L10.166 5.89902L10.166 7L5.83268 7Z",
                        fill: "#FCD535"
                    }))
                },
                Pt = function(e) {
                    var t = e.active,
                        n = e.isDesc;
                    return t ? n ? a().createElement(Bt, null) : a().createElement(Dt, null) : a().createElement(Lt, {
                        className: "module-hover-icon text-[16px]"
                    })
                };
            const Ft = function(e) {
                var t = e.hasSort,
                    n = void 0 !== t && t,
                    r = e.sortState,
                    o = e.children,
                    i = e.justifyContent,
                    s = e.width,
                    l = (0, A.A)(e, ["hasSort", "sortState", "children", "justifyContent", "width"]),
                    u = r || {},
                    f = u.active,
                    d = u.isDesc;
                return a().createElement(c.Ay, (0, x.A)({
                    className: "overview-module-hover py-[12px] ".concat(s || "flex-grow", " text-iconNormal flex items-center ").concat(n ? "cursor-pointer" : "cursor-default", " ").concat(i, " hover:text-t-primary pr-4 last-of-type:pr-0")
                }, l), o, n && a().createElement(Pt, {
                    active: f,
                    isDesc: d
                }))
            };
            const zt = function(e) {
                var t = e.tableKey,
                    n = e.columns,
                    o = e.assetItem,
                    i = e.onItemClick,
                    s = e.isShowExpendRow,
                    l = void 0 !== s && s,
                    u = e.index,
                    f = e.expandedRowRender,
                    d = (0, r.useCallback)((function() {
                        i && i(o, u)
                    }), [o, i, u]),
                    p = (0, r.useMemo)((function() {
                        return "".concat(t ? "".concat(t, "-") : "")
                    }), [t]);
                return a().createElement(a().Fragment, null, a().createElement(c.Ay, {
                    onClick: d,
                    className: "px-s -mx-s hover:bg-bg2 rounded-m flex h-[64px] py-[8px] ".concat((null === o || void 0 === o ? void 0 : o.notOnlineCoin) ? "" : "cursor-pointer", " flex-wrap")
                }, n.map((function(e) {
                    return a().createElement(c.Ay, {
                        className: "flex ".concat(e.width ? e.width : "flex-grow", " items-center pr-4 last-of-type:pr-0 ").concat(e.justifyContent),
                        key: "".concat(p).concat(e.dataIndex)
                    }, e.render(o))
                }))), l ? a().createElement(c.Ay, null, "function" === typeof f ? f(o, u) : f) : null)
            };
            var Vt = n("QUKP"),
                Ut = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "w-24" : t;
                    return a().createElement(Ot, {
                        active: !0,
                        title: !1,
                        className: n,
                        paragraph: {
                            avatar: !0,
                            rows: 1
                        }
                    })
                },
                jt = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "w-16" : t;
                    return a().createElement(Ot, {
                        active: !0,
                        title: !1,
                        className: n,
                        paragraph: {
                            rows: 1
                        }
                    })
                };
            const Wt = function(e) {
                var t = e.columns,
                    n = e.data,
                    o = e.onRow,
                    i = e.expandedRowRender,
                    s = e.tableKey,
                    c = e.itemKeyName,
                    u = e.forceExpandAllRows,
                    f = e.showSkeletonPlaceholder,
                    d = void 0 !== f && f,
                    p = (0, w.s9)("exchange-wallet").t,
                    m = (0, k.A)((0, r.useState)(-1), 2),
                    v = m[0],
                    h = m[1],
                    g = (0, k.A)((0, r.useState)(!1), 2),
                    b = g[0],
                    y = g[1],
                    x = (0, r.useCallback)((function(e, t) {
                        y((function(e) {
                            return v !== t || !e
                        })), h(t), o && o(e, t)
                    }), [o, v]);
                if (!d && !(null === n || void 0 === n ? void 0 : n.length)) return a().createElement(l, {
                    className: "pc:my-5xl my-[64px]",
                    tips: p("exchange-wallet-no-records", "No records")
                });
                var A = function(e) {
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? e.map((function(e, t) {
                        return (0, Vt.A)((0, E.A)({}, e), {
                            render: function() {
                                return 0 === t ? a().createElement(Ut, null) : a().createElement(jt, null)
                            }
                        })
                    })) : e
                }(t, d);
                return a().createElement(a().Fragment, null, n.map((function(e, t) {
                    return a().createElement(zt, {
                        tableKey: s,
                        onItemClick: x,
                        key: (null === e || void 0 === e ? void 0 : e[c]) || t,
                        columns: A,
                        assetItem: e,
                        isShowExpendRow: u || b && t === v,
                        index: t,
                        expandedRowRender: i
                    })
                })))
            };
            var qt = n("aUMm");
            const Ht = function(e) {
                var t = e.data,
                    n = e.columns,
                    o = e.loading,
                    i = e.sortState,
                    s = e.setSortState,
                    l = e.canLoadMore,
                    u = void 0 === l || l,
                    f = e.hasMoreData,
                    d = void 0 !== f && f,
                    p = e.onLoadMore,
                    m = void 0 === p ? function() {} : p,
                    v = e.onSort,
                    g = void 0 === v ? function() {} : v,
                    b = e.infiniteScroll,
                    y = void 0 !== b && b,
                    w = e.onRow,
                    E = e.expandedRowRender,
                    A = e.wrapClassName,
                    k = e.tableKey,
                    C = e.itemKeyName,
                    _ = e.forceExpandAllRows,
                    N = void 0 !== _ && _,
                    S = e.loadingStyle,
                    M = void 0 === S ? "Spinner" : S,
                    I = e.skeletonPlaceholderRows,
                    R = void 0 === I ? 4 : I,
                    O = (0, qt.j)(o) && "Skeleton" === M,
                    T = !O && o,
                    L = new Array(R).fill({}),
                    B = O ? L : t,
                    D = (0, r.useCallback)((function(e, t) {
                        e && s((function(n) {
                            return {
                                sortKey: e,
                                isDesc: n.sortKey !== e || !n.isDesc,
                                sortType: t
                            }
                        })), g && g(e)
                    }), [s]);
                return T ? a().createElement(h, {
                    height: "h-[328px]"
                }) : a().createElement(c.Ay, null, a().createElement(c.Ay, {
                    className: "flex flex-wrap"
                }, n.map((function(e) {
                    var t = e || {},
                        n = t.title,
                        r = t.sortKey,
                        o = t.sortType,
                        s = t.justifyContent,
                        l = t.width,
                        u = t.dataIndex,
                        f = t.disableSort,
                        d = {
                            id: k && r ? "table-".concat(k, "-").concat(r) : null
                        };
                    return a().createElement(Ft, {
                        key: "string" === typeof n ? n : r,
                        hasSort: !!r && !0 !== f,
                        sortState: {
                            active: (null === i || void 0 === i ? void 0 : i.sortKey) === r,
                            isDesc: null === i || void 0 === i ? void 0 : i.isDesc
                        },
                        justifyContent: s,
                        onClick: function() {
                            return !f && D(r, o)
                        },
                        width: l,
                        id: "asset-table-list-".concat(u)
                    }, a().createElement(c.Ay, (0, x.A)({
                        className: "caption2 pc:caption1 text-xs font-normal"
                    }, d), n))
                }))), y ? a().createElement(c.Ay, {
                    className: "-mx-s px-s max-h-[548px] overflow-x-hidden overflow-y-scroll ".concat(A)
                }, a().createElement(_t, {
                    canLoadMore: u,
                    isLoading: o,
                    hasMoreData: d,
                    onLoadMore: m
                }, a().createElement(Wt, {
                    data: B,
                    tableKey: k,
                    columns: n,
                    onRow: w,
                    forceExpandAllRows: N,
                    expandedRowRender: E,
                    itemKeyName: C,
                    isLoading: o,
                    loadingStyle: M,
                    showSkeletonPlaceholder: O
                }))) : a().createElement(c.Ay, {
                    className: "".concat(A)
                }, a().createElement(Wt, {
                    data: B,
                    tableKey: k,
                    columns: n,
                    onRow: w,
                    forceExpandAllRows: N,
                    expandedRowRender: E,
                    itemKeyName: C,
                    isLoading: o,
                    loadingStyle: M,
                    showSkeletonPlaceholder: O
                })))
            };
            var $t = n("uqCI"),
                Kt = n("888e"),
                Gt = n("2PCm"),
                Yt = n("VKAp"),
                Zt = n("2eE9"),
                Qt = function(e) {
                    return "function" === typeof e
                },
                Xt = {
                    offset: 0,
                    x: !0
                },
                Jt = function(e) {
                    return e && "object" === typeof e && !(0, r.isValidElement)(e)
                },
                en = function(e, t) {
                    var n = Jt(e),
                        a = Jt(t);
                    if (n && n === a) {
                        var o = Object.keys(e),
                            i = Object.keys(t);
                        if (o.length === i.length) return Number(o.every((function(n) {
                            return en(e[n], t[n])
                        })))
                    } else if (Qt(e) && Qt(t) || (0, r.isValidElement)(e) && (0, r.isValidElement)(t)) return !0;
                    return Number(e === t)
                },
                tn = function(e) {
                    (0, Gt.A)(n, e);
                    var t = (0, Yt.A)(n);

                    function n(e) {
                        var r;
                        return (0, Kt.A)(this, n), (r = t.call(this, e)).setRefs = function(e) {
                            return function(t) {
                                r.$refs[e] = t
                            }
                        }, r.checkUpdate = function() {
                            return r.$refs.root && !r.unmount
                        }, r.checkViewport = function(e) {
                            var t = r.props,
                                a = t.check,
                                o = t.noLazy,
                                i = (0, $t.A)(r),
                                s = i.$refs.root,
                                c = i.index;
                            if (r.checkUpdate()) {
                                var l = (0, E.A)({}, Xt, a),
                                    u = l.offset,
                                    f = l.x;
                                o || (0, Zt.cH)(s, u, f) ? (delete n.instances[c], r.inViewPort(e)) : n.instances[c] = (0, $t.A)(r)
                            }
                        }, r.inViewPort = function() {}, r.equalUpdate = function(e, t) {
                            en(e, t) || r.checkViewport()
                        }, r.$refs = {}, r.index = n.count, n.count += 1, r
                    }
                    var r = n.prototype;
                    return r.componentDidUpdate = function(e) {
                        var t = (0, Vt.A)((0, E.A)({}, this.props), {
                                check: null
                            }),
                            n = (0, Vt.A)((0, E.A)({}, e), {
                                check: null
                            });
                        this.equalUpdate(n, t)
                    }, r.componentDidMount = function() {
                        this.checkViewport()
                    }, r.componentWillUnmount = function() {
                        delete n.instances[this.index], this.unmount = !0
                    }, n
                }(r.PureComponent);
            tn.instances = {}, tn.count = 0, tn.checkViewport = function() {
                var e = tn.instances;
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    n && n.checkViewport()
                }))
            };
            var nn = (0, Zt.nF)(tn.checkViewport, 200);
            window.addEventListener("resize", nn, !0), document.addEventListener("scroll", nn, !0), document.addEventListener("transitionend", nn, !0);
            var rn, an = (0, r.createContext)({}),
                on = function() {
                    return (0, r.useContext)(an)
                },
                sn = n("ezuS"),
                cn = "mobile",
                ln = "tablet",
                un = "desktop",
                fn = a().createContext((rn = {}, (0, sn.A)(rn, cn, !1), (0, sn.A)(rn, ln, !1), (0, sn.A)(rn, un, !0), rn)),
                dn = function() {
                    var e = (0, r.useContext)(fn),
                        t = e.mobile,
                        n = e.tablet,
                        a = e.desktop;
                    return (0, r.useMemo)((function() {
                        return {
                            isTablet: n,
                            isMobile: t,
                            isDesktop: a
                        }
                    }), [t, n, a])
                },
                pn = n("sViW"),
                mn = n("tEf9"),
                vn = n("Pz56"),
                hn = n.n(vn),
                gn = n("cKr8"),
                bn = n("yhUQ"),
                yn = n("C6y2"),
                wn = n("cJDP"),
                xn = n("w/Qz");
            const En = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), a().createElement("rect", {
                    width: 16,
                    height: 16,
                    rx: 8,
                    fill: "currentColor"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 11.117l-.883.878-3.122-3.117L4.883 12l-.878-.883L7.117 8 4 4.883l.883-.878 3.112 3.117L11.117 4l.873.883L8.878 8 12 11.117z",
                    fill: "#FEFEFE"
                }))
            };
            var An = n("ah/i"),
                kn = n("VA12"),
                Cn = (function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-setting/get-pnl-price-basis");
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.get)("/bapi/futures/v1/private/future/user-setting/get-pnl-price-basis-denominator");
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t, n) {
                        var r;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-setting/update-pnl-price-basis", t, n);
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t, n) {
                        var r;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-setting/update-pnl-price-basis-denominator", t, n);
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/public/future/landing/page/header-activity", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-setting/get-unit");
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/delivery/user-setting/get-unit");
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-setting/get-account-credit-config");
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
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                _n = function(e) {
                    return void 0 === e ? "" : Object.keys(e).reduce((function(t, n) {
                        return e[n] ? "".concat(t, "&").concat(n, "=").concat(e[n]) : t
                    }), "").replace(/^&/, "?")
                },
                Nn = function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/private/margin/account-details".concat(_n(t)));
                                case 2:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Sn = function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/margin/account-details".concat(_n(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        message: "error"
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Mn = (function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        success: !1,
                                        message: "error"
                                    }, e.prev = 1, e.next = 4, (0, kn.post)("/bapi/margin/v1/private/margin/enterCoolingOff", t);
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", n);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        success: !1,
                                        message: "error",
                                        data: {
                                            adjustedEquity: "",
                                            accountEquity: "",
                                            initialMargin: "",
                                            accountMaintMargin: "",
                                            virtualAvailable: "",
                                            uniMMR: "",
                                            pmUserType: ""
                                        }
                                    }, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/marginportfolio/uniaccount-indicate");
                                case 4:
                                    t = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        success: !1,
                                        message: "error",
                                        messageDetail: {}
                                    }, e.prev = 1, e.next = 4, (0, kn.post)("/bapi/margin/v1/private/margin/portfolio/close-account");
                                case 4:
                                    t = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/private/margin/portfolio/config");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/friendly/margin/asset/all");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/private/margin/adjust-margin-bar-info?bar=".concat(t));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r, a, o, i = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 0 && void 0 !== i[0] ? i[0] : {}, n = !1, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/accounts/v1/private/account/user/queryUserSignatureConfig", t);
                                case 5:
                                    r = e.sent, a = r.data, n = "true" === (null === (o = void 0 === a ? {} : a) || void 0 === o ? void 0 : o.status), e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 14:
                                    return e.abrupt("return", n);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 11]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {}, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/margin/quiz/pass-check");
                                case 4:
                                    n = e.sent.data, t = n, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
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
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/private/margin/account/flag/enabled");
                                case 2:
                                    return t = e.sent, n = t.data, r = void 0 === n ? [] : n, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.get)("/bapi/margin/v1/public/margin/asset-leverage-brackets");
                                case 2:
                                    return t = e.sent, n = t.data, r = void 0 === n ? [] : n, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-data/user-balance", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v6/private/future/user-data/user-balance", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                In = (function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/delivery/user-data/user-balance", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v2/private/delivery/user-data/user-balance", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                Rn = (function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, kn.post)("/bapi/margin/v1/private/margin/transfer-in", t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0.message);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, kn.post)("/bapi/margin/v1/private/margin/transfer-out", t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0.message);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t, n) {
                        var r, a, o, i;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.asset, a = "0", r) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 4:
                                    return e.prev = 4, e.next = 7, (0, kn.get)("/bapi/margin/v1/private/margin/max-transferable?asset=".concat(r), n);
                                case 7:
                                    o = e.sent, i = o.data.value, a = i || "0", e.next = 14;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(4);
                                case 14:
                                    return e.abrupt("return", a);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 12]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                On = (function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/future/user-data/user-balance", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v4/private/future/user-data/user-balance", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/delivery/user-data/user-balance", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v2/private/delivery/user-data/user-balance", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.get)("/bapi/futures/v1/private/delivery/user-data/get-all-max-withdraw-amount");
                                case 4:
                                    t = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === t || void 0 === t ? void 0 : t.data) || {});
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n, r, a = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = a.length > 1 && void 0 !== a[1] && a[1], e.prev = 2, e.next = 5, (0, kn.post)(n ? "/bapi/futures/v1/private/spot/user-data/getMaxWithdrawAmount" : "/bapi/futures/v1/private/future/user-data/getMaxWithdrawAmount", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || 0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                Tn = (function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v4/private/future/user-data/get-max-coin-swap-amount", t);
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || 0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n, r, a;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/future/user-data/get-asset-residual-deposit", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", null !== (a = null === r || void 0 === r || null === (n = r.data) || void 0 === n ? void 0 : n.residualDeposit) && void 0 !== a ? a : 0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                Ln = (function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/future/user-data/account-tier-commission", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || {});
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/future/user-data/account-tier-commission", t);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/delivery/user-data/account-tier-commission", t);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t, n, r = arguments;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
                                        symbol: ""
                                    }, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/futures/v1/private/future/user-data/brackets", t);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/user-daily-profit/getLast30DaysProfitStatistic", t);
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", n);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/delivery/user-data/getMaxWithdrawAmount", t);
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || 0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                Bn = (function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, kn.post)("/bapi/futures/v4/private/future/user-data/user-total-balance"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, kn.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-max-withdraw", t);
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || {});
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/transfer-in", t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0.message);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/transfer-out", t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0.message);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n, r, a, o;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.asset, r = t.symbol, a = "0", e.prev = 2, e.next = 5, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/transferable-amount/".concat(r, "?asset=").concat(n));
                                case 5:
                                    o = e.sent.data, a = o || "0", e.next = 11;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(2);
                                case 11:
                                    return e.abrupt("return", a);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                Dn = n("hi+Y"),
                Pn = n("NkzM"),
                Fn = n("zJWh"),
                zn = n("NsjG"),
                Vn = new Set(["EUR", "GBP"]),
                Un = "payRiskSafeInfo",
                jn = "payRiskSafeResult",
                Wn = n("LEke"),
                qn = n("kTuL"),
                Hn = n("HS2I"),
                $n = n("rwyx"),
                Kn = n("rR/7"),
                Gn = n("mXw3"),
                Yn = n("ycr1"),
                Zn = n("UhfZ"),
                Qn = n("afa+"),
                Xn = n("aeV/"),
                Jn = n("Hkrp"),
                er = function() {
                    var e = (0, Jn.s)((0, pn.A)(hn().mark((function e() {
                            var t;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Nn();
                                    case 2:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [], {
                            value: []
                        }),
                        t = e.value,
                        n = (0, A.A)(e, ["value"]);
                    return (0, Vt.A)((0, E.A)({}, n), {
                        marginAccountInfo: t
                    })
                };
            const tr = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.997 9.004h-2.009v6h2.009v-6zm-2.009-4h2.009v2.009h-2.009v-2.01z",
                    fill: "currentColor"
                }))
            };
            var nr = n("8SaB");
            const rr = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.012-16h-2.009v8h2.009V6zm-2.009 9.991h2.009V18h-2.009v-2.009z",
                    fill: "currentColor"
                }))
            };
            const ar = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm3.764-.03l4.399 4.331 7.234-7.235-1.414-1.414-5.854 5.855-2.951-2.95-1.414 1.413z",
                    fill: "currentColor"
                }))
            };
            var or = n("1Ckn");
            const ir = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M13 8V6h-2v2h2zM13 18v-8h-2v8h2z",
                    fill: "#76808F"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z",
                    fill: "#76808F"
                }))
            };
            var sr = {
                    info: tr,
                    error: nr.A,
                    warning: rr,
                    success: ar,
                    tips: or.A
                },
                cr = (0, r.forwardRef)((function(e, t) {
                    var n = e.children,
                        o = e.icon,
                        i = e.variant,
                        s = void 0 === i ? "tips" : i,
                        c = e.closable,
                        l = void 0 !== c && c,
                        u = e.showIcon,
                        f = void 0 === u || u,
                        d = e.onClose,
                        p = (0, A.A)(e, ["children", "icon", "variant", "closable", "showIcon", "onClose"]),
                        m = sr[s],
                        v = (0, r.isValidElement)(o) ? a().cloneElement(o, (0, E.A)({
                            size: 20
                        }, o.props), []) : a().createElement(m, {
                            size: 20
                        });
                    return a().createElement(yn.A, (0, x.A)({
                        tx: "alert",
                        variant: s,
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        ref: t,
                        width: "100%",
                        py: "xs",
                        px: "sm"
                    }, p), a().createElement(yn.A, {
                        alignItems: "flex-start"
                    }, f ? a().createElement(N.A, {
                        sx: {
                            py: "xs",
                            pr: "sm",
                            flexShrink: 0
                        }
                    }, v) : null, a().createElement(N.A, {
                        sx: {
                            py: "xs",
                            wordBreak: "break-word"
                        }
                    }, n)), l ? a().createElement(N.A, {
                        py: "xs",
                        pl: "xs",
                        __css: {
                            flexShrink: 0
                        }
                    }, a().createElement(ir, {
                        size: 12,
                        onClick: d,
                        cursor: "pointer"
                    })) : null)
                }));
            cr.displayName = "Alert";
            const lr = cr;
            var ur = function(e) {
                    var t = (0, Hn.useI18n)("asset-transfer"),
                        n = t.getI18nText,
                        a = t.i18n,
                        o = on(),
                        i = o.t,
                        s = o.i18n,
                        c = (0, r.useMemo)((function() {
                            return i || n
                        }), [i, n]),
                        l = (0, r.useMemo)((function() {
                            return s || a
                        }), [s, a]),
                        u = (0, r.useCallback)((function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = e ? "".concat(e, "-").concat(t) : t;
                            return c(r, n)
                        }), [e, c]);
                    return {
                        i18n: l,
                        getI18n: u
                    }
                },
                fr = function(e, t, n) {
                    for (var r = [], a = e.length, o = t.length, i = 0; i < a; i++)
                        for (var s = n(e[i]), c = 0; c < o; c++) {
                            if (s === n(t[c])) {
                                r.push(e[i]);
                                break
                            }
                        }
                    return r
                },
                dr = function(e, t) {
                    for (var n = e.length, r = 0; r < n; r++) {
                        var a = e[r];
                        if (t.indexOf(a) >= 0) return !0
                    }
                    return !1
                },
                pr = function(e) {
                    var t = Number(e.free || 0) + Number(e.locked || 0) + Number(e.freeze || 0) + Number(e.withdrawing || 0);
                    return (0, An.Ww)(t)
                },
                mr = "MARGIN",
                vr = function(e) {
                    return (Math.ceil(100 * e) / 100).toFixed(2)
                };
            const hr = function() {
                var e = on(),
                    t = e.from,
                    n = e.fromIsoSymbol,
                    o = e.isolatedPairs,
                    i = ur().getI18n,
                    s = er().marginAccountInfo,
                    c = (0, r.useMemo)((function() {
                        var e;
                        return null === (e = o.filter((function(e) {
                            return e.symbol === n
                        }))) || void 0 === e ? void 0 : e[0]
                    }), [o, n]),
                    l = (t === mr ? null === s || void 0 === s ? void 0 : s.transferOutBar : null === c || void 0 === c ? void 0 : c.transferOutBar) || "2",
                    u = parseFloat(Number(l || "2.0").toFixed(2)),
                    f = t === mr ? null === s || void 0 === s ? void 0 : s.marginLevel : null === c || void 0 === c ? void 0 : c.marginLevel;
                return t === mr || "ISOLATED_MARGIN" === t ? a().createElement(lr, {
                    variant: "warning"
                }, a().createElement(bn.A, {
                    lineHeight: "20px"
                }, i(t === mr ? "margin-risk-collateral-tips" : "margin-risk-not-collateral-tips", {
                    collateralMarginLevel: vr(null === s || void 0 === s ? void 0 : s.collateralMarginLevel),
                    marginLevel: vr(f),
                    transferOutBar: u
                }))) : null
            };
            var gr = n("wgY5"),
                br = n.n(gr),
                yr = n("QOOp");

            function wr() {
                var e = on(),
                    t = e.from,
                    n = e.to,
                    o = e.isolatedPairs,
                    i = e.toIsoSymbol,
                    s = e.activateAccounts,
                    c = e.coin,
                    l = (0, I.TK)().getMarginAssetsInfo,
                    u = ur("assetTransfer").getI18n,
                    f = "ISOLATED_MARGIN" === t || "ISOLATED_MARGIN" === n,
                    d = "MARGIN" === t || "MARGIN" === n,
                    p = (0, r.useMemo)((function() {
                        var e, t;
                        return null === o || void 0 === o || null === (e = o.filter) || void 0 === e || null === (t = e.call(o, (function(e) {
                            return e.symbol === i
                        }))) || void 0 === t ? void 0 : t[0]
                    }), [o, i]),
                    m = (0, r.useMemo)((function() {
                        var e, t, n, r, a = null === (r = null === (e = null === s || void 0 === s ? void 0 : s.filter((function(e) {
                            return "MARGIN" === e.accountType
                        }))) || void 0 === e || null === (t = e[0]) || void 0 === t || null === (n = t.assetBalances) || void 0 === n ? void 0 : n.filter((function(e) {
                            return e.asset === c
                        }))) || void 0 === r ? void 0 : r[0];
                        return a ? (0, E.A)({}, a, l(a.asset) || {}) : null
                    }), [s, c]);
                if (!d && !f) return null;
                if (d && !m) return null;
                if (f && !p) return null;
                if ("PREPARE_DELIST" === (d ? m.status : p.status)) {
                    var v = d ? m.asset : "".concat(p.base, "/").concat(p.quote),
                        h = d ? m.delistedTime : p.delistTime,
                        g = d ? "cross-delist" : "isolated-delist";
                    return a().createElement(yr.A, {
                        variant: "error"
                    }, a().createElement(bn.A, {
                        lineHeight: "20px",
                        fontSize: "14px"
                    }, u(g, {
                        interpolation: {
                            escapeValue: !1
                        },
                        pair: v,
                        delistTime: br()(Number(h)).format("YYYY-MM-DD HH:mm (UTCZ)")
                    })))
                }
                return null
            }
            const xr = a().memo(wr);
            var Er = n("rLOQ"),
                Ar = n("UTgX"),
                kr = n("YHuv"),
                Cr = n("vM3x"),
                _r = n.n(Cr),
                Nr = function(e, t, n) {
                    if ("BTC" === e) return t;
                    var r = new(_r())(0),
                        a = new(_r())(t),
                        o = n.find((function(t) {
                            return t.symbol === "".concat("BTC").concat(e)
                        }));
                    if (o && o.price) r = a.dividedBy(o.price);
                    else {
                        var i = n.find((function(t) {
                            return t.symbol === "".concat(e).concat("BTC")
                        }));
                        i && i.price && (r = a.times(i.price))
                    }
                    return r.toFixed(8)
                },
                Sr = n("HeEp"),
                Mr = n("hQCL"),
                Ir = n("N87B");
            const Rr = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z",
                    fill: "currentColor"
                }))
            };
            const Or = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M3 10.982c0 3.845 3.137 6.982 6.982 6.982 1.518 0 3.036-.506 4.149-1.416L18.583 21 20 19.583l-4.452-4.452c.81-1.113 1.416-2.631 1.416-4.149 0-1.922-.81-3.643-2.023-4.958C13.726 4.81 11.905 4 9.982 4 6.137 4 3 7.137 3 10.982zM13.423 7.44a4.819 4.819 0 011.416 3.441c0 1.315-.506 2.53-1.416 3.44a4.819 4.819 0 01-3.44 1.417 4.819 4.819 0 01-3.441-1.417c-1.012-.81-1.518-2.023-1.518-3.339 0-1.315.506-2.53 1.416-3.44.911-1.012 2.227-1.518 3.542-1.518 1.316 0 2.53.506 3.44 1.416z",
                    fill: "currentColor"
                }))
            };
            var Tr = function(e) {
                var t = e.value,
                    n = e.renderValue,
                    r = e.open,
                    o = (0, A.A)(e, ["value", "renderValue", "open"]);
                return a().createElement(yn.A, (0, x.A)({
                    sx: {
                        width: "100%",
                        height: "48px",
                        bg: "bg3",
                        px: "ls",
                        borderRadius: "4px",
                        cursor: "pointer",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, o), a().createElement(N.A, {
                    flex: "1"
                }, n() || t), a().createElement(Ir.A, {
                    sx: {
                        transform: r ? "rotate(180deg)" : "rotate(0)",
                        color: "t.third"
                    },
                    size: 16
                }))
            };
            const Lr = function(e) {
                var t = e.label,
                    n = e.listTitle,
                    o = e.value,
                    i = e.renderValue,
                    s = e.hideSearch,
                    c = void 0 !== s && s,
                    l = e.searchPlaceholder,
                    u = e.listData,
                    f = e.onChange,
                    d = (0, k.A)((0, r.useState)(!1), 2),
                    p = d[0],
                    m = d[1],
                    v = (0, k.A)((0, r.useState)(""), 2),
                    h = v[0],
                    g = v[1],
                    b = (0, r.useCallback)((function(e) {
                        m(!1), f && f(e)
                    }), []),
                    y = (0, r.useCallback)((function() {
                        m(!1), g("")
                    }), []),
                    w = (0, r.useMemo)((function() {
                        if (!h) return u;
                        var e = new RegExp(h, "i");
                        return u.filter((function(t) {
                            var n = t.name;
                            return e.test(n)
                        }))
                    }), [h, u]);
                return a().createElement(a().Fragment, null, t && a().createElement(bn.A, {
                    sx: {
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "t.secondary",
                        mb: "minor"
                    }
                }, t), a().createElement(Tr, {
                    value: o,
                    renderValue: i,
                    open: p,
                    onClick: function() {
                        return m(!0)
                    }
                }), a().createElement(Sr.A, {
                    visible: p,
                    onClick: y
                }), a().createElement(Mr.A, {
                    visible: p,
                    direction: "bottom",
                    outerClick: y,
                    bg: "popupBg",
                    childProps: {
                        sx: {
                            borderRadius: "24px 24px 0 0"
                        }
                    }
                }, a().createElement(N.A, {
                    sx: {
                        maxHeight: "500px",
                        height: "500px",
                        overflow: "hidden"
                    }
                }, a().createElement(yn.A, {
                    flexDirection: "column",
                    p: "sm",
                    height: "100%"
                }, a().createElement(yn.A, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "4px",
                    mb: "10px"
                }, a().createElement(bn.A, {
                    sx: {
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "t.primary"
                    }
                }, n), a().createElement(Rr, {
                    size: 16,
                    color: "t.third",
                    onClick: function() {
                        return m(!1)
                    }
                })), !c && a().createElement(N.A, {
                    mb: "xs",
                    width: 1
                }, a().createElement(Qn.A, {
                    variant: "filled",
                    boxProps: {
                        width: "100%"
                    },
                    placeholder: l,
                    value: h,
                    defaultValue: h,
                    onChange: function(e) {
                        return g((e.target.value || "").replace(/\W/g, ""))
                    },
                    autoComplete: "off",
                    prefix: a().createElement(Or, {
                        color: "t.placeholder",
                        ml: "8px",
                        mr: "-8px",
                        sx: {
                            verticalAlign: "middle"
                        }
                    }),
                    suffix: !!h && a().createElement(En, {
                        size: 16,
                        color: "t.placeholder",
                        sx: {
                            cursor: "pointer",
                            verticalAlign: "middle",
                            mr: "xs"
                        },
                        onClick: function() {
                            return g("")
                        }
                    })
                })), a().createElement(N.A, {
                    flex: "1",
                    sx: {
                        overflow: "scroll",
                        li: {
                            listStyleType: "none",
                            "> div": {
                                height: "100%",
                                alignItems: "center"
                            }
                        }
                    }
                }, w.map((function(e) {
                    var t = e.value,
                        n = e.name,
                        r = e.desc,
                        i = e.prefix,
                        s = e.suffix,
                        c = e.disabled;
                    return a().createElement(kr.c, {
                        height: 48,
                        key: t,
                        value: "".concat(t),
                        onClick: function() {
                            c || b(t)
                        },
                        bg: "popupBg",
                        prefix: i,
                        suffix: s
                    }, a().createElement(bn.A, {
                        sx: {
                            opacity: c ? .4 : 1,
                            fontSize: "14px",
                            color: t === o ? "t.yellow" : "t.primary"
                        }
                    }, n), (null === r || void 0 === r ? void 0 : r.length) ? a().createElement(bn.A, {
                        sx: {
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "t.third"
                        }
                    }, r) : null)
                })))))))
            };
            const Br = function(e) {
                var t = e.assetLogo,
                    n = e.assetCode,
                    r = e.assetName,
                    o = e.children,
                    i = e.logoSize,
                    s = void 0 === i ? 20 : i,
                    c = (0, A.A)(e, ["assetLogo", "assetCode", "assetName", "children", "logoSize"]);
                return a().createElement(yn.A, (0, x.A)({}, c, {
                    __css: {
                        lineHeight: 1,
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }
                }), a().createElement(yn.A, {
                    sx: {
                        alignItems: "center",
                        flex: "1"
                    }
                }, !!t && a().createElement(Er.A, {
                    variant: "avatar",
                    src: t,
                    sx: {
                        mr: "xs",
                        flex: "none",
                        width: s,
                        height: s,
                        border: "1px solid",
                        borderColor: "lines.light"
                    }
                }), a().createElement(bn.A, {
                    sx: {
                        color: "t.primary",
                        flex: "none"
                    },
                    children: n
                }), r ? a().createElement(bn.A, {
                    as: "small",
                    sx: {
                        flex: 1,
                        ml: "xs",
                        mr: "sm",
                        mt: "2px",
                        color: "t.third",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 1
                    },
                    children: "".concat(r)
                }) : null), o)
            };
            var Dr = {
                    "& .coin-name": {
                        fontSize: "12px",
                        color: "t.third",
                        lineHeight: "16px",
                        ml: "minor",
                        mb: "1px"
                    },
                    "& .price-free": {
                        fontSize: "12px",
                        color: "t.third",
                        lineHeight: "12px"
                    },
                    "& .coin-text-primary": {
                        color: "t.primary"
                    },
                    "& .coin-text-yellow": {
                        color: "t.yellow"
                    },
                    "& .coin-logo": {
                        width: "20px",
                        height: "20px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "line",
                        borderRadius: "99999px"
                    }
                },
                Pr = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        o = e.data,
                        i = e.fiatSymbol,
                        s = e.btcFiatPrice,
                        c = e.priceIndex,
                        l = dn().isMobile,
                        u = ur("assetTransfer").getI18n,
                        f = (0, r.useMemo)((function() {
                            return o.filter((function(e) {
                                return e.coin === t
                            }))[0] || {
                                coin: "",
                                logoUrl: "",
                                name: ""
                            }
                        }), [t, o]);
                    (0, r.useEffect)((function() {
                        if (!o.find((function(e) {
                                return e.coin === t
                            })) && o.length) {
                            var e = o.reduce((function(e, t) {
                                return e.transferBtc - t.transferBtc > 0 ? e : t
                            }));
                            e && n && n(e.coin)
                        }
                    }), []), console.log("data coinselector", o, t);
                    var d = (0, r.useMemo)((function() {
                        return l ? o.map((function(e) {
                            var t = e.coin,
                                n = e.name,
                                r = e.logoUrl;
                            return {
                                value: t,
                                name: t,
                                desc: n,
                                prefix: a().createElement(Er.A, {
                                    src: r,
                                    variant: "avatar",
                                    sx: {
                                        width: "20px",
                                        height: "20px",
                                        borderWidth: "1px",
                                        borderStyle: "solid",
                                        borderColor: "line"
                                    }
                                })
                            }
                        })) : o
                    }), [l, o]);
                    return l ? a().createElement(Lr, {
                        listTitle: u("select-selectCoin"),
                        searchPlaceholder: u("input-placeholder-searchCoin"),
                        value: t,
                        renderValue: function() {
                            return a().createElement(Br, {
                                assetLogo: f.logoUrl,
                                assetCode: f.coin,
                                assetName: f.name
                            })
                        },
                        listData: d,
                        onChange: n
                    }) : a().createElement(Ar.A, {
                        size: "lg",
                        value: t,
                        onChange: n,
                        itemHeight: 52,
                        renderValue: function() {
                            return a().createElement(Br, {
                                assetLogo: f.logoUrl,
                                assetCode: f.coin,
                                assetName: f.name
                            })
                        },
                        empty: null,
                        disabled: !d.length,
                        placeholder: u("select-placeholder"),
                        limit: 3,
                        lazy: !0,
                        sx: Dr
                    }, d.map((function(e) {
                        var n = e.coin,
                            r = e.logoUrl,
                            o = e.name,
                            l = e.free;
                        return a().createElement(kr.c, {
                            key: n,
                            prefix: a().createElement("img", {
                                className: "coin-logo",
                                src: r
                            }),
                            value: n
                        }, a().createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, a().createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, a().createElement("div", {
                            className: n === t ? "coin-text-yellow" : "coin-text-primary"
                        }, n), " ", a().createElement("div", {
                            className: "coin-name"
                        }, o)), i && a().createElement("div", {
                            style: {
                                textAlign: "right"
                            }
                        }, a().createElement("div", {
                            className: "coin-text-primary"
                        }, l || "0.00"), !!l && a().createElement("div", {
                            className: "price-free"
                        }, i, function(e) {
                            var t = e.coin,
                                n = e.amount,
                                r = e.btcFiatPrice,
                                a = e.priceIndex,
                                o = Nr(t, n, a);
                            return o ? (0, An.lw)(o, r).toFixed(2) : ""
                        }({
                            coin: n,
                            amount: l,
                            btcFiatPrice: s,
                            priceIndex: c
                        })))))
                    })))
                };
            const Fr = a().memo(Pr);
            var zr = {
                    width: "49%",
                    padding: "12px 16px",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "bg3",
                    bg: "bg3",
                    cursor: "pointer",
                    "&.selected": {
                        borderColor: "primary"
                    }
                },
                Vr = {
                    color: "t.third",
                    fontSize: "12px",
                    lineHeight: "12px"
                },
                Ur = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        r = e.data,
                        o = e.fiatSymbol,
                        i = e.btcFiatPrice,
                        s = e.priceIndex;
                    return a().createElement(yn.A, {
                        justifyContent: "space-between"
                    }, r.map((function(e) {
                        var r = e.logoUrl,
                            c = e.coin,
                            l = e.props;
                        return a().createElement(yn.A, {
                            key: c,
                            sx: zr,
                            className: t === c ? "selected" : "",
                            onClick: function() {
                                return n && n(c)
                            }
                        }, a().createElement(N.A, null, !!r && a().createElement(Er.A, {
                            variant: "avatar",
                            src: r,
                            sx: {
                                mr: "xs",
                                flex: "none",
                                width: "32px",
                                height: "32px",
                                border: "1px solid",
                                borderColor: "lines.light"
                            }
                        })), a().createElement(N.A, null, a().createElement(yn.A, {
                            alignItems: "center"
                        }, a().createElement(N.A, {
                            mr: "2px"
                        }, c)), a().createElement(N.A, {
                            fontSize: "16px"
                        }, pr(l) || "0.00"), !!Number(l.free) && a().createElement(N.A, {
                            sx: Vr
                        }, o, function(e) {
                            var t = e.coin,
                                n = e.amount,
                                r = e.btcFiatPrice,
                                a = e.priceIndex,
                                o = Nr(t, n, a);
                            return o ? (0, An.lw)(o, r).toFixed(2) : ""
                        }({
                            coin: c,
                            amount: pr(l),
                            btcFiatPrice: i,
                            priceIndex: s
                        }))))
                    })))
                };
            const jr = a().memo(Ur);
            var Wr = n("XMC1"),
                qr = n("L2rj"),
                Hr = n("dHLp"),
                $r = n("tkpl"),
                Kr = n("FqNu"),
                Gr = n("ht0d"),
                Yr = n("PA8z"),
                Zr = function(e) {
                    var t = e.service,
                        n = e.argName,
                        r = e.responseName;
                    return function() {
                        var e = (0, pn.A)(hn().mark((function e(a) {
                            var o, i = arguments;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = i.length > 1 && void 0 !== i[1] ? i[1] : Wr.xc, e.abrupt("return", new Promise((function(e, i) {
                                            var s;
                                            (0, Wr.$s)() ? ((0, qr.mS)(), (0, Yr.Vw)((function() {
                                                return s = window.setTimeout((function() {
                                                    e({
                                                        error: {
                                                            type: "TIMEOUT"
                                                        }
                                                    })
                                                }), 1e3 * o), $r.j
                                            })), (0, Yr.zf)((function() {
                                                return e({
                                                    error: {
                                                        type: "WS_CONNECTION_TIMEOUT"
                                                    }
                                                }), $r.j
                                            })), (0, Yr.TH)((function() {
                                                return e({
                                                    error: {
                                                        type: "WS_ABNORMAL_CLOSE"
                                                    }
                                                }), $r.j
                                            })), (0, Wr.lM)((function() {
                                                return e({
                                                    error: {
                                                        type: "GET_TOKEN_ERROR"
                                                    }
                                                }), $r.j
                                            })), (0, Hr.Ts)((function() {
                                                return (0, Kr.Em)({
                                                    payload: (0, sn.A)({
                                                        reqAction: Gr.$.SERVICE_REQ,
                                                        service: t
                                                    }, n, a),
                                                    callback: function(t) {
                                                        clearTimeout(s), e("error" in t ? t : {
                                                            data: t[r]
                                                        })
                                                    }
                                                })
                                            }))) : i(Error("ws-http-sdk: need to init websocket before use"))
                                        })));
                                    case 2:
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
                Qr = (function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n, r, a, o, i, s, c;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = !1, r = "", a = "", e.prev = 3, e.next = 6, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/create-isolated-margin-user", t);
                                case 6:
                                    o = e.sent, i = o.success, s = o.code, c = o.message, i || (r = s, a = c), n = i, e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(3), r = e.t0.message;
                                case 17:
                                    return e.abrupt("return", [n, r, a]);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 14]
                        ])
                    })))
                }(), function() {
                    var e = (0, pn.A)(hn().mark((function e(t) {
                        var n, r, a, o, i;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-details".concat(_n(t)));
                                case 4:
                                    r = e.sent, a = r.success, o = r.data, i = void 0 === o ? [] : o, a && (n = i), e.next = 13;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(1);
                                case 13:
                                    return e.abrupt("return", n);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i, s;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = 10, r = function(e) {
                                    return Math.min(Math.floor(e / 1e3), n)
                                }, a = (0, Wr.UE)(), o = (0, Wr.u0)(), i = Date.now(), s = function(e) {
                                    var s = e ? 2 * n : n;
                                    return (0, kn.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-details".concat(_n(t))).then((function() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            n = r(Date.now() - i);
                                        return a({
                                            type: n === s ? "SUCCESS_TIMEOUT" : "SUCCESS",
                                            ws_sessionId: o,
                                            responseFrom: "http",
                                            fallback: e.toString(),
                                            request: "isolatedMarginAccountReq",
                                            duration: n
                                        }), (null === t || void 0 === t ? void 0 : t.success) && (null === t || void 0 === t ? void 0 : t.data) ? null === t || void 0 === t ? void 0 : t.data : []
                                    })).catch((function(t) {
                                        throw a({
                                            type: "ERROR",
                                            ws_sessionId: o,
                                            request: "isolatedMarginAccountReq",
                                            fallback: e.toString(),
                                            responseFrom: "http",
                                            error: JSON.stringify(t.message),
                                            duration: r(Date.now() - i)
                                        }), t
                                    }))
                                }, e.next = 8, (0, Wr.hT)()("cr00");
                            case 8:
                                if (e.sent) {
                                    e.next = 11;
                                    break
                                }
                                return a({
                                    type: "NO_CR00"
                                }), e.abrupt("return", []);
                            case 11:
                                return e.abrupt("return", (0, Wr.Bz)() ? s(!1) : Zr({
                                    service: "isolated-margin",
                                    argName: "isolatedMarginAccountReq",
                                    responseName: "isolatedMarginAccountResp"
                                })(t || {}, n).then((function(e) {
                                    return "error" in e ? (a((0, E.A)({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        ws_sessionId: o,
                                        duration: r(Date.now() - i)
                                    }, e.error)), s(!0)) : (a({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        type: "SUCCESS",
                                        duration: r(Date.now() - i),
                                        ws_sessionId: o
                                    }), e.data.isolatedMarginAccountDetail || [])
                                })).catch((function(e) {
                                    return a({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        type: "ERROR",
                                        ws_sessionId: o,
                                        error: JSON.stringify(e.message),
                                        duration: r(Date.now() - i)
                                    }), s(!0)
                                })));
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-asset-position?period=".concat(t));
                            case 4:
                                r = e.sent, a = r.success, o = r.data, i = void 0 === o ? [] : o, a && (n = i), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", n);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a, o;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-trading-position");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, o = void 0 === a ? [] : a, r && (t = o), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", t);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a, o;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-summary");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, o = void 0 === a ? [] : a, r && (t = o), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", t);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = {
                                    beginDate: "",
                                    profits: {
                                        BTC: "0.00000000",
                                        USDT: "0.00000000"
                                    }
                                }, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/profit?period=".concat(t));
                            case 4:
                                r = e.sent, a = r.success, o = r.data, i = void 0 === o ? {} : o, a && (n = i), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", n);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = {
                                    total: 0
                                }, e.prev = 1, e.next = 4, (0, kn.post)("/bapi/composite/v1/private/promo/voucher/pageQuery", (0, E.A)({
                                    voucherStatus: "ENABLE",
                                    voucherSubType: "MARGIN_LOAN"
                                }, t));
                            case 4:
                                r = e.sent, a = r.success, o = r.data, i = void 0 === o ? {
                                    total: 0
                                } : o, a && (n = i), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", n);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !0, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/account-enable/".concat(t));
                            case 5:
                                a = e.sent, o = a.success, i = a.message, n = !o, r = i, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), r = e.t0.message;
                            case 15:
                                return e.abrupt("return", [n, r]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !0, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/account-disable/".concat(t));
                            case 5:
                                a = e.sent, o = a.success, i = a.message, n = !o, r = i, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), r = e.t0.message;
                            case 15:
                                return e.abrupt("return", [n, r]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a, o;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !0, e.prev = 2, e.next = 5, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/accounts-disable");
                            case 5:
                                r = e.sent, a = r.success, o = r.message, t = !a, n = o, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), n = e.t0.message;
                            case 15:
                                return e.abrupt("return", [t, n]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    enableCount: 0,
                                    limitCount: 0,
                                    canDisableAccounts: !1
                                }, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/account-limit-config");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, r && (t = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !1, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/account-disable-check/".concat(t));
                            case 4:
                                r = e.sent, a = r.success, o = r.data, n = a && o.canDisable, e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", n);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/public/isolated-margin/account-limit");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, r && (t = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r, a;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    data: [],
                                    endTime: 0
                                }, e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/trade-position");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, r && (t = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 2, e.next = 5, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/cover-config", t);
                            case 5:
                                a = e.sent, o = a.message, i = a.success, n = i, r = o, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), console.log("error....", e.t0);
                            case 15:
                                return e.abrupt("return", [n, r]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v1/private/isolated-margin/bar/get-call-bar");
                            case 4:
                                n = e.sent, r = n.data, n.success && Array.isArray(r) && (t = r), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e() {
                    var t, n, r;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, kn.get)("/bapi/margin/v2/private/isolated-margin/bar/get-call-bar");
                            case 4:
                                n = e.sent, r = n.data, n.success && r && (t = r), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !1, e.prev = 1, e.next = 4, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/bar/reset-call-bar", {
                                    ratio: t
                                });
                            case 4:
                                r = e.sent, n = r.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", n);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !1, e.prev = 1, e.next = 4, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/bar/set-call-bar", t);
                            case 4:
                                r = e.sent, n = r.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", n);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, pn.A)(hn().mark((function e(t) {
                    var n, r, a, o, i = arguments;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = i.length > 1 && void 0 !== i[1] ? i[1] : "24H", r = [!1, ""], e.prev = 2, e.next = 5, (0, kn.post)("/bapi/margin/v1/private/isolated-margin/bar/set-call-bars", {
                                    callBars: t,
                                    callFrequency: n
                                });
                            case 5:
                                a = e.sent, r = (null === a || void 0 === a ? void 0 : a.success) ? [!0, ""] : [!1, null !== (o = null === a || void 0 === a ? void 0 : a.message) && void 0 !== o ? o : ""], e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(2);
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 9]
                    ])
                })))
            }();

            function Xr(e, t) {
                return Jr.apply(this, arguments)
            }

            function Jr() {
                return (Jr = (0, pn.A)(hn().mark((function e(t, n) {
                    var r, a, o;
                    return hn().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                r = [], e.t0 = t, e.next = "MAIN" === e.t0 ? 4 : "MARGIN" === e.t0 ? 11 : "ISOLATED_MARGIN" === e.t0 ? 16 : 23;
                                break;
                            case 4:
                                return e.next = 6, (0, Dn.m2)();
                            case 6:
                                if (e.t1 = e.sent, e.t1) {
                                    e.next = 9;
                                    break
                                }
                                e.t1 = [];
                            case 9:
                                return r = e.t1, e.abrupt("break", 24);
                            case 11:
                                return e.next = 13, Nn();
                            case 13:
                                return a = e.sent, r = (null === a || void 0 === a ? void 0 : a.userAssets) || [], e.abrupt("break", 24);
                            case 16:
                                if (n) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 18:
                                return e.next = 20, Qr({
                                    requireCoupon: !0,
                                    symbols: "".concat(n)
                                });
                            case 20:
                                return o = e.sent, r = Array.isArray(o) ? [o[0].base, o[0].quote] : [], e.abrupt("break", 24);
                            case 23:
                                return e.abrupt("break", 24);
                            case 24:
                                return e.abrupt("return", r);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ea = n("QhsC");
            const ta = function(e) {
                var t = e.label,
                    n = e.children,
                    r = e.mt;
                return a().createElement(N.A, {
                    sx: {
                        mt: r || "md"
                    }
                }, t && a().createElement(ea.A, null, t), n)
            };
            const na = function(e) {
                return a().createElement(xn.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M7.5 3h3v18.5l-7-7h4V3zM16.5 21h-3V2.5l7 7h-4V21z",
                    fill: "currentColor"
                }))
            };
            var ra = function(e) {
                var t = e.color,
                    n = (0, A.A)(e, ["color"]);
                return a().createElement(N.A, (0, x.A)({
                    sx: {
                        width: "5px",
                        height: "5px",
                        borderRadius: "100%",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: t
                    }
                }, n))
            };
            const aa = function(e) {
                var t = e.onClick;
                return a().createElement(yn.A, {
                    sx: {
                        width: "32px",
                        position: "relative",
                        py: "md",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, a().createElement(ra, {
                    color: "buy"
                }), a().createElement(N.A, {
                    sx: {
                        flex: 1,
                        width: 0,
                        borderWidth: "0 1px 0 0",
                        borderStyle: "dashed",
                        borderColor: "line"
                    }
                }), a().createElement(ra, {
                    color: "sell"
                }), a().createElement(yn.A, {
                    onClick: t,
                    sx: {
                        cursor: "pointer",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "32px",
                        bg: "bg3",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        "&:hover": {
                            "svg, svg > path": {
                                color: "primary",
                                fill: "primary"
                            }
                        }
                    }
                }, a().createElement(na, {
                    size: 16,
                    color: "t.third"
                })))
            };
            const oa = function() {
                var e = ur("assetTransfer").getI18n;
                return a().createElement(bn.A, {
                    sx: {
                        ml: "sm",
                        fontSize: "12px",
                        color: "t.secondary",
                        ":before": {
                            content: "' '",
                            display: "inline-block",
                            width: "8px",
                            height: "8px",
                            borderRadius: "100%",
                            bg: "error",
                            opacity: "0.4",
                            mr: "minor"
                        }
                    }
                }, e("tag-inactive"))
            };
            var ia = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = e.includes(t) || "PORTFOLIO_MARGIN" === t && e.includes("MARGIN");
                return !n
            };
            const sa = function(e) {
                var t = e.value,
                    n = e.onChange,
                    o = e.data,
                    i = e.activatdAccounts,
                    s = e.sx,
                    c = e.uni,
                    l = void 0 !== c && c,
                    u = dn().isMobile,
                    f = ur("assetTransfer").getI18n,
                    d = (0, r.useCallback)((function(e) {
                        if (!e) return null;
                        var t = e.toLocaleLowerCase();
                        if (l) return f("account-".concat(t).concat("main" !== t ? "-uni" : ""));
                        var n = t.split("_").join("");
                        return f("account-".concat(n))
                    }), [f]),
                    p = (0, r.useMemo)((function() {
                        return u ? o.map((function(e) {
                            var t = ia(i, e),
                                n = t ? a().createElement(oa, null) : null;
                            return {
                                value: e,
                                name: d(e),
                                suffix: n,
                                disabled: t
                            }
                        })) : o
                    }), [u, o, i]);
                return on().fixWalletType ? a().createElement(yn.A, {
                    sx: {
                        width: "100%",
                        height: "48px",
                        bg: "bg3",
                        px: "ls",
                        borderRadius: "4px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, a().createElement(N.A, {
                    flex: "1"
                }, d(t))) : u ? a().createElement(Lr, {
                    hideSearch: !0,
                    listTitle: f("select-selectAccount"),
                    value: t,
                    renderValue: function() {
                        return d(t)
                    },
                    listData: p,
                    onChange: n
                }) : a().createElement(Ar.A, {
                    hideSearch: !0,
                    size: "lg",
                    placeholder: f("select-placeholder"),
                    value: t,
                    onChange: n,
                    renderValue: function(e) {
                        return d(e)
                    },
                    limit: 5,
                    sx: (0, E.A)({
                        li: {
                            opacity: 1
                        }
                    }, s)
                }, p.map((function(e) {
                    var n = ia(i, e),
                        r = e === t;
                    return a().createElement(kr.c, {
                        key: e,
                        value: e,
                        disabled: n,
                        suffix: n ? a().createElement(oa, null) : null,
                        title: d(e)
                    }, a().createElement(bn.A, {
                        sx: {
                            opacity: n ? .4 : 1,
                            color: r ? "t.yellow" : "t.primary"
                        }
                    }, d(e)))
                })))
            };
            var ca = function(e) {
                var t = e.value,
                    n = e.onChange,
                    o = e.pairs,
                    i = dn().isMobile,
                    s = ur("assetTransfer").getI18n,
                    c = (0, r.useMemo)((function() {
                        return i ? o.map((function(e) {
                            var t = e.symbol;
                            return {
                                value: t,
                                name: t,
                                desc: ""
                            }
                        })) : o
                    }), [i, o]),
                    l = (0, r.useCallback)((function(e) {
                        console.log("run change symbol", e), n(e)
                    }), [n]);
                return i ? a().createElement(Lr, {
                    listTitle: s("isolated-pair"),
                    searchPlaceholder: s("select-placeholder"),
                    value: t,
                    listData: c,
                    onChange: l,
                    renderValue: function(e) {
                        return e
                    }
                }) : a().createElement(Ar.A, {
                    size: "lg",
                    value: t,
                    onChange: l,
                    empty: null,
                    disabled: !c.length,
                    placeholder: s("select-placeholder")
                }, c.map((function(e) {
                    var n = e.symbol,
                        r = e.baseProps,
                        o = e.quoteProps,
                        i = e.base,
                        s = e.quote;
                    return a().createElement(kr.c, {
                        key: n,
                        value: n
                    }, a().createElement(N.A, null, a().createElement(N.A, {
                        color: n === t ? "primary" : "t.primary"
                    }, i, "/", s), a().createElement(N.A, {
                        sx: {
                            fontSize: "12px",
                            color: "t.third",
                            lineHeight: "12px"
                        }
                    }, Number(null === r || void 0 === r ? void 0 : r.free).toFixed(2) || "0.00", "/", Number(null === o || void 0 === o ? void 0 : o.free).toFixed(2) || "0.00")))
                })))
            };
            const la = a().memo(ca);
            var ua = "ISOLATED_MARGIN",
                fa = function(e) {
                    var t = e.revertFromAndTo,
                        n = e.from,
                        o = e.to,
                        i = e.allFrom,
                        s = e.allTo,
                        c = e.fromIsoSymbol,
                        l = e.setFromIsoSymbol,
                        u = e.toIsoSymbol,
                        f = e.setToIsoSymbol,
                        d = e.filterFromSymbols,
                        p = e.filterToSymbols,
                        m = e.handleFromChange,
                        v = e.activatdAccounts,
                        h = e.handleToChange,
                        g = e.t,
                        b = dn().isMobile,
                        y = on().transferKey;
                    console.log("isolate selector", u, p);
                    var w = (0, r.useCallback)((function(e) {
                            y && localStorage.setItem("".concat(y, "-isolatedTo"), e), f(e)
                        }), []),
                        x = (0, r.useCallback)((function(e) {
                            y && localStorage.setItem("".concat(y, "-isolatedFrom"), e), l(e)
                        }), []),
                        E = (0, qn.Z)((function(e) {
                            return "from" === e && n === ua ? a().createElement(N.A, {
                                width: ["100%", "156px"],
                                flex: "none",
                                ml: [0, "16px"]
                            }, a().createElement(ta, {
                                label: b ? null : g("isolated-pair"),
                                mt: b ? "8px" : "0"
                            }, a().createElement(la, {
                                value: c,
                                onChange: x,
                                pairs: d
                            }))) : "to" === e && o === ua ? a().createElement(N.A, {
                                width: ["100%", "156px"],
                                flex: "none",
                                ml: [0, "16px"]
                            }, a().createElement(ta, {
                                label: b ? null : g("isolated-pair"),
                                mt: b ? "8px" : "24px"
                            }, a().createElement(la, {
                                value: u,
                                onChange: w,
                                pairs: p
                            }))) : null
                        }));
                    return a().createElement(yn.A, {
                        sx: {
                            p: "md",
                            borderStyle: "solid",
                            borderWidth: "0 0 1px",
                            borderColor: "line"
                        }
                    }, a().createElement(yn.A, {
                        mt: "20px",
                        mr: "xs"
                    }, a().createElement(aa, {
                        onClick: t
                    })), a().createElement(N.A, {
                        flex: 1
                    }, a().createElement(yn.A, {
                        width: "100%",
                        flexWrap: "wrap"
                    }, a().createElement(N.A, {
                        flex: ["none", "1"],
                        width: ["100%", "auto"]
                    }, a().createElement(ta, {
                        label: g("select-from"),
                        mt: "0"
                    }, a().createElement(sa, {
                        value: n,
                        data: Object.keys(i),
                        onChange: m,
                        activatdAccounts: v
                    }))), E("from")), a().createElement(yn.A, {
                        width: "100%",
                        flexWrap: "wrap"
                    }, a().createElement(N.A, {
                        flex: ["none", "1"],
                        width: ["100%", "auto"]
                    }, a().createElement(ta, {
                        label: g("select-to")
                    }, a().createElement(sa, {
                        value: o,
                        data: Object.keys(s),
                        onChange: h,
                        activatdAccounts: v
                    }))), E("to"))))
                };
            const da = a().memo(fa);
            var pa = n("FahE"),
                ma = n("BPZ0"),
                va = n("crMl"),
                ha = n("auY1"),
                ga = n("eg+D"),
                ba = n("YqUr"),
                ya = n("qBCg"),
                wa = {
                    width: "100%",
                    color: "t.third",
                    padding: "0 11px",
                    alignItems: "center"
                },
                xa = {
                    ml: "8px",
                    minWidth: "40px"
                },
                Ea = {
                    CARD: pa.A,
                    DELIVERY: ma.A,
                    FUTURE: va.A,
                    ISOLATED_MARGIN: ha.A,
                    MARGIN: ga.A,
                    MAIN: ba.A
                },
                Aa = function(e) {
                    var t = Ea[e] || ba.A;
                    return a().createElement(t, {
                        size: 24
                    })
                },
                ka = function(e) {
                    var t = e.revertFromAndTo,
                        n = e.from,
                        r = e.to,
                        o = e.allFrom,
                        i = e.allTo,
                        s = e.handleFromChange,
                        c = e.activatdAccounts,
                        l = e.handleToChange,
                        u = e.t,
                        f = e.uni,
                        d = void 0 !== f && f;
                    return a().createElement(yn.A, {
                        sx: {
                            p: "md",
                            borderStyle: "solid",
                            borderWidth: "0 0 1px",
                            borderColor: "line"
                        }
                    }, a().createElement(N.A, {
                        sx: {
                            flex: 1,
                            borderRadius: "4px",
                            bg: "bg3"
                        }
                    }, a().createElement(yn.A, {
                        sx: wa
                    }, Aa(n), a().createElement(ea.A, {
                        sx: xa
                    }, u("select-from")), a().createElement(sa, {
                        sx: {
                            flex: 1,
                            border: "none"
                        },
                        value: n,
                        data: Object.keys(o),
                        onChange: s,
                        activatdAccounts: c,
                        uni: d
                    })), a().createElement(yn.A, {
                        sx: {
                            width: "100%",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 16px"
                        }
                    }, a().createElement(ya.A, {
                        color: "t.disabled",
                        size: 16
                    }), a().createElement(na, {
                        onClick: t,
                        color: "primary",
                        size: 20,
                        cursor: "pointer"
                    })), a().createElement(yn.A, {
                        sx: wa
                    }, Aa(r), a().createElement(ea.A, {
                        sx: xa
                    }, u("select-to")), a().createElement(sa, {
                        sx: {
                            flex: 1,
                            border: "none"
                        },
                        value: r,
                        data: Object.keys(i),
                        onChange: l,
                        activatdAccounts: c,
                        uni: d
                    }))))
                };
            const Ca = a().memo(ka);
            var _a = function() {
                    var e = (0, pn.A)(hn().mark((function e() {
                        var t;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, kn.post)("/bapi/margin/v1/private/margin/portfolio/fund-collection");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
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
                Na = function(e, t, n) {
                    "function" === typeof e && e({
                        action: "user_convert_event",
                        options: (0, E.A)({
                            $element_id: "front_failed",
                            df_type: t
                        }, n)
                    })
                },
                Sa = function(e, t, n) {
                    var a = (0, r.useRef)(!1),
                        o = (0, r.useRef)(!1),
                        i = e.open,
                        s = e.coin,
                        c = e.availableNone,
                        l = e.loadMaxAvailable;
                    return (0, r.useEffect)((function() {
                        o.current || i && s && (o.current = !0, function(e, t) {
                            "function" === typeof e && e({
                                action: "user_convert_event",
                                options: (0, Vt.A)((0, E.A)({
                                    $element_id: "trigger"
                                }, t), {
                                    from: "null",
                                    to: "null"
                                })
                            })
                        }(t, n()))
                    }), [n, i, t, s]), (0, r.useEffect)((function() {
                        i || (a.current = !1, o.current = !1)
                    }), [i]), (0, r.useEffect)((function() {
                        if (i && c)
                            if (a.current) {
                                if (!l) return;
                                Na(t, "transfer_no_assets", n())
                            } else a.current = !0
                    }), [c, n, l, i, t]), (0, r.useMemo)((function() {
                        return {
                            trackConfirmStart: function() {
                                ! function(e, t) {
                                    "function" === typeof e && e({
                                        action: "user_convert_event",
                                        options: (0, E.A)({
                                            $element_id: "confirm_start"
                                        }, t)
                                    })
                                }(t, n())
                            },
                            trackAPIStatus: function(e) {
                                ! function(e, t, n) {
                                    if ("function" === typeof e) {
                                        var r = t.success,
                                            a = t.code;
                                        e({
                                            action: "user_convert_event",
                                            options: (0, E.A)({
                                                $element_id: r ? "successful" : "api_failed",
                                                df_status: r ? null : a
                                            }, n)
                                        })
                                    }
                                }(t, e, n())
                            },
                            trackFrontFailed: function(e) {
                                Na(t, e, n())
                            }
                        }
                    }), [n, t])
                },
                Ma = function(e) {
                    e && e({
                        action: "webClick",
                        options: {
                            elementId: "click_wallet_transfer_popup_confirm"
                        }
                    })
                },
                Ia = "error-available-low-level";
            const Ra = function(e) {
                var t = e.availableNone,
                    n = e.availableNoneI18nKey,
                    o = on(),
                    i = o.from,
                    s = o.fromIsoSymbol,
                    c = o.isolatedPairs,
                    l = ur().getI18n,
                    u = er().marginAccountInfo,
                    f = (0, r.useMemo)((function() {
                        var e;
                        return null === (e = c.filter((function(e) {
                            return e.symbol === s
                        }))) || void 0 === e ? void 0 : e[0]
                    }), [c, s]),
                    d = ("MARGIN" === i ? null === u || void 0 === u ? void 0 : u.transferOutBar : null === f || void 0 === f ? void 0 : f.transferOutBar) || "2",
                    p = parseFloat(Number(d || "2.0").toFixed(2));
                if ("MARGIN" !== i && "ISOLATED_MARGIN" !== i) return null;
                if (!t) return null;
                return a().createElement(yn.A, {
                    sx: {
                        color: "error"
                    }
                }, function() {
                    if ("MARGIN" === i) {
                        var e = (null === u || void 0 === u ? void 0 : u.collateralMarginLevel) && Number(null === u || void 0 === u ? void 0 : u.collateralMarginLevel) > Number(d) ? "error-available-effect-high-level" : Ia;
                        return l(e, {
                            transferOutBar: p
                        })
                    }
                    if ("ISOLATED_MARGIN" === i) {
                        var t = (null === f || void 0 === f ? void 0 : f.marginLevel) && Number(null === f || void 0 === f ? void 0 : f.marginLevel) > Number(d) ? "error-available-hight-level" : Ia;
                        return l(t, {
                            transferOutBar: p
                        })
                    }
                    return l("assetTransfer-".concat(n))
                }())
            };
            var Oa = "ISOLATED_MARGIN",
                Ta = [Oa, "MAIN", "MARGIN"],
                La = "PORTFOLIO_MARGIN",
                Ba = ["EUR", "GBP"],
                Da = function() {
                    return a().createElement(gn.A, {
                        sx: {
                            height: 18,
                            width: 20
                        }
                    })
                },
                Pa = function() {
                    var e = on(),
                        t = e.open,
                        n = e.setOpen,
                        o = e.from,
                        i = e.setFrom,
                        s = e.to,
                        c = e.setTo,
                        l = e.coin,
                        u = e.setCoin,
                        f = e.activateAccounts,
                        d = e.loadingWalletsBalance,
                        p = e.freshBalance,
                        m = e.walletConfig,
                        v = e.onTransferSuccess,
                        h = e.isolatedPairs,
                        g = e.fromIsoSymbol,
                        b = e.setFromIsoSymbol,
                        y = e.toIsoSymbol,
                        w = e.setToIsoSymbol,
                        x = e.afterTransfer,
                        A = e.needMargin,
                        C = e.needFuturesJointMargin,
                        _ = e.delay,
                        S = e.btcFiatPrice,
                        R = e.priceIndex,
                        O = e.fiatSymbol,
                        T = e.closeDefaultToast,
                        L = void 0 !== T && T,
                        B = e.sendLog,
                        D = e.disableCloseOnMaskClick,
                        P = e.limitCoinList,
                        F = e.customDesc,
                        z = e.onCollectionSuccess,
                        V = e.transferKey,
                        U = e.showMarginTip,
                        j = (0, Hn.useUserBaseDetail)().value,
                        W = function() {
                            var e = function() {
                                    var e = document.getElementById("paySafeResult");
                                    e && document.body.removeChild(e);
                                    var t = document.createElement("script");
                                    t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001"), t.type = "text/javascript", t.id = "paySafeResult", t.appendChild(document.createTextNode("\n    function tmx_profiling_complete(session_id) {  \n      if (session_id) {\n        const info = { isSuccess: true }\n        typeof window !== 'undefined' &&\n          window.localStorage &&\n          window.localStorage.setItem('payRiskSafeResult', JSON.stringify(info))\n      }\n    }\n    ")), document.body.appendChild(t)
                                },
                                t = function(e) {
                                    if (e) {
                                        var t = document.getElementById("paySafe");
                                        t && document.body.removeChild(t);
                                        var n = document.createElement("script");
                                        n.setAttribute("data-ot-ignore", "true"), n.setAttribute("class", "optanon-category-C0001"), n.type = "text/javascript", n.src = "https://h.online-metrix.net/fp/tags.js?org_id=".concat("3t5fmdir", "&session_id=").concat(e), n.id = "paySafe", document.body.appendChild(n)
                                    }
                                },
                                n = function() {
                                    var e = (0, pn.A)(hn().mark((function e(t) {
                                        return hn().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, (0, Pn.b3)(t);
                                                case 3:
                                                    e.next = 8;
                                                    break;
                                                case 5:
                                                    e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 5]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                r = function(e) {
                                    var t = e.disabledNotify,
                                        r = e.currency,
                                        a = e.source,
                                        o = new RegExp("^/([a-z]{2}(-[a-zA-Z]{2})?)?/?$").test(window.location.pathname),
                                        i = null === r || void 0 === r ? void 0 : r.some((function(e) {
                                            return Vn.has(e)
                                        }));
                                    t || o || !i || n({
                                        source: a
                                    })
                                },
                                a = function() {
                                    var n = (0, pn.A)(hn().mark((function n(a) {
                                        var o, i, s, c, l;
                                        return hn().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if (o = a.disabledNotify, i = a.currency, s = a.source, n.prev = 1, null === Fn.U || void 0 === Fn.U ? void 0 : Fn.U.read("BNC_FV_KEY")) {
                                                        n.next = 5;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 5:
                                                    return n.next = 7, (0, Pn.yO)();
                                                case 7:
                                                    (c = n.sent.data) && (e(), t(c.sessionId), r({
                                                        disabledNotify: o,
                                                        currency: i,
                                                        source: s
                                                    }), l = {
                                                        sessionId: c.sessionId,
                                                        expiredTime: c.expiredTime
                                                    }, zn.IG.setItem(Un, l)), n.next = 14;
                                                    break;
                                                case 11:
                                                    n.prev = 11, n.t0 = n.catch(1), console.log(n.t0);
                                                case 14:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n, null, [
                                            [1, 11]
                                        ])
                                    })));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }();
                            return function(n) {
                                var o = n.source,
                                    i = n.currency,
                                    s = n.disabledSessionId,
                                    c = n.disabledNotify,
                                    l = n.forceSessionId,
                                    u = Date.now() / 1e3,
                                    f = zn.IG.getItem(Un) || {},
                                    d = f.expiredTime,
                                    p = void 0 === d ? 0 : d,
                                    m = f.sessionId,
                                    v = (zn.IG.getItem(jn) || {}).isSuccess;
                                s || (p < u || l ? (zn.IG.setItem(jn, {
                                    isSuccess: !1
                                }), a({
                                    disabledNotify: c,
                                    currency: i,
                                    source: o
                                })) : (v || (e(), t(m)), r({
                                    disabledNotify: c,
                                    currency: i,
                                    source: o
                                })))
                            }
                        }(),
                        q = (0, Yn.A)().enqueueNotification,
                        H = ur("assetTransfer").getI18n,
                        $ = (0, Hn.useAssets)().getAssetInfo,
                        K = (0, k.A)((0, r.useState)(""), 2),
                        G = K[0],
                        Y = K[1],
                        Z = (0, k.A)((0, r.useState)(!1), 2),
                        Q = Z[0],
                        X = Z[1],
                        J = (0, k.A)((0, r.useState)(!1), 2),
                        ee = J[0],
                        te = J[1],
                        ne = (0, k.A)((0, r.useState)(!1), 2),
                        re = ne[0],
                        ae = ne[1],
                        oe = (0, I.Pv)().checkIsSupportAsset,
                        ie = (0, k.A)((0, r.useState)(!1), 2),
                        se = ie[0],
                        ce = ie[1],
                        le = !!P,
                        ue = (0, r.useMemo)((function() {
                            return m.reduce((function(e, t) {
                                var n = e.allFrom,
                                    r = e.allTo,
                                    a = t.fromAccount,
                                    i = t.toAccount,
                                    c = [i].indexOf(s) > -1,
                                    l = [a].indexOf(o) > -1;
                                return {
                                    allFrom: c ? (0, Vt.A)((0, E.A)({}, n), (0, sn.A)({}, a, !0)) : n,
                                    allTo: l ? (0, Vt.A)((0, E.A)({}, r), (0, sn.A)({}, i, !0)) : r
                                }
                            }), {
                                allFrom: {},
                                allTo: {}
                            })
                        }), [m, o, s]),
                        fe = ue.allFrom,
                        de = ue.allTo,
                        pe = (0, r.useMemo)((function() {
                            return o === Oa && s !== Oa || o !== Oa && s === Oa
                        }), [o, s]),
                        me = (0, r.useMemo)((function() {
                            return o === Oa && s === Oa
                        }), [o, s]),
                        ve = (0, r.useMemo)((function() {
                            var e;
                            return null === (e = h.filter((function(e) {
                                return e.symbol === g
                            }))) || void 0 === e ? void 0 : e[0]
                        }), [h, g]),
                        he = (0, r.useMemo)((function() {
                            var e;
                            return null === (e = h.filter((function(e) {
                                return e.symbol === y
                            }))) || void 0 === e ? void 0 : e[0]
                        }), [h, y]),
                        ge = (0, r.useMemo)((function() {
                            return function(e) {
                                var t = {};
                                return (null === e || void 0 === e ? void 0 : e.length) ? (null === e || void 0 === e || e.forEach((function(e) {
                                    "MARGIN" === (null === e || void 0 === e ? void 0 : e.accountType) && (t = (0, Vt.A)((0, E.A)({}, e), {
                                        accountType: La
                                    }))
                                })), (0, mn.A)(e).concat([t])) : []
                            }(f)
                        }), [f]),
                        be = (0, r.useMemo)((function() {
                            var e = ge.find((function(e) {
                                    return e.accountType === o
                                })),
                                t = (null === e || void 0 === e ? void 0 : e.assetBalances) || [],
                                n = ge.reduce((function(e, t) {
                                    var n = t.accountType;
                                    return (t.assetBalances || []).forEach((function(t) {
                                        var r = t.asset;
                                        e[r] || (e[r] = {}), e[r][n] = t
                                    })), e
                                }), {});
                            return {
                                fromCoinList: t,
                                formatCoin: n
                            }
                        }), [ge, o]),
                        ye = be.fromCoinList,
                        we = be.formatCoin,
                        xe = (0, r.useMemo)((function() {
                            if (pe) {
                                var e, t, n = o === Oa,
                                    r = n ? ve : he;
                                if (!r) return [];
                                var a, i = r.base,
                                    c = r.quote,
                                    l = r.baseProps,
                                    u = r.quoteProps,
                                    f = [i, c].map((function(e) {
                                        var t, r, a;
                                        return {
                                            name: (null === (t = we[e]) || void 0 === t || null === (r = t.MAIN) || void 0 === r ? void 0 : r.assetName) || e,
                                            coin: e,
                                            logoUrl: null === (a = $(e)) || void 0 === a ? void 0 : a.logoUrl,
                                            props: n ? i === e ? l : u : void 0
                                        }
                                    })),
                                    d = n ? s : o,
                                    p = (null !== (a = null === (e = ge.filter((function(e) {
                                        return e.accountType === d
                                    }))) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.assetBalances) && void 0 !== a ? a : []).map((function(e) {
                                        return {
                                            coin: e.asset,
                                            name: e.assetName,
                                            logoUrl: e.logoUrl,
                                            props: n ? void 0 : {
                                                free: pr(e),
                                                netAssetOfBtc: e.transferBtc,
                                                assetName: e.asset,
                                                locked: e.locked,
                                                transferInEnabled: !1
                                            }
                                        }
                                    }));
                                return fr(n ? f : p, n ? p : f, (function(e) {
                                    return e.coin
                                }))
                            }
                            if (me) {
                                if (!ve || !he) return [];
                                var m = ve.base,
                                    v = ve.quote,
                                    h = he.base,
                                    g = he.quote,
                                    b = [m, v].map((function(e) {
                                        var t, n, r;
                                        return {
                                            name: (null === (t = we[e]) || void 0 === t || null === (n = t.MAIN) || void 0 === n ? void 0 : n.assetName) || e,
                                            coin: e,
                                            logoUrl: null === (r = $(e)) || void 0 === r ? void 0 : r.logoUrl,
                                            props: m === e ? ve.baseProps : ve.quoteProps
                                        }
                                    })),
                                    y = [h, g].map((function(e) {
                                        var t, n, r;
                                        return {
                                            name: (null === (t = we[e]) || void 0 === t || null === (n = t.MAIN) || void 0 === n ? void 0 : n.assetName) || e,
                                            coin: e,
                                            logoUrl: null === (r = $(e)) || void 0 === r ? void 0 : r.logoUrl
                                        }
                                    }));
                                return fr(b, y, (function(e) {
                                    return e.coin
                                }))
                            }
                            return ye.filter((function(e) {
                                return oe(s, e.asset) ? !P || P.includes(e.asset) : null
                            })).map((function(e) {
                                var t = e.asset;
                                return {
                                    name: e.assetName || t,
                                    coin: t,
                                    logoUrl: e.logoUrl,
                                    transferBtc: e.transferBtc,
                                    free: pr(e)
                                }
                            })).sort((function(e, t) {
                                return function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                                    return e === t ? 0 : e > t ? -1 * n : n
                                }(Number(e.transferBtc), Number(t.transferBtc)) + e.coin.localeCompare(t.coin)
                            }))
                        }), [we, o, s, pe, h, $, me, g, y, ve, he, P]);
                    (0, r.useEffect)((function() {
                        (null === j || void 0 === j ? void 0 : j.isExistFutureAccount) && Cn().then((function(e) {
                            var t;
                            ae(2 === (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.creditStatus))
                        }))
                    }), [null === j || void 0 === j ? void 0 : j.isExistFutureAccount]);
                    var Ee = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                            var t, n, r, a, i, c, u, f, d;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!le) {
                                            e.next = 15;
                                            break
                                        }
                                        if (t = "0", "MARGIN" !== o || "FUTURE" !== s) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 6, Sn({
                                            requireCoupon: !0
                                        });
                                    case 6:
                                        i = e.sent, t = (null === (a = null === i || void 0 === i || null === (n = i.data) || void 0 === n || null === (r = n.userAssets) || void 0 === r ? void 0 : r.find((function(e) {
                                            return "BNB" === e.asset
                                        }))) || void 0 === a ? void 0 : a.free) || "0";
                                    case 8:
                                        if ("FUTURE" !== o || "MARGIN" !== s) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 12, Mn();
                                    case 12:
                                        f = e.sent, t = (null === (u = null === f || void 0 === f || null === (c = f.data) || void 0 === c ? void 0 : c.find((function(e) {
                                            return "BNB" === e.asset
                                        }))) || void 0 === u ? void 0 : u.walletBalance) || "0";
                                    case 14:
                                        return e.abrupt("return", t);
                                    case 15:
                                        if ("MARGIN" !== o && o !== La) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 18, Rn({
                                            asset: l
                                        }, {
                                            excludeErrorCode: ["051013"]
                                        });
                                    case 18:
                                        return e.abrupt("return", e.sent);
                                    case 19:
                                        if ("FUTURE" !== o) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 22, On({
                                            assetName: l
                                        });
                                    case 22:
                                        return e.abrupt("return", e.sent);
                                    case 23:
                                        if ("DELIVERY" !== o) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.next = 26, Ln({
                                            assetName: l
                                        });
                                    case 26:
                                        return e.abrupt("return", e.sent);
                                    case 27:
                                        if (o !== Oa || !l.length || !g.length) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.next = 30, Bn({
                                            asset: l,
                                            symbol: g
                                        });
                                    case 30:
                                        return e.abrupt("return", e.sent);
                                    case 31:
                                        return d = we[l] || {}, e.abrupt("return", (d[o] || {}).free || 0);
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [o, l, we, g]),
                        Ae = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                            var t, n, r;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = null === (t = ge.find((function(e) {
                                                return "FUTURE" === e.accountType
                                            }))) || void 0 === t ? void 0 : t.assetBalances, r = null === n || void 0 === n ? void 0 : n.find((function(e) {
                                                return e.asset === l
                                            })), "FUTURE" !== s || !C || !r) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Tn({
                                            asset: l
                                        });
                                    case 6:
                                        return e.abrupt("return", e.sent);
                                    case 7:
                                        return e.abrupt("return", Number.MAX_SAFE_INTEGER);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [s, C, l, ge]),
                        ke = (0, k.A)((0, r.useState)(0), 2),
                        Ce = ke[0],
                        _e = ke[1],
                        Ne = (0, k.A)((0, r.useState)(!1), 2),
                        Se = Ne[0],
                        Me = Ne[1],
                        Ie = (0, r.useMemo)((function() {
                            var e = {
                                asset: l,
                                amount: G
                            };
                            return pe && (e.symbol = o === Oa ? g : y), me && (e.symbol = g, e.targetSymbol = y), le ? e.transferSide = "MARGIN" === o ? "ROLL_OUT" : "ROLL_IN" : e.kindType = [o, s].join("_"), e
                        }), [G, l, o, g, me, le, pe, s, y]);
                    (0, r.useEffect)((function() {
                        t && B && function(e) {
                            e && e({
                                action: "componentShow",
                                options: {
                                    elementId: "show_component_wallet_transfer_popup"
                                }
                            })
                        }(B)
                    }), [t, B]), (0, r.useEffect)((function() {
                        !0 !== t || "MARGIN" !== s && de[s] || !de.PORTFOLIO_MARGIN || c(La)
                    }), [t, de]);
                    var Re = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                        var t, n, r;
                        return hn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!d) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.t0 = k.A, e.t1 = Promise, e.next = 6, Ae();
                                case 6:
                                    return e.t2 = e.sent, e.next = 9, Ee();
                                case 9:
                                    return e.t3 = e.sent, e.t4 = [e.t2, e.t3], e.next = 13, e.t1.all.call(e.t1, e.t4);
                                case 13:
                                    if (e.t5 = e.sent, t = (0, e.t0)(e.t5, 2), n = t[0], r = t[1], C && "FUTURE" === s) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 19:
                                    if (!(n < 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 21:
                                    return e.abrupt("return", Math.min(n, r));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [Ae, Ee, d, C]);
                    (0, Wn.A)((function() {
                        return te(!0), Me(!1), Re().then((function(e) {
                                void 0 !== e && (_e(e), te(!1), Me(!0))
                            })).catch((function() {
                                _e(0), te(!1), Me(!0)
                            })),
                            function() {
                                _e(0), Me(!1)
                            }
                    }), 500, [Re]);
                    var Oe = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                            var t, n, r, a, o, i, s, c;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = new Promise((function(e) {
                                            e(Mn())
                                        })), a = new Promise((function(e) {
                                            e(In())
                                        })), e.next = 5, Promise.all([r, a]);
                                    case 5:
                                        o = e.sent, i = o[0], s = o[1], c = (null === i || void 0 === i || null === (t = i.data) || void 0 === t ? void 0 : t.find((function(e) {
                                            return +e.walletBalance < 0
                                        }))) || (null === s || void 0 === s || null === (n = s.data) || void 0 === n ? void 0 : n.find((function(e) {
                                            return +e.walletBalance < 0
                                        }))), ce(c);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        Te = (0, r.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_asset_from",
                                        extraInfo: {
                                            wallet: t
                                        }
                                    }
                                })
                            }(B, e), V && localStorage.setItem("".concat(V, "-from"), e), console.log("from change", e, V), i(e)
                        }), [i, B, V]),
                        Le = (0, r.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_asset_to",
                                        extraInfo: {
                                            wallet: t
                                        }
                                    }
                                })
                            }(B, e), V && localStorage.setItem("".concat(V, "-to"), e), console.log("to change", e, V), c(e)
                        }), [c, B, V]),
                        Be = (0, r.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_coin",
                                        extraInfo: {
                                            coin: t
                                        }
                                    }
                                })
                            }(B, e), V && localStorage.setItem("".concat(V, "-coin"), e), console.log("coin change", e, V), u(e), Ba.includes(e) && W({
                                currency: [e],
                                source: "transfer"
                            })
                        }), [u, B, V]),
                        De = (0, r.useMemo)((function() {
                            return Se && !Number(Ce) || 0 === xe.length
                        }), [xe.length, Se, Ce]),
                        Pe = (0, qn.Z)((function() {
                            return {
                                symbol: Ie.symbol,
                                from: o,
                                to: s,
                                pairs: l,
                                type: "transfer"
                            }
                        })),
                        Fe = (0, qn.Z)((function(e) {
                            "function" === typeof B && B(e)
                        })),
                        ze = Sa({
                            open: t,
                            availableNone: De,
                            loadMaxAvailable: Se,
                            coin: l
                        }, Fe, Pe),
                        Ve = (0, r.useCallback)((function(e) {
                            var t, n = e.target.value,
                                r = $(l),
                                a = new RegExp("[0]?(\\d){1,12}(?:\\.\\d{0,".concat(r.assetDigit || 8, "}){0,1}")),
                                o = (null === (t = n.match(a)) || void 0 === t ? void 0 : t[0]) || "";
                            Y(!o || /\./.test(o) ? o : +o), o || ze.trackFrontFailed("tranfer_zero_enter"), +o > +Ce && ze.trackFrontFailed("tranfer_more_than_max")
                        }), [Ce, ze, $, l]),
                        Ue = (0, r.useCallback)((function() {
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_amountbox"
                                    }
                                })
                            }(B)
                        }), [B]),
                        je = (0, r.useCallback)((function() {
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_close"
                                    }
                                })
                            }(B), n(!1), Y(""), ze.trackFrontFailed("user_leave")
                        }), [n, B]),
                        We = (0, r.useCallback)((function() {
                            i(s), c(o), V && (localStorage.setItem("".concat(V, "-from"), s), localStorage.setItem("".concat(V, "-to"), o)), console.log("from to revert", o, s, V), p(), s !== Oa && o !== Oa || (w(g), b(y))
                        }), [o, s, g, y]),
                        qe = (0, r.useCallback)((function() {
                            var e;
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_amountmax"
                                    }
                                })
                            }(B);
                            var t = $(l),
                                n = new RegExp("[0]?(\\d){1,12}(?:\\.\\d{0,".concat(t.assetDigit || 8, "}){0,1}")),
                                r = (null === (e = "".concat(Ce).match(n)) || void 0 === e ? void 0 : e[0]) || "";
                            Y(r), 0 === +Ce && ze.trackFrontFailed("tranfer_max_amount_null")
                        }), [B, $, l, Ce, ze]),
                        He = (0, r.useMemo)((function() {
                            return !re || "FUTURE" !== s || "USDT" !== l && "FDUSD" !== l ? +G > +Ce ? H("validate-amountError") : "" : H("validate-micaUserError")
                        }), [G, l, re, Ce, H, s]),
                        $e = (0, r.useMemo)((function() {
                            return ge.map((function(e) {
                                return e.accountType
                            }))
                        }), [ge]),
                        Ke = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                            var t, r, a, o, i;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Ie, Ma(B), ze.trackConfirmStart(), e.prev = 3, X(!0), r = le ? Dn.CP : Dn.DJ, e.next = 8, r(t, !L);
                                    case 8:
                                        if (a = e.sent, o = a.success, i = a.message, ze.trackAPIStatus(a), !x) {
                                            e.next = 14;
                                            break
                                        }
                                        return o ? setTimeout((function() {
                                            x(null, t, a), X(!1), n(!1), Y(""), p(), !L && q(H("notify-transferSuccessful"), {
                                                variant: "success",
                                                anchorOrigin: {
                                                    vertical: "top",
                                                    horizontal: "right"
                                                }
                                            })
                                        }), _) : (x(new Error(i), t, a), X(!1), Y("")), e.abrupt("return");
                                    case 14:
                                        if (o) {
                                            e.next = 18;
                                            break
                                        }
                                        return L || q(i, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        }), X(!1), e.abrupt("return");
                                    case 18:
                                        setTimeout((function() {
                                            q(H("notify-transferSuccessful"), {
                                                variant: "success",
                                                anchorOrigin: {
                                                    vertical: "top",
                                                    horizontal: "right"
                                                }
                                            }), p(), v && v(t), n(!1), Y(""), X(!1)
                                        }), _), e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(3), X(!1);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 21]
                            ])
                        }))), [l, o, s, G, g, y, pe, me, B, le, Ie, ze]),
                        Ge = (0, r.useMemo)((function() {
                            if (!pe || !me) return !0;
                            if (!he) return !1;
                            var e = he.base,
                                t = he.baseProps,
                                n = he.quote,
                                r = he.quoteProps;
                            return !!(l === e && t.transferInEnabled || l === n && r.transferInEnabled) || (l === e || l === n)
                        }), [pe, me, l, he]),
                        Ye = !o || !s || !l || !+G || !!He || Q || !Ge,
                        Ze = (0, r.useRef)([]),
                        Qe = (0, r.useRef)([]),
                        Xe = (0, r.useMemo)((function() {
                            return h.map((function(e) {
                                return e.symbol
                            }))
                        }), [h]),
                        Je = (0, k.A)((0, r.useState)(0), 2)[1],
                        et = (0, r.useCallback)((function() {
                            return Je((function(e) {
                                return e + 1
                            }))
                        }), []);
                    (0, r.useEffect)((function() {
                        if (0 !== Xe.length)
                            if (pe) {
                                var e, t;
                                if (o === Oa) Ze.current = h, Qe.current = [], b((function(t) {
                                    var n;
                                    return Xe.indexOf(t) >= 0 ? t : null !== (e = null === (n = h[0]) || void 0 === n ? void 0 : n.symbol) && void 0 !== e ? e : "BTCBUSD"
                                })), w("");
                                if (s === Oa) Ze.current = [], Qe.current = h, w((function(e) {
                                    var n;
                                    return Xe.indexOf(e) >= 0 ? e : null !== (t = null === (n = h[0]) || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : "BTCBUSD"
                                })), b("");
                                et()
                            } else if (me) {
                            if (he && !ve) {
                                var n = he.base,
                                    r = he.quote,
                                    a = he.symbol,
                                    i = h.filter((function(e) {
                                        var t = e.base,
                                            o = e.quote,
                                            i = e.symbol;
                                        return dr([t, o], [n, r]) && a !== i
                                    })),
                                    c = i[0];
                                if (!c) return;
                                var l = c.base,
                                    u = c.quote,
                                    f = c.symbol,
                                    d = h.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            r = e.symbol;
                                        return dr([t, n], [l, u]) && f !== r
                                    }));
                                Ze.current = i, Qe.current = d, b(c.symbol)
                            }
                            if (!he && ve) {
                                var p = ve.base,
                                    m = ve.quote,
                                    v = ve.symbol,
                                    g = h.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            r = e.symbol;
                                        return dr([t, n], [p, m]) && v !== r
                                    })),
                                    y = g[0];
                                if (!y) return;
                                var x = y.base,
                                    E = y.quote,
                                    A = y.symbol,
                                    k = h.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            r = e.symbol;
                                        return dr([t, n], [x, E]) && A !== r
                                    }));
                                Ze.current = k, Qe.current = g, w(y.symbol)
                            }
                            if (he && ve) {
                                var C = he.base,
                                    _ = he.quote,
                                    N = he.symbol,
                                    S = ve.base,
                                    M = ve.quote,
                                    I = ve.symbol,
                                    R = h.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            r = e.symbol;
                                        return dr([t, n], [S, M]) && r !== I
                                    })),
                                    O = h.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            r = e.symbol;
                                        return dr([t, n], [C, _]) && r !== N
                                    }));
                                Ze.current = O, Qe.current = R
                            }
                            et()
                        }
                    }), [pe, me, o, s, ve, he, et, h, Xe]), (0, r.useEffect)((function() {
                        o === La && Oe()
                    }), [o]);
                    var tt = (0, r.useCallback)((function() {
                        return Ge ? null : a().createElement(bn.A, {
                            lineHeight: "14px",
                            fontSize: "12px",
                            mt: "4px",
                            color: "error"
                        }, H("coin-not-transfer"))
                    }), [Ge, H]);
                    (0, r.useEffect)((function() {
                        var e = xe.some((function(e) {
                            return e.coin === l
                        }));
                        if (0 !== xe.length && !e)
                            if (me) {
                                var t, n, r = null !== (n = null === (t = xe[0]) || void 0 === t ? void 0 : t.coin) && void 0 !== n ? n : "";
                                u(r)
                            } else u((xe[0] || {}).coin || ""), Y("")
                    }), [l, xe, me]);
                    var nt = function(e, t, n) {
                            var a = (0, k.A)((0, r.useState)([]), 2),
                                o = a[0],
                                i = a[1];
                            return (0, r.useEffect)((function() {
                                function t() {
                                    return (t = (0, pn.A)(hn().mark((function t() {
                                        var r;
                                        return hn().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, Xr(e, n);
                                                case 3:
                                                    r = t.sent, i(r), t.next = 9;
                                                    break;
                                                case 7:
                                                    t.prev = 7, t.t0 = t.catch(0);
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 7]
                                        ])
                                    })))).apply(this, arguments)
                                }! function() {
                                    t.apply(this, arguments)
                                }()
                            }), [e, n]), (0, r.useMemo)((function() {
                                var e = "0";
                                return Array.isArray(o) && o.forEach((function(n) {
                                    (null === n || void 0 === n ? void 0 : n.asset) !== t && (null === n || void 0 === n ? void 0 : n.assetName) !== t || (e = n.locked)
                                })), e
                            }), [o, t])
                        }(o, l, g),
                        rt = (0, r.useMemo)((function() {
                            if ((o === Oa || s === Oa) && (Array.isArray(xe) && xe.every((function(e) {
                                    var t;
                                    return 0 === Number(null === e || void 0 === e || null === (t = e.props) || void 0 === t ? void 0 : t.free)
                                })))) return "error\u2014available pair";
                            return "error-available-coin"
                        }), [xe, o, s]),
                        at = (0, r.useCallback)((0, pn.A)(hn().mark((function e() {
                            var t, n;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _a();
                                    case 3:
                                        return t = e.sent.success, n = H(t ? "collection-success" : "collection-fail"), t ? (q(n, {
                                            variant: "success",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        }), Re().then((function(e) {
                                            return _e(e)
                                        })), z && z()) : q(n, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        }), e.abrupt("return");
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), q(H("collection-fail"), {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        }))), [Re, _e, z]);
                    return a().createElement(Zn.A, {
                        open: t,
                        title: a().createElement(bn.A, null, H("dialog-title")),
                        onCloseIconClick: je,
                        showTitleBottomLine: !1,
                        onMaskClick: D ? void 0 : je,
                        sx: {
                            width: ["100%", "484px", "484px"],
                            height: ["100%", "auto", "auto"]
                        },
                        contentSx: {
                            position: "relative",
                            height: "100%",
                            px: 0,
                            pt: 0,
                            scrollBehavior: "smooth",
                            pb: ["176px", "md"],
                            overflowY: ["auto", "auto", "auto"],
                            maxHeight: ["100vh", "calc(100vh - 80px)"]
                        }
                    }, a().createElement(xr, null), A && U && a().createElement(hr, null), a().createElement(N.A, {
                        pt: "md"
                    }), a().createElement(bn.A, {
                        sx: {
                            px: "md"
                        }
                    }, H("dialog-tips")), o === Oa || s === Oa ? a().createElement(da, {
                        t: H,
                        revertFromAndTo: We,
                        from: o,
                        to: s,
                        allFrom: fe,
                        allTo: de,
                        handleFromChange: Te,
                        activatdAccounts: $e,
                        handleToChange: Le,
                        fromIsoSymbol: g,
                        setFromIsoSymbol: b,
                        toIsoSymbol: y,
                        setToIsoSymbol: w,
                        filterFromSymbols: Ze.current,
                        filterToSymbols: Qe.current
                    }) : a().createElement(Ca, {
                        t: H,
                        revertFromAndTo: We,
                        from: o,
                        to: s,
                        allFrom: fe,
                        allTo: de,
                        handleFromChange: Te,
                        activatdAccounts: $e,
                        handleToChange: Le
                    }), a().createElement(N.A, {
                        px: "md"
                    }, a().createElement(ta, {
                        label: H("select-coin")
                    }, pe || me ? a().createElement(a().Fragment, null, a().createElement(jr, {
                        value: l,
                        data: xe,
                        onChange: Be,
                        btcFiatPrice: S,
                        fiatSymbol: O,
                        priceIndex: R
                    }), tt()) : a().createElement(Fr, {
                        value: l,
                        data: xe,
                        onChange: Be,
                        btcFiatPrice: S,
                        fiatSymbol: O,
                        priceIndex: R
                    })), a().createElement(Ra, {
                        availableNone: De,
                        availableNoneI18nKey: rt
                    }), a().createElement(ta, {
                        label: a().createElement(yn.A, {
                            justifyContent: "space-between",
                            width: 1
                        }, a().createElement(bn.A, null, H("select-amount")), l && a().createElement(N.A, {
                            sx: {
                                fontSize: "14px",
                                color: "t.third",
                                lineHeight: "20px",
                                textAlign: "right"
                            }
                        }, o === La && a().createElement(N.A, null, a().createElement(bn.A, {
                            as: "span",
                            sx: {
                                color: "primary",
                                cursor: "pointer"
                            },
                            onClick: at
                        }, a().createElement($n.A, {
                            size: 14,
                            sx: {
                                verticalAlign: "-3px"
                            }
                        }), H("account-allocate", {
                            defaultValue: "Allocate Assets"
                        })), a().createElement(M.Ay, {
                            tip: H("account-allocate-tips"),
                            arrow: !0,
                            enablePortal: !0
                        }, a().createElement(Kn.A, {
                            size: 14,
                            sx: {
                                verticalAlign: "-3px"
                            }
                        }))), a().createElement(N.A, null, a().createElement(bn.A, {
                            as: "span",
                            sx: {
                                color: "t.primary"
                            }
                        }, "".concat((0, An.ZV)(Ce, 8), " ")), H("label-available"), Ta.includes(o) && a().createElement(a().Fragment, null, " / ", a().createElement(bn.A, {
                            as: "span",
                            sx: {
                                color: "t.primary"
                            }
                        }, "".concat((0, An.ZV)(nt, 8), " ")), H("label-inorder", {
                            defaultValue: "in order"
                        }))), " "))
                    }, a().createElement(Qn.A, {
                        variant: "filled",
                        value: G,
                        defaultValue: G,
                        boxProps: {
                            fontSize: 1,
                            width: "100%",
                            height: "48px"
                        },
                        onChange: Ve,
                        onClick: Ue,
                        error: !!He,
                        errorText: He,
                        autoComplete: "off",
                        suffix: a().createElement(yn.A, {
                            mr: "xs",
                            alignItems: "center"
                        }, !!G && a().createElement(En, {
                            size: 16,
                            color: "t.placeholder",
                            sx: {
                                cursor: "pointer"
                            },
                            onClick: function() {
                                return Y("")
                            }
                        }), a().createElement(bn.A, {
                            onClick: qe,
                            sx: {
                                fontSize: "16px",
                                color: "t.yellow",
                                lineHeight: "24px",
                                cursor: "pointer",
                                ml: "xs"
                            }
                        }, H("action-max")))
                    })), o === La && se && a().createElement(yn.A, {
                        sx: {
                            mt: "24px"
                        }
                    }, a().createElement(Gn.A, {
                        icon: a().createElement(Kn.A, {
                            size: 16,
                            color: "primary"
                        }),
                        message: H("account-uni-desc-pm-negative"),
                        variant: "primary",
                        sz: "small"
                    })), (o === La || s === La) && a().createElement(yn.A, {
                        alignItems: "start",
                        sx: {
                            mt: "24px",
                            color: "t.third"
                        }
                    }, "*", a().createElement(N.A, {
                        sx: {
                            color: "t.third",
                            fontSize: "12px",
                            lineHeight: "16px",
                            marginLeft: "6px",
                            flex: "1"
                        }
                    }, H("account-uni-desc-pm"))), F && a().createElement(yn.A, {
                        alignItems: "start",
                        sx: {
                            padding: "16px 0 12px"
                        }
                    }, a().createElement(Kn.A, {
                        size: 16,
                        color: "iconNormal"
                    }), a().createElement(N.A, {
                        sx: {
                            color: "t.third",
                            fontSize: "12px",
                            lineHeight: "16px",
                            marginLeft: "6px",
                            flex: "1"
                        }
                    }, F)), a().createElement(Xn.R, null, a().createElement(ta, {
                        mt: "0"
                    }, a().createElement(yn.A, {
                        justifyContent: "flex-end"
                    }, a().createElement(wn.A, {
                        variant: "default",
                        colorStyle: "flatprimary",
                        sz: "l",
                        onClick: Ke,
                        disabled: Ye,
                        height: 40,
                        sx: {
                            width: "100%",
                            maxWidth: ["100%", "180px;"]
                        }
                    }, Q ? a().createElement(Da, null) : H("action-confirm")))))), ee && a().createElement(yn.A, {
                        sx: {
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            bg: "black",
                            top: 0,
                            right: 0,
                            height: "100%",
                            width: "100%"
                        }
                    }, a().createElement(gn.A, null)))
                };
            Pa.displayName = "TransferUI";
            var Fa = function(e) {
                    var t = e.children,
                        n = (0, k.A)((0, r.useState)(!1), 2),
                        o = n[0],
                        i = n[1];
                    return (0, r.useEffect)((function() {
                        i(!0)
                    }), []), o ? a().createElement(a().Fragment, null, t) : null
                },
                za = n("k5JY"),
                Va = n("OgCp"),
                Ua = (0, r.forwardRef)((function(e, t) {
                    var n, i = e.variant,
                        s = void 0 === i ? "primary" : i,
                        l = e.sz,
                        u = void 0 === l ? "middle" : l,
                        p = e.inactive,
                        m = e.loading,
                        h = e.onClick,
                        g = e.subLine,
                        b = e.children,
                        y = e.textVariant,
                        w = void 0 === y ? "text" === s ? "yellow" : "black" : y,
                        x = e.iconVariant,
                        E = void 0 === x ? "line" : x,
                        A = (e["aria-label"], (0, o.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"])),
                        k = (0, d.r)(),
                        C = k.prefixCls,
                        _ = k.isRTL,
                        N = "".concat(C, "-button"),
                        S = "text" === s || "info" === s,
                        M = "icon" === s,
                        I = f()(N, ((n = {})["".concat(N, "-rtl")] = !!_, n["".concat(N, "__").concat(s)] = !!s, n["".concat(N, "__").concat(s, "__").concat(w)] = S && !!w, n["".concat(N, "__").concat(s, "__").concat(E)] = M && !!E, n["data-size-".concat(u)] = !!u, n["data-size-".concat(u, "-two-line")] = !!u && !!g, n["data-two-line"] = !!g, n.inactive = !!p, n), e.className),
                        R = !p && "function" === typeof h,
                        O = T.lq ? "none" : e.type,
                        L = R ? h : void 0,
                        B = (0, r.useMemo)((function() {
                            return m ? a().createElement(v, null) : a().createElement(a().Fragment, null, b, g && a().createElement(c.Ay, null, g))
                        }), [b, r.useMemo, m]),
                        D = {
                            "aria-disabled": p || m ? "true" : void 0,
                            "aria-busy": m ? "true" : void 0
                        };
                    return a().createElement(Va.A, (0, o.__assign)({
                        key: m ? "loading" : "content"
                    }, D, A, {
                        children: B,
                        ref: t,
                        type: O,
                        className: I,
                        onClick: L
                    }))
                }));
            Ua.displayName = "Button";
            const ja = Ua;
            var Wa = function(e) {
                    var t = e.t;
                    return a().createElement(a().Fragment, null, t("cost-price-tip-title", {
                        defaultValue: "Coin average cost price"
                    }))
                },
                qa = function(e) {
                    var t = e.t;
                    return a().createElement(a().Fragment, null, t("cost-price-tip-desc", {
                        defaultValue: "The Average cost of Overview wallet refers to the average market price when the crypto increased in all wallets, including Deposit, Fiat, P2P, Pay, Convert, Spot, Futures, Margin, Strategy, Copy trading, Gift Card, Launchpad.The date is based on data as far back as Augest 1, 2021. Calculation method: The market price*The Increased amount / The sum of the increased amount"
                    }))
                },
                Ha = function(e) {
                    var t = e.t;
                    return a().createElement(a().Fragment, null, t("cost-price-tip-note", {
                        defaultValue: "* The date is only for your reference, there is no guarantee that the data is absolutely accurate."
                    }))
                };
            const $a = (0, R.eF)((function(e) {
                var t = e.isShow,
                    n = e.onClose,
                    r = (0, w.s9)("exchange-wallet").t;
                return a().createElement(za.Ay, {
                    visible: t,
                    className: "cost-price-tip-modal"
                }, a().createElement(za.Ay.Header, null, a().createElement(Wa, {
                    t: r
                })), a().createElement(za.Ay.Content, {
                    className: "pt-2"
                }, a().createElement(c.Ay, {
                    className: "body3 text-t-primary mb-4 text-left"
                }, a().createElement(qa, {
                    t: r
                })), a().createElement(c.Ay, {
                    className: "caption1 text-t-third text-left font-normal"
                }, a().createElement(Ha, {
                    t: r
                }))), a().createElement(za.Ay.Footer, null, a().createElement(ja, {
                    className: "w-full",
                    variant: "primary",
                    onClick: n,
                    sz: "large"
                }, r("common-action-ok", {
                    defaultValue: "OK"
                }))))
            }));
            var Ka = n("lm97"),
                Ga = n("RGyw"),
                Ya = a().forwardRef((function(e, t) {
                    var n = (0, d.r)().prefixCls,
                        r = f()("".concat(n, "-flex"), e.className);
                    return a().createElement(Ga.A, (0, o.__assign)({}, e, {
                        ref: t,
                        className: r
                    }))
                }));
            Ya.displayName = "Flex";
            const Za = Ya;
            var Qa = n("X4b0");
            const Xa = (0, R.eF)((function(e) {
                var t = e.isShow,
                    n = e.onClose,
                    r = (0, w.s9)("exchange-wallet").t;
                return a().createElement(Ka.A, {
                    visible: t,
                    direction: "bottom",
                    size: "auto"
                }, a().createElement(Za, {
                    className: "p-m h-[50px] items-center justify-between"
                }, a().createElement("div", {
                    className: "headline4 text-t-Primary text-lg"
                }, a().createElement(Wa, {
                    t: r
                })), a().createElement(Qa.A, {
                    onClick: n,
                    className: "text-t-Primary h-5 w-5 cursor-pointer"
                })), a().createElement(Za, {
                    className: "px-m body3 text-t-primary mb-4 mt-2 text-left"
                }, a().createElement(qa, {
                    t: r
                })), a().createElement(Za, {
                    className: "px-m caption1 text-t-third text-left font-normal"
                }, a().createElement(Ha, {
                    t: r
                })), a().createElement(Za, {
                    className: "px-m mt-2 items-center py-4"
                }, a().createElement(ja, {
                    className: "w-full",
                    variant: "primary",
                    onClick: n
                }, r("common-action-ok", {
                    defaultValue: "OK"
                }))))
            }));
            const Ja = function() {
                var e = (0, w.s9)("exchange-wallet").t,
                    t = (0, k.A)((0, r.useState)(!1), 2),
                    n = t[0],
                    o = t[1];
                return a().createElement(a().Fragment, null, a().createElement(Za, {
                    className: "cursor-pointer",
                    onClick: function() {
                        o(!0)
                    }
                }, "".concat(e("common-th-coin-price", {
                    defaultValue: "Coin Price"
                }), " / ").concat(e("common-th-cost-price", {
                    defaultValue: "Cost Price"
                })), a().createElement(Za, {
                    className: "ml-1 items-center"
                }, a().createElement(O, {
                    size: 14
                }))), a().createElement($a, {
                    isShow: n,
                    onClose: function() {
                        o(!1)
                    }
                }))
            };
            var eo = n("SR26");
            const to = function(e) {
                var t = e.tips,
                    n = e.linkUrl,
                    r = e.onClick,
                    o = e.type,
                    i = void 0 === o ? "link" : o,
                    s = e.linkText,
                    l = e.linkCssClass,
                    u = void 0 === l ? "" : l;
                return a().createElement(c.Ay, {
                    className: "pb-s pt-4xs"
                }, a().createElement(Gn.A, {
                    variant: "secondary",
                    icon: a().createElement(eo.A, {
                        className: "text-t-Primary text-base"
                    }),
                    message: a().createElement(c.Ay, {
                        className: ""
                    }, t, "link" === i && n && a().createElement(c.Ay, {
                        className: "".concat(u)
                    }, a().createElement("a", {
                        href: n,
                        target: "_blank",
                        className: "typography-Btn_link3 text-t-brand text-t-TextLink hover:text-primaryHover no-underline",
                        onClick: r,
                        rel: "noreferrer"
                    }, s)), "click" === i && a().createElement(c.Ay, {
                        className: "typography-Btn_link3 text-t-brand text-t-TextLink hover:text-primaryHover cursor-pointer no-underline",
                        onClick: r
                    }, s))
                }))
            };
            var no = function(e) {
                var t = e.closeIcon,
                    n = void 0 === t || t,
                    r = e.title,
                    o = e.open,
                    i = e.onClose,
                    s = e.children,
                    c = e.contentClassName,
                    l = e.className,
                    u = e.maskClose,
                    d = void 0 === u || u,
                    p = (0, A.A)(e, ["closeIcon", "title", "open", "onClose", "children", "contentClassName", "className", "maskClose"]);
                return a().createElement(za.Ay, (0, x.A)({
                    maskClose: d,
                    responsive: !0,
                    modalSize: "small",
                    className: f()("[&>.bn-drawer-wrap]:mobile:h-full", l)
                }, p, {
                    visible: o,
                    onClose: i
                }), r || n ? a().createElement("div", {
                    className: f()("p-xl pt-l mobile:p-m flex items-center", {
                        "justify-between": r,
                        "justify-end": !r
                    })
                }, r ? a().createElement("div", {
                    className: "typography-headline5 text-t-Primary flex items-center"
                }, r) : null, n ? a().createElement("div", {
                    className: "flex flex-1 justify-end"
                }, a().createElement(Qa.A, {
                    onClick: i,
                    className: "h-xl w-xl text-t-Primary hover:text-t-Secondary cursor-pointer"
                })) : null) : null, a().createElement("div", {
                    className: f()("px-xl w-full", c)
                }, s))
            };
            const ro = (0, r.memo)(no);
            var ao = function(e) {
                var t = e.checked,
                    n = e.defaultChecked,
                    o = e.onChange,
                    i = e.disabled,
                    s = a().useState(!!n),
                    c = s[0],
                    l = s[1];
                (0, X.op)((function() {
                    "undefined" !== typeof t && c !== !!t && l(!c)
                }));
                var u = (0, L.d)({
                        fn: o
                    }).debounceFn,
                    f = (0, r.useCallback)((function(e) {
                        i || l((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && u(n), t !== n ? n : t
                        }))
                    }), [u, i]);
                return {
                    checked: c,
                    onChecked: f
                }
            };
            const oo = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M3 10.5v3h18v-3H3z",
                    fill: "currentColor"
                }))
            };
            const io = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 25",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M19.357 4.687L9.301 14.743l-4.656-4.657-3.03 3.031L9.3 20.804 22.388 7.717l-3.03-3.03z",
                    fill: "currentColor"
                }))
            };
            var so = function(e) {
                var t, n = e.value,
                    i = e.checked,
                    s = e.disabled,
                    l = e.indeterminate,
                    u = e.defaultChecked,
                    p = e.variant,
                    m = void 0 === p ? "square" : p,
                    v = e.onChange,
                    h = e.sz,
                    g = void 0 === h ? "md" : h,
                    b = (0, o.__rest)(e, ["value", "checked", "disabled", "indeterminate", "defaultChecked", "variant", "onChange", "sz"]),
                    y = (0, r.useCallback)((function(e) {
                        return v && v(n, e)
                    }), [v, n]),
                    w = ao({
                        defaultChecked: u,
                        checked: i,
                        disabled: s,
                        onChange: y
                    }),
                    x = w.onChecked,
                    E = w.checked,
                    A = (0, d.r)(),
                    k = A.prefixCls,
                    C = A.isRTL,
                    _ = "".concat(k, "-checkbox"),
                    N = f()(_, ((t = {})["".concat(_, "-rtl")] = C, t["".concat(_, "__").concat(m)] = !!m, t.disabled = !!s, t.checked = !!E, t["data-size-".concat(g)] = !!g, t), e.className),
                    S = l ? a().createElement(oo, {
                        name: "Minus1C",
                        color: "BasicBg"
                    }) : a().createElement(io, {
                        name: "CheckboxControl1C",
                        color: "BasicBg"
                    }),
                    M = {
                        role: "checkbox",
                        "aria-checked": E,
                        "aria-disabled": s,
                        tabIndex: s ? -1 : 0,
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), x())
                        }
                    };
                return a().createElement(c.Ay, (0, o.__assign)({}, M, b, {
                    onClick: x,
                    className: N
                }), a().createElement(c.Ay, {
                    className: "".concat(_, "-icon"),
                    children: S
                }), e.children)
            };
            so.__name = "Checkbox";
            const co = so;
            var lo = n("KjAS"),
                uo = n("gu48"),
                fo = (0, lo.eU)({
                    type: "",
                    params: null
                }),
                po = function() {
                    var e = (0, k.A)((0, uo.fp)(fo), 2),
                        t = e[0],
                        n = e[1];
                    return {
                        addressAction: t,
                        addAddressList: (0, r.useCallback)((function(e) {
                            n({
                                type: "addAddressList",
                                params: e
                            })
                        }), [n]),
                        resetAddAddress: (0, r.useCallback)((function() {
                            n({
                                type: "",
                                params: void 0
                            })
                        }), [n])
                    }
                },
                mo = "EVM",
                vo = {
                    network: mo,
                    name: "addressMgmt-universal-evm",
                    withdrawHideEnable: !1,
                    depositEnable: !0,
                    withdrawEnable: !0,
                    parentCode: "",
                    forceStatus: !1,
                    sameAddress: !1,
                    withdrawIsTag: !1,
                    busy: !1,
                    labelCn: "",
                    labelEn: "",
                    resetAddressStatus: !1,
                    withdrawFee: 0,
                    blockUrl: "",
                    txUrl: "",
                    contractAddressUrl: "a",
                    addressUrl: "",
                    addressRegex: "",
                    addressRule: "",
                    memoRegex: "",
                    confirmType: 0,
                    minConfirm: 0,
                    lockConfirm: 0,
                    blockWarn: 0,
                    insertTime: 0,
                    updateTime: 0,
                    estimatedArrivalTime: 0,
                    estimatedRecoveryTime: 0,
                    hotWalletWarn: 0,
                    quest: "",
                    eachConfirmSec: 0,
                    experEachCostSec: 0,
                    userViewMaxMin: 0,
                    networkSort: null,
                    country: "",
                    withdrawFeeCoin: null
                },
                ho = (0, lo.eU)(""),
                go = (0, lo.eU)(""),
                bo = (0, lo.eU)([]),
                yo = (0, lo.eU)(!1),
                wo = (0, lo.eU)([]),
                xo = (0, lo.eU)(0),
                Eo = (0, lo.eU)(""),
                Ao = (0, lo.eU)(""),
                ko = (0, lo.eU)(""),
                Co = (0, lo.eU)(""),
                _o = (0, lo.eU)(!1),
                No = (0, lo.eU)({}),
                So = function() {
                    var e = (0, k.A)((0, uo.fp)(ho), 2),
                        t = e[0],
                        n = e[1],
                        a = (0, k.A)((0, uo.fp)(go), 2),
                        o = a[0],
                        i = a[1];
                    return {
                        value: t,
                        onChange: n,
                        error: o,
                        setError: i,
                        reset: (0, r.useCallback)((function() {
                            n(""), i("")
                        }), [n, i])
                    }
                },
                Mo = function() {
                    var e = (0, k.A)((0, uo.fp)(bo), 2);
                    return {
                        value: e[0],
                        onChange: e[1]
                    }
                },
                Io = function() {
                    var e = (0, k.A)((0, uo.fp)(yo), 2);
                    return {
                        isUniversalAddress: e[0],
                        setUniversalAddress: e[1]
                    }
                },
                Ro = function() {
                    var e = (0, k.A)((0, uo.fp)(wo), 2),
                        t = e[0],
                        n = e[1];
                    return {
                        value: t,
                        onChange: n,
                        reset: (0, r.useCallback)((function() {
                            n([])
                        }), [n])
                    }
                },
                Oo = function() {
                    var e = (0, k.A)((0, uo.fp)(Eo), 2),
                        t = e[0],
                        n = e[1],
                        a = (0, k.A)((0, uo.fp)(Ao), 2),
                        o = a[0],
                        i = a[1];
                    return {
                        value: t,
                        onChange: n,
                        error: o,
                        setError: i,
                        reset: (0, r.useCallback)((function() {
                            n(""), i("")
                        }), [n, i])
                    }
                },
                To = function() {
                    var e = (0, k.A)((0, uo.fp)(ko), 2),
                        t = e[0],
                        n = e[1],
                        a = (0, k.A)((0, uo.fp)(Co), 2),
                        o = a[0],
                        i = a[1];
                    return {
                        matchNetworkCount: (0, k.A)((0, uo.fp)(xo), 1)[0],
                        value: t,
                        onChange: n,
                        error: o,
                        setError: i,
                        reset: (0, r.useCallback)((function() {
                            n(""), i("")
                        }), [n, i])
                    }
                },
                Lo = function() {
                    var e = (0, k.A)((0, uo.fp)(_o), 2);
                    return {
                        value: e[0],
                        onChange: e[1]
                    }
                },
                Bo = function() {
                    var e = (0, k.A)((0, uo.fp)(No), 2);
                    return {
                        value: e[0],
                        onChange: e[1]
                    }
                },
                Do = function() {
                    var e = (0, uo.md)(bo),
                        t = (0, uo.md)(yo),
                        n = (0, uo.md)(ko),
                        a = (0, uo.md)(wo),
                        o = (0, uo.Xr)(xo),
                        i = (0, I.Kl)({
                            query: "",
                            type: 1
                        }),
                        s = i.coins,
                        c = i.isLoading,
                        l = (0, I.Wf)({
                            coinName: "BTC",
                            needLedgerAsset: !0
                        }),
                        u = l.capitalConfigArr,
                        f = l.capitalConfigMap,
                        d = l.loading,
                        p = c || d,
                        m = (0, r.useMemo)((function() {
                            return Array.isArray(u) ? (0, mn.A)(s.map((function(e) {
                                return f[e.coin]
                            }))).concat((0, mn.A)(u.filter((function(e) {
                                return !s.find((function(t) {
                                    return t.coin === e.coin
                                }))
                            })))).filter((function(e) {
                                return e && !e.isLegalMoney && !e.etf && !e.withdrawHideAll
                            })) : []
                        }), [s, u, f]),
                        v = (0, I.tx)().allNetworksSoft,
                        h = (0, I.nC)(),
                        g = h.allNetworks,
                        b = h.isLoading,
                        y = (0, I.nO)(e[0]),
                        w = y.networkInfo,
                        x = y.isLoading,
                        A = b || x,
                        C = (0, r.useMemo)((function() {
                            var e = v.networks,
                                n = (t ? g : w).filter((function(n) {
                                    var r = n.withdrawHideEnable,
                                        a = n.withdrawEnable;
                                    return !(r || t && !a) && !(t && !e.includes(n.network))
                                }));
                            if (!t) return n;
                            var r = n.sort((function(t, n) {
                                    return e.indexOf(t.network) - e.indexOf(n.network)
                                })),
                                a = function(e) {
                                    var t = ((null === e || void 0 === e ? void 0 : e.find((function(e) {
                                        return "ETH" === (null === e || void 0 === e ? void 0 : e.network)
                                    }))) || {}).addressRegex;
                                    return [(0, Vt.A)((0, E.A)({}, vo), {
                                        addressRegex: t
                                    })]
                                }(g);
                            return a.concat(r)
                        }), [t, g, w, v]);
                    C = (0, r.useMemo)((function() {
                        return n ? C.map((function(e) {
                            var t = e.addressRegex,
                                r = e.withdrawEnable,
                                a = !!t && new RegExp(t).test(n),
                                o = a ? 2 : r ? 1 : 0;
                            return (0, Vt.A)((0, E.A)({}, e), {
                                DISABLED: !a,
                                sortPr: o
                            })
                        })).sort((function(e, t) {
                            return t.sortPr - e.sortPr
                        })) : C.sort((function(e, t) {
                            return t.withdrawEnable - e.withdrawEnable
                        }))
                    }), [n, C]);
                    var _ = (0, r.useMemo)((function() {
                        var t = (0, k.A)(a, 1)[0],
                            n = (0, k.A)(e, 1)[0],
                            r = C.find((function(e) {
                                return e.network === t && e.coin === n
                            }));
                        return !(!(null === r || void 0 === r ? void 0 : r.sameAddress) || !r.label && !r.labelEn)
                    }), [a, e, C]);
                    return (0, r.useEffect)((function() {
                        var e = (0, k.A)(a, 1)[0],
                            t = C.filter((function(t) {
                                return !t.DISABLED && (!e || e === t.network)
                            }));
                        o(t.length)
                    }), [C, a, o]), {
                        coinOptions: m,
                        coinLoading: p,
                        networkOptions: C,
                        networkLoading: A,
                        isAddressTagRequired: _
                    }
                };
            const Po = function(e) {
                var t, n = e.label,
                    i = e.errMsg,
                    s = e.tips,
                    l = e.children,
                    u = e.tipsVariant,
                    p = void 0 === u ? "default" : u,
                    m = e.tooltipsProps,
                    v = (0, o.__rest)(e, ["label", "errMsg", "tips", "children", "tipsVariant", "tooltipsProps"]),
                    h = (0, r.useState)(!1),
                    g = h[0],
                    b = h[1],
                    y = (0, d.r)(),
                    w = y.prefixCls,
                    x = y.isRTL,
                    E = "".concat(w, "-formItem"),
                    A = f()(E, ((t = {})["".concat(E, "-rtl")] = !!x, t), e.className),
                    k = (0, r.useMemo)((function() {
                        return "".concat(E, "-").concat((0, H.uR)(8))
                    }), [E]),
                    C = (0, r.useMemo)((function() {
                        return "".concat(k, "-error")
                    }), [k]),
                    _ = (0, r.useMemo)((function() {
                        return "".concat(k, "-desc")
                    }), [k]);
                if (1 !== a().Children.count(l)) throw new Error("children can only be a node");
                var N = {
                        id: k,
                        "aria-required": v.required ? "true" : void 0,
                        "aria-invalid": i ? "true" : void 0,
                        "aria-describedby": [s ? _ : null, i ? C : null].filter(Boolean).join(" ") || void 0
                    },
                    S = {
                        as: "label",
                        htmlFor: k
                    },
                    M = {
                        id: C,
                        role: "alert",
                        "aria-disabled": !0
                    },
                    I = (0, r.useMemo)((function() {
                        var e, t = a().cloneElement(l, (0, o.__assign)((0, o.__assign)({}, N), l.props));
                        if ("inline" === p) {
                            var n = "TextField" === (null === (e = l.type) || void 0 === e ? void 0 : e.__name) ? (0, o.__assign)({
                                placement: "top-start",
                                arrow: !0,
                                offset: 8,
                                open: !!s && g,
                                onOpenChange: b,
                                bubbleFontSize: 12,
                                id: _
                            }, m) : (0, o.__assign)({
                                id: _
                            }, m);
                            return t = a().cloneElement(t, {
                                onFocus: function(e) {
                                    var t, n;
                                    b(!0), null === (n = (t = l.props).onFocus) || void 0 === n || n.call(t, e)
                                },
                                onBlur: function(e) {
                                    var t, n;
                                    b(!1), null === (n = (t = l.props).onBlur) || void 0 === n || n.call(t, e)
                                }
                            }), a().createElement(kt, (0, o.__assign)({
                                tooltips: s
                            }, n), t)
                        }
                        return a().createElement(a().Fragment, null, t, s && a().createElement(c.Ay, {
                            className: "".concat(E, "-tips"),
                            id: _,
                            "aria-disabled": "true"
                        }, s))
                    }), [s, p, l, E, g, m]);
                return a().createElement(c.Ay, (0, o.__assign)({}, v, {
                    className: A
                }), !!n && a().createElement(c.Ay, (0, o.__assign)({
                    className: "".concat(E, "-label")
                }, S), n), I, !!i && a().createElement(c.Ay, (0, o.__assign)({
                    className: "".concat(E, "-errMsg")
                }, M), i))
            };
            var Fo = function(e) {
                var t, n = e.value,
                    i = e.disabled,
                    s = e.checked,
                    l = e.defaultChecked,
                    u = e.onChange,
                    p = (0, o.__rest)(e, ["value", "disabled", "checked", "defaultChecked", "onChange"]),
                    m = (0, r.useCallback)((function(e) {
                        return u && u(n, e)
                    }), [u, n]),
                    v = ao({
                        defaultChecked: l,
                        checked: s,
                        disabled: i,
                        onChange: m
                    }),
                    h = v.onChecked,
                    g = v.checked,
                    b = (0, d.r)(),
                    y = b.prefixCls,
                    w = b.isRTL,
                    x = "".concat(y, "-radio"),
                    E = f()(x, ((t = {})["".concat(x, "-rtl")] = !!w, t.disabled = !!i, t.checked = !!g, t), e.className),
                    A = {
                        role: "radio",
                        "aria-checked": g,
                        "aria-disabled": i,
                        tabIndex: i ? -1 : 0,
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), h())
                        }
                    };
                return a().createElement(c.Ay, (0, o.__assign)({}, A, p, {
                    onClick: function() {
                        return h(!0)
                    },
                    className: E
                }), a().createElement(c.Ay, {
                    className: "".concat(x, "-icon")
                }), e.children)
            };
            Fo.__name = "Radio";
            const zo = Fo;
            var Vo = [],
                Uo = function(e) {
                    var t = e.placement,
                        n = void 0 === t ? "bottom-start" : t,
                        r = e.offset,
                        i = void 0 === r ? 4 : r,
                        s = e.overlay,
                        c = (0, o.__rest)(e, ["placement", "offset", "overlay"]);
                    return a().createElement(kt, (0, o.__assign)({}, c, {
                        variant: "unset",
                        offset: i,
                        tooltips: s,
                        placement: n
                    }))
                };
            Uo.displayName = "Dropdown";
            const jo = Uo;
            var Wo = n("I6V/"),
                qo = function(e) {
                    var t, n = e.onClose,
                        r = void 0 === n ? B.es : n,
                        i = e.cancel,
                        s = void 0 === i ? "Cancel" : i,
                        l = e.onCancel,
                        u = void 0 === l ? r : l,
                        p = e.variant,
                        m = void 0 === p ? "default" : p,
                        v = (0, o.__rest)(e, ["onClose", "cancel", "onCancel", "variant"]),
                        h = (0, d.r)().prefixCls,
                        g = "".concat(h, "-actionSheet"),
                        b = f()(g, ((t = {})["".concat(g, "__").concat(m)] = !!m, t), e.className);
                    return a().createElement(Ka.A, (0, o.__assign)({}, v, {
                        direction: "bottom",
                        onClose: r,
                        className: b
                    }), e.children, "default" === m && a().createElement(c.Ay, {
                        className: "".concat(g, "-cancel"),
                        onClick: u,
                        children: s,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "cancel"
                    }))
                };
            qo.displayName = "ActionSheet", qo.Header = function(e) {
                var t = e.showPre,
                    n = e.prev,
                    r = e.onPreClick,
                    i = void 0 === r ? B.es : r,
                    s = e.showNext,
                    l = e.next,
                    u = e.onNextClick,
                    p = void 0 === u ? B.es : u,
                    m = e.subtitle,
                    v = e.description,
                    h = (0, o.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick", "subtitle", "description"]),
                    g = (0, d.r)().prefixCls,
                    b = "".concat(g, "-actionSheet-header"),
                    y = f()(b, e.className);
                return t && void 0 === n && (n = a().createElement(Wo.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), s && void 0 === l && (l = a().createElement(Qa.A, {
                    name: "Close1C",
                    color: "PrimaryText"
                })), a().createElement(c.Ay, (0, o.__assign)({}, h, {
                    className: y
                }), t ? a().createElement(c.Ay, {
                    className: "".concat(b, "-prev"),
                    onClick: i,
                    children: n
                }) : null, a().createElement(c.Ay, {
                    className: "".concat(b, "-main")
                }, e.children, m && a().createElement(c.Ay, {
                    className: "".concat(b, "-main-subtitle"),
                    children: m
                }), v && a().createElement(c.Ay, {
                    className: "".concat(b, "-main-description"),
                    children: v
                })), s ? a().createElement(c.Ay, {
                    className: "".concat(b, "-next"),
                    onClick: p,
                    children: l
                }) : null)
            }, qo.Content = function(e) {
                var t = (0, d.r)().prefixCls,
                    n = "".concat(t, "-actionSheet-content"),
                    r = f()(n, e.className);
                return a().createElement(c.Ay, (0, o.__assign)({}, e, {
                    className: r
                }))
            }, qo.Footer = function(e) {
                var t = (0, d.r)().prefixCls,
                    n = "".concat(t, "-actionSheet-footer"),
                    r = f()(n, e.className);
                return a().createElement(c.Ay, (0, o.__assign)({}, e, {
                    className: r
                }))
            };
            const Ho = qo;
            const $o = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            };
            var Ko = n("5G2I"),
                Go = n.n(Ko),
                Yo = function(e) {
                    return e.stopPropagation()
                },
                Zo = function(e) {
                    var t = e.value,
                        n = e.onRemove,
                        i = e.children,
                        s = void 0 === i ? t : i,
                        l = e.disabled,
                        u = (0, o.__rest)(e, ["value", "onRemove", "children", "disabled"]),
                        p = (0, d.r)().prefixCls,
                        m = "".concat(p, "-select-field-block"),
                        v = f()(m, e.className),
                        h = (0, r.useCallback)((function() {
                            n && n(t)
                        }), [n, t]),
                        g = (0, r.useMemo)((function() {
                            return a().isValidElement(s) ? s : a().createElement(c.Ay, {
                                as: "span",
                                className: "".concat(m, "-value")
                            }, s)
                        }), [s]);
                    return a().createElement(c.Ay, (0, o.__assign)({}, u, {
                        className: v,
                        onClick: Yo
                    }), g, !l && a().createElement(Qa.A, {
                        name: "Close1C",
                        className: "".concat(m, "-remove"),
                        onClick: h
                    }))
                },
                Qo = function(e) {
                    var t = e.type,
                        n = e.value,
                        r = e.label;
                    return r && "single" === t ? a().createElement(c.Ay, {
                        className: "data-label-input"
                    }, a().createElement(c.Ay, {
                        className: "data-label",
                        as: "span"
                    }, r), a().createElement(c.Ay, {
                        className: "data-value",
                        as: "span"
                    }, n)) : n
                },
                Xo = function(e) {
                    var t = e.type,
                        n = e.selects,
                        r = void 0 === n ? [] : n,
                        o = e.onRemove,
                        i = e.fieldLabel,
                        s = e.options;
                    if (s) {
                        var c = new Map(s.map((function(e) {
                                return [e.value, e]
                            }))),
                            l = r.map((function(e) {
                                return c.get(e)
                            })).filter((function(e) {
                                return void 0 !== e
                            }));
                        if ("single" === t) {
                            var u = l[0].children;
                            return Qo({
                                value: u,
                                label: i,
                                type: t
                            })
                        }
                        return l.map((function(e, t) {
                            return a().createElement(Zo, {
                                key: t,
                                value: e.value,
                                onRemove: o,
                                disabled: e.disabled,
                                children: e.children
                            })
                        }))
                    }
                    return "single" === t ? Qo({
                        value: r[0],
                        label: i,
                        type: t
                    }) : r.map((function(e, t) {
                        return a().createElement(Zo, {
                            key: t,
                            value: e,
                            onRemove: o
                        })
                    }))
                };
            const Jo = function(e) {
                var t, n = e.prefix,
                    r = e.active,
                    i = e.disabled,
                    s = e.onRemove,
                    l = e.type,
                    u = void 0 === l ? "single" : l,
                    p = e.size,
                    m = void 0 === p ? "middle" : p,
                    v = e.selects,
                    h = void 0 === v ? [] : v,
                    g = e.placeholder,
                    b = void 0 === g ? "" : g,
                    y = e.renderFn,
                    w = void 0 === y ? Xo : y,
                    x = e.fieldVariant,
                    E = e.fieldLabel,
                    A = e.onFieldClick,
                    k = e.options,
                    C = e.className,
                    _ = e.ariaControls,
                    N = (0, d.r)().prefixCls,
                    S = "".concat(N, "-select-field"),
                    M = f()(S, ((t = {})["data-".concat(u)] = !!u, t["data-size-".concat(m)] = !!m, t["data-".concat(x)] = !!x, t.disabled = !!i, t.active = !!r, t), C),
                    I = {
                        role: "combobox",
                        tabIndex: i ? void 0 : 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": r,
                        "aria-disabled": i || void 0,
                        "aria-controls": _,
                        "aria-label": b || "Select an option"
                    },
                    R = a().useMemo((function() {
                        return Go()([
                            [function() {
                                return !!h.length
                            }, function() {
                                return w({
                                    selects: h,
                                    active: r,
                                    type: u,
                                    onRemove: s,
                                    fieldLabel: E,
                                    options: k
                                })
                            }],
                            [function() {
                                return !0
                            }, function() {
                                return a().createElement(c.Ay, {
                                    "aria-disabled": "true",
                                    className: "".concat(S, "-placeholder"),
                                    children: Qo({
                                        value: b,
                                        label: E,
                                        type: u
                                    })
                                })
                            }]
                        ])()
                    }), [w, h, u, s, S, b, k, E, r, Qo]);
                return a().createElement(c.Ay, (0, o.__assign)({
                    className: M,
                    onClick: A
                }, I), n && a().createElement(c.Ay, {
                    className: "".concat(S, "-prefix"),
                    children: n
                }), a().createElement(c.Ay, {
                    className: "".concat(S, "-input"),
                    children: R
                }), a().createElement($o, {
                    name: "CaretDown1C",
                    color: "IconNormal",
                    className: "".concat(S, "-arrow")
                }))
            };
            const ei = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            };
            var ti = function(e) {
                var t, n = e.value,
                    i = e.disabled,
                    s = e.active,
                    l = e.onSelect,
                    u = e.type,
                    p = e.optionCheckIcon,
                    m = e.wrapperType,
                    v = e.deselectable,
                    h = (0, o.__rest)(e, ["value", "disabled", "active", "onSelect", "type", "optionCheckIcon", "wrapperType", "deselectable"]),
                    g = (0, d.r)().prefixCls,
                    b = "".concat(g, "-select-option"),
                    y = f()(b, ((t = {
                        active: !!s,
                        disabled: !!i,
                        icon: !!p
                    })["".concat(b, "__").concat(m)] = "drawer" === m, t), e.className),
                    w = (0, r.useCallback)((function(e) {
                        if (i) return e.stopPropagation();
                        if (!i && l) {
                            if ("single" === u && s && !v) return;
                            l(n)
                        }
                    }), [n, l, i, u, s, v]),
                    x = {
                        role: "option",
                        "aria-selected": s,
                        "aria-disabled": i
                    };
                return a().createElement(c.Ay, (0, o.__assign)({}, x, h, {
                    onClick: w,
                    className: y
                }), e.children, s && p && a().createElement(ei, {
                    name: "Checkmark1C",
                    color: "PrimaryText"
                }))
            };
            ti.__name = "SelectOption";
            const ni = ti;
            const ri = function(e) {
                var t = e.title,
                    n = e.selects,
                    r = void 0 === n ? [] : n,
                    i = e.onSelect,
                    s = e.className,
                    l = (0, o.__rest)(e, ["title", "selects", "onSelect", "className"]),
                    u = (0, d.r)().prefixCls,
                    p = "".concat(u, "-select-option-group");
                return a().createElement(c.Ay, (0, o.__assign)({}, l, {
                    className: f()(p, s)
                }), a().createElement(c.Ay, {
                    className: "".concat(p, "-title"),
                    children: t
                }), a().Children.map(e.children, (function(e) {
                    var t;
                    if (!a().isValidElement(e)) return null;
                    if ("SelectOption" !== (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) return null;
                    var n = r.indexOf(e.props.value) > -1;
                    return a().cloneElement(e, {
                        onSelect: i,
                        active: n
                    })
                })))
            };
            var ai = function(e) {
                var t = e.value,
                    n = e.disabled,
                    i = e.active,
                    s = e.onSelect,
                    l = (e.wrapperType, (0, o.__rest)(e, ["value", "disabled", "active", "onSelect", "wrapperType"])),
                    u = (0, d.r)().prefixCls,
                    p = "".concat(u, "-select-option"),
                    m = f()(p, {
                        active: !!i,
                        disabled: !!n,
                        multi: !0
                    }, e.className),
                    v = (0, r.useCallback)((function(e) {
                        if (n) return e.stopPropagation();
                        !n && s && s(t)
                    }), [t, s, n, i]),
                    h = {
                        role: "option",
                        "aria-selected": i,
                        "aria-disabled": n
                    };
                return a().createElement(c.Ay, (0, o.__assign)({}, h, l, {
                    onClick: v,
                    className: m
                }), a().createElement(co, {
                    value: t,
                    checked: i,
                    children: e.children,
                    disabled: n,
                    sz: "lg"
                }))
            };
            ai.__name = "SelectOption";
            const oi = ai;
            const ii = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            };

            function si(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                }
                return n
            }
            var ci;

            function li() {}

            function ui(e) {
                return !!(e || "").match(/\d/)
            }

            function fi(e) {
                return null === e || void 0 === e
            }

            function di(e) {
                return fi(e) || function(e) {
                    return "number" === typeof e && isNaN(e)
                }(e) || "number" === typeof e && !isFinite(e)
            }

            function pi(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function mi(e, t) {
                void 0 === t && (t = !0);
                var n = "-" === e[0],
                    r = n && t,
                    a = (e = e.replace("-", "")).split(".");
                return {
                    beforeDecimal: a[0],
                    afterDecimal: a[1] || "",
                    hasNegation: n,
                    addNegation: r
                }
            }

            function vi(e, t, n) {
                for (var r = "", a = n ? "0" : "", o = 0; o <= t - 1; o++) r += e[o] || a;
                return r
            }

            function hi(e, t) {
                return Array(t + 1).join(e)
            }

            function gi(e) {
                var t = e + "",
                    n = "-" === t[0] ? "-" : "";
                n && (t = t.substring(1));
                var r = t.split(/[eE]/g),
                    a = r[0],
                    o = r[1];
                if (!(o = Number(o))) return n + a;
                var i = 1 + o,
                    s = (a = a.replace(".", "")).length;
                return i < 0 ? a = "0." + hi("0", Math.abs(i)) + a : i >= s ? a += hi("0", i - s) : a = (a.substring(0, i) || "0") + "." + a.substring(i), n + a
            }

            function bi(e, t, n) {
                if (-1 !== ["", "-"].indexOf(e)) return e;
                var r = (-1 !== e.indexOf(".") || n) && t,
                    a = mi(e),
                    o = a.beforeDecimal,
                    i = a.afterDecimal,
                    s = a.hasNegation,
                    c = parseFloat("0." + (i || "0")),
                    l = (i.length <= t ? "0." + i : c.toFixed(t)).split("."),
                    u = o;
                return o && Number(l[0]) && (u = o.split("").reverse().reduce((function(e, t, n) {
                    return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
                }), l[0])), "" + (s ? "-" : "") + u + (r ? "." : "") + vi(l[1] || "", t, n)
            }

            function yi(e, t) {
                if (e.value = e.value, null !== e) {
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        return n.move("character", t), n.select(), !0
                    }
                    return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }! function(e) {
                e.event = "event", e.props = "prop"
            }(ci || (ci = {}));
            var wi = function(e) {
                var t, n = void 0;
                return function() {
                    for (var r = [], a = arguments.length; a--;) r[a] = arguments[a];
                    return t && r.length === t.length && r.every((function(e, n) {
                        return e === t[n]
                    })) ? n : (t = r, n = e.apply(void 0, r))
                }
            }((function(e, t) {
                for (var n = 0, r = 0, a = e.length, o = t.length; e[n] === t[n] && n < a;) n++;
                for (; e[a - 1 - r] === t[o - 1 - r] && o - r > n && a - r > n;) r++;
                return {
                    from: {
                        start: n,
                        end: a - r
                    },
                    to: {
                        start: n,
                        end: o - r
                    }
                }
            }));

            function xi(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function Ei(e) {
                return {
                    from: {
                        start: 0,
                        end: 0
                    },
                    to: {
                        start: 0,
                        end: e.length
                    },
                    lastValue: ""
                }
            }

            function Ai(e) {
                var t = e.currentValue,
                    n = e.formattedValue,
                    r = e.currentValueIndex,
                    a = e.formattedValueIndex;
                return t[r] === n[a]
            }

            function ki(e, t, n, r) {
                var a, o, i, s = e.length;
                if (a = t, o = 0, i = s, t = Math.min(Math.max(a, o), i), "left" === r) {
                    for (; t >= 0 && !n[t];) t--; - 1 === t && (t = n.indexOf(!0))
                } else {
                    for (; t <= s && !n[t];) t++;
                    t > s && (t = n.lastIndexOf(!0))
                }
                return -1 === t && (t = s), t
            }

            function Ci(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map((function() {
                        return !0
                    })), n = 0, r = t.length; n < r; n++) t[n] = Boolean(ui(e[n]) || ui(e[n - 1]));
                return t
            }

            function _i(e, t, n, a, o, i) {
                void 0 === i && (i = li);
                var s = function(e) {
                        var t = (0, r.useRef)(e);
                        t.current = e;
                        var n = (0, r.useRef)((function() {
                            for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                            return t.current.apply(t, e)
                        }));
                        return n.current
                    }((function(e, t) {
                        var n, r;
                        return di(e) ? (r = "", n = "") : "number" === typeof e || t ? (r = "number" === typeof e ? gi(e) : e, n = a(r)) : (r = o(e, void 0), n = a(r)), {
                            formattedValue: n,
                            numAsString: r
                        }
                    })),
                    c = (0, r.useState)((function() {
                        return s(fi(e) ? t : e, n)
                    })),
                    l = c[0],
                    u = c[1],
                    f = e,
                    d = n;
                fi(e) && (f = l.numAsString, d = !0);
                var p = s(f, d);
                return (0, r.useMemo)((function() {
                    u(p)
                }), [p.formattedValue]), [l, function(e, t) {
                    e.formattedValue !== l.formattedValue && u({
                        formattedValue: e.formattedValue,
                        numAsString: e.value
                    }), i(e, t)
                }]
            }

            function Ni(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function Si(e) {
                return e
            }

            function Mi(e) {
                var t = e.type;
                void 0 === t && (t = "text");
                var n = e.displayType;
                void 0 === n && (n = "input");
                var o = e.customInput,
                    i = e.renderText,
                    s = e.getInputRef,
                    c = e.format;
                void 0 === c && (c = Si);
                var l = e.removeFormatting;
                void 0 === l && (l = Ni);
                var u = e.defaultValue,
                    f = e.valueIsNumericString,
                    d = e.onValueChange,
                    p = e.isAllowed,
                    m = e.onChange;
                void 0 === m && (m = li);
                var v = e.onKeyDown;
                void 0 === v && (v = li);
                var h = e.onMouseUp;
                void 0 === h && (h = li);
                var g = e.onFocus;
                void 0 === g && (g = li);
                var b = e.onBlur;
                void 0 === b && (b = li);
                var y = e.value,
                    w = e.getCaretBoundary;
                void 0 === w && (w = Ci);
                var x = e.isValidInputCharacter;
                void 0 === x && (x = ui);
                var E = e.isCharacterSame,
                    A = si(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]),
                    k = _i(y, u, Boolean(f), c, l, d),
                    C = k[0],
                    _ = C.formattedValue,
                    N = C.numAsString,
                    S = k[1],
                    M = (0, r.useRef)(),
                    I = (0, r.useRef)({
                        formattedValue: _,
                        numAsString: N
                    }),
                    R = function(e, t) {
                        I.current = {
                            formattedValue: e.formattedValue,
                            numAsString: e.value
                        }, S(e, t)
                    },
                    O = (0, r.useState)(!1),
                    T = O[0],
                    L = O[1],
                    B = (0, r.useRef)(null),
                    D = (0, r.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, r.useEffect)((function() {
                    return L(!0),
                        function() {
                            clearTimeout(D.current.setCaretTimeout), clearTimeout(D.current.focusTimeout)
                        }
                }), []);
                var P = c,
                    F = function(e, t) {
                        var n = parseFloat(t);
                        return {
                            formattedValue: e,
                            value: t,
                            floatValue: isNaN(n) ? void 0 : n
                        }
                    },
                    z = function(e, t, n) {
                        0 === e.selectionStart && e.selectionEnd === e.value.length || (yi(e, t), D.current.setCaretTimeout = setTimeout((function() {
                            e.value === n && e.selectionStart !== t && yi(e, t)
                        }), 0))
                    },
                    V = function(e, t, n) {
                        return ki(e, t, w(e), n)
                    },
                    U = function(e, t, n) {
                        var r = w(t),
                            a = function(e, t, n, r, a, o, i) {
                                void 0 === i && (i = Ai);
                                var s = a.findIndex((function(e) {
                                        return e
                                    })),
                                    c = e.slice(0, s);
                                t || n.startsWith(c) || (t = c, n = c + n, r += c.length);
                                for (var l = n.length, u = e.length, f = {}, d = new Array(l), p = 0; p < l; p++) {
                                    d[p] = -1;
                                    for (var m = 0, v = u; m < v; m++)
                                        if (i({
                                                currentValue: n,
                                                lastValue: t,
                                                formattedValue: e,
                                                currentValueIndex: p,
                                                formattedValueIndex: m
                                            }) && !0 !== f[m]) {
                                            d[p] = m, f[m] = !0;
                                            break
                                        }
                                }
                                for (var h = r; h < l && (-1 === d[h] || !o(n[h]));) h++;
                                var g = h === l || -1 === d[h] ? u : d[h];
                                for (h = r - 1; h > 0 && -1 === d[h];) h--;
                                var b = -1 === h || -1 === d[h] ? 0 : d[h] + 1;
                                return b > g ? g : r - b < g - r ? b : g
                            }(t, _, e, n, r, x, E);
                        return a = ki(t, a, r)
                    };
                (0, r.useEffect)((function() {
                    var e = I.current,
                        t = e.formattedValue,
                        n = e.numAsString;
                    _ === t && N === n || R(F(_, N), {
                        event: void 0,
                        source: ci.props
                    })
                }), [_, N]);
                var j = B.current ? xi(B.current) : void 0;
                (0, r.useLayoutEffect)((function() {
                    var e = B.current;
                    if (_ !== I.current.formattedValue && e) {
                        var t = U(I.current.formattedValue, _, j);
                        e.value = _, z(e, t, _)
                    }
                }), [_]);
                var W = function(e, t, n) {
                        var r = t.target,
                            a = M.current ? function(e, t) {
                                var n = Math.min(e.selectionStart, t);
                                return {
                                    from: {
                                        start: n,
                                        end: e.selectionEnd
                                    },
                                    to: {
                                        start: n,
                                        end: t
                                    }
                                }
                            }(M.current, r.selectionEnd) : wi(_, e),
                            o = Object.assign(Object.assign({}, a), {
                                lastValue: _
                            }),
                            i = l(e, o),
                            s = P(i);
                        if (i = l(s, void 0), p && !p(F(s, i))) {
                            var c = t.target,
                                u = xi(c),
                                f = U(e, _, u);
                            return c.value = _, z(c, f, _), !1
                        }
                        return function(e) {
                            var t = e.formattedValue;
                            void 0 === t && (t = "");
                            var n, r = e.input,
                                a = e.source,
                                o = e.event,
                                i = e.numAsString;
                            if (r) {
                                var s = e.inputValue || r.value,
                                    c = xi(r);
                                r.value = t, void 0 !== (n = U(s, t, c)) && z(r, n, t)
                            }
                            t !== _ && R(F(t, i), {
                                event: o,
                                source: a
                            })
                        }({
                            formattedValue: s,
                            numAsString: i,
                            inputValue: e,
                            event: t,
                            source: n,
                            input: t.target
                        }), !0
                    },
                    q = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = e.selectionStart,
                            r = e.selectionEnd;
                        M.current = {
                            selectionStart: n,
                            selectionEnd: r + t
                        }
                    },
                    H = !T || "undefined" === typeof navigator || navigator.platform && /iPhone|iPod/.test(navigator.platform) ? void 0 : "numeric",
                    $ = Object.assign({
                        inputMode: H
                    }, A, {
                        type: t,
                        value: _,
                        onChange: function(e) {
                            var t = e.target.value;
                            W(t, e, ci.event) && m(e), M.current = void 0
                        },
                        onKeyDown: function(e) {
                            var t, n = e.target,
                                r = e.key,
                                a = n.selectionStart,
                                o = n.selectionEnd,
                                i = n.value;
                            void 0 === i && (i = ""), "ArrowLeft" === r || "Backspace" === r ? t = Math.max(a - 1, 0) : "ArrowRight" === r ? t = Math.min(a + 1, i.length) : "Delete" === r && (t = a);
                            var s = 0;
                            "Delete" === r && a === o && (s = 1);
                            var c = "ArrowLeft" === r || "ArrowRight" === r;
                            if (void 0 === t || a !== o && !c) return v(e), void q(n, s);
                            var l = t;
                            c ? (l = V(i, t, "ArrowLeft" === r ? "left" : "right")) !== t && e.preventDefault() : "Delete" !== r || x(i[t]) ? "Backspace" !== r || x(i[t]) || (l = V(i, t, "left")) : l = V(i, t, "right");
                            l !== t && z(n, l, i), v(e), q(n, s)
                        },
                        onMouseUp: function(e) {
                            var t = e.target,
                                n = function() {
                                    var e = t.selectionStart,
                                        n = t.selectionEnd,
                                        r = t.value;
                                    if (void 0 === r && (r = ""), e === n) {
                                        var a = V(r, e);
                                        a !== e && z(t, a, r)
                                    }
                                };
                            n(), requestAnimationFrame((function() {
                                n()
                            })), h(e), q(t)
                        },
                        onFocus: function(e) {
                            e.persist && e.persist();
                            var t = e.target,
                                n = e.currentTarget;
                            B.current = t, D.current.focusTimeout = setTimeout((function() {
                                var r = t.selectionStart,
                                    a = t.selectionEnd,
                                    o = t.value;
                                void 0 === o && (o = "");
                                var i = V(o, r);
                                i === r || 0 === r && a === o.length || z(t, i, o), g(Object.assign(Object.assign({}, e), {
                                    currentTarget: n
                                }))
                            }), 0)
                        },
                        onBlur: function(e) {
                            B.current = null, clearTimeout(D.current.focusTimeout), clearTimeout(D.current.setCaretTimeout), b(e)
                        }
                    });
                if ("text" === n) return i ? a().createElement(a().Fragment, null, i(_, A) || null) : a().createElement("span", Object.assign({}, A, {
                    ref: s
                }), _);
                if (o) {
                    var K = o;
                    return a().createElement(K, Object.assign({}, $, {
                        ref: s
                    }))
                }
                return a().createElement("input", Object.assign({}, $, {
                    ref: s
                }))
            }

            function Ii(e, t) {
                var n = t.decimalScale,
                    r = t.fixedDecimalScale,
                    a = t.prefix;
                void 0 === a && (a = "");
                var o = t.suffix;
                void 0 === o && (o = "");
                var i = t.allowNegative,
                    s = t.thousandsGroupStyle;
                if (void 0 === s && (s = "thousand"), "" === e || "-" === e) return e;
                var c = Ri(t),
                    l = c.thousandSeparator,
                    u = c.decimalSeparator,
                    f = 0 !== n && -1 !== e.indexOf(".") || n && r,
                    d = mi(e, i),
                    p = d.beforeDecimal,
                    m = d.afterDecimal,
                    v = d.addNegation;
                return void 0 !== n && (m = vi(m, n, !!r)), l && (p = function(e, t, n) {
                    var r = function(e) {
                            switch (e) {
                                case "lakh":
                                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                case "wan":
                                    return /(\d)(?=(\d{4})+(?!\d))/g;
                                default:
                                    return /(\d)(?=(\d{3})+(?!\d))/g
                            }
                        }(n),
                        a = e.search(/[1-9]/);
                    return a = -1 === a ? e.length : a, e.substring(0, a) + e.substring(a, e.length).replace(r, "$1" + t)
                }(p, l, s)), a && (p = a + p), o && (m += o), v && (p = "-" + p), e = p + (f && u || "") + m
            }

            function Ri(e) {
                var t = e.decimalSeparator;
                void 0 === t && (t = ".");
                var n = e.thousandSeparator,
                    r = e.allowedDecimalSeparators;
                return !0 === n && (n = ","), r || (r = [t, "."]), {
                    decimalSeparator: t,
                    thousandSeparator: n,
                    allowedDecimalSeparators: r
                }
            }

            function Oi(e, t, n) {
                var r;
                void 0 === t && (t = Ei(e));
                var a = n.allowNegative,
                    o = n.prefix;
                void 0 === o && (o = "");
                var i = n.suffix;
                void 0 === i && (i = "");
                var s = n.decimalScale,
                    c = t.from,
                    l = t.to,
                    u = l.start,
                    f = l.end,
                    d = Ri(n),
                    p = d.allowedDecimalSeparators,
                    m = d.decimalSeparator,
                    v = e[f] === m;
                if (ui(e) && (e === o || e === i) && "" === t.lastValue) return e;
                if (f - u === 1 && -1 !== p.indexOf(e[u])) {
                    var h = 0 === s ? "" : m;
                    e = e.substring(0, u) + h + e.substring(u + 1, e.length)
                }
                var g = function(e, t, n) {
                        var r = !1,
                            a = !1;
                        o.startsWith("-") ? r = !1 : e.startsWith("--") ? (r = !1, a = !0) : i.startsWith("-") && e.length === i.length ? r = !1 : "-" === e[0] && (r = !0);
                        var s = r ? 1 : 0;
                        return a && (s = 2), s && (e = e.substring(s), t -= s, n -= s), {
                            value: e,
                            start: t,
                            end: n,
                            hasNegation: r
                        }
                    },
                    b = g(e, u, f),
                    y = b.hasNegation;
                e = (r = b).value, u = r.start, f = r.end;
                var w = g(t.lastValue, c.start, c.end),
                    x = w.start,
                    E = w.end,
                    A = w.value,
                    k = e.substring(u, f);
                !(e.length && A.length && (x > A.length - i.length || E < o.length)) || k && i.startsWith(k) || (e = A);
                var C = 0;
                e.startsWith(o) ? C += o.length : u < o.length && (C = u), f -= C;
                var _ = (e = e.substring(C)).length,
                    N = e.length - i.length;
                e.endsWith(i) ? _ = N : (f > N || f > e.length - i.length) && (_ = f), e = e.substring(0, _), e = function(e, t) {
                    void 0 === e && (e = "");
                    var n = new RegExp("(-)"),
                        r = new RegExp("(-)(.)*(-)"),
                        a = n.test(e),
                        o = r.test(e);
                    return e = e.replace(/-/g, ""), a && !o && t && (e = "-" + e), e
                }(y ? "-" + e : e, a), e = (e.match(function(e, t) {
                    return new RegExp("(^-)|[0-9]|" + pi(e), t ? "g" : void 0)
                }(m, !0)) || []).join("");
                var S = e.indexOf(m),
                    M = mi(e = e.replace(new RegExp(pi(m), "g"), (function(e, t) {
                        return t === S ? "." : ""
                    })), a),
                    I = M.beforeDecimal,
                    R = M.afterDecimal,
                    O = M.addNegation;
                return l.end - l.start < c.end - c.start && "" === I && v && !parseFloat(R) && (e = O ? "-" : ""), e
            }

            function Ti(e) {
                e = function(e) {
                    var t = Ri(e),
                        n = t.thousandSeparator,
                        r = t.decimalSeparator,
                        a = e.prefix;
                    void 0 === a && (a = "");
                    var o = e.allowNegative;
                    if (void 0 === o && (o = !0), n === r) throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + n + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + r + " (default value for decimalSeparator is .)\n     ");
                    return a.startsWith("-") && o && (console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + a + "\n      allowNegative: " + o + "\n    "), o = !1), Object.assign(Object.assign({}, e), {
                        allowNegative: o
                    })
                }(e);
                e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
                var t = e.suffix,
                    n = e.allowNegative,
                    r = e.allowLeadingZeros,
                    a = e.onKeyDown;
                void 0 === a && (a = li);
                var o = e.onBlur;
                void 0 === o && (o = li);
                var i = e.thousandSeparator,
                    s = e.decimalScale,
                    c = e.fixedDecimalScale,
                    l = e.prefix;
                void 0 === l && (l = "");
                var u = e.defaultValue,
                    f = e.value,
                    d = e.valueIsNumericString,
                    p = e.onValueChange,
                    m = si(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]),
                    v = Ri(e),
                    h = v.decimalSeparator,
                    g = v.allowedDecimalSeparators,
                    b = function(t) {
                        return Ii(t, e)
                    },
                    y = function(t, n) {
                        return Oi(t, n, e)
                    },
                    w = fi(f) ? u : f,
                    x = null !== d && void 0 !== d ? d : function(e, t, n) {
                        return "" === e || !(null === t || void 0 === t ? void 0 : t.match(/\d/)) && !(null === n || void 0 === n ? void 0 : n.match(/\d/)) && "string" === typeof e && !isNaN(Number(e))
                    }(w, l, t);
                fi(f) ? fi(u) || (x = x || "number" === typeof u) : x = x || "number" === typeof f;
                var E = function(e) {
                        return di(e) ? e : ("number" === typeof e && (e = gi(e)), x && "number" === typeof s ? bi(e, s, Boolean(c)) : e)
                    },
                    A = _i(E(f), E(u), Boolean(x), b, y, p),
                    k = A[0],
                    C = k.numAsString,
                    _ = k.formattedValue,
                    N = A[1];
                return Object.assign(Object.assign({}, m), {
                    value: _,
                    valueIsNumericString: !1,
                    isValidInputCharacter: function(e) {
                        return e === h || ui(e)
                    },
                    isCharacterSame: function(e) {
                        var t = e.currentValue,
                            n = e.lastValue,
                            r = e.formattedValue,
                            a = e.currentValueIndex,
                            o = e.formattedValueIndex,
                            i = t[a],
                            u = r[o],
                            d = wi(n, t).to,
                            p = function(e) {
                                return y(e).indexOf(".") + l.length
                            };
                        return !(0 === f && c && s && t[d.start] === h && p(t) < a && p(r) > o) && (!!(a >= d.start && a < d.end && g && g.includes(i) && u === h) || i === u)
                    },
                    onValueChange: N,
                    format: b,
                    removeFormatting: y,
                    getCaretBoundary: function(t) {
                        return function(e, t) {
                            var n = t.prefix;
                            void 0 === n && (n = "");
                            var r = t.suffix;
                            void 0 === r && (r = "");
                            var a = Array.from({
                                    length: e.length + 1
                                }).map((function() {
                                    return !0
                                })),
                                o = "-" === e[0];
                            a.fill(!1, 0, n.length + (o ? 1 : 0));
                            var i = e.length;
                            return a.fill(!1, i - r.length + 1, i + 1), a
                        }(t, e)
                    },
                    onKeyDown: function(e) {
                        var t = e.target,
                            r = e.key,
                            o = t.selectionStart,
                            u = t.selectionEnd,
                            f = t.value;
                        if (void 0 === f && (f = ""), ("Backspace" === r || "Delete" === r) && u < l.length) e.preventDefault();
                        else if (o === u) {
                            "Backspace" === r && "-" === f[0] && o === l.length + 1 && n && yi(t, 1), s && c && ("Backspace" === r && f[o - 1] === h ? (yi(t, o - 1), e.preventDefault()) : "Delete" === r && f[o] === h && e.preventDefault()), (null === g || void 0 === g ? void 0 : g.includes(r)) && f[o] === h && yi(t, o + 1);
                            var d = !0 === i ? "," : i;
                            "Backspace" === r && f[o - 1] === d && yi(t, o - 1), "Delete" === r && f[o] === d && yi(t, o + 1), a(e)
                        } else a(e)
                    },
                    onBlur: function(t) {
                        var n = C;
                        if (n.match(/\d/g) || (n = ""), r || (n = function(e) {
                                if (!e) return e;
                                var t = "-" === e[0];
                                t && (e = e.substring(1, e.length));
                                var n = e.split("."),
                                    r = n[0].replace(/^0+/, "") || "0",
                                    a = n[1] || "";
                                return (t ? "-" : "") + r + (a ? "." + a : "")
                            }(n)), c && s && (n = bi(n, s, c)), n !== C) {
                            var a = Ii(n, e);
                            N({
                                formattedValue: a,
                                value: n,
                                floatValue: parseFloat(n)
                            }, {
                                event: t,
                                source: ci.event
                            })
                        }
                        o(t)
                    }
                })
            }

            function Li(e) {
                var t = Ti(e);
                return a().createElement(Mi, Object.assign({}, t))
            }
            var Bi = function(e) {
                    return e
                },
                Di = 1e6,
                Pi = 1e6,
                Fi = "[big.js] ",
                zi = Fi + "Invalid ",
                Vi = zi + "decimal places",
                Ui = Fi + "Division by zero",
                ji = {},
                Wi = void 0,
                qi = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function Hi(e, t, n, r) {
                var a = e.c;
                if (n === Wi && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error("[big.js] Invalid rounding mode");
                if (t < 1) r = 3 === n && (r || !!a[0]) || 0 === t && (1 === n && a[0] >= 5 || 2 === n && (a[0] > 5 || 5 === a[0] && (r || a[1] !== Wi))), a.length = 1, r ? (e.e = e.e - t + 1, a[0] = 1) : a[0] = e.e = 0;
                else if (t < a.length) {
                    if (r = 1 === n && a[t] >= 5 || 2 === n && (a[t] > 5 || 5 === a[t] && (r || a[t + 1] !== Wi || 1 & a[t - 1])) || 3 === n && (r || !!a[0]), a.length = t, r)
                        for (; ++a[--t] > 9;)
                            if (a[t] = 0, 0 === t) {
                                ++e.e, a.unshift(1);
                                break
                            }
                    for (t = a.length; !a[--t];) a.pop()
                }
                return e
            }

            function $i(e, t, n) {
                var r = e.e,
                    a = e.c.join(""),
                    o = a.length;
                if (t) a = a.charAt(0) + (o > 1 ? "." + a.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                else if (r < 0) {
                    for (; ++r;) a = "0" + a;
                    a = "0." + a
                } else if (r > 0)
                    if (++r > o)
                        for (r -= o; r--;) a += "0";
                    else r < o && (a = a.slice(0, r) + "." + a.slice(r));
                else o > 1 && (a = a.charAt(0) + "." + a.slice(1));
                return e.s < 0 && n ? "-" + a : a
            }
            ji.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, ji.cmp = function(e) {
                var t, n = this,
                    r = n.c,
                    a = (e = new n.constructor(e)).c,
                    o = n.s,
                    i = e.s,
                    s = n.e,
                    c = e.e;
                if (!r[0] || !a[0]) return r[0] ? o : a[0] ? -i : 0;
                if (o != i) return o;
                if (t = o < 0, s != c) return s > c ^ t ? 1 : -1;
                for (i = (s = r.length) < (c = a.length) ? s : c, o = -1; ++o < i;)
                    if (r[o] != a[o]) return r[o] > a[o] ^ t ? 1 : -1;
                return s == c ? 0 : s > c ^ t ? 1 : -1
            }, ji.div = function(e) {
                var t = this,
                    n = t.constructor,
                    r = t.c,
                    a = (e = new n(e)).c,
                    o = t.s == e.s ? 1 : -1,
                    i = n.DP;
                if (i !== ~~i || i < 0 || i > Di) throw Error(Vi);
                if (!a[0]) throw Error(Ui);
                if (!r[0]) return e.s = o, e.c = [e.e = 0], e;
                var s, c, l, u, f, d = a.slice(),
                    p = s = a.length,
                    m = r.length,
                    v = r.slice(0, s),
                    h = v.length,
                    g = e,
                    b = g.c = [],
                    y = 0,
                    w = i + (g.e = t.e - e.e) + 1;
                for (g.s = o, o = w < 0 ? 0 : w, d.unshift(0); h++ < s;) v.push(0);
                do {
                    for (l = 0; l < 10; l++) {
                        if (s != (h = v.length)) u = s > h ? 1 : -1;
                        else
                            for (f = -1, u = 0; ++f < s;)
                                if (a[f] != v[f]) {
                                    u = a[f] > v[f] ? 1 : -1;
                                    break
                                } if (!(u < 0)) break;
                        for (c = h == s ? a : d; h;) {
                            if (v[--h] < c[h]) {
                                for (f = h; f && !v[--f];) v[f] = 9;
                                --v[f], v[h] += 10
                            }
                            v[h] -= c[h]
                        }
                        for (; !v[0];) v.shift()
                    }
                    b[y++] = u ? l : ++l, v[0] && u ? v[h] = r[p] || 0 : v = [r[p]]
                } while ((p++ < m || v[0] !== Wi) && o--);
                return b[0] || 1 == y || (b.shift(), g.e--, w--), y > w && Hi(g, w, n.RM, v[0] !== Wi), g
            }, ji.eq = function(e) {
                return 0 === this.cmp(e)
            }, ji.gt = function(e) {
                return this.cmp(e) > 0
            }, ji.gte = function(e) {
                return this.cmp(e) > -1
            }, ji.lt = function(e) {
                return this.cmp(e) < 0
            }, ji.lte = function(e) {
                return this.cmp(e) < 1
            }, ji.minus = ji.sub = function(e) {
                var t, n, r, a, o = this,
                    i = o.constructor,
                    s = o.s,
                    c = (e = new i(e)).s;
                if (s != c) return e.s = -c, o.plus(e);
                var l = o.c.slice(),
                    u = o.e,
                    f = e.c,
                    d = e.e;
                if (!l[0] || !f[0]) return f[0] ? e.s = -c : l[0] ? e = new i(o) : e.s = 1, e;
                if (s = u - d) {
                    for ((a = s < 0) ? (s = -s, r = l) : (d = u, r = f), r.reverse(), c = s; c--;) r.push(0);
                    r.reverse()
                } else
                    for (n = ((a = l.length < f.length) ? l : f).length, s = c = 0; c < n; c++)
                        if (l[c] != f[c]) {
                            a = l[c] < f[c];
                            break
                        } if (a && (r = l, l = f, f = r, e.s = -e.s), (c = (n = f.length) - (t = l.length)) > 0)
                    for (; c--;) l[t++] = 0;
                for (c = t; n > s;) {
                    if (l[--n] < f[n]) {
                        for (t = n; t && !l[--t];) l[t] = 9;
                        --l[t], l[n] += 10
                    }
                    l[n] -= f[n]
                }
                for (; 0 === l[--c];) l.pop();
                for (; 0 === l[0];) l.shift(), --d;
                return l[0] || (e.s = 1, l = [d = 0]), e.c = l, e.e = d, e
            }, ji.mod = function(e) {
                var t, n = this,
                    r = n.constructor,
                    a = n.s,
                    o = (e = new r(e)).s;
                if (!e.c[0]) throw Error(Ui);
                return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = a, e.s = o, t ? new r(n) : (a = r.DP, o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = a, r.RM = o, this.minus(n.times(e)))
            }, ji.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, ji.plus = ji.add = function(e) {
                var t, n, r, a = this,
                    o = a.constructor;
                if (e = new o(e), a.s != e.s) return e.s = -e.s, a.minus(e);
                var i = a.e,
                    s = a.c,
                    c = e.e,
                    l = e.c;
                if (!s[0] || !l[0]) return l[0] || (s[0] ? e = new o(a) : e.s = a.s), e;
                if (s = s.slice(), t = i - c) {
                    for (t > 0 ? (c = i, r = l) : (t = -t, r = s), r.reverse(); t--;) r.push(0);
                    r.reverse()
                }
                for (s.length - l.length < 0 && (r = l, l = s, s = r), t = l.length, n = 0; t; s[t] %= 10) n = (s[--t] = s[t] + l[t] + n) / 10 | 0;
                for (n && (s.unshift(n), ++c), t = s.length; 0 === s[--t];) s.pop();
                return e.c = s, e.e = c, e
            }, ji.pow = function(e) {
                var t = this,
                    n = new t.constructor("1"),
                    r = n,
                    a = e < 0;
                if (e !== ~~e || e < -1e6 || e > Pi) throw Error(zi + "exponent");
                for (a && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
                return a ? n.div(r) : r
            }, ji.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > Di) throw Error(zi + "precision");
                return Hi(new this.constructor(this), e, t)
            }, ji.round = function(e, t) {
                if (e === Wi) e = 0;
                else if (e !== ~~e || e < -Di || e > Di) throw Error(Vi);
                return Hi(new this.constructor(this), e + this.e + 1, t)
            }, ji.sqrt = function() {
                var e, t, n, r = this,
                    a = r.constructor,
                    o = r.s,
                    i = r.e,
                    s = new a("0.5");
                if (!r.c[0]) return new a(r);
                if (o < 0) throw Error(Fi + "No square root");
                0 === (o = Math.sqrt(r + "")) || o === 1 / 0 ? ((t = r.c.join("")).length + i & 1 || (t += "0"), i = ((i + 1) / 2 | 0) - (i < 0 || 1 & i), e = new a(((o = Math.sqrt(t)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + i)) : e = new a(o + ""), i = e.e + (a.DP += 4);
                do {
                    n = e, e = s.times(n.plus(r.div(n)))
                } while (n.c.slice(0, i).join("") !== e.c.slice(0, i).join(""));
                return Hi(e, (a.DP -= 4) + e.e + 1, a.RM)
            }, ji.times = ji.mul = function(e) {
                var t, n = this,
                    r = n.constructor,
                    a = n.c,
                    o = (e = new r(e)).c,
                    i = a.length,
                    s = o.length,
                    c = n.e,
                    l = e.e;
                if (e.s = n.s == e.s ? 1 : -1, !a[0] || !o[0]) return e.c = [e.e = 0], e;
                for (e.e = c + l, i < s && (t = a, a = o, o = t, l = i, i = s, s = l), t = new Array(l = i + s); l--;) t[l] = 0;
                for (c = s; c--;) {
                    for (s = 0, l = i + c; l > c;) s = t[l] + o[c] * a[l - c - 1] + s, t[l--] = s % 10, s = s / 10 | 0;
                    t[l] = s
                }
                for (s ? ++e.e : t.shift(), c = t.length; !t[--c];) t.pop();
                return e.c = t, e
            }, ji.toExponential = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== Wi) {
                    if (e !== ~~e || e < 0 || e > Di) throw Error(Vi);
                    for (n = Hi(new n.constructor(n), ++e, t); n.c.length < e;) n.c.push(0)
                }
                return $i(n, !0, !!r)
            }, ji.toFixed = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== Wi) {
                    if (e !== ~~e || e < 0 || e > Di) throw Error(Vi);
                    for (e = e + (n = Hi(new n.constructor(n), e + n.e + 1, t)).e + 1; n.c.length < e;) n.c.push(0)
                }
                return $i(n, !1, !!r)
            }, ji[Symbol.for("nodejs.util.inspect.custom")] = ji.toJSON = ji.toString = function() {
                var e = this,
                    t = e.constructor;
                return $i(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
            }, ji.toNumber = function() {
                var e = Number($i(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(Fi + "Imprecise conversion");
                return e
            }, ji.toPrecision = function(e, t) {
                var n = this,
                    r = n.constructor,
                    a = n.c[0];
                if (e !== Wi) {
                    if (e !== ~~e || e < 1 || e > Di) throw Error(zi + "precision");
                    for (n = Hi(new r(n), e, t); n.c.length < e;) n.c.push(0)
                }
                return $i(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!a)
            }, ji.valueOf = function() {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(Fi + "valueOf disallowed");
                return $i(e, e.e <= t.NE || e.e >= t.PE, !0)
            };
            var Ki = function e() {
                function t(n) {
                    var r = this;
                    if (!(r instanceof t)) return n === Wi ? e() : new t(n);
                    if (n instanceof t) r.s = n.s, r.e = n.e, r.c = n.c.slice();
                    else {
                        if ("string" !== typeof n) {
                            if (!0 === t.strict && "bigint" !== typeof n) throw TypeError(zi + "value");
                            n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                        }! function(e, t) {
                            var n, r, a;
                            if (!qi.test(t)) throw Error(zi + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length);
                            for (a = t.length, r = 0; r < a && "0" == t.charAt(r);) ++r;
                            if (r == a) e.c = [e.e = 0];
                            else {
                                for (; a > 0 && "0" == t.charAt(--a););
                                for (e.e = n - r - 1, e.c = [], n = 0; r <= a;) e.c[n++] = +t.charAt(r++)
                            }
                        }(r, n)
                    }
                    r.constructor = t
                }
                return t.prototype = ji, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
            }();
            const Gi = Ki;
            var Yi = n("d4un"),
                Zi = n("X0Bn");
            const Qi = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                    fill: "currentColor"
                }))
            };
            const Xi = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M16.5 15.51v-2.25L12 8.49l-4.5 4.77v2.25h9z",
                    fill: "currentColor"
                }))
            };
            var Ji = n("tKUM"),
                es = {
                    thousandSeparator: ",",
                    decimalSeparator: "."
                },
                ts = {
                    thousandSeparator: " ",
                    decimalSeparator: ","
                },
                ns = {
                    thousandSeparator: ".",
                    decimalSeparator: ","
                },
                rs = {
                    fr: ts,
                    "fr-AF": ts,
                    ru: ts,
                    "ru-KZ": ts,
                    "ru-UA": ts,
                    pl: ts,
                    pt: ts,
                    es: ts,
                    "uk-UA": ts,
                    cs: ts,
                    bg: ts,
                    lv: ts,
                    sk: ts,
                    sl: ts,
                    sv: ts,
                    hu: ts,
                    de: ns,
                    id: ns,
                    it: ns,
                    "pt-BR": ns,
                    ro: ns,
                    vi: ns,
                    "da-DK": ns,
                    el: ns
                },
                as = {
                    decimalScale: 20,
                    allowNegative: !0
                };

            function os(e) {
                void 0 === e && (e = {});
                var t = e.numericFormat,
                    n = e.locale,
                    a = e.isMiniApp,
                    i = (0, r.useState)(n || ""),
                    s = i[0],
                    c = i[1],
                    l = (0, r.useMemo)((function() {
                        return function(e) {
                            if (!e) return es;
                            var t = rs[e];
                            if (t) return t;
                            var n = e.split("-")[0];
                            return rs[n] || es
                        }(s)
                    }), [s]),
                    u = (0, r.useCallback)((function(n) {
                        return t && a ? Ii(n, (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, as), l), e)) : n
                    }), [l, e, t, a]),
                    f = (0, r.useCallback)((function(n) {
                        return t && a ? Oi(n, {
                            from: {
                                start: 0,
                                end: n.length
                            },
                            to: {
                                start: 0,
                                end: n.length
                            },
                            lastValue: ""
                        }, (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, as), l), e)) : n
                    }), [l, e, t, a]);
                return (0, r.useEffect)((function() {
                    if (t) {
                        var e = n || (0, Ji.getLanguage)();
                        c(e)
                    }
                }), [n, t]), {
                    formatter: u,
                    parser: f,
                    config: l
                }
            }
            var is = (0, r.forwardRef)((function(e, t) {
                var n = e.value,
                    i = e.prefix,
                    s = e.suffix,
                    l = e.status,
                    u = e.disabled,
                    p = e.onChange,
                    m = e.defaultValue,
                    v = e.size,
                    h = void 0 === v ? "middle" : v,
                    g = e.variant,
                    b = void 0 === g ? "default" : g,
                    y = e.enableClear,
                    w = void 0 !== y && y,
                    x = (e.validator, e.autoFocus),
                    E = e.onBlur,
                    A = e.onFocus,
                    k = e.disableStyleOnFocus,
                    C = e.mpInputType,
                    _ = e.controls,
                    N = e.isPrefixFixedType,
                    S = e.onStep,
                    M = e.maxlength,
                    I = e.maxLength,
                    R = e.gapSize,
                    O = void 0 === R ? "normal" : R,
                    L = e.type,
                    B = e.numericFormat,
                    D = e.locale,
                    P = (e.onKeyDown, (0, o.__rest)(e, ["value", "prefix", "suffix", "status", "disabled", "onChange", "defaultValue", "size", "variant", "enableClear", "validator", "autoFocus", "onBlur", "onFocus", "disableStyleOnFocus", "mpInputType", "controls", "isPrefixFixedType", "onStep", "maxlength", "maxLength", "gapSize", "type", "numericFormat", "locale", "onKeyDown"])),
                    F = B ? "text" : L,
                    z = P.max,
                    V = P.min,
                    U = P.step,
                    j = os({
                        numericFormat: B,
                        locale: D,
                        isMiniApp: T.lq
                    }),
                    W = j.formatter,
                    q = j.parser,
                    H = j.config,
                    $ = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, (function() {
                    return $.current
                }), []);
                var K = function(e) {
                        var t = e.value,
                            n = e.onChange,
                            o = e.defaultValue,
                            i = void 0 === o ? "" : o,
                            s = e.onBlur,
                            c = e.onFocus,
                            l = e.formatter,
                            u = void 0 === l ? Bi : l,
                            f = e.parser,
                            d = void 0 === f ? Bi : f,
                            p = a().useRef(),
                            m = (0, r.useState)(u(i)),
                            v = m[0],
                            h = m[1],
                            g = (0, r.useState)(!1),
                            b = g[0],
                            y = g[1];
                        p.current = {
                            onChange: n,
                            onBlur: s,
                            onFocus: c
                        }, (0, X.op)((function() {
                            if ("undefined" !== typeof t) {
                                var e = u(t);
                                e !== v && h(e)
                            }
                        }));
                        var w = (0, r.useCallback)((function(e) {
                                y(!1), p.current.onBlur && p.current.onBlur(e)
                            }), []),
                            x = (0, r.useCallback)((function(e) {
                                y(!0), p.current.onFocus && p.current.onFocus(e)
                            }), []),
                            E = (0, r.useCallback)((function(e) {
                                var t = e.target.value,
                                    n = d(t),
                                    r = u(n);
                                h(r), p.current.onChange && p.current.onChange(n, e)
                            }), []);
                        return {
                            input: v,
                            focus: b,
                            onInput: E,
                            onBlur: w,
                            onFocus: x
                        }
                    }({
                        value: n,
                        onBlur: E,
                        onFocus: A,
                        onChange: p,
                        defaultValue: m,
                        formatter: W,
                        parser: q
                    }),
                    G = K.input,
                    Y = K.focus,
                    Z = K.onBlur,
                    Q = K.onFocus,
                    J = K.onInput,
                    ee = (0, d.r)(),
                    te = ee.prefixCls,
                    ne = ee.isRTL,
                    re = "".concat(te, "-textField"),
                    ae = "".concat(re, "-numeric-controls"),
                    oe = "".concat(ae, "-trade"),
                    ie = (0, r.useMemo)((function() {
                        var t;
                        return f()(re, ((t = {})["".concat(re, "-rtl")] = !!ne, t["".concat(re, "__").concat(b)] = !!b, t["data-".concat(l)] = !!l, t["data-size-".concat(h)] = !!h, t["data-gap-size-".concat(O)] = !!O, t["data-prefix-fixed"] = !!N, t[ae] = !!_, t[oe] = "trade" === _, t["".concat(oe, "-suffix")] = "trade" === _ && !!s, t.static = !!k, t.disabled = !!u, t.focus = !!Y, t), e.className)
                    }), [re, ne, b, l, h, O, N, _, k, u, Y, e.className]),
                    se = w && !u && "" !== G,
                    ce = (0, r.useCallback)((function() {
                        J({
                            target: {
                                value: ""
                            }
                        })
                    }), [J]),
                    le = null !== I && void 0 !== I ? I : M,
                    ue = (0, r.useMemo)((function() {
                        return (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, as), {
                            allowedDecimalSeparators: [",", "."]
                        }), H)
                    }), [H, T.lq]),
                    fe = (0, r.useMemo)((function() {
                        return T.lq ? {
                            onInput: J,
                            maxlength: le
                        } : {
                            onChange: J,
                            autoFocus: x,
                            maxLength: le
                        }
                    }), [T.lq, J, le, x]),
                    de = (0, r.useMemo)((function() {
                        return a().createElement(Zi.A, {
                            name: "CircledClose1C",
                            color: "IconNormal"
                        })
                    }), []),
                    pe = (0, r.useMemo)((function() {
                        return "web" === C && Yi.A || Yi.A
                    }), [C]),
                    me = (0, r.useMemo)((function() {
                        return B && !T.lq ? function(e) {
                            return a().createElement(Li, (0, o.__assign)({}, ue, e, {
                                getInputRef: $,
                                onChange: function() {},
                                onValueChange: function(e, t) {
                                    var n = e.value,
                                        r = t.event;
                                    return J((0, o.__assign)((0, o.__assign)({}, r), {
                                        target: {
                                            value: n
                                        }
                                    }))
                                }
                            }))
                        } : pe
                    }), [B, pe, ue]),
                    ve = (0, r.useCallback)((function(e) {
                        return void 0 !== e && function(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        }(e) ? new Gi(e) : null
                    }), []),
                    he = q ? q(G) : G,
                    ge = (0, r.useCallback)((function() {
                        var e = ve(U) || new Gi(1),
                            t = ve(he) || new Gi(0),
                            n = ve(z);
                        if (!n || t.plus(e).lte(n)) {
                            var r = t.plus(e).toString(),
                                a = W ? W(r) : r;
                            J({
                                target: {
                                    value: a
                                }
                            }), null === S || void 0 === S || S(r, {
                                type: "up",
                                step: e.toNumber()
                            })
                        }
                    }), [W, he, J, z, U, S, ve]),
                    be = (0, r.useCallback)((function() {
                        var e = ve(U) || new Gi(1),
                            t = ve(he) || new Gi(0),
                            n = ve(V);
                        if (!n || t.minus(e).gte(n)) {
                            var r = t.minus(e).toString(),
                                a = W ? W(r) : r;
                            J({
                                target: {
                                    value: a
                                }
                            }), null === S || void 0 === S || S(r, {
                                type: "down",
                                step: e.toNumber()
                            })
                        }
                    }), [he, W, J, V, U, S, ve]),
                    ye = (0, r.useMemo)((function() {
                        return i ? N ? a().createElement(c.Ay, {
                            className: f()("".concat(re, "-prefix"), "".concat(re, "-prefix-fixed")),
                            children: i
                        }) : a().createElement(c.Ay, {
                            className: "".concat(re, "-prefix"),
                            children: i
                        }) : null
                    }), [N, i, re]),
                    we = (0, r.useCallback)((function(e, t) {
                        "Enter" === e.key && t()
                    }), []),
                    xe = (0, r.useCallback)((function(e) {
                        return _ ? "trade" === _ ? "prefix" === e ? a().createElement(c.Ay, {
                            className: "".concat(oe, "-minus"),
                            onClick: be,
                            role: "button",
                            "aria-label": "decrease value"
                        }, a().createElement(oo, {
                            name: "Minus1C",
                            color: "IconNormal"
                        })) : a().createElement(c.Ay, {
                            className: "".concat(oe, "-plus"),
                            onClick: ge,
                            role: "button",
                            "aria-label": "increase value"
                        }, a().createElement(Qi, {
                            name: "Plus1C",
                            color: "IconNormal"
                        })) : "suffix" === e ? a().createElement(c.Ay, {
                            className: "".concat(ae, "-panel")
                        }, a().createElement(c.Ay, {
                            className: "".concat(ae, "-panel-up"),
                            onClick: ge,
                            role: "button",
                            "aria-label": "increase value"
                        }, a().createElement(Xi, {
                            name: "CaretUp1C",
                            color: "IconNormal"
                        })), a().createElement(c.Ay, {
                            className: "".concat(ae, "-panel-down"),
                            onClick: be,
                            role: "button",
                            "aria-label": "decrease value"
                        }, a().createElement($o, {
                            name: "CaretDown1C",
                            color: "IconNormal"
                        }))) : null : null
                    }), [_, be, ge, ae, oe]),
                    Ee = (0, r.useCallback)((function() {
                        "trade" === _ && $.current && $.current.focus()
                    }), [_, oe]),
                    Ae = {
                        "aria-invalid": "error" === l ? "true" : void 0,
                        "aria-required": P.required ? "true" : void 0,
                        "aria-disabled": u ? "true" : void 0,
                        "aria-label": P.id ? void 0 : P.placeholder || "input field"
                    };
                return a().createElement(c.Ay, {
                    className: ie,
                    onClick: Ee
                }, xe("prefix"), ye, a().createElement(me, (0, o.__assign)({}, Ae, P, fe, {
                    type: F,
                    ref: $,
                    value: G,
                    disabled: u,
                    onBlur: Z,
                    onFocus: Q,
                    className: "".concat(re, "-input")
                })), se && a().createElement(c.Ay, {
                    onClick: ce,
                    className: "".concat(re, "-clear"),
                    children: de,
                    onKeyDown: function(e) {
                        return we(e, ce)
                    },
                    tabIndex: 0,
                    role: "button",
                    "aria-label": "clear"
                }), s && a().createElement(c.Ay, {
                    className: "".concat(re, "-suffix"),
                    children: s
                }), xe("suffix"))
            }));
            is.__name = "TextField", is.displayName = "TextField";
            const ss = is;
            var cs = function(e) {
                var t;
                e.stopPropagation(), T.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
            };
            const ls = function(e) {
                var t, n, i = e.selects,
                    s = e.onSelect,
                    l = e.className,
                    u = e.onSearchFn,
                    p = e.emptyText,
                    m = void 0 === p ? "No results found" : p,
                    v = e.searchPlaceholder,
                    h = void 0 === v ? "search options" : v,
                    g = e.drawerCancelText,
                    b = void 0 === g ? "Cancel" : g,
                    y = e.searchValue,
                    w = e.fieldVariant,
                    x = e.type,
                    E = e.onClose,
                    A = e.searchFieldProps,
                    k = e.wrapperType,
                    C = e.listMaxHeight,
                    _ = e.id,
                    N = (0, d.r)().prefixCls,
                    S = "".concat(N, "-select-overlay"),
                    M = "".concat(S, "-search"),
                    I = "".concat(M, "-").concat(w),
                    R = "".concat(M, "-close"),
                    O = "filled" === w ? "default" : "line",
                    T = (0, r.useCallback)((function(e) {
                        return u && u(e)
                    }), [u]),
                    L = {
                        role: "listbox",
                        id: _,
                        "aria-label": "Select an option"
                    };
                return a().createElement(c.Ay, (0, o.__assign)({
                    className: f()(S, (t = {}, t["".concat(S, "__").concat(k)] = "drawer" === k, t), l),
                    onClick: cs
                }, L), "function" === typeof u && a().createElement(c.Ay, {
                    onClick: cs,
                    className: f()(M, (n = {}, n[I] = !!I, n[R] = !!E, n))
                }, a().createElement(ss, (0, o.__assign)({}, A, {
                    variant: O,
                    value: y,
                    enableClear: !0,
                    onChange: T,
                    placeholder: h,
                    prefix: a().createElement(ii, {
                        name: "Search1C",
                        color: "DisableText"
                    })
                })), "function" === typeof E && a().createElement(ja, {
                    onClick: E,
                    variant: "text",
                    children: b,
                    className: "".concat(R, "-btn")
                })), a().createElement(c.Ay, {
                    className: "".concat(S, "-options"),
                    style: {
                        maxHeight: C
                    }
                }, a().Children.count(e.children) ? a().Children.map(e.children, (function(e) {
                    var t;
                    if (!a().isValidElement(e)) return null;
                    if ("SelectOption" === (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) {
                        var n = i.indexOf(e.props.value) > -1;
                        return (0, r.cloneElement)(e, {
                            onSelect: s,
                            active: n,
                            type: x,
                            wrapperType: k
                        })
                    }
                    return (0, r.cloneElement)(e, {
                        onSelect: s,
                        selects: i
                    })
                })) : a().createElement(c.Ay, {
                    className: "".concat(S, "-empty"),
                    children: m
                })))
            };
            var us = function(e) {
                var t, n, i = e.value,
                    s = e.options,
                    c = e.prefix,
                    l = e.renderFn,
                    u = e.disabled,
                    p = e.onChange,
                    m = e.onSearchFn,
                    v = e.searchValue,
                    h = e.type,
                    g = void 0 === h ? "single" : h,
                    b = e.size,
                    y = void 0 === b ? "middle" : b,
                    w = e.variant,
                    x = void 0 === w ? "auto" : w,
                    E = e.placeholder,
                    A = void 0 === E ? "" : E,
                    k = e.once,
                    C = void 0 === k ? "single" === g : k,
                    _ = e.placement,
                    N = void 0 === _ ? "bottom" : _,
                    S = e.trigger,
                    M = void 0 === S ? "hover" : S,
                    I = e.fieldVariant,
                    R = void 0 === I ? "line" : I,
                    O = e.wrapperType,
                    T = void 0 === O ? "dropdown" : O,
                    D = e.fieldLabel,
                    P = e.searchPlaceholder,
                    F = e.emptyText,
                    z = e.customField,
                    V = e.className,
                    U = e.children,
                    j = e.drawerCancelText,
                    W = e.enablePortal,
                    q = e.portalNode,
                    $ = e.drawerHeaderProps,
                    K = e.searchFieldProps,
                    G = e.offset,
                    Y = e.useReactPopper,
                    Z = e.reactPopperProps,
                    Q = void 0 === Z ? {} : Z,
                    J = Q.sameWidth,
                    ee = void 0 === J || J,
                    te = Q.popperWidth,
                    ne = Q.offsetX,
                    re = e.dpVariant,
                    ae = void 0 === re ? "default" : re,
                    oe = e.dpStyle,
                    ie = e.triggerClassName,
                    se = e.bubbleClassName,
                    ce = e.fieldClassName,
                    le = e.bubbleWrapperClz,
                    ue = e.onVisibleChange,
                    fe = e.delay,
                    de = e.listMaxHeight,
                    pe = e.enableClickBubble,
                    me = e.drawerProps,
                    ve = e.open,
                    he = (0, r.useState)(!!ve),
                    ge = he[0],
                    be = he[1],
                    ye = (0, d.r)().prefixCls,
                    we = "".concat(ye, "-select"),
                    xe = f()(we, ((t = {})["".concat(we, "__").concat(x)] = !!x, t), V),
                    Ee = f()(we, V),
                    Ae = f()("".concat(we, "__drawer-header"), null === $ || void 0 === $ ? void 0 : $.className),
                    ke = f()("".concat(we, "-trigger"), ie),
                    Ce = f()("".concat(we, "-bubble"), ((n = {})["".concat(we, "-bubble__").concat(ae)] = "default" !== ae, n), se),
                    _e = (0, r.useMemo)((function() {
                        return "".concat(we, "-").concat((0, H.uR)(8))
                    }), [we]),
                    Ne = (0, r.useCallback)((function(e) {
                        be(e), null === ue || void 0 === ue || ue(e)
                    }), [ue, be]),
                    Se = "drawer" === T ? function() {
                        return Ne(!1)
                    } : void 0,
                    Me = function(e) {
                        var t = e.type,
                            n = e.value,
                            i = e.disabled,
                            s = e.onChange,
                            c = a().useState(Vo),
                            l = c[0],
                            u = c[1],
                            f = "multi" === t;
                        (0, X.op)((function() {
                            Array.isArray(n) && !(0, B.aI)(n, l) && u(n.slice(0, f ? void 0 : 1))
                        }), [n, f]);
                        var d = (0, L.d)({
                                fn: s,
                                deps: []
                            }).debounceFn,
                            p = (0, r.useCallback)((function(e, t) {
                                i || u((function(n) {
                                    var r = f ? (0, o.__spreadArray)([], n, !0) : [],
                                        a = function(t) {
                                            return t !== e
                                        },
                                        i = -1 === n.indexOf(e);
                                    switch (t) {
                                        case !1:
                                            r = i ? r : r.filter(a);
                                            break;
                                        case !0:
                                            r = i ? r.concat(e) : f ? r : [e];
                                            break;
                                        default:
                                            r = i ? r.concat(e) : r.filter(a)
                                    }
                                    return (0, B.aI)(n, r) || d(r), r
                                }))
                            }), [d, i, f]);
                        return {
                            selects: l,
                            onSelect: p
                        }
                    }({
                        type: g,
                        value: i,
                        disabled: u,
                        onChange: p
                    }),
                    Ie = Me.selects,
                    Re = Me.onSelect,
                    Oe = (0, r.useCallback)((function(e, t) {
                        Re(e, t), ("single" === g || C) && Ne(!1)
                    }), [Re, g, C, Ne]),
                    Te = (0, r.useCallback)((function(e) {
                        return Oe(e)
                    }), [Oe]);
                (0, r.useEffect)((function() {
                    "undefined" !== typeof ve && ge !== !!ve && be(!ge)
                }), [ve, ge]);
                var Le = {
                        selects: Ie,
                        emptyText: F,
                        onSearchFn: m,
                        searchPlaceholder: P,
                        children: U,
                        type: g,
                        onClose: Se,
                        drawerCancelText: j,
                        searchValue: v,
                        searchFieldProps: K,
                        wrapperType: T,
                        id: _e
                    },
                    Be = a().createElement(ls, (0, o.__assign)({}, Le, {
                        onSelect: Oe,
                        children: U,
                        fieldVariant: R,
                        listMaxHeight: de
                    })),
                    De = {
                        once: C,
                        disabled: u,
                        placement: N,
                        onVisibleChange: Ne,
                        trigger: M,
                        enablePortal: W,
                        portalNode: q,
                        offset: G,
                        style: oe,
                        useReactPopper: Y,
                        delay: fe,
                        reactPopperProps: {
                            sameWidth: ee,
                            popperWidth: te,
                            offsetX: ne
                        },
                        bubbleWrapperClz: le,
                        enableClickBubble: pe
                    },
                    Pe = (0, o.__assign)({
                        once: C,
                        visible: ge,
                        onClose: function() {
                            return Ne(!1)
                        },
                        onVisibleChange: Ne,
                        enablePortal: W,
                        portalNode: q
                    }, me),
                    Fe = $ ? (0, o.__assign)((0, o.__assign)({
                        onNextClick: function() {
                            return Ne(!1)
                        }
                    }, $), {
                        className: Ae
                    }) : void 0,
                    ze = {
                        type: g,
                        size: y,
                        prefix: c,
                        disabled: u,
                        renderFn: l,
                        placeholder: A,
                        fieldVariant: R,
                        fieldLabel: D,
                        className: ce,
                        ariaControls: _e
                    };
                return "drawer" === T ? a().createElement(a().Fragment, null, a().isValidElement(z) ? a().cloneElement(z, {
                    active: ge,
                    selects: Ie,
                    onRemove: Te,
                    onOpen: function() {
                        return Ne(!0)
                    }
                }) : a().createElement(Jo, (0, o.__assign)({}, ze, {
                    active: ge,
                    selects: Ie,
                    onRemove: Te,
                    onFieldClick: u ? void 0 : function() {
                        return Ne(!0)
                    },
                    options: s
                })), a().createElement(Ho, (0, o.__assign)({
                    variant: "basic",
                    className: Ee
                }, Pe), Fe && a().createElement(Ho.Header, (0, o.__assign)({}, Fe)), Be)) : a().createElement(jo, (0, o.__assign)({}, De, {
                    open: ge,
                    className: xe,
                    overlay: Be,
                    bubbleClassName: Ce,
                    triggerClassName: ke,
                    ariaRole: "combobox"
                }), a().isValidElement(z) ? a().cloneElement(z, {
                    active: ge,
                    selects: Ie,
                    onRemove: Te
                }) : a().createElement(Jo, (0, o.__assign)({}, ze, {
                    active: ge,
                    selects: Ie,
                    onRemove: Te,
                    options: s
                })))
            };
            us.displayName = "Select", us.Option = ni, us.OptionGroup = ri, us.OptionMulti = oi;
            const fs = us;
            var ds = n("+mA9"),
                ps = n("VsQO");
            const ms = function(e) {
                var t = e.activeNet,
                    n = e.value,
                    o = e.onChange,
                    i = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    s = (0, X.Qs)().isMobile,
                    l = function() {
                        var e = (0, ps.Ay)("getAddressOriginInfo", (0, pn.A)(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", (0, ds.tT)());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), {
                            fallbackData: {}
                        });
                        return {
                            originInfos: e.data,
                            isLoading: e.isLoading
                        }
                    }().originInfos,
                    u = (0, k.A)(a().useState("exchange"), 2),
                    f = u[0],
                    d = u[1],
                    p = (0, k.A)(a().useState([]), 2),
                    m = p[0],
                    v = p[1],
                    h = (0, k.A)(a().useState(""), 2),
                    g = h[0],
                    b = h[1],
                    y = (0, r.useMemo)((function() {
                        var e = function(e, t) {
                            var n = "exchange" === f ? e.exchange : e.wallet;
                            return (0, Vt.A)((0, E.A)({}, e), {
                                value: t,
                                label: n,
                                TYPE: f
                            })
                        };
                        return Go()([
                            [function() {
                                return "exchange" === f
                            }, function() {
                                return (l.exchangeInfos || []).map(e)
                            }],
                            [function() {
                                return "wallet" === f
                            }, function() {
                                return (l.walletInfos || []).map(e)
                            }]
                        ])()
                    }), [f, l]);
                (0, r.useEffect)((function() {
                    return v([])
                }), [f]), (0, r.useEffect)((function() {
                    var e = (0, k.A)(m, 1)[0];
                    o(null === y || void 0 === y ? void 0 : y[e])
                }), [m, y, o]);
                var A = (0, r.useMemo)((function() {
                        return Go()([
                            [function() {
                                return "exchange" === f
                            }, function() {
                                var e = (n || {}).supportBsc;
                                return {
                                    labelKey: "security-select-exchange",
                                    isError: "BSC" === t && 0 === e,
                                    errorMsg: "form-addressOrigin-invalid",
                                    warningMsg: "security-origin-warning"
                                }
                            }],
                            [function() {
                                return "wallet" === f
                            }, function() {
                                return {
                                    labelKey: "security-origin-selectWallet"
                                }
                            }],
                            [function() {
                                return "others" === f
                            }, function() {
                                var e = (n || {}).label;
                                return {
                                    labelKey: "security-origin-name",
                                    isError: (null === e || void 0 === e ? void 0 : e.trim().length) > 30,
                                    errorMsg: "security-exhangeName-invalid"
                                }
                            }]
                        ])()
                    }), [f, n, t]),
                    C = A.labelKey,
                    _ = A.isError,
                    N = A.errorMsg,
                    S = {
                        label: i(C),
                        errMsg: _ ? i(N) : "",
                        tips: i("security-origin-info-text")
                    };
                return a().createElement(a().Fragment, null, a().createElement(Po, {
                    label: i("security-origin-type")
                }, a().createElement(c.Ay, {
                    className: "mt-2xs gap-m flex flex-col items-start"
                }, [{
                    label: i("security-exchange-address"),
                    value: "exchange"
                }, {
                    label: i("security-wallet-address"),
                    value: "wallet"
                }, {
                    label: i("security-origin-others"),
                    value: "others"
                }].map((function(e) {
                    return a().createElement(zo, {
                        id: "radio-AddressOrigin-".concat(e.value),
                        key: e.value,
                        value: e.value,
                        checked: f === e.value,
                        onChange: function() {
                            return d(e.value)
                        }
                    }, e.label)
                })))), a().createElement(Po, (0, x.A)({}, S), "others" !== f ? a().createElement(fs, {
                    trigger: "click",
                    placement: "top",
                    className: "w-full",
                    value: m,
                    emptyText: i("security-addressManagement-noRecords", "No records found."),
                    onChange: function(e) {
                        v(e), o(null === y || void 0 === y ? void 0 : y[null === e || void 0 === e ? void 0 : e[0]])
                    },
                    placeholder: i("security-common-select", "Select"),
                    searchPlaceholder: i("exchange-common-search"),
                    size: "middle",
                    type: "single",
                    variant: "full",
                    renderFn: function(e) {
                        var t, n = null === e || void 0 === e || null === (t = e.selects) || void 0 === t ? void 0 : t[0],
                            r = null === y || void 0 === y ? void 0 : y[n];
                        return a().createElement(c.Ay, null, null === r || void 0 === r ? void 0 : r.label)
                    }
                }, y.map((function(e) {
                    return a().createElement(fs.Option, {
                        key: e.label,
                        value: e.value
                    }, e.label)
                }))) : a().createElement(ss, {
                    id: "input-OriginSelect-setCustomName",
                    size: "large",
                    className: "w-full",
                    autoComplete: "off",
                    onBlur: function() {
                        return o({
                            label: g,
                            TYPE: "others",
                            value: void 0
                        })
                    },
                    onChange: b,
                    status: _ ? "error" : void 0,
                    variant: s ? "default" : "line"
                })))
            };
            var vs = function() {
                var e = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    t = (0, k.A)((0, r.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    i = Ro().value,
                    s = Bo(),
                    c = s.value,
                    l = s.onChange,
                    u = (0, k.A)(i, 1)[0];
                return (0, r.useEffect)((function() {
                    n || l({})
                }), [n, l]), a().createElement(a().Fragment, null, a().createElement(co, {
                    id: "checkbox-AddressOrigin-form-addressOrigin-label",
                    value: "",
                    checked: n,
                    onChange: function(e, t) {
                        return o(t)
                    }
                }, e("form-addressOrigin-label", "Address origin")), n && a().createElement(ms, {
                    activeNet: u,
                    value: c,
                    onChange: l
                }))
            };
            const hs = a().memo(vs);

            function gs(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === ks(e)
            }

            function bs(e) {
                return "string" === typeof e
            }

            function ys(e) {
                return "number" === typeof e
            }

            function ws(e) {
                return !0 === e || !1 === e || function(e) {
                    return xs(e) && null !== e
                }(e) && "[object Boolean]" == ks(e)
            }

            function xs(e) {
                return "object" === typeof e
            }

            function Es(e) {
                return void 0 !== e && null !== e
            }

            function As(e) {
                return !e.trim().length
            }

            function ks(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
            }
            const Cs = Object.prototype.hasOwnProperty;
            class _s {
                constructor(e) {
                    this._keys = [], this._keyMap = {};
                    let t = 0;
                    e.forEach((e => {
                        let n = Ns(e);
                        t += n.weight, this._keys.push(n), this._keyMap[n.id] = n, t += n.weight
                    })), this._keys.forEach((e => {
                        e.weight /= t
                    }))
                }
                get(e) {
                    return this._keyMap[e]
                }
                keys() {
                    return this._keys
                }
                toJSON() {
                    return JSON.stringify(this._keys)
                }
            }

            function Ns(e) {
                let t = null,
                    n = null,
                    r = null,
                    a = 1,
                    o = null;
                if (bs(e) || gs(e)) r = e, t = Ss(e), n = Ms(e);
                else {
                    if (!Cs.call(e, "name")) throw new Error((e => `Missing ${e} property in key`)("name"));
                    const i = e.name;
                    if (r = i, Cs.call(e, "weight") && (a = e.weight, a <= 0)) throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(i));
                    t = Ss(i), n = Ms(i), o = e.getFn
                }
                return {
                    path: t,
                    id: n,
                    weight: a,
                    src: r,
                    getFn: o
                }
            }

            function Ss(e) {
                return gs(e) ? e : e.split(".")
            }

            function Ms(e) {
                return gs(e) ? e.join(".") : e
            }
            var Is = {
                isCaseSensitive: !1,
                includeScore: !1,
                keys: [],
                shouldSort: !0,
                sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1,
                includeMatches: !1,
                findAllMatches: !1,
                minMatchCharLength: 1,
                location: 0,
                threshold: .6,
                distance: 100,
                ...{
                    useExtendedSearch: !1,
                    getFn: function(e, t) {
                        let n = [],
                            r = !1;
                        const a = (e, t, o) => {
                            if (Es(e))
                                if (t[o]) {
                                    const i = e[t[o]];
                                    if (!Es(i)) return;
                                    if (o === t.length - 1 && (bs(i) || ys(i) || ws(i))) n.push(function(e) {
                                        return null == e ? "" : function(e) {
                                            if ("string" == typeof e) return e;
                                            let t = e + "";
                                            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                                        }(e)
                                    }(i));
                                    else if (gs(i)) {
                                        r = !0;
                                        for (let e = 0, n = i.length; e < n; e += 1) a(i[e], t, o + 1)
                                    } else t.length && a(i, t, o + 1)
                                } else n.push(e)
                        };
                        return a(e, bs(t) ? t.split(".") : t, 0), r ? n : n[0]
                    },
                    ignoreLocation: !1,
                    ignoreFieldNorm: !1,
                    fieldNormWeight: 1
                }
            };
            const Rs = /[^ ]+/g;
            class Os {
                constructor({
                    getFn: e = Is.getFn,
                    fieldNormWeight: t = Is.fieldNormWeight
                } = {}) {
                    this.norm = function(e = 1, t = 3) {
                        const n = new Map,
                            r = Math.pow(10, t);
                        return {
                            get(t) {
                                const a = t.match(Rs).length;
                                if (n.has(a)) return n.get(a);
                                const o = 1 / Math.pow(a, .5 * e),
                                    i = parseFloat(Math.round(o * r) / r);
                                return n.set(a, i), i
                            },
                            clear() {
                                n.clear()
                            }
                        }
                    }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords()
                }
                setSources(e = []) {
                    this.docs = e
                }
                setIndexRecords(e = []) {
                    this.records = e
                }
                setKeys(e = []) {
                    this.keys = e, this._keysMap = {}, e.forEach(((e, t) => {
                        this._keysMap[e.id] = t
                    }))
                }
                create() {
                    !this.isCreated && this.docs.length && (this.isCreated = !0, bs(this.docs[0]) ? this.docs.forEach(((e, t) => {
                        this._addString(e, t)
                    })) : this.docs.forEach(((e, t) => {
                        this._addObject(e, t)
                    })), this.norm.clear())
                }
                add(e) {
                    const t = this.size();
                    bs(e) ? this._addString(e, t) : this._addObject(e, t)
                }
                removeAt(e) {
                    this.records.splice(e, 1);
                    for (let t = e, n = this.size(); t < n; t += 1) this.records[t].i -= 1
                }
                getValueForItemAtKeyId(e, t) {
                    return e[this._keysMap[t]]
                }
                size() {
                    return this.records.length
                }
                _addString(e, t) {
                    if (!Es(e) || As(e)) return;
                    let n = {
                        v: e,
                        i: t,
                        n: this.norm.get(e)
                    };
                    this.records.push(n)
                }
                _addObject(e, t) {
                    let n = {
                        i: t,
                        $: {}
                    };
                    this.keys.forEach(((t, r) => {
                        let a = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
                        if (Es(a))
                            if (gs(a)) {
                                let e = [];
                                const t = [{
                                    nestedArrIndex: -1,
                                    value: a
                                }];
                                for (; t.length;) {
                                    const {
                                        nestedArrIndex: n,
                                        value: r
                                    } = t.pop();
                                    if (Es(r))
                                        if (bs(r) && !As(r)) {
                                            let t = {
                                                v: r,
                                                i: n,
                                                n: this.norm.get(r)
                                            };
                                            e.push(t)
                                        } else gs(r) && r.forEach(((e, n) => {
                                            t.push({
                                                nestedArrIndex: n,
                                                value: e
                                            })
                                        }))
                                }
                                n.$[r] = e
                            } else if (bs(a) && !As(a)) {
                            let e = {
                                v: a,
                                n: this.norm.get(a)
                            };
                            n.$[r] = e
                        }
                    })), this.records.push(n)
                }
                toJSON() {
                    return {
                        keys: this.keys,
                        records: this.records
                    }
                }
            }

            function Ts(e, t, {
                getFn: n = Is.getFn,
                fieldNormWeight: r = Is.fieldNormWeight
            } = {}) {
                const a = new Os({
                    getFn: n,
                    fieldNormWeight: r
                });
                return a.setKeys(e.map(Ns)), a.setSources(t), a.create(), a
            }

            function Ls(e, {
                errors: t = 0,
                currentLocation: n = 0,
                expectedLocation: r = 0,
                distance: a = Is.distance,
                ignoreLocation: o = Is.ignoreLocation
            } = {}) {
                const i = t / e.length;
                if (o) return i;
                const s = Math.abs(r - n);
                return a ? i + s / a : s ? 1 : i
            }
            const Bs = 32;

            function Ds(e, t, n, {
                location: r = Is.location,
                distance: a = Is.distance,
                threshold: o = Is.threshold,
                findAllMatches: i = Is.findAllMatches,
                minMatchCharLength: s = Is.minMatchCharLength,
                includeMatches: c = Is.includeMatches,
                ignoreLocation: l = Is.ignoreLocation
            } = {}) {
                if (t.length > Bs) throw new Error(`Pattern length exceeds max of ${Bs}.`);
                const u = t.length,
                    f = e.length,
                    d = Math.max(0, Math.min(r, f));
                let p = o,
                    m = d;
                const v = s > 1 || c,
                    h = v ? Array(f) : [];
                let g;
                for (;
                    (g = e.indexOf(t, m)) > -1;) {
                    let e = Ls(t, {
                        currentLocation: g,
                        expectedLocation: d,
                        distance: a,
                        ignoreLocation: l
                    });
                    if (p = Math.min(e, p), m = g + u, v) {
                        let e = 0;
                        for (; e < u;) h[g + e] = 1, e += 1
                    }
                }
                m = -1;
                let b = [],
                    y = 1,
                    w = u + f;
                const x = 1 << u - 1;
                for (let A = 0; A < u; A += 1) {
                    let r = 0,
                        o = w;
                    for (; r < o;) {
                        Ls(t, {
                            errors: A,
                            currentLocation: d + o,
                            expectedLocation: d,
                            distance: a,
                            ignoreLocation: l
                        }) <= p ? r = o : w = o, o = Math.floor((w - r) / 2 + r)
                    }
                    w = o;
                    let s = Math.max(1, d - o + 1),
                        c = i ? f : Math.min(d + o, f) + u,
                        g = Array(c + 2);
                    g[c + 1] = (1 << A) - 1;
                    for (let i = c; i >= s; i -= 1) {
                        let r = i - 1,
                            o = n[e.charAt(r)];
                        if (v && (h[r] = +!!o), g[i] = (g[i + 1] << 1 | 1) & o, A && (g[i] |= (b[i + 1] | b[i]) << 1 | 1 | b[i + 1]), g[i] & x && (y = Ls(t, {
                                errors: A,
                                currentLocation: r,
                                expectedLocation: d,
                                distance: a,
                                ignoreLocation: l
                            }), y <= p)) {
                            if (p = y, m = r, m <= d) break;
                            s = Math.max(1, 2 * d - m)
                        }
                    }
                    if (Ls(t, {
                            errors: A + 1,
                            currentLocation: d,
                            expectedLocation: d,
                            distance: a,
                            ignoreLocation: l
                        }) > p) break;
                    b = g
                }
                const E = {
                    isMatch: m >= 0,
                    score: Math.max(.001, y)
                };
                if (v) {
                    const e = function(e = [], t = Is.minMatchCharLength) {
                        let n = [],
                            r = -1,
                            a = -1,
                            o = 0;
                        for (let i = e.length; o < i; o += 1) {
                            let i = e[o];
                            i && -1 === r ? r = o : i || -1 === r || (a = o - 1, a - r + 1 >= t && n.push([r, a]), r = -1)
                        }
                        return e[o - 1] && o - r >= t && n.push([r, o - 1]), n
                    }(h, s);
                    e.length ? c && (E.indices = e) : E.isMatch = !1
                }
                return E
            }

            function Ps(e) {
                let t = {};
                for (let n = 0, r = e.length; n < r; n += 1) {
                    const a = e.charAt(n);
                    t[a] = (t[a] || 0) | 1 << r - n - 1
                }
                return t
            }
            class Fs {
                constructor(e, {
                    location: t = Is.location,
                    threshold: n = Is.threshold,
                    distance: r = Is.distance,
                    includeMatches: a = Is.includeMatches,
                    findAllMatches: o = Is.findAllMatches,
                    minMatchCharLength: i = Is.minMatchCharLength,
                    isCaseSensitive: s = Is.isCaseSensitive,
                    ignoreLocation: c = Is.ignoreLocation
                } = {}) {
                    if (this.options = {
                            location: t,
                            threshold: n,
                            distance: r,
                            includeMatches: a,
                            findAllMatches: o,
                            minMatchCharLength: i,
                            isCaseSensitive: s,
                            ignoreLocation: c
                        }, this.pattern = s ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
                    const l = (e, t) => {
                            this.chunks.push({
                                pattern: e,
                                alphabet: Ps(e),
                                startIndex: t
                            })
                        },
                        u = this.pattern.length;
                    if (u > Bs) {
                        let e = 0;
                        const t = u % Bs,
                            n = u - t;
                        for (; e < n;) l(this.pattern.substr(e, Bs), e), e += Bs;
                        if (t) {
                            const e = u - Bs;
                            l(this.pattern.substr(e), e)
                        }
                    } else l(this.pattern, 0)
                }
                searchIn(e) {
                    const {
                        isCaseSensitive: t,
                        includeMatches: n
                    } = this.options;
                    if (t || (e = e.toLowerCase()), this.pattern === e) {
                        let t = {
                            isMatch: !0,
                            score: 0
                        };
                        return n && (t.indices = [
                            [0, e.length - 1]
                        ]), t
                    }
                    const {
                        location: r,
                        distance: a,
                        threshold: o,
                        findAllMatches: i,
                        minMatchCharLength: s,
                        ignoreLocation: c
                    } = this.options;
                    let l = [],
                        u = 0,
                        f = !1;
                    this.chunks.forEach((({
                        pattern: t,
                        alphabet: d,
                        startIndex: p
                    }) => {
                        const {
                            isMatch: m,
                            score: v,
                            indices: h
                        } = Ds(e, t, d, {
                            location: r + p,
                            distance: a,
                            threshold: o,
                            findAllMatches: i,
                            minMatchCharLength: s,
                            includeMatches: n,
                            ignoreLocation: c
                        });
                        m && (f = !0), u += v, m && h && (l = [...l, ...h])
                    }));
                    let d = {
                        isMatch: f,
                        score: f ? u / this.chunks.length : 1
                    };
                    return f && n && (d.indices = l), d
                }
            }
            class zs {
                constructor(e) {
                    this.pattern = e
                }
                static isMultiMatch(e) {
                    return Vs(e, this.multiRegex)
                }
                static isSingleMatch(e) {
                    return Vs(e, this.singleRegex)
                }
                search() {}
            }

            function Vs(e, t) {
                const n = e.match(t);
                return n ? n[1] : null
            }
            class Us extends zs {
                constructor(e, {
                    location: t = Is.location,
                    threshold: n = Is.threshold,
                    distance: r = Is.distance,
                    includeMatches: a = Is.includeMatches,
                    findAllMatches: o = Is.findAllMatches,
                    minMatchCharLength: i = Is.minMatchCharLength,
                    isCaseSensitive: s = Is.isCaseSensitive,
                    ignoreLocation: c = Is.ignoreLocation
                } = {}) {
                    super(e), this._bitapSearch = new Fs(e, {
                        location: t,
                        threshold: n,
                        distance: r,
                        includeMatches: a,
                        findAllMatches: o,
                        minMatchCharLength: i,
                        isCaseSensitive: s,
                        ignoreLocation: c
                    })
                }
                static get type() {
                    return "fuzzy"
                }
                static get multiRegex() {
                    return /^"(.*)"$/
                }
                static get singleRegex() {
                    return /^(.*)$/
                }
                search(e) {
                    return this._bitapSearch.searchIn(e)
                }
            }
            class js extends zs {
                constructor(e) {
                    super(e)
                }
                static get type() {
                    return "include"
                }
                static get multiRegex() {
                    return /^'"(.*)"$/
                }
                static get singleRegex() {
                    return /^'(.*)$/
                }
                search(e) {
                    let t, n = 0;
                    const r = [],
                        a = this.pattern.length;
                    for (;
                        (t = e.indexOf(this.pattern, n)) > -1;) n = t + a, r.push([t, n - 1]);
                    const o = !!r.length;
                    return {
                        isMatch: o,
                        score: o ? 0 : 1,
                        indices: r
                    }
                }
            }
            const Ws = [class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "exact"
                    }
                    static get multiRegex() {
                        return /^="(.*)"$/
                    }
                    static get singleRegex() {
                        return /^=(.*)$/
                    }
                    search(e) {
                        const t = e === this.pattern;
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [0, this.pattern.length - 1]
                        }
                    }
                }, js, class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "prefix-exact"
                    }
                    static get multiRegex() {
                        return /^\^"(.*)"$/
                    }
                    static get singleRegex() {
                        return /^\^(.*)$/
                    }
                    search(e) {
                        const t = e.startsWith(this.pattern);
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [0, this.pattern.length - 1]
                        }
                    }
                }, class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "inverse-prefix-exact"
                    }
                    static get multiRegex() {
                        return /^!\^"(.*)"$/
                    }
                    static get singleRegex() {
                        return /^!\^(.*)$/
                    }
                    search(e) {
                        const t = !e.startsWith(this.pattern);
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [0, e.length - 1]
                        }
                    }
                }, class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "inverse-suffix-exact"
                    }
                    static get multiRegex() {
                        return /^!"(.*)"\$$/
                    }
                    static get singleRegex() {
                        return /^!(.*)\$$/
                    }
                    search(e) {
                        const t = !e.endsWith(this.pattern);
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [0, e.length - 1]
                        }
                    }
                }, class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "suffix-exact"
                    }
                    static get multiRegex() {
                        return /^"(.*)"\$$/
                    }
                    static get singleRegex() {
                        return /^(.*)\$$/
                    }
                    search(e) {
                        const t = e.endsWith(this.pattern);
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [e.length - this.pattern.length, e.length - 1]
                        }
                    }
                }, class extends zs {
                    constructor(e) {
                        super(e)
                    }
                    static get type() {
                        return "inverse-exact"
                    }
                    static get multiRegex() {
                        return /^!"(.*)"$/
                    }
                    static get singleRegex() {
                        return /^!(.*)$/
                    }
                    search(e) {
                        const t = -1 === e.indexOf(this.pattern);
                        return {
                            isMatch: t,
                            score: t ? 0 : 1,
                            indices: [0, e.length - 1]
                        }
                    }
                }, Us],
                qs = Ws.length,
                Hs = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
            const $s = new Set([Us.type, js.type]);
            class Ks {
                constructor(e, {
                    isCaseSensitive: t = Is.isCaseSensitive,
                    includeMatches: n = Is.includeMatches,
                    minMatchCharLength: r = Is.minMatchCharLength,
                    ignoreLocation: a = Is.ignoreLocation,
                    findAllMatches: o = Is.findAllMatches,
                    location: i = Is.location,
                    threshold: s = Is.threshold,
                    distance: c = Is.distance
                } = {}) {
                    this.query = null, this.options = {
                        isCaseSensitive: t,
                        includeMatches: n,
                        minMatchCharLength: r,
                        findAllMatches: o,
                        ignoreLocation: a,
                        location: i,
                        threshold: s,
                        distance: c
                    }, this.pattern = t ? e : e.toLowerCase(), this.query = function(e, t = {}) {
                        return e.split("|").map((e => {
                            let n = e.trim().split(Hs).filter((e => e && !!e.trim())),
                                r = [];
                            for (let a = 0, o = n.length; a < o; a += 1) {
                                const e = n[a];
                                let o = !1,
                                    i = -1;
                                for (; !o && ++i < qs;) {
                                    const n = Ws[i];
                                    let a = n.isMultiMatch(e);
                                    a && (r.push(new n(a, t)), o = !0)
                                }
                                if (!o)
                                    for (i = -1; ++i < qs;) {
                                        const n = Ws[i];
                                        let a = n.isSingleMatch(e);
                                        if (a) {
                                            r.push(new n(a, t));
                                            break
                                        }
                                    }
                            }
                            return r
                        }))
                    }(this.pattern, this.options)
                }
                static condition(e, t) {
                    return t.useExtendedSearch
                }
                searchIn(e) {
                    const t = this.query;
                    if (!t) return {
                        isMatch: !1,
                        score: 1
                    };
                    const {
                        includeMatches: n,
                        isCaseSensitive: r
                    } = this.options;
                    e = r ? e : e.toLowerCase();
                    let a = 0,
                        o = [],
                        i = 0;
                    for (let s = 0, c = t.length; s < c; s += 1) {
                        const r = t[s];
                        o.length = 0, a = 0;
                        for (let t = 0, s = r.length; t < s; t += 1) {
                            const s = r[t],
                                {
                                    isMatch: c,
                                    indices: l,
                                    score: u
                                } = s.search(e);
                            if (!c) {
                                i = 0, a = 0, o.length = 0;
                                break
                            }
                            if (a += 1, i += u, n) {
                                const e = s.constructor.type;
                                $s.has(e) ? o = [...o, ...l] : o.push(l)
                            }
                        }
                        if (a) {
                            let e = {
                                isMatch: !0,
                                score: i / a
                            };
                            return n && (e.indices = o), e
                        }
                    }
                    return {
                        isMatch: !1,
                        score: 1
                    }
                }
            }
            const Gs = [];

            function Ys(e, t) {
                for (let n = 0, r = Gs.length; n < r; n += 1) {
                    let r = Gs[n];
                    if (r.condition(e, t)) return new r(e, t)
                }
                return new Fs(e, t)
            }
            const Zs = "$and",
                Qs = "$or",
                Xs = "$path",
                Js = "$val",
                ec = e => !(!e[Zs] && !e[Qs]),
                tc = e => ({
                    [Zs]: Object.keys(e).map((t => ({
                        [t]: e[t]
                    })))
                });

            function nc(e, t, {
                auto: n = !0
            } = {}) {
                const r = e => {
                    let a = Object.keys(e);
                    const o = (e => !!e[Xs])(e);
                    if (!o && a.length > 1 && !ec(e)) return r(tc(e));
                    if ((e => !gs(e) && xs(e) && !ec(e))(e)) {
                        const r = o ? e[Xs] : a[0],
                            i = o ? e[Js] : e[r];
                        if (!bs(i)) throw new Error((e => `Invalid value for key ${e}`)(r));
                        const s = {
                            keyId: Ms(r),
                            pattern: i
                        };
                        return n && (s.searcher = Ys(i, t)), s
                    }
                    let i = {
                        children: [],
                        operator: a[0]
                    };
                    return a.forEach((t => {
                        const n = e[t];
                        gs(n) && n.forEach((e => {
                            i.children.push(r(e))
                        }))
                    })), i
                };
                return ec(e) || (e = tc(e)), r(e)
            }

            function rc(e, t) {
                const n = e.matches;
                t.matches = [], Es(n) && n.forEach((e => {
                    if (!Es(e.indices) || !e.indices.length) return;
                    const {
                        indices: n,
                        value: r
                    } = e;
                    let a = {
                        indices: n,
                        value: r
                    };
                    e.key && (a.key = e.key.src), e.idx > -1 && (a.refIndex = e.idx), t.matches.push(a)
                }))
            }

            function ac(e, t) {
                t.score = e.score
            }
            class oc {
                constructor(e, t = {}, n) {
                    this.options = { ...Is,
                        ...t
                    }, this.options.useExtendedSearch, this._keyStore = new _s(this.options.keys), this.setCollection(e, n)
                }
                setCollection(e, t) {
                    if (this._docs = e, t && !(t instanceof Os)) throw new Error("Incorrect 'index' type");
                    this._myIndex = t || Ts(this.options.keys, this._docs, {
                        getFn: this.options.getFn,
                        fieldNormWeight: this.options.fieldNormWeight
                    })
                }
                add(e) {
                    Es(e) && (this._docs.push(e), this._myIndex.add(e))
                }
                remove(e = (() => !1)) {
                    const t = [];
                    for (let n = 0, r = this._docs.length; n < r; n += 1) {
                        const a = this._docs[n];
                        e(a, n) && (this.removeAt(n), n -= 1, r -= 1, t.push(a))
                    }
                    return t
                }
                removeAt(e) {
                    this._docs.splice(e, 1), this._myIndex.removeAt(e)
                }
                getIndex() {
                    return this._myIndex
                }
                search(e, {
                    limit: t = -1
                } = {}) {
                    const {
                        includeMatches: n,
                        includeScore: r,
                        shouldSort: a,
                        sortFn: o,
                        ignoreFieldNorm: i
                    } = this.options;
                    let s = bs(e) ? bs(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                    return function(e, {
                            ignoreFieldNorm: t = Is.ignoreFieldNorm
                        }) {
                            e.forEach((e => {
                                let n = 1;
                                e.matches.forEach((({
                                    key: e,
                                    norm: r,
                                    score: a
                                }) => {
                                    const o = e ? e.weight : null;
                                    n *= Math.pow(0 === a && o ? Number.EPSILON : a, (o || 1) * (t ? 1 : r))
                                })), e.score = n
                            }))
                        }(s, {
                            ignoreFieldNorm: i
                        }), a && s.sort(o), ys(t) && t > -1 && (s = s.slice(0, t)),
                        function(e, t, {
                            includeMatches: n = Is.includeMatches,
                            includeScore: r = Is.includeScore
                        } = {}) {
                            const a = [];
                            return n && a.push(rc), r && a.push(ac), e.map((e => {
                                const {
                                    idx: n
                                } = e, r = {
                                    item: t[n],
                                    refIndex: n
                                };
                                return a.length && a.forEach((t => {
                                    t(e, r)
                                })), r
                            }))
                        }(s, this._docs, {
                            includeMatches: n,
                            includeScore: r
                        })
                }
                _searchStringList(e) {
                    const t = Ys(e, this.options),
                        {
                            records: n
                        } = this._myIndex,
                        r = [];
                    return n.forEach((({
                        v: e,
                        i: n,
                        n: a
                    }) => {
                        if (!Es(e)) return;
                        const {
                            isMatch: o,
                            score: i,
                            indices: s
                        } = t.searchIn(e);
                        o && r.push({
                            item: e,
                            idx: n,
                            matches: [{
                                score: i,
                                value: e,
                                norm: a,
                                indices: s
                            }]
                        })
                    })), r
                }
                _searchLogical(e) {
                    const t = nc(e, this.options),
                        n = (e, t, r) => {
                            if (!e.children) {
                                const {
                                    keyId: n,
                                    searcher: a
                                } = e, o = this._findMatches({
                                    key: this._keyStore.get(n),
                                    value: this._myIndex.getValueForItemAtKeyId(t, n),
                                    searcher: a
                                });
                                return o && o.length ? [{
                                    idx: r,
                                    item: t,
                                    matches: o
                                }] : []
                            }
                            const a = [];
                            for (let o = 0, i = e.children.length; o < i; o += 1) {
                                const i = e.children[o],
                                    s = n(i, t, r);
                                if (s.length) a.push(...s);
                                else if (e.operator === Zs) return []
                            }
                            return a
                        },
                        r = this._myIndex.records,
                        a = {},
                        o = [];
                    return r.forEach((({
                        $: e,
                        i: r
                    }) => {
                        if (Es(e)) {
                            let i = n(t, e, r);
                            i.length && (a[r] || (a[r] = {
                                idx: r,
                                item: e,
                                matches: []
                            }, o.push(a[r])), i.forEach((({
                                matches: e
                            }) => {
                                a[r].matches.push(...e)
                            })))
                        }
                    })), o
                }
                _searchObjectList(e) {
                    const t = Ys(e, this.options),
                        {
                            keys: n,
                            records: r
                        } = this._myIndex,
                        a = [];
                    return r.forEach((({
                        $: e,
                        i: r
                    }) => {
                        if (!Es(e)) return;
                        let o = [];
                        n.forEach(((n, r) => {
                            o.push(...this._findMatches({
                                key: n,
                                value: e[r],
                                searcher: t
                            }))
                        })), o.length && a.push({
                            idx: r,
                            item: e,
                            matches: o
                        })
                    })), a
                }
                _findMatches({
                    key: e,
                    value: t,
                    searcher: n
                }) {
                    if (!Es(t)) return [];
                    let r = [];
                    if (gs(t)) t.forEach((({
                        v: t,
                        i: a,
                        n: o
                    }) => {
                        if (!Es(t)) return;
                        const {
                            isMatch: i,
                            score: s,
                            indices: c
                        } = n.searchIn(t);
                        i && r.push({
                            score: s,
                            key: e,
                            value: t,
                            idx: a,
                            norm: o,
                            indices: c
                        })
                    }));
                    else {
                        const {
                            v: a,
                            n: o
                        } = t, {
                            isMatch: i,
                            score: s,
                            indices: c
                        } = n.searchIn(a);
                        i && r.push({
                            score: s,
                            key: e,
                            value: a,
                            norm: o,
                            indices: c
                        })
                    }
                    return r
                }
            }
            oc.version = "6.6.2", oc.createIndex = Ts, oc.parseIndex = function(e, {
                    getFn: t = Is.getFn,
                    fieldNormWeight: n = Is.fieldNormWeight
                } = {}) {
                    const {
                        keys: r,
                        records: a
                    } = e, o = new Os({
                        getFn: t,
                        fieldNormWeight: n
                    });
                    return o.setKeys(r), o.setIndexRecords(a), o
                }, oc.config = Is, oc.parseQuery = nc,
                function(...e) {
                    Gs.push(...e)
                }(Ks);
            var ic = n("0PRs"),
                sc = n("GmLw").hp,
                cc = "/bapi/fe/resource/image",
                lc = "https://www.binance.com",
                uc = function(e) {
                    var t, n = e.isRound,
                        i = e.isMask,
                        s = e.mode,
                        l = e.responsive,
                        u = e.src,
                        p = (0, o.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        m = (0, r.useState)(!1),
                        v = m[0],
                        h = m[1],
                        g = (0, d.r)().prefixCls,
                        b = f()("".concat(g, "-lazy-img"), ((t = {
                            "data-mask": !!i,
                            "data-round": !!n,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === s || void 0 === s ? void 0 : s.replace(/\s+/g, "-"))] = !!s, t), e.className),
                        y = (0, r.useCallback)((function() {
                            return h(!0)
                        }), []),
                        w = (0, r.useMemo)((function() {
                            return !(l && (l.mobile || l.tablet || l.desktop)) || v ? {
                                default: u
                            } : Object.keys(l).reduce((function(e, t) {
                                return e[t] = function(e, t) {
                                    var n = sc.from(e).toString("base64");
                                    try {
                                        var r = new URL(cc, "https://www.binance.com");
                                        return r.searchParams.set("image", n), Object.entries(t).forEach((function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            void 0 !== n && r.searchParams.set(t, String(n))
                                        })), "".concat(r.pathname).concat(r.search)
                                    } catch (a) {
                                        return "".concat(cc, "?image=").concat(n, "&w=").concat(t.w, "&h=").concat(t.h)
                                    }
                                }(u, l[t]), e
                            }), {})
                        }), [u, l, v]),
                        x = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in w) return a().createElement(ic.A, (0, o.__assign)({}, x, p, {
                        className: b,
                        mode: s,
                        src: w.default
                    }));
                    var E = w.mobile,
                        A = w.tablet,
                        k = w.desktop;
                    if (T.lq) {
                        var C = env.API_HOST || lc,
                            _ = "".concat(C).concat(E || A || k);
                        return a().createElement(ic.A, (0, o.__assign)({}, x, {
                            onError: y
                        }, p, {
                            className: b,
                            mode: s,
                            src: _
                        }))
                    }
                    return a().createElement(c.Ay, {
                        as: "picture"
                    }, a().createElement(c.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: k
                    }), A && a().createElement(c.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: A
                    }), E && a().createElement(c.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: E
                    }), a().createElement(ic.A, (0, o.__assign)({}, x, {
                        onError: y
                    }, p, {
                        className: b,
                        mode: s,
                        src: k || u
                    })))
                };
            uc.displayName = "Image";
            const fc = uc;
            const dc = function(e) {
                var t = e.placement,
                    n = e.options,
                    o = e.value,
                    i = e.onChange,
                    s = e.disabled,
                    l = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    u = (0, k.A)((0, r.useState)(""), 2),
                    f = u[0],
                    d = u[1],
                    p = Ro().reset,
                    m = (0, r.useMemo)((function() {
                        if (f) {
                            return new oc(n, {
                                keys: ["assetCode", "assetName"],
                                threshold: .3
                            }).search(f).map((function(e) {
                                return e.item
                            }))
                        }
                        var e = n.filter((function(e) {
                            var t;
                            return +e.free > 0 || +(null === (t = e.ledgerAsset) || void 0 === t ? void 0 : t.free) > 0
                        }));
                        if (e.length) return e;
                        var t = n.filter((function(e) {
                            return e.hotFlag > 0
                        }));
                        return t.length ? t.sort((function(e, t) {
                            return t.hotFlag - e.hotFlag
                        })) : n
                    }), [f, n]);
                return a().createElement(fs, {
                    trigger: "click",
                    placement: t,
                    disabled: s,
                    value: o,
                    emptyText: l("security-addressManagement-noRecords", "No records found."),
                    onChange: function(e) {
                        null === i || void 0 === i || i(e), p()
                    },
                    onSearchFn: d,
                    placeholder: l("form-coin-select", "Select Coin"),
                    searchPlaceholder: l("exchange-common-search"),
                    size: "middle",
                    type: "single",
                    variant: "full",
                    enablePortal: !0,
                    useReactPopper: !0,
                    renderFn: function(e) {
                        var t;
                        if (!o.length) return null;
                        var n = null === e || void 0 === e || null === (t = e.selects) || void 0 === t ? void 0 : t[0],
                            r = (null === m || void 0 === m ? void 0 : m.find((function(e) {
                                return e.assetCode === n
                            }))) || {},
                            i = r.logoUrl,
                            s = r.assetCode,
                            l = r.assetName;
                        return a().createElement(c.Ay, {
                            className: "flex items-center"
                        }, a().createElement(fc, {
                            src: i,
                            className: "h-[20px] w-[20px]"
                        }), a().createElement(c.Ay, {
                            className: "mx-2xs text-subtitle1"
                        }, s), a().createElement(c.Ay, {
                            className: "text-body3 text-t-red"
                        }, l))
                    }
                }, m.map((function(e) {
                    var t = e.logoUrl,
                        n = e.assetCode,
                        r = e.assetName;
                    return a().createElement(fs.Option, {
                        key: n,
                        value: n
                    }, a().createElement(c.Ay, {
                        className: "flex items-center"
                    }, a().createElement(fc, {
                        src: t,
                        className: "h-[20px] w-[20px]"
                    }), a().createElement(c.Ay, {
                        className: "mx-2xs text-subtitle1"
                    }, n), a().createElement(c.Ay, {
                        className: "text-body3 text-t-third"
                    }, r)))
                })))
            };
            var pc = function() {
                    var e = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t;
                    return a().createElement(c.Ay, {
                        className: "bg-input px-3xs text-subtitle3 text-t-primary rounded-[4px]"
                    }, e("wallet-ui-tag-unmatched"))
                },
                mc = function(e) {
                    var t = e.className,
                        n = e.name,
                        r = e.network,
                        o = e.DISABLED,
                        i = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                        s = (0, X.Qs)().isMobile;
                    return a().createElement(c.Ay, {
                        id: "btn-NetworkSelect-".concat(r),
                        className: f()("gap-2xs px-m py-s flex items-center", o ? "text-t-disabled cursor-not-allowed" : "hover:bg-bg3 cursor-pointer", t)
                    }, s ? a().createElement(c.Ay, {
                        className: "flex-1"
                    }, a().createElement(c.Ay, {
                        className: "gap-2xs flex items-center"
                    }, a().createElement(c.Ay, {
                        className: "text-subtitle1"
                    }, r), !!o && a().createElement(pc, null)), a().createElement(c.Ay, {
                        className: f()("text-basal", {
                            "text-t-third": !o
                        })
                    }, i(n))) : a().createElement(c.Ay, {
                        className: "gap-2xs flex flex-1 items-center"
                    }, a().createElement(c.Ay, {
                        className: "text-subtitle1"
                    }, r), a().createElement(c.Ay, {
                        className: f()("text-body3 flex-1 ", {
                            "text-t-third": !o
                        })
                    }, i(n)), !!o && a().createElement(pc, null)))
                };
            const vc = function(e) {
                var t = e.placement,
                    n = e.options,
                    o = e.value,
                    i = e.onChange,
                    s = e.disabled,
                    l = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    u = (0, k.A)((0, r.useState)(""), 2),
                    f = u[0],
                    d = u[1],
                    p = Oo().reset,
                    m = (0, r.useMemo)((function() {
                        if (!f) return n;
                        return new oc(n, {
                            keys: ["network", "name"],
                            threshold: .3
                        }).search(f).map((function(e) {
                            return e.item
                        }))
                    }), [f, n]);
                return a().createElement(fs, {
                    trigger: "click",
                    placement: t,
                    disabled: s,
                    value: o,
                    emptyText: l("security-addressManagement-noRecords", "No records found."),
                    onChange: function(e) {
                        null === i || void 0 === i || i(e), p()
                    },
                    onSearchFn: d,
                    placeholder: l("exchange-deposit-chainName", "Select Network"),
                    searchPlaceholder: l("exchange-common-search"),
                    size: "middle",
                    type: "single",
                    variant: "full",
                    enablePortal: !0,
                    useReactPopper: !0,
                    renderFn: function(e) {
                        var t;
                        if (!o.length) return null;
                        var n = null === e || void 0 === e || null === (t = e.selects) || void 0 === t ? void 0 : t[0],
                            r = (null === m || void 0 === m ? void 0 : m.find((function(e) {
                                return e.network === n
                            }))) || {},
                            i = r.network,
                            s = r.name;
                        return a().createElement(c.Ay, {
                            className: "gap-2xs flex items-center"
                        }, a().createElement(c.Ay, {
                            className: "text-subtitle1"
                        }, i), a().createElement(c.Ay, {
                            className: "text-body3 text-t-third"
                        }, l(s)))
                    }
                }, m.map((function(e) {
                    var t = e.network;
                    return a().createElement(fs.Option, {
                        key: t,
                        value: t
                    }, a().createElement(mc, (0, x.A)({}, e)))
                })))
            };
            var hc = function(e) {
                var t = e.networkOptions,
                    n = (0, d.r)().isRTL,
                    o = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    i = (0, X.Qs)().isMobile,
                    s = Ro(),
                    l = Oo(),
                    u = l.value,
                    f = l.error,
                    p = l.setError,
                    m = l.onChange,
                    v = (0, k.A)(s.value, 1)[0],
                    h = (t.find((function(e) {
                        return e.network === v
                    })) || {
                        memoRegex: ""
                    }).memoRegex,
                    g = (0, r.useCallback)((function() {
                        var e = "";
                        !u && h && new RegExp(h).test(u) && (e = o("wallet-ui-validate-memo-invalid")), p && p(e)
                    }), [u, p, h, o]),
                    b = a().createElement(c.Ay, {
                        className: "gap-4xs flex items-center"
                    }, a().createElement(c.Ay, null, "MEMO"), a().createElement(kt, {
                        arrow: !0,
                        enablePortal: !0,
                        useReactPopper: !0,
                        variant: "gray",
                        placement: n ? "left" : "right",
                        tooltips: o("exchange-withdraw-addressTagTip")
                    }, a().createElement(O, {
                        className: "text-iconNormal text-[16px]"
                    })));
                return a().createElement(Po, {
                    errMsg: f,
                    label: b,
                    tips: o("wallet-ui-memo-confirmInfo")
                }, a().createElement(ss, {
                    id: "input-AddressTag-exchange-wallet-optional",
                    size: "large",
                    value: u,
                    className: "w-full",
                    onBlur: g,
                    onChange: m,
                    status: f ? "error" : void 0,
                    variant: i ? "default" : "line",
                    placeholder: o("exchange-wallet-optional")
                }))
            };
            const gc = a().memo(hc);
            var bc = function() {
                var e = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    t = (0, X.Qs)().isMobile,
                    n = To(),
                    o = n.value,
                    i = n.error,
                    s = n.onChange,
                    c = n.setError,
                    l = n.matchNetworkCount,
                    u = (0, r.useCallback)((function() {
                        var t = "";
                        o || (t = e("form-validate-addressRequire")), 0 === l && (t = e("form-validate-addressInvalid")), c && c(t)
                    }), [o, l, e, c]);
                return a().createElement(Po, {
                    errMsg: i,
                    label: e("wallet-ui-label-address")
                }, a().createElement(ss, {
                    size: "large",
                    value: o,
                    className: "w-full",
                    onChange: s,
                    onBlur: u,
                    id: "address-input",
                    status: i ? "error" : void 0,
                    variant: t ? "default" : "line",
                    placeholder: e("wallet-ui-placeholder-enterAddressHere")
                }))
            };
            const yc = a().memo(bc);
            var wc = function(e) {
                var t = e.withdrawInfo,
                    n = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    o = (0, X.Qs)().isMobile,
                    i = Mo(),
                    s = Ro(),
                    c = Oo(),
                    l = To(),
                    u = Io(),
                    f = u.isUniversalAddress,
                    d = u.setUniversalAddress,
                    p = Do(),
                    m = p.coinOptions,
                    v = p.coinLoading,
                    h = p.networkOptions,
                    g = p.networkLoading,
                    b = p.isAddressTagRequired,
                    y = (0, r.useCallback)((function(e, t) {
                        d(t), t && s.reset()
                    }), [s, d]);
                return (0, r.useEffect)((function() {
                    t && (t.coin && i.onChange([t.coin]), t.network && s.onChange([t.network]), t.addressTag && c.onChange(t.addressTag), t.address && l.onChange(t.address))
                }), [t]), a().createElement(a().Fragment, null, a().createElement(Po, {
                    label: n("exchange-common-coin")
                }, a().createElement(dc, {
                    loading: v,
                    options: m,
                    disabled: f,
                    placement: o ? "top" : "bottom",
                    onChange: f ? function() {} : i.onChange,
                    value: f ? [] : i.value
                })), a().createElement(co, {
                    id: "checkbox-AddressCoinAndNet-addressMgmt-universal-desc",
                    value: "",
                    checked: f,
                    onChange: y
                }, n("addressMgmt-universal-desc", "Set as a universal address."), a().createElement(kt, {
                    arrow: !0,
                    enablePortal: !0,
                    useReactPopper: !0,
                    variant: "gray",
                    placement: "top",
                    tooltips: n("addressMgmt-universal-tips")
                }, a().createElement(O, {
                    className: "text-iconNormal text-[16px]"
                }))), a().createElement(yc, null), f || i.value.length ? a().createElement(Po, {
                    label: n("wallet-ui-label-network")
                }, a().createElement(vc, {
                    value: s.value,
                    onChange: s.onChange,
                    loading: g,
                    options: h,
                    placement: o ? "top" : "bottom"
                })) : null, b && a().createElement(gc, {
                    networkOptions: h
                }))
            };
            const xc = a().memo(wc);
            var Ec = function() {
                var e = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    t = (0, X.Qs)().isMobile,
                    n = So(),
                    o = n.value,
                    i = n.error,
                    s = n.onChange,
                    c = n.setError,
                    l = (0, r.useCallback)((function() {
                        var t = "";
                        o || (t = e("form-addressName-required")), (o.length > 20 || o.length < 4) && (t = e("form-addressName-invalid")), c && c(t)
                    }), [o, c, e]);
                return a().createElement(Po, {
                    errMsg: i,
                    label: e("form-addressName-label")
                }, a().createElement(ss, {
                    id: "input-AddressLabel-form-addressName",
                    size: "large",
                    value: o,
                    className: "w-full",
                    onBlur: l,
                    onChange: s,
                    status: i ? "error" : void 0,
                    variant: t ? "default" : "line",
                    placeholder: e("form-addressName-placeholder")
                }))
            };
            const Ac = a().memo(Ec);
            var kc = {
                    status: !1,
                    whiteListNew: {},
                    time: "24"
                },
                Cc = (0, lo.eU)(kc),
                _c = n("LQoT"),
                Nc = (0, lo.eU)([]),
                Sc = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return a().createElement(eo.A, {
                        className: "text-t-primary text-[16px] ".concat(n)
                    })
                },
                Mc = function() {
                    var e = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                        t = Lo(),
                        n = t.value,
                        r = t.onChange,
                        o = (0, uo.md)(Cc).status;
                    return a().createElement(a().Fragment, null, a().createElement(co, {
                        id: "checkbox-ToWhiteListCheck-whitelisted-label",
                        value: "",
                        checked: n,
                        onChange: function(e, t) {
                            return r(t)
                        }
                    }, e("security-add-address-whitelisted-label")), o && n ? a().createElement(Gn.A, {
                        icon: a().createElement(Sc, null),
                        variant: "primary",
                        className: "mt-m",
                        message: e("security-whitelistWith24h-alert")
                    }) : null)
                };
            const Ic = a().memo(Mc);
            const Rc = function(e) {
                var t = e.onClose,
                    n = e.withdrawInfo,
                    o = e.isShowOriginSetting,
                    i = function() {
                        var e = (0, uo.Xr)(Nc),
                            t = (0, ps.Ay)("withdrawalAddresses", (0, pn.A)(hn().mark((function t() {
                                var n;
                                return hn().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, (0, _c.GV)({
                                                defaultFlags: ["0", "1", "2"]
                                            });
                                        case 2:
                                            return n = t.sent, e(n), t.abrupt("return", new Promise((function(e) {
                                                return setTimeout((function() {
                                                    return e(Date.now())
                                                }), 10)
                                            })));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), {
                                dedupingInterval: 2e3
                            });
                        return {
                            isLoading: t.isLoading,
                            mutate: t.mutate,
                            time: t.data
                        }
                    }().time;
                ! function(e) {
                    var t = (0, uo.Xr)(Cc),
                        n = (0, ps.Ay)(e ? ["queryWalletWithdrawWhiteInfo", e] : null, (0, pn.A)(hn().mark((function e() {
                            var n;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, ds.D5)();
                                    case 2:
                                        return n = e.sent, t(n.success ? n.data : kc), e.abrupt("return", new Promise((function(e) {
                                            return setTimeout(e, 10)
                                        })));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))));
                    n.isLoading, n.mutate
                }(i);
                var s = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    l = function() {
                        null === t || void 0 === t || t()
                    },
                    u = function(e) {
                        var t, n = So(),
                            a = Mo(),
                            o = Io(),
                            i = o.isUniversalAddress,
                            s = o.setUniversalAddress,
                            c = Ro(),
                            l = Oo(),
                            u = To(),
                            f = Lo(),
                            d = Bo().value,
                            p = po().addAddressList,
                            m = (0, k.A)(c.value, 1)[0],
                            v = Do().isAddressTagRequired,
                            h = n.value && !n.error,
                            g = a.value.length > 0 || i,
                            b = c.value.length > 0,
                            y = u.value && !u.error,
                            w = !v || v && !l.error,
                            x = "others" === (null === d || void 0 === d ? void 0 : d.TYPE) ? (null === (t = d.label) || void 0 === t ? void 0 : t.length) <= 30 : "BSC" !== m || 0 !== (null === d || void 0 === d ? void 0 : d.supportBsc),
                            E = h && g && b && y && w && x,
                            A = (0, r.useRef)();
                        return A.current = function() {
                            n.reset(), a.onChange([]), s(!1), u.reset(), l.reset(), f.onChange(!1)
                        }, {
                            canSubmit: E,
                            handleSubmit: function() {
                                var t = c.value[0],
                                    r = {
                                        name: n.value,
                                        coin: i ? "" : a.value[0],
                                        network: t === mo ? "ETH" : t,
                                        whiteStatus: f.value,
                                        address: u.value,
                                        addressTag: l.value,
                                        origin: "others" === (null === d || void 0 === d ? void 0 : d.TYPE) ? null === d || void 0 === d ? void 0 : d.label : "",
                                        originType: "others" === (null === d || void 0 === d ? void 0 : d.TYPE) ? null === d || void 0 === d ? void 0 : d.TYPE : null === d || void 0 === d ? void 0 : d.label,
                                        needMemoWarning: v && !l.value,
                                        onCompleted: function() {
                                            return e && e()
                                        },
                                        defaultFlag: t === mo ? "2" : void 0
                                    };
                                p(r)
                            },
                            resetRef: A
                        }
                    }(l),
                    d = u.canSubmit,
                    p = u.handleSubmit,
                    m = u.resetRef;
                return (0, r.useEffect)((function() {
                    return m.current
                }), [m]), a().createElement(a().Fragment, null, a().createElement(c.Ay, {
                    className: f()("gap-m pt-xs flex flex-col", "mx-[-24px] overflow-y-auto px-[24px]", "mobile:max-h-[380px]  max-h-[450px]")
                }, a().createElement(Ac, null), a().createElement(xc, {
                    withdrawInfo: n
                }), o && a().createElement(hs, null)), a().createElement(c.Ay, {
                    className: "pt-2xs flex flex-col"
                }, a().createElement(Ic, null)), a().createElement(c.Ay, {
                    className: "gap-2xs pt-2xs flex justify-end"
                }, a().createElement(ja, {
                    id: "btn-AddAddress-exchange-common-cancel",
                    variant: "secondary",
                    onClick: l,
                    className: "flex-1"
                }, s("exchange-common-cancel")), a().createElement(ja, {
                    id: "btn-AddAddress-exchange-common-save",
                    inactive: !d,
                    onClick: p,
                    className: "flex-1"
                }, s("exchange-common-save"))))
            };
            var Oc = n("mk7A"),
                Tc = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.step = B.es, t.state = {
                            value: 0,
                            distance: 0
                        }, t.getTime = function() {
                            var e = t.state.distance,
                                n = t.props,
                                r = n.realTime,
                                a = n.total,
                                o = Math.abs(e / a * 100);
                            return r ? 0 : Math.floor(200 * Math.sqrt(o))
                        }, t.inViewPort = function() {
                            var e = t.props,
                                n = e.value,
                                r = e.total,
                                a = Math.min(n, r),
                                o = t.state.value;
                            a !== o && t.setState({
                                value: Number((+a).toFixed(2)),
                                distance: a - o
                            }, (function() {
                                return t.step()
                            }))
                        }, t
                    }
                    return (0, o.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.total,
                            r = t.value,
                            a = e.total,
                            o = e.value;
                        this.equalUpdate({
                            total: n,
                            value: r
                        }, {
                            total: a,
                            value: o
                        })
                    }, t.defaultProps = {
                        total: 100
                    }, t
                }(n("2OVm").A);

            function Lc(e) {
                return {
                    role: "progressbar",
                    "aria-label": "loading",
                    "aria-valuenow": e.percent,
                    "aria-valuemin": 0,
                    "aria-valuemax": e.total
                }
            }
            const Bc = Tc;
            const Dc = function(e) {
                var t = e.className,
                    n = e.value,
                    i = e.total,
                    s = e.color,
                    l = e.outerColor,
                    u = e.strokeWidth,
                    p = (0, d.r)().prefixCls,
                    m = f()("".concat(p, "-progress__bar"), t),
                    v = (0, r.useState)({
                        value: 0,
                        distance: 0
                    }),
                    h = v[0],
                    g = h.value,
                    b = h.distance,
                    y = v[1];
                a().useEffect((function() {
                    var e = Math.min(n, i);
                    y((function(t) {
                        var n = t.value;
                        return e !== n ? {
                            distance: Math.abs(e - n),
                            value: Number((+e).toFixed(2))
                        } : t
                    }))
                }), [n, i]);
                var w = 100 * g / i,
                    x = {
                        background: l,
                        height: u
                    },
                    E = Math.floor(200 * Math.sqrt(b / i * 100)),
                    A = Lc({
                        percent: g,
                        total: i
                    });
                return a().createElement(c.Ay, (0, o.__assign)({}, A, {
                    className: m,
                    style: x
                }), a().createElement(c.Ay, {
                    className: "bar-inner",
                    style: {
                        background: s,
                        transitionDuration: "".concat(E, "ms"),
                        width: "".concat((w || 0).toFixed(2), "%")
                    }
                }), e.children)
            };
            var Pc = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, o.__extends)(t, e), t.prototype.trackPath = function(e) {
                    var t = parseInt("".concat(50 - e / 2), 10);
                    return "M 50 50 m 0 -".concat(t, " a ").concat(t, " ").concat(t, " 0 1 1 0 ").concat(2 * t, " a ").concat(t, " ").concat(t, " 0 1 1 0 -").concat(2 * t)
                }, t.prototype.perimeter = function(e) {
                    return 2 * Math.PI * (50 - e / 2)
                }, t.prototype.circlePathStyle = function(e, t, n) {
                    var r = this.props.total,
                        a = this.perimeter(n);
                    return {
                        strokeDasharray: "".concat(a, "px,").concat(a, "px"),
                        strokeDashoffset: "".concat((1 - e / r) * a, "px"),
                        transition: "stroke-dashoffset ".concat(t, ", stroke ").concat(t)
                    }
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.color,
                        r = e.strokeWidth,
                        i = void 0 === r ? 5.8 : r,
                        s = e.outerColor,
                        c = void 0 === s ? "#E5E9F2" : s,
                        l = e.total,
                        u = this.state.value,
                        f = this.trackPath(i),
                        d = "".concat(this.getTime() || 0, "ms"),
                        p = {
                            d: f,
                            strokeWidth: i,
                            stroke: c
                        },
                        m = {
                            d: f,
                            strokeWidth: i,
                            stroke: n,
                            style: this.circlePathStyle(u, d, i)
                        },
                        v = Lc({
                            percent: u,
                            total: l
                        });
                    return a().createElement("div", (0, o.__assign)({}, v, {
                        className: t,
                        ref: this.setRefs("root")
                    }), a().createElement("svg", {
                        viewBox: "0 0 100 100"
                    }, a().createElement("path", (0, o.__assign)({}, p, {
                        fill: "none"
                    })), a().createElement("path", (0, o.__assign)({}, m, {
                        fill: "none",
                        strokeLinecap: "round"
                    }))), this.props.children)
                }, t
            }(Bc);
            const Fc = Pc;
            var zc = 1e3 / 60,
                Vc = function(e) {
                    return "function" === typeof e
                },
                Uc = function(e, t, n, r, a) {
                    var o = e / r - 1,
                        i = n * (o * o * o + 1) + t;
                    return a ? i.toFixed(a) : Math.round(i)
                },
                jc = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.$rafFunc = null, t.step = function() {
                            var e = t,
                                n = e.state,
                                r = n.value,
                                a = n.distance,
                                o = ("".concat(r).split(".")[1] || "".concat(a).split(".")[1] || "").length,
                                i = r - a;
                            Vc(t.$rafFunc) && t.$rafFunc();
                            var s = t.getTime(),
                                c = 1,
                                l = Math.ceil(s / zc);
                            ! function t() {
                                var n = e.$refs.root,
                                    s = c >= l ? r : Uc(c++, i, a, l, o),
                                    u = a > 0 ? s >= r : s <= r;
                                e.$rafFunc = u ? null : requestAnimationFrame(t), n instanceof Element && (n.innerHTML = u ? r : c % 2 === 0 ? s : n.innerHTML)
                            }()
                        }, t
                    }
                    return (0, o.__extends)(t, e), t.prototype.componentWillUnmount = function() {
                        e.prototype.componentWillUnmount.call(this), Vc(this.$rafFunc) && this.$rafFunc()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.total,
                            r = Lc({
                                percent: e.value,
                                total: n
                            });
                        return a().createElement("span", (0, o.__assign)({}, r, {
                            className: t,
                            ref: this.setRefs("root")
                        }))
                    }, t
                }(Bc);
            const Wc = jc;
            var qc = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, o.__extends)(t, e), t.prototype.lineStyle = function(e, t) {
                    var n = this.props,
                        r = n.color,
                        a = (100 * e / n.total).toFixed(2);
                    return {
                        background: r,
                        width: "".concat(a || 0, "%"),
                        transitionDuration: t
                    }
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.outerColor,
                        r = e.total,
                        i = this.state.value,
                        s = "".concat(this.getTime() || 0, "ms"),
                        c = this.lineStyle(i, s),
                        l = {
                            background: n
                        },
                        u = Lc({
                            percent: i,
                            total: r
                        });
                    return a().createElement("div", (0, o.__assign)({}, u, {
                        className: t,
                        style: l,
                        ref: this.setRefs("root")
                    }), a().createElement("div", {
                        className: "bar-inner",
                        style: c
                    }), this.props.children)
                }, t
            }(Bc);
            const Hc = qc;
            const $c = function(e) {
                var t = e.type,
                    n = void 0 === t ? "bar" : t,
                    r = e.className,
                    i = (0, o.__rest)(e, ["type", "className"]),
                    s = (0, d.r)().prefixCls,
                    c = f()("".concat(s, "-progress__").concat(n), r);
                if (T.lq) throw new Error("this component only use Web side");
                return "circle" === n ? a().createElement(Fc, (0, o.__assign)({}, i, {
                    className: c
                })) : "number" === n ? a().createElement(Wc, (0, o.__assign)({}, i, {
                    className: c
                })) : a().createElement(Hc, (0, o.__assign)({}, i, {
                    className: c
                }))
            };
            var Kc = function(e) {
                    var t = e.rootClz,
                        n = e.percent,
                        r = e.style,
                        i = "".concat(t, "-bar"),
                        s = {
                            total: 100,
                            color: "var(--color-TextOnGray)",
                            outerColor: "var(--color-SecondaryText)",
                            className: "".concat(i, "-progress")
                        };
                    return a().createElement(c.Ay, {
                        className: i,
                        style: r
                    }, a().createElement(c.Ay, {
                        className: "".concat(i, "-percent"),
                        children: "".concat(n, "%")
                    }), a().createElement(Dc, (0, o.__assign)({}, s, {
                        value: n,
                        strokeWidth: 4
                    })))
                },
                Gc = T.lq ? Kc : function(e) {
                    var t = e.rootClz,
                        n = e.percent,
                        r = e.variant,
                        i = e.style,
                        s = "".concat(t, "-circle"),
                        l = "circle-secondary" === r,
                        u = function(e, t, n) {
                            return e ? n : t
                        },
                        f = {
                            total: 100,
                            color: u(l, "var(--color-RedGreenBgText)", "var(--color-BtnBg)"),
                            outerColor: u(l, "var(--color-DisableText)", "var(--color-DisableBtn)"),
                            className: "".concat(s, "-progress")
                        };
                    return a().createElement(c.Ay, {
                        className: s,
                        style: (0, o.__assign)({
                            width: "52px",
                            height: "52px"
                        }, i)
                    }, !l && a().createElement(c.Ay, {
                        className: "".concat(s, "-percent"),
                        children: "".concat(n, "%")
                    }), a().createElement($c, (0, o.__assign)({}, f, {
                        type: "circle",
                        value: n,
                        strokeWidth: 8
                    })))
                },
                Yc = function(e) {
                    var t = e.rootClz,
                        n = e.percent,
                        i = e.style,
                        s = "".concat(t, "-dot"),
                        l = "a".repeat(15).split(""),
                        u = (0, r.useCallback)((function(e) {
                            return n > e * Math.round(100 / 15) ? "active" : ""
                        }), [n]),
                        f = Lc({
                            percent: n,
                            total: 100
                        });
                    return a().createElement(c.Ay, (0, o.__assign)({}, f, {
                        className: s,
                        style: i
                    }), a().createElement(c.Ay, {
                        className: "".concat(s, "-percent"),
                        children: "".concat(n, "%")
                    }), a().createElement(c.Ay, {
                        className: "".concat(s, "-progress")
                    }, l.map((function(e, t) {
                        return a().createElement(c.Ay, {
                            key: t,
                            className: u(t)
                        })
                    }))))
                };
            const Zc = function(e) {
                var t, n = e.variant,
                    r = void 0 === n ? "primary" : n,
                    i = e.percent,
                    s = void 0 === i ? 0 : i,
                    l = e.message,
                    u = void 0 === l ? "Loading" : l,
                    p = e.progressStyle,
                    m = (0, o.__rest)(e, ["variant", "percent", "message", "progressStyle"]),
                    h = (0, d.r)(),
                    g = h.prefixCls,
                    b = h.isRTL,
                    y = "".concat(g, "-loading"),
                    w = f()(y, ((t = {})["".concat(y, "-rtl")] = !!b, t["".concat(y, "__").concat(r)] = r, t), e.className);
                if (["primary", "secondary"].includes(r)) return a().createElement(c.Ay, (0, o.__assign)({}, m, {
                    className: w
                }), "primary" === r && a().createElement(c.Ay, {
                    className: "".concat(y, "-box")
                }), a().createElement(v, {
                    className: "".concat(y, "-nezha")
                }));
                var x = {
                    bar: Kc,
                    dot: Yc,
                    circle: Gc,
                    "circle-secondary": Gc
                }[r] || Kc;
                return a().createElement(c.Ay, (0, o.__assign)({}, m, {
                    className: w
                }), a().createElement(x, {
                    rootClz: y,
                    percent: s,
                    variant: r,
                    style: p
                }), u && a().createElement(c.Ay, {
                    className: "".concat(y, "-message"),
                    children: u
                }))
            };
            const Qc = function(e) {
                return a().createElement(i.A, (0, o.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), a().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.11 88c22.09 0 40-17.908 40-40 0-22.09-17.91-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm-3-36V32h6v20h-6zm0 12v-6h6v6h-6z",
                    fill: "#F0B90B"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77.11 48c0 16.017-12.985 29-29 29-16.017 0-29-12.983-29-29 0-16.015 12.983-29 29-29 16.015 0 29 12.985 29 29zm-26-15v19h-6V33h6zm0 31v-6h-6v6h6z",
                    fill: "#F0B90B"
                }))
            };
            var Xc = function(e) {
                var t = e.params,
                    n = e.onClose,
                    o = e.onSuccess,
                    i = e.onError,
                    s = e.isNeedVerify,
                    l = void 0 !== s && s,
                    u = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t,
                    f = t.onCompleted,
                    d = t.needMemoWarning,
                    p = (0, A.A)(t, ["onCompleted", "needMemoWarning"]),
                    m = function(e) {
                        var t = e.request,
                            n = e.callback,
                            a = (0, k.A)((0, r.useState)(!1), 2),
                            o = a[0],
                            i = a[1],
                            s = function() {
                                var e = (0, pn.A)(hn().mark((function e() {
                                    var r, a;
                                    return hn().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 1, i(!0), e.next = 5, t();
                                            case 5:
                                                if (!(a = e.sent).success) {
                                                    e.next = 10;
                                                    break
                                                }
                                                r = a.data, n && n(r), e.next = 11;
                                                break;
                                            case 10:
                                                throw new Error(a.message);
                                            case 11:
                                                e.next = 17;
                                                break;
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(1), console.error("AddAddressInfo useCommonAction error", e.t0), n && n(void 0, e.t0.message);
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 13]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return {
                            loading: o,
                            onAction: s
                        }
                    }({
                        request: (0, pn.A)(hn().mark((function e() {
                            var t, n, r, a;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, _c.UP)((0, Vt.A)((0, E.A)({}, p), {
                                            isNeedVerify: l
                                        }));
                                    case 3:
                                        if (t = e.sent, n = t.success, r = t.data, a = t.message, console.error("AddAddressInfo useCommonAction request", {
                                                success: n,
                                                data: r,
                                                message: a
                                            }), n) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error(a);
                                    case 10:
                                        return e.abrupt("return", {
                                            success: n,
                                            data: r,
                                            message: a
                                        });
                                    case 13:
                                        return e.prev = 13, e.t0 = e.catch(0), console.error("AddAddressInfo useCommonAction error", e.t0), e.abrupt("return", {
                                            success: !1,
                                            message: e.t0.message || u("exchange-common-failed"),
                                            data: void 0
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        }))),
                        errorMsg: u("exchange-common-failed"),
                        successMsg: u("exchange-common-successful"),
                        callback: function(e, n) {
                            e ? (o && o(e, {
                                address: t.address,
                                addressTag: t.addressTag,
                                coin: t.coin,
                                network: t.network
                            }), f && setTimeout(f, 200)) : (console.error("AddAddressInfo callback error", n), i && i(n))
                        }
                    }),
                    v = m.loading,
                    h = m.onAction;
                return (0, r.useEffect)((function() {
                    !d && (n && n(), h())
                }), []), d ? a().createElement(c.Ay, {
                    className: "p-xl text-center"
                }, a().createElement(Qc, {
                    className: "mx-auto text-[96px]"
                }), a().createElement(c.Ay, {
                    className: "pb-xl pt-m text-body3"
                }, u("exchange-addressManagement-memoWarning")), a().createElement(c.Ay, {
                    className: "gap-2xs flex flex-col"
                }, a().createElement(ja, {
                    id: "btn-AddAddressInfo-wallet-ui-common-action-confirm",
                    onClick: h,
                    loading: v,
                    inactive: v
                }, u("wallet-ui-common-action-confirm")), a().createElement(ja, {
                    id: "btn-AddAddressInfo-wallet-ui-common-action-return",
                    variant: "secondary",
                    onClick: function(e) {
                        return n(e)
                    },
                    inactive: v
                }, u("wallet-ui-common-action-return")))) : a().createElement(Oc.A, {
                    visible: !0,
                    enablePortal: !0
                }, a().createElement(Zc, null))
            };
            const Jc = function(e) {
                var t = e.onSuccess,
                    n = e.onClose,
                    r = e.onError,
                    o = e.isNeedVerify,
                    i = po(),
                    s = i.resetAddAddress,
                    c = i.addressAction,
                    l = c.type,
                    u = c.params,
                    f = function() {
                        s(), n && n()
                    };
                return l ? "addAddressList" !== l || u.needMemoWarning ? a().createElement(za.Ay, {
                    className: "noH5:z-[1401]",
                    visible: "addAddressList" === l,
                    onClose: f,
                    enablePortal: !0
                }, a().createElement(Xc, {
                    onClose: f,
                    params: u,
                    onSuccess: t,
                    onError: r,
                    isNeedVerify: o
                })) : a().createElement(Xc, {
                    onClose: f,
                    params: u,
                    onSuccess: t,
                    onError: r,
                    isNeedVerify: o
                }) : null
            };
            (0, R.eF)((function(e) {
                var t = e.onClose,
                    n = e.onSuccess,
                    r = e.onError,
                    o = e.withdrawInfo,
                    i = e.isNeedVerify,
                    s = (0, w.s9)(["exchange-wallet", "mainuc-security-ui"]).t;
                return a().createElement(a().Fragment, null, a().createElement(ro, {
                    closeIcon: !0,
                    enablePortal: !0,
                    modalSize: "middle",
                    title: s("exchange-withdraw-saveAddress"),
                    open: !0,
                    onClose: t,
                    contentClassName: "mb-xl mt-2xs",
                    className: "z-[1400]",
                    maskClose: !1
                }, a().createElement(Rc, {
                    withdrawInfo: o,
                    onClose: t,
                    isShowOriginSetting: !i
                })), a().createElement(Jc, {
                    onClose: function() {
                        null === t || void 0 === t || t()
                    },
                    onSuccess: n,
                    onError: r,
                    isNeedVerify: i
                }))
            }));
            n("xtU6");
            var el = function(e) {
                var t, n = e.label,
                    i = e.arrow,
                    s = e.size,
                    l = void 0 === s ? "middle" : s,
                    u = e.placement,
                    p = void 0 === u ? "right" : u,
                    m = e.variant,
                    v = void 0 === m ? "primary" : m,
                    h = e.labelIcon,
                    g = e.offset,
                    b = e.cornerPosition,
                    y = e.iconPosition,
                    w = void 0 === y ? "start" : y,
                    x = e.radius,
                    E = (0, o.__rest)(e, ["label", "arrow", "size", "placement", "variant", "labelIcon", "offset", "cornerPosition", "iconPosition", "radius"]),
                    A = (0, d.r)(),
                    k = A.prefixCls,
                    C = A.isRTL,
                    _ = "".concat(k, "-tag"),
                    N = f()("".concat(_, "-wrap"), e.className),
                    S = {
                        variant: v,
                        arrow: i,
                        placement: p,
                        className: f()(_, ((t = {})["data-size-".concat(l)] = !!l, t["data-corner-".concat(b)] = !!b, t)),
                        offset: b || !e.children ? 0 : g,
                        radius: x
                    },
                    M = (0, r.useMemo)((function() {
                        if (!h) return n;
                        var e = "end" !== w === !C;
                        return a().createElement(a().Fragment, null, e && h, n, !e && h)
                    }), [n, h, w, C]),
                    I = {
                        "aria-label": "".concat(v, " tag")
                    };
                return a().createElement(c.Ay, (0, o.__assign)({}, I, E, {
                    className: N
                }), /^left/.test(p) && a().createElement(U, (0, o.__assign)({}, S), M), e.children, /^right/.test(p) && a().createElement(U, (0, o.__assign)({}, S), M))
            };
            el.displayName = "Tag";
            const tl = el;
            var nl = "convert-widget",
                rl = "convert-widget-link",
                al = "convert-widget-uikit-link",
                ol = "/bapi/margin";
            "".concat(ol, "/v2/friendly/new-otc/get-from-selector"), "".concat(ol, "/v2/friendly/new-otc/get-to-selector");
            var il = function(e) {
                    var t = e.children,
                        n = e.convertWidgetParams,
                        o = e.staticHost,
                        i = (0, I.Eb)().refreshAction;
                    ! function(e) {
                        var t = e.cdnHost,
                            n = e.host,
                            a = void 0 === n ? "" : n,
                            o = e.onload,
                            i = e.onerror,
                            s = e.loadUikitStyle,
                            c = void 0 === s || s,
                            l = e.ignoreLocale,
                            u = void 0 !== l && l,
                            f = (0, r.useCallback)((function(e, n, r) {
                                var a = document.createElement("link");
                                if (a.id = rl, a.rel = "stylesheet", a.type = "text/css", a.href = "".concat(t, "/static/convert-modal-ui/convert-modal-widget").concat(e ? ".".concat(e) : "", ".css").concat(n), document.head.appendChild(a), r) {
                                    var o = document.createElement("link");
                                    o.id = al, o.rel = "stylesheet", o.type = "text/css", o.href = "".concat(t, "/static/convert-modal-ui/convert-modal-uikit").concat(e ? ".".concat(e) : "", ".css").concat(n), document.head.appendChild(o)
                                }
                            }), []),
                            d = (0, r.useCallback)((function(e, n) {
                                var r = document.createElement("script");
                                r.id = nl, r.src = "".concat(t, "/static/convert-modal-ui/convert-modal-widget").concat(e ? ".".concat(e) : "", ".js").concat(n), r.onload = function() {
                                    return null === o || void 0 === o ? void 0 : o()
                                }, r.onerror = function() {
                                    return null === i || void 0 === i ? void 0 : i()
                                }, document.body.appendChild(r)
                            }), []);
                        (0, r.useEffect)((function() {
                            var e = document.getElementById(nl),
                                t = document.getElementById(rl),
                                n = document.getElementById(al);
                            if (e) {
                                if (window.CONVERT_WIDGET) return;
                                null === e || void 0 === e || e.remove(), null === t || void 0 === t || t.remove(), null === n || void 0 === n || n.remove()
                            }

                            function r() {
                                return (r = (0, pn.A)(hn().mark((function e() {
                                    var t, n, r, o, i, s, l;
                                    return hn().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = ["", "?v=".concat(Date.now())], n = t[0], r = t[1], e.prev = 1, (null === window || void 0 === window ? void 0 : window.__RUN_BY_ELECTRON__) ? (o = "en", a || (a = (null === window || void 0 === window || null === (i = window.__ElectronDesktop) || void 0 === i || null === (s = i.constants) || void 0 === s ? void 0 : s.API_HOST) || "")) : o = u ? "en" : window && window.location.pathname.split("/")[1], e.next = 7, fetch("".concat(a, "/").concat(o, "/convert-modal-ui/version")).then((function(e) {
                                                    return e.json()
                                                }));
                                            case 7:
                                                l = e.sent, n = l.data, f(n, r = "", c), setTimeout((function() {
                                                    d(n, r)
                                                }), 20), e.next = 16;
                                                break;
                                            case 14:
                                                e.prev = 14, e.t0 = e.catch(1);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 14]
                                    ])
                                })))).apply(this, arguments)
                            }! function() {
                                r.apply(this, arguments)
                            }()
                        }), [])
                    }({
                        cdnHost: o,
                        onerror: console.error,
                        loadUikitStyle: !0
                    });
                    var s = (0, Hn.useCombineTrade)({
                            biz: "convert",
                            coin: n.fromCoin
                        }).walletConfig,
                        l = void 0 === s ? [] : s,
                        u = (0, r.useMemo)((function() {
                            var e = ["spot", "funding", "earn"];
                            return l.reduce((function(t, n) {
                                return e.includes(n.walletType) ? (0, An.tY)(t, n.balance) : t
                            }), (0, An.tY)(0)).toNumber()
                        }), [l]),
                        f = (0, r.useCallback)((function(e) {
                            null === e || void 0 === e || e.stopPropagation(), u && (null === window || void 0 === window ? void 0 : window.CONVERT_WIDGET) ? window.CONVERT_WIDGET.open((0, Vt.A)((0, E.A)({
                                source: "com",
                                fromCoin: "USDT",
                                targetCoin: "USDC",
                                walletType: "SPOT"
                            }, n), {
                                fromAmount: String(u)
                            })).then((function(e) {
                                (null === e || void 0 === e ? void 0 : e.success) && (console.info("convert success"), i())
                            })).catch((function() {
                                console.error("convert failure")
                            })) : setTimeout((function() {
                                f()
                            }), 200)
                        }), [u, n, i]);
                    return a().createElement(c.Ay, {
                        onClick: f,
                        className: "typography-body4 cursor-pointer hover:underline text-t-TextLink inline"
                    }, t)
                },
                sl = function(e) {
                    var t = e.convertWidgetParams,
                        n = e.staticHost,
                        r = (0, w.s9)("main-uc").t;
                    return (0, Hn.useMediaState)().isMobile ? a().createElement(il, {
                        convertWidgetParams: t,
                        staticHost: n
                    }, a().createElement(tl, {
                        className: "no-flex whitespace-nowrap",
                        label: r("mica-to-be-convert", "To be converted"),
                        variant: "warn",
                        size: "middle"
                    })) : a().createElement(kt, {
                        style: {
                            zIndex: 1200
                        },
                        bubbleWrapperClz: "z-[1200]",
                        arrow: !0,
                        enablePortal: !0,
                        useReactPopper: !0,
                        placement: "top",
                        tooltips: a().createElement(c.Ay, {
                            className: "typography-body5",
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        }, a().createElement(w.x6, {
                            t: r,
                            i18nKey: "mica-to-be-convert-tips",
                            components: {
                                tLink: a().createElement("a", {
                                    className: "BtnLink2 cursor-pointer underline",
                                    href: "/support/announcement/detail/bcaa1f68d6a6450099056ff694ad6c46",
                                    target: "_blank"
                                }),
                                tBtn: a().createElement(il, {
                                    convertWidgetParams: t,
                                    staticHost: n
                                })
                            },
                            defaults: "Due to <tLink>Compliance requirements</tLink>, you will not be able to trade with non-compliant stablecoins. Pleas complete the <tBtn>Convert now</tBtn>."
                        })),
                        delay: {
                            leave: 500
                        }
                    }, a().createElement(tl, {
                        className: "no-flex whitespace-nowrap",
                        label: r("mica-to-be-convert", "To be converted"),
                        labelIcon: a().createElement(O, {
                            className: "text-xs w-m h-m",
                            size: 16,
                            onClick: function(e) {
                                return e.stopPropagation()
                            }
                        }),
                        variant: "warn",
                        size: "middle",
                        iconPosition: "end"
                    }))
                };
            const cl = (0, r.memo)(sl)
        },
        ovBx: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => r
            });
            var r = function(e) {
                if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var t = document.createElement("textarea");
                    t.textContent = e, t.style.position = "fixed", document.body.appendChild(t), t.select();
                    try {
                        return document.execCommand("copy")
                    } catch (n) {
                        return console.warn("Copy to clipboard failed.", n), !1
                    } finally {
                        document.body.removeChild(t)
                    }
                }
                return !1
            }
        },
        NsjG: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                IG: () => i
            }), r = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            }() ? window.localStorage : function() {
                var e = {};
                return {
                    setItem: function(t, n) {
                        e[t] = n
                    },
                    getItem: function(t) {
                        return e[t] || null
                    },
                    removeItem: function(t) {
                        delete e[t]
                    }
                }
            }();
            var a = function(e, t, n) {
                    try {
                        r.setItem(e, n ? String(t) : JSON.stringify(t))
                    } catch (a) {}
                },
                o = function(e, t, n) {
                    try {
                        var o = r.getItem(e);
                        if ("string" !== typeof o) throw a(e, t, n), new Error("init ".concat(e, " - values"));
                        return n ? o : JSON.parse(o || "null")
                    } catch (i) {
                        return t
                    }
                },
                i = {
                    setItem: a,
                    getItem: o,
                    setExpireItem: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return n.ttl ? a(e, {
                            value: t,
                            expire: (new Date).getTime() + n.ttl
                        }, !1) : a(e, t)
                    },
                    getExpireItem: function(e, t) {
                        var n = o(e, t);
                        return n && n.expire ? n.expire && n.expire > (new Date).getTime() ? n.value : null : n
                    },
                    removeItem: function(e) {
                        try {
                            r.removeItem(e)
                        } catch (t) {}
                    }
                }
        },
        W3Ja: (e, t, n) => {
            "use strict";
            n.d(t, {
                op: () => C,
                Qs: () => _
            });
            var r = n("DTvD"),
                a = n.n(r),
                o = n("+0LO"),
                i = n.n(o),
                s = n("5BvR");

            function c(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                const n = Object.keys(e),
                    r = Object.keys(t),
                    a = n.length;
                if (r.length !== a) return !1;
                for (let o = 0; o < a; o++) {
                    const r = n[o];
                    if (e[r] !== t[r] || !Object.prototype.hasOwnProperty.call(t, r)) return !1
                }
                return !0
            }
            var l = n("aWzz"),
                u = n.n(l);
            const f = u().oneOfType([u().string, u().number]),
                d = {
                    all: u().bool,
                    grid: u().bool,
                    aural: u().bool,
                    braille: u().bool,
                    handheld: u().bool,
                    print: u().bool,
                    projection: u().bool,
                    screen: u().bool,
                    tty: u().bool,
                    tv: u().bool,
                    embossed: u().bool
                },
                p = {
                    orientation: u().oneOf(["portrait", "landscape"]),
                    scan: u().oneOf(["progressive", "interlace"]),
                    aspectRatio: u().string,
                    deviceAspectRatio: u().string,
                    height: f,
                    deviceHeight: f,
                    width: f,
                    deviceWidth: f,
                    color: u().bool,
                    colorIndex: u().bool,
                    monochrome: u().bool,
                    resolution: f,
                    type: Object.keys(d)
                },
                {
                    type: m,
                    ...v
                } = p,
                h = {
                    minAspectRatio: u().string,
                    maxAspectRatio: u().string,
                    minDeviceAspectRatio: u().string,
                    maxDeviceAspectRatio: u().string,
                    minHeight: f,
                    maxHeight: f,
                    minDeviceHeight: f,
                    maxDeviceHeight: f,
                    minWidth: f,
                    maxWidth: f,
                    minDeviceWidth: f,
                    maxDeviceWidth: f,
                    minColor: u().number,
                    maxColor: u().number,
                    minColorIndex: u().number,
                    maxColorIndex: u().number,
                    minMonochrome: u().number,
                    maxMonochrome: u().number,
                    minResolution: f,
                    maxResolution: f,
                    ...v
                };
            var g = {
                all: { ...d,
                    ...h
                },
                types: d,
                matchers: p,
                features: h
            };
            const b = e => {
                    const t = [];
                    return Object.keys(g.all).forEach((n => {
                        const r = e[n];
                        null != r && t.push(((e, t) => {
                            const n = (0, s.A)(e);
                            return "number" === typeof t && (t = `${t}px`), !0 === t ? n : !1 === t ? `not ${n}` : `(${n}: ${t})`
                        })(n, r))
                    })), t.join(" and ")
                },
                y = (0, r.createContext)(void 0),
                w = e => {
                    if (!e) return;
                    return Object.keys(e).reduce(((t, n) => (t[(0, s.A)(n)] = e[n], t)), {})
                },
                x = () => {
                    const e = (0, r.useRef)(!1);
                    return (0, r.useEffect)((() => {
                        e.current = !0
                    }), []), e.current
                },
                E = e => {
                    const t = () => (e => e.query || b(e))(e),
                        [n, a] = (0, r.useState)(t);
                    return (0, r.useEffect)((() => {
                        const e = t();
                        n !== e && a(e)
                    }), [e]), n
                },
                A = (e, t, n) => {
                    const a = (e => {
                            const t = (0, r.useContext)(y),
                                n = () => w(e) || w(t),
                                [a, o] = (0, r.useState)(n);
                            return (0, r.useEffect)((() => {
                                const e = n();
                                c(a, e) || o(e)
                            }), [e, t]), a
                        })(t),
                        o = E(e);
                    if (!o) throw new Error("Invalid or missing MediaQuery!");
                    const s = ((e, t) => {
                            const n = () => i()(e, t || {}, !!t),
                                [a, o] = (0, r.useState)(n),
                                s = x();
                            return (0, r.useEffect)((() => {
                                if (s) {
                                    const e = n();
                                    return o(e), () => {
                                        e && e.dispose()
                                    }
                                }
                            }), [e, t]), a
                        })(o, a),
                        l = (e => {
                            const [t, n] = (0, r.useState)(e.matches);
                            return (0, r.useEffect)((() => {
                                const t = e => {
                                    n(e.matches)
                                };
                                return e.addListener(t), n(e.matches), () => {
                                    e.removeListener(t)
                                }
                            }), [e]), t
                        })(s),
                        u = x();
                    return (0, r.useEffect)((() => {
                        u && n && n(l)
                    }), [l]), (0, r.useEffect)((() => () => {
                        s && s.dispose()
                    }), []), l
                };
            var k = n("qrIQ"),
                C = a().useLayoutEffect,
                _ = function() {
                    var e = function() {
                        var e = a().useState(k.lq),
                            t = e[0],
                            n = e[1];
                        return a().useEffect((function() {
                            return n(!0)
                        }), []), t
                    }();
                    if (k.lq) return {
                        isClient: e,
                        isMobile: !0,
                        isTablet: !1
                    };
                    var t = A({
                            query: "screen and (max-width: 767px)"
                        }),
                        n = A({
                            query: "screen and (max-width: 1023px)"
                        });
                    return {
                        isClient: e,
                        isMobile: t,
                        isTablet: e && !t && n
                    }
                }
        },
        QFE7: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => i
            });
            var r = n("DTvD"),
                a = n.n(r),
                o = void 0,
                i = function(e) {
                    var t = e.fn,
                        n = e.time,
                        i = void 0 === n ? 33.33 : n,
                        s = e.deps,
                        c = void 0 === s ? [] : s,
                        l = a().useRef(),
                        u = a().useRef(t);
                    a().useEffect((function() {
                        u.current = t
                    }), [t]);
                    var f = (0, r.useCallback)((function() {
                        l.current && clearTimeout(l.current)
                    }), []);
                    a().useEffect((function() {
                        return f
                    }), c);
                    var d = (0, r.useMemo)((function() {
                        return l.current && clearTimeout(l.current),
                            function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                l.current && clearTimeout(l.current), l.current = setTimeout((function() {
                                    var t = u.current;
                                    t && t.apply(o, e), l.current = void 0
                                }), i)
                            }
                    }), [i]);
                    return {
                        debounceFn: d,
                        clearTimer: f
                    }
                }
        },
        "+0LO": (e, t, n) => {
            "use strict";
            var r = n("mkfS").Y,
                a = window.matchMedia;

            function o(e, t, n) {
                var o, i = this;

                function s(e) {
                    i.matches = e.matches, i.media = e.media
                }
                a && !n && (o = a.call(window, e)), o ? (this.matches = o.matches, this.media = o.media, o.addListener(s)) : (this.matches = r(e, t), this.media = e), this.addListener = function(e) {
                    o && o.addListener(e)
                }, this.removeListener = function(e) {
                    o && o.removeListener(e)
                }, this.dispose = function() {
                    o && o.removeListener(s)
                }
            }
            e.exports = function(e, t, n) {
                return new o(e, t, n)
            }
        },
        RGyw: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("9xbI"),
                s = (0, a.forwardRef)((function(e, t) {
                    return o().createElement(i.A, (0, r.__assign)({}, e, {
                        ref: t
                    }))
                }));
            s.displayName = "Box";
            const c = s
        },
        ZCCp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        Y4uf: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("O94r"),
                s = n.n(i),
                c = n("RGyw"),
                l = n("ZCCp");
            const u = function(e) {
                var t = (0, a.useContext)(l.A).prefixCls,
                    n = e.color,
                    i = (e.name, e.viewBox),
                    u = void 0 === i ? "0 0 96 96" : i,
                    f = e.children,
                    d = (0, r.__rest)(e, ["color", "name", "viewBox", "children"]),
                    p = s()("".concat(t, "-svg"), e.className),
                    m = {
                        as: "svg",
                        viewBox: u,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: n
                    };
                return o().createElement(c.A, (0, r.__assign)({}, d, m, {
                    className: p,
                    children: f
                }))
            }
        },
        "I6V/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        X0Bn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            }
        },
        SR26: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        X4b0: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        eeEA: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => r
            });
            const r = n("RGyw").A
        },
        lm97: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => g
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("O94r"),
                s = n.n(i),
                c = n("QFE7"),
                l = n("ZIpe"),
                u = n("mk7A"),
                f = n("eeEA"),
                d = n("fvKX"),
                p = function(e) {
                    var t, n = e.direction,
                        a = e.className,
                        i = (0, r.__rest)(e, ["direction", "className"]),
                        c = (0, d.r)().prefixCls,
                        l = "".concat(c, "-drawer-handle"),
                        u = "".concat(l, "-icon"),
                        p = s()(l, ((t = {})["data-dir-".concat(n)] = !!n, t), a);
                    return o().createElement(f.Ay, (0, r.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, i, {
                        className: p
                    }), o().createElement(f.Ay, {
                        className: u,
                        "aria-hidden": "true"
                    }))
                },
                m = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "left" : t,
                        a = e.children,
                        i = e.onClose,
                        s = e.maskClz,
                        c = e.wrapClz,
                        f = (0, r.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]);
                    return o().createElement(u.A, (0, r.__assign)({}, f, {
                        onClose: i,
                        className: s
                    }), o().createElement(l.A, {
                        direction: n,
                        className: c,
                        onClose: i
                    }, o().createElement(p, {
                        direction: n
                    }), a))
                };
            m.displayName = "Drawer";
            const v = m;
            var h = function(e) {
                var t, n = e.direction,
                    i = void 0 === n ? "left" : n,
                    l = e.className,
                    p = e.children,
                    m = e.size,
                    h = void 0 === m ? "auto" : m,
                    g = e.once,
                    b = e.onVisibleChange,
                    y = e.draggable,
                    w = e.onClose,
                    x = (0, r.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    E = (0, d.r)().prefixCls,
                    A = "".concat(E, "-drawer"),
                    k = s()("".concat(A, "-wrap"), ((t = {})["data-size-".concat(h)] = "auto" !== h, t["data-dir-".concat(i)] = !!i, t["data-draggable"] = !!y, t)),
                    C = s()(A, l),
                    _ = (0, c.d)({
                        fn: b,
                        time: 50
                    }).debounceFn,
                    N = (0, a.useCallback)((function() {
                        null === w || void 0 === w || w(), _(!1)
                    }), [w, _]),
                    S = (0, a.useCallback)((function() {
                        g && N()
                    }), [g, N]),
                    M = {
                        "aria-modal": !0,
                        role: "dialog",
                        "aria-label": e.title || "drawer"
                    };
                return y ? o().createElement(v, (0, r.__assign)({}, M, {
                    onClose: N,
                    maskClz: C,
                    wrapClz: k
                }, e)) : o().createElement(u.A, (0, r.__assign)({}, x, {
                    onClose: N,
                    className: C
                }), o().createElement(f.Ay, (0, r.__assign)({}, M, {
                    className: k,
                    children: p,
                    onClick: S
                })))
            };
            h.displayName = "Drawer";
            const g = h
        },
        mk7A: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("hTvQ"),
                s = n.n(i),
                c = n("hyZw"),
                l = n("qrIQ"),
                u = n("O94r"),
                f = n.n(u),
                d = n("Svbh"),
                p = n("fvKX"),
                m = n("eeEA");
            const v = function(e) {
                var t, n = e.visible,
                    a = e.inner,
                    i = e.maskClose,
                    u = void 0 === i || i,
                    v = e.needSEO,
                    h = e.enablePortal,
                    g = e.portalNode,
                    b = e.scrollFree,
                    y = e.wrapperProps,
                    w = e.onClose,
                    x = void 0 === w ? c.es : w,
                    E = e.enableScrollSpace,
                    A = void 0 === E || E,
                    k = (0, p.r)(),
                    C = k.prefixCls,
                    _ = k.isRTL,
                    N = "".concat(C, "-mask"),
                    S = f()(N, ((t = {})["".concat(N, "-rtl")] = !!_, t["".concat(N, "-inner")] = !!a, t), e.className);
                o().useEffect((function() {
                    return l.lq || a || b || !(null === document || void 0 === document ? void 0 : document.body) ? c.es : (document.body.style.overflow = n ? "hidden" : "auto", document.body.classList.toggle("".concat(C, "-mask-body"), A && n && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(C, "-mask-body")))
                    })
                }), [n, a, b, C, A]);
                var M = o().useCallback((function(e) {
                    h || e.stopPropagation();
                    var t = e.target,
                        n = e.currentTarget,
                        r = l.lq ? t.id === n.id : t === n;
                    u && r && x()
                }), [x, u, h]);
                var I = {
                        role: "presentation"
                    },
                    R = o().createElement(d.A, (0, r.__assign)({}, I, {
                        className: S,
                        needSEO: v,
                        visible: n,
                        onClick: M,
                        children: e.children
                    })),
                    O = y ? o().createElement(m.Ay, (0, r.__assign)({}, I, y), R) : R;
                return !l.lq && h ? s().createPortal(O, g instanceof HTMLElement ? g : document.body) : O
            }
        },
        k5JY: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => h
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("O94r"),
                s = n.n(i),
                c = n("eeEA"),
                l = n("mk7A"),
                u = n("fvKX"),
                f = n("I6V/"),
                d = n("X4b0"),
                p = n("hyZw"),
                m = n("lm97"),
                v = function(e) {
                    var t, n = e.children,
                        a = e.className,
                        i = e.responsive,
                        f = e.direction,
                        d = void 0 === f ? "bottom" : f,
                        p = e.modalSize,
                        v = void 0 === p ? "small" : p,
                        h = (0, r.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        g = (0, u.r)(),
                        b = g.prefixCls,
                        y = g.isMobile,
                        w = "".concat(b, "-modal"),
                        x = s()(w, a),
                        E = s()("".concat(w, "-wrap"), ((t = {})["data-size-".concat(v)] = !!v, t));
                    if (i && y) return o().createElement(m.A, (0, r.__assign)({}, h, {
                        direction: d,
                        className: a,
                        children: n
                    }));
                    var A = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": h["aria-label"] || "modal"
                    };
                    return o().createElement(l.A, (0, r.__assign)({}, h, {
                        className: x
                    }), o().createElement(c.Ay, (0, r.__assign)({}, A, {
                        className: E,
                        children: n
                    })))
                };
            v.Header = function(e) {
                var t, n, a = e.showPre,
                    i = e.prev,
                    l = e.onPreClick,
                    m = void 0 === l ? p.es : l,
                    v = e.showNext,
                    h = e.next,
                    g = e.onNextClick,
                    b = void 0 === g ? p.es : g,
                    y = (0, r.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    w = (0, u.r)().prefixCls,
                    x = "".concat(w, "-modal-header"),
                    E = s()(x, ((t = {})["".concat(x, "-pre")] = !!a, t["".concat(x, "-pre-hidden")] = "hidden" === a, t), e.className);
                return a && void 0 === i && (i = o().createElement(f.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), o().createElement(c.Ay, (0, r.__assign)({}, y, {
                    className: E
                }), a ? o().createElement(c.Ay, {
                    className: s()("".concat(x, "-prev")),
                    onClick: m,
                    children: i,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, o().createElement(c.Ay, {
                    className: "".concat(x, "-main"),
                    children: e.children
                }), v ? o().createElement(c.Ay, {
                    className: s()("".concat(x, "-next"), (n = {}, n["".concat(x, "-next-hidden")] = "hidden" === v, n)),
                    onClick: b,
                    children: h || o().createElement(d.A, {
                        name: "Close1C",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": h ? "Next" : "Close"
                }) : null)
            }, v.Content = function(e) {
                var t = (0, u.r)().prefixCls,
                    n = "".concat(t, "-modal-content"),
                    a = s()(n, e.className);
                return o().createElement(c.Ay, (0, r.__assign)({}, e, {
                    className: a
                }))
            }, v.Footer = function(e) {
                var t, n = e.layout,
                    a = (0, r.__rest)(e, ["layout"]),
                    i = (0, u.r)().prefixCls,
                    l = "".concat(i, "-modal-footer"),
                    f = s()(l, ((t = {})["".concat(l, "-").concat(n)] = !!n, t), a.className);
                return o().createElement(c.Ay, (0, r.__assign)({}, a, {
                    className: f
                }))
            };
            const h = v
        },
        mXw3: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("X0Bn"),
                s = n("SR26"),
                c = n("Y4uf");
            const l = function(e) {
                return o().createElement(c.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            };
            var u = n("X4b0"),
                f = n("O94r"),
                d = n.n(f),
                p = n("eeEA"),
                m = n("fvKX"),
                v = {
                    error: o().createElement(i.A, {
                        name: "CircledClose1C",
                        color: "Error"
                    }),
                    warn: o().createElement(s.A, {
                        name: "CircledWarning1C",
                        color: "PrimaryYellow"
                    }),
                    success: o().createElement(l, {
                        name: "CircledCheckmark1C",
                        color: "Success"
                    }),
                    push: o().createElement(l, {
                        name: "CircledCheckmark1C",
                        color: "Success"
                    })
                };
            const h = function(e) {
                var t, n, i = e.variant,
                    s = void 0 === i ? "primary" : i,
                    c = e.sz,
                    l = void 0 === c ? "middle" : c,
                    f = e.icon,
                    h = e.title,
                    g = e.message,
                    b = e.closable,
                    y = e.onClose,
                    w = e.closeIcon,
                    x = e.minWidth,
                    E = (0, r.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    A = (0, m.r)(),
                    k = A.prefixCls,
                    C = A.isRTL,
                    _ = "".concat(k, "-notification"),
                    N = d()(_, ((t = {})["".concat(_, "-rtl")] = !!C, t["".concat(_, "__").concat(s)] = !!s, t["data-size-".concat(l)] = !!l, t["".concat(_, "-mw")] = !!x, t), e.className),
                    S = d()("".concat(_, "-content-message"), {
                        "data-push-message": "push" === s && !h
                    });
                if (!h && !g) return null;
                var M = !1 === f ? null : (0, a.isValidElement)(f) ? f : v[s],
                    I = (0, r.__assign)({
                        role: "button",
                        "aria-label": "close",
                        tabindex: 0
                    }, (null === w || void 0 === w ? void 0 : w.props) || {}),
                    R = (0, a.useMemo)((function() {
                        var e;
                        return b ? w ? o().cloneElement(w, (0, r.__assign)((0, r.__assign)({}, I), {
                            color: "IconNormal",
                            className: d()("".concat(_, "-close"), null === (e = null === w || void 0 === w ? void 0 : w.props) || void 0 === e ? void 0 : e.className),
                            onClick: y
                        })) : o().createElement(u.A, (0, r.__assign)({}, I, {
                            name: "Close1C",
                            color: "IconNormal",
                            className: "".concat(_, "-close"),
                            onClick: y
                        })) : null
                    }), [_, y, w, b]);
                return o().createElement(p.Ay, (0, r.__assign)({}, {
                    role: "alert"
                }, E, {
                    className: N
                }), !!M && o().cloneElement(M, {
                    className: d()("".concat(_, "-prefix"), null === (n = null === M || void 0 === M ? void 0 : M.props) || void 0 === n ? void 0 : n.className)
                }), o().createElement(p.Ay, {
                    className: d()("".concat(_, "-content"), {
                        closable: b
                    })
                }, !!h && o().createElement(p.Ay, {
                    className: "".concat(_, "-content-title"),
                    children: h
                }), !!g && o().createElement(p.Ay, {
                    className: S,
                    children: g
                }), R))
            }
        },
        fvKX: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f,
                r: () => u
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("W3Ja"),
                s = n("ZCCp"),
                c = n("qrIQ"),
                l = n("H2//"),
                u = function() {
                    return (0, a.useContext)(s.A)
                };
            const f = function(e) {
                var t = e.prefixCls,
                    n = void 0 === t ? "bn" : t,
                    u = e.iconConfig,
                    f = e.i18n,
                    d = e.children,
                    p = e.isElectron,
                    m = e.isMobile,
                    v = (0, r.__rest)(e, ["prefixCls", "iconConfig", "i18n", "children", "isElectron", "isMobile"]);
                if (c.lq && (!u || !u.path)) throw new Error("iconConfig must be required in ConfigProvider");
                var h = (0, i.Qs)(),
                    g = (0, a.useCallback)((function(e, t) {
                        var n = f ? f[e] : null,
                            a = t || {},
                            o = a.defaultValue,
                            i = (0, r.__rest)(a, ["defaultValue"]);
                        return (0, l.uf)(n || o, i)
                    }), [f]),
                    b = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, v), p ? (0, r.__assign)((0, r.__assign)({}, h), {
                        isMobile: !1,
                        isTablet: !1
                    }) : (0, r.__assign)((0, r.__assign)({}, h), void 0 !== m && {
                        isMobile: m
                    })), {
                        prefixCls: n,
                        iconConfig: u,
                        getI18n: g
                    });
                return o().createElement(s.A.Provider, {
                    value: b,
                    children: d
                })
            }
        },
        Svbh: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m,
                p: () => p
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("qrIQ"),
                s = n("2OVm"),
                c = n("O94r"),
                l = n.n(c),
                u = n("eeEA"),
                f = n("fvKX"),
                d = i.lq ? 100 : 50,
                p = 250;
            const m = function(e) {
                var t = e.visible,
                    n = e.needSEO,
                    c = (0, r.__rest)(e, ["visible", "needSEO"]),
                    m = o().useRef(),
                    v = (0, a.useState)(!1),
                    h = v[0],
                    g = v[1],
                    b = (0, f.r)().prefixCls;
                o().useEffect((function() {
                    return clearTimeout(m.current), m.current = setTimeout((function() {
                            g(!!t), m.current = null
                        }), t ? d : p),
                        function() {
                            return clearTimeout(m.current)
                        }
                }), [t]), o().useEffect((function() {
                    !i.lq && t && setTimeout(s.A.checkViewport, 1.5 * p)
                }), [t]);
                var y = l()("".concat(b, "-trans"), {
                    "data-seo": n && !t && !h,
                    "data-show": t && h,
                    "data-leave": !t && h
                }, e.className);
                return t || h || n ? o().createElement(u.Ay, (0, r.__assign)({}, c, {
                    className: y
                })) : null
            }
        },
        OgCp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("9xbI");
            const s = (0, a.forwardRef)((function(e, t) {
                var n = e.as,
                    a = void 0 === n ? "button" : n,
                    s = (0, r.__rest)(e, ["as"]);
                return o().createElement(i.A, (0, r.__assign)({}, s, {
                    as: a,
                    ref: t
                }))
            }))
        },
        "0PRs": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a);

            function i(e) {
                var t = e.img;
                return new Promise((function(e, n) {
                    (function(e) {
                        var t = e.img;
                        return new Promise((function(e) {
                            return e(t)
                        }))
                    })({
                        img: t
                    }).then((function(t) {
                        if (/^http/i.test(t)) {
                            var r = new Image;
                            r.addEventListener("load", (function() {
                                return e(t)
                            })), r.addEventListener("error", (function() {
                                return n(new Error("img load error"))
                            })), r.src = t
                        } else n("image path is null")
                    }))
                }))
            }
            var s = n("2OVm"),
                c = n("9xbI");
            const l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inViewPort = function() {
                            var e = t.$refs.root,
                                n = t.props,
                                r = n.isBackground;
                            i({
                                img: n.src
                            }).then((function(t) {
                                e.style.backgroundColor = "transparent", r ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(t, "')")) : e.src = t
                            })).catch((function() {
                                return null
                            }))
                        }, t
                    }
                    return (0, r.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            n = (e.check, e.lazyLoad, e.isBackground),
                            a = (0, r.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return o().createElement(c.A, (0, r.__assign)({}, a, {
                            "data-src": t,
                            ref: this.setRefs("root"),
                            as: n ? "div" : "img"
                        }))
                    }, t
                }(s.A),
                u = (0, a.forwardRef)((function(e, t) {
                    var n = e.lazyLoad,
                        a = e.src,
                        i = e.isBackground,
                        s = e.check,
                        u = (0, r.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return n || i ? o().createElement(l, (0, r.__assign)({
                        lazyLoad: n,
                        src: a,
                        isBackground: i,
                        check: s
                    }, u)) : o().createElement(c.A, (0, r.__assign)({}, u, {
                        as: "img",
                        ref: t,
                        src: a,
                        "data-src": a
                    }))
                }))
        },
        d4un: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD");
            const o = (0, a.forwardRef)((function(e, t) {
                var n = e.spellCheck,
                    o = void 0 !== n && n,
                    i = e.autoComplete,
                    s = void 0 === i ? "" : i,
                    c = (0, r.__rest)(e, ["spellCheck", "autoComplete"]),
                    l = {
                        ref: t,
                        spellCheck: o,
                        autoComplete: s
                    };
                return (0, a.createElement)("input", (0, r.__assign)((0, r.__assign)({}, c), l))
            }))
        },
        "2OVm": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n("OKx2"),
                i = n("eh2c"),
                s = n("UkUV"),
                c = function(e) {
                    return "function" === typeof e
                },
                l = function(e) {
                    return e && "object" === typeof e
                },
                u = function(e, t) {
                    var n = l(e) && !(0, a.isValidElement)(e),
                        r = l(t) && !(0, a.isValidElement)(t);
                    if (n && n === r) {
                        var o = Object.keys(e),
                            i = Object.keys(t);
                        if (o.length === i.length) return Number(o.every((function(n) {
                            return u(e[n], t[n])
                        })))
                    } else {
                        if (c(e) && c(t)) return !0;
                        if ((0, a.isValidElement)(e) && (0, a.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                f = {
                    offset: 0,
                    x: !0
                },
                d = function(e) {
                    function t(n) {
                        var a = e.call(this, n) || this;
                        return a.unmount = !1, a.index = t.count, a.checkUpdate = function() {
                            return a.$refs.root && !a.unmount
                        }, a.checkViewport = function(e) {
                            var n = a.$refs.root,
                                i = a.props,
                                s = i.check,
                                c = i.lazyLoad;
                            if (a.checkUpdate()) {
                                var l = (0, r.__assign)((0, r.__assign)({}, f), s),
                                    u = l.offset,
                                    d = l.x;
                                !c || (0, o.cH)(n, u, d) ? (delete t.instances[a.index], a.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", n)) : t.instances[a.index] = a
                            }
                        }, a.inViewPort = function(e) {
                            return e
                        }, a.equalUpdate = function(e, t) {
                            u(e, t) || a.checkViewport()
                        }, t.count += 1, a
                    }
                    return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = (t.check, (0, r.__rest)(t, ["check"])),
                            a = (e.check, (0, r.__rest)(e, ["check"]));
                        this.equalUpdate(a, n)
                    }, t.prototype.componentDidMount = function() {
                        var e = this;
                        window.window === window ? window.requestAnimationFrame((function() {
                            return e.checkViewport("componentDidMount")
                        })) : this.checkViewport("componentDidMount")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unmount = !0, delete t.instances[this.index]
                    }, t.count = 0, t.instances = {}, t.checkViewport = function() {
                        var e = t.instances;
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            n && n.checkViewport()
                        }))
                    }, t
                }(s.A),
                p = (0, i.nF)(d.checkViewport, 200),
                m = !(0, o.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", p, m), document.addEventListener("scroll", p, m), document.addEventListener("transitionend", p, m));
            const v = d
        },
        UkUV: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD");
            const o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.$refs = {}, t.setRefs = function(e) {
                        return function(n) {
                            t.$refs[e] = n
                        }
                    }, t
                }
                return (0, r.__extends)(t, e), t
            }(a.PureComponent)
        },
        dEMF: (e, t) => {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function(e) {
                var t, n, o = c(e),
                    i = o[0],
                    s = o[1],
                    l = new a(function(e, t, n) {
                        return 3 * (t + n) / 4 - n
                    }(0, i, s)),
                    u = 0,
                    f = s > 0 ? i - 4 : i;
                for (n = 0; n < f; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
                2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[u++] = 255 & t);
                1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t);
                return l
            }, t.fromByteArray = function(e) {
                for (var t, r = e.length, a = r % 3, o = [], i = 16383, s = 0, c = r - a; s < c; s += i) o.push(l(e, s, s + i > c ? c : s + i));
                1 === a ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === a && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                return o.join("")
            };
            for (var n = [], r = [], a = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = o.length; i < s; ++i) n[i] = o[i], r[o.charCodeAt(i)] = i;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function l(e, t, r) {
                for (var a, o, i = [], s = t; s < r; s += 3) a = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(n[(o = a) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                return i.join("")
            }
            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
        },
        GmLw: (e, t, n) => {
            "use strict";
            const r = n("dEMF"),
                a = n("1TxV"),
                o = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.hp = c, t.IS = 50;
            const i = 2147483647;

            function s(e) {
                if (e > i) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                const t = new Uint8Array(e);
                return Object.setPrototypeOf(t, c.prototype), t
            }

            function c(e, t, n) {
                if ("number" === typeof e) {
                    if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return f(e)
                }
                return l(e, t, n)
            }

            function l(e, t, n) {
                if ("string" === typeof e) return function(e, t) {
                    "string" === typeof t && "" !== t || (t = "utf8");
                    if (!c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    const n = 0 | v(e, t);
                    let r = s(n);
                    const a = r.write(e, t);
                    a !== n && (r = r.slice(0, a));
                    return r
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (Y(e, Uint8Array)) {
                        const t = new Uint8Array(e);
                        return p(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return d(e)
                }(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (Y(e, ArrayBuffer) || e && Y(e.buffer, ArrayBuffer)) return p(e, t, n);
                if ("undefined" !== typeof SharedArrayBuffer && (Y(e, SharedArrayBuffer) || e && Y(e.buffer, SharedArrayBuffer))) return p(e, t, n);
                if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return c.from(r, t, n);
                const a = function(e) {
                    if (c.isBuffer(e)) {
                        const t = 0 | m(e.length),
                            n = s(t);
                        return 0 === n.length || e.copy(n, 0, 0, t), n
                    }
                    if (void 0 !== e.length) return "number" !== typeof e.length || Z(e.length) ? s(0) : d(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
                }(e);
                if (a) return a;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function u(e) {
                if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function f(e) {
                return u(e), s(e < 0 ? 0 : 0 | m(e))
            }

            function d(e) {
                const t = e.length < 0 ? 0 : 0 | m(e.length),
                    n = s(t);
                for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n
            }

            function p(e, t, n) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let r;
                return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, c.prototype), r
            }

            function m(e) {
                if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | e
            }

            function v(e, t) {
                if (c.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || Y(e, ArrayBuffer)) return e.byteLength;
                if ("string" !== typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                const n = e.length,
                    r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                let a = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return $(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return K(e).length;
                    default:
                        if (a) return r ? -1 : $(e).length;
                        t = ("" + t).toLowerCase(), a = !0
                }
            }

            function h(e, t, n) {
                let r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return I(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return _(this, t, n);
                    case "ascii":
                        return S(this, t, n);
                    case "latin1":
                    case "binary":
                        return M(this, t, n);
                    case "base64":
                        return C(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function g(e, t, n) {
                const r = e[t];
                e[t] = e[n], e[n] = r
            }

            function b(e, t, n, r, a) {
                if (0 === e.length) return -1;
                if ("string" === typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Z(n = +n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (a) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!a) return -1;
                    n = 0
                }
                if ("string" === typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, a);
                if ("number" === typeof t) return t &= 255, "function" === typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, a);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(e, t, n, r, a) {
                let o, i = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    i = 2, s /= 2, c /= 2, n /= 2
                }

                function l(e, t) {
                    return 1 === i ? e[t] : e.readUInt16BE(t * i)
                }
                if (a) {
                    let r = -1;
                    for (o = n; o < s; o++)
                        if (l(e, o) === l(t, -1 === r ? 0 : o - r)) {
                            if (-1 === r && (r = o), o - r + 1 === c) return r * i
                        } else -1 !== r && (o -= o - r), r = -1
                } else
                    for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
                        let n = !0;
                        for (let r = 0; r < c; r++)
                            if (l(e, o + r) !== l(t, r)) {
                                n = !1;
                                break
                            }
                        if (n) return o
                    }
                return -1
            }

            function w(e, t, n, r) {
                n = Number(n) || 0;
                const a = e.length - n;
                r ? (r = Number(r)) > a && (r = a) : r = a;
                const o = t.length;
                let i;
                for (r > o / 2 && (r = o / 2), i = 0; i < r; ++i) {
                    const r = parseInt(t.substr(2 * i, 2), 16);
                    if (Z(r)) return i;
                    e[n + i] = r
                }
                return i
            }

            function x(e, t, n, r) {
                return G($(t, e.length - n), e, n, r)
            }

            function E(e, t, n, r) {
                return G(function(e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function A(e, t, n, r) {
                return G(K(t), e, n, r)
            }

            function k(e, t, n, r) {
                return G(function(e, t) {
                    let n, r, a;
                    const o = [];
                    for (let i = 0; i < e.length && !((t -= 2) < 0); ++i) n = e.charCodeAt(i), r = n >> 8, a = n % 256, o.push(a), o.push(r);
                    return o
                }(t, e.length - n), e, n, r)
            }

            function C(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function _(e, t, n) {
                n = Math.min(e.length, n);
                const r = [];
                let a = t;
                for (; a < n;) {
                    const t = e[a];
                    let o = null,
                        i = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (a + i <= n) {
                        let n, r, s, c;
                        switch (i) {
                            case 1:
                                t < 128 && (o = t);
                                break;
                            case 2:
                                n = e[a + 1], 128 === (192 & n) && (c = (31 & t) << 6 | 63 & n, c > 127 && (o = c));
                                break;
                            case 3:
                                n = e[a + 1], r = e[a + 2], 128 === (192 & n) && 128 === (192 & r) && (c = (15 & t) << 12 | (63 & n) << 6 | 63 & r, c > 2047 && (c < 55296 || c > 57343) && (o = c));
                                break;
                            case 4:
                                n = e[a + 1], r = e[a + 2], s = e[a + 3], 128 === (192 & n) && 128 === (192 & r) && 128 === (192 & s) && (c = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & s, c > 65535 && c < 1114112 && (o = c))
                        }
                    }
                    null === o ? (o = 65533, i = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), a += i
                }
                return function(e) {
                    const t = e.length;
                    if (t <= N) return String.fromCharCode.apply(String, e);
                    let n = "",
                        r = 0;
                    for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += N));
                    return n
                }(r)
            }
            c.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), c.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(c.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.byteOffset
                }
            }), c.poolSize = 8192, c.from = function(e, t, n) {
                return l(e, t, n)
            }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, n) {
                return function(e, t, n) {
                    return u(e), e <= 0 ? s(e) : void 0 !== t ? "string" === typeof n ? s(e).fill(t, n) : s(e).fill(t) : s(e)
                }(e, t, n)
            }, c.allocUnsafe = function(e) {
                return f(e)
            }, c.allocUnsafeSlow = function(e) {
                return f(e)
            }, c.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== c.prototype
            }, c.compare = function(e, t) {
                if (Y(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), Y(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let n = e.length,
                    r = t.length;
                for (let a = 0, o = Math.min(n, r); a < o; ++a)
                    if (e[a] !== t[a]) {
                        n = e[a], r = t[a];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                let n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                const r = c.allocUnsafe(t);
                let a = 0;
                for (n = 0; n < e.length; ++n) {
                    let t = e[n];
                    if (Y(t, Uint8Array)) a + t.length > r.length ? (c.isBuffer(t) || (t = c.from(t)), t.copy(r, a)) : Uint8Array.prototype.set.call(r, t, a);
                    else {
                        if (!c.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        t.copy(r, a)
                    }
                    a += t.length
                }
                return r
            }, c.byteLength = v, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                const e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) g(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                const e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                const e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                const e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : h.apply(this, arguments)
            }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                let e = "";
                const n = t.IS;
                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
            }, o && (c.prototype[o] = c.prototype.inspect), c.prototype.compare = function(e, t, n, r, a) {
                if (Y(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
                if (r >= a && t >= n) return 0;
                if (r >= a) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                let o = (a >>>= 0) - (r >>>= 0),
                    i = (n >>>= 0) - (t >>>= 0);
                const s = Math.min(o, i),
                    l = this.slice(r, a),
                    u = e.slice(t, n);
                for (let c = 0; c < s; ++c)
                    if (l[c] !== u[c]) {
                        o = l[c], i = u[c];
                        break
                    }
                return o < i ? -1 : i < o ? 1 : 0
            }, c.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function(e, t, n) {
                return b(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function(e, t, n) {
                return b(this, e, t, n, !1)
            }, c.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" === typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                const a = this.length - t;
                if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                let o = !1;
                for (;;) switch (r) {
                    case "hex":
                        return w(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return x(this, e, t, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return E(this, e, t, n);
                    case "base64":
                        return A(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, e, t, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const N = 4096;

            function S(e, t, n) {
                let r = "";
                n = Math.min(e.length, n);
                for (let a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
                return r
            }

            function M(e, t, n) {
                let r = "";
                n = Math.min(e.length, n);
                for (let a = t; a < n; ++a) r += String.fromCharCode(e[a]);
                return r
            }

            function I(e, t, n) {
                const r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                let a = "";
                for (let o = t; o < n; ++o) a += Q[e[o]];
                return a
            }

            function R(e, t, n) {
                const r = e.slice(t, n);
                let a = "";
                for (let o = 0; o < r.length - 1; o += 2) a += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return a
            }

            function O(e, t, n) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function T(e, t, n, r, a, o) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function L(e, t, n, r, a) {
                j(t, r, a, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
                let i = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i, n
            }

            function B(e, t, n, r, a) {
                j(t, r, a, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
                let i = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n + 3] = i, i >>= 8, e[n + 2] = i, i >>= 8, e[n + 1] = i, i >>= 8, e[n] = i, n + 8
            }

            function D(e, t, n, r, a, o) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function P(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || D(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4
            }

            function F(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || D(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8
            }
            c.prototype.slice = function(e, t) {
                const n = this.length;
                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                const r = this.subarray(e, t);
                return Object.setPrototypeOf(r, c.prototype), r
            }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                let r = this[e],
                    a = 1,
                    o = 0;
                for (; ++o < t && (a *= 256);) r += this[e + o] * a;
                return r
            }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                let r = this[e + --t],
                    a = 1;
                for (; t > 0 && (a *= 256);) r += this[e + --t] * a;
                return r
            }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || O(e, 1, this.length), this[e]
            }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readBigUInt64LE = X((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || q(e, this.length - 8);
                const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                    a = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                return BigInt(r) + (BigInt(a) << BigInt(32))
            })), c.prototype.readBigUInt64BE = X((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || q(e, this.length - 8);
                const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    a = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                return (BigInt(r) << BigInt(32)) + BigInt(a)
            })), c.prototype.readIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                let r = this[e],
                    a = 1,
                    o = 0;
                for (; ++o < t && (a *= 256);) r += this[e + o] * a;
                return a *= 128, r >= a && (r -= Math.pow(2, 8 * t)), r
            }, c.prototype.readIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                let r = t,
                    a = 1,
                    o = this[e + --r];
                for (; r > 0 && (a *= 256);) o += this[e + --r] * a;
                return a *= 128, o >= a && (o -= Math.pow(2, 8 * t)), o
            }, c.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || O(e, 2, this.length);
                const n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || O(e, 2, this.length);
                const n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readBigInt64LE = X((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || q(e, this.length - 8);
                const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
            })), c.prototype.readBigInt64BE = X((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || q(e, this.length - 8);
                const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
            })), c.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), a.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || O(e, 4, this.length), a.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || O(e, 8, this.length), a.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || O(e, 8, this.length), a.read(this, e, !1, 52, 8)
            }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    T(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let a = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = e / a & 255;
                return t + n
            }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    T(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let a = n - 1,
                    o = 1;
                for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) this[t + a] = e / o & 255;
                return t + n
            }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigUInt64LE = X((function(e, t = 0) {
                return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeBigUInt64BE = X((function(e, t = 0) {
                return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    T(this, e, t, n, r - 1, -r)
                }
                let a = 0,
                    o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === i && 0 !== this[t + a - 1] && (i = 1), this[t + a] = (e / o >> 0) - i & 255;
                return t + n
            }, c.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    T(this, e, t, n, r - 1, -r)
                }
                let a = n - 1,
                    o = 1,
                    i = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === i && 0 !== this[t + a + 1] && (i = 1), this[t + a] = (e / o >> 0) - i & 255;
                return t + n
            }, c.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, c.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || T(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigInt64LE = X((function(e, t = 0) {
                return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeBigInt64BE = X((function(e, t = 0) {
                return B(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeFloatLE = function(e, t, n) {
                return P(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function(e, t, n) {
                return P(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function(e, t, n) {
                return F(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function(e, t, n) {
                return F(this, e, t, !1, n)
            }, c.prototype.copy = function(e, t, n, r) {
                if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                const a = r - n;
                return this === e && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), a
            }, c.prototype.fill = function(e, t, n, r) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (r = t, t = 0, n = this.length) : "string" === typeof n && (r = n, n = this.length), void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                    if ("string" === typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                        const t = e.charCodeAt(0);
                        ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
                    }
                } else "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                let a;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e)
                    for (a = t; a < n; ++a) this[a] = e;
                else {
                    const o = c.isBuffer(e) ? e : c.from(e, r),
                        i = o.length;
                    if (0 === i) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (a = 0; a < n - t; ++a) this[a + t] = o[a % i]
                }
                return this
            };
            const z = {};

            function V(e, t, n) {
                z[e] = class extends n {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }

            function U(e) {
                let t = "",
                    n = e.length;
                const r = "-" === e[0] ? 1 : 0;
                for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                return `${e.slice(0,n)}${t}`
            }

            function j(e, t, n, r, a, o) {
                if (e > n || e < t) {
                    const r = "bigint" === typeof t ? "n" : "";
                    let a;
                    throw a = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new z.ERR_OUT_OF_RANGE("value", a, e)
                }! function(e, t, n) {
                    W(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || q(t, e.length - (n + 1))
                }(r, a, o)
            }

            function W(e, t) {
                if ("number" !== typeof e) throw new z.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function q(e, t, n) {
                if (Math.floor(e) !== e) throw W(e, n), new z.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                if (t < 0) throw new z.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new z.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
            }
            V("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), V("ERR_INVALID_ARG_TYPE", (function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }), TypeError), V("ERR_OUT_OF_RANGE", (function(e, t, n) {
                let r = `The value of "${e}" is out of range.`,
                    a = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? a = U(String(n)) : "bigint" === typeof n && (a = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (a = U(a)), a += "n"), r += ` It must be ${t}. Received ${a}`, r
            }), RangeError);
            const H = /[^+/0-9A-Za-z-_]/g;

            function $(e, t) {
                let n;
                t = t || 1 / 0;
                const r = e.length;
                let a = null;
                const o = [];
                for (let i = 0; i < r; ++i) {
                    if (n = e.charCodeAt(i), n > 55295 && n < 57344) {
                        if (!a) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (i + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            a = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), a = n;
                            continue
                        }
                        n = 65536 + (a - 55296 << 10 | n - 56320)
                    } else a && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (a = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function K(e) {
                return r.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }(e))
            }

            function G(e, t, n, r) {
                let a;
                for (a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
                return a
            }

            function Y(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function Z(e) {
                return e !== e
            }
            const Q = function() {
                const e = "0123456789abcdef",
                    t = new Array(256);
                for (let n = 0; n < 16; ++n) {
                    const r = 16 * n;
                    for (let a = 0; a < 16; ++a) t[r + a] = e[n] + e[a]
                }
                return t
            }();

            function X(e) {
                return "undefined" === typeof BigInt ? J : e
            }

            function J() {
                throw new Error("BigInt not supported")
            }
        },
        "1TxV": (e, t) => {
            t.read = function(e, t, n, r, a) {
                var o, i, s = 8 * a - r - 1,
                    c = (1 << s) - 1,
                    l = c >> 1,
                    u = -7,
                    f = n ? a - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, o = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; o = 256 * o + e[t + f], f += d, u -= 8);
                for (i = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; i = 256 * i + e[t + f], f += d, u -= 8);
                if (0 === o) o = 1 - l;
                else {
                    if (o === c) return i ? NaN : 1 / 0 * (p ? -1 : 1);
                    i += Math.pow(2, r), o -= l
                }
                return (p ? -1 : 1) * i * Math.pow(2, o - r)
            }, t.write = function(e, t, n, r, a, o) {
                var i, s, c, l = 8 * o - a - 1,
                    u = (1 << l) - 1,
                    f = u >> 1,
                    d = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : o - 1,
                    m = r ? 1 : -1,
                    v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, i = u) : (i = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (t += i + f >= 1 ? d / c : d * Math.pow(2, 1 - f)) * c >= 2 && (i++, c /= 2), i + f >= u ? (s = 0, i = u) : i + f >= 1 ? (s = (t * c - 1) * Math.pow(2, a), i += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + p] = 255 & s, p += m, s /= 256, a -= 8);
                for (i = i << a | s, l += a; l > 0; e[n + p] = 255 & i, p += m, i /= 256, l -= 8);
                e[n + p - m] |= 128 * v
            }
        },
        F0GY: e => {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function o(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var s, c, l, u;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != i.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (!o(e[c], i[c])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!o(c.value[1], i.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        return !0
                    }
                    if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((s = e.length) != i.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (e[c] !== i[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((s = (l = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (c = s; 0 !== c--;)
                        if (!Object.prototype.hasOwnProperty.call(i, l[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = s; 0 !== c--;)
                        if (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c] || !e.$$typeof) && !o(e[l[c]], i[l[c]])) return !1;
                    return !0
                }
                return e !== e && i !== i
            }
            e.exports = function(e, t) {
                try {
                    return o(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        uxFI: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => Ae
            });
            var r = n("DTvD");

            function a(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                return e instanceof a(e).Element || e instanceof Element
            }

            function i(e) {
                return e instanceof a(e).HTMLElement || e instanceof HTMLElement
            }

            function s(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof a(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var c = Math.round;

            function l(e, t) {
                void 0 === t && (t = !1);
                var n = e.getBoundingClientRect(),
                    r = 1,
                    a = 1;
                return i(e) && t && (r = n.width / e.offsetWidth || 1, a = n.height / e.offsetHeight || 1), {
                    width: c(n.width / r),
                    height: c(n.height / a),
                    top: c(n.top / a),
                    right: c(n.right / r),
                    bottom: c(n.bottom / a),
                    left: c(n.left / r),
                    x: c(n.left / r),
                    y: c(n.top / a)
                }
            }

            function u(e) {
                var t = a(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function f(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function d(e) {
                return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function p(e) {
                return l(d(e)).left + u(e).scrollLeft
            }

            function m(e) {
                return a(e).getComputedStyle(e)
            }

            function v(e) {
                var t = m(e),
                    n = t.overflow,
                    r = t.overflowX,
                    a = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + a + r)
            }

            function h(e, t, n) {
                void 0 === n && (n = !1);
                var r = i(t),
                    o = i(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.width / e.offsetWidth || 1,
                            r = t.height / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    s = d(t),
                    c = l(e, o),
                    m = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    h = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== f(t) || v(s)) && (m = function(e) {
                    return e !== a(e) && i(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : u(e);
                    var t
                }(t)), i(t) ? ((h = l(t, !0)).x += t.clientLeft, h.y += t.clientTop) : s && (h.x = p(s))), {
                    x: c.left + m.scrollLeft - h.x,
                    y: c.top + m.scrollTop - h.y,
                    width: c.width,
                    height: c.height
                }
            }

            function g(e) {
                var t = l(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function b(e) {
                return "html" === f(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || d(e)
            }

            function y(e) {
                return ["html", "body", "#document"].indexOf(f(e)) >= 0 ? e.ownerDocument.body : i(e) && v(e) ? e : y(b(e))
            }

            function w(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = y(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = a(r),
                    s = o ? [i].concat(i.visualViewport || [], v(r) ? r : []) : r,
                    c = t.concat(s);
                return o ? c : c.concat(w(b(s)))
            }

            function x(e) {
                return ["table", "td", "th"].indexOf(f(e)) >= 0
            }

            function E(e) {
                return i(e) && "fixed" !== m(e).position ? e.offsetParent : null
            }

            function A(e) {
                for (var t = a(e), n = E(e); n && x(n) && "static" === m(n).position;) n = E(n);
                return n && ("html" === f(n) || "body" === f(n) && "static" === m(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && i(e) && "fixed" === m(e).position) return null;
                    for (var n = b(e); i(n) && ["html", "body"].indexOf(f(n)) < 0;) {
                        var r = m(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var k = "top",
                C = "bottom",
                _ = "right",
                N = "left",
                S = "auto",
                M = [k, C, _, N],
                I = "start",
                R = "end",
                O = "viewport",
                T = "popper",
                L = M.reduce((function(e, t) {
                    return e.concat([t + "-" + I, t + "-" + R])
                }), []),
                B = [].concat(M, [S]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + I, t + "-" + R])
                }), []),
                D = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function P(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function a(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && a(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || a(e)
                })), r
            }

            function F(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var z = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function V() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function U(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    a = t.defaultOptions,
                    i = void 0 === a ? z : a;
                return function(e, t, n) {
                    void 0 === n && (n = i);
                    var a = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, z, i),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        s = [],
                        c = !1,
                        l = {
                            state: a,
                            setOptions: function(n) {
                                u(), a.options = Object.assign({}, i, a.options, n), a.scrollParents = {
                                    reference: o(e) ? w(e) : e.contextElement ? w(e.contextElement) : [],
                                    popper: w(t)
                                };
                                var c = function(e) {
                                    var t = P(e);
                                    return D.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, a.options.modifiers)));
                                return a.orderedModifiers = c.filter((function(e) {
                                    return e.enabled
                                })), a.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var i = o({
                                                state: a,
                                                name: t,
                                                instance: l,
                                                options: r
                                            }),
                                            c = function() {};
                                        s.push(i || c)
                                    }
                                })), l.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var e = a.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (V(t, n)) {
                                        a.rects = {
                                            reference: h(t, A(n), "fixed" === a.options.strategy),
                                            popper: g(n)
                                        }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < a.orderedModifiers.length; r++)
                                            if (!0 !== a.reset) {
                                                var o = a.orderedModifiers[r],
                                                    i = o.fn,
                                                    s = o.options,
                                                    u = void 0 === s ? {} : s,
                                                    f = o.name;
                                                "function" === typeof i && (a = i({
                                                    state: a,
                                                    options: u,
                                                    name: f,
                                                    instance: l
                                                }) || a)
                                            } else a.reset = !1, r = -1
                                    }
                                }
                            },
                            update: F((function() {
                                return new Promise((function(e) {
                                    l.forceUpdate(), e(a)
                                }))
                            })),
                            destroy: function() {
                                u(), c = !0
                            }
                        };
                    if (!V(e, t)) return l;

                    function u() {
                        s.forEach((function(e) {
                            return e()
                        })), s = []
                    }
                    return l.setOptions(n).then((function(e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), l
                }
            }
            var j = {
                passive: !0
            };
            const W = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        i = void 0 === o || o,
                        s = r.resize,
                        c = void 0 === s || s,
                        l = a(t.elements.popper),
                        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return i && u.forEach((function(e) {
                            e.addEventListener("scroll", n.update, j)
                        })), c && l.addEventListener("resize", n.update, j),
                        function() {
                            i && u.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, j)
                            })), c && l.removeEventListener("resize", n.update, j)
                        }
                },
                data: {}
            };

            function q(e) {
                return e.split("-")[0]
            }

            function H(e) {
                return e.split("-")[1]
            }

            function $(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function K(e) {
                var t, n = e.reference,
                    r = e.element,
                    a = e.placement,
                    o = a ? q(a) : null,
                    i = a ? H(a) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    c = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case k:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case C:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case _:
                        t = {
                            x: n.x + n.width,
                            y: c
                        };
                        break;
                    case N:
                        t = {
                            x: n.x - r.width,
                            y: c
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = o ? $(o) : null;
                if (null != l) {
                    var u = "y" === l ? "height" : "width";
                    switch (i) {
                        case I:
                            t[l] = t[l] - (n[u] / 2 - r[u] / 2);
                            break;
                        case R:
                            t[l] = t[l] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            const G = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state,
                        n = e.name;
                    t.modifiersData[n] = K({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            };
            var Y = Math.max,
                Z = Math.min,
                Q = Math.round,
                X = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function J(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    i = e.offsets,
                    s = e.position,
                    c = e.gpuAcceleration,
                    l = e.adaptive,
                    u = e.roundOffsets,
                    f = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: Q(Q(t * r) / r) || 0,
                            y: Q(Q(n * r) / r) || 0
                        }
                    }(i) : "function" === typeof u ? u(i) : i,
                    p = f.x,
                    v = void 0 === p ? 0 : p,
                    h = f.y,
                    g = void 0 === h ? 0 : h,
                    b = i.hasOwnProperty("x"),
                    y = i.hasOwnProperty("y"),
                    w = N,
                    x = k,
                    E = window;
                if (l) {
                    var S = A(n),
                        M = "clientHeight",
                        I = "clientWidth";
                    S === a(n) && "static" !== m(S = d(n)).position && (M = "scrollHeight", I = "scrollWidth"), o === k && (x = C, g -= S[M] - r.height, g *= c ? 1 : -1), o === N && (w = _, v -= S[I] - r.width, v *= c ? 1 : -1)
                }
                var R, O = Object.assign({
                    position: s
                }, l && X);
                return c ? Object.assign({}, O, ((R = {})[x] = y ? "0" : "", R[w] = b ? "0" : "", R.transform = (E.devicePixelRatio || 1) < 2 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", R)) : Object.assign({}, O, ((t = {})[x] = y ? g + "px" : "", t[w] = b ? v + "px" : "", t.transform = "", t))
            }
            const ee = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        a = n.offset,
                        o = void 0 === a ? [0, 0] : a,
                        i = B.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = q(e),
                                    a = [N, k].indexOf(r) >= 0 ? -1 : 1,
                                    o = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    i = o[0],
                                    s = o[1];
                                return i = i || 0, s = (s || 0) * a, [N, _].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: i
                                } : {
                                    x: i,
                                    y: s
                                }
                            }(n, t.rects, o), e
                        }), {}),
                        s = i[t.placement],
                        c = s.x,
                        l = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = i
                }
            };
            var te = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ne(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return te[e]
                }))
            }
            var re = {
                start: "end",
                end: "start"
            };

            function ae(e) {
                return e.replace(/start|end/g, (function(e) {
                    return re[e]
                }))
            }

            function oe(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && s(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function ie(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function se(e, t) {
                return t === O ? ie(function(e) {
                    var t = a(e),
                        n = d(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        i = n.clientHeight,
                        s = 0,
                        c = 0;
                    return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, c = r.offsetTop)), {
                        width: o,
                        height: i,
                        x: s + p(e),
                        y: c
                    }
                }(e)) : i(t) ? function(e) {
                    var t = l(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : ie(function(e) {
                    var t, n = d(e),
                        r = u(e),
                        a = null == (t = e.ownerDocument) ? void 0 : t.body,
                        o = Y(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
                        i = Y(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
                        s = -r.scrollLeft + p(e),
                        c = -r.scrollTop;
                    return "rtl" === m(a || n).direction && (s += Y(n.clientWidth, a ? a.clientWidth : 0) - o), {
                        width: o,
                        height: i,
                        x: s,
                        y: c
                    }
                }(d(e)))
            }

            function ce(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = w(b(e)),
                            n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && i(e) ? A(e) : e;
                        return o(n) ? t.filter((function(e) {
                            return o(e) && oe(e, n) && "body" !== f(e)
                        })) : []
                    }(e) : [].concat(t),
                    a = [].concat(r, [n]),
                    s = a[0],
                    c = a.reduce((function(t, n) {
                        var r = se(e, n);
                        return t.top = Y(r.top, t.top), t.right = Z(r.right, t.right), t.bottom = Z(r.bottom, t.bottom), t.left = Y(r.left, t.left), t
                    }), se(e, s));
                return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
            }

            function le(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ue(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function fe(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    a = void 0 === r ? e.placement : r,
                    i = n.boundary,
                    s = void 0 === i ? "clippingParents" : i,
                    c = n.rootBoundary,
                    u = void 0 === c ? O : c,
                    f = n.elementContext,
                    p = void 0 === f ? T : f,
                    m = n.altBoundary,
                    v = void 0 !== m && m,
                    h = n.padding,
                    g = void 0 === h ? 0 : h,
                    b = le("number" !== typeof g ? g : ue(g, M)),
                    y = p === T ? "reference" : T,
                    w = e.elements.reference,
                    x = e.rects.popper,
                    E = e.elements[v ? y : p],
                    A = ce(o(E) ? E : E.contextElement || d(e.elements.popper), s, u),
                    N = l(w),
                    S = K({
                        reference: N,
                        element: x,
                        strategy: "absolute",
                        placement: a
                    }),
                    I = ie(Object.assign({}, x, S)),
                    R = p === T ? I : N,
                    L = {
                        top: A.top - R.top + b.top,
                        bottom: R.bottom - A.bottom + b.bottom,
                        left: A.left - R.left + b.left,
                        right: R.right - A.right + b.right
                    },
                    B = e.modifiersData.offset;
                if (p === T && B) {
                    var D = B[a];
                    Object.keys(L).forEach((function(e) {
                        var t = [_, C].indexOf(e) >= 0 ? 1 : -1,
                            n = [k, C].indexOf(e) >= 0 ? "y" : "x";
                        L[e] += D[n] * t
                    }))
                }
                return L
            }

            function de(e, t, n) {
                return Y(e, Z(t, n))
            }
            const pe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        a = n.mainAxis,
                        o = void 0 === a || a,
                        i = n.altAxis,
                        s = void 0 !== i && i,
                        c = n.boundary,
                        l = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        p = void 0 === d || d,
                        m = n.tetherOffset,
                        v = void 0 === m ? 0 : m,
                        h = fe(t, {
                            boundary: c,
                            rootBoundary: l,
                            padding: f,
                            altBoundary: u
                        }),
                        b = q(t.placement),
                        y = H(t.placement),
                        w = !y,
                        x = $(b),
                        E = "x" === x ? "y" : "x",
                        S = t.modifiersData.popperOffsets,
                        M = t.rects.reference,
                        R = t.rects.popper,
                        O = "function" === typeof v ? v(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : v,
                        T = {
                            x: 0,
                            y: 0
                        };
                    if (S) {
                        if (o || s) {
                            var L = "y" === x ? k : N,
                                B = "y" === x ? C : _,
                                D = "y" === x ? "height" : "width",
                                P = S[x],
                                F = S[x] + h[L],
                                z = S[x] - h[B],
                                V = p ? -R[D] / 2 : 0,
                                U = y === I ? M[D] : R[D],
                                j = y === I ? -R[D] : -M[D],
                                W = t.elements.arrow,
                                K = p && W ? g(W) : {
                                    width: 0,
                                    height: 0
                                },
                                G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                Q = G[L],
                                X = G[B],
                                J = de(0, M[D], K[D]),
                                ee = w ? M[D] / 2 - V - J - Q - O : U - J - Q - O,
                                te = w ? -M[D] / 2 + V + J + X + O : j + J + X + O,
                                ne = t.elements.arrow && A(t.elements.arrow),
                                re = ne ? "y" === x ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                                ae = t.modifiersData.offset ? t.modifiersData.offset[t.placement][x] : 0,
                                oe = S[x] + ee - ae - re,
                                ie = S[x] + te - ae;
                            if (o) {
                                var se = de(p ? Z(F, oe) : F, P, p ? Y(z, ie) : z);
                                S[x] = se, T[x] = se - P
                            }
                            if (s) {
                                var ce = "x" === x ? k : N,
                                    le = "x" === x ? C : _,
                                    ue = S[E],
                                    pe = ue + h[ce],
                                    me = ue - h[le],
                                    ve = de(p ? Z(pe, oe) : pe, ue, p ? Y(me, ie) : me);
                                S[E] = ve, T[E] = ve - ue
                            }
                        }
                        t.modifiersData[r] = T
                    }
                },
                requiresIfExists: ["offset"]
            };
            const me = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        a = e.options,
                        o = n.elements.arrow,
                        i = n.modifiersData.popperOffsets,
                        s = q(n.placement),
                        c = $(s),
                        l = [N, _].indexOf(s) >= 0 ? "height" : "width";
                    if (o && i) {
                        var u = function(e, t) {
                                return le("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : ue(e, M))
                            }(a.padding, n),
                            f = g(o),
                            d = "y" === c ? k : N,
                            p = "y" === c ? C : _,
                            m = n.rects.reference[l] + n.rects.reference[c] - i[c] - n.rects.popper[l],
                            v = i[c] - n.rects.reference[c],
                            h = A(o),
                            b = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                            y = m / 2 - v / 2,
                            w = u[d],
                            x = b - f[l] - u[p],
                            E = b / 2 - f[l] / 2 + y,
                            S = de(w, E, x),
                            I = c;
                        n.modifiersData[r] = ((t = {})[I] = S, t.centerOffset = S - E, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && oe(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function ve(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function he(e) {
                return [k, _, C, N].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var ge = U({
                    defaultModifiers: [W, G, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                a = void 0 === r || r,
                                o = n.adaptive,
                                i = void 0 === o || o,
                                s = n.roundOffsets,
                                c = void 0 === s || s,
                                l = {
                                    placement: q(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: a
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, J(Object.assign({}, l, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: c
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, J(Object.assign({}, l, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: c
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    a = t.elements[e];
                                i(a) && f(a) && (Object.assign(a.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            a = t.attributes[e] || {},
                                            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        i(r) && f(r) && (Object.assign(r.style, o), Object.keys(a).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, ee, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var a = n.mainAxis, o = void 0 === a || a, i = n.altAxis, s = void 0 === i || i, c = n.fallbackPlacements, l = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, v = n.allowedAutoPlacements, h = t.options.placement, g = q(h), b = c || (g === h || !m ? [ne(h)] : function(e) {
                                        if (q(e) === S) return [];
                                        var t = ne(e);
                                        return [ae(e), t, ae(t)]
                                    }(h)), y = [h].concat(b).reduce((function(e, n) {
                                        return e.concat(q(n) === S ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                a = n.boundary,
                                                o = n.rootBoundary,
                                                i = n.padding,
                                                s = n.flipVariations,
                                                c = n.allowedAutoPlacements,
                                                l = void 0 === c ? B : c,
                                                u = H(r),
                                                f = u ? s ? L : L.filter((function(e) {
                                                    return H(e) === u
                                                })) : M,
                                                d = f.filter((function(e) {
                                                    return l.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var p = d.reduce((function(t, n) {
                                                return t[n] = fe(e, {
                                                    placement: n,
                                                    boundary: a,
                                                    rootBoundary: o,
                                                    padding: i
                                                })[q(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: f,
                                            padding: l,
                                            flipVariations: m,
                                            allowedAutoPlacements: v
                                        }) : n)
                                    }), []), w = t.rects.reference, x = t.rects.popper, E = new Map, A = !0, R = y[0], O = 0; O < y.length; O++) {
                                    var T = y[O],
                                        D = q(T),
                                        P = H(T) === I,
                                        F = [k, C].indexOf(D) >= 0,
                                        z = F ? "width" : "height",
                                        V = fe(t, {
                                            placement: T,
                                            boundary: u,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: l
                                        }),
                                        U = F ? P ? _ : N : P ? C : k;
                                    w[z] > x[z] && (U = ne(U));
                                    var j = ne(U),
                                        W = [];
                                    if (o && W.push(V[D] <= 0), s && W.push(V[U] <= 0, V[j] <= 0), W.every((function(e) {
                                            return e
                                        }))) {
                                        R = T, A = !1;
                                        break
                                    }
                                    E.set(T, W)
                                }
                                if (A)
                                    for (var $ = function(e) {
                                            var t = y.find((function(t) {
                                                var n = E.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return R = t, "break"
                                        }, K = m ? 3 : 1; K > 0; K--) {
                                        if ("break" === $(K)) break
                                    }
                                t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, pe, me, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                a = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                i = fe(t, {
                                    elementContext: "reference"
                                }),
                                s = fe(t, {
                                    altBoundary: !0
                                }),
                                c = ve(i, r),
                                l = ve(s, a, o),
                                u = he(c),
                                f = he(l);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: c,
                                popperEscapeOffsets: l,
                                isReferenceHidden: u,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                be = n("F0GY"),
                ye = n.n(be),
                we = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                xe = window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                Ee = [],
                Ae = function(e, t, n) {
                    void 0 === n && (n = {});
                    var a = r.useRef(null),
                        o = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || Ee
                        },
                        i = r.useState({
                            styles: {
                                popper: {
                                    position: o.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        s = i[0],
                        c = i[1],
                        l = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    c({
                                        styles: we(n.map((function(e) {
                                            return [e, t.styles[e] || {}]
                                        }))),
                                        attributes: we(n.map((function(e) {
                                            return [e, t.attributes[e]]
                                        })))
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        u = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: o.onFirstUpdate,
                                placement: o.placement,
                                strategy: o.strategy,
                                modifiers: [].concat(o.modifiers, [l, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return ye()(a.current, e) ? a.current || e : (a.current = e, e)
                        }), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, l]),
                        f = r.useRef();
                    return xe((function() {
                        f.current && f.current.setOptions(u)
                    }), [u]), xe((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || ge)(e, t, u);
                            return f.current = r,
                                function() {
                                    r.destroy(), f.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: f.current ? f.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: f.current ? f.current.update : null,
                        forceUpdate: f.current ? f.current.forceUpdate : null
                    }
                }
        },
        bg8v: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => b
            });
            var r = n("aiFg"),
                a = n("nUjt"),
                o = (n("aWzz"), n("DTvD")),
                i = n.n(o),
                s = n("hTvQ"),
                c = n.n(s);
            const l = !1,
                u = i().createContext(null);
            var f = "unmounted",
                d = "exited",
                p = "entering",
                m = "entered",
                v = "exiting",
                h = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var a, o = n && !n.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? o ? (a = d, r.appearStatus = p) : a = m : a = t.unmountOnExit || t.mountOnEnter ? f : d, r.state = {
                            status: a
                        }, r.nextCallback = null, r
                    }(0, a.A)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === f ? {
                            status: d
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== m && (t = p) : n !== p && n !== m || (t = v)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === p ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === d && this.setState({
                            status: f
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            a = this.props.nodeRef ? [r] : [c().findDOMNode(this), r],
                            o = a[0],
                            i = a[1],
                            s = this.getTimeouts(),
                            u = r ? s.appear : s.enter;
                        !e && !n || l ? this.safeSetState({
                            status: m
                        }, (function() {
                            t.props.onEntered(o)
                        })) : (this.props.onEnter(o, i), this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onEntering(o, i), t.onTransitionEnd(u, (function() {
                                t.safeSetState({
                                    status: m
                                }, (function() {
                                    t.props.onEntered(o, i)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : c().findDOMNode(this);
                        t && !l ? (this.props.onExit(r), this.safeSetState({
                            status: v
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: d
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: d
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : c().findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    o = a[0],
                                    i = a[1];
                                this.props.addEndListener(o, i)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === f) return null;
                        var t = this.props,
                            n = t.children,
                            a = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, r.A)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return i().createElement(u.Provider, {
                            value: null
                        }, "function" === typeof n ? n(e, a) : i().cloneElement(i().Children.only(n), a))
                    }, t
                }(i().Component);

            function g() {}
            h.contextType = u, h.propTypes = {}, h.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: g,
                onEntering: g,
                onEntered: g,
                onExit: g,
                onExiting: g,
                onExited: g
            }, h.UNMOUNTED = f, h.EXITED = d, h.ENTERING = p, h.ENTERED = m, h.EXITING = v;
            const b = h
        },
        LEke: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD");

            function a(e, t, n) {
                void 0 === t && (t = 0), void 0 === n && (n = []);
                var a = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = (0, r.useRef)(!1),
                            a = (0, r.useRef)(),
                            o = (0, r.useRef)(e),
                            i = (0, r.useCallback)((function() {
                                return n.current
                            }), []),
                            s = (0, r.useCallback)((function() {
                                n.current = !1, a.current && clearTimeout(a.current), a.current = setTimeout((function() {
                                    n.current = !0, o.current()
                                }), t)
                            }), [t]),
                            c = (0, r.useCallback)((function() {
                                n.current = null, a.current && clearTimeout(a.current)
                            }), []);
                        return (0, r.useEffect)((function() {
                            o.current = e
                        }), [e]), (0, r.useEffect)((function() {
                            return s(), c
                        }), [t]), [i, c, s]
                    }(e, t),
                    o = a[0],
                    i = a[1],
                    s = a[2];
                return (0, r.useEffect)(s, n), [o, i]
            }
        }
    }
]);
//# debugId=ef5c7923-d13d-52e2-a289-98945e448c91