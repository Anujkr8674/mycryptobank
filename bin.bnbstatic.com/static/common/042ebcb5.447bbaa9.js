"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c8b2c99b-b29a-51fd-9af3-84f89d9ca90a")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [7478], {
        "5XId": (e, t, r) => {
            r.d(t, {
                j: () => l
            });
            var i, a = r("yys2");
            ! function(e) {
                e.RTL = "rtl", e.LTR = "ltr"
            }(i || (i = {}));
            var l = function() {
                var e = (0, a.A)();
                return {
                    direction: e,
                    isRtl: e === i.RTL,
                    isLtr: e === i.LTR
                }
            }
        },
        NrY2: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var i = r("DTvD");
            const a = i.createContext("ltr")
        },
        yys2: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var i = r("DTvD"),
                a = r("NrY2");

            function l() {
                return i.useContext(a.A)
            }
        },
        Q2WF: (e, t, r) => {
            r.d(t, {
                $: () => o,
                A: () => c
            });
            var i = r("BK7R"),
                a = r("jg1C"),
                l = (r("DTvD"), r("Y4uf")),
                n = r("Lp65"),
                o = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "#F0B90B" : t,
                        i = e.height,
                        n = void 0 === i ? "24px" : i,
                        o = e.width,
                        c = void 0 === o ? "120px" : o;
                    return (0, a.jsx)(l.A, {
                        viewBox: "0 0 5120 1024",
                        style: {
                            height: n,
                            width: c,
                            color: r
                        },
                        color: r,
                        children: (0, a.jsx)("path", {
                            fill: r,
                            d: "M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                        })
                    })
                };
            const c = function(e) {
                var t = e.sx,
                    r = void 0 === t ? {} : t;
                return (0, a.jsx)(n.A, {
                    style: (0, i.A)({
                        alignItems: "center",
                        padding: "4px"
                    }, r),
                    children: (0, a.jsx)(o, {})
                })
            }
        },
        yKdM: (e, t, r) => {
            r.d(t, {
                yN: () => U,
                ZL: () => W,
                F8: () => O,
                c$: () => K,
                OY: () => H,
                Xb: () => V,
                cQ: () => j,
                Xq: () => z,
                c5: () => E,
                jN: () => G,
                cK: () => M,
                Xk: () => N,
                cZ: () => F,
                zW: () => Y,
                n3: () => q,
                hG: () => _,
                E: () => re,
                Sm: () => Z,
                $R: () => oe,
                W3: () => ee,
                r8: () => $,
                ly: () => ae,
                wL: () => Q
            });
            var i = r("ezuS"),
                a = r("BK7R"),
                l = r("QUKP"),
                n = r("tEf9"),
                o = r("jg1C"),
                c = r("5XId"),
                p = r("JfTh"),
                s = r("eeEA"),
                g = r("Q2WF"),
                d = r("aVXY"),
                u = r("4Kx8"),
                x = r("w/Qz");
            const f = function(e) {
                return (0, o.jsxs)(x.A, (0, l.A)((0, a.A)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "35",
                    height: "35",
                    viewBox: "0 0 35 35",
                    fill: "none"
                }, e), {
                    children: [(0, o.jsx)("ellipse", {
                        rx: "14.5833",
                        ry: "14.5833",
                        transform: "matrix(-1 0 0 1 17.4987 17.4993)",
                        stroke: "white",
                        strokeOpacity: "0.4"
                    }), (0, o.jsx)("path", {
                        d: "M32.082 17.4993C32.082 9.4452 25.5529 2.91602 17.4987 2.91602",
                        stroke: "white"
                    }), (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.3381 9.86731L10.5817 21.6237L10.3906 24.6076L13.3742 24.4165L14.7597 23.0311H21.5098V22.2412L15.5496 22.2412L17.2321 20.5588L24.6022 20.5588V19.7688L18.0221 19.7688L25.1309 12.6601L22.3381 9.86731ZM24.0138 12.6601L22.3381 10.9844L20.8246 12.4979L22.5003 14.1736L24.0138 12.6601ZM11.351 21.9715L20.266 13.0565L21.9417 14.7322L13.0264 23.6472L11.2363 23.7619L11.351 21.9715Z",
                        fill: "white"
                    }), (0, o.jsx)("path", {
                        d: "M23.0281 23.0308H24.6021V22.2408H23.0281V23.0308Z",
                        fill: "white"
                    })]
                }))
            };
            const b = function(e) {
                return (0, o.jsxs)(x.A, (0, l.A)((0, a.A)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "35",
                    height: "35",
                    viewBox: "0 0 35 35",
                    fill: "none"
                }, e), {
                    children: [(0, o.jsx)("circle", {
                        r: "14.5833",
                        transform: "matrix(1 0 0 -1 17.4993 17.4999)",
                        stroke: "white",
                        strokeOpacity: "0.4"
                    }), (0, o.jsx)("path", {
                        d: "M2.91602 17.4999C2.91602 25.5541 9.4452 32.0833 17.4993 32.0833",
                        stroke: "white"
                    }), (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M25.0028 12.7769H21.7065C22.1663 12.1624 22.244 11.3086 21.836 10.6019C21.2898 9.65582 20.0801 9.33168 19.1341 9.87787C18.5583 10.2103 17.9143 11.4279 17.4984 12.3303C17.0824 11.4279 16.4384 10.2103 15.8627 9.87787C14.9166 9.33168 13.707 9.65582 13.1608 10.6019C12.7527 11.3086 12.8304 12.1624 13.2902 12.7769H9.99414V15.9366H11.179V24.6093H23.8179V15.9366H25.0028V12.7769ZM18.1964 12.7032C18.3787 12.7204 18.5753 12.7363 18.7776 12.7485C19.2079 12.7745 19.6465 12.7826 20.022 12.7552C20.4289 12.7256 20.6456 12.6609 20.717 12.6197C21.2852 12.2916 21.4799 11.565 21.1519 10.9968C20.8238 10.4286 20.0972 10.2339 19.529 10.562C19.4576 10.6032 19.2932 10.7586 19.0641 11.0961C18.8526 11.4076 18.6404 11.7915 18.4477 12.1771C18.3571 12.3585 18.2726 12.5367 18.1964 12.7032ZM15.9186 13.5668H10.7841V15.1467H11.179V15.1455H15.9186V13.5668ZM18.2884 13.5668H16.7086V15.1455H18.2884V13.5668ZM19.0783 15.1455V13.5668H24.2129V15.1467H23.8179V15.1455H19.0783ZM18.2884 15.9366H16.7086L16.7085 23.8193H18.2884L18.2884 15.9366ZM15.9186 15.9366H11.969V23.8194H15.9186L15.9186 15.9366ZM19.0783 23.8194L19.0783 15.9366H23.028V23.8194H19.0783ZM14.2797 12.6197C13.7115 12.2916 13.5168 11.565 13.8449 10.9968C14.1729 10.4286 14.8995 10.2339 15.4677 10.562C15.5392 10.6032 15.7035 10.7586 15.9327 11.0961C16.1441 11.4076 16.3564 11.7915 16.549 12.1771C16.6396 12.3585 16.7241 12.5367 16.8004 12.7032C16.6181 12.7204 16.4214 12.7363 16.2191 12.7485C15.7888 12.7745 15.3502 12.7826 14.9748 12.7552C14.5679 12.7256 14.3512 12.6609 14.2797 12.6197Z",
                        fill: "white"
                    })]
                }))
            };
            var v, m, h, T, k, B, S, P = function(e) {
                    var t = e.isRTL;
                    return {
                        titleSx: {
                            width: ["343px", "630px", "996px"],
                            color: "#F8D33A",
                            fontSize: ["24px", "32px", "48px"],
                            lineHeight: ["31px", "40px", "64px"],
                            mx: "auto",
                            textShadow: "unset",
                            fontStyle: "unset"
                        },
                        mainBtnSX: {
                            fontStyle: "unset"
                        },
                        bgInfo: function() {
                            return {
                                background: "linear-gradient(180deg, #0B0E11 ".concat(t ? "77.14%" : "22.86%", ", #5E6673 65.57%)")
                            }
                        },
                        bgBoxInfo: function(e) {
                            return {
                                backgroundImage: "url(".concat(e.bgBox, ")"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: ["center 96px", "center 76px"],
                                backgroundSize: "385px"
                            }
                        },
                        claimBgInfo: function() {
                            return {
                                background: "linear-gradient(180deg, #0B0E11 ".concat(t ? "77.14%" : "22.86%", ", #5E6673 65.57%)")
                            }
                        },
                        claimBgBox2: {
                            display: "none"
                        },
                        claimBgBoxInfo: function(e) {
                            return {
                                backgroundImage: "url(".concat(e.bgBox, ")"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center -22px",
                                backgroundSize: "385px"
                            }
                        },
                        registerBgInfo: function(e) {
                            return {
                                width: "100vw",
                                backgroundImage: "url(".concat(e.inviteeBg, ")"),
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "330px"
                            }
                        },
                        registerBgBoxInfo: function(e) {
                            return {
                                backgroundImage: "url(".concat(e.inviteeImg, ")"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center -10px",
                                backgroundSize: "385px",
                                width: "385px",
                                height: "260px"
                            }
                        },
                        expiredBgBoxInfo: function() {
                            return {
                                display: "block",
                                margin: "0 auto"
                            }
                        },
                        expiredBgInfo: function() {
                            return {
                                background: "linear-gradient(180deg, #0B0E11  ".concat(t ? "63.39%" : "36.61%", ", #5E6673 100%)"),
                                backgroundImage: "unset"
                            }
                        },
                        expiredBtnSx: {
                            fontStyle: "unset"
                        },
                        sharePosterTitleSx: {
                            width: "142px",
                            color: "#FFFFFF",
                            lineHeight: "32px"
                        },
                        sharePosterStepIcon: {
                            step1: "".concat(u.K5, "/static/images/activity/referral-lite/v2-3/poster-icon1.png"),
                            step2: "".concat(u.K5, "/static/images/activity/referral-lite/v2-3/poster-icon2.png")
                        },
                        sharePosterDescSx: function(e) {
                            return {
                                fontWeight: "700",
                                position: "absolute",
                                top: "vi" === e ? "200px" : "225px"
                            }
                        },
                        hasRewardShare: !0
                    }
                },
                A = {
                    fontFamily: '"Chakra Petch", "IBM Plex Sans"',
                    fontStyle: "unset",
                    fontWeight: "700"
                },
                D = function() {
                    return {
                        hasRewardShare: !0,
                        claimBgBox2: {
                            display: "none"
                        },
                        menuSx: {
                            ".menu-reward": {
                                background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                "::before": {
                                    height: "32px",
                                    position: "absolute",
                                    left: "-1px",
                                    top: "39px",
                                    borderLeft: "1px solid #fff",
                                    content: '""',
                                    display: ["none", "block"]
                                }
                            },
                            ".menu-referral": {
                                background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                "::before": {
                                    width: "95px",
                                    margin: "0 auto",
                                    position: "relative",
                                    top: "-1px",
                                    borderTop: "1px solid #fff",
                                    content: '""',
                                    display: ["none", "block"]
                                },
                                "::after": {
                                    width: "19px",
                                    margin: "0 auto",
                                    position: "absolute",
                                    top: "-2.5px",
                                    borderTop: "4px solid #fff",
                                    content: '""',
                                    display: ["none", "block"],
                                    boxShadow: "0px 0px 5.37026px rgb(255 255 255 / 60%)"
                                }
                            },
                            ".menu-tips": {
                                background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                "::before": {
                                    height: "54px",
                                    position: "absolute",
                                    right: "-1px",
                                    top: "17px",
                                    borderRight: "1px solid #fff",
                                    content: '""',
                                    display: ["none", "block"]
                                }
                            },
                            ".menu-map": {
                                background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.4)"
                            }
                        },
                        howToSx: {
                            background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            padding: "24px 60px 40px",
                            "::before": {
                                width: ["843px", "592px", "843px"],
                                position: "relative",
                                top: "-25px",
                                left: "30px",
                                borderTop: "1px solid #fff",
                                content: '""',
                                display: ["none", "block"]
                            },
                            "::after": {
                                width: ["216px", "159px", "216px"],
                                position: "absolute",
                                top: "-2px",
                                left: ["217px", "217px", "302px"],
                                borderTop: "4px solid #fff",
                                content: '""',
                                display: ["none", "block"],
                                boxShadow: "0px 0px 5.37026px rgb(255 255 255 / 60%)"
                            }
                        },
                        sharePosterTitleSx: (0, a.A)({
                            lineHeight: "32px",
                            width: "280px",
                            margin: "68px 22.6px 0 25px",
                            color: "#FFFFFF"
                        }, A),
                        sharePosterStepIcon: {
                            step1: (0, o.jsx)(f, {
                                size: "30px",
                                minWidth: "30px",
                                height: "30px"
                            }),
                            step2: (0, o.jsx)(b, {
                                size: "30px",
                                minWidth: "30px",
                                height: "30px"
                            })
                        },
                        sharePosterDescSx: function() {
                            return {
                                top: "152px",
                                position: "absolute"
                            }
                        },
                        rewardSharePosterTitleSx: (0, l.A)((0, a.A)({}, A), {
                            "& .desc": {
                                fontFamily: "unset",
                                fontWeight: "500"
                            }
                        }),
                        titleSx: (0, a.A)({
                            width: ["343px", "630px", "996px"],
                            color: "#FFFFFF",
                            fontSize: ["24px", "32px", "48px"],
                            lineHeight: ["31px", "40px", "64px"],
                            mx: "auto",
                            textShadow: "unset",
                            "& span": {
                                background: "linear-gradient(180deg, #F0B90B 0%, #F8D33A 100%)",
                                "-webkitBackgroundClip": "text",
                                "-webkitTextFillColor": "transparent",
                                backgroundClip: "text",
                                textFillColor: "#0000"
                            }
                        }, A),
                        registerTitleSx: (0, a.A)({
                            width: ["343px", "534px", "788px"]
                        }, A),
                        registerBtnSx: (0, a.A)({}, A),
                        mainBtnSX: (0, a.A)({}, A),
                        expiredBtnSx: (0, a.A)({}, A),
                        expiredDescSx: (0, a.A)({}, A),
                        rulesTitle: (0, a.A)({}, A),
                        ruleTypeASx: {
                            background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.4)"
                        },
                        ruleTypeBSx: {
                            background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                            borderRadius: "20px",
                            border: "1px solid #fff6"
                        },
                        infoMessageSx: (0, a.A)({}, A),
                        bgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundPosition: ["center -17px", "center 78px", "center 83px"],
                                backgroundSize: ["385px", "768px", "1440px"],
                                backgroundRepeat: "repeat"
                            }
                        },
                        bgBoxInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5Spotlight, ")"), "url(".concat(e.bgTabletSpotlight, ")"), "url(".concat(e.bgPCSpotlight, ")")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: ["center 94px", "center 76px"],
                                backgroundSize: "385px"
                            }
                        },
                        expiredBgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundPosition: ["center -83px", "center 0px", "center 6px"],
                                backgroundSize: ["385px", "768px", "1440px"],
                                backgroundRepeat: "repeat"
                            }
                        },
                        expiredBgBoxInfo: function() {
                            return {
                                backgroundImage: ["url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/expired-spot-375.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/expired-spot-768.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/expired-spot-1440.png)")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center 0px",
                                backgroundSize: "385px",
                                width: "390px",
                                height: "350px",
                                margin: "0 auto"
                            }
                        },
                        claimBgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundPosition: ["center -83px", "center 0px", "center 6px"],
                                backgroundSize: ["385px", "768px", "1440px"],
                                backgroundRepeat: "repeat"
                            }
                        },
                        claimBgBoxInfo: function() {
                            return {
                                backgroundImage: ["url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/invitee-spot-375.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/invitee-spot-768.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/mbx5ya/invitee-spot-1440.png)")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center -24px",
                                backgroundSize: "385px",
                                minHeight: "500px",
                                top: "125px"
                            }
                        },
                        claimNoticeSx: {
                            background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                            border: "0.75px solid rgba(255, 255, 255, 0.4)",
                            borderRadius: "8px",
                            width: ["calc(100vw - 32px)", "calc(100vw - 48px)"],
                            maxWidth: "1200px",
                            ".gift-icon": {
                                display: "none"
                            },
                            ".outline::before": {
                                width: ["112px", "244px", "332px"],
                                margin: "0 auto",
                                position: "relative",
                                top: ["-2px", "-26px"],
                                borderTop: "4px solid #fff",
                                content: '""',
                                display: "block",
                                boxShadow: "0px 0px 5.37026px rgb(255 255 255 / 60%)"
                            },
                            ".outline::after": {
                                width: ["309px", "680px", "900px"],
                                margin: "0 auto",
                                position: "relative",
                                borderTop: "1px solid #FFFFFF",
                                content: '""',
                                display: "block",
                                top: ["-4.5px", "-28.5px"]
                            }
                        },
                        registerBgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.registerBgH5, ")"), "url(".concat(e.registerBgTablet, ")"), "url(".concat(e.registerBgPC, ")")],
                                backgroundPosition: ["center -83px", "center 0px", "center 6px"],
                                backgroundSize: ["385px", "768px", "1440px"]
                            }
                        },
                        registerBgBoxInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.registerKeyImgH5, ")"), "url(".concat(e.registerKeyImgTablet, ")"), "url(".concat(e.registerKeyImgPC, ")")],
                                width: ["343px", "720px", "996px"],
                                height: "343px",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain"
                            }
                        },
                        partnerSx: {
                            background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            ".partner_info": {
                                background: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.4)",
                                mx: ["12px", "16px", "24px"],
                                borderStyle: "solid solid none solid",
                                borderRadius: "8px 8px 0 0",
                                height: ["66px", "66px", "70px"],
                                position: "relative",
                                "::before": {
                                    width: "29.65px",
                                    position: "absolute",
                                    top: "-2.5px",
                                    borderTop: "4px solid #fff",
                                    content: '""',
                                    display: "block",
                                    boxShadow: "0px 0px 5.4px rgb(255 255 255 / 60%)",
                                    left: ["232px", "543px", "777px"]
                                },
                                "::after": {
                                    width: ["289px", "650px", "1072px"],
                                    position: "absolute",
                                    borderTop: "1px solid #FFFFFF",
                                    content: '""',
                                    display: "block",
                                    top: "-1px",
                                    left: "16px"
                                }
                            }
                        },
                        isDefaultRules: !0,
                        isRewardType2: !0,
                        isStepType2: !0
                    }
                },
                y = ["cs-CZ", "es-LA", "fp-PH", "fr-FR", "id-ID", "ja-JP", "lv-LV", "pl-PL", "pt-BR", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-TW"],
                w = [
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
                        ["pt-PT"], "pt-PT"
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
                    ],
                    [
                        ["ar"], "ar"
                    ]
                ],
                I = w.reduce((function(e, t) {
                    var r = (0, d.A)(t, 2),
                        i = r[0],
                        a = r[1];
                    return i.forEach((function(t) {
                        e[t] = a
                    })), e
                }), {}),
                C = function(e) {
                    return w.map((function(e) {
                        return e[1]
                    })).find((function(t) {
                        return t.toLowerCase() === e.toLowerCase()
                    }))
                },
                R = function(e, t) {
                    var r = t[e] || {};
                    return {
                        getPath: function(e) {
                            if (r.unUsedList && r.unUsedList.includes(e)) return "";
                            var t = r.defaultImgList && r.defaultImgList.some((function(t) {
                                return t === e
                            }));
                            return "".concat(u.K5).concat(t ? "/static/images/activity/referral-lite/activity-blind-box/" : r.static).concat(e)
                        },
                        getSharePath: function(e) {
                            return "".concat(u.Gf).concat(r.shareStatic).concat(e)
                        }
                    }
                },
                L = function(e, t, r) {
                    var n, o = (null === (n = r[e]) || void 0 === n ? void 0 : n.reduce((function(e, r) {
                        return (0, l.A)((0, a.A)({}, e), (0, i.A)({}, r, t("social-media-wide-".concat(r.toLowerCase(), ".png"))))
                    }), {})) || {};
                    return (0, l.A)((0, a.A)({}, o), {
                        en: t("social-media-wide.png")
                    })
                },
                H = "CNY2025",
                F = "Moonbix",
                N = "LNYR24",
                M = "NYR24",
                G = "MYB23J",
                E = "JLMBX",
                z = "MBX5YA",
                j = "mybox3",
                V = "0214",
                K = "NEWYEAR1",
                O = "RL2YD2FA",
                U = [V, K, O, j, z, E, G, M, N, F, H],
                W = U.filter((function(e) {
                    return ![N, F].includes(e)
                })),
                Z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return U.includes(e) || "ACTIVITY_2" === t.type
                },
                Y = "adminConfig",
                X = r.g.document ? null === (v = r.g.location.pathname.split("limited-referral/")[1]) || void 0 === v ? void 0 : v.split("/")[0] : null,
                _ = null !== (m = (h = {}, (0, i.A)(h, H, "2.10"), (0, i.A)(h, F, "2.9"), (0, i.A)(h, N, "2.8"), (0, i.A)(h, M, "2.7"), (0, i.A)(h, G, "2.6"), (0, i.A)(h, E, "2.5"), (0, i.A)(h, z, "2.4"), (0, i.A)(h, j, "2.3"), (0, i.A)(h, V, "2.2"), (0, i.A)(h, K, "2.1"), (0, i.A)(h, O, "2.0"), h)[X || "null"]) && void 0 !== m ? m : X,
                J = (T = {}, (0, i.A)(T, Y, {
                    static: "/static/images/activity/referral-lite/mbx5ya/",
                    shareStatic: "/images/referral-lite/mbx5ya/",
                    unUsedList: ["mobile-background-1.png", "mobile-background-3.png"]
                }), (0, i.A)(T, H, {
                    static: "/static/images/activity/referral-lite/v2-10/",
                    shareStatic: "/images/referral-lite/v2-10/",
                    defaultImgList: ["arrow-new.png", "popup-box-bg.png"],
                    unUsedList: ["normal.json", "special.json", "web-background.png", "mobile-background-1.png"]
                }), (0, i.A)(T, F, {
                    static: "/static/images/activity/referral-lite/v2-9/",
                    shareStatic: "/images/referral-lite/v2-9/",
                    defaultImgList: ["arrow-new.png", "popup-box-bg.png"],
                    unUsedList: ["normal.json", "special.json", "web-background.png", "mobile-background-1.png"]
                }), (0, i.A)(T, N, {
                    static: "/static/images/activity/referral-lite/v2-8/",
                    shareStatic: "/images/referral-lite/v2-8/",
                    defaultImgList: ["arrow-new.png", "popup-box-bg.png"],
                    unUsedList: ["normal.json", "special.json"]
                }), (0, i.A)(T, M, {
                    static: "/static/images/activity/referral-lite/v2-7/",
                    shareStatic: "/images/referral-lite/v2-7/",
                    defaultImgList: ["arrow-new.png"]
                }), (0, i.A)(T, G, {
                    static: "/static/images/activity/referral-lite/v2-6/",
                    shareStatic: "/images/referral-lite/v2-6/",
                    unUsedList: ["mobile-background-1.png", "mobile-background-3.png"]
                }), (0, i.A)(T, E, {
                    static: "/static/images/activity/referral-lite/v2-5/",
                    shareStatic: "/images/referral-lite/v2-5/",
                    unUsedList: ["mobile-background-1.png", "mobile-background-3.png"]
                }), (0, i.A)(T, z, {
                    static: "/static/images/activity/referral-lite/mbx5ya/",
                    shareStatic: "/images/referral-lite/mbx5ya/",
                    unUsedList: ["mobile-background-1.png", "mobile-background-3.png"]
                }), (0, i.A)(T, j, {
                    static: "/static/images/activity/referral-lite/v2-3/",
                    shareStatic: "/images/referral-lite/v2-3/",
                    unUsedList: ["mobile-background-1.png", "mobile-background-3.png"]
                }), (0, i.A)(T, V, {
                    static: "/static/images/activity/referral-lite/valentine/",
                    shareStatic: "/images/referral-lite/valentine/"
                }), (0, i.A)(T, K, {
                    static: "/static/images/activity/referral-lite/happy-new-year/",
                    shareStatic: "/images/referral-lite/happy-new-year/",
                    defaultImgList: ["arrow-new.png"]
                }), (0, i.A)(T, O, {
                    static: "/static/images/activity/referral-lite/activity-blind-box/",
                    shareStatic: "/images/referral-lite/activity-blind-box/"
                }), T),
                q = {
                    CASH: "CASH",
                    CARD: "CARD",
                    P2P: "P2P",
                    CRYPTO: "CRYPTO"
                },
                Q = function(e) {
                    var t, r = e.isRTL;
                    return t = {
                        default: {
                            qaLink: "/support/faq/d06a66559cdd4185aea360752405633e",
                            rule2Link: "",
                            limitedLang: [],
                            blockLangs: [],
                            specialBoxList: [3, 8, 13, 19],
                            limitBoxCount: 20,
                            isTGBlock: !1,
                            isAppBlock: !1,
                            hasCombineTasks: !1,
                            topReward: "",
                            registerChannel: void 0,
                            hasCryptoDeposit: !0,
                            isHiddenNav: !1,
                            sharePosterDescSx: function(e) {},
                            claimBgInfo: function(e) {},
                            claimBgBoxInfo: function(e) {},
                            registerBgInfo: function(e) {},
                            registerBgBoxInfo: function(e) {},
                            boxListSx: {},
                            bgInfo: function(e) {},
                            sharePosterTitleSx: {},
                            menuSx: {},
                            sharePosterStepIcon: {},
                            rewardSharePosterTitleSx: {},
                            titleSx: {},
                            registerTitleSx: {},
                            registerBtnSx: {},
                            mainBtnSX: {},
                            expiredBtnSx: {},
                            expiredDescSx: {},
                            rulesTitle: {},
                            ruleTypeASx: {},
                            ruleTypeBSx: {},
                            infoMessageSx: {},
                            claimNoticeSx: {},
                            howToSx: {},
                            ruleBtnBg: null,
                            ruleBtnColor: null,
                            isSkipNovice2: !1,
                            redirectCountry: {},
                            countryTaskMap: {},
                            isNoviceGuideEnabled: !0
                        }
                    }, (0, i.A)(t, Y, (0, l.A)((0, a.A)({}, function(e) {
                        return e.isRTL, (0, l.A)((0, a.A)({}, D()), {
                            bgInfo: function(e) {
                                return {
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center 66px", "center 66px", "center 66px"],
                                    backgroundSize: ["375px", "768px", "1440px"],
                                    backgroundRepeat: "repeat"
                                }
                            }
                        })
                    }({
                        isRTL: r
                    })), {
                        topReward: "+ 1 BNB"
                    })), (0, i.A)(t, H, (0, l.A)((0, a.A)({}, {
                        carouselBoxSx: function(e) {
                            return e ? {
                                top: "35%",
                                "& img": {
                                    minWidth: "115px",
                                    minHeight: "115px"
                                }
                            } : {
                                top: "30%"
                            }
                        },
                        claimBgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center 0",
                                backgroundSize: ["100%", "100%", "1440px"],
                                backgroundColor: "#0B0E11"
                            }
                        },
                        bgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center 0",
                                backgroundSize: ["100%", "100%", "1440px"],
                                backgroundColor: "#0B0E11"
                            }
                        },
                        boxListSx: {
                            marginTop: ["24px", "-26px"]
                        },
                        sharePosterTitleSx: {
                            color: "#FFFFFF"
                        },
                        sharePosterDescSx: function() {
                            return {
                                color: "#FFFFFF"
                            }
                        },
                        registerBgBoxInfo: function(e) {
                            return {
                                backgroundImage: "url(".concat(e.inviteeImg, ")"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center -10px",
                                backgroundSize: "385px",
                                width: "385px",
                                height: "260px"
                            }
                        },
                        ruleTypeASx: {
                            backgroundColor: "#674022",
                            borderColor: "#D0980D",
                            color: "#FCEA9C"
                        },
                        ruleTypeBSx: {
                            backgroundColor: "#674022",
                            borderColor: "#D0980D",
                            color: "#FCEA9C"
                        }
                    }), {
                        isTGBlock: !1,
                        isAppBlock: !0,
                        hasCombineTasks: !0,
                        limitBoxCount: 10,
                        specialBoxList: [],
                        hasCryptoDeposit: !1,
                        registerChannel: "CNY2025",
                        topReward: "$500",
                        isSkipNovice2: !0,
                        qaLink: "/support/announcement/b9e43cc5b9584c6ea8605482645bf0da",
                        rule2Link: "/fee/tradingPromote",
                        redirectCountry: {
                            IN: "en-IN"
                        },
                        countryTaskMap: {
                            VN: [q.P2P],
                            CN: [q.P2P],
                            TW: [q.P2P, q.CARD],
                            ID: [q.P2P, q.CARD],
                            PH: [q.P2P, q.CARD],
                            MM: [q.P2P],
                            LA: [q.P2P],
                            MN: [q.P2P, q.CARD],
                            KH: [q.P2P, q.CARD]
                        },
                        isNoviceGuideEnabled: !1
                    })), (0, i.A)(t, F, (0, l.A)((0, a.A)({}, {
                        isHiddenNav: !0,
                        sharePosterTitleSx: {
                            color: "#FFFFFF"
                        },
                        sharePosterDescSx: function() {
                            return {
                                color: "#FFFFFF"
                            }
                        },
                        claimBgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundPosition: ["center -117px", "center -24px", "center -169px"],
                                backgroundSize: ["375px", "768px", "1440px"],
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "#0B0E11"
                            }
                        },
                        claimBgBoxInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgBox, ")"), "unset"],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: ["center -22px", "center -48px"],
                                backgroundSize: ["385px", "460px"]
                            }
                        },
                        registerBgInfo: function(e) {
                            return {
                                minHeight: "100vh",
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.registerKeyImgTablet, ")"), "url(".concat(e.registerKeyImgPC, ")")],
                                backgroundPosition: ["center -60px", "center 64px", "center 64px"],
                                backgroundRepeat: "no-repeat",
                                backgroundSize: ["375px", "768px", "1440px"],
                                backgroundColor: "#0B0E11"
                            }
                        },
                        registerBgBoxInfo: function(e) {
                            return {
                                backgroundImage: "url(".concat(e.registerKeyImgH5, ")"),
                                width: "343px",
                                height: "343px",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain"
                            }
                        },
                        boxListSx: {
                            backgroundPosition: "center -17px"
                        },
                        bgInfo: function(e) {
                            return {
                                backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: ["center -54px", "center 0px", "center -47px"],
                                backgroundSize: ["375px", "768px", "1440px"],
                                backgroundColor: "#0B0E11"
                            }
                        }
                    }), {
                        isTGBlock: !0,
                        isAppBlock: !0,
                        registerChannel: "Moonbix",
                        topReward: "+ 1 BNB",
                        qaLink: "/support/announcement/cf08ee8dbb9043718fd02d03be89c078"
                    })), (0, i.A)(t, N, (0, l.A)((0, a.A)({}, function(e) {
                        return e.isRTL, {
                            sharePosterTitleSx: {
                                color: "#fff"
                            },
                            boxListSx: {
                                marginTop: ["52px", "14px"]
                            },
                            menuSx: {
                                ".menu-reward": {
                                    background: [null, "#0D0003"]
                                },
                                ".menu-referral": {
                                    background: [null, "#0D0003"]
                                },
                                ".menu-tips": {
                                    background: [null, "#0D0003"]
                                },
                                ".menu-map": {
                                    background: [null, "#0D0003"]
                                }
                            },
                            sharePosterDescSx: function() {
                                return {
                                    "& li>div:nth-of-type(1)": {
                                        backgroundColor: "#fff",
                                        color: "#CA2D2F"
                                    },
                                    "& li>div:nth-of-type(2)": {
                                        color: "#fff !important"
                                    }
                                }
                            },
                            finalBoxCoinSx: {
                                marginBlockStart: "-79px",
                                marginInlineStart: "-6px"
                            },
                            carouselBoxSx: function(e) {
                                return e ? {
                                    top: "35%",
                                    "& img": {
                                        minWidth: "115px",
                                        minHeight: "115px"
                                    }
                                } : {
                                    top: "19%"
                                }
                            },
                            registerBgBoxInfo: function(e) {
                                return {
                                    backgroundImage: "url(".concat(e.inviteeImg, ")"),
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center -10px",
                                    backgroundSize: "385px",
                                    width: "385px",
                                    height: "260px"
                                }
                            },
                            bgInfo: function(e) {
                                return {
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center 6px", "center -30px", "center 0"],
                                    backgroundSize: "100%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: ["#000000", "#201412"]
                                }
                            },
                            ruleTypeASx: {
                                backgroundColor: "#181A20",
                                color: ["#848E9C !important"],
                                border: "1px solid #474D57"
                            },
                            titleSx: {
                                fontStyle: "normal"
                            },
                            claimBgInfo: function(e) {
                                return {
                                    background: null,
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center -130px", "center -100px"],
                                    backgroundSize: "100%",
                                    backgroundRepeat: "no-repeat"
                                }
                            },
                            registerBgInfo: function(e) {
                                return {
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center -130px", "center -100px"],
                                    backgroundSize: "100%",
                                    backgroundRepeat: "no-repeat"
                                }
                            },
                            expiredBgInfo: function() {
                                return {
                                    backgroundImage: ["url(".concat(u.K5, "/static/images/activity/referral-lite/v2-8/expired-bg-375.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/v2-8/expired-bg-768.png)"), "url(".concat(u.K5, "/static/images/activity/referral-lite/v2-8/expired-bg-1440.png)")],
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: ["center -110px", "center -30px", "center -55px"],
                                    backgroundSize: "100%",
                                    backgroundColor: "#1A1A19",
                                    margin: "0 auto"
                                }
                            },
                            expiredBgBoxInfo: function() {},
                            claimBgBox2: {
                                display: "none"
                            },
                            isRewardType2: !0
                        }
                    }({
                        isRTL: r
                    })), {
                        registerBgSx: {
                            background: "#1E1313"
                        },
                        limitedLang: ["vi", "zh-CN", "zh-TC", "id"],
                        topReward: "+ 300 USDT",
                        registerChannel: "lnyr24",
                        isAppBlock: !0
                    })), (0, i.A)(t, M, (0, l.A)((0, a.A)({}, function(e) {
                        var t = e.isRTL;
                        return {
                            registerBgBoxInfo: function(e) {
                                return {
                                    backgroundImage: "url(".concat(e.inviteeImg, ")"),
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center -10px",
                                    backgroundSize: "385px",
                                    width: "385px",
                                    height: "260px"
                                }
                            },
                            bgInfo: function(e) {
                                return {
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center 6px", "center 65px", t ? "calc(50% + 2.5px) 18px" : "calc(50% - 7.5px) 18px"],
                                    backgroundSize: ["375px", "768px", "1440px"],
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "#000"
                                }
                            },
                            ruleTypeASx: {
                                backgroundColor: "#181A20",
                                color: ["#848E9C !important"],
                                border: "1px solid #474D57"
                            },
                            titleSx: {
                                fontStyle: "normal"
                            },
                            claimBgInfo: function(e) {
                                return {
                                    backgroundImage: ["url(".concat(e.bgH5, ")"), "url(".concat(e.bgTablet, ")"), "url(".concat(e.bgPC, ")")],
                                    backgroundPosition: ["center 6px", "center 119px", t ? "calc(50% - 7px) -136px" : "calc(50% + 3px) -72px"],
                                    backgroundSize: ["375px", "768px", "1440px"],
                                    backgroundRepeat: "no-repeat"
                                }
                            },
                            claimBgBox2: {
                                display: "none"
                            },
                            isRewardType2: !0
                        }
                    }({
                        isRTL: r
                    })), {
                        blockLangs: ["pl", "id", "es-es", "pt"],
                        topReward: "+ 1 BNB"
                    })), (0, i.A)(t, G, (0, l.A)((0, a.A)({}, P({
                        isRTL: r
                    })), {
                        bgInfo: function() {
                            return {
                                background: "#1E2026"
                            }
                        },
                        claimBgInfo: function() {
                            return {
                                background: "#1E2026"
                            }
                        },
                        expiredBgInfo: function() {
                            return {
                                background: "#1E2026",
                                backgroundImage: "unset"
                            }
                        },
                        registerBgSx: {
                            background: "#1E2026"
                        },
                        howToSx: {
                            backgroundColor: ["#35363B", "#181A20"],
                            padding: "24px 60px 40px",
                            "& .stepText": {
                                color: "t.white"
                            }
                        },
                        isRewardType2: !0,
                        topReward: "+ 100 USDT"
                    })), (0, i.A)(t, E, (0, l.A)((0, a.A)({}, P({
                        isRTL: r
                    })), {
                        topReward: "+ 1 BNB"
                    })), (0, i.A)(t, z, (0, l.A)((0, a.A)({}, D()), {
                        ruleBtnBg: "linear-gradient(180deg, #0B0E11 0%, #1E2026 100%)",
                        ruleBtnColor: "#FFFFFF ",
                        topReward: "+ 1 BNB"
                    })), (0, i.A)(t, j, (0, l.A)((0, a.A)({
                        top3: ["11****27", "17****03", "26****27"]
                    }, P({
                        isRTL: r
                    })), {
                        topReward: "+ 1 BNB"
                    })), (0, i.A)(t, V, {
                        top3: ["30*****65", "33*****41", "21*****83"],
                        topReward: "+ 1 BNB"
                    }), (0, i.A)(t, K, {
                        top3: ["30*****65", "89****63", "28****17"],
                        topReward: "+ 1 BNB"
                    }), (0, i.A)(t, O, {
                        top3: ["12****01", "15*****20", "30*****80"],
                        topReward: "+ 1 BNB"
                    }), t
                },
                $ = (0, i.A)({}, H, {
                    0: {
                        inviterTitle2: "referral-lite-act210-inviterPage-title2",
                        inviterH5Title2: "referral-lite-act210-inviterPage-title2"
                    },
                    1: {
                        inviterTitle2: "referral-lite-act210-inviterPage-title2-g1",
                        inviterH5Title2: "referral-lite-act210-inviterPage-title2-g1"
                    },
                    2: {
                        inviterTitle2: "referral-lite-act210-inviterPage-title2-g2",
                        inviterH5Title2: "referral-lite-act210-inviterPage-title2-g1"
                    }
                }),
                ee = (k = {
                    default: {
                        guide1: "referral-lite-act26-guide-1",
                        guide2: "referral-lite-act26-guide-2",
                        guide3: "referral-lite-act23-guide-3",
                        inviteeWarn: "referral-lite-act2-invitee-warn",
                        lockMessage: "referral-lite-act2-boxList-lockMessage",
                        treasureMapMessage: "referral-lite-act2-treasureMap-message1",
                        treasureMapMessage2: "referral-lite-act2-treasureMap-message2",
                        boxTypeNormal: "referral-lite-act2-myReward-boxTypeNormal",
                        boxTypeSpecial: "referral-lite-act2-myReward-boxTypeSpecial",
                        remindMessage: "referral-lite-act2-myReferral-remindMessage",
                        inviteeBoxTitle: "referral-lite-act2-invitee-pop-box-title",
                        completeDepositDesc: "referral-lite-act2-invitee-pop-completed-task-deposit",
                        completeTradeDesc: "referral-lite-act2-invitee-pop-completed-task-trade",
                        tradeDesc: "referral-lite-act2-invitee-pop-box-trade",
                        depositDesc: "referral-lite-act2-invitee-pop-box-deposit",
                        existAccount: "referral-lite-act2-pop-box-existing-account-text",
                        kycDesc: "referral-lite-act2-pop-box-desc-kyc",
                        expiredTitle: "referral-lite-act2-expired-page-title",
                        claimTitle: "referral-lite-act26-claim-page-title",
                        claimPageBox1Button: "referral-lite-act22-claim-page-box-1-button",
                        claimPageBox2Button: "referral-lite-act2-claim-page-box-2-button",
                        ruleParagraph1: "referral-lite-act2-inviterPage-paragraph1",
                        ruleParagraph2: "referral-lite-act2-inviterPage-paragraph2",
                        ruleParagraph3: "referral-lite-act2-inviterPage-paragraph3",
                        ruleParagraph4: "",
                        ruleParagraph5: "",
                        ruleParagraph6: "",
                        claimNoticeItem2: "referral-lite-act2-claim-page-notice-item-2",
                        claimNoticeItem3: "referral-lite-act2-claim-page-notice-item-3",
                        claimNoticeItem4: "",
                        kycMessage: "referral-lite-act2-inviterPage-kycMessage",
                        kycPopMessage: "referral-lite-act2-kycPopup-message",
                        seoTitle: "ref-lite-seo-title",
                        noviceStep1Desc: "referral-lite-act2-noviceGuide-step1Description-p1",
                        noviceStep1DescP2: "referral-lite-act2-noviceGuide-step1Description-p2",
                        noviceStep1DescP3: "referral-lite-act2-noviceGuide-step1Description-p3",
                        noviceStep1Title: "referral-lite-act2-noviceGuide-step1Title",
                        noviceStep2Desc: "referral-lite-act23-noviceGuide-step2Description",
                        noviceStep2Title: "referral-lite-act2-noviceGuide-step2Title",
                        noviceStep3Desc: "referral-lite-act23-noviceGuide-step3Description",
                        noviceStep3Title: "referral-lite-act2-noviceGuide-step3Title",
                        popBoxDescText1: "referral-lite-act2-pop-box-desc-text1",
                        popBoxTitleShare: "referral-lite-act2-pop-box-title-share",
                        expiredPageButton: "referral-lite-act2-expired-page-button",
                        registerTitle: "referral-lite-act23-invitee-landing-page-title",
                        registerSubTitle: "referral-lite-act23-invitee-landing-page-desc",
                        exipredBtn: "referral-lite-act2-expired-page-button",
                        rewardShareTitle: "referral-lite-act23-shareDialog-reward-title",
                        rewardShareContent: "referral-lite-act23-shareDialog-reward-desc",
                        tips1stText1: "referral-lite-act2-tips-1st-text1",
                        tips1stText2: "referral-lite-act2-tips-1st-text2",
                        tips1stText3: "",
                        tips2ndText1: "referral-lite-act2-tips-2nd-text1",
                        tips2ndText2: "referral-lite-act2-tips-2nd-text2",
                        tips2ndText3: "referral-lite-act210-tips-2nd-text3",
                        pooledTipTitle: "referral-lite-act2-pooled-box-to-win",
                        inviteeCTA: "referral-lite-act2-register-now",
                        shareTitle: "referral-lite-act2-shareDialog-title",
                        shareStep1: "referral-lite-act2-shareDialog-steps-1",
                        shareStep2: "referral-lite-act2-shareDialog-steps-2",
                        completeCombinedDesc: "",
                        blockTitle: "referral-lite-act2-block-title"
                    }
                }, (0, i.A)(k, Y, {
                    inviterTitle3: "",
                    noviceStep1DescP2: "",
                    noviceStep1DescP3: ""
                }), (0, i.A)(k, H, {
                    inviterTitle1: "referral-lite-act210-inviterPage-title1",
                    inviterTitle2: "referral-lite-act210-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act210-inviterPage-title1",
                    inviterH5Title2: "referral-lite-act210-inviterPage-title2",
                    inviterH5Title3: "",
                    popBoxDescText1: "referral-lite-act210-pop-box-desc-text1",
                    pooledTipTitle: "referral-lite-act210-pooled-box-to-win",
                    guide1: "referral-lite-act210-guide-1",
                    guide2: "referral-lite-act210-guide-2",
                    guide3: "referral-lite-act210-guide-3",
                    tips1stText1: "referral-lite-act210-guide-1",
                    tips1stText2: "referral-lite-act210-guide-2",
                    tips1stText3: "referral-lite-act210-guide-3",
                    tips2ndText1: "referral-lite-act210-tips-2nd-text1",
                    tips2ndText2: "referral-lite-act210-tips-2nd-text2",
                    tips2ndText3: "",
                    claimNoticeItem2: "referral-lite-act210-claim-page-notice-item-2",
                    claimNoticeItem3: "referral-lite-act210-claim-page-notice-item-3",
                    claimNoticeItem4: "referral-lite-act210-claim-page-notice-item-4",
                    ruleParagraph1: "referral-lite-act210-inviterPage-paragraph1",
                    ruleParagraph2: "referral-lite-act210-inviterPage-paragraph5",
                    ruleParagraph3: "referral-lite-act210-inviterPage-paragraph2",
                    ruleParagraph4: "referral-lite-act210-inviterPage-paragraph3",
                    ruleParagraph5: "referral-lite-act210-inviterPage-paragraph4",
                    noviceStep1Title: "referral-lite-act210-noviceGuide-step1Title",
                    noviceStep1Desc: "referral-lite-act210-noviceGuide-step1Description-p1",
                    noviceStep1DescP2: "referral-lite-act210-noviceGuide-step1Description-p2",
                    noviceStep1DescP3: "referral-lite-act210-noviceGuide-step1Description-p3",
                    noviceStep2Desc: "referral-lite-act210-noviceGuide-step2Description",
                    noviceStep2Title: "referral-lite-act210-noviceGuide-step2Title",
                    noviceStep3Desc: "referral-lite-act210-noviceGuide-step3Description",
                    noviceStep3Title: "referral-lite-act210-noviceGuide-step3Title",
                    lockMessage: "referral-lite-act210-boxList-lockMessage",
                    registerTitle: "referral-lite-act210-invitee-landing-page-title",
                    registerSubTitle: "referral-lite-act210-invitee-landing-page-desc",
                    claimTitle: "referral-lite-act210-claim-page-title",
                    remindMessage: "referral-lite-act210-myReferral-remindMessage",
                    shareTitle: "referral-lite-act210-shareDialog-title",
                    shareStep1: "referral-lite-act210-shareDialog-steps-1",
                    shareStep2: "referral-lite-act210-shareDialog-steps-2",
                    completeCombinedDesc: "referral-lite-act210-invitee-pop-completed-task-combined",
                    boxTypeNormal: "referral-lite-act210-myReward-boxTypeNormal",
                    boxTypeSpecial: "referral-lite-act210-myReward-boxTypeNormal",
                    blockTitle: "referral-lite-act210-block-title",
                    inviteeWarn: "referral-lite-act210-invitee-warn",
                    inviteeBoxTitle: "referral-lite-act210-invitee-pop-box-title",
                    existAccount: "referral-lite-act210-pop-box-existing-account-text",
                    kycDesc: "referral-lite-act210-pop-box-desc-kyc",
                    expiredTitle: "referral-lite-act210-expired-page-title",
                    rewardShareTitle: "referral-lite-act210-shareDialog-reward-title",
                    rewardShareContent: "referral-lite-act210-shareDialog-reward-desc",
                    treasureMapMessage: "",
                    treasureMapMessage2: "referral-lite-act210-treasureMap-message2",
                    tradeDesc: "referral-lite-act210-invitee-pop-box-trade",
                    depositDesc: "referral-lite-act210-invitee-pop-box-deposit",
                    seoTitle: "referral-lite-act210-title-in-list",
                    claimPageBox1Button: "referral-lite-act210-claim-page-box-1-button"
                }), (0, i.A)(k, F, {
                    inviterTitle1: "referral-lite-act29-inviterPage-title1",
                    inviterTitle2: "referral-lite-act29-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act29-inviterPage-title1",
                    inviterH5Title2: "referral-lite-act29-inviterPage-title2",
                    inviterH5Title3: "",
                    ruleParagraph1: "referral-lite-act29-inviterPage-paragraph1",
                    ruleParagraph4: "referral-lite-act29-inviterPage-paragraph4",
                    noviceStep1DescP2: "referral-lite-act29-noviceGuide-step1Description-p2",
                    noviceStep1DescP3: "referral-lite-act29-noviceGuide-step1Description-p3",
                    noviceStep2Desc: "referral-lite-act29-noviceGuide-step2Description",
                    tips1stText1: "referral-lite-act29-tips-1st-text1",
                    tips1stText2: "referral-lite-act29-tips-1st-text2",
                    registerTitle: "referral-lite-act29-invitee-landing-page-title",
                    registerSubTitle: "referral-lite-act29-invitee-landing-page-desc",
                    popBoxDescText1: "referral-lite-act29-pop-box-desc-text1",
                    shareStep1: "referral-lite-act29-shareDialog-steps-1",
                    shareStep2: "referral-lite-act29-shareDialog-steps-2",
                    claimPageBox1Button: "referral-lite-act29-claim-page-box-1-button",
                    tradeDesc: "referral-lite-act29-invitee-pop-box-trade",
                    depositDesc: "referral-lite-act29-invitee-pop-box-deposit",
                    seoTitle: "referral-lite-act29-title-in-list"
                }), (0, i.A)(k, N, {
                    guide3: "referral-lite-act28-guide-3",
                    inviteeWarn: "referral-lite-act28-invitee-warn",
                    tips1stText1: "referral-lite-act28-tips-1st-text1",
                    tips1stText2: "referral-lite-act28-tips-1st-text2",
                    tips1stText3: "referral-lite-act28-tips-1st-text3",
                    lockMessage: "referral-lite-act28-boxList-lockMessage",
                    treasureMapMessage: "referral-lite-act28-treasureMap-message1",
                    boxTypeNormal: "referral-lite-act28-myReward-boxTypeNormal",
                    boxTypeSpecial: "referral-lite-act28-myReward-boxTypeSpecial",
                    remindMessage: "referral-lite-act28-myReferral-remindMessage",
                    inviteeBoxTitle: "referral-lite-act28-invitee-pop-box-title",
                    completeDepositDesc: "referral-lite-act28-invitee-pop-completed-task-deposit",
                    completeTradeDesc: "referral-lite-act28-invitee-pop-completed-task-trade",
                    tradeDesc: "referral-lite-act28-invitee-pop-box-trade",
                    depositDesc: "referral-lite-act28-invitee-pop-box-deposit",
                    existAccount: "referral-lite-act28-pop-box-existing-account-text",
                    kycDesc: "referral-lite-act28-pop-box-desc-kyc",
                    expiredTitle: "referral-lite-act28-expired-page-title",
                    claimTitle: "referral-lite-act28-claim-page-title",
                    inviterTitle1: "referral-lite-act28-inviterPage-title1",
                    inviterTitle2: "referral-lite-act28-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act28-inviterPage-mobile-title1",
                    inviterH5Title2: "",
                    inviterH5Title3: "",
                    seoTitle: "referral-lite-act28-seo-title",
                    noviceStep1Desc: "referral-lite-act28-noviceGuide-step1Description-p1",
                    noviceStep1Title: "referral-lite-act28-noviceGuide-step1Title",
                    noviceStep2Desc: "referral-lite-act28-noviceGuide-step2Description",
                    noviceStep2Title: "referral-lite-act28-noviceGuide-step2Title",
                    noviceStep3Desc: "referral-lite-act28-noviceGuide-step3Description",
                    noviceStep3Title: "referral-lite-act28-noviceGuide-step3Title",
                    ruleParagraph4: "referral-lite-act2-inviterPage-paragraph4",
                    shareTitle: "referral-lite-act28-shareDialog-title",
                    shareStep1: "referral-lite-act28-shareDialog-steps-1",
                    shareStep2: "referral-lite-act28-shareDialog-steps-2",
                    claimPageBox1Button: "referral-lite-act28-claim-page-box-1-button",
                    claimPageBox2Button: "referral-lite-act28-claim-page-box-2-button",
                    claimNoticeItem4: "referral-lite-act2-claim-page-notice-item-4",
                    popBoxDescText1: "referral-lite-act28-pop-box-desc-text1",
                    registerTitle: "referral-lite-act28-invitee-landing-page-title",
                    registerSubTitle: "referral-lite-act28-invitee-landing-page-desc",
                    rewardShareTitle: "referral-lite-act28-shareDialog-reward-title",
                    rewardShareContent: "referral-lite-act28-shareDialog-reward-desc",
                    pooledTipTitle: "referral-lite-act28-pooled-box-to-win",
                    inviteeCTA: "referral-lite-act28-register-now"
                }), (0, i.A)(k, M, {
                    inviterTitle1: "referral-lite-act27-inviterPage-title1",
                    inviterTitle2: "referral-lite-act27-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act27-inviterPage-mobile-title1",
                    inviterH5Title2: "",
                    inviterH5Title3: "",
                    seoTitle: "referral-lite-act27-seo-title",
                    shareTitle: "referral-lite-act28-shareDialog-title",
                    shareStep1: "referral-lite-act21-shareDialog-steps-1",
                    shareStep2: "referral-lite-act28-shareDialog-steps-2",
                    claimPageBox1Button: "referral-lite-act21-claim-page-box-1-button"
                }), (0, i.A)(k, G, {
                    inviterTitle1: "referral-lite-act25-inviterPage-title1",
                    inviterTitle2: "referral-lite-act26-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act26-inviterPage-mobile-title1",
                    inviterH5Title2: "",
                    inviterH5Title3: "",
                    shareTitle: "referral-lite-act26-shareDialog-title",
                    shareStep1: "referral-lite-act26-shareDialog-steps-1",
                    shareStep2: "referral-lite-act26-shareDialog-steps-2",
                    ruleParagraph3: "referral-lite-act23-inviterPage-paragraph3",
                    kycPopMessage: "referral-lite-act23-kycPopup-message",
                    seoTitle: "referral-lite-act26-seo-title",
                    noviceStep3Title: "referral-lite-act23-noviceGuide-step3Title",
                    noviceStep2Desc: "referral-lite-act23-noviceGuide-step2Description",
                    noviceStep3Desc: "referral-lite-act23-noviceGuide-step3Description",
                    popBoxTitleShare: "referral-lite-act23-pop-box-title-share",
                    popBoxDescText1: "referral-lite-act26-pop-box-desc-text1",
                    expiredPageButton: "ref-lite-claim-expired-cta",
                    registerTitle: "referral-lite-act26-invitee-landing-page-title",
                    rewardShareTitle: "referral-lite-act26-shareDialog-reward-title",
                    rewardShareContent: "referral-lite-act26-shareDialog-reward-desc",
                    registerSubTitle: "referral-lite-act26-invitee-landing-page-desc",
                    pooledTipTitle: "referral-lite-act26-pooled-box-to-win"
                }), (0, i.A)(k, E, {
                    inviterTitle1: "referral-lite-act25-inviterPage-title1",
                    inviterTitle2: "referral-lite-act25-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act23-inviterPage-mobile-title1",
                    inviterH5Title2: "",
                    inviterH5Title3: "",
                    shareTitle: "referral-lite-act23-shareDialog-title",
                    shareStep1: "referral-lite-act23-shareDialog-steps-1",
                    shareStep2: "referral-lite-act23-shareDialog-steps-2",
                    ruleParagraph3: "referral-lite-act23-inviterPage-paragraph3",
                    kycPopMessage: "referral-lite-act23-kycPopup-message",
                    seoTitle: "referral-lite-act23-seo-title",
                    noviceStep3Title: "referral-lite-act23-noviceGuide-step3Title",
                    noviceStep2Desc: "referral-lite-act23-noviceGuide-step2Description",
                    noviceStep3Desc: "referral-lite-act23-noviceGuide-step3Description",
                    popBoxTitleShare: "referral-lite-act23-pop-box-title-share",
                    popBoxDescText1: "referral-lite-act25-pop-box-desc-text1",
                    expiredPageButton: "ref-lite-claim-expired-cta",
                    registerSubTitle: "referral-lite-act25-invitee-landing-page-desc"
                }), (0, i.A)(k, z, {
                    inviterTitle3: "",
                    noviceStep1DescP2: "",
                    noviceStep1DescP3: "",
                    inviterTitle1: "referral-lite-act24-inviterPage-title1",
                    inviterTitle2: "",
                    inviterH5Title1: "referral-lite-act24-inviterPage-title1",
                    inviterH5Title2: "",
                    noviceStep1Desc: "referral-lite-act24-noviceGuide-step1Description",
                    noviceStep1Title: "referral-lite-act24-noviceGuide-step1Title",
                    noviceStep2Desc: "referral-lite-act24-noviceGuide-step2Description",
                    noviceStep2Title: "referral-lite-act24-noviceGuide-step2Title",
                    noviceStep3Title: "referral-lite-act24-noviceGuide-step3Title",
                    noviceStep3Desc: "",
                    registerTitle: "referral-lite-act24-invitee-landing-page-title",
                    registerSubTitle: "referral-lite-act24-invitee-landing-page-desc",
                    seoTitle: "referral-lite-act24-seo-title",
                    exipredBtn: "ref-lite-claim-expired-cta",
                    shareTitle: "referral-lite-act24-shareDialog-title",
                    shareStep1: "referral-lite-act24-shareDialog-steps-1",
                    shareStep2: "referral-lite-act24-shareDialog-steps-2",
                    rewardShareTitle: "referral-lite-act24-shareDialog-reward-title",
                    rewardShareContent: "referral-lite-act24-shareDialog-reward-desc",
                    popBoxTitleShare: "referral-lite-act23-pop-box-title-share",
                    popBoxDescText1: "referral-lite-act24-pop-box-desc-text1",
                    claimNoticeItem2: "referral-lite-act24-claim-page-notice-item-2",
                    claimNoticeItem3: "referral-lite-act24-claim-page-notice-item-3",
                    ruleParagraph1: "referral-lite-act24-inviterPage-paragraph1",
                    tips2ndText1: "referral-lite-act24-tips-2nd-text1"
                }), (0, i.A)(k, j, {
                    inviterTitle1: "referral-lite-act23-inviterPage-title1",
                    inviterTitle2: "referral-lite-act23-inviterPage-title2",
                    inviterTitle3: "",
                    inviterH5Title1: "referral-lite-act23-inviterPage-mobile-title1",
                    inviterH5Title2: "",
                    inviterH5Title3: "",
                    shareTitle: "referral-lite-act23-shareDialog-title",
                    shareStep1: "referral-lite-act23-shareDialog-steps-1",
                    shareStep2: "referral-lite-act23-shareDialog-steps-2",
                    ruleParagraph2: "referral-lite-act23-inviterPage-paragraph2",
                    ruleParagraph3: "referral-lite-act23-inviterPage-paragraph3",
                    claimNoticeItem2: "referral-lite-act23-claim-page-notice-item-2",
                    kycMessage: "referral-lite-act23-inviterPage-kycMessage",
                    kycPopMessage: "referral-lite-act23-kycPopup-message",
                    seoTitle: "referral-lite-act23-seo-title",
                    noviceStep3Title: "referral-lite-act23-noviceGuide-step3Title",
                    noviceStep2Desc: "referral-lite-act23-noviceGuide-step2Description",
                    noviceStep3Desc: "referral-lite-act23-noviceGuide-step3Description",
                    popBoxDescText1: "referral-lite-act23-pop-box-desc-text1",
                    popBoxTitleShare: "referral-lite-act23-pop-box-title-share",
                    expiredPageButton: "ref-lite-claim-expired-cta"
                }), (0, i.A)(k, V, {
                    inviterTitle1: "referral-lite-act22-inviterPage-title1",
                    inviterTitle2: "referral-lite-act22-inviterPage-title2",
                    inviterTitle3: "referral-lite-act22-inviterPage-title3",
                    inviterH5Title1: "referral-lite-act22-inviterPage-title1",
                    inviterH5Title2: "referral-lite-act22-inviterPage-title2",
                    inviterH5Title3: "referral-lite-act22-inviterPage-title3",
                    shareTitle: "referral-lite-act22-shareDialog-title",
                    shareStep1: "referral-lite-act22-shareDialog-steps-1",
                    shareStep2: "referral-lite-act22-shareDialog-steps-2"
                }), (0, i.A)(k, K, {
                    inviterTitle1: "referral-lite-act21-inviterPage-title1",
                    inviterTitle2: "referral-lite-act21-inviterPage-title2",
                    inviterTitle3: "referral-lite-act21-inviterPage-title3",
                    inviterH5Title1: "referral-lite-act21-inviterPage-title1",
                    inviterH5Title2: "referral-lite-act21-inviterPage-title2",
                    inviterH5Title3: "referral-lite-act21-inviterPage-title3",
                    shareTitle: "referral-lite-act21-shareDialog-title",
                    shareStep1: "referral-lite-act21-shareDialog-steps-1",
                    shareStep2: "referral-lite-act21-shareDialog-steps-2",
                    claimPageBox1Button: "referral-lite-act21-claim-page-box-1-button"
                }), (0, i.A)(k, O, {
                    inviterTitle1: "referral-lite-act2-inviterPage-title1",
                    inviterTitle2: "referral-lite-act2-inviterPage-title2",
                    inviterTitle3: "referral-lite-act2-inviterPage-title3",
                    inviterH5Title1: "referral-lite-act2-inviterPage-title1",
                    inviterH5Title2: "referral-lite-act2-inviterPage-title2",
                    inviterH5Title3: "referral-lite-act2-inviterPage-title3",
                    shareTitle: "referral-lite-act2-shareDialog-title",
                    shareStep1: "referral-lite-act2-shareDialog-steps-1",
                    shareStep2: "referral-lite-act2-shareDialog-steps-2",
                    claimPageBox1Button: "referral-lite-act2-claim-page-box-1-button"
                }), k),
                te = function() {
                    var e = (0, c.j)().isRtl,
                        t = (0, p.B)().t;
                    return (0, o.jsxs)(s.Ay, {
                        className: "absolute top-0 ltr:left-0 pt-[24px] px-[16px] h-full w-[240px]",
                        children: [(0, o.jsx)(s.Ay, {
                            className: "rtl:[transform:rotateY(180deg)] w-fit",
                            children: (0, o.jsx)(g.$, {
                                height: "16.5px",
                                width: "82px"
                            })
                        }), (0, o.jsx)(s.Ay, {
                            className: "text-[12px] font-[400] leading-[12px] mt-[14px] text-[#FFFFFF]",
                            children: t("referral-lite-act29-inviterPage-title1")
                        }), (0, o.jsx)(s.Ay, {
                            className: "text-[22px] font-[900] leading-[23px] mt-[2px] text-[#FFFFFF] w-[190px]",
                            children: t("referral-lite-act29-inviterPage-title2")
                        }), (0, o.jsx)(s.Ay, {
                            style: {
                                transform: "scale(0.4)",
                                left: e ? "-77px" : "-112px",
                                bottom: "-4px"
                            },
                            className: "absolute text-[12px] w-[430px] text-[#848E9C]",
                            children: t("referral-lite-act29-inviterPage-warn")
                        })]
                    })
                },
                re = (0, i.A)({}, F, (0, o.jsx)(te, {})),
                ie = (B = {}, (0, i.A)(B, F, []), (0, i.A)(B, N, ["id-ID", "vi-VN", "zh-CN", "zh-TW"]), (0, i.A)(B, M, ["ar", "bg-BG", "cs-CZ", "es-LA", "fr-FR", "it-IT", "lv-LV", "ro-RO", "ru-RU", "sk-SK", "sl-SI", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-TW"]), (0, i.A)(B, G, ["bg-BG", "bn-BD", "el-GR", "es-ES", "pt-PT", "sl-SI", "de-DE", "fi-FI", "ar"].concat((0, n.A)(y))), (0, i.A)(B, E, ["bg-BG", "bn-BD", "el-GR", "es-ES", "pt-PT", "sl-SI", "de-DE", "fi-FI", "ar"].concat((0, n.A)(y))), (0, i.A)(B, z, ["bg-BG", "bn-BD", "el-GR", "es-ES", "pt-PT", "sl-SI", "ur-PK", "it-IT", "ar"].concat((0, n.A)(y))), (0, i.A)(B, j, ["bg-BG", "bn-BD", "el-GR", "es-ES", "pt-PT", "sl-SI", "de-DE", "fi-FI", "ar"].concat((0, n.A)(y))), (0, i.A)(B, V, ["bg-BG", "bn-BD", "el-GR", "es-ES", "pt-PT", "sl-SI"].concat((0, n.A)(y))), (0, i.A)(B, K, y), (0, i.A)(B, O, y), B),
                ae = (S = {}, (0, i.A)(S, F, ["TG_mini_app_01", "Voucher distribution (MiCA + non-MiCA)"]), (0, i.A)(S, H, ["LNY25A"]), S),
                le = function(e) {
                    var t;
                    return t = {}, (0, i.A)(t, H, {
                        mapSmallBoxLocked: e("map-locked-standard.png"),
                        mapSmallBoxopenable: e("map-openable-standard.png"),
                        mapSmallBoxOpened: e("map-opened-standard.png"),
                        mapBigBoxLocked: e("map-locked-premium.png"),
                        mapBigBoxopenable: e("map-openable-premium.png"),
                        mapBigBoxOpened: e("map-opened-premium.png"),
                        referralBoxLocked: e("referral-box-locked.png"),
                        referralBoxOpened: e("referral-box-opened.png")
                    }), (0, i.A)(t, N, {
                        mapSmallBoxLocked: e("map-locked-standard.png"),
                        mapSmallBoxopenable: e("map-openable-standard.png"),
                        mapSmallBoxOpened: e("map-opened-standard.png"),
                        mapBigBoxLocked: e("map-locked-premium.png"),
                        mapBigBoxopenable: e("map-openable-premium.png"),
                        mapBigBoxOpened: e("map-opened-premium.png"),
                        referralBoxLocked: e("referral-box-locked.png"),
                        referralBoxOpened: e("referral-box-opened.png")
                    }), t
                },
                ne = function(e, t) {
                    var r, o = R(e, J),
                        c = o.getPath,
                        p = o.getSharePath,
                        s = (t || {}).images,
                        g = void 0 === s ? {} : s,
                        d = L(e, p, ie),
                        u = L(e, c, ie),
                        x = (r = {}, (0, i.A)(r, G, []), (0, i.A)(r, E, ["BTC", "ETH", "BUSD", "BNB", "PNT", "FLUX", "IOST", "ENJ", "ERN", "BSW"]), (0, i.A)(r, z, ["BNB", "BTC", "BUSD", "ETH", "STRAX", "SNM", "FOR", "FIS", "LOOM"]), (0, i.A)(r, j, 13), r),
                        f = Array.isArray(x[e]) ? x[e] : (0, n.A)(new Array(x[e] || 0)).map((function(e, t) {
                            return c("partner-".concat(t + 1, ".png"))
                        })),
                        b = g.banners ? function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Object.keys(e).reduce((function(t, r) {
                                return (0, l.A)((0, a.A)({}, t), (0, i.A)({}, C(r), e[r]))
                            }), {})
                        }(g.banners) : u;
                    return {
                        inviteeImg: c("invitee-img.png"),
                        inviteeBg: c("invitee-bg.png"),
                        partnerImgs: f,
                        bgH5: c("bg-375.png"),
                        bgTablet: c("bg-768.png"),
                        bgPC: c("bg-1440.png"),
                        bgH5Spotlight: c("box-bg-375.png"),
                        bgTabletSpotlight: c("box-bg-768.png"),
                        bgPCSpotlight: c("box-bg-1440.png"),
                        bgImg: c("web-background.png"),
                        bgBox: c("box-bg.png"),
                        registerKeyImgH5: c("invitee-img-375.png"),
                        registerKeyImgTablet: c("invitee-img-768.png"),
                        registerKeyImgPC: c("invitee-img-1440.png"),
                        registerBgH5: c("bg-375.png"),
                        registerBgTablet: c("bg-768.png"),
                        registerBgPC: c("bg-1440.png"),
                        mobileBG_1: c("mobile-background-1.png"),
                        mobileBG_2: c("mobile-background-2.png"),
                        mobileBG_3: c("mobile-background-3.png"),
                        expiredBoxH5: c("expired-box.png"),
                        expiredBoxTablet: c("expired-box.png"),
                        expiredBoxPC: c("expired-box.png"),
                        arrowNew: c("arrow-new.png"),
                        standardBoxIcon: c("standard-box-icon.png"),
                        premiumBoxIcon: c("premium-box-icon.png"),
                        inviteeBoxOpenable: c("openable-orange.png"),
                        inviteeBoxLocked: c("locked-orange.png"),
                        smallBoxLocked: c("locked-standard.png"),
                        smallBoxOpenable: c("openable-standard.png"),
                        smallBoxOpened: c("opened-standard.png"),
                        bigBoxLocked: c("locked-premium.png"),
                        bigBoxOpenable: c("openable-premium.png"),
                        bigBoxOpened: c("opened-premium.png"),
                        lockedOrange: c("locked-orange.png"),
                        openableOrange: c("openable-orange.png"),
                        openedOrange: c("opened-orange.png"),
                        smallBoxAnimation: c("normal.json"),
                        bigBoxAnimation: c("special.json"),
                        mapSmallBoxLocked: c("locked-standard.png"),
                        mapSmallBoxopenable: c("openable-standard.png"),
                        mapSmallBoxOpened: c("opened-standard.png"),
                        mapBigBoxLocked: c("locked-premium.png"),
                        mapBigBoxopenable: c("openable-premium.png"),
                        mapBigBoxOpened: c("opened-premium.png"),
                        referralBoxLocked: c("locked-standard.png"),
                        referralBoxOpened: c("opened-standard.png"),
                        finalBoxBg: c("popup-box-bg.png"),
                        finalBoxOpenable: c("final-openable.png"),
                        finalBoxOpening: c("final-opening.png"),
                        finalBoxOpened: c("final-opened.png"),
                        finalBoxLocked: c("final-locked.png"),
                        iconFinalBox: c("final-box.png"),
                        iconFinalBoxKyc: c("final-box-kyc.png"),
                        noviceGuide1: c("novice-guide-one.png"),
                        noviceGuide2: c("novice-guide-two.png"),
                        noviceGuide3: c("novice-guide-three.png"),
                        shareBGb: c("share-bg-b.png"),
                        shareRewardBg: c("share-bg-reward.png"),
                        myReward: c("my-rewards.png"),
                        myReferrals: c("my-referrals.png"),
                        tips: c("tips.png"),
                        treasureMap: c("treasure-map.png"),
                        bannerImages: b,
                        getMetaOG: function(e) {
                            return g.banners ? b[e.toLowerCase()] || b.en : d[I[e]] || d.en
                        }
                    }
                },
                oe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = R(e, J).getPath,
                        i = le(r)[e],
                        l = t || {},
                        n = l.images,
                        o = void 0 === n ? {} : n,
                        c = ne(e, t);
                    return (0, a.A)({}, c, i, o)
                }
        }
    }
]);
//# debugId=c8b2c99b-b29a-51fd-9af3-84f89d9ca90a