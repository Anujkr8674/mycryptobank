! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7a77694d-af0f-5dde-a48f-7eaf3804d652")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [485], {
        ubfX: (e, t, i) => {
            "use strict";
            i.d(t, {
                YD: () => W,
                iz: () => z,
                wl: () => S,
                F1: () => R,
                Hw: () => I
            });
            var o = i("BK7R"),
                r = i("QUKP"),
                n = i("H8sf"),
                l = i.n(n),
                p = i("uZih"),
                a = i.n(p),
                x = i("oVQP"),
                d = i("/h8b"),
                s = i("tEf9"),
                c = i("8fYl"),
                g = i("Ki6D"),
                m = function(e) {
                    return function(t) {
                        var i = {
                            light: c.A,
                            dark: g.A
                        };
                        return (0, d.AW)([i[e]].concat((0, s.A)(t)))()
                    }
                },
                h = function(e) {
                    return function(t) {
                        var i = {
                            light: c.D,
                            dark: g.$
                        };
                        return (0, d.AW)([i[e]].concat((0, s.A)(t)))()
                    }
                },
                f = {
                    colors: {
                        overallBg: "#2B313A",
                        moduleBg: "#161A1E",
                        inputBg: "#2B3139",
                        modalBg: "#23282D",
                        tagBg: "#36321D",
                        t: {
                            emphasize: "#D77843"
                        },
                        newLine: "#252930",
                        lineForK: "#1B1F24",
                        slider: {
                            line: "#474D57"
                        },
                        icons: {
                            close: "#3D4653"
                        }
                    }
                },
                b = m("dark")([f]),
                u = h("dark")([f]);
            const w = b;
            var _ = {
                    colors: {
                        overallBg: "#EAECEF",
                        moduleBg: "#FAFAFA",
                        inputBg: "#F2F3F5",
                        modalBg: "#FFFFFF",
                        tagBg: "#F9F4E2",
                        t: {
                            emphasize: "#E79255"
                        },
                        newLine: "#EEF0F2",
                        lineForK: "#F1F1F2",
                        slider: {
                            line: "#DCE0E5"
                        },
                        icons: {
                            close: "#C6CAD0"
                        }
                    }
                },
                y = m("light")([_]),
                v = h("light")([_]);
            const A = y;
            var F = A,
                C = ((0, d.BV)("dark")(u), (0, d.BV)("light")(v)),
                B = ((0, d.ZG)("dark")(w), (0, d.ZG)("light")(A));
            var D = i("tECZ");
            var E = {
                    container: {
                        box: {
                            textAlign: "center",
                            px: [3, 4, 4]
                        },
                        content: {
                            width: "100%",
                            maxWidth: "1200px",
                            mx: "auto",
                            textAlign: "left"
                        },
                        page: {
                            width: "100%",
                            maxWidth: "1200px",
                            mx: "auto",
                            px: [3, 4, 4, 0]
                        }
                    },
                    myads: {
                        sectionWrapper: {
                            width: "100%",
                            px: [3, 3, "120px"],
                            flexDirection: "column",
                            mx: "auto",
                            textAlign: "left",
                            mb: 3,
                            mt: [0, 3]
                        },
                        historyTitle: {
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        listHead: {
                            py: "12px",
                            color: "#848E9C",
                            width: ["100%", "1100px", "100%"],
                            fontSize: "12px",
                            alignItems: "center",
                            flexDirection: "row"
                        },
                        liHeadP1: {
                            ml: [0, "12px", 3],
                            fontWeight: 500,
                            maxWidth: "84px"
                        },
                        liHeadP2: {
                            ml: 1,
                            fontWeight: 500
                        },
                        liHeadP3: {
                            pt: "1px",
                            fontSize: "12px",
                            color: "#848E9C"
                        },
                        liHeadP4: {
                            ml: 2,
                            mr: [0, 3, 4],
                            pt: "1px",
                            fontSize: "12px",
                            color: "#848E9C"
                        },
                        liHeadP5: {
                            mr: 2,
                            pt: "1px",
                            fontSize: "12px",
                            color: "#848E9C"
                        },
                        liHeadP6: {
                            mr: [0, "12px", 3],
                            pt: "1px",
                            fontSize: "12px",
                            color: "#848E9C"
                        },
                        listBody: {
                            width: ["100%", "1100px", "100%"],
                            flexDirection: "column",
                            mb: 0
                        },
                        listLi: {
                            flexDirection: "column",
                            height: "auto",
                            bg: "bg1",
                            width: "100%",
                            borderBottom: "1px solid",
                            borderBottomColor: "line",
                            position: "relative"
                        },
                        listLiHead: {
                            fontSize: "12px",
                            color: "#76808F",
                            display: ["none", "flex", "none"],
                            height: "32px",
                            bg: "#F5F5F5",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        listLiBody: {
                            width: "100%",
                            display: ["none", "flex", "flex"],
                            color: "t.primary",
                            fontSize: ["14px", "12px", "14px"]
                        },
                        li1_icon: {
                            width: ["24px", "36px", "36px"],
                            height: ["24px", "36px", "36px"],
                            ml: [0, "16px", "16px"],
                            mr: [2, 2, 2]
                        },
                        li4_p: {
                            mb: "6px",
                            ":hover": {
                                cursor: "pointer",
                                color: "#F0B90B"
                            }
                        },
                        li4_p2: {
                            mb: "6px",
                            fontSize: "12px"
                        },
                        li6_p: {
                            mb: "6px",
                            color: "#D0980B",
                            fontSize: "12px",
                            cursor: "pointer",
                            height: "18px",
                            lineHeight: "18px",
                            display: ["block", "none", "none"]
                        },
                        listPage: {
                            bg: "bg1",
                            width: "100%",
                            py: "25px",
                            flexDirection: "row-reverse"
                        },
                        listMobLi: {
                            width: "100%",
                            height: "auto",
                            py: 1,
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        lM_p1: {
                            fontSize: "12px",
                            color: "#848E9C"
                        },
                        lM_switch_open: {
                            width: 0,
                            height: 0,
                            border: "4px solid",
                            mt: 1,
                            borderColor: "#848E9C transparent transparent"
                        },
                        lM_switch_close: {
                            width: 0,
                            height: 0,
                            mb: 1,
                            border: "4px solid",
                            borderColor: "transparent transparent #848E9C"
                        },
                        mf_filter_title: {
                            alignItems: "center",
                            justifyContent: "space-between",
                            pt: 3,
                            pb: 1
                        },
                        mf_filter_body: {
                            alignItems: "center",
                            flexWrap: "wrap",
                            width: "100%"
                        },
                        mffb_item: {
                            mr: "2%",
                            mb: "2%",
                            width: "32%",
                            height: "40px",
                            fontSize: "12px",
                            alignItems: "center",
                            justifyContent: "center",
                            bg: "bg1",
                            borderRadius: "2px",
                            color: "t.primary",
                            border: "1px solid",
                            borderColor: "line"
                        },
                        mffb_item_now: {
                            mr: "2%",
                            mb: "2%",
                            width: "32%",
                            height: "40px",
                            borderRadius: "4px",
                            color: "t.primary",
                            border: "1px solid",
                            borderColor: "primary",
                            fontSize: "12px",
                            fontWeight: "medium",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        mf_button_box: {
                            width: "100%",
                            position: "absolute",
                            alignItems: "center",
                            bottom: 6
                        },
                        mffb_item_text: {
                            width: "80%",
                            textAlign: "left"
                        },
                        mf_button: {
                            width: "42%",
                            height: "40px",
                            textAlign: "center",
                            bg: "linear-gradient(90deg, #F0B90B 0%, #FBDA3C 100%)"
                        },
                        mob_page_num: {
                            width: "100%",
                            height: "60px",
                            fontSize: "16px",
                            color: "#48515D",
                            alignItems: "center"
                        },
                        warningMessage: {
                            background: "#FEF6D8",
                            padding: "14px",
                            borderRadius: "4px",
                            width: "100%",
                            alignItems: "center",
                            marginTop: "16px",
                            marginBottom: "20px",
                            marginX: ["8px", "24px", 0]
                        },
                        filterControlsWrapper: {
                            alignItems: "flex-end",
                            display: ["none", "flex", "flex"],
                            width: ["100%", "80%", "90%"],
                            flexWrap: "wrap"
                        }
                    },
                    editAdv: {
                        editTitle: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        editBody: {
                            width: "100%",
                            px: [0, 4, 4],
                            position: "relative",
                            pt: [1, 4],
                            pb: ["100px", "80px"]
                        },
                        editBodyMain: {
                            mx: "auto",
                            width: "100%",
                            maxWidth: "1200px",
                            flexDirection: "row",
                            bg: "#f9f9fa"
                        },
                        editBody_left: {
                            flexDirection: "column",
                            width: ["0", 0, "290px"],
                            display: ["none", "none", "flex"],
                            position: "relative"
                        },
                        editBody_left_box: {
                            width: "100%",
                            position: "sticky",
                            top: "24px",
                            borderRadius: "8px"
                        },
                        elb_cicle: {
                            width: "12px",
                            height: "12px",
                            bg: "line",
                            borderRadius: "8px"
                        },
                        elb_cicle_c: {
                            width: "4px",
                            height: "4px",
                            bg: "bg1",
                            borderRadius: "4px",
                            m: "4px"
                        },
                        elb_line: {
                            width: "2px",
                            height: "28px",
                            bg: "line"
                        },
                        editBody_right: {
                            flexDirection: "column",
                            width: ["100%", "100%", "79%"]
                        },
                        editBodyBox: {
                            flexDirection: "column",
                            width: "100%",
                            alignItems: "flex-start"
                        },
                        editBodyBox_bottom: {
                            position: "fixed",
                            bottom: 0,
                            width: "100%",
                            textAlign: "left",
                            bg: "bg2",
                            py: "12px",
                            boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.08)"
                        },
                        col1: {
                            flexDirection: ["column", "row"],
                            width: "100%",
                            py: "16px",
                            px: ["16px", "40px", "40px"],
                            bg: "bg1",
                            alignItems: "flex-start",
                            borderRadius: "8px"
                        },
                        col1_F1: {
                            flexDirection: ["row", "column"],
                            alignItems: "flex-start",
                            mb: ["10px", 0],
                            width: ["100%", "34%", "34%"]
                        },
                        col1_F2: {
                            width: ["100%", "66%", "66%"],
                            flexDirection: ["row-reverse", "row"]
                        },
                        col1_F2_box: {
                            width: ["100%", "50%", "50%"],
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        p1: {
                            fontSize: ["20px", "24px"],
                            mt: ["4px", "8px"],
                            height: "26px",
                            lineHeight: "26px"
                        },
                        p1_t: {
                            fontSize: ["12px", "14px"],
                            color: "t.primary"
                        },
                        p2_t: {
                            color: "t.primary",
                            mb: "4px"
                        },
                        paymentBox: {
                            width: "100%",
                            flexWrap: "wrap",
                            alignItems: "flex-start"
                        },
                        paymentBoxBuyFlex: {
                            bg: "#FAFAFA",
                            px: "8px",
                            py: "5px",
                            alignItems: "center",
                            mr: "8px",
                            mb: "8px",
                            borderRadius: "4px"
                        },
                        payBuyName: {
                            maxWidth: "200px",
                            mr: "10px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            wordBreak: "keep-all",
                            whiteSpace: "nowrap"
                        },
                        BoxBuyAdd: {
                            width: "104px",
                            height: "28px",
                            lineHeight: "26px",
                            textAlign: "center",
                            mb: "8px",
                            borderRadius: "4px",
                            fontWeight: 500,
                            color: "#F0B90B",
                            border: "1px solid #F0B90B",
                            cursor: "pointer"
                        },
                        paymentBoxSellFlex: {
                            p: "16px",
                            width: "100%",
                            border: "1px solid",
                            borderColor: "line",
                            borderRadius: "2px",
                            mb: "8px",
                            flexDirection: "column"
                        },
                        twice_alertText: {
                            mx: "auto",
                            width: "100%",
                            p: "12px",
                            bg: "badgeYellowBg",
                            mt: "8pb",
                            alignItems: "center",
                            borderRadius: "4px",
                            mb: "16px"
                        },
                        twice_main: {
                            mx: "auto",
                            width: "100%",
                            flexDirection: "column"
                        },
                        twice_main_row: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            width: "100%",
                            mb: "12px"
                        },
                        twice_main_row_label: {
                            fontSize: "14px",
                            color: "t.third"
                        },
                        twice_main_row_value: {
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "t.primary",
                            textAlign: "right"
                        },
                        tmr_row: {
                            flexDirection: "column",
                            width: "33%"
                        },
                        tmrr_p1: {
                            color: "#707A8A",
                            mb: [0, "4px"]
                        },
                        tmrr_p2: {
                            color: "#1E2329",
                            fontSize: "14px",
                            mt: [0, "4px"]
                        },
                        twice_control: {
                            mx: "auto",
                            width: "100%",
                            alignItems: "center",
                            mt: ["40px", "24px"],
                            mb: ["40px", "24px"]
                        },
                        postAdv_fixed_box: {
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            bg: "bg1",
                            boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.08)"
                        },
                        postAdv_fixed_nextStep: {
                            flexDirection: ["column", "row", "row"],
                            padding: ["12px 0", "12px 0"],
                            width: ["100%", "720px", "1200px"],
                            margin: "auto",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        postAdv_fixed_fee: {
                            height: ["40px", "auto", "auto"],
                            mb: ["12px", 0, 0],
                            mt: ["-12px", 0, 0],
                            alignItems: "center",
                            bg: "bg1",
                            px: ["15px", 0, 0],
                            fontSize: ["12px", "14px", "14px"]
                        },
                        postAdv_dia_title: {
                            width: "100%",
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: 600,
                            mb: "8px"
                        },
                        pds_flex: {
                            width: "100%",
                            maxheight: "360px",
                            overflowY: "auto",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            mb: "24px"
                        },
                        pdsf_txt: {
                            width: "100%",
                            lineHeight: "20px",
                            fontSize: "14px",
                            color: "#474D57"
                        },
                        tm_line: {
                            width: "100%",
                            height: "1px",
                            bg: "line",
                            my: "20px"
                        },
                        tmrr_viewMore: {
                            color: "primary",
                            fontSize: "14px",
                            lineHeight: "20px",
                            mt: "20px",
                            textDecoration: "underline",
                            cursor: "pointer"
                        }
                    },
                    merApplication: i.n(D)(),
                    fiatOrder: {
                        filterItemWrapper: {
                            whiteSpace: "nowrap",
                            mb: ["md", 0],
                            mr: "12px"
                        },
                        tableRowHeader: {
                            fontSize: 14,
                            background: "#FAFAFA",
                            alignItems: "center",
                            paddingY: 10
                        },
                        tableCell: {
                            boxSizing: "border-box",
                            width: "100%",
                            height: ["auto", 82],
                            paddingTop: [0, 24],
                            justifyContent: ["flex-end", "initial"],
                            "& p": {
                                textAlign: ["right", "initial"]
                            }
                        },
                        pnlTableCell: {
                            boxSizing: "border-box",
                            width: "100%",
                            height: ["auto", 90],
                            py: [0, 20],
                            justifyContent: ["flex-end", "initial"],
                            alignItems: "center",
                            "& p": {
                                textAlign: ["right", "initial"]
                            }
                        },
                        externalOrderTableCell: {
                            boxSizing: "border-box",
                            width: "100%",
                            height: ["auto", 60],
                            py: [0, "20px"],
                            justifyContent: ["flex-end", "initial"],
                            alignItems: "center",
                            "& p": {
                                textAlign: ["right", "initial"]
                            }
                        },
                        assetLogo: {
                            height: "20px",
                            maxWidth: "20px",
                            marginRight: "4px",
                            verticalAlign: "-8px"
                        },
                        exportTableCell: {
                            boxSizing: "border-box",
                            width: "100%",
                            height: ["auto", 52],
                            alignItems: "center",
                            justifyContent: ["flex-end", "initial"],
                            "& p": {
                                textAlign: ["right", "initial"]
                            }
                        },
                        filterDatePickerFooter: {
                            px: 32,
                            py: 22,
                            bg: "#FFFFFF",
                            borderRadius: "0px 0px 4px 4px",
                            borderTop: "1px solid #EAECEF"
                        },
                        statFlagLabel: {
                            bg: "#EAECEF",
                            borderRadius: "3px",
                            fontSize: "12px",
                            color: "#707A8A",
                            px: "4px",
                            width: "fit-content",
                            lineHeight: "16px",
                            mt: "4px",
                            mb: ["8px", 0]
                        }
                    }
                },
                S = l()(F, (0, o.A)({}, E)),
                z = (l()(C, (0, o.A)({}, E)), l()(B, (0, o.A)({}, E)), l()(g.A, (0, o.A)({}, E))),
                I = (0, r.A)((0, o.A)({}, x.BB), {
                    mobile: a()(x.BB, "mobile")
                }),
                R = x.XT,
                W = Object.freeze(["/", "/trade", "/blockTrade", "/cash", "/adv", "/express", "/fiatOrderDetail", "/fiatOrder", "/userCenter", "/advertiserDetail", "/myads", "/advEdit", "/postAd", "/payment", "/check-p2p-suspension", "/p2pro", "/blockMerchant", "/swapHistory", "/pass", "/appealHistory", "/merchantApplication", "/chat"])
        },
        tECZ: e => {
            "use strict";
            e.exports = {
                container: {
                    width: "100%",
                    height: "100%",
                    minHeight: "100vh",
                    flexDirection: "column",
                    color: "white",
                    pb: [5, 6],
                    textAlign: "center",
                    alignItems: "center"
                },
                featureCardWrapper: {
                    marginTop: [10, 42],
                    width: "100%",
                    maxWidth: 1200,
                    justifyContent: ["center", "space-between"],
                    gap: [3, 4],
                    flexDirection: ["column", "row"]
                },
                featureCard: {
                    height: "auto",
                    textAlign: "center",
                    flex: 1,
                    borderRadius: 10,
                    px: 3,
                    pt: 4,
                    backgroundImage: " linear-gradient(180deg, rgba(71, 77, 87, 0.3) 0%, #1E2329 100%)",
                    boxShadow: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                    "& > h3": {
                        fontSize: ["18px", "20px"],
                        marginTop: [3, "20px"]
                    },
                    "& > p": {
                        color: "t.third",
                        marginTop: "xs",
                        marginBottom: ["sm", "plus"]
                    }
                },
                requirementsWrapper: {
                    width: "100%",
                    maxWidth: 1200,
                    gap: 3,
                    flexDirection: ["column", "column", "row"]
                },
                requirementCard: {
                    borderRadius: 10,
                    flex: 1,
                    border: "1px solid #474D57",
                    paddingY: "md",
                    paddingX: "sm"
                },
                avatar: {
                    width: 20,
                    height: 20,
                    borderRadius: "100%",
                    border: "1px solid t.primary",
                    fontWeight: "500",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 12,
                    padding: 2,
                    color: "#181A20",
                    background: "#EAECEF"
                },
                applicationFormWrapper: {
                    flexDirection: "column",
                    background: "#FFFFFF",
                    borderRadius: 4,
                    marginX: [0, 24, 120],
                    marginTop: [0, 24],
                    marginBottom: [0, 40],
                    paddingY: 16,
                    paddingX: [16, 24],
                    boxShadow: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)"
                },
                applicationAlert: {
                    background: "#FEF6D8",
                    paddingX: "14px",
                    paddingY: "12px",
                    borderRadius: "4px",
                    marginBottom: "32px",
                    alignItems: "flex-start"
                },
                benefitItemTitle: {
                    color: "t.primary",
                    fontSize: ["16px", "18px"],
                    lineHeight: ["24px", "28px"],
                    fontWeight: 600,
                    mb: 2,
                    textAlign: ["start", "center"]
                },
                benefitItemContent: {
                    fontSize: ["14px", "16px"],
                    lineHeight: ["20px", "24px"],
                    mb: 4,
                    color: "t.secondary",
                    textAlign: ["start", "center"]
                }
            }
        },
        ulLh: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => x
            });
            var o = i("wIZF"),
                r = i("DTvD"),
                n = i.n(r),
                l = i("511d"),
                p = i("fvKX"),
                a = i("jSBn");
            const x = function(e) {
                var t = e.pathPrefix,
                    i = e.isRegionMode,
                    r = e.level2Domain,
                    x = e.lang,
                    d = e.prefixCls,
                    s = e.isRTL,
                    c = e.iconConfig,
                    g = e.children,
                    m = e.isElectron,
                    h = e.isMobile,
                    f = (0, o.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    b = {
                        prefixCls: d,
                        isRTL: s,
                        iconConfig: c,
                        isElectron: m,
                        isMobile: h
                    },
                    u = {
                        pathPrefix: t,
                        isRegionMode: i,
                        level2Domain: r,
                        lang: x
                    },
                    w = Object.values(u).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    _ = n().createElement(p.A, (0, o.__assign)({}, b), n().createElement(l.A, (0, o.__assign)({}, f), g));
                return w ? n().createElement(a.A, (0, o.__assign)({}, u), _) : _
            }
        },
        "511d": (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => b,
                w: () => h
            });
            var o = i("wIZF"),
                r = i("DTvD"),
                n = i.n(r),
                l = i("W3Ja");
            const p = (0, r.createContext)({
                colors: {},
                mode: "light"
            });
            var a = i("qrIQ"),
                x = i("hyZw"),
                d = i("OKx2"),
                s = i("O94r"),
                c = i.n(s),
                g = i("eeEA"),
                m = i("fvKX"),
                h = function() {
                    return (0, r.useContext)(p)
                },
                f = {
                    fresh: "",
                    traditional: "traditional"
                };
            const b = function(e) {
                var t = e.scope,
                    i = e.isCVD,
                    s = e.isReverse,
                    h = e.themeColors,
                    b = e.colorMode,
                    u = void 0 === b ? "fresh" : b,
                    w = e.mode,
                    _ = void 0 === w ? "light" : w,
                    y = e.themeExtraColors,
                    v = void 0 === y ? {} : y,
                    A = (0, m.r)().isMobile,
                    F = (0, r.useMemo)((function() {
                        var e = [i ? "cvd" : f[u] || "", s ? "reverse" : ""].filter(Boolean),
                            t = (0, o.__assign)({}, h),
                            r = v[e.join("-")] || {};
                        A && ((null === h || void 0 === h ? void 0 : h.mobile) && (t = (0, o.__assign)((0, o.__assign)({}, t), t.mobile)), (null === r || void 0 === r ? void 0 : r.mobile) && (r = (0, o.__assign)((0, o.__assign)({}, r), r.mobile)));
                        var n = (0, o.__assign)((0, o.__assign)({}, t), r);
                        delete n.mobile;
                        var l;
                        return l = Object.keys(n).reduce((function(e, t) {
                            var i;
                            return (0, o.__assign)((0, o.__assign)({}, e), ((i = {})["--color-".concat(t)] = n[t], i))
                        }), {}), {
                            colors: n,
                            styles: l
                        }
                    }), [i, s, h, v, A, u]),
                    C = F.colors,
                    B = F.styles,
                    D = c()("theme-root", _, e.className);
                return (0, l.op)((function() {
                    var e;
                    return a.lq || t || !document.body ? x.es : ((0, d.Dq)(document.body, B, !0), (e = document.body.classList).add.apply(e, D.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, d.Dq)(document.body, B, !1), (e = document.body.classList).remove.apply(e, D.split(" ")))
                    })
                }), [D, t, B]), n().createElement(p.Provider, {
                    value: {
                        isCVD: i,
                        isReverse: s,
                        mode: _,
                        colors: C
                    }
                }, a.lq || t ? n().createElement(g.Ay, {
                    className: D,
                    style: B,
                    children: e.children
                }) : e.children)
            }
        },
        a49g: (e, t, i) => {
            var o = i("xoyU"),
                r = i("p1C/"),
                n = i("SiwR"),
                l = i("Ypsa");
            e.exports = function(e, t) {
                return t = o(t, e), null == (e = n(e, t)) || delete e[l(r(t))]
            }
        },
        r9Vz: (e, t, i) => {
            var o = i("Kkar");
            e.exports = function(e) {
                return o(e) ? void 0 : e
            }
        },
        SiwR: (e, t, i) => {
            var o = i("w2Tz"),
                r = i("0Ocv");
            e.exports = function(e, t) {
                return t.length < 2 ? e : o(e, r(t, 0, -1))
            }
        },
        "p1C/": e => {
            e.exports = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            }
        },
        uZih: (e, t, i) => {
            var o = i("H87J"),
                r = i("kn3Q"),
                n = i("a49g"),
                l = i("xoyU"),
                p = i("LtXa"),
                a = i("r9Vz"),
                x = i("cH1A"),
                d = i("zF5n"),
                s = x((function(e, t) {
                    var i = {};
                    if (null == e) return i;
                    var x = !1;
                    t = o(t, (function(t) {
                        return t = l(t, e), x || (x = t.length > 1), t
                    })), p(e, d(e), i), x && (i = r(i, 7, a));
                    for (var s = t.length; s--;) n(i, t[s]);
                    return i
                }));
            e.exports = s
        }
    }
]);
//# debugId=7a77694d-af0f-5dde-a48f-7eaf3804d652