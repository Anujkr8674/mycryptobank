"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [5322], {
        "/YzY": (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n("xqbL"),
                r = n.n(o),
                i = n("0nCq"),
                l = n("1Gwf");
            const c = e => {
                const t = (0, i.x)(),
                    {
                        path: n,
                        subDomain: o,
                        className: c,
                        ...d
                    } = e,
                    {
                        pathPrefix: u,
                        level2Domain: m
                    } = t || {};
                return (0, s.useMemo)((() => !!u && (!/^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(n) && !(o && !m))), [m, n, u, o]) ? (0, a.jsx)(l.A, {
                    path: n,
                    subDomain: o,
                    className: r()("f-link", c),
                    ...d
                }) : (0, a.jsx)("a", {
                    href: n,
                    className: r()("f-link", c),
                    ...d
                })
            }
        },
        oGso: (e, t, n) => {
            n.d(t, {
                E: () => r,
                S: () => i
            });
            var a = n("4hgs"),
                s = n("I7FC"),
                o = n("A4nT");
            const r = ({
                    enabled: e
                } = {
                    enabled: !0
                }) => {
                    const {
                        data: t
                    } = (0, a.useQuery)(o.Bz.QUERY_PORTFOLIO_MARGIN_CONFIG, s.n, {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: e
                    });
                    return t ? .data || {}
                },
                i = ({
                    enabled: e
                } = {
                    enabled: !0
                }) => (0, a.useQuery)(o.Bz.QUERY_PORTFOLIO_MARGIN_CONFIG, s.n, {
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0,
                    enabled: e
                })
        },
        "v76/": (e, t, n) => {
            n.d(t, {
                n: () => o,
                z: () => s
            });
            var a = n("DTvD");
            const s = (0, a.createContext)(null),
                o = () => (0, a.useContext)(s)
        },
        cwOt: (e, t, n) => {
            n.d(t, {
                Gb: () => s,
                Gw: () => i,
                by: () => o
            });
            var a = n("DTvD");
            const s = (0, a.createContext)({}),
                o = () => {
                    const {
                        useIsPM2: e = () => !1
                    } = (0, a.useContext)(s);
                    return e()
                },
                r = {},
                i = () => {
                    const {
                        useCopyTradingPayload: e = () => r
                    } = (0, a.useContext)(s);
                    return e()
                }
        },
        "21Yo": (e, t, n) => {
            n.d(t, {
                NH: () => o,
                tY: () => s
            });
            var a = n("DTvD");
            const s = (0, a.createContext)({}),
                o = () => {
                    const {
                        isExistFutureAccount: e
                    } = (0, a.useContext)(s);
                    return e
                }
        },
        MR7J: (e, t, n) => {
            n.d(t, {
                Aj: () => m,
                IJ: () => d,
                Rz: () => p
            });
            var a = n("mXdx"),
                s = n("GIr8"),
                o = n("zX7I"),
                r = n("Vhyo"),
                i = n("bTgu"),
                l = n("DTvD"),
                c = n("NSeK");
            const d = (0, l.memo)((({
                onCancelButtonClick: e,
                onConfirmButtonClick: t,
                Icon: n,
                heading: i,
                body: c,
                cancelButtonText: d,
                confirmButtonText: u
            }) => {
                const m = (0, l.useMemo)((() => e && t ? (0, a.jsxs)(s.A, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    children: [(0, a.jsx)(o.A, {
                        colorStyle: "flatpure",
                        variant: "default",
                        width: "calc(50% - 4px)",
                        sz: "normal",
                        onClick: e,
                        children: d
                    }), (0, a.jsx)(o.A, {
                        width: "calc(50% - 4px)",
                        sz: "normal",
                        onClick: t,
                        children: u
                    })]
                }) : e || t ? (0, a.jsx)(o.A, {
                    width: "100%",
                    height: "40px",
                    onClick: t,
                    children: u
                }) : null), [e, t, d, u]);
                return (0, a.jsxs)(s.A, {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    children: ["function" === typeof n ? (0, a.jsx)(n, {
                        width: "80px",
                        height: "80px",
                        mb: "24px"
                    }) : n, i && (0, a.jsx)(r.A, {
                        variant: "headline6",
                        color: "t.primary",
                        mb: "8px",
                        children: i
                    }), (0, a.jsx)(r.A, {
                        variant: "body2",
                        color: "t.secondary",
                        mb: m ? "24px" : "0px",
                        children: c
                    }), m]
                })
            }));
            d.displayName = "IconHeadingBodyModalContent";
            const u = {
                    position: "relative",
                    padding: "24px",
                    width: ["298px", "360px"],
                    textAlign: "center"
                },
                m = {
                    cursor: "pointer",
                    color: "iconNormal",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    zIndex: 1
                },
                p = (0, l.memo)((({
                    showCloseButton: e = !1,
                    visible: t,
                    onClose: n,
                    ...s
                }) => (0, a.jsxs)(i.A, {
                    visible: t,
                    onMaskClick: () => {
                        n ? .()
                    },
                    sx: u,
                    children: [e && (0, a.jsx)(c.A, {
                        sx: m,
                        onClick: () => n ? .()
                    }), (0, a.jsx)(d, { ...s
                    })]
                })));
            p.displayName = "UpgradeQuizModal"
        },
        apwJ: (e, t, n) => {
            n.r(t), n.d(t, {
                PMDowngradeSuccessModal: () => c,
                default: () => d
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n("qdhY"),
                r = n("WUsl"),
                i = n("eXUJ"),
                l = n("MR7J");
            const c = (0, s.memo)((({
                visible: e,
                onClose: t,
                onConfirmButtonClick: n
            }) => {
                const {
                    getI18n: s
                } = (0, r._b)();
                return (0, a.jsx)(l.Rz, {
                    visible: e,
                    onClose: t,
                    Icon: o.A,
                    heading: s("PMDowngradeSuccessToastTitle", {
                        defaultValue: i.f.PMDowngradeSuccessToastTitle
                    }),
                    body: s("PMDowngradeSuccessToastDesc", {
                        defaultValue: i.f.PMDowngradeSuccessToastDesc
                    }),
                    confirmButtonText: s("OK", {
                        defaultValue: i.f.OK
                    }),
                    onConfirmButtonClick: n
                })
            }));
            c.displayName = "PMDowngradeSuccessModal";
            const d = c
        },
        OTBD: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => N
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("Vhyo"),
                i = n("GIr8"),
                l = n("ecWg"),
                c = n("Oug7");
            const d = {
                    minWidth: ["100%", 720],
                    maxWidth: ["100%", 720]
                },
                u = {
                    height: "100%",
                    py: 18,
                    px: 24,
                    bg: "modalBg",
                    borderRadius: "6px",
                    "& .main-container": {
                        height: ["100%", "auto"],
                        display: "flex",
                        flexDirection: "column"
                    },
                    "& .content-wrapper": {
                        display: "flex",
                        flex: 1,
                        minHeight: 0
                    },
                    "& .overflow-container": {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1
                    },
                    "& .modal-footer": {
                        justifyContent: "space-between",
                        alignItems: "center",
                        "& .tutorial": {
                            alignItems: "center",
                            color: "t.third",
                            cursor: "pointer",
                            ":hover": {
                                color: "t.primary"
                            }
                        }
                    }
                };
            var m = n("gLBh"),
                p = n("Djui"),
                g = n("vjpm"),
                h = n("WUsl");
            const x = {
                    my: "plus",
                    height: ["auto", 280],
                    overflowY: "auto",
                    overflowX: "hidden",
                    justifyContent: "space-between",
                    "&::-webkit-scrollbar": {
                        width: "3px",
                        height: "5px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        bg: "icons.close"
                    },
                    "& .step-wrap": {
                        position: "sticky",
                        top: 0,
                        width: ["100%", 352],
                        height: "100%",
                        overflow: "auto",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            bg: "transparent"
                        },
                        ".step-item": {
                            my: "ls",
                            cursor: "pointer"
                        },
                        ".step-title": {
                            mb: "ls",
                            alignItems: "center",
                            color: "t.yellow",
                            opacity: [1, .5]
                        },
                        ".active .step-title": {
                            color: "t.yellow",
                            opacity: 1
                        },
                        ".step-content": {
                            pl: 20,
                            mb: "minor",
                            maxHeight: ["unset", 0],
                            opacity: [1, 0],
                            visibility: ["visible", "hidden"],
                            transition: "max-height 0.2s ease-out, visibility 0.2s ease-out, opacity 0.2s linear",
                            ".step-desc": {
                                color: "t.primary",
                                "& > a": {
                                    color: "t.primary"
                                }
                            },
                            ".more-link": {
                                display: "block",
                                mt: "xs",
                                color: "t.third"
                            }
                        },
                        ".active .step-content": {
                            opacity: 1,
                            visibility: "visible",
                            maxHeight: ["100%", 200]
                        }
                    },
                    "& .image-wrap": {
                        position: "relative",
                        display: ["none", "block"],
                        width: ["55%", 300],
                        textAlign: "right"
                    },
                    "& .img-item": {
                        pt: "minor",
                        mt: ["ls", 0],
                        pb: [0, 120],
                        ml: ["20px", 0],
                        "&:last-of-type": {
                            pb: 0
                        },
                        "&.mobile": {
                            display: ["block", "none", "none"]
                        },
                        "& img": {
                            position: "relative",
                            width: 280,
                            height: 280,
                            boxShadow: "elevation2",
                            borderRadius: "4px",
                            "&::after": {
                                position: "absolute",
                                content: "''",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "block",
                                bg: "bg5"
                            }
                        }
                    }
                },
                f = {
                    threshold: .3
                },
                M = ({
                    steps: e,
                    staticHost: t,
                    closeModal: n,
                    track: l,
                    children: c,
                    sx: d
                }) => {
                    const {
                        t: u
                    } = (0, h.ud)(), {
                        isMobile: M
                    } = (0, g.Q)(), [v, b] = (0, s.useState)(0), T = (0, s.useCallback)((e => {
                        const {
                            index: t = "0"
                        } = e.currentTarget.dataset;
                        b(Number(t)), l && l(`${Number(t)+1}`)
                    }), [l]), A = (0, s.useCallback)((() => o().Children.map(c, (t => o().cloneElement(t, {
                        steps: e,
                        closeModal: n,
                        activeIndex: v,
                        setActiveIndex: b,
                        track: l
                    })))), [v, c, e, n, l]);
                    (0, s.useEffect)((() => {
                        if (M) return;
                        const e = document.querySelector(`.img-item[data-index="${v}"]`);
                        e && e.scrollIntoView()
                    }), [M, v]), (0, s.useEffect)((() => {
                        if (M) return;
                        const e = document.querySelectorAll(".img-item"),
                            t = new window.IntersectionObserver((e => {
                                e.forEach((e => {
                                    ((e, t) => {
                                        const {
                                            target: n,
                                            isIntersecting: a,
                                            intersectionRatio: s
                                        } = e, o = n.childNodes[0];
                                        a && s > t.threshold && (b(Number(n.dataset.index)), o.src = o.dataset.src)
                                    })(e, f)
                                }))
                            }), f);
                        return e.forEach((e => t.observe(e))), () => {
                            t && t.disconnect()
                        }
                    }), [M]);
                    const y = (0, s.useMemo)((() => ({ ...x,
                        ...d,
                        ...M && {
                            height: "auto"
                        }
                    })), [M, d]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(i.A, {
                            className: "step-panel",
                            sx: y,
                            children: [(0, a.jsx)("div", {
                                className: "step-wrap",
                                children: e.map(((e, n) => {
                                    const {
                                        title: s,
                                        imgPath: o,
                                        hasLearnMore: l,
                                        learnMoreLink: c,
                                        learnMoreText: d
                                    } = e;
                                    let g = null;
                                    if ("desc" in e) {
                                        const {
                                            i18nKey: t,
                                            defaultValue: n,
                                            components: s,
                                            values: o
                                        } = e.desc || {};
                                        g = (0, a.jsx)(m.x, {
                                            t: u,
                                            i18nKey: `futures-trade-${t}`,
                                            defaults: n,
                                            components: s,
                                            values: o
                                        })
                                    } else g = e.descElement || null;
                                    return (0, a.jsxs)("div", {
                                        "data-index": n,
                                        className: "step-item" + (v === n ? " active" : ""),
                                        onClick: T,
                                        children: [(0, a.jsxs)(i.A, {
                                            className: "step-title",
                                            children: [(0, a.jsx)(r.A, {
                                                variant: "title6",
                                                mr: 10,
                                                children: n + 1
                                            }), (0, a.jsx)(r.A, {
                                                variant: "subtitle2",
                                                children: s
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "step-content",
                                            children: [(0, a.jsx)(r.A, {
                                                variant: "body2",
                                                className: "step-desc",
                                                children: g
                                            }), l && (0, a.jsx)(r.A, {
                                                as: "a",
                                                variant: "linkCaption",
                                                href: c,
                                                target: "_blank",
                                                className: "more-link",
                                                children: d || u("helpCenter-LearnMore")
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "img-item mobile",
                                            children: (0, a.jsx)(p.A, {
                                                src: `${t}/${o}`
                                            })
                                        })]
                                    }, n)
                                }))
                            }), (0, a.jsx)("div", {
                                className: "image-wrap",
                                children: e.map((({
                                    imgPath: e
                                }, n) => (0, a.jsx)("div", {
                                    "data-index": n,
                                    className: "img-item",
                                    children: (0, a.jsx)(p.A, {
                                        src: "",
                                        "data-src": `${t}/${e}`
                                    })
                                }, n)))
                            })]
                        }), c && A()]
                    })
                },
                v = (0, s.memo)(M);
            var b = n("eXUJ"),
                T = n("zX7I");
            const A = () => {},
                y = (0, s.memo)((({
                    steps: e = [],
                    closeModal: t,
                    activeIndex: n = 0,
                    setActiveIndex: o = A,
                    finishText: r
                }) => {
                    const {
                        getI18n: l
                    } = (0, h._b)(), {
                        isMobile: c
                    } = (0, g.Q)(), d = e.length - 1 === n, u = (0, s.useCallback)((() => {
                        o(n + 1)
                    }), [n, o]), m = (0, s.useCallback)((() => {
                        t && t()
                    }), [t]);
                    return (0, a.jsxs)(i.A, {
                        width: "100%",
                        justifyContent: "flex-end",
                        children: [!c && !d && (0, a.jsx)(T.A, {
                            sz: "normal",
                            colorStyle: "flatprimary",
                            width: 125,
                            onClick: u,
                            children: l("next", {
                                defaultValue: b.f.next
                            })
                        }), (d || c) && (0, a.jsx)(T.A, {
                            sz: "normal",
                            colorStyle: "flatprimary",
                            onClick: m,
                            children: r || l("start-trading", {
                                defaultValue: "Start Trading"
                            })
                        })]
                    })
                })),
                C = {
                    img: {
                        boxShadow: "none !important"
                    }
                },
                j = {
                    textDecoration: "none",
                    position: "relative",
                    top: "-32px"
                },
                P = ["zh-tw", "zh-tc"],
                w = (e, t, n, a = "png") => {
                    let s = "en";
                    const o = (e || "").toLowerCase();
                    return "zh-cn" === o && (s = "cn"), P.includes(o) && (s = "tw"), `static/images/futures/portfolio-margin/guide-${t}-${n?"light":"dark"}-${s}.${a}`
                },
                N = (0, s.memo)((({
                    isH5: e = !1,
                    STATIC_HOST: t,
                    SITE_HOST: n,
                    isLightTheme: o,
                    lng: m,
                    visible: p,
                    onClose: g,
                    finishText: x
                }) => {
                    const {
                        getI18n: f
                    } = (0, h._b)(), M = (0, s.useMemo)((() => [{
                        title: f("PMTutorialModalStep1Title", {
                            defaultValue: b.f.PMTutorialModalStep1Title
                        }),
                        descElement: f("PMTutorialModalStep1Desc", {
                            defaultValue: b.f.PMTutorialModalStep1Desc
                        }),
                        imgPath: w(m, "collateral-assets", o)
                    }, {
                        title: f("PMTutorialModalStep2Title", {
                            defaultValue: b.f.PMTutorialModalStep2Title
                        }),
                        descElement: f("PMTutorialModalStep2Desc", {
                            defaultValue: b.f.PMTutorialModalStep2Desc
                        }),
                        imgPath: w(m, "risk-control", o)
                    }, {
                        title: f("PMTutorialModalStep3Title", {
                            defaultValue: b.f.PMTutorialModalStep3Title
                        }),
                        descElement: f("PMTutorialModalStep3Desc", {
                            defaultValue: b.f.PMTutorialModalStep3Desc
                        }),
                        imgPath: w(m, "trade-mode", o)
                    }]), [f, o, m]);
                    return (0, a.jsx)(l.A, {
                        open: p,
                        showCloseIcon: !e,
                        onCloseIconClick: e ? void 0 : g,
                        sx: d,
                        contentSx: u,
                        children: (0, a.jsxs)("div", {
                            className: "main-container",
                            children: [(0, a.jsx)(r.A, {
                                variant: "headline6",
                                color: "t.primary",
                                children: f("PMTutorialModalTitle", {
                                    defaultValue: b.f.PMTutorialModalTitle
                                })
                            }), (0, a.jsx)("div", {
                                className: "content-wrapper",
                                children: (0, a.jsxs)("div", {
                                    className: "overflow-container",
                                    children: [(0, a.jsx)(v, {
                                        steps: M,
                                        staticHost: t,
                                        closeModal: g,
                                        sx: C,
                                        children: (0, a.jsx)(y, {
                                            finishText: x
                                        })
                                    }), (0, a.jsxs)(i.A, {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        alignSelf: "flex-start",
                                        as: "a",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: `${n}/support/faq/bddd924496d74ecd8820a6d95585ccee`,
                                        color: "t.third",
                                        sx: j,
                                        children: [(0, a.jsx)(c.A, {
                                            width: "24px",
                                            mr: "4px"
                                        }), (0, a.jsx)(r.A, {
                                            variant: "subtitle2",
                                            children: f("guide", {
                                                defaultValue: "Guide"
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                }))
        },
        eXUJ: (e, t, n) => {
            n.d(t, {
                f: () => a
            });
            const a = {
                UpgradeToPortfolioMarginAccount: "Upgrade to Portfolio Margin Account",
                PMOpenFuturesAccountModalDesc: "You need to open futures account before upgrading to Portfolio Margin Account.",
                PMOpenFuturesAccountModalButton: "Open Futures Account",
                UpgradeToPMDesc1: "You can now upgrade to portfolio margin account, which help improves assets efficiency, supports margin sharing among margin/UM/CM accounts, and more benefits.",
                UpgradeToPMSupportedTradingModesTitle: "Supported trading modes",
                UpgradeToPMSupportedTradingModes1: "Margin Cross Mode",
                UpgradeToPMSupportedTradingModes2: "USD\u24c8-M Futures Cross Mode",
                UpgradeToPMSupportedTradingModes3: "COIN-M Futures Cross Mode",
                UpgradeToPMUnsupportedTradingModesTitle: "Unsupported trading modes after the upgrade",
                UpgradeToPMUnsupportedTradingModes1: "USD\u24c8-M Futures Isolated Mode",
                UpgradeToPMUnsupportedTradingModes2: "COIN-M Futures Isolated Mode",
                UpgradeToPMNotInPMAccountTitle: "Able to trade while assets won\u2019t be under Portfolio Margin Account",
                UpgradeToPMNotInPMAccount1: "Spot",
                UpgradeToPMNotInPMAccount2: "Margin Isolated Mode",
                UpgradeToPMNotInPMAccount3: "Options",
                UpgradeToPMRules1: "Before you start the upgrade, please ensure that:",
                UpgradeToPMRules2: "You currently have no active orders or liabilities in your Margin account, and you have no positions or active orders in your UM Futures or CM Futures, and there are no negative balances in UM Futures or CM Futures.",
                UpgradeToPMRules3: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                UpgradeToPMRules4: "After the upgrade, only the read-only right of your current API key and secrets will be kept. Please pay attention to your API trading.",
                UpgradeToPMRules6: "Price Protection is not supported in Portfolio Margin Account.",
                next: "Next",
                OK: "OK",
                upgradeToPMAgreement: "I acknowledge that I have read and understood the <LinkTerms>Terms of Service for Portfolio Margin Account</LinkTerms> & <LinkRules>Trading Rules of Portfolio Margin Account</LinkRules>",
                UpgradeToPMNoticeTitle: "Upgrade to portfolio margin account now.",
                UpgradeToPMNoticeDesc: "Improves assets efficiency, supports margin sharing among margin/UM/CM accounts, and more benefits.",
                UpgradeQuizModalTitle: "Upgrade Quiz",
                UpgradeQuizModalDesc: "To ensure that you are fully aware of the risks of Portfolio Margin Account, you need to pass the quiz before upgrading.",
                UpgradeQuizModalPrevButton: "Previous",
                UpgradeQuizModalTakeQuizButton: "Take Quiz",
                PMUpgradingModalTitle: "Upgrading in Progress... ({{second}}s)",
                PMUpgradeInProgress: "Upgrading in Progress...",
                PMUpgradeInProgressBody: "Upon upgrading, you will be able to trade Margin, UM Futures and CM Futures through the Portfolio Margin.",
                PMUpgradingModalBody1: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                PMUpgradingModalBody2: "Upon upgrading, you will be able to trade Margin UM Futures and CM Futures through the Portfolio Margin. Only cross mode are support currently.",
                PMUpgradeFailedModalTitle: "Failed to Upgrade",
                PMUpgradePendingModalTitle: "Upgrading in Progress",
                PMUpgradePendingModalBody: "Upgrade is still in progress, please wait several minutes to see the results or you can ask for customer\u2019s help to handle the upgrade.",
                PMTradingLimitationModalBody: "Portfolio Margin Account does not support isolated mode of UM futures and CM futures, and Strategy Trading is also unsupported.",
                PMTutorialModalTitle: "Welcome to Portfolio Margin Mode",
                PMTutorialModalStep1Title: "Collateral Assets",
                PMTutorialModalStep1Desc: "Collateral assets in Margin account, UM Futures account and CM Futures account will be converted into USDT or BUSD equivalent in real time, and can be used as margin to trade margin, USD-Margin futures and Coin-Margin futures.",
                PMTutorialModalStep2Title: "Risk Control",
                PMTutorialModalStep2Desc: "You can view the Portfolio Margin Info at the current Margin ratio place. We use UniMMR to control your PM account risk.",
                PMTutorialModalStep3Title: "Trade Mode",
                PMTutorialModalStep3Desc: "Only cross mode is supported in Portfolio Margin account.",
                PMQuizTitle: "Upgrade Quiz",
                PMQuizHintBeforeAnswer: "You need to pass all {{questionsLength}} questions.",
                quitQuizModalDesc: "Are you sure that you want to quit? The quiz would not be saved.",
                PMQuizQuestion1: "Under Binance Portfolio Margin,  the risk of removing assets from USD\u24c8-M Wallet, COIN-M Wallet or Margin wallet would cause",
                PMQuizQuestion2: "Assume you have 1 BTC in the Margin Wallet, 1 ETH in the USD\u24c8-M Wallet and 1 BTC in the COIN-Margined Wallet. If the collateral rate for BTC is 95% and ETH is 90%, how much is your total collateralized asset value?",
                PMQuizQuestion3: "Are all the assets listed in the Margin Wallet can be used as collateral for portfolio margin trading?",
                PMQuizQuestion4: "Is there an interest rate charged to Portfolio Margin users having a negative balance in USD-margined, Coin-margined wallets or Margin Wallets?",
                PMQuizQuestion5: "Under the portfolio margin program, will liquidation of futures and margin positions be triggered if the Unified Maintenance Margin Ratio (UniMMR) reached 100%? Will Binance start reduce-only for all the positions when UniMMR reaches 120%?",
                PMQuizQuestion6: "Can you use both Binance Portfolio Margin and multi asset mode at the same time?",
                PMQuizQuestion7: "What is the liquidation process in Binance Portfolio Margin?",
                PMQuizQuestion8: "If users want to use BNB to get discount for trading fee in USD\u24c8-M perpetual contract, but BNB is currently only in the Margin Wallet, what should users do?",
                PMQuizQuestion9: "The trading logic and rules of the Portfolio Margin account are the same as those of the cross margin account and the USD\u24c8-M and COIN-M contract accounts.",
                PMQuizAnswer1: "Change of margin ratio || Liquidation risk || All of the above",
                PMQuizAnswer2: "1 BTC + 1 ETH + 1 BTC || 0.95 BTC + 0.9 ETH + 0.95 BTC || 2 BTC",
                PMQuizAnswer3: "Yes, both isolated and cross margin assets in the Margin Wallet can be used as collateral. || No, only cross margin assets in the Margin Wallet can be used as collateral.",
                PMQuizAnswer4: "No, no interest rate will be charged. || Yes, Portfolio Margin users with a negative balance under certain thresholds in their USDs-M wallet, Coin-margined wallet or Margin wallet will be charged with interest.",
                PMQuizAnswer5: "Yes; Yes || No; No || Yes; No",
                PMQuizAnswer6: "Yes || No",
                PMQuizAnswer7: "The liquidation orders will be sent as Immediate or Cancel orders and fill in the market. || The Insurance Fund will directly take over the liquidation positions. When the Insurance Fund cannot accept the bankrupt client\u2019s positions, Auto Deleveraging (ADL) will happen. Please note that the Insurance Fund will take over the liquidation positions at the bankruptcy prices, and the bankruptcy prices may be out of the contract\u2019s market price range.",
                PMQuizAnswer8: "Move BNB from Margin Wallet to Coin-Margined Wallet || Move BNB from Margin Wallet to USD\u24c8-M Wallet",
                PMQuizAnswer9: "Yes || No, for example, the implementation logic of conditional orders, the calculation logic of risk and liquidation price are different.",
                PMDowngradeSuccessToastTitle: "Downgrade Successfully",
                PMDowngradeSuccessToastDesc: "You have successfully switched back to Classic Trading",
                PMDowngradeFailedToastTitle: "Failed to Downgrade",
                PMDowngradeFailedToastDesc: "Failed to switch back to Classic Trading, please check all the requirements.",
                PMDowngradePendingModalTitle: "Downgrade Incomplete",
                PMDowngradePendingModalBody: "Downgrade is still in progress, please wait several minutes to see the results or you can ask for customer's help to handle the downgrade.",
                PMDowngradingModalTitle: "Downgrade in Progress... ({{second}}s)",
                PMDowngradeInProgress: "Downgrade in Progress...",
                PMDowngradingModalBody: "The account downgrade is expected to take several seconds. During the downgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeInProgressBody: "You are downgrading to Default Trading Account. During the downgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeConfirmModalTitle: "Back to Classic Trading",
                PMDowngradeConfirmDesc1: "Before you start the downgrade, please ensure that:",
                PMDowngradeConfirmDesc2: "You currently have no active orders or liabilities in your Margin account, and you have no positions or active orders in you UM Futures or CM Futures, and there are no negative balances in UM Futures or CM Futures.",
                PMDowngradeConfirmDesc3: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeConfirmDesc4: "After the downgrade, only the read-only right of your current API key and secrets will be kept. Please pay attention to your API trading.",
                PM1UpgradeMessage: "You are Portfolio Margin 1.0 user, please ask for customer service's help to upgrade to new Portfolio Margin Account.",
                PMConditionOrderNoticeModalTitle: "Condition Order Notice",
                PMConditionOrderNoticeModalBody: "Execution of conditional orders (including stop limit, stop market , trailing stop orders, Stop Profit & Loss for positions, and advanced TP/SL for orders) is not guaranteed and is dependent on factors such as market conditions. Orders are placed at the users own risk and Binance will not be liable for any losses.",
                PMConditionOrderNoticeModalCheck: "I agree with the statement."
            }
        },
        WUsl: (e, t, n) => {
            n.d(t, {
                MU: () => s,
                _b: () => i,
                rw: () => o,
                ud: () => r
            });
            var a = n("T0Sc");
            const s = () => (0, a.o)("", "trade-ui"),
                o = () => (0, a.o)("annTool", "announcement-tool"),
                r = () => (0, a.o)("futures-trade", "futures-ui"),
                i = () => (0, a.o)("", "futures-widget")
        },
        Cc9T: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("NEBA");
            const i = ({
                    children: e,
                    title: t = "",
                    onBack: n
                }) => (0, a.jsxs)("div", {
                    className: "tradew-setting-panel",
                    children: [(0, a.jsxs)("div", {
                        className: "setting-title",
                        children: [(0, a.jsx)(r.A, {
                            className: "icon",
                            onClick: n
                        }), (0, a.jsx)("div", {
                            children: t
                        })]
                    }), e]
                }),
                l = o().memo(i)
        },
        ih71: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("4hgs"),
                i = n("cwOt"),
                l = n("YxIV"),
                c = n("v76/"),
                d = n("21Yo");
            const u = (0, s.memo)((({
                getSDK: e,
                isLoggedIn: t,
                userInfo: n,
                children: a,
                useIsPM2: r = () => !1,
                useCopyTradingPayload: u = () => ({})
            }) => {
                const m = (0, s.useMemo)((() => ({
                    useIsPM2: r,
                    useCopyTradingPayload: u
                })), [r, u]);
                return o().createElement(l.Qr.Provider, {
                    value: e
                }, o().createElement(c.z.Provider, {
                    value: t
                }, o().createElement(d.tY.Provider, {
                    value: n
                }, o().createElement(i.Gb.Provider, {
                    value: m
                }, a))))
            }));
            u.displayName = "FuturesCoreProvider";
            var m = n("bQ69"),
                p = n("Qhol");
            const g = function(e) {
                var t = e.children,
                    n = (0, p.nHk)(),
                    s = (0, p.Pyz)(),
                    o = (0, p.DFo)().isPm1_5,
                    i = new r.QueryClient({
                        defaultOptions: {
                            queries: {
                                refetchOnWindowFocus: !1,
                                retry: !1
                            }
                        }
                    });
                return (0, a.jsx)(r.QueryClientProvider, {
                    client: i,
                    children: (0, a.jsx)(u, {
                        getSDK: m.D5,
                        isLoggedIn: !!n,
                        userInfo: s,
                        useIsPM2: function() {
                            return o || !1
                        },
                        children: t
                    })
                })
            }
        },
        HSL5: (e, t, n) => {
            n.d(t, {
                A: () => D
            });
            var a = n("S+0I"),
                s = n("mguP"),
                o = n("jbFV"),
                r = n.n(o),
                i = n("mXdx"),
                l = n("DTvD"),
                c = n.n(l),
                d = n("2IQ4"),
                u = n("GIr8"),
                m = n("Vhyo"),
                p = n("DB4s"),
                g = n("6A/j"),
                h = n("OLW9"),
                x = n("/Cny"),
                f = n("kU6N"),
                M = n("qBqx"),
                v = n("uV5D"),
                b = n("b9t6"),
                T = n("hAzz"),
                A = n("ugWk"),
                y = n("bQ69"),
                C = n("/jvT"),
                j = n("MD8j"),
                P = n("Qhol"),
                w = n("tC4u"),
                N = n("VWOf"),
                I = n("BZR+"),
                S = {
                    color: "t.third",
                    fontSize: "20px",
                    cursor: "pointer",
                    "&:hover": {
                        color: "t.secondary"
                    }
                },
                k = function(e) {
                    var t = e.showTitle,
                        n = void 0 === t || t,
                        o = (0, p.m)().isExistCrossAccount,
                        c = (0, l.useState)(!0),
                        k = c[0],
                        D = c[1],
                        U = (0, l.useState)(""),
                        _ = U[0],
                        R = U[1],
                        E = (0, l.useState)(!0),
                        O = E[0],
                        B = E[1],
                        z = O,
                        F = (0, P.h_5)().isCM2_0,
                        L = (0, P.Yej)(),
                        Q = (0, l.useState)(F ? "cm2" : "cm1"),
                        G = Q[0],
                        H = Q[1],
                        W = (0, j.d4)(C.makeMarginAccount),
                        V = (0, j.wA)(),
                        q = (0, P.ok2)().getI18n,
                        Y = (0, l.useState)(!1),
                        $ = Y[0],
                        Z = Y[1],
                        X = function() {
                            D(!0), B(!0)
                        },
                        K = (0, I.Qh)("CROSS"),
                        J = (0, l.useMemo)((function() {
                            return Number(K) < 5
                        }), [K, F, L]),
                        ee = (0, l.useMemo)((function() {
                            return !(Number(K) >= 10)
                        }), [K, F, L]),
                        te = (0, I.u8)(L, K),
                        ne = function(e) {
                            var t = function() {
                                var e = (0, a._)(r().mark((function e() {
                                    return r().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, V.margin.queryMarginAccount();
                                            case 2:
                                                V.margin.queryMarginAssets(), V.products.queryMarginSymbol();
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            G === e || $ || (Z(!0), "cm1" === e ? ((0, g.gy)({
                                type: "MARGIN_1"
                            }).then((function() {
                                t(), Z(!1)
                            })).catch((function() {
                                Z(!1)
                            })), (0, N.VI)({
                                element_id: "classic_mode"
                            })) : ((0, g.gy)({
                                type: "MARGIN_2"
                            }).then((function() {
                                t(), Z(!1)
                            })).catch((function() {
                                Z(!1)
                            })), (0, N.VI)({
                                element_id: "pro_mode"
                            })))
                        };
                    return (0, l.useEffect)((function() {
                        function e() {
                            return e = (0, a._)(r().mark((function e() {
                                var t, n, a, o;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Z(!0), e.t0 = s._, e.next = 4, Promise.all([(0, g.Dl)(), (0, g.jz)()]);
                                        case 4:
                                            e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), n = t[0], a = t[1], o = 1 == (null === n || void 0 === n ? void 0 : n.quizPass), Z(!1), D(o), R(null === n || void 0 === n ? void 0 : n.country), a && Array.isArray(a) && a.indexOf("MARGIN_PRO_QUIZ_2") >= 0 ? B(!0) : B(!1);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), e.apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), []), (0, l.useEffect)((function() {
                        var e = null === W || void 0 === W ? void 0 : W.accountType;
                        H("MARGIN_2" === e ? "cm2" : "cm1")
                    }), [W]), (0, i.jsxs)(d.A, {
                        sx: {
                            color: "var(--color-PrimaryText)",
                            mb: "20px",
                            ".switch-container": {
                                ".switch-item": {
                                    borderRadius: "12px",
                                    border: "1px solid",
                                    borderColor: "var(--color-Line)",
                                    mb: "12px",
                                    cursor: "pointer",
                                    ".item": {
                                        gap: "16px",
                                        alignItems: "center",
                                        padding: "16px",
                                        ".left": {
                                            backgroundColor: "var(--color-Input)",
                                            minWidth: "60px",
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            ".level": {
                                                fontSize: "24px",
                                                fontWeight: "600",
                                                color: "var(--color-PrimaryYellow)",
                                                lineHeight: "34px"
                                            },
                                            ".max": {
                                                color: "var(--color-SecondaryText)",
                                                fontSize: "12px",
                                                lineHeight: "18px"
                                            }
                                        },
                                        ".right": {
                                            flex: "1",
                                            ".mark": {
                                                ml: "15px",
                                                color: "var(--color-SecondaryText)",
                                                fontSize: "12px",
                                                lineHeight: "18px"
                                            },
                                            ".mode": {
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "var(--color-PrimaryText)",
                                                lineHeight: "24px"
                                            }
                                        }
                                    }
                                },
                                ">.active": {
                                    borderColor: "var(--color-PrimaryText)"
                                },
                                ">.disabled": {
                                    opacity: "0.3",
                                    pointerEvents: "none"
                                }
                            },
                            ".ness-item-container": {
                                ".ness-item": {
                                    mt: "16px"
                                },
                                ".button": {
                                    ml: "24px",
                                    backgroundColor: "var(--color-Line)",
                                    borderRadius: "4px",
                                    padding: "4px 8px",
                                    width: "fit-content",
                                    fontSize: "12px",
                                    mt: "2px",
                                    cursor: "pointer",
                                    color: "var(--color-PrimaryText)"
                                }
                            }
                        },
                        className: "cross-account-switch-container",
                        children: [n && (0, i.jsx)(d.A, {
                            className: "title",
                            sx: {
                                mb: "16px",
                                fontSize: "16px",
                                color: "t.primary"
                            },
                            children: q("trd-cross-margin-account")
                        }), (0, i.jsxs)(d.A, {
                            className: "switch-container",
                            children: [(0, i.jsx)(d.A, {
                                className: "switch-item ".concat(J ? "disabled" : "", " ").concat("cm1" == G ? "active" : ""),
                                onClick: function() {
                                    ne("cm1")
                                },
                                children: (0, i.jsxs)(u.A, {
                                    className: "item",
                                    children: [(0, i.jsxs)(d.A, {
                                        className: "left",
                                        children: [(0, i.jsx)(m.A, {
                                            className: "level",
                                            children: "5X"
                                        }), (0, i.jsx)(m.A, {
                                            className: "max",
                                            children: q("trd-Position-Max")
                                        })]
                                    }), (0, i.jsxs)(d.A, {
                                        className: "right",
                                        children: [(0, i.jsx)(m.A, {
                                            className: "mode",
                                            children: q("trd-cross-margin-account-normal-mode")
                                        }), (0, i.jsxs)("ul", {
                                            className: "mark",
                                            children: [(0, i.jsx)("li", {
                                                children: q("trd-max-5x")
                                            }), (0, i.jsx)("li", {
                                                children: q("trd-can-adjust-level")
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)(d.A, {
                                className: "switch-item ".concat("cm2" == G ? "active" : "", " ").concat(O && o && !ee ? "" : "disabled"),
                                onClick: function() {
                                    ne("cm2")
                                },
                                children: (0, i.jsxs)(u.A, {
                                    className: "item",
                                    children: [(0, i.jsxs)(d.A, {
                                        className: "left",
                                        children: [(0, i.jsxs)(m.A, {
                                            className: "level",
                                            children: [te, "X"]
                                        }), (0, i.jsx)(m.A, {
                                            className: "max",
                                            children: q("trd-Position-Max")
                                        })]
                                    }), (0, i.jsxs)(d.A, {
                                        className: "right",
                                        children: [(0, i.jsx)(m.A, {
                                            className: "mode",
                                            children: q("trd-cross-margin-account-Pro-mode")
                                        }), (0, i.jsxs)("ul", {
                                            className: "mark",
                                            children: [(0, i.jsx)("li", {
                                                children: (q("trd-max-20x", {
                                                    defaultValue: "20x"
                                                }) || "").replace(/\d+/g, "".concat(te))
                                            }), (0, i.jsx)("li", {
                                                children: q("trd-can-not-adjust-level")
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, i.jsxs)(d.A, {
                            className: "ness-item-container",
                            sx: {
                                display: o && z ? "none" : "block"
                            },
                            children: [(0, i.jsx)(m.A, {
                                children: q("trd-enable-Pro-need")
                            }), (0, i.jsxs)(d.A, {
                                className: "ness-item",
                                children: [(0, i.jsxs)(u.A, {
                                    sx: {
                                        alignItems: "center",
                                        color: "t.primary",
                                        gap: "4px"
                                    },
                                    children: [o ? (0, i.jsx)(h.A, {
                                        size: 20,
                                        color: "success"
                                    }) : (0, i.jsx)(x.A, {
                                        size: 20,
                                        color: "error"
                                    }), (0, i.jsx)(d.A, {
                                        children: q("trd-transfer-open-cross")
                                    })]
                                }), !o && (0, i.jsx)(d.A, {
                                    className: "button",
                                    onClick: function() {
                                        T.RR.emit("triggerModal", A.cP.TRANSTER, y.Gr.CROSS, {
                                            from: "MAIN",
                                            to: "MARGIN"
                                        })
                                    },
                                    children: q("trd-funds-transfer")
                                })]
                            }), (0, i.jsxs)(d.A, {
                                className: "ness-item",
                                children: [(0, i.jsxs)(u.A, {
                                    sx: {
                                        alignItems: "center",
                                        color: "t.primary",
                                        gap: "4px"
                                    },
                                    children: [z ? (0, i.jsx)(h.A, {
                                        size: 20,
                                        color: "success"
                                    }) : (0, i.jsx)(x.A, {
                                        size: 20,
                                        color: "error"
                                    }), (0, i.jsx)(d.A, {
                                        children: q("trd-finish-Pro-quiz")
                                    })]
                                }), !z && (0, i.jsx)(d.A, {
                                    className: "button",
                                    onClick: function() {
                                        if (k)
                                            if ("AE" === _) var e = (0, f.aF)({
                                                sx: {
                                                    padding: 0,
                                                    minWidth: ["360px", "540px", "720px"]
                                                },
                                                closeSx: S,
                                                content: (0, i.jsx)(b.A, {
                                                    onClose: function() {
                                                        return e()
                                                    },
                                                    onSubmit: X
                                                }),
                                                isMaskClose: !0
                                            }).close;
                                            else var t = (0, f.aF)({
                                                sx: {
                                                    padding: 0,
                                                    minWidth: ["360px", "540px", "720px"]
                                                },
                                                closeSx: S,
                                                content: (0, i.jsx)(M.M, {
                                                    onClose: function() {
                                                        return t()
                                                    },
                                                    onSubmit: X
                                                }),
                                                isMaskClose: !0
                                            }).close;
                                        else var n = (0, f.aF)({
                                            sx: {
                                                padding: 0,
                                                minWidth: ["360px", "540px", "720px"]
                                            },
                                            closeSx: S,
                                            content: "AE" === _ ? (0, i.jsx)(b.A, {
                                                onClose: function() {
                                                    return n()
                                                },
                                                onSubmit: X,
                                                isSigned: !1
                                            }) : (0, i.jsx)(v.s, {
                                                onClose: function() {
                                                    return n()
                                                },
                                                onSubmit: X
                                            }),
                                            isMaskClose: !0
                                        }).close
                                    },
                                    children: q("trd-Pro-quiz")
                                })]
                            })]
                        }), $ && (0, i.jsx)(w.A, {
                            inner: !0,
                            show: $
                        })]
                    })
                };
            const D = c().memo(k)
        },
        VWOf: (e, t, n) => {
            n.d(t, {
                VI: () => o,
                k0: () => s
            });
            var a = n("wtFP"),
                s = function(e) {
                    var t = e.elementId,
                        n = e.opened;
                    (0, a.u4)("$WebClick", {
                        module: "preference",
                        status: n ? "off_to_on" : "on_to_off",
                        $element_id: t
                    })
                },
                o = function(e) {
                    var t = e.element_id;
                    (0, a.u4)("$WebClick", {
                        module: "preference_settings",
                        $element_id: t
                    })
                }
        },
        "8Qni": (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n("DTvD");
            const s = (0, a.createContext)({
                settingPanelType: "",
                setSettingPanelType: function() {},
                onClose: function() {},
                disableModule: void 0
            })
        },
        RrGb: (e, t, n) => {
            n.d(t, {
                v: () => ye,
                A: () => je
            });
            var a = n("S+0I"),
                s = n("mguP"),
                o = n("jbFV"),
                r = n.n(o),
                i = n("mXdx"),
                l = n("DTvD"),
                c = n.n(l),
                d = n("MKk+"),
                u = n("Cc9T"),
                m = n("gxIC"),
                p = n("Qhol"),
                g = n("C7Nc"),
                h = n("bQ69"),
                x = n("ZGYs"),
                f = n("MD8j"),
                M = n("2IQ4"),
                v = n("WUsl"),
                b = n("Vhyo"),
                T = n("eXUJ"),
                A = n("tSdT");
            const y = () => {
                const {
                    getI18n: e
                } = (0, v._b)();
                return (0, i.jsx)(b.A, {
                    variant: "caption3",
                    color: "t.secondary",
                    children: e("PM1UpgradeMessage", T.f.PM1UpgradeMessage)
                })
            };
            var C = n("HwII");
            const j = new C.b,
                P = e => {
                    j.emit("START_PM_UPGRADE_FLOW", e)
                },
                w = new C.b;
            var N = n("gLBh"),
                I = n("xqbL"),
                S = n.n(I),
                k = n("/YzY"),
                D = n("oGso"),
                U = n("YD0E"),
                _ = n("B8MU");
            const R = (0, l.memo)((({
                spacing: e = "rwd"
            }) => {
                const {
                    getI18n: t
                } = (0, v._b)(), n = "rwd" === e;
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("div", {
                        className: S()("t-subtitle2", {
                            "mb-[12px] md:mb-[16px]": n,
                            "mb-[12px]": !n
                        }),
                        children: t("accountMode-classic-title", "Classic Trading")
                    }), (0, i.jsx)("div", {
                        className: S()("t-caption1", {
                            "mb-[12px] md:mb-[16px]": n,
                            "mb-[12px]": !n
                        }),
                        children: t("accountMode-classic-desc", "Trading Spot, Futures, Margin with separate accounts.")
                    }), (0, i.jsx)("div", {
                        className: S()("t-caption1", {
                            "mb-[6px]": n,
                            "mb-[4px]": !n
                        }),
                        children: t("features", "Features")
                    }), (0, i.jsxs)("ul", {
                        className: "text-TertiaryText pl-[18px] mb-[12px]",
                        children: [(0, i.jsx)("li", {
                            className: S()("t-caption1", {
                                "mb-[6px]": n,
                                "mb-[4px]": !n
                            }),
                            children: t("accountMode-classic-feature-1", "Isolated product limits the risk to one account.")
                        }), (0, i.jsx)("li", {
                            className: S()("t-caption1", {
                                "mb-[6px]": n,
                                "mb-[4px]": !n
                            }),
                            children: t("accountMode-classic-feature-2", "The same collateral can only be used for 1 trading product.")
                        }), (0, i.jsx)("li", {
                            className: "t-caption1 mb-[4px]",
                            children: t("accountMode-classic-feature-3", "Unrealized PnL from different products cannot offset each other.")
                        })]
                    }), (0, i.jsx)("div", {
                        className: S()("t-caption1", {
                            "mb-[6px]": n,
                            "mb-[4px]": !n
                        }),
                        children: t("requirements", "Requirement")
                    }), (0, i.jsx)("ul", {
                        className: "text-TertiaryText pl-[18px] mb-[12px]",
                        children: (0, i.jsx)("li", {
                            className: "t-caption1",
                            children: t("accountMode-classic-requirement-1", "Make sure you have no active orders, liabilities and positions in your cross margin, UM or CM to ensure a smooth switch.")
                        })
                    })]
                })
            }));
            R.displayName = "ClassicModeContent";
            const E = ({
                    isAvailable: e,
                    children: t
                }) => (0, i.jsxs)("div", {
                    className: "available flex flex-start ",
                    children: [(0, i.jsx)(_.A, {
                        className: S()("text-[16px] shrink-0 mr-[4px]", {
                            "text-Success": e,
                            "text-DisabledText": !e
                        })
                    }), (0, i.jsx)("div", {
                        className: S()("t-caption1", {
                            "text-PrimaryText": e,
                            "text-TertiaryText": !e
                        }),
                        children: t || null
                    })]
                }),
                O = (0, l.memo)((({
                    spacing: e = "rwd"
                }) => {
                    const {
                        t: t,
                        getI18n: n,
                        i18n: {
                            language: a
                        }
                    } = (0, v._b)(), {
                        minVipLevelEnableAccount: s = ""
                    } = (0, D.E)(), o = "rwd" === e;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)("div", {
                            className: S()("t-subtitle2 flex items-center", {
                                "mb-[12px] md:mb-[16px]": o,
                                "mb-[12px]": !o
                            }),
                            children: [(0, i.jsx)("div", {
                                className: "t-subtitle2 mr-[4px]",
                                children: n("accountMode-pm-title", "Portfolio Margin")
                            }), (0, i.jsx)(U.A, {
                                variant: "warn",
                                size: "small",
                                label: n("new", "New")
                            })]
                        }), (0, i.jsx)("div", {
                            className: "t-caption1 mb-[4px]",
                            children: n("accountMode-pm-margin-desc", "You can share margin among")
                        }), (0, i.jsx)("div", {
                            className: S()({
                                "mb-[12px] md:mb-[16px] [&_div:not(:last-of-type)]:mb-[6px]": o,
                                "mb-[12px] [&_div:not(:last-of-type)]:mb-[4px]": !o
                            }),
                            children: (0, i.jsx)(N.x, {
                                t: t,
                                defaults: "<Available>Cross Margin</Available><Available>USD\u24c8-M Futures</Available><Available>COIN-M Futures</Available><Unavailable>Options (Coming soon)</Unavailable>",
                                components: {
                                    Available: (0, i.jsx)(E, {
                                        isAvailable: !0
                                    }),
                                    Unavailable: (0, i.jsx)(E, {
                                        isAvailable: !1
                                    })
                                },
                                i18nKey: "accountMode-pm-margin-list"
                            })
                        }), (0, i.jsx)("div", {
                            className: S()("t-caption1", {
                                "mb-[6px]": o,
                                "mb-[4px]": !o
                            }),
                            children: n("features", "Features")
                        }), (0, i.jsxs)("ul", {
                            className: "text-TertiaryText pl-[18px] mb-[12px]",
                            children: [(0, i.jsx)("li", {
                                className: S()("t-caption1", {
                                    "mb-[6px]": o,
                                    "mb-[4px]": !o
                                }),
                                children: n("accountMode-pm-feature-1", "The same collateral can be used across 3 trading products synchronously.")
                            }), (0, i.jsx)("li", {
                                className: S()("t-caption1", {
                                    "mb-[6px]": o,
                                    "mb-[4px]": !o
                                }),
                                children: n("accountMode-pm-feature-2", "Support over 200+ collateral assets.")
                            }), (0, i.jsx)("li", {
                                className: S()("t-caption1", {
                                    "mb-[6px]": o,
                                    "mb-[4px]": !o
                                }),
                                children: n("accountMode-pm-feature-3", "The margin is converted into USD value, and evaluate the total risk of all instruments using initial margin and maintenance margin.")
                            }), (0, i.jsx)("li", {
                                className: "t-caption1 mb-[4px]",
                                children: n("accountMode-pm-feature-4", "Enables offsetting of profit and losses of position against each other.Unrealized profits can be used to open new positions.")
                            })]
                        }), (0, i.jsx)("div", {
                            className: S()("t-caption1", {
                                "mb-[6px]": o,
                                "mb-[4px]": !o
                            }),
                            children: n("requirements", "Requirement")
                        }), (0, i.jsxs)("ul", {
                            className: "text-TertiaryText pl-[18px] mb-[12px]",
                            children: [(0, i.jsx)("li", {
                                className: "t-caption1 mb-[4px]",
                                children: n("UpgradeToPMRules5", {
                                    defaultValue: "To upgrade, your VIP level needs to be VIP{{minVipLevel}} to VIP9.",
                                    minVipLevel: s
                                })
                            }), (0, i.jsx)("li", {
                                className: "t-caption1 mb-[4px]",
                                children: n("accountMode-pm-requirement-2", "Make sure you have no active orders, liabilities and positions in your cross margin, UM or CM to ensure a smooth switch.")
                            })]
                        }), (0, i.jsx)(k.Z, {
                            path: "/portfolio-margin",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "no-underline",
                            children: (0, i.jsx)("div", {
                                className: "text-decoration-none text-PrimaryYellow t-subtitle3",
                                children: n("accountMode-checkPMLink", "Check detailed introduction of Portfolio Margin")
                            })
                        })]
                    })
                }));
            O.displayName = "PortfolioMarginContent";
            var B = n("fsjv");
            const z = (0, l.memo)((({
                isCurrentMode: e,
                isSelected: t,
                collapsedHeight: n,
                children: a,
                onClick: s,
                spacing: o = "rwd"
            }) => {
                const {
                    getI18n: r
                } = (0, v._b)(), c = !!n, [d, u] = (0, l.useState)(!0), m = c && d ? `${n}px` : "auto", p = "rwd" === o;
                return (0, i.jsxs)("div", {
                    className: S()("relative cursor-pointer overflow-hidden rounded-[12px]", `h-[${m}px]`, {
                        "p-[16px] md:p-[24px]": p && !t,
                        "p-[16px]": !p && !t,
                        "p-[15.5px] md:p-[23.5px]": p && t,
                        "p-[15.5px]": !p && t,
                        "border-[1px] border-solid border-Line": !t,
                        "border-[1.5px] border-solid border-PrimaryText": t
                    }),
                    onClick: s,
                    children: [e && (0, i.jsx)("div", {
                        className: "bg-Line t-caption3 absolute top-0 right-0 z-0 flex items-center justify-center h-[24px] rounded-bl-[8px] px-[8px]",
                        children: r("currentMode", "Current Mode")
                    }), a, c && d && (0, i.jsx)("div", {
                        className: "flex items-center justify-center absolute bottom-0 left-0 w-full h-[30px]",
                        style: {
                            background: "linear-gradient(180deg, transparent 0%, var(--color-modalBg) 50%)"
                        },
                        children: (0, i.jsx)(B.A, {
                            size: 16,
                            color: "iconNormal",
                            onClick: () => u(!1)
                        })
                    })]
                })
            }));
            z.displayName = "ModeContainer";
            var F = n("5uUu");
            const L = (0, l.memo)((({
                    currentMode: e,
                    targetMode: t,
                    onSwitchMode: n,
                    sz: a = "regular"
                }) => {
                    const {
                        getI18n: s
                    } = (0, v._b)();
                    return e === t ? (0, i.jsx)(F.A, {
                        className: "min-w-full",
                        sz: a,
                        disabled: !0,
                        children: s("accountMode-currentAccountModeButton", "Current Account Mode")
                    }) : (0, i.jsx)(F.A, {
                        className: "min-w-full",
                        sz: a,
                        onClick: () => n(t),
                        children: s("accountMode-switchButton", "Switch")
                    })
                })),
                Q = (0, l.memo)((({
                    currentMode: e,
                    onSwitchMode: t
                }) => {
                    const [n, a] = (0, l.useState)(e);
                    return (0, i.jsxs)("div", {
                        className: "flex flex-col justify-between h-full",
                        children: [(0, i.jsx)("div", {
                            className: "h-full flex-shrink-1 overflow-y-auto mb-[16px]",
                            children: (0, i.jsxs)("div", {
                                className: "grid gap-[16px] grid-cols-[1fr]",
                                children: [(0, i.jsx)(z, {
                                    isCurrentMode: "classic" === e,
                                    isSelected: "classic" === n,
                                    onClick: () => a("classic"),
                                    spacing: "small",
                                    children: (0, i.jsx)(R, {
                                        spacing: "small"
                                    })
                                }), (0, i.jsx)(z, {
                                    isCurrentMode: "pm" === e,
                                    isSelected: "pm" === n,
                                    onClick: () => a("pm"),
                                    spacing: "small",
                                    children: (0, i.jsx)(O, {
                                        spacing: "small"
                                    })
                                })]
                            })
                        }), (0, i.jsx)(L, {
                            sz: "small",
                            currentMode: e,
                            targetMode: n,
                            onSwitchMode: t
                        })]
                    })
                }));
            Q.displayName = "AccountModeSwitchContent";
            var G = n("4hgs"),
                H = n("8sdr");
            var W = n("A4nT");
            const V = e => "PM_2" === e ? .accountType && "ENABLED" === e ? .status,
                q = e => "PM_2" === e ? .accountType && "DISABLED" === e ? .status,
                Y = ({
                    enabled: e = !0,
                    shouldRefetchUserBasic: t = !0,
                    type: n
                }) => {
                    const a = (0, G.useQueryClient)(),
                        s = "DOWNGRADE" === n ? q : V,
                        {
                            data: o
                        } = (0, G.useQuery)(W.Bz.QUERY_PORTFOLIO_MARGIN_ACCOUNT_STATUS, H.AF, {
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0,
                            enabled: e,
                            refetchInterval: 1e3,
                            onSuccess: e => {
                                t && s(e ? .data) && a.invalidateQueries(W.Bz.QUERY_UNI_ACCOUNT_INFO)
                            }
                        });
                    return s(o ? .data)
                };
            var $ = n("Wia+");
            const Z = {
                    enable: !1,
                    uniEquityUsd: 0,
                    uniMaintainRatio: 0,
                    uniMaintainUsd: 0,
                    isRetailUser: !1
                },
                X = async () => {
                    const {
                        data: e,
                        success: t
                    } = await (0, $.H0)() || {};
                    return t ? e : Z
                },
                K = ({
                    enabled: e
                } = {
                    enabled: !0
                }) => {
                    const {
                        data: t,
                        isLoading: n,
                        isError: a
                    } = (({
                        enabled: e
                    } = {
                        enabled: !0
                    }) => (0, G.useQuery)(W.Bz.QUERY_UNI_ACCOUNT_INFO, X, {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: e
                    }))({
                        enabled: e
                    });
                    return (0, l.useMemo)((() => ({ ...t || Z,
                        isLoading: n,
                        isError: a
                    })), [t, n])
                };
            var J = n("X6De");
            n("rsKe");
            const ee = (0, l.lazy)((() => Promise.all([n.e(2286), n.e(5793)]).then(n.bind(n, "R8IZ")))),
                te = (0, l.lazy)((() => n.e(5753).then(n.bind(n, "0Ofx")))),
                ne = (0, l.lazy)((() => n.e(3568).then(n.bind(n, "e/jO")))),
                ae = (0, l.lazy)((() => Promise.resolve().then(n.bind(n, "apwJ")))),
                se = (0, l.lazy)((() => n.e(5419).then(n.bind(n, "+cgr")))),
                oe = (0, l.memo)((({
                    isLightTheme: e,
                    h5Back: t,
                    STATIC_HOST: n,
                    onDowngradeSuccess: a,
                    shouldRefetchUserBasic: s = !0,
                    bypassDowngradeConfirmation: o = !1,
                    shouldCheckIsPMAccount: r = !1,
                    onDowngradeSuccessModalClose: c,
                    disableDowngradeSuccessModal: d = !1
                }) => {
                    const u = "function" === typeof t,
                        [m, p] = (0, l.useState)(u ? "INITIALIZING" : "IDLE"),
                        g = (0, l.useCallback)((() => p("IDLE")), []);
                    (0, l.useEffect)((function() {
                        return w.on("START_PM_DOWNGRADE_FLOW", (() => {
                            p("INITIALIZING")
                        }))
                    }), []);
                    const [h, x] = (0, l.useState)(!1);
                    (0, l.useEffect)((function() {
                        u || "IDLE" === m && x(!1)
                    }), [u, m]);
                    const {
                        mutateAsync: f
                    } = (0, G.useMutation)(H.E8), M = Y({
                        enabled: h,
                        shouldRefetchUserBasic: s,
                        type: "DOWNGRADE"
                    }), v = (0, l.useCallback)((async () => {
                        try {
                            await (0, J.tA)()
                        } catch (e) {
                            console.warn("repay negative balance error")
                        }
                        f().then((({
                            success: e
                        }) => {
                            e ? x(!0) : p("FAILED")
                        })).catch((() => {
                            p("FAILED")
                        }))
                    }), [f]);
                    (0, l.useEffect)((function() {
                        M && (a ? .(), d ? g() : p("SUCCESS"))
                    }), [M, a, d, g]);
                    const b = (0, l.useCallback)((() => {
                            p("DOWNGRADING"), v()
                        }), []),
                        {
                            isLoading: T,
                            enable: A,
                            isRetailUser: y,
                            isError: C
                        } = K({
                            enabled: r
                        }),
                        j = !T && A && y;
                    (0, l.useEffect)((function() {
                        "INITIALIZING" === m && (r && T || (r && C ? g() : !r || j ? o ? b() : p("CONFIRM_DOWNGRADE") : d || p("SUCCESS")))
                    }), [o, r, T, j, C, d, m, g, b]);
                    const P = (0, l.useCallback)((() => {
                        g(), c ? .()
                    }), [c, g]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: ["CONFIRM_DOWNGRADE" === m && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(ne, {
                                isH5: u,
                                visible: !0,
                                onClose: g,
                                onConfirmButtonClick: b
                            })
                        }), "DOWNGRADING" === m && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(ee, {
                                STATIC_HOST: n,
                                isLightTheme: e,
                                onTimeout: () => p("PENDING"),
                                visible: !0
                            })
                        }), !d && "SUCCESS" === m && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(ae, {
                                visible: !0,
                                onClose: u ? void 0 : P,
                                onConfirmButtonClick: t || P
                            })
                        }), "FAILED" === m && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(se, {
                                visible: !0,
                                onClose: u ? void 0 : g,
                                onConfirmButtonClick: t || g
                            })
                        }), "PENDING" === m && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(te, {
                                isLightTheme: e,
                                visible: !0,
                                onClose: u ? void 0 : g,
                                onConfirmButtonClick: t || g
                            })
                        })]
                    })
                }));
            oe.displayName = "PMDowngradeFlow";
            var re = n("zHUU"),
                ie = n("AMFC");
            var le = n("RQP0");
            const ce = ({
                    shouldRefetchUserBasic: e,
                    shouldCheckIsPMAccount: t,
                    onUpgradeFailed: n
                }) => {
                    const [a, s] = (0, l.useState)(!1), {
                        mutateAsync: o
                    } = (0, G.useMutation)((e => (0, H.u_)(e))), r = Y({
                        enabled: a,
                        shouldRefetchUserBasic: e,
                        type: "UPGRADE"
                    }), i = (0, l.useCallback)((() => {
                        o({
                            enableErrorMsgIntercept: !0,
                            enableErrorDialogOnly: !0
                        }).then((({
                            success: e,
                            message: t,
                            messageDetail: a
                        }) => {
                            if (e) s(!0);
                            else {
                                const e = a ? .type === le.p.DIALOG;
                                n(e ? null : t || "")
                            }
                        })).catch((e => {
                            n(e.message || "")
                        }))
                    }), [o, n]), {
                        data: c,
                        isLoading: d
                    } = ((e, {
                        enabled: t
                    } = {}) => (0, G.useQuery)(W.Bz.QUERY_USER_PERSONAL_CONFIG(e), (() => (0, ie.pN)(e)), {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: t
                    }))({
                        configType: "PM_UPGRADE"
                    }), u = c ? .configValue, m = d, {
                        mutateAsync: p
                    } = (({
                        configType: e
                    }) => {
                        const t = (0, G.useQueryClient)();
                        return (0, G.useMutation)((t => (0, ie.wI)({
                            configValue: t,
                            configType: e
                        })), {
                            onSuccess: (n, a) => {
                                n.success && t.setQueryData(W.Bz.QUERY_USER_PERSONAL_CONFIG({
                                    configType: e
                                }), {
                                    configType: e,
                                    configValue: a
                                })
                            }
                        })
                    })({
                        configType: "PM_UPGRADE"
                    }), {
                        isLoading: g,
                        enable: h,
                        isRetailUser: x
                    } = K({
                        enabled: t
                    });
                    return {
                        setEnabledUpgradeResultPolling: s,
                        enabledUpgradeResultPolling: a,
                        isUpgradeCompleted: r,
                        triggerUpgrade: i,
                        isAgreementSigned: u,
                        waitingForData: m,
                        updateIsAgreementSigned: p,
                        isPMAccount: !g && h && x,
                        isPM1Account: !g && h && !x,
                        isLoadingIsAgreementSigned: d,
                        isLoadingUniAccountInfo: g
                    }
                },
                de = (0, l.lazy)((() => Promise.resolve().then(n.bind(n, "OTBD")))),
                ue = (0, l.lazy)((() => n.e(8940).then(n.bind(n, "nUw/")))),
                me = (0, l.lazy)((() => Promise.all([n.e(2286), n.e(6934), n.e(9461), n.e(6152), n.e(5900), n.e(6121)]).then(n.bind(n, "q5JO")))),
                pe = (0, l.lazy)((() => Promise.all([n.e(2286), n.e(5999)]).then(n.bind(n, "sYeH")))),
                ge = (0, l.lazy)((() => n.e(223).then(n.bind(n, "TbVc")))),
                he = (0, l.lazy)((() => n.e(1829).then(n.bind(n, "oiXp")))),
                xe = (0, l.memo)((({
                    isLightTheme: e,
                    h5Back: t,
                    STATIC_HOST: n,
                    SITE_HOST: a,
                    onUpgradeSuccess: s,
                    onTutorialFinished: o,
                    finishTutorialText: r,
                    disableTutorial: c = !1,
                    shouldCheckIsPMAccount: d = !1,
                    shouldRefetchUserBasic: u = !0,
                    userTradeLevel: m,
                    onTransferButtonClick: p
                }) => {
                    const g = (0, re.Bl)(),
                        h = "function" === typeof t,
                        [x, f] = (0, l.useState)(h ? "INITIALIZING" : "IDLE"),
                        M = (0, l.useCallback)((() => f("IDLE")), []),
                        [v, b] = (0, l.useState)(""),
                        [T, C] = (0, l.useState)(),
                        P = (0, l.useCallback)((e => {
                            "string" === typeof e ? (b(e), f("FAILED")) : (b(""), f("IDLE")), T ? .onUpgradeFailed ? .()
                        }), [T]),
                        {
                            setEnabledUpgradeResultPolling: w,
                            isUpgradeCompleted: N,
                            triggerUpgrade: I,
                            isAgreementSigned: S,
                            waitingForData: k,
                            updateIsAgreementSigned: D,
                            isPMAccount: U,
                            isPM1Account: _,
                            isLoadingIsAgreementSigned: R,
                            isLoadingUniAccountInfo: E
                        } = ce({
                            shouldRefetchUserBasic: u,
                            shouldCheckIsPMAccount: d,
                            onUpgradeFailed: P
                        });
                    (0, l.useEffect)((function() {
                        return j.on("START_PM_UPGRADE_FLOW", (e => {
                            f("INITIALIZING"), C(e)
                        }))
                    }), []), (0, l.useEffect)((function() {
                        h || "IDLE" === x && w(!1)
                    }), [h, w, x]), (0, l.useEffect)((function() {
                        N && (T ? .onUpgradeSuccess ? .(), c ? M() : f("TUTORIAL"), s ? .())
                    }), [N, c, s, M, T]);
                    const {
                        enqueueNotification: O
                    } = (0, A.A)(), B = (0, l.useCallback)((() => {
                        S || D("true"), f("UPGRADE_REQUIREMENTS")
                    }), [S, D]), z = (0, l.useCallback)((() => {
                        f("UPGRADING"), I()
                    }), [I]), F = (0, l.useCallback)((() => {
                        M(), o ? .()
                    }), [o, M]), L = (0, l.useCallback)((() => {
                        z()
                    }), [z]);
                    return (0, l.useEffect)((function() {
                        if ("INITIALIZING" === x && !(R || d && E)) {
                            if (d && _) return O({
                                message: (0, i.jsx)(y, {}),
                                variant: "error"
                            }), void M();
                            if (!d || !U) return S ? void f("UPGRADE_REQUIREMENTS") : f("CONFIRM_UPGRADE_TO_PM");
                            c || f("TUTORIAL")
                        }
                    }), [S, R, d, E, U, c, _, O, x, M, z]), k ? null : (0, i.jsxs)(i.Fragment, {
                        children: ["CONFIRM_UPGRADE_TO_PM" === x && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(ue, {
                                isH5: h,
                                STATIC_HOST: n,
                                SITE_HOST: a,
                                visible: !0,
                                onClose: M,
                                onConfirmButtonClick: B
                            })
                        }), "UPGRADE_REQUIREMENTS" === x && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(me, {
                                isLightTheme: e,
                                showCloseButton: !h,
                                STATIC_HOST: n,
                                visible: !0,
                                onClose: h ? void 0 : M,
                                onNextButtonClick: L,
                                onSkip: L,
                                userTradeLevel: m,
                                onTransferButtonClick: p
                            })
                        }), "UPGRADING" === x && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(pe, {
                                STATIC_HOST: n,
                                isLightTheme: e,
                                visible: "UPGRADING" === x,
                                onTimeout: () => f("PENDING")
                            })
                        }), "PENDING" === x && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(ge, {
                                isLightTheme: e,
                                visible: !0,
                                onClose: h ? void 0 : M,
                                onConfirmButtonClick: t || M
                            })
                        }), "FAILED" === x && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(he, {
                                visible: !0,
                                onClose: h ? void 0 : M,
                                onConfirmButtonClick: t || M,
                                failedReason: v
                            })
                        }), !c && (0, i.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(de, {
                                isH5: h,
                                STATIC_HOST: n,
                                SITE_HOST: a,
                                isLightTheme: e,
                                lng: g,
                                visible: "TUTORIAL" === x,
                                onClose: t || F,
                                finishText: r
                            })
                        })]
                    })
                }));
            xe.displayName = "PMUpgradeFlow";
            var fe = n("OTBD"),
                Me = n("apwJ"),
                ve = n("wtFP"),
                be = n("Vc2Y");
            const Te = function(e) {
                e.getI18n, e.onClose;
                var t = (0, p.DPo)().isLight,
                    n = (0, l.useState)(!1),
                    s = n[0],
                    o = n[1],
                    c = (0, l.useState)(!1),
                    d = c[0],
                    u = c[1],
                    m = (0, p.nHk)(),
                    g = (0, re.uU)(),
                    x = (0, f.wA)(),
                    v = (0, p.DFo)(),
                    b = v.isPm1_5,
                    T = v.isPm1_0,
                    C = (() => {
                        const {
                            enqueueNotification: e
                        } = (0, A.A)();
                        return () => e({
                            message: (0, i.jsx)(y, {}),
                            variant: "error"
                        })
                    })(),
                    j = (0, p.Pyz)().tradeLevel;
                (0, l.useEffect)((function() {
                    (0, ve.u4)("PopupView", {
                        eventName: "PMSwitchEntrance",
                        category: "MarginTrade",
                        df_source: "margin"
                    })
                }), []);
                var N = function() {
                        var e = (0, a._)(r().mark((function e() {
                            var t, n, a;
                            return r().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x.margin.queryIsUniaccount();
                                    case 2:
                                        t = e.sent, n = t.enable, a = t.isRetailUser, n || a || u(!0);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    I = function() {
                        o(!0)
                    },
                    S = function() {
                        u(!1)
                    },
                    k = (0, l.useCallback)((function() {
                        be.R.emit("triggerModal", "TRANSTER", h.Gr.CROSS, {
                            from: "MAIN",
                            to: "MARGIN"
                        })
                    }), []);
                return m ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(M.A, {
                        sx: {
                            height: ["calc(100vh - 116px - 18px)", "424px"],
                            width: ["auto", "480px"],
                            margin: "0px 24px",
                            pb: "24px",
                            fontSize: "14px",
                            mt: "18px",
                            ".header-container": {
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                mb: "40px"
                            },
                            ".current-mode": {
                                display: "flex",
                                flexDirection: "column",
                                ".title": {
                                    color: "t.third",
                                    lineHeight: "20px",
                                    mb: "4px"
                                },
                                ".mode": {
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "t.primary"
                                }
                            },
                            ".switch-mode": {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                color: "t.yellow",
                                lineHeight: "20px",
                                cursor: "pointer"
                            }
                        },
                        children: (0, i.jsx)(Q, {
                            currentMode: b ? "pm" : "classic",
                            onSwitchMode: function(e) {
                                "pm" === e ? (T ? C() : P(), P()) : w.emit("START_PM_DOWNGRADE_FLOW", void 0), (0, ve.u4)("$WebClick", {
                                    $element_id: "PMSwitch",
                                    category: "MarginTrade",
                                    df_source: "margin"
                                })
                            }
                        })
                    }), b ? (0, i.jsx)(oe, {
                        isLightTheme: t,
                        STATIC_HOST: h.K5,
                        SITE_HOST: h.dM,
                        onDowngradeSuccess: N,
                        bypassDowngradeConfirmation: !0,
                        disableDowngradeSuccessModal: !0
                    }) : (0, i.jsx)(xe, {
                        isLightTheme: t,
                        STATIC_HOST: h.K5,
                        SITE_HOST: h.dM,
                        disableTutorial: !0,
                        onUpgradeSuccess: function() {
                            x.margin.queryIsUniaccount(), I()
                        },
                        userTradeLevel: j,
                        onTransferButtonClick: k
                    }), (0, i.jsx)(fe.default, {
                        STATIC_HOST: h.K5,
                        SITE_HOST: h.dM,
                        isLightTheme: t,
                        lng: g,
                        visible: s,
                        onClose: function() {
                            o(!1)
                        }
                    }), (0, i.jsx)(Me.PMDowngradeSuccessModal, {
                        visible: d,
                        onClose: S,
                        onConfirmButtonClick: S
                    })]
                }) : (0, i.jsx)(i.Fragment, {})
            };
            var Ae = n("8Qni"),
                ye = function() {
                    var e = (0, l.useContext)(Ae.A),
                        t = e.setSettingPanelType,
                        n = e.onClose,
                        a = (0, p.ok2)().getI18n,
                        s = (0, l.useCallback)((function() {
                            t(x.Z.HEADER)
                        }), []);
                    return (0, i.jsx)(u.A, {
                        onBack: s,
                        title: a("trd-account-mode"),
                        children: (0, i.jsx)("div", {
                            className: "trade-setting-content account-mode-panel",
                            children: (0, i.jsx)(Te, {
                                onClose: n
                            })
                        })
                    })
                },
                Ce = function() {
                    var e = (0, p.ok2)().getI18n,
                        t = (0, g.NH)().canUpgratePM1_5,
                        n = (0, p.DFo)(),
                        o = n.isPm1_5,
                        c = n.isPm1_0,
                        u = (0, s._)((0, p.Grl)(), 1)[0],
                        f = (0, p.nHk)(),
                        M = (0, l.useContext)(Ae.A).setSettingPanelType,
                        v = (0, l.useState)(!1),
                        b = v[0],
                        T = v[1];
                    return (0, l.useEffect)((function() {
                        function e() {
                            return (e = (0, a._)(r().mark((function e() {
                                var t;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, m.dM)();
                                        case 2:
                                            t = e.sent.data, T(1 === (null === t || void 0 === t ? void 0 : t.creditStatus) || 2 === (null === t || void 0 === t ? void 0 : t.creditStatus));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        f && function() {
                            e.apply(this, arguments)
                        }()
                    }), [f]), u !== h.Gr.CROSS || !f || b || !t && !o || c ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)("div", {
                        className: "setting-item-content-i content-hover",
                        onClick: function() {
                            M(x.Z.ACCOUNT_MODE)
                        },
                        children: [(0, i.jsx)("div", {
                            className: "item-left",
                            children: e("trd-account-mode")
                        }), (0, i.jsx)(d.A, {
                            className: "trade-common-icon go-info"
                        })]
                    })
                };
            const je = c().memo(Ce)
        },
        cHWp: (e, t, n) => {
            n.d(t, {
                l: () => I,
                A: () => k
            });
            var a = n("mXdx"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("MKk+"),
                i = n("Cc9T"),
                l = n("S+0I"),
                c = n("iKvg"),
                d = n("hrAD"),
                u = n("qoEP"),
                m = n("jbFV"),
                p = n.n(m),
                g = n("2IQ4"),
                h = n("GIr8"),
                x = n("Vhyo"),
                f = n("dNK/"),
                M = n("MD8j"),
                v = n("Qhol"),
                b = n("hAzz"),
                T = n("92Cd"),
                A = n("/jvT"),
                y = n("VWOf"),
                C = {
                    marginAutoBorrow: !1,
                    marginAutoRepay: !1
                },
                j = function() {
                    var e = (0, v.ok2)().getI18n,
                        t = (0, M.wA)(),
                        n = (0, M.d4)(A.makeMarginEffectType),
                        o = t.margin.queryUpdateEffectType,
                        r = (0, s.useState)(C),
                        i = r[0],
                        m = r[1],
                        j = (0, T.r0)(function() {
                            var e = (0, l._)(p().mark((function e(t, n) {
                                var a;
                                return p().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, u._)((0, d._)({}, i), (0, c._)({}, t, n)), e.next = 3, o(a);
                                        case 3:
                                            e.sent.success && m(a), (0, y.k0)({
                                                elementId: "marginAutoBorrow" === t ? "auto_borrow" : "auto_repay",
                                                opened: n
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), 2e3);
                    return (0, s.useEffect)((function() {
                        (n || (0, b.Gv)(n)) && m(n)
                    }), [n]), (0, a.jsxs)(g.A, {
                        sx: {
                            ".item": {
                                mb: "28px",
                                mt: "10px",
                                ".title": {
                                    alignItems: "center",
                                    fontSize: "16px",
                                    color: "t.primary",
                                    justifyContent: "space-between",
                                    mb: "10px"
                                },
                                ".remark": {
                                    fontSize: "14px",
                                    color: "t.third"
                                }
                            }
                        },
                        children: [(0, a.jsxs)(g.A, {
                            className: "item",
                            children: [(0, a.jsxs)(h.A, {
                                className: "title",
                                children: [(0, a.jsx)(x.A, {
                                    children: e("trd-auto-borrow")
                                }), (0, a.jsx)(f.A, {
                                    size: 16,
                                    checked: i.marginAutoBorrow,
                                    onChange: function() {
                                        return j("marginAutoBorrow", !i.marginAutoBorrow)
                                    }
                                })]
                            }), (0, a.jsx)(g.A, {
                                className: "remark",
                                children: e("trd-auto-borrow-desc")
                            })]
                        }), (0, a.jsxs)(g.A, {
                            className: "item",
                            children: [(0, a.jsxs)(h.A, {
                                className: "title",
                                children: [(0, a.jsx)(x.A, {
                                    children: e("trd-auto-repay")
                                }), (0, a.jsx)(f.A, {
                                    size: 16,
                                    checked: i.marginAutoRepay,
                                    onChange: function() {
                                        return j("marginAutoRepay", !i.marginAutoRepay)
                                    }
                                })]
                            }), (0, a.jsx)(g.A, {
                                className: "remark",
                                children: e("trd-auto-repay-desc")
                            })]
                        })]
                    })
                };
            const P = o().memo(j);
            var w = n("ZGYs"),
                N = n("8Qni"),
                I = function() {
                    var e = (0, s.useContext)(N.A).setSettingPanelType,
                        t = (0, v.ok2)().getI18n,
                        n = (0, s.useCallback)((function() {
                            e(w.Z.HEADER)
                        }), []);
                    return (0, a.jsx)(i.A, {
                        onBack: n,
                        title: t("trd-auto-borrow-repay"),
                        children: (0, a.jsx)("div", {
                            className: "trade-setting-content",
                            children: (0, a.jsx)(P, {})
                        })
                    })
                },
                S = function() {
                    var e = (0, v.ok2)().getI18n,
                        t = (0, v.Bm2)("Margin_auto_borrow_auto_repay"),
                        n = (0, s.useContext)(N.A).setSettingPanelType;
                    return t ? (0, a.jsxs)("div", {
                        className: "setting-item-content-i content-hover",
                        onClick: function() {
                            n(w.Z.AUTO_BORROW)
                        },
                        children: [(0, a.jsx)("div", {
                            className: "item-left",
                            children: e("trd-auto-borrow-repay")
                        }), (0, a.jsx)(r.A, {
                            className: "trade-common-icon go-info"
                        })]
                    }) : (0, a.jsx)(a.Fragment, {})
                };
            const k = o().memo(S)
        },
        "/5s8": (e, t, n) => {
            n.d(t, {
                A: () => b,
                c: () => M
            });
            var a = n("mguP"),
                s = n("mXdx"),
                o = n("DTvD"),
                r = n.n(o),
                i = n("MKk+"),
                l = n("Cc9T"),
                c = n("MD8j"),
                d = n("/jvT"),
                u = n("Qhol"),
                m = n("bQ69"),
                p = n("HSL5"),
                g = n("ZGYs"),
                h = n("OXr0"),
                x = n("8Qni"),
                f = n("BZR+"),
                M = function() {
                    var e = (0, o.useContext)(x.A).setSettingPanelType,
                        t = (0, u.ok2)().getI18n,
                        n = (0, o.useCallback)((function() {
                            e(g.Z.HEADER)
                        }), []);
                    return (0, s.jsx)(l.A, {
                        onBack: n,
                        title: t("trd-cross-margin-account-mode"),
                        children: (0, s.jsx)("div", {
                            className: "trade-setting-content",
                            children: (0, s.jsx)(p.A, {
                                showTitle: !1
                            })
                        })
                    })
                },
                v = function() {
                    var e = (0, a._)((0, u.Grl)(), 1)[0],
                        t = (0, u.ok2)().getI18n,
                        n = (0, u.nHk)(),
                        r = (0, u.wiF)(),
                        l = (0, o.useContext)(x.A).setSettingPanelType,
                        p = (0, c.d4)(d.makeMarginAccount),
                        M = (0, f.Qh)("CROSS"),
                        v = (0, u.h_5)().isCM2_0,
                        b = (0, o.useMemo)((function() {
                            return v ? !(Number(M) <= 5) : !(Number(M) < 10)
                        }), [M, v]);
                    if (e !== m.Gr.CROSS || !n || r || !b) return (0, s.jsx)(s.Fragment, {});
                    var T = null === p || void 0 === p ? void 0 : p.accountType;
                    return (0, s.jsxs)("div", {
                        className: "setting-item-content-i content-hover",
                        onClick: function() {
                            l(g.Z.CROSS_ACCOUNT), (0, h.VI)({
                                element_id: "cross_margin_account_mode"
                            })
                        },
                        children: [(0, s.jsx)("div", {
                            className: "item-left",
                            children: t("trd-cross-margin-account-mode")
                        }), (0, s.jsxs)("div", {
                            className: "item-right",
                            children: [t("trd-cross-margin-account-".concat("MARGIN_2" === T ? "Pro" : "normal", "-mode")), (0, s.jsx)(i.A, {
                                className: "trade-common-icon go-info"
                            })]
                        })]
                    })
                };
            const b = r().memo(v)
        },
        tSo1: (e, t, n) => {
            n.d(t, {
                Ay: () => N
            });
            var a = n("S+0I"),
                s = n("jbFV"),
                o = n.n(s),
                r = n("mXdx"),
                i = n("DTvD"),
                l = n("MD8j"),
                c = n("kcvK"),
                d = n("1C1L"),
                u = n("vRrZ"),
                m = n("pPGf"),
                p = n("Qhol"),
                g = n("vO1A"),
                h = n("Ykh1"),
                x = n("OXr0"),
                f = n("RrGb"),
                M = n("I4z7"),
                v = n("arbg");
            const b = function(e) {
                var t, n = e.tip,
                    a = e.children;
                return (0, r.jsx)(c.A, {
                    placement: "top",
                    variant: "gray",
                    useReactPopper: !0,
                    arrow: !0,
                    tooltips: (t = n, (0, r.jsx)("span", {
                        style: {
                            fontSize: "12px"
                        },
                        children: t
                    })),
                    children: a
                })
            };
            var T = function(e) {
                var t = e.dispatch,
                    n = e.getI18n,
                    s = e.isBnbDiscount,
                    l = e.isBnbDeduct,
                    c = (0, i.useState)(s),
                    d = c[0],
                    u = c[1],
                    m = (0, i.useState)(l),
                    p = m[0],
                    g = m[1],
                    h = function() {
                        var e = (0, a._)(o().mark((function e(n) {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return u(!d), e.next = 3, (0, v.y7)({
                                            on: !d
                                        });
                                    case 3:
                                        t.margin.queryMarginAccount(), t.margin.queryCrossTransMode();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    x = function() {
                        var e = (0, a._)(o().mark((function e(n) {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return g(!p), e.next = 3, (0, v.pM)({
                                            on: !p
                                        });
                                    case 3:
                                        t.margin.queryCrossTransMode();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "setting-item-content-i",
                        children: [(0, r.jsx)("div", {
                            className: "item-left",
                            children: (0, r.jsx)(b, {
                                tip: n("trd-use-bnb-interest-remark"),
                                children: (0, r.jsx)("div", {
                                    className: "item-decoration",
                                    children: n("trd-use-bnb-interest")
                                })
                            })
                        }), (0, r.jsx)(M.A, {
                            checked: d,
                            onChange: h,
                            size: "small"
                        })]
                    }), d && (0, r.jsxs)("div", {
                        className: "setting-item-content-i",
                        children: [(0, r.jsx)("div", {
                            className: "item-left",
                            children: (0, r.jsx)(b, {
                                tip: n("trd-auto-deducting-bnb-remark"),
                                children: (0, r.jsx)("div", {
                                    className: "item-decoration",
                                    children: n("trd-auto-deducting-bnb")
                                })
                            })
                        }), (0, r.jsx)(M.A, {
                            checked: p,
                            onChange: x,
                            size: "small"
                        })]
                    })]
                })
            };
            var A = n("/5s8"),
                y = n("cHWp"),
                C = n("QFrD"),
                j = function(e) {
                    var t = e.hanldeOpenClick,
                        n = e.isAuto,
                        a = e.hanldeClose,
                        s = (0, p.ok2)().getI18n;
                    return (0, r.jsxs)("div", {
                        className: "mode-overlay",
                        children: [(0, r.jsxs)("div", {
                            className: "".concat(n ? "active" : ""),
                            onClick: t,
                            children: [s("trd-isolated-trans-auto"), n && (0, r.jsx)(u.A, {})]
                        }), (0, r.jsxs)("div", {
                            className: "".concat(n ? "" : "active"),
                            onClick: a,
                            children: [s("trd-isolated-trans-manual"), !n && (0, r.jsx)(u.A, {})]
                        })]
                    })
                },
                P = function() {
                    var e = (0, p.ok2)().getI18n,
                        t = (0, p.nHk)(),
                        n = (0, p.stA)().isAutoIgnoreTradeType,
                        s = (0, l.wA)(),
                        u = (0, i.useState)(!1),
                        h = u[0],
                        f = u[1],
                        M = (0, i.useCallback)((function(e) {
                            f(e)
                        }), []),
                        v = function() {
                            var e = (0, a._)(o().mark((function e() {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, g.nB)();
                                        case 2:
                                            s.margin.queryIsolatedTransMode(), f(!1), (0, x.VI)({
                                                element_id: "isolated_margin_auto"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        b = function() {
                            var e = (0, a._)(o().mark((function e() {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, g.$s)();
                                        case 2:
                                            s.margin.queryIsolatedTransMode(), f(!1), (0, x.VI)({
                                                element_id: "isolated_margin_manual"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return t ? (0, r.jsxs)("div", {
                        className: "setting-item-content-i",
                        children: [(0, r.jsx)("div", {
                            className: "item-left",
                            children: (0, r.jsx)(c.A, {
                                placement: "top-end",
                                variant: "gray",
                                useReactPopper: !0,
                                arrow: !0,
                                tooltips: e("trd-isolated-trans-mode-tips"),
                                children: (0, r.jsx)("div", {
                                    className: "item-decoration",
                                    children: e("trd-isolated-trans-mode")
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "item-right",
                            children: (0, r.jsxs)(d.A, {
                                trigger: "click",
                                placement: "bottom-end",
                                arrow: !1,
                                overlay: (0, r.jsx)(j, {
                                    hanldeOpenClick: v,
                                    isAuto: n,
                                    hanldeClose: b
                                }),
                                onVisibleChange: M,
                                open: h,
                                children: [(0, r.jsx)("div", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: n ? e("trd-isolated-trans-auto", {
                                        defaultValue: "Auto"
                                    }) : e("trd-isolated-trans-manual", {
                                        defaultValue: "Manual"
                                    })
                                }), (0, r.jsx)(m.A, {
                                    className: "trade-common-icon"
                                })]
                            })
                        })]
                    }) : (0, r.jsx)(r.Fragment, {})
                },
                w = function() {
                    var e = (0, p.ok2)().getI18n,
                        t = (0, p.nHk)(),
                        n = (0, p.L1A)().isAutoIgnoreTradeType,
                        s = (0, p.Bm2)("web_cross_margin_transfer_mode"),
                        u = (0, l.wA)(),
                        h = function() {
                            var e = (0, a._)(o().mark((function e() {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, g.eP)();
                                        case 2:
                                            v(!1), u.margin.queryCrossTransMode();
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
                        x = function() {
                            var e = (0, a._)(o().mark((function e() {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, g.MH)();
                                        case 2:
                                            v(!1), u.margin.queryCrossTransMode();
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
                        f = (0, i.useState)(!1),
                        M = f[0],
                        v = f[1],
                        b = (0, i.useCallback)((function(e) {
                            v(e)
                        }), []);
                    return t && s ? (0, r.jsxs)("div", {
                        className: "setting-item-content-i content-hover",
                        children: [(0, r.jsx)("div", {
                            className: "item-left",
                            children: (0, r.jsx)(c.A, {
                                placement: "top-end",
                                variant: "gray",
                                arrow: !0,
                                useReactPopper: !0,
                                tooltips: e("trd-cross-trans-mode-tips"),
                                children: (0, r.jsx)("div", {
                                    className: "item-decoration",
                                    children: e("trd-cross-trans-mode")
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "item-right",
                            children: (0, r.jsxs)(d.A, {
                                trigger: "click",
                                placement: "bottom-end",
                                arrow: !1,
                                overlay: (0, r.jsx)(j, {
                                    hanldeOpenClick: h,
                                    isAuto: n,
                                    hanldeClose: x
                                }),
                                onVisibleChange: b,
                                open: M,
                                children: [(0, r.jsx)("div", {
                                    children: n ? e("trd-isolated-trans-auto", {
                                        defaultValue: "Auto"
                                    }) : e("trd-isolated-trans-manual", {
                                        defaultValue: "Manual"
                                    })
                                }), (0, r.jsx)(m.A, {
                                    className: "trade-common-icon"
                                })]
                            })
                        })]
                    }) : (0, r.jsx)(r.Fragment, {})
                };
            const N = function() {
                var e = (0, p.ok2)().getI18n,
                    t = (0, l.wA)(),
                    n = (0, p.i24)(),
                    a = (0, p.nHk)(),
                    s = (0, p.zpw)(),
                    o = (0, p.Bm2)("Margin_auto_borrow_auto_repay"),
                    c = (0, p.mcl)(),
                    d = (0, C.b)(),
                    u = (0, p.DFo)().isPmAccount,
                    m = (0, h.N8)(),
                    g = m.isBnbDiscount,
                    x = m.isBnbDeduct;
                return (0, i.useEffect)((function() {
                    !n && a && t.margin.queryUniAccoutUpgrateLevle()
                }), [n]), !a || n ? (0, r.jsx)(r.Fragment, {}) : o || s ? (0, r.jsxs)("div", {
                    className: "setting-item",
                    children: [(0, r.jsx)("div", {
                        className: "setting-item-title",
                        children: e("trd-margin-related")
                    }), (0, r.jsx)(y.A, {}), !c && (0, r.jsx)(f.A, {}), !u && (0, r.jsx)(A.A, {}), !u && (0, r.jsx)(w, {}), !d && (0, r.jsx)(P, {}), (0, r.jsx)(T, {
                        dispatch: t,
                        getI18n: e,
                        isBnbDiscount: g,
                        isBnbDeduct: x
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        OXr0: (e, t, n) => {
            n.d(t, {
                EQ: () => o,
                VI: () => r,
                vV: () => s
            });
            var a = n("wtFP"),
                s = function(e) {
                    var t = e.tradeType;
                    (0, a.u4)("$WebClick", {
                        eventName: "settings_center",
                        title: "spot_heatmap_switch",
                        $element_id: "web_click_setting_24hChange",
                        pageName: a.$1[t]
                    })
                },
                o = function(e) {
                    var t = e.tradeType,
                        n = e.timeZone;
                    (0, a.u4)("$WebClick", {
                        eventName: "settings_center",
                        title: "spot_heatmap_switch",
                        $element_id: "web_click_setting_24hChange",
                        pageName: a.$1[t],
                        df_10: "UTC".concat(n)
                    })
                },
                r = function(e) {
                    var t = e.element_id;
                    (0, a.u4)("$WebClick", {
                        module: "preference_settings",
                        $element_id: t
                    })
                }
        },
        "5lZq": () => {}
    }
]);