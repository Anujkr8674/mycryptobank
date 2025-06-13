! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "57e0a908-19b1-5564-a73a-3589ab70365f")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [7456], {
        cKGJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => x
            });
            var r = n("sViW"),
                o = n("M5j3"),
                a = n("gZfF"),
                i = n("aVXY"),
                c = n("3yYM"),
                s = n.n(c),
                l = n("DTvD"),
                u = n.n(l),
                f = n("T9BW"),
                d = n("lEYW"),
                m = n("eeEA"),
                p = n("JgEn"),
                v = n("D4P9"),
                h = n("b4zg"),
                b = n("a75W"),
                g = n("3o5u"),
                y = n("YiNW"),
                w = n("UXh2"),
                C = function(e) {
                    var t = e.id,
                        n = e.checked,
                        r = e.disabled,
                        o = void 0 !== r && r,
                        a = e.onChange,
                        i = e.label;
                    return u().createElement(d.A, {
                        id: t,
                        value: "1",
                        checked: n,
                        disabled: o,
                        onChange: function(e, t) {
                            return a(t)
                        }
                    }, i)
                },
                _ = function(e) {
                    var t = e.title,
                        n = e.message,
                        r = e.icon,
                        o = void 0 === r ? u().createElement(h.A, {
                            className: "w-[60px] h-[60px] tablet:w-[96px] tablet:h-[96px]"
                        }) : r,
                        a = e.hideIcon,
                        c = void 0 !== a && a,
                        s = e.cancelText,
                        d = e.cancelId,
                        b = e.hideCancelButton,
                        _ = void 0 !== b && b,
                        x = e.confirmText,
                        E = e.confirmId,
                        k = e.onCancel,
                        A = e.onConfirm,
                        N = e.className,
                        O = void 0 === N ? "" : N,
                        T = e.btnClassName,
                        D = void 0 === T ? "" : T,
                        M = e.titleClassName,
                        P = void 0 === M ? "" : M,
                        S = e.hasAgreementCheckbox,
                        R = void 0 !== S && S,
                        F = e.agreementCheckboxText,
                        z = e.isRequiredToReadAllTerm,
                        L = void 0 !== z && z,
                        I = e.termAgreementId,
                        B = e.confirmCountdownInS,
                        j = (0, f.useTranslation)(g.VX).t,
                        W = (0, l.useRef)(null),
                        V = (0, i.A)((0, l.useState)(L), 2),
                        H = V[0],
                        q = V[1],
                        X = (0, i.A)((0, l.useState)(!R), 2),
                        Z = X[0],
                        Y = X[1],
                        U = (0, i.A)((0, l.useState)("undefined" === typeof B), 2),
                        K = U[0],
                        Q = U[1],
                        J = K && Z,
                        $ = (0, w.A)({
                            countFrom: B || 0,
                            onEnd: function() {
                                return Q(!0)
                            }
                        }).timeLeft;
                    return (0, l.useLayoutEffect)((function() {
                        var e;
                        if (L) {
                            var t = null === W || void 0 === W || null === (e = W.current) || void 0 === e ? void 0 : e.scrollHeight;
                            t && t <= 336 && q(!1)
                        }
                    }), [L]), u().createElement(m.Ay, {
                        className: (0, y.cn)("flex items-center justify-center flex-col text-center w-[298px] tablet:w-[360px]", O)
                    }, u().createElement(m.Ay, {
                        className: "flex flex-col items-center w-full"
                    }, !c && o, !!t && u().createElement(m.Ay, {
                        className: (0, y.cn)("confirmModal__title subtitle1 mobile:headline5 mb-2xs", c ? "mt-0" : "mt-m", P)
                    }, t), u().createElement(m.Ay, {
                        ref: W,
                        className: (0, y.cn)("ConfirmModal__message", "body3", {
                            "overflow-y-auto": L
                        }),
                        style: {
                            maxHeight: L ? "".concat(336, "px") : "none"
                        },
                        onScroll: function(e) {
                            if (L) {
                                var t = e.target;
                                t.scrollHeight - t.scrollTop <= t.clientHeight + 5 && q(!1)
                            }
                        }
                    }, n), R && u().createElement(m.Ay, {
                        className: "flex items-start w-full mt-xl"
                    }, H ? u().createElement(p.A, {
                        tooltips: j("c2c-ui-additional-kyc-taker-term-confirm-box-checkbox-tooltip"),
                        placement: "top",
                        arrow: !0
                    }, u().createElement(C, {
                        checked: Z,
                        onChange: Y,
                        label: F,
                        disabled: !0
                    })) : u().createElement(C, {
                        id: I,
                        checked: Z,
                        onChange: Y,
                        label: F
                    })), u().createElement(m.Ay, {
                        className: "confirmModal__footer flex flex-col mt-xl mobile:mt-m gap-xs w-full"
                    }, u().createElement(v.A, {
                        id: E,
                        className: (0, y.cn)("confirmModal__confirm_btn w-full", D),
                        onClick: A,
                        disabled: !J
                    }, x || j("c2c-ui-dialog-comfirm-cancel"), $ > 0 && " (".concat($, ")")), !_ && u().createElement(v.A, {
                        id: d,
                        variant: "secondary",
                        className: (0, y.cn)("ConfirmModal__cancel_btn w-full", D),
                        onClick: k
                    }, s || j("c2c-user-ui-common-cancel")))))
                };
            const x = function() {
                var e = (0, r.A)(s().mark((function e(t) {
                    var n, r, i;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.onCancel, r = t.onConfirm, i = (0, a.A)(t, ["onCancel", "onConfirm"]), e.abrupt("return", new Promise((function(e) {
                                    var t = (0, b.aF)({
                                        content: u().createElement(_, (0, o.A)({}, i, {
                                            onCancel: function() {
                                                null === n || void 0 === n || n(), e(!1), t()
                                            },
                                            onConfirm: function() {
                                                null === r || void 0 === r || r(), e(!0), t()
                                            }
                                        })),
                                        needCloseIcon: i.needCloseIcon || !1,
                                        onClose: function() {
                                            var t;
                                            e(!1), null === i || void 0 === i || null === (t = i.onClose) || void 0 === t || t.call(i)
                                        },
                                        sx: {
                                            borderRadius: "16px",
                                            width: "fit-content"
                                        },
                                        maskStyles: {
                                            zIndex: "var(--zindex-drawer)"
                                        }
                                    }).close
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
        UXh2: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("aVXY"),
                o = n("wgY5"),
                a = n.n(o),
                i = n("DTvD");
            const c = function(e) {
                var t = e.countFrom,
                    n = void 0 === t ? 0 : t,
                    o = e.onEnd,
                    c = void 0 === o ? function() {} : o,
                    s = e.expireTime,
                    l = (0, r.A)((0, i.useState)(n), 2),
                    u = l[0],
                    f = l[1],
                    d = (0, r.A)((0, i.useState)(), 2),
                    m = d[0],
                    p = d[1];
                (0, i.useEffect)((function() {
                    s && (p(s), f(a()(s).diff(a()(), "seconds"))), n && (f(n), p(a()().add(n, "seconds").valueOf()))
                }), [n, s]), (0, i.useEffect)((function() {
                    var e;
                    return m && u > 0 && (e = setInterval((function() {
                            var t = a()(m).diff(a()(), "seconds");
                            if (t < 0) return c(), void clearInterval(e);
                            f(t)
                        }), 1e3)),
                        function() {
                            e && clearInterval(e)
                        }
                }), [m]);
                return {
                    timeLeft: u,
                    reset: function() {
                        f(n), p(a()().add(n, "seconds").valueOf())
                    },
                    expireTimeStamp: m
                }
            }
        },
        nn0X: (e, t, n) => {
            "use strict";
            n.d(t, {
                dY: () => u,
                oP: () => s
            });
            var r = n("DTvD"),
                o = n("oRTC"),
                a = function(e) {
                    return e.cookies || {}
                },
                i = function() {
                    var e = (0, r.useRef)(null),
                        t = (0, o.wA)();
                    return e.current = (0, o.d4)(a), {
                        cookies: e.current,
                        saveCookie: (0, r.useCallback)((function(n, r) {
                            var o = "function" === typeof r ? r(e.current[n]) : r;
                            t.cookies.save({
                                key: n,
                                value: o
                            })
                        }), [])
                    }
                },
                c = "userPreferredCurrency",
                s = function() {
                    var e = i(),
                        t = e.cookies,
                        n = e.saveCookie;
                    return {
                        cachePreferFiat: t[c],
                        setCacheFiat: (0, r.useCallback)((function(e) {
                            n(c, e)
                        }), [])
                    }
                },
                l = "fiat-prefer-currency",
                u = function() {
                    var e = i(),
                        t = e.cookies,
                        n = e.saveCookie;
                    return {
                        getCurrency: t[l],
                        setCurrency: (0, r.useCallback)((function(e) {
                            n(l, e)
                        }), [])
                    }
                }
        },
        HIvj: (e, t, n) => {
            "use strict";
            n.d(t, {
                PC: () => p,
                Py: () => m,
                eg: () => b,
                xN: () => h
            });
            var r = n("ezuS"),
                o = n("DTvD"),
                a = n("oRTC"),
                i = n("nn0X"),
                c = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                s = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                l = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.fiatCurrency
                },
                u = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                f = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userQuoteAsset
                },
                d = function() {
                    return (0, a.d4)(c, a.bN) || {}
                },
                m = function() {
                    return (0, a.d4)(s, a.bN) || {}
                },
                p = function() {
                    return (0, a.d4)(l, a.bN) || {}
                },
                v = function() {
                    return (0, a.d4)(u, a.bN) || {}
                },
                h = function() {
                    var e = (0, a.wA)(),
                        t = d().isLoggedIn,
                        n = (0, i.oP)(),
                        r = n.cachePreferFiat,
                        c = n.setCacheFiat,
                        s = v().configName;
                    return {
                        userFiat: (t ? s : r) || r,
                        setUseFiat: (0, o.useMemo)((function() {
                            return t ? function(t) {
                                return e.userCenter.updateCurrentFiat(t)
                            } : function(e) {
                                return c(e)
                            }
                        }), [t])
                    }
                },
                b = function() {
                    var e = (0, o.useRef)(),
                        t = (0, a.wA)();
                    return e.current = (0, a.d4)(f, a.bN) || "", {
                        userQuoteAsset: e.current,
                        setUserQuoteAsset: (0, o.useCallback)((function(n, o) {
                            var a = "function" === typeof o ? o(e.current[n]) : o;
                            t.userCenter.updateState((0, r.A)({}, n, a))
                        }), [])
                    }
                }
        },
        rLOQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("6aZm"),
                c = n("LCuF"),
                s = (0, i.UF)("uikit-core", "Image"),
                l = (0, o.forwardRef)((function(e, t) {
                    return s(), a().createElement(c.A, (0, r.A)({
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
        HDxn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("LCuF"),
                c = (0, o.forwardRef)((function(e, t) {
                    return a().createElement(i.A, (0, r.A)({
                        ref: t,
                        as: "a",
                        variant: "link",
                        "data-bn-type": "link"
                    }, e))
                }));
            c.displayName = "Link";
            const s = c
        },
        "I6V/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        zRna: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            }
        },
        X0Bn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
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
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
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
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        DzvH: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M3 10.5v3h18v-3H3z",
                    fill: "currentColor"
                }))
            }
        },
        b4zg: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const c = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
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
            }
        },
        "SZ+q": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("hTvQ"),
                c = n.n(i),
                s = n("O94r"),
                l = n.n(s),
                u = n("qrIQ"),
                f = n("eeEA"),
                d = n("fvKX"),
                m = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                p = function(e) {
                    var t = e.placement,
                        n = e.offset,
                        r = e.isArrow,
                        o = t.split("-"),
                        a = o[0],
                        i = o[1],
                        c = i ? 0 : "50%",
                        s = r ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[a] : "",
                        l = r ? n - Math.floor(3) : "100%",
                        u = i ? r ? 9 : 0 : "50%";
                    return ("end" === i ? {
                        top: {
                            transform: "translate(-".concat(c, ", 0)").concat(s),
                            bottom: l,
                            right: u
                        },
                        left: {
                            transform: "translate(0, -".concat(c, ")").concat(s),
                            right: l,
                            bottom: u
                        },
                        right: {
                            transform: "translate(0, -".concat(c, ")").concat(s),
                            left: l,
                            bottom: u
                        },
                        bottom: {
                            transform: "translate(-".concat(c, ", 0)").concat(s),
                            top: l,
                            right: u
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(c, ", 0)").concat(s),
                            bottom: l,
                            left: u
                        },
                        left: {
                            transform: "translate(0, -".concat(c, ")").concat(s),
                            right: l,
                            top: u
                        },
                        right: {
                            transform: "translate(0, -".concat(c, ")").concat(s),
                            left: l,
                            top: u
                        },
                        bottom: {
                            transform: "translate(-".concat(c, ", 0)").concat(s),
                            top: l,
                            left: u
                        }
                    })[a]
                },
                v = function(e) {
                    var t, n, o = e.arrow,
                        i = e.shadow,
                        s = e.isFloat,
                        v = e.offset,
                        h = void 0 === v ? 6 : v,
                        b = e.variant,
                        g = void 0 === b ? "primary" : b,
                        y = e.placement,
                        w = void 0 === y ? "top" : y,
                        C = e.enablePortal,
                        _ = e.portalNode,
                        x = e.style,
                        E = e.radius,
                        k = e.bubbleFontSize,
                        A = void 0 === k ? 14 : k,
                        N = (0, r.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        O = (0, d.r)().prefixCls,
                        T = "".concat(O, "-bubble"),
                        D = l()(T, ((t = {})["".concat(T, "__").concat(g)] = !!g, t["data-shadow"] = !!i, t["data-font-".concat(A)] = !!A, t), e.className);
                    h = o ? Math.max(h, 4) : h;
                    var M = w.split("-")[0],
                        P = s ? p({
                            offset: h,
                            placement: w
                        }) : {},
                        S = p({
                            offset: h,
                            placement: w,
                            isArrow: !0
                        }),
                        R = ((n = {})[m[M]] = h, n.borderRadius = E, n),
                        F = a().createElement(f.Ay, (0, r.__assign)({}, N, {
                            className: D,
                            style: (0, r.__assign)((0, r.__assign)({}, P), x)
                        }), !!o && a().createElement(f.Ay, {
                            className: "".concat(T, "-arrow"),
                            style: S
                        }), !!o && !!i && a().createElement(f.Ay, {
                            className: "".concat(T, "-arrow-shadow"),
                            style: S
                        }), a().createElement(f.Ay, {
                            style: R,
                            className: "".concat(T, "-content"),
                            children: e.children
                        }));
                    return !u.lq && C ? c().createPortal(F, _ instanceof HTMLElement ? _ : document.body) : F
                };
            v.displayName = "Bubble";
            const h = v
        },
        D4P9: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("9xbI");
            const c = (0, o.forwardRef)((function(e, t) {
                var n = e.as,
                    o = void 0 === n ? "button" : n,
                    c = (0, r.__rest)(e, ["as"]);
                return a().createElement(i.A, (0, r.__assign)({}, c, {
                    as: o,
                    ref: t
                }))
            }));
            var s = n("qrIQ"),
                l = n("O94r"),
                u = n.n(l),
                f = n("W2aP"),
                d = n("eeEA"),
                m = n("fvKX"),
                p = (0, o.forwardRef)((function(e, t) {
                    var n, i = e.variant,
                        l = void 0 === i ? "primary" : i,
                        p = e.sz,
                        v = void 0 === p ? "middle" : p,
                        h = e.inactive,
                        b = e.loading,
                        g = e.onClick,
                        y = e.subLine,
                        w = e.children,
                        C = e.textVariant,
                        _ = void 0 === C ? "text" === l ? "yellow" : "black" : C,
                        x = e.iconVariant,
                        E = void 0 === x ? "line" : x,
                        k = e["aria-label"],
                        A = (0, r.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"]),
                        N = (0, m.r)(),
                        O = N.prefixCls,
                        T = N.isRTL,
                        D = "".concat(O, "-button"),
                        M = "text" === l || "info" === l,
                        P = "icon" === l,
                        S = u()(D, ((n = {})["".concat(D, "-rtl")] = !!T, n["".concat(D, "__").concat(l)] = !!l, n["".concat(D, "__").concat(l, "__").concat(_)] = M && !!_, n["".concat(D, "__").concat(l, "__").concat(E)] = P && !!E, n["data-size-".concat(v)] = !!v, n["data-size-".concat(v, "-two-line")] = !!v && !!y, n["data-two-line"] = !!y, n.inactive = !!h, n), e.className),
                        R = !h && "function" === typeof g,
                        F = s.lq ? "none" : e.type,
                        z = R ? g : void 0,
                        L = (0, o.useMemo)((function() {
                            return b ? a().createElement(f.A, null) : a().createElement(a().Fragment, null, w, y && a().createElement(d.Ay, null, y))
                        }), [w, o.useMemo, b]),
                        I = {
                            "aria-label": (0, o.useMemo)((function() {
                                return k || ("string" === typeof w ? w : y && "string" === typeof y ? y : "button")
                            }), [k, w, y]),
                            "aria-disabled": h || b ? "true" : void 0,
                            "aria-busy": b ? "true" : void 0,
                            role: "button"
                        };
                    return a().createElement(c, (0, r.__assign)({
                        key: b ? "loading" : "content"
                    }, I, A, {
                        children: L,
                        ref: t,
                        type: F,
                        className: S,
                        onClick: z
                    }))
                }));
            p.displayName = "Button";
            const v = p
        },
        cZx9: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => g
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("O94r"),
                c = n.n(i),
                s = n("QFE7"),
                l = n("9xbI");
            const u = function(e) {
                var t = e.direction,
                    n = void 0 === t ? "left" : t,
                    i = e.children,
                    c = e.className,
                    s = e.onClose,
                    u = (e.visible, e.draggable, (0, r.__rest)(e, ["direction", "children", "className", "onClose", "visible", "draggable"])),
                    f = (0, o.useState)(!1),
                    d = f[0],
                    m = f[1],
                    p = (0, o.useState)({
                        x: 0,
                        y: 0
                    }),
                    v = p[0],
                    h = p[1],
                    b = (0, o.useState)(0),
                    g = b[0],
                    y = b[1],
                    w = (0, o.useRef)(null),
                    C = (0, o.useMemo)((function() {
                        var e = "top" === n || "bottom" === n;
                        return {
                            isVertical: e,
                            getTransform: function(t) {
                                var n = "".concat(t, "px");
                                return "translate3d(".concat(e ? "0, ".concat(n) : "".concat(n, ", 0"), ", 0)")
                            },
                            getOffset: function(t) {
                                var r = e ? t.y - v.y : t.x - v.x;
                                switch (n) {
                                    case "top":
                                    case "left":
                                        return Math.min(r, 0);
                                    default:
                                        return Math.max(r, 0)
                                }
                            }
                        }
                    }), [n, v]),
                    _ = C.isVertical,
                    x = C.getTransform,
                    E = C.getOffset,
                    k = (0, o.useCallback)((function(e, t) {
                        return Math.abs(e) / t
                    }), []),
                    A = (0, o.useCallback)((function() {
                        return {
                            top: "translate3d(0, -100%, 0)",
                            right: "translate3d(100%, 0, 0)",
                            bottom: "translate3d(0, 100%, 0)",
                            left: "translate3d(-100%, 0, 0)"
                        }[n]
                    }), [n]),
                    N = (0, o.useCallback)((function(e) {
                        if (!d) {
                            var t = e.touches[0];
                            m(!0), h({
                                x: t.pageX,
                                y: t.pageY
                            }), y(e.timeStamp), w.current && (w.current.style.transition = "none")
                        }
                    }), [d]),
                    O = (0, o.useCallback)((function(e) {
                        if (d && w.current) {
                            var t = e.touches[0],
                                n = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                r = E(n);
                            w.current.style.transform = x(r)
                        }
                    }), [d, E, x]),
                    T = (0, o.useCallback)((function(e) {
                        if (d && w.current) {
                            var t = e.changedTouches[0],
                                n = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                r = w.current.getBoundingClientRect(),
                                o = e.timeStamp - g;
                            w.current.style.transition = "";
                            var a = Math.abs(E(n)),
                                i = k(a, o);
                            a > (_ ? r.height / 2 : r.width / 2) || i > 1.5 ? (w.current.style.transform = A(), null === s || void 0 === s || s()) : w.current.style.transform = "", m(!1)
                        }
                    }), [d, g, E, k, _, A, s]);
                return a().createElement(l.A, (0, r.__assign)({
                    ref: w,
                    className: c,
                    onTouchStart: N,
                    onTouchMove: O,
                    onTouchEnd: T
                }, u), i)
            };
            var f = n("mk7A"),
                d = n("eeEA"),
                m = n("fvKX"),
                p = function(e) {
                    var t, n = e.direction,
                        o = e.className,
                        i = (0, r.__rest)(e, ["direction", "className"]),
                        s = (0, m.r)().prefixCls,
                        l = "".concat(s, "-drawer-handle"),
                        u = "".concat(l, "-icon"),
                        f = c()(l, ((t = {})["data-dir-".concat(n)] = !!n, t), o);
                    return a().createElement(d.Ay, (0, r.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, i, {
                        className: f
                    }), a().createElement(d.Ay, {
                        className: u,
                        "aria-hidden": "true"
                    }))
                },
                v = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "left" : t,
                        o = e.children,
                        i = e.onClose,
                        c = e.maskClz,
                        s = e.wrapClz,
                        l = (0, r.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]),
                        d = {
                            "aria-modal": !0,
                            role: "dialog",
                            "aria-label": e.title || "drawer"
                        };
                    return a().createElement(f.A, (0, r.__assign)({}, l, {
                        onClose: i,
                        className: c
                    }), a().createElement(u, (0, r.__assign)({}, d, {
                        direction: n,
                        className: s,
                        onClose: i
                    }), a().createElement(p, {
                        direction: n
                    }), o))
                };
            v.displayName = "Drawer";
            const h = v;
            var b = function(e) {
                var t, n = e.direction,
                    i = void 0 === n ? "left" : n,
                    l = e.className,
                    u = e.children,
                    p = e.size,
                    v = void 0 === p ? "auto" : p,
                    b = e.once,
                    g = e.onVisibleChange,
                    y = e.draggable,
                    w = e.onClose,
                    C = (0, r.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    _ = (0, m.r)().prefixCls,
                    x = "".concat(_, "-drawer"),
                    E = c()("".concat(x, "-wrap"), ((t = {})["data-size-".concat(v)] = "auto" !== v, t["data-dir-".concat(i)] = !!i, t["data-draggable"] = !!y, t)),
                    k = c()(x, l),
                    A = (0, s.d)({
                        fn: g,
                        time: 50
                    }).debounceFn,
                    N = (0, o.useCallback)((function() {
                        null === w || void 0 === w || w(), A(!1)
                    }), [w, A]),
                    O = (0, o.useCallback)((function() {
                        b && N()
                    }), [b, N]);
                if (y) return a().createElement(h, (0, r.__assign)({
                    onClose: N,
                    maskClz: k,
                    wrapClz: E
                }, e));
                var T = {
                    "aria-modal": !0,
                    role: "dialog",
                    "aria-label": e.title || "drawer"
                };
                return a().createElement(f.A, (0, r.__assign)({}, C, {
                    onClose: N,
                    className: k
                }), a().createElement(d.Ay, (0, r.__assign)({}, T, {
                    className: E,
                    children: u,
                    onClick: O
                })))
            };
            b.displayName = "Drawer";
            const g = b
        },
        JyHn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => A,
                Z: () => k
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("hyZw"),
                c = n("H2//"),
                s = n("B8b3"),
                l = n("Svbh");
            const u = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    i = e.content,
                    c = (0, r.__rest)(e, ["willClose", "closeCallback", "content"]),
                    u = a().useState(!0),
                    f = u[0],
                    d = u[1],
                    m = (0, o.useCallback)((function() {
                        d(!1), setTimeout((function() {
                            n && n()
                        }), l.p)
                    }), [n]);
                return a().useEffect((function() {
                    t && m()
                }), [t, m]), a().createElement(s.Ay, (0, r.__assign)({}, c, {
                    visible: f,
                    onClose: m,
                    children: i
                }))
            };
            var f = n("O94r"),
                d = n.n(f),
                m = n("eeEA"),
                p = n("mk7A"),
                v = n("fvKX");
            const h = function(e) {
                var t = e.duration,
                    n = void 0 === t ? 3e3 : t,
                    o = e.visible,
                    c = e.onClose,
                    s = void 0 === c ? i.es : c,
                    l = e.children,
                    u = (0, r.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    f = a().useRef(),
                    h = (0, v.r)().prefixCls,
                    b = d()("".concat(h, "-toast"), e.className);
                return a().useEffect((function() {
                    return n ? (f.current = setTimeout((function() {
                        o && s(), f.current = null
                    }), n), function() {
                        return clearTimeout(f.current)
                    }) : function() {}
                }), [o, n, s]), a().createElement(p.A, (0, r.__assign)({}, u, {
                    visible: o,
                    onClose: s,
                    className: b
                }), a().createElement(m.Ay, {
                    className: "".concat(h, "-toast-wrap"),
                    children: l
                }))
            };
            const b = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    i = e.content,
                    c = (0, r.__rest)(e, ["willClose", "closeCallback", "content"]),
                    s = a().useState(!0),
                    u = s[0],
                    f = s[1],
                    d = (0, o.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            n && n()
                        }), l.p)
                    }), [n]);
                return a().useEffect((function() {
                    t && d()
                }), [t, d]), a().createElement(h, (0, r.__assign)({}, c, {
                    visible: u,
                    onClose: d,
                    children: i
                }))
            };
            var g = n("cZx9");
            const y = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    i = e.direction,
                    c = void 0 === i ? "bottom" : i,
                    s = e.content,
                    u = (0, r.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    f = a().useState(!0),
                    d = f[0],
                    m = f[1],
                    p = (0, o.useCallback)((function() {
                        m(!1), setTimeout((function() {
                            n && n()
                        }), l.p)
                    }), [n]);
                return a().useEffect((function() {
                    t && p()
                }), [t, p]), a().createElement(g.A, (0, r.__assign)({}, u, {
                    direction: c,
                    visible: d,
                    onClose: p,
                    children: s
                }))
            };
            var w = n("rbiW");
            const C = function(e) {
                var t = e.className,
                    n = e.duration,
                    i = void 0 === n ? 3e3 : n,
                    c = e.willClose,
                    s = e.closeCallback,
                    u = (0, r.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    f = a().useState(!0),
                    d = f[0],
                    m = f[1],
                    p = a().useRef(),
                    v = (0, o.useCallback)((function() {
                        m(!1), setTimeout((function() {
                            s && s()
                        }), l.p)
                    }), [s]);
                return a().useEffect((function() {
                    c && v()
                }), [c, v]), a().useEffect((function() {
                    return i ? (p.current = setTimeout((function() {
                        d && v(), p.current = null
                    }), i), function() {
                        return clearTimeout(p.current)
                    }) : function() {}
                }), [d, i, v]), a().createElement(l.A, {
                    className: t,
                    visible: d
                }, a().createElement(w.A, (0, r.__assign)({
                    closable: !0,
                    variant: "push"
                }, u, {
                    onClose: v
                })))
            };
            var _ = function(e) {
                var t = e.placement,
                    n = e.offsetX,
                    r = e.offsetY,
                    o = t.split("-"),
                    a = o[0],
                    i = o[1],
                    c = i ? 0 : "50%",
                    s = r,
                    l = i ? n : "50%";
                return ("end" === i ? {
                    top: {
                        transform: "translate(-".concat(c, ", 0)"),
                        top: s,
                        right: l
                    },
                    bottom: {
                        transform: "translate(-".concat(c, ", 0)"),
                        bottom: s,
                        right: l
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(c, ", 0)"),
                        top: s,
                        left: l
                    },
                    bottom: {
                        transform: "translate(-".concat(c, ", 0)"),
                        bottom: s,
                        left: l
                    }
                })[a]
            };
            const x = function(e) {
                var t = e.offsetX,
                    n = void 0 === t ? 16 : t,
                    o = e.offsetY,
                    i = void 0 === o ? 16 : o,
                    c = e.notifies,
                    s = (0, v.r)().prefixCls,
                    l = "".concat(s, "-layer-notifies");
                if (!c.length) return null;
                var u = c.reduce((function(e, t) {
                    var n = t.uid,
                        o = t.placement,
                        i = void 0 === o ? "top-end" : o,
                        c = (0, r.__rest)(t, ["uid", "placement"]);
                    return e[i].push(a().createElement(C, (0, r.__assign)({
                        key: n
                    }, c))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return a().createElement(m.Ay, {
                    className: "".concat(l, "-wrap")
                }, Object.keys(u).map((function(e) {
                    var t, r = e.split("-"),
                        o = (r[0], r[1]),
                        c = u[e],
                        s = d()(l, ((t = {})["data-pos-".concat(o)] = o, t));
                    return c.length ? a().createElement(m.Ay, {
                        key: e,
                        className: s,
                        children: c,
                        style: _({
                            placement: e,
                            offsetX: n,
                            offsetY: i
                        })
                    }) : null
                })))
            };
            var E = (0, o.createContext)({
                    openModal: i.es,
                    closeModal: i.es,
                    openToast: i.es,
                    closeToast: i.es,
                    openDrawer: i.es,
                    closeDrawer: i.es,
                    pushNotify: i.es,
                    closeNotify: i.es
                }),
                k = function() {
                    return a().useContext(E)
                };
            const A = function(e) {
                var t = e.children,
                    n = e.notifiesPosition,
                    i = (0, o.useState)(),
                    s = i[0],
                    l = i[1],
                    f = (0, o.useState)(),
                    d = f[0],
                    m = f[1],
                    p = (0, o.useState)(),
                    v = p[0],
                    h = p[1],
                    g = (0, o.useState)([]),
                    w = g[0],
                    C = g[1],
                    _ = {};
                return _.openModal = (0, o.useCallback)((function(e) {
                    var t = e.closeCallback;
                    l((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            l(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeModal = (0, o.useCallback)((function() {
                    l((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.openToast = (0, o.useCallback)((function(e) {
                    var t = e.closeCallback;
                    m((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            m(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeToast = (0, o.useCallback)((function() {
                    m((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.openDrawer = (0, o.useCallback)((function(e) {
                    var t = e.closeCallback;
                    h((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            h(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeDrawer = (0, o.useCallback)((function() {
                    h((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.pushNotify = (0, o.useCallback)((function(e) {
                    var t = (0, c.uR)(8),
                        n = (0, r.__assign)((0, r.__assign)({}, e), {
                            uid: t,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), C((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== t
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return C((function(e) {
                        return (0, r.__spreadArray)((0, r.__spreadArray)([], e, !0), [n], !1)
                    })), n.uid
                }), []), _.closeNotify = (0, o.useCallback)((function(e) {
                    C((function(t) {
                        return t.map((function(t) {
                            return t.uid === e ? (0, r.__assign)((0, r.__assign)({}, t), {
                                willClose: !0
                            }) : t
                        }))
                    }))
                }), []), a().createElement(E.Provider, {
                    value: _
                }, t, d && a().createElement(b, (0, r.__assign)({}, d)), s && a().createElement(u, (0, r.__assign)({}, s)), v && a().createElement(y, (0, r.__assign)({}, v)), a().createElement(x, (0, r.__assign)({
                    notifies: w
                }, n)))
            }
        },
        mk7A: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("hTvQ"),
                c = n.n(i),
                s = n("hyZw"),
                l = n("qrIQ"),
                u = n("O94r"),
                f = n.n(u),
                d = n("Svbh"),
                m = n("fvKX"),
                p = n("eeEA");
            const v = function(e) {
                var t, n = e.visible,
                    o = e.inner,
                    i = e.maskClose,
                    u = void 0 === i || i,
                    v = e.needSEO,
                    h = e.enablePortal,
                    b = e.portalNode,
                    g = e.scrollFree,
                    y = e.wrapperProps,
                    w = e.onClose,
                    C = void 0 === w ? s.es : w,
                    _ = e.enableScrollSpace,
                    x = void 0 === _ || _,
                    E = (0, m.r)(),
                    k = E.prefixCls,
                    A = E.isRTL,
                    N = "".concat(k, "-mask"),
                    O = f()(N, ((t = {})["".concat(N, "-rtl")] = !!A, t["".concat(N, "-inner")] = !!o, t), e.className);
                a().useEffect((function() {
                    return l.lq || o || g || !(null === document || void 0 === document ? void 0 : document.body) ? s.es : (document.body.style.overflow = n ? "hidden" : "auto", document.body.classList.toggle("".concat(k, "-mask-body"), x && n && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(k, "-mask-body")))
                    })
                }), [n, o, g, k, x]);
                var T = a().useCallback((function(e) {
                    h || e.stopPropagation();
                    var t = e.target,
                        n = e.currentTarget,
                        r = l.lq ? t.id === n.id : t === n;
                    u && r && C()
                }), [C, u, h]);
                var D = a().createElement(d.A, {
                        className: O,
                        needSEO: v,
                        visible: n,
                        onClick: T,
                        children: e.children
                    }),
                    M = y ? a().createElement(p.Ay, (0, r.__assign)({}, y), D) : D;
                return !l.lq && h ? c().createPortal(M, b instanceof HTMLElement ? b : document.body) : M
            }
        },
        B8b3: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => p
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("O94r"),
                c = n.n(i),
                s = n("eeEA"),
                l = n("mk7A"),
                u = n("fvKX"),
                f = n("PbQz"),
                d = n("cZx9"),
                m = function(e) {
                    var t, n = e.children,
                        o = e.className,
                        i = e.responsive,
                        f = e.direction,
                        m = void 0 === f ? "bottom" : f,
                        p = e.modalSize,
                        v = void 0 === p ? "small" : p,
                        h = (0, r.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        b = (0, u.r)(),
                        g = b.prefixCls,
                        y = b.isMobile,
                        w = "".concat(g, "-modal"),
                        C = c()(w, o),
                        _ = c()("".concat(w, "-wrap"), ((t = {})["data-size-".concat(v)] = !!v, t));
                    if (i && y) return a().createElement(d.A, (0, r.__assign)({}, h, {
                        direction: m,
                        className: o,
                        children: n
                    }));
                    var x = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": h["aria-label"] || "modal"
                    };
                    return a().createElement(l.A, (0, r.__assign)({}, h, {
                        className: C
                    }), a().createElement(s.Ay, (0, r.__assign)({}, x, {
                        className: _,
                        children: n
                    })))
                };
            m.Header = f.Y9, m.Content = f.UC, m.Footer = f.wi;
            const p = m
        },
        PbQz: (e, t, n) => {
            "use strict";
            n.d(t, {
                UC: () => p,
                Y9: () => m,
                wi: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("I6V/"),
                c = n("X4b0"),
                s = n("hyZw"),
                l = n("O94r"),
                u = n.n(l),
                f = n("eeEA"),
                d = n("fvKX"),
                m = function(e) {
                    var t, n, o = e.showPre,
                        l = e.prev,
                        m = e.onPreClick,
                        p = void 0 === m ? s.es : m,
                        v = e.showNext,
                        h = e.next,
                        b = e.onNextClick,
                        g = void 0 === b ? s.es : b,
                        y = (0, r.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                        w = (0, d.r)().prefixCls,
                        C = "".concat(w, "-modal-header"),
                        _ = u()(C, ((t = {})["".concat(C, "-pre")] = !!o, t["".concat(C, "-pre-hidden")] = "hidden" === o, t), e.className);
                    return o && void 0 === l && (l = a().createElement(i.A, {
                        name: "ArrowLeftF",
                        color: "PrimaryText"
                    })), a().createElement(f.Ay, (0, r.__assign)({}, y, {
                        className: _
                    }), o ? a().createElement(f.Ay, {
                        className: u()("".concat(C, "-prev")),
                        onClick: p,
                        children: l,
                        role: "button",
                        "aria-label": "Previous"
                    }) : null, a().createElement(f.Ay, {
                        className: "".concat(C, "-main"),
                        children: e.children
                    }), v ? a().createElement(f.Ay, {
                        className: u()("".concat(C, "-next"), (n = {}, n["".concat(C, "-next-hidden")] = "hidden" === v, n)),
                        onClick: g,
                        children: h || a().createElement(c.A, {
                            name: "CloseF",
                            color: "PrimaryText"
                        }),
                        role: "button",
                        "aria-label": h ? "Next" : "Close"
                    }) : null)
                },
                p = function(e) {
                    var t = (0, d.r)().prefixCls,
                        n = "".concat(t, "-modal-content"),
                        o = u()(n, e.className);
                    return a().createElement(f.Ay, (0, r.__assign)({}, e, {
                        className: o
                    }))
                },
                v = function(e) {
                    var t, n = e.layout,
                        o = (0, r.__rest)(e, ["layout"]),
                        i = (0, d.r)().prefixCls,
                        c = "".concat(i, "-modal-footer"),
                        s = u()(c, ((t = {})["".concat(c, "-").concat(n)] = !!n, t), o.className);
                    return a().createElement(f.Ay, (0, r.__assign)({}, o, {
                        className: s
                    }))
                }
        },
        rbiW: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("X0Bn"),
                c = n("SR26"),
                s = n("zRna"),
                l = n("X4b0"),
                u = n("O94r"),
                f = n.n(u),
                d = n("eeEA"),
                m = n("fvKX"),
                p = {
                    error: a().createElement(i.A, {
                        name: "CircledCloseF",
                        color: "error"
                    }),
                    warn: a().createElement(c.A, {
                        name: "CircledWarningF",
                        color: "PrimaryYellow"
                    }),
                    success: a().createElement(s.A, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    }),
                    push: a().createElement(s.A, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    })
                };
            const v = function(e) {
                var t, n, i = e.variant,
                    c = void 0 === i ? "primary" : i,
                    s = e.sz,
                    u = void 0 === s ? "middle" : s,
                    v = e.icon,
                    h = e.title,
                    b = e.message,
                    g = e.closable,
                    y = e.onClose,
                    w = e.closeIcon,
                    C = e.minWidth,
                    _ = (0, r.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    x = (0, m.r)(),
                    E = x.prefixCls,
                    k = x.isRTL,
                    A = "".concat(E, "-notification"),
                    N = f()(A, ((t = {})["".concat(A, "-rtl")] = !!k, t["".concat(A, "__").concat(c)] = !!c, t["data-size-".concat(u)] = !!u, t["".concat(A, "-mw")] = !!C, t), e.className),
                    O = f()("".concat(A, "-content-message"), {
                        "data-push-message": "push" === c && !h
                    });
                if (!h && !b) return null;
                var T = !1 === v ? null : (0, o.isValidElement)(v) ? v : p[c],
                    D = (0, o.useMemo)((function() {
                        var e;
                        return g ? w ? a().cloneElement(w, {
                            color: "IconNormal",
                            className: f()("".concat(A, "-close"), null === (e = null === w || void 0 === w ? void 0 : w.props) || void 0 === e ? void 0 : e.className),
                            onClick: y
                        }) : a().createElement(l.A, {
                            name: "CloseF",
                            color: "IconNormal",
                            className: "".concat(A, "-close"),
                            onClick: y
                        }) : null
                    }), [A, y, w, g]);
                return a().createElement(d.Ay, (0, r.__assign)({}, _, {
                    className: N
                }), !!T && a().cloneElement(T, {
                    className: f()("".concat(A, "-prefix"), null === (n = null === T || void 0 === T ? void 0 : T.props) || void 0 === n ? void 0 : n.className)
                }), a().createElement(d.Ay, {
                    className: f()("".concat(A, "-content"), {
                        closable: g
                    })
                }, !!h && a().createElement(d.Ay, {
                    className: "".concat(A, "-content-title"),
                    children: h
                }), !!b && a().createElement(d.Ay, {
                    className: O,
                    children: b
                }), D))
            }
        },
        lEYW: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("nghm"),
                c = n("DzvH"),
                s = n("Y4uf");
            const l = function(e) {
                return a().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 25",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M19.357 4.687L9.301 14.743l-4.656-4.657-3.03 3.031L9.3 20.804 22.388 7.717l-3.03-3.03z",
                    fill: "currentColor"
                }))
            };
            var u = n("O94r"),
                f = n.n(u),
                d = n("eeEA"),
                m = n("fvKX"),
                p = function(e) {
                    var t, n = e.value,
                        s = e.checked,
                        u = e.disabled,
                        p = e.indeterminate,
                        v = e.defaultChecked,
                        h = e.variant,
                        b = void 0 === h ? "square" : h,
                        g = e.onChange,
                        y = e.sz,
                        w = void 0 === y ? "md" : y,
                        C = (0, r.__rest)(e, ["value", "checked", "disabled", "indeterminate", "defaultChecked", "variant", "onChange", "sz"]),
                        _ = (0, o.useCallback)((function(e) {
                            return g && g(n, e)
                        }), [g, n]),
                        x = (0, i.j)({
                            defaultChecked: v,
                            checked: s,
                            disabled: u,
                            onChange: _
                        }),
                        E = x.onChecked,
                        k = x.checked,
                        A = (0, m.r)(),
                        N = A.prefixCls,
                        O = A.isRTL,
                        T = "".concat(N, "-checkbox"),
                        D = f()(T, ((t = {})["".concat(T, "-rtl")] = O, t["".concat(T, "__").concat(b)] = !!b, t.disabled = !!u, t.checked = !!k, t["data-size-".concat(w)] = !!w, t), e.className),
                        M = p ? a().createElement(c.A, {
                            name: "MinusF",
                            color: "BasicBg"
                        }) : a().createElement(l, {
                            name: "CheckboxControl1C",
                            color: "BasicBg"
                        }),
                        P = {
                            role: "checkbox",
                            "aria-checked": k,
                            "aria-disabled": u,
                            tabIndex: u ? -1 : 0,
                            onKeyDown: function(e) {
                                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), E())
                            }
                        };
                    return a().createElement(d.Ay, (0, r.__assign)({}, P, C, {
                        onClick: E,
                        className: D
                    }), a().createElement(d.Ay, {
                        className: "".concat(T, "-icon"),
                        children: M
                    }), e.children)
                };
            p.__name = "Checkbox";
            const v = p
        },
        W2aP: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("O94r"),
                c = n.n(i),
                s = n("eeEA"),
                l = n("fvKX"),
                u = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                f = function(e) {
                    var t = (0, l.r)().prefixCls,
                        n = c()("".concat(t, "-spinner__nezha"), e.className);
                    return a().createElement(s.Ay, (0, r.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), a().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(1)
                    }), a().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(2)
                    }), a().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(3)
                    }), a().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(4)
                    }))
                };
            f.displayName = "Spinner";
            const d = f
        },
        JgEn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Je
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("qrIQ"),
                c = n("QFE7"),
                s = n("hyZw"),
                l = n("O94r"),
                u = n.n(l),
                f = n("eeEA"),
                d = n("SZ+q"),
                m = n("fvKX"),
                p = {
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
                v = 50,
                h = function(e) {
                    var t;
                    e.stopPropagation(), i.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                b = n("H2//"),
                g = "tooltip";

            function y(e, t, n) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": n,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function w(e, t, n) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: n ? 0 : -1
                }
            }

            function C(e, t, n) {
                void 0 === t && (t = g), void 0 === n && (n = !1);
                var r = (0, o.useMemo)((function() {
                    return "".concat(e, "-").concat((0, b.uR)(8))
                }), [e, t, n]);
                return {
                    triggerAriaProps: y(r, t, n),
                    contentAriaProps: w(r, t, n)
                }
            }
            var _ = function(e) {
                var t, n = e.open,
                    l = e.once,
                    b = e.arrow,
                    y = e.offset,
                    w = void 0 === y ? 12 : y,
                    _ = e.disabled,
                    x = e.tooltips,
                    E = e.variant,
                    k = void 0 === E ? "gray" : E,
                    A = e.placement,
                    N = void 0 === A ? "top" : A,
                    O = e.trigger,
                    T = void 0 === O ? "hover" : O,
                    D = e.onVisibleChange,
                    M = e.enablePortal,
                    P = e.portalNode,
                    S = e.bubbleClassName,
                    R = e.triggerClassName,
                    F = e.delay,
                    z = void 0 === F ? v : F,
                    L = e.enableClickBubble,
                    I = e.ariaRole,
                    B = void 0 === I ? g : I,
                    j = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    W = a().useState(n),
                    V = W[0],
                    H = W[1],
                    q = a().useRef(),
                    X = (0, m.r)(),
                    Z = X.prefixCls,
                    Y = X.isMobile,
                    U = X.isTablet,
                    K = X.isClient,
                    Q = X.isRTL,
                    J = !i.lq && !Y && !U;
                T = J ? T : "click";
                var $ = "".concat(Z, "-tooltips");
                a().useEffect((function() {
                    "undefined" !== typeof n && V !== !!n && H(!V)
                }), [n, V]);
                var G = (0, c.d)({
                        fn: D
                    }).debounceFn,
                    ee = (0, o.useCallback)((function(e) {
                        _ || H((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && G(n), t !== n ? n : t
                        }))
                    }), [_, G]),
                    te = (0, o.useMemo)((function() {
                        var e, t, n;
                        return "number" === typeof z ? {
                            enter: z,
                            leave: z,
                            click: z
                        } : {
                            enter: null !== (e = z.enter) && void 0 !== e ? e : v,
                            leave: null !== (t = z.leave) && void 0 !== t ? t : v,
                            click: null !== (n = z.click) && void 0 !== n ? n : v
                        }
                    }), [z]),
                    ne = (0, c.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    re = ne.debounceFn,
                    oe = ne.clearTimer,
                    ae = (0, c.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    ie = ae.debounceFn,
                    ce = ae.clearTimer,
                    se = (0, c.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    le = (0, o.useCallback)(se, [se]),
                    ue = (0, o.useCallback)((function() {
                        return se(!1)
                    }), [se]);
                a().useEffect((function() {
                    var e = q.current,
                        t = function() {
                            ce(), re(!0)
                        },
                        n = function() {
                            oe(), ie(!1)
                        };
                    if (!i.lq && e instanceof Element) {
                        if ("hover" === T) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", n, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", n, !0)
                            };
                        var r = function(e) {
                            if (!q.current.contains(e.target)) return se(!1)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                document.removeEventListener("click", r)
                            }
                    }
                    return s.es
                }), [T, re, ce, oe, ie, se]);
                var fe = "click" === T,
                    de = !_ && V,
                    me = l ? ue : void 0,
                    pe = !fe && !l || L ? void 0 : h,
                    ve = fe ? le : void 0,
                    he = u()("".concat($, "-wrap"), {
                        active: de
                    }, e.className),
                    be = u()("".concat($, "-ele"), ((t = {})["".concat($, "-ele-rtl")] = !!Q, t), R),
                    ge = u()($, {
                        active: de
                    }, S),
                    ye = Q && p[N] || N,
                    we = (0, r.__assign)({
                        arrow: b,
                        offset: w,
                        variant: k,
                        placement: ye,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: M,
                        portalNode: P
                    }, j);
                "gray" === k && (we = (0, r.__assign)((0, r.__assign)({}, we), {
                    shadow: !1
                }));
                var Ce = K && !_,
                    _e = C($, B, Ce),
                    xe = _e.triggerAriaProps,
                    Ee = _e.contentAriaProps;
                return a().createElement(f.Ay, {
                    ref: q,
                    onClick: pe,
                    className: he
                }, a().createElement(f.Ay, (0, r.__assign)({}, xe, {
                    className: be,
                    onClick: ve,
                    children: e.children
                })), Ce ? a().createElement(d.A, (0, r.__assign)({}, Ee, we, {
                    className: ge,
                    onClick: me,
                    children: x
                })) : null)
            };
            _.displayName = "Tooltips";
            const x = _;
            var E = n("hTvQ"),
                k = n.n(E),
                A = n("W3Ja");

            function N(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function O(e) {
                return e instanceof N(e).Element || e instanceof Element
            }

            function T(e) {
                return e instanceof N(e).HTMLElement || e instanceof HTMLElement
            }

            function D(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof N(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var M = Math.max,
                P = Math.min,
                S = Math.round;

            function R() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function F() {
                return !/^((?!chrome|android).)*safari/i.test(R())
            }

            function z(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    o = 1,
                    a = 1;
                t && T(e) && (o = e.offsetWidth > 0 && S(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && S(r.height) / e.offsetHeight || 1);
                var i = (O(e) ? N(e) : window).visualViewport,
                    c = !F() && n,
                    s = (r.left + (c && i ? i.offsetLeft : 0)) / o,
                    l = (r.top + (c && i ? i.offsetTop : 0)) / a,
                    u = r.width / o,
                    f = r.height / a;
                return {
                    width: u,
                    height: f,
                    top: l,
                    right: s + u,
                    bottom: l + f,
                    left: s,
                    x: s,
                    y: l
                }
            }

            function L(e) {
                var t = N(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function I(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function B(e) {
                return ((O(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function j(e) {
                return z(B(e)).left + L(e).scrollLeft
            }

            function W(e) {
                return N(e).getComputedStyle(e)
            }

            function V(e) {
                var t = W(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function H(e, t, n) {
                void 0 === n && (n = !1);
                var r = T(t),
                    o = T(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = S(t.width) / e.offsetWidth || 1,
                            r = S(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    a = B(t),
                    i = z(e, o, n),
                    c = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    s = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== I(t) || V(a)) && (c = function(e) {
                    return e !== N(e) && T(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : L(e);
                    var t
                }(t)), T(t) ? ((s = z(t, !0)).x += t.clientLeft, s.y += t.clientTop) : a && (s.x = j(a))), {
                    x: i.left + c.scrollLeft - s.x,
                    y: i.top + c.scrollTop - s.y,
                    width: i.width,
                    height: i.height
                }
            }

            function q(e) {
                var t = z(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function X(e) {
                return "html" === I(e) ? e : e.assignedSlot || e.parentNode || (D(e) ? e.host : null) || B(e)
            }

            function Z(e) {
                return ["html", "body", "#document"].indexOf(I(e)) >= 0 ? e.ownerDocument.body : T(e) && V(e) ? e : Z(X(e))
            }

            function Y(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = Z(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = N(r),
                    i = o ? [a].concat(a.visualViewport || [], V(r) ? r : []) : r,
                    c = t.concat(i);
                return o ? c : c.concat(Y(X(i)))
            }

            function U(e) {
                return ["table", "td", "th"].indexOf(I(e)) >= 0
            }

            function K(e) {
                return T(e) && "fixed" !== W(e).position ? e.offsetParent : null
            }

            function Q(e) {
                for (var t = N(e), n = K(e); n && U(n) && "static" === W(n).position;) n = K(n);
                return n && ("html" === I(n) || "body" === I(n) && "static" === W(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(R());
                    if (/Trident/i.test(R()) && T(e) && "fixed" === W(e).position) return null;
                    var n = X(e);
                    for (D(n) && (n = n.host); T(n) && ["html", "body"].indexOf(I(n)) < 0;) {
                        var r = W(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var J = "top",
                $ = "bottom",
                G = "right",
                ee = "left",
                te = "auto",
                ne = [J, $, G, ee],
                re = "start",
                oe = "end",
                ae = "viewport",
                ie = "popper",
                ce = ne.reduce((function(e, t) {
                    return e.concat([t + "-" + re, t + "-" + oe])
                }), []),
                se = [].concat(ne, [te]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + re, t + "-" + oe])
                }), []),
                le = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function ue(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function fe(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var de = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function me() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function pe(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    a = void 0 === o ? de : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, de, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        i = [],
                        c = !1,
                        s = {
                            state: o,
                            setOptions: function(n) {
                                var c = "function" === typeof n ? n(o.options) : n;
                                l(), o.options = Object.assign({}, a, o.options, c), o.scrollParents = {
                                    reference: O(e) ? Y(e) : e.contextElement ? Y(e.contextElement) : [],
                                    popper: Y(t)
                                };
                                var u = function(e) {
                                    var t = ue(e);
                                    return le.reduce((function(e, n) {
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
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = u.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        a = e.effect;
                                    if ("function" === typeof a) {
                                        var c = a({
                                                state: o,
                                                name: t,
                                                instance: s,
                                                options: r
                                            }),
                                            l = function() {};
                                        i.push(c || l)
                                    }
                                })), s.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (me(t, n)) {
                                        o.rects = {
                                            reference: H(t, Q(n), "fixed" === o.options.strategy),
                                            popper: q(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var a = o.orderedModifiers[r],
                                                    i = a.fn,
                                                    l = a.options,
                                                    u = void 0 === l ? {} : l,
                                                    f = a.name;
                                                "function" === typeof i && (o = i({
                                                    state: o,
                                                    options: u,
                                                    name: f,
                                                    instance: s
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: fe((function() {
                                return new Promise((function(e) {
                                    s.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                l(), c = !0
                            }
                        };
                    if (!me(e, t)) return s;

                    function l() {
                        i.forEach((function(e) {
                            return e()
                        })), i = []
                    }
                    return s.setOptions(n).then((function(e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), s
                }
            }
            var ve = {
                passive: !0
            };

            function he(e) {
                return e.split("-")[0]
            }

            function be(e) {
                return e.split("-")[1]
            }

            function ge(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function ye(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    a = o ? he(o) : null,
                    i = o ? be(o) : null,
                    c = n.x + n.width / 2 - r.width / 2,
                    s = n.y + n.height / 2 - r.height / 2;
                switch (a) {
                    case J:
                        t = {
                            x: c,
                            y: n.y - r.height
                        };
                        break;
                    case $:
                        t = {
                            x: c,
                            y: n.y + n.height
                        };
                        break;
                    case G:
                        t = {
                            x: n.x + n.width,
                            y: s
                        };
                        break;
                    case ee:
                        t = {
                            x: n.x - r.width,
                            y: s
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = a ? ge(a) : null;
                if (null != l) {
                    var u = "y" === l ? "height" : "width";
                    switch (i) {
                        case re:
                            t[l] = t[l] - (n[u] / 2 - r[u] / 2);
                            break;
                        case oe:
                            t[l] = t[l] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var we = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function Ce(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.variation,
                    i = e.offsets,
                    c = e.position,
                    s = e.gpuAcceleration,
                    l = e.adaptive,
                    u = e.roundOffsets,
                    f = e.isFixed,
                    d = i.x,
                    m = void 0 === d ? 0 : d,
                    p = i.y,
                    v = void 0 === p ? 0 : p,
                    h = "function" === typeof u ? u({
                        x: m,
                        y: v
                    }) : {
                        x: m,
                        y: v
                    };
                m = h.x, v = h.y;
                var b = i.hasOwnProperty("x"),
                    g = i.hasOwnProperty("y"),
                    y = ee,
                    w = J,
                    C = window;
                if (l) {
                    var _ = Q(n),
                        x = "clientHeight",
                        E = "clientWidth";
                    if (_ === N(n) && "static" !== W(_ = B(n)).position && "absolute" === c && (x = "scrollHeight", E = "scrollWidth"), o === J || (o === ee || o === G) && a === oe) w = $, v -= (f && _ === C && C.visualViewport ? C.visualViewport.height : _[x]) - r.height, v *= s ? 1 : -1;
                    if (o === ee || (o === J || o === $) && a === oe) y = G, m -= (f && _ === C && C.visualViewport ? C.visualViewport.width : _[E]) - r.width, m *= s ? 1 : -1
                }
                var k, A = Object.assign({
                        position: c
                    }, l && we),
                    O = !0 === u ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: S(n * o) / o || 0,
                            y: S(r * o) / o || 0
                        }
                    }({
                        x: m,
                        y: v
                    }, N(n)) : {
                        x: m,
                        y: v
                    };
                return m = O.x, v = O.y, s ? Object.assign({}, A, ((k = {})[w] = g ? "0" : "", k[y] = b ? "0" : "", k.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", k)) : Object.assign({}, A, ((t = {})[w] = g ? v + "px" : "", t[y] = b ? m + "px" : "", t.transform = "", t))
            }
            const _e = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.offset,
                        a = void 0 === o ? [0, 0] : o,
                        i = se.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = he(e),
                                    o = [ee, J].indexOf(r) >= 0 ? -1 : 1,
                                    a = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    i = a[0],
                                    c = a[1];
                                return i = i || 0, c = (c || 0) * o, [ee, G].indexOf(r) >= 0 ? {
                                    x: c,
                                    y: i
                                } : {
                                    x: i,
                                    y: c
                                }
                            }(n, t.rects, a), e
                        }), {}),
                        c = i[t.placement],
                        s = c.x,
                        l = c.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = i
                }
            };
            var xe = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return xe[e]
                }))
            }
            var ke = {
                start: "end",
                end: "start"
            };

            function Ae(e) {
                return e.replace(/start|end/g, (function(e) {
                    return ke[e]
                }))
            }

            function Ne(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && D(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Te(e, t, n) {
                return t === ae ? Oe(function(e, t) {
                    var n = N(e),
                        r = B(e),
                        o = n.visualViewport,
                        a = r.clientWidth,
                        i = r.clientHeight,
                        c = 0,
                        s = 0;
                    if (o) {
                        a = o.width, i = o.height;
                        var l = F();
                        (l || !l && "fixed" === t) && (c = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: i,
                        x: c + j(e),
                        y: s
                    }
                }(e, n)) : O(t) ? function(e, t) {
                    var n = z(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : Oe(function(e) {
                    var t, n = B(e),
                        r = L(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        a = M(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        i = M(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        c = -r.scrollLeft + j(e),
                        s = -r.scrollTop;
                    return "rtl" === W(o || n).direction && (c += M(n.clientWidth, o ? o.clientWidth : 0) - a), {
                        width: a,
                        height: i,
                        x: c,
                        y: s
                    }
                }(B(e)))
            }

            function De(e, t, n, r) {
                var o = "clippingParents" === t ? function(e) {
                        var t = Y(X(e)),
                            n = ["absolute", "fixed"].indexOf(W(e).position) >= 0 && T(e) ? Q(e) : e;
                        return O(n) ? t.filter((function(e) {
                            return O(e) && Ne(e, n) && "body" !== I(e)
                        })) : []
                    }(e) : [].concat(t),
                    a = [].concat(o, [n]),
                    i = a[0],
                    c = a.reduce((function(t, n) {
                        var o = Te(e, n, r);
                        return t.top = M(o.top, t.top), t.right = P(o.right, t.right), t.bottom = P(o.bottom, t.bottom), t.left = M(o.left, t.left), t
                    }), Te(e, i, r));
                return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
            }

            function Me(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function Pe(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function Se(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    a = n.strategy,
                    i = void 0 === a ? e.strategy : a,
                    c = n.boundary,
                    s = void 0 === c ? "clippingParents" : c,
                    l = n.rootBoundary,
                    u = void 0 === l ? ae : l,
                    f = n.elementContext,
                    d = void 0 === f ? ie : f,
                    m = n.altBoundary,
                    p = void 0 !== m && m,
                    v = n.padding,
                    h = void 0 === v ? 0 : v,
                    b = Me("number" !== typeof h ? h : Pe(h, ne)),
                    g = d === ie ? "reference" : ie,
                    y = e.rects.popper,
                    w = e.elements[p ? g : d],
                    C = De(O(w) ? w : w.contextElement || B(e.elements.popper), s, u, i),
                    _ = z(e.elements.reference),
                    x = ye({
                        reference: _,
                        element: y,
                        strategy: "absolute",
                        placement: o
                    }),
                    E = Oe(Object.assign({}, y, x)),
                    k = d === ie ? E : _,
                    A = {
                        top: C.top - k.top + b.top,
                        bottom: k.bottom - C.bottom + b.bottom,
                        left: C.left - k.left + b.left,
                        right: k.right - C.right + b.right
                    },
                    N = e.modifiersData.offset;
                if (d === ie && N) {
                    var T = N[o];
                    Object.keys(A).forEach((function(e) {
                        var t = [G, $].indexOf(e) >= 0 ? 1 : -1,
                            n = [J, $].indexOf(e) >= 0 ? "y" : "x";
                        A[e] += T[n] * t
                    }))
                }
                return A
            }

            function Re(e, t, n) {
                return M(e, P(t, n))
            }
            const Fe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.mainAxis,
                        a = void 0 === o || o,
                        i = n.altAxis,
                        c = void 0 !== i && i,
                        s = n.boundary,
                        l = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        m = void 0 === d || d,
                        p = n.tetherOffset,
                        v = void 0 === p ? 0 : p,
                        h = Se(t, {
                            boundary: s,
                            rootBoundary: l,
                            padding: f,
                            altBoundary: u
                        }),
                        b = he(t.placement),
                        g = be(t.placement),
                        y = !g,
                        w = ge(b),
                        C = "x" === w ? "y" : "x",
                        _ = t.modifiersData.popperOffsets,
                        x = t.rects.reference,
                        E = t.rects.popper,
                        k = "function" === typeof v ? v(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : v,
                        A = "number" === typeof k ? {
                            mainAxis: k,
                            altAxis: k
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, k),
                        N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        O = {
                            x: 0,
                            y: 0
                        };
                    if (_) {
                        if (a) {
                            var T, D = "y" === w ? J : ee,
                                S = "y" === w ? $ : G,
                                R = "y" === w ? "height" : "width",
                                F = _[w],
                                z = F + h[D],
                                L = F - h[S],
                                I = m ? -E[R] / 2 : 0,
                                B = g === re ? x[R] : E[R],
                                j = g === re ? -E[R] : -x[R],
                                W = t.elements.arrow,
                                V = m && W ? q(W) : {
                                    width: 0,
                                    height: 0
                                },
                                H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                X = H[D],
                                Z = H[S],
                                Y = Re(0, x[R], V[R]),
                                U = y ? x[R] / 2 - I - Y - X - A.mainAxis : B - Y - X - A.mainAxis,
                                K = y ? -x[R] / 2 + I + Y + Z + A.mainAxis : j + Y + Z + A.mainAxis,
                                te = t.elements.arrow && Q(t.elements.arrow),
                                ne = te ? "y" === w ? te.clientTop || 0 : te.clientLeft || 0 : 0,
                                oe = null != (T = null == N ? void 0 : N[w]) ? T : 0,
                                ae = F + K - oe,
                                ie = Re(m ? P(z, F + U - oe - ne) : z, F, m ? M(L, ae) : L);
                            _[w] = ie, O[w] = ie - F
                        }
                        if (c) {
                            var ce, se = "x" === w ? J : ee,
                                le = "x" === w ? $ : G,
                                ue = _[C],
                                fe = "y" === C ? "height" : "width",
                                de = ue + h[se],
                                me = ue - h[le],
                                pe = -1 !== [J, ee].indexOf(b),
                                ve = null != (ce = null == N ? void 0 : N[C]) ? ce : 0,
                                ye = pe ? de : ue - x[fe] - E[fe] - ve + A.altAxis,
                                we = pe ? ue + x[fe] + E[fe] - ve - A.altAxis : me,
                                Ce = m && pe ? function(e, t, n) {
                                    var r = Re(e, t, n);
                                    return r > n ? n : r
                                }(ye, ue, we) : Re(m ? ye : de, ue, m ? we : me);
                            _[C] = Ce, O[C] = Ce - ue
                        }
                        t.modifiersData[r] = O
                    }
                },
                requiresIfExists: ["offset"]
            };
            const ze = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        o = e.options,
                        a = n.elements.arrow,
                        i = n.modifiersData.popperOffsets,
                        c = he(n.placement),
                        s = ge(c),
                        l = [ee, G].indexOf(c) >= 0 ? "height" : "width";
                    if (a && i) {
                        var u = function(e, t) {
                                return Me("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : Pe(e, ne))
                            }(o.padding, n),
                            f = q(a),
                            d = "y" === s ? J : ee,
                            m = "y" === s ? $ : G,
                            p = n.rects.reference[l] + n.rects.reference[s] - i[s] - n.rects.popper[l],
                            v = i[s] - n.rects.reference[s],
                            h = Q(a),
                            b = h ? "y" === s ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                            g = p / 2 - v / 2,
                            y = u[d],
                            w = b - f[l] - u[m],
                            C = b / 2 - f[l] / 2 + g,
                            _ = Re(y, C, w),
                            x = s;
                        n.modifiersData[r] = ((t = {})[x] = _, t.centerOffset = _ - C, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && Ne(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function Le(e, t, n) {
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

            function Ie(e) {
                return [J, G, $, ee].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var Be = pe({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                o = r.scroll,
                                a = void 0 === o || o,
                                i = r.resize,
                                c = void 0 === i || i,
                                s = N(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && l.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, ve)
                                })), c && s.addEventListener("resize", n.update, ve),
                                function() {
                                    a && l.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, ve)
                                    })), c && s.removeEventListener("resize", n.update, ve)
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
                            t.modifiersData[n] = ye({
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
                                o = void 0 === r || r,
                                a = n.adaptive,
                                i = void 0 === a || a,
                                c = n.roundOffsets,
                                s = void 0 === c || c,
                                l = {
                                    placement: he(t.placement),
                                    variation: be(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ce(Object.assign({}, l, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: s
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ce(Object.assign({}, l, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: s
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
                                    o = t.elements[e];
                                T(o) && I(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
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
                                            o = t.attributes[e] || {},
                                            a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        T(r) && I(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, _e, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, c = void 0 === i || i, s = n.fallbackPlacements, l = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, m = n.flipVariations, p = void 0 === m || m, v = n.allowedAutoPlacements, h = t.options.placement, b = he(h), g = s || (b === h || !p ? [Ee(h)] : function(e) {
                                        if (he(e) === te) return [];
                                        var t = Ee(e);
                                        return [Ae(e), t, Ae(t)]
                                    }(h)), y = [h].concat(g).reduce((function(e, n) {
                                        return e.concat(he(n) === te ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                a = n.rootBoundary,
                                                i = n.padding,
                                                c = n.flipVariations,
                                                s = n.allowedAutoPlacements,
                                                l = void 0 === s ? se : s,
                                                u = be(r),
                                                f = u ? c ? ce : ce.filter((function(e) {
                                                    return be(e) === u
                                                })) : ne,
                                                d = f.filter((function(e) {
                                                    return l.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var m = d.reduce((function(t, n) {
                                                return t[n] = Se(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: a,
                                                    padding: i
                                                })[he(n)], t
                                            }), {});
                                            return Object.keys(m).sort((function(e, t) {
                                                return m[e] - m[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: f,
                                            padding: l,
                                            flipVariations: p,
                                            allowedAutoPlacements: v
                                        }) : n)
                                    }), []), w = t.rects.reference, C = t.rects.popper, _ = new Map, x = !0, E = y[0], k = 0; k < y.length; k++) {
                                    var A = y[k],
                                        N = he(A),
                                        O = be(A) === re,
                                        T = [J, $].indexOf(N) >= 0,
                                        D = T ? "width" : "height",
                                        M = Se(t, {
                                            placement: A,
                                            boundary: u,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: l
                                        }),
                                        P = T ? O ? G : ee : O ? $ : J;
                                    w[D] > C[D] && (P = Ee(P));
                                    var S = Ee(P),
                                        R = [];
                                    if (a && R.push(M[N] <= 0), c && R.push(M[P] <= 0, M[S] <= 0), R.every((function(e) {
                                            return e
                                        }))) {
                                        E = A, x = !1;
                                        break
                                    }
                                    _.set(A, R)
                                }
                                if (x)
                                    for (var F = function(e) {
                                            var t = y.find((function(t) {
                                                var n = _.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return E = t, "break"
                                        }, z = p ? 3 : 1; z > 0; z--) {
                                        if ("break" === F(z)) break
                                    }
                                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, Fe, ze, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                a = t.modifiersData.preventOverflow,
                                i = Se(t, {
                                    elementContext: "reference"
                                }),
                                c = Se(t, {
                                    altBoundary: !0
                                }),
                                s = Le(i, r),
                                l = Le(c, o, a),
                                u = Ie(s),
                                f = Ie(l);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: s,
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
                je = n("F0GY"),
                We = n.n(je),
                Ve = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                He = window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
                qe = [],
                Xe = (0, o.forwardRef)((function(e, t) {
                    var n, o = e.arrow,
                        c = e.shadow,
                        s = e.variant,
                        l = void 0 === s ? "primary" : s,
                        d = (e.placement, e.style),
                        p = e.radius,
                        v = e.arrowRef,
                        h = e.arrowStyle,
                        b = e.bubbleFontSize,
                        g = void 0 === b ? 14 : b,
                        y = (0, r.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        w = (0, m.r)().prefixCls,
                        C = "".concat(w, "-bubble"),
                        _ = u()(C, "".concat(C, "-web"), ((n = {})["".concat(C, "__").concat(l)] = !!l, n["data-font-".concat(g)] = !!g, n["web-shadow"] = !!c, n), e.className),
                        x = {
                            borderRadius: p
                        };
                    if (i.lq) throw new Error("this component only use Web side");
                    return a().createElement(f.Ay, (0, r.__assign)({}, y, {
                        className: _,
                        style: d,
                        ref: t
                    }), a().createElement(f.Ay, {
                        style: x,
                        className: "".concat(C, "-content"),
                        children: e.children
                    }), !!o && a().createElement(f.Ay, {
                        className: "".concat(C, "-web-arrow"),
                        style: h,
                        ref: v,
                        "data-popper-arrow": !0
                    }))
                }));
            Xe.displayName = "Bubble";
            const Ze = Xe;
            var Ye = n("Svbh"),
                Ue = function(e) {
                    var t, n = e.open,
                        s = e.once,
                        l = e.arrow,
                        d = e.offset,
                        b = void 0 === d ? 12 : d,
                        y = e.disabled,
                        w = e.tooltips,
                        _ = e.variant,
                        x = void 0 === _ ? "gray" : _,
                        N = e.placement,
                        O = void 0 === N ? "top" : N,
                        T = e.trigger,
                        D = void 0 === T ? "hover" : T,
                        M = e.onVisibleChange,
                        P = e.enablePortal,
                        S = e.portalNode,
                        R = e.reactPopperProps,
                        F = void 0 === R ? {} : R,
                        z = F.sameWidth,
                        L = F.popperWidth,
                        I = F.offsetX,
                        B = F.screenPadding,
                        j = e.bubbleClassName,
                        W = e.bubbleWrapperClz,
                        V = e.triggerClassName,
                        H = e.enableHoverSafeArea,
                        q = e.delay,
                        X = void 0 === q ? v : q,
                        Z = e.enableClickBubble,
                        Y = e.ariaRole,
                        U = void 0 === Y ? g : Y,
                        K = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        Q = (0, o.useState)(n),
                        J = Q[0],
                        $ = Q[1],
                        G = (0, o.useState)(null),
                        ee = G[0],
                        te = G[1],
                        ne = (0, m.r)(),
                        re = ne.prefixCls,
                        oe = ne.isMobile,
                        ae = ne.isTablet,
                        ie = ne.isRTL,
                        ce = ne.isClient,
                        se = (0, o.useState)(null),
                        le = se[0],
                        ue = se[1],
                        fe = (0, o.useState)(null),
                        de = fe[0],
                        me = fe[1],
                        pe = (0, o.useState)(null),
                        ve = pe[0],
                        he = pe[1],
                        be = (0, o.useState)(""),
                        ge = be[0],
                        ye = be[1],
                        we = !i.lq && !oe && !ae,
                        Ce = "".concat(re, "-tooltips"),
                        _e = u()("".concat(re, "-tooltips-trans"), W),
                        xe = u()("".concat(Ce, "-ele"), ((t = {})["".concat(Ce, "-ele-rtl")] = !!ie, t["".concat(Ce, "-ele-with-safe-area")] = !!H && "hover" === D, t), V),
                        Ee = u()(Ce, {
                            active: J
                        }, j),
                        ke = u()("".concat(Ce, "-wrap"), "".concat(Ce, "-web"), {
                            active: !y && J
                        }, K.className);
                    D = we ? D : "click";
                    var Ae = ie && p[O] || O;
                    if (i.lq) throw new Error("this component only use Web side");
                    var Ne = (0, c.d)({
                            fn: M
                        }).debounceFn,
                        Oe = (0, o.useCallback)((function(e) {
                            y || $((function(t) {
                                var n = "boolean" === typeof e ? e : !t;
                                return t !== n && (null === Ne || void 0 === Ne || Ne(n)), t !== n ? n : t
                            }))
                        }), [y, Ne]),
                        Te = (0, o.useMemo)((function() {
                            var e, t, n;
                            return "number" === typeof X ? {
                                enter: X,
                                leave: X,
                                click: X
                            } : {
                                enter: null !== (e = X.enter) && void 0 !== e ? e : v,
                                leave: null !== (t = X.leave) && void 0 !== t ? t : v,
                                click: null !== (n = X.click) && void 0 !== n ? n : v
                            }
                        }), [X]),
                        De = (0, c.d)({
                            fn: Oe,
                            time: Te.enter
                        }),
                        Me = De.debounceFn,
                        Pe = De.clearTimer,
                        Se = (0, c.d)({
                            fn: Oe,
                            time: Te.leave
                        }),
                        Re = Se.debounceFn,
                        Fe = Se.clearTimer,
                        ze = (0, c.d)({
                            fn: Oe,
                            time: Te.click
                        }).debounceFn,
                        Le = (0, o.useCallback)((function(e) {
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = null === le || void 0 === le ? void 0 : le.contains(e.target);
                            !(!s && t || n) && J && ze(!1)
                        }), [ze, le, de, s, J]);
                    b = l ? Math.max(b, 4) : b;
                    var Ie = a().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = t.placement,
                                        r = t.elements,
                                        o = t.rects,
                                        a = r.arrow,
                                        i = r.reference;
                                    if (a && i) {
                                        var c = (["top", "bottom"].includes(n.split("-")[0]) ? o.reference.width : o.reference.height) / 2 - 3,
                                            s = Math.abs(t.modifiersData.arrow.centerOffset),
                                            l = Math.abs(s) > c;
                                        a && (l ? a.setAttribute("data-hide", "") : a.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        je = [{
                            name: "arrow",
                            options: {
                                element: ve,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [I || 0, b]
                            }
                        }, Ie],
                        Xe = a().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(L || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(L || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [L]),
                        Ue = a().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: B
                                }
                            }
                        }), [B]);
                    (L || z) && je.push(Xe), B && je.push(Ue);
                    var Ke = function(e, t, n) {
                            void 0 === n && (n = {});
                            var r = o.useRef(null),
                                a = {
                                    onFirstUpdate: n.onFirstUpdate,
                                    placement: n.placement || "bottom",
                                    strategy: n.strategy || "absolute",
                                    modifiers: n.modifiers || qe
                                },
                                i = o.useState({
                                    styles: {
                                        popper: {
                                            position: a.strategy,
                                            left: "0",
                                            top: "0"
                                        },
                                        arrow: {
                                            position: "absolute"
                                        }
                                    },
                                    attributes: {}
                                }),
                                c = i[0],
                                s = i[1],
                                l = o.useMemo((function() {
                                    return {
                                        name: "updateState",
                                        enabled: !0,
                                        phase: "write",
                                        fn: function(e) {
                                            var t = e.state,
                                                n = Object.keys(t.elements);
                                            E.flushSync((function() {
                                                s({
                                                    styles: Ve(n.map((function(e) {
                                                        return [e, t.styles[e] || {}]
                                                    }))),
                                                    attributes: Ve(n.map((function(e) {
                                                        return [e, t.attributes[e]]
                                                    })))
                                                })
                                            }))
                                        },
                                        requires: ["computeStyles"]
                                    }
                                }), []),
                                u = o.useMemo((function() {
                                    var e = {
                                        onFirstUpdate: a.onFirstUpdate,
                                        placement: a.placement,
                                        strategy: a.strategy,
                                        modifiers: [].concat(a.modifiers, [l, {
                                            name: "applyStyles",
                                            enabled: !1
                                        }])
                                    };
                                    return We()(r.current, e) ? r.current || e : (r.current = e, e)
                                }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, l]),
                                f = o.useRef();
                            return He((function() {
                                f.current && f.current.setOptions(u)
                            }), [u]), He((function() {
                                if (null != e && null != t) {
                                    var r = (n.createPopper || Be)(e, t, u);
                                    return f.current = r,
                                        function() {
                                            r.destroy(), f.current = null
                                        }
                                }
                            }), [e, t, n.createPopper]), {
                                state: f.current ? f.current.state : null,
                                styles: c.styles,
                                attributes: c.attributes,
                                update: f.current ? f.current.update : null,
                                forceUpdate: f.current ? f.current.forceUpdate : null
                            }
                        }(le, de, {
                            placement: Ae,
                            strategy: "fixed",
                            modifiers: je
                        }),
                        Qe = Ke.styles,
                        Je = Ke.attributes,
                        $e = Ke.update,
                        Ge = (0, o.useCallback)((function(e) {
                            !Z && h(e);
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = !s && t;
                            t && $e && $e(), n || ze(e)
                        }), [s, de, ze, $e, Z]),
                        et = (0, o.useCallback)((function(e) {
                            if (de && le) {
                                var t, n, r, o = de.getBoundingClientRect(),
                                    a = le.getBoundingClientRect(),
                                    i = e.clientX - a.left,
                                    c = e.clientY - a.top,
                                    s = {
                                        top: o.top - a.top,
                                        bottom: o.bottom - a.top,
                                        left: o.left - a.left,
                                        right: o.right - a.left
                                    };
                                switch (Ae.split("-")[0]) {
                                    case "left":
                                        i = Math.min(i + 4, a.width);
                                        var l = s.top + (i - s.right) * (0 - s.top) / (a.width - s.right),
                                            u = s.bottom + (i - s.right) * (a.height - s.bottom) / (a.width - s.right);
                                        c = Math.min(Math.max(c, l), u), t = "".concat(i, ",").concat(c), n = "".concat(s.right, ",").concat(s.top - 2), r = "".concat(s.right, ",").concat(s.bottom + 2);
                                        break;
                                    case "right":
                                        i = Math.max(i - 4, 0);
                                        var f = s.top + (i - s.left) * (0 - s.top) / (0 - s.left),
                                            d = s.bottom + (i - s.left) * (a.height - s.bottom) / (0 - s.left);
                                        c = Math.min(Math.max(c, f), d), t = "".concat(i, ",").concat(c), n = "".concat(s.left, ",").concat(s.top - 2), r = "".concat(s.left, ",").concat(s.bottom + 2);
                                        break;
                                    case "top":
                                        c = Math.min(c + 4, a.height);
                                        var m = s.left + (c - s.bottom) * (0 - s.left) / (a.height - s.bottom),
                                            p = s.right + (c - s.bottom) * (a.width - s.right) / (a.height - s.bottom);
                                        i = Math.min(Math.max(i, m), p), t = "".concat(i, ",").concat(c), n = "".concat(s.left, ",").concat(s.bottom), r = "".concat(s.right, ",").concat(s.bottom);
                                        break;
                                    default:
                                        c = Math.max(c - 4, 0);
                                        var v = s.left + (c - s.top) * (0 - s.left) / (0 - s.top),
                                            h = s.right + (c - s.top) * (a.width - s.right) / (0 - s.top);
                                        i = Math.min(Math.max(i, v), h), t = "".concat(i, ",").concat(c), n = "".concat(s.left, ",").concat(s.top), r = "".concat(s.right, ",").concat(s.top)
                                }
                                ye("".concat(t, " ").concat(n, " ").concat(r))
                            }
                        }), [de, le, Ae]);
                    (0, o.useEffect)((function() {
                        return document.addEventListener("click", Le),
                            function() {
                                document.removeEventListener("click", Le)
                            }
                    }), [Le]), (0, o.useEffect)((function() {
                        "undefined" !== typeof n && !!n !== J && $(n)
                    }), [n, J]), (0, o.useEffect)((function() {
                        S instanceof HTMLElement ? te(S) : te(document.body)
                    }), [S]), (0, A.op)((function() {
                        null === $e || void 0 === $e || $e()
                    }), [w, $e]);
                    var tt = "hover" === D ? {
                            onMouseEnter: function() {
                                Fe(), Me(!0)
                            },
                            onMouseLeave: function() {
                                Pe(), Re(!1)
                            },
                            onMouseMove: H ? et : void 0
                        } : {
                            onClick: Ge
                        },
                        nt = (0, r.__assign)({
                            arrow: l,
                            variant: x,
                            shadow: !0
                        }, K);
                    "gray" === x && (nt = (0, r.__assign)((0, r.__assign)({}, nt), {
                        shadow: !1
                    }));
                    var rt = !y && J,
                        ot = C(Ce, U, rt),
                        at = ot.triggerAriaProps,
                        it = ot.contentAriaProps,
                        ct = a().createElement(Ye.A, {
                            visible: rt,
                            className: _e
                        }, a().createElement(Ze, (0, r.__assign)({}, it, nt, {
                            className: Ee,
                            ref: me,
                            arrowRef: he,
                            arrowStyle: Qe.arrow,
                            style: (0, r.__assign)((0, r.__assign)({}, Qe.popper), null === K || void 0 === K ? void 0 : K.style)
                        }, Je.popper, {
                            children: w
                        })));
                    return a().createElement(f.Ay, (0, r.__assign)({
                        ref: ue
                    }, tt, {
                        className: ke
                    }), H && "hover" === D && J && a().createElement("svg", {
                        className: "".concat(Ce, "-safety-triangle"),
                        pointerEvents: "none"
                    }, a().createElement("polygon", {
                        pointerEvents: "auto",
                        points: ge
                    })), a().createElement(f.Ay, (0, r.__assign)({}, at, {
                        className: xe,
                        children: K.children
                    })), ce && P && null !== ee ? k().createPortal(ct, ee) : ct)
                };
            Ue.displayName = "Tooltips";
            const Ke = Ue;
            var Qe = function(e) {
                var t = e.useReactPopper,
                    n = e.reactPopperProps,
                    o = e.enableHoverSafeArea,
                    c = e.bubbleWrapperClz,
                    s = (0, r.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !i.lq && t ? a().createElement(Ke, (0, r.__assign)({
                    reactPopperProps: n,
                    enableHoverSafeArea: o,
                    bubbleWrapperClz: c
                }, s)) : a().createElement(x, (0, r.__assign)({}, s))
            };
            Qe.displayName = "Tooltips";
            const Je = Qe
        },
        Svbh: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p,
                p: () => m
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("qrIQ"),
                c = n("4kma"),
                s = n("O94r"),
                l = n.n(s),
                u = n("eeEA"),
                f = n("fvKX"),
                d = i.lq ? 100 : 50,
                m = 250;
            const p = function(e) {
                var t = e.visible,
                    n = e.needSEO,
                    s = (0, r.__rest)(e, ["visible", "needSEO"]),
                    p = a().useRef(),
                    v = (0, o.useState)(!1),
                    h = v[0],
                    b = v[1],
                    g = (0, f.r)().prefixCls;
                a().useEffect((function() {
                    return clearTimeout(p.current), p.current = setTimeout((function() {
                            b(!!t), p.current = null
                        }), t ? d : m),
                        function() {
                            return clearTimeout(p.current)
                        }
                }), [t]), a().useEffect((function() {
                    !i.lq && t && setTimeout(c.A.checkViewport, 1.5 * m)
                }), [t]);
                var y = l()("".concat(g, "-trans"), {
                    "data-seo": n && !t && !h,
                    "data-show": t && h,
                    "data-leave": !t && h
                }, e.className);
                return t || h || n ? a().createElement(u.Ay, (0, r.__assign)({}, s, {
                    className: y
                })) : null
            }
        },
        eh2c: (e, t, n) => {
            "use strict";
            n.d(t, {
                nF: () => r,
                sg: () => o
            });
            n("P/al"), n("RBiB"), n("jPI1"), n("Rj53");

            function r(e, t) {
                var n = this,
                    r = null;
                return function() {
                    for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                    null === r && (r = setTimeout((function() {
                        e.apply(n, o), r = null
                    }), t))
                }
            }

            function o(e, t) {
                var n = this,
                    r = null;
                return function() {
                    for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                    r && clearTimeout(r), r = setTimeout((function() {
                        e.apply(n, o), r = null
                    }), t)
                }
            }
        },
        "4kma": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n("OKx2"),
                i = n("eh2c"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.$refs = {}, t.setRefs = function(e) {
                            return function(n) {
                                t.$refs[e] = n
                            }
                        }, t
                    }
                    return (0, r.__extends)(t, e), t
                }(o.PureComponent);
            var s = function(e) {
                    return "function" === typeof e
                },
                l = function(e) {
                    return e && "object" === typeof e
                },
                u = function(e, t) {
                    var n = l(e) && !(0, o.isValidElement)(e),
                        r = l(t) && !(0, o.isValidElement)(t);
                    if (n && n === r) {
                        var a = Object.keys(e),
                            i = Object.keys(t);
                        if (a.length === i.length) return Number(a.every((function(n) {
                            return u(e[n], t[n])
                        })))
                    } else {
                        if (s(e) && s(t)) return !0;
                        if ((0, o.isValidElement)(e) && (0, o.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                f = {
                    offset: 0,
                    x: !0
                },
                d = function(e) {
                    function t(n) {
                        var o = e.call(this, n) || this;
                        return o.unmount = !1, o.index = t.count, o.checkUpdate = function() {
                            return o.$refs.root && !o.unmount
                        }, o.checkViewport = function(e) {
                            var n = o.$refs.root,
                                i = o.props,
                                c = i.check,
                                s = i.lazyLoad;
                            if (o.checkUpdate()) {
                                var l = (0, r.__assign)((0, r.__assign)({}, f), c),
                                    u = l.offset,
                                    d = l.x;
                                !s || (0, a.cH)(n, u, d) ? (delete t.instances[o.index], o.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", n)) : t.instances[o.index] = o
                            }
                        }, o.inViewPort = function(e) {
                            return e
                        }, o.equalUpdate = function(e, t) {
                            u(e, t) || o.checkViewport()
                        }, t.count += 1, o
                    }
                    return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = (t.check, (0, r.__rest)(t, ["check"])),
                            o = (e.check, (0, r.__rest)(e, ["check"]));
                        this.equalUpdate(o, n)
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
                }(c),
                m = (0, i.nF)(d.checkViewport, 200),
                p = !(0, a.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", m, p), document.addEventListener("scroll", m, p), document.addEventListener("transitionend", m, p));
            const v = d
        },
        RBiB: (e, t, n) => {
            var r = n("0Ocv"),
                o = n("R5u7"),
                a = n("m2YG"),
                i = Math.ceil,
                c = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? o(e, t, n) : void 0 === t) ? 1 : c(a(t), 0);
                var s = null == e ? 0 : e.length;
                if (!s || t < 1) return [];
                for (var l = 0, u = 0, f = Array(i(s / t)); l < s;) f[u++] = r(e, l, l += t);
                return f
            }
        },
        "P/al": (e, t, n) => {
            var r = n("zaNA"),
                o = n("H87J"),
                a = n("S3pA"),
                i = n("R3TX");
            e.exports = function(e) {
                var t = null == e ? 0 : e.length,
                    n = a;
                return e = t ? o(e, (function(e) {
                    if ("function" != typeof e[1]) throw new TypeError("Expected a function");
                    return [n(e[0]), e[1]]
                })) : [], i((function(n) {
                    for (var o = -1; ++o < t;) {
                        var a = e[o];
                        if (r(a[0], this, n)) return r(a[1], this, n)
                    }
                }))
            }
        },
        Rj53: (e, t, n) => {
            var r = n("wC3K"),
                o = n("8uyH"),
                a = Object.prototype.hasOwnProperty,
                i = o((function(e, t, n) {
                    a.call(e, n) ? e[n].push(t) : r(e, n, [t])
                }));
            e.exports = i
        }
    }
]);
//# debugId=57e0a908-19b1-5564-a73a-3589ab70365f