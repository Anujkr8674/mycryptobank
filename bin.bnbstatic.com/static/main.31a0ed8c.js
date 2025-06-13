! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8d47b60b-6014-593d-9546-b7741a8111bd")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [755], {
        qT12: (e, t) => {
            "use strict";
            var r, n = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                c = Symbol.for("react.provider"),
                u = Symbol.for("react.context"),
                l = Symbol.for("react.server_context"),
                p = Symbol.for("react.forward_ref"),
                f = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                h = Symbol.for("react.memo"),
                v = Symbol.for("react.lazy"),
                y = Symbol.for("react.offscreen");

            function g(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case a:
                                case s:
                                case i:
                                case f:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case l:
                                        case u:
                                        case p:
                                        case v:
                                        case h:
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
            r = Symbol.for("react.module.reference")
        },
        TOwV: (e, t, r) => {
            "use strict";
            r("qT12")
        },
        "/Q1k": (e, t, r) => {
            "use strict";
            r.d(t, {
                Kq: () => w,
                bN: () => k,
                wA: () => E,
                d4: () => v
            });
            var n = r("NrPD"),
                o = r("NuT+"),
                a = r("hTvQ");
            let i = function(e) {
                e()
            };
            const s = () => i;
            var c = r("DTvD"),
                u = r.n(c);
            const l = (0, c.createContext)(null);

            function p() {
                return (0, c.useContext)(l)
            }
            let f = () => {
                throw new Error("uSES not initialized!")
            };
            const d = (e, t) => e === t;

            function h(e = l) {
                const t = e === l ? p : () => (0, c.useContext)(e);
                return function(e, r = d) {
                    const {
                        store: n,
                        subscription: o,
                        getServerState: a
                    } = t(), i = f(o.addNestedSub, n.getState, a || n.getState, e, r);
                    return (0, c.useDebugValue)(i), i
                }
            }
            const v = h();
            r("oXkQ"), r("TOwV");
            const y = {
                notify() {},
                get: () => []
            };

            function g(e, t) {
                let r, n = y;

                function o() {
                    i.onStateChange && i.onStateChange()
                }

                function a() {
                    r || (r = t ? t.addNestedSub(o) : e.subscribe(o), n = function() {
                        const e = s();
                        let t = null,
                            r = null;
                        return {
                            clear() {
                                t = null, r = null
                            },
                            notify() {
                                e((() => {
                                    let e = t;
                                    for (; e;) e.callback(), e = e.next
                                }))
                            },
                            get() {
                                let e = [],
                                    r = t;
                                for (; r;) e.push(r), r = r.next;
                                return e
                            },
                            subscribe(e) {
                                let n = !0,
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
                }
                const i = {
                    addNestedSub: function(e) {
                        return a(), n.subscribe(e)
                    },
                    notifyNestedSubs: function() {
                        n.notify()
                    },
                    handleChangeWrapper: o,
                    isSubscribed: function() {
                        return Boolean(r)
                    },
                    trySubscribe: a,
                    tryUnsubscribe: function() {
                        r && (r(), r = void 0, n.clear(), n = y)
                    },
                    getListeners: () => n
                };
                return i
            }
            const b = !("undefined" === typeof window.document || "undefined" === typeof window.document.createElement) ? c.useLayoutEffect : c.useEffect;
            let m = null;
            const w = function({
                store: e,
                context: t,
                children: r,
                serverState: n
            }) {
                const o = (0, c.useMemo)((() => {
                        const t = g(e);
                        return {
                            store: e,
                            subscription: t,
                            getServerState: n ? () => n : void 0
                        }
                    }), [e, n]),
                    a = (0, c.useMemo)((() => e.getState()), [e]);
                b((() => {
                    const {
                        subscription: t
                    } = o;
                    return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), a !== e.getState() && t.notifyNestedSubs(), () => {
                        t.tryUnsubscribe(), t.onStateChange = void 0
                    }
                }), [o, a]);
                const i = t || l;
                return u().createElement(i.Provider, {
                    value: o
                }, r)
            };

            function A(e = l) {
                const t = e === l ? p : () => (0, c.useContext)(e);
                return function() {
                    const {
                        store: e
                    } = t();
                    return e
                }
            }
            const _ = A();

            function x(e = l) {
                const t = e === l ? _ : A(e);
                return function() {
                    return t().dispatch
                }
            }
            const E = x();

            function S(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
            }

            function k(e, t) {
                if (S(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                const r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (let o = 0; o < r.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !S(e[r[o]], t[r[o]])) return !1;
                return !0
            }
            var O, j;
            O = o.useSyncExternalStoreWithSelector, f = O, (e => {
                m = e
            })(n.useSyncExternalStore), j = a.unstable_batchedUpdates, i = j
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
            var h = (0, s.S)().isHybrid,
                v = {
                    accountsSubDomain: "accounts"
                };
            var y = function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t, r, n, o, s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!h && c.U.read("cr00")) {
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
                g = function() {
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
                                    return t = !1, e.prev = 1, e.next = 4, g();
                                case 4:
                                    if (!e.sent.logged) {
                                        e.next = 9;
                                        break
                                    }
                                    t = !0, e.next = 12;
                                    break;
                                case 9:
                                    return e.next = 11, y();
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
                        var r, n, o, a, s, c, l, f, d, h, v, y, g = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = g.length > 1 && void 0 !== g[1] ? g[1] : {}, n = t.basePath, o = t.namespace, a = t.locale, s = void 0 === a ? "en" : a, c = t.fallback, l = void 0 === c ? "en" : c, f = t.enable2NsKey, d = void 0 !== f && f, n && o) {
                                        e.next = 4;
                                        break
                                    }
                                    throw TypeError("basePath and namespace must be defined");
                                case 4:
                                    return e.prev = 4, h = "".concat(n, "/").concat(s, "/").concat(o), e.next = 8, u(h, r);
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
                                    return y = {}, Object.keys(v).forEach((function(e) {
                                        y[e] = "".concat(o, ":").concat(e)
                                    })), e.abrupt("return", y);
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
        N3iv: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => me,
                pw: () => we
            });
            var n = r("gZfF"),
                o = r("A1pX"),
                a = r("UqW6"),
                i = r("sViW"),
                s = r("ezuS"),
                c = r("Pz56"),
                u = r.n(c),
                l = r("eZh5"),
                p = r("T3Fm"),
                f = function() {
                    var e = (0, i.A)(u().mark((function e(t, r, n, o) {
                        var a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(r.map((function(e) {
                                        return (0, l.TU)({
                                            basePath: p.o ? n : o,
                                            locale: t,
                                            namespace: e
                                        })
                                    })));
                                case 2:
                                    return a = e.sent, e.abrupt("return", r.reduce((function(e, t, r) {
                                        return Object.assign(e, (0, s.A)({}, t, a[r]))
                                    }), {}));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r, n, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = r("0HvA"),
                h = r("fLtG"),
                v = r("oG/F"),
                y = r("/4G5"),
                g = r("VA12");
            const b = function(e) {
                !p.o && e.apiHostPrivate ? (0, g.initConfig)((0, v.A)({
                    enableSentry: !0,
                    baseUrl: e.apiHostPrivate,
                    requestInterceptor: e.requestInterceptor,
                    responseInterceptor: e.responseInterceptor
                }, y.A)) : p.o && (0, g.initConfig)((0, v.A)({
                    baseUrl: e.apiHost,
                    enableSentry: !0,
                    accelerate: e.accelerate,
                    requestInterceptor: e.requestInterceptor,
                    responseInterceptor: e.responseInterceptor
                }, y.A))
            };
            var m = r("tEf9"),
                w = r("yV5X");
            const A = function(e, t, r, n) {
                for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o;)
                    if (t(e[a], a, e)) return a;
                return -1
            };
            const _ = function(e) {
                return e !== e
            };
            const x = function(e, t, r) {
                for (var n = r - 1, o = e.length; ++n < o;)
                    if (e[n] === t) return n;
                return -1
            };
            const E = function(e, t, r) {
                return t === t ? x(e, t, r) : A(e, _, r)
            };
            const S = function(e, t) {
                return !!(null == e ? 0 : e.length) && E(e, t, 0) > -1
            };
            const k = function(e, t, r) {
                for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
                    if (r(t, e[n])) return !0;
                return !1
            };
            var O = r("aBoh"),
                j = r("ViwL"),
                P = r("h/7X"),
                F = r("LqxT");
            const T = j.A && 1 / (0, F.A)(new j.A([, -0]))[1] == 1 / 0 ? function(e) {
                return new j.A(e)
            } : P.A;
            const B = function(e, t, r) {
                var n = -1,
                    o = S,
                    a = e.length,
                    i = !0,
                    s = [],
                    c = s;
                if (r) i = !1, o = k;
                else if (a >= 200) {
                    var u = t ? null : T(e);
                    if (u) return (0, F.A)(u);
                    i = !1, o = O.A, c = new w.A
                } else c = t ? [] : s;
                e: for (; ++n < a;) {
                    var l = e[n],
                        p = t ? t(l) : l;
                    if (l = r || 0 !== l ? l : 0, i && p === p) {
                        for (var f = c.length; f--;)
                            if (c[f] === p) continue e;
                        t && c.push(p), s.push(l)
                    } else o(c, p, r) || (c !== s && c.push(p), s.push(l))
                }
                return s
            };
            const C = function(e) {
                return e && e.length ? B(e) : []
            };
            const D = function(e) {
                e.ns = C([e.defaultNS].concat((0, m.A)(e.ns)));
                var t = e.defaultLocale,
                    r = e.ns,
                    n = e.basePath,
                    o = e.basePathPrivate;
                e.getter = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o;
                    return f(e, a, i, s)
                }
            };
            var R, I = r("BK7R"),
                N = r("QUKP"),
                L = r("zJWh"),
                U = r("vpUY"),
                H = r("dX47"),
                M = r("Cjys"),
                V = r("zvJu"),
                q = (r("3as9"), (0, U.S)().isHybrid);
            ! function(e) {
                e.Electron = "electron", e.Hybrid = "Hybrid", e.Web = "Web"
            }(R || (R = {}));
            var W, K, G = function() {
                    return /electron/i.test(navigator.userAgent) ? R.Electron : q ? R.Hybrid : R.Web
                },
                z = function(e, t) {
                    var r = document.createElement("script");
                    r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001");
                    var n = document.getElementsByTagName("script")[0];
                    r.async = !0, r.src = e, r.onload = t, (null === n || void 0 === n ? void 0 : n.parentNode) ? n.parentNode.insertBefore(r, n) : document.body.appendChild(r)
                },
                $ = [],
                J = "UA-162512367-1",
                Y = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "use"],
                X = (0, U.S)().isHybrid,
                Z = (0, M.vt)((0, M.Q)(H)),
                Q = function(e) {
                    var t = e.sdk_url,
                        r = void 0 === t ? "https://bin.bnbstatic.com/static/sensors/sensorsdata@1.15.26.js" : t,
                        o = e.heatmap_url,
                        a = void 0 === o ? "https://bin.bnbstatic.com/static/sensors/heatmap@1.15.26.js" : o,
                        i = e.name,
                        s = void 0 === i ? "sensor" : i,
                        c = (0, n.A)(e, ["sdk_url", "heatmap_url", "name"]);
                    if (r = r.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), a = a.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), window.sensorsDataAnalytic201505 = s, !window[s]) {
                        window[s] = window[s] || function(e) {
                            return function() {
                                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                (window[s]._q = window[s]._q || []).push([e, r])
                            }
                        }, W = window[s];
                        for (var u = 0; u < Y.length; u++) W[Y[u]] = W.call(null, Y[u]);
                        W._t || (z(r, (function() {
                            return W = window[s]
                        })), W.para = (0, N.A)((0, I.A)({}, c), {
                            heatmap_url: a
                        }))
                    }
                },
                ee = function() {
                    return function() {
                        var e = Object.create(null);
                        Y.forEach((function(t) {
                            e[t] = {
                                configurable: !0,
                                get: function() {
                                    return W ? W[t] : (p.o && console.error("error: run ".concat(t, " handler after init")), console.log("empty", W), function() {})
                                }
                            }
                        }));
                        var t = Object.create(null);
                        return Object.defineProperties(t, e), t.init = p.o ? Q : function() {}, t
                    }()
                },
                te = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n;
                    (n = console).log.apply(n, ["ssr call"].concat((0, m.A)(t)))
                },
                re = function() {
                    "y" === L.U.read("data_opt_out") ? window["ga-disable-".concat(J)] = !0 : window["ga-disable-".concat(J)] = !1
                },
                ne = function(e) {
                    var t = e.sdk_url,
                        r = void 0 === t ? "https://www.google-analytics.com/analytics.js" : t,
                        n = e.name,
                        o = void 0 === n ? "ga" : n;
                    window.GoogleAnalyticsObject = o, window[o] || (window[o] = window[o] || function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        (window[o].q = window[o].q || []).push(t)
                    }, window[o].l = +new Date), document.querySelector("script[src*=analytics]") || z(r, (function() {
                        return K = window[o]
                    })), (K = window[o])("create", J, "auto")
                };
            const oe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (p.o) {
                    re(), ne(e);
                    var t = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        K.apply(void 0, (0, m.A)(t))
                    };
                    return t.track = function(e, t, r) {
                        K("send", {
                            hitType: "event",
                            eventCategory: e,
                            eventAction: null === t || void 0 === t ? void 0 : t.elementID,
                            eventLabel: window.location,
                            custom_dimension: t,
                            hitCallback: r
                        })
                    }, t.login = function(e) {
                        K("set", "userId", e)
                    }, t
                }
                var r = function() {};
                return r.track = te, r.login = te, r
            };
            var ae = r("err1"),
                ie = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                };
            const se = function(e) {
                return ie(e)
            };
            var ce = r("tbM7"),
                ue = r("BMJD"),
                le = function(e) {
                    if (p.o) {
                        var t = window.location.host;
                        (t.includes("qa1fdg") || t.includes("devfdg") || t.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === L.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                pe = function() {
                    var e = (0, i.A)(u().mark((function e(t, r) {
                        var n, o, a, i, s, c, l;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.getUserId, o = t.cancel, a = t.extraParams, p.o && !o && r) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (i = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), s = i ? i[2] : "/", c = {
                                            pageName: s,
                                            bncUUID: L.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, ce.CY)();
                                case 9:
                                    if (!e.sent) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!n) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 14, n();
                                case 14:
                                    e.t0 = e.sent, e.next = 20;
                                    break;
                                case 17:
                                    return e.next = 19, (0, ue.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    l = e.t0, c.userId = l, se(l);
                                case 23:
                                    c = (0, I.A)({}, c, "object" === typeof a ? a : {}), le({
                                        event: "page loading",
                                        page_load_info: c
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                fe = r("pu3o"),
                de = r.n(fe),
                he = function() {};
            const ve = function(e) {
                var t = e.sensorsConfig,
                    r = e.ableGA,
                    o = e.otherDisabledEvent,
                    a = void 0 === o ? $ : o,
                    i = e.pageViewLayerConfig,
                    s = void 0 === i ? {} : i,
                    c = e.autoLogin,
                    u = void 0 === c || c;
                he();
                var l, f, d = [],
                    h = function(e, t, r) {
                        if ((null === t || void 0 === t ? void 0 : t.elementId) && (t.elementID = t.elementId, delete t.elementId), (null === t || void 0 === t ? void 0 : t.extraInfo) && (t.extraInfo = JSON.stringify(t.extraInfo)), location.origin.includes("localhost")) {
                            if (e.startsWith("$")) throw new Error('event name must not start with "$"');
                            if (Number.isInteger(e[0])) throw new Error("event name cannot start with a number");
                            if (!/^[0-9a-zA-Z_\$]+$/.test(e)) throw new Error("event name can only contain numbers/letters/underscores/$")
                        }
                        l.track(e, t, r)
                    };
                try {
                    window.__PIKA_TRACK__ && (l = window.__PIKA_TRACK__.sensors, d.push(h))
                } catch (F) {}
                if (!window.__PIKA_TRACK__ && t) {
                    var v = t.staticHost,
                        y = (t.update, t.old),
                        g = (t.test, t.publicParams),
                        b = t.initParams,
                        w = (0, n.A)(t, ["staticHost", "update", "old", "test", "publicParams", "initParams"]);
                    l = ee();
                    var A = (0, I.A)({
                        name: "SensorsSdk",
                        send_type: "beacon",
                        use_client_time: !0,
                        datasend_timeout: 1e4,
                        is_track_single_page: !0,
                        app_js_bridge: {
                            white_list: (0, m.A)(new Set([null === w || void 0 === w ? void 0 : w.server_url, "https://sensors.binance.cloud/sa?project=binance", "https://api.saasexch.com/bapi/fe/usd/sa?project=binance", "https://api.saasexch.cc/bapi/fe/usd/sa?project=binance", "https://api.saasexch.co/bapi/fe/usd/sa?project=binance", "https://api.saasexch.io/bapi/fe/usd/sa?project=binance", "https://api.saasexch.info/bapi/fe/usd/sa?project=binance"].filter(Boolean)))
                        },
                        show_log: !1,
                        heatmap: {
                            collect_tags: {
                                div: !0
                            }
                        }
                    }, w);
                    v && (y ? Object.assign(A, {
                        sdk_url: "".concat(v, "/static/sensors/sensorsdata@1.15.26.js"),
                        heatmap_url: "".concat(v, "/static/sensors/heatmap@1.15.26.js"),
                        vtrack_url: "".concat(v, "/static/sensors/vtrack.min.js")
                    }) : Object.assign(A, {
                        sdk_url: "".concat(v, "/static/sensors/sensorsdata@1.26.12.js"),
                        heatmap_url: "".concat(v, "/static/sensors/heatmap@1.26.12.js"),
                        vtrack_url: "".concat(v, "/static/sensors/vtrack@1.26.12.js")
                    }));
                    try {
                        var _, x, E, S = (null === (x = null === w || void 0 === w || null === (_ = w.server_url) || void 0 === _ ? void 0 : _.split("?")) || void 0 === x ? void 0 : x[1]) || "",
                            k = de().parse(S).project;
                        k && (E = "https://ss.datasconsole.com?project=".concat(k)), E && (A.web_url = E)
                    } catch (F) {}
                    b && Object.assign(A, b), l.init(A),
                        function(e, t) {
                            if (p.o) {
                                (0, V.o)(t);
                                var r = /\/([a-z]{2}(-[a-zA-Z]{2})?)(\/)?/,
                                    n = window.location,
                                    o = n.pathname,
                                    a = n.hash,
                                    i = o.match(r),
                                    s = R.Web,
                                    c = i ? i[1] : String();
                                if (G() === R.Electron && (i = a.match(r), c = i ? i[1] : String(), s = R.Electron), X) {
                                    var u = !0,
                                        l = [],
                                        f = e.quick;
                                    Object.defineProperty(e, "quick", {
                                        get: function() {
                                            return function(e) {
                                                u ? l.push((function() {
                                                    return f(e)
                                                })) : f(e)
                                            }
                                        }
                                    }), Z.getAppConfig().then((function(r) {
                                        var n = r.project_type;
                                        u = !1, e.registerPage((0, N.A)((0, I.A)({
                                            $url: window.location.href,
                                            $bot_name: L.U.read("bnc-uuid"),
                                            df_1: n,
                                            df_fvideoid: L.U.read("BNC_FV_KEY")
                                        }, t), {
                                            df_2: c,
                                            theme: L.U.read("theme")
                                        })), l.forEach((function(e) {
                                            return e()
                                        }))
                                    }))
                                } else e.registerPage((0, N.A)((0, I.A)({
                                    $url: window.location.href,
                                    $bot_name: L.U.read("bnc-uuid"),
                                    df_1: s,
                                    df_fvideoid: L.U.read("BNC_FV_KEY")
                                }, t), {
                                    df_2: c,
                                    theme: L.U.read("theme")
                                }))
                            }
                        }(l, g), l.use("PageLeave", {
                            custom_props: {},
                            heartbeat_interval_time: 5
                        }), d.push(h)
                }
                if (r) {
                    var O;
                    f = oe();
                    d.push((function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return (O = f).track.apply(O, (0, m.A)(t))
                    }))
                }
                if (d.length) {
                    var j = function(e, t, r) {
                        var n = [],
                            o = function() {
                                var e = {
                                    gaTrack: "gaDisabled",
                                    bTrack: "bTrackDisabled",
                                    sensorsTrack: "sensorsDisabled"
                                };
                                return function(t, r) {
                                    return !r[e[t]]
                                }
                            }();
                        return function(e, t) {
                            return !Array.isArray(t) || !t.find((function(t) {
                                return t === e
                            }))
                        }(e, a) && d.forEach((function(a) {
                            o(a.name, r) && n.push(function(e, t, r) {
                                return new Promise((function(n) {
                                    r(e, (0, I.A)({}, t), (function(e) {
                                        return n({
                                            type: r.name,
                                            success: "boolean" !== typeof e || e
                                        })
                                    })), setTimeout((function() {
                                        n({
                                            type: r.name,
                                            success: !1
                                        })
                                    }), 5e3)
                                }))
                            }(e, t, a))
                        })), Promise.all(n).then(null === r || void 0 === r ? void 0 : r.callback), n[n.length - 1]
                    };
                    j && (0, ae.D)(j),
                        function(e) {
                            ie = e
                        }((function(e) {
                            l && l.login(e), f && f.login(e)
                        }))
                }
                try {
                    if (window.__PIKA_TRACK__) return window.__PIKA_TRACK__
                } catch (T) {}
                pe(s, u);
                try {
                    var P = Object.create(l);
                    Object.defineProperty(P, "quick", {
                        configurable: !0,
                        value: function() {}
                    }), window.__PIKA_TRACK__ = {
                        sensors: P,
                        ga: f
                    }
                } catch (B) {}
                return {
                    sensors: l,
                    ga: f
                }
            };
            const ye = function(e) {
                var t = e.serverUrl,
                    r = e.staticHost,
                    o = e.sensorsConfig,
                    a = (0, n.A)(e, ["serverUrl", "staticHost", "sensorsConfig"]);
                ve((0, I.A)({
                    sensorsConfig: (0, I.A)({
                        server_url: t,
                        staticHost: r
                    }, o)
                }, a)).sensors.quick("autoTrack", {
                    canary: "beta"
                })
            };
            const ge = function(e) {
                var t;
                e.runtime = new Proxy(null !== (t = e.runtime) && void 0 !== t ? t : {}, {
                    get: function(e, t, r) {
                        return !Reflect.has(e, t) && console.warn("[growth-utils:config] `config.runtime.".concat(t.toString(), "` isn't initialized."), " It needs to be set through initConfig({ runtime: ... })."), Reflect.get(e, t, r)
                    }
                })
            };
            var be = {
                http: {
                    apiHost: "",
                    apiHostPrivate: "",
                    accelerate: void 0
                },
                i18n: {
                    defaultLocale: "en",
                    defaultNS: "",
                    ns: [],
                    localeParam: "lng",
                    localeProp: "locale",
                    i18nResourcesProp: "i18nResources",
                    getter: f,
                    basePath: "",
                    basePathPrivate: ""
                },
                track: {
                    trackFn: void 0
                },
                runtime: {}
            };
            const me = be;
            var we = function(e) {
                if ((0, o.A)(be, e), ge(be), be.http && b(be.http), be.i18n && D(be.i18n), be.logger && (0, d.b)(be.logger), be.track) {
                    var t = be.track,
                        r = t.trackFn,
                        i = (0, n.A)(t, ["trackFn"]);
                    r && (0, h.m)(r), !(0, a.A)(i) && ye(i)
                }
            }
        },
        LKsJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                KL: () => n,
                Ke: () => o,
                o3: () => a
            });
            var n = {
                    email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    password: /(?=.*\d)(?=.*[A-Z])[\s\S]{8,}/,
                    userId: /^[A-Za-z0-9]{8}$/,
                    smsCode: /^\d{6}$/,
                    googleCode: /^\d{6}$/,
                    punctuation: /['!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\xa5\uff5e\s\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3021\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/g,
                    specialCode: /[\\[\]`~!#\\$\\^&\\*()=|{}':;,\\.<>\\/\\?~\uff01\uffe5\u2026\uff08\uff09\u2014\u3010\u3011\u2018\uff1b\uff1a\u201d\u201c\u3002\uff0c\u3001\uff1f]/,
                    ip: /((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)/,
                    withdrawAmount: /^\d+\.?\d{0,}$/
                },
                o = "undefined" !== typeof globalThis ? globalThis : window,
                a = function(e) {
                    return e.indexOf("www.qa1fdg.net") > -1 || e.indexOf("www.devfdg.net") > -1
                }
        },
        "7u/i": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                s: () => getSSRAsyncContext
            });
            var _binance_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T3Fm"),
                SSRAsyncContext, getSSRAsyncContext = function() {
                    if (_binance_utils__WEBPACK_IMPORTED_MODULE_0__.o) return null;
                    if (!SSRAsyncContext) {
                        var AsyncLocalStorage = eval('typeof window === "undefined" && require("async_hooks")').AsyncLocalStorage;
                        SSRAsyncContext = AsyncLocalStorage ? new AsyncLocalStorage : null
                    }
                    return SSRAsyncContext
                }
        },
        aCC2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("T3Fm"),
                o = r("hqSB"),
                a = r.n(o);
            a().level(n.o ? "error" : "info");
            const i = a()
        },
        xj71: (e, t, r) => {
            "use strict";
            r.d(t, {
                Jt: () => g,
                bE: () => m
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("dmbe"),
                s = r("A1pX"),
                c = r("VA12"),
                u = r("wwcI"),
                l = r("aCC2"),
                p = r("1NXp"),
                f = function(e, t, r, n) {
                    return l.A.info("[RequestSent] ".concat(e, " ").concat(t, ":"), "\n  - params:", "GET" !== e ? r : "", "\n  - options:", n)
                },
                d = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return l.A.warn("[RequestFailed] ".concat(e, " ").concat(t, " (").concat((0, i.A)(r, "code"), "):\n      ").concat((0, i.A)(r, "errorMsg.message"), "\n      ").concat((0, i.A)(r, "stack"), "\n    "))
                },
                h = (0, c.fetchOrigin)().fetch,
                v = {
                    method: "GET",
                    mod: "cors"
                },
                y = (function() {
                    var e = (0, n.A)(a().mark((function e(t, r, n) {
                        var o, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = (0, s.A)({}, v, n), e.next = 3, h((0, u.m)(t, r), o);
                                case 3:
                                    if (!(i = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", i.json());
                                case 6:
                                    return d(o.method, t), e.abrupt("return", {});
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e) {
                    return (0, s.A)((0, p.Dt)(), e)
                }),
                g = function() {
                    var e = (0, n.A)(a().mark((function e(t, r, n) {
                        var o, i, s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = (0, u.m)(t, r), i = y(n), f("GET", o, r, i), e.next = 6, (0, c.get)(o, i);
                                case 6:
                                    return s = e.sent, e.abrupt("return", s || {});
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), d("GET", t, e.t0), e.abrupt("return", {
                                        success: !1,
                                        message: e.t0.message,
                                        errorData: e.t0
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function(e) {
                    return function() {
                        var t = (0, n.A)(a().mark((function t(r, n, o, i) {
                            var s, c, l;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return s = i ? (0, u.m)(r, i) : r, t.prev = 1, c = y(o), f("POST", s, n, c), t.next = 6, e(s, n, c);
                                    case 6:
                                        return l = t.sent, t.abrupt("return", l || {});
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(1), d("POST", s, t.t0), t.abrupt("return", {
                                            success: !1,
                                            message: t.t0.message,
                                            errorData: t.t0
                                        });
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 10]
                            ])
                        })));
                        return function(e, r, n, o) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                m = b(c.post);
            b(c.postForm),
                function() {
                    var e = (0, n.A)(a().mark((function e(t, r, n) {
                        var o, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = y(n), f("PUT", t, r, o), e.next = 5, (0, c.put)(t, r, o);
                                case 5:
                                    return i = e.sent, e.abrupt("return", i || {});
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), d("PUT", t, e.t0), e.abrupt("return", {
                                        success: !1,
                                        message: e.t0.message,
                                        errorData: e.t0
                                    });
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })))
                }()
        },
        "1NXp": (e, t, r) => {
            "use strict";
            r.d(t, {
                Dt: () => w,
                bh: () => m
            });
            var n = r("BK7R"),
                o = r("gZfF"),
                a = (r("Pz56"), r("oG/F")),
                i = r("/4G5"),
                s = r("A1pX"),
                c = r("7u/i"),
                u = r("aCC2"),
                l = r("qu3m"),
                p = r("dmbe"),
                f = r("T3Fm").o && window.location,
                d = ["x-real-ip"],
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
                    return (0, l.A)((0, p.A)(e, "headers"), (function(e, r) {
                        return !t.includes(r.toLowerCase()) && /^x-/i.test(r)
                    }))
                },
                v = function(e) {
                    return {
                        "x-host": f ? window.location.host : e.headers.host
                    }
                },
                y = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return {
                        lang: t,
                        headers: (0, s.A)(v(e), h(e, r))
                    }
                },
                g = function(e) {
                    return (0, a.A)(e, (function(e) {
                        return (0, i.A)(e)
                    }))
                },
                b = (0, c.s)(),
                m = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (b) {
                        var a = r.headers,
                            i = void 0 === a ? {} : a,
                            c = (0, o.A)(r, ["headers"]),
                            l = (0, s.A)({}, y(e, t), (0, n.A)({
                                headers: g(i)
                            }, g(c)));
                        b.enterWith({
                            forwardedOptions: l
                        }), u.A.info("[HTTP-SSR] SSRAsyncContext ", JSON.stringify(b.getStore()))
                    }
                },
                w = function() {
                    var e = ((null === b || void 0 === b ? void 0 : b.getStore()) || {}).forwardedOptions;
                    return void 0 === e ? {} : e
                }
        },
        "0HvA": (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => n,
                b: () => d,
                j3: () => c,
                vF: () => g
            });
            var n, o = r("2URn"),
                a = r("A1pX"),
                i = r("T3Fm"),
                s = r("AUe6"),
                c = "14";
            ! function(e) {
                e.GENERAL = "00", e.MARKET_ACTIVITY_UI = "01", e.REFERRAL_UI = "02", e.SEO_UI = "03", e.REWARDS_HUB_UI = "04", e.GROWTH_GAME_UI = "05", e.GROWTH_ADMIN_UI = "06", e.GROWTH_EXTERNAL_UI = "07"
            }(n || (n = {}));
            var u, l = {
                    info: {
                        prefix: "[INFO] ",
                        ssrFn: console.info
                    },
                    log: {
                        prefix: "[LOG] ",
                        ssrFn: console.log
                    },
                    warn: {
                        prefix: "[WARN] ",
                        ssrFn: console.warn
                    },
                    error: {
                        prefix: "[ERROR] ",
                        ssrFn: console.error
                    }
                },
                p = "",
                f = "",
                d = function(e) {
                    var t = e.reportFunction,
                        r = e.moduleCode,
                        o = e.buCode;
                    u = t, p = o && /^\d{2}$/.test(o) ? o : c, f = r && /^\d{2}$/.test(r) ? r : n.GENERAL
                },
                h = function(e) {
                    try {
                        u(e)
                    } catch (t) {
                        console.warn("[utils | logger] reportError error", t)
                    }
                };

            function v(e, t, r) {
                var n;
                /^\d{7}$/.test(e) ? n = e : /^\d{3}$/.test(e) ? n = "".concat(p).concat(f).concat(e) : (console.warn("[utils | logger] invalid code", e), n = "".concat(p).concat(f, "000"));
                var o = {
                    isClient: i.o
                };
                i.o && (o.pageUrl = s.nk);
                var c = (0, a.A)(o, r);
                try {
                    u(n, t, c), /localhost/.test(s.nk) && console.log("[utils | logger] ", 'code "'.concat(n, '"'), t, c)
                } catch (l) {
                    console.warn("[utils | logger] logger error", l)
                }
            }
            var y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.log,
                        t = function(t, r, n) {
                            var a, s, c;
                            if (i.o || (u = function() {
                                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                    return e.ssrFn(JSON.stringify(r))
                                }), u || (console.warn("[utils | logger] logger has not been initialized, output to default console"), u = console[Object.keys(l).find((function(t) {
                                    return l[t] === e
                                })) || "log"]), (0, o.A)(t, Error)) return h(t);
                            "string" === typeof r ? (a = t, s = r, c = n) : (a = "000", s = t, c = r || {}), v(a, "".concat(e.prefix).concat(s), c)
                        };
                    return t
                },
                g = {
                    log: y(l.log),
                    info: y(l.info),
                    warn: y(l.warn),
                    error: y(l.error)
                }
        },
        fLtG: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => s,
                u: () => c
            });
            var n = r("tEf9"),
                o = r("GlbY").Ay,
                a = void 0,
                i = o,
                s = function(e) {
                    i = e
                },
                c = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return new Promise((function(e, r) {
                        try {
                            return i.apply(a, (0, n.A)(t)), e()
                        } catch (o) {
                            return r(o)
                        }
                    }))
                }
        },
        wwcI: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => m
            });
            var n = r("VP0d"),
                o = r("/4G5"),
                a = r("2URn"),
                i = r("tEf9"),
                s = r("A1pX"),
                c = r("GR8Z"),
                u = r("jEyD"),
                l = r("pPlv");
            const p = (0, r("q5NF").A)((function(e, t, r, n) {
                (0, l.A)(e, t, r, n)
            }));
            var f = r("rnGa"),
                d = r("Tr7W"),
                h = r("W0y1"),
                v = r("AUe6"),
                y = {
                    mode: "merge",
                    defaults: {}
                },
                g = function(e, t) {
                    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                    var l = (0, s.A)({}, y, t),
                        g = l.source,
                        b = l.mode,
                        m = l.defaults;
                    try {
                        if (!g && !v.VK || !e) return e;
                        var w = h.K.apply(void 0, [g].concat((0, i.A)(n))),
                            A = "".concat((0, v.$z)(e, "")).concat(e);
                        if (v.vx) {
                            var _ = n.length ? n : Object.keys(w),
                                x = new URL(A),
                                E = (0, c.A)(w, (function(e) {
                                    return (0, u.A)(e) ? e : [e]
                                }));
                            Array.from(_).forEach((function(e) {
                                var t = "append" === b ? "append" : "set";
                                e in w ? E[e].forEach((function(r) {
                                    return x.searchParams[t](e, r)
                                })) : m[e] && x.searchParams[t](e, m[e])
                            }));
                            var S = x.pathname,
                                k = x.search,
                                O = x.href;
                            return decodeURI((0, v.n3)(e) ? "".concat(S).concat(k) : O)
                        }
                        var j = p(w, m, f.A),
                            P = d.parseUrl(A),
                            F = function(e, t) {
                                return (0, u.A)(e) ? e.concat(t) : [e].concat(t)
                            };
                        "append" === b ? p(P.query, j, F) : (0, s.A)(P.query, j);
                        var T = d.stringifyUrl(P).replace((0, v.$z)(e), "");
                        return T
                    } catch (B) {
                        if ((0, a.A)(B, TypeError)) return e;
                        throw B
                    }
                },
                b = function(e) {
                    return (0, o.A)(e) ? "" : e
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = Object.entries(t).reduce((function(e, t, r) {
                            var o = (0, n.A)(t, 2),
                                a = o[0],
                                i = o[1];
                            return "".concat(e).concat(r ? "&" : "").concat(a, "=").concat(b(i))
                        }), "?");
                    return g(e, {
                        source: "".concat(v.aG).concat(r)
                    })
                }
        },
        W0y1: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => c,
                e: () => u
            });
            var n = r("tEf9"),
                o = r("A1pX"),
                a = r("Pac+"),
                i = r("Tr7W"),
                s = r("AUe6"),
                c = function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++) r[c - 1] = arguments[c];
                    var u = {};
                    if (!e && !s.VK) return u;
                    var l = e || s.nk,
                        p = "".concat((0, s.$z)(l, "")).concat(l);
                    if (s.vx) {
                        var f = new URL(p).searchParams,
                            d = r.length ? r : f.keys();
                        Array.from(d).forEach((function(e) {
                            f.has(e) && (u[e] = f.getAll(e), u[e] = u[e].length > 1 ? u[e] : u[e][0])
                        }))
                    } else {
                        var h = i.parseUrl(p).query;
                        (0, o.A)(u, r.length ? a.A.apply(void 0, [h].concat((0, n.A)(r))) : h)
                    }
                    return u
                },
                u = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return c.apply(void 0, [null].concat((0, n.A)(t)))
                }
        },
        AUe6: (e, t, r) => {
            "use strict";
            r.d(t, {
                $z: () => q,
                VK: () => N,
                n3: () => V,
                vx: () => L,
                A5: () => U,
                nk: () => M,
                aG: () => H,
                bk: () => W
            });
            var n = r("dmbe"),
                o = r("u0SH"),
                a = r("0Bcc");
            const i = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            };
            var s = r("xQ2A"),
                c = r("VFw1");
            const u = function(e, t) {
                return t.length < 2 ? e : (0, s.A)(e, (0, c.A)(t, 0, -1))
            };
            var l = r("IX6G");
            const p = function(e, t, r) {
                t = (0, a.A)(t, e);
                var n = null == (e = u(e, t)) ? e : e[(0, l.A)(i(t))];
                return null == n ? void 0 : (0, o.A)(n, e, r)
            };
            const f = (0, r("1CEv").A)(p);
            var d = r("itBc");
            const h = function() {};

            function v(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            v.prototype = (0, d.A)(h.prototype), v.prototype.constructor = v;
            const y = v;
            var g = r("N8de"),
                b = r("KXmo");
            const m = b.A && new b.A;
            var w = r("h/7X");
            const A = m ? function(e) {
                return m.get(e)
            } : w.A;
            const _ = {};
            var x = Object.prototype.hasOwnProperty;
            const E = function(e) {
                for (var t = e.name + "", r = _[t], n = x.call(_, t) ? r.length : 0; n--;) {
                    var o = r[n],
                        a = o.func;
                    if (null == a || a == e) return o.name
                }
                return t
            };
            var S = r("jEyD");

            function k(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            k.prototype = (0, d.A)(h.prototype), k.prototype.constructor = k;
            const O = k;
            var j = r("ga/a"),
                P = r("D4m/");
            const F = function(e) {
                if (e instanceof O) return e.clone();
                var t = new y(e.__wrapped__, e.__chain__);
                return t.__actions__ = (0, P.A)(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            };
            var T = Object.prototype.hasOwnProperty;

            function B(e) {
                if ((0, j.A)(e) && !(0, S.A)(e) && !(e instanceof O)) {
                    if (e instanceof y) return e;
                    if (T.call(e, "__wrapped__")) return F(e)
                }
                return new y(e)
            }
            B.prototype = h.prototype, B.prototype.constructor = B;
            const C = B;
            const D = function(e) {
                var t = E(e),
                    r = C[t];
                if ("function" != typeof r || !(t in O.prototype)) return !1;
                if (e === r) return !0;
                var n = A(r);
                return !!n && e === n[0]
            };
            const R = function(e) {
                return (0, g.A)((function(t) {
                    var r = t.length,
                        n = r,
                        o = y.prototype.thru;
                    for (e && t.reverse(); n--;) {
                        var a = t[n];
                        if ("function" != typeof a) throw new TypeError("Expected a function");
                        if (o && !i && "wrapper" == E(a)) var i = new y([], !0)
                    }
                    for (n = i ? n : r; ++n < r;) {
                        a = t[n];
                        var s = E(a),
                            c = "wrapper" == s ? A(a) : void 0;
                        i = c && D(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? i[E(c[0])].apply(i, c[3]) : 1 == a.length && D(a) ? i[s]() : i.thru(a)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (i && 1 == e.length && (0, S.A)(n)) return i.plant(n).value();
                        for (var o = 0, a = r ? t[o].apply(this, e) : n; ++o < r;) a = t[o].call(this, a);
                        return a
                    }
                }))
            }();
            r("EfWO");
            var I = r("LKsJ"),
                N = (0, n.A)(window, "location"),
                L = "undefined" !== typeof URL,
                U = N ? window.location.host : "www.binance.com",
                H = N ? window.location.origin : "https://www.binance.com",
                M = N ? window.location.href : "https://www.binance.com",
                V = (N && window.location.pathname, function(e) {
                    return f(e, "startsWith", "/")
                }),
                q = function(e, t) {
                    return V(e) ? H : t
                };
            R((function(e) {
                return e && e.replace(/<!--[\s\S]*?-->/gm, "").replace(/(&nbsp;|\n)/gim, "").replace(/<\/?.+?>/gm, "")
            }), (function(e) {
                if (e && "string" === typeof e) return encodeURI(e.replace(I.KL.punctuation, "-").toLowerCase().replace(/[-]+/g, "-").replace(/^[-]+/g, "").replace(/[-]$/g, ""))
            }));
            var W = function(e) {
                var t = window.location.search;
                if ("undefined" !== typeof URLSearchParams) {
                    var r = new URLSearchParams(window.location.search);
                    Array.isArray(e) && e.forEach((function(e) {
                        return r.delete(e)
                    }));
                    var n = r.toString();
                    t = n && "?".concat(n)
                }
                return "".concat(window.location.origin).concat(window.location.pathname).concat(t)
            }
        },
        Tr7W: (e, t, r) => {
            "use strict";
            const n = r("UM5q"),
                o = r("1Fob"),
                a = r("p/97"),
                i = r("c+mU"),
                s = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? o(e) : e
            }

            function p(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? p(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function f(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function d(e) {
                const t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function h(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function v(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    const o = "string" === typeof r && r.includes(e.arrayFormatSeparator),
                                        a = "string" === typeof r && !o && l(r, e).includes(e.arrayFormatSeparator);
                                    r = a ? l(r, e) : r;
                                    const i = o || a ? r.split(e.arrayFormatSeparator).map((t => l(t, e))) : null === r ? r : l(r, e);
                                    n[t] = i
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    const o = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !o) return void(n[t] = r ? l(r, e) : r);
                                    const a = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => l(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], a) : n[t] = a
                                };
                            default:
                                return (e, t, r) => {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const o of e.split("&")) {
                    if ("" === o) continue;
                    let [e, i] = a(t.decode ? o.replace(/\+/g, " ") : o, "=");
                    i = void 0 === i ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? i : l(i, t), r(l(e, t), i, n)
                }
                for (const o of Object.keys(n)) {
                    const e = n[o];
                    if ("object" === typeof e && null !== e)
                        for (const r of Object.keys(e)) e[r] = h(e[r], t);
                    else n[o] = h(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const r = n[t];
                    return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = p(r) : e[t] = r, e
                }), Object.create(null))
            }
            t.extract = d, t.parse = v, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const r = r => {
                        return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    const o = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", o, "]"].join("")] : [...r, [u(t, e), "[", u(o, e), "]=", u(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : (o = null === o ? "" : o, 0 === n.length ? [
                                        [u(r, e), t, u(o, e)].join("")
                                    ] : [
                                        [n, u(o, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                        }
                    }(t),
                    o = {};
                for (const i of Object.keys(e)) r(i) || (o[i] = e[i]);
                const a = Object.keys(o);
                return !1 !== t.sort && a.sort(t.sort), a.map((r => {
                    const o = e[r];
                    return void 0 === o ? "" : null === o ? u(r, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : o.reduce(n(r), []).join("&") : u(r, t) + "=" + u(o, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [r, n] = a(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: v(d(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: l(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [s]: !0
                }, r);
                const n = f(e.url).split("?")[0] || "",
                    o = t.extract(e.url),
                    a = t.parse(o, {
                        sort: !1
                    }),
                    i = Object.assign(a, e.query);
                let c = t.stringify(i, r);
                c && (c = `?${c}`);
                let l = function(e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (l = `#${r[s]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${n}${c}${l}`
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [s]: !1
                }, n);
                const {
                    url: o,
                    query: a,
                    fragmentIdentifier: c
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: o,
                    query: i(a, r),
                    fragmentIdentifier: c
                }, n)
            }, t.exclude = (e, r, n) => {
                const o = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, o, n)
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
        zvJu: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            var n = function(e) {
                location.origin.includes("localhost") && ("undefined" !== typeof(e || {}).df_2 && console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!"))
            }
        },
        GlbY: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => n
            });
            const n = r("err1").A
        },
        err1: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f,
                D: () => p
            });
            var n, o = r("BK7R"),
                a = r("QUKP"),
                i = r("gZfF"),
                s = r("blBx"),
                c = r("zvJu"),
                u = function(e, t, r) {
                    var n = "undefined" !== typeof e[t] ? e[t] : e[r];
                    if ("undefined" === typeof n) throw new Error("".concat(t, " is require"));
                    e[t] = n
                },
                l = function(e) {
                    var t = "undefined" === typeof e ? "undefined" : (0, s.A)(e);
                    return "number" === t || "string" === t || "boolean" === t
                },
                p = function(e) {
                    n = e
                };
            const f = function(e, t, r) {
                var s = null,
                    p = function(e, t, r) {
                        if ("string" === typeof e) {
                            (0, c.o)(t);
                            var n = t || {},
                                s = (n.df_2, (0, i.A)(n, ["df_2"]));
                            return {
                                info: (0, a.A)((0, o.A)({}, s), {
                                    eventName: e
                                }),
                                opt: r
                            }
                        }
                        if ("object" === typeof e) {
                            (0, c.o)(e);
                            var u = e || {};
                            return u.df_2, {
                                info: (0, i.A)(u, ["df_2"]),
                                opt: t
                            }
                        }
                        throw new Error("params is error")
                    }(e, t, r),
                    f = p.info,
                    d = void 0 === f ? {} : f,
                    h = p.opt,
                    v = d.eventName,
                    y = (0, i.A)(d, ["eventName"]);
                try {
                    u(d, "eventName"), u(d, "elementID", "elementId"), u(d, "pageName", "ScreenName"),
                        function(e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function(e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function(e) {
                                            return !l(e)
                                        })).length > 0) throw new Error("extraInfo key:".concat(e[0], " array data limit string/number/boolean"))
                                } else if (!l(e[1])) throw new Error("extraInfo key:".concat(e[0], " limited string/number/array/boolean"))
                            }));
                            else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === d || void 0 === d ? void 0 : d.extraInfo)
                } catch (b) {
                    s = b
                }
                var g = n && n(v, y, function(e) {
                    return "function" === typeof e ? {
                        callback: e
                    } : "object" === typeof e ? e : {}
                }(h));
                return s ? Promise.reject(s) : g
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
            var o = function(e, t, r) {
                    try {
                        n.setItem(e, r ? String(t) : JSON.stringify(t))
                    } catch (o) {}
                },
                a = function(e, t, r) {
                    try {
                        var a = n.getItem(e);
                        if ("string" !== typeof a) throw o(e, t, r), new Error("init ".concat(e, " - values"));
                        return r ? a : JSON.parse(a || "null")
                    } catch (i) {
                        return t
                    }
                },
                i = {
                    setItem: o,
                    getItem: a,
                    setExpireItem: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return r.ttl ? o(e, {
                            value: t,
                            expire: (new Date).getTime() + r.ttl
                        }, !1) : o(e, t)
                    },
                    getExpireItem: function(e, t) {
                        var r = a(e, t);
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
                E2: () => o,
                Eg: () => a,
                JK: () => i
            });
            r("kPx0");
            var n = r("tKUM");

            function o(e, t) {
                return Object.keys(e).map((function(t) {
                    return e[t] ? "".concat(t, "=").concat(encodeURIComponent(e[t])) : ""
                })).filter((function(e) {
                    return !!e
                })).join(t || "&")
            }

            function a(e, t) {
                return [e, o(t)].filter(Boolean).join(/\?/.test(e) ? "&" : "?")
            }
            var i = function(e) {
                return (0, n.getLanguage)()
            }
        },
        Cjys: (e, t, r) => {
            "use strict";
            r.d(t, {
                vt: () => T,
                Q: () => B
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
                h = e => class extends e {
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
            const y = class {
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
                g = (e, t) => "LT" === function(e, t) {
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
                    }(m(e), m(t))
                }(e, t);

            function b(e, t) {
                return e === t ? "EQ" : e > t ? "GT" : "LT"
            }

            function m(e) {
                return e.replace(/-alpha/g, "").split(".").map(Number)
            }
            const w = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                A = (e, t, r) => Object.defineProperty(e, t, {
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
                        A(r, "bridgeVersion", e), A(r, "clientType", t[2]), A(r, "clientVersion", t[3]), A(r, "isHybrid", !!e)
                    }
                    return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (r.isHybrid = !0), r
                };
            let x, E;
            const S = () => E || ("undefined" !== typeof navigator ? navigator.userAgent : "");
            const {
                isHybrid: k,
                clientType: O,
                bridgeVersion: j
            } = function(e) {
                return 0 === arguments.length ? x || (x = _(S())) : _(e)
            }(), P = e => {
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
                }))), t.isSupportDeeplink = t => !k || g(j, "1.8.0") ? Promise.resolve(!1) : e.invoke("isSupportDeeplink", {
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
            var F = r("F63i");
            const T = (e = v) => (new c).register({
                    test: ({
                        clientType: e
                    }) => "iOS" === e || "MacOS" === e,
                    adapter: h
                }).register({
                    test: ({
                        clientType: e
                    }) => "Android" === e,
                    adapter: l
                }).register({
                    test: () => window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction,
                    adapter: p
                }).default(e).create(P, function() {
                    const e = "undefined" !== typeof window.document,
                        t = "undefined" !== typeof F && null != F.versions && null != F.versions.node;
                    let r = "";
                    e && (r = window.navigator.userAgent);
                    t && (r = `node ${F.versions.node}`);
                    return r
                }()),
                B = e => {
                    const t = new y;
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
        QHrh: (e, t) => {
            "use strict";
            t.dh = void 0;
            t.dh = () => {}
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
                var r, l, p, f, d, h = e.target,
                    v = e.global,
                    y = e.stat;
                if (r = v ? n : y ? n[h] || s(h, {}) : (n[h] || {}).prototype)
                    for (l in t) {
                        if (f = t[l], p = e.dontCallGetSet ? (d = o(r, l)) && d.value : r[l], !u(v ? l : h + (y ? "." : "#") + l, e.forced) && void 0 !== p) {
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
                h = "Object already initialized",
                v = s.TypeError,
                y = s.WeakMap;
            if (i || p.state) {
                var g = p.state || (p.state = new y);
                g.get = g.get, g.has = g.has, g.set = g.set, n = function(e, t) {
                    if (g.has(e)) throw v(h);
                    return t.facade = e, g.set(e, t), t
                }, o = function(e) {
                    return g.get(e) || {}
                }, a = function(e) {
                    return g.has(e)
                }
            } else {
                var b = f("state");
                d[b] = !0, n = function(e, t) {
                    if (l(e, b)) throw v(h);
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
                h = Object.defineProperty,
                v = n("".slice),
                y = n("".replace),
                g = n([].join),
                b = s && !o((function() {
                    return 8 !== h((function() {}), "length", {
                        value: 8
                    }).length
                })),
                m = String(String).split("String"),
                w = e.exports = function(e, t, r) {
                    "Symbol(" === v(d(t), 0, 7) && (t = "[" + y(d(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || c && e.name !== t) && (s ? h(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), b && r && i(r, "arity") && e.length !== r.arity && h(e, "length", {
                        value: r.arity
                    });
                    try {
                        r && i(r, "constructor") && r.constructor ? s && h(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (error) {}
                    var n = p(e);
                    return i(n, "source") || (n.source = g(m, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = w((function() {
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
        cpeW: (e, t, r) => {
            "use strict";
            r("dKjp");
            r.g.pika = r.g.pika || {}, r.g.pika.version && "0.3.62" !== r.g.pika.version && console.error("Two versions of pika are loaded, please check the code. There may be potential risks.", r.g.pika.version, "0.3.62"), r.g.pika.version = r.g.pika.version || "0.3.62";
            try {
                r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
            } catch (n) {
                console.error("[@pika/plugin-http]", n)
            }
        },
        vsag: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => Ir
            });
            var n = {};
            r.r(n), r.d(n, {
                __DO_NOT_USE__ActionTypes: () => Y,
                applyMiddleware: () => oe,
                bindActionCreators: () => re,
                combineReducers: () => ee,
                compose: () => ne,
                createStore: () => Z,
                legacy_createStore: () => Q
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

            function h() {
                var e = (0, f.PC)().STATIC_HOST;
                if (e) return e
            }
            var v = function(e) {
                var t = (0, f.PC)();
                return {
                    sensorsConfig: {
                        server_url: d(),
                        staticHost: h(),
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
            const y = function(e) {
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
            var g = r("tEf9"),
                b = r("DTvD"),
                m = r.n(b),
                w = r("BK9r"),
                A = r("V+XC"),
                _ = r("hFxi");
            const x = "PIKA_WEB_VITALS",
                E = {
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
                S = e => e.replace(/^\//, "").replace(/\/$/, ""),
                k = e => {
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
                                n.some((t => t.id === e.id)) && (e.path = `${S(o)}/${S(e.path)}`, e.id = i)
                            }))
                        }
                        const n = t[t.length - 1],
                            {
                                path: o
                            } = n;
                        return /^\//.test(o) ? o : `/${o}`
                    } catch (pr) {
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
            const O = window.requestIdleCallback || function(e, t = {
                    timeout: 3e3
                }) {
                    return setTimeout((() => {
                        e({
                            didTimeout: !1,
                            timeRemaining: () => 50
                        })
                    }), t.timeout)
                },
                j = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                };

            function P({
                remainingTime: e,
                timeout: t
            } = {
                remainingTime: 49,
                timeout: 2e3
            }) {
                return new Promise(((r, n) => {
                    let o;
                    const a = setTimeout((() => {
                        j && o && j(o), r()
                    }), t);

                    function i(t) {
                        t.timeRemaining() >= e ? (console.debug(`[awaitPageLoadAndIdle] Idle time remaining is >= ${e}ms`), clearTimeout(a), r()) : o = O(i)
                    }
                    const s = () => {
                        console.debug("[awaitPageLoadAndIdle] Page has just finished loading"), window.removeEventListener("load", s), o = O(i)
                    };
                    "complete" === document.readyState ? (console.debug("[awaitPageLoadAndIdle] Page is already loaded (document.readyState is complete)"), o = O(i)) : window.addEventListener("load", s)
                }))
            }
            var F = r("LJ4M");

            function T(e) {
                const t = (0, F.read)(e);
                return B(t) ? t : null
            }

            function B(e) {
                if ("string" !== typeof e) return !1;
                const t = /^[a-zA-Z0-9-_]+$/.test(e);
                return t || console.warn(`[@pika/utils] Invalid content: ${e}, it may contain XSS attack.`), t
            }
            var C = r("mnh2");

            function D() {
                var e = (0, f.PC)().STATIC_HOST_SHARE;
                if (e) return e
            }
            var R = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = (0, w.K7)(),
                            o = n.matches;
                        return b.useEffect((function() {
                            try {
                                r.g.pika = r.g.pika || {}, r.g.pika.currentPath = k(o)
                            } catch (e) {}
                        }), [o]), b.createElement(e, Object.assign({}, t))
                    }
                },
                I = !1;
            const N = function(e) {
                return (0, u.yO)({
                    appComponent: function(e) {
                        return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                            var n, o, a;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return I || ((n = D()) ? o = "".concat(n, "/unpkg/monitor/reporter-sdk@").concat(window._bn_reporter_version, ".js") : console.error("[@pika/plugin-monitor] STATIC_HOST_SHARE is not set."), a = function() {
                                            if (o) {
                                                var e = document.createElement("script");
                                                e.src = o, e.id = "Reporter-sdk", e.defer = !0, document.body.appendChild(e), I = !0
                                            }
                                        }, P({
                                            remainingTime: 49,
                                            timeout: 1e4
                                        }).then(a)), t.abrupt("return", R((0, C.X)(e, {
                                            onMount: function() {
                                                r.g.pika = r.g.pika || {}, r.g.pika.__REPORT_ERRORS__ = r.g.pika.__REPORT_ERRORS__ || [], r.g.pika.__REPORT_ERRORS__.forEach((function(e) {
                                                    return A.N7.apply(void 0, (0, g.A)(e))
                                                })), r.g.pika.__REPORT_ERRORS__.length = 0, r.g.pika.__REPORT_ERRORS__.push = function(e) {
                                                    return A.N7.apply(void 0, (0, g.A)(e))
                                                }, r.g.pika.__REPORT_MONITOR_EVENTS__ = r.g.pika.__REPORT_MONITOR_EVENTS__ || [], r.g.pika.__REPORT_MONITOR_EVENTS__.forEach((function(e) {
                                                    return _.N2.apply(void 0, (0, g.A)(e))
                                                })), r.g.pika.__REPORT_MONITOR_EVENTS__.length = 0, r.g.pika.__REPORT_MONITOR_EVENTS__.push = function(e) {
                                                    return _.N2.apply(void 0, (0, g.A)(e))
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

            function L(e) {
                return !!e && /^\d+\.\d+\.\d+$/.test(e)
            }
            var U = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, b.useEffect)((function() {
                        var e = null;
                        try {
                            e = setTimeout((function() {
                                ! function() {
                                    var e, t;
                                    L(null === (e = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === e ? void 0 : e.version) || console.error("[Risk][pika] You are using an unstable version of pika, please use the official released version.", null === (t = null === r.g || void 0 === r.g ? void 0 : r.g.pika) || void 0 === t ? void 0 : t.version)
                                }()
                            }), 5e3)
                        } catch (t) {}
                        return function() {
                            e && clearTimeout(e)
                        }
                    }), []), m().createElement(e, Object.assign({}, t))
                }
            };
            var H = r("E0uk");

            function M() {
                var e, t, n;
                r.g.pika = r.g.pika || {}, r.g.pika.__REQUEST_INTERCEPTORS__ = r.g.pika.__REQUEST_INTERCEPTORS__ || [], null === (e = r.g.pika.__REQUEST_INTERCEPTORS__) || void 0 === e || e.forEach((function(e) {
                    return H.addRequestInterceptor(e)
                })), r.g.pika.__REQUEST_INTERCEPTORS__.length = 0, r.g.pika.__REQUEST_INTERCEPTORS__.push = function(e) {
                    return H.addRequestInterceptor(e)
                }, r.g.pika.__RESPONSE_INTERCEPTORS__ = r.g.pika.__RESPONSE_INTERCEPTORS__ || [], null === (t = r.g.pika.__RESPONSE_INTERCEPTORS__) || void 0 === t || t.forEach((function(e) {
                    return H.addResponseInterceptor(e)
                })), r.g.pika.__RESPONSE_INTERCEPTORS__.length = 0, r.g.pika.__RESPONSE_INTERCEPTORS__.push = function(e) {
                    return H.addResponseInterceptor(e)
                }, r.g.pika.__RESULT_INTERCEPTORS__ = r.g.pika.__RESULT_INTERCEPTORS__ || [], null === (n = r.g.pika.__RESULT_INTERCEPTORS__) || void 0 === n || n.forEach((function(e) {
                    return H.addResultInterceptor(e)
                })), r.g.pika.__RESULT_INTERCEPTORS__.length = 0, r.g.pika.__RESULT_INTERCEPTORS__.push = function(e) {
                    return H.addResultInterceptor(e)
                }
            }
            var V = function() {
                    try {
                        r.g.__HTTP_NEXT_MODE_ENABLED__ = !0
                    } catch (e) {
                        console.error("[@pika/plugin-http]", e)
                    }
                },
                q = !1;
            const W = function() {
                return (0, u.yO)({
                    init: function() {
                        return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        q || (q = !0, V(), M(), "function" === typeof r.g.__HTTP_MODULE_DEFER_RESOLVE__ && r.g.__HTTP_MODULE_DEFER_RESOLVE__(), r.g.pika = r.g.pika || {}, r.g.pika.__HTTP_MODULE__ = r.g.pika.__HTTP_MODULE__ || {
                                            _config: H._config,
                                            get: H.get,
                                            post: H.post,
                                            put: H.put,
                                            del: H.del,
                                            postForm: H.postForm,
                                            upload: H.upload,
                                            uploadHandler: H.uploadHandler
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
            var K = r("NVnN"),
                G = r("gtzB");

            function z(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var $ = "function" === typeof Symbol && Symbol.observable || "@@observable",
                J = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                Y = {
                    INIT: "@@redux/INIT" + J(),
                    REPLACE: "@@redux/REPLACE" + J(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + J()
                    }
                };

            function X(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function Z(e, t, r) {
                var n;
                if ("function" === typeof t && "function" === typeof r || "function" === typeof r && "function" === typeof arguments[3]) throw new Error(z(0));
                if ("function" === typeof t && "undefined" === typeof r && (r = t, t = void 0), "undefined" !== typeof r) {
                    if ("function" !== typeof r) throw new Error(z(1));
                    return r(Z)(e, t)
                }
                if ("function" !== typeof e) throw new Error(z(2));
                var o = e,
                    a = t,
                    i = [],
                    s = i,
                    c = !1;

                function u() {
                    s === i && (s = i.slice())
                }

                function l() {
                    if (c) throw new Error(z(3));
                    return a
                }

                function p(e) {
                    if ("function" !== typeof e) throw new Error(z(4));
                    if (c) throw new Error(z(5));
                    var t = !0;
                    return u(), s.push(e),
                        function() {
                            if (t) {
                                if (c) throw new Error(z(6));
                                t = !1, u();
                                var r = s.indexOf(e);
                                s.splice(r, 1), i = null
                            }
                        }
                }

                function f(e) {
                    if (!X(e)) throw new Error(z(7));
                    if ("undefined" === typeof e.type) throw new Error(z(8));
                    if (c) throw new Error(z(9));
                    try {
                        c = !0, a = o(a, e)
                    } finally {
                        c = !1
                    }
                    for (var t = i = s, r = 0; r < t.length; r++) {
                        (0, t[r])()
                    }
                    return e
                }

                function d(e) {
                    if ("function" !== typeof e) throw new Error(z(10));
                    o = e, f({
                        type: Y.REPLACE
                    })
                }

                function h() {
                    var e, t = p;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new Error(z(11));

                            function r() {
                                e.next && e.next(l())
                            }
                            return r(), {
                                unsubscribe: t(r)
                            }
                        }
                    })[$] = function() {
                        return this
                    }, e
                }
                return f({
                    type: Y.INIT
                }), (n = {
                    dispatch: f,
                    subscribe: p,
                    getState: l,
                    replaceReducer: d
                })[$] = h, n
            }
            var Q = Z;

            function ee(e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                    var o = t[n];
                    0, "function" === typeof e[o] && (r[o] = e[o])
                }
                var a, i = Object.keys(r);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(t) {
                            var r = e[t];
                            if ("undefined" === typeof r(void 0, {
                                    type: Y.INIT
                                })) throw new Error(z(12));
                            if ("undefined" === typeof r(void 0, {
                                    type: Y.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(z(13))
                        }))
                    }(r)
                } catch (pr) {
                    a = pr
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}), a) throw a;
                    for (var n = !1, o = {}, s = 0; s < i.length; s++) {
                        var c = i[s],
                            u = r[c],
                            l = e[c],
                            p = u(l, t);
                        if ("undefined" === typeof p) {
                            t && t.type;
                            throw new Error(z(14))
                        }
                        o[c] = p, n = n || p !== l
                    }
                    return (n = n || i.length !== Object.keys(e).length) ? o : e
                }
            }

            function te(e, t) {
                return function() {
                    return t(e.apply(this, arguments))
                }
            }

            function re(e, t) {
                if ("function" === typeof e) return te(e, t);
                if ("object" !== typeof e || null === e) throw new Error(z(16));
                var r = {};
                for (var n in e) {
                    var o = e[n];
                    "function" === typeof o && (r[n] = te(o, t))
                }
                return r
            }

            function ne() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }

            function oe() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function(e) {
                    return function() {
                        var r = e.apply(void 0, arguments),
                            n = function() {
                                throw new Error(z(15))
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
                        return n = ne.apply(void 0, a)(r.dispatch), (0, G.A)((0, G.A)({}, r), {}, {
                            dispatch: n
                        })
                    }
                }
            }

            function ae() {
                return ae = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, ae.apply(this, arguments)
            }

            function ie(e) {
                var t;
                e.models.forEach((function(t) {
                    return se(e, t)
                }));
                var r = ce(e),
                    o = oe.apply(n, e.reduxConfig.middlewares),
                    a = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([o])) : function(e) {
                        void 0 === e && (e = {});
                        return !e.disabled && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : ne
                    }(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([o])),
                    i = e.reduxConfig.createStore || Z,
                    s = e.reduxConfig.initialState;
                return i(r, void 0 === s ? {} : s, a)
            }

            function se(e, t) {
                var r = {};
                Object.keys(t.reducers).forEach((function(e) {
                    var n = function(e) {
                        return e.indexOf("/") > -1
                    }(e) ? e : t.name + "/" + e;
                    r[n] = t.reducers[e]
                }));
                var n = function(e, n) {
                        return void 0 === e && (e = t.state), n.type in r ? r[n.type](e, n.payload, n.meta) : e
                    },
                    o = t.baseReducer,
                    a = o ? function(e, r) {
                        return void 0 === e && (e = t.state), n(o(e, r), r)
                    } : n;
                e.forEachPlugin("onReducer", (function(r) {
                    a = r(a, t.name, e) || a
                })), e.reduxConfig.reducers[t.name] = a
            }

            function ce(e) {
                var t = e.reduxConfig.rootReducers,
                    r = function(e) {
                        var t = e.combineReducers || ee;
                        if (!Object.keys(e.reducers).length) return function(e) {
                            return e
                        };
                        return t(e.reducers)
                    }(e.reduxConfig),
                    n = r;
                return t && Object.keys(t).length && (n = function(e, n) {
                    var o = t[n.type];
                    return r(o ? o(e, n) : e, n)
                }), e.forEachPlugin("onRootReducer", (function(t) {
                    n = t(n, e) || n
                })), n
            }
            var ue = function(e, t, r, n) {
                return Object.assign((function(n, o) {
                    var a = {
                        type: t + "/" + r
                    };
                    return "undefined" !== typeof n && (a.payload = n), "undefined" !== typeof o && (a.meta = o), e.dispatch(a)
                }), {
                    isEffect: n
                })
            };

            function le(e) {
                return Object.keys(e).map((function(t) {
                    var r = function(e, t) {
                        return ae({
                            name: e,
                            reducers: {}
                        }, t)
                    }(t, e[t]);
                    return r
                }))
            }

            function pe(e) {
                var t = function(e) {
                    return {
                        models: le(e.models),
                        reduxConfig: e.redux,
                        forEachPlugin: function(t, r) {
                            e.plugins.forEach((function(e) {
                                e[t] && r(e[t])
                            }))
                        },
                        effects: {}
                    }
                }(e);
                t.reduxConfig.middlewares.push(function(e) {
                    return function(t) {
                        return function(r) {
                            return function(n) {
                                return n.type in e.effects ? (r(n), e.effects[n.type](n.payload, t.getState(), n.meta)) : r(n)
                            }
                        }
                    }
                }(t)), t.forEachPlugin("createMiddleware", (function(e) {
                    t.reduxConfig.middlewares.push(e(t))
                }));
                var r = ie(t),
                    n = ae({}, r, {
                        name: e.name,
                        addModel: function(e) {
                            se(t, e), fe(n, e), de(n, t, e), r.replaceReducer(ce(t)), r.dispatch({
                                type: "@@redux/REPLACE"
                            })
                        }
                    });
                return function(e, t) {
                    t.forEach((function(t) {
                        t.exposed && Object.keys(t.exposed).forEach((function(r) {
                            if (t.exposed) {
                                var n = t.exposed[r],
                                    o = "function" === typeof n;
                                e[r] = o ? function() {
                                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                    return n.apply(void 0, [e].concat(r))
                                } : Object.create(t.exposed[r])
                            }
                        }))
                    }))
                }(n, e.plugins), t.models.forEach((function(e) {
                    return fe(n, e)
                })), t.models.forEach((function(e) {
                    return de(n, t, e)
                })), t.forEachPlugin("onStoreCreated", (function(e) {
                    n = e(n, t) || n
                })), n
            }

            function fe(e, t) {
                e.dispatch["" + t.name] = {},
                    function(e, t) {
                        var r = e.dispatch[t.name];
                        Object.keys(t.reducers).forEach((function(n) {
                            t.name, t.reducers, r[n] = ue(e, t.name, n, !1)
                        }))
                    }(e, t)
            }

            function de(e, t, r) {
                ! function(e, t, r) {
                    var n = e.dispatch[r.name],
                        o = {};
                    r.effects && (o = "function" === typeof r.effects ? r.effects(e.dispatch) : r.effects), Object.keys(o).forEach((function(a) {
                        r.name, t.effects[r.name + "/" + a] = o[a].bind(n), n[a] = ue(e, r.name, a, !0)
                    }))
                }(e, t, r), t.forEachPlugin("onModel", (function(t) {
                    t(r, e)
                }))
            }
            var he = 0;

            function ve(e, t) {
                return t ? ae({}, t, e) : e
            }
            var ye = function(e) {
                    var t = function(e) {
                        var t, r, n, o = null != (t = e.name) ? t : "Rematch Store " + he;
                        he += 1;
                        var a = {
                            name: o,
                            models: e.models || {},
                            plugins: e.plugins || [],
                            redux: ae({
                                reducers: {},
                                rootReducers: {},
                                enhancers: [],
                                middlewares: []
                            }, e.redux, {
                                devtoolOptions: ae({
                                    name: o
                                }, null != (r = null == (n = e.redux) ? void 0 : n.devtoolOptions) ? r : {})
                            })
                        };
                        return a.plugins.forEach((function(e) {
                            e.config && (a.models = ve(a.models, e.config.models), e.config.redux && (a.redux.initialState = ve(a.redux.initialState, e.config.redux.initialState), a.redux.reducers = ve(a.redux.reducers, e.config.redux.reducers), a.redux.rootReducers = ve(a.redux.rootReducers, e.config.redux.reducers), a.redux.enhancers = [].concat(a.redux.enhancers, e.config.redux.enhancers || []), a.redux.middlewares = [].concat(a.redux.middlewares, e.config.redux.middlewares || []), a.redux.combineReducers = a.redux.combineReducers || e.config.redux.combineReducers, a.redux.createStore = a.redux.createStore || e.config.redux.createStore))
                        })), a
                    }(e || {});
                    return pe(t)
                },
                ge = r("sViW"),
                be = r("zJWh"),
                me = r("VA12"),
                we = r("a59x"),
                Ae = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "en", r = (0, we.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, me.get)(r);
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
                _e = (function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "en", r = (0, we.Eg)("/bapi/apex/v1/public/apex/market/recommend/get-currency", {
                                        lang: t
                                    }), e.next = 4, (0, me.get)(r);
                                case 4:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, we.Eg)("/bapi/apex/v1/public/apex/marketing/recommend/hotAsset/list", t), e.next = 3, (0, me.get)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("BK7R")),
                xe = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                Ee = function(e, t) {
                    return (0, _e.A)({}, e, t)
                },
                Se = [],
                ke = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return (t || []).forEach((function(e) {
                        "function" === typeof e && Se.push(e)
                    }))
                },
                Oe = r("ezuS"),
                je = r("QUKP"),
                Pe = "USD_USD",
                Fe = "userPreferredCurrency",
                Te = function(e, t) {
                    return e === Fe ? /_USD$/i.test(t) ? t : Pe : t
                },
                Be = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!xe(t)) return e;
                        var r = be.U.read(t);
                        return (0, je.A)((0, _e.A)({}, e), (0, Oe.A)({}, t, Te(t, r)))
                    }), e)
                };
            ke((function(e, t) {
                if ("cookies" in t) {
                    var r = [Fe, "shouldPublicAssets"];
                    e.cookies = Be(e.cookies || {}, r)
                }
                return e
            }));
            const Ce = {
                name: "cookies",
                state: {
                    theme: "light",
                    userPreferredCurrency: Pe
                },
                reducers: {
                    updateState: Ee,
                    batchLoad: function(e, t) {
                        return Be(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!xe(t.key)) return e;
                            var r = Te(t.key, t.value);
                            return be.U.write(t.key, r), (0, je.A)((0, _e.A)({}, e), (0, Oe.A)({}, t.key, r))
                        }), e)
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return Be(e, [r])
                    }
                },
                effects: {
                    loadCurrency: function(e) {
                        return (0, ge.A)(s().mark((function t() {
                            var r, n, o, a;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = be.U.read(Fe), t.prev = 1, !r || "false" === r) {
                                            t.next = 6;
                                            break
                                        }
                                        t.t0 = {
                                            currency: r
                                        }, t.next = 9;
                                        break;
                                    case 6:
                                        return t.next = 8, Ae(e);
                                    case 8:
                                        t.t0 = t.sent;
                                    case 9:
                                        n = t.t0, o = n.currency, a = void 0 === o ? Pe : o, this.save({
                                            key: Fe,
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
                        return (0, ge.A)(s().mark((function e() {
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
            ! function() {
                var e = (0, ge.A)(s().mark((function e() {
                    var t;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, me.get)("/bapi/accounts/v1/public/account/ip/country-short");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var De = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.get)("/bapi/accounts/v2/public/account/ip/country-short", {
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
                }(),
                Re = (function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.get)("/bapi/accounts/v2/public/account/ip/country-city-short");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.get)("/bapi/accounts/v1/public/account/country/promote/email/show");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("eZh5")),
                Ie = function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n, o, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.platform, n = t.currency, o = {
                                        headers: {
                                            "bnc-currency": n
                                        }
                                    }, e.next = 4, (0, me.get)("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check?platform=".concat(null === r || void 0 === r ? void 0 : r.toUpperCase()), o);
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
                Ne = (function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
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
                                    }, e.next = 4, (0, me.post)("/bapi/compliance/v1/private/compliance/market/getComplianceDynamicForm", a);
                                case 4:
                                    return i = e.sent, e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, me.post)("/bapi/compliance/v1/private/compliance/market/saveStatus", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("vpUY")),
                Le = {
                    metaTitle: "Binance",
                    metaKeyword: "Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance",
                    metaDescription: "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume",
                    ogImage: ""
                },
                Ue = function(e) {
                    var t = e.withHeader,
                        r = e.withFooter,
                        n = e.withChat,
                        o = (0, Ne.S)(window.navigator.userAgent).isHybrid;
                    return (0, je.A)((0, _e.A)({}, e), {
                        isHybrid: o,
                        withChat: n && !o,
                        withHeader: t && !o,
                        withFooter: r && !o
                    })
                };
            ke((function(e, t) {
                return "global" in t && (e.global = Ue(e.global || {})), e
            }));
            const He = {
                name: "global",
                state: {
                    origin: "",
                    url: "",
                    path: "",
                    host: "",
                    dir: "ltr",
                    metaData: Le,
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
                    updateState: Ee,
                    checkClientType: Ue
                },
                effects: {
                    queryRegion: function() {
                        return (0, ge.A)(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, De();
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
                        return (0, ge.A)(s().mark((function t() {
                            var r, n, o, a, i, c, u;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, r = e.i18nHost, n = e.namespace, o = void 0 === n ? "base-seo-meta" : n, a = e.language, i = void 0 === a ? "en" : a, t.next = 4, (0, Re.JF)({
                                            i18nHost: r,
                                            namespace: o,
                                            language: i,
                                            fallback: "en"
                                        });
                                    case 4:
                                        (c = t.sent) && Object.keys(c).length > 0 && (u = {
                                            ogImage: e.ogImage,
                                            title: c.mateTitle || Le.metaTitle,
                                            keywords: c.metaKeyword || Le.metaKeyword,
                                            description: c.metaDescription || Le.metaDescription
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
                        return (0, ge.A)(s().mark((function t() {
                            var r, n, o;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Ie({
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
            var Me, Ve = r("NsjG"),
                qe = "favorites",
                We = "isHideSmallBalance",
                Ke = "maskedBalance",
                Ge = function(e, t) {
                    switch (e) {
                        case qe:
                            return Array.isArray(t) ? t : [];
                        case Ke:
                        case We:
                            return t && "false" !== t;
                        default:
                            return t
                    }
                },
                ze = function(e, t) {
                    return t.reduce((function(e, t) {
                        if (!xe(t)) return e;
                        var r = Ve.IG.getItem(t, "");
                        return (0, je.A)((0, _e.A)({}, e), (0, Oe.A)({}, t, Ge(t, r)))
                    }), e || {})
                };
            ke((function(e, t) {
                if ("persistSetting" in t) {
                    var r = [Ke, We, qe];
                    e.persistSetting = ze(e.persistSetting, r)
                }
                return e
            }));
            const $e = {
                name: "persistSetting",
                state: (Me = {}, (0, Oe.A)(Me, qe, []), (0, Oe.A)(Me, We, !1), (0, Oe.A)(Me, Ke, !1), Me),
                reducers: {
                    updateState: Ee,
                    batchLoadSetting: function(e, t) {
                        return ze(e, t || [])
                    },
                    save: function(e, t) {
                        var r = t.key,
                            n = t.value;
                        return [{
                            key: r,
                            value: n
                        }].reduce((function(e, t) {
                            if (!xe(t.key)) return e;
                            var r = Ge(t.key, t.value);
                            return Ve.IG.setItem(t.key, r), (0, je.A)((0, _e.A)({}, e), (0, Oe.A)({}, t.key, r))
                        }), e || {})
                    },
                    load: function(e, t) {
                        var r = t.key;
                        return ze(e, [r])
                    }
                }
            };
            var Je = function() {
                    var e = (0, ge.A)(s().mark((function e(t, r) {
                        var n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, we.Eg)("/bapi/asset/v2/public/asset-service/product/get-products", t || {}), e.next = 3, (0, me.get)(n, r);
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
                Ye = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r, n, o = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : "", e.next = 3, (0, me.get)("".concat(t, "/bapi/asset/v1/public/asset-service/product/currency"));
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
                Xe = (function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {}, e.prev = 1, e.next = 4, (0, me.get)("/bapi/asset/v1/public/asset-service/product/get-exchange-info?symbol=".concat(t));
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
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.get)("/bapi/asset/v1/public/asset-service/product/price-convert?".concat((0, we.E2)(t)));
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, me.get)((0, we.Eg)("/bapi/asset/v1/public/asset-service/product/get-exchange-info", t || {})));
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
            const Ze = {
                    name: "products",
                    state: {
                        loading: !0,
                        productMap: {},
                        hotProduct: [],
                        updateTime: Date.now()
                    },
                    reducers: {
                        updateState: Ee
                    },
                    effects: {
                        queryProduct: function(e) {
                            var t = e.includeEtf,
                                r = e.headers;
                            return (0, ge.A)(s().mark((function e() {
                                var n, o, a, i;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = !1, e.prev = 1, e.next = 4, Je({
                                                includeEtf: t
                                            }, r);
                                        case 4:
                                            o = e.sent, a = Array.isArray(o) ? o : [], i = a.filter((function(e) {
                                                return !1 === e.sd
                                            })).reduce((function(e, t) {
                                                return t.s && (e[t.s] = Xe(t)), e
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
                Qe = {
                    state: {},
                    name: "ssrStore",
                    reducers: {
                        updateState: Ee
                    }
                };
            var et = r("gZfF"),
                tt = r("oFD3"),
                rt = r("fdP6"),
                nt = "ASSET_CONVERSION_PREFERENCE",
                ot = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.post)("/bapi/accounts/v1/private/account/user-config/get", {
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
                at = function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configName, n = t.configType, e.next = 3, (0, me.post)("/bapi/accounts/v1/private/account/user-config/save", {
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
                it = (function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.post)("/bapi/accounts/v1/private/account/user-personal-config/withdrawal-whitelist", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, me.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
                                        configType: nt
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
                st = (function() {
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configValue, e.next = 3, (0, me.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
                                        configValue: r,
                                        configType: nt
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
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, e.prev = 1, e.next = 4, (0, me.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", {
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
                    var e = (0, ge.A)(s().mark((function e(t) {
                        var r, n, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.configType, n = t.configValue, e.next = 3, (0, me.post)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", {
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
                    return (0, me.get)((0, we.Eg)("/bapi/apex/v1/public/apex/marketing/web/querylangMappingByKey", {
                        key: e
                    }))
                }),
                ct = r("tbM7"),
                ut = r("BMJD"),
                lt = function() {
                    var e = (0, ge.A)(s().mark((function e() {
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
                var e = (0, ge.A)(s().mark((function e() {
                    var t, r, n = arguments;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, me.post)("/bapi/futures/v1/private/future/account/open", t);
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
                var e = (0, ge.A)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, me.post)("/bapi/futures/v1/private/future/agent/agentcode/get"));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var pt = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, me.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-basic"));
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
                ft = (function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, me.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-detail"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, me.get)("/bapi/accounts/v1/private/account/futures-account-exist");
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
                }(), "nativeCurrency"),
                dt = function() {
                    var e = (0, ge.A)(s().mark((function e() {
                        var t, r, n, o, a, i, c, u, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = {
                                        nicknameQueryType: "NORMAL"
                                    }, e.t0 = p.A, e.next = 5, Promise.all([(0, tt.vK)(t), (0, rt.b$)()]);
                                case 5:
                                    return e.t1 = e.sent, r = (0, e.t0)(e.t1, 2), n = r[0], o = r[1], a = (null === n || void 0 === n ? void 0 : n.data) || {}, i = a.avatarUrl, c = a.nickname, u = (o || {}).userComplianceStatus, l = void 0 === u ? {} : u, e.abrupt("return", (0, je.A)((0, _e.A)({}, l), {
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
            const ht = {
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
                    updateState: Ee,
                    updateCurrentFiat: function(e, t) {
                        return !window.__RUN_BY_ELECTRON__ && e.loginStatus.isLoggedIn && at({
                            configType: ft,
                            configName: t
                        }), (0, je.A)((0, _e.A)({}, e), {
                            userPreferredCurrency: {
                                configName: t
                            }
                        })
                    }
                },
                effects: {
                    queryLanguage: function(e) {
                        return (0, ge.A)(s().mark((function t() {
                            var r, n;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, st(e);
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.next = 4, (0, ct.CY)();
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
                        return (0, ge.A)(s().mark((function e() {
                            var t, n, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = (0, _e.A)({}, r.fiatCurrency), e.next = 4, Ye();
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.prev = 2, e.t0 = p.A, e.next = 6, Promise.all([dt(), (0, ut.Tc)()]);
                                    case 6:
                                        e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), n = t[0], o = t[1], this.updateState({
                                            userInfo: (0, je.A)((0, _e.A)({}, o, n), {
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.prev = 4, e.next = 7, ot();
                                    case 7:
                                        t = e.sent, n = 0;
                                    case 9:
                                        if (!(n < t.length)) {
                                            e.next = 17;
                                            break
                                        }
                                        if (o = t[n] || {}, a = o.configType, i = o.configName, a !== ft) {
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.prev = 2, e.next = 5, lt();
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.prev = 2, t = Ve.IG.getItem("userQuoteAsset", "BTC"), this.updateState({
                                            userQuoteAsset: t
                                        }), e.next = 7, it();
                                    case 7:
                                        n = e.sent, (o = null === n || void 0 === n ? void 0 : n.configValue) && (this.updateState({
                                            userQuoteAsset: o
                                        }), Ve.IG.setItem("userQuoteAsset", o)), e.next = 14;
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        return e.prev = 2, e.next = 5, pt();
                                    case 5:
                                        if (e.t0 = e.sent, e.t0) {
                                            e.next = 8;
                                            break
                                        }
                                        e.t0 = {};
                                    case 8:
                                        t = e.t0.data, o = (n = t || {}).enable, a = n.isRetailUser, i = (0, et.A)(n, ["enable", "isRetailUser"]), this.updateState({
                                            pmAccountInfo: (0, _e.A)({
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
                        return (0, ge.A)(s().mark((function e() {
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
                                        if (t = be.U.read("BNC-Location"), e.prev = 3, !t) {
                                            e.next = 8;
                                            break
                                        }
                                        this.updateState({
                                            userBncLocation: t
                                        }), e.next = 14;
                                        break;
                                    case 8:
                                        return e.next = 10, (0, me.get)("/bapi/accounts/v1/private/account/compliance/getBncLocation");
                                    case 10:
                                        n = e.sent.data, o = (n || {}).bncLocation, this.updateState({
                                            userBncLocation: o
                                        }), be.U.write("BNC-Location", o);
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
            var vt = r("A1pX"),
                yt = r("UqW6"),
                gt = r("X7iw");
            const bt = {
                cookies: Ce,
                global: He,
                persistSetting: $e,
                products: Ze,
                ssrStore: Qe,
                userCenter: ht,
                settings: {
                    name: "settings",
                    state: {
                        pageName: void 0,
                        metaData: {},
                        linkData: void 0,
                        allowedModules: {
                            vouchers: !0,
                            tasks: !0,
                            dailyLogin: !0,
                            points: !0,
                            faq: !0
                        },
                        apolloConfigs: {}
                    },
                    reducers: {
                        updateState: function(e, t) {
                            return (0, vt.A)(e, t)
                        }
                    },
                    effects: function(e) {
                        return {
                            initApolloConfigs: function(t, r) {
                                return (0, ge.A)(s().mark((function t() {
                                    var n;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if ((0, yt.A)(r.settings.apolloConfigs)) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                return t.next = 4, (0, gt.l)();
                                            case 4:
                                                n = t.sent, e.settings.updateState({
                                                    apolloConfigs: n
                                                });
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            }
                        }
                    }
                }
            };
            const mt = function(e) {
                return ye({
                    models: bt,
                    redux: {
                        initialState: e
                    }
                })
            };
            var wt = r("/Q1k"),
                At = function(e, t) {
                    var r = function(r) {
                        return m().createElement(wt.Kq, {
                            store: t.redux
                        }, m().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "ReduxAppWrapper", r
                };
            var _t = r("tKUM"),
                xt = r("ztXJ"),
                Et = function(e, t) {
                    var r = function(r) {
                        var n = xt.s.Provider;
                        return m().createElement(n, {
                            value: t.lang
                        }, m().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "LanguageWrapper", r
                };
            const St = (0, u.l1)({
                appContext: function(e, t) {
                    t.req;
                    e.lang = (0, _t.getLanguage)()
                },
                appComponent: function(e, t) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                        return s().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", Et(e, t));
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
            var kt = r("YvF5"),
                Ot = r("iM9R"),
                jt = (r("888e"), r("nG1z"), r("rsqs"));
            r("wcIl");
            var Pt = r("qjHo");

            function Ft() {
                var e = (0, f.PC)()[Pt.x];
                if (e) return e
            }
            var Tt = !1,
                Bt = function(e, t, r) {
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
                                var e, r = (0, K.K)("i18nNamespaces", []);
                                r.length && !Tt && (e = r, (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var o, a, i, p, d, h, v, y, g, b, m, w;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = (0, f.PC)()[Pt.x], a = (0, K.K)("i18nRenderAsNsKey", !1), !o) {
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
                                                                    })), r && (u = r.split("@")).length > 1 && (c = u[0]), t.prev = 3, t.next = 6, (0, kt.A)({
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
                                                for (p = r.sent, u.current = !1, d = !0, h = !1, v = void 0, r.prev = 8, y = p[Symbol.iterator](); !(d = (g = y.next()).done); d = !0) b = g.value, m = b.ns, (w = b.resourceBundle) && Object.keys(w).length ? t.i18n.i18nextIns.addResourceBundle(i, m, w, !1, !0) : console.log("Resource bundle is empty", i, m);
                                                r.next = 16;
                                                break;
                                            case 12:
                                                r.prev = 12, r.t0 = r.catch(8), h = !0, v = r.t0;
                                            case 16:
                                                r.prev = 16, r.prev = 17, d || null == y.return || y.return();
                                            case 19:
                                                if (r.prev = 19, !h) {
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
                                                Tt = !0;
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
                            return m().createElement(Ot.y.Provider, {
                                value: d
                            }, m().createElement(e, Object.assign({}, r)))
                        };
                    return o.displayName = "I18nAppWrapper", o
                };
            const Ct = _bne.device;
            const Dt = function(e) {
                return (0, u.yO)({})
            };
            var Rt = r("iyUK");
            var It, Nt = !1;
            const Lt = _bne.utils;
            var Ut = r("jSBn");

            function Ht() {
                throw new Error("@desktop/runtime module is only available in the Binance desktop environment. Please check if it is being used in a server-side rendering (SSR) environment.")
            }
            const Mt = {
                    isRunningInDesktop: !1,
                    isRunningInDesktopBrowser: !1,
                    desktop: {
                        get version() {
                            return Ht()
                        },
                        get env() {
                            return Ht()
                        },
                        closeCurrentWindow: Ht,
                        getSettings: Ht,
                        setSettings: Ht,
                        openExternal: Ht,
                        openWindow: Ht,
                        showNotification: Ht
                    },
                    app: {
                        getCurrent: Ht,
                        checkForUpdates: Ht
                    },
                    user: {
                        setTemporaryToken: Ht,
                        login: Ht,
                        logout: Ht,
                        getUser: Ht
                    },
                    trading: {
                        getCurrentLayout: Ht
                    },
                    env: {
                        common: {}
                    },
                    bridge: {
                        desktopBridge: {},
                        setBridge: () => {}
                    },
                    on: () => {},
                    off: Ht,
                    emit: Ht,
                    all: Ht
                },
                Vt = window.__DESKTOP_RUNTIME_API__ ? window.__DESKTOP_RUNTIME_API__ : Mt,
                qt = Vt.isRunningInDesktop,
                Wt = Vt.isRunningInDesktopBrowser;
            Vt.desktop, Vt.app, Vt.user, Vt.trading, Vt.env, Vt.on, Vt.off, Vt.emit, Vt.bridge;
            var Kt = function(e, t) {
                var r = function(r) {
                    return t.ssrData ? m().createElement(Ut.A, Object.assign({}, t.ssrData), m().createElement(e, Object.assign({}, r))) : (console.log("[@pika/plugin-data-provider] ssrData is not found in appContext"), m().createElement(e, Object.assign({}, r)))
                };
                return r.displayName = "DataProviderWrapper", r
            };

            function Gt() {
                return qt && !Wt ? {
                    lang: (0, _t.getLanguage)(),
                    pathPrefix: (0, _t.getPathPrefix)(),
                    level2Domain: (0, Lt.getLevelDomain)(2),
                    isRegionMode: !1
                } : (0, K.K)("ssrData")
            }
            const zt = (0, u.yO)({
                appContext: function(e, t) {
                    t.req;
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.ssrData || (e.ssrData = Gt());
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
                                    return r.abrupt("return", Kt(e, t));
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))
                }
            });
            var $t = r("OFK0"),
                Jt = (0, $t.A)((function() {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, P({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, r.e(428).then(r.bind(r, "d9Lu"));
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
                Yt = (0, $t.A)((function() {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, P({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, r.e(766).then(r.bind(r, "/Nkw"));
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
                Xt = function(e, t) {
                    var r = function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.useNewHeaderFooter,
                            o = t.globalJSDisclaimerConfig,
                            a = t.staticHost;
                        return m().createElement(m().Fragment, null, n ? m().createElement(Jt, {
                            disclaimerConfig: o
                        }) : m().createElement(Yt, {
                            staticHost: a
                        }), m().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "CommonResourceAppWrapper", r
                };
            var Zt = r("uHCZ"),
                Qt = r("HS2I"),
                er = function(e, t) {
                    return "string" === typeof e ? new RegExp(e).test(t) : !!e
                },
                tr = function(e, t) {
                    var r = function() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = (0, w.K7)(),
                            o = n.pathname,
                            a = (0, p.A)((0, b.useState)(er(t.useHeader, o)), 2),
                            i = a[0],
                            s = a[1],
                            c = (0, p.A)((0, b.useState)(er(t.useFooter, o)), 2),
                            u = c[0],
                            l = c[1],
                            f = (0, p.A)((0, b.useState)(er(t.useUserCenterSidebar, o)), 2),
                            d = f[0],
                            h = f[1];
                        (0, b.useLayoutEffect)((function() {
                            s(er(t.useHeader, o)), l(er(t.useFooter, o)), h(er(t.useUserCenterSidebar, o))
                        }), [o]);
                        var v = m().useMemo((function() {
                            var e = "";
                            return i || (e = "".concat(e, " #__APP_HEADER { display: none; }")), u || (e = "".concat(e, " #__APP_FOOTER { display: none; }")), d || (e = "".concat(e, " #__APP_SIDEBAR { display: none; width: 100%; }")), e
                        }), [i, u, d]);
                        return (0, b.useEffect)((function() {
                            t.ssr || (0, Qt.configInitial)({
                                url: t.apiHost,
                                onWidgetConfig: t.onWidgetConfig,
                                onI18n: t.onI18n,
                                onCommonEnv: t.onCommonEnv,
                                team: t.team
                            })
                        }), []), m().createElement(m().Fragment, null, v && m().createElement(Zt.A, null, m().createElement("style", {
                            id: "header-footer-global-style"
                        }, v)), m().createElement(e, Object.assign({}, r)))
                    };
                    return r.displayName = "HeaderFooterAppWrapper", r
                },
                rr = function(e, t) {
                    var r = e.useHeader,
                        n = e.useFooter,
                        o = e.useUserCenterSidebar,
                        a = e.useCommonWidgetDataSDK;
                    return Object.assign(Object.assign({}, e), {
                        useHeader: er(r, t),
                        useFooter: er(n, t),
                        useSidebar: er(o, t),
                        useCommonWidgetDataSDK: er(a, t)
                    })
                };
            var nr = r("qK3R"),
                or = function(e) {
                    var t = !1;
                    return function() {
                        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        t || (e.apply(void 0, (0, g.A)(n)), t = !0)
                    }
                },
                ar = !0,
                ir = -1,
                sr = function(e) {
                    var t = E,
                        n = t.PIKA_CLS,
                        o = t.PIKA_FCP,
                        a = t.PIKA_FID,
                        i = t.PIKA_INP,
                        u = t.PIKA_LCP,
                        l = t.PIKA_TTFB,
                        p = (0, nr.trace)(x);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            f = (0, w.K7)(),
                            d = f.matches,
                            h = (0, b.useMemo)((function() {
                                return k(d)
                            }), [d]);
                        (0, b.useEffect)((function() {
                            P({
                                remainingTime: 49,
                                timeout: 1e4
                            }).then((function() {
                                return r.e(848).then(r.bind(r, "vUFu"))
                            })).then((function(e) {
                                var t = e.onLCP,
                                    r = e.onFCP,
                                    n = e.onFID,
                                    f = e.onCLS,
                                    d = e.onINP,
                                    h = e.onTTFB;
                                t(or((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = u.name, t.next = 4, g({
                                                        value: e.value
                                                    }, {
                                                        lcp: e.value
                                                    });
                                                case 4:
                                                    t.t2 = t.sent, t.t0.traceChild.call(t.t0, t.t1, t.t2).stop(), setTimeout((function() {
                                                        ar = !1
                                                    }), 2e3);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }))), r(or((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = o.name, t.next = 4, g({
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
                                }))), n(or((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = a.name, t.next = 4, g({
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
                                }))), f(or((function(e) {
                                    ar && e.value > ir && (ir = e.value)
                                }))), d(or((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = i.name, t.next = 4, g({
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
                                }))), h(or((function(e) {
                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                        return s().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = p, t.t1 = l.name, t.next = 4, g({
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
                                "hidden" === document.visibilityState && (y(), v())
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
                                                if (e.t0 = ir >= 0, !e.t0) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.t1 = p, e.t2 = n.name, e.next = 6, g({
                                                    value: ir
                                                }, {
                                                    cls: ir
                                                });
                                            case 6:
                                                e.t3 = e.sent, e.t1.traceChild.call(e.t1, e.t2, e.t3).stop(), ir = -1;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            },
                            y = (0, b.useCallback)(or((function() {
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
                                                })), a.t = "PAGE", e.t0 = p, e.next = 10, g({}, a);
                                            case 10:
                                                e.t1 = e.sent, e.t0.traceChild.call(e.t0, "PAGE", e.t1).stop();
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            })), []),
                            g = function(e, t) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", Object.assign(Object.assign({}, e), {
                                                    __rootAttrs: Object.assign(t, {
                                                        ts: Date.now(),
                                                        path: h
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
                        return m().createElement(e, Object.assign({}, t))
                    }
                };
            var cr = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, w.rd)();
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
                    }), []), m().createElement(e, Object.assign({}, t))
                }
            };
            const ur = (0, u.yO)({
                appComponent: function(e) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                        key: "loadGAScript",
                                        data: {}
                                    }), cr(e)));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            (0, _bne.utm.writeUTMtoCookie)();
            const lr = (0, u.yO)({});
            var pr = "sensorsdata2015jssdkcross",
                fr = document.cookie.split("; ");
            (function(e) {
                return fr.filter((function(t) {
                    return t.startsWith("".concat(e, "="))
                })).length > 1
            })(pr) && function(e) {
                var t = location.hostname.split(".");
                2 === t.length && t.unshift("www"), document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.").concat(t.join("."), "; path=/")
            }(pr);
            const dr = (0, u.yO)({});
            var hr = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return b.useEffect((function() {
                        P({
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
            const vr = (0, u.yO)({
                appComponent: function(e) {
                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", hr(e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            var yr, gr = r("NoXm"),
                br = r("oVQP"),
                mr = new Map,
                wr = r("MEAY"),
                Ar = {
                    dark: wr.zd,
                    light: wr.bK
                },
                _r = "theme",
                xr = "light",
                Er = xr,
                Sr = Er;
            Sr = (null !== (yr = T(_r)) && void 0 !== yr ? yr : Er).split("_")[0];
            var kr = function(e, t, r) {
                return function() {
                    var n, o = (0, p.A)((0, gr.useCacheState)(_r, Sr), 1)[0],
                        a = null === r || void 0 === r ? void 0 : r.detectColorMode,
                        i = null === r || void 0 === r ? void 0 : r.useNewHeaderFooter,
                        s = (null === t || void 0 === t ? void 0 : t.uikit) || {},
                        u = s.color,
                        l = s.isRedUpGreenDown,
                        f = s.theme,
                        d = null === (n = null === t || void 0 === t ? void 0 : t.ua) || void 0 === n ? void 0 : n.platform.isMobile,
                        h = i ? o : f,
                        v = b.useMemo((function() {
                            var e = h === xr ? br.BB : br.XT,
                                t = a ? function(e) {
                                    var t = e.theme,
                                        r = e.isRedUpGreenDown,
                                        n = e.colorMode,
                                        o = ["fresh" !== n && n ? n : "", "true" === r ? "reverse" : ""].filter(Boolean);
                                    return Ar[t][o.join("-")] || {}
                                }({
                                    theme: h,
                                    isRedUpGreenDown: l,
                                    colorMode: u
                                }) : {};
                            d && (e.mobile && (t = Object.assign(Object.assign({}, t), e.mobile)), t.mobile && (t = Object.assign(Object.assign({}, t), t.mobile)));
                            var r = Object.assign(Object.assign({}, e), t);
                            r.mobile;
                            return function(e) {
                                var t = JSON.stringify(e);
                                if (mr.has(t)) return mr.get(t);
                                var r = e.hasOwnProperty("BasicBg"),
                                    n = e.hasOwnProperty("PrimaryText"),
                                    o = "body { ".concat(Object.entries(e).map((function(e) {
                                        var t = (0, p.A)(e, 2),
                                            o = t[0],
                                            a = t[1];
                                        return "BasicBg" === o && r ? "--color-".concat(o, ": ").concat(a, "; background-color: var(--color-").concat(o, ");") : "PrimaryText" === o && n ? "--color-".concat(o, ": ").concat(a, "; color: var(--color-").concat(o, ");") : "--color-".concat(o, ": ").concat(a, ";")
                                    })).join(" "), " }");
                                return mr.set(t, o), o
                            }((0, c.__rest)(r, ["mobile"]))
                        }), [h, d, u, l, a]);
                    return b.createElement(b.Fragment, null, b.createElement(Zt.A, null, b.createElement("style", {
                        id: "webstudio-universal-uikit-colors"
                    }, v)), b.createElement(e, null))
                }
            };
            var Or = {
                    plugin: function() {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", U(e));
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
                jr = {
                    plugin: function() {
                        return (0, u.Uu)({
                            appComponent: function(e, t) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", At(e, t));
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appContext: function(e) {
                                var t;
                                e.redux || (t = (0, K.K)("redux", t), e.redux = function(e) {
                                    var t = e.initialState,
                                        r = e.ctx;
                                    return mt(t, Object.assign(Object.assign({}, r), {
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
                Pr = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(t, r) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function n() {
                                    return s().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", Bt(t, r, e));
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
                                    var a, i, u, l, f, d, h, v, y;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (a = t.lang, i = e.i18n, u = i.namespaces, l = void 0 === u ? [] : u, f = i.keySeparator, d = i.nsSeparator, h = Ft(), t.i18nBasePath = h, v = (0, Ot.T)({
                                                        namespaces: l,
                                                        basePath: h,
                                                        keySeparator: f,
                                                        nsSeparator: d
                                                    }), t.i18n = v, !o.beforeResolve) {
                                                    r.next = 9;
                                                    break
                                                }
                                                t.i18nPromise = new Promise((function(e) {
                                                    y = e
                                                })), o.beforeResolve((function(e, r, o) {
                                                    return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function e() {
                                                        var r, i, c, u, l, f;
                                                        return s().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    e.prev = 0, e.next = 11;
                                                                    break;
                                                                case 7:
                                                                    i = e.sent, t.collectionKeys = r, i && ((0, jt.pu)(n) ? (c = i[a], u = (0, jt.Zu)(c), t.i18nResource = (0, Oe.A)({}, a, u), Object.entries(u).forEach((function(e) {
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
                                                                    return (l = (0, K.K)("i18nResource")) && !l[a] && ((f = Object.keys(l)).length ? l[a] = l[f[0]] : l[a] = {}), e.next = 16, v.init({
                                                                        lng: a,
                                                                        resources: l
                                                                    });
                                                                case 16:
                                                                    e.next = 21;
                                                                    break;
                                                                case 18:
                                                                    e.prev = 18, e.t0 = e.catch(0), console.error("i18n runtime error", e.t0);
                                                                case 21:
                                                                    y(), o();
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
                                                if (r.t0 = v.i18nextIns.isInitialized, r.t0) {
                                                    r.next = 13;
                                                    break
                                                }
                                                return r.next = 13, v.init({
                                                    lng: a
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
                    options: '{"i18n":{"smartRoute":true,"namespaces":["rewards-hub-ui","widget-common"]}}'
                },
                Fr = {
                    plugin: function() {
                        return (0, u.yO)({
                            appContext: function(e, t) {
                                t.req;
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                    var r;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                r = "desktop", "undefined" !== typeof navigator && navigator.userAgent && (r = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent), e.ua = (0, Ct.getDevice)(r);
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
                Tr = {
                    plugin: function() {
                        return (0, u.yO)({
                            init: function() {
                                var e = this;
                                if (!Nt) {
                                    Nt = !0;
                                    var t = function() {
                                        var e = (0, f.PC)().STATIC_HOST;
                                        return e ? {
                                            staticHost: e
                                        } : (console.error("[@pika/plugin-bids-interceptor] STATIC_HOST is not defined in runtimeConfig"), null)
                                    }();
                                    t && H._config.responseInterceptors.unshift((function(n) {
                                        for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
                                        return (0, c.__awaiter)(e, void 0, void 0, s().mark((function e() {
                                            var o;
                                            return s().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, (0, Rt.Wv)(n);
                                                    case 2:
                                                        if (!e.sent) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        if (!It) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 6, It.apply(void 0, [n].concat((0, g.A)(a)));
                                                    case 6:
                                                    case 15:
                                                        return e.abrupt("return", e.sent);
                                                    case 7:
                                                        return e.next = 9, P();
                                                    case 9:
                                                        return e.next = 11, Promise.all([r.e(348), r.e(557), r.e(226), r.e(97)]).then(r.bind(r, "0VaG"));
                                                    case 11:
                                                        return o = e.sent, It = o.BIDSInterceptor(t), e.next = 15, It.apply(void 0, [n].concat((0, g.A)(a)));
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
                Br = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(t, r) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function r() {
                                    var n;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return n = (0, f.PC)(), r.abrupt("return", n.API_HOST ? tr(t, Object.assign(Object.assign({}, e), {
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
                                                    options: rr(e, null === n || void 0 === n ? void 0 : n.pathname)
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
                    options: '{"ssr":true,"widgetExtends":{"useStickyHeader":true},"useHeader":true,"useFooter":true,"useUserCenterSidebar":false}'
                },
                Cr = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, c.__awaiter)(void 0, void 0, void 0, s().mark((function t() {
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", sr(e));
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
                Dr = {
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
                Rr = {
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
                                                null === n || void 0 === n ? void 0 : n.cookies, null === n || void 0 === n ? void 0 : n.headers, c = (0, K.K)("_uikit", {
                                                    theme: Sr,
                                                    color: T("color"),
                                                    isRedUpGreenDown: T("isRedUpGreenDown")
                                                }), o = c.theme, (null === e || void 0 === e ? void 0 : e.detectColorMode) && (a = c.color, i = c.isRedUpGreenDown), o && !B(o) && (o = Er), a && !B(a) && (a = void 0), i && !B(i) && (i = void 0), t.uikit = Object.assign(Object.assign({}, t.uikit), {
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
                                                return n.abrupt("return", (null === e || void 0 === e ? void 0 : e.injectColorsInHead) ? kr(t, r, e) : t);
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
                Ir = {
                    plugin0: {
                        plugin: o.A
                    },
                    plugin1: {
                        plugin: a.A
                    },
                    plugin2: {
                        plugin: y,
                        options: '{"sensorsServerHost":"https://sensors.binance.cloud/sa?project=default","projectName":"rewards-hub-ui"}'
                    },
                    plugin3: {
                        plugin: N,
                        options: '{"serverInjectSDK":true,"sentryDsn":"https://8c0903d539acc057e461750bbe28ec66@o529943.ingest.sentry.io/4505673491087360","sentryEnv":"local","packageName":"rewards-hub-ui","sentryReleaseVersion":"20250430-9d462b01-229928","sampleRate":0.01,"pikaVersion":"0.3.62","ssr":true,"analyticsId":"rewards-hub-ui,Frontend,cll3c0gtc2408260u4i10gcl9nb","appTarget":"web"}'
                    },
                    plugin4: Or,
                    plugin5: {
                        plugin: W
                    },
                    plugin6: jr,
                    plugin7: {
                        plugin: St,
                        options: '{"addHtmlAttr":true}'
                    },
                    plugin8: Pr,
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
                    plugin10: Fr,
                    plugin11: {
                        plugin: Dt,
                        options: '{"reactAndReactDomSuffix":"production.min.18.2.0","appTarget":"web"}'
                    },
                    plugin12: Tr,
                    plugin13: {
                        plugin: zt
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
                                                    return n = (0, f.PC)(), r.abrupt("return", n.STATIC_HOST ? Xt(t, Object.assign(Object.assign({}, e), {
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
                    plugin15: Br,
                    plugin16: Cr,
                    plugin17: {
                        plugin: ur,
                        options: '{"trackingId":"test","queryParamsFilter":[]}'
                    },
                    plugin18: {
                        plugin: lr
                    },
                    plugin19: {
                        plugin: dr
                    },
                    plugin20: Dr,
                    plugin21: {
                        plugin: vr
                    },
                    plugin22: Rr
                }
        },
        etBY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = {
                STATIC_HOST: "https://static.devfdg.net",
                STATIC_HOST_SHARE: "https://public.bnbstatic.com",
                STATIC_HOST_PRIVATE: "http://static.devfdg.net.s3.ap-northeast-1.amazonaws.com",
                SITE_HOST: "https://www.qa1fdg.net",
                API_HOST: "https://www.qa1fdg.net",
                API_HOST_PRIVATE: "https://www.qa1fdg.net",
                SENSORS_SERVER_HOST: "https://sensors.binance.cloud/sa?project=default",
                NODE_ENV: "production",
                I18N_TRACK: "true",
                I18N_TRACK_APPID: "translate_data",
                I18N_TRACK_HOST: "https://www.qa1fdg.net",
                SENTRY_ENV: "local",
                GA_TRACKING_ID: "test",
                GTM_TRACKING_ID: "WW2RRZX",
                SENTRY_DSN: "https://8c0903d539acc057e461750bbe28ec66@o529943.ingest.sentry.io/4505673491087360",
                CACHE_PROXY_HOST: "https://www.qa1fdg.net/",
                THEMIS_ENV: "QA",
                THEMIS_AUTH_GROWTH: "MTI4NTE4NDgxMTptd3dXU2x5bkR2dTBkbXpxT1d0NEhta0hhZmg2ZGVmaw==",
                THEMIS_ENTRY_STRATEGY: "web_rewards_hub_entry",
                COMMIT_HEAD: "9d462b011dbafaa0a4944453d3b823ad481cd5e6"
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
                    return Promise.all([r.e(593), r.e(738), r.e(902), r.e(815), r.e(88), r.e(953), r.e(348), r.e(557), r.e(226), r.e(628)]).then(r.bind(r, "/vTW"))
                },
                __resolveWeak__: function() {
                    return ["/vTW"]
                },
                path: "/",
                id: "2981",
                children: [{
                    path: "",
                    __import__: function() {
                        return Promise.all([r.e(738), r.e(815), r.e(822)]).then(r.bind(r, "NpO6"))
                    },
                    __resolveWeak__: function() {
                        return ["NpO6"]
                    },
                    id: "4690"
                }, {
                    __import__: function() {
                        return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(348), r.e(557), r.e(226), r.e(616)]).then(r.bind(r, "utO0"))
                    },
                    __resolveWeak__: function() {
                        return ["utO0"]
                    },
                    path: "new-user-zone",
                    id: "ca4b",
                    children: [{
                        path: "",
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(584), r.e(366)]).then(r.bind(r, "9dZf"))
                        },
                        __resolveWeak__: function() {
                            return ["9dZf"]
                        },
                        id: "2d83"
                    }]
                }, {
                    __import__: function() {
                        return Promise.all([r.e(738), r.e(902), r.e(735)]).then(r.bind(r, "FubV"))
                    },
                    __resolveWeak__: function() {
                        return ["FubV"]
                    },
                    path: "rewards-hub",
                    id: "0df3",
                    children: [{
                        path: "",
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(732), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(953), r.e(767), r.e(348), r.e(557), r.e(184), r.e(523), r.e(584), r.e(599)]).then(r.bind(r, "Sut8"))
                        },
                        __resolveWeak__: function() {
                            return ["Sut8"]
                        },
                        id: "e2d5"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(953), r.e(767), r.e(184), r.e(523), r.e(584), r.e(125)]).then(r.bind(r, "smF5"))
                        },
                        __resolveWeak__: function() {
                            return ["smF5"]
                        },
                        path: "tasks/preview/:challengeKey",
                        id: "af8c"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(537), r.e(530), r.e(834)]).then(r.bind(r, "akjH"))
                        },
                        __resolveWeak__: function() {
                            return ["akjH"]
                        },
                        path: "rewards/:itemId",
                        id: "9d64"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(530), r.e(128)]).then(r.bind(r, "6w+N"))
                        },
                        __resolveWeak__: function() {
                            return ["6w+N"]
                        },
                        path: "points",
                        id: "f04a"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(530), r.e(916)]).then(r.bind(r, "yA7e"))
                        },
                        __resolveWeak__: function() {
                            return ["yA7e"]
                        },
                        path: "rewards",
                        id: "a480"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(953), r.e(767), r.e(184), r.e(523), r.e(584), r.e(150)]).then(r.bind(r, "U38M"))
                        },
                        __resolveWeak__: function() {
                            return ["U38M"]
                        },
                        path: "tasks",
                        id: "dcf0"
                    }, {
                        __import__: function() {
                            return Promise.all([r.e(593), r.e(596), r.e(732), r.e(902), r.e(815), r.e(88), r.e(537), r.e(995), r.e(953), r.e(767), r.e(206)]).then(r.bind(r, "LcxY"))
                        },
                        __resolveWeak__: function() {
                            return ["LcxY"]
                        },
                        path: "vouchers",
                        id: "745c"
                    }]
                }]
            }]
        },
        XLaE: (e, t, r) => {
            "use strict";
            r.d(t, {
                N7: () => n.N7,
                tH: () => o.t
            });
            var n = r("V+XC"),
                o = r("+Od7");
            r("mnh2")
        },
        qXKv: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                init: () => u
            });
            var n = r("XLaE");
            var o = r("+HTX");
            var a = r("N3iv"),
                i = r("0HvA"),
                s = r("QHrh"),
                c = r("yiIT");
            (0, a.pw)({
                http: {
                    apiHostPrivate: c.CJ
                },
                track: {
                    trackFn: function(e, t, r) {
                        var n = (null === t || void 0 === t ? void 0 : t.pageName) || "",
                            a = (null === t || void 0 === t ? void 0 : t.elementID) || "";
                        return (0, o.AC)({
                            eventName: e,
                            data: Object.assign({
                                pageName: n,
                                elementID: a
                            }, t),
                            options: r
                        })
                    },
                    serverUrl: c.LD,
                    staticHost: c.K5
                },
                logger: {
                    reportFunction: n.N7,
                    buCode: i.j3,
                    moduleCode: i.Ay.REWARDS_HUB_UI
                }
            }), (0, s.dh)({
                project: "rewards-hub-ui",
                business: "growth",
                frame: "ssr"
            });
            var u = function() {}
        },
        X7iw: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => l,
                v: () => c
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("3qxK"),
                s = Date.now(),
                c = function() {
                    var e = (0, n.A)(a().mark((function e(t) {
                        var r, n, o, c, u, l;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = (r = t || {}).startTime, o = void 0 === n ? 14988672e5 : n, c = r.endTime, u = void 0 === c ? s : c, e.next = 3;
                                    break;
                                case 3:
                                    return e.next = 5, (0, i.b)("/bapi/composite/v2/private/referral/lite/referrals/overview", {
                                        startTime: o,
                                        endTime: u
                                    });
                                case 5:
                                    return l = e.sent, e.abrupt("return", l.data);
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
                u = r("yiIT"),
                l = function() {
                    var e = (0, n.A)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return e.next = 4, (0, i.b)("/bapi/growth/v1/friendly/growth/fe/configs", {
                                        keySet: u.L5
                                    });
                                case 4:
                                    return t = e.sent, e.abrupt("return", t.data);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        yiIT: (e, t, r) => {
            "use strict";
            r.d(t, {
                CJ: () => E,
                L5: () => y,
                lT: () => f,
                Uc: () => i,
                V2: () => u,
                MB: () => l,
                ro: () => v,
                Z9: () => h,
                L3: () => n,
                mu: () => d,
                LD: () => A,
                dM: () => b,
                K5: () => m,
                Fw: () => S,
                Ap: () => x,
                lF: () => _,
                Os: () => p,
                M7: () => c,
                WW: () => s
            });
            var n, o = r("Dz1D"),
                a = r("AUe6"),
                i = {
                    SUCCESS: "000000",
                    SERVICE_EXCEPTION: "100001",
                    SESSION_EXPIRED: "100001005",
                    LOGIN_EXPIRED: "100002001"
                },
                s = {
                    PAGE_VIEW: "pageView",
                    MODULE_VIEW: "ModuleView",
                    WEB_CLICK: "webClick"
                },
                c = {
                    HOME_PAGE: "rewardshub_homepage",
                    FAQ_PAGE: "rewardshub_faqpage",
                    VOUCHER_PAGE: "rewardshub_voucherspage",
                    TASK_PAGE: "rewardshub_taskspage",
                    REWARD_PAGE: "rewardshub_rewardsshoppage",
                    REWARD_DETAIL_PAGE: "rewardshub_rewarddetailspage",
                    POINT_HISTORY_PAGE: "rewardshub_pointshistorypage",
                    POINT_HISTORY_EARN_TAB: "rewardshub_earnedpointshistory",
                    POINT_HISTORY_SPENT_TAB: "rewardshub_spentpointshistory",
                    POINT_HISTORY_EXPIRED_TAB: "rewardshub_expiredpointshistory",
                    REWARD_DETAIL_CLAIM_BUTTON: "rewardshub_claimrewardbutton",
                    REWARDSCARD: "rewardshub_rewardscard",
                    CHALLENGE: "rewardshub_challenges",
                    VOUCHER: "rewardshub_vouchers",
                    MYSTERY_BOX: "rewardshub_mysterybox",
                    FLASHVOUCHER_BANNER: "rewardshub_flashvoucherbanner",
                    FLASHVOUCHER_POPUP: "rewardshub_flashvoucherpopup",
                    FLASHVOUCHER_REMINDER: "rewardshub_flashvouchernoti"
                },
                u = a.A5.replace("www.", ""),
                l = "Whitelist",
                p = "NjY3NTIxNDA0MzpNY3hCQUVNMU1JUkRYd1dLYjdtbkprbmNld2hLY3BURw==",
                f = "bnc://app.binance.com/main/main",
                d = "rewards_hub_pages",
                h = "USD",
                v = ["USDT"];
            ! function(e) {
                e.RewardsHub = "rewards-hub", e.RewardsHubVouchers = "rewards-hub/vouchers", e.RewardsHubTasks = "rewards-hub/tasks", e.RewardsHubRewards = "rewards-hub/rewards", e.RewardsHubPoints = "rewards-hub/points", e.NewUserZone = "new-user-zone"
            }(n || (n = {}));
            var y = ["rwHub.ALWAYS_ON_MICA_REFERRAL_TASK_ID", "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_TASK_ID", "rwHub.ALWAYS_ON_MICA_REFERRAL_CHALLENGE_ID", "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_CHALLENGE_ID", "rwHub.NUZ_BLOCK_LOCALES", "rwHub.COUNTDOWN_VOUCHER_LIST"],
                g = (0, o.PC)(),
                b = g.SITE_HOST,
                m = g.STATIC_HOST,
                w = (g.STATIC_HOST_SHARE, g.API_HOST),
                A = g.SENSORS_SERVER_HOST,
                _ = g.THEMIS_ENV,
                x = g.THEMIS_AUTH_GROWTH,
                E = g.API_HOST_PRIVATE,
                S = (w && (w.includes("qa1fdg") || w.includes("devfdg")), "".concat(m, "/static/images/rewards-hub-ui"))
        },
        "3qxK": (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => l
            });
            var n = r("sViW"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("xj71"),
                s = r("LKsJ"),
                c = r("yiIT"),
                u = function(e) {
                    return new Promise((function(t) {
                        setTimeout(t, e)
                    }))
                },
                l = function() {
                    var e = (0, n.A)(a().mark((function e(t, r, n) {
                        var o, l, p;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.bE)(t, r, n);
                                case 2:
                                    if (o = e.sent, ![c.Uc.SESSION_EXPIRED, c.Uc.LOGIN_EXPIRED].includes(o.code)) {
                                        e.next = 9;
                                        break
                                    }
                                    return null === s.Ke || void 0 === s.Ke || null === (l = s.Ke.location) || void 0 === l || null === (p = l.reload) || void 0 === p || p.call(l), e.next = 8, u(2e3);
                                case 8:
                                case 9:
                                    return e.abrupt("return", o);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        qjHo: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => n
            });
            var n = "I18N_BASE_PUBLIC"
        },
        iM9R: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => G,
                y: () => K
            });
            var n = r("tEf9"),
                o = r("Pz56"),
                a = r.n(o),
                i = r("wIZF"),
                s = r("E0uk");
            var c = r("sViW"),
                u = r("888e"),
                l = r("ezuS"),
                p = r("BK7R"),
                f = r("gZfF"),
                d = r("Kzjd"),
                h = r("YvF5"),
                v = r("tKUM"),
                y = function e(t) {
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
                                                    return n = r.split("@"), o = n[n.length - 1], i = n.length > 1 ? n[0] : void 0, t.next = 5, (0, h.A)({
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
                            var r, o, i, s, c, u, d, h, y;
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
                                        return h = (0, p.A)({
                                            lng: o,
                                            resources: s,
                                            ns: d,
                                            fallbackLng: "en",
                                            defaultNS: d[0],
                                            keySeparator: !1
                                        }, u), e.next = 11, n._i18nextIns.init(h);
                                    case 11:
                                        if (!o || (null === t || void 0 === t ? void 0 : t.resources)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 14, n.addResources(o);
                                    case 14:
                                        (y = e.sent) && (s = (0, l.A)({}, o, y));
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
            var g = r("DTvD"),
                b = r("Dz1D"),
                m = r("qjHo");

            function w(e) {
                return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, w(e)
            }

            function A() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : w(XMLHttpRequest))
            }
            var _, x, E, S = r("47/P"),
                k = r.t(S, 2);

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        P(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function P(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != F(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != F(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == F(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function F(e) {
                return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, F(e)
            }
            "function" === typeof fetch && (_ = "undefined" !== typeof global && global.fetch ? global.fetch : window.fetch ? window.fetch : fetch), A() && ("undefined" !== typeof global && global.XMLHttpRequest ? x = global.XMLHttpRequest : window.XMLHttpRequest && (x = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? E = global.ActiveXObject : window.ActiveXObject && (E = window.ActiveXObject)), _ || !k || x || E || (_ = S || k), "function" !== typeof _ && (_ = void 0);
            var T = function(e, t) {
                    if (t && "object" === F(t)) {
                        var r = "";
                        for (var n in t) r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
                        if (!r) return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + r.slice(1)
                    }
                    return e
                },
                B = function(e, t, r, n) {
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
                    "function" === typeof fetch ? fetch(e, t).then(o).catch(r) : _(e, t).then(o).catch(r)
                },
                C = !1;
            const D = function(e, t, r, n) {
                return "function" === typeof r && (n = r, r = void 0), n = n || function() {}, _ && 0 !== t.indexOf("file:") ? function(e, t, r, n) {
                    e.queryStringParams && (t = T(t, e.queryStringParams));
                    var o = j({}, "function" === typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    r && (o["Content-Type"] = "application/json");
                    var a = "function" === typeof e.requestOptions ? e.requestOptions(r) : e.requestOptions,
                        i = j({
                            method: r ? "POST" : "GET",
                            body: r ? e.stringify(r) : void 0,
                            headers: o
                        }, C ? {} : a),
                        s = "function" === typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                    try {
                        B(t, i, n, s)
                    } catch (c) {
                        if (!a || 0 === Object.keys(a).length || !c.message || c.message.indexOf("not implemented") < 0) return n(c);
                        try {
                            Object.keys(a).forEach((function(e) {
                                delete i[e]
                            })), B(t, i, n, s), C = !0
                        } catch (u) {
                            n(u)
                        }
                    }
                }(e, t, r, n) : A() || "function" === typeof ActiveXObject ? function(e, t, r, n) {
                    r && "object" === F(r) && (r = T("", r).slice(1)), e.queryStringParams && (t = T(t, e.queryStringParams));
                    try {
                        var o;
                        (o = x ? new x : new E("MSXML2.XMLHTTP.3.0")).open(r ? "POST" : "GET", t, 1), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!e.withCredentials, r && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
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

            function R(e) {
                return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, R(e)
            }

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        H(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, M(n.key), n)
                }
            }

            function H(e, t, r) {
                return (t = M(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function M(e) {
                var t = function(e, t) {
                    if ("object" != R(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != R(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == R(t) ? t : String(t)
            }
            var V = function() {
                    return {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        parse: function(e) {
                            return JSON.parse(e)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(e, t, r) {
                            return H({}, t, r || "")
                        },
                        parseLoadPayload: function(e, t) {},
                        request: D,
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
                q = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        L(this, e), this.services = t, this.options = r, this.allOptions = n, this.type = "backend", this.init(t, r, n)
                    }
                    var t, r, n;
                    return t = e, r = [{
                        key: "init",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = e, this.options = N(N(N({}, V()), this.options || {}), r), this.allOptions = n, this.services && this.options.reloadInterval && setInterval((function() {
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
                    }], r && U(t.prototype, r), n && U(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }();
            q.type = "backend";
            const W = q;
            var K = (0, g.createContext)(null),
                G = function(e) {
                    var t = e.namespaces,
                        r = e.basePath,
                        o = e.nsSeparator,
                        c = e.keySeparator,
                        u = (0, b.PC)(),
                        l = new y({
                            basePath: r
                        }),
                        p = (l._init, l._i18nextIns),
                        f = l.setLanguage,
                        d = l._addNamespaces,
                        h = (0, i.__rest)(l, ["_init", "_i18nextIns", "setLanguage", "_addNamespaces"]),
                        v = "";
                    return Object.assign({
                        init: function(e) {
                            return (0, i.__awaiter)(this, void 0, void 0, a().mark((function i() {
                                var f, d, h, y, g, b, w, A, _, x;
                                return a().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if ((f = e || {}).ns || (f.ns = t.slice()), f.ns = Array.from(new Set(f.ns)), d = [], h = !0, y = !1, g = void 0, !f.postProcess) {
                                                a.next = 21;
                                                break
                                            }
                                            for (a.prev = 5, b = f.postProcess[Symbol.iterator](); !(h = (w = b.next()).done); h = !0) A = w.value, d.push(A.name), p.use(A);
                                            a.next = 13;
                                            break;
                                        case 9:
                                            a.prev = 9, a.t0 = a.catch(5), y = !0, g = a.t0;
                                        case 13:
                                            a.prev = 13, a.prev = 14, h || null == b.return || b.return();
                                        case 16:
                                            if (a.prev = 16, !y) {
                                                a.next = 19;
                                                break
                                            }
                                            throw g;
                                        case 19:
                                            return a.finish(16);
                                        case 20:
                                            return a.finish(13);
                                        case 21:
                                            return r && p.use(W), _ = f.ns.slice(), x = {
                                                alternateFetch: s.fetch,
                                                loadPath: function(e, t) {
                                                    if (t.every((function(e) {
                                                            return _.includes(e)
                                                        })) || !e.includes(v || p.language)) return "";
                                                    if (1 === t.length) {
                                                        var r = t[0].split("@");
                                                        if (r.length > 1) return "".concat(u[m.x], "/").concat(r[0], "/{{lng}}/").concat(r[r.length - 1])
                                                    }
                                                    return "".concat(u[m.x], "/{{lng}}/{{ns}}")
                                                }
                                            }, a.next = 25, l._init(Object.assign(Object.assign({
                                                backend: x,
                                                react: {
                                                    useSuspense: !1
                                                },
                                                partialBundledLanguages: !0,
                                                nsSeparator: o,
                                                keySeparator: c || !1
                                            }, f), {
                                                postProcess: (0, n.A)(d)
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
                    }, h)
                }
        },
        rsqs: (e, t, r) => {
            "use strict";
            r.d(t, {
                pu: () => c,
                Zu: () => u
            });
            r("Kzjd");
            var n = r("VP0d"),
                o = r("blBx"),
                a = r("6w+j"),
                i = r.n(a),
                s = (r("tKUM"), "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?"));
            i()((function(e) {
                var t = "en",
                    r = "";
                if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", "undefined" === typeof e ? "undefined" : (0, o.A)(e)), {
                    lang: t,
                    region: r,
                    path: e
                };
                var a, i, c, u = e.match(new RegExp("^".concat(s, "$")));
                return u ? {
                    lang: t = void 0 === (i = (a = (0, n.A)(u, 4))[1]) ? "" : i,
                    region: r = void 0 === (c = a[3]) ? "" : c,
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
                o: () => a,
                s: () => o
            });
            var n = r("DTvD"),
                o = (0, n.createContext)(""),
                a = function() {
                    return (0, n.useContext)(o)
                }
        },
        hFxi: (e, t, r) => {
            "use strict";
            r.d(t, {
                N2: () => o,
                Vo: () => a
            });
            var n = r("lmEU"),
                o = function(e) {
                    var t = e.data;
                    (0, n.z)({
                        data: {
                            data: t
                        },
                        key: "reportMonitorEvent"
                    })
                },
                a = function(e) {
                    var t = e.data;
                    (0, n.z)({
                        data: {
                            data: t
                        },
                        key: "reportErrorEvent"
                    })
                }
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
        "+Od7": (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => h
            });
            var n = r("888e"),
                o = r("nG1z"),
                a = r("m+Lx");

            function i(e, t, r) {
                return i = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, a.A)(e)););
                        return e
                    }(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(r || e) : o.value
                    }
                }, i(e, t, r)
            }
            var s = r("2PCm"),
                c = r("VKAp"),
                u = r("oH+a"),
                l = r("DTvD"),
                p = {
                    componentStack: null,
                    error: null
                },
                f = function(e) {
                    (0, s.A)(r, e);
                    var t = (0, c.A)(r);

                    function r() {
                        var e;
                        return (0, n.A)(this, r), (e = t.call.apply(t, [this].concat(Array.prototype.slice.call(arguments)))).state = p, e.resetErrorBoundary = function() {
                            var t = e.props.onReset,
                                r = e.state,
                                n = r.error,
                                o = r.componentStack;
                            t && t(n, o), e.setState(p)
                        }, (0, u.A)(e)
                    }
                    return (0, o.A)(r, [{
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
                            }) : r, l.isValidElement(e) ? e : null) : "function" === typeof n ? n() : n
                        }
                    }]), r
                }(l.Component),
                d = r("2URn");
            var h = function(e) {
                (0, s.A)(r, e);
                var t = (0, c.A)(r);

                function r() {
                    return (0, n.A)(this, r), t.apply(this, arguments)
                }
                return (0, o.A)(r, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        var n, o, s, c = t.componentStack,
                            u = this.props.name;
                        "undefined" !== typeof originalSentry && function(e) {
                            try {
                                switch (Object.prototype.toString.call(e)) {
                                    case "[object Error]":
                                    case "[object Exception]":
                                    case "[object DOMException]":
                                        return !0;
                                    default:
                                        return (0, d.A)(e, Error)
                                }
                            } catch (f) {
                                return !1
                            }
                        }(e) && originalSentry.captureException(e, (function(t) {
                            var r;
                            return t.setExtra("componentStack", c), t.setLevel("fatal"), t.setTag("component", u || "ErrorBoundary ".concat(e.message)), t.setExtra("html-className", null === (r = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === r ? void 0 : r.className), t
                        })), (n = (0, a.A)(r.prototype), o = "componentDidCatch", s = this, i(n, o, s)).call(this, e, {
                            componentStack: c
                        })
                    }
                }]), r
            }(f)
        },
        "V+XC": (e, t, r) => {
            "use strict";
            r.d(t, {
                N7: () => a
            });
            var n = r("2URn"),
                o = r("hFxi");

            function a(e, t, r) {
                (0, n.A)(e, Error) ? function(e) {
                    "undefined" !== typeof originalSentry && originalSentry.captureException(e)
                }(e) : "string" === typeof e ? t ? (0, o.Vo)({
                    data: {
                        event: {
                            c: e,
                            bc: t,
                            extra: r
                        }
                    }
                }) : console.warn("reportError: message is required") : console.warn("reportError: invalid error type")
            }
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
        mnh2: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => i
            });
            var n = r("DTvD"),
                o = r.n(n),
                a = r("+Od7"),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = function(r) {
                            return o().createElement(a.t, Object.assign({}, t), o().createElement(e, Object.assign({}, r)))
                        },
                        n = t.name;
                    return n && (r.displayName = n), r
                }
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
                j2: () => P,
                qd: () => T,
                K2: () => B,
                z0: () => F,
                ik: () => C,
                w8: () => D,
                vT: () => x,
                C0: () => S,
                mt: () => k,
                $r: () => E,
                eL: () => O,
                Wu: () => j
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
                h = "#202630",
                v = "#FCD535",
                y = "#F0B90B",
                g = "#E6FFF1",
                b = "#2EBD85",
                m = "#102821",
                w = "#FEF1F2",
                A = "#F6465D",
                _ = "#35141D",
                x = {
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
                    PrimaryText: h,
                    RedGreenBgText: n,
                    EmphasizeText: "#FF693D",
                    TextOnGray: i,
                    TextOnYellow: h,
                    IconNormal: "#929AA5",
                    ToastBg: l,
                    BtnBg: v,
                    PrimaryYellow: y,
                    TextLink: "#D89F00",
                    TradeBg: a,
                    SellHover: A,
                    Sell: A,
                    TextSell: A,
                    DepthBuyBg: g,
                    BuyHover: b,
                    Buy: b,
                    TextBuy: b,
                    Error: A,
                    Success: b,
                    Vessel: o,
                    LiteBg1: n,
                    LiteBg2: o,
                    TextToast: y,
                    DepthSellBg: w,
                    SuccessBg: g,
                    TwoColorIcon: p,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                E = {
                    DepthBuyBg: w,
                    BuyHover: A,
                    Buy: A,
                    TextBuy: A,
                    DepthSellBg: g,
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
                j = {
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
                P = {
                    BasicBg: "#181E25",
                    SecondaryBg: "#191A1F",
                    Input: d,
                    InputLine: p,
                    CardBg: h,
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
                    TextOnYellow: h,
                    IconNormal: l,
                    ToastBg: l,
                    BtnBg: v,
                    PrimaryYellow: y,
                    TextLink: y,
                    TradeBg: "#0B0E11",
                    SellHover: A,
                    Sell: A,
                    TextSell: A,
                    DepthBuyBg: m,
                    BuyHover: b,
                    Buy: b,
                    TextBuy: b,
                    Error: A,
                    Success: b,
                    Vessel: d,
                    LiteBg1: n,
                    LiteBg2: o,
                    TextToast: y,
                    DepthSellBg: _,
                    SuccessBg: m,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                F = {
                    DepthBuyBg: _,
                    BuyHover: A,
                    Buy: A,
                    TextBuy: A,
                    DepthSellBg: m,
                    SellHover: b,
                    Sell: b,
                    TextSell: b
                },
                T = {
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
                B = {
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
                C = {
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
                D = {
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
                Qx: () => h,
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
                h = {
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
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o);
            const i = (0, o.createContext)({});
            const s = function(e) {
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
        hqSB: e => {
            var t = {
                    debug: {
                        on: !1,
                        out: console.log.bind(console)
                    },
                    info: {
                        on: !0,
                        out: console.log.bind(console)
                    },
                    warn: {
                        on: !0,
                        out: console.error.bind(console)
                    },
                    error: {
                        on: !0,
                        out: console.error.bind(console)
                    },
                    includeTimeDesignator: !1,
                    includeTimeZone: !1,
                    logobject: function(e, t) {
                        var r = new Date;
                        return {
                            timestamp: r.getTime(),
                            datetime: o(r),
                            level: e.toUpperCase(),
                            args: t
                        }
                    },
                    format: null,
                    callback: null
                },
                r = function(e, r) {
                    var n, o;
                    o = t[e], n = t.logobject(e, r), t.callback && t.callback(n), o.on && o.out && (t.format ? o.out.apply(null, t.format(e, r)) : o.out.apply(null, [].concat(n.datetime, n.level, r)))
                },
                n = Array.prototype.slice,
                o = function(e) {
                    var r = function(e) {
                            return e < 10 ? "0" + e : e
                        },
                        n = "number" === typeof t.fixedTimeZoneMinutes ? t.fixedTimeZoneMinutes : e.getTimezoneOffset(),
                        o = (n > 0 ? "-" : "+") + r(parseInt(Math.abs(n / 60)));
                    return o += n % 60 == 0 ? "00" : r(Math.abs(n % 60)), 0 === n && (o = "Z"), e.getFullYear() + "-" + r(e.getMonth() + 1) + "-" + r(e.getDate()) + (t.includeTimeDesignator ? "T" : " ") + +r(e.getHours()) + ":" + r(e.getMinutes()) + ":" + r(e.getSeconds()) + (t.includeTimeZone ? o : "")
                };
            e.exports = {
                debug: function() {
                    r("debug", n.call(arguments))
                },
                info: function() {
                    r("info", n.call(arguments))
                },
                warn: function() {
                    r("warn", n.call(arguments))
                },
                error: function() {
                    r("error", n.call(arguments))
                },
                level: function(e) {
                    switch ([t.debug, t.info, t.warn, t.error].forEach((function(e) {
                        e.on = !1
                    })), e) {
                        case "debug":
                            t.debug.on = !0;
                        case "info":
                            t.info.on = !0;
                        case "warn":
                            t.warn.on = !0;
                        case "error":
                            t.error.on = !0
                    }
                },
                redirect: function(e, r) {
                    t.debug.out = e, t.info.out = e, t.warn.out = r, t.error.out = r
                },
                callback: function(e) {
                    if ("function" != typeof e) throw new Error("Callback must be a function");
                    t.callback = e
                },
                config: function() {
                    return t
                }
            }
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
        "l+5M": (e, t, r) => {
            "use strict";
            var n = r("IoTw"),
                o = r("U1Ly"),
                a = r("yKRU"),
                i = r("H31q");
            e.exports = function(e, t, r) {
                if (!e || "object" !== typeof e && "function" !== typeof e) throw new a("`obj` must be an object or a function`");
                if ("string" !== typeof t && "symbol" !== typeof t) throw new a("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" !== typeof arguments[3] && null !== arguments[3]) throw new a("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" !== typeof arguments[4] && null !== arguments[4]) throw new a("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" !== typeof arguments[5] && null !== arguments[5]) throw new a("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" !== typeof arguments[6]) throw new a("`loose`, if provided, must be a boolean");
                var s = arguments.length > 3 ? arguments[3] : null,
                    c = arguments.length > 4 ? arguments[4] : null,
                    u = arguments.length > 5 ? arguments[5] : null,
                    l = arguments.length > 6 && arguments[6],
                    p = !!i && i(e, t);
                if (n) n(e, t, {
                    configurable: null === u && p ? p.configurable : !u,
                    enumerable: null === s && p ? p.enumerable : !s,
                    value: r,
                    writable: null === c && p ? p.writable : !c
                });
                else {
                    if (!l && (s || c || u)) throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                    e[t] = r
                }
            }
        },
        IoTw: (e, t, r) => {
            "use strict";
            var n = r("OoOd")("%Object.defineProperty%", !0) || !1;
            if (n) try {
                n({}, "a", {
                    value: 1
                })
            } catch (o) {
                n = !1
            }
            e.exports = n
        },
        mcRQ: e => {
            "use strict";
            e.exports = EvalError
        },
        "Zh1/": e => {
            "use strict";
            e.exports = Error
        },
        esbh: e => {
            "use strict";
            e.exports = RangeError
        },
        saOi: e => {
            "use strict";
            e.exports = ReferenceError
        },
        U1Ly: e => {
            "use strict";
            e.exports = SyntaxError
        },
        yKRU: e => {
            "use strict";
            e.exports = TypeError
        },
        yJx9: e => {
            "use strict";
            e.exports = URIError
        },
        "c+mU": e => {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, n = Object.keys(e), o = Array.isArray(t), a = 0; a < n.length; a++) {
                    var i = n[a],
                        s = e[i];
                    (o ? -1 !== t.indexOf(i) : t(i, s, e)) && (r[i] = s)
                }
                return r
            }
        },
        "8iDC": e => {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ",
                r = Array.prototype.slice,
                n = Object.prototype.toString,
                o = "[object Function]";
            e.exports = function(e) {
                var a = this;
                if ("function" !== typeof a || n.call(a) !== o) throw new TypeError(t + a);
                for (var i, s = r.call(arguments, 1), c = function() {
                        if (this instanceof i) {
                            var t = a.apply(this, s.concat(r.call(arguments)));
                            return Object(t) === t ? t : this
                        }
                        return a.apply(e, s.concat(r.call(arguments)))
                    }, u = Math.max(0, a.length - s.length), l = [], p = 0; p < u; p++) l.push("$" + p);
                if (i = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(c), a.prototype) {
                    var f = function() {};
                    f.prototype = a.prototype, i.prototype = new f, f.prototype = null
                }
                return i
            }
        },
        "5L5q": (e, t, r) => {
            "use strict";
            var n = r("8iDC");
            e.exports = Function.prototype.bind || n
        },
        OoOd: (e, t, r) => {
            "use strict";
            var n, o = r("Zh1/"),
                a = r("mcRQ"),
                i = r("esbh"),
                s = r("saOi"),
                c = r("U1Ly"),
                u = r("yKRU"),
                l = r("yJx9"),
                p = Function,
                f = function(e) {
                    try {
                        return p('"use strict"; return (' + e + ").constructor;")()
                    } catch (t) {}
                },
                d = Object.getOwnPropertyDescriptor;
            if (d) try {
                d({}, "")
            } catch (I) {
                d = null
            }
            var h = function() {
                    throw new u
                },
                v = d ? function() {
                    try {
                        return h
                    } catch (e) {
                        try {
                            return d(arguments, "callee").get
                        } catch (t) {
                            return h
                        }
                    }
                }() : h,
                y = r("V+Bs")(),
                g = r("qhv2")(),
                b = Object.getPrototypeOf || (g ? function(e) {
                    return e.__proto__
                } : null),
                m = {},
                w = "undefined" !== typeof Uint8Array && b ? b(Uint8Array) : n,
                A = {
                    __proto__: null,
                    "%AggregateError%": "undefined" === typeof AggregateError ? n : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
                    "%ArrayIteratorPrototype%": y && b ? b([][Symbol.iterator]()) : n,
                    "%AsyncFromSyncIteratorPrototype%": n,
                    "%AsyncFunction%": m,
                    "%AsyncGenerator%": m,
                    "%AsyncGeneratorFunction%": m,
                    "%AsyncIteratorPrototype%": m,
                    "%Atomics%": "undefined" === typeof Atomics ? n : Atomics,
                    "%BigInt%": "undefined" === typeof BigInt ? n : BigInt,
                    "%BigInt64Array%": "undefined" === typeof BigInt64Array ? n : BigInt64Array,
                    "%BigUint64Array%": "undefined" === typeof BigUint64Array ? n : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" === typeof DataView ? n : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": o,
                    "%eval%": eval,
                    "%EvalError%": a,
                    "%Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
                    "%Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
                    "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? n : FinalizationRegistry,
                    "%Function%": p,
                    "%GeneratorFunction%": m,
                    "%Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
                    "%Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
                    "%Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": y && b ? b(b([][Symbol.iterator]())) : n,
                    "%JSON%": "object" === typeof JSON ? JSON : n,
                    "%Map%": "undefined" === typeof Map ? n : Map,
                    "%MapIteratorPrototype%": "undefined" !== typeof Map && y && b ? b((new Map)[Symbol.iterator]()) : n,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" === typeof Promise ? n : Promise,
                    "%Proxy%": "undefined" === typeof Proxy ? n : Proxy,
                    "%RangeError%": i,
                    "%ReferenceError%": s,
                    "%Reflect%": "undefined" === typeof Reflect ? n : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" === typeof Set ? n : Set,
                    "%SetIteratorPrototype%": "undefined" !== typeof Set && y && b ? b((new Set)[Symbol.iterator]()) : n,
                    "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": y && b ? b("" [Symbol.iterator]()) : n,
                    "%Symbol%": y ? Symbol : n,
                    "%SyntaxError%": c,
                    "%ThrowTypeError%": v,
                    "%TypedArray%": w,
                    "%TypeError%": u,
                    "%Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
                    "%Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
                    "%URIError%": l,
                    "%WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
                    "%WeakRef%": "undefined" === typeof WeakRef ? n : WeakRef,
                    "%WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet
                };
            if (b) try {
                null.error
            } catch (I) {
                var _ = b(b(I));
                A["%Error.prototype%"] = _
            }
            var x = function e(t) {
                    var r;
                    if ("%AsyncFunction%" === t) r = f("async function () {}");
                    else if ("%GeneratorFunction%" === t) r = f("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t) r = f("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                        var n = e("%AsyncGeneratorFunction%");
                        n && (r = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === t) {
                        var o = e("%AsyncGenerator%");
                        o && b && (r = b(o.prototype))
                    }
                    return A[t] = r, r
                },
                E = {
                    __proto__: null,
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                S = r("w4nz"),
                k = r("0N/6"),
                O = S.call(Function.call, Array.prototype.concat),
                j = S.call(Function.apply, Array.prototype.splice),
                P = S.call(Function.call, String.prototype.replace),
                F = S.call(Function.call, String.prototype.slice),
                T = S.call(Function.call, RegExp.prototype.exec),
                B = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                C = /\\(\\)?/g,
                D = function(e) {
                    var t = F(e, 0, 1),
                        r = F(e, -1);
                    if ("%" === t && "%" !== r) throw new c("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return P(e, B, (function(e, t, r, o) {
                        n[n.length] = r ? P(o, C, "$1") : t || e
                    })), n
                },
                R = function(e, t) {
                    var r, n = e;
                    if (k(E, n) && (n = "%" + (r = E[n])[0] + "%"), k(A, n)) {
                        var o = A[n];
                        if (o === m && (o = x(n)), "undefined" === typeof o && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: n,
                            value: o
                        }
                    }
                    throw new c("intrinsic " + e + " does not exist!")
                };
            e.exports = function(e, t) {
                if ("string" !== typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" !== typeof t) throw new u('"allowMissing" argument must be a boolean');
                if (null === T(/^%?[^%]*%?$/, e)) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var r = D(e),
                    n = r.length > 0 ? r[0] : "",
                    o = R("%" + n + "%", t),
                    a = o.name,
                    i = o.value,
                    s = !1,
                    l = o.alias;
                l && (n = l[0], j(r, O([0, 1], l)));
                for (var p = 1, f = !0; p < r.length; p += 1) {
                    var h = r[p],
                        v = F(h, 0, 1),
                        y = F(h, -1);
                    if (('"' === v || "'" === v || "`" === v || '"' === y || "'" === y || "`" === y) && v !== y) throw new c("property names with quotes must have matching quotes");
                    if ("constructor" !== h && f || (s = !0), k(A, a = "%" + (n += "." + h) + "%")) i = A[a];
                    else if (null != i) {
                        if (!(h in i)) {
                            if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (d && p + 1 >= r.length) {
                            var g = d(i, h);
                            i = (f = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : i[h]
                        } else f = k(i, h), i = i[h];
                        f && !s && (A[a] = i)
                    }
                }
                return i
            }
        },
        ltvd: e => {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ",
                r = Object.prototype.toString,
                n = Math.max,
                o = "[object Function]",
                a = function(e, t) {
                    for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
                    for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
                    return r
                },
                i = function(e, t) {
                    for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
                    return r
                },
                s = function(e, t) {
                    for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += t);
                    return r
                };
            e.exports = function(e) {
                var c = this;
                if ("function" !== typeof c || r.apply(c) !== o) throw new TypeError(t + c);
                for (var u, l = i(arguments, 1), p = function() {
                        if (this instanceof u) {
                            var t = c.apply(this, a(l, arguments));
                            return Object(t) === t ? t : this
                        }
                        return c.apply(e, a(l, arguments))
                    }, f = n(0, c.length - l.length), d = [], h = 0; h < f; h++) d[h] = "$" + h;
                if (u = Function("binder", "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }")(p), c.prototype) {
                    var v = function() {};
                    v.prototype = c.prototype, u.prototype = new v, v.prototype = null
                }
                return u
            }
        },
        w4nz: (e, t, r) => {
            "use strict";
            var n = r("ltvd");
            e.exports = Function.prototype.bind || n
        },
        qhv2: e => {
            "use strict";
            var t = {
                    foo: {}
                },
                r = Object;
            e.exports = function() {
                return {
                    __proto__: t
                }.foo === t.foo && !({
                        __proto__: null
                    }
                    instanceof r)
            }
        },
        H31q: (e, t, r) => {
            "use strict";
            var n = r("6mX0")("%Object.getOwnPropertyDescriptor%", !0);
            if (n) try {
                n([], "length")
            } catch (o) {
                n = null
            }
            e.exports = n
        },
        "6mX0": (e, t, r) => {
            "use strict";
            var n, o = SyntaxError,
                a = Function,
                i = TypeError,
                s = function(e) {
                    try {
                        return a('"use strict"; return (' + e + ").constructor;")()
                    } catch (t) {}
                },
                c = Object.getOwnPropertyDescriptor;
            if (c) try {
                c({}, "")
            } catch (F) {
                c = null
            }
            var u = function() {
                    throw new i
                },
                l = c ? function() {
                    try {
                        return u
                    } catch (e) {
                        try {
                            return c(arguments, "callee").get
                        } catch (t) {
                            return u
                        }
                    }
                }() : u,
                p = r("V+Bs")(),
                f = Object.getPrototypeOf || function(e) {
                    return e.__proto__
                },
                d = {},
                h = "undefined" === typeof Uint8Array ? n : f(Uint8Array),
                v = {
                    "%AggregateError%": "undefined" === typeof AggregateError ? n : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
                    "%ArrayIteratorPrototype%": p ? f([][Symbol.iterator]()) : n,
                    "%AsyncFromSyncIteratorPrototype%": n,
                    "%AsyncFunction%": d,
                    "%AsyncGenerator%": d,
                    "%AsyncGeneratorFunction%": d,
                    "%AsyncIteratorPrototype%": d,
                    "%Atomics%": "undefined" === typeof Atomics ? n : Atomics,
                    "%BigInt%": "undefined" === typeof BigInt ? n : BigInt,
                    "%BigInt64Array%": "undefined" === typeof BigInt64Array ? n : BigInt64Array,
                    "%BigUint64Array%": "undefined" === typeof BigUint64Array ? n : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" === typeof DataView ? n : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
                    "%Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
                    "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? n : FinalizationRegistry,
                    "%Function%": a,
                    "%GeneratorFunction%": d,
                    "%Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
                    "%Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
                    "%Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": p ? f(f([][Symbol.iterator]())) : n,
                    "%JSON%": "object" === typeof JSON ? JSON : n,
                    "%Map%": "undefined" === typeof Map ? n : Map,
                    "%MapIteratorPrototype%": "undefined" !== typeof Map && p ? f((new Map)[Symbol.iterator]()) : n,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" === typeof Promise ? n : Promise,
                    "%Proxy%": "undefined" === typeof Proxy ? n : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" === typeof Reflect ? n : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" === typeof Set ? n : Set,
                    "%SetIteratorPrototype%": "undefined" !== typeof Set && p ? f((new Set)[Symbol.iterator]()) : n,
                    "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": p ? f("" [Symbol.iterator]()) : n,
                    "%Symbol%": p ? Symbol : n,
                    "%SyntaxError%": o,
                    "%ThrowTypeError%": l,
                    "%TypedArray%": h,
                    "%TypeError%": i,
                    "%Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
                    "%Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
                    "%WeakRef%": "undefined" === typeof WeakRef ? n : WeakRef,
                    "%WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet
                };
            try {
                null.error
            } catch (F) {
                var y = f(f(F));
                v["%Error.prototype%"] = y
            }
            var g = function e(t) {
                    var r;
                    if ("%AsyncFunction%" === t) r = s("async function () {}");
                    else if ("%GeneratorFunction%" === t) r = s("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t) r = s("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                        var n = e("%AsyncGeneratorFunction%");
                        n && (r = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === t) {
                        var o = e("%AsyncGenerator%");
                        o && (r = f(o.prototype))
                    }
                    return v[t] = r, r
                },
                b = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                m = r("5L5q"),
                w = r("wSS7"),
                A = m.call(Function.call, Array.prototype.concat),
                _ = m.call(Function.apply, Array.prototype.splice),
                x = m.call(Function.call, String.prototype.replace),
                E = m.call(Function.call, String.prototype.slice),
                S = m.call(Function.call, RegExp.prototype.exec),
                k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                O = /\\(\\)?/g,
                j = function(e) {
                    var t = E(e, 0, 1),
                        r = E(e, -1);
                    if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return x(e, k, (function(e, t, r, o) {
                        n[n.length] = r ? x(o, O, "$1") : t || e
                    })), n
                },
                P = function(e, t) {
                    var r, n = e;
                    if (w(b, n) && (n = "%" + (r = b[n])[0] + "%"), w(v, n)) {
                        var a = v[n];
                        if (a === d && (a = g(n)), "undefined" === typeof a && !t) throw new i("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: n,
                            value: a
                        }
                    }
                    throw new o("intrinsic " + e + " does not exist!")
                };
            e.exports = function(e, t) {
                if ("string" !== typeof e || 0 === e.length) throw new i("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" !== typeof t) throw new i('"allowMissing" argument must be a boolean');
                if (null === S(/^%?[^%]*%?$/, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var r = j(e),
                    n = r.length > 0 ? r[0] : "",
                    a = P("%" + n + "%", t),
                    s = a.name,
                    u = a.value,
                    l = !1,
                    p = a.alias;
                p && (n = p[0], _(r, A([0, 1], p)));
                for (var f = 1, d = !0; f < r.length; f += 1) {
                    var h = r[f],
                        y = E(h, 0, 1),
                        g = E(h, -1);
                    if (('"' === y || "'" === y || "`" === y || '"' === g || "'" === g || "`" === g) && y !== g) throw new o("property names with quotes must have matching quotes");
                    if ("constructor" !== h && d || (l = !0), w(v, s = "%" + (n += "." + h) + "%")) u = v[s];
                    else if (null != u) {
                        if (!(h in u)) {
                            if (!t) throw new i("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (c && f + 1 >= r.length) {
                            var b = c(u, h);
                            u = (d = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : u[h]
                        } else d = w(u, h), u = u[h];
                        d && !l && (v[s] = u)
                    }
                }
                return u
            }
        },
        "V+Bs": (e, t, r) => {
            "use strict";
            var n = "undefined" !== typeof Symbol && Symbol,
                o = r("48gJ");
            e.exports = function() {
                return "function" === typeof n && ("function" === typeof Symbol && ("symbol" === typeof n("foo") && ("symbol" === typeof Symbol("bar") && o())))
            }
        },
        "48gJ": e => {
            "use strict";
            e.exports = function() {
                if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" === typeof Symbol.iterator) return !0;
                var e = {},
                    t = Symbol("test"),
                    r = Object(t);
                if ("string" === typeof t) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                for (t in e[t] = 42, e) return !1;
                if ("function" === typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                var n = Object.getOwnPropertySymbols(e);
                if (1 !== n.length || n[0] !== t) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                if ("function" === typeof Object.getOwnPropertyDescriptor) {
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (42 !== o.value || !0 !== o.enumerable) return !1
                }
                return !0
            }
        },
        wSS7: (e, t, r) => {
            "use strict";
            var n = r("5L5q");
            e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
        },
        "0N/6": (e, t, r) => {
            "use strict";
            var n = Function.prototype.call,
                o = Object.prototype.hasOwnProperty,
                a = r("BHEL");
            e.exports = a.call(n, o)
        },
        nD4j: e => {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ",
                r = Object.prototype.toString,
                n = Math.max,
                o = "[object Function]",
                a = function(e, t) {
                    for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
                    for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
                    return r
                },
                i = function(e, t) {
                    for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
                    return r
                },
                s = function(e, t) {
                    for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += t);
                    return r
                };
            e.exports = function(e) {
                var c = this;
                if ("function" !== typeof c || r.apply(c) !== o) throw new TypeError(t + c);
                for (var u, l = i(arguments, 1), p = function() {
                        if (this instanceof u) {
                            var t = c.apply(this, a(l, arguments));
                            return Object(t) === t ? t : this
                        }
                        return c.apply(e, a(l, arguments))
                    }, f = n(0, c.length - l.length), d = [], h = 0; h < f; h++) d[h] = "$" + h;
                if (u = Function("binder", "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }")(p), c.prototype) {
                    var v = function() {};
                    v.prototype = c.prototype, u.prototype = new v, v.prototype = null
                }
                return u
            }
        },
        BHEL: (e, t, r) => {
            "use strict";
            var n = r("nD4j");
            e.exports = Function.prototype.bind || n
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
                h = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (h) {
                        var o = d(r);
                        o && o !== h && e(t, o, n)
                    }
                    var i = l(r);
                    p && (i = i.concat(p(r)));
                    for (var s = c(t), v = c(r), y = 0; y < i.length; ++y) {
                        var g = i[y];
                        if (!a[g] && (!n || !n[g]) && (!v || !v[g]) && (!s || !s[g])) {
                            var b = f(r, g);
                            try {
                                u(t, g, b)
                            } catch (m) {}
                        }
                    }
                }
                return t
            }
        },
        Kzjd: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => V
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
                h = function() {
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

            function y(e) {
                return null == e ? "" : "" + e
            }

            function g(e, t, r) {
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

            function m(e, t, r) {
                var n = b(e, t, Object);
                n.obj[n.k] = r
            }

            function w(e, t) {
                var r = b(e, t),
                    n = r.obj,
                    o = r.k;
                if (n) return n[o]
            }

            function A(e, t, r) {
                var n = w(e, r);
                return void 0 !== n ? n : w(t, r)
            }

            function _(e, t, r) {
                for (var n in t) "__proto__" !== n && "constructor" !== n && (n in e ? "string" === typeof e[n] || e[n] instanceof String || "string" === typeof t[n] || t[n] instanceof String ? r && (e[n] = t[n]) : _(e[n], t[n], r) : e[n] = t[n]);
                return e
            }

            function x(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var E = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function S(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return E[e]
                })) : e
            }
            var k = window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                O = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return (0, i.A)(this, t), r = (0, c.A)(this, (0, u.A)(t).call(this)), k && h.call((0, l.A)(r)), r.data = e || {}, r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r
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
                            return r && "string" !== typeof r && (a = a.concat(r)), r && "string" === typeof r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split(".")), w(this.data, a)
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
                            r && (i = i.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (n = t, t = (i = e.split("."))[1]), this.addNamespaces(t), m(this.data, i, n), o.silent || this.emit("added", e, t, r, n)
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
                            var c = w(this.data, s) || {};
                            n ? _(c, r, o) : c = a({}, c, r), m(this.data, s, c), i.silent || this.emit("added", e, t, r)
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
                }(h),
                j = {
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
                P = {},
                F = function(e) {
                    function t(e) {
                        var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, i.A)(this, t), r = (0, c.A)(this, (0, u.A)(t).call(this)), k && h.call((0, l.A)(r)), g(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0, l.A)(r)), r.options = n, void 0 === r.options.keySeparator && (r.options.keySeparator = "."), r.logger = d.create("translator"), r
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
                            var h = this.resolve(e, t),
                                v = h && h.res,
                                y = h && h.usedKey || c,
                                g = h && h.exactUsedKey || c,
                                b = Object.prototype.toString.apply(v),
                                m = ["[object Number]", "[object Function]", "[object RegExp]"],
                                w = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                                A = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                _ = "string" !== typeof v && "boolean" !== typeof v && "number" !== typeof v;
                            if (A && v && _ && m.indexOf(b) < 0 && ("string" !== typeof w || "[object Array]" !== b)) {
                                if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, v, t) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                                if (i) {
                                    var x = "[object Array]" === b,
                                        E = x ? [] : {},
                                        S = x ? g : y;
                                    for (var k in v)
                                        if (Object.prototype.hasOwnProperty.call(v, k)) {
                                            var O = "".concat(S).concat(i).concat(k);
                                            E[k] = this.translate(O, a({}, t, {
                                                joinArrays: !1,
                                                ns: u
                                            })), E[k] === O && (E[k] = v[k])
                                        }
                                    v = E
                                }
                            } else if (A && "string" === typeof w && "[object Array]" === b)(v = v.join(w)) && (v = this.extendTranslation(v, e, t, r));
                            else {
                                var j = !1,
                                    P = !1;
                                if (!this.isValidLookup(v) && void 0 !== t.defaultValue) {
                                    if (j = !0, void 0 !== t.count) {
                                        var F = this.pluralResolver.getSuffix(p, t.count);
                                        v = t["defaultValue".concat(F)]
                                    }
                                    v || (v = t.defaultValue)
                                }
                                this.isValidLookup(v) || (P = !0, v = c);
                                var T = t.defaultValue && t.defaultValue !== v && this.options.updateMissing;
                                if (P || j || T) {
                                    if (this.logger.log(T ? "updateKey" : "missingKey", p, l, c, T ? t.defaultValue : v), i) {
                                        var B = this.resolve(c, a({}, t, {
                                            keySeparator: !1
                                        }));
                                        B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var C = [],
                                        D = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && D && D[0])
                                        for (var R = 0; R < D.length; R++) C.push(D[R]);
                                    else "all" === this.options.saveMissingTo ? C = this.languageUtils.toResolveHierarchy(t.lng || this.language) : C.push(t.lng || this.language);
                                    var I = function(e, r) {
                                        o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, r, T ? t.defaultValue : v, T, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, r, T ? t.defaultValue : v, T, t), o.emit("missingKey", e, l, r, v)
                                    };
                                    if (this.options.saveMissing) {
                                        var N = void 0 !== t.count && "string" !== typeof t.count;
                                        this.options.saveMissingPlurals && N ? C.forEach((function(e) {
                                            o.pluralResolver.getPluralFormsOfKey(e, c).forEach((function(t) {
                                                return I([e], t)
                                            }))
                                        })) : I(C, c)
                                    }
                                }
                                v = this.extendTranslation(v, e, t, h, r), P && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(l, ":").concat(c)), P && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
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
                            return void 0 !== e && null !== e && d && d.length && !1 !== r.applyPostProcessor && (e = j.handle(d, e, t, this.options && this.options.postProcessPassResolved ? a({
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
                                        i.isValidLookup(t) || (a = e, !P["".concat(d[0], "-").concat(e)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(a) && (P["".concat(d[0], "-").concat(e)] = !0, i.logger.warn('key "'.concat(r, '" for languages "').concat(d.join(", "), '" won\'t get resolved as namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), d.forEach((function(r) {
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
                }(h);

            function T(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var B = function() {
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
                                })) : 2 === r.length ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = T(r[1].toLowerCase()))) : 3 === r.length && (r[0] = r[0].toLowerCase(), 2 === r[1].length && (r[1] = r[1].toUpperCase()), "sgn" !== r[0] && 2 === r[2].length && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = T(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = T(r[2].toLowerCase()))), r.join("-")
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
                C = [{
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
                D = {
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

            function R() {
                var e = {};
                return C.forEach((function(t) {
                    t.lngs.forEach((function(r) {
                        e[r] = {
                            numbers: t.nr,
                            plurals: D[t.fc]
                        }
                    }))
                })), e
            }
            var I = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, i.A)(this, e), this.languageUtils = t, this.options = r, this.logger = d.create("pluralResolver"), this.rules = R()
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
                N = function() {
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
                            this.escape = void 0 !== t.escape ? t.escape : S, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("), this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
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
                                    var o = A(t, c, e);
                                    return s.alwaysFormat ? s.format(o, void 0, r) : o
                                }
                                var a = e.split(s.formatSeparator),
                                    i = a.shift().trim(),
                                    u = a.join(s.formatSeparator).trim();
                                return s.format(A(t, c, i), u, r, n)
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
                                    else "string" === typeof a || s.useRawValueToEscape || (a = y(a));
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
                                "string" !== typeof n && (n = y(n)), n || (this.logger.warn("missed to resolve ".concat(r[1], " for nesting ").concat(e)), n = ""), l && (n = u.reduce((function(e, t) {
                                    return o.format(e, t, i.lng, i)
                                }), n.trim())), e = e.replace(r[0], n), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();
            var L = function(e) {
                function t(e, r, n) {
                    var o, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (0, i.A)(this, t), o = (0, c.A)(this, (0, u.A)(t).call(this)), k && h.call((0, l.A)(o)), o.backend = e, o.store = r, o.services = n, o.languageUtils = n.languageUtils, o.options = a, o.logger = d.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(n, a.backend, a), o
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
            }(h);

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

            function M() {}
            const V = new(function(e) {
                function t() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    if ((0, i.A)(this, t), e = (0, c.A)(this, (0, u.A)(t).call(this)), k && h.call((0, l.A)(e)), e.options = H(r), e.services = {}, e.logger = d, e.modules = {
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
                        if ("function" === typeof t && (r = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = a({}, U(), this.options, H(t)), this.format = this.options.interpolation.format, r || (r = M), !this.options.isClone) {
                            this.modules.logger ? d.init(n(this.modules.logger), this.options) : d.init(null, this.options);
                            var o = new B(this.options);
                            this.store = new O(this.options.resources, this.options);
                            var i = this.services;
                            i.logger = d, i.resourceStore = this.store, i.languageUtils = o, i.pluralResolver = new I(o, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), i.interpolator = new N(this.options), i.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, i.backendConnector = new L(n(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                e.emit.apply(e, [t].concat(n))
                            })), this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = n(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new F(this.services, this.options), this.translator.on("*", (function(t) {
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
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
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
                        return e || (e = this.languages), t || (t = this.options.ns), r || (r = M), this.services.backendConnector.reload(e, t, (function(e) {
                            n.resolve(), r(e)
                        })), n
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && j.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
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
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                            o = a({}, this.options, r, {
                                isClone: !0
                            }),
                            i = new t(o),
                            s = ["store", "services", "language"];
                        return s.forEach((function(t) {
                            i[t] = e[t]
                        })), i.services = a({}, this.services), i.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i.translator = new F(i.services, i.options), i.translator.on("*", (function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            i.emit.apply(i, [e].concat(r))
                        })), i.init(o, n), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                        }, i
                    }
                }]), t
            }(h))
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
                h = function() {
                    var e = /[^.]+$/.exec(d && d.keys && d.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                v = p.toString,
                y = f.hasOwnProperty,
                g = f.toString,
                b = RegExp("^" + v.call(y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                m = l.splice,
                w = j(u, "Map"),
                A = j(Object, "create");

            function _(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

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

            function S(e, t) {
                for (var r, n, o = e.length; o--;)
                    if ((r = e[o][0]) === (n = t) || r !== r && n !== n) return o;
                return -1
            }

            function k(e) {
                if (!F(e) || (t = e, h && h in t)) return !1;
                var t, r = function(e) {
                    var t = F(e) ? g.call(e) : "";
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

            function j(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return k(r) ? r : void 0
            }

            function P(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        a = r.cache;
                    if (a.has(o)) return a.get(o);
                    var i = e.apply(this, n);
                    return r.cache = a.set(o, i), i
                };
                return r.cache = new(P.Cache || E), r
            }

            function F(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            _.prototype.clear = function() {
                this.__data__ = A ? A(null) : {}
            }, _.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, _.prototype.get = function(e) {
                var t = this.__data__;
                if (A) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return y.call(t, e) ? t[e] : void 0
            }, _.prototype.has = function(e) {
                var t = this.__data__;
                return A ? void 0 !== t[e] : y.call(t, e)
            }, _.prototype.set = function(e, t) {
                return this.__data__[e] = A && void 0 === t ? n : t, this
            }, x.prototype.clear = function() {
                this.__data__ = []
            }, x.prototype.delete = function(e) {
                var t = this.__data__,
                    r = S(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : m.call(t, r, 1), !0)
            }, x.prototype.get = function(e) {
                var t = this.__data__,
                    r = S(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, x.prototype.has = function(e) {
                return S(this.__data__, e) > -1
            }, x.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = S(r, e);
                return n < 0 ? r.push([e, t]) : r[n][1] = t, this
            }, E.prototype.clear = function() {
                this.__data__ = {
                    hash: new _,
                    map: new(w || x),
                    string: new _
                }
            }, E.prototype.delete = function(e) {
                return O(this, e).delete(e)
            }, E.prototype.get = function(e) {
                return O(this, e).get(e)
            }, E.prototype.has = function(e) {
                return O(this, e).has(e)
            }, E.prototype.set = function(e, t) {
                return O(this, e).set(e, t), this
            }, P.Cache = E, e.exports = P
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

            function h() {}
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new d(e, t)), 1 !== c.length || u || i(f)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, n.removeAllListeners = h, n.emit = h, n.prependListener = h, n.prependOnceListener = h, n.listeners = function(e) {
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
        cYYr: e => {
            "use strict";
            var t = String.prototype.replace,
                r = /%20/g,
                n = "RFC1738",
                o = "RFC3986";
            e.exports = {
                default: o,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, r, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n,
                RFC3986: o
            }
        },
        pu3o: (e, t, r) => {
            "use strict";
            var n = r("SYP+"),
                o = r("w7lK"),
                a = r("cYYr");
            e.exports = {
                formats: a,
                parse: o,
                stringify: n
            }
        },
        w7lK: (e, t, r) => {
            "use strict";
            var n = r("V/Lb"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: n.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                s = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(parseInt(t, 10))
                    }))
                },
                c = function(e, t) {
                    return e && "string" === typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                u = function(e, t, r, n) {
                    if (e) {
                        var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            i = /(\[[^[\]]*])/g,
                            s = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
                            u = s ? a.slice(0, s.index) : a,
                            l = [];
                        if (u) {
                            if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                            l.push(u)
                        }
                        for (var p = 0; r.depth > 0 && null !== (s = i.exec(a)) && p < r.depth;) {
                            if (p += 1, !r.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
                            l.push(s[1])
                        }
                        return s && l.push("[" + a.slice(s.index) + "]"),
                            function(e, t, r, n) {
                                for (var o = n ? t : c(t, r), a = e.length - 1; a >= 0; --a) {
                                    var i, s = e[a];
                                    if ("[]" === s && r.parseArrays) i = [].concat(o);
                                    else {
                                        i = r.plainObjects ? Object.create(null) : {};
                                        var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                                            l = parseInt(u, 10);
                                        r.parseArrays || "" !== u ? !isNaN(l) && s !== u && String(l) === u && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (i = [])[l] = o : i[u] = o : i = {
                                            0: o
                                        }
                                    }
                                    o = i
                                }
                                return o
                            }(l, t, r, n)
                    }
                };
            e.exports = function(e, t) {
                var r = function(e) {
                    if (!e) return i;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = "undefined" === typeof e.charset ? i.charset : e.charset;
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? i.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : i.comma,
                        decoder: "function" === typeof e.decoder ? e.decoder : i.decoder,
                        delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : i.plainObjects,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
                    }
                }(t);
                if ("" === e || null === e || "undefined" === typeof e) return r.plainObjects ? Object.create(null) : {};
                for (var l = "string" === typeof e ? function(e, t) {
                        var r, u = {},
                            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                            f = l.split(t.delimiter, p),
                            d = -1,
                            h = t.charset;
                        if (t.charsetSentinel)
                            for (r = 0; r < f.length; ++r) 0 === f[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[r] ? h = "utf-8" : "utf8=%26%2310003%3B" === f[r] && (h = "iso-8859-1"), d = r, r = f.length);
                        for (r = 0; r < f.length; ++r)
                            if (r !== d) {
                                var v, y, g = f[r],
                                    b = g.indexOf("]="),
                                    m = -1 === b ? g.indexOf("=") : b + 1; - 1 === m ? (v = t.decoder(g, i.decoder, h, "key"), y = t.strictNullHandling ? null : "") : (v = t.decoder(g.slice(0, m), i.decoder, h, "key"), y = n.maybeMap(c(g.slice(m + 1), t), (function(e) {
                                    return t.decoder(e, i.decoder, h, "value")
                                }))), y && t.interpretNumericEntities && "iso-8859-1" === h && (y = s(y)), g.indexOf("[]=") > -1 && (y = a(y) ? [y] : y), o.call(u, v) ? u[v] = n.combine(u[v], y) : u[v] = y
                            }
                        return u
                    }(e, r) : e, p = r.plainObjects ? Object.create(null) : {}, f = Object.keys(l), d = 0; d < f.length; ++d) {
                    var h = f[d],
                        v = u(h, l[h], r, "string" === typeof e);
                    p = n.merge(p, v, r)
                }
                return n.compact(p)
            }
        },
        "SYP+": (e, t, r) => {
            "use strict";
            var n = r("V/Lb"),
                o = r("cYYr"),
                a = Object.prototype.hasOwnProperty,
                i = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, t) {
                        return e + "[" + t + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                s = Array.isArray,
                c = Array.prototype.push,
                u = function(e, t) {
                    c.apply(e, s(t) ? t : [t])
                },
                l = Date.prototype.toISOString,
                p = o.default,
                f = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: n.encode,
                    encodeValuesOnly: !1,
                    format: p,
                    formatter: o.formatters[p],
                    indices: !1,
                    serializeDate: function(e) {
                        return l.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                d = function e(t, r, o, a, i, c, l, p, d, h, v, y, g, b) {
                    var m, w = t;
                    if ("function" === typeof l ? w = l(r, w) : w instanceof Date ? w = h(w) : "comma" === o && s(w) && (w = n.maybeMap(w, (function(e) {
                            return e instanceof Date ? h(e) : e
                        }))), null === w) {
                        if (a) return c && !g ? c(r, f.encoder, b, "key", v) : r;
                        w = ""
                    }
                    if ("string" === typeof(m = w) || "number" === typeof m || "boolean" === typeof m || "symbol" === typeof m || "bigint" === typeof m || n.isBuffer(w)) return c ? [y(g ? r : c(r, f.encoder, b, "key", v)) + "=" + y(c(w, f.encoder, b, "value", v))] : [y(r) + "=" + y(String(w))];
                    var A, _ = [];
                    if ("undefined" === typeof w) return _;
                    if ("comma" === o && s(w)) A = [{
                        value: w.length > 0 ? w.join(",") || null : void 0
                    }];
                    else if (s(l)) A = l;
                    else {
                        var x = Object.keys(w);
                        A = p ? x.sort(p) : x
                    }
                    for (var E = 0; E < A.length; ++E) {
                        var S = A[E],
                            k = "object" === typeof S && void 0 !== S.value ? S.value : w[S];
                        if (!i || null !== k) {
                            var O = s(w) ? "function" === typeof o ? o(r, S) : r : r + (d ? "." + S : "[" + S + "]");
                            u(_, e(k, O, o, a, i, c, l, p, d, h, v, y, g, b))
                        }
                    }
                    return _
                };
            e.exports = function(e, t) {
                var r, n = e,
                    c = function(e) {
                        if (!e) return f;
                        if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var t = e.charset || f.charset;
                        if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = o.default;
                        if ("undefined" !== typeof e.format) {
                            if (!a.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            r = e.format
                        }
                        var n = o.formatters[r],
                            i = f.filter;
                        return ("function" === typeof e.filter || s(e.filter)) && (i = e.filter), {
                            addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
                            allowDots: "undefined" === typeof e.allowDots ? f.allowDots : !!e.allowDots,
                            charset: t,
                            charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
                            delimiter: "undefined" === typeof e.delimiter ? f.delimiter : e.delimiter,
                            encode: "boolean" === typeof e.encode ? e.encode : f.encode,
                            encoder: "function" === typeof e.encoder ? e.encoder : f.encoder,
                            encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
                            filter: i,
                            format: r,
                            formatter: n,
                            serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : f.serializeDate,
                            skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : f.skipNulls,
                            sort: "function" === typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
                        }
                    }(t);
                "function" === typeof c.filter ? n = (0, c.filter)("", n) : s(c.filter) && (r = c.filter);
                var l, p = [];
                if ("object" !== typeof n || null === n) return "";
                l = t && t.arrayFormat in i ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
                var h = i[l];
                r || (r = Object.keys(n)), c.sort && r.sort(c.sort);
                for (var v = 0; v < r.length; ++v) {
                    var y = r[v];
                    c.skipNulls && null === n[y] || u(p, d(n[y], y, h, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset))
                }
                var g = p.join(c.delimiter),
                    b = !0 === c.addQueryPrefix ? "?" : "";
                return c.charsetSentinel && ("iso-8859-1" === c.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), g.length > 0 ? b + g : ""
            }
        },
        "V/Lb": (e, t, r) => {
            "use strict";
            var n = r("cYYr"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                s = function(e, t) {
                    for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) "undefined" !== typeof e[n] && (r[n] = e[n]);
                    return r
                };
            e.exports = {
                arrayToObject: s,
                assign: function(e, t) {
                    return Object.keys(t).reduce((function(e, r) {
                        return e[r] = t[r], e
                    }), e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], r = [], n = 0; n < t.length; ++n)
                        for (var o = t[n], i = o.obj[o.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
                            var u = s[c],
                                l = i[u];
                            "object" === typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                                obj: i,
                                prop: u
                            }), r.push(l))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var t = e.pop(),
                                r = t.obj[t.prop];
                            if (a(r)) {
                                for (var n = [], o = 0; o < r.length; ++o) "undefined" !== typeof r[o] && n.push(r[o]);
                                t.obj[t.prop] = n
                            }
                        }
                    }(t), e
                },
                decode: function(e, t, r) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (o) {
                        return n
                    }
                },
                encode: function(e, t, r, o, a) {
                    if (0 === e.length) return e;
                    var s = e;
                    if ("symbol" === typeof e ? s = Symbol.prototype.toString.call(e) : "string" !== typeof e && (s = String(e)), "iso-8859-1" === r) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var c = "", u = 0; u < s.length; ++u) {
                        var l = s.charCodeAt(u);
                        45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || a === n.RFC1738 && (40 === l || 41 === l) ? c += s.charAt(u) : l < 128 ? c += i[l] : l < 2048 ? c += i[192 | l >> 6] + i[128 | 63 & l] : l < 55296 || l >= 57344 ? c += i[224 | l >> 12] + i[128 | l >> 6 & 63] + i[128 | 63 & l] : (u += 1, l = 65536 + ((1023 & l) << 10 | 1023 & s.charCodeAt(u)), c += i[240 | l >> 18] + i[128 | l >> 12 & 63] + i[128 | l >> 6 & 63] + i[128 | 63 & l])
                    }
                    return c
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (a(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r
                    }
                    return t(e)
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" !== typeof r) {
                        if (a(t)) t.push(r);
                        else {
                            if (!t || "object" !== typeof t) return [t, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if (!t || "object" !== typeof t) return [t].concat(r);
                    var i = t;
                    return a(t) && !a(r) && (i = s(t, n)), a(t) && a(r) ? (r.forEach((function(r, a) {
                        if (o.call(t, a)) {
                            var i = t[a];
                            i && "object" === typeof i && r && "object" === typeof r ? t[a] = e(i, r, n) : t.push(r)
                        } else t[a] = r
                    })), t) : Object.keys(r).reduce((function(t, a) {
                        var i = r[a];
                        return o.call(t, a) ? t[a] = e(t[a], i, n) : t[a] = i, t
                    }), i)
                }
            }
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
                h = r ? Symbol.for("react.suspense_list") : 60120,
                v = r ? Symbol.for("react.memo") : 60115,
                y = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                b = r ? Symbol.for("react.fundamental") : 60117,
                m = r ? Symbol.for("react.responder") : 60118,
                w = r ? Symbol.for("react.scope") : 60119;

            function A(e) {
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
                                        case y:
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

            function _(e) {
                return A(e) === p
            }
            t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = y, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = i, t.Suspense = d, t.isAsyncMode = function(e) {
                return _(e) || A(e) === l
            }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
                return A(e) === u
            }, t.isContextProvider = function(e) {
                return A(e) === c
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return A(e) === f
            }, t.isFragment = function(e) {
                return A(e) === a
            }, t.isLazy = function(e) {
                return A(e) === y
            }, t.isMemo = function(e) {
                return A(e) === v
            }, t.isPortal = function(e) {
                return A(e) === o
            }, t.isProfiler = function(e) {
                return A(e) === s
            }, t.isStrictMode = function(e) {
                return A(e) === i
            }, t.isSuspense = function(e) {
                return A(e) === d
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === a || e === p || e === s || e === i || e === d || e === h || "object" === typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === b || e.$$typeof === m || e.$$typeof === w || e.$$typeof === g)
            }, t.typeOf = A
        },
        kvVz: (e, t, r) => {
            "use strict";
            e.exports = r("hTPx")
        },
        "7gL/": (e, t, r) => {
            "use strict";
            var n = r("OoOd"),
                o = r("l+5M"),
                a = r("02x8")(),
                i = r("H31q"),
                s = r("yKRU"),
                c = n("%Math.floor%");
            e.exports = function(e, t) {
                if ("function" !== typeof e) throw new s("`fn` is not a function");
                if ("number" !== typeof t || t < 0 || t > 4294967295 || c(t) !== t) throw new s("`length` must be a positive 32-bit integer");
                var r = arguments.length > 2 && !!arguments[2],
                    n = !0,
                    u = !0;
                if ("length" in e && i) {
                    var l = i(e, "length");
                    l && !l.configurable && (n = !1), l && !l.writable && (u = !1)
                }
                return (n || u || !r) && (a ? o(e, "length", t, !0, !0) : o(e, "length", t)), e
            }
        },
        "02x8": (e, t, r) => {
            "use strict";
            var n = r("IoTw"),
                o = function() {
                    return !!n
                };
            o.hasArrayLengthDefineBug = function() {
                if (!n) return null;
                try {
                    return 1 !== n([], "length", {
                        value: 1
                    }).length
                } catch (e) {
                    return !0
                }
            }, e.exports = o
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
        "3as9": (e, t, r) => {
            var n;
            ! function(o, a) {
                "use strict";
                var i = "function",
                    s = "undefined",
                    c = "object",
                    u = "string",
                    l = "model",
                    p = "name",
                    f = "type",
                    d = "vendor",
                    h = "version",
                    v = "architecture",
                    y = "console",
                    g = "mobile",
                    b = "tablet",
                    m = "smarttv",
                    w = "wearable",
                    A = "embedded",
                    _ = {
                        extend: function(e, t) {
                            var r = {};
                            for (var n in e) t[n] && t[n].length % 2 === 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                            return r
                        },
                        has: function(e, t) {
                            return typeof e === u && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : a
                        },
                        trim: function(e, t) {
                            return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === s ? e : e.substring(0, 255)
                        }
                    },
                    x = {
                        rgx: function(e, t) {
                            for (var r, n, o, s, u, l, p = 0; p < t.length && !u;) {
                                var f = t[p],
                                    d = t[p + 1];
                                for (r = n = 0; r < f.length && !u;)
                                    if (u = f[r++].exec(e))
                                        for (o = 0; o < d.length; o++) l = u[++n], typeof(s = d[o]) === c && s.length > 0 ? 2 == s.length ? typeof s[1] == i ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== i || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : a : this[s[0]] = l ? s[1].call(this, l, s[2]) : a : 4 == s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : a) : this[s] = l || a;
                                p += 2
                            }
                        },
                        str: function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === c && t[r].length > 0) {
                                    for (var n = 0; n < t[r].length; n++)
                                        if (_.has(t[r][n], e)) return "?" === r ? a : r
                                } else if (_.has(t[r], e)) return "?" === r ? a : r;
                            return e
                        }
                    },
                    E = {
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
                    S = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [h, [p, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [h, [p, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [p, h],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [h, [p, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [h, [p, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [p, h],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [h, [p, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [h, [p, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [h, [p, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [h, [p, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [h, [p, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [h, [p, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1 Secure Browser"], h
                            ],
                            [/focus\/([\w\.]+)/i],
                            [h, [p, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [h, [p, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [h, [p, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [h, [p, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [h, [p, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [h, [p, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [h, [p, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [p, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1 Browser"], h
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [p, /_/g, " "], h
                            ],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [p, h],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [p],
                            [/;fbav\/([\w\.]+);/i],
                            [h, [p, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [p, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [p, h],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [h, [p, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [h, [p, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [p, "Chrome WebView"], h
                            ],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [h, [p, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [p, h],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [h, [p, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [h, p],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [p, [h, x.str, E.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [p, h],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [p, "Netscape"], h
                            ],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [h, [p, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [p, h]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [v, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [v, _.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [v, "ia32"]
                            ],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [
                                [v, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [v, "armhf"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [v, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [v, /ower/, "", _.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [v, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [v, _.lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [l, [d, "Samsung"],
                                [f, b]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [l, [d, "Samsung"],
                                [f, g]
                            ],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [l, [d, "Apple"],
                                [f, g]
                            ],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [d, "Apple"],
                                [f, b]
                            ],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [l, [d, "Huawei"],
                                [f, b]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [l, [d, "Huawei"],
                                [f, g]
                            ],
                            [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [l, /_/g, " "],
                                [d, "Xiaomi"],
                                [f, g]
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [l, /_/g, " "],
                                [d, "Xiaomi"],
                                [f, b]
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [l, [d, "OPPO"],
                                [f, g]
                            ],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [l, [d, "Vivo"],
                                [f, g]
                            ],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [l, [d, "Realme"],
                                [f, g]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [l, [d, "Motorola"],
                                [f, g]
                            ],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [l, [d, "Motorola"],
                                [f, b]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [l, [d, "LG"],
                                [f, b]
                            ],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [l, [d, "LG"],
                                [f, g]
                            ],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [l, [d, "Lenovo"],
                                [f, b]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [l, /_/g, " "],
                                [d, "Nokia"],
                                [f, g]
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [l, [d, "Google"],
                                [f, b]
                            ],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [l, [d, "Google"],
                                [f, g]
                            ],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [d, "Sony"],
                                [f, g]
                            ],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [d, "Sony"],
                                [f, b]
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [l, [d, "OnePlus"],
                                [f, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [l, [d, "Amazon"],
                                [f, b]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [l, "Fire Phone"],
                                [d, "Amazon"],
                                [f, g]
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [l, d, [f, b]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [l, [d, "BlackBerry"],
                                [f, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [l, [d, "ASUS"],
                                [f, b]
                            ],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [l, [d, "ASUS"],
                                [f, g]
                            ],
                            [/(nexus\s9)/i],
                            [l, [d, "HTC"],
                                [f, b]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [d, [l, /_/g, " "],
                                [f, g]
                            ],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [l, [d, "Acer"],
                                [f, b]
                            ],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [l, [d, "Meizu"],
                                [f, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [d, l, [f, g]],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                            [d, l, [f, b]],
                            [/\s(surface\sduo)\s/i],
                            [l, [d, "Microsoft"],
                                [f, b]
                            ],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [l, [d, "Fairphone"],
                                [f, g]
                            ],
                            [/\s(u304aa)\sbuild/i],
                            [l, [d, "AT&T"],
                                [f, g]
                            ],
                            [/sie-(\w*)/i],
                            [l, [d, "Siemens"],
                                [f, g]
                            ],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [l, [d, "RCA"],
                                [f, b]
                            ],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [l, [d, "Dell"],
                                [f, b]
                            ],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [l, [d, "Verizon"],
                                [f, b]
                            ],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [l, [d, "Barnes & Noble"],
                                [f, b]
                            ],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [l, [d, "NuVision"],
                                [f, b]
                            ],
                            [/;\s(k88)\sbuild/i],
                            [l, [d, "ZTE"],
                                [f, b]
                            ],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [l, [d, "ZTE"],
                                [f, g]
                            ],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [l, [d, "Swiss"],
                                [f, g]
                            ],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [l, [d, "Swiss"],
                                [f, b]
                            ],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [l, [d, "Zeki"],
                                [f, b]
                            ],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [
                                [d, "Dragon Touch"], l, [f, b]
                            ],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [l, [d, "Insignia"],
                                [f, b]
                            ],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [l, [d, "NextBook"],
                                [f, b]
                            ],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [
                                [d, "Voice"], l, [f, g]
                            ],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [
                                [d, "LvTel"], l, [f, g]
                            ],
                            [/;\s(ph-1)\s/i],
                            [l, [d, "Essential"],
                                [f, g]
                            ],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [l, [d, "Envizen"],
                                [f, b]
                            ],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [l, [d, "MachSpeed"],
                                [f, b]
                            ],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [l, [d, "Rotor"],
                                [f, b]
                            ],
                            [/(shield[\w\s]+)\sbuild/i],
                            [l, [d, "Nvidia"],
                                [f, b]
                            ],
                            [/(sprint)\s(\w+)/i],
                            [d, l, [f, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [d, "Microsoft"],
                                [f, g]
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [d, "Zebra"],
                                [f, b]
                            ],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [d, "Zebra"],
                                [f, g]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [d, l, [f, y]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [l, [d, "Nvidia"],
                                [f, y]
                            ],
                            [/(playstation\s[345portablevi]+)/i],
                            [l, [d, "Sony"],
                                [f, y]
                            ],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [l, [d, "Microsoft"],
                                [f, y]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [d, [f, m]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [d, "Samsung"],
                                [f, m]
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [d, "LG"],
                                [f, m]
                            ],
                            [/(apple)\s?tv/i],
                            [d, [l, "Apple TV"],
                                [f, m]
                            ],
                            [/crkey/i],
                            [
                                [l, "Chromecast"],
                                [d, "Google"],
                                [f, m]
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [l, [d, "Amazon"],
                                [f, m]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [l, [d, "Sharp"],
                                [f, m]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [d, _.trim],
                                [l, _.trim],
                                [f, m]
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [
                                [f, m]
                            ],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [d, l, [f, w]],
                            [/droid.+;\s(glass)\s\d/i],
                            [l, [d, "Google"],
                                [f, w]
                            ],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [l, [d, "Zebra"],
                                [f, w]
                            ],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [d, [f, A]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [l, [f, g]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [l, [f, b]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [f, _.lowerize]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [l, [d, "Generic"]],
                            [/(phone)/i],
                            [
                                [f, g]
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [h, [p, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [h, [p, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [p, h],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [h, p]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [p, h],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [p, [h, x.str, E.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [p, "Windows"],
                                [h, x.str, E.os.windows.version]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [h, /_/g, "."],
                                [p, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [p, "Mac OS"],
                                [h, /_/g, "."]
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [p, h],
                            [/\(bb(10);/i],
                            [h, [p, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [h, [p, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [p, "Firefox OS"]
                            ],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [h, [p, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [h, [p, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [p, "Chromium OS"], h
                            ],
                            [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                            [p, h],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [p, "Solaris"], h
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [p, h]
                        ]
                    },
                    k = function(e, t) {
                        if ("object" === typeof e && (t = e, e = a), !(this instanceof k)) return new k(e, t).getResult();
                        var r = e || ("undefined" !== typeof o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                            n = t ? _.extend(S, t) : S;
                        return this.getBrowser = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, r, n.browser), e.major = _.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: a
                            };
                            return x.rgx.call(e, r, n.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: a,
                                model: a,
                                type: a
                            };
                            return x.rgx.call(e, r, n.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, r, n.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, r, n.os), e
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
                            return r = typeof e === u && e.length > 255 ? _.trim(e, 255) : e, this
                        }, this.setUA(r), this
                    };
                k.VERSION = "0.7.28", k.BROWSER = {
                    NAME: p,
                    MAJOR: "major",
                    VERSION: h
                }, k.CPU = {
                    ARCHITECTURE: v
                }, k.DEVICE = {
                    MODEL: l,
                    VENDOR: d,
                    TYPE: f,
                    CONSOLE: y,
                    MOBILE: g,
                    SMARTTV: m,
                    TABLET: b,
                    WEARABLE: w,
                    EMBEDDED: A
                }, k.ENGINE = {
                    NAME: p,
                    VERSION: h
                }, k.OS = {
                    NAME: p,
                    VERSION: h
                }, typeof t !== s ? (e.exports && (t = e.exports = k), t.UAParser = k) : (n = function() {
                    return k
                }.call(t, r, t, e)) === a || (e.exports = n);
                var O = "undefined" !== typeof o && (o.jQuery || o.Zepto);
                if (O && !O.ua) {
                    var j = new k;
                    O.ua = j.getResult(), O.ua.get = function() {
                        return j.getUA()
                    }, O.ua.set = function(e) {
                        j.setUA(e);
                        var t = j.getResult();
                        for (var r in t) O.ua[r] = t[r]
                    }
                }
            }(window)
        },
        MAsO: (e, t, r) => {
            "use strict";
            var n = r("OoOd"),
                o = r("1DC3"),
                a = o(n("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var r = n(e, !!t);
                return "function" === typeof r && a(e, ".prototype.") > -1 ? o(r) : r
            }
        },
        "1DC3": (e, t, r) => {
            "use strict";
            var n = r("PyGZ"),
                o = r("OoOd"),
                a = r("7gL/"),
                i = r("yKRU"),
                s = o("%Function.prototype.apply%"),
                c = o("%Function.prototype.call%"),
                u = o("%Reflect.apply%", !0) || n.call(c, s),
                l = r("IoTw"),
                p = o("%Math.max%");
            e.exports = function(e) {
                if ("function" !== typeof e) throw new i("a function is required");
                var t = u(n, c, arguments);
                return a(t, 1 + p(0, e.length - (arguments.length - 1)), !0)
            };
            var f = function() {
                return u(n, s, arguments)
            };
            l ? l(e.exports, "apply", {
                value: f
            }) : e.exports.apply = f
        },
        CQMZ: e => {
            "use strict";
            var t = "Function.prototype.bind called on incompatible ",
                r = Object.prototype.toString,
                n = Math.max,
                o = "[object Function]",
                a = function(e, t) {
                    for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
                    for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
                    return r
                },
                i = function(e, t) {
                    for (var r = [], n = t || 0, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
                    return r
                },
                s = function(e, t) {
                    for (var r = "", n = 0; n < e.length; n += 1) r += e[n], n + 1 < e.length && (r += t);
                    return r
                };
            e.exports = function(e) {
                var c = this;
                if ("function" !== typeof c || r.apply(c) !== o) throw new TypeError(t + c);
                for (var u, l = i(arguments, 1), p = function() {
                        if (this instanceof u) {
                            var t = c.apply(this, a(l, arguments));
                            return Object(t) === t ? t : this
                        }
                        return c.apply(e, a(l, arguments))
                    }, f = n(0, c.length - l.length), d = [], h = 0; h < f; h++) d[h] = "$" + h;
                if (u = Function("binder", "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }")(p), c.prototype) {
                    var v = function() {};
                    v.prototype = c.prototype, u.prototype = new v, v.prototype = null
                }
                return u
            }
        },
        PyGZ: (e, t, r) => {
            "use strict";
            var n = r("CQMZ");
            e.exports = Function.prototype.bind || n
        },
        "6Msa": (e, t, r) => {
            var n = "function" === typeof Map && Map.prototype,
                o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                a = n && o && "function" === typeof o.get ? o.get : null,
                i = n && Map.prototype.forEach,
                s = "function" === typeof Set && Set.prototype,
                c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                u = s && c && "function" === typeof c.get ? c.get : null,
                l = s && Set.prototype.forEach,
                p = "function" === typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                f = "function" === typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                d = "function" === typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                h = Boolean.prototype.valueOf,
                v = Object.prototype.toString,
                y = Function.prototype.toString,
                g = String.prototype.match,
                b = String.prototype.slice,
                m = String.prototype.replace,
                w = String.prototype.toUpperCase,
                A = String.prototype.toLowerCase,
                _ = RegExp.prototype.test,
                x = Array.prototype.concat,
                E = Array.prototype.join,
                S = Array.prototype.slice,
                k = Math.floor,
                O = "function" === typeof BigInt ? BigInt.prototype.valueOf : null,
                j = Object.getOwnPropertySymbols,
                P = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? Symbol.prototype.toString : null,
                F = "function" === typeof Symbol && "object" === typeof Symbol.iterator,
                T = "function" === typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === F || "symbol") ? Symbol.toStringTag : null,
                B = Object.prototype.propertyIsEnumerable,
                C = ("function" === typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
                    return e.__proto__
                } : null);

            function D(e, t) {
                if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || _.call(/e/, t)) return t;
                var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" === typeof e) {
                    var n = e < 0 ? -k(-e) : k(e);
                    if (n !== e) {
                        var o = String(n),
                            a = b.call(t, o.length + 1);
                        return m.call(o, r, "$&_") + "." + m.call(m.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return m.call(t, r, "$&_")
            }
            var R = r("6niF"),
                I = R.custom,
                N = V(I) ? I : null;

            function L(e, t, r) {
                var n = "double" === (r.quoteStyle || t) ? '"' : "'";
                return n + e + n
            }

            function U(e) {
                return m.call(String(e), /"/g, "&quot;")
            }

            function H(e) {
                return "[object Array]" === K(e) && (!T || !("object" === typeof e && T in e))
            }

            function M(e) {
                return "[object RegExp]" === K(e) && (!T || !("object" === typeof e && T in e))
            }

            function V(e) {
                if (F) return e && "object" === typeof e && e instanceof Symbol;
                if ("symbol" === typeof e) return !0;
                if (!e || "object" !== typeof e || !P) return !1;
                try {
                    return P.call(e), !0
                } catch (t) {}
                return !1
            }
            e.exports = function e(t, n, o, s) {
                var c = n || {};
                if (W(c, "quoteStyle") && "single" !== c.quoteStyle && "double" !== c.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (W(c, "maxStringLength") && ("number" === typeof c.maxStringLength ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0 : null !== c.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var v = !W(c, "customInspect") || c.customInspect;
                if ("boolean" !== typeof v && "symbol" !== v) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (W(c, "indent") && null !== c.indent && "\t" !== c.indent && !(parseInt(c.indent, 10) === c.indent && c.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (W(c, "numericSeparator") && "boolean" !== typeof c.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var w = c.numericSeparator;
                if ("undefined" === typeof t) return "undefined";
                if (null === t) return "null";
                if ("boolean" === typeof t) return t ? "true" : "false";
                if ("string" === typeof t) return z(t, c);
                if ("number" === typeof t) {
                    if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                    var _ = String(t);
                    return w ? D(t, _) : _
                }
                if ("bigint" === typeof t) {
                    var k = String(t) + "n";
                    return w ? D(t, k) : k
                }
                var j = "undefined" === typeof c.depth ? 5 : c.depth;
                if ("undefined" === typeof o && (o = 0), o >= j && j > 0 && "object" === typeof t) return H(t) ? "[Array]" : "[Object]";
                var I = function(e, t) {
                    var r;
                    if ("\t" === e.indent) r = "\t";
                    else {
                        if (!("number" === typeof e.indent && e.indent > 0)) return null;
                        r = E.call(Array(e.indent + 1), " ")
                    }
                    return {
                        base: r,
                        prev: E.call(Array(t + 1), r)
                    }
                }(c, o);
                if ("undefined" === typeof s) s = [];
                else if (G(s, t) >= 0) return "[Circular]";

                function q(t, r, n) {
                    if (r && (s = S.call(s)).push(r), n) {
                        var a = {
                            depth: c.depth
                        };
                        return W(c, "quoteStyle") && (a.quoteStyle = c.quoteStyle), e(t, a, o + 1, s)
                    }
                    return e(t, c, o + 1, s)
                }
                if ("function" === typeof t && !M(t)) {
                    var $ = function(e) {
                            if (e.name) return e.name;
                            var t = g.call(y.call(e), /^function\s*([\w$]+)/);
                            if (t) return t[1];
                            return null
                        }(t),
                        ee = Q(t, q);
                    return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (ee.length > 0 ? " { " + E.call(ee, ", ") + " }" : "")
                }
                if (V(t)) {
                    var te = F ? m.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(t);
                    return "object" !== typeof t || F ? te : J(te)
                }
                if (function(e) {
                        if (!e || "object" !== typeof e) return !1;
                        if ("undefined" !== typeof HTMLElement && e instanceof HTMLElement) return !0;
                        return "string" === typeof e.nodeName && "function" === typeof e.getAttribute
                    }(t)) {
                    for (var re = "<" + A.call(String(t.nodeName)), ne = t.attributes || [], oe = 0; oe < ne.length; oe++) re += " " + ne[oe].name + "=" + L(U(ne[oe].value), "double", c);
                    return re += ">", t.childNodes && t.childNodes.length && (re += "..."), re += "</" + A.call(String(t.nodeName)) + ">"
                }
                if (H(t)) {
                    if (0 === t.length) return "[]";
                    var ae = Q(t, q);
                    return I && ! function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (G(e[t], "\n") >= 0) return !1;
                        return !0
                    }(ae) ? "[" + Z(ae, I) + "]" : "[ " + E.call(ae, ", ") + " ]"
                }
                if (function(e) {
                        return "[object Error]" === K(e) && (!T || !("object" === typeof e && T in e))
                    }(t)) {
                    var ie = Q(t, q);
                    return "cause" in Error.prototype || !("cause" in t) || B.call(t, "cause") ? 0 === ie.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + E.call(ie, ", ") + " }" : "{ [" + String(t) + "] " + E.call(x.call("[cause]: " + q(t.cause), ie), ", ") + " }"
                }
                if ("object" === typeof t && v) {
                    if (N && "function" === typeof t[N] && R) return R(t, {
                        depth: j - o
                    });
                    if ("symbol" !== v && "function" === typeof t.inspect) return t.inspect()
                }
                if (function(e) {
                        if (!a || !e || "object" !== typeof e) return !1;
                        try {
                            a.call(e);
                            try {
                                u.call(e)
                            } catch (re) {
                                return !0
                            }
                            return e instanceof Map
                        } catch (t) {}
                        return !1
                    }(t)) {
                    var se = [];
                    return i && i.call(t, (function(e, r) {
                        se.push(q(r, t, !0) + " => " + q(e, t))
                    })), X("Map", a.call(t), se, I)
                }
                if (function(e) {
                        if (!u || !e || "object" !== typeof e) return !1;
                        try {
                            u.call(e);
                            try {
                                a.call(e)
                            } catch (t) {
                                return !0
                            }
                            return e instanceof Set
                        } catch (r) {}
                        return !1
                    }(t)) {
                    var ce = [];
                    return l && l.call(t, (function(e) {
                        ce.push(q(e, t))
                    })), X("Set", u.call(t), ce, I)
                }
                if (function(e) {
                        if (!p || !e || "object" !== typeof e) return !1;
                        try {
                            p.call(e, p);
                            try {
                                f.call(e, f)
                            } catch (re) {
                                return !0
                            }
                            return e instanceof WeakMap
                        } catch (t) {}
                        return !1
                    }(t)) return Y("WeakMap");
                if (function(e) {
                        if (!f || !e || "object" !== typeof e) return !1;
                        try {
                            f.call(e, f);
                            try {
                                p.call(e, p)
                            } catch (re) {
                                return !0
                            }
                            return e instanceof WeakSet
                        } catch (t) {}
                        return !1
                    }(t)) return Y("WeakSet");
                if (function(e) {
                        if (!d || !e || "object" !== typeof e) return !1;
                        try {
                            return d.call(e), !0
                        } catch (t) {}
                        return !1
                    }(t)) return Y("WeakRef");
                if (function(e) {
                        return "[object Number]" === K(e) && (!T || !("object" === typeof e && T in e))
                    }(t)) return J(q(Number(t)));
                if (function(e) {
                        if (!e || "object" !== typeof e || !O) return !1;
                        try {
                            return O.call(e), !0
                        } catch (t) {}
                        return !1
                    }(t)) return J(q(O.call(t)));
                if (function(e) {
                        return "[object Boolean]" === K(e) && (!T || !("object" === typeof e && T in e))
                    }(t)) return J(h.call(t));
                if (function(e) {
                        return "[object String]" === K(e) && (!T || !("object" === typeof e && T in e))
                    }(t)) return J(q(String(t)));
                if (t === window) return "{ [object Window] }";
                if (t === r.g) return "{ [object globalThis] }";
                if (! function(e) {
                        return "[object Date]" === K(e) && (!T || !("object" === typeof e && T in e))
                    }(t) && !M(t)) {
                    var ue = Q(t, q),
                        le = C ? C(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                        pe = t instanceof Object ? "" : "null prototype",
                        fe = !le && T && Object(t) === t && T in t ? b.call(K(t), 8, -1) : pe ? "Object" : "",
                        de = (le || "function" !== typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (fe || pe ? "[" + E.call(x.call([], fe || [], pe || []), ": ") + "] " : "");
                    return 0 === ue.length ? de + "{}" : I ? de + "{" + Z(ue, I) + "}" : de + "{ " + E.call(ue, ", ") + " }"
                }
                return String(t)
            };
            var q = Object.prototype.hasOwnProperty || function(e) {
                return e in this
            };

            function W(e, t) {
                return q.call(e, t)
            }

            function K(e) {
                return v.call(e)
            }

            function G(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1
            }

            function z(e, t) {
                if (e.length > t.maxStringLength) {
                    var r = e.length - t.maxStringLength,
                        n = "... " + r + " more character" + (r > 1 ? "s" : "");
                    return z(b.call(e, 0, t.maxStringLength), t) + n
                }
                return L(m.call(m.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $), "single", t)
            }

            function $(e) {
                var t = e.charCodeAt(0),
                    r = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[t];
                return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16))
            }

            function J(e) {
                return "Object(" + e + ")"
            }

            function Y(e) {
                return e + " { ? }"
            }

            function X(e, t, r, n) {
                return e + " (" + t + ") {" + (n ? Z(r, n) : E.call(r, ", ")) + "}"
            }

            function Z(e, t) {
                if (0 === e.length) return "";
                var r = "\n" + t.prev + t.base;
                return r + E.call(e, "," + r) + "\n" + t.prev
            }

            function Q(e, t) {
                var r = H(e),
                    n = [];
                if (r) {
                    n.length = e.length;
                    for (var o = 0; o < e.length; o++) n[o] = W(e, o) ? t(e[o], e) : ""
                }
                var a, i = "function" === typeof j ? j(e) : [];
                if (F) {
                    a = {};
                    for (var s = 0; s < i.length; s++) a["$" + i[s]] = i[s]
                }
                for (var c in e) W(e, c) && (r && String(Number(c)) === c && c < e.length || F && a["$" + c] instanceof Symbol || (_.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
                if ("function" === typeof j)
                    for (var u = 0; u < i.length; u++) B.call(e, i[u]) && n.push("[" + t(i[u]) + "]: " + t(e[i[u]], e));
                return n
            }
        },
        Orqh: function(e, t, r) {
            var n;
            e = r.nmd(e),
                function(o) {
                    t && t.nodeType, e && e.nodeType;
                    var a = "object" == typeof r.g && r.g;
                    a.global !== a && a.window !== a && a.self;
                    var i, s = 2147483647,
                        c = 36,
                        u = /^xn--/,
                        l = /[^\x20-\x7E]/,
                        p = /[\x2E\u3002\uFF0E\uFF61]/g,
                        f = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        d = Math.floor,
                        h = String.fromCharCode;

                    function v(e) {
                        throw new RangeError(f[e])
                    }

                    function y(e, t) {
                        for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                        return n
                    }

                    function g(e, t) {
                        var r = e.split("@"),
                            n = "";
                        return r.length > 1 && (n = r[0] + "@", e = r[1]), n + y((e = e.replace(p, ".")).split("."), t).join(".")
                    }

                    function b(e) {
                        for (var t, r, n = [], o = 0, a = e.length; o < a;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), o--) : n.push(t);
                        return n
                    }

                    function m(e) {
                        return y(e, (function(e) {
                            var t = "";
                            return e > 65535 && (t += h((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += h(e)
                        })).join("")
                    }

                    function w(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    }

                    function A(e, t, r) {
                        var n = 0;
                        for (e = r ? d(e / 700) : e >> 1, e += d(e / t); e > 455; n += c) e = d(e / 35);
                        return d(n + 36 * e / (e + 38))
                    }

                    function _(e) {
                        var t, r, n, o, a, i, u, l, p, f, h, y = [],
                            g = e.length,
                            b = 0,
                            w = 128,
                            _ = 72;
                        for ((r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && v("not-basic"), y.push(e.charCodeAt(n));
                        for (o = r > 0 ? r + 1 : 0; o < g;) {
                            for (a = b, i = 1, u = c; o >= g && v("invalid-input"), ((l = (h = e.charCodeAt(o++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : c) >= c || l > d((s - b) / i)) && v("overflow"), b += l * i, !(l < (p = u <= _ ? 1 : u >= _ + 26 ? 26 : u - _)); u += c) i > d(s / (f = c - p)) && v("overflow"), i *= f;
                            _ = A(b - a, t = y.length + 1, 0 == a), d(b / t) > s - w && v("overflow"), w += d(b / t), b %= t, y.splice(b++, 0, w)
                        }
                        return m(y)
                    }

                    function x(e) {
                        var t, r, n, o, a, i, u, l, p, f, y, g, m, _, x, E = [];
                        for (g = (e = b(e)).length, t = 128, r = 0, a = 72, i = 0; i < g; ++i)(y = e[i]) < 128 && E.push(h(y));
                        for (n = o = E.length, o && E.push("-"); n < g;) {
                            for (u = s, i = 0; i < g; ++i)(y = e[i]) >= t && y < u && (u = y);
                            for (u - t > d((s - r) / (m = n + 1)) && v("overflow"), r += (u - t) * m, t = u, i = 0; i < g; ++i)
                                if ((y = e[i]) < t && ++r > s && v("overflow"), y == t) {
                                    for (l = r, p = c; !(l < (f = p <= a ? 1 : p >= a + 26 ? 26 : p - a)); p += c) x = l - f, _ = c - f, E.push(h(w(f + x % _, 0))), l = d(x / _);
                                    E.push(h(w(l, 0))), a = A(r, m, n == o), r = 0, ++n
                                }++r, ++t
                        }
                        return E.join("")
                    }
                    i = {
                        version: "1.4.1",
                        ucs2: {
                            decode: b,
                            encode: m
                        },
                        decode: _,
                        encode: x,
                        toASCII: function(e) {
                            return g(e, (function(e) {
                                return l.test(e) ? "xn--" + x(e) : e
                            }))
                        },
                        toUnicode: function(e) {
                            return g(e, (function(e) {
                                return u.test(e) ? _(e.slice(4).toLowerCase()) : e
                            }))
                        }
                    }, void 0 === (n = function() {
                        return i
                    }.call(t, r, t, e)) || (e.exports = n)
                }()
        },
        "XU3/": e => {
            "use strict";
            var t = String.prototype.replace,
                r = /%20/g,
                n = "RFC1738",
                o = "RFC3986";
            e.exports = {
                default: o,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, r, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n,
                RFC3986: o
            }
        },
        aVuD: (e, t, r) => {
            "use strict";
            var n = r("6aK1"),
                o = r("DvS5"),
                a = r("XU3/");
            e.exports = {
                formats: a,
                parse: o,
                stringify: n
            }
        },
        DvS5: (e, t, r) => {
            "use strict";
            var n = r("igcM"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = {
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decodeDotInKeys: !1,
                    decoder: n.decode,
                    delimiter: "&",
                    depth: 5,
                    duplicates: "combine",
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                s = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(parseInt(t, 10))
                    }))
                },
                c = function(e, t) {
                    return e && "string" === typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                u = function(e, t, r, n) {
                    if (e) {
                        var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            i = /(\[[^[\]]*])/g,
                            s = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
                            u = s ? a.slice(0, s.index) : a,
                            l = [];
                        if (u) {
                            if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                            l.push(u)
                        }
                        for (var p = 0; r.depth > 0 && null !== (s = i.exec(a)) && p < r.depth;) {
                            if (p += 1, !r.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
                            l.push(s[1])
                        }
                        return s && l.push("[" + a.slice(s.index) + "]"),
                            function(e, t, r, n) {
                                for (var o = n ? t : c(t, r), a = e.length - 1; a >= 0; --a) {
                                    var i, s = e[a];
                                    if ("[]" === s && r.parseArrays) i = r.allowEmptyArrays && "" === o ? [] : [].concat(o);
                                    else {
                                        i = r.plainObjects ? Object.create(null) : {};
                                        var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                                            l = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u,
                                            p = parseInt(l, 10);
                                        r.parseArrays || "" !== l ? !isNaN(p) && s !== l && String(p) === l && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (i = [])[p] = o : "__proto__" !== l && (i[l] = o) : i = {
                                            0: o
                                        }
                                    }
                                    o = i
                                }
                                return o
                            }(l, t, r, n)
                    }
                };
            e.exports = function(e, t) {
                var r = function(e) {
                    if (!e) return i;
                    if ("undefined" !== typeof e.allowEmptyArrays && "boolean" !== typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if ("undefined" !== typeof e.decodeDotInKeys && "boolean" !== typeof e.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== e.decoder && "undefined" !== typeof e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = "undefined" === typeof e.charset ? i.charset : e.charset,
                        r = "undefined" === typeof e.duplicates ? i.duplicates : e.duplicates;
                    if ("combine" !== r && "first" !== r && "last" !== r) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? !0 === e.decodeDotInKeys || i.allowDots : !!e.allowDots,
                        allowEmptyArrays: "boolean" === typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : i.allowEmptyArrays,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
                        allowSparse: "boolean" === typeof e.allowSparse ? e.allowSparse : i.allowSparse,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : i.comma,
                        decodeDotInKeys: "boolean" === typeof e.decodeDotInKeys ? e.decodeDotInKeys : i.decodeDotInKeys,
                        decoder: "function" === typeof e.decoder ? e.decoder : i.decoder,
                        delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
                        duplicates: r,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : i.plainObjects,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
                    }
                }(t);
                if ("" === e || null === e || "undefined" === typeof e) return r.plainObjects ? Object.create(null) : {};
                for (var l = "string" === typeof e ? function(e, t) {
                        var r, u = {
                                __proto__: null
                            },
                            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                            f = l.split(t.delimiter, p),
                            d = -1,
                            h = t.charset;
                        if (t.charsetSentinel)
                            for (r = 0; r < f.length; ++r) 0 === f[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[r] ? h = "utf-8" : "utf8=%26%2310003%3B" === f[r] && (h = "iso-8859-1"), d = r, r = f.length);
                        for (r = 0; r < f.length; ++r)
                            if (r !== d) {
                                var v, y, g = f[r],
                                    b = g.indexOf("]="),
                                    m = -1 === b ? g.indexOf("=") : b + 1; - 1 === m ? (v = t.decoder(g, i.decoder, h, "key"), y = t.strictNullHandling ? null : "") : (v = t.decoder(g.slice(0, m), i.decoder, h, "key"), y = n.maybeMap(c(g.slice(m + 1), t), (function(e) {
                                    return t.decoder(e, i.decoder, h, "value")
                                }))), y && t.interpretNumericEntities && "iso-8859-1" === h && (y = s(y)), g.indexOf("[]=") > -1 && (y = a(y) ? [y] : y);
                                var w = o.call(u, v);
                                w && "combine" === t.duplicates ? u[v] = n.combine(u[v], y) : w && "last" !== t.duplicates || (u[v] = y)
                            }
                        return u
                    }(e, r) : e, p = r.plainObjects ? Object.create(null) : {}, f = Object.keys(l), d = 0; d < f.length; ++d) {
                    var h = f[d],
                        v = u(h, l[h], r, "string" === typeof e);
                    p = n.merge(p, v, r)
                }
                return !0 === r.allowSparse ? p : n.compact(p)
            }
        },
        "6aK1": (e, t, r) => {
            "use strict";
            var n = r("mkwK"),
                o = r("igcM"),
                a = r("XU3/"),
                i = Object.prototype.hasOwnProperty,
                s = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, t) {
                        return e + "[" + t + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                c = Array.isArray,
                u = Array.prototype.push,
                l = function(e, t) {
                    u.apply(e, c(t) ? t : [t])
                },
                p = Date.prototype.toISOString,
                f = a.default,
                d = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    arrayFormat: "indices",
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encodeDotInKeys: !1,
                    encoder: o.encode,
                    encodeValuesOnly: !1,
                    format: f,
                    formatter: a.formatters[f],
                    indices: !1,
                    serializeDate: function(e) {
                        return p.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                h = {},
                v = function e(t, r, a, i, s, u, p, f, v, y, g, b, m, w, A, _, x, E) {
                    for (var S, k = t, O = E, j = 0, P = !1; void 0 !== (O = O.get(h)) && !P;) {
                        var F = O.get(t);
                        if (j += 1, "undefined" !== typeof F) {
                            if (F === j) throw new RangeError("Cyclic object value");
                            P = !0
                        }
                        "undefined" === typeof O.get(h) && (j = 0)
                    }
                    if ("function" === typeof y ? k = y(r, k) : k instanceof Date ? k = m(k) : "comma" === a && c(k) && (k = o.maybeMap(k, (function(e) {
                            return e instanceof Date ? m(e) : e
                        }))), null === k) {
                        if (u) return v && !_ ? v(r, d.encoder, x, "key", w) : r;
                        k = ""
                    }
                    if ("string" === typeof(S = k) || "number" === typeof S || "boolean" === typeof S || "symbol" === typeof S || "bigint" === typeof S || o.isBuffer(k)) return v ? [A(_ ? r : v(r, d.encoder, x, "key", w)) + "=" + A(v(k, d.encoder, x, "value", w))] : [A(r) + "=" + A(String(k))];
                    var T, B = [];
                    if ("undefined" === typeof k) return B;
                    if ("comma" === a && c(k)) _ && v && (k = o.maybeMap(k, v)), T = [{
                        value: k.length > 0 ? k.join(",") || null : void 0
                    }];
                    else if (c(y)) T = y;
                    else {
                        var C = Object.keys(k);
                        T = g ? C.sort(g) : C
                    }
                    var D = f ? r.replace(/\./g, "%2E") : r,
                        R = i && c(k) && 1 === k.length ? D + "[]" : D;
                    if (s && c(k) && 0 === k.length) return R + "[]";
                    for (var I = 0; I < T.length; ++I) {
                        var N = T[I],
                            L = "object" === typeof N && "undefined" !== typeof N.value ? N.value : k[N];
                        if (!p || null !== L) {
                            var U = b && f ? N.replace(/\./g, "%2E") : N,
                                H = c(k) ? "function" === typeof a ? a(R, U) : R : R + (b ? "." + U : "[" + U + "]");
                            E.set(t, j);
                            var M = n();
                            M.set(h, E), l(B, e(L, H, a, i, s, u, p, f, "comma" === a && _ && c(k) ? null : v, y, g, b, m, w, A, _, x, M))
                        }
                    }
                    return B
                };
            e.exports = function(e, t) {
                var r, o = e,
                    u = function(e) {
                        if (!e) return d;
                        if ("undefined" !== typeof e.allowEmptyArrays && "boolean" !== typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                        if ("undefined" !== typeof e.encodeDotInKeys && "boolean" !== typeof e.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                        if (null !== e.encoder && "undefined" !== typeof e.encoder && "function" !== typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var t = e.charset || d.charset;
                        if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = a.default;
                        if ("undefined" !== typeof e.format) {
                            if (!i.call(a.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            r = e.format
                        }
                        var n, o = a.formatters[r],
                            u = d.filter;
                        if (("function" === typeof e.filter || c(e.filter)) && (u = e.filter), n = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : d.arrayFormat, "commaRoundTrip" in e && "boolean" !== typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                        var l = "undefined" === typeof e.allowDots ? !0 === e.encodeDotInKeys || d.allowDots : !!e.allowDots;
                        return {
                            addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
                            allowDots: l,
                            allowEmptyArrays: "boolean" === typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : d.allowEmptyArrays,
                            arrayFormat: n,
                            charset: t,
                            charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
                            commaRoundTrip: e.commaRoundTrip,
                            delimiter: "undefined" === typeof e.delimiter ? d.delimiter : e.delimiter,
                            encode: "boolean" === typeof e.encode ? e.encode : d.encode,
                            encodeDotInKeys: "boolean" === typeof e.encodeDotInKeys ? e.encodeDotInKeys : d.encodeDotInKeys,
                            encoder: "function" === typeof e.encoder ? e.encoder : d.encoder,
                            encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
                            filter: u,
                            format: r,
                            formatter: o,
                            serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : d.serializeDate,
                            skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : d.skipNulls,
                            sort: "function" === typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : d.strictNullHandling
                        }
                    }(t);
                "function" === typeof u.filter ? o = (0, u.filter)("", o) : c(u.filter) && (r = u.filter);
                var p = [];
                if ("object" !== typeof o || null === o) return "";
                var f = s[u.arrayFormat],
                    h = "comma" === f && u.commaRoundTrip;
                r || (r = Object.keys(o)), u.sort && r.sort(u.sort);
                for (var y = n(), g = 0; g < r.length; ++g) {
                    var b = r[g];
                    u.skipNulls && null === o[b] || l(p, v(o[b], b, f, h, u.allowEmptyArrays, u.strictNullHandling, u.skipNulls, u.encodeDotInKeys, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, y))
                }
                var m = p.join(u.delimiter),
                    w = !0 === u.addQueryPrefix ? "?" : "";
                return u.charsetSentinel && ("iso-8859-1" === u.charset ? w += "utf8=%26%2310003%3B&" : w += "utf8=%E2%9C%93&"), m.length > 0 ? w + m : ""
            }
        },
        igcM: (e, t, r) => {
            "use strict";
            var n = r("XU3/"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                s = function(e, t) {
                    for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) "undefined" !== typeof e[n] && (r[n] = e[n]);
                    return r
                },
                c = 1024;
            e.exports = {
                arrayToObject: s,
                assign: function(e, t) {
                    return Object.keys(t).reduce((function(e, r) {
                        return e[r] = t[r], e
                    }), e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], r = [], n = 0; n < t.length; ++n)
                        for (var o = t[n], i = o.obj[o.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
                            var u = s[c],
                                l = i[u];
                            "object" === typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                                obj: i,
                                prop: u
                            }), r.push(l))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var t = e.pop(),
                                r = t.obj[t.prop];
                            if (a(r)) {
                                for (var n = [], o = 0; o < r.length; ++o) "undefined" !== typeof r[o] && n.push(r[o]);
                                t.obj[t.prop] = n
                            }
                        }
                    }(t), e
                },
                decode: function(e, t, r) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (o) {
                        return n
                    }
                },
                encode: function(e, t, r, o, a) {
                    if (0 === e.length) return e;
                    var s = e;
                    if ("symbol" === typeof e ? s = Symbol.prototype.toString.call(e) : "string" !== typeof e && (s = String(e)), "iso-8859-1" === r) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var u = "", l = 0; l < s.length; l += c) {
                        for (var p = s.length >= c ? s.slice(l, l + c) : s, f = [], d = 0; d < p.length; ++d) {
                            var h = p.charCodeAt(d);
                            45 === h || 46 === h || 95 === h || 126 === h || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || a === n.RFC1738 && (40 === h || 41 === h) ? f[f.length] = p.charAt(d) : h < 128 ? f[f.length] = i[h] : h < 2048 ? f[f.length] = i[192 | h >> 6] + i[128 | 63 & h] : h < 55296 || h >= 57344 ? f[f.length] = i[224 | h >> 12] + i[128 | h >> 6 & 63] + i[128 | 63 & h] : (d += 1, h = 65536 + ((1023 & h) << 10 | 1023 & p.charCodeAt(d)), f[f.length] = i[240 | h >> 18] + i[128 | h >> 12 & 63] + i[128 | h >> 6 & 63] + i[128 | 63 & h])
                        }
                        u += f.join("")
                    }
                    return u
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (a(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r
                    }
                    return t(e)
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" !== typeof r) {
                        if (a(t)) t.push(r);
                        else {
                            if (!t || "object" !== typeof t) return [t, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if (!t || "object" !== typeof t) return [t].concat(r);
                    var i = t;
                    return a(t) && !a(r) && (i = s(t, n)), a(t) && a(r) ? (r.forEach((function(r, a) {
                        if (o.call(t, a)) {
                            var i = t[a];
                            i && "object" === typeof i && r && "object" === typeof r ? t[a] = e(i, r, n) : t.push(r)
                        } else t[a] = r
                    })), t) : Object.keys(r).reduce((function(t, a) {
                        var i = r[a];
                        return o.call(t, a) ? t[a] = e(t[a], i, n) : t[a] = i, t
                    }), i)
                }
            }
        },
        mkwK: (e, t, r) => {
            "use strict";
            var n = r("OoOd"),
                o = r("MAsO"),
                a = r("6Msa"),
                i = r("yKRU"),
                s = n("%WeakMap%", !0),
                c = n("%Map%", !0),
                u = o("WeakMap.prototype.get", !0),
                l = o("WeakMap.prototype.set", !0),
                p = o("WeakMap.prototype.has", !0),
                f = o("Map.prototype.get", !0),
                d = o("Map.prototype.set", !0),
                h = o("Map.prototype.has", !0),
                v = function(e, t) {
                    for (var r, n = e; null !== (r = n.next); n = r)
                        if (r.key === t) return n.next = r.next, r.next = e.next, e.next = r, r
                };
            e.exports = function() {
                var e, t, r, n = {
                    assert: function(e) {
                        if (!n.has(e)) throw new i("Side channel does not contain " + a(e))
                    },
                    get: function(n) {
                        if (s && n && ("object" === typeof n || "function" === typeof n)) {
                            if (e) return u(e, n)
                        } else if (c) {
                            if (t) return f(t, n)
                        } else if (r) return function(e, t) {
                            var r = v(e, t);
                            return r && r.value
                        }(r, n)
                    },
                    has: function(n) {
                        if (s && n && ("object" === typeof n || "function" === typeof n)) {
                            if (e) return p(e, n)
                        } else if (c) {
                            if (t) return h(t, n)
                        } else if (r) return function(e, t) {
                            return !!v(e, t)
                        }(r, n);
                        return !1
                    },
                    set: function(n, o) {
                        s && n && ("object" === typeof n || "function" === typeof n) ? (e || (e = new s), l(e, n, o)) : c ? (t || (t = new c), d(t, n, o)) : (r || (r = {
                            key: {},
                            next: null
                        }), function(e, t, r) {
                            var n = v(e, t);
                            n ? n.value = r : e.next = {
                                key: t,
                                next: e.next,
                                value: r
                            }
                        }(r, n, o))
                    }
                };
                return n
            }
        },
        EfWO: (e, t, r) => {
            "use strict";
            var n = r("Orqh");

            function o() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            var a = /^([a-z0-9.+-]+:)/i,
                i = /:[0-9]*$/,
                s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
                c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                u = ["'"].concat(c),
                l = ["%", "/", "?", ";", "#"].concat(u),
                p = ["/", "?", "#"],
                f = /^[+a-z0-9A-Z_-]{0,63}$/,
                d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                h = {
                    javascript: !0,
                    "javascript:": !0
                },
                v = {
                    javascript: !0,
                    "javascript:": !0
                },
                y = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                g = r("aVuD");

            function b(e, t, r) {
                if (e && "object" === typeof e && e instanceof o) return e;
                var n = new o;
                return n.parse(e, t, r), n
            }
            o.prototype.parse = function(e, t, r) {
                if ("string" !== typeof e) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var o = e.indexOf("?"),
                    i = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                    c = e.split(i);
                c[0] = c[0].replace(/\\/g, "/");
                var b = e = c.join(i);
                if (b = b.trim(), !r && 1 === e.split("#").length) {
                    var m = s.exec(b);
                    if (m) return this.path = b, this.href = b, this.pathname = m[1], m[2] ? (this.search = m[2], this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                }
                var w = a.exec(b);
                if (w) {
                    var A = (w = w[0]).toLowerCase();
                    this.protocol = A, b = b.substr(w.length)
                }
                if (r || w || b.match(/^\/\/[^@/]+@[^@/]+/)) {
                    var _ = "//" === b.substr(0, 2);
                    !_ || w && v[w] || (b = b.substr(2), this.slashes = !0)
                }
                if (!v[w] && (_ || w && !y[w])) {
                    for (var x, E, S = -1, k = 0; k < p.length; k++) {
                        -1 !== (O = b.indexOf(p[k])) && (-1 === S || O < S) && (S = O)
                    } - 1 !== (E = -1 === S ? b.lastIndexOf("@") : b.lastIndexOf("@", S)) && (x = b.slice(0, E), b = b.slice(E + 1), this.auth = decodeURIComponent(x)), S = -1;
                    for (k = 0; k < l.length; k++) {
                        var O; - 1 !== (O = b.indexOf(l[k])) && (-1 === S || O < S) && (S = O)
                    } - 1 === S && (S = b.length), this.host = b.slice(0, S), b = b.slice(S), this.parseHost(), this.hostname = this.hostname || "";
                    var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!j)
                        for (var P = this.hostname.split(/\./), F = (k = 0, P.length); k < F; k++) {
                            var T = P[k];
                            if (T && !T.match(f)) {
                                for (var B = "", C = 0, D = T.length; C < D; C++) T.charCodeAt(C) > 127 ? B += "x" : B += T[C];
                                if (!B.match(f)) {
                                    var R = P.slice(0, k),
                                        I = P.slice(k + 1),
                                        N = T.match(d);
                                    N && (R.push(N[1]), I.unshift(N[2])), I.length && (b = "/" + I.join(".") + b), this.hostname = R.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), j || (this.hostname = n.toASCII(this.hostname));
                    var L = this.port ? ":" + this.port : "",
                        U = this.hostname || "";
                    this.host = U + L, this.href += this.host, j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
                }
                if (!h[A])
                    for (k = 0, F = u.length; k < F; k++) {
                        var H = u[k];
                        if (-1 !== b.indexOf(H)) {
                            var M = encodeURIComponent(H);
                            M === H && (M = escape(H)), b = b.split(H).join(M)
                        }
                    }
                var V = b.indexOf("#"); - 1 !== V && (this.hash = b.substr(V), b = b.slice(0, V));
                var q = b.indexOf("?");
                if (-1 !== q ? (this.search = b.substr(q), this.query = b.substr(q + 1), t && (this.query = g.parse(this.query)), b = b.slice(0, q)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), y[A] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    L = this.pathname || "";
                    var W = this.search || "";
                    this.path = L + W
                }
                return this.href = this.format(), this
            }, o.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    r = this.pathname || "",
                    n = this.hash || "",
                    o = !1,
                    a = "";
                this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && "object" === typeof this.query && Object.keys(this.query).length && (a = g.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: !1
                }));
                var i = this.search || a && "?" + a || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), i && "?" !== i.charAt(0) && (i = "?" + i), t + o + (r = r.replace(/[?#]/g, (function(e) {
                    return encodeURIComponent(e)
                }))) + (i = i.replace("#", "%23")) + n
            }, o.prototype.resolve = function(e) {
                return this.resolveObject(b(e, !1, !0)).format()
            }, o.prototype.resolveObject = function(e) {
                if ("string" === typeof e) {
                    var t = new o;
                    t.parse(e, !1, !0), e = t
                }
                for (var r = new o, n = Object.keys(this), a = 0; a < n.length; a++) {
                    var i = n[a];
                    r[i] = this[i]
                }
                if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                if (e.slashes && !e.protocol) {
                    for (var s = Object.keys(e), c = 0; c < s.length; c++) {
                        var u = s[c];
                        "protocol" !== u && (r[u] = e[u])
                    }
                    return y[r.protocol] && r.hostname && !r.pathname && (r.pathname = "/", r.path = r.pathname), r.href = r.format(), r
                }
                if (e.protocol && e.protocol !== r.protocol) {
                    if (!y[e.protocol]) {
                        for (var l = Object.keys(e), p = 0; p < l.length; p++) {
                            var f = l[p];
                            r[f] = e[f]
                        }
                        return r.href = r.format(), r
                    }
                    if (r.protocol = e.protocol, e.host || v[e.protocol]) r.pathname = e.pathname;
                    else {
                        for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/")
                    }
                    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                        var h = r.pathname || "",
                            g = r.search || "";
                        r.path = h + g
                    }
                    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                }
                var b = r.pathname && "/" === r.pathname.charAt(0),
                    m = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    w = m || b || r.host && e.pathname,
                    A = w,
                    _ = r.pathname && r.pathname.split("/") || [],
                    x = (d = e.pathname && e.pathname.split("/") || [], r.protocol && !y[r.protocol]);
                if (x && (r.hostname = "", r.port = null, r.host && ("" === _[0] ? _[0] = r.host : _.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), w = w && ("" === d[0] || "" === _[0])), m) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, _ = d;
                else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), r.search = e.search, r.query = e.query;
                else if (null != e.search) {
                    if (x) r.host = _.shift(), r.hostname = r.host, (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.hostname = j.shift(), r.host = r.hostname);
                    return r.search = e.search, r.query = e.query, null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                }
                if (!_.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                for (var E = _.slice(-1)[0], S = (r.host || e.host || _.length > 1) && ("." === E || ".." === E) || "" === E, k = 0, O = _.length; O >= 0; O--) "." === (E = _[O]) ? _.splice(O, 1) : ".." === E ? (_.splice(O, 1), k++) : k && (_.splice(O, 1), k--);
                if (!w && !A)
                    for (; k--; k) _.unshift("..");
                !w || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), S && "/" !== _.join("/").substr(-1) && _.push("");
                var j, P = "" === _[0] || _[0] && "/" === _[0].charAt(0);
                x && (r.hostname = P ? "" : _.length ? _.shift() : "", r.host = r.hostname, (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.hostname = j.shift(), r.host = r.hostname));
                return (w = w || r.host && _.length) && !P && _.unshift(""), _.length > 0 ? r.pathname = _.join("/") : (r.pathname = null, r.path = null), null === r.pathname && null === r.search || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }, o.prototype.parseHost = function() {
                var e = this.host,
                    t = i.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        },
        DTzD: (e, t, r) => {
            "use strict";
            var n = r("DTvD");
            var o = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                a = n.useState,
                i = n.useEffect,
                s = n.useLayoutEffect,
                c = n.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !o(e, r)
                } catch (n) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = a({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    o = n[0].inst,
                    l = n[1];
                return s((function() {
                    o.value = r, o.getSnapshot = t, u(o) && l({
                        inst: o
                    })
                }), [e, r, t]), i((function() {
                    return u(o) && l({
                        inst: o
                    }), e((function() {
                        u(o) && l({
                            inst: o
                        })
                    }))
                }), [e]), c(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l
        },
        "5f2R": (e, t, r) => {
            "use strict";
            var n = r("DTvD"),
                o = r("NrPD");
            var a = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                i = o.useSyncExternalStore,
                s = n.useRef,
                c = n.useEffect,
                u = n.useMemo,
                l = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
                var p = s(null);
                if (null === p.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    p.current = f
                } else f = p.current;
                p = u((function() {
                    function e(e) {
                        if (!c) {
                            if (c = !0, i = e, e = n(e), void 0 !== o && f.hasValue) {
                                var t = f.value;
                                if (o(t, e)) return s = t
                            }
                            return s = e
                        }
                        if (t = s, a(i, e)) return t;
                        var r = n(e);
                        return void 0 !== o && o(t, r) ? t : (i = e, s = r)
                    }
                    var i, s, c = !1,
                        u = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === u ? void 0 : function() {
                        return e(u())
                    }]
                }), [t, r, n, o]);
                var d = i(e, p[0], p[1]);
                return c((function() {
                    f.hasValue = !0, f.value = d
                }), [d]), l(d), d
            }
        },
        NrPD: (e, t, r) => {
            "use strict";
            e.exports = r("DTzD")
        },
        "NuT+": (e, t, r) => {
            "use strict";
            e.exports = r("5f2R")
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
        "6niF": () => {},
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
        gtzB: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("OHGK");

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
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
        WOcg: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            const n = function() {
                this.__data__ = [], this.size = 0
            };
            var o = r("W17m");
            const a = function(e, t) {
                for (var r = e.length; r--;)
                    if ((0, o.A)(e[r][0], t)) return r;
                return -1
            };
            var i = Array.prototype.splice;
            const s = function(e) {
                var t = this.__data__,
                    r = a(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
            };
            const c = function(e) {
                var t = this.__data__,
                    r = a(t, e);
                return r < 0 ? void 0 : t[r][1]
            };
            const u = function(e) {
                return a(this.__data__, e) > -1
            };
            const l = function(e, t) {
                var r = this.__data__,
                    n = a(r, e);
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
                A: () => a
            });
            var n = r("q22z"),
                o = r("YmLP");
            const a = (0, n.A)(o.A, "Map")
        },
        jQwE: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => x
            });
            const n = (0, r("q22z").A)(Object, "create");
            const o = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            };
            const a = function(e) {
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
            p.prototype.clear = o, p.prototype.delete = a, p.prototype.get = s, p.prototype.has = u, p.prototype.set = l;
            const f = p;
            var d = r("WOcg"),
                h = r("P4hI");
            const v = function() {
                this.size = 0, this.__data__ = {
                    hash: new f,
                    map: new(h.A || d.A),
                    string: new f
                }
            };
            const y = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            };
            const g = function(e, t) {
                var r = e.__data__;
                return y(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            };
            const b = function(e) {
                var t = g(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            };
            const m = function(e) {
                return g(this, e).get(e)
            };
            const w = function(e) {
                return g(this, e).has(e)
            };
            const A = function(e, t) {
                var r = g(this, e),
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
            _.prototype.clear = v, _.prototype.delete = b, _.prototype.get = m, _.prototype.has = w, _.prototype.set = A;
            const x = _
        },
        ViwL: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("q22z"),
                o = r("YmLP");
            const a = (0, n.A)(o.A, "Set")
        },
        yV5X: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("jQwE");
            const o = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            };
            const a = function(e) {
                return this.__data__.has(e)
            };

            function i(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new n.A; ++t < r;) this.add(e[t])
            }
            i.prototype.add = i.prototype.push = o, i.prototype.has = a;
            const s = i
        },
        Ws4u: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("WOcg");
            const o = function() {
                this.__data__ = new n.A, this.size = 0
            };
            const a = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            };
            const i = function(e) {
                return this.__data__.get(e)
            };
            const s = function(e) {
                return this.__data__.has(e)
            };
            var c = r("P4hI"),
                u = r("jQwE");
            const l = function(e, t) {
                var r = this.__data__;
                if (r instanceof n.A) {
                    var o = r.__data__;
                    if (!c.A || o.length < 199) return o.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new u.A(o)
                }
                return r.set(e, t), this.size = r.size, this
            };

            function p(e) {
                var t = this.__data__ = new n.A(e);
                this.size = t.size
            }
            p.prototype.clear = o, p.prototype.delete = a, p.prototype.get = i, p.prototype.has = s, p.prototype.set = l;
            const f = p
        },
        VMO7: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = r("YmLP").A.Symbol
        },
        fbYP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = r("YmLP").A.Uint8Array
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
        M9Hd: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            const n = function(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
            };
            var o = r("J7fb"),
                a = r("jEyD"),
                i = r("ZtI3"),
                s = r("dnC1"),
                c = r("A3LJ"),
                u = Object.prototype.hasOwnProperty;
            const l = function(e, t) {
                var r = (0, a.A)(e),
                    l = !r && (0, o.A)(e),
                    p = !r && !l && (0, i.A)(e),
                    f = !r && !l && !p && (0, c.A)(e),
                    d = r || l || p || f,
                    h = d ? n(e.length, String) : [],
                    v = h.length;
                for (var y in e) !t && !u.call(e, y) || d && ("length" == y || p && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || (0, s.A)(y, v)) || h.push(y);
                return h
            }
        },
        id2I: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                return o
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
        VOg4: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("2naQ"),
                o = r("W17m"),
                a = Object.prototype.hasOwnProperty;
            const i = function(e, t, r) {
                var i = e[t];
                a.call(e, t) && (0, o.A)(i, r) && (void 0 !== r || t in e) || (0, n.A)(e, t, r)
            }
        },
        "2naQ": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("G48o");
            const o = function(e, t, r) {
                "__proto__" == t && n.A ? (0, n.A)(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r
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
        "I7B/": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                return function(t, r, n) {
                    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--;) {
                        var c = i[e ? s : ++o];
                        if (!1 === r(a[c], c, a)) break
                    }
                    return t
                }
            }()
        },
        xQ2A: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("0Bcc"),
                o = r("IX6G");
            const a = function(e, t) {
                for (var r = 0, a = (t = (0, n.A)(t, e)).length; null != e && r < a;) e = e[(0, o.A)(t[r++])];
                return r && r == a ? e : void 0
            }
        },
        "l/i2": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("cMJY"),
                o = r("jEyD");
            const a = function(e, t, r) {
                var a = t(e);
                return (0, o.A)(e) ? a : (0, n.A)(a, r(e))
            }
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
        jdNv: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => J
            });
            var n = r("Ws4u"),
                o = r("yV5X");
            const a = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            };
            var i = r("aBoh");
            const s = function(e, t, r, n, s, c) {
                var u = 1 & r,
                    l = e.length,
                    p = t.length;
                if (l != p && !(u && p > l)) return !1;
                var f = c.get(e),
                    d = c.get(t);
                if (f && d) return f == t && d == e;
                var h = -1,
                    v = !0,
                    y = 2 & r ? new o.A : void 0;
                for (c.set(e, t), c.set(t, e); ++h < l;) {
                    var g = e[h],
                        b = t[h];
                    if (n) var m = u ? n(b, g, h, t, e, c) : n(g, b, h, e, t, c);
                    if (void 0 !== m) {
                        if (m) continue;
                        v = !1;
                        break
                    }
                    if (y) {
                        if (!a(t, (function(e, t) {
                                if (!(0, i.A)(y, t) && (g === e || s(g, e, r, n, c))) return y.push(t)
                            }))) {
                            v = !1;
                            break
                        }
                    } else if (g !== b && !s(g, b, r, n, c)) {
                        v = !1;
                        break
                    }
                }
                return c.delete(e), c.delete(t), v
            };
            var c = r("VMO7"),
                u = r("fbYP"),
                l = r("W17m");
            const p = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            };
            var f = r("LqxT"),
                d = c.A ? c.A.prototype : void 0,
                h = d ? d.valueOf : void 0;
            const v = function(e, t, r, n, o, a, i) {
                switch (r) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        return !(e.byteLength != t.byteLength || !a(new u.A(e), new u.A(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return (0, l.A)(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var c = p;
                    case "[object Set]":
                        var d = 1 & n;
                        if (c || (c = f.A), e.size != t.size && !d) return !1;
                        var v = i.get(e);
                        if (v) return v == t;
                        n |= 2, i.set(e, t);
                        var y = s(c(e), c(t), n, o, a, i);
                        return i.delete(e), y;
                    case "[object Symbol]":
                        if (h) return h.call(e) == h.call(t)
                }
                return !1
            };
            var y = r("l/i2"),
                g = r("Qedb"),
                b = r("4sdf");
            const m = function(e) {
                return (0, y.A)(e, b.A, g.A)
            };
            var w = Object.prototype.hasOwnProperty;
            const A = function(e, t, r, n, o, a) {
                var i = 1 & r,
                    s = m(e),
                    c = s.length;
                if (c != m(t).length && !i) return !1;
                for (var u = c; u--;) {
                    var l = s[u];
                    if (!(i ? l in t : w.call(t, l))) return !1
                }
                var p = a.get(e),
                    f = a.get(t);
                if (p && f) return p == t && f == e;
                var d = !0;
                a.set(e, t), a.set(t, e);
                for (var h = i; ++u < c;) {
                    var v = e[l = s[u]],
                        y = t[l];
                    if (n) var g = i ? n(y, v, l, t, e, a) : n(v, y, l, e, t, a);
                    if (!(void 0 === g ? v === y || o(v, y, r, n, a) : g)) {
                        d = !1;
                        break
                    }
                    h || (h = "constructor" == l)
                }
                if (d && !h) {
                    var b = e.constructor,
                        A = t.constructor;
                    b == A || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof A && A instanceof A || (d = !1)
                }
                return a.delete(e), a.delete(t), d
            };
            var _ = r("7axX"),
                x = r("jEyD"),
                E = r("ZtI3"),
                S = r("A3LJ"),
                k = "[object Arguments]",
                O = "[object Array]",
                j = "[object Object]",
                P = Object.prototype.hasOwnProperty;
            const F = function(e, t, r, o, a, i) {
                var c = (0, x.A)(e),
                    u = (0, x.A)(t),
                    l = c ? O : (0, _.A)(e),
                    p = u ? O : (0, _.A)(t),
                    f = (l = l == k ? j : l) == j,
                    d = (p = p == k ? j : p) == j,
                    h = l == p;
                if (h && (0, E.A)(e)) {
                    if (!(0, E.A)(t)) return !1;
                    c = !0, f = !1
                }
                if (h && !f) return i || (i = new n.A), c || (0, S.A)(e) ? s(e, t, r, o, a, i) : v(e, t, l, r, o, a, i);
                if (!(1 & r)) {
                    var y = f && P.call(e, "__wrapped__"),
                        g = d && P.call(t, "__wrapped__");
                    if (y || g) {
                        var b = y ? e.value() : e,
                            m = g ? t.value() : t;
                        return i || (i = new n.A), a(b, m, r, o, i)
                    }
                }
                return !!h && (i || (i = new n.A), A(e, t, r, o, a, i))
            };
            var T = r("ga/a");
            const B = function e(t, r, n, o, a) {
                return t === r || (null == t || null == r || !(0, T.A)(t) && !(0, T.A)(r) ? t !== t && r !== r : F(t, r, n, o, e, a))
            };
            const C = function(e, t, r, o) {
                var a = r.length,
                    i = a,
                    s = !o;
                if (null == e) return !i;
                for (e = Object(e); a--;) {
                    var c = r[a];
                    if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                }
                for (; ++a < i;) {
                    var u = (c = r[a])[0],
                        l = e[u],
                        p = c[1];
                    if (s && c[2]) {
                        if (void 0 === l && !(u in e)) return !1
                    } else {
                        var f = new n.A;
                        if (o) var d = o(l, p, u, e, t, f);
                        if (!(void 0 === d ? B(p, l, 3, o, f) : d)) return !1
                    }
                }
                return !0
            };
            var D = r("Z8yJ");
            const R = function(e) {
                return e === e && !(0, D.A)(e)
            };
            const I = function(e) {
                for (var t = (0, b.A)(e), r = t.length; r--;) {
                    var n = t[r],
                        o = e[n];
                    t[r] = [n, o, R(o)]
                }
                return t
            };
            const N = function(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                }
            };
            const L = function(e) {
                var t = I(e);
                return 1 == t.length && t[0][2] ? N(t[0][0], t[0][1]) : function(r) {
                    return r === e || C(r, e, t)
                }
            };
            var U = r("dmbe"),
                H = r("KcLb"),
                M = r("Y2ey"),
                V = r("IX6G");
            const q = function(e, t) {
                return (0, M.A)(e) && R(t) ? N((0, V.A)(e), t) : function(r) {
                    var n = (0, U.A)(r, e);
                    return void 0 === n && n === t ? (0, H.A)(r, e) : B(t, n, 3)
                }
            };
            var W = r("rnGa");
            const K = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            };
            var G = r("xQ2A");
            const z = function(e) {
                return function(t) {
                    return (0, G.A)(t, e)
                }
            };
            const $ = function(e) {
                return (0, M.A)(e) ? K((0, V.A)(e)) : z(e)
            };
            const J = function(e) {
                return "function" == typeof e ? e : null == e ? W.A : "object" == typeof e ? (0, x.A)(e) ? q(e[0], e[1]) : L(e) : $(e)
            }
        },
        "00cO": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("OqJ6");
            const o = (0, r("r2lK").A)(Object.keys, Object);
            var a = Object.prototype.hasOwnProperty;
            const i = function(e) {
                if (!(0, n.A)(e)) return o(e);
                var t = [];
                for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        pPlv: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => W
            });
            var n = r("Ws4u"),
                o = r("2naQ"),
                a = r("W17m");
            const i = function(e, t, r) {
                (void 0 !== r && !(0, a.A)(e[t], r) || void 0 === r && !(t in e)) && (0, o.A)(e, t, r)
            };
            var s = r("I7B/"),
                c = r("YmLP"),
                u = "object" == typeof exports && exports && !exports.nodeType && exports,
                l = u && "object" == typeof module && module && !module.nodeType && module,
                p = l && l.exports === u ? c.A.Buffer : void 0,
                f = p ? p.allocUnsafe : void 0;
            const d = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    n = f ? f(r) : new e.constructor(r);
                return e.copy(n), n
            };
            var h = r("fbYP");
            const v = function(e) {
                var t = new e.constructor(e.byteLength);
                return new h.A(t).set(new h.A(e)), t
            };
            const y = function(e, t) {
                var r = t ? v(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length)
            };
            var g = r("D4m/"),
                b = r("itBc"),
                m = r("aZVO"),
                w = r("OqJ6");
            const A = function(e) {
                return "function" != typeof e.constructor || (0, w.A)(e) ? {} : (0, b.A)((0, m.A)(e))
            };
            var _ = r("J7fb"),
                x = r("jEyD"),
                E = r("dOki"),
                S = r("ga/a");
            const k = function(e) {
                return (0, S.A)(e) && (0, E.A)(e)
            };
            var O = r("ZtI3"),
                j = r("QRTr"),
                P = r("Z8yJ"),
                F = r("O7iy"),
                T = Function.prototype,
                B = Object.prototype,
                C = T.toString,
                D = B.hasOwnProperty,
                R = C.call(Object);
            const I = function(e) {
                if (!(0, S.A)(e) || "[object Object]" != (0, F.A)(e)) return !1;
                var t = (0, m.A)(e);
                if (null === t) return !0;
                var r = D.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && C.call(r) == R
            };
            var N = r("A3LJ");
            const L = function(e, t) {
                if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
            };
            var U = r("VOg4");
            const H = function(e, t, r, n) {
                var a = !r;
                r || (r = {});
                for (var i = -1, s = t.length; ++i < s;) {
                    var c = t[i],
                        u = n ? n(r[c], e[c], c, r, e) : void 0;
                    void 0 === u && (u = e[c]), a ? (0, o.A)(r, c, u) : (0, U.A)(r, c, u)
                }
                return r
            };
            var M = r("Hngc");
            const V = function(e) {
                return H(e, (0, M.A)(e))
            };
            const q = function(e, t, r, n, o, a, s) {
                var c = L(e, r),
                    u = L(t, r),
                    l = s.get(u);
                if (l) i(e, r, l);
                else {
                    var p = a ? a(c, u, r + "", e, t, s) : void 0,
                        f = void 0 === p;
                    if (f) {
                        var h = (0, x.A)(u),
                            v = !h && (0, O.A)(u),
                            b = !h && !v && (0, N.A)(u);
                        p = u, h || v || b ? (0, x.A)(c) ? p = c : k(c) ? p = (0, g.A)(c) : v ? (f = !1, p = d(u, !0)) : b ? (f = !1, p = y(u, !0)) : p = [] : I(u) || (0, _.A)(u) ? (p = c, (0, _.A)(c) ? p = V(c) : (0, P.A)(c) && !(0, j.A)(c) || (p = A(u))) : f = !1
                    }
                    f && (s.set(u, p), o(p, u, n, a, s), s.delete(u)), i(e, r, p)
                }
            };
            const W = function e(t, r, o, a, c) {
                t !== r && (0, s.A)(r, (function(s, u) {
                    if (c || (c = new n.A), (0, P.A)(s)) q(t, r, u, o, e, a, c);
                    else {
                        var l = a ? a(L(t, u), s, u + "", t, r, c) : void 0;
                        void 0 === l && (l = s), i(t, u, l)
                    }
                }), M.A)
            }
        },
        "Ssf/": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r("xQ2A"),
                o = r("VOg4"),
                a = r("0Bcc"),
                i = r("dnC1"),
                s = r("Z8yJ"),
                c = r("IX6G");
            const u = function(e, t, r, n) {
                if (!(0, s.A)(e)) return e;
                for (var u = -1, l = (t = (0, a.A)(t, e)).length, p = l - 1, f = e; null != f && ++u < l;) {
                    var d = (0, c.A)(t[u]),
                        h = r;
                    if ("__proto__" === d || "constructor" === d || "prototype" === d) return e;
                    if (u != p) {
                        var v = f[d];
                        void 0 === (h = n ? n(v, d, f) : void 0) && (h = (0, s.A)(v) ? v : (0, i.A)(t[u + 1]) ? [] : {})
                    }(0, o.A)(f, d, h), f = f[d]
                }
                return e
            };
            const l = function(e, t, r) {
                for (var o = -1, i = t.length, s = {}; ++o < i;) {
                    var c = t[o],
                        l = (0, n.A)(e, c);
                    r(l, c) && u(s, (0, a.A)(c, e), l)
                }
                return s
            }
        },
        "1CEv": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("rnGa"),
                o = r("TZ12"),
                a = r("MZWg");
            const i = function(e, t) {
                return (0, a.A)((0, o.A)(e, t, n.A), e + "")
            }
        },
        VFw1: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t, r) {
                var n = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var a = Array(o); ++n < o;) a[n] = e[n + t];
                return a
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
        "0Bcc": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("jEyD"),
                o = r("Y2ey"),
                a = r("jQwE");

            function i(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        a = r.cache;
                    if (a.has(o)) return a.get(o);
                    var i = e.apply(this, n);
                    return r.cache = a.set(o, i) || a, i
                };
                return r.cache = new(i.Cache || a.A), r
            }
            i.Cache = a.A;
            const s = i;
            var c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                u = /\\(\\)?/g;
            const l = function(e) {
                var t = s(e, (function(e) {
                        return 500 === r.size && r.clear(), e
                    })),
                    r = t.cache;
                return t
            }((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(c, (function(e, r, n, o) {
                    t.push(n ? o.replace(u, "$1") : r || e)
                })), t
            }));
            var p = r("zHQE");
            const f = function(e, t) {
                return (0, n.A)(e) ? e : (0, o.A)(e, t) ? [e] : l((0, p.A)(e))
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
        q5NF: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("1CEv"),
                o = r("W17m"),
                a = r("dOki"),
                i = r("dnC1"),
                s = r("Z8yJ");
            const c = function(e, t, r) {
                if (!(0, s.A)(r)) return !1;
                var n = typeof t;
                return !!("number" == n ? (0, a.A)(r) && (0, i.A)(t, r.length) : "string" == n && t in r) && (0, o.A)(r[t], e)
            };
            const u = function(e) {
                return (0, n.A)((function(t, r) {
                    var n = -1,
                        o = r.length,
                        a = o > 1 ? r[o - 1] : void 0,
                        i = o > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0, i && c(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o;) {
                        var s = r[n];
                        s && e(t, s, n, a)
                    }
                    return t
                }))
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
                A: () => g
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
                h = RegExp("^" + f.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const v = function(e) {
                return !(!(0, s.A)(e) || i(e)) && ((0, n.A)(e) ? h : u).test((0, c.A)(e))
            };
            const y = function(e, t) {
                return null == e ? void 0 : e[t]
            };
            const g = function(e, t) {
                var r = y(e, t);
                return v(r) ? r : void 0
            }
        },
        aZVO: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = (0, r("r2lK").A)(Object.getPrototypeOf, Object)
        },
        Qedb: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            const n = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
                    var i = e[r];
                    t(i, r, e) && (a[o++] = i)
                }
                return a
            };
            var o = r("JvR9"),
                a = Object.prototype.propertyIsEnumerable,
                i = Object.getOwnPropertySymbols;
            const s = i ? function(e) {
                return null == e ? [] : (e = Object(e), n(i(e), (function(t) {
                    return a.call(e, t)
                })))
            } : o.A
        },
        "7axX": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => x
            });
            var n = r("q22z"),
                o = r("YmLP");
            const a = (0, n.A)(o.A, "DataView");
            var i = r("P4hI");
            const s = (0, n.A)(o.A, "Promise");
            var c = r("ViwL"),
                u = r("KXmo"),
                l = r("O7iy"),
                p = r("Mip2"),
                f = "[object Map]",
                d = "[object Promise]",
                h = "[object Set]",
                v = "[object WeakMap]",
                y = "[object DataView]",
                g = (0, p.A)(a),
                b = (0, p.A)(i.A),
                m = (0, p.A)(s),
                w = (0, p.A)(c.A),
                A = (0, p.A)(u.A),
                _ = l.A;
            (a && _(new a(new ArrayBuffer(1))) != y || i.A && _(new i.A) != f || s && _(s.resolve()) != d || c.A && _(new c.A) != h || u.A && _(new u.A) != v) && (_ = function(e) {
                var t = (0, l.A)(e),
                    r = "[object Object]" == t ? e.constructor : void 0,
                    n = r ? (0, p.A)(r) : "";
                if (n) switch (n) {
                    case g:
                        return y;
                    case b:
                        return f;
                    case m:
                        return d;
                    case w:
                        return h;
                    case A:
                        return v
                }
                return t
            });
            const x = _
        },
        dnC1: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = /^(?:0|[1-9]\d*)$/;
            const o = function(e, t) {
                var r = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
        },
        Y2ey: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("jEyD"),
                o = r("4HpO"),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            const s = function(e, t) {
                if ((0, n.A)(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !(0, o.A)(e)) || (i.test(e) || !a.test(e) || null != t && e in Object(t))
            }
        },
        OqJ6: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = Object.prototype;
            const o = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || n)
            }
        },
        r2lK: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
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
        IX6G: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("4HpO");
            const o = function(e) {
                if ("string" == typeof e || (0, n.A)(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            }
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
        W17m: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        dmbe: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("xQ2A");
            const o = function(e, t, r) {
                var o = null == e ? void 0 : (0, n.A)(e, t);
                return void 0 === o ? r : o
            }
        },
        KcLb: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            const n = function(e, t) {
                return null != e && t in Object(e)
            };
            var o = r("0Bcc"),
                a = r("J7fb"),
                i = r("jEyD"),
                s = r("dnC1"),
                c = r("Rqd+"),
                u = r("IX6G");
            const l = function(e, t, r) {
                for (var n = -1, l = (t = (0, o.A)(t, e)).length, p = !1; ++n < l;) {
                    var f = (0, u.A)(t[n]);
                    if (!(p = null != e && r(e, f))) break;
                    e = e[f]
                }
                return p || ++n != l ? p : !!(l = null == e ? 0 : e.length) && (0, c.A)(l) && (0, s.A)(f, l) && ((0, i.A)(e) || (0, a.A)(e))
            };
            const p = function(e, t) {
                return null != e && l(e, t, n)
            }
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
        dOki: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("QRTr"),
                o = r("Rqd+");
            const a = function(e) {
                return null != e && (0, o.A)(e.length) && !(0, n.A)(e)
            }
        },
        ZtI3: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r("YmLP");
            const o = function() {
                return !1
            };
            var a = "object" == typeof exports && exports && !exports.nodeType && exports,
                i = a && "object" == typeof module && module && !module.nodeType && module,
                s = i && i.exports === a ? n.A.Buffer : void 0;
            const c = (s ? s.isBuffer : void 0) || o
        },
        UqW6: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("00cO"),
                o = r("7axX"),
                a = r("J7fb"),
                i = r("jEyD"),
                s = r("dOki"),
                c = r("ZtI3"),
                u = r("OqJ6"),
                l = r("A3LJ"),
                p = Object.prototype.hasOwnProperty;
            const f = function(e) {
                if (null == e) return !0;
                if ((0, s.A)(e) && ((0, i.A)(e) || "string" == typeof e || "function" == typeof e.splice || (0, c.A)(e) || (0, l.A)(e) || (0, a.A)(e))) return !e.length;
                var t = (0, o.A)(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if ((0, u.A)(e)) return !(0, n.A)(e).length;
                for (var r in e)
                    if (p.call(e, r)) return !1;
                return !0
            }
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
        "Rqd+": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        "/4G5": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function(e) {
                return null == e
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
        "4HpO": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("O7iy"),
                o = r("ga/a");
            const a = function(e) {
                return "symbol" == typeof e || (0, o.A)(e) && "[object Symbol]" == (0, n.A)(e)
            }
        },
        A3LJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => v
            });
            var n = r("O7iy"),
                o = r("Rqd+"),
                a = r("ga/a"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            const s = function(e) {
                return (0, a.A)(e) && (0, o.A)(e.length) && !!i[(0, n.A)(e)]
            };
            const c = function(e) {
                return function(t) {
                    return e(t)
                }
            };
            var u = r("dCmz"),
                l = "object" == typeof exports && exports && !exports.nodeType && exports,
                p = l && "object" == typeof module && module && !module.nodeType && module,
                f = p && p.exports === l && u.A.process,
                d = function() {
                    try {
                        var e = p && p.require && p.require("util").types;
                        return e || f && f.binding && f.binding("util")
                    } catch (t) {}
                }();
            var h = d && d.isTypedArray;
            const v = h ? c(h) : s
        },
        "4sdf": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("M9Hd"),
                o = r("00cO"),
                a = r("dOki");
            const i = function(e) {
                return (0, a.A)(e) ? (0, n.A)(e) : (0, o.A)(e)
            }
        },
        Hngc: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r("M9Hd"),
                o = r("Z8yJ"),
                a = r("OqJ6");
            const i = function(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e)) t.push(r);
                return t
            };
            var s = Object.prototype.hasOwnProperty;
            const c = function(e) {
                if (!(0, o.A)(e)) return i(e);
                var t = (0, a.A)(e),
                    r = [];
                for (var n in e)("constructor" != n || !t && s.call(e, n)) && r.push(n);
                return r
            };
            var u = r("dOki");
            const l = function(e) {
                return (0, u.A)(e) ? (0, n.A)(e, !0) : c(e)
            }
        },
        GR8Z: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r("2naQ"),
                o = r("I7B/"),
                a = r("4sdf");
            const i = function(e, t) {
                return e && (0, o.A)(e, t, a.A)
            };
            var s = r("jdNv");
            const c = function(e, t) {
                var r = {};
                return t = (0, s.A)(t, 3), i(e, (function(e, o, a) {
                    (0, n.A)(r, o, t(e, o, a))
                })), r
            }
        },
        A1pX: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("pPlv");
            const o = (0, r("q5NF").A)((function(e, t, r) {
                (0, n.A)(e, t, r)
            }))
        },
        "h/7X": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function() {}
        },
        "oG/F": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("jdNv");
            const o = function(e) {
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            };
            var a = r("qu3m");
            const i = function(e, t) {
                return (0, a.A)(e, o((0, n.A)(t)))
            }
        },
        "Pac+": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("Ssf/"),
                o = r("KcLb");
            const a = function(e, t) {
                return (0, n.A)(e, t, (function(t, r) {
                    return (0, o.A)(e, r)
                }))
            };
            const i = (0, r("N8de").A)((function(e, t) {
                return null == e ? {} : a(e, t)
            }))
        },
        qu3m: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            var n = r("id2I"),
                o = r("jdNv"),
                a = r("Ssf/"),
                i = r("l/i2"),
                s = r("cMJY"),
                c = r("aZVO"),
                u = r("Qedb"),
                l = r("JvR9");
            const p = Object.getOwnPropertySymbols ? function(e) {
                for (var t = []; e;)(0, s.A)(t, (0, u.A)(e)), e = (0, c.A)(e);
                return t
            } : l.A;
            var f = r("Hngc");
            const d = function(e) {
                return (0, i.A)(e, f.A, p)
            };
            const h = function(e, t) {
                if (null == e) return {};
                var r = (0, n.A)(d(e), (function(e) {
                    return [e]
                }));
                return t = (0, o.A)(t), (0, a.A)(e, r, (function(e, r) {
                    return t(e, r[0])
                }))
            }
        },
        JvR9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            const n = function() {
                return []
            }
        },
        zHQE: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r("VMO7"),
                o = r("id2I"),
                a = r("jEyD"),
                i = r("4HpO"),
                s = n.A ? n.A.prototype : void 0,
                c = s ? s.toString : void 0;
            const u = function e(t) {
                if ("string" == typeof t) return t;
                if ((0, a.A)(t)) return (0, o.A)(t, e) + "";
                if ((0, i.A)(t)) return c ? c.call(t) : "";
                var r = t + "";
                return "0" == r && 1 / t == -Infinity ? "-0" : r
            };
            const l = function(e) {
                return null == e ? "" : u(e)
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [593], (() => (t("Mp1J"), t("nlrA"))));
        e.O()
    }
]);
//# debugId=8d47b60b-6014-593d-9546-b7741a8111bd