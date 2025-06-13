"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b43a9fac-0e5c-5db9-884a-066894dd0fa8")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [6157], {
        mOQS: (e, r, t) => {
            t.d(r, {
                dT: () => v,
                om: () => p,
                Q8: () => c,
                QQ: () => d,
                qr: () => l,
                UU: () => C,
                Ym: () => m,
                Yp: () => b,
                lW: () => s,
                KD: () => u,
                d1: () => f
            });
            var i = t("sViW"),
                a = t("Pz56"),
                o = t.n(a),
                n = t("xj71");
            t("tEf9"), t("4Kx8");
            var c = function() {
                    return (0, n.Jt)("/bapi/composite/v1/private/promo/referral/lite/dashboard/activities?pageIndex=".concat(1, "&pageSize=", 5))
                },
                p = function(e) {
                    var r = e.activityCode,
                        t = e.referralCode;
                    return (0, n.bE)("/bapi/composite/v2/public/promo/referral/lite/activity/info", {
                        activityCode: r,
                        referralCode: t
                    })
                },
                v = function(e) {
                    var r = e.activityCode,
                        t = void 0 === r ? void 0 : r,
                        i = e.referralCode,
                        a = void 0 === i ? void 0 : i;
                    return (0, n.bE)("/bapi/composite/v2/private/promo/referral/lite/activity/detail", {
                        activityCode: t,
                        referralCode: a
                    })
                },
                d = function(e) {
                    var r = e.activityCode;
                    return (0, n.bE)("/bapi/composite/v1/private/promo/referral/lite/activity/referralcode", {
                        activityCode: r
                    })
                },
                u = function(e) {
                    var r = e.activityCode,
                        t = e.rewardCode;
                    return (0, n.bE)("/bapi/composite/v1/private/promo/referral/lite/activity/reward/open", {
                        activityCode: r,
                        rewardCode: t
                    })
                },
                f = function(e) {
                    var r = e.activityCode;
                    return (0, n.bE)("/bapi/composite/v2/private/promo/referral/lite/activity/reminder/send", {
                        activityCode: r
                    })
                },
                l = function() {
                    var e = (0, i.A)(o().mark((function e(r) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r.activityCode, r.headers, e.abrupt("return", new Promise((function(e) {
                                        return e()
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                s = function(e) {
                    var r = e.referralCode;
                    return (0, n.bE)("/bapi/composite/v3/friendly/promo/referral/lite/activity/linkActivation", {
                        referralCode: r
                    })
                },
                m = function(e) {
                    var r = e.ref,
                        t = e.registerChannel;
                    return (0, n.bE)("/bapi/composite/v2/public/promo/redpacket/getPacketId", {
                        ref: r,
                        registerChannel: t
                    })
                },
                b = function() {
                    return (0, n.bE)("/bapi/composite/v1/private/promo/referral/channel/user", {})
                },
                C = function(e) {
                    var r = e.activityCode;
                    return (0, n.bE)("/bapi/composite/v2/private/promo/referral/lite/activity/display-content/group", {
                        activityCode: r
                    })
                }
        }
    }
]);
//# debugId=b43a9fac-0e5c-5db9-884a-066894dd0fa8