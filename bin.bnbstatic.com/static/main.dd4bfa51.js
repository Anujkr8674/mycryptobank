! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6e03ed94-2c5e-5c21-a477-63a0a2f71208")
    } catch (e) {}
}();
(self.webpackChunkmuses_ui = self.webpackChunkmuses_ui || []).push([
    [755], {
        JEU8: (e, t, r) => {
            "use strict";
            r.d(t, {
                Kq: () => l,
                wA: () => y,
                d4: () => x,
                Pj: () => h
            });
            var n = r("DTvD"),
                a = r.n(n),
                o = (r("aWzz"), a().createContext(null));
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
                                    a = r = {
                                        callback: e,
                                        next: null,
                                        prev: r
                                    };
                                return a.prev ? a.prev.next = a : t = a,
                                    function() {
                                        n && null !== t && (n = !1, a.next ? a.next.prev = a.prev : r = a.prev, a.prev ? a.prev.next = a.next : t = a.next)
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
                var l = r || o;
                return a().createElement(l.Provider, {
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
                return (0, n.useContext)(o)
            }

            function v(e) {
                void 0 === e && (e = o);
                var t = e === o ? d : function() {
                    return (0, n.useContext)(e)
                };
                return function() {
                    return t().store
                }
            }
            var h = v();

            function g(e) {
                void 0 === e && (e = o);
                var t = e === o ? h : v(e);
                return function() {
                    return t().dispatch
                }
            }
            var y = g(),
                m = function(e, t) {
                    return e === t
                };

            function b(e) {
                void 0 === e && (e = o);
                var t = e === o ? d : function() {
                    return (0, n.useContext)(e)
                };
                return function(e, r) {
                    void 0 === r && (r = m);
                    var a = t(),
                        o = function(e, t, r, a) {
                            var o, i = (0, n.useReducer)((function(e) {
                                    return e + 1
                                }), 0)[1],
                                s = (0, n.useMemo)((function() {
                                    return new u(r, a)
                                }), [r, a]),
                                c = (0, n.useRef)(),
                                l = (0, n.useRef)(),
                                f = (0, n.useRef)(),
                                d = (0, n.useRef)(),
                                v = r.getState();
                            try {
                                o = e !== l.current || v !== f.current || c.current ? e(v) : d.current
                            } catch (h) {
                                throw c.current && (h.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), h
                            }
                            return p((function() {
                                l.current = e, f.current = v, d.current = o, c.current = void 0
                            })), p((function() {
                                function e() {
                                    try {
                                        var e = l.current(r.getState());
                                        if (t(e, d.current)) return;
                                        d.current = e
                                    } catch (h) {
                                        c.current = h
                                    }
                                    i()
                                }
                                return s.onStateChange = e, s.trySubscribe(), e(),
                                    function() {
                                        return s.tryUnsubscribe()
                                    }
                            }), [r, s]), o
                        }(e, r, a.store, a.subscription);
                    return (0, n.useDebugValue)(o), o
                }
            }
            var w, x = b(),
                _ = r("hTvQ");
            w = _.unstable_batchedUpdates, i = w
        },
        BMJD: (e, t, r) => {
            "use strict";
            r.d(t, {
                Tc: () => s
            });
            var n = r("sViW"),
                a = r("Pz56"),
                o = r.n(a),
                i = r("VA12"),
                s = (function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
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
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n, a;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/accounts/v1/private/account/user/get-user-login-log", t);
                                case 2:
                                    return r = e.sent, n = r.data, a = r.total, e.abrupt("return", {
                                        data: n,
                                        total: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t, r;
                        return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t, r, n;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t, r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r, n;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t, r, n = arguments;
                    return o().wrap((function(e) {
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
                var e = (0, n.A)(o().mark((function e() {
                    var t, r;
                    return o().wrap((function(e) {
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
                CY: () => m
            });
            var n = r("sViW"),
                a = r("Pz56"),
                o = r.n(a),
                i = r("VA12"),
                s = r("vpUY"),
                c = r("zJWh"),
                u = r("BK7R"),
                l = r("dX47"),
                p = r("Cjys");
            const f = {
                isLogged: function() {
                    var e = (0, n.A)(o().mark((function e(t, r) {
                        return o().wrap((function(e) {
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
            var v = (0, s.S)().isHybrid,
                h = {
                    accountsSubDomain: "accounts"
                };
            var g = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t, r, n, a, s;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!v && c.U.read("cr00")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return t = !1, r = window.location.hostname, n = r.match(/[^.]*\.[^.]*$/), a = r, n && (a = "".concat(h.accountsSubDomain, ".").concat(n[0])), e.next = 9, (0, i.post)("//".concat(a, "/bapi/accounts/v1/public/authcenter/auth"), {}, {
                                        credentials: "include",
                                        enableErrorMsgIntercept: !1
                                    });
                                case 9:
                                    if (!e.sent.success) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 13, (0, i.post)("//".concat(a, "/bapi/accounts/v1/private/authcenter/code"), {}, {
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
                y = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        return o().wrap((function(e) {
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
                m = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !1, e.prev = 1, e.next = 4, y();
                                case 4:
                                    if (!e.sent.logged) {
                                        e.next = 9;
                                        break
                                    }
                                    t = !0, e.next = 12;
                                    break;
                                case 9:
                                    return e.next = 11, g();
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
                a = r("BK7R"),
                o = r("Pz56"),
                i = r.n(o),
                s = r("VA12"),
                c = (0, s.fetchOrigin)().fetch,
                u = function() {
                    var e = (0, n.A)(i().mark((function e(t) {
                        var r, n, o = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = o.length > 1 && void 0 !== o[1] ? o[1] : {}, e.next = 3, c(t, (0, a.A)({
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
                        var r, n, a, o, s, c, p, f;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.i18nHost, n = t.namespace, a = t.language, o = void 0 === a ? "en" : a, s = t.fallback, c = void 0 === s ? "en" : s, r && n) {
                                        e.next = 3;
                                        break
                                    }
                                    throw TypeError("i18nHost and namespace must be defined");
                                case 3:
                                    return e.prev = 3, p = "".concat(r, "/api/i18n/").concat(o, "/").concat(n), e.next = 7, u(p);
                                case 7:
                                    if ((f = e.sent) && Object.keys(f).length) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 10:
                                    return e.abrupt("return", f);
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(3), console.error("query i18n fail: ".concat(n, " | ").concat(o), e.t0), e.abrupt("return", "string" === typeof c && c !== o ? l({
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
                        var r, n, a, o, s, c, l, f, d, v, h, g, y = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = y.length > 1 && void 0 !== y[1] ? y[1] : {}, n = t.basePath, a = t.namespace, o = t.locale, s = void 0 === o ? "en" : o, c = t.fallback, l = void 0 === c ? "en" : c, f = t.enable2NsKey, d = void 0 !== f && f, n && a) {
                                        e.next = 4;
                                        break
                                    }
                                    throw TypeError("basePath and namespace must be defined");
                                case 4:
                                    return e.prev = 4, v = "".concat(n, "/").concat(s, "/").concat(a), e.next = 8, u(v, r);
                                case 8:
                                    if ((h = e.sent) && Object.keys(h).length) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 11:
                                    if (!d) {
                                        e.next = 15;
                                        break
                                    }
                                    return g = {}, Object.keys(h).forEach((function(e) {
                                        g[e] = "".concat(a, ":").concat(e)
                                    })), e.abrupt("return", g);
                                case 15:
                                    return e.abrupt("return", h);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(4), console.error("query i18n fail: ".concat(a, " | ").concat(s), e.t0), e.abrupt("return", "string" === typeof l && l !== s ? p({
                                        basePath: n,
                                        namespace: a,
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
        iyUK: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wv: () => f,
                x8: () => d
            });
            var n = r("sViW"),
                a = r("Pz56"),
                o = r.n(a);

            function i(e) {
                var t = document.cookie.match(RegExp("(?:^|;\\s*)".concat(e, "=([^;]*)")));
                return t ? t[1] : null
            }
            var s = function() {
                    var e = (0, n.A)(o().mark((function e(t, r) {
                        var n, a;
                        return o().wrap((function(e) {
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
                                    return a = "1" === i("r30t"), e.abrupt("return", "100002001" === n.code || "100001005" === n.code && a);
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
                    var r, n, a = e.headers;
                    return !!(null === a || void 0 === a || null === (r = a.get) || void 0 === r ? void 0 : r.call(a, "risk_challenge_biz_no")) && "true" === (null === a || void 0 === a || null === (n = a.get) || void 0 === n ? void 0 : n.call(a, "risk_challenge_enable_flow"))
                },
                u = !1,
                l = null;

            function p() {
                l || (l = setTimeout((function() {
                    u = !0
                }), 5e3))
            }
            var f = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n = arguments;
                        return o().wrap((function(e) {
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
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n = arguments;
                        return o().wrap((function(e) {
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
        YvF5: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("eZh5"),
                a = function(e) {
                    var t = e.lng,
                        r = e.ns,
                        a = e.fallback,
                        o = e.basePath,
                        i = e.customPath,
                        s = e.enable2NsKey,
                        c = o || "https://bin.bnbstatic.com/api/i18n/-/web/cms";
                    return (0, n.TU)({
                        basePath: i ? "".concat(c, "/").concat(i) : c,
                        locale: t,
                        namespace: r,
                        fallback: a && void 0,
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
                a = r("T3Fm"),
                o = function(e) {
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
                    a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                (0, n.write)(e, t, r, a)
            }
            var c = s,
                u = s,
                l = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = arguments.length > 4 ? arguments[4] : void 0;
                    (0, n.write)(e, t, r, a, o)
                },
                p = {
                    parse: n.parse,
                    read: n.read,
                    readAsList: function(e, t) {
                        var r = [];
                        if (o(e))
                            for (var n = "".concat(e, "=").trim(), s = ((a.o ? document : t || {}).cookie || "").split(";"), c = 0; c < s.length; c++) {
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
                                a = t.matches;
                            if (o(n)) {
                                var i = r[n];
                                e[n] = a ? a(i) : i
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
        T3Fm: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            var n = !!window.document
        },
        NsjG: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                IG: () => i
            }), n = function() {
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
            var a = function(e, t, r) {
                    try {
                        n.setItem(e, r ? String(t) : JSON.stringify(t))
                    } catch (a) {}
                },
                o = function(e, t, r) {
                    try {
                        var o = n.getItem(e);
                        if ("string" !== typeof o) throw a(e, t, r), new Error("init ".concat(e, " - values"));
                        return r ? o : JSON.parse(o || "null")
                    } catch (i) {
                        return t
                    }
                },
                i = {
                    setItem: a,
                    getItem: o,
                    setExpireItem: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return r.ttl ? a(e, {
                            value: t,
                            expire: (new Date).getTime() + r.ttl
                        }, !1) : a(e, t)
                    },
                    getExpireItem: function(e, t) {
                        var r = o(e, t);
                        return r && r.expire ? r.expire && r.expire > (new Date).getTime() ? r.value : null : r
                    },
                    removeItem: function(e) {
                        try {
                            n.removeItem(e)
                        } catch (t) {}
                    }
                }
        },
        a59x: (e, t, r) => {
            "use strict";
            r.d(t, {
                E2: () => a,
                Eg: () => o,
                bG: () => i
            });
            r("kPx0"), r("tKUM");
            var n = r("T3Fm");

            function a(e, t) {
                return Object.keys(e).map((function(t) {
                    return e[t] ? "".concat(t, "=").concat(encodeURIComponent(e[t])) : ""
                })).filter((function(e) {
                    return !!e
                })).join(t || "&")
            }

            function o(e, t) {
                return [e, a(t)].filter(Boolean).join(/\?/.test(e) ? "&" : "?")
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.o ? window.location : t,
                    a = r.hostname,
                    o = void 0 === a ? "" : a,
                    i = o.split(".");
                return i.length > 2 ? i.slice(-e).join(".") : o
            }
        },
        Cjys: (e, t, r) => {
            "use strict";
            r.d(t, {
                vt: () => P,
                Q: () => C
            });
            var n = r("vpUY");
            const a = e => {
                if (e) return JSON.parse(e)
            };
            const o = (e, t) => void 0 === t ? e() : e(t);
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
                    r && (delete this._callbacks[e], o(r, t))
                }
                _receiveEvent(e, t) {
                    const r = this._handlers[e];
                    r && o(r, t)
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
                    let a = this._default;
                    this._adapters.some((({
                        test: e,
                        adapter: t
                    }) => !!e(r) && (a = t, !0)));
                    return e(new(a(i)), r)
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
                    const a = e[n];
                    r[n] = "function" === typeof a ? (...e) => {
                        for (let r = 0; r < t.length; r++) a.apply(t[r], e)
                    } : a
                })), r
            }
            const l = e => class extends e {
                    _setup() {
                        window.BardApp || (window.BardApp = u({
                            callbackFromNative(e, t, r) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${r} (callbackId: ${e})`), this._receiveCallback(e, a(r))
                            },
                            eventFromNative(e, t) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[eventFromNative] eventType:${e} (data: ${t})`), this._receiveEvent(e, a(t))
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
                                    const t = (e = a(e)).payload.data;
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
                v = e => class extends e {
                    _setup() {
                        window.BNCBridge || (window.BNCBridge = u({
                            receive(e) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${e}`);
                                const {
                                    callbackId: t,
                                    eventType: r,
                                    data: n
                                } = a(e);
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
                h = e => class extends e {
                    _setup() {}
                    _send() {}
                    _ready() {}
                };
            const g = class {
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
                y = (e, t) => "LT" === function(e, t) {
                    return function(e, t) {
                        if (e.join(".") === t.join(".")) return "EQ";
                        for (let r = 0; r < e.length; r++) {
                            switch (m(e[r], t[r])) {
                                case "EQ":
                                    continue;
                                case "GT":
                                    return "GT";
                                case "LT":
                                    return "LT"
                            }
                        }
                    }(b(e), b(t))
                }(e, t);

            function m(e, t) {
                return e === t ? "EQ" : e > t ? "GT" : "LT"
            }

            function b(e) {
                return e.replace(/-alpha/g, "").split(".").map(Number)
            }
            const w = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                x = (e, t, r) => Object.defineProperty(e, t, {
                    value: r
                }),
                _ = e => {
                    if ("string" !== typeof e) throw new TypeError("agent must be a string");
                    const t = e.match(w),
                        r = Object.create({
                            isHybrid: !1
                        });
                    if (t) {
                        const e = t[1];
                        x(r, "bridgeVersion", e), x(r, "clientType", t[2]), x(r, "clientVersion", t[3]), x(r, "isHybrid", !!e)
                    }
                    return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (r.isHybrid = !0), r
                };
            let E, k;
            const S = () => k || ("undefined" !== typeof navigator ? navigator.userAgent : "");
            const {
                isHybrid: A,
                clientType: O,
                bridgeVersion: T
            } = function(e) {
                return 0 === arguments.length ? E || (E = _(S())) : _(e)
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
                const a = (e, t) => {
                        const r = e.indexOf(t);
                        ~r && ((e, t) => {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        })(e, r)
                    },
                    o = (t, n, o) => {
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
                        }))), s.push(o ? ((e, t) => {
                            const r = (...n) => {
                                a(e, r), t(...n)
                            };
                            return r
                        })(s, n) : n)
                    };
                return t.on = (e, t) => o(e, t), t.once = (e, t) => o(e, t, !0), t.off = function(e, t) {
                    const n = r[e];
                    if (!n) return;
                    const {
                        events: o
                    } = n;
                    1 !== arguments.length ? a(o, t) : o.length = 0
                }, t.fetch = (t, {
                    method: r = "GET",
                    body: n = "",
                    headers: a = {},
                    credentials: o
                } = {}) => e.invoke("fetch", {
                    url: t,
                    method: r,
                    body: n,
                    headers: a,
                    credentials: o
                }).then((({
                    error: e,
                    response: r
                }) => {
                    if (!A) return e ? Promise.reject(e) : Promise.resolve(r);
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
                        headers: a,
                        body: o,
                        statusText: i = ""
                    } = r, s = {};
                    Object.keys(a).forEach((e => {
                        const t = a[e];
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
                                e(JSON.parse(o || "{}"))
                            } catch (r) {
                                t(r)
                            }
                        })),
                        text: () => Promise.resolve(o),
                        headers: s,
                        clone: () => ({
                            url: t,
                            ok: c,
                            status: n,
                            statusText: i,
                            json: () => new Promise(((e, t) => {
                                try {
                                    e(JSON.parse(o || "{}"))
                                } catch (r) {
                                    t(r)
                                }
                            })),
                            text: () => Promise.resolve(o),
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
                }, t.setButtons = (t, a, i) => (a = a.map((e => {
                    const t = `button.${e.type}`;
                    return r[t] || n(t), e.onClick && o(t, e.onClick), t
                })), e.invoke("setButtons", { ...i || {},
                    buttons: a,
                    position: t
                })), t.openURWebview = ({
                    url: t,
                    closePath: r = "/app/bnc/urwebv/close",
                    closeButtonVisible: n,
                    viewExternal: a
                }) => e.invoke("openURWebview", {
                    url: t,
                    closePath: r,
                    closeButtonVisible: n,
                    viewExternal: a
                }).then((({
                    result: e,
                    callbackUrl: t
                }) => "SUCCESS" === e ? Promise.resolve({
                    callbackUrl: t
                }) : Promise.reject({
                    code: e
                }))), t.isSupportDeeplink = t => !A || y(T, "1.8.0") ? Promise.resolve(!1) : e.invoke("isSupportDeeplink", {
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
            var D = r("F63i");
            const P = (e = h) => (new c).register({
                    test: ({
                        clientType: e
                    }) => "iOS" === e || "MacOS" === e,
                    adapter: v
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
                        t = "undefined" !== typeof D && null != D.versions && null != D.versions.node;
                    let r = "";
                    e && (r = window.navigator.userAgent);
                    t && (r = `node ${D.versions.node}`);
                    return r
                }()),
                C = e => {
                    const t = new g;
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
                a = (e, t, r) => Object.defineProperty(e, t, {
                    value: r
                }),
                o = e => {
                    if ("string" !== typeof e) throw new TypeError("agent must be a string");
                    const t = e.match(n),
                        r = Object.create({
                            isHybrid: !1
                        });
                    if (t) {
                        const e = t[1];
                        a(r, "bridgeVersion", e), a(r, "clientType", t[2]), a(r, "clientVersion", t[3]), a(r, "isHybrid", !!e)
                    }
                    return r
                };
            let i, s;
            const c = () => s || ("undefined" !== typeof navigator ? navigator.userAgent : "");

            function u(e) {
                return 0 === arguments.length ? i || (i = o(c())) : o(e)
            }
        },
        dX47: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                fetch: () => s,
                setTitle: () => i
            });
            const n = fetchPonyfill;
            var a = r.n(n);
            const {
                fetch: o
            } = a()(), i = ({
                title: e
            }, t) => {
                document.title = e, t()
            }, s = ({
                url: e,
                method: t,
                body: r,
                headers: n,
                credentials: a = "same-origin"
            }, i) => {
                const s = {
                    method: t = t.toUpperCase(),
                    headers: n,
                    credentials: a
                };
                "GET" !== t && "HEAD" !== t && (s.body = r), o(e, s).then((e => {
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
                a = r("Oxe1"),
                o = TypeError;
            e.exports = function(e) {
                if (n(e)) return e;
                throw o(a(e) + " is not a function")
            }
        },
        tTsQ: (e, t, r) => {
            var n = r("nFBW"),
                a = String,
                o = TypeError;
            e.exports = function(e) {
                if (n(e)) return e;
                throw o(a(e) + " is not an object")
            }
        },
        JXJY: (e, t, r) => {
            var n = r("/1o8"),
                a = r("cHg0"),
                o = r("C/5I"),
                i = function(e) {
                    return function(t, r, i) {
                        var s, c = n(t),
                            u = o(c),
                            l = a(i, u);
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
                a = n({}.toString),
                o = n("".slice);
            e.exports = function(e) {
                return o(a(e), 8, -1)
            }
        },
        UI2s: (e, t, r) => {
            var n = r("hKKO"),
                a = r("ELNT"),
                o = r("PSsl"),
                i = r("xluy");
            e.exports = function(e, t, r) {
                for (var s = a(t), c = i.f, u = o.f, l = 0; l < s.length; l++) {
                    var p = s[l];
                    n(e, p) || r && n(r, p) || c(e, p, u(t, p))
                }
            }
        },
        SeAf: (e, t, r) => {
            var n = r("f8nr"),
                a = r("xluy"),
                o = r("lFLE");
            e.exports = n ? function(e, t, r) {
                return a.f(e, t, o(1, r))
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
                a = r("xluy"),
                o = r("iYp9"),
                i = r("2ZLl");
            e.exports = function(e, t, r, s) {
                s || (s = {});
                var c = s.enumerable,
                    u = void 0 !== s.name ? s.name : t;
                if (n(r) && o(r, u, s), s.global) c ? e[t] = r : i(t, r);
                else {
                    try {
                        s.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (error) {}
                    c ? e[t] = r : a.f(e, t, {
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
                a = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    a(n, e, {
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
                a = r("nFBW"),
                o = n.document,
                i = a(o) && a(o.createElement);
            e.exports = function(e) {
                return i ? o.createElement(e) : {}
            }
        },
        wVGj: e => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        BcTq: (e, t, r) => {
            var n, a, o = r("htmW"),
                i = r("wVGj"),
                s = o.process,
                c = o.Deno,
                u = s && s.versions || c && c.version,
                l = u && u.v8;
            l && (a = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !a && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (a = +n[1]), e.exports = a
        },
        XepZ: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        AS9I: (e, t, r) => {
            var n = r("htmW"),
                a = r("PSsl").f,
                o = r("SeAf"),
                i = r("9vzw"),
                s = r("2ZLl"),
                c = r("UI2s"),
                u = r("n1w0");
            e.exports = function(e, t) {
                var r, l, p, f, d, v = e.target,
                    h = e.global,
                    g = e.stat;
                if (r = h ? n : g ? n[v] || s(v, {}) : (n[v] || {}).prototype)
                    for (l in t) {
                        if (f = t[l], p = e.dontCallGetSet ? (d = a(r, l)) && d.value : r[l], !u(h ? l : v + (g ? "." : "#") + l, e.forced) && void 0 !== p) {
                            if (typeof f == typeof p) continue;
                            c(f, p)
                        }(e.sham || p && p.sham) && o(f, "sham", !0), i(r, l, f, e)
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
                a = Function.prototype.call;
            e.exports = n ? a.bind(a) : function() {
                return a.apply(a, arguments)
            }
        },
        Tff8: (e, t, r) => {
            var n = r("f8nr"),
                a = r("hKKO"),
                o = Function.prototype,
                i = n && Object.getOwnPropertyDescriptor,
                s = a(o, "name"),
                c = s && "something" === function() {}.name,
                u = s && (!n || n && i(o, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: c,
                CONFIGURABLE: u
            }
        },
        rioE: (e, t, r) => {
            var n = r("0Ghs"),
                a = Function.prototype,
                o = a.call,
                i = n && a.bind.bind(o, o);
            e.exports = n ? i : function(e) {
                return function() {
                    return o.apply(e, arguments)
                }
            }
        },
        O8fN: (e, t, r) => {
            var n = r("htmW"),
                a = r("/LHJ"),
                o = function(e) {
                    return a(e) ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? o(n[e]) : n[e] && n[e][t]
            }
        },
        WsRI: (e, t, r) => {
            var n = r("9xYj"),
                a = r("VzDr");
            e.exports = function(e, t) {
                var r = e[t];
                return a(r) ? void 0 : n(r)
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
                a = r("Vir1"),
                o = n({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return o(a(e), t)
            }
        },
        "D/Aq": e => {
            e.exports = {}
        },
        jRkR: (e, t, r) => {
            var n = r("f8nr"),
                a = r("L1Gn"),
                o = r("LhkG");
            e.exports = !n && !a((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        "mV/l": (e, t, r) => {
            var n = r("rioE"),
                a = r("L1Gn"),
                o = r("3Ckp"),
                i = Object,
                s = n("".split);
            e.exports = a((function() {
                return !i("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == o(e) ? s(e, "") : i(e)
            } : i
        },
        lFkn: (e, t, r) => {
            var n = r("rioE"),
                a = r("/LHJ"),
                o = r("vSaM"),
                i = n(Function.toString);
            a(o.inspectSource) || (o.inspectSource = function(e) {
                return i(e)
            }), e.exports = o.inspectSource
        },
        "3aPN": (e, t, r) => {
            var n, a, o, i = r("NW3L"),
                s = r("htmW"),
                c = r("nFBW"),
                u = r("SeAf"),
                l = r("hKKO"),
                p = r("vSaM"),
                f = r("17A7"),
                d = r("D/Aq"),
                v = "Object already initialized",
                h = s.TypeError,
                g = s.WeakMap;
            if (i || p.state) {
                var y = p.state || (p.state = new g);
                y.get = y.get, y.has = y.has, y.set = y.set, n = function(e, t) {
                    if (y.has(e)) throw h(v);
                    return t.facade = e, y.set(e, t), t
                }, a = function(e) {
                    return y.get(e) || {}
                }, o = function(e) {
                    return y.has(e)
                }
            } else {
                var m = f("state");
                d[m] = !0, n = function(e, t) {
                    if (l(e, m)) throw h(v);
                    return t.facade = e, u(e, m, t), t
                }, a = function(e) {
                    return l(e, m) ? e[m] : {}
                }, o = function(e) {
                    return l(e, m)
                }
            }
            e.exports = {
                set: n,
                get: a,
                has: o,
                enforce: function(e) {
                    return o(e) ? a(e) : n(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var r;
                        if (!c(t) || (r = a(t)).type !== e) throw h("Incompatible receiver, " + e + " required");
                        return r
                    }
                }
            }
        },
        "/LHJ": (e, t, r) => {
            var n = r("vciX"),
                a = n.all;
            e.exports = n.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === a
            } : function(e) {
                return "function" == typeof e
            }
        },
        n1w0: (e, t, r) => {
            var n = r("L1Gn"),
                a = r("/LHJ"),
                o = /#|\.prototype\./,
                i = function(e, t) {
                    var r = c[s(e)];
                    return r == l || r != u && (a(t) ? n(t) : !!t)
                },
                s = i.normalize = function(e) {
                    return String(e).replace(o, ".").toLowerCase()
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
                a = r("vciX"),
                o = a.all;
            e.exports = a.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : n(e) || e === o
            } : function(e) {
                return "object" == typeof e ? null !== e : n(e)
            }
        },
        imG2: e => {
            e.exports = !1
        },
        RTYJ: (e, t, r) => {
            var n = r("O8fN"),
                a = r("/LHJ"),
                o = r("kbQN"),
                i = r("lQr9"),
                s = Object;
            e.exports = i ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = n("Symbol");
                return a(t) && o(t.prototype, s(e))
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
                a = r("L1Gn"),
                o = r("/LHJ"),
                i = r("hKKO"),
                s = r("f8nr"),
                c = r("Tff8").CONFIGURABLE,
                u = r("lFkn"),
                l = r("3aPN"),
                p = l.enforce,
                f = l.get,
                d = String,
                v = Object.defineProperty,
                h = n("".slice),
                g = n("".replace),
                y = n([].join),
                m = s && !a((function() {
                    return 8 !== v((function() {}), "length", {
                        value: 8
                    }).length
                })),
                b = String(String).split("String"),
                w = e.exports = function(e, t, r) {
                    "Symbol(" === h(d(t), 0, 7) && (t = "[" + g(d(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || c && e.name !== t) && (s ? v(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), m && r && i(r, "arity") && e.length !== r.arity && v(e, "length", {
                        value: r.arity
                    });
                    try {
                        r && i(r, "constructor") && r.constructor ? s && v(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (error) {}
                    var n = p(e);
                    return i(n, "source") || (n.source = y(b, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = w((function() {
                return o(this) && f(this).source || u(this)
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
                a = r("jRkR"),
                o = r("lU+J"),
                i = r("tTsQ"),
                s = r("hm6+"),
                c = TypeError,
                u = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                p = "enumerable",
                f = "configurable",
                d = "writable";
            t.f = n ? o ? function(e, t, r) {
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
                if (i(e), t = s(t), i(r), a) try {
                    return u(e, t, r)
                } catch (error) {}
                if ("get" in r || "set" in r) throw c("Accessors not supported");
                return "value" in r && (e[t] = r.value), e
            }
        },
        PSsl: (e, t, r) => {
            var n = r("f8nr"),
                a = r("SE89"),
                o = r("7dK1"),
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
                if (u(e, t)) return i(!a(o.f, e, t), e[t])
            }
        },
        Qhjw: (e, t, r) => {
            var n = r("9QHQ"),
                a = r("XepZ").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return n(e, a)
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
                a = r("hKKO"),
                o = r("/1o8"),
                i = r("JXJY").indexOf,
                s = r("D/Aq"),
                c = n([].push);
            e.exports = function(e, t) {
                var r, n = o(e),
                    u = 0,
                    l = [];
                for (r in n) !a(s, r) && a(n, r) && c(l, r);
                for (; t.length > u;) a(n, r = t[u++]) && (~i(l, r) || c(l, r));
                return l
            }
        },
        "7dK1": (e, t) => {
            "use strict";
            var r = {}.propertyIsEnumerable,
                n = Object.getOwnPropertyDescriptor,
                a = n && !r.call({
                    1: 2
                }, 1);
            t.f = a ? function(e) {
                var t = n(this, e);
                return !!t && t.enumerable
            } : r
        },
        CzCt: (e, t, r) => {
            var n = r("SE89"),
                a = r("/LHJ"),
                o = r("nFBW"),
                i = TypeError;
            e.exports = function(e, t) {
                var r, s;
                if ("string" === t && a(r = e.toString) && !o(s = n(r, e))) return s;
                if (a(r = e.valueOf) && !o(s = n(r, e))) return s;
                if ("string" !== t && a(r = e.toString) && !o(s = n(r, e))) return s;
                throw i("Can't convert object to primitive value")
            }
        },
        ELNT: (e, t, r) => {
            var n = r("O8fN"),
                a = r("rioE"),
                o = r("Qhjw"),
                i = r("n9EI"),
                s = r("tTsQ"),
                c = a([].concat);
            e.exports = n("Reflect", "ownKeys") || function(e) {
                var t = o.f(s(e)),
                    r = i.f;
                return r ? c(t, r(e)) : t
            }
        },
        "4siQ": (e, t, r) => {
            var n = r("VzDr"),
                a = TypeError;
            e.exports = function(e) {
                if (n(e)) throw a("Can't call method on " + e);
                return e
            }
        },
        "17A7": (e, t, r) => {
            var n = r("vDgh"),
                a = r("qGbq"),
                o = n("keys");
            e.exports = function(e) {
                return o[e] || (o[e] = a(e))
            }
        },
        vSaM: (e, t, r) => {
            var n = r("htmW"),
                a = r("2ZLl"),
                o = "__core-js_shared__",
                i = n[o] || a(o, {});
            e.exports = i
        },
        vDgh: (e, t, r) => {
            var n = r("imG2"),
                a = r("vSaM");
            (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {})
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
                a = r("L1Gn"),
                o = r("htmW").String;
            e.exports = !!Object.getOwnPropertySymbols && !a((function() {
                var e = Symbol();
                return !o(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
            }))
        },
        cHg0: (e, t, r) => {
            var n = r("P+lJ"),
                a = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                var r = n(e);
                return r < 0 ? a(r + t, 0) : o(r, t)
            }
        },
        "/1o8": (e, t, r) => {
            var n = r("mV/l"),
                a = r("4siQ");
            e.exports = function(e) {
                return n(a(e))
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
                a = Math.min;
            e.exports = function(e) {
                return e > 0 ? a(n(e), 9007199254740991) : 0
            }
        },
        Vir1: (e, t, r) => {
            var n = r("4siQ"),
                a = Object;
            e.exports = function(e) {
                return a(n(e))
            }
        },
        "7ijk": (e, t, r) => {
            var n = r("SE89"),
                a = r("nFBW"),
                o = r("RTYJ"),
                i = r("WsRI"),
                s = r("CzCt"),
                c = r("O2X7"),
                u = TypeError,
                l = c("toPrimitive");
            e.exports = function(e, t) {
                if (!a(e) || o(e)) return e;
                var r, c = i(e, l);
                if (c) {
                    if (void 0 === t && (t = "default"), r = n(c, e, t), !a(r) || o(r)) return r;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), s(e, t)
            }
        },
        "hm6+": (e, t, r) => {
            var n = r("7ijk"),
                a = r("RTYJ");
            e.exports = function(e) {
                var t = n(e, "string");
                return a(t) ? t : t + ""
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
                a = 0,
                o = Math.random(),
                i = n(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++a + o, 36)
            }
        },
        lQr9: (e, t, r) => {
            var n = r("GyT7");
            e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        "lU+J": (e, t, r) => {
            var n = r("f8nr"),
                a = r("L1Gn");
            e.exports = n && a((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        NW3L: (e, t, r) => {
            var n = r("htmW"),
                a = r("/LHJ"),
                o = n.WeakMap;
            e.exports = a(o) && /native code/.test(String(o))
        },
        O2X7: (e, t, r) => {
            var n = r("htmW"),
                a = r("vDgh"),
                o = r("hKKO"),
                i = r("qGbq"),
                s = r("GyT7"),
                c = r("lQr9"),
                u = n.Symbol,
                l = a("wks"),
                p = c ? u.for || u : u && u.withoutSetter || i;
            e.exports = function(e) {
                return o(l, e) || (l[e] = s && o(u, e) ? u[e] : p("Symbol." + e)), l[e]
            }
        },
        Bihu: (e, t, r) => {
            var n = r("AS9I"),
                a = r("htmW");
            n({
                global: !0,
                forced: a.globalThis !== a
            }, {
                globalThis: a
            })
        },
        "h+kG": (e, t, r) => {
            "use strict";

            function n(e) {
                return e && e.Math == Math ? e : void 0
            }
            r.d(t, {
                OW: () => a
            });
            const a = "object" == typeof globalThis && n(globalThis) || n(window) || "object" == typeof self && n(self) || "object" == typeof r.g && n(r.g) || function() {
                return this
            }() || {}
        },
        XGcN: function(e, t) {
            ! function(e) {
                "use strict";
                var t = function() {
                    return (t = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

                function r(e, t, r, n) {
                    return new(r = r || Promise)((function(a, o) {
                        function i(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? a(e.value) : ((t = e.value) instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function n(e, t) {
                    var r, n, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                                    switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = i.trys).length && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || a[0] < o[1] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (s) {
                                    o = [6, s], n = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                }

                function a() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        a = 0;
                    for (t = 0; t < r; t++)
                        for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
                    return n
                }

                function o(e) {}
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
                                var a = this;
                                return function(o, i) {
                                    return r(a, void 0, Promise, (function() {
                                        var r;
                                        return n(this, (function(n) {
                                            return r = {
                                                type: e + "/" + t
                                            }, void 0 !== o && (r.payload = o), void 0 !== i && (r.meta = i), [2, this.dispatch(r)]
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
                                    var a = n[r];
                                    this.validate([
                                        [!!a.match(/\//), "Invalid effect name (" + e.name + "/" + a + ")"],
                                        ["function" != typeof t[a], "Invalid effect (" + e.name + "/" + a + "). Must be a function"]
                                    ]), this.effects[e.name + "/" + a] = t[a].bind(this.dispatch[e.name]), this.dispatch[e.name][a] = this.createDispatcher.call(this, e.name, a), this.dispatch[e.name][a].isEffect = !0
                                }
                        },
                        middleware: function(e) {
                            var t = this;
                            return function(a) {
                                return function(o) {
                                    return r(t, void 0, void 0, (function() {
                                        return n(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return o.type in this.effects ? [4, a(o)] : [3, 2];
                                                case 1:
                                                    return t.sent(), [2, this.effects[o.type](o.payload, e.getState(), o.meta)];
                                                case 2:
                                                    return [2, a(o)]
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

                function v(e, t, r) {
                    var n;
                    if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                    if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
                        if ("function" != typeof r) throw Error("Expected the enhancer to be a function.");
                        return r(v)(e, t)
                    }
                    if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
                    var a = e,
                        o = t,
                        i = [],
                        s = i,
                        c = !1;

                    function u() {
                        s === i && (s = i.slice())
                    }

                    function l() {
                        if (c) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                        return o
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

                    function h(e) {
                        if (! function(e) {
                                if ("object" == typeof e && null !== e) {
                                    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                    return Object.getPrototypeOf(e) === t
                                }
                            }(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
                        if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                        if (c) throw Error("Reducers may not dispatch actions.");
                        try {
                            c = !0, o = a(o, e)
                        } finally {
                            c = !1
                        }
                        for (var t = i = s, r = 0; r < t.length; r++)(0, t[r])();
                        return e
                    }
                    return h({
                        type: d.INIT
                    }), (n = {
                        dispatch: h,
                        subscribe: p,
                        getState: l,
                        replaceReducer: function(e) {
                            if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
                            a = e, h({
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

                function h(e) {
                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                        var a = t[n];
                        "function" == typeof e[a] && (r[a] = e[a])
                    }
                    var o, i, s = Object.keys(r);
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
                        o = e
                    }
                    return function(e, t) {
                        if (void 0 === e && (e = {}), o) throw o;
                        for (var n, a, i = !1, c = {}, u = 0; u < s.length; u++) {
                            var l = s[u],
                                p = e[l],
                                f = (0, r[l])(p, t);
                            if (void 0 === f) {
                                var d = "Given " + ((a = (n = t) && n.type) && 'action "' + a + '"' || "an action") + ', reducer "' + l + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
                                throw Error(d)
                            }
                            c[l] = f, i = i || f !== p
                        }
                        return (i = i || s.length !== Object.keys(e).length) ? c : e
                    }
                }

                function g(e, t) {
                    return function() {
                        return t(e.apply(this, arguments))
                    }
                }

                function y(e, t) {
                    var r = Object.keys(e);
                    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r
                }

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(r, !0).forEach((function(t) {
                            var n, a, o;
                            o = r[a = t], a in (n = e) ? Object.defineProperty(n, a, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[a] = o
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(r).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function b() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return 0 === t.length ? function(e) {
                        return e
                    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                        return function() {
                            return e(t.apply(void 0, arguments))
                        }
                    }))
                }

                function w() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return function(e) {
                        return function() {
                            var r = e.apply(void 0, arguments),
                                n = function() {
                                    throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                                },
                                a = {
                                    getState: r.getState,
                                    dispatch: function() {
                                        return n.apply(void 0, arguments)
                                    }
                                },
                                o = t.map((function(e) {
                                    return e(a)
                                }));
                            return m({}, r, {
                                dispatch: n = b.apply(void 0, o)(r.dispatch)
                            })
                        }
                    }
                }

                function x(e) {
                    void 0 === e && (e = {});
                    var t = e.disabled,
                        r = function(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && !~t.indexOf(n) && (r[n] = e[n]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var a = 0;
                                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) !~t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
                            }
                            return r
                        }(e, ["disabled"]);
                    return !t && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(r) : b
                }
                var _ = Object.freeze({
                    __proto__: null,
                    __DO_NOT_USE__ActionTypes: d,
                    applyMiddleware: w,
                    bindActionCreators: function(e, t) {
                        if ("function" == typeof e) return g(e, t);
                        if ("object" != typeof e || null === e) throw Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                        var r = {};
                        for (var n in e) {
                            var a = e[n];
                            "function" == typeof a && (r[n] = g(a, t))
                        }
                        return r
                    },
                    combineReducers: h,
                    compose: b,
                    createStore: v
                });

                function E(e) {
                    var r = this,
                        n = e.redux,
                        o = e.models,
                        i = n.combineReducers || h,
                        s = n.createStore || v,
                        c = void 0 !== n.initialState ? n.initialState : {};
                    this.reducers = n.reducers, this.mergeReducers = function(e) {
                        return void 0 === e && (e = {}), r.reducers = t(t({}, r.reducers), e), Object.keys(r.reducers).length ? i(r.reducers) : function(e) {
                            return e
                        }
                    }, this.createModelReducer = function(e) {
                        for (var t = e.baseReducer, n = {}, a = 0, o = Object.keys(e.reducers || {}); a < o.length; a++) {
                            var i = o[a],
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
                    for (var u = 0, l = o; u < l.length; u++) this.createModelReducer(l[u]);
                    this.createRootReducer = function(e) {
                        void 0 === e && (e = {});
                        var t = r.mergeReducers();
                        return Object.keys(e).length ? function(r, n) {
                            return t(e[n.type] ? (0, e[n.type])(r, n) : r, n)
                        } : t
                    };
                    var p = this.createRootReducer(n.rootReducers),
                        f = w.apply(_, n.middlewares),
                        d = x(n.devtoolOptions).apply(void 0, a(n.enhancers, [f]));
                    return this.store = s(p, c, d), this
                }
                var k = [s, c],
                    S = (A.prototype.forEachPlugin = function(e, t) {
                        for (var r = 0, n = this.plugins; r < n.length; r++) {
                            var a = n[r];
                            a[e] && t(a[e])
                        }
                    }, A.prototype.getModels = function(e) {
                        return Object.keys(e).map((function(r) {
                            return t(t({
                                name: r
                            }, e[r]), {
                                reducers: e[r].reducers || {}
                            })
                        }))
                    }, A.prototype.addModel = function(e) {
                        this.forEachPlugin("onModel", (function(t) {
                            return t(e)
                        }))
                    }, A.prototype.init = function() {
                        var e = this;
                        this.models = this.getModels(this.config.models);
                        for (var r = 0, n = this.models; r < n.length; r++) this.addModel(n[r]);
                        var a = E.call(this, {
                                redux: this.config.redux,
                                models: this.models
                            }),
                            o = t(t({
                                name: this.config.name
                            }, a.store), {
                                model: function(t) {
                                    e.addModel(t), a.mergeReducers(a.createModelReducer(t)), a.store.replaceReducer(a.createRootReducer(e.config.redux.rootReducers)), a.store.dispatch({
                                        type: "@@redux/REPLACE "
                                    })
                                }
                            });
                        return this.forEachPlugin("onStoreCreated", (function(e) {
                            var t = e(o);
                            t && Object.keys(t || {}).forEach((function(e) {
                                o[e] = t[e]
                            }))
                        })), o
                    }, A);

                function A(e) {
                    var t = this;
                    this.plugins = [], this.config = e, this.pluginFactory = {
                        config: e,
                        validate: o,
                        create: function(e) {
                            e.onInit && e.onInit.call(this);
                            var t = {};
                            if (e.exposed)
                                for (var r = 0, n = Object.keys(e.exposed); r < n.length; r++) {
                                    var a = n[r];
                                    this[a] = "function" == typeof e.exposed[a] ? e.exposed[a].bind(this) : Object.create(e.exposed[a])
                                }
                            for (var o = 0, i = ["onModel", "middleware", "onStoreCreated"]; o < i.length; o++) {
                                var s = i[o];
                                e[s] && (t[s] = e[s].bind(this))
                            }
                            return t
                        }
                    };
                    for (var r = 0, n = k.concat(this.config.plugins); r < n.length; r++) this.plugins.push(this.pluginFactory.create(n[r]));
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
                    var r = e.name || "" + D;
                    D += 1;
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
                            }), n = 0, o = r.plugins; n < o.length; n++) {
                            var i = o[n];
                            if (i.config) {
                                var s = T(r.models, i.config.models);
                                r.models = s, r.plugins = a(r.plugins, i.config.plugins || []), i.config.redux && (r.redux.initialState = T(r.redux.initialState, i.config.redux.initialState), r.redux.reducers = T(r.redux.reducers, i.config.redux.reducers), r.redux.rootReducers = T(r.redux.rootReducers, i.config.redux.reducers), r.redux.enhancers = a(r.redux.enhancers, i.config.redux.enhancers || []), r.redux.middlewares = a(r.redux.middlewares, i.config.redux.middlewares || []), r.redux.combineReducers = r.redux.combineReducers || i.config.redux.combineReducers, r.redux.createStore = r.redux.createStore || i.config.redux.createStore)
                            }
                        }
                        return r
                    }(t(t({}, e), {
                        name: r
                    }));
                    return new S(n).init()
                }
                var D = 0,
                    P = {
                        init: B
                    };
                e.createModel = function(e) {
                    return e
                }, e.default = P, e.dispatch = function() {
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
            r.g.pika = r.g.pika || {}, r.g.pika.version && "0.3.58" !== r.g.pika.version && console.error("Two versions of pika are loaded, please check the code. There may be potential risks.", r.g.pika.version, "0.3.58"), r.g.pika.version = r.g.pika.version || "0.3.58";
            try {
                r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
            } catch (n) {
                console.error("[@pika/plugin-http]", n)
            }
        },
        "9CGD": (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => dr
            });
            var n = r("EGIz"),
                a = r("2ae6"),
                o = r("Pz56"),
                i = r.n(o),
                s = r("wIZF"),
                c = r("UCWY"),
                u = r("h+kG");

            function l(e) {
                u.OW._bn_reporter = u.OW._bn_reporter || [], u.OW._bn_reporter.push(e)
            }
            var p = function(e) {
                    l({
                        data: e,
                        key: "reportTrackEvent"
                    })
                },
                f = function(e) {
                    return l({
                        data: e,
                        key: "trackInit"
                    })
                },
                d = r("VP0d");
            var v = r("Dz1D");

            function h() {
                var e = (0, v.PC)().SENSORS_SERVER_HOST;
                if (e) return e
            }
            r("ofQG");

            function g() {
                var e = (0, v.PC)().STATIC_HOST;
                if (e) return e
            }
            var y = function(e) {
                var t = (0, v.PC)();
                return {
                    sensorsConfig: {
                        server_url: h(),
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
            const m = function(e) {
                return (0, c.yO)({
                    appComponent: function(t) {
                        return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function n() {
                            var a;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (h()) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return", (console.log("[@pika/plugin-track] SENSORS_SERVER_HOST is not set, so the track data will not be uploaded."), t));
                                    case 2:
                                        a = y(e), f(a);
                                        try {
                                            r.g.pika = r.g.pika || {}, r.g.pika.__REPORT_TRACK__ = r.g.pika.__REPORT_TRACK__ || [], r.g.pika.__REPORT_TRACK__.forEach((function(e) {
                                                var t = (0, d.A)(e, 3),
                                                    r = t[0],
                                                    n = t[1],
                                                    a = t[2];
                                                return p({
                                                    eventName: r,
                                                    data: n,
                                                    options: a
                                                })
                                            })), r.g.pika.__REPORT_TRACK__.length = 0, r.g.pika.__REPORT_TRACK__.push = function(e) {
                                                var t = (0, d.A)(e, 3),
                                                    r = t[0],
                                                    n = t[1],
                                                    a = t[2];
                                                return p({
                                                    eventName: r,
                                                    data: n,
                                                    options: a
                                                })
                                            }
                                        } catch (o) {
                                            console.error("[@pika/plugin-track] deprecatedTrackInit error", o)
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
            var b = r("tEf9"),
                w = r("DTvD"),
                x = r.n(w),
                _ = r("BK9r"),
                E = r("2URn"),
                k = r("lmEU"),
                S = function(e) {
                    var t = e.data;
                    (0, k.z)({
                        data: {
                            data: t
                        },
                        key: "reportMonitorEvent"
                    })
                };

            function A(e, t, r) {
                (0, E.A)(e, Error) ? function(e) {
                    "undefined" !== typeof originalSentry && originalSentry.captureException(e)
                }(e) : "string" === typeof e ? t ? function(e) {
                    var t = e.data;
                    (0, k.z)({
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
            const O = "PIKA_WEB_VITALS",
                T = {
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
                B = e => e.replace(/^\//, "").replace(/\/$/, ""),
                D = e => {
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
                        for (let o = r - 1; o >= 0; o--) {
                            const {
                                route: r
                            } = e[o], {
                                children: n,
                                path: a,
                                id: i
                            } = r;
                            (null === n || void 0 === n ? void 0 : n.length) && t.forEach((e => {
                                n.some((t => t.id === e.id)) && (e.path = `${B(a)}/${B(e.path)}`, e.id = i)
                            }))
                        }
                        const n = t[t.length - 1],
                            {
                                path: a
                            } = n;
                        return /^\//.test(a) ? a : `/${a}`
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
            const P = window.requestIdleCallback || function(e, t = {
                    timeout: 3e3
                }) {
                    return setTimeout((() => {
                        e({
                            didTimeout: !1,
                            timeRemaining: () => 50
                        })
                    }), t.timeout)
                },
                C = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                };

            function R({
                remainingTime: e,
                timeout: t
            } = {
                remainingTime: 49,
                timeout: 2e3
            }) {
                return new Promise(((r, n) => {
                    let a;
                    const o = setTimeout((() => {
                        C && a && C(a), r()
                    }), t);

                    function i(t) {
                        t.timeRemaining() >= e ? (console.debug(`[awaitPageLoadAndIdle] Idle time remaining is >= ${e}ms`), clearTimeout(o), r()) : a = P(i)
                    }
                    const s = () => {
                        console.debug("[awaitPageLoadAndIdle] Page has just finished loading"), window.removeEventListener("load", s), a = P(i)
                    };
                    "complete" === document.readyState ? (console.debug("[awaitPageLoadAndIdle] Page is already loaded (document.readyState is complete)"), a = P(i)) : window.addEventListener("load", s)
                }))
            }
            var F = r("LJ4M");

            function I(e) {
                const t = (0, F.read)(e);
                return L(t) ? t : null
            }

            function L(e) {
                if ("string" !== typeof e) return !1;
                const t = /^[a-zA-Z0-9-_]+$/.test(e);
                return t || console.warn(`[@pika/utils] Invalid content: ${e}, it may contain XSS attack.`), t
            }
            var j = r("888e"),
                N = r("nG1z"),
                H = r("m+Lx");

            function M(e, t, r) {
                return M = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, H.A)(e)););
                        return e
                    }(e, t);
                    if (n) {
                        var a = Object.getOwnPropertyDescriptor(n, t);
                        return a.get ? a.get.call(r || e) : a.value
                    }
                }, M(e, t, r)
            }
            var U = r("2PCm"),
                V = r("VKAp"),
                G = r("oH+a"),
                W = {
                    componentStack: null,
                    error: null
                },
                K = function(e) {
                    (0, U.A)(r, e);
                    var t = (0, V.A)(r);

                    function r() {
                        var e;
                        return (0, j.A)(this, r), (e = t.call.apply(t, [this].concat(Array.prototype.slice.call(arguments)))).state = W, e.resetErrorBoundary = function() {
                            var t = e.props.onReset,
                                r = e.state,
                                n = r.error,
                                a = r.componentStack;
                            t && t(n, a), e.setState(W)
                        }, (0, G.A)(e)
                    }
                    return (0, N.A)(r, [{
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
                                a = this.state;
                            return a.error ? (e = "function" === typeof r ? r({
                                error: a.error,
                                componentStack: a.componentStack,
                                resetError: this.resetErrorBoundary
                            }) : r, w.isValidElement(e) ? e : null) : "function" === typeof n ? n() : n
                        }
                    }]), r
                }(w.Component);
            var q = function(e) {
                    (0, U.A)(r, e);
                    var t = (0, V.A)(r);

                    function r() {
                        return (0, j.A)(this, r), t.apply(this, arguments)
                    }
                    return (0, N.A)(r, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            var n, a, o, i = t.componentStack,
                                s = this.props.name;
                            "undefined" !== typeof originalSentry && function(e) {
                                try {
                                    switch (Object.prototype.toString.call(e)) {
                                        case "[object Error]":
                                        case "[object Exception]":
                                        case "[object DOMException]":
                                            return !0;
                                        default:
                                            return (0, E.A)(e, Error)
                                    }
                                } catch (K) {
                                    return !1
                                }
                            }(e) && originalSentry.captureException(e, (function(t) {
                                var r;
                                return t.setExtra("componentStack", i), t.setLevel("fatal"), t.setTag("component", s || "ErrorBoundary ".concat(e.message)), t.setExtra("html-className", null === (r = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === r ? void 0 : r.className), t
                            })), (n = (0, H.A)(r.prototype), a = "componentDidCatch", o = this, M(n, a, o)).call(this, e, {
                                componentStack: i
                            })
                        }
                    }]), r
                }(K),
                z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = function(r) {
                            return x().createElement(q, Object.assign({}, t), x().createElement(e, Object.assign({}, r)))
                        },
                        n = t.name;
                    return n && (r.displayName = n), r
                };

            function $() {
                var e = (0, v.PC)().STATIC_HOST_SHARE;
                if (e) return e
            }
            var J = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = (0, _.K7)(),
                            a = n.matches;
                        return w.useEffect((function() {
                            try {
                                r.g.pika = r.g.pika || {}, r.g.pika.currentPath = D(a)
                            } catch (e) {}
                        }), [a]), w.createElement(e, Object.assign({}, t))
                    }
                },
                Y = !1;
            const X = function(e) {
                return (0, c.yO)({
                    appComponent: function(e) {
                        return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                            var n, a, o;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return Y || ((n = $()) ? a = "".concat(n, "/unpkg/monitor/reporter-sdk@").concat(window._bn_reporter_version, ".js") : console.error("[@pika/plugin-monitor] STATIC_HOST_SHARE is not set."), o = function() {
                                            if (a) {
                                                var e = document.createElement("script");
                                                e.src = a, e.id = "Reporter-sdk", e.defer = !0, document.body.appendChild(e), Y = !0
                                            }
                                        }, R({
                                            remainingTime: 49,
                                            timeout: 1e4
                                        }).then(o)), t.abrupt("return", J(z(e, {
                                            onMount: function() {
                                                r.g.pika = r.g.pika || {}, r.g.pika.__REPORT_ERRORS__ = r.g.pika.__REPORT_ERRORS__ || [], r.g.pika.__REPORT_ERRORS__.forEach((function(e) {
                                                    return A.apply(void 0, (0, b.A)(e))
                                                })), r.g.pika.__REPORT_ERRORS__.length = 0, r.g.pika.__REPORT_ERRORS__.push = function(e) {
                                                    return A.apply(void 0, (0, b.A)(e))
                                                }, r.g.pika.__REPORT_MONITOR_EVENTS__ = r.g.pika.__REPORT_MONITOR_EVENTS__ || [], r.g.pika.__REPORT_MONITOR_EVENTS__.forEach((function(e) {
                                                    return S.apply(void 0, (0, b.A)(e))
                                                })), r.g.pika.__REPORT_MONITOR_EVENTS__.length = 0, r.g.pika.__REPORT_MONITOR_EVENTS__.push = function(e) {
                                                    return S.apply(void 0, (0, b.A)(e))
                                                }
                                            },
                                            name: "RootErrorBoundary",
                                            fallback: w.createElement(e, null)
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

            function Z(e) {
                return !!e && /^\d+\.\d+\.\d+$/.test(e)
            }
            var Q = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, w.useEffect)((function() {
                        var e = null;
                        try {
                            e = setTimeout((function() {
                                ! function() {
                                    var e, t;
                                    Z(null === (e = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === e ? void 0 : e.version) || console.error("[Risk][pika] You are using an unstable version of pika, please use the official released version.", null === (t = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === t ? void 0 : t.version)
                                }()
                            }), 5e3)
                        } catch (t) {}
                        return function() {
                            e && clearTimeout(e)
                        }
                    }), []), x().createElement(e, Object.assign({}, t))
                }
            };
            var ee = r("E0uk");

            function te() {
                var e, t, n;
                r.g.pika = r.g.pika || {}, r.g.pika.__REQUEST_INTERCEPTORS__ = r.g.pika.__REQUEST_INTERCEPTORS__ || [], null === (e = r.g.pika.__REQUEST_INTERCEPTORS__) || void 0 === e || e.forEach((function(e) {
                    return ee.addRequestInterceptor(e)
                })), r.g.pika.__REQUEST_INTERCEPTORS__.length = 0, r.g.pika.__REQUEST_INTERCEPTORS__.push = function(e) {
                    return ee.addRequestInterceptor(e)
                }, r.g.pika.__RESPONSE_INTERCEPTORS__ = r.g.pika.__RESPONSE_INTERCEPTORS__ || [], null === (t = r.g.pika.__RESPONSE_INTERCEPTORS__) || void 0 === t || t.forEach((function(e) {
                    return ee.addResponseInterceptor(e)
                })), r.g.pika.__RESPONSE_INTERCEPTORS__.length = 0, r.g.pika.__RESPONSE_INTERCEPTORS__.push = function(e) {
                    return ee.addResponseInterceptor(e)
                }, r.g.pika.__RESULT_INTERCEPTORS__ = r.g.pika.__RESULT_INTERCEPTORS__ || [], null === (n = r.g.pika.__RESULT_INTERCEPTORS__) || void 0 === n || n.forEach((function(e) {
                    return ee.addResultInterceptor(e)
                })), r.g.pika.__RESULT_INTERCEPTORS__.length = 0, r.g.pika.__RESULT_INTERCEPTORS__.push = function(e) {
                    return ee.addResultInterceptor(e)
                }
            }
            var re = function() {
                    try {
                        r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
                    } catch (e) {
                        console.error("[@pika/plugin-http]", e)
                    }
                },
                ne = !1;
            const ae = function() {
                return (0, c.yO)({
                    init: function() {
                        return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ne || (ne = !0, re(), te(), "function" === typeof r.g.__HTTP_MODULE_DEFER_RESOLVE__ && r.g.__HTTP_MODULE_DEFER_RESOLVE__(), r.g.pika = r.g.pika || {}, r.g.pika.__HTTP_MODULE__ = r.g.pika.__HTTP_MODULE__ || {
                                            _config: ee._config,
                                            get: ee.get,
                                            post: ee.post,
                                            put: ee.put,
                                            del: ee.del,
                                            postForm: ee.postForm,
                                            upload: ee.upload,
                                            uploadHandler: ee.uploadHandler
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
            var oe = r("NVnN"),
                ie = r("sViW"),
                se = r("VA12"),
                ce = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/accounts/v1/public/account/ip/country-short");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/accounts/v2/public/account/ip/country-short", {
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
                }()),
                ue = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/accounts/v2/public/account/ip/country-city-short");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/accounts/v1/public/account/country/promote/email/show");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("eZh5")),
                le = function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.platform, n = t.currency, a = {
                                        headers: {
                                            "bnc-currency": n
                                        }
                                    }, e.next = 4, (0, se.get)("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check?platform=".concat(null === r || void 0 === r ? void 0 : r.toUpperCase()), a);
                                case 4:
                                    return o = e.sent.data, e.abrupt("return", o);
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
                pe = (function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a, o, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.address, n = t.tagOrMemo, a = t.type, o = {
                                        type: void 0 === a ? "FR_WITHDRAW_AFFIRM" : a,
                                        formValueReq: {
                                            address: r,
                                            tagOrMemo: n
                                        }
                                    }, e.next = 4, (0, se.post)("/bapi/compliance/v1/private/compliance/market/getComplianceDynamicForm", o);
                                case 4:
                                    return s = e.sent, e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/compliance/v1/private/compliance/market/saveStatus", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("BK7R")),
                fe = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                de = function(e, t) {
                    return (0, pe.A)({}, e, t)
                },
                ve = [],
                he = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return (t || []).forEach((function(e) {
                        "function" === typeof e && ve.push(e)
                    }))
                },
                ge = r("QUKP"),
                ye = r("vpUY"),
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
                        a = (0, ye.S)(window.navigator.userAgent).isHybrid;
                    return (0, ge.A)((0, pe.A)({}, e), {
                        isHybrid: a,
                        withChat: n && !a,
                        withHeader: t && !a,
                        withFooter: r && !a
                    })
                };
            he((function(e, t) {
                return "global" in t && (e.global = be(e.global || {})), e
            }));
            const we = {
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
                    updateState: de,
                    checkClientType: be
                },
                effects: {
                    queryRegion: function() {
                        return (0, ie.A)(i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ce();
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
                        return (0, ie.A)(i().mark((function t() {
                            var r, n, a, o, s, c, u;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, r = e.i18nHost, n = e.namespace, a = void 0 === n ? "base-seo-meta" : n, o = e.language, s = void 0 === o ? "en" : o, t.next = 4, (0, ue.JF)({
                                            i18nHost: r,
                                            namespace: a,
                                            language: s,
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
                        return (0, ie.A)(i().mark((function t() {
                            var r, n, a;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, le({
                                            platform: "WEB",
                                            currency: null !== e && void 0 !== e ? e : "USD"
                                        });
                                    case 3:
                                        (r = t.sent) && r.success ? this.updateState({
                                            restrictedBusinessKeys: null !== (a = null === r || void 0 === r || null === (n = r.restriction) || void 0 === n ? void 0 : n.keys) && void 0 !== a ? a : []
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
            var xe = r("zJWh"),
                _e = r("a59x"),
                Ee = function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r, n, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : "en", r = (0, _e.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, se.get)(r);
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
                ke = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r, n, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : "en", r = (0, _e.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, se.get)(r);
                                case 4:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, _e.Eg)("/bapi/apex/v1/public/apex/marketing/recommend/hotAsset/list", t), e.next = 3, (0, se.get)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("ezuS")),
                Se = "USD_USD",
                Ae = "userPreferredCurrency",
                Oe = function(e, t) {
                    return e === Ae ? /_USD$/i.test(t) ? t : Se : t
                },
                Te = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!fe(t)) return e;
                        var r = xe.U.read(t);
                        return (0, ge.A)((0, pe.A)({}, e), (0, ke.A)({}, t, Oe(t, r)))
                    }), e)
                };
            he((function(e, t) {
                if ("cookies" in t) {
                    var r = [Ae, "shouldPublicAssets"];
                    e.cookies = Te(e.cookies || {}, r)
                }
                return e
            }));
            const Be = {
                name: "cookies",
                state: {
                    theme: "light",
                    userPreferredCurrency: Se
                },
                reducers: {
                    updateState: de,
                    batchLoad: function(e, t) {
                        return Te(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!fe(t.key)) return e;
                            var r = Oe(t.key, t.value);
                            return xe.U.write(t.key, r), (0, ge.A)((0, pe.A)({}, e), (0, ke.A)({}, t.key, r))
                        }), e)
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return Te(e, [r])
                    }
                },
                effects: {
                    loadCurrency: function(e) {
                        return (0, ie.A)(i().mark((function t() {
                            var r, n, a, o;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = xe.U.read(Ae), t.prev = 1, !r || "false" === r) {
                                            t.next = 6;
                                            break
                                        }
                                        t.t0 = {
                                            currency: r
                                        }, t.next = 9;
                                        break;
                                    case 6:
                                        return t.next = 8, Ee(e);
                                    case 8:
                                        t.t0 = t.sent;
                                    case 9:
                                        n = t.t0, a = n.currency, o = void 0 === a ? Se : a, this.save({
                                            key: Ae,
                                            value: o
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
                        return (0, ie.A)(i().mark((function e() {
                            return i().wrap((function(e) {
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
            var De = function() {
                    var e = (0, ie.A)(i().mark((function e(t, r) {
                        var n, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, _e.Eg)("/bapi/asset/v2/public/asset-service/product/get-products", t || {}), e.next = 3, (0, se.get)(n, r);
                                case 3:
                                    return a = e.sent.data, e.abrupt("return", a);
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
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r, n, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : "", e.next = 3, (0, se.get)("".concat(t, "/bapi/asset/v1/public/asset-service/product/currency"));
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
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {}, e.prev = 1, e.next = 4, (0, se.get)("/bapi/asset/v1/public/asset-service/product/get-exchange-info?symbol=".concat(t));
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
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/asset/v1/public/asset-service/product/price-convert?".concat((0, _e.E2)(t)));
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.get)((0, _e.Eg)("/bapi/asset/v1/public/asset-service/product/get-exchange-info", t || {})));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e, t) {
                    var r = Object.keys(e);
                    return function(n) {
                        return r.reduce((function(r, a) {
                            return "undefined" !== typeof n[a] && (r[t ? e[a] : a] = n[a]), r
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
            const Re = {
                    name: "products",
                    state: {
                        loading: !0,
                        productMap: {},
                        hotProduct: [],
                        updateTime: Date.now()
                    },
                    reducers: {
                        updateState: de
                    },
                    effects: {
                        queryProduct: function(e) {
                            var t = e.includeEtf,
                                r = e.headers;
                            return (0, ie.A)(i().mark((function e() {
                                var n, a, o, s;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = !1, e.prev = 1, e.next = 4, De({
                                                includeEtf: t
                                            }, r);
                                        case 4:
                                            a = e.sent, o = Array.isArray(a) ? a : [], s = o.filter((function(e) {
                                                return !1 === e.sd
                                            })).reduce((function(e, t) {
                                                return t.s && (e[t.s] = Ce(t)), e
                                            }), {}), this.updateState({
                                                productMap: s,
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
                Fe = {
                    state: {},
                    name: "ssrStore",
                    reducers: {
                        updateState: de
                    }
                };
            var Ie = r("gZfF"),
                Le = (function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user/order-confirm-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user/order-confirm-statusV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/usermodule/update", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/usermodule/updateV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/apex/v1/private/apex/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/userlanguage/select");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/composite/v1/public/push-center/preference/language/all-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/composite/v1/private/push-center/preference/language/user-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/language/saveupdate", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/push-center/preference/language/save-user-language", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/inbox/config/language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/accounts/v1/private/account/user-personal-config/get-marketing-analytics-status");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/modify-marketing-analytics-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/query", t);
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
                }()),
                je = (function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateAvatar", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a, o, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.params, n = void 0 === r ? {} : r, a = t.opts, o = void 0 === a ? {} : a, e.next = 3, (0, se.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateNickName", n, o);
                                case 3:
                                    return s = e.sent, e.abrupt("return", s);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/apex/v1/private/apex/marketing/user/current/profile/avatar/default-list");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/user-setting/get-saved-preferences", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/user-setting/update-saved-preferences", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/user-setting/reset-saved-preferences", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("T3Fm")),
                Ne = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.get)("/bapi/composite/v1/private/market/site/symbol/userCollect/query");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/composite/v1/private/market/site/symbol/userCollect/update", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/apex/v1/private/apex/market/compliance/user-compliance-status");
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
                }()),
                He = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/apex/v1/private/apex/market/compliance/user-compliance-status");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || {});
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.platform, n = t.currency, a = je.o && xe.U.read("userPreferredCurrency"), e.prev = 3, e.next = 6, (0, se.get)("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check?platform=".concat(null === r || void 0 === r ? void 0 : r.toUpperCase()), {
                                        headers: {
                                            "bnc-currency": n || a || "USD_USD"
                                        }
                                    });
                                case 6:
                                    o = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), o = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 12:
                                    return e.abrupt("return", o);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.userId, n = t.bizCode, e.prev = 1, e.next = 4, (0, se.post)("/bapi/compliance/v1/friendly/compliance/market/user-confirm-mnl", {
                                        userId: r,
                                        bizCode: n
                                    });
                                case 4:
                                    return a = e.sent, e.abrupt("return", a || {});
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
                }(), "ASSET_CONVERSION_PREFERENCE"),
                Me = function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user-config/get", {
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
                Ue = function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configName, n = t.configType, e.next = 3, (0, se.post)("/bapi/accounts/v1/private/account/user-config/save", {
                                        configName: r,
                                        configType: n
                                    });
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
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
                Ve = (function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/withdrawal-whitelist", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
                                        configType: He
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
                Ge = (function() {
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configValue, e.next = 3, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
                                        configValue: r,
                                        configType: He
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
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, e.prev = 1, e.next = 4, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
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
                    var e = (0, ie.A)(i().mark((function e(t) {
                        var r, n, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, n = t.configValue, e.next = 3, (0, se.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
                                        configValue: n,
                                        configType: r
                                    });
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return (0, se.get)((0, _e.Eg)("/bapi/apex/v1/public/apex/marketing/web/querylangMappingByKey", {
                        key: e
                    }))
                }),
                We = r("tbM7"),
                Ke = r("BMJD"),
                qe = function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        return i().wrap((function(e) {
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
                var e = (0, ie.A)(i().mark((function e() {
                    var t, r, n = arguments;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, se.post)("/bapi/futures/v1/private/future/account/open", t);
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
                var e = (0, ie.A)(i().mark((function e() {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/agent/agentcode/get"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var ze = function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-basic"));
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
                $e = (function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, se.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-detail"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, se.get)("/bapi/accounts/v1/private/account/futures-account-exist");
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
                }(), r("NsjG")),
                Je = "nativeCurrency",
                Ye = function() {
                    var e = (0, ie.A)(i().mark((function e() {
                        var t, r, n, a, o, s, c, u, l;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = {
                                        nicknameQueryType: "NORMAL"
                                    }, e.t0 = d.A, e.next = 5, Promise.all([Le(t), Ne()]);
                                case 5:
                                    return e.t1 = e.sent, r = (0, e.t0)(e.t1, 2), n = r[0], a = r[1], o = (null === n || void 0 === n ? void 0 : n.data) || {}, s = o.avatarUrl, c = o.nickname, u = (a || {}).userComplianceStatus, l = void 0 === u ? {} : u, e.abrupt("return", (0, ge.A)((0, pe.A)({}, l), {
                                        avatarUrl: s,
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
                    updateState: de,
                    updateCurrentFiat: function(e, t) {
                        return !window.__RUN_BY_ELECTRON__ && e.loginStatus.isLoggedIn && Ue({
                            configType: Je,
                            configName: t
                        }), (0, ge.A)((0, pe.A)({}, e), {
                            userPreferredCurrency: {
                                configName: t
                            }
                        })
                    }
                },
                effects: {
                    queryLanguage: function(e) {
                        return (0, ie.A)(i().mark((function t() {
                            var r, n;
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Ge(e);
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
                        return (0, ie.A)(i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, (0, We.CY)();
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = (0, pe.A)({}, r.fiatCurrency), e.next = 4, Pe();
                                    case 4:
                                        n = e.sent, a = n.reduce((function(e, r) {
                                            var n = r.pair,
                                                a = r.rate,
                                                o = r.symbol,
                                                i = (0, d.A)(n.split("_"), 2),
                                                s = i[0];
                                            return "USD" === i[1] && (t[s] = {
                                                pair: n,
                                                rate: a,
                                                symbol: o
                                            }, e.push({
                                                name: s,
                                                pair: n,
                                                rate: a,
                                                symbol: o
                                            })), e
                                        }), []).concat({
                                            name: "USD",
                                            pair: "USD_USD",
                                            rate: 1,
                                            symbol: "$"
                                        }), this.updateState({
                                            fiatCurrency: t,
                                            fiatCurrencyInfo: a,
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.t0 = d.A, e.next = 6, Promise.all([Ye(), (0, Ke.Tc)()]);
                                    case 6:
                                        e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), n = t[0], a = t[1], this.updateState({
                                            userInfo: (0, ge.A)((0, pe.A)({}, a, n), {
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a, o, s;
                            return i().wrap((function(e) {
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
                                        return e.prev = 4, e.next = 7, Me();
                                    case 7:
                                        t = e.sent, n = 0;
                                    case 9:
                                        if (!(n < t.length)) {
                                            e.next = 17;
                                            break
                                        }
                                        if (a = t[n] || {}, o = a.configType, s = a.configName, o !== Je) {
                                            e.next = 14;
                                            break
                                        }
                                        return this.updateState({
                                            userPreferredCurrency: {
                                                configName: s
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
                        return (0, ie.A)(i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, t = $e.IG.getItem("userQuoteAsset", "BTC"), this.updateState({
                                            userQuoteAsset: t
                                        }), e.next = 7, Ve();
                                    case 7:
                                        n = e.sent, (a = null === n || void 0 === n ? void 0 : n.configValue) && (this.updateState({
                                            userQuoteAsset: a
                                        }), $e.IG.setItem("userQuoteAsset", a)), e.next = 14;
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a, o, s;
                            return i().wrap((function(e) {
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
                                        if (e.t0 = e.sent, e.t0) {
                                            e.next = 8;
                                            break
                                        }
                                        e.t0 = {};
                                    case 8:
                                        t = e.t0.data, a = (n = t || {}).enable, o = n.isRetailUser, s = (0, Ie.A)(n, ["enable", "isRetailUser"]), this.updateState({
                                            pmAccountInfo: (0, pe.A)({
                                                isGeneralAccount: !a,
                                                isOldPMAccount: a && !o,
                                                isNewPMAccount: a && o
                                            }, s)
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
                        return (0, ie.A)(i().mark((function e() {
                            var t, n, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.loginStatus.isLoggedIn) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (t = xe.U.read("BNC-Location"), e.prev = 3, !t) {
                                            e.next = 8;
                                            break
                                        }
                                        this.updateState({
                                            userBncLocation: t
                                        }), e.next = 14;
                                        break;
                                    case 8:
                                        return e.next = 10, (0, se.get)("/bapi/accounts/v1/private/account/compliance/getBncLocation");
                                    case 10:
                                        n = e.sent.data, a = (n || {}).bncLocation, this.updateState({
                                            userBncLocation: a
                                        }), xe.U.write("BNC-Location", a);
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
            var Ze, Qe = "favorites",
                et = "isHideSmallBalance",
                tt = "maskedBalance",
                rt = function(e, t) {
                    switch (e) {
                        case Qe:
                            return Array.isArray(t) ? t : [];
                        case tt:
                        case et:
                            return t && "false" !== t;
                        default:
                            return t
                    }
                },
                nt = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!fe(t)) return e;
                        var r = $e.IG.getItem(t, "");
                        return (0, ge.A)((0, pe.A)({}, e), (0, ke.A)({}, t, rt(t, r)))
                    }), e || {})
                };
            he((function(e, t) {
                if ("persistSetting" in t) {
                    var r = [tt, et, Qe];
                    e.persistSetting = nt(e.persistSetting, r)
                }
                return e
            }));
            const at = {
                name: "persistSetting",
                state: (Ze = {}, (0, ke.A)(Ze, Qe, []), (0, ke.A)(Ze, et, !1), (0, ke.A)(Ze, tt, !1), Ze),
                reducers: {
                    updateState: de,
                    batchLoadSetting: function(e, t) {
                        return nt(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!fe(t.key)) return e;
                            var r = rt(t.key, t.value);
                            return $e.IG.setItem(t.key, r), (0, ge.A)((0, pe.A)({}, e), (0, ke.A)({}, t.key, r))
                        }), e || {})
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return nt(e, [r])
                    }
                }
            };
            var ot = r("XGcN"),
                it = function(e) {
                    var t = e.name,
                        r = e.redux,
                        n = void 0 === r ? {} : r,
                        a = e.plugins,
                        o = void 0 === a ? [] : a,
                        i = e.initState,
                        s = void 0 === i ? {} : i,
                        c = e.initModel,
                        u = void 0 === c ? {} : c,
                        l = function(e, t) {
                            return ve.reduce((function(e, r) {
                                var n = r(e, t);
                                return void 0 === n ? e : n
                            }), e || {})
                        }(s, u),
                        p = Object.keys(u).reduce((function(e, t) {
                            var r = l[t],
                                n = u[t],
                                a = n.state,
                                o = (0, Ie.A)(n, ["state"]),
                                i = "object" === typeof r && !Array.isArray(a),
                                s = r && i ? (0, pe.A)({}, a, r) : r || a;
                            return e[t] = (0, ge.A)((0, pe.A)({}, o), {
                                state: s
                            }), e
                        }), {});
                    return (0, ot.init)({
                        name: t,
                        models: p,
                        plugins: o,
                        redux: n
                    })
                },
                st = {
                    global: we,
                    cookies: Be,
                    products: Re,
                    ssrStore: Fe,
                    userCenter: Xe,
                    persistSetting: at,
                    musesGlobal: {
                        state: {
                            locale: "en",
                            theme: "light",
                            originTheme: r("wRFv").KS.INHERIT,
                            withFooter: !0,
                            withHeader: !0,
                            hideHeader: !1,
                            hideFooter: !1,
                            renderError: !1,
                            metaData: {
                                title: "",
                                keywords: "",
                                description: "",
                                ogImage: "",
                                brand: "Binance",
                                url: "https://www.binance.com",
                                allowSearchIndex: !1
                            }
                        },
                        name: "musesGlobal",
                        reducers: {
                            updateState: function(e, t) {
                                return (0, pe.A)({}, e, t)
                            },
                            updateMeta: function(e, t) {
                                return (0, ge.A)((0, pe.A)({}, e), {
                                    metaData: (0, pe.A)({}, e.metaData, t)
                                })
                            }
                        }
                    }
                },
                ct = r("JEU8"),
                ut = function(e) {
                    var t = e.initialState,
                        r = e.ctx;
                    return function() {
                        return e = t, Object.assign(Object.assign({}, r), {
                            isServer: !1
                        }), it({
                            name: "MUSES-UI",
                            initState: e,
                            initModel: st
                        });
                        var e
                    }()
                },
                lt = function(e, t) {
                    var r = function(r) {
                        return x().createElement(ct.Kq, {
                            store: t.redux
                        }, x().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "ReduxAppWrapper", r
                };
            var pt = r("tKUM"),
                ft = r("ztXJ"),
                dt = function(e, t) {
                    var r = function(r) {
                        var n = ft.s.Provider;
                        return x().createElement(n, {
                            value: t.lang
                        }, x().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "LanguageWrapper", r
                };
            const vt = (0, c.l1)({
                appContext: function(e, t) {
                    t.req;
                    e.lang = (0, pt.getLanguage)()
                },
                appComponent: function(e, t) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                        return i().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", dt(e, t));
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
            var ht = r("YvF5"),
                gt = r("sshP"),
                yt = r("rsqs");
            r("wcIl");
            var mt = r("qjHo");

            function bt() {
                var e = (0, v.PC)()[mt.x];
                if (e) return e
            }
            var wt = !1,
                xt = function(e, t, r) {
                    var n = r.i18n.namespaces || [],
                        a = function(r) {
                            var a = (0, d.A)((0, w.useReducer)((function(e) {
                                    return e + 1
                                }), 0), 2),
                                o = a[0],
                                c = a[1],
                                u = (0, w.useRef)(!0),
                                l = function() {
                                    u.current && c()
                                };
                            (0, w.useEffect)((function() {
                                var e = t.i18n.i18nextIns;
                                return e.store.on("added", l),
                                    function() {
                                        e.store.off("added", l)
                                    }
                            }), []), (0, w.useEffect)((function() {
                                var e, r = (0, oe.K)("i18nNamespaces", []);
                                r.length && !wt && (e = r, (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                                    var a, o, c, p, f, d, h, g, y, m, b, w;
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (a = (0, v.PC)()[mt.x], o = (0, oe.K)("i18nRenderAsNsKey", !1), !a) {
                                                    r.next = 25;
                                                    break
                                                }
                                                return c = t.lang, r.next = 5, Promise.all(e.map((function(e) {
                                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                                        var r, s, u, l;
                                                        return i().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return r = n.find((function(t) {
                                                                        var r = t.split("@");
                                                                        return r[r.length - 1] === e
                                                                    })), r && (u = r.split("@")).length > 1 && (s = u[0]), t.prev = 3, t.next = 6, (0, ht.A)({
                                                                        basePath: a,
                                                                        lng: c,
                                                                        ns: e,
                                                                        customPath: s,
                                                                        enable2NsKey: o
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
                                                for (p = r.sent, u.current = !1, f = !0, d = !1, h = void 0, r.prev = 8, g = p[Symbol.iterator](); !(f = (y = g.next()).done); f = !0) m = y.value, b = m.ns, (w = m.resourceBundle) && Object.keys(w).length ? t.i18n.i18nextIns.addResourceBundle(c, b, w, !1, !0) : console.log("Resource bundle is empty", c, b);
                                                r.next = 16;
                                                break;
                                            case 12:
                                                r.prev = 12, r.t0 = r.catch(8), d = !0, h = r.t0;
                                            case 16:
                                                r.prev = 16, r.prev = 17, f || null == g.return || g.return();
                                            case 19:
                                                if (r.prev = 19, !d) {
                                                    r.next = 22;
                                                    break
                                                }
                                                throw h;
                                            case 22:
                                                return r.finish(19);
                                            case 23:
                                                return r.finish(16);
                                            case 24:
                                                u.current = !0, l();
                                            case 25:
                                                wt = !0;
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
                            var p = (0, w.useMemo)((function() {
                                return {
                                    i18n: t.i18n,
                                    __count__: o
                                }
                            }), [o]);
                            return x().createElement(gt.y.Provider, {
                                value: p
                            }, x().createElement(e, Object.assign({}, r)))
                        };
                    return a.displayName = "I18nAppWrapper", a
                };
            const _t = _bne.device;
            const Et = function(e) {
                return (0, c.yO)({})
            };
            var kt = r("6FIE"),
                St = r("iyUK");
            var At, Ot = !1;
            const Tt = _bne.utils,
                Bt = (0, w.createContext)({});
            const Dt = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    n = e.level2Domain,
                    a = e.children,
                    o = (0, s.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return x().createElement(Bt.Provider, (0, s.__assign)({
                    value: {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: n
                    },
                    children: a
                }, o))
            };

            function Pt() {
                throw new Error("@desktop/runtime module is only available in the Binance desktop environment. Please check if it is being used in a server-side rendering (SSR) environment.")
            }
            const Ct = {
                    isRunningInDesktop: !1,
                    isRunningInDesktopBrowser: !1,
                    desktop: {
                        get version() {
                            return Pt()
                        },
                        get env() {
                            return Pt()
                        },
                        closeCurrentWindow: Pt,
                        getSettings: Pt,
                        setSettings: Pt,
                        openExternal: Pt,
                        openWindow: Pt,
                        showNotification: Pt
                    },
                    app: {
                        getCurrent: Pt,
                        checkForUpdates: Pt
                    },
                    user: {
                        setTemporaryToken: Pt,
                        login: Pt,
                        logout: Pt,
                        getUser: Pt
                    },
                    trading: {
                        getCurrentLayout: Pt
                    },
                    env: {
                        common: {}
                    },
                    bridge: {
                        desktopBridge: {},
                        setBridge: () => {}
                    },
                    on: () => {},
                    off: Pt,
                    emit: Pt,
                    all: Pt
                },
                Rt = window.__DESKTOP_RUNTIME_API__ ? window.__DESKTOP_RUNTIME_API__ : Ct,
                Ft = Rt.isRunningInDesktop,
                It = Rt.isRunningInDesktopBrowser;
            Rt.desktop, Rt.app, Rt.user, Rt.trading, Rt.env, Rt.on, Rt.off, Rt.emit, Rt.bridge;
            var Lt = function(e, t) {
                var r = function(r) {
                    return t.ssrData ? x().createElement(Dt, Object.assign({}, t.ssrData), x().createElement(e, Object.assign({}, r))) : (console.log("[@pika/plugin-data-provider] ssrData is not found in appContext"), x().createElement(e, Object.assign({}, r)))
                };
                return r.displayName = "DataProviderWrapper", r
            };

            function jt() {
                return Ft && !It ? {
                    lang: (0, pt.getLanguage)(),
                    pathPrefix: (0, pt.getPathPrefix)(),
                    level2Domain: (0, Tt.getLevelDomain)(2),
                    isRegionMode: !1
                } : (0, oe.K)("ssrData")
            }
            const Nt = (0, c.yO)({
                appContext: function(e, t) {
                    t.req;
                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.ssrData || (e.ssrData = jt());
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                },
                appComponent: function(e, t) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                        return i().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", Lt(e, t));
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))
                }
            });
            var Ht = r("qK3R"),
                Mt = function(e) {
                    var t = !1;
                    return function() {
                        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                        t || (e.apply(void 0, (0, b.A)(n)), t = !0)
                    }
                },
                Ut = !0,
                Vt = -1,
                Gt = function(e) {
                    var t = T,
                        n = t.PIKA_CLS,
                        a = t.PIKA_FCP,
                        o = t.PIKA_FID,
                        c = t.PIKA_INP,
                        u = t.PIKA_LCP,
                        l = t.PIKA_TTFB,
                        p = (0, Ht.trace)(O);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            f = (0, _.K7)(),
                            d = f.matches,
                            v = (0, w.useMemo)((function() {
                                return D(d)
                            }), [d]);
                        (0, w.useEffect)((function() {
                            R({
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
                                    v = e.onTTFB;
                                t(Mt((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = u.name, t.next = 4, y({
                                                        value: e.value
                                                    }, {
                                                        lcp: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop(), setTimeout((function() {
                                                        Ut = !1
                                                    }), 2e3);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), r(Mt((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = a.name, t.next = 4, y({
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
                                }))), n(Mt((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = o.name, t.next = 4, y({
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
                                }))), f(Mt((function(e) {
                                    Ut && e.value > Vt && (Vt = e.value)
                                }))), d(Mt((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = c.name, t.next = 4, y({
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
                                }))), v(Mt((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = l.name, t.next = 4, y({
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
                        }), []), (0, w.useEffect)((function() {
                            var e = function() {
                                "hidden" === document.visibilityState && (g(), h())
                            };
                            return document.addEventListener("visibilitychange", e),
                                function() {
                                    return document.removeEventListener("visibilitychange", e)
                                }
                        }), []);
                        var h = function() {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function e() {
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.t0 = Vt >= 0, !e.t0) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.t1 = p, e.t2 = n.name, e.next = 6, y({
                                                    value: Vt
                                                }, {
                                                    cls: Vt
                                                });
                                            case 6:
                                                e.t3 = e.sent, e.t1.traceChild.call(e.t1, e.t2, e.t3).stop(), Vt = -1;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            },
                            g = (0, w.useCallback)(Mt((function() {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function e() {
                                    var t, r, n, a, o;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (a = null === (n = null === (r = null === (t = window.performance) || void 0 === t ? void 0 : t.getEntriesByType) || void 0 === r ? void 0 : r.call(t, "navigation")) || void 0 === n ? void 0 : n[0]) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return o = {
                                                    dns: a.domainLookupEnd - a.domainLookupStart,
                                                    tcp: a.connectEnd - a.connectStart,
                                                    tls: a.requestStart - a.secureConnectionStart,
                                                    ttfb: a.responseStart - a.requestStart,
                                                    ddt: a.responseEnd - a.responseStart,
                                                    dpt: a.domInteractive - a.responseStart,
                                                    ldn: a.domComplete - a.startTime,
                                                    drt: a.loadEventStart - a.domInteractive
                                                }, Object.keys(o).forEach((function(e) {
                                                    o[e] <= 0 && delete o[e]
                                                })), o.t = "PAGE", e.t0 = p, e.next = 10, y({}, o);
                                            case 10:
                                                e.t1 = e.sent, e.t0.traceChild.call(e.t0, "PAGE", e.t1).stop();
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            })), []),
                            y = function(e, t) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", Object.assign(Object.assign({}, e), {
                                                    __rootAttrs: Object.assign(t, {
                                                        ts: Date.now(),
                                                        path: v
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
                        return x().createElement(e, Object.assign({}, t))
                    }
                };
            var Wt = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, _.rd)();
                    return (0, w.useEffect)((function() {
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
                    }), []), x().createElement(e, Object.assign({}, t))
                }
            };
            const Kt = (0, c.yO)({
                appComponent: function(e) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                        key: "loadGAScript",
                                        data: {}
                                    }), Wt(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            (0, _bne.utm.writeUTMtoCookie)();
            const qt = (0, c.yO)({});
            var zt = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return w.useEffect((function() {
                        R({
                            remainingTime: 49,
                            timeout: 1e4
                        }).then((function() {
                            return Promise.all([r.e(257), r.e(317)]).then(r.bind(r, "r/AF"))
                        })).then((function(e) {
                            (0, e.syncLocalDfp)({
                                t: "binance",
                                domain: ""
                            })
                        })).catch((function(e) {
                            console.error("[Pika] dynamic load failed", e)
                        }))
                    }), []), w.createElement(e, Object.assign({}, t))
                }
            };
            const $t = (0, c.yO)({
                appComponent: function(e) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", zt(e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            var Jt, Yt = r("uHCZ"),
                Xt = r("NoXm"),
                Zt = r("oVQP"),
                Qt = new Map,
                er = r("MEAY"),
                tr = {
                    dark: er.zd,
                    light: er.bK
                },
                rr = "theme",
                nr = "light",
                ar = nr,
                or = ar;
            or = (null !== (Jt = I(rr)) && void 0 !== Jt ? Jt : ar).split("_")[0];
            var ir = function(e, t, r) {
                return function() {
                    var n, a = (0, d.A)((0, Xt.useCacheState)(rr, or), 1)[0],
                        o = null === r || void 0 === r ? void 0 : r.detectColorMode,
                        i = null === r || void 0 === r ? void 0 : r.useNewHeaderFooter,
                        c = (null === t || void 0 === t ? void 0 : t.uikit) || {},
                        u = c.color,
                        l = c.isRedUpGreenDown,
                        p = c.theme,
                        f = null === (n = null === t || void 0 === t ? void 0 : t.ua) || void 0 === n ? void 0 : n.platform.isMobile,
                        v = i ? a : p,
                        h = w.useMemo((function() {
                            var e = v === nr ? Zt.BB : Zt.XT,
                                t = o ? function(e) {
                                    var t = e.theme,
                                        r = e.isRedUpGreenDown,
                                        n = e.colorMode,
                                        a = ["fresh" !== n && n ? n : "", "true" === r ? "reverse" : ""].filter(Boolean);
                                    return tr[t][a.join("-")] || {}
                                }({
                                    theme: v,
                                    isRedUpGreenDown: l,
                                    colorMode: u
                                }) : {};
                            f && (e.mobile && (t = Object.assign(Object.assign({}, t), e.mobile)), t.mobile && (t = Object.assign(Object.assign({}, t), t.mobile)));
                            var r = Object.assign(Object.assign({}, e), t);
                            r.mobile;
                            return function(e) {
                                var t = JSON.stringify(e);
                                if (Qt.has(t)) return Qt.get(t);
                                var r = e.hasOwnProperty("BasicBg"),
                                    n = e.hasOwnProperty("PrimaryText"),
                                    a = "body { ".concat(Object.entries(e).map((function(e) {
                                        var t = (0, d.A)(e, 2),
                                            a = t[0],
                                            o = t[1];
                                        return "BasicBg" === a && r ? "--color-".concat(a, ": ").concat(o, "; background-color: var(--color-").concat(a, ");") : "PrimaryText" === a && n ? "--color-".concat(a, ": ").concat(o, "; color: var(--color-").concat(a, ");") : "--color-".concat(a, ": ").concat(o, ";")
                                    })).join(" "), " }");
                                return Qt.set(t, a), a
                            }((0, s.__rest)(r, ["mobile"]))
                        }), [v, f, u, l, o]);
                    return w.createElement(w.Fragment, null, w.createElement(Yt.A, null, w.createElement("style", {
                        id: "webstudio-universal-uikit-colors"
                    }, h)), w.createElement(e, null))
                }
            };
            var sr = {
                    plugin: function() {
                        return (0, c.Uu)({
                            appComponent: function(e, t) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", lt(e, t));
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appContext: function(e) {
                                var t;
                                e.redux || (t = (0, oe.K)("redux", t), e.redux = ut({
                                    initialState: t,
                                    ctx: e
                                }))
                            }
                        }, {
                            name: "@pika/plugin-redux"
                        })
                    }
                },
                cr = {
                    plugin: function(e) {
                        return (0, c.yO)({
                            appComponent: function(t, r) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function n() {
                                    return i().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", xt(t, r, e));
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            },
                            appContext: function(t, r) {
                                var n = r.req,
                                    a = r.router;
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                                    var o, c, u, l, p, f, v, h, g;
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = t.lang, c = e.i18n, u = c.namespaces, l = void 0 === u ? [] : u, p = c.keySeparator, f = c.nsSeparator, v = bt(), t.i18nBasePath = v, h = (0, gt.T)({
                                                        namespaces: l,
                                                        basePath: v,
                                                        keySeparator: p,
                                                        nsSeparator: f
                                                    }), t.i18n = h, !a.beforeResolve) {
                                                    r.next = 9;
                                                    break
                                                }
                                                t.i18nPromise = new Promise((function(e) {
                                                    g = e
                                                })), a.beforeResolve((function(e, r, a) {
                                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function e() {
                                                        var r, s, c, u, l, p;
                                                        return i().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    e.prev = 0, e.next = 11;
                                                                    break;
                                                                case 7:
                                                                    s = e.sent, t.collectionKeys = r, s && ((0, yt.pu)(n) ? (c = s[o], u = (0, yt.Zu)(c), t.i18nResource = (0, ke.A)({}, o, u), Object.entries(u).forEach((function(e) {
                                                                        var t = (0, d.A)(e, 2),
                                                                            r = t[0],
                                                                            n = t[1];
                                                                        h.i18nextIns.addResources(o, r, n)
                                                                    })), t.i18nRenderAsNsKey = !0) : t.i18nResource = s), e.next = 16;
                                                                    break;
                                                                case 11:
                                                                    if (h.i18nextIns.isInitialized) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    return (l = (0, oe.K)("i18nResource")) && !l[o] && ((p = Object.keys(l)).length ? l[o] = l[p[0]] : l[o] = {}), e.next = 16, h.init({
                                                                        lng: o,
                                                                        resources: l
                                                                    });
                                                                case 16:
                                                                    e.next = 21;
                                                                    break;
                                                                case 18:
                                                                    e.prev = 18, e.t0 = e.catch(0), console.error("i18n runtime error", e.t0);
                                                                case 21:
                                                                    g(), a();
                                                                case 22:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 18]
                                                        ])
                                                    })))
                                                })), r.next = 13;
                                                break;
                                            case 9:
                                                if (r.t0 = h.i18nextIns.isInitialized, r.t0) {
                                                    r.next = 13;
                                                    break
                                                }
                                                return r.next = 13, h.init({
                                                    lng: o
                                                });
                                            case 13:
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
                    options: '{"i18n":{"namespaces":["Muses"]},"i18nBasePublic":"https://static.devfdg.net/api/i18n/-/web/cms"}'
                },
                ur = {
                    plugin: function() {
                        return (0, c.yO)({
                            appContext: function(e, t) {
                                t.req;
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                    var r;
                                    return i().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = "desktop", "undefined" !== typeof navigator && navigator.userAgent && (r = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent), e.ua = (0, _t.getDevice)(r);
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
                lr = {
                    plugin: function() {
                        return (0, c.yO)({
                            init: function() {
                                var e = this;
                                if (!Ot) {
                                    Ot = !0;
                                    var t = function() {
                                        var e = (0, v.PC)().STATIC_HOST;
                                        return e ? {
                                            staticHost: e
                                        } : (console.error("[@pika/plugin-bids-interceptor] STATIC_HOST is not defined in runtimeConfig"), null)
                                    }();
                                    t && (0, kt.addResponseInterceptor)((function(n) {
                                        for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) o[c - 1] = arguments[c];
                                        return (0, s.__awaiter)(e, void 0, void 0, i().mark((function e() {
                                            var a;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, (0, St.Wv)(n);
                                                    case 2:
                                                        if (!e.sent) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        if (!At) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 6, At.apply(void 0, [n].concat((0, b.A)(o)));
                                                    case 6:
                                                    case 15:
                                                        return e.abrupt("return", e.sent);
                                                    case 7:
                                                        return e.next = 9, R();
                                                    case 9:
                                                        return e.next = 11, r.e(97).then(r.bind(r, "6gbb"));
                                                    case 11:
                                                        return a = e.sent, At = a.BIDSInterceptor(t), e.next = 15, At.apply(void 0, [n].concat((0, b.A)(o)));
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
                pr = {
                    plugin: function() {
                        return (0, c.yO)({
                            appComponent: function(e) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                    var r, n;
                                    return i().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = (0, v.PC)(), (n = r.STATIC_HOST) && (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
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
                fr = {
                    plugin: function(e) {
                        return (0, c.yO)({
                            appContext: function(t, r) {
                                var n = r.req;
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function r() {
                                    var a, o, s, c;
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (null === e || void 0 === e ? void 0 : e.injectColorsInHead) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 2:
                                                null === n || void 0 === n ? void 0 : n.cookies, null === n || void 0 === n ? void 0 : n.headers, c = (0, oe.K)("_uikit", {
                                                    theme: or,
                                                    color: I("color"),
                                                    isRedUpGreenDown: I("isRedUpGreenDown")
                                                }), a = c.theme, (null === e || void 0 === e ? void 0 : e.detectColorMode) && (o = c.color, s = c.isRedUpGreenDown), a && !L(a) && (a = ar), o && !L(o) && (o = void 0), s && !L(s) && (s = void 0), t.uikit = Object.assign(Object.assign({}, t.uikit), {
                                                    theme: a,
                                                    color: o,
                                                    isRedUpGreenDown: s
                                                });
                                            case 6:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appComponent: function(t, r) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function n() {
                                    return i().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", (null === e || void 0 === e ? void 0 : e.injectColorsInHead) ? ir(t, r, e) : t);
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    },
                    options: '{"injectColorsInHead":true}'
                },
                dr = {
                    plugin0: {
                        plugin: n.A
                    },
                    plugin1: {
                        plugin: a.A
                    },
                    plugin2: {
                        plugin: m,
                        options: '{"projectName":"muses-ui"}'
                    },
                    plugin3: {
                        plugin: X,
                        options: '{"serverInjectSDK":true,"packageName":"muses-ui","sentryReleaseVersion":"20250416-c60b0be2-228606","sampleRate":0.01,"pikaVersion":"0.3.58","ssr":true,"analyticsId":"muses-ui,Edward L,clluvyuw88650710t48kfgjdran","appTarget":"web"}'
                    },
                    plugin4: {
                        plugin: function() {
                            return (0, c.yO)({
                                appComponent: function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.abrupt("return", Q(e));
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
                        plugin: ae
                    },
                    plugin6: sr,
                    plugin7: {
                        plugin: vt,
                        options: '{"addHtmlAttr":true}'
                    },
                    plugin8: cr,
                    plugin9: {
                        plugin: function(e) {
                            return (0, c.yO)({
                                appContext: function(e, t) {
                                    t.router;
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function e() {
                                        return i().wrap((function(e) {
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
                    plugin10: ur,
                    plugin11: {
                        plugin: Et,
                        options: '{"reactAndReactDomSuffix":"production.min.16.14.0","appTarget":"web"}'
                    },
                    plugin12: lr,
                    plugin13: {
                        plugin: Nt
                    },
                    plugin14: {
                        plugin: function(e) {
                            return (0, c.yO)({
                                appComponent: function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.abrupt("return", Gt(e));
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
                    plugin15: {
                        plugin: Kt,
                        options: '{"queryParamsFilter":[]}'
                    },
                    plugin16: {
                        plugin: qt
                    },
                    plugin17: pr,
                    plugin18: {
                        plugin: $t
                    },
                    plugin19: fr
                }
        },
        etBY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = {
                SITE_HOST: "https://www.devfdg.net",
                STATIC_HOST: "https://static.devfdg.net",
                STATIC_HOST_PRIVATE: "https://static.devfdg.net",
                STATIC_HOST_PUBLIC: "https://static.devfdg.net",
                STATIC_HOST_SHARE: "https://static.devfdg.net",
                I18N_BASE_PRIVATE: "https://static.devfdg.net/api/i18n/-/web/cms",
                I18N_BASE_PUBLIC: "https://static.devfdg.net/api/i18n/-/web/cms",
                API_HOST: "https://www.qa1fdg.net",
                API_HOST_PRIVATE: "http://internal-tk-qa-binance-gateway-alb-1643572301.ap-northeast-1.elb.amazonaws.com:9015",
                CACHE_PROXY_HOST: "",
                CMS_API_HOST: "https://dev-platform.qa1fdg.net",
                INBOX_STREAM_HOST: "wss://bstream.qa1fdg.net:9443",
                MARKET_STREAM_HOST: "wss://nbstream.qa1fdg.net",
                GOOGLE_CLIENT_ID: "521245506876-3752r165m18kni57p924tqh2oquk4n1t.apps.googleusercontent.com",
                ACCELERATE_DEFAULT_DOMAIN: "api.yshyqxx.com",
                ACCELERATE_ENBLED_SITES: "www.binancezh.com,www.binancezh.net",
                ACCELERATE_AVAILABLE_DOMAIN: "api.yshyqxx.com,api.hanqiweb.cloud",
                DEPLOYMENT_ENV: "gray",
                COMMIT_HEAD: "c60b0be2c6293fa6406afa00c7a1a21e4c2e3e25"
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
                    return Promise.all([r.e(921), r.e(98), r.e(257), r.e(554), r.e(608)]).then(r.bind(r, "ZUen"))
                },
                __resolveWeak__: function() {
                    return ["ZUen"]
                },
                path: "/",
                id: "c8c2",
                children: [{
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(921), r.e(257), r.e(554), r.e(957)]).then(r.bind(r, "5xuc"))
                    },
                    __resolveWeak__: function() {
                        return ["5xuc"]
                    },
                    path: ":router/:path",
                    id: "23d3"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(921), r.e(257), r.e(554), r.e(533)]).then(r.bind(r, "dC8N"))
                    },
                    __resolveWeak__: function() {
                        return ["dC8N"]
                    },
                    path: "*",
                    id: "7a15"
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
            })
        },
        uXiF: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                init: () => h
            });
            var n = r("sViW"),
                a = r("Pz56"),
                o = r.n(a),
                i = r("VA12"),
                s = r("a59x"),
                c = !0,
                u = {
                    "uk-UA": "ua",
                    "en-AU": "au",
                    "en-NG": "ng",
                    "pt-BR": "br",
                    "en-IN": "in",
                    "zh-CN": "cn",
                    "zh-TW": "tw",
                    vi: "vn",
                    kr: "ko"
                },
                l = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n, a, p, f, d, v, h, g, y;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.country, n = t.lng, a = void 0 === n ? "en" : n, p = t.version, f = void 0 === p ? "" : p, e.prev = 1, v = (0, s.Eg)("/bapi/apex/v1/public/apex/marketing/config/international/web/query", {
                                        gary: c ? "false" : "true",
                                        country: [r, u[a] || a, f].filter(Boolean).join("-")
                                    }), e.next = 6, (0, i.get)(v);
                                case 6:
                                    if (h = e.sent, !("string" === typeof(g = null === h || void 0 === h || null === (d = h.data) || void 0 === d ? void 0 : d.webConfigs) && g.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", h);
                                case 10:
                                    throw new Error("fallback ".concat(a));
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), "en" === a && !f) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, l({
                                        country: r,
                                        lng: f ? a : "en"
                                    });
                                case 18:
                                    if (y = e.sent, !(Object.keys(y).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", y);
                                case 21:
                                    throw new Error("get\u3010".concat(r, "-").concat(a, "\u3011julia international config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n, a, l, f, d, v, h, g, y;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.country, n = t.lng, a = void 0 === n ? "en" : n, l = t.version, f = void 0 === l ? "" : l, e.prev = 1, v = (0, s.Eg)("/bapi/apex/v1/public/apex/marketing/config/international/web/query", {
                                        gary: c ? "false" : "true",
                                        country: [r, u[a] || a, f].filter(Boolean).join("-")
                                    }), e.next = 6, (0, i.get)(v);
                                case 6:
                                    if (h = e.sent, !("string" === typeof(g = null === h || void 0 === h || null === (d = h.data) || void 0 === d ? void 0 : d.webConfigs) && g.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", h);
                                case 10:
                                    throw new Error("fallback ".concat(a));
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), "en" === a && !f) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, p({
                                        country: r,
                                        lng: f ? a : "en"
                                    });
                                case 18:
                                    if (y = e.sent, !(Object.keys(y).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", y);
                                case 21:
                                    throw new Error("get\u3010".concat(r, "-").concat(a, "\u3011julia international config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n, a, u, l, p, d, v, h, g;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.projectId, n = t.lng, a = void 0 === n ? "en" : n, u = t.fallback, l = void 0 !== u && u, e.prev = 1, d = (0, s.Eg)("/bapi/apex/v1/public/apex/marketing/config/web/query", {
                                        projectId: r,
                                        gray: c ? "false" : "true"
                                    }), e.next = 6, (0, i.get)(d, {
                                        headers: {
                                            lang: a
                                        }
                                    });
                                case 6:
                                    if (v = e.sent, !("string" === typeof(h = null === v || void 0 === v || null === (p = v.data) || void 0 === p ? void 0 : p.webConfigs) && h.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", h);
                                case 10:
                                    throw new Error("fallback en");
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), !l || "en" === a) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, f({
                                        projectId: r
                                    });
                                case 18:
                                    if (g = e.sent, !(Object.keys(g).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", g);
                                case 21:
                                    throw new Error("get\u3010".concat(r, "-").concat(a, "\u3011julia config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var r, n, a, s, c, l, p, f, v, h, g, y;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.project, n = t.locale, a = void 0 === n ? "en" : n, s = t.isGray, c = void 0 !== s && s, l = t.fallback, p = void 0 === l || l, e.prev = 1, v = "/bapi/apex/v1/public/apex/marketing/config/international/web/query?gary=".concat(c, "&country=future_header_").concat(r, "-").concat(u[a] || a), e.next = 6, (0, i.get)(v);
                                case 6:
                                    if (h = e.sent, !("string" === typeof(g = null === h || void 0 === h || null === (f = h.data) || void 0 === f ? void 0 : f.webConfigs) && g.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", JSON.parse(g));
                                case 10:
                                    throw new Error("fallback en");
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), !p || "en" === a) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, d({
                                        project: r,
                                        locale: "en",
                                        isGray: c,
                                        fallback: !1
                                    });
                                case 18:
                                    if (y = e.sent, !(Object.keys(y).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", y);
                                case 21:
                                    throw new Error("queryFutureHeaderConfig ".concat(r, "-").concat(a, "\u3011julia config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = r("wRFv"),
                h = function() {
                    var e;
                    e = v.cp ? "gray" : v.CX, c = "gray" !== e, console.log("DEPLOYMENT_ENV", e)
                }
        },
        wRFv: (e, t, r) => {
            "use strict";
            r.d(t, {
                $v: () => z,
                CX: () => P,
                EJ: () => Y,
                Gf: () => h,
                HN: () => y,
                K5: () => d,
                KS: () => n,
                Ki: () => U,
                LD: () => C,
                MX: () => M,
                NX: () => K,
                QX: () => $,
                SQ: () => q,
                YA: () => X,
                _t: () => G,
                cp: () => p,
                dM: () => F,
                gx: () => J,
                sr: () => N,
                ur: () => v,
                x7: () => g,
                xS: () => W
            });
            var n, a = r("tEf9"),
                o = r("Dz1D"),
                i = r("T3Fm"),
                s = r("a59x"),
                c = r("TJcL"),
                u = i.o ? (0, s.bG)(2) : "",
                l = function(e) {
                    return ((i.o ? f["".concat(e, "_TEMPLATE")] : f[e]) || f[e] || "").replace("{{rootDomain}}", u)
                },
                p = !1,
                f = (0, o.PC)(),
                d = f.STATIC_HOST,
                v = (f.STATIC_HOST_PRIVATE, f.STATIC_HOST_PUBLIC),
                h = f.STATIC_HOST_SHARE,
                g = f.I18N_BASE_PRIVATE,
                y = f.I18N_BASE_PUBLIC,
                m = f.ACCOUNTS_HOST_PUBLIC,
                b = f.ACCELERATE_DEFAULT_DOMAIN,
                w = f.ACCELERATE_ENBLED_SITES,
                x = f.ACCELERATE_AVAILABLE_DOMAIN,
                _ = f.DOWNLOAD_URL_ANDROID,
                E = f.DOWNLOAD_URL_WINDOWS,
                k = f.DOWNLOAD_URL_MAC,
                S = f.DOWNLOAD_URL_GOOGLEPLAY,
                A = f.DOWNLOAD_URL_APPSTORE,
                O = f.DOWNLOAD_URL_WINDOWS_BETA,
                T = f.THEMIS_ADDRESS,
                B = f.THEMIS_ENV,
                D = f.THEMIS_AUTH_TOPBAR_HEADER,
                P = f.DEPLOYMENT_ENV,
                C = (f.GOOGLE_CLIENT_ID, f.SENSORS_SERVER_HOST),
                R = {
                    SITE_HOST: l("SITE_HOST"),
                    WS_HOST: l("WS_HOST"),
                    API_HOST: l("API_HOST"),
                    API_HOST_PRIVATE: l("API_HOST_PRIVATE"),
                    CMS_API_HOST: l("CMS_API_HOST"),
                    INBOX_STREAM_HOST: l("INBOX_STREAM_HOST"),
                    MARKET_STREAM_HOST: l("MARKET_STREAM_HOST")
                },
                F = R.SITE_HOST,
                I = R.WS_HOST,
                L = R.API_HOST,
                j = R.API_HOST_PRIVATE,
                N = R.CMS_API_HOST,
                H = R.INBOX_STREAM_HOST,
                M = {
                    "babt/term-of-use": "/babt-term-of-use",
                    "Legal/Supplier-Terms": "/Supplier-Terms",
                    "candidate/privacy/notice": "/candidate-privacy-notice",
                    "defiwallet/term-of-use": "/terms-web3wallet",
                    "legal/Written-Explanation-of-Crypto-Asset-Trading": "/Written-Explanation-of-Crypto-Asset-Trading",
                    "legal/terms-exchange": "/terms-exchange",
                    "legal/VA-standards": "/VA-standards",
                    "legal/outsourcing": "/outsourcing",
                    "legal/tokens-and-products": "/tokens-and-products",
                    "legal/terms-dual-invest": "/en-dual-invest-terms",
                    "legal/terms-fiat": "/terms-fiat",
                    "legal/terms-pay": "/terms-pay",
                    "disclaimer/be": "/disclaimer-be"
                },
                U = i.o || !1,
                V = U ? L : j,
                G = (0, c.A)(["events", "landing", "about-legal", "learn", "compliance"].concat((0, a.A)(["terms", "privacy", "sb-privacy", "cookie-privacy", "binance-futures-services-agreement", "terms-fiat-partner-list", "binance-dapp-wallet-agreement", "terms-ETH-2-0-staking", "terms-savings", "terms-autoinvest", "terms-BNB-vault", "terms-swap-farming", "terms-staking", "terms-binance-pool", "terms-simple-earn", "ZA-futures-notice", "terms-wallet", "terms-spot", "terms-p2p", "terms-convert", "terms-margin", "terms-nft-marketplace", "terms-defi-staking", "terms-otc", "terms-lae", "terms-crypto-loans", "terms-cloud-mining", "candidate/privacy/notice", "risk-warning", "pp-terms", "terms-simpleearn", "terms-pay", "terms-buy-sell-card", "leveraged-tokens"]), (0, a.A)(["babt", "Legal", "defiwallet", "legal", "disclaimer"]), (0, a.A)(Object.keys(M)))),
                W = ["Muses"];
            ! function(e) {
                e.INHERIT = "inherit", e.DARK = "dark", e.LIGHT = "light"
            }(n || (n = {}));
            var K, q = [n.DARK, n.LIGHT],
                z = {
                    STATIC_HOST: d,
                    STATIC_HOST_PRIVATE: d,
                    API_HOST: L,
                    NODE_API_HOST: V,
                    ACCOUNTS_HOST_PUBLIC: m,
                    ACCELERATE_DEFAULT_DOMAIN: b,
                    ACCELERATE_AVAILABLE_DOMAIN: x,
                    ACCELERATE_ENBLED_SITES: w,
                    DOWNLOAD_URL_ANDROID: _,
                    DOWNLOAD_URL_WINDOWS: E,
                    DOWNLOAD_URL_MAC: k,
                    DOWNLOAD_URL_GOOGLEPLAY: S,
                    DOWNLOAD_URL_APPSTORE: A,
                    DOWNLOAD_URL_WINDOWS_BETA: O,
                    TRADE_WS_HOST: I,
                    THEMIS_ADDRESS: T,
                    THEMIS_ENV: B,
                    THEMIS_AUTH_TOPBAR_HEADER: D,
                    INBOX_STREAM_HOST: H
                },
                $ = "muses_ui";
            ! function(e) {
                e[e.STANDARD = 1] = "STANDARD", e[e.MARKETING = 2] = "MARKETING"
            }(K || (K = {}));
            var J, Y = [1, 2, 3],
                X = ["0", "1"];
            ! function(e) {
                e.NotFound = "404", e.MovedPermanent = "301", e.MovedTemp = "302"
            }(J || (J = {}))
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
                T: () => X,
                y: () => Y
            });
            var n = r("tEf9"),
                a = r("Pz56"),
                o = r.n(a),
                i = r("wIZF"),
                s = r("6FIE"),
                c = r("sViW"),
                u = r("888e"),
                l = r("ezuS"),
                p = r("BK7R"),
                f = r("gZfF"),
                d = r("upAZ"),
                v = r("YvF5"),
                h = r("tKUM"),
                g = function e(t) {
                    var r = this;
                    (0, u.A)(this, e), this._i18nextIns = d.A.createInstance(), this.fetchingResourcesMap = new Map, this.currentNamespaces = [], this.addResources = function(e, t) {
                        var n = r;
                        t && t.length > 0 && (r.currentNamespaces = t);
                        var a = r.currentNamespaces.filter((function(t) {
                            var r = t.split("@"),
                                a = n._i18nextIns.hasResourceBundle(e, r[r.length - 1]);
                            return !a || 0 === Object.keys(a).length
                        }));
                        if (0 !== a.length) {
                            var i = r.fetchingResourcesMap.get(e);
                            if (!i) {
                                var s = r,
                                    u = r;
                                i = Promise.all(a.map(function() {
                                    var t = (0, c.A)(o().mark((function t(r) {
                                        var n, a, i, s;
                                        return o().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return n = r.split("@"), a = n[n.length - 1], i = n.length > 1 ? n[0] : void 0, t.next = 5, (0, v.A)({
                                                        lng: e,
                                                        ns: a,
                                                        fallback: !0,
                                                        basePath: u.basePath,
                                                        customPath: i
                                                    });
                                                case 5:
                                                    return s = t.sent, u._i18nextIns.addResources(e, a, s), t.abrupt("return", {
                                                        res: s,
                                                        ns: a
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
                        var e = (0, c.A)(o().mark((function e(t) {
                            var r, a, i, s, c, u, d, v, g;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = (r = t || {}).lng, i = r.resources, s = void 0 === i ? {} : i, c = r.ns, u = (0, f.A)(r, ["lng", "resources", "ns"]), a || (a = (0, h.getLanguage)() || "en"), c) {
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
                                        return v = (0, p.A)({
                                            lng: a,
                                            resources: s,
                                            ns: d,
                                            fallbackLng: "en",
                                            defaultNS: d[0],
                                            keySeparator: !1
                                        }, u), e.next = 11, n._i18nextIns.init(v);
                                    case 11:
                                        if (!a || (null === t || void 0 === t ? void 0 : t.resources)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 14, n.addResources(a);
                                    case 14:
                                        (g = e.sent) && (s = (0, l.A)({}, a, g));
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
                    var a = this;
                    this._addNamespaces = function() {
                        var e = (0, c.A)(o().mark((function e(t, r) {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a._i18nextIns.isInitialized) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("i18nInstance has not been initialized");
                                    case 2:
                                        return e.abrupt("return", a.addResources(t, r));
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
                        var e = (0, c.A)(o().mark((function e(t) {
                            var r;
                            return o().wrap((function(e) {
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
            var y = r("DTvD"),
                m = r("Dz1D"),
                b = r("qjHo"),
                w = {},
                x = function() {
                    return "undefined" !== typeof window.localStorage
                },
                _ = function() {
                    if (!x()) return w;
                    var e = localStorage.getItem("i18n-usage"),
                        t = w;
                    if (e) try {
                        t = JSON.parse(e), t = Object.assign({}, w, t)
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
                        return w[n] || (w[n] = {}), w[n][t] || (w[n][t] = 1),
                            function(e) {
                                if (x()) try {
                                    var t = _(),
                                        r = JSON.stringify(Object.assign({}, t, e));
                                    localStorage.setItem("i18n-usage", r)
                                } catch (error) {
                                    console.error("Error setting i18n-usage:", error)
                                }
                            }(w), e
                    }, e
                }();
            const k = new E;

            function S(e) {
                return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, S(e)
            }

            function A() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : S(XMLHttpRequest))
            }
            var O, T, B, D = r("47/P"),
                P = r.t(D, 2);

            function C(e, t) {
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
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        F(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function F(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != I(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != I(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == I(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function I(e) {
                return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, I(e)
            }
            "function" === typeof fetch && (O = "undefined" !== typeof global && global.fetch ? global.fetch : window.fetch ? window.fetch : fetch), A() && ("undefined" !== typeof global && global.XMLHttpRequest ? T = global.XMLHttpRequest : window.XMLHttpRequest && (T = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? B = global.ActiveXObject : window.ActiveXObject && (B = window.ActiveXObject)), O || !P || T || B || (O = D || P), "function" !== typeof O && (O = void 0);
            var L = function(e, t) {
                    if (t && "object" === I(t)) {
                        var r = "";
                        for (var n in t) r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
                        if (!r) return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + r.slice(1)
                    }
                    return e
                },
                j = function(e, t, r, n) {
                    var a = function(e) {
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
                        var o = n(e, t);
                        if (o instanceof Promise) return void o.then(a).catch(r)
                    }
                    "function" === typeof fetch ? fetch(e, t).then(a).catch(r) : O(e, t).then(a).catch(r)
                },
                N = !1;
            const H = function(e, t, r, n) {
                return "function" === typeof r && (n = r, r = void 0), n = n || function() {}, O && 0 !== t.indexOf("file:") ? function(e, t, r, n) {
                    e.queryStringParams && (t = L(t, e.queryStringParams));
                    var a = R({}, "function" === typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    r && (a["Content-Type"] = "application/json");
                    var o = "function" === typeof e.requestOptions ? e.requestOptions(r) : e.requestOptions,
                        i = R({
                            method: r ? "POST" : "GET",
                            body: r ? e.stringify(r) : void 0,
                            headers: a
                        }, N ? {} : o),
                        s = "function" === typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                    try {
                        j(t, i, n, s)
                    } catch (c) {
                        if (!o || 0 === Object.keys(o).length || !c.message || c.message.indexOf("not implemented") < 0) return n(c);
                        try {
                            Object.keys(o).forEach((function(e) {
                                delete i[e]
                            })), j(t, i, n, s), N = !0
                        } catch (u) {
                            n(u)
                        }
                    }
                }(e, t, r, n) : A() || "function" === typeof ActiveXObject ? function(e, t, r, n) {
                    r && "object" === I(r) && (r = L("", r).slice(1)), e.queryStringParams && (t = L(t, e.queryStringParams));
                    try {
                        var a;
                        (a = T ? new T : new B("MSXML2.XMLHTTP.3.0")).open(r ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
                        var o = e.customHeaders;
                        if (o = "function" === typeof o ? o() : o)
                            for (var i in o) a.setRequestHeader(i, o[i]);
                        a.onreadystatechange = function() {
                            a.readyState > 3 && n(a.status >= 400 ? a.statusText : null, {
                                status: a.status,
                                data: a.responseText
                            })
                        }, a.send(r)
                    } catch (s) {
                        console && console.log(s)
                    }
                }(e, t, r, n) : void n(new Error("No fetch and no xhr implementation found!"))
            };

            function M(e) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, M(e)
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

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach((function(t) {
                        K(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function G(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function W(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, q(n.key), n)
                }
            }

            function K(e, t, r) {
                return (t = q(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function q(e) {
                var t = function(e, t) {
                    if ("object" != M(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != M(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == M(t) ? t : String(t)
            }
            var z = function() {
                    return {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        parse: function(e) {
                            return JSON.parse(e)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(e, t, r) {
                            return K({}, t, r || "")
                        },
                        parseLoadPayload: function(e, t) {},
                        request: H,
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
                        G(this, e), this.services = t, this.options = r, this.allOptions = n, this.type = "backend", this.init(t, r, n)
                    }
                    var t, r, n;
                    return t = e, r = [{
                        key: "init",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = e, this.options = V(V(V({}, z()), this.options || {}), r), this.allOptions = n, this.services && this.options.reloadInterval && setInterval((function() {
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
                        value: function(e, t, r, n, a) {
                            var o, i = this,
                                s = this.options.loadPath;
                            "function" === typeof this.options.loadPath && (s = this.options.loadPath(e, r)), (s = function(e) {
                                return !!e && "function" === typeof e.then
                            }(o = s) ? o : Promise.resolve(o)).then((function(o) {
                                if (!o) return a(null, {});
                                var s = i.services.interpolator.interpolate(o, {
                                    lng: e.join("+"),
                                    ns: r.join("+")
                                });
                                i.loadUrl(s, a, t, n)
                            }))
                        }
                    }, {
                        key: "loadUrl",
                        value: function(e, t, r, n) {
                            var a = this,
                                o = "string" === typeof r ? [r] : r,
                                i = "string" === typeof n ? [n] : n,
                                s = this.options.parseLoadPayload(o, i);
                            this.options.request(this.options, e, s, (function(o, i) {
                                if (i && (i.status >= 500 && i.status < 600 || !i.status)) return t("failed loading " + e + "; status code: " + i.status, !0);
                                if (i && i.status >= 400 && i.status < 500) return t("failed loading " + e + "; status code: " + i.status, !1);
                                if (!i && o && o.message && o.message.indexOf("Failed to fetch") > -1) return t("failed loading " + e + ": " + o.message, !0);
                                if (o) return t(o, !1);
                                var s, c;
                                try {
                                    s = "string" === typeof i.data ? a.options.parse(i.data, r, n) : i.data
                                } catch (u) {
                                    c = "failed parsing " + e + " to json"
                                }
                                if (c) return t(c, !1);
                                t(null, s)
                            }))
                        }
                    }, {
                        key: "create",
                        value: function(e, t, r, n, a) {
                            var o = this;
                            if (this.options.addPath) {
                                "string" === typeof e && (e = [e]);
                                var i = this.options.parsePayload(t, r, n),
                                    s = 0,
                                    c = [],
                                    u = [];
                                e.forEach((function(r) {
                                    var n = o.options.addPath;
                                    "function" === typeof o.options.addPath && (n = o.options.addPath(r, t));
                                    var l = o.services.interpolator.interpolate(n, {
                                        lng: r,
                                        ns: t
                                    });
                                    o.options.request(o.options, l, i, (function(t, r) {
                                        s += 1, c.push(t), u.push(r), s === e.length && "function" === typeof a && a(c, u)
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
                                a = t.logger,
                                o = r.language;
                            if (!o || "cimode" !== o.toLowerCase()) {
                                var i = [],
                                    s = function(e) {
                                        n.toResolveHierarchy(e).forEach((function(e) {
                                            i.indexOf(e) < 0 && i.push(e)
                                        }))
                                    };
                                s(o), this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                    return s(e)
                                })), i.forEach((function(t) {
                                    e.allOptions.ns.forEach((function(e) {
                                        r.read(t, e, "read", null, null, (function(n, o) {
                                            n && a.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), n), !n && o && a.log("loaded namespace ".concat(e, " for language ").concat(t), o), r.loaded("".concat(t, "|").concat(e), n, o)
                                        }))
                                    }))
                                }))
                            }
                        }
                    }], r && W(t.prototype, r), n && W(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }();
            $.type = "backend";
            const J = $;
            var Y = (0, y.createContext)(null),
                X = function(e) {
                    var t = e.namespaces,
                        r = e.basePath,
                        a = e.nsSeparator,
                        c = e.keySeparator,
                        u = (0, m.PC)(),
                        l = new g({
                            basePath: r
                        }),
                        p = (l._init, l._i18nextIns),
                        f = l.setLanguage,
                        d = l._addNamespaces,
                        v = (0, i.__rest)(l, ["_init", "_i18nextIns", "setLanguage", "_addNamespaces"]),
                        h = "";
                    return Object.assign({
                        init: function(e) {
                            return (0, i.__awaiter)(this, void 0, void 0, o().mark((function i() {
                                var f, d, v, g, y, m, w, x, _, E;
                                return o().wrap((function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            if ((f = e || {}).ns || (f.ns = t.slice()), f.ns = Array.from(new Set(f.ns)), p.use(k), d = [], v = !0, g = !1, y = void 0, !f.postProcess) {
                                                o.next = 21;
                                                break
                                            }
                                            for (o.prev = 5, m = f.postProcess[Symbol.iterator](); !(v = (w = m.next()).done); v = !0) x = w.value, d.push(x.name), p.use(x);
                                            o.next = 13;
                                            break;
                                        case 9:
                                            o.prev = 9, o.t0 = o.catch(5), g = !0, y = o.t0;
                                        case 13:
                                            o.prev = 13, o.prev = 14, v || null == m.return || m.return();
                                        case 16:
                                            if (o.prev = 16, !g) {
                                                o.next = 19;
                                                break
                                            }
                                            throw y;
                                        case 19:
                                            return o.finish(16);
                                        case 20:
                                            return o.finish(13);
                                        case 21:
                                            return r && p.use(J), _ = f.ns.slice(), E = {
                                                alternateFetch: s.fetch,
                                                loadPath: function(e, t) {
                                                    if (t.every((function(e) {
                                                            return _.includes(e)
                                                        })) || !e.includes(h || p.language)) return "";
                                                    if (1 === t.length) {
                                                        var r = t[0].split("@");
                                                        if (r.length > 1) return "".concat(u[b.x], "/").concat(r[0], "/{{lng}}/").concat(r[r.length - 1])
                                                    }
                                                    return "".concat(u[b.x], "/{{lng}}/{{ns}}")
                                                }
                                            }, o.next = 25, l._init(Object.assign(Object.assign({
                                                backend: E,
                                                react: {
                                                    useSuspense: !1
                                                },
                                                partialBundledLanguages: !0,
                                                nsSeparator: a,
                                                keySeparator: c || !1
                                            }, f), {
                                                postProcess: [k.name].concat((0, n.A)(d))
                                            }));
                                        case 25:
                                            return o.abrupt("return", o.sent);
                                        case 26:
                                        case "end":
                                            return o.stop()
                                    }
                                }), i, null, [
                                    [5, 9, 13, 21],
                                    [14, , 16, 20]
                                ])
                            })))
                        },
                        i18nextIns: p,
                        setLocale: function(e, t) {
                            return (0, i.__awaiter)(void 0, void 0, void 0, o().mark((function r() {
                                return o().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (h = e, r.t0 = t && t.length > 0, !r.t0) {
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
                    }, v)
                }
        },
        rsqs: (e, t, r) => {
            "use strict";
            r.d(t, {
                pu: () => c,
                Zu: () => u
            });
            r("upAZ");
            var n = r("VP0d"),
                a = r("blBx"),
                o = r("6w+j"),
                i = r.n(o),
                s = (r("tKUM"), "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?"));
            i()((function(e) {
                var t = "en",
                    r = "";
                if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", "undefined" === typeof e ? "undefined" : (0, a.A)(e)), {
                    lang: t,
                    region: r,
                    path: e
                };
                var o, i, c, u = e.match(new RegExp("^".concat(s, "$")));
                return u ? {
                    lang: t = void 0 === (i = (o = (0, n.A)(u, 4))[1]) ? "" : i,
                    region: r = void 0 === (c = o[3]) ? "" : c,
                    path: e
                } : {
                    lang: t,
                    region: r,
                    path: e
                }
            }));

            function c(e) {
                return ((null === e || void 0 === e ? void 0 : e.headers.k8scluster) || "").includes("nskey")
            }

            function u(e) {
                return Object.keys(e).reduce((function(t, r) {
                    var n = e[r],
                        a = Object.keys(n).reduce((function(e, t) {
                            return e[t] = "".concat(r, ":").concat(t), e
                        }), {});
                    return t[r] = a, t
                }), {})
            }
        },
        ztXJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => a
            });
            var n = r("DTvD"),
                a = (0, n.createContext)("")
        },
        Mp1J: (e, t, r) => {
            "use strict";
            var n = r("qK3R"),
                a = r("lmEU");
            (0, n.setReporter)((function(e) {
                return (0, a.z)({
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
        "7laY": (e, t, r) => {
            "use strict";
            r.d(t, {
                j2: () => B,
                qd: () => P,
                K2: () => C,
                z0: () => D,
                ik: () => R,
                w8: () => F,
                vT: () => E,
                C0: () => S,
                mt: () => A,
                $r: () => k,
                eL: () => O,
                Wu: () => T
            });
            var n = "#FFFFFF",
                a = "#FAFAFA",
                o = "#F5F5F5",
                i = "#EAECEF",
                s = "#D8DCE1",
                c = "#B7BDC6",
                u = "#848E9C",
                l = "#707A8A",
                p = "#434C5A",
                f = "#333B47",
                d = "#29313D",
                v = "#202630",
                h = "#FCD535",
                g = "#F0B90B",
                y = "#E6FFF1",
                m = "#2EBD85",
                b = "#102821",
                w = "#FEF1F2",
                x = "#F6465D",
                _ = "#35141D",
                E = {
                    BasicBg: n,
                    SecondaryBg: a,
                    Input: o,
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
                    PrimaryText: v,
                    RedGreenBgText: n,
                    EmphasizeText: "#FF693D",
                    TextOnGray: i,
                    TextOnYellow: v,
                    IconNormal: "#929AA5",
                    ToastBg: l,
                    BtnBg: h,
                    PrimaryYellow: g,
                    TextLink: "#D89F00",
                    TradeBg: o,
                    SellHover: x,
                    Sell: x,
                    TextSell: x,
                    DepthBuyBg: y,
                    BuyHover: m,
                    Buy: m,
                    TextBuy: m,
                    Error: x,
                    Success: m,
                    Vessel: a,
                    LiteBg1: n,
                    LiteBg2: a,
                    TextToast: g,
                    DepthSellBg: w,
                    SuccessBg: y,
                    TwoColorIcon: p,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                k = {
                    DepthBuyBg: w,
                    BuyHover: x,
                    Buy: x,
                    TextBuy: x,
                    DepthSellBg: y,
                    SellHover: m,
                    Sell: m,
                    TextSell: m
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
                A = {
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
                    CardBg: v,
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
                    TextOnYellow: v,
                    IconNormal: l,
                    ToastBg: l,
                    BtnBg: h,
                    PrimaryYellow: g,
                    TextLink: g,
                    TradeBg: "#0B0E11",
                    SellHover: x,
                    Sell: x,
                    TextSell: x,
                    DepthBuyBg: b,
                    BuyHover: m,
                    Buy: m,
                    TextBuy: m,
                    Error: x,
                    Success: m,
                    Vessel: d,
                    LiteBg1: n,
                    LiteBg2: a,
                    TextToast: g,
                    DepthSellBg: _,
                    SuccessBg: b,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                D = {
                    DepthBuyBg: _,
                    BuyHover: x,
                    Buy: x,
                    TextBuy: x,
                    DepthSellBg: b,
                    SellHover: m,
                    Sell: m,
                    TextSell: m
                },
                P = {
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
                C = {
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
                F = {
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
                NM: () => o,
                NY: () => a,
                Qx: () => v,
                bY: () => l,
                ep: () => s,
                k8: () => c,
                mC: () => i,
                ml: () => h,
                pJ: () => p,
                s: () => f
            });
            var n = r("t50Z"),
                a = {
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
                o = {
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
                v = {
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
                h = {
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
                a = r("/kHH"),
                o = r("7laY"),
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
                    }, a.NM), {
                        mobile: (0, n.__assign)({}, o.$r)
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
                    }, a.mC), {
                        mobile: (0, n.__assign)({}, o.C0)
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
                    }, a.ep), {
                        mobile: (0, n.__assign)({}, o.mt)
                    }),
                    traditional: (0, n.__assign)((0, n.__assign)({}, a.k8), {
                        mobile: (0, n.__assign)({}, o.eL)
                    }),
                    "traditional-reverse": (0, n.__assign)((0, n.__assign)({}, a.Cc), {
                        mobile: (0, n.__assign)({}, o.Wu)
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
                    }, a.pJ), {
                        mobile: (0, n.__assign)({}, o.z0)
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
                    }, a.s), {
                        mobile: (0, n.__assign)({}, o.qd)
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
                    }, a.CY), {
                        mobile: (0, n.__assign)({}, o.K2)
                    }),
                    traditional: (0, n.__assign)((0, n.__assign)({}, a.Qx), {
                        mobile: (0, n.__assign)({}, o.ik)
                    }),
                    "traditional-reverse": (0, n.__assign)((0, n.__assign)({}, a.ml), {
                        mobile: (0, n.__assign)({}, o.w8)
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
                a = r("t50Z"),
                o = r("/kHH"),
                i = r("7laY"),
                s = {
                    sell: a.wv[400],
                    textSell: a.wv[450],
                    sellHover: a.wv[300],
                    depthSellBg: a.wv[10],
                    buy: a.wL[400],
                    textBuy: a.wL[500],
                    buyHover: a.wL[300],
                    depthBuyBg: a.wL[10],
                    line: a.wm[50],
                    outlineHover: a.D9[50],
                    primary: a.D9[100],
                    primaryHover: a.D9[200],
                    error: a.wv[450],
                    errorBg: a.wv[10],
                    success: a.wL[400],
                    successBg: a.wL[10],
                    disable: a.wm[50],
                    iconNormal: a.wm[250],
                    textWhite: a.wm[0],
                    textGray: a.wm[50],
                    textBlack: a.wm[1e3],
                    textPrimary: a.wm[800],
                    textSecondary: a.wm[600],
                    textThird: a.wm[400],
                    textDisabled: a.wm[200],
                    textBrand: a.D9[300],
                    textToast: a.D9[500],
                    bg: a.wm[10],
                    bg1: a.wm[0],
                    bg2: a.wm[5],
                    bg3: a.wm[10],
                    bg4: a.wm[500],
                    bg6: a.wm[0],
                    bg7: a.wm[5],
                    popupBg: a.wm[0],
                    badgeBg: a.D9[10],
                    selectedBg: a.wm[5],
                    gradientBrand: a.D7.primary,
                    gradientPrimary: a.D7.light
                },
                c = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, s), o.NY), {
                    mobile: (0, n.__assign)({}, i.vT)
                }),
                u = {
                    sell: a.wv[400],
                    textSell: a.wv[400],
                    sellHover: a.wv[300],
                    depthSellBg: a.wv[800],
                    buy: a.wL[400],
                    textBuy: a.wL[400],
                    buyHover: a.wL[300],
                    depthBuyBg: a.wL[800],
                    line: a.wm[700],
                    outlineHover: a.D9[600],
                    primary: a.D9[100],
                    primaryHover: a.D9[200],
                    error: a.wv[400],
                    errorBg: a.wv[800],
                    success: a.wL[400],
                    successBg: a.wL[800],
                    disable: a.wm[600],
                    iconNormal: a.wm[300],
                    textWhite: a.wm[0],
                    textGray: a.wm[50],
                    textBlack: a.wm[1e3],
                    textPrimary: a.wm[50],
                    textSecondary: a.wm[200],
                    textThird: a.wm[300],
                    textDisabled: a.wm[500],
                    textBrand: a.D9[200],
                    textToast: a.D9[400],
                    bg: a.wm[900],
                    bg1: a.wm[900],
                    bg2: a.wm[1e3],
                    bg3: a.wm[700],
                    bg4: a.wm[500],
                    bg6: a.wm[850],
                    bg7: a.wm[950],
                    popupBg: a.wm[800],
                    badgeBg: a.D9[750],
                    selectedBg: a.wm[875],
                    gradientBrand: a.D7.primary,
                    gradientPrimary: a.D7.dark
                },
                l = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, u), o.bY), {
                    mobile: (0, n.__assign)({}, i.j2)
                })
        },
        t50Z: (e, t, r) => {
            "use strict";
            r.d(t, {
                D7: () => s,
                D9: () => a,
                wL: () => o,
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
                a = {
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
                o = {
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
        "1Fob": e => {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = new RegExp(t, "gi"),
                n = new RegExp("(" + t + ")+", "gi");

            function a(e, t) {
                try {
                    return decodeURIComponent(e.join(""))
                } catch (o) {}
                if (1 === e.length) return e;
                t = t || 1;
                var r = e.slice(0, t),
                    n = e.slice(t);
                return Array.prototype.concat.call([], a(r), a(n))
            }

            function o(e) {
                try {
                    return decodeURIComponent(e)
                } catch (o) {
                    for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = a(t, n).join("")).match(r);
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
                            }, a = n.exec(e); a;) {
                            try {
                                r[a[0]] = decodeURIComponent(a[0])
                            } catch (t) {
                                var i = o(a[0]);
                                i !== a[0] && (r[a[0]] = i)
                            }
                            a = n.exec(e)
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
                a = {
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
                o = {
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
                return n.isMemo(e) ? i : s[e.$$typeof] || a
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
                v = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (v) {
                        var a = d(r);
                        a && a !== v && e(t, a, n)
                    }
                    var i = l(r);
                    p && (i = i.concat(p(r)));
                    for (var s = c(t), h = c(r), g = 0; g < i.length; ++g) {
                        var y = i[g];
                        if (!o[y] && (!n || !n[y]) && (!h || !h[y]) && (!s || !s[y])) {
                            var m = f(r, y);
                            try {
                                u(t, y, m)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        upAZ: (e, t, r) => {
            "use strict";

            function n(e) {
                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r.d(t, {
                A: () => W
            });
            var a = r("OHGK");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach((function(t) {
                        (0, a.A)(e, t, r[t])
                    }))
                }
                return e
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function c(e, t, r) {
                return t && s(e.prototype, t), r && s(e, r), e
            }

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t) {
                if (t && ("object" === n(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return u(e)
            }

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }
            var f = r("XDNX");

            function d(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (0, f.A)(e, t)
            }
            var v = {
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
                h = new(function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e), this.init(t, r)
                    }
                    return c(e, [{
                        key: "init",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = t.prefix || "i18next:", this.logger = e || v, this.options = t, this.debug = t.debug
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
                            return new e(this.logger, o({}, {
                                prefix: "".concat(this.prefix, ":").concat(t, ":")
                            }, this.options))
                        }
                    }]), e
                }()),
                g = function() {
                    function e() {
                        i(this, e), this.observers = {}
                    }
                    return c(e, [{
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
                                var a = [].concat(this.observers[e]);
                                a.forEach((function(e) {
                                    e.apply(void 0, r)
                                }))
                            }
                            if (this.observers["*"]) {
                                var o = [].concat(this.observers["*"]);
                                o.forEach((function(t) {
                                    t.apply(t, [e].concat(r))
                                }))
                            }
                        }
                    }]), e
                }();

            function y() {
                var e, t, r = new Promise((function(r, n) {
                    e = r, t = n
                }));
                return r.resolve = e, r.reject = t, r
            }

            function m(e) {
                return null == e ? "" : "" + e
            }

            function b(e, t, r) {
                e.forEach((function(e) {
                    t[e] && (r[e] = t[e])
                }))
            }

            function w(e, t, r) {
                function n(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function a() {
                    return !e || "string" === typeof e
                }
                for (var o = "string" !== typeof t ? [].concat(t) : t.split("."); o.length > 1;) {
                    if (a()) return {};
                    var i = n(o.shift());
                    !e[i] && r && (e[i] = new r), e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {}
                }
                return a() ? {} : {
                    obj: e,
                    k: n(o.shift())
                }
            }

            function x(e, t, r) {
                var n = w(e, t, Object);
                n.obj[n.k] = r
            }

            function _(e, t) {
                var r = w(e, t),
                    n = r.obj,
                    a = r.k;
                if (n) return n[a]
            }

            function E(e, t, r) {
                var n = _(e, r);
                return void 0 !== n ? n : _(t, r)
            }

            function k(e, t, r) {
                for (var n in t) "__proto__" !== n && "constructor" !== n && (n in e ? "string" === typeof e[n] || e[n] instanceof String || "string" === typeof t[n] || t[n] instanceof String ? r && (e[n] = t[n]) : k(e[n], t[n], r) : e[n] = t[n]);
                return e
            }

            function S(e) {
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

            function O(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return A[e]
                })) : e
            }
            var T = window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                B = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return i(this, t), r = l(this, p(t).call(this)), T && g.call(u(r)), r.data = e || {}, r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r
                    }
                    return d(t, e), c(t, [{
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
                                a = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                o = [e, t];
                            return r && "string" !== typeof r && (o = o.concat(r)), r && "string" === typeof r && (o = o.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (o = e.split(".")), _(this.data, o)
                        }
                    }, {
                        key: "addResource",
                        value: function(e, t, r, n) {
                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                o = this.options.keySeparator;
                            void 0 === o && (o = ".");
                            var i = [e, t];
                            r && (i = i.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (n = t, t = (i = e.split("."))[1]), this.addNamespaces(t), x(this.data, i, n), a.silent || this.emit("added", e, t, r, n)
                        }
                    }, {
                        key: "addResources",
                        value: function(e, t, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var a in r) "string" !== typeof r[a] && "[object Array]" !== Object.prototype.toString.apply(r[a]) || this.addResource(e, t, a, r[a], {
                                silent: !0
                            });
                            n.silent || this.emit("added", e, t, r)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function(e, t, r, n, a) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                s = [e, t];
                            e.indexOf(".") > -1 && (n = r, r = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
                            var c = _(this.data, s) || {};
                            n ? k(c, r, a) : c = o({}, c, r), x(this.data, s, c), i.silent || this.emit("added", e, t, r)
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
                            return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? o({}, {}, this.getResource(e, t)) : this.getResource(e, t)
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
                D = {
                    processors: {},
                    addPostProcessor: function(e) {
                        this.processors[e.name] = e
                    },
                    handle: function(e, t, r, n, a) {
                        var o = this;
                        return e.forEach((function(e) {
                            o.processors[e] && (t = o.processors[e].process(t, r, n, a))
                        })), t
                    }
                },
                P = {},
                C = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return i(this, t), r = l(this, p(t).call(this)), T && g.call(u(r)), b(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, u(r)), r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r.logger = h.create("translator"), r
                    }
                    return d(t, e), c(t, [{
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
                                a = t.ns || this.options.defaultNS;
                            if (r && e.indexOf(r) > -1) {
                                var o = e.match(this.interpolator.nestingRegexp);
                                if (o && o.length > 0) return {
                                    key: e,
                                    namespaces: a
                                };
                                var i = e.split(r);
                                (r !== n || r === n && this.options.ns.indexOf(i[0]) > -1) && (a = i.shift()), e = i.join(n)
                            }
                            return "string" === typeof a && (a = [a]), {
                                key: e,
                                namespaces: a
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(e, t, r) {
                            var a = this;
                            if ("object" !== n(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), t || (t = {}), void 0 === e || null === e) return "";
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
                            var v = this.resolve(e, t),
                                h = v && v.res,
                                g = v && v.usedKey || c,
                                y = v && v.exactUsedKey || c,
                                m = Object.prototype.toString.apply(h),
                                b = ["[object Number]", "[object Function]", "[object RegExp]"],
                                w = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                                x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                _ = "string" !== typeof h && "boolean" !== typeof h && "number" !== typeof h;
                            if (x && h && _ && b.indexOf(m) < 0 && ("string" !== typeof w || "[object Array]" !== m)) {
                                if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, h, t) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                                if (i) {
                                    var E = "[object Array]" === m,
                                        k = E ? [] : {},
                                        S = E ? y : g;
                                    for (var A in h)
                                        if (Object.prototype.hasOwnProperty.call(h, A)) {
                                            var O = "".concat(S).concat(i).concat(A);
                                            k[A] = this.translate(O, o({}, t, {
                                                joinArrays: !1,
                                                ns: u
                                            })), k[A] === O && (k[A] = h[A])
                                        }
                                    h = k
                                }
                            } else if (x && "string" === typeof w && "[object Array]" === m)(h = h.join(w)) && (h = this.extendTranslation(h, e, t, r));
                            else {
                                var T = !1,
                                    B = !1;
                                if (!this.isValidLookup(h) && void 0 !== t.defaultValue) {
                                    if (T = !0, void 0 !== t.count) {
                                        var D = this.pluralResolver.getSuffix(p, t.count);
                                        h = t["defaultValue".concat(D)]
                                    }
                                    h || (h = t.defaultValue)
                                }
                                this.isValidLookup(h) || (B = !0, h = c);
                                var P = t.defaultValue && t.defaultValue !== h && this.options.updateMissing;
                                if (B || T || P) {
                                    if (this.logger.log(P ? "updateKey" : "missingKey", p, l, c, P ? t.defaultValue : h), i) {
                                        var C = this.resolve(c, o({}, t, {
                                            keySeparator: !1
                                        }));
                                        C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var R = [],
                                        F = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && F && F[0])
                                        for (var I = 0; I < F.length; I++) R.push(F[I]);
                                    else "all" === this.options.saveMissingTo ? R = this.languageUtils.toResolveHierarchy(t.lng || this.language) : R.push(t.lng || this.language);
                                    var L = function(e, r) {
                                        a.options.missingKeyHandler ? a.options.missingKeyHandler(e, l, r, P ? t.defaultValue : h, P, t) : a.backendConnector && a.backendConnector.saveMissing && a.backendConnector.saveMissing(e, l, r, P ? t.defaultValue : h, P, t), a.emit("missingKey", e, l, r, h)
                                    };
                                    if (this.options.saveMissing) {
                                        var j = void 0 !== t.count && "string" !== typeof t.count;
                                        this.options.saveMissingPlurals && j ? R.forEach((function(e) {
                                            a.pluralResolver.getPluralFormsOfKey(e, c).forEach((function(t) {
                                                return L([e], t)
                                            }))
                                        })) : L(R, c)
                                    }
                                }
                                h = this.extendTranslation(h, e, t, v, r), B && h === c && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(c)), B && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                            }
                            return h
                        }
                    }, {
                        key: "extendTranslation",
                        value: function(e, t, r, n, a) {
                            var i = this;
                            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, r, n.usedLng, n.usedNS, n.usedKey, {
                                resolved: n
                            });
                            else if (!r.skipInterpolation) {
                                r.interpolation && this.interpolator.init(o({}, r, {
                                    interpolation: o({}, this.options.interpolation, r.interpolation)
                                }));
                                var s, c = r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                if (c) {
                                    var u = e.match(this.interpolator.nestingRegexp);
                                    s = u && u.length
                                }
                                var l = r.replace && "string" !== typeof r.replace ? r.replace : r;
                                if (this.options.interpolation.defaultVariables && (l = o({}, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, r.lng || this.language, r), c) {
                                    var p = e.match(this.interpolator.nestingRegexp);
                                    s < (p && p.length) && (r.nest = !1)
                                }!1 !== r.nest && (e = this.interpolator.nest(e, (function() {
                                    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                    return a && a[0] === n[0] && !r.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, n.concat([t]))
                                }), r)), r.interpolation && this.interpolator.reset()
                            }
                            var f = r.postProcess || this.options.postProcess,
                                d = "string" === typeof f ? [f] : f;
                            return void 0 !== e && null !== e && d && d.length && !1 !== r.applyPostProcessor && (e = D.handle(d, e, t, this.options && this.options.postProcessPassResolved ? o({
                                i18nResolved: n
                            }, r) : r, this)), e
                        }
                    }, {
                        key: "resolve",
                        value: function(e) {
                            var t, r, n, a, o, i = this,
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
                                        i.isValidLookup(t) || (o = e, !P["".concat(d[0], "-").concat(e)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(o) && (P["".concat(d[0], "-").concat(e)] = !0, i.logger.warn('key "'.concat(r, '" for languages "').concat(d.join(", "), '" won\'t get resolved as namespace "').concat(o, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), d.forEach((function(r) {
                                            if (!i.isValidLookup(t)) {
                                                a = r;
                                                var o, c, l = u,
                                                    d = [l];
                                                if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(d, u, r, e, s);
                                                else p && (o = i.pluralResolver.getSuffix(r, s.count)), p && f && d.push(l + o), f && d.push(l += "".concat(i.options.contextSeparator).concat(s.context)), p && d.push(l += o);
                                                for (; c = d.pop();) i.isValidLookup(t) || (n = c, t = i.getResource(r, e, c, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: t,
                                usedKey: r,
                                exactUsedKey: n,
                                usedLng: a,
                                usedNS: o
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

            function R(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var F = function() {
                    function e(t) {
                        i(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = h.create("languageUtils")
                    }
                    return c(e, [{
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
                                })) : 2 === r.length ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = R(r[1].toLowerCase()))) : 3 === r.length && (r[0] = r[0].toLowerCase(), 2 === r[1].length && (r[1] = r[1].toUpperCase()), "sgn" !== r[0] && 2 === r[2].length && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = R(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = R(r[2].toLowerCase()))), r.join("-")
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
                                a = [],
                                o = function(e) {
                                    e && (r.isSupportedCode(e) ? a.push(e) : r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                };
                            return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" === typeof e && o(this.formatLanguageCode(e)), n.forEach((function(e) {
                                a.indexOf(e) < 0 && o(r.formatLanguageCode(e))
                            })), a
                        }
                    }]), e
                }(),
                I = [{
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
                L = {
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

            function j() {
                var e = {};
                return I.forEach((function(t) {
                    t.lngs.forEach((function(r) {
                        e[r] = {
                            numbers: t.nr,
                            plurals: L[t.fc]
                        }
                    }))
                })), e
            }
            var N = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e), this.languageUtils = t, this.options = r, this.logger = h.create("pluralResolver"), this.rules = j()
                    }
                    return c(e, [{
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
                                a = this.getRule(e);
                            return a ? (a.numbers.forEach((function(a) {
                                var o = r.getSuffix(e, a);
                                n.push("".concat(t).concat(o))
                            })), n) : n
                        }
                    }, {
                        key: "getSuffix",
                        value: function(e, t) {
                            var r = this,
                                n = this.getRule(e);
                            if (n) {
                                var a = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                                    o = n.numbers[a];
                                this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                                var i = function() {
                                    return r.options.prepend && o.toString() ? r.options.prepend + o.toString() : o.toString()
                                };
                                return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] ? i() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString()
                            }
                            return this.logger.warn("no plural rule found for: ".concat(e)), ""
                        }
                    }]), e
                }(),
                H = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e), this.logger = h.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                            return e
                        }, this.init(t)
                    }
                    return c(e, [{
                        key: "init",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.interpolation || (e.interpolation = {
                                escapeValue: !0
                            });
                            var t = e.interpolation;
                            this.escape = void 0 !== t.escape ? t.escape : O, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? S(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? S(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? S(t.nestingPrefix) : t.nestingPrefixEscaped || S("$t("), this.nestingSuffix = t.nestingSuffix ? S(t.nestingSuffix) : t.nestingSuffixEscaped || S(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
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
                            var a, o, i, s = this,
                                c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function u(e) {
                                return e.replace(/\$/g, "$$$$")
                            }
                            var l = function(e) {
                                if (e.indexOf(s.formatSeparator) < 0) {
                                    var a = E(t, c, e);
                                    return s.alwaysFormat ? s.format(a, void 0, r) : a
                                }
                                var o = e.split(s.formatSeparator),
                                    i = o.shift().trim(),
                                    u = o.join(s.formatSeparator).trim();
                                return s.format(E(t, c, i), u, r, n)
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
                                for (i = 0; a = t.regex.exec(e);) {
                                    if (void 0 === (o = l(a[1].trim())))
                                        if ("function" === typeof p) {
                                            var r = p(e, a, n);
                                            o = "string" === typeof r ? r : ""
                                        } else {
                                            if (f) {
                                                o = a[0];
                                                continue
                                            }
                                            s.logger.warn("missed to pass in variable ".concat(a[1], " for interpolating ").concat(e)), o = ""
                                        }
                                    else "string" === typeof o || s.useRawValueToEscape || (o = m(o));
                                    if (e = e.replace(a[0], t.safeValue(o)), t.regex.lastIndex = 0, ++i >= s.maxReplaces) break
                                }
                            })), e
                        }
                    }, {
                        key: "nest",
                        value: function(e, t) {
                            var r, n, a = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = o({}, i);

                            function c(e, t) {
                                var r = this.nestingOptionsSeparator;
                                if (e.indexOf(r) < 0) return e;
                                var n = e.split(new RegExp("".concat(r, "[ ]*{"))),
                                    a = "{".concat(n[1]);
                                e = n[0], a = (a = this.interpolate(a, s)).replace(/'/g, '"');
                                try {
                                    s = JSON.parse(a), t && (s = o({}, t, s))
                                } catch (i) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i), "".concat(e).concat(r).concat(a)
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
                                "string" !== typeof n && (n = m(n)), n || (this.logger.warn("missed to resolve ".concat(r[1], " for nesting ").concat(e)), n = ""), l && (n = u.reduce((function(e, t) {
                                    return a.format(e, t, i.lng, i)
                                }), n.trim())), e = e.replace(r[0], n), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();
            var M = function(e) {
                function t(e, r, n) {
                    var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return i(this, t), a = l(this, p(t).call(this)), T && g.call(u(a)), a.backend = e, a.store = r, a.services = n, a.languageUtils = n.languageUtils, a.options = o, a.logger = h.create("backendConnector"), a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(n, o.backend, o), a
                }
                return d(t, e), c(t, [{
                    key: "queueLoad",
                    value: function(e, t, r, n) {
                        var a = this,
                            o = [],
                            i = [],
                            s = [],
                            c = [];
                        return e.forEach((function(e) {
                            var n = !0;
                            t.forEach((function(t) {
                                var s = "".concat(e, "|").concat(t);
                                !r.reload && a.store.hasResourceBundle(e, t) ? a.state[s] = 2 : a.state[s] < 0 || (1 === a.state[s] ? i.indexOf(s) < 0 && i.push(s) : (a.state[s] = 1, n = !1, i.indexOf(s) < 0 && i.push(s), o.indexOf(s) < 0 && o.push(s), c.indexOf(t) < 0 && c.push(t)))
                            })), n || s.push(e)
                        })), (o.length || i.length) && this.queue.push({
                            pending: i,
                            loaded: {},
                            errors: [],
                            callback: n
                        }), {
                            toLoad: o,
                            pending: i,
                            toLoadLanguages: s,
                            toLoadNamespaces: c
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(e, t, r) {
                        var n = e.split("|"),
                            a = n[0],
                            o = n[1];
                        t && this.emit("failedLoading", a, o, t), r && this.store.addResourceBundle(a, o, r), this.state[e] = t ? -1 : 2;
                        var i = {};
                        this.queue.forEach((function(r) {
                            ! function(e, t, r, n) {
                                var a = w(e, t, Object),
                                    o = a.obj,
                                    i = a.k;
                                o[i] = o[i] || [], n && (o[i] = o[i].concat(r)), n || o[i].push(r)
                            }(r.loaded, [a], o),
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
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            i = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[r](e, t, (function(s, c) {
                            s && c && a < 5 ? setTimeout((function() {
                                n.read.call(n, e, t, r, a + 1, 2 * o, i)
                            }), o) : i(s, c)
                        })) : i(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function(e, t) {
                        var r = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
                        "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                        var o = this.queueLoad(e, t, n, a);
                        if (!o.toLoad.length) return o.pending.length || a(), null;
                        o.toLoad.forEach((function(e) {
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
                            a = n[0],
                            o = n[1];
                        this.read(a, o, "read", void 0, void 0, (function(n, i) {
                            n && t.logger.warn("".concat(r, "loading namespace ").concat(o, " for language ").concat(a, " failed"), n), !n && i && t.logger.log("".concat(r, "loaded namespace ").concat(o, " for language ").concat(a), i), t.loaded(e, n, i)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function(e, t, r, n, a) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(r, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== r && null !== r && "" !== r && (this.backend && this.backend.create && this.backend.create(e, t, r, n, null, o({}, i, {
                            isUpdate: a
                        })), e && e[0] && this.store.addResource(e[0], t, r, n))
                    }
                }]), t
            }(g);

            function U() {
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
                        if ("object" === n(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === n(e[2]) || "object" === n(e[3])) {
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

            function V(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function G() {}
            const W = new(function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    if (i(this, t), e = l(this, p(t).call(this)), T && g.call(u(e)), e.options = V(r), e.services = {}, e.logger = h, e.modules = {
                            external: []
                        }, n && !e.isInitialized && !r.isClone) {
                        if (!e.options.initImmediate) return e.init(r, n), l(e, u(e));
                        setTimeout((function() {
                            e.init(r, n)
                        }), 0)
                    }
                    return e
                }
                return d(t, e), c(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;

                        function n(e) {
                            return e ? "function" === typeof e ? new e : e : null
                        }
                        if ("function" === typeof t && (r = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = o({}, U(), this.options, V(t)), this.format = this.options.interpolation.format, r || (r = G), !this.options.isClone) {
                            this.modules.logger ? h.init(n(this.modules.logger), this.options) : h.init(null, this.options);
                            var a = new F(this.options);
                            this.store = new B(this.options.resources, this.options);
                            var i = this.services;
                            i.logger = h, i.resourceStore = this.store, i.languageUtils = a, i.pluralResolver = new N(a, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), i.interpolator = new H(this.options), i.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, i.backendConnector = new M(n(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                e.emit.apply(e, [t].concat(n))
                            })), this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = n(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new C(this.services, this.options), this.translator.on("*", (function(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
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
                        var l = y(),
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
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                            n = r,
                            a = "string" === typeof e ? e : this.language;
                        if ("function" === typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                            if (a && "cimode" === a.toLowerCase()) return n();
                            var o = [],
                                i = function(e) {
                                    e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                        o.indexOf(e) < 0 && o.push(e)
                                    }))
                                };
                            if (a) i(a);
                            else {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.forEach((function(e) {
                                    return i(e)
                                }))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return i(e)
                            })), this.services.backendConnector.load(o, this.options.ns, n)
                        } else n(null)
                    }
                }, {
                    key: "reloadResources",
                    value: function(e, t, r) {
                        var n = y();
                        return e || (e = this.languages), t || (t = this.options.ns), r || (r = G), this.services.backendConnector.reload(e, t, (function(e) {
                            n.resolve(), r(e)
                        })), n
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && D.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }
                }, {
                    key: "changeLanguage",
                    value: function(e, t) {
                        var r = this;
                        this.isLanguageChangingTo = e;
                        var n = y();
                        this.emit("languageChanging", e);
                        var a = function(e) {
                            var a = "string" === typeof e ? e : r.services.languageUtils.getBestMatchFromCodes(e);
                            a && (r.language || (r.language = a, r.languages = r.services.languageUtils.toResolveHierarchy(a)), r.translator.language || r.translator.changeLanguage(a), r.services.languageDetector && r.services.languageDetector.cacheUserLanguage(a)), r.loadResources(a, (function(e) {
                                ! function(e, a) {
                                    a ? (r.language = a, r.languages = r.services.languageUtils.toResolveHierarchy(a), r.translator.changeLanguage(a), r.isLanguageChangingTo = void 0, r.emit("languageChanged", a), r.logger.log("languageChanged", a)) : r.isLanguageChangingTo = void 0, n.resolve((function() {
                                        return r.t.apply(r, arguments)
                                    })), t && t(e, (function() {
                                        return r.t.apply(r, arguments)
                                    }))
                                }(e, a)
                            }))
                        };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(a) : a(e) : a(this.services.languageDetector.detect()), n
                    }
                }, {
                    key: "getFixedT",
                    value: function(e, t) {
                        var r = this,
                            a = function e(t, a) {
                                var i;
                                if ("object" !== n(a)) {
                                    for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++) c[u - 2] = arguments[u];
                                    i = r.options.overloadTranslationOptionHandler([t, a].concat(c))
                                } else i = o({}, a);
                                return i.lng = i.lng || e.lng, i.lngs = i.lngs || e.lngs, i.ns = i.ns || e.ns, r.t(t, i)
                            };
                        return "string" === typeof e ? a.lng = e : a.lngs = e, a.ns = t, a
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
                            a = !!this.options && this.options.fallbackLng,
                            o = this.languages[this.languages.length - 1];
                        if ("cimode" === n.toLowerCase()) return !0;
                        var i = function(e, r) {
                            var n = t.services.backendConnector.state["".concat(e, "|").concat(r)];
                            return -1 === n || 2 === n
                        };
                        if (r.precheck) {
                            var s = r.precheck(this, i);
                            if (void 0 !== s) return s
                        }
                        return !!this.hasResourceBundle(n, e) || (!this.services.backendConnector.backend || !(!i(n, e) || a && !i(o, e)))
                    }
                }, {
                    key: "loadNamespaces",
                    value: function(e, t) {
                        var r = this,
                            n = y();
                        return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((function(e) {
                            r.options.ns.indexOf(e) < 0 && r.options.ns.push(e)
                        })), this.loadResources((function(e) {
                            n.resolve(), t && t(e)
                        })), n) : (t && t(), Promise.resolve())
                    }
                }, {
                    key: "loadLanguages",
                    value: function(e, t) {
                        var r = y();
                        "string" === typeof e && (e = [e]);
                        var n = this.options.preload || [],
                            a = e.filter((function(e) {
                                return n.indexOf(e) < 0
                            }));
                        return a.length ? (this.options.preload = n.concat(a), this.loadResources((function(e) {
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
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                            a = o({}, this.options, r, {
                                isClone: !0
                            }),
                            i = new t(a),
                            s = ["store", "services", "language"];
                        return s.forEach((function(t) {
                            i[t] = e[t]
                        })), i.services = o({}, this.services), i.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i.translator = new C(i.services, i.options), i.translator.on("*", (function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            i.emit.apply(i, [e].concat(r))
                        })), i.init(a, n), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i
                    }
                }]), t
            }(g))
        },
        "6w+j": (e, t, r) => {
            var n = "__lodash_hash_undefined__",
                a = "[object Function]",
                o = "[object GeneratorFunction]",
                i = /^\[object .+?Constructor\]$/,
                s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                u = s || c || Function("return this")();
            var l = Array.prototype,
                p = Function.prototype,
                f = Object.prototype,
                d = u["__core-js_shared__"],
                v = function() {
                    var e = /[^.]+$/.exec(d && d.keys && d.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                h = p.toString,
                g = f.hasOwnProperty,
                y = f.toString,
                m = RegExp("^" + h.call(g).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                b = l.splice,
                w = T(u, "Map"),
                x = T(Object, "create");

            function _(e) {
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

            function k(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function S(e, t) {
                for (var r, n, a = e.length; a--;)
                    if ((r = e[a][0]) === (n = t) || r !== r && n !== n) return a;
                return -1
            }

            function A(e) {
                if (!D(e) || (t = e, v && v in t)) return !1;
                var t, r = function(e) {
                    var t = D(e) ? y.call(e) : "";
                    return t == a || t == o
                }(e) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (r) {}
                    return t
                }(e) ? m : i;
                return r.test(function(e) {
                    if (null != e) {
                        try {
                            return h.call(e)
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
                return A(r) ? r : void 0
            }

            function B(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        a = t ? t.apply(this, n) : n[0],
                        o = r.cache;
                    if (o.has(a)) return o.get(a);
                    var i = e.apply(this, n);
                    return r.cache = o.set(a, i), i
                };
                return r.cache = new(B.Cache || k), r
            }

            function D(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            _.prototype.clear = function() {
                this.__data__ = x ? x(null) : {}
            }, _.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, _.prototype.get = function(e) {
                var t = this.__data__;
                if (x) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return g.call(t, e) ? t[e] : void 0
            }, _.prototype.has = function(e) {
                var t = this.__data__;
                return x ? void 0 !== t[e] : g.call(t, e)
            }, _.prototype.set = function(e, t) {
                return this.__data__[e] = x && void 0 === t ? n : t, this
            }, E.prototype.clear = function() {
                this.__data__ = []
            }, E.prototype.delete = function(e) {
                var t = this.__data__,
                    r = S(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : b.call(t, r, 1), !0)
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
            }, k.prototype.clear = function() {
                this.__data__ = {
                    hash: new _,
                    map: new(w || E),
                    string: new _
                }
            }, k.prototype.delete = function(e) {
                return O(this, e).delete(e)
            }, k.prototype.get = function(e) {
                return O(this, e).get(e)
            }, k.prototype.has = function(e) {
                return O(this, e).has(e)
            }, k.prototype.set = function(e, t) {
                return O(this, e).set(e, t), this
            }, B.Cache = k, e.exports = B
        },
        F63i: e => {
            var t, r, n = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
                    t = "function" === typeof setTimeout ? setTimeout : a
                } catch (e) {
                    t = a
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    r = o
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
                            if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
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

            function v() {}
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new d(e, t)), 1 !== c.length || u || i(f)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(e) {
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

            function a() {}

            function o() {}
            o.resetWarningCache = a, e.exports = function() {
                function e(e, t, r, a, o, i) {
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
                    checkPropTypes: o,
                    resetWarningCache: a
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
        hTPx: (e, t) => {
            "use strict";
            var r = "function" === typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                a = r ? Symbol.for("react.portal") : 60106,
                o = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                l = r ? Symbol.for("react.async_mode") : 60111,
                p = r ? Symbol.for("react.concurrent_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                v = r ? Symbol.for("react.suspense_list") : 60120,
                h = r ? Symbol.for("react.memo") : 60115,
                g = r ? Symbol.for("react.lazy") : 60116,
                y = r ? Symbol.for("react.block") : 60121,
                m = r ? Symbol.for("react.fundamental") : 60117,
                b = r ? Symbol.for("react.responder") : 60118,
                w = r ? Symbol.for("react.scope") : 60119;

            function x(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case l:
                                case p:
                                case o:
                                case s:
                                case i:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case f:
                                        case g:
                                        case h:
                                        case c:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case a:
                            return t
                    }
                }
            }

            function _(e) {
                return x(e) === p
            }
            t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = n, t.ForwardRef = f, t.Fragment = o, t.Lazy = g, t.Memo = h, t.Portal = a, t.Profiler = s, t.StrictMode = i, t.Suspense = d, t.isAsyncMode = function(e) {
                return _(e) || x(e) === l
            }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
                return x(e) === u
            }, t.isContextProvider = function(e) {
                return x(e) === c
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return x(e) === f
            }, t.isFragment = function(e) {
                return x(e) === o
            }, t.isLazy = function(e) {
                return x(e) === g
            }, t.isMemo = function(e) {
                return x(e) === h
            }, t.isPortal = function(e) {
                return x(e) === a
            }, t.isProfiler = function(e) {
                return x(e) === s
            }, t.isStrictMode = function(e) {
                return x(e) === i
            }, t.isSuspense = function(e) {
                return x(e) === d
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === o || e === p || e === s || e === i || e === d || e === v || "object" === typeof e && null !== e && (e.$$typeof === g || e.$$typeof === h || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === m || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
            }, t.typeOf = x
        },
        kvVz: (e, t, r) => {
            "use strict";
            e.exports = r("hTPx")
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
                default: () => a
            });
            var n = "Invariant failed";
            const a = function(e, t) {
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
        YiZI: e => {
            "use strict";
            e.exports = {}
        },
        "47/P": (e, t, r) => {
            var n;
            if ("function" === typeof fetch && (n = "undefined" !== typeof r.g && r.g.fetch ? r.g.fetch : window.fetch ? window.fetch : fetch), "undefined" === typeof window.document) {
                var a = n || r("64TO");
                a.default && (a = a.default), t.default = a, e.exports = t.default
            }
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

            function n(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (error) {
                    return void r(error)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, o) {
                        var i = e.apply(t, r);

                        function s(e) {
                            n(i, a, o, s, c, "next", e)
                        }

                        function c(e) {
                            n(i, a, o, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            r.d(t, {
                A: () => a
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

            function a(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
            r.d(t, {
                A: () => a
            })
        },
        VKAp: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("m+Lx"),
                a = r("oH+a");

            function o(e) {
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
                    var r, o = (0, n.A)(e);
                    if (t) {
                        var i = (0, n.A)(this).constructor;
                        r = Reflect.construct(o, arguments, i)
                    } else r = o.apply(this, arguments);
                    return (0, a.A)(this, r)
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

            function a(e) {
                return n(e)
            }
            r.d(t, {
                A: () => a
            })
        },
        "2PCm": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("Wdkv");

            function a(e, t) {
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
                A: () => a
            });
            var n = r("ezuS");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), a.forEach((function(t) {
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
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            r.d(t, {
                A: () => n
            })
        },
        "oH+a": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("uqCI"),
                a = r("blBx");

            function o(e, t) {
                return !t || "object" !== (0, a.A)(t) && "function" !== typeof t ? (0, n.A)(e) : t
            }
        },
        Wdkv: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return n = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, n(e, t)
            }

            function a(e, t) {
                return n(e, t)
            }
            r.d(t, {
                A: () => a
            })
        },
        VP0d: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("x9Vb");
            var a = r("xjOY");

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || (0, n.A)(e, t) || (0, a.A)(e, t) || function() {
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
            var a = r("x9Vb");
            var o = r("xjOY");

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, n.A)(e)
                }(e) || (0, a.A)(e) || (0, o.A)(e) || function() {
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
                A: () => a
            });
            var n = r("BA4h");

            function a(e, t) {
                if (e) {
                    if ("string" === typeof e) return (0, n.A)(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.A)(e, t) : void 0
                }
            }
        },
        WOcg: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            const n = function() {
                this.__data__ = [], this.size = 0
            };
            var a = r("W17m");
            const o = function(e, t) {
                for (var r = e.length; r--;)
                    if ((0, a.A)(e[r][0], t)) return r;
                return -1
            };
            var i = Array.prototype.splice;
            const s = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
            };
            const c = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return r < 0 ? void 0 : t[r][1]
            };
            const u = function(e) {
                return o(this.__data__, e) > -1
            };
            const l = function(e, t) {
                var r = this.__data__,
                    n = o(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            };

            function p(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            p.prototype.clear = n, p.prototype.delete = s, p.prototype.get = c, p.prototype.has = u, p.prototype.set = l;
            const f = p
        },
        P4hI: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("q22z"),
                a = r("YmLP");
            const o = (0, n.A)(a.A, "Map")
        },
        jQwE: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => E
            });
            const n = (0, r("q22z").A)(Object, "create");
            const a = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            };
            const o = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            };
            var i = Object.prototype.hasOwnProperty;
            const s = function(e) {
                var t = this.__data__;
                if (n) {
                    var r = t[e];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return i.call(t, e) ? t[e] : void 0
            };
            var c = Object.prototype.hasOwnProperty;
            const u = function(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : c.call(t, e)
            };
            const l = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
            };

            function p(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            p.prototype.clear = a, p.prototype.delete = o, p.prototype.get = s, p.prototype.has = u, p.prototype.set = l;
            const f = p;
            var d = r("WOcg"),
                v = r("P4hI");
            const h = function() {
                this.size = 0, this.__data__ = {
                    hash: new f,
                    map: new(v.A || d.A),
                    string: new f
                }
            };
            const g = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            };
            const y = function(e, t) {
                var r = e.__data__;
                return g(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            };
            const m = function(e) {
                var t = y(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            };
            const b = function(e) {
                return y(this, e).get(e)
            };
            const w = function(e) {
                return y(this, e).has(e)
            };
            const x = function(e, t) {
                var r = y(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            };

            function _(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            _.prototype.clear = h, _.prototype.delete = m, _.prototype.get = b, _.prototype.has = w, _.prototype.set = x;
            const E = _
        },
        ViwL: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("q22z"),
                a = r("YmLP");
            const o = (0, n.A)(a.A, "Set")
        },
        yV5X: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("jQwE");
            const a = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            };
            const o = function(e) {
                return this.__data__.has(e)
            };

            function i(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new n.A; ++t < r;) this.add(e[t])
            }
            i.prototype.add = i.prototype.push = a, i.prototype.has = o;
            const s = i
        },
        VMO7: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = r("YmLP").A.Symbol
        },
        O7iy: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("VMO7"),
                a = Object.prototype,
                o = a.hasOwnProperty,
                i = a.toString,
                s = n.A ? n.A.toStringTag : void 0;
            const c = function(e) {
                var t = o.call(e, s),
                    r = e[s];
                try {
                    e[s] = void 0;
                    var n = !0
                } catch (c) {}
                var a = i.call(e);
                return n && (t ? e[s] = r : delete e[s]), a
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
        aBoh: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                return e.has(t)
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
                A: () => y
            });
            var n = r("QRTr");
            const a = r("YmLP").A["__core-js_shared__"];
            var o = function() {
                var e = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();
            const i = function(e) {
                return !!o && o in e
            };
            var s = r("Z8yJ"),
                c = r("Mip2"),
                u = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                p = Object.prototype,
                f = l.toString,
                d = p.hasOwnProperty,
                v = RegExp("^" + f.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const h = function(e) {
                return !(!(0, s.A)(e) || i(e)) && ((0, n.A)(e) ? v : u).test((0, c.A)(e))
            };
            const g = function(e, t) {
                return null == e ? void 0 : e[t]
            };
            const y = function(e, t) {
                var r = g(e, t);
                return h(r) ? r : void 0
            }
        },
        YmLP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("dCmz"),
                a = "object" == typeof self && self && self.Object === Object && self;
            const o = n.A || a || Function("return this")()
        },
        LqxT: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
        },
        Mip2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = Function.prototype.toString;
            const a = function(e) {
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
        W17m: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        QRTr: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("O7iy"),
                a = r("Z8yJ");
            const o = function(e) {
                if (!(0, a.A)(e)) return !1;
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
        "h/7X": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function() {}
        },
        TJcL: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var n = r("yV5X");
            const a = function(e, t, r, n) {
                for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a;)
                    if (t(e[o], o, e)) return o;
                return -1
            };
            const o = function(e) {
                return e !== e
            };
            const i = function(e, t, r) {
                for (var n = r - 1, a = e.length; ++n < a;)
                    if (e[n] === t) return n;
                return -1
            };
            const s = function(e, t, r) {
                return t === t ? i(e, t, r) : a(e, o, r)
            };
            const c = function(e, t) {
                return !!(null == e ? 0 : e.length) && s(e, t, 0) > -1
            };
            const u = function(e, t, r) {
                for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
                    if (r(t, e[n])) return !0;
                return !1
            };
            var l = r("aBoh"),
                p = r("ViwL"),
                f = r("h/7X"),
                d = r("LqxT");
            const v = p.A && 1 / (0, d.A)(new p.A([, -0]))[1] == 1 / 0 ? function(e) {
                return new p.A(e)
            } : f.A;
            const h = function(e, t, r) {
                var a = -1,
                    o = c,
                    i = e.length,
                    s = !0,
                    p = [],
                    f = p;
                if (r) s = !1, o = u;
                else if (i >= 200) {
                    var h = t ? null : v(e);
                    if (h) return (0, d.A)(h);
                    s = !1, o = l.A, f = new n.A
                } else f = t ? [] : p;
                e: for (; ++a < i;) {
                    var g = e[a],
                        y = t ? t(g) : g;
                    if (g = r || 0 !== g ? g : 0, s && y === y) {
                        for (var m = f.length; m--;)
                            if (f[m] === y) continue e;
                        t && f.push(y), p.push(g)
                    } else o(f, y, r) || (f !== p && f.push(y), p.push(g))
                }
                return p
            };
            const g = function(e) {
                return e && e.length ? h(e) : []
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [593], (() => (t("Mp1J"), t("nlrA"))));
        e.O()
    }
]);
//# debugId=6e03ed94-2c5e-5c21-a477-63a0a2f71208