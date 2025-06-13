"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a42ad5e8-ee5f-58d8-a170-21ce36470e49")
    } catch (e) {}
}();

(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [706], {

        /***/
        "C/vZ":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var _defiwallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IvgJ");

                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (_defiwallet_page__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z);


                /***/
            }),

        /***/
        "IvgJ":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Z": () => ( /* binding */ Home)
                    /* harmony export */
                });
                /* harmony import */
                var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("ttNT");
                /* harmony import */
                var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("/++K");
                /* harmony import */
                var _flow_src_git_toolsfdg_net_fe_web_mpc_wallet_node_modules_pnpm_regenerator_runtime_0_13_9_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Pz56");
                /* harmony import */
                var _flow_src_git_toolsfdg_net_fe_web_mpc_wallet_node_modules_pnpm_regenerator_runtime_0_13_9_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_flow_src_git_toolsfdg_net_fe_web_mpc_wallet_node_modules_pnpm_regenerator_runtime_0_13_9_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oUqw");
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DTvD");
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */
                var gsap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("fXHe");
                /* harmony import */
                var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("a8Ch");
                /* harmony import */
                var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("r3S0");
                /* harmony import */
                var _components_QRcodeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xYZv");
                /* harmony import */
                var _components_MPCModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rz+5");
                /* harmony import */
                var _components_NetworkModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZGwD");
                /* harmony import */
                var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AdcS");
                /* harmony import */
                var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CgVz");
                /* harmony import */
                var _utils_initSensors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZztR");
                /* harmony import */
                var _apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FWOm");
                /* harmony import */
                var _style_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("jChU");
                /* harmony import */
                var _components_Section1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cIYf");
                /* harmony import */
                var _components_Section2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("JN65");
                /* harmony import */
                var _components_Section3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5j/h");
                /* harmony import */
                var _components_Section4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("GDbF");
                /* harmony import */
                var _components_Web3Ease__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("3zi4");
                /* harmony import */
                var _style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("63T4");
                /* harmony import */
                var _components_Faq__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("iCkf");
                /* harmony import */
                var _components_Transition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("oZ2f");
                /* harmony import */
                var _hooks_useUA__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("OKG+");
                /* harmony import */
                var _components_Disclaimer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("2swF");
                /* harmony import */
                var jotai__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("3Tbc");
                /* harmony import */
                var _components_CTAButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("G+it");
                /* harmony import */
                var _scrollControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("4LV3");
                /* harmony import */
                var _components_Business__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("F8bZ");






























                function Home() {
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
                        // @ts-ignore-next-line: Upgrade pika 0.2.6 -> 0.3.57
                        _utils_initSensors__WEBPACK_IMPORTED_MODULE_8__ /* .track.view */ .j.view("buw_homepage");
                    }, []);
                    var t = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__ /* .useTranslation */ .$G)("");
                    var ref = (0, _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_24__ /* ["default"] */ .Z)((0, _hooks__WEBPACK_IMPORTED_MODULE_7__ /* .useTheme */ .Fg)(), 2),
                        theme = ref[0],
                        toggleTheme = ref[1];
                    var ref1 = (0, _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_24__ /* ["default"] */ .Z)((0, jotai__WEBPACK_IMPORTED_MODULE_25__ /* .useAtom */ .KO)(_components_CTAButton__WEBPACK_IMPORTED_MODULE_21__ /* .qrcodeVisibleAtom */ .l$), 2),
                        qrcodeVisible = ref1[0],
                        setqrcodeVisible = ref1[1];
                    var ref2 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        MPCModalVisible = ref2[0],
                        setMPCModalVisible = ref2[1];
                    var ref3 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        networkModalVisible = ref3[0],
                        setnetworkModalVisible = ref3[1];
                    var ref4 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)([
                            [],
                            []
                        ]),
                        data = ref4[0],
                        setData = ref4[1];
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {
                        var getData = function() {
                            var _ref = (0, _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_26__ /* ["default"] */ .Z)(_flow_src_git_toolsfdg_net_fe_web_mpc_wallet_node_modules_pnpm_regenerator_runtime_0_13_9_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                                var res;
                                return _flow_src_git_toolsfdg_net_fe_web_mpc_wallet_node_modules_pnpm_regenerator_runtime_0_13_9_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                                    while (1) switch (_ctx.prev = _ctx.next) {
                                        case 0:
                                            _ctx.next = 2;
                                            return Promise.all([
                                                (0, _apis__WEBPACK_IMPORTED_MODULE_9__ /* .fetchNetworkList$ */ .cQ)(),
                                                (0, _apis__WEBPACK_IMPORTED_MODULE_9__ /* .fetchDappList$ */ .fx)()
                                            ]);
                                        case 2:
                                            res = _ctx.sent;
                                            setData(res);
                                        case 4:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }));
                            return function getData() {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        getData();
                    }, []);
                    var metaData = {
                        title: t("web3-wallet-page-title", {
                            defaultValue: "Binance Web3 Wallet: Multi Blockchain, Crypto, DeFi"
                        }),
                        keywords: t("web3-wallet-page-meta-keywords", {
                            defaultValue: "Crypto Wallet, DeFi Wallet, Blockchain Wallet, web3, cryptocurrency wallet"
                        }),
                        description: t("web3-wallet-page-meta-description", {
                            defaultValue: "Binance Web3 wallet is a keyless, seedless, multi-chain, semi-custody wallet"
                        })
                    };
                    var clickLearnMore = function() {
                        setMPCModalVisible(true);
                    };
                    var clickNetworkAndDapp = function() {
                        setnetworkModalVisible(true);
                    };
                    var ref5 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
                        animationPosition = ref5[0],
                        setAnimationPosition = ref5[1];
                    var wrapRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
                    var section1Ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
                    var ref6 = (0, _hooks_useUA__WEBPACK_IMPORTED_MODULE_19__ /* .useUA */ .nD)(),
                        isMobile = ref6.isMobile,
                        isTablet = ref6.isTablet;
                    var disableAnimateRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function() {
                        var ease = "expo.inOut";
                        var main = function() {
                            if (wrapRef.current) {
                                gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.registerPlugin */ .p8.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_28__ /* ["default"] */ .Z, gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_29__ /* ["default"] */ .Z);
                                var enterTimeout = null;
                                var enterBackTimeout = null;
                                if (isMobile || isTablet) {
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(wrapRef.current, {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=100px top",
                                            end: "bottom top",
                                            endTrigger: section1Ref.current,
                                            scrub: true
                                        },
                                        ease: ease,
                                        backgroundColor: "#0B0E11"
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#sticky-animate", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=100px top",
                                            end: "bottom-=200px top",
                                            endTrigger: "#mobile",
                                            // markers: true,
                                            scrub: true
                                        },
                                        ease: ease,
                                        y: 0
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#tokenSvg", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=280px top",
                                            end: "bottom top",
                                            endTrigger: "#mobile",
                                            scrub: true,
                                            // markers: true,
                                            onEnter: function() {
                                                if (disableAnimateRef.current) {
                                                    return;
                                                }
                                                clearTimeout(enterTimeout);
                                                clearTimeout(enterBackTimeout);
                                                (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .disableScroll */ .X)();
                                                gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(window, {
                                                    duration: 2,
                                                    scrollTo: {
                                                        y: "#section2",
                                                        offsetY: 1000
                                                    }
                                                });
                                                disableAnimateRef.current = true;
                                                setTimeout(function() {
                                                    disableAnimateRef.current = false;
                                                    (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .enableScroll */ .K)();
                                                }, 2200);
                                            },
                                            onEnterBack: function() {
                                                if (disableAnimateRef.current) {
                                                    return;
                                                }
                                                clearTimeout(enterTimeout);
                                                clearTimeout(enterBackTimeout);
                                                (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .disableScroll */ .X)();
                                                gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(window, {
                                                    duration: 2,
                                                    scrollTo: {
                                                        y: "#sticky-element",
                                                        offsetY: 0
                                                    }
                                                });
                                                disableAnimateRef.current = true;
                                                setTimeout(function() {
                                                    disableAnimateRef.current = false;
                                                    (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .enableScroll */ .K)();
                                                }, 2200);
                                            },
                                            onUpdate: function(param) {
                                                var progress = param.progress;
                                                setAnimationPosition(Math.max(progress * 150, 0));
                                            }
                                        },
                                        ease: ease,
                                        width: isMobile ? 200 : 300
                                    });
                                } else {
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(wrapRef.current, {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top top",
                                            end: "bottom bottom",
                                            endTrigger: wrapRef.current,
                                            scrub: true
                                        },
                                        ease: ease,
                                        backgroundColor: "#0B0E11"
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#sticky-animate", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top top",
                                            end: "bottom-=200px bottom",
                                            endTrigger: wrapRef.current,
                                            scrub: true
                                        },
                                        y: 128,
                                        ease: ease
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#sticky-animate", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=200px top",
                                            end: "bottom-=200px bottom",
                                            endTrigger: wrapRef.current,
                                            scrub: true
                                        },
                                        ease: ease,
                                        x: 0
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#animateWrap", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=300px top",
                                            end: "bottom-=100px bottom",
                                            endTrigger: wrapRef.current,
                                            scrub: true
                                        },
                                        width: "100vw"
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#sticky-animate", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top+=300px top",
                                            end: "+=200px",
                                            scrub: true
                                        },
                                        width: "100vw"
                                    });
                                    gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to("#animateWrap", {
                                        scrollTrigger: {
                                            trigger: wrapRef.current,
                                            start: "top-=62px top",
                                            end: "bottom-=100px bottom",
                                            endTrigger: wrapRef.current,
                                            scrub: true,
                                            onEnter: function(param) {
                                                var progress = param.progress;
                                                if (disableAnimateRef.current) {
                                                    return;
                                                }
                                                clearTimeout(enterTimeout);
                                                clearTimeout(enterBackTimeout);
                                                (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .disableScroll */ .X)();
                                                disableAnimateRef.current = true;
                                                gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(window, {
                                                    duration: 2,
                                                    scrollTo: {
                                                        y: "#section2",
                                                        offsetY: 650
                                                    }
                                                });
                                                enterTimeout = setTimeout(function() {
                                                    disableAnimateRef.current = false;
                                                    (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .enableScroll */ .K)();
                                                }, 2200);
                                            },
                                            onEnterBack: function(param) {
                                                var progress = param.progress;
                                                if (disableAnimateRef.current) {
                                                    return;
                                                }
                                                clearTimeout(enterTimeout);
                                                clearTimeout(enterBackTimeout);
                                                (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .disableScroll */ .X)();
                                                disableAnimateRef.current = true;
                                                gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.to */ .p8.to(window, {
                                                    duration: 2,
                                                    scrollTo: {
                                                        y: "#sticky-element",
                                                        offsetY: 100
                                                    }
                                                });
                                                enterBackTimeout = setTimeout(function() {
                                                    disableAnimateRef.current = false;
                                                    (0, _scrollControl__WEBPACK_IMPORTED_MODULE_22__ /* .enableScroll */ .K)();
                                                }, 2200);
                                            },
                                            onUpdate: function(param) {
                                                var progress = param.progress;
                                                setAnimationPosition(Math.max(Math.min(progress, 1) * 150, 0));
                                            }
                                        },
                                        ease: ease
                                    });
                                }
                            }
                        };
                        var ctx = gsap__WEBPACK_IMPORTED_MODULE_27__ /* .gsap.context */ .p8.context(main, wrapRef) // <- IMPORTANT! Scopes selector text
                        ;
                        return function() {
                            return ctx.revert() // cleanup
                            ;
                        };
                    }, [
                        isMobile,
                        isTablet
                    ]);
                    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_6__ /* .Seo */ .p, {
                                metaData: metaData
                            }),
                            /*#__PURE__*/
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                        ref: wrapRef,
                                        id: "sticky-element",
                                        children: [
                                            /*#__PURE__*/
                                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                ref: section1Ref,
                                                className: "section1 mb-[180px] md:mb-[240px] lg:mb-0",
                                                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Section1__WEBPACK_IMPORTED_MODULE_11__ /* .Section1 */ .S, {})
                                            }),
                                            /*#__PURE__*/
                                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                id: "sticky-animate",
                                                className: "relative z-10 flex w-full translate-y-[-830px] justify-center overflow-hidden lg:sticky lg:bottom-[50px] lg:mx-auto lg:mt-[140px] lg:h-[678px] lg:w-[1200px] lg:translate-x-[46px] lg:translate-y-[56px] lg:items-end lg:justify-end lg:overflow-visible ",
                                                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                    id: "animateWrap",
                                                    className: "lg:w-[678px]",
                                                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Transition__WEBPACK_IMPORTED_MODULE_18__ /* .Transition */ .u, {
                                                        goTo: Math.max(animationPosition, 0),
                                                        id: "tokenSvg",
                                                        className: "w-[800px] md:w-[1000px] lg:w-auto"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/
                                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                                id: "section2",
                                                className: "section2 relative mt-[48px] pb-[180px] md:pb-[280px] lg:top-0 lg:mt-0 lg:pb-0",
                                                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Section2__WEBPACK_IMPORTED_MODULE_12__ /* .Section2 */ .v, {
                                                    onClick: clickNetworkAndDapp
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Section3__WEBPACK_IMPORTED_MODULE_13__ /* .Section3 */ .v, {
                                        openQrcode: function() {
                                            return setqrcodeVisible(true);
                                        }
                                    }),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Section4__WEBPACK_IMPORTED_MODULE_14__ /* .Section4 */ .f, {
                                        onClick: clickLearnMore
                                    }),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Business__WEBPACK_IMPORTED_MODULE_23__ /* .Business */ .e, {}),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Web3Ease__WEBPACK_IMPORTED_MODULE_15__ /* .Web3Ease */ .c, {}),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Faq__WEBPACK_IMPORTED_MODULE_17__ /* .Faq */ .B, {}),
                                    /*#__PURE__*/
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Disclaimer__WEBPACK_IMPORTED_MODULE_20__ /* .Disclaimer */ .e, {})
                                ]
                            }),
                            /*#__PURE__*/
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_QRcodeModal__WEBPACK_IMPORTED_MODULE_3__ /* .QRcodeModal */ .T, {
                                visible: qrcodeVisible,
                                onClose: function() {
                                    return setqrcodeVisible(false);
                                }
                            }),
                            /*#__PURE__*/
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_MPCModal__WEBPACK_IMPORTED_MODULE_4__ /* .MPCModal */ .X, {
                                visible: MPCModalVisible,
                                onClose: function() {
                                    return setMPCModalVisible(false);
                                }
                            }),
                            /*#__PURE__*/
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_NetworkModal__WEBPACK_IMPORTED_MODULE_5__ /* .NetworkModal */ .B, {
                                data: data,
                                visible: networkModalVisible,
                                onClose: function() {
                                    return setnetworkModalVisible(false);
                                }
                            })
                        ]
                    });
                };


                /***/
            })

    }
]);
//# debugId=a42ad5e8-ee5f-58d8-a170-21ce36470e49