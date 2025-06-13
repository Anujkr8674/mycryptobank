(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3632], {
        "8xSX": (e, t, s) => {
            "use strict";
            s.d(t, {
                J: () => m,
                Y: () => x
            });
            var r = s("mXdx"),
                n = s("DTvD"),
                i = s("qYeW"),
                o = s("1lvF"),
                l = s("xqbL"),
                a = s.n(l),
                c = s("VrC+"),
                u = s("/d8Z"),
                d = s("wK5/");
            const m = ({
                    pnl: e,
                    enabledProfitColor: t = !0,
                    className: s
                }) => {
                    const n = (0, c.q)(e, 2),
                        i = t ? (0, u.A)(e, "text-PrimaryText", !0) : "text-PrimaryText";
                    return (0, r.jsxs)(o.Ay, {
                        className: a()(i, s),
                        children: ["$", n]
                    })
                },
                x = ({
                    symbol: e,
                    pnl: t,
                    precision: s,
                    enabledProfitColor: l,
                    className: m
                }) => {
                    const x = (0, i.e)(e),
                        p = (0, n.useMemo)((() => x ? (0, d.r)(x) : 2), [x]),
                        h = s || p,
                        f = (0, c.q)(t, h),
                        y = l ? (0, u.A)(t, "text-PrimaryText", !0) : "text-PrimaryText";
                    return (0, r.jsx)(o.Ay, {
                        className: a()(y, m),
                        children: `${x?"":"$"}${f}`
                    })
                }
        },
        Ynvp: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => a
            });
            var r = s("mXdx"),
                n = (s("DTvD"), s("xqbL")),
                i = s.n(n),
                o = s("1lvF"),
                l = s("/d8Z");
            const a = ({
                roi: e,
                enabledProfitColor: t = !0,
                className: s
            }) => {
                const n = t ? (0, l.A)(e, "text-PrimaryText", !0) : "text-PrimaryText";
                return (0, r.jsxs)(o.Ay, {
                    className: i()(n, s),
                    children: [e.toFixed(2), "%"]
                })
            }
        },
        "5+V2": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => We
            });
            var r = s("hrAD"),
                n = s("mXdx"),
                i = s("DTvD"),
                o = s.n(i),
                l = s("g6+1"),
                a = s.n(l),
                c = s("1lvF"),
                u = s("jor4"),
                d = s("mTPC"),
                m = s("UuPx"),
                x = s("Cr5V"),
                p = s("xqbL"),
                h = s.n(p),
                f = s("rWPd"),
                y = s("shb9"),
                b = s("4hgs"),
                v = s("Cadp"),
                j = s("mkl1"),
                g = {
                    bannerType: "LANDING",
                    platform: "web"
                },
                T = s("I/8y"),
                C = s("nK1b"),
                N = s("4dH7"),
                A = function(e) {
                    var t = e.id,
                        s = e.title,
                        r = e.subContent,
                        i = e.imageUrl;
                    return (0, n.jsx)(c.Ay, {
                        children: (0, n.jsxs)(u.A, {
                            className: "justify-between items-center mb-[12px] h-[96px]",
                            children: [(0, n.jsxs)(c.Ay, {
                                className: "w-full mr-[10px] gap-y-[12px]",
                                children: [(0, n.jsx)(c.Ay, {
                                    className: h()("mb-[12px] text-PrimaryText t-subtitle2 md:t-headline5", {
                                        "line-clamp-2": r,
                                        "line-clamp-3": !r
                                    }),
                                    children: s
                                }), r && (0, n.jsx)(c.Ay, {
                                    className: "line-clamp-1",
                                    children: r
                                })]
                            }), (0, n.jsx)(c.Ay, {
                                className: "w-[96px] h-[96px]",
                                children: (0, n.jsx)(N.A, {
                                    src: i,
                                    className: "w-[96px] h-[96px]"
                                })
                            })]
                        })
                    }, t)
                },
                w = s("+Log"),
                P = s("hoCE");
            const L = ({
                STATIC_HOST: e,
                featureFolder: t,
                name: s
            }) => `${e}/static/images/strategy/${t}/${s}`;
            var _ = s("5YBB"),
                M = s("trXm"),
                S = s("umhI"),
                I = s("krnk");
            const k = ({
                expiredTime: e,
                status: t
            }) => {
                const {
                    t: s
                } = (0, M.Y_)(), [r, o] = (0, i.useState)((0, S.y)()), l = (0, b.useQueryClient)(), a = (0, i.useMemo)((() => {
                    if (!e) return;
                    const t = (0, S.y)(e).diff(r),
                        s = S.y.duration(t),
                        n = s.days(),
                        i = s.hours(),
                        o = s.minutes(),
                        l = s.seconds();
                    return t <= 0 ? {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                        diff: 0
                    } : {
                        days: n,
                        hours: i,
                        minutes: o,
                        seconds: l,
                        diff: t
                    }
                }), [e, r]), c = e && Number(a ? .diff) <= 0, d = "CLAIM" === t || "UNCLAIM" === t;
                return (0, i.useEffect)((() => {
                    c && d && l.invalidateQueries(I.t5.latestLossProtectionVoucher)
                }), [c, d, l]), (0, i.useEffect)((() => {
                    if (!e || c) return;
                    const t = setInterval((() => {
                        c || o((0, S.y)())
                    }), 1e3);
                    return () => clearInterval(t)
                }), [e, c]), !c && a ? (0, n.jsx)(u.A, {
                    className: "t-subtitle2 text-PrimaryText",
                    children: (0, n.jsx)(_.x, {
                        t: s,
                        i18nKey: "lossProtection-timer-time",
                        defaults: "Ends in <TimeLabel>{{days}}</TimeLabel> D <TimeLabel>{{hours}}</TimeLabel> : <TimeLabel>{{minutes}}</TimeLabel> : <TimeLabel>{{seconds}}</TimeLabel>",
                        values: {
                            days: a.days || 0,
                            hours: a.hours || 0,
                            minutes: a.minutes || 0,
                            seconds: a.seconds || 0
                        },
                        components: {
                            TimeLabel: (0, n.jsx)(u.A, {
                                className: "bg-[#F0B90833] py-[2px] px-[5px] rounded-[4px] w-[22px] h-[22px] mx-[4px] items-center justify-center"
                            })
                        }
                    })
                }) : null
            };
            var E = s("jM3e"),
                F = s("uoy8"),
                U = s("WjQj"),
                V = s("4frZ"),
                B = s("tM9B"),
                D = s("Gii1"),
                $ = s("gYIm"),
                H = "bannerTitle-lossProtection-description",
                R = "{{amount}} {{asset}} UM Futures Grid Loss Protection",
                O = "USDT",
                W = function(e) {
                    var t = (0, D.HH)().t,
                        s = (0, D.I7)(),
                        r = (0, d.X)({
                            currency: s
                        }),
                        o = r.data,
                        l = r.isLoading,
                        a = (({
                            currency: e
                        }) => {
                            const {
                                data: t,
                                isLoading: s
                            } = (0, d.X)({
                                currency: e
                            }), [r, n, o] = (0, P.z)(w.p.lossProtectionProcess, {}), l = "EXPIRED" === t ? .status, a = "UNCLAIM" === t ? .status && Boolean(t ? .groupCurrentCount) && Boolean(t ? .groupMaxCount) && t ? .groupCurrentCount === t ? .groupMaxCount, c = (0, i.useMemo)((() => {
                                if (!t || !o || s) return {
                                    isLoading: !o || s,
                                    isShowNotifyPopup: !1,
                                    isClaimed: !1,
                                    isExpired: !1,
                                    isUnClaimable: !1,
                                    isShowFirstTimeFinished: !1,
                                    isShowFirstTimeExpired: !1,
                                    isShowFirstTimeUnClaimable: !1
                                };
                                const {
                                    voucherId: e
                                } = t || {};
                                return {
                                    isLoading: s,
                                    isShowNotifyPopup: "UNCLAIM" === t.status,
                                    isClaimed: "CLAIM" === t.status,
                                    isExpired: l,
                                    isUnClaimable: a,
                                    isShowFirstTimeFinished: "FINISH" === t.status && "FINISH" !== r ? .[e],
                                    isShowFirstTimeExpired: l && "EXPIRED" !== r ? .[e] && "UNCLAIMABLE" !== r ? .[e],
                                    isShowFirstTimeUnClaimable: a && "EXPIRED" !== r ? .[e] && "UNCLAIMABLE" !== r ? .[e]
                                }
                            }), [r, t, o, l, s, a]), u = t ? .voucherId;
                            return (0, i.useEffect)((() => {
                                const e = () => {
                                    if (u && o) {
                                        const e = c.isShowFirstTimeExpired ? "EXPIRED" : c.isShowFirstTimeUnClaimable ? "UNCLAIMABLE" : c.isShowFirstTimeFinished ? "FINISH" : null;
                                        e && n({ ...r,
                                            [u]: e
                                        })
                                    }
                                };
                                return window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e)
                            }), [r, u, o, c.isShowFirstTimeExpired, c.isShowFirstTimeFinished, c.isShowFirstTimeUnClaimable, n]), c
                        })({
                            currency: s
                        }),
                        u = a.isShowFirstTimeExpired,
                        x = a.isLoading,
                        p = a.isShowFirstTimeUnClaimable,
                        h = a.isShowFirstTimeFinished,
                        f = a.isUnClaimable,
                        y = (0, m.nE)(),
                        b = L({
                            STATIC_HOST: $.K5,
                            featureFolder: "futures-grid",
                            name: "loss-protection-voucher.png"
                        });
                    return {
                        voucherConfig: (0, i.useMemo)((function() {
                            if (x || l || !o) return null;
                            var s = (0, V.kf)(o.voucherAmount) ? (0, B.jL)(o.voucherAmount, 0, 1) : $.Vs;
                            switch (o.status) {
                                case "UNCLAIM":
                                    return f ? p ? {
                                        title: t(H, {
                                            defaultValue: R,
                                            amount: s,
                                            asset: O
                                        }),
                                        footerPrefix: (0, n.jsx)(c.Ay, {
                                            className: "text-DisabledText t-subtitle2 md:t-subtitle6 truncate",
                                            children: t("lossProtection-voucher-Unclaimable", {
                                                defaultValue: "Unclaimable, all vouchers have been claimed"
                                            })
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        trackType: "unclaimable"
                                    } : null : {
                                        title: t(H, {
                                            defaultValue: R,
                                            amount: s,
                                            asset: O
                                        }),
                                        footerPrefix: (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsx)(c.Ay, {
                                                className: "text-TextLink t-subtitle2 md:t-subtitle6 cursor-pointer",
                                                children: t("claimNow", {
                                                    defaultValue: "Claim Now"
                                                })
                                            })
                                        }),
                                        subContent: (0, n.jsx)(k, {
                                            expiredTime: null === o || void 0 === o ? void 0 : o.expiredTime,
                                            status: null === o || void 0 === o ? void 0 : o.status
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        onClick: function() {
                                            y("$WebClick", {
                                                module: "banner",
                                                $element_id: "claim_voucher"
                                            }), e("LossProtectionRule")
                                        },
                                        trackType: "claim_now"
                                    };
                                case "CLAIM":
                                    return {
                                        title: t("bannerTitle-lossProtection-description", {
                                            defaultValue: R,
                                            amount: s,
                                            asset: O
                                        }),
                                        footerPrefix: (0, n.jsx)(U.Z, {
                                            path: (0, E.fc)({
                                                symbol: F.cb
                                            }, ""),
                                            className: "text-TextLink t-subtitle2 md:t-subtitle6 cursor-pointer no-underline",
                                            children: t("createNow", {
                                                defaultValue: "Create Now"
                                            })
                                        }),
                                        subContent: (0, n.jsx)(k, {
                                            expiredTime: null === o || void 0 === o ? void 0 : o.expiredTime,
                                            status: null === o || void 0 === o ? void 0 : o.status
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        onClick: function() {
                                            y("$WebClick", {
                                                module: "banner",
                                                $element_id: "create_now"
                                            })
                                        },
                                        trackType: "create_now"
                                    };
                                case "EXPIRED":
                                    return u ? {
                                        title: t(H, {
                                            defaultValue: R,
                                            amount: s,
                                            asset: O
                                        }),
                                        footerPrefix: (0, n.jsx)(c.Ay, {
                                            className: "text-DisabledText t-subtitle2 md:t-subtitle6",
                                            children: t("expired", {
                                                defaultValue: "Expired"
                                            })
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        trackType: "expired"
                                    } : null;
                                case "INUSING":
                                    return {
                                        title: t("bannerTitle-lossProtection-used", {
                                            defaultValue: "Your Futures Grid is Under Loss Protection."
                                        }),
                                        footerPrefix: (0, n.jsx)(c.Ay, {
                                            className: "text-DisabledText t-subtitle2 md:t-subtitle6",
                                            children: t("inUse", {
                                                defaultValue: "In use"
                                            })
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        trackType: "in_use"
                                    };
                                case "FINISH":
                                    return h ? {
                                        title: t("bannerTitle-lossProtection-used", {
                                            defaultValue: "Your Futures Grid is Under Loss Protection."
                                        }),
                                        footerPrefix: (0, n.jsx)(c.Ay, {
                                            className: "text-DisabledText t-subtitle2 md:t-subtitle6 truncate",
                                            children: t("lossProtection-settled", {
                                                defaultValue: "Loss Protection Settled"
                                            })
                                        }),
                                        id: 999,
                                        imageUrl: b,
                                        trackType: "settled"
                                    } : null;
                                default:
                                    return null
                            }
                        }), [b, x, u, h, p, f, l, e, t, y, o]),
                        isReady: !l && !x
                    }
                },
                X = s("iKvg"),
                Y = s("qoEP"),
                z = s("mguP"),
                G = s("HKzA"),
                q = s("bznE"),
                K = s("bt5r"),
                Q = s("iy8n");
            const Z = ({
                onClose: e,
                onSuccess: t,
                voucherData: s
            }) => {
                const {
                    t: r
                } = (0, M.Y_)(), {
                    mutate: o,
                    isLoading: l
                } = (({
                    onSuccess: e
                }) => (0, b.useMutation)((e => (0, Q.Sm)(e).then((e => {
                    if (!e.success) throw e;
                    return e
                }))), {
                    onSuccess: e
                }))({
                    onSuccess: t
                }), a = (0, m.nE)();
                return (0, i.useEffect)((() => {
                    a && a("PopupView", {
                        module: "loss_protection_rules"
                    })
                }), [a]), (0, n.jsxs)(G.Ay, {
                    enablePortal: !0,
                    responsive: !0,
                    visible: !0,
                    onClose: e,
                    modalSize: "small",
                    children: [(0, n.jsx)(G.Ay.Header, {
                        showNext: !0,
                        onNextClick: () => {
                            a("$WebClick", {
                                module: "loss_protection_rules",
                                $element_id: "close_rule_pop_up"
                            }), e()
                        },
                        children: r("lossProtection-rule-title", {
                            defaultValue: "Loss Protection Rules"
                        })
                    }), (0, n.jsx)(G.Ay.Content, {
                        className: "max-h-full pt-0",
                        children: (0, n.jsxs)("ol", {
                            className: "text-PrimarText t-subtitle2 pl-[24px]",
                            children: [(0, n.jsx)("li", {
                                children: r("lossProtection-rule-list1", {
                                    defaultValue: "Only verified users who click \u201cClaim\u201d are eligible."
                                })
                            }), (0, n.jsx)("li", {
                                children: r("lossProtection-rule-list2", {
                                    defaultValue: "This voucher covers losses up to the specified amount for the first UM Futures Grid created after claiming, based on the grid's total PNL."
                                })
                            }), (0, n.jsx)("li", {
                                children: r("lossProtection-rule-list3", {
                                    defaultValue: "Protection covered amount will be distributed to the main spot account. Distribution records will be reflected in distribution history."
                                })
                            }), (0, n.jsx)("li", {
                                children: (0, n.jsx)(_.x, {
                                    t: r,
                                    i18nKey: "lossProtection-rule-list4",
                                    defaults: "Additional promotion <termsLink>terms and conditions </termsLink> apply",
                                    components: {
                                        termsLink: (0, n.jsx)(U.Z, {
                                            path: K.TPI.LOSS_PROTECTION_TERMS,
                                            target: "_blank",
                                            className: "text-TextLink cursor-pointer inline no-underline",
                                            onClick: () => {
                                                K.b8R && window.open(K.TPI.LOSS_PROTECTION_TERMS)
                                            }
                                        })
                                    }
                                })
                            })]
                        })
                    }), (0, n.jsx)(G.Ay.Footer, {
                        children: (0, n.jsx)(q.A, {
                            className: "w-full",
                            sz: "large",
                            onClick: () => {
                                a("$WebClick", {
                                    module: "loss_protection_rules",
                                    $element_id: "agree_rule"
                                }), o({
                                    groupId: s.groupId,
                                    voucherId: s.voucherId
                                })
                            },
                            loading: l,
                            children: r("I-agree", "I Agree")
                        })
                    })]
                })
            };
            var J = s("y2tO"),
                ee = s("PdJH"),
                te = s.n(ee),
                se = s("ajAa"),
                re = s.n(se),
                ne = s("0Um/"),
                ie = s("OZ3C"),
                oe = s("aCvq"),
                le = s("AkRh"),
                ae = s("ENMH"),
                ce = s("X6af");
            const ue = () => (0, n.jsx)(c.Ay, {
                    className: "w-[1px] bg-Line mx-[4px] inline-block my-[6px]"
                }),
                de = ({
                    symbol: e,
                    trailingText: t,
                    copyCountTag: s,
                    baseAsset: r,
                    quoteAsset: i
                }) => {
                    const o = (0, oe.a)(e, `${r}/${i}`);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(c.Ay, {
                            className: "mb-[2px]",
                            children: (0, n.jsx)(c.Ay, {
                                className: "t-subtitle2 text-PrimaryText",
                                children: o
                            })
                        }), (0, n.jsxs)(c.Ay, {
                            className: "flex flex-wrap w-full",
                            children: [t && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: t
                                }), " ", (0, n.jsx)(ue, {})]
                            }), s]
                        })]
                    })
                },
                me = ({
                    symbol: e,
                    copyCountTag: t,
                    trailingText: s,
                    direction: r,
                    leverage: o
                }) => {
                    const {
                        symbolDisplay: l,
                        shortContractTypeI18n: a
                    } = (0, ae.Z)(e), {
                        t: u
                    } = (0, M.Y_)(), d = (0, i.useMemo)((() => r ? (0, ce.DG)(r) : null), [r]), m = d ? (0, n.jsxs)("span", {
                        className: h()({
                            "text-Buy": "LONG" === d,
                            "text-Sell": "SHORT" === d
                        }),
                        children: [u(d, {
                            defaultValue: d
                        }), o && ` ${o}x`]
                    }) : null;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(c.Ay, {
                            className: "mb-[2px]",
                            children: (0, n.jsx)(c.Ay, {
                                className: "t-subtitle2 text-PrimaryText",
                                children: l
                            })
                        }), (0, n.jsxs)(c.Ay, {
                            className: "flex flex-wrap w-full",
                            children: [a && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: a
                                }), " ", (0, n.jsx)(ue, {})]
                            }), s && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: s
                                }), " ", (0, n.jsx)(ue, {})]
                            }), m && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: m
                                }), " ", (0, n.jsx)(ue, {})]
                            }), t]
                        })]
                    })
                },
                xe = ({
                    strategyData: e,
                    copyCountTag: t
                }) => {
                    const {
                        strategyType: s,
                        symbol: r,
                        direction: i,
                        strategyParams: {
                            leverage: o,
                            trailingUp: l,
                            trailingDown: a,
                            baseAsset: u,
                            quoteAsset: d
                        }
                    } = e, m = (0, ce.HL)(s), x = (0, le.j)(l, a);
                    return (0, n.jsx)(c.Ay, {
                        className: "t-caption1 text-TertiaryText",
                        children: "futuresGrid" === m ? (0, n.jsx)(me, {
                            trailingText: x,
                            symbol: r,
                            leverage: o,
                            direction: i,
                            copyCountTag: t
                        }) : (0, n.jsx)(de, {
                            baseAsset: u,
                            quoteAsset: d,
                            copyCountTag: t,
                            trailingText: x,
                            symbol: r
                        })
                    })
                };
            var pe = s("8xSX"),
                he = s("Ynvp"),
                fe = s("sIut"),
                ye = s("Bdbj"),
                be = s("ovUV"),
                ve = s("Cw/n"),
                je = s("JloV"),
                ge = s("eS4v"),
                Te = s("+f5r"),
                Ce = s("8uRx"),
                Ne = s("NzjW");
            const Ae = ({
                onButtonClick: e,
                data: t,
                sortBy: s,
                getParamsConfig: r,
                isRenderTip: o
            }) => {
                const [l, a] = (0, i.useState)(!1), [u, d] = (0, i.useState)(!1), [m, x] = (0, i.useState)(!1), [p, h] = (0, i.useState)(!1), [f, y] = (0, i.useState)(!1), [b, v] = (0, i.useState)(!1), [j, g] = (0, i.useState)(!1), [T, C] = (0, i.useState)(!1), {
                    t: N
                } = (0, M.Y_)(), {
                    symbol: A,
                    minInvestment: w
                } = t, P = (0, ne.i)(A), L = "pnl" === s, _ = (0, ge.t)(A), S = (0, i.useMemo)((() => ({
                    pnl: {
                        title: `${N("pnl",{defaultValue:"PNL"})} (${_})`,
                        value: (0, n.jsx)(pe.Y, {
                            className: "truncate max-w-[150px]",
                            enabledProfitColor: L,
                            symbol: A,
                            pnl: t.pnl,
                            precision: P
                        })
                    },
                    roi: {
                        title: N("roi", {
                            defaultValue: "ROI"
                        }),
                        value: (0, n.jsx)(he.$, {
                            className: "truncate max-w-[150px]",
                            enabledProfitColor: !L,
                            roi: Number(t.roi)
                        })
                    }
                })), [t.pnl, t.roi, L, A, N, _, P]), I = L ? S.pnl : S.roi, k = L ? N(ye.so, ye._6) : N(ye.EW, ye.Kg), E = L ? S.roi : S.pnl, F = L ? N(ye.EW, ye.Kg) : N(ye.so, ye._6), U = o && u, V = o && p, D = o && f, $ = b, H = o && j, R = o && T, O = o && m && !u && !p && !f && !b && !j && !T && !l;
                return (0, n.jsx)(be.B, {
                    data: t,
                    enablePortal: !1,
                    getConfigList: r,
                    open: O,
                    children: (0, n.jsxs)(c.Ay, {
                        className: "flex flex-col p-[12px] gap-y-[12px] w-full !min-w-[310px] bg-BasicBg border border-solid border-Line hover:border-PrimaryYellow cursor-pointer text-PrimaryText rounded-[16px]",
                        onClick: e,
                        onMouseEnter: () => x(!0),
                        onMouseLeave: () => x(!1),
                        children: [(0, n.jsx)(ie.n, {
                            left: (0, n.jsx)(xe, {
                                strategyData: t,
                                copyCountTag: (0, n.jsx)("div", {
                                    className: "flex inline-flex",
                                    onMouseEnter: () => a(!0),
                                    onMouseLeave: () => a(!1),
                                    children: (0, n.jsx)(Ne.B, {
                                        copyCount: t.copyCount
                                    })
                                })
                            }),
                            right: (0, n.jsx)("div", {
                                children: (0, n.jsx)(ve.A, {
                                    sz: "small"
                                })
                            })
                        }), (0, n.jsx)(ie.n, {
                            left: (0, n.jsxs)(c.Ay, {
                                className: "cursor-help",
                                onMouseOver: () => h(!0),
                                onMouseLeave: () => h(!1),
                                children: [(0, n.jsx)(be.B, {
                                    open: V,
                                    tip: k,
                                    children: (0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[4px]",
                                        children: I.title
                                    })
                                }), (0, n.jsx)(c.Ay, {
                                    className: "t-headline5 text-TextBuy",
                                    children: I.value
                                })]
                            }),
                            right: (0, n.jsx)(c.Ay, {
                                className: "h-[50px] w-[125px]",
                                children: (0, n.jsx)(Te.o, {
                                    data: t,
                                    sortBy: s
                                })
                            })
                        }), (0, n.jsxs)(c.Ay, {
                            className: "flex justify-between gap-x-[10px]",
                            children: [(0, n.jsx)(be.B, {
                                open: D,
                                tip: F,
                                showHelpCursor: !0,
                                children: (0, n.jsxs)(c.Ay, {
                                    onMouseEnter: () => y(!0),
                                    onMouseLeave: () => y(!1),
                                    children: [(0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] truncate max-w-[115px]",
                                        children: E.title
                                    }), (0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-PrimaryText",
                                        children: E.value
                                    })]
                                })
                            }), (0, n.jsx)(be.B, {
                                open: U,
                                tip: N(ye.Qo, {
                                    defaultValue: ye.m6
                                }),
                                showHelpCursor: !0,
                                children: (0, n.jsxs)(c.Ay, {
                                    onMouseEnter: () => d(!0),
                                    onMouseLeave: () => d(!1),
                                    children: [(0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] truncate max-w-[115px]",
                                        children: N("runtime", {
                                            defaultValue: "Runtime"
                                        })
                                    }), (0, n.jsx)(c.Ay, {
                                        className: "line-clamp-1",
                                        children: (0, n.jsx)(Ce.G, {
                                            className: "t-caption1",
                                            runningTime: t.runningTime
                                        })
                                    })]
                                })
                            }), (0, n.jsx)(be.B, {
                                open: H,
                                tip: N("min-investment-tooltip", {
                                    defaultValue: "The minimum investment amount needed to engage with this specific trading strategy."
                                }),
                                showHelpCursor: !0,
                                children: (0, n.jsxs)(c.Ay, {
                                    className: "w-full",
                                    onMouseEnter: () => g(!0),
                                    onMouseLeave: () => g(!1),
                                    children: [(0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] text-end truncate max-w-[115px]",
                                        children: N("min-investment", {
                                            defaultValue: "Min. Investment"
                                        })
                                    }), (0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-PrimaryText text-right  truncate max-w-[115px]",
                                        children: (0, n.jsx)(fe.Z, {
                                            minInvestment: w,
                                            data: {
                                                symbol: A
                                            }
                                        })
                                    })]
                                })
                            })]
                        }), (0, n.jsx)(ie.n, {
                            containerClassName: "items-end",
                            left: (0, n.jsxs)(c.Ay, {
                                onMouseEnter: () => C(!0),
                                onMouseLeave: () => C(!1),
                                children: [(0, n.jsx)(be.B, {
                                    open: R,
                                    tip: N("matched-trades-tooltip", "'Number of successfully matched trades (paired buy and sell orders) executed in the past 24 hours / since the bot's launch.'"),
                                    showHelpCursor: !0,
                                    children: (0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] truncate max-w-[250px]",
                                        children: N("popularCard-matchedCount", {
                                            defaultValue: "24H/Total Matched Trades"
                                        })
                                    })
                                }), (0, n.jsxs)(c.Ay, {
                                    className: "t-caption1 text-PrimaryText",
                                    children: [t.latestMatchedCount || 0, "/", t.matchedCount || 0]
                                })]
                            }),
                            right: (0, n.jsxs)(c.Ay, {
                                className: "cursor-help",
                                onMouseOver: () => v(!0),
                                onMouseLeave: () => v(!1),
                                children: [(0, n.jsx)(be.B, {
                                    open: $,
                                    tip: N(ye.hm, ye.ZP),
                                    children: (0, n.jsx)(c.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] text-end",
                                        children: N("popularCard-7DMDD", {
                                            defaultValue: "7D MDD"
                                        })
                                    })
                                }), (0, n.jsx)(c.Ay, {
                                    className: "t-caption1 text-PrimaryText text-end",
                                    children: (0, je.k)(t.sevenDayMdd) ? `${(0,B.jL)((0,B.lw)(t.sevenDayMdd,100),2)}%` : K.VsL
                                })]
                            })
                        })]
                    })
                })
            };
            var we = s("L7h2"),
                Pe = s("as/d"),
                Le = s("v76/");
            const _e = {
                    runningTimeMin: 604800,
                    runningTimeMax: 2592e3,
                    sort: "copyCount",
                    investmentMin: 0,
                    leverageMin: 10,
                    leverageMax: 20,
                    page: 1,
                    rows: 5,
                    strategyType: 2
                },
                Me = [],
                Se = ({
                    onClose: e,
                    onCopyClick: t,
                    onExploreMoreClick: s
                }) => {
                    const {
                        t: r
                    } = (0, M.Y_)(), o = (0, m.nE)(), {
                        usdt: l,
                        isFetching: a
                    } = (0, Pe.r)(), {
                        data: d,
                        isFetched: x
                    } = (({
                        options: e,
                        strategyType: t
                    }) => {
                        const s = (0, Le.n)(),
                            r = Boolean(s) && !1 !== e ? .enabled;
                        return (0, b.useQuery)([I.t5.topStrategyRecommendQueryParams, t], (async () => {
                            const {
                                data: e
                            } = await (0, Q.n)({
                                strategyType: t
                            });
                            return e
                        }), {
                            staleTime: 1 / 0,
                            cacheTime: 1 / 0,
                            ...e || {},
                            enabled: r
                        })
                    })({
                        strategyType: "FUTURE_GRID"
                    }), p = (0, i.useMemo)((() => {
                        if (!a && x) return { ..._e,
                            investmentMax: l,
                            ...d ? re()(d, te()) : {}
                        }
                    }), [x, a, d, l]), {
                        list: h = Me,
                        isFetched: f
                    } = (0, we._3)(p, {
                        enabled: Boolean(p)
                    }), y = (0, i.useMemo)((() => {
                        return e = h.length, Math.floor(Math.random() * e);
                        var e
                    }), [h.length]), v = h[y];
                    return (0, i.useEffect)((() => {
                        o && o("PopupView", {
                            module: "recommend_bots"
                        })
                    }), [o]), (0, n.jsxs)(G.Ay, {
                        enablePortal: !0,
                        responsive: !0,
                        visible: !0,
                        onClose: e,
                        modalSize: "small",
                        children: [(0, n.jsx)(G.Ay.Header, {
                            showNext: !0,
                            onNextClick: () => {
                                o("$WebClick", {
                                    module: "recommend_bots",
                                    $element_id: "close_recommend_pop_up"
                                }), e()
                            },
                            children: r("lossProtection-claimSuccessfully-title", {
                                defaultValue: "Claimed Successfully"
                            })
                        }), (0, n.jsx)(G.Ay.Content, {
                            className: "max-h-full pt-0",
                            children: !f || a ? (0, n.jsx)(u.A, {
                                className: "w-full justify-center",
                                children: (0, n.jsx)(J.A, {})
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(c.Ay, {
                                    className: "mb-[16px] t-subtitle1 text-PrimaryText",
                                    children: r("lossProtection-claimSuccessfully", {
                                        defaultValue: "You have successfully claimed your Loss Protection Voucher! Create a grid now."
                                    })
                                }), v && (0, n.jsx)(c.Ay, {
                                    className: "mb-[16px]",
                                    children: (0, n.jsx)(Ae, {
                                        onButtonClick: () => ((...e) => {
                                            o("$WebClick", {
                                                module: "recommend_bots",
                                                $element_id: "copy_recommend_bots"
                                            }), t(...e)
                                        })(v, p),
                                        data: v,
                                        sortBy: "roi",
                                        isRenderTip: !1
                                    })
                                }), (0, n.jsx)(c.Ay, {
                                    className: "t-subtitle1 text-TextLink cursor-pointer",
                                    onClick: () => {
                                        o("$WebClick", {
                                            module: "recommend_bots",
                                            $element_id: "explore_more_bots"
                                        }), s()
                                    },
                                    children: r("lossProtection-claimSuccessfully-exploreMore", {
                                        defaultValue: "Explore More Futures Grid Bots"
                                    })
                                })]
                            })
                        })]
                    })
                };
            var Ie = s("wIZF"),
                ke = s("TQvm");
            const Ee = function(e) {
                return o().createElement(ke.A, (0, Ie.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M9.822 3l-4.145 9.72h4.11L7.577 21 18.323 9.75h-5.126L17.494 3H9.822z",
                    fill: "currentColor"
                }))
            };
            var Fe = s("LLrz"),
                Ue = s("u4/q");
            const Ve = e => (0, n.jsx)(Fe.A, {
                    alignItems: "center",
                    justifyContent: "center",
                    ...e,
                    children: (0, n.jsx)(Ue.A, {})
                }),
                Be = ({
                    onClose: e,
                    onClick: t,
                    STATIC_HOST: s,
                    currency: r
                }) => {
                    const {
                        data: o,
                        isLoading: l
                    } = (0, d.X)({
                        currency: r
                    }), {
                        t: a
                    } = (0, M.Y_)(), {
                        groupMaxCount: x,
                        groupCurrentCount: p,
                        groupId: h,
                        status: f
                    } = o || {}, y = Boolean(h), b = y && Number(x) <= Number(p), v = o ? .voucherAmount ? (0, B.jL)(o ? .voucherAmount, 0, 1) : K.VsL, j = (0, m.nE)(), g = L({
                        STATIC_HOST: s,
                        featureFolder: "futures-grid",
                        name: "loss-protection-voucher.png"
                    });
                    return (0, i.useEffect)((() => {
                        j && j("PopupView", {
                            module: "claim_loss_protection"
                        })
                    }), [j]), (0, n.jsxs)(G.Ay, {
                        enablePortal: !0,
                        responsive: !0,
                        visible: !0,
                        onClose: e,
                        modalSize: "small",
                        children: [(0, n.jsx)(G.Ay.Header, {
                            showNext: !0,
                            onNextClick: () => {
                                j("$WebClick", {
                                    module: "claim_loss_protection",
                                    $element_id: "close_voucher_pop_up"
                                }), e()
                            }
                        }), (0, n.jsx)(G.Ay.Content, {
                            className: "max-h-full",
                            children: l ? (0, n.jsx)(Ve, {}) : (0, n.jsxs)(c.Ay, {
                                className: "space-y-[15px]",
                                children: [(0, n.jsx)(u.A, {
                                    className: "w-full justify-center",
                                    children: (0, n.jsx)(u.A, {
                                        className: "w-[96px] h-[96px] items-center",
                                        children: (0, n.jsx)(N.A, {
                                            src: g,
                                            className: "w-full h-full"
                                        })
                                    })
                                }), (0, n.jsx)(c.Ay, {
                                    className: "text-center t-headline5 text-PrimaryText ",
                                    children: a("lossProtection-notify-mainContent", {
                                        defaultValue: "Claim Your Loss Protection Voucher Worth {{ amount }} {{ asset }}",
                                        amount: v,
                                        asset: "USDT"
                                    })
                                }), (0, n.jsx)(c.Ay, {
                                    className: "t-body3 text-PrimaryText ",
                                    children: a("lossProtection-notify-subContent", {
                                        defaultValue: "Losses from the first UM Futures Grid created after claiming the voucher are covered."
                                    })
                                }), o ? .expiredTime && (0, n.jsx)(u.A, {
                                    className: "t-body3 text-PrimaryText",
                                    children: (0, n.jsx)(k, {
                                        expiredTime: o ? .expiredTime,
                                        status: f
                                    })
                                }), y && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsxs)(c.Ay, {
                                        className: "relative",
                                        children: [(0, n.jsx)(c.Ay, {
                                            className: "relative w-full rounded-[17px] bg-Line h-[4px] rounded-[17px]"
                                        }), (0, n.jsx)(c.Ay, {
                                            style: {
                                                width: Number(p) / Number(x) * 100 + "%"
                                            },
                                            className: "absolute bg-BtnBg h-[4px] top-0 rounded-[17px]"
                                        }), (0, n.jsx)(u.A, {
                                            style: {
                                                left: Number(p) / Number(x) * 100 - 2 + "%"
                                            },
                                            className: "w-[20px] h-[20px] absolute text-BtnBg items-start top-[-7px]",
                                            children: (0, n.jsx)(Ee, {
                                                className: "w-[20px] h-[20px]"
                                            })
                                        })]
                                    }), (0, n.jsxs)(u.A, {
                                        className: "t-body3",
                                        children: [(0, n.jsx)(c.Ay, {
                                            className: "text-PrimaryText",
                                            children: p
                                        }), (0, n.jsx)(c.Ay, {
                                            className: "text-TertiaryText",
                                            children: `/ ${x} ${a("lossProtection-notify-voucherLeft",{defaultValue:"vouchers left"})}`
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(G.Ay.Footer, {
                            children: (0, n.jsx)(q.A, {
                                className: "w-full",
                                sz: "large",
                                onClick: () => {
                                    j("$WebClick", {
                                        module: "claim_loss_protection",
                                        $element_id: "claim_voucher"
                                    }), t()
                                },
                                disabled: b,
                                children: a("Claim", "Claim")
                            })
                        })]
                    })
                };
            var De = s("pk/O"),
                $e = s("WjPW"),
                He = s("YZbU"),
                Re = function(e) {
                    var t = e.visibleModal,
                        s = void 0 === t ? "claimSuccessModal" : t,
                        o = e.setVisibleModal,
                        l = function() {
                            o("")
                        },
                        a = (0, D.I7)(),
                        c = (0, i.useState)(null),
                        u = c[0],
                        m = c[1],
                        x = (0, b.useQueryClient)(),
                        p = (0, i.useState)(void 0),
                        h = p[0],
                        f = p[1],
                        y = (0, z._)((0, $e.z)(He.p.strategyPoolTab, null), 2)[1],
                        v = (0, z._)((0, $e.z)(He.p.isLossProtectionNotifyShowedMap, {}), 3),
                        j = v[0],
                        g = v[1],
                        T = v[2],
                        C = (0, d.X)({
                            currency: a
                        }).data,
                        N = (C || {}).voucherId;
                    (0, i.useEffect)((function() {
                        T && N && !0 !== (null === j || void 0 === j ? void 0 : j[N]) && "UNCLAIM" === (null === C || void 0 === C ? void 0 : C.status) && o("LossProtectionNotify")
                    }), [j, T, N, null === C || void 0 === C ? void 0 : C.status, o]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: ["LossProtectionRule" === s && (0, n.jsx)(Z, {
                            voucherData: C,
                            onClose: l,
                            onSuccess: function() {
                                x.invalidateQueries(I.t5.latestLossProtectionVoucher), o("claimSuccessModal")
                            }
                        }), "claimSuccessModal" === s && (0, n.jsx)(Se, {
                            onClose: l,
                            onCopyClick: function(e) {
                                m(e), f("copyForm"), o("copyForm")
                            },
                            onExploreMoreClick: function() {
                                var e;
                                null === (e = document.getElementById(F.MI.BOT_MARKET_PLACE)) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth"
                                }), y("futuresGrid"), o("")
                            }
                        }), "copyForm" === s && u && (0, n.jsx)(De.b, {
                            openModuleType: h,
                            setOpenModuleType: f,
                            copyingStrategy: u,
                            onClose: l,
                            strategyType: "futuresGrid",
                            sortBy: "copyCount",
                            viewType: "cardView",
                            isLoading: !1
                        }), "LossProtectionNotify" === s && (0, n.jsx)(Be, {
                            onClose: function() {
                                g((0, Y._)((0, r._)({}, j), (0, X._)({}, N, !0))), o("")
                            },
                            onClick: function() {
                                g((0, Y._)((0, r._)({}, j), (0, X._)({}, N, !0))), o("LossProtectionRule")
                            },
                            STATIC_HOST: $.K5,
                            currency: a
                        })]
                    })
                },
                Oe = function() {
                    var e, t, s, o = (0, i.useState)(0),
                        l = o[0],
                        p = o[1],
                        N = (0, T.I)(),
                        w = (0, d.X)({
                            currency: N
                        }).data,
                        P = (0, m.nE)(),
                        L = function() {
                            var e = (0, b.useQuery)(j.t5.bannerList, (function() {
                                    return (0, v.m8)(g)
                                }), {
                                    notifyOnChangeProps: ["data"]
                                }),
                                t = e.data,
                                s = e.refetch,
                                r = e.error,
                                n = e.dataUpdatedAt;
                            return {
                                data: t,
                                isLoading: e.isFetching,
                                refetch: s,
                                error: r,
                                dataUpdatedAt: n
                            }
                        }(),
                        _ = (0, i.useMemo)((function() {
                            var e, t = null === L || void 0 === L || null === (e = L.data) || void 0 === e ? void 0 : e.data;
                            return t ? t.map((function(e) {
                                return {
                                    id: e.id,
                                    title: e.title,
                                    imageUrl: e.imageUrl,
                                    footerPrefix: e.ctaText ? (0, n.jsx)(c.Ay, {
                                        className: "truncate text-TextLink",
                                        children: e.ctaText
                                    }) : null,
                                    linkUrl: e.linkUrl,
                                    productLine: e.productLine
                                }
                            })) : []
                        }), [null === L || void 0 === L || null === (e = L.data) || void 0 === e ? void 0 : e.data]),
                        M = (0, x.L)({
                            currency: N,
                            isUseCache: !1
                        }).checkIsValidOption,
                        S = (0, i.useState)(""),
                        I = S[0],
                        k = S[1],
                        E = W(k),
                        F = E.voucherConfig,
                        U = E.isReady,
                        V = null === F || void 0 === F ? void 0 : F.trackType;
                    (0, i.useEffect)((function() {
                        V && P(C.ll.popupView, {
                            df_type: V,
                            module: "loss_protection_banner"
                        })
                    }), [P, V]);
                    var B = (0, i.useMemo)((function() {
                            if (!U) return [];
                            var e = a()(_.filter((function(e) {
                                return "all" === e.productLine || M(e.productLine)
                            })), "sort");
                            return F && e.unshift(F), e
                        }), [M, U, _, F]),
                        D = B.length;
                    if ((0, i.useEffect)((function() {
                            var e = setInterval((function() {
                                !F && D > 0 && p((function(e) {
                                    return (e + 1) % D
                                }))
                            }), 5e3);
                            return function() {
                                return clearInterval(e)
                            }
                        }), [D, F]), !(D > 0)) return null;
                    var $ = F && 0 === l && w && ("UNCLAIM" === w.status || "CLAIM" === w.status || "INUSING" === w.status),
                        H = (null === B || void 0 === B ? void 0 : B[l]) || {},
                        R = H.linkUrl,
                        O = H.onClick,
                        X = Boolean(R) || "function" === typeof O;
                    return (0, n.jsxs)(c.Ay, {
                        children: [(0, n.jsxs)(c.Ay, {
                            onClick: function() {
                                R && (P(C.ll.click, {
                                    pageName: C.b8.strategyLanding,
                                    df_source: C.b8.strategyLanding,
                                    $element_id: "strategy_banner_scroll",
                                    df_3: "".concat(l + 1, " (order)")
                                }), null === window || void 0 === window || window.open(R, "_blank")), "function" === typeof O && O()
                            },
                            className: h()("flex justify-center flex-col p-[24px] cursor-pointer rounded-[16px]", {
                                "bg-badgeBg border-[#F0B9084D] border-solid border-[1px]": $,
                                "bg-Vessel": !$,
                                "cursor-pointer": X
                            }),
                            children: [B.map((function(e, t) {
                                var s = l === t;
                                return (0, n.jsx)(c.Ay, {
                                    className: h()({
                                        block: s,
                                        hidden: !s
                                    }),
                                    children: (0, n.jsx)(A, (0, r._)({}, e))
                                }, e.id)
                            })), (0, n.jsxs)(u.A, {
                                className: "items-center w-full justify-between",
                                children: [(null === (t = B[l]) || void 0 === t ? void 0 : t.footerPrefix) && (0, n.jsx)(c.Ay, {
                                    className: "w-[80%]",
                                    children: null === (s = B[l]) || void 0 === s ? void 0 : s.footerPrefix
                                }), (0, n.jsxs)(u.A, {
                                    className: "items-center justify-end t-body3 w-full",
                                    onClick: function(e) {
                                        return e.stopPropagation()
                                    },
                                    children: [(0, n.jsxs)(c.Ay, {
                                        className: "t-body3 text-TertiaryText",
                                        children: [l + 1, " / ", D]
                                    }), (0, n.jsx)(c.Ay, {
                                        className: "h-[16px] w-[16px] text-IconNormal cursor-pointer",
                                        onClick: function(e) {
                                            if (l > 0) {
                                                var t = l - 1;
                                                p(t), P(C.ll.click, {
                                                    pageName: C.b8.strategyLanding,
                                                    df_source: C.b8.strategyLanding,
                                                    $element_id: "strategy_banner_card",
                                                    df_3: "".concat(t, " (order)")
                                                })
                                            } else p(D - 1);
                                            e.stopPropagation()
                                        },
                                        children: (0, n.jsx)(f.A, {
                                            className: "flex w-full h-full"
                                        })
                                    }), (0, n.jsx)(c.Ay, {
                                        className: "h-[16px] w-[16px] text-IconNormal cursor-pointer",
                                        onClick: function(e) {
                                            var t = l + 1;
                                            t < D ? (p(t), P(C.ll.click, {
                                                pageName: C.b8.strategyLanding,
                                                df_source: C.b8.strategyLanding,
                                                $element_id: "strategy_banner_card",
                                                df_3: "".concat(t, " (order)")
                                            })) : p(0), e.stopPropagation()
                                        },
                                        children: (0, n.jsx)(y.A, {
                                            className: "flex w-full h-full"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)(Re, {
                            visibleModal: I,
                            setVisibleModal: k
                        })]
                    })
                };
            const We = (0, i.memo)(Oe)
        },
        "7eNc": (e, t, s) => {
            var r = s("qZNm"),
                n = s("rffu");
            e.exports = function(e, t) {
                var s = -1,
                    i = n(e) ? Array(e.length) : [];
                return r(e, (function(e, r, n) {
                    i[++s] = t(e, r, n)
                })), i
            }
        },
        "6DXg": (e, t, s) => {
            var r = s("BL0e"),
                n = s("KtJ+"),
                i = s("hzJ1"),
                o = s("7eNc"),
                l = s("jFtt"),
                a = s("aCVe"),
                c = s("CWRf"),
                u = s("lCim"),
                d = s("HEV4");
            e.exports = function(e, t, s) {
                t = t.length ? r(t, (function(e) {
                    return d(e) ? function(t) {
                        return n(t, 1 === e.length ? e[0] : e)
                    } : e
                })) : [u];
                var m = -1;
                t = r(t, a(i));
                var x = o(e, (function(e, s, n) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++m,
                        value: e
                    }
                }));
                return l(x, (function(e, t) {
                    return c(e, t, s)
                }))
            }
        },
        "7mHb": (e, t, s) => {
            var r = s("KtJ+"),
                n = s("vaf0"),
                i = s("HrxU");
            e.exports = function(e, t, s) {
                for (var o = -1, l = t.length, a = {}; ++o < l;) {
                    var c = t[o],
                        u = r(e, c);
                    s(u, c) && n(a, i(c, e), u)
                }
                return a
            }
        },
        vaf0: (e, t, s) => {
            var r = s("iaNN"),
                n = s("HrxU"),
                i = s("hjQD"),
                o = s("bEdQ"),
                l = s("Sl8P");
            e.exports = function(e, t, s, a) {
                if (!o(e)) return e;
                for (var c = -1, u = (t = n(t, e)).length, d = u - 1, m = e; null != m && ++c < u;) {
                    var x = l(t[c]),
                        p = s;
                    if ("__proto__" === x || "constructor" === x || "prototype" === x) return e;
                    if (c != d) {
                        var h = m[x];
                        void 0 === (p = a ? a(h, x, m) : void 0) && (p = o(h) ? h : i(t[c + 1]) ? [] : {})
                    }
                    r(m, x, p), m = m[x]
                }
                return e
            }
        },
        jFtt: e => {
            e.exports = function(e, t) {
                var s = e.length;
                for (e.sort(t); s--;) e[s] = e[s].value;
                return e
            }
        },
        "9p+5": (e, t, s) => {
            var r = s("CMmH");
            e.exports = function(e, t) {
                if (e !== t) {
                    var s = void 0 !== e,
                        n = null === e,
                        i = e === e,
                        o = r(e),
                        l = void 0 !== t,
                        a = null === t,
                        c = t === t,
                        u = r(t);
                    if (!a && !u && !o && e > t || o && l && c && !a && !u || n && l && c || !s && c || !i) return 1;
                    if (!n && !o && !u && e < t || u && s && i && !n && !o || a && s && i || !l && i || !c) return -1
                }
                return 0
            }
        },
        CWRf: (e, t, s) => {
            var r = s("9p+5");
            e.exports = function(e, t, s) {
                for (var n = -1, i = e.criteria, o = t.criteria, l = i.length, a = s.length; ++n < l;) {
                    var c = r(i[n], o[n]);
                    if (c) return n >= a ? c : c * ("desc" == s[n] ? -1 : 1)
                }
                return e.index - t.index
            }
        },
        PdJH: e => {
            e.exports = function(e) {
                return void 0 === e
            }
        },
        y9kU: e => {
            e.exports = function(e) {
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
            }
        },
        ajAa: (e, t, s) => {
            var r = s("hzJ1"),
                n = s("y9kU"),
                i = s("M/D+");
            e.exports = function(e, t) {
                return i(e, n(r(t)))
            }
        },
        "M/D+": (e, t, s) => {
            var r = s("BL0e"),
                n = s("hzJ1"),
                i = s("7mHb"),
                o = s("Fa2J");
            e.exports = function(e, t) {
                if (null == e) return {};
                var s = r(o(e), (function(e) {
                    return [e]
                }));
                return t = n(t), i(e, s, (function(e, s) {
                    return t(e, s[0])
                }))
            }
        },
        "g6+1": (e, t, s) => {
            var r = s("W2cN"),
                n = s("6DXg"),
                i = s("mQkt"),
                o = s("4f1k"),
                l = i((function(e, t) {
                    if (null == e) return [];
                    var s = t.length;
                    return s > 1 && o(e, t[0], t[1]) ? t = [] : s > 2 && o(t[0], t[1], t[2]) && (t = [t[0]]), n(e, r(t, 1), [])
                }));
            e.exports = l
        }
    }
]);