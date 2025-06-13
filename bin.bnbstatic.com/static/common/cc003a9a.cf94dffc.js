"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f2ac8aa-ea9b-5f72-bf77-62320dc72a3c")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [1727], {
        "/W+I": (e, t, n) => {
            n.d(t, {
                M: () => u
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("FYhw"),
                l = n("x9UB"),
                o = n("vkN1"),
                s = n("B2Yp"),
                c = function() {
                    return [o.A.QUERY_CONTACT_SWITCH]
                },
                u = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = (0, l.k)().isLoggedIn;
                    return (0, i.I)(c(), (function() {
                        return (0, s.Jt)(o.A.QUERY_CONTACT_SWITCH)
                    }), (0, a.A)((0, r.A)({
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0
                    }, t), {
                        enabled: Boolean((null === (e = null === t || void 0 === t ? void 0 : t.enabled) || void 0 === e || e) && n)
                    }))
                }
        },
        Pofy: (e, t, n) => {
            var r;
            n.d(t, {
                    G: () => r
                }),
                function(e) {
                    e.P2P = "P2P", e.Express = "EXPRESS", e.Block = "BLOCK", e.Cash = "CASH", e.Pay = "Pay", e.GiftCard = "GIFT_CARD"
                }(r || (r = {}))
        },
        "44NZ": (e, t, n) => {
            n.d(t, {
                v: () => c
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("aVXY"),
                l = n("DTvD"),
                o = n("HIvj"),
                s = {
                    emailPrefix: "",
                    formatEmail: "",
                    tradeLevel: 0,
                    lastLoginTime: 0,
                    lastLoginIp: "",
                    idPhoto: "-1",
                    authenticationType: 1,
                    commissionStatus: !1,
                    kycStatus: "-",
                    withdrawWhiteStatus: !1
                },
                c = function() {
                    var e = (0, o.Py)(),
                        t = (0, i.A)((0, l.useState)((0, r.A)({}, s, e)), 2),
                        n = t[0],
                        c = t[1];
                    return (0, l.useEffect)((function() {
                        var t = e.email,
                            n = e.commissionStatus,
                            i = e.idPhoto,
                            l = function(e) {
                                if (!e) return {
                                    emailPrefix: "**",
                                    formatEmail: "******"
                                };
                                var t = e.substr(0, 2),
                                    n = e.split("@");
                                return {
                                    emailPrefix: t,
                                    formatEmail: "".concat(t, "***@").concat(n[1])
                                }
                            }(t),
                            o = l.emailPrefix,
                            s = l.formatEmail;
                        void 0 !== i && c((0, a.A)((0, r.A)({}, e), {
                            emailPrefix: o,
                            commissionStatus: !!n,
                            formatEmail: s,
                            kycStatus: "1" === i
                        }))
                    }), [e]), {
                        userBaseInfo: n,
                        setUserBaseInfo: c
                    }
                }
        },
        aMHo: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("gZfF"),
                l = n("TrCV"),
                o = n("5+UA");
            const s = function(e) {
                var t = e.show,
                    n = e.children,
                    s = (0, i.A)(e, ["show", "children"]);
                return t ? (0, l.jsx)(o.A, (0, a.A)((0, r.A)({}, s), {
                    children: n
                })) : (0, l.jsx)(l.Fragment, {
                    children: n
                })
            }
        },
        X0ek: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("gZfF"),
                l = n("TrCV"),
                o = n("DTvD"),
                s = n("eeEA"),
                c = n("Fxby"),
                u = n("cNVJ"),
                d = n("HcTV"),
                f = n("eM92"),
                v = function(e) {
                    var t = e.iconUrl,
                        n = e.asset,
                        r = e.showIcon;
                    return (0, l.jsxs)(s.Ay, {
                        className: "flex items-center",
                        children: [r && (0, l.jsx)(s.Ay, {
                            as: "img",
                            style: {
                                width: "16px",
                                height: "16px"
                            },
                            className: "mr-4xs",
                            src: t,
                            alt: n,
                            loading: "lazy"
                        }), n]
                    })
                };
            const m = function(e) {
                var t = e.showIcon,
                    n = void 0 === t || t,
                    s = e.assets,
                    m = (e.enableSearch, (0, i.A)(e, ["showIcon", "assets", "enableSearch"])),
                    p = (0, d.Ay)().t,
                    h = (0, u.Qs)().isMobile,
                    y = (0, o.useState)(),
                    b = y[0],
                    x = y[1],
                    g = b ? s.filter((function(e) {
                        return e.asset.toLowerCase().includes(null === b || void 0 === b ? void 0 : b.toLowerCase())
                    })) : s;
                return (0, l.jsx)(c.A, (0, a.A)((0, r.A)({
                    renderFn: function(e) {
                        var t, r = e.selects;
                        return (0, l.jsx)(v, {
                            asset: null === r || void 0 === r ? void 0 : r[0],
                            iconUrl: null === (t = s.find((function(e) {
                                return e.asset === (null === r || void 0 === r ? void 0 : r[0])
                            }))) || void 0 === t ? void 0 : t.iconUrl,
                            showIcon: n
                        })
                    },
                    wrapperType: h ? "drawer" : "dropdown",
                    onSearchFn: function(e) {
                        x(e)
                    },
                    searchValue: b,
                    searchPlaceholder: p(f.o.search)
                }, m), {
                    children: g.map((function(e) {
                        return (0, l.jsx)(c.A.Option, {
                            value: null === e || void 0 === e ? void 0 : e.asset,
                            optionCheckIcon: !0,
                            children: (0, l.jsx)(v, {
                                asset: null === e || void 0 === e ? void 0 : e.asset,
                                iconUrl: null === e || void 0 === e ? void 0 : e.iconUrl,
                                showIcon: n
                            })
                        }, null === e || void 0 === e ? void 0 : e.asset)
                    }))
                }))
            }
        },
        Jrns: (e, t, n) => {
            n.d(t, {
                A: () => V
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("gZfF"),
                l = n("tEf9"),
                o = n("TrCV"),
                s = n("DTvD"),
                c = n.n(s),
                u = n("MwrP"),
                d = n.n(u),
                f = n("JgEn"),
                v = n("eeEA"),
                m = n("Lp65"),
                p = n("Fxby"),
                h = n("lEYW"),
                y = n("9+y7"),
                b = n("wIZF"),
                x = n("Y4uf");
            const g = function(e) {
                return c().createElement(x.A, (0, b.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), c().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.343 7.565a7.78 7.78 0 000 11.13c3.124 3.073 8.19 3.073 11.314 0a7.78 7.78 0 000-11.13L12 2 6.343 7.565zm8.44 9.782a3.935 3.935 0 000-5.565L12 9l-2.783 2.782a3.935 3.935 0 005.566 5.565z",
                    fill: "currentColor"
                }))
            };
            var A = n("cNVJ"),
                w = n("HcTV"),
                _ = n("eM92"),
                k = n("p4Fj"),
                C = n("8v/2"),
                N = function(e) {
                    var t = e.tooltipProps,
                        n = e.children;
                    return t ? (0, o.jsx)(f.A, (0, a.A)((0, r.A)({
                        className: "w-full"
                    }, t), {
                        children: n
                    })) : (0, o.jsx)(o.Fragment, {
                        children: n
                    })
                },
                T = function(e) {
                    var t, n = e.value,
                        r = e.disableToolTips,
                        a = e.maxLabelLength,
                        i = void 0 === a ? 16 : a,
                        l = (0, w.Ay)().t,
                        s = (null === n || void 0 === n ? void 0 : n.isPopularPayment) && !(null === n || void 0 === n ? void 0 : n.isOnlinePayment);
                    return (0, o.jsx)(N, {
                        tooltipProps: !r && (null === n || void 0 === n ? void 0 : n.isOnlinePayment) ? {
                            arrow: !0,
                            placement: "bottom",
                            tooltips: (0, o.jsx)(v.Ay, {
                                className: "whitespace-normal",
                                children: l("c2c-ui-lighting-upi-tips")
                            })
                        } : void 0,
                        children: (0, o.jsxs)(m.A, {
                            className: "items-center gap-1 w-full",
                            children: [(null === n || void 0 === n || null === (t = n.label) || void 0 === t ? void 0 : t.length) > i ? "".concat(n.label.slice(0, i), "...") : null === n || void 0 === n ? void 0 : n.label, (null === n || void 0 === n ? void 0 : n.isOnlinePayment) && (0, o.jsx)(y.A, {
                                className: "!text-sell",
                                style: {
                                    width: "14px",
                                    height: "14px",
                                    lineHeight: "14px"
                                }
                            }), s && (0, o.jsx)(f.A, {
                                placement: "bottom",
                                className: "flex-none [&_.bn-tooltips>.bn-bubble-content]:g-[min-w-[150px],translate-x-[-50%]]",
                                tooltips: (0, o.jsx)(v.Ay, {
                                    className: "whitespace-normal",
                                    children: l("c2c-ui-hot-payment-tip")
                                }),
                                arrow: !0,
                                children: (0, o.jsx)(m.A, {
                                    children: (0, o.jsx)(g, {
                                        style: {
                                            lineHeight: "14px",
                                            width: "14px",
                                            height: "14px"
                                        },
                                        className: "!text-primaryYellow"
                                    })
                                })
                            })]
                        })
                    })
                },
                j = function(e, t) {
                    return null === e || void 0 === e ? void 0 : e.some((function(e) {
                        return (null === e || void 0 === e ? void 0 : e.toLowerCase()) === (null === t || void 0 === t ? void 0 : t.toLowerCase())
                    }))
                },
                S = function(e) {
                    var t = e.value,
                        n = e.paymentMethodOptions,
                        r = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return j(t, e.value)
                        }));
                    if ("undefined" === typeof t || 0 === (null === t || void 0 === t ? void 0 : t.length) || "" === (null === t || void 0 === t ? void 0 : t[0])) return (0, o.jsx)(T, {
                        value: n.find((function(e) {
                            return "undefined" === typeof e.value
                        })),
                        disableToolTips: !0
                    });
                    if ((null === t || void 0 === t ? void 0 : t.length) <= 1) {
                        var a = r.find((function(e) {
                            var n, r;
                            return (null === e || void 0 === e || null === (n = e.value) || void 0 === n ? void 0 : n.toLowerCase()) === (null === t || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.toLowerCase())
                        }));
                        return (0, o.jsx)(T, {
                            value: a,
                            disableToolTips: !0
                        })
                    }
                    return (0, o.jsx)(v.Ay, {
                        className: "overflow-hidden overflow-ellipsis",
                        children: null === r || void 0 === r ? void 0 : r.map((function(e) {
                            return null === e || void 0 === e ? void 0 : e.label
                        })).join(", ")
                    })
                };
            const V = function(e) {
                var t, n, c = e.value,
                    u = e.onChange,
                    f = e.paymentList,
                    y = (e.className, e.type),
                    b = void 0 === y ? "single" : y,
                    x = e.showPopularPaymentBadge,
                    g = (0, i.A)(e, ["value", "onChange", "paymentList", "className", "type", "showPopularPaymentBadge"]),
                    N = (0, s.useState)(c),
                    V = N[0],
                    E = N[1],
                    M = (0, s.useState)(void 0),
                    F = M[0],
                    D = M[1],
                    B = (0, A.Qs)().isMobile,
                    P = (0, w.Ay)().t,
                    L = function(e) {
                        var t, n = e.tradeMethods,
                            r = e.showPopularPaymentBadge,
                            a = (0, w.Ay)().t,
                            i = (0, k.S)(),
                            o = (0, C.r)().blockHeader,
                            c = (0, s.useMemo)((function() {
                                var e = n.map((function(e, t) {
                                        var n, a, l = e.identifier;
                                        return {
                                            label: e.name,
                                            value: l,
                                            bgColor: e.bgColor,
                                            isOnlinePayment: null === i || void 0 === i || null === (n = i.data) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.includes(l),
                                            isPopularPayment: !(!r || o) && t < 5
                                        }
                                    }), []),
                                    t = e.reduce((function(e, t) {
                                        var n = t.isOnlinePayment,
                                            r = t.isPopularPayment;
                                        return n || r ? r && !n ? e.popularAd.push(t) : n && e.lighteningAd.push(t) : e.normalAd.push(t), e
                                    }), {
                                        normalAd: [],
                                        popularAd: [],
                                        lighteningAd: []
                                    });
                                return [{
                                    label: a("c2c-ui-trade-filter-allpay"),
                                    value: void 0,
                                    bgColor: "#F0B90B"
                                }].concat((0, l.A)(t.lighteningAd), (0, l.A)(t.popularAd), (0, l.A)(t.normalAd))
                            }), [a, n, null === i || void 0 === i || null === (t = i.data) || void 0 === t ? void 0 : t.data]);
                        return c
                    }({
                        tradeMethods: f,
                        showPopularPaymentBadge: x
                    }),
                    I = (0, s.useMemo)((function() {
                        return null === L || void 0 === L ? void 0 : L.filter((function(e) {
                            var t, n = e.label;
                            return "undefined" === typeof F || (null === (t = null === n || void 0 === n ? void 0 : n.toLocaleLowerCase()) || void 0 === t ? void 0 : t.includes(null === F || void 0 === F ? void 0 : F.toLocaleLowerCase()))
                        })).sort((function(e, t) {
                            return "undefined" === typeof e.value ? -1 : "undefined" === typeof t.value ? 1 : Number(j(V, null === t || void 0 === t ? void 0 : t.value)) - Number(j(V, null === e || void 0 === e ? void 0 : e.value))
                        }))
                    }), [L, F, V]);
                return (0, s.useEffect)((function() {
                    E(c)
                }), [c]), (0, o.jsx)(p.A, (0, a.A)((0, r.A)({
                    onChange: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.filter((function(e) {
                            return !d()(e)
                        }));
                        (d()(e) || (null === e || void 0 === e ? void 0 : e.length) > 1 && d()(null === e || void 0 === e ? void 0 : e[(null === e || void 0 === e ? void 0 : e.length) - 1])) && (t = void 0), u(t), E(t), D(void 0)
                    },
                    value: null !== V && void 0 !== V ? V : [""],
                    renderFn: function(e) {
                        var t = e.selects;
                        return (0, o.jsx)(S, {
                            value: t,
                            paymentMethodOptions: L
                        })
                    },
                    searchPlaceholder: P(_.o.search),
                    placeholder: P("c2c-ui-trade-filter-allpay"),
                    wrapperType: B ? "drawer" : "dropdown",
                    onSearchFn: D,
                    searchValue: F,
                    type: b
                }, g), {
                    children: null === I || void 0 === I ? void 0 : I.map((function(e, r) {
                        return (0, o.jsx)(p.A.Option, {
                            value: null !== (t = e.value) && void 0 !== t ? t : "",
                            title: e.label,
                            optionCheckIcon: "single" === b,
                            children: (0, o.jsxs)(m.A, {
                                className: "w-full items-center body2",
                                children: ["multi" === b && (0, o.jsx)(h.A, {
                                    className: "mr-4xs [&_.bn-checkbox-icon]:text-[14px]",
                                    value: "",
                                    checked: null !== (n = j(V, null === e || void 0 === e ? void 0 : e.value)) && void 0 !== n && n || "undefined" === typeof(null === e || void 0 === e ? void 0 : e.value) && "undefined" === typeof V
                                }), (0, o.jsx)(v.Ay, {
                                    className: "w-[3px] h-[8px] mr-4xs rounded-2xs",
                                    style: {
                                        backgroundColor: e.bgColor
                                    }
                                }), (0, o.jsx)(T, {
                                    value: e,
                                    maxLabelLength: 30
                                })]
                            })
                        }, (null === e || void 0 === e ? void 0 : e.label) && e.value ? "".concat(e.label, " - ").concat(e.value) : r)
                    }))
                }))
            }
        },
        Qbaw: (e, t, n) => {
            n.d(t, {
                x: () => u
            });
            var r = n("DTvD"),
                a = n("cNVJ"),
                i = n("uXxH"),
                l = n("fU5Q"),
                o = "c2c-menu-ssbt",
                s = "c2c-menu-ssct",
                c = "c2c-menu-ssgc",
                u = function() {
                    var e, t = (0, a.d4)((function(e) {
                            return e.tradeV2
                        })).fiat,
                        n = (0, i.Gc)(t, {
                            enabled: !!t
                        }),
                        u = (0, r.useState)(!1),
                        d = u[0],
                        f = u[1],
                        v = (0, r.useState)(!1),
                        m = v[0],
                        p = v[1],
                        h = (0, r.useState)(!1),
                        y = h[0],
                        b = h[1];
                    return (0, r.useEffect)((function() {
                        var e;
                        f("true" === (null === window || void 0 === window || null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem(o))), p("true" === (null === window || void 0 === window ? void 0 : window.localStorage.getItem(s))), b("true" === (null === window || void 0 === window ? void 0 : window.localStorage.getItem(c)))
                    }), []), (0, r.useEffect)((function() {
                        var e, r, a, i, u, d, v, m, h;
                        if ("undefined" !== typeof t && n.isSuccess) {
                            var y = !!(null === n || void 0 === n || null === (e = n.data) || void 0 === e || null === (r = e.data) || void 0 === r || null === (a = r.areas) || void 0 === a ? void 0 : a.find((function(e) {
                                return e.area === l.G.Block
                            })));
                            window.localStorage.setItem(o, String(y)), f(y);
                            var x = !!(null === n || void 0 === n || null === (i = n.data) || void 0 === i || null === (u = i.data) || void 0 === u || null === (d = u.areas) || void 0 === d ? void 0 : d.find((function(e) {
                                return e.area === l.G.Cash
                            })));
                            window.localStorage.setItem(s, String(x)), p(x);
                            var g = !!(null === n || void 0 === n || null === (v = n.data) || void 0 === v || null === (m = v.data) || void 0 === m || null === (h = m.areas) || void 0 === h ? void 0 : h.find((function(e) {
                                return e.area === l.G.GiftCard
                            })));
                            window.localStorage.setItem(c, String(g)), b(g)
                        }
                    }), [null === n || void 0 === n || null === (e = n.data) || void 0 === e ? void 0 : e.data, null === n || void 0 === n ? void 0 : n.isSuccess, t]), {
                        shouldShowBlockMarket: d,
                        shouldShowCashMarket: m,
                        shouldShowGiftCard: y
                    }
                }
        },
        "o/qg": (e, t, n) => {
            n.d(t, {
                A: () => x
            });
            var r = n("BK7R"),
                a = n("TrCV"),
                i = n("DTvD"),
                l = n("wgY5"),
                o = n.n(l),
                s = n("LCuF"),
                c = n("yhUQ"),
                u = n("cJDP"),
                d = n("HDxn"),
                f = n("a75W"),
                v = n("1eoB"),
                m = n("eM92"),
                p = n("HcTV"),
                h = n("VIal"),
                y = n("cNVJ"),
                b = function(e) {
                    var t = e.onClose,
                        n = e.onConfirm,
                        r = e.type,
                        l = e.confirmTrackingId,
                        f = (0, p.Ay)().t,
                        b = (0, y.Qs)().isMobile,
                        x = (0, i.useState)("-:-:-"),
                        g = x[0],
                        A = x[1],
                        w = (0, h.A)(),
                        _ = w.buyTypeAdvOnlineEndTime,
                        k = w.buyTypeAdvPublishEndTime,
                        C = w.buyTypeAdvUpdateEndTime,
                        N = w.buyOrderEndTime,
                        T = (0, i.useMemo)((function() {
                            if (["publish_buy", "update_buy", "update_online_status_buy", "duplicate_buy"].includes(r)) {
                                var e = function() {
                                    switch (r) {
                                        case "duplicate_buy":
                                        case "publish_buy":
                                            return k;
                                        case "update_buy":
                                            return C;
                                        case "update_online_status_buy":
                                            return _;
                                        default:
                                            return
                                    }
                                }();
                                if ("undefined" !== typeof e) return o()(e).format("YYYY-MM-DD HH:MM")
                            }
                        }), [r, _, k, C]),
                        j = (0, i.useMemo)((function() {
                            switch (r) {
                                case "publish_buy":
                                case "update_buy":
                                case "update_online_status_buy":
                                case "duplicate_buy":
                                    return f("c2c-user-ui-before-manipulate-ads-alert-modal-publish-buy-ads-restricted-message-v2", {
                                        "YYYY-MM-DD HH:MM": null !== T && void 0 !== T ? T : "-"
                                    });
                                case "can_buy":
                                    return f("c2c-user-ui-before-manipulate-ads-alert-modal-can-buy-ads-restricted-message", {
                                        duration: g
                                    });
                                default:
                                    return
                            }
                        }), [g, T, r, f]);
                    (0, i.useEffect)((function() {
                        var e = null;
                        return N && "can_buy" === r && (e = setInterval((function() {
                                var e = o()(N).diff(o()());
                                A("".concat(Math.floor(o().duration(e).asHours()), ":").concat(o()(e).format("mm:ss")))
                            }), 1e3)),
                            function() {
                                null !== e && clearInterval(e)
                            }
                    }), [N, r]);
                    var S = ["publish_buy", "update_buy", "update_online_status_buy"].includes(r);
                    return (0, a.jsxs)(s.A, {
                        children: [(0, a.jsx)(s.A, {
                            mb: 3,
                            sx: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: (0, a.jsx)(v.A, {
                                size: b ? 60 : 96
                            })
                        }), (0, a.jsx)(c.A, {
                            variant: "body1",
                            sx: {
                                fontSize: ["14px", "16px"],
                                lineHeight: ["24px", "20px"]
                            },
                            mb: 3,
                            textAlign: "center",
                            children: j
                        }), (0, a.jsxs)(s.A, {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, a.jsx)(u.A, {
                                id: l,
                                sz: "normal",
                                onClick: function() {
                                    n && n(), t()
                                },
                                children: f(m.o.ok)
                            }), S && (0, a.jsx)(d.A, {
                                href: "/myads?code=history",
                                children: (0, a.jsx)(u.A, {
                                    sz: "normal",
                                    variant: "text",
                                    mr: 2,
                                    mt: "ls",
                                    width: "100%",
                                    children: f("c2c-user-ui-before-manipulate-ads-alert-modal-check-close-ad")
                                })
                            })]
                        })]
                    })
                };
            b.open = function(e) {
                var t = (0, f.aF)({
                    content: (0, a.jsx)(b, (0, r.A)({
                        onClose: function() {
                            e.onClose && e.onClose(), t()
                        }
                    }, e)),
                    needCloseIcon: !1,
                    sx: {
                        width: ["308px", "370px"]
                    }
                }).close;
                return {
                    close: t
                }
            };
            const x = b
        },
        "62EF": (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var r = n("sViW"),
                a = n("0GOp"),
                i = n.n(a),
                l = n("nocm"),
                o = n("wYc8");
            const s = function() {
                var e = (0, r.A)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.t, e.next = 3, (0, o.A)({
                                    title: n("c2c-ui-2fa-goBack"),
                                    message: n("c2c-ui-2fa-popup-message"),
                                    confirmText: n("c2c-ui-pc-post-requirement-dialog-btn-enable"),
                                    cancelText: n("c2c-ui-pc-post-requirement-dialog-btn-cancel"),
                                    needCloseIcon: !0
                                });
                            case 3:
                                e.sent && window.open("".concat(l.A.MAIN_HOST, "/my/security"));
                            case 5:
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
        UEbX: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("DTvD"),
                a = n("x9UB"),
                i = n("LbQe");
            const l = function(e) {
                var t, n = e.deferTimeInMs,
                    l = void 0 === n ? 0 : n,
                    o = (0, r.useState)(0 === l),
                    s = o[0],
                    c = o[1],
                    u = (0, a.k)().isLoggedIn,
                    d = (0, i.s)({
                        page: 1,
                        rows: 1
                    }, {
                        enabled: Boolean(u) && s
                    }).data;
                return (0, r.useEffect)((function() {
                    if (0 !== l) {
                        var e = setTimeout((function() {
                            c(!0)
                        }), l);
                        return function() {
                            e && clearTimeout(e)
                        }
                    }
                }), [l]), {
                    hasFrozenAsset: (null === d || void 0 === d || null === (t = d.data) || void 0 === t ? void 0 : t.length) >= 1,
                    total: null === d || void 0 === d ? void 0 : d.total
                }
            }
        },
        AiXw: (e, t, n) => {
            n.d(t, {
                A: () => De
            });
            var r = n("TrCV"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Lp65"),
                o = n("eeEA"),
                s = n("YiNW"),
                c = n("OFK0"),
                u = n("x9UB"),
                d = n("cNVJ"),
                f = n("B4SR"),
                v = n("3fwp"),
                m = n("f2u4"),
                p = n("YWmI"),
                h = n("nn0X"),
                y = n("m8Z7"),
                b = n("nocm"),
                x = n("HcTV"),
                g = n("BK7R"),
                A = n("QUKP"),
                w = n("gZfF"),
                _ = n("wgY5"),
                k = n.n(_),
                C = n("wE/D");
            const N = function(e) {
                var t = e.prodDate,
                    n = (0, w.A)(e, ["prodDate"]),
                    a = k()(t);
                return a.isValid() ? (a.add(14, "days"), k()().isAfter(a) ? null : (0, r.jsx)(C.A, (0, A.A)((0, g.A)({}, n), {
                    alt: "new-badge",
                    src: "icon-new-badge.svg"
                }))) : null
            };
            var T, j = n("8RRA"),
                S = n("Qbaw"),
                V = function(e) {
                    var t = e.linkType,
                        n = void 0 === t ? "" : t,
                        i = (0, x.Ay)().t,
                        s = (0, d.d4)((function(e) {
                            return e.tradeV2
                        })),
                        c = s.asset,
                        u = s.tradeType,
                        v = s.fiat,
                        g = (0, S.x)(),
                        A = g.shouldShowBlockMarket,
                        w = g.shouldShowCashMarket,
                        _ = g.shouldShowGiftCard,
                        k = (0, f.A)().getFlag,
                        C = (0, d.Qs)().isMobile,
                        T = (0, h.dY)().getCurrency,
                        V = k(),
                        E = b.A.site().wwwBinance,
                        M = (0, a.useMemo)((function() {
                            var e, t, n = function() {
                                    try {
                                        return j.b.get()
                                    } catch (e) {
                                        return {
                                            fiat: void 0,
                                            asset: void 0
                                        }
                                    }
                                }(),
                                r = null !== (e = null === n || void 0 === n ? void 0 : n.fiat) && void 0 !== e ? e : v && "" !== v ? v : T,
                                a = {
                                    key: "trade",
                                    title: i("c2c-ui-p2p"),
                                    link: "/trade/".concat(y.R, "/").concat(r ? "?fiat=".concat(r) : "")
                                },
                                l = {
                                    key: "quickTrade",
                                    title: i("c2c-ui-express"),
                                    link: r ? "/express/".concat(u || "buy", "/").concat(null !== (t = null === n || void 0 === n ? void 0 : n.asset) && void 0 !== t ? t : c || "USDT", "/").concat(r) : "/express/"
                                },
                                o = {
                                    key: "blockTrade",
                                    title: i("c2c-ui-navBar-block"),
                                    link: "/blockTrade/buy".concat(r ? "?fiat=".concat(r) : "")
                                },
                                s = {
                                    key: "cashTrade",
                                    title: i("c2c-ui-navBar-cash-trade"),
                                    link: "/cash/".concat(u || "buy", "/").concat(c || "USDT", "/").concat(null !== r && void 0 !== r ? r : "CNY")
                                },
                                d = {
                                    key: "passTrade",
                                    title: i("c2c-ui-express"),
                                    link: "/pass"
                                },
                                f = {
                                    key: "giftCard",
                                    title: i("c2c-ui-gift-card", "Gift Card"),
                                    link: "/gift-card/cash-pickup/stores",
                                    subDomain: "www",
                                    showNewBadge: !0,
                                    prodDate: "2023-06-07"
                                };
                            return [V ? d : l, !V && a, !V && (A ? o : null), !V && w ? s : null, !V && _ ? f : null].filter(Boolean)
                        }), [v, T, i, u, c, E, V, A, w, _]),
                        F = (0, a.useMemo)((function() {
                            var e = M.findIndex((function(e) {
                                return e.key === n
                            }));
                            return -1 === e ? 1 : e
                        }), [M, n]);
                    return V ? (0, r.jsx)(o.Ay, {
                        className: "h-full py-2xs subtitle1 text-tertiaryText",
                        children: i("c2c-ui-p2p")
                    }) : (0, r.jsx)(o.Ay, {
                        className: "relative h-full pt-2xs",
                        children: (0, r.jsx)(l.A, {
                            className: "flex-grow h-full",
                            children: M && (0, r.jsx)(m.A, {
                                selectedIndex: F,
                                variant: "default",
                                showSlideMasks: !0,
                                children: M.map((function(e) {
                                    var t, n, a = e.key,
                                        i = e.title,
                                        l = e.link,
                                        s = e.showNewBadge,
                                        c = e.prodDate,
                                        u = e.subDomain;
                                    return (0, r.jsx)(m.A.TabPane, {
                                        tabNode: (0, r.jsxs)(r.Fragment, {
                                            children: [(n = l, /^https?:\/\/.+$/.test(n) ? (0, r.jsx)(o.Ay, {
                                                className: "subtitle1 leading-9",
                                                as: "a",
                                                href: null === l || void 0 === l || null === (t = l.toString) || void 0 === t ? void 0 : t.call(l),
                                                children: i
                                            }) : (0, r.jsx)(p.A, {
                                                path: l,
                                                className: "subtitle1 leading-9",
                                                subDomain: u,
                                                children: i
                                            })), s && !C && (0, r.jsx)(N, {
                                                className: "w-[35px] h-[16px] ml-1",
                                                prodDate: c
                                            })]
                                        })
                                    }, a)
                                }))
                            })
                        })
                    })
                },
                E = n("lMB8"),
                M = n("7+bj"),
                F = n("BK9r"),
                D = n("cTLW"),
                B = n("R9AY"),
                P = n("VIal"),
                L = n("zUKr"),
                I = function(e) {
                    var t = e.prodDate,
                        n = (0, w.A)(e, ["prodDate"]),
                        a = k()(t);
                    return a.isValid() ? (a.add(14, "days"), k()().isAfter(a) ? null : (0, r.jsx)(o.Ay, (0, A.A)((0, g.A)({}, n), {
                        as: "img",
                        alt: "new-badge",
                        src: "".concat(L.K5, "/static/images/c2c/icon-new-badge.svg")
                    }))) : null
                },
                z = n("9fmR"),
                R = n("aMHo"),
                O = n("iOkY"),
                H = n("e7Vs"),
                U = n("tEf9"),
                K = n("fMvB"),
                Y = n("S8bp"),
                G = n("8fYl"),
                W = n("f3Gl"),
                q = n("UEbX"),
                Q = n("URRj"),
                J = n("14bH"),
                Z = function(e) {
                    var t = e.itemConfig,
                        n = (0, w.A)(e, ["itemConfig"]),
                        a = /^https?:\/\/.+$/.test(t.href);
                    if (a) {
                        var i = t.href,
                            l = t.target,
                            s = (0, w.A)(t, ["href", "target"]);
                        return (0, r.jsx)(o.Ay, (0, g.A)({
                            as: "a",
                            target: l,
                            href: i
                        }, s, n))
                    }
                    if (!a && (null === t || void 0 === t ? void 0 : t.href)) {
                        var c = t.href,
                            u = t.target,
                            d = (0, w.A)(t, ["href", "target"]),
                            f = (n.onClick, (0, w.A)(n, ["onClick"]));
                        return (null === t || void 0 === t ? void 0 : t.subDomain) ? (0, r.jsx)(p.A, (0, g.A)({
                            path: t.href,
                            subDomain: null === t || void 0 === t ? void 0 : t.subDomain,
                            target: null !== u && void 0 !== u ? u : "_blank"
                        }, d, f)) : (0, r.jsx)(J.N, (0, g.A)({
                            to: c,
                            target: u,
                            prefetch: !0
                        }, d, f))
                    }
                    var v = n.onClick,
                        m = (0, w.A)(n, ["onClick"]);
                    return v ? (0, r.jsx)(o.Ay, (0, g.A)({
                        onClick: v
                    }, m)) : (0, r.jsx)(o.Ay, (0, g.A)({}, m))
                };
            ! function(e) {
                e.UserCenter = "C2CofferList_btn_userCenter", e.Orders = "C2CofferList_btn_order", e.Faq = "p2p_web_help_center_option_trading_FAQ", e.Video = "p2p_web_help_center_option_video_tutorial", e.BeginnerGuide = "p2p_web_help_center_option_placing_an_order", e.Payments = "C2CofferList_dropdown_payments", e.PostAdv = "C2CofferList_dropdown_postads", e.MyAdv = "C2CofferList_dropdown_myads", e.UserGuide = "C2CofferList_btn_USER_GUIDE", e.More = "C2CofferList_btn_more", e.MobileMore = "C2CofferList_btn_mobile_more", e.SwapHistory = "C2CofferList_swap_history", e.BuySellGuide = "p2p_web_help_center_option_how_to_buy_sell", e.Chat = "C2CofferList_btn_chat"
            }(T || (T = {}));
            var X = (0, c.A)((function() {
                    return n.e(2774).then(n.bind(n, "Oz2u"))
                }), {
                    webpack: function() {
                        return ["Oz2u"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                $ = (0, c.A)((function() {
                    return Promise.all([n.e(2819), n.e(859)]).then(n.bind(n, "h/9m"))
                }), {
                    webpack: function() {
                        return ["h/9m"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                ee = function() {
                    var e = (0, Q.A)({}).total;
                    if (!(e <= 0)) return (0, r.jsx)(l.A, {
                        className: "ml-4xs bg-btnBg rounded-large px-2xs text-textOnYellow transition caption3 ",
                        children: e > 99 ? "99+" : e
                    })
                },
                te = function() {
                    var e = K.s().data,
                        t = (null === e || void 0 === e ? void 0 : e.data.unreadChatCount) || 0;
                    if (!(t <= 0)) return (0, r.jsx)(l.A, {
                        className: "ml-4xs bg-btnBg rounded-large px-2xs text-textOnYellow transition caption3",
                        children: t > 99 ? "99+" : t
                    })
                },
                ne = function(e) {
                    var t, n = e.menuItem,
                        c = e.handleOnClick,
                        u = (0, d.Qs)().isDesktop,
                        v = (0, (0, f.A)().getFlag)(),
                        m = (0, a.useState)([]),
                        p = m[0],
                        h = m[1],
                        y = (0, q.A)({
                            deferTimeInMs: 3e3
                        }),
                        b = function(e) {
                            "undefined" !== typeof e && (0, W.u)("webClick", {
                                pageName: "header",
                                elementID: e
                            })
                        };
                    return n.key === T.Orders && u && !v ? (0, r.jsx)(X, {
                        id: n.key
                    }) : n.key === T.UserCenter && u && !v && (null === y || void 0 === y ? void 0 : y.hasFrozenAsset) ? (0, r.jsx)(Y.A, {
                        theme: G.A,
                        children: (0, r.jsx)($, {
                            total: null === y || void 0 === y ? void 0 : y.total
                        })
                    }) : n.subMenu ? (0, r.jsx)(o.Ay, {
                        className: "cursor-pointer",
                        id: n.key,
                        children: n.subMenu.map((function(e) {
                            return (0, r.jsx)(i().Fragment, {
                                children: e.subMenu ? (0, r.jsxs)(o.Ay, {
                                    onClick: function() {
                                        var t;
                                        t = e.key, p.includes(t) ? h((function(e) {
                                            return e.filter((function(e) {
                                                return e !== t
                                            }))
                                        })) : h((function(e) {
                                            return (0, U.A)(e).concat([t])
                                        })), b(e.key)
                                    },
                                    id: e.key,
                                    children: [(0, r.jsxs)(l.A, {
                                        className: "\n                    justify-between text-secondaryText active:text-primaryText hover:text-primaryText pc:text-tertiaryText pc:active:text-textPrimary pc:hover:text-textPrimary\n                    h-[48px] px-xl items-center hover:bg-old-bg3 hover:text-textPrimary transition\n                  ",
                                        children: [(0, r.jsxs)(l.A, {
                                            className: "items-center gap-3 subtitle2",
                                            children: [(0, r.jsx)(l.A, {
                                                children: e.icon
                                            }), (0, r.jsx)(o.Ay, {
                                                children: e.title
                                            })]
                                        }), (0, r.jsx)(M.A, {
                                            className: (0, s.cn)("w-[18px] h-[18px]", {
                                                "rotate-180": p.includes(e.key),
                                                "rotate-0": !p.includes(e.key)
                                            })
                                        })]
                                    }), p.includes(e.key) && (0, r.jsx)(l.A, {
                                        className: "flex-col pl-xl",
                                        children: e.subMenu.map((function(e, n) {
                                            return (0, r.jsx)(Z, {
                                                className: "py-s",
                                                id: null === e || void 0 === e ? void 0 : e.key,
                                                itemConfig: e,
                                                onClick: function(t) {
                                                    (null === e || void 0 === e ? void 0 : e.onClick) && (null === e || void 0 === e || e.onClick()), b(null === e || void 0 === e ? void 0 : e.key), c(e)
                                                },
                                                children: (0, r.jsx)(o.Ay, {
                                                    className: "body3 text-secondaryText active:text-primaryText hover:text-primaryText pc:text-tertiaryText pc:active:text-primaryText pc:hover:text-primaryText transition",
                                                    children: e.title
                                                })
                                            }, null !== (t = null === e || void 0 === e ? void 0 : e.key) && void 0 !== t ? t : n)
                                        }))
                                    })]
                                }) : (0, r.jsxs)(Z, {
                                    id: null === e || void 0 === e ? void 0 : e.key,
                                    itemConfig: e,
                                    className: "subtitle2 text-secondaryText active:text-primaryText hover:text-primaryText pc:text-tertiaryText pc:active:text-primaryText pc:hover:text-primaryText h-[48px] px-[24px] items-center cursor flex hover:bg-vessel active:bg-vessel transition",
                                    onClick: function(t) {
                                        (null === e || void 0 === e ? void 0 : e.onClick) && (null === e || void 0 === e || e.onClick()), b(null === e || void 0 === e ? void 0 : e.key), c(e)
                                    },
                                    children: [(0, r.jsx)(l.A, {
                                        children: e.icon
                                    }), (0, r.jsxs)(R.A, {
                                        show: null === e || void 0 === e ? void 0 : e.showNoticeDot,
                                        variant: "dot",
                                        theme: "primary",
                                        children: [(0, r.jsx)(o.Ay, {
                                            className: "ml-2xs",
                                            children: e.title
                                        }), e.key !== T.Orders || v ? null : (0, r.jsx)(ee, {}), e.key === T.Chat ? (0, r.jsx)(te, {}) : null]
                                    })]
                                }, null === e || void 0 === e ? void 0 : e.key)
                            }, e.key)
                        }))
                    }) : null
                },
                re = function(e) {
                    var t, n = e.clickShowPostAdDialog,
                        i = e.setShowVideoDialog,
                        c = e.menuItem,
                        u = (0, a.useState)(!1),
                        v = u[0],
                        m = u[1],
                        p = (0, F.rd)(),
                        x = (0, F.K7)().pathname,
                        g = b.A.site().postAd,
                        A = (0, d.Qs)(),
                        w = A.isDesktop,
                        _ = A.isMobile,
                        k = (0, a.useRef)(),
                        C = (0, B.A)({
                            authed: !1
                        }).getPermission,
                        N = (0, f.A)().getFlag,
                        j = (0, P.A)().checkUserCanManipulateAdBeforeAction,
                        S = N(),
                        V = (0, h.dY)().getCurrency,
                        L = (0, d.d4)((function(e) {
                            return e.tradeV2
                        })),
                        U = L.fiat,
                        K = L.tradeType,
                        Y = L.asset,
                        G = (0, O.Jw)().open,
                        W = function(e) {
                            switch (e.key) {
                                case T.PostAdv:
                                    C((function(e) {
                                        var t = e.advClassifies,
                                            r = void 0 === t ? [] : t,
                                            a = function() {
                                                r.includes(D.bc.Block) || r.includes(D.bc.Cash) || r.includes(D.bc.FiatTrade) ? n(r) : p.push(g)
                                            };
                                        j({
                                            actionType: "publish_buy",
                                            action: a,
                                            onConfirm: a
                                        })
                                    }), {
                                        onCallApi: function() {
                                            H.A.logCounter("c2c_metrics_v1_ad_publish_check_user_api_request", {
                                                side: K,
                                                fiat: U,
                                                asset: Y
                                            })
                                        },
                                        onCallSuccess: function() {
                                            H.A.logCounter("c2c_metrics_v1_ad_publish_check_response_success", {
                                                side: K,
                                                fiat: U,
                                                asset: Y
                                            })
                                        }
                                    });
                                    break;
                                case T.Video:
                                    i(!0);
                                    break;
                                case T.BeginnerGuide:
                                    x.includes("/trade/") ? G() : (z.l.setItem("force_show"), window.location.href = "/trade/".concat(y.R, "/?fiat=").concat(U && "" !== U ? U : V))
                            }
                            m(!1)
                        };
                    return (0, r.jsx)(l.A, {
                        ref: k,
                        className: "h-full flex-shrink-0 mobile:[&_.bn-bubble]:w-full mobile:[&_.bn-bubble_>_.bn-bubble-content]:w-full hover:text-textLink",
                        onMouseEnter: function() {
                            return m(!0)
                        },
                        onMouseLeave: function() {
                            return m(!1)
                        },
                        children: (0, r.jsx)(E.A, {
                            className: "\n          h-full flex items-center cursor-pointer \n          [&_.bn-tooltips_>_.bn-bubble-content]:rounded-t-none noMob:[&_.bn-tooltips_>_.bn-bubble-content]:min-w-[248px]\n          [&_.shadow]:shadow-none\n          [&.bn-tooltips-wrap.active]:text-textLink\n        ",
                            placement: null !== (t = null === c || void 0 === c ? void 0 : c.placement) && void 0 !== t ? t : "bottom-end",
                            trigger: "hover",
                            enablePortal: _,
                            portalNode: k.current,
                            open: v,
                            overlay: (0, r.jsx)(ne, {
                                menuItem: c,
                                handleOnClick: W
                            }),
                            offset: 0,
                            children: (0, r.jsx)(l.A, {
                                className: "items-center",
                                onClick: function() {
                                    S && K === D.nP.Buy && c.key === T.Video ? W(c) : m(!v)
                                },
                                children: (0, r.jsx)(Z, {
                                    className: "no-underline flex items-center",
                                    itemConfig: c,
                                    children: (0, r.jsx)(R.A, {
                                        variant: "dot",
                                        theme: "primary",
                                        show: c.showNoticeDot,
                                        children: (0, r.jsxs)(l.A, {
                                            className: "subtitle2 items-center relative",
                                            children: [(0, r.jsx)(l.A, {
                                                children: c.icon
                                            }), (0, r.jsx)(o.Ay, {
                                                className: "ml-1",
                                                children: !_ && c.title
                                            }), c.key !== T.Orders || S ? null : (0, r.jsx)(ee, {}), c.key === T.Chat ? (0, r.jsx)(te, {}) : null, c.showNewBadge && w ? (0, r.jsx)(I, {
                                                className: "w-[35px] h-[16px]",
                                                prodDate: c.prodDate
                                            }) : null, c.subMenu ? (0, r.jsx)(M.A, {
                                                size: 18,
                                                className: (0, s.cn)("pc:ml-2 pc:text-primaryText", {
                                                    "rotate-180": v,
                                                    "rotate-0": !v
                                                })
                                            }) : null]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                ae = n("dyy5"),
                ie = n("B35M"),
                le = n("wIZF"),
                oe = n("Y4uf");
            const se = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M11 8.2a4 4 0 00-4-4H3v14h5.16c1.193 0 2.243.635 2.86 1.6h1.96c.617-.965 1.668-1.6 2.86-1.6H21v-14h-4a4 4 0 00-4 4v8h-2v-8z",
                    fill: "currentColor"
                }))
            };
            var ce = n("Q+Qy");
            const ue = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.896 3h14v18h-14V3zm11 13v2h-8v-2h8zm-8-3h8V6h-8v7zm6-5h-4v3h4V8z",
                    fill: "currentColor"
                }))
            };
            const de = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.456 8V5h-18v3h18zm-9 10c0 .34.028.675.083 1H3.456v-9h18v2.803a6 6 0 00-9 5.197zm10 0a4 4 0 11-8 0 4 4 0 018 0zm-4.75-2.5v1.75h-1.75v1.5h1.75v1.75h1.5v-1.75h1.75v-1.5h-1.75V15.5h-1.5z",
                    fill: "currentColor"
                }))
            };
            var fe = n("jibv");
            const ve = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 3h14v18l-3.5-3-3.5 3-3.5-3L5 21V3zm3 4h4v2.5H8V7zm4 5H8v2.5h4V12zm2-5h2.5v2.5H14V7zm2.5 5H14v2.5h2.5V12z",
                    fill: "currentColor"
                }))
            };
            const me = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.096 5h2.082l-3.081-3-3.082 3h2.081v3.5h2V5zM3.597 7a4 4 0 118 0 4 4 0 01-8 0zm5.648 0L7.598 8.647 5.95 7l1.647-1.647L9.245 7zm1.352 8.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm7.75 0l-2.25 2.25-2.25-2.25 2.25-2.25 2.25 2.25zM8.597 19v-6.5h-2V19H4.515l3.082 3 3.081-3h-2.08z",
                    fill: "currentColor"
                }))
            };
            const pe = function(e) {
                return i().createElement(oe.A, (0, le.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z",
                    fill: "currentColor"
                }))
            };
            var he = n("J6Ge"),
                ye = n("3kJa"),
                be = n("XEAC"),
                xe = n("MwrP"),
                ge = n.n(xe),
                Ae = n("/W+I"),
                we = n("2voF"),
                _e = n("Pofy"),
                ke = n("8v/2"),
                Ce = n("5KL5"),
                Ne = n("/9cV"),
                Te = n("X4b0"),
                je = n("JyHn"),
                Se = (0, c.A)((function() {
                    return Promise.resolve().then(n.bind(n, "vwHN"))
                }), {
                    webpack: function() {
                        return ["vwHN"]
                    },
                    ssr: !1
                });
            const Ve = function() {
                var e = (0, je.Z)(),
                    t = e.openModal,
                    n = e.closeModal;
                return {
                    open: function() {
                        t({
                            maskClose: !0,
                            content: (0, r.jsxs)(o.Ay, {
                                className: "relative w-full h-full",
                                children: [(0, r.jsx)(Se, {}), (0, r.jsx)(Te.A, {
                                    className: "w-[24px] h-[24px] top-[16px] right-[16px] absolute text-basicBg cursor-pointer",
                                    onClick: n
                                })]
                            }),
                            className: "[&_.bn-modal-wrap]:tablet:w-[800px] [&_.bn-modal-wrap]:w-full"
                        })
                    },
                    close: n
                }
            };
            n("vwHN");
            var Ee = (0, c.A)((function() {
                    return n.e(1956).then(n.bind(n, "QOjX"))
                }), {
                    webpack: function() {
                        return ["QOjX"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                Me = function(e) {
                    var t, n = e.linkType,
                        i = e.needSticky,
                        c = (0, a.useState)(!1),
                        m = c[0],
                        p = c[1],
                        y = (0, a.useState)([]),
                        w = y[0],
                        _ = y[1],
                        k = (0, (0, f.A)().getFlag)(),
                        C = (0, v.aO)().data,
                        N = null === C || void 0 === C || null === (t = C.data) || void 0 === t ? void 0 : t.fiatTradeMerchant,
                        j = Ve(),
                        S = (0, u.k)().isLoggedIn,
                        E = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                a = (0, x.Ay)().t,
                                i = b.A.site().userCenter,
                                l = (0, ke.r)().blockGuide,
                                o = (0, Ce.B)(),
                                s = Ae.M().data,
                                c = we.g3({
                                    page: 1,
                                    rows: 1
                                }, {
                                    staleTime: 1 / 0,
                                    cacheTime: 1 / 0
                                }).data,
                                u = !!(null === c || void 0 === c ? void 0 : c.total) && c.total > 0,
                                f = null === s || void 0 === s || null === (e = s.data) || void 0 === e ? void 0 : e.homeContactListEnable,
                                v = (0, d.d4)((function(e) {
                                    var t;
                                    return null === e || void 0 === e || null === (t = e.tradeV2) || void 0 === t ? void 0 : t.asset
                                })),
                                m = (0, h.dY)().getCurrency,
                                p = ge()(v) ? null !== m && void 0 !== m ? m : "USDT" : v,
                                y = (0, q.A)({
                                    deferTimeInMs: 3e3
                                }).hasFrozenAsset,
                                w = {
                                    key: T.UserCenter,
                                    title: a("c2c-user-center-menu-title"),
                                    href: i,
                                    linkType: "userCenter",
                                    target: "_self",
                                    icon: (0, r.jsx)(ae.A, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    showNoticeDot: y
                                },
                                _ = {
                                    key: T.Orders,
                                    title: a("c2c-ui-trade-header-orders"),
                                    href: "/fiatOrder?tab=1",
                                    linkType: "fiatOrder",
                                    target: "_self",
                                    icon: (0, r.jsx)(ie.A, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    placement: "bottom-start"
                                },
                                k = {
                                    key: T.Faq,
                                    title: a("c2c-user-trade-FAQ"),
                                    href: "/support/announcement/360038038972",
                                    subDomain: "www",
                                    target: "_blank",
                                    icon: (0, r.jsx)(se, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                C = {
                                    key: T.Video,
                                    title: a("c2c-user-trade-menu-video"),
                                    icon: (0, r.jsx)(ce.A, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                N = {
                                    key: T.BeginnerGuide,
                                    title: a("c2c-user-trade-menu-beginner-guide"),
                                    icon: (0, r.jsx)(ue, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                j = {
                                    key: T.Payments,
                                    title: a("c2c-payment-methods-menu-title"),
                                    href: "".concat(i, "#payment"),
                                    target: "_self",
                                    icon: (0, r.jsx)(de, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                S = {
                                    key: T.PostAdv,
                                    title: a("c2c-ui-pc-myposts-btn-postNew"),
                                    needLogin: !0,
                                    icon: (0, r.jsx)(fe.A, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                V = {
                                    key: T.MyAdv,
                                    title: a("c2c-ui-pc-myposts-tab-myposts"),
                                    href: "/myads",
                                    needLogin: !0,
                                    target: "_self",
                                    icon: (0, r.jsx)(ve, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    linkType: "myAds"
                                },
                                E = {
                                    key: T.BuySellGuide,
                                    title: a("c2c-user-trade-menu-how-to-buy-sell"),
                                    icon: (0, r.jsx)(me, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    placement: "bottom-start",
                                    onClick: function() {
                                        return o.open({
                                            onFinish: function(e) {
                                                var t, n = (0, Ne.X7)({
                                                    tradeArea: _e.G.P2P,
                                                    fiat: null === e || void 0 === e ? void 0 : e.fiat,
                                                    asset: null !== (t = null === e || void 0 === e ? void 0 : e.asset) && void 0 !== t ? t : p,
                                                    tradeType: null === e || void 0 === e ? void 0 : e.tradeType,
                                                    paymentMethod: null === e || void 0 === e ? void 0 : e.payment
                                                });
                                                window.location.href = n.toString()
                                            }
                                        })
                                    }
                                },
                                M = {
                                    key: T.UserGuide,
                                    title: a("c2c-user-trade-menu-user-guide"),
                                    icon: (0, r.jsx)(pe, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    placement: "bottom-start",
                                    subMenu: t ? [C, k] : [E, N, C, k]
                                },
                                F = {
                                    key: T.SwapHistory,
                                    title: a("c2c-ui-dropdown-swap-history"),
                                    href: "/swapHistory",
                                    needLogin: !0,
                                    icon: (0, r.jsx)(he.A, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                D = {
                                    key: T.Chat,
                                    title: a("c2c-ui-order-history-chat"),
                                    href: "/chat",
                                    target: "_self",
                                    onClick: function() {
                                        return (0, W.u)("webClick", {
                                            elementId: "p2p_web_contactList_entry",
                                            pageName: "Contact List"
                                        })
                                    },
                                    icon: (0, r.jsx)(ye.A, {
                                        className: "h-[20px] w-[20px]"
                                    })
                                },
                                B = {
                                    key: T.More,
                                    title: a("c2c-ui-trade-more"),
                                    icon: (0, r.jsx)(be.A, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    subMenu: [j, S, V].concat((0, U.A)(n ? [F] : []), (0, U.A)(f && u && !l ? [M] : []), (0, U.A)(f && !u ? [D] : []))
                                },
                                P = {
                                    key: T.MobileMore,
                                    title: a("c2c-ui-trade-more"),
                                    icon: (0, r.jsx)(be.A, {
                                        className: "h-[20px] w-[20px]"
                                    }),
                                    showNoticeDot: y,
                                    subMenu: t ? [M, _] : [_].concat((0, U.A)(f ? [D] : []), [w, j, S, V], (0, U.A)(n ? [F] : []), [l ? void 0 : M]).filter(Boolean)
                                };
                            return {
                                NO_LOGIN: l ? [] : t ? [M] : [(0, A.A)((0, g.A)({}, M), {
                                    placement: "bottom-end"
                                })],
                                DESKTOP: t ? [M, _] : [(!f || !u) && !l && M, _, f && u && D, w, B].filter(Boolean),
                                MOBILE: [P]
                            }
                        }(k, N),
                        M = E.NO_LOGIN,
                        F = E.DESKTOP,
                        D = E.MOBILE,
                        B = (0, d.Qs)().isDesktop,
                        P = function(e) {
                            _(e), p(!0)
                        },
                        L = S ? B ? F : D : M;
                    return (0, r.jsxs)(l.A, {
                        className: (0, s.cn)("p2p-header bg-basicBg w-full justify-center border-b border-b-line", {
                            "sticky top-0 left-0 right-0 z-20": i,
                            "relative top-0": !i
                        }),
                        children: [(0, r.jsxs)(o.Ay, {
                            className: "container grid grid-cols-[1fr_max-content] gap-4xs",
                            children: [(0, r.jsx)(V, {
                                linkType: n
                            }), (0, r.jsx)(l.A, {
                                className: "gap-l items-center",
                                children: L.map((function(e) {
                                    return (0, r.jsx)(re, {
                                        menuItem: e,
                                        clickShowPostAdDialog: P,
                                        setShowVideoDialog: j.open,
                                        needSticky: !0
                                    }, null === e || void 0 === e ? void 0 : e.key)
                                }))
                            })]
                        }), (0, r.jsx)(Ee, {
                            visible: m,
                            classifies: null !== w && void 0 !== w ? w : [],
                            onClose: function() {
                                return p(!1)
                            }
                        })]
                    })
                },
                Fe = n("4P7N");
            const De = function(e) {
                var t = e.linkType,
                    n = void 0 === t ? "" : t,
                    a = e.sticky,
                    i = void 0 !== a && a;
                return (0, r.jsx)(Fe.A, {
                    ignoreDarkThemeWhistListRestriction: !0,
                    scope: !0,
                    children: (0, r.jsx)(Me, {
                        linkType: n,
                        needSticky: i
                    })
                })
            }
        },
        onwi: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var r = n("sViW"),
                a = n("0GOp"),
                i = n.n(a),
                l = n("TrCV"),
                o = n("DTvD"),
                s = n("Q755"),
                c = n("wgY5"),
                u = n.n(c),
                d = n("MwrP"),
                f = n.n(d),
                v = n("+bTb"),
                m = n("V3BA"),
                p = n("C6y2"),
                h = n("yhUQ"),
                y = n("cJDP"),
                b = n("cKr8"),
                x = n("afa+"),
                g = n("HcTV");
            const A = function(e) {
                var t = e.onCancel,
                    n = e.onOk,
                    a = e.notification,
                    c = (0, g.Ay)().t,
                    d = (0, o.useState)(!1),
                    A = d[0],
                    w = d[1],
                    _ = (0, o.useState)(!1),
                    k = _[0],
                    C = _[1],
                    N = (0, o.useState)(null),
                    T = N[0],
                    j = N[1],
                    S = (0, o.useState)(""),
                    V = S[0],
                    E = S[1],
                    M = (0, o.useState)({}),
                    F = M[0],
                    D = M[1],
                    B = function() {
                        var e = (0, r.A)(i().mark((function e() {
                            var t, n, r, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, w(!0), e.next = 4, (0, v.r9)(m.A.QUERY_USER_NICKNAME, {
                                            nicknameQueryType: "C2C"
                                        });
                                    case 4:
                                        t = e.sent, n = t.success, r = t.data, n && r && (a = r.nickname, D(r), a && E(a)), e.next = 12;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0);
                                    case 12:
                                        return e.prev = 12, w(!1), e.finish(12);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10, 12, 15]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = (0, o.useCallback)((0, r.A)(i().mark((function e() {
                        var r, l, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (V && V.trim()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (j(null), (null === F || void 0 === F ? void 0 : F.nickname) !== V.trim()) {
                                        e.next = 6;
                                        break
                                    }
                                    return t && t(), e.abrupt("return");
                                case 6:
                                    return C(!0), e.prev = 7, e.next = 10, (0, v.r9)(m.A.POST_USER_UPDATE_NICKNAME, {
                                        nickName: V,
                                        nicknameType: "C2C"
                                    });
                                case 10:
                                    r = e.sent, l = r.success, o = r.message, l ? (n(), a(c("c2c-ui-nickname-popup-success-message"), {
                                        variant: "success",
                                        autoHideDuration: 2e3,
                                        anchorOrigin: {
                                            horizontal: "right",
                                            vertical: "top"
                                        }
                                    })) : j(o), e.next = 18;
                                    break;
                                case 16:
                                    e.prev = 16, e.t0 = e.catch(7);
                                case 18:
                                    return e.prev = 18, C(!1), e.finish(18);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [7, 16, 18, 21]
                        ])
                    }))), [c, V, null === F || void 0 === F ? void 0 : F.nickname]);
                (0, s.A)((function() {
                    B()
                }));
                var L = (0, o.useMemo)((function() {
                        return c("c2c-ui-nickname-popup-description", {
                            limit_days: (null === F || void 0 === F ? void 0 : F.configPeriod) || 0
                        })
                    }), [c, null === F || void 0 === F ? void 0 : F.configPeriod]),
                    I = (0, o.useMemo)((function() {
                        var e = F.canEdit,
                            t = F.lastEditedTime,
                            n = F.configPeriod;
                        return !e && t ? c("c2c-ui-nickname-popup-input-description-2", {
                            last_edited: u()(t, "x").format("YYYY-MM-DD"),
                            limit_days: n || 0
                        }) : c("c2c-ui-nickname-popup-input-description-1")
                    }), [c, F]),
                    z = (0, o.useMemo)((function() {
                        return k || !V || V && V.trim().length < 1
                    }), [V, k]);
                return (0, l.jsx)(p.A, {
                    flexDirection: "column",
                    children: A || f()(F) ? (0, l.jsx)(b.A, {
                        size: 30,
                        marginX: "auto",
                        marginBottom: 18
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(h.A, {
                            color: "t.secondary",
                            sx: {
                                mb: "16px"
                            },
                            children: L
                        }), (0, l.jsx)(x.A, {
                            variant: "outlineLarge",
                            onChange: function(e) {
                                E(e.currentTarget.value)
                            },
                            value: V,
                            suffix: (0, l.jsx)(h.A, {
                                variant: "body2",
                                color: "t.disabled",
                                children: "".concat(V.length, "/").concat(20)
                            }),
                            label: c("c2c-ui-nickname-popup-input-label"),
                            labelFixed: !0,
                            placeholder: c("c2c-ui-nickname-popup-input-placeholder"),
                            infoText: I,
                            boxProps: {
                                sx: {
                                    mb: "24px",
                                    height: "40px"
                                }
                            },
                            disabled: !(null === F || void 0 === F ? void 0 : F.canEdit),
                            error: !!T,
                            errorText: T,
                            maxLength: 20
                        }), (0, l.jsx)(p.A, {
                            sx: {
                                mt: "24px"
                            },
                            children: (null === F || void 0 === F ? void 0 : F.canEdit) ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(y.A, {
                                    variant: "default",
                                    colorStyle: "secondary",
                                    onClick: function() {
                                        return t && t()
                                    },
                                    sz: "normal",
                                    sx: {
                                        flex: 1,
                                        mr: "8px"
                                    },
                                    disabled: k,
                                    id: "c2c_nickname_dialogSetNickname_btn_cancel",
                                    children: c("c2c-ui-nickname-popup-btn-cancel")
                                }), (0, l.jsx)(y.A, {
                                    variant: "default",
                                    colorStyle: "flatprimary",
                                    onClick: P,
                                    sz: "normal",
                                    sx: {
                                        flex: 1
                                    },
                                    disabled: z,
                                    id: "c2c_nickname_dialogSetNickname_btn_confirm",
                                    children: c("c2c-ui-nickname-popup-btn-confirm")
                                })]
                            }) : (0, l.jsx)(y.A, {
                                variant: "default",
                                colorStyle: "flatprimary",
                                onClick: function() {
                                    return t && t()
                                },
                                sz: "normal",
                                sx: {
                                    width: "100%"
                                },
                                children: c("c2c-ui-nickname-popup-btn-ok")
                            })
                        })]
                    })
                })
            }
        },
        "wE/D": (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("gZfF"),
                l = n("TrCV"),
                o = n("rLOQ"),
                s = n("zUKr");
            const c = function(e) {
                var t = e.src,
                    n = (0, i.A)(e, ["src"]);
                return (0, l.jsx)(o.A, (0, a.A)((0, r.A)({}, n), {
                    src: "".concat(s.K5, "/static/images/c2c/").concat(t)
                }))
            }
        },
        OWqk: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var r = n("BK7R"),
                a = n("gZfF"),
                i = n("TrCV"),
                l = n("DTvD"),
                o = n("qwJY"),
                s = n("QUKP"),
                c = n("eeEA"),
                u = n("Lp65"),
                d = n("Fxby"),
                f = n("YiNW"),
                v = n("HcTV"),
                m = n("eM92"),
                p = "mr-2xs rounded-circle flex-none bg-cardBg",
                h = function(e) {
                    var t = e.iconUrl,
                        n = e.currencyCode;
                    return t ? (0, i.jsx)(c.Ay, {
                        as: "img",
                        style: {
                            width: "20px",
                            height: "20px"
                        },
                        className: p,
                        src: t,
                        alt: n,
                        loading: "lazy"
                    }) : (0, i.jsx)(c.Ay, {
                        className: p,
                        style: {
                            width: "20px",
                            height: "20px"
                        }
                    })
                },
                y = function(e) {
                    var t = e.fiatList,
                        n = e.selected;
                    return t.map((function(e) {
                        return (0, i.jsx)(d.A.Option, {
                            value: e.currencyCode,
                            optionCheckIcon: !0,
                            disabled: (null === e || void 0 === e ? void 0 : e.currencyCode) === n,
                            className: "!text-primaryText",
                            children: (0, i.jsxs)(u.A, {
                                className: "items-center",
                                children: [(0, i.jsx)(h, {
                                    currencyCode: e.countryCode,
                                    iconUrl: e.iconUrl
                                }), (0, i.jsx)(c.Ay, {
                                    as: "span",
                                    children: e.currencyCode
                                })]
                            })
                        }, "fiat-list-".concat(e.currencyCode))
                    }))
                };
            const b = function(e) {
                var t = e.preferredFiat,
                    n = e.fiatList,
                    o = e.onChange,
                    p = e.className,
                    b = e.value,
                    x = (0, a.A)(e, ["preferredFiat", "fiatList", "onChange", "className", "value"]),
                    g = (0, v.Ay)().t,
                    A = (0, l.useState)(void 0),
                    w = A[0],
                    _ = A[1],
                    k = (0, l.useMemo)((function() {
                        return null === n || void 0 === n ? void 0 : n.sort((function(e, n) {
                            if ("undefined" !== typeof t) {
                                if ((null === e || void 0 === e ? void 0 : e.currencyCode) === t) return -1;
                                if ((null === n || void 0 === n ? void 0 : n.currencyCode) === t) return 1
                            }
                            return "".concat(e.currencyCode).localeCompare("".concat(n.currencyCode))
                        }))
                    }), [n, t]),
                    C = function(e) {
                        return e.filter((function(e) {
                            var t, n;
                            return "undefined" !== typeof e && ("undefined" === typeof w || (null === (n = null === e || void 0 === e || null === (t = e.currencyCode) || void 0 === t ? void 0 : t.toLowerCase()) || void 0 === n ? void 0 : n.includes(null === w || void 0 === w ? void 0 : w.toLowerCase())))
                        }))
                    }(k);
                return (0, l.useEffect)((function() {
                    var e;
                    (null === k || void 0 === k ? void 0 : k.length) && !(null === k || void 0 === k ? void 0 : k.find((function(e) {
                        return e.currencyCode === b
                    }))) && o && o(null === k || void 0 === k || null === (e = k[0]) || void 0 === e ? void 0 : e.currencyCode)
                }), [k, b]), (0, i.jsx)(d.A, (0, s.A)((0, r.A)({
                    searchPlaceholder: g(m.o.search),
                    renderFn: function(e) {
                        var t = e.selects;
                        return function(e) {
                            var t = e.selects,
                                n = e.fiatList,
                                r = null === t || void 0 === t ? void 0 : t[0],
                                a = null === n || void 0 === n ? void 0 : n.find((function(e) {
                                    return e.currencyCode === r
                                }));
                            return (0, i.jsxs)(u.A, {
                                className: "items-center",
                                children: [(0, i.jsx)(h, {
                                    currencyCode: null === a || void 0 === a ? void 0 : a.countryCode,
                                    iconUrl: null === a || void 0 === a ? void 0 : a.iconUrl
                                }), (0, i.jsx)(c.Ay, {
                                    as: "span",
                                    className: "subtitle2 mr-xs text-primaryText",
                                    children: null === a || void 0 === a ? void 0 : a.currencyCode
                                })]
                            })
                        }({
                            active: e.active,
                            selects: t,
                            fiatList: n
                        })
                    },
                    onSearchFn: _,
                    searchValue: w,
                    onChange: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e[0];
                        o(t), _(void 0)
                    },
                    className: (0, f.cn)("[&_.bn-bubble-content]:w-full", p),
                    value: [b]
                }, x), {
                    children: y({
                        fiatList: C
                    })
                }))
            };
            var x = n("cNVJ"),
                g = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        l = (0, a.A)(e, ["value", "onChange"]),
                        s = (0, o.MN)().data,
                        c = (void 0 === s ? {} : s).data,
                        u = void 0 === c ? [] : c,
                        d = (0, x.Qs)().isMobile;
                    return (0, i.jsx)(b, (0, r.A)({
                        id: "C2Cfiatfilter_searchbox_fiat",
                        fiatList: u,
                        value: null !== t && void 0 !== t ? t : "",
                        onChange: n,
                        wrapperType: d ? "drawer" : "dropdown"
                    }, l))
                };
            const A = (0, l.memo)(g)
        },
        iOkY: (e, t, n) => {
            n.d(t, {
                Ay: () => b,
                Jw: () => h
            });
            var r = n("BK7R"),
                a = n("TrCV"),
                i = n("DTvD"),
                l = n("cPbI"),
                o = n("T4x1"),
                s = n("1prY"),
                c = n("f3Gl"),
                u = n("YiNW"),
                d = n("cNVJ"),
                f = n("HcTV"),
                v = n("eM92"),
                m = n("9fmR"),
                p = "homepage-trade-tutorial",
                h = function() {
                    var e = (0, l.r)(),
                        t = e.preCoachMark,
                        n = e.nextCoachMark,
                        r = e.closeCoachMark,
                        a = e.showCoachMark,
                        o = e.getCoachMark,
                        s = function() {
                            a(p)
                        },
                        c = "undefined" !== typeof o(p);
                    return (0, i.useEffect)((function() {
                        "force_show" === m.l.getItem() && s()
                    }), []), {
                        isActive: c,
                        open: s,
                        close: function() {
                            r()
                        },
                        next: function() {
                            n()
                        },
                        pre: function() {
                            t()
                        }
                    }
                },
                y = function(e) {
                    var t = e.children,
                        n = e.content,
                        r = e.step,
                        i = e.placement,
                        l = e.disabled,
                        c = e.onNext,
                        d = e.onPre,
                        y = e.onClose,
                        b = e.disabledTips,
                        x = void 0 !== b && b,
                        g = e.className,
                        A = (0, f.Ay)().t,
                        w = h(),
                        _ = r - 1,
                        k = 5 === r,
                        C = function() {
                            y && y(), w.close()
                        };
                    return l || !w.isActive ? (0, a.jsx)(a.Fragment, {
                        children: t
                    }) : (0, a.jsx)(o.Ay, {
                        coachId: p,
                        useReactPopper: !0,
                        placement: i,
                        stepNumber: _,
                        className: (0, u.cn)(x && "[&_.bn-bubble]:!hidden", g),
                        disabled: x,
                        content: !x && (0, a.jsx)(s.A, {
                            className: "!min-h-min break-word",
                            enableSkip: !k,
                            totalStep: 5,
                            stepNumber: _,
                            title: "".concat(r, "/").concat(5),
                            onPreBtnClick: function() {
                                d && d(), w.pre()
                            },
                            onNextBtnClick: function() {
                                k && C(), c && c(), w.next()
                            },
                            onSkipBtnClick: function() {
                                C(), m.l.setItem("showed")
                            },
                            nextBtnText: A(k ? "c2c-ui-trade-tutorial-done-btn" : v.o.next),
                            children: n
                        }),
                        children: t
                    })
                };
            const b = {
                Step1: function(e) {
                    var t = (0, f.Ay)().t;
                    return (0, a.jsx)(y, (0, r.A)({
                        step: 1,
                        content: t("c2c-ui-trade-tutorial-step-1-content"),
                        onNext: function() {
                            (0, c.u)("webClick", {
                                elementId: "p2p_web_coach_mark_step1_next_button"
                            })
                        },
                        placement: "bottom-start"
                    }, e))
                },
                Step2: function(e) {
                    var t = (0, f.Ay)().t;
                    return (0, a.jsx)(y, (0, r.A)({
                        step: 2,
                        content: t("c2c-ui-trade-tutorial-step-2-content"),
                        onNext: function() {
                            (0, c.u)("webClick", {
                                elementId: "p2p_web_coach_mark_step2_next_button"
                            })
                        },
                        placement: "bottom-start"
                    }, e))
                },
                Step3: function(e) {
                    var t = (0, f.Ay)().t;
                    return (0, a.jsx)(y, (0, r.A)({
                        step: 3,
                        content: t("c2c-ui-trade-tutorial-step-3-content"),
                        onNext: function() {
                            (0, c.u)("webClick", {
                                elementId: "p2p_web_coach_mark_step3_next_button"
                            })
                        },
                        placement: "bottom-start"
                    }, e))
                },
                Step4: function(e) {
                    var t = (0, f.Ay)().t;
                    return (0, a.jsx)(y, (0, r.A)({
                        step: 4,
                        content: t("c2c-ui-trade-tutorial-step-4-content"),
                        onNext: function() {
                            (0, c.u)("webClick", {
                                elementId: "p2p_web_coach_mark_step4_next_button"
                            })
                        },
                        placement: "bottom-start"
                    }, e))
                },
                Step5: function(e) {
                    var t = (0, f.Ay)().t,
                        n = (0, d.wA)();
                    return (0, a.jsx)(y, (0, r.A)({
                        step: 5,
                        content: t("c2c-ui-trade-tutorial-step-5-content"),
                        onNext: function() {
                            (0, c.u)("webClick", {
                                elementId: "p2p_web_coach_mark_step5_next_button"
                            }), m.l.setItem("showed"), n.common.setCanShowGlobalNotice(!0)
                        },
                        placement: "bottom-start"
                    }, e))
                },
                COACH_ID: p
            }
        },
        vwHN: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => A
            });
            var r = n("TrCV"),
                a = n("Q+Qy"),
                i = n("eeEA"),
                l = n("Lp65"),
                o = {
                    en: "3pz7bajj5n",
                    cn: "fajpn0h37z",
                    "zh-CN": "fajpn0h37z",
                    "zh-TC": "a44z6y9d1m",
                    "es-LA": "h22ccrjj3w",
                    "es-ES": "h22ccrjj3w",
                    es: "h22ccrjj3w",
                    vi: "fq3ev07e9r",
                    id: "39e3nh3atf",
                    "uk-UA": "pdl81ofh97",
                    ru: "mfaziduwfv",
                    pl: "ez1x4r73lk",
                    ar: "pbq5yvqyvg",
                    "fr-AF": "1j7rjkvpqo",
                    bg: "19vkj2cr5b",
                    cs: "rnf7c7gyue",
                    "de-CH": "l7vb9f5dm0",
                    hu: "0kg3by4mvv",
                    "pt-BR": "p5d1hgh9oe",
                    ro: "0axgaecjw4",
                    tr: "nq7sep261k"
                },
                s = {
                    en: "lz9qccphbw",
                    cn: "xu8vwq0nhy",
                    "zh-CN": "evgvru61lf",
                    "zh-TC": "xu8vwq0nhy",
                    "es-LA": "nt8s7w2kch",
                    "es-ES": "nt8s7w2kch",
                    es: "nt8s7w2kch",
                    vi: "nvrqy4sae8",
                    id: "iirfrsxcd2",
                    ua: "h50r2u7n0g",
                    "uk-UA": "h50r2u7n0g",
                    ru: "tnyazxbv04",
                    pl: "ytiy96b25p",
                    ar: "4wo03yigi1",
                    "fr-AF": "kno6gsgq50",
                    bg: "tuh9qqjx9p",
                    cs: "0lh86r5qa9",
                    "de-CH": "uy3vw20kdg",
                    hu: "og5arve4ly",
                    "pt-BR": "jj93l2xqzm",
                    ro: "tnu77yhwhr",
                    tr: "hp5q9gd0up"
                },
                c = n("M5j3"),
                u = n("gZfF"),
                d = n("DTvD"),
                f = n.n(d),
                v = n("YiNW");
            const m = function(e) {
                var t = e.videoKey,
                    n = e.className,
                    r = e.containerClassName,
                    a = (0, u.A)(e, ["videoKey", "className", "containerClassName"]);
                return f().createElement(l.A, {
                    className: (0, v.cn)("overflow-hidden pt-[56.25%] relative w-full h-auto bg-black", r)
                }, f().createElement("iframe", (0, c.A)({
                    src: "https://fast.wistia.net/embed/iframe/".concat(t, "?videoFoam=true&autoPlay=true"),
                    className: (0, v.cn)("wistia_embed absolute top-0 left-0 border-0 w-full h-full", n),
                    allow: "autoplay; fullscreen",
                    allowTransparency: !0,
                    frameBorder: "0",
                    scrolling: "no",
                    name: "wistia_embed",
                    allowFullScreen: !0,
                    msallowfullscreen: "true"
                }, a)))
            };
            var p = n("HcTV"),
                h = n("zUKr"),
                y = "".concat(h.K5, "/static/images/c2c/buy-video-thumbnail.svg"),
                b = "".concat(h.K5, "/static/images/c2c/sell-video-thumbnail.svg"),
                x = function(e) {
                    var t = e.thumbnail,
                        n = e.title,
                        l = e.onClick;
                    return (0, r.jsxs)(i.Ay, {
                        className: "w-full flex flex-col",
                        children: [(0, r.jsxs)(i.Ay, {
                            className: "group cursor-pointer relative bg-secondaryBg flex items-center justify-center w-full h-[348px]",
                            style: {
                                backgroundImage: "url(".concat(t, ")")
                            },
                            onClick: l,
                            role: "button",
                            children: [(0, r.jsx)(i.Ay, {
                                className: "absolute inset-0 bg-secondaryBg opacity-30 group-hover:opacity-50 transition-opacity"
                            }), (0, r.jsx)(a.A, {
                                className: "text-basicBg w-[96px] h-[96px] group-hover:scale-125 transition-transform"
                            })]
                        }), (0, r.jsx)(i.Ay, {
                            className: "flex flex-1 py-3xl items-center justify-center headline4",
                            children: n
                        })]
                    })
                },
                g = function(e, t) {
                    switch (t.type) {
                        case "show":
                            return {
                                show: !0,
                                videoKey: t.videoKey
                            };
                        case "hide":
                            return {
                                show: !1,
                                videoKey: void 0
                            };
                        default:
                            return e
                    }
                };
            const A = function() {
                var e = (0, p.Ay)(),
                    t = e.t,
                    n = e.language,
                    a = (0, d.useReducer)(g, {
                        show: !1,
                        videoKey: void 0
                    }),
                    i = a[0],
                    c = a[1],
                    u = [{
                        id: "buy-video",
                        thumbnail: y,
                        title: t("c2c-home-dialog-buy-video"),
                        handleClick: function() {
                            c({
                                type: "show",
                                videoKey: s[n] || s.en
                            })
                        }
                    }, {
                        id: "sell-video",
                        thumbnail: b,
                        title: t("c2c-home-dialog-sell-video"),
                        handleClick: function() {
                            c({
                                type: "show",
                                videoKey: o[n] || o.en
                            })
                        }
                    }];
                return (0, r.jsx)(l.A, {
                    className: "relative w-full h-full gap-px bg-basicBg",
                    children: (null === i || void 0 === i ? void 0 : i.show) ? (0, r.jsx)(m, {
                        videoKey: i.videoKey
                    }) : u.map((function(e) {
                        var t = e.id,
                            n = e.thumbnail,
                            a = e.title,
                            i = e.handleClick;
                        return (0, r.jsx)(x, {
                            thumbnail: n,
                            title: a,
                            onClick: i
                        }, t)
                    }))
                })
            }
        },
        mRzj: (e, t, n) => {
            n.d(t, {
                $: () => a
            });
            var r = (0, n("GiT8").x)("buy-sell-guideline-open-times"),
                a = {
                    count: function() {
                        var e, t = Number(null !== (e = r.getItem()) && void 0 !== e ? e : 0);
                        Number.isNaN(t) || r.setItem("".concat(t + 1))
                    },
                    shouldShow: function() {
                        try {
                            var e;
                            return Number(null !== (e = r.getItem()) && void 0 !== e ? e : 0) < 5
                        } catch (t) {
                            return !1
                        }
                    },
                    doNotShowItAgain: function() {
                        r.setItem("".concat(5))
                    },
                    reset: function() {
                        r.setItem("0")
                    }
                }
        },
        "5KL5": (e, t, n) => {
            n.d(t, {
                B: () => q
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                i = n("TrCV"),
                l = n("JyHn"),
                o = n("f3Gl"),
                s = n("cNVJ"),
                c = n("DTvD"),
                u = n.n(c),
                d = n("eeEA"),
                f = n("B8b3"),
                v = n("Lp65"),
                m = n("D4P9"),
                p = n("YiNW"),
                h = n("HcTV"),
                y = n("cTLW"),
                b = n("wE/D"),
                x = function(e) {
                    return (0, p.cn)("flex items-start py-s px-m rounded-m border border-line subtitle1 cursor-pointer w-1/2", e && "border-2 border-primaryText")
                },
                g = function(e) {
                    var t = e.title,
                        n = e.content;
                    return (0, i.jsxs)(d.Ay, {
                        children: [(0, i.jsx)(d.Ay, {
                            className: "subtitle1 text-primaryText mb-4xs",
                            children: t
                        }), (0, i.jsx)(d.Ay, {
                            className: "body3 text-secondaryText",
                            children: n
                        })]
                    })
                };
            const A = function(e) {
                var t = e.onClose,
                    n = e.tradeType,
                    r = e.onFinish,
                    a = (0, h.Ay)().t,
                    l = (0, c.useState)(n || y.nP.Buy),
                    s = l[0],
                    u = l[1],
                    p = s === y.nP.Buy;
                return (0, i.jsxs)(d.Ay, {
                    className: "flex h-full flex-col",
                    children: [(0, i.jsx)(f.Ay.Header, {
                        onNextClick: function() {
                            (0, o.u)("webClick", {
                                pageName: "P2P Zone > New User Guide",
                                elementId: "p2p_web_new_user_guide_button_close"
                            }), t()
                        },
                        showNext: !0,
                        children: a("c2c-ui-how-to-buy-sell-guideline-v2-buy-title")
                    }), (0, i.jsxs)(d.Ay, {
                        className: "p-xl pt-0 max-h-[calc(100vh-220px)] tablet:max-h-[430px] overflow-auto flex-none",
                        children: [(0, i.jsxs)(d.Ay, {
                            className: "flex flex-col tablet:flex-row mb-xl gap-m tablet:gap-l w-full",
                            children: [(0, i.jsx)(d.Ay, {
                                className: x(p),
                                onClick: function() {
                                    return u(y.nP.Buy)
                                },
                                children: a("c2c-ui-how-to-buy-sell-guideline-v2-how-to-buy")
                            }), (0, i.jsx)(d.Ay, {
                                className: x(!p),
                                onClick: function() {
                                    return u(y.nP.Sell)
                                },
                                children: a("c2c-ui-how-to-buy-sell-guideline-v2-how-to-sell")
                            })]
                        }), (0, i.jsx)(d.Ay, {
                            className: "body2 text-secondaryText mb-xl",
                            children: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-subtitle" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-subtitle")
                        }), (0, i.jsxs)(v.A, {
                            className: "flex flex-col-reverse tablet:flex-row gap-m tablet:gap-3xl",
                            children: [(0, i.jsx)(v.A, {
                                className: "w-full tablet:w-[228px] h-[280px] self-center items-center justify-center flex-none",
                                children: (0, i.jsx)(b.A, {
                                    as: "img",
                                    className: "h-auto object-contain",
                                    style: {
                                        width: "147px",
                                        height: "190px"
                                    },
                                    src: p ? "22951/how-to-buy.png" : "22951/how-to-sell.png",
                                    alt: "p2p buy and sell guideline",
                                    loading: "lazy"
                                })
                            }), (0, i.jsxs)(v.A, {
                                className: "flex-col gap-m self-center",
                                children: [(0, i.jsx)(g, {
                                    title: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-place-order-title" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-place-order-title"),
                                    content: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-place-order-content" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-place-order-content")
                                }), (0, i.jsx)(g, {
                                    title: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-pay-title" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-pay-title"),
                                    content: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-pay-content" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-pay-content")
                                }), (0, i.jsx)(g, {
                                    title: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-receive-title" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-receive-title"),
                                    content: a(p ? "c2c-ui-how-to-buy-sell-guideline-v2-buy-receive-content" : "c2c-ui-how-to-buy-sell-guideline-v2-sell-receive-content")
                                })]
                            })]
                        })]
                    }), (0, i.jsx)(f.Ay.Footer, {
                        className: "h-full items-end",
                        children: (0, i.jsx)(m.A, {
                            id: "p2p_web_new_user_guide_button_tour_p2p_zone",
                            className: "w-full",
                            onClick: function() {
                                t(), r && r({
                                    tradeType: s
                                })
                            },
                            children: a("c2c-ui-trade-tutorial-done-btn")
                        })
                    })]
                })
            };
            var w = n("mRzj"),
                _ = n("wIZF"),
                k = n("Y4uf");
            const C = function(e) {
                return u().createElement(k.A, (0, _.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fill: "#F0B90B",
                    d: "M5 3h14v2H5z"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19 7H5v14l3.5-3 3.5 3 3.5-3 3.5 3V7zM8 10h4v2H8v-2zm8 0h-2v2h2v-2zm-2 4h2v2h-2v-2zm-2 0H8v2h4v-2z",
                    fill: "currentColor"
                }))
            };
            const N = function(e) {
                return u().createElement(k.A, (0, _.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M3 12.007A7.887 7.887 0 017.215 8.47c.021 1.914.612 3.811 1.708 5.216a6.822 6.822 0 00-1.074.92l-.981.893 1.488 1.487 1.061-1.039c1.987-2.103 4.072-1.099 4.866-.334L8.923 21H3v-8.993z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 9a6 6 0 01-5.348 5.965l-.546-.527a5.275 5.275 0 00-3.083-1.414 4.844 4.844 0 00-1.41.07A6 6 0 1121 9zm-6-2.5L12.5 9l2.5 2.5L17.5 9 15 6.5z",
                    fill: "#F0B90B"
                }))
            };
            const T = function(e) {
                return u().createElement(k.A, (0, _.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M18 9H6l6 6 6-6z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    d: "M13.5 9h-3V3h3v6zM3.513 15h3.29A5.998 5.998 0 0012 18c2.22 0 4.16-1.206 5.197-3h3.29a9.004 9.004 0 01-16.974 0z",
                    fill: "currentColor"
                }))
            };
            const j = function(e) {
                return u().createElement(k.A, (0, _.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-6.429 0L16.5 9.429 18.429 7.5 16.5 5.571 14.571 7.5zM7.338 19.198C8.688 20.55 10.002 21 11.143 21l5.962-.003A3.895 3.895 0 0021 17.102h-7.2l-2.344-2.368.492-.493 1.511 1.511a2.26 2.26 0 003.196 0l-3.827-3.827h-5.49v7.273zM3 12h2.336v9H3v-9z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.5 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 6.429L14.571 7.5 16.5 5.571 18.429 7.5 16.5 9.429z",
                    fill: "#F0B90B"
                }))
            };
            var S = n("CYwS"),
                V = n("aVXY"),
                E = n("Pofy"),
                M = n("CeW4"),
                F = n("Fxby"),
                D = n("1TYZ"),
                B = n("wUmw"),
                P = n("eM92"),
                L = n("b3jR"),
                I = n("uXxH"),
                z = n("3fwp"),
                R = n("OWqk"),
                O = n("X0ek"),
                H = n("Jrns");
            const U = function(e) {
                var t, n, l, o, s = e.tradeType,
                    u = e.onSubmit,
                    f = e.onTradeTypeChange,
                    p = (0, h.Ay)().t,
                    y = (0, D.Q)().isMobile,
                    b = (0, c.useRef)(null),
                    x = (0, L._)(),
                    g = (0, B.mN)({
                        defaultValues: {
                            tradeType: s,
                            asset: "",
                            fiat: null === x || void 0 === x ? void 0 : x.data,
                            payment: void 0
                        }
                    }),
                    A = g.handleSubmit,
                    w = g.watch,
                    _ = g.control,
                    k = g.setValue,
                    C = (0, V.A)(w(["fiat", "asset", "payment", "tradeType"]), 4),
                    N = C[0],
                    T = C[1],
                    j = C[2],
                    U = C[3],
                    K = (0, I.UX)({
                        fiat: N,
                        area: E.G.P2P
                    }, {
                        enabled: "undefined" !== typeof N
                    }),
                    Y = (0, z.Nz)({
                        fiat: N,
                        tradeArea: E.G.P2P
                    }, {
                        enabled: "undefined" !== typeof N
                    }),
                    G = (0, c.useMemo)((function() {
                        var e, t, n, r, a;
                        return null !== (a = null === (r = null === K || void 0 === K || null === (e = K.data) || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.tradeSides) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.side === s
                        }))) || void 0 === r ? void 0 : r.assets) && void 0 !== a ? a : []
                    }), [null === K || void 0 === K || null === (t = K.data) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.tradeSides, s]),
                    W = (0, c.useMemo)((function() {
                        var e, t, n;
                        return null !== (o = null === Y || void 0 === Y || null === (e = Y.data) || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.tradeMethods) || void 0 === n ? void 0 : n.map((function(e) {
                            return (0, a.A)((0, r.A)({}, e), {
                                bgColor: e.tradeMethodBgColor,
                                name: e.tradeMethodName
                            })
                        }))) && void 0 !== o ? o : []
                    }), [null === Y || void 0 === Y || null === (l = Y.data) || void 0 === l ? void 0 : l.data]),
                    q = {
                        portalNode: b.current,
                        enablePortal: !0,
                        useReactPopper: !0,
                        fieldVariant: y ? "filled" : "line"
                    };
                return (0, c.useEffect)((function() {
                    (null === x || void 0 === x ? void 0 : x.data) && k("fiat", null === x || void 0 === x ? void 0 : x.data)
                }), [null === x || void 0 === x ? void 0 : x.data]), (0, c.useEffect)((function() {
                    var e, t;
                    if (G.length) {
                        var n = null === G || void 0 === G || null === (e = G[0]) || void 0 === e ? void 0 : e.asset;
                        "" !== T && (null === G || void 0 === G || null === (t = G.find) || void 0 === t ? void 0 : t.call(G, (function(e) {
                            return e.asset === T
                        }))) || k("asset", n)
                    }
                }), [G, T]), (0, c.useEffect)((function() {
                    var e;
                    (null === W || void 0 === W ? void 0 : W.length) && ((null === W || void 0 === W || null === (e = W.find) || void 0 === e ? void 0 : e.call(W, (function(e) {
                        return e.identifier === j
                    }))) || k("payment", void 0))
                }), [j, W]), (0, c.useEffect)((function() {
                    "function" === typeof f && f(U)
                }), [U]), (0, i.jsxs)(d.Ay, {
                    className: "flex flex-col gap-xl",
                    ref: b,
                    children: [(0, i.jsx)(d.Ay, {
                        children: (0, i.jsx)(M.A, {
                            label: p("c2c-ui-buy-sell-guild-line-form-i-want-to-label"),
                            children: (0, i.jsxs)(v.A, {
                                className: "gap-2xs flex-col tablet:flex-row",
                                children: [(0, i.jsx)(B.xI, {
                                    name: "tradeType",
                                    control: _,
                                    render: function(e) {
                                        var t = e.field;
                                        return (0, i.jsx)(d.Ay, {
                                            className: "w-full tablet:w-1/2",
                                            children: (0, i.jsxs)(F.A, (0, a.A)((0, r.A)((0, a.A)((0, r.A)({}, t), {
                                                value: [null === t || void 0 === t ? void 0 : t.value],
                                                onChange: function(e) {
                                                    return t.onChange(null === e || void 0 === e ? void 0 : e[0])
                                                },
                                                variant: "full",
                                                renderFn: function(e) {
                                                    var t, n, r = e.selects;
                                                    return (0, i.jsx)(d.Ay, {
                                                        className: "capitalize",
                                                        children: null === (n = null === r || void 0 === r || null === (t = r[0]) || void 0 === t ? void 0 : t.toString()) || void 0 === n ? void 0 : n.toLowerCase()
                                                    })
                                                },
                                                wrapperType: y ? "drawer" : "dropdown",
                                                drawerHeaderProps: {
                                                    subtitle: (0, i.jsx)(d.Ay, {
                                                        className: "headline4",
                                                        children: p("c2c-ui-crypto-select-input-drawer-title")
                                                    })
                                                }
                                            }), q), {
                                                children: [(0, i.jsx)(F.A.Option, {
                                                    value: S.nP.Buy,
                                                    optionCheckIcon: !0,
                                                    children: p(P.o.buy)
                                                }), (0, i.jsx)(F.A.Option, {
                                                    value: S.nP.Sell,
                                                    optionCheckIcon: !0,
                                                    children: p(P.o.sell)
                                                })]
                                            }))
                                        })
                                    }
                                }), (0, i.jsx)(B.xI, {
                                    name: "asset",
                                    control: _,
                                    render: function(e) {
                                        var t = e.field;
                                        return (0, i.jsx)(d.Ay, {
                                            className: "w-full tablet:w-1/2",
                                            children: (0, i.jsx)(O.A, (0, r.A)({
                                                onChange: function(e) {
                                                    return t.onChange(null === e || void 0 === e ? void 0 : e[0])
                                                },
                                                value: [null === t || void 0 === t ? void 0 : t.value],
                                                variant: "full",
                                                listMaxHeight: 232,
                                                assets: G,
                                                disabled: K.isLoading || Y.isLoading
                                            }, q))
                                        })
                                    }
                                })]
                            })
                        })
                    }), (0, i.jsx)(d.Ay, {
                        children: (0, i.jsx)(M.A, {
                            label: U === S.nP.Buy ? p("c2c-ui-buy-sell-guild-line-form-buy-payment-label") : p("c2c-ui-buy-sell-guild-line-form-sell-payment-label"),
                            children: (0, i.jsxs)(v.A, {
                                className: "gap-2xs flex-col tablet:flex-row",
                                children: [(0, i.jsx)(B.xI, {
                                    name: "fiat",
                                    control: _,
                                    render: function(e) {
                                        var t = e.field;
                                        return (0, i.jsx)(d.Ay, {
                                            className: "w-full tablet:w-1/3",
                                            children: (0, i.jsx)(R.A, (0, r.A)((0, a.A)((0, r.A)({}, t), {
                                                variant: "full",
                                                onChange: function(e) {
                                                    return t.onChange(e)
                                                },
                                                listMaxHeight: 235,
                                                disabled: x.isLoading
                                            }), q))
                                        })
                                    }
                                }), (0, i.jsx)(B.xI, {
                                    name: "payment",
                                    control: _,
                                    render: function(e) {
                                        var t = e.field;
                                        return (0, i.jsx)(d.Ay, {
                                            className: "w-full tablet:w-2/2",
                                            children: (0, i.jsx)(H.A, (0, r.A)({
                                                value: [null === t || void 0 === t ? void 0 : t.value],
                                                variant: "full",
                                                onChange: function(e) {
                                                    return t.onChange(null === e || void 0 === e ? void 0 : e[0])
                                                },
                                                paymentList: W,
                                                listMaxHeight: 235,
                                                disabled: K.isLoading || Y.isLoading
                                            }, q))
                                        })
                                    }
                                })]
                            })
                        })
                    }), (0, i.jsx)(m.A, {
                        id: U === S.nP.Buy ? "p2p_web_zone_newUserGuide_jan2025_buy_pickAdsNow" : "p2p_web_zone_newUserGuide_jan2025_sell_pickAdsNow",
                        sz: y ? "middle" : "large",
                        variant: "primary",
                        onClick: function() {
                            return A(u)()
                        },
                        children: p("c2c-ui-buy-sell-guild-line-form-submit-btn")
                    })]
                })
            };
            var K = n("Glqr"),
                Y = function(e) {
                    var t = e.tradeType,
                        n = (0, h.Ay)().t,
                        r = t === S.nP.Buy,
                        a = [{
                            title: n("c2c-ui-buy-sell-guild-line-step-pick-ad"),
                            iconElm: C
                        }, {
                            title: n(r ? "c2c-ui-buy-sell-guild-line-step-buy-payment" : "c2c-ui-buy-sell-guild-line-step-sell-receive"),
                            iconElm: r ? N : T
                        }, {
                            title: n(r ? "c2c-ui-buy-sell-guild-line-step-buy-receive" : "c2c-ui-buy-sell-guild-line-step-sell-release"),
                            iconElm: r ? T : j
                        }];
                    return (0, i.jsx)(d.Ay, {
                        className: "flex bg-secondaryBg rounded-2l gap-4xs items-start tablet:items-center justify-between w-full py-m px-xl",
                        children: a.map((function(e, t) {
                            var n = e.title,
                                r = e.iconElm;
                            return (0, i.jsxs)(c.Fragment, {
                                children: [(0, i.jsxs)(d.Ay, {
                                    className: "flex flex-col items-center gap-5xs",
                                    children: [(0, i.jsx)(r, {
                                        className: "h-[32px] w-[32px] text-twoColorIcon"
                                    }), (0, i.jsx)(d.Ay, {
                                        className: "subtitle3 text-tertiaryText text-center",
                                        children: n
                                    })]
                                }), t !== a.length - 1 && (0, i.jsx)(K.A, {
                                    className: "w-[24px] h-[24px] text-line flex-none"
                                })]
                            }, t)
                        }))
                    })
                };
            const G = function(e) {
                var t = e.onClose,
                    n = e.tradeType,
                    r = void 0 === n ? S.nP.Buy : n,
                    a = e.onFinish,
                    l = (0, h.Ay)().t,
                    s = (0, c.useState)(r),
                    u = s[0],
                    v = s[1];
                return (0, c.useEffect)((function() {
                    (0, o.u)("pageView", {
                        elementId: r === S.nP.Buy ? "p2p_web_zone_newUserGuide_jan2025_buy" : "p2p_web_zone_newUserGuide_jan2025_sell"
                    }), v(r)
                }), [r]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.Ay.Header, {
                        onNextClick: function() {
                            (0, o.u)("webClick", {
                                pageName: "P2P Zone > New User Guide",
                                elementId: "p2p_web_new_user_guide_button_close"
                            }), t()
                        },
                        showNext: !0
                    }), (0, i.jsxs)(f.Ay.Content, {
                        className: "!pt-0 tablet:!max-h-[520px]",
                        children: [(0, i.jsx)(d.Ay, {
                            className: "headline1 mb-4xs",
                            children: l("c2c-ui-buy-sell-guild-line-title")
                        }), (0, i.jsx)(d.Ay, {
                            className: "body2",
                            children: l("c2c-ui-buy-sell-guild-line-content")
                        }), (0, i.jsx)(d.Ay, {
                            className: "pt-3xl mb-xl",
                            children: (0, i.jsx)(U, {
                                tradeType: u,
                                onSubmit: function(e) {
                                    var n = e.tradeType,
                                        r = e.fiat,
                                        i = e.asset,
                                        l = e.payment;
                                    t(), a && a({
                                        tradeType: n,
                                        fiat: r,
                                        asset: i,
                                        payment: l
                                    })
                                },
                                onTradeTypeChange: v
                            })
                        }), (0, i.jsx)(Y, {
                            tradeType: u
                        })]
                    })]
                })
            };
            var W = n("JzJJ"),
                q = function() {
                    var e = (0, l.Z)(),
                        t = e.openModal,
                        n = e.closeModal,
                        c = (0, s.wA)(),
                        u = (0, W.gh)();
                    return {
                        open: function(e) {
                            var l, s, d = "new" === (null === (l = u.config) || void 0 === l || null === (s = l.experiments) || void 0 === s ? void 0 : s.web_p2pZone_newUserGuide);
                            w.$.count();
                            var f = function(t) {
                                    var n = t.tradeType,
                                        r = t.asset,
                                        a = t.fiat,
                                        i = t.payment;
                                    c.common.setCanShowGlobalNotice(!0), (null === e || void 0 === e ? void 0 : e.onFinish) && (null === e || void 0 === e || e.onFinish({
                                        tradeType: n,
                                        asset: r,
                                        fiat: a,
                                        payment: i
                                    }))
                                },
                                v = function() {
                                    (null === e || void 0 === e ? void 0 : e.onClose) && (null === e || void 0 === e || e.onClose()), w.$.doNotShowItAgain(), c.common.setCanShowGlobalNotice(!0), n()
                                };
                            (0, o.u)("pageView", {
                                pageName: "How to Buy/Sell",
                                elementID: "p2p_web_helpcenter_howtobuysell_pop-up"
                            }), t({
                                content: d ? (0, i.jsx)(G, (0, a.A)((0, r.A)({}, e), {
                                    onFinish: f,
                                    onClose: v
                                })) : (0, i.jsx)(A, (0, a.A)((0, r.A)({}, e), {
                                    onFinish: f,
                                    onClose: v
                                })),
                                responsive: !0,
                                className: d ? "[&_.bn-modal-wrap]:tablet:w-[520px] [&_.bn-modal-wrap]:w-full" : "[&_.bn-modal-wrap]:tablet:w-[720px] [&_.bn-modal-wrap]:tablet:max-h-[560px] [&_.bn-modal-wrap]:w-full [&_.bn-modal-wrap]:h-[calc(100vh-80px)]",
                                maskClose: !1,
                                scrollFree: !1
                            })
                        }
                    }
                }
        },
        b3jR: (e, t, n) => {
            n.d(t, {
                _: () => d
            });
            var r = n("sViW"),
                a = n("BK7R"),
                i = n("tEf9"),
                l = n("0GOp"),
                o = n.n(l),
                s = n("FYhw"),
                c = n("n8Fl"),
                u = {
                    all: ["composite"],
                    getDefaultFiatCurrency: function() {
                        return (0, i.A)(u.all).concat(["getDefaultCurrency"])
                    }
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.I)(u.getDefaultFiatCurrency(), (function() {
                        return (0, c.vm)()
                    }), (0, a.A)({
                        select: function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.defaultFiatCurrency
                        }
                    }, e))
                };
            d.dehydrate = function() {
                var e = (0, r.A)(o().mark((function e(t) {
                    var n;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, c.vm)();
                            case 3:
                                return n = e.sent, e.next = 6, t.prefetchQuery({
                                    queryKey: u.getDefaultFiatCurrency(),
                                    queryFn: function() {
                                        return n
                                    }
                                });
                            case 6:
                                return e.abrupt("return", n);
                            case 9:
                                throw e.prev = 9, e.t0 = e.catch(0), console.error(e.t0), e.t0;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        LbQe: (e, t, n) => {
            n.d(t, {
                s: () => c
            });
            var r = n("BK7R"),
                a = n("tEf9"),
                i = n("FYhw"),
                l = n("V3BA"),
                o = n("+bTb"),
                s = {
                    all: ["orderDispute"],
                    list: function(e) {
                        return (0, a.A)(s.all).concat(["list", e])
                    }
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.I)(s.list(e), (function() {
                        return (0, o.Vo)(l.A.GET_ORDER_DISPUTE_LIST, (0, r.A)({
                            page: 1
                        }, e))
                    }), t)
                }
        },
        p4Fj: (e, t, n) => {
            n.d(t, {
                S: () => c,
                q: () => u
            });
            var r = n("BK7R"),
                a = n("tEf9"),
                i = n("FYhw"),
                l = n("+bTb"),
                o = n("V3BA"),
                s = {
                    all: ["tradeMethod"],
                    listOnlinePaymentMethod: function() {
                        return (0, a.A)(s.all).concat(["listOnlinePaymentMethod"])
                    },
                    getTradeMethods: function(e) {
                        return (0, a.A)(s.all).concat(["getTradeMethods", e])
                    }
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.I)(s.listOnlinePaymentMethod(), (function() {
                        return (0, l.fH)(o.A.GET_ONLINE_METHOD_LIST)
                    }), (0, r.A)({}, e))
                },
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            page: 1,
                            rows: 1e3
                        },
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.I)(s.getTradeMethods(e), (function() {
                        return (0, l.fH)(o.A.GET_NEW_TRADE_METHOD_LIST, e)
                    }), (0, r.A)({}, t))
                }
        },
        B4SR: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n("zUKr");
            const a = function() {
                return {
                    getFlag: function() {
                        return "true" === window.sessionStorage.getItem(r.Xk)
                    },
                    setFlag: function() {
                        window.sessionStorage.setItem(r.Xk, "true"), window.name = r.u
                    }
                }
            }
        },
        VhXe: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("HS2I"),
                a = n("BK9r"),
                i = n("ubfX");
            const l = function() {
                return function(e) {
                    var t, n = null === (t = null === e || void 0 === e ? void 0 : e.split("/")) || void 0 === t ? void 0 : t[1];
                    return "undefined" !== typeof i.YD.find((function(e) {
                        return "/".concat(n) === e
                    }))
                }((0, a.K7)().pathname)
            };
            const o = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ignoreDarkThemeWhistListRestriction,
                    n = void 0 !== t && t,
                    a = (0, r.useTheme)().theme,
                    i = l() || n;
                return {
                    isLight: "light" === a || !i
                }
            }
        },
        JzJJ: (e, t, n) => {
            n.d(t, {
                aj: () => y,
                gh: () => h
            });
            var r, a = n("sViW"),
                i = n("0GOp"),
                l = n.n(i),
                o = n("TrCV"),
                s = n("DTvD"),
                c = n("44NZ"),
                u = n("cNVJ"),
                d = n("8tQJ"),
                f = n("zUKr"),
                v = n("J0xf"),
                m = function() {
                    var e = (0, a.A)(l().mark((function e(t, n) {
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" === typeof r) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 2:
                                    return e.next = 4, d.Ay.init({
                                        uid: n,
                                        trace_id: v.Hy.get(),
                                        strategy_ids: [],
                                        env: f.lF
                                    }, {
                                        authHeader: "MjE1MDA1NDY2NDpMODdaWjdXNFF2TEZsN2hTZXA4VFF6Znp2dnI2d3VZdQ==",
                                        baseUrl: "https://api.saasexch.com/bapi/themis/api/"
                                    }, t);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = (n("+bTb"), function() {
                    var e, t = (0, u.wA)(),
                        n = (0, u.d4)((function(t) {
                            var n;
                            return null !== (e = null === t || void 0 === t || null === (n = t.common) || void 0 === n ? void 0 : n.themisConfig) && void 0 !== e ? e : {}
                        })),
                        r = n.themisHelper,
                        i = n.isLoading,
                        o = (0, c.v)().userBaseInfo.userId,
                        d = (0, s.useCallback)((function(e) {
                            t.common.updateThemisConfig({
                                config: e
                            })
                        }), [t]),
                        f = function() {
                            var e = (0, a.A)(l().mark((function e() {
                                var n;
                                return l().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.common.updateThemisConfig({
                                                isLoaded: !1,
                                                isLoading: !0
                                            }), e.prev = 2, e.next = 5, m(d, o);
                                        case 5:
                                            (n = e.sent).subscribe(d), t.common.updateThemisConfig({
                                                isLoaded: !0,
                                                themisHelper: n
                                            }), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), console.error(e.t0);
                                        case 13:
                                            return e.prev = 13, t.common.updateThemisConfig({
                                                isLoading: !1
                                            }), e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10, 13, 16]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        v = (0, s.useCallback)((function(e) {
                            return null === r || void 0 === r ? void 0 : r.getFeatureGateValueByName(e)
                        }), [r]);
                    return {
                        themis: r,
                        isLoading: i,
                        getFeatureGateValueByName: v,
                        init: f
                    }
                }),
                h = function() {
                    var e, t = (0, u.d4)((function(t) {
                        var n;
                        return null !== (e = null === t || void 0 === t || null === (n = t.common) || void 0 === n ? void 0 : n.themisConfig) && void 0 !== e ? e : {}
                    }));
                    return {
                        config: t.config,
                        isLoading: t.isLoading
                    }
                },
                y = function(e) {
                    var t = e.children,
                        n = p().init,
                        r = (0, c.v)().userBaseInfo.userId;
                    return (0, s.useEffect)((function() {
                        n()
                    }), [r]), (0, o.jsx)(o.Fragment, {
                        children: t
                    })
                }
        },
        R9AY: (e, t, n) => {
            n.d(t, {
                A: () => _
            });
            var r = n("sViW"),
                a = n("0GOp"),
                i = n.n(a),
                l = n("TrCV"),
                o = n("DTvD"),
                s = n("BK9r"),
                c = n("Hb45"),
                u = n("MgDv"),
                d = n("wYc8"),
                f = n("+dhg"),
                v = n("CYwS"),
                m = n("ycr1"),
                p = n("HcTV"),
                h = n("+bTb"),
                y = n("V3BA"),
                b = n("nocm"),
                x = n("cNVJ"),
                g = n("onwi"),
                A = n("62EF"),
                w = n("cTLW");
            const _ = function(e) {
                var t = e.authed,
                    n = e.errCallback,
                    a = e.isBlockAd,
                    _ = void 0 !== a && a,
                    k = e.isCashAd,
                    C = void 0 !== k && k,
                    N = e.isFiatTradeAd,
                    T = void 0 !== N && N,
                    j = b.A.site().merchantApplication,
                    S = (0, p.Ay)().t,
                    V = (0, s.rd)(),
                    E = (0, m.A)().enqueueNotification,
                    M = (0, x.wA)(),
                    F = (0, o.useState)(!1),
                    D = F[0],
                    B = F[1],
                    P = (0, o.useState)(""),
                    L = P[0],
                    I = P[1],
                    z = (0, o.useState)([]),
                    R = z[0],
                    O = z[1],
                    H = (0, o.useRef)(t);
                (0, o.useEffect)((function() {
                    H.current = t
                }), [t]);
                var U = (0, o.useState)(void 0),
                    K = U[0],
                    Y = U[1],
                    G = (0, o.useCallback)(function() {
                        var e = (0, r.A)(i().mark((function e(t) {
                            var r, a, o, s, m, p, b, x, k, N = arguments;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = N.length > 1 && void 0 !== N[1] ? N[1] : {
                                                onCallApi: function() {},
                                                onCallSuccess: function() {}
                                            }, !H.current) {
                                            e.next = 4;
                                            break
                                        }
                                        return t && t(), e.abrupt("return");
                                    case 4:
                                        return B(!0), Y(void 0), e.prev = 6, null === r || void 0 === r || null === (a = r.onCallApi) || void 0 === a || a.call(r), e.next = 11, (0, h.Rk)(y.A.POST_AD_CHECK);
                                    case 11:
                                        if (s = e.sent, m = s.code, p = s.data, null === r || void 0 === r || null === (o = r.onCallSuccess) || void 0 === o || o.call(r), B(!1), !c.Wz.includes(m)) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.next = 19, (0, u.j1)(m);
                                    case 19:
                                        if (b = e.sent, !c.Xt.includes(m)) {
                                            e.next = 23;
                                            break
                                        }
                                        return V.back(), e.abrupt("return");
                                    case 23:
                                        if (!b) {
                                            e.next = 26;
                                            break
                                        }
                                        return G(t, r), e.abrupt("return");
                                    case 26:
                                        e.t0 = m, e.next = "083750" === e.t0 ? 29 : "083747" === e.t0 ? 34 : "083689" === e.t0 ? 36 : "000000" === e.t0 ? 38 : 42;
                                        break;
                                    case 29:
                                        return e.next = 31, (0, d.A)({
                                            title: S("c2c-ui-pc-post-requirement-dialog-title"),
                                            message: S("c2c-ui-pc-post-requirement-dialog-content-beMerchantFirst"),
                                            confirmText: S("c2c-ui-pc-post-requirement-dialog-btn-applyMerchant"),
                                            cancelText: S("c2c-ui-pc-post-requirement-dialog-btn-cancelApply")
                                        });
                                    case 31:
                                        return e.sent && V.push(j), e.abrupt("break", 43);
                                    case 34:
                                        return (0, A.A)({
                                            t: S
                                        }), e.abrupt("break", 43);
                                    case 36:
                                        return x = (0, f.A)({
                                            title: S("c2c-ui-nickname-popup-title"),
                                            width: 384,
                                            content: (0, l.jsx)(g.A, {
                                                notification: E,
                                                onOk: function() {
                                                    var e;
                                                    G(t, r), null === (e = x.current) || void 0 === e || e.call(x)
                                                },
                                                onCancel: function() {
                                                    var e;
                                                    null === (e = x.current) || void 0 === e || e.call(x)
                                                }
                                            })
                                        }), e.abrupt("break", 43);
                                    case 38:
                                        return O(p.advClassifies), _ ? I(p.advClassifies.includes("block") ? "block" : null) : C ? I(p.advClassifies.includes("cash") ? "cash" : null) : T ? I(p.advClassifies.includes(w.bc.FiatTrade) ? w.bc.FiatTrade : null) : (k = p.advClassifies.filter((function(e) {
                                            return "block" !== e && "cash" !== e && e !== w.bc.FiatTrade
                                        })), I(k[0])), t && t(p), e.abrupt("break", 43);
                                    case 42:
                                        return e.abrupt("break", 43);
                                    case 43:
                                        m && n && n(), (null === p || void 0 === p ? void 0 : p.inventoryType) === v.Zf.Enabled && M.postAd.update({
                                            isEligibleForSharedAd: !0
                                        }), e.next = 52;
                                        break;
                                    case 47:
                                        e.prev = 47, e.t1 = e.catch(6), n && n(), B(!1), Y(e.t1.message);
                                    case 52:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [6, 47]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t, n, _, C, T]);
                return {
                    getPermission: G,
                    loading: D,
                    errorMessage: K,
                    classify: L,
                    advClassifies: R
                }
            }
        },
        VIal: (e, t, n) => {
            n.d(t, {
                A: () => m
            });
            var r = n("sViW"),
                a = n("BK7R"),
                i = n("0GOp"),
                l = n.n(i),
                o = n("DTvD"),
                s = n("MwrP"),
                c = n.n(s),
                u = n("zUKr"),
                d = n("o/qg"),
                f = n("v0LT"),
                v = n("lAPJ");
            const m = function() {
                var e, t, i, s, m = (0, v.D1)(),
                    p = (0, o.useMemo)((function() {
                        var e, t;
                        return [u.Ip.adv.consecutivelySystemCanceledOrder, u.Ip.adv.inActiveAd, u.Ip.adv.systemClosedLowRemainingAd, u.Ip.adv.systemClosedUselessAd].includes(null === m || void 0 === m || null === (e = m.data) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
                    }), [null === m || void 0 === m || null === (e = m.data) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.reason]),
                    h = (0, v.pM)({
                        scene: f.W.PostAd,
                        provideContent: !1,
                        showHint: !1
                    }, {
                        enabled: !1
                    }),
                    y = (0, o.useCallback)(function() {
                        var e = (0, r.A)(l().mark((function e(t) {
                            var a, i, o, s, u, f, v, p;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.actionType, i = t.action, o = t.onConfirm, s = void 0 === o ? function() {} : o, u = t.confirmTrackingId, f = function() {
                                            var e = (0, r.A)(l().mark((function e(t) {
                                                var n, r, a, i;
                                                return l().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (e.prev = 0, null === (a = null === m || void 0 === m || null === (n = m.data) || void 0 === n ? void 0 : n.data) || void 0 === a) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            e.t0 = a, e.next = 10;
                                                            break;
                                                        case 7:
                                                            return e.next = 9, null === (r = null === m || void 0 === m ? void 0 : m.refetch()) || void 0 === r ? void 0 : r.then((function(e) {
                                                                var t = e.data;
                                                                return null === t || void 0 === t ? void 0 : t.data
                                                            }));
                                                        case 9:
                                                            e.t0 = e.sent;
                                                        case 10:
                                                            i = e.t0, e.t1 = t, e.next = "can_buy" === e.t1 ? 14 : "duplicate_buy" === e.t1 || "publish_buy" === e.t1 ? 15 : "update_buy" === e.t1 ? 16 : "update_online_status_buy" === e.t1 ? 17 : 18;
                                                            break;
                                                        case 14:
                                                            return e.abrupt("return", null === i || void 0 === i ? void 0 : i.canBuyOrder);
                                                        case 15:
                                                            return e.abrupt("return", null === i || void 0 === i ? void 0 : i.canBuyTypeAdvPublish);
                                                        case 16:
                                                            return e.abrupt("return", null === i || void 0 === i ? void 0 : i.canBuyTypeAdvUpdate);
                                                        case 17:
                                                            return e.abrupt("return", null === i || void 0 === i ? void 0 : i.canBuyTypeAdvOnline);
                                                        case 18:
                                                            return e.abrupt("return", !1);
                                                        case 19:
                                                            e.next = 24;
                                                            break;
                                                        case 21:
                                                            return e.prev = 21, e.t2 = e.catch(0), e.abrupt("return", !0);
                                                        case 24:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [0, 21]
                                                ])
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), e.next = 4, f(a);
                                    case 4:
                                        if (!e.sent) {
                                            e.next = 26;
                                            break
                                        }
                                        if ("publish_buy" !== a) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.prev = 7, e.next = 11, h.refetch();
                                    case 11:
                                        if (p = e.sent.data, !c()(null === p || void 0 === p || null === (v = p.data) || void 0 === v ? void 0 : v[0])) {
                                            e.next = 15;
                                            break
                                        }
                                        return i(), e.abrupt("return");
                                    case 15:
                                        Promise.all([n.e(9835), n.e(5024), n.e(7857)]).then(n.bind(n, "C/+S")).then((function(e) {
                                            return e.default({
                                                onSuccess: i
                                            })
                                        })), e.next = 21;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(7), i();
                                    case 21:
                                        e.next = 24;
                                        break;
                                    case 23:
                                        i();
                                    case 24:
                                        e.next = 27;
                                        break;
                                    case 26:
                                        d.A.open({
                                            type: a,
                                            confirmTrackingId: u,
                                            onConfirm: s
                                        });
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 18]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [h, null === m || void 0 === m || null === (i = m.data) || void 0 === i ? void 0 : i.data]);
                return (0, a.A)({
                    isUserAdsClosedBySystem: p,
                    checkUserCanManipulateAdBeforeAction: y,
                    loading: null === m || void 0 === m ? void 0 : m.isInitialLoading
                }, null === m || void 0 === m || null === (s = m.data) || void 0 === s ? void 0 : s.data)
            }
        },
        "4P7N": (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var r = n("TrCV"),
                a = n("MEAY"),
                i = n("ulLh"),
                l = n("S8bp"),
                o = n("VhXe"),
                s = n("ubfX"),
                c = function(e) {
                    var t = e.children,
                        n = e.ignoreDarkThemeWhistListRestriction,
                        a = e.overrideThemeColor,
                        i = (0, o.A)({
                            ignoreDarkThemeWhistListRestriction: n
                        }).isLight,
                        c = ("undefined" !== typeof a ? "light" === a : i) ? s.wl : s.iz;
                    return (0, r.jsx)(l.A, {
                        theme: c,
                        children: t
                    })
                },
                u = function(e) {
                    var t = e.children,
                        n = (e.scope, e.ignoreDarkThemeWhistListRestriction),
                        l = e.overrideThemeColor,
                        c = (0, o.A)({
                            ignoreDarkThemeWhistListRestriction: n
                        }).isLight,
                        u = "undefined" !== typeof l ? "light" === l : c,
                        d = u ? "light" : "dark",
                        f = u ? s.Hw : s.F1,
                        v = u ? a.bK : a.zd;
                    return (0, r.jsx)(i.A, {
                        scope: !0,
                        mode: d,
                        themeColors: f,
                        themeExtraColors: v,
                        children: t
                    })
                };
            const d = function(e) {
                var t = e.children,
                    n = e.ignoreDarkThemeWhistListRestriction,
                    a = void 0 !== n && n,
                    i = e.scope,
                    l = void 0 !== i && i,
                    o = e.overrideThemeColor;
                return (0, r.jsx)(c, {
                    ignoreDarkThemeWhistListRestriction: a,
                    overrideThemeColor: o,
                    children: (0, r.jsx)(u, {
                        ignoreDarkThemeWhistListRestriction: a,
                        scope: l,
                        overrideThemeColor: o,
                        children: t
                    })
                })
            }
        },
        m8Z7: (e, t, n) => {
            n.d(t, {
                R: () => a,
                d: () => r
            });
            var r = {
                    BUY: "buy",
                    SELL: "sell"
                },
                a = "all-payments"
        },
        v0LT: (e, t, n) => {
            var r;
            n.d(t, {
                    W: () => r
                }),
                function(e) {
                    e[e.PostAd = 1] = "PostAd"
                }(r || (r = {}))
        },
        J0xf: (e, t, n) => {
            n.d(t, {
                Hy: () => s,
                og: () => u,
                rf: () => c
            });
            var r = n("zJWh"),
                a = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return r.U.write(e, t, n, a)
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return r.U.read(e, t)
                },
                l = function(e) {
                    return r.U.erase(e)
                },
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {
                            get: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return i(e, t)
                            },
                            set: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 365,
                                    r = arguments.length > 2 ? arguments[2] : void 0;
                                return a(e, t, n, r)
                            },
                            delete: function() {
                                return l(e)
                            }
                        };
                    return t && (delete n.delete, delete n.set), n
                },
                s = o("bnc-uuid", !0),
                c = o("language", !0),
                u = (o("theme"), o("common_fiat"))
        },
        "8RRA": (e, t, n) => {
            n.d(t, {
                $: () => i,
                b: () => c
            });
            var r = n("J0xf");
            const a = "object" === typeof n.g && !1;

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (!e.length) return {
                    tradeType: t,
                    asset: "",
                    assetName: ""
                };
                var r = t,
                    a = n,
                    i = "";
                r || (r = e[0].side);
                var l = e.find((function(e) {
                    return e.side === (null === r || void 0 === r ? void 0 : r.toUpperCase())
                }));
                if (l) {
                    var o, s, c = l.assets.find((function(e) {
                        return e.asset === a
                    }));
                    a = c ? a : null === (o = l.assets[0]) || void 0 === o ? void 0 : o.asset, i = c ? null === c || void 0 === c ? void 0 : c.description : null === (s = l.assets[0]) || void 0 === s ? void 0 : s.description
                }
                return {
                    tradeType: r,
                    asset: a,
                    assetName: i
                }
            }
            var l = {
                    fiat: void 0,
                    asset: void 0
                },
                o = function(e) {
                    if (!e) return l;
                    try {
                        return JSON.parse(null !== e && void 0 !== e ? e : "{}")
                    } catch (t) {}
                    return l
                },
                s = function(e) {
                    if (a && "undefined" === typeof e) return l;
                    var t = r.og.get(e ? {
                        cookie: e
                    } : {});
                    return t ? o(t) : l
                },
                c = {
                    get: s,
                    set: function(e) {
                        var t = e.fiat,
                            n = e.asset;
                        try {
                            var a = s();
                            r.og.set(JSON.stringify({
                                fiat: null !== t && void 0 !== t ? t : null === a || void 0 === a ? void 0 : a.fiat,
                                asset: null !== n && void 0 !== n ? n : a.asset
                            }))
                        } catch (i) {
                            console.error("cannot set fiat or asset cookie", i)
                        }
                    },
                    parse: o
                }
        },
        "3kJa": (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Y4uf");
            const o = function(e) {
                return i().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 3h18v14h-9l-5 5v-5H3V3zm15 3H6v2.5h12V6zm0 5.5H6V14h12v-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        Glqr: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Y4uf");
            const o = function(e) {
                return i().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.121 5l7.071 7.071-.025.025.025.025-7.07 7.071L11 17.072l4.975-4.976L11 7.121 13.121 5zm-7 0l7.071 7.071-.025.025.025.025-7.07 7.071L4 17.072l4.975-4.976L4 7.121 6.121 5z",
                    fill: "currentColor"
                }))
            }
        },
        hEoe: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Y4uf");
            const o = function(e) {
                return i().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        J6Ge: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Y4uf");
            const o = function(e) {
                return i().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z",
                    fill: "currentColor"
                }))
            }
        },
        dyy5: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("Y4uf");
            const o = function(e) {
                return i().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 4h6v4.5h-2.5v-2H15V4zM5.833 9.998A2.333 2.333 0 003.5 12.331v1.667h8v-1.667a2.333 2.333 0 00-2.333-2.333H5.833zm9 6.002a2.333 2.333 0 00-2.333 2.333V20h8v-1.667A2.333 2.333 0 0018.167 16h-3.334zM9 17.5H5.5v-2H3V20h6v-2.5zm10-4.998a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM7.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
                    fill: "currentColor"
                }))
            }
        },
        "5+UA": (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("O94r"),
                o = n.n(l),
                s = n("eeEA"),
                c = n("fvKX"),
                u = function(e) {
                    var t, n = e.variant,
                        a = void 0 === n ? "number" : n,
                        l = e.theme,
                        u = e.label,
                        d = e.className,
                        f = e.sz,
                        v = void 0 === f ? "md" : f,
                        m = (0, r.__rest)(e, ["variant", "theme", "label", "className", "sz"]),
                        p = (0, c.r)(),
                        h = p.prefixCls,
                        y = p.isRTL,
                        b = "".concat(h, "-badge"),
                        x = o()(b, ((t = {})["".concat(b, "-rtl")] = !!y, t["".concat(b, "__").concat(a)] = !!a, t["data-theme-".concat(l)] = !!l, t["data-size-".concat(v)] = !!v, t)),
                        g = /^dot/i.test(a);
                    return i().createElement(s.Ay, (0, r.__assign)({}, m, {
                        className: o()("".concat(b, "-wrap"), d)
                    }), e.children, i().createElement(s.Ay, {
                        className: x,
                        children: !g && u
                    }))
                };
            u.displayName = "Badge";
            const d = u
        },
        "1prY": (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("hyZw"),
                o = n("O94r"),
                s = n.n(o),
                c = n("eeEA"),
                u = n("D4P9"),
                d = n("fvKX");
            const f = function(e) {
                var t, n = e.tips,
                    a = e.title,
                    o = e.totalStep,
                    f = e.stepNumber,
                    v = e.enableStep,
                    m = e.enableSkip,
                    p = e.variant,
                    h = void 0 === p ? "normal" : p,
                    y = e.stepText,
                    b = void 0 === y ? "Step" : y,
                    x = e.prevBtnText,
                    g = void 0 === x ? "Previous" : x,
                    A = e.skipBtnText,
                    w = void 0 === A ? "Skip" : A,
                    _ = e.onPreBtnClick,
                    k = void 0 === _ ? l.es : _,
                    C = e.nextBtnText,
                    N = void 0 === C ? "Next" : C,
                    T = e.onNextBtnClick,
                    j = void 0 === T ? l.es : T,
                    S = e.onSkipBtnClick,
                    V = void 0 === S ? l.es : S,
                    E = e.children,
                    M = (0, r.__rest)(e, ["tips", "title", "totalStep", "stepNumber", "enableStep", "enableSkip", "variant", "stepText", "prevBtnText", "skipBtnText", "onPreBtnClick", "nextBtnText", "onNextBtnClick", "onSkipBtnClick", "children"]),
                    F = (0, d.r)(),
                    D = F.prefixCls,
                    B = F.isRTL,
                    P = F.isMobile,
                    L = "".concat(D, "-coachmark-panel"),
                    I = s()(L, ((t = {})["".concat(L, "-rtl")] = !!B, t["".concat(L, "__").concat(h)] = !!h, t), e.className),
                    z = "".concat(L, "-extra-actions"),
                    R = 0 === f,
                    O = f === o - 1,
                    H = P ? "small" : "middle";
                return i().createElement(c.Ay, (0, r.__assign)({}, M, {
                    className: I
                }), a ? i().createElement(c.Ay, {
                    className: "".concat(L, "-title"),
                    children: a
                }) : null, i().createElement(c.Ay, {
                    className: "".concat(L, "-content"),
                    children: E
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra")
                }, v && i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-step")
                }, i().createElement(c.Ay, {
                    children: b
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-step-gap")
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-step-curr"),
                    children: "".concat(+f + 1)
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-step-split"),
                    children: "/"
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-step-total"),
                    children: "".concat(o)
                })), m && i().createElement(u.A, {
                    variant: "text",
                    className: "".concat(L, "-extra-skip"),
                    onClick: V,
                    children: w,
                    sz: H
                }), i().createElement(c.Ay, {
                    className: "".concat(L, "-extra-actions")
                }, R ? null : i().createElement(u.A, {
                    variant: "text",
                    textVariant: "black",
                    className: "".concat(z, "-prev"),
                    onClick: k,
                    children: g,
                    sz: H
                }), i().createElement(u.A, {
                    variant: "secondary",
                    children: N,
                    onClick: j,
                    className: "".concat(z, O ? "-done" : "-next"),
                    sz: H
                }))), n ? i().createElement(c.Ay, {
                    className: "".concat(L, "-tips"),
                    children: n
                }) : null)
            }
        },
        cPbI: (e, t, n) => {
            n.d(t, {
                A: () => c,
                r: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("hyZw"),
                o = (0, a.createContext)({
                    getCoachMark: l.es,
                    showCoachMark: l.es,
                    preCoachMark: l.es,
                    nextCoachMark: l.es,
                    closeCoachMark: l.es
                }),
                s = function() {
                    return i().useContext(o)
                };
            const c = function(e) {
                var t = e.children,
                    n = i().useState({}),
                    l = n[0],
                    s = n[1],
                    c = (0, a.useCallback)((function(e) {
                        s((function(t) {
                            var n = t.index,
                                a = void 0 === n ? 0 : n,
                                i = Math.max(a + e, 0);
                            return t.id ? (0, r.__assign)((0, r.__assign)({}, t), {
                                index: i
                            }) : t
                        }))
                    }), []),
                    u = {};
                return u.getCoachMark = (0, a.useCallback)((function(e) {
                    return l.id === e ? l.index : void 0
                }), [l]), u.showCoachMark = (0, a.useCallback)((function(e) {
                    return s({
                        id: e,
                        index: 0
                    })
                }), []), u.preCoachMark = (0, a.useCallback)((function() {
                    return c(-1)
                }), []), u.nextCoachMark = (0, a.useCallback)((function() {
                    return c(1)
                }), []), u.closeCoachMark = (0, a.useCallback)((function() {
                    return s({})
                }), []), i().createElement(o.Provider, {
                    value: u,
                    children: t
                })
            }
        },
        T4x1: (e, t, n) => {
            n.d(t, {
                Ay: () => f
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("O94r"),
                o = n.n(l),
                s = n("mk7A"),
                c = n("JgEn"),
                u = n("fvKX"),
                d = n("cPbI");
            const f = function(e) {
                var t = e.coachId,
                    n = e.stepNumber,
                    l = e.content,
                    f = e.variant,
                    v = void 0 === f ? "normal" : f,
                    m = e.className,
                    p = e.enablePortal,
                    h = e.portalNode,
                    y = (0, r.__rest)(e, ["coachId", "stepNumber", "content", "variant", "className", "enablePortal", "portalNode"]),
                    b = (0, u.r)(),
                    x = b.prefixCls,
                    g = b.isMobile,
                    A = "".concat(x, "-coachmark"),
                    w = o()(A, m),
                    _ = (0, (0, d.r)().getCoachMark)(t) === n;
                y.disabled = !_;
                var k = (0, a.useMemo)((function() {
                    return g ? 12 : 16
                }), [g]);
                return i().createElement(a.Fragment, null, i().createElement(c.A, (0, r.__assign)({
                    bubbleClassName: "".concat(A, "-bubble")
                }, y, {
                    enablePortal: p,
                    portalNode: h,
                    variant: v,
                    open: !0,
                    className: w,
                    tooltips: l,
                    offset: k
                })), _ && i().createElement(s.A, {
                    scrollFree: !0,
                    visible: _,
                    className: "".concat(A, "-mask"),
                    enablePortal: p,
                    portalNode: h
                }))
            }
        },
        f2u4: (e, t, n) => {
            n.d(t, {
                A: () => j
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                l = n("W3Ja"),
                o = n("O94r"),
                s = n.n(o),
                c = n("eeEA"),
                u = n("fvKX"),
                d = n("5+UA"),
                f = function(e) {
                    var t, n = e.variant,
                        a = e.subVariant,
                        l = e.size,
                        o = e.active,
                        f = e.fontSizeType,
                        v = e.badgeProps,
                        m = e.tabKey,
                        p = (0, r.__rest)(e, ["variant", "subVariant", "size", "active", "fontSizeType", "badgeProps", "tabKey"]),
                        h = (0, u.r)(),
                        y = h.prefixCls,
                        b = h.isRTL,
                        x = "".concat(y, "-tab"),
                        g = s()(x, ((t = {})["".concat(x, "-rtl")] = !!b, t["".concat(x, "__").concat(n)] = !!n, t["".concat(x, "__").concat(n, "__").concat(a)] = !!n && !!a, t["".concat(x, "-badge")] = !!v, t["data-size-".concat(l)] = !!l, t["data-font-".concat(f)] = !!f, t.active = !!o, t), e.className),
                        A = s()("".concat(x, "-badge-wrap"), null === v || void 0 === v ? void 0 : v.className),
                        w = {
                            role: "tab",
                            "aria-selected": !!o
                        };
                    return v ? i().createElement(d.A, (0, r.__assign)({
                        sz: "sm",
                        variant: "string"
                    }, v, {
                        className: A,
                        "data-tab-key": m
                    }), i().createElement(c.Ay, (0, r.__assign)({}, w, p, {
                        className: g
                    }))) : i().createElement(c.Ay, (0, r.__assign)({}, w, p, {
                        className: g,
                        "data-tab-key": m
                    }))
                };
            f.__name = "Tab", f.displayName = "Tab";
            const v = f;
            var m = n("eh2c"),
                p = n("OKx2"),
                h = n("qrIQ"),
                y = n("hEoe"),
                b = n("Mtrz"),
                x = function(e) {
                    var t = e.showSlideMasks,
                        n = e.showSlideArrow,
                        r = e.maskVisible,
                        l = e.arrowVisible,
                        o = e.tabsHeight,
                        d = e.onArrowClick,
                        f = (0, u.r)().prefixCls,
                        v = "".concat(f, "-tab-list-shadow"),
                        m = "".concat(f, "-tab-list-arrow");
                    if (!t && !n) return null;
                    var p = (0, a.useMemo)((function() {
                            return i().createElement(i().Fragment, null, r.left && i().createElement(c.Ay, {
                                className: s()(v, "".concat(v, "-left")),
                                style: {
                                    height: o
                                },
                                "aria-hidden": "true"
                            }), r.right && i().createElement(c.Ay, {
                                className: s()(v, "".concat(v, "-right")),
                                style: {
                                    height: o
                                },
                                "aria-hidden": "true"
                            }))
                        }), [r, o]),
                        h = (0, a.useMemo)((function() {
                            return i().createElement(i().Fragment, null, l.left && i().createElement(y.A, {
                                color: "IconNormal",
                                className: s()(m, "".concat(m, "-left")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("prev")
                                },
                                style: {
                                    height: o
                                },
                                role: "button",
                                "aria-label": "Scroll tabs left",
                                tabIndex: 0
                            }), l.right && i().createElement(b.A, {
                                color: "IconNormal",
                                className: s()(m, "".concat(m, "-right")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("next")
                                },
                                style: {
                                    height: o
                                },
                                role: "button",
                                "aria-label": "Scroll tabs right",
                                tabIndex: 0
                            }))
                        }), [l, o, d]);
                    return i().createElement(i().Fragment, null, t && p, n && h)
                };
            x.displayName = "TabsEdge";
            const g = x;
            var A = (0, a.forwardRef)((function(e, t) {
                var n, l = e.variant,
                    o = e.subVariant,
                    d = e.size,
                    f = e.selectedIndex,
                    v = e.onTabClick,
                    y = e.children,
                    b = e.fontSizeType,
                    x = e.gap,
                    A = e.showSlideMasks,
                    w = e.showSlideArrow,
                    _ = e.suffix,
                    k = (0, r.__rest)(e, ["variant", "subVariant", "size", "selectedIndex", "onTabClick", "children", "fontSizeType", "gap", "showSlideMasks", "showSlideArrow", "suffix"]),
                    C = (0, a.useRef)(null);
                (0, a.useImperativeHandle)(t, (function() {
                    return C.current
                }), []);
                var N = (0, u.r)().prefixCls,
                    T = "".concat(N, "-tab-list"),
                    j = s()(T, ((n = {})["".concat(T, "__").concat(l)] = !!l, n["data-size-".concat(d)] = !!d, n["data-font-".concat(b)] = !!b, n), e.className),
                    S = i().useState({
                        left: !1,
                        right: !1
                    }),
                    V = S[0],
                    E = S[1],
                    M = i().useState({
                        left: !1,
                        right: !1
                    }),
                    F = M[0],
                    D = M[1],
                    B = i().useState(0),
                    P = B[0],
                    L = B[1],
                    I = (0, a.useCallback)((function(e) {
                        var t = e.containerRef;
                        if (t && t.current) {
                            var n = t.current,
                                r = n.scrollLeft,
                                a = n.scrollWidth,
                                i = n.clientWidth;
                            E && E({
                                right: a > Math.round(i + r),
                                left: r > 0
                            }), D && D({
                                right: a > Math.round(i + r),
                                left: r > 0
                            })
                        }
                    }), [E, D]),
                    z = (0, m.sg)((function() {
                        null === I || void 0 === I || I({
                            containerRef: C
                        })
                    }), 500),
                    R = (0, a.useCallback)((function(e) {
                        if (C.current) {
                            var t = C.current,
                                n = t.scrollLeft,
                                r = t.children,
                                a = Array.from(r).map((function(e) {
                                    return e.offsetLeft
                                })),
                                i = function(e) {
                                    return function(t) {
                                        return function(n) {
                                            var r, a = t.findIndex((function(e) {
                                                return e >= n
                                            }));
                                            return r = "next" === e ? Math.min(a + 4, t.length - 1) : Math.max(a - 4, 0), t[r] - n
                                        }
                                    }
                                }(e)(a)(n);
                            (0, p.HN)(C.current, i, 0, 300), null === I || void 0 === I || I({
                                containerRef: C
                            })
                        }
                    }), [I]),
                    O = (0, a.useMemo)((function() {
                        return "vertical" === l || "buySell" === l ? null : i().createElement(g, {
                            showSlideMasks: A,
                            showSlideArrow: w,
                            maskVisible: V,
                            arrowVisible: F,
                            tabsHeight: P,
                            onArrowClick: R
                        })
                    }), [l, A, w, V, F, P, R]);
                (0, a.useEffect)((function() {
                    if (C.current) {
                        var e = C.current.clientHeight;
                        L(e)
                    }
                }), [L]), (0, a.useEffect)((function() {
                    var e = C.current;
                    if (!h.lq && e instanceof Element) {
                        var t = null;
                        if ("number" !== typeof f || isNaN(f) ? "string" === typeof f && (t = Array.from(e.childNodes).find((function(e) {
                                return e.getAttribute("data-tab-key") === f
                            }))) : t = e.childNodes[f], t) {
                            if ("vertical" === l) {
                                var n = t.getBoundingClientRect(),
                                    r = n.top,
                                    a = n.height,
                                    i = e.getBoundingClientRect(),
                                    o = i.top,
                                    s = -(i.height / 2 - a / 2 - r + o);
                                (0, p.HN)(e, 0, s, 500)
                            } else if ("buySell" !== l) {
                                var c = t.getBoundingClientRect(),
                                    u = c.left,
                                    d = c.width,
                                    v = e.getBoundingClientRect(),
                                    m = v.left;
                                s = -(v.width / 2 - d / 2 - u + m);
                                (0, p.HN)(e, s, 0, 500)
                            }
                            null === I || void 0 === I || I({
                                containerRef: C
                            })
                        }
                    }
                }), [f, l, I]);
                var H = i().Children.toArray(y).map((function(e, t) {
                    var n, a, s;
                    if (!i().isValidElement(e)) return null;
                    if ("Tab" !== (null === (n = e.type) || void 0 === n ? void 0 : n.__name)) return null;
                    var c = "number" === typeof f ? f === t : e.props.tabKey === f,
                        u = {
                            id: "".concat(N, "-tab-").concat((null === (a = e.props) || void 0 === a ? void 0 : a.tabKey) || t),
                            "aria-controls": "".concat(N, "-tab-pane-").concat((null === (s = e.props) || void 0 === s ? void 0 : s.tabKey) || t),
                            tabIndex: c ? 0 : -1
                        };
                    return i().cloneElement(e, (0, r.__assign)((0, r.__assign)({
                        size: d,
                        variant: l,
                        subVariant: o,
                        fontSizeType: b,
                        active: c,
                        onClick: function() {
                            var n;
                            return v && v(t, null === (n = e.props) || void 0 === n ? void 0 : n.tabKey)
                        }
                    }, u), e.props))
                })).filter(Boolean);
                "buySell" === l && (H = H.slice(0, 2));
                var U = {
                        role: "tablist",
                        "aria-orientation": "vertical" === l ? "vertical" : "horizontal"
                    },
                    K = (0, a.useMemo)((function() {
                        return i().createElement(i().Fragment, null, i().createElement(c.Ay, (0, r.__assign)({}, U, k, {
                            className: j,
                            style: (0, r.__assign)({
                                gap: x
                            }, k.style),
                            ref: C,
                            onScroll: function() {
                                return z()
                            }
                        }), H), O)
                    }), [H, j, x, k, O, C, l]);
                return _ ? i().createElement(c.Ay, {
                    className: "".concat(T, "-wrapper")
                }, i().createElement(c.Ay, {
                    className: "".concat(T, "-content")
                }, K), i().createElement(c.Ay, {
                    className: "".concat(T, "-suffix")
                }, _)) : K
            }));
            A.displayName = "TabList";
            const w = A;
            var _ = function(e) {
                e.tabNode;
                var t, n = e.active,
                    l = e.lazy,
                    o = e.children,
                    d = (e.tabKey, e.badgeProps, e.tabProps, (0, r.__rest)(e, ["tabNode", "active", "lazy", "children", "tabKey", "badgeProps", "tabProps"])),
                    f = (0, a.useState)(!l || n),
                    v = f[0],
                    m = f[1],
                    p = (0, u.r)(),
                    h = p.prefixCls,
                    y = p.isRTL,
                    b = "".concat(h, "-tab-pane"),
                    x = s()(b, ((t = {})["".concat(b, "-rtl")] = !!y, t.active = !!n, t), e.className);
                (0, a.useEffect)((function() {
                    return m((function(e) {
                        return e || n
                    }))
                }), [n]);
                var g = n ? {} : {
                        display: "none"
                    },
                    A = {
                        role: "tabpanel",
                        "aria-hidden": !n
                    };
                return i().createElement(c.Ay, (0, r.__assign)({}, A, d, {
                    style: g,
                    className: x,
                    children: v ? o : null
                }))
            };
            _.__name = "TabPane", _.displayName = "TabPane";
            const k = _;
            var C = function(e) {
                var t = e.variant,
                    n = e.lazy,
                    a = e.selectedIndex,
                    l = e.className,
                    o = e.children,
                    d = (0, r.__rest)(e, ["variant", "lazy", "selectedIndex", "className", "children"]),
                    f = (0, u.r)().prefixCls,
                    v = "".concat(f, "-tab-pane-list"),
                    m = s()(v, l),
                    p = i().Children.toArray(o).map((function(e, t) {
                        var l;
                        if (!i().isValidElement(e)) return null;
                        if ("TabPane" !== (null === (l = e.type) || void 0 === l ? void 0 : l.__name)) return null;
                        var o = "number" === typeof a ? a === t : e.props.tabKey === a;
                        return i().cloneElement(e, (0, r.__assign)({
                            active: o,
                            lazy: n,
                            id: "".concat(f, "-tab-pane-").concat(e.props.tabKey || t),
                            "aria-labelledby": "".concat(f, "-tab-").concat(e.props.tabKey || t)
                        }, e.props))
                    })).filter(Boolean);
                return "buySell" === t && (p = p.slice(0, 2)), i().createElement(c.Ay, (0, r.__assign)({}, d, {
                    className: m,
                    children: p
                }))
            };
            C.displayName = "TabPaneList";
            const N = C;
            var T = function(e) {
                var t, n = e.size,
                    o = e.lazy,
                    d = e.onChange,
                    f = e.variant,
                    m = void 0 === f ? "primary" : f,
                    p = e.subVariant,
                    h = e.initialIndex,
                    y = void 0 === h ? 0 : h,
                    b = e.selectedIndex,
                    x = e.showSlideMasks,
                    g = void 0 !== x && x,
                    A = e.showSlideArrow,
                    _ = void 0 !== A && A,
                    k = e.fontSizeType,
                    C = e.tabListProps,
                    T = e.tabPaneListProps,
                    j = (0, r.__rest)(e, ["size", "lazy", "onChange", "variant", "subVariant", "initialIndex", "selectedIndex", "showSlideMasks", "showSlideArrow", "fontSizeType", "tabListProps", "tabPaneListProps"]),
                    S = (0, a.useState)((function() {
                        return void 0 === b ? y : b
                    })),
                    V = S[0],
                    E = S[1],
                    M = (0, a.useRef)(null),
                    F = (0, u.r)(),
                    D = F.prefixCls,
                    B = F.isRTL,
                    P = "".concat(D, "-tabs"),
                    L = s()(P, ((t = {})["".concat(P, "-rtl")] = !!B, t["".concat(P, "__").concat(m)] = !!m, t), e.className),
                    I = [];
                i().Children.forEach(e.children, (function(e, t) {
                    var n, a;
                    if (i().isValidElement(e) && "TabPane" === (null === (a = e.type) || void 0 === a ? void 0 : a.__name)) {
                        var l = e.props,
                            o = l.badgeProps,
                            c = l.tabKey,
                            u = l.tabNode,
                            d = l.tabProps,
                            f = (0, r.__assign)((0, r.__assign)({}, d), {
                                key: t,
                                tabKey: c,
                                badgeProps: o
                            }),
                            m = i().isValidElement(u) ? s()(((n = {})["".concat(D, "-").concat(u.props.className)] = u.props.className, n), null === d || void 0 === d ? void 0 : d.className) : null === d || void 0 === d ? void 0 : d.className;
                        I.push({
                            tabNode: i().createElement(v, (0, r.__assign)({}, f, {
                                className: m,
                                children: u
                            })),
                            tabPaneNode: e
                        })
                    }
                }));
                var z = (0, a.useCallback)((function(e, t) {
                    E(void 0 !== t ? t : e), null === d || void 0 === d || d(e, t)
                }), [d]);
                return (0, l.op)((function() {
                    void 0 !== b && b !== V && E(b)
                })), i().createElement(c.Ay, (0, r.__assign)({}, j, {
                    className: L
                }), i().createElement(w, (0, r.__assign)({
                    ref: M,
                    size: n,
                    variant: m,
                    subVariant: p,
                    onTabClick: z,
                    selectedIndex: V,
                    children: I.map((function(e) {
                        return e.tabNode
                    })),
                    fontSizeType: k,
                    showSlideMasks: g,
                    showSlideArrow: _
                }, C)), i().createElement(N, (0, r.__assign)({
                    lazy: o,
                    selectedIndex: V,
                    children: I.map((function(e) {
                        return e.tabPaneNode
                    }))
                }, T)))
            };
            T.displayName = "Tab", T.Tab = v, T.TabList = w, T.TabPane = k, T.TabPaneList = N;
            const j = T
        },
        Q755: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD");
            const a = function(e) {
                (0, r.useEffect)(e, [])
            }
        },
        wUmw: (e, t, n) => {
            n.d(t, {
                Gb: () => W,
                Jt: () => p,
                hZ: () => x,
                mN: () => Se,
                xI: () => G
            });
            var r = n("DTvD"),
                a = e => "checkbox" === e.type,
                i = e => e instanceof Date,
                l = e => null == e;
            const o = e => "object" === typeof e;
            var s = e => !l(e) && !Array.isArray(e) && o(e) && !i(e),
                c = e => s(e) && e.target ? a(e.target) ? e.target.checked : e.target.value : e,
                u = (e, t) => e.has((e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
                d = "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;

            function f(e) {
                let t;
                const n = Array.isArray(e),
                    r = "undefined" !== typeof FileList && e instanceof FileList;
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else {
                    if (d && (e instanceof Blob || r) || !n && !s(e)) return e;
                    if (t = n ? [] : {}, n || (e => {
                            const t = e.constructor && e.constructor.prototype;
                            return s(t) && t.hasOwnProperty("isPrototypeOf")
                        })(e))
                        for (const n in e) e.hasOwnProperty(n) && (t[n] = f(e[n]));
                    else t = e
                }
                return t
            }
            var v = e => Array.isArray(e) ? e.filter(Boolean) : [],
                m = e => void 0 === e,
                p = (e, t, n) => {
                    if (!t || !s(e)) return n;
                    const r = v(t.split(/[,[\].]+?/)).reduce(((e, t) => l(e) ? e : e[t]), e);
                    return m(r) || r === e ? m(e[t]) ? n : e[t] : r
                },
                h = e => "boolean" === typeof e,
                y = e => /^\w*$/.test(e),
                b = e => v(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
                x = (e, t, n) => {
                    let r = -1;
                    const a = y(t) ? [t] : b(t),
                        i = a.length,
                        l = i - 1;
                    for (; ++r < i;) {
                        const t = a[r];
                        let i = n;
                        if (r !== l) {
                            const n = e[t];
                            i = s(n) || Array.isArray(n) ? n : isNaN(+a[r + 1]) ? {} : []
                        }
                        if ("__proto__" === t || "constructor" === t || "prototype" === t) return;
                        e[t] = i, e = e[t]
                    }
                    return e
                };
            const g = "blur",
                A = "focusout",
                w = "change",
                _ = "onBlur",
                k = "onChange",
                C = "onSubmit",
                N = "onTouched",
                T = "all",
                j = "max",
                S = "min",
                V = "maxLength",
                E = "minLength",
                M = "pattern",
                F = "required",
                D = "validate",
                B = r.createContext(null),
                P = () => r.useContext(B);
            var L = (e, t, n, r = !0) => {
                    const a = {
                        defaultValues: t._defaultValues
                    };
                    for (const i in e) Object.defineProperty(a, i, {
                        get: () => {
                            const a = i;
                            return t._proxyFormState[a] !== T && (t._proxyFormState[a] = !r || T), n && (n[a] = !0), e[a]
                        }
                    });
                    return a
                },
                I = e => s(e) && !Object.keys(e).length,
                z = (e, t, n, r) => {
                    n(e);
                    const {
                        name: a,
                        ...i
                    } = e;
                    return I(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e => t[e] === (!r || T)))
                },
                R = e => Array.isArray(e) ? e : [e],
                O = (e, t, n) => !e || !t || e === t || R(e).some((e => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))));

            function H(e) {
                const t = r.useRef(e);
                t.current = e, r.useEffect((() => {
                    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
                        next: t.current.next
                    });
                    return () => {
                        n && n.unsubscribe()
                    }
                }), [e.disabled])
            }
            var U = e => "string" === typeof e,
                K = (e, t, n, r, a) => U(e) ? (r && t.watch.add(e), p(n, e, a)) : Array.isArray(e) ? e.map((e => (r && t.watch.add(e), p(n, e)))) : (r && (t.watchAll = !0), n);

            function Y(e) {
                const t = P(),
                    {
                        name: n,
                        disabled: a,
                        control: i = t.control,
                        shouldUnregister: l
                    } = e,
                    o = u(i._names.array, n),
                    s = function(e) {
                        const t = P(),
                            {
                                control: n = t.control,
                                name: a,
                                defaultValue: i,
                                disabled: l,
                                exact: o
                            } = e || {},
                            s = r.useRef(a);
                        s.current = a, H({
                            disabled: l,
                            subject: n._subjects.values,
                            next: e => {
                                O(s.current, e.name, o) && u(f(K(s.current, n._names, e.values || n._formValues, !1, i)))
                            }
                        });
                        const [c, u] = r.useState(n._getWatch(a, i));
                        return r.useEffect((() => n._removeUnmounted())), c
                    }({
                        control: i,
                        name: n,
                        defaultValue: p(i._formValues, n, p(i._defaultValues, n, e.defaultValue)),
                        exact: !0
                    }),
                    d = function(e) {
                        const t = P(),
                            {
                                control: n = t.control,
                                disabled: a,
                                name: i,
                                exact: l
                            } = e || {},
                            [o, s] = r.useState(n._formState),
                            c = r.useRef(!0),
                            u = r.useRef({
                                isDirty: !1,
                                isLoading: !1,
                                dirtyFields: !1,
                                touchedFields: !1,
                                validatingFields: !1,
                                isValidating: !1,
                                isValid: !1,
                                errors: !1
                            }),
                            d = r.useRef(i);
                        return d.current = i, H({
                            disabled: a,
                            next: e => c.current && O(d.current, e.name, l) && z(e, u.current, n._updateFormState) && s({ ...n._formState,
                                ...e
                            }),
                            subject: n._subjects.state
                        }), r.useEffect((() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
                            c.current = !1
                        })), [n]), r.useMemo((() => L(o, n, u.current, !1)), [o, n])
                    }({
                        control: i,
                        name: n,
                        exact: !0
                    }),
                    v = r.useRef(i.register(n, { ...e.rules,
                        value: s,
                        ...h(e.disabled) ? {
                            disabled: e.disabled
                        } : {}
                    })),
                    y = r.useMemo((() => Object.defineProperties({}, {
                        invalid: {
                            enumerable: !0,
                            get: () => !!p(d.errors, n)
                        },
                        isDirty: {
                            enumerable: !0,
                            get: () => !!p(d.dirtyFields, n)
                        },
                        isTouched: {
                            enumerable: !0,
                            get: () => !!p(d.touchedFields, n)
                        },
                        isValidating: {
                            enumerable: !0,
                            get: () => !!p(d.validatingFields, n)
                        },
                        error: {
                            enumerable: !0,
                            get: () => p(d.errors, n)
                        }
                    })), [d, n]),
                    b = r.useMemo((() => ({
                        name: n,
                        value: s,
                        ...h(a) || d.disabled ? {
                            disabled: d.disabled || a
                        } : {},
                        onChange: e => v.current.onChange({
                            target: {
                                value: c(e),
                                name: n
                            },
                            type: w
                        }),
                        onBlur: () => v.current.onBlur({
                            target: {
                                value: p(i._formValues, n),
                                name: n
                            },
                            type: g
                        }),
                        ref: e => {
                            const t = p(i._fields, n);
                            t && e && (t._f.ref = {
                                focus: () => e.focus(),
                                select: () => e.select(),
                                setCustomValidity: t => e.setCustomValidity(t),
                                reportValidity: () => e.reportValidity()
                            })
                        }
                    })), [n, i._formValues, a, d.disabled, s, i._fields]);
                return r.useEffect((() => {
                    const e = i._options.shouldUnregister || l,
                        t = (e, t) => {
                            const n = p(i._fields, e);
                            n && n._f && (n._f.mount = t)
                        };
                    if (t(n, !0), e) {
                        const e = f(p(i._options.defaultValues, n));
                        x(i._defaultValues, n, e), m(p(i._formValues, n)) && x(i._formValues, n, e)
                    }
                    return !o && i.register(n), () => {
                        (o ? e && !i._state.action : e) ? i.unregister(n): t(n, !1)
                    }
                }), [n, i, o, l]), r.useEffect((() => {
                    i._updateDisabledField({
                        disabled: a,
                        fields: i._fields,
                        name: n
                    })
                }), [a, n, i]), r.useMemo((() => ({
                    field: b,
                    formState: d,
                    fieldState: y
                })), [b, d, y])
            }
            const G = e => e.render(Y(e));
            var W = (e, t, n, r, a) => t ? { ...n[e],
                    types: { ...n[e] && n[e].types ? n[e].types : {},
                        [r]: a || !0
                    }
                } : {},
                q = e => ({
                    isOnSubmit: !e || e === C,
                    isOnBlur: e === _,
                    isOnChange: e === k,
                    isOnAll: e === T,
                    isOnTouch: e === N
                }),
                Q = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))));
            const J = (e, t, n, r) => {
                for (const a of n || Object.keys(e)) {
                    const n = p(e, a);
                    if (n) {
                        const {
                            _f: e,
                            ...i
                        } = n;
                        if (e) {
                            if (e.refs && e.refs[0] && t(e.refs[0], a) && !r) return !0;
                            if (e.ref && t(e.ref, e.name) && !r) return !0;
                            if (J(i, t)) break
                        } else if (s(i) && J(i, t)) break
                    }
                }
            };
            var Z = (e, t, n) => {
                    const r = R(p(e, n));
                    return x(r, "root", t[n]), x(e, n, r), e
                },
                X = e => "file" === e.type,
                $ = e => "function" === typeof e,
                ee = e => {
                    if (!d) return !1;
                    const t = e ? e.ownerDocument : 0;
                    return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
                },
                te = e => U(e),
                ne = e => "radio" === e.type,
                re = e => e instanceof RegExp;
            const ae = {
                    value: !1,
                    isValid: !1
                },
                ie = {
                    value: !0,
                    isValid: !0
                };
            var le = e => {
                if (Array.isArray(e)) {
                    if (e.length > 1) {
                        const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                        return {
                            value: t,
                            isValid: !!t.length
                        }
                    }
                    return e[0].checked && !e[0].disabled ? e[0].attributes && !m(e[0].attributes.value) ? m(e[0].value) || "" === e[0].value ? ie : {
                        value: e[0].value,
                        isValid: !0
                    } : ie : ae
                }
                return ae
            };
            const oe = {
                isValid: !1,
                value: null
            };
            var se = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
                isValid: !0,
                value: t.value
            } : e), oe) : oe;

            function ce(e, t, n = "validate") {
                if (te(e) || Array.isArray(e) && e.every(te) || h(e) && !e) return {
                    type: n,
                    message: te(e) ? e : "",
                    ref: t
                }
            }
            var ue = e => s(e) && !re(e) ? e : {
                    value: e,
                    message: ""
                },
                de = async (e, t, n, r, i, o) => {
                    const {
                        ref: c,
                        refs: u,
                        required: d,
                        maxLength: f,
                        minLength: v,
                        min: y,
                        max: b,
                        pattern: x,
                        validate: g,
                        name: A,
                        valueAsNumber: w,
                        mount: _
                    } = e._f, k = p(n, A);
                    if (!_ || t.has(A)) return {};
                    const C = u ? u[0] : c,
                        N = e => {
                            i && C.reportValidity && (C.setCustomValidity(h(e) ? "" : e || ""), C.reportValidity())
                        },
                        T = {},
                        B = ne(c),
                        P = a(c),
                        L = B || P,
                        z = (w || X(c)) && m(c.value) && m(k) || ee(c) && "" === c.value || "" === k || Array.isArray(k) && !k.length,
                        R = W.bind(null, A, r, T),
                        O = (e, t, n, r = V, a = E) => {
                            const i = e ? t : n;
                            T[A] = {
                                type: e ? r : a,
                                message: i,
                                ref: c,
                                ...R(e ? r : a, i)
                            }
                        };
                    if (o ? !Array.isArray(k) || !k.length : d && (!L && (z || l(k)) || h(k) && !k || P && !le(u).isValid || B && !se(u).isValid)) {
                        const {
                            value: e,
                            message: t
                        } = te(d) ? {
                            value: !!d,
                            message: d
                        } : ue(d);
                        if (e && (T[A] = {
                                type: F,
                                message: t,
                                ref: C,
                                ...R(F, t)
                            }, !r)) return N(t), T
                    }
                    if (!z && (!l(y) || !l(b))) {
                        let e, t;
                        const n = ue(b),
                            a = ue(y);
                        if (l(k) || isNaN(k)) {
                            const r = c.valueAsDate || new Date(k),
                                i = e => new Date((new Date).toDateString() + " " + e),
                                l = "time" == c.type,
                                o = "week" == c.type;
                            U(n.value) && k && (e = l ? i(k) > i(n.value) : o ? k > n.value : r > new Date(n.value)), U(a.value) && k && (t = l ? i(k) < i(a.value) : o ? k < a.value : r < new Date(a.value))
                        } else {
                            const r = c.valueAsNumber || (k ? +k : k);
                            l(n.value) || (e = r > n.value), l(a.value) || (t = r < a.value)
                        }
                        if ((e || t) && (O(!!e, n.message, a.message, j, S), !r)) return N(T[A].message), T
                    }
                    if ((f || v) && !z && (U(k) || o && Array.isArray(k))) {
                        const e = ue(f),
                            t = ue(v),
                            n = !l(e.value) && k.length > +e.value,
                            a = !l(t.value) && k.length < +t.value;
                        if ((n || a) && (O(n, e.message, t.message), !r)) return N(T[A].message), T
                    }
                    if (x && !z && U(k)) {
                        const {
                            value: e,
                            message: t
                        } = ue(x);
                        if (re(e) && !k.match(e) && (T[A] = {
                                type: M,
                                message: t,
                                ref: c,
                                ...R(M, t)
                            }, !r)) return N(t), T
                    }
                    if (g)
                        if ($(g)) {
                            const e = ce(await g(k, n), C);
                            if (e && (T[A] = { ...e,
                                    ...R(D, e.message)
                                }, !r)) return N(e.message), T
                        } else if (s(g)) {
                        let e = {};
                        for (const t in g) {
                            if (!I(e) && !r) break;
                            const a = ce(await g[t](k, n), C, t);
                            a && (e = { ...a,
                                ...R(t, a.message)
                            }, N(a.message), r && (T[A] = e))
                        }
                        if (!I(e) && (T[A] = {
                                ref: C,
                                ...e
                            }, !r)) return T
                    }
                    return N(!0), T
                };

            function fe(e, t) {
                const n = Array.isArray(t) ? t : y(t) ? [t] : b(t),
                    r = 1 === n.length ? e : function(e, t) {
                        const n = t.slice(0, -1).length;
                        let r = 0;
                        for (; r < n;) e = m(e) ? r++ : e[t[r++]];
                        return e
                    }(e, n),
                    a = n.length - 1,
                    i = n[a];
                return r && delete r[i], 0 !== a && (s(r) && I(r) || Array.isArray(r) && function(e) {
                    for (const t in e)
                        if (e.hasOwnProperty(t) && !m(e[t])) return !1;
                    return !0
                }(r)) && fe(e, n.slice(0, -1)), e
            }
            var ve = () => {
                    let e = [];
                    return {
                        get observers() {
                            return e
                        },
                        next: t => {
                            for (const n of e) n.next && n.next(t)
                        },
                        subscribe: t => (e.push(t), {
                            unsubscribe: () => {
                                e = e.filter((e => e !== t))
                            }
                        }),
                        unsubscribe: () => {
                            e = []
                        }
                    }
                },
                me = e => l(e) || !o(e);

            function pe(e, t) {
                if (me(e) || me(t)) return e === t;
                if (i(e) && i(t)) return e.getTime() === t.getTime();
                const n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (const a of n) {
                    const n = e[a];
                    if (!r.includes(a)) return !1;
                    if ("ref" !== a) {
                        const e = t[a];
                        if (i(n) && i(e) || s(n) && s(e) || Array.isArray(n) && Array.isArray(e) ? !pe(n, e) : n !== e) return !1
                    }
                }
                return !0
            }
            var he = e => "select-multiple" === e.type,
                ye = e => ee(e) && e.isConnected,
                be = e => {
                    for (const t in e)
                        if ($(e[t])) return !0;
                    return !1
                };

            function xe(e, t = {}) {
                const n = Array.isArray(e);
                if (s(e) || n)
                    for (const r in e) Array.isArray(e[r]) || s(e[r]) && !be(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, xe(e[r], t[r])) : l(e[r]) || (t[r] = !0);
                return t
            }

            function ge(e, t, n) {
                const r = Array.isArray(e);
                if (s(e) || r)
                    for (const a in e) Array.isArray(e[a]) || s(e[a]) && !be(e[a]) ? m(t) || me(n[a]) ? n[a] = Array.isArray(e[a]) ? xe(e[a], []) : { ...xe(e[a])
                    } : ge(e[a], l(t) ? {} : t[a], n[a]) : n[a] = !pe(e[a], t[a]);
                return n
            }
            var Ae = (e, t) => ge(e, t, xe(t)),
                we = (e, {
                    valueAsNumber: t,
                    valueAsDate: n,
                    setValueAs: r
                }) => m(e) ? e : t ? "" === e ? NaN : e ? +e : e : n && U(e) ? new Date(e) : r ? r(e) : e;

            function _e(e) {
                const t = e.ref;
                return X(t) ? t.files : ne(t) ? se(e.refs).value : he(t) ? [...t.selectedOptions].map((({
                    value: e
                }) => e)) : a(t) ? le(e.refs).value : we(m(t.value) ? e.ref.value : t.value, e)
            }
            var ke = e => m(e) ? e : re(e) ? e.source : s(e) ? re(e.value) ? e.value.source : e.value : e;
            const Ce = "AsyncFunction";

            function Ne(e, t, n) {
                const r = p(e, n);
                if (r || y(n)) return {
                    error: r,
                    name: n
                };
                const a = n.split(".");
                for (; a.length;) {
                    const r = a.join("."),
                        i = p(t, r),
                        l = p(e, r);
                    if (i && !Array.isArray(i) && n !== r) return {
                        name: n
                    };
                    if (l && l.type) return {
                        name: r,
                        error: l
                    };
                    a.pop()
                }
                return {
                    name: n
                }
            }
            const Te = {
                mode: C,
                reValidateMode: k,
                shouldFocusError: !0
            };

            function je(e = {}) {
                let t, n = { ...Te,
                        ...e
                    },
                    r = {
                        submitCount: 0,
                        isDirty: !1,
                        isLoading: $(n.defaultValues),
                        isValidating: !1,
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        touchedFields: {},
                        dirtyFields: {},
                        validatingFields: {},
                        errors: n.errors || {},
                        disabled: n.disabled || !1
                    },
                    o = {},
                    y = (s(n.defaultValues) || s(n.values)) && f(n.defaultValues || n.values) || {},
                    b = n.shouldUnregister ? {} : f(y),
                    w = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    _ = {
                        mount: new Set,
                        disabled: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    k = 0;
                const C = {
                        isDirty: !1,
                        dirtyFields: !1,
                        validatingFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    N = {
                        values: ve(),
                        array: ve(),
                        state: ve()
                    },
                    j = q(n.mode),
                    S = q(n.reValidateMode),
                    V = n.criteriaMode === T,
                    E = async e => {
                        if (!n.disabled && (C.isValid || e)) {
                            const e = n.resolver ? I((await P()).errors) : await L(o, !0);
                            e !== r.isValid && N.state.next({
                                isValid: e
                            })
                        }
                    },
                    M = (e, t) => {
                        n.disabled || !C.isValidating && !C.validatingFields || ((e || Array.from(_.mount)).forEach((e => {
                            e && (t ? x(r.validatingFields, e, t) : fe(r.validatingFields, e))
                        })), N.state.next({
                            validatingFields: r.validatingFields,
                            isValidating: !I(r.validatingFields)
                        }))
                    },
                    F = (e, t, n, r) => {
                        const a = p(o, e);
                        if (a) {
                            const i = p(b, e, m(n) ? p(y, e) : n);
                            m(i) || r && r.defaultChecked || t ? x(b, e, t ? i : _e(a._f)) : H(e, i), w.mount && E()
                        }
                    },
                    D = (e, t, a, i, l) => {
                        let s = !1,
                            c = !1;
                        const u = {
                            name: e
                        };
                        if (!n.disabled) {
                            const n = !!(p(o, e) && p(o, e)._f && p(o, e)._f.disabled);
                            if (!a || i) {
                                C.isDirty && (c = r.isDirty, r.isDirty = u.isDirty = z(), s = c !== u.isDirty);
                                const a = n || pe(p(y, e), t);
                                c = !(n || !p(r.dirtyFields, e)), a || n ? fe(r.dirtyFields, e) : x(r.dirtyFields, e, !0), u.dirtyFields = r.dirtyFields, s = s || C.dirtyFields && c !== !a
                            }
                            if (a) {
                                const t = p(r.touchedFields, e);
                                t || (x(r.touchedFields, e, a), u.touchedFields = r.touchedFields, s = s || C.touchedFields && t !== a)
                            }
                            s && l && N.state.next(u)
                        }
                        return s ? u : {}
                    },
                    B = (e, a, i, l) => {
                        const o = p(r.errors, e),
                            s = C.isValid && h(a) && r.isValid !== a;
                        var c;
                        if (n.delayError && i ? (c = () => ((e, t) => {
                                x(r.errors, e, t), N.state.next({
                                    errors: r.errors
                                })
                            })(e, i), t = e => {
                                clearTimeout(k), k = setTimeout(c, e)
                            }, t(n.delayError)) : (clearTimeout(k), t = null, i ? x(r.errors, e, i) : fe(r.errors, e)), (i ? !pe(o, i) : o) || !I(l) || s) {
                            const t = { ...l,
                                ...s && h(a) ? {
                                    isValid: a
                                } : {},
                                errors: r.errors,
                                name: e
                            };
                            r = { ...r,
                                ...t
                            }, N.state.next(t)
                        }
                    },
                    P = async e => {
                        M(e, !0);
                        const t = await n.resolver(b, n.context, ((e, t, n, r) => {
                            const a = {};
                            for (const i of e) {
                                const e = p(t, i);
                                e && x(a, i, e._f)
                            }
                            return {
                                criteriaMode: n,
                                names: [...e],
                                fields: a,
                                shouldUseNativeValidation: r
                            }
                        })(e || _.mount, o, n.criteriaMode, n.shouldUseNativeValidation));
                        return M(e), t
                    },
                    L = async (e, t, a = {
                        valid: !0
                    }) => {
                        for (const l in e) {
                            const o = e[l];
                            if (o) {
                                const {
                                    _f: e,
                                    ...c
                                } = o;
                                if (e) {
                                    const c = _.array.has(e.name),
                                        u = o._f && (!!(i = o._f) && !!i.validate && !!($(i.validate) && i.validate.constructor.name === Ce || s(i.validate) && Object.values(i.validate).find((e => e.constructor.name === Ce))));
                                    u && C.validatingFields && M([l], !0);
                                    const d = await de(o, _.disabled, b, V, n.shouldUseNativeValidation && !t, c);
                                    if (u && C.validatingFields && M([l]), d[e.name] && (a.valid = !1, t)) break;
                                    !t && (p(d, e.name) ? c ? Z(r.errors, d, e.name) : x(r.errors, e.name, d[e.name]) : fe(r.errors, e.name))
                                }!I(c) && await L(c, t, a)
                            }
                        }
                        var i;
                        return a.valid
                    },
                    z = (e, t) => !n.disabled && (e && t && x(b, e, t), !pe(ae(), y)),
                    O = (e, t, n) => K(e, _, { ...w.mount ? b : m(t) ? y : U(e) ? {
                            [e]: t
                        } : t
                    }, n, t),
                    H = (e, t, n = {}) => {
                        const r = p(o, e);
                        let i = t;
                        if (r) {
                            const n = r._f;
                            n && (!n.disabled && x(b, e, we(t, n)), i = ee(n.ref) && l(t) ? "" : t, he(n.ref) ? [...n.ref.options].forEach((e => e.selected = i.includes(e.value))) : n.refs ? a(n.ref) ? n.refs.length > 1 ? n.refs.forEach((e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t => t === e.value)) : i === e.value))) : n.refs[0] && (n.refs[0].checked = !!i) : n.refs.forEach((e => e.checked = e.value === i)) : X(n.ref) ? n.ref.value = "" : (n.ref.value = i, n.ref.type || N.values.next({
                                name: e,
                                values: { ...b
                                }
                            })))
                        }(n.shouldDirty || n.shouldTouch) && D(e, i, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && re(e)
                    },
                    Y = (e, t, n) => {
                        for (const r in t) {
                            const a = t[r],
                                l = `${e}.${r}`,
                                c = p(o, l);
                            (_.array.has(e) || s(a) || c && !c._f) && !i(a) ? Y(l, a, n) : H(l, a, n)
                        }
                    },
                    G = (e, t, n = {}) => {
                        const a = p(o, e),
                            i = _.array.has(e),
                            s = f(t);
                        x(b, e, s), i ? (N.array.next({
                            name: e,
                            values: { ...b
                            }
                        }), (C.isDirty || C.dirtyFields) && n.shouldDirty && N.state.next({
                            name: e,
                            dirtyFields: Ae(y, b),
                            isDirty: z(e, s)
                        })) : !a || a._f || l(s) ? H(e, s, n) : Y(e, s, n), Q(e, _) && N.state.next({ ...r
                        }), N.values.next({
                            name: w.mount ? e : void 0,
                            values: { ...b
                            }
                        })
                    },
                    W = async e => {
                        w.mount = !0;
                        const a = e.target;
                        let l = a.name,
                            s = !0;
                        const u = p(o, l),
                            d = e => {
                                s = Number.isNaN(e) || i(e) && isNaN(e.getTime()) || pe(e, p(b, l, e))
                            };
                        if (u) {
                            let i, v;
                            const m = a.type ? _e(u._f) : c(e),
                                h = e.type === g || e.type === A,
                                y = !((f = u._f).mount && (f.required || f.min || f.max || f.maxLength || f.minLength || f.pattern || f.validate)) && !n.resolver && !p(r.errors, l) && !u._f.deps || ((e, t, n, r, a) => !a.isOnAll && (!n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : !(n ? r.isOnChange : a.isOnChange) || e))(h, p(r.touchedFields, l), r.isSubmitted, S, j),
                                w = Q(l, _, h);
                            x(b, l, m), h ? (u._f.onBlur && u._f.onBlur(e), t && t(0)) : u._f.onChange && u._f.onChange(e);
                            const k = D(l, m, h, !1),
                                T = !I(k) || w;
                            if (!h && N.values.next({
                                    name: l,
                                    type: e.type,
                                    values: { ...b
                                    }
                                }), y) return C.isValid && ("onBlur" === n.mode && h ? E() : h || E()), T && N.state.next({
                                name: l,
                                ...w ? {} : k
                            });
                            if (!h && w && N.state.next({ ...r
                                }), n.resolver) {
                                const {
                                    errors: e
                                } = await P([l]);
                                if (d(m), s) {
                                    const t = Ne(r.errors, o, l),
                                        n = Ne(e, o, t.name || l);
                                    i = n.error, l = n.name, v = I(e)
                                }
                            } else M([l], !0), i = (await de(u, _.disabled, b, V, n.shouldUseNativeValidation))[l], M([l]), d(m), s && (i ? v = !1 : C.isValid && (v = await L(o, !0)));
                            s && (u._f.deps && re(u._f.deps), B(l, v, i, k))
                        }
                        var f
                    },
                    te = (e, t) => {
                        if (p(r.errors, t) && e.focus) return e.focus(), 1
                    },
                    re = async (e, t = {}) => {
                        let a, i;
                        const l = R(e);
                        if (n.resolver) {
                            const t = await (async e => {
                                const {
                                    errors: t
                                } = await P(e);
                                if (e)
                                    for (const n of e) {
                                        const e = p(t, n);
                                        e ? x(r.errors, n, e) : fe(r.errors, n)
                                    } else r.errors = t;
                                return t
                            })(m(e) ? e : l);
                            a = I(t), i = e ? !l.some((e => p(t, e))) : a
                        } else e ? (i = (await Promise.all(l.map((async e => {
                            const t = p(o, e);
                            return await L(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean), (i || r.isValid) && E()) : i = a = await L(o);
                        return N.state.next({ ...!U(e) || C.isValid && a !== r.isValid ? {} : {
                                name: e
                            },
                            ...n.resolver || !e ? {
                                isValid: a
                            } : {},
                            errors: r.errors
                        }), t.shouldFocus && !i && J(o, te, e ? l : _.mount), i
                    },
                    ae = e => {
                        const t = { ...w.mount ? b : y
                        };
                        return m(e) ? t : U(e) ? p(t, e) : e.map((e => p(t, e)))
                    },
                    ie = (e, t) => ({
                        invalid: !!p((t || r).errors, e),
                        isDirty: !!p((t || r).dirtyFields, e),
                        error: p((t || r).errors, e),
                        isValidating: !!p(r.validatingFields, e),
                        isTouched: !!p((t || r).touchedFields, e)
                    }),
                    le = (e, t, n) => {
                        const a = (p(o, e, {
                                _f: {}
                            })._f || {}).ref,
                            i = p(r.errors, e) || {},
                            {
                                ref: l,
                                message: s,
                                type: c,
                                ...u
                            } = i;
                        x(r.errors, e, { ...u,
                            ...t,
                            ref: a
                        }), N.state.next({
                            name: e,
                            errors: r.errors,
                            isValid: !1
                        }), n && n.shouldFocus && a && a.focus && a.focus()
                    },
                    oe = (e, t = {}) => {
                        for (const a of e ? R(e) : _.mount) _.mount.delete(a), _.array.delete(a), t.keepValue || (fe(o, a), fe(b, a)), !t.keepError && fe(r.errors, a), !t.keepDirty && fe(r.dirtyFields, a), !t.keepTouched && fe(r.touchedFields, a), !t.keepIsValidating && fe(r.validatingFields, a), !n.shouldUnregister && !t.keepDefaultValue && fe(y, a);
                        N.values.next({
                            values: { ...b
                            }
                        }), N.state.next({ ...r,
                            ...t.keepDirty ? {
                                isDirty: z()
                            } : {}
                        }), !t.keepIsValid && E()
                    },
                    se = ({
                        disabled: e,
                        name: t,
                        field: n,
                        fields: r
                    }) => {
                        (h(e) && w.mount || e || _.disabled.has(t)) && (e ? _.disabled.add(t) : _.disabled.delete(t), D(t, _e(n ? n._f : p(r, t)._f), !1, !1, !0))
                    },
                    ce = (e, t = {}) => {
                        let r = p(o, e);
                        const i = h(t.disabled) || h(n.disabled);
                        return x(o, e, { ...r || {},
                            _f: { ...r && r._f ? r._f : {
                                    ref: {
                                        name: e
                                    }
                                },
                                name: e,
                                mount: !0,
                                ...t
                            }
                        }), _.mount.add(e), r ? se({
                            field: r,
                            disabled: h(t.disabled) ? t.disabled : n.disabled,
                            name: e
                        }) : F(e, !0, t.value), { ...i ? {
                                disabled: t.disabled || n.disabled
                            } : {},
                            ...n.progressive ? {
                                required: !!t.required,
                                min: ke(t.min),
                                max: ke(t.max),
                                minLength: ke(t.minLength),
                                maxLength: ke(t.maxLength),
                                pattern: ke(t.pattern)
                            } : {},
                            name: e,
                            onChange: W,
                            onBlur: W,
                            ref: i => {
                                if (i) {
                                    ce(e, t), r = p(o, e);
                                    const n = m(i.value) && i.querySelectorAll && i.querySelectorAll("input,select,textarea")[0] || i,
                                        l = (e => ne(e) || a(e))(n),
                                        s = r._f.refs || [];
                                    if (l ? s.find((e => e === n)) : n === r._f.ref) return;
                                    x(o, e, {
                                        _f: { ...r._f,
                                            ...l ? {
                                                refs: [...s.filter(ye), n, ...Array.isArray(p(y, e)) ? [{}] : []],
                                                ref: {
                                                    type: n.type,
                                                    name: e
                                                }
                                            } : {
                                                ref: n
                                            }
                                        }
                                    }), F(e, !1, void 0, n)
                                } else r = p(o, e, {}), r._f && (r._f.mount = !1), (n.shouldUnregister || t.shouldUnregister) && (!u(_.array, e) || !w.action) && _.unMount.add(e)
                            }
                        }
                    },
                    ue = () => n.shouldFocusError && J(o, te, _.mount),
                    me = (e, t) => async a => {
                        let i;
                        a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
                        let l = f(b);
                        if (_.disabled.size)
                            for (const e of _.disabled) x(l, e, void 0);
                        if (N.state.next({
                                isSubmitting: !0
                            }), n.resolver) {
                            const {
                                errors: e,
                                values: t
                            } = await P();
                            r.errors = e, l = t
                        } else await L(o);
                        if (fe(r.errors, "root"), I(r.errors)) {
                            N.state.next({
                                errors: {}
                            });
                            try {
                                await e(l, a)
                            } catch (s) {
                                i = s
                            }
                        } else t && await t({ ...r.errors
                        }, a), ue(), setTimeout(ue);
                        if (N.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: I(r.errors) && !i,
                                submitCount: r.submitCount + 1,
                                errors: r.errors
                            }), i) throw i
                    },
                    be = (e, t = {}) => {
                        const a = e ? f(e) : y,
                            i = f(a),
                            l = I(e),
                            s = l ? y : i;
                        if (t.keepDefaultValues || (y = a), !t.keepValues) {
                            if (t.keepDirtyValues) {
                                const e = new Set([..._.mount, ...Object.keys(Ae(y, b))]);
                                for (const t of Array.from(e)) p(r.dirtyFields, t) ? x(s, t, p(b, t)) : G(t, p(s, t))
                            } else {
                                if (d && m(e))
                                    for (const e of _.mount) {
                                        const t = p(o, e);
                                        if (t && t._f) {
                                            const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            if (ee(e)) {
                                                const t = e.closest("form");
                                                if (t) {
                                                    t.reset();
                                                    break
                                                }
                                            }
                                        }
                                    }
                                o = {}
                            }
                            b = n.shouldUnregister ? t.keepDefaultValues ? f(y) : {} : f(s), N.array.next({
                                values: { ...s
                                }
                            }), N.values.next({
                                values: { ...s
                                }
                            })
                        }
                        _ = {
                            mount: t.keepDirtyValues ? _.mount : new Set,
                            unMount: new Set,
                            array: new Set,
                            disabled: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, w.mount = !C.isValid || !!t.keepIsValid || !!t.keepDirtyValues, w.watch = !!n.shouldUnregister, N.state.next({
                            submitCount: t.keepSubmitCount ? r.submitCount : 0,
                            isDirty: !l && (t.keepDirty ? r.isDirty : !(!t.keepDefaultValues || pe(e, y))),
                            isSubmitted: !!t.keepIsSubmitted && r.isSubmitted,
                            dirtyFields: l ? {} : t.keepDirtyValues ? t.keepDefaultValues && b ? Ae(y, b) : r.dirtyFields : t.keepDefaultValues && e ? Ae(y, e) : t.keepDirty ? r.dirtyFields : {},
                            touchedFields: t.keepTouched ? r.touchedFields : {},
                            errors: t.keepErrors ? r.errors : {},
                            isSubmitSuccessful: !!t.keepIsSubmitSuccessful && r.isSubmitSuccessful,
                            isSubmitting: !1
                        })
                    },
                    xe = (e, t) => be($(e) ? e(b) : e, t);
                return {
                    control: {
                        register: ce,
                        unregister: oe,
                        getFieldState: ie,
                        handleSubmit: me,
                        setError: le,
                        _executeSchema: P,
                        _getWatch: O,
                        _getDirty: z,
                        _updateValid: E,
                        _removeUnmounted: () => {
                            for (const e of _.unMount) {
                                const t = p(o, e);
                                t && (t._f.refs ? t._f.refs.every((e => !ye(e))) : !ye(t._f.ref)) && oe(e)
                            }
                            _.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], a, i, l = !0, s = !0) => {
                            if (i && a && !n.disabled) {
                                if (w.action = !0, s && Array.isArray(p(o, e))) {
                                    const t = a(p(o, e), i.argA, i.argB);
                                    l && x(o, e, t)
                                }
                                if (s && Array.isArray(p(r.errors, e))) {
                                    const t = a(p(r.errors, e), i.argA, i.argB);
                                    l && x(r.errors, e, t), ((e, t) => {
                                        !v(p(e, t)).length && fe(e, t)
                                    })(r.errors, e)
                                }
                                if (C.touchedFields && s && Array.isArray(p(r.touchedFields, e))) {
                                    const t = a(p(r.touchedFields, e), i.argA, i.argB);
                                    l && x(r.touchedFields, e, t)
                                }
                                C.dirtyFields && (r.dirtyFields = Ae(y, b)), N.state.next({
                                    name: e,
                                    isDirty: z(e, t),
                                    dirtyFields: r.dirtyFields,
                                    errors: r.errors,
                                    isValid: r.isValid
                                })
                            } else x(b, e, t)
                        },
                        _updateDisabledField: se,
                        _getFieldArray: e => v(p(w.mount ? b : y, e, n.shouldUnregister ? p(y, e, []) : [])),
                        _reset: be,
                        _resetDefaultValues: () => $(n.defaultValues) && n.defaultValues().then((e => {
                            xe(e, n.resetOptions), N.state.next({
                                isLoading: !1
                            })
                        })),
                        _updateFormState: e => {
                            r = { ...r,
                                ...e
                            }
                        },
                        _disableForm: e => {
                            h(e) && (N.state.next({
                                disabled: e
                            }), J(o, ((t, n) => {
                                const r = p(o, n);
                                r && (t.disabled = r._f.disabled || e, Array.isArray(r._f.refs) && r._f.refs.forEach((t => {
                                    t.disabled = r._f.disabled || e
                                })))
                            }), 0, !1))
                        },
                        _subjects: N,
                        _proxyFormState: C,
                        _setErrors: e => {
                            r.errors = e, N.state.next({
                                errors: r.errors,
                                isValid: !1
                            })
                        },
                        get _fields() {
                            return o
                        },
                        get _formValues() {
                            return b
                        },
                        get _state() {
                            return w
                        },
                        set _state(e) {
                            w = e
                        },
                        get _defaultValues() {
                            return y
                        },
                        get _names() {
                            return _
                        },
                        set _names(e) {
                            _ = e
                        },
                        get _formState() {
                            return r
                        },
                        set _formState(e) {
                            r = e
                        },
                        get _options() {
                            return n
                        },
                        set _options(e) {
                            n = { ...n,
                                ...e
                            }
                        }
                    },
                    trigger: re,
                    register: ce,
                    handleSubmit: me,
                    watch: (e, t) => $(e) ? N.values.subscribe({
                        next: n => e(O(void 0, t), n)
                    }) : O(e, t, !0),
                    setValue: G,
                    getValues: ae,
                    reset: xe,
                    resetField: (e, t = {}) => {
                        p(o, e) && (m(t.defaultValue) ? G(e, f(p(y, e))) : (G(e, t.defaultValue), x(y, e, f(t.defaultValue))), t.keepTouched || fe(r.touchedFields, e), t.keepDirty || (fe(r.dirtyFields, e), r.isDirty = t.defaultValue ? z(e, f(p(y, e))) : z()), t.keepError || (fe(r.errors, e), C.isValid && E()), N.state.next({ ...r
                        }))
                    },
                    clearErrors: e => {
                        e && R(e).forEach((e => fe(r.errors, e))), N.state.next({
                            errors: e ? r.errors : {}
                        })
                    },
                    unregister: oe,
                    setError: le,
                    setFocus: (e, t = {}) => {
                        const n = p(o, e),
                            r = n && n._f;
                        if (r) {
                            const e = r.refs ? r.refs[0] : r.ref;
                            e.focus && (e.focus(), t.shouldSelect && $(e.select) && e.select())
                        }
                    },
                    getFieldState: ie
                }
            }

            function Se(e = {}) {
                const t = r.useRef(void 0),
                    n = r.useRef(void 0),
                    [a, i] = r.useState({
                        isDirty: !1,
                        isValidating: !1,
                        isLoading: $(e.defaultValues),
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        submitCount: 0,
                        dirtyFields: {},
                        touchedFields: {},
                        validatingFields: {},
                        errors: e.errors || {},
                        disabled: e.disabled || !1,
                        defaultValues: $(e.defaultValues) ? void 0 : e.defaultValues
                    });
                t.current || (t.current = { ...je(e),
                    formState: a
                });
                const l = t.current.control;
                return l._options = e, H({
                    subject: l._subjects.state,
                    next: e => {
                        z(e, l._proxyFormState, l._updateFormState, !0) && i({ ...l._formState
                        })
                    }
                }), r.useEffect((() => l._disableForm(e.disabled)), [l, e.disabled]), r.useEffect((() => {
                    if (l._proxyFormState.isDirty) {
                        const e = l._getDirty();
                        e !== a.isDirty && l._subjects.state.next({
                            isDirty: e
                        })
                    }
                }), [l, a.isDirty]), r.useEffect((() => {
                    e.values && !pe(e.values, n.current) ? (l._reset(e.values, l._options.resetOptions), n.current = e.values, i((e => ({ ...e
                    })))) : l._resetDefaultValues()
                }), [e.values, l]), r.useEffect((() => {
                    e.errors && l._setErrors(e.errors)
                }), [e.errors, l]), r.useEffect((() => {
                    l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState
                    })), l._removeUnmounted()
                })), r.useEffect((() => {
                    e.shouldUnregister && l._subjects.values.next({
                        values: l._getWatch()
                    })
                }), [e.shouldUnregister, l]), t.current.formState = L(a, l), t.current
            }
        }
    }
]);
//# debugId=2f2ac8aa-ea9b-5f72-bf77-62320dc72a3c