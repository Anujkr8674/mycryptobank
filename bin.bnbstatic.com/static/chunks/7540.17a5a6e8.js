"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bdb3e179-9e17-5e46-9d9c-eb973f92fe4a")
    } catch (e) {}
}();
(self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || []).push([
    [7540], {
        "2Gad": (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => b
            });
            var i = o("BK7R"),
                s = o("QUKP"),
                c = o("jg1C"),
                r = o("DTvD"),
                a = o("//eO"),
                n = o("Lp65"),
                d = o("qtT+"),
                l = o("eeEA"),
                p = o("8wU8"),
                f = o("OpNp"),
                u = o("GjVY"),
                x = function(e) {
                    var t = e.Icon,
                        o = e.title,
                        i = e.description,
                        s = e.index;
                    return (0, c.jsxs)(n.A, {
                        className: "gap-14 tablet:gap-6",
                        children: [(0, c.jsx)(n.A, {
                            className: "items-center",
                            children: (0, c.jsx)(d.A, {
                                src: t,
                                style: {
                                    width: "96px",
                                    height: "96px"
                                }
                            })
                        }), (0, c.jsxs)(n.A, {
                            className: "flex-grow flex-col gap-2 rounded-xl border border-solid border-[--color-line] p-6 text-t-primary",
                            children: [(0, c.jsxs)(l.Ay, {
                                className: "subtitle2 font-semibold",
                                children: [s, ". ", o]
                            }), (0, c.jsx)(l.Ay, {
                                className: "subtitle3 mt-2 font-normal",
                                children: i
                            })]
                        })]
                    })
                },
                m = function(e) {
                    var t = e.Icon,
                        o = e.title,
                        i = e.description,
                        s = e.index;
                    return (0, c.jsxs)(n.A, {
                        className: "flex-col justify-start gap-6 rounded-xl border border-solid border-[--color-line] p-4",
                        children: [(0, c.jsx)(d.A, {
                            src: t,
                            className: "h-[64px] w-[64px] mobile:h-[80px] mobile:w-[80px]"
                        }), (0, c.jsxs)(n.A, {
                            className: "flex-col gap-2",
                            children: [(0, c.jsxs)(l.Ay, {
                                className: "subtitle2 font-semibold mobile:text-[16px] mobile:font-[600]",
                                children: [s, ". ", o]
                            }), (0, c.jsx)(l.Ay, {
                                className: "subtitle3 font-normal mobile:text-[14px]",
                                children: i
                            })]
                        })]
                    })
                };
            const b = function() {
                var e = (0, p.A)().t,
                    t = (0, a.n)().isMobile,
                    o = (0, r.useState)("self-verify"),
                    d = o[0],
                    l = (o[1], {
                        "self-verify": [{
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/fiat-service-activated.png"),
                            title: e("proof-audit-title1"),
                            description: e("proof-audit-desc1")
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/futures.png"),
                            title: e("proof-audit-title2"),
                            description: e("proof-audit-desc2")
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/defi-staking.png"),
                            title: e("proof-audit-title-5"),
                            description: e("proof-audit-desc-7")
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/document-valid.png"),
                            title: e("proof-audit-title3"),
                            description: "".concat(e("proof-audit-desc3"), " ").concat(e("proof-audit-desc5"), " ").concat(e("proof-audit-desc6"))
                        }],
                        "third-party": [{
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/fiat-service-activated.png"),
                            title: e("proof-audit-title1"),
                            description: e("proof-audit-desc1")
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/futures.png"),
                            title: e("proof-audit-title2"),
                            description: e("proof-audit-desc2")
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/defi-staking.png"),
                            title: e("proof-audit-title3"),
                            description: "".concat(e("proof-audit-desc3"), " ").concat(e("proof-audit-desc5"), " ").concat(e("proof-audit-desc6"))
                        }, {
                            Icon: "".concat(u.K5, "/static/proof-of-reserves/document-valid.png"),
                            title: e("proof-audit-title4"),
                            description: e("proof-audit-desc4")
                        }]
                    }[d]);
                return (0, c.jsxs)(f.OO, {
                    children: [(0, c.jsx)(f.R1, {
                        text: e("proof-audit-title")
                    }), (0, c.jsx)(n.A, {
                        className: "mt-10 flex-col gap-6 mobile:mt-8 mobile:gap-6 pc:mt-10",
                        children: l.map((function(e, o) {
                            return t ? (0, c.jsx)(m, (0, s.A)((0, i.A)({}, e), {
                                index: o + 1
                            }), o) : (0, c.jsx)(x, (0, s.A)((0, i.A)({}, e), {
                                index: o + 1
                            }), o)
                        }))
                    })]
                })
            }
        }
    }
]);
//# debugId=bdb3e179-9e17-5e46-9d9c-eb973f92fe4a