"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8085], {
        AaY9: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            var a = n("S+0I"),
                r = n("66mo"),
                o = n.n(r),
                l = n("VA12"),
                i = function() {
                    var e = (0, a._)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.get)("/bapi/margin/v1/friendly/margin/max-leverage ");
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
                }()
        },
        SgY9: (e, t, n) => {
            n.d(t, {
                A: () => P
            });
            var a = n("S+0I"),
                r = n("hrAD"),
                o = n("qoEP"),
                l = n("mguP"),
                i = n("66mo"),
                c = n.n(i),
                s = n("DTvD"),
                u = n.n(s),
                m = n("k8+c"),
                d = n("QQ00"),
                f = n("x/RO"),
                p = n("Zfyq"),
                v = n("AaY9"),
                g = n("2IQ4"),
                x = n("GIr8"),
                h = n("Vhyo"),
                E = n("GJ+9"),
                y = n("8J09"),
                A = n("YUyw"),
                b = n("tSdT"),
                w = n("OLW9"),
                C = n("/Cny"),
                _ = n("KzWS"),
                k = n("Gz4J"),
                z = n("vjpm"),
                M = n("4sjt"),
                S = {
                    "3x": 0,
                    "5x": 1,
                    margin2: 10
                },
                I = {
                    flex: "0 0 auto",
                    mr: "4px"
                },
                N = (0, s.forwardRef)((function(e) {
                    var t = (0, A.ok)("margin").getI18n,
                        n = (0, A.ok)("trd"),
                        i = n.getI18n,
                        N = n.i18n.language,
                        P = (0, b.A)().enqueueNotification,
                        T = e.open,
                        B = e.onCloseIconClick,
                        j = e.onConfirm,
                        R = e.trackParams,
                        D = void 0 === R ? {
                            df_source: "margin",
                            module: "margin"
                        } : R,
                        L = e.curBar,
                        V = e.canAdjustMarginBar,
                        F = void 0 === V || V,
                        q = e.triggerTransfer,
                        O = e.onClickQuiz,
                        W = e.cRef,
                        H = e.BNCLocation,
                        Y = (0, l._)((0, s.useState)(!1), 2),
                        Q = Y[0],
                        G = Y[1],
                        K = (0, l._)((0, s.useState)(!1), 2),
                        $ = K[0],
                        Z = K[1],
                        J = (0, l._)((0, s.useState)(!1), 2),
                        U = J[0],
                        X = J[1],
                        ee = (0, l._)((0, s.useState)(-1), 2),
                        te = ee[0],
                        ne = ee[1],
                        ae = (0, l._)((0, s.useState)(!1), 2),
                        re = ae[0],
                        oe = ae[1],
                        le = (0, l._)((0, s.useState)(!1), 2),
                        ie = le[0],
                        ce = le[1],
                        se = (0, l._)((0, s.useState)(L), 2),
                        ue = se[0],
                        me = se[1],
                        de = (0, l._)((0, s.useState)(!0), 2),
                        fe = de[0],
                        pe = de[1],
                        ve = (0, l._)((0, s.useState)(10), 2),
                        ge = ve[0],
                        xe = ve[1],
                        he = (0, z.Q)().isMobile,
                        Ee = (0, s.useCallback)((0, a._)(c().mark((function e() {
                            var t, n, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Z(!0), t = {
                                            bar: ue && S[ue]
                                        }, e.t0 = l._, e.next = 5, (0, m.Jy)(t);
                                    case 5:
                                        e.t1 = e.sent, n = (0, e.t0)(e.t1, 1), (a = n[0]) && P(i("dialog-lendingSuccess"), {
                                            variant: "success",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        }), Z(!1), j(a);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [ue, P, i, j]),
                        ye = function() {
                            var e = (0, a._)(c().mark((function e() {
                                var t;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, d.Tc)();
                                        case 2:
                                            t = e.sent, pe(t.isExistMarginAccount);
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
                        Ae = function() {
                            var e = (0, a._)(c().mark((function e() {
                                var t, n, a;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = l._, e.next = 3, Promise.all([(0, f.db)(), (0, f.jz)()]);
                                        case 3:
                                            e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), n = t[0], a = t[1], oe((null === n || void 0 === n ? void 0 : n.quizPass) || !1), a && Array.isArray(a) && a.indexOf("MARGIN_PRO_QUIZ_2") >= 0 ? ce(!0) : ce(!1);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        be = function() {
                            var e = (0, a._)(c().mark((function e() {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            (0, f.h3)().then((function(e) {
                                                var t, n, a, r = null === (t = null === e || void 0 === e ? void 0 : e.find((function(e) {
                                                    return 1 === +e.rank
                                                }))) || void 0 === t ? void 0 : t.brackets;
                                                xe(null === (a = r, n = Array.isArray(a) ? a.reduce((function(e, t) {
                                                    return parseFloat(t.leverage) > parseFloat(e.leverage) ? t : e
                                                })) : null) || void 0 === n ? void 0 : n.leverage)
                                            }));
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
                        we = (0, s.useMemo)((function() {
                            var e = ge;
                            return te >= 10 && (e = Math.min(Number(ge), te)), e
                        }), [te, ge]),
                        Ce = (0, s.useMemo)((function() {
                            return !(te < 0) && ("margin2" !== L && te < +{
                                "3x": 3,
                                "5x": 5,
                                margin2: ge
                            }[L])
                        }), [L, ge, te]),
                        _e = (0, s.useMemo)((function() {
                            return te > 0 && te < 10
                        }), [te]);
                    (0, s.useEffect)((function() {
                        T && me(L || "3x")
                    }), [L, T]), (0, s.useEffect)((function() {
                        G(!(!T || L === ue) && !!("margin2" !== ue || fe && ie))
                    }), [ue, L, T, ie, fe]), (0, s.useEffect)((function() {
                        T && (ye(), (0, p.K$)({
                            platform: "web"
                        }).then((function(e) {
                            var t = e.data;
                            t.restriction && t.restriction.keys && X(t.restriction.keys.includes("margin_account_pro"))
                        })), (0, v.T)().then((function(e) {
                            ne(Number(e.maxLeverage))
                        })), Ae(), be())
                    }), [T]), (0, s.useImperativeHandle)(W, (function() {
                        return {
                            reFreshCrossQuiz: function() {
                                Ae()
                            }
                        }
                    }));
                    var ke, ze = function(e) {
                        var t = e.selected,
                            n = e.bar,
                            a = ge;
                        return te >= 10 && (a = Math.min(Number(ge), te)), u().createElement(g.A, {
                            style: {
                                border: "1px solid",
                                cursor: "pointer",
                                borderColor: t ? "var(--color-PrimaryText)" : "var(--color-InputLine)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                borderRadius: "8px",
                                height: "40px",
                                flex: 1
                            },
                            onClick: function() {
                                return me(n)
                            }
                        }, "margin2" === n ? "".concat(a, "x") : n)
                    };
                    return u().createElement(M.A, {
                        headerContent: i("dialog-cross-max-leverage-title2", {
                            defaultValue: "Cross Margin Max Leverage"
                        }),
                        visible: T,
                        modalSize: "small",
                        onClose: function() {
                            B(), (0, y.Tq)("$WebClick", (0, r._)({
                                $element_id: "leverage_adjust_cancel",
                                pageName: "margin_trading",
                                df_source: "margin"
                            }, D))
                        },
                        footerContent: u().createElement(k.A, {
                            sz: "large",
                            disabled: !Q || $ || !F,
                            style: {
                                width: "100%"
                            },
                            onClick: function() {
                                Ee(), j(), (0, y.Tq)("$WebClick", (0, r._)({
                                    $element_id: "leverage_adjust_confirm",
                                    pageName: "margin_trading",
                                    df_source: "margin"
                                }, D))
                            }
                        }, i("dialog-confirm"))
                    }, Ce && u().createElement(x.A, {
                        sx: {
                            bg: "var(--color-BadgeBg)",
                            p: "12px",
                            borderRadius: "12px",
                            mb: "16px"
                        }
                    }, u().createElement(g.A, {
                        sx: {
                            mr: "4px",
                            color: "var(--color-PrimaryText)",
                            fontSize: "20px"
                        }
                    }, u().createElement(_.A, null)), u().createElement(g.A, {
                        sx: {
                            flex: 1
                        }
                    }, t("compliance-over-leverage-tips", {
                        defaultValue: "The leverage multiplier you set earlier has expired due to the compliance limit,, you can switch to a lower leverage to ensure a smooth usage."
                    }))), u().createElement(g.A, {
                        style: {
                            height: "280px"
                        }
                    }, u().createElement(x.A, {
                        style: {
                            gap: "16px"
                        }
                    }, u().createElement(ze, {
                        selected: "3x" === ue,
                        bar: "3x"
                    }), (ke = 5, (te < 0 || +ke < te || +ke === te) && u().createElement(ze, {
                        selected: "5x" === ue,
                        bar: "5x"
                    })), !U && !_e && u().createElement(ze, {
                        selected: "margin2" === ue,
                        bar: "margin2"
                    })), "margin2" !== ue || _e ? u().createElement(h.A, {
                        variant: "subtitle1",
                        mt: 3,
                        mb: 2
                    }, i("cross-margin-account-normal-mode", {
                        defaultValue: "Classic Mode"
                    })) : u().createElement(h.A, {
                        variant: "subtitle1",
                        mt: 3,
                        mb: 2
                    }, i("cross-margin-account-Pro-mode", {
                        defaultValue: "Pro Mode"
                    })), "margin2" !== ue || fe && ie ? u().createElement(g.A, {
                        mb: "xs",
                        color: "t.third"
                    }, u().createElement(g.A, null, i("dialog-cross-max-leverage-desc", {
                        defaultValue: "After the adjustment, your maximum receivable quantity will undergo corresponding changes."
                    })), "margin2" === ue && !_e && u().createElement(g.A, {
                        sx: {
                            mt: 2
                        }
                    }, i("cross-margin-pro-tips", {
                        defaultValue: "You can switch to {{marginProBar}}x up to 5 times within 24hours.",
                        marginProBar: we
                    })), u().createElement(g.A, {
                        sx: {
                            mt: 2
                        }
                    }, u().createElement(E.A, {
                        sx: {
                            cursor: "pointer"
                        },
                        onClick: function() {
                            (0, y.Tq)("$WebClick", (0, r._)({
                                $element_id: "leverage_adjust_learnmore",
                                pageName: "margin_trading",
                                df_source: "margin"
                            }, D)), window.open("https://".concat(location.host, "/").concat(N).concat("margin2" !== ue || _e ? "/support/faq/binance-cross-margin-trading-guide-360041505471" : "/support/faq/introduction-to-binance-cross-margin-pro-0b5441a1c1ff431bb2e135dfa8e6ffba"))
                        }
                    }, i("dialog-cross-max-leverage-learn-more", {
                        defaultValue: "Learn More"
                    })))) : u().createElement(g.A, {
                        color: "t.primary"
                    }, u().createElement(g.A, null, i("adjust-mode-text1", {
                        defaultValue: "Adjust leverage to {{marginProBar}}x you need to:",
                        marginProBar: we
                    })), u().createElement(g.A, {
                        mt: 3,
                        style: {
                            display: he ? "flex" : "",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }, u().createElement(x.A, {
                        sx: {
                            alignItems: "center"
                        },
                        style: {
                            marginBottom: he ? "" : "4px"
                        }
                    }, fe ? u().createElement(w.A, {
                        sx: (0, o._)((0, r._)({}, I), {
                            path: {
                                fill: "#0ECB81"
                            }
                        })
                    }) : u().createElement(C.A, {
                        sx: (0, o._)((0, r._)({}, I), {
                            path: {
                                fill: "#F6465D"
                            }
                        })
                    }), i("transfer-open-cross", {
                        defaultValue: "Transfer to open Cross Margin account."
                    })), !fe && u().createElement(k.A, {
                        sz: he ? "tiny" : "regular",
                        variant: "secondary",
                        style: {
                            marginLeft: he ? "" : "28px",
                            width: he ? "" : "calc(100% - 28px)",
                            minWidth: "66px"
                        },
                        onClick: q
                    }, i("funds-transfer"))), u().createElement(g.A, {
                        mt: 3,
                        style: {
                            display: he ? "flex" : "",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }, u().createElement(x.A, {
                        sx: {
                            alignItems: "center"
                        },
                        style: {
                            marginBottom: he ? "" : "4px"
                        }
                    }, ie ? u().createElement(w.A, {
                        sx: (0, o._)((0, r._)({}, I), {
                            path: {
                                fill: "#0ECB81"
                            }
                        }),
                        color: "t.success"
                    }) : u().createElement(C.A, {
                        sx: (0, o._)((0, r._)({}, I), {
                            path: {
                                fill: "#F6465D"
                            }
                        })
                    }), i("finish-pro-quiz", {
                        defaultValue: "Finish Cross Margin Pro quiz."
                    })), !ie && u().createElement(k.A, {
                        sz: he ? "tiny" : "regular",
                        variant: "secondary",
                        style: {
                            marginLeft: he ? "" : "28px",
                            width: he ? "" : "calc(100% - 28px)",
                            minWidth: "66px"
                        },
                        onClick: function() {
                            O("AE" === H ? "cm2_ae" : re ? "cm2" : "cm1"), he && B()
                        }
                    }, i("Pro-quiz"))))))
                }));
            N.displayName = "AdjustLevelDialog";
            const P = N
        },
        "4sjt": (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var a = n("DTvD"),
                r = n.n(a),
                o = n("jwne"),
                l = n("F05g"),
                i = n("iZfx");
            const c = function(e, t) {
                var n = (0, a.useState)(function(e, t) {
                        return void 0 !== t ? t : !!i.Bd && window.matchMedia(e).matches
                    }(e, t)),
                    r = n[0],
                    o = n[1];
                return (0, a.useEffect)((function() {
                    var t = !0,
                        n = window.matchMedia(e),
                        a = function() {
                            t && o(!!n.matches)
                        };
                    return n.addEventListener("change", a), o(n.matches),
                        function() {
                            t = !1, n.removeEventListener("change", a)
                        }
                }), [e]), r
            };
            var s = "(max-width: 767px)",
                u = "(min-width: 768px) and (max-width: 1023px)",
                m = "(min-width: 1024px)",
                d = n("k6za"),
                f = n("2IQ4"),
                p = o.Ay.Header,
                v = o.Ay.Content,
                g = o.Ay.Footer,
                x = {
                    ".mobileBox": {
                        overflowY: "auto",
                        overflowX: "hidden"
                    },
                    ".mobileHeadContainer": {
                        position: "relative",
                        padding: "16px 15px 0 15px",
                        marginBottom: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ".mobileIcon": {
                            position: "absolute",
                            left: "15px",
                            height: "20px",
                            width: "20px"
                        },
                        ".mobileTitle": {
                            fontSize: "18px",
                            fontWight: "600",
                            lineHeight: "28px"
                        }
                    }
                },
                h = {
                    ".bn-modal-content": {
                        paddingTop: 0,
                        maxHeight: "fit-content"
                    }
                },
                E = function(e) {
                    var t = e.visible,
                        n = e.showPre,
                        a = e.showClose,
                        i = void 0 === a || a,
                        E = e.onCPreClick,
                        y = e.onClose,
                        A = e.modalSize,
                        b = void 0 === A ? "middle" : A,
                        w = e.size,
                        C = void 0 === w ? "auto" : w,
                        _ = e.headerContent,
                        k = e.children,
                        z = e.footerContent,
                        M = [c(s, !1), c(u, !1), c(m, !0)][0];
                    return r().createElement(f.A, {
                        sx: x
                    }, M ? r().createElement(l.A, {
                        size: "full",
                        visible: t,
                        direction: "bottom",
                        onClose: y
                    }, r().createElement(f.A, {
                        className: "mobileBox"
                    }, r().createElement(f.A, {
                        className: "mobileHeadContainer"
                    }, r().createElement(d.A, {
                        className: "mobileIcon",
                        onClick: y
                    }), r().createElement(f.A, {
                        className: "mobileTitle"
                    }, _)), r().createElement(f.A, {
                        sx: {
                            padding: "0 15px"
                        }
                    }, k), r().createElement(f.A, {
                        sx: {
                            position: "absolute",
                            bottom: "16px",
                            padding: "12px 15px",
                            width: "100%"
                        }
                    }, z))) : r().createElement(o.Ay, {
                        enablePortal: !0,
                        className: "commonModalContainer",
                        modalSize: b,
                        visible: t,
                        size: C,
                        onClose: y
                    }, r().createElement(f.A, {
                        sx: h
                    }, r().createElement(p, {
                        showPre: n,
                        onPreClick: E,
                        showNext: i,
                        onNextClick: y
                    }, _), r().createElement(v, null, k), z && r().createElement(g, null, z))))
                };
            const y = r().memo(E)
        },
        VjP6: (e, t, n) => {
            n.d(t, {
                A: () => T
            });
            var a = n("mguP"),
                r = n("DTvD"),
                o = n.n(r),
                l = n("hTvQ"),
                i = n("Vhyo"),
                c = n("2IQ4"),
                s = n("GIr8"),
                u = n("d6PB"),
                m = n("cSeX"),
                d = n("x/RO"),
                f = n("3tnw"),
                p = n.n(f),
                v = n("Wpmw"),
                g = n("tSdT"),
                x = {
                    ".loading": {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        zIndex: 2
                    },
                    ".desc": {
                        pb: ["24px", "16px"]
                    },
                    ".label": {
                        mt: "16px",
                        jutifyContent: ["space-between", "flex-start"],
                        ".text": {
                            mr: ["10px"],
                            lineHeight: "24px",
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "var(--color-PrimaryText)"
                        }
                    },
                    ".select": {
                        mt: ["16px", "20px"],
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        ".selectItem": {
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid var(--color-InputLine)",
                            flex: "1",
                            height: "36px",
                            cursor: "pointer"
                        },
                        ".active": {
                            borderColor: "var(--color-PrimaryText)"
                        }
                    },
                    ".dates": {
                        mt: "16px",
                        ".wrap": {
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            margin: "8px 0",
                            "&:last-of-type": {
                                mb: 0
                            },
                            ".name": {
                                color: "var(--color-TertiaryText)",
                                mb: "8px",
                                fontSize: "14px",
                                lineHeight: "20px"
                            },
                            ".date": {
                                color: "t.primary",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: "500"
                            }
                        },
                        ".sep": {
                            lineHeight: "24px",
                            fontSize: "16px",
                            fontWeight: "500",
                            alignSelf: "flex-end",
                            display: ["none", "block"]
                        }
                    },
                    ".btn": {
                        width: "100%",
                        justifyContent: ["center", "flex-end"],
                        "> button": {
                            width: "100%"
                        }
                    }
                },
                h = n("LtgJ"),
                E = n("H8jA"),
                y = n("Gz4J"),
                A = n("I4z7"),
                b = n("c6eW"),
                w = n("vjpm"),
                C = n("4sjt"),
                _ = "YYYY-MM-DD",
                k = "YYYY-MM-DD HH:mm:ss",
                z = {
                    variant: "error",
                    autoHideDuration: 2e3,
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    }
                },
                M = [{
                    i18nKey: "mcl-today",
                    value: "today"
                }, {
                    i18nKey: "mcl-day-2",
                    value: "3days"
                }, {
                    i18nKey: "mcl-week-2",
                    value: "1week"
                }, {
                    i18nKey: "mcl-month",
                    value: "1month"
                }],
                S = function(e, t) {
                    return {
                        today: t("mcl-today"),
                        "3days": t("mcl-day-2"),
                        "1week": t("mcl-week-2"),
                        "1month": t("mcl-month")
                    }[e]
                },
                I = function(e, t) {
                    if (e) return [p()(+t).format(_), t];
                    var n = +p().now();
                    return [p()(n).format(_), n]
                },
                N = function(e, t, n) {
                    if (t) return [p()(+n).format(k), n];
                    var a, r = null !== (a = {
                        today: +p()().endOf("day"),
                        "1month": +p()().add(30, "days").endOf("day"),
                        "1week": +p()().add(7, "days").endOf("day"),
                        "3days": +p()().add(3, "days").endOf("day")
                    }[e]) && void 0 !== a ? a : 0;
                    return [r > 0 ? p()(r).format(k) : "--", r]
                },
                P = o().forwardRef((function(e, t) {
                    var n = function() {
                            var e = (0, v.B)("widget-common"),
                                t = e.t;
                            return {
                                i18n: e.i18n,
                                t: t
                            }
                        }().t,
                        f = e.onSuccess,
                        p = (0, a._)((0, r.useState)(!1), 2),
                        _ = p[0],
                        k = p[1],
                        P = (0, a._)((0, r.useState)(!1), 2),
                        T = P[0],
                        B = P[1],
                        j = (0, a._)((0, r.useState)(!1), 2),
                        R = j[0],
                        D = j[1],
                        L = (0, a._)((0, r.useState)(""), 2),
                        V = L[0],
                        F = L[1],
                        q = (0, a._)((0, r.useState)(0), 2),
                        O = q[0],
                        W = q[1],
                        H = (0, a._)((0, r.useState)(0), 2),
                        Y = H[0],
                        Q = H[1],
                        G = (0, a._)((0, r.useState)(!0), 2),
                        K = G[0],
                        $ = G[1],
                        Z = (0, h.Z)(),
                        J = Z.openModal,
                        U = Z.closeModal,
                        X = ((0, w.Q)().isMobile, (0, g.A)().enqueueNotification),
                        ee = (0, r.useCallback)((function() {
                            return B(!0)
                        }), []),
                        te = (0, r.useCallback)((function() {
                            return B(!1)
                        }), []),
                        ne = (0, r.useMemo)((function() {
                            if (_) {
                                var e = Math.ceil((Y - O) / 864e5);
                                return e <= 2 ? "today" : e <= 4 ? "3days" : e <= 8 ? "1week" : "1month"
                            }
                            return V
                        }), [_, Y, O, V]);
                    (0, r.useEffect)((function() {
                        T ? ($(!0), (0, d.ko)().then((function(e) {
                            $(!1);
                            var t = e.coolingOff;
                            if (t) {
                                var n = t.on,
                                    a = t.startTime,
                                    r = t.endTime;
                                (0, l.unstable_batchedUpdates)((function() {
                                    k(n), D(n), W(+a), Q(+r)
                                }))
                            }
                        })).catch((function() {
                            return $(!1)
                        }))) : (k(!1), D(!1), F(""))
                    }), [T]), (0, r.useImperativeHandle)(t, (function() {
                        return {
                            openModal: ee,
                            closeModal: te
                        }
                    }), []);
                    var ae = (0, r.useCallback)((function(e) {
                            D(e)
                        }), []),
                        re = (0, r.useMemo)((function() {
                            return _ || V.length ? n("mcl-after-enable", {
                                date: I(_, O)[0]
                            }) : "--"
                        }), [V, n, _, O]),
                        oe = (0, r.useMemo)((function() {
                            return N(V, _, Y)[0]
                        }), [V, _, Y]),
                        le = (0, r.useCallback)((function() {
                            (0, d.dd)({
                                endTime: N(V, !1, 0)[1]
                            }).then((function(e) {
                                (null === e || void 0 === e ? void 0 : e.success) ? (setTimeout((function() {
                                    ("function" === typeof f ? f : function() {})()
                                }), 200), te(), U()) : (X(null === e || void 0 === e ? void 0 : e.message, z), U())
                            }))
                        }), [V, f, n]);
                    return (0, r.useEffect)((function() {
                        R && !_ && F((function(e) {
                            return e.length ? e : "today"
                        }))
                    }), [R, _]), o().createElement(C.A, {
                        headerContent: n("mcl-period-1"),
                        visible: T,
                        onClose: te,
                        footerContent: o().createElement(c.A, {
                            style: {
                                width: "100%"
                            }
                        }, o().createElement(y.A, {
                            sz: "large",
                            style: {
                                width: "100%"
                            },
                            onClick: function() {
                                te(), J({
                                    maskClose: !1,
                                    content: o().createElement(E.A, {
                                        icon: o().createElement(b.A, {
                                            name: "GeneralError"
                                        }),
                                        description: o().createElement(i.A, {
                                            className: "info"
                                        }, n("mcl-confirm", {
                                            period: S(V, n)
                                        })),
                                        actions: o().createElement(o().Fragment, null, o().createElement(y.A, {
                                            style: {
                                                marginBottom: "8px",
                                                width: "100%"
                                            },
                                            onClick: le
                                        }, n("widget-common-confirm")), o().createElement(y.A, {
                                            variant: "secondary",
                                            style: {
                                                width: "100%"
                                            },
                                            onClick: U
                                        }, n("widget-common-cancel")))
                                    })
                                })
                            },
                            disabled: !R || !V.length || _
                        }, n("widget-common-confirm")))
                    }, o().createElement(c.A, {
                        sx: x
                    }, K && o().createElement(s.A, {
                        className: "loading"
                    }, o().createElement(u.A, null)), o().createElement(i.A, {
                        className: "desc"
                    }, n("mcl-desc")), o().createElement(m.A, {
                        className: "label"
                    }, o().createElement(c.A, {
                        className: "text"
                    }, n("mcl-disable")), o().createElement(A.A, {
                        size: "small",
                        disabled: _,
                        checked: R,
                        name: "disable",
                        onChange: ae
                    })), (R || _) && o().createElement(c.A, {
                        pt: "16px"
                    }, !_ && o().createElement(c.A, {
                        className: "select",
                        style: {
                            gap: "10px"
                        }
                    }, M.map((function(e) {
                        return o().createElement(c.A, {
                            key: e.value,
                            className: "selectItem ".concat(ne === e.value ? "active" : ""),
                            onClick: function() {
                                F(e.value)
                            }
                        }, n(e.i18nKey))
                    }))), o().createElement(c.A, {
                        className: "dates"
                    }, o().createElement(c.A, {
                        className: "wrap"
                    }, o().createElement(i.A, {
                        className: "name"
                    }, n("mcl-start")), o().createElement(i.A, {
                        className: "date"
                    }, re)), o().createElement(c.A, {
                        className: "wrap"
                    }, o().createElement(i.A, {
                        className: "name"
                    }, n("mcl-end")), o().createElement(i.A, {
                        className: "date"
                    }, oe))))))
                }));
            const T = o().memo(P)
        },
        YUyw: (e, t, n) => {
            n.d(t, {
                MC: () => s,
                ok: () => c
            });
            var a = n("hrAD"),
                r = n("qoEP"),
                o = n("KrVi"),
                l = n("DTvD"),
                i = n("Wpmw"),
                c = (n("Ufvw"), function(e, t) {
                    var n = (0, i.B)(t || "trade-ui"),
                        a = n.t,
                        r = n.i18n,
                        o = (0, l.useCallback)((function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = e ? "".concat(e, "-").concat(t) : t;
                            return a(r, n)
                        }), [e, a]);
                    return {
                        i18n: r,
                        getI18n: o
                    }
                }),
                s = function(e) {
                    var t = (0, i.B)(e),
                        n = t.t,
                        c = (0, o._)(t, ["t"]),
                        s = (0, l.useCallback)((function(t, a) {
                            var r = e.find((function(e) {
                                return n("".concat(e, ":").concat(t)) !== t
                            }));
                            return r ? n("".concat(r, ":").concat(t), a) : "".concat(t) || ""
                        }), [n]);
                    return (0, r._)((0, a._)({}, c), {
                        getI18n: s
                    })
                }
        },
        hcwF: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                l = n("qqbu");
            const i = function(e) {
                return o().createElement(l.A, (0, a.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.123 88c22.091 0 40-17.908 40-40 0-22.09-17.909-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zM55.9 35.98l4.243 4.243L52.366 48l7.778 7.778-4.243 4.243-7.778-7.779-7.778 7.779-4.243-4.243 7.779-7.778-7.779-7.778 4.243-4.243 7.778 7.778 7.778-7.778z",
                    fill: "#FF375B"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.123 77c16.016 0 29-12.983 29-29 0-16.015-12.984-29-29-29-16.017 0-29 12.985-29 29 0 16.017 12.983 29 29 29zM55.9 35.98l4.243 4.243L52.366 48l7.778 7.778-4.243 4.243-7.778-7.779-7.778 7.779-4.243-4.243 7.779-7.778-7.779-7.778 4.243-4.243 7.778 7.778 7.778-7.778z",
                    fill: "#FF375B"
                }))
            }
        },
        xj6P: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                l = n("qqbu");
            const i = function(e) {
                return o().createElement(l.A, (0, a.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.096 88c22.091 0 40-17.908 40-40 0-22.09-17.909-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm12.312-50.597l4.243 4.242-19.799 19.8-4.243-4.243-7.07-7.071 4.242-4.243 7.071 7.071 15.556-15.556z",
                    fill: "#2EE39D"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.096 77c16.016 0 29-12.983 29-29 0-16.015-12.984-29-29-29-16.017 0-29 12.985-29 29 0 16.017 12.983 29 29 29zm12.312-39.597l4.243 4.242-19.799 19.8-4.243-4.243-7.07-7.071 4.242-4.243 7.071 7.071 15.556-15.556z",
                    fill: "#2EE39D"
                }))
            }
        },
        "/snk": (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                l = n("qqbu");
            const i = function(e) {
                return o().createElement(l.A, (0, a.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    opacity: .5,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M61.29 30.467A21.903 21.903 0 0048 26c-12.15 0-22 9.85-22 22 0 4.993 1.663 9.598 4.466 13.29L40.878 50.88 38 48l10-10 2.88 2.879L61.29 30.467zM45.12 55.12L48 58l10-10-2.88-2.879L65.534 34.71A21.903 21.903 0 0169.999 48c0 12.15-9.85 22-22 22a21.903 21.903 0 01-13.29-4.467L45.12 55.121z",
                    fill: "#AEB4BC"
                }), o().createElement("path", {
                    opacity: .2,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M82 48c0 18.778-15.223 34-34 34a33.863 33.863 0 01-21.828-7.93L74.07 26.173A33.863 33.863 0 0182 48zM21.93 69.827L69.827 21.93A33.863 33.863 0 0047.999 14c-18.777 0-34 15.222-34 34 0 8.309 2.98 15.921 7.93 21.827zM88 48c0 22.091-17.91 40-40 40C25.907 88 8 70.091 8 48S25.908 8 48 8c22.09 0 40 17.909 40 40z",
                    fill: "#AEB4BC"
                }))
            }
        },
        "9tGb": (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var a = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                l = n("Olbk"),
                i = n("46Ff"),
                c = n("TaoO"),
                s = n("pPGf"),
                u = n("xqbL"),
                m = n.n(u),
                d = n("tgKj"),
                f = n("unLX");
            const p = function(e) {
                var t, n = e.active,
                    a = e.selects,
                    i = e.onOpen,
                    c = e.placeholder,
                    u = e.selectIcon,
                    p = e.disabled,
                    v = e.separator,
                    g = e.selectPosition,
                    x = (0, f.r)(),
                    h = x.prefixCls,
                    E = x.isRTL,
                    y = "".concat(h, "-textFieldSelect-field"),
                    A = m()(y, ((t = {})["".concat(y, "-rtl")] = !!E, t["".concat(y, "-").concat(g)] = !!g, t.active = !!n, t.disabled = !!p, t.separator = !!v, t)),
                    b = "".concat(y, "-input"),
                    w = "".concat(y, "-arrow"),
                    C = (0, r.useMemo)((function() {
                        return o().createElement(l.Ay, {
                            className: "".concat(y, "-placeholder"),
                            children: c
                        })
                    }), [c]);
                return o().createElement(d.A, {
                    className: A,
                    onClick: i
                }, o().isValidElement(u) && o().cloneElement(u, {
                    className: "".concat(y, "-icon")
                }), o().createElement(l.Ay, {
                    className: b,
                    children: (null === a || void 0 === a ? void 0 : a.length) ? a[0] : C
                }), o().createElement(s.A, {
                    className: w
                }))
            };
            var v = c.A.Option;
            const g = (0, r.forwardRef)((function(e, t) {
                var n = e.options,
                    s = e.variant,
                    u = void 0 === s ? "line" : s,
                    m = e.size,
                    d = void 0 === m ? "middle" : m,
                    g = e.value,
                    x = e.onValueChange,
                    h = e.selectProps,
                    E = e.defaultSelectValue,
                    y = e.separator,
                    A = void 0 === y || y,
                    b = e.selectPosition,
                    w = void 0 === b ? "prefix" : b,
                    C = (0, a.__rest)(e, ["options", "variant", "size", "value", "onValueChange", "selectProps", "defaultSelectValue", "separator", "selectPosition"]),
                    _ = (0, f.r)(),
                    k = _.prefixCls,
                    z = _.isRTL,
                    M = "".concat(k, "-textFieldSelect"),
                    S = (0, r.useState)([]),
                    I = S[0],
                    N = S[1],
                    P = (0, r.useState)(""),
                    T = P[0],
                    B = P[1],
                    j = (0, r.useState)(345),
                    R = j[0],
                    D = j[1],
                    L = (0, r.useRef)(null),
                    V = (0, r.useCallback)((function(e) {
                        N(e), null === x || void 0 === x || x({
                            selectedValue: e,
                            textFieldValue: g
                        })
                    }), [x, g, N]),
                    F = (0, r.useCallback)((function(e) {
                        null === x || void 0 === x || x({
                            selectedValue: I,
                            textFieldValue: e
                        })
                    }), [I, x]),
                    q = (0, r.useCallback)((function(e) {
                        B(e)
                    }), [B]),
                    O = o().useMemo((function() {
                        var e = T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                            t = new RegExp(e, "i");
                        return function(e) {
                            return t.test(e.value)
                        }
                    }), [T]),
                    W = (0, r.useMemo)((function() {
                        var e = null === I || void 0 === I ? void 0 : I[0],
                            t = n.find((function(t) {
                                return t.value === e
                            }));
                        return null === t || void 0 === t ? void 0 : t.icon
                    }), [n, I]),
                    H = (0, r.useCallback)((function(e, t) {
                        return "suffix" === t === e ? -12 : 12
                    }), []),
                    Y = (0, r.useCallback)((function(e, t) {
                        var n;
                        return (n = {})["suffix" === t === e ? "left" : "right"] = -12, n
                    }), []),
                    Q = (0, r.useCallback)((function(e) {
                        var t = "suffix" === e ? "bottom-end" : "bottom-start",
                            r = (null === h || void 0 === h ? void 0 : h.useReactPopper) ? {
                                useReactPopper: !0,
                                reactPopperProps: {
                                    popperWidth: R,
                                    offsetX: H(z, w)
                                }
                            } : {
                                dpStyle: (0, a.__assign)({
                                    width: R
                                }, Y(z, w))
                            };
                        return o().createElement(c.A, (0, a.__assign)({
                            placement: t,
                            onSearchFn: q,
                            searchValue: T,
                            trigger: "click",
                            customField: o().createElement(p, {
                                selectIcon: W,
                                placeholder: null === h || void 0 === h ? void 0 : h.placeholder,
                                disabled: C.disabled,
                                separator: A,
                                selectPosition: w
                            }),
                            value: I,
                            onChange: V,
                            offset: 12
                        }, r, h), n.filter(O).map((function(e, t) {
                            return o().createElement(v, {
                                key: t,
                                value: e.value,
                                className: "".concat(M, "-option")
                            }, o().isValidElement(e.icon) && o().cloneElement(e.icon), e.children)
                        })))
                    }), [q, T, W, I, V, w, A, n, O, h, C.disabled, z, H, Y]),
                    G = (0, r.useMemo)((function() {
                        var e;
                        return (e = {})[w] = Q(w), e
                    }), [w, Q]);
                return (0, r.useEffect)((function() {
                    L.current && D(L.current.offsetWidth)
                }), [L]), (0, r.useEffect)((function() {
                    E && N([E])
                }), [E]), o().createElement(l.Ay, {
                    ref: L,
                    style: {
                        position: "relative"
                    },
                    className: M
                }, o().createElement(i.A, (0, a.__assign)({}, C, {
                    variant: u,
                    size: d,
                    ref: t,
                    onChange: F,
                    value: g
                }, G)))
            }))
        }
    }
]);