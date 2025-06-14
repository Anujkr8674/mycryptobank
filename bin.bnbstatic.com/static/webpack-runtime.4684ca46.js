/******/ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1e48a456-e570-59b1-b179-3e54c9e909b1")
    } catch (e) {}
}();
(() => { // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({});
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/
            id: moduleId,
            /******/
            loaded: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        var threw = true;
        /******/
        try {
            /******/
            __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            threw = false;
            /******/
        } finally {
            /******/
            if (threw) delete __webpack_module_cache__[moduleId];
            /******/
        }
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/amd options */
    /******/
    (() => {
        /******/
        __webpack_require__.amdO = {};
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/chunk loaded */
    /******/
    (() => {
        /******/
        var deferred = [];
        /******/
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/
            if (chunkIds) {
                /******/
                priority = priority || 0;
                /******/
                for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                /******/
                deferred[i] = [chunkIds, fn, priority];
                /******/
                return;
                /******/
            }
            /******/
            var notFulfilled = Infinity;
            /******/
            for (var i = 0; i < deferred.length; i++) {
                /******/
                var [chunkIds, fn, priority] = deferred[i];
                /******/
                var fulfilled = true;
                /******/
                for (var j = 0; j < chunkIds.length; j++) {
                    /******/
                    if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
                        /******/
                        chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/
                        fulfilled = false;
                        /******/
                        if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/
                if (fulfilled) {
                    /******/
                    deferred.splice(i--, 1)
                    /******/
                    var r = fn();
                    /******/
                    if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/
            return result;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/
                () => (module['default']) :
                /******/
                () => (module);
            /******/
            __webpack_require__.d(getter, {
                a: getter
            });
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/create fake namespace object */
    /******/
    (() => {
        /******/
        var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
        /******/
        var leafPrototypes;
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 16: return value when it's Promise-like
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function(value, mode) {
            /******/
            if (mode & 1) value = this(value);
            /******/
            if (mode & 8) return value;
            /******/
            if (typeof value === 'object' && value) {
                /******/
                if ((mode & 4) && value.__esModule) return value;
                /******/
                if ((mode & 16) && typeof value.then === 'function') return value;
                /******/
            }
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            var def = {};
            /******/
            leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
            /******/
            for (var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
                /******/
                Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
                /******/
            }
            /******/
            def['default'] = () => (value);
            /******/
            __webpack_require__.d(ns, def);
            /******/
            return ns;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/ensure chunk */
    /******/
    (() => {
        /******/
        __webpack_require__.f = {};
        /******/ // This file contains only the entry chunk.
        /******/ // The chunk loading function for additional chunks
        /******/
        __webpack_require__.e = (chunkId) => {
            /******/
            return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
                /******/
                __webpack_require__.f[key](chunkId, promises);
                /******/
                return promises;
                /******/
            }, []));
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/get javascript chunk filename */
    /******/
    (() => {
        /******/ // This function allow to reference async chunks
        /******/
        __webpack_require__.u = (chunkId) => {
            /******/ // return url for filenames not based on template
            /******/
            if (chunkId === 121) return "static/common/8cef71ca.830aafcf.js";
            /******/
            if (chunkId === 349) return "static/common/7f2d235d.7a92c526.js";
            /******/
            if (chunkId === 708) return "static/common/96cefcb4.93221036.js";
            /******/
            if (chunkId === 736) return "static/common/a2df123e.84490f97.js";
            /******/
            if (chunkId === 617) return "static/common/fc2d3603.81e1d49e.js";
            /******/ // return url for filenames based on template
            /******/
            return "static/chunks/" + {
                "148": "dynamic-bids-interceptor",
                "229": "page-95e9",
                "279": "layout-b4aa",
                "555": "loaders",
                "654": "dynamic-analytics-web-vitals",
                "706": "page-26cb",
                "747": "dynamic-com-widgets",
                "757": "page-ca67",
                "779": "page-dbf4",
                "895": "dynamic-fingerprint",
                "896": "dynamic-common-widgets",
                "968": "page-a4aa"
            }[chunkId] + "." + {
                "148": "be6e05dd",
                "229": "7dcb57f8",
                "279": "c6ae2769",
                "555": "e2942ee0",
                "654": "3c0d01b2",
                "706": "80a2c7a8",
                "747": "ea2a56c4",
                "757": "3b699b11",
                "779": "d322fb98",
                "895": "4f517580",
                "896": "207b4a23",
                "968": "405e9c28"
            }[chunkId] + ".js";
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/get mini-css chunk filename */
    /******/
    (() => {
        /******/ // This function allow to reference all chunks
        /******/
        __webpack_require__.miniCssF = (chunkId) => {
            /******/ // return url for filenames based on template
            /******/
            return "static/css/" + {
                "121": "11f8b803",
                "617": "f6ff6d04"
            }[chunkId] + ".chunk.css";
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/global */
    /******/
    (() => {
        /******/
        __webpack_require__.g = (function() {
            /******/
            if (typeof globalThis === 'object') return globalThis;
            /******/
            try {
                /******/
                return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/
                if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/load script */
    /******/
    (() => {
        /******/
        var inProgress = {};
        /******/
        var dataWebpackPrefix = "project:";
        /******/ // loadScript function to load a script via script tag
        /******/
        __webpack_require__.l = (url, done, key, chunkId) => {
            /******/
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            /******/
            var script, needAttach;
            /******/
            if (key !== undefined) {
                /******/
                var scripts = document.getElementsByTagName("script");
                /******/
                for (var i = 0; i < scripts.length; i++) {
                    /******/
                    var s = scripts[i];
                    /******/
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                    /******/
                }
                /******/
            }
            /******/
            if (!script) {
                /******/
                needAttach = true;
                /******/
                script = document.createElement('script');
                /******/
                /******/
                script.charset = 'utf-8';
                /******/
                script.timeout = 120;
                /******/
                if (__webpack_require__.nc) {
                    /******/
                    script.setAttribute("nonce", __webpack_require__.nc);
                    /******/
                }
                /******/
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                /******/
                script.src = url;
                /******/
            }
            /******/
            inProgress[url] = [done];
            /******/
            var onScriptComplete = (prev, event) => {
                /******/ // avoid mem leaks in IE.
                /******/
                script.onerror = script.onload = null;
                /******/
                clearTimeout(timeout);
                /******/
                var doneFns = inProgress[url];
                /******/
                delete inProgress[url];
                /******/
                script.parentNode && script.parentNode.removeChild(script);
                /******/
                doneFns && doneFns.forEach((fn) => (fn(event)));
                /******/
                if (prev) return prev(event);
                /******/
            }
            /******/
            ;
            /******/
            var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
                type: 'timeout',
                target: script
            }), 120000);
            /******/
            script.onerror = onScriptComplete.bind(null, script.onerror);
            /******/
            script.onload = onScriptComplete.bind(null, script.onload);
            /******/
            needAttach && document.head.appendChild(script);
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/node module decorator */
    /******/
    (() => {
        /******/
        __webpack_require__.nmd = (module) => {
            /******/
            module.paths = [];
            /******/
            if (!module.children) module.children = [];
            /******/
            return module;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/publicPath */
    /******/
    (() => {
        /******/
        __webpack_require__.p = "https://bin.bnbstatic.com/";
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/DynamicPublicPath */
    /******/
    (() => {
        /******/
        /******/ // server runtime public path
        /******/
        (function() {
            /******/
            var getGlobalThis = function() {
                /******/
                if (typeof globalThis !== "undefined") return globalThis;
                /******/
                if (typeof self !== "undefined") return self;
                /******/
                if (typeof window !== "undefined") return window;
                /******/
                if (typeof global !== "undefined") return global;
                /******/
                if (typeof this !== "undefined") return this;
                /******/
                throw new Error("Unable to locate global `this`");
                /******/
            }
            /******/
            var GLOBALTHIS = getGlobalThis();
            /******/
            if (GLOBALTHIS["__project_dynamic_public_path__"]) {
                /******/
                __webpack_require__.p = GLOBALTHIS["__project_dynamic_public_path__"];
                /******/
            }
            /******/
        })();
        /******/
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/css loading */
    /******/
    (() => {
        /******/
        var createStylesheet = (chunkId, fullhref, resolve, reject) => {
            /******/
            var linkTag = document.createElement("link");
            /******/
            /******/
            linkTag.rel = "stylesheet";
            /******/
            linkTag.type = "text/css";
            /******/
            var onLinkComplete = (event) => {
                /******/ // avoid mem leaks.
                /******/
                linkTag.onerror = linkTag.onload = null;
                /******/
                if (event.type === 'load') {
                    /******/
                    resolve();
                    /******/
                } else {
                    /******/
                    var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                    /******/
                    var realHref = event && event.target && event.target.href || fullhref;
                    /******/
                    var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
                    /******/
                    err.code = "CSS_CHUNK_LOAD_FAILED";
                    /******/
                    err.type = errorType;
                    /******/
                    err.request = realHref;
                    /******/
                    linkTag.parentNode.removeChild(linkTag)
                    /******/
                    reject(err);
                    /******/
                }
                /******/
            }
            /******/
            linkTag.onerror = linkTag.onload = onLinkComplete;
            /******/
            linkTag.href = fullhref;
            /******/
            /******/
            document.head.appendChild(linkTag);
            /******/
            return linkTag;
            /******/
        };
        /******/
        var findStylesheet = (href, fullhref) => {
            /******/
            var existingLinkTags = document.getElementsByTagName("link");
            /******/
            for (var i = 0; i < existingLinkTags.length; i++) {
                /******/
                var tag = existingLinkTags[i];
                /******/
                var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
                /******/
                if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
                /******/
            }
            /******/
            var existingStyleTags = document.getElementsByTagName("style");
            /******/
            for (var i = 0; i < existingStyleTags.length; i++) {
                /******/
                var tag = existingStyleTags[i];
                /******/
                var dataHref = tag.getAttribute("data-href");
                /******/
                if (dataHref === href || dataHref === fullhref) return tag;
                /******/
            }
            /******/
        };
        /******/
        var loadStylesheet = (chunkId) => {
            /******/
            return new Promise((resolve, reject) => {
                /******/
                var href = __webpack_require__.miniCssF(chunkId);
                /******/
                var fullhref = __webpack_require__.p + href;
                /******/
                if (findStylesheet(href, fullhref)) return resolve();
                /******/
                createStylesheet(chunkId, fullhref, resolve, reject);
                /******/
            });
            /******/
        }
        /******/ // object to store loaded CSS chunks
        /******/
        var installedCssChunks = {
            /******/
            231: 0
            /******/
        };
        /******/
        /******/
        __webpack_require__.f.miniCss = (chunkId, promises) => {
            /******/
            var cssChunks = {
                "121": 1,
                "617": 1
            };
            /******/
            if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
            /******/
            else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
                /******/
                promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
                    /******/
                    installedCssChunks[chunkId] = 0;
                    /******/
                }, (e) => {
                    /******/
                    delete installedCssChunks[chunkId];
                    /******/
                    throw e;
                    /******/
                }));
                /******/
            }
            /******/
        };
        /******/
        /******/ // no hmr
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/jsonp chunk loading */
    /******/
    (() => {
        /******/ // no baseURI
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/
        var installedChunks = {
            /******/
            231: 0
            /******/
        };
        /******/
        /******/
        __webpack_require__.f.j = (chunkId, promises) => {
            /******/ // JSONP chunk loading for javascript
            /******/
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
            /******/
            if (installedChunkData !== 0) { // 0 means "already installed".
                /******/
                /******/ // a Promise means "currently loading".
                /******/
                if (installedChunkData) {
                    /******/
                    promises.push(installedChunkData[2]);
                    /******/
                } else {
                    /******/
                    if (!/^(12|23)1$/.test(chunkId)) {
                        /******/ // setup Promise in chunk cache
                        /******/
                        var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
                        /******/
                        promises.push(installedChunkData[2] = promise);
                        /******/
                        /******/ // start chunk loading
                        /******/
                        var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                        /******/ // create error before stack unwound to get useful stacktrace later
                        /******/
                        var error = new Error();
                        /******/
                        var loadingEnded = (event) => {
                            /******/
                            if (__webpack_require__.o(installedChunks, chunkId)) {
                                /******/
                                installedChunkData = installedChunks[chunkId];
                                /******/
                                if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                                /******/
                                if (installedChunkData) {
                                    /******/
                                    var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                                    /******/
                                    var realSrc = event && event.target && event.target.src;
                                    /******/
                                    error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                                    /******/
                                    error.name = 'ChunkLoadError';
                                    /******/
                                    error.type = errorType;
                                    /******/
                                    error.request = realSrc;
                                    /******/
                                    installedChunkData[1](error);
                                    /******/
                                }
                                /******/
                            }
                            /******/
                        };
                        /******/
                        __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
                        /******/
                    } else installedChunks[chunkId] = 0;
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
        /******/
        /******/ // install a JSONP callback for chunk loading
        /******/
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/
            var [chunkIds, moreModules, runtime] = data;
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId, chunkId, i = 0;
            /******/
            if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
                /******/
                for (moduleId in moreModules) {
                    /******/
                    if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/
                        __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/
                if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/
            for (; i < chunkIds.length; i++) {
                /******/
                chunkId = chunkIds[i];
                /******/
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/
                    installedChunks[chunkId][0]();
                    /******/
                }
                /******/
                installedChunks[chunkId] = 0;
                /******/
            }
            /******/
            return __webpack_require__.O(result);
            /******/
        }
        /******/
        /******/
        var chunkLoadingGlobal = self["webpackChunkproject"] = self["webpackChunkproject"] || [];
        /******/
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/
    /******/
})();
//# debugId=1e48a456-e570-59b1-b179-3e54c9e909b1