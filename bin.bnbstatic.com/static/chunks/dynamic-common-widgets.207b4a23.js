"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4de9e41f-b3ee-50ed-bb28-c24e47556537")
    } catch (e) {}
}();

(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [896], {

        /***/
        "DLl1":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "GlobalJSLoaderContent": () => ( /* reexport */ components_GlobalJSLoaderContent)
                });

                // UNUSED EXPORTS: DATA_SCRIPT_ID, InsertTopPortal, LegacyLayout, MODULE_SCRIPT_ID, MetaTags, ShuviPluginCommonWidgets, ShuviPluginCommonWidgetsSpa, WithCommonWidgetSSR, appInitialProps, applyCommonWidgets, dataSDK, defaultGetHeaders, externals, footerScriptsAppend, getConstants, getLatestResourceSDK, getScriptResources, getStyleTarget, getlibScripts, setConstants

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_spread.mjs
                var _object_spread = __webpack_require__("ys0/");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_without_properties.mjs + 1 modules
                var _object_without_properties = __webpack_require__("Cmqe");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_);
                // EXTERNAL MODULE: external "httpSDK"
                var external_httpSDK_ = __webpack_require__("VA12");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+com-widget@0.0.16_@binance+bmp-components@1.0.49_@binance+julia-utils@0.0.13_@binanc_reqv4ykhokrkspvtvsogac6jye/node_modules/@binance/com-widget/dist/esm/utils/loadScript.js
                function loadScript(src, attrs) {
                    if (false) {}
                    return new Promise(function(resolve, reject) {
                        var scripts = document.body.querySelectorAll("script[src]");
                        // @ts-ignore
                        if ([].slice.call(scripts).some(function(item) {
                                return item.src === src;
                            })) resolve();
                        else {
                            var script = document.createElement("script");
                            // prevent OneTrust block js
                            script.setAttribute("data-ot-ignore", "true");
                            script.setAttribute("class", "optanon-category-C0001");
                            Object.keys(attrs).forEach(function(key) {
                                return script.setAttribute(key, attrs[key]);
                            });
                            script.src = src;
                            // @ts-ignore
                            script.addEventListener("load", function() {
                                return resolve();
                            });
                            script.addEventListener("error", function() {
                                return reject();
                            });
                            document.body.appendChild(script);
                        }
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+com-widget@0.0.16_@binance+bmp-components@1.0.49_@binance+julia-utils@0.0.13_@binanc_reqv4ykhokrkspvtvsogac6jye/node_modules/@binance/com-widget/dist/esm/components/Script.js


                var noop = function() {};
                var Script = function(props) {
                    (0, external_React_.useEffect)(function() {
                        loadScript(props.url, {
                            async: true
                        }).then(props.onLoad || noop).catch(props.onError || noop);
                        // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once
                    }, []);
                    return null;
                };
                /* harmony default export */
                const components_Script = ( /*#__PURE__*/ (0, external_React_.memo)(Script));

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+com-widget@0.0.16_@binance+bmp-components@1.0.49_@binance+julia-utils@0.0.13_@binanc_reqv4ykhokrkspvtvsogac6jye/node_modules/@binance/com-widget/dist/esm/GlobalJSLoader/GlobalJSLoaderBase.js



                var GlobalJSLoaderBase = function(param) {
                    var disclaimerConfig = param.disclaimerConfig,
                        staticUrl = param.staticUrl,
                        locale = param.locale,
                        isClient = param.isClient,
                        userInfo = param.userInfo,
                        isLoggedIn = param.isLoggedIn,
                        isLoading = param.isLoading,
                        region = param.region,
                        ipDivision = param.ipDivision,
                        getI18n = param.getI18n,
                        _loadI18n = param.loadI18n,
                        loadI18n = _loadI18n === void 0 ? function() {
                            return Promise.resolve();
                        } : _loadI18n,
                        replaceUrl = param.replaceUrl,
                        isHandleLoggedInUser = param.isHandleLoggedInUser,
                        initialFrom = param.initialFrom;
                    (0, external_React_.useEffect)(function() {
                        if (isClient) {
                            // @ts-ignore
                            window.bnvelidate = {
                                isLoading: isLoading,
                                isLoggedIn: isLoggedIn,
                                region: region,
                                locale: locale,
                                ipDivision: ipDivision,
                                disclaimerConfig: disclaimerConfig,
                                getBNHTTP: external_httpSDK_.get,
                                postBNHTTP: external_httpSDK_.post,
                                getHeaderI18n: getI18n,
                                loadHeaderI18n: loadI18n,
                                replaceUrl: replaceUrl,
                                initialFrom: initialFrom,
                                bnuserinfo: isLoggedIn && isHandleLoggedInUser ? JSON.stringify(userInfo) : undefined
                            };
                        }
                    }, [
                        userInfo,
                        getI18n,
                        loadI18n,
                        isClient,
                        isLoggedIn,
                        region,
                        isLoading,
                        locale,
                        ipDivision,
                        disclaimerConfig,
                        replaceUrl,
                        initialFrom,
                    ]);
                    return /*#__PURE__*/ external_React_default().createElement((external_React_default()).Fragment, null, isHandleLoggedInUser && !isLoading && isLoggedIn && isClient ? /*#__PURE__*/ external_React_default().createElement(components_Script, {
                        url: "".concat(staticUrl, "/static/configs/global/index.js")
                    }) : null, !isLoading && isClient && region ? /*#__PURE__*/ external_React_default().createElement(components_Script, {
                        url: "".concat(staticUrl, "/static/configs/global/common.js")
                    }) : null);
                };
                /* harmony default export */
                const GlobalJSLoader_GlobalJSLoaderBase = ( /*#__PURE__*/ (0, external_React_.memo)(GlobalJSLoaderBase));

                // EXTERNAL MODULE: ./node_modules/.pnpm/@binance+utils@2.13.192_@types+react@18.0.28_react@18.2.0/node_modules/@binance/utils/dist/esm/ssr.js
                var ssr = __webpack_require__("VphZ");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/utils/dataSDK.js
                // @ts-expect-error -- TODO: add global type from @binance/common-widget to fix the type any
                var dataSDK = true && (window === null || window === void 0 ? void 0 : window.dataUMD) || {
                    useBusinessKeys: function() {
                        return {
                            value: null,
                            loading: false
                        };
                    },
                    useRegion: function() {
                        return {
                            value: null
                        };
                    },
                    useUserLoginStatus: function() {
                        return {
                            value: null,
                            loading: false
                        };
                    },
                    useTheme: function() {
                        return {
                            setTheme: function() {},
                            theme: ""
                        };
                    },
                    useCommonEnv: function() {
                        return {
                            envs: {},
                            setEnvs: function() {}
                        };
                    },
                    useCurrency: function() {
                        return {
                            currency: null,
                            currencyMap: null,
                            currencyList: {
                                value: null,
                                loading: false
                            }
                        };
                    },
                    useLanguage: function() {
                        return {
                            language: "",
                            setLanguage: function() {},
                            languageList: {
                                value: null,
                                loading: false,
                                error: null,
                                refresh: function() {}
                            }
                        };
                    },
                    useNavI18n: function() {
                        return {
                            i18n: {},
                            setI18n: function() {},
                            getI18nTxt: function(key) {
                                return key;
                            }
                        };
                    },
                    useUserBaseDetail: function() {
                        return {
                            error: null,
                            loading: false,
                            value: {},
                            refresh: function() {}
                        };
                    }
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/components/GlobalJSLoaderContent/utils/mapLanguage.js
                /**
                 * Get the new language code according to the mapping.
                 *
                 * @param code The language code to be mapped.
                 * @param mapping The language code mapping, format sample: es-LA(es),es-MX(es),en-KZ(en).
                 * @returns Returns the new language code on success, returns the original language code on failure.
                 */
                function mapLanguage(code, mapping) {
                    if (mapping) {
                        var regexp = /^([\w-]+)\(([\w-]+)\)$/;
                        var newCode = code;
                        var changed = mapping.split(",").some(function(item) {
                            var match = regexp.exec(item);
                            if (match && match[1] && match[2] && code === match[1]) {
                                newCode = match[2];
                                return true;
                            }
                            return false;
                        });
                        if (changed) {
                            return {
                                success: true,
                                code: newCode
                            };
                        }
                    }
                    return {
                        success: false,
                        code: code
                    };
                }
                /* harmony default export */
                const utils_mapLanguage = (mapLanguage);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/components/GlobalJSLoaderContent/utils/replaceUrl.js
                var replaceUrlOriginal = function(url) {
                    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    return Object.keys(params).reduce(function(pre, key) {
                        return pre.replace("%".concat(key, "%"), params[key]);
                    }, url || "");
                };
                var replaceUrl = function(url, params) {
                    var origin = params === null || params === void 0 ? void 0 : params.origin;
                    var processedUrl = replaceUrlOriginal(url, params);
                    return (origin === null || origin === void 0 ? void 0 : origin.includes("localhost")) ? processedUrl.replace("https://www.", origin) : processedUrl;
                };
                /* harmony default export */
                const utils_replaceUrl = (replaceUrl);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/components/GlobalJSLoaderContent/index.js







                var GlobalJSLoaderContent = function(param) {
                    var disclaimerConfig = param.disclaimerConfig;
                    var ref4 = dataSDK.useUserLoginStatus(),
                        isLoggedIn = ref4.value,
                        isLoginLoading = ref4.loading;
                    var ref1 = dataSDK.useUserBaseDetail(),
                        userInfo = ref1.value;
                    // const { userInfo, userLoginStatus, region, ipDivision } = useDeferUserData()
                    var ref2 = dataSDK.useLanguage(),
                        locale = ref2.language;
                    var ref3 = dataSDK.useNavI18n(),
                        getI18n = ref3.getI18nTxt;
                    var value = dataSDK.useRegion().value;
                    // const { isLoggedIn, isLoading } = userLoginStatus || {}
                    var envs = dataSDK.useCommonEnv().envs;
                    // const getI18n = useCallback(key => getLabel(key, i18n), [i18n])
                    var replaceUrlFn = (0, external_React_.useCallback)(function(url, params) {
                        var domainList = (true ? window.location.origin : 0).split(".");
                        var suffixOrigin = domainList.slice(1).join(".");
                        var _ref = params !== null && params !== void 0 ? params : {},
                            _langMapping = _ref.langMapping,
                            langMapping = _langMapping === void 0 ? "" : _langMapping,
                            restParams = (0, _object_without_properties /* default */ .Z)(_ref, [
                                "langMapping"
                            ]);
                        var ref = utils_mapLanguage(locale, langMapping),
                            success = ref.success,
                            code = ref.code;
                        return success ? utils_replaceUrl(url, (0, _object_spread /* default */ .Z)({
                            origin: origin,
                            suffixOrigin: suffixOrigin,
                            locale: code
                        }, restParams)) : utils_replaceUrl(url, (0, _object_spread /* default */ .Z)({
                            origin: origin,
                            suffixOrigin: suffixOrigin,
                            locale: locale
                        }, restParams));
                    }, [
                        locale
                    ]);
                    if ((envs === null || envs === void 0 ? void 0 : envs.STATIC_HOST) && locale && ssr /* isClient */ .C) {
                        return /*#__PURE__*/ external_React_default().createElement(GlobalJSLoader_GlobalJSLoaderBase, {
                            disclaimerConfig: disclaimerConfig || {},
                            staticUrl: envs === null || envs === void 0 ? void 0 : envs.STATIC_HOST,
                            locale: locale,
                            isClient: ssr /* isClient */ .C,
                            userInfo: userInfo || undefined,
                            isLoggedIn: isLoggedIn,
                            isLoading: isLoginLoading,
                            region: value === null || value === void 0 ? void 0 : value.country,
                            ipDivision: value === null || value === void 0 ? void 0 : value.subDivision,
                            getI18n: getI18n,
                            replaceUrl: replaceUrlFn,
                            initialFrom: "header",
                            isHandleLoggedInUser: true
                        });
                    }
                    return null;
                };
                /* harmony default export */
                const components_GlobalJSLoaderContent = ( /*#__PURE__*/ external_React_default().memo(GlobalJSLoaderContent));

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/components/index.js






                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+shuvi-plugin-common-widgets@0.0.17_@binance+bmp-components@1.0.49_@binance+julia-uti_wdgg6k44hf2mn5gbl6724ktooe/node_modules/@binance/shuvi-plugin-common-widgets/dist/esm/index.js










                /***/
            })

    }
]);
//# debugId=4de9e41f-b3ee-50ed-bb28-c24e47556537