! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3751c1d5-d68c-564d-90a1-1ee8804d258b")
    } catch (e) {}
}();
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [148], {

        /***/
        "m9WE":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "BIDSInterceptor": () => ( /* binding */ BIDSInterceptor)
                });

                // UNUSED EXPORTS: IS_NEZHA, MFAInterceptor, MFARequestInterceptor, disableBIDSInterceptor, getMFAToken, hasInitfromPIKA, privateBIDSInterceptor, setBIDSInterceptorPendingResponseTimeout

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_async_to_generator.mjs
                var _async_to_generator = __webpack_require__("ttNT");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_to_consumable_array.mjs + 2 modules
                var _to_consumable_array = __webpack_require__("pE0Y");
                // EXTERNAL MODULE: external "regeneratorRuntime"
                var external_regeneratorRuntime_ = __webpack_require__("Pz56");
                var external_regeneratorRuntime_default = /*#__PURE__*/ __webpack_require__.n(external_regeneratorRuntime_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_class_call_check.mjs
                var _class_call_check = __webpack_require__("XzXg");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_spread.mjs
                var src_object_spread = __webpack_require__("ys0/");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_spread_props.mjs
                var _object_spread_props = __webpack_require__("L2LL");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_without_properties.mjs + 1 modules
                var _object_without_properties = __webpack_require__("Cmqe");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_type_of.mjs
                var _type_of = __webpack_require__("TPzY");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+track@0.1.105_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/track/dist/esm/checkFields.js
                var checkFields = function(otherInfo) {
                    // if biz want to modify df_2, throw a consloe error tips
                    if (location.origin.includes("localhost")) {
                        var df_2 = (otherInfo || {}).df_2;
                        if (typeof df_2 !== "undefined") {
                            console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!");
                        }
                    }
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+track@0.1.105_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/track/dist/esm/trackGroup.js





                var checkRequire = function(info, key1, key2) {
                    // eventName elementID pageName ScreenName
                    var result = typeof info[key1] !== "undefined" ? info[key1] : info[key2];
                    if (typeof result !== "undefined") {
                        info[key1] = result;
                        return;
                    }
                    throw new Error("".concat(key1, " is require"));
                };
                var checkNumberString = function(data) {
                    var typeV = typeof data === "undefined" ? "undefined" : (0, _type_of /* default */ .Z)(data);
                    return typeV === "number" || typeV === "string" || typeV === "boolean";
                };
                var checkExtraInfo = function(info) {
                    if (typeof info === "object") {
                        var values = Object.entries(info);
                        values.forEach(function(item) {
                            if (Array.isArray(item[1])) {
                                var notAllow = item[1].filter(function(subitem) {
                                    return !checkNumberString(subitem);
                                });
                                if (notAllow.length > 0) {
                                    throw new Error("extraInfo key:".concat(item[0], " array data limit string/number/boolean"));
                                }
                            } else if (!checkNumberString(item[1])) {
                                throw new Error("extraInfo key:".concat(item[0], " limited string/number/array/boolean"));
                            }
                        });
                    } else if (typeof info !== "undefined") {
                        throw new Error("extraInfo must be a object");
                    }
                };
                var normalizeOptions = function(options) {
                    if (typeof options === "function") {
                        return {
                            callback: options
                        };
                    }
                    if (typeof options === "object") {
                        return options;
                    }
                    return {};
                };
                var normalizeData = function(eventName, otherInfo, options) {
                    if (typeof eventName === "string") {
                        checkFields(otherInfo);
                        var _ref = otherInfo || {},
                            df_2 = _ref.df_2,
                            restInfo = (0, _object_without_properties /* default */ .Z)(_ref, [
                                "df_2"
                            ]);
                        return {
                            info: (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, restInfo), {
                                eventName: eventName
                            }),
                            opt: options
                        };
                    }
                    if (typeof eventName === "object") {
                        checkFields(eventName);
                        var _ref1 = eventName || {},
                            df_21 = _ref1.df_2,
                            restInfo1 = (0, _object_without_properties /* default */ .Z)(_ref1, [
                                "df_2"
                            ]);
                        return {
                            info: restInfo1,
                            opt: otherInfo
                        };
                    }
                    throw new Error("params is error");
                };
                var trackGroup_trackGroup;
                var setTrackGroup = function(trackGroup) {
                    trackGroup_trackGroup = trackGroup;
                };
                var triggerCustomTrack = function(eventName, otherInfo, options) {
                    var err = null;
                    var ref = normalizeData(eventName, otherInfo, options),
                        _info = ref.info,
                        info = _info === void 0 ? {} : _info,
                        opt = ref.opt;
                    var en = info.eventName,
                        infoo = (0, _object_without_properties /* default */ .Z)(info, [
                            "eventName"
                        ]);
                    try {
                        checkRequire(info, "eventName");
                        checkRequire(info, "elementID", "elementId");
                        checkRequire(info, "pageName", "ScreenName");
                        checkExtraInfo(info === null || info === void 0 ? void 0 : info.extraInfo);
                    } catch (e) {
                        err = e;
                    }
                    var result = trackGroup_trackGroup && trackGroup_trackGroup(en, infoo, normalizeOptions(opt));
                    if (err) {
                        return Promise.reject(err);
                    }
                    return result;
                };
                /* harmony default export */
                const trackGroup = (triggerCustomTrack);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+track@0.1.105_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/track/dist/esm/index.js






                var esm_trackGroup = ( /* unused pure expression or super */ null && (_trackGroup));



                /* harmony default export */
                const esm = (trackGroup);
                /**
                 * This is a composite track, including Binance Track, Sensors Track and GA. Before using it,
                 * you need to make sure it has been initialized, otherwise it will just include Binance Track by default.
                 *
                 * initialize:
                 * ```ts
                 * import { initTrackFunc } from "@binance/track";
                 * initTrackFunc({...})
                 * ```
                 *
                 * @param {TrackEventName} event
                 * @param {TrackProperties} properties
                 * @param {TrackOptions} options
                 * @returns void
                 */
                var track = function(event, properties, options) {
                    try {
                        _trackGroup(event, _object_spread({}, properties), options);
                    } catch (error) {}
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackWebClick = function(properties, options) {
                    return track("webClick", properties, options);
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackPageView = function(properties, options) {
                    return track("pageView", properties, options);
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackPageQuit = function(properties, options) {
                    return track("pageQuit", properties, options);
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackComponentShow = function(properties, options) {
                    return track("ComponentShow", properties, options);
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackElementShow = function(properties, options) {
                    return track("elementShow", properties, options);
                };
                /**
                 * @see {@link track} for more information.
                 */
                var trackScreenView = function(properties, options) {
                    return track("screenView", properties, options);
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/logger/console.js




                function reportToSensor(error) {
                    esm("webClick", {
                        elementID: "error_track",
                        pageName: "common",
                        df_3: error.errorCode,
                        df_4: error.errorMsg,
                        df_5: error.path,
                        df_6: error.reportId || 0,
                        df_7: error.id,
                        df_8: error.log1,
                        df_9: error.log2,
                        df_10: error.extra
                    });
                }
                var reportingData = [];
                /**
                 * report console to monitor
                 */
                var initReportConsole = function() {
                    var logger = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).logger;
                    var reportWithLogger = // creating function declarations for better stacktraces (otherwise they'd be anonymous function expressions)
                        function reportWithLogger() {
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }
                            if (actualTypeLimit.log) reportingData.push(args);
                            return loggerBackup.log.apply(logger.log, args);
                        };
                    var reportWithLoggerError = function reportWithLoggerError() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        if (actualTypeLimit.log) reportingData.push(args);
                        return loggerBackup.error.apply(logger.error, args);
                    };
                    var defaultTypeLimit = {
                        error: true,
                        warn: true,
                        log: true
                    };
                    var actualTypeLimit = defaultTypeLimit;
                    var loggerBackup = logger ? {
                        log: logger.log,
                        error: logger.error
                    } : {};
                    logger.log = reportWithLogger;
                    logger.error = reportWithLoggerError;
                };
                var ignoreErrorMsgs = [
                    "private-e2e-tracker"
                ];

                function getPath() {
                    return true ? window.location.pathname : 0;
                }
                /**
                 * report error to monitor
                 * ignore bidsReportId check
                 */
                var reportBidsError = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(param) {
                        var err, errorMsg, path, e, id, logsToSend, dataSendToSensor, len, log1, log2;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    err = param.err;
                                    errorMsg = (err === null || err === void 0 ? void 0 : err.message) || (err === null || err === void 0 ? void 0 : err.errMsg) || "";
                                    if (!(errorMsg && ignoreErrorMsgs.some(function(ignoreMsg) {
                                            return errorMsg.includes(ignoreMsg);
                                        }))) {
                                        _ctx.next = 4;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 4:
                                    path = getPath() || "";
                                    try {
                                        e = "[".concat(err.code || "NULL", "]").concat(errorMsg);
                                        id = Math.random().toString(36).slice(2, 15);
                                        logsToSend = formatLogs(reportingData);
                                        reportingData.length = 0;
                                        dataSendToSensor = {
                                            errorCode: err.code || "",
                                            errorMsg: e,
                                            path: path,
                                            id: id,
                                            reportId: 53,
                                            log1: "",
                                            log2: "",
                                            extra: ""
                                        };
                                        if (logsToSend) {
                                            len = 2000;
                                            log1 = [];
                                            log2 = [];
                                            // logsToSend is an array of array items
                                            // loop logsToSend and save to log1 and log2, their json string length should be less than 2000,
                                            // if logsToSend is more than 4000, cut it
                                            logsToSend.forEach(function(log) {
                                                var str = JSON.stringify(log);
                                                if ((0, _to_consumable_array /* default */ .Z)(log1).concat([
                                                        str
                                                    ]).join("**").length < len) {
                                                    log1.push(str);
                                                } else if ((0, _to_consumable_array /* default */ .Z)(log2).concat([
                                                        str
                                                    ]).join("**").length < len) {
                                                    log2.push(str);
                                                }
                                            });
                                            dataSendToSensor.log1 = log1.join("**");
                                            dataSendToSensor.log2 = log2.join("**");
                                        }
                                        reportToSensor(dataSendToSensor);
                                    } catch (_error) {}
                                case 6:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function reportBidsError(_) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var skippedLogs = [
                    "The event type must be the following values",
                    "className not found",
                    "skip report",
                    "combine-export",
                    "queryI18nResource",
                    "report_event, name: ",
                ];

                function formatLogs() {
                    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                    try {
                        var dataToSend = (0, _to_consumable_array /* default */ .Z)(Array.from(new Set(data))).filter(function(log) {
                            if (!log) return false;
                            try {
                                var strLog = JSON.stringify(log);
                                // filter out length > 1000
                                if (strLog.length > 1000) return false;
                                // filter out logs that contain skippedLogs
                                var skipReport = skippedLogs.some(function(skipLog) {
                                    return strLog.includes(skipLog);
                                });
                                return !skipReport;
                            } catch (error) {
                                return false;
                            }
                        });
                        dataToSend.reverse();
                        var dataToSendClone = (0, _to_consumable_array /* default */ .Z)(dataToSend);
                        return dataToSendClone;
                    } catch (error) {
                        console.error(error);
                    }
                    return [];
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/logger/index.js



                var Logger = /*#__PURE__*/ function() {
                    "use strict";

                    function Logger() {
                        (0, _class_call_check /* default */ .Z)(this, Logger);
                        this.report = function(error) {
                            if (typeof error === "string") error = new Error(error);
                            try {
                                reportBidsError({
                                    err: error
                                });
                            } catch (error1) {
                                console.error("reportBidsError error", error1);
                            }
                        };
                    }
                    var _proto = Logger.prototype;
                    _proto.log = function log(message) {
                        for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            optionalParams[_key - 1] = arguments[_key];
                        }
                        var _console;
                        var timestamp = new Date().toISOString();
                        (_console = console).log.apply(_console, [
                            "[IDGM][".concat(timestamp, "] ").concat(message)
                        ].concat((0, _to_consumable_array /* default */ .Z)(optionalParams)));
                    };
                    _proto.time = function time(message) {
                        console.time("[IDGM] ".concat(message));
                    };
                    _proto.timeEnd = function timeEnd(message) {
                        console.timeEnd("[IDGM] ".concat(message));
                    };
                    _proto.error = function error(message) {
                        for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            optionalParams[_key - 1] = arguments[_key];
                        }
                        var _console;
                        var timestamp = new Date().toISOString();
                        (_console = console).error.apply(_console, [
                            "ERROR [IDGM] [".concat(timestamp, "]"),
                            message
                        ].concat((0, _to_consumable_array /* default */ .Z)(optionalParams)));
                    };
                    return Logger;
                }();
                var originLogger = new Logger();
                try {
                    initReportConsole({
                        logger: originLogger
                    });
                } catch (error) {
                    console.error("initReportConsole error", error);
                }
                var logger = originLogger;

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/runtimeChecking/index.js
                /**
                 * 轮询等待真实的拦截器加载完成。
                 * @param options - 包含 checkFunction、interval 和 timeout 的对象。
                 * @param options.checkFunction - 检查函数，返回一个布尔值，表示拦截器是否加载完成。
                 * @param options.interval - 轮询间隔时间（毫秒）。
                 * @param options.timeout - 超时时间（毫秒）。
                 * @returns 返回一个 Promise，在拦截器加载完成或超时后 resolve 或 reject。
                 */
                function runtimeChecking(param) {
                    var checkFunction = param.checkFunction,
                        interval = param.interval,
                        timeout = param.timeout;
                    return new Promise(function(resolve, reject) {
                        var startTime = Date.now();
                        var timer = setInterval(function() {
                            if (checkFunction()) {
                                clearInterval(timer);
                                resolve();
                            } else if (Date.now() - startTime >= timeout) {
                                clearInterval(timer);
                                reject(new Error("runtime checking timeout"));
                            }
                        }, interval);
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/getStaticHost.js

                function getStaticHost() {
                    try {
                        if (false) {}
                        var headElements = Array.from(document.head.querySelectorAll("link[href], script[src]"));
                        var domainCounts = headElements.map(function(element) {
                            var url = element.getAttribute("href") || element.getAttribute("src");
                            if (url) {
                                var domain = new URL(url).origin;
                                return domain;
                            }
                            return "";
                        }).reduce(function(counts, domain) {
                            if (domain) counts[domain] = (counts[domain] || 0) + 1;
                            return counts;
                        }, {});
                        var mostFrequentDomain = Object.keys(domainCounts).reduce(function(a, b) {
                            return domainCounts[a] > domainCounts[b] ? a : b;
                        }, "");
                        return mostFrequentDomain;
                    } catch (error) {
                        logger.error("Error in getMostFrequentDomain:", error);
                    }
                    return "https://bin.bnbstatic.com";
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_instanceof.mjs
                var _instanceof = __webpack_require__("jNo/");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/IndexedDBStorage/index.js



                var dbName = "identity-service-installations-database";
                var storeName = "identity-service-installations-store";
                var db = null;
                var inited = false;

                function init() {
                    return _init.apply(this, arguments);
                }

                function _init() {
                    _init = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        if (inited) return resolve();
                                        var request = indexedDB.open(dbName, 1);
                                        request.onupgradeneeded = function(event) {
                                            logger.log("IndexedDBStorage upgrading...");
                                            var db1 = event.target.result;
                                            if (!db1.objectStoreNames.contains(storeName)) {
                                                db1.createObjectStore(storeName, {
                                                    keyPath: "key"
                                                });
                                            }
                                        };
                                        request.onsuccess = function(event) {
                                            // logger.log('IndexedDBStorage initialized')
                                            db = event.target.result;
                                            inited = true;
                                            resolve();
                                        };
                                        request.onerror = function(event) {
                                            var ref;
                                            logger.error("Failed to initialize IndexedDBStorage:", event.target.error);
                                            logger.report(new Error("Failed to initialize IndexedDBStorage ".concat(dbName, ": ").concat((ref = event.target.error) === null || ref === void 0 ? void 0 : ref.message)));
                                            reject(event.target.error);
                                        };
                                    }));
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _init.apply(this, arguments);
                }

                function getItem(key) {
                    return _getItem.apply(this, arguments);
                }

                function _getItem() {
                    _getItem = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(key) {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        if (!db) {
                                            reject("Database is not initialized");
                                            return;
                                        }
                                        var transaction = db.transaction([
                                            storeName
                                        ], "readonly");
                                        var store = transaction.objectStore(storeName);
                                        var request = store.get(key);
                                        request.onsuccess = function(event) {
                                            resolve(event.target.result ? event.target.result.value : null);
                                        };
                                        request.onerror = function(event) {
                                            reject(event.target.error);
                                        };
                                    }));
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _getItem.apply(this, arguments);
                }

                function setItem(key, value) {
                    return _setItem.apply(this, arguments);
                }

                function _setItem() {
                    _setItem = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(key, value) {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        if (!db) {
                                            reject("Database is not initialized");
                                            return;
                                        }
                                        var transaction = db.transaction([
                                            storeName
                                        ], "readwrite");
                                        var store = transaction.objectStore(storeName);
                                        var request = store.put({
                                            key: key,
                                            value: value
                                        });
                                        request.onsuccess = function() {
                                            resolve();
                                        };
                                        request.onerror = function(event) {
                                            reject(event.target.error);
                                        };
                                    }));
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _setItem.apply(this, arguments);
                }

                function removeItem(key) {
                    return _removeItem.apply(this, arguments);
                }

                function _removeItem() {
                    _removeItem = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(key) {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        if (!db) {
                                            reject("Database is not initialized");
                                            return;
                                        }
                                        var transaction = db.transaction([
                                            storeName
                                        ], "readwrite");
                                        var store = transaction.objectStore(storeName);
                                        var request = store.delete(key);
                                        request.onsuccess = function() {
                                            resolve();
                                        };
                                        request.onerror = function(event) {
                                            reject(event.target.error);
                                        };
                                    }));
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _removeItem.apply(this, arguments);
                }

                function clear() {
                    return _clear.apply(this, arguments);
                }

                function _clear() {
                    _clear = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        if (!db) {
                                            reject("Database is not initialized");
                                            return;
                                        }
                                        var transaction = db.transaction([
                                            storeName
                                        ], "readwrite");
                                        var store = transaction.objectStore(storeName);
                                        var request = store.clear();
                                        request.onsuccess = function() {
                                            resolve();
                                        };
                                        request.onerror = function(event) {
                                            reject(event.target.error);
                                        };
                                    }));
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _clear.apply(this, arguments);
                }
                var indexedDBStorage = {
                    init: init,
                    getItem: getItem,
                    setItem: setItem,
                    removeItem: removeItem,
                    clear: clear
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadRemoteGlobalManager/checkScriptInRuntime.js



                var checkScriptInRuntime = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(param) {
                        var variableName, version;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    variableName = param.variableName, version = param.version;
                                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                                        // 如果有明确的变量名，就通过变量名来判断脚本是否加载完成
                                        var retryCount = 0;
                                        var interval = setInterval(function() {
                                            retryCount++;
                                            if (window[variableName]) {
                                                clearInterval(interval);
                                                return resolve(true);
                                            }
                                            if (retryCount === 10) {
                                                logger.error("checkScriptInRuntime time out", {
                                                    version: version,
                                                    variableName: variableName
                                                });
                                                clearInterval(interval);
                                                return reject(false);
                                            }
                                        }, 20);
                                    }));
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function checkScriptInRuntime(_) {
                        return _ref.apply(this, arguments);
                    };
                }();

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadRemoteGlobalManager/initScript.js






                var loadedScripts = new Map();

                function initScript(_) {
                    return _initScript.apply(this, arguments);
                }

                function _initScript() {
                    _initScript = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee1(param) {
                        var src, _variableName, variableName, _cacheStoreKey, cacheStoreKey, _version, version, _extraAttributes, extraAttributes, promise;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx1) {
                            while (1) switch (_ctx1.prev = _ctx1.next) {
                                case 0:
                                    src = param.src, _variableName = param.variableName, variableName = _variableName === void 0 ? "$BIDS" : _variableName, _cacheStoreKey = param.cacheStoreKey, cacheStoreKey = _cacheStoreKey === void 0 ? "" : _cacheStoreKey, _version = param.version, version = _version === void 0 ? "" : _version, _extraAttributes = param.extraAttributes, extraAttributes = _extraAttributes === void 0 ? {} : _extraAttributes;
                                    if (!loadedScripts.has(src)) {
                                        _ctx1.next = 3;
                                        break;
                                    }
                                    return _ctx1.abrupt("return", loadedScripts.get(src));
                                case 3:
                                    promise = new Promise(function() {
                                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(resolve, reject) {
                                            var isLoaded, script;
                                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                                while (1) switch (_ctx.prev = _ctx.next) {
                                                    case 0:
                                                        _ctx.next = 2;
                                                        return initScriptFromStorage({
                                                            cacheStoreKey: cacheStoreKey,
                                                            variableName: variableName
                                                        });
                                                    case 2:
                                                        isLoaded = _ctx.sent;
                                                        if (!isLoaded) {
                                                            _ctx.next = 6;
                                                            break;
                                                        }
                                                        // 如果加载成功,重新加载一个新的脚本并且缓存
                                                        setTimeout(function() {
                                                            return cacheScriptWithStorage({
                                                                src: src,
                                                                cacheStoreKey: cacheStoreKey,
                                                                version: version
                                                            });
                                                        }, 10000);
                                                        return _ctx.abrupt("return", resolve());
                                                    case 6:
                                                        script = document.createElement("script");
                                                        // prevent OneTrust Autoblock js
                                                        script.setAttributeNode(document.createAttribute("data-ot-ignore"));
                                                        script.id = "".concat(variableName, "-").concat(version);
                                                        script.src = src;
                                                        Object.keys(extraAttributes).forEach(function(key) {
                                                            script.setAttribute(key, extraAttributes[key]);
                                                        });
                                                        script.onload = function() {
                                                            var initRetryCount = 0;

                                                            function init() {
                                                                // There may be a time gap between script loaded and script execution
                                                                // 如果加载的版本,是特别旧的版本,就不会有对应的变量
                                                                // 然后timeout时间后,会清除掉这个脚本
                                                                // 并且尝试抛出Timeout,然后进行下一个兜底策略
                                                                setTimeout(function() {
                                                                    if (initRetryCount > 20) {
                                                                        reject(new Error("init script timeout or load a wrong script ".concat(version)));
                                                                        logger.report(new Error("init script timeout or load a wrong script ".concat(version)));
                                                                        return;
                                                                    }
                                                                    if (window[variableName]) {
                                                                        cacheScriptWithStorage({
                                                                            src: src,
                                                                            cacheStoreKey: cacheStoreKey,
                                                                            version: version
                                                                        });
                                                                        resolve();
                                                                    } else {
                                                                        initRetryCount++;
                                                                        init();
                                                                    }
                                                                }, 50);
                                                            }
                                                            init();
                                                        };
                                                        script.onerror = function(e) {
                                                            logger.error("\u274C script in head load error", {
                                                                src: src,
                                                                e: e
                                                            });
                                                            var errorMessage = (0, _instanceof /* default */ .Z)(e, ErrorEvent) ? e.message : "Unknown error";
                                                            logger.report(new Error("script in head load error ".concat(src, ", ").concat(errorMessage)));
                                                            loadedScripts.delete(src);
                                                            script.remove();
                                                            reject(e);
                                                        };
                                                        (document.head || document.body).appendChild(script);
                                                    case 14:
                                                    case "end":
                                                        return _ctx.stop();
                                                }
                                            }, _callee);
                                        }));
                                        return function(resolve, reject) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }());
                                    loadedScripts.set(src, promise);
                                    return _ctx1.abrupt("return", promise);
                                case 6:
                                case "end":
                                    return _ctx1.stop();
                            }
                        }, _callee1);
                    }));
                    return _initScript.apply(this, arguments);
                }
                var cacheScriptWithStorage = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(param) {
                        var src, cacheStoreKey, version, storage, contentObj, response, scriptContent;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    src = param.src, cacheStoreKey = param.cacheStoreKey, version = param.version;
                                    _ctx.prev = 1;
                                    _ctx.next = 4;
                                    return indexedDBStorage.getItem(cacheStoreKey);
                                case 4:
                                    storage = _ctx.sent;
                                    if (!storage) {
                                        _ctx.next = 9;
                                        break;
                                    }
                                    contentObj = JSON.parse(storage);
                                    if (!(contentObj.version === version)) {
                                        _ctx.next = 9;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 9:
                                    _ctx.next = 15;
                                    break;
                                case 11:
                                    _ctx.prev = 11;
                                    _ctx.t0 = _ctx["catch"](1);
                                    logger.error("Failed to check script cache:", _ctx.t0);
                                    logger.report(new Error("Failed to check script cache: ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message)));
                                case 15:
                                    logger.log("Try to cache script:", version);
                                    _ctx.prev = 16;
                                    _ctx.next = 19;
                                    return fetch(src);
                                case 19:
                                    response = _ctx.sent;
                                    if (!(response.status === 404 || !response.ok)) {
                                        _ctx.next = 22;
                                        break;
                                    }
                                    return _ctx.abrupt("return", logger.error("Error: Failed to load script from ".concat(src, ", status: ").concat(response.status)));
                                case 22:
                                    _ctx.next = 24;
                                    return response.text();
                                case 24:
                                    scriptContent = _ctx.sent;
                                    _ctx.next = 27;
                                    return indexedDBStorage.setItem(cacheStoreKey, JSON.stringify({
                                        version: version,
                                        content: scriptContent
                                    }));
                                case 27:
                                    logger.log("Cache Script Success", {
                                        version: version,
                                        cacheStoreKey: cacheStoreKey
                                    });
                                    _ctx.next = 34;
                                    break;
                                case 30:
                                    _ctx.prev = 30;
                                    _ctx.t1 = _ctx["catch"](16);
                                    logger.error("\u274C Delayed Cache Script Failed", {
                                        version: version,
                                        cacheStoreKey: cacheStoreKey,
                                        error: _ctx.t1
                                    });
                                    logger.report(new Error("Delayed Cache Script Failed: ".concat(_ctx.t1.message, ",version: ").concat(version, ",cacheStoreKey: ").concat(cacheStoreKey)));
                                case 34:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                1,
                                11
                            ],
                            [
                                16,
                                30
                            ]
                        ]);
                    }));
                    return function cacheScriptWithStorage(_) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var initScriptFromStorage = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(param) {
                        var cacheStoreKey, variableName, storage, scriptElement, contentObj, scriptContent, result;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    cacheStoreKey = param.cacheStoreKey, variableName = param.variableName;
                                    _ctx.prev = 1;
                                    _ctx.next = 4;
                                    return indexedDBStorage.getItem(cacheStoreKey);
                                case 4:
                                    storage = _ctx.sent;
                                    if (!storage) {
                                        _ctx.next = 21;
                                        break;
                                    }
                                    scriptElement = document.createElement("script");
                                    scriptElement.setAttributeNode(document.createAttribute("data-ot-ignore"));
                                    contentObj = JSON.parse(storage);
                                    scriptContent = contentObj.content;
                                    scriptElement.textContent = scriptContent;
                                    scriptElement.id = "".concat(variableName, "-").concat(contentObj.version);
                                    scriptElement.nonce = getNonce();
                                    // 将 script 元素添加到文档中
                                    document.head.appendChild(scriptElement);
                                    _ctx.next = 16;
                                    return checkScriptInRuntime({
                                        variableName: variableName,
                                        version: contentObj.version
                                    });
                                case 16:
                                    result = _ctx.sent;
                                    logger.log("script init successful form cache :", contentObj.version);
                                    return _ctx.abrupt("return", result);
                                case 21:
                                    logger.log("No script found in cache.");
                                    indexedDBStorage.removeItem(cacheStoreKey);
                                    return _ctx.abrupt("return", false);
                                case 24:
                                    _ctx.next = 30;
                                    break;
                                case 26:
                                    _ctx.prev = 26;
                                    _ctx.t0 = _ctx["catch"](1);
                                    indexedDBStorage.removeItem(cacheStoreKey);
                                    return _ctx.abrupt("return", false);
                                case 30:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                1,
                                26
                            ]
                        ]);
                    }));
                    return function initScriptFromStorage(_) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var getNonce = function() {
                    try {
                        if (false) {}
                        var nonceCounts = Array.from(document.querySelectorAll("script[nonce]")).map(function(script) {
                            return script["nonce"] || script.getAttribute("nonce") || "";
                        }).reduce(function(counts, nonce) {
                            counts[nonce] = (counts[nonce] || 0) + 1;
                            return counts;
                        }, {});
                        var mostFrequentNonce = Object.keys(nonceCounts).reduce(function(a, b) {
                            return nonceCounts[a] > nonceCounts[b] ? a : b;
                        });
                        return mostFrequentNonce;
                    } catch (error) {}
                    return "";
                };

                // EXTERNAL MODULE: external "httpSDK"
                var external_httpSDK_ = __webpack_require__("VA12");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/getEnvironment.js
                function getEnvironment() {
                    if (false) {}
                    var env = "prod";
                    var host = window.location.host;
                    if (host.includes("dev") || host.includes("qa") || host.includes("localhost")) env = "dev";
                    return env;
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_inherits.mjs
                var _inherits = __webpack_require__("feER");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_super.mjs + 1 modules
                var _create_super = __webpack_require__("miY+");
                // EXTERNAL MODULE: ./node_modules/.pnpm/localforage@1.10.0/node_modules/localforage/dist/localforage.js
                var localforage = __webpack_require__("Rk44");
                var localforage_default = /*#__PURE__*/ __webpack_require__.n(localforage);; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+api@1.18.153_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/api/dist/esm/themis/urls.js
                /*
                    themis url
                */
                var ABINFO_QUERY_URL = "strategy/query";
                var STRATEGY_QUERY_URL_V2 = "v2/strategy/query";
                var FEATURE_GATE_QUERY_URL_V2 = "v1/feature-gate/check";
                var CODELESS_QUERY_URL_V2 = "v2/strategy/codeless/query";
                var CODELESS_SSR_INFO_V2 = "v2/strategy/codeless/ssr-info";
                var TAG_VALID_COLLECT_V2 = "v2/event/submit/web/batch";
                var STRATEGY_QUERY_ALL_URL_V2 = "v2/query";
                var SIGNUP_URL = "user/signup";
                var UPDATE_USER = "user";

                // EXTERNAL MODULE: external "_bne.utils.uuid"
                var external_bne_utils_uuid_ = __webpack_require__("mo5a");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+api@1.18.153_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/api/dist/esm/themis/index.js







                var Platform;
                (function(Platform) {
                    Platform[Platform["iOS"] = 1] = "iOS";
                    Platform[Platform["Android"] = 2] = "Android";
                    Platform[Platform["iOS_miniapp"] = 3] = "iOS_miniapp";
                    Platform[Platform["Web"] = 4] = "Web";
                    Platform[Platform["Android_miniapp"] = 5] = "Android_miniapp";
                    Platform[Platform["Electron"] = 6] = "Electron";
                })(Platform || (Platform = {}));
                var themis_themisApiInit = function(authorizationHeader, baseHost, networkLibrary) {
                    var sendTimeoutError = function sendTimeoutError(url, initParams, error) {
                        try {
                            var ts = new Date().getTime();
                            var events = [];
                            var id = (0, external_bne_utils_uuid_.v4)();
                            var data = {
                                trace_id: initParams.trace_id,
                                strategy_id: JSON.stringify(initParams.strategy_ids),
                                themis_event_type: "web_sdk_timeout",
                                themis_app_key: AUTH_HEADER,
                                uid: initParams.uid,
                                env: initParams.env || "PROD",
                                err_desc: JSON.stringify({
                                    host: url,
                                    domain: window.location.href,
                                    error: error.toString(),
                                    user_agent: initParams.user_agent
                                })
                            };
                            events.push({
                                id: id,
                                type: "themis",
                                biz: "themis",
                                ts: ts,
                                data: JSON.stringify(data)
                            });
                            sendTagValidUsers({
                                platformType: 3,
                                events: events
                            });
                        } catch (error1) {}
                    };
                    var requestFunPost;
                    var netPromise = function(url, body, options) {
                        //@ts-ignore
                        return (0, external_httpSDK_.post)(url, body, (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, options || {}), {
                            headers: {
                                Authorization: " Basic ".concat(AUTH_HEADER)
                            }
                        }));
                    };
                    if (networkLibrary) {
                        netPromise = function(url, body, options) {
                            //@ts-ignore
                            return networkLibrary.post(url, body, (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, options || {}), {
                                headers: {
                                    Authorization: " Basic ".concat(AUTH_HEADER)
                                }
                            }));
                        };
                    }
                    requestFunPost = function(url, body) {
                        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                        return netPromise(url, body, options);
                    };
                    var AUTH_HEADER = authorizationHeader;
                    baseHost = baseHost || "https://api.saasexch.co/bapi/themis/api/";
                    var checkValidResponse = function(ctx) {
                        var code = ctx.code;
                        if (+code === 0) {
                            return ctx;
                        }
                    };

                    function authedHeadersPost(url, body, options) {
                        return _authedHeadersPost.apply(this, arguments);
                    }

                    function _authedHeadersPost() {
                        _authedHeadersPost = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(url, body, options) {
                            var res, validRes;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        _ctx.next = 3;
                                        return requestFunPost(url, body, options);
                                    case 3:
                                        res = _ctx.sent;
                                        validRes = checkValidResponse(res);
                                        return _ctx.abrupt("return", validRes === null || validRes === void 0 ? void 0 : validRes.data);
                                    case 8:
                                        _ctx.prev = 8;
                                        _ctx.t0 = _ctx["catch"](0);
                                        sendTimeoutError(url, body, _ctx.t0);
                                        throw _ctx.t0;
                                    case 12:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    8
                                ]
                            ]);
                        }));
                        return _authedHeadersPost.apply(this, arguments);
                    }

                    function authedHeadersPostFg(url, body, options) {
                        return _authedHeadersPostFg.apply(this, arguments);
                    }

                    function _authedHeadersPostFg() {
                        _authedHeadersPostFg = // TODO: remove when API changes, because API schema did not use 'data' field so cannot reuse above authedHeadersPost
                            (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(url, body, options) {
                                var res;
                                return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                    while (1) switch (_ctx.prev = _ctx.next) {
                                        case 0:
                                            _ctx.prev = 0;
                                            _ctx.next = 3;
                                            return requestFunPost(url, body, options);
                                        case 3:
                                            res = _ctx.sent;
                                            return _ctx.abrupt("return", res);
                                        case 7:
                                            _ctx.prev = 7;
                                            _ctx.t0 = _ctx["catch"](0);
                                            sendTimeoutError(url, body, _ctx.t0);
                                            throw _ctx.t0;
                                        case 11:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee, null, [
                                    [
                                        0,
                                        7
                                    ]
                                ]);
                            }));
                        return _authedHeadersPostFg.apply(this, arguments);
                    }

                    function getLatestAbConfigForThemisSDK(basicInfo) {
                        return _getLatestAbConfigForThemisSDK.apply(this, arguments);
                    }

                    function _getLatestAbConfigForThemisSDK() {
                        _getLatestAbConfigForThemisSDK = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        return _ctx.abrupt("return", authedHeadersPost("".concat(baseHost).concat(STRATEGY_QUERY_URL_V2), basicInfo));
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _getLatestAbConfigForThemisSDK.apply(this, arguments);
                    }

                    function getLatestAbCodelessConfigForThemisSDK(basicInfo) {
                        return _getLatestAbCodelessConfigForThemisSDK.apply(this, arguments);
                    }

                    function _getLatestAbCodelessConfigForThemisSDK() {
                        _getLatestAbCodelessConfigForThemisSDK = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        return _ctx.abrupt("return", authedHeadersPost("".concat(baseHost).concat(CODELESS_QUERY_URL_V2), basicInfo));
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _getLatestAbCodelessConfigForThemisSDK.apply(this, arguments);
                    }

                    function getFeatureGateResult(basicInfo) {
                        return _getFeatureGateResult.apply(this, arguments);
                    }

                    function _getFeatureGateResult() {
                        _getFeatureGateResult = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        return _ctx.abrupt("return", authedHeadersPostFg("".concat(baseHost).concat(FEATURE_GATE_QUERY_URL_V2), basicInfo));
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _getFeatureGateResult.apply(this, arguments);
                    }

                    function getExpAndFgResult(basicInfo) {
                        return _getExpAndFgResult.apply(this, arguments);
                    }

                    function _getExpAndFgResult() {
                        _getExpAndFgResult = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        return _ctx.abrupt("return", authedHeadersPostFg("".concat(baseHost).concat(STRATEGY_QUERY_ALL_URL_V2), basicInfo));
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _getExpAndFgResult.apply(this, arguments);
                    }

                    function sendTagValidUsers(basicInfo) {
                        return _sendTagValidUsers.apply(this, arguments);
                    }

                    function _sendTagValidUsers() {
                        _sendTagValidUsers = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                            var url;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        url = "https://api.saasexch.co/bapi/fe/pda/v1/submit/web/batch?project=cdk89qo7nj89f7sebr10";
                                        if (navigator.sendBeacon) {
                                            navigator.sendBeacon(url, JSON.stringify(basicInfo));
                                        }
                                    case 2:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _sendTagValidUsers.apply(this, arguments);
                    }

                    function sendTagValidUsersByTest(basicInfo) {
                        return _sendTagValidUsersByTest.apply(this, arguments);
                    }

                    function _sendTagValidUsersByTest() {
                        _sendTagValidUsersByTest = // test error msg
                            (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(basicInfo) {
                                var themisCollectUrl;
                                return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                    while (1) switch (_ctx.prev = _ctx.next) {
                                        case 0:
                                            themisCollectUrl = "".concat(baseHost).concat(TAG_VALID_COLLECT_V2);
                                            (0, external_httpSDK_.post)(themisCollectUrl, basicInfo);
                                        case 2:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }));
                        return _sendTagValidUsersByTest.apply(this, arguments);
                    }

                    function getCodelessSsrInfo(Authorization) {
                        return _getCodelessSsrInfo.apply(this, arguments);
                    }

                    function _getCodelessSsrInfo() {
                        _getCodelessSsrInfo = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(Authorization) {
                            var url, res, validRes;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        url = "".concat(baseHost).concat(CODELESS_SSR_INFO_V2);
                                        _ctx.next = 3;
                                        return (0, external_httpSDK_.post)(url, null, {
                                            headers: {
                                                Authorization: "".concat(Authorization)
                                            }
                                        });
                                    case 3:
                                        res = _ctx.sent;
                                        validRes = checkValidResponse(res);
                                        return _ctx.abrupt("return", validRes === null || validRes === void 0 ? void 0 : validRes.data);
                                    case 6:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return _getCodelessSsrInfo.apply(this, arguments);
                    }
                    return {
                        getLatestAbConfigForThemisSDK: getLatestAbConfigForThemisSDK,
                        getLatestAbCodelessConfigForThemisSDK: getLatestAbCodelessConfigForThemisSDK,
                        getFeatureGateResult: getFeatureGateResult,
                        sendTagValidUsers: sendTagValidUsers,
                        sendTagValidUsersByTest: sendTagValidUsersByTest,
                        getCodelessSsrInfo: getCodelessSsrInfo,
                        getExpAndFgResult: getExpAndFgResult
                    };
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_define_property.mjs
                var _define_property = __webpack_require__("vctd");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_sliced_to_array.mjs + 2 modules
                var _sliced_to_array = __webpack_require__("/++K");
                // EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js
                var cloneDeep = __webpack_require__("oZ31");
                var cloneDeep_default = /*#__PURE__*/ __webpack_require__.n(cloneDeep);
                // EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js
                var omit = __webpack_require__("9cH7");
                var omit_default = /*#__PURE__*/ __webpack_require__.n(omit);
                // EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
                var get = __webpack_require__("k4Sg");
                var get_default = /*#__PURE__*/ __webpack_require__.n(get);
                // EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keyBy.js
                var keyBy = __webpack_require__("iH+U");
                var keyBy_default = /*#__PURE__*/ __webpack_require__.n(keyBy);
                // EXTERNAL MODULE: ./node_modules/.pnpm/js-md5@0.7.3/node_modules/js-md5/src/md5.js
                var md5 = __webpack_require__("Y7vP");
                var md5_default = /*#__PURE__*/ __webpack_require__.n(md5);
                // EXTERNAL MODULE: external "b2aSDK"
                var external_b2aSDK_ = __webpack_require__("kPx0");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_set_prototype_of.mjs
                var _set_prototype_of = __webpack_require__("hiFp");; // CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_construct.mjs


                function isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;

                    try {
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }

                function construct(Parent, args, Class) {
                    if (isNativeReflectConstruct()) {
                        construct = Reflect.construct;
                    } else {
                        construct = function construct(Parent, args, Class) {
                            var a = [null];
                            a.push.apply(a, args);
                            var Constructor = Function.bind.apply(Parent, a);
                            var instance = new Constructor();
                            if (Class)(0, _set_prototype_of /* default */ .Z)(instance, Class.prototype);
                            return instance;
                        };
                    }

                    return construct.apply(null, arguments);
                }

                function _construct(Parent, args, Class) {
                    return construct.apply(null, arguments);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_is_native_function.mjs
                function _isNativeFunction(fn) {
                    return Function.toString.call(fn).indexOf("[native code]") !== -1;
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_get_prototype_of.mjs
                var _get_prototype_of = __webpack_require__("C3qR");; // CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_wrap_native_super.mjs





                function wrapNativeSuper(Class) {
                    var _cache = typeof Map === "function" ? new Map() : undefined;

                    wrapNativeSuper = function wrapNativeSuper(Class) {
                        if (Class === null || !_isNativeFunction(Class)) return Class;

                        if (typeof Class !== "function") {
                            throw new TypeError("Super expression must either be null or a function");
                        }

                        if (typeof _cache !== "undefined") {
                            if (_cache.has(Class)) return _cache.get(Class);

                            _cache.set(Class, Wrapper);
                        }

                        function Wrapper() {
                            return _construct(Class, arguments, (0, _get_prototype_of /* default */ .Z)(this).constructor);
                        }

                        Wrapper.prototype = Object.create(Class.prototype, {
                            constructor: {
                                value: Wrapper,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                        return (0, _set_prototype_of /* default */ .Z)(Wrapper, Class);
                    };

                    return wrapNativeSuper(Class);
                }

                function _wrapNativeSuper(Class) {
                    return wrapNativeSuper(Class);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+themis@0.0.39_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/themis/dist/esm/types.js




                var StrategyType;
                (function(StrategyType) {
                    StrategyType["flow"] = "flow";
                    StrategyType["condition"] = "condition";
                    StrategyType["universal"] = "universal-flow";
                })(StrategyType || (StrategyType = {}));
                var ExportedType // keys of ExportedType are values of StrategyType
                ;
                (function(ExportedType) {
                    ExportedType["flow"] = "flows";
                    ExportedType["condition"] = "conditions";
                    ExportedType["universal-flow"] = "universals";
                })(ExportedType || (ExportedType = {}));
                var types_Platform;
                (function(Platform) {
                    Platform[Platform["iOS"] = 1] = "iOS";
                    Platform[Platform["Android"] = 2] = "Android";
                    Platform[Platform["iOS_miniapp"] = 3] = "iOS_miniapp";
                    Platform[Platform["Web"] = 4] = "Web";
                    Platform[Platform["Android_miniapp"] = 5] = "Android_miniapp";
                    Platform[Platform["Electron"] = 6] = "Electron";
                })(types_Platform || (types_Platform = {}));
                var NoAvailableConfigError = /*#__PURE__*/ function(Error) {
                    "use strict";
                    (0, _inherits /* default */ .Z)(NoAvailableConfigError, Error);
                    var _super = (0, _create_super /* default */ .Z)(NoAvailableConfigError);

                    function NoAvailableConfigError() {
                        (0, _class_call_check /* default */ .Z)(this, NoAvailableConfigError);
                        return _super.apply(this, arguments);
                    }
                    return NoAvailableConfigError;
                }(_wrapNativeSuper(Error));

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+themis@0.0.39_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/themis/dist/esm/constants.js
                /**
                 *  IS_ELECTRON: 通用的electron环境，包括electron客户端以及弹窗打开的页面
                 *  IS_ELECTRON_APP: 仅表示electron客户端
                 *  IS_ELECTRON_WEB_PAGE：仅表示electron弹窗打开的页面
                 */
                var IS_ELECTRON_WEB_PAGE = true && window.navigator.userAgent.toLowerCase().includes("electron");
                var PROXIED_GLOBAL = true ? window : 0;
                var SDK_VERSION = "2.0.0";
                var POLLING_INTERVAL = 600;
                var SAAS_DOMAIN = "https://api.saasexch.io";

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+themis@0.0.39_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/themis/dist/esm/common.js








                /* eslint-disable @typescript-eslint/no-this-alias */








                var parseInitOptions = function(options) {
                    var _baseHost = options.baseHost,
                        baseHost = _baseHost === void 0 ? "" : _baseHost,
                        _networkLibrary = options.networkLibrary,
                        networkLibrary = _networkLibrary === void 0 ? undefined : _networkLibrary;
                    if ("authHeader" in options) {
                        return {
                            authHeader: options.authHeader,
                            baseHost: baseHost,
                            networkLibrary: networkLibrary
                        };
                    }
                    if ("appKey" in options && "appSecret" in options) {
                        var authHeader = (0, external_b2aSDK_.btoa)("".concat(options.appKey, ":").concat(options.appSecret));
                        return {
                            authHeader: authHeader,
                            baseHost: baseHost,
                            networkLibrary: networkLibrary
                        };
                    }
                    return {
                        authHeader: "default auth header",
                        baseHost: baseHost,
                        networkLibrary: networkLibrary
                    };
                };
                var StrategyHelper = /*#__PURE__*/ function() {
                    "use strict";

                    function StrategyHelper(initParams, initOptions) {
                        var _this = this;
                        (0, _class_call_check /* default */ .Z)(this, StrategyHelper);
                        this.initialized = false;
                        this._cachedConfig = {};
                        this.cachedConfig = this.getProxiedCachedConfig(this._cachedConfig);
                        this.logTasksMap = new Map();
                        this.subscription = new Set();
                        this.defaultEventCallback = function(event) {
                            switch (event.type) {
                                case "error":
                                    // eslint-disable-next-line no-console
                                    // @ts-ignore
                                    _this.consoleFun(event.value, "error");
                                    break;
                                case "access":
                                    break;
                                default:
                                    break;
                            }
                        };
                        this.onEventCallback = this.defaultEventCallback;
                        this.paramsHash = "";
                        this.codelessId = "";
                        var authHeader = parseInitOptions(initOptions).authHeader;
                        this.initParams = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, initParams), {
                            sdk_version: "".concat(SDK_VERSION),
                            strategy_ids: initParams.strategy_ids || [],
                            user_agent: navigator === null || navigator === void 0 ? void 0 : navigator.userAgent
                        });
                        try {
                            var decodedAuthHeader = (0, external_b2aSDK_.atob)(authHeader);
                            var appData = decodedAuthHeader.split(":");
                            if (appData.length !== 2) {
                                // eslint-disable-next-line
                                this.consoleFun("[Themis SDK] Auth header is not valid", "error");
                            }
                            var ref;
                            ref = (0, _sliced_to_array /* default */ .Z)(appData, 1), this.appKey = ref[0], ref;
                        } catch (e) {
                            // eslint-disable-next-line no-console
                            this.consoleFun("[Themis SDK] Your auth header is not valid, please encode base64 'appKey:appSecret'", "error");
                        }
                        // support empty trace id
                        // if (!this.initParams.trace_id && !this.initParams.uid) {
                        //   // eslint-disable-next-line no-console
                        //   this.consoleFun(`[Themis SDK] you must define one of trace_id and uid!`, 'error')
                        // }
                        // this.initParams.trace_id = this.initParams.trace_id || this.initParams.uid
                        delete this.initParams.token;
                    }
                    var _proto = StrategyHelper.prototype;
                    _proto.generateStore = function generateStore(store) {
                        this.store = store;
                    };
                    _proto.generateApi = function generateApi(api) {
                        this.api = api;
                    };
                    _proto.launch = function launch() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _this.initialized = true;
                                        _ctx.next = 3;
                                        return _this.saveLatestConfigToCache();
                                    case 3:
                                        _this.notify();
                                        if (PROXIED_GLOBAL.document.visibilityState) {
                                            _this.refreshUpdateCachedConfigTimer(POLLING_INTERVAL);
                                        }
                                        PROXIED_GLOBAL.document.addEventListener("visibilitychange", function() {
                                            if (PROXIED_GLOBAL.document.visibilityState) {
                                                _this.refreshUpdateCachedConfigTimer(POLLING_INTERVAL);
                                            } else {
                                                _this.stopUpdateCachedConfigTimer();
                                            }
                                        });
                                    case 6:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.launchExpAndFg = function launchExpAndFg() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _this.initialized = true;
                                        _ctx.next = 3;
                                        return _this.saveLatestConfigToExpAndFgCache();
                                    case 3:
                                        _this.notify();
                                        if (PROXIED_GLOBAL.document.visibilityState) {
                                            _this.refreshUpdateCachedConfigTimerForExpAndFg(POLLING_INTERVAL);
                                        }
                                        PROXIED_GLOBAL.document.addEventListener("visibilitychange", function() {
                                            if (PROXIED_GLOBAL.document.visibilityState) {
                                                _this.refreshUpdateCachedConfigTimerForExpAndFg(POLLING_INTERVAL);
                                            } else {
                                                _this.stopUpdateCachedConfigTimerForExpAndFg();
                                            }
                                        });
                                    case 6:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.saveLatestConfigToExpAndFgCache = function saveLatestConfigToExpAndFgCache() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var sharedConfig, currentTime, forceEffectStrategies, forceConditions, ref, ref1, feature_gates, data, response, newConfigs, featureGateResults, templateSharedConfig, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, newConfig;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        _ctx.next = 3;
                                        return _this.store.getItem("strategy-config-".concat(_this.paramsHash));
                                    case 3:
                                        sharedConfig = _ctx.sent;
                                        currentTime = Number(new Date());
                                        forceEffectStrategies = {};
                                        forceConditions = null;
                                        if (!(sharedConfig && (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp) && Math.round((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 11;
                                            break;
                                        } {
                                            // eslint-disable-next-line
                                            _this.consoleFun("[Themis SDK] Query request at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000, "s.\n          There may be another sdk instance having the same information with this instance!"));
                                            Object.assign(_this.cachedConfig, (0, src_object_spread /* default */ .Z)({}, omit_default()(sharedConfig || {}, "force")));
                                        }
                                        _ctx.next = 60;
                                        break;
                                    case 11:
                                        ;
                                        feature_gates = _this.initParams;
                                        if ((ref = _this.initParams) === null || ref === void 0 ? void 0 : ref.feature_gates) {
                                            feature_gates = cloneDeep_default()(_this.initParams.feature_gates);
                                            delete _this.initParams.feature_gates;
                                        }
                                        data = {
                                            strategies: _this.initParams,
                                            feature_gates: feature_gates
                                        };
                                        _ctx.next = 17;
                                        return _this.api.getExpAndFgResult(data);
                                    case 17:
                                        response = _ctx.sent;
                                        newConfigs = get_default()(response === null || response === void 0 ? void 0 : response.strategies, [
                                            "strategies"
                                        ], []);
                                        featureGateResults = keyBy_default()(response === null || response === void 0 ? void 0 : (ref1 = response.feature_gates) === null || ref1 === void 0 ? void 0 : ref1.results, "name");
                                        _ctx.next = 22;
                                        return _this.store.setItem("feature-gate-".concat(_this.paramsHash), {
                                            results: featureGateResults,
                                            lastQueryTimeStamp: Number(new Date())
                                        });
                                    case 22:
                                        templateSharedConfig = {
                                            flows: [],
                                            conditions: {},
                                            universals: []
                                        };
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _ctx.prev = 24;
                                        _iterator = newConfigs[Symbol.iterator]();
                                    case 26:
                                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                            _ctx.next = 44;
                                            break;
                                        }
                                        newConfig = _step.value;
                                        _ctx.t0 = newConfig.type;
                                        _ctx.next = _ctx.t0 === StrategyType.flow ? 31 : _ctx.t0 === StrategyType.universal ? 34 : _ctx.t0 === StrategyType.condition ? 37 : 40;
                                        break;
                                    case 31:
                                        templateSharedConfig.flows.push(newConfig);
                                        if (newConfig.force_effect) {
                                            forceEffectStrategies[newConfig.id] = newConfig;
                                        }
                                        return _ctx.abrupt("break", 41);
                                    case 34:
                                        templateSharedConfig.universals.push(newConfig);
                                        if (newConfig.force_effect) {
                                            forceEffectStrategies[newConfig.id] = newConfig;
                                        }
                                        return _ctx.abrupt("break", 41);
                                    case 37:
                                        templateSharedConfig.conditions = newConfig;
                                        if (newConfig.force_effect) {
                                            forceConditions = newConfig;
                                        }
                                        return _ctx.abrupt("break", 41);
                                    case 40:
                                        return _ctx.abrupt("break", 41);
                                    case 41:
                                        _iteratorNormalCompletion = true;
                                        _ctx.next = 26;
                                        break;
                                    case 44:
                                        _ctx.next = 50;
                                        break;
                                    case 46:
                                        _ctx.prev = 46;
                                        _ctx.t1 = _ctx["catch"](24);
                                        _didIteratorError = true;
                                        _iteratorError = _ctx.t1;
                                    case 50:
                                        _ctx.prev = 50;
                                        _ctx.prev = 51;
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    case 53:
                                        _ctx.prev = 53;
                                        if (!_didIteratorError) {
                                            _ctx.next = 56;
                                            break;
                                        }
                                        throw _iteratorError;
                                    case 56:
                                        return _ctx.finish(53);
                                    case 57:
                                        return _ctx.finish(50);
                                    case 58:
                                        sharedConfig = templateSharedConfig;
                                        if (!sharedConfig) {
                                            _this.consoleFun("get an invalid config from remote!");
                                        } else {
                                            Object.assign(_this.cachedConfig, (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, omit_default()(sharedConfig || {}, "force")), {
                                                lastQueryTimeStamp: Number(new Date())
                                            }));
                                        }
                                    case 60:
                                        if (!_this.currentConfig) {
                                            _this.currentConfig = cloneDeep_default()(_this._cachedConfig);
                                        } else {
                                            _this.applyForEffectStrategies(forceEffectStrategies, forceConditions);
                                        }
                                        _this.notify();
                                        _ctx.next = 67;
                                        break;
                                    case 64:
                                        _ctx.prev = 64;
                                        _ctx.t2 = _ctx["catch"](0);
                                        _this.consoleFun("[Themis SDK] Cannot fetch result from server");
                                    case 67:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    64
                                ],
                                [
                                    24,
                                    46,
                                    50,
                                    58
                                ],
                                [
                                    51, ,
                                    53,
                                    57
                                ]
                            ]);
                        }))();
                    };
                    _proto.saveLatestConfigToCache = function saveLatestConfigToCache() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var sharedConfig, currentTime, forceEffectStrategies, forceConditions, response, newConfigs, templateSharedConfig, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, newConfig;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.next = 2;
                                        return _this.store.getItem("strategy-config-".concat(_this.paramsHash));
                                    case 2:
                                        sharedConfig = _ctx.sent;
                                        currentTime = Number(new Date());
                                        forceEffectStrategies = {};
                                        forceConditions = null;
                                        if (!(sharedConfig && (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp) && Math.round((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 10;
                                            break;
                                        } {
                                            // eslint-disable-next-line
                                            _this.consoleFun("[Themis SDK] Query request at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000, "s.\n          There may be another sdk instance having the same information with this instance!"));
                                            Object.assign(_this.cachedConfig, (0, src_object_spread /* default */ .Z)({}, omit_default()(sharedConfig || {}, "force")));
                                        }
                                        _ctx.next = 52;
                                        break;
                                    case 10:
                                        _ctx.next = 12;
                                        return _this.api.getLatestAbConfigForThemisSDK(_this.initParams);
                                    case 12:
                                        response = _ctx.sent;
                                        newConfigs = get_default()(response, [
                                            "strategies"
                                        ], []);
                                        templateSharedConfig = {
                                            flows: [],
                                            conditions: {},
                                            universals: []
                                        };
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _ctx.prev = 16;
                                        _iterator = newConfigs[Symbol.iterator]();
                                    case 18:
                                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                            _ctx.next = 36;
                                            break;
                                        }
                                        newConfig = _step.value;
                                        _ctx.t0 = newConfig.type;
                                        _ctx.next = _ctx.t0 === StrategyType.flow ? 23 : _ctx.t0 === StrategyType.universal ? 26 : _ctx.t0 === StrategyType.condition ? 29 : 32;
                                        break;
                                    case 23:
                                        templateSharedConfig.flows.push(newConfig);
                                        if (newConfig.force_effect) {
                                            forceEffectStrategies[newConfig.id] = newConfig;
                                        }
                                        return _ctx.abrupt("break", 33);
                                    case 26:
                                        templateSharedConfig.universals.push(newConfig);
                                        if (newConfig.force_effect) {
                                            forceEffectStrategies[newConfig.id] = newConfig;
                                        }
                                        return _ctx.abrupt("break", 33);
                                    case 29:
                                        templateSharedConfig.conditions = newConfig;
                                        if (newConfig.force_effect) {
                                            forceConditions = newConfig;
                                        }
                                        return _ctx.abrupt("break", 33);
                                    case 32:
                                        return _ctx.abrupt("break", 33);
                                    case 33:
                                        _iteratorNormalCompletion = true;
                                        _ctx.next = 18;
                                        break;
                                    case 36:
                                        _ctx.next = 42;
                                        break;
                                    case 38:
                                        _ctx.prev = 38;
                                        _ctx.t1 = _ctx["catch"](16);
                                        _didIteratorError = true;
                                        _iteratorError = _ctx.t1;
                                    case 42:
                                        _ctx.prev = 42;
                                        _ctx.prev = 43;
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    case 45:
                                        _ctx.prev = 45;
                                        if (!_didIteratorError) {
                                            _ctx.next = 48;
                                            break;
                                        }
                                        throw _iteratorError;
                                    case 48:
                                        return _ctx.finish(45);
                                    case 49:
                                        return _ctx.finish(42);
                                    case 50:
                                        sharedConfig = templateSharedConfig;
                                        if (!sharedConfig) {
                                            _this.consoleFun("get an invalid config from remote!");
                                        } else {
                                            Object.assign(_this.cachedConfig, (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, omit_default()(sharedConfig || {}, "force")), {
                                                lastQueryTimeStamp: Number(new Date())
                                            }));
                                        }
                                    case 52:
                                        if (!_this.currentConfig) {
                                            _this.currentConfig = cloneDeep_default()(_this._cachedConfig);
                                        } else {
                                            _this.applyForEffectStrategies(forceEffectStrategies, forceConditions);
                                        }
                                        _this.notify();
                                    case 54:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    16,
                                    38,
                                    42,
                                    50
                                ],
                                [
                                    43, ,
                                    45,
                                    49
                                ]
                            ]);
                        }))();
                    };
                    _proto.fetchFeatureGateData = function fetchFeatureGateData() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var cachedFeatureGate, currentTime, response, featureGateResults;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.next = 2;
                                        return _this.store.getItem("feature-gate-".concat(_this.paramsHash));
                                    case 2:
                                        cachedFeatureGate = _ctx.sent;
                                        currentTime = Number(new Date());
                                        if (!(cachedFeatureGate && (cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.lastQueryTimeStamp) && Math.round((currentTime - (cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 7;
                                            break;
                                        }
                                        _this.consoleFun("[Themis SDK] Query FeatureGateData at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.lastQueryTimeStamp)) / 1000, "s.\n          There may be another sdk instance having the same information with this instance!"));
                                        return _ctx.abrupt("return", cachedFeatureGate.results);
                                    case 7:
                                        _ctx.prev = 7;
                                        _ctx.next = 10;
                                        return _this.api.getFeatureGateResult(_this.initParams);
                                    case 10:
                                        response = _ctx.sent;
                                        if (!(!response || !response.results)) {
                                            _ctx.next = 13;
                                            break;
                                        }
                                        return _ctx.abrupt("return", (cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.results) || {});
                                    case 13:
                                        featureGateResults = keyBy_default()(response.results, "name");
                                        _ctx.next = 16;
                                        return _this.store.setItem("feature-gate-".concat(_this.paramsHash), {
                                            results: featureGateResults,
                                            lastQueryTimeStamp: currentTime
                                        });
                                    case 16:
                                        return _ctx.abrupt("return", featureGateResults);
                                    case 19:
                                        _ctx.prev = 19;
                                        _ctx.t0 = _ctx["catch"](7);
                                        _this.consoleFun("[Themis SDK] Cannot fetch feature gate result from server");
                                        return _ctx.abrupt("return", (cachedFeatureGate === null || cachedFeatureGate === void 0 ? void 0 : cachedFeatureGate.results) || {});
                                    case 23:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    7,
                                    19
                                ]
                            ]);
                        }))();
                    };
                    _proto.notify = function notify() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, subscriber;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _ctx.prev = 1;
                                        // eslint-disable-next-line no-restricted-syntax
                                        for (_iterator = Array.from(_this.subscription)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            subscriber = _step.value;
                                            subscriber(_this.getStrategiesConfig());
                                        }
                                        _ctx.next = 9;
                                        break;
                                    case 5:
                                        _ctx.prev = 5;
                                        _ctx.t0 = _ctx["catch"](1);
                                        _didIteratorError = true;
                                        _iteratorError = _ctx.t0;
                                    case 9:
                                        _ctx.prev = 9;
                                        _ctx.prev = 10;
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    case 12:
                                        _ctx.prev = 12;
                                        if (!_didIteratorError) {
                                            _ctx.next = 15;
                                            break;
                                        }
                                        throw _iteratorError;
                                    case 15:
                                        return _ctx.finish(12);
                                    case 16:
                                        return _ctx.finish(9);
                                    case 17:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    1,
                                    5,
                                    9,
                                    17
                                ],
                                [
                                    10, ,
                                    12,
                                    16
                                ]
                            ]);
                        }))();
                    };
                    _proto.refreshUpdateCachedConfigTimer = function refreshUpdateCachedConfigTimer() {
                        var newTimer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
                        if (newTimer === 0) {
                            newTimer = 300;
                        }
                        this.stopUpdateCachedConfigTimer();
                        this.updateCachedConfigTimer = PROXIED_GLOBAL.setInterval(this.saveLatestConfigToCache.bind(this), newTimer * 1000);
                    };
                    _proto.stopUpdateCachedConfigTimer = function stopUpdateCachedConfigTimer() {
                        if (this.updateCachedConfigTimer) {
                            clearInterval(this.updateCachedConfigTimer);
                            this.updateCachedConfigTimer = undefined;
                        }
                    };
                    _proto.refreshUpdateCachedConfigTimerForExpAndFg = function refreshUpdateCachedConfigTimerForExpAndFg() {
                        var newTimer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
                        if (newTimer === 0) {
                            newTimer = 300;
                        }
                        this.stopUpdateCachedConfigTimerForExpAndFg();
                        this.updateCachedConfigTimerForExpAndFg = PROXIED_GLOBAL.setInterval(this.saveLatestConfigToExpAndFgCache.bind(this), newTimer * 1000);
                    };
                    _proto.stopUpdateCachedConfigTimerForExpAndFg = function stopUpdateCachedConfigTimerForExpAndFg() {
                        if (this.updateCachedConfigTimerForExpAndFg) {
                            clearInterval(this.updateCachedConfigTimerForExpAndFg);
                            this.updateCachedConfigTimerForExpAndFg = undefined;
                        }
                    };
                    _proto.getProxiedCachedConfig = function getProxiedCachedConfig(toProxiedConfig) {
                        var self = this;
                        return new Proxy(toProxiedConfig, {
                            set: function set(target, path, value, receiver) {
                                var result = Reflect.set(target, path, value, receiver);
                                result && self.store.setItem("strategy-config-".concat(self.paramsHash), toProxiedConfig);
                                return result;
                            }
                        });
                    };
                    _proto.getExportedConfig = function getExportedConfig(toExportConfig) {
                        var paths = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                        var self = this;
                        return new Proxy(toExportConfig, {
                            get: function get(target, path) {
                                var val = Reflect.get(target, path);
                                var pathStr = (0, _to_consumable_array /* default */ .Z)(paths).concat([
                                    path.toString()
                                ]).join(".");
                                if (typeof val === "object" && val !== null) {
                                    var ref4;
                                    if (self.logTasksMap.has(pathStr)) {
                                        var ref2;
                                        (ref2 = self.logTasksMap.get(pathStr)) === null || ref2 === void 0 ? void 0 : ref2.push({
                                            path: pathStr,
                                            value: cloneDeep_default()(val)
                                        });
                                    } else {
                                        self.logTasksMap.set(pathStr, [{
                                            path: pathStr,
                                            value: cloneDeep_default()(val)
                                        }]);
                                    }
                                    (ref4 = self.logTasksMap.get(paths.join("."))) === null || ref4 === void 0 ? void 0 : ref4.pop();
                                    Promise.resolve().then(function() {
                                        var ref;
                                        var message = (ref = self.logTasksMap.get(pathStr)) === null || ref === void 0 ? void 0 : ref.pop();
                                        message && self.onEventCallback({
                                            path: pathStr,
                                            value: cloneDeep_default()(val),
                                            type: "access"
                                        });
                                    });
                                    return self.getExportedConfig(val, (0, _to_consumable_array /* default */ .Z)(paths).concat([
                                        String(path)
                                    ]));
                                }
                                // eslint-disable-next-line no-prototype-builtins
                                if (target.hasOwnProperty(path)) {
                                    var ref3;
                                    (ref3 = self.logTasksMap.get(paths.join("."))) === null || ref3 === void 0 ? void 0 : ref3.pop();
                                    self.onEventCallback({
                                        path: pathStr,
                                        value: cloneDeep_default()(val),
                                        type: "access"
                                    });
                                }
                                return Reflect.get(target, path);
                            },
                            set: function set() {
                                // eslint-disable-next-line
                                self.consoleFun("[Themis SDK] you can not set property of ab test config, get a new one and reassign it!", "error");
                                return false;
                            }
                        });
                    };
                    _proto.generateParamsHash = function generateParamsHash(params) {
                        try {
                            this.paramsHash = md5_default()(JSON.stringify(sortObject(params)));
                        } catch (error) {
                            console.log(error);
                        }
                    };
                    _proto.consoleFun = function consoleFun(text, type) {
                        if (this.initParams.env !== "PROD" || this.initParams.debuggerMode) {
                            if (type === "error") {
                                console.error(text);
                            } else {
                                console.warn(text);
                            }
                        }
                    };
                    _proto.getAbConfig = function getAbConfig() {
                        // eslint-disable-next-line
                        this.consoleFun("[Themis SDK] this function is deprecated now, use getStrategiesConfig instead");
                        return this.getStrategiesConfig();
                    };
                    _proto.getStrategiesConfig = function getStrategiesConfig() {
                        var ref, ref6, ref7, ref8, ref9, ref10;
                        if (!this.initialized) {
                            // eslint-disable-next-line
                            this.consoleFun("[Themis SDK] init before invocation of this function is mandatory!", "error");
                        }
                        var _obj;
                        var toExportConfig = (_obj = {}, (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.flow], (ref = this.currentConfig) === null || ref === void 0 ? void 0 : (ref6 = ref.flows) === null || ref6 === void 0 ? void 0 : ref6.reduce(function(acc, cur) {
                            return (0, src_object_spread /* default */ .Z)({}, acc, cur.payload);
                        }, {})), (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.condition], (ref7 = this.currentConfig) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.conditions) === null || ref8 === void 0 ? void 0 : ref8.payload), (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.universal], (ref9 = this.currentConfig) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.universals) === null || ref10 === void 0 ? void 0 : ref10.reduce(function(acc, cur) {
                            return (0, src_object_spread /* default */ .Z)({}, acc, cur.payload);
                        }, {})), _obj);
                        var exportValues = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, toExportConfig), {
                            experiments: (0, src_object_spread /* default */ .Z)({}, toExportConfig[ExportedType.flow], toExportConfig[ExportedType.condition], toExportConfig[ExportedType["universal-flow"]])
                        });
                        return this.getExportedConfig(cloneDeep_default()(exportValues));
                    };
                    _proto.getFeatureGateResults = function getFeatureGateResults() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var results;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.next = 2;
                                        return _this.fetchFeatureGateData();
                                    case 2:
                                        results = _ctx.sent;
                                        return _ctx.abrupt("return", cloneDeep_default()(results) || {});
                                    case 4:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.getFeatureGateResultsByParams = function getFeatureGateResultsByParams(initParams) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var response, featureGateResults;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        _ctx.next = 3;
                                        return _this.api.getFeatureGateResult(initParams);
                                    case 3:
                                        response = _ctx.sent;
                                        if (!(!response || !response.results)) {
                                            _ctx.next = 6;
                                            break;
                                        }
                                        return _ctx.abrupt("return", {});
                                    case 6:
                                        featureGateResults = keyBy_default()(response.results, "name");
                                        return _ctx.abrupt("return", featureGateResults);
                                    case 10:
                                        _ctx.prev = 10;
                                        _ctx.t0 = _ctx["catch"](0);
                                        _this.consoleFun("[Themis SDK] Cannot fetch feature gate result from server");
                                        return _ctx.abrupt("return", {});
                                    case 14:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    10
                                ]
                            ]);
                        }))();
                    };
                    _proto.getFeatureGateValueByNameByParams = function getFeatureGateValueByNameByParams(name, initParams) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var result;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.t0 = (get_default());
                                        _ctx.next = 3;
                                        return _this.getFeatureGateResultsByParams(initParams);
                                    case 3:
                                        _ctx.t1 = _ctx.sent;
                                        _ctx.t2 = name;
                                        result = (0, _ctx.t0)(_ctx.t1, _ctx.t2);
                                        return _ctx.abrupt("return", cloneDeep_default()(result));
                                    case 7:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.getFeatureGateValueByName = function getFeatureGateValueByName(name, defaultConfig) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var result;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        if (!defaultConfig) {
                                            defaultConfig = {
                                                name: name,
                                                pass: false,
                                                reason: "Feature gate name not found"
                                            };
                                        }
                                        _ctx.t0 = (get_default());
                                        _ctx.next = 4;
                                        return _this.getFeatureGateResults();
                                    case 4:
                                        _ctx.t1 = _ctx.sent;
                                        _ctx.t2 = name;
                                        _ctx.t3 = defaultConfig;
                                        result = (0, _ctx.t0)(_ctx.t1, _ctx.t2, _ctx.t3);
                                        return _ctx.abrupt("return", cloneDeep_default()(result));
                                    case 9:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.getExpValueByKey = function getExpValueByKey(key, defaultValue) {
                        this.cacheTagValidUsers(this.initParams.strategy_ids);
                        var currentConfig = this.getStrategiesConfig();
                        return get_default()(currentConfig, [
                            "experiments",
                            key
                        ], defaultValue);
                    };
                    _proto.tagValidUsers = function tagValidUsers(strategyIds) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _this.tagValidUsersUniversal(strategyIds, "trigger");
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.tagValidUsersUniversal = function tagValidUsersUniversal(strategyIds, type) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var saveObj, ts, events;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        if (!(!strategyIds || strategyIds.length === 0)) {
                                            _ctx.next = 4;
                                            break;
                                        }
                                        _this.consoleFun("[Themis SDK] tag valid users must pass in the specified experiment id");
                                        return _ctx.abrupt("return");
                                    case 4:
                                        saveObj = {
                                            lastQueryTimeStamp: Number(new Date())
                                        };
                                        _this.store.setItem("tagValidUsers-config-".concat(_this.paramsHash), saveObj);
                                        ts = new Date().getTime();
                                        events = [];
                                        strategyIds.map(function(item) {
                                            if (item && !isNaN(item)) {
                                                var id = (0, external_bne_utils_uuid_.v4)();
                                                var data = {
                                                    trace_id: _this.initParams.trace_id,
                                                    strategy_id: "".concat(item),
                                                    themis_event_type: type || "get_key",
                                                    themis_app_key: _this.appKey,
                                                    uid: _this.initParams.uid,
                                                    env: _this.initParams.env || "PROD"
                                                };
                                                events.push({
                                                    id: id,
                                                    type: "themis",
                                                    biz: "themis",
                                                    ts: ts,
                                                    data: JSON.stringify(data)
                                                });
                                            }
                                        });
                                        if (events.length) {
                                            _this.api.sendTagValidUsers({
                                                platformType: 3,
                                                events: events
                                            });
                                        }
                                        _ctx.next = 15;
                                        break;
                                    case 12:
                                        _ctx.prev = 12;
                                        _ctx.t0 = _ctx["catch"](0);
                                        console.log(_ctx.t0);
                                    case 15:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    12
                                ]
                            ]);
                        }))();
                    };
                    _proto.cacheTagValidUsers = function cacheTagValidUsers(strategyIds, type) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var cacheTagValidUsersConfig, currentTime;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        if (!(!strategyIds || strategyIds.length === 0)) {
                                            _ctx.next = 4;
                                            break;
                                        }
                                        _this.consoleFun("[Themis SDK] tag valid users must pass in the specified experiment id");
                                        return _ctx.abrupt("return");
                                    case 4:
                                        _ctx.next = 6;
                                        return _this.store.getItem("tagValidUsers-config-".concat(_this.paramsHash));
                                    case 6:
                                        cacheTagValidUsersConfig = _ctx.sent;
                                        currentTime = Number(new Date());
                                        if (!(cacheTagValidUsersConfig && (cacheTagValidUsersConfig === null || cacheTagValidUsersConfig === void 0 ? void 0 : cacheTagValidUsersConfig.lastQueryTimeStamp) && Math.round((currentTime - (cacheTagValidUsersConfig === null || cacheTagValidUsersConfig === void 0 ? void 0 : cacheTagValidUsersConfig.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 11;
                                            break;
                                        }
                                        // eslint-disable-next-line
                                        _this.consoleFun("[Themis SDK] TagValidUsers at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(cacheTagValidUsersConfig === null || cacheTagValidUsersConfig === void 0 ? void 0 : cacheTagValidUsersConfig.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (cacheTagValidUsersConfig === null || cacheTagValidUsersConfig === void 0 ? void 0 : cacheTagValidUsersConfig.lastQueryTimeStamp)) / 1000, "s.\n          There may be another sdk instance having the same information with this instance!"));
                                        return _ctx.abrupt("return");
                                    case 11:
                                        _this.tagValidUsersUniversal(strategyIds, type);
                                        _ctx.next = 17;
                                        break;
                                    case 14:
                                        _ctx.prev = 14;
                                        _ctx.t0 = _ctx["catch"](0);
                                        console.log(_ctx.t0);
                                    case 17:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    14
                                ]
                            ]);
                        }))();
                    };
                    _proto.cacheCodelessErrorReport = function cacheCodelessErrorReport(msg) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var cacheCodelessErrorConfig, currentTime, saveObj, ts, events, id, data;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;
                                        if (_this.codelessId) {
                                            _ctx.next = 4;
                                            break;
                                        }
                                        _this.consoleFun("[Themis SDK] codeless error report must pass in the specified experiment id");
                                        return _ctx.abrupt("return");
                                    case 4:
                                        _ctx.next = 6;
                                        return _this.store.getItem("codeless-error-".concat(_this.paramsHash));
                                    case 6:
                                        cacheCodelessErrorConfig = _ctx.sent;
                                        currentTime = Number(new Date());
                                        if (!(cacheCodelessErrorConfig && (cacheCodelessErrorConfig === null || cacheCodelessErrorConfig === void 0 ? void 0 : cacheCodelessErrorConfig.lastQueryTimeStamp) && Math.round((currentTime - (cacheCodelessErrorConfig === null || cacheCodelessErrorConfig === void 0 ? void 0 : cacheCodelessErrorConfig.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 11;
                                            break;
                                        }
                                        // eslint-disable-next-line
                                        _this.consoleFun("[Themis SDK] CodelessErrorReport at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(cacheCodelessErrorConfig === null || cacheCodelessErrorConfig === void 0 ? void 0 : cacheCodelessErrorConfig.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (cacheCodelessErrorConfig === null || cacheCodelessErrorConfig === void 0 ? void 0 : cacheCodelessErrorConfig.lastQueryTimeStamp)) / 1000, "s."));
                                        return _ctx.abrupt("return");
                                    case 11:
                                        saveObj = {
                                            lastQueryTimeStamp: Number(new Date())
                                        };
                                        _this.store.setItem("codeless-error-".concat(_this.paramsHash), saveObj);
                                        ts = new Date().getTime();
                                        events = [];
                                        id = (0, external_bne_utils_uuid_.v4)();
                                        data = {
                                            trace_id: _this.initParams.trace_id,
                                            strategy_id: _this.codelessId,
                                            themis_event_type: "codeless_error_upload",
                                            themis_app_key: _this.appKey,
                                            uid: _this.initParams.uid,
                                            env: _this.initParams.env || "PROD",
                                            err_desc: JSON.stringify(msg)
                                        };
                                        events.push({
                                            id: id,
                                            type: "themis",
                                            biz: "themis",
                                            ts: ts,
                                            data: JSON.stringify(data)
                                        });
                                        _this.api.sendTagValidUsers({
                                            platformType: 3,
                                            events: events
                                        });
                                        _ctx.next = 24;
                                        break;
                                    case 21:
                                        _ctx.prev = 21;
                                        _ctx.t0 = _ctx["catch"](0);
                                        console.log(_ctx.t0);
                                    case 24:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    21
                                ]
                            ]);
                        }))();
                    };
                    _proto.getStrategyConfigInstantly = function getStrategyConfigInstantly(strategyIds) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var response, strategiesConfigs, toExportConfig, forceEffectStrategies, forceConditions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, exportValues;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _this.cacheTagValidUsers(strategyIds);
                                        _ctx.next = 3;
                                        return _this.api.getLatestAbConfigForThemisSDK((0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, _this.initParams), {
                                            strategy_ids: strategyIds
                                        }));
                                    case 3:
                                        response = _ctx.sent;
                                        strategiesConfigs = get_default()(response, [
                                            "strategies"
                                        ], []);
                                        toExportConfig = {};
                                        forceEffectStrategies = {};
                                        forceConditions = null;
                                        if (!strategiesConfigs) {
                                            _ctx.next = 29;
                                            break;
                                        }
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        _ctx.prev = 10;
                                        _loop = function(_iterator, _step) {
                                            var config = _step.value;
                                            toExportConfig[ExportedType[config === null || config === void 0 ? void 0 : config.type]] = (0, src_object_spread /* default */ .Z)({}, toExportConfig[ExportedType[config === null || config === void 0 ? void 0 : config.type]], config.payload);
                                            switch (config.type) {
                                                case StrategyType.flow:
                                                    {
                                                        var ref, ref11;
                                                        var target = (((ref = _this.cachedConfig) === null || ref === void 0 ? void 0 : ref.flows) || []).find(function(e) {
                                                            return e.id === config.id && e.group_id === config.group_id;
                                                        });
                                                        if (target) {
                                                            // eslint-disable-next-line prefer-object-spread
                                                            target.payload = Object.assign({}, config === null || config === void 0 ? void 0 : config.payload);
                                                        } else if ((ref11 = _this.cachedConfig) === null || ref11 === void 0 ? void 0 : ref11.flows) {
                                                            _this.cachedConfig.flows.push(config);
                                                        } else {
                                                            _this.cachedConfig.flows = [
                                                                config
                                                            ];
                                                        }
                                                    }
                                                    if (config.force_effect) {
                                                        forceEffectStrategies[config.id] = config;
                                                    }
                                                    break;
                                                case StrategyType.universal:
                                                    {
                                                        var ref12, ref13;
                                                        var target1 = (((ref12 = _this.cachedConfig) === null || ref12 === void 0 ? void 0 : ref12.universals) || []).find(function(e) {
                                                            return e.id === config.id && e.group_id === config.group_id;
                                                        });
                                                        if (target1) {
                                                            // eslint-disable-next-line prefer-object-spread
                                                            target1.payload = Object.assign({}, config === null || config === void 0 ? void 0 : config.payload);
                                                        } else if ((ref13 = _this.cachedConfig) === null || ref13 === void 0 ? void 0 : ref13.universals) {
                                                            _this.cachedConfig.universals.push(config);
                                                        } else {
                                                            _this.cachedConfig.universals = [
                                                                config
                                                            ];
                                                        }
                                                    }
                                                    if (config.force_effect) {
                                                        forceEffectStrategies[config.id] = config;
                                                    }
                                                    break;
                                                case StrategyType.condition:
                                                    if (!_this.cachedConfig.conditions) {
                                                        _this.cachedConfig.conditions = {};
                                                    }
                                                    Object.assign(_this.cachedConfig.conditions, config.payload);
                                                    if (config.force_effect) {
                                                        forceConditions = config;
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                        };
                                        // eslint-disable-next-line no-restricted-syntax
                                        for (_iterator = strategiesConfigs[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) _loop(_iterator, _step);
                                        _ctx.next = 19;
                                        break;
                                    case 15:
                                        _ctx.prev = 15;
                                        _ctx.t0 = _ctx["catch"](10);
                                        _didIteratorError = true;
                                        _iteratorError = _ctx.t0;
                                    case 19:
                                        _ctx.prev = 19;
                                        _ctx.prev = 20;
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    case 22:
                                        _ctx.prev = 22;
                                        if (!_didIteratorError) {
                                            _ctx.next = 25;
                                            break;
                                        }
                                        throw _iteratorError;
                                    case 25:
                                        return _ctx.finish(22);
                                    case 26:
                                        return _ctx.finish(19);
                                    case 27:
                                        _ctx.next = 30;
                                        break;
                                    case 29:
                                        {
                                            // eslint-disable-next-line
                                            _this.consoleFun("[Themis SDK] can't get valid config from data center for strategy id: ".concat(strategyIds), "error");
                                        }
                                    case 30:
                                        if (!_this.currentConfig) {
                                            _this.currentConfig = cloneDeep_default()(_this._cachedConfig);
                                        } else {
                                            _this.applyForEffectStrategies(forceEffectStrategies, forceConditions);
                                        }
                                        Promise.resolve().then(function() {
                                            return _this.notify();
                                        });
                                        exportValues = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, toExportConfig), {
                                            experiments: (0, src_object_spread /* default */ .Z)({}, toExportConfig[ExportedType.flow], toExportConfig[ExportedType.condition], toExportConfig[ExportedType["universal-flow"]])
                                        });
                                        return _ctx.abrupt("return", _this.getExportedConfig(exportValues));
                                    case 34:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    10,
                                    15,
                                    19,
                                    27
                                ],
                                [
                                    20, ,
                                    22,
                                    26
                                ]
                            ]);
                        }))();
                    };
                    _proto.getVisualStrategyConfigInstantly = function getVisualStrategyConfigInstantly() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var sharedConfig, currentTime, response, strategiesConfigs, saveObj;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.next = 2;
                                        return _this.store.getItem("strategy-visual-config-".concat(_this.paramsHash));
                                    case 2:
                                        sharedConfig = _ctx.sent;
                                        currentTime = Number(new Date());
                                        if (!(sharedConfig && (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp) && Math.round((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000) < POLLING_INTERVAL)) {
                                            _ctx.next = 7;
                                            break;
                                        }
                                        // eslint-disable-next-line
                                        _this.consoleFun("[Themis SDK] Query request at ".concat(new Date(currentTime).toLocaleString(), " is blocked,\n          this request is too close to last query at ").concat(new Date(sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp).toLocaleString(), ".\n          the distance between two request is ").concat((currentTime - (sharedConfig === null || sharedConfig === void 0 ? void 0 : sharedConfig.lastQueryTimeStamp)) / 1000, "s.\n          There may be another sdk instance having the same information with this instance!"));
                                        return _ctx.abrupt("return", sharedConfig.codeless);
                                    case 7:
                                        _ctx.next = 9;
                                        return _this.api.getLatestAbCodelessConfigForThemisSDK(_this.initParams);
                                    case 9:
                                        response = _ctx.sent;
                                        strategiesConfigs = get_default()(response, [
                                            "strategies"
                                        ], []);
                                        saveObj = {
                                            codeless: strategiesConfigs,
                                            lastQueryTimeStamp: Number(new Date())
                                        };
                                        _this.store.setItem("strategy-visual-config-".concat(_this.paramsHash), saveObj);
                                        return _ctx.abrupt("return", strategiesConfigs);
                                    case 14:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.subscribe = function subscribe(subscriber) {
                        this.subscription.add(subscriber);
                    };
                    _proto.unsubscribe = function unsubscribe(subscriber) {
                        this.subscription.delete(subscriber);
                    };
                    _proto.removeEventCallback = function removeEventCallback() {
                        this.onEventCallback = this.defaultEventCallback;
                    };
                    _proto.onEvent = function onEvent(callback) {
                        if (callback && typeof callback === "function") {
                            this.onEventCallback = callback;
                        }
                    };
                    _proto.applyForEffectStrategies = function applyForEffectStrategies(strategiesMap, conditions) {
                        var ref, ref14, ref15, ref16, ref17;
                        var _obj;
                        this.currentConfig = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, this.currentConfig), (_obj = {}, (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.flow], (ref = this.currentConfig) === null || ref === void 0 ? void 0 : (ref14 = ref.flows) === null || ref14 === void 0 ? void 0 : ref14.map(function(strategy) {
                            return !strategiesMap[strategy.id] ? strategy : strategiesMap[strategy.id];
                        })), (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.universal], (ref15 = this.currentConfig) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.universals) === null || ref16 === void 0 ? void 0 : ref16.map(function(strategy) {
                            return !strategiesMap[strategy.id] ? strategy : strategiesMap[strategy.id];
                        })), (0, _define_property /* default */ .Z)(_obj, ExportedType[StrategyType.condition], !conditions ? (ref17 = this.currentConfig) === null || ref17 === void 0 ? void 0 : ref17.conditions : conditions.payload), _obj));
                    };
                    return StrategyHelper;
                }();
                // sort object
                function sortObject(params) {
                    var sortData = {} // 排序后的对象
                    ;
                    Object.keys(params).sort().forEach(function(key) {
                        sortData[key] = params[key];
                    });
                    return sortData;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+themis@0.0.39_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/themis/dist/esm/visual.js



                /* eslint-disable */ // 自定义字体


                var tmInspectorCustomFont = [{
                        id: 1,
                        family: "Roboto",
                        link: "family=Roboto"
                    },
                    {
                        id: 2,
                        family: "Open Sans",
                        link: "family=Open+Sans"
                    },
                    {
                        id: 3,
                        family: "Lato",
                        link: "family=Lato"
                    },
                    {
                        id: 4,
                        family: "Roboto Condensed",
                        link: "family=Roboto+Condensed"
                    },
                    // {
                    //   id: 5,
                    //   family: 'Montserrat',
                    //   link: 'family=Montserrat',
                    // },
                    {
                        id: 6,
                        family: "Oswald",
                        link: "family=Oswald"
                    },
                    {
                        id: 7,
                        family: "Slabo 27px",
                        link: "family=Slabo+27px"
                    },
                    {
                        id: 8,
                        family: "Source Sans Pro",
                        link: "family=Source+Sans+Pro"
                    },
                    {
                        id: 9,
                        family: "Raleway",
                        link: "family=Raleway"
                    },
                    {
                        id: 10,
                        family: "PT Sans",
                        link: "family=PT+Sans"
                    },
                    {
                        id: 11,
                        family: "Roboto Slab",
                        link: "family=Roboto+Slab"
                    },
                    {
                        id: 12,
                        family: "Merriweather",
                        link: "family=Merriweather"
                    },
                    {
                        id: 13,
                        family: "Ubuntu",
                        link: "family=Ubuntu"
                    },
                    {
                        id: 14,
                        family: "Playfair Display",
                        link: "family=Playfair+Display"
                    },
                    {
                        id: 15,
                        family: "Lora",
                        link: "family=Lora"
                    },
                    {
                        id: 16,
                        family: "PT Serif",
                        link: "family=PT+Serif"
                    },
                    {
                        id: 17,
                        family: "Poppins",
                        link: "family=Poppins"
                    },
                    {
                        id: 18,
                        family: "Arimo",
                        link: "family=Arimo"
                    },
                    {
                        id: 19,
                        family: "Roboto Mono",
                        link: "family=Roboto+Mono"
                    },
                    {
                        id: 20,
                        family: "Titillium Web",
                        link: "family=Titillium+Web"
                    },
                    {
                        id: 21,
                        family: "Muli",
                        link: "family=Muli"
                    },
                    {
                        id: 22,
                        family: "PT Sans Narrow",
                        link: "family=PT+Sans+Narrow"
                    },
                    {
                        id: 23,
                        family: "Nunito",
                        link: "family=Nunito"
                    },
                    {
                        id: 24,
                        family: "Indie Flower",
                        link: "family=Indie+Flower"
                    },
                    {
                        id: 25,
                        family: "Fira Sans",
                        link: "family=Fira+Sans"
                    },
                    {
                        id: 26,
                        family: "Dosis",
                        link: "family=Dosis"
                    },
                    {
                        id: 27,
                        family: "Crimson Text",
                        link: "family=Crimson+Text"
                    },
                    {
                        id: 28,
                        family: "Anton",
                        link: "family=Anton"
                    },
                    {
                        id: 29,
                        family: "Bitter",
                        link: "family=Bitter"
                    },
                    {
                        id: 30,
                        family: "Oxygen",
                        link: "family=Oxygen"
                    },
                    {
                        id: 31,
                        family: "Inconsolata",
                        link: "family=Inconsolata"
                    },
                    {
                        id: 32,
                        family: "Exo 2",
                        link: "family=Exo+2"
                    },
                    {
                        id: 33,
                        family: "Work Sans",
                        link: "family=Work+Sans"
                    },
                    {
                        id: 34,
                        family: "Fjalla One",
                        link: "family=Fjalla+One"
                    },
                    {
                        id: 35,
                        family: "Lobster",
                        link: "family=Lobster"
                    },
                    {
                        id: 36,
                        family: "Josefin Sans",
                        link: "family=Josefin+Sans"
                    },
                    {
                        id: 37,
                        family: "Cabin",
                        link: "family=Cabin"
                    },
                    {
                        id: 38,
                        family: "Yanone Kaffeesatz",
                        link: "family=Yanone+Kaffeesatz"
                    },
                    {
                        id: 39,
                        family: "Libre Baskerville",
                        link: "family=Libre+Baskerville"
                    },
                    {
                        id: 40,
                        family: "Arvo",
                        link: "family=Arvo"
                    },
                    {
                        id: 41,
                        family: "Quicksand",
                        link: "family=Quicksand"
                    },
                    {
                        id: 42,
                        family: "Abel",
                        link: "family=Abel"
                    },
                    {
                        id: 43,
                        family: "Hind",
                        link: "family=Hind"
                    },
                    {
                        id: 44,
                        family: "Abril Fatface",
                        link: "family=Abril+Fatface"
                    },
                    {
                        id: 45,
                        family: "Rubik",
                        link: "family=Rubik"
                    },
                    {
                        id: 46,
                        family: "Karla",
                        link: "family=Karla"
                    },
                    {
                        id: 47,
                        family: "Pacifico",
                        link: "family=Pacifico"
                    },
                    {
                        id: 48,
                        family: "Ubuntu Condensed",
                        link: "family=Ubuntu+Condensed"
                    },
                    {
                        id: 49,
                        family: "Libre Franklin",
                        link: "family=Libre+Franklin"
                    },
                    {
                        id: 50,
                        family: "Acme",
                        link: "family=Acme"
                    },
                    {
                        id: 51,
                        family: "Cormorant Garamond",
                        link: "family=Cormorant+Garamond"
                    },
                    {
                        id: 52,
                        family: "Shadows Into Light",
                        link: "family=Shadows+Into+Light"
                    },
                    {
                        id: 53,
                        family: "letela Round",
                        link: "family=letela+Round"
                    },
                    {
                        id: 54,
                        family: "Bree Serif",
                        link: "family=Bree+Serif"
                    },
                    {
                        id: 55,
                        family: "Merriweather Sans",
                        link: "family=Merriweather+Sans"
                    },
                    {
                        id: 56,
                        family: "Asap",
                        link: "family=Asap"
                    },
                    {
                        id: 57,
                        family: "Nunito Sans",
                        link: "family=Nunito+Sans"
                    },
                    {
                        id: 58,
                        family: "Archivo Narrow",
                        link: "family=Archivo+Narrow"
                    },
                    {
                        id: 59,
                        family: "Dancing Script",
                        link: "family=Dancing+Script"
                    },
                    {
                        id: 60,
                        family: "Signika",
                        link: "family=Signika"
                    },
                    {
                        id: 61,
                        family: "Gloria Hallelujah",
                        link: "family=Gloria+Hallelujah"
                    },
                    {
                        id: 62,
                        family: "Play",
                        link: "family=Play"
                    },
                    {
                        id: 63,
                        family: "Source Serif Pro",
                        link: "family=Source+Serif+Pro"
                    },
                    {
                        id: 64,
                        family: "Questrial",
                        link: "family=Questrial"
                    },
                    {
                        id: 65,
                        family: "Amatic SC",
                        link: "family=Amatic+SC"
                    },
                    {
                        id: 66,
                        family: "Exo",
                        link: "family=Exo"
                    },
                    {
                        id: 67,
                        family: "Maven Pro",
                        link: "family=Maven+Pro"
                    },
                    {
                        id: 68,
                        family: "Rajdhani",
                        link: "family=Rajdhani"
                    },
                    {
                        id: 69,
                        family: "Cairo",
                        link: "family=Cairo"
                    },
                    {
                        id: 70,
                        family: "Kanit",
                        link: "family=Kanit"
                    },
                    {
                        id: 71,
                        family: "Crete Round",
                        link: "family=Crete+Round"
                    },
                    {
                        id: 72,
                        family: "EB Garamond",
                        link: "family=EB+Garamond"
                    },
                    {
                        id: 73,
                        family: "Francois One",
                        link: "family=Francois+One"
                    },
                    {
                        id: 74,
                        family: "Patua One",
                        link: "family=Patua+One"
                    },
                    {
                        id: 75,
                        family: "PT Sans Caption",
                        link: "family=PT+Sans+Caption"
                    },
                    {
                        id: 76,
                        family: "Source Code Pro",
                        link: "family=Source+Code+Pro"
                    },
                    {
                        id: 77,
                        family: "Comfortaa",
                        link: "family=Comfortaa"
                    },
                    {
                        id: 78,
                        family: "Vollkorn",
                        link: "family=Vollkorn"
                    },
                    {
                        id: 79,
                        family: "Rokkitt",
                        link: "family=Rokkitt"
                    },
                    {
                        id: 80,
                        family: "Cuprum",
                        link: "family=Cuprum"
                    },
                    {
                        id: 81,
                        family: "Hind Siliguri",
                        link: "family=Hind+Siliguri"
                    },
                    {
                        id: 82,
                        family: "Berkshire Swash",
                        link: "family=Berkshire+Swash"
                    },
                    {
                        id: 83,
                        family: "Permanent Marker",
                        link: "family=Permanent+Marker"
                    },
                    {
                        id: 84,
                        family: "Alegreya",
                        link: "family=Catamaran"
                    },
                    {
                        id: 85,
                        family: "Catamaran",
                        link: "family=Catamaran"
                    },
                    {
                        id: 86,
                        family: "Russo One",
                        link: "family=Russo+One"
                    },
                    {
                        id: 87,
                        family: "Ropa Sans",
                        link: "family=Ropa+Sans"
                    },
                    {
                        id: 88,
                        family: "Great Vibes",
                        link: "family=Great+Vibes"
                    },
                    {
                        id: 89,
                        family: "Rokkitt",
                        link: "family=Rokkitt"
                    },
                    {
                        id: 90,
                        family: "Shrikhand",
                        link: "family=Shrikhand"
                    },
                    {
                        id: 91,
                        family: "Pathway Gothic One",
                        link: "family=Pathway+Gothic+One"
                    },
                    {
                        id: 92,
                        family: "Old Standard TT",
                        link: "family=Old+Standard+TT"
                    },
                    {
                        id: 93,
                        family: "Teko",
                        link: "family=Teko"
                    },
                    {
                        id: 94,
                        family: "Cookie",
                        link: "family=Cookie"
                    },
                    {
                        id: 95,
                        family: "Heebo",
                        link: "family=Heebo"
                    },
                    {
                        id: 96,
                        family: "Righteous",
                        link: "family=Righteous"
                    },
                    {
                        id: 97,
                        family: "Cinzel",
                        link: "family=Cinzel"
                    },
                    {
                        id: 98,
                        family: "Josefin Slab",
                        link: "family=Josefin+Slab"
                    },
                    {
                        id: 99,
                        family: "Pragati Narrow",
                        link: "family=Pragati+Narrow"
                    },
                    {
                        id: 100,
                        family: "Courgette",
                        link: "family=Courgette"
                    },
                    {
                        id: 101,
                        family: "Satisfy",
                        link: "family=Satisfy"
                    },
                    {
                        id: 102,
                        family: "Noticia Text",
                        link: "family=Noticia+Text"
                    },
                    {
                        id: 103,
                        family: "Orbitron",
                        link: "family=Orbitron"
                    },
                    {
                        id: 104,
                        family: "Playfair Display SC",
                        link: "family=Playfair+Display+SC"
                    },
                    {
                        id: 105,
                        family: "Alegreya Sans",
                        link: "family=Alegreya+Sans"
                    },
                    {
                        id: 106,
                        family: "Passion One",
                        link: "family=Passion+One"
                    },
                    {
                        id: 107,
                        family: "Quattrocento Sans",
                        link: "family=Quattrocento+Sans"
                    },
                    {
                        id: 108,
                        family: "Philosopher",
                        link: "family=Philosopher"
                    },
                    {
                        id: 109,
                        family: "Domine",
                        link: "family=Domine"
                    },
                    {
                        id: 110,
                        family: "Lobster Two",
                        link: "family=Lobster Two"
                    },
                    {
                        id: 111,
                        family: "Kaushan Script",
                        link: "family=Kaushan+Script"
                    },
                    {
                        id: 112,
                        family: "News Cycle",
                        link: "family=News+Cycle"
                    },
                    {
                        id: 113,
                        family: "Amaranth",
                        link: "family=Amaranth"
                    },
                    {
                        id: 114,
                        family: "Monda",
                        link: "family=Monda"
                    },
                    {
                        id: 115,
                        family: "ABeeZee",
                        link: "family=ABeeZee"
                    },
                    {
                        id: 116,
                        family: "Istok Web",
                        link: "family=Istok+Web"
                    },
                    {
                        id: 117,
                        family: "Cardo",
                        link: "family=Cardo"
                    },
                    {
                        id: 118,
                        family: "Gudea",
                        link: "family=Gudea"
                    },
                    {
                        id: 119,
                        family: "Karma",
                        link: "family=Karma"
                    },
                    {
                        id: 120,
                        family: "Archivo Black",
                        link: "family=Archivo+Black"
                    },
                    {
                        id: 121,
                        family: "Concert One",
                        link: "family=Concert+One"
                    },
                    {
                        id: 122,
                        family: "Assistant",
                        link: "family=Assistant"
                    },
                    {
                        id: 123,
                        family: "Quattrocento",
                        link: "family=Quattrocento"
                    },
                    {
                        id: 124,
                        family: "Tinos",
                        link: "family=Tinos"
                    },
                    {
                        id: 125,
                        family: "Amiri",
                        link: "family=Amiri"
                    },
                    {
                        id: 126,
                        family: "Arima Madurai",
                        link: "family=Arima+Madurai"
                    },
                    {
                        id: 127,
                        family: "Sacramento",
                        link: "family=Sacramento"
                    },
                    {
                        id: 128,
                        family: "Alfa Slab One",
                        link: "family=Alfa+Slab+One"
                    },
                    {
                        id: 129,
                        family: "Sanchez",
                        link: "family=Sanchez"
                    },
                    {
                        id: 130,
                        family: "Bangers",
                        link: "family=Bangers"
                    },
                    {
                        id: 131,
                        family: "Arapey",
                        link: "family=Arapey"
                    },
                    {
                        id: 132,
                        family: "Didact Gothic",
                        link: "family=Didact+Gothic"
                    },
                    {
                        id: 133,
                        family: "Pontano Sans",
                        link: "family=Pontano+Sans"
                    },
                    {
                        id: 134,
                        family: "Cantarell",
                        link: "family=Cantarell"
                    },
                    {
                        id: 135,
                        family: "Handlee",
                        link: "family=Handlee"
                    },
                    {
                        id: 136,
                        family: "Fredoka One",
                        link: "family=Fredoka+One"
                    },
                    {
                        id: 137,
                        family: "Fira Sans Condensed",
                        link: "family=Fira+Sans+Condensed"
                    },
                    {
                        id: 138,
                        family: "Jura",
                        link: "family=Jura"
                    },
                    {
                        id: 139,
                        family: "Boogaloo",
                        link: "family=Boogaloo"
                    },
                    {
                        id: 140,
                        family: "Volkhov",
                        link: "family=Volkhov"
                    },
                    {
                        id: 141,
                        family: "Prompt",
                        link: "family=Prompt"
                    },
                    {
                        id: 142,
                        family: "Kalam",
                        link: "family=Kalam"
                    },
                    {
                        id: 143,
                        family: "Hammersmith One",
                        link: "family=Hammersmith+One"
                    },
                    {
                        id: 144,
                        family: "Cabin Condensed",
                        link: "family=Cabin+Condensed"
                    },
                    {
                        id: 145,
                        family: "Tangerine",
                        link: "family=Tangerine"
                    },
                    {
                        id: 146,
                        family: "Armata",
                        link: "family=Armata"
                    },
                    {
                        id: 147,
                        family: "Caveat",
                        link: "family=Caveat"
                    },
                    {
                        id: 148,
                        family: "BenchNine",
                        link: "family=BenchNine"
                    },
                    {
                        id: 149,
                        family: "Economica",
                        link: "family=Economica"
                    },
                    {
                        id: 150,
                        family: "Coustard",
                        link: "family=Coustard"
                    },
                    {
                        id: 151,
                        family: "Prata",
                        link: "family=Prata"
                    },
                ];

                function GetSortOrder(e) {
                    return function(t, r) {
                        return t[e] > r[e] ? 1 : t[e] < r[e] ? -1 : 0;
                    };
                }

                function getTheme() {
                    try {
                        var cookieStr = document.cookie;
                        var cookieArr = cookieStr.split(";");
                        for (var i = 0; i < cookieArr.length; i++) {
                            var keyValue = cookieArr[i].split("=");
                            if (keyValue[0].trim() === "theme") {
                                return keyValue[1];
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                    return "light";
                }
                tmInspectorCustomFont = tmInspectorCustomFont.sort(GetSortOrder("family"));
                var VisualAbTest = /*#__PURE__*/ function() {
                    "use strict";

                    function VisualAbTest() {
                        (0, _class_call_check /* default */ .Z)(this, VisualAbTest);
                        this.helper = {};
                        this.lazyElements = [];
                        this.visualTarget = {};
                        this.existAttrElements = [];
                        this.existCssElements = [];
                        this.reportErrorElements = false;
                        this.reportErrorMsg = {};
                    }
                    var _proto = VisualAbTest.prototype;
                    _proto.reRenderLazyElement = function reRenderLazyElement() {
                        var _this = this;
                        // 利用MutationObserver监听页面变化
                        var target = document.body;
                        var reObserve = false;
                        var observe1 = new MutationObserver(function(_, observe) {
                            // 不符合目标页面的直接关闭
                            if (!checkValidTargetReg(_this.visualTarget)) {
                                // 关闭监听 防止无限循环
                                observe.disconnect();
                                return;
                            }
                            var theme = getTheme();
                            var elements = _this.lazyElements.filter(function(item) {
                                return item.theme === theme;
                            });
                            for (var t = 0; t < elements.length; t++) {
                                var ele = document.querySelector(elements[t].selector);
                                if (ele) {
                                    reObserve = true;
                                    // 关闭监听 防止无限循环
                                    observe.disconnect();
                                    if ("html" === elements[t].attr) {
                                        ele.innerText = elements[t].new;
                                    } else if ("css" === elements[t].attr) {
                                        var ele1 = document.querySelector(elements[t].selector);
                                        if (ele1) {
                                            ele1.style.cssText = elements[t].cssText;
                                        }
                                    } else {
                                        ele.setAttribute(elements[t].attr, elements[t].new);
                                    }
                                }
                            }
                            // 重新开启监听
                            if (reObserve) {
                                setTimeout(function() {
                                    observe.observe(target, {
                                        childList: true,
                                        attributes: true,
                                        subtree: true
                                    });
                                    reObserve = false;
                                });
                            }
                        });
                        observe1.observe(target, {
                            childList: true,
                            attributes: true,
                            subtree: true
                        });
                    };
                    _proto.renderAttrs = function renderAttrs() {
                        // 渲染attr类型
                        var attrsPromise = [];
                        if (this.existAttrElements.length) {
                            attrsPromise = this.existAttrElements.map(function(item) {
                                if ("html" === item.elementConfig.attr) {
                                    return new Promise(function(resolve, _) {
                                        item.targetEle.innerText = item.elementConfig.new;
                                        resolve("");
                                    });
                                } else if ("src" === item.elementConfig.attr) {
                                    return new Promise(function(resolve, _) {
                                        item.targetEle.setAttribute(item.elementConfig.attr, item.elementConfig.new);
                                        item.targetEle.onload = function() {
                                            resolve("");
                                        };
                                        item.targetEle.onerror = function() {
                                            item.targetEle.setAttribute(item.elementConfig.attr, item.elementConfig.old);
                                            resolve("");
                                        };
                                    });
                                } else {
                                    return new Promise(function(resolve, _) {
                                        item.targetEle.setAttribute(item.elementConfig.attr, item.elementConfig.new);
                                        resolve("");
                                    });
                                }
                            });
                        }
                        return Promise.all(attrsPromise);
                    };
                    _proto.renderAttrsAndCss = function renderAttrsAndCss() {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        if (!_this.reportErrorElements) {
                                            _ctx.next = 3;
                                            break;
                                        }
                                        // 错误上报
                                        _this.helper.cacheCodelessErrorReport(_this.reportErrorMsg);
                                        return _ctx.abrupt("return");
                                    case 3:
                                        _ctx.next = 5;
                                        return _this.renderAttrs();
                                    case 5:
                                        // 渲染css类型
                                        if (_this.existCssElements.length) {
                                            _this.existCssElements.forEach(function(item) {
                                                var originalStyle = item.targetEle.style.cssText;
                                                if (!originalStyle.endsWith(";")) {
                                                    originalStyle = originalStyle = ";";
                                                }
                                                var style = originalStyle + item.cssText;
                                                item.targetEle.style.cssText = style;
                                            });
                                        }
                                        // 渲染懒加载类型
                                        if (_this.lazyElements.length) {
                                            // 如果有异步渲染就代表需要开启监听
                                            _this.reRenderLazyElement();
                                        }
                                        // 打上tag valid标记
                                        _this.helper.tagValidUsers([+_this.helper.codelessId]);
                                    case 8:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    };
                    _proto.LoadLocalCSSChanges = function LoadLocalCSSChanges(elements) {
                        var isImportant = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        if (this.reportErrorElements) {
                            return;
                        }
                        var n = {};
                        for (var o = 0; o < elements.length; o++) {
                            var selector = elements[o].selector;
                            if (selector) {
                                n[selector] || (n[selector] = []);
                                n[selector].push({
                                    key: elements[o].key,
                                    value: elements[o].value,
                                    isExistElement: elements[o].isExistElement,
                                    fullPath: elements[o].fullPath
                                });
                            }
                        }
                        this.existCssElements = [];
                        for (var a in n) {
                            var s = "";
                            for (var o1 = 0; o1 < n[a].length; o1++) {
                                var v = n[a][o1].value;
                                for (var l in v) {
                                    var c = v[l];
                                    s += l + ": " + c + (isImportant ? "!important" : "") + ";";
                                    if ("font-family" == l) {
                                        for (var f = 0; f < tmInspectorCustomFont.length; f++)
                                            if (c == tmInspectorCustomFont[f].family) {
                                                var d = "https://fonts.googleapis.com/css?" + tmInspectorCustomFont[f].link;
                                                if (!document.querySelector("link[href='" + d + "']")) {
                                                    var linkEle = document.createElement("link");
                                                    linkEle.setAttribute("rel", "stylesheet");
                                                    linkEle.setAttribute("href", d);
                                                    document.getElementsByTagName("head")[0].appendChild(linkEle);
                                                }
                                            }
                                    }
                                }
                            }
                            var ele = document.querySelector(a);
                            if (ele) {
                                this.existCssElements.push({
                                    targetEle: ele,
                                    cssText: s
                                });
                            } else {
                                var isExistElement = n[a][0].isExistElement;
                                if (isExistElement) {
                                    this.reportErrorElements = true;
                                    this.reportErrorMsg = {
                                        reason: "Existing css element class changes",
                                        type: "css",
                                        selector: a
                                    };
                                    return;
                                }
                                this.lazyElements.push({
                                    attr: "css",
                                    selector: a,
                                    cssText: s
                                });
                            }
                        }
                    };
                    _proto.LoadLocalAttrChanges = function LoadLocalAttrChanges(elements) {
                        this.existAttrElements = [];
                        for (var t = 0; t < elements.length; t++) {
                            var config = elements[t];
                            var ele = document.querySelector(config.selector);
                            // 如果初始渲染能找到
                            if (ele) {
                                this.existAttrElements.push({
                                    targetEle: ele,
                                    elementConfig: config
                                });
                            } else {
                                // 是否添加了isExistElement
                                if (config.isExistElement) {
                                    this.reportErrorElements = true;
                                    this.reportErrorMsg = {
                                        reason: "selector element does not exist",
                                        type: "attrs",
                                        config: config
                                    };
                                    return;
                                } else {
                                    // 不能找到就代表是异步渲染
                                    this.lazyElements.push(elements[t]);
                                }
                            }
                        }
                    };
                    _proto.init = function init(value, visualTarget, helper) {
                        var _this = this;
                        return (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                            var ref, ref1, theme, themeValueAttrs, themeValueCss;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        _ctx.prev = 0;;
                                        _this.helper = helper;
                                        _this.visualTarget = visualTarget;
                                        theme = getTheme();
                                        themeValueAttrs = (ref = value.attrs) === null || ref === void 0 ? void 0 : ref.filter(function(item) {
                                            return item.theme === theme;
                                        });
                                        themeValueCss = (ref1 = value.css) === null || ref1 === void 0 ? void 0 : ref1.filter(function(item) {
                                            return item.theme === theme;
                                        });
                                        themeValueAttrs && _this.LoadLocalAttrChanges(themeValueAttrs);
                                        themeValueCss && _this.LoadLocalCSSChanges(themeValueCss);
                                        _ctx.next = 11;
                                        return _this.renderAttrsAndCss();
                                    case 11:
                                        showHtml();
                                        _ctx.next = 18;
                                        break;
                                    case 14:
                                        _ctx.prev = 14;
                                        _ctx.t0 = _ctx["catch"](0);
                                        showHtml();
                                        console.log(_ctx.t0);
                                    case 18:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    0,
                                    14
                                ]
                            ]);
                        }))();
                    };
                    return VisualAbTest;
                }();
                var ALL_LANGUAGES = Object.freeze({
                    en: "English",
                    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
                    "zh-TC": "\u7E41\u9AD4\u4E2D\u6587",
                    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
                    es: "Espa\xf1ol (Espa\xf1a)",
                    "es-LA": "Espa\xf1ol (Latinoam\xe9rica)",
                    fr: "Fran\xe7ais",
                    vi: "Ti\u1EBFng Vi\u1EC7t",
                    tr: "T\xfcrk\xe7e",
                    it: "Italiano",
                    pl: "Polski",
                    id: "Bahasa Indonesia",
                    "uk-UA": "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
                    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
                    "en-AU": "English (Australia)",
                    "pt-BR": "Portugu\xeas (Brasil)",
                    "en-IN": "English (India)",
                    "en-NG": "English (Nigeria)",
                    ro: "Rom\xe2n\u0103",
                    bg: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
                    cs: "\u010Ce\u0161tina",
                    lv: "latvie\u0161u valoda",
                    sv: "Svenska",
                    pt: "Portugu\xeas",
                    "es-MX": "Espa\xf1ol (M\xe9xico)",
                    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
                    sk: "Sloven\u010Dina",
                    sl: "Sloven\u0161\u010Dina",
                    "es-AR": "Espa\xf1ol (Argentina)",
                    "fr-AF": "Fran\xe7ais (Afrique)",
                    "en-KZ": "English (Kazakhstan)",
                    "en-ZA": "English (South Africa)",
                    "en-NZ": "English (New Zealand)",
                    "en-BH": "English (Bahrain)",
                    "ar-BH": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0628\u062D\u0631\u064A\u0646)",
                    "ru-UA": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u0423\u043A\u0440\u0430\u0438\u043D\u0430)",
                    de: "Deutsch (Schweiz)",
                    "kk-KZ": "\u049A\u0430\u0437\u0430\u049B\u0448\u0430 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)",
                    "ru-KZ": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)",
                    kz: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430",
                    ja: "\u65E5\u672C\u8A9E",
                    "da-DK": "Dansk",
                    "en-AE": "English (UAE)",
                    "en-JP": "English (Japan)"
                });
                var parseUrl = function(url) {
                    var result = {};
                    var keys = [
                        "href",
                        "origin",
                        "protocol",
                        "host",
                        "hostname",
                        "port",
                        "pathname",
                        "search",
                        "hash"
                    ];
                    var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
                    var match = regexp.exec(url);
                    if (match) {
                        for (var i = keys.length - 1; i >= 0; --i) {
                            result[keys[i]] = match[i] ? match[i] : "";
                        }
                    }
                    return result;
                };
                var convertUrlToCommon = function(url) {
                    url = url.split("?")[0];
                    var formatReg = "";
                    var ref = parseUrl(url),
                        pathname = ref.pathname,
                        origin = ref.origin;
                    if (pathname.startsWith("/{language}")) {
                        formatReg = url;
                    } else {
                        var ref2;
                        var pathArr = pathname === null || pathname === void 0 ? void 0 : pathname.split("/");
                        if (!pathArr[1] || !((ref2 = Object.keys(ALL_LANGUAGES)) === null || ref2 === void 0 ? void 0 : ref2.includes(pathArr[1]))) {
                            formatReg = "".concat(origin, "/{language}").concat(pathname);
                        } else {
                            formatReg = "".concat(origin, "/{language}").concat(pathname === null || pathname === void 0 ? void 0 : pathname.replace("/".concat(pathArr[1]), ""));
                        }
                    }
                    if (formatReg.endsWith("/")) {
                        formatReg = formatReg.substring(0, formatReg.length - 1);
                    }
                    return formatReg;
                };

                function generateCssCode(groups, ssrLoading, theme) {
                    try {
                        var styles = {};
                        for (var k in groups) {
                            var data = groups[k].data;
                            var attrs = data.attrs,
                                css = data.css;
                            attrs === null || attrs === void 0 ? void 0 : attrs.forEach(function(element) {
                                styles[element.fullPath] = true;
                            });
                            css === null || css === void 0 ? void 0 : css.forEach(function(element) {
                                styles[element.fullPath] = true;
                            });
                        }
                        var styleStrArr = [];
                        if (!ssrLoading) {
                            for (var s in styles) {
                                var everyStyle = s + " {\n" + "opacity:0!important" + "\n}";
                                styleStrArr.push(everyStyle);
                            }
                        } else {
                            var skeletonGrey = "#f0f0f0";
                            var backgroundColor = "#fff";
                            var backgroundImg = "linear-gradient(100deg,\n      transparent 30%,\n      hsla(0, 0%, 100%, 0.3) 40%,\n      hsla(0, 0%, 100%, 0.7) 50%,\n      hsla(0, 0%, 100%, 0.3) 60%,\n      transparent 70%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%)";
                            if (theme !== "light") {
                                skeletonGrey = "#2b3139";
                                backgroundColor = "#181a20";
                                backgroundImg = "linear-gradient(100deg,\n      transparent 30%,\n      hsl(225deg 14% 11% / 30%) 40%,\n      hsl(225deg 14% 11% / 70%) 50%,\n      hsl(225deg 14% 11% / 30%) 60%,\n      transparent 70%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%),\n    linear-gradient(90deg, var(--skeleton-grey), var(--skeleton-grey) 100%)";
                            }
                            for (var s1 in styles) {
                                var everyStyle1 = "".concat(s1, " {\n  position: relative!important;\n}\n\n  ").concat(s1, '::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  --skeleton-grey: ').concat(skeletonGrey, ";\n  background-repeat: no-repeat;\n  background-color: ").concat(backgroundColor, ";\n  background-image: ").concat(backgroundImg, ";\n  background-position: -150px 0px, 20px 20%,\n    20px 40%,\n    20px 60%,\n    20px 80%;\n  background-size: 30% 100%,\n    30% 10%,\n    45% 10%,\n    65% 10%,\n    80% 10%;\n  animation: shine 1.5s infinite;\n}");
                                styleStrArr.push(everyStyle1);
                            }
                            var animation = "\n    @keyframes shine {\n    to {\n      background-position: 150% 0px, 20px 20%,\n        20px 40%,\n        20px 60%,\n        20px 80%;\n    }\n  }";
                            styleStrArr.push(animation);
                        }
                        return styleStrArr.join("\n");
                    } catch (error) {
                        console.log(error);
                    }
                }

                function checkValidTargetRegSsr(url, visualTarget) {
                    var realPath = url.split("?")[0];
                    var reg = visualTarget.reg,
                        path = visualTarget.path;
                    if (reg) {
                        var newReg = new RegExp(reg);
                        if (newReg.test(realPath)) {
                            return true;
                        }
                    }
                    if (path) {
                        if (realPath === path) {
                            return true;
                        }
                    }
                    return false;
                }
                // codeless server render
                function codelessServerRender(documentProps, req, codelessAppAuth) {
                    var ssrLoading = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
                    return new Promise(function(resolve, _) {
                        try {
                            var ref3;
                            var pathname = "";
                            if (req === null || req === void 0 ? void 0 : req.pathname) {
                                pathname = req === null || req === void 0 ? void 0 : req.pathname;
                            } else {
                                pathname = req === null || req === void 0 ? void 0 : req.url;
                            }
                            var realUrl = "https://" + (req === null || req === void 0 ? void 0 : (ref3 = req.headers) === null || ref3 === void 0 ? void 0 : ref3.host) + pathname;
                            var currentUrl = convertUrlToCommon(realUrl);
                            var initSsrflag = codelessAppAuth === null || codelessAppAuth === void 0 ? void 0 : codelessAppAuth.url.some(function(item) {
                                return convertUrlToCommon(item) === currentUrl;
                            });
                            if (!initSsrflag) {
                                resolve("");
                                return;
                            }
                            // 发请求获取后端结果然后注入
                            var auth = codelessAppAuth.auth;
                            var api = themisApiInit(auth);
                            api.getCodelessSsrInfo(auth).then(function(res) {
                                var data = res;
                                var ssr_infos = data === null || data === void 0 ? void 0 : data.ssr_infos;
                                var css = "";
                                if (!ssr_infos || !ssr_infos.length) {
                                    resolve("");
                                    return;
                                }
                                var exp = ssr_infos.find(function(item) {
                                    return checkValidTargetRegSsr(realUrl, item === null || item === void 0 ? void 0 : item.target_page);
                                });
                                if (!exp) {
                                    resolve("");
                                    return;
                                }
                                var groups = exp.groups;
                                if (!groups || !Object.keys(groups).length) {
                                    resolve("");
                                    return;
                                }
                                // 去掉控制组的代码
                                delete groups["1"];
                                // 在这里判断主题
                                var theme = "light";
                                try {
                                    var ref;
                                    var cookieStr = req === null || req === void 0 ? void 0 : (ref = req.headers) === null || ref === void 0 ? void 0 : ref.cookie;
                                    var cookieArr = cookieStr.split(";");
                                    for (var i = 0; i < cookieArr.length; i++) {
                                        var keyValue = cookieArr[i].split("=");
                                        if (keyValue[0].trim() === "theme") {
                                            theme = keyValue[1];
                                            break;
                                        }
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                                css = generateCssCode(groups, ssrLoading, theme);
                                if (!css) {
                                    resolve("");
                                    return;
                                }
                                var headTag = {
                                    tagName: "style",
                                    attrs: {
                                        id: "THEMIS_CODELESS_SSR_CSS"
                                    },
                                    innerHTML: css
                                };
                                documentProps.headTags.unshift(headTag);
                                resolve("");
                            }, function(err) {
                                console.log(err);
                                resolve("");
                            });
                            // 兼容报错
                            setTimeout(function() {
                                resolve("");
                            }, 3000);
                        } catch (error) {
                            console.log(error);
                            resolve("");
                        }
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+themis@0.0.39_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/themis/dist/esm/index.js







                /* eslint-disable @typescript-eslint/no-this-alias */


                // @ts-ignore

                // codeless hide html
                var showHtml = function() {
                    // @ts-ignore
                    try {
                        var hideThemisWrapperEles = document.querySelectorAll("#themis_wrapper_2023329");
                        hideThemisWrapperEles.forEach(function(item) {
                            // @ts-ignore
                            item.style.opacity = 1;
                        });
                        // @ts-ignore
                        // 把ssr阶段的样式表直接移除
                        var ssrElement = document.getElementById("THEMIS_CODELESS_SSR_CSS");
                        ssrElement === null || ssrElement === void 0 ? void 0 : ssrElement.remove();
                    } catch (error) {
                        console.log("show html error");
                    }
                };
                // get login cookie
                function getLoginCookie() {
                    try {
                        var cookieStr = document.cookie;
                        var cookieArr = cookieStr.split(";");
                        for (var i = 0; i < cookieArr.length; i++) {
                            var keyValue = cookieArr[i].split("=");
                            if (keyValue[0].trim() === "cr00") {
                                return "isLogined";
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                    return "unLogined";
                }
                var StrategyHelperWeb = /*#__PURE__*/ function(StrategyHelper1) {
                    "use strict";
                    (0, _inherits /* default */ .Z)(StrategyHelperWeb, StrategyHelper1);
                    var _super = (0, _create_super /* default */ .Z)(StrategyHelperWeb);

                    function StrategyHelperWeb(initParams, initOptions) {
                        (0, _class_call_check /* default */ .Z)(this, StrategyHelperWeb);
                        var _this;
                        _this = _super.call(this, initParams, initOptions);
                        var ref = parseInitOptions(initOptions),
                            authHeader = ref.authHeader,
                            baseHost = ref.baseHost,
                            networkLibrary = ref.networkLibrary;
                        if (baseHost && !baseHost.includes("/bapi/themis/api")) {
                            baseHost += "/bapi/themis/api/";
                        }
                        var api = themis_themisApiInit(authHeader, baseHost, networkLibrary);
                        var store = localforage_default().createInstance({
                            name: "themis-".concat(_this.appKey, "-").concat(_this.initParams.platform || 3)
                        });
                        _this.generateStore(store);
                        _this.generateApi(api);
                        return _this;
                    }
                    return StrategyHelperWeb;
                }(StrategyHelper);
                /* harmony default export */
                const dist_esm = ({
                    init: function() {
                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(initParams, initOptions, subscriber) {
                            var visualAbTest, helper, visualResArr, properExp, visualData, visualTarget, id, ssrElement, helper1;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        if (false) {}
                                        if (!initParams.codeless) {
                                            _ctx.next = 38;
                                            break;
                                        }
                                        _ctx.prev = 2;
                                        // 不管怎样 3s之后都会显示所有的元素
                                        setTimeout(function() {
                                            showHtml();
                                        }, 3000);
                                        initParams.strategy_ids = initParams.strategy_ids || [];
                                        initParams.current_url = window.location.href.split("?")[0] // eslint-disable-line
                                        ;
                                        if (initParams.custom_fields) {
                                            initParams.custom_fields = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, initParams.custom_fields), {
                                                isCodelessHomepageLogin: getLoginCookie()
                                            });
                                        } else {
                                            initParams.custom_fields = {
                                                isCodelessHomepageLogin: getLoginCookie()
                                            };
                                        }
                                        visualAbTest = new VisualAbTest();
                                        helper = new StrategyHelperWeb(initParams, initOptions);
                                        helper.generateParamsHash(initParams);
                                        _ctx.next = 12;
                                        return helper.getVisualStrategyConfigInstantly();
                                    case 12:
                                        visualResArr = _ctx.sent;;
                                        if (visualResArr && visualResArr.length) {
                                            properExp = visualResArr.find(function(item) {
                                                return checkValidTargetReg(item === null || item === void 0 ? void 0 : item.target_page);
                                            });
                                        }
                                        if (properExp) {
                                            _ctx.next = 19;
                                            break;
                                        }
                                        showHtml();
                                        helper.consoleFun("[Themis SDK] The current url address is not the experiment target page\uFF01", "error");
                                        return _ctx.abrupt("return");
                                    case 19:
                                        visualData = properExp && properExp.payload;
                                        visualTarget = properExp && (properExp === null || properExp === void 0 ? void 0 : properExp.target_page);
                                        id = properExp && (properExp === null || properExp === void 0 ? void 0 : properExp.id);
                                        helper.codelessId = id;
                                        if (!initParams.ssr) {
                                            _ctx.next = 28;
                                            break;
                                        }
                                        ssrElement = document.getElementById("THEMIS_CODELESS_SSR_CSS");
                                        if (ssrElement) {
                                            _ctx.next = 28;
                                            break;
                                        }
                                        showHtml();
                                        return _ctx.abrupt("return");
                                    case 28:
                                        if (visualData && Object.keys(visualData).length) {
                                            if (document.readyState === "complete") {
                                                visualAbTest.init(visualData, visualTarget, helper);
                                            } else {
                                                document.addEventListener("readystatechange", function() {
                                                    if (document.readyState === "complete") {
                                                        visualAbTest.init(visualData, visualTarget, helper);
                                                    }
                                                });
                                            }
                                        } else {
                                            // control组 打上tag valid标记
                                            helper.tagValidUsers([+id]);
                                            showHtml();
                                        }
                                        _ctx.next = 36;
                                        break;
                                    case 31:
                                        _ctx.prev = 31;
                                        _ctx.t0 = _ctx["catch"](2);
                                        // @ts-ignore
                                        // eslint-disable-next-line
                                        showHtml();
                                        console.log("[Themis SDK] ".concat(_ctx.t0));
                                        return _ctx.abrupt("return");
                                    case 36:
                                        _ctx.next = 52;
                                        break;
                                    case 38:
                                        _ctx.prev = 38;
                                        helper1 = new StrategyHelperWeb(initParams, initOptions);
                                        helper1.generateParamsHash(initParams);
                                        subscriber && helper1.subscribe(subscriber);
                                        helper1.cacheTagValidUsers(initParams.strategy_ids);
                                        _ctx.next = 45;
                                        return helper1.launch();
                                    case 45:
                                        return _ctx.abrupt("return", helper1);
                                    case 48:
                                        _ctx.prev = 48;
                                        _ctx.t1 = _ctx["catch"](38);
                                        console.log("[Themis SDK] ".concat(_ctx.t1));
                                        return _ctx.abrupt("return");
                                    case 52:
                                        _ctx.next = 56;
                                        break;
                                    case 54:
                                        // eslint-disable-next-line
                                        console.log("[Themis SDK] The current SDK is only allowed to use on the web  or the Electron side");
                                        return _ctx.abrupt("return", Promise.resolve(undefined));
                                    case 56:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    2,
                                    31
                                ],
                                [
                                    38,
                                    48
                                ]
                            ]);
                        }));
                        return function(initParams, initOptions, subscriber) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    initExpAndFg: function() {
                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(initParams, initOptions, subscriber) {
                            var visualAbTest, helper, visualResArr, properExp, visualData, visualTarget, id, ssrElement, helper2;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        if (false) {}
                                        if (!initParams.codeless) {
                                            _ctx.next = 38;
                                            break;
                                        }
                                        _ctx.prev = 2;
                                        // 不管怎样 3s之后都会显示所有的元素
                                        setTimeout(function() {
                                            showHtml();
                                        }, 3000);
                                        initParams.strategy_ids = initParams.strategy_ids || [];
                                        initParams.current_url = window.location.href.split("?")[0] // eslint-disable-line
                                        ;
                                        if (initParams.custom_fields) {
                                            initParams.custom_fields = (0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, initParams.custom_fields), {
                                                isCodelessHomepageLogin: getLoginCookie()
                                            });
                                        } else {
                                            initParams.custom_fields = {
                                                isCodelessHomepageLogin: getLoginCookie()
                                            };
                                        }
                                        visualAbTest = new VisualAbTest();
                                        helper = new StrategyHelperWeb(initParams, initOptions);
                                        helper.generateParamsHash(initParams);
                                        _ctx.next = 12;
                                        return helper.getVisualStrategyConfigInstantly();
                                    case 12:
                                        visualResArr = _ctx.sent;;
                                        if (visualResArr && visualResArr.length) {
                                            properExp = visualResArr.find(function(item) {
                                                return checkValidTargetReg(item === null || item === void 0 ? void 0 : item.target_page);
                                            });
                                        }
                                        if (properExp) {
                                            _ctx.next = 19;
                                            break;
                                        }
                                        showHtml();
                                        helper.consoleFun("[Themis SDK] The current url address is not the experiment target page\uFF01", "error");
                                        return _ctx.abrupt("return");
                                    case 19:
                                        visualData = properExp && properExp.payload;
                                        visualTarget = properExp && (properExp === null || properExp === void 0 ? void 0 : properExp.target_page);
                                        id = properExp && (properExp === null || properExp === void 0 ? void 0 : properExp.id);
                                        helper.codelessId = id;
                                        if (!initParams.ssr) {
                                            _ctx.next = 28;
                                            break;
                                        }
                                        ssrElement = document.getElementById("THEMIS_CODELESS_SSR_CSS");
                                        if (ssrElement) {
                                            _ctx.next = 28;
                                            break;
                                        }
                                        showHtml();
                                        return _ctx.abrupt("return");
                                    case 28:
                                        if (visualData && Object.keys(visualData).length) {
                                            if (document.readyState === "complete") {
                                                visualAbTest.init(visualData, visualTarget, helper);
                                            } else {
                                                document.addEventListener("readystatechange", function() {
                                                    if (document.readyState === "complete") {
                                                        visualAbTest.init(visualData, visualTarget, helper);
                                                    }
                                                });
                                            }
                                        } else {
                                            // control组 打上tag valid标记
                                            helper.tagValidUsers([+id]);
                                            showHtml();
                                        }
                                        _ctx.next = 36;
                                        break;
                                    case 31:
                                        _ctx.prev = 31;
                                        _ctx.t0 = _ctx["catch"](2);
                                        // @ts-ignore
                                        // eslint-disable-next-line
                                        showHtml();
                                        console.log("[Themis SDK] ".concat(_ctx.t0));
                                        return _ctx.abrupt("return");
                                    case 36:
                                        _ctx.next = 52;
                                        break;
                                    case 38:
                                        _ctx.prev = 38;
                                        helper2 = new StrategyHelperWeb(initParams, initOptions);
                                        helper2.generateParamsHash(initParams);
                                        subscriber && helper2.subscribe(subscriber);
                                        helper2.cacheTagValidUsers(initParams.strategy_ids);
                                        _ctx.next = 45;
                                        return helper2.launchExpAndFg();
                                    case 45:
                                        return _ctx.abrupt("return", helper2);
                                    case 48:
                                        _ctx.prev = 48;
                                        _ctx.t1 = _ctx["catch"](38);
                                        console.log("[Themis SDK] ".concat(_ctx.t1));
                                        return _ctx.abrupt("return");
                                    case 52:
                                        _ctx.next = 56;
                                        break;
                                    case 54:
                                        // eslint-disable-next-line
                                        console.log("[Themis SDK] The current SDK is only allowed to use on the web  or the Electron side");
                                        return _ctx.abrupt("return", Promise.resolve(undefined));
                                    case 56:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    2,
                                    31
                                ],
                                [
                                    38,
                                    48
                                ]
                            ]);
                        }));
                        return function(initParams, initOptions, subscriber) {
                            return _ref.apply(this, arguments);
                        };
                    }()
                });

                function checkValidTargetReg(visualTarget) {
                    var realPath = window.location.href.split("?")[0];
                    var reg = visualTarget.reg,
                        path = visualTarget.path;
                    if (reg) {
                        var newReg = new RegExp(reg);
                        if (newReg.test(realPath)) {
                            return true;
                        }
                    }
                    if (path) {
                        if (realPath === path) {
                            return true;
                        }
                    }
                    return false;
                }



                // EXTERNAL MODULE: external "_bne.cookies"
                var external_bne_cookies_ = __webpack_require__("LJ4M");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadBIDSThemis.js







                var DEFAULT_THEMIS_ADDRESS = "https://api.saasexch.com/bapi/themis/api/";
                // This default themis auth header is for themis app - Application: BIDS-Web
                var DEFAULT_THEMIS_AUTH_HEADER = "MDMyNTY2NTYxMjpmV3JhemhFSFpUWHRuMlVSWXhjOHN6dFhkYmpwR24yUA==";
                var loadingPromise;

                function loadBIDSThemis() {
                    var ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        _themisConfigs = ref.themisConfigs,
                        themisConfigs = _themisConfigs === void 0 ? {} : _themisConfigs,
                        _baseUrl = ref.baseUrl,
                        baseUrl = _baseUrl === void 0 ? DEFAULT_THEMIS_ADDRESS : _baseUrl,
                        _timeout = ref.timeout,
                        timeout = _timeout === void 0 ? 2000 : _timeout;
                    loadingPromise = new Promise(function() {
                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(resolve, reject) {
                            var helper;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        timeout > 0 && setTimeout(function() {
                                            loadingPromise = undefined;
                                            reject(new Error("load themis timeout"));
                                        }, timeout);
                                        _ctx.prev = 1;
                                        _ctx.next = 4;
                                        return dist_esm.init((0, _object_spread_props /* default */ .Z)((0, src_object_spread /* default */ .Z)({}, themisConfigs), {
                                            trace_id: themisConfigs.trace_id || external_bne_cookies_.read("bnc-uuid"),
                                            env: themisConfigs.env || getEnvironment().toUpperCase()
                                        }), {
                                            baseUrl: baseUrl,
                                            authHeader: DEFAULT_THEMIS_AUTH_HEADER
                                        });
                                    case 4:
                                        helper = _ctx.sent;
                                        if (helper) {
                                            _ctx.next = 8;
                                            break;
                                        }
                                        reject(new Error("load themis failed"));
                                        return _ctx.abrupt("return");
                                    case 8:
                                        resolve(helper);
                                        _ctx.next = 15;
                                        break;
                                    case 11:
                                        _ctx.prev = 11;
                                        _ctx.t0 = _ctx["catch"](1);
                                        loadingPromise = undefined;
                                        reject(_ctx.t0);
                                    case 15:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    1,
                                    11
                                ]
                            ]);
                        }));
                        return function(resolve, reject) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return loadingPromise;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/getLanguage.js


                var IS_ELECTRON = true && (window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__);

                function getLanguage() {
                    try {
                        // 获取查询参数中的 hl
                        var urlParams = new URLSearchParams(window.location.search);
                        var queryLanguage = urlParams.get("hl");
                        if (queryLanguage) return queryLanguage;
                        // 获取 Cookie 中的 language
                        var cookieLanguageMatch = document.cookie.match(/(?:^|; )lang=([^;]*)/);
                        var cookieLanguage = cookieLanguageMatch ? decodeURIComponent(cookieLanguageMatch[1]) : null;
                        if (cookieLanguage) {
                            var ref = (0, _sliced_to_array /* default */ .Z)(cookieLanguage.split("-"), 2),
                                lang = ref[0],
                                region = ref[1];
                            if (region) {
                                return "".concat(lang, "-").concat(region.toUpperCase());
                            }
                            return cookieLanguage;
                        }
                        var langFromHtml = document.documentElement.getAttribute("lang");
                        if (langFromHtml) {
                            return langFromHtml;
                        }
                        // 获取 URL 路径中的第一个参数
                        var pathSegments = window.location.pathname.split("/").filter(function(segment) {
                            return segment;
                        });
                        var pathLanguage = pathSegments.length > 0 ? pathSegments[0] : null;
                        if (pathLanguage) return pathLanguage;
                        // electron 中获取 hash 中的语言
                        if (IS_ELECTRON && window.__ElectronDesktop) {
                            var language = window.__ElectronDesktop.getUserSettings().language;
                            return language;
                        }
                        return "en";
                    } catch (error) {
                        logger.error("getLanguage error", error);
                    }
                    return "en";
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadRemoteGlobalManager/getVersion.js







                var env = getEnvironment();
                var stableVersionMap = {
                    prod: "6dc3942",
                    dev: "6dc3942"
                };
                var getVersion_IS_ELECTRON = true && (window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__);
                var stableVersion = stableVersionMap[env];

                function getTopLevelDomain() {
                    if (false) {}
                    var currentDomain = "";
                    try {
                        if (getVersion_IS_ELECTRON) {
                            var ref, ref1;
                            // @ts-ignore
                            currentDomain = window === null || window === void 0 ? void 0 : (ref = window.__INJECTED_BY_ELECTRON__) === null || ref === void 0 ? void 0 : (ref1 = ref.env) === null || ref1 === void 0 ? void 0 : ref1.ACCOUNTS_SITE_HOST;
                            return currentDomain;
                        }
                    } catch (error) {
                        logger.error("get version domain error on electron", error);
                    }
                    // web
                    var domainParts = location.host.split(".");
                    var encodedBinanceDomain = "YmluYW5jZS5jb20=" // binance.com
                    ;
                    var encodedQA1Domain = "cWExZmRnLm5ldA==" // qa1fdg.net
                    ;
                    currentDomain = atob(encodedBinanceDomain);
                    if (location.host.includes("localhost")) return "https://www.".concat(atob(encodedQA1Domain));
                    if (domainParts.length > 2) {
                        currentDomain = domainParts.slice(-2).join(".");
                    } else {
                        currentDomain = document.domain;
                    }
                    return "https://www.".concat(currentDomain);
                }
                var fetchWithTimeout = function(url, timeout) {
                    return Promise.race([
                        (0, external_httpSDK_.get)(url),
                        new Promise(function(_, reject) {
                            return setTimeout(function() {
                                return reject(new Error("get timeout"));
                            }, timeout);
                        }),
                    ]);
                };
                var getScriptVersion = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                        var domain, lang, data;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    if (true) {
                                        _ctx.next = 2;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 2:
                                    domain = getTopLevelDomain();
                                    _ctx.prev = 3;
                                    lang = getLanguage();
                                    _ctx.next = 7;
                                    return fetchWithTimeout("".concat(domain, "/").concat(lang, "/mfa-ui/version"), 3000);
                                case 7:
                                    data = _ctx.sent;
                                    return _ctx.abrupt("return", data);
                                case 11:
                                    _ctx.prev = 11;
                                    _ctx.t0 = _ctx["catch"](3);
                                    logger.error(_ctx.t0);
                                    logger.report(new Error("get version network error, status: ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message)));
                                    throw _ctx.t0;
                                case 16:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                3,
                                11
                            ]
                        ]);
                    }));
                    return function getScriptVersion() {
                        return _ref.apply(this, arguments);
                    };
                }();
                var version;
                /* harmony default export */
                const getVersion = ((0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                    var useLatestVersion, helper, ref, BIDS_INTERCEPTOR_UPGRADE, BIDS_INTERCEPTOR_UPGRADE_DEV, res;
                    return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                        while (1) switch (_ctx.prev = _ctx.next) {
                            case 0:
                                _ctx.prev = 0;
                                if (!version) {
                                    _ctx.next = 3;
                                    break;
                                }
                                return _ctx.abrupt("return", version);
                            case 3:
                                useLatestVersion = false;
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return loadBIDSThemis();
                            case 7:
                                helper = _ctx.sent;
                                _ctx.next = 10;
                                return helper.getFeatureGateResults();
                            case 10:
                                ref = _ctx.sent;
                                BIDS_INTERCEPTOR_UPGRADE = ref.BIDS_INTERCEPTOR_UPGRADE;
                                BIDS_INTERCEPTOR_UPGRADE_DEV = ref.BIDS_INTERCEPTOR_UPGRADE_DEV;
                                if (env === "dev") {
                                    logger.log("BIDS_INTERCEPTOR_UPGRADE_DEV", BIDS_INTERCEPTOR_UPGRADE_DEV.pass);
                                    useLatestVersion = BIDS_INTERCEPTOR_UPGRADE_DEV.pass;
                                } else {
                                    logger.log("BIDS_INTERCEPTOR_UPGRADE", BIDS_INTERCEPTOR_UPGRADE.pass);
                                    useLatestVersion = BIDS_INTERCEPTOR_UPGRADE.pass;
                                }
                                _ctx.next = 19;
                                break;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.t0 = _ctx["catch"](4);
                                logger.error("\u274C BIDS_INTERCEPTOR_UPGRADE checking fail ", _ctx.t0);
                            case 19:
                                if (useLatestVersion) {
                                    _ctx.next = 22;
                                    break;
                                }
                                logger.log("use stable version", {
                                    useLatestVersion: useLatestVersion,
                                    stableVersion: stableVersion
                                });
                                return _ctx.abrupt("return", stableVersion);
                            case 22:
                                _ctx.next = 24;
                                return getScriptVersion();
                            case 24:
                                res = _ctx.sent;
                                if (!res.version) {
                                    _ctx.next = 28;
                                    break;
                                }
                                version = res.version;
                                return _ctx.abrupt("return", version);
                            case 28:
                                logger.error("new version get fail,use stable version", stableVersion);
                                return _ctx.abrupt("return", stableVersion);
                            case 32:
                                _ctx.prev = 32;
                                _ctx.t1 = _ctx["catch"](0);
                                logger.error("get script version fail", _ctx.t1);
                                logger.report(new Error("get script version fail ".concat(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message)));
                                return _ctx.abrupt("return", stableVersion);
                            case 37:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            0,
                            32
                        ],
                        [
                            4,
                            16
                        ]
                    ]);
                })));

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadRemoteGlobalManager/initIframe.js


                function initIframeToPage() {
                    try {
                        var IS_ELECTRON = true && (window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__);
                        var IS_MP = true && window.__mp_private_api__;
                        if (false || IS_ELECTRON || IS_MP) return;
                        // 如果已经创建了iframe则不再创建
                        if (document.getElementById("switch-account-iframe")) return;
                        var lang = getLanguage();
                        var encodedQA1Domain = "cWExZmRnLm5ldA==" // qa1fdg.net
                        ;
                        var accountsHost = "accounts.".concat(window.location.hostname.split(".").slice(-2).join("."));
                        if (location.host.includes("localhost")) {
                            accountsHost = "accounts.".concat(atob(encodedQA1Domain));
                        }
                        var iframe = document.createElement("iframe");
                        iframe.style.display = "none";
                        // @ts-ignore
                        iframe.importance = "low";
                        iframe.id = "switch-account-iframe";
                        iframe.src = "https://".concat(accountsHost, "/").concat(lang, "/login/switch/callback");
                        setTimeout(function() {
                            logger.log("iframe loaded", document.readyState);
                            document.body.appendChild(iframe);
                        }, 100);
                        // 定义消息处理函数
                        var listener = function listener(event) {
                            if (event.data === "refreshPageToParent") {
                                // 刷新页面
                                window.location.reload();
                            }
                        };
                        // 先移除再添加防止监听多次
                        window.removeEventListener("message", listener);
                        window.addEventListener("message", listener, false);
                    } catch (error) {
                        logger.error(error);
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-global-management-loader@0.1.17_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-global-management-loader/dist/esm/utils/loadRemoteGlobalManager/index.js








                var timerOfInitIframe = setTimeout(function() {
                    try {
                        if (document.readyState !== "complete") {
                            logger.log("iframe from 'load' event");
                            window.addEventListener("load", initIframeToPage);
                        } else if (document.readyState === "complete") {
                            logger.log("iframe from 'complete' event");
                            initIframeToPage();
                        }
                    } catch (error) {
                        logger.error("\u274C BIDSInterceptor initIframeToPage failed", error);
                        logger.report("BIDSInterceptor initIframeToPage failed ".concat(error === null || error === void 0 ? void 0 : error.message));
                    }
                }, 2000);
                var disableIDGM = false;

                function loadRemoteGlobalManager_disableIdentityGlobalManager() {
                    disableIDGM = true;
                    clearTimeout(timerOfInitIframe);
                }

                function loadRemoteGlobalManager(_) {
                    return _loadRemoteGlobalManager.apply(this, arguments);
                }

                function _loadRemoteGlobalManager() {
                    _loadRemoteGlobalManager = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(param) {
                        var staticHost, version;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    staticHost = param.staticHost;
                                    if (!disableIDGM) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 3:
                                    if (!window.$BIDS) {
                                        _ctx.next = 6;
                                        break;
                                    }
                                    logger.log("IdentityGlobalManager already exists, don't load again");
                                    return _ctx.abrupt("return", window.$BIDS);
                                case 6:
                                    if (!staticHost) {
                                        staticHost = getStaticHost();
                                        logger.error("\u274C staticHost is required, use default staticHost", staticHost);
                                    }
                                    _ctx.prev = 7;
                                    _ctx.next = 10;
                                    return indexedDBStorage.init();
                                case 10:
                                    _ctx.next = 16;
                                    break;
                                case 12:
                                    _ctx.prev = 12;
                                    _ctx.t0 = _ctx["catch"](7);
                                    logger.error("\u274C BIDSInterceptor indexedDBStorage init failed", _ctx.t0);
                                    logger.report("BIDSInterceptor indexedDBStorage init failed ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message));
                                case 16:
                                    try {
                                        initIframeToPage();
                                    } catch (error) {
                                        logger.error("\u274C BIDSInterceptor initIframeToPage failed", error);
                                        logger.report("BIDSInterceptor initIframeToPage failed ".concat(error === null || error === void 0 ? void 0 : error.message));
                                    }
                                    _ctx.next = 19;
                                    return getVersion();
                                case 19:
                                    version = _ctx.sent;
                                    _ctx.prev = 20;
                                    logger.time("Loaded remote IdentityGlobalManager");
                                    _ctx.next = 24;
                                    return initScript({
                                        src: "".concat(staticHost, "/static/mfa-ui.").concat(version, ".js"),
                                        version: version,
                                        cacheStoreKey: "identity",
                                        extraAttributes: {
                                            crossorigin: "true",
                                            type: "module"
                                        }
                                    });
                                case 24:
                                    logger.timeEnd("Loaded remote IdentityGlobalManager");
                                    logger.report("Loaded remote IdentityGlobalManager ".concat(version));
                                    _ctx.next = 37;
                                    break;
                                case 28:
                                    _ctx.prev = 28;
                                    _ctx.t1 = _ctx["catch"](20);
                                    logger.error("\u274C load Remote Interceptor error", _ctx.t1);
                                    logger.log("fallback to stable version", stableVersion);
                                    logger.time("focus load remote IdentityGlobalManager stable");
                                    logger.report(new Error("load Remote Interceptor error ".concat(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, ". stable version: ").concat(stableVersion)));
                                    _ctx.next = 36;
                                    return initScript({
                                        src: "".concat(staticHost, "/static/mfa-ui.").concat(stableVersion, ".js"),
                                        version: stableVersion,
                                        cacheStoreKey: "identity-stable",
                                        extraAttributes: {
                                            crossorigin: "true",
                                            type: "module"
                                        }
                                    });
                                case 36:
                                    logger.timeEnd("focus load remote IdentityGlobalManager stable");
                                case 37:
                                    try {
                                        if (window.$BIDS.initConstants) window.$BIDS.initConstants({
                                            staticHost: staticHost
                                        });
                                    } catch (error1) {
                                        logger.error("\u274C initConstants error", error1);
                                    }
                                    return _ctx.abrupt("return", window.$BIDS);
                                case 39:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                7,
                                12
                            ],
                            [
                                20,
                                28
                            ]
                        ]);
                    }));
                    return _loadRemoteGlobalManager.apply(this, arguments);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-interceptor@0.2.7_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-interceptor/dist/esm/initBIDSInterceptor.js




                var initState = {
                    retryCount: 0,
                    hasStarted: false,
                    initSuccess: false
                };

                function initBIDSInterceptor(params) {
                    return _initBIDSInterceptor.apply(this, arguments);
                };

                function _initBIDSInterceptor() {
                    _initBIDSInterceptor = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(params) {
                        var initRemoteInterceptor, initLocalInterceptor, staticHost;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    initRemoteInterceptor = params.initRemoteInterceptor, initLocalInterceptor = params.initLocalInterceptor, staticHost = params.staticHost;
                                    if (!initState.initSuccess) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 3:
                                    if (!(false || initState.hasStarted || initState.initSuccess)) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 5:
                                    logger.time("\u2705 BIDSInterceptor init successful time") // 开始计时
                                    ;
                                    logger.log("start initBIDSInterceptor");
                                    initState.hasStarted = true;
                                    _ctx.prev = 8;
                                    _ctx.next = 11;
                                    return loadRemoteGlobalManager({
                                        staticHost: staticHost
                                    });
                                case 11:
                                    initRemoteInterceptor();
                                    initState.initSuccess = true;
                                    logger.timeEnd("\u2705 BIDSInterceptor init successful time") // 结束
                                    ;
                                    _ctx.next = 31;
                                    break;
                                case 16:
                                    _ctx.prev = 16;
                                    _ctx.t0 = _ctx["catch"](8);
                                    logger.error("\u274C BIDSInterceptor start retry", _ctx.t0, {
                                        initState: initState
                                    });
                                    logger.report(new Error("BIDSInterceptor start retry ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message)));
                                    // 如果失败了,自己尝试自己的逻辑
                                    initState.retryCount++;
                                    initState.hasStarted = false;
                                    if (!(initState.retryCount >= 3)) {
                                        _ctx.next = 30;
                                        break;
                                    }
                                    logger.error("\u274C BIDSInterceptor init failed", (0, src_object_spread /* default */ .Z)({
                                        error: _ctx.t0
                                    }, initState));
                                    logger.report("BIDSInterceptor init failed ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message));
                                    initLocalInterceptor(_ctx.t0);
                                    initState.initSuccess = true;
                                    return _ctx.abrupt("return");
                                case 30:
                                    {
                                        setTimeout(function() {
                                            return initBIDSInterceptor(params);
                                        }, initState.retryCount * 1000);
                                    }
                                case 31:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                8,
                                16
                            ]
                        ]);
                    }));
                    return _initBIDSInterceptor.apply(this, arguments);
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@binance+bids-interceptor@0.2.7_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-interceptor/dist/esm/util.js
                var util = __webpack_require__("kh2e");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+bids-interceptor@0.2.7_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0/node_modules/@binance/bids-interceptor/dist/esm/index.js







                var BIDSInitedInterceptor = null;
                var skipIntercepor = false;
                var disableBIDSInterceptor = function() {
                    skipIntercepor = true;
                    disableIdentityGlobalManager();
                };

                function runOnce(fn) {
                    var hasRun = false;
                    return function() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        if (!hasRun) {
                            hasRun = true;
                            return fn.apply(void 0, (0, _to_consumable_array /* default */ .Z)(args));
                        }
                    };
                }
                // 示例用法
                var initialize = function(type) {
                    logger.log("initialize from ".concat(type));
                    logger.report("initialize from ".concat(type));
                };
                var initializeLogOnce = runOnce(initialize);
                var peddingResponseToLoaded = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(params) {
                        var response;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    response = params.response;
                                    _ctx.prev = 1;
                                    _ctx.next = 4;
                                    return (0, util /* privateShouldPendingResponseToLoaded */ .C6)(response, logger);
                                case 4:
                                    if (!_ctx.sent) {
                                        _ctx.next = 10;
                                        break;
                                    }
                                    _ctx.next = 7;
                                    return runtimeChecking({
                                        checkFunction: function() {
                                            return typeof BIDSInitedInterceptor === "function";
                                        },
                                        interval: 100,
                                        timeout: 7000
                                    });
                                case 7:
                                    _ctx.next = 9;
                                    return BIDSInitedInterceptor(params);
                                case 9:
                                    // 拦截器加载完成后，再次调用拦截器
                                    response = _ctx.sent;
                                case 10:
                                    _ctx.next = 16;
                                    break;
                                case 12:
                                    _ctx.prev = 12;
                                    _ctx.t0 = _ctx["catch"](1);
                                    // 拦截器加载失败，直接放过
                                    logger.error("\u274C Timeout, abort blocking", response.url, _ctx.t0);
                                    logger.report(new Error("Timeout, abort blocking ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message)));
                                case 16:
                                    return _ctx.abrupt("return", response);
                                case 17:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                1,
                                12
                            ]
                        ]);
                    }));
                    return function peddingResponseToLoaded(params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                // 原来给的拦截器全部不处理，直接返回response
                var MFARequestInterceptor = function(url, opts, options) {
                    if (options && options.enableMFAInterceptor) {
                        if (!options.originUrl) {
                            options.originUrl = url;
                        }
                    }
                    return [
                        url,
                        opts
                    ];
                };
                var _BIDSInterceptor = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(params) {
                        var response;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    _ctx.next = 2;
                                    return peddingResponseToLoaded(params);
                                case 2:
                                    response = _ctx.sent;
                                    return _ctx.abrupt("return", response);
                                case 4:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function _BIDSInterceptor(params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var getMFAToken = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(_params) {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    return _ctx.abrupt("return", "");
                                case 1:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function getMFAToken(_params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                // 使用兜底方案
                var initLocalInterceptor = function(error) {
                    logger.log("\uD83D\uDE14\uD83D\uDE14\uD83D\uDE14\uD83D\uDE14  Interceptor init fail");
                    // $ 代表本地方法,兜底方案
                    logger.report("\u274C init Interceptor fail,".concat(error === null || error === void 0 ? void 0 : error.message));
                };
                // 使用远程方案
                var initRemoteInterceptor = function() {
                    try {
                        logger.log("\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 init Remote Interceptor");
                        MFARequestInterceptor = window.$BIDS.MFARequestInterceptor;
                        // 兼容老的逻辑,因为还有模块直接引用了getMFAToken
                        getMFAToken = window.$BIDS.getMFAToken;
                        // 如果后面接入的请求,直接调用BIDSInterceptor,就不需要前面的调用逻辑
                        _BIDSInterceptor = window.$BIDS.BIDSInterceptor;
                        // 给中间状态的拦截器赋值,让他们有拦截器可以使用
                        BIDSInitedInterceptor = window.$BIDS.BIDSInterceptor;
                    } catch (error) {
                        logger.error("\u274C init Remote Interceptor error", error);
                        initLocalInterceptor(error);
                    }
                };
                // @ts-ignore
                var IS_NEZHA = true && !!window.__mp_private_api__;
                var privateBIDSInterceptor = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(params) {
                        var response;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    _ctx.prev = 0;
                                    if (true) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return", params.response);
                                case 3:
                                    if (!skipIntercepor) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    return _ctx.abrupt("return", params.response);
                                case 5:
                                    if (!IS_NEZHA) {
                                        _ctx.next = 7;
                                        break;
                                    }
                                    return _ctx.abrupt("return", params.response);
                                case 7:
                                    initializeLogOnce(params.source);
                                    params.globalOpts = params.globalOpts || {};
                                    if (!params.logger) params.logger = logger;
                                    if (!params.http) params.http = external_httpSDK_;
                                    if (!(params.staticHost || params.globalOpts.staticHost)) {
                                        params.staticHost = getStaticHost();
                                        logger.log("interceptor can't get staticHost from globalOpts, use default staticHost", params.staticHost);
                                        logger.report(new Error("interceptor can't get staticHost from globalOpts, use default staticHost"));
                                    }
                                    initBIDSInterceptor({
                                        staticHost: params.staticHost || params.globalOpts.staticHost,
                                        initRemoteInterceptor: initRemoteInterceptor,
                                        initLocalInterceptor: initLocalInterceptor
                                    });
                                    _ctx.next = 15;
                                    return _BIDSInterceptor(params);
                                case 15:
                                    response = _ctx.sent;
                                    return _ctx.abrupt("return", response);
                                case 19:
                                    _ctx.prev = 19;
                                    _ctx.t0 = _ctx["catch"](0);
                                    logger.report(new Error("remote BIDSInterceptor error ".concat(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message)));
                                    return _ctx.abrupt("return", params.response);
                                case 23:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                0,
                                19
                            ]
                        ]);
                    }));
                    return function privateBIDSInterceptor(params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var MFAInterceptor = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(params) {
                        var response;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    params.source = "MFAInterceptor";
                                    params.globalOpts = params.globalOpts || {};
                                    if (!hasInitfromPIKA) {
                                        _ctx.next = 4;
                                        break;
                                    }
                                    return _ctx.abrupt("return", params.response);
                                case 4:
                                    _ctx.next = 6;
                                    return privateBIDSInterceptor(params);
                                case 6:
                                    response = _ctx.sent;
                                    return _ctx.abrupt("return", response);
                                case 8:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function MFAInterceptor(params) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var hasInitfromPIKA = false;
                var BIDSInterceptor = function(param) {
                    var staticHost = param.staticHost;
                    return function() {
                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(response, apiOpts, opts) {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        hasInitfromPIKA = true;
                                        _ctx.next = 3;
                                        return privateBIDSInterceptor({
                                            response: response,
                                            apiOpts: apiOpts,
                                            opts: opts,
                                            staticHost: staticHost,
                                            source: "Pika"
                                        });
                                    case 3:
                                        response = _ctx.sent;
                                        return _ctx.abrupt("return", response);
                                    case 5:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function(response, apiOpts, opts) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                };



                /***/
            }),

        /***/
        "Y7vP":
            /***/
            ((module, exports, __webpack_require__) => {

                /* provided dependency */
                var process = __webpack_require__("FXEK");
                var __WEBPACK_AMD_DEFINE_RESULT__;
                /**
                 * [js-md5]{@link https://github.com/emn178/js-md5}
                 *
                 * @namespace md5
                 * @version 0.7.3
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2014-2017
                 * @license MIT
                 */
                (function() {
                    'use strict';

                    var ERROR = 'input is invalid type';
                    var WINDOW = "object" === 'object';
                    var root = WINDOW ? window : {};
                    if (root.JS_MD5_NO_WINDOW) {
                        WINDOW = false;
                    }
                    var WEB_WORKER = !WINDOW && typeof self === 'object';
                    var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
                    if (NODE_JS) {
                        root = __webpack_require__.g;
                    } else if (WEB_WORKER) {
                        root = self;
                    }
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === 'object' && module.exports;
                    var AMD = true && __webpack_require__.amdO;
                    var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
                    var HEX_CHARS = '0123456789abcdef'.split('');
                    var EXTRA = [128, 32768, 8388608, -2147483648];
                    var SHIFT = [0, 8, 16, 24];
                    var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
                    var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

                    var blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer);
                        blocks = new Uint32Array(buffer);
                    }

                    if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
                        Array.isArray = function(obj) {
                            return Object.prototype.toString.call(obj) === '[object Array]';
                        };
                    }

                    if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
                        ArrayBuffer.isView = function(obj) {
                            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
                        };
                    }

                    /**
                     * @method hex
                     * @memberof md5
                     * @description Output hash as hex string
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {String} Hex string
                     * @example
                     * md5.hex('The quick brown fox jumps over the lazy dog');
                     * // equal to
                     * md5('The quick brown fox jumps over the lazy dog');
                     */
                    /**
                     * @method digest
                     * @memberof md5
                     * @description Output hash as bytes array
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {Array} Bytes array
                     * @example
                     * md5.digest('The quick brown fox jumps over the lazy dog');
                     */
                    /**
                     * @method array
                     * @memberof md5
                     * @description Output hash as bytes array
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {Array} Bytes array
                     * @example
                     * md5.array('The quick brown fox jumps over the lazy dog');
                     */
                    /**
                     * @method arrayBuffer
                     * @memberof md5
                     * @description Output hash as ArrayBuffer
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @example
                     * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
                     */
                    /**
                     * @method buffer
                     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
                     * @memberof md5
                     * @description Output hash as ArrayBuffer
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @example
                     * md5.buffer('The quick brown fox jumps over the lazy dog');
                     */
                    /**
                     * @method base64
                     * @memberof md5
                     * @description Output hash as base64 string
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {String} base64 string
                     * @example
                     * md5.base64('The quick brown fox jumps over the lazy dog');
                     */
                    var createOutputMethod = function(outputType) {
                        return function(message) {
                            return new Md5(true).update(message)[outputType]();
                        };
                    };

                    /**
                     * @method create
                     * @memberof md5
                     * @description Create Md5 object
                     * @returns {Md5} Md5 object.
                     * @example
                     * var hash = md5.create();
                     */
                    /**
                     * @method update
                     * @memberof md5
                     * @description Create and update Md5 object
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {Md5} Md5 object.
                     * @example
                     * var hash = md5.update('The quick brown fox jumps over the lazy dog');
                     * // equal to
                     * var hash = md5.create();
                     * hash.update('The quick brown fox jumps over the lazy dog');
                     */
                    var createMethod = function() {
                        var method = createOutputMethod('hex');
                        if (NODE_JS) {
                            method = nodeWrap(method);
                        }
                        method.create = function() {
                            return new Md5();
                        };
                        method.update = function(message) {
                            return method.create().update(message);
                        };
                        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                            var type = OUTPUT_TYPES[i];
                            method[type] = createOutputMethod(type);
                        }
                        return method;
                    };

                    var nodeWrap = function(method) {
                        var crypto = eval("require('crypto')");
                        var Buffer = eval("require('buffer').Buffer");
                        var nodeMethod = function(message) {
                            if (typeof message === 'string') {
                                return crypto.createHash('md5').update(message, 'utf8').digest('hex');
                            } else {
                                if (message === null || message === undefined) {
                                    throw ERROR;
                                } else if (message.constructor === ArrayBuffer) {
                                    message = new Uint8Array(message);
                                }
                            }
                            if (Array.isArray(message) || ArrayBuffer.isView(message) ||
                                message.constructor === Buffer) {
                                return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
                            } else {
                                return method(message);
                            }
                        };
                        return nodeMethod;
                    };

                    /**
                     * Md5 class
                     * @class Md5
                     * @description This is internal class.
                     * @see {@link md5.create}
                     */
                    function Md5(sharedMemory) {
                        if (sharedMemory) {
                            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                                blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                                blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                                blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
                            this.blocks = blocks;
                            this.buffer8 = buffer8;
                        } else {
                            if (ARRAY_BUFFER) {
                                var buffer = new ArrayBuffer(68);
                                this.buffer8 = new Uint8Array(buffer);
                                this.blocks = new Uint32Array(buffer);
                            } else {
                                this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            }
                        }
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
                        this.finalized = this.hashed = false;
                        this.first = true;
                    }

                    /**
                     * @method update
                     * @memberof Md5
                     * @instance
                     * @description Update hash
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {Md5} Md5 object.
                     * @see {@link md5.update}
                     */
                    Md5.prototype.update = function(message) {
                        if (this.finalized) {
                            return;
                        }

                        var notString, type = typeof message;
                        if (type !== 'string') {
                            if (type === 'object') {
                                if (message === null) {
                                    throw ERROR;
                                } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                                    message = new Uint8Array(message);
                                } else if (!Array.isArray(message)) {
                                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                                        throw ERROR;
                                    }
                                }
                            } else {
                                throw ERROR;
                            }
                            notString = true;
                        }
                        var code, index = 0,
                            i, length = message.length,
                            blocks = this.blocks;
                        var buffer8 = this.buffer8;

                        while (index < length) {
                            if (this.hashed) {
                                this.hashed = false;
                                blocks[0] = blocks[16];
                                blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                                    blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                                    blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                                    blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
                            }

                            if (notString) {
                                if (ARRAY_BUFFER) {
                                    for (i = this.start; index < length && i < 64; ++index) {
                                        buffer8[i++] = message[index];
                                    }
                                } else {
                                    for (i = this.start; index < length && i < 64; ++index) {
                                        blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
                                    }
                                }
                            } else {
                                if (ARRAY_BUFFER) {
                                    for (i = this.start; index < length && i < 64; ++index) {
                                        code = message.charCodeAt(index);
                                        if (code < 0x80) {
                                            buffer8[i++] = code;
                                        } else if (code < 0x800) {
                                            buffer8[i++] = 0xc0 | (code >> 6);
                                            buffer8[i++] = 0x80 | (code & 0x3f);
                                        } else if (code < 0xd800 || code >= 0xe000) {
                                            buffer8[i++] = 0xe0 | (code >> 12);
                                            buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
                                            buffer8[i++] = 0x80 | (code & 0x3f);
                                        } else {
                                            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                                            buffer8[i++] = 0xf0 | (code >> 18);
                                            buffer8[i++] = 0x80 | ((code >> 12) & 0x3f);
                                            buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
                                            buffer8[i++] = 0x80 | (code & 0x3f);
                                        }
                                    }
                                } else {
                                    for (i = this.start; index < length && i < 64; ++index) {
                                        code = message.charCodeAt(index);
                                        if (code < 0x80) {
                                            blocks[i >> 2] |= code << SHIFT[i++ & 3];
                                        } else if (code < 0x800) {
                                            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                                        } else if (code < 0xd800 || code >= 0xe000) {
                                            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                                        } else {
                                            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                                            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                                            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                                        }
                                    }
                                }
                            }
                            this.lastByteIndex = i;
                            this.bytes += i - this.start;
                            if (i >= 64) {
                                this.start = i - 64;
                                this.hash();
                                this.hashed = true;
                            } else {
                                this.start = i;
                            }
                        }
                        if (this.bytes > 4294967295) {
                            this.hBytes += this.bytes / 4294967296 << 0;
                            this.bytes = this.bytes % 4294967296;
                        }
                        return this;
                    };

                    Md5.prototype.finalize = function() {
                        if (this.finalized) {
                            return;
                        }
                        this.finalized = true;
                        var blocks = this.blocks,
                            i = this.lastByteIndex;
                        blocks[i >> 2] |= EXTRA[i & 3];
                        if (i >= 56) {
                            if (!this.hashed) {
                                this.hash();
                            }
                            blocks[0] = blocks[16];
                            blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                                blocks[4] = blocks[5] = blocks[6] = blocks[7] =
                                blocks[8] = blocks[9] = blocks[10] = blocks[11] =
                                blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
                        }
                        blocks[14] = this.bytes << 3;
                        blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
                        this.hash();
                    };

                    Md5.prototype.hash = function() {
                        var a, b, c, d, bc, da, blocks = this.blocks;

                        if (this.first) {
                            a = blocks[0] - 680876937;
                            a = (a << 7 | a >>> 25) - 271733879 << 0;
                            d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
                            d = (d << 12 | d >>> 20) + a << 0;
                            c = (-271733879 ^ (d & (a ^ -271733879))) + blocks[2] - 1126478375;
                            c = (c << 17 | c >>> 15) + d << 0;
                            b = (a ^ (c & (d ^ a))) + blocks[3] - 1316259209;
                            b = (b << 22 | b >>> 10) + c << 0;
                        } else {
                            a = this.h0;
                            b = this.h1;
                            c = this.h2;
                            d = this.h3;
                            a += (d ^ (b & (c ^ d))) + blocks[0] - 680876936;
                            a = (a << 7 | a >>> 25) + b << 0;
                            d += (c ^ (a & (b ^ c))) + blocks[1] - 389564586;
                            d = (d << 12 | d >>> 20) + a << 0;
                            c += (b ^ (d & (a ^ b))) + blocks[2] + 606105819;
                            c = (c << 17 | c >>> 15) + d << 0;
                            b += (a ^ (c & (d ^ a))) + blocks[3] - 1044525330;
                            b = (b << 22 | b >>> 10) + c << 0;
                        }

                        a += (d ^ (b & (c ^ d))) + blocks[4] - 176418897;
                        a = (a << 7 | a >>> 25) + b << 0;
                        d += (c ^ (a & (b ^ c))) + blocks[5] + 1200080426;
                        d = (d << 12 | d >>> 20) + a << 0;
                        c += (b ^ (d & (a ^ b))) + blocks[6] - 1473231341;
                        c = (c << 17 | c >>> 15) + d << 0;
                        b += (a ^ (c & (d ^ a))) + blocks[7] - 45705983;
                        b = (b << 22 | b >>> 10) + c << 0;
                        a += (d ^ (b & (c ^ d))) + blocks[8] + 1770035416;
                        a = (a << 7 | a >>> 25) + b << 0;
                        d += (c ^ (a & (b ^ c))) + blocks[9] - 1958414417;
                        d = (d << 12 | d >>> 20) + a << 0;
                        c += (b ^ (d & (a ^ b))) + blocks[10] - 42063;
                        c = (c << 17 | c >>> 15) + d << 0;
                        b += (a ^ (c & (d ^ a))) + blocks[11] - 1990404162;
                        b = (b << 22 | b >>> 10) + c << 0;
                        a += (d ^ (b & (c ^ d))) + blocks[12] + 1804603682;
                        a = (a << 7 | a >>> 25) + b << 0;
                        d += (c ^ (a & (b ^ c))) + blocks[13] - 40341101;
                        d = (d << 12 | d >>> 20) + a << 0;
                        c += (b ^ (d & (a ^ b))) + blocks[14] - 1502002290;
                        c = (c << 17 | c >>> 15) + d << 0;
                        b += (a ^ (c & (d ^ a))) + blocks[15] + 1236535329;
                        b = (b << 22 | b >>> 10) + c << 0;
                        a += (c ^ (d & (b ^ c))) + blocks[1] - 165796510;
                        a = (a << 5 | a >>> 27) + b << 0;
                        d += (b ^ (c & (a ^ b))) + blocks[6] - 1069501632;
                        d = (d << 9 | d >>> 23) + a << 0;
                        c += (a ^ (b & (d ^ a))) + blocks[11] + 643717713;
                        c = (c << 14 | c >>> 18) + d << 0;
                        b += (d ^ (a & (c ^ d))) + blocks[0] - 373897302;
                        b = (b << 20 | b >>> 12) + c << 0;
                        a += (c ^ (d & (b ^ c))) + blocks[5] - 701558691;
                        a = (a << 5 | a >>> 27) + b << 0;
                        d += (b ^ (c & (a ^ b))) + blocks[10] + 38016083;
                        d = (d << 9 | d >>> 23) + a << 0;
                        c += (a ^ (b & (d ^ a))) + blocks[15] - 660478335;
                        c = (c << 14 | c >>> 18) + d << 0;
                        b += (d ^ (a & (c ^ d))) + blocks[4] - 405537848;
                        b = (b << 20 | b >>> 12) + c << 0;
                        a += (c ^ (d & (b ^ c))) + blocks[9] + 568446438;
                        a = (a << 5 | a >>> 27) + b << 0;
                        d += (b ^ (c & (a ^ b))) + blocks[14] - 1019803690;
                        d = (d << 9 | d >>> 23) + a << 0;
                        c += (a ^ (b & (d ^ a))) + blocks[3] - 187363961;
                        c = (c << 14 | c >>> 18) + d << 0;
                        b += (d ^ (a & (c ^ d))) + blocks[8] + 1163531501;
                        b = (b << 20 | b >>> 12) + c << 0;
                        a += (c ^ (d & (b ^ c))) + blocks[13] - 1444681467;
                        a = (a << 5 | a >>> 27) + b << 0;
                        d += (b ^ (c & (a ^ b))) + blocks[2] - 51403784;
                        d = (d << 9 | d >>> 23) + a << 0;
                        c += (a ^ (b & (d ^ a))) + blocks[7] + 1735328473;
                        c = (c << 14 | c >>> 18) + d << 0;
                        b += (d ^ (a & (c ^ d))) + blocks[12] - 1926607734;
                        b = (b << 20 | b >>> 12) + c << 0;
                        bc = b ^ c;
                        a += (bc ^ d) + blocks[5] - 378558;
                        a = (a << 4 | a >>> 28) + b << 0;
                        d += (bc ^ a) + blocks[8] - 2022574463;
                        d = (d << 11 | d >>> 21) + a << 0;
                        da = d ^ a;
                        c += (da ^ b) + blocks[11] + 1839030562;
                        c = (c << 16 | c >>> 16) + d << 0;
                        b += (da ^ c) + blocks[14] - 35309556;
                        b = (b << 23 | b >>> 9) + c << 0;
                        bc = b ^ c;
                        a += (bc ^ d) + blocks[1] - 1530992060;
                        a = (a << 4 | a >>> 28) + b << 0;
                        d += (bc ^ a) + blocks[4] + 1272893353;
                        d = (d << 11 | d >>> 21) + a << 0;
                        da = d ^ a;
                        c += (da ^ b) + blocks[7] - 155497632;
                        c = (c << 16 | c >>> 16) + d << 0;
                        b += (da ^ c) + blocks[10] - 1094730640;
                        b = (b << 23 | b >>> 9) + c << 0;
                        bc = b ^ c;
                        a += (bc ^ d) + blocks[13] + 681279174;
                        a = (a << 4 | a >>> 28) + b << 0;
                        d += (bc ^ a) + blocks[0] - 358537222;
                        d = (d << 11 | d >>> 21) + a << 0;
                        da = d ^ a;
                        c += (da ^ b) + blocks[3] - 722521979;
                        c = (c << 16 | c >>> 16) + d << 0;
                        b += (da ^ c) + blocks[6] + 76029189;
                        b = (b << 23 | b >>> 9) + c << 0;
                        bc = b ^ c;
                        a += (bc ^ d) + blocks[9] - 640364487;
                        a = (a << 4 | a >>> 28) + b << 0;
                        d += (bc ^ a) + blocks[12] - 421815835;
                        d = (d << 11 | d >>> 21) + a << 0;
                        da = d ^ a;
                        c += (da ^ b) + blocks[15] + 530742520;
                        c = (c << 16 | c >>> 16) + d << 0;
                        b += (da ^ c) + blocks[2] - 995338651;
                        b = (b << 23 | b >>> 9) + c << 0;
                        a += (c ^ (b | ~d)) + blocks[0] - 198630844;
                        a = (a << 6 | a >>> 26) + b << 0;
                        d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
                        d = (d << 10 | d >>> 22) + a << 0;
                        c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
                        c = (c << 15 | c >>> 17) + d << 0;
                        b += (d ^ (c | ~a)) + blocks[5] - 57434055;
                        b = (b << 21 | b >>> 11) + c << 0;
                        a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
                        a = (a << 6 | a >>> 26) + b << 0;
                        d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
                        d = (d << 10 | d >>> 22) + a << 0;
                        c += (a ^ (d | ~b)) + blocks[10] - 1051523;
                        c = (c << 15 | c >>> 17) + d << 0;
                        b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
                        b = (b << 21 | b >>> 11) + c << 0;
                        a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
                        a = (a << 6 | a >>> 26) + b << 0;
                        d += (b ^ (a | ~c)) + blocks[15] - 30611744;
                        d = (d << 10 | d >>> 22) + a << 0;
                        c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
                        c = (c << 15 | c >>> 17) + d << 0;
                        b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
                        b = (b << 21 | b >>> 11) + c << 0;
                        a += (c ^ (b | ~d)) + blocks[4] - 145523070;
                        a = (a << 6 | a >>> 26) + b << 0;
                        d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
                        d = (d << 10 | d >>> 22) + a << 0;
                        c += (a ^ (d | ~b)) + blocks[2] + 718787259;
                        c = (c << 15 | c >>> 17) + d << 0;
                        b += (d ^ (c | ~a)) + blocks[9] - 343485551;
                        b = (b << 21 | b >>> 11) + c << 0;

                        if (this.first) {
                            this.h0 = a + 1732584193 << 0;
                            this.h1 = b - 271733879 << 0;
                            this.h2 = c - 1732584194 << 0;
                            this.h3 = d + 271733878 << 0;
                            this.first = false;
                        } else {
                            this.h0 = this.h0 + a << 0;
                            this.h1 = this.h1 + b << 0;
                            this.h2 = this.h2 + c << 0;
                            this.h3 = this.h3 + d << 0;
                        }
                    };

                    /**
                     * @method hex
                     * @memberof Md5
                     * @instance
                     * @description Output hash as hex string
                     * @returns {String} Hex string
                     * @see {@link md5.hex}
                     * @example
                     * hash.hex();
                     */
                    Md5.prototype.hex = function() {
                        this.finalize();

                        var h0 = this.h0,
                            h1 = this.h1,
                            h2 = this.h2,
                            h3 = this.h3;

                        return HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
                            HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
                            HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
                            HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
                            HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
                            HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
                            HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
                            HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
                            HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
                            HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
                            HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
                            HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
                            HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
                            HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
                            HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
                            HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F];
                    };

                    /**
                     * @method toString
                     * @memberof Md5
                     * @instance
                     * @description Output hash as hex string
                     * @returns {String} Hex string
                     * @see {@link md5.hex}
                     * @example
                     * hash.toString();
                     */
                    Md5.prototype.toString = Md5.prototype.hex;

                    /**
                     * @method digest
                     * @memberof Md5
                     * @instance
                     * @description Output hash as bytes array
                     * @returns {Array} Bytes array
                     * @see {@link md5.digest}
                     * @example
                     * hash.digest();
                     */
                    Md5.prototype.digest = function() {
                        this.finalize();

                        var h0 = this.h0,
                            h1 = this.h1,
                            h2 = this.h2,
                            h3 = this.h3;
                        return [
                            h0 & 0xFF, (h0 >> 8) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 24) & 0xFF,
                            h1 & 0xFF, (h1 >> 8) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 24) & 0xFF,
                            h2 & 0xFF, (h2 >> 8) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 24) & 0xFF,
                            h3 & 0xFF, (h3 >> 8) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 24) & 0xFF
                        ];
                    };

                    /**
                     * @method array
                     * @memberof Md5
                     * @instance
                     * @description Output hash as bytes array
                     * @returns {Array} Bytes array
                     * @see {@link md5.array}
                     * @example
                     * hash.array();
                     */
                    Md5.prototype.array = Md5.prototype.digest;

                    /**
                     * @method arrayBuffer
                     * @memberof Md5
                     * @instance
                     * @description Output hash as ArrayBuffer
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @see {@link md5.arrayBuffer}
                     * @example
                     * hash.arrayBuffer();
                     */
                    Md5.prototype.arrayBuffer = function() {
                        this.finalize();

                        var buffer = new ArrayBuffer(16);
                        var blocks = new Uint32Array(buffer);
                        blocks[0] = this.h0;
                        blocks[1] = this.h1;
                        blocks[2] = this.h2;
                        blocks[3] = this.h3;
                        return buffer;
                    };

                    /**
                     * @method buffer
                     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
                     * @memberof Md5
                     * @instance
                     * @description Output hash as ArrayBuffer
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @see {@link md5.buffer}
                     * @example
                     * hash.buffer();
                     */
                    Md5.prototype.buffer = Md5.prototype.arrayBuffer;

                    /**
                     * @method base64
                     * @memberof Md5
                     * @instance
                     * @description Output hash as base64 string
                     * @returns {String} base64 string
                     * @see {@link md5.base64}
                     * @example
                     * hash.base64();
                     */
                    Md5.prototype.base64 = function() {
                        var v1, v2, v3, base64Str = '',
                            bytes = this.array();
                        for (var i = 0; i < 15;) {
                            v1 = bytes[i++];
                            v2 = bytes[i++];
                            v3 = bytes[i++];
                            base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
                                BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
                                BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
                                BASE64_ENCODE_CHAR[v3 & 63];
                        }
                        v1 = bytes[i];
                        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
                            BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
                            '==';
                        return base64Str;
                    };

                    var exports = createMethod();

                    if (COMMON_JS) {
                        module.exports = exports;
                    } else {
                        /**
                         * @method md5
                         * @description Md5 hash function, export to global in browsers.
                         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                         * @returns {String} md5 hashes
                         * @example
                         * md5(''); // d41d8cd98f00b204e9800998ecf8427e
                         * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
                         * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
                         *
                         * // It also supports UTF-8 encoding
                         * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
                         *
                         * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
                         * md5([]); // d41d8cd98f00b204e9800998ecf8427e
                         * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
                         */
                        root.md5 = exports;
                        if (AMD) {
                            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                                    return exports;
                                }).call(exports, __webpack_require__, exports, module),
                                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                        }
                    }
                })();


                /***/
            }),

        /***/
        "Rk44":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /*!
                    localForage -- Offline Storage, Improved
                    Version 1.10.0
                    https://localforage.github.io/localForage
                    (c) 2013-2017 Mozilla, Apache License 2.0
                */
                (function(f) {
                    if (true) {
                        module.exports = f()
                    } else {
                        var g;
                    }
                })(function() {
                    var define, module, exports;
                    return (function e(t, n, r) {
                        function s(o, u) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var a = undefined;
                                    if (!u && a) return require(o, !0);
                                    if (i) return i(o, !0);
                                    var f = new Error("Cannot find module '" + o + "'");
                                    throw (f.code = "MODULE_NOT_FOUND", f)
                                }
                                var l = n[o] = {
                                    exports: {}
                                };
                                t[o][0].call(l.exports, function(e) {
                                    var n = t[o][1][e];
                                    return s(n ? n : e)
                                }, l, l.exports, e, t, n, r)
                            }
                            return n[o].exports
                        }
                        var i = undefined;
                        for (var o = 0; o < r.length; o++) s(r[o]);
                        return s
                    })({
                        1: [function(_dereq_, module, exports) {
                            (function(global) {
                                'use strict';
                                var Mutation = global.MutationObserver || global.WebKitMutationObserver;

                                var scheduleDrain;

                                {
                                    if (Mutation) {
                                        var called = 0;
                                        var observer = new Mutation(nextTick);
                                        var element = global.document.createTextNode('');
                                        observer.observe(element, {
                                            characterData: true
                                        });
                                        scheduleDrain = function() {
                                            element.data = (called = ++called % 2);
                                        };
                                    } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
                                        var channel = new global.MessageChannel();
                                        channel.port1.onmessage = nextTick;
                                        scheduleDrain = function() {
                                            channel.port2.postMessage(0);
                                        };
                                    } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
                                        scheduleDrain = function() {

                                            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                                            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                                            var scriptEl = global.document.createElement('script');
                                            scriptEl.onreadystatechange = function() {
                                                nextTick();

                                                scriptEl.onreadystatechange = null;
                                                scriptEl.parentNode.removeChild(scriptEl);
                                                scriptEl = null;
                                            };
                                            global.document.documentElement.appendChild(scriptEl);
                                        };
                                    } else {
                                        scheduleDrain = function() {
                                            setTimeout(nextTick, 0);
                                        };
                                    }
                                }

                                var draining;
                                var queue = [];
                                //named nextTick for less confusing stack traces
                                function nextTick() {
                                    draining = true;
                                    var i, oldQueue;
                                    var len = queue.length;
                                    while (len) {
                                        oldQueue = queue;
                                        queue = [];
                                        i = -1;
                                        while (++i < len) {
                                            oldQueue[i]();
                                        }
                                        len = queue.length;
                                    }
                                    draining = false;
                                }

                                module.exports = immediate;

                                function immediate(task) {
                                    if (queue.push(task) === 1 && !draining) {
                                        scheduleDrain();
                                    }
                                }

                            }).call(this, typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : true ? window : 0)
                        }, {}],
                        2: [function(_dereq_, module, exports) {
                            'use strict';
                            var immediate = _dereq_(1);

                            /* istanbul ignore next */
                            function INTERNAL() {}

                            var handlers = {};

                            var REJECTED = ['REJECTED'];
                            var FULFILLED = ['FULFILLED'];
                            var PENDING = ['PENDING'];

                            module.exports = Promise;

                            function Promise(resolver) {
                                if (typeof resolver !== 'function') {
                                    throw new TypeError('resolver must be a function');
                                }
                                this.state = PENDING;
                                this.queue = [];
                                this.outcome = void 0;
                                if (resolver !== INTERNAL) {
                                    safelyResolveThenable(this, resolver);
                                }
                            }

                            Promise.prototype["catch"] = function(onRejected) {
                                return this.then(null, onRejected);
                            };
                            Promise.prototype.then = function(onFulfilled, onRejected) {
                                if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
                                    typeof onRejected !== 'function' && this.state === REJECTED) {
                                    return this;
                                }
                                var promise = new this.constructor(INTERNAL);
                                if (this.state !== PENDING) {
                                    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
                                    unwrap(promise, resolver, this.outcome);
                                } else {
                                    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
                                }

                                return promise;
                            };

                            function QueueItem(promise, onFulfilled, onRejected) {
                                this.promise = promise;
                                if (typeof onFulfilled === 'function') {
                                    this.onFulfilled = onFulfilled;
                                    this.callFulfilled = this.otherCallFulfilled;
                                }
                                if (typeof onRejected === 'function') {
                                    this.onRejected = onRejected;
                                    this.callRejected = this.otherCallRejected;
                                }
                            }
                            QueueItem.prototype.callFulfilled = function(value) {
                                handlers.resolve(this.promise, value);
                            };
                            QueueItem.prototype.otherCallFulfilled = function(value) {
                                unwrap(this.promise, this.onFulfilled, value);
                            };
                            QueueItem.prototype.callRejected = function(value) {
                                handlers.reject(this.promise, value);
                            };
                            QueueItem.prototype.otherCallRejected = function(value) {
                                unwrap(this.promise, this.onRejected, value);
                            };

                            function unwrap(promise, func, value) {
                                immediate(function() {
                                    var returnValue;
                                    try {
                                        returnValue = func(value);
                                    } catch (e) {
                                        return handlers.reject(promise, e);
                                    }
                                    if (returnValue === promise) {
                                        handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
                                    } else {
                                        handlers.resolve(promise, returnValue);
                                    }
                                });
                            }

                            handlers.resolve = function(self, value) {
                                var result = tryCatch(getThen, value);
                                if (result.status === 'error') {
                                    return handlers.reject(self, result.value);
                                }
                                var thenable = result.value;

                                if (thenable) {
                                    safelyResolveThenable(self, thenable);
                                } else {
                                    self.state = FULFILLED;
                                    self.outcome = value;
                                    var i = -1;
                                    var len = self.queue.length;
                                    while (++i < len) {
                                        self.queue[i].callFulfilled(value);
                                    }
                                }
                                return self;
                            };
                            handlers.reject = function(self, error) {
                                self.state = REJECTED;
                                self.outcome = error;
                                var i = -1;
                                var len = self.queue.length;
                                while (++i < len) {
                                    self.queue[i].callRejected(error);
                                }
                                return self;
                            };

                            function getThen(obj) {
                                // Make sure we only access the accessor once as required by the spec
                                var then = obj && obj.then;
                                if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
                                    return function appyThen() {
                                        then.apply(obj, arguments);
                                    };
                                }
                            }

                            function safelyResolveThenable(self, thenable) {
                                // Either fulfill, reject or reject with error
                                var called = false;

                                function onError(value) {
                                    if (called) {
                                        return;
                                    }
                                    called = true;
                                    handlers.reject(self, value);
                                }

                                function onSuccess(value) {
                                    if (called) {
                                        return;
                                    }
                                    called = true;
                                    handlers.resolve(self, value);
                                }

                                function tryToUnwrap() {
                                    thenable(onSuccess, onError);
                                }

                                var result = tryCatch(tryToUnwrap);
                                if (result.status === 'error') {
                                    onError(result.value);
                                }
                            }

                            function tryCatch(func, value) {
                                var out = {};
                                try {
                                    out.value = func(value);
                                    out.status = 'success';
                                } catch (e) {
                                    out.status = 'error';
                                    out.value = e;
                                }
                                return out;
                            }

                            Promise.resolve = resolve;

                            function resolve(value) {
                                if (value instanceof this) {
                                    return value;
                                }
                                return handlers.resolve(new this(INTERNAL), value);
                            }

                            Promise.reject = reject;

                            function reject(reason) {
                                var promise = new this(INTERNAL);
                                return handlers.reject(promise, reason);
                            }

                            Promise.all = all;

                            function all(iterable) {
                                var self = this;
                                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                                    return this.reject(new TypeError('must be an array'));
                                }

                                var len = iterable.length;
                                var called = false;
                                if (!len) {
                                    return this.resolve([]);
                                }

                                var values = new Array(len);
                                var resolved = 0;
                                var i = -1;
                                var promise = new this(INTERNAL);

                                while (++i < len) {
                                    allResolver(iterable[i], i);
                                }
                                return promise;

                                function allResolver(value, i) {
                                    self.resolve(value).then(resolveFromAll, function(error) {
                                        if (!called) {
                                            called = true;
                                            handlers.reject(promise, error);
                                        }
                                    });

                                    function resolveFromAll(outValue) {
                                        values[i] = outValue;
                                        if (++resolved === len && !called) {
                                            called = true;
                                            handlers.resolve(promise, values);
                                        }
                                    }
                                }
                            }

                            Promise.race = race;

                            function race(iterable) {
                                var self = this;
                                if (Object.prototype.toString.call(iterable) !== '[object Array]') {
                                    return this.reject(new TypeError('must be an array'));
                                }

                                var len = iterable.length;
                                var called = false;
                                if (!len) {
                                    return this.resolve([]);
                                }

                                var i = -1;
                                var promise = new this(INTERNAL);

                                while (++i < len) {
                                    resolver(iterable[i]);
                                }
                                return promise;

                                function resolver(value) {
                                    self.resolve(value).then(function(response) {
                                        if (!called) {
                                            called = true;
                                            handlers.resolve(promise, response);
                                        }
                                    }, function(error) {
                                        if (!called) {
                                            called = true;
                                            handlers.reject(promise, error);
                                        }
                                    });
                                }
                            }

                        }, {
                            "1": 1
                        }],
                        3: [function(_dereq_, module, exports) {
                            (function(global) {
                                'use strict';
                                if (typeof global.Promise !== 'function') {
                                    global.Promise = _dereq_(2);
                                }

                            }).call(this, typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : true ? window : 0)
                        }, {
                            "2": 2
                        }],
                        4: [function(_dereq_, module, exports) {
                            'use strict';

                            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                                return typeof obj;
                            } : function(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };

                            function _classCallCheck(instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }

                            function getIDB() {
                                /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
                                try {
                                    if (typeof indexedDB !== 'undefined') {
                                        return indexedDB;
                                    }
                                    if (typeof webkitIndexedDB !== 'undefined') {
                                        return webkitIndexedDB;
                                    }
                                    if (typeof mozIndexedDB !== 'undefined') {
                                        return mozIndexedDB;
                                    }
                                    if (typeof OIndexedDB !== 'undefined') {
                                        return OIndexedDB;
                                    }
                                    if (typeof msIndexedDB !== 'undefined') {
                                        return msIndexedDB;
                                    }
                                } catch (e) {
                                    return;
                                }
                            }

                            var idb = getIDB();

                            function isIndexedDBValid() {
                                try {
                                    // Initialize IndexedDB; fall back to vendor-prefixed versions
                                    // if needed.
                                    if (!idb || !idb.open) {
                                        return false;
                                    }
                                    // We mimic PouchDB here;
                                    //
                                    // We test for openDatabase because IE Mobile identifies itself
                                    // as Safari. Oh the lulz...
                                    var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

                                    var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

                                    // Safari <10.1 does not meet our requirements for IDB support
                                    // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                                    // Safari 10.1 shipped with fetch, we can use that to detect it.
                                    // Note: this creates issues with `window.fetch` polyfills and
                                    // overrides; see:
                                    // https://github.com/localForage/localForage/issues/856
                                    return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
                                        // some outdated implementations of IDB that appear on Samsung
                                        // and HTC Android devices <4.4 are missing IDBKeyRange
                                        // See: https://github.com/mozilla/localForage/issues/128
                                        // See: https://github.com/mozilla/localForage/issues/272
                                        typeof IDBKeyRange !== 'undefined';
                                } catch (e) {
                                    return false;
                                }
                            }

                            // Abstracts constructing a Blob object, so it also works in older
                            // browsers that don't support the native Blob constructor. (i.e.
                            // old QtWebKit versions, at least).
                            // Abstracts constructing a Blob object, so it also works in older
                            // browsers that don't support the native Blob constructor. (i.e.
                            // old QtWebKit versions, at least).
                            function createBlob(parts, properties) {
                                /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
                                parts = parts || [];
                                properties = properties || {};
                                try {
                                    return new Blob(parts, properties);
                                } catch (e) {
                                    if (e.name !== 'TypeError') {
                                        throw e;
                                    }
                                    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
                                    var builder = new Builder();
                                    for (var i = 0; i < parts.length; i += 1) {
                                        builder.append(parts[i]);
                                    }
                                    return builder.getBlob(properties.type);
                                }
                            }

                            // This is CommonJS because lie is an external dependency, so Rollup
                            // can just ignore it.
                            if (typeof Promise === 'undefined') {
                                // In the "nopromises" build this will just throw if you don't have
                                // a global promise object, but it would throw anyway later.
                                _dereq_(3);
                            }
                            var Promise$1 = Promise;

                            function executeCallback(promise, callback) {
                                if (callback) {
                                    promise.then(function(result) {
                                        callback(null, result);
                                    }, function(error) {
                                        callback(error);
                                    });
                                }
                            }

                            function executeTwoCallbacks(promise, callback, errorCallback) {
                                if (typeof callback === 'function') {
                                    promise.then(callback);
                                }

                                if (typeof errorCallback === 'function') {
                                    promise["catch"](errorCallback);
                                }
                            }

                            function normalizeKey(key) {
                                // Cast the key to a string, as that's all we can set as a key.
                                if (typeof key !== 'string') {
                                    console.warn(key + ' used as a key, but it is not a string.');
                                    key = String(key);
                                }

                                return key;
                            }

                            function getCallback() {
                                if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
                                    return arguments[arguments.length - 1];
                                }
                            }

                            // Some code originally from async_storage.js in
                            // [Gaia](https://github.com/mozilla-b2g/gaia).

                            var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
                            var supportsBlobs = void 0;
                            var dbContexts = {};
                            var toString = Object.prototype.toString;

                            // Transaction Modes
                            var READ_ONLY = 'readonly';
                            var READ_WRITE = 'readwrite';

                            // Transform a binary string to an array buffer, because otherwise
                            // weird stuff happens when you try to work with the binary string directly.
                            // It is known.
                            // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                            // encode-decode-image-with-base64-breaks-image (2013-04-21)
                            function _binStringToArrayBuffer(bin) {
                                var length = bin.length;
                                var buf = new ArrayBuffer(length);
                                var arr = new Uint8Array(buf);
                                for (var i = 0; i < length; i++) {
                                    arr[i] = bin.charCodeAt(i);
                                }
                                return buf;
                            }

                            //
                            // Blobs are not supported in all versions of IndexedDB, notably
                            // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                            //
                            // Various other blob bugs exist in Chrome v37-42 (inclusive).
                            // Detecting them is expensive and confusing to users, and Chrome 37-42
                            // is at very low usage worldwide, so we do a hacky userAgent check instead.
                            //
                            // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                            // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                            // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                            //
                            // Code borrowed from PouchDB. See:
                            // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                            //
                            function _checkBlobSupportWithoutCaching(idb) {
                                return new Promise$1(function(resolve) {
                                    var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
                                    var blob = createBlob(['']);
                                    txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

                                    txn.onabort = function(e) {
                                        // If the transaction aborts now its due to not being able to
                                        // write to the database, likely due to the disk being full
                                        e.preventDefault();
                                        e.stopPropagation();
                                        resolve(false);
                                    };

                                    txn.oncomplete = function() {
                                        var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                                        var matchedEdge = navigator.userAgent.match(/Edge\//);
                                        // MS Edge pretends to be Chrome 42:
                                        // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                                        resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
                                    };
                                })["catch"](function() {
                                    return false; // error, so assume unsupported
                                });
                            }

                            function _checkBlobSupport(idb) {
                                if (typeof supportsBlobs === 'boolean') {
                                    return Promise$1.resolve(supportsBlobs);
                                }
                                return _checkBlobSupportWithoutCaching(idb).then(function(value) {
                                    supportsBlobs = value;
                                    return supportsBlobs;
                                });
                            }

                            function _deferReadiness(dbInfo) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Create a deferred object representing the current database operation.
                                var deferredOperation = {};

                                deferredOperation.promise = new Promise$1(function(resolve, reject) {
                                    deferredOperation.resolve = resolve;
                                    deferredOperation.reject = reject;
                                });

                                // Enqueue the deferred operation.
                                dbContext.deferredOperations.push(deferredOperation);

                                // Chain its promise to the database readiness.
                                if (!dbContext.dbReady) {
                                    dbContext.dbReady = deferredOperation.promise;
                                } else {
                                    dbContext.dbReady = dbContext.dbReady.then(function() {
                                        return deferredOperation.promise;
                                    });
                                }
                            }

                            function _advanceReadiness(dbInfo) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Dequeue a deferred operation.
                                var deferredOperation = dbContext.deferredOperations.pop();

                                // Resolve its promise (which is part of the database readiness
                                // chain of promises).
                                if (deferredOperation) {
                                    deferredOperation.resolve();
                                    return deferredOperation.promise;
                                }
                            }

                            function _rejectReadiness(dbInfo, err) {
                                var dbContext = dbContexts[dbInfo.name];

                                // Dequeue a deferred operation.
                                var deferredOperation = dbContext.deferredOperations.pop();

                                // Reject its promise (which is part of the database readiness
                                // chain of promises).
                                if (deferredOperation) {
                                    deferredOperation.reject(err);
                                    return deferredOperation.promise;
                                }
                            }

                            function _getConnection(dbInfo, upgradeNeeded) {
                                return new Promise$1(function(resolve, reject) {
                                    dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

                                    if (dbInfo.db) {
                                        if (upgradeNeeded) {
                                            _deferReadiness(dbInfo);
                                            dbInfo.db.close();
                                        } else {
                                            return resolve(dbInfo.db);
                                        }
                                    }

                                    var dbArgs = [dbInfo.name];

                                    if (upgradeNeeded) {
                                        dbArgs.push(dbInfo.version);
                                    }

                                    var openreq = idb.open.apply(idb, dbArgs);

                                    if (upgradeNeeded) {
                                        openreq.onupgradeneeded = function(e) {
                                            var db = openreq.result;
                                            try {
                                                db.createObjectStore(dbInfo.storeName);
                                                if (e.oldVersion <= 1) {
                                                    // Added when support for blob shims was added
                                                    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                                                }
                                            } catch (ex) {
                                                if (ex.name === 'ConstraintError') {
                                                    console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                                                } else {
                                                    throw ex;
                                                }
                                            }
                                        };
                                    }

                                    openreq.onerror = function(e) {
                                        e.preventDefault();
                                        reject(openreq.error);
                                    };

                                    openreq.onsuccess = function() {
                                        var db = openreq.result;
                                        db.onversionchange = function(e) {
                                            // Triggered when the database is modified (e.g. adding an objectStore) or
                                            // deleted (even when initiated by other sessions in different tabs).
                                            // Closing the connection here prevents those operations from being blocked.
                                            // If the database is accessed again later by this instance, the connection
                                            // will be reopened or the database recreated as needed.
                                            e.target.close();
                                        };
                                        resolve(db);
                                        _advanceReadiness(dbInfo);
                                    };
                                });
                            }

                            function _getOriginalConnection(dbInfo) {
                                return _getConnection(dbInfo, false);
                            }

                            function _getUpgradedConnection(dbInfo) {
                                return _getConnection(dbInfo, true);
                            }

                            function _isUpgradeNeeded(dbInfo, defaultVersion) {
                                if (!dbInfo.db) {
                                    return true;
                                }

                                var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
                                var isDowngrade = dbInfo.version < dbInfo.db.version;
                                var isUpgrade = dbInfo.version > dbInfo.db.version;

                                if (isDowngrade) {
                                    // If the version is not the default one
                                    // then warn for impossible downgrade.
                                    if (dbInfo.version !== defaultVersion) {
                                        console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                                    }
                                    // Align the versions to prevent errors.
                                    dbInfo.version = dbInfo.db.version;
                                }

                                if (isUpgrade || isNewStore) {
                                    // If the store is new then increment the version (if needed).
                                    // This will trigger an "upgradeneeded" event which is required
                                    // for creating a store.
                                    if (isNewStore) {
                                        var incVersion = dbInfo.db.version + 1;
                                        if (incVersion > dbInfo.version) {
                                            dbInfo.version = incVersion;
                                        }
                                    }

                                    return true;
                                }

                                return false;
                            }

                            // encode a blob for indexeddb engines that don't support blobs
                            function _encodeBlob(blob) {
                                return new Promise$1(function(resolve, reject) {
                                    var reader = new FileReader();
                                    reader.onerror = reject;
                                    reader.onloadend = function(e) {
                                        var base64 = btoa(e.target.result || '');
                                        resolve({
                                            __local_forage_encoded_blob: true,
                                            data: base64,
                                            type: blob.type
                                        });
                                    };
                                    reader.readAsBinaryString(blob);
                                });
                            }

                            // decode an encoded blob
                            function _decodeBlob(encodedBlob) {
                                var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
                                return createBlob([arrayBuff], {
                                    type: encodedBlob.type
                                });
                            }

                            // is this one of our fancy encoded blobs?
                            function _isEncodedBlob(value) {
                                return value && value.__local_forage_encoded_blob;
                            }

                            // Specialize the default `ready()` function by making it dependent
                            // on the current database operations. Thus, the driver will be actually
                            // ready when it's been initialized (default) *and* there are no pending
                            // operations on the database (initiated by some other instances).
                            function _fullyReady(callback) {
                                var self = this;

                                var promise = self._initReady().then(function() {
                                    var dbContext = dbContexts[self._dbInfo.name];

                                    if (dbContext && dbContext.dbReady) {
                                        return dbContext.dbReady;
                                    }
                                });

                                executeTwoCallbacks(promise, callback, callback);
                                return promise;
                            }

                            // Try to establish a new db connection to replace the
                            // current one which is broken (i.e. experiencing
                            // InvalidStateError while creating a transaction).
                            function _tryReconnect(dbInfo) {
                                _deferReadiness(dbInfo);

                                var dbContext = dbContexts[dbInfo.name];
                                var forages = dbContext.forages;

                                for (var i = 0; i < forages.length; i++) {
                                    var forage = forages[i];
                                    if (forage._dbInfo.db) {
                                        forage._dbInfo.db.close();
                                        forage._dbInfo.db = null;
                                    }
                                }
                                dbInfo.db = null;

                                return _getOriginalConnection(dbInfo).then(function(db) {
                                    dbInfo.db = db;
                                    if (_isUpgradeNeeded(dbInfo)) {
                                        // Reopen the database for upgrading.
                                        return _getUpgradedConnection(dbInfo);
                                    }
                                    return db;
                                }).then(function(db) {
                                    // store the latest db reference
                                    // in case the db was upgraded
                                    dbInfo.db = dbContext.db = db;
                                    for (var i = 0; i < forages.length; i++) {
                                        forages[i]._dbInfo.db = db;
                                    }
                                })["catch"](function(err) {
                                    _rejectReadiness(dbInfo, err);
                                    throw err;
                                });
                            }

                            // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                            // so we have to do it with callbacks
                            function createTransaction(dbInfo, mode, callback, retries) {
                                if (retries === undefined) {
                                    retries = 1;
                                }

                                try {
                                    var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                                    callback(null, tx);
                                } catch (err) {
                                    if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
                                        return Promise$1.resolve().then(function() {
                                            if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                                                // increase the db version, to create the new ObjectStore
                                                if (dbInfo.db) {
                                                    dbInfo.version = dbInfo.db.version + 1;
                                                }
                                                // Reopen the database for upgrading.
                                                return _getUpgradedConnection(dbInfo);
                                            }
                                        }).then(function() {
                                            return _tryReconnect(dbInfo).then(function() {
                                                createTransaction(dbInfo, mode, callback, retries - 1);
                                            });
                                        })["catch"](callback);
                                    }

                                    callback(err);
                                }
                            }

                            function createDbContext() {
                                return {
                                    // Running localForages sharing a database.
                                    forages: [],
                                    // Shared database.
                                    db: null,
                                    // Database readiness (promise).
                                    dbReady: null,
                                    // Deferred operations on the database.
                                    deferredOperations: []
                                };
                            }

                            // Open the IndexedDB database (automatically creates one if one didn't
                            // previously exist), using any options set in the config.
                            function _initStorage(options) {
                                var self = this;
                                var dbInfo = {
                                    db: null
                                };

                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = options[i];
                                    }
                                }

                                // Get the current context of the database;
                                var dbContext = dbContexts[dbInfo.name];

                                // ...or create a new context.
                                if (!dbContext) {
                                    dbContext = createDbContext();
                                    // Register the new context in the global container.
                                    dbContexts[dbInfo.name] = dbContext;
                                }

                                // Register itself as a running localForage in the current context.
                                dbContext.forages.push(self);

                                // Replace the default `ready()` function with the specialized one.
                                if (!self._initReady) {
                                    self._initReady = self.ready;
                                    self.ready = _fullyReady;
                                }

                                // Create an array of initialization states of the related localForages.
                                var initPromises = [];

                                function ignoreErrors() {
                                    // Don't handle errors here,
                                    // just makes sure related localForages aren't pending.
                                    return Promise$1.resolve();
                                }

                                for (var j = 0; j < dbContext.forages.length; j++) {
                                    var forage = dbContext.forages[j];
                                    if (forage !== self) {
                                        // Don't wait for itself...
                                        initPromises.push(forage._initReady()["catch"](ignoreErrors));
                                    }
                                }

                                // Take a snapshot of the related localForages.
                                var forages = dbContext.forages.slice(0);

                                // Initialize the connection process only when
                                // all the related localForages aren't pending.
                                return Promise$1.all(initPromises).then(function() {
                                    dbInfo.db = dbContext.db;
                                    // Get the connection or open a new one without upgrade.
                                    return _getOriginalConnection(dbInfo);
                                }).then(function(db) {
                                    dbInfo.db = db;
                                    if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
                                        // Reopen the database for upgrading.
                                        return _getUpgradedConnection(dbInfo);
                                    }
                                    return db;
                                }).then(function(db) {
                                    dbInfo.db = dbContext.db = db;
                                    self._dbInfo = dbInfo;
                                    // Share the final connection amongst related localForages.
                                    for (var k = 0; k < forages.length; k++) {
                                        var forage = forages[k];
                                        if (forage !== self) {
                                            // Self is already up-to-date.
                                            forage._dbInfo.db = dbInfo.db;
                                            forage._dbInfo.version = dbInfo.version;
                                        }
                                    }
                                });
                            }

                            function getItem(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.get(key);

                                                req.onsuccess = function() {
                                                    var value = req.result;
                                                    if (value === undefined) {
                                                        value = null;
                                                    }
                                                    if (_isEncodedBlob(value)) {
                                                        value = _decodeBlob(value);
                                                    }
                                                    resolve(value);
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Iterate over all items stored in database.
                            function iterate(iterator, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.openCursor();
                                                var iterationNumber = 1;

                                                req.onsuccess = function() {
                                                    var cursor = req.result;

                                                    if (cursor) {
                                                        var value = cursor.value;
                                                        if (_isEncodedBlob(value)) {
                                                            value = _decodeBlob(value);
                                                        }
                                                        var result = iterator(value, cursor.key, iterationNumber++);

                                                        // when the iterator callback returns any
                                                        // (non-`undefined`) value, then we stop
                                                        // the iteration immediately
                                                        if (result !== void 0) {
                                                            resolve(result);
                                                        } else {
                                                            cursor["continue"]();
                                                        }
                                                    } else {
                                                        resolve();
                                                    }
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);

                                return promise;
                            }

                            function setItem(key, value, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    var dbInfo;
                                    self.ready().then(function() {
                                        dbInfo = self._dbInfo;
                                        if (toString.call(value) === '[object Blob]') {
                                            return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                                                if (blobSupport) {
                                                    return value;
                                                }
                                                return _encodeBlob(value);
                                            });
                                        }
                                        return value;
                                    }).then(function(value) {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);

                                                // The reason we don't _save_ null is because IE 10 does
                                                // not support saving the `null` type in IndexedDB. How
                                                // ironic, given the bug below!
                                                // See: https://github.com/mozilla/localForage/issues/161
                                                if (value === null) {
                                                    value = undefined;
                                                }

                                                var req = store.put(value, key);

                                                transaction.oncomplete = function() {
                                                    // Cast to undefined so the value passed to
                                                    // callback/promise is the same as what one would get out
                                                    // of `getItem()` later. This leads to some weirdness
                                                    // (setItem('foo', undefined) will return `null`), but
                                                    // it's not my fault localStorage is our baseline and that
                                                    // it's weird.
                                                    if (value === undefined) {
                                                        value = null;
                                                    }

                                                    resolve(value);
                                                };
                                                transaction.onabort = transaction.onerror = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function removeItem(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                // We use a Grunt task to make this safe for IE and some
                                                // versions of Android (including those used by Cordova).
                                                // Normally IE won't like `.delete()` and will insist on
                                                // using `['delete']()`, but we have a build step that
                                                // fixes this for us now.
                                                var req = store["delete"](key);
                                                transaction.oncomplete = function() {
                                                    resolve();
                                                };

                                                transaction.onerror = function() {
                                                    reject(req.error);
                                                };

                                                // The request will be also be aborted if we've exceeded our storage
                                                // space.
                                                transaction.onabort = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function clear(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_WRITE, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.clear();

                                                transaction.oncomplete = function() {
                                                    resolve();
                                                };

                                                transaction.onabort = transaction.onerror = function() {
                                                    var err = req.error ? req.error : req.transaction.error;
                                                    reject(err);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function length(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.count();

                                                req.onsuccess = function() {
                                                    resolve(req.result);
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function key(n, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    if (n < 0) {
                                        resolve(null);

                                        return;
                                    }

                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var advanced = false;
                                                var req = store.openKeyCursor();

                                                req.onsuccess = function() {
                                                    var cursor = req.result;
                                                    if (!cursor) {
                                                        // this means there weren't enough keys
                                                        resolve(null);

                                                        return;
                                                    }

                                                    if (n === 0) {
                                                        // We have the first key, return it if that's what they
                                                        // wanted.
                                                        resolve(cursor.key);
                                                    } else {
                                                        if (!advanced) {
                                                            // Otherwise, ask the cursor to skip ahead n
                                                            // records.
                                                            advanced = true;
                                                            cursor.advance(n);
                                                        } else {
                                                            // When we get here, we've got the nth key.
                                                            resolve(cursor.key);
                                                        }
                                                    }
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        createTransaction(self._dbInfo, READ_ONLY, function(err, transaction) {
                                            if (err) {
                                                return reject(err);
                                            }

                                            try {
                                                var store = transaction.objectStore(self._dbInfo.storeName);
                                                var req = store.openKeyCursor();
                                                var keys = [];

                                                req.onsuccess = function() {
                                                    var cursor = req.result;

                                                    if (!cursor) {
                                                        resolve(keys);
                                                        return;
                                                    }

                                                    keys.push(cursor.key);
                                                    cursor["continue"]();
                                                };

                                                req.onerror = function() {
                                                    reject(req.error);
                                                };
                                            } catch (e) {
                                                reject(e);
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function dropInstance(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                var currentConfig = this.config();
                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

                                    var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                                        var dbContext = dbContexts[options.name];
                                        var forages = dbContext.forages;
                                        dbContext.db = db;
                                        for (var i = 0; i < forages.length; i++) {
                                            forages[i]._dbInfo.db = db;
                                        }
                                        return db;
                                    });

                                    if (!options.storeName) {
                                        promise = dbPromise.then(function(db) {
                                            _deferReadiness(options);

                                            var dbContext = dbContexts[options.name];
                                            var forages = dbContext.forages;

                                            db.close();
                                            for (var i = 0; i < forages.length; i++) {
                                                var forage = forages[i];
                                                forage._dbInfo.db = null;
                                            }

                                            var dropDBPromise = new Promise$1(function(resolve, reject) {
                                                var req = idb.deleteDatabase(options.name);

                                                req.onerror = function() {
                                                    var db = req.result;
                                                    if (db) {
                                                        db.close();
                                                    }
                                                    reject(req.error);
                                                };

                                                req.onblocked = function() {
                                                    // Closing all open connections in onversionchange handler should prevent this situation, but if
                                                    // we do get here, it just means the request remains pending - eventually it will succeed or error
                                                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                                                };

                                                req.onsuccess = function() {
                                                    var db = req.result;
                                                    if (db) {
                                                        db.close();
                                                    }
                                                    resolve(db);
                                                };
                                            });

                                            return dropDBPromise.then(function(db) {
                                                dbContext.db = db;
                                                for (var i = 0; i < forages.length; i++) {
                                                    var _forage = forages[i];
                                                    _advanceReadiness(_forage._dbInfo);
                                                }
                                            })["catch"](function(err) {
                                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                                throw err;
                                            });
                                        });
                                    } else {
                                        promise = dbPromise.then(function(db) {
                                            if (!db.objectStoreNames.contains(options.storeName)) {
                                                return;
                                            }

                                            var newVersion = db.version + 1;

                                            _deferReadiness(options);

                                            var dbContext = dbContexts[options.name];
                                            var forages = dbContext.forages;

                                            db.close();
                                            for (var i = 0; i < forages.length; i++) {
                                                var forage = forages[i];
                                                forage._dbInfo.db = null;
                                                forage._dbInfo.version = newVersion;
                                            }

                                            var dropObjectPromise = new Promise$1(function(resolve, reject) {
                                                var req = idb.open(options.name, newVersion);

                                                req.onerror = function(err) {
                                                    var db = req.result;
                                                    db.close();
                                                    reject(err);
                                                };

                                                req.onupgradeneeded = function() {
                                                    var db = req.result;
                                                    db.deleteObjectStore(options.storeName);
                                                };

                                                req.onsuccess = function() {
                                                    var db = req.result;
                                                    db.close();
                                                    resolve(db);
                                                };
                                            });

                                            return dropObjectPromise.then(function(db) {
                                                dbContext.db = db;
                                                for (var j = 0; j < forages.length; j++) {
                                                    var _forage2 = forages[j];
                                                    _forage2._dbInfo.db = db;
                                                    _advanceReadiness(_forage2._dbInfo);
                                                }
                                            })["catch"](function(err) {
                                                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {});
                                                throw err;
                                            });
                                        });
                                    }
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var asyncStorage = {
                                _driver: 'asyncStorage',
                                _initStorage: _initStorage,
                                _support: isIndexedDBValid(),
                                iterate: iterate,
                                getItem: getItem,
                                setItem: setItem,
                                removeItem: removeItem,
                                clear: clear,
                                length: length,
                                key: key,
                                keys: keys,
                                dropInstance: dropInstance
                            };

                            function isWebSQLValid() {
                                return typeof openDatabase === 'function';
                            }

                            // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                            // it to Base64, so this is how we store it to prevent very strange errors with less
                            // verbose ways of binary <-> string data storage.
                            var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

                            var BLOB_TYPE_PREFIX = '~~local_forage_type~';
                            var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

                            var SERIALIZED_MARKER = '__lfsc__:';
                            var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

                            // OMG the serializations!
                            var TYPE_ARRAYBUFFER = 'arbf';
                            var TYPE_BLOB = 'blob';
                            var TYPE_INT8ARRAY = 'si08';
                            var TYPE_UINT8ARRAY = 'ui08';
                            var TYPE_UINT8CLAMPEDARRAY = 'uic8';
                            var TYPE_INT16ARRAY = 'si16';
                            var TYPE_INT32ARRAY = 'si32';
                            var TYPE_UINT16ARRAY = 'ur16';
                            var TYPE_UINT32ARRAY = 'ui32';
                            var TYPE_FLOAT32ARRAY = 'fl32';
                            var TYPE_FLOAT64ARRAY = 'fl64';
                            var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

                            var toString$1 = Object.prototype.toString;

                            function stringToBuffer(serializedString) {
                                // Fill the string into a ArrayBuffer.
                                var bufferLength = serializedString.length * 0.75;
                                var len = serializedString.length;
                                var i;
                                var p = 0;
                                var encoded1, encoded2, encoded3, encoded4;

                                if (serializedString[serializedString.length - 1] === '=') {
                                    bufferLength--;
                                    if (serializedString[serializedString.length - 2] === '=') {
                                        bufferLength--;
                                    }
                                }

                                var buffer = new ArrayBuffer(bufferLength);
                                var bytes = new Uint8Array(buffer);

                                for (i = 0; i < len; i += 4) {
                                    encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                                    encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                                    encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                                    encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

                                    /*jslint bitwise: true */
                                    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                                    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                                    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                                }
                                return buffer;
                            }

                            // Converts a buffer to a string to store, serialized, in the backend
                            // storage library.
                            function bufferToString(buffer) {
                                // base64-arraybuffer
                                var bytes = new Uint8Array(buffer);
                                var base64String = '';
                                var i;

                                for (i = 0; i < bytes.length; i += 3) {
                                    /*jslint bitwise: true */
                                    base64String += BASE_CHARS[bytes[i] >> 2];
                                    base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                                    base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                                    base64String += BASE_CHARS[bytes[i + 2] & 63];
                                }

                                if (bytes.length % 3 === 2) {
                                    base64String = base64String.substring(0, base64String.length - 1) + '=';
                                } else if (bytes.length % 3 === 1) {
                                    base64String = base64String.substring(0, base64String.length - 2) + '==';
                                }

                                return base64String;
                            }

                            // Serialize a value, afterwards executing a callback (which usually
                            // instructs the `setItem()` callback/promise to be executed). This is how
                            // we store binary data with localStorage.
                            function serialize(value, callback) {
                                var valueType = '';
                                if (value) {
                                    valueType = toString$1.call(value);
                                }

                                // Cannot use `value instanceof ArrayBuffer` or such here, as these
                                // checks fail when running the tests using casper.js...
                                //
                                // TODO: See why those tests fail and use a better solution.
                                if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
                                    // Convert binary arrays to a string and prefix the string with
                                    // a special marker.
                                    var buffer;
                                    var marker = SERIALIZED_MARKER;

                                    if (value instanceof ArrayBuffer) {
                                        buffer = value;
                                        marker += TYPE_ARRAYBUFFER;
                                    } else {
                                        buffer = value.buffer;

                                        if (valueType === '[object Int8Array]') {
                                            marker += TYPE_INT8ARRAY;
                                        } else if (valueType === '[object Uint8Array]') {
                                            marker += TYPE_UINT8ARRAY;
                                        } else if (valueType === '[object Uint8ClampedArray]') {
                                            marker += TYPE_UINT8CLAMPEDARRAY;
                                        } else if (valueType === '[object Int16Array]') {
                                            marker += TYPE_INT16ARRAY;
                                        } else if (valueType === '[object Uint16Array]') {
                                            marker += TYPE_UINT16ARRAY;
                                        } else if (valueType === '[object Int32Array]') {
                                            marker += TYPE_INT32ARRAY;
                                        } else if (valueType === '[object Uint32Array]') {
                                            marker += TYPE_UINT32ARRAY;
                                        } else if (valueType === '[object Float32Array]') {
                                            marker += TYPE_FLOAT32ARRAY;
                                        } else if (valueType === '[object Float64Array]') {
                                            marker += TYPE_FLOAT64ARRAY;
                                        } else {
                                            callback(new Error('Failed to get type for BinaryArray'));
                                        }
                                    }

                                    callback(marker + bufferToString(buffer));
                                } else if (valueType === '[object Blob]') {
                                    // Conver the blob to a binaryArray and then to a string.
                                    var fileReader = new FileReader();

                                    fileReader.onload = function() {
                                        // Backwards-compatible prefix for the blob type.
                                        var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

                                        callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                                    };

                                    fileReader.readAsArrayBuffer(value);
                                } else {
                                    try {
                                        callback(JSON.stringify(value));
                                    } catch (e) {
                                        console.error("Couldn't convert value into a JSON string: ", value);

                                        callback(null, e);
                                    }
                                }
                            }

                            // Deserialize data we've inserted into a value column/field. We place
                            // special markers into our strings to mark them as encoded; this isn't
                            // as nice as a meta field, but it's the only sane thing we can do whilst
                            // keeping localStorage support intact.
                            //
                            // Oftentimes this will just deserialize JSON content, but if we have a
                            // special marker (SERIALIZED_MARKER, defined above), we will extract
                            // some kind of arraybuffer/binary data/typed array out of the string.
                            function deserialize(value) {
                                // If we haven't marked this string as being specially serialized (i.e.
                                // something other than serialized JSON), we can just return it and be
                                // done with it.
                                if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
                                    return JSON.parse(value);
                                }

                                // The following code deals with deserializing some kind of Blob or
                                // TypedArray. First we separate out the type of data we're dealing
                                // with from the data itself.
                                var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
                                var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

                                var blobType;
                                // Backwards-compatible blob type serialization strategy.
                                // DBs created with older versions of localForage will simply not have the blob type.
                                if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                                    var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                                    blobType = matcher[1];
                                    serializedString = serializedString.substring(matcher[0].length);
                                }
                                var buffer = stringToBuffer(serializedString);

                                // Return the right type based on the code/type set during
                                // serialization.
                                switch (type) {
                                    case TYPE_ARRAYBUFFER:
                                        return buffer;
                                    case TYPE_BLOB:
                                        return createBlob([buffer], {
                                            type: blobType
                                        });
                                    case TYPE_INT8ARRAY:
                                        return new Int8Array(buffer);
                                    case TYPE_UINT8ARRAY:
                                        return new Uint8Array(buffer);
                                    case TYPE_UINT8CLAMPEDARRAY:
                                        return new Uint8ClampedArray(buffer);
                                    case TYPE_INT16ARRAY:
                                        return new Int16Array(buffer);
                                    case TYPE_UINT16ARRAY:
                                        return new Uint16Array(buffer);
                                    case TYPE_INT32ARRAY:
                                        return new Int32Array(buffer);
                                    case TYPE_UINT32ARRAY:
                                        return new Uint32Array(buffer);
                                    case TYPE_FLOAT32ARRAY:
                                        return new Float32Array(buffer);
                                    case TYPE_FLOAT64ARRAY:
                                        return new Float64Array(buffer);
                                    default:
                                        throw new Error('Unkown type: ' + type);
                                }
                            }

                            var localforageSerializer = {
                                serialize: serialize,
                                deserialize: deserialize,
                                stringToBuffer: stringToBuffer,
                                bufferToString: bufferToString
                            };

                            /*
                             * Includes code from:
                             *
                             * base64-arraybuffer
                             * https://github.com/niklasvh/base64-arraybuffer
                             *
                             * Copyright (c) 2012 Niklas von Hertzen
                             * Licensed under the MIT license.
                             */

                            function createDbTable(t, dbInfo, callback, errorCallback) {
                                t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
                            }

                            // Open the WebSQL database (automatically creates one if one didn't
                            // previously exist), using any options set in the config.
                            function _initStorage$1(options) {
                                var self = this;
                                var dbInfo = {
                                    db: null
                                };

                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                                    }
                                }

                                var dbInfoPromise = new Promise$1(function(resolve, reject) {
                                    // Open the database; the openDatabase API will automatically
                                    // create it for us if it doesn't exist.
                                    try {
                                        dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                                    } catch (e) {
                                        return reject(e);
                                    }

                                    // Create our key/value table if it doesn't exist.
                                    dbInfo.db.transaction(function(t) {
                                        createDbTable(t, dbInfo, function() {
                                            self._dbInfo = dbInfo;
                                            resolve();
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    }, reject);
                                });

                                dbInfo.serializer = localforageSerializer;
                                return dbInfoPromise;
                            }

                            function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
                                t.executeSql(sqlStatement, args, callback, function(t, error) {
                                    if (error.code === error.SYNTAX_ERR) {
                                        t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function(t, results) {
                                            if (!results.rows.length) {
                                                // if the table is missing (was deleted)
                                                // re-create it table and retry
                                                createDbTable(t, dbInfo, function() {
                                                    t.executeSql(sqlStatement, args, callback, errorCallback);
                                                }, errorCallback);
                                            } else {
                                                errorCallback(t, error);
                                            }
                                        }, errorCallback);
                                    } else {
                                        errorCallback(t, error);
                                    }
                                }, errorCallback);
                            }

                            function getItem$1(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function(t, results) {
                                                var result = results.rows.length ? results.rows.item(0).value : null;

                                                // Check to see if this is serialized content we need to
                                                // unpack.
                                                if (result) {
                                                    result = dbInfo.serializer.deserialize(result);
                                                }

                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function iterate$1(iterator, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;

                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var rows = results.rows;
                                                var length = rows.length;

                                                for (var i = 0; i < length; i++) {
                                                    var item = rows.item(i);
                                                    var result = item.value;

                                                    // Check to see if this is serialized content
                                                    // we need to unpack.
                                                    if (result) {
                                                        result = dbInfo.serializer.deserialize(result);
                                                    }

                                                    result = iterator(result, item.key, i + 1);

                                                    // void(0) prevents problems with redefinition
                                                    // of `undefined`.
                                                    if (result !== void 0) {
                                                        resolve(result);
                                                        return;
                                                    }
                                                }

                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function _setItem(key, value, callback, retriesLeft) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        // The localStorage API doesn't return undefined values in an
                                        // "expected" way, so undefined is always cast to null in all
                                        // drivers. See: https://github.com/mozilla/localForage/pull/42
                                        if (value === undefined) {
                                            value = null;
                                        }

                                        // Save the original value to pass to the callback.
                                        var originalValue = value;

                                        var dbInfo = self._dbInfo;
                                        dbInfo.serializer.serialize(value, function(value, error) {
                                            if (error) {
                                                reject(error);
                                            } else {
                                                dbInfo.db.transaction(function(t) {
                                                    tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function() {
                                                        resolve(originalValue);
                                                    }, function(t, error) {
                                                        reject(error);
                                                    });
                                                }, function(sqlError) {
                                                    // The transaction failed; check
                                                    // to see if it's a quota error.
                                                    if (sqlError.code === sqlError.QUOTA_ERR) {
                                                        // We reject the callback outright for now, but
                                                        // it's worth trying to re-run the transaction.
                                                        // Even if the user accepts the prompt to use
                                                        // more storage on Safari, this error will
                                                        // be called.
                                                        //
                                                        // Try to re-run the transaction.
                                                        if (retriesLeft > 0) {
                                                            resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                                            return;
                                                        }
                                                        reject(sqlError);
                                                    }
                                                });
                                            }
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function setItem$1(key, value, callback) {
                                return _setItem.apply(this, [key, value, callback, 1]);
                            }

                            function removeItem$1(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function() {
                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Deletes every item in the table.
                            // TODO: Find out if this resets the AUTO_INCREMENT number.
                            function clear$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function() {
                                                resolve();
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Does a simple `COUNT(key)` to get the number of items stored in
                            // localForage.
                            function length$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            // Ahhh, SQL makes this one soooooo easy.
                                            tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var result = results.rows.item(0).c;
                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Return the key located at key index X; essentially gets the key from a
                            // `WHERE id = ?`. This is the most efficient way I can think to implement
                            // this rarely-used (in my experience) part of the API, but it can seem
                            // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                            // the ID of each key will change every time it's updated. Perhaps a stored
                            // procedure for the `setItem()` SQL would solve this problem?
                            // TODO: Don't change ID on `setItem()`.
                            function key$1(n, callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function(t, results) {
                                                var result = results.rows.length ? results.rows.item(0).key : null;
                                                resolve(result);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys$1(callback) {
                                var self = this;

                                var promise = new Promise$1(function(resolve, reject) {
                                    self.ready().then(function() {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.db.transaction(function(t) {
                                            tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function(t, results) {
                                                var keys = [];

                                                for (var i = 0; i < results.rows.length; i++) {
                                                    keys.push(results.rows.item(i).key);
                                                }

                                                resolve(keys);
                                            }, function(t, error) {
                                                reject(error);
                                            });
                                        });
                                    })["catch"](reject);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // https://www.w3.org/TR/webdatabase/#databases
                            // > There is no way to enumerate or delete the databases available for an origin from this API.
                            function getAllStoreNames(db) {
                                return new Promise$1(function(resolve, reject) {
                                    db.transaction(function(t) {
                                        t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t, results) {
                                            var storeNames = [];

                                            for (var i = 0; i < results.rows.length; i++) {
                                                storeNames.push(results.rows.item(i).name);
                                            }

                                            resolve({
                                                db: db,
                                                storeNames: storeNames
                                            });
                                        }, function(t, error) {
                                            reject(error);
                                        });
                                    }, function(sqlError) {
                                        reject(sqlError);
                                    });
                                });
                            }

                            function dropInstance$1(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                var currentConfig = this.config();
                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    promise = new Promise$1(function(resolve) {
                                        var db;
                                        if (options.name === currentConfig.name) {
                                            // use the db reference of the current instance
                                            db = self._dbInfo.db;
                                        } else {
                                            db = openDatabase(options.name, '', '', 0);
                                        }

                                        if (!options.storeName) {
                                            // drop all database tables
                                            resolve(getAllStoreNames(db));
                                        } else {
                                            resolve({
                                                db: db,
                                                storeNames: [options.storeName]
                                            });
                                        }
                                    }).then(function(operationInfo) {
                                        return new Promise$1(function(resolve, reject) {
                                            operationInfo.db.transaction(function(t) {
                                                function dropTable(storeName) {
                                                    return new Promise$1(function(resolve, reject) {
                                                        t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function() {
                                                            resolve();
                                                        }, function(t, error) {
                                                            reject(error);
                                                        });
                                                    });
                                                }

                                                var operations = [];
                                                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                                                    operations.push(dropTable(operationInfo.storeNames[i]));
                                                }

                                                Promise$1.all(operations).then(function() {
                                                    resolve();
                                                })["catch"](function(e) {
                                                    reject(e);
                                                });
                                            }, function(sqlError) {
                                                reject(sqlError);
                                            });
                                        });
                                    });
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var webSQLStorage = {
                                _driver: 'webSQLStorage',
                                _initStorage: _initStorage$1,
                                _support: isWebSQLValid(),
                                iterate: iterate$1,
                                getItem: getItem$1,
                                setItem: setItem$1,
                                removeItem: removeItem$1,
                                clear: clear$1,
                                length: length$1,
                                key: key$1,
                                keys: keys$1,
                                dropInstance: dropInstance$1
                            };

                            function isLocalStorageValid() {
                                try {
                                    return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
                                        // in IE8 typeof localStorage.setItem === 'object'
                                        !!localStorage.setItem;
                                } catch (e) {
                                    return false;
                                }
                            }

                            function _getKeyPrefix(options, defaultConfig) {
                                var keyPrefix = options.name + '/';

                                if (options.storeName !== defaultConfig.storeName) {
                                    keyPrefix += options.storeName + '/';
                                }
                                return keyPrefix;
                            }

                            // Check if localStorage throws when saving an item
                            function checkIfLocalStorageThrows() {
                                var localStorageTestKey = '_localforage_support_test';

                                try {
                                    localStorage.setItem(localStorageTestKey, true);
                                    localStorage.removeItem(localStorageTestKey);

                                    return false;
                                } catch (e) {
                                    return true;
                                }
                            }

                            // Check if localStorage is usable and allows to save an item
                            // This method checks if localStorage is usable in Safari Private Browsing
                            // mode, or in any other case where the available quota for localStorage
                            // is 0 and there wasn't any saved items yet.
                            function _isLocalStorageUsable() {
                                return !checkIfLocalStorageThrows() || localStorage.length > 0;
                            }

                            // Config the localStorage backend, using options set in the config.
                            function _initStorage$2(options) {
                                var self = this;
                                var dbInfo = {};
                                if (options) {
                                    for (var i in options) {
                                        dbInfo[i] = options[i];
                                    }
                                }

                                dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

                                if (!_isLocalStorageUsable()) {
                                    return Promise$1.reject();
                                }

                                self._dbInfo = dbInfo;
                                dbInfo.serializer = localforageSerializer;

                                return Promise$1.resolve();
                            }

                            // Remove all keys from the datastore, effectively destroying all data in
                            // the app's key/value store!
                            function clear$2(callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var keyPrefix = self._dbInfo.keyPrefix;

                                    for (var i = localStorage.length - 1; i >= 0; i--) {
                                        var key = localStorage.key(i);

                                        if (key.indexOf(keyPrefix) === 0) {
                                            localStorage.removeItem(key);
                                        }
                                    }
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Retrieve an item from the store. Unlike the original async_storage
                            // library in Gaia, we don't modify return values at all. If a key's value
                            // is `undefined`, we pass that value to the callback function.
                            function getItem$2(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var result = localStorage.getItem(dbInfo.keyPrefix + key);

                                    // If a result was found, parse it from the serialized
                                    // string into a JS object. If result isn't truthy, the key
                                    // is likely undefined and we'll pass it straight to the
                                    // callback.
                                    if (result) {
                                        result = dbInfo.serializer.deserialize(result);
                                    }

                                    return result;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Iterate over all items in the store.
                            function iterate$2(iterator, callback) {
                                var self = this;

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var keyPrefix = dbInfo.keyPrefix;
                                    var keyPrefixLength = keyPrefix.length;
                                    var length = localStorage.length;

                                    // We use a dedicated iterator instead of the `i` variable below
                                    // so other keys we fetch in localStorage aren't counted in
                                    // the `iterationNumber` argument passed to the `iterate()`
                                    // callback.
                                    //
                                    // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                                    var iterationNumber = 1;

                                    for (var i = 0; i < length; i++) {
                                        var key = localStorage.key(i);
                                        if (key.indexOf(keyPrefix) !== 0) {
                                            continue;
                                        }
                                        var value = localStorage.getItem(key);

                                        // If a result was found, parse it from the serialized
                                        // string into a JS object. If result isn't truthy, the
                                        // key is likely undefined and we'll pass it straight
                                        // to the iterator.
                                        if (value) {
                                            value = dbInfo.serializer.deserialize(value);
                                        }

                                        value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

                                        if (value !== void 0) {
                                            return value;
                                        }
                                    }
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Same as localStorage's key() method, except takes a callback.
                            function key$2(n, callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var result;
                                    try {
                                        result = localStorage.key(n);
                                    } catch (error) {
                                        result = null;
                                    }

                                    // Remove the prefix from the key, if a key is found.
                                    if (result) {
                                        result = result.substring(dbInfo.keyPrefix.length);
                                    }

                                    return result;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function keys$2(callback) {
                                var self = this;
                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    var length = localStorage.length;
                                    var keys = [];

                                    for (var i = 0; i < length; i++) {
                                        var itemKey = localStorage.key(i);
                                        if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                                            keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                                        }
                                    }

                                    return keys;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Supply the number of keys in the datastore to the callback function.
                            function length$2(callback) {
                                var self = this;
                                var promise = self.keys().then(function(keys) {
                                    return keys.length;
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Remove an item from the store, nice and simple.
                            function removeItem$2(key, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    var dbInfo = self._dbInfo;
                                    localStorage.removeItem(dbInfo.keyPrefix + key);
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            // Set a key's value and run an optional callback once the value is set.
                            // Unlike Gaia's implementation, the callback function is passed the value,
                            // in case you want to operate on that value only after you're sure it
                            // saved, or something like that.
                            function setItem$2(key, value, callback) {
                                var self = this;

                                key = normalizeKey(key);

                                var promise = self.ready().then(function() {
                                    // Convert undefined values to null.
                                    // https://github.com/mozilla/localForage/pull/42
                                    if (value === undefined) {
                                        value = null;
                                    }

                                    // Save the original value to pass to the callback.
                                    var originalValue = value;

                                    return new Promise$1(function(resolve, reject) {
                                        var dbInfo = self._dbInfo;
                                        dbInfo.serializer.serialize(value, function(value, error) {
                                            if (error) {
                                                reject(error);
                                            } else {
                                                try {
                                                    localStorage.setItem(dbInfo.keyPrefix + key, value);
                                                    resolve(originalValue);
                                                } catch (e) {
                                                    // localStorage capacity exceeded.
                                                    // TODO: Make this a specific error/event.
                                                    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                                                        reject(e);
                                                    }
                                                    reject(e);
                                                }
                                            }
                                        });
                                    });
                                });

                                executeCallback(promise, callback);
                                return promise;
                            }

                            function dropInstance$2(options, callback) {
                                callback = getCallback.apply(this, arguments);

                                options = typeof options !== 'function' && options || {};
                                if (!options.name) {
                                    var currentConfig = this.config();
                                    options.name = options.name || currentConfig.name;
                                    options.storeName = options.storeName || currentConfig.storeName;
                                }

                                var self = this;
                                var promise;
                                if (!options.name) {
                                    promise = Promise$1.reject('Invalid arguments');
                                } else {
                                    promise = new Promise$1(function(resolve) {
                                        if (!options.storeName) {
                                            resolve(options.name + '/');
                                        } else {
                                            resolve(_getKeyPrefix(options, self._defaultConfig));
                                        }
                                    }).then(function(keyPrefix) {
                                        for (var i = localStorage.length - 1; i >= 0; i--) {
                                            var key = localStorage.key(i);

                                            if (key.indexOf(keyPrefix) === 0) {
                                                localStorage.removeItem(key);
                                            }
                                        }
                                    });
                                }

                                executeCallback(promise, callback);
                                return promise;
                            }

                            var localStorageWrapper = {
                                _driver: 'localStorageWrapper',
                                _initStorage: _initStorage$2,
                                _support: isLocalStorageValid(),
                                iterate: iterate$2,
                                getItem: getItem$2,
                                setItem: setItem$2,
                                removeItem: removeItem$2,
                                clear: clear$2,
                                length: length$2,
                                key: key$2,
                                keys: keys$2,
                                dropInstance: dropInstance$2
                            };

                            var sameValue = function sameValue(x, y) {
                                return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                            };

                            var includes = function includes(array, searchElement) {
                                var len = array.length;
                                var i = 0;
                                while (i < len) {
                                    if (sameValue(array[i], searchElement)) {
                                        return true;
                                    }
                                    i++;
                                }

                                return false;
                            };

                            var isArray = Array.isArray || function(arg) {
                                return Object.prototype.toString.call(arg) === '[object Array]';
                            };

                            // Drivers are stored here when `defineDriver()` is called.
                            // They are shared across all instances of localForage.
                            var DefinedDrivers = {};

                            var DriverSupport = {};

                            var DefaultDrivers = {
                                INDEXEDDB: asyncStorage,
                                WEBSQL: webSQLStorage,
                                LOCALSTORAGE: localStorageWrapper
                            };

                            var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

                            var OptionalDriverMethods = ['dropInstance'];

                            var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

                            var DefaultConfig = {
                                description: '',
                                driver: DefaultDriverOrder.slice(),
                                name: 'localforage',
                                // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                                // we can use without a prompt.
                                size: 4980736,
                                storeName: 'keyvaluepairs',
                                version: 1.0
                            };

                            function callWhenReady(localForageInstance, libraryMethod) {
                                localForageInstance[libraryMethod] = function() {
                                    var _args = arguments;
                                    return localForageInstance.ready().then(function() {
                                        return localForageInstance[libraryMethod].apply(localForageInstance, _args);
                                    });
                                };
                            }

                            function extend() {
                                for (var i = 1; i < arguments.length; i++) {
                                    var arg = arguments[i];

                                    if (arg) {
                                        for (var _key in arg) {
                                            if (arg.hasOwnProperty(_key)) {
                                                if (isArray(arg[_key])) {
                                                    arguments[0][_key] = arg[_key].slice();
                                                } else {
                                                    arguments[0][_key] = arg[_key];
                                                }
                                            }
                                        }
                                    }
                                }

                                return arguments[0];
                            }

                            var LocalForage = function() {
                                function LocalForage(options) {
                                    _classCallCheck(this, LocalForage);

                                    for (var driverTypeKey in DefaultDrivers) {
                                        if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                                            var driver = DefaultDrivers[driverTypeKey];
                                            var driverName = driver._driver;
                                            this[driverTypeKey] = driverName;

                                            if (!DefinedDrivers[driverName]) {
                                                // we don't need to wait for the promise,
                                                // since the default drivers can be defined
                                                // in a blocking manner
                                                this.defineDriver(driver);
                                            }
                                        }
                                    }

                                    this._defaultConfig = extend({}, DefaultConfig);
                                    this._config = extend({}, this._defaultConfig, options);
                                    this._driverSet = null;
                                    this._initDriver = null;
                                    this._ready = false;
                                    this._dbInfo = null;

                                    this._wrapLibraryMethodsWithReady();
                                    this.setDriver(this._config.driver)["catch"](function() {});
                                }

                                // Set any config values for localForage; can be called anytime before
                                // the first API call (e.g. `getItem`, `setItem`).
                                // We loop through options so we don't overwrite existing config
                                // values.


                                LocalForage.prototype.config = function config(options) {
                                    // If the options argument is an object, we use it to set values.
                                    // Otherwise, we return either a specified config value or all
                                    // config values.
                                    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                                        // If localforage is ready and fully initialized, we can't set
                                        // any new configuration values. Instead, we return an error.
                                        if (this._ready) {
                                            return new Error("Can't call config() after localforage " + 'has been used.');
                                        }

                                        for (var i in options) {
                                            if (i === 'storeName') {
                                                options[i] = options[i].replace(/\W/g, '_');
                                            }

                                            if (i === 'version' && typeof options[i] !== 'number') {
                                                return new Error('Database version must be a number.');
                                            }

                                            this._config[i] = options[i];
                                        }

                                        // after all config options are set and
                                        // the driver option is used, try setting it
                                        if ('driver' in options && options.driver) {
                                            return this.setDriver(this._config.driver);
                                        }

                                        return true;
                                    } else if (typeof options === 'string') {
                                        return this._config[options];
                                    } else {
                                        return this._config;
                                    }
                                };

                                // Used to define a custom driver, shared across all instances of
                                // localForage.


                                LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
                                    var promise = new Promise$1(function(resolve, reject) {
                                        try {
                                            var driverName = driverObject._driver;
                                            var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                                            // A driver name should be defined and not overlap with the
                                            // library-defined, default drivers.
                                            if (!driverObject._driver) {
                                                reject(complianceError);
                                                return;
                                            }

                                            var driverMethods = LibraryMethods.concat('_initStorage');
                                            for (var i = 0, len = driverMethods.length; i < len; i++) {
                                                var driverMethodName = driverMethods[i];

                                                // when the property is there,
                                                // it should be a method even when optional
                                                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                                                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                                                    reject(complianceError);
                                                    return;
                                                }
                                            }

                                            var configureMissingMethods = function configureMissingMethods() {
                                                var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                                                    return function() {
                                                        var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                                                        var promise = Promise$1.reject(error);
                                                        executeCallback(promise, arguments[arguments.length - 1]);
                                                        return promise;
                                                    };
                                                };

                                                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                                                    var optionalDriverMethod = OptionalDriverMethods[_i];
                                                    if (!driverObject[optionalDriverMethod]) {
                                                        driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                                                    }
                                                }
                                            };

                                            configureMissingMethods();

                                            var setDriverSupport = function setDriverSupport(support) {
                                                if (DefinedDrivers[driverName]) {
                                                    console.info('Redefining LocalForage driver: ' + driverName);
                                                }
                                                DefinedDrivers[driverName] = driverObject;
                                                DriverSupport[driverName] = support;
                                                // don't use a then, so that we can define
                                                // drivers that have simple _support methods
                                                // in a blocking manner
                                                resolve();
                                            };

                                            if ('_support' in driverObject) {
                                                if (driverObject._support && typeof driverObject._support === 'function') {
                                                    driverObject._support().then(setDriverSupport, reject);
                                                } else {
                                                    setDriverSupport(!!driverObject._support);
                                                }
                                            } else {
                                                setDriverSupport(true);
                                            }
                                        } catch (e) {
                                            reject(e);
                                        }
                                    });

                                    executeTwoCallbacks(promise, callback, errorCallback);
                                    return promise;
                                };

                                LocalForage.prototype.driver = function driver() {
                                    return this._driver || null;
                                };

                                LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
                                    var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

                                    executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                                    return getDriverPromise;
                                };

                                LocalForage.prototype.getSerializer = function getSerializer(callback) {
                                    var serializerPromise = Promise$1.resolve(localforageSerializer);
                                    executeTwoCallbacks(serializerPromise, callback);
                                    return serializerPromise;
                                };

                                LocalForage.prototype.ready = function ready(callback) {
                                    var self = this;

                                    var promise = self._driverSet.then(function() {
                                        if (self._ready === null) {
                                            self._ready = self._initDriver();
                                        }

                                        return self._ready;
                                    });

                                    executeTwoCallbacks(promise, callback, callback);
                                    return promise;
                                };

                                LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
                                    var self = this;

                                    if (!isArray(drivers)) {
                                        drivers = [drivers];
                                    }

                                    var supportedDrivers = this._getSupportedDrivers(drivers);

                                    function setDriverToConfig() {
                                        self._config.driver = self.driver();
                                    }

                                    function extendSelfWithDriver(driver) {
                                        self._extend(driver);
                                        setDriverToConfig();

                                        self._ready = self._initStorage(self._config);
                                        return self._ready;
                                    }

                                    function initDriver(supportedDrivers) {
                                        return function() {
                                            var currentDriverIndex = 0;

                                            function driverPromiseLoop() {
                                                while (currentDriverIndex < supportedDrivers.length) {
                                                    var driverName = supportedDrivers[currentDriverIndex];
                                                    currentDriverIndex++;

                                                    self._dbInfo = null;
                                                    self._ready = null;

                                                    return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                                                }

                                                setDriverToConfig();
                                                var error = new Error('No available storage method found.');
                                                self._driverSet = Promise$1.reject(error);
                                                return self._driverSet;
                                            }

                                            return driverPromiseLoop();
                                        };
                                    }

                                    // There might be a driver initialization in progress
                                    // so wait for it to finish in order to avoid a possible
                                    // race condition to set _dbInfo
                                    var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                                        return Promise$1.resolve();
                                    }) : Promise$1.resolve();

                                    this._driverSet = oldDriverSetDone.then(function() {
                                        var driverName = supportedDrivers[0];
                                        self._dbInfo = null;
                                        self._ready = null;

                                        return self.getDriver(driverName).then(function(driver) {
                                            self._driver = driver._driver;
                                            setDriverToConfig();
                                            self._wrapLibraryMethodsWithReady();
                                            self._initDriver = initDriver(supportedDrivers);
                                        });
                                    })["catch"](function() {
                                        setDriverToConfig();
                                        var error = new Error('No available storage method found.');
                                        self._driverSet = Promise$1.reject(error);
                                        return self._driverSet;
                                    });

                                    executeTwoCallbacks(this._driverSet, callback, errorCallback);
                                    return this._driverSet;
                                };

                                LocalForage.prototype.supports = function supports(driverName) {
                                    return !!DriverSupport[driverName];
                                };

                                LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
                                    extend(this, libraryMethodsAndProperties);
                                };

                                LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
                                    var supportedDrivers = [];
                                    for (var i = 0, len = drivers.length; i < len; i++) {
                                        var driverName = drivers[i];
                                        if (this.supports(driverName)) {
                                            supportedDrivers.push(driverName);
                                        }
                                    }
                                    return supportedDrivers;
                                };

                                LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
                                    // Add a stub for each driver API method that delays the call to the
                                    // corresponding driver method until localForage is ready. These stubs
                                    // will be replaced by the driver methods as soon as the driver is
                                    // loaded, so there is no performance impact.
                                    for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                                        callWhenReady(this, LibraryMethods[i]);
                                    }
                                };

                                LocalForage.prototype.createInstance = function createInstance(options) {
                                    return new LocalForage(options);
                                };

                                return LocalForage;
                            }();

                            // The actual localForage object that we expose as a module or via a
                            // global. It's extended by pulling in one of our other libraries.


                            var localforage_js = new LocalForage();

                            module.exports = localforage_js;

                        }, {
                            "3": 3
                        }]
                    }, {}, [4])(4)
                });


                /***/
            }),

        /***/
        "t+GO":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA"),
                    root = __webpack_require__("O4yA");

                /* Built-in method references that are verified to be native. */
                var DataView = getNative(root, 'DataView');

                module.exports = DataView;


                /***/
            }),

        /***/
        "7xa0":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var hashClear = __webpack_require__("3rdh"),
                    hashDelete = __webpack_require__("Q69t"),
                    hashGet = __webpack_require__("xuOn"),
                    hashHas = __webpack_require__("ZsxT"),
                    hashSet = __webpack_require__("lUrU");

                /**
                 * Creates a hash object.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function Hash(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `Hash`.
                Hash.prototype.clear = hashClear;
                Hash.prototype['delete'] = hashDelete;
                Hash.prototype.get = hashGet;
                Hash.prototype.has = hashHas;
                Hash.prototype.set = hashSet;

                module.exports = Hash;


                /***/
            }),

        /***/
        "ry6q":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var listCacheClear = __webpack_require__("7HYU"),
                    listCacheDelete = __webpack_require__("Oax0"),
                    listCacheGet = __webpack_require__("1DF2"),
                    listCacheHas = __webpack_require__("UtSM"),
                    listCacheSet = __webpack_require__("TDWY");

                /**
                 * Creates an list cache object.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function ListCache(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `ListCache`.
                ListCache.prototype.clear = listCacheClear;
                ListCache.prototype['delete'] = listCacheDelete;
                ListCache.prototype.get = listCacheGet;
                ListCache.prototype.has = listCacheHas;
                ListCache.prototype.set = listCacheSet;

                module.exports = ListCache;


                /***/
            }),

        /***/
        "GQDD":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA"),
                    root = __webpack_require__("O4yA");

                /* Built-in method references that are verified to be native. */
                var Map = getNative(root, 'Map');

                module.exports = Map;


                /***/
            }),

        /***/
        "67Yi":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var mapCacheClear = __webpack_require__("K29s"),
                    mapCacheDelete = __webpack_require__("AU2x"),
                    mapCacheGet = __webpack_require__("u7Ge"),
                    mapCacheHas = __webpack_require__("w7O4"),
                    mapCacheSet = __webpack_require__("GRr6");

                /**
                 * Creates a map cache object to store key-value pairs.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function MapCache(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `MapCache`.
                MapCache.prototype.clear = mapCacheClear;
                MapCache.prototype['delete'] = mapCacheDelete;
                MapCache.prototype.get = mapCacheGet;
                MapCache.prototype.has = mapCacheHas;
                MapCache.prototype.set = mapCacheSet;

                module.exports = MapCache;


                /***/
            }),

        /***/
        "megh":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA"),
                    root = __webpack_require__("O4yA");

                /* Built-in method references that are verified to be native. */
                var Promise = getNative(root, 'Promise');

                module.exports = Promise;


                /***/
            }),

        /***/
        "NSh6":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA"),
                    root = __webpack_require__("O4yA");

                /* Built-in method references that are verified to be native. */
                var Set = getNative(root, 'Set');

                module.exports = Set;


                /***/
            }),

        /***/
        "2lI5":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var MapCache = __webpack_require__("67Yi"),
                    setCacheAdd = __webpack_require__("orhk"),
                    setCacheHas = __webpack_require__("zzA2");

                /**
                 *
                 * Creates an array cache object to store unique values.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [values] The values to cache.
                 */
                function SetCache(values) {
                    var index = -1,
                        length = values == null ? 0 : values.length;

                    this.__data__ = new MapCache;
                    while (++index < length) {
                        this.add(values[index]);
                    }
                }

                // Add methods to `SetCache`.
                SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
                SetCache.prototype.has = setCacheHas;

                module.exports = SetCache;


                /***/
            }),

        /***/
        "Zjmp":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var ListCache = __webpack_require__("ry6q"),
                    stackClear = __webpack_require__("mIaV"),
                    stackDelete = __webpack_require__("EA9V"),
                    stackGet = __webpack_require__("nXRf"),
                    stackHas = __webpack_require__("KSsz"),
                    stackSet = __webpack_require__("M9kN");

                /**
                 * Creates a stack cache object to store key-value pairs.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function Stack(entries) {
                    var data = this.__data__ = new ListCache(entries);
                    this.size = data.size;
                }

                // Add methods to `Stack`.
                Stack.prototype.clear = stackClear;
                Stack.prototype['delete'] = stackDelete;
                Stack.prototype.get = stackGet;
                Stack.prototype.has = stackHas;
                Stack.prototype.set = stackSet;

                module.exports = Stack;


                /***/
            }),

        /***/
        "cBxx":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var root = __webpack_require__("O4yA");

                /** Built-in value references. */
                var Symbol = root.Symbol;

                module.exports = Symbol;


                /***/
            }),

        /***/
        "MyUB":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var root = __webpack_require__("O4yA");

                /** Built-in value references. */
                var Uint8Array = root.Uint8Array;

                module.exports = Uint8Array;


                /***/
            }),

        /***/
        "PVOi":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA"),
                    root = __webpack_require__("O4yA");

                /* Built-in method references that are verified to be native. */
                var WeakMap = getNative(root, 'WeakMap');

                module.exports = WeakMap;


                /***/
            }),

        /***/
        "m/tl":
            /***/
            ((module) => {

                /**
                 * A faster alternative to `Function#apply`, this function invokes `func`
                 * with the `this` binding of `thisArg` and the arguments of `args`.
                 *
                 * @private
                 * @param {Function} func The function to invoke.
                 * @param {*} thisArg The `this` binding of `func`.
                 * @param {Array} args The arguments to invoke `func` with.
                 * @returns {*} Returns the result of `func`.
                 */
                function apply(func, thisArg, args) {
                    switch (args.length) {
                        case 0:
                            return func.call(thisArg);
                        case 1:
                            return func.call(thisArg, args[0]);
                        case 2:
                            return func.call(thisArg, args[0], args[1]);
                        case 3:
                            return func.call(thisArg, args[0], args[1], args[2]);
                    }
                    return func.apply(thisArg, args);
                }

                module.exports = apply;


                /***/
            }),

        /***/
        "/mR/":
            /***/
            ((module) => {

                /**
                 * A specialized version of `baseAggregator` for arrays.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} setter The function to set `accumulator` values.
                 * @param {Function} iteratee The iteratee to transform keys.
                 * @param {Object} accumulator The initial aggregated object.
                 * @returns {Function} Returns `accumulator`.
                 */
                function arrayAggregator(array, setter, iteratee, accumulator) {
                    var index = -1,
                        length = array == null ? 0 : array.length;

                    while (++index < length) {
                        var value = array[index];
                        setter(accumulator, value, iteratee(value), array);
                    }
                    return accumulator;
                }

                module.exports = arrayAggregator;


                /***/
            }),

        /***/
        "Frnp":
            /***/
            ((module) => {

                /**
                 * A specialized version of `_.forEach` for arrays without support for
                 * iteratee shorthands.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array} Returns `array`.
                 */
                function arrayEach(array, iteratee) {
                    var index = -1,
                        length = array == null ? 0 : array.length;

                    while (++index < length) {
                        if (iteratee(array[index], index, array) === false) {
                            break;
                        }
                    }
                    return array;
                }

                module.exports = arrayEach;


                /***/
            }),

        /***/
        "58gk":
            /***/
            ((module) => {

                /**
                 * A specialized version of `_.filter` for arrays without support for
                 * iteratee shorthands.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} predicate The function invoked per iteration.
                 * @returns {Array} Returns the new filtered array.
                 */
                function arrayFilter(array, predicate) {
                    var index = -1,
                        length = array == null ? 0 : array.length,
                        resIndex = 0,
                        result = [];

                    while (++index < length) {
                        var value = array[index];
                        if (predicate(value, index, array)) {
                            result[resIndex++] = value;
                        }
                    }
                    return result;
                }

                module.exports = arrayFilter;


                /***/
            }),

        /***/
        "pgBP":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseTimes = __webpack_require__("DQ/D"),
                    isArguments = __webpack_require__("1Grl"),
                    isArray = __webpack_require__("eoSM"),
                    isBuffer = __webpack_require__("Zsrj"),
                    isIndex = __webpack_require__("Txlo"),
                    isTypedArray = __webpack_require__("GC0I");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Creates an array of the enumerable property names of the array-like `value`.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @param {boolean} inherited Specify returning inherited property names.
                 * @returns {Array} Returns the array of property names.
                 */
                function arrayLikeKeys(value, inherited) {
                    var isArr = isArray(value),
                        isArg = !isArr && isArguments(value),
                        isBuff = !isArr && !isArg && isBuffer(value),
                        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                        skipIndexes = isArr || isArg || isBuff || isType,
                        result = skipIndexes ? baseTimes(value.length, String) : [],
                        length = result.length;

                    for (var key in value) {
                        if ((inherited || hasOwnProperty.call(value, key)) &&
                            !(skipIndexes && (
                                // Safari 9 has enumerable `arguments.length` in strict mode.
                                key == 'length' ||
                                // Node.js 0.10 has enumerable non-index properties on buffers.
                                (isBuff && (key == 'offset' || key == 'parent')) ||
                                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                                (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                                // Skip index properties.
                                isIndex(key, length)
                            ))) {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = arrayLikeKeys;


                /***/
            }),

        /***/
        "+reW":
            /***/
            ((module) => {

                /**
                 * A specialized version of `_.map` for arrays without support for iteratee
                 * shorthands.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array} Returns the new mapped array.
                 */
                function arrayMap(array, iteratee) {
                    var index = -1,
                        length = array == null ? 0 : array.length,
                        result = Array(length);

                    while (++index < length) {
                        result[index] = iteratee(array[index], index, array);
                    }
                    return result;
                }

                module.exports = arrayMap;


                /***/
            }),

        /***/
        "muZu":
            /***/
            ((module) => {

                /**
                 * Appends the elements of `values` to `array`.
                 *
                 * @private
                 * @param {Array} array The array to modify.
                 * @param {Array} values The values to append.
                 * @returns {Array} Returns `array`.
                 */
                function arrayPush(array, values) {
                    var index = -1,
                        length = values.length,
                        offset = array.length;

                    while (++index < length) {
                        array[offset + index] = values[index];
                    }
                    return array;
                }

                module.exports = arrayPush;


                /***/
            }),

        /***/
        "1aIJ":
            /***/
            ((module) => {

                /**
                 * A specialized version of `_.some` for arrays without support for iteratee
                 * shorthands.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} predicate The function invoked per iteration.
                 * @returns {boolean} Returns `true` if any element passes the predicate check,
                 *  else `false`.
                 */
                function arraySome(array, predicate) {
                    var index = -1,
                        length = array == null ? 0 : array.length;

                    while (++index < length) {
                        if (predicate(array[index], index, array)) {
                            return true;
                        }
                    }
                    return false;
                }

                module.exports = arraySome;


                /***/
            }),

        /***/
        "TZ1K":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseAssignValue = __webpack_require__("Sxfv"),
                    eq = __webpack_require__("fkhx");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Assigns `value` to `key` of `object` if the existing value is not equivalent
                 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
                 * for equality comparisons.
                 *
                 * @private
                 * @param {Object} object The object to modify.
                 * @param {string} key The key of the property to assign.
                 * @param {*} value The value to assign.
                 */
                function assignValue(object, key, value) {
                    var objValue = object[key];
                    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
                        (value === undefined && !(key in object))) {
                        baseAssignValue(object, key, value);
                    }
                }

                module.exports = assignValue;


                /***/
            }),

        /***/
        "rkJ6":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var eq = __webpack_require__("fkhx");

                /**
                 * Gets the index at which the `key` is found in `array` of key-value pairs.
                 *
                 * @private
                 * @param {Array} array The array to inspect.
                 * @param {*} key The key to search for.
                 * @returns {number} Returns the index of the matched value, else `-1`.
                 */
                function assocIndexOf(array, key) {
                    var length = array.length;
                    while (length--) {
                        if (eq(array[length][0], key)) {
                            return length;
                        }
                    }
                    return -1;
                }

                module.exports = assocIndexOf;


                /***/
            }),

        /***/
        "k+TV":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseEach = __webpack_require__("yXtN");

                /**
                 * Aggregates elements of `collection` on `accumulator` with keys transformed
                 * by `iteratee` and values set by `setter`.
                 *
                 * @private
                 * @param {Array|Object} collection The collection to iterate over.
                 * @param {Function} setter The function to set `accumulator` values.
                 * @param {Function} iteratee The iteratee to transform keys.
                 * @param {Object} accumulator The initial aggregated object.
                 * @returns {Function} Returns `accumulator`.
                 */
                function baseAggregator(collection, setter, iteratee, accumulator) {
                    baseEach(collection, function(value, key, collection) {
                        setter(accumulator, value, iteratee(value), collection);
                    });
                    return accumulator;
                }

                module.exports = baseAggregator;


                /***/
            }),

        /***/
        "BuoU":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var copyObject = __webpack_require__("suam"),
                    keys = __webpack_require__("6vUj");

                /**
                 * The base implementation of `_.assign` without support for multiple sources
                 * or `customizer` functions.
                 *
                 * @private
                 * @param {Object} object The destination object.
                 * @param {Object} source The source object.
                 * @returns {Object} Returns `object`.
                 */
                function baseAssign(object, source) {
                    return object && copyObject(source, keys(source), object);
                }

                module.exports = baseAssign;


                /***/
            }),

        /***/
        "R6Qu":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var copyObject = __webpack_require__("suam"),
                    keysIn = __webpack_require__("38cL");

                /**
                 * The base implementation of `_.assignIn` without support for multiple sources
                 * or `customizer` functions.
                 *
                 * @private
                 * @param {Object} object The destination object.
                 * @param {Object} source The source object.
                 * @returns {Object} Returns `object`.
                 */
                function baseAssignIn(object, source) {
                    return object && copyObject(source, keysIn(source), object);
                }

                module.exports = baseAssignIn;


                /***/
            }),

        /***/
        "Sxfv":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var defineProperty = __webpack_require__("tdAR");

                /**
                 * The base implementation of `assignValue` and `assignMergeValue` without
                 * value checks.
                 *
                 * @private
                 * @param {Object} object The object to modify.
                 * @param {string} key The key of the property to assign.
                 * @param {*} value The value to assign.
                 */
                function baseAssignValue(object, key, value) {
                    if (key == '__proto__' && defineProperty) {
                        defineProperty(object, key, {
                            'configurable': true,
                            'enumerable': true,
                            'value': value,
                            'writable': true
                        });
                    } else {
                        object[key] = value;
                    }
                }

                module.exports = baseAssignValue;


                /***/
            }),

        /***/
        "apBQ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Stack = __webpack_require__("Zjmp"),
                    arrayEach = __webpack_require__("Frnp"),
                    assignValue = __webpack_require__("TZ1K"),
                    baseAssign = __webpack_require__("BuoU"),
                    baseAssignIn = __webpack_require__("R6Qu"),
                    cloneBuffer = __webpack_require__("j0b5"),
                    copyArray = __webpack_require__("x22w"),
                    copySymbols = __webpack_require__("Jy9+"),
                    copySymbolsIn = __webpack_require__("lpad"),
                    getAllKeys = __webpack_require__("Mfbz"),
                    getAllKeysIn = __webpack_require__("8cEZ"),
                    getTag = __webpack_require__("Vc2o"),
                    initCloneArray = __webpack_require__("s4xM"),
                    initCloneByTag = __webpack_require__("5AKu"),
                    initCloneObject = __webpack_require__("3sUJ"),
                    isArray = __webpack_require__("eoSM"),
                    isBuffer = __webpack_require__("Zsrj"),
                    isMap = __webpack_require__("dLFG"),
                    isObject = __webpack_require__("PWyJ"),
                    isSet = __webpack_require__("hibQ"),
                    keys = __webpack_require__("6vUj"),
                    keysIn = __webpack_require__("38cL");

                /** Used to compose bitmasks for cloning. */
                var CLONE_DEEP_FLAG = 1,
                    CLONE_FLAT_FLAG = 2,
                    CLONE_SYMBOLS_FLAG = 4;

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]',
                    arrayTag = '[object Array]',
                    boolTag = '[object Boolean]',
                    dateTag = '[object Date]',
                    errorTag = '[object Error]',
                    funcTag = '[object Function]',
                    genTag = '[object GeneratorFunction]',
                    mapTag = '[object Map]',
                    numberTag = '[object Number]',
                    objectTag = '[object Object]',
                    regexpTag = '[object RegExp]',
                    setTag = '[object Set]',
                    stringTag = '[object String]',
                    symbolTag = '[object Symbol]',
                    weakMapTag = '[object WeakMap]';

                var arrayBufferTag = '[object ArrayBuffer]',
                    dataViewTag = '[object DataView]',
                    float32Tag = '[object Float32Array]',
                    float64Tag = '[object Float64Array]',
                    int8Tag = '[object Int8Array]',
                    int16Tag = '[object Int16Array]',
                    int32Tag = '[object Int32Array]',
                    uint8Tag = '[object Uint8Array]',
                    uint8ClampedTag = '[object Uint8ClampedArray]',
                    uint16Tag = '[object Uint16Array]',
                    uint32Tag = '[object Uint32Array]';

                /** Used to identify `toStringTag` values supported by `_.clone`. */
                var cloneableTags = {};
                cloneableTags[argsTag] = cloneableTags[arrayTag] =
                    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
                    cloneableTags[boolTag] = cloneableTags[dateTag] =
                    cloneableTags[float32Tag] = cloneableTags[float64Tag] =
                    cloneableTags[int8Tag] = cloneableTags[int16Tag] =
                    cloneableTags[int32Tag] = cloneableTags[mapTag] =
                    cloneableTags[numberTag] = cloneableTags[objectTag] =
                    cloneableTags[regexpTag] = cloneableTags[setTag] =
                    cloneableTags[stringTag] = cloneableTags[symbolTag] =
                    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                    cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
                cloneableTags[errorTag] = cloneableTags[funcTag] =
                    cloneableTags[weakMapTag] = false;

                /**
                 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
                 * traversed objects.
                 *
                 * @private
                 * @param {*} value The value to clone.
                 * @param {boolean} bitmask The bitmask flags.
                 *  1 - Deep clone
                 *  2 - Flatten inherited properties
                 *  4 - Clone symbols
                 * @param {Function} [customizer] The function to customize cloning.
                 * @param {string} [key] The key of `value`.
                 * @param {Object} [object] The parent object of `value`.
                 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
                 * @returns {*} Returns the cloned value.
                 */
                function baseClone(value, bitmask, customizer, key, object, stack) {
                    var result,
                        isDeep = bitmask & CLONE_DEEP_FLAG,
                        isFlat = bitmask & CLONE_FLAT_FLAG,
                        isFull = bitmask & CLONE_SYMBOLS_FLAG;

                    if (customizer) {
                        result = object ? customizer(value, key, object, stack) : customizer(value);
                    }
                    if (result !== undefined) {
                        return result;
                    }
                    if (!isObject(value)) {
                        return value;
                    }
                    var isArr = isArray(value);
                    if (isArr) {
                        result = initCloneArray(value);
                        if (!isDeep) {
                            return copyArray(value, result);
                        }
                    } else {
                        var tag = getTag(value),
                            isFunc = tag == funcTag || tag == genTag;

                        if (isBuffer(value)) {
                            return cloneBuffer(value, isDeep);
                        }
                        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
                            result = (isFlat || isFunc) ? {} : initCloneObject(value);
                            if (!isDeep) {
                                return isFlat ?
                                    copySymbolsIn(value, baseAssignIn(result, value)) :
                                    copySymbols(value, baseAssign(result, value));
                            }
                        } else {
                            if (!cloneableTags[tag]) {
                                return object ? value : {};
                            }
                            result = initCloneByTag(value, tag, isDeep);
                        }
                    }
                    // Check for circular references and return its corresponding clone.
                    stack || (stack = new Stack);
                    var stacked = stack.get(value);
                    if (stacked) {
                        return stacked;
                    }
                    stack.set(value, result);

                    if (isSet(value)) {
                        value.forEach(function(subValue) {
                            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
                        });
                    } else if (isMap(value)) {
                        value.forEach(function(subValue, key) {
                            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
                        });
                    }

                    var keysFunc = isFull ?
                        (isFlat ? getAllKeysIn : getAllKeys) :
                        (isFlat ? keysIn : keys);

                    var props = isArr ? undefined : keysFunc(value);
                    arrayEach(props || value, function(subValue, key) {
                        if (props) {
                            key = subValue;
                            subValue = value[key];
                        }
                        // Recursively populate clone (susceptible to call stack limits).
                        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
                    });
                    return result;
                }

                module.exports = baseClone;


                /***/
            }),

        /***/
        "SgPr":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isObject = __webpack_require__("PWyJ");

                /** Built-in value references. */
                var objectCreate = Object.create;

                /**
                 * The base implementation of `_.create` without support for assigning
                 * properties to the created object.
                 *
                 * @private
                 * @param {Object} proto The object to inherit from.
                 * @returns {Object} Returns the new object.
                 */
                var baseCreate = (function() {
                    function object() {}
                    return function(proto) {
                        if (!isObject(proto)) {
                            return {};
                        }
                        if (objectCreate) {
                            return objectCreate(proto);
                        }
                        object.prototype = proto;
                        var result = new object;
                        object.prototype = undefined;
                        return result;
                    };
                }());

                module.exports = baseCreate;


                /***/
            }),

        /***/
        "yXtN":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseForOwn = __webpack_require__("Rhdv"),
                    createBaseEach = __webpack_require__("ntC9");

                /**
                 * The base implementation of `_.forEach` without support for iteratee shorthands.
                 *
                 * @private
                 * @param {Array|Object} collection The collection to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array|Object} Returns `collection`.
                 */
                var baseEach = createBaseEach(baseForOwn);

                module.exports = baseEach;


                /***/
            }),

        /***/
        "jKCO":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayPush = __webpack_require__("muZu"),
                    isFlattenable = __webpack_require__("rL8J");

                /**
                 * The base implementation of `_.flatten` with support for restricting flattening.
                 *
                 * @private
                 * @param {Array} array The array to flatten.
                 * @param {number} depth The maximum recursion depth.
                 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
                 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
                 * @param {Array} [result=[]] The initial result value.
                 * @returns {Array} Returns the new flattened array.
                 */
                function baseFlatten(array, depth, predicate, isStrict, result) {
                    var index = -1,
                        length = array.length;

                    predicate || (predicate = isFlattenable);
                    result || (result = []);

                    while (++index < length) {
                        var value = array[index];
                        if (depth > 0 && predicate(value)) {
                            if (depth > 1) {
                                // Recursively flatten arrays (susceptible to call stack limits).
                                baseFlatten(value, depth - 1, predicate, isStrict, result);
                            } else {
                                arrayPush(result, value);
                            }
                        } else if (!isStrict) {
                            result[result.length] = value;
                        }
                    }
                    return result;
                }

                module.exports = baseFlatten;


                /***/
            }),

        /***/
        "UGMk":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var createBaseFor = __webpack_require__("vXAm");

                /**
                 * The base implementation of `baseForOwn` which iterates over `object`
                 * properties returned by `keysFunc` and invokes `iteratee` for each property.
                 * Iteratee functions may exit iteration early by explicitly returning `false`.
                 *
                 * @private
                 * @param {Object} object The object to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @param {Function} keysFunc The function to get the keys of `object`.
                 * @returns {Object} Returns `object`.
                 */
                var baseFor = createBaseFor();

                module.exports = baseFor;


                /***/
            }),

        /***/
        "Rhdv":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseFor = __webpack_require__("UGMk"),
                    keys = __webpack_require__("6vUj");

                /**
                 * The base implementation of `_.forOwn` without support for iteratee shorthands.
                 *
                 * @private
                 * @param {Object} object The object to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Object} Returns `object`.
                 */
                function baseForOwn(object, iteratee) {
                    return object && baseFor(object, iteratee, keys);
                }

                module.exports = baseForOwn;


                /***/
            }),

        /***/
        "capL":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var castPath = __webpack_require__("y24P"),
                    toKey = __webpack_require__("OD7W");

                /**
                 * The base implementation of `_.get` without support for default values.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path of the property to get.
                 * @returns {*} Returns the resolved value.
                 */
                function baseGet(object, path) {
                    path = castPath(path, object);

                    var index = 0,
                        length = path.length;

                    while (object != null && index < length) {
                        object = object[toKey(path[index++])];
                    }
                    return (index && index == length) ? object : undefined;
                }

                module.exports = baseGet;


                /***/
            }),

        /***/
        "FbU2":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayPush = __webpack_require__("muZu"),
                    isArray = __webpack_require__("eoSM");

                /**
                 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
                 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
                 * symbols of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {Function} keysFunc The function to get the keys of `object`.
                 * @param {Function} symbolsFunc The function to get the symbols of `object`.
                 * @returns {Array} Returns the array of property names and symbols.
                 */
                function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                    var result = keysFunc(object);
                    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
                }

                module.exports = baseGetAllKeys;


                /***/
            }),

        /***/
        "PORw":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx"),
                    getRawTag = __webpack_require__("GLQI"),
                    objectToString = __webpack_require__("ohzl");

                /** `Object#toString` result references. */
                var nullTag = '[object Null]',
                    undefinedTag = '[object Undefined]';

                /** Built-in value references. */
                var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

                /**
                 * The base implementation of `getTag` without fallbacks for buggy environments.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @returns {string} Returns the `toStringTag`.
                 */
                function baseGetTag(value) {
                    if (value == null) {
                        return value === undefined ? undefinedTag : nullTag;
                    }
                    return (symToStringTag && symToStringTag in Object(value)) ?
                        getRawTag(value) :
                        objectToString(value);
                }

                module.exports = baseGetTag;


                /***/
            }),

        /***/
        "qilg":
            /***/
            ((module) => {

                /**
                 * The base implementation of `_.hasIn` without support for deep paths.
                 *
                 * @private
                 * @param {Object} [object] The object to query.
                 * @param {Array|string} key The key to check.
                 * @returns {boolean} Returns `true` if `key` exists, else `false`.
                 */
                function baseHasIn(object, key) {
                    return object != null && key in Object(object);
                }

                module.exports = baseHasIn;


                /***/
            }),

        /***/
        "7TNV":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetTag = __webpack_require__("PORw"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]';

                /**
                 * The base implementation of `_.isArguments`.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                 */
                function baseIsArguments(value) {
                    return isObjectLike(value) && baseGetTag(value) == argsTag;
                }

                module.exports = baseIsArguments;


                /***/
            }),

        /***/
        "0Ifp":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsEqualDeep = __webpack_require__("MULs"),
                    isObjectLike = __webpack_require__("lf6h");

                /**
                 * The base implementation of `_.isEqual` which supports partial comparisons
                 * and tracks traversed objects.
                 *
                 * @private
                 * @param {*} value The value to compare.
                 * @param {*} other The other value to compare.
                 * @param {boolean} bitmask The bitmask flags.
                 *  1 - Unordered comparison
                 *  2 - Partial comparison
                 * @param {Function} [customizer] The function to customize comparisons.
                 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
                 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                 */
                function baseIsEqual(value, other, bitmask, customizer, stack) {
                    if (value === other) {
                        return true;
                    }
                    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
                        return value !== value && other !== other;
                    }
                    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
                }

                module.exports = baseIsEqual;


                /***/
            }),

        /***/
        "MULs":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Stack = __webpack_require__("Zjmp"),
                    equalArrays = __webpack_require__("RtFG"),
                    equalByTag = __webpack_require__("0zpI"),
                    equalObjects = __webpack_require__("NRXl"),
                    getTag = __webpack_require__("Vc2o"),
                    isArray = __webpack_require__("eoSM"),
                    isBuffer = __webpack_require__("Zsrj"),
                    isTypedArray = __webpack_require__("GC0I");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1;

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]',
                    arrayTag = '[object Array]',
                    objectTag = '[object Object]';

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * A specialized version of `baseIsEqual` for arrays and objects which performs
                 * deep comparisons and tracks traversed objects enabling objects with circular
                 * references to be compared.
                 *
                 * @private
                 * @param {Object} object The object to compare.
                 * @param {Object} other The other object to compare.
                 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                 * @param {Function} customizer The function to customize comparisons.
                 * @param {Function} equalFunc The function to determine equivalents of values.
                 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
                 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                 */
                function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
                    var objIsArr = isArray(object),
                        othIsArr = isArray(other),
                        objTag = objIsArr ? arrayTag : getTag(object),
                        othTag = othIsArr ? arrayTag : getTag(other);

                    objTag = objTag == argsTag ? objectTag : objTag;
                    othTag = othTag == argsTag ? objectTag : othTag;

                    var objIsObj = objTag == objectTag,
                        othIsObj = othTag == objectTag,
                        isSameTag = objTag == othTag;

                    if (isSameTag && isBuffer(object)) {
                        if (!isBuffer(other)) {
                            return false;
                        }
                        objIsArr = true;
                        objIsObj = false;
                    }
                    if (isSameTag && !objIsObj) {
                        stack || (stack = new Stack);
                        return (objIsArr || isTypedArray(object)) ?
                            equalArrays(object, other, bitmask, customizer, equalFunc, stack) :
                            equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
                    }
                    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

                        if (objIsWrapped || othIsWrapped) {
                            var objUnwrapped = objIsWrapped ? object.value() : object,
                                othUnwrapped = othIsWrapped ? other.value() : other;

                            stack || (stack = new Stack);
                            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                        }
                    }
                    if (!isSameTag) {
                        return false;
                    }
                    stack || (stack = new Stack);
                    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
                }

                module.exports = baseIsEqualDeep;


                /***/
            }),

        /***/
        "R2EU":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getTag = __webpack_require__("Vc2o"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var mapTag = '[object Map]';

                /**
                 * The base implementation of `_.isMap` without Node.js optimizations.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
                 */
                function baseIsMap(value) {
                    return isObjectLike(value) && getTag(value) == mapTag;
                }

                module.exports = baseIsMap;


                /***/
            }),

        /***/
        "diEk":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Stack = __webpack_require__("Zjmp"),
                    baseIsEqual = __webpack_require__("0Ifp");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1,
                    COMPARE_UNORDERED_FLAG = 2;

                /**
                 * The base implementation of `_.isMatch` without support for iteratee shorthands.
                 *
                 * @private
                 * @param {Object} object The object to inspect.
                 * @param {Object} source The object of property values to match.
                 * @param {Array} matchData The property names, values, and compare flags to match.
                 * @param {Function} [customizer] The function to customize comparisons.
                 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
                 */
                function baseIsMatch(object, source, matchData, customizer) {
                    var index = matchData.length,
                        length = index,
                        noCustomizer = !customizer;

                    if (object == null) {
                        return !length;
                    }
                    object = Object(object);
                    while (index--) {
                        var data = matchData[index];
                        if ((noCustomizer && data[2]) ?
                            data[1] !== object[data[0]] :
                            !(data[0] in object)
                        ) {
                            return false;
                        }
                    }
                    while (++index < length) {
                        data = matchData[index];
                        var key = data[0],
                            objValue = object[key],
                            srcValue = data[1];

                        if (noCustomizer && data[2]) {
                            if (objValue === undefined && !(key in object)) {
                                return false;
                            }
                        } else {
                            var stack = new Stack;
                            if (customizer) {
                                var result = customizer(objValue, srcValue, key, object, source, stack);
                            }
                            if (!(result === undefined ?
                                    baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) :
                                    result
                                )) {
                                return false;
                            }
                        }
                    }
                    return true;
                }

                module.exports = baseIsMatch;


                /***/
            }),

        /***/
        "bK3N":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isFunction = __webpack_require__("+U9+"),
                    isMasked = __webpack_require__("e3zV"),
                    isObject = __webpack_require__("PWyJ"),
                    toSource = __webpack_require__("GLf+");

                /**
                 * Used to match `RegExp`
                 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
                 */
                var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

                /** Used to detect host constructors (Safari). */
                var reIsHostCtor = /^\[object .+?Constructor\]$/;

                /** Used for built-in method references. */
                var funcProto = Function.prototype,
                    objectProto = Object.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Used to detect if a method is native. */
                var reIsNative = RegExp('^' +
                    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
                );

                /**
                 * The base implementation of `_.isNative` without bad shim checks.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a native function,
                 *  else `false`.
                 */
                function baseIsNative(value) {
                    if (!isObject(value) || isMasked(value)) {
                        return false;
                    }
                    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                    return pattern.test(toSource(value));
                }

                module.exports = baseIsNative;


                /***/
            }),

        /***/
        "7NGV":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getTag = __webpack_require__("Vc2o"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var setTag = '[object Set]';

                /**
                 * The base implementation of `_.isSet` without Node.js optimizations.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
                 */
                function baseIsSet(value) {
                    return isObjectLike(value) && getTag(value) == setTag;
                }

                module.exports = baseIsSet;


                /***/
            }),

        /***/
        "IuL+":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetTag = __webpack_require__("PORw"),
                    isLength = __webpack_require__("VJj2"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]',
                    arrayTag = '[object Array]',
                    boolTag = '[object Boolean]',
                    dateTag = '[object Date]',
                    errorTag = '[object Error]',
                    funcTag = '[object Function]',
                    mapTag = '[object Map]',
                    numberTag = '[object Number]',
                    objectTag = '[object Object]',
                    regexpTag = '[object RegExp]',
                    setTag = '[object Set]',
                    stringTag = '[object String]',
                    weakMapTag = '[object WeakMap]';

                var arrayBufferTag = '[object ArrayBuffer]',
                    dataViewTag = '[object DataView]',
                    float32Tag = '[object Float32Array]',
                    float64Tag = '[object Float64Array]',
                    int8Tag = '[object Int8Array]',
                    int16Tag = '[object Int16Array]',
                    int32Tag = '[object Int32Array]',
                    uint8Tag = '[object Uint8Array]',
                    uint8ClampedTag = '[object Uint8ClampedArray]',
                    uint16Tag = '[object Uint16Array]',
                    uint32Tag = '[object Uint32Array]';

                /** Used to identify `toStringTag` values of typed arrays. */
                var typedArrayTags = {};
                typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
                    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
                    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
                    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                    typedArrayTags[uint32Tag] = true;
                typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
                    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
                    typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
                    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                    typedArrayTags[setTag] = typedArrayTags[stringTag] =
                    typedArrayTags[weakMapTag] = false;

                /**
                 * The base implementation of `_.isTypedArray` without Node.js optimizations.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                 */
                function baseIsTypedArray(value) {
                    return isObjectLike(value) &&
                        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
                }

                module.exports = baseIsTypedArray;


                /***/
            }),

        /***/
        "Kkyq":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseMatches = __webpack_require__("jCBa"),
                    baseMatchesProperty = __webpack_require__("g/mA"),
                    identity = __webpack_require__("eHdO"),
                    isArray = __webpack_require__("eoSM"),
                    property = __webpack_require__("iRtw");

                /**
                 * The base implementation of `_.iteratee`.
                 *
                 * @private
                 * @param {*} [value=_.identity] The value to convert to an iteratee.
                 * @returns {Function} Returns the iteratee.
                 */
                function baseIteratee(value) {
                    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
                    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
                    if (typeof value == 'function') {
                        return value;
                    }
                    if (value == null) {
                        return identity;
                    }
                    if (typeof value == 'object') {
                        return isArray(value) ?
                            baseMatchesProperty(value[0], value[1]) :
                            baseMatches(value);
                    }
                    return property(value);
                }

                module.exports = baseIteratee;


                /***/
            }),

        /***/
        "dfcU":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isPrototype = __webpack_require__("D7Bi"),
                    nativeKeys = __webpack_require__("7zK7");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 */
                function baseKeys(object) {
                    if (!isPrototype(object)) {
                        return nativeKeys(object);
                    }
                    var result = [];
                    for (var key in Object(object)) {
                        if (hasOwnProperty.call(object, key) && key != 'constructor') {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = baseKeys;


                /***/
            }),

        /***/
        "VMLz":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isObject = __webpack_require__("PWyJ"),
                    isPrototype = __webpack_require__("D7Bi"),
                    nativeKeysIn = __webpack_require__("pLpS");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 */
                function baseKeysIn(object) {
                    if (!isObject(object)) {
                        return nativeKeysIn(object);
                    }
                    var isProto = isPrototype(object),
                        result = [];

                    for (var key in object) {
                        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = baseKeysIn;


                /***/
            }),

        /***/
        "jCBa":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsMatch = __webpack_require__("diEk"),
                    getMatchData = __webpack_require__("t2nn"),
                    matchesStrictComparable = __webpack_require__("HxYL");

                /**
                 * The base implementation of `_.matches` which doesn't clone `source`.
                 *
                 * @private
                 * @param {Object} source The object of property values to match.
                 * @returns {Function} Returns the new spec function.
                 */
                function baseMatches(source) {
                    var matchData = getMatchData(source);
                    if (matchData.length == 1 && matchData[0][2]) {
                        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
                    }
                    return function(object) {
                        return object === source || baseIsMatch(object, source, matchData);
                    };
                }

                module.exports = baseMatches;


                /***/
            }),

        /***/
        "g/mA":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsEqual = __webpack_require__("0Ifp"),
                    get = __webpack_require__("k4Sg"),
                    hasIn = __webpack_require__("JDKm"),
                    isKey = __webpack_require__("Qyvd"),
                    isStrictComparable = __webpack_require__("nlRv"),
                    matchesStrictComparable = __webpack_require__("HxYL"),
                    toKey = __webpack_require__("OD7W");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1,
                    COMPARE_UNORDERED_FLAG = 2;

                /**
                 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
                 *
                 * @private
                 * @param {string} path The path of the property to get.
                 * @param {*} srcValue The value to match.
                 * @returns {Function} Returns the new spec function.
                 */
                function baseMatchesProperty(path, srcValue) {
                    if (isKey(path) && isStrictComparable(srcValue)) {
                        return matchesStrictComparable(toKey(path), srcValue);
                    }
                    return function(object) {
                        var objValue = get(object, path);
                        return (objValue === undefined && objValue === srcValue) ?
                            hasIn(object, path) :
                            baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
                    };
                }

                module.exports = baseMatchesProperty;


                /***/
            }),

        /***/
        "36PR":
            /***/
            ((module) => {

                /**
                 * The base implementation of `_.property` without support for deep paths.
                 *
                 * @private
                 * @param {string} key The key of the property to get.
                 * @returns {Function} Returns the new accessor function.
                 */
                function baseProperty(key) {
                    return function(object) {
                        return object == null ? undefined : object[key];
                    };
                }

                module.exports = baseProperty;


                /***/
            }),

        /***/
        "M42/":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGet = __webpack_require__("capL");

                /**
                 * A specialized version of `baseProperty` which supports deep paths.
                 *
                 * @private
                 * @param {Array|string} path The path of the property to get.
                 * @returns {Function} Returns the new accessor function.
                 */
                function basePropertyDeep(path) {
                    return function(object) {
                        return baseGet(object, path);
                    };
                }

                module.exports = basePropertyDeep;


                /***/
            }),

        /***/
        "7om2":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var constant = __webpack_require__("+3sx"),
                    defineProperty = __webpack_require__("tdAR"),
                    identity = __webpack_require__("eHdO");

                /**
                 * The base implementation of `setToString` without support for hot loop shorting.
                 *
                 * @private
                 * @param {Function} func The function to modify.
                 * @param {Function} string The `toString` result.
                 * @returns {Function} Returns `func`.
                 */
                var baseSetToString = !defineProperty ? identity : function(func, string) {
                    return defineProperty(func, 'toString', {
                        'configurable': true,
                        'enumerable': false,
                        'value': constant(string),
                        'writable': true
                    });
                };

                module.exports = baseSetToString;


                /***/
            }),

        /***/
        "0Qmp":
            /***/
            ((module) => {

                /**
                 * The base implementation of `_.slice` without an iteratee call guard.
                 *
                 * @private
                 * @param {Array} array The array to slice.
                 * @param {number} [start=0] The start position.
                 * @param {number} [end=array.length] The end position.
                 * @returns {Array} Returns the slice of `array`.
                 */
                function baseSlice(array, start, end) {
                    var index = -1,
                        length = array.length;

                    if (start < 0) {
                        start = -start > length ? 0 : (length + start);
                    }
                    end = end > length ? length : end;
                    if (end < 0) {
                        end += length;
                    }
                    length = start > end ? 0 : ((end - start) >>> 0);
                    start >>>= 0;

                    var result = Array(length);
                    while (++index < length) {
                        result[index] = array[index + start];
                    }
                    return result;
                }

                module.exports = baseSlice;


                /***/
            }),

        /***/
        "DQ/D":
            /***/
            ((module) => {

                /**
                 * The base implementation of `_.times` without support for iteratee shorthands
                 * or max array length checks.
                 *
                 * @private
                 * @param {number} n The number of times to invoke `iteratee`.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array} Returns the array of results.
                 */
                function baseTimes(n, iteratee) {
                    var index = -1,
                        result = Array(n);

                    while (++index < n) {
                        result[index] = iteratee(index);
                    }
                    return result;
                }

                module.exports = baseTimes;


                /***/
            }),

        /***/
        "41Ij":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx"),
                    arrayMap = __webpack_require__("+reW"),
                    isArray = __webpack_require__("eoSM"),
                    isSymbol = __webpack_require__("F6gM");

                /** Used as references for various `Number` constants. */
                var INFINITY = 1 / 0;

                /** Used to convert symbols to primitives and strings. */
                var symbolProto = Symbol ? Symbol.prototype : undefined,
                    symbolToString = symbolProto ? symbolProto.toString : undefined;

                /**
                 * The base implementation of `_.toString` which doesn't convert nullish
                 * values to empty strings.
                 *
                 * @private
                 * @param {*} value The value to process.
                 * @returns {string} Returns the string.
                 */
                function baseToString(value) {
                    // Exit early for strings to avoid a performance hit in some environments.
                    if (typeof value == 'string') {
                        return value;
                    }
                    if (isArray(value)) {
                        // Recursively convert values (susceptible to call stack limits).
                        return arrayMap(value, baseToString) + '';
                    }
                    if (isSymbol(value)) {
                        return symbolToString ? symbolToString.call(value) : '';
                    }
                    var result = (value + '');
                    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
                }

                module.exports = baseToString;


                /***/
            }),

        /***/
        "NTsA":
            /***/
            ((module) => {

                /**
                 * The base implementation of `_.unary` without support for storing metadata.
                 *
                 * @private
                 * @param {Function} func The function to cap arguments for.
                 * @returns {Function} Returns the new capped function.
                 */
                function baseUnary(func) {
                    return function(value) {
                        return func(value);
                    };
                }

                module.exports = baseUnary;


                /***/
            }),

        /***/
        "GNBy":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var castPath = __webpack_require__("y24P"),
                    last = __webpack_require__("LsRE"),
                    parent = __webpack_require__("d/0d"),
                    toKey = __webpack_require__("OD7W");

                /**
                 * The base implementation of `_.unset`.
                 *
                 * @private
                 * @param {Object} object The object to modify.
                 * @param {Array|string} path The property path to unset.
                 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
                 */
                function baseUnset(object, path) {
                    path = castPath(path, object);
                    object = parent(object, path);
                    return object == null || delete object[toKey(last(path))];
                }

                module.exports = baseUnset;


                /***/
            }),

        /***/
        "l3mM":
            /***/
            ((module) => {

                /**
                 * Checks if a `cache` value for `key` exists.
                 *
                 * @private
                 * @param {Object} cache The cache to query.
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function cacheHas(cache, key) {
                    return cache.has(key);
                }

                module.exports = cacheHas;


                /***/
            }),

        /***/
        "y24P":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isArray = __webpack_require__("eoSM"),
                    isKey = __webpack_require__("Qyvd"),
                    stringToPath = __webpack_require__("Zgy7"),
                    toString = __webpack_require__("WsPr");

                /**
                 * Casts `value` to a path array if it's not one.
                 *
                 * @private
                 * @param {*} value The value to inspect.
                 * @param {Object} [object] The object to query keys on.
                 * @returns {Array} Returns the cast property path array.
                 */
                function castPath(value, object) {
                    if (isArray(value)) {
                        return value;
                    }
                    return isKey(value, object) ? [value] : stringToPath(toString(value));
                }

                module.exports = castPath;


                /***/
            }),

        /***/
        "Ln2W":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Uint8Array = __webpack_require__("MyUB");

                /**
                 * Creates a clone of `arrayBuffer`.
                 *
                 * @private
                 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
                 * @returns {ArrayBuffer} Returns the cloned array buffer.
                 */
                function cloneArrayBuffer(arrayBuffer) {
                    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
                    return result;
                }

                module.exports = cloneArrayBuffer;


                /***/
            }),

        /***/
        "j0b5":
            /***/
            ((module, exports, __webpack_require__) => {

                /* module decorator */
                module = __webpack_require__.nmd(module);
                var root = __webpack_require__("O4yA");

                /** Detect free variable `exports`. */
                var freeExports = true && exports && !exports.nodeType && exports;

                /** Detect free variable `module`. */
                var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

                /** Detect the popular CommonJS extension `module.exports`. */
                var moduleExports = freeModule && freeModule.exports === freeExports;

                /** Built-in value references. */
                var Buffer = moduleExports ? root.Buffer : undefined,
                    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

                /**
                 * Creates a clone of  `buffer`.
                 *
                 * @private
                 * @param {Buffer} buffer The buffer to clone.
                 * @param {boolean} [isDeep] Specify a deep clone.
                 * @returns {Buffer} Returns the cloned buffer.
                 */
                function cloneBuffer(buffer, isDeep) {
                    if (isDeep) {
                        return buffer.slice();
                    }
                    var length = buffer.length,
                        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

                    buffer.copy(result);
                    return result;
                }

                module.exports = cloneBuffer;


                /***/
            }),

        /***/
        "jKWR":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var cloneArrayBuffer = __webpack_require__("Ln2W");

                /**
                 * Creates a clone of `dataView`.
                 *
                 * @private
                 * @param {Object} dataView The data view to clone.
                 * @param {boolean} [isDeep] Specify a deep clone.
                 * @returns {Object} Returns the cloned data view.
                 */
                function cloneDataView(dataView, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
                }

                module.exports = cloneDataView;


                /***/
            }),

        /***/
        "4Qqc":
            /***/
            ((module) => {

                /** Used to match `RegExp` flags from their coerced string values. */
                var reFlags = /\w*$/;

                /**
                 * Creates a clone of `regexp`.
                 *
                 * @private
                 * @param {Object} regexp The regexp to clone.
                 * @returns {Object} Returns the cloned regexp.
                 */
                function cloneRegExp(regexp) {
                    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
                    result.lastIndex = regexp.lastIndex;
                    return result;
                }

                module.exports = cloneRegExp;


                /***/
            }),

        /***/
        "gmKo":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx");

                /** Used to convert symbols to primitives and strings. */
                var symbolProto = Symbol ? Symbol.prototype : undefined,
                    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

                /**
                 * Creates a clone of the `symbol` object.
                 *
                 * @private
                 * @param {Object} symbol The symbol object to clone.
                 * @returns {Object} Returns the cloned symbol object.
                 */
                function cloneSymbol(symbol) {
                    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
                }

                module.exports = cloneSymbol;


                /***/
            }),

        /***/
        "URwZ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var cloneArrayBuffer = __webpack_require__("Ln2W");

                /**
                 * Creates a clone of `typedArray`.
                 *
                 * @private
                 * @param {Object} typedArray The typed array to clone.
                 * @param {boolean} [isDeep] Specify a deep clone.
                 * @returns {Object} Returns the cloned typed array.
                 */
                function cloneTypedArray(typedArray, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
                }

                module.exports = cloneTypedArray;


                /***/
            }),

        /***/
        "x22w":
            /***/
            ((module) => {

                /**
                 * Copies the values of `source` to `array`.
                 *
                 * @private
                 * @param {Array} source The array to copy values from.
                 * @param {Array} [array=[]] The array to copy values to.
                 * @returns {Array} Returns `array`.
                 */
                function copyArray(source, array) {
                    var index = -1,
                        length = source.length;

                    array || (array = Array(length));
                    while (++index < length) {
                        array[index] = source[index];
                    }
                    return array;
                }

                module.exports = copyArray;


                /***/
            }),

        /***/
        "suam":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var assignValue = __webpack_require__("TZ1K"),
                    baseAssignValue = __webpack_require__("Sxfv");

                /**
                 * Copies properties of `source` to `object`.
                 *
                 * @private
                 * @param {Object} source The object to copy properties from.
                 * @param {Array} props The property identifiers to copy.
                 * @param {Object} [object={}] The object to copy properties to.
                 * @param {Function} [customizer] The function to customize copied values.
                 * @returns {Object} Returns `object`.
                 */
                function copyObject(source, props, object, customizer) {
                    var isNew = !object;
                    object || (object = {});

                    var index = -1,
                        length = props.length;

                    while (++index < length) {
                        var key = props[index];

                        var newValue = customizer ?
                            customizer(object[key], source[key], key, object, source) :
                            undefined;

                        if (newValue === undefined) {
                            newValue = source[key];
                        }
                        if (isNew) {
                            baseAssignValue(object, key, newValue);
                        } else {
                            assignValue(object, key, newValue);
                        }
                    }
                    return object;
                }

                module.exports = copyObject;


                /***/
            }),

        /***/
        "Jy9+":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var copyObject = __webpack_require__("suam"),
                    getSymbols = __webpack_require__("oA63");

                /**
                 * Copies own symbols of `source` to `object`.
                 *
                 * @private
                 * @param {Object} source The object to copy symbols from.
                 * @param {Object} [object={}] The object to copy symbols to.
                 * @returns {Object} Returns `object`.
                 */
                function copySymbols(source, object) {
                    return copyObject(source, getSymbols(source), object);
                }

                module.exports = copySymbols;


                /***/
            }),

        /***/
        "lpad":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var copyObject = __webpack_require__("suam"),
                    getSymbolsIn = __webpack_require__("1T33");

                /**
                 * Copies own and inherited symbols of `source` to `object`.
                 *
                 * @private
                 * @param {Object} source The object to copy symbols from.
                 * @param {Object} [object={}] The object to copy symbols to.
                 * @returns {Object} Returns `object`.
                 */
                function copySymbolsIn(source, object) {
                    return copyObject(source, getSymbolsIn(source), object);
                }

                module.exports = copySymbolsIn;


                /***/
            }),

        /***/
        "I99e":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var root = __webpack_require__("O4yA");

                /** Used to detect overreaching core-js shims. */
                var coreJsData = root['__core-js_shared__'];

                module.exports = coreJsData;


                /***/
            }),

        /***/
        "7QKQ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayAggregator = __webpack_require__("/mR/"),
                    baseAggregator = __webpack_require__("k+TV"),
                    baseIteratee = __webpack_require__("Kkyq"),
                    isArray = __webpack_require__("eoSM");

                /**
                 * Creates a function like `_.groupBy`.
                 *
                 * @private
                 * @param {Function} setter The function to set accumulator values.
                 * @param {Function} [initializer] The accumulator object initializer.
                 * @returns {Function} Returns the new aggregator function.
                 */
                function createAggregator(setter, initializer) {
                    return function(collection, iteratee) {
                        var func = isArray(collection) ? arrayAggregator : baseAggregator,
                            accumulator = initializer ? initializer() : {};

                        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
                    };
                }

                module.exports = createAggregator;


                /***/
            }),

        /***/
        "ntC9":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isArrayLike = __webpack_require__("Zjj6");

                /**
                 * Creates a `baseEach` or `baseEachRight` function.
                 *
                 * @private
                 * @param {Function} eachFunc The function to iterate over a collection.
                 * @param {boolean} [fromRight] Specify iterating from right to left.
                 * @returns {Function} Returns the new base function.
                 */
                function createBaseEach(eachFunc, fromRight) {
                    return function(collection, iteratee) {
                        if (collection == null) {
                            return collection;
                        }
                        if (!isArrayLike(collection)) {
                            return eachFunc(collection, iteratee);
                        }
                        var length = collection.length,
                            index = fromRight ? length : -1,
                            iterable = Object(collection);

                        while ((fromRight ? index-- : ++index < length)) {
                            if (iteratee(iterable[index], index, iterable) === false) {
                                break;
                            }
                        }
                        return collection;
                    };
                }

                module.exports = createBaseEach;


                /***/
            }),

        /***/
        "vXAm":
            /***/
            ((module) => {

                /**
                 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
                 *
                 * @private
                 * @param {boolean} [fromRight] Specify iterating from right to left.
                 * @returns {Function} Returns the new base function.
                 */
                function createBaseFor(fromRight) {
                    return function(object, iteratee, keysFunc) {
                        var index = -1,
                            iterable = Object(object),
                            props = keysFunc(object),
                            length = props.length;

                        while (length--) {
                            var key = props[fromRight ? length : ++index];
                            if (iteratee(iterable[key], key, iterable) === false) {
                                break;
                            }
                        }
                        return object;
                    };
                }

                module.exports = createBaseFor;


                /***/
            }),

        /***/
        "OSrB":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isPlainObject = __webpack_require__("pNQ9");

                /**
                 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
                 * objects.
                 *
                 * @private
                 * @param {*} value The value to inspect.
                 * @param {string} key The key of the property to inspect.
                 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
                 */
                function customOmitClone(value) {
                    return isPlainObject(value) ? undefined : value;
                }

                module.exports = customOmitClone;


                /***/
            }),

        /***/
        "tdAR":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA");

                var defineProperty = (function() {
                    try {
                        var func = getNative(Object, 'defineProperty');
                        func({}, '', {});
                        return func;
                    } catch (e) {}
                }());

                module.exports = defineProperty;


                /***/
            }),

        /***/
        "RtFG":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var SetCache = __webpack_require__("2lI5"),
                    arraySome = __webpack_require__("1aIJ"),
                    cacheHas = __webpack_require__("l3mM");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1,
                    COMPARE_UNORDERED_FLAG = 2;

                /**
                 * A specialized version of `baseIsEqualDeep` for arrays with support for
                 * partial deep comparisons.
                 *
                 * @private
                 * @param {Array} array The array to compare.
                 * @param {Array} other The other array to compare.
                 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                 * @param {Function} customizer The function to customize comparisons.
                 * @param {Function} equalFunc The function to determine equivalents of values.
                 * @param {Object} stack Tracks traversed `array` and `other` objects.
                 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
                 */
                function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                        arrLength = array.length,
                        othLength = other.length;

                    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                        return false;
                    }
                    // Check that cyclic values are equal.
                    var arrStacked = stack.get(array);
                    var othStacked = stack.get(other);
                    if (arrStacked && othStacked) {
                        return arrStacked == other && othStacked == array;
                    }
                    var index = -1,
                        result = true,
                        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

                    stack.set(array, other);
                    stack.set(other, array);

                    // Ignore non-index properties.
                    while (++index < arrLength) {
                        var arrValue = array[index],
                            othValue = other[index];

                        if (customizer) {
                            var compared = isPartial ?
                                customizer(othValue, arrValue, index, other, array, stack) :
                                customizer(arrValue, othValue, index, array, other, stack);
                        }
                        if (compared !== undefined) {
                            if (compared) {
                                continue;
                            }
                            result = false;
                            break;
                        }
                        // Recursively compare arrays (susceptible to call stack limits).
                        if (seen) {
                            if (!arraySome(other, function(othValue, othIndex) {
                                    if (!cacheHas(seen, othIndex) &&
                                        (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                                        return seen.push(othIndex);
                                    }
                                })) {
                                result = false;
                                break;
                            }
                        } else if (!(
                                arrValue === othValue ||
                                equalFunc(arrValue, othValue, bitmask, customizer, stack)
                            )) {
                            result = false;
                            break;
                        }
                    }
                    stack['delete'](array);
                    stack['delete'](other);
                    return result;
                }

                module.exports = equalArrays;


                /***/
            }),

        /***/
        "0zpI":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx"),
                    Uint8Array = __webpack_require__("MyUB"),
                    eq = __webpack_require__("fkhx"),
                    equalArrays = __webpack_require__("RtFG"),
                    mapToArray = __webpack_require__("wWVk"),
                    setToArray = __webpack_require__("9rFP");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1,
                    COMPARE_UNORDERED_FLAG = 2;

                /** `Object#toString` result references. */
                var boolTag = '[object Boolean]',
                    dateTag = '[object Date]',
                    errorTag = '[object Error]',
                    mapTag = '[object Map]',
                    numberTag = '[object Number]',
                    regexpTag = '[object RegExp]',
                    setTag = '[object Set]',
                    stringTag = '[object String]',
                    symbolTag = '[object Symbol]';

                var arrayBufferTag = '[object ArrayBuffer]',
                    dataViewTag = '[object DataView]';

                /** Used to convert symbols to primitives and strings. */
                var symbolProto = Symbol ? Symbol.prototype : undefined,
                    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

                /**
                 * A specialized version of `baseIsEqualDeep` for comparing objects of
                 * the same `toStringTag`.
                 *
                 * **Note:** This function only supports comparing values with tags of
                 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
                 *
                 * @private
                 * @param {Object} object The object to compare.
                 * @param {Object} other The other object to compare.
                 * @param {string} tag The `toStringTag` of the objects to compare.
                 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                 * @param {Function} customizer The function to customize comparisons.
                 * @param {Function} equalFunc The function to determine equivalents of values.
                 * @param {Object} stack Tracks traversed `object` and `other` objects.
                 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                 */
                function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
                    switch (tag) {
                        case dataViewTag:
                            if ((object.byteLength != other.byteLength) ||
                                (object.byteOffset != other.byteOffset)) {
                                return false;
                            }
                            object = object.buffer;
                            other = other.buffer;

                        case arrayBufferTag:
                            if ((object.byteLength != other.byteLength) ||
                                !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                                return false;
                            }
                            return true;

                        case boolTag:
                        case dateTag:
                        case numberTag:
                            // Coerce booleans to `1` or `0` and dates to milliseconds.
                            // Invalid dates are coerced to `NaN`.
                            return eq(+object, +other);

                        case errorTag:
                            return object.name == other.name && object.message == other.message;

                        case regexpTag:
                        case stringTag:
                            // Coerce regexes to strings and treat strings, primitives and objects,
                            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                            // for more details.
                            return object == (other + '');

                        case mapTag:
                            var convert = mapToArray;

                        case setTag:
                            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                            convert || (convert = setToArray);

                            if (object.size != other.size && !isPartial) {
                                return false;
                            }
                            // Assume cyclic values are equal.
                            var stacked = stack.get(object);
                            if (stacked) {
                                return stacked == other;
                            }
                            bitmask |= COMPARE_UNORDERED_FLAG;

                            // Recursively compare objects (susceptible to call stack limits).
                            stack.set(object, other);
                            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                            stack['delete'](object);
                            return result;

                        case symbolTag:
                            if (symbolValueOf) {
                                return symbolValueOf.call(object) == symbolValueOf.call(other);
                            }
                    }
                    return false;
                }

                module.exports = equalByTag;


                /***/
            }),

        /***/
        "NRXl":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getAllKeys = __webpack_require__("Mfbz");

                /** Used to compose bitmasks for value comparisons. */
                var COMPARE_PARTIAL_FLAG = 1;

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * A specialized version of `baseIsEqualDeep` for objects with support for
                 * partial deep comparisons.
                 *
                 * @private
                 * @param {Object} object The object to compare.
                 * @param {Object} other The other object to compare.
                 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                 * @param {Function} customizer The function to customize comparisons.
                 * @param {Function} equalFunc The function to determine equivalents of values.
                 * @param {Object} stack Tracks traversed `object` and `other` objects.
                 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                 */
                function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                        objProps = getAllKeys(object),
                        objLength = objProps.length,
                        othProps = getAllKeys(other),
                        othLength = othProps.length;

                    if (objLength != othLength && !isPartial) {
                        return false;
                    }
                    var index = objLength;
                    while (index--) {
                        var key = objProps[index];
                        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                            return false;
                        }
                    }
                    // Check that cyclic values are equal.
                    var objStacked = stack.get(object);
                    var othStacked = stack.get(other);
                    if (objStacked && othStacked) {
                        return objStacked == other && othStacked == object;
                    }
                    var result = true;
                    stack.set(object, other);
                    stack.set(other, object);

                    var skipCtor = isPartial;
                    while (++index < objLength) {
                        key = objProps[index];
                        var objValue = object[key],
                            othValue = other[key];

                        if (customizer) {
                            var compared = isPartial ?
                                customizer(othValue, objValue, key, other, object, stack) :
                                customizer(objValue, othValue, key, object, other, stack);
                        }
                        // Recursively compare objects (susceptible to call stack limits).
                        if (!(compared === undefined ?
                                (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)) :
                                compared
                            )) {
                            result = false;
                            break;
                        }
                        skipCtor || (skipCtor = key == 'constructor');
                    }
                    if (result && !skipCtor) {
                        var objCtor = object.constructor,
                            othCtor = other.constructor;

                        // Non `Object` object instances with different constructors are not equal.
                        if (objCtor != othCtor &&
                            ('constructor' in object && 'constructor' in other) &&
                            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                                typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                            result = false;
                        }
                    }
                    stack['delete'](object);
                    stack['delete'](other);
                    return result;
                }

                module.exports = equalObjects;


                /***/
            }),

        /***/
        "6hI1":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var flatten = __webpack_require__("sJyE"),
                    overRest = __webpack_require__("BwJN"),
                    setToString = __webpack_require__("UUZ0");

                /**
                 * A specialized version of `baseRest` which flattens the rest array.
                 *
                 * @private
                 * @param {Function} func The function to apply a rest parameter to.
                 * @returns {Function} Returns the new function.
                 */
                function flatRest(func) {
                    return setToString(overRest(func, undefined, flatten), func + '');
                }

                module.exports = flatRest;


                /***/
            }),

        /***/
        "yn9n":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                /** Detect free variable `global` from Node.js. */
                var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

                module.exports = freeGlobal;


                /***/
            }),

        /***/
        "Mfbz":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetAllKeys = __webpack_require__("FbU2"),
                    getSymbols = __webpack_require__("oA63"),
                    keys = __webpack_require__("6vUj");

                /**
                 * Creates an array of own enumerable property names and symbols of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names and symbols.
                 */
                function getAllKeys(object) {
                    return baseGetAllKeys(object, keys, getSymbols);
                }

                module.exports = getAllKeys;


                /***/
            }),

        /***/
        "8cEZ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetAllKeys = __webpack_require__("FbU2"),
                    getSymbolsIn = __webpack_require__("1T33"),
                    keysIn = __webpack_require__("38cL");

                /**
                 * Creates an array of own and inherited enumerable property names and
                 * symbols of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names and symbols.
                 */
                function getAllKeysIn(object) {
                    return baseGetAllKeys(object, keysIn, getSymbolsIn);
                }

                module.exports = getAllKeysIn;


                /***/
            }),

        /***/
        "F71Q":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isKeyable = __webpack_require__("pADs");

                /**
                 * Gets the data for `map`.
                 *
                 * @private
                 * @param {Object} map The map to query.
                 * @param {string} key The reference key.
                 * @returns {*} Returns the map data.
                 */
                function getMapData(map, key) {
                    var data = map.__data__;
                    return isKeyable(key) ?
                        data[typeof key == 'string' ? 'string' : 'hash'] :
                        data.map;
                }

                module.exports = getMapData;


                /***/
            }),

        /***/
        "t2nn":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isStrictComparable = __webpack_require__("nlRv"),
                    keys = __webpack_require__("6vUj");

                /**
                 * Gets the property names, values, and compare flags of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the match data of `object`.
                 */
                function getMatchData(object) {
                    var result = keys(object),
                        length = result.length;

                    while (length--) {
                        var key = result[length],
                            value = object[key];

                        result[length] = [key, value, isStrictComparable(value)];
                    }
                    return result;
                }

                module.exports = getMatchData;


                /***/
            }),

        /***/
        "t+TA":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsNative = __webpack_require__("bK3N"),
                    getValue = __webpack_require__("HU7W");

                /**
                 * Gets the native function at `key` of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {string} key The key of the method to get.
                 * @returns {*} Returns the function if it's native, else `undefined`.
                 */
                function getNative(object, key) {
                    var value = getValue(object, key);
                    return baseIsNative(value) ? value : undefined;
                }

                module.exports = getNative;


                /***/
            }),

        /***/
        "G3p3":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var overArg = __webpack_require__("t68N");

                /** Built-in value references. */
                var getPrototype = overArg(Object.getPrototypeOf, Object);

                module.exports = getPrototype;


                /***/
            }),

        /***/
        "GLQI":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Used to resolve the
                 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
                 * of values.
                 */
                var nativeObjectToString = objectProto.toString;

                /** Built-in value references. */
                var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

                /**
                 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @returns {string} Returns the raw `toStringTag`.
                 */
                function getRawTag(value) {
                    var isOwn = hasOwnProperty.call(value, symToStringTag),
                        tag = value[symToStringTag];

                    try {
                        value[symToStringTag] = undefined;
                        var unmasked = true;
                    } catch (e) {}

                    var result = nativeObjectToString.call(value);
                    if (unmasked) {
                        if (isOwn) {
                            value[symToStringTag] = tag;
                        } else {
                            delete value[symToStringTag];
                        }
                    }
                    return result;
                }

                module.exports = getRawTag;


                /***/
            }),

        /***/
        "oA63":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayFilter = __webpack_require__("58gk"),
                    stubArray = __webpack_require__("eKcC");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Built-in value references. */
                var propertyIsEnumerable = objectProto.propertyIsEnumerable;

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeGetSymbols = Object.getOwnPropertySymbols;

                /**
                 * Creates an array of the own enumerable symbols of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of symbols.
                 */
                var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
                    if (object == null) {
                        return [];
                    }
                    object = Object(object);
                    return arrayFilter(nativeGetSymbols(object), function(symbol) {
                        return propertyIsEnumerable.call(object, symbol);
                    });
                };

                module.exports = getSymbols;


                /***/
            }),

        /***/
        "1T33":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayPush = __webpack_require__("muZu"),
                    getPrototype = __webpack_require__("G3p3"),
                    getSymbols = __webpack_require__("oA63"),
                    stubArray = __webpack_require__("eKcC");

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeGetSymbols = Object.getOwnPropertySymbols;

                /**
                 * Creates an array of the own and inherited enumerable symbols of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of symbols.
                 */
                var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
                    var result = [];
                    while (object) {
                        arrayPush(result, getSymbols(object));
                        object = getPrototype(object);
                    }
                    return result;
                };

                module.exports = getSymbolsIn;


                /***/
            }),

        /***/
        "Vc2o":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var DataView = __webpack_require__("t+GO"),
                    Map = __webpack_require__("GQDD"),
                    Promise = __webpack_require__("megh"),
                    Set = __webpack_require__("NSh6"),
                    WeakMap = __webpack_require__("PVOi"),
                    baseGetTag = __webpack_require__("PORw"),
                    toSource = __webpack_require__("GLf+");

                /** `Object#toString` result references. */
                var mapTag = '[object Map]',
                    objectTag = '[object Object]',
                    promiseTag = '[object Promise]',
                    setTag = '[object Set]',
                    weakMapTag = '[object WeakMap]';

                var dataViewTag = '[object DataView]';

                /** Used to detect maps, sets, and weakmaps. */
                var dataViewCtorString = toSource(DataView),
                    mapCtorString = toSource(Map),
                    promiseCtorString = toSource(Promise),
                    setCtorString = toSource(Set),
                    weakMapCtorString = toSource(WeakMap);

                /**
                 * Gets the `toStringTag` of `value`.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @returns {string} Returns the `toStringTag`.
                 */
                var getTag = baseGetTag;

                // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
                if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
                    (Map && getTag(new Map) != mapTag) ||
                    (Promise && getTag(Promise.resolve()) != promiseTag) ||
                    (Set && getTag(new Set) != setTag) ||
                    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
                    getTag = function(value) {
                        var result = baseGetTag(value),
                            Ctor = result == objectTag ? value.constructor : undefined,
                            ctorString = Ctor ? toSource(Ctor) : '';

                        if (ctorString) {
                            switch (ctorString) {
                                case dataViewCtorString:
                                    return dataViewTag;
                                case mapCtorString:
                                    return mapTag;
                                case promiseCtorString:
                                    return promiseTag;
                                case setCtorString:
                                    return setTag;
                                case weakMapCtorString:
                                    return weakMapTag;
                            }
                        }
                        return result;
                    };
                }

                module.exports = getTag;


                /***/
            }),

        /***/
        "HU7W":
            /***/
            ((module) => {

                /**
                 * Gets the value at `key` of `object`.
                 *
                 * @private
                 * @param {Object} [object] The object to query.
                 * @param {string} key The key of the property to get.
                 * @returns {*} Returns the property value.
                 */
                function getValue(object, key) {
                    return object == null ? undefined : object[key];
                }

                module.exports = getValue;


                /***/
            }),

        /***/
        "2oV1":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var castPath = __webpack_require__("y24P"),
                    isArguments = __webpack_require__("1Grl"),
                    isArray = __webpack_require__("eoSM"),
                    isIndex = __webpack_require__("Txlo"),
                    isLength = __webpack_require__("VJj2"),
                    toKey = __webpack_require__("OD7W");

                /**
                 * Checks if `path` exists on `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path to check.
                 * @param {Function} hasFunc The function to check properties.
                 * @returns {boolean} Returns `true` if `path` exists, else `false`.
                 */
                function hasPath(object, path, hasFunc) {
                    path = castPath(path, object);

                    var index = -1,
                        length = path.length,
                        result = false;

                    while (++index < length) {
                        var key = toKey(path[index]);
                        if (!(result = object != null && hasFunc(object, key))) {
                            break;
                        }
                        object = object[key];
                    }
                    if (result || ++index != length) {
                        return result;
                    }
                    length = object == null ? 0 : object.length;
                    return !!length && isLength(length) && isIndex(key, length) &&
                        (isArray(object) || isArguments(object));
                }

                module.exports = hasPath;


                /***/
            }),

        /***/
        "3rdh":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var nativeCreate = __webpack_require__("QzCP");

                /**
                 * Removes all key-value entries from the hash.
                 *
                 * @private
                 * @name clear
                 * @memberOf Hash
                 */
                function hashClear() {
                    this.__data__ = nativeCreate ? nativeCreate(null) : {};
                    this.size = 0;
                }

                module.exports = hashClear;


                /***/
            }),

        /***/
        "Q69t":
            /***/
            ((module) => {

                /**
                 * Removes `key` and its value from the hash.
                 *
                 * @private
                 * @name delete
                 * @memberOf Hash
                 * @param {Object} hash The hash to modify.
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function hashDelete(key) {
                    var result = this.has(key) && delete this.__data__[key];
                    this.size -= result ? 1 : 0;
                    return result;
                }

                module.exports = hashDelete;


                /***/
            }),

        /***/
        "xuOn":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var nativeCreate = __webpack_require__("QzCP");

                /** Used to stand-in for `undefined` hash values. */
                var HASH_UNDEFINED = '__lodash_hash_undefined__';

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Gets the hash value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf Hash
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function hashGet(key) {
                    var data = this.__data__;
                    if (nativeCreate) {
                        var result = data[key];
                        return result === HASH_UNDEFINED ? undefined : result;
                    }
                    return hasOwnProperty.call(data, key) ? data[key] : undefined;
                }

                module.exports = hashGet;


                /***/
            }),

        /***/
        "ZsxT":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var nativeCreate = __webpack_require__("QzCP");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Checks if a hash value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf Hash
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function hashHas(key) {
                    var data = this.__data__;
                    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
                }

                module.exports = hashHas;


                /***/
            }),

        /***/
        "lUrU":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var nativeCreate = __webpack_require__("QzCP");

                /** Used to stand-in for `undefined` hash values. */
                var HASH_UNDEFINED = '__lodash_hash_undefined__';

                /**
                 * Sets the hash `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf Hash
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the hash instance.
                 */
                function hashSet(key, value) {
                    var data = this.__data__;
                    this.size += this.has(key) ? 0 : 1;
                    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
                    return this;
                }

                module.exports = hashSet;


                /***/
            }),

        /***/
        "s4xM":
            /***/
            ((module) => {

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Initializes an array clone.
                 *
                 * @private
                 * @param {Array} array The array to clone.
                 * @returns {Array} Returns the initialized clone.
                 */
                function initCloneArray(array) {
                    var length = array.length,
                        result = new array.constructor(length);

                    // Add properties assigned by `RegExp#exec`.
                    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                        result.index = array.index;
                        result.input = array.input;
                    }
                    return result;
                }

                module.exports = initCloneArray;


                /***/
            }),

        /***/
        "5AKu":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var cloneArrayBuffer = __webpack_require__("Ln2W"),
                    cloneDataView = __webpack_require__("jKWR"),
                    cloneRegExp = __webpack_require__("4Qqc"),
                    cloneSymbol = __webpack_require__("gmKo"),
                    cloneTypedArray = __webpack_require__("URwZ");

                /** `Object#toString` result references. */
                var boolTag = '[object Boolean]',
                    dateTag = '[object Date]',
                    mapTag = '[object Map]',
                    numberTag = '[object Number]',
                    regexpTag = '[object RegExp]',
                    setTag = '[object Set]',
                    stringTag = '[object String]',
                    symbolTag = '[object Symbol]';

                var arrayBufferTag = '[object ArrayBuffer]',
                    dataViewTag = '[object DataView]',
                    float32Tag = '[object Float32Array]',
                    float64Tag = '[object Float64Array]',
                    int8Tag = '[object Int8Array]',
                    int16Tag = '[object Int16Array]',
                    int32Tag = '[object Int32Array]',
                    uint8Tag = '[object Uint8Array]',
                    uint8ClampedTag = '[object Uint8ClampedArray]',
                    uint16Tag = '[object Uint16Array]',
                    uint32Tag = '[object Uint32Array]';

                /**
                 * Initializes an object clone based on its `toStringTag`.
                 *
                 * **Note:** This function only supports cloning values with tags of
                 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
                 *
                 * @private
                 * @param {Object} object The object to clone.
                 * @param {string} tag The `toStringTag` of the object to clone.
                 * @param {boolean} [isDeep] Specify a deep clone.
                 * @returns {Object} Returns the initialized clone.
                 */
                function initCloneByTag(object, tag, isDeep) {
                    var Ctor = object.constructor;
                    switch (tag) {
                        case arrayBufferTag:
                            return cloneArrayBuffer(object);

                        case boolTag:
                        case dateTag:
                            return new Ctor(+object);

                        case dataViewTag:
                            return cloneDataView(object, isDeep);

                        case float32Tag:
                        case float64Tag:
                        case int8Tag:
                        case int16Tag:
                        case int32Tag:
                        case uint8Tag:
                        case uint8ClampedTag:
                        case uint16Tag:
                        case uint32Tag:
                            return cloneTypedArray(object, isDeep);

                        case mapTag:
                            return new Ctor;

                        case numberTag:
                        case stringTag:
                            return new Ctor(object);

                        case regexpTag:
                            return cloneRegExp(object);

                        case setTag:
                            return new Ctor;

                        case symbolTag:
                            return cloneSymbol(object);
                    }
                }

                module.exports = initCloneByTag;


                /***/
            }),

        /***/
        "3sUJ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseCreate = __webpack_require__("SgPr"),
                    getPrototype = __webpack_require__("G3p3"),
                    isPrototype = __webpack_require__("D7Bi");

                /**
                 * Initializes an object clone.
                 *
                 * @private
                 * @param {Object} object The object to clone.
                 * @returns {Object} Returns the initialized clone.
                 */
                function initCloneObject(object) {
                    return (typeof object.constructor == 'function' && !isPrototype(object)) ?
                        baseCreate(getPrototype(object)) :
                        {};
                }

                module.exports = initCloneObject;


                /***/
            }),

        /***/
        "rL8J":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Symbol = __webpack_require__("cBxx"),
                    isArguments = __webpack_require__("1Grl"),
                    isArray = __webpack_require__("eoSM");

                /** Built-in value references. */
                var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

                /**
                 * Checks if `value` is a flattenable `arguments` object or array.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
                 */
                function isFlattenable(value) {
                    return isArray(value) || isArguments(value) ||
                        !!(spreadableSymbol && value && value[spreadableSymbol]);
                }

                module.exports = isFlattenable;


                /***/
            }),

        /***/
        "Txlo":
            /***/
            ((module) => {

                /** Used as references for various `Number` constants. */
                var MAX_SAFE_INTEGER = 9007199254740991;

                /** Used to detect unsigned integer values. */
                var reIsUint = /^(?:0|[1-9]\d*)$/;

                /**
                 * Checks if `value` is a valid array-like index.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
                 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
                 */
                function isIndex(value, length) {
                    var type = typeof value;
                    length = length == null ? MAX_SAFE_INTEGER : length;

                    return !!length &&
                        (type == 'number' ||
                            (type != 'symbol' && reIsUint.test(value))) &&
                        (value > -1 && value % 1 == 0 && value < length);
                }

                module.exports = isIndex;


                /***/
            }),

        /***/
        "Qyvd":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isArray = __webpack_require__("eoSM"),
                    isSymbol = __webpack_require__("F6gM");

                /** Used to match property names within property paths. */
                var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    reIsPlainProp = /^\w*$/;

                /**
                 * Checks if `value` is a property name and not a property path.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @param {Object} [object] The object to query keys on.
                 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
                 */
                function isKey(value, object) {
                    if (isArray(value)) {
                        return false;
                    }
                    var type = typeof value;
                    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
                        value == null || isSymbol(value)) {
                        return true;
                    }
                    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
                        (object != null && value in Object(object));
                }

                module.exports = isKey;


                /***/
            }),

        /***/
        "pADs":
            /***/
            ((module) => {

                /**
                 * Checks if `value` is suitable for use as unique object key.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
                 */
                function isKeyable(value) {
                    var type = typeof value;
                    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean') ?
                        (value !== '__proto__') :
                        (value === null);
                }

                module.exports = isKeyable;


                /***/
            }),

        /***/
        "e3zV":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var coreJsData = __webpack_require__("I99e");

                /** Used to detect methods masquerading as native. */
                var maskSrcKey = (function() {
                    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
                    return uid ? ('Symbol(src)_1.' + uid) : '';
                }());

                /**
                 * Checks if `func` has its source masked.
                 *
                 * @private
                 * @param {Function} func The function to check.
                 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
                 */
                function isMasked(func) {
                    return !!maskSrcKey && (maskSrcKey in func);
                }

                module.exports = isMasked;


                /***/
            }),

        /***/
        "D7Bi":
            /***/
            ((module) => {

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /**
                 * Checks if `value` is likely a prototype object.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
                 */
                function isPrototype(value) {
                    var Ctor = value && value.constructor,
                        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

                    return value === proto;
                }

                module.exports = isPrototype;


                /***/
            }),

        /***/
        "nlRv":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isObject = __webpack_require__("PWyJ");

                /**
                 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` if suitable for strict
                 *  equality comparisons, else `false`.
                 */
                function isStrictComparable(value) {
                    return value === value && !isObject(value);
                }

                module.exports = isStrictComparable;


                /***/
            }),

        /***/
        "7HYU":
            /***/
            ((module) => {

                /**
                 * Removes all key-value entries from the list cache.
                 *
                 * @private
                 * @name clear
                 * @memberOf ListCache
                 */
                function listCacheClear() {
                    this.__data__ = [];
                    this.size = 0;
                }

                module.exports = listCacheClear;


                /***/
            }),

        /***/
        "Oax0":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var assocIndexOf = __webpack_require__("rkJ6");

                /** Used for built-in method references. */
                var arrayProto = Array.prototype;

                /** Built-in value references. */
                var splice = arrayProto.splice;

                /**
                 * Removes `key` and its value from the list cache.
                 *
                 * @private
                 * @name delete
                 * @memberOf ListCache
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function listCacheDelete(key) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    if (index < 0) {
                        return false;
                    }
                    var lastIndex = data.length - 1;
                    if (index == lastIndex) {
                        data.pop();
                    } else {
                        splice.call(data, index, 1);
                    }
                    --this.size;
                    return true;
                }

                module.exports = listCacheDelete;


                /***/
            }),

        /***/
        "1DF2":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var assocIndexOf = __webpack_require__("rkJ6");

                /**
                 * Gets the list cache value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf ListCache
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function listCacheGet(key) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    return index < 0 ? undefined : data[index][1];
                }

                module.exports = listCacheGet;


                /***/
            }),

        /***/
        "UtSM":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var assocIndexOf = __webpack_require__("rkJ6");

                /**
                 * Checks if a list cache value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf ListCache
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function listCacheHas(key) {
                    return assocIndexOf(this.__data__, key) > -1;
                }

                module.exports = listCacheHas;


                /***/
            }),

        /***/
        "TDWY":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var assocIndexOf = __webpack_require__("rkJ6");

                /**
                 * Sets the list cache `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf ListCache
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the list cache instance.
                 */
                function listCacheSet(key, value) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    if (index < 0) {
                        ++this.size;
                        data.push([key, value]);
                    } else {
                        data[index][1] = value;
                    }
                    return this;
                }

                module.exports = listCacheSet;


                /***/
            }),

        /***/
        "K29s":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var Hash = __webpack_require__("7xa0"),
                    ListCache = __webpack_require__("ry6q"),
                    Map = __webpack_require__("GQDD");

                /**
                 * Removes all key-value entries from the map.
                 *
                 * @private
                 * @name clear
                 * @memberOf MapCache
                 */
                function mapCacheClear() {
                    this.size = 0;
                    this.__data__ = {
                        'hash': new Hash,
                        'map': new(Map || ListCache),
                        'string': new Hash
                    };
                }

                module.exports = mapCacheClear;


                /***/
            }),

        /***/
        "AU2x":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getMapData = __webpack_require__("F71Q");

                /**
                 * Removes `key` and its value from the map.
                 *
                 * @private
                 * @name delete
                 * @memberOf MapCache
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function mapCacheDelete(key) {
                    var result = getMapData(this, key)['delete'](key);
                    this.size -= result ? 1 : 0;
                    return result;
                }

                module.exports = mapCacheDelete;


                /***/
            }),

        /***/
        "u7Ge":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getMapData = __webpack_require__("F71Q");

                /**
                 * Gets the map value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf MapCache
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function mapCacheGet(key) {
                    return getMapData(this, key).get(key);
                }

                module.exports = mapCacheGet;


                /***/
            }),

        /***/
        "w7O4":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getMapData = __webpack_require__("F71Q");

                /**
                 * Checks if a map value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf MapCache
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function mapCacheHas(key) {
                    return getMapData(this, key).has(key);
                }

                module.exports = mapCacheHas;


                /***/
            }),

        /***/
        "GRr6":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getMapData = __webpack_require__("F71Q");

                /**
                 * Sets the map `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf MapCache
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the map cache instance.
                 */
                function mapCacheSet(key, value) {
                    var data = getMapData(this, key),
                        size = data.size;

                    data.set(key, value);
                    this.size += data.size == size ? 0 : 1;
                    return this;
                }

                module.exports = mapCacheSet;


                /***/
            }),

        /***/
        "wWVk":
            /***/
            ((module) => {

                /**
                 * Converts `map` to its key-value pairs.
                 *
                 * @private
                 * @param {Object} map The map to convert.
                 * @returns {Array} Returns the key-value pairs.
                 */
                function mapToArray(map) {
                    var index = -1,
                        result = Array(map.size);

                    map.forEach(function(value, key) {
                        result[++index] = [key, value];
                    });
                    return result;
                }

                module.exports = mapToArray;


                /***/
            }),

        /***/
        "HxYL":
            /***/
            ((module) => {

                /**
                 * A specialized version of `matchesProperty` for source values suitable
                 * for strict equality comparisons, i.e. `===`.
                 *
                 * @private
                 * @param {string} key The key of the property to get.
                 * @param {*} srcValue The value to match.
                 * @returns {Function} Returns the new spec function.
                 */
                function matchesStrictComparable(key, srcValue) {
                    return function(object) {
                        if (object == null) {
                            return false;
                        }
                        return object[key] === srcValue &&
                            (srcValue !== undefined || (key in Object(object)));
                    };
                }

                module.exports = matchesStrictComparable;


                /***/
            }),

        /***/
        "vFD/":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var memoize = __webpack_require__("foqJ");

                /** Used as the maximum memoize cache size. */
                var MAX_MEMOIZE_SIZE = 500;

                /**
                 * A specialized version of `_.memoize` which clears the memoized function's
                 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
                 *
                 * @private
                 * @param {Function} func The function to have its output memoized.
                 * @returns {Function} Returns the new memoized function.
                 */
                function memoizeCapped(func) {
                    var result = memoize(func, function(key) {
                        if (cache.size === MAX_MEMOIZE_SIZE) {
                            cache.clear();
                        }
                        return key;
                    });

                    var cache = result.cache;
                    return result;
                }

                module.exports = memoizeCapped;


                /***/
            }),

        /***/
        "QzCP":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var getNative = __webpack_require__("t+TA");

                /* Built-in method references that are verified to be native. */
                var nativeCreate = getNative(Object, 'create');

                module.exports = nativeCreate;


                /***/
            }),

        /***/
        "7zK7":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var overArg = __webpack_require__("t68N");

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeKeys = overArg(Object.keys, Object);

                module.exports = nativeKeys;


                /***/
            }),

        /***/
        "pLpS":
            /***/
            ((module) => {

                /**
                 * This function is like
                 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
                 * except that it includes inherited enumerable properties.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 */
                function nativeKeysIn(object) {
                    var result = [];
                    if (object != null) {
                        for (var key in Object(object)) {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = nativeKeysIn;


                /***/
            }),

        /***/
        "bUaa":
            /***/
            ((module, exports, __webpack_require__) => {

                /* module decorator */
                module = __webpack_require__.nmd(module);
                var freeGlobal = __webpack_require__("yn9n");

                /** Detect free variable `exports`. */
                var freeExports = true && exports && !exports.nodeType && exports;

                /** Detect free variable `module`. */
                var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

                /** Detect the popular CommonJS extension `module.exports`. */
                var moduleExports = freeModule && freeModule.exports === freeExports;

                /** Detect free variable `process` from Node.js. */
                var freeProcess = moduleExports && freeGlobal.process;

                /** Used to access faster Node.js helpers. */
                var nodeUtil = (function() {
                    try {
                        // Use `util.types` for Node.js 10+.
                        var types = freeModule && freeModule.require && freeModule.require('util').types;

                        if (types) {
                            return types;
                        }

                        // Legacy `process.binding('util')` for Node.js < 10.
                        return freeProcess && freeProcess.binding && freeProcess.binding('util');
                    } catch (e) {}
                }());

                module.exports = nodeUtil;


                /***/
            }),

        /***/
        "ohzl":
            /***/
            ((module) => {

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /**
                 * Used to resolve the
                 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
                 * of values.
                 */
                var nativeObjectToString = objectProto.toString;

                /**
                 * Converts `value` to a string using `Object.prototype.toString`.
                 *
                 * @private
                 * @param {*} value The value to convert.
                 * @returns {string} Returns the converted string.
                 */
                function objectToString(value) {
                    return nativeObjectToString.call(value);
                }

                module.exports = objectToString;


                /***/
            }),

        /***/
        "t68N":
            /***/
            ((module) => {

                /**
                 * Creates a unary function that invokes `func` with its argument transformed.
                 *
                 * @private
                 * @param {Function} func The function to wrap.
                 * @param {Function} transform The argument transform.
                 * @returns {Function} Returns the new function.
                 */
                function overArg(func, transform) {
                    return function(arg) {
                        return func(transform(arg));
                    };
                }

                module.exports = overArg;


                /***/
            }),

        /***/
        "BwJN":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var apply = __webpack_require__("m/tl");

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeMax = Math.max;

                /**
                 * A specialized version of `baseRest` which transforms the rest array.
                 *
                 * @private
                 * @param {Function} func The function to apply a rest parameter to.
                 * @param {number} [start=func.length-1] The start position of the rest parameter.
                 * @param {Function} transform The rest array transform.
                 * @returns {Function} Returns the new function.
                 */
                function overRest(func, start, transform) {
                    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
                    return function() {
                        var args = arguments,
                            index = -1,
                            length = nativeMax(args.length - start, 0),
                            array = Array(length);

                        while (++index < length) {
                            array[index] = args[start + index];
                        }
                        index = -1;
                        var otherArgs = Array(start + 1);
                        while (++index < start) {
                            otherArgs[index] = args[index];
                        }
                        otherArgs[start] = transform(array);
                        return apply(func, this, otherArgs);
                    };
                }

                module.exports = overRest;


                /***/
            }),

        /***/
        "d/0d":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGet = __webpack_require__("capL"),
                    baseSlice = __webpack_require__("0Qmp");

                /**
                 * Gets the parent value at `path` of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {Array} path The path to get the parent value of.
                 * @returns {*} Returns the parent value.
                 */
                function parent(object, path) {
                    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
                }

                module.exports = parent;


                /***/
            }),

        /***/
        "O4yA":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var freeGlobal = __webpack_require__("yn9n");

                /** Detect free variable `self`. */
                var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

                /** Used as a reference to the global object. */
                var root = freeGlobal || freeSelf || Function('return this')();

                module.exports = root;


                /***/
            }),

        /***/
        "orhk":
            /***/
            ((module) => {

                /** Used to stand-in for `undefined` hash values. */
                var HASH_UNDEFINED = '__lodash_hash_undefined__';

                /**
                 * Adds `value` to the array cache.
                 *
                 * @private
                 * @name add
                 * @memberOf SetCache
                 * @alias push
                 * @param {*} value The value to cache.
                 * @returns {Object} Returns the cache instance.
                 */
                function setCacheAdd(value) {
                    this.__data__.set(value, HASH_UNDEFINED);
                    return this;
                }

                module.exports = setCacheAdd;


                /***/
            }),

        /***/
        "zzA2":
            /***/
            ((module) => {

                /**
                 * Checks if `value` is in the array cache.
                 *
                 * @private
                 * @name has
                 * @memberOf SetCache
                 * @param {*} value The value to search for.
                 * @returns {number} Returns `true` if `value` is found, else `false`.
                 */
                function setCacheHas(value) {
                    return this.__data__.has(value);
                }

                module.exports = setCacheHas;


                /***/
            }),

        /***/
        "9rFP":
            /***/
            ((module) => {

                /**
                 * Converts `set` to an array of its values.
                 *
                 * @private
                 * @param {Object} set The set to convert.
                 * @returns {Array} Returns the values.
                 */
                function setToArray(set) {
                    var index = -1,
                        result = Array(set.size);

                    set.forEach(function(value) {
                        result[++index] = value;
                    });
                    return result;
                }

                module.exports = setToArray;


                /***/
            }),

        /***/
        "UUZ0":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseSetToString = __webpack_require__("7om2"),
                    shortOut = __webpack_require__("tc49");

                /**
                 * Sets the `toString` method of `func` to return `string`.
                 *
                 * @private
                 * @param {Function} func The function to modify.
                 * @param {Function} string The `toString` result.
                 * @returns {Function} Returns `func`.
                 */
                var setToString = shortOut(baseSetToString);

                module.exports = setToString;


                /***/
            }),

        /***/
        "tc49":
            /***/
            ((module) => {

                /** Used to detect hot functions by number of calls within a span of milliseconds. */
                var HOT_COUNT = 800,
                    HOT_SPAN = 16;

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeNow = Date.now;

                /**
                 * Creates a function that'll short out and invoke `identity` instead
                 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
                 * milliseconds.
                 *
                 * @private
                 * @param {Function} func The function to restrict.
                 * @returns {Function} Returns the new shortable function.
                 */
                function shortOut(func) {
                    var count = 0,
                        lastCalled = 0;

                    return function() {
                        var stamp = nativeNow(),
                            remaining = HOT_SPAN - (stamp - lastCalled);

                        lastCalled = stamp;
                        if (remaining > 0) {
                            if (++count >= HOT_COUNT) {
                                return arguments[0];
                            }
                        } else {
                            count = 0;
                        }
                        return func.apply(undefined, arguments);
                    };
                }

                module.exports = shortOut;


                /***/
            }),

        /***/
        "mIaV":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var ListCache = __webpack_require__("ry6q");

                /**
                 * Removes all key-value entries from the stack.
                 *
                 * @private
                 * @name clear
                 * @memberOf Stack
                 */
                function stackClear() {
                    this.__data__ = new ListCache;
                    this.size = 0;
                }

                module.exports = stackClear;


                /***/
            }),

        /***/
        "EA9V":
            /***/
            ((module) => {

                /**
                 * Removes `key` and its value from the stack.
                 *
                 * @private
                 * @name delete
                 * @memberOf Stack
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function stackDelete(key) {
                    var data = this.__data__,
                        result = data['delete'](key);

                    this.size = data.size;
                    return result;
                }

                module.exports = stackDelete;


                /***/
            }),

        /***/
        "nXRf":
            /***/
            ((module) => {

                /**
                 * Gets the stack value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf Stack
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function stackGet(key) {
                    return this.__data__.get(key);
                }

                module.exports = stackGet;


                /***/
            }),

        /***/
        "KSsz":
            /***/
            ((module) => {

                /**
                 * Checks if a stack value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf Stack
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function stackHas(key) {
                    return this.__data__.has(key);
                }

                module.exports = stackHas;


                /***/
            }),

        /***/
        "M9kN":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var ListCache = __webpack_require__("ry6q"),
                    Map = __webpack_require__("GQDD"),
                    MapCache = __webpack_require__("67Yi");

                /** Used as the size to enable large array optimizations. */
                var LARGE_ARRAY_SIZE = 200;

                /**
                 * Sets the stack `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf Stack
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the stack cache instance.
                 */
                function stackSet(key, value) {
                    var data = this.__data__;
                    if (data instanceof ListCache) {
                        var pairs = data.__data__;
                        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
                            pairs.push([key, value]);
                            this.size = ++data.size;
                            return this;
                        }
                        data = this.__data__ = new MapCache(pairs);
                    }
                    data.set(key, value);
                    this.size = data.size;
                    return this;
                }

                module.exports = stackSet;


                /***/
            }),

        /***/
        "Zgy7":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var memoizeCapped = __webpack_require__("vFD/");

                /** Used to match property names within property paths. */
                var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

                /** Used to match backslashes in property paths. */
                var reEscapeChar = /\\(\\)?/g;

                /**
                 * Converts `string` to a property path array.
                 *
                 * @private
                 * @param {string} string The string to convert.
                 * @returns {Array} Returns the property path array.
                 */
                var stringToPath = memoizeCapped(function(string) {
                    var result = [];
                    if (string.charCodeAt(0) === 46 /* . */ ) {
                        result.push('');
                    }
                    string.replace(rePropName, function(match, number, quote, subString) {
                        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
                    });
                    return result;
                });

                module.exports = stringToPath;


                /***/
            }),

        /***/
        "OD7W":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isSymbol = __webpack_require__("F6gM");

                /** Used as references for various `Number` constants. */
                var INFINITY = 1 / 0;

                /**
                 * Converts `value` to a string key if it's not a string or symbol.
                 *
                 * @private
                 * @param {*} value The value to inspect.
                 * @returns {string|symbol} Returns the key.
                 */
                function toKey(value) {
                    if (typeof value == 'string' || isSymbol(value)) {
                        return value;
                    }
                    var result = (value + '');
                    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
                }

                module.exports = toKey;


                /***/
            }),

        /***/
        "GLf+":
            /***/
            ((module) => {

                /** Used for built-in method references. */
                var funcProto = Function.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /**
                 * Converts `func` to its source code.
                 *
                 * @private
                 * @param {Function} func The function to convert.
                 * @returns {string} Returns the source code.
                 */
                function toSource(func) {
                    if (func != null) {
                        try {
                            return funcToString.call(func);
                        } catch (e) {}
                        try {
                            return (func + '');
                        } catch (e) {}
                    }
                    return '';
                }

                module.exports = toSource;


                /***/
            }),

        /***/
        "oZ31":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseClone = __webpack_require__("apBQ");

                /** Used to compose bitmasks for cloning. */
                var CLONE_DEEP_FLAG = 1,
                    CLONE_SYMBOLS_FLAG = 4;

                /**
                 * This method is like `_.clone` except that it recursively clones `value`.
                 *
                 * @static
                 * @memberOf _
                 * @since 1.0.0
                 * @category Lang
                 * @param {*} value The value to recursively clone.
                 * @returns {*} Returns the deep cloned value.
                 * @see _.clone
                 * @example
                 *
                 * var objects = [{ 'a': 1 }, { 'b': 2 }];
                 *
                 * var deep = _.cloneDeep(objects);
                 * console.log(deep[0] === objects[0]);
                 * // => false
                 */
                function cloneDeep(value) {
                    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
                }

                module.exports = cloneDeep;


                /***/
            }),

        /***/
        "+3sx":
            /***/
            ((module) => {

                /**
                 * Creates a function that returns `value`.
                 *
                 * @static
                 * @memberOf _
                 * @since 2.4.0
                 * @category Util
                 * @param {*} value The value to return from the new function.
                 * @returns {Function} Returns the new constant function.
                 * @example
                 *
                 * var objects = _.times(2, _.constant({ 'a': 1 }));
                 *
                 * console.log(objects);
                 * // => [{ 'a': 1 }, { 'a': 1 }]
                 *
                 * console.log(objects[0] === objects[1]);
                 * // => true
                 */
                function constant(value) {
                    return function() {
                        return value;
                    };
                }

                module.exports = constant;


                /***/
            }),

        /***/
        "fkhx":
            /***/
            ((module) => {

                /**
                 * Performs a
                 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
                 * comparison between two values to determine if they are equivalent.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to compare.
                 * @param {*} other The other value to compare.
                 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                 * @example
                 *
                 * var object = { 'a': 1 };
                 * var other = { 'a': 1 };
                 *
                 * _.eq(object, object);
                 * // => true
                 *
                 * _.eq(object, other);
                 * // => false
                 *
                 * _.eq('a', 'a');
                 * // => true
                 *
                 * _.eq('a', Object('a'));
                 * // => false
                 *
                 * _.eq(NaN, NaN);
                 * // => true
                 */
                function eq(value, other) {
                    return value === other || (value !== value && other !== other);
                }

                module.exports = eq;


                /***/
            }),

        /***/
        "sJyE":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseFlatten = __webpack_require__("jKCO");

                /**
                 * Flattens `array` a single level deep.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Array
                 * @param {Array} array The array to flatten.
                 * @returns {Array} Returns the new flattened array.
                 * @example
                 *
                 * _.flatten([1, [2, [3, [4]], 5]]);
                 * // => [1, 2, [3, [4]], 5]
                 */
                function flatten(array) {
                    var length = array == null ? 0 : array.length;
                    return length ? baseFlatten(array, 1) : [];
                }

                module.exports = flatten;


                /***/
            }),

        /***/
        "k4Sg":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGet = __webpack_require__("capL");

                /**
                 * Gets the value at `path` of `object`. If the resolved value is
                 * `undefined`, the `defaultValue` is returned in its place.
                 *
                 * @static
                 * @memberOf _
                 * @since 3.7.0
                 * @category Object
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path of the property to get.
                 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
                 * @returns {*} Returns the resolved value.
                 * @example
                 *
                 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
                 *
                 * _.get(object, 'a[0].b.c');
                 * // => 3
                 *
                 * _.get(object, ['a', '0', 'b', 'c']);
                 * // => 3
                 *
                 * _.get(object, 'a.b.c', 'default');
                 * // => 'default'
                 */
                function get(object, path, defaultValue) {
                    var result = object == null ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result;
                }

                module.exports = get;


                /***/
            }),

        /***/
        "JDKm":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseHasIn = __webpack_require__("qilg"),
                    hasPath = __webpack_require__("2oV1");

                /**
                 * Checks if `path` is a direct or inherited property of `object`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Object
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path to check.
                 * @returns {boolean} Returns `true` if `path` exists, else `false`.
                 * @example
                 *
                 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
                 *
                 * _.hasIn(object, 'a');
                 * // => true
                 *
                 * _.hasIn(object, 'a.b');
                 * // => true
                 *
                 * _.hasIn(object, ['a', 'b']);
                 * // => true
                 *
                 * _.hasIn(object, 'b');
                 * // => false
                 */
                function hasIn(object, path) {
                    return object != null && hasPath(object, path, baseHasIn);
                }

                module.exports = hasIn;


                /***/
            }),

        /***/
        "eHdO":
            /***/
            ((module) => {

                /**
                 * This method returns the first argument it receives.
                 *
                 * @static
                 * @since 0.1.0
                 * @memberOf _
                 * @category Util
                 * @param {*} value Any value.
                 * @returns {*} Returns `value`.
                 * @example
                 *
                 * var object = { 'a': 1 };
                 *
                 * console.log(_.identity(object) === object);
                 * // => true
                 */
                function identity(value) {
                    return value;
                }

                module.exports = identity;


                /***/
            }),

        /***/
        "1Grl":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsArguments = __webpack_require__("7TNV"),
                    isObjectLike = __webpack_require__("lf6h");

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Built-in value references. */
                var propertyIsEnumerable = objectProto.propertyIsEnumerable;

                /**
                 * Checks if `value` is likely an `arguments` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                 *  else `false`.
                 * @example
                 *
                 * _.isArguments(function() { return arguments; }());
                 * // => true
                 *
                 * _.isArguments([1, 2, 3]);
                 * // => false
                 */
                var isArguments = baseIsArguments(function() {
                    return arguments;
                }()) ? baseIsArguments : function(value) {
                    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
                        !propertyIsEnumerable.call(value, 'callee');
                };

                module.exports = isArguments;


                /***/
            }),

        /***/
        "eoSM":
            /***/
            ((module) => {

                /**
                 * Checks if `value` is classified as an `Array` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
                 * @example
                 *
                 * _.isArray([1, 2, 3]);
                 * // => true
                 *
                 * _.isArray(document.body.children);
                 * // => false
                 *
                 * _.isArray('abc');
                 * // => false
                 *
                 * _.isArray(_.noop);
                 * // => false
                 */
                var isArray = Array.isArray;

                module.exports = isArray;


                /***/
            }),

        /***/
        "Zjj6":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var isFunction = __webpack_require__("+U9+"),
                    isLength = __webpack_require__("VJj2");

                /**
                 * Checks if `value` is array-like. A value is considered array-like if it's
                 * not a function and has a `value.length` that's an integer greater than or
                 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
                 * @example
                 *
                 * _.isArrayLike([1, 2, 3]);
                 * // => true
                 *
                 * _.isArrayLike(document.body.children);
                 * // => true
                 *
                 * _.isArrayLike('abc');
                 * // => true
                 *
                 * _.isArrayLike(_.noop);
                 * // => false
                 */
                function isArrayLike(value) {
                    return value != null && isLength(value.length) && !isFunction(value);
                }

                module.exports = isArrayLike;


                /***/
            }),

        /***/
        "Zsrj":
            /***/
            ((module, exports, __webpack_require__) => {

                /* module decorator */
                module = __webpack_require__.nmd(module);
                var root = __webpack_require__("O4yA"),
                    stubFalse = __webpack_require__("RfhN");

                /** Detect free variable `exports`. */
                var freeExports = true && exports && !exports.nodeType && exports;

                /** Detect free variable `module`. */
                var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

                /** Detect the popular CommonJS extension `module.exports`. */
                var moduleExports = freeModule && freeModule.exports === freeExports;

                /** Built-in value references. */
                var Buffer = moduleExports ? root.Buffer : undefined;

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

                /**
                 * Checks if `value` is a buffer.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.3.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
                 * @example
                 *
                 * _.isBuffer(new Buffer(2));
                 * // => true
                 *
                 * _.isBuffer(new Uint8Array(2));
                 * // => false
                 */
                var isBuffer = nativeIsBuffer || stubFalse;

                module.exports = isBuffer;


                /***/
            }),

        /***/
        "+U9+":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetTag = __webpack_require__("PORw"),
                    isObject = __webpack_require__("PWyJ");

                /** `Object#toString` result references. */
                var asyncTag = '[object AsyncFunction]',
                    funcTag = '[object Function]',
                    genTag = '[object GeneratorFunction]',
                    proxyTag = '[object Proxy]';

                /**
                 * Checks if `value` is classified as a `Function` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
                 * @example
                 *
                 * _.isFunction(_);
                 * // => true
                 *
                 * _.isFunction(/abc/);
                 * // => false
                 */
                function isFunction(value) {
                    if (!isObject(value)) {
                        return false;
                    }
                    // The use of `Object#toString` avoids issues with the `typeof` operator
                    // in Safari 9 which returns 'object' for typed arrays and other constructors.
                    var tag = baseGetTag(value);
                    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
                }

                module.exports = isFunction;


                /***/
            }),

        /***/
        "VJj2":
            /***/
            ((module) => {

                /** Used as references for various `Number` constants. */
                var MAX_SAFE_INTEGER = 9007199254740991;

                /**
                 * Checks if `value` is a valid array-like length.
                 *
                 * **Note:** This method is loosely based on
                 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
                 * @example
                 *
                 * _.isLength(3);
                 * // => true
                 *
                 * _.isLength(Number.MIN_VALUE);
                 * // => false
                 *
                 * _.isLength(Infinity);
                 * // => false
                 *
                 * _.isLength('3');
                 * // => false
                 */
                function isLength(value) {
                    return typeof value == 'number' &&
                        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
                }

                module.exports = isLength;


                /***/
            }),

        /***/
        "dLFG":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsMap = __webpack_require__("R2EU"),
                    baseUnary = __webpack_require__("NTsA"),
                    nodeUtil = __webpack_require__("bUaa");

                /* Node.js helper references. */
                var nodeIsMap = nodeUtil && nodeUtil.isMap;

                /**
                 * Checks if `value` is classified as a `Map` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.3.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
                 * @example
                 *
                 * _.isMap(new Map);
                 * // => true
                 *
                 * _.isMap(new WeakMap);
                 * // => false
                 */
                var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

                module.exports = isMap;


                /***/
            }),

        /***/
        "PWyJ":
            /***/
            ((module) => {

                /**
                 * Checks if `value` is the
                 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
                 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
                 * @example
                 *
                 * _.isObject({});
                 * // => true
                 *
                 * _.isObject([1, 2, 3]);
                 * // => true
                 *
                 * _.isObject(_.noop);
                 * // => true
                 *
                 * _.isObject(null);
                 * // => false
                 */
                function isObject(value) {
                    var type = typeof value;
                    return value != null && (type == 'object' || type == 'function');
                }

                module.exports = isObject;


                /***/
            }),

        /***/
        "lf6h":
            /***/
            ((module) => {

                /**
                 * Checks if `value` is object-like. A value is object-like if it's not `null`
                 * and has a `typeof` result of "object".
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
                 * @example
                 *
                 * _.isObjectLike({});
                 * // => true
                 *
                 * _.isObjectLike([1, 2, 3]);
                 * // => true
                 *
                 * _.isObjectLike(_.noop);
                 * // => false
                 *
                 * _.isObjectLike(null);
                 * // => false
                 */
                function isObjectLike(value) {
                    return value != null && typeof value == 'object';
                }

                module.exports = isObjectLike;


                /***/
            }),

        /***/
        "pNQ9":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetTag = __webpack_require__("PORw"),
                    getPrototype = __webpack_require__("G3p3"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var objectTag = '[object Object]';

                /** Used for built-in method references. */
                var funcProto = Function.prototype,
                    objectProto = Object.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Used to infer the `Object` constructor. */
                var objectCtorString = funcToString.call(Object);

                /**
                 * Checks if `value` is a plain object, that is, an object created by the
                 * `Object` constructor or one with a `[[Prototype]]` of `null`.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.8.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
                 * @example
                 *
                 * function Foo() {
                 *   this.a = 1;
                 * }
                 *
                 * _.isPlainObject(new Foo);
                 * // => false
                 *
                 * _.isPlainObject([1, 2, 3]);
                 * // => false
                 *
                 * _.isPlainObject({ 'x': 0, 'y': 0 });
                 * // => true
                 *
                 * _.isPlainObject(Object.create(null));
                 * // => true
                 */
                function isPlainObject(value) {
                    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                        return false;
                    }
                    var proto = getPrototype(value);
                    if (proto === null) {
                        return true;
                    }
                    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
                    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
                        funcToString.call(Ctor) == objectCtorString;
                }

                module.exports = isPlainObject;


                /***/
            }),

        /***/
        "hibQ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsSet = __webpack_require__("7NGV"),
                    baseUnary = __webpack_require__("NTsA"),
                    nodeUtil = __webpack_require__("bUaa");

                /* Node.js helper references. */
                var nodeIsSet = nodeUtil && nodeUtil.isSet;

                /**
                 * Checks if `value` is classified as a `Set` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.3.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
                 * @example
                 *
                 * _.isSet(new Set);
                 * // => true
                 *
                 * _.isSet(new WeakSet);
                 * // => false
                 */
                var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

                module.exports = isSet;


                /***/
            }),

        /***/
        "F6gM":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseGetTag = __webpack_require__("PORw"),
                    isObjectLike = __webpack_require__("lf6h");

                /** `Object#toString` result references. */
                var symbolTag = '[object Symbol]';

                /**
                 * Checks if `value` is classified as a `Symbol` primitive or object.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
                 * @example
                 *
                 * _.isSymbol(Symbol.iterator);
                 * // => true
                 *
                 * _.isSymbol('abc');
                 * // => false
                 */
                function isSymbol(value) {
                    return typeof value == 'symbol' ||
                        (isObjectLike(value) && baseGetTag(value) == symbolTag);
                }

                module.exports = isSymbol;


                /***/
            }),

        /***/
        "GC0I":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseIsTypedArray = __webpack_require__("IuL+"),
                    baseUnary = __webpack_require__("NTsA"),
                    nodeUtil = __webpack_require__("bUaa");

                /* Node.js helper references. */
                var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

                /**
                 * Checks if `value` is classified as a typed array.
                 *
                 * @static
                 * @memberOf _
                 * @since 3.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                 * @example
                 *
                 * _.isTypedArray(new Uint8Array);
                 * // => true
                 *
                 * _.isTypedArray([]);
                 * // => false
                 */
                var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

                module.exports = isTypedArray;


                /***/
            }),

        /***/
        "iH+U":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseAssignValue = __webpack_require__("Sxfv"),
                    createAggregator = __webpack_require__("7QKQ");

                /**
                 * Creates an object composed of keys generated from the results of running
                 * each element of `collection` thru `iteratee`. The corresponding value of
                 * each key is the last element responsible for generating the key. The
                 * iteratee is invoked with one argument: (value).
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Collection
                 * @param {Array|Object} collection The collection to iterate over.
                 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
                 * @returns {Object} Returns the composed aggregate object.
                 * @example
                 *
                 * var array = [
                 *   { 'dir': 'left', 'code': 97 },
                 *   { 'dir': 'right', 'code': 100 }
                 * ];
                 *
                 * _.keyBy(array, function(o) {
                 *   return String.fromCharCode(o.code);
                 * });
                 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
                 *
                 * _.keyBy(array, 'dir');
                 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
                 */
                var keyBy = createAggregator(function(result, value, key) {
                    baseAssignValue(result, key, value);
                });

                module.exports = keyBy;


                /***/
            }),

        /***/
        "6vUj":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayLikeKeys = __webpack_require__("pgBP"),
                    baseKeys = __webpack_require__("dfcU"),
                    isArrayLike = __webpack_require__("Zjj6");

                /**
                 * Creates an array of the own enumerable property names of `object`.
                 *
                 * **Note:** Non-object values are coerced to objects. See the
                 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
                 * for more details.
                 *
                 * @static
                 * @since 0.1.0
                 * @memberOf _
                 * @category Object
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 * @example
                 *
                 * function Foo() {
                 *   this.a = 1;
                 *   this.b = 2;
                 * }
                 *
                 * Foo.prototype.c = 3;
                 *
                 * _.keys(new Foo);
                 * // => ['a', 'b'] (iteration order is not guaranteed)
                 *
                 * _.keys('hi');
                 * // => ['0', '1']
                 */
                function keys(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
                }

                module.exports = keys;


                /***/
            }),

        /***/
        "38cL":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayLikeKeys = __webpack_require__("pgBP"),
                    baseKeysIn = __webpack_require__("VMLz"),
                    isArrayLike = __webpack_require__("Zjj6");

                /**
                 * Creates an array of the own and inherited enumerable property names of `object`.
                 *
                 * **Note:** Non-object values are coerced to objects.
                 *
                 * @static
                 * @memberOf _
                 * @since 3.0.0
                 * @category Object
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 * @example
                 *
                 * function Foo() {
                 *   this.a = 1;
                 *   this.b = 2;
                 * }
                 *
                 * Foo.prototype.c = 3;
                 *
                 * _.keysIn(new Foo);
                 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
                 */
                function keysIn(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
                }

                module.exports = keysIn;


                /***/
            }),

        /***/
        "LsRE":
            /***/
            ((module) => {

                /**
                 * Gets the last element of `array`.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Array
                 * @param {Array} array The array to query.
                 * @returns {*} Returns the last element of `array`.
                 * @example
                 *
                 * _.last([1, 2, 3]);
                 * // => 3
                 */
                function last(array) {
                    var length = array == null ? 0 : array.length;
                    return length ? array[length - 1] : undefined;
                }

                module.exports = last;


                /***/
            }),

        /***/
        "foqJ":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var MapCache = __webpack_require__("67Yi");

                /** Error message constants. */
                var FUNC_ERROR_TEXT = 'Expected a function';

                /**
                 * Creates a function that memoizes the result of `func`. If `resolver` is
                 * provided, it determines the cache key for storing the result based on the
                 * arguments provided to the memoized function. By default, the first argument
                 * provided to the memoized function is used as the map cache key. The `func`
                 * is invoked with the `this` binding of the memoized function.
                 *
                 * **Note:** The cache is exposed as the `cache` property on the memoized
                 * function. Its creation may be customized by replacing the `_.memoize.Cache`
                 * constructor with one whose instances implement the
                 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
                 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Function
                 * @param {Function} func The function to have its output memoized.
                 * @param {Function} [resolver] The function to resolve the cache key.
                 * @returns {Function} Returns the new memoized function.
                 * @example
                 *
                 * var object = { 'a': 1, 'b': 2 };
                 * var other = { 'c': 3, 'd': 4 };
                 *
                 * var values = _.memoize(_.values);
                 * values(object);
                 * // => [1, 2]
                 *
                 * values(other);
                 * // => [3, 4]
                 *
                 * object.a = 2;
                 * values(object);
                 * // => [1, 2]
                 *
                 * // Modify the result cache.
                 * values.cache.set(object, ['a', 'b']);
                 * values(object);
                 * // => ['a', 'b']
                 *
                 * // Replace `_.memoize.Cache`.
                 * _.memoize.Cache = WeakMap;
                 */
                function memoize(func, resolver) {
                    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    var memoized = function() {
                        var args = arguments,
                            key = resolver ? resolver.apply(this, args) : args[0],
                            cache = memoized.cache;

                        if (cache.has(key)) {
                            return cache.get(key);
                        }
                        var result = func.apply(this, args);
                        memoized.cache = cache.set(key, result) || cache;
                        return result;
                    };
                    memoized.cache = new(memoize.Cache || MapCache);
                    return memoized;
                }

                // Expose `MapCache`.
                memoize.Cache = MapCache;

                module.exports = memoize;


                /***/
            }),

        /***/
        "9cH7":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var arrayMap = __webpack_require__("+reW"),
                    baseClone = __webpack_require__("apBQ"),
                    baseUnset = __webpack_require__("GNBy"),
                    castPath = __webpack_require__("y24P"),
                    copyObject = __webpack_require__("suam"),
                    customOmitClone = __webpack_require__("OSrB"),
                    flatRest = __webpack_require__("6hI1"),
                    getAllKeysIn = __webpack_require__("8cEZ");

                /** Used to compose bitmasks for cloning. */
                var CLONE_DEEP_FLAG = 1,
                    CLONE_FLAT_FLAG = 2,
                    CLONE_SYMBOLS_FLAG = 4;

                /**
                 * The opposite of `_.pick`; this method creates an object composed of the
                 * own and inherited enumerable property paths of `object` that are not omitted.
                 *
                 * **Note:** This method is considerably slower than `_.pick`.
                 *
                 * @static
                 * @since 0.1.0
                 * @memberOf _
                 * @category Object
                 * @param {Object} object The source object.
                 * @param {...(string|string[])} [paths] The property paths to omit.
                 * @returns {Object} Returns the new object.
                 * @example
                 *
                 * var object = { 'a': 1, 'b': '2', 'c': 3 };
                 *
                 * _.omit(object, ['a', 'c']);
                 * // => { 'b': '2' }
                 */
                var omit = flatRest(function(object, paths) {
                    var result = {};
                    if (object == null) {
                        return result;
                    }
                    var isDeep = false;
                    paths = arrayMap(paths, function(path) {
                        path = castPath(path, object);
                        isDeep || (isDeep = path.length > 1);
                        return path;
                    });
                    copyObject(object, getAllKeysIn(object), result);
                    if (isDeep) {
                        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
                    }
                    var length = paths.length;
                    while (length--) {
                        baseUnset(result, paths[length]);
                    }
                    return result;
                });

                module.exports = omit;


                /***/
            }),

        /***/
        "iRtw":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseProperty = __webpack_require__("36PR"),
                    basePropertyDeep = __webpack_require__("M42/"),
                    isKey = __webpack_require__("Qyvd"),
                    toKey = __webpack_require__("OD7W");

                /**
                 * Creates a function that returns the value at `path` of a given object.
                 *
                 * @static
                 * @memberOf _
                 * @since 2.4.0
                 * @category Util
                 * @param {Array|string} path The path of the property to get.
                 * @returns {Function} Returns the new accessor function.
                 * @example
                 *
                 * var objects = [
                 *   { 'a': { 'b': 2 } },
                 *   { 'a': { 'b': 1 } }
                 * ];
                 *
                 * _.map(objects, _.property('a.b'));
                 * // => [2, 1]
                 *
                 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
                 * // => [1, 2]
                 */
                function property(path) {
                    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
                }

                module.exports = property;


                /***/
            }),

        /***/
        "eKcC":
            /***/
            ((module) => {

                /**
                 * This method returns a new empty array.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.13.0
                 * @category Util
                 * @returns {Array} Returns the new empty array.
                 * @example
                 *
                 * var arrays = _.times(2, _.stubArray);
                 *
                 * console.log(arrays);
                 * // => [[], []]
                 *
                 * console.log(arrays[0] === arrays[1]);
                 * // => false
                 */
                function stubArray() {
                    return [];
                }

                module.exports = stubArray;


                /***/
            }),

        /***/
        "RfhN":
            /***/
            ((module) => {

                /**
                 * This method returns `false`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.13.0
                 * @category Util
                 * @returns {boolean} Returns `false`.
                 * @example
                 *
                 * _.times(2, _.stubFalse);
                 * // => [false, false]
                 */
                function stubFalse() {
                    return false;
                }

                module.exports = stubFalse;


                /***/
            }),

        /***/
        "WsPr":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {

                var baseToString = __webpack_require__("41Ij");

                /**
                 * Converts `value` to a string. An empty string is returned for `null`
                 * and `undefined` values. The sign of `-0` is preserved.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to convert.
                 * @returns {string} Returns the converted string.
                 * @example
                 *
                 * _.toString(null);
                 * // => ''
                 *
                 * _.toString(-0);
                 * // => '-0'
                 *
                 * _.toString([1, 2, 3]);
                 * // => '1,2,3'
                 */
                function toString(value) {
                    return value == null ? '' : baseToString(value);
                }

                module.exports = toString;


                /***/
            })

    }
]);
//# debugId=3751c1d5-d68c-564d-90a1-1ee8804d258b