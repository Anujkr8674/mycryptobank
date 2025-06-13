"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "88a3de86-a2d6-5fca-b65d-48178a05898b")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [7514], {
        MgDv: (e, t, n) => {
            n.d(t, {
                Ox: () => F,
                b$: () => z,
                RB: () => V,
                j1: () => O
            });
            var r = n("sViW"),
                a = n("aVXY"),
                i = n("3yYM"),
                o = n.n(i),
                l = n("DTvD"),
                c = n.n(l),
                s = n("T9BW"),
                u = n("Fd5T"),
                d = n("wIZF"),
                f = n("Y4uf");
            const v = function(e) {
                return c().createElement(f.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), c().createElement("path", {
                    d: "M3 3h12v2.997h-3.937V6H6v10h6v-.003h1.392L15 17.605V21H3V3z",
                    fill: "currentColor"
                }), c().createElement("path", {
                    d: "M10 7.997v6h4.22l2.78 2.78v-2.78h3v-6H10z",
                    fill: "currentColor"
                }))
            };
            var m = n("qXcJ");
            const p = function(e) {
                return c().createElement(f.A, (0, d.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), c().createElement("g", {
                    opacity: .5,
                    fill: "#AEB4BC"
                }, c().createElement("path", {
                    d: "M34 16h28v4H34v-4zM61.417 60H34v4h24.142a16.073 16.073 0 013.276-4z"
                })), c().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M72 56c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-2 6v12h4V62h-4zm0 16v4h4v-4h-4z",
                    fill: "#F0B90B"
                }), c().createElement("path", {
                    opacity: .2,
                    d: "M84 8H12v56l36 24 10.685-7.125A15.926 15.926 0 0156 72c0-2.915.78-5.647 2.14-8H34V16h28v10h13.998v20H63.994l-1.995 1.993V59.51A15.933 15.933 0 0172 56c4.778 0 9.068 2.095 12 5.416V8z",
                    fill: "#AEB4BC"
                }), c().createElement("path", {
                    opacity: .5,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M47.998 26h28v20H63.994l-8 8v-8h-7.996V26zm4 4h20v4h-20v-4zm0 8h20v4h-20v-4z",
                    fill: "#AEB4BC"
                }))
            };
            var h = n("eeEA"),
                g = n("D4P9"),
                _ = n("Lp65"),
                E = n("W2aP"),
                b = n("9Mix"),
                y = n("09uy"),
                A = n("YiNW"),
                x = n("3o5u"),
                w = n("i55B"),
                C = n("ELN5"),
                S = n("+dhg"),
                N = n("Hb45"),
                k = n("cKGJ"),
                T = function(e) {
                    var t = e.verified,
                        n = (0, s.useTranslation)(x.VX).t;
                    return t ? c().createElement(h.Ay, {
                        className: "text-success items-center body4"
                    }, n("c2c-ui-trade-finished")) : c().createElement(h.Ay, {
                        as: "a",
                        href: y.DS.smsAuth,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c().createElement(g.A, {
                        sz: "tiny",
                        className: "!min-w-[90px]"
                    }, n("c2c-ui-trade-enable")))
                },
                R = function(e) {
                    var t = e.status,
                        n = (0, s.useTranslation)(x.VX).t,
                        r = y.DS.kyc;
                    return t === C.DD.Pending ? c().createElement(h.Ay, {
                        className: "body4 text-tertiaryText underline",
                        as: "a",
                        href: r,
                        target: "_blank",
                        onClick: function() {
                            (0, b.u)("webClick", {
                                pageName: "Trading requirements",
                                eventName: "webClick",
                                elementID: "p2p_web_trading_requirements_popup_kyc_pending_redirection"
                            })
                        }
                    }, n("c2c-ui-pc-post-requirement-popup-kyc-status-pending")) : t === C.DD.Pass ? c().createElement(h.Ay, {
                        className: "body4 text-success"
                    }, n("c2c-ui-trade-finished")) : c().createElement(_.A, {
                        className: "items-center"
                    }, t === C.DD.Refuse && c().createElement(h.Ay, {
                        className: "text-error body4 mr-2xs"
                    }, n("c2c-ui-pc-post-requirement-popup-kyc-status-failed")), c().createElement(h.Ay, {
                        as: "a",
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c().createElement(g.A, {
                        sz: "tiny",
                        className: "!min-w-[90px]"
                    }, n("c2c-ui-kyc-verify"))))
                },
                D = function(e) {
                    var t = e.icon,
                        n = e.action,
                        r = e.title,
                        a = e.loading,
                        i = e.className;
                    return c().createElement(_.A, {
                        className: (0, A.cn)("flex-col tablet:flex-row gap-s tablet:gap-4xs items-start tablet:items-center justify-between py-xl px-m border border-line rounded-2l", i)
                    }, c().createElement(_.A, {
                        className: "gap-4xs"
                    }, (0, l.cloneElement)(t, {
                        className: "w-[24px] h-[24px] text-primaryText"
                    }), c().createElement(h.Ay, {
                        className: "subtitle2 text-primaryText"
                    }, r)), c().createElement(h.Ay, {
                        className: "ml-2xl tablet:ml-0"
                    }, a ? c().createElement(E.A, {
                        className: "text-primaryText",
                        style: {
                            transform: "scale(0.75)",
                            padding: 0
                        }
                    }) : n))
                },
                F = function() {
                    var e = (0, r.A)(o().mark((function e() {
                        var t, n, r, a, i, l;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, w.g9)();
                                case 3:
                                    if (t = e.sent, n = t.data, !t.success) {
                                        e.next = 12;
                                        break
                                    }
                                    return r = null === n || void 0 === n ? void 0 : n.userKycStatus, a = (null === n || void 0 === n ? void 0 : n.bindMobileStatus) && (null === n || void 0 === n ? void 0 : n.bindMobileStatus) !== C.kc.UnBind, i = "boolean" !== typeof(null === n || void 0 === n ? void 0 : n.mobileVerificationRequired) || (null === n || void 0 === n ? void 0 : n.mobileVerificationRequired), l = (!i || a) && r === C.DD.Pass, e.abrupt("return", {
                                        kycStatus: r,
                                        isSmsVerified: a,
                                        shouldShowSmsVerify: i,
                                        isValid: l
                                    });
                                case 12:
                                    return e.abrupt("return", !1);
                                case 15:
                                    return e.prev = 15, e.t0 = e.catch(0), e.abrupt("return", !1);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 15]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function(e) {
                    var t = e.onSubmit,
                        n = e.params,
                        i = (0, s.useTranslation)(x.VX).t,
                        d = (0, a.A)((0, l.useState)(!1), 2),
                        f = d[0],
                        p = d[1],
                        E = (0, a.A)((0, l.useState)(n), 2),
                        b = E[0],
                        y = E[1],
                        A = b.kycStatus,
                        w = b.isSmsVerified,
                        C = b.shouldShowSmsVerify,
                        S = b.isValid,
                        N = function() {
                            var e = (0, r.A)(o().mark((function e() {
                                var t;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, p(!0), e.next = 4, F();
                                        case 4:
                                            (t = e.sent) && y(t), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), p(!1);
                                        case 11:
                                            return e.prev = 11, p(!1), e.finish(11);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8, 11, 14]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return c().createElement(h.Ay, {
                        className: "w-full min-h-[70vh] tablet:min-h-[440px] flex flex-col"
                    }, c().createElement(h.Ay, {
                        className: "py-2xs"
                    }, c().createElement(h.Ay, {
                        className: "body3 text-tertiaryText mb-xl"
                    }, i("c2c-ui-trade-requirement-subtitle")), c().createElement(D, {
                        icon: c().createElement(u.A, null),
                        title: i("c2c-ui-c2c-payment-trade-requirement-kyc"),
                        className: "mb-l",
                        loading: f,
                        action: c().createElement(R, {
                            status: A
                        })
                    }), C && c().createElement(D, {
                        icon: c().createElement(v, null),
                        title: i("c2c-ui-trade-requirement-sms"),
                        loading: f,
                        action: c().createElement(T, {
                            verified: w
                        })
                    })), c().createElement(_.A, {
                        className: "flex-1 items-end"
                    }, S ? c().createElement(g.A, {
                        variant: "primary",
                        sz: "large",
                        className: "w-full",
                        onClick: t
                    }, i("c2c-ui-c2c-payment-trade-requirement-meet-requirements")) : c().createElement(g.A, {
                        variant: "secondary",
                        sz: "large",
                        className: "w-full",
                        onClick: N,
                        loading: f
                    }, c().createElement(m.A, {
                        className: "w-[20px] h-[20px] text-primaryText mr-5xs"
                    }), c().createElement(h.Ay, null, i("c2c-ui-trade-refresh-settings")))))
                },
                M = function(e) {
                    var t = e.i18nKey,
                        n = (0, s.useTranslation)(x.VX).t;
                    return c().createElement(c().Fragment, null, n(t))
                },
                B = function(e) {
                    return null === N.Xt || void 0 === N.Xt ? void 0 : N.Xt.includes(e)
                },
                V = function(e) {
                    var t = e.onConfirm,
                        n = e.onCancel,
                        r = e.message,
                        a = e.trackingInfo;
                    return (null === a || void 0 === a ? void 0 : a.pageViewId) && (0, b.u)("pageView", {
                        elementID: a.pageViewId
                    }), (0, k.A)({
                        icon: c().createElement(p, {
                            className: "w-[96px] h-[96px] flex-shrink-0"
                        }),
                        title: c().createElement(M, {
                            i18nKey: "c2c-ui-phone-number-verification-required-title"
                        }),
                        message: null !== r && void 0 !== r ? r : c().createElement(M, {
                            i18nKey: "c2c-ui-phone-number-verification-required-message"
                        }),
                        confirmText: c().createElement(M, {
                            i18nKey: "c2c-ui-phone-number-verification-required-verify-now"
                        }),
                        cancelText: c().createElement(M, {
                            i18nKey: "c2c-ui-phone-number-verification-required-later"
                        }),
                        className: "!w-[250px] tablet:!w-[312px]",
                        onConfirm: function() {
                            null === t || void 0 === t || t(), (null === a || void 0 === a ? void 0 : a.confirmId) && (0, b.u)("webClick", {
                                elementID: a.confirmId
                            }), window.open(y.DS.smsAuthentication, "_blank")
                        },
                        onCancel: n
                    })
                },
                P = {
                    active: !1,
                    isOpen: function() {
                        return P.active
                    },
                    setActive: function(e) {
                        P.active = e
                    }
                },
                O = function() {
                    var e = (0, r.A)(o().mark((function e(t, n) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = (0, r.A)(o().mark((function e(r) {
                                            var a, i;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!B(t)) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        V({
                                                            onConfirm: function() {
                                                                r(!0)
                                                            },
                                                            onCancel: function() {
                                                                r(!1)
                                                            },
                                                            trackingInfo: n
                                                        }), P.setActive(!1), e.next = 14;
                                                        break;
                                                    case 4:
                                                        if (!P.isOpen()) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 6:
                                                        return e.next = 8, F();
                                                    case 8:
                                                        if (a = e.sent) {
                                                            e.next = 12;
                                                            break
                                                        }
                                                        return r(!1), e.abrupt("return");
                                                    case 12:
                                                        P.setActive(!0), i = (0, S.A)({
                                                            width: 520,
                                                            title: c().createElement(M, {
                                                                i18nKey: "c2c-ui-trade-requirement-title"
                                                            }),
                                                            content: c().createElement(I, {
                                                                params: a,
                                                                onSubmit: function() {
                                                                    var e;
                                                                    r(!0), null === (e = i.current) || void 0 === e || e.call(i), P.setActive(!1)
                                                                }
                                                            }),
                                                            onClose: function() {
                                                                P.setActive(!1), r(!1)
                                                            }
                                                        });
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                z = O
        },
        "+dhg": (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var r = n("M5j3"),
                a = n("gZfF"),
                i = n("DTvD"),
                o = n.n(i),
                l = n("LCuF"),
                c = n("r4I4"),
                s = n("a75W"),
                u = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "" : t,
                        r = e.width,
                        a = e.centerTitle,
                        i = void 0 !== a && a,
                        s = e.hideTitle,
                        u = void 0 !== s && s,
                        d = e.content,
                        f = e.sx,
                        v = e.onClose;
                    return o().createElement(c.Ay.Modal, {
                        width: ["100%", r],
                        visible: !0,
                        mask: !1,
                        sx: f
                    }, !u && o().createElement(c.Ay.ModalTitle, {
                        title: n,
                        onClose: function() {
                            return v()
                        },
                        variant: i ? "center" : "default"
                    }), o().createElement(l.A, {
                        mb: "md"
                    }, d))
                };
            const d = function(e) {
                var t = e.onClose,
                    n = (0, a.A)(e, ["onClose"]),
                    i = {
                        current: void 0
                    },
                    l = (0, s.aF)({
                        content: o().createElement(u, (0, r.A)({}, n, {
                            onClose: function() {
                                l(), t && t()
                            }
                        })),
                        sx: {
                            display: "none"
                        },
                        needCloseIcon: !1
                    }).close;
                return i.current = l, i
            }
        },
        ELN5: (e, t, n) => {
            var r, a, i, o, l, c, s, u, d, f, v, m;
            n.d(t, {
                    DD: () => f,
                    RY: () => v,
                    Z$: () => m,
                    ds: () => u,
                    kc: () => r,
                    vJ: () => a
                }),
                function(e) {
                    e.Bind = "BIND", e.BindChina = "BIND_CHINA", e.UnBind = "UNBIND"
                }(r || (r = {})),
                function(e) {
                    e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Resting = 3] = "Resting"
                }(a || (a = {})),
                function(e) {
                    e.Open = "1", e.Closed = "2", e.Resting = "3"
                }(i || (i = {})),
                function(e) {
                    e[e.Individual = 1] = "Individual", e[e.Enterprise = 2] = "Enterprise"
                }(o || (o = {})),
                function(e) {
                    e[e.No = 0] = "No", e[e.Yes = 1] = "Yes"
                }(l || (l = {})),
                function(e) {
                    e.Offline = "0", e.Online = "1"
                }(c || (c = {})),
                function(e) {
                    e.Merchant = "merchant", e.User = "user"
                }(s || (s = {})),
                function(e) {
                    e[e.NormalUser = 1] = "NormalUser", e[e.VerifiedUser = 2] = "VerifiedUser", e[e.VerifiedMerchant = 3] = "VerifiedMerchant"
                }(u || (u = {})),
                function(e) {
                    e.BlockMerchant = "BLOCK_MERCHANT", e.Empty = "", e.MassMerchant = "MASS_MERCHANT"
                }(d || (d = {})),
                function(e) {
                    e.NotVerified = "NOTVERIFIED", e.Pass = "PASS", e.Pending = "PENDING", e.Refuse = "REFUSE", e.Unknown = "UNKNOWN"
                }(f || (f = {})),
                function(e) {
                    e.Unknown = "Unknown", e.Ordinary = "Ordinary", e.Block = "Block", e.Pro = "Pro", e.Shield = "Shield", e.Cash = "Cash"
                }(v || (v = {})),
                function(e) {
                    e.AdditionalKyc = "ADDITIONAL_KYC", e.PrivacyUpdate = "PRIVACY_UPDATE", e.ReBranding = "REBRANDING", e.PostFiatTrade = "FIAT_TRADE_TERMS_CONDITIONS", e.AzInstantMaker = "AZ_INSTANT_MAKER_TERMS_CONDITIONS", e.AzInstantTaker = "AZ_INSTANT_TAKER_TERMS_CONDITIONS", e.AzInstantPayment = "AZ_INSTANT_ADD_PAYMENT_TERMS_CONDITIONS", e.FiatTradeTaker = "FIAT_TRADE_TAKER_TERMS_CONDITIONS", e.Cpf = "SHARE_KYC_WITH_THIRDPARTY", e.BecomeStarTrader = "BECAME_SUPER_TAKER", e.BiddingTerms = "AD_BIDDING_TERMS"
                }(m || (m = {}))
        },
        "1TYZ": (e, t, n) => {
            n.d(t, {
                Q: () => R
            });
            var r = n("aVXY"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("ifOS"),
                l = n.n(o),
                c = n("5BvR"),
                s = n("nChe"),
                u = n.n(s),
                d = n("BK7R"),
                f = n("aWzz"),
                v = n.n(f),
                m = v().oneOfType([v().string, v().number]),
                p = {
                    orientation: v().oneOf(["portrait", "landscape"]),
                    scan: v().oneOf(["progressive", "interlace"]),
                    aspectRatio: v().string,
                    deviceAspectRatio: v().string,
                    height: m,
                    deviceHeight: m,
                    width: m,
                    deviceWidth: m,
                    color: v().bool,
                    colorIndex: v().bool,
                    monochrome: v().bool,
                    resolution: m
                },
                h = (0, d.A)({
                    minAspectRatio: v().string,
                    maxAspectRatio: v().string,
                    minDeviceAspectRatio: v().string,
                    maxDeviceAspectRatio: v().string,
                    minHeight: m,
                    maxHeight: m,
                    minDeviceHeight: m,
                    maxDeviceHeight: m,
                    minWidth: m,
                    maxWidth: m,
                    minDeviceWidth: m,
                    maxDeviceWidth: m,
                    minColor: v().number,
                    maxColor: v().number,
                    minColorIndex: v().number,
                    maxColorIndex: v().number,
                    minMonochrome: v().number,
                    maxMonochrome: v().number,
                    minResolution: m,
                    maxResolution: m
                }, p),
                g = {
                    all: v().bool,
                    grid: v().bool,
                    aural: v().bool,
                    braille: v().bool,
                    handheld: v().bool,
                    print: v().bool,
                    projection: v().bool,
                    screen: v().bool,
                    tty: v().bool,
                    tv: v().bool,
                    embossed: v().bool
                },
                _ = (0, d.A)({}, g, h);
            p.type = Object.keys(g);
            const E = {
                all: _,
                types: g,
                matchers: p,
                features: h
            };
            const b = function(e) {
                var t = [];
                return Object.keys(E.all).forEach((function(n) {
                    var r = e[n];
                    null != r && t.push(function(e, t) {
                        var n = (0, c.A)(e);
                        return "number" === typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")")
                    }(n, r))
                })), t.join(" and ")
            };
            const y = i().createContext();
            var A = function(e) {
                    if (!e) return null;
                    var t = Object.keys(e);
                    return 0 === t.length ? null : t.reduce((function(t, n) {
                        return t[(0, c.A)(n)] = e[n], t
                    }), {})
                },
                x = function() {
                    var e = i().useRef(!1);
                    return i().useEffect((function() {
                        e.current = !0
                    }), []), e.current
                },
                w = function(e) {
                    var t = function() {
                            return function(e) {
                                return e.query || b(e)
                            }(e)
                        },
                        n = (0, r.A)(i().useState(t), 2),
                        a = n[0],
                        o = n[1];
                    return i().useEffect((function() {
                        var e = t();
                        a !== e && o(e)
                    }), [e]), a
                };
            const C = function(e, t, n) {
                var a = function(e) {
                        var t = i().useContext(y),
                            n = function() {
                                return A(e) || A(t)
                            },
                            a = (0, r.A)(i().useState(n), 2),
                            o = a[0],
                            l = a[1];
                        return i().useEffect((function() {
                            var e = n();
                            u()(o, e) || l(e)
                        }), [e, t]), o
                    }(t),
                    o = w(e);
                if (!o) throw new Error("Invalid or missing MediaQuery!");
                var c = function(e, t) {
                        var n = function() {
                                return l()(e, t || {}, !!t)
                            },
                            a = (0, r.A)(i().useState(n), 2),
                            o = a[0],
                            c = a[1],
                            s = x();
                        return i().useEffect((function() {
                            return s && c(n()),
                                function() {
                                    o.dispose()
                                }
                        }), [e, t]), o
                    }(o, a),
                    s = function(e) {
                        var t = (0, r.A)(i().useState(e.matches), 2),
                            n = t[0],
                            a = t[1];
                        return i().useEffect((function() {
                            var t = function() {
                                a(e.matches)
                            };
                            return e.addListener(t), t(),
                                function() {
                                    e.removeListener(t)
                                }
                        }), [e]), n
                    }(c),
                    d = x();
                return i().useEffect((function() {
                    d && n && n(s)
                }), [s]), s
            };
            var S = {
                    query: "screen and (max-width: 767px)"
                },
                N = {
                    query: "screen and (max-width: 1023px)"
                },
                k = {
                    query: "screen and (max-width: 1279px)"
                },
                T = {
                    query: "screen and (max-width: 1439px)"
                };

            function R() {
                var e = C(S),
                    t = C(N),
                    n = C(k);
                return {
                    isMobile: e,
                    isIPad: t,
                    is13Desk: C(T),
                    isLeastWebSize: n
                }
            }
        },
        hQCL: (e, t, n) => {
            n.d(t, {
                A: () => A
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                i = n("gZfF"),
                o = n("aVXY"),
                l = n("DTvD"),
                c = n.n(l),
                s = function() {};
            const u = l.useLayoutEffect;
            var d = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            const f = "undefined" !== typeof window.ResizeObserver ? function() {
                var e = (0, l.useState)(null),
                    t = e[0],
                    n = e[1],
                    r = (0, l.useState)(d),
                    a = r[0],
                    i = r[1],
                    o = (0, l.useMemo)((function() {
                        return new window.ResizeObserver((function(e) {
                            if (e[0]) {
                                var t = e[0].contentRect,
                                    n = t.x,
                                    r = t.y,
                                    a = t.width,
                                    o = t.height,
                                    l = t.top,
                                    c = t.left,
                                    s = t.bottom,
                                    u = t.right;
                                i({
                                    x: n,
                                    y: r,
                                    width: a,
                                    height: o,
                                    top: l,
                                    left: c,
                                    bottom: s,
                                    right: u
                                })
                            }
                        }))
                    }), []);
                return u((function() {
                    if (t) return o.observe(t),
                        function() {
                            o.disconnect()
                        }
                }), [t]), [n, a]
            } : function() {
                return [s, d]
            };
            var v = n("6aZm"),
                m = n("5XPI"),
                p = n("LCuF"),
                h = n("GKJf"),
                g = {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: "drawer"
                },
                _ = {
                    overflow: "auto",
                    zIndex: "999999"
                },
                E = {
                    top: {
                        parent: {
                            flexDirection: "column"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    bottom: {
                        parent: {
                            flexDirection: "column-reverse"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    left: {
                        parent: {},
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    right: {
                        parent: {
                            flexDirection: "row-reverse"
                        },
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    }
                },
                b = (0, v.UF)("uikit-core", "Drawer"),
                y = (0, l.forwardRef)((function(e, t) {
                    var n = e.visible,
                        s = void 0 !== n && n,
                        u = e.direction,
                        d = void 0 === u ? "right" : u,
                        v = e.bg,
                        y = void 0 === v ? "background" : v,
                        A = e.maskBg,
                        x = e.children,
                        w = e.childProps,
                        C = void 0 === w ? {} : w,
                        S = e.outerClick,
                        N = (0, i.A)(e, ["visible", "direction", "bg", "maskBg", "children", "childProps", "outerClick"]);
                    b();
                    var k = (0, o.A)((0, l.useState)(s), 2),
                        T = k[0],
                        R = k[1],
                        D = (0, l.useRef)(),
                        F = (0, o.A)((0, l.useState)(), 2),
                        I = F[0],
                        M = F[1],
                        B = (0, o.A)((0, l.useState)(), 2),
                        V = B[0],
                        P = B[1],
                        O = (0, o.A)((0, l.useState)("auto"), 2),
                        z = O[0],
                        L = O[1],
                        U = A ? {
                            bg: A,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        } : {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        },
                        H = (0, o.A)(f(), 2),
                        j = H[0],
                        q = H[1],
                        K = q.width,
                        W = q.height,
                        Y = (0, h.A)(t, j),
                        G = c().cloneElement(x, {
                            ref: Y
                        });
                    return (0, l.useEffect)((function() {
                        "top" !== d && "bottom" !== d || P(s ? W : 0)
                    }), [W, d, s]), (0, l.useEffect)((function() {
                        "left" !== d && "right" !== d || M(s ? K : 0)
                    }), [K, d, s]), (0, l.useEffect)((function() {
                        return s ? (R(!0), L(document.body.style.overflow || "auto"), document.body.style.setProperty("overflow", "hidden")) : D.current = setTimeout((function() {
                                return R(!1)
                            }), 500),
                            function() {
                                try {
                                    clearTimeout(D.current)
                                } catch (e) {}
                                document.body.style.setProperty("overflow", z)
                            }
                    }), [s]), c().createElement(m.Ay, null, c().createElement(p.A, (0, r.A)({
                        __css: (0, a.A)({}, g, E[d].parent),
                        display: s || T ? "flex" : "none"
                    }, N), c().createElement(p.A, (0, r.A)({
                        __css: (0, a.A)({}, _, E[d].child),
                        width: I,
                        height: V,
                        bg: y
                    }, C), G), c().createElement(p.A, (0, r.A)({}, U, {
                        flex: 1,
                        onClick: function(e) {
                            return S && S(e)
                        }
                    }))))
                }));
            y.displayName = "Drawer";
            const A = y
        },
        NirW: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("w/Qz");
            const l = function(e) {
                return i().createElement(o.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        "afa+": (e, t, n) => {
            n.d(t, {
                A: () => x
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                i = n("QUKP"),
                o = n("gZfF"),
                l = n("aVXY"),
                c = n("DTvD"),
                s = n.n(c),
                u = n("LCuF"),
                d = n("C6y2"),
                f = n("yhUQ"),
                v = n("O94r"),
                m = n.n(v),
                p = "32px",
                h = 32,
                g = 40,
                _ = 48,
                E = (0, c.forwardRef)((function(e, t) {
                    var n = e.children,
                        a = e.required;
                    return n ? s().createElement(u.A, (0, r.A)({
                        ref: t,
                        as: "label",
                        className: m()({
                            "bn-input-label-required": a
                        }, "bn-input-label"),
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(p),
                            left: "0px",
                            lineHeight: p,
                            zIndex: "1",
                            cursor: "text",
                            "&.bn-input-label-required::before": {
                                display: "inline-block",
                                marginRight: "minor",
                                color: "error",
                                content: '"*"'
                            }
                        }
                    })) : null
                })),
                b = (0, c.forwardRef)((function(e, t) {
                    return e.children ? s().createElement(u.A, (0, r.A)({
                        ref: t,
                        as: "label",
                        className: "bn-input-label",
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(p),
                            right: 0,
                            lineHeight: p,
                            zIndex: "1",
                            cursor: "text"
                        }
                    })) : null
                }));
            E.displayName = "TextFieldLabel";
            var y = (0, c.forwardRef)((function(e, t) {
                var n = e.onFocus,
                    a = e.onBlur,
                    i = e.onChange,
                    l = (0, o.A)(e, ["onFocus", "onBlur", "onChange"]);
                return s().createElement(u.A, (0, r.A)({
                    ref: t,
                    as: "input",
                    "data-bn-type": "input"
                }, l, {
                    onFocus: n,
                    onBlur: a,
                    onChange: i,
                    __css: {
                        width: "100%",
                        height: "100%",
                        padding: "0",
                        outline: "none",
                        border: "none",
                        bg: "inherit",
                        opacity: 1,
                        "&::placeholder": {
                            color: "t.placeholder",
                            fontSize: "14px"
                        }
                    }
                }))
            }));
            y.displayName = "TextFieldInput";
            var A = (0, c.forwardRef)((function(e, t) {
                var n = e.variant,
                    c = void 0 === n ? "default" : n,
                    v = e.id,
                    A = e.value,
                    x = e.defaultValue,
                    w = e.label,
                    C = e.placeholder,
                    S = e.error,
                    N = e.disabled,
                    k = e.prefix,
                    T = e.suffix,
                    R = e.infoText,
                    D = void 0 === R ? "" : R,
                    F = e.errorText,
                    I = void 0 === F ? "" : F,
                    M = e.onFocus,
                    B = e.onBlur,
                    V = e.onChange,
                    P = e.boxProps,
                    O = e.required,
                    z = e.extraInfo,
                    L = e.size,
                    U = void 0 === L ? "lg" : L,
                    H = (0, o.A)(e, ["variant", "id", "value", "defaultValue", "label", "placeholder", "error", "disabled", "prefix", "suffix", "infoText", "errorText", "onFocus", "onBlur", "onChange", "boxProps", "required", "extraInfo", "size"]),
                    j = (0, l.A)(s().useState(""), 2),
                    q = j[0],
                    K = j[1],
                    W = s().useRef(null !== A && void 0 !== A).current,
                    Y = (0, l.A)(s().useState(x), 2),
                    G = Y[0],
                    Z = Y[1];
                W && A !== G && Z(A);
                var X = S ? I : D,
                    Q = (0, l.A)(s().useState(16), 2),
                    J = Q[0],
                    $ = Q[1],
                    ee = S ? "error" : "info",
                    te = "string" === typeof w ? w : H["area-label"],
                    ne = N ? "disabled" : S ? "error" : q;
                "" !== ne && (ne = "bn-input-status-".concat(ne));
                return s().createElement(d.A, (0, r.A)({
                    tx: "textFieldV2",
                    className: m()([ne]),
                    variant: c
                }, P, {
                    __css: (0, i.A)((0, a.A)({
                        display: "inline-flex",
                        position: "relative",
                        mt: w ? p : "0px",
                        mb: X.length > 0 ? "".concat(J, "px") : "0px",
                        alignItems: "center",
                        lineHeight: 1.6,
                        height: "".concat(_, "px")
                    }, "lg" === U && {
                        height: "".concat(_, "px")
                    }, "md" === U && {
                        height: "".concat(g, "px")
                    }, "sm" === U && {
                        height: "".concat(h, "px")
                    }), {
                        "&.bn-input-status-focus .bn-input-label": {
                            top: "-".concat(p)
                        }
                    })
                }), k && s().createElement(u.A, {
                    className: "bn-input-prefix"
                }, k), s().createElement(y, (0, r.A)({
                    id: v,
                    onFocus: function(e) {
                        K("focus"), M && M(e)
                    },
                    onBlur: function(e) {
                        K(""), B && B(e)
                    },
                    onChange: function(e) {
                        W || Z(e.target.value), V && V(e)
                    },
                    ref: t,
                    value: G,
                    "aria-label": te,
                    disabled: N,
                    placeholder: C,
                    required: O
                }, H)), T && s().createElement(u.A, {
                    className: "bn-input-suffix"
                }, T), s().createElement(E, {
                    htmlFor: v,
                    required: O
                }, w), z && s().createElement(b, null, z), X.length > 0 && s().createElement(f.A, {
                    ref: function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect().height;
                            $(t)
                        }
                    },
                    className: "bn-input-helper-text",
                    variant: "textField.helperText.".concat(ee),
                    __css: {
                        position: "absolute",
                        bottom: "".concat(-1 * J - 4, "px"),
                        lineHeight: "".concat(J, "px")
                    }
                }, X))
            }));
            A.displayName = "TextFieldV2";
            const x = A
        },
        r4I4: (e, t, n) => {
            n.d(t, {
                jl: () => T,
                wt: () => k,
                Ay: () => D
            });
            var r = n("M5j3"),
                a = n("gZfF"),
                i = n("DTvD"),
                o = n.n(i),
                l = n("C6y2"),
                c = n("yhUQ"),
                s = n("cJDP"),
                u = n("hQCL"),
                d = n("kxKT"),
                f = n("NirW"),
                v = n("/Lz3"),
                m = n("yys2"),
                p = n("1TYZ"),
                h = n("BK7R"),
                g = n("LCuF"),
                _ = function(e) {
                    var t = e.icon,
                        n = e.title,
                        i = e.description,
                        s = e.footerProps,
                        u = (e.titleProps, (0, a.A)(e, ["icon", "title", "description", "footerProps", "titleProps"])),
                        d = o().isValidElement(t) && t;
                    return o().createElement(o().Fragment, null, o().createElement(l.A, (0, r.A)({
                        flexDirection: "column",
                        alignItems: "center",
                        my: "md"
                    }, u), d ? o().cloneElement(d, {
                        className: "icon",
                        mb: "sm"
                    }) : null, n && o().createElement(c.A, {
                        variant: "subtitle1",
                        mb: "xs"
                    }, n), i && o().createElement(c.A, {
                        variant: "body2"
                    }, i)), o().createElement(T, (0, r.A)({}, s)))
                },
                E = function(e) {
                    var t = e.icon,
                        n = e.title,
                        i = e.description,
                        s = e.titleProps,
                        u = e.footerProps,
                        d = (0, a.A)(e, ["icon", "title", "description", "titleProps", "footerProps"]),
                        f = o().isValidElement(t) && t;
                    return (0, p.Q)().isMobile ? o().createElement(o().Fragment, null, o().createElement(k, (0, r.A)({}, s, {
                        title: ""
                    })), o().createElement(l.A, (0, r.A)({
                        flexDirection: "column",
                        alignItems: "center",
                        mb: "md"
                    }, d), f ? o().cloneElement(f, {
                        className: "icon",
                        mb: "sm"
                    }) : null, (n || (null === s || void 0 === s ? void 0 : s.title)) && o().createElement(c.A, {
                        variant: "headline6",
                        mb: "xs"
                    }, n || (null === s || void 0 === s ? void 0 : s.title)), i && o().createElement(c.A, {
                        variant: "body2"
                    }, i)), o().createElement(T, (0, r.A)({}, u))) : o().createElement(o().Fragment, null, (null === s || void 0 === s ? void 0 : s.title) && o().createElement(k, (0, r.A)({}, s)), o().createElement(g.A, (0, r.A)({
                        mb: "md"
                    }, d), i && o().createElement(g.A, {
                        __css: {
                            display: "inline-block",
                            verticalAlign: "top",
                            maxWidth: "276px",
                            mr: "md"
                        }
                    }, o().createElement(c.A, {
                        variant: "body2"
                    }, i)), f ? o().createElement(g.A, {
                        __css: {
                            display: "inline-block"
                        }
                    }, o().cloneElement(f, {
                        className: "icon"
                    })) : null), o().createElement(T, (0, r.A)({
                        variant: "leftReverseOrder"
                    }, u)))
                },
                b = "xlarge",
                y = "default",
                A = n("w/Qz");
            const x = function(e) {
                return o().createElement(A.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.264 79.498h54.11a6.125 6.125 0 006.125-6.124V20H25.251l-.002 53.375a6.125 6.125 0 01-5.985 6.123zM70.749 41H53.687v3.5h17.062V41zm0 7.875H53.687v3.5h17.062v-3.5zm0 7.875H53.687v3.5h17.062v-3.5zm0 7.875H34v3.5h36.75v-3.5z",
                    fill: "url(#dialog-tips_svg__paint0_linear_6871_115314)"
                }), o().createElement("path", {
                    opacity: .3,
                    d: "M13 48.001v25.374a6.125 6.125 0 0012.25 0V48.001H13z",
                    fill: "#AEB4BC"
                }), o().createElement("path", {
                    d: "M34 60.25h15.313V41H34v19.25z",
                    fill: "url(#dialog-tips_svg__paint1_linear_6871_115314)"
                }), o().createElement("path", {
                    d: "M63.75 32.25H41v-3.5h22.75v3.5z",
                    fill: "url(#dialog-tips_svg__paint2_linear_6871_115314)"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint0_linear_6871_115314",
                    x1: 49.312,
                    y1: 20,
                    x2: 49.312,
                    y2: 79.498,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#76808F"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#929AA5"
                })), o().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint1_linear_6871_115314",
                    x1: 41.656,
                    y1: 60.25,
                    x2: 41.656,
                    y2: 41,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint2_linear_6871_115314",
                    x1: 41,
                    y1: 30.5,
                    x2: 63.75,
                    y2: 30.5,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const w = function(e) {
                return o().createElement(A.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M74 25l-4 4-2-2 4-4 2 2z",
                    fill: "url(#dialog-alert_svg__paint0_linear_6871_115328)"
                }), o().createElement("path", {
                    d: "M26.661 51.661c4.882-4.881 12.796-4.881 17.678 0 4.881 4.882 4.881 12.796 0 17.678-4.882 4.881-12.796 4.881-17.678 0-4.881-4.882-4.881-12.796 0-17.678z",
                    fill: "url(#dialog-alert_svg__paint1_linear_6871_115328)"
                }), o().createElement("path", {
                    d: "M38.27 27.474L26.055 39.716H15L57.319 82V70.944L69.526 58.73c8.632-8.632 8.632-22.626 0-31.257-8.631-8.632-22.625-8.632-31.257 0z",
                    fill: "url(#dialog-alert_svg__paint2_linear_6871_115328)"
                }), o().createElement("path", {
                    d: "M56.911 71L26 40.089 31.089 35 62 65.911 56.911 71z",
                    fill: "url(#dialog-alert_svg__paint3_linear_6871_115328)"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint0_linear_6871_115328",
                    x1: 71,
                    y1: 23,
                    x2: 71,
                    y2: 29,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint1_linear_6871_115328",
                    x1: 35.5,
                    y1: 48,
                    x2: 35.5,
                    y2: 73,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint2_linear_6871_115328",
                    x1: 45.5,
                    y1: 82,
                    x2: 45.5,
                    y2: 21,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint3_linear_6871_115328",
                    x1: 44,
                    y1: 35,
                    x2: 44,
                    y2: 71,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const C = function(e) {
                return o().createElement(A.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("mask", {
                    id: "dialog-not-supported_svg__a",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 0,
                    width: 96,
                    height: 96
                }, o().createElement("circle", {
                    cx: 48,
                    cy: 48,
                    r: 48,
                    fill: "#2B2F36"
                })), o().createElement("g", {
                    mask: "url(#dialog-not-supported_svg__a)"
                }, o().createElement("path", {
                    d: "M66 66h16v-8H66v8z",
                    fill: "url(#dialog-not-supported_svg__paint0_linear_6871_115280)"
                }), o().createElement("path", {
                    d: "M66 38h16v-8H66v8z",
                    fill: "url(#dialog-not-supported_svg__paint1_linear_6871_115280)"
                }), o().createElement("path", {
                    d: "M31 44H14v8h17v-8z",
                    fill: "url(#dialog-not-supported_svg__paint2_linear_6871_115280)"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27 48c0 14.36 11.681 26 26.09 26H66V22H53.09C38.682 22 27 33.64 27 48z",
                    fill: "url(#dialog-not-supported_svg__paint3_linear_6871_115280)"
                }), o().createElement("path", {
                    d: "M58 74h-4V22h4v52z",
                    fill: "url(#dialog-not-supported_svg__paint4_linear_6871_115280)"
                })), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint0_linear_6871_115280",
                    x1: 82,
                    y1: 62,
                    x2: 66,
                    y2: 62,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint1_linear_6871_115280",
                    x1: 82,
                    y1: 34,
                    x2: 66,
                    y2: 34,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint2_linear_6871_115280",
                    x1: 31,
                    y1: 48,
                    x2: 14,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint3_linear_6871_115280",
                    x1: 46.5,
                    y1: 74,
                    x2: 46.5,
                    y2: 22,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint4_linear_6871_115280",
                    x1: 56,
                    y1: 22,
                    x2: 56,
                    y2: 74,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const S = function(e) {
                return o().createElement(A.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("mask", {
                    id: "dialog-try-again_svg__a",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 0,
                    width: 96,
                    height: 96
                }, o().createElement("circle", {
                    cx: 48,
                    cy: 48,
                    r: 48,
                    fill: "#2B2F36"
                })), o().createElement("g", {
                    mask: "url(#dialog-try-again_svg__a)"
                }, o().createElement("circle", {
                    r: 17.083,
                    transform: "matrix(1 0 0 -1 48 48)",
                    fill: "#F8D33A"
                }), o().createElement("circle", {
                    transform: "matrix(1 0 0 -1 48 48.002)",
                    fill: "url(#dialog-try-again_svg__paint0_linear_6871_115302)",
                    r: 11.689
                }), o().createElement("path", {
                    d: "M41.705 48L48 54.294 54.293 48l-6.294-6.294L41.705 48z",
                    fill: "#F0B90B"
                }), o().createElement("path", {
                    opacity: .3,
                    d: "M48 13.834c18.87 0 34.167 15.297 34.167 34.166 0 18.87-15.297 34.167-34.167 34.167v-6.833c15.096 0 27.333-12.238 27.333-27.334S63.096 20.667 48 20.667v-6.833z",
                    fill: "#AEB4BC"
                }), o().createElement("path", {
                    d: "M13.834 48c0-18.87 15.297-34.167 34.167-34.167v6.833c-15.096 0-27.334 12.238-27.334 27.334 0 7.548 3.056 14.377 8.006 19.327l4.807-4.806v14.52H18.959l4.882-4.882C17.662 65.98 13.834 57.434 13.834 48z",
                    fill: "url(#dialog-try-again_svg__paint1_linear_6871_115302)"
                })), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "dialog-try-again_svg__paint0_linear_6871_115302",
                    x1: 11.689,
                    y1: 0,
                    x2: 11.689,
                    y2: 23.377,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-try-again_svg__paint1_linear_6871_115302",
                    x1: 30.917,
                    y1: 13.833,
                    x2: 30.917,
                    y2: 77.041,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const N = function(e) {
                return o().createElement(A.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 160 160",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M116.131 118.398l1.6 1.6 1.6-1.6-1.6-1.6-1.6 1.6z",
                    fill: "#fff"
                }), o().createElement("circle", {
                    opacity: .3,
                    cx: 80,
                    cy: 80,
                    r: 66,
                    fill: "#AEB4BC"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M82 114.846l20.873 20.796c11.486 11.445 31.127 3.34 31.127-12.846v-15.824h-18.234v15.825L94.893 102 82 114.846z",
                    fill: "#76808F"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M82 114.846l20.873 20.797C114.36 147.087 134 138.982 134 122.797v-15.826h-18.234v15.826L94.893 102 82 114.846z",
                    fill: "url(#dialog-complex_svg__paint0_linear_6871_115393)",
                    opacity: .6
                }), o().createElement("path", {
                    d: "M67.978 97.588c8.193 0 14.835-6.642 14.835-14.834 0-8.193-6.642-14.835-14.835-14.835v29.669z",
                    fill: "url(#dialog-complex_svg__paint1_linear_6871_115393)"
                }), o().createElement("path", {
                    d: "M67.977 67.919c-8.193 0-14.834 6.642-14.834 14.834 0 8.193 6.641 14.834 14.834 14.834V67.92z",
                    fill: "#0B0E11"
                }), o().createElement("path", {
                    d: "M122.613 100.562l6.34-6.34-11.296-11.296-6.34 6.34 11.296 11.296z",
                    fill: "url(#dialog-complex_svg__paint2_linear_6871_115393)"
                }), o().createElement("path", {
                    d: "M72.193 50.386l6.34-6.34-11.296-11.297-6.34 6.34 11.296 11.297z",
                    fill: "url(#dialog-complex_svg__paint3_linear_6871_115393)"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M45.398 79.919L68 57.756 54.99 45 32.389 67.163C28.939 70.546 27 75.134 27 79.919v23.041c0 9.963 8.237 18.04 18.398 18.04V79.919z",
                    fill: "#76808F"
                }), o().createElement("path", {
                    d: "M45 135.66V102h19.95l8.507 8.501v-.001l.001.001L81.965 102H95v42.343A66.349 66.349 0 0180.317 146c-13.003-.019-25.121-3.811-35.317-10.34z",
                    fill: "#76808F"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M92.422 74.749h42.516a4.813 4.813 0 004.812-4.813V28H97.126l-.001 41.938a4.812 4.812 0 01-4.703 4.81zM132.875 44.5h-13.406v2.75h13.406V44.5zm0 6.188h-13.406v2.75h13.406v-2.75zm0 6.187h-13.406v2.75h13.406v-2.75zm0 6.188H104v2.75h28.875v-2.75z",
                    fill: "url(#dialog-complex_svg__paint4_linear_6871_115393)"
                }), o().createElement("path", {
                    opacity: .3,
                    d: "M87.5 50v19.938a4.812 4.812 0 009.625 0V50H87.5z",
                    fill: "#AEB4BC"
                }), o().createElement("path", {
                    d: "M104 59.625h12.031V44.5H104v15.125z",
                    fill: "url(#dialog-complex_svg__paint5_linear_6871_115393)"
                }), o().createElement("path", {
                    d: "M127.375 37.625H109.5v-2.75h17.875v2.75z",
                    fill: "url(#dialog-complex_svg__paint6_linear_6871_115393)"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint0_linear_6871_115393",
                    x1: 129.189,
                    y1: 142.487,
                    x2: 94.638,
                    y2: 142.487,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint1_linear_6871_115393",
                    x1: 75.395,
                    y1: 97.588,
                    x2: 75.395,
                    y2: 67.919,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint2_linear_6871_115393",
                    x1: 125.783,
                    y1: 97.392,
                    x2: 114.487,
                    y2: 86.096,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint3_linear_6871_115393",
                    x1: 75.363,
                    y1: 47.216,
                    x2: 64.067,
                    y2: 35.919,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint4_linear_6871_115393",
                    x1: 116.031,
                    y1: 28,
                    x2: 116.031,
                    y2: 74.749,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#76808F"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#929AA5"
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint5_linear_6871_115393",
                    x1: 110.016,
                    y1: 59.625,
                    x2: 110.016,
                    y2: 44.5,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), o().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint6_linear_6871_115393",
                    x1: 109.5,
                    y1: 36.25,
                    x2: 127.375,
                    y2: 36.25,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            var k = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "" : t,
                        a = e.onClose,
                        i = e.onBack,
                        s = e.variant,
                        u = void 0 === s ? "default" : s,
                        d = e.titleProps,
                        p = void 0 === d ? {} : d,
                        h = e.closeIconProps,
                        g = void 0 === h ? {} : h,
                        _ = e.backIconProps,
                        E = void 0 === _ ? {} : _,
                        b = (0, m.A)();
                    return "reset" === u ? o().createElement(l.A, {
                        tx: "modaltitle",
                        variant: u
                    }, n) : o().createElement(l.A, {
                        tx: "modaltitle",
                        variant: u
                    }, i && o().createElement(f.A, (0, r.A)({
                        size: 24,
                        color: "t.third",
                        sx: {
                            transform: "rtl" === b ? "rotate(180deg)" : "",
                            "&:hover": {
                                color: "primary",
                                cursor: "pointer"
                            }
                        }
                    }, E, {
                        onClick: i
                    })), o().createElement(l.A, {
                        className: "modaltitle"
                    }, o().createElement(c.A, (0, r.A)({
                        variant: "title6",
                        color: "t.primary"
                    }, p), n)), i && !a && o().createElement(l.A, null), a && o().createElement(v.A, (0, r.A)({
                        sx: {
                            "&:hover": {
                                color: "primary",
                                cursor: "pointer"
                            }
                        },
                        size: 24,
                        color: "iconNormal"
                    }, g, {
                        onClick: a
                    })))
                },
                T = function(e) {
                    var t = e.onOk,
                        n = e.onCancel,
                        a = e.variant,
                        i = void 0 === a ? "default" : a,
                        c = e.OkContent,
                        u = void 0 === c ? "Ok" : c,
                        d = e.CancelContent,
                        f = void 0 === d ? "Cancel" : d,
                        v = e.okBtnProps,
                        m = void 0 === v ? {} : v,
                        p = e.cancelBtnProps,
                        h = void 0 === p ? {} : p;
                    return o().createElement(l.A, {
                        tx: "modalfooter",
                        variant: i
                    }, n && o().createElement(s.A, (0, r.A)({
                        sz: "normal",
                        variant: "default" === i ? "default" : "text",
                        onClick: n
                    }, "default" === i ? {
                        colorStyle: "secondary"
                    } : {}, {
                        className: "btn",
                        children: f
                    }, h)), t && o().createElement(s.A, (0, r.A)({}, m, {
                        sz: "normal",
                        className: "btn",
                        variant: "default",
                        colorStyle: "flatprimary",
                        onClick: t,
                        children: u
                    })))
                },
                R = function(e) {
                    var t = e.children,
                        n = e.visible,
                        i = void 0 !== n && n,
                        c = e.onMaskClick,
                        s = e.mask,
                        f = void 0 === s || s,
                        v = e.layerProps,
                        m = void 0 === v ? {} : v,
                        h = e.responsive,
                        g = void 0 === h || h,
                        _ = (0, a.A)(e, ["children", "visible", "onMaskClick", "mask", "layerProps", "responsive"]);
                    return (0, p.Q)().isMobile && g ? o().createElement(o().Fragment, null, o().createElement(u.A, (0, r.A)({
                        maskBg: "dialog.mask",
                        direction: "bottom",
                        visible: i,
                        bg: "dialog.mask",
                        outerClick: c
                    }, m), o().createElement(l.A, (0, r.A)({
                        tx: "modal",
                        variant: "drawer"
                    }, _, {
                        width: "100%"
                    }), t))) : o().createElement(d.A, (0, r.A)({
                        mask: f,
                        visible: i,
                        onMaskClick: c
                    }, m), o().createElement(l.A, (0, r.A)({
                        tx: "modal",
                        variant: "default"
                    }, _), t))
                };
            R.displayName = "Modal";
            const D = {
                Modal: R,
                ModalTitle: k,
                ModalFooter: T,
                SimpleLayout: _,
                ComplexLayout: E,
                FixedIllustrationLayout: function(e) {
                    var t = e.icon,
                        n = e.title,
                        i = e.description,
                        s = (e.actions, e.illustrationStyle),
                        u = e.footerProps,
                        d = e.titleProps,
                        f = (0, a.A)(e, ["icon", "title", "description", "actions", "illustrationStyle", "footerProps", "titleProps"]),
                        m = o().isValidElement(t) && t;
                    return (0, p.Q)().isMobile ? o().createElement(o().Fragment, null, o().createElement(g.A, {
                        pt: "".concat(212, "px")
                    }, o().createElement(g.A, {
                        height: "".concat(212, "px"),
                        __css: (0, h.A)({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            borderTopRightRadius: b,
                            borderTopLeftRadius: b,
                            backgroundSize: "cover"
                        }, s)
                    }, m ? o().cloneElement(m, {
                        className: "icon"
                    }) : null), (null === d || void 0 === d ? void 0 : d.onClose) && o().createElement(v.A, {
                        onClick: null === d || void 0 === d ? void 0 : d.onClose,
                        __css: {
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            zIndex: 1,
                            fontSize: "xp",
                            color: "iconNormal"
                        }
                    }), (null === d || void 0 === d ? void 0 : d.title) && o().createElement(c.A, {
                        variant: "headline6",
                        my: "md"
                    }, d.title), i && o().createElement(c.A, {
                        variant: "body2",
                        mb: "md"
                    }, i)), o().createElement(T, (0, r.A)({
                        variant: "default"
                    }, u))) : o().createElement(o().Fragment, null, o().createElement(k, (0, r.A)({
                        title: n,
                        closeIconProps: (0, h.A)({
                            __css: {
                                position: "absolute",
                                top: "24px",
                                right: "0",
                                zIndex: 1,
                                fontSize: "xp",
                                color: "iconNormal"
                            }
                        }, null === d || void 0 === d ? void 0 : d.closeIconProps)
                    }, d)), o().createElement(l.A, (0, r.A)({}, f), o().createElement(l.A, {
                        mb: "md",
                        pr: "".concat(184, "px")
                    }, i && o().createElement(c.A, {
                        variant: "body2",
                        width: "276px",
                        mb: "md"
                    }, i), o().createElement(g.A, {
                        width: "".concat(184, "px"),
                        __css: (0, h.A)({
                            position: "absolute",
                            height: "100%",
                            top: "0",
                            right: "0",
                            borderTopRightRadius: y,
                            borderBottomRightRadius: y,
                            backgroundSize: "cover"
                        }, s)
                    }, m ? o().cloneElement(m, {
                        className: "icon"
                    }) : null))), o().createElement(T, (0, r.A)({
                        variant: "leftReverseOrder",
                        cancelBtnProps: {
                            variant: "default",
                            colorStyle: "flatpure"
                        }
                    }, u)))
                },
                ReminderTips: function(e) {
                    return o().createElement(_, (0, r.A)({
                        icon: o().createElement(x, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Tips"
                    }, e))
                },
                ReminderAlert: function(e) {
                    return o().createElement(_, (0, r.A)({
                        icon: o().createElement(w, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Alert"
                    }, e))
                },
                ReminderNotSupported: function(e) {
                    return o().createElement(_, (0, r.A)({
                        icon: o().createElement(C, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Not supported"
                    }, e))
                },
                ReminderTryAgain: function(e) {
                    return o().createElement(_, (0, r.A)({
                        icon: o().createElement(S, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Try Again"
                    }, e))
                },
                ReminderComplex: function(e) {
                    return o().createElement(E, (0, r.A)({
                        icon: o().createElement(N, {
                            size: 160
                        })
                    }, e))
                }
            }
        },
        "9Mix": (e, t, n) => {
            function r(e) {
                return e && e.Math == Math ? e : void 0
            }
            n.d(t, {
                u: () => i
            });
            var a = "object" == typeof globalThis && r(globalThis) || r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                a.pika = (null === a || void 0 === a ? void 0 : a.pika) || {}, a.pika.__REPORT_TRACK__ = a.pika.__REPORT_TRACK__ || [], a.pika.__REPORT_TRACK__.push(e)
            }
        },
        "/9cV": (e, t, n) => {
            n.d(t, {
                MR: () => p,
                ox: () => b,
                l9: () => v,
                X7: () => h,
                Zm: () => A,
                gU: () => m,
                QS: () => _,
                xV: () => y,
                do: () => E,
                A_: () => g
            });
            var r = n("BK7R"),
                a = n("tEf9"),
                i = n("MwrP"),
                o = n.n(i),
                l = n("fU5Q"),
                c = n("TXSk"),
                s = n("cTLW"),
                u = n("n8Fl"),
                d = "all-payments",
                f = n("f3Gl"),
                v = function(e, t) {
                    return t ? e === s.nP.Buy ? "C2Coffer_featureAd_btn_buy" : "C2Coffer_featureAd_btn_sell" : e === s.nP.Buy ? "C2CofferBuy__btn" : "C2CofferSell__btn"
                },
                m = function(e) {
                    var t, n, r = e.pageName,
                        a = e.tradeType,
                        i = e.selectedPaymentMethods,
                        o = e.privilegeDesc,
                        l = e.payTimeLimit;
                    (0, f.u)("webClick", {
                        pageName: r,
                        elementId: v(a, o),
                        extraInfo: {
                            payments: null === (t = i || []) || void 0 === t ? void 0 : t.join(","),
                            payTimeLimits: null === (n = l || []) || void 0 === n ? void 0 : n.join(",")
                        }
                    })
                },
                p = function(e) {
                    var t, n, r, a, i, o, l, c, u = e.fiat,
                        d = e.areaConfig,
                        f = e.tradeType,
                        v = null !== (l = null === d || void 0 === d || null === (t = d.filters) || void 0 === t || null === (n = t.makerCategory) || void 0 === n || null === (r = n[f === s.nP.Buy ? "tradeSideBuyDefault" : "tradeSideSellDefault"]) || void 0 === r ? void 0 : r.split(",")) && void 0 !== l ? l : [],
                        m = null !== (c = null === d || void 0 === d || null === (a = d.filters) || void 0 === a || null === (i = a.makerCategory) || void 0 === i || null === (o = i[f === s.nP.Buy ? "tradeSideBuyOptions" : "tradeSideSellOptions"]) || void 0 === o ? void 0 : o.split(",")) && void 0 !== c ? c : [];
                    return {
                        merchantCheckBox: {
                            defaultValue: null === v || void 0 === v ? void 0 : v.includes("merchant"),
                            enable: "CNY" !== u
                        },
                        proMerchantCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("pro")) && (null === v || void 0 === v ? void 0 : v.includes("pro")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("pro")
                        },
                        shieldMerchantCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("shield")) && (null === v || void 0 === v ? void 0 : v.includes("shield")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("shield")
                        },
                        tradableAdvCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("tradable")) && (null === v || void 0 === v ? void 0 : v.includes("tradable")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("tradable")
                        },
                        noAdditionalKycVerifyAdvCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("additionalVerify")) && (null === v || void 0 === v ? void 0 : v.includes("additionalVerify")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("additionalVerify")
                        },
                        tradedWithCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("tradedWith")) && (null === v || void 0 === v ? void 0 : v.includes("tradedWith")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("tradedWith")
                        },
                        followingCheckBox: {
                            defaultValue: (null === m || void 0 === m ? void 0 : m.includes("followed")) && (null === v || void 0 === v ? void 0 : v.includes("followed")),
                            enable: null === m || void 0 === m ? void 0 : m.includes("followed")
                        }
                    }
                },
                h = function(e) {
                    var t, n = e.tradeArea,
                        a = e.tradeType,
                        i = e.asset,
                        o = e.fiat,
                        u = e.paymentMethod;
                    if (n === l.G.P2P)
                        if (a === s.nP.Sell) t = (0, c.Cv)({
                            path: "/trade/sell/".concat(i),
                            queries: {
                                fiat: o,
                                payment: null !== u && void 0 !== u ? u : d
                            }
                        });
                        else {
                            var f = null !== u && void 0 !== u ? u : d;
                            t = (0, c.Cv)({
                                path: "/trade/".concat(f, "/").concat(i),
                                queries: (0, r.A)({}, o ? {
                                    fiat: o
                                } : {})
                            })
                        }
                    else n === l.G.Block && (t = (0, c.Cv)({
                        path: "/blockTrade/".concat((null !== a && void 0 !== a ? a : "buy").toLowerCase()),
                        queries: {
                            fiat: o,
                            payment: null !== u && void 0 !== u ? u : d,
                            asset: i
                        }
                    }));
                    return t
                },
                g = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = h.apply(void 0, (0, a.A)(t));
                    r && window.history.pushState(null, "", null === r || void 0 === r ? void 0 : r.toString())
                },
                _ = function(e) {
                    return "CNY" !== e
                },
                E = function(e, t) {
                    return "CNY" !== e && t > 0
                },
                b = function(e) {
                    var t, n = e.areaConfig,
                        r = e.tradeType,
                        a = null === n || void 0 === n || null === (t = n.filters) || void 0 === t ? void 0 : t.overallRanking;
                    return r === s.nP.Buy ? (null === a || void 0 === a ? void 0 : a.tradeSideBuyAvailable) && (null === a || void 0 === a ? void 0 : a.tradeSideBuyDefault) ? u.Iw.OverallRanking : void 0 : r === s.nP.Sell && (null === a || void 0 === a ? void 0 : a.tradeSideSellAvailable) && (null === a || void 0 === a ? void 0 : a.tradeSideSellDefault) ? u.Iw.OverallRanking : void 0
                },
                y = function(e) {
                    var t, n = e.areaConfig,
                        r = e.tradeType,
                        a = null === n || void 0 === n || null === (t = n.filters) || void 0 === t ? void 0 : t.overallRanking;
                    return r === s.nP.Buy ? null === a || void 0 === a ? void 0 : a.tradeSideBuyAvailable : r === s.nP.Sell && (null === a || void 0 === a ? void 0 : a.tradeSideSellAvailable)
                },
                A = function(e) {
                    return !o()(null === e || void 0 === e ? void 0 : e.privilegeDesc)
                }
        },
        "8v/2": (e, t, n) => {
            n.d(t, {
                r: () => s
            });
            var r = n("BK7R"),
                a = n("tEf9"),
                i = n("FYhw"),
                o = n("V3BA"),
                l = n("+bTb"),
                c = {
                    all: ["compliance"],
                    entrance: function() {
                        return (0, a.A)(c.all).concat(["compliance"])
                    }
                },
                s = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = (0, i.I)(c.entrance(), (function() {
                            return (0, l.fH)(o.A.GET_ENTRANCE_COMPLIANCE, {
                                platform: "WEB"
                            })
                        }), (0, r.A)({
                            staleTime: 1 / 0
                        }, n)),
                        s = a.data,
                        u = a.isLoading,
                        d = null === s || void 0 === s || null === (e = s.data) || void 0 === e || null === (t = e.restriction) || void 0 === t ? void 0 : t.keys;
                    return {
                        blockGuide: null === d || void 0 === d ? void 0 : d.includes("p2p_help_center"),
                        blockEvent: null === d || void 0 === d ? void 0 : d.includes("p2p_activities"),
                        blockHeader: null === d || void 0 === d ? void 0 : d.includes("p2p_header_zone"),
                        isLoading: u
                    }
                }
        },
        qwJY: (e, t, n) => {
            n.d(t, {
                I7: () => p,
                MN: () => m,
                Uj: () => h
            });
            var r = n("sViW"),
                a = n("BK7R"),
                i = n("tEf9"),
                o = n("0GOp"),
                l = n.n(o),
                c = n("FYhw"),
                s = n("x9UB"),
                u = n("n8Fl"),
                d = n("+bTb"),
                f = n("V3BA"),
                v = {
                    all: ["tradeRule"],
                    fiatList: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isLoggedIn,
                            n = void 0 !== t && t;
                        return (0, i.A)(v.all).concat(["fiatList", {
                            isLoggedIn: n
                        }])
                    },
                    info: function(e) {
                        return (0, i.A)(v.all).concat(["info", e])
                    },
                    assetList: function() {
                        return (0, i.A)(v.all).concat(["assetList"])
                    }
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, s.k)().isLoggedIn;
                    return (0, c.I)(v.fiatList({
                        isLoggedIn: Boolean(t)
                    }), (function() {
                        return (0, u.UX)()
                    }), e)
                };
            m.dehydrate = function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.UX)();
                            case 3:
                                return n = e.sent, e.next = 6, t.prefetchQuery({
                                    queryKey: v.fiatList(),
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
            }();
            var p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, c.I)(v.info(e), (function() {
                        return (0, d.Vo)(f.A.POST_TRADE_RULE_INFO, e)
                    }), t)
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, c.I)(v.assetList(), (function() {
                        return (0, d.Vo)(f.A.POST_ASSET_LIST)
                    }), (0, a.A)({
                        staleTime: 1 / 0,
                        cacheTime: 1 / 0
                    }, e))
                }
        },
        TXSk: (e, t, n) => {
            n.d(t, {
                Cv: () => o,
                Xi: () => l,
                bJ: () => a,
                y_: () => i
            });
            var r = n("aVXY");

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === window || void 0 === window ? void 0 : window.location;
                if (t) {
                    var n = new URL(null === t || void 0 === t ? void 0 : t.toString());
                    Object.entries(e).forEach((function(t) {
                        var a = (0, r.A)(t, 2),
                            i = a[0],
                            o = a[1];
                        Object.prototype.hasOwnProperty.call(e, i) && n.searchParams.set(i, o)
                    })), window.history.pushState({}, "", n.toString())
                }
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === window || void 0 === window ? void 0 : window.location;
                if (e) {
                    var t = window.location.href,
                        n = t.split("?");
                    window.history.pushState(null, null, n[0])
                }
            }

            function o(e) {
                var t, n = e.path,
                    a = void 0 === n ? "/" : n,
                    i = e.queries,
                    o = void 0 === i ? {} : i,
                    l = e.baseUrl,
                    c = void 0 === l ? "" : l;
                c || (c = null === window || void 0 === window || null === (t = window.location) || void 0 === t ? void 0 : t.toString());
                var s = new URL(a, c);
                return Object.entries(o).forEach((function(e) {
                    var t = (0, r.A)(e, 2),
                        n = t[0],
                        a = t[1];
                    Object.prototype.hasOwnProperty.call(o, n) && s.searchParams.set(n, a)
                })), s
            }
            var l = function(e, t) {
                return "apps.apple.com" === e.hostname ? t.includes(e.pathname.split("/").pop()) : "play.google.com" === e.hostname ? t.includes(e.searchParams.get("id")) : "https:" === e.protocol ? t.includes("".concat(e.origin).concat(e.pathname)) || t.includes(e.origin) : t.includes("".concat(e.protocol, "//"))
            }
        },
        "14bH": (e, t, n) => {
            n.d(t, {
                N: () => S
            });
            var r = n("2URn"),
                a = n("BK7R"),
                i = n("aVXY"),
                o = n("0GOp"),
                l = n.n(o),
                c = n("TrCV"),
                s = n("DTvD"),
                u = n("BK9r"),
                d = n("fix3");

            function f(e, t) {
                const {
                    filesByRoutId: n
                } = (0, d.Y)(), r = function() {
                    const {
                        publicPath: e
                    } = (0, d.Y)();
                    return e
                }(), a = [], i = [];
                return e.match(t).forEach((({
                    route: {
                        id: e
                    }
                }) => {
                    n[e] && n[e].map((t => {
                        const n = {
                            url: `${r}${t}`,
                            id: e
                        };
                        t.endsWith(".js") ? a.push(n) : t.endsWith(".css") && i.push(n)
                    }))
                })), {
                    js: a,
                    css: i
                }
            }
            var v = "undefined" !== typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    var t = Date.now();
                    return setTimeout((function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }), 1)
                },
                m = "undefined" !== typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                },
                p = "undefined" !== typeof IntersectionObserver;

            function h(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    r = void 0 === n ? "0px" : n,
                    a = e.disabled || !p,
                    i = (0, s.useRef)(),
                    o = (0, s.useState)(!1),
                    l = o[0],
                    c = o[1],
                    u = (0, s.useState)(t ? t.current : null),
                    d = u[0],
                    f = u[1],
                    h = (0, s.useCallback)((function(e) {
                        i.current && (i.current(), i.current = void 0), a || l || e && e.tagName && (i.current = function(e, t, n) {
                            var r = function(e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = _.find((function(e) {
                                            return e.root === n.root && e.margin === n.margin
                                        }));
                                    r ? t = g.get(r) : (t = g.get(n), _.push(n));
                                    if (t) return t;
                                    var a = new Map,
                                        i = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = a.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return g.set(n, t = {
                                        id: n,
                                        observer: i,
                                        elements: a
                                    }), t
                                }(n),
                                a = r.id,
                                i = r.observer,
                                o = r.elements;
                            return o.set(e, t), i.observe(e),
                                function() {
                                    if (o.delete(e), i.unobserve(e), 0 === o.size) {
                                        i.disconnect(), g.delete(a);
                                        var t = _.findIndex((function(e) {
                                            return e.root === a.root && e.margin === a.margin
                                        }));
                                        t > -1 && _.splice(t, 1)
                                    }
                                }
                        }(e, (function(e) {
                            return e && c(e)
                        }), {
                            root: d,
                            rootMargin: r
                        }))
                    }), [a, d, r, l]),
                    E = (0, s.useCallback)((function() {
                        c(!1)
                    }), []);
                return (0, s.useEffect)((function() {
                    if (!p && !l) {
                        var e = v((function() {
                            return c(!0)
                        }));
                        return function() {
                            return m(e)
                        }
                    }
                    return function() {}
                }), [l]), (0, s.useEffect)((function() {
                    t && f(t.current)
                }), [t]), [h, l, E]
            }
            var g = new Map,
                _ = [];
            var E = function(e, t, n, a) {
                    return new(n || (n = Promise))((function(i, o) {
                        var l = function(e) {
                                try {
                                    s(a.next(e))
                                } catch (t) {
                                    o(t)
                                }
                            },
                            c = function(e) {
                                try {
                                    s(a.throw(e))
                                } catch (t) {
                                    o(t)
                                }
                            },
                            s = function(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, (0, r.A)(t, n) ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, c)
                            };
                        s((a = a.apply(e, t || [])).next())
                    }))
                },
                b = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                    }
                    return n
                },
                y = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                A = {};

            function x() {
                try {
                    return document.createElement("link").relList.supports("prefetch")
                } catch (e) {
                    return !1
                }
            }

            function w(e, t, n) {
                return new Promise((function(r, a) {
                    var i = '\n        link[rel="prefetch"][href^="'.concat(e, '"],\n        link[rel="preload"][href^="').concat(e, '"],\n        script[src^="').concat(e, '"]');
                    if (document.querySelector(i)) return r();
                    var o = document.createElement("link");
                    n && (o.as = n), o.rel = "prefetch", o.onload = r, o.onerror = a, o.dataset.id = t, o.href = e, document.head.appendChild(o)
                }))
            }

            function C(e, t) {
                return E(this, void 0, void 0, l().mark((function n() {
                    var r, a;
                    return l().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                r = f(e, t), n.next = 3;
                                break;
                            case 3:
                                n.next = 5;
                                break;
                            case 5:
                                return a = x(), n.next = 8, Promise.all(a ? r.js.map((function(e) {
                                    return w(e.url, e.id, "script")
                                })) : []);
                            case 8:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))
            }
            var S = function(e) {
                var t, n = e.to,
                    r = e.ref,
                    o = e.prefetch,
                    l = e.onMouseEnter,
                    d = b(e, ["to", "ref", "prefetch", "onMouseEnter"]),
                    f = "string" === typeof n && (t = n, !y.test(t)),
                    v = s.useRef(n),
                    m = (0, i.A)(h({}), 3),
                    p = m[0],
                    g = m[1],
                    _ = m[2],
                    E = s.useContext(u.zA).router,
                    x = s.useCallback((function(e) {
                        f && v.current !== n && (_(), v.current = n), f && !1 !== o && p(e), r && ("function" === typeof r ? r(e) : "object" === typeof r && (r.current = e))
                    }), [n, f, o, _, p, r]);
                s.useEffect((function() {
                    f && !1 !== o && g && !A[n] && (C(E, n), A[n] = !0)
                }), [n, o, g]);
                var w = {
                    ref: x,
                    onMouseEnter: function(e) {
                        "function" === typeof l && l(e), f && !A[n] && (C(E, n), A[n] = !0)
                    }
                };
                return (0, c.jsx)(u.N_, (0, a.A)({
                    to: n
                }, d, w))
            }
        },
        "8J5H": (e, t, n) => {
            n.d(t, {
                G: () => l
            });
            var r = n("DTvD"),
                a = n.n(r),
                i = n("W3Ja"),
                o = function(e) {
                    return e
                },
                l = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        l = e.defaultValue,
                        c = void 0 === l ? "" : l,
                        s = e.onBlur,
                        u = e.onFocus,
                        d = e.formatter,
                        f = void 0 === d ? o : d,
                        v = e.parser,
                        m = void 0 === v ? o : v,
                        p = a().useRef(),
                        h = (0, r.useState)(f(c)),
                        g = h[0],
                        _ = h[1],
                        E = (0, r.useState)(!1),
                        b = E[0],
                        y = E[1];
                    p.current = {
                        onChange: n,
                        onBlur: s,
                        onFocus: u
                    }, (0, i.op)((function() {
                        if ("undefined" !== typeof t) {
                            var e = f(t);
                            e !== g && _(e)
                        }
                    }));
                    var A = (0, r.useCallback)((function(e) {
                            y(!1), p.current.onBlur && p.current.onBlur(e)
                        }), []),
                        x = (0, r.useCallback)((function(e) {
                            y(!0), p.current.onFocus && p.current.onFocus(e)
                        }), []),
                        w = (0, r.useCallback)((function(e) {
                            var t = e.target.value,
                                n = m(t),
                                r = f(n);
                            _(r), p.current.onChange && p.current.onChange(n, e)
                        }), []);
                    return {
                        input: g,
                        focus: b,
                        onInput: w,
                        onBlur: A,
                        onFocus: x
                    }
                }
        },
        sNIS: (e, t, n) => {
            n.d(t, {
                W: () => u
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("hyZw"),
                l = n("W3Ja"),
                c = n("QFE7"),
                s = [],
                u = function(e) {
                    var t = e.type,
                        n = e.value,
                        u = e.disabled,
                        d = e.onChange,
                        f = i().useState(s),
                        v = f[0],
                        m = f[1],
                        p = "multi" === t;
                    (0, l.op)((function() {
                        Array.isArray(n) && !(0, o.aI)(n, v) && m(n.slice(0, p ? void 0 : 1))
                    }), [n, p]);
                    var h = (0, c.d)({
                            fn: d,
                            deps: []
                        }).debounceFn,
                        g = (0, a.useCallback)((function(e, t) {
                            u || m((function(n) {
                                var a = p ? (0, r.__spreadArray)([], n, !0) : [],
                                    i = function(t) {
                                        return t !== e
                                    },
                                    l = -1 === n.indexOf(e);
                                switch (t) {
                                    case !1:
                                        a = l ? a : a.filter(i);
                                        break;
                                    case !0:
                                        a = l ? a.concat(e) : p ? a : [e];
                                        break;
                                    default:
                                        a = l ? a.concat(e) : a.filter(i)
                                }
                                return (0, o.aI)(n, a) || h(a), a
                            }))
                        }), [h, u, p]);
                    return {
                        selects: v,
                        onSelect: g
                    }
                }
        },
        q5Ye: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            }
        },
        "/Izd": (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M16.5 15.51v-2.25L12 8.49l-4.5 4.77v2.25h9z",
                    fill: "currentColor"
                }))
            }
        },
        G9To: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            }
        },
        "7+bj": (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        Mtrz: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        XEAC: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM8.75 10.75h-2.5v2.5h2.5v-2.5zm9 0h-2.5v2.5h2.5v-2.5zm-7 0h2.5v2.5h-2.5v-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        "9+y7": (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M9.822 3l-4.145 9.72h4.11L7.577 21 18.323 9.75h-5.126L17.494 3H9.822z",
                    fill: "currentColor"
                }))
            }
        },
        Fd5T: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 5h18v14H3V5zm7 5a2 2 0 11-4 0 2 2 0 014 0zm3-1h6v2.5h-6V9zm6 4.5h-6V16h6v-2.5zm-8 0V16H5v-2.5h6z",
                    fill: "currentColor"
                }))
            }
        },
        jibv: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                    fill: "currentColor"
                }))
            }
        },
        qXcJ: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.997 12.21a8.161 8.161 0 000-.42v.42zm-4.463 3.327l-2.608-2.608h7.07V20l-2.341-2.342A8.003 8.003 0 014.252 14h3.164a5.001 5.001 0 008.118 1.537zM19.747 10A8.003 8.003 0 006.343 6.343L4.001 4v7.071h7.07L8.466 8.464A5.001 5.001 0 0116.585 10h3.162zM4 12L4 11.845v.31A8.126 8.126 0 014 12z",
                    fill: "currentColor"
                }))
            }
        },
        fBOh: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("Y4uf");
            const l = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            }
        },
        YWmI: (e, t, n) => {
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("O94r"),
                l = n.n(o),
                c = n("fvKX"),
                s = n("jSBn"),
                u = function(e) {
                    var t = e.path,
                        n = e.pathPrefix,
                        r = e.subDomain,
                        a = e.isRegionMode,
                        i = e.level2Domain,
                        o = e.lang;
                    try {
                        var l = "https://binance.com",
                            c = new URL(t, l),
                            s = function(e) {
                                return e.replace(/^\/+|\/+$/g, "")
                            }(n),
                            u = "/".concat(s).concat(c.pathname).replace(/\/+/g, "/"),
                            d = new URL(u, l);
                        c.searchParams.forEach((function(e, t) {
                            d.searchParams.set(t, e)
                        })), a && d.searchParams.set("hl", o || "en");
                        var f = d.pathname + d.search + c.hash;
                        return r && (f = "https://".concat(r, ".").concat(i).concat(f)), f
                    } catch (v) {
                        return console.error("Error generating href:", v), t
                    }
                },
                d = n("Vw6p"),
                f = i().forwardRef((function(e, t) {
                    var n = e.path,
                        i = e.subDomain,
                        o = e.className,
                        f = (0, r.__rest)(e, ["path", "subDomain", "className"]),
                        v = (0, c.r)().prefixCls,
                        m = (0, s.x)(),
                        p = m.pathPrefix,
                        h = m.isRegionMode,
                        g = m.level2Domain,
                        _ = m.lang,
                        E = "".concat(v, "-balink"),
                        b = l()(E, o);
                    if (!p) throw new Error("pathPrefix is required in Provider");
                    if ((0, d.vh)(n)) throw new Error("path should be relative URL");
                    if (i && !g) throw new Error("level2Domain is required in Provider when subDomain is provided");
                    var y = {
                        role: e.role || "link"
                    };
                    return (0, a.createElement)("a", (0, r.__assign)((0, r.__assign)({
                        className: b,
                        href: u({
                            path: n,
                            pathPrefix: p,
                            subDomain: i,
                            isRegionMode: h,
                            level2Domain: g,
                            lang: _
                        }),
                        ref: t
                    }, y), f))
                }));
            f.displayName = "BALink";
            const v = f
        },
        Lp65: (e, t, n) => {
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("RGyw"),
                l = n("O94r"),
                c = n.n(l),
                s = n("fvKX"),
                u = i().forwardRef((function(e, t) {
                    var n = (0, s.r)().prefixCls,
                        a = c()("".concat(n, "-flex"), e.className);
                    return i().createElement(o.A, (0, r.__assign)({}, e, {
                        ref: t,
                        className: a
                    }))
                }));
            u.displayName = "Flex";
            const d = u
        },
        lMB8: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("JgEn"),
                l = function(e) {
                    var t = e.placement,
                        n = void 0 === t ? "bottom-start" : t,
                        a = e.offset,
                        l = void 0 === a ? 4 : a,
                        c = e.overlay,
                        s = (0, r.__rest)(e, ["placement", "offset", "overlay"]);
                    return i().createElement(o.A, (0, r.__assign)({}, s, {
                        variant: "unset",
                        offset: l,
                        tooltips: c,
                        placement: n
                    }))
                };
            l.displayName = "Dropdown";
            const c = l
        },
        CeW4: (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("O94r"),
                l = n.n(o),
                c = n("H2//"),
                s = n("eeEA"),
                u = n("JgEn"),
                d = n("fvKX");
            const f = function(e) {
                var t, n = e.label,
                    o = e.errMsg,
                    f = e.tips,
                    v = e.children,
                    m = e.tipsVariant,
                    p = void 0 === m ? "default" : m,
                    h = e.tooltipsProps,
                    g = (0, r.__rest)(e, ["label", "errMsg", "tips", "children", "tipsVariant", "tooltipsProps"]),
                    _ = (0, a.useState)(!1),
                    E = _[0],
                    b = _[1],
                    y = (0, d.r)(),
                    A = y.prefixCls,
                    x = y.isRTL,
                    w = "".concat(A, "-formItem"),
                    C = l()(w, ((t = {})["".concat(w, "-rtl")] = !!x, t), e.className),
                    S = (0, a.useMemo)((function() {
                        return "".concat(w, "-").concat((0, c.uR)(8))
                    }), [w]),
                    N = (0, a.useMemo)((function() {
                        return "".concat(S, "-error")
                    }), [S]),
                    k = (0, a.useMemo)((function() {
                        return "".concat(S, "-desc")
                    }), [S]);
                if (1 !== i().Children.count(v)) throw new Error("children can only be a node");
                var T = {
                        id: S,
                        "aria-required": g.required ? "true" : void 0,
                        "aria-invalid": o ? "true" : void 0,
                        "aria-describedby": [f ? k : null, o ? N : null].filter(Boolean).join(" ") || void 0
                    },
                    R = {
                        as: "label",
                        htmlFor: S
                    },
                    D = {
                        id: N,
                        role: "alert",
                        "aria-disabled": !0
                    },
                    F = (0, a.useMemo)((function() {
                        var e, t = i().cloneElement(v, (0, r.__assign)((0, r.__assign)({}, T), v.props));
                        if ("inline" === p) {
                            var n = "TextField" === (null === (e = v.type) || void 0 === e ? void 0 : e.__name) ? (0, r.__assign)({
                                placement: "top-start",
                                arrow: !0,
                                offset: 8,
                                open: !!f && E,
                                onOpenChange: b,
                                bubbleFontSize: 12,
                                id: k
                            }, h) : (0, r.__assign)({
                                id: k
                            }, h);
                            return t = i().cloneElement(t, {
                                onFocus: function(e) {
                                    var t, n;
                                    b(!0), null === (n = (t = v.props).onFocus) || void 0 === n || n.call(t, e)
                                },
                                onBlur: function(e) {
                                    var t, n;
                                    b(!1), null === (n = (t = v.props).onBlur) || void 0 === n || n.call(t, e)
                                }
                            }), i().createElement(u.A, (0, r.__assign)({
                                tooltips: f
                            }, n), t)
                        }
                        return i().createElement(i().Fragment, null, t, f && i().createElement(s.Ay, {
                            className: "".concat(w, "-tips"),
                            id: k,
                            "aria-disabled": "true"
                        }, f))
                    }), [f, p, v, w, E, h]);
                return i().createElement(s.Ay, (0, r.__assign)({}, g, {
                    className: C
                }), !!n && i().createElement(s.Ay, (0, r.__assign)({
                    className: "".concat(w, "-label")
                }, R), n), F, !!o && i().createElement(s.Ay, (0, r.__assign)({
                    className: "".concat(w, "-errMsg")
                }, D), o))
            }
        },
        Vw6p: (e, t, n) => {
            n.d(t, {
                _J: () => m,
                n: () => v,
                o3: () => c,
                vh: () => u
            });
            var r = n("kPx0"),
                a = n("NPYb"),
                i = "bnc://app.binance.com",
                o = "app.binance.com",
                l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                c = {
                    DEEP: "deeplink",
                    UNIVERSAL: "universalLink",
                    EXTERNAL: "externalLink",
                    RELATIVE: "relativePath"
                },
                s = "miniProgram",
                u = function(e) {
                    return l.test(e)
                };

            function d(e) {
                var t = (0, a.getUTM)();
                if (!t || "object" !== typeof t) return e;
                try {
                    var n = new URL(e);
                    return Object.entries(t).forEach((function(e) {
                        var t = e[0],
                            r = e[1];
                        r && !n.searchParams.has(t) && n.searchParams.append(t, r)
                    })), n.toString()
                } catch (r) {
                    console.error("Invalid URL:", e, r)
                }
                return e
            }

            function f(e, t) {
                var n = (null === t || void 0 === t ? void 0 : t.startsWith("/")) ? t.slice(1) : t,
                    a = "https://".concat(o),
                    i = null === n || void 0 === n ? void 0 : n.includes("?");
                return d(n ? "".concat(a, "/").concat(n).concat(i ? "&" : "?", "_dp=").concat((0, r.btoau)(e)) : "".concat(a, "/?_dp=").concat((0, r.btoau)(e)))
            }

            function v(e) {
                return u(e) ? e.startsWith(i) ? c.DEEP : e.includes(o) ? c.UNIVERSAL : c.EXTERNAL : c.RELATIVE
            }

            function m(e) {
                var t = e.isMiniApp,
                    n = e.navigateTarget,
                    r = e.urlType,
                    a = e.isHybrid,
                    o = e.url,
                    l = e.fallbackPath,
                    u = o;
                if (t) return u;
                if (n === s) return u;
                if (r === c.DEEP && (u = a ? o : f(o, l)), r === c.RELATIVE) {
                    var v = function(e) {
                        var t = e.startsWith("/") ? e.slice(1) : e;
                        return "".concat(i, "/").concat(t)
                    }(o);
                    u = a ? v : f(v, l)
                }
                return r === c.UNIVERSAL && (u = d(o)), u
            }
        },
        Fxby: (e, t, n) => {
            n.d(t, {
                A: () => U
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("O94r"),
                l = n.n(o),
                c = n("sNIS"),
                s = n("H2//"),
                u = n("lMB8"),
                d = n("hyZw"),
                f = n("eeEA"),
                v = n("cZx9"),
                m = n("fvKX"),
                p = n("I6V/"),
                h = n("X4b0"),
                g = function(e) {
                    var t, n = e.onClose,
                        a = void 0 === n ? d.es : n,
                        o = e.cancel,
                        c = void 0 === o ? "Cancel" : o,
                        s = e.onCancel,
                        u = void 0 === s ? a : s,
                        p = e.variant,
                        h = void 0 === p ? "default" : p,
                        g = (0, r.__rest)(e, ["onClose", "cancel", "onCancel", "variant"]),
                        _ = (0, m.r)().prefixCls,
                        E = "".concat(_, "-actionSheet"),
                        b = l()(E, ((t = {})["".concat(E, "__").concat(h)] = !!h, t), e.className);
                    return i().createElement(v.A, (0, r.__assign)({}, g, {
                        direction: "bottom",
                        onClose: a,
                        className: b
                    }), e.children, "default" === h && i().createElement(f.Ay, {
                        className: "".concat(E, "-cancel"),
                        onClick: u,
                        children: c,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "cancel"
                    }))
                };
            g.displayName = "ActionSheet", g.Header = function(e) {
                var t = e.showPre,
                    n = e.prev,
                    a = e.onPreClick,
                    o = void 0 === a ? d.es : a,
                    c = e.showNext,
                    s = e.next,
                    u = e.onNextClick,
                    v = void 0 === u ? d.es : u,
                    g = e.subtitle,
                    _ = e.description,
                    E = (0, r.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick", "subtitle", "description"]),
                    b = (0, m.r)().prefixCls,
                    y = "".concat(b, "-actionSheet-header"),
                    A = l()(y, e.className);
                return t && void 0 === n && (n = i().createElement(p.A, {
                    name: "ArrowLeftF",
                    color: "PrimaryText"
                })), c && void 0 === s && (s = i().createElement(h.A, {
                    name: "CloseF",
                    color: "PrimaryText"
                })), i().createElement(f.Ay, (0, r.__assign)({}, E, {
                    className: A
                }), t ? i().createElement(f.Ay, {
                    className: "".concat(y, "-prev"),
                    onClick: o,
                    children: n
                }) : null, i().createElement(f.Ay, {
                    className: "".concat(y, "-main")
                }, e.children, g && i().createElement(f.Ay, {
                    className: "".concat(y, "-main-subtitle"),
                    children: g
                }), _ && i().createElement(f.Ay, {
                    className: "".concat(y, "-main-description"),
                    children: _
                })), c ? i().createElement(f.Ay, {
                    className: "".concat(y, "-next"),
                    onClick: v,
                    children: s
                }) : null)
            }, g.Content = function(e) {
                var t = (0, m.r)().prefixCls,
                    n = "".concat(t, "-actionSheet-content"),
                    a = l()(n, e.className);
                return i().createElement(f.Ay, (0, r.__assign)({}, e, {
                    className: a
                }))
            }, g.Footer = function(e) {
                var t = (0, m.r)().prefixCls,
                    n = "".concat(t, "-actionSheet-footer"),
                    a = l()(n, e.className);
                return i().createElement(f.Ay, (0, r.__assign)({}, e, {
                    className: a
                }))
            };
            const _ = g;
            var E = n("q5Ye"),
                b = n("P/al"),
                y = n.n(b),
                A = function(e) {
                    return e.stopPropagation()
                },
                x = function(e) {
                    var t = e.value,
                        n = e.onRemove,
                        o = e.children,
                        c = void 0 === o ? t : o,
                        s = e.disabled,
                        u = (0, r.__rest)(e, ["value", "onRemove", "children", "disabled"]),
                        d = (0, m.r)().prefixCls,
                        v = "".concat(d, "-select-field-block"),
                        p = l()(v, e.className),
                        g = (0, a.useCallback)((function() {
                            n && n(t)
                        }), [n, t]),
                        _ = (0, a.useMemo)((function() {
                            return i().isValidElement(c) ? c : i().createElement(f.Ay, {
                                as: "span",
                                className: "".concat(v, "-value")
                            }, c)
                        }), [c]);
                    return i().createElement(f.Ay, (0, r.__assign)({}, u, {
                        className: p,
                        onClick: A
                    }), _, !s && i().createElement(h.A, {
                        name: "CloseF",
                        className: "".concat(v, "-remove"),
                        onClick: g
                    }))
                },
                w = function(e) {
                    var t = e.type,
                        n = e.value,
                        r = e.label;
                    return r && "single" === t ? i().createElement(f.Ay, {
                        className: "data-label-input"
                    }, i().createElement(f.Ay, {
                        className: "data-label",
                        as: "span"
                    }, r), i().createElement(f.Ay, {
                        className: "data-value",
                        as: "span"
                    }, n)) : n
                },
                C = function(e) {
                    var t = e.type,
                        n = e.selects,
                        r = void 0 === n ? [] : n,
                        a = e.onRemove,
                        o = e.fieldLabel,
                        l = e.options;
                    if (l) {
                        var c = new Map(l.map((function(e) {
                                return [e.value, e]
                            }))),
                            s = r.map((function(e) {
                                return c.get(e)
                            })).filter((function(e) {
                                return void 0 !== e
                            }));
                        if ("single" === t) {
                            var u = s[0].children;
                            return w({
                                value: u,
                                label: o,
                                type: t
                            })
                        }
                        return s.map((function(e, t) {
                            return i().createElement(x, {
                                key: t,
                                value: e.value,
                                onRemove: a,
                                disabled: e.disabled,
                                children: e.children
                            })
                        }))
                    }
                    return "single" === t ? w({
                        value: r[0],
                        label: o,
                        type: t
                    }) : r.map((function(e, t) {
                        return i().createElement(x, {
                            key: t,
                            value: e,
                            onRemove: a
                        })
                    }))
                };
            const S = function(e) {
                var t, n = e.prefix,
                    a = e.active,
                    o = e.disabled,
                    c = e.onRemove,
                    s = e.type,
                    u = void 0 === s ? "single" : s,
                    d = e.size,
                    v = void 0 === d ? "middle" : d,
                    p = e.selects,
                    h = void 0 === p ? [] : p,
                    g = e.placeholder,
                    _ = void 0 === g ? "" : g,
                    b = e.renderFn,
                    A = void 0 === b ? C : b,
                    x = e.fieldVariant,
                    S = e.fieldLabel,
                    N = e.onFieldClick,
                    k = e.options,
                    T = e.className,
                    R = e.ariaControls,
                    D = (0, m.r)().prefixCls,
                    F = "".concat(D, "-select-field"),
                    I = l()(F, ((t = {})["data-".concat(u)] = !!u, t["data-size-".concat(v)] = !!v, t["data-".concat(x)] = !!x, t.disabled = !!o, t.active = !!a, t), T),
                    M = {
                        role: "combobox",
                        tabIndex: o ? void 0 : 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": a,
                        "aria-disabled": o || void 0,
                        "aria-controls": R,
                        "aria-label": _ || "Select an option"
                    },
                    B = i().useMemo((function() {
                        return y()([
                            [function() {
                                return !!h.length
                            }, function() {
                                return A({
                                    selects: h,
                                    active: a,
                                    type: u,
                                    onRemove: c,
                                    fieldLabel: S,
                                    options: k
                                })
                            }],
                            [function() {
                                return !0
                            }, function() {
                                return i().createElement(f.Ay, {
                                    "aria-disabled": "true",
                                    className: "".concat(F, "-placeholder"),
                                    children: w({
                                        value: _,
                                        label: S,
                                        type: u
                                    })
                                })
                            }]
                        ])()
                    }), [A, h, u, c, F, _, k, S, a, w]);
                return i().createElement(f.Ay, (0, r.__assign)({
                    className: I,
                    onClick: N
                }, M), n && i().createElement(f.Ay, {
                    className: "".concat(F, "-prefix"),
                    children: n
                }), i().createElement(f.Ay, {
                    className: "".concat(F, "-input"),
                    children: B
                }), i().createElement(E.A, {
                    name: "CaretDownF",
                    color: "textThird",
                    className: "".concat(F, "-arrow")
                }))
            };
            var N = n("G9To"),
                k = function(e) {
                    var t, n = e.value,
                        o = e.disabled,
                        c = e.active,
                        s = e.onSelect,
                        u = e.type,
                        d = e.optionCheckIcon,
                        v = e.wrapperType,
                        p = e.deselectable,
                        h = (0, r.__rest)(e, ["value", "disabled", "active", "onSelect", "type", "optionCheckIcon", "wrapperType", "deselectable"]),
                        g = (0, m.r)().prefixCls,
                        _ = "".concat(g, "-select-option"),
                        E = l()(_, ((t = {
                            active: !!c,
                            disabled: !!o,
                            icon: !!d
                        })["".concat(_, "__").concat(v)] = "drawer" === v, t), e.className),
                        b = (0, a.useCallback)((function(e) {
                            if (o) return e.stopPropagation();
                            if (!o && s) {
                                if ("single" === u && c && !p) return;
                                s(n)
                            }
                        }), [n, s, o, u, c, p]),
                        y = {
                            role: "option",
                            "aria-selected": c,
                            "aria-disabled": o
                        };
                    return i().createElement(f.Ay, (0, r.__assign)({}, y, h, {
                        onClick: b,
                        className: E
                    }), e.children, c && d && i().createElement(N.A, {
                        name: "CheckmarkF",
                        color: "PrimaryText"
                    }))
                };
            k.__name = "SelectOption";
            const T = k;
            const R = function(e) {
                var t = e.title,
                    n = e.selects,
                    a = void 0 === n ? [] : n,
                    o = e.onSelect,
                    c = e.className,
                    s = (0, r.__rest)(e, ["title", "selects", "onSelect", "className"]),
                    u = (0, m.r)().prefixCls,
                    d = "".concat(u, "-select-option-group");
                return i().createElement(f.Ay, (0, r.__assign)({}, s, {
                    className: l()(d, c)
                }), i().createElement(f.Ay, {
                    className: "".concat(d, "-title"),
                    children: t
                }), i().Children.map(e.children, (function(e) {
                    var t;
                    if (!i().isValidElement(e)) return null;
                    if ("SelectOption" !== (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) return null;
                    var n = a.indexOf(e.props.value) > -1;
                    return i().cloneElement(e, {
                        onSelect: o,
                        active: n
                    })
                })))
            };
            var D = n("lEYW"),
                F = function(e) {
                    var t = e.value,
                        n = e.disabled,
                        o = e.active,
                        c = e.onSelect,
                        s = (e.wrapperType, (0, r.__rest)(e, ["value", "disabled", "active", "onSelect", "wrapperType"])),
                        u = (0, m.r)().prefixCls,
                        d = "".concat(u, "-select-option"),
                        v = l()(d, {
                            active: !!o,
                            disabled: !!n,
                            multi: !0
                        }, e.className),
                        p = (0, a.useCallback)((function(e) {
                            if (n) return e.stopPropagation();
                            !n && c && c(t)
                        }), [t, c, n, o]),
                        h = {
                            role: "option",
                            "aria-selected": o,
                            "aria-disabled": n
                        };
                    return i().createElement(f.Ay, (0, r.__assign)({}, h, s, {
                        onClick: p,
                        className: v
                    }), i().createElement(D.A, {
                        value: t,
                        checked: o,
                        children: e.children,
                        disabled: n,
                        sz: "lg"
                    }))
                };
            F.__name = "SelectOption";
            const I = F;
            var M = n("fBOh"),
                B = n("qrIQ"),
                V = n("+dYT"),
                P = n("D4P9"),
                O = function(e) {
                    var t;
                    e.stopPropagation(), B.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                };
            const z = function(e) {
                var t, n, o = e.selects,
                    c = e.onSelect,
                    s = e.className,
                    u = e.onSearchFn,
                    d = e.emptyText,
                    v = void 0 === d ? "No results found" : d,
                    p = e.searchPlaceholder,
                    h = void 0 === p ? "search options" : p,
                    g = e.drawerCancelText,
                    _ = void 0 === g ? "Cancel" : g,
                    E = e.searchValue,
                    b = e.fieldVariant,
                    y = e.type,
                    A = e.onClose,
                    x = e.searchFieldProps,
                    w = e.wrapperType,
                    C = e.listMaxHeight,
                    S = e.id,
                    N = (0, m.r)().prefixCls,
                    k = "".concat(N, "-select-overlay"),
                    T = "".concat(k, "-search"),
                    R = "".concat(T, "-").concat(b),
                    D = "".concat(T, "-close"),
                    F = "filled" === b ? "default" : "line",
                    I = (0, a.useCallback)((function(e) {
                        return u && u(e)
                    }), [u]),
                    B = {
                        role: "listbox",
                        id: S,
                        "aria-label": "Select an option"
                    };
                return i().createElement(f.Ay, (0, r.__assign)({
                    className: l()(k, (t = {}, t["".concat(k, "__").concat(w)] = "drawer" === w, t), s),
                    onClick: O
                }, B), "function" === typeof u && i().createElement(f.Ay, {
                    onClick: O,
                    className: l()(T, (n = {}, n[R] = !!R, n[D] = !!A, n))
                }, i().createElement(V.A, (0, r.__assign)({}, x, {
                    variant: F,
                    value: E,
                    enableClear: !0,
                    onChange: I,
                    placeholder: h,
                    prefix: i().createElement(M.A, {
                        name: "SearchF",
                        color: "textDisabled"
                    })
                })), "function" === typeof A && i().createElement(P.A, {
                    onClick: A,
                    variant: "text",
                    children: _,
                    className: "".concat(D, "-btn")
                })), i().createElement(f.Ay, {
                    className: "".concat(k, "-options"),
                    style: {
                        maxHeight: C
                    }
                }, i().Children.count(e.children) ? i().Children.map(e.children, (function(e) {
                    var t;
                    if (!i().isValidElement(e)) return null;
                    if ("SelectOption" === (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) {
                        var n = o.indexOf(e.props.value) > -1;
                        return (0, a.cloneElement)(e, {
                            onSelect: c,
                            active: n,
                            type: y,
                            wrapperType: w
                        })
                    }
                    return (0, a.cloneElement)(e, {
                        onSelect: c,
                        selects: o
                    })
                })) : i().createElement(f.Ay, {
                    className: "".concat(k, "-empty"),
                    children: v
                })))
            };
            var L = function(e) {
                var t, n, o = e.value,
                    d = e.options,
                    f = e.prefix,
                    v = e.renderFn,
                    p = e.disabled,
                    h = e.onChange,
                    g = e.onSearchFn,
                    E = e.searchValue,
                    b = e.type,
                    y = void 0 === b ? "single" : b,
                    A = e.size,
                    x = void 0 === A ? "middle" : A,
                    w = e.variant,
                    C = void 0 === w ? "auto" : w,
                    N = e.placeholder,
                    k = void 0 === N ? "" : N,
                    T = e.once,
                    R = void 0 === T ? "single" === y : T,
                    D = e.placement,
                    F = void 0 === D ? "bottom" : D,
                    I = e.trigger,
                    M = void 0 === I ? "hover" : I,
                    B = e.fieldVariant,
                    V = void 0 === B ? "line" : B,
                    P = e.wrapperType,
                    O = void 0 === P ? "dropdown" : P,
                    L = e.fieldLabel,
                    U = e.searchPlaceholder,
                    H = e.emptyText,
                    j = e.customField,
                    q = e.className,
                    K = e.children,
                    W = e.drawerCancelText,
                    Y = e.enablePortal,
                    G = e.portalNode,
                    Z = e.drawerHeaderProps,
                    X = e.searchFieldProps,
                    Q = e.offset,
                    J = e.useReactPopper,
                    $ = e.reactPopperProps,
                    ee = void 0 === $ ? {} : $,
                    te = ee.sameWidth,
                    ne = void 0 === te || te,
                    re = ee.popperWidth,
                    ae = ee.offsetX,
                    ie = e.dpVariant,
                    oe = void 0 === ie ? "default" : ie,
                    le = e.dpStyle,
                    ce = e.triggerClassName,
                    se = e.bubbleClassName,
                    ue = e.fieldClassName,
                    de = e.bubbleWrapperClz,
                    fe = e.onVisibleChange,
                    ve = e.delay,
                    me = e.listMaxHeight,
                    pe = e.enableClickBubble,
                    he = e.drawerProps,
                    ge = e.open,
                    _e = (0, a.useState)(!!ge),
                    Ee = _e[0],
                    be = _e[1],
                    ye = (0, m.r)().prefixCls,
                    Ae = "".concat(ye, "-select"),
                    xe = l()(Ae, ((t = {})["".concat(Ae, "__").concat(C)] = !!C, t), q),
                    we = l()(Ae, q),
                    Ce = l()("".concat(Ae, "__drawer-header"), null === Z || void 0 === Z ? void 0 : Z.className),
                    Se = l()("".concat(Ae, "-trigger"), ce),
                    Ne = l()("".concat(Ae, "-bubble"), ((n = {})["".concat(Ae, "-bubble__").concat(oe)] = "default" !== oe, n), se),
                    ke = (0, a.useMemo)((function() {
                        return "".concat(Ae, "-").concat((0, s.uR)(8))
                    }), [Ae]),
                    Te = (0, a.useCallback)((function(e) {
                        be(e), null === fe || void 0 === fe || fe(e)
                    }), [fe, be]),
                    Re = "drawer" === O ? function() {
                        return Te(!1)
                    } : void 0,
                    De = (0, c.W)({
                        type: y,
                        value: o,
                        disabled: p,
                        onChange: h
                    }),
                    Fe = De.selects,
                    Ie = De.onSelect,
                    Me = (0, a.useCallback)((function(e, t) {
                        Ie(e, t), ("single" === y || R) && Te(!1)
                    }), [Ie, y, R, Te]),
                    Be = (0, a.useCallback)((function(e) {
                        return Me(e)
                    }), [Me]);
                (0, a.useEffect)((function() {
                    "undefined" !== typeof ge && Ee !== !!ge && be(!Ee)
                }), [ge, Ee]);
                var Ve = {
                        selects: Fe,
                        emptyText: H,
                        onSearchFn: g,
                        searchPlaceholder: U,
                        children: K,
                        type: y,
                        onClose: Re,
                        drawerCancelText: W,
                        searchValue: E,
                        searchFieldProps: X,
                        wrapperType: O,
                        id: ke
                    },
                    Pe = i().createElement(z, (0, r.__assign)({}, Ve, {
                        onSelect: Me,
                        children: K,
                        fieldVariant: V,
                        listMaxHeight: me
                    })),
                    Oe = {
                        once: R,
                        disabled: p,
                        placement: F,
                        onVisibleChange: Te,
                        trigger: M,
                        enablePortal: Y,
                        portalNode: G,
                        offset: Q,
                        style: le,
                        useReactPopper: J,
                        delay: ve,
                        reactPopperProps: {
                            sameWidth: ne,
                            popperWidth: re,
                            offsetX: ae
                        },
                        bubbleWrapperClz: de,
                        enableClickBubble: pe
                    },
                    ze = (0, r.__assign)({
                        once: R,
                        visible: Ee,
                        onClose: function() {
                            return Te(!1)
                        },
                        onVisibleChange: Te,
                        enablePortal: Y,
                        portalNode: G
                    }, he),
                    Le = Z ? (0, r.__assign)((0, r.__assign)({
                        onNextClick: function() {
                            return Te(!1)
                        }
                    }, Z), {
                        className: Ce
                    }) : void 0,
                    Ue = {
                        type: y,
                        size: x,
                        prefix: f,
                        disabled: p,
                        renderFn: v,
                        placeholder: k,
                        fieldVariant: V,
                        fieldLabel: L,
                        className: ue,
                        ariaControls: ke
                    };
                return "drawer" === O ? i().createElement(i().Fragment, null, i().isValidElement(j) ? i().cloneElement(j, {
                    active: Ee,
                    selects: Fe,
                    onRemove: Be,
                    onOpen: function() {
                        return Te(!0)
                    }
                }) : i().createElement(S, (0, r.__assign)({}, Ue, {
                    active: Ee,
                    selects: Fe,
                    onRemove: Be,
                    onFieldClick: p ? void 0 : function() {
                        return Te(!0)
                    },
                    options: d
                })), i().createElement(_, (0, r.__assign)({
                    variant: "basic",
                    className: we
                }, ze), Le && i().createElement(_.Header, (0, r.__assign)({}, Le)), Pe)) : i().createElement(u.A, (0, r.__assign)({}, Oe, {
                    open: Ee,
                    className: xe,
                    overlay: Pe,
                    bubbleClassName: Ne,
                    triggerClassName: Se,
                    ariaRole: "combobox"
                }), i().isValidElement(j) ? i().cloneElement(j, {
                    active: Ee,
                    selects: Fe,
                    onRemove: Be
                }) : i().createElement(S, (0, r.__assign)({}, Ue, {
                    active: Ee,
                    selects: Fe,
                    onRemove: Be,
                    options: d
                })))
            };
            L.displayName = "Select", L.Option = T, L.OptionGroup = R, L.OptionMulti = I;
            const U = L
        },
        "+dYT": (e, t, n) => {
            n.d(t, {
                A: () => ve
            });
            var r, a = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i);

            function l(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                }
                return n
            }

            function c() {}

            function s(e) {
                return !!(e || "").match(/\d/)
            }

            function u(e) {
                return null === e || void 0 === e
            }

            function d(e) {
                return u(e) || function(e) {
                    return "number" === typeof e && isNaN(e)
                }(e) || "number" === typeof e && !isFinite(e)
            }

            function f(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function v(e, t) {
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

            function m(e, t, n) {
                for (var r = "", a = n ? "0" : "", i = 0; i <= t - 1; i++) r += e[i] || a;
                return r
            }

            function p(e, t) {
                return Array(t + 1).join(e)
            }

            function h(e) {
                var t = e + "",
                    n = "-" === t[0] ? "-" : "";
                n && (t = t.substring(1));
                var r = t.split(/[eE]/g),
                    a = r[0],
                    i = r[1];
                if (!(i = Number(i))) return n + a;
                var o = 1 + i,
                    l = (a = a.replace(".", "")).length;
                return o < 0 ? a = "0." + p("0", Math.abs(o)) + a : o >= l ? a += p("0", o - l) : a = (a.substring(0, o) || "0") + "." + a.substring(o), n + a
            }

            function g(e, t, n) {
                if (-1 !== ["", "-"].indexOf(e)) return e;
                var r = (-1 !== e.indexOf(".") || n) && t,
                    a = v(e),
                    i = a.beforeDecimal,
                    o = a.afterDecimal,
                    l = a.hasNegation,
                    c = parseFloat("0." + (o || "0")),
                    s = (o.length <= t ? "0." + o : c.toFixed(t)).split("."),
                    u = i;
                return i && Number(s[0]) && (u = i.split("").reverse().reduce((function(e, t, n) {
                    return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
                }), s[0])), "" + (l ? "-" : "") + u + (r ? "." : "") + m(s[1] || "", t, n)
            }

            function _(e, t) {
                if (e.value = e.value, null !== e) {
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        return n.move("character", t), n.select(), !0
                    }
                    return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }! function(e) {
                e.event = "event", e.props = "prop"
            }(r || (r = {}));
            var E = function(e) {
                var t, n = void 0;
                return function() {
                    for (var r = [], a = arguments.length; a--;) r[a] = arguments[a];
                    return t && r.length === t.length && r.every((function(e, n) {
                        return e === t[n]
                    })) ? n : (t = r, n = e.apply(void 0, r))
                }
            }((function(e, t) {
                for (var n = 0, r = 0, a = e.length, i = t.length; e[n] === t[n] && n < a;) n++;
                for (; e[a - 1 - r] === t[i - 1 - r] && i - r > n && a - r > n;) r++;
                return {
                    from: {
                        start: n,
                        end: a - r
                    },
                    to: {
                        start: n,
                        end: i - r
                    }
                }
            }));

            function b(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function y(e) {
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

            function A(e) {
                var t = e.currentValue,
                    n = e.formattedValue,
                    r = e.currentValueIndex,
                    a = e.formattedValueIndex;
                return t[r] === n[a]
            }

            function x(e, t, n, r) {
                var a, i, o, l = e.length;
                if (a = t, i = 0, o = l, t = Math.min(Math.max(a, i), o), "left" === r) {
                    for (; t >= 0 && !n[t];) t--; - 1 === t && (t = n.indexOf(!0))
                } else {
                    for (; t <= l && !n[t];) t++;
                    t > l && (t = n.lastIndexOf(!0))
                }
                return -1 === t && (t = l), t
            }

            function w(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map((function() {
                        return !0
                    })), n = 0, r = t.length; n < r; n++) t[n] = Boolean(s(e[n]) || s(e[n - 1]));
                return t
            }

            function C(e, t, n, r, a, o) {
                void 0 === o && (o = c);
                var l = function(e) {
                        var t = (0, i.useRef)(e);
                        t.current = e;
                        var n = (0, i.useRef)((function() {
                            for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                            return t.current.apply(t, e)
                        }));
                        return n.current
                    }((function(e, t) {
                        var n, i;
                        return d(e) ? (i = "", n = "") : "number" === typeof e || t ? (i = "number" === typeof e ? h(e) : e, n = r(i)) : (i = a(e, void 0), n = r(i)), {
                            formattedValue: n,
                            numAsString: i
                        }
                    })),
                    s = (0, i.useState)((function() {
                        return l(u(e) ? t : e, n)
                    })),
                    f = s[0],
                    v = s[1],
                    m = e,
                    p = n;
                u(e) && (m = f.numAsString, p = !0);
                var g = l(m, p);
                return (0, i.useMemo)((function() {
                    v(g)
                }), [g.formattedValue]), [f, function(e, t) {
                    e.formattedValue !== f.formattedValue && v({
                        formattedValue: e.formattedValue,
                        numAsString: e.value
                    }), o(e, t)
                }]
            }

            function S(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function N(e) {
                return e
            }

            function k(e) {
                var t = e.type;
                void 0 === t && (t = "text");
                var n = e.displayType;
                void 0 === n && (n = "input");
                var a = e.customInput,
                    u = e.renderText,
                    d = e.getInputRef,
                    f = e.format;
                void 0 === f && (f = N);
                var v = e.removeFormatting;
                void 0 === v && (v = S);
                var m = e.defaultValue,
                    p = e.valueIsNumericString,
                    h = e.onValueChange,
                    g = e.isAllowed,
                    y = e.onChange;
                void 0 === y && (y = c);
                var k = e.onKeyDown;
                void 0 === k && (k = c);
                var T = e.onMouseUp;
                void 0 === T && (T = c);
                var R = e.onFocus;
                void 0 === R && (R = c);
                var D = e.onBlur;
                void 0 === D && (D = c);
                var F = e.value,
                    I = e.getCaretBoundary;
                void 0 === I && (I = w);
                var M = e.isValidInputCharacter;
                void 0 === M && (M = s);
                var B = e.isCharacterSame,
                    V = l(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]),
                    P = C(F, m, Boolean(p), f, v, h),
                    O = P[0],
                    z = O.formattedValue,
                    L = O.numAsString,
                    U = P[1],
                    H = (0, i.useRef)(),
                    j = (0, i.useRef)({
                        formattedValue: z,
                        numAsString: L
                    }),
                    q = function(e, t) {
                        j.current = {
                            formattedValue: e.formattedValue,
                            numAsString: e.value
                        }, U(e, t)
                    },
                    K = (0, i.useState)(!1),
                    W = K[0],
                    Y = K[1],
                    G = (0, i.useRef)(null),
                    Z = (0, i.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, i.useEffect)((function() {
                    return Y(!0),
                        function() {
                            clearTimeout(Z.current.setCaretTimeout), clearTimeout(Z.current.focusTimeout)
                        }
                }), []);
                var X = f,
                    Q = function(e, t) {
                        var n = parseFloat(t);
                        return {
                            formattedValue: e,
                            value: t,
                            floatValue: isNaN(n) ? void 0 : n
                        }
                    },
                    J = function(e, t, n) {
                        0 === e.selectionStart && e.selectionEnd === e.value.length || (_(e, t), Z.current.setCaretTimeout = setTimeout((function() {
                            e.value === n && e.selectionStart !== t && _(e, t)
                        }), 0))
                    },
                    $ = function(e, t, n) {
                        return x(e, t, I(e), n)
                    },
                    ee = function(e, t, n) {
                        var r = I(t),
                            a = function(e, t, n, r, a, i, o) {
                                void 0 === o && (o = A);
                                var l = a.findIndex((function(e) {
                                        return e
                                    })),
                                    c = e.slice(0, l);
                                t || n.startsWith(c) || (t = c, n = c + n, r += c.length);
                                for (var s = n.length, u = e.length, d = {}, f = new Array(s), v = 0; v < s; v++) {
                                    f[v] = -1;
                                    for (var m = 0, p = u; m < p; m++)
                                        if (o({
                                                currentValue: n,
                                                lastValue: t,
                                                formattedValue: e,
                                                currentValueIndex: v,
                                                formattedValueIndex: m
                                            }) && !0 !== d[m]) {
                                            f[v] = m, d[m] = !0;
                                            break
                                        }
                                }
                                for (var h = r; h < s && (-1 === f[h] || !i(n[h]));) h++;
                                var g = h === s || -1 === f[h] ? u : f[h];
                                for (h = r - 1; h > 0 && -1 === f[h];) h--;
                                var _ = -1 === h || -1 === f[h] ? 0 : f[h] + 1;
                                return _ > g ? g : r - _ < g - r ? _ : g
                            }(t, z, e, n, r, M, B);
                        return a = x(t, a, r)
                    };
                (0, i.useEffect)((function() {
                    var e = j.current,
                        t = e.formattedValue,
                        n = e.numAsString;
                    z === t && L === n || q(Q(z, L), {
                        event: void 0,
                        source: r.props
                    })
                }), [z, L]);
                var te = G.current ? b(G.current) : void 0;
                (0, i.useLayoutEffect)((function() {
                    var e = G.current;
                    if (z !== j.current.formattedValue && e) {
                        var t = ee(j.current.formattedValue, z, te);
                        e.value = z, J(e, t, z)
                    }
                }), [z]);
                var ne = function(e, t, n) {
                        var r = t.target,
                            a = H.current ? function(e, t) {
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
                            }(H.current, r.selectionEnd) : E(z, e),
                            i = Object.assign(Object.assign({}, a), {
                                lastValue: z
                            }),
                            o = v(e, i),
                            l = X(o);
                        if (o = v(l, void 0), g && !g(Q(l, o))) {
                            var c = t.target,
                                s = b(c),
                                u = ee(e, z, s);
                            return c.value = z, J(c, u, z), !1
                        }
                        return function(e) {
                            var t = e.formattedValue;
                            void 0 === t && (t = "");
                            var n, r = e.input,
                                a = e.source,
                                i = e.event,
                                o = e.numAsString;
                            if (r) {
                                var l = e.inputValue || r.value,
                                    c = b(r);
                                r.value = t, void 0 !== (n = ee(l, t, c)) && J(r, n, t)
                            }
                            t !== z && q(Q(t, o), {
                                event: i,
                                source: a
                            })
                        }({
                            formattedValue: l,
                            numAsString: o,
                            inputValue: e,
                            event: t,
                            source: n,
                            input: t.target
                        }), !0
                    },
                    re = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = e.selectionStart,
                            r = e.selectionEnd;
                        H.current = {
                            selectionStart: n,
                            selectionEnd: r + t
                        }
                    },
                    ae = !W || "undefined" === typeof navigator || navigator.platform && /iPhone|iPod/.test(navigator.platform) ? void 0 : "numeric",
                    ie = Object.assign({
                        inputMode: ae
                    }, V, {
                        type: t,
                        value: z,
                        onChange: function(e) {
                            var t = e.target.value;
                            ne(t, e, r.event) && y(e), H.current = void 0
                        },
                        onKeyDown: function(e) {
                            var t, n = e.target,
                                r = e.key,
                                a = n.selectionStart,
                                i = n.selectionEnd,
                                o = n.value;
                            void 0 === o && (o = ""), "ArrowLeft" === r || "Backspace" === r ? t = Math.max(a - 1, 0) : "ArrowRight" === r ? t = Math.min(a + 1, o.length) : "Delete" === r && (t = a);
                            var l = 0;
                            "Delete" === r && a === i && (l = 1);
                            var c = "ArrowLeft" === r || "ArrowRight" === r;
                            if (void 0 === t || a !== i && !c) return k(e), void re(n, l);
                            var s = t;
                            c ? (s = $(o, t, "ArrowLeft" === r ? "left" : "right")) !== t && e.preventDefault() : "Delete" !== r || M(o[t]) ? "Backspace" !== r || M(o[t]) || (s = $(o, t, "left")) : s = $(o, t, "right");
                            s !== t && J(n, s, o), k(e), re(n, l)
                        },
                        onMouseUp: function(e) {
                            var t = e.target,
                                n = function() {
                                    var e = t.selectionStart,
                                        n = t.selectionEnd,
                                        r = t.value;
                                    if (void 0 === r && (r = ""), e === n) {
                                        var a = $(r, e);
                                        a !== e && J(t, a, r)
                                    }
                                };
                            n(), requestAnimationFrame((function() {
                                n()
                            })), T(e), re(t)
                        },
                        onFocus: function(e) {
                            e.persist && e.persist();
                            var t = e.target,
                                n = e.currentTarget;
                            G.current = t, Z.current.focusTimeout = setTimeout((function() {
                                var r = t.selectionStart,
                                    a = t.selectionEnd,
                                    i = t.value;
                                void 0 === i && (i = "");
                                var o = $(i, r);
                                o === r || 0 === r && a === i.length || J(t, o, i), R(Object.assign(Object.assign({}, e), {
                                    currentTarget: n
                                }))
                            }), 0)
                        },
                        onBlur: function(e) {
                            G.current = null, clearTimeout(Z.current.focusTimeout), clearTimeout(Z.current.setCaretTimeout), D(e)
                        }
                    });
                if ("text" === n) return u ? o().createElement(o().Fragment, null, u(z, V) || null) : o().createElement("span", Object.assign({}, V, {
                    ref: d
                }), z);
                if (a) {
                    var oe = a;
                    return o().createElement(oe, Object.assign({}, ie, {
                        ref: d
                    }))
                }
                return o().createElement("input", Object.assign({}, ie, {
                    ref: d
                }))
            }

            function T(e, t) {
                var n = t.decimalScale,
                    r = t.fixedDecimalScale,
                    a = t.prefix;
                void 0 === a && (a = "");
                var i = t.suffix;
                void 0 === i && (i = "");
                var o = t.allowNegative,
                    l = t.thousandsGroupStyle;
                if (void 0 === l && (l = "thousand"), "" === e || "-" === e) return e;
                var c = R(t),
                    s = c.thousandSeparator,
                    u = c.decimalSeparator,
                    d = 0 !== n && -1 !== e.indexOf(".") || n && r,
                    f = v(e, o),
                    p = f.beforeDecimal,
                    h = f.afterDecimal,
                    g = f.addNegation;
                return void 0 !== n && (h = m(h, n, !!r)), s && (p = function(e, t, n) {
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
                }(p, s, l)), a && (p = a + p), i && (h += i), g && (p = "-" + p), e = p + (d && u || "") + h
            }

            function R(e) {
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

            function D(e, t, n) {
                var r;
                void 0 === t && (t = y(e));
                var a = n.allowNegative,
                    i = n.prefix;
                void 0 === i && (i = "");
                var o = n.suffix;
                void 0 === o && (o = "");
                var l = n.decimalScale,
                    c = t.from,
                    u = t.to,
                    d = u.start,
                    m = u.end,
                    p = R(n),
                    h = p.allowedDecimalSeparators,
                    g = p.decimalSeparator,
                    _ = e[m] === g;
                if (s(e) && (e === i || e === o) && "" === t.lastValue) return e;
                if (m - d === 1 && -1 !== h.indexOf(e[d])) {
                    var E = 0 === l ? "" : g;
                    e = e.substring(0, d) + E + e.substring(d + 1, e.length)
                }
                var b = function(e, t, n) {
                        var r = !1,
                            a = !1;
                        i.startsWith("-") ? r = !1 : e.startsWith("--") ? (r = !1, a = !0) : o.startsWith("-") && e.length === o.length ? r = !1 : "-" === e[0] && (r = !0);
                        var l = r ? 1 : 0;
                        return a && (l = 2), l && (e = e.substring(l), t -= l, n -= l), {
                            value: e,
                            start: t,
                            end: n,
                            hasNegation: r
                        }
                    },
                    A = b(e, d, m),
                    x = A.hasNegation;
                e = (r = A).value, d = r.start, m = r.end;
                var w = b(t.lastValue, c.start, c.end),
                    C = w.start,
                    S = w.end,
                    N = w.value,
                    k = e.substring(d, m);
                !(e.length && N.length && (C > N.length - o.length || S < i.length)) || k && o.startsWith(k) || (e = N);
                var T = 0;
                e.startsWith(i) ? T += i.length : d < i.length && (T = d), m -= T;
                var D = (e = e.substring(T)).length,
                    F = e.length - o.length;
                e.endsWith(o) ? D = F : (m > F || m > e.length - o.length) && (D = m), e = e.substring(0, D), e = function(e, t) {
                    void 0 === e && (e = "");
                    var n = new RegExp("(-)"),
                        r = new RegExp("(-)(.)*(-)"),
                        a = n.test(e),
                        i = r.test(e);
                    return e = e.replace(/-/g, ""), a && !i && t && (e = "-" + e), e
                }(x ? "-" + e : e, a), e = (e.match(function(e, t) {
                    return new RegExp("(^-)|[0-9]|" + f(e), t ? "g" : void 0)
                }(g, !0)) || []).join("");
                var I = e.indexOf(g),
                    M = v(e = e.replace(new RegExp(f(g), "g"), (function(e, t) {
                        return t === I ? "." : ""
                    })), a),
                    B = M.beforeDecimal,
                    V = M.afterDecimal,
                    P = M.addNegation;
                return u.end - u.start < c.end - c.start && "" === B && _ && !parseFloat(V) && (e = P ? "-" : ""), e
            }

            function F(e) {
                e = function(e) {
                    var t = R(e),
                        n = t.thousandSeparator,
                        r = t.decimalSeparator,
                        a = e.prefix;
                    void 0 === a && (a = "");
                    var i = e.allowNegative;
                    if (void 0 === i && (i = !0), n === r) throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + n + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + r + " (default value for decimalSeparator is .)\n     ");
                    return a.startsWith("-") && i && (console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + a + "\n      allowNegative: " + i + "\n    "), i = !1), Object.assign(Object.assign({}, e), {
                        allowNegative: i
                    })
                }(e);
                e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
                var t = e.suffix,
                    n = e.allowNegative,
                    a = e.allowLeadingZeros,
                    i = e.onKeyDown;
                void 0 === i && (i = c);
                var o = e.onBlur;
                void 0 === o && (o = c);
                var f = e.thousandSeparator,
                    v = e.decimalScale,
                    m = e.fixedDecimalScale,
                    p = e.prefix;
                void 0 === p && (p = "");
                var b = e.defaultValue,
                    y = e.value,
                    A = e.valueIsNumericString,
                    x = e.onValueChange,
                    w = l(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]),
                    S = R(e),
                    N = S.decimalSeparator,
                    k = S.allowedDecimalSeparators,
                    F = function(t) {
                        return T(t, e)
                    },
                    I = function(t, n) {
                        return D(t, n, e)
                    },
                    M = u(y) ? b : y,
                    B = null !== A && void 0 !== A ? A : function(e, t, n) {
                        return "" === e || !(null === t || void 0 === t ? void 0 : t.match(/\d/)) && !(null === n || void 0 === n ? void 0 : n.match(/\d/)) && "string" === typeof e && !isNaN(Number(e))
                    }(M, p, t);
                u(y) ? u(b) || (B = B || "number" === typeof b) : B = B || "number" === typeof y;
                var V = function(e) {
                        return d(e) ? e : ("number" === typeof e && (e = h(e)), B && "number" === typeof v ? g(e, v, Boolean(m)) : e)
                    },
                    P = C(V(y), V(b), Boolean(B), F, I, x),
                    O = P[0],
                    z = O.numAsString,
                    L = O.formattedValue,
                    U = P[1];
                return Object.assign(Object.assign({}, w), {
                    value: L,
                    valueIsNumericString: !1,
                    isValidInputCharacter: function(e) {
                        return e === N || s(e)
                    },
                    isCharacterSame: function(e) {
                        var t = e.currentValue,
                            n = e.lastValue,
                            r = e.formattedValue,
                            a = e.currentValueIndex,
                            i = e.formattedValueIndex,
                            o = t[a],
                            l = r[i],
                            c = E(n, t).to,
                            s = function(e) {
                                return I(e).indexOf(".") + p.length
                            };
                        return !(0 === y && m && v && t[c.start] === N && s(t) < a && s(r) > i) && (!!(a >= c.start && a < c.end && k && k.includes(o) && l === N) || o === l)
                    },
                    onValueChange: U,
                    format: F,
                    removeFormatting: I,
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
                                i = "-" === e[0];
                            a.fill(!1, 0, n.length + (i ? 1 : 0));
                            var o = e.length;
                            return a.fill(!1, o - r.length + 1, o + 1), a
                        }(t, e)
                    },
                    onKeyDown: function(e) {
                        var t = e.target,
                            r = e.key,
                            a = t.selectionStart,
                            o = t.selectionEnd,
                            l = t.value;
                        if (void 0 === l && (l = ""), ("Backspace" === r || "Delete" === r) && o < p.length) e.preventDefault();
                        else if (a === o) {
                            "Backspace" === r && "-" === l[0] && a === p.length + 1 && n && _(t, 1), v && m && ("Backspace" === r && l[a - 1] === N ? (_(t, a - 1), e.preventDefault()) : "Delete" === r && l[a] === N && e.preventDefault()), (null === k || void 0 === k ? void 0 : k.includes(r)) && l[a] === N && _(t, a + 1);
                            var c = !0 === f ? "," : f;
                            "Backspace" === r && l[a - 1] === c && _(t, a - 1), "Delete" === r && l[a] === c && _(t, a + 1), i(e)
                        } else i(e)
                    },
                    onBlur: function(t) {
                        var n = z;
                        if (n.match(/\d/g) || (n = ""), a || (n = function(e) {
                                if (!e) return e;
                                var t = "-" === e[0];
                                t && (e = e.substring(1, e.length));
                                var n = e.split("."),
                                    r = n[0].replace(/^0+/, "") || "0",
                                    a = n[1] || "";
                                return (t ? "-" : "") + r + (a ? "." + a : "")
                            }(n)), m && v && (n = g(n, v, m)), n !== z) {
                            var i = T(n, e);
                            U({
                                formattedValue: i,
                                value: n,
                                floatValue: parseFloat(n)
                            }, {
                                event: t,
                                source: r.event
                            })
                        }
                        o(t)
                    }
                })
            }

            function I(e) {
                var t = F(e);
                return o().createElement(k, Object.assign({}, t))
            }
            var M = n("8J5H"),
                B = 1e6,
                V = 1e6,
                P = "[big.js] ",
                O = P + "Invalid ",
                z = O + "decimal places",
                L = P + "Division by zero",
                U = {},
                H = void 0,
                j = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function q(e, t, n, r) {
                var a = e.c;
                if (n === H && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error("[big.js] Invalid rounding mode");
                if (t < 1) r = 3 === n && (r || !!a[0]) || 0 === t && (1 === n && a[0] >= 5 || 2 === n && (a[0] > 5 || 5 === a[0] && (r || a[1] !== H))), a.length = 1, r ? (e.e = e.e - t + 1, a[0] = 1) : a[0] = e.e = 0;
                else if (t < a.length) {
                    if (r = 1 === n && a[t] >= 5 || 2 === n && (a[t] > 5 || 5 === a[t] && (r || a[t + 1] !== H || 1 & a[t - 1])) || 3 === n && (r || !!a[0]), a.length = t, r)
                        for (; ++a[--t] > 9;)
                            if (a[t] = 0, 0 === t) {
                                ++e.e, a.unshift(1);
                                break
                            }
                    for (t = a.length; !a[--t];) a.pop()
                }
                return e
            }

            function K(e, t, n) {
                var r = e.e,
                    a = e.c.join(""),
                    i = a.length;
                if (t) a = a.charAt(0) + (i > 1 ? "." + a.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                else if (r < 0) {
                    for (; ++r;) a = "0" + a;
                    a = "0." + a
                } else if (r > 0)
                    if (++r > i)
                        for (r -= i; r--;) a += "0";
                    else r < i && (a = a.slice(0, r) + "." + a.slice(r));
                else i > 1 && (a = a.charAt(0) + "." + a.slice(1));
                return e.s < 0 && n ? "-" + a : a
            }
            U.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, U.cmp = function(e) {
                var t, n = this,
                    r = n.c,
                    a = (e = new n.constructor(e)).c,
                    i = n.s,
                    o = e.s,
                    l = n.e,
                    c = e.e;
                if (!r[0] || !a[0]) return r[0] ? i : a[0] ? -o : 0;
                if (i != o) return i;
                if (t = i < 0, l != c) return l > c ^ t ? 1 : -1;
                for (o = (l = r.length) < (c = a.length) ? l : c, i = -1; ++i < o;)
                    if (r[i] != a[i]) return r[i] > a[i] ^ t ? 1 : -1;
                return l == c ? 0 : l > c ^ t ? 1 : -1
            }, U.div = function(e) {
                var t = this,
                    n = t.constructor,
                    r = t.c,
                    a = (e = new n(e)).c,
                    i = t.s == e.s ? 1 : -1,
                    o = n.DP;
                if (o !== ~~o || o < 0 || o > B) throw Error(z);
                if (!a[0]) throw Error(L);
                if (!r[0]) return e.s = i, e.c = [e.e = 0], e;
                var l, c, s, u, d, f = a.slice(),
                    v = l = a.length,
                    m = r.length,
                    p = r.slice(0, l),
                    h = p.length,
                    g = e,
                    _ = g.c = [],
                    E = 0,
                    b = o + (g.e = t.e - e.e) + 1;
                for (g.s = i, i = b < 0 ? 0 : b, f.unshift(0); h++ < l;) p.push(0);
                do {
                    for (s = 0; s < 10; s++) {
                        if (l != (h = p.length)) u = l > h ? 1 : -1;
                        else
                            for (d = -1, u = 0; ++d < l;)
                                if (a[d] != p[d]) {
                                    u = a[d] > p[d] ? 1 : -1;
                                    break
                                } if (!(u < 0)) break;
                        for (c = h == l ? a : f; h;) {
                            if (p[--h] < c[h]) {
                                for (d = h; d && !p[--d];) p[d] = 9;
                                --p[d], p[h] += 10
                            }
                            p[h] -= c[h]
                        }
                        for (; !p[0];) p.shift()
                    }
                    _[E++] = u ? s : ++s, p[0] && u ? p[h] = r[v] || 0 : p = [r[v]]
                } while ((v++ < m || p[0] !== H) && i--);
                return _[0] || 1 == E || (_.shift(), g.e--, b--), E > b && q(g, b, n.RM, p[0] !== H), g
            }, U.eq = function(e) {
                return 0 === this.cmp(e)
            }, U.gt = function(e) {
                return this.cmp(e) > 0
            }, U.gte = function(e) {
                return this.cmp(e) > -1
            }, U.lt = function(e) {
                return this.cmp(e) < 0
            }, U.lte = function(e) {
                return this.cmp(e) < 1
            }, U.minus = U.sub = function(e) {
                var t, n, r, a, i = this,
                    o = i.constructor,
                    l = i.s,
                    c = (e = new o(e)).s;
                if (l != c) return e.s = -c, i.plus(e);
                var s = i.c.slice(),
                    u = i.e,
                    d = e.c,
                    f = e.e;
                if (!s[0] || !d[0]) return d[0] ? e.s = -c : s[0] ? e = new o(i) : e.s = 1, e;
                if (l = u - f) {
                    for ((a = l < 0) ? (l = -l, r = s) : (f = u, r = d), r.reverse(), c = l; c--;) r.push(0);
                    r.reverse()
                } else
                    for (n = ((a = s.length < d.length) ? s : d).length, l = c = 0; c < n; c++)
                        if (s[c] != d[c]) {
                            a = s[c] < d[c];
                            break
                        } if (a && (r = s, s = d, d = r, e.s = -e.s), (c = (n = d.length) - (t = s.length)) > 0)
                    for (; c--;) s[t++] = 0;
                for (c = t; n > l;) {
                    if (s[--n] < d[n]) {
                        for (t = n; t && !s[--t];) s[t] = 9;
                        --s[t], s[n] += 10
                    }
                    s[n] -= d[n]
                }
                for (; 0 === s[--c];) s.pop();
                for (; 0 === s[0];) s.shift(), --f;
                return s[0] || (e.s = 1, s = [f = 0]), e.c = s, e.e = f, e
            }, U.mod = function(e) {
                var t, n = this,
                    r = n.constructor,
                    a = n.s,
                    i = (e = new r(e)).s;
                if (!e.c[0]) throw Error(L);
                return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = a, e.s = i, t ? new r(n) : (a = r.DP, i = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = a, r.RM = i, this.minus(n.times(e)))
            }, U.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, U.plus = U.add = function(e) {
                var t, n, r, a = this,
                    i = a.constructor;
                if (e = new i(e), a.s != e.s) return e.s = -e.s, a.minus(e);
                var o = a.e,
                    l = a.c,
                    c = e.e,
                    s = e.c;
                if (!l[0] || !s[0]) return s[0] || (l[0] ? e = new i(a) : e.s = a.s), e;
                if (l = l.slice(), t = o - c) {
                    for (t > 0 ? (c = o, r = s) : (t = -t, r = l), r.reverse(); t--;) r.push(0);
                    r.reverse()
                }
                for (l.length - s.length < 0 && (r = s, s = l, l = r), t = s.length, n = 0; t; l[t] %= 10) n = (l[--t] = l[t] + s[t] + n) / 10 | 0;
                for (n && (l.unshift(n), ++c), t = l.length; 0 === l[--t];) l.pop();
                return e.c = l, e.e = c, e
            }, U.pow = function(e) {
                var t = this,
                    n = new t.constructor("1"),
                    r = n,
                    a = e < 0;
                if (e !== ~~e || e < -1e6 || e > V) throw Error(O + "exponent");
                for (a && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
                return a ? n.div(r) : r
            }, U.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > B) throw Error(O + "precision");
                return q(new this.constructor(this), e, t)
            }, U.round = function(e, t) {
                if (e === H) e = 0;
                else if (e !== ~~e || e < -B || e > B) throw Error(z);
                return q(new this.constructor(this), e + this.e + 1, t)
            }, U.sqrt = function() {
                var e, t, n, r = this,
                    a = r.constructor,
                    i = r.s,
                    o = r.e,
                    l = new a("0.5");
                if (!r.c[0]) return new a(r);
                if (i < 0) throw Error(P + "No square root");
                0 === (i = Math.sqrt(r + "")) || i === 1 / 0 ? ((t = r.c.join("")).length + o & 1 || (t += "0"), o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o), e = new a(((i = Math.sqrt(t)) == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : e = new a(i + ""), o = e.e + (a.DP += 4);
                do {
                    n = e, e = l.times(n.plus(r.div(n)))
                } while (n.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
                return q(e, (a.DP -= 4) + e.e + 1, a.RM)
            }, U.times = U.mul = function(e) {
                var t, n = this,
                    r = n.constructor,
                    a = n.c,
                    i = (e = new r(e)).c,
                    o = a.length,
                    l = i.length,
                    c = n.e,
                    s = e.e;
                if (e.s = n.s == e.s ? 1 : -1, !a[0] || !i[0]) return e.c = [e.e = 0], e;
                for (e.e = c + s, o < l && (t = a, a = i, i = t, s = o, o = l, l = s), t = new Array(s = o + l); s--;) t[s] = 0;
                for (c = l; c--;) {
                    for (l = 0, s = o + c; s > c;) l = t[s] + i[c] * a[s - c - 1] + l, t[s--] = l % 10, l = l / 10 | 0;
                    t[s] = l
                }
                for (l ? ++e.e : t.shift(), c = t.length; !t[--c];) t.pop();
                return e.c = t, e
            }, U.toExponential = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== H) {
                    if (e !== ~~e || e < 0 || e > B) throw Error(z);
                    for (n = q(new n.constructor(n), ++e, t); n.c.length < e;) n.c.push(0)
                }
                return K(n, !0, !!r)
            }, U.toFixed = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== H) {
                    if (e !== ~~e || e < 0 || e > B) throw Error(z);
                    for (e = e + (n = q(new n.constructor(n), e + n.e + 1, t)).e + 1; n.c.length < e;) n.c.push(0)
                }
                return K(n, !1, !!r)
            }, U[Symbol.for("nodejs.util.inspect.custom")] = U.toJSON = U.toString = function() {
                var e = this,
                    t = e.constructor;
                return K(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
            }, U.toNumber = function() {
                var e = Number(K(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(P + "Imprecise conversion");
                return e
            }, U.toPrecision = function(e, t) {
                var n = this,
                    r = n.constructor,
                    a = n.c[0];
                if (e !== H) {
                    if (e !== ~~e || e < 1 || e > B) throw Error(O + "precision");
                    for (n = q(new r(n), e, t); n.c.length < e;) n.c.push(0)
                }
                return K(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!a)
            }, U.valueOf = function() {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(P + "valueOf disallowed");
                return K(e, e.e <= t.NE || e.e >= t.PE, !0)
            };
            var W = function e() {
                function t(n) {
                    var r = this;
                    if (!(r instanceof t)) return n === H ? e() : new t(n);
                    if (n instanceof t) r.s = n.s, r.e = n.e, r.c = n.c.slice();
                    else {
                        if ("string" !== typeof n) {
                            if (!0 === t.strict && "bigint" !== typeof n) throw TypeError(O + "value");
                            n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                        }! function(e, t) {
                            var n, r, a;
                            if (!j.test(t)) throw Error(O + "number");
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
                return t.prototype = U, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
            }();
            const Y = W;
            const G = (0, i.forwardRef)((function(e, t) {
                var n = e.spellCheck,
                    r = void 0 !== n && n,
                    o = e.autoComplete,
                    l = void 0 === o ? "" : o,
                    c = (0, a.__rest)(e, ["spellCheck", "autoComplete"]),
                    s = {
                        ref: t,
                        spellCheck: r,
                        autoComplete: l
                    };
                return (0, i.createElement)("input", (0, a.__assign)((0, a.__assign)({}, c), s))
            }));
            var Z = n("X0Bn"),
                X = n("qrIQ"),
                Q = n("O94r"),
                J = n.n(Q),
                $ = n("DzvH"),
                ee = n("jibv"),
                te = n("/Izd"),
                ne = n("q5Ye"),
                re = n("tKUM"),
                ae = {
                    thousandSeparator: ",",
                    decimalSeparator: "."
                },
                ie = {
                    thousandSeparator: " ",
                    decimalSeparator: ","
                },
                oe = {
                    thousandSeparator: ".",
                    decimalSeparator: ","
                },
                le = {
                    fr: ie,
                    "fr-AF": ie,
                    ru: ie,
                    "ru-KZ": ie,
                    "ru-UA": ie,
                    pl: ie,
                    pt: ie,
                    es: ie,
                    "uk-UA": ie,
                    cs: ie,
                    bg: ie,
                    lv: ie,
                    sk: ie,
                    sl: ie,
                    sv: ie,
                    hu: ie,
                    de: oe,
                    id: oe,
                    it: oe,
                    "pt-BR": oe,
                    ro: oe,
                    vi: oe,
                    "da-DK": oe,
                    el: oe
                },
                ce = {
                    decimalScale: 20,
                    allowNegative: !0
                };

            function se(e) {
                void 0 === e && (e = {});
                var t = e.numericFormat,
                    n = e.locale,
                    r = (0, i.useState)(n || ""),
                    o = r[0],
                    l = r[1],
                    c = (0, i.useMemo)((function() {
                        return function(e) {
                            if (!e) return ae;
                            var t = le[e];
                            if (t) return t;
                            var n = e.split("-")[0];
                            return le[n] || ae
                        }(o)
                    }), [o]),
                    s = (0, i.useCallback)((function(n) {
                        return t ? T(n, (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, ce), c), e)) : n
                    }), [c, e, t]),
                    u = (0, i.useCallback)((function(n) {
                        return t ? D(n, {
                            from: {
                                start: 0,
                                end: n.length
                            },
                            to: {
                                start: 0,
                                end: n.length
                            },
                            lastValue: ""
                        }, (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, ce), c), e)) : n
                    }), [c, e, t]);
                return (0, i.useEffect)((function() {
                    if (t) {
                        var e = n || (0, re.getLanguage)();
                        l(e)
                    }
                }), [n, t]), {
                    formatter: s,
                    parser: u,
                    config: c
                }
            }
            var ue = n("eeEA"),
                de = n("fvKX"),
                fe = (0, i.forwardRef)((function(e, t) {
                    var n = e.value,
                        r = e.prefix,
                        l = e.suffix,
                        c = e.status,
                        s = e.disabled,
                        u = e.onChange,
                        d = e.defaultValue,
                        f = e.size,
                        v = void 0 === f ? "middle" : f,
                        m = e.variant,
                        p = void 0 === m ? "default" : m,
                        h = e.enableClear,
                        g = void 0 !== h && h,
                        _ = (e.validator, e.autoFocus),
                        E = e.onBlur,
                        b = e.onFocus,
                        y = e.disableStyleOnFocus,
                        A = e.mpInputType,
                        x = e.controls,
                        w = e.isPrefixFixedType,
                        C = e.onStep,
                        S = e.maxlength,
                        N = e.maxLength,
                        k = e.gapSize,
                        T = void 0 === k ? "normal" : k,
                        R = e.type,
                        D = e.numericFormat,
                        F = e.locale,
                        B = (e.onKeyDown, (0, a.__rest)(e, ["value", "prefix", "suffix", "status", "disabled", "onChange", "defaultValue", "size", "variant", "enableClear", "validator", "autoFocus", "onBlur", "onFocus", "disableStyleOnFocus", "mpInputType", "controls", "isPrefixFixedType", "onStep", "maxlength", "maxLength", "gapSize", "type", "numericFormat", "locale", "onKeyDown"])),
                        V = D ? "text" : R,
                        P = B.max,
                        O = B.min,
                        z = B.step,
                        L = se({
                            numericFormat: D,
                            locale: F
                        }),
                        U = L.formatter,
                        H = L.parser,
                        j = L.config,
                        q = (0, i.useRef)(null);
                    (0, i.useImperativeHandle)(t, (function() {
                        return q.current
                    }), []);
                    var K = (0, M.G)({
                            value: n,
                            onBlur: E,
                            onFocus: b,
                            onChange: u,
                            defaultValue: d,
                            formatter: U,
                            parser: H
                        }),
                        W = K.input,
                        Q = K.focus,
                        re = K.onBlur,
                        ae = K.onFocus,
                        ie = K.onInput,
                        oe = (0, de.r)(),
                        le = oe.prefixCls,
                        fe = oe.isRTL,
                        ve = "".concat(le, "-textField"),
                        me = "".concat(ve, "-numeric-controls"),
                        pe = "".concat(me, "-trade"),
                        he = (0, i.useMemo)((function() {
                            var t;
                            return J()(ve, ((t = {})["".concat(ve, "-rtl")] = !!fe, t["".concat(ve, "__").concat(p)] = !!p, t["data-".concat(c)] = !!c, t["data-size-".concat(v)] = !!v, t["data-gap-size-".concat(T)] = !!T, t["data-prefix-fixed"] = !!w, t[me] = !!x, t[pe] = "trade" === x, t["".concat(pe, "-suffix")] = "trade" === x && !!l, t.static = !!y, t.disabled = !!s, t.focus = !!Q, t), e.className)
                        }), [ve, fe, p, c, v, T, w, x, y, s, Q, e.className]),
                        ge = g && !s && "" !== W,
                        _e = (0, i.useCallback)((function() {
                            ie({
                                target: {
                                    value: ""
                                }
                            })
                        }), [ie]),
                        Ee = null !== N && void 0 !== N ? N : S,
                        be = (0, i.useMemo)((function() {
                            return (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, ce), {
                                allowedDecimalSeparators: [",", "."]
                            }), j)
                        }), [j, X.lq]),
                        ye = (0, i.useMemo)((function() {
                            return X.lq ? {
                                onInput: ie,
                                maxlength: Ee
                            } : {
                                onChange: ie,
                                autoFocus: _,
                                maxLength: Ee
                            }
                        }), [X.lq, ie, Ee, _]),
                        Ae = (0, i.useMemo)((function() {
                            return o().createElement(Z.A, {
                                name: "CircledCloseF",
                                color: "IconNormal"
                            })
                        }), []),
                        xe = (0, i.useMemo)((function() {
                            return "web" === A && G || G
                        }), [A]),
                        we = (0, i.useMemo)((function() {
                            return D && !X.lq ? function(e) {
                                return o().createElement(I, (0, a.__assign)({}, be, e))
                            } : xe
                        }), [D, xe, be]),
                        Ce = (0, i.useCallback)((function(e) {
                            return void 0 !== e && function(e) {
                                return !isNaN(parseFloat(e)) && isFinite(e)
                            }(e) ? new Y(e) : null
                        }), []),
                        Se = H ? H(W) : W,
                        Ne = (0, i.useCallback)((function() {
                            var e = Ce(z) || new Y(1),
                                t = Ce(Se) || new Y(0),
                                n = Ce(P);
                            if (!n || t.plus(e).lte(n)) {
                                var r = t.plus(e).toString(),
                                    a = U ? U(r) : r;
                                ie({
                                    target: {
                                        value: a
                                    }
                                }), null === C || void 0 === C || C(r, {
                                    type: "up",
                                    step: e.toNumber()
                                })
                            }
                        }), [U, Se, ie, P, z, C, Ce]),
                        ke = (0, i.useCallback)((function() {
                            var e = Ce(z) || new Y(1),
                                t = Ce(Se) || new Y(0),
                                n = Ce(O);
                            if (!n || t.minus(e).gte(n)) {
                                var r = t.minus(e).toString(),
                                    a = U ? U(r) : r;
                                ie({
                                    target: {
                                        value: a
                                    }
                                }), null === C || void 0 === C || C(r, {
                                    type: "down",
                                    step: e.toNumber()
                                })
                            }
                        }), [Se, U, ie, O, z, C, Ce]),
                        Te = (0, i.useMemo)((function() {
                            return r ? w ? o().createElement(ue.Ay, {
                                className: J()("".concat(ve, "-prefix"), "".concat(ve, "-prefix-fixed")),
                                children: r
                            }) : o().createElement(ue.Ay, {
                                className: "".concat(ve, "-prefix"),
                                children: r
                            }) : null
                        }), [w, r, ve]),
                        Re = (0, i.useCallback)((function(e, t) {
                            "Enter" === e.key && t()
                        }), []),
                        De = (0, i.useCallback)((function(e) {
                            return x ? "trade" === x ? "prefix" === e ? o().createElement(ue.Ay, {
                                className: "".concat(pe, "-minus"),
                                onClick: ke,
                                role: "button",
                                "aria-label": "decrease value"
                            }, o().createElement($.A, {
                                name: "Minus1C",
                                color: "IconNormal"
                            })) : o().createElement(ue.Ay, {
                                className: "".concat(pe, "-plus"),
                                onClick: Ne,
                                role: "button",
                                "aria-label": "increase value"
                            }, o().createElement(ee.A, {
                                name: "Plus1C",
                                color: "IconNormal"
                            })) : "suffix" === e ? o().createElement(ue.Ay, {
                                className: "".concat(me, "-panel")
                            }, o().createElement(ue.Ay, {
                                className: "".concat(me, "-panel-up"),
                                onClick: Ne,
                                role: "button",
                                "aria-label": "increase value"
                            }, o().createElement(te.A, {
                                name: "CaretUpF",
                                color: "IconNormal"
                            })), o().createElement(ue.Ay, {
                                className: "".concat(me, "-panel-down"),
                                onClick: ke,
                                role: "button",
                                "aria-label": "decrease value"
                            }, o().createElement(ne.A, {
                                name: "CaretDownF",
                                color: "IconNormal"
                            }))) : null : null
                        }), [x, ke, Ne, me, pe]),
                        Fe = (0, i.useCallback)((function() {
                            "trade" === x && q.current && q.current.focus()
                        }), [x, pe]),
                        Ie = {
                            "aria-invalid": "error" === c ? "true" : void 0,
                            "aria-required": B.required ? "true" : void 0,
                            "aria-disabled": s ? "true" : void 0,
                            "aria-label": B.id ? void 0 : B.placeholder || "input field"
                        };
                    return o().createElement(ue.Ay, {
                        className: he,
                        onClick: Fe
                    }, De("prefix"), Te, o().createElement(we, (0, a.__assign)({}, Ie, B, ye, {
                        type: V,
                        ref: q,
                        value: W,
                        disabled: s,
                        onBlur: re,
                        onFocus: ae,
                        className: "".concat(ve, "-input")
                    })), ge && o().createElement(ue.Ay, {
                        onClick: _e,
                        className: "".concat(ve, "-clear"),
                        children: Ae,
                        onKeyDown: function(e) {
                            return Re(e, _e)
                        },
                        tabIndex: 0,
                        role: "button",
                        "aria-label": "clear"
                    }), l && o().createElement(ue.Ay, {
                        className: "".concat(ve, "-suffix"),
                        children: l
                    }), De("suffix"))
                }));
            fe.__name = "TextField", fe.displayName = "TextField";
            const ve = fe
        },
        ifOS: (e, t, n) => {
            var r = n("mkfS").Y,
                a = window.matchMedia;

            function i(e, t, n) {
                var i = this;
                if (a && !n) {
                    var o = a.call(window, e);
                    this.matches = o.matches, this.media = o.media, o.addListener(l)
                } else this.matches = r(e, t), this.media = e;

                function l(e) {
                    i.matches = e.matches, i.media = e.media
                }
                this.addListener = function(e) {
                    o && o.addListener(e)
                }, this.removeListener = function(e) {
                    o && o.removeListener(e)
                }, this.dispose = function() {
                    o && o.removeListener(l)
                }
            }
            e.exports = function(e, t, n) {
                return new i(e, t, n)
            }
        },
        nChe: e => {
            e.exports = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t),
                    a = n.length;
                if (r.length !== a) return !1;
                for (var i = 0; i < a; i++) {
                    var o = n[i];
                    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1
                }
                return !0
            }
        }
    }
]);
//# debugId=88a3de86-a2d6-5fca-b65d-48178a05898b