"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e3c05366-efe7-5860-a019-d3dbe29cbe4e")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [6316], {
        bIGX: (e, l, n) => {
            n.r(l), n.d(l, {
                default: () => m
            });
            var i = n("TrCV"),
                a = n("DTvD"),
                t = n.n(a),
                o = n("wIZF"),
                d = n("Y4uf");
            const u = function(e) {
                return t().createElement(d.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), t().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 5H3v6h3.586L4.758 9.172l1.414-1.414L8 9.586V5zm2 0v4.587l1.83-1.83 1.413 1.415L11.415 11H21V5H10zm11 8h-9.586l1.83 1.829-1.415 1.414L10 14.414V19h11v-6zM8 19v-4.585l-1.828 1.828-1.414-1.414L6.587 13H3v6h5z",
                    fill: "currentColor"
                }))
            };
            var r = n("Mtrz"),
                s = n("Lp65"),
                c = n("eeEA"),
                v = n("f3Gl"),
                f = n("YiNW"),
                g = n("5YC9"),
                p = n("nocm");
            const m = function(e) {
                var l, n, t, o, d = e.fiat,
                    m = e.tradeMethodIdentifier,
                    T = e.tradeType,
                    k = e.delayVisibleTime,
                    b = void 0 === k ? 0 : k,
                    h = e.className,
                    A = e.trackingInfo,
                    I = (0, a.useState)(0 === b),
                    x = I[0],
                    E = I[1],
                    w = (0, g.K6)({
                        fiat: d,
                        tradeMethodIdentifier: m,
                        tradeType: T
                    }, {
                        enabled: x
                    }),
                    N = null === w || void 0 === w || null === (l = w.data) || void 0 === l || null === (n = l.data) || void 0 === n ? void 0 : n.taskTitle;
                (0, a.useEffect)((function() {
                    if (0 !== b) {
                        var e = setTimeout((function() {
                            E(!0)
                        }), b);
                        return function() {
                            e && clearTimeout(e)
                        }
                    }
                }), [b]);
                var C = "undefined" !== typeof(null === w || void 0 === w || null === (t = w.data) || void 0 === t || null === (o = t.data) || void 0 === o ? void 0 : o.taskTitle);
                return (0, a.useEffect)((function() {
                    C && (null === A || void 0 === A ? void 0 : A.pageViewTrackingId) && (0, v.u)("pageView", {
                        elementId: null === A || void 0 === A ? void 0 : A.pageViewTrackingId,
                        pageName: null === A || void 0 === A ? void 0 : A.pageName
                    })
                }), [C, null === A || void 0 === A ? void 0 : A.pageName, null === A || void 0 === A ? void 0 : A.pageViewTrackingId]), C ? (0, i.jsx)(s.A, {
                    className: (0, f.cn)("bg-badgeBg w-full", h),
                    children: (0, i.jsxs)(s.A, {
                        as: "a",
                        href: p.A.site().rewardHub,
                        target: "_blank",
                        className: "container items-start tablet:items-center text-primary gap-xs tablet:gap-4xs py-s justify-center cursor-pointer",
                        onClick: function() {
                            (null === A || void 0 === A ? void 0 : A.linkTrackingId) && (0, v.u)("webClick", {
                                elementId: null === A || void 0 === A ? void 0 : A.linkTrackingId,
                                pageName: null === A || void 0 === A ? void 0 : A.pageName
                            })
                        },
                        children: [(0, i.jsx)(u, {
                            className: "w-[20px] h-[20px] flex-none"
                        }), (0, i.jsx)(c.Ay, {
                            className: "body3 tablet:subtitle1",
                            children: N
                        }), (0, i.jsx)(r.A, {
                            className: "text-iconNormal w-[20px] h-[20px] flex-none"
                        })]
                    })
                }) : null
            }
        },
        "5YC9": (e, l, n) => {
            n.d(l, {
                AZ: () => v,
                K6: () => c
            });
            var i = n("BK7R"),
                a = n("QUKP"),
                t = n("tEf9"),
                o = n("FYhw"),
                d = n("x9UB"),
                u = n("+bTb"),
                r = n("V3BA"),
                s = {
                    all: ["taskCenter"],
                    getEligibleTask: function(e) {
                        return (0, t.A)(s.all).concat(["getEligibleTask", e])
                    },
                    hasCompletedTask: function(e) {
                        return (0, t.A)(s.all).concat(["hasCompletedTask", e])
                    }
                },
                c = function(e) {
                    var l, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, d.k)().isLoggedIn;
                    return (0, u.vG)((0, o.I)(s.getEligibleTask(e), (function() {
                        return (0, u.Vo)(r.A.GET_ELIGIBLE_TASK, e)
                    }), (0, a.A)((0, i.A)({
                        staleTime: 1 / 0
                    }, n), {
                        enabled: Boolean(t) && "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.fiat) && (null === (l = null === n || void 0 === n ? void 0 : n.enabled) || void 0 === l || l)
                    })))
                },
                v = function(e) {
                    var l, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, d.k)().isLoggedIn;
                    return (0, u.vG)((0, o.I)(s.getEligibleTask(e), (function() {
                        return (0, u.Vo)(r.A.HAS_COMPLETED_TASK, e)
                    }), (0, a.A)((0, i.A)({
                        staleTime: 1 / 0
                    }, n), {
                        enabled: Boolean(t) && (null === (l = null === n || void 0 === n ? void 0 : n.enabled) || void 0 === l || l)
                    })))
                }
        }
    }
]);
//# debugId=e3c05366-efe7-5860-a019-d3dbe29cbe4e