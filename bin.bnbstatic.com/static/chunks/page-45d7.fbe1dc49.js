"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e4df954d-a578-553a-994d-da75d1ea82c7")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [3585], {
        VsEw: (e, t, a) => {
            a.d(t, {
                A: () => m
            });
            var i = a("M5j3"),
                r = a("gZfF"),
                n = a("N/Z2"),
                c = a("DTvD"),
                o = a.n(c),
                s = a("g80r"),
                l = a("6aZm"),
                d = a("LCuF"),
                g = a("mzSQ");

            function p() {
                var e = (0, n.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var f = (0, l.UF)("uikit-core", "Spinner"),
                _ = (0, c.forwardRef)((function(e, t) {
                    e.variant;
                    var a = e.itemsColor,
                        n = void 0 === a ? "primary" : a,
                        c = e.label,
                        s = (0, r.A)(e, ["variant", "itemsColor", "label"]);
                    f("");
                    var l = Array(4).fill(1).map((function(e, t) {
                        return "-".concat(t / 10, "s")
                    })).reverse();
                    return o().createElement(d.A, (0, i.A)({
                        ref: t
                    }, s, {
                        __css: {
                            display: "flex",
                            width: "30px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }), c && o().createElement(g.A, null, c), l.map((function(e, t) {
                        return o().createElement(v, {
                            key: t,
                            delay: e,
                            color: n
                        })
                    })))
                })),
                u = (0, s.keyframes)(p()),
                v = function(e) {
                    var t = e.delay,
                        a = e.color;
                    return o().createElement(d.A, {
                        __css: {
                            backgroundColor: a,
                            height: "100%",
                            width: "3px",
                            animation: "".concat(u, " 1.2s infinite ease-in-out"),
                            animationDelay: t
                        }
                    })
                };
            _.displayName = "Spinner";
            const m = _
        },
        mzSQ: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var i = a("DTvD"),
                r = a.n(i),
                n = a("6aZm"),
                c = a("LCuF"),
                o = (0, n.UF)("uikit-core", "VisuallyHidden");
            const s = function(e) {
                var t = e.children;
                return o(""), r().createElement(c.A, {
                    as: "span",
                    __css: {
                        border: "0px",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        height: "1px",
                        width: "1px",
                        margin: "-1px",
                        padding: "0px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        position: "absolute"
                    }
                }, t)
            }
        },
        aPDn: (e, t, a) => {
            a.d(t, {
                AX: () => S,
                Bm: () => u.Bm,
                Dw: () => V,
                E2: () => R,
                Eu: () => L,
                K8: () => m,
                S0: () => h,
                Wb: () => y,
                gY: () => K,
                iS: () => E,
                ki: () => w,
                lt: () => N,
                uQ: () => v,
                uf: () => b
            });
            var i, r, n, c, o, s, l, d, g, p, f = a("ezuS"),
                _ = a("aVXY"),
                u = a("4Kx8"),
                v = (i = {}, (0, f.A)(i, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-mobile-light-v2.png")), (0, f.A)(i, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-mobile-dark-v2.png")), r = {}, (0, f.A)(r, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-mobile-light-4.png")), (0, f.A)(r, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-mobile-dark-4.png")), r),
                m = (n = {}, (0, f.A)(n, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-mobile.png")), (0, f.A)(n, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-mobile-dark.png")), n),
                b = (c = {}, (0, f.A)(c, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-tablet.png")), (0, f.A)(c, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-tablet-dark.png")), c),
                y = (o = {}, (0, f.A)(o, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-desktop.png")), (0, f.A)(o, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-invitee-desktop-dark.png")), o),
                h = (s = {}, (0, f.A)(s, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-mobile.png")), (0, f.A)(s, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-mobile-dark.png")), l = {}, (0, f.A)(l, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-tablet.png")), (0, f.A)(l, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-tablet-dark.png")), d = {}, (0, f.A)(d, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-desktop.png")), (0, f.A)(d, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/landing-bg-inviter-desktop-dark.png")), "".concat(u.K5, "/static/images/activity/referral-lite/cpa/share-bg.png"), g = {}, (0, f.A)(g, u.CV.LIGHT, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/tip-bg.png")), (0, f.A)(g, u.CV.DARK, "".concat(u.K5, "/static/images/activity/referral-lite/cpa/tip-bg-dark.png")), "".concat(u.K5, "/static/images/activity/referral-lite/cpa/popup-congrat.png"), "".concat(u.K5, "/static/images/activity/referral-lite/cpa/popup-deposit.png"), "".concat(u.K5, "/static/images/activity/referral-lite/activity-over-mobile.png"), "".concat(u.K5, "/static/images/activity/referral-lite/activity-over-tablet.png"), "".concat(u.K5, "/static/images/activity/referral-lite/activity-over-desktop.png"), "".concat(u.K5, "/static/images/activity/referral-lite/card.png"), "".concat(u.Gf, "/static/images/referral-lite/ogImage.png"), {
                    INVITER: "INVITER",
                    INVITEE: "INVITEE",
                    NONE: "NONE"
                }),
                A = "BASIC",
                k = "INTERMEDIATE",
                C = "ADVANCED",
                I = "ADVANCED_PRO",
                T = (p = {}, (0, f.A)(p, A, 0), (0, f.A)(p, k, 10), (0, f.A)(p, C, 20), (0, f.A)(p, I, 30), [
                    [
                        ["en", "en-CA"], "en"
                    ],
                    [
                        ["en-NG", "ng"], "en-NG"
                    ],
                    [
                        ["en-IN", "in"], "en-IN"
                    ],
                    [
                        ["au", "en-AU"], "en-AU"
                    ],
                    [
                        ["es", "es-ES"], "es-ES"
                    ],
                    [
                        ["es-LA", "es-MX", "es-AR"], "es-LA"
                    ],
                    [
                        ["cn", "zh-CN"], "zh-CN"
                    ],
                    [
                        ["tw", "zh-TW", "zh-HK", "zh-TC"], "zh-TW"
                    ],
                    [
                        ["ph", "fil"], "fp-PH"
                    ],
                    [
                        ["fr", "fr-FR"], "fr-FR"
                    ],
                    [
                        ["de", "de-DE"], "de-DE"
                    ],
                    [
                        ["id", "id-ID"], "id-ID"
                    ],
                    [
                        ["it", "it-IT"], "it-IT"
                    ],
                    [
                        ["ja", "ja-JP"], "ja-JP"
                    ],
                    [
                        ["ko", "kr", "ko-KR"], "ko-KR"
                    ],
                    [
                        ["pl", "pl-PL"], "pl-PL"
                    ],
                    [
                        ["nl", "nl-NL"], "nl-NL"
                    ],
                    [
                        ["br", "pt", "pt-BR"], "pt-BR"
                    ],
                    [
                        ["ro", "ro-RO"], "ro-RO"
                    ],
                    [
                        ["ru", "ru-RU"], "ru-RU"
                    ],
                    [
                        ["th", "th-TH"], "th-TH"
                    ],
                    [
                        ["tr", "tr-TR"], "tr-TR"
                    ],
                    [
                        ["uk-UA", "ua"], "uk-UA"
                    ],
                    [
                        ["vi", "vn", "vi-VN"], "vi-VN"
                    ],
                    [
                        ["cs", "cs-CZ"], "cs-CZ"
                    ],
                    [
                        ["he", "he-IL"], "he-IL"
                    ],
                    [
                        ["bg", "bg-BG"], "bg-BG"
                    ],
                    [
                        ["lv", "lv-LV"], "lv-LV"
                    ],
                    [
                        ["bn", "bn-BD"], "bn-BD"
                    ],
                    [
                        ["sv", "sv-SE"], "sv-SE"
                    ],
                    [
                        ["el"], "el-GR"
                    ],
                    [
                        ["sk"], "sk-SK"
                    ],
                    [
                        ["sl"], "sl-SI"
                    ],
                    [
                        ["ur"], "ur-PK"
                    ],
                    [
                        ["fi"], "fi-FI"
                    ],
                    [
                        ["no"], "no-NO"
                    ],
                    [
                        ["hi"], "hi-IN"
                    ],
                    [
                        ["hu"], "hu-HU"
                    ]
                ].reduce((function(e, t) {
                    var a = (0, _.A)(t, 2),
                        i = a[0],
                        r = a[1];
                    return i.forEach((function(t) {
                        e[t] = r
                    })), e
                }), {})),
                D = ["bg-BG", "bn-BD", "cs-CZ", "el-GR", "en", "es-ES", "es-LA", "fi-FI", "fp-PH", "fr-FR", "id-ID", "it-IT", "ja-JP", "lv-LV", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sl-SI", "sv-SE", "th-TH", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-HK", "zh-TW"],
                L = function(e) {
                    var t = e;
                    return D.includes(t) || (t = T[e] || e), D.includes(t) || (t = "en"), "".concat(u.Gf, "/images/referral-lite/cpa/").concat(t, "-ogImage.png")
                },
                R = {
                    activityRules: {
                        link: function() {
                            return "/support/faq/introduction-to-the-binance-referral-program-d10f95a5ac8847bdb6f422a26921745d"
                        }
                    },
                    register: {
                        deepLink: "bnc://app.binance.com/setting/register"
                    },
                    buyCrypto: {
                        lite: "bnc://app.binance.com/trade/trade?at=ocbs&action=BUY",
                        web: {
                            fiatDeposit: function() {
                                return "/fiat/deposit/EUR"
                            },
                            fiatTrading: function() {
                                return "/buy-sell-crypto?channel=hzBankcard&fiat=EUR"
                            },
                            p2pTrading: function(e) {
                                var t = e.rootDomain;
                                return "https://p2p.".concat(t, "/")
                            }
                        },
                        pro: {
                            fiatDeposit: "bnc://app.binance.com/funds/fiatDeposit?asset=EUR",
                            fiatTrading: "bnc://app.binance.com/trade/trade?at=ocbs",
                            p2pTrading: "bnc://app.binance.com/trade/trade?at=fiat"
                        }
                    }
                },
                K = 100,
                w = "USD",
                E = {
                    TabLite: "cpa_referral_main_page_cpa_tab",
                    TabStandard: "cpa_referral_main_page_standard_tab",
                    InviteFriends: "cpa_referral_main_page_invite_friends",
                    MainCopyReferralId: "cpa_referral_main_page_referral_id",
                    MainCopyReferralLink: "cpa_referral_main_page_referral_link",
                    ShareCopyReferralId: "cpa_referral_share_referral_id",
                    ShareCopyReferralLink: "cpa_referral_share_referral_link",
                    DownloadPoster: "cpa_referral_share_download",
                    SharePoster: "cpa_referral_share_share",
                    DailyShare: "CPA_share_bonus_share_now",
                    RemindAll: "cpa_referral_main_page_remind_all",
                    LimitedTabView: "referral_limited_tab_view",
                    StandardTabView: "referral_standard_tab_view",
                    LimitedTab: "referral_limited_tab",
                    StandardTab: "referral_standard_tab",
                    ReferButton: "refer_button",
                    CopyReferralCode: "copy_referral_code",
                    CopyReferralLink: "copy_referral_link",
                    FAQ: "faq",
                    TotalIncomeIcon: "total_income_icon",
                    TaskCompletedIcon: "task_completed_icon",
                    HistoryDataEntrance: "history_data_entrance",
                    HistoryAllEntrance: "history_all_entrance",
                    RemindButton: "remind_button",
                    RemindedButton: "reminded_button",
                    KycStatusButton: "kyc_status_button",
                    RiskIncomeButton: "risk_income_button",
                    TradeNowButton: "trade_now_button",
                    HistoryDatePicker: "history_date_picker",
                    TaskStatusDropDown: "task_status_dropdown",
                    ClaimNonLoggedView: "claim_non_logged_view",
                    ClaimLoggedView: "claim_logged_view",
                    ClaimGetStartButton: "claim_get_start_button",
                    ClaimTradingButton: "claim_trading_button",
                    ActivityOverNonLoggedView: "activity_over_non_logged_view",
                    ActivityOverLoggedView: "activity_over_logged_view",
                    ActivityOverNonLoggedCTA: "activity_over_non_logged_cta",
                    ActivityOverLoggedCTA: "activity_over_logged_cta",
                    CongratulationsCTA: "congratulations_cta",
                    TradingListDeposit: "trading_list_deposit",
                    TradingListBuyCrypto: "trading_list_buy_crypto",
                    TradingListP2P: "trading_list_p2p",
                    ActivityTitle: "activity_title",
                    ReferralCodeContainer: "referral_code_container",
                    ReferralLinkContainer: "referral_link_container",
                    ActivityRulesContainer: "activity_rules_container",
                    ReferralLiteDataContainer: "referral_lite_data_container",
                    InviteeTaskStatusAll: "invitee_task_status_all",
                    InviteeTaskStatusSuccess: "invitee_task_status_success",
                    InviteeTaskStatusPending: "invitee_task_status_pending"
                },
                S = "CPA",
                V = function(e) {
                    return "".concat(u.K5, "/static/images/activity/referral-lite/cpa/").concat(e)
                },
                N = {
                    all: "ALL",
                    fourteenDays: "fourteenDays",
                    sevenDays: "sevenDays",
                    sixMonths: "sixMonths",
                    thirtyDays: "thirtyDays",
                    thisMonth: "THIS_MONTH",
                    thisWeek: "THIS_WEEK",
                    today: "today",
                    yesterday: "yesterday"
                }
        },
        "4WlX": (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var i = a("xSa8"),
                r = a("dn+i");
            const n = function() {
                var e = (0, r.Rm)().ssrUserStatus,
                    t = (0, i.b)(),
                    a = t.isLoggedIn,
                    n = t.isLoading,
                    c = "boolean" === typeof(null === e || void 0 === e ? void 0 : e.isLogin);
                return {
                    isLoggedIn: c ? null === e || void 0 === e ? void 0 : e.isLogin : a,
                    isLoading: !c && n
                }
            }
        },
        LFbj: (e, t, a) => {
            a.d(t, {
                A: () => k
            });
            var i = a("BK7R"),
                r = a("QUKP"),
                n = a("jg1C"),
                c = (a("DTvD"), a("OFK0")),
                o = a("Srb9"),
                s = a("vpUY"),
                l = a("pA+i"),
                d = a("C6y2"),
                g = a("VsEw"),
                p = a("LCuF"),
                f = a("aPDn"),
                _ = a("xDQ+"),
                u = a("4WlX"),
                v = a("Ni9m"),
                m = function() {
                    return (0, n.jsx)(d.A, {
                        className: "h-[70vh] justify-center items-center",
                        children: (0, n.jsx)(g.A, {})
                    })
                },
                b = (0, c.A)((function() {
                    return Promise.all([a.e(5994), a.e(1950), a.e(608), a.e(4630), a.e(9316)]).then(a.bind(a, "iNEO"))
                }), {
                    webpack: function() {
                        return ["iNEO"]
                    },
                    ssr: !0,
                    loading: m
                }),
                y = (0, c.A)((function() {
                    return Promise.all([a.e(7547), a.e(5994), a.e(1950), a.e(608), a.e(4630), a.e(1990), a.e(7478), a.e(6157), a.e(536)]).then(a.bind(a, "mdhG"))
                }), {
                    webpack: function() {
                        return ["mdhG"]
                    },
                    ssr: !0,
                    loading: m
                }),
                h = function(e) {
                    var t = e.togetherInfo;
                    return (0, n.jsx)(y, {
                        togetherInfo: t
                    })
                },
                A = function(e) {
                    var t = e.togetherInfo;
                    return (0, n.jsxs)(p.A, {
                        children: [(0, n.jsx)(p.A, {
                            className: "mobile:hidden",
                            children: (0, n.jsx)(b, {})
                        }), (0, n.jsx)(p.A, {
                            className: "notMobile:hidden",
                            children: (0, n.jsx)(y, {
                                togetherInfo: t
                            })
                        })]
                    })
                };
            const k = function() {
                var e = (0, o.L)(),
                    t = e.metaData,
                    a = e.origin,
                    c = e.path,
                    d = e.host,
                    g = e.linkData,
                    p = e.togetherInfo,
                    m = e.staticTheme,
                    b = e.activityId,
                    y = e.activityInfo,
                    k = (0, s.S)().isHybrid,
                    C = (0, u.A)().isLoggedIn,
                    I = (0, l.Q)().isMobile,
                    T = (0, _.A)().t,
                    D = T("referral-cpa-seo-title"),
                    L = T("referral-cpa-seo-description", {
                        amount: f.gY,
                        asset: f.ki
                    }),
                    R = !I;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(v.A, (0, r.A)((0, i.A)({
                        withHeader: !k,
                        withFooter: R,
                        metaData: (0, r.A)((0, i.A)({}, t), {
                            title: D,
                            description: L,
                            keywords: T("main-seo-keywords") || t.keywords
                        }),
                        linkData: g,
                        origin: a,
                        path: c,
                        host: d,
                        withChat: !1,
                        withCountryRestriction: !0
                    }, m ? {
                        theme: m
                    } : {}), {
                        children: C ? (0, n.jsx)(h, {
                            togetherInfo: p,
                            activityId: b,
                            activityInfo: y
                        }) : (0, n.jsx)(A, {
                            togetherInfo: p
                        })
                    }))
                })
            }
        },
        o98L: (e, t, a) => {
            a.d(t, {
                default: () => i.A
            });
            var i = a("LFbj")
        }
    }
]);
//# debugId=e4df954d-a578-553a-994d-da75d1ea82c7