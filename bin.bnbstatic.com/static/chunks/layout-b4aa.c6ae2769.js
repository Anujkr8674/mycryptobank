(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [279], {

        /***/
        "QNan":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "yV": () => ( /* reexport */ utils /* getLangFromCode */ .yV),
                    "QT": () => ( /* reexport */ c)
                });

                // UNUSED EXPORTS: I18nProvider, Trans, defaultPathResolver, dir, getCode, getI18nValue, getLabel, getLang, getRegion, getRegionFromCode, parseCode, renderAsNsKey, toArray, trans2NsKey, useLanguage

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_sliced_to_array.mjs + 2 modules
                var _sliced_to_array = __webpack_require__("/++K");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@pika+utils@0.3.0/node_modules/@pika/utils/dist/esm/index.js + 1 modules
                var esm = __webpack_require__("i2Sz");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@pika+plugin-i18n@0.3.36_@swc+core@1.3.96_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-i18n/dist/esm/i18n/i18nCore.js + 5 modules
                var i18nCore = __webpack_require__("KEwK");; // CONCATENATED MODULE: ./node_modules/.pnpm/@pika+plugin-i18n@0.3.36_@swc+core@1.3.96_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-i18n/dist/esm/i18n/mock/index.js
                var createMock = function() {
                    return null;
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@pika+plugin-i18n@0.3.36_@swc+core@1.3.96_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-i18n/dist/esm/i18n/index.js






                var c = function(o) {
                        var ref = (0, external_React_.useContext)(i18nCore /* i18nContext */ .g),
                            _$a = ref.i18n,
                            _$l = ref.__count__,
                            c = _$a.i18nextIns,
                            ref1 = (0, _sliced_to_array /* default */ .Z)((0, external_React_.useState)(c.language), 2),
                            d = ref1[0],
                            u = ref1[1],
                            g = (0, external_React_.useCallback)(function(e) {
                                return e;
                            }, []),
                            m = (0, external_React_.useMemo)(function() {
                                return c.getFixedT(d, o);
                            }, [
                                d,
                                o,
                                _$l
                            ]);
                        return (0, external_React_.useEffect)(function() {
                            if (c.isInitialized) {
                                if (o) {
                                    (Array.isArray(o) ? o : [
                                        o
                                    ]).forEach(function(e) {
                                        c.hasResourceBundle(d, e) || c.loadNamespaces(e);
                                    });
                                }
                            } else _$a.init();
                            return c.on("languageChanged", u),
                                function() {
                                    c.off("languageChanged", u);
                                };
                        }, []), {
                            locale: d,
                            language: d,
                            setLocale: _$a.setLocale,
                            t: c.isInitialized ? m : g,
                            i18n: c
                        };
                    },
                    d = function(e) {
                        var i = t(s).i18n;
                        return o(Object.assign({
                            i18n: i.i18nextIns.isInitialized ? i.i18nextIns : void 0
                        }, e));
                    };
                var u = null === esm /* GLOBAL_OBJ */ .n2 || void 0 === esm /* GLOBAL_OBJ */ .n2 ? void 0 : esm /* GLOBAL_OBJ.PRERENDER */ .n2.PRERENDER;
                if (u) {
                    var e1 = createMock();
                    e1 && (c = e1.useI18n, d = e1.Trans);
                }

                var I18nProvider = i18nCore /* i18nContext.Provider */ .g.Provider;

                // EXTERNAL MODULE: ./node_modules/.pnpm/@pika+plugin-i18n@0.3.36_@swc+core@1.3.96_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-i18n/dist/esm/i18n/utils/index.js + 3 modules
                var utils = __webpack_require__("KH5z");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@pika+plugin-language@0.3.23_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-language/dist/esm/context.js
                var context = __webpack_require__("UyVv");; // CONCATENATED MODULE: ./node_modules/.pnpm/@pika+plugin-language@0.3.23_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@pika/plugin-language/dist/esm/api/index.js


                ; // CONCATENATED MODULE: ./.shuvi/app/runtime/bn/i18n.ts





                /***/
            }),

        /***/
        "CgVz":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Rk": () => ( /* reexport */ useIsInViewport),
                    "bU": () => ( /* reexport */ useLocale /* useLocale */ .b),
                    "Fg": () => ( /* reexport */ useTheme_useTheme),
                    "$G": () => ( /* reexport */ useTranslation)
                });

                // UNUSED EXPORTS: THEME, useIsMobile, useLng, useRegion

                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./.shuvi/app/runtime/bn/i18n.ts + 3 modules
                var i18n = __webpack_require__("QNan");; // CONCATENATED MODULE: ./src/hooks/useTranslation.ts

                // import { useParams } from "@shuvi/runtime";

                var i18nKeyListWithoutMpweb = [
                    "wallet",
                    "why-defi-wallet",
                    "ans-desc1",
                    "ans-desc3",
                    "faq-question1",
                    "faq-question2",
                    "faq-question3",
                    "faq-question4",
                ];
                var useTranslation = function(prefix) {
                    var t = (0, i18n /* useI18n */ .QT)([
                        "MPC-wallet-web",
                        "new2fa"
                    ]).t;
                    var preSpace = prefix !== null && prefix !== void 0 ? prefix : "mpweb";
                    // fucking code
                    return (0, external_React_.useCallback)(function(key) {
                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        var ref;
                        var i18nKey = i18nKeyListWithoutMpweb.includes(key) ? key : [
                            preSpace,
                            key
                        ].filter(function(v) {
                            return v;
                        }).join("-");
                        return ((ref = t(i18nKey, options)) === null || ref === void 0 ? void 0 : ref.trim()) || options.defaultValue || "";
                    }, [
                        t,
                        preSpace
                    ]);
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@binance+utils@2.13.192_@types+react@18.0.28_react@18.2.0/node_modules/@binance/utils/dist/esm/storage.js
                var storage = __webpack_require__("anf9");
                // EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@7.2.1_react-dom@16.14.0_react@18.2.0_redux@4.1.0/node_modules/react-redux/es/index.js + 18 modules
                var es = __webpack_require__("HnbI");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+hooks@2.19.155_@types+react@18.0.28_react-dom@16.14.0_react-redux@7.2.1_react@18.2.0/node_modules/@binance/hooks/dist/esm/rematch/useCookie.js





                var makeCookies = function(state) {
                    return state.cookies || {};
                };
                var useSelectorCookies = function() {
                    return useSelector(makeCookies, shallowEqual);
                };
                var useMakeCookies = function() {
                    var ref = (0, external_React_.useRef)(null);
                    var dispatch = (0, es /* useDispatch */ .I0)();
                    ref.current = (0, es /* useSelector */ .v9)(makeCookies);
                    return {
                        cookies: ref.current,
                        saveCookie: (0, external_React_.useCallback)(function(key, next) {
                            var nextValue = typeof next === "function" ? next(ref.current[key]) : next;
                            dispatch.cookies.save({
                                key: key,
                                value: nextValue
                            });
                        }, [])
                    };
                };
                var DARK = "dark";
                var LIGHT = "light";
                var themeKey = "theme";
                // Since the TV itself doesn't export any way to determine if the user has modified its styles,
                // it's a workaround for resolving https://jira.toolsfdg.net/browse/FA-5375
                var shouldResetTradingViewKey = "shouldResetTradingView";
                var getTheme = function(isLight) {
                    return isLight ? LIGHT : DARK;
                };
                var useTheme = function() {
                    var ref = useMakeCookies(),
                        cookies = ref.cookies,
                        saveCookie = ref.saveCookie;
                    var getThemeCounter = (0, external_React_.useCallback)(function() {
                        return storage /* storage.getItem */ .tO.getItem(shouldResetTradingViewKey, 0) || 0;
                    }, []);
                    var incThemeCounter = (0, external_React_.useCallback)(function() {
                        var lastTVThemeCounter = getThemeCounter();
                        storage /* storage.setItem */ .tO.setItem(shouldResetTradingViewKey, lastTVThemeCounter + 1);
                    }, [
                        getThemeCounter
                    ]);
                    return {
                        isLight: cookies[themeKey] !== DARK,
                        shouldResetTradingViewKey: shouldResetTradingViewKey,
                        getThemeCounter: getThemeCounter,
                        incThemeCounter: incThemeCounter,
                        toggleTheme: (0, external_React_.useCallback)(function() {
                            saveCookie(themeKey, function(preTheme) {
                                return getTheme(preTheme !== LIGHT);
                            });
                            incThemeCounter();
                        }, [
                            incThemeCounter
                        ])
                    };
                };
                var preferCurrency = "userPreferredCurrency";
                var useCachePreferFiat = function() {
                    var ref = useMakeCookies(),
                        cookies = ref.cookies,
                        saveCookie = ref.saveCookie;
                    return {
                        cachePreferFiat: cookies[preferCurrency],
                        setCacheFiat: useCallback(function(value) {
                            saveCookie(preferCurrency, value);
                        }, [])
                    };
                };
                var useSelectorPreferCurrency = function() {
                    return useCachePreferFiat().cachePreferFiat;
                };
                // for header buyCrypto && fiat trade
                var FIAT_PREFER_CURRENCY = "fiat-prefer-currency";
                var useFiatPreferCurrency = function() {
                    var ref = useMakeCookies(),
                        cookies = ref.cookies,
                        saveCookie = ref.saveCookie;
                    return {
                        getCurrency: cookies[FIAT_PREFER_CURRENCY],
                        setCurrency: useCallback(function(value) {
                            saveCookie(FIAT_PREFER_CURRENCY, value);
                        }, [])
                    };
                };
                var useBasisTimeZone = function() {
                    // This is for move old cookie value to localstorage, can delete "useCookie" after all user update (maybe 2025)
                    var oldbasisTimeZone = "changeBasisTimeZone";
                    var newBasisTimeZoneKey = "finance-common-changeBasisTimeZone";
                    var newBasisTimeZoneEvent = "finance-common-changeBasisTimeZone-change";
                    var ref2 = useCookie(oldbasisTimeZone),
                        basisTimeOldValue = ref2.cookieValue;
                    var ref1 = _sliced_to_array(useLocalStorage(newBasisTimeZoneKey, basisTimeOldValue || ""), 2),
                        newBasisTimeZone = ref1[0],
                        setNewBasisTimeZone = ref1[1];
                    var handleStorageChange = function() {
                        if (getItem(newBasisTimeZoneKey) !== newBasisTimeZone) {
                            try {
                                var ref;
                                setNewBasisTimeZone(JSON.parse(window === null || window === void 0 ? void 0 : (ref = window.localStorage) === null || ref === void 0 ? void 0 : ref[newBasisTimeZoneKey]) || "");
                            } catch (error) {
                                setNewBasisTimeZone("");
                            }
                        }
                    };
                    var triggerEvent = function() {
                        var event = new CustomEvent(newBasisTimeZoneEvent, {});
                        window.dispatchEvent(event);
                    };
                    useEffect(function() {
                        window.addEventListener(newBasisTimeZoneEvent, handleStorageChange);
                        return function() {
                            window.removeEventListener(newBasisTimeZoneEvent, handleStorageChange);
                        };
                    }, [
                        handleStorageChange
                    ]);
                    return {
                        basisTimeZone: newBasisTimeZone || "",
                        setBasisTimeZone: useCallback(function(value) {
                            setNewBasisTimeZone(value);
                            triggerEvent();
                        }, [
                            triggerEvent
                        ])
                    };
                };

                ; // CONCATENATED MODULE: ./src/hooks/useTheme.ts


                var THEME;
                (function(THEME) {
                    THEME["LIGHT"] = "light";
                    THEME["DARK"] = "dark";
                })(THEME || (THEME = {}));
                var useTheme_useTheme = function() {
                    // const [theme, changeTheme] = useState(THEME.LIGHT);
                    var ref = useTheme(),
                        toggleTheme = ref.toggleTheme,
                        isLight = ref.isLight;
                    var theme = isLight ? THEME.LIGHT : THEME.DARK;
                    (0, external_React_.useEffect)(function() {
                        var html = document.documentElement;
                        if (theme === THEME.DARK) {
                            html.classList.add("dark");
                        } else {
                            html.classList.remove("dark");
                        }
                    }, [
                        theme
                    ]);
                    // const toggleTheme = useCallback(() => {
                    //   changeTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
                    // }, [theme]);
                    return [
                        theme,
                        toggleTheme
                    ];
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_sliced_to_array.mjs + 2 modules
                var src_sliced_to_array = __webpack_require__("/++K");; // CONCATENATED MODULE: ./src/hooks/useIsInViewport.ts


                var useIsInViewport = function(ref) {
                    var _$ref = (0, external_React_.useState)(false),
                        isInViewport = _$ref[0],
                        setIsInViewport = _$ref[1];
                    var observer = (0, external_React_.useMemo)(function() {
                        if (false) {}
                        return new IntersectionObserver(function(param) {
                            var _param = (0, src_sliced_to_array /* default */ .Z)(param, 1),
                                entry = _param[0];
                            return setIsInViewport(entry.isIntersecting);
                        });
                    }, []);
                    (0, external_React_.useEffect)(function() {
                        if (observer) {
                            observer.observe(ref.current);
                            return function() {
                                observer.disconnect();
                            };
                        }
                    }, [
                        ref,
                        observer
                    ]);
                    return isInViewport;
                };

                // EXTERNAL MODULE: ./src/hooks/useLocale.ts
                var useLocale = __webpack_require__("+ltY");
                // EXTERNAL MODULE: ./src/hooks/useLng.ts
                var useLng = __webpack_require__("Vo9m");; // CONCATENATED MODULE: ./src/hooks/index.ts








                /***/
            }),

        /***/
        "Vo9m":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "t": () => ( /* binding */ useLng)
                    /* harmony export */
                });
                /* unused harmony export useRegion */
                /* harmony import */
                var _shuvi_runtime_bn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QNan");
                /* harmony import */
                var _useLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+ltY");


                var useLng = function() {
                    var code = (0, _useLocale__WEBPACK_IMPORTED_MODULE_1__ /* .useLocale */ .b)();
                    return (0, _shuvi_runtime_bn_i18n__WEBPACK_IMPORTED_MODULE_0__ /* .getLangFromCode */ .yV)(code);
                };
                // 兼容老路由， 默认 /cn 代表着 region cn, /tw tw
                var regionMap = {
                    cn: "cn",
                    tw: "tw",
                    au: "au",
                    br: "br",
                    es: "la"
                };
                var useRegion = function() {
                    var code = useLocale();
                    return regionMap[code] || getRegionFromCode(code);
                };


                /***/
            }),

        /***/
        "+ltY":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "b": () => ( /* binding */ useLocale)
                    /* harmony export */
                });
                /* harmony import */
                var _shuvi_runtime_bn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QNan");

                var useLocale = function() {
                    var locale = (0, _shuvi_runtime_bn_i18n__WEBPACK_IMPORTED_MODULE_0__ /* .useI18n */ .QT)().locale;
                    return locale || "en";
                };


                /***/
            }),

        /***/
        "uVKZ":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": () => ( /* binding */ layoutshuvi_route)
                });

                // EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
                var jsx_runtime = __webpack_require__("oUqw");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/useLoaderData.js
                var useLoaderData = __webpack_require__("ZIfk");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/index.js + 8 modules
                var esm = __webpack_require__("waGQ");
                // EXTERNAL MODULE: external "_bne.language"
                var external_bne_language_ = __webpack_require__("tKUM");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@binance+hooks@2.19.155_@types+react@18.0.28_react-dom@16.14.0_react-redux@7.2.1_react@18.2.0/node_modules/@binance/hooks/dist/esm/rematch/useGlobal.js
                var useGlobal = __webpack_require__("EwXi");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");; // CONCATENATED MODULE: ./src/context/HeaderFooterConfigContext.tsx



                var HeaderFooterConfigContext = /*#__PURE__*/ (0, external_React_.createContext)({});
                var HeaderFooterConfigProvider = function(param) {
                    var _children = param.children,
                        children = _children === void 0 ? null : _children,
                        configs = param.configs,
                        _locale = param.locale,
                        locale = _locale === void 0 ? "en" : _locale;
                    var restrictedBusinessKeys = (0, useGlobal /* useGlobal */ .Og)().restrictedBusinessKeys;
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(HeaderFooterConfigContext.Provider, {
                        value: {
                            configs: configs,
                            locale: locale,
                            restrictedBusinessKeys: restrictedBusinessKeys
                        },
                        children: children
                    });
                };
                var useHeaderFooterConfigContext = function() {
                    var context = useContext(HeaderFooterConfigContext);
                    if (context === undefined) {
                        throw new Error("useHeaderFooterConfigContext must be used within a HeaderFooterConfigProvider");
                    }
                    return context;
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/RootProvider.js + 4 modules
                var RootProvider = __webpack_require__("lFW8");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/styles/colors/index.js
                var colors = __webpack_require__("Pg4z");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/styles.css
                // extracted by mini-css-extract-plugin

                // EXTERNAL MODULE: ./src/hooks/index.ts + 4 modules
                var hooks = __webpack_require__("CgVz");; // CONCATENATED MODULE: ./src/routes/layout.tsx?shuvi-route








                var MainApp = function() {
                    var configs = (0, useLoaderData /* useLoaderData */ .O)().configs;
                    var lang = (0, hooks /* useLocale */ .bU)();
                    (0, external_React_.useEffect)(function() {
                        var isRTL = (0, external_bne_language_.dir)(lang) === "rtl";
                        if (isRTL) {
                            document.documentElement.dir = "rtl";
                        }
                    }, [
                        lang
                    ]);
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(RootProvider /* default */ .Z, {
                        mode: "light",
                        themeColors: colors /* light */ .R,
                        children: /*#__PURE__*/ (0, jsx_runtime.jsx)(HeaderFooterConfigProvider, {
                            configs: configs,
                            locale: lang,
                            children: /*#__PURE__*/ (0, jsx_runtime.jsx)(esm /* RouterView */ .MA, {})
                        })
                    });
                };
                /* harmony default export */
                const layoutshuvi_route = (MainApp);


                /***/
            }),

        /***/
        "Ax5L":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "YB": () => ( /* binding */ useIsomorphicEffect),
                    "Fs": () => ( /* binding */ useResponsive)
                });

                // UNUSED EXPORTS: useClient

                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/matchmediaquery@0.4.2/node_modules/matchmediaquery/index.js
                var matchmediaquery = __webpack_require__("XJYc");
                var matchmediaquery_default = /*#__PURE__*/ __webpack_require__.n(matchmediaquery);; // CONCATENATED MODULE: ./node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.js
                /* eslint-disable no-var, prefer-template */
                var uppercasePattern = /[A-Z]/g
                var msPattern = /^ms-/
                var cache = {}

                function toHyphenLower(match) {
                    return '-' + match.toLowerCase()
                }

                function hyphenateStyleName(name) {
                    if (cache.hasOwnProperty(name)) {
                        return cache[name]
                    }

                    var hName = name.replace(uppercasePattern, toHyphenLower)
                    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
                }

                /* harmony default export */
                const hyphenate_style_name = (hyphenateStyleName);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
                function shallowEqualArrays(arrA, arrB) {
                    if (arrA === arrB) {
                        return true;
                    }
                    if (!arrA || !arrB) {
                        return false;
                    }
                    const len = arrA.length;
                    if (arrB.length !== len) {
                        return false;
                    }
                    for (let i = 0; i < len; i++) {
                        if (arrA[i] !== arrB[i]) {
                            return false;
                        }
                    }
                    return true;
                }

                function shallowEqualObjects(objA, objB) {
                    if (objA === objB) {
                        return true;
                    }
                    if (!objA || !objB) {
                        return false;
                    }
                    const aKeys = Object.keys(objA);
                    const bKeys = Object.keys(objB);
                    const len = aKeys.length;
                    if (bKeys.length !== len) {
                        return false;
                    }
                    for (let i = 0; i < len; i++) {
                        const key = aKeys[i];
                        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
                            return false;
                        }
                    }
                    return true;
                }

                function shallowEqual(a, b) {
                    const aIsArr = Array.isArray(a);
                    const bIsArr = Array.isArray(b);
                    if (aIsArr !== bIsArr) {
                        return false;
                    }
                    if (aIsArr && bIsArr) {
                        return shallowEqualArrays(a, b);
                    }
                    return shallowEqualObjects(a, b);
                }


                //# sourceMappingURL=index.modern.mjs.map

                // EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
                var prop_types = __webpack_require__("BA5g");
                var prop_types_default = /*#__PURE__*/ __webpack_require__.n(prop_types);; // CONCATENATED MODULE: ./node_modules/.pnpm/react-responsive@10.0.0_react@18.2.0/node_modules/react-responsive/dist/esm/index.js






                const stringOrNumber = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]);
                // media types
                const types = {
                    all: (prop_types_default()).bool,
                    grid: (prop_types_default()).bool,
                    aural: (prop_types_default()).bool,
                    braille: (prop_types_default()).bool,
                    handheld: (prop_types_default()).bool,
                    print: (prop_types_default()).bool,
                    projection: (prop_types_default()).bool,
                    screen: (prop_types_default()).bool,
                    tty: (prop_types_default()).bool,
                    tv: (prop_types_default()).bool,
                    embossed: (prop_types_default()).bool
                };
                // properties that match media queries
                const matchers = {
                    orientation: prop_types_default().oneOf(['portrait', 'landscape']),
                    scan: prop_types_default().oneOf(['progressive', 'interlace']),
                    aspectRatio: (prop_types_default()).string,
                    deviceAspectRatio: (prop_types_default()).string,
                    height: stringOrNumber,
                    deviceHeight: stringOrNumber,
                    width: stringOrNumber,
                    deviceWidth: stringOrNumber,
                    color: (prop_types_default()).bool,
                    colorIndex: (prop_types_default()).bool,
                    monochrome: (prop_types_default()).bool,
                    resolution: stringOrNumber,
                    type: Object.keys(types)
                };
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const {
                    type,
                    ...featureMatchers
                } = matchers;
                // media features
                const features = {
                    minAspectRatio: (prop_types_default()).string,
                    maxAspectRatio: (prop_types_default()).string,
                    minDeviceAspectRatio: (prop_types_default()).string,
                    maxDeviceAspectRatio: (prop_types_default()).string,
                    minHeight: stringOrNumber,
                    maxHeight: stringOrNumber,
                    minDeviceHeight: stringOrNumber,
                    maxDeviceHeight: stringOrNumber,
                    minWidth: stringOrNumber,
                    maxWidth: stringOrNumber,
                    minDeviceWidth: stringOrNumber,
                    maxDeviceWidth: stringOrNumber,
                    minColor: (prop_types_default()).number,
                    maxColor: (prop_types_default()).number,
                    minColorIndex: (prop_types_default()).number,
                    maxColorIndex: (prop_types_default()).number,
                    minMonochrome: (prop_types_default()).number,
                    maxMonochrome: (prop_types_default()).number,
                    minResolution: stringOrNumber,
                    maxResolution: stringOrNumber,
                    ...featureMatchers
                };
                const esm_all = { ...types,
                    ...features
                };
                var mq = {
                    all: esm_all,
                    types: types,
                    matchers: matchers,
                    features: features
                };

                const negate = (cond) => `not ${cond}`;
                const keyVal = (k, v) => {
                    const realKey = hyphenate_style_name(k);
                    // px shorthand
                    if (typeof v === 'number') {
                        v = `${v}px`;
                    }
                    if (v === true) {
                        return realKey;
                    }
                    if (v === false) {
                        return negate(realKey);
                    }
                    return `(${realKey}: ${v})`;
                };
                const join = (conds) => conds.join(' and ');
                const toQuery = (obj) => {
                    const rules = [];
                    Object.keys(mq.all).forEach((k) => {
                        const v = obj[k];
                        if (v != null) {
                            rules.push(keyVal(k, v));
                        }
                    });
                    return join(rules);
                };

                const Context = (0, external_React_.createContext)(undefined);

                const makeQuery = (settings) => settings.query || toQuery(settings);
                const hyphenateKeys = (obj) => {
                    if (!obj)
                        return undefined;
                    const keys = Object.keys(obj);
                    return keys.reduce((result, key) => {
                        result[hyphenate_style_name(key)] = obj[key];
                        return result;
                    }, {});
                };
                const useIsUpdate = () => {
                    const ref = (0, external_React_.useRef)(false);
                    (0, external_React_.useEffect)(() => {
                        ref.current = true;
                    }, []);
                    return ref.current;
                };
                const useDevice = (deviceFromProps) => {
                    const deviceFromContext = (0, external_React_.useContext)(Context);
                    const getDevice = () => hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
                    const [device, setDevice] = (0, external_React_.useState)(getDevice);
                    (0, external_React_.useEffect)(() => {
                        const newDevice = getDevice();
                        if (!shallowEqualObjects(device, newDevice)) {
                            setDevice(newDevice);
                        }
                    }, [deviceFromProps, deviceFromContext]);
                    return device;
                };
                const useQuery = (settings) => {
                    const getQuery = () => makeQuery(settings);
                    const [query, setQuery] = (0, external_React_.useState)(getQuery);
                    (0, external_React_.useEffect)(() => {
                        const newQuery = getQuery();
                        if (query !== newQuery) {
                            setQuery(newQuery);
                        }
                    }, [settings]);
                    return query;
                };
                const useMatchMedia = (query, device) => {
                    const getMatchMedia = () => matchmediaquery_default()(query, device || {}, !!device);
                    const [mq, setMq] = (0, external_React_.useState)(getMatchMedia);
                    const isUpdate = useIsUpdate();
                    (0, external_React_.useEffect)(() => {
                        if (isUpdate) {
                            // skip on mounting, it has already been set
                            const newMq = getMatchMedia();
                            setMq(newMq);
                            return () => {
                                if (newMq) {
                                    newMq.dispose();
                                }
                            };
                        }
                    }, [query, device]);
                    return mq;
                };
                const useMatches = (mediaQuery) => {
                    const [matches, setMatches] = (0, external_React_.useState)(mediaQuery.matches);
                    (0, external_React_.useEffect)(() => {
                        const updateMatches = (ev) => {
                            setMatches(ev.matches);
                        };
                        mediaQuery.addListener(updateMatches);
                        setMatches(mediaQuery.matches);
                        return () => {
                            mediaQuery.removeListener(updateMatches);
                        };
                    }, [mediaQuery]);
                    return matches;
                };
                const useMediaQuery = (settings, device, onChange) => {
                    const deviceSettings = useDevice(device);
                    const query = useQuery(settings);
                    if (!query)
                        throw new Error('Invalid or missing MediaQuery!');
                    const mq = useMatchMedia(query, deviceSettings);
                    const matches = useMatches(mq);
                    const isUpdate = useIsUpdate();
                    (0, external_React_.useEffect)(() => {
                        if (isUpdate && onChange) {
                            onChange(matches);
                        }
                    }, [matches]);
                    (0, external_React_.useEffect)(() => () => {
                        if (mq) {
                            mq.dispose();
                        }
                    }, []);
                    return matches;
                };

                // ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return
                const MediaQuery = ({
                    children,
                    device,
                    onChange,
                    ...settings
                }) => {
                    const matches = useMediaQuery(settings, device, onChange);
                    if (typeof children === 'function') {
                        return children(matches);
                    }
                    return matches ? children : null;
                };


                //# sourceMappingURL=index.js.map

                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/common.js
                var common = __webpack_require__("wD+x");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+easy-hooks@0.7.8_react@18.2.0/node_modules/@web-studio/easy-hooks/dist/esm/common.js



                var useIsomorphicEffect = true ? (external_React_default()).useLayoutEffect : 0;
                var useClient = function() {
                    var _a = external_React_default().useState(common /* isMiniApp */ .Op),
                        isClient = _a[0],
                        setClient = _a[1];
                    useIsomorphicEffect(function() {
                        return setClient("object" !== 'undefined');
                    }, []);
                    return isClient;
                };
                var useResponsive = function() {
                    var isClient = useClient();
                    if (common /* isMiniApp */ .Op)
                        return {
                            isClient: isClient,
                            isMobile: true,
                            isTablet: false
                        };
                    var csrMobile = useMediaQuery({
                        query: 'screen and (max-width: 767px)'
                    });
                    var csrTablet = useMediaQuery({
                        query: 'screen and (max-width: 1023px)'
                    });
                    var isMobile = isClient ? csrMobile : csrMobile;
                    var isTablet = isClient && !isMobile && csrTablet;
                    return {
                        isClient: isClient,
                        isMobile: isMobile,
                        isTablet: isTablet
                    };
                };
                //# sourceMappingURL=common.js.map

                /***/
            }),

        /***/
        "iR44":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Z": () => ( /* binding */ esm_Box)
                });

                // EXTERNAL MODULE: external "tslib"
                var external_tslib_ = __webpack_require__("wIZF");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_);; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+web-component@1.0.13_react-dom@16.14.0_react@18.2.0/node_modules/@web-studio/web-component/dist/esm/View.js


                var View = (0, external_React_.forwardRef)(function(props, ref) {
                    var _a = props.as,
                        as = _a === void 0 ? 'div' : _a,
                        resetProps = (0, external_tslib_.__rest)(props, ["as"]);
                    return external_React_default().createElement(as, (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, resetProps), {
                        ref: ref
                    }));
                });
                /* harmony default export */
                const esm_View = (View);
                //# sourceMappingURL=View.js.map
                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-core@1.0.22_@binance+bmp-components@1.0.49_react-dom@16.14.0_react@18.2.0/node_modules/@web-studio/universal-core/dist/esm/Box.js



                var Box = (0, external_React_.forwardRef)(function(props, ref) {
                    return external_React_default().createElement(esm_View, (0, external_tslib_.__assign)({}, props, {
                        ref: ref
                    }));
                });
                Box.displayName = "Box";
                /* harmony default export */
                const esm_Box = (Box);
                //# sourceMappingURL=Box.js.map

                /***/
            }),

        /***/
        "INPG":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var _web_studio_universal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iR44");

                //
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = (_web_studio_universal_core__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */ .Z);


                //# sourceMappingURL=index.js.map

                /***/
            }),

        /***/
        "MFlc":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Z": () => ( /* binding */ Provider_ConfigProvider),
                    "q": () => ( /* binding */ useConfigContext)
                });

                // EXTERNAL MODULE: external "tslib"
                var external_tslib_ = __webpack_require__("wIZF");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+easy-hooks@0.7.8_react@18.2.0/node_modules/@web-studio/easy-hooks/dist/esm/common.js + 3 modules
                var common = __webpack_require__("Ax5L");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-core@1.0.22_@binance+bmp-components@1.0.49_react-dom@16.14.0_react@18.2.0/node_modules/@web-studio/universal-core/dist/esm/Context/Config.js

                /* harmony default export */
                const Config = ((0, external_React_.createContext)({
                    prefixCls: 'bn',
                    getI18n: function(_) {
                        return _;
                    }
                }));
                //# sourceMappingURL=Config.js.map
                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/string.js

                var replaceUrl = function(url, params) {
                    if (params === void 0) {
                        params = {};
                    }
                    return Object.keys(params).reduce(function(pre, key) {
                        return pre.replace("%".concat(key, "%"), params[key]);
                    }, url || '');
                };

                function hashCode(str) {
                    return (str || '').split('').reduce(function(hash, st) {
                        var nHash = (hash << 5) - hash;
                        return (nHash + st.charCodeAt(0)) | 0;
                    }, 0);
                }
                var reg = /\{\{[^}]+\}\}/g;
                var replaceString = function(string, params) {
                    if (params === void 0) {
                        params = {};
                    }
                    return string.replace(reg, function(_) {
                        var nKey = _.replace(/^{{/g, '').replace(/}}$/g, '');
                        return params[nKey] || '';
                    });
                };
                var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

                function uuid(len, radix) {
                    var $radix = radix || chars.length;
                    var idArr = __spreadArray([], new Array(len || 36), true).map(function(_, i) {
                        var rd = Math.random() * (len ? $radix : 16);
                        var key = len ? 0 | rd : i === 19 ? ((0 | rd) & 0x3) | 0x8 : 0 | rd;
                        var isSpecial = [8, 13, 18, 23].indexOf(i) > -1;
                        return len ? chars[key] : isSpecial ? '-' : i === 14 ? '4' : chars[key];
                    });
                    return idArr.join('');
                }
                //# sourceMappingURL=string.js.map
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/common.js
                var esm_common = __webpack_require__("wD+x");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/ConfigProvider.js





                var useConfigContext = function() {
                    return (0, external_React_.useContext)(Config);
                };
                var ConfigProvider = function(props) {
                    var _a = props.prefixCls,
                        prefixCls = _a === void 0 ? 'bn' : _a,
                        iconConfig = props.iconConfig,
                        i18n = props.i18n,
                        children = props.children,
                        isElectron = props.isElectron,
                        reset = (0, external_tslib_.__rest)(props, ["prefixCls", "iconConfig", "i18n", "children", "isElectron"]);
                    if (esm_common /* isMiniApp */ .Op && !(iconConfig && iconConfig.path)) {
                        throw new Error('iconConfig must be required in ConfigProvider');
                    }
                    var responsive = (0, common /* useResponsive */ .Fs)();
                    var getI18n = (0, external_React_.useCallback)(function(key, params) {
                        var i18nValue = i18n ? i18n[key] : null;
                        var _a = params || {},
                            defaultValue = _a.defaultValue,
                            reset = (0, external_tslib_.__rest)(_a, ["defaultValue"]);
                        return replaceString(i18nValue || defaultValue, reset);
                    }, [i18n]);
                    var values = (0, external_tslib_.__assign)((0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, reset), (!isElectron ?
                        responsive :
                        (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, responsive), {
                            isMobile: false,
                            isTablet: false
                        }))), {
                        prefixCls: prefixCls,
                        iconConfig: iconConfig,
                        getI18n: getI18n
                    });
                    return external_React_default().createElement(Config.Provider, {
                        value: values,
                        children: children
                    });
                };
                /* harmony default export */
                const Provider_ConfigProvider = (ConfigProvider);
                //# sourceMappingURL=ConfigProvider.js.map

                /***/
            }),

        /***/
        "lFW8":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Z": () => ( /* binding */ Provider_RootProvider)
                });

                // EXTERNAL MODULE: external "tslib"
                var external_tslib_ = __webpack_require__("wIZF");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+easy-hooks@0.7.8_react@18.2.0/node_modules/@web-studio/easy-hooks/dist/esm/common.js + 3 modules
                var common = __webpack_require__("Ax5L");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-core@1.0.22_@binance+bmp-components@1.0.49_react-dom@16.14.0_react@18.2.0/node_modules/@web-studio/universal-core/dist/esm/Context/Theme.js

                /* harmony default export */
                const Theme = ((0, external_React_.createContext)({
                    colors: {},
                    mode: "light"
                }));
                //# sourceMappingURL=Theme.js.map
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/common.js
                var esm_common = __webpack_require__("wD+x");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/extend.js
                var isFunc = function(obj) {
                    return typeof obj === 'function';
                };
                var isObject = function(obj) {
                    return obj && typeof obj === 'object';
                };

                function tryDecode(str) {
                    try {
                        return decodeURIComponent(str);
                    } catch (_a) {
                        return str;
                    }
                }
                var valueFn = function(value) {
                    return function() {
                        return value;
                    };
                };
                var extend_NO_OP = valueFn();
                var serialize = function(obj, split) {
                    return Object.keys(obj)
                        .map(function(k) {
                            return (obj[k] ? "".concat(k, "=").concat(encodeURIComponent(obj[k])) : '');
                        })
                        .filter(Boolean)
                        .join(split || '&');
                };
                var extend_deserialize = function(str, split) {
                    var query = {};
                    str.split(split || '&').forEach(function(equation) {
                        var pairTrim = (equation || '').trim();
                        var eqIndex = pairTrim.indexOf('=');
                        if (eqIndex > 0) {
                            var key = pairTrim.slice(0, eqIndex).trim();
                            var value = pairTrim.slice(eqIndex + 1).trim();
                            if (value !== undefined) {
                                query[tryDecode(key)] = tryDecode(value);
                            }
                        }
                    });
                    return query;
                };
                var equals = function(a, b) {
                    var aType = isObject(a);
                    var bType = isObject(b);
                    if (aType && aType === bType) {
                        var aKey = Object.keys(a);
                        var bKey = Object.keys(b);
                        if (aKey.length === bKey.length) {
                            return aKey.every(function(key) {
                                return equals(a[key], b[key]);
                            });
                        }
                    } else if (isFunc(a) && isFunc(b))
                        return true;
                    return a === b;
                };
                //# sourceMappingURL=extend.js.map
                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+utils@0.7.4/node_modules/@web-studio/utils/dist/esm/dom.js



                function getParam() {
                    var query = deserialize(window.location.search.slice(1));
                    if (window.location.hash) {
                        var index = window.location.hash.indexOf('?');
                        if (index > -1) {
                            var hashStr = window.location.hash.slice(index + 1);
                            return __assign(__assign({}, query), deserialize(hashStr));
                        }
                    }
                    return query;
                }
                var deviceDetection = function() {
                    var ua = (isServer || isMiniApp ? {
                        userAgent: ''
                    } : window.navigator).userAgent;
                    return /android/i.test(ua) ?
                        'android' :
                        /ipad|iphone|ipod/i.test(ua) ?
                        'ios' :
                        '';
                };
                var isInViewport = function(node, offset, x) {
                    if (offset === void 0) {
                        offset = 0;
                    }
                    if (x === void 0) {
                        x = true;
                    }
                    if (isServer || isMiniApp)
                        return false;
                    var _a = node.getBoundingClientRect(),
                        top = _a.top,
                        right = _a.right,
                        bottom = _a.bottom,
                        left = _a.left,
                        width = _a.width,
                        height = _a.height;
                    var _b = document.documentElement,
                        clientWidth = _b.clientWidth,
                        clientHeight = _b.clientHeight;
                    return (bottom >= -offset &&
                        (width > 0 || height > 0) &&
                        top < clientHeight + offset &&
                        (!x || (right >= -offset && left < clientWidth + offset)));
                };
                var toggleStyles = function(element, styles, isAdd) {
                    var styleStr = element.getAttribute('style') || '';
                    var oldStyles = styleStr.replace(/\s/g, '').split(';');
                    var map = oldStyles.reduce(function(previous, styleStr) {
                        var _a, _b;
                        var _c = styleStr.split(':'),
                            key = _c[0],
                            value = _c[1];
                        if (isAdd)
                            return (0, external_tslib_.__assign)((_a = {}, _a[key] = value, _a), previous);
                        return key in styles ? previous : (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, previous), (_b = {}, _b[key] = value, _b));
                    }, isAdd ? styles : {});
                    var newStyles = Object.keys(map).reduce(function(previous, key) {
                        var newStyle = key ? [key, map[key]].join(':') : '';
                        return newStyle ? (0, external_tslib_.__spreadArray)((0, external_tslib_.__spreadArray)([], previous, true), [newStyle], false) : previous;
                    }, []);
                    element.setAttribute('style', newStyles.join(';'));
                };
                var featureSupport = function(property, value, noPrefixes) {
                    if (noPrefixes === void 0) {
                        noPrefixes = false;
                    }
                    if (isServer || isMiniApp)
                        return false;
                    var prop = "".concat(property, ":");
                    var el = document.createElement('test');
                    var mStyle = el.style;
                    if (!noPrefixes) {
                        var prefixes = ['-webkit-', ''].join("".concat(value, ";").concat(prop));
                        mStyle.cssText = "".concat(prop).concat(prefixes).concat(value, ";");
                    } else {
                        mStyle.cssText = "".concat(prop).concat(value);
                    }
                    return mStyle[property].indexOf(value) !== -1;
                };

                function passiveSupport() {
                    var supported = false;
                    try {
                        var opts = Object.defineProperty({}, 'passive', {
                            get: function() {
                                supported = true;
                                return supported;
                            }
                        });
                        document.addEventListener('test', NO_OP, opts);
                        document.removeEventListener('test', NO_OP, opts);
                    } catch (e) {}
                    return supported;
                }

                function loadScript(src, attrs) {
                    return isServer || isMiniApp ?
                        Promise.resolve() :
                        new Promise(function(resolve, reject) {
                            var scripts = document.body.querySelectorAll('script[src]');
                            if ([].slice.call(scripts).some(function(item) {
                                    return item.src === src;
                                }))
                                resolve();
                            else {
                                var script_1 = document.createElement('script');
                                Object.keys(attrs).forEach(function(key) {
                                    return script_1.setAttribute(key, attrs[key]);
                                });
                                script_1.src = src;
                                script_1.addEventListener('load', function() {
                                    return resolve();
                                });
                                script_1.addEventListener('error', function() {
                                    return reject();
                                });
                                document.body.appendChild(script_1);
                            }
                        });
                }
                var copyToClipboard = function(text) {
                    var textarea = null;
                    try {
                        textarea = document.createElement('textarea');
                        textarea.textContent = text;
                        textarea.style.position = 'fixed';
                        document.body.appendChild(textarea);
                        textarea.select();
                        return document.execCommand('copy');
                    } catch (ex) {
                        console.warn('Copy to clipboard failed.', ex);
                        return false;
                    } finally {
                        if (textarea)
                            document.body.removeChild(textarea);
                    }
                };

                function easeOut(time, start, offset, duration) {
                    var t1 = time / duration - 1;
                    return Math.round(offset * (Math.pow(t1, 3) + 1) + start);
                }
                var infoArr = ( /* unused pure expression or super */ null && ([]));

                function scrollBy(contain, offsetX, offsetY, milliseconds, cb) {
                    if (cb === void 0) {
                        cb = NO_OP;
                    }
                    var info = infoArr.find(function(item) {
                        return item.el === contain;
                    });
                    if (!info) {
                        info = {
                            el: contain
                        };
                        infoArr.push(info);
                    }
                    var t = 1;
                    var isWindow = contain === window;
                    var d = Math.ceil((milliseconds / 1000) * 60);
                    var originX = isWindow ? window.scrollX : contain.scrollLeft;
                    var originY = isWindow ? window.scrollY : contain.scrollTop;
                    if (info.handler) {
                        cancelAnimationFrame(info.handler);
                        delete info.handler;
                    }
                    var doneCb = function() {
                        info.el = null;
                        if (typeof cb === 'function')
                            cb();
                    };
                    var step = function() {
                        var isLast = t >= d;
                        var toX = isLast ? originX + offsetX : easeOut(t, originX, offsetX, d);
                        var toY = isLast ? originY + offsetY : easeOut(t, originY, offsetY, d);
                        if (!isLast)
                            t += 1;
                        if (isWindow)
                            window.scrollTo(toX, toY);
                        else {
                            contain.scrollLeft = toX;
                            contain.scrollTop = toY;
                        }
                        info.handler = requestAnimationFrame(isLast ? doneCb : step);
                    };
                    step();
                }
                //# sourceMappingURL=dom.js.map
                // EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
                var classnames = __webpack_require__("w7fa");
                var classnames_default = /*#__PURE__*/ __webpack_require__.n(classnames);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Box/index.js
                var Box = __webpack_require__("INPG");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/styles/colors/index.js
                var styles_colors = __webpack_require__("Pg4z");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/ConfigProvider.js + 2 modules
                var ConfigProvider = __webpack_require__("MFlc");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/ThemeProvider.js









                var useThemeContext = function() {
                    return useContext(ThemeContext);
                };
                var colorModeKeys = {
                    fresh: '',
                    traditional: 'traditional'
                };
                var ThemeProvider = function(props) {
                    var _a;
                    var scope = props.scope,
                        isCVD = props.isCVD,
                        isReverse = props.isReverse,
                        themeColors = props.themeColors,
                        _b = props.colorMode,
                        colorMode = _b === void 0 ? 'fresh' : _b,
                        _c = props.mode,
                        mode = _c === void 0 ? 'light' : _c,
                        _d = props.themeExtraColors,
                        themeExtraColors = _d === void 0 ? {} : _d;
                    var isMobile = (0, ConfigProvider /* useConfigContext */ .q)().isMobile;
                    var onlyAdditionalColorInline = ((_a = esm_common /* GLOBAL_OBJ._buu */ .n2._buu) === null || _a === void 0 ? void 0 : _a.onlyAdditionalColorInline) === true;
                    var _e = (0, external_React_.useMemo)(function() {
                            var colorKey = isCVD ? 'cvd' : colorModeKeys[colorMode] || '';
                            var keys = [colorKey, isReverse ? 'reverse' : ''].filter(Boolean);
                            var extraColors = themeExtraColors[keys.join('-')] || {};
                            if (isMobile) {
                                if (themeColors === null || themeColors === void 0 ? void 0 : themeColors.mobile) {
                                    extraColors = (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, extraColors), themeColors.mobile);
                                }
                                if (extraColors === null || extraColors === void 0 ? void 0 : extraColors.mobile) {
                                    extraColors = (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, extraColors), extraColors.mobile);
                                }
                            }
                            var colors = (0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, themeColors), extraColors);
                            delete colors.mobile;
                            var styles = {};
                            if (onlyAdditionalColorInline) {
                                var baseThemeColors = styles_colors /* light */ .R;
                                for (var _i = 0, _a = Object.entries(colors); _i < _a.length; _i++) {
                                    var _b = _a[_i],
                                        key = _b[0],
                                        value = _b[1];
                                    if (!baseThemeColors.hasOwnProperty(key)) {
                                        styles["--color-".concat(key)] = value;
                                    }
                                }
                            } else {
                                styles = Object.keys(colors).reduce(function(previous, curr) {
                                    var _a;
                                    return ((0, external_tslib_.__assign)((0, external_tslib_.__assign)({}, previous), (_a = {}, _a["--color-".concat(curr)] = colors[curr], _a)));
                                }, {});
                            }
                            var cssClasses = [colorKey, isReverse ? 'reverse' : ''].filter(Boolean);
                            return {
                                colors: colors,
                                styles: styles,
                                cssClasses: cssClasses
                            };
                        }, [
                            isCVD,
                            isReverse,
                            themeColors,
                            themeExtraColors,
                            isMobile,
                            colorMode,
                            onlyAdditionalColorInline
                        ]),
                        colors = _e.colors,
                        styles = _e.styles,
                        cssClasses = _e.cssClasses;
                    var clazz = classnames_default()('theme-root', mode, onlyAdditionalColorInline ? cssClasses : [], props.className);
                    (0, common /* useIsomorphicEffect */ .YB)(function() {
                        var _a;
                        if (esm_common /* isMiniApp */ .Op || scope || !document.body)
                            return extend_NO_OP;
                        toggleStyles(document.body, styles, true);
                        (_a = document.body.classList).add.apply(_a, clazz.split(' '));
                        return function() {
                            var _a;
                            if (document === null || document === void 0 ? void 0 : document.body) {
                                toggleStyles(document.body, styles, false);
                                (_a = document.body.classList).remove.apply(_a, clazz.split(' '));
                            }
                        };
                    }, [clazz, scope, styles]);
                    return (external_React_default().createElement(Theme.Provider, {
                        value: {
                            isCVD: isCVD,
                            isReverse: isReverse,
                            mode: mode,
                            colors: colors
                        }
                    }, esm_common /* isMiniApp */ .Op || scope ? (external_React_default().createElement(Box /* default */ .ZP, {
                        className: clazz,
                        style: styles,
                        children: props.children
                    })) : (props.children)));
                };
                /* harmony default export */
                const Provider_ThemeProvider = (ThemeProvider);
                //# sourceMappingURL=ThemeProvider.js.map
                // EXTERNAL MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/SSRDataProvider.js + 1 modules
                var SSRDataProvider = __webpack_require__("D/Ic");; // CONCATENATED MODULE: ./node_modules/.pnpm/@web-studio+universal-uikit@1.2.124_@binance+bmp-components@1.0.49_@types+react@18.0.28_momen_x5b5tzepjsskggix2cqmzntx5q/node_modules/@web-studio/universal-uikit/dist/esm/Provider/RootProvider.js





                var RootProvider = function(props) {
                    var pathPrefix = props.pathPrefix,
                        isRegionMode = props.isRegionMode,
                        level2Domain = props.level2Domain,
                        lang = props.lang,
                        prefixCls = props.prefixCls,
                        isRTL = props.isRTL,
                        iconConfig = props.iconConfig,
                        children = props.children,
                        isElectron = props.isElectron,
                        themeProps = (0, external_tslib_.__rest)(props, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron"]);
                    var configProviderProps = {
                        prefixCls: prefixCls,
                        isRTL: isRTL,
                        iconConfig: iconConfig,
                        isElectron: isElectron
                    };
                    var ssrDataProviderProps = {
                        pathPrefix: pathPrefix,
                        isRegionMode: isRegionMode,
                        level2Domain: level2Domain,
                        lang: lang
                    };
                    var ssrDataProvided = Object.values(ssrDataProviderProps).some(function(value) {
                        return typeof value !== 'undefined';
                    });
                    var content = (external_React_default().createElement(ConfigProvider /* default */ .Z, (0, external_tslib_.__assign)({}, configProviderProps),
                        external_React_default().createElement(Provider_ThemeProvider, (0, external_tslib_.__assign)({}, themeProps), children)));
                    return ssrDataProvided ? (external_React_default().createElement(SSRDataProvider /* default */ .Z, (0, external_tslib_.__assign)({}, ssrDataProviderProps), content)) : (content);
                };
                /* harmony default export */
                const Provider_RootProvider = (RootProvider);
                //# sourceMappingURL=RootProvider.js.map

                /***/
            }),

        /***/
        "wD+x":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Op": () => ( /* binding */ isMiniApp),
                    /* harmony export */
                    "n2": () => ( /* binding */ GLOBAL_OBJ)
                    /* harmony export */
                });
                /* unused harmony exports isFunc, notNull, getDevice, isServer, IS_ELECTRON */
                var isFunc = function(value) {
                    return typeof value === 'function';
                };
                var notNull = function(value) {
                    return value !== undefined && value !== null;
                };
                var getDevice = function() {
                    try {
                        return isFunc(bn.getSystemInfoSync) ? 'mini-app' : 'webview';
                    } catch (_a) {
                        if (true && window.__RUN_BY_ELECTRON__)
                            return 'electron';
                    }
                    return 'browser';
                };
                var isServer = "object" === 'undefined';
                var isMiniApp = !isServer && getDevice() === 'mini-app';
                var IS_ELECTRON = !isServer && getDevice() === 'electron';

                function isGlobalObj(obj) {
                    return obj && obj.Math == Math ? obj : undefined;
                }
                var GLOBAL_OBJ = (typeof globalThis == 'object' && isGlobalObj(globalThis)) ||
                    (true && isGlobalObj(window)) ||
                    (typeof self == 'object' && isGlobalObj(self)) ||
                    (typeof __webpack_require__.g == 'object' && isGlobalObj(__webpack_require__.g)) ||
                    (function() {
                        return this;
                    })() || {};

                /***/
            }),

        /***/
        "Cm/j":
            /***/
            ((__unused_webpack_module, exports) => {

                "use strict";
                var __webpack_unused_export__;
                /*
                Copyright (c) 2014, Yahoo! Inc. All rights reserved.
                Copyrights licensed under the New BSD License.
                See the accompanying LICENSE file for terms.
                */



                exports.E = matchQuery;
                __webpack_unused_export__ = parseQuery;

                // -----------------------------------------------------------------------------

                var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                    RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                    RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
                    RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

                function matchQuery(mediaQuery, values) {
                    return parseQuery(mediaQuery).some(function(query) {
                        var inverse = query.inverse;

                        // Either the parsed or specified `type` is "all", or the types must be
                        // equal for a match.
                        var typeMatch = query.type === 'all' || values.type === query.type;

                        // Quit early when `type` doesn't match, but take "not" into account.
                        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
                            return false;
                        }

                        var expressionsMatch = query.expressions.every(function(expression) {
                            var feature = expression.feature,
                                modifier = expression.modifier,
                                expValue = expression.value,
                                value = values[feature];

                            // Missing or falsy values don't match.
                            if (!value) {
                                return false;
                            }

                            switch (feature) {
                                case 'orientation':
                                case 'scan':
                                    return value.toLowerCase() === expValue.toLowerCase();

                                case 'width':
                                case 'height':
                                case 'device-width':
                                case 'device-height':
                                    expValue = toPx(expValue);
                                    value = toPx(value);
                                    break;

                                case 'resolution':
                                    expValue = toDpi(expValue);
                                    value = toDpi(value);
                                    break;

                                case 'aspect-ratio':
                                case 'device-aspect-ratio':
                                case /* Deprecated */ 'device-pixel-ratio':
                                    expValue = toDecimal(expValue);
                                    value = toDecimal(value);
                                    break;

                                case 'grid':
                                case 'color':
                                case 'color-index':
                                case 'monochrome':
                                    expValue = parseInt(expValue, 10) || 1;
                                    value = parseInt(value, 10) || 0;
                                    break;
                            }

                            switch (modifier) {
                                case 'min':
                                    return value >= expValue;
                                case 'max':
                                    return value <= expValue;
                                default:
                                    return value === expValue;
                            }
                        });

                        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
                    });
                }

                function parseQuery(mediaQuery) {
                    return mediaQuery.split(',').map(function(query) {
                        query = query.trim();

                        var captures = query.match(RE_MEDIA_QUERY),
                            modifier = captures[1],
                            type = captures[2],
                            expressions = captures[3] || '',
                            parsed = {};

                        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
                        parsed.type = type ? type.toLowerCase() : 'all';

                        // Split expressions into a list.
                        expressions = expressions.match(/\([^\)]+\)/g) || [];

                        parsed.expressions = expressions.map(function(expression) {
                            var captures = expression.match(RE_MQ_EXPRESSION),
                                feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);

                            return {
                                modifier: feature[1],
                                feature: feature[2],
                                value: captures[2]
                            };
                        });

                        return parsed;
                    });
                }

                // -- Utilities ----------------------------------------------------------------

                function toDecimal(ratio) {
                    var decimal = Number(ratio),
                        numbers;

                    if (!decimal) {
                        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
                        decimal = numbers[1] / numbers[2];
                    }

                    return decimal;
                }

                function toDpi(resolution) {
                    var value = parseFloat(resolution),
                        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

                    switch (units) {
                        case 'dpcm':
                            return value / 2.54;
                        case 'dppx':
                            return value * 96;
                        default:
                            return value;
                    }
                }

                function toPx(length) {
                    var value = parseFloat(length),
                        units = String(length).match(RE_LENGTH_UNIT)[1];

                    switch (units) {
                        case 'em':
                            return value * 16;
                        case 'rem':
                            return value * 16;
                        case 'cm':
                            return value * 96 / 2.54;
                        case 'mm':
                            return value * 96 / 2.54 / 10;
                        case 'in':
                            return value * 96;
                        case 'pt':
                            return value * 72;
                        case 'pc':
                            return value * 72 / 12;
                        default:
                            return value;
                    }
                }


                /***/
            }),

        /***/
        "XJYc":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                "use strict";


                var staticMatch = (__webpack_require__("Cm/j") /* .match */ .E);
                var dynamicMatch = true ? window.matchMedia : 0;

                // our fake MediaQueryList
                function Mql(query, values, forceStatic) {
                    var self = this;
                    var mql;

                    // matchMedia will return null in FF when it's called in a hidden iframe
                    // ref: https://stackoverflow.com/a/12330568
                    if (dynamicMatch && !forceStatic) mql = dynamicMatch.call(window, query);

                    if (mql) {
                        this.matches = mql.matches;
                        this.media = mql.media;
                        // TODO: is there a time it makes sense to remove this listener?
                        mql.addListener(update);
                    } else {
                        this.matches = staticMatch(query, values);
                        this.media = query;
                    }

                    this.addListener = addListener;
                    this.removeListener = removeListener;
                    this.dispose = dispose;

                    function addListener(listener) {
                        if (mql) {
                            mql.addListener(listener);
                        }
                    }

                    function removeListener(listener) {
                        if (mql) {
                            mql.removeListener(listener);
                        }
                    }

                    // update ourselves!
                    function update(evt) {
                        self.matches = evt.matches;
                        self.media = evt.media;
                    }

                    function dispose() {
                        if (mql) {
                            mql.removeListener(update);
                        }
                    }
                }

                function matchMedia(query, values, forceStatic) {
                    return new Mql(query, values, forceStatic);
                }

                module.exports = matchMedia;


                /***/
            }),

        /***/
        "w7fa":
            /***/
            ((module, exports) => {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                /* global define */

                (function() {
                    'use strict';

                    var hasOwn = {}.hasOwnProperty;

                    function classNames() {
                        var classes = '';

                        for (var i = 0; i < arguments.length; i++) {
                            var arg = arguments[i];
                            if (arg) {
                                classes = appendClass(classes, parseValue(arg));
                            }
                        }

                        return classes;
                    }

                    function parseValue(arg) {
                        if (typeof arg === 'string' || typeof arg === 'number') {
                            return arg;
                        }

                        if (typeof arg !== 'object') {
                            return '';
                        }

                        if (Array.isArray(arg)) {
                            return classNames.apply(null, arg);
                        }

                        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                            return arg.toString();
                        }

                        var classes = '';

                        for (var key in arg) {
                            if (hasOwn.call(arg, key) && arg[key]) {
                                classes = appendClass(classes, key);
                            }
                        }

                        return classes;
                    }

                    function appendClass(value, newClass) {
                        if (!newClass) {
                            return value;
                        }

                        if (value) {
                            return value + ' ' + newClass;
                        }

                        return value + newClass;
                    }

                    if (true && module.exports) {
                        classNames.default = classNames;
                        module.exports = classNames;
                    } else if (true) {
                        // register as 'classnames', consistent with npm package name
                        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                                return classNames;
                            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else {}
                }());


                /***/
            })

    }
]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "32476cfc-9eab-5fc9-bb18-159e156e0150")
    } catch (e) {}
}();
//# sourceMappingURL=common.js.map
//# debugId=32476cfc-9eab-5fc9-bb18-159e156e0150