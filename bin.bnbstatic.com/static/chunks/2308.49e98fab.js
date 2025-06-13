"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6299c719-d21c-51fb-bfbc-8b35ed8cfa18")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [2308], {
        fqeV: (e, s, l) => {
            l.r(s), l.d(s, {
                default: () => d
            });
            var r = l("TrCV"),
                c = l("B8b3"),
                a = l("Lp65"),
                i = l("eeEA"),
                t = l("cNVJ"),
                n = l("7gwQ"),
                m = l("fU5Q"),
                o = l("HcTV"),
                x = l("PGFD");
            const d = function(e) {
                var s = e.visible,
                    l = e.onClose,
                    d = (0, o.Ay)().t,
                    A = (0, t.d4)((function(e) {
                        return e.tradeV2
                    })).marketType === m.G.Block;
                return (0, r.jsx)(x.A, {
                    onSubmit: l,
                    children: (0, r.jsxs)(c.Ay, {
                        visible: s,
                        onClose: l,
                        maskClose: !0,
                        responsive: !0,
                        children: [(0, r.jsx)(c.Ay.Header, {
                            onNextClick: l,
                            showNext: !0,
                            children: d("c2c-trade-filter-more")
                        }), (0, r.jsx)(c.Ay.Content, {
                            className: "!p-0 mb-xl overscroll-y-contain",
                            style: {
                                maxHeight: "70vh"
                            },
                            children: (0, r.jsxs)(a.A, {
                                className: "flex-col",
                                children: [(0, r.jsx)(i.Ay, {
                                    className: "px-m",
                                    children: (0, r.jsx)(x.A.PaymentFilterForm, {
                                        className: "w-full",
                                        fieldVariant: "filled"
                                    })
                                }), (0, r.jsx)(n.A, {}), !A && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(i.Ay, {
                                        className: "px-m",
                                        children: (0, r.jsx)(x.A.LastUsedFilterForm, {})
                                    }), (0, r.jsx)(n.A, {})]
                                }), (0, r.jsx)(i.Ay, {
                                    className: "px-m",
                                    children: (0, r.jsx)(x.A.AdvTypeFilterForm, {})
                                }), (0, r.jsx)(n.A, {}), (0, r.jsx)(x.A.SortByFilterForm, {
                                    className: "px-m"
                                }), (0, r.jsx)(n.A, {}), (0, r.jsx)(x.A.PayTimeLimitFilterForm, {
                                    containerProps: {
                                        className: "px-m mb-xl"
                                    }
                                }), (0, r.jsx)(n.A, {}), (0, r.jsx)(x.A.CountryFilterForm, {
                                    containerProps: {
                                        className: "mb-xl px-m"
                                    }
                                }), (0, r.jsx)(n.A, {})]
                            })
                        }), (0, r.jsxs)(c.Ay.Footer, {
                            className: "gap-s",
                            children: [(0, r.jsx)(x.A.ResetButton, {
                                sz: "middle",
                                variant: "secondary",
                                className: "w-[105px]",
                                children: d("c2c-ui-pc-myposts-btn-reset")
                            }), (0, r.jsx)(x.A.SubmitButton, {
                                className: "flex-1",
                                children: d("c2c-ui-dialog-comfirm-cancel")
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# debugId=6299c719-d21c-51fb-bfbc-8b35ed8cfa18