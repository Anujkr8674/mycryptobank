"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "833632a8-3e34-5e42-80e5-e9982c103b91")
    } catch (e) {}
}();

(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [774], {

        /***/
        "Cfwz":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "$": () => ( /* binding */ getAppData)
                    /* harmony export */
                });
                /* harmony import */
                var _shuvi_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K+9F");
                /// <reference lib="dom" />

                let appData = null;

                function getAppData() {
                    if (appData) {
                        return appData;
                    }
                    if (false) {}
                    const el = document.getElementById(_shuvi_shared_constants__WEBPACK_IMPORTED_MODULE_0__ /* .CLIENT_APPDATA_ID */ .Ug);
                    if (!el || !el.textContent) {
                        return {
                            ssr: false,
                            pageData: {},
                            filesByRoutId: {},
                            publicPath: '/',
                            runtimeConfig: {}
                        };
                    }
                    return JSON.parse(el.textContent);
                }


                /***/
            }),

        /***/
        "2cXD":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "u": () => ( /* binding */ getPageData)
                    /* harmony export */
                });
                /* harmony import */
                var _getAppData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Cfwz");

                const hasOwnProperty = Object.prototype.hasOwnProperty;

                function getPageData(key, defaultValue) {
                    if (false) {}
                    const {
                        pageData = {}
                    } = (0, _getAppData__WEBPACK_IMPORTED_MODULE_0__ /* .getAppData */ .$)();
                    if (!hasOwnProperty.call(pageData, key)) {
                        return defaultValue;
                    }
                    return pageData[key];
                }


                /***/
            }),

        /***/
        "8anA":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Y": () => ( /* binding */ loaderModelName),
                    /* harmony export */
                    "y": () => ( /* binding */ loaderModel)
                    /* harmony export */
                });
                /* harmony import */
                var doura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("H/+l");

                const initState = {
                    dataByRouteId: {}
                };
                const loaderModelName = 'loader';
                const loaderModel = (0, doura__WEBPACK_IMPORTED_MODULE_0__ /* .defineModel */ .Gn)({
                    state: initState,
                    actions: {
                        setDatas(newData) {
                            this.dataByRouteId = (0, doura__WEBPACK_IMPORTED_MODULE_0__ /* .markRaw */ .Xl)(Object.assign(Object.assign({}, this.dataByRouteId), newData));
                        }
                    },
                    views: {
                        getAllData() {
                            return this.dataByRouteId;
                        }
                    }
                });


                /***/
            }),

        /***/
        "w0tC":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Sx": () => ( /* binding */ createRuntimePlugin),
                    "Z_": () => ( /* binding */ createRuntimePluginAfter),
                    "fu": () => ( /* binding */ createRuntimePluginBefore),
                    "UE": () => ( /* binding */ getManager),
                    "mV": () => ( /* binding */ initPlugins)
                });

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+hook@1.0.61/node_modules/@shuvi/hook/esm/hooks.js
                // 钩子参数来源（void，固定值，前一个钩子的返回值） 钩子同步异步 钩子调用顺序（） 钩子返回值
                // 普通型钩子handler均无返回值（如果有，则是一个数组，但是似乎没啥用，如果对返回值有要求，那么应该用waterfall钩子）
                var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                const createSyncHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => {
                        // @ts-ignore
                        return _handlers.map(handler => handler(...args));
                    };
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'SyncHook'
                    };
                };
                const createSyncBailHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => {
                        for (let i = 0; i < _handlers.length; i++) {
                            const handler = _handlers[i];
                            // @ts-ignore
                            const result = handler(...args);
                            if (result)
                                return result;
                        }
                        return undefined;
                    };
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'SyncBailHook'
                    };
                };
                const createSyncWaterfallHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => {
                        let [currentParam, ...otherArgs] = args;
                        for (let i = 0; i < _handlers.length; i++) {
                            const handler = _handlers[i];
                            // @ts-ignore
                            const result = handler(currentParam, ...otherArgs);
                            if (result !== undefined) {
                                currentParam = result;
                            }
                        }
                        return currentParam;
                    };
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'SyncWaterfallHook'
                    };
                };
                const createAsyncParallelHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => __awaiter(void 0, void 0, void 0, function*() {
                        return yield Promise.all(_handlers.map(
                            // @ts-ignore
                            handler => handler(...args)));
                    });
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'AsyncParallelHook'
                    };
                };
                const createAsyncSeriesHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => __awaiter(void 0, void 0, void 0, function*() {
                        const result = [];
                        for (let i = 0; i < _handlers.length; i++) {
                            const handler = _handlers[i];
                            // @ts-ignore
                            const currentResult = yield handler(...args);
                            result.push(currentResult);
                        }
                        return result;
                    });
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'AsyncSeriesHook'
                    };
                };
                const createAsyncSeriesBailHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => __awaiter(void 0, void 0, void 0, function*() {
                        for (let i = 0; i < _handlers.length; i++) {
                            const handler = _handlers[i];
                            // @ts-ignore
                            const result = yield handler(...args);
                            if (result !== undefined)
                                return result;
                        }
                        return undefined;
                    });
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'AsyncSeriesHook'
                    };
                };
                const createAsyncSeriesWaterfallHook = () => {
                    let _handlers = [];
                    const use = (...handlers) => {
                        _handlers.push(...handlers);
                    };
                    const run = (...args) => __awaiter(void 0, void 0, void 0, function*() {
                        let [currentParam, ...otherArgs] = args;
                        for (let i = 0; i < _handlers.length; i++) {
                            const handler = _handlers[i];
                            // @ts-ignore
                            const result = yield handler(currentParam, ...otherArgs);
                            if (result !== undefined) {
                                currentParam = result;
                            }
                        }
                        return currentParam;
                    });
                    const clear = () => {
                        _handlers = [];
                    };
                    return {
                        use,
                        run,
                        clear,
                        type: 'AsyncSeriesWaterfallHook'
                    };
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+hook@1.0.61/node_modules/@shuvi/hook/esm/utils.js
                const sortPluginsByRelationShip = (input) => {
                    const plugins = new Map();
                    /**
                     * the key is the end point of the edge
                     * In this way, we can easily find the plugin with zero in-degree
                     */
                    const edges = new Map();
                    const addEdge = (start, end) => {
                        if (!edges.has(end)) {
                            edges.set(end, new Set());
                        }
                        edges.get(end).add(start);
                    };
                    // Firstly, set plugins into map
                    input.forEach(plugin => {
                        plugins.set(plugin.name, plugin);
                    });
                    input.forEach(plugin => {
                        if (!edges.has(plugin.name)) {
                            edges.set(plugin.name, new Set());
                        }
                        if (plugin.before) {
                            plugin.before.forEach(name => {
                                // If the plugin is not in the input, we will ignore it
                                if (plugins.has(name)) {
                                    addEdge(plugin.name, name);
                                }
                            });
                        }
                        if (plugin.after) {
                            plugin.after.forEach(name => {
                                // If the plugin is not in the input, we will ignore it
                                if (plugins.has(name)) {
                                    addEdge(name, plugin.name);
                                }
                            });
                        }
                    });
                    const sorted = [];
                    while (edges.size > 0) {
                        let hasZeroInDegree = false;
                        edges.forEach((value, key) => {
                            if (value.size === 0) {
                                hasZeroInDegree = true;
                                sorted.push(plugins.get(key));
                                edges.delete(key);
                                edges.forEach(v => {
                                    v.delete(key);
                                });
                            }
                        });
                        if (!hasZeroInDegree) {
                            throw new Error(`Plugin circular dependency detected: ${Array.from(edges.keys()).join(', ')}. Please ensure the plugins have correct 'before' and 'after' property.`);
                        }
                    }
                    return sorted;
                };
                const sortPlugins = (input) => {
                    const groupMap = new Map();
                    input.forEach(plugin => {
                        if (!groupMap.has(plugin.group)) {
                            groupMap.set(plugin.group, []);
                        }
                        groupMap.get(plugin.group).push(plugin);
                    });
                    const groupNumbers = Array.from(groupMap.keys());
                    const sortedGroupNumbers = groupNumbers.sort((a, b) => a - b);
                    const sorted = [];
                    sortedGroupNumbers.forEach(groupNumber => {
                        sorted.push(...sortPluginsByRelationShip(groupMap.get(groupNumber)));
                    });
                    return sorted;
                };
                const verifyPlugins = (plugins) => {
                    const names = new Set();
                    for (const current of plugins) {
                        if (typeof current.name !== 'string') {
                            throw new Error(`Plugin name must be string type.`);
                        }
                        if (!current.name) {
                            throw new Error(`Plugin name must be non-empty string.`);
                        }
                        if (names.has(current.name)) {
                            throw new Error(`Plugin name duplication detected: ${current.name}.`);
                        }
                        names.add(current.name);
                        if (current.conflict) {
                            for (const conflict of current.conflict) {
                                for (const plugin of plugins) {
                                    if (conflict === plugin.name) {
                                        throw new Error(`Plugin conflict detected: ${current.name} has conflict with ${plugin.name}.`);
                                    }
                                }
                            }
                        }
                        if (current.required) {
                            for (const required of current.required) {
                                if (!plugins.some(plugin => plugin.name === required)) {
                                    throw new Error(`Plugin missing detected: ${required} is required by ${current.name}.`);
                                }
                            }
                        }
                    }
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+hook@1.0.61/node_modules/@shuvi/hook/esm/hookGroup.js


                const DEFAULT_OPTIONS = {
                    name: 'untitled',
                    before: [],
                    after: [],
                    conflict: [],
                    required: [],
                    group: 0
                };
                const PLUGIN_SYMBOL = 'PLUGIN_SYMBOL';
                const isPluginInstance = (plugin) => plugin &&
                    plugin.hasOwnProperty(PLUGIN_SYMBOL) &&
                    plugin.PLUGIN_SYMBOL === PLUGIN_SYMBOL;

                function uuid() {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                        var r = (Math.random() * 16) | 0,
                            v = c == 'x' ? r : (r & 0x3) | 0x8;
                        return v.toString(16);
                    });
                }
                const copyHookMap = (hookMap) => {
                    const newHookMap = {};
                    for (const hookName in hookMap) {
                        const hook = hookMap[hookName];
                        switch (hook === null || hook === void 0 ? void 0 : hook.type) {
                            case 'SyncHook':
                                newHookMap[hookName] = createSyncHook();
                                break;
                            case 'SyncBailHook':
                                newHookMap[hookName] = createSyncBailHook();
                                break;
                            case 'SyncWaterfallHook':
                                newHookMap[hookName] = createSyncWaterfallHook();
                                break;
                            case 'AsyncParallelHook':
                                newHookMap[hookName] = createAsyncParallelHook();
                                break;
                            case 'AsyncSeriesHook':
                                newHookMap[hookName] = createAsyncSeriesHook();
                                break;
                            case 'AsyncSeriesBailHook':
                                newHookMap[hookName] = createAsyncSeriesBailHook();
                                break;
                            case 'AsyncSeriesWaterfallHook':
                                newHookMap[hookName] = createAsyncSeriesWaterfallHook();
                                break;
                            default:
                        }
                    }
                    return newHookMap;
                };

                function createPlugin(pluginHandlers, options = {}) {
                    return Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_OPTIONS), {
                        name: `plugin-id-${uuid()}`
                    }), options), {
                        handlers: pluginHandlers,
                        PLUGIN_SYMBOL
                    });
                }
                const createHookManager = (hookMap, hasContext = true) => {
                    const setupHook = createSyncHook();
                    const _hookMap = Object.assign(Object.assign({}, copyHookMap(hookMap)), {
                        setup: setupHook
                    });
                    let _plugins = [];
                    let _hookHandlers = {};
                    let _internalRunners = {};
                    let _context;
                    let _initiated = false;
                    const init = () => {
                        load();
                        const setupRunner = getRunner('setup');
                        setupRunner({
                            addHooks
                        });
                    };
                    const usePlugin = (...plugins) => {
                        if (_initiated) {
                            return;
                        }
                        _plugins.push(...plugins);
                    };
                    const load = () => {
                        verifyPlugins(_plugins);
                        _plugins = sortPlugins(_plugins);
                        _plugins.forEach(plugin => {
                            const handlers = plugin.handlers;
                            let hookName;
                            for (hookName in handlers) {
                                if (!_hookHandlers[hookName]) {
                                    _hookHandlers[hookName] = [];
                                }
                                _hookHandlers[hookName].push(handlers[hookName]);
                            }
                        });
                    };
                    const setContext = (context) => {
                        _context = context;
                    };
                    const hooks = _hookMap;
                    const clear = () => {
                        Object.values(_hookMap).forEach(cur => {
                            cur.clear();
                        });
                        _plugins = [];
                        _hookHandlers = {};
                        _internalRunners = {};
                        _initiated = false;
                    };
                    const addHooks = (extraHookMap) => {
                        const extraHookMapNew = copyHookMap(extraHookMap);
                        for (const hookName in extraHookMapNew) {
                            // connot override existed hooks
                            if (!_hookMap[hookName]) {
                                //@ts-ignore
                                _hookMap[hookName] = extraHookMapNew[hookName];
                                if (_internalRunners[hookName]) {
                                    delete _internalRunners[hookName];
                                }
                            } else {
                                console.log('has been added', hookName);
                            }
                        }
                    };
                    const getRunner = (hookName) => {
                        if (_internalRunners[hookName]) {
                            return _internalRunners[hookName];
                        }
                        const currentRunner = getSingerRunner(hookName);
                        _internalRunners[hookName] = currentRunner;
                        return currentRunner;
                    };
                    const getSingerRunner = (hookName) => {
                        let used = false;
                        const hook = _hookMap[hookName];
                        const handlers = _hookHandlers[hookName] || [];
                        if (!hook)
                            return () => {};
                        const isSetupHook = hookName === 'setup';
                        if (isSetupHook) {
                            return (util) => {
                                let setupDone = false;
                                if (!used) {
                                    hook.use(...handlers);
                                    // every time setup hook runs, set setupDone to true at the end
                                    // to make sure util methods cannot be used outside of the hook
                                    hook.use(() => {
                                        setupDone = true;
                                    });
                                    used = true;
                                }
                                const getDisposableFunctionProxy = (func) => new Proxy(func, {
                                    apply(target, thisArg, argArray) {
                                        if (setupDone) {
                                            return;
                                        }
                                        return target.apply(thisArg, argArray);
                                    }
                                });
                                const wrappedUtil = Object.assign({}, util);
                                for (let key in wrappedUtil) {
                                    if (typeof wrappedUtil[key] === 'function') {
                                        wrappedUtil[key] = getDisposableFunctionProxy(wrappedUtil[key]);
                                    }
                                }
                                // @ts-ignore
                                return hook.run(wrappedUtil);
                            };
                        }
                        return (...args) => {
                            if (!used) {
                                hook.use(...handlers);
                                used = true;
                            }
                            if (hasContext && !_context) {
                                throw new Error(`Context not set. Hook ${String(hookName)} running failed.`);
                            }
                            // @ts-ignore
                            return hook.run(...args, _context);
                        };
                    };
                    const runnerProxy = new Proxy({}, {
                        get(_, prop) {
                            if (!_initiated) {
                                init();
                                _initiated = true;
                            }
                            return getRunner(prop);
                        }
                    });
                    return {
                        createPlugin: createPlugin,
                        usePlugin,
                        runner: runnerProxy,
                        clear,
                        addHooks,
                        hooks,
                        setContext,
                        getPlugins: () => _plugins
                    };
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+hook@1.0.61/node_modules/@shuvi/hook/esm/index.js




                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+shared@1.0.61/node_modules/@shuvi/shared/esm/plugins.js

                const GROUP_BEFORE_USER = -1;
                const GROUP_USER = 0;
                const GROUP_AFTER_USER = 1;

                function createPluginCreator() {
                    const createOptions = (group, opt = {}) => {
                        const {
                            name,
                            before,
                            after,
                            conflict,
                            required
                        } = opt;
                        const result = {
                            group
                        };
                        // avoid undefined value because undefined value will override default value
                        if (name !== undefined) {
                            result.name = name;
                        }
                        if (before !== undefined) {
                            result.before = before;
                        }
                        if (after !== undefined) {
                            result.after = after;
                        }
                        if (conflict !== undefined) {
                            result.conflict = conflict;
                        }
                        if (required !== undefined) {
                            result.required = required;
                        }
                        return result;
                    };
                    return {
                        createPluginBefore(handler, options) {
                            return createPlugin(handler, createOptions(GROUP_BEFORE_USER, options));
                        },
                        createPlugin(handler, options) {
                            return createPlugin(handler, createOptions(GROUP_USER, options));
                        },
                        createPluginAfter(handler, options) {
                            return createPlugin(handler, createOptions(GROUP_AFTER_USER, options));
                        }
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/runtimPlugin.js
                var runtimPlugin_awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };


                const init = createAsyncParallelHook();
                const appContext = createAsyncSeriesHook();
                const appComponent = createAsyncSeriesWaterfallHook();
                const dispose = createAsyncParallelHook();
                const builtinRuntimePluginHooks = {
                    init,
                    appComponent,
                    appContext,
                    dispose
                };
                const getManager = () => createHookManager(builtinRuntimePluginHooks, false);
                const {
                    createPluginBefore: createRuntimePluginBefore,
                    createPlugin: createRuntimePlugin,
                    createPluginAfter: createRuntimePluginAfter
                } = createPluginCreator();
                const initPlugins = (pluginManager, plugins) => runtimPlugin_awaiter(void 0, void 0, void 0, function*() {
                    // clear plugin at development mode every time
                    if (false) {}
                    for (const [plugin, options] of plugins) {
                        let parsedOptions;
                        if (options) {
                            parsedOptions = JSON.parse(options);
                        }
                        if (isPluginInstance(plugin)) {
                            pluginManager.usePlugin(plugin);
                        } else {
                            pluginManager.usePlugin(plugin(parsedOptions));
                        }
                    }
                });


                /***/
            }),

        /***/
        "JAqJ":
            /***/
            ((__unused_webpack_module, exports) => {

                var __webpack_unused_export__;

                __webpack_unused_export__ = ({
                    value: true
                });
                exports.B8 = getRuntimeConfig;
                __webpack_unused_export__ = getPublicRuntimeConfig;
                exports.k0 = setPublicRuntimeConfig;
                __webpack_unused_export__ = getServerRuntimeConfig;
                __webpack_unused_export__ = setServerRuntimeConfig;
                const isServer = "object" === 'undefined';
                /**
                 * use global this to store runtime config, so we can safely bundle this module
                 * and get rid of the multiple-module-instance problem.
                 * */
                const KEY_SERVER_RUNTIME_CONFIG = Symbol.for('shuvi_server_runtime_config');
                const KEY_PUBLIC_RUNTIME_CONFIG = Symbol.for('shuvi_client_runtime_config');
                let publicRuntimeConfig;
                let serverRuntimeConfig;
                /**
                 * getRuntimeConfig function
                 *
                 * @returns serverRuntimeConfig
                 */
                function getRuntimeConfig() {
                    return Object.assign(Object.assign({}, (getServerRuntimeConfig() || {})), (getPublicRuntimeConfig() || {}));
                }

                function getPublicRuntimeConfig() {
                    if (isServer) {
                        return globalThis[KEY_PUBLIC_RUNTIME_CONFIG];
                    } else {
                        return publicRuntimeConfig;
                    }
                }

                function setPublicRuntimeConfig(config) {
                    if (isServer) {
                        globalThis[KEY_PUBLIC_RUNTIME_CONFIG] = config;
                    } else {
                        publicRuntimeConfig = config;
                    }
                }

                function getServerRuntimeConfig() {
                    if (isServer) {
                        return globalThis[KEY_SERVER_RUNTIME_CONFIG];
                    } else {
                        return serverRuntimeConfig;
                    }
                }

                function setServerRuntimeConfig(config) {
                    if (isServer) {
                        globalThis[KEY_SERVER_RUNTIME_CONFIG] = config;
                    } else {
                        serverRuntimeConfig = config;
                    }
                }


                /***/
            }),

        /***/
        "waGQ":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "F0": () => ( /* reexport */ Router),
                    "MA": () => ( /* reexport */ RouterView),
                    "Hb": () => ( /* reexport */ useCurrentRoute),
                    "oQ": () => ( /* reexport */ useHref),
                    "MZ": () => ( /* reexport */ useMatchedRoute),
                    "s0": () => ( /* reexport */ useNavigate),
                    "WU": () => ( /* reexport */ useResolvedPath),
                    "tv": () => ( /* reexport */ useRouter)
                });

                // UNUSED EXPORTS: ACTION_POP, ACTION_PUSH, ACTION_REPLACE, History, Link, MatchedRouteContext, MemoryHistory, MemoryRouter, RouteContext, RouterContext, createBrowserHistory, createHashHistory, createLocation, createMemoryHistory, createRouter, createRoutesFromArray, generatePath, joinPaths, matchPathname, matchRoutes, matchStringify, parseQuery, pathToString, rankRouteBranches, resolvePath, useBlocker, useInRouterContext, useIsomorphicEffect, useMatch, useParams

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/index.js + 20 modules
                var esm = __webpack_require__("IHx5");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/constants.js
                const __DEV__ = "production" !== 'production';

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/utils.js



                function useIsomorphicEffect(cb, deps) {
                    if (true) {
                        useLayoutEffect(cb, deps);
                    } else {}
                }
                const readOnly = __DEV__ ?
                    obj => Object.freeze(obj) :
                    obj => obj;

                function warning(cond, message) {
                    if (!cond) {
                        if (typeof console !== 'undefined')
                            console.warn(message);
                        try {
                            // Welcome to debugging React Router!
                            //
                            // This error is thrown as a convenience so you can more easily
                            // find the source for a warning that appears in the console by
                            // enabling "pause on exceptions" in your JavaScript debugger.
                            throw new Error(message);
                        } catch (e) {}
                    }
                }
                const alreadyWarned = {};

                function warningOnce(key, cond, message) {
                    if (!cond && !alreadyWarned[key]) {
                        alreadyWarned[key] = true;
                        warning(false, message);
                    }
                }
                /**
                 * Returns a path with params interpolated.
                 */
                function generatePath(path, params = {}) {
                    return matchStringify(path, params);
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
                var prop_types = __webpack_require__("BA5g");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+utils@1.0.61/node_modules/@shuvi/utils/lib/invariant.js
                var lib_invariant = __webpack_require__("6R7B");
                var invariant_default = /*#__PURE__*/ __webpack_require__.n(lib_invariant);
                // EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
                var shim = __webpack_require__("e4Bk");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/contexts.js



                const contexts_RouterContext = external_React_.createContext(null);
                if (__DEV__) {
                    contexts_RouterContext.displayName = 'Router';
                }
                const contexts_RouteContext = external_React_.createContext(null);
                if (__DEV__) {
                    contexts_RouterContext.displayName = 'Route';
                }
                const MatchedRouteContext = external_React_.createContext({
                    depth: 0,
                    params: readOnly({}),
                    pathname: '',
                    route: null
                });
                if (__DEV__) {
                    MatchedRouteContext.displayName = 'MatchedRoute';
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/hooks.js






                /**
                 *  is just point `router.current` object
                 */
                function useCurrentRoute() {
                    return (0, external_React_.useContext)(contexts_RouteContext);
                }
                /**
                 * Blocks all navigation attempts. This is useful for preventing the page from
                 * changing until some condition is met, like saving form data.
                 */
                function useBlocker(blocker, when = true) {
                    invariant(useInRouterContext(), `useBlocker() may be used only in the context of a <Router> component.`);
                    const {
                        router
                    } = useContext(RouterContext);
                    React.useEffect(() => {
                        if (!when)
                            return;
                        let unblock = router.block((tx) => {
                            let autoUnblockingTx = Object.assign(Object.assign({}, tx), {
                                retry() {
                                    // Automatically unblock the transition so it can play all the way
                                    // through before retrying it. TODO: Figure out how to re-enable
                                    // this block if the transition is cancelled for some reason.
                                    unblock();
                                    tx.retry();
                                }
                            });
                            blocker(autoUnblockingTx);
                        });
                        return unblock;
                    }, [router, blocker, when]);
                }
                /**
                 * Returns the full href for the given "to" value. This is useful for building
                 * custom links that are also accessible and preserve right-click behavior.
                 */
                function useHref(to) {
                    invariant_default()(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
                    const {
                        router
                    } = (0, external_React_.useContext)(contexts_RouterContext);
                    const path = useResolvedPath(to);
                    return router.resolve(path).href;
                }
                /**
                 * Returns true if this component is a descendant of a <Router>.
                 */
                function useInRouterContext() {
                    return (0, external_React_.useContext)(contexts_RouterContext) != null;
                }
                /**
                 * Returns true if the URL for the given "to" value matches the current URL.
                 * This is useful for components that need to know "active" state, e.g.
                 * <NavLink>.
                 */
                function useMatch(pattern) {
                    invariant(useInRouterContext(), `useMatch() may be used only in the context of a <Router> component.`);
                    const {
                        pathname
                    } = useCurrentRoute();
                    return matchPathname(pattern, pathname);
                }
                /**
                 * Returns an imperative method for changing the location. Used by <Link>s, but
                 * may also be used by other elements to change the location.
                 */
                function useNavigate() {
                    invariant_default()(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
                    const {
                        router
                    } = (0, external_React_.useContext)(contexts_RouterContext);
                    const {
                        pathname
                    } = (0, external_React_.useContext)(MatchedRouteContext);
                    const activeRef = external_React_.useRef(false);
                    external_React_.useEffect(() => {
                        activeRef.current = true;
                    });
                    let navigate = external_React_.useCallback((to, options = {}) => {
                        if (activeRef.current) {
                            if (typeof to === 'number') {
                                router.go(to);
                            } else {
                                let {
                                    path
                                } = router.resolve(to, pathname);
                                (!!options.replace ? router.replace : router.push).call(router, path, options.state);
                            }
                        } else {
                            warning(false, `You should call navigate() in a useEffect, not when ` +
                                `your component is first rendered.`);
                        }
                    }, [router, pathname]);
                    return navigate;
                }
                /**
                 * Returns an object of key/value pairs of the dynamic params from the current
                 * URL that were matched by the route path.
                 */
                function useParams() {
                    return useContext(RouteContext).params;
                }
                /**
                 * Resolves the pathname of the given `to` value against the current location.
                 */
                function useResolvedPath(to) {
                    const {
                        router
                    } = (0, external_React_.useContext)(contexts_RouterContext);
                    const {
                        pathname
                    } = (0, external_React_.useContext)(MatchedRouteContext);
                    return external_React_.useMemo(() => router.resolve(to, pathname).path, [to, pathname]);
                }
                /**
                 * Returns the current router object
                 * two parts, one is router behavior(browser history mode, hash history mode), another is router content
                 */
                function useRouter() {
                    invariant_default()(useInRouterContext(), `useRouter() may be used only in the context of a <Router> component.`);
                    return (0, external_React_.useContext)(contexts_RouterContext).router;
                }

                function useMatchedRoute() {
                    return (0, external_React_.useContext)(MatchedRouteContext);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/Router.js







                /**
                 * Provides location context for the rest of the app.
                 *
                 * Note: You usually won't render a <Router> directly. Instead, you'll render a
                 * router that is more specific to your environment such as a <BrowserRouter>
                 * in web browsers or a <StaticRouter> for server rendering.
                 */
                function Router({
                    children = null,
                    static: staticProp = false,
                    router
                }) {
                    invariant_default()(!useInRouterContext(), `You cannot render a <Router> inside another <Router>.` +
                        ` You never need more than one.`);
                    const contextVal = external_React_.useMemo(() => {
                        return {
                            static: staticProp,
                            router: router
                        };
                    }, [staticProp, router]);
                    const {
                        subscribe,
                        getSnapshot
                    } = external_React_.useMemo(() => ({
                        subscribe: (fn) => router.listen(fn),
                        getSnapshot: () => router.current
                    }), [router]);
                    const current = (0, shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
                    return (external_React_.createElement(contexts_RouterContext.Provider, {
                            value: contextVal
                        },
                        external_React_.createElement(contexts_RouteContext.Provider, {
                            children: children,
                            value: current
                        })));
                }
                if (__DEV__) {
                    Router.displayName = 'Router';
                    Router.propTypes = {
                        children: prop_types.node,
                        router: prop_types.object,
                        static: prop_types.bool
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/MemoryRouter.js





                /**
                 * a <Router> that stores all entries in memory.
                 */
                function MemoryRouter({
                    basename,
                    children,
                    routes,
                    initialEntries,
                    initialIndex
                }) {
                    let routerRef = external_React_.useRef();
                    if (routerRef.current == null) {
                        routerRef.current = (0, esm /* createRouter */ .p7)({
                            routes: routes || [],
                            history: (0, esm /* createMemoryHistory */ .PP)({
                                initialEntries,
                                initialIndex,
                                basename
                            })
                        }).init();
                    }
                    return external_React_.createElement(Router, {
                        children: children,
                        router: routerRef.current
                    });
                }
                if (__DEV__) {
                    MemoryRouter.displayName = 'MemoryRouter';
                    MemoryRouter.propTypes = {
                        children: prop_types.node,
                        routes: prop_types.arrayOf(prop_types.object),
                        initialEntries: prop_types.arrayOf(prop_types.oneOfType([
                            prop_types.string,
                            prop_types.shape({
                                pathname: prop_types.string,
                                search: prop_types.string,
                                hash: prop_types.string,
                                state: prop_types.object,
                                key: prop_types.string
                            })
                        ])),
                        initialIndex: prop_types.number
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/RouterView.js






                const defaultElement = external_React_.createElement(RouterView, null);

                function MatchedRoute({
                    match,
                    depth,
                    parentPathname,
                    parentParams
                }) {
                    const {
                        route,
                        params,
                        pathname
                    } = match;
                    const element = external_React_.useMemo(() => route.component ?
                        external_React_.createElement(route.component, route.props) :
                        defaultElement, [route.component, route.props, defaultElement]);
                    return (external_React_.createElement(MatchedRouteContext.Provider, {
                        children: element,
                        value: {
                            depth: depth + 1,
                            params: readOnly(Object.assign(Object.assign({}, parentParams), params)),
                            pathname: (0, esm /* joinPaths */ .RQ)([parentPathname, pathname]),
                            route
                        }
                    }));
                }

                function RouterView() {
                    let {
                        depth,
                        pathname: parentPathname,
                        params: parentParams
                    } = external_React_.useContext(MatchedRouteContext);
                    const {
                        matches
                    } = useCurrentRoute();
                    if (!matches.length) {
                        return null;
                    }
                    // Otherwise render an element.
                    const matched = matches[depth];
                    if (!matched) {
                        if (__DEV__) {
                            warningOnce(parentPathname, false, `Use <RouterView/> under path "${parentPathname}", but it has no children routes.` +
                                `\n\n` +
                                `Please remove the <RouterView/>.`);
                        }
                        return null;
                    }
                    return (external_React_.createElement(MatchedRoute, {
                        match: matched,
                        depth: depth,
                        parentPathname: parentPathname,
                        parentParams: parentParams
                    }));
                }
                if (__DEV__) {
                    RouterView.displayName = 'RouterView';
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/Link.js
                var __rest = (undefined && undefined.__rest) || function(s, e) {
                    var t = {};
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                            t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === "function")
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                                t[p[i]] = s[p[i]];
                        }
                    return t;
                };






                function isModifiedEvent(event) {
                    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
                }
                /**
                 * The public API for rendering a history-aware `<a>`.
                 * ```ts
                 * // jump to `/about`
                 * <Link to="/about">About</Link>
                 * // jump with query
                 * <Link to="/about?sort=name">About</Link>
                 * // with some state
                 * <Link to="/about" state={{fromDashboard: true}}>About</Link>
                 * // props `to` could be a object
                 * <Link to={{
                 *   pathname: "/about",
                 *   search: "?sort=name",
                 *   hash: "#the-hash",
                 * }}>About</Link>
                 * // props target '_self' | '_blank', default is '_self'
                 * <Link to="/about" target="_self">About</Link>
                 * // overrides default redirect mode by `replace`
                 * <Link to="/about" replace>About</Link>
                 * // if `onClick` function, run it first
                 * <Link to="/about" onClick={fn}>About</Link>
                 * // other props will be delivered to `<a>`
                 * <Link to="/about" a='a' b='b'>About</Link> => <{...rest} a>
                 * ```
                 */
                const BaseLink = external_React_.forwardRef(function BaseLinkWithRef(_a, ref) {
                    var {
                        onClick,
                        replace: replaceProp = false,
                        state,
                        target,
                        to
                    } = _a, rest = __rest(_a, ["onClick", "replace", "state", "target", "to"]);
                    let href = useHref(to);
                    let navigate = useNavigate();
                    const location = useCurrentRoute();
                    let path = useResolvedPath(to);

                    function handleClick(event) {
                        if (onClick)
                            onClick(event);
                        if (!event.defaultPrevented && // onClick prevented default
                            event.button === 0 && // Ignore everything but left clicks
                            (!target || target === '_self') && // Let browser handle "target=_blank" etc.
                            !isModifiedEvent(event) // Ignore clicks with modifier keys
                        ) {
                            event.preventDefault();
                            // If the URL hasn't changed, a regular <a> will do a replace instead of
                            // a push, so do the same here.
                            let replace = !!replaceProp ||
                                (location && (0, esm /* pathToString */ .v)(location)) === (0, esm /* pathToString */ .v)(path);
                            navigate(to, {
                                replace,
                                state
                            });
                        }
                    }
                    return (
                        // @ts-ignore
                        external_React_.createElement("a", Object.assign({}, rest, {
                            href: href,
                            onClick: handleClick,
                            ref: ref,
                            target: target
                        })));
                });
                /**
                 * @NOTE Improve Page Stability by Handling Fatal Crashes 致命錯誤降級處理
                 *
                 * Development Mode:
                 *   On fatal errors, immediately show the "Internal Application Error" page.
                 *
                 * Production Mode: Downgrade fatal error
                 *   1. console.error without causing an immediate page crash.
                 *   2. Only after user clicks <Link>, page re-render
                 *      and display the "Internal Application Error" page.
                 *
                 * @issue https://github.com/shuvijs/shuvi/pull/596
                 */
                const Link = external_React_.forwardRef(function LinkWithRef(props, ref) {
                    const invalidPropTo = typeof props.to === 'undefined';
                    if (invalidPropTo) {
                        console.error(`The prop 'to' is required in '<Link>', but its value is 'undefined'`, JSON.stringify({
                            props
                        }));
                    }
                    const [downgradeError, setDowngradeError] = external_React_.useState("production" === 'production');
                    if (downgradeError && invalidPropTo) {
                        return (external_React_.createElement("a", Object.assign({}, props, {
                            onClick: e => {
                                e.preventDefault();
                                setDowngradeError(false);
                            },
                            ref: ref
                        })));
                    }
                    return external_React_.createElement(BaseLink, Object.assign({}, props, {
                        ref: ref
                    }));
                });
                if (__DEV__) {
                    Link.displayName = 'Link';
                    Link.propTypes = {
                        replace: prop_types.bool,
                        state: prop_types.object,
                        target: prop_types.string,
                        // @ts-ignore proptypes's bug?
                        to: prop_types.oneOfType([
                            prop_types.string,
                            prop_types.shape({
                                pathname: prop_types.string,
                                search: prop_types.string,
                                hash: prop_types.string
                            })
                        ]).isRequired
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/index.js











                /***/
            }),

        /***/
        "IHx5":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "lX": () => ( /* reexport */ createBrowserHistory),
                    "q_": () => ( /* reexport */ createHashHistory),
                    "PP": () => ( /* reexport */ createMemoryHistory),
                    "p7": () => ( /* reexport */ createRouter),
                    "RQ": () => ( /* reexport */ joinPaths),
                    "$O": () => ( /* reexport */ matchPathname),
                    "v": () => ( /* reexport */ pathToString)
                });

                // UNUSED EXPORTS: ACTION_POP, ACTION_PUSH, ACTION_REPLACE, History, MemoryHistory, createLocation, createRoutesFromArray, matchRoutes, matchStringify, parseQuery, rankRouteBranches, resolvePath

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/pathParserRanker.js
                // default pattern for a param: non greedy everything but /
                const BASE_PARAM_PATTERN = '[^/]+?';
                const BASE_PATH_PARSER_OPTIONS = {
                    sensitive: false,
                    strict: false,
                    start: true,
                    end: true
                };
                const CATCHALL_TOKEN = {
                    type: 3 /* TokenType.CatchAll */ ,
                    value: '*',
                    regexp: '(?:/((?:.*?)(?:/(?:.*?))*))?$'
                };
                const CATCHALL_TOKEN_STRICT = Object.assign(Object.assign({}, CATCHALL_TOKEN), {
                    regexp: '(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?$'
                });
                // Special Regex characters that must be escaped in static tokens
                const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
                /**
                 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
                 *
                 * @param segments - array of segments returned by tokenizePath
                 * @param extraOptions - optional options for the regexp
                 * @returns a PathParser
                 */
                function pathParserRanker_tokensToParser(segments, extraOptions, branchInfo) {
                    var _a;
                    const options = Object.assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
                    /**
                     * end with *, eg: /* /a* /a/*
                     */
                    let catchAllToken = CATCHALL_TOKEN;
                    if (options.strict) {
                        catchAllToken = CATCHALL_TOKEN_STRICT;
                    }
                    let hasCatchall = false;
                    const lastTokenGroup = segments[segments.length - 1];
                    if (lastTokenGroup) {
                        const lastToken = lastTokenGroup[lastTokenGroup.length - 1];
                        if (lastToken) {
                            if (lastToken.type === 0 /* TokenType.Static */ ) {
                                if (lastToken.value === catchAllToken.value) {
                                    hasCatchall = true;
                                    lastTokenGroup.pop();
                                    if (lastTokenGroup.length === 0) {
                                        segments.pop();
                                    }
                                    segments.push([catchAllToken]);
                                } else if (lastToken.value.endsWith(catchAllToken.value)) {
                                    hasCatchall = true;
                                    console.warn(`Route path "${lastToken.value}" will be treated as if it were ` +
                                        `"${lastToken.value.replace(/\*$/, '/*')}" because the \`*\` character must ` +
                                        `always follow a \`/\` in the pattern. To get rid of this warning, ` +
                                        `please change the route path to "${lastToken.value.replace(/\*$/, '/*')}".`);
                                    lastToken.value = lastToken.value.slice(0, -1);
                                    segments.push([catchAllToken]);
                                }
                            }
                        }
                    }
                    // the amount of scores is the same as the length of segments except for the root segment "/"
                    let score = [];
                    // the regexp as a string
                    let pattern = options.start ? '^' : '';
                    // extracted keys
                    const keys = [];
                    for (const segment of segments) {
                        // the root segment needs special treatment
                        const segmentScores = segment.length ? [] : [90 /* PathScore.Root */ ];
                        // allow trailing slash
                        if (options.strict && !segment.length)
                            pattern += '/';
                        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
                            const token = segment[tokenIndex];
                            // resets the score if we are inside a sub segment /:a-other-:b
                            let subSegmentScore = 40 /* PathScore.Segment */ +
                                (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */ : 0);
                            if (token.type === 0 /* TokenType.Static */ ) {
                                // prepend the slash if we are starting a new segment
                                if (!tokenIndex)
                                    pattern += '/';
                                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                                subSegmentScore += 40 /* PathScore.Static */ ;
                            } else if (token.type === 1 /* TokenType.Param */ ) {
                                const {
                                    value,
                                    repeatable,
                                    optional,
                                    regexp
                                } = token;
                                keys.push({
                                    name: value,
                                    repeatable,
                                    optional
                                });
                                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                                // the user provided a custom regexp /:id(\\d+)
                                if (re !== BASE_PARAM_PATTERN) {
                                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */ ;
                                    // make sure the regexp is valid before using it
                                    try {
                                        new RegExp(`(${re})`);
                                    } catch (err) {
                                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                                            err.message);
                                    }
                                }
                                // when we repeat we must take care of the repeating leading slash
                                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                                // prepend the slash if we are starting a new segment
                                if (!tokenIndex)
                                    subPattern =
                                    // avoid an optional / if there are more segments e.g. /:p?-static
                                    // or /:p?-:p2
                                    optional && segment.length < 2 ?
                                    `(?:/${subPattern})` :
                                    '/' + subPattern;
                                if (optional)
                                    subPattern += '?';
                                pattern += subPattern;
                                if (!options.end)
                                    pattern += '(?=/|$)';
                                subSegmentScore += 20 /* PathScore.Dynamic */ ;
                                if (optional)
                                    subSegmentScore += -8 /* PathScore.BonusOptional */ ;
                                if (repeatable)
                                    subSegmentScore += -20 /* PathScore.BonusRepeatable */ ;
                                if (re === '.*')
                                    subSegmentScore += -50 /* PathScore.BonusWildcard */ ;
                            } else if (token.type === 3 /* TokenType.CatchAll */ ) {
                                const {
                                    value,
                                    regexp
                                } = token;
                                keys.push({
                                    name: value,
                                    repeatable: false,
                                    optional: false
                                });
                                pattern += regexp;
                                subSegmentScore += 20 /* PathScore.Dynamic */ ;
                                subSegmentScore += -41 /* PathScore.BonusCallAll */ ;
                            }
                            segmentScores.push(subSegmentScore);
                        }
                        // an empty array like /home/ -> [[{home}], []]
                        // if (!segment.length) {
                        //   pattern += '/'
                        // }
                        score.push(segmentScores);
                    }
                    // only apply the strict bonus to the last score
                    if (options.strict && options.end) {
                        const i = score.length - 1;
                        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */ ;
                    }
                    if (hasCatchall) {
                        // do nothing
                    } else {
                        // TODO: dev only warn double trailing slash
                        if (!options.strict)
                            pattern += '/*?';
                        if (options.end)
                            pattern += '$';
                        // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
                        else if (options.strict)
                            pattern += '(?:/*|$)';
                    }
                    const re = new RegExp(pattern, options.sensitive ? '' : 'i');

                    function parse(path) {
                        const match = path.match(re);
                        const params = {};
                        if (!match)
                            return null;
                        for (let i = 1; i < match.length; i++) {
                            const value = match[i] || '';
                            const key = keys[i - 1];
                            if (key.name === catchAllToken.value) {
                                params[key.name] = value;
                                break;
                            }
                            if (key.repeatable) {
                                params[key.name] = value ? value.split('/') : [];
                            } else {
                                params[key.name] = value;
                            }
                        }
                        return {
                            match: match[0],
                            params
                        };
                    }

                    function stringify(params) {
                        let path = '';
                        // for optional parameters to allow to be empty
                        let avoidDuplicatedSlash = false;
                        for (const segment of segments) {
                            if (!avoidDuplicatedSlash || !path.endsWith('/'))
                                path += '/';
                            avoidDuplicatedSlash = false;
                            for (const token of segment) {
                                if (token.type === 0 /* TokenType.Static */ ) {
                                    path += token.value;
                                } else if (token.type === 1 /* TokenType.Param */ ) {
                                    const {
                                        value,
                                        repeatable,
                                        optional
                                    } = token;
                                    const param = params[value];
                                    if (Array.isArray(param) && !repeatable)
                                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                                    if (param === undefined && !optional) {
                                        throw new Error(`Missing required param "${value}"`);
                                    }
                                    const text = Array.isArray(param) ?
                                        param.join('/') :
                                        param || '';
                                    if (!text && optional) {
                                        // if we have more than one optional param like /:a?-static we
                                        // don't need to care about the optional param
                                        if (segment.length < 2) {
                                            // remove the last slash as we could be at the end
                                            if (path.endsWith('/'))
                                                path = path.slice(0, -1);
                                            // do not append a slash on the next iteration
                                            else
                                                avoidDuplicatedSlash = true;
                                        }
                                    }
                                    path += text;
                                }
                            }
                        }
                        return path;
                    }
                    /**
                     * To make sure the score of pageBranch is always higher priority
                     * than the layoutRoute.
                     * We append a bonus score if the last route is an empty path.
                     */
                    if (branchInfo === null || branchInfo === void 0 ? void 0 : branchInfo.routes) {
                        const lastRoutePath = (_a = branchInfo.routes[branchInfo.routes.length - 1]) === null || _a === void 0 ? void 0 : _a.path;
                        if (lastRoutePath === '') {
                            score.push([0.1 /* PathScore.BonusEmptyStringPath */ ]);
                        }
                    }
                    return {
                        re,
                        score,
                        keys,
                        parse,
                        stringify
                    };
                }
                /**
                 * Compares an array of numbers as used in PathParser.score and returns a
                 * number. This function can be used to `sort` an array
                 * @param a - first array of numbers
                 * @param b - second array of numbers
                 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
                 * should be sorted first
                 */
                function compareScoreArray(a, b) {
                    let i = 0;
                    while (i < a.length && i < b.length) {
                        const diff = b[i] - a[i];
                        // only keep going if diff === 0
                        if (diff)
                            return diff;
                        i++;
                    }
                    // if the last subsegment was Static, the shorter segments should be sorted first
                    // otherwise sort the longest segment first
                    if (a.length < b.length) {
                        return a.length === 1 && a[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ?
                            -1 :
                            1;
                    } else if (a.length > b.length) {
                        return b.length === 1 && b[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ?
                            1 :
                            -1;
                    }
                    return 0;
                }

                function comparePathParserScore(a, b) {
                    let i = 0;
                    const aScore = a.score;
                    const bScore = b.score;
                    while (i < aScore.length && i < bScore.length) {
                        const comp = compareScoreArray(aScore[i], bScore[i]);
                        // do not return if both are equal
                        if (comp)
                            return comp;
                        i++;
                    }
                    // if a and b share the same score entries but b has more, sort b first
                    const lengthDiff = bScore.length - aScore.length;
                    if (lengthDiff)
                        return lengthDiff;
                    // this is the ternary version
                    // return aScore.length < bScore.length
                    //   ? 1
                    //   : aScore.length > bScore.length
                    //   ? -1
                    //   : 0
                    //
                    return a.index - b.index;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/pathTokenizer.js
                const ROOT_TOKEN = {
                    type: 0 /* TokenType.Static */ ,
                    value: ''
                };
                const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
                // After some profiling, the cache seems to be unnecessary because tokenizePath
                // (the slowest part of adding a route) is very fast
                // const tokenCache = new Map<string, Token[][]>()
                function pathTokenizer_tokenizePath(path) {
                    if (!path)
                        return [
                            []
                        ];
                    if (path === '/')
                        return [
                            [ROOT_TOKEN]
                        ];
                    if (!path.startsWith('/')) {
                        path = path.replace(/^\/*/, '/'); // Make sure it has a leading /
                    }
                    // if (tokenCache.has(path)) return tokenCache.get(path)!
                    function crash(message) {
                        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
                    }
                    let state = 0 /* TokenizerState.Static */ ;
                    let previousState = state;
                    const tokens = [];
                    // the segment will always be valid because we get into the initial state
                    // with the leading /
                    let segment;

                    function finalizeSegment() {
                        if (segment)
                            tokens.push(segment);
                        segment = [];
                    }
                    // index on the path
                    let i = 0;
                    // char at index
                    let char;
                    // buffer of the value read
                    let buffer = '';
                    // custom regexp for a param
                    let customRe = '';

                    function consumeBuffer() {
                        if (!buffer)
                            return;
                        if (state === 0 /* TokenizerState.Static */ ) {
                            segment.push({
                                type: 0 /* TokenType.Static */ ,
                                value: buffer
                            });
                        } else if (state === 1 /* TokenizerState.Param */ ||
                            state === 2 /* TokenizerState.ParamRegExp */ ||
                            state === 3 /* TokenizerState.ParamRegExpEnd */ ) {
                            if (segment.length > 1 && (char === '*' || char === '+'))
                                crash(`A repeatable param (${buffer}) must be alone in its segment. `);
                            segment.push({
                                type: 1 /* TokenType.Param */ ,
                                value: buffer,
                                regexp: customRe,
                                repeatable: char === '*' || char === '+',
                                optional: char === '*' || char === '?'
                            });
                        } else {
                            crash('Invalid state to consume buffer');
                        }
                        buffer = '';
                    }

                    function addCharToBuffer() {
                        buffer += char;
                    }
                    while (i < path.length) {
                        char = path[i++];
                        if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */ ) {
                            previousState = state;
                            state = 4 /* TokenizerState.EscapeNext */ ;
                            continue;
                        }
                        switch (state) {
                            case 0 /* TokenizerState.Static */ :
                                if (char === '/') {
                                    if (buffer) {
                                        consumeBuffer();
                                    }
                                    finalizeSegment();
                                } else if (char === ':') {
                                    consumeBuffer();
                                    state = 1 /* TokenizerState.Param */ ;
                                } else {
                                    addCharToBuffer();
                                }
                                break;
                            case 4 /* TokenizerState.EscapeNext */ :
                                addCharToBuffer();
                                state = previousState;
                                break;
                            case 1 /* TokenizerState.Param */ :
                                if (char === '(') {
                                    state = 2 /* TokenizerState.ParamRegExp */ ;
                                } else if (VALID_PARAM_RE.test(char)) {
                                    addCharToBuffer();
                                } else {
                                    consumeBuffer();
                                    state = 0 /* TokenizerState.Static */ ;
                                    // go back one character if we were not modifying
                                    if (char !== '*' && char !== '?' && char !== '+')
                                        i--;
                                }
                                break;
                            case 2 /* TokenizerState.ParamRegExp */ :
                                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                                // it already works by escaping the closing )
                                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                                // is this really something people need since you can also write
                                // /prefix_:p()_suffix
                                if (char === ')') {
                                    // handle the escaped )
                                    if (customRe[customRe.length - 1] == '\\')
                                        customRe = customRe.slice(0, -1) + char;
                                    else
                                        state = 3 /* TokenizerState.ParamRegExpEnd */ ;
                                } else {
                                    customRe += char;
                                }
                                break;
                            case 3 /* TokenizerState.ParamRegExpEnd */ :
                                // same as finalizing a param
                                consumeBuffer();
                                state = 0 /* TokenizerState.Static */ ;
                                // go back one character if we were not modifying
                                if (char !== '*' && char !== '?' && char !== '+')
                                    i--;
                                customRe = '';
                                break;
                            default:
                                crash('Unknown state');
                                break;
                        }
                    }
                    if (state === 2 /* TokenizerState.ParamRegExp */ )
                        crash(`Unfinished custom RegExp for param "${buffer}"`);
                    consumeBuffer();
                    finalizeSegment();
                    // tokenCache.set(path, tokens)
                    return tokens;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/matchPathname.js


                function safelyDecodeURIComponent(value, paramName, optional) {
                    try {
                        if (Array.isArray(value)) {
                            return value.map(item => {
                                return decodeURIComponent(item.replace(/\+/g, ' '));
                            });
                        }
                        return decodeURIComponent(value.replace(/\+/g, ' '));
                    } catch (error) {
                        if (!optional) {
                            console.warn(`The value for the URL param "${paramName}" will not be decoded because` +
                                ` the string "${value}" is a malformed URL segment. This is probably` +
                                ` due to a bad percent encoding (${error}).`);
                        }
                        return value;
                    }
                }
                /**
                 * match pathname, online link https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJnMCo0SmCHGYBdyBsATSBUQBsAPABAwxsAHeGVJwuLlARA..#
                 * @param pattern
                 * @param pathname
                 */
                function matchPathname(pattern, pathname) {
                    if (typeof pattern === 'string') {
                        pattern = {
                            path: pattern
                        };
                    }
                    const {
                        path,
                        caseSensitive = false,
                        end = true
                    } = pattern;
                    const pathParser = pathParserRanker_tokensToParser(pathTokenizer_tokenizePath(path), {
                        strict: false,
                        end,
                        sensitive: caseSensitive
                    });
                    const matchResult = pathParser.parse(pathname);
                    if (!matchResult)
                        return null;
                    const {
                        keys = []
                    } = pathParser;
                    const {
                        match,
                        params
                    } = matchResult;
                    const safelyDecodedParams = keys.reduce((memo, key, index) => {
                        const keyName = key.name;
                        memo[keyName] = safelyDecodeURIComponent(params[keyName], String(keyName), key.optional);
                        return memo;
                    }, {});
                    return {
                        path,
                        pathname: match,
                        params: safelyDecodedParams
                    };
                }
                /**
                 * stringify path to string by params and options
                 * @param path
                 * @param params
                 * @param options
                 */
                function matchStringify(path, params, options) {
                    const pathParser = tokensToParser(tokenizePath(path), options);
                    return pathParser.stringify(params);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/misc.js
                const isDev = "production" === 'development';

                function createEvents() {
                    let handlers = [];
                    return {
                        get length() {
                            return handlers.length;
                        },
                        toArray() {
                            return handlers;
                        },
                        push(fn) {
                            handlers.push(fn);
                            return function() {
                                handlers = handlers.filter(handler => handler !== fn);
                            };
                        },
                        call(...arg) {
                            handlers.forEach(fn => fn && fn(...arg));
                        }
                    };
                }
                const readOnly = isDev ?
                    obj => Object.freeze(obj) :
                    obj => obj;

                function warning(cond, message) {
                    if (!cond) {
                        // eslint-disable-next-line no-console
                        if (typeof console !== 'undefined')
                            console.warn(message);
                        try {
                            // Welcome to debugging history!
                            //
                            // This error is thrown as a convenience so you can more easily
                            // find the source for a warning that appears in the console by
                            // enabling "pause on exceptions" in your JavaScript debugger.
                            throw new Error(message);
                            // eslint-disable-next-line no-empty
                        } catch (e) {}
                    }
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/query-string@6.13.8/node_modules/query-string/index.js
                var query_string = __webpack_require__("/a8Q");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/path.js

                const trimTrailingSlashes = (path) => path.replace(/\/+$/, '');
                const normalizeSlashes = (path) => path.replace(/\/\/+/g, '/');
                const joinPaths = (paths) => normalizeSlashes(paths.join('/'));
                const splitPath = (path) => normalizeSlashes(path).split('/');

                function normalizeBase(base) {
                    if (!base) {
                        base = '/';
                    }
                    // make sure there's the starting slash
                    if (base.charAt(0) !== '/') {
                        base = '/' + base;
                    }
                    // remove trailing slash
                    return base.replace(/\/$/, '');
                }

                function parseQuery(queryStr) {
                    return query_string.parse(queryStr);
                }

                function pathToString({
                    pathname = '/',
                    search = '',
                    hash = '',
                    query = {}
                }, basename) {
                    if (!search) {
                        const queryString = query_string.stringify(query);
                        search = queryString ? `?${queryString}` : '';
                    }
                    const pathString = pathname + search + hash;
                    if (basename) {
                        return joinPaths([basename, pathString]);
                    }
                    return pathString;
                }

                function resolvePathname(toPathname, fromPathname) {
                    let segments = splitPath(trimTrailingSlashes(fromPathname));
                    let relativeSegments = splitPath(toPathname);
                    relativeSegments.forEach(segment => {
                        if (segment === '..') {
                            // Keep the root "" segment so the pathname starts at /
                            if (segments.length > 1)
                                segments.pop();
                        } else if (segment !== '.') {
                            segments.push(segment);
                        }
                    });
                    return segments.length > 1 ? joinPaths(segments) : '/';
                }
                /**
                 * Parses a string URL path into its separate pathname, search, and hash components.
                 */
                function resolvePath(to, fromPathname = '/') {
                    let parsedPath = {
                        pathname: '',
                        search: '',
                        hash: '',
                        query: {}
                    };
                    if (typeof to === 'string') {
                        if (to) {
                            let hashIndex = to.indexOf('#');
                            if (hashIndex >= 0) {
                                parsedPath.hash = to.substr(hashIndex);
                                to = to.substr(0, hashIndex);
                            }
                            let searchIndex = to.indexOf('?');
                            if (searchIndex >= 0) {
                                parsedPath.search = to.substr(searchIndex);
                                parsedPath.query = parseQuery(parsedPath.search);
                                to = to.substr(0, searchIndex);
                            }
                            if (to) {
                                parsedPath.pathname = to;
                            }
                        }
                    } else {
                        const path = to;
                        ['pathname', 'search', 'hash', 'query'].forEach(key => {
                            const val = path[key];
                            if (val != null) {
                                // @ts-ignore
                                parsedPath[key] = val;
                            }
                        });
                        if (parsedPath.search) {
                            parsedPath.query = parseQuery(parsedPath.search);
                        } else {
                            parsedPath.search = query_string.stringify(parsedPath.query);
                        }
                    }
                    const toPathname = parsedPath.pathname;
                    parsedPath.pathname = toPathname ?
                        resolvePathname(toPathname, toPathname.startsWith('/') ? '/' : fromPathname) :
                        fromPathname;
                    return parsedPath;
                }
                /**
                 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
                 * If the base does not match at the beginning, null will be returned.
                 *
                 * @param pathname - location.pathname
                 * @param base - base to strip off
                 */
                function stripBase(pathname, base) {
                    if (!base || base === '/')
                        return pathname;
                    // no base or base is not found at the beginning
                    if (!pathname.toLowerCase().startsWith(base.toLowerCase())) {
                        return null;
                    }
                    return pathname.slice(base.length) || '/';
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/history.js


                const BeforeUnloadEventType = 'beforeunload';

                function promptBeforeUnload(event) {
                    // Cancel the event.
                    event.preventDefault();
                    // Chrome (and legacy IE) requires returnValue to be set.
                    event.returnValue = '';
                }

                function createKey() {
                    return Math.random().toString(36).substr(2, 8);
                }

                function createLocation(to, {
                    basename,
                    state = null,
                    key,
                    redirectedFrom
                } = {}) {
                    const resolved = resolvePath(to);
                    const pathnameWithoutBase = stripBase(resolved.pathname, basename || '/');
                    if (pathnameWithoutBase) {
                        resolved.pathname = pathnameWithoutBase;
                    }
                    const notMatchBasename = Boolean(basename) && !pathnameWithoutBase;
                    return readOnly(Object.assign(Object.assign({}, resolved), {
                        redirectedFrom,
                        notMatchBasename,
                        state,
                        key: key || createKey()
                    }));
                }

                function pushState(state, url, {
                    replace = false
                } = {}) {
                    // try...catch the pushState call to get around Safari
                    // DOM Exception 18 where it limits to 100 pushState calls
                    const history = window.history;
                    try {
                        if (replace) {
                            history.replaceState(state, '', url);
                        } else {
                            history.pushState(state, '', url);
                        }
                    } catch (e) {
                        // @ts-ignore url is undefined
                        window.location[replace ? 'replace' : 'assign'](url);
                    }
                }

                function replaceState(state, url) {
                    pushState(state, url, {
                        replace: true
                    });
                }

                function addBlocker(blockers, blocker) {
                    let unblock = blockers.push(blocker);
                    if (blockers.length === 1) {
                        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
                    }
                    return function() {
                        unblock();
                        // Remove the beforeunload listener so the document may
                        // still be salvageable in the pagehide event.
                        // See https://html.spec.whatwg.org/#unloading-documents
                        if (!blockers.length) {
                            window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
                        }
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/index.js




                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/matchRoutes.js




                function matchRouteBranch(branch, pathname) {
                    let routes = branch[1];
                    let matchedPathname = '/';
                    let matchedParams = {};
                    let matches = [];
                    for (let i = 0; i < routes.length; ++i) {
                        let route = routes[i];
                        let remainingPathname = matchedPathname === '/' ?
                            pathname :
                            pathname.slice(matchedPathname.length) || '/';
                        let routeMatch = matchPathname({
                            path: route.path,
                            caseSensitive: route.caseSensitive,
                            end: i === routes.length - 1
                        }, remainingPathname);
                        if (!routeMatch)
                            return null;
                        matchedPathname = joinPaths([matchedPathname, routeMatch.pathname]);
                        matchedParams = Object.assign(Object.assign({}, matchedParams), routeMatch.params);
                        matches.push({
                            route,
                            pathname: matchedPathname,
                            params: Object.freeze(matchedParams)
                        });
                    }
                    return matches;
                }

                function rankRouteBranches(branches) {
                    if (branches.length <= 1) {
                        return branches;
                    }
                    const normalizedPaths = branches.map((branch, index) => {
                        const [path, routes] = branch;
                        return Object.assign(Object.assign({}, pathParserRanker_tokensToParser(pathTokenizer_tokenizePath(path), undefined, {
                            routes
                        })), {
                            path,
                            index
                        });
                    });
                    normalizedPaths.sort((a, b) => comparePathParserScore(a, b));
                    const newBranches = [];
                    normalizedPaths.forEach((branch, newBranchesIndex) => {
                        const {
                            index
                        } = branch;
                        newBranches[newBranchesIndex] = branches[index];
                    });
                    return newBranches;
                }

                function flattenRoutes(routes, branches = [], parentPath = '', parentRoutes = [], parentIndexes = []) {
                    routes.forEach((route, index) => {
                        let path;
                        if (route.path === '') {
                            /**
                             * An empty path is allowed, don't append a slash.
                             */
                            path = parentPath;
                        } else {
                            path = joinPaths([parentPath, route.path]);
                        }
                        let routes = parentRoutes.concat(route);
                        let indexes = parentIndexes.concat(index);
                        // Add the children before adding this route to the array so we traverse the
                        // route tree depth-first and child routes appear before their parents in
                        // the "flattened" version.
                        if (route.children) {
                            flattenRoutes(route.children, branches, path, routes, indexes);
                        }
                        branches.push([path, routes, indexes]);
                    });
                    return branches;
                }

                function matchRoutes(routes, location, basename = '') {
                    if (typeof location === 'string') {
                        location = resolvePath(location);
                    }
                    let pathname = location.pathname || '/';
                    if (basename) {
                        const normalizedBasename = normalizeBase(basename);
                        const pathnameWithoutBase = stripBase(pathname, normalizedBasename);
                        if (pathnameWithoutBase) {
                            pathname = pathnameWithoutBase;
                        } else {
                            return null;
                        }
                    }
                    let branches = flattenRoutes(routes);
                    branches = rankRouteBranches(branches);
                    let matches = null;
                    for (let i = 0; matches == null && i < branches.length; ++i) {
                        // TODO: Match on search, state too?
                        matches = matchRouteBranch(branches[i], pathname);
                    }
                    return matches;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/history/base.js

                /**
                 * A POP indicates a change to an arbitrary index in the history stack, such
                 * as a back or forward navigation. It does not describe the direction of the
                 * navigation, only that the current index changed.
                 *
                 * Note: This is the default action for newly created history objects.
                 */
                const ACTION_POP = 'POP';
                /**
                 * A Push indicates a new entry being added to the history stack, such as when
                 * a link is clicked and a new page loads. When this happens, all subsequent
                 * entries in the stack are lost.
                 */
                const ACTION_PUSH = 'PUSH';
                /**
                 * A REPLACE indicates the entry at the current index in the history stack
                 * being replaced by a new one.
                 */
                const ACTION_REPLACE = 'REPLACE';
                class BaseHistory {
                    constructor({
                        basename = ''
                    } = {}) {
                        this.action = ACTION_POP;
                        this.location = createLocation('/');
                        this.doTransition = () => void 0;
                        this._index = 0;
                        this._blockers = createEvents();
                        this.basename = normalizeBase(basename);
                    }
                    back() {
                        this.go(-1);
                    }
                    forward() {
                        this.go(1);
                    }
                    resolve(to, from) {
                        const toPath = resolvePath(to, from);
                        return {
                            path: toPath,
                            href: pathToString(toPath, this.basename)
                        };
                    }
                    transitionTo(to, {
                        onTransition,
                        onAbort,
                        action = ACTION_PUSH,
                        state = null,
                        redirectedFrom,
                        skipGuards
                    }) {
                        const {
                            path
                        } = this.resolve(to, this.location.pathname);
                        const nextLocation = createLocation(path, {
                            state,
                            redirectedFrom
                        });
                        // check transition
                        if (this._blockers.length) {
                            this._blockers.call({
                                action,
                                location: nextLocation,
                                retry: () => {
                                    this.transitionTo(to, {
                                        onTransition,
                                        onAbort,
                                        action,
                                        state,
                                        redirectedFrom,
                                        skipGuards
                                    });
                                }
                            });
                            return;
                        }
                        this.doTransition(to, () => {
                            onTransition({
                                location: nextLocation,
                                state: {
                                    usr: nextLocation.state,
                                    key: nextLocation.key,
                                    idx: this._index + 1
                                },
                                url: this.resolve(nextLocation).href
                            });
                            this._updateState(action);
                        }, onAbort, skipGuards, action === ACTION_REPLACE, redirectedFrom);
                    }
                    _updateState(nextAction) {
                        // update state
                        this.action = nextAction;
                        [this._index, this.location] = this.getIndexAndLocation();
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/types/history.js



                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/types/index.js



                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/history/memory.js


                function clamp(n, lowerBound, upperBound) {
                    return Math.min(Math.max(n, lowerBound), upperBound);
                }
                class MemoryHistory extends BaseHistory {
                    constructor({
                        initialEntries = ['/'],
                        initialIndex,
                        basename = ''
                    } = {}) {
                        super({
                            basename
                        });
                        this._entries = [];
                        this._entries = initialEntries.map(entry => {
                            let location = createLocation(Object.assign({
                                pathname: '/',
                                search: '',
                                hash: ''
                            }, (typeof entry === 'string' ? resolvePath(entry) : entry)), {
                                basename: this.basename
                            });
                            warning(location.pathname.charAt(0) === '/', `Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: ${JSON.stringify(entry)})`);
                            return location;
                        });
                        this._index = clamp(initialIndex == null ? this._entries.length - 1 : initialIndex, 0, this._entries.length - 1);
                        this.location = this._entries[this._index];
                    }
                    setup() {
                        // do nothing
                    }
                    push(to, {
                        state,
                        redirectedFrom,
                        skipGuards
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            redirectedFrom,
                            skipGuards,
                            onTransition: ({
                                location
                            }) => {
                                this._index += 1;
                                this._entries.splice(this._index, this._entries.length, location);
                            }
                        });
                    }
                    replace(to, {
                        state,
                        redirectedFrom,
                        skipGuards
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            action: ACTION_REPLACE,
                            redirectedFrom,
                            skipGuards,
                            onTransition: ({
                                location
                            }) => {
                                this._entries[this._index] = location;
                            }
                        });
                    }
                    go(delta) {
                        const {
                            _index: index,
                            _entries: entries
                        } = this;
                        let nextIndex = clamp(index + delta, 0, entries.length - 1);
                        let nextAction = ACTION_POP;
                        let nextLocation = entries[nextIndex];
                        // check transition
                        if (this._blockers.length) {
                            this._blockers.call({
                                action: nextAction,
                                location: nextLocation,
                                retry: () => {
                                    this.go(delta);
                                }
                            });
                            return;
                        }
                        this.transitionTo(nextLocation.pathname, Object.assign(Object.assign({}, nextLocation), {
                            action: nextAction,
                            onTransition: ({
                                location
                            }) => {
                                this._index = nextIndex;
                            }
                        }));
                    }
                    block(blocker) {
                        return this._blockers.push(blocker);
                    }
                    getIndexAndLocation() {
                        const index = this._index;
                        return [index, this._entries[index]];
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/history/browser.js


                class BrowserHistory extends BaseHistory {
                    constructor({
                        basename
                    } = {}) {
                        super({
                            basename
                        });
                        this._history = window.history;
                        [this._index, this.location] = this.getIndexAndLocation();
                        // redirect immediately if
                        // 1. no index
                        // 2. we're not on the right url (redirectedFrom means url not match basename)
                        const {
                            notMatchBasename
                        } = this.location;
                        if (this._index == null || notMatchBasename) {
                            this._index = this._index || 0;
                            this._history.replaceState(Object.assign(Object.assign({}, this._history.state), {
                                idx: this._index
                            }), '', notMatchBasename ? this.resolve(this.location).href : undefined);
                        }
                        // recalculate location if not match basename
                        if (notMatchBasename) {
                            const state = this._history.state || {};
                            this.location = createLocation(this.location, {
                                state: state.usr || null,
                                key: state.key || 'default'
                            });
                        }
                    }
                    push(to, {
                        state,
                        redirectedFrom
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            redirectedFrom,
                            onTransition({
                                state,
                                url
                            }) {
                                pushState(state, url);
                            }
                        });
                    }
                    replace(to, {
                        state,
                        redirectedFrom
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            action: ACTION_REPLACE,
                            redirectedFrom,
                            onTransition({
                                state,
                                url
                            }) {
                                replaceState(state, url);
                            }
                        });
                    }
                    go(delta) {
                        this._history.go(delta);
                    }
                    block(blocker) {
                        return addBlocker(this._blockers, blocker);
                    }
                    setup() {
                        let blockedPopTx = null;
                        const handlePop = () => {
                            const index = this._index;
                            const blockers = this._blockers;
                            if (blockedPopTx) {
                                blockers.call(blockedPopTx);
                                blockedPopTx = null;
                            } else {
                                let nextAction = ACTION_POP;
                                let [nextIndex, nextLocation] = this.getIndexAndLocation();
                                if (blockers.length) {
                                    if (nextIndex != null) {
                                        let delta = index - nextIndex;
                                        if (delta) {
                                            // Revert the POP
                                            blockedPopTx = {
                                                action: nextAction,
                                                location: nextLocation,
                                                retry: () => {
                                                    this.go(delta * -1);
                                                }
                                            };
                                            this.go(delta);
                                        }
                                    } else {
                                        // Trying to POP to a location with no index. We did not create
                                        // this location, so we can't effectively block the navigation.
                                        warning(false,
                                            // TODO: Write up a doc that explains our blocking strategy in
                                            // detail and link to it here so people can understand better what
                                            // is going on and how to avoid it.
                                            `You are trying to block a POP navigation to a location that was not ` +
                                            `created by the history library. The block will fail silently in ` +
                                            `production, but in general you should do all navigation with the ` +
                                            `history library (instead of using window.history.pushState directly) ` +
                                            `to avoid this situation.`);
                                    }
                                } else {
                                    this.transitionTo(nextLocation, {
                                        onTransition: () => {},
                                        action: nextAction
                                    });
                                }
                            }
                        };
                        window.addEventListener('popstate', handlePop);
                    }
                    getIndexAndLocation() {
                        const {
                            pathname,
                            search,
                            hash
                        } = window.location;
                        const state = this._history.state || {};
                        return [
                            state.idx,
                            createLocation({
                                pathname,
                                search,
                                hash
                            }, {
                                basename: this.basename,
                                state: state.usr || null,
                                key: state.key || 'default'
                            })
                        ];
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/history/hash.js


                function createHref(to, basename) {
                    return '#' + pathToString(resolvePath(to), basename);
                }
                class HashHistory extends BaseHistory {
                    constructor({
                        basename
                    } = {}) {
                        super({
                            basename
                        });
                        this._history = window.history;
                        [this._index, this.location] = this.getIndexAndLocation();
                        // redirect immediately if
                        // 1. no index
                        // 2. we're not on the right url (redirectedFrom means url not match basename)
                        const {
                            notMatchBasename
                        } = this.location;
                        if (this._index == null || notMatchBasename) {
                            this._index = this._index || 0;
                            this._history.replaceState(Object.assign(Object.assign({}, this._history.state), {
                                idx: this._index
                            }), '', notMatchBasename ? this.resolve(this.location).href : undefined);
                        }
                        // recalculate location if not match basename
                        if (notMatchBasename) {
                            const state = this._history.state || {};
                            this.location = createLocation(this.location, {
                                state: state.usr || null,
                                key: state.key || 'default'
                            });
                        }
                    }
                    push(to, {
                        state,
                        redirectedFrom
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            redirectedFrom,
                            onTransition({
                                state,
                                url
                            }) {
                                pushState(state, url);
                            }
                        });
                    }
                    replace(to, {
                        state,
                        redirectedFrom
                    } = {}) {
                        return this.transitionTo(to, {
                            state,
                            action: ACTION_REPLACE,
                            redirectedFrom,
                            onTransition({
                                state,
                                url
                            }) {
                                replaceState(state, url);
                            }
                        });
                    }
                    go(delta) {
                        this._history.go(delta);
                    }
                    block(blocker) {
                        return addBlocker(this._blockers, blocker);
                    }
                    resolve(to, from) {
                        const toPath = resolvePath(to, from);
                        return {
                            path: toPath,
                            href: createHref(toPath, this.basename)
                        };
                    }
                    setup() {
                        let blockedPopTx = null;
                        const handlePop = () => {
                            const index = this._index;
                            const blockers = this._blockers;
                            if (blockedPopTx) {
                                blockers.call(blockedPopTx);
                                blockedPopTx = null;
                            } else {
                                let nextAction = ACTION_POP;
                                let [nextIndex, nextLocation] = this.getIndexAndLocation();
                                if (blockers.length) {
                                    if (nextIndex != null) {
                                        let delta = index - nextIndex;
                                        if (delta) {
                                            // Revert the POP
                                            blockedPopTx = {
                                                action: nextAction,
                                                location: nextLocation,
                                                retry: () => {
                                                    this.go(delta * -1);
                                                }
                                            };
                                            this.go(delta);
                                        }
                                    } else {
                                        // Trying to POP to a location with no index. We did not create
                                        // this location, so we can't effectively block the navigation.
                                        warning(false,
                                            // TODO: Write up a doc that explains our blocking strategy in
                                            // detail and link to it here so people can understand better what
                                            // is going on and how to avoid it.
                                            `You are trying to block a POP navigation to a location that was not ` +
                                            `created by the history library. The block will fail silently in ` +
                                            `production, but in general you should do all navigation with the ` +
                                            `history library (instead of using window.history.pushState directly) ` +
                                            `to avoid this situation.`);
                                    }
                                } else {
                                    this.transitionTo(nextLocation, {
                                        onTransition: () => {},
                                        action: nextAction
                                    });
                                }
                            }
                        };
                        window.addEventListener('popstate', handlePop);
                        // popstate does not fire on hashchange in IE 11 and old (trident) Edge
                        // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event
                        window.addEventListener('hashchange', () => {
                            const [, nextLocation] = this.getIndexAndLocation();
                            // Ignore extraneous hashchange events.
                            if (pathToString(nextLocation) !== pathToString(this.location)) {
                                handlePop();
                            }
                        });
                    }
                    getIndexAndLocation() {
                        const {
                            pathname,
                            search,
                            hash
                        } = resolvePath(window.location.hash.substr(1));
                        const state = this._history.state || {};
                        return [
                            state.idx,
                            createLocation({
                                pathname,
                                search,
                                hash
                            }, {
                                basename: this.basename,
                                state: state.usr || null,
                                key: state.key || 'default'
                            })
                        ];
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/history/index.js





                function createBrowserHistory(options = {}) {
                    return new BrowserHistory(options);
                }

                function createHashHistory(options = {}) {
                    return new HashHistory(options);
                }

                function createMemoryHistory(options = {}) {
                    return new MemoryHistory(options);
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+utils@1.0.61/node_modules/@shuvi/utils/lib/defer.js
                var defer = __webpack_require__("yF48");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/createRoutesFromArray.js
                function createRoutesFromArray(array,
                    /**
                     * allowEmptyPath: allow empty path for children
                     * A pageBranch could be ended with a page route with empty path.
                     */
                    allowEmptyPath = false) {
                    return array.map(partialRoute => {
                        const defaultPath = allowEmptyPath ? '' : '/';
                        let route = Object.assign(Object.assign({}, partialRoute), {
                            caseSensitive: !!partialRoute.caseSensitive,
                            path: partialRoute.path || defaultPath
                        });
                        if (partialRoute.children) {
                            route.children = createRoutesFromArray(partialRoute.children, true);
                        }
                        return route;
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/error.js
                function isError(err) {
                    return Object.prototype.toString.call(err).indexOf('Error') > -1;
                }

                function isFunction(func) {
                    return Object.prototype.toString.call(func).indexOf('Function') > -1;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/utils/async.js
                function runQueue(queue, fn, cb) {
                    const step = (index) => {
                        if (index >= queue.length) {
                            cb();
                        } else {
                            if (queue[index]) {
                                fn(queue[index], () => {
                                    step(index + 1);
                                });
                            } else {
                                step(index + 1);
                            }
                        }
                    };
                    step(0);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/getRedirectFromRoutes.js
                function getRedirectFromRoutes(routes) {
                    return routes.reduceRight((redirectPath, {
                        route: {
                            redirect
                        }
                    }) => {
                        if (!redirectPath && redirect) {
                            return redirect;
                        }
                        return redirectPath;
                    }, null);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/router.js







                const START = {
                    matches: [],
                    params: {},
                    pathname: '/',
                    search: '',
                    hash: '',
                    key: 'default',
                    query: {},
                    state: null,
                    redirected: false
                };
                class Router {
                    constructor({
                        history,
                        routes
                    }) {
                        this._pending = null;
                        this._cancleHandler = null;
                        this._ready = false;
                        this._readyDefer = (0, defer /* createDefer */ .f)();
                        this._listeners = createEvents();
                        this._beforeEachs = createEvents();
                        this._beforeResolves = createEvents();
                        this._afterEachs = createEvents();
                        this.init = () => {
                            const setup = () => this._history.setup();
                            const current = this._getCurrent();
                            this._history.transitionTo(current, {
                                onTransition: setup,
                                onAbort: setup,
                                // current.redirected means the initial url does not match basename and should redirect
                                // so we just skip all guards
                                // this logic only applies to memory history
                                skipGuards: Boolean(current.redirected)
                            });
                            return this;
                        };
                        this.push = (to, state) => {
                            return this._history.push(to, {
                                state
                            });
                        };
                        this.replace = (to, state) => {
                            return this._history.replace(to, {
                                state
                            });
                        };
                        this.go = (delta) => {
                            this._history.go(delta);
                        };
                        this.back = () => {
                            this._history.back();
                        };
                        this.forward = () => {
                            this._history.forward();
                        };
                        this.block = (blocker) => {
                            return this._history.block(blocker);
                        };
                        this.listen = (listener) => {
                            return this._listeners.push(listener);
                        };
                        this.beforeEach = (listener) => {
                            return this._beforeEachs.push(listener);
                        };
                        this.beforeResolve = (listener) => {
                            return this._beforeResolves.push(listener);
                        };
                        this.afterEach = (listener) => {
                            return this._afterEachs.push(listener);
                        };
                        this.resolve = (to, from) => {
                            return this._history.resolve(to, from);
                        };
                        this.match = (to) => {
                            const {
                                _routes: routes
                            } = this;
                            const matches = matchRoutes(routes, to);
                            return matches || [];
                        };
                        this.replaceRoutes = (routes) => {
                            if (this._ready) {
                                this._ready = false;
                                this._readyDefer = (0, defer /* createDefer */ .f)();
                            } else {
                                // do nothing
                                // keep _readyDefer as it is, cause user might called router.ready()
                            }
                            if (this._cancleHandler) {
                                // cancel current transition
                                this._cancleHandler();
                                this._cancleHandler = null;
                            }
                            this._routes = createRoutesFromArray(routes);
                            this._current = START;
                            const setup = () => this._history.setup();
                            this._history.transitionTo(this._getCurrent(), {
                                onTransition: setup,
                                onAbort: setup
                            });
                        };
                        this._history = history;
                        this._routes = createRoutesFromArray(routes);
                        this._current = START;
                        this._history.doTransition = this._doTransition.bind(this);
                    }
                    get ready() {
                        return this._readyDefer.promise;
                    }
                    get current() {
                        return this._current;
                    }
                    get routes() {
                        return this._routes;
                    }
                    get action() {
                        return this._history.action;
                    }
                    get basename() {
                        return this._history.basename;
                    }
                    /*
                      The Full Navigation Resolution Flow for shuvi/router
                      1. Navigation triggered.
                      2. Handle route.redirect if it has one
                      3. Call router.beforeEach
                      4. Call route.resolve
                      5. Emit change event(trigger react update)
                      6. Call router.afterEach
                      */
                    _doTransition(to, onComplete, onAbort, skipGuards, isReplace, redirectedFrom) {
                        const nextRoute = this._getNextRoute(to);
                        const current = this._current;
                        const nextMatches = nextRoute.matches;
                        const routeRedirect = getRedirectFromRoutes(nextMatches);
                        const isInitialNavigation = current === START;
                        if (routeRedirect) {
                            const transitionMethod = isReplace || isInitialNavigation ? 'replace' : 'push';
                            return this._history[transitionMethod](routeRedirect, {
                                redirectedFrom: redirectedFrom || nextRoute
                            });
                        }
                        const routeContext = new Map();
                        const queue = skipGuards ?
                            [] :
                            [].concat(this._beforeEachs.toArray(), this._beforeResolves.toArray());
                        let cancel = false;
                        this._cancleHandler = () => {
                            cancel = true;
                            this._pending = null;
                        };
                        const abort = () => {
                            this._cancleHandler = null;
                            onAbort && onAbort();
                            // fire ready cbs once
                            if (!this._ready && this._current !== START) {
                                this._ready = true;
                                this._readyDefer.resolve();
                            }
                        };
                        this._pending = to;
                        let finishedCallbacks = [];
                        const iterator = (hook, next) => {
                            if (cancel) {
                                return;
                            }
                            if (this._pending !== to) {
                                return abort();
                            }
                            try {
                                hook(nextRoute, current, (to => {
                                    if (to === false) {
                                        abort();
                                    } else if (isError(to)) {
                                        abort();
                                    } else if (typeof to === 'string' ||
                                        (typeof to === 'object' && typeof to.path === 'string')) {
                                        abort();
                                        const useReplace = isReplace ||
                                            (typeof to === 'object' && to.replace) ||
                                            isInitialNavigation;
                                        const transitionMethod = useReplace ? 'replace' : 'push';
                                        if (typeof to === 'object') {
                                            this._history[transitionMethod](to.path, {
                                                redirectedFrom: redirectedFrom || nextRoute,
                                                skipGuards: to.skipGuards,
                                                state: to.state
                                            });
                                        } else {
                                            this._history[transitionMethod](to, {
                                                redirectedFrom: redirectedFrom || nextRoute
                                            });
                                        }
                                    } else {
                                        if (isFunction(to)) {
                                            finishedCallbacks.push(to);
                                        }
                                        next();
                                    }
                                }));
                            } catch (err) {
                                abort();
                                console.error('Uncaught error during navigation:', err);
                            }
                        };
                        runQueue(queue, iterator, () => {
                            if (cancel) {
                                return;
                            }
                            if (this._pending !== to) {
                                return abort();
                            }
                            this._pending = null;
                            this._cancleHandler = null;
                            onComplete();
                            const pre = this._current;
                            this._current = this._getCurrent(routeContext);
                            // fire ready cbs once
                            if (!this._ready) {
                                this._ready = true;
                                this._readyDefer.resolve();
                            }
                            this._listeners.call({
                                action: this._history.action,
                                location: this._history.location
                            });
                            this._afterEachs.call(this._current, pre);
                            finishedCallbacks.forEach(fn => {
                                fn();
                            });
                        });
                    }
                    _getCurrent(routeContext) {
                        var _a;
                        const {
                            _history: {
                                location
                            }
                        } = this;
                        const matches = this.match(location);
                        let params;
                        if (matches.length) {
                            params = matches[matches.length - 1].params;
                            if (routeContext) {
                                for (const {
                                        route
                                    } of matches) {
                                    const resolvedProps = (_a = routeContext.get(route)) === null || _a === void 0 ? void 0 : _a.props;
                                    if (resolvedProps) {
                                        route.props = Object.assign(Object.assign({}, route.props), resolvedProps);
                                    }
                                }
                            }
                        } else {
                            params = {};
                        }
                        return {
                            matches,
                            params,
                            pathname: location.pathname,
                            search: location.search,
                            hash: location.hash,
                            query: location.query,
                            state: location.state,
                            redirected: Boolean(location.redirectedFrom) || location.notMatchBasename,
                            key: location.key
                        };
                    }
                    _getNextRoute(to) {
                        const matches = this.match(to);
                        const params = matches.length ? matches[matches.length - 1].params : {};
                        const parsedPath = resolvePath(to);
                        return Object.assign(Object.assign({
                            matches,
                            params
                        }, parsedPath), {
                            key: '',
                            state: null
                        });
                    }
                }
                const createRouter = (options) => {
                    return new Router(options);
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/index.js









                /***/
            }),

        /***/
        "f/ii":
            /***/
            (function(__unused_webpack_module, exports) {


                // This package 'trace' is a modified version of the Next.js that can be found here:
                // https://github.com/vercel/next.js/tree/canary/packages/next/src/trace
                var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.trace = exports.Span = exports.SpanStatus = void 0;
                exports.setReporter = setReporter;
                var SpanStatus;
                (function(SpanStatus) {
                    SpanStatus[SpanStatus["Started"] = 0] = "Started";
                    SpanStatus[SpanStatus["Stopped"] = 1] = "Stopped";
                })(SpanStatus || (exports.SpanStatus = SpanStatus = {}));
                const isServer = "object" === 'undefined';
                const KEY_SERVER_REPORTER = Symbol.for('shuvi_server_reporter');
                let count = 0;
                const getId = () => {
                    count++;
                    return count;
                };
                let globalReporter = undefined;

                function setReporter(reporter) {
                    if (isServer) {
                        if (globalThis[KEY_SERVER_REPORTER]) {
                            throw new Error('Reporter already set !');
                        }
                        globalThis[KEY_SERVER_REPORTER] = reporter;
                        return;
                    }
                    if (globalReporter) {
                        throw new Error('Reporter already set !');
                    }
                    globalReporter = reporter;
                }
                class Span {
                    constructor({
                        name,
                        parentId,
                        attrs,
                        startTime
                    }) {
                        this._name = name;
                        this._parentId = parentId;
                        this._attrs = attrs ? Object.assign({}, attrs) : {};
                        this._status = SpanStatus.Started;
                        this._id = getId();
                        const now = Date.now();
                        this._start = startTime || now;
                        // Capturing current datetime as additional metadata for external reconstruction.
                        this._now = now;
                    }
                    get status() {
                        return this._status;
                    }
                    // Durations are reported as microseconds.
                    // of something like Date.now(), which reports in milliseconds.
                    // Additionally, ~285 years can be safely represented as microseconds as
                    // a float64 in both JSON and JavaScript.
                    stop(stopTime) {
                        const reporter = isServer ?
                            globalThis[KEY_SERVER_REPORTER] :
                            globalReporter;
                        if (!reporter) {
                            return;
                        }
                        const end = stopTime || Date.now();
                        const duration = end - this._start;
                        this._status = SpanStatus.Stopped;
                        if (duration > Number.MAX_SAFE_INTEGER) {
                            console.warn(`Duration is too long to express as float64: ${duration}`);
                        }
                        reporter({
                            timestamp: this._now,
                            name: this._name,
                            duration,
                            startTime: this._start,
                            endTime: end,
                            id: this._id,
                            parentId: this._parentId,
                            attrs: this._attrs
                        });
                    }
                    traceChild(name, attrs) {
                        return new Span({
                            name,
                            parentId: this._id,
                            attrs
                        });
                    }
                    manualTraceChild(name, startTime, stopTime, attrs) {
                        const span = new Span({
                            name,
                            parentId: this._id,
                            attrs,
                            startTime
                        });
                        span.stop(stopTime);
                    }
                    setAttribute(key, value) {
                        this._attrs[key] = value;
                    }
                    setAttributes(attrs) {
                        Object.keys(attrs).forEach(key => {
                            this.setAttribute(key, attrs[key]);
                        });
                    }
                    traceFn(fn) {
                        try {
                            return fn(this);
                        } finally {
                            this.stop();
                        }
                    }
                    traceAsyncFn(fn) {
                        return __awaiter(this, void 0, void 0, function*() {
                            try {
                                return yield fn(this);
                            } finally {
                                this.stop();
                            }
                        });
                    }
                }
                exports.Span = Span;
                const trace = (name, parentId, attrs) => {
                    return new Span({
                        name,
                        parentId,
                        attrs
                    });
                };
                exports.trace = trace;


                /***/
            }),

        /***/
        "K+9F":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Ce": () => ( /* binding */ SHUVI_ERROR),
                    /* harmony export */
                    "Ug": () => ( /* binding */ CLIENT_APPDATA_ID),
                    /* harmony export */
                    "oU": () => ( /* binding */ CLIENT_CONTAINER_ID)
                    /* harmony export */
                });
                /* unused harmony exports NAME, DEV_ONLY_URL_PREFIX, ROUTE_RESOURCE_QUERYSTRING, LOADER_RESOURCE_QUERYSTRING, PUBLIC_ENV_PREFIX, DEV_STYLE_ANCHOR_ID, DEV_STYLE_HIDE_FOUC, DEV_HOT_MIDDLEWARE_PATH, DEV_HOT_LAUNCH_EDITOR_ENDPOINT, DEV_ORIGINAL_STACK_FRAME_ENDPOINT, DEV_READY_ENDPOINT, DEV_SOCKET_TIMEOUT_MS, ROUTE_NOT_FOUND_NAME, BUNDLER_TARGET_CLIENT, BUNDLER_TARGET_SERVER, CLIENT_OUTPUT_DIR, SERVER_OUTPUT_DIR */
                // common
                const NAME = 'shuvi';
                const DEV_ONLY_URL_PREFIX = `/_${NAME}`;
                const ROUTE_RESOURCE_QUERYSTRING = ( /* unused pure expression or super */ null && (`shuvi-route`));
                const LOADER_RESOURCE_QUERYSTRING = ( /* unused pure expression or super */ null && (`shuvi-page-loader`));
                const PUBLIC_ENV_PREFIX = 'SHUVI_PUBLIC_';
                // app
                const CLIENT_CONTAINER_ID = '__APP';
                const CLIENT_APPDATA_ID = '__APP_DATA';
                const DEV_STYLE_ANCHOR_ID = '__shuvi_style_anchor';
                const DEV_STYLE_HIDE_FOUC = 'data-shuvi-hide-fouc';
                const DEV_HOT_MIDDLEWARE_PATH = `${DEV_ONLY_URL_PREFIX}/webpack-hmr`;
                const DEV_HOT_LAUNCH_EDITOR_ENDPOINT = `${DEV_ONLY_URL_PREFIX}/development/open-stack-frame-in-editor`;
                const DEV_ORIGINAL_STACK_FRAME_ENDPOINT = `${DEV_ONLY_URL_PREFIX}/development/original-stack-frame`;
                const DEV_READY_ENDPOINT = `${DEV_ONLY_URL_PREFIX}/development/ready`;
                const DEV_SOCKET_TIMEOUT_MS = 5000;
                const ROUTE_NOT_FOUND_NAME = ( /* unused pure expression or super */ null && (`404`));
                const SHUVI_ERROR = {
                    APP_ERROR: {
                        code: 500,
                        message: 'Internal Application Error.'
                    },
                    SERVER_ERROR: {
                        code: 500,
                        message: 'Internal Server Error.'
                    },
                    CLIENT_ERROR: {
                        message: 'Internal Application Error'
                    },
                    PAGE_NOT_FOUND: {
                        code: 404,
                        message: 'This page could not be found.'
                    }
                };
                const BUNDLER_TARGET_CLIENT = `${NAME}/client`;
                const BUNDLER_TARGET_SERVER = `${NAME}/server`;
                const CLIENT_OUTPUT_DIR = 'client';
                const SERVER_OUTPUT_DIR = 'server';


                /***/
            }),

        /***/
        "PzE1":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "_W": () => ( /* binding */ CLIENT_RENDER),
                    /* harmony export */
                    "j2": () => ( /* binding */ CLIENT_ENTRY)
                    /* harmony export */
                });
                /* unused harmony exports SERVER_CREATE_APP, SERVER_REQUEST */
                const requestId = 'requestId';
                const runLoadersAttrs = {
                    requestId: {
                        name: requestId,
                        type: 'string'
                    },
                    error: {
                        name: 'error',
                        type: 'boolean'
                    },
                    errorType: {
                        name: 'errorType',
                        type: 'string',
                        enum: ['redirect', 'userError', 'unexpectedError']
                    }
                };
                /** category SERVER_CREATE_APP */
                const SERVER_CREATE_APP = {
                    name: 'SERVER_CREATE_APP',
                    attrs: {
                        requestId: {
                            name: requestId,
                            type: 'string'
                        }
                    },
                    events: {
                        SHUVI_SERVER_CREATE_APP: {
                            name: 'SHUVI_SERVER_CREATE_APP',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        },
                        SHUVI_SERVER_APP_INIT: {
                            name: 'SHUVI_SERVER_APP_INIT',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        },
                        SHUVI_SERVER_RUN_LOADERS: {
                            name: 'SHUVI_SERVER_RUN_LOADERS',
                            duration: true,
                            attrs: runLoadersAttrs
                        }
                    }
                };
                /** category SERVER_REQUEST */
                const SERVER_REQUEST = {
                    name: 'SERVER_REQUEST',
                    attrs: {
                        requestId: {
                            name: requestId,
                            type: 'string'
                        }
                    },
                    events: {
                        SHUVI_SERVER_HANDLE_REQUEST_START: {
                            name: 'SHUVI_SERVER_HANDLE_REQUEST_START',
                            duration: false,
                            attrs: {
                                url: {
                                    name: 'url',
                                    type: 'string'
                                },
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        },
                        SHUVI_SERVER_RUN_ASSET_MIDDLEWARE: {
                            name: 'SHUVI_SERVER_RUN_ASSET_MIDDLEWARE',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                },
                                error: {
                                    name: 'error',
                                    type: 'boolean'
                                },
                                statusCode: {
                                    name: 'statusCode',
                                    type: 'number'
                                }
                            }
                        },
                        SHUVI_SERVER_RUN_MIDDLEWARE_ROUTES: {
                            name: 'SHUVI_SERVER_RUN_MIDDLEWARE_ROUTES',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                },
                                error: {
                                    name: 'error',
                                    type: 'boolean'
                                },
                                statusCode: {
                                    name: 'statusCode',
                                    type: 'number'
                                },
                                headersSent: {
                                    name: 'headersSent',
                                    type: 'boolean'
                                }
                            }
                        },
                        SHUVI_SERVER_RUN_API_MIDDLEWARE: {
                            name: 'SHUVI_SERVER_RUN_API_MIDDLEWARE',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                },
                                error: {
                                    name: 'error',
                                    type: 'boolean'
                                },
                                statusCode: {
                                    name: 'statusCode',
                                    type: 'number'
                                }
                            }
                        },
                        SHUVI_SERVER_RUN_PAGE_MIDDLEWARE: {
                            name: 'SHUVI_SERVER_RUN_PAGE_MIDDLEWARE',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                },
                                error: {
                                    name: 'error',
                                    type: 'boolean'
                                },
                                statusCode: {
                                    name: 'statusCode',
                                    type: 'number'
                                }
                            }
                        },
                        SHUVI_SERVER_RENDER_TO_STRING: {
                            name: 'SHUVI_SERVER_RENDER_TO_STRING',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                },
                                error: {
                                    name: 'error',
                                    type: 'boolean'
                                }
                            }
                        },
                        SHUVI_SERVER_RENDER_TO_HTML: {
                            name: 'SHUVI_SERVER_RENDER_TO_HTML',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        },
                        SHUVI_SERVER_SEND_HTML_HOOK: {
                            name: 'SHUVI_SERVER_SEND_HTML_HOOK',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        },
                        SHUVI_SERVER_SEND_HTML_ORIGINAL: {
                            name: 'SHUVI_SERVER_SEND_HTML_ORIGINAL',
                            duration: true,
                            attrs: {
                                requestId: {
                                    name: requestId,
                                    type: 'string'
                                }
                            }
                        }
                    }
                };
                /** category CLIENT_ENTRY */
                const CLIENT_ENTRY = {
                    name: 'CLIENT_ENTRY',
                    events: {
                        SHUVI_CLIENT_ENTRY_START: {
                            name: 'SHUVI_CLIENT_ENTRY_START',
                            duration: false
                        },
                        SHUVI_CLIENT_SETUP_ENV: {
                            name: 'SHUVI_CLIENT_SETUP_ENV',
                            duration: true
                        },
                        SHUVI_CLIENT_CREATE_APP: {
                            name: 'SHUVI_CLIENT_CREATE_APP',
                            duration: true
                        },
                        SHUVI_CLIENT_APP_INIT: {
                            name: 'SHUVI_CLIENT_APP_INIT',
                            duration: true
                        },
                        SHUVI_CLIENT_RUN_APP: {
                            name: 'SHUVI_CLIENT_RUN_APP',
                            duration: true
                        },
                        SHUVI_CLIENT_DO_RENDER: {
                            name: 'SHUVI_CLIENT_DO_RENDER',
                            duration: true
                        }
                    }
                };
                const navigationAttrs = {
                    from: {
                        name: 'from',
                        type: 'string'
                    },
                    to: {
                        name: 'to',
                        type: 'string'
                    },
                    navigationId: {
                        name: 'navigationId',
                        type: 'string'
                    }
                };
                /** category CLIENT_RENDER */
                const CLIENT_RENDER = {
                    name: 'CLIENT_RENDER',
                    events: {
                        SHUVI_PAGE_READY: {
                            name: 'SHUVI_PAGE_READY',
                            duration: false
                        },
                        SHUVI_NAVIGATION_TRIGGERED: {
                            name: 'SHUVI_NAVIGATION_TRIGGERED',
                            duration: true,
                            attrs: navigationAttrs
                        },
                        SHUVI_NAVIGATION_DONE: {
                            name: 'SHUVI_NAVIGATION_DONE',
                            duration: true,
                            attrs: navigationAttrs
                        },
                        SHUVI_CLIENT_RUN_LOADERS: {
                            name: 'SHUVI_CLIENT_RUN_LOADERS',
                            duration: true,
                            attrs: runLoadersAttrs
                        }
                    }
                };


                /***/
            }),

        /***/
        "k0mv":
            /***/
            ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/lib/shared/shuvi-singleton-runtimeConfig.js
                var shuvi_singleton_runtimeConfig = __webpack_require__("JAqJ");
                // EXTERNAL MODULE: ./.shuvi/app/core/runtimeConfig.js
                var runtimeConfig = __webpack_require__("3tr5");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/helper/getAppData.js
                var getAppData = __webpack_require__("Cfwz");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+shared@1.0.61/node_modules/@shuvi/shared/esm/constants/trace.js
                var trace = __webpack_require__("PzE1");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/trace.js
                var client_trace = __webpack_require__("TUFM");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/setup-env.js
                /**
                 * Following codes should be run before any other codes.
                 * Do not try to import any module from `@shuvi/app`.
                 */




                client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_ENTRY_START.name */ .j2.events.SHUVI_CLIENT_ENTRY_START.name).stop();
                var setupEnvTrace = client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_SETUP_ENV.name */ .j2.events.SHUVI_CLIENT_SETUP_ENV.name);
                // === set runtime config ===
                var appData = (0, getAppData /* getAppData */ .$)();
                // build-time config for none-ssr
                if (runtimeConfig /* default */ .Z) {
                    (0, shuvi_singleton_runtimeConfig /* setPublicRuntimeConfig */ .k0)(runtimeConfig /* default */ .Z);
                }
                // runtime config from server
                if (appData.runtimeConfig) {
                    (0, shuvi_singleton_runtimeConfig /* setPublicRuntimeConfig */ .k0)(appData.runtimeConfig);
                }
                setupEnvTrace.stop();

                // EXTERNAL MODULE: ./.shuvi/app/core/entry.js
                var entry = __webpack_require__("tber");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/index.js?shuviEntry=true
                // shuvi built-in entry
                // IMPORTANT: there files must be run before any other codes

                // user entry

                // app starts here
                if (false) {} else {
                    __webpack_require__("Q+QS");
                }


                /***/
            }),

        /***/
        "Q+QS":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_instanceof.mjs
                var _instanceof = __webpack_require__("jNo/");
                // EXTERNAL MODULE: external "regeneratorRuntime"
                var external_regeneratorRuntime_ = __webpack_require__("Pz56");
                var external_regeneratorRuntime_default = /*#__PURE__*/ __webpack_require__.n(external_regeneratorRuntime_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+shared@1.0.61/node_modules/@shuvi/shared/esm/constants/index.js
                var constants = __webpack_require__("K+9F");
                // EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
                var jsx_runtime = __webpack_require__("oUqw");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+router-react@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_react@18.2.0_sass@1.50.1/node_modules/@shuvi/router-react/esm/index.js + 8 modules
                var esm = __webpack_require__("waGQ");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/AppComponent.jsx



                function App() {
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(esm /* RouterView */ .MA, {});
                }
                /* harmony default export */
                const AppComponent = ( /*#__PURE__*/ external_React_.memo(App));

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_class_call_check.mjs
                var _class_call_check = __webpack_require__("XzXg");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+shared@1.0.61/node_modules/@shuvi/shared/esm/constants/trace.js
                var trace = __webpack_require__("PzE1");
                // EXTERNAL MODULE: ./node_modules/.pnpm/doura@0.0.13/node_modules/doura/dist/doura.esm-bundler.js
                var doura_esm_bundler = __webpack_require__("H/+l");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/models/error.js

                const DEFAULT_ERROR_STATE = {
                    error: null
                };
                const errorModelName = 'error';
                const errorModel = (0, doura_esm_bundler /* defineModel */ .Gn)({
                    state: DEFAULT_ERROR_STATE,
                    actions: {
                        set(error) {
                            this.error = error;
                        },
                        clear() {
                            if (this.hasError) {
                                this.error = null;
                            }
                        }
                    },
                    views: {
                        errorObject() {
                            return this.error;
                        },
                        hasError() {
                            return this.error !== null;
                        }
                    }
                });

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/ApplicationContext.jsx


                var ApplicationContext = /*#__PURE__*/ external_React_.createContext(null);

                function AppProvider(param) {
                    var app = param.app,
                        children = param.children;
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(ApplicationContext.Provider, {
                        value: app,
                        children: children
                    });
                }

                function useApp() {
                    return React.useContext(ApplicationContext);
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/head.jsx + 1 modules
                var head = __webpack_require__("tcj6");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/Error.jsx



                var style = {
                    container: {
                        color: "#000",
                        background: "#fff",
                        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    error: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    errorCode: {
                        fontSize: "24px",
                        fontWeight: 500,
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        paddingRight: "20px",
                        marginRight: "20px"
                    },
                    errorDesc: {
                        fontSize: "16px",
                        lineHeight: "1"
                    }
                };

                function Error_Error(param) {
                    var errorCode = param.errorCode,
                        errorDesc = param.errorDesc;
                    return /*#__PURE__*/ (0, jsx_runtime.jsxs)("div", {
                        style: style.container,
                        children: [
                            /*#__PURE__*/
                            (0, jsx_runtime.jsx)(head /* default */ .Z, {
                                children: /*#__PURE__*/ (0, jsx_runtime.jsx)("title", {
                                    children: "Page Error"
                                })
                            }),
                            /*#__PURE__*/
                            (0, jsx_runtime.jsxs)("div", {
                                style: style.error,
                                children: [
                                    errorCode !== undefined && /*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
                                        style: style.errorCode,
                                        children: errorCode
                                    }),
                                    /*#__PURE__*/
                                    (0, jsx_runtime.jsx)("div", {
                                        style: style.errorDesc,
                                        children: errorDesc || "Error"
                                    })
                                ]
                            })
                        ]
                    });
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+utils@1.0.61/node_modules/@shuvi/utils/lib/nullish.js
                var nullish = __webpack_require__("hw1S");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/ErrorPage.jsx




                var ErrorPage_Error = nullish /* default */ .Z || Error_Error;

                function ErrorPage(param) {
                    var code = param.code,
                        message = param.message,
                        _$error = param.error;
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(ErrorPage_Error, {
                        errorCode: code,
                        errorDesc: message,
                        error: _$error
                    });
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_class.mjs
                var _create_class = __webpack_require__("dhFe");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_inherits.mjs
                var _inherits = __webpack_require__("feER");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_super.mjs + 1 modules
                var _create_super = __webpack_require__("miY+");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/ErrorBoundary.jsx








                var ErrorBoundary = /*#__PURE__*/ function(_PureComponent) {
                    "use strict";
                    (0, _inherits /* default */ .Z)(ErrorBoundary, _PureComponent);
                    var _super = (0, _create_super /* default */ .Z)(ErrorBoundary);

                    function ErrorBoundary() {
                        (0, _class_call_check /* default */ .Z)(this, ErrorBoundary);
                        var _this;
                        _this = _super.call.apply(_super, [
                            this
                        ].concat(Array.prototype.slice.call(arguments)));
                        _this.state = {
                            error: null
                        };
                        return _this;
                    }
                    (0, _create_class /* default */ .Z)(ErrorBoundary, [{
                            key: "componentDidCatch",
                            value: function componentDidCatch(error, // Loosely typed because it depends on the React version and was
                                // accidentally excluded in some versions.
                                errorInfo) {
                                this.setState({
                                    error: error
                                });
                                console.error("the error is below: \n", error);
                                if (errorInfo && errorInfo.componentStack) {
                                    console.error("the componentStack is below: \n", errorInfo.componentStack);
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function render() {
                                return this.state.error ? // The component has to be unmounted or else it would continue to error
                                    /*#__PURE__*/
                                    (0, jsx_runtime.jsx)(ErrorPage, {
                                        message: constants /* SHUVI_ERROR.CLIENT_ERROR.message */ .Ce.CLIENT_ERROR.message,
                                        error: this.state.error
                                    }) : this.props.children;
                            }
                        }
                    ]);
                    return ErrorBoundary;
                }(external_React_.PureComponent);


                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/store.js
                var store = __webpack_require__("7XQW");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_define_property.mjs
                var _define_property = __webpack_require__("vctd");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/trace.js
                var client_trace = __webpack_require__("TUFM");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/Trace.jsx






                var _events = trace /* CLIENT_RENDER.events */ ._W.events,
                    SHUVI_NAVIGATION_TRIGGERED = _events.SHUVI_NAVIGATION_TRIGGERED,
                    SHUVI_NAVIGATION_DONE = _events.SHUVI_NAVIGATION_DONE,
                    SHUVI_PAGE_READY = _events.SHUVI_PAGE_READY;
                var uuid = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                        var r = Math.random() * 16 | 0,
                            v = c == "x" ? r : r & 0x3 | 0x8;
                        return v.toString(16);
                    });
                };

                function useTrace() {
                    var router = (0, esm /* useRouter */ .tv)();
                    var route = (0, esm /* useCurrentRoute */ .Hb)();
                    var navigationTrace = external_React_.useRef();
                    external_React_.useEffect(function() {
                        client_trace /* clientRenderTrace.traceChild */ .s.traceChild(SHUVI_PAGE_READY.name).stop();
                        router.beforeEach(function(to, from, next) {
                            var fromPath = "".concat(from.pathname).concat(from.search);
                            var toPath = "".concat(to.pathname).concat(to.search);
                            var navigationId = uuid();
                            var _obj;
                            var traceAttrs = (_obj = {}, (0, _define_property /* default */ .Z)(_obj, SHUVI_NAVIGATION_DONE.attrs.from.name, fromPath), (0, _define_property /* default */ .Z)(_obj, SHUVI_NAVIGATION_DONE.attrs.to.name, toPath), (0, _define_property /* default */ .Z)(_obj, SHUVI_NAVIGATION_DONE.attrs.navigationId.name, navigationId), _obj);
                            client_trace /* clientRenderTrace.traceChild */ .s.traceChild(SHUVI_NAVIGATION_TRIGGERED.name, traceAttrs).stop();
                            navigationTrace.current = client_trace /* clientRenderTrace.traceChild */ .s.traceChild(SHUVI_NAVIGATION_DONE.name);
                            navigationTrace.current.setAttributes(traceAttrs);
                            next();
                        });
                    }, []);
                    external_React_.useEffect(function() {
                        var _a;
                        (_a = navigationTrace.current) === null || _a === void 0 ? void 0 : _a.stop();
                    }, [
                        route
                    ]);
                }

                function Trace(param) {
                    var _children = param.children,
                        children = _children === void 0 ? null : _children;
                    useTrace();
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: children
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/AppContainer.jsx








                function ErrorGuard(param) {
                    var _children = param.children,
                        children = _children === void 0 ? null : _children;
                    var errorState = (0, store /* useSharedModel */ .RJ)(errorModelName, errorModel);
                    var error = errorState.error,
                        hasError = errorState.hasError;
                    if (hasError) {
                        return /*#__PURE__*/ (0, jsx_runtime.jsx)(ErrorPage, {
                            code: error === null || error === void 0 ? void 0 : error.code,
                            message: error === null || error === void 0 ? void 0 : error.message,
                            error: error === null || error === void 0 ? void 0 : error.error
                        });
                    }
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: children
                    });
                }

                function AppContainer(param) {
                    var app = param.app,
                        children = param.children;
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(AppProvider, {
                        app: app,
                        children: /*#__PURE__*/ (0, jsx_runtime.jsx)(ErrorBoundary, {
                            children: /*#__PURE__*/ (0, jsx_runtime.jsx)(store /* Provider */ .zt, {
                                store: app.store,
                                children: /*#__PURE__*/ (0, jsx_runtime.jsx)(ErrorGuard, {
                                    children: /*#__PURE__*/ (0, jsx_runtime.jsx)(Trace, {
                                        children: children
                                    })
                                })
                            })
                        })
                    });
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/head-manager.js


                // Based on https://github.com/zeit/next.js
                // License: https://github.com/zeit/next.js/blob/977bf8d9ebd2845241b8689317f36e4e487f39d0/license.md

                var HeadManager = /*#__PURE__*/ function() {
                    "use strict";

                    function HeadManager() {
                        (0, _class_call_check /* default */ .Z)(this, HeadManager);
                        this._pedningPromise = null;
                        this.updateHead = this.updateHead.bind(this);
                    }
                    (0, _create_class /* default */ .Z)(HeadManager, [{
                            key: "updateHead",
                            value: function updateHead(head) {
                                var _this = this;
                                this._head = head;
                                if (this._pedningPromise) {
                                    return;
                                }
                                this._pedningPromise = Promise.resolve().then(function() {
                                    _this._pedningPromise = null;
                                    _this._doUpdateHead();
                                });
                            }
                        },
                        {
                            key: "_doUpdateHead",
                            value: function _doUpdateHead() {
                                var _this = this;
                                var tags = {};
                                this._head.forEach(function(h) {
                                    (tags[h.tagName] || (tags[h.tagName] = [])).push(h);
                                });
                                if (tags.title) {
                                    this._updateTitle(tags.title[0]);
                                }
                                var types = [
                                    "meta",
                                    "base",
                                    "link",
                                    "style",
                                    "script"
                                ];
                                types.forEach(function(type) {
                                    _this._updateElements(type, tags[type] || []);
                                });
                            }
                        },
                        {
                            key: "_updateTitle",
                            value: function _updateTitle(param) {
                                var attrs = param.attrs;
                                var title = attrs.textContent || "";
                                if (title !== document.title) document.title = title;
                                var titleEle = document.getElementsByTagName("title")[0];
                                if (titleEle) {
                                    assignAttributes(titleEle, attrs);
                                }
                            }
                        },
                        {
                            key: "_updateElements",
                            value: function _updateElements(type, tags) {
                                var headEl = document.getElementsByTagName("head")[0];
                                var oldNodes = headEl.querySelectorAll("".concat(type, "[").concat(head /* SHUVI_HEAD_ATTRIBUTE */ .J, "='true']"));
                                var oldTags = Array.prototype.slice.call(oldNodes);
                                var divideElement = null;
                                if (oldTags.length) {
                                    divideElement = oldTags[oldTags.length - 1].nextElementSibling;
                                }
                                var newTags = tags.map(tagToDOM).filter(function(newTag) {
                                    for (var k = 0, len = oldTags.length; k < len; k++) {
                                        var oldTag = oldTags[k];
                                        if (oldTag.isEqualNode(newTag)) {
                                            oldTags.splice(k, 1);
                                            return false;
                                        }
                                    }
                                    return true;
                                });
                                oldTags.forEach(function(t) {
                                    return t.parentNode.removeChild(t);
                                });
                                newTags.forEach(function(t) {
                                    if (divideElement) {
                                        headEl.insertBefore(t, divideElement);
                                    } else {
                                        headEl.appendChild(t);
                                    }
                                });
                            }
                        }
                    ]);
                    return HeadManager;
                }();

                function assignAttributes(el, attrs) {
                    for (var a in attrs) {
                        if (!Object.prototype.hasOwnProperty.call(attrs, a)) continue;
                        if (a === "textContent") continue;
                        // we don't render undefined props to the DOM
                        if (attrs[a] === undefined) continue;
                        el.setAttribute(a.toLowerCase(), attrs[a]);
                    }
                }

                function tagToDOM(param) {
                    var tagName = param.tagName,
                        attrs = param.attrs,
                        innerHTML = param.innerHTML;
                    var el = document.createElement(tagName);
                    assignAttributes(el, attrs);
                    var textContent = attrs.textContent;
                    if (innerHTML) {
                        el.innerHTML = innerHTML;
                    } else if (textContent) {
                        el.textContent = textContent;
                    }
                    return el;
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/head-manager-context.js
                var head_manager_context = __webpack_require__("9iJD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/loadable/loadable.js + 1 modules
                var loadable = __webpack_require__("ptDc");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/view/render.js
                var doRender;
                if (true) {
                    var ref = __webpack_require__("FaUj"),
                        createRoot = ref.createRoot,
                        hydrateRoot = ref.hydrateRoot;
                    var renderRoot;
                    doRender = function(param, callback) {
                        var root = param.root,
                            appContainer = param.appContainer,
                            shouldHydrate = param.shouldHydrate;
                        if (shouldHydrate) {
                            renderRoot = hydrateRoot(appContainer, root);
                            callback === null || callback === void 0 ? void 0 : callback();
                        } else {
                            if (!renderRoot) {
                                renderRoot = createRoot(appContainer);
                            }
                            renderRoot.render(root);
                        }
                    };
                } else {
                    var ref1, hydrate, render;
                }


                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/view/ReactView.client.jsx













                var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                    var adopt = function adopt(value) {
                        return (0, _instanceof /* default */ .Z)(value, P) ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    };
                    return new(P || (P = Promise))(function(resolve, reject) {
                        var fulfilled = function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var rejected = function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var step = function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        };
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var headManager = new HeadManager();
                var ReactClientView = function ReactClientView() {
                    "use strict";
                    var _this = this;
                    (0, _class_call_check /* default */ .Z)(this, ReactClientView);
                    this._isInitialRender = true;
                    this.renderApp = function(_a) {
                        return __awaiter(_this, [
                            _a
                        ], void 0, external_regeneratorRuntime_default().mark(function _callee(param) {
                            var appContainer, app, appData, _this, ref, isInitialRender, router, AppComponent, setAppError, appError, ssr, dynamicIds, shouldHydrate, TypedAppComponent, getServerError, matches, root;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        appContainer = param.appContainer, app = param.app, appData = param.appData;
                                        _this = this;
                                        ref = this, isInitialRender = ref._isInitialRender;
                                        router = app.router, AppComponent = app.appComponent, setAppError = app.setError, appError = app.error;
                                        ssr = appData.ssr, dynamicIds = appData.dynamicIds;
                                        shouldHydrate = ssr && isInitialRender;
                                        TypedAppComponent = AppComponent;
                                        if (!(ssr && isInitialRender)) {
                                            _ctx.next = 13;
                                            break;
                                        }
                                        if (false) {}
                                        _ctx.next = 11;
                                        return Promise.all([
                                            loadable /* default.preloadReady */ .Z.preloadReady(dynamicIds),
                                            router.ready
                                        ]);
                                    case 11:
                                        _ctx.next = 17;
                                        break;
                                    case 13:
                                        _ctx.next = 15;
                                        return router.ready;
                                    case 15:
                                        matches = router.current.matches;
                                        if (!matches.length) {
                                            // no handler no matches
                                            setAppError(constants /* SHUVI_ERROR.PAGE_NOT_FOUND */ .Ce.PAGE_NOT_FOUND);
                                        }
                                    case 17:
                                        root = /*#__PURE__*/ (0, jsx_runtime.jsx)(esm /* Router */ .F0, {
                                            router: router,
                                            children: /*#__PURE__*/ (0, jsx_runtime.jsx)(AppContainer, {
                                                app: app,
                                                children: /*#__PURE__*/ (0, jsx_runtime.jsx)(head_manager_context /* HeadManagerContext.Provider */ .V.Provider, {
                                                    value: headManager.updateHead,
                                                    children: /*#__PURE__*/ (0, jsx_runtime.jsx)(TypedAppComponent, {})
                                                })
                                            })
                                        });
                                        client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_DO_RENDER.name */ .j2.events.SHUVI_CLIENT_DO_RENDER.name).traceFn(function() {
                                            doRender({
                                                root: root,
                                                appContainer: appContainer,
                                                shouldHydrate: shouldHydrate
                                            }, function() {
                                                _this._isInitialRender = false;
                                            });
                                        });
                                    case 19:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, this);
                        }));
                    };
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/view/clientView.js

                /* harmony default export */
                const clientView = (new ReactClientView());

                // EXTERNAL MODULE: ./.shuvi/app/files/routes.js
                var routes = __webpack_require__("Yulk");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/helper/getAppData.js
                var getAppData = __webpack_require__("Cfwz");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/dynamic.jsx
                var dynamic = __webpack_require__("vVqY");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/loadRouteComponent.jsx
                /// <reference lib="dom" />

                function loadRouteComponent(loader, options) {
                    var DynamicComp = (0, dynamic /* default */ .Z)(function() {
                        return loader().then(function(mod) {
                            var comp = mod.default || mod;
                            return comp;
                        });
                    }, options);
                    return DynamicComp;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/getRoutes.js

                var __rest = undefined && undefined.__rest || function(s, e) {
                    var t = {};
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === "function")
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
                        }
                    return t;
                };

                function getRoutes(routes) {
                    var getRoutesWithRequire = function(routes) {
                        return routes.map(function(x) {
                            var originalRoute = Object.assign({}, x);
                            var __componentRawRequest__ = originalRoute.__componentRawRequest__,
                                __import__ = originalRoute.__import__,
                                __resolveWeak__ = originalRoute.__resolveWeak__,
                                children = originalRoute.children,
                                route = __rest(originalRoute, [
                                    "__componentRawRequest__",
                                    "__import__",
                                    "__resolveWeak__",
                                    "children"
                                ]);
                            if (children) {
                                route.children = getRoutesWithRequire(children);
                            }
                            if (__import__) {
                                route.component = loadRouteComponent(__import__, Object.assign({
                                    webpack: __resolveWeak__
                                }, __componentRawRequest__ && {
                                    modules: [
                                        __componentRawRequest__
                                    ]
                                }));
                            }
                            if (__componentRawRequest__) {
                                route.__componentRawRequest__ = __componentRawRequest__;
                            }
                            return route;
                        });
                    };
                    var routesWithRequire = getRoutesWithRequire(routes || []);
                    return routesWithRequire;
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+utils@1.0.61/node_modules/@shuvi/utils/lib/isEqual.js
                var isEqual = __webpack_require__("fazP");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/helper/router.js
                var router_awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };

                function runPreload(to) {
                    return router_awaiter(this, void 0, void 0, function*() {
                        const toMatches = to.matches;
                        const preloadList = [];
                        toMatches.forEach(match => {
                            var _a;
                            const preload = (_a = match.route.component) === null || _a === void 0 ? void 0 : _a.preload;
                            if (preload && typeof preload === 'function') {
                                preloadList.push(preload());
                            }
                        });
                        yield Promise.all(preloadList);
                    });
                }

                function getRouteMatchesWithInvalidLoader(to, from, loaders) {
                    const toMatches = to.matches;
                    const fromMatches = from.matches;
                    let changedMatches = [];
                    /**
                     * When a navigation is triggered, loaders should run in the following situation:
                     * 1. If a route changed (new route or same dynamic route but different params), its loader and all its children's loaders should run.
                     * 2. Last nested route's loader should always run.
                     */
                    for (let i = 0; i < toMatches.length; i++) {
                        const currentToMatch = toMatches[i];
                        const currentFromMatch = fromMatches[i];
                        // new route
                        if (currentToMatch.route.id !== (currentFromMatch === null || currentFromMatch === void 0 ? void 0 : currentFromMatch.route.id)) {
                            changedMatches.push(...toMatches.slice(i));
                            break;
                            // same route but different params
                        } else if (!(0, isEqual /* default */ .Z)(currentToMatch.params, currentFromMatch === null || currentFromMatch === void 0 ? void 0 : currentFromMatch.params)) {
                            changedMatches.push(...toMatches.slice(i));
                            break;
                        }
                        // last nested route (last match)
                        if (i === toMatches.length - 1) {
                            changedMatches.push(currentToMatch);
                        }
                    }
                    const targets = [];
                    changedMatches.forEach(match => {
                        const id = match.route.id;
                        if (loaders[id] && typeof loaders[id] === 'function') {
                            targets.push(match);
                        }
                    });
                    return targets;
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+utils@1.0.61/node_modules/@shuvi/utils/lib/invariant.js
                var invariant = __webpack_require__("6R7B");
                var invariant_default = /*#__PURE__*/ __webpack_require__.n(invariant);; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/response.js
                const supportIterator = 'Symbol' in __webpack_require__.g && 'iterator' in Symbol;

                function normalizeName(name) {
                    if (typeof name !== 'string') {
                        name = String(name);
                    }
                    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
                        throw new TypeError('Invalid character in header field name: "' + name + '"');
                    }
                    return name.toLowerCase();
                }

                function normalizeValue(value) {
                    if (typeof value !== 'string') {
                        value = String(value);
                    }
                    return value;
                }
                // Build a destructive iterator for the value list
                function iteratorFor(items) {
                    var iterator = {
                        next: function() {
                            var value = items.shift();
                            return {
                                done: value === undefined,
                                value: value
                            };
                        }
                    };
                    if (supportIterator) {
                        iterator[Symbol.iterator] = function() {
                            return iterator;
                        };
                    }
                    return iterator;
                }
                class Headers {
                    constructor(init) {
                        this._map = {};
                        if (init instanceof Headers) {
                            init.forEach((value, name) => {
                                this.append(name, value);
                            });
                        } else if (Array.isArray(init)) {
                            init.forEach(header => this.append(header[0], header[1]));
                        } else if (init) {
                            Object.keys(init).forEach(name => {
                                this.append(name, init[name]);
                            });
                        }
                    }
                    append(name, value) {
                        name = normalizeName(name);
                        value = normalizeValue(value);
                        var oldValue = this._map[name];
                        this._map[name] = oldValue ? oldValue + ', ' + value : value;
                    }
                    delete(name) {
                        delete this._map[normalizeName(name)];
                    }
                    get(name) {
                        name = normalizeName(name);
                        return this.has(name) ? this._map[name] : null;
                    }
                    has(name) {
                        return this._map.hasOwnProperty(normalizeName(name));
                    }
                    set(name, value) {
                        this._map[normalizeName(name)] = normalizeValue(value);
                    }
                    forEach(callback, thisArg) {
                        for (var name in Object.keys(this._map)) {
                            callback.call(thisArg, this._map[name], name, this);
                        }
                    }
                    keys() {
                        const items = [];
                        this.forEach((_value, name) => items.push(name));
                        return iteratorFor(items);
                    }
                    value() {
                        const items = [];
                        this.forEach(value => items.push(value));
                        return iteratorFor(items);
                    }
                    entries() {
                        const items = [];
                        this.forEach((value, name) => items.push([name, value]));
                        return iteratorFor(items);
                    }
                }
                if (supportIterator) {
                    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
                }
                class ResponseImpl {
                    constructor(data, type, options = {}) {
                        this.__shuvi_resp_type__ = type;
                        this.data = data;
                        this.status = options.status || 200;
                        this.statusText = options.statusText || '';
                        this.headers = new Headers(options.headers);
                    }
                }

                function createTypeCreator(type) {
                    return (obj) => {
                        return obj && obj.__shuvi_resp_type__ === type;
                    };
                }
                const isResponse = (obj) => obj && typeof obj.__shuvi_resp_type__ === 'string';
                const isJson = createTypeCreator('json');
                const isText = createTypeCreator('text');
                const isRedirect = createTypeCreator('redirect');

                function response(data, options) {
                    return new ResponseImpl(data, 'raw', options);
                }

                function json(data) {
                    return new ResponseImpl(data, 'json');
                }

                function response_text(data, options) {
                    return new ResponseImpl(data, 'text', options);
                }

                function redirect(to, status = 302) {
                    return new ResponseImpl('', 'redirect', {
                        status,
                        headers: {
                            Location: to
                        }
                    });
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/loader/loader.js
                var loader_awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };


                // todo: add unit tests
                function runInParallerAndBail(fns) {
                    return loader_awaiter(this, void 0, void 0, function*() {
                        return new Promise(resolve => {
                            const resultList = [];
                            let total = fns.length;
                            let finishedNum = 0;
                            let finished = new Map();
                            let abort = false;
                            const doResolve = () => {
                                abort = true;
                                resolve(resultList.slice());
                            };
                            const isAllFinishedBefore = (targetIndex) => {
                                for (let i = 0; i < targetIndex; i++) {
                                    if (!finished.has(i)) {
                                        return false;
                                    }
                                }
                                return true;
                            };
                            // call loaders in parallel
                            fns.map((fn, index) => loader_awaiter(this, void 0, void 0, function*() {
                                let result;
                                let error;
                                try {
                                    result = yield fn();
                                } catch (err) {
                                    error = err;
                                }
                                if (abort)
                                    return;
                                resultList[index] = {
                                    error,
                                    result
                                };
                                finishedNum += 1;
                                finished.set(index, true);
                                if (finishedNum === total) {
                                    doResolve();
                                } else if (finishedNum === index + 1 && isAllFinishedBefore(index)) {
                                    if (error) {
                                        // we can bail
                                        doResolve();
                                    }
                                }
                            }));
                        });
                    });
                }

                function redirectHelper(to, status = 302) {
                    if (false) {}
                    throw redirect(to, status);
                }

                function errorHelper(msg, statusCode = 500, {
                    fatal = false
                } = {}) {
                    invariant_default()(statusCode >= 400 && statusCode < 600, 'status code should be 4xx and 5xx');
                    throw response({
                        error: true,
                        fatal: fatal
                    }, {
                        status: statusCode,
                        statusText: msg
                    });
                }

                function createLoaderContext({
                    pathname,
                    query,
                    params,
                    req,
                    getAppContext
                }) {
                    return Object.assign({
                        pathname,
                        params,
                        query,
                        redirect: redirectHelper,
                        error: errorHelper,
                        appContext: getAppContext()
                    }, (req ? {
                        req
                    } : {}));
                }

                function runLoaders(matches, loadersByRouteId, loaderContext) {
                    return loader_awaiter(this, void 0, void 0, function*() {
                        const loaderDatas = {};
                        if (!matches.length) {
                            return loaderDatas;
                        }
                        const createLoader = (match) => () => loader_awaiter(this, void 0, void 0, function*() {
                            const loaderFn = loadersByRouteId[match.route.id];
                            if (typeof loaderFn !== 'function') {
                                return;
                            }
                            let res;
                            let error;
                            try {
                                const value = yield loaderFn(loaderContext);
                                if (value === undefined) {
                                    error = new Error(`You defined a loader for route "${match.route.path}" but didn't return ` +
                                        `anything from your \`loader\` function. Please return a value or \`null\`.`);
                                } else {
                                    res = json(value);
                                }
                            } catch (err) {
                                if (false) {}
                                error = err;
                            }
                            if (error) {
                                throw error;
                            }
                            return res;
                        });
                        // call loaders in parallel
                        const resultList = yield runInParallerAndBail(matches.map(createLoader));
                        for (let index = 0; index < resultList.length; index++) {
                            const item = resultList[index];
                            if (item.error) {
                                throw item.error;
                            }
                            const routeId = matches[index].route.id;
                            invariant_default()(item.result, `loader function of route "${matches[index].route.path}" should return a value`);
                            loaderDatas[routeId] = item.result.data;
                        }
                        return loaderDatas;
                    });
                }

                // EXTERNAL MODULE: ./.shuvi/app/user/app.js
                var app = __webpack_require__("HmeL");
                // EXTERNAL MODULE: ./.shuvi/app/core/plugins.js + 126 modules
                var plugins = __webpack_require__("7Bzj");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/runtimPlugin.js + 5 modules
                var runtimPlugin = __webpack_require__("w0tC");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/models/loader.js
                var loader = __webpack_require__("8anA");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/application.js
                var application_awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    }
                    return new(P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        }

                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };





                class ApplicationImpl {
                    constructor(options) {
                        this._config = options.config;
                        this._router = options.router;
                        this._request = options.request;
                        this._context = {};
                        this._store = (0, doura_esm_bundler /* doura */ .z7)({
                            initialState: options.initialState
                        });
                        this._error = this._store.getModel(errorModelName, errorModel);
                        this._loader = this._store.getModel(loader /* loaderModelName */ .Y, loader /* loaderModel */ .y);
                        this._getLoaders = options.getLoaders;
                        this._appComponent = options.AppComponent;
                        this._pluginManager = (0, runtimPlugin /* getManager */ .UE)();
                        (0, runtimPlugin /* initPlugins */ .mV)(this._pluginManager, options.plugins || []);
                    }
                    get router() {
                        return this._router;
                    }
                    get config() {
                        return this._config;
                    }
                    get context() {
                        return this._context;
                    }
                    get pluginManager() {
                        return this._pluginManager;
                    }
                    get appComponent() {
                        return this._appComponent;
                    }
                    get error() {
                        return this._error.errorObject;
                    }
                    setError(err) {
                        this._error.set(err);
                    }
                    clearError() {
                        this._error.clear();
                    }
                    getLoaders() {
                        return this._getLoaders();
                    }
                    getLoadersData() {
                        return this._loader.getAllData;
                    }
                    setLoadersData(datas) {
                        this._loader.setDatas(datas);
                    }
                    init() {
                        return application_awaiter(this, void 0, void 0, function*() {
                            yield this._initPlugin();
                            yield this._initAppContext();
                            this._router.init();
                            yield this._initAppComponent();
                        });
                    }
                    get store() {
                        return this._store;
                    }
                    updateComponents() {
                        return application_awaiter(this, arguments, void 0, function*({
                            AppComponent
                        } = {}) {
                            if (AppComponent && AppComponent !== this._appComponent) {
                                this._appComponent = AppComponent;
                            }
                            yield this._initAppComponent();
                        });
                    }
                    dispose() {
                        return application_awaiter(this, void 0, void 0, function*() {
                            yield this._pluginManager.runner.dispose();
                        });
                    }
                    _initPlugin() {
                        return application_awaiter(this, void 0, void 0, function*() {
                            yield this._pluginManager.runner.init();
                        });
                    }
                    _initAppContext() {
                        return application_awaiter(this, void 0, void 0, function*() {
                            yield this._pluginManager.runner.appContext(this._context, {
                                router: this._router,
                                req: this._request
                            });
                        });
                    }
                    _initAppComponent() {
                        return application_awaiter(this, void 0, void 0, function*() {
                            this._appComponent = yield this._pluginManager.runner.appComponent(this._appComponent, this._context);
                        });
                    }
                    getPublicAPI() {
                        const self = this;
                        return {
                            get config() {
                                return self._config;
                            },
                            get context() {
                                return self._context;
                            },
                            get router() {
                                return self._router;
                            },
                            get appComponent() {
                                return self._appComponent;
                            },
                            get store() {
                                return self._store;
                            },
                            get error() {
                                return self.error;
                            },
                            setError(err) {
                                self.setError(err);
                            },
                            clearError() {
                                self.clearError();
                            },
                            getLoadersData() {
                                return self.getLoadersData();
                            },
                            setLoadersData(datas) {
                                self.setLoadersData(datas);
                            }
                        };
                    }
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shuvi-app/application.js






                var shuvi_app_application_awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                    var adopt = function adopt(value) {
                        return (0, _instanceof /* default */ .Z)(value, P) ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    };
                    return new(P || (P = Promise))(function(resolve, reject) {
                        var fulfilled = function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var rejected = function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var step = function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        };
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };

                function getPlugins(runtime, pluginRecords) {
                    var plugins = [];
                    var keys = Object.keys(pluginRecords);
                    for (var index = 0; index < keys.length; index++) {
                        var name = keys[index];
                        var plugin = pluginRecords[name];
                        plugins.push([
                            plugin.plugin,
                            plugin.options
                        ]);
                    }
                    var pluginConstructor = {};
                    var methods = [
                        "appComponent",
                        "appContext",
                        "init",
                        "dispose"
                    ];
                    for (var index1 = 0; index1 < methods.length; index1++) {
                        var method = methods[index1];
                        if (typeof runtime[method] === "function") {
                            //@ts-ignore
                            pluginConstructor[method] = runtime[method];
                        }
                    }
                    plugins.push([
                        (0, runtimPlugin /* createRuntimePlugin */ .Sx)(pluginConstructor, {
                            name: "shuvi-user-app"
                        })
                    ]);
                    return plugins;
                }

                function application(options) {
                    var _this = this;
                    var application = new ApplicationImpl(Object.assign(Object.assign({}, options), {
                        getLoaders: function() {
                            return shuvi_app_application_awaiter(_this, void 0, void 0, external_regeneratorRuntime_default().mark(function _callee() {
                                var mod;
                                return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                    while (1) switch (_ctx.prev = _ctx.next) {
                                        case 0:
                                            _ctx.next = 2;
                                            return __webpack_require__.e( /* import() | loaders */ 555).then(__webpack_require__.bind(__webpack_require__, "3bty"));
                                        case 2:
                                            mod = _ctx.sent;
                                            return _ctx.abrupt("return", mod.default || mod);
                                        case 4:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }));
                        },
                        plugins: getPlugins(app, plugins /* pluginRecord */ .S)
                    }));
                    return application;
                };
                if (false) {}

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+router@1.0.61/node_modules/@shuvi/router/esm/index.js + 20 modules
                var router_esm = __webpack_require__("IHx5");
                // EXTERNAL MODULE: ./.shuvi/app/files/routerConfig.js
                var routerConfig = __webpack_require__("EYTL");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/helper/isThirdSite.js
                var THIRD_SITE_REG = /^http(s?)\:\/\//;

                function isThirdSite(url) {
                    return THIRD_SITE_REG.test(url);
                }
                /* harmony default export */
                const helper_isThirdSite = (isThirdSite);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/app/client.js











                var client_awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                    var adopt = function adopt(value) {
                        return (0, _instanceof /* default */ .Z)(value, P) ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    };
                    return new(P || (P = Promise))(function(resolve, reject) {
                        var fulfilled = function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var rejected = function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var step = function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        };
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var client_app;
                var SHUVI_CLIENT_RUN_LOADERS = trace /* CLIENT_RENDER.events.SHUVI_CLIENT_RUN_LOADERS */ ._W.events.SHUVI_CLIENT_RUN_LOADERS;
                var createApp = function(param) {
                    var routes = param.routes,
                        appData = param.appData,
                        appComponent = param.appComponent;
                    // app is a singleton in client side
                    if (client_app) {
                        return client_app;
                    }
                    var appState = appData.appState,
                        ssr = appData.ssr,
                        basename = appData.basename;
                    var history;
                    if (routerConfig /* historyMode */ .M === "hash") {
                        history = (0, router_esm /* createHashHistory */ .q_)({
                            basename: basename
                        });
                    } else {
                        history = (0, router_esm /* createBrowserHistory */ .lX)({
                            basename: basename
                        });
                    }
                    var router = (0, router_esm /* createRouter */ .p7)({
                        history: history,
                        routes: getRoutes(routes)
                    });
                    client_app = application({
                        initialState: appState,
                        AppComponent: appComponent,
                        router: router,
                        config: {
                            ssr: ssr
                        }
                    });
                    var loadersData = client_app.getLoadersData();
                    var hasHydrateData = Object.keys(loadersData).length > 0;
                    var shouldHydrate = !!ssr;
                    router.beforeResolve(function(to, from, next) {
                        return client_awaiter(void 0, void 0, void 0, external_regeneratorRuntime_default().mark(function _callee() {
                            var runLoadersTrace, pageLoaders, matches, loaderContext, loaderDatas, location;
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        if (!shouldHydrate) {
                                            _ctx.next = 4;
                                            break;
                                        }
                                        shouldHydrate = false;
                                        if (hasHydrateData) {
                                            client_app.setLoadersData(loadersData);
                                        }
                                        return _ctx.abrupt("return", next());
                                    case 4:
                                        if (to.matches.length) {
                                            _ctx.next = 8;
                                            break;
                                        }
                                        client_app.setError(constants /* SHUVI_ERROR.PAGE_NOT_FOUND */ .Ce.PAGE_NOT_FOUND);
                                        next();
                                        return _ctx.abrupt("return");
                                    case 8:
                                        runLoadersTrace = client_trace /* clientRenderTrace.traceChild */ .s.traceChild(SHUVI_CLIENT_RUN_LOADERS.name);
                                        _ctx.next = 11;
                                        return client_app.getLoaders();
                                    case 11:
                                        pageLoaders = _ctx.sent;
                                        matches = getRouteMatchesWithInvalidLoader(to, from, pageLoaders);
                                        loaderContext = createLoaderContext({
                                            pathname: to.pathname,
                                            query: to.query,
                                            params: to.params,
                                            getAppContext: function() {
                                                return client_app.context;
                                            }
                                        });
                                        _ctx.prev = 14;
                                        _ctx.next = 17;
                                        return new Promise(function(resolve, reject) {
                                            var value;
                                            var _$error;
                                            var requireNum = 2;
                                            var resolvedNum = 0;
                                            var tryResolve = function() {
                                                if (++resolvedNum === requireNum) {
                                                    if (_$error) {
                                                        reject(_$error);
                                                    } else {
                                                        resolve(value);
                                                    }
                                                }
                                            };
                                            // if preload has error, reject directly
                                            runPreload(to).then(tryResolve).catch(function(err) {
                                                reject(err);
                                            });
                                            runLoaders(matches, pageLoaders, loaderContext).then(function(_value) {
                                                value = _value;
                                                tryResolve();
                                            }).catch(function(err) {
                                                _$error = err;
                                                tryResolve();
                                            });
                                        });
                                    case 17:
                                        loaderDatas = _ctx.sent;
                                        client_app.setLoadersData(loaderDatas);
                                        runLoadersTrace.setAttribute(SHUVI_CLIENT_RUN_LOADERS.attrs.error.name, false);
                                        runLoadersTrace.stop();
                                        _ctx.next = 43;
                                        break;
                                    case 23:
                                        _ctx.prev = 23;
                                        _ctx.t0 = _ctx["catch"](14);
                                        runLoadersTrace.setAttribute(SHUVI_CLIENT_RUN_LOADERS.attrs.error.name, true);
                                        if (!isRedirect(_ctx.t0)) {
                                            _ctx.next = 32;
                                            break;
                                        }
                                        location = _ctx.t0.headers.get("Location");
                                        if (helper_isThirdSite(location)) {
                                            window.location.replace(location);
                                        } else {
                                            next(location);
                                        }
                                        runLoadersTrace.setAttribute(SHUVI_CLIENT_RUN_LOADERS.attrs.errorType.name, "redirect");
                                        runLoadersTrace.stop();
                                        return _ctx.abrupt("return");
                                    case 32:
                                        if (!(isResponse(_ctx.t0) && _ctx.t0.status >= 400 && _ctx.t0.status < 600)) {
                                            _ctx.next = 38;
                                            break;
                                        }
                                        // client error has no status code
                                        client_app.setError({
                                            message: _ctx.t0.statusText,
                                            fatal: _ctx.t0.data.fatal
                                        });
                                        next();
                                        runLoadersTrace.setAttribute(SHUVI_CLIENT_RUN_LOADERS.attrs.errorType.name, "userError");
                                        runLoadersTrace.stop();
                                        return _ctx.abrupt("return");
                                    case 38:
                                        runLoadersTrace.setAttribute(SHUVI_CLIENT_RUN_LOADERS.attrs.errorType.name, "unexpectedError");
                                        runLoadersTrace.stop();
                                        // If loader throws a error, we need to rethrow it
                                        client_app.setError({
                                            message: constants /* SHUVI_ERROR.CLIENT_ERROR.message */ .Ce.CLIENT_ERROR.message,
                                            error: _ctx.t0
                                        });
                                        // to trigger error-overlay at dev
                                        next(function() {
                                            throw _ctx.t0;
                                        });
                                        return _ctx.abrupt("return");
                                    case 43:
                                        next(function() {
                                            client_app.clearError();
                                        });
                                    case 44:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    14,
                                    23
                                ]
                            ]);
                        }));
                    });
                    return client_app;
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/app.js



                // renderer must be imported before application
                // we need to init renderer before import AppComponent






                var app_awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                    var adopt = function adopt(value) {
                        return (0, _instanceof /* default */ .Z)(value, P) ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    };
                    return new(P || (P = Promise))(function(resolve, reject) {
                        var fulfilled = function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var rejected = function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var step = function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        };
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var appData = (0, getAppData /* getAppData */ .$)();
                var app_app = client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_CREATE_APP.name */ .j2.events.SHUVI_CLIENT_CREATE_APP.name).traceFn(function() {
                    return createApp({
                        appComponent: AppComponent,
                        routes: routes /* default */ .Z,
                        appData: appData
                    });
                });
                var app_render = function() {
                    return app_awaiter(void 0, void 0, void 0, external_regeneratorRuntime_default().mark(function _callee() {
                        var appContainer;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    appContainer = document.getElementById(constants /* CLIENT_CONTAINER_ID */ .oU);
                                    _ctx.next = 3;
                                    return clientView.renderApp({
                                        app: app_app.getPublicAPI(),
                                        appData: appData,
                                        appContainer: appContainer
                                    });
                                case 3:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                };
                var run = function() {
                    return app_awaiter(void 0, void 0, void 0, external_regeneratorRuntime_default().mark(function _callee() {
                        var runAppTrace;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    runAppTrace = client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_RUN_APP.name */ .j2.events.SHUVI_CLIENT_RUN_APP.name);
                                    _ctx.next = 3;
                                    return client_trace /* clientEntryTrace.traceChild */ .O.traceChild(trace /* CLIENT_ENTRY.events.SHUVI_CLIENT_APP_INIT.name */ .j2.events.SHUVI_CLIENT_APP_INIT.name).traceAsyncFn(function() {
                                        return app_app.init();
                                    });
                                case 3:
                                    _ctx.next = 5;
                                    return app_render();
                                case 5:
                                    runAppTrace.stop();
                                case 6:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                };

                if (false) {
                    var handleHotUpdate;
                }
                // For e2e test
                if (window.__SHUVI) {
                    window.__SHUVI.router = app_app.router;
                } else {
                    window.__SHUVI = {
                        router: app_app.router
                    };
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/entry/client/run.prod.js
                /// <reference lib="dom" />

                run();


                /***/
            }),

        /***/
        "TUFM":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "O": () => ( /* binding */ clientEntryTrace),
                    /* harmony export */
                    "s": () => ( /* binding */ clientRenderTrace)
                    /* harmony export */
                });
                /* harmony import */
                var _shuvi_service_lib_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f/ii");
                /* harmony import */
                var _shuvi_service_lib_trace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_shuvi_service_lib_trace__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _shuvi_shared_constants_trace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PzE1");


                var clientEntryTrace = (0, _shuvi_service_lib_trace__WEBPACK_IMPORTED_MODULE_0__.trace)(_shuvi_shared_constants_trace__WEBPACK_IMPORTED_MODULE_1__ /* .CLIENT_ENTRY.name */ .j2.name);
                var clientRenderTrace = (0, _shuvi_service_lib_trace__WEBPACK_IMPORTED_MODULE_0__.trace)(_shuvi_shared_constants_trace__WEBPACK_IMPORTED_MODULE_1__ /* .CLIENT_RENDER.name */ ._W.name);


                /***/
            }),

        /***/
        "x9H+":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
                });
                /* harmony import */
                var doura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("H/+l");
                /* harmony import */
                var _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("w0tC");
                /* harmony import */
                var _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2cXD");


                var currentStore;
                var isServer = "object" === "undefined";
                // for client, singleton mode
                // for server, return new store
                var initStore = function(param) {
                    var initialState = param.initialState,
                        ctx = param.ctx;
                    var createStoreInstance = function() {
                        return (0, doura__WEBPACK_IMPORTED_MODULE_0__ /* .doura */ .z7)({
                            initialState: initialState,
                            plugins: false ? 0 : []
                        });
                    };
                    // for server
                    if (isServer) {
                        return createStoreInstance();
                    }
                    // for client is singleton, just init once
                    if (!currentStore) {
                        currentStore = createStoreInstance();
                    }
                    return currentStore;
                };
                /* harmony default export */
                const __WEBPACK_DEFAULT_EXPORT__ = ((0, _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_1__ /* .createRuntimePlugin */ .Sx)({
                    appContext: function(ctx) {
                        var initialState = {};
                        if (!isServer) {
                            initialState = (0, _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_2__ /* .getPageData */ .u)("shuviInitialState", {});
                        }
                        ctx.store = initStore({
                            ctx: ctx,
                            initialState: initialState
                        });
                    }
                }, {
                    name: "model"
                }));


                /***/
            }),

        /***/
        "vVqY":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Z": () => ( /* binding */ dynamic)
                    /* harmony export */
                });
                /* unused harmony export noSSR */
                /* harmony import */
                var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oUqw");
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DTvD");
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */
                var _loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ptDc");



                var isServerSide = "object" === "undefined";

                function noSSR(LoadableInitializer, dynamicOptions) {
                    // Removing webpack and modules means react-loadable won't try preloading
                    delete dynamicOptions.webpack;
                    delete dynamicOptions.modules;
                    // This check is neccesary to prevent react-loadable from initializing on the server
                    if (!isServerSide) {
                        return LoadableInitializer(dynamicOptions);
                    }
                    var Loading = dynamicOptions.loading;
                    // This will only be rendered on the server side
                    return function() {
                        return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loading, {
                            error: null,
                            isLoading: true,
                            pastDelay: false,
                            timedOut: false
                        });
                    };
                }
                /**
                 *  ES2020 [dynamic import()](https://github.com/tc39/proposal-dynamic-import) for JavaScript
                 *
                 * @param dynamicOptions {@link DynamicOptions} | {@link Loader}
                 * @param options {@link DynamicOptions}
                 * @returns React.ComponentType
                 */
                function dynamic(dynamicOptions, options) {
                    var loadableFn = _loadable__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z;
                    var loadableOptions = {
                        // A loading component is not required, so we default it
                        loading: function(param) {
                            var error = param.error,
                                isLoading = param.isLoading,
                                pastDelay = param.pastDelay;
                            if (!pastDelay) return null;
                            if (false) {}
                            return null;
                        }
                    };
                    if (typeof dynamicOptions === "function") {
                        loadableOptions.loader = dynamicOptions;
                        // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
                    } else if (typeof dynamicOptions === "object") {
                        loadableOptions = Object.assign(Object.assign({}, loadableOptions), dynamicOptions);
                    }
                    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
                    loadableOptions = Object.assign(Object.assign({}, loadableOptions), options);
                    if (typeof loadableOptions.ssr === "boolean") {
                        if (!loadableOptions.ssr) {
                            delete loadableOptions.ssr;
                            return noSSR(loadableFn, loadableOptions);
                        }
                        delete loadableOptions.ssr;
                    }
                    return loadableFn(loadableOptions);
                };


                /***/
            }),

        /***/
        "9iJD":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "V": () => ( /* binding */ HeadManagerContext)
                    /* harmony export */
                });
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DTvD");
                /* harmony import */
                var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                var HeadManagerContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);


                /***/
            }),

        /***/
        "tcj6":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "J": () => ( /* binding */ SHUVI_HEAD_ATTRIBUTE),
                    "Z": () => ( /* binding */ head)
                });

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_define_property.mjs
                var _define_property = __webpack_require__("vctd");
                // EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
                var jsx_runtime = __webpack_require__("oUqw");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_assert_this_initialized.mjs
                var _assert_this_initialized = __webpack_require__("3mvU");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_class_call_check.mjs
                var _class_call_check = __webpack_require__("XzXg");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_class.mjs
                var _create_class = __webpack_require__("dhFe");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_inherits.mjs
                var _inherits = __webpack_require__("feER");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_to_consumable_array.mjs + 2 modules
                var _to_consumable_array = __webpack_require__("pE0Y");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_super.mjs + 1 modules
                var _create_super = __webpack_require__("miY+");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/side-effect.jsx






                // Based on https://github.com/zeit/next.js
                // License: https://github.com/zeit/next.js/blob/977bf8d9ebd2845241b8689317f36e4e487f39d0/license.md

                var isServer = "object" === "undefined";
                /* harmony default export */
                function side_effect() {
                    var emitChange = function emitChange(component) {
                        state = component.props.reduceComponentsToState((0, _to_consumable_array /* default */ .Z)(mountedInstances), component.props);
                        if (component.props.handleStateChange) {
                            component.props.handleStateChange(state);
                        }
                    };
                    var mountedInstances = new Set();
                    var state;
                    return /*#__PURE__*/ function(Component) {
                        "use strict";
                        (0, _inherits /* default */ .Z)(_class, Component);
                        var _super = (0, _create_super /* default */ .Z)(_class);

                        function _class(props) {
                            (0, _class_call_check /* default */ .Z)(this, _class);
                            var _this;
                            _this = _super.call(this, props);
                            if (isServer) {
                                mountedInstances.add((0, _assert_this_initialized /* default */ .Z)(_this));
                                emitChange((0, _assert_this_initialized /* default */ .Z)(_this));
                            }
                            return _this;
                        }
                        (0, _create_class /* default */ .Z)(_class, [{
                                key: "componentDidMount",
                                value: function componentDidMount() {
                                    mountedInstances.add(this);
                                    emitChange(this);
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function componentDidUpdate() {
                                    emitChange(this);
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function componentWillUnmount() {
                                    mountedInstances.delete(this);
                                    emitChange(this);
                                }
                            },
                            {
                                key: "render",
                                value: function render() {
                                    return null;
                                }
                            }
                        ], [{
                            key: "rewind",
                            value: // Used when server rendering
                                function rewind() {
                                    var recordedState = state;
                                    state = undefined;
                                    mountedInstances.clear();
                                    return recordedState;
                                }
                        }]);
                        return _class;
                    }(external_React_.Component);
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/head-manager-context.js
                var head_manager_context = __webpack_require__("9iJD");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/head/head.jsx


                // Based on https://github.com/zeit/next.js
                // License: https://github.com/zeit/next.js/blob/977bf8d9ebd2845241b8689317f36e4e487f39d0/license.md



                var SHUVI_HEAD_ATTRIBUTE = "data-shuvi-head";
                var DOMAttributeNames = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                };

                function reactElementToTag(param) {
                    var type = param.type,
                        props = param.props;
                    var tag = {
                        tagName: type,
                        attrs: {}
                    };
                    for (var p in props) {
                        if (!props.hasOwnProperty(p)) continue;
                        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
                        // we don't render undefined props to the DOM
                        if (props[p] === undefined) continue;
                        var attr = DOMAttributeNames[p] || p.toLowerCase();
                        tag.attrs[attr] = props[p];
                    }
                    var children = props.children,
                        dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;
                    if (dangerouslySetInnerHTML) {
                        tag.innerHTML = dangerouslySetInnerHTML.__html || "";
                    } else if (children) {
                        tag.attrs.textContent = typeof children === "string" ? children : children.join("");
                    }
                    return tag;
                }

                function onlyReactElement(list, child) {
                    // React children can be "string" or "number" in this case we ignore them for backwards compat
                    if (typeof child === "string" || typeof child === "number") {
                        return list;
                    }
                    // Adds support for React.Fragment
                    if (child.type === external_React_.Fragment) {
                        return list.concat(external_React_.Children.toArray(child.props.children).reduce(function(fragmentList, fragmentChild) {
                            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                                return fragmentList;
                            }
                            return fragmentList.concat(fragmentChild);
                        }, []));
                    }
                    return list.concat(child);
                }
                var METATYPES = [
                    "name",
                    "httpEquiv",
                    "charSet",
                    "itemProp"
                ];
                /*
                 returns a function for filtering head child elements
                 which shouldn't be duplicated, like <title/>
                 Also adds support for deduplicated `key` properties
                */
                function unique() {
                    var keys = new Set();
                    var tags = new Set();
                    var metaTypes = new Set();
                    var metaCategories = {};
                    return function(h) {
                        var unique = true;
                        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
                            var key = h.key.slice(h.key.indexOf("$") + 1);
                            if (keys.has(key)) {
                                unique = false;
                            } else {
                                keys.add(key);
                            }
                        }
                        // eslint-disable-next-line default-case
                        switch (h.type) {
                            case "title":
                            case "base":
                                if (tags.has(h.type)) {
                                    unique = false;
                                } else {
                                    tags.add(h.type);
                                }
                                break;
                            case "meta":
                                for (var i = 0, len = METATYPES.length; i < len; i++) {
                                    var metatype = METATYPES[i];
                                    if (!h.props.hasOwnProperty(metatype)) continue;
                                    if (metatype === "charSet") {
                                        if (metaTypes.has(metatype)) {
                                            unique = false;
                                        } else {
                                            metaTypes.add(metatype);
                                        }
                                    } else {
                                        var category = h.props[metatype];
                                        var categories = metaCategories[metatype] || new Set();
                                        if (categories.has(category)) {
                                            unique = false;
                                        } else {
                                            categories.add(category);
                                            metaCategories[metatype] = categories;
                                        }
                                    }
                                }
                                break;
                        }
                        return unique;
                    };
                }

                function onlyHeadElement(element) {
                    return typeof element.type === "string";
                }
                /**
                 *
                 * @param headElement List of multiple <Head> instances
                 */
                function reduceComponents(headElements) {
                    return headElements.reduce(function(list, headElement) {
                        var headElementChildren = external_React_.Children.toArray(headElement.props.children);
                        return list.concat(headElementChildren);
                    }, []).reduce(onlyReactElement, []).filter(onlyHeadElement).reverse().filter(unique()).reverse().map(function(e) {
                        var type = e.type,
                            props = e.props;
                        var headElement = {
                            type: type,
                            props: Object.assign(Object.assign({}, props), (0, _define_property /* default */ .Z)({}, SHUVI_HEAD_ATTRIBUTE, "true"))
                        };
                        return reactElementToTag(headElement);
                    });
                }
                var Effect = side_effect();
                /**
                 * This component injects elements to `<head>` of your page.
                 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
                 *
                 * ```ts
                 * import { Head } from "@shuvi/runtime";
                 *
                 * function IndexPage() {
                 *   return (
                 *     <div>
                 *       <Head>
                 *         <title>My page title</title>
                 *         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                 *       </Head>
                 *       <p>Hello world!</p>
                 *    </div>
                 *  );
                 * }
                 *
                 * export default IndexPage;
                 * ```
                 *
                 */
                function Head(param) {
                    var children = param.children;
                    return /*#__PURE__*/ (0, jsx_runtime.jsx)(head_manager_context /* HeadManagerContext.Consumer */ .V.Consumer, {
                        children: function(updateHead) {
                            return /*#__PURE__*/ (0, jsx_runtime.jsx)(Effect, {
                                reduceComponentsToState: reduceComponents,
                                handleStateChange: updateHead,
                                children: children
                            });
                        }
                    });
                }
                Head.rewind = Effect.rewind;
                /* harmony default export */
                const head = (Head);


                /***/
            }),

        /***/
        "ptDc":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Z": () => ( /* binding */ loadable)
                });

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_class_call_check.mjs
                var _class_call_check = __webpack_require__("XzXg");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_create_class.mjs
                var _create_class = __webpack_require__("dhFe");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.1.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
                var shim = __webpack_require__("vvOK");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/loadable/loadable-context.js

                // @ts-ignore for some reason the React types don't like this, but it's correct.
                var LoadableContext = /*#__PURE__*/ external_React_.createContext(null);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/loadable/loadable.js


                // @ts-nocheck
                /**
                @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
                 MIT License
                 Permission is hereby granted, free of charge, to any person obtaining
                a copy of this software and associated documentation files (the
                "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish,
                distribute, sublicense, and/or sell copies of the Software, and to
                permit persons to whom the Software is furnished to do so, subject to
                the following conditions:
                 The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
                 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
                */ // https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
                // Modified to be compatible with webpack 4 / Next.js
                // Modified to be compatible with shuvi.js



                var ALL_INITIALIZERS = [];
                var READY_INITIALIZERS = [];
                var initialized = false;

                function load(loader) {
                    var promise = loader();
                    var state = {
                        loading: true,
                        loaded: null,
                        error: null
                    };
                    state.promise = promise.then(function(loaded) {
                        state.loading = false;
                        state.loaded = loaded;
                        return loaded;
                    }).catch(function(err) {
                        state.loading = false;
                        state.error = err;
                        throw err;
                    });
                    return state;
                }

                function loadMap(obj) {
                    var state = {
                        loading: false,
                        loaded: {},
                        error: null
                    };
                    var promises = [];
                    try {
                        Object.keys(obj).forEach(function(key) {
                            var result = load(obj[key]);
                            if (!result.loading) {
                                state.loaded[key] = result.loaded;
                                state.error = result.error;
                            } else {
                                state.loading = true;
                            }
                            promises.push(result.promise);
                            result.promise.then(function(res) {
                                state.loaded[key] = res;
                            }).catch(function(err) {
                                state.error = err;
                            });
                        });
                    } catch (err) {
                        state.error = err;
                    }
                    state.promise = Promise.all(promises).then(function(res) {
                        state.loading = false;
                        return res;
                    }).catch(function(err) {
                        state.loading = false;
                        throw err;
                    });
                    return state;
                }

                function resolve(obj) {
                    return obj && obj.__esModule ? obj.default : obj;
                }

                function createLoadableComponent(loadFn, options) {
                    var init = function init() {
                        if (!subscription) {
                            var sub = new LoadableSubscription(loadFn, opts);
                            subscription = {
                                getCurrentValue: sub.getCurrentValue.bind(sub),
                                subscribe: sub.subscribe.bind(sub),
                                retry: sub.retry.bind(sub),
                                promise: sub.promise.bind(sub)
                            };
                        }
                        return subscription.promise();
                    };
                    var opts = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null
                    }, options);
                    var subscription = null;
                    // Server only
                    if (false) {}
                    // Client only
                    if (!initialized && "object" !== "undefined" && typeof opts.webpack === "function") {
                        var moduleIds = opts.webpack();
                        READY_INITIALIZERS.push(function(ids) {
                            var _iteratorNormalCompletion = true,
                                _didIteratorError = false,
                                _iteratorError = undefined;
                            try {
                                for (var _iterator = moduleIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var moduleId = _step.value;
                                    if (ids.indexOf(moduleId) !== -1) {
                                        return init();
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        });
                    }
                    var LoadableComponent = /*#__PURE__*/ external_React_.forwardRef(function(props, ref) {
                        init();
                        var context = external_React_.useContext(LoadableContext);
                        var state = (0, shim.useSyncExternalStore)(subscription.subscribe, subscription.getCurrentValue, subscription.getCurrentValue);
                        external_React_.useImperativeHandle(ref, function() {
                            return {
                                retry: subscription.retry
                            };
                        }, []);
                        if (context && Array.isArray(opts.modules)) {
                            opts.modules.forEach(function(moduleName) {
                                context(moduleName);
                            });
                        }
                        return external_React_.useMemo(function() {
                            if (state.loading || state.error) {
                                return /*#__PURE__*/ external_React_.createElement(opts.loading, {
                                    isLoading: state.loading,
                                    pastDelay: state.pastDelay,
                                    timedOut: state.timedOut,
                                    error: state.error,
                                    retry: subscription.retry
                                });
                            } else if (state.loaded) {
                                return /*#__PURE__*/ external_React_.createElement(resolve(state.loaded), props);
                            } else {
                                return null;
                            }
                        }, [
                            props,
                            state
                        ]);
                    });
                    LoadableComponent.preload = function() {
                        return init();
                    };
                    LoadableComponent.displayName = "LoadableComponent";
                    return LoadableComponent;
                }
                var LoadableSubscription = /*#__PURE__*/ function() {
                    "use strict";

                    function LoadableSubscription(loadFn, opts) {
                        (0, _class_call_check /* default */ .Z)(this, LoadableSubscription);
                        this._loadFn = loadFn;
                        this._opts = opts;
                        this._callbacks = new Set();
                        this._delay = null;
                        this._timeout = null;
                        this.retry();
                    }
                    (0, _create_class /* default */ .Z)(LoadableSubscription, [{
                            key: "promise",
                            value: function promise() {
                                return this._res.promise;
                            }
                        },
                        {
                            key: "retry",
                            value: function retry() {
                                var _this = this;
                                this._clearTimeouts();
                                this._res = this._loadFn(this._opts.loader);
                                this._state = {
                                    pastDelay: false,
                                    timedOut: false
                                };
                                var ref = this,
                                    res = ref._res,
                                    opts = ref._opts;
                                if (res.loading) {
                                    if (typeof opts.delay === "number") {
                                        if (opts.delay === 0) {
                                            this._state.pastDelay = true;
                                        } else {
                                            this._delay = setTimeout(function() {
                                                _this._update({
                                                    pastDelay: true
                                                });
                                            }, opts.delay);
                                        }
                                    }
                                    if (typeof opts.timeout === "number") {
                                        this._timeout = setTimeout(function() {
                                            _this._update({
                                                timedOut: true
                                            });
                                        }, opts.timeout);
                                    }
                                }
                                this._res.promise.then(function() {
                                    _this._update({});
                                    _this._clearTimeouts();
                                }).catch(function(_err) {
                                    _this._update({});
                                    _this._clearTimeouts();
                                });
                                this._update({});
                            }
                        },
                        {
                            key: "_update",
                            value: function _update(partial) {
                                this._state = Object.assign(Object.assign(Object.assign({}, this._state), {
                                    error: this._res.error,
                                    loaded: this._res.loaded,
                                    loading: this._res.loading
                                }), partial);
                                this._callbacks.forEach(function(callback) {
                                    return callback();
                                });
                            }
                        },
                        {
                            key: "_clearTimeouts",
                            value: function _clearTimeouts() {
                                clearTimeout(this._delay);
                                clearTimeout(this._timeout);
                            }
                        },
                        {
                            key: "getCurrentValue",
                            value: function getCurrentValue() {
                                return this._state;
                            }
                        },
                        {
                            key: "subscribe",
                            value: function subscribe(callback) {
                                var _this = this;
                                this._callbacks.add(callback);
                                return function() {
                                    _this._callbacks.delete(callback);
                                };
                            }
                        }
                    ]);
                    return LoadableSubscription;
                }();

                function Loadable(opts) {
                    return createLoadableComponent(load, opts);
                }

                function flushInitializers(initializers, ids) {
                    var promises = [];
                    while (initializers.length) {
                        var init = initializers.pop();
                        promises.push(init(ids));
                    }
                    return Promise.all(promises).then(function() {
                        if (initializers.length) {
                            return flushInitializers(initializers, ids);
                        }
                    });
                }
                Loadable.preloadAll = function() {
                    return new Promise(function(resolveInitializers, reject) {
                        flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
                    });
                };
                Loadable.preloadReady = function() {
                    var ids = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                    return new Promise(function(resolvePreload) {
                        var res = function() {
                            initialized = true;
                            return resolvePreload();
                        };
                        // We always will resolve, errors should be handled within loading UIs.
                        flushInitializers(READY_INITIALIZERS, ids).then(res, res);
                    });
                };
                /* harmony default export */
                const loadable = (Loadable);


                /***/
            }),

        /***/
        "4BiD":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "Z": () => ( /* binding */ runtime)
                });

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_instanceof.mjs
                var _instanceof = __webpack_require__("jNo/");
                // EXTERNAL MODULE: external "regeneratorRuntime"
                var external_regeneratorRuntime_ = __webpack_require__("Pz56");
                var external_regeneratorRuntime_default = /*#__PURE__*/ __webpack_require__.n(external_regeneratorRuntime_);
                // EXTERNAL MODULE: ./node_modules/.pnpm/@shuvi+platform-shared@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1/node_modules/@shuvi/platform-shared/esm/shared/runtimPlugin.js + 5 modules
                var runtimPlugin = __webpack_require__("w0tC");
                // EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
                var jsx_runtime = __webpack_require__("oUqw");
                // EXTERNAL MODULE: external "React"
                var external_React_ = __webpack_require__("DTvD");
                // EXTERNAL MODULE: ./node_modules/.pnpm/react-doura@0.0.13_doura@0.0.13_react-dom@18.2.0_react@18.2.0/node_modules/react-doura/dist/react-doura.esm-bundler.js
                var react_doura_esm_bundler = __webpack_require__("+3QZ");; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/model/Wrapper.jsx



                var DouraWrapper = function(App, appContext) {
                    var DouraAppWrapper = function DouraAppWrapper() {
                        return /*#__PURE__*/ (0, jsx_runtime.jsx)(react_doura_esm_bundler /* DouraRoot */ .To, {
                            store: appContext.store,
                            children: /*#__PURE__*/ (0, jsx_runtime.jsx)(App, {})
                        });
                    };
                    DouraAppWrapper.displayName = "DouraAppWrapper";
                    return DouraAppWrapper;
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@shuvi+platform-web@1.0.61_@shuvi+service@1.0.61_@swc+core@1.3.96_sass@1.50.1_webpack@5.97.1/node_modules/@shuvi/platform-web/esm/shuvi-app/react/model/runtime.js




                var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                    var adopt = function adopt(value) {
                        return (0, _instanceof /* default */ .Z)(value, P) ? value : new P(function(resolve) {
                            resolve(value);
                        });
                    };
                    return new(P || (P = Promise))(function(resolve, reject) {
                        var fulfilled = function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var rejected = function rejected(value) {
                            try {
                                step(generator["throw"](value));
                            } catch (e) {
                                reject(e);
                            }
                        };
                        var step = function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                        };
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                // this needs to be run last
                /* harmony default export */
                const runtime = ((0, runtimPlugin /* createRuntimePluginAfter */ .Z_)({
                    appComponent: function(App, appContext) {
                        return __awaiter(void 0, void 0, void 0, external_regeneratorRuntime_default().mark(function _callee() {
                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                while (1) switch (_ctx.prev = _ctx.next) {
                                    case 0:
                                        return _ctx.abrupt("return", DouraWrapper(App, {
                                            store: appContext.store
                                        }));
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                    }
                }, {
                    name: "model-react"
                }));


                /***/
            }),

        /***/
        "7XQW":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "RJ": () => ( /* binding */ useSharedModel),
                    /* harmony export */
                    "uh": () => ( /* binding */ useStaticModel),
                    /* harmony export */
                    "zt": () => ( /* binding */ Provider)
                    /* harmony export */
                });
                /* harmony import */
                var react_doura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+3QZ");

                var ref = (0, react_doura__WEBPACK_IMPORTED_MODULE_0__ /* .createContainer */ .fH)(),
                    Provider = ref.Provider,
                    useSharedModel = ref.useSharedModel,
                    useStaticModel = ref.useStaticModel;



                /***/
            }),

        /***/
        "ZIfk":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "O": () => ( /* binding */ useLoaderData)
                    /* harmony export */
                });
                /* harmony import */
                var _shuvi_router_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("waGQ");
                /* harmony import */
                var _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8anA");
                /* harmony import */
                var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7XQW");



                var hasOwn = Object.prototype.hasOwnProperty;
                var useLoaderData = function() {
                    var currentMatch = (0, _shuvi_router_react__WEBPACK_IMPORTED_MODULE_0__ /* .useMatchedRoute */ .MZ)();
                    var id = currentMatch.route.id;
                    // we don't need to watch the model change, cause it always change with
                    // matched route
                    var loaderData = (0, _store__WEBPACK_IMPORTED_MODULE_1__ /* .useStaticModel */ .uh)(_shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_2__ /* .loaderModelName */ .Y, _shuvi_platform_shared_shared__WEBPACK_IMPORTED_MODULE_2__ /* .loaderModel */ .y);
                    if (!hasOwn.call(loaderData.dataByRouteId, id)) {
                        throw Error('Loader data not found for route "'.concat(currentMatch.route.path, '". Please make sure the page component where `useLoaderData` is called has a `loader` export.'));
                    }
                    return loaderData.dataByRouteId[id];
                };


                /***/
            }),

        /***/
        "yF48":
            /***/
            ((__unused_webpack_module, exports) => {

                var __webpack_unused_export__;

                __webpack_unused_export__ = ({
                    value: true
                });
                exports.f = createDefer;

                function createDefer() {
                    let defer = {
                        resolve: null,
                        reject: null,
                        status: 'pending'
                    };
                    defer.promise = new Promise((resolve, reject) => {
                        defer.resolve = (value) => {
                            resolve(value);
                            defer.status = 'fulfilled';
                        };
                        defer.reject = (value) => {
                            reject(value);
                            defer.status = 'rejected';
                        };
                    });
                    return defer;
                }


                /***/
            }),

        /***/
        "6R7B":
            /***/
            (function(__unused_webpack_module, exports, __webpack_require__) {


                var __importDefault = (this && this.__importDefault) || function(mod) {
                    return (mod && mod.__esModule) ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                const tiny_invariant_1 = __importDefault(__webpack_require__("ube5"));
                exports["default"] = tiny_invariant_1.default;


                /***/
            }),

        /***/
        "fazP":
            /***/
            ((__unused_webpack_module, exports) => {

                var __webpack_unused_export__;

                __webpack_unused_export__ = ({
                    value: true
                });
                /*!
                 * Check if two objects or arrays are equal
                 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
                 * @param  {*}       obj1 The first item
                 * @param  {*}       obj2 The second item
                 * @return {Boolean}       Returns true if they're equal in value
                 */
                function isEqual(obj1, obj2) {
                    /**
                     * More accurately check the type of a JavaScript object
                     * @param  {Object} obj The object
                     * @return {String}     The object type
                     */
                    function getType(obj) {
                        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
                    }

                    function areArraysEqual() {
                        // Check length
                        if (obj1.length !== obj2.length)
                            return false;
                        // Check each item in the array
                        for (let i = 0; i < obj1.length; i++) {
                            if (!isEqual(obj1[i], obj2[i]))
                                return false;
                        }
                        // If no errors, return true
                        return true;
                    }

                    function areObjectsEqual() {
                        if (Object.keys(obj1).length !== Object.keys(obj2).length)
                            return false;
                        // Check each item in the object
                        for (let key in obj1) {
                            if (Object.prototype.hasOwnProperty.call(obj1, key)) {
                                if (!isEqual(obj1[key], obj2[key]))
                                    return false;
                            }
                        }
                        // If no errors, return true
                        return true;
                    }

                    function areFunctionsEqual() {
                        return obj1.toString() === obj2.toString();
                    }

                    function arePrimativesEqual() {
                        return obj1 === obj2;
                    }
                    // Get the object type
                    let type = getType(obj1);
                    // If the two items are not the same type, return false
                    if (type !== getType(obj2))
                        return false;
                    // Compare based on type
                    if (type === 'array')
                        return areArraysEqual();
                    if (type === 'object')
                        return areObjectsEqual();
                    if (type === 'function')
                        return areFunctionsEqual();
                    return arePrimativesEqual();
                }
                exports.Z = isEqual;


                /***/
            }),

        /***/
        "WmP1":
            /***/
            ((__unused_webpack_module, exports) => {


                Object.defineProperty(exports, "X", ({
                    value: true
                }));


                /***/
            }),

        /***/
        "hw1S":
            /***/
            ((__unused_webpack_module, exports) => {

                var __webpack_unused_export__;

                __webpack_unused_export__ = ({
                    value: true
                });
                exports.Z = null;


                /***/
            }),

        /***/
        "H/+l":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "Gn": () => ( /* binding */ defineModel),
                    /* harmony export */
                    "Xl": () => ( /* binding */ markRaw),
                    /* harmony export */
                    "z7": () => ( /* binding */ doura)
                    /* harmony export */
                });
                /* unused harmony exports NOOP, assign, def, devtool, draft, each, emptyArray, emptyObject, hasOwn, invariant, is, isArray, isFunction, isIntegerKey, isMap, isObject, isPlainObject, isSet, isString, isSymbol, nextTick, objectToString, ownKeys, set, shallowCopy, snapshot, toRawType, toTypeString, use */
                const NOOP = () => {
                    // do nothing
                };
                const emptyObject = Object.create(null);
                const emptyArray = [];
                const assign = Object.assign;
                const hasOwnProperty = Object.prototype.hasOwnProperty;
                const hasOwn = (val, key) => hasOwnProperty.call(val, key);
                const objectToString = Object.prototype.toString;
                const toTypeString = (value) => objectToString.call(value);
                const isArray = Array.isArray;
                const isMap = (val) => toTypeString(val) === '[object Map]';
                const isSet = (val) => toTypeString(val) === '[object Set]';
                const isFunction = (val) => typeof val === 'function';
                const isString = (val) => typeof val === 'string';
                const isSymbol = (val) => typeof val === 'symbol';
                const isObject = (val) => val !== null && typeof val === 'object';
                const toRawType = (value) => {
                    // extract "RawType" from strings like "[object RawType]"
                    return toTypeString(value).slice(8, -1);
                };
                const isPlainObject = (val) => toTypeString(val) === '[object Object]';
                const isIntegerKey = (key) => isString(key) &&
                    key !== 'NaN' &&
                    key[0] !== '-' &&
                    '' + parseInt(key, 10) === key;
                // compare whether a value has changed, accounting for NaN.
                const is = (value, oldValue) => Object.is(value, oldValue);
                const def = (obj, key, value) => {
                    Object.defineProperty(obj, key, {
                        configurable: true,
                        enumerable: false,
                        value,
                    });
                };

                function invariant(condition, message) {
                    if (condition) {
                        return;
                    }
                    // Condition not passed
                    // When not in production we allow the message to pass through
                    // *This block will be removed in production builds*
                    throw new Error(`[Doura] ${message || ''}`);
                }
                const slice = Array.prototype.slice;

                function strictCopy(base) {
                    const descriptors = Object.getOwnPropertyDescriptors(base);
                    const keys = ownKeys$1(descriptors);
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        const desc = descriptors[key];
                        if (desc.writable === false) {
                            desc.writable = true;
                            desc.configurable = true;
                        }
                        // like object.assign, we will read any _own_, get/set accessors. This helps in dealing
                        // with libraries that trap values, like mobx or vue
                        // unlike object.assign, non-enumerables will be copied as well
                        if (desc.get || desc.set)
                            descriptors[key] = {
                                configurable: true,
                                writable: true,
                                enumerable: desc.enumerable,
                                value: base[key],
                            };
                    }
                    return Object.create(Object.getPrototypeOf(base), descriptors);
                }
                const isEnumerable = Object.prototype.propertyIsEnumerable;
                // For best performance with shallow copies,
                // don't use `Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));` by default.
                function quickCopyObj(base) {
                    const copy = {};
                    const keys = ownKeys$1(base);
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        const target = base[key];
                        if (isEnumerable.call(base, key)) {
                            copy[key] = target;
                        } else {
                            Object.defineProperty(copy, key, {
                                configurable: true,
                                writable: true,
                                enumerable: false,
                                value: target,
                            });
                        }
                    }
                    return copy;
                }

                function shallowCopy(base) {
                    if (Array.isArray(base))
                        return slice.call(base);
                    if (isMap(base))
                        return new Map(base);
                    if (isSet(base))
                        return new Set(base);
                    if (Object.getPrototypeOf(base) === Object.prototype) {
                        return quickCopyObj(base);
                    }
                    return strictCopy(base);
                }
                const ownKeys$1 = typeof Reflect !== 'undefined' && Reflect.ownKeys ?
                    Reflect.ownKeys :
                    typeof Object.getOwnPropertySymbols !== 'undefined' ?
                    (obj) => Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)) :
                    /* istanbul ignore next */ Object.getOwnPropertyNames;

                function each(obj, iter, enumerableOnly = false) {
                    if (isPlainObject(obj)) {
                        (enumerableOnly ? Object.keys : ownKeys$1)(obj).forEach((key) => {
                            if (!enumerableOnly || typeof key !== 'symbol')
                                iter(key, obj[key], obj);
                        });
                    } else {
                        obj.forEach((entry, index) => iter(index, entry, obj));
                    }
                }

                function set$3(thing, propOrOldValue, value) {
                    if (isMap(thing))
                        thing.set(propOrOldValue, value);
                    else if (isSet(thing)) {
                        thing.delete(propOrOldValue);
                        thing.add(value);
                    } else
                        thing[propOrOldValue] = value;
                }

                const defineModel = (modelOptions) => {
                    return modelOptions;
                };

                function warn(msg, ...args) {
                    console.warn(`[Doura warn] ${msg}`, ...args);
                }

                function getTargetType(value) {
                    switch (toRawType(value)) {
                        case 'Object':
                            return 1 /* TargetType.COMMON */ ;
                        case 'Array':
                            return 2 /* TargetType.ARRAY */ ;
                        case 'Set':
                            return 3 /* TargetType.SET */ ;
                        case 'Map':
                            return 4 /* TargetType.MAP */ ;
                        default:
                            return 0 /* TargetType.INVALID */ ;
                    }
                }

                function markRaw(value) {
                    def(value, "__r_skip" /* ReactiveFlags.SKIP */ , true);
                    return value;
                }

                function isDraft(value) {
                    return !!value && !!value["__r_state" /* ReactiveFlags.STATE */ ];
                }

                function toBase(observed) {
                    const raw = toState(observed);
                    return raw ? toBase(raw.base) : observed;
                }

                function isModified(draft) {
                    return draft["__r_state" /* ReactiveFlags.STATE */ ].modified;
                }

                function toState(observed) {
                    return observed && observed["__r_state" /* ReactiveFlags.STATE */ ];
                }

                function latest(state) {
                    return state.copy || state.base;
                }

                function markUnchanged(draft) {
                    const state = draft["__r_state" /* ReactiveFlags.STATE */ ];
                    if (state) {
                        state.modified = false;
                    }
                }

                function markChanged(state) {
                    if (!state.modified) {
                        state.modified = true;
                        if (state.parent) {
                            markChanged(state.parent);
                        }
                    }
                }

                let activeEffectScope;
                class EffectScope {
                    constructor(detached = false) {
                        /**
                         * @internal
                         */
                        this.active = true;
                        /**
                         * @internal
                         */
                        this.effects = [];
                        /**
                         * @internal
                         */
                        this.cleanups = [];
                        if (!detached && activeEffectScope) {
                            this.parent = activeEffectScope;
                            this.index =
                                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
                        }
                    }
                    run(fn) {
                        if (this.active) {
                            const currentEffectScope = activeEffectScope;
                            try {
                                activeEffectScope = this;
                                return fn();
                            } finally {
                                activeEffectScope = currentEffectScope;
                            }
                        } else if ((false)) {}
                    }
                    /**
                     * This should only be called on non-detached scopes
                     * @internal
                     */
                    on() {
                        activeEffectScope = this;
                    }
                    /**
                     * This should only be called on non-detached scopes
                     * @internal
                     */
                    off() {
                        activeEffectScope = this.parent;
                    }
                    stop(fromParent) {
                        if (this.active) {
                            let i, l;
                            for (i = 0, l = this.effects.length; i < l; i++) {
                                this.effects[i].stop();
                            }
                            for (i = 0, l = this.cleanups.length; i < l; i++) {
                                this.cleanups[i]();
                            }
                            if (this.scopes) {
                                for (i = 0, l = this.scopes.length; i < l; i++) {
                                    this.scopes[i].stop(true);
                                }
                            }
                            // nested scope, dereference from parent to avoid memory leaks
                            if (this.parent && !fromParent) {
                                // optimized O(1) removal
                                const last = this.parent.scopes.pop();
                                if (last && last !== this) {
                                    this.parent.scopes[this.index] = last;
                                    last.index = this.index;
                                }
                            }
                            this.active = false;
                        }
                    }
                }

                function effectScope(detached) {
                    return new EffectScope(detached);
                }

                function recordEffectScope(effect, scope = activeEffectScope) {
                    if (scope && scope.active) {
                        scope.effects.push(effect);
                    }
                }

                const createDep = (effects) => {
                    const dep = new Set(effects);
                    dep.w = 0;
                    dep.n = 0;
                    return dep;
                };
                const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
                const newTracked = (dep) => (dep.n & trackOpBit) > 0;
                const initDepMarkers = ({
                    deps
                }) => {
                    if (deps.length) {
                        for (let i = 0; i < deps.length; i++) {
                            deps[i].w |= trackOpBit; // set was tracked
                        }
                    }
                };
                const finalizeDepMarkers = (effect) => {
                    const {
                        deps
                    } = effect;
                    if (deps.length) {
                        let ptr = 0;
                        for (let i = 0; i < deps.length; i++) {
                            const dep = deps[i];
                            if (wasTracked(dep) && !newTracked(dep)) {
                                dep.delete(effect);
                            } else {
                                deps[ptr++] = dep;
                            }
                            // clear bits
                            dep.w &= ~trackOpBit;
                            dep.n &= ~trackOpBit;
                        }
                        deps.length = ptr;
                    }
                };

                const targetMap = new WeakMap();
                const referenceMap = new WeakMap();
                // The number of effects currently being tracked recursively.
                let effectTrackDepth = 0;
                let trackOpBit = 1;
                /**
                 * The bitwise track markers support at most 30 levels of recursion.
                 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
                 * When recursion depth is greater, fall back to using a full cleanup.
                 */
                const maxMarkerBits = 30;
                let activeEffect;
                const ITERATE_KEY = Symbol((false) ? 0 : '');
                const MAP_KEY_ITERATE_KEY = Symbol((false) ? 0 : '');
                let uid$1 = 0;
                class ReactiveEffect {
                    constructor(fn, scheduler = null, scope) {
                        this.fn = fn;
                        this.scheduler = scheduler;
                        this.id = uid$1++;
                        this.deps = [];
                        this.active = true;
                        this.parent = undefined;
                        recordEffectScope(this, scope);
                    }
                    run() {
                        if (!this.active) {
                            return this.fn();
                        }
                        let parent = activeEffect;
                        const lastShouldTrack = shouldTrack;
                        while (parent) {
                            if (parent === this) {
                                return;
                            }
                            parent = parent.parent;
                        }
                        try {
                            this.parent = activeEffect;
                            activeEffect = this;
                            shouldTrack = true;
                            trackOpBit = 1 << ++effectTrackDepth;
                            if (effectTrackDepth <= maxMarkerBits) {
                                initDepMarkers(this);
                            } else {
                                cleanupEffect(this);
                            }
                            return this.fn();
                        } finally {
                            if (effectTrackDepth <= maxMarkerBits) {
                                finalizeDepMarkers(this);
                            }
                            trackOpBit = 1 << --effectTrackDepth;
                            activeEffect = this.parent;
                            shouldTrack = lastShouldTrack;
                            this.parent = undefined;
                            if (this.deferStop) {
                                this.stop();
                            }
                        }
                    }
                    stop() {
                        // stopped while running itself - defer the cleanup
                        if (activeEffect === this) {
                            this.deferStop = true;
                        } else if (this.active) {
                            cleanupEffect(this);
                            if (this.onStop) {
                                this.onStop();
                            }
                            this.active = false;
                        }
                    }
                }

                function cleanupEffect(effect) {
                    const {
                        deps
                    } = effect;
                    if (deps.length) {
                        for (let i = 0; i < deps.length; i++) {
                            deps[i].delete(effect);
                        }
                        deps.length = 0;
                    }
                }
                let shouldTrack = true;
                const trackStack = [];

                function pauseTracking() {
                    trackStack.push(shouldTrack);
                    shouldTrack = false;
                }

                function resetTracking() {
                    const last = trackStack.pop();
                    shouldTrack = last === undefined ? true : last;
                }

                function track(target, type, key) {
                    if (shouldTrack && activeEffect) {
                        let depsMap = targetMap.get(target);
                        if (!depsMap) {
                            targetMap.set(target, (depsMap = new Map()));
                        }
                        let dep = depsMap.get(key);
                        if (!dep) {
                            depsMap.set(key, (dep = createDep()));
                        }
                        trackEffects(dep);
                    }
                }

                function trackDraft(target) {
                    if (shouldTrack && activeEffect) {
                        const state = target["__r_state" /* ReactiveFlags.STATE */ ];
                        if (!state) {
                            return;
                        }
                        let dep = referenceMap.get(state);
                        if (!dep) {
                            referenceMap.set(state, (dep = createDep()));
                        }
                        trackEffects(dep);
                    }
                }

                function trackEffects(dep) {
                    let shouldTrack = false;
                    if (effectTrackDepth <= maxMarkerBits) {
                        if (!newTracked(dep)) {
                            dep.n |= trackOpBit; // set newly tracked
                            shouldTrack = !wasTracked(dep);
                        }
                    } else {
                        // Full cleanup mode.
                        shouldTrack = !dep.has(activeEffect);
                    }
                    if (shouldTrack) {
                        dep.add(activeEffect);
                        activeEffect.deps.push(dep);
                    }
                }

                function trackView(view) {
                    if (shouldTrack && activeEffect) {
                        view = toBase(view);
                        trackEffects(view.dep || (view.dep = createDep()));
                    }
                }

                function triggerView(view) {
                    view = toBase(view);
                    if (view.dep) {
                        triggerEffects(view.dep);
                    }
                }

                function triggerDraftChange(state) {
                    const referenceDeps = referenceMap.get(state);
                    if (referenceDeps) {
                        const effects = [...referenceDeps];
                        for (const effect of effects) {
                            if (effect.view) {
                                effect.view.mightChange = true;
                            }
                        }
                    }
                }

                function triggerDraft(state) {
                    let current = state;
                    while (current) {
                        triggerDraftChange(current);
                        current = current.parent;
                    }
                }

                function trigger(state, type, key, newValue, _oldValue) {
                    var _a;
                    const depsMap = targetMap.get(state);
                    const target = state.base;
                    let deps = [];
                    if (depsMap) {
                        if (type === "clear" /* TriggerOpTypes.CLEAR */ ) {
                            // collection being cleared
                            // trigger all effects for target
                            deps = [...depsMap.values()];
                        } else if (key === 'length' && isArray(target)) {
                            depsMap.forEach((dep, key) => {
                                if (key === 'length' || key >= newValue) {
                                    deps.push(dep);
                                }
                            });
                        } else {
                            // schedule runs for SET | ADD | DELETE
                            if (key !== void 0) {
                                deps.push(depsMap.get(key));
                            }
                            // also run for iteration key on ADD | DELETE | Map.SET
                            switch (type) {
                                case "add" /* TriggerOpTypes.ADD */ :
                                    if (!isArray(target)) {
                                        deps.push(depsMap.get(ITERATE_KEY));
                                        if (isMap(target)) {
                                            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                                        }
                                    } else if (isIntegerKey(key)) {
                                        // new index added to array -> length changes
                                        deps.push(depsMap.get('length'));
                                    }
                                    break;
                                case "delete" /* TriggerOpTypes.DELETE */ :
                                    if (!isArray(target)) {
                                        deps.push(depsMap.get(ITERATE_KEY));
                                        if (isMap(target)) {
                                            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                                        }
                                    }
                                    break;
                                case "set" /* TriggerOpTypes.SET */ :
                                    if (isMap(target)) {
                                        deps.push(depsMap.get(ITERATE_KEY));
                                    }
                                    break;
                            }
                        }
                    }
                    if (deps.length === 1) {
                        if (deps[0]) {
                            triggerEffects(deps[0]);
                        }
                    } else {
                        const effects = [];
                        for (const dep of deps) {
                            if (dep) {
                                effects.push(...dep);
                            }
                        }
                        triggerEffects(createDep(effects));
                    }
                    // trigger draft listeners
                    const listeners = (_a = state.root) === null || _a === void 0 ? void 0 : _a.listeners;
                    if (listeners && listeners.length) {
                        listeners.forEach((listener) => listener());
                    }
                }

                function triggerEffects(dep) {
                    // spread into array for stabilization
                    const effects = isArray(dep) ? dep : [...dep];
                    for (const effect of effects) {
                        if (effect.view) {
                            triggerEffect(effect);
                        }
                    }
                    for (const effect of effects) {
                        if (!effect.view) {
                            triggerEffect(effect);
                        }
                    }
                }

                function triggerEffect(effect) {
                    if (effect !== activeEffect || effect.allowRecurse) {
                        if (effect.scheduler) {
                            effect.scheduler();
                        } else {
                            effect.run();
                        }
                    }
                }

                // export type onViewInvalidate = (fn: () => void) => () => void
                class ViewImpl {
                    constructor(getter, {
                        disableCache = false
                    }) {
                        this.dep = undefined;
                        this.mightChange = false;
                        this.dirty = true;
                        this.effect = new ReactiveEffect(getter, () => {
                            if (!this.dirty) {
                                this.dirty = true;
                                triggerView(this);
                            }
                        });
                        this.effect.view = this;
                        this.effect.active = this._cacheable = !disableCache;
                    }
                    get value() {
                        // the view may get wrapped by other proxies e.g. readonly()
                        const self = toBase(this);
                        trackView(self);
                        if (self.dirty || !self._cacheable) {
                            self.dirty = false;
                            self._value = self.effect.run();
                        }
                        return self._value;
                    }
                    set value(_newValue) {
                        if ((false)) {}
                    }
                }

                function view(getter, options = {}) {
                    const cRef = new ViewImpl(getter, options);
                    return cRef;
                }

                const isNonTrackableKeys = new Set([`__proto__`]);
                const builtInSymbols = new Set(
                    /*#__PURE__*/
                    Object.getOwnPropertyNames(Symbol)
                    // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
                    // but accessing them on Symbol leads to TypeError because Symbol is a strict mode
                    // function
                    .filter((key) => key !== 'arguments' && key !== 'caller')
                    .map((key) => Symbol[key])
                    .filter(isSymbol));

                function prepareCopy$1(state) {
                    if (!state.copy) {
                        state.copy = shallowCopy(state.base);
                    }
                }
                // Access a property without creating a proxy.
                function peek(obj, prop) {
                    const state = obj["__r_state" /* ReactiveFlags.STATE */ ];
                    const source = state ? latest(state) : obj;
                    return source[prop];
                }
                const get$1 = /*#__PURE__*/ createGetter$1();
                const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();

                function createArrayInstrumentations() {
                    const instrumentations = {};
                    ['includes', 'indexOf', 'lastIndexOf'].forEach((key) => {
                        instrumentations[key] = function(...args) {
                            const state = toState(this);
                            const arr = latest(state);
                            for (let i = 0, l = this.length; i < l; i++) {
                                track(state, "get" /* TrackOpTypes.GET */ , i + '');
                            }
                            // we run the method using the original args first (which may be reactive)
                            const res = arr[key](...args);
                            if (res === -1 || res === false) {
                                // if that didn't work, run it again using raw values.
                                return arr[key](...args.map(toBase));
                            } else {
                                return res;
                            }
                        };
                    });
                    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((key) => {
                        instrumentations[key] = function(...args) {
                            pauseTracking();
                            const state = toState(this);
                            const target = latest(state);
                            const res = target[key].apply(this, args);
                            resetTracking();
                            return res;
                        };
                    });
                    return instrumentations;
                }

                function createGetter$1() {
                    return function get(state, prop, receiver) {
                        const target = latest(state);
                        if (prop === "__r_isReactive" /* ReactiveFlags.IS_REACTIVE */ ) {
                            return true;
                        } else if (prop === "__r_state" /* ReactiveFlags.STATE */ &&
                            receiver === draftMap.get(state)) {
                            return state;
                        }
                        const targetIsArray = isArray(target);
                        if (targetIsArray && hasOwn(arrayInstrumentations, prop)) {
                            return Reflect.get(arrayInstrumentations, prop, receiver);
                        }
                        let value = Reflect.get(target, prop, receiver);
                        if (isSymbol(prop) ? builtInSymbols.has(prop) : isNonTrackableKeys.has(prop)) {
                            return value;
                        }
                        track(state, "get" /* TrackOpTypes.GET */ , prop);
                        if (!hasOwn(target, prop)) {
                            // non-existing or non-own property...
                            return value;
                        }
                        if (state.disposed || !isObject(value)) {
                            return value;
                        }
                        if (!isDraft(value)) {
                            prepareCopy$1(state);
                            value = state.copy[prop] = draft(value, state);
                        }
                        trackDraft(value);
                        return value;
                    };
                }
                const set$2 = /*#__PURE__*/ createSetter();

                function createSetter() {
                    return function set(state, prop /* strictly not, but helps TS */ , value, receiver) {
                        const target = latest(state);
                        const current = peek(target, prop);
                        const hadKey = isArray(target) && isIntegerKey(prop) ?
                            Number(prop) < target.length :
                            hasOwn(target, prop);
                        if (!state.modified) {
                            // special case, if we assigning the original value to a draft, we can ignore the assignment
                            const currentState = current === null || current === void 0 ? void 0 : current["__r_state" /* ReactiveFlags.STATE */ ];
                            if (currentState && currentState.base === value) {
                                state.copy[prop] = value;
                                return true;
                            }
                            // we need to be able to distinguish setting a non-existing to undefined (which is a change)
                            // from setting an existing property with value undefined to undefined (which is not a change)
                            if (is(value, current) &&
                                (value !== undefined || hasOwn(state.base, prop)))
                                return true;
                            prepareCopy$1(state);
                            markChanged(state);
                        }
                        if (is(state.copy[prop], value) &&
                            // special case: handle new props with value 'undefined'
                            (value !== undefined || prop in state.copy))
                            return true;
                        state.copy[prop] = value;
                        // don't trigger if target is something up in the prototype chain of original
                        if (state === toState(receiver)) {
                            if (!hadKey) {
                                trigger(state, "add" /* TriggerOpTypes.ADD */ , prop, value);
                            } else if (!is(value, current)) {
                                trigger(state, "set" /* TriggerOpTypes.SET */ , prop, value);
                            }
                            triggerDraft(state);
                        }
                        return true;
                    };
                }

                function deleteProperty(state, prop) {
                    const hadKey = hasOwn(latest(state), prop);
                    const current = peek(state.base, prop);
                    // The `undefined` check is a fast path for pre-existing keys.
                    if (current !== undefined || prop in state.base) {
                        prepareCopy$1(state);
                        markChanged(state);
                    }
                    if (state.copy) {
                        const result = delete state.copy[prop];
                        if (result && hadKey) {
                            trigger(state, "delete" /* TriggerOpTypes.DELETE */ , prop, undefined);
                        }
                        return result;
                    }
                    return true;
                }

                function has$1(state, prop) {
                    const target = latest(state);
                    const result = Reflect.has(target, prop);
                    if (!isSymbol(prop) || !builtInSymbols.has(prop)) {
                        track(state, "has" /* TrackOpTypes.HAS */ , prop);
                    }
                    return result;
                }

                function ownKeys(state) {
                    const target = latest(state);
                    track(state, "iterate" /* TrackOpTypes.ITERATE */ , isArray(target) ? 'length' : ITERATE_KEY);
                    return Reflect.ownKeys(target);
                }

                function getOwnPropertyDescriptor(state, key) {
                    const target = latest(state);
                    const desc = Reflect.getOwnPropertyDescriptor(target, key);
                    if (!desc)
                        return desc;
                    return {
                        writable: true,
                        configurable: !isArray(target) || key !== 'length',
                        enumerable: desc.enumerable,
                        value: target[key],
                    };
                }

                function setPrototypeOf(state, v) {
                    const res = Reflect.setPrototypeOf(state.base, v);
                    if (res && state.copy) {
                        Reflect.setPrototypeOf(state.copy, v);
                    }
                    return res;
                }
                const mutableHandlers = {
                    get: get$1,
                    set: set$2,
                    deleteProperty,
                    has: has$1,
                    ownKeys,
                    setPrototypeOf,
                    getOwnPropertyDescriptor,
                };

                function prepareMapCopy(state) {
                    if (!state.copy) {
                        state.copy = new Map(state.base);
                    }
                }

                function prepareSetCopy(state) {
                    if (!state.copy) {
                        state.copy = new Set();
                        state.base.forEach((value) => {
                            if (isObject(value)) {
                                const drafted = draft(value, state);
                                trackDraft(drafted);
                                if (value !== drafted) {
                                    state.drafts.set(value, drafted);
                                }
                                state.copy.add(drafted);
                            } else {
                                state.copy.add(value);
                            }
                        });
                    }
                }

                function prepareCopy(state) {
                    state.type === 1 /* DraftType.Map */ ?
                        prepareMapCopy(state) :
                        prepareSetCopy(state);
                }

                function get(key) {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    const target = latest(state);
                    track(state, "get" /* TrackOpTypes.GET */ , key);
                    if (!target.has(key)) {
                        return;
                    }
                    let value = target.get(key);
                    if (!isObject(value)) {
                        return value;
                    }
                    if (!isDraft(value)) {
                        prepareCopy(state);
                        value = draft(value, state);
                        state.copy.set(key, value);
                    }
                    trackDraft(value);
                    return value;
                }

                function set$1(key, value) {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    const target = latest(state);
                    const hadKey = target.has(key);
                    const oldValue = target.get(key);
                    const _doSet = () => {
                        prepareCopy(state);
                        markChanged(state);
                        state.copy.set(key, value);
                    };
                    if (!hadKey) {
                        _doSet();
                        trigger(state, "add" /* TriggerOpTypes.ADD */ , key, value);
                    } else if (!is(value, oldValue)) {
                        _doSet();
                        trigger(state, "set" /* TriggerOpTypes.SET */ , key, value);
                    }
                    return this;
                }

                function add(value) {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    const target = latest(state);
                    const hadKey = target.has(value);
                    if (!hadKey) {
                        prepareSetCopy(state);
                        markChanged(state);
                        state.copy.add(value);
                        trigger(state, "add" /* TriggerOpTypes.ADD */ , value, value);
                    }
                    return this;
                }

                function has(key) {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    track(state, "has" /* TrackOpTypes.HAS */ , key);
                    if (!state.copy) {
                        return state.base.has(key);
                    }
                    if (state.copy.has(key)) {
                        return true;
                    }
                    return state.type === 2 /* DraftType.Set */ ?
                        state.drafts.has(key) && state.drafts.has(state.drafts.get(key)) :
                        false;
                }

                function size(state) {
                    track(state, "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
                    return latest(state).size;
                }

                function setKeys(state) {
                    track(state, "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
                    prepareSetCopy(state);
                    return state.copy.values();
                }

                function mapKeys(state) {
                    track(state, "iterate" /* TrackOpTypes.ITERATE */ , MAP_KEY_ITERATE_KEY);
                    return latest(state).keys();
                }

                function deleteEntry(key) {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    const target = latest(state);
                    const hadKey = target.has(key);
                    'get' in target ? target.get(key) : undefined;
                    // forward the operation before queueing reactions
                    prepareCopy(state);
                    markChanged(state);
                    let result = state.copy.delete(key);
                    if (state.type === 2 /* DraftType.Set */ && !result) {
                        result = state.drafts.has(key) ?
                            state.drafts.delete(state.drafts.get(key)) :
                            false;
                    }
                    if (hadKey) {
                        trigger(state, "delete" /* TriggerOpTypes.DELETE */ , key, undefined);
                    }
                    return result;
                }

                function clear() {
                    const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                    const target = latest(state);
                    const hadItems = target.size !== 0;
                    // forward the operation before queueing reactions
                    const result = target.clear();
                    if (hadItems) {
                        prepareCopy(state);
                        markChanged(state);
                        state.copy.clear();
                        trigger(state, "clear" /* TriggerOpTypes.CLEAR */ , undefined, undefined);
                    }
                    return result;
                }

                function setForEach(self, state, callback, thisArg) {
                    const iterator = state.proxy.values();
                    let result = iterator.next();
                    while (!result.done) {
                        callback.call(thisArg, result.value, result.value, self);
                        result = iterator.next();
                    }
                }

                function mapForEach(self, state, callback, thisArg) {
                    track(state, "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
                    latest(state).forEach((_value, key) => {
                        // important: make sure the callback is
                        // 1. invoked with the reactive map as `this` and 3rd arg
                        // 2. the value received should be a corresponding draft.
                        return callback.call(thisArg, state.proxy.get(key), key, self);
                    });
                }

                function createIterableMethod(method) {
                    return function(...args) {
                        const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                        const targetIsMap = state.type === 1 /* DraftType.Map */ ;
                        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
                        if (targetIsMap) {
                            // skip calling `track()` because `keys()` will do it.
                            const innerIterator = state.proxy.keys();
                            // return a wrapped iterator which returns observed versions of the
                            // values emitted from the real iterator
                            return {
                                // iterator protocol
                                next() {
                                    const {
                                        value: key,
                                        done
                                    } = innerIterator.next();
                                    const value = state.proxy.get(key);
                                    return done ?
                                        {
                                            value,
                                            done
                                        } :
                                        {
                                            value: isPair ? [key, value] : value,
                                            done,
                                        };
                                },
                                // iterable protocol
                                [Symbol.iterator]() {
                                    return this;
                                },
                            };
                        }
                        track(state, "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
                        prepareSetCopy(state);
                        return state.copy[method](...args);
                    };
                }

                function createInstrumentations() {
                    const mutableInstrumentations = {
                        get,
                        get size() {
                            return size(this["__r_state" /* ReactiveFlags.STATE */ ]);
                        },
                        has,
                        add,
                        set: set$1,
                        delete: deleteEntry,
                        clear,
                        keys() {
                            const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                            return state.type === 1 /* DraftType.Map */ ? mapKeys(state) : setKeys(state);
                        },
                        forEach(callback, thisArg) {
                            const state = this["__r_state" /* ReactiveFlags.STATE */ ];
                            if (state.type === 1 /* DraftType.Map */ ) {
                                mapForEach(this, state, callback, thisArg);
                            } else {
                                setForEach(this, state, callback, thisArg);
                            }
                        },
                    };
                    const iteratorMethods = ['values', 'entries', Symbol.iterator];
                    iteratorMethods.forEach((method) => {
                        mutableInstrumentations[method] = createIterableMethod(method);
                    });
                    return [mutableInstrumentations];
                }
                const [mutableInstrumentations] = /* #__PURE__*/ createInstrumentations();

                function createInstrumentationGetter() {
                    const instrumentations = mutableInstrumentations;
                    return (state, key, receiver) => {
                        if (key === "__r_isReactive" /* ReactiveFlags.IS_REACTIVE */ ) {
                            return true;
                        } else if (key === "__r_state" /* ReactiveFlags.STATE */ ) {
                            return state;
                        }
                        const target = latest(state);
                        return Reflect.get(hasOwn(instrumentations, key) && key in target ?
                            instrumentations :
                            target, key, receiver);
                    };
                }
                const mutableCollectionHandlers = {
                    get: /*#__PURE__*/ createInstrumentationGetter(),
                };

                function snapshotHandler(target, {
                    copies,
                    snapshots
                }) {
                    const getHandlers = (target) => {
                        switch (getTargetType(target)) {
                            case 1 /* TargetType.COMMON */ :
                            case 2 /* TargetType.ARRAY */ :
                                return objectTraps;
                            case 4 /* TargetType.MAP */ :
                            case 3 /* TargetType.SET */ :
                                return collectionTraps;
                            default:
                                throw new Error('Unpected Error. Please file an issue on https://github.com/dourajs/doura');
                        }
                    };
                    const toSnapshot = (value) => {
                        if (!isObject(value)) {
                            return value;
                        }
                        if (isDraft(value)) {
                            let proxy = snapshots.get(value);
                            if (!proxy) {
                                const target = copies.get(value["__r_state" /* ReactiveFlags.STATE */ ]);
                                snapshots.set(value, (proxy = new Proxy(target, getHandlers(target))));
                            }
                            return proxy;
                        }
                        return value;
                    };
                    const createIterableMethod = (method) => {
                        return function(...args) {
                            const proxied = this;
                            const target = proxied["__r_raw" /* ReactiveFlags.RAW */ ];
                            const isPair = method === 'entries' || (method === Symbol.iterator && isMap(this));
                            const innerIterator = target[method](...args);
                            return {
                                // iterator protocol
                                next() {
                                    const {
                                        value,
                                        done
                                    } = innerIterator.next();
                                    return done ?
                                        {
                                            value: toSnapshot(value),
                                            done
                                        } :
                                        {
                                            value: isPair ?
                                                [value[0], toSnapshot(value[1])] :
                                                toSnapshot(value),
                                            done,
                                        };
                                },
                                // iterable protocol
                                [Symbol.iterator]() {
                                    return this;
                                },
                            };
                        };
                    };
                    const createNormalMethod = (method) => {
                        return function(...args) {
                            const proxied = this;
                            const target = proxied["__r_raw" /* ReactiveFlags.RAW */ ];
                            return target[method](...args);
                        };
                    };
                    const collectionInstrumentations = {
                        get size() {
                            const proxied = this;
                            const target = proxied["__r_raw" /* ReactiveFlags.RAW */ ];
                            return target.size;
                        },
                        get(key) {
                            const proxied = this;
                            const target = proxied["__r_raw" /* ReactiveFlags.RAW */ ];
                            if (target.has(key)) {
                                return toSnapshot(target.get(key));
                            }
                        },
                        forEach(callback, thisArg) {
                            const proxied = this;
                            const target = proxied["__r_raw" /* ReactiveFlags.RAW */ ];
                            return target.forEach((value, key) => {
                                value = toSnapshot(value);
                                return callback.call(thisArg, value, isMap(target) ? key : value, target);
                            });
                        },
                    };
                    const normalMethods = ['has', 'add', 'set', 'delete', 'clear'];
                    normalMethods.forEach((method) => {
                        collectionInstrumentations[method] = createNormalMethod(method);
                    });
                    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
                    iteratorMethods.forEach((method) => {
                        collectionInstrumentations[method] = createIterableMethod(method);
                    });
                    const collectionTraps = {
                        get(target, key, receiver) {
                            if (key === "__r_raw" /* ReactiveFlags.RAW */ ) {
                                return target;
                            }
                            return Reflect.get(hasOwn(collectionInstrumentations, key) && key in target ?
                                collectionInstrumentations :
                                target, key, receiver);
                        },
                    };
                    const objectTraps = {
                        get(target, prop, receiver) {
                            return toSnapshot(Reflect.get(target, prop, receiver));
                        },
                    };
                    return getHandlers(target);
                }

                const draftMap = new WeakMap();
                let uid = 0;

                function draft(target, parent) {
                    // only specific value types can be observed.
                    const targetType = getTargetType(target);
                    if (targetType === 0 /* TargetType.INVALID */ ) {
                        return target;
                    }
                    if (target["__r_skip" /* ReactiveFlags.SKIP */ ] || !Object.isExtensible(target)) {
                        return target;
                    }
                    // target is already a Draft, return it.
                    if (target["__r_state" /* ReactiveFlags.STATE */ ]) {
                        return target;
                    }
                    let state = {
                        type: 0 /* DraftType.Object */ ,
                        id: uid++,
                        root: null,
                        parent: parent,
                        base: target,
                        proxy: null,
                        copy: null,
                        modified: false,
                        disposed: false,
                        listeners: [],
                        children: [],
                    };
                    let proxyTarget = state;
                    let proxyHandlers = mutableHandlers;
                    if (targetType === 3 /* TargetType.SET */ ) {
                        state = state;
                        state.type = 2 /* DraftType.Set */ ;
                        state.drafts = new Map();
                        proxyTarget = new Set();
                        proxyHandlers = mutableCollectionHandlers;
                    } else if (targetType === 4 /* TargetType.MAP */ ) {
                        state = state;
                        state.type = 1 /* DraftType.Map */ ;
                        proxyTarget = new Map();
                        proxyHandlers = mutableCollectionHandlers;
                    } else if (targetType === 2 /* TargetType.ARRAY */ ) {
                        // in order to pass the check of "obj instanceof Array"
                        proxyTarget = [];
                    }
                    if (proxyTarget !== state) {
                        Object.keys(state).forEach((key) => {
                            Object.defineProperty(proxyTarget, key, {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: state[key],
                            });
                        });
                    }
                    const proxy = new Proxy(proxyTarget, proxyHandlers);
                    proxyTarget.proxy = proxy;
                    if (parent) {
                        proxyTarget.root = parent.root;
                        parent.children.push(proxyTarget);
                    } else {
                        proxyTarget.root = proxyTarget;
                    }
                    draftMap.set(proxyTarget, proxy);
                    return proxyTarget.proxy;
                }

                function watch(draft, cb) {
                    const state = draft["__r_state" /* ReactiveFlags.STATE */ ];
                    if (state.disposed) {
                        return NOOP;
                    }
                    state.listeners.push(cb);
                    return () => {
                        const index = state.listeners.indexOf(cb);
                        if (index >= 0) {
                            state.listeners.splice(index, 1);
                        }
                    };
                }

                function takeSnapshotFromDraft(draft, snapshots) {
                    const copies = new Map();
                    const draftSnapshot = {
                        copies,
                        snapshots: snapshots || new Map(),
                    };
                    const snapshots_ = draftSnapshot.snapshots;
                    const queue = [draft["__r_state" /* ReactiveFlags.STATE */ ]];
                    while (queue.length) {
                        const state = queue.pop();
                        let value;
                        if (state.modified) {
                            value = shallowCopy(state.copy);
                            updateDraftState(state, value);
                            snapshots_.delete(state.proxy);
                        } else {
                            value = createSnapshotProxy(state.base, draftSnapshot);
                        }
                        copies.set(state, value);
                        for (const c of state.children) {
                            queue.push(c);
                        }
                    }
                    return draftSnapshot;
                }

                function createSnapshotProxy(obj, draftSnapshot) {
                    const handler = snapshotHandler(obj, draftSnapshot);
                    if (isDraft(obj)) {
                        const state = obj["__r_state" /* ReactiveFlags.STATE */ ];
                        return new Proxy(draftSnapshot.copies.get(state), handler);
                    }
                    return new Proxy(obj, handler);
                }

                function snapshot(value, draft, snapshots) {
                    if (!isObject(value)) {
                        return value;
                    }
                    const draftSnapshot = takeSnapshotFromDraft(draft, snapshots);
                    return createSnapshotProxy(value, draftSnapshot);
                }

                function updateDraftState(state, base) {
                    state.modified = false;
                    state.base = base;
                }

                function validateObject(model, prop) {
                    const target = model[prop];
                    if (target) {
                        invariant(isPlainObject(target), `model.${prop} should be object!`);
                    }
                }

                function checkConflictedKey(type, obj, cache) {
                    if (!obj[type]) {
                        return;
                    }
                    for (const key of Object.keys(obj[type])) {
                        if (cache.has(key)) {
                            const conflictedType = cache.get(key);
                            warn(`key "${key}" in "${type}" is conflicted with the key in "${conflictedType}"`);
                        } else {
                            cache.set(key, type);
                        }
                    }
                }
                const validateModelOptions = (model) => {
                    invariant(hasOwn(model, 'state'), 'state is required');
                    invariant(typeof model.state !== 'bigint' && typeof model.state !== 'symbol', 'state can not be BigInt or Symbol');
                    validateObject(model, 'actions');
                    validateObject(model, 'views');
                    const keys = new Map();
                    checkConflictedKey('state', model, keys);
                    checkConflictedKey('views', model, keys);
                    keys.clear();
                    checkConflictedKey('actions', model, keys);
                };

                function createView(instance, selector) {
                    const view = instance.createView(function() {
                        return selector(this, this.$actions);
                    });
                    const res = view.getSnapshot;
                    res.destory = function() {
                        view.effect.stop();
                        const index = instance.effectScope.effects.indexOf(view.effect);
                        if (index >= 0) {
                            instance.effectScope.effects.splice(index, 1);
                        }
                    };
                    return res;
                }

                const isReservedPrefix = (key) => key === '_' || key === '$';
                const publicPropertiesMap =
                    // Move PURE marker to new line to workaround compiler discarding it
                    // due to type annotation
                    /*#__PURE__*/
                    assign(({
                        $name: (i) => i.name,
                        $rawState: (i) => i.getState(),
                        $state: (i) => i.stateValue,
                        $actions: (i) => i.actions,
                        $views: (i) => i.views,
                        $patch: (i) => i.patch,
                        $onAction: (i) => i.onAction,
                        $subscribe: (i) => i.subscribe,
                        $isolate: (i) => i.isolate,
                        $getApi: (i) => i.getApi,
                        $createView: (i) => createView.bind(null, i),
                    }));
                const createGetter = (isPublicInstance) => ({
                    _: instance
                }, key) => {
                    const {
                        actions,
                        views,
                        accessCache,
                        ctx
                    } = instance;
                    let state;
                    if (isPublicInstance) {
                        state = instance.getState();
                    } else {
                        state = instance.stateValue;
                    }
                    if (key[0] !== '$') {
                        const n = accessCache[key];
                        if (n !== undefined) {
                            switch (n) {
                                case 0 /* AccessTypes.STATE */ :
                                    return state[key];
                                case 2 /* AccessTypes.VIEW */ :
                                    return views[key];
                                case 1 /* AccessTypes.ACTION */ :
                                    return actions[key];
                                case 3 /* AccessTypes.CONTEXT */ :
                                    return ctx[key];
                                    // default: just fallthrough
                            }
                        } else if (hasOwn(state, key)) {
                            accessCache[key] = 0 /* AccessTypes.STATE */ ;
                            return state[key];
                        } else if (hasOwn(ctx, key)) {
                            accessCache[key] = 3 /* AccessTypes.CONTEXT */ ;
                            return ctx[key];
                        }
                    }
                    const publicGetter = publicPropertiesMap[key];
                    if (publicGetter) {
                        return publicGetter(instance);
                    } else if (hasOwn(ctx, key)) {
                        accessCache[key] = 3 /* AccessTypes.CONTEXT */ ;
                        return ctx[key];
                    }
                    if (isReservedPrefix(key[0]) && hasOwn(state, key)) {
                        warn(`Property ${JSON.stringify(key)} must be accessed via $state because it starts with a reserved ` +
                            `character ("$" or "_") and is not proxied on the render context.`);
                    }
                };
                const set = ({
                    _: instance
                }, key, value) => {
                    const {
                        ctx,
                        actions,
                        views,
                        accessContext,
                        stateRef: {
                            value: state
                        },
                    } = instance;
                    if (hasOwn(state, key)) {
                        if (accessContext === 1 /* AccessContext.VIEW */ ) {
                            if ((false)) {}
                            return false;
                        }
                        state[key] = value;
                        return true;
                    } else if (hasOwn(actions, key)) {
                        if ((false)) {}
                        return false;
                    } else if (hasOwn(views, key)) {
                        if ((false)) {}
                        return false;
                    }
                    if (key === '$state') {
                        if (typeof value === 'bigint' || typeof value === 'symbol') {
                            if ((false)) {}
                            return false;
                        }
                        // allow to assign $state to replace state
                        instance.replace(value);
                        return true;
                    } else if (key[0] === '$' && hasOwn(publicPropertiesMap, key)) {
                        if ((false)) {}
                        return false;
                    } else {
                        ctx[key] = value;
                    }
                    return true;
                };
                const InternalInstanceProxyHandlers = {
                    get: createGetter(false),
                    set,
                };
                const PublicInstanceProxyHandlers = {
                    get: createGetter(true),
                    set,
                };

                const Errors = {
                    [0 /* ErrorCodes.SCHEDULER */ ]: 'scheduler flush. This is likely a Doura internals bug. ' +
                        'Please open an issue at https://github.com/dourajs/doura/issues/new',
                };

                function error(err, type, ...args) {
                    if ((false)) {} else {
                        // recover in prod to reduce the impact on end-user
                        console.error(err);
                    }
                }

                let isFlushing = false;
                let isFlushPending = false;
                const queue = [];
                let flushIndex = 0;
                const pendingPreFlushCbs = [];
                let activePreFlushCbs = null;
                let preFlushIndex = 0;
                const pendingPostFlushCbs = [];
                let activePostFlushCbs = null;
                let postFlushIndex = 0;
                const resolvedPromise = /*#__PURE__*/ Promise.resolve();
                let currentFlushPromise = null;
                let currentPreFlushParentJob = null;
                const RECURSION_LIMIT = 100;

                function nextTick(fn) {
                    const p = currentFlushPromise || resolvedPromise;
                    return fn ? p.then(this ? fn.bind(this) : fn) : p;
                }
                // #2768
                // Use binary-search to find a suitable position in the queue,
                // so that the queue maintains the increasing order of job's id,
                // which can prevent the job from being skipped and also can avoid repeated patching.
                function findInsertionIndex(id) {
                    // the start index should be `flushIndex + 1`
                    let start = flushIndex + 1;
                    let end = queue.length;
                    while (start < end) {
                        const middle = (start + end) >>> 1;
                        const middleJobId = getId(queue[middle]);
                        middleJobId < id ? (start = middle + 1) : (end = middle);
                    }
                    return start;
                }

                function queueJob(job) {
                    // the dedupe search uses the startIndex argument of Array.includes()
                    // by default the search index includes the current job that is being run
                    // so it cannot recursively trigger itself again.
                    // if the job is a watch() callback, the search will start with a +1 index to
                    // allow it recursively trigger itself - it is the user's responsibility to
                    // ensure it doesn't end up in an infinite loop.
                    if ((!queue.length ||
                            !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
                        job !== currentPreFlushParentJob) {
                        if (job.id == null) {
                            queue.push(job);
                        } else {
                            queue.splice(findInsertionIndex(job.id), 0, job);
                        }
                        queueFlush();
                    }
                }

                function queueFlush() {
                    if (!isFlushing && !isFlushPending) {
                        isFlushPending = true;
                        currentFlushPromise = resolvedPromise.then(flushJobs);
                    }
                }

                function invalidateJob(job) {
                    const i = queue.indexOf(job);
                    if (i >= flushIndex) {
                        queue.splice(i, 1);
                    }
                }

                function flushPreFlushCbs(seen, parentJob = null) {
                    if (pendingPreFlushCbs.length) {
                        currentPreFlushParentJob = parentJob;
                        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
                        pendingPreFlushCbs.length = 0;
                        if ((false)) {}
                        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
                            if (false) {}
                            activePreFlushCbs[preFlushIndex]();
                        }
                        activePreFlushCbs = null;
                        preFlushIndex = 0;
                        currentPreFlushParentJob = null;
                        // recursively flush until it drains
                        flushPreFlushCbs(seen, parentJob);
                    }
                }

                function flushPostFlushCbs(seen) {
                    // flush any pre cbs queued during the flush (e.g. pre watchers)
                    flushPreFlushCbs();
                    if (pendingPostFlushCbs.length) {
                        const deduped = [...new Set(pendingPostFlushCbs)];
                        pendingPostFlushCbs.length = 0;
                        // #1947 already has active queue, nested flushPostFlushCbs call
                        if (activePostFlushCbs) {
                            activePostFlushCbs.push(...deduped);
                            return;
                        }
                        activePostFlushCbs = deduped;
                        if ((false)) {}
                        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
                        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
                            if (false) {}
                            activePostFlushCbs[postFlushIndex]();
                        }
                        activePostFlushCbs = null;
                        postFlushIndex = 0;
                    }
                }
                const getId = (job) => job.id == null ? Infinity : job.id;

                function flushJobs(seen) {
                    isFlushPending = false;
                    isFlushing = true;
                    if ((false)) {}
                    flushPreFlushCbs(seen);
                    // Sort queue before flush.
                    // This ensures that:
                    // 1. Components are updated from parent to child. (because parent is always
                    //    created before the child so its render effect will have smaller
                    //    priority number)
                    // 2. If a component is unmounted during a parent component's update,
                    //    its update can be skipped.
                    queue.sort((a, b) => getId(a) - getId(b));
                    // conditional usage of checkRecursiveUpdate must be determined out of
                    // try ... catch block since Rollup by default de-optimizes treeshaking
                    // inside try-catch. This can leave all warning code unshaked. Although
                    // they would get eventually shaken by a minifier like terser, some minifiers
                    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
                    const check = (false) ?
                        0 :
                        NOOP;
                    try {
                        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
                            const job = queue[flushIndex];
                            if (job && job.active !== false) {
                                if (false) {}
                                try {
                                    job();
                                } catch (err) {
                                    error(err, 0 /* ErrorCodes.SCHEDULER */ );
                                }
                            }
                        }
                    } finally {
                        flushIndex = 0;
                        queue.length = 0;
                        flushPostFlushCbs(seen);
                        isFlushing = false;
                        currentFlushPromise = null;
                        // some postFlushCb queued jobs!
                        // keep flushing until it drains.
                        if (queue.length ||
                            pendingPreFlushCbs.length ||
                            pendingPostFlushCbs.length) {
                            flushJobs(seen);
                        }
                    }
                }

                function checkRecursiveUpdates(seen, fn) {
                    if (!seen.has(fn)) {
                        seen.set(fn, 1);
                    } else {
                        const count = seen.get(fn);
                        if (count > RECURSION_LIMIT) {
                            warn(`Maximum recursive updates exceeded. ` +
                                `This means you have a object that is mutating its own ` +
                                `dependencies and thus recursively triggering itself. Possible sources ` +
                                `include model actions or views.`);
                            return true;
                        } else {
                            seen.set(fn, count + 1);
                        }
                    }
                    return false;
                }

                var ActionType;
                (function(ActionType) {
                    ActionType["REPLACE"] = "replace";
                    ActionType["MODIFY"] = "modify";
                    ActionType["PATCH"] = "patch";
                })(ActionType || (ActionType = {}));

                function patchObj(base, patch) {
                    const keys = Object.keys(patch);
                    if (!keys.length) {
                        return;
                    }
                    keys.forEach((key) => {
                        if (hasOwn(base, key) && isPlainObject(patch[key])) {
                            patchObj(base[key], patch[key]);
                        } else {
                            base[key] = patch[key];
                        }
                    });
                }

                function markViewShouldRun(view) {
                    view.dirty = true;
                }
                class ModelInternal {
                    constructor(model, {
                        name,
                        initState
                    }) {
                        this.viewInstances = [];
                        this._actionDepth = 0;
                        this._api = null;
                        this._actionListeners = new Set();
                        this._subscribers = new Set();
                        this._depListenersHandlers = [];
                        this._watchStateChange = true;
                        this._destroyed = false;
                        this._lastDraftToSnapshot = new Map();
                        this.patch = this.patch.bind(this);
                        this.onAction = this.onAction.bind(this);
                        this.subscribe = this.subscribe.bind(this);
                        this.isolate = this.isolate.bind(this);
                        this.getApi = this.getApi.bind(this);
                        this._update = this._update.bind(this);
                        this.options = model;
                        this.name = name || '';
                        this._isDispatching = false;
                        this._initState = initState || model.state;
                        this.stateRef = draft({
                            value: this._initState,
                        });
                        this._update.__name = name;
                        this._draftListenerHandler = watch(this.stateRef, () => {
                            if (this._watchStateChange) {
                                queueJob(this._update);
                            }
                        });
                        this._setState(this._initState);
                        this.actions = Object.create(null);
                        this.views = Object.create(null);
                        this.accessContext = 0 /* AccessContext.DEFAULT */ ;
                        this.ctx = {};
                        def(this.ctx, '_', this);
                        this.accessCache = Object.create(null);
                        this.proxy = new Proxy(this.ctx, InternalInstanceProxyHandlers);
                        this.publicInst = new Proxy(this.ctx, PublicInstanceProxyHandlers);
                        this.effectScope = effectScope();
                        this._initActions();
                        this._initViews();
                    }
                    patch(obj) {
                        if (!isPlainObject(obj)) {
                            if ((false)) {}
                            return;
                        }
                        if (!this._currentState) {
                            return;
                        }
                        this._watchStateChange = false;
                        patchObj(this.proxy.$state, obj);
                        this._watchStateChange = true;
                        this.dispatch({
                            type: ActionType.PATCH,
                            args: {
                                patch: obj,
                            },
                        });
                    }
                    replace(newState) {
                        if (!isObject(newState)) {
                            warn(`replace argument should be an object, but receive a ${Object.prototype.toString.call(newState)}`);
                            return;
                        }
                        this._watchStateChange = false;
                        this.stateRef.value = newState;
                        this._watchStateChange = true;
                        // invalid all views;
                        for (const view of this.viewInstances) {
                            view.effect.scheduler();
                        }
                        this.dispatch({
                            type: ActionType.REPLACE,
                            payload: newState,
                        });
                    }
                    getState() {
                        return this._currentState;
                    }
                    getApi() {
                        if (this._api === null) {
                            const data = (this._api = Object.assign(Object.assign({}, this._currentState), this.views));
                            for (const action of Object.keys(this.actions)) {
                                def(data, action, this.actions[action]);
                            }
                        }
                        return this._api;
                    }
                    onAction(listener) {
                        this._actionListeners.add(listener);
                        return () => {
                            this._actionListeners.delete(listener);
                        };
                    }
                    subscribe(listener) {
                        this._subscribers.add(listener);
                        return () => {
                            this._subscribers.delete(listener);
                        };
                    }
                    /**
                     * Executes the given function in a scope where reactive values can be read,
                     * but they cannot cause the reactive scope of the caller to be re-evaluated
                     * when they change
                     */
                    isolate(fn) {
                        pauseTracking();
                        const res = fn(this.stateValue);
                        resetTracking();
                        return res;
                    }
                    depend(dep) {
                        // emit change when dependencies change.
                        this._depListenersHandlers.push(dep.subscribe((event) => {
                            this._triggerListener(Object.assign(Object.assign({}, event), {
                                model: this.proxy
                            }));
                        }));
                    }
                    createView(viewFn) {
                        let view$1;
                        this.effectScope.run(() => {
                            view$1 = view(() => {
                                const oldCtx = this.accessContext;
                                this.accessContext = 1 /* AccessContext.VIEW */ ;
                                const externalArgs = view$1.__externalArgs;
                                try {
                                    let value = viewFn.call(this.proxy, this.proxy, ...(externalArgs ? externalArgs : emptyArray));
                                    if ((false)) {}
                                    return value;
                                } finally {
                                    this.accessContext = oldCtx;
                                }
                            });
                        });
                        view$1.getSnapshot = () => {
                            const value = view$1.value;
                            if (view$1.mightChange) {
                                view$1.mightChange = false;
                                view$1.__snapshot = snapshot(value, this.stateRef.value);
                            } else if (view$1.__pre !== value) {
                                view$1.__snapshot = snapshot(value, this.stateRef.value);
                            }
                            view$1.__pre = value;
                            return view$1.__snapshot;
                        };
                        this.viewInstances.push(view$1);
                        return view$1;
                    }
                    reducer(state, action) {
                        switch (action.type) {
                            case ActionType.MODIFY:
                            case ActionType.PATCH:
                                {
                                    const draftToSnapshot = new Map(this._lastDraftToSnapshot);
                                    this._lastDraftToSnapshot = draftToSnapshot;
                                    return snapshot(this.stateRef.value, this.stateRef.value, this._lastDraftToSnapshot);
                                }
                            case ActionType.REPLACE:
                                return action.payload;
                            default:
                                return state;
                        }
                    }
                    dispatch(action) {
                        if (typeof action.type === 'undefined') {
                            if ((false)) {}
                            return action;
                        }
                        if (this._isDispatching) {
                            if ((false)) {}
                            return action;
                        }
                        let nextState;
                        try {
                            this._isDispatching = true;
                            nextState = this.reducer(this._currentState, action);
                        } finally {
                            this._isDispatching = false;
                        }
                        if (nextState !== this._currentState) {
                            this._setState(nextState);
                            this._triggerListener(Object.assign({
                                type: action.type,
                                model: this.proxy,
                                target: this.proxy
                            }, action.args));
                        }
                        return action;
                    }
                    destroy() {
                        // reset props
                        this._destroyed = true;
                        this._api = null;
                        this._lastDraftToSnapshot.clear();
                        this._currentState = null;
                        this.stateRef = {
                            value: null,
                        };
                        this._subscribers.clear();
                        this.effectScope.stop();
                        // clear subscriptions
                        for (const unsub of this._depListenersHandlers) {
                            unsub();
                        }
                        this._draftListenerHandler();
                    }
                    _setState(newState) {
                        this._api = null;
                        this._currentState = newState;
                        this.stateValue = this.stateRef.value;
                    }
                    _update() {
                        if (this._destroyed || !isModified(this.stateRef)) {
                            return;
                        }
                        this.dispatch({
                            type: ActionType.MODIFY,
                        });
                        markUnchanged(this.stateRef);
                    }
                    _triggerListener(event) {
                        for (const listener of this._subscribers) {
                            listener(event);
                        }
                    }
                    _initActions() {
                        // map actions names to dispatch actions
                        const actions = this.options.actions;
                        if (actions) {
                            for (const actionName of Object.keys(actions)) {
                                this.accessCache[actionName] = 1 /* AccessTypes.ACTION */ ;
                                const action = actions[actionName];
                                Object.defineProperty(this.actions, actionName, {
                                    configurable: true,
                                    enumerable: true,
                                    writable: false,
                                    value: (...args) => {
                                        if (this.accessContext === 1 /* AccessContext.VIEW */ ) {
                                            if ((false)) {}
                                            return;
                                        }
                                        this._actionDepth++;
                                        let res;
                                        try {
                                            for (const listener of this._actionListeners) {
                                                listener({
                                                    name: actionName,
                                                    args,
                                                });
                                            }
                                            res = action.call(this.proxy, ...args);
                                        } finally {
                                            // flush changes to model synchronously right after an action.
                                            // this prevent issues like https://github.com/pmndrs/valtio/issues/270
                                            if (--this._actionDepth === 0) {
                                                invalidateJob(this._update);
                                                this._update();
                                            }
                                        }
                                        return res;
                                    },
                                });
                            }
                        }
                    }
                    _initViews() {
                        const views = this.options.views;
                        if (views) {
                            for (const viewName of Object.keys(views)) {
                                this.accessCache[viewName] = 2 /* AccessTypes.VIEW */ ;
                                const viewFn = views[viewName];
                                const hasExternalArgs = viewFn.length > 1;
                                const view = this.createView(viewFn);
                                const viewWithState = view;
                                if (hasExternalArgs && ("production" !== 'production')) {}
                                const getResult = hasExternalArgs ?
                                    () => (...args) => {
                                        const oldArgs = viewWithState.__externalArgs;
                                        if (!oldArgs) {
                                            markViewShouldRun(view);
                                        } else if (oldArgs.length !== args.length) {
                                            markViewShouldRun(view);
                                        } else {
                                            for (let i = 0; i < oldArgs.length; i++) {
                                                if (oldArgs[i] !== args[i]) {
                                                    markViewShouldRun(view);
                                                    break;
                                                }
                                            }
                                        }
                                        viewWithState.__externalArgs = args;
                                        return view.getSnapshot();
                                    } :
                                    view.getSnapshot;
                                Object.defineProperty(this.views, viewName, {
                                    configurable: true,
                                    enumerable: true,
                                    get: getResult,
                                    set() {
                                        if ((false)) {}
                                        return false;
                                    },
                                });
                            }
                        }
                    }
                }

                function createModelInstnace(modelOptions, options = {}) {
                    if ((false)) {}
                    return new ModelInternal(modelOptions, options);
                }

                const createMapHelper = () => {
                    const models = new Map();
                    const self = {
                        get(key) {
                            return models.get(key);
                        },
                        set(key, model) {
                            models.set(key, model);
                        },
                        each(fn) {
                            for (const [key, model] of models.entries()) {
                                fn(model, key);
                            }
                        },
                        clear() {
                            self.each((m) => m.destroy());
                            models.clear();
                        },
                    };
                    return self;
                };
                let currentModelContext = null;

                function setCurrentModelContext(ctx) {
                    currentModelContext = ctx;
                }
                class ModelManagerInternal {
                    constructor(initialState = emptyObject, plugins = []) {
                        this._subscribers = new Set();
                        this._initialState = initialState;
                        this._models = createMapHelper();
                        const emitChange = () => {
                            for (const listener of this._subscribers) {
                                listener();
                            }
                        };
                        this._onModelChange = () => {
                            queueJob(emitChange);
                        };
                        this._hooks = plugins.map(([plugin, option]) => plugin(option));
                        this._hooks.map((hook) => {
                            var _a;
                            return (_a = hook.onInit) === null || _a === void 0 ? void 0 : _a.call(hook, {
                                initialState
                            }, {
                                doura: this
                            });
                        });
                    }
                    getModel(name, model) {
                        const instance = this.getModelInstance({
                            name,
                            model
                        });
                        return instance.publicInst;
                    }
                    getDetachedModel(model) {
                        const instance = this.getModelInstance({
                            model
                        });
                        return instance.publicInst;
                    }
                    getModelInstance({
                        name,
                        model
                    }) {
                        const cachedInstace = name && this._models.get(name);
                        if (cachedInstace) {
                            return cachedInstace;
                        }
                        let instance;
                        if (typeof model === 'function') {
                            const preCtx = currentModelContext;
                            const modelProxy = this._createModelProxy();
                            try {
                                setCurrentModelContext({
                                    manager: this,
                                    model: modelProxy,
                                });
                                instance = this._initModel({
                                    name,
                                    model: model()
                                });
                            } finally {
                                setCurrentModelContext(preCtx);
                            }
                            modelProxy.setModel(instance);
                        } else if (typeof model === 'object') {
                            instance = this._initModel({
                                name,
                                model
                            });
                        } else {
                            throw new Error('invalid model');
                        }
                        return instance;
                    }
                    getState() {
                        const allState = {};
                        this._models.each((m, key) => {
                            allState[key] = m.getState();
                        });
                        return allState;
                    }
                    subscribe(listener) {
                        this._subscribers.add(listener);
                        return () => {
                            this._subscribers.delete(listener);
                        };
                    }
                    destroy() {
                        this._hooks.map((hook) => {
                            var _a;
                            return (_a = hook.onDestroy) === null || _a === void 0 ? void 0 : _a.call(hook);
                        });
                        this._models.clear();
                        this._subscribers.clear();
                        this._initialState = emptyObject;
                    }
                    _createModelProxy() {
                        const children = [];
                        const modelProxy = {
                            addChild(m) {
                                children.push(m);
                            },
                            setModel(model) {
                                for (const child of children) {
                                    model.depend(child);
                                }
                                children.length = 0;
                            },
                        };
                        return modelProxy;
                    }
                    _initModel({
                        name,
                        model,
                    }) {
                        if (!name) {
                            return createModelInstnace(model);
                        }
                        this._hooks.map((hook) => {
                            var _a;
                            return (_a = hook.onModel) === null || _a === void 0 ? void 0 : _a.call(hook, name, model, {
                                doura: this
                            });
                        });
                        const modelInstance = createModelInstnace(model, {
                            name,
                            initState: this._getInitialState(name),
                        });
                        modelInstance.subscribe(this._onModelChange);
                        this._models.set(name, modelInstance);
                        this._hooks.map((hook) => {
                            var _a;
                            (_a = hook.onModelInstance) === null || _a === void 0 ? void 0 : _a.call(hook, modelInstance.publicInst, {
                                doura: this
                            });
                        });
                        return modelInstance;
                    }
                    _getInitialState(name) {
                        const result = this._initialState[name];
                        if (result) {
                            delete this._initialState[name];
                        }
                        return result;
                    }
                }

                function modelManager({
                    initialState,
                    plugins,
                } = {}) {
                    return new ModelManagerInternal(initialState, plugins);
                }

                function use(nameOrModel, model) {
                    if (!currentModelContext) {
                        throw new Error(`Invalid use() call. use() can only be called inside of the body of a function model. This could happen for one of the following reasons:
1. You might be breaking the Rules of Doura
2. You might have more than one copy of Doura in the same app`);
                    }
                    const {
                        manager,
                        model: parentModel
                    } = currentModelContext;
                    let instance;
                    let name;
                    if (typeof nameOrModel === 'string') {
                        name = nameOrModel;
                        instance = manager.getModelInstance({
                            name,
                            model
                        });
                    } else {
                        model = nameOrModel;
                        instance = manager.getModelInstance({
                            model
                        });
                    }
                    parentModel.addChild(instance);
                    return instance.proxy;
                }

                function doura({
                    initialState,
                    plugins = [],
                } = {}) {
                    return modelManager({
                        initialState,
                        plugins,
                    });
                }

                /******************************************************************************
                Copyright (c) Microsoft Corporation.

                Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.

                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */

                function __rest(s, e) {
                    var t = {};
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                            t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === "function")
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                                t[p[i]] = s[p[i]];
                        }
                    return t;
                }

                function applyState(_newState, _doura) {
                    // todo
                }
                const reduxDevTools = function() {
                    if (false ||
                        !window.__REDUX_DEVTOOLS_EXTENSION__) {
                        return {};
                    }
                    let id = 0;
                    const unsubscribeSet = new Set();
                    let devTools;
                    return {
                        onInit(_ctx, {
                            doura
                        }) {
                            window.__doura = doura;
                            if (true &&
                                window.__REDUX_DEVTOOLS_EXTENSION__) {
                                devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
                                    name: `doura${id === 0 ? '' : id}`,
                                });
                                id = id + 1;
                                devTools.init(doura.getState());
                                const fn = (message) => {
                                    switch (message.type) {
                                        case 'ACTION':
                                            invariant(typeof message.payload === 'string', 'Unsupported action format');
                                            // do nothing
                                            return;
                                        case 'DISPATCH':
                                            switch (message.payload.type) {
                                                case 'RESET':
                                                    // todo: model.reset()
                                                    return devTools.init(doura.getState());
                                                case 'COMMIT':
                                                    return devTools.init(doura.getState());
                                                case 'ROLLBACK':
                                                    try {
                                                        const state = JSON.parse(message.state);
                                                        applyState(state, doura);
                                                        return devTools.init(state);
                                                    } catch (_a) {
                                                        console.warn(`[Doura Devtool] Could not parse the received json.`);
                                                    }
                                                    return devTools.init(doura.getState());
                                                case 'JUMP_TO_STATE':
                                                case 'JUMP_TO_ACTION':
                                                    // try {
                                                    //   const state = JSON.parse(message.state)
                                                    //   // apply state
                                                    // } catch {
                                                    //   console.warn(
                                                    //     `[Doura Devtool] Could not parse the received json.`
                                                    //   )
                                                    // }
                                                    return;
                                            }
                                    }
                                };
                                unsubscribeSet.add(devTools.subscribe(fn));
                            }
                        },
                        onModelInstance(instance, {
                            doura
                        }) {
                            instance.$subscribe((_a) => {
                                var {
                                    type,
                                    model
                                } = _a, args = __rest(_a, ["type", "model"]);
                                const state = doura.getState();
                                delete state._;
                                devTools.send(Object.assign({
                                    type: `${model.$name || 'anonymous'}@${type}`
                                }, args), state);
                            });
                        },
                        onDestroy() {
                            window.__REDUX_DEVTOOLS_EXTENSION__.disconnect(devTools);
                            for (const fn of unsubscribeSet.values()) {
                                fn();
                            }
                            unsubscribeSet.clear();
                        },
                    };
                };
                var reduxDevTools$1 = reduxDevTools;




                /***/
            }),

        /***/
        "FaUj":
            /***/
            ((__unused_webpack_module, exports, __webpack_require__) => {



                var m = __webpack_require__("hTvQ");
                if (true) {
                    exports.createRoot = m.createRoot;
                    exports.hydrateRoot = m.hydrateRoot;
                } else {
                    var i;
                }


                /***/
            }),

        /***/
        "OUAq":
            /***/
            ((__unused_webpack_module, exports, __webpack_require__) => {

                /**
                 * @license React
                 * react-jsx-runtime.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var f = __webpack_require__("DTvD"),
                    k = Symbol.for("react.element"),
                    l = Symbol.for("react.fragment"),
                    m = Object.prototype.hasOwnProperty,
                    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    p = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function q(c, a, g) {
                    var b, d = {},
                        e = null,
                        h = null;
                    void 0 !== g && (e = "" + g);
                    void 0 !== a.key && (e = "" + a.key);
                    void 0 !== a.ref && (h = a.ref);
                    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
                    if (c && c.defaultProps)
                        for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
                    return {
                        $$typeof: k,
                        type: c,
                        key: e,
                        ref: h,
                        props: d,
                        _owner: n.current
                    }
                }
                exports.Fragment = l;
                exports.jsx = q;
                exports.jsxs = q;


                /***/
            }),

        /***/
        "oUqw":
            /***/
            ((module, __unused_webpack_exports, __webpack_require__) => {



                if (true) {
                    module.exports = __webpack_require__("OUAq");
                } else {}


                /***/
            })

    }
]);
//# debugId=833632a8-3e34-5e42-80e5-e9982c103b91