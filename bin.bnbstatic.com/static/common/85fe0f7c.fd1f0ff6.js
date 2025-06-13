! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b02c5852-8971-5f98-b315-ab3530cd2559")
    } catch (e) {}
}();
(self.webpackChunkmuses_ui = self.webpackChunkmuses_ui || []).push([
    [921], {
        "9VJZ": function(e, t, n) {
            ! function(e) {
                "use strict";
                var t = function(e, n) {
                    return t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, t(e, n)
                };

                function r(e, n) {
                    if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
                var o = function() {
                    return o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, o.apply(this, arguments)
                };

                function i(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                }

                function a(e, t, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                    else
                        for (var l = e.length - 1; l >= 0; l--)(o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                    return i > 3 && a && Object.defineProperty(t, n, a), a
                }

                function l(e, t) {
                    return function(n, r) {
                        t(n, r, e)
                    }
                }

                function u(e, t, n, r, o, i) {
                    function a(e) {
                        if (void 0 !== e && "function" !== typeof e) throw new TypeError("Function expected");
                        return e
                    }
                    for (var l, u = r.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", c = !t && e ? r.static ? e : e.prototype : null, f = t || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
                        var h = {};
                        for (var g in r) h[g] = "access" === g ? {} : r[g];
                        for (var g in r.access) h.access[g] = r.access[g];
                        h.addInitializer = function(e) {
                            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
                            i.push(a(e || null))
                        };
                        var v = (0, n[p])("accessor" === u ? {
                            get: f.get,
                            set: f.set
                        } : f[s], h);
                        if ("accessor" === u) {
                            if (void 0 === v) continue;
                            if (null === v || "object" !== typeof v) throw new TypeError("Object expected");
                            (l = a(v.get)) && (f.get = l), (l = a(v.set)) && (f.set = l), (l = a(v.init)) && o.unshift(l)
                        } else(l = a(v)) && ("field" === u ? o.unshift(l) : f[s] = l)
                    }
                    c && Object.defineProperty(c, r.name, f), d = !0
                }

                function s(e, t, n) {
                    for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
                    return r ? n : void 0
                }

                function c(e) {
                    return "symbol" === typeof e ? e : "".concat(e)
                }

                function f(e, t, n) {
                    return "symbol" === typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                        configurable: !0,
                        value: n ? "".concat(n, " ", t) : t
                    })
                }

                function d(e, t) {
                    if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function p(e, t, n, r) {
                    function o(e) {
                        return e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, i) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(e) {
                            e.done ? n(e.value) : o(e.value).then(a, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                }

                function h(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(e) {
                        return function(t) {
                            return u([e, t])
                        }
                    }

                    function u(l) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0, l[0] && (a = 0)), a;) try {
                            if (n = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                            switch (r = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                                case 0:
                                case 1:
                                    o = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < o[1]) {
                                        a.label = o[1], o = l;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(l);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = t.call(e, a)
                        } catch (u) {
                            l = [6, u], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
                var g = Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, o)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                };

                function v(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || g(t, e, n)
                }

                function m(e) {
                    var t = "function" === typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" === typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function y(e, t) {
                    var n = "function" === typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (ev) {
                        o = {
                            error: ev
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                }

                function b() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
                    return e
                }

                function _() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        o = 0;
                    for (t = 0; t < n; t++)
                        for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++) r[o] = i[a];
                    return r
                }

                function w(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }

                function S(e) {
                    return this instanceof S ? (this.v = e, this) : new S(e)
                }

                function k(e, t, n) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, o = n.apply(e, t || []),
                        i = [];
                    return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function a(e) {
                        o[e] && (r[e] = function(t) {
                            return new Promise((function(n, r) {
                                i.push([e, t, n, r]) > 1 || l(e, t)
                            }))
                        })
                    }

                    function l(e, t) {
                        try {
                            u(o[e](t))
                        } catch (n) {
                            f(i[0][3], n)
                        }
                    }

                    function u(e) {
                        e.value instanceof S ? Promise.resolve(e.value.v).then(s, c) : f(i[0][2], e)
                    }

                    function s(e) {
                        l("next", e)
                    }

                    function c(e) {
                        l("throw", e)
                    }

                    function f(e, t) {
                        e(t), i.shift(), i.length && l(i[0][0], i[0][1])
                    }
                }

                function C(e) {
                    var t, n;
                    return t = {}, r("next"), r("throw", (function(e) {
                        throw e
                    })), r("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function r(r, o) {
                        t[r] = e[r] ? function(t) {
                            return (n = !n) ? {
                                value: S(e[r](t)),
                                done: !1
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function x(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, n = e[Symbol.asyncIterator];
                    return n ? n.call(e) : (e = "function" === typeof m ? m(e) : e[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function r(n) {
                        t[n] = e[n] && function(t) {
                            return new Promise((function(r, i) {
                                o(r, i, (t = e[n](t)).done, t.value)
                            }))
                        }
                    }

                    function o(e, t, n, r) {
                        Promise.resolve(r).then((function(t) {
                            e({
                                value: t,
                                done: n
                            })
                        }), t)
                    }
                }

                function I(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }
                var E = Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                };

                function M(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && g(t, e, n);
                    return E(t, e), t
                }

                function R(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function O(e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }

                function T(e, t, n, r, o) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
                }

                function N(e, t) {
                    if (null === t || "object" !== typeof t && "function" !== typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                    return "function" === typeof e ? t === e : e.has(t)
                }

                function P(e, t, n) {
                    if (null !== t && void 0 !== t) {
                        if ("object" !== typeof t && "function" !== typeof t) throw new TypeError("Object expected.");
                        var r;
                        if (n) {
                            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                            r = t[Symbol.asyncDispose]
                        }
                        if (void 0 === r) {
                            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                            r = t[Symbol.dispose]
                        }
                        if ("function" !== typeof r) throw new TypeError("Object not disposable.");
                        e.stack.push({
                            value: t,
                            dispose: r,
                            async: n
                        })
                    } else n && e.stack.push({
                        async: !0
                    });
                    return t
                }
                var D = "function" === typeof SuppressedError ? SuppressedError : function(e, t, n) {
                    var r = new Error(n);
                    return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
                };

                function j(e) {
                    function t(t) {
                        e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                    }

                    function n() {
                        for (; e.stack.length;) {
                            var r = e.stack.pop();
                            try {
                                var o = r.dispose && r.dispose.call(r.value);
                                if (r.async) return Promise.resolve(o).then(n, (function(e) {
                                    return t(e), n()
                                }))
                            } catch (i) {
                                t(i)
                            }
                        }
                        if (e.hasError) throw e.error
                    }
                    return n()
                }
                var L = {
                        __extends: r,
                        __assign: o,
                        __rest: i,
                        __decorate: a,
                        __param: l,
                        __metadata: d,
                        __awaiter: p,
                        __generator: h,
                        __createBinding: g,
                        __exportStar: v,
                        __values: m,
                        __read: y,
                        __spread: b,
                        __spreadArrays: _,
                        __spreadArray: w,
                        __await: S,
                        __asyncGenerator: k,
                        __asyncDelegator: C,
                        __asyncValues: x,
                        __makeTemplateObject: I,
                        __importStar: M,
                        __importDefault: R,
                        __classPrivateFieldGet: O,
                        __classPrivateFieldSet: T,
                        __classPrivateFieldIn: N,
                        __addDisposableResource: P,
                        __disposeResources: j
                    },
                    z = Object.freeze({
                        __proto__: null,
                        __extends: r,
                        get __assign() {
                            return o
                        },
                        __rest: i,
                        __decorate: a,
                        __param: l,
                        __esDecorate: u,
                        __runInitializers: s,
                        __propKey: c,
                        __setFunctionName: f,
                        __metadata: d,
                        __awaiter: p,
                        __generator: h,
                        __createBinding: g,
                        __exportStar: v,
                        __values: m,
                        __read: y,
                        __spread: b,
                        __spreadArrays: _,
                        __spreadArray: w,
                        __await: S,
                        __asyncGenerator: k,
                        __asyncDelegator: C,
                        __asyncValues: x,
                        __makeTemplateObject: I,
                        __importStar: M,
                        __importDefault: R,
                        __classPrivateFieldGet: O,
                        __classPrivateFieldSet: T,
                        __classPrivateFieldIn: N,
                        __addDisposableResource: P,
                        __disposeResources: j,
                        default: L
                    });

                function A(e) {
                    if (e.__esModule) return e;
                    var t = Object.defineProperty({}, "__esModule", {
                        value: !0
                    });
                    return Object.keys(e).forEach((function(n) {
                        var r = Object.getOwnPropertyDescriptor(e, n);
                        Object.defineProperty(t, n, r.get ? r : {
                            enumerable: !0,
                            get: function() {
                                return e[n]
                            }
                        })
                    })), t
                }

                function F(e) {
                    var t = {
                        exports: {}
                    };
                    return e(t, t.exports), t.exports
                }
                var U = Symbol.for("react.element"),
                    V = Symbol.for("react.portal"),
                    B = Symbol.for("react.fragment"),
                    $ = Symbol.for("react.strict_mode"),
                    Q = Symbol.for("react.profiler"),
                    H = Symbol.for("react.provider"),
                    W = Symbol.for("react.context"),
                    G = Symbol.for("react.forward_ref"),
                    Y = Symbol.for("react.suspense"),
                    q = Symbol.for("react.memo"),
                    K = Symbol.for("react.lazy"),
                    X = Symbol.iterator;

                function J(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = X && e[X] || e["@@iterator"]) ? e : null
                }
                var Z = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    ee = Object.assign,
                    te = {};

                function ne(e, t, n) {
                    this.props = e, this.context = t, this.refs = te, this.updater = n || Z
                }

                function re() {}

                function oe(e, t, n) {
                    this.props = e, this.context = t, this.refs = te, this.updater = n || Z
                }
                ne.prototype.isReactComponent = {}, ne.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, ne.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, re.prototype = ne.prototype;
                var ie = oe.prototype = new re;
                ie.constructor = oe, ee(ie, ne.prototype), ie.isPureReactComponent = !0;
                var ae = Array.isArray,
                    le = Object.prototype.hasOwnProperty,
                    ue = {
                        current: null
                    },
                    se = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function ce(e, t, n) {
                    var r, o = {},
                        i = null,
                        a = null;
                    if (null != t)
                        for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t) le.call(t, r) && !se.hasOwnProperty(r) && (o[r] = t[r]);
                    var l = arguments.length - 2;
                    if (1 === l) o.children = n;
                    else if (1 < l) {
                        for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (r in l = e.defaultProps) void 0 === o[r] && (o[r] = l[r]);
                    return {
                        $$typeof: U,
                        type: e,
                        key: i,
                        ref: a,
                        props: o,
                        _owner: ue.current
                    }
                }

                function fe(e, t) {
                    return {
                        $$typeof: U,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }

                function de(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === U
                }

                function pe(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }
                var he = /\/+/g;

                function ge(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? pe("" + e.key) : t.toString(36)
                }

                function ve(e, t, n, r, o) {
                    var i = typeof e;
                    "undefined" !== i && "boolean" !== i || (e = null);
                    var a = !1;
                    if (null === e) a = !0;
                    else switch (i) {
                        case "string":
                        case "number":
                            a = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case U:
                                case V:
                                    a = !0
                            }
                    }
                    if (a) return o = o(a = e), e = "" === r ? "." + ge(a, 0) : r, ae(o) ? (n = "", null != e && (n = e.replace(he, "$&/") + "/"), ve(o, t, n, "", (function(e) {
                        return e
                    }))) : null != o && (de(o) && (o = fe(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(he, "$&/") + "/") + e)), t.push(o)), 1;
                    if (a = 0, r = "" === r ? "." : r + ":", ae(e))
                        for (var l = 0; l < e.length; l++) {
                            var u = r + ge(i = e[l], l);
                            a += ve(i, t, n, u, o)
                        } else if ("function" === typeof(u = J(e)))
                            for (e = u.call(e), l = 0; !(i = e.next()).done;) a += ve(i = i.value, t, n, u = r + ge(i, l++), o);
                        else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return a
                }

                function me(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        o = 0;
                    return ve(e, r, "", "", (function(e) {
                        return t.call(n, e, o++)
                    })), r
                }

                function ye(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var be = {
                        current: null
                    },
                    _e = {
                        transition: null
                    },
                    we = {
                        map: me,
                        forEach: function(e, t, n) {
                            me(e, (function() {
                                t.apply(this, arguments)
                            }), n)
                        },
                        count: function(e) {
                            var t = 0;
                            return me(e, (function() {
                                t++
                            })), t
                        },
                        toArray: function(e) {
                            return me(e, (function(e) {
                                return e
                            })) || []
                        },
                        only: function(e) {
                            if (!de(e)) throw Error("React.Children.only expected to receive a single React element child.");
                            return e
                        }
                    },
                    Se = function(e, t, n) {
                        if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                        var r = ee({}, e.props),
                            o = e.key,
                            i = e.ref,
                            a = e._owner;
                        if (null != t) {
                            if (void 0 !== t.ref && (i = t.ref, a = ue.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                            for (u in t) le.call(t, u) && !se.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                        }
                        var u = arguments.length - 2;
                        if (1 === u) r.children = n;
                        else if (1 < u) {
                            l = Array(u);
                            for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
                            r.children = l
                        }
                        return {
                            $$typeof: U,
                            type: e.type,
                            key: o,
                            ref: i,
                            props: r,
                            _owner: a
                        }
                    },
                    ke = {
                        Children: we,
                        Component: ne,
                        Fragment: B,
                        Profiler: Q,
                        PureComponent: oe,
                        StrictMode: $,
                        Suspense: Y,
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                            ReactCurrentDispatcher: be,
                            ReactCurrentBatchConfig: _e,
                            ReactCurrentOwner: ue
                        },
                        cloneElement: Se,
                        createContext: function(e) {
                            return (e = {
                                $$typeof: W,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                                _defaultValue: null,
                                _globalName: null
                            }).Provider = {
                                $$typeof: H,
                                _context: e
                            }, e.Consumer = e
                        },
                        createElement: ce,
                        createFactory: function(e) {
                            var t = ce.bind(null, e);
                            return t.type = e, t
                        },
                        createRef: function() {
                            return {
                                current: null
                            }
                        },
                        forwardRef: function(e) {
                            return {
                                $$typeof: G,
                                render: e
                            }
                        },
                        isValidElement: de,
                        lazy: function(e) {
                            return {
                                $$typeof: K,
                                _payload: {
                                    _status: -1,
                                    _result: e
                                },
                                _init: ye
                            }
                        },
                        memo: function(e, t) {
                            return {
                                $$typeof: q,
                                type: e,
                                compare: void 0 === t ? null : t
                            }
                        },
                        startTransition: function(e) {
                            var t = _e.transition;
                            _e.transition = {};
                            try {
                                e()
                            } finally {
                                _e.transition = t
                            }
                        },
                        unstable_act: function() {
                            throw Error("act(...) is not supported in production builds of React.")
                        },
                        useCallback: function(e, t) {
                            return be.current.useCallback(e, t)
                        },
                        useContext: function(e) {
                            return be.current.useContext(e)
                        },
                        useDebugValue: function() {},
                        useDeferredValue: function(e) {
                            return be.current.useDeferredValue(e)
                        },
                        useEffect: function(e, t) {
                            return be.current.useEffect(e, t)
                        },
                        useId: function() {
                            return be.current.useId()
                        },
                        useImperativeHandle: function(e, t, n) {
                            return be.current.useImperativeHandle(e, t, n)
                        },
                        useInsertionEffect: function(e, t) {
                            return be.current.useInsertionEffect(e, t)
                        },
                        useLayoutEffect: function(e, t) {
                            return be.current.useLayoutEffect(e, t)
                        },
                        useMemo: function(e, t) {
                            return be.current.useMemo(e, t)
                        },
                        useReducer: function(e, t, n) {
                            return be.current.useReducer(e, t, n)
                        },
                        useRef: function(e) {
                            return be.current.useRef(e)
                        },
                        useState: function(e) {
                            return be.current.useState(e)
                        },
                        useSyncExternalStore: function(e, t, n) {
                            return be.current.useSyncExternalStore(e, t, n)
                        },
                        useTransition: function() {
                            return be.current.useTransition()
                        },
                        version: "18.2.0"
                    },
                    Ce = (F((function(e, t) {})), F((function(e) {
                        e.exports = ke
                    }))),
                    xe = F((function(e, t) {
                        function n(e, t) {
                            var n = e.length;
                            e.push(t);
                            e: for (; 0 < n;) {
                                var r = n - 1 >>> 1,
                                    o = e[r];
                                if (!(0 < i(o, t))) break e;
                                e[r] = t, e[n] = o, n = r
                            }
                        }

                        function r(e) {
                            return 0 === e.length ? null : e[0]
                        }

                        function o(e) {
                            if (0 === e.length) return null;
                            var t = e[0],
                                n = e.pop();
                            if (n !== t) {
                                e[0] = n;
                                e: for (var r = 0, o = e.length, a = o >>> 1; r < a;) {
                                    var l = 2 * (r + 1) - 1,
                                        u = e[l],
                                        s = l + 1,
                                        c = e[s];
                                    if (0 > i(u, n)) s < o && 0 > i(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
                                    else {
                                        if (!(s < o && 0 > i(c, n))) break e;
                                        e[r] = c, e[s] = n, r = s
                                    }
                                }
                            }
                            return t
                        }

                        function i(e, t) {
                            var n = e.sortIndex - t.sortIndex;
                            return 0 !== n ? n : e.id - t.id
                        }
                        if ("object" === typeof performance && "function" === typeof performance.now) {
                            var a = performance;
                            t.unstable_now = function() {
                                return a.now()
                            }
                        } else {
                            var l = Date,
                                u = l.now();
                            t.unstable_now = function() {
                                return l.now() - u
                            }
                        }
                        var s = [],
                            c = [],
                            f = 1,
                            d = null,
                            p = 3,
                            h = !1,
                            g = !1,
                            v = !1,
                            m = "function" === typeof setTimeout ? setTimeout : null,
                            y = "function" === typeof clearTimeout ? clearTimeout : null,
                            b = "undefined" !== typeof setImmediate ? setImmediate : null;

                        function _(e) {
                            for (var t = r(c); null !== t;) {
                                if (null === t.callback) o(c);
                                else {
                                    if (!(t.startTime <= e)) break;
                                    o(c), t.sortIndex = t.expirationTime, n(s, t)
                                }
                                t = r(c)
                            }
                        }

                        function w(e) {
                            if (v = !1, _(e), !g)
                                if (null !== r(s)) g = !0, P(S);
                                else {
                                    var t = r(c);
                                    null !== t && D(w, t.startTime - e)
                                }
                        }

                        function S(e, n) {
                            g = !1, v && (v = !1, y(I), I = -1), h = !0;
                            var i = p;
                            try {
                                for (_(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !R());) {
                                    var a = d.callback;
                                    if ("function" === typeof a) {
                                        d.callback = null, p = d.priorityLevel;
                                        var l = a(d.expirationTime <= n);
                                        n = t.unstable_now(), "function" === typeof l ? d.callback = l : d === r(s) && o(s), _(n)
                                    } else o(s);
                                    d = r(s)
                                }
                                if (null !== d) var u = !0;
                                else {
                                    var f = r(c);
                                    null !== f && D(w, f.startTime - n), u = !1
                                }
                                return u
                            } finally {
                                d = null, p = i, h = !1
                            }
                        }
                        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                        var k, C = !1,
                            x = null,
                            I = -1,
                            E = 5,
                            M = -1;

                        function R() {
                            return !(t.unstable_now() - M < E)
                        }

                        function O() {
                            if (null !== x) {
                                var e = t.unstable_now();
                                M = e;
                                var n = !0;
                                try {
                                    n = x(!0, e)
                                } finally {
                                    n ? k() : (C = !1, x = null)
                                }
                            } else C = !1
                        }
                        if ("function" === typeof b) k = function() {
                            b(O)
                        };
                        else if ("undefined" !== typeof MessageChannel) {
                            var T = new MessageChannel,
                                N = T.port2;
                            T.port1.onmessage = O, k = function() {
                                N.postMessage(null)
                            }
                        } else k = function() {
                            m(O, 0)
                        };

                        function P(e) {
                            x = e, C || (C = !0, k())
                        }

                        function D(e, n) {
                            I = m((function() {
                                e(t.unstable_now())
                            }), n)
                        }
                        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                            e.callback = null
                        }, t.unstable_continueExecution = function() {
                            g || h || (g = !0, P(S))
                        }, t.unstable_forceFrameRate = function(e) {
                            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
                        }, t.unstable_getCurrentPriorityLevel = function() {
                            return p
                        }, t.unstable_getFirstCallbackNode = function() {
                            return r(s)
                        }, t.unstable_next = function(e) {
                            switch (p) {
                                case 1:
                                case 2:
                                case 3:
                                    var t = 3;
                                    break;
                                default:
                                    t = p
                            }
                            var n = p;
                            p = t;
                            try {
                                return e()
                            } finally {
                                p = n
                            }
                        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                            switch (e) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    break;
                                default:
                                    e = 3
                            }
                            var n = p;
                            p = e;
                            try {
                                return t()
                            } finally {
                                p = n
                            }
                        }, t.unstable_scheduleCallback = function(e, o, i) {
                            var a = t.unstable_now();
                            switch (i = "object" === typeof i && null !== i && "number" === typeof(i = i.delay) && 0 < i ? a + i : a, e) {
                                case 1:
                                    var l = -1;
                                    break;
                                case 2:
                                    l = 250;
                                    break;
                                case 5:
                                    l = 1073741823;
                                    break;
                                case 4:
                                    l = 1e4;
                                    break;
                                default:
                                    l = 5e3
                            }
                            return e = {
                                id: f++,
                                callback: o,
                                priorityLevel: e,
                                startTime: i,
                                expirationTime: l = i + l,
                                sortIndex: -1
                            }, i > a ? (e.sortIndex = i, n(c, e), null === r(s) && e === r(c) && (v ? (y(I), I = -1) : v = !0, D(w, i - a))) : (e.sortIndex = l, n(s, e), g || h || (g = !0, P(S))), e
                        }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(e) {
                            var t = p;
                            return function() {
                                var n = p;
                                p = t;
                                try {
                                    return e.apply(this, arguments)
                                } finally {
                                    p = n
                                }
                            }
                        }
                    })),
                    Ie = (F((function(e, t) {})), F((function(e) {
                        e.exports = xe
                    })));

                function Ee(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var Me = new Set,
                    Re = {};

                function Oe(e, t) {
                    Te(e, t), Te(e + "Capture", t)
                }

                function Te(e, t) {
                    for (Re[e] = t, e = 0; e < t.length; e++) Me.add(t[e])
                }
                var Ne = !("undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    Pe = Object.prototype.hasOwnProperty,
                    De = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    je = {},
                    Le = {};

                function ze(e) {
                    return !!Pe.call(Le, e) || !Pe.call(je, e) && (De.test(e) ? Le[e] = !0 : (je[e] = !0, !1))
                }

                function Ae(e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }

                function Fe(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || Ae(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }

                function Ue(e, t, n, r, o, i, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
                }
                var Ve = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    Ve[e] = new Ue(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    Ve[t] = new Ue(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    Ve[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    Ve[e] = new Ue(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    Ve[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    Ve[e] = new Ue(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    Ve[e] = new Ue(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    Ve[e] = new Ue(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    Ve[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var Be = /[\-:]([a-z])/g;

                function $e(e) {
                    return e[1].toUpperCase()
                }

                function Qe(e, t, n, r) {
                    var o = Ve.hasOwnProperty(t) ? Ve[t] : null;
                    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (Fe(t, n, o, r) && (n = null), r || null === o ? ze(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(Be, $e);
                    Ve[t] = new Ue(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(Be, $e);
                    Ve[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(Be, $e);
                    Ve[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    Ve[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), Ve.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    Ve[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var He = Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    We = Symbol.for("react.element"),
                    Ge = Symbol.for("react.portal"),
                    Ye = Symbol.for("react.fragment"),
                    qe = Symbol.for("react.strict_mode"),
                    Ke = Symbol.for("react.profiler"),
                    Xe = Symbol.for("react.provider"),
                    Je = Symbol.for("react.context"),
                    Ze = Symbol.for("react.forward_ref"),
                    et = Symbol.for("react.suspense"),
                    tt = Symbol.for("react.suspense_list"),
                    nt = Symbol.for("react.memo"),
                    rt = Symbol.for("react.lazy"),
                    ot = Symbol.for("react.offscreen"),
                    it = Symbol.iterator;

                function at(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = it && e[it] || e["@@iterator"]) ? e : null
                }
                var lt, ut = Object.assign;

                function st(e) {
                    if (void 0 === lt) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        lt = t && t[1] || ""
                    }
                    return "\n" + lt + e
                }
                var ct = !1;

                function ft(e, t) {
                    if (!e || ct) return "";
                    ct = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (U) {
                                    var r = U
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (U) {
                                    r = U
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (U) {
                                r = U
                            }
                            e()
                        }
                    } catch (U) {
                        if (U && r && "string" === typeof U.stack) {
                            for (var o = U.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l];) l--;
                            for (; 1 <= a && 0 <= l; a--, l--)
                                if (o[a] !== i[l]) {
                                    if (1 !== a || 1 !== l)
                                        do {
                                            if (a--, 0 > --l || o[a] !== i[l]) {
                                                var u = "\n" + o[a].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= a && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        ct = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? st(e) : ""
                }

                function dt(e) {
                    switch (e.tag) {
                        case 5:
                            return st(e.type);
                        case 16:
                            return st("Lazy");
                        case 13:
                            return st("Suspense");
                        case 19:
                            return st("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = ft(e.type, !1);
                        case 11:
                            return e = ft(e.type.render, !1);
                        case 1:
                            return e = ft(e.type, !0);
                        default:
                            return ""
                    }
                }

                function pt(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case Ye:
                            return "Fragment";
                        case Ge:
                            return "Portal";
                        case Ke:
                            return "Profiler";
                        case qe:
                            return "StrictMode";
                        case et:
                            return "Suspense";
                        case tt:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case Je:
                            return (e.displayName || "Context") + ".Consumer";
                        case Xe:
                            return (e._context.displayName || "Context") + ".Provider";
                        case Ze:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case nt:
                            return null !== (t = e.displayName || null) ? t : pt(e.type) || "Memo";
                        case rt:
                            t = e._payload, e = e._init;
                            try {
                                return pt(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function ht(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return pt(t);
                        case 8:
                            return t === qe ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function gt(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function vt(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function mt(e) {
                    var t = vt(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var o = n.get,
                            i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return o.call(this)
                            },
                            set: function(e) {
                                r = "" + e, i.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }

                function yt(e) {
                    e._valueTracker || (e._valueTracker = mt(e))
                }

                function bt(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = vt(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function _t(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function wt(e, t) {
                    var n = t.checked;
                    return ut({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function St(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = gt(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function kt(e, t) {
                    null != (t = t.checked) && Qe(e, "checked", t, !1)
                }

                function Ct(e, t) {
                    kt(e, t);
                    var n = gt(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? It(e, t.type, n) : t.hasOwnProperty("defaultValue") && It(e, t.type, gt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function xt(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function It(e, t, n) {
                    "number" === t && _t(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var Et = Array.isArray;

                function Mt(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + gt(n), t = null, o = 0; o < e.length; o++) {
                            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                            null !== t || e[o].disabled || (t = e[o])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function Rt(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(Ee(91));
                    return ut({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function Ot(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(Ee(92));
                            if (Et(n)) {
                                if (1 < n.length) throw Error(Ee(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: gt(n)
                    }
                }

                function Tt(e, t) {
                    var n = gt(t.value),
                        r = gt(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function Nt(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function Pt(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function Dt(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? Pt(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var jt, Lt, zt = (Lt = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((jt = jt || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jt.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return Lt(e, t, n, r)
                    }))
                } : Lt);

                function At(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var Ft = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    Ut = ["Webkit", "ms", "Moz", "O"];

                function Vt(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || Ft.hasOwnProperty(e) && Ft[e] ? ("" + t).trim() : t + "px"
                }

                function Bt(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                o = Vt(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                        }
                }
                Object.keys(Ft).forEach((function(e) {
                    Ut.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ft[t] = Ft[e]
                    }))
                }));
                var $t = ut({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function Qt(e, t) {
                    if (t) {
                        if ($t[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ee(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(Ee(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(Ee(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(Ee(62))
                    }
                }

                function Ht(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var Wt = null;

                function Gt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Yt = null,
                    qt = null,
                    Kt = null;

                function Xt(e) {
                    if (e = Zi(e)) {
                        if ("function" !== typeof Yt) throw Error(Ee(280));
                        var t = e.stateNode;
                        t && (t = ta(t), Yt(e.stateNode, e.type, t))
                    }
                }

                function Jt(e) {
                    qt ? Kt ? Kt.push(e) : Kt = [e] : qt = e
                }

                function Zt() {
                    if (qt) {
                        var e = qt,
                            t = Kt;
                        if (Kt = qt = null, Xt(e), t)
                            for (e = 0; e < t.length; e++) Xt(t[e])
                    }
                }

                function en(e, t) {
                    return e(t)
                }

                function tn() {}
                var nn = !1;

                function rn(e, t, n) {
                    if (nn) return e(t, n);
                    nn = !0;
                    try {
                        return en(e, t, n)
                    } finally {
                        nn = !1, (null !== qt || null !== Kt) && (tn(), Zt())
                    }
                }

                function on(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = ta(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(Ee(231, t, typeof n));
                    return n
                }
                var an = !1;
                if (Ne) try {
                    var ln = {};
                    Object.defineProperty(ln, "passive", {
                        get: function() {
                            an = !0
                        }
                    }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln)
                } catch (Lt) {
                    an = !1
                }

                function un(e, t, n, r, o, i, a, l, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var sn = !1,
                    cn = null,
                    fn = !1,
                    dn = null,
                    pn = {
                        onError: function(e) {
                            sn = !0, cn = e
                        }
                    };

                function hn(e, t, n, r, o, i, a, l, u) {
                    sn = !1, cn = null, un.apply(pn, arguments)
                }

                function gn(e, t, n, r, o, i, a, l, u) {
                    if (hn.apply(this, arguments), sn) {
                        if (!sn) throw Error(Ee(198));
                        var s = cn;
                        sn = !1, cn = null, fn || (fn = !0, dn = s)
                    }
                }

                function vn(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function mn(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                    }
                    return null
                }

                function yn(e) {
                    if (vn(e) !== e) throw Error(Ee(188))
                }

                function bn(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = vn(e))) throw Error(Ee(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var o = n.return;
                        if (null === o) break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i;) {
                                if (i === n) return yn(o), e;
                                if (i === r) return yn(o), t;
                                i = i.sibling
                            }
                            throw Error(Ee(188))
                        }
                        if (n.return !== r.return) n = o, r = i;
                        else {
                            for (var a = !1, l = o.child; l;) {
                                if (l === n) {
                                    a = !0, n = o, r = i;
                                    break
                                }
                                if (l === r) {
                                    a = !0, r = o, n = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!a) {
                                for (l = i.child; l;) {
                                    if (l === n) {
                                        a = !0, n = i, r = o;
                                        break
                                    }
                                    if (l === r) {
                                        a = !0, r = i, n = o;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!a) throw Error(Ee(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(Ee(190))
                    }
                    if (3 !== n.tag) throw Error(Ee(188));
                    return n.stateNode.current === n ? e : t
                }

                function _n(e) {
                    return null !== (e = bn(e)) ? wn(e) : null
                }

                function wn(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = wn(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Sn = Ie.unstable_scheduleCallback,
                    kn = Ie.unstable_cancelCallback,
                    Cn = Ie.unstable_shouldYield,
                    xn = Ie.unstable_requestPaint,
                    In = Ie.unstable_now,
                    En = Ie.unstable_getCurrentPriorityLevel,
                    Mn = Ie.unstable_ImmediatePriority,
                    Rn = Ie.unstable_UserBlockingPriority,
                    On = Ie.unstable_NormalPriority,
                    Tn = Ie.unstable_LowPriority,
                    Nn = Ie.unstable_IdlePriority,
                    Pn = null,
                    Dn = null;

                function jn(e) {
                    if (Dn && "function" === typeof Dn.onCommitFiberRoot) try {
                        Dn.onCommitFiberRoot(Pn, e, void 0, 128 === (128 & e.current.flags))
                    } catch (t) {}
                }
                var Ln = Math.clz32 ? Math.clz32 : Fn,
                    zn = Math.log,
                    An = Math.LN2;

                function Fn(e) {
                    return 0 === (e >>>= 0) ? 32 : 31 - (zn(e) / An | 0) | 0
                }
                var Un = 64,
                    Vn = 4194304;

                function Bn(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function $n(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes,
                        a = 268435455 & n;
                    if (0 !== a) {
                        var l = a & ~o;
                        0 !== l ? r = Bn(l) : 0 !== (i &= a) && (r = Bn(i))
                    } else 0 !== (a = n & ~o) ? r = Bn(a) : 0 !== i && (r = Bn(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (i = t & -t) || 16 === o && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Ln(t)), r |= e[n], t &= ~o;
                    return r
                }

                function Qn(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function Hn(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                        var a = 31 - Ln(i),
                            l = 1 << a,
                            u = o[a]; - 1 === u ? 0 !== (l & n) && 0 === (l & r) || (o[a] = Qn(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l
                    }
                }

                function Wn(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function Gn() {
                    var e = Un;
                    return 0 === (4194240 & (Un <<= 1)) && (Un = 64), e
                }

                function Yn(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function qn(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - Ln(t)] = n
                }

                function Kn(e, t) {
                    var n = e.pendingLanes & ~t;
                    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n;) {
                        var o = 31 - Ln(n),
                            i = 1 << o;
                        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
                    }
                }

                function Xn(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - Ln(n),
                            o = 1 << r;
                        o & t | e[r] & t && (e[r] |= t), n &= ~o
                    }
                }
                var Jn = 0;

                function Zn(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var er, tr, nr, rr, or, ir = !1,
                    ar = [],
                    lr = null,
                    ur = null,
                    sr = null,
                    cr = new Map,
                    fr = new Map,
                    dr = [],
                    pr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function hr(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            lr = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            ur = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            sr = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            cr.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            fr.delete(t.pointerId)
                    }
                }

                function gr(e, t, n, r, o, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [o]
                    }, null !== t && null !== (t = Zi(t)) && tr(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
                }

                function vr(e, t, n, r, o) {
                    switch (t) {
                        case "focusin":
                            return lr = gr(lr, e, t, n, r, o), !0;
                        case "dragenter":
                            return ur = gr(ur, e, t, n, r, o), !0;
                        case "mouseover":
                            return sr = gr(sr, e, t, n, r, o), !0;
                        case "pointerover":
                            var i = o.pointerId;
                            return cr.set(i, gr(cr.get(i) || null, e, t, n, r, o)), !0;
                        case "gotpointercapture":
                            return i = o.pointerId, fr.set(i, gr(fr.get(i) || null, e, t, n, r, o)), !0
                    }
                    return !1
                }

                function mr(e) {
                    var t = Ji(e.target);
                    if (null !== t) {
                        var n = vn(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = mn(n))) return e.blockedOn = t, void or(e.priority, (function() {
                                    nr(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function yr(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Rr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = Zi(n)) && tr(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        Wt = r, n.target.dispatchEvent(r), Wt = null, t.shift()
                    }
                    return !0
                }

                function br(e, t, n) {
                    yr(e) && n.delete(t)
                }

                function _r() {
                    ir = !1, null !== lr && yr(lr) && (lr = null), null !== ur && yr(ur) && (ur = null), null !== sr && yr(sr) && (sr = null), cr.forEach(br), fr.forEach(br)
                }

                function wr(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, ir || (ir = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, _r)))
                }

                function Sr(e) {
                    function t(t) {
                        return wr(t, e)
                    }
                    if (0 < ar.length) {
                        wr(ar[0], e);
                        for (var n = 1; n < ar.length; n++) {
                            var r = ar[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== lr && wr(lr, e), null !== ur && wr(ur, e), null !== sr && wr(sr, e), cr.forEach(t), fr.forEach(t), n = 0; n < dr.length; n++)(r = dr[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < dr.length && null === (n = dr[0]).blockedOn;) mr(n), null === n.blockedOn && dr.shift()
                }
                var kr = He.ReactCurrentBatchConfig,
                    Cr = !0;

                function xr(e, t, n, r) {
                    var o = Jn,
                        i = kr.transition;
                    kr.transition = null;
                    try {
                        Jn = 1, Er(e, t, n, r)
                    } finally {
                        Jn = o, kr.transition = i
                    }
                }

                function Ir(e, t, n, r) {
                    var o = Jn,
                        i = kr.transition;
                    kr.transition = null;
                    try {
                        Jn = 4, Er(e, t, n, r)
                    } finally {
                        Jn = o, kr.transition = i
                    }
                }

                function Er(e, t, n, r) {
                    if (Cr) {
                        var o = Rr(e, t, n, r);
                        if (null === o) Ci(e, t, r, Mr, n), hr(e, r);
                        else if (vr(o, e, t, n, r)) r.stopPropagation();
                        else if (hr(e, r), 4 & t && -1 < pr.indexOf(e)) {
                            for (; null !== o;) {
                                var i = Zi(o);
                                if (null !== i && er(i), null === (i = Rr(e, t, n, r)) && Ci(e, t, r, Mr, n), i === o) break;
                                o = i
                            }
                            null !== o && r.stopPropagation()
                        } else Ci(e, t, r, null, n)
                    }
                }
                var Mr = null;

                function Rr(e, t, n, r) {
                    if (Mr = null, null !== (e = Ji(e = Gt(r))))
                        if (null === (t = vn(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = mn(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Mr = e, null
                }

                function Or(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (En()) {
                                case Mn:
                                    return 1;
                                case Rn:
                                    return 4;
                                case On:
                                case Tn:
                                    return 16;
                                case Nn:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Tr = null,
                    Nr = null,
                    Pr = null;

                function Dr() {
                    if (Pr) return Pr;
                    var e, t, n = Nr,
                        r = n.length,
                        o = "value" in Tr ? Tr.value : Tr.textContent,
                        i = o.length;
                    for (e = 0; e < r && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                    return Pr = o.slice(e, 1 < t ? 1 - t : void 0)
                }

                function jr(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function Lr() {
                    return !0
                }

                function zr() {
                    return !1
                }

                function Ar(e) {
                    function t(t, n, r, o, i) {
                        for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(o) : o[a]);
                        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? Lr : zr, this.isPropagationStopped = zr, this
                    }
                    return ut(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Lr)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Lr)
                        },
                        persist: function() {},
                        isPersistent: Lr
                    }), t
                }
                var Fr, Ur, Vr, Br = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    $r = Ar(Br),
                    Qr = ut({}, Br, {
                        view: 0,
                        detail: 0
                    }),
                    Hr = Ar(Qr),
                    Wr = ut({}, Qr, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: ro,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== Vr && (Vr && "mousemove" === e.type ? (Fr = e.screenX - Vr.screenX, Ur = e.screenY - Vr.screenY) : Ur = Fr = 0, Vr = e), Fr)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : Ur
                        }
                    }),
                    Gr = Ar(Wr),
                    Yr = Ar(ut({}, Wr, {
                        dataTransfer: 0
                    })),
                    qr = Ar(ut({}, Qr, {
                        relatedTarget: 0
                    })),
                    Kr = Ar(ut({}, Br, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Xr = Ar(ut({}, Br, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    })),
                    Jr = Ar(ut({}, Br, {
                        data: 0
                    })),
                    Zr = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    eo = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    to = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function no(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = to[e]) && !!t[e]
                }

                function ro() {
                    return no
                }
                var oo = Ar(ut({}, Qr, {
                        key: function(e) {
                            if (e.key) {
                                var t = Zr[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = jr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? eo[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: ro,
                        charCode: function(e) {
                            return "keypress" === e.type ? jr(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? jr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    })),
                    io = Ar(ut({}, Wr, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    ao = Ar(ut({}, Qr, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: ro
                    })),
                    lo = Ar(ut({}, Br, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    uo = Ar(ut({}, Wr, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    })),
                    so = [9, 13, 27, 32],
                    co = Ne && "CompositionEvent" in window,
                    fo = null;
                Ne && "documentMode" in document && (fo = document.documentMode);
                var po = Ne && "TextEvent" in window && !fo,
                    ho = Ne && (!co || fo && 8 < fo && 11 >= fo),
                    go = String.fromCharCode(32),
                    vo = !1;

                function mo(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== so.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function yo(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var bo = !1;

                function _o(e, t) {
                    switch (e) {
                        case "compositionend":
                            return yo(t);
                        case "keypress":
                            return 32 !== t.which ? null : (vo = !0, go);
                        case "textInput":
                            return (e = t.data) === go && vo ? null : e;
                        default:
                            return null
                    }
                }

                function wo(e, t) {
                    if (bo) return "compositionend" === e || !co && mo(e, t) ? (e = Dr(), Pr = Nr = Tr = null, bo = !1, e) : null;
                    switch (e) {
                        case "paste":
                        default:
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return ho && "ko" !== t.locale ? null : t.data
                    }
                }
                var So = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function ko(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!So[e.type] : "textarea" === t
                }

                function Co(e, t, n, r) {
                    Jt(r), 0 < (t = Ii(t, "onChange")).length && (n = new $r("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var xo = null,
                    Io = null;

                function Eo(e) {
                    yi(e, 0)
                }

                function Mo(e) {
                    if (bt(ea(e))) return e
                }

                function Ro(e, t) {
                    if ("change" === e) return t
                }
                var Oo = !1;
                if (Ne) {
                    var To;
                    if (Ne) {
                        var No = "oninput" in document;
                        if (!No) {
                            var Po = document.createElement("div");
                            Po.setAttribute("oninput", "return;"), No = "function" === typeof Po.oninput
                        }
                        To = No
                    } else To = !1;
                    Oo = To && (!document.documentMode || 9 < document.documentMode)
                }

                function Do() {
                    xo && (xo.detachEvent("onpropertychange", jo), Io = xo = null)
                }

                function jo(e) {
                    if ("value" === e.propertyName && Mo(Io)) {
                        var t = [];
                        Co(t, Io, e, Gt(e)), rn(Eo, t)
                    }
                }

                function Lo(e, t, n) {
                    "focusin" === e ? (Do(), Io = n, (xo = t).attachEvent("onpropertychange", jo)) : "focusout" === e && Do()
                }

                function zo(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Mo(Io)
                }

                function Ao(e, t) {
                    if ("click" === e) return Mo(t)
                }

                function Fo(e, t) {
                    if ("input" === e || "change" === e) return Mo(t)
                }

                function Uo(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                }
                var Vo = "function" === typeof Object.is ? Object.is : Uo;

                function Bo(e, t) {
                    if (Vo(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (!Pe.call(t, o) || !Vo(e[o], t[o])) return !1
                    }
                    return !0
                }

                function $o(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function Qo(e, t) {
                    var n, r = $o(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = $o(r)
                    }
                }

                function Ho(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Ho(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function Wo() {
                    for (var e = window, t = _t(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = _t((e = t.contentWindow).document)
                    }
                    return t
                }

                function Go(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function Yo(e) {
                    var t = Wo(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && Ho(n.ownerDocument.documentElement, n)) {
                        if (null !== r && Go(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var o = n.textContent.length,
                                i = Math.min(r.start, o);
                            r = void 0 === r.end ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Qo(n, i);
                            var a = Qo(n, r);
                            o && a && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var qo = Ne && "documentMode" in document && 11 >= document.documentMode,
                    Ko = null,
                    Xo = null,
                    Jo = null,
                    Zo = !1;

                function ei(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    Zo || null == Ko || Ko !== _t(r) || (r = "selectionStart" in (r = Ko) && Go(r) ? {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, Jo && Bo(Jo, r) || (Jo = r, 0 < (r = Ii(Xo, "onSelect")).length && (t = new $r("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = Ko)))
                }

                function ti(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var ni = {
                        animationend: ti("Animation", "AnimationEnd"),
                        animationiteration: ti("Animation", "AnimationIteration"),
                        animationstart: ti("Animation", "AnimationStart"),
                        transitionend: ti("Transition", "TransitionEnd")
                    },
                    ri = {},
                    oi = {};

                function ii(e) {
                    if (ri[e]) return ri[e];
                    if (!ni[e]) return e;
                    var t, n = ni[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in oi) return ri[e] = n[t];
                    return e
                }
                Ne && (oi = document.createElement("div").style, "AnimationEvent" in window || (delete ni.animationend.animation, delete ni.animationiteration.animation, delete ni.animationstart.animation), "TransitionEvent" in window || delete ni.transitionend.transition);
                var ai = ii("animationend"),
                    li = ii("animationiteration"),
                    ui = ii("animationstart"),
                    si = ii("transitionend"),
                    ci = new Map,
                    fi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function di(e, t) {
                    ci.set(e, t), Oe(t, [e])
                }
                for (var pi = 0; pi < fi.length; pi++) {
                    var hi = fi[pi];
                    di(hi.toLowerCase(), "on" + (hi[0].toUpperCase() + hi.slice(1)))
                }
                di(ai, "onAnimationEnd"), di(li, "onAnimationIteration"), di(ui, "onAnimationStart"), di("dblclick", "onDoubleClick"), di("focusin", "onFocus"), di("focusout", "onBlur"), di(si, "onTransitionEnd"), Te("onMouseEnter", ["mouseout", "mouseover"]), Te("onMouseLeave", ["mouseout", "mouseover"]), Te("onPointerEnter", ["pointerout", "pointerover"]), Te("onPointerLeave", ["pointerout", "pointerover"]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    vi = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));

                function mi(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n, gn(r, t, void 0, e), e.currentTarget = null
                }

                function yi(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var a = r.length - 1; 0 <= a; a--) {
                                    var l = r[a],
                                        u = l.instance,
                                        s = l.currentTarget;
                                    if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                    mi(o, l, s), i = u
                                } else
                                    for (a = 0; a < r.length; a++) {
                                        if (u = (l = r[a]).instance, s = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                        mi(o, l, s), i = u
                                    }
                        }
                    }
                    if (fn) throw e = dn, fn = !1, dn = null, e
                }

                function bi(e, t) {
                    var n = t[qi];
                    void 0 === n && (n = t[qi] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (ki(t, e, 2, !1), n.add(r))
                }

                function _i(e, t, n) {
                    var r = 0;
                    t && (r |= 4), ki(n, e, r, t)
                }
                var wi = "_reactListening" + Math.random().toString(36).slice(2);

                function Si(e) {
                    if (!e[wi]) {
                        e[wi] = !0, Me.forEach((function(t) {
                            "selectionchange" !== t && (vi.has(t) || _i(t, !1, e), _i(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[wi] || (t[wi] = !0, _i("selectionchange", !1, t))
                    }
                }

                function ki(e, t, n, r) {
                    switch (Or(t)) {
                        case 1:
                            var o = xr;
                            break;
                        case 4:
                            o = Ir;
                            break;
                        default:
                            o = Er
                    }
                    n = o.bind(null, t, n, e), o = void 0, !an || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: o
                    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                        passive: o
                    }) : e.addEventListener(t, n, !1)
                }

                function Ci(e, t, n, r, o) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var l = r.stateNode.containerInfo;
                            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                            if (4 === a)
                                for (a = r.return; null !== a;) {
                                    var u = a.tag;
                                    if ((3 === u || 4 === u) && ((u = a.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                                    a = a.return
                                }
                            for (; null !== l;) {
                                if (null === (a = Ji(l))) return;
                                if (5 === (u = a.tag) || 6 === u) {
                                    r = i = a;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    rn((function() {
                        var r = i,
                            o = Gt(n),
                            a = [];
                        e: {
                            var l = ci.get(e);
                            if (void 0 !== l) {
                                var u = $r,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === jr(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = oo;
                                        break;
                                    case "focusin":
                                        s = "focus", u = qr;
                                        break;
                                    case "focusout":
                                        s = "blur", u = qr;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = qr;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = Gr;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = Yr;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = ao;
                                        break;
                                    case ai:
                                    case li:
                                    case ui:
                                        u = Kr;
                                        break;
                                    case si:
                                        u = lo;
                                        break;
                                    case "scroll":
                                        u = Hr;
                                        break;
                                    case "wheel":
                                        u = uo;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = Xr;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = io
                                }
                                var c = 0 !== (4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var g = (p = h).stateNode;
                                    if (5 === p.tag && null !== g && (p = g, null !== d && null != (g = on(h, d)) && c.push(xi(h, g, p))), f) break;
                                    h = h.return
                                }
                                0 < c.length && (l = new u(l, s, null, n, o), a.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === Wt || !(s = n.relatedTarget || n.fromElement) || !Ji(s) && !s[Yi]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? Ji(s) : null) && (s !== (f = vn(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = Gr, g = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = io, g = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : ea(u), p = null == s ? l : ea(s), (l = new c(g, h + "leave", u, n, o)).target = f, l.relatedTarget = p, g = null, Ji(o) === r && ((c = new c(d, h + "enter", s, n, o)).target = p, c.relatedTarget = f, g = c), f = g, u && s) e: {
                                    for (d = s, h = 0, p = c = u; p; p = Ei(p)) h++;
                                    for (p = 0, g = d; g; g = Ei(g)) p++;
                                    for (; 0 < h - p;) c = Ei(c),
                                    h--;
                                    for (; 0 < p - h;) d = Ei(d),
                                    p--;
                                    for (; h--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Ei(c), d = Ei(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && Mi(a, l, u, c, !1), null !== s && null !== f && Mi(a, f, s, c, !0)
                            }
                            if ("select" === (u = (l = r ? ea(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = Ro;
                            else if (ko(l))
                                if (Oo) v = Fo;
                                else {
                                    v = zo;
                                    var m = Lo
                                }
                            else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = Ao);
                            switch (v && (v = v(e, r)) ? Co(a, v, n, o) : (m && m(e, l, r), "focusout" === e && (m = l._wrapperState) && m.controlled && "number" === l.type && It(l, "number", l.value)), m = r ? ea(r) : window, e) {
                                case "focusin":
                                    (ko(m) || "true" === m.contentEditable) && (Ko = m, Xo = r, Jo = null);
                                    break;
                                case "focusout":
                                    Jo = Xo = Ko = null;
                                    break;
                                case "mousedown":
                                    Zo = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    Zo = !1, ei(a, n, o);
                                    break;
                                case "selectionchange":
                                    if (qo) break;
                                case "keydown":
                                case "keyup":
                                    ei(a, n, o)
                            }
                            var y;
                            if (co) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else bo ? mo(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (ho && "ko" !== n.locale && (bo || "onCompositionStart" !== b ? "onCompositionEnd" === b && bo && (y = Dr()) : (Nr = "value" in (Tr = o) ? Tr.value : Tr.textContent, bo = !0)), 0 < (m = Ii(r, b)).length && (b = new Jr(b, e, null, n, o), a.push({
                                event: b,
                                listeners: m
                            }), (y || null !== (y = yo(n))) && (b.data = y))), (y = po ? _o(e, n) : wo(e, n)) && 0 < (r = Ii(r, "onBeforeInput")).length && (o = new Jr("onBeforeInput", "beforeinput", null, n, o), a.push({
                                event: o,
                                listeners: r
                            }), o.data = y)
                        }
                        yi(a, t)
                    }))
                }

                function xi(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Ii(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var o = e,
                            i = o.stateNode;
                        5 === o.tag && null !== i && (o = i, null != (i = on(e, n)) && r.unshift(xi(e, i, o)), null != (i = on(e, t)) && r.push(xi(e, i, o))), e = e.return
                    }
                    return r
                }

                function Ei(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Mi(e, t, n, r, o) {
                    for (var i = t._reactName, a = []; null !== n && n !== r;) {
                        var l = n,
                            u = l.alternate,
                            s = l.stateNode;
                        if (null !== u && u === r) break;
                        5 === l.tag && null !== s && (l = s, o ? null != (u = on(n, i)) && a.unshift(xi(n, u, l)) : o || null != (u = on(n, i)) && a.push(xi(n, u, l))), n = n.return
                    }
                    0 !== a.length && e.push({
                        event: t,
                        listeners: a
                    })
                }
                var Ri = /\r\n?/g,
                    Oi = /\u0000|\uFFFD/g;

                function Ti(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Ri, "\n").replace(Oi, "")
                }

                function Ni(e, t, n) {
                    if (t = Ti(t), Ti(e) !== t && n) throw Error(Ee(425))
                }

                function Pi() {}
                var Di = null,
                    ji = null;

                function Li(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var zi = "function" === typeof setTimeout ? setTimeout : void 0,
                    Ai = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    Fi = "function" === typeof Promise ? Promise : void 0,
                    Ui = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Fi ? function(e) {
                        return Fi.resolve(null).then(e).catch(Vi)
                    } : zi;

                function Vi(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function Bi(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var o = n.nextSibling;
                        if (e.removeChild(n), o && 8 === o.nodeType)
                            if ("/$" === (n = o.data)) {
                                if (0 === r) return e.removeChild(o), void Sr(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = o
                    } while (n);
                    Sr(t)
                }

                function $i(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function Qi(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Hi = Math.random().toString(36).slice(2),
                    Wi = "__reactFiber$" + Hi,
                    Gi = "__reactProps$" + Hi,
                    Yi = "__reactContainer$" + Hi,
                    qi = "__reactEvents$" + Hi,
                    Ki = "__reactListeners$" + Hi,
                    Xi = "__reactHandles$" + Hi;

                function Ji(e) {
                    var t = e[Wi];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[Yi] || n[Wi]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Qi(e); null !== e;) {
                                    if (n = e[Wi]) return n;
                                    e = Qi(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function Zi(e) {
                    return !(e = e[Wi] || e[Yi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function ea(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(Ee(33))
                }

                function ta(e) {
                    return e[Gi] || null
                }
                var na = [],
                    ra = -1;

                function oa(e) {
                    return {
                        current: e
                    }
                }

                function ia(e) {
                    0 > ra || (e.current = na[ra], na[ra] = null, ra--)
                }

                function aa(e, t) {
                    ra++, na[ra] = e.current, e.current = t
                }
                var la = {},
                    ua = oa(la),
                    sa = oa(!1),
                    ca = la;

                function fa(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return la;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var o, i = {};
                    for (o in n) i[o] = t[o];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function da(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function pa() {
                    ia(sa), ia(ua)
                }

                function ha(e, t, n) {
                    if (ua.current !== la) throw Error(Ee(168));
                    aa(ua, t), aa(sa, n)
                }

                function ga(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in t)) throw Error(Ee(108, ht(e) || "Unknown", o));
                    return ut({}, n, r)
                }

                function va(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || la, ca = ua.current, aa(ua, e), aa(sa, sa.current), !0
                }

                function ma(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(Ee(169));
                    n ? (e = ga(e, t, ca), r.__reactInternalMemoizedMergedChildContext = e, ia(sa), ia(ua), aa(ua, e)) : ia(sa), aa(sa, n)
                }
                var ya = null,
                    ba = !1,
                    _a = !1;

                function wa(e) {
                    null === ya ? ya = [e] : ya.push(e)
                }

                function Sa(e) {
                    ba = !0, wa(e)
                }

                function ka() {
                    if (!_a && null !== ya) {
                        _a = !0;
                        var e = 0,
                            t = Jn;
                        try {
                            var n = ya;
                            for (Jn = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            ya = null, ba = !1
                        } catch (o) {
                            throw null !== ya && (ya = ya.slice(e + 1)), Sn(Mn, ka), o
                        } finally {
                            Jn = t, _a = !1
                        }
                    }
                    return null
                }
                var Ca = [],
                    xa = 0,
                    Ia = null,
                    Ea = 0,
                    Ma = [],
                    Ra = 0,
                    Oa = null,
                    Ta = 1,
                    Na = "";

                function Pa(e, t) {
                    Ca[xa++] = Ea, Ca[xa++] = Ia, Ia = e, Ea = t
                }

                function Da(e, t, n) {
                    Ma[Ra++] = Ta, Ma[Ra++] = Na, Ma[Ra++] = Oa, Oa = e;
                    var r = Ta;
                    e = Na;
                    var o = 32 - Ln(r) - 1;
                    r &= ~(1 << o), n += 1;
                    var i = 32 - Ln(t) + o;
                    if (30 < i) {
                        var a = o - o % 5;
                        i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Ta = 1 << 32 - Ln(t) + o | n << o | r, Na = i + e
                    } else Ta = 1 << i | n << o | r, Na = e
                }

                function ja(e) {
                    null !== e.return && (Pa(e, 1), Da(e, 1, 0))
                }

                function La(e) {
                    for (; e === Ia;) Ia = Ca[--xa], Ca[xa] = null, Ea = Ca[--xa], Ca[xa] = null;
                    for (; e === Oa;) Oa = Ma[--Ra], Ma[Ra] = null, Na = Ma[--Ra], Ma[Ra] = null, Ta = Ma[--Ra], Ma[Ra] = null
                }
                var za = null,
                    Aa = null,
                    Fa = !1,
                    Ua = null;

                function Va(e, t) {
                    var n = yf(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function Ba(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, za = e, Aa = $i(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, za = e, Aa = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Oa ? {
                                id: Ta,
                                overflow: Na
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = yf(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, za = e, Aa = null, !0);
                        default:
                            return !1
                    }
                }

                function $a(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function Qa(e) {
                    if (Fa) {
                        var t = Aa;
                        if (t) {
                            var n = t;
                            if (!Ba(e, t)) {
                                if ($a(e)) throw Error(Ee(418));
                                t = $i(n.nextSibling);
                                var r = za;
                                t && Ba(e, t) ? Va(r, n) : (e.flags = -4097 & e.flags | 2, Fa = !1, za = e)
                            }
                        } else {
                            if ($a(e)) throw Error(Ee(418));
                            e.flags = -4097 & e.flags | 2, Fa = !1, za = e
                        }
                    }
                }

                function Ha(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    za = e
                }

                function Wa(e) {
                    if (e !== za) return !1;
                    if (!Fa) return Ha(e), Fa = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !Li(e.type, e.memoizedProps)), t && (t = Aa)) {
                        if ($a(e)) throw Ga(), Error(Ee(418));
                        for (; t;) Va(e, t), t = $i(t.nextSibling)
                    }
                    if (Ha(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ee(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Aa = $i(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            Aa = null
                        }
                    } else Aa = za ? $i(e.stateNode.nextSibling) : null;
                    return !0
                }

                function Ga() {
                    for (var e = Aa; e;) e = $i(e.nextSibling)
                }

                function Ya() {
                    Aa = za = null, Fa = !1
                }

                function qa(e) {
                    null === Ua ? Ua = [e] : Ua.push(e)
                }
                var Ka = He.ReactCurrentBatchConfig;

                function Xa(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = ut({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var Ja = oa(null),
                    Za = null,
                    el = null,
                    tl = null;

                function nl() {
                    tl = el = Za = null
                }

                function rl(e) {
                    var t = Ja.current;
                    ia(Ja), e._currentValue = t
                }

                function ol(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function il(e, t) {
                    Za = e, tl = el = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (es = !0), e.firstContext = null)
                }

                function al(e) {
                    var t = e._currentValue;
                    if (tl !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === el) {
                            if (null === Za) throw Error(Ee(308));
                            el = e, Za.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else el = el.next = e;
                    return t
                }
                var ll = null;

                function ul(e) {
                    null === ll ? ll = [e] : ll.push(e)
                }

                function sl(e, t, n, r) {
                    var o = t.interleaved;
                    return null === o ? (n.next = n, ul(t)) : (n.next = o.next, o.next = n), t.interleaved = n, cl(e, r)
                }

                function cl(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var fl = !1;

                function dl(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function pl(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function hl(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function gl(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & dc)) {
                        var o = r.pending;
                        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, cl(e, n)
                    }
                    return null === (o = r.interleaved) ? (t.next = t, ul(r)) : (t.next = o.next, o.next = t), r.interleaved = t, cl(e, n)
                }

                function vl(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Xn(e, n)
                    }
                }

                function ml(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var o = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? o = i = a : i = i.next = a, n = n.next
                            } while (null !== n);
                            null === i ? o = i = t : i = i.next = t
                        } else o = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: o,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function yl(e, t, n, r) {
                    var o = e.updateQueue;
                    fl = !1;
                    var i = o.firstBaseUpdate,
                        a = o.lastBaseUpdate,
                        l = o.shared.pending;
                    if (null !== l) {
                        o.shared.pending = null;
                        var u = l,
                            s = u.next;
                        u.next = null, null === a ? i = s : a.next = s, a = u;
                        var c = e.alternate;
                        null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== a && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u)
                    }
                    if (null !== i) {
                        var f = o.baseState;
                        for (a = 0, c = s = u = null, l = i;;) {
                            var d = l.lane,
                                p = l.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        g = l;
                                    switch (d = t, p = n, g.tag) {
                                        case 1:
                                            if ("function" === typeof(h = g.payload)) {
                                                f = h.call(p, f, d);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (d = "function" === typeof(h = g.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                                            f = ut({}, f, d);
                                            break e;
                                        case 2:
                                            fl = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = o.effects) ? o.effects = [l] : d.push(l))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (s = c = p, u = f) : c = c.next = p, a |= d;
                            if (null === (l = l.next)) {
                                if (null === (l = o.shared.pending)) break;
                                l = (d = l).next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                            }
                        }
                        if (null === c && (u = f), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                            o = t;
                            do {
                                a |= o.lane, o = o.next
                            } while (o !== t)
                        } else null === i && (o.shared.lanes = 0);
                        _c |= a, e.lanes = a, e.memoizedState = f
                    }
                }

                function bl(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                o = r.callback;
                            if (null !== o) {
                                if (r.callback = null, r = n, "function" !== typeof o) throw Error(Ee(191, o));
                                o.call(r)
                            }
                        }
                }
                var _l = (new Ce.Component).refs;

                function wl(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : ut({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Sl = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && vn(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Ac(),
                            o = Fc(e),
                            i = hl(r, o);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = gl(e, i, o)) && (Uc(t, e, o, r), vl(t, e, o))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Ac(),
                            o = Fc(e),
                            i = hl(r, o);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = gl(e, i, o)) && (Uc(t, e, o, r), vl(t, e, o))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = Ac(),
                            r = Fc(e),
                            o = hl(n, r);
                        o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = gl(e, o, r)) && (Uc(t, e, r, n), vl(t, e, r))
                    }
                };

                function kl(e, t, n, r, o, i, a) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || !Bo(n, r) || !Bo(o, i)
                }

                function Cl(e, t, n) {
                    var r = !1,
                        o = la,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = al(i) : (o = da(t) ? ca : ua.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? fa(e, o) : la), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Sl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function xl(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Sl.enqueueReplaceState(t, t.state, null)
                }

                function Il(e, t, n, r) {
                    var o = e.stateNode;
                    o.props = n, o.state = e.memoizedState, o.refs = _l, dl(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? o.context = al(i) : (i = da(t) ? ca : ua.current, o.context = fa(e, i)), o.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (wl(e, t, i, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Sl.enqueueReplaceState(o, o.state, null), yl(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308)
                }

                function El(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(Ee(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(Ee(147, e));
                            var o = r,
                                i = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                                var t = o.refs;
                                t === _l && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
                            }, t._stringRef = i, t)
                        }
                        if ("string" !== typeof e) throw Error(Ee(284));
                        if (!n._owner) throw Error(Ee(290, e))
                    }
                    return e
                }

                function Ml(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(Ee(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function Rl(e) {
                    return (0, e._init)(e._payload)
                }

                function Ol(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function o(e, t) {
                        return (e = wf(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function a(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = xf(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var i = n.type;
                        return i === Ye ? c(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === rt && Rl(i) === t.type) ? ((r = o(t, n.props)).ref = El(e, t, n), r.return = e, r) : ((r = Sf(n.type, n.key, n.props, null, e.mode, r)).ref = El(e, t, n), r.return = e, r)
                    }

                    function s(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = If(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                    }

                    function c(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = kf(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = xf("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case We:
                                    return (n = Sf(t.type, t.key, t.props, null, e.mode, n)).ref = El(e, null, t), n.return = e, n;
                                case Ge:
                                    return (t = If(t, e.mode, n)).return = e, t;
                                case rt:
                                    return f(e, (0, t._init)(t._payload), n)
                            }
                            if (Et(t) || at(t)) return (t = kf(t, e.mode, n, null)).return = e, t;
                            Ml(e, t)
                        }
                        return null
                    }

                    function d(e, t, n, r) {
                        var o = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== o ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case We:
                                    return n.key === o ? u(e, t, n, r) : null;
                                case Ge:
                                    return n.key === o ? s(e, t, n, r) : null;
                                case rt:
                                    return d(e, t, (o = n._init)(n._payload), r)
                            }
                            if (Et(n) || at(n)) return null !== o ? null : c(e, t, n, r, null);
                            Ml(e, n)
                        }
                        return null
                    }

                    function p(e, t, n, r, o) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, o);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case We:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case Ge:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case rt:
                                    return p(e, t, n, (0, r._init)(r._payload), o)
                            }
                            if (Et(r) || at(r)) return c(t, e = e.get(n) || null, r, o, null);
                            Ml(t, r)
                        }
                        return null
                    }

                    function h(o, a, l, u) {
                        for (var s = null, c = null, h = a, g = a = 0, v = null; null !== h && g < l.length; g++) {
                            h.index > g ? (v = h, h = null) : v = h.sibling;
                            var m = d(o, h, l[g], u);
                            if (null === m) {
                                null === h && (h = v);
                                break
                            }
                            e && h && null === m.alternate && t(o, h), a = i(m, a, g), null === c ? s = m : c.sibling = m, c = m, h = v
                        }
                        if (g === l.length) return n(o, h), Fa && Pa(o, g), s;
                        if (null === h) {
                            for (; g < l.length; g++) null !== (h = f(o, l[g], u)) && (a = i(h, a, g), null === c ? s = h : c.sibling = h, c = h);
                            return Fa && Pa(o, g), s
                        }
                        for (h = r(o, h); g < l.length; g++) null !== (v = p(h, o, g, l[g], u)) && (e && null !== v.alternate && h.delete(null === v.key ? g : v.key), a = i(v, a, g), null === c ? s = v : c.sibling = v, c = v);
                        return e && h.forEach((function(e) {
                            return t(o, e)
                        })), Fa && Pa(o, g), s
                    }

                    function g(o, a, l, u) {
                        var s = at(l);
                        if ("function" !== typeof s) throw Error(Ee(150));
                        if (null == (l = s.call(l))) throw Error(Ee(151));
                        for (var c = s = null, h = a, g = a = 0, v = null, m = l.next(); null !== h && !m.done; g++, m = l.next()) {
                            h.index > g ? (v = h, h = null) : v = h.sibling;
                            var y = d(o, h, m.value, u);
                            if (null === y) {
                                null === h && (h = v);
                                break
                            }
                            e && h && null === y.alternate && t(o, h), a = i(y, a, g), null === c ? s = y : c.sibling = y, c = y, h = v
                        }
                        if (m.done) return n(o, h), Fa && Pa(o, g), s;
                        if (null === h) {
                            for (; !m.done; g++, m = l.next()) null !== (m = f(o, m.value, u)) && (a = i(m, a, g), null === c ? s = m : c.sibling = m, c = m);
                            return Fa && Pa(o, g), s
                        }
                        for (h = r(o, h); !m.done; g++, m = l.next()) null !== (m = p(h, o, g, m.value, u)) && (e && null !== m.alternate && h.delete(null === m.key ? g : m.key), a = i(m, a, g), null === c ? s = m : c.sibling = m, c = m);
                        return e && h.forEach((function(e) {
                            return t(o, e)
                        })), Fa && Pa(o, g), s
                    }

                    function v(e, r, i, l) {
                        if ("object" === typeof i && null !== i && i.type === Ye && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case We:
                                    e: {
                                        for (var u = i.key, s = r; null !== s;) {
                                            if (s.key === u) {
                                                if ((u = i.type) === Ye) {
                                                    if (7 === s.tag) {
                                                        n(e, s.sibling), (r = o(s, i.props.children)).return = e, e = r;
                                                        break e
                                                    }
                                                } else if (s.elementType === u || "object" === typeof u && null !== u && u.$$typeof === rt && Rl(u) === s.type) {
                                                    n(e, s.sibling), (r = o(s, i.props)).ref = El(e, s, i), r.return = e, e = r;
                                                    break e
                                                }
                                                n(e, s);
                                                break
                                            }
                                            t(e, s), s = s.sibling
                                        }
                                        i.type === Ye ? ((r = kf(i.props.children, e.mode, l, i.key)).return = e, e = r) : ((l = Sf(i.type, i.key, i.props, null, e.mode, l)).ref = El(e, r, i), l.return = e, e = l)
                                    }
                                    return a(e);
                                case Ge:
                                    e: {
                                        for (s = i.key; null !== r;) {
                                            if (r.key === s) {
                                                if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                                    n(e, r.sibling), (r = o(r, i.children || [])).return = e, e = r;
                                                    break e
                                                }
                                                n(e, r);
                                                break
                                            }
                                            t(e, r), r = r.sibling
                                        }(r = If(i, e.mode, l)).return = e,
                                        e = r
                                    }
                                    return a(e);
                                case rt:
                                    return v(e, r, (s = i._init)(i._payload), l)
                            }
                            if (Et(i)) return h(e, r, i, l);
                            if (at(i)) return g(e, r, i, l);
                            Ml(e, i)
                        }
                        return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, i)).return = e, e = r) : (n(e, r), (r = xf(i, e.mode, l)).return = e, e = r), a(e)) : n(e, r)
                    }
                    return v
                }
                var Tl = Ol(!0),
                    Nl = Ol(!1),
                    Pl = {},
                    Dl = oa(Pl),
                    jl = oa(Pl),
                    Ll = oa(Pl);

                function zl(e) {
                    if (e === Pl) throw Error(Ee(174));
                    return e
                }

                function Al(e, t) {
                    switch (aa(Ll, t), aa(jl, e), aa(Dl, Pl), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : Dt(null, "");
                            break;
                        default:
                            t = Dt(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ia(Dl), aa(Dl, t)
                }

                function Fl() {
                    ia(Dl), ia(jl), ia(Ll)
                }

                function Ul(e) {
                    zl(Ll.current);
                    var t = zl(Dl.current),
                        n = Dt(t, e.type);
                    t !== n && (aa(jl, e), aa(Dl, n))
                }

                function Vl(e) {
                    jl.current === e && (ia(Dl), ia(jl))
                }
                var Bl = oa(0);

                function $l(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Ql = [];

                function Hl() {
                    for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
                    Ql.length = 0
                }
                var Wl = He.ReactCurrentDispatcher,
                    Gl = He.ReactCurrentBatchConfig,
                    Yl = 0,
                    ql = null,
                    Kl = null,
                    Xl = null,
                    Jl = !1,
                    Zl = !1,
                    eu = 0,
                    tu = 0;

                function nu() {
                    throw Error(Ee(321))
                }

                function ru(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Vo(e[n], t[n])) return !1;
                    return !0
                }

                function ou(e, t, n, r, o, i) {
                    if (Yl = i, ql = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wl.current = null === e || null === e.memoizedState ? Vu : Bu, e = n(r, o), Zl) {
                        i = 0;
                        do {
                            if (Zl = !1, eu = 0, 25 <= i) throw Error(Ee(301));
                            i += 1, Xl = Kl = null, t.updateQueue = null, Wl.current = $u, e = n(r, o)
                        } while (Zl)
                    }
                    if (Wl.current = Uu, t = null !== Kl && null !== Kl.next, Yl = 0, Xl = Kl = ql = null, Jl = !1, t) throw Error(Ee(300));
                    return e
                }

                function iu() {
                    var e = 0 !== eu;
                    return eu = 0, e
                }

                function au() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === Xl ? ql.memoizedState = Xl = e : Xl = Xl.next = e, Xl
                }

                function lu() {
                    if (null === Kl) {
                        var e = ql.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = Kl.next;
                    var t = null === Xl ? ql.memoizedState : Xl.next;
                    if (null !== t) Xl = t, Kl = e;
                    else {
                        if (null === e) throw Error(Ee(310));
                        e = {
                            memoizedState: (Kl = e).memoizedState,
                            baseState: Kl.baseState,
                            baseQueue: Kl.baseQueue,
                            queue: Kl.queue,
                            next: null
                        }, null === Xl ? ql.memoizedState = Xl = e : Xl = Xl.next = e
                    }
                    return Xl
                }

                function uu(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function su(e) {
                    var t = lu(),
                        n = t.queue;
                    if (null === n) throw Error(Ee(311));
                    n.lastRenderedReducer = e;
                    var r = Kl,
                        o = r.baseQueue,
                        i = n.pending;
                    if (null !== i) {
                        if (null !== o) {
                            var a = o.next;
                            o.next = i.next, i.next = a
                        }
                        r.baseQueue = o = i, n.pending = null
                    }
                    if (null !== o) {
                        i = o.next, r = r.baseState;
                        var l = a = null,
                            u = null,
                            s = i;
                        do {
                            var c = s.lane;
                            if ((Yl & c) === c) null !== u && (u = u.next = {
                                lane: 0,
                                action: s.action,
                                hasEagerState: s.hasEagerState,
                                eagerState: s.eagerState,
                                next: null
                            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
                            else {
                                var f = {
                                    lane: c,
                                    action: s.action,
                                    hasEagerState: s.hasEagerState,
                                    eagerState: s.eagerState,
                                    next: null
                                };
                                null === u ? (l = u = f, a = r) : u = u.next = f, ql.lanes |= c, _c |= c
                            }
                            s = s.next
                        } while (null !== s && s !== i);
                        null === u ? a = r : u.next = l, Vo(r, t.memoizedState) || (es = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        o = e;
                        do {
                            i = o.lane, ql.lanes |= i, _c |= i, o = o.next
                        } while (o !== e)
                    } else null === o && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function cu(e) {
                    var t = lu(),
                        n = t.queue;
                    if (null === n) throw Error(Ee(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        o = n.pending,
                        i = t.memoizedState;
                    if (null !== o) {
                        n.pending = null;
                        var a = o = o.next;
                        do {
                            i = e(i, a.action), a = a.next
                        } while (a !== o);
                        Vo(i, t.memoizedState) || (es = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function fu() {}

                function du(e, t) {
                    var n = ql,
                        r = lu(),
                        o = t(),
                        i = !Vo(r.memoizedState, o);
                    if (i && (r.memoizedState = o, es = !0), r = r.queue, Cu(gu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== Xl && 1 & Xl.memoizedState.tag) {
                        if (n.flags |= 2048, bu(9, hu.bind(null, n, r, o, t), void 0, null), null === pc) throw Error(Ee(349));
                        0 !== (30 & Yl) || pu(n, t, o)
                    }
                    return o
                }

                function pu(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = ql.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ql.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function hu(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, vu(t) && mu(e)
                }

                function gu(e, t, n) {
                    return n((function() {
                        vu(t) && mu(e)
                    }))
                }

                function vu(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Vo(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function mu(e) {
                    var t = cl(e, 1);
                    null !== t && Uc(t, e, 1, -1)
                }

                function yu(e) {
                    var t = au();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: uu,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = Lu.bind(null, ql, e), [t.memoizedState, e]
                }

                function bu(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ql.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ql.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function _u() {
                    return lu().memoizedState
                }

                function wu(e, t, n, r) {
                    var o = au();
                    ql.flags |= e, o.memoizedState = bu(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Su(e, t, n, r) {
                    var o = lu();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== Kl) {
                        var a = Kl.memoizedState;
                        if (i = a.destroy, null !== r && ru(r, a.deps)) return void(o.memoizedState = bu(t, n, i, r))
                    }
                    ql.flags |= e, o.memoizedState = bu(1 | t, n, i, r)
                }

                function ku(e, t) {
                    return wu(8390656, 8, e, t)
                }

                function Cu(e, t) {
                    return Su(2048, 8, e, t)
                }

                function xu(e, t) {
                    return Su(4, 2, e, t)
                }

                function Iu(e, t) {
                    return Su(4, 4, e, t)
                }

                function Eu(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Mu(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Su(4, 4, Eu.bind(null, t, e), n)
                }

                function Ru() {}

                function Ou(e, t) {
                    var n = lu();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ru(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Tu(e, t) {
                    var n = lu();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ru(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Nu(e, t, n) {
                    return 0 === (21 & Yl) ? (e.baseState && (e.baseState = !1, es = !0), e.memoizedState = n) : (Vo(n, t) || (n = Gn(), ql.lanes |= n, _c |= n, e.baseState = !0), t)
                }

                function Pu(e, t) {
                    var n = Jn;
                    Jn = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = Gl.transition;
                    Gl.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        Jn = n, Gl.transition = r
                    }
                }

                function Du() {
                    return lu().memoizedState
                }

                function ju(e, t, n) {
                    var r = Fc(e);
                    n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, zu(e) ? Au(t, n) : null !== (n = sl(e, t, n, r)) && (Uc(n, e, r, Ac()), Fu(n, t, r))
                }

                function Lu(e, t, n) {
                    var r = Fc(e),
                        o = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (zu(e)) Au(t, o);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var a = t.lastRenderedState,
                                l = i(a, n);
                            if (o.hasEagerState = !0, o.eagerState = l, Vo(l, a)) {
                                var u = t.interleaved;
                                return null === u ? (o.next = o, ul(t)) : (o.next = u.next, u.next = o), void(t.interleaved = o)
                            }
                        } catch (U) {}
                        null !== (n = sl(e, t, o, r)) && (Uc(n, e, r, o = Ac()), Fu(n, t, r))
                    }
                }

                function zu(e) {
                    var t = e.alternate;
                    return e === ql || null !== t && t === ql
                }

                function Au(e, t) {
                    Zl = Jl = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Fu(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Xn(e, n)
                    }
                }
                var Uu = {
                        readContext: al,
                        useCallback: nu,
                        useContext: nu,
                        useEffect: nu,
                        useImperativeHandle: nu,
                        useInsertionEffect: nu,
                        useLayoutEffect: nu,
                        useMemo: nu,
                        useReducer: nu,
                        useRef: nu,
                        useState: nu,
                        useDebugValue: nu,
                        useDeferredValue: nu,
                        useTransition: nu,
                        useMutableSource: nu,
                        useSyncExternalStore: nu,
                        useId: nu,
                        unstable_isNewReconciler: !1
                    },
                    Vu = {
                        readContext: al,
                        useCallback: function(e, t) {
                            return au().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: al,
                        useEffect: ku,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, wu(4194308, 4, Eu.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return wu(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return wu(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = au();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = au();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = ju.bind(null, ql, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, au().memoizedState = e
                        },
                        useState: yu,
                        useDebugValue: Ru,
                        useDeferredValue: function(e) {
                            return au().memoizedState = e
                        },
                        useTransition: function() {
                            var e = yu(!1),
                                t = e[0];
                            return e = Pu.bind(null, e[1]), au().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = ql,
                                o = au();
                            if (Fa) {
                                if (void 0 === n) throw Error(Ee(407));
                                n = n()
                            } else {
                                if (n = t(), null === pc) throw Error(Ee(349));
                                0 !== (30 & Yl) || pu(r, t, n)
                            }
                            o.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return o.queue = i, ku(gu.bind(null, r, i, e), [e]), r.flags |= 2048, bu(9, hu.bind(null, r, i, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = au(),
                                t = pc.identifierPrefix;
                            if (Fa) {
                                var n = Na;
                                t = ":" + t + "R" + (n = (Ta & ~(1 << 32 - Ln(Ta) - 1)).toString(32) + n), 0 < (n = eu++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = tu++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    Bu = {
                        readContext: al,
                        useCallback: Ou,
                        useContext: al,
                        useEffect: Cu,
                        useImperativeHandle: Mu,
                        useInsertionEffect: xu,
                        useLayoutEffect: Iu,
                        useMemo: Tu,
                        useReducer: su,
                        useRef: _u,
                        useState: function() {
                            return su(uu)
                        },
                        useDebugValue: Ru,
                        useDeferredValue: function(e) {
                            return Nu(lu(), Kl.memoizedState, e)
                        },
                        useTransition: function() {
                            return [su(uu)[0], lu().memoizedState]
                        },
                        useMutableSource: fu,
                        useSyncExternalStore: du,
                        useId: Du,
                        unstable_isNewReconciler: !1
                    },
                    $u = {
                        readContext: al,
                        useCallback: Ou,
                        useContext: al,
                        useEffect: Cu,
                        useImperativeHandle: Mu,
                        useInsertionEffect: xu,
                        useLayoutEffect: Iu,
                        useMemo: Tu,
                        useReducer: cu,
                        useRef: _u,
                        useState: function() {
                            return cu(uu)
                        },
                        useDebugValue: Ru,
                        useDeferredValue: function(e) {
                            var t = lu();
                            return null === Kl ? t.memoizedState = e : Nu(t, Kl.memoizedState, e)
                        },
                        useTransition: function() {
                            return [cu(uu)[0], lu().memoizedState]
                        },
                        useMutableSource: fu,
                        useSyncExternalStore: du,
                        useId: Du,
                        unstable_isNewReconciler: !1
                    };

                function Qu(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += dt(r), r = r.return
                        } while (r);
                        var o = n
                    } catch (i) {
                        o = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: o,
                        digest: null
                    }
                }

                function Hu(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function Wu(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var Gu = "function" === typeof WeakMap ? WeakMap : Map;

                function Yu(e, t, n) {
                    (n = hl(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Mc || (Mc = !0, Rc = r), Wu(e, t)
                    }, n
                }

                function qu(e, t, n) {
                    (n = hl(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var o = t.value;
                        n.payload = function() {
                            return r(o)
                        }, n.callback = function() {
                            Wu(e, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        Wu(e, t), "function" !== typeof r && (null === Oc ? Oc = new Set([this]) : Oc.add(this));
                        var n = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }

                function Ku(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new Gu;
                        var o = new Set;
                        r.set(t, o)
                    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                    o.has(n) || (o.add(n), e = df.bind(null, e, t, n), t.then(e, e))
                }

                function Xu(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function Ju(e, t, n, r, o) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = hl(-1, 1)).tag = 2, gl(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
                }
                var Zu = He.ReactCurrentOwner,
                    es = !1;

                function ts(e, t, n, r) {
                    t.child = null === e ? Nl(t, null, n, r) : Tl(t, e.child, n, r)
                }

                function ns(e, t, n, r, o) {
                    n = n.render;
                    var i = t.ref;
                    return il(t, o), r = ou(e, t, n, r, i, o), n = iu(), null === e || es ? (Fa && n && ja(t), t.flags |= 1, ts(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Is(e, t, o))
                }

                function rs(e, t, n, r, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || bf(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Sf(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, os(e, t, i, r, o))
                    }
                    if (i = e.child, 0 === (e.lanes & o)) {
                        var a = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : Bo)(a, r) && e.ref === t.ref) return Is(e, t, o)
                    }
                    return t.flags |= 1, (e = wf(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function os(e, t, n, r, o) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (Bo(i, r) && e.ref === t.ref) {
                            if (es = !1, t.pendingProps = r = i, 0 === (e.lanes & o)) return t.lanes = e.lanes, Is(e, t, o);
                            0 !== (131072 & e.flags) && (es = !0)
                        }
                    }
                    return ls(e, t, n, r, o)
                }

                function is(e, t, n) {
                    var r = t.pendingProps,
                        o = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, aa(mc, vc), vc |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, aa(mc, vc), vc |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, aa(mc, vc), vc |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, aa(mc, vc), vc |= r;
                    return ts(e, t, o, n), t.child
                }

                function as(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function ls(e, t, n, r, o) {
                    var i = da(n) ? ca : ua.current;
                    return i = fa(t, i), il(t, o), n = ou(e, t, n, r, i, o), r = iu(), null === e || es ? (Fa && r && ja(t), t.flags |= 1, ts(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Is(e, t, o))
                }

                function us(e, t, n, r, o) {
                    if (da(n)) {
                        var i = !0;
                        va(t)
                    } else i = !1;
                    if (il(t, o), null === t.stateNode) xs(e, t), Cl(t, n, r), Il(t, n, r, o), r = !0;
                    else if (null === e) {
                        var a = t.stateNode,
                            l = t.memoizedProps;
                        a.props = l;
                        var u = a.context,
                            s = n.contextType;
                        s = "object" === typeof s && null !== s ? al(s) : fa(t, s = da(n) ? ca : ua.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                        f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (l !== r || u !== s) && xl(t, a, r, s), fl = !1;
                        var d = t.memoizedState;
                        a.state = d, yl(t, r, a, o), u = t.memoizedState, l !== r || d !== u || sa.current || fl ? ("function" === typeof c && (wl(t, n, c, r), u = t.memoizedState), (l = fl || kl(t, n, l, r, d, u, s)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = s, r = l) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        a = t.stateNode, pl(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : Xa(t.type, l), a.props = s, f = t.pendingProps, d = a.context, u = "object" === typeof(u = n.contextType) && null !== u ? al(u) : fa(t, u = da(n) ? ca : ua.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (l !== f || d !== u) && xl(t, a, r, u), fl = !1, d = t.memoizedState, a.state = d, yl(t, r, a, o);
                        var h = t.memoizedState;
                        l !== f || d !== h || sa.current || fl ? ("function" === typeof p && (wl(t, n, p, r), h = t.memoizedState), (s = fl || kl(t, n, s, r, d, h, u) || !1) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, u), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = u, r = s) : ("function" !== typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return ss(e, t, n, r, i, o)
                }

                function ss(e, t, n, r, o, i) {
                    as(e, t);
                    var a = 0 !== (128 & t.flags);
                    if (!r && !a) return o && ma(t, n, !1), Is(e, t, i);
                    r = t.stateNode, Zu.current = t;
                    var l = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && a ? (t.child = Tl(t, e.child, null, i), t.child = Tl(t, null, l, i)) : ts(e, t, l, i), t.memoizedState = r.state, o && ma(t, n, !0), t.child
                }

                function cs(e) {
                    var t = e.stateNode;
                    t.pendingContext ? ha(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ha(e, t.context, !1), Al(e, t.containerInfo)
                }

                function fs(e, t, n, r, o) {
                    return Ya(), qa(o), t.flags |= 256, ts(e, t, n, r), t.child
                }
                var ds, ps, hs, gs, vs = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function ms(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function ys(e, t, n) {
                    var r, o = t.pendingProps,
                        i = Bl.current,
                        a = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (a = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), aa(Bl, 1 & i), null === e) return Qa(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = o.children, e = o.fallback, a ? (o = t.mode, a = t.child, l = {
                        mode: "hidden",
                        children: l
                    }, 0 === (1 & o) && null !== a ? (a.childLanes = 0, a.pendingProps = l) : a = Cf(l, o, 0, null), e = kf(e, o, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ms(n), t.memoizedState = vs, e) : bs(t, l));
                    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return ws(e, t, l, o, r, i, n);
                    if (a) {
                        a = o.fallback, l = t.mode, r = (i = e.child).sibling;
                        var u = {
                            mode: "hidden",
                            children: o.children
                        };
                        return 0 === (1 & l) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = u, t.deletions = null) : (o = wf(i, u)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? a = wf(r, a) : (a = kf(a, l, n, null)).flags |= 2, a.return = t, o.return = t, o.sibling = a, t.child = o, o = a, a = t.child, l = null === (l = e.child.memoizedState) ? ms(n) : {
                            baseLanes: l.baseLanes | n,
                            cachePool: null,
                            transitions: l.transitions
                        }, a.memoizedState = l, a.childLanes = e.childLanes & ~n, t.memoizedState = vs, o
                    }
                    return e = (a = e.child).sibling, o = wf(a, {
                        mode: "visible",
                        children: o.children
                    }), 0 === (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
                }

                function bs(e, t) {
                    return (t = Cf({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function _s(e, t, n, r) {
                    return null !== r && qa(r), Tl(t, e.child, null, n), (e = bs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function ws(e, t, n, r, o, i, a) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, _s(e, t, a, r = Hu(Error(Ee(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Cf({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null), (i = kf(i, o, a, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Tl(t, e.child, null, a), t.child.memoizedState = ms(a), t.memoizedState = vs, i);
                    if (0 === (1 & t.mode)) return _s(e, t, a, null);
                    if ("$!" === o.data) {
                        if (r = o.nextSibling && o.nextSibling.dataset) var l = r.dgst;
                        return r = l, _s(e, t, a, r = Hu(i = Error(Ee(419)), r, void 0))
                    }
                    if (l = 0 !== (a & e.childLanes), es || l) {
                        if (null !== (r = pc)) {
                            switch (a & -a) {
                                case 4:
                                    o = 2;
                                    break;
                                case 16:
                                    o = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    o = 32;
                                    break;
                                case 536870912:
                                    o = 268435456;
                                    break;
                                default:
                                    o = 0
                            }
                            0 !== (o = 0 !== (o & (r.suspendedLanes | a)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, cl(e, o), Uc(r, e, o, -1))
                        }
                        return ef(), _s(e, t, a, r = Hu(Error(Ee(421))))
                    }
                    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = hf.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Aa = $i(o.nextSibling), za = t, Fa = !0, Ua = null, null !== e && (Ma[Ra++] = Ta, Ma[Ra++] = Na, Ma[Ra++] = Oa, Ta = e.id, Na = e.overflow, Oa = t), (t = bs(t, r.children)).flags |= 4096, t)
                }

                function Ss(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), ol(e.return, t, n)
                }

                function ks(e, t, n, r, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
                }

                function Cs(e, t, n) {
                    var r = t.pendingProps,
                        o = r.revealOrder,
                        i = r.tail;
                    if (ts(e, t, r.children, n), 0 !== (2 & (r = Bl.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Ss(e, n, t);
                            else if (19 === e.tag) Ss(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (aa(Bl, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === $l(e) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ks(t, !1, o, n, i);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o;) {
                                if (null !== (e = o.alternate) && null === $l(e)) {
                                    t.child = o;
                                    break
                                }
                                e = o.sibling, o.sibling = n, n = o, o = e
                            }
                            ks(t, !0, n, null, i);
                            break;
                        case "together":
                            ks(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function xs(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Is(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), _c |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(Ee(153));
                    if (null !== t.child) {
                        for (n = wf(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = wf(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Es(e, t, n) {
                    switch (t.tag) {
                        case 3:
                            cs(t), Ya();
                            break;
                        case 5:
                            Ul(t);
                            break;
                        case 1:
                            da(t.type) && va(t);
                            break;
                        case 4:
                            Al(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context,
                                o = t.memoizedProps.value;
                            aa(Ja, r._currentValue), r._currentValue = o;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (aa(Bl, 1 & Bl.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? ys(e, t, n) : (aa(Bl, 1 & Bl.current), null !== (e = Is(e, t, n)) ? e.sibling : null);
                            aa(Bl, 1 & Bl.current);
                            break;
                        case 19:
                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                if (r) return Cs(e, t, n);
                                t.flags |= 128
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), aa(Bl, Bl.current), r) break;
                            return null;
                        case 22:
                        case 23:
                            return t.lanes = 0, is(e, t, n)
                    }
                    return Is(e, t, n)
                }

                function Ms(e, t) {
                    if (!Fa) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Rs(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
                    else
                        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Os(e, t, n) {
                    var r = t.pendingProps;
                    switch (La(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Rs(t), null;
                        case 1:
                        case 17:
                            return da(t.type) && pa(), Rs(t), null;
                        case 3:
                            return r = t.stateNode, Fl(), ia(sa), ia(ua), Hl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Wa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== Ua && (Qc(Ua), Ua = null))), ps(e, t), Rs(t), null;
                        case 5:
                            Vl(t);
                            var o = zl(Ll.current);
                            if (n = t.type, null !== e && null != t.stateNode) hs(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(Ee(166));
                                    return Rs(t), null
                                }
                                if (e = zl(Dl.current), Wa(t)) {
                                    r = t.stateNode, n = t.type;
                                    var i = t.memoizedProps;
                                    switch (r[Wi] = t, r[Gi] = i, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            bi("cancel", r), bi("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            bi("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < gi.length; o++) bi(gi[o], r);
                                            break;
                                        case "source":
                                            bi("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            bi("error", r), bi("load", r);
                                            break;
                                        case "details":
                                            bi("toggle", r);
                                            break;
                                        case "input":
                                            St(r, i), bi("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, bi("invalid", r);
                                            break;
                                        case "textarea":
                                            Ot(r, i), bi("invalid", r)
                                    }
                                    for (var a in Qt(n, i), o = null, i)
                                        if (i.hasOwnProperty(a)) {
                                            var l = i[a];
                                            "children" === a ? "string" === typeof l ? r.textContent !== l && (!0 !== i.suppressHydrationWarning && Ni(r.textContent, l, e), o = ["children", l]) : "number" === typeof l && r.textContent !== "" + l && (!0 !== i.suppressHydrationWarning && Ni(r.textContent, l, e), o = ["children", "" + l]) : Re.hasOwnProperty(a) && null != l && "onScroll" === a && bi("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            yt(r), xt(r, i, !0);
                                            break;
                                        case "textarea":
                                            yt(r), Nt(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (r.onclick = Pi)
                                    }
                                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    a = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = Pt(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = a.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = a.createElement(n, {
                                        is: r.is
                                    }) : (e = a.createElement(n), "select" === n && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Wi] = t, e[Gi] = r, ds(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (a = Ht(n, r), n) {
                                            case "dialog":
                                                bi("cancel", e), bi("close", e), o = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                bi("load", e), o = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (o = 0; o < gi.length; o++) bi(gi[o], e);
                                                o = r;
                                                break;
                                            case "source":
                                                bi("error", e), o = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                bi("error", e), bi("load", e), o = r;
                                                break;
                                            case "details":
                                                bi("toggle", e), o = r;
                                                break;
                                            case "input":
                                                St(e, r), o = wt(e, r), bi("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                o = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, o = ut({}, r, {
                                                    value: void 0
                                                }), bi("invalid", e);
                                                break;
                                            case "textarea":
                                                Ot(e, r), o = Rt(e, r), bi("invalid", e)
                                        }
                                        for (i in Qt(n, o), l = o)
                                            if (l.hasOwnProperty(i)) {
                                                var u = l[i];
                                                "style" === i ? Bt(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && zt(e, u) : "children" === i ? "string" === typeof u ? ("textarea" !== n || "" !== u) && At(e, u) : "number" === typeof u && At(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (Re.hasOwnProperty(i) ? null != u && "onScroll" === i && bi("scroll", e) : null != u && Qe(e, i, u, a))
                                            }
                                        switch (n) {
                                            case "input":
                                                yt(e), xt(e, r, !1);
                                                break;
                                            case "textarea":
                                                yt(e), Nt(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + gt(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (i = r.value) ? Mt(e, !!r.multiple, i, !1) : null != r.defaultValue && Mt(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof o.onClick && (e.onclick = Pi)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Rs(t), null;
                        case 6:
                            if (e && null != t.stateNode) gs(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(Ee(166));
                                if (n = zl(Ll.current), zl(Dl.current), Wa(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[Wi] = t, (i = r.nodeValue !== n) && null !== (e = za)) switch (e.tag) {
                                        case 3:
                                            Ni(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Ni(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    i && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Wi] = t, t.stateNode = r
                            }
                            return Rs(t), null;
                        case 13:
                            if (ia(Bl), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (Fa && null !== Aa && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) Ga(), Ya(), t.flags |= 98560, i = !1;
                                else if (i = Wa(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!i) throw Error(Ee(318));
                                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ee(317));
                                        i[Wi] = t
                                    } else Ya(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Rs(t), i = !1
                                } else null !== Ua && (Qc(Ua), Ua = null), i = !0;
                                if (!i) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & Bl.current) ? 0 === yc && (yc = 3) : ef())), null !== t.updateQueue && (t.flags |= 4), Rs(t), null);
                        case 4:
                            return Fl(), ps(e, t), null === e && Si(t.stateNode.containerInfo), Rs(t), null;
                        case 10:
                            return rl(t.type._context), Rs(t), null;
                        case 19:
                            if (ia(Bl), null === (i = t.memoizedState)) return Rs(t), null;
                            if (r = 0 !== (128 & t.flags), null === (a = i.rendering))
                                if (r) Ms(i, !1);
                                else {
                                    if (0 !== yc || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (a = $l(e))) {
                                                for (t.flags |= 128, Ms(i, !1), null !== (r = a.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (a = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return aa(Bl, 1 & Bl.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && In() > Ic && (t.flags |= 128, r = !0, Ms(i, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = $l(a))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ms(i, !0), null === i.tail && "hidden" === i.tailMode && !a.alternate && !Fa) return Rs(t), null
                                    } else 2 * In() - i.renderingStartTime > Ic && 1073741824 !== n && (t.flags |= 128, r = !0, Ms(i, !1), t.lanes = 4194304);
                                i.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (n = i.last) ? n.sibling = a : t.child = a, i.last = a)
                            }
                            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = In(), t.sibling = null, n = Bl.current, aa(Bl, r ? 1 & n | 2 : 1 & n), t) : (Rs(t), null);
                        case 22:
                        case 23:
                            return Kc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & vc) && (Rs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Rs(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(Ee(156, t.tag))
                }

                function Ts(e, t) {
                    switch (La(t), t.tag) {
                        case 1:
                            return da(t.type) && pa(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Fl(), ia(sa), ia(ua), Hl(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Vl(t), null;
                        case 13:
                            if (ia(Bl), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(Ee(340));
                                Ya()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return ia(Bl), null;
                        case 4:
                            return Fl(), null;
                        case 10:
                            return rl(t.type._context), null;
                        case 22:
                        case 23:
                            return Kc(), null;
                        default:
                            return null
                    }
                }
                ds = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, ps = function() {}, hs = function(e, t, n, r) {
                    var o = e.memoizedProps;
                    if (o !== r) {
                        e = t.stateNode, zl(Dl.current);
                        var i, a = null;
                        switch (n) {
                            case "input":
                                o = wt(e, o), r = wt(e, r), a = [];
                                break;
                            case "select":
                                o = ut({}, o, {
                                    value: void 0
                                }), r = ut({}, r, {
                                    value: void 0
                                }), a = [];
                                break;
                            case "textarea":
                                o = Rt(e, o), r = Rt(e, r), a = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Pi)
                        }
                        for (s in Qt(n, r), n = null, o)
                            if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                                if ("style" === s) {
                                    var l = o[s];
                                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (Re.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
                        for (s in r) {
                            var u = r[s];
                            if (l = null != o ? o[s] : void 0, r.hasOwnProperty(s) && u !== l && (null != u || null != l))
                                if ("style" === s)
                                    if (l) {
                                        for (i in l) !l.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in u) u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                                    } else n || (a || (a = []), a.push(s, n)), n = u;
                            else "dangerouslySetInnerHTML" === s ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (a = a || []).push(s, u)) : "children" === s ? "string" !== typeof u && "number" !== typeof u || (a = a || []).push(s, "" + u) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (Re.hasOwnProperty(s) ? (null != u && "onScroll" === s && bi("scroll", e), a || l === u || (a = [])) : (a = a || []).push(s, u))
                        }
                        n && (a = a || []).push("style", n);
                        var s = a;
                        (t.updateQueue = s) && (t.flags |= 4)
                    }
                }, gs = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Ns = !1,
                    Ps = !1,
                    Ds = "function" === typeof WeakSet ? WeakSet : Set,
                    js = null;

                function Ls(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            ff(e, t, r)
                        } else n.current = null
                }

                function zs(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        ff(e, t, r)
                    }
                }
                var As = !1;

                function Fs(e, t) {
                    if (Di = Cr, Go(e = Wo())) {
                        if ("selectionStart" in e) var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd
                        };
                        else e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var o = r.anchorOffset,
                                    i = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, i.nodeType
                                } catch (re) {
                                    n = null;
                                    break e
                                }
                                var a = 0,
                                    l = -1,
                                    u = -1,
                                    s = 0,
                                    c = 0,
                                    f = e,
                                    d = null;
                                t: for (;;) {
                                    for (var p; f !== n || 0 !== o && 3 !== f.nodeType || (l = a + o), f !== i || 0 !== r && 3 !== f.nodeType || (u = a + r), 3 === f.nodeType && (a += f.nodeValue.length), null !== (p = f.firstChild);) d = f, f = p;
                                    for (;;) {
                                        if (f === e) break t;
                                        if (d === n && ++s === o && (l = a), d === i && ++c === r && (u = a), null !== (p = f.nextSibling)) break;
                                        d = (f = d).parentNode
                                    }
                                    f = p
                                }
                                n = -1 === l || -1 === u ? null : {
                                    start: l,
                                    end: u
                                }
                            } else n = null
                        }
                        n = n || {
                            start: 0,
                            end: 0
                        }
                    } else n = null;
                    for (ji = {
                            focusedElem: e,
                            selectionRange: n
                        }, Cr = !1, js = t; null !== js;)
                        if (e = (t = js).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, js = e;
                        else
                            for (; null !== js;) {
                                t = js;
                                try {
                                    var h = t.alternate;
                                    if (0 !== (1024 & t.flags)) switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (null !== h) {
                                                var g = h.memoizedProps,
                                                    v = h.memoizedState,
                                                    m = t.stateNode,
                                                    y = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Xa(t.type, g), v);
                                                m.__reactInternalSnapshotBeforeUpdate = y
                                            }
                                            break;
                                        case 3:
                                            var b = t.stateNode.containerInfo;
                                            1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                            break;
                                        default:
                                            throw Error(Ee(163))
                                    }
                                } catch (re) {
                                    ff(t, t.return, re)
                                }
                                if (null !== (e = t.sibling)) {
                                    e.return = t.return, js = e;
                                    break
                                }
                                js = t.return
                            }
                    return h = As, As = !1, h
                }

                function Us(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var o = r = r.next;
                        do {
                            if ((o.tag & e) === e) {
                                var i = o.destroy;
                                o.destroy = void 0, void 0 !== i && zs(t, n, i)
                            }
                            o = o.next
                        } while (o !== r)
                    }
                }

                function Vs(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function Bs(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function $s(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, $s(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[Wi], delete t[Gi], delete t[qi], delete t[Ki], delete t[Xi]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function Qs(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function Hs(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || Qs(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function Ws(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Pi));
                    else if (4 !== r && null !== (e = e.child))
                        for (Ws(e, t, n), e = e.sibling; null !== e;) Ws(e, t, n), e = e.sibling
                }

                function Gs(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (Gs(e, t, n), e = e.sibling; null !== e;) Gs(e, t, n), e = e.sibling
                }
                var Ys = null,
                    qs = !1;

                function Ks(e, t, n) {
                    for (n = n.child; null !== n;) Xs(e, t, n), n = n.sibling
                }

                function Xs(e, t, n) {
                    if (Dn && "function" === typeof Dn.onCommitFiberUnmount) try {
                        Dn.onCommitFiberUnmount(Pn, n)
                    } catch (l) {}
                    switch (n.tag) {
                        case 5:
                            Ps || Ls(n, t);
                        case 6:
                            var r = Ys,
                                o = qs;
                            Ys = null, Ks(e, t, n), qs = o, null !== (Ys = r) && (qs ? (e = Ys, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ys.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== Ys && (qs ? (e = Ys, n = n.stateNode, 8 === e.nodeType ? Bi(e.parentNode, n) : 1 === e.nodeType && Bi(e, n), Sr(e)) : Bi(Ys, n.stateNode));
                            break;
                        case 4:
                            r = Ys, o = qs, Ys = n.stateNode.containerInfo, qs = !0, Ks(e, t, n), Ys = r, qs = o;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Ps && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                                o = r = r.next;
                                do {
                                    var i = o,
                                        a = i.destroy;
                                    i = i.tag, void 0 !== a && (0 !== (2 & i) || 0 !== (4 & i)) && zs(n, t, a), o = o.next
                                } while (o !== r)
                            }
                            Ks(e, t, n);
                            break;
                        case 1:
                            if (!Ps && (Ls(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (l) {
                                ff(n, t, l)
                            }
                            Ks(e, t, n);
                            break;
                        case 21:
                            Ks(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Ps = (r = Ps) || null !== n.memoizedState, Ks(e, t, n), Ps = r) : Ks(e, t, n);
                            break;
                        default:
                            Ks(e, t, n)
                    }
                }

                function Js(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Ds), t.forEach((function(t) {
                            var r = gf.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function Zs(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            try {
                                var i = e,
                                    a = t,
                                    l = a;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            Ys = l.stateNode, qs = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            Ys = l.stateNode.containerInfo, qs = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === Ys) throw Error(Ee(160));
                                Xs(i, a, o), Ys = null, qs = !1;
                                var u = o.alternate;
                                null !== u && (u.return = null), o.return = null
                            } catch (U) {
                                ff(o, t, U)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) ec(t, e), t = t.sibling
                }

                function ec(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (Zs(t, e), tc(e), 4 & r) {
                                try {
                                    Us(3, e, e.return), Vs(3, e)
                                } catch (H) {
                                    ff(e, e.return, H)
                                }
                                try {
                                    Us(5, e, e.return)
                                } catch (H) {
                                    ff(e, e.return, H)
                                }
                            }
                            break;
                        case 1:
                            Zs(t, e), tc(e), 512 & r && null !== n && Ls(n, n.return);
                            break;
                        case 5:
                            if (Zs(t, e), tc(e), 512 & r && null !== n && Ls(n, n.return), 32 & e.flags) {
                                var o = e.stateNode;
                                try {
                                    At(o, "")
                                } catch (H) {
                                    ff(e, e.return, H)
                                }
                            }
                            if (4 & r && null != (o = e.stateNode)) {
                                var i = e.memoizedProps,
                                    a = null !== n ? n.memoizedProps : i,
                                    l = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === l && "radio" === i.type && null != i.name && kt(o, i), Ht(l, a);
                                    var s = Ht(l, i);
                                    for (a = 0; a < u.length; a += 2) {
                                        var c = u[a],
                                            f = u[a + 1];
                                        "style" === c ? Bt(o, f) : "dangerouslySetInnerHTML" === c ? zt(o, f) : "children" === c ? At(o, f) : Qe(o, c, f, s)
                                    }
                                    switch (l) {
                                        case "input":
                                            Ct(o, i);
                                            break;
                                        case "textarea":
                                            Tt(o, i);
                                            break;
                                        case "select":
                                            var d = o._wrapperState.wasMultiple;
                                            o._wrapperState.wasMultiple = !!i.multiple;
                                            var p = i.value;
                                            null != p ? Mt(o, !!i.multiple, p, !1) : d !== !!i.multiple && (null != i.defaultValue ? Mt(o, !!i.multiple, i.defaultValue, !0) : Mt(o, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                    o[Gi] = i
                                } catch (H) {
                                    ff(e, e.return, H)
                                }
                            }
                            break;
                        case 6:
                            if (Zs(t, e), tc(e), 4 & r) {
                                if (null === e.stateNode) throw Error(Ee(162));
                                o = e.stateNode, i = e.memoizedProps;
                                try {
                                    o.nodeValue = i
                                } catch (H) {
                                    ff(e, e.return, H)
                                }
                            }
                            break;
                        case 3:
                            if (Zs(t, e), tc(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Sr(t.containerInfo)
                            } catch (H) {
                                ff(e, e.return, H)
                            }
                            break;
                        case 4:
                        default:
                            Zs(t, e), tc(e);
                            break;
                        case 13:
                            Zs(t, e), tc(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (xc = In())), 4 & r && Js(e);
                            break;
                        case 22:
                            if (c = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ps = (s = Ps) || c, Zs(t, e), Ps = s) : Zs(t, e), tc(e), 8192 & r) {
                                if (s = null !== e.memoizedState, (e.stateNode.isHidden = s) && !c && 0 !== (1 & e.mode))
                                    for (js = e, c = e.child; null !== c;) {
                                        for (f = js = c; null !== js;) {
                                            switch (p = (d = js).child, d.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    Us(4, d, d.return);
                                                    break;
                                                case 1:
                                                    Ls(d, d.return);
                                                    var h = d.stateNode;
                                                    if ("function" === typeof h.componentWillUnmount) {
                                                        r = d, n = d.return;
                                                        try {
                                                            t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                                        } catch (H) {
                                                            ff(r, n, H)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Ls(d, d.return);
                                                    break;
                                                case 22:
                                                    if (null !== d.memoizedState) {
                                                        ic(f);
                                                        continue
                                                    }
                                            }
                                            null !== p ? (p.return = d, js = p) : ic(f)
                                        }
                                        c = c.sibling
                                    }
                                e: for (c = null, f = e;;) {
                                    if (5 === f.tag) {
                                        if (null === c) {
                                            c = f;
                                            try {
                                                o = f.stateNode, s ? "function" === typeof(i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = f.stateNode, a = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = Vt("display", a))
                                            } catch (H) {
                                                ff(e, e.return, H)
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === c) try {
                                            f.stateNode.nodeValue = s ? "" : f.memoizedProps
                                        } catch (H) {
                                            ff(e, e.return, H)
                                        }
                                    } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                        f.child.return = f, f = f.child;
                                        continue
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling;) {
                                        if (null === f.return || f.return === e) break e;
                                        c === f && (c = null), f = f.return
                                    }
                                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                                }
                            }
                            break;
                        case 19:
                            Zs(t, e), tc(e), 4 & r && Js(e);
                        case 21:
                    }
                }

                function tc(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (Qs(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(Ee(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var o = r.stateNode;
                                    32 & r.flags && (At(o, ""), r.flags &= -33), Gs(e, Hs(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var i = r.stateNode.containerInfo;
                                    Ws(e, Hs(e), i);
                                    break;
                                default:
                                    throw Error(Ee(161))
                            }
                        }
                        catch (a) {
                            ff(e, e.return, a)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function nc(e, t, n) {
                    js = e, rc(e)
                }

                function rc(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== js;) {
                        var o = js,
                            i = o.child;
                        if (22 === o.tag && r) {
                            var a = null !== o.memoizedState || Ns;
                            if (!a) {
                                var l = o.alternate,
                                    u = null !== l && null !== l.memoizedState || Ps;
                                l = Ns;
                                var s = Ps;
                                if (Ns = a, (Ps = u) && !s)
                                    for (js = o; null !== js;) u = (a = js).child, 22 === a.tag && null !== a.memoizedState ? ac(o) : null !== u ? (u.return = a, js = u) : ac(o);
                                for (; null !== i;) js = i, rc(i), i = i.sibling;
                                js = o, Ns = l, Ps = s
                            }
                            oc(e)
                        } else 0 !== (8772 & o.subtreeFlags) && null !== i ? (i.return = o, js = i) : oc(e)
                    }
                }

                function oc(e) {
                    for (; null !== js;) {
                        var t = js;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ps || Vs(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Ps)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var o = t.elementType === t.type ? n.memoizedProps : Xa(t.type, n.memoizedProps);
                                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var i = t.updateQueue;
                                        null !== i && bl(t, i, r);
                                        break;
                                    case 3:
                                        var a = t.updateQueue;
                                        if (null !== a) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            bl(t, a, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var s = t.alternate;
                                            if (null !== s) {
                                                var c = s.memoizedState;
                                                if (null !== c) {
                                                    var f = c.dehydrated;
                                                    null !== f && Sr(f)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(Ee(163))
                                }
                                Ps || 512 & t.flags && Bs(t)
                            } catch (Q) {
                                ff(t, t.return, Q)
                            }
                        }
                        if (t === e) {
                            js = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, js = n;
                            break
                        }
                        js = t.return
                    }
                }

                function ic(e) {
                    for (; null !== js;) {
                        var t = js;
                        if (t === e) {
                            js = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, js = n;
                            break
                        }
                        js = t.return
                    }
                }

                function ac(e) {
                    for (; null !== js;) {
                        var t = js;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        Vs(4, t)
                                    } catch (u) {
                                        ff(t, n, u)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var o = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (u) {
                                            ff(t, o, u)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        Bs(t)
                                    } catch (u) {
                                        ff(t, i, u)
                                    }
                                    break;
                                case 5:
                                    var a = t.return;
                                    try {
                                        Bs(t)
                                    } catch (u) {
                                        ff(t, a, u)
                                    }
                            }
                        } catch (u) {
                            ff(t, t.return, u)
                        }
                        if (t === e) {
                            js = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, js = l;
                            break
                        }
                        js = t.return
                    }
                }
                var lc, uc = Math.ceil,
                    sc = He.ReactCurrentDispatcher,
                    cc = He.ReactCurrentOwner,
                    fc = He.ReactCurrentBatchConfig,
                    dc = 0,
                    pc = null,
                    hc = null,
                    gc = 0,
                    vc = 0,
                    mc = oa(0),
                    yc = 0,
                    bc = null,
                    _c = 0,
                    wc = 0,
                    Sc = 0,
                    kc = null,
                    Cc = null,
                    xc = 0,
                    Ic = 1 / 0,
                    Ec = null,
                    Mc = !1,
                    Rc = null,
                    Oc = null,
                    Tc = !1,
                    Nc = null,
                    Pc = 0,
                    Dc = 0,
                    jc = null,
                    Lc = -1,
                    zc = 0;

                function Ac() {
                    return 0 !== (6 & dc) ? In() : -1 !== Lc ? Lc : Lc = In()
                }

                function Fc(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & dc) && 0 !== gc ? gc & -gc : null !== Ka.transition ? (0 === zc && (zc = Gn()), zc) : 0 !== (e = Jn) ? e : e = void 0 === (e = window.event) ? 16 : Or(e.type)
                }

                function Uc(e, t, n, r) {
                    if (50 < Dc) throw Dc = 0, jc = null, Error(Ee(185));
                    qn(e, n, r), 0 !== (2 & dc) && e === pc || (e === pc && (0 === (2 & dc) && (wc |= n), 4 === yc && Wc(e, gc)), Vc(e, r), 1 === n && 0 === dc && 0 === (1 & t.mode) && (Ic = In() + 500, ba && ka()))
                }

                function Vc(e, t) {
                    var n = e.callbackNode;
                    Hn(e, t);
                    var r = $n(e, e === pc ? gc : 0);
                    if (0 === r) null !== n && kn(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && kn(n), 1 === t) 0 === e.tag ? Sa(Gc.bind(null, e)) : wa(Gc.bind(null, e)), Ui((function() {
                            0 === (6 & dc) && ka()
                        })), n = null;
                        else {
                            switch (Zn(r)) {
                                case 1:
                                    n = Mn;
                                    break;
                                case 4:
                                    n = Rn;
                                    break;
                                case 16:
                                default:
                                    n = On;
                                    break;
                                case 536870912:
                                    n = Nn
                            }
                            n = vf(n, Bc.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function Bc(e, t) {
                    if (Lc = -1, zc = 0, 0 !== (6 & dc)) throw Error(Ee(327));
                    var n = e.callbackNode;
                    if (sf() && e.callbackNode !== n) return null;
                    var r = $n(e, e === pc ? gc : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = tf(e, r);
                    else {
                        t = r;
                        var o = dc;
                        dc |= 2;
                        var i = Zc();
                        for (pc === e && gc === t || (Ec = null, Ic = In() + 500, Xc(e, t));;) try {
                            rf();
                            break
                        } catch (l) {
                            Jc(e, l)
                        }
                        nl(), sc.current = i, dc = o, null !== hc ? t = 0 : (pc = null, gc = 0, t = yc)
                    }
                    if (0 !== t) {
                        if (2 === t && 0 !== (o = Wn(e)) && (r = o, t = $c(e, o)), 1 === t) throw n = bc, Xc(e, 0), Wc(e, r), Vc(e, In()), n;
                        if (6 === t) Wc(e, r);
                        else {
                            if (o = e.current.alternate, 0 === (30 & r) && !Hc(o) && (2 === (t = tf(e, r)) && 0 !== (i = Wn(e)) && (r = i, t = $c(e, i)), 1 === t)) throw n = bc, Xc(e, 0), Wc(e, r), Vc(e, In()), n;
                            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(Ee(345));
                                case 2:
                                case 5:
                                    lf(e, Cc, Ec);
                                    break;
                                case 3:
                                    if (Wc(e, r), (130023424 & r) === r && 10 < (t = xc + 500 - In())) {
                                        if (0 !== $n(e, 0)) break;
                                        if (((o = e.suspendedLanes) & r) !== r) {
                                            Ac(), e.pingedLanes |= e.suspendedLanes & o;
                                            break
                                        }
                                        e.timeoutHandle = zi(lf.bind(null, e, Cc, Ec), t);
                                        break
                                    }
                                    lf(e, Cc, Ec);
                                    break;
                                case 4:
                                    if (Wc(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, o = -1; 0 < r;) {
                                        var a = 31 - Ln(r);
                                        i = 1 << a, (a = t[a]) > o && (o = a), r &= ~i
                                    }
                                    if (r = o, 10 < (r = (120 > (r = In() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uc(r / 1960)) - r)) {
                                        e.timeoutHandle = zi(lf.bind(null, e, Cc, Ec), r);
                                        break
                                    }
                                    lf(e, Cc, Ec);
                                    break;
                                default:
                                    throw Error(Ee(329))
                            }
                        }
                    }
                    return Vc(e, In()), e.callbackNode === n ? Bc.bind(null, e) : null
                }

                function $c(e, t) {
                    var n = kc;
                    return e.current.memoizedState.isDehydrated && (Xc(e, t).flags |= 256), 2 !== (e = tf(e, t)) && (t = Cc, Cc = n, null !== t && Qc(t)), e
                }

                function Qc(e) {
                    null === Cc ? Cc = e : Cc.push.apply(Cc, e)
                }

                function Hc(e) {
                    for (var t = e;;) {
                        if (16384 & t.flags) {
                            var n = t.updateQueue;
                            if (null !== n && null !== (n = n.stores))
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r],
                                        i = o.getSnapshot;
                                    o = o.value;
                                    try {
                                        if (!Vo(i(), o)) return !1
                                    } catch (a) {
                                        return !1
                                    }
                                }
                        }
                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                        else {
                            if (t === e) break;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return !0
                }

                function Wc(e, t) {
                    for (t &= ~Sc, t &= ~wc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - Ln(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function Gc(e) {
                    if (0 !== (6 & dc)) throw Error(Ee(327));
                    sf();
                    var t = $n(e, 0);
                    if (0 === (1 & t)) return Vc(e, In()), null;
                    var n = tf(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = Wn(e);
                        0 !== r && (t = r, n = $c(e, r))
                    }
                    if (1 === n) throw n = bc, Xc(e, 0), Wc(e, t), Vc(e, In()), n;
                    if (6 === n) throw Error(Ee(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, lf(e, Cc, Ec), Vc(e, In()), null
                }

                function Yc(e, t) {
                    var n = dc;
                    dc |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (dc = n) && (Ic = In() + 500, ba && ka())
                    }
                }

                function qc(e) {
                    null !== Nc && 0 === Nc.tag && 0 === (6 & dc) && sf();
                    var t = dc;
                    dc |= 1;
                    var n = fc.transition,
                        r = Jn;
                    try {
                        if (fc.transition = null, Jn = 1, e) return e()
                    } finally {
                        Jn = r, fc.transition = n, 0 === (6 & (dc = t)) && ka()
                    }
                }

                function Kc() {
                    vc = mc.current, ia(mc)
                }

                function Xc(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, Ai(n)), null !== hc)
                        for (n = hc.return; null !== n;) {
                            var r = n;
                            switch (La(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && pa();
                                    break;
                                case 3:
                                    Fl(), ia(sa), ia(ua), Hl();
                                    break;
                                case 5:
                                    Vl(r);
                                    break;
                                case 4:
                                    Fl();
                                    break;
                                case 13:
                                case 19:
                                    ia(Bl);
                                    break;
                                case 10:
                                    rl(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    Kc()
                            }
                            n = n.return
                        }
                    if (pc = e, hc = e = wf(e.current, null), gc = vc = t, yc = 0, bc = null, Sc = wc = _c = 0, Cc = kc = null, null !== ll) {
                        for (t = 0; t < ll.length; t++)
                            if (null !== (r = (n = ll[t]).interleaved)) {
                                n.interleaved = null;
                                var o = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var a = i.next;
                                    i.next = o, r.next = a
                                }
                                n.pending = r
                            }
                        ll = null
                    }
                    return e
                }

                function Jc(e, t) {
                    for (;;) {
                        var n = hc;
                        try {
                            if (nl(), Wl.current = Uu, Jl) {
                                for (var r = ql.memoizedState; null !== r;) {
                                    var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next
                                }
                                Jl = !1
                            }
                            if (Yl = 0, Xl = Kl = ql = null, Zl = !1, eu = 0, cc.current = null, null === n || null === n.return) {
                                yc = 1, bc = t, hc = null;
                                break
                            }
                            e: {
                                var i = e,
                                    a = n.return,
                                    l = n,
                                    u = t;
                                if (t = gc, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var s = u,
                                        c = l,
                                        f = c.tag;
                                    if (0 === (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var d = c.alternate;
                                        d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                    }
                                    var p = Xu(a);
                                    if (null !== p) {
                                        p.flags &= -257, Ju(p, a, l, i, t), 1 & p.mode && Ku(i, s, t), u = s;
                                        var h = (t = p).updateQueue;
                                        if (null === h) {
                                            var g = new Set;
                                            g.add(u), t.updateQueue = g
                                        } else h.add(u);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        Ku(i, s, t), ef();
                                        break e
                                    }
                                    u = Error(Ee(426))
                                } else if (Fa && 1 & l.mode) {
                                    var v = Xu(a);
                                    if (null !== v) {
                                        0 === (65536 & v.flags) && (v.flags |= 256), Ju(v, a, l, i, t), qa(Qu(u, l));
                                        break e
                                    }
                                }
                                i = u = Qu(u, l),
                                4 !== yc && (yc = 2),
                                null === kc ? kc = [i] : kc.push(i),
                                i = a;do {
                                    switch (i.tag) {
                                        case 3:
                                            i.flags |= 65536, t &= -t, i.lanes |= t, ml(i, Yu(i, u, t));
                                            break e;
                                        case 1:
                                            l = u;
                                            var m = i.type,
                                                y = i.stateNode;
                                            if (0 === (128 & i.flags) && ("function" === typeof m.getDerivedStateFromError || null !== y && "function" === typeof y.componentDidCatch && (null === Oc || !Oc.has(y)))) {
                                                i.flags |= 65536, t &= -t, i.lanes |= t, ml(i, qu(i, l, t));
                                                break e
                                            }
                                    }
                                    i = i.return
                                } while (null !== i)
                            }
                            af(n)
                        } catch (b) {
                            t = b, hc === n && null !== n && (hc = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function Zc() {
                    var e = sc.current;
                    return sc.current = Uu, null === e ? Uu : e
                }

                function ef() {
                    0 !== yc && 3 !== yc && 2 !== yc || (yc = 4), null === pc || 0 === (268435455 & _c) && 0 === (268435455 & wc) || Wc(pc, gc)
                }

                function tf(e, t) {
                    var n = dc;
                    dc |= 2;
                    var r = Zc();
                    for (pc === e && gc === t || (Ec = null, Xc(e, t));;) try {
                        nf();
                        break
                    } catch (o) {
                        Jc(e, o)
                    }
                    if (nl(), dc = n, sc.current = r, null !== hc) throw Error(Ee(261));
                    return pc = null, gc = 0, yc
                }

                function nf() {
                    for (; null !== hc;) of (hc)
                }

                function rf() {
                    for (; null !== hc && !Cn();) of (hc)
                }

                function of (e) {
                    var t = lc(e.alternate, e, vc);
                    e.memoizedProps = e.pendingProps, null === t ? af(e) : hc = t, cc.current = null
                }

                function af(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Os(n, t, vc))) return void(hc = n)
                        } else {
                            if (null !== (n = Ts(n, t))) return n.flags &= 32767, void(hc = n);
                            if (null === e) return yc = 6, void(hc = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(hc = t);
                        hc = t = e
                    } while (null !== t);
                    0 === yc && (yc = 5)
                }

                function lf(e, t, n) {
                    var r = Jn,
                        o = fc.transition;
                    try {
                        fc.transition = null, Jn = 1, uf(e, t, n, r)
                    } finally {
                        fc.transition = o, Jn = r
                    }
                    return null
                }

                function uf(e, t, n, r) {
                    do {
                        sf()
                    } while (null !== Nc);
                    if (0 !== (6 & dc)) throw Error(Ee(327));
                    n = e.finishedWork;
                    var o = e.finishedLanes;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(Ee(177));
                    e.callbackNode = null, e.callbackPriority = 0;
                    var i = n.lanes | n.childLanes;
                    if (Kn(e, i), e === pc && (hc = pc = null, gc = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Tc || (Tc = !0, vf(On, (function() {
                            return sf(), null
                        }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                        i = fc.transition, fc.transition = null;
                        var a = Jn;
                        Jn = 1;
                        var l = dc;
                        dc |= 4, cc.current = null, Fs(e, n), ec(n, e), Yo(ji), Cr = !!Di, ji = Di = null, e.current = n, nc(n), xn(), dc = l, Jn = a, fc.transition = i
                    } else e.current = n;
                    if (Tc && (Tc = !1, Nc = e, Pc = o), 0 === (i = e.pendingLanes) && (Oc = null), jn(n.stateNode), Vc(e, In()), null !== t)
                        for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                            componentStack: o.stack,
                            digest: o.digest
                        });
                    if (Mc) throw Mc = !1, e = Rc, Rc = null, e;
                    return 0 !== (1 & Pc) && 0 !== e.tag && sf(), 0 !== (1 & (i = e.pendingLanes)) ? e === jc ? Dc++ : (Dc = 0, jc = e) : Dc = 0, ka(), null
                }

                function sf() {
                    if (null !== Nc) {
                        var e = Zn(Pc),
                            t = fc.transition,
                            n = Jn;
                        try {
                            if (fc.transition = null, Jn = 16 > e ? 16 : e, null === Nc) var r = !1;
                            else {
                                if (e = Nc, Nc = null, Pc = 0, 0 !== (6 & dc)) throw Error(Ee(331));
                                var o = dc;
                                for (dc |= 4, js = e.current; null !== js;) {
                                    var i = js,
                                        a = i.child;
                                    if (0 !== (16 & js.flags)) {
                                        var l = i.deletions;
                                        if (null !== l) {
                                            for (var u = 0; u < l.length; u++) {
                                                var s = l[u];
                                                for (js = s; null !== js;) {
                                                    var c = js;
                                                    switch (c.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            Us(8, c, i)
                                                    }
                                                    var f = c.child;
                                                    if (null !== f) f.return = c, js = f;
                                                    else
                                                        for (; null !== js;) {
                                                            var d = (c = js).sibling,
                                                                p = c.return;
                                                            if ($s(c), c === s) {
                                                                js = null;
                                                                break
                                                            }
                                                            if (null !== d) {
                                                                d.return = p, js = d;
                                                                break
                                                            }
                                                            js = p
                                                        }
                                                }
                                            }
                                            var h = i.alternate;
                                            if (null !== h) {
                                                var g = h.child;
                                                if (null !== g) {
                                                    h.child = null;
                                                    do {
                                                        var v = g.sibling;
                                                        g.sibling = null, g = v
                                                    } while (null !== g)
                                                }
                                            }
                                            js = i
                                        }
                                    }
                                    if (0 !== (2064 & i.subtreeFlags) && null !== a) a.return = i, js = a;
                                    else e: for (; null !== js;) {
                                        if (0 !== (2048 & (i = js).flags)) switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Us(9, i, i.return)
                                        }
                                        var m = i.sibling;
                                        if (null !== m) {
                                            m.return = i.return, js = m;
                                            break e
                                        }
                                        js = i.return
                                    }
                                }
                                var y = e.current;
                                for (js = y; null !== js;) {
                                    var b = (a = js).child;
                                    if (0 !== (2064 & a.subtreeFlags) && null !== b) b.return = a, js = b;
                                    else e: for (a = y; null !== js;) {
                                        if (0 !== (2048 & (l = js).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Vs(9, l)
                                            }
                                        } catch (w) {
                                            ff(l, l.return, w)
                                        }
                                        if (l === a) {
                                            js = null;
                                            break e
                                        }
                                        var _ = l.sibling;
                                        if (null !== _) {
                                            _.return = l.return, js = _;
                                            break e
                                        }
                                        js = l.return
                                    }
                                }
                                if (dc = o, ka(), Dn && "function" === typeof Dn.onPostCommitFiberRoot) try {
                                    Dn.onPostCommitFiberRoot(Pn, e)
                                } catch (w) {}
                                r = !0
                            }
                            return r
                        } finally {
                            Jn = n, fc.transition = t
                        }
                    }
                    return !1
                }

                function cf(e, t, n) {
                    e = gl(e, t = Yu(e, t = Qu(n, t), 1), 1), t = Ac(), null !== e && (qn(e, 1, t), Vc(e, t))
                }

                function ff(e, t, n) {
                    if (3 === e.tag) cf(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                cf(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Oc || !Oc.has(r))) {
                                    t = gl(t, e = qu(t, e = Qu(n, e), 1), 1), e = Ac(), null !== t && (qn(t, 1, e), Vc(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function df(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = Ac(), e.pingedLanes |= e.suspendedLanes & n, pc === e && (gc & n) === n && (4 === yc || 3 === yc && (130023424 & gc) === gc && 500 > In() - xc ? Xc(e, 0) : Sc |= n), Vc(e, t)
                }

                function pf(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = Vn, 0 === (130023424 & (Vn <<= 1)) && (Vn = 4194304)));
                    var n = Ac();
                    null !== (e = cl(e, t)) && (qn(e, t, n), Vc(e, n))
                }

                function hf(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), pf(e, n)
                }

                function gf(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                o = e.memoizedState;
                            null !== o && (n = o.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(Ee(314))
                    }
                    null !== r && r.delete(t), pf(e, n)
                }

                function vf(e, t) {
                    return Sn(e, t)
                }

                function mf(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function yf(e, t, n, r) {
                    return new mf(e, t, n, r)
                }

                function bf(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function _f(e) {
                    if ("function" === typeof e) return bf(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === Ze) return 11;
                        if (e === nt) return 14
                    }
                    return 2
                }

                function wf(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = yf(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Sf(e, t, n, r, o, i) {
                    var a = 2;
                    if (r = e, "function" === typeof e) bf(e) && (a = 1);
                    else if ("string" === typeof e) a = 5;
                    else e: switch (e) {
                        case Ye:
                            return kf(n.children, o, i, t);
                        case qe:
                            a = 8, o |= 8;
                            break;
                        case Ke:
                            return (e = yf(12, n, t, 2 | o)).elementType = Ke, e.lanes = i, e;
                        case et:
                            return (e = yf(13, n, t, o)).elementType = et, e.lanes = i, e;
                        case tt:
                            return (e = yf(19, n, t, o)).elementType = tt, e.lanes = i, e;
                        case ot:
                            return Cf(n, o, i, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case Xe:
                                    a = 10;
                                    break e;
                                case Je:
                                    a = 9;
                                    break e;
                                case Ze:
                                    a = 11;
                                    break e;
                                case nt:
                                    a = 14;
                                    break e;
                                case rt:
                                    a = 16, r = null;
                                    break e
                            }
                            throw Error(Ee(130, null == e ? e : typeof e, ""))
                    }
                    return (t = yf(a, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
                }

                function kf(e, t, n, r) {
                    return (e = yf(7, e, r, t)).lanes = n, e
                }

                function Cf(e, t, n, r) {
                    return (e = yf(22, e, r, t)).elementType = ot, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function xf(e, t, n) {
                    return (e = yf(6, e, null, t)).lanes = n, e
                }

                function If(e, t, n) {
                    return (t = yf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Ef(e, t, n, r, o) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yn(0), this.expirationTimes = Yn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yn(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
                }

                function Mf(e, t, n, r, o, i, a, l, u) {
                    return e = new Ef(e, t, n, l, u), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = yf(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, dl(i), e
                }

                function Rf(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: Ge,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function Of(e) {
                    if (!e) return la;
                    e: {
                        if (vn(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(Ee(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (da(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(Ee(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (da(n)) return ga(e, n, t)
                    }
                    return t
                }

                function Tf(e, t, n, r, o, i, a, l, u) {
                    return (e = Mf(n, r, !0, e, o, i, a, l, u)).context = Of(null), n = e.current, (i = hl(r = Ac(), o = Fc(n))).callback = void 0 !== t && null !== t ? t : null, gl(n, i, o), e.current.lanes = o, qn(e, o, r), Vc(e, r), e
                }

                function Nf(e, t, n, r) {
                    var o = t.current,
                        i = Ac(),
                        a = Fc(o);
                    return n = Of(n), null === t.context ? t.context = n : t.pendingContext = n, (t = hl(i, a)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = gl(o, t, a)) && (Uc(e, o, a, i), vl(e, o, a)), a
                }

                function Pf(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Df(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function jf(e, t) {
                    Df(e, t), (e = e.alternate) && Df(e, t)
                }

                function Lf() {
                    return null
                }
                lc = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || sa.current) es = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return es = !1, Es(e, t, n);
                            es = 0 !== (131072 & e.flags)
                        }
                    else es = !1, Fa && 0 !== (1048576 & t.flags) && Da(t, Ea, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            xs(e, t), e = t.pendingProps;
                            var o = fa(t, ua.current);
                            il(t, n), o = ou(null, t, r, e, o, n);
                            var i = iu();
                            return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, da(r) ? (i = !0, va(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, dl(t), o.updater = Sl, t.stateNode = o, o._reactInternals = t, Il(t, r, e, n), t = ss(null, t, r, !0, i, n)) : (t.tag = 0, Fa && i && ja(t), ts(null, t, o, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (xs(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = _f(r), e = Xa(r, e), o) {
                                    case 0:
                                        t = ls(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = us(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = ns(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = rs(null, t, r, Xa(r.type, e), n);
                                        break e
                                }
                                throw Error(Ee(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, o = t.pendingProps, ls(e, t, r, o = t.elementType === r ? o : Xa(r, o), n);
                        case 1:
                            return r = t.type, o = t.pendingProps, us(e, t, r, o = t.elementType === r ? o : Xa(r, o), n);
                        case 3:
                            e: {
                                if (cs(t), null === e) throw Error(Ee(387));r = t.pendingProps,
                                o = (i = t.memoizedState).element,
                                pl(e, t),
                                yl(t, r, null, n);
                                var a = t.memoizedState;
                                if (r = a.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: a.cache,
                                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                                            transitions: a.transitions
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = fs(e, t, r, n, o = Qu(Error(Ee(423)), t));
                                        break e
                                    }
                                    if (r !== o) {
                                        t = fs(e, t, r, n, o = Qu(Error(Ee(424)), t));
                                        break e
                                    }
                                    for (Aa = $i(t.stateNode.containerInfo.firstChild), za = t, Fa = !0, Ua = null, n = Nl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (Ya(), r === o) {
                                        t = Is(e, t, n);
                                        break e
                                    }
                                    ts(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ul(t), null === e && Qa(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, a = o.children, Li(r, o) ? a = null : null !== i && Li(r, i) && (t.flags |= 32), as(e, t), ts(e, t, a, n), t.child;
                        case 6:
                            return null === e && Qa(t), null;
                        case 13:
                            return ys(e, t, n);
                        case 4:
                            return Al(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Tl(t, null, r, n) : ts(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, o = t.pendingProps, ns(e, t, r, o = t.elementType === r ? o : Xa(r, o), n);
                        case 7:
                            return ts(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return ts(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, aa(Ja, r._currentValue), r._currentValue = a, null !== i)
                                    if (Vo(i.value, a)) {
                                        if (i.children === o.children && !sa.current) {
                                            t = Is(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var l = i.dependencies;
                                            if (null !== l) {
                                                a = i.child;
                                                for (var u = l.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === i.tag) {
                                                            (u = hl(-1, n & -n)).tag = 2;
                                                            var s = i.updateQueue;
                                                            if (null !== s) {
                                                                var c = (s = s.shared).pending;
                                                                null === c ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                                            }
                                                        }
                                                        i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), ol(i.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === i.tag) a = i.type === t.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (a = i.return)) throw Error(Ee(341));
                                                a.lanes |= n, null !== (l = a.alternate) && (l.lanes |= n), ol(a, n, t), a = i.sibling
                                            } else a = i.child;
                                            if (null !== a) a.return = i;
                                            else
                                                for (a = i; null !== a;) {
                                                    if (a === t) {
                                                        a = null;
                                                        break
                                                    }
                                                    if (null !== (i = a.sibling)) {
                                                        i.return = a.return, a = i;
                                                        break
                                                    }
                                                    a = a.return
                                                }
                                            i = a
                                        }
                                ts(e, t, o.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return o = t.type, r = t.pendingProps.children, il(t, n), r = r(o = al(o)), t.flags |= 1, ts(e, t, r, n), t.child;
                        case 14:
                            return o = Xa(r = t.type, t.pendingProps), rs(e, t, r, o = Xa(r.type, o), n);
                        case 15:
                            return os(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xa(r, o), xs(e, t), t.tag = 1, da(r) ? (e = !0, va(t)) : e = !1, il(t, n), Cl(t, r, o), Il(t, r, o, n), ss(null, t, r, !0, e, n);
                        case 19:
                            return Cs(e, t, n);
                        case 22:
                            return is(e, t, n)
                    }
                    throw Error(Ee(156, t.tag))
                };
                var zf = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Af(e) {
                    this._internalRoot = e
                }

                function Ff(e) {
                    this._internalRoot = e
                }

                function Uf(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Vf(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Bf() {}

                function $f(e, t, n, r, o) {
                    if (o) {
                        if ("function" === typeof r) {
                            var i = r;
                            r = function() {
                                var e = Pf(a);
                                i.call(e)
                            }
                        }
                        var a = Tf(t, r, e, 0, null, !1, !1, "", Bf);
                        return e._reactRootContainer = a, e[Yi] = a.current, Si(8 === e.nodeType ? e.parentNode : e), qc(), a
                    }
                    for (; o = e.lastChild;) e.removeChild(o);
                    if ("function" === typeof r) {
                        var l = r;
                        r = function() {
                            var e = Pf(u);
                            l.call(e)
                        }
                    }
                    var u = Mf(e, 0, !1, null, null, !1, !1, "", Bf);
                    return e._reactRootContainer = u, e[Yi] = u.current, Si(8 === e.nodeType ? e.parentNode : e), qc((function() {
                        Nf(t, u, n, r)
                    })), u
                }

                function Qf(e, t, n, r, o) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var a = i;
                        if ("function" === typeof o) {
                            var l = o;
                            o = function() {
                                var e = Pf(a);
                                l.call(e)
                            }
                        }
                        Nf(t, a, e, o)
                    } else a = $f(n, t, e, o, r);
                    return Pf(a)
                }
                Ff.prototype.render = Af.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(Ee(409));
                    Nf(e, t, null, null)
                }, Ff.prototype.unmount = Af.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        qc((function() {
                            Nf(null, e, null, null)
                        })), t[Yi] = null
                    }
                }, Ff.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = rr();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < dr.length && 0 !== t && t < dr[n].priority; n++);
                        dr.splice(n, 0, e), 0 === n && mr(e)
                    }
                }, er = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = Bn(t.pendingLanes);
                                0 !== n && (Xn(t, 1 | n), Vc(t, In()), 0 === (6 & dc) && (Ic = In() + 500, ka()))
                            }
                            break;
                        case 13:
                            qc((function() {
                                var t = cl(e, 1);
                                if (null !== t) {
                                    var n = Ac();
                                    Uc(t, e, 1, n)
                                }
                            })), jf(e, 1)
                    }
                }, tr = function(e) {
                    if (13 === e.tag) {
                        var t = cl(e, 134217728);
                        null !== t && Uc(t, e, 134217728, Ac()), jf(e, 134217728)
                    }
                }, nr = function(e) {
                    if (13 === e.tag) {
                        var t = Fc(e),
                            n = cl(e, t);
                        null !== n && Uc(n, e, t, Ac()), jf(e, t)
                    }
                }, rr = function() {
                    return Jn
                }, or = function(e, t) {
                    var n = Jn;
                    try {
                        return Jn = e, t()
                    } finally {
                        Jn = n
                    }
                }, Yt = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Ct(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = ta(r);
                                        if (!o) throw Error(Ee(90));
                                        bt(r), Ct(r, o)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Tt(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Mt(e, !!n.multiple, t, !1)
                    }
                }, en = Yc, tn = qc;
                var Hf = {
                        usingClientEntryPoint: !1,
                        Events: [Zi, ea, ta, Jt, Zt, Yc]
                    },
                    Wf = {
                        findFiberByHostInstance: Ji,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    Gf = {
                        bundleType: Wf.bundleType,
                        version: Wf.version,
                        rendererPackageName: Wf.rendererPackageName,
                        rendererConfig: Wf.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: He.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = _n(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: Wf.findFiberByHostInstance || Lf,
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!Yf.isDisabled && Yf.supportsFiber) try {
                        Pn = Yf.inject(Gf), Dn = Yf
                    } catch (Lt) {}
                }
                var qf = function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        if (!Uf(t)) throw Error(Ee(200));
                        return Rf(e, t, null, n)
                    },
                    Kf = {
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Hf,
                        createPortal: qf,
                        createRoot: function(e, t) {
                            if (!Uf(e)) throw Error(Ee(299));
                            var n = !1,
                                r = "",
                                o = zf;
                            return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Mf(e, 1, !1, null, null, n, !1, r, o), e[Yi] = t.current, Si(8 === e.nodeType ? e.parentNode : e), new Af(t)
                        },
                        findDOMNode: function(e) {
                            if (null == e) return null;
                            if (1 === e.nodeType) return e;
                            var t = e._reactInternals;
                            if (void 0 === t) {
                                if ("function" === typeof e.render) throw Error(Ee(188));
                                throw e = Object.keys(e).join(","), Error(Ee(268, e))
                            }
                            return e = null === (e = _n(t)) ? null : e.stateNode
                        },
                        flushSync: function(e) {
                            return qc(e)
                        },
                        hydrate: function(e, t, n) {
                            if (!Vf(t)) throw Error(Ee(200));
                            return Qf(null, e, t, !0, n)
                        },
                        hydrateRoot: function(e, t, n) {
                            if (!Uf(e)) throw Error(Ee(405));
                            var r = null != n && n.hydratedSources || null,
                                o = !1,
                                i = "",
                                a = zf;
                            if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (a = n.onRecoverableError)), t = Tf(t, null, e, 1, null != n ? n : null, o, !1, i, a), e[Yi] = t.current, Si(e), r)
                                for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                            return new Ff(t)
                        },
                        render: function(e, t, n) {
                            if (!Vf(t)) throw Error(Ee(200));
                            return Qf(null, e, t, !1, n)
                        },
                        unmountComponentAtNode: function(e) {
                            if (!Vf(e)) throw Error(Ee(40));
                            return !!e._reactRootContainer && (qc((function() {
                                Qf(null, null, e, !1, (function() {
                                    e._reactRootContainer = null, e[Yi] = null
                                }))
                            })), !0)
                        },
                        unstable_batchedUpdates: Yc,
                        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
                            if (!Vf(n)) throw Error(Ee(200));
                            if (null == e || void 0 === e._reactInternals) throw Error(Ee(38));
                            return Qf(e, t, n, !1, r)
                        },
                        version: "18.2.0-next-9e3b772b8-20220608"
                    },
                    Xf = (F((function(e, t) {})), F((function(e) {
                        function t() {
                            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        t(), e.exports = Kf
                    }))),
                    Jf = F((function(e, t) {
                        t.createRoot = Xf.createRoot, t.hydrateRoot = Xf.hydrateRoot
                    }));

                function Zf() {
                    return !1
                }
                var ed = function() {
                        function e() {
                            this._effects = [], this._runtimeName = "", this._models = {}
                        }
                        return Object.defineProperty(e.prototype, "models", {
                            get: function() {
                                return this._models
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.createContext = function(e) {
                            var t = this,
                                n = e.pluginName,
                                r = e.store,
                                i = e.params,
                                a = void 0 === i ? {} : i;
                            this._runtimeName = n;
                            var l = function(e, n) {
                                return t._models[e] || (t._models[e] = r.getModel(e, n), t.registerEffect(t._models[e])), t._models[e]
                            };
                            return {
                                params: a,
                                store: o(o({}, r), {
                                    getModel: l
                                }),
                                effect: function(e, n) {
                                    if (void 0 === n && (n = []), "[object Function]" !== Object.prototype.toString.call(e)) throw new Error("effect callback must be a function");
                                    if ("[object Array]" !== Object.prototype.toString.call(n)) throw new Error("effect deps must be an array");
                                    t._effects.push({
                                        effect: e,
                                        deps: t.transformDeps(n),
                                        destructor: void 0
                                    })
                                }
                            }
                        }, e.prototype.transformDeps = function(e) {
                            var t = this;
                            return e.map((function(e) {
                                return [e, t.getDepsValue(e)]
                            }))
                        }, e.prototype.getDepsValue = function(e) {
                            for (var t = e.split("."), n = this._models["".concat(this._runtimeName, "/").concat(t[0])], r = 1; r < t.length; r++) n = n[t[r]];
                            return n
                        }, e.prototype.checkDeps = function(e) {
                            for (var t = !1, n = 0; n < e.length; n++) {
                                var r = y(e[n], 2),
                                    o = r[0],
                                    i = r[1];
                                if (this.getDepsValue(o) !== i) return t = !0
                            }
                            return t
                        }, e.prototype.registerEffect = function(e) {
                            var t = this;
                            Zf() || e.$subscribe((function() {
                                t._effects.forEach((function(e, n) {
                                    var r = e.effect,
                                        o = e.deps;
                                    t.checkDeps(o) && (t._effects[n].destructor = r(), t._effects[n].deps.forEach((function(e) {
                                        e[1] = t.getDepsValue(e[0])
                                    })))
                                }))
                            }))
                        }, e.prototype.runDestructors = function() {
                            try {
                                this._effects.forEach((function(e) {
                                    var t = e.destructor;
                                    t && t()
                                }))
                            } catch (e) {
                                console.error(e)
                            }
                        }, e
                    }(),
                    td = "https://docs.google.com/spreadsheets/d/15SXbaMCpYCMBUJOpdZFQ4Tg0aaGAdDIdHflgIuQMx-Y/",
                    nd = {
                        error: !1,
                        errorCode: ""
                    };

                function rd(e) {
                    console.error("[iris error] ".concat(e, " ").concat(td)), nd.error = !0, nd.errorCode = e
                }
                var od, id, ad, ld, ud, sd, cd = function(e) {
                        window.__IRIS_DEBUG__ && console.debug("[iris debug] ".concat(e))
                    },
                    fd = function() {
                        function e() {
                            this._runtimeOnmount = [], this._runtimeUnmount = [], this._providerFactories = [], this._transformers = [], this._runtimeContextMap = {}, this.mount = this.mount.bind(this)
                        }
                        return e.prototype.getCurrentRuntimeContext = function(e) {
                            return this._runtimeContextMap[e] || (this._runtimeContextMap[e] = new ed), this._runtimeContextMap[e]
                        }, e.prototype.runRuntime = function(e, t, n, r) {
                            var o = r.context,
                                i = r.runtimeConfigs;
                            return p(this, void 0, void 0, (function() {
                                var r, a, l, u = this;
                                return h(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return this._store = e, r = {}, a = Date.now(), Object.keys(t).forEach((function(e) {
                                                var n = t[e],
                                                    o = u.getCurrentRuntimeContext(e).createContext({
                                                        pluginName: e,
                                                        store: u._store,
                                                        params: (null === i || void 0 === i ? void 0 : i.props) || {}
                                                    });
                                                r[e] = n(o)
                                            })), l = Date.now() - a, cd("createRuntimeContextDuration ".concat(l, "ms")), [4, this.handelRuntimeReturn(r, n, o, i)];
                                        case 1:
                                            return s.sent(), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.getModels = function() {
                            var e = this,
                                t = {};
                            return Object.keys(this._runtimeContextMap).forEach((function(n) {
                                Object.assign(t, e._runtimeContextMap[n].models)
                            })), t
                        }, e.prototype.handelRuntimeReturn = function(e, t, n, r) {
                            return p(this, void 0, void 0, (function() {
                                var o, i, a, l, u, s, c, f, d = this;
                                return h(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            o = [], i = [], a = [], l = [], u = [], p.label = 1;
                                        case 1:
                                            return p.trys.push([1, 3, , 4]), s = Date.now(), Object.keys(e).forEach((function(s) {
                                                var c, f, p, h, g, v, m;
                                                if ((null === (c = e[s]) || void 0 === c ? void 0 : c.init) && t) {
                                                    var y = Date.now(),
                                                        b = e[s].init(n);
                                                    b && o.push(b.then((function(e) {
                                                        var t = Date.now() - y;
                                                        return cd("runtimeInitFuncDuration (".concat(s, ") ").concat(t, "ms")), e
                                                    })))
                                                }(null === (f = e[s]) || void 0 === f ? void 0 : f.onMount) && t && (i.push(e[s].onMount), d._runtimeOnmount = i), (null === (p = e[s]) || void 0 === p ? void 0 : p.unMount) && t && (a.push(e[s].unMount), d._runtimeUnmount = a), (null === (h = e[s]) || void 0 === h ? void 0 : h.provider) && t && (l.push([e[s].provider, (null === r || void 0 === r ? void 0 : r.providerProps) || {}]), d._providerFactories = l), (null === (g = e[s]) || void 0 === g ? void 0 : g.transformers) && t && (u.push(e[s].transformers), d._transformers = u), (null === (v = e[s]) || void 0 === v ? void 0 : v.processRenderString) && t && (d._processRenderString = null === (m = e[s]) || void 0 === m ? void 0 : m.processRenderString)
                                            })), c = Date.now() - s, cd("handelRuntimeContextDuration ".concat(c, "ms")), [4, Promise.all(o)];
                                        case 2:
                                            return p.sent(), [3, 4];
                                        case 3:
                                            return f = p.sent(), console.error(f), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype.mount = function(e) {
                            try {
                                this._runtimeOnmount.forEach((function(t) {
                                    return t(e)
                                }))
                            } catch (t) {
                                console.error(t)
                            }
                            this._runtimeOnmount = []
                        }, e.prototype.unMount = function() {
                            var e = this;
                            try {
                                this._runtimeUnmount.forEach((function(e) {
                                    return e()
                                }))
                            } catch (t) {
                                console.error(t)
                            }
                            Object.keys(this._runtimeContextMap).forEach((function(t) {
                                e._runtimeContextMap[t].runDestructors()
                            }))
                        }, e.prototype.getProviders = function(e) {
                            try {
                                this._providers = this._providerFactories.map((function(t) {
                                    var n = y(t, 2),
                                        r = n[0],
                                        o = n[1];
                                    return [r(e), o]
                                }))
                            } catch (t) {
                                console.error(t)
                            }
                            return this._providers
                        }, e.prototype.getTransformers = function(e) {
                            var t = {};
                            try {
                                this._transformers.forEach((function(n) {
                                    t = o(o({}, t), n(e))
                                }))
                            } catch (n) {
                                console.error(n)
                            }
                            return t
                        }, e.prototype.getProcessRuntimString = function(e) {
                            return p(this, void 0, void 0, (function() {
                                return h(this, (function(t) {
                                    return [2, this._processRenderString ? this._processRenderString(e) : e]
                                }))
                            }))
                        }, e
                    }(),
                    dd = function() {
                        function e() {
                            this._providerFactories = []
                        }
                        return e.prototype.runUikit = function(e, t) {
                            var n = t.configs;
                            return p(this, void 0, void 0, (function() {
                                return h(this, (function(t) {
                                    return this._providerFactories = Object.entries(e).reduce((function(e, t) {
                                        var r, o = y(t, 2),
                                            i = o[0],
                                            a = o[1],
                                            l = null !== (r = n[i]) && void 0 !== r ? r : {},
                                            u = l.props,
                                            s = void 0 === u ? {} : u,
                                            c = l.providerProps,
                                            f = void 0 === c ? {} : c,
                                            d = "function" === typeof a ? a({
                                                params: s
                                            }).provider : a.provider;
                                        return d && e.push([d, f]), e
                                    }), []), [2]
                                }))
                            }))
                        }, e.prototype.getProviders = function() {
                            if (!this._providers) try {
                                this._providers = this._providerFactories.map((function(e) {
                                    var t = y(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    return [n(), r]
                                }))
                            } catch (e) {
                                console.error("IRIS getProviders error", e)
                            }
                            return this._providers
                        }, e
                    }(),
                    pd = "@@root",
                    hd = {
                        desktop: [800],
                        tablet: [500, 800],
                        mobile: [0, 500]
                    },
                    gd = "__$$IRIS$$__",
                    vd = "iris-id",
                    md = "iris-root",
                    yd = "iris-req-id",
                    bd = "iris-file-id",
                    _d = "iris-file-version",
                    wd = "iris-project-name",
                    Sd = "iris-render-content";

                function kd(e, t) {
                    if (Array.isArray(e) && Array.isArray(t)) {
                        if (e === t) return !0;
                        if (e.length === t.length) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }
                    }
                    return !1
                }

                function Cd() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    }))
                }(function(e) {
                    e.Component = "component", e.Page = "page", e.Layout = "layout", e.Box = "box", e.Text = "text", e.Image = "image", e.Group = "group", e.TemplateComponent = "templateComponent", e.TemplateComponentRef = "templateComponentRef", e.TemplateComponentIns = "templateComponentIns", e.Frame = "frame"
                })(od || (od = {})),
                function(e) {
                    e.BUNDLE = "bundle", e.COMPONENT = "component", e.RUNTIME = "runtime", e.I18N_SERVICE = "i18nService", e.UIKIT = "uikit", e.MODEL = "model"
                }(id || (id = {})),
                function(e) {
                    e.LOCAL = "local", e.LIBRARY = "library"
                }(ad || (ad = {})),
                function(e) {
                    e.variable = "variable", e.transformer = "transformer"
                }(ld || (ld = {})),
                function(e) {
                    e.FIXED = "Fixed", e.HUG = "Hug", e.FILL = "Fill"
                }(ud || (ud = {})),
                function(e) {
                    e.ROW = "row", e.COLUMN = "column"
                }(sd || (sd = {}));
                var xd = {
                        flex: "1 1 0",
                        flexShrink: "unset",
                        alignSelf: "unset"
                    },
                    Id = {
                        flexShrink: 0,
                        alignSelf: "stretch",
                        flex: "unset"
                    },
                    Ed = {
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        flexShrink: "unset"
                    },
                    Md = {
                        flexShrink: 0,
                        flex: "unset",
                        alignSelf: "unset"
                    },
                    Rd = function(e) {
                        var t, n, r, i = e.componentConfig,
                            a = e.layout,
                            l = JSON.parse(JSON.stringify(i)),
                            u = l.pidType,
                            s = a.flexDirection,
                            c = l.props,
                            f = c.horizontal,
                            d = void 0 === f ? ud.FIXED : f,
                            p = c.vertical,
                            h = void 0 === p ? ud.FIXED : p,
                            g = (null === (t = null === l || void 0 === l ? void 0 : l.baseProps) || void 0 === t ? void 0 : t.style) || {},
                            v = g.width,
                            m = g.height,
                            y = function() {
                                return d === ud.FILL && h === ud.FIXED ? s === sd.ROW ? xd : Id : d === ud.FIXED && h === ud.FILL ? s === sd.ROW ? Id : xd : d === ud.FILL && h === ud.FILL ? Ed : Md
                            },
                            b = o(o(o({}, g), y()), {
                                width: v,
                                minWidth: v,
                                height: m,
                                minHeight: m
                            });
                        if ((null === (n = l.props) || void 0 === n ? void 0 : n.horizontal) === ud.FILL && (delete b.width, delete b.minWidth), (null === (r = l.props) || void 0 === r ? void 0 : r.vertical) === ud.FILL && (delete b.height, delete b.minHeight), l.type === od.Box) {
                            var _ = {
                                horizontal: {
                                    width: "unset",
                                    display: "inline-block",
                                    minWidth: "unset"
                                },
                                vertical: {
                                    height: "unset",
                                    alignSelf: "unset",
                                    minHeight: "unset"
                                }
                            };
                            d === ud.HUG && (b = o(o({}, b), _.horizontal)), h === ud.HUG && (b = o(o({}, b), _.vertical)), d === ud.FILL && h === ud.HUG && (b = o(o({}, b), {
                                alignSelf: "stretch"
                            }))
                        }
                        return u === od.Box && (delete b.transform, b.position = "relative"), b
                    },
                    Od = function(e) {
                        var t;
                        return {
                            flexDirection: (null === (t = null === e || void 0 === e ? void 0 : e.autoLayout) || void 0 === t ? void 0 : t.flexDirection) || sd.ROW,
                            horizontal: (null === e || void 0 === e ? void 0 : e.horizontal) || ud.FIXED,
                            vertical: (null === e || void 0 === e ? void 0 : e.vertical) || ud.FIXED
                        }
                    };

                function Td(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }

                function Nd(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }

                function Pd(e) {
                    return "string" === typeof e && Boolean(e)
                }
                var Dd = function(e, t) {
                    return t.startsWith("./") ? t : (t.startsWith(e) && (t = t.replace(e, "")), t.startsWith("/") || (t = "/".concat(t)), ".".concat(t))
                };

                function jd(e) {
                    if (Array.isArray(e) && (e = e.reduce((function(e, t) {
                            return e[t.id] = t, e
                        }), {})), !Td(e)) throw new Error("resource corrupted: ".concat(e));
                    return Object.entries(e).reduce((function(e, t) {
                        var n = y(t, 2),
                            r = n[0],
                            o = n[1];
                        if (!Td(o)) throw new Error("resource corrupted: ".concat(o));
                        var i = o,
                            a = i.id,
                            l = i.packageUrl,
                            u = i.entry,
                            s = i.serverEntry,
                            c = i.style,
                            f = i.npmVersion,
                            d = i.npmRegistry,
                            p = i.npmPkgName,
                            h = i.parentId,
                            g = i.subModuleName,
                            v = i.override,
                            m = i.type;
                        if (!Pd(a) || !Pd(l) || !Pd(u) || !Pd(f) || !Pd(p) || !Pd(m)) throw new Error("resource corrupted: ".concat(JSON.stringify(i)));
                        return e[r] = {
                            id: a,
                            packageUrl: l,
                            entry: Dd(l, u),
                            serverEntry: s,
                            style: Array.isArray(c) ? c.map((function(e) {
                                return Dd(l, e)
                            })) : void 0,
                            npmVersion: f,
                            npmRegistry: d,
                            npmPkgName: p,
                            parentId: h,
                            subModuleName: g,
                            override: Td(v) ? v : void 0,
                            type: m
                        }, e
                    }), {})
                }

                function Ld(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
                var zd = function(e) {
                        return "i18n-".concat(e)
                    },
                    Ad = function(e, t, n) {
                        void 0 === e && (e = {}), void 0 === t && (t = {}), void 0 === n && (n = {});
                        var r = function(e) {
                                var r = e,
                                    i = r.__type,
                                    a = r.id;
                                if ("string" === i) {
                                    var l = t[a] || {},
                                        u = l.name,
                                        s = l.value;
                                    return l.static ? s : {
                                        __type: "i18n-key",
                                        id: zd(u)
                                    }
                                }
                                return "resource" === i ? s = (n[a] || {}).value : o(e)
                            },
                            o = function(e) {
                                var t, n, o = {};
                                try {
                                    for (var i = m(Object.entries(e)), a = i.next(); !a.done; a = i.next()) {
                                        var l = y(a.value, 2),
                                            u = l[0],
                                            s = l[1];
                                        if (Array.isArray(s)) {
                                            for (var c = [], f = s, d = 0; d < f.length; d++) {
                                                var p = f[d];
                                                if (Ld(p)) {
                                                    var h = r(p);
                                                    c[d] = h
                                                } else c[d] = e[u][d]
                                            }
                                            o[u] = c
                                        } else Ld(s) ? (h = r(s), o[u] = h) : o[u] = e[u]
                                    }
                                } catch (g) {
                                    t = {
                                        error: g
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (n = i.return) && n.call(i)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return o
                            };
                        return o(e)
                    },
                    Fd = function(e, t, n) {
                        for (var r, i = {}, a = Object.keys(e), l = 0; l < a.length; l++) {
                            var u = a[l];
                            i = o(o({}, i), ((r = {})[u] = o(o({}, e[u]), {
                                props: Ad(e[u].props, t, n)
                            }), r))
                        }
                        return i
                    },
                    Ud = function(e, t) {
                        if (!t[e]) return Object.keys(t);
                        for (var n = t[e].children || [], r = w([], y(n), !1), o = 0; o < n.length; o++) {
                            var i = n[o],
                                a = Ud(i, t);
                            r = w(w([], y(r), !1), y(a), !1)
                        }
                        return r
                    },
                    Vd = function(e) {
                        for (var t = e.strings, n = {}, r = Object.keys(t), o = 0; o < r.length; o++) {
                            var i = t[r[o]],
                                a = i.name,
                                l = i.value;
                            n[zd(a)] = l
                        }
                        return n
                    },
                    Bd = function(e) {
                        var t = e.nodes,
                            n = void 0 === t ? {} : t,
                            r = e.componentMetas,
                            i = e.componentConfigs,
                            a = e.rootNodes,
                            l = Object.keys(n),
                            u = Object.entries(n).reduce((function(e, t) {
                                var n, o, a = y(t, 2),
                                    u = a[0],
                                    s = a[1].componentId;
                                return l.includes(u) ? (Object.assign(e.componentConfigs, ((n = {})[u] = i[u], n)), Object.assign(e.componentMetas, ((o = {})[s] = r[s], o)), e) : e
                            }), {
                                componentMetas: {},
                                componentConfigs: {}
                            }),
                            s = a.filter((function(e) {
                                return l.includes(e)
                            }));
                        return o(o({
                            nodes: n
                        }, u), {
                            rootNodes: s
                        })
                    },
                    $d = function(e, t, n) {
                        if (void 0 === e && (e = ""), "" !== e && !t[e].visible) return {};
                        var r = {},
                            i = function(e) {
                                var a, l, u = ("" === e ? n : t[e].children || []).filter((function(e) {
                                    var n;
                                    return null === (n = t[e]) || void 0 === n ? void 0 : n.visible
                                }));
                                r = o(o({}, r), ((a = {})[e] = o(o({}, t[e]), {
                                    children: u
                                }), a));
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    t[c].visible && (r = o(o({}, r), ((l = {})[c] = t[c], l)), i(c))
                                }
                            };
                        return i(e), delete r[""], r
                    };

                function Qd(e, t) {
                    var n = t.nodes,
                        r = t.rootNodes,
                        o = t.componentMetas,
                        i = t.componentConfigs,
                        a = $d(e, n, r);
                    return Bd({
                        nodes: a,
                        componentMetas: o,
                        componentConfigs: i,
                        rootNodes: r
                    })
                }
                var Hd, Wd = function(e) {
                        var t = Qd("", {
                                nodes: e.nodes,
                                rootNodes: e.rootNodes,
                                componentMetas: e.componentMetas,
                                componentConfigs: e.componentConfigs
                            }),
                            n = function(e) {
                                for (var n = {}, r = w([], y(Object.keys(t.nodes)), !1); r.length > 0;) {
                                    var o = r.shift(),
                                        i = t.nodes[o];
                                    if (n[o] = [], i) {
                                        var a = w([], y(i.children), !1);
                                        n[o] = a, e(o, i.type), r = r.concat(a)
                                    }
                                }
                                return n
                            },
                            r = n((function(e, n) {
                                var r = t.componentConfigs[e];
                                o(o({}, r), {
                                    type: r.type || n
                                })
                            }));
                        return {
                            nodeTree: r,
                            rootNodes: t.rootNodes
                        }
                    },
                    Gd = function(e) {
                        var t, n = e.resources,
                            r = e.nodeConfigs,
                            i = e.config,
                            a = new Set,
                            l = new Set,
                            u = new Set,
                            s = new Set;
                        Object.keys(null !== (t = e.modelConfigs) && void 0 !== t ? t : {}).forEach((function(t) {
                            s.add(e.modelConfigs[t].modelId)
                        })), Object.entries(null !== r && void 0 !== r ? r : {}).forEach((function(e) {
                            var t, r, o, i = y(e, 2),
                                s = i[0],
                                c = i[1];
                            if (s !== c.id) throw new Error("[IRIS] ".concat(s, "'s config mismatch"));
                            if (c.type === od.Component) {
                                l.add(c.componentId);
                                var f = null === (t = n[c.componentId]) || void 0 === t ? void 0 : t.parentId;
                                f && a.add(f)
                            }
                            Object.keys(null !== (r = c.props) && void 0 !== r ? r : {}).forEach((function(e) {
                                var t, n, r;
                                "component" === (null === (t = null === c || void 0 === c ? void 0 : c.props[e]) || void 0 === t ? void 0 : t.__type) && "component" === (null === (n = null === c || void 0 === c ? void 0 : c.props[e]) || void 0 === n ? void 0 : n.componentType) && l.add(null === (r = null === c || void 0 === c ? void 0 : c.props[e]) || void 0 === r ? void 0 : r.id)
                            })), Object.values(null !== (o = c.modelConfigs) && void 0 !== o ? o : {}).forEach((function(e) {
                                var t = e.modelId;
                                u.add(t)
                            }))
                        }));
                        var c = function(e) {
                                return Object.keys(e).filter((function(t) {
                                    var n = e[t],
                                        r = n.type,
                                        o = n.id;
                                    return r === id.RUNTIME || !(r !== id.UIKIT || !a.has(o)) || !(r !== id.MODEL || !u.has(o) && !s.has(o)) || !(r !== id.COMPONENT || !l.has(o))
                                })).reduce((function(t, n) {
                                    var r;
                                    return o(o({}, t), ((r = {})[n] = e[n], r))
                                }), {})
                            },
                            f = c(n),
                            d = function() {
                                var e = (null === i || void 0 === i ? void 0 : i.uikit) || {},
                                    t = Object.keys(e).filter((function(e) {
                                        return a.has(e)
                                    })).reduce((function(t, n) {
                                        var r;
                                        return o(o({}, t), ((r = {})[n] = e[n], r))
                                    }), {});
                                return o(o({}, i), {
                                    uikit: t
                                })
                            };
                        return o(o({}, e), {
                            resources: f,
                            config: d()
                        })
                    },
                    Yd = Gd,
                    qd = function(e, t) {
                        return t === od.Box ? o(o({}, Od(e)), {
                            type: od.Box
                        }) : null
                    },
                    Kd = function(e) {
                        for (var t = JSON.parse(JSON.stringify(e.nodeConfigs)), n = e.rootNodes, r = e.nodes, i = function(e) {
                                for (var n = t[e], o = n.type, a = n.props, l = r[e].children, u = qd(a, o), s = 0; s < l.length; s++) {
                                    var c = l[s];
                                    u && (t[c].layout = u), i(c)
                                }
                            }, a = 0; a < n.length; a++) {
                            var l = n[a];
                            i(l)
                        }
                        return o(o({}, e), {
                            nodeConfigs: t
                        })
                    },
                    Xd = function(e) {
                        return (null === e || void 0 === e ? void 0 : e.nodeConfigs) ? (Object.values(e.nodeConfigs).forEach((function(t) {
                            var n;
                            if (t.type === od.TemplateComponentIns) {
                                var r = t.id,
                                    i = null !== (n = t.templateId) && void 0 !== n ? n : "",
                                    a = e.templateComponents[i].component,
                                    l = function(t) {
                                        return t.map((function(t) {
                                            var n, i = "".concat(r, "-").concat(t);
                                            return e.nodes[i] = {
                                                id: i,
                                                parentNodeId: r,
                                                locked: !1,
                                                visible: !0,
                                                children: l(null !== (n = a.nodeTree[t]) && void 0 !== n ? n : [])
                                            }, e.nodeConfigs[i] = o(o({}, a.nodeConfigs[t]), {
                                                rootNodeId: r,
                                                id: i
                                            }), i
                                        }))
                                    };
                                e.nodes[r].children = l(a.nodeTree[a.rootNodeId]), t.type = od.TemplateComponentRef
                            }
                        })), e) : e
                    },
                    Jd = function(e) {
                        return (null === e || void 0 === e ? void 0 : e.nodeConfigs) && (null === e || void 0 === e ? void 0 : e.templateComponents) ? (Object.values(e.nodeConfigs).forEach((function(t) {
                            if (t.type === od.TemplateComponentRef && t.templateId && e.templateComponents[t.templateId]) {
                                var n = t.id,
                                    r = function(t) {
                                        t.forEach((function(t) {
                                            r(e.nodes[t].children), delete e.nodes[t], delete e.nodeConfigs[t]
                                        }))
                                    };
                                r(e.nodes[n].children), e.nodes[n].children = [], t.type = od.TemplateComponentIns
                            }
                        })), e) : e
                    };

                function Zd(e) {
                    try {
                        (null === e || void 0 === e ? void 0 : e.nodes) && Object.keys(null === e || void 0 === e ? void 0 : e.nodes).forEach((function(t) {
                            var n;
                            (null === (n = e.nodeConfigs) || void 0 === n ? void 0 : n[t]) || delete e.nodes[t]
                        })), (null === e || void 0 === e ? void 0 : e.nodeConfigs) && Object.entries(null === e || void 0 === e ? void 0 : e.nodeConfigs).forEach((function(t) {
                            var n, r = y(t, 2),
                                o = r[0],
                                i = r[1];
                            (null === (n = e.nodes) || void 0 === n ? void 0 : n[o]) || delete e.nodeConfigs[o], (null === i || void 0 === i ? void 0 : i.id) && (null === i || void 0 === i ? void 0 : i.id) === o || delete e.nodeConfigs[o]
                        }))
                    } catch (t) {
                        console.error("clean up corrupted file schema failed", t)
                    }
                    return e
                }

                function ep(e) {
                    var t = Zd(e),
                        n = Xd(t),
                        r = Kd(n),
                        o = Wd({
                            nodes: r.nodes,
                            rootNodes: r.rootNodes,
                            componentMetas: r.resources,
                            componentConfigs: r.nodeConfigs
                        }),
                        i = o.nodeTree,
                        a = o.rootNodes;
                    i[pd] = a;
                    var l = Vd({
                            componentConfigs: r.nodeConfigs,
                            nodes: r.nodes,
                            strings: r.strings
                        }),
                        u = Fd(r.nodeConfigs || {}, r.strings, r.images),
                        s = {};
                    Object.keys(r.templateComponents || {}).forEach((function(e) {
                        s[e] = r.templateComponents[e].component
                    }));
                    var c = {
                        version: r.version,
                        config: r.config || {},
                        meta: {},
                        nodeTree: i,
                        nodeConfigs: u,
                        i18n: l,
                        constants: {},
                        resources: jd(r.resources),
                        states: r.states,
                        modelConfigs: n.modelConfigs,
                        templateComponents: s
                    };
                    return Gd(c)
                }

                function tp(e, t) {
                    void 0 === t && (t = "");
                    var n = t || e;
                    return n || (console.error("container or type does not exist"), n = "box"), "__iris_".concat(n, "__")
                }! function(e) {
                    e.__IRIS_BUNDLES__ = "__IRIS_BUNDLES__", e.__IRIS_COMPONENTS__ = "__IRIS_COMPONENTS__", e.__IRIS_RUNTIME__ = "__IRIS_RUNTIME__", e.__IRIS_I18N_SERVICE__ = "__IRIS_I18N_SERVICE__", e.__IRIS_UIKITS__ = "__IRIS_UIKITS__", e.__IRIS_MODELS__ = "__IRIS_MODELS__"
                }(Hd || (Hd = {}));
                var np = [Hd.__IRIS_BUNDLES__, Hd.__IRIS_RUNTIME__, Hd.__IRIS_UIKITS__, Hd.__IRIS_I18N_SERVICE__, Hd.__IRIS_COMPONENTS__, Hd.__IRIS_MODELS__],
                    rp = !1,
                    op = rp ? n.g : window,
                    ip = {};

                function ap(e, t) {
                    if (void 0 === t && (t = "bundle"), "function" !== typeof e) throw rd("000205"), new Error("[iris] ".concat(t, " is not a module (which must be a function)."));
                    try {
                        var n = Date.now(),
                            r = e();
                        return ip[t] = Date.now() - n, r
                    } catch (o) {
                        rd("000206"), console.error("register module ".concat(t, " failed:"), o)
                    }
                }

                function lp(e, t) {
                    var n = y(e, 2),
                        r = n[0],
                        o = n[1];
                    if (!t[r = r.join(gd)]) return t[r] = ap(o, r), t[r];
                    rd("000210")
                }

                function up(e) {
                    return op[e]
                }
                var sp = function() {
                        function e() {
                            this._components = {}, this._models = {}, this._runtime = {}, this._i18n_service = {}, this._uikit = {}, this._resourceInfo = {}, this._collecting = !1, this.deps = [], this._initModuleFlag = {
                                runtime: [],
                                i18n_service: []
                            }, this.runtimeController = new fd, this.uikitController = new dd, rp || this.registerModulesToRender()
                        }
                        return e.prototype.collectingDependencies = function() {
                            this._collecting = !0
                        }, e.prototype.secondaryRegister = function() {
                            this.deps.forEach((function(e) {
                                e[1](e[0])
                            }))
                        }, e.prototype.getRuntime = function() {
                            return this._runtime
                        }, Object.defineProperty(e.prototype, "components", {
                            get: function() {
                                return this._components
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "models", {
                            get: function() {
                                return this._models
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "i18nService", {
                            get: function() {
                                var e = Object.entries(this._i18n_service);
                                return e[0] ? e[0][1] : null
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "uikit", {
                            get: function() {
                                return this._uikit
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.addResourceInfo = function(e) {
                            Object.assign(this._resourceInfo, e)
                        }, e.prototype.registerComponent = function(e) {
                            var t = y(e, 2);
                            return lp([t[0], t[1]], this._components)
                        }, e.prototype.registerModel = function(e) {
                            var t = y(e, 2);
                            return lp([t[0], t[1]], this._models)
                        }, e.prototype.registerI18nService = function(e) {
                            var t = y(e, 2),
                                n = t[0],
                                r = t[1],
                                o = n.join();
                            if (!this._initModuleFlag.i18n_service.includes(o) && this._initModuleFlag.i18n_service.length >= 1) throw rd("000208"), new Error("[iris] There can be no more than one i18nService, registering ".concat(n, " failed."));
                            var i = lp([n, r], this._i18n_service);
                            return this._initModuleFlag.i18n_service.push(o), i
                        }, e.prototype.registerRuntime = function(e) {
                            var t = y(e, 2),
                                n = t[0],
                                r = t[1],
                                o = n.join();
                            if (!this._initModuleFlag.runtime.includes(o) && this._initModuleFlag.runtime.length >= 1) throw rd("000207"), new Error("[iris] There can be no more than one runtime, registering ".concat(n, " failed."));
                            var i = lp([n, r], this._runtime);
                            return this._initModuleFlag.runtime.push(o), i
                        }, e.prototype.registerUikit = function(e) {
                            var t = y(e, 2);
                            return lp([t[0], t[1]], this._uikit)
                        }, e.prototype.registerBundle = function(e) {
                            return ap(e)
                        }, e.prototype.getRegister = function(e) {
                            switch (e) {
                                case Hd.__IRIS_COMPONENTS__:
                                    return this.registerComponent.bind(this);
                                case Hd.__IRIS_RUNTIME__:
                                    return this.registerRuntime.bind(this);
                                case Hd.__IRIS_I18N_SERVICE__:
                                    return this.registerI18nService.bind(this);
                                case Hd.__IRIS_UIKITS__:
                                    return this.registerUikit.bind(this);
                                case Hd.__IRIS_BUNDLES__:
                                    return this.registerBundle.bind(this);
                                case Hd.__IRIS_MODELS__:
                                    return this.registerModel.bind(this)
                            }
                        }, e.prototype.registerModulesByType = function(e) {
                            var t = this,
                                n = up(e),
                                r = this.getRegister(e);
                            Array.isArray(n) && n.forEach((function(e) {
                                r(e)
                            })), op[e] = {
                                push: function(e) {
                                    t._collecting && 3 === e[0].length ? t.deps.push([e, r]) : r(e)
                                }
                            }
                        }, e.prototype.registerModulesToRender = function() {
                            var e = this;
                            np.forEach((function(t) {
                                e.registerModulesByType(Hd[t])
                            }))
                        }, e.prototype.runRuntime = function(e, t, n) {
                            return p(this, void 0, void 0, (function() {
                                return h(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.runtimeController.runRuntime(e, this._runtime, t, n)];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.runUikit = function(e) {
                            return p(this, void 0, void 0, (function() {
                                var t, n = this;
                                return h(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t = Object.entries(null !== e && void 0 !== e ? e : {}).reduce((function(e, t) {
                                                var r = y(t, 2),
                                                    o = r[0],
                                                    i = r[1];
                                                try {
                                                    e[n.getComponentId(o)] = i
                                                } catch (a) {
                                                    console.warn("IRIS convert resourceId (".concat(o, ") to $id for UIKit failed"), a)
                                                }
                                                return e
                                            }), {}), [4, this.uikitController.runUikit(this._uikit, {
                                                configs: t
                                            })];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.getRuntimeModels = function() {
                            return this.runtimeController.getModels()
                        }, e.prototype.runRuntimeMount = function(e) {
                            return this.runtimeController.mount(e)
                        }, e.prototype.runRuntimeUnMount = function() {
                            return this.runtimeController.unMount()
                        }, e.prototype.getRuntimeProviders = function(e) {
                            return this.runtimeController.getProviders(e)
                        }, e.prototype.getRuntimeTransformers = function(e) {
                            return this.runtimeController.getTransformers(e)
                        }, e.prototype.getRuntimeProcessRenderString = function(e) {
                            return this.runtimeController.getProcessRuntimString(e)
                        }, e.prototype.getUikitProviders = function() {
                            return this.uikitController.getProviders()
                        }, e.prototype.registerComponents = function(e) {
                            var t = this;
                            e.forEach((function(e) {
                                var n = e.type,
                                    r = e.component;
                                t._components[tp(n)] = r
                            }))
                        }, e.prototype.getComponentId = function(e) {
                            var t, n, r, o, i = this._resourceInfo[e],
                                a = i.npmPkgName,
                                l = i.npmVersion,
                                u = i.subModuleName,
                                s = i.override,
                                c = [null !== (t = null === s || void 0 === s ? void 0 : s.npmPkgName) && void 0 !== t ? t : a, null !== (n = null === s || void 0 === s ? void 0 : s.npmVersion) && void 0 !== n ? n : l];
                            return (null !== (r = null === s || void 0 === s ? void 0 : s.subModuleName) && void 0 !== r ? r : u) && c.push(null !== (o = null === s || void 0 === s ? void 0 : s.subModuleName) && void 0 !== o ? o : u), c.join(gd)
                        }, e.prototype.getComponent = function(e) {
                            return e.type === od.Component ? this.components[this.getComponentId(e.componentId)] : this.components[tp(e.type, e.container)]
                        }, e.prototype.getModelFactoryMemoryIdFromResourceInfo = function(e) {
                            var t, n, r, o = this._resourceInfo[e];
                            if (!o) return "";
                            var i = o.npmPkgName,
                                a = o.npmVersion,
                                l = o.subModuleName,
                                u = o.override,
                                s = [null !== (t = null === u || void 0 === u ? void 0 : u.npmPkgName) && void 0 !== t ? t : i, null !== (n = null === u || void 0 === u ? void 0 : u.npmVersion) && void 0 !== n ? n : a],
                                c = null !== (r = null === u || void 0 === u ? void 0 : u.subModuleName) && void 0 !== r ? r : l;
                            return c && s.push(c), s.join(gd)
                        }, e.prototype.getModelFactory = function(e) {
                            return this.models[this.getModelFactoryMemoryIdFromResourceInfo(e)]
                        }, e.prototype.performance = function() {
                            var e = o({}, ip);
                            return ip = {}, e
                        }, e
                    }(),
                    cp = function(e, t) {
                        void 0 === e && (e = ""), void 0 === t && (t = "");
                        var n = t;
                        return t.startsWith("http://") || t.startsWith("https://") ? t : (t.startsWith("./") ? n = t.substring(2) : t.startsWith("/") && (n = t.substring(1)), "".concat(e, "/").concat(n))
                    },
                    fp = function(e) {
                        var t = e.url,
                            n = e.attrs,
                            r = void 0 === n ? {} : n;
                        return p(void 0, void 0, void 0, (function() {
                            return h(this, (function(e) {
                                return [2, new Promise((function(e, n) {
                                    var o = document.createElement("script");
                                    o.setAttribute("data-ot-ignore", "true"), Object.keys(r).forEach((function(e) {
                                        return o.setAttribute(e, r[e])
                                    })), o.src = t, o.addEventListener("load", (function() {
                                        e("success")
                                    })), o.addEventListener("error", (function() {
                                        rd("000212"), n("load error: ".concat(t))
                                    })), document.body.appendChild(o)
                                }))]
                            }))
                        }))
                    },
                    dp = function(e) {
                        var t = e.url;
                        return p(void 0, void 0, void 0, (function() {
                            return h(this, (function(e) {
                                return t ? [2, new Promise((function(e, n) {
                                    var r = document.createElement("link");
                                    r.setAttribute("rel", "stylesheet"), r.href = t, r.addEventListener("load", (function() {
                                        e("success")
                                    })), r.addEventListener("error", (function() {
                                        rd("000213"), n("load error: ".concat(t))
                                    })), document.head.appendChild(r)
                                }))] : [2, "success"]
                            }))
                        }))
                    };

                function pp(e) {
                    return p(this, void 0, void 0, (function() {
                        var t, n, r, o;
                        return h(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = e.entry, n = e.style, r = e.packageUrl, (o = []).push(fp({
                                        url: cp(r, t),
                                        attrs: {
                                            defer: "true",
                                            "data-ot-ignore": "true"
                                        }
                                    })), n && n.forEach((function(e) {
                                        o.push(dp({
                                            url: cp(r, e)
                                        }))
                                    })), [4, Promise.all(o)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        }))
                    }))
                }
                var hp = {
                    component: 5,
                    runtime: 1,
                    i18n_service: 4,
                    uikit: 3,
                    model: 2
                };

                function gp(e) {
                    return p(this, void 0, void 0, (function() {
                        var t, n, r = this;
                        return h(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = Object.keys(e).map((function(t) {
                                        return e[t]
                                    })).sort((function(e, t) {
                                        return hp[e.type] - hp[t.type]
                                    })), n = t.map((function(e) {
                                        return p(r, void 0, void 0, (function() {
                                            return h(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, pp(e)];
                                                    case 1:
                                                        return [2, t.sent()]
                                                }
                                            }))
                                        }))
                                    })), [4, Promise.all(n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        }))
                    }))
                }
                var vp, mp = function(e, t) {
                        return void 0 === t && (t = 3), new Promise((function(n) {
                            if (0 !== e.length) {
                                var r = function() {
                                    return e.splice(0, t).map((function(e) {
                                        return e()
                                    }))
                                };
                                window.requestIdleCallback((function() {
                                    return p(void 0, void 0, void 0, (function() {
                                        return h(this, (function(t) {
                                            return Promise.all(r()).finally((function() {
                                                n(mp(e))
                                            })), [2]
                                        }))
                                    }))
                                }))
                            } else n("done")
                        }))
                    },
                    yp = function() {
                        return {
                            style: {
                                width: "100%"
                            }
                        }
                    },
                    bp = function(e, t, n, r, i) {
                        var a, l, u, s;
                        if (void 0 === r && (r = "desktop"), void 0 === i && (i = {}), !e) return i;
                        if (t === r) return null !== (a = e[n]) && void 0 !== a ? a : i;
                        var c = null === (u = null === (l = e.responsive) || void 0 === l ? void 0 : l[t]) || void 0 === u ? void 0 : u[n];
                        return c ? o(o({}, e[n]), c) : null !== (s = e[n]) && void 0 !== s ? s : i
                    };

                function _p(e, t, n) {
                    var r, a;
                    if (void 0 === n && (n = "desktop"), t === n) return e.baseProps || {};
                    var l = (null === (a = null === (r = e.responsive) || void 0 === r ? void 0 : r[t]) || void 0 === a ? void 0 : a.baseProps) || {},
                        u = l.style,
                        s = l.hoverStyle,
                        c = i(l, ["style", "hoverStyle"]),
                        f = o(o({}, e.baseProps.style || {}), u || {}),
                        d = o(o({}, e.baseProps.hoverStyle || {}), s || {});
                    return o(o(o({}, e.baseProps), {
                        style: f,
                        hoverStyle: d
                    }), c)
                }

                function wp(e, t) {
                    if (void 0 === t && (t = new WeakMap), "object" !== typeof e || null === e) throw new TypeError("not object");
                    if (t.has(e)) return t.get(e);
                    var n = {};
                    return Object.keys(e).forEach((function(r) {
                        var o = e[r];
                        "object" !== typeof o || null === o ? n[r] = o : Array.isArray(o) ? n[r] = w([], y(o), !1) : o instanceof Set ? n[r] = new Set(w([], y(o), !1)) : o instanceof Map ? n[r] = new Map(w([], y(o), !1)) : (t.set(e, e), n[r] = wp(o, t))
                    })), n
                }

                function Sp(e, t) {
                    return o(o({}, e || {}), t || {})
                }

                function kp(e, t) {
                    var n, r;
                    if (void 0 === e && (e = {}), !t) return e;
                    var i = Sp(null === (n = null === t || void 0 === t ? void 0 : t.baseProps) || void 0 === n ? void 0 : n.style, null === (r = null === e || void 0 === e ? void 0 : e.baseProps) || void 0 === r ? void 0 : r.style),
                        a = Sp(null === t || void 0 === t ? void 0 : t.props, null === e || void 0 === e ? void 0 : e.props),
                        l = Sp(null === t || void 0 === t ? void 0 : t.baseProps, null === e || void 0 === e ? void 0 : e.baseProps),
                        u = Sp(null === t || void 0 === t ? void 0 : t.layout, null === e || void 0 === e ? void 0 : e.layout),
                        s = Sp(null === t || void 0 === t ? void 0 : t.states, null === e || void 0 === e ? void 0 : e.states),
                        c = Sp(null === t || void 0 === t ? void 0 : t.containerProps, null === e || void 0 === e ? void 0 : e.containerProps);
                    return o(o({}, e), {
                        container: (null === t || void 0 === t ? void 0 : t.container) || (null === e || void 0 === e ? void 0 : e.container),
                        props: a,
                        layout: u,
                        containerProps: c,
                        states: Object.keys(s).length > 0 ? s : null,
                        baseProps: o(o({}, l), {
                            style: i
                        })
                    })
                }

                function Cp(e, t) {
                    var n, r = (null === (n = null === e || void 0 === e ? void 0 : e.responsive) || void 0 === n ? void 0 : n[t]) || {},
                        i = (null === r || void 0 === r ? void 0 : r.$deleteProps) || [],
                        a = (null === r || void 0 === r ? void 0 : r.$deleteBaseProps) || [],
                        l = o(o({}, e), kp(r, e)),
                        u = l.props,
                        s = l.baseProps,
                        c = function(e, t) {
                            try {
                                e.forEach((function(e) {
                                    if ("string" === typeof e) delete t[e];
                                    else if (1 === e.length) delete t[e[0]];
                                    else {
                                        var n = e.length,
                                            r = t,
                                            o = "";
                                        e.forEach((function(e, t) {
                                            t < n - 1 && (r = r[e]), o = e
                                        })), delete r[o]
                                    }
                                }))
                            } catch (n) {
                                console.error("handleDeleteKey: ", n)
                            }
                        };
                    return c(i, u), c(a, s), l
                }

                function xp(e) {
                    if (e && (e.type === od.TemplateComponentRef || e.type === od.TemplateComponent)) {
                        e.responsive = e.responsive || {}, Object.keys(e.responsive).forEach((function(t) {
                            var n = e.responsive[t].containerProps,
                                r = {};
                            Object.keys(n || {}).forEach((function(e) {
                                r["__iris__".concat(e)] = n[e]
                            })), e.responsive[t].props = o(o({}, e.responsive[t].props), r)
                        }));
                        var t = e.containerProps,
                            n = {};
                        return Object.keys(t || {}).forEach((function(e) {
                            n["__iris__".concat(e)] = t[e]
                        })), o(o({}, e), {
                            props: o(o({}, e.props), n)
                        })
                    }
                    return e
                }

                function Ip(e, t) {
                    var n = xp(e),
                        r = xp(t),
                        o = kp(n, r);
                    return o.responsive = o.responsive || {}, Object.keys((null === r || void 0 === r ? void 0 : r.responsive) || {}).forEach((function(e) {
                        o.responsive[e] = kp(o.responsive[e], r.responsive[e])
                    })), o
                }

                function Ep(e, t, n) {
                    return Cp(Ip(wp(e || {}), wp(t || {})), n)
                }
                var Mp = {},
                    Rp = 0,
                    Op = 0;

                function Tp(e) {
                    Mp = e, Object.keys(e).forEach((function(t) {
                        e[t].$subscribe((function() {
                            Rp = (Rp + 1) % 100, vp && vp()
                        }))
                    }))
                }
                var Np, Pp = {
                    getStore: function() {
                        return Rp !== Op && (Mp = o({}, Mp), Op = Rp), Mp
                    },
                    onStoreChange: function(e) {
                        return vp = e,
                            function() {
                                vp = null
                            }
                    }
                };
                ! function(e) {
                    e.PAGE = "Page", e.DESIGN = "Design"
                }(Np || (Np = {}));
                var Dp = function(e) {
                        var t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                            n = e.match(/(iPad).*OS\s([\d_]+)/),
                            r = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
                        return t || r ? "mobile" : n ? "tablet" : "desktop"
                    },
                    jp = Object.freeze({
                        __proto__: null,
                        get ModuleType() {
                            return Hd
                        },
                        ResourceManager: sp,
                        addModules: gp,
                        promiseConcurrencyOnIdle: mp,
                        getFullPath: cp,
                        NODE_ROOT_ID: pd,
                        RESPONSIVE_CONFIG: hd,
                        IRIS_SEPARATOR: gd,
                        DOM_IRIS_ID: vd,
                        IRIS_ROOT_ID: md,
                        IRIS_REQ_ID: yd,
                        IRIS_FILE_ID: bd,
                        IRIS_FILE_VERSION: _d,
                        IRIS_PROJECT_NAME: wd,
                        IRIS_RENDER_CONTENT: Sd,
                        get NodeType() {
                            return od
                        },
                        get ResourceType() {
                            return id
                        },
                        get TemplateComponentType() {
                            return ad
                        },
                        get StatesGroup() {
                            return ld
                        },
                        generateI18nKeyByName: zd,
                        convertString: Ad,
                        convertComponentConfigs: Fd,
                        getChildrenIdsByContainerId: Ud,
                        generateI18nFallback: Vd,
                        exportSchemaByNode: Qd,
                        filterSchemaNoUseSource: Gd,
                        filterInactiveResourcesInFileSchema: Yd,
                        convertTemplateComponentInsToTemplateComponentRef: Xd,
                        convertTemplateComponentRefToTemplateComponentIns: Jd,
                        cleanUpCorruptedFileSchema: Zd,
                        fileToSchema: ep,
                        isServer: Zf,
                        genDefaultBaseProps: yp,
                        getPropertyUnderBreakpoint: bp,
                        getBaseProps: _p,
                        handleConfig: Ep,
                        errorGuideLink: td,
                        errorLog: rd,
                        IRIS_RUNTIME_ERROR_MESSAGE: nd,
                        debugLog: cd,
                        subscribe: Tp,
                        storeContext: Pp,
                        shallowEqualArray: kd,
                        uuidv4: Cd,
                        dealwithBoxStyle: Rd,
                        get FrameType() {
                            return ud
                        },
                        get BoxFlexDirection() {
                            return sd
                        },
                        getBoxChildLayout: Od,
                        isObject: Td,
                        isArray: Nd,
                        isNonEmptyString: Pd,
                        get IFileType() {
                            return Np
                        },
                        getDevice: Dp
                    });
                const Lp = () => {},
                    zp = Object.create(null),
                    Ap = [],
                    Fp = Object.assign,
                    Up = Object.prototype.hasOwnProperty,
                    Vp = (e, t) => Up.call(e, t),
                    Bp = Object.prototype.toString,
                    $p = e => Bp.call(e),
                    Qp = Array.isArray,
                    Hp = e => "[object Map]" === $p(e),
                    Wp = e => "[object Set]" === $p(e),
                    Gp = e => "function" === typeof e,
                    Yp = e => "string" === typeof e,
                    qp = e => "symbol" === typeof e,
                    Kp = e => null !== e && "object" === typeof e,
                    Xp = e => $p(e).slice(8, -1),
                    Jp = e => "[object Object]" === $p(e),
                    Zp = e => Yp(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
                    eh = (e, t) => Object.is(e, t),
                    th = (e, t, n) => {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: n
                        })
                    };

                function nh(e, t) {
                    if (!e) throw new Error(`[Doura] ${t||""}`)
                }
                const rh = Array.prototype.slice;

                function oh(e) {
                    const t = Object.getOwnPropertyDescriptors(e),
                        n = uh(t);
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r],
                            i = t[o];
                        !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: i.enumerable,
                            value: e[o]
                        })
                    }
                    return Object.create(Object.getPrototypeOf(e), t)
                }
                const ih = Object.prototype.propertyIsEnumerable;

                function ah(e) {
                    const t = {},
                        n = uh(e);
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r],
                            i = e[o];
                        ih.call(e, o) ? t[o] = i : Object.defineProperty(t, o, {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: i
                        })
                    }
                    return t
                }

                function lh(e) {
                    return Array.isArray(e) ? rh.call(e) : Hp(e) ? new Map(e) : Wp(e) ? new Set(e) : Object.getPrototypeOf(e) === Object.prototype ? ah(e) : oh(e)
                }
                const uh = "undefined" !== typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : "undefined" !== typeof Object.getOwnPropertySymbols ? e => Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) : Object.getOwnPropertyNames;

                function sh(e, t, n = !1) {
                    Jp(e) ? (n ? Object.keys : uh)(e).forEach((r => {
                        n && "symbol" === typeof r || t(r, e[r], e)
                    })) : e.forEach(((n, r) => t(r, n, e)))
                }

                function ch(e, t, n) {
                    Hp(e) ? e.set(t, n) : Wp(e) ? (e.delete(t), e.add(n)) : e[t] = n
                }
                const fh = e => e;

                function dh(e, ...t) {
                    console.warn(`[Doura warn] ${e}`, ...t)
                }

                function ph(e) {
                    switch (Xp(e)) {
                        case "Object":
                            return 1;
                        case "Array":
                            return 2;
                        case "Set":
                            return 3;
                        case "Map":
                            return 4;
                        default:
                            return 0
                    }
                }

                function hh(e) {
                    return th(e, "__r_skip", !0), e
                }

                function gh(e) {
                    return !!e && !!e.__r_state
                }

                function vh(e) {
                    const t = yh(e);
                    return t ? vh(t.base) : e
                }

                function mh(e) {
                    return e.__r_state.modified
                }

                function yh(e) {
                    return e && e.__r_state
                }

                function bh(e) {
                    return e.copy || e.base
                }

                function _h(e) {
                    const t = e.__r_state;
                    t && (t.modified = !1)
                }

                function wh(e) {
                    e.modified || (e.modified = !0, e.parent && wh(e.parent))
                }
                let Sh;
                class kh {
                    constructor(e = !1) {
                        this.active = !0, this.effects = [], this.cleanups = [], !e && Sh && (this.parent = Sh, this.index = (Sh.scopes || (Sh.scopes = [])).push(this) - 1)
                    }
                    run(e) {
                        if (this.active) {
                            const t = Sh;
                            try {
                                return Sh = this, e()
                            } finally {
                                Sh = t
                            }
                        }
                    }
                    on() {
                        Sh = this
                    }
                    off() {
                        Sh = this.parent
                    }
                    stop(e) {
                        if (this.active) {
                            let t, n;
                            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
                            for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                            if (this.scopes)
                                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                            if (this.parent && !e) {
                                const e = this.parent.scopes.pop();
                                e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
                            }
                            this.active = !1
                        }
                    }
                }

                function Ch(e) {
                    return new kh(e)
                }

                function xh(e, t = Sh) {
                    t && t.active && t.effects.push(e)
                }
                const Ih = e => {
                        const t = new Set(e);
                        return t.w = 0, t.n = 0, t
                    },
                    Eh = e => (e.w & Dh) > 0,
                    Mh = e => (e.n & Dh) > 0,
                    Rh = ({
                        deps: e
                    }) => {
                        if (e.length)
                            for (let t = 0; t < e.length; t++) e[t].w |= Dh
                    },
                    Oh = e => {
                        const {
                            deps: t
                        } = e;
                        if (t.length) {
                            let n = 0;
                            for (let r = 0; r < t.length; r++) {
                                const o = t[r];
                                Eh(o) && !Mh(o) ? o.delete(e) : t[n++] = o, o.w &= ~Dh, o.n &= ~Dh
                            }
                            t.length = n
                        }
                    },
                    Th = new WeakMap,
                    Nh = new WeakMap;
                let Ph = 0,
                    Dh = 1;
                const jh = 30;
                let Lh;
                const zh = Symbol(""),
                    Ah = Symbol("");
                let Fh = 0;
                class Uh {
                    constructor(e, t = null, n) {
                        this.fn = e, this.scheduler = t, this.id = Fh++, this.deps = [], this.active = !0, this.parent = void 0, xh(this, n)
                    }
                    run() {
                        if (!this.active) return this.fn();
                        let e = Lh;
                        const t = Bh;
                        for (; e;) {
                            if (e === this) return;
                            e = e.parent
                        }
                        try {
                            return this.parent = Lh, Lh = this, Bh = !0, Dh = 1 << ++Ph, Ph <= jh ? Rh(this) : Vh(this), this.fn()
                        } finally {
                            Ph <= jh && Oh(this), Dh = 1 << --Ph, Lh = this.parent, Bh = t, this.parent = void 0, this.deferStop && this.stop()
                        }
                    }
                    stop() {
                        Lh === this ? this.deferStop = !0 : this.active && (Vh(this), this.onStop && this.onStop(), this.active = !1)
                    }
                }

                function Vh(e) {
                    const {
                        deps: t
                    } = e;
                    if (t.length) {
                        for (let n = 0; n < t.length; n++) t[n].delete(e);
                        t.length = 0
                    }
                }
                let Bh = !0;
                const $h = [];

                function Qh() {
                    $h.push(Bh), Bh = !1
                }

                function Hh() {
                    const e = $h.pop();
                    Bh = void 0 === e || e
                }

                function Wh(e, t, n) {
                    if (Bh && Lh) {
                        let t = Th.get(e);
                        t || Th.set(e, t = new Map);
                        let r = t.get(n);
                        r || t.set(n, r = Ih()), Yh(r)
                    }
                }

                function Gh(e) {
                    if (Bh && Lh) {
                        const t = e.__r_state;
                        if (!t) return;
                        let n = Nh.get(t);
                        n || Nh.set(t, n = Ih()), Yh(n)
                    }
                }

                function Yh(e) {
                    let t = !1;
                    Ph <= jh ? Mh(e) || (e.n |= Dh, t = !Eh(e)) : t = !e.has(Lh), t && (e.add(Lh), Lh.deps.push(e))
                }

                function qh(e) {
                    Bh && Lh && Yh((e = vh(e)).dep || (e.dep = Ih()))
                }

                function Kh(e) {
                    (e = vh(e)).dep && eg(e.dep)
                }

                function Xh(e) {
                    const t = Nh.get(e);
                    if (t) {
                        const e = [...t];
                        for (const t of e) t.view && (t.view.mightChange = !0)
                    }
                }

                function Jh(e) {
                    let t = e;
                    for (; t;) Xh(t), t = t.parent
                }

                function Zh(e, t, n, r, o) {
                    var i;
                    const a = Th.get(e),
                        l = e.base;
                    let u = [];
                    if (a)
                        if ("clear" === t) u = [...a.values()];
                        else if ("length" === n && Qp(l)) a.forEach(((e, t) => {
                        ("length" === t || t >= r) && u.push(e)
                    }));
                    else switch (void 0 !== n && u.push(a.get(n)), t) {
                        case "add":
                            Qp(l) ? Zp(n) && u.push(a.get("length")) : (u.push(a.get(zh)), Hp(l) && u.push(a.get(Ah)));
                            break;
                        case "delete":
                            Qp(l) || (u.push(a.get(zh)), Hp(l) && u.push(a.get(Ah)));
                            break;
                        case "set":
                            Hp(l) && u.push(a.get(zh))
                    }
                    if (1 === u.length) u[0] && eg(u[0]);
                    else {
                        const e = [];
                        for (const t of u) t && e.push(...t);
                        eg(Ih(e))
                    }
                    const s = null === (i = e.root) || void 0 === i ? void 0 : i.listeners;
                    s && s.length && s.forEach((e => e()))
                }

                function eg(e) {
                    const t = Qp(e) ? e : [...e];
                    for (const n of t) n.view && tg(n);
                    for (const n of t) n.view || tg(n)
                }

                function tg(e) {
                    (e !== Lh || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
                }
                class ng {
                    constructor(e, {
                        disableCache: t = !1
                    }) {
                        this.dep = void 0, this.mightChange = !1, this.dirty = !0, this.effect = new Uh(e, (() => {
                            this.dirty || (this.dirty = !0, Kh(this))
                        })), this.effect.view = this, this.effect.active = this._cacheable = !t
                    }
                    get value() {
                        const e = vh(this);
                        return qh(e), !e.dirty && e._cacheable || (e.dirty = !1, e._value = e.effect.run()), e._value
                    }
                    set value(e) {}
                }

                function rg(e, t = {}) {
                    return new ng(e, t)
                }
                const og = new Set(["__proto__"]),
                    ig = new Set(Object.getOwnPropertyNames(Symbol).filter((e => "arguments" !== e && "caller" !== e)).map((e => Symbol[e])).filter(qp));

                function ag(e) {
                    e.copy || (e.copy = lh(e.base))
                }

                function lg(e, t) {
                    const n = e.__r_state;
                    return (n ? bh(n) : e)[t]
                }
                const ug = fg(),
                    sg = cg();

                function cg() {
                    const e = {};
                    return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
                        e[t] = function(...e) {
                            const n = yh(this),
                                r = bh(n);
                            for (let t = 0, i = this.length; t < i; t++) Wh(n, "get", t + "");
                            const o = r[t](...e);
                            return -1 === o || !1 === o ? r[t](...e.map(vh)) : o
                        }
                    })), ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
                        e[t] = function(...e) {
                            Qh();
                            const n = bh(yh(this))[t].apply(this, e);
                            return Hh(), n
                        }
                    })), e
                }

                function fg() {
                    return function(e, t, n) {
                        const r = bh(e);
                        if ("__r_isReactive" === t) return !0;
                        if ("__r_state" === t && n === Fg.get(e)) return e;
                        if (Qp(r) && Vp(sg, t)) return Reflect.get(sg, t, n);
                        let o = Reflect.get(r, t, n);
                        return (qp(t) ? ig.has(t) : og.has(t)) ? o : (Wh(e, "get", t), Vp(r, t) ? (e.disposed || !Kp(o) || (gh(o) || (ag(e), o = e.copy[t] = Vg(o, e)), Gh(o)), o) : o)
                    }
                }

                function dg() {
                    return function(e, t, n, r) {
                        const o = bh(e),
                            i = lg(o, t),
                            a = Qp(o) && Zp(t) ? Number(t) < o.length : Vp(o, t);
                        if (!e.modified) {
                            const r = null === i || void 0 === i ? void 0 : i.__r_state;
                            if (r && r.base === n) return e.copy[t] = n, !0;
                            if (eh(n, i) && (void 0 !== n || Vp(e.base, t))) return !0;
                            ag(e), wh(e)
                        }
                        return eh(e.copy[t], n) && (void 0 !== n || t in e.copy) || (e.copy[t] = n, e === yh(r) && (a ? eh(n, i) || Zh(e, "set", t, n) : Zh(e, "add", t, n), Jh(e))), !0
                    }
                }

                function pg(e, t) {
                    const n = Vp(bh(e), t);
                    if ((void 0 !== lg(e.base, t) || t in e.base) && (ag(e), wh(e)), e.copy) {
                        const r = delete e.copy[t];
                        return r && n && Zh(e, "delete", t, void 0), r
                    }
                    return !0
                }

                function hg(e, t) {
                    const n = bh(e),
                        r = Reflect.has(n, t);
                    return qp(t) && ig.has(t) || Wh(e, "has", t), r
                }

                function gg(e) {
                    const t = bh(e);
                    return Wh(e, "iterate", Qp(t) ? "length" : zh), Reflect.ownKeys(t)
                }

                function vg(e, t) {
                    const n = bh(e),
                        r = Reflect.getOwnPropertyDescriptor(n, t);
                    return r ? {
                        writable: !0,
                        configurable: !Qp(n) || "length" !== t,
                        enumerable: r.enumerable,
                        value: n[t]
                    } : r
                }

                function mg(e, t) {
                    const n = Reflect.setPrototypeOf(e.base, t);
                    return n && e.copy && Reflect.setPrototypeOf(e.copy, t), n
                }
                const yg = {
                    get: ug,
                    set: dg(),
                    deleteProperty: pg,
                    has: hg,
                    ownKeys: gg,
                    setPrototypeOf: mg,
                    getOwnPropertyDescriptor: vg
                };

                function bg(e) {
                    e.copy || (e.copy = new Map(e.base))
                }

                function _g(e) {
                    e.copy || (e.copy = new Set, e.base.forEach((t => {
                        if (Kp(t)) {
                            const n = Vg(t, e);
                            Gh(n), t !== n && e.drafts.set(t, n), e.copy.add(n)
                        } else e.copy.add(t)
                    })))
                }

                function wg(e) {
                    1 === e.type ? bg(e) : _g(e)
                }

                function Sg(e) {
                    const t = this.__r_state,
                        n = bh(t);
                    if (Wh(t, "get", e), !n.has(e)) return;
                    let r = n.get(e);
                    return Kp(r) ? (gh(r) || (wg(t), r = Vg(r, t), t.copy.set(e, r)), Gh(r), r) : r
                }

                function kg(e, t) {
                    const n = this.__r_state,
                        r = bh(n),
                        o = r.has(e),
                        i = r.get(e),
                        a = () => {
                            wg(n), wh(n), n.copy.set(e, t)
                        };
                    return o ? eh(t, i) || (a(), Zh(n, "set", e, t)) : (a(), Zh(n, "add", e, t)), this
                }

                function Cg(e) {
                    const t = this.__r_state;
                    return bh(t).has(e) || (_g(t), wh(t), t.copy.add(e), Zh(t, "add", e, e)), this
                }

                function xg(e) {
                    const t = this.__r_state;
                    return Wh(t, "has", e), t.copy ? !!t.copy.has(e) || 2 === t.type && t.drafts.has(e) && t.drafts.has(t.drafts.get(e)) : t.base.has(e)
                }

                function Ig(e) {
                    return Wh(e, "iterate", zh), bh(e).size
                }

                function Eg(e) {
                    return Wh(e, "iterate", zh), _g(e), e.copy.values()
                }

                function Mg(e) {
                    return Wh(e, "iterate", Ah), bh(e).keys()
                }

                function Rg(e) {
                    const t = this.__r_state,
                        n = bh(t),
                        r = n.has(e);
                    "get" in n && n.get(e), wg(t), wh(t);
                    let o = t.copy.delete(e);
                    return 2 !== t.type || o || (o = !!t.drafts.has(e) && t.drafts.delete(t.drafts.get(e))), r && Zh(t, "delete", e, void 0), o
                }

                function Og() {
                    const e = this.__r_state,
                        t = bh(e),
                        n = 0 !== t.size,
                        r = t.clear();
                    return n && (wg(e), wh(e), e.copy.clear(), Zh(e, "clear", void 0, void 0)), r
                }

                function Tg(e, t, n, r) {
                    const o = t.proxy.values();
                    let i = o.next();
                    for (; !i.done;) n.call(r, i.value, i.value, e), i = o.next()
                }

                function Ng(e, t, n, r) {
                    Wh(t, "iterate", zh), bh(t).forEach(((o, i) => n.call(r, t.proxy.get(i), i, e)))
                }

                function Pg(e) {
                    return function(...t) {
                        const n = this.__r_state,
                            r = 1 === n.type,
                            o = "entries" === e || e === Symbol.iterator && r;
                        if (r) {
                            const e = n.proxy.keys();
                            return {
                                next() {
                                    const {
                                        value: t,
                                        done: r
                                    } = e.next(), i = n.proxy.get(t);
                                    return r ? {
                                        value: i,
                                        done: r
                                    } : {
                                        value: o ? [t, i] : i,
                                        done: r
                                    }
                                },
                                [Symbol.iterator]() {
                                    return this
                                }
                            }
                        }
                        return Wh(n, "iterate", zh), _g(n), n.copy[e](...t)
                    }
                }

                function Dg() {
                    const e = {
                        get: Sg,
                        get size() {
                            return Ig(this.__r_state)
                        },
                        has: xg,
                        add: Cg,
                        set: kg,
                        delete: Rg,
                        clear: Og,
                        keys() {
                            const e = this.__r_state;
                            return 1 === e.type ? Mg(e) : Eg(e)
                        },
                        forEach(e, t) {
                            const n = this.__r_state;
                            1 === n.type ? Ng(this, n, e, t) : Tg(this, n, e, t)
                        }
                    };
                    return ["values", "entries", Symbol.iterator].forEach((t => {
                        e[t] = Pg(t)
                    })), [e]
                }
                const [jg] = Dg();

                function Lg() {
                    const e = jg;
                    return (t, n, r) => {
                        if ("__r_isReactive" === n) return !0;
                        if ("__r_state" === n) return t;
                        const o = bh(t);
                        return Reflect.get(Vp(e, n) && n in o ? e : o, n, r)
                    }
                }
                const zg = {
                    get: Lg()
                };

                function Ag(e, {
                    copies: t,
                    snapshots: n
                }) {
                    const r = e => {
                            switch (ph(e)) {
                                case 1:
                                case 2:
                                    return s;
                                case 4:
                                case 3:
                                    return u;
                                default:
                                    throw new Error("Unpected Error. Please file an issue on https://github.com/dourajs/doura")
                            }
                        },
                        o = e => {
                            if (!Kp(e)) return e;
                            if (gh(e)) {
                                let o = n.get(e);
                                if (!o) {
                                    const i = t.get(e.__r_state);
                                    n.set(e, o = new Proxy(i, r(i)))
                                }
                                return o
                            }
                            return e
                        },
                        i = e => function(...t) {
                            const n = this.__r_raw,
                                r = "entries" === e || e === Symbol.iterator && Hp(this),
                                i = n[e](...t);
                            return {
                                next() {
                                    const {
                                        value: e,
                                        done: t
                                    } = i.next();
                                    return t ? {
                                        value: o(e),
                                        done: t
                                    } : {
                                        value: r ? [e[0], o(e[1])] : o(e),
                                        done: t
                                    }
                                },
                                [Symbol.iterator]() {
                                    return this
                                }
                            }
                        },
                        a = e => function(...t) {
                            return this.__r_raw[e](...t)
                        },
                        l = {
                            get size() {
                                return this.__r_raw.size
                            },
                            get(e) {
                                const t = this.__r_raw;
                                if (t.has(e)) return o(t.get(e))
                            },
                            forEach(e, t) {
                                const n = this.__r_raw;
                                return n.forEach(((r, i) => (r = o(r), e.call(t, r, Hp(n) ? i : r, n))))
                            }
                        };
                    ["has", "add", "set", "delete", "clear"].forEach((e => {
                        l[e] = a(e)
                    })), ["keys", "values", "entries", Symbol.iterator].forEach((e => {
                        l[e] = i(e)
                    }));
                    const u = {
                            get: (e, t, n) => "__r_raw" === t ? e : Reflect.get(Vp(l, t) && t in e ? l : e, t, n)
                        },
                        s = {
                            get: (e, t, n) => o(Reflect.get(e, t, n))
                        };
                    return r(e)
                }
                const Fg = new WeakMap;
                let Ug = 0;

                function Vg(e, t) {
                    const n = ph(e);
                    if (0 === n) return e;
                    if (e.__r_skip || !Object.isExtensible(e)) return e;
                    if (e.__r_state) return e;
                    let r = {
                            type: 0,
                            id: Ug++,
                            root: null,
                            parent: t,
                            base: e,
                            proxy: null,
                            copy: null,
                            modified: !1,
                            disposed: !1,
                            listeners: [],
                            children: []
                        },
                        o = r,
                        i = yg;
                    3 === n ? (r.type = 2, r.drafts = new Map, o = new Set, i = zg) : 4 === n ? (r.type = 1, o = new Map, i = zg) : 2 === n && (o = []), o !== r && Object.keys(r).forEach((e => {
                        Object.defineProperty(o, e, {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: r[e]
                        })
                    }));
                    const a = new Proxy(o, i);
                    return o.proxy = a, t ? (o.root = t.root, t.children.push(o)) : o.root = o, Fg.set(o, a), o.proxy
                }

                function Bg(e, t) {
                    const n = e.__r_state;
                    return n.disposed ? Lp : (n.listeners.push(t), () => {
                        const e = n.listeners.indexOf(t);
                        e >= 0 && n.listeners.splice(e, 1)
                    })
                }

                function $g(e, t) {
                    const n = new Map,
                        r = {
                            copies: n,
                            snapshots: t || new Map
                        },
                        o = r.snapshots,
                        i = [e.__r_state];
                    for (; i.length;) {
                        const e = i.pop();
                        let t;
                        e.modified ? (t = lh(e.copy), Wg(e, t), o.delete(e.proxy)) : t = Qg(e.base, r), n.set(e, t);
                        for (const n of e.children) i.push(n)
                    }
                    return r
                }

                function Qg(e, t) {
                    const n = Ag(e, t);
                    if (gh(e)) {
                        const r = e.__r_state;
                        return new Proxy(t.copies.get(r), n)
                    }
                    return new Proxy(e, n)
                }

                function Hg(e, t, n) {
                    return Kp(e) ? Qg(e, $g(t, n)) : e
                }

                function Wg(e, t) {
                    e.modified = !1, e.base = t
                }

                function Gg(e, t) {
                    const n = e.createView((function() {
                            return t(this, this.$actions)
                        })),
                        r = n.getSnapshot;
                    return r.destory = function() {
                        n.effect.stop();
                        const t = e.effectScope.effects.indexOf(n.effect);
                        t >= 0 && e.effectScope.effects.splice(t, 1)
                    }, r
                }
                const Yg = e => "_" === e || "$" === e,
                    qg = Fp({
                        $name: e => e.name,
                        $rawState: e => e.getState(),
                        $state: e => e.stateValue,
                        $actions: e => e.actions,
                        $views: e => e.views,
                        $patch: e => e.patch,
                        $onAction: e => e.onAction,
                        $subscribe: e => e.subscribe,
                        $isolate: e => e.isolate,
                        $getApi: e => e.getApi,
                        $createView: e => Gg.bind(null, e)
                    }),
                    Kg = e => ({
                        _: t
                    }, n) => {
                        const {
                            actions: r,
                            views: o,
                            accessCache: i,
                            ctx: a
                        } = t;
                        let l;
                        if (l = e ? t.getState() : t.stateValue, "$" !== n[0]) {
                            const e = i[n];
                            if (void 0 !== e) switch (e) {
                                case 0:
                                    return l[n];
                                case 2:
                                    return o[n];
                                case 1:
                                    return r[n];
                                case 3:
                                    return a[n]
                            } else {
                                if (Vp(l, n)) return i[n] = 0, l[n];
                                if (Vp(a, n)) return i[n] = 3, a[n]
                            }
                        }
                        const u = qg[n];
                        return u ? u(t) : Vp(a, n) ? (i[n] = 3, a[n]) : void(Yg(n[0]) && Vp(l, n) && dh(`Property ${JSON.stringify(n)} must be accessed via $state because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`))
                    },
                    Xg = ({
                        _: e
                    }, t, n) => {
                        const {
                            ctx: r,
                            actions: o,
                            views: i,
                            accessContext: a,
                            stateRef: {
                                value: l
                            }
                        } = e;
                        return Vp(l, t) ? 1 !== a && (l[t] = n, !0) : !Vp(o, t) && !Vp(i, t) && ("$state" === t ? "bigint" !== typeof n && "symbol" !== typeof n && (e.replace(n), !0) : ("$" !== t[0] || !Vp(qg, t)) && (r[t] = n, !0))
                    },
                    Jg = {
                        get: Kg(!1),
                        set: Xg
                    },
                    Zg = {
                        get: Kg(!0),
                        set: Xg
                    };

                function ev(e, t, ...n) {
                    console.error(e)
                }
                let tv = !1,
                    nv = !1;
                const rv = [];
                let ov = 0;
                const iv = [];
                let av = null,
                    lv = 0;
                const uv = [];
                let sv = null,
                    cv = 0;
                const fv = Promise.resolve();
                let dv = null,
                    pv = null;

                function hv(e) {
                    const t = dv || fv;
                    return e ? t.then(this ? e.bind(this) : e) : t
                }

                function gv(e) {
                    let t = ov + 1,
                        n = rv.length;
                    for (; t < n;) {
                        const r = t + n >>> 1;
                        wv(rv[r]) < e ? t = r + 1 : n = r
                    }
                    return t
                }

                function vv(e) {
                    rv.length && rv.includes(e, tv && e.allowRecurse ? ov + 1 : ov) || e === pv || (null == e.id ? rv.push(e) : rv.splice(gv(e.id), 0, e), mv())
                }

                function mv() {
                    tv || nv || (nv = !0, dv = fv.then(Sv))
                }

                function yv(e) {
                    const t = rv.indexOf(e);
                    t >= ov && rv.splice(t, 1)
                }

                function bv(e, t = null) {
                    if (iv.length) {
                        for (pv = t, av = [...new Set(iv)], iv.length = 0, lv = 0; lv < av.length; lv++) av[lv]();
                        av = null, lv = 0, pv = null, bv(e, t)
                    }
                }

                function _v(e) {
                    if (bv(), uv.length) {
                        const e = [...new Set(uv)];
                        if (uv.length = 0, sv) return void sv.push(...e);
                        for (sv = e, sv.sort(((e, t) => wv(e) - wv(t))), cv = 0; cv < sv.length; cv++) sv[cv]();
                        sv = null, cv = 0
                    }
                }
                const wv = e => null == e.id ? 1 / 0 : e.id;

                function Sv(e) {
                    nv = !1, tv = !0, bv(e), rv.sort(((e, t) => wv(e) - wv(t)));
                    try {
                        for (ov = 0; ov < rv.length; ov++) {
                            const e = rv[ov];
                            if (e && !1 !== e.active) try {
                                e()
                            } catch (t) {
                                ev(t, 0)
                            }
                        }
                    } finally {
                        ov = 0, rv.length = 0, _v(e), tv = !1, dv = null, (rv.length || iv.length || uv.length) && Sv(e)
                    }
                }
                var kv;

                function Cv(e, t) {
                    const n = Object.keys(t);
                    n.length && n.forEach((n => {
                        Vp(e, n) && Jp(t[n]) ? Cv(e[n], t[n]) : e[n] = t[n]
                    }))
                }

                function xv(e) {
                    e.dirty = !0
                }! function(e) {
                    e.REPLACE = "replace", e.MODIFY = "modify", e.PATCH = "patch"
                }(kv || (kv = {}));
                class Iv {
                    constructor(e, {
                        name: t,
                        initState: n
                    }) {
                        this.viewInstances = [], this._actionDepth = 0, this._api = null, this._actionListeners = new Set, this._subscribers = new Set, this._depListenersHandlers = [], this._watchStateChange = !0, this._destroyed = !1, this._lastDraftToSnapshot = new Map, this.patch = this.patch.bind(this), this.onAction = this.onAction.bind(this), this.subscribe = this.subscribe.bind(this), this.isolate = this.isolate.bind(this), this.getApi = this.getApi.bind(this), this._update = this._update.bind(this), this.options = e, this.name = t || "", this._isDispatching = !1, this._initState = n || e.state, this.stateRef = Vg({
                            value: this._initState
                        }), this._update.__name = t, this._draftListenerHandler = Bg(this.stateRef, (() => {
                            this._watchStateChange && vv(this._update)
                        })), this._setState(this._initState), this.actions = Object.create(null), this.views = Object.create(null), this.accessContext = 0, this.ctx = {}, th(this.ctx, "_", this), this.accessCache = Object.create(null), this.proxy = new Proxy(this.ctx, Jg), this.publicInst = new Proxy(this.ctx, Zg), this.effectScope = Ch(), this._initActions(), this._initViews()
                    }
                    patch(e) {
                        Jp(e) && this._currentState && (this._watchStateChange = !1, Cv(this.proxy.$state, e), this._watchStateChange = !0, this.dispatch({
                            type: kv.PATCH,
                            args: {
                                patch: e
                            }
                        }))
                    }
                    replace(e) {
                        if (Kp(e)) {
                            this._watchStateChange = !1, this.stateRef.value = e, this._watchStateChange = !0;
                            for (const e of this.viewInstances) e.effect.scheduler();
                            this.dispatch({
                                type: kv.REPLACE,
                                payload: e
                            })
                        } else dh(`replace argument should be an object, but receive a ${Object.prototype.toString.call(e)}`)
                    }
                    getState() {
                        return this._currentState
                    }
                    getApi() {
                        if (null === this._api) {
                            const e = this._api = Object.assign(Object.assign({}, this._currentState), this.views);
                            for (const t of Object.keys(this.actions)) th(e, t, this.actions[t])
                        }
                        return this._api
                    }
                    onAction(e) {
                        return this._actionListeners.add(e), () => {
                            this._actionListeners.delete(e)
                        }
                    }
                    subscribe(e) {
                        return this._subscribers.add(e), () => {
                            this._subscribers.delete(e)
                        }
                    }
                    isolate(e) {
                        Qh();
                        const t = e(this.stateValue);
                        return Hh(), t
                    }
                    depend(e) {
                        this._depListenersHandlers.push(e.subscribe((e => {
                            this._triggerListener(Object.assign(Object.assign({}, e), {
                                model: this.proxy
                            }))
                        })))
                    }
                    createView(e) {
                        let t;
                        return this.effectScope.run((() => {
                            t = rg((() => {
                                const n = this.accessContext;
                                this.accessContext = 1;
                                const r = t.__externalArgs;
                                try {
                                    return e.call(this.proxy, this.proxy, ...r || Ap)
                                } finally {
                                    this.accessContext = n
                                }
                            }))
                        })), t.getSnapshot = () => {
                            const e = t.value;
                            return t.mightChange ? (t.mightChange = !1, t.__snapshot = Hg(e, this.stateRef.value)) : t.__pre !== e && (t.__snapshot = Hg(e, this.stateRef.value)), t.__pre = e, t.__snapshot
                        }, this.viewInstances.push(t), t
                    }
                    reducer(e, t) {
                        switch (t.type) {
                            case kv.MODIFY:
                            case kv.PATCH:
                                {
                                    const e = new Map(this._lastDraftToSnapshot);
                                    return this._lastDraftToSnapshot = e,
                                    Hg(this.stateRef.value, this.stateRef.value, this._lastDraftToSnapshot)
                                }
                            case kv.REPLACE:
                                return t.payload;
                            default:
                                return e
                        }
                    }
                    dispatch(e) {
                        if ("undefined" === typeof e.type) return e;
                        if (this._isDispatching) return e;
                        let t;
                        try {
                            this._isDispatching = !0, t = this.reducer(this._currentState, e)
                        } finally {
                            this._isDispatching = !1
                        }
                        return t !== this._currentState && (this._setState(t), this._triggerListener(Object.assign({
                            type: e.type,
                            model: this.proxy,
                            target: this.proxy
                        }, e.args))), e
                    }
                    destroy() {
                        this._destroyed = !0, this._api = null, this._lastDraftToSnapshot.clear(), this._currentState = null, this.stateRef = {
                            value: null
                        }, this._subscribers.clear(), this.effectScope.stop();
                        for (const e of this._depListenersHandlers) e();
                        this._draftListenerHandler()
                    }
                    _setState(e) {
                        this._api = null, this._currentState = e, this.stateValue = this.stateRef.value
                    }
                    _update() {
                        !this._destroyed && mh(this.stateRef) && (this.dispatch({
                            type: kv.MODIFY
                        }), _h(this.stateRef))
                    }
                    _triggerListener(e) {
                        for (const t of this._subscribers) t(e)
                    }
                    _initActions() {
                        const e = this.options.actions;
                        if (e)
                            for (const t of Object.keys(e)) {
                                this.accessCache[t] = 1;
                                const n = e[t];
                                Object.defineProperty(this.actions, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !1,
                                    value: (...e) => {
                                        if (1 === this.accessContext) return;
                                        let r;
                                        this._actionDepth++;
                                        try {
                                            for (const n of this._actionListeners) n({
                                                name: t,
                                                args: e
                                            });
                                            r = n.call(this.proxy, ...e)
                                        } finally {
                                            0 === --this._actionDepth && (yv(this._update), this._update())
                                        }
                                        return r
                                    }
                                })
                            }
                    }
                    _initViews() {
                        const e = this.options.views;
                        if (e)
                            for (const t of Object.keys(e)) {
                                this.accessCache[t] = 2;
                                const n = e[t],
                                    r = n.length > 1,
                                    o = this.createView(n),
                                    i = o,
                                    a = r ? () => (...e) => {
                                        const t = i.__externalArgs;
                                        if (t) {
                                            if (t.length !== e.length) xv(o);
                                            else
                                                for (let n = 0; n < t.length; n++)
                                                    if (t[n] !== e[n]) {
                                                        xv(o);
                                                        break
                                                    }
                                        } else xv(o);
                                        return i.__externalArgs = e, o.getSnapshot()
                                    } : o.getSnapshot;
                                Object.defineProperty(this.views, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: a,
                                    set: () => !1
                                })
                            }
                    }
                }

                function Ev(e, t = {}) {
                    return new Iv(e, t)
                }
                const Mv = () => {
                    const e = new Map,
                        t = {
                            get: t => e.get(t),
                            set(t, n) {
                                e.set(t, n)
                            },
                            each(t) {
                                for (const [n, r] of e.entries()) t(r, n)
                            },
                            clear() {
                                t.each((e => e.destroy())), e.clear()
                            }
                        };
                    return t
                };
                let Rv = null;

                function Ov(e) {
                    Rv = e
                }
                class Tv {
                    constructor(e = zp, t = []) {
                        this._subscribers = new Set, this._initialState = e, this._models = Mv();
                        const n = () => {
                            for (const e of this._subscribers) e()
                        };
                        this._onModelChange = () => {
                            vv(n)
                        }, this._hooks = t.map((([e, t]) => e(t))), this._hooks.map((t => {
                            var n;
                            return null === (n = t.onInit) || void 0 === n ? void 0 : n.call(t, {
                                initialState: e
                            }, {
                                doura: this
                            })
                        }))
                    }
                    getModel(e, t) {
                        return this.getModelInstance({
                            name: e,
                            model: t
                        }).publicInst
                    }
                    getDetachedModel(e) {
                        return this.getModelInstance({
                            model: e
                        }).publicInst
                    }
                    getModelInstance({
                        name: e,
                        model: t
                    }) {
                        const n = e && this._models.get(e);
                        if (n) return n;
                        let r;
                        if ("function" === typeof t) {
                            const n = Rv,
                                o = this._createModelProxy();
                            try {
                                Ov({
                                    manager: this,
                                    model: o
                                }), r = this._initModel({
                                    name: e,
                                    model: t()
                                })
                            } finally {
                                Ov(n)
                            }
                            o.setModel(r)
                        } else {
                            if ("object" !== typeof t) throw new Error("invalid model");
                            r = this._initModel({
                                name: e,
                                model: t
                            })
                        }
                        return r
                    }
                    getState() {
                        const e = {};
                        return this._models.each(((t, n) => {
                            e[n] = t.getState()
                        })), e
                    }
                    subscribe(e) {
                        return this._subscribers.add(e), () => {
                            this._subscribers.delete(e)
                        }
                    }
                    destroy() {
                        this._hooks.map((e => {
                            var t;
                            return null === (t = e.onDestroy) || void 0 === t ? void 0 : t.call(e)
                        })), this._models.clear(), this._subscribers.clear(), this._initialState = zp
                    }
                    _createModelProxy() {
                        const e = [],
                            t = {
                                addChild(t) {
                                    e.push(t)
                                },
                                setModel(t) {
                                    for (const n of e) t.depend(n);
                                    e.length = 0
                                }
                            };
                        return t
                    }
                    _initModel({
                        name: e,
                        model: t
                    }) {
                        if (!e) return Ev(t);
                        this._hooks.map((n => {
                            var r;
                            return null === (r = n.onModel) || void 0 === r ? void 0 : r.call(n, e, t, {
                                doura: this
                            })
                        }));
                        const n = Ev(t, {
                            name: e,
                            initState: this._getInitialState(e)
                        });
                        return n.subscribe(this._onModelChange), this._models.set(e, n), this._hooks.map((e => {
                            var t;
                            null === (t = e.onModelInstance) || void 0 === t || t.call(e, n.publicInst, {
                                doura: this
                            })
                        })), n
                    }
                    _getInitialState(e) {
                        const t = this._initialState[e];
                        return t && delete this._initialState[e], t
                    }
                }

                function Nv({
                    initialState: e,
                    plugins: t
                } = {}) {
                    return new Tv(e, t)
                }

                function Pv(e, t) {
                    if (!Rv) throw new Error("Invalid use() call. use() can only be called inside of the body of a function model. This could happen for one of the following reasons:\n1. You might be breaking the Rules of Doura\n2. You might have more than one copy of Doura in the same app");
                    const {
                        manager: n,
                        model: r
                    } = Rv;
                    let o, i;
                    return "string" === typeof e ? (i = e, o = n.getModelInstance({
                        name: i,
                        model: t
                    })) : (t = e, o = n.getModelInstance({
                        model: t
                    })), r.addChild(o), o.proxy
                }

                function Dv({
                    initialState: e,
                    plugins: t = []
                } = {}) {
                    return Nv({
                        initialState: e,
                        plugins: t
                    })
                }

                function jv(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                }

                function Lv(e, t) {}
                const zv = function() {
                    if (!window.__REDUX_DEVTOOLS_EXTENSION__) return {};
                    let e = 0;
                    const t = new Set;
                    let n;
                    return {
                        onInit(r, {
                            doura: o
                        }) {
                            if (window.__doura = o, window.__REDUX_DEVTOOLS_EXTENSION__) {
                                n = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
                                    name: `doura${0===e?"":e}`
                                }), e += 1, n.init(o.getState());
                                const r = e => {
                                    switch (e.type) {
                                        case "ACTION":
                                            return void nh("string" === typeof e.payload, "Unsupported action format");
                                        case "DISPATCH":
                                            switch (e.payload.type) {
                                                case "RESET":
                                                case "COMMIT":
                                                    return n.init(o.getState());
                                                case "ROLLBACK":
                                                    try {
                                                        const t = JSON.parse(e.state);
                                                        return Lv(t, o), n.init(t)
                                                    } catch (t) {
                                                        console.warn("[Doura Devtool] Could not parse the received json.")
                                                    }
                                                    return n.init(o.getState());
                                                case "JUMP_TO_STATE":
                                                case "JUMP_TO_ACTION":
                                                    return
                                            }
                                    }
                                };
                                t.add(n.subscribe(r))
                            }
                        },
                        onModelInstance(e, {
                            doura: t
                        }) {
                            e.$subscribe((e => {
                                var {
                                    type: r,
                                    model: o
                                } = e, i = jv(e, ["type", "model"]);
                                const a = t.getState();
                                delete a._, n.send(Object.assign({
                                    type: `${o.$name||"anonymous"}@${r}`
                                }, i), a)
                            }))
                        },
                        onDestroy() {
                            window.__REDUX_DEVTOOLS_EXTENSION__.disconnect(n);
                            for (const e of t.values()) e();
                            t.clear()
                        }
                    }
                };
                var Av = zv,
                    Fv = Object.freeze({
                        __proto__: null,
                        NOOP: Lp,
                        assign: Fp,
                        def: th,
                        defineModel: fh,
                        devtool: Av,
                        doura: Dv,
                        draft: Vg,
                        each: sh,
                        emptyArray: Ap,
                        emptyObject: zp,
                        hasOwn: Vp,
                        invariant: nh,
                        is: eh,
                        isArray: Qp,
                        isFunction: Gp,
                        isIntegerKey: Zp,
                        isMap: Hp,
                        isObject: Kp,
                        isPlainObject: Jp,
                        isSet: Wp,
                        isString: Yp,
                        isSymbol: qp,
                        markRaw: hh,
                        nextTick: hv,
                        objectToString: Bp,
                        ownKeys: uh,
                        set: ch,
                        shallowCopy: lh,
                        snapshot: Hg,
                        toRawType: Xp,
                        toTypeString: $p,
                        use: Pv
                    }),
                    Uv = Ce.createContext(null);

                function Vv() {
                    return Ce.useContext(Uv)
                }

                function Bv(e) {
                    var t = e.children,
                        n = e.runtime;
                    return Ce.createElement(Uv.Provider, {
                        value: n
                    }, t)
                }
                var $v = Ce.createContext(null);

                function Qv() {
                    return Ce.useContext($v)
                }

                function Hv(e) {
                    var t = e.children,
                        n = Vv(),
                        r = Ce.useSyncExternalStore(n.onLocaleChange, n.getLocale, n.getLocale),
                        o = Ce.useSyncExternalStore(n.onI18nFallbackChange, n.getI18nFallback, n.getI18nFallback),
                        i = Ce.useCallback((function(e) {
                            var t = n.translate(e, r);
                            return void 0 === t ? o[e] : t
                        }), [r, o]);
                    return Ce.createElement($v.Provider, {
                        value: i
                    }, t)
                }
                var Wv = Ce.createContext(null);

                function Gv() {
                    return Ce.useContext(Wv)
                }

                function Yv(e) {
                    var t = e.children,
                        n = Vv(),
                        r = Ce.useSyncExternalStore(n.onStoreChange, n.getStore, n.getStore),
                        o = Ce.useCallback((function(e) {
                            var t = e.split(".");
                            try {
                                for (var n = r["".concat(t[0], "/").concat(t[1])], o = 3; o < t.length; o++) 2 !== o && (n = n[t[o]]);
                                return n
                            } catch (i) {
                                console.error(i, t, r)
                            }
                        }), [r]);
                    return Ce.createElement(Wv.Provider, {
                        value: {
                            modelHandle: o,
                            store: r
                        }
                    }, t)
                }
                var qv = Ce.createContext(null);

                function Kv() {
                    return Ce.useContext(qv)
                }

                function Xv(e) {
                    var t = e.children,
                        n = e.renderItem;
                    return Ce.createElement(qv.Provider, {
                        value: {
                            renderItem: n
                        }
                    }, t)
                }
                var Jv = Ce.createContext(null);

                function Zv() {
                    return Ce.useContext(Jv)
                }

                function em(e) {
                    var t = e.children,
                        n = Vv(),
                        r = Ce.useSyncExternalStore(n.onIrisStates, n.getIrisStates, n.getIrisStates),
                        o = Ce.useCallback((function(e) {
                            var t;
                            return (null === (t = r[e]) || void 0 === t ? void 0 : t.value) || e
                        }), [r]),
                        i = {};
                    return Object.keys(r).forEach((function(e) {
                        var t;
                        i[e] = null === (t = r[e]) || void 0 === t ? void 0 : t.value
                    })), Ce.createElement(Jv.Provider, {
                        value: {
                            getIrisStates: o,
                            data: i
                        }
                    }, t)
                }
                var tm = Ce.createContext({});

                function nm() {
                    return Ce.useContext(tm)
                }

                function rm(e) {
                    var t, n = e.id,
                        r = e.children,
                        i = Vv(),
                        a = Ce.useRef(null !== (t = i.getNodeModels(n)) && void 0 !== t ? t : {}),
                        l = Ce.useState(a.current),
                        u = l[0],
                        s = l[1];
                    return Ce.useEffect((function() {
                        Object.values(a.current || {}).forEach((function(e) {
                            e.$subscribe((function() {
                                s((function(e) {
                                    return o({}, e)
                                }))
                            }))
                        }))
                    }), []), Ce.createElement(tm.Provider, {
                        value: u
                    }, r)
                }
                var om = Ce.createContext({});

                function im() {
                    return Ce.useContext(om)
                }

                function am(e) {
                    var t = e.children,
                        n = e.states,
                        r = nm(),
                        i = Ce.useMemo((function() {
                            return n ? Object.entries(n).reduce((function(e, t) {
                                var n, r, o = t[0],
                                    i = t[1];
                                return e[o] = null !== (r = null !== (n = null === i || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : null === i || void 0 === i ? void 0 : i.body) && void 0 !== r ? r : i, e
                            }), o({}, r)) : o({}, r)
                        }), [n, r]);
                    return Ce.createElement(om.Provider, {
                        value: i
                    }, t)
                }
                var lm = Ce.createContext(null);

                function um() {
                    return Ce.useContext(lm)
                }

                function sm(e) {
                    var t = e.children,
                        n = e.transformers;
                    return Ce.createElement(lm.Provider, {
                        value: n
                    }, t)
                }

                function cm(e) {
                    Ce.useEffect((function() {
                        var t = document.body.style;
                        Object.keys(e).forEach((function(n) {
                            t[n] = e[n]
                        }))
                    }), [e])
                }

                function fm(e) {
                    var t = e.children,
                        n = Vv();
                    return cm(Ce.useSyncExternalStore(n.onGlobalConfigStyleChange, n.getGlobalConfigStyle, n.getGlobalConfigStyle)), Ce.createElement(Ce.Fragment, null, t)
                }
                var dm = Ce.createContext(null);

                function pm() {
                    return Ce.useContext(dm)
                }
                var hm = function(e, t) {
                    var n;
                    return function() {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        window.clearTimeout(n), n = window.setTimeout((function() {
                            e(r)
                        }), t)
                    }
                };

                function gm(e, t) {
                    void 0 === t && (t = void 0), Object.keys(e).forEach((function(n) {
                        var r = e[n],
                            o = r[0],
                            i = r[1],
                            a = window.innerWidth;
                        a > o && (void 0 === i || a < i) && t && t(n)
                    }))
                }

                function vm(e) {
                    var t = e.children,
                        n = e.device,
                        r = void 0 === n ? "desktop" : n,
                        o = Ce.useState(r),
                        i = o[0],
                        a = o[1],
                        l = Vv().getResponsiveConfig();
                    return Ce.useEffect((function() {
                        var e = hm((function() {
                            gm(l, (function(e) {
                                return a(e)
                            }))
                        }), 200);
                        return gm(l, (function(e) {
                                return a(e)
                            })), window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []), Ce.createElement(dm.Provider, {
                        value: {
                            device: i
                        }
                    }, t)
                }
                var mm, ym, bm = function() {
                    var e = Gv().store,
                        t = void 0 === e ? {} : e,
                        n = Zv().data,
                        r = um();
                    return o(o(o({}, t), n), r)
                };

                function _m(e, t) {
                    return e.reduce((function(e, n) {
                        var r = n[0],
                            i = n[1];
                        return function(n) {
                            var a = n.children,
                                l = bm(),
                                u = Object.entries(null !== i && void 0 !== i ? i : {}).reduce((function(e, n) {
                                    var r = n[0],
                                        o = n[1];
                                    return "string" === typeof o && (o = t.getVariable({
                                        statement: o,
                                        globalData: l
                                    })), e[r] = o, e
                                }), {});
                            return Ce.createElement(e, null, Ce.createElement(r, o({}, u), a))
                        }
                    }), (function(e) {
                        return e.children
                    }))
                }

                function wm(e) {
                    var t = e.children,
                        n = e.runtime,
                        r = e.renderItem,
                        o = e.transformers,
                        i = e.device,
                        a = e.resourceManager,
                        l = e.context,
                        u = Ce.useMemo((function() {
                            var e, t;
                            return _m(w(w([], null !== (e = a.getRuntimeProviders(l)) && void 0 !== e ? e : [], !0), null !== (t = a.getUikitProviders()) && void 0 !== t ? t : [], !0), n)
                        }), [a, l]);
                    return Ce.createElement(Bv, {
                        runtime: n
                    }, Ce.createElement(sm, {
                        transformers: o
                    }, Ce.createElement(Yv, null, Ce.createElement(Hv, null, Ce.createElement(em, null, Ce.createElement(Xv, {
                        renderItem: r
                    }, Ce.createElement(vm, {
                        device: i
                    }, Ce.createElement(u, null, t))))))))
                }

                function Sm(e, t) {
                    var n, r = null !== (n = e.baseProps) && void 0 !== n ? n : {},
                        i = Gv().modelHandle,
                        a = Vv(),
                        l = bm(),
                        u = im(),
                        s = "iris-".concat(e.id);
                    return Ce.useMemo((function() {
                        return Object.entries(r).reduce((function(e, n) {
                            var r = n[0],
                                c = n[1];
                            if ("string" === typeof c) try {
                                c = a.getVariable({
                                    statement: c,
                                    nodeId: s,
                                    globalData: l,
                                    localData: o(o({}, u), {
                                        $customProps: t
                                    })
                                }), e[r] = c
                            } catch (f) {
                                console.error("IRIS useBaseProps error (getVariable):", f)
                            }
                            if ((null === c || void 0 === c ? void 0 : c.__type) === mm.Model) e[r] = i(c.id);
                            else if (["style", "hoverStyle"].includes(r)) try {
                                e[r] = Object.entries(c).reduce((function(e, n) {
                                    var r = n[0],
                                        i = n[1];
                                    if ("string" === typeof i) try {
                                        i = a.getVariable({
                                            statement: i,
                                            nodeId: s,
                                            globalData: l,
                                            localData: o(o({}, u), {
                                                $customProps: t
                                            })
                                        })
                                    } catch (f) {
                                        console.error("IRIS useBaseProps error (getVariable):", f)
                                    }
                                    return e[r] = i, e
                                }), {})
                            } catch (f) {
                                console.error("IRIS useBaseProps error (getVariable):", f)
                            }
                            return e
                        }), {})
                    }), [r, t, i, l, u])
                }(function(e) {
                    e.I18N = "i18n-key", e.Model = "model", e.VARIABLE = "variable", e.COMPONENT = "component"
                })(mm || (mm = {})),
                function(e) {
                    e.templateComponent = "templateComponent", e.component = "component", e.builtInComponent = "builtInComponent"
                }(ym || (ym = {}));
                var km = "__irisMemoryId__",
                    Cm = new Map,
                    xm = new Map,
                    Im = 0,
                    Em = 0,
                    Mm = function(e) {
                        var t = e.id,
                            n = e.componentType,
                            r = km + Im++;
                        return function(e) {
                            var i, a = Vv();
                            if (n === ym.builtInComponent && Cm.set(r, {
                                    id: r,
                                    props: e,
                                    baseProps: {},
                                    type: t,
                                    responsive: {}
                                }), n === ym.component && Cm.set(r, {
                                    id: r,
                                    props: e,
                                    componentId: t,
                                    baseProps: {},
                                    type: od.Component,
                                    responsive: {}
                                }), n === ym.templateComponent) {
                                var l = a.getTemplateComponent(t);
                                if (l)
                                    for (var u = JSON.parse(JSON.stringify(l || {})), s = u.rootNodeId, c = u.nodeTree, f = u.nodeConfigs, d = [s], p = r, h = r, g = ((i = {})[s] = h, i), v = function() {
                                            var t = d.shift(),
                                                n = o({}, f[t].props);
                                            t === s && (n = o(o({}, n), e));
                                            var r = o(o({}, f[t]), {
                                                    id: g[t],
                                                    props: n,
                                                    rootNodeId: p,
                                                    templateNodeId: t
                                                }),
                                                i = [];
                                            (c[t] || []).forEach((function(e) {
                                                h += km + Em++, g[e] = h, i.push(h)
                                            }));
                                            var a = {
                                                id: g[t],
                                                children: i,
                                                locked: !1,
                                                visible: !0
                                            };
                                            Cm.set(r.id, r), xm.set(a.id, a), d = w(w([], d, !0), c[t], !0)
                                        }; d.length > 0;) v()
                            }
                            return Ce.createElement(Fm, {
                                id: r
                            })
                        }
                    };

                function Rm(e) {
                    var t = Vv(),
                        n = Ce.useCallback((function() {
                            return t.getComponentConfigById(e)
                        }), [e]),
                        r = Ce.useCallback((function(n) {
                            return t.onComponentConfigChange(e, n)
                        }), [e]),
                        o = Ce.useSyncExternalStore(r, n, n);
                    return Cm.has(e) ? Cm.get(e) : o
                }
                var Om = function(e, t) {
                    return t || e
                };

                function Tm(e) {
                    var t = Vv(),
                        n = e || {},
                        r = n.templateId,
                        o = n.templateNodeId,
                        i = n.id,
                        a = Ce.useCallback((function() {
                            var e = Om(i, o);
                            return t.getTemplateComponentConfig(r, e)
                        }), [r, o, i]),
                        l = Ce.useCallback((function(e) {
                            var n = Om(i, o);
                            return t.onTemplateComponentConfigChange("".concat(r, "__iris__").concat(n), e)
                        }), [r, o, i]);
                    return Ce.useSyncExternalStore(l, a, a)
                }

                function Nm(e) {
                    var t = Vv(),
                        n = Rm(e),
                        r = Tm(n),
                        o = Ce.useSyncExternalStore(t.onDeviceChange, t.getDevice, t.getDevice),
                        i = pm().device;
                    return Ep(n, r, o || i)
                }

                function Pm(e, t) {
                    var n, r = null !== (n = e.props) && void 0 !== n ? n : {},
                        i = "iris-".concat(e.id),
                        a = Qv(),
                        l = Gv().modelHandle,
                        u = im(),
                        s = Vv(),
                        c = bm();
                    return Ce.useMemo((function() {
                        return Object.entries(r).reduce((function(e, n) {
                            var r = n[0],
                                f = n[1];
                            if ("string" === typeof f) try {
                                f = s.getVariable({
                                    statement: f,
                                    globalData: c,
                                    localData: o(o({}, u), {
                                        $customProps: t
                                    }),
                                    nodeId: i
                                }), e[r] = f
                            } catch (h) {
                                console.error("IRIS useProps error (getVariable):", h)
                            }
                            if ((null === f || void 0 === f ? void 0 : f.__type) === mm.I18N) e[r] = a(f.id);
                            else if ((null === f || void 0 === f ? void 0 : f.__type) === mm.Model) e[r] = l(f.id);
                            else if ((null === f || void 0 === f ? void 0 : f.__type) === mm.COMPONENT) {
                                var d = f.id,
                                    p = f.componentType;
                                e[r] = Mm({
                                    id: d,
                                    componentType: p
                                })
                            }
                            return e
                        }), {})
                    }), [r, a, l, t, u, c])
                }

                function Dm(e) {
                    var t = Nm(e),
                        n = Nm(t.rootNodeId),
                        r = (null === n || void 0 === n ? void 0 : n.props) || {},
                        i = Pm(t, r),
                        a = Sm(t, r);
                    return o(o({}, t), {
                        props: o(o({}, t.props), i),
                        baseProps: o(o({}, t.baseProps), a)
                    })
                }

                function jm(e, t, n) {
                    var r = n.shallowEqual,
                        o = Ce.useRef({});
                    return o.current.preValue = null, {
                        getCurrentValue: function() {
                            var t = e();
                            return r(o.current.preValue, t) || (o.current.preValue = t), o.current.preValue
                        },
                        subscribe: t
                    }
                }

                function Lm(e) {
                    var t = Vv(),
                        n = Ce.useCallback((function() {
                            return t.getChildrenByParentId(e)
                        }), [e]),
                        r = Ce.useCallback((function(n) {
                            return t.onChildrenChange(e, n)
                        }), [e]),
                        o = jm(n, r, {
                            shallowEqual: kd
                        }),
                        i = o.getCurrentValue,
                        a = o.subscribe;
                    return xm.has(e) ? xm.get(e).children : Ce.useSyncExternalStore(a, i, i) || []
                }
                var zm = function(e) {
                        var t = e.id,
                            n = e.children,
                            r = e.states;
                        return Ce.createElement(rm, {
                            id: t
                        }, Ce.createElement(am, {
                            id: t,
                            states: r
                        }, n))
                    },
                    Am = function(e) {
                        var t, n = e.id,
                            r = i(e, ["id"]),
                            a = Dm(n),
                            l = Lm(n),
                            u = Kv().renderItem,
                            s = a.baseProps.hidden;
                        if (void 0 !== s && s) return null;
                        var c = Ce.createElement(u, o({
                            componentConfig: a
                        }, r), 0 === l.length ? void 0 : l.map((function(e) {
                            return Ce.createElement(Am, {
                                id: e,
                                key: e
                            })
                        })));
                        return (null !== (t = a.states) && void 0 !== t ? t : a.modelConfigs) ? Ce.createElement(zm, {
                            id: n,
                            states: a.states
                        }, c) : c
                    },
                    Fm = function(e) {
                        var t, n = e.id,
                            r = Dm(n),
                            o = Ce.createElement(Am, {
                                id: n
                            });
                        return (null !== (t = r.states) && void 0 !== t ? t : r.modelConfigs) ? Ce.createElement(zm, {
                            id: n,
                            states: r.states
                        }, o) : o
                    },
                    Um = function(e) {
                        var t = e.id,
                            n = Lm(void 0 === t ? pd : t);
                        return Ce.createElement(Ce.Fragment, null, n.map((function(e) {
                            return Ce.createElement(Fm, {
                                id: e,
                                key: e
                            })
                        })))
                    },
                    Vm = function(e) {
                        var t = e.runtime,
                            n = e.id,
                            r = e.renderItem,
                            o = e.transformers,
                            i = e.device,
                            a = e.resourceManager,
                            l = e.context;
                        return t ? Ce.createElement(wm, {
                            renderItem: r,
                            runtime: t,
                            transformers: o,
                            device: i,
                            resourceManager: a,
                            context: l
                        }, Ce.createElement(fm, null, Ce.createElement(Um, {
                            id: n
                        }))) : Ce.createElement("div", null, "Please inject the runtime environment")
                    },
                    Bm = Object.freeze({
                        __proto__: null,
                        RenderCore: Vm,
                        get NodeType() {
                            return od
                        },
                        get PropsTypeEnum() {
                            return mm
                        },
                        get PropsComponentType() {
                            return ym
                        }
                    }),
                    $m = {
                        0: {
                            row: {
                                alignItems: "flex-start"
                            },
                            column: {
                                alignItems: "flex-start"
                            }
                        },
                        1: {
                            row: {
                                alignItems: "flex-start",
                                justifyContent: "center"
                            },
                            column: {
                                alignItems: "center"
                            }
                        },
                        2: {
                            row: {
                                alignItems: "flex-start",
                                justifyContent: "flex-end"
                            },
                            column: {
                                alignItems: "flex-end"
                            }
                        },
                        3: {
                            row: {
                                alignItems: "center"
                            },
                            column: {
                                alignItems: "flex-start",
                                justifyContent: "center"
                            }
                        },
                        4: {
                            row: {
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            column: {
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        },
                        5: {
                            row: {
                                alignItems: "center",
                                justifyContent: "flex-end"
                            },
                            column: {
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }
                        },
                        6: {
                            row: {
                                alignItems: "flex-end"
                            },
                            column: {
                                alignItems: "flex-start",
                                justifyContent: "flex-end"
                            }
                        },
                        7: {
                            row: {
                                alignItems: "flex-end",
                                justifyContent: "center"
                            },
                            column: {
                                alignItems: "center",
                                justifyContent: "flex-end"
                            }
                        },
                        8: {
                            row: {
                                alignItems: "flex-end",
                                justifyContent: "flex-end"
                            },
                            column: {
                                alignItems: "flex-end",
                                justifyContent: "flex-end"
                            }
                        }
                    },
                    Qm = {
                        0: {
                            column: {
                                alignItems: "flex-start",
                                justifyContent: "space-between"
                            },
                            row: {
                                alignItems: "flex-start",
                                justifyContent: "space-between"
                            }
                        },
                        1: {
                            column: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            row: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        },
                        2: {
                            column: {
                                alignItems: "flex-end",
                                justifyContent: "space-between"
                            },
                            row: {
                                alignItems: "flex-end",
                                justifyContent: "space-between"
                            }
                        }
                    },
                    Hm = function(e) {
                        var t = e.alignment,
                            n = e.columnGapType,
                            r = e.gapType,
                            i = e.columnGap,
                            a = e.gap;
                        if ("auto" === r && "auto" !== n) return o(o({}, {
                            0: {
                                alignContent: "flex-start",
                                justifyContent: "space-between",
                                alignItems: "flex-start"
                            },
                            1: {
                                alignContent: "center",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            2: {
                                alignContent: "flex-end",
                                justifyContent: "space-between",
                                alignItems: "flex-end"
                            }
                        }[t]), {
                            rowGap: "".concat(i, "px")
                        });
                        if ("auto" !== r && "auto" === n) return o(o({}, {
                            0: {
                                alignItems: "flex-start",
                                alignContent: "space-between"
                            },
                            1: {
                                justifyContent: "center",
                                alignItems: "flex-start"
                            },
                            2: {
                                justifyContent: "flex-end",
                                alignItems: "flex-start"
                            },
                            3: {
                                justifyContent: "flex-start",
                                alignItems: "center"
                            },
                            4: {
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            5: {
                                justifyContent: "flex-end",
                                alignItems: "center"
                            },
                            6: {
                                justifyContent: "flex-start",
                                alignItems: "flex-end"
                            },
                            7: {
                                justifyContent: "center",
                                alignItems: "flex-end"
                            },
                            8: {
                                justifyContent: "flex-end",
                                alignItems: "flex-end"
                            }
                        }[t]), {
                            gap: "".concat(a, "px")
                        });
                        if ("auto" === r && "auto" === n) return {
                            0: {
                                justifyContent: "space-between",
                                alignItems: "flex-start"
                            },
                            1: {
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            2: {
                                justifyContent: "space-between",
                                alignItems: "flex-end"
                            }
                        }[t];
                        var l = function() {
                                return [0, 3, 6].includes(t) ? "flex-start" : [1, 4, 7].includes(t) ? "center" : "flex-end"
                            },
                            u = function() {
                                return [0, 1, 2].includes(t) ? "flex-start" : [3, 4, 5].includes(t) ? "center" : "flex-end"
                            },
                            s = "".concat(i, "px ").concat(a, "px");
                        return {
                            justifyContent: l(),
                            alignItems: u(),
                            gap: s
                        }
                    },
                    Wm = function(e) {
                        var t = e.autoLayoutFlexDirection,
                            n = void 0 === t ? "row" : t,
                            r = e.autoLayoutAlignment,
                            i = void 0 === r ? 0 : r,
                            a = e.autoLayoutGap,
                            l = void 0 === a ? 0 : a,
                            u = e.autoLayoutReverse,
                            s = void 0 !== u && u,
                            c = e.autoLayoutFlexWrap,
                            f = e.autoLayoutColumnGap,
                            d = void 0 === f ? 0 : f,
                            p = e.autoLayoutGapType,
                            h = e.autoLayoutColumnGapType,
                            g = e.clip,
                            v = void 0 === g ? "false" : g,
                            m = e.backgroundColor,
                            y = e.paddingRight,
                            b = e.paddingLeft,
                            _ = e.paddingTop,
                            w = e.paddingBottom,
                            S = e.opacity,
                            k = void 0 === S ? 1 : S,
                            C = e.borderRadius,
                            x = "wrap" !== c ? "auto" === p ? o({}, Qm[i][n]) : o(o({}, $m[i][n]), {
                                gap: "".concat(l, "px")
                            }) : Hm({
                                alignment: i,
                                columnGapType: h,
                                gapType: p,
                                columnGap: d,
                                gap: l
                            }),
                            I = o(o({
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: s ? "".concat(n, "-reverse") : n,
                                flexWrap: c,
                                backgroundColor: m,
                                paddingRight: y,
                                paddingLeft: b,
                                paddingTop: _,
                                paddingBottom: w
                            }, x), {
                                opacity: k,
                                borderRadius: Array.isArray(C) ? C.map((function(e) {
                                    return "".concat(e, "px")
                                })).join(" ") : C
                            });
                        return "true" === v && (I.overflow = "hidden"), "wrap" === c && delete I.flexDirection, I
                    },
                    Gm = function(e) {
                        var t = {};
                        Object.keys(e || {}).forEach((function(n) {
                            n.startsWith("__iris__") && (t[n.slice("__iris__".length)] = e[n])
                        }));
                        var n = o(o({}, e), t),
                            r = Wm(n);
                        return Ce.createElement("div", {
                            style: o(o({}, r), {
                                boxSizing: "border-box"
                            }),
                            "iris-type": "Box"
                        }, n.children)
                    },
                    Ym = function(e) {
                        var t, n = {};
                        Object.keys(e || {}).forEach((function(t) {
                            t.startsWith("__iris__") && (n[t.slice("__iris__".length)] = e[t])
                        }));
                        var r = o(o({}, e), n),
                            i = {
                                width: "100%",
                                height: "100%",
                                position: "relative"
                            };
                        return i.backgroundColor = r.backgroundColor, i.opacity = null !== (t = r.opacity) && void 0 !== t ? t : 1, r.borderRadius && (i.borderRadius = r.borderRadius.map((function(e) {
                            return "".concat(e, "px")
                        })).join(" ")), "true" === r.clip && (i.overflow = "hidden"), Ce.createElement("div", {
                            "iris-type": "frame",
                            style: o(o({}, i), {
                                boxSizing: "border-box"
                            })
                        }, r.children)
                    },
                    qm = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCAxMC4wMDAwMDApIj48cmVjdCBmaWxsPSIjRDdEOUUwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzIiIGhlaWdodD0iMjgiIHJ4PSIzIj48L3JlY3Q+PHBhdGggZD0iTTgsNCBDOS42NTY4Njg0MSw0IDExLDUuMzQzMTMxNTkgMTEsNyBDMTEsOC42NTY4Njg0MSA5LjY1Njg2ODQxLDEwIDgsMTAgQzYuMzQzMTMxNTksMTAgNSw4LjY1Njg2ODQxIDUsNyBDNSw1LjM0MzEzMTU5IDYuMzQzMTMxNTUsNCA4LDQgWiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PHBhdGggZD0iTTEwLjgyMTYxMDIsMTYuNzE1OTMyNCBMMTMuNDc2NjYxNiwyMC4wNDQwMjk5IEMxMy44MjEwODM0LDIwLjQ3NTc2MTQgMTQuNDUwMjc5OSwyMC41NDY1Mzk5IDE0Ljg4MjAxMTQsMjAuMjAyMTE4MSBDMTQuOTQ5MTcyMSwyMC4xNDg1Mzk0IDE1LjAwOTE0ODIsMjAuMDg2NTI5MiAxNS4wNjA0NTc4LDIwLjAxNzYxOTQgTDE5LjQ1OTM3MzcsMTQuMTA5Nzk5NSBDMTkuNzg5MjA5NCwxMy42NjY4MjQ1IDIwLjQxNTY5NjIsMTMuNTc1MTA3IDIwLjg1ODY3MTMsMTMuOTA0OTQyNyBDMjAuOTQ0MTg1NSwxMy45Njg2MTU5IDIxLjAxODk2NywxNC4wNDU1NTQ2IDIxLjA4MDE4MzMsMTQuMTMyODQ0NSBMMjYuODk2MDMzOSwyMi40MjU4MjQ2IEMyNy4yMTMxNDIyLDIyLjg3Nzk5OCAyNy4xMDM2NTAzLDIzLjUwMTYyNCAyNi42NTE0NzY5LDIzLjgxODczMjMgQzI2LjQ4MzI1MjcsMjMuOTM2NzA3NyAyNi4yODI3NzA4LDI0IDI2LjA3NzMwMTYsMjQgTDUuOTU0ODg5NzksMjQgQzUuNDAyNjA1MDQsMjQgNC45NTQ4ODk3OSwyMy41NTIyODQ3IDQuOTU0ODg5NzksMjMgQzQuOTU0ODg5NzksMjIuNzg5OTExNSA1LjAyMTA1NjcsMjIuNTg1MTU5MSA1LjE0NDAwMDM4LDIyLjQxNDgwMDYgTDkuMjI5MDAxNzYsMTYuNzU0MzYzOCBDOS41NTIxOTg0OCwxNi4zMDY1MjE5IDEwLjE3NzI0ODcsMTYuMjA1NDc3MSAxMC42MjUwOTA2LDE2LjUyODY3MzggQzEwLjY5ODgwMzksMTYuNTgxODcwOSAxMC43NjQ5MTk1LDE2LjY0NDg3MDcgMTAuODIxNjEwMiwxNi43MTU5MzI0IFoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";

                function Km(e) {
                    var t = e.alt,
                        n = void 0 === t ? "Image" : t,
                        r = e.src,
                        a = i(e, ["alt", "src"]),
                        l = r || qm,
                        u = r ? {
                            objectFit: "cover"
                        } : {
                            display: "inline-block"
                        };
                    return Ce.createElement("img", o({
                        "iris-type": "image",
                        style: o({
                            height: "100%",
                            width: "100%"
                        }, u),
                        alt: n,
                        src: l
                    }, a))
                }

                function Xm(e) {
                    var t, n = e.content,
                        r = i(e, ["content"]),
                        a = {};
                    return "middle" === r.verticalAlign && (a = {
                        display: "flex",
                        alignItems: "center"
                    }), a.opacity = null !== (t = r.opacity) && void 0 !== t ? t : 1, a.textTransform = r.case, Ce.createElement("div", {
                        "iris-type": "text",
                        style: o(o(o({
                            display: "inline-block",
                            width: "100%",
                            height: "100%"
                        }, r), a), {
                            boxSizing: "border-box"
                        })
                    }, n)
                }
                var Jm = w([{
                        type: "box",
                        component: Gm
                    }], [{
                        type: "group",
                        component: function(e) {
                            return e.children
                        }
                    }, {
                        type: "text",
                        component: Xm
                    }, {
                        type: "image",
                        component: Km
                    }, {
                        type: "frame",
                        component: Ym
                    }], !0),
                    Zm = Object.freeze({
                        __proto__: null,
                        builtInComponents: Jm
                    });

                function ey(e) {
                    return p(this, void 0, void 0, (function() {
                        function t(o) {
                            return p(this, void 0, void 0, (function() {
                                var i;
                                return h(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (r.has(o)) return [2, n[o]];
                                            if (!(i = e[o])) throw new Error("Task with id ".concat(o, " not found"));
                                            return i.dep && i.dep.length > 0 ? [4, Promise.all(i.dep.map((function(e) {
                                                return t(e)
                                            })))] : [3, 2];
                                        case 1:
                                            a.sent(), a.label = 2;
                                        case 2:
                                            return n[o] = i.asyncFun(i.params), r.add(o), [2, n[o]]
                                    }
                                }))
                            }))
                        }
                        var n, r, o;
                        return h(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = {}, r = new Set, o = Object.keys(e), [4, Promise.all(o.map((function(e) {
                                        return t(e)
                                    })))];
                                case 1:
                                    return i.sent(), console.log("All tasks executed"), [2]
                            }
                        }))
                    }))
                }

                function ty(e, t, n) {
                    var r = {};
                    return Object.keys(e).forEach((function(o) {
                        var i = e[o],
                            a = i.params,
                            l = i.dep,
                            u = i.model,
                            s = i.action;
                        r[o] = {
                            id: o,
                            asyncFun: t[u][s],
                            params: n(a),
                            dep: null !== l && void 0 !== l ? l : []
                        }
                    })), r
                }

                function ny(e, t, n) {
                    return p(this, void 0, void 0, (function() {
                        return h(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, ey(ty(e, t, n))];
                                case 1:
                                    return [2, r.sent()]
                            }
                        }))
                    }))
                }
                var ry, oy = function() {
                    function e(e) {
                        this.tokens = e
                    }
                    return e.prototype.throwError = function() {
                        throw new Error("read tokens error")
                    }, e.prototype.read = function(e) {
                        void 0 === e && (e = ""), this.tokens.length || this.throwError();
                        var t = this.peek(e);
                        return t || this.throwError(), t
                    }, e.prototype.peek = function(e) {
                        void 0 === e && (e = "");
                        var t = this.tokens,
                            n = t[0];
                        if (!e || e === (n && n.text)) return t.shift()
                    }, e
                }();
                ! function(e) {
                    e.OPERATOR = "OPERATOR", e.END = "END", e.IDENTIFIER = "IDENTIFIER", e.ARRAY = "ARRAY", e.OBJECT = "OBJECT", e.UNARY = "UNARY", e.FUN = "FUN"
                }(ry || (ry = {}));
                var iy = function() {
                        function e(e) {
                            this.left = null, this.right = null, this.value = e
                        }
                        return e
                    }(),
                    ay = {
                        "+": function(e, t, n) {
                            return t(e) + n(e)
                        },
                        "-": function(e, t, n) {
                            return t(e) - n(e)
                        },
                        "*": function(e, t, n) {
                            return t(e) * n(e)
                        },
                        "/": function(e, t, n) {
                            return t(e) / n(e)
                        },
                        "%": function(e, t, n) {
                            return t(e) % n(e)
                        },
                        "===": function(e, t, n) {
                            return t(e) === n(e)
                        },
                        "!==": function(e, t, n) {
                            return t(e) !== n(e)
                        },
                        "==": function(e, t, n) {
                            return t(e) == n(e)
                        },
                        "!=": function(e, t, n) {
                            return t(e) != n(e)
                        },
                        "<": function(e, t, n) {
                            return t(e) < n(e)
                        },
                        ">": function(e, t, n) {
                            return t(e) > n(e)
                        },
                        "<=": function(e, t, n) {
                            return t(e) <= n(e)
                        },
                        ">=": function(e, t, n) {
                            return t(e) >= n(e)
                        },
                        "&&": function(e, t, n) {
                            return t(e) && n(e)
                        },
                        "||": function(e, t, n) {
                            return t(e) || n(e)
                        },
                        "!": function(e, t) {
                            return !t(e)
                        }
                    },
                    ly = {
                        null: function(e) {
                            return null
                        },
                        true: function(e) {
                            return !0
                        },
                        false: function(e) {
                            return !1
                        },
                        undefined: function(e) {}
                    },
                    uy = function() {
                        function e(e) {
                            this.tokens = [], this.ast = null, this.needAst = !1, this.tokens = e, this.tokenReader = new oy(e)
                        }
                        return e.prototype.throwError = function() {
                            throw new Error("parse tokens error")
                        }, e.prototype.parse = function(e) {
                            this.needAst = !!(null === e || void 0 === e ? void 0 : e.needAst);
                            var t, n = this.tokens,
                                r = n[0].text;
                            if (n.length > 0 && "}" !== r && ")" !== r && "]" !== r) {
                                var o = this.expression(),
                                    i = o.calc,
                                    a = o.node;
                                this.needAst && (this.ast = a), t = i
                            }
                            return {
                                calc: function(e) {
                                    return t && t(e)
                                },
                                ast: this.ast
                            }
                        }, e.prototype.expression = function() {
                            var e, t = this.logicalOR(),
                                n = t.node,
                                r = t.calc,
                                o = this.tokenReader.peek("?");
                            if (o) {
                                (e = new iy({
                                    value: o.text,
                                    type: ry.OPERATOR
                                })).left = n;
                                var i = this.expression(),
                                    a = i.calc,
                                    l = i.node;
                                this.tokenReader.read(":");
                                var u = new iy({
                                    value: ":",
                                    type: ry.OPERATOR
                                });
                                e.right = u, u.left = l;
                                var s = this.expression(),
                                    c = s.calc,
                                    f = s.node;
                                return u.right = f, {
                                    calc: function(e) {
                                        return r(e) ? a(e) : c(e)
                                    }
                                }
                            }
                            return {
                                calc: r,
                                node: e = n
                            }
                        }, e.prototype.binary = function(e, t, n) {
                            var r = ay[t];
                            return function(t) {
                                return r(t, e, n)
                            }
                        }, e.prototype.unary = function() {
                            var e, t;
                            if (e = this.tokenReader.peek("+")) {
                                var n = this.primary();
                                return (t = new iy({
                                    value: "+",
                                    type: ry.UNARY
                                })).left = n.node, {
                                    calc: n.calc,
                                    node: t
                                }
                            }
                            if (e = this.tokenReader.peek("-")) {
                                var r = this.unary();
                                return (t = new iy({
                                    value: "-",
                                    type: ry.UNARY
                                })).left = r.node, {
                                    calc: this.binary((function(e) {
                                        return 0
                                    }), e.text, r.calc),
                                    node: t
                                }
                            }
                            if (e = this.tokenReader.peek("!")) {
                                t = new iy({
                                    value: "!",
                                    type: ry.UNARY
                                });
                                var o = ay[e.text],
                                    i = this.unary();
                                return t.left = i.node, {
                                    calc: function(e) {
                                        return o(e, i.calc)
                                    },
                                    node: t
                                }
                            }
                            return this.primary()
                        }, e.prototype.logicalOR = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.logicalAND()
                            }), ["||"])
                        }, e.prototype.logicalAND = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.equality()
                            }), ["&&"])
                        }, e.prototype.getToken = function(e) {
                            for (var t, n = 0; n < e.length; n++)
                                if (t = this.tokenReader.peek(e[n])) return t
                        }, e.prototype.runnerTowParams = function(e, t) {
                            var n, r = e(),
                                o = r.calc,
                                i = this.getToken(t);
                            i ? (n = new iy({
                                value: i.text,
                                type: ry.OPERATOR
                            })).left = r.node : n = r.node;
                            for (var a = n; i;) {
                                var l = e();
                                if (o = this.binary(o, i.text, l.calc), i = this.getToken(t)) {
                                    var u = new iy({
                                        value: i.text,
                                        type: ry.OPERATOR
                                    });
                                    a.right = u, (a = u).left = l.node
                                } else a.right = l.node
                            }
                            return {
                                calc: o,
                                node: n
                            }
                        }, e.prototype.equality = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.relational()
                            }), ["==", "!=", "===", "!=="])
                        }, e.prototype.relational = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.additive()
                            }), ["<", ">", "<=", ">="])
                        }, e.prototype.additive = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.multiplicative()
                            }), ["+", "-"])
                        }, e.prototype.multiplicative = function() {
                            var e = this;
                            return this.runnerTowParams((function() {
                                return e.unary()
                            }), ["*", "/", "%"])
                        }, e.prototype.primary = function() {
                            var e, t, n = this.tokens[0];
                            if (this.tokenReader.peek("(")) {
                                var r = this.expression();
                                e = l = r.calc, t = d = r.node, this.tokenReader.read(")")
                            } else if (this.tokenReader.peek("[")) {
                                var o = this.array();
                                e = l = o.calc, t = d = o.node
                            } else if (this.tokenReader.peek("{")) {
                                var i = this.object();
                                e = l = i.calc, t = d = i.node
                            } else if (n.identifier && n.text in ly) e = ly[this.tokenReader.read().text], t = new iy({
                                value: n.text,
                                type: ry.END
                            });
                            else if (n.identifier) {
                                var a = this.identifier(),
                                    l = a.calc;
                                t = d = a.node, e = l
                            } else if (n.constant) {
                                var u = this.constant();
                                l = u.calc, t = d = u.node, e = l
                            } else this.throwError();
                            for (var s, c = this.tokenReader.peek("(") || this.tokenReader.peek("[") || this.tokenReader.peek("."); c;) {
                                if ("(" === c.text) {
                                    var f = this.functionCall(e, s, c),
                                        d = (l = f.calc, f.node);
                                    e = l, s = null, t.right = d
                                } else if ("[" === c.text) {
                                    s = e;
                                    var p = this.objectIndex(e, c);
                                    l = p.calc, d = p.node, e = l, t.right = d
                                } else {
                                    s = e;
                                    var h = this.fieldAccess(e);
                                    l = h.calc, d = h.node, e = l, t.right = d
                                }
                                c = this.tokenReader.peek("(") || this.tokenReader.peek("[") || this.tokenReader.peek(".")
                            }
                            return {
                                calc: e,
                                node: t
                            }
                        }, e.prototype.fieldAccess = function(e) {
                            var t = new iy({
                                    value: ".",
                                    type: ry.IDENTIFIER
                                }),
                                n = this.identifier(),
                                r = n.calc,
                                o = n.node;
                            return t.right = o, {
                                calc: function(t) {
                                    var n = e(t);
                                    return n && r(n)
                                },
                                node: t
                            }
                        }, e.prototype.objectIndex = function(e, t) {
                            var n = new iy({
                                    value: t.text,
                                    type: ry.IDENTIFIER
                                }),
                                r = this.expression(),
                                o = r.calc,
                                i = r.node;
                            return n.left = i, this.tokenReader.read("]"), {
                                calc: function(t) {
                                    var n = e(t),
                                        r = o(t) + "";
                                    return n && n[r]
                                },
                                node: n
                            }
                        }, e.prototype.functionCall = function(e, t, n) {
                            var r = [];
                            if (")" !== this.tokens[0].text)
                                do {
                                    r.push(this.expression())
                                } while (this.tokenReader.peek(","));
                            return this.tokenReader.read(")"), {
                                calc: function(n) {
                                    var o = t && t(n),
                                        i = e(n, o);
                                    return i && i.apply(o, r.length ? r.map((function(e) {
                                        return (0, e.calc)(n)
                                    })) : null)
                                },
                                node: new iy({
                                    value: n.text,
                                    type: ry.FUN
                                })
                            }
                        }, e.prototype.array = function() {
                            var e = [],
                                t = this.tokens[0],
                                n = new iy({
                                    value: ",",
                                    type: ry.ARRAY
                                }),
                                r = n;
                            if ("]" !== t.text)
                                do {
                                    if ("]" === this.tokens[0].text) break;
                                    var o = this.expression(),
                                        i = o.calc,
                                        a = o.node;
                                    r && (r.left = a, r = a), e.push(i)
                                } while (this.tokenReader.peek(","));
                            return this.tokenReader.read("]"), {
                                calc: function(t) {
                                    return e.map((function(e) {
                                        return e(t)
                                    }))
                                },
                                node: n
                            }
                        }, e.prototype.object = function() {
                            var e = [],
                                t = [],
                                n = this.tokens[0],
                                r = new iy({
                                    value: ".",
                                    type: ry.OBJECT
                                }),
                                o = r;
                            if ("}" !== n.text)
                                do {
                                    if ("}" === (n = this.tokens[0]).text) break;
                                    (n = this.tokenReader.read()).constant ? e.push(n.value) : n.identifier ? e.push(n.text) : this.throwError(), this.tokenReader.read(":");
                                    var i = this.expression(),
                                        a = i.calc,
                                        l = i.node;
                                    o && (o.left = l, o = l), t.push(a)
                                } while (this.tokenReader.peek(","));
                            return this.tokenReader.read("}"), {
                                calc: function(n) {
                                    for (var r = {}, o = 0, i = t.length; o < i; o++) r[e[o]] = t[o](n);
                                    return r
                                },
                                node: r
                            }
                        }, e.prototype.identifier = function() {
                            for (var e = this.tokenReader.read().text, t = this.tokens[0], n = this.tokens[1], r = this.tokens[2]; t && "." === t.text && n && n.identifier && r && "(" !== r.text;) e += this.tokenReader.read().text + this.tokenReader.read().text, t = this.tokens[0], n = this.tokens[1], r = this.tokens[2];
                            return {
                                calc: function(t) {
                                    void 0 === t && (t = {});
                                    for (var n = e.split("."), r = 0; n.length > 1; r++) t = t[n.shift()];
                                    return t[n.shift()]
                                },
                                node: new iy({
                                    value: e,
                                    type: ry.IDENTIFIER
                                })
                            }
                        }, e.prototype.constant = function() {
                            var e = this.tokenReader.read(),
                                t = e.value;
                            return {
                                calc: function(e) {
                                    return t
                                },
                                node: new iy({
                                    value: e.text,
                                    type: ry.END
                                })
                            }
                        }, e
                    }(),
                    sy = {
                        n: "\n",
                        f: "\f",
                        r: "\r",
                        t: "\t",
                        v: "\v"
                    };

                function cy(e) {
                    return e >= "0" && e <= "9" && "string" === typeof e
                }

                function fy(e) {
                    return "-" === e || "+" === e || cy(e)
                }

                function dy(e) {
                    return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || "_" === e || "$" === e
                }
                var py = function() {
                        function e(e) {
                            this.tokens = [], this.index = 0, this.expressionStr = e, this.length = e.length
                        }
                        return e.prototype.throwError = function(e) {
                            throw void 0 === e && (e = ""), new Error("invalid expression: ".concat(this.expressionStr).concat(e))
                        }, e.prototype.emit = function(e) {
                            this.tokens.push(e)
                        }, e.prototype.handleString = function(e) {
                            for (var t, n = this.index, r = this.length, o = ++n, i = this.expressionStr, a = !1, l = ""; n < r;) {
                                var u = i.charAt(n);
                                if (a) {
                                    if ("u" === u) {
                                        var s = i.substring(n + 1, n + 5);
                                        s.match(/[\da-f]{4}/i) || this.throwError(", invalid unicode escape [\\u".concat(s, "]")), n += 4, l += String.fromCharCode(parseInt(s, 16))
                                    } else l += sy[u] || u;
                                    a = !1
                                } else if ("\\" === u) a = !0;
                                else {
                                    if (u === e) {
                                        n++, t = {
                                            index: o,
                                            constant: !0,
                                            text: e + l + e,
                                            value: l
                                        };
                                        break
                                    }
                                    l += u
                                }
                                n++
                            }
                            t ? this.emit(t) : this.throwError(), this.index = n
                        }, e.prototype.handleNumber = function() {
                            for (var e = this.index, t = this.index, n = this.expressionStr, r = ""; t < this.length;) {
                                var o = n.charAt(t).toLowerCase();
                                if ("." === o || cy(o)) r += o;
                                else {
                                    var i = n.charAt(t + 1);
                                    if ("e" === o && fy(i)) r += o;
                                    else if (fy(o) && i && cy(i) && "e" === r.charAt(r.length - 1)) r += o;
                                    else {
                                        if (!fy(o) || i && cy(i) || "e" != r.charAt(r.length - 1)) break;
                                        this.throwError("[number]")
                                    }
                                }
                                t++
                            }
                            this.emit({
                                index: e,
                                constant: !0,
                                text: r,
                                value: Number(r)
                            }), this.index = t
                        }, e.prototype.handleIdent = function() {
                            for (var e = this.index; this.index < this.length;) {
                                var t = this.expressionStr.charAt(this.index);
                                if (!dy(t) && !cy(t)) break;
                                this.index++
                            }
                            this.emit({
                                index: e,
                                text: this.expressionStr.slice(e, this.index),
                                identifier: !0
                            })
                        }, e.prototype.handelOperator = function(e) {
                            var t = e + this.expressionStr.charAt(this.index + 1),
                                n = t + this.expressionStr.charAt(this.index + 2),
                                r = ay[e],
                                o = ay[t],
                                i = ay[n];
                            if (r || o || i) {
                                var a = i ? n : o ? t : e;
                                this.emit({
                                    index: this.index,
                                    text: a,
                                    operator: !0
                                }), this.index += a.length
                            } else this.throwError("[operator]")
                        }, e.prototype.getState = function(e) {
                            var t = this;
                            return '"' === e || "'" === e ? function() {
                                t.handleString(e)
                            } : cy(e) || "." === e && cy(this.expressionStr.charAt(this.index + 1)) ? function() {
                                t.handleNumber()
                            } : dy(e) ? function() {
                                t.handleIdent()
                            } : "(){}[].,;:?".indexOf(e) >= 0 ? function() {
                                t.emit({
                                    index: t.index,
                                    text: e
                                }), t.index++
                            } : " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || "\xa0" === e ? function() {
                                t.index++
                            } : function() {
                                t.handelOperator(e)
                            }
                        }, e.prototype.getTokens = function() {
                            for (; this.index < this.length;) {
                                var e = this.expressionStr.charAt(this.index);
                                this.getState(e)()
                            }
                            return this.tokens
                        }, e
                    }(),
                    hy = function() {
                        function e(e, t) {
                            void 0 === t && (t = !1);
                            var n = new py(e).getTokens(),
                                r = new uy(n).parse({
                                    needAst: t
                                }),
                                o = r.calc,
                                i = r.ast;
                            this.ast = i, this.calc = o
                        }
                        return e.prototype.calculate = function(e) {
                            return void 0 === e && (e = void 0), this.calc(e)
                        }, e.prototype.getAst = function() {
                            return this.ast
                        }, e
                    }(),
                    gy = {
                        expressionGroups: /{{(.+?)}}/g,
                        singleExpression: /^{{(((?!{{|}}).)*)}}$/
                    },
                    vy = function(e) {
                        try {
                            return "[object Object]" === Object.prototype.toString.call(e)
                        } catch (t) {
                            return !1
                        }
                    },
                    my = function() {
                        function e(e) {
                            var t, n = e.globalData,
                                r = e.localData,
                                i = void 0 === r ? {} : r,
                                a = e.nodeId;
                            this.expressionRuntimes = {}, this.proxyDataMap = new WeakMap, this.errors = [], this.context = {
                                $data: o({}, n),
                                $localData: o({}, i),
                                $customProps: o({}, null !== (t = i.$customProps) && void 0 !== t ? t : {}),
                                $nodeId: a
                            }, this.context.$data.$customProps = this.context.$customProps
                        }
                        return e.prototype.getExpression = function(e) {
                            return this.expressionRuntimes[e] || (this.expressionRuntimes[e] = new hy(e)), this.expressionRuntimes[e]
                        }, e.prototype.getProxyData = function(e) {
                            var t = this,
                                n = e.data,
                                r = new Proxy(n, {
                                    get: function(e, n, r) {
                                        var o = Reflect.get(e, n, r);
                                        return Array.isArray(o) || vy(o) ? t.getProxyData({
                                            data: o
                                        }) : "string" === typeof o ? t.resolveStatement(o) : o
                                    }
                                });
                            return this.proxyDataMap.set(r, n), r
                        }, e.prototype.transformExpression = function(e) {
                            var t = this.getExpression(e).calculate(this.getProxyData({
                                    data: this.context
                                })),
                                n = this.proxyDataMap.get(t);
                            return null !== n && void 0 !== n ? n : t
                        }, e.prototype.resolveStatement = function(e) {
                            var t = this;
                            if (!new RegExp(gy.expressionGroups).test(e)) return e;
                            var n = new RegExp(gy.singleExpression).exec(e);
                            if (n) try {
                                return this.transformExpression(n[1])
                            } catch (r) {
                                return
                            }
                            return e.replace(new RegExp(gy.expressionGroups), (function(e, n) {
                                var o;
                                try {
                                    return null !== (o = t.transformExpression(n)) && void 0 !== o ? o : ""
                                } catch (r) {
                                    return ""
                                }
                            }))
                        }, e.prototype.resolve = function(e) {
                            var t = this;
                            if (!new RegExp(gy.expressionGroups).test(e)) return e;
                            var n = new RegExp(gy.singleExpression).exec(e);
                            if (n) {
                                this.errors[0] = [n[0], null];
                                try {
                                    return this.transformExpression(n[1])
                                } catch (o) {
                                    return void(this.errors[0][1] = o)
                                }
                            }
                            var r = -1;
                            return e.replace(new RegExp(gy.expressionGroups), (function(e, n) {
                                var i;
                                ++r, t.errors[r] = [e, null];
                                try {
                                    return null !== (i = t.transformExpression(n)) && void 0 !== i ? i : ""
                                } catch (o) {
                                    return t.errors[r][1] = o, ""
                                }
                            }))
                        }, e.prototype.getErrors = function() {
                            return this.errors
                        }, e
                    }(),
                    yy = Object.freeze({
                        __proto__: null,
                        Statement: my
                    }),
                    by = function() {
                        function e(e, t) {
                            this._models = {}, this._nodeModels = new Map, this._localeCallback = null, this._componentCallbackMap = {}, this._childrenCallbackMap = {}, this._locale = "en", this._emptyState = {}, this._schema = e, this.resourceManager = t, this.onLocaleChange = this.onLocaleChange.bind(this), this.translate = this.translate.bind(this), this.onComponentConfigChange = this.onComponentConfigChange.bind(this), this.onChildrenChange = this.onChildrenChange.bind(this), this.getLocale = this.getLocale.bind(this), this.getGlobalConfigStyle = this.getGlobalConfigStyle.bind(this), this.getI18nFallback = this.getI18nFallback.bind(this), this.getIrisStates = this.getIrisStates.bind(this), this.onIrisStates = this.onIrisStates.bind(this), this.getTemplateComponentConfig = this.getTemplateComponentConfig.bind(this), this.onTemplateComponentConfigChange = this.onTemplateComponentConfigChange.bind(this)
                        }
                        return e.prototype._registerCallbackById = function(e, t, n) {
                            return n[e] = t,
                                function() {
                                    delete n[e]
                                }
                        }, e.prototype.init = function() {
                            var e;
                            return p(this, void 0, void 0, (function() {
                                return h(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, null === (e = this.resourceManager.i18nService) || void 0 === e ? void 0 : e.init()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.setLocale = function(e) {
                            this._locale = e, this._localeCallback && this._localeCallback()
                        }, e.prototype.getLocale = function() {
                            return this._locale
                        }, e.prototype.onLocaleChange = function(e) {
                            var t = this;
                            return this._localeCallback = e,
                                function() {
                                    t._localeCallback = null
                                }
                        }, e.prototype.translate = function(e, t) {
                            var n;
                            return null === (n = this.resourceManager.i18nService) || void 0 === n ? void 0 : n.get(e, t)
                        }, e.prototype.onComponentConfigChange = function(e, t) {
                            return this._registerCallbackById(e, t, this._componentCallbackMap)
                        }, e.prototype.getComponentConfigById = function(e) {
                            return this._schema.nodeConfigs[e]
                        }, e.prototype.getChildrenByParentId = function(e) {
                            return this._schema.nodeTree[e]
                        }, e.prototype.onChildrenChange = function(e, t) {
                            return this._registerCallbackById(e, t, this._childrenCallbackMap)
                        }, e.prototype.getGlobalConfigStyle = function() {
                            return this._schema.config.style
                        }, e.prototype.onGlobalConfigStyleChange = function() {
                            return cd("onGlobalConfigStyleChange"),
                                function() {
                                    cd("remove onGlobalConfigStyleChange")
                                }
                        }, e.prototype.getI18nFallback = function() {
                            return this._schema.i18n
                        }, e.prototype.onI18nFallbackChange = function() {
                            return cd("onI18nFallbackChange"),
                                function() {
                                    cd("remove onI18nFallbackChange")
                                }
                        }, e.prototype.getIrisStates = function() {
                            var e;
                            return null !== (e = this._schema.states) && void 0 !== e ? e : this._emptyState
                        }, e.prototype.onIrisStates = function() {
                            return cd("onVariables"),
                                function() {
                                    cd("remove onVariables")
                                }
                        }, e.prototype.getStore = function() {
                            return Pp.getStore()
                        }, e.prototype.onStoreChange = function(e) {
                            return Pp.onStoreChange(e)
                        }, e.prototype.getVariable = function(e) {
                            var t = e.statement,
                                n = e.globalData,
                                r = e.localData,
                                o = e.nodeId;
                            return new my({
                                globalData: n,
                                localData: r,
                                nodeId: o
                            }).resolve(t)
                        }, e.prototype.getResponsiveConfig = function() {
                            var e;
                            return null === (e = this._schema.config) || void 0 === e ? void 0 : e.responsiveConfig
                        }, e.prototype.onResponsiveChange = function() {
                            return cd("onResponsiveChange"),
                                function() {
                                    cd("onResponsiveChange")
                                }
                        }, e.prototype.getDevice = function() {}, e.prototype.onDeviceChange = function() {
                            return cd("onDeviceChange"),
                                function() {
                                    cd("onDeviceChange")
                                }
                        }, e.prototype.getTemplateComponentConfig = function(e, t) {
                            var n, r, o;
                            return null === (o = null === (r = null === (n = this._schema.templateComponents) || void 0 === n ? void 0 : n[null !== e && void 0 !== e ? e : ""]) || void 0 === r ? void 0 : r.nodeConfigs) || void 0 === o ? void 0 : o[null !== t && void 0 !== t ? t : ""]
                        }, e.prototype.onTemplateComponentConfigChange = function() {
                            return cd("onTemplateComponentConfigChange"),
                                function() {
                                    cd("onTemplateComponentConfigChange")
                                }
                        }, e.prototype.setModels = function(e) {
                            console.debug("IRIS render runtime setModels"), Object.assign(this._models, e)
                        }, e.prototype.getModels = function() {
                            return console.debug("IRIS render runtime getModels"), o({}, this._models)
                        }, e.prototype.getModel = function(e) {
                            var t;
                            return console.debug("IRIS render runtime getModel", e), null !== (t = this._models[e]) && void 0 !== t ? t : null
                        }, e.prototype.getModelFactory = function(e) {
                            return this.resourceManager.getModelFactory(e)
                        }, e.prototype.setNodeModels = function(e, t) {
                            this._nodeModels.set(e, t)
                        }, e.prototype.getNodeModels = function(e) {
                            var t;
                            return null !== (t = this._nodeModels.get(e)) && void 0 !== t ? t : null
                        }, e.prototype.getNodeModel = function(e, t) {
                            var n, r = this._nodeModels.get(e);
                            return null !== (n = null === r || void 0 === r ? void 0 : r[t]) && void 0 !== n ? n : null
                        }, e.prototype.getTemplateComponent = function(e) {
                            var t, n;
                            return (null === (t = this._schema) || void 0 === t ? void 0 : t.templateComponents) ? null === (n = this._schema) || void 0 === n ? void 0 : n.templateComponents[null !== e && void 0 !== e ? e : ""] : null
                        }, e
                    }(),
                    _y = Dv({
                        initialState: void 0
                    });

                function wy(e) {
                    var t = e.children,
                        n = e.Component,
                        r = e.componentConfig,
                        i = e.style,
                        a = r.baseProps,
                        l = a.style,
                        u = a.hoverStyle,
                        s = Ce.useState(!1),
                        c = s[0],
                        f = s[1],
                        d = Ce.useCallback((function() {
                            return f(!0)
                        }), []),
                        p = Ce.useCallback((function() {
                            return f(!1)
                        }), []),
                        h = Ce.useMemo((function() {
                            return o(o(c ? o(o({}, l), u) : o({}, l), i), {
                                boxSizing: "border-box"
                            })
                        }), [c, l, u, i]),
                        g = "iris-".concat(r.id);
                    return Ce.createElement("div", {
                        id: g,
                        key: g,
                        style: h,
                        onMouseEnter: d,
                        onMouseLeave: p
                    }, Ce.createElement(n, o({}, r.props), t))
                }
                var Sy = function(e) {
                        var t = e.componentConfig,
                            n = e.children,
                            r = e.resourceManager,
                            a = i(e, ["componentConfig", "children", "resourceManager"]),
                            l = r.getComponent(t);
                        if (!l) throw rd("000201"), "component" === t.type ? new Error("current component ".concat(t.componentId, " is not registered")) : new Error("current component ".concat(t.type, ":").concat(t.container, "  is not registered"));
                        return Ce.createElement(wy, o({
                            Component: l,
                            componentConfig: t
                        }, a), n)
                    },
                    ky = "IRIS render runtime has not been initialized!";

                function Cy(e) {
                    var t = e.children,
                        n = e.context,
                        r = e.resourceManager;
                    return Ce.useEffect((function() {
                        return r.runRuntimeMount(n),
                            function() {
                                try {
                                    return r.runRuntimeUnMount()
                                } catch (e) {
                                    rd("000211"), cd("runtime unmount failed ".concat(e.message))
                                }
                            }
                    }), []), Ce.createElement(Ce.Fragment, null, t)
                }
                var xy = function() {
                        function e() {
                            this._schema = null, this._renderStart = 0, this._preRenderStart = 0, this._performance = {
                                preRenderDuration: 0,
                                registerAssetsDuration: 0,
                                renderDuration: 0
                            }, this._resourceManager = new sp, this.resourceManager.registerComponents(Jm)
                        }
                        return Object.defineProperty(e.prototype, "pf", {
                            get: function() {
                                return this._performance
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "schema", {
                            get: function() {
                                return this._schema
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "resourceManager", {
                            get: function() {
                                return this._resourceManager
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function(e) {
                            e ? e.config || rd("000004") : rd("000003"), this.resourceManager.addResourceInfo(e.resources)
                        }, e.prototype.initIrisApp = function(e, t) {
                            var n, r, i, a = t.context;
                            return p(this, void 0, void 0, (function() {
                                var t, l, u, s, c, f, d, p;
                                return h(this, (function(h) {
                                    switch (h.label) {
                                        case 0:
                                            return this.resourceManager.registerModulesToRender(), this._preRenderStart = Date.now(), this.init(e), this._runtime = new by(e, this.resourceManager), [4, this._runtime.init()];
                                        case 1:
                                            return h.sent(), Object.keys(this.resourceManager.uikit || {}).length > 0 ? [4, this.resourceManager.runUikit((null === (n = null === e || void 0 === e ? void 0 : e.config) || void 0 === n ? void 0 : n.uikit) || {})] : [3, 3];
                                        case 2:
                                            h.sent(), h.label = 3;
                                        case 3:
                                            return t = "", l = {}, Object.keys(this.resourceManager.getRuntime() || {}).length > 0 ? [4, this.resourceManager.runRuntime(_y, !0, {
                                                context: a,
                                                runtimeConfigs: (null === (r = e.config) || void 0 === r ? void 0 : r.runtime) || {}
                                            })] : [3, 5];
                                        case 4:
                                            h.sent(), u = this.resourceManager.getRuntimeModels(), l = o(o({}, l), u), this._runtime.setModels(u), h.label = 5;
                                        case 5:
                                            return Object.keys(e.modelConfigs || {}).length > 0 ? (s = this.getGlobalStates(), c = void 0, c = null === (i = window.__IRIS_INITIAL_STATE_FROM_SERVER__) || void 0 === i ? void 0 : i.global, f = this.getModelDefinitions({
                                                modelConfigs: e.modelConfigs || {},
                                                globalStates: s,
                                                initialStatesFromServer: c
                                            }), d = this.initializeGlobalModels(f, _y), l = o(o({}, l), d), this._runtime.setModels(d), e.config && e.config.onInit ? [4, this.executeComponentInit({
                                                onInit: e.config.onInit,
                                                globalModelInstances: d,
                                                globalStates: s
                                            })] : [3, 7]) : [3, 7];
                                        case 6:
                                            h.sent(), p = {}, Object.entries(f).forEach((function(e) {
                                                var t = e[0],
                                                    n = e[1].initialServerState;
                                                n && n.forEach((function(e) {
                                                    var n, r;
                                                    p[t] = ((n = {})[e] = null === (r = null === d || void 0 === d ? void 0 : d[t]) || void 0 === r ? void 0 : r[e], n)
                                                }))
                                            })), t = Object.keys(p).length ? "window.__IRIS_INITIAL_STATE_FROM_SERVER__=window.__IRIS_INITIAL_STATE_FROM_SERVER__||{};window.__IRIS_INITIAL_STATE_FROM_SERVER__.global=".concat(JSON.stringify(p)) : "", h.label = 7;
                                        case 7:
                                            return Object.keys(l).length > 0 && Tp(l), [2, {
                                                processRenderString: this.resourceManager.getRuntimeProcessRenderString.bind(this.resourceManager),
                                                initialStatesFromServerFragment: t
                                            }]
                                    }
                                }))
                            }))
                        }, e.prototype.renderIrisApp = function(e) {
                            var t = this,
                                n = e.context,
                                r = e.device,
                                a = void 0 === r ? "unknown" : r,
                                l = this.resourceManager.getRuntimeTransformers(n);
                            return this._renderStart = Date.now(), this._performance.preRenderDuration = this._renderStart - this._preRenderStart, Ce.createElement(Cy, {
                                context: n,
                                resourceManager: this.resourceManager
                            }, Ce.createElement(Vm, {
                                transformers: l,
                                runtime: this._runtime,
                                id: pd,
                                device: a,
                                renderItem: function(e) {
                                    var n = e.componentConfig,
                                        r = e.children,
                                        a = i(e, ["componentConfig", "children"]);
                                    return Sy(o({
                                        componentConfig: n,
                                        children: r,
                                        resourceManager: t.resourceManager
                                    }, a))
                                },
                                resourceManager: this.resourceManager,
                                context: n
                            }))
                        }, e.prototype.registerComponent = function(e, t) {
                            return this.resourceManager.registerComponent([e, t])
                        }, e.prototype.registerI18nService = function(e, t) {
                            return this.resourceManager.registerI18nService([e, t])
                        }, e.prototype.registerRuntime = function(e, t) {
                            return this.resourceManager.registerRuntime([e, t])
                        }, e.prototype.registerUikit = function(e, t) {
                            return this.resourceManager.registerUikit([e, t])
                        }, e.prototype.registerModel = function(e, t) {
                            return this.resourceManager.registerModel([e, t])
                        }, e.prototype.registerBundle = function(e) {
                            return this.resourceManager.registerBundle(e)
                        }, e.prototype.computedPerformance = function() {
                            this._performance.renderDuration = Date.now() - this._renderStart;
                            var e = 0,
                                t = this.resourceManager.performance();
                            Object.keys(t || {}).forEach((function(n) {
                                e += t[n]
                            })), this._performance.registerAssetsDuration = e
                        }, e.prototype.getModels = function() {
                            if (!this._runtime) throw new Error(ky);
                            return this._runtime.getModels()
                        }, e.prototype.getModel = function(e) {
                            if (!this._runtime) throw new Error(ky);
                            return this._runtime.getModel(e)
                        }, e.prototype.getNodeModels = function(e) {
                            if (!this._runtime) throw new Error(ky);
                            return this._runtime.getNodeModels(e)
                        }, e.prototype.getGlobalStates = function() {
                            var e, t;
                            return Object.entries(null !== (t = null === (e = this._runtime) || void 0 === e ? void 0 : e.getIrisStates()) && void 0 !== t ? t : {}).reduce((function(e, t) {
                                var n, r, o = t[0],
                                    i = t[1];
                                return e[o] = null !== (r = null !== (n = null === i || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : null === i || void 0 === i ? void 0 : i.body) && void 0 !== r ? r : i, e
                            }), o({}, this.getModels()))
                        }, e.prototype.getNodeModel = function(e, t) {
                            if (!this._runtime) throw new Error(ky);
                            return this._runtime.getNodeModel(e, t)
                        }, e.prototype.initNodeModels = function(e, t) {
                            var n;
                            return p(this, void 0, void 0, (function() {
                                var r, o, i, a, l = this;
                                return h(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return r = e.nodeConfigs, o = {}, i = {}, a = [], Object.keys(r).forEach((function(e) {
                                                var n, u, s, c = r[e],
                                                    f = null === c || void 0 === c ? void 0 : c.modelConfigs,
                                                    d = c.rootNodeId,
                                                    p = {};
                                                if (d && (p = null !== (n = r[d].props) && void 0 !== n ? n : p), f) {
                                                    var h = l.getGlobalStates(),
                                                        g = Object.entries(null !== (u = null === c || void 0 === c ? void 0 : c.states) && void 0 !== u ? u : {}).reduce((function(e, t) {
                                                            var n, r, o = t[0],
                                                                i = t[1];
                                                            return e[o] = null !== (r = null !== (n = null === i || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : null === i || void 0 === i ? void 0 : i.body) && void 0 !== r ? r : i, e
                                                        }), {}),
                                                        v = "iris-".concat(e),
                                                        m = l.getModelDefinitions({
                                                            modelConfigs: f,
                                                            globalStates: h,
                                                            nodeStates: g,
                                                            customProps: p,
                                                            initialStatesFromServer: null === (s = null === t || void 0 === t ? void 0 : t.initialStatesFromServer) || void 0 === s ? void 0 : s[e],
                                                            nodeId: v
                                                        }),
                                                        y = l.initializeModels(m, e);
                                                    o[e] = y, i[e] = m, c.onInit && a.push(l.executeComponentInit({
                                                        onInit: c.onInit,
                                                        modelInstances: y,
                                                        customProps: p,
                                                        globalStates: h,
                                                        nodeStates: g,
                                                        nodeId: v
                                                    }))
                                                }
                                            })), [4, Promise.all(a)];
                                        case 1:
                                            return u.sent(), null === (n = null === t || void 0 === t ? void 0 : t.getInitialStatesFromServer) || void 0 === n || n.call(t, o, i), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.getModelDefinitions = function(e) {
                            var t = this,
                                n = e.modelConfigs,
                                r = e.globalStates,
                                i = e.nodeStates,
                                a = e.customProps,
                                l = e.initialStatesFromServer,
                                u = e.nodeId;
                            return Object.entries(n).reduce((function(e, n) {
                                var s, c = n[0],
                                    f = n[1],
                                    d = t._resourceManager.getModelFactory(f.modelId);
                                if (d) {
                                    var p = Object.entries(null !== (s = f.params) && void 0 !== s ? s : {}).reduce((function(n, l) {
                                        var s = l[0],
                                            c = l[1];
                                        try {
                                            n[s] = "string" === typeof c ? t._runtime.getVariable({
                                                statement: c,
                                                globalData: o(i ? {} : o({}, e), r),
                                                localData: i ? o(o(o({}, e), i), {
                                                    $customProps: a
                                                }) : void 0,
                                                nodeId: u
                                            }) : c
                                        } catch (f) {
                                            console.error("IRIS model initialization error (expression):", f), delete n[s]
                                        }
                                        return n
                                    }), {});
                                    e[c] = {
                                        model: d(p, {
                                            initialServerState: null === l || void 0 === l ? void 0 : l[c]
                                        }),
                                        initialServerState: f.initialServerState
                                    }
                                }
                                return e
                            }), {})
                        }, e.prototype.initializeGlobalModels = function(e, t) {
                            return Object.entries(e).reduce((function(e, n) {
                                var r = n[0],
                                    o = n[1];
                                return e[r] = t.getModel(r, o.model), e
                            }), {})
                        }, e.prototype.initializeModels = function(e, t) {
                            var n = Dv(),
                                r = Object.entries(e).reduce((function(e, t) {
                                    var r = t[0],
                                        o = t[1],
                                        i = n.getModel(r, o.model);
                                    return e[r] = i, e
                                }), {});
                            return this._runtime.setNodeModels(t, r), r
                        }, e.prototype.executeComponentInit = function(e) {
                            var t = e.onInit,
                                n = e.modelInstances,
                                r = void 0 === n ? {} : n,
                                i = e.globalStates,
                                a = void 0 === i ? {} : i,
                                l = e.nodeStates,
                                u = e.customProps,
                                s = e.globalModelInstances,
                                c = void 0 === s ? {} : s,
                                f = e.nodeId;
                            return p(this, void 0, void 0, (function() {
                                var e = this;
                                return h(this, (function(n) {
                                    return [2, ny(t, o(o({}, c), r), (function(t) {
                                        return t.map((function(t) {
                                            return "string" === typeof t ? e._runtime.getVariable({
                                                statement: t,
                                                globalData: o(o({}, c), a),
                                                localData: l ? o(o(o({}, r), l), {
                                                    $customProps: u
                                                }) : void 0,
                                                nodeId: f
                                            }) : t
                                        }))
                                    }))]
                                }))
                            }))
                        }, e
                    }(),
                    Iy = function(e) {
                        var t = e.resolve,
                            n = e.children;
                        return Ce.useEffect((function() {
                            t()
                        })), Ce.createElement(Ce.Fragment, null, n)
                    };
                window.__IRIS_GLOBAL_MODULES__ = {
                    React: Ce,
                    ReactDOM: Xf
                }, window.__IRIS_RENDER_SERVICE__ = {
                    defineModel: fh
                };
                var Ey = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r(t, e), t.prototype.unmount = function() {
                        try {
                            this._root.unmount()
                        } catch (e) {
                            rd("000202"), cd("app unmount failed ".concat(e.message))
                        }
                    }, t.prototype.mountTo = function(e, t) {
                        return p(this, void 0, void 0, (function() {
                            var n, r, i, a, l, u, s, c = this;
                            return h(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return n = Cd(), this.resourceManager.collectingDependencies(), this.resourceManager.addResourceInfo(e.resources), [4, gp(e.resources)];
                                    case 1:
                                        return f.sent(), this.resourceManager.secondaryRegister(), r = Jf.createRoot(t), this._root = r, (s = {})[yd] = n, i = s, a = {}, [4, this.initIrisApp(e, {
                                            context: a
                                        })];
                                    case 2:
                                        return f.sent(), l = {}, u = new Promise((function(e) {
                                            l.resolve = e
                                        })).then((function() {
                                            c.computedPerformance()
                                        })), [4, this.initNodeModels(e)];
                                    case 3:
                                        return f.sent(), r.render(Ce.createElement(Iy, {
                                            resolve: l.resolve
                                        }, Ce.createElement("div", o({
                                            id: md
                                        }, i), this.renderIrisApp({
                                            context: a
                                        })))), [4, u];
                                    case 4:
                                        return f.sent(), [2]
                                }
                            }))
                        }))
                    }, t.prototype.performance = function() {
                        return o({}, this.pf)
                    }, t
                }(xy);
                const My = (e, t) => t ? e ? .replace(/http(s)?:\/\/.+?\//i, t) : e;
                class Ry {
                    ir;
                    options;
                    constructor(e) {
                        this.ir = new Ey, this.options = e
                    }
                    async mountTo(e, t) {
                        Object.keys(e.resources).forEach((t => {
                            const n = e.resources[t];
                            n.packageUrl = My(n.packageUrl, this.options ? .assetPrefix), n.entry = My(n.entry, this.options ? .assetPrefix)
                        })), await this.ir.mountTo(ep(e), t)
                    }
                    unmount() {
                        this.ir.unmount()
                    }
                    getModels() {
                        return this.ir.getModels()
                    }
                    getModel(e) {
                        return this.ir.getModel(e)
                    }
                    getNodeModels(e) {
                        return this.ir.getNodeModels(e)
                    }
                    getNodeModel(e, t) {
                        return this.ir.getNodeModel(e, t)
                    }
                }
                var Oy = A(z),
                    Ty = F((function(e, t) {
                        function n(e) {
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                function t(o) {
                                    return Oy.__awaiter(this, void 0, void 0, (function() {
                                        var i;
                                        return Oy.__generator(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (r.has(o)) return [2, n[o]];
                                                    if (!(i = e[o])) throw new Error("Task with id ".concat(o, " not found"));
                                                    return i.dep && i.dep.length > 0 ? [4, Promise.all(i.dep.map((function(e) {
                                                        return t(e)
                                                    })))] : [3, 2];
                                                case 1:
                                                    a.sent(), a.label = 2;
                                                case 2:
                                                    return n[o] = i.asyncFun(i.params), r.add(o), [2, n[o]]
                                            }
                                        }))
                                    }))
                                }
                                var n, r, o;
                                return Oy.__generator(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = {}, r = new Set, o = Object.keys(e), [4, Promise.all(o.map((function(e) {
                                                return t(e)
                                            })))];
                                        case 1:
                                            return i.sent(), console.log("All tasks executed"), [2]
                                    }
                                }))
                            }))
                        }

                        function r(e, t, n) {
                            var r = {};
                            return Object.keys(e).forEach((function(o) {
                                var i = e[o],
                                    a = i.params,
                                    l = i.dep,
                                    u = i.model,
                                    s = i.action;
                                r[o] = {
                                    id: o,
                                    asyncFun: t[u][s],
                                    params: n(a),
                                    dep: null !== l && void 0 !== l ? l : []
                                }
                            })), r
                        }

                        function o(e, t, o) {
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                return Oy.__generator(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, n(r(e, t, o))];
                                        case 1:
                                            return [2, i.sent()]
                                    }
                                }))
                            }))
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.executeOnInit = void 0, t.executeOnInit = o
                    })),
                    Ny = A(jp),
                    Py = A(yy),
                    Dy = Ny,
                    jy = function() {
                        function e(e, t) {
                            this._models = {}, this._nodeModels = new Map, this._localeCallback = null, this._componentCallbackMap = {}, this._childrenCallbackMap = {}, this._locale = "en", this._emptyState = {}, this._schema = e, this.resourceManager = t, this.onLocaleChange = this.onLocaleChange.bind(this), this.translate = this.translate.bind(this), this.onComponentConfigChange = this.onComponentConfigChange.bind(this), this.onChildrenChange = this.onChildrenChange.bind(this), this.getLocale = this.getLocale.bind(this), this.getGlobalConfigStyle = this.getGlobalConfigStyle.bind(this), this.getI18nFallback = this.getI18nFallback.bind(this), this.getIrisStates = this.getIrisStates.bind(this), this.onIrisStates = this.onIrisStates.bind(this), this.getTemplateComponentConfig = this.getTemplateComponentConfig.bind(this), this.onTemplateComponentConfigChange = this.onTemplateComponentConfigChange.bind(this)
                        }
                        return e.prototype._registerCallbackById = function(e, t, n) {
                            return n[e] = t,
                                function() {
                                    delete n[e]
                                }
                        }, e.prototype.init = function() {
                            var e;
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                return Oy.__generator(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, null === (e = this.resourceManager.i18nService) || void 0 === e ? void 0 : e.init()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.setLocale = function(e) {
                            this._locale = e, this._localeCallback && this._localeCallback()
                        }, e.prototype.getLocale = function() {
                            return this._locale
                        }, e.prototype.onLocaleChange = function(e) {
                            var t = this;
                            return this._localeCallback = e,
                                function() {
                                    t._localeCallback = null
                                }
                        }, e.prototype.translate = function(e, t) {
                            var n;
                            return null === (n = this.resourceManager.i18nService) || void 0 === n ? void 0 : n.get(e, t)
                        }, e.prototype.onComponentConfigChange = function(e, t) {
                            return this._registerCallbackById(e, t, this._componentCallbackMap)
                        }, e.prototype.getComponentConfigById = function(e) {
                            return this._schema.nodeConfigs[e]
                        }, e.prototype.getChildrenByParentId = function(e) {
                            return this._schema.nodeTree[e]
                        }, e.prototype.onChildrenChange = function(e, t) {
                            return this._registerCallbackById(e, t, this._childrenCallbackMap)
                        }, e.prototype.getGlobalConfigStyle = function() {
                            return this._schema.config.style
                        }, e.prototype.onGlobalConfigStyleChange = function() {
                            return (0, Dy.debugLog)("onGlobalConfigStyleChange"),
                                function() {
                                    (0, Dy.debugLog)("remove onGlobalConfigStyleChange")
                                }
                        }, e.prototype.getI18nFallback = function() {
                            return this._schema.i18n
                        }, e.prototype.onI18nFallbackChange = function() {
                            return (0, Dy.debugLog)("onI18nFallbackChange"),
                                function() {
                                    (0, Dy.debugLog)("remove onI18nFallbackChange")
                                }
                        }, e.prototype.getIrisStates = function() {
                            var e;
                            return null !== (e = this._schema.states) && void 0 !== e ? e : this._emptyState
                        }, e.prototype.onIrisStates = function() {
                            return (0, Dy.debugLog)("onVariables"),
                                function() {
                                    (0, Dy.debugLog)("remove onVariables")
                                }
                        }, e.prototype.getStore = function() {
                            return Ny.storeContext.getStore()
                        }, e.prototype.onStoreChange = function(e) {
                            return Ny.storeContext.onStoreChange(e)
                        }, e.prototype.getVariable = function(e) {
                            var t = e.statement,
                                n = e.globalData,
                                r = e.localData,
                                o = e.nodeId;
                            return new Py.Statement({
                                globalData: n,
                                localData: r,
                                nodeId: o
                            }).resolve(t)
                        }, e.prototype.getResponsiveConfig = function() {
                            var e;
                            return null === (e = this._schema.config) || void 0 === e ? void 0 : e.responsiveConfig
                        }, e.prototype.onResponsiveChange = function() {
                            return (0, Dy.debugLog)("onResponsiveChange"),
                                function() {
                                    (0, Dy.debugLog)("onResponsiveChange")
                                }
                        }, e.prototype.getDevice = function() {}, e.prototype.onDeviceChange = function() {
                            return (0, Dy.debugLog)("onDeviceChange"),
                                function() {
                                    (0, Dy.debugLog)("onDeviceChange")
                                }
                        }, e.prototype.getTemplateComponentConfig = function(e, t) {
                            var n, r, o;
                            return null === (o = null === (r = null === (n = this._schema.templateComponents) || void 0 === n ? void 0 : n[null !== e && void 0 !== e ? e : ""]) || void 0 === r ? void 0 : r.nodeConfigs) || void 0 === o ? void 0 : o[null !== t && void 0 !== t ? t : ""]
                        }, e.prototype.onTemplateComponentConfigChange = function() {
                            return (0, Dy.debugLog)("onTemplateComponentConfigChange"),
                                function() {
                                    (0, Dy.debugLog)("onTemplateComponentConfigChange")
                                }
                        }, e.prototype.setModels = function(e) {
                            console.debug("IRIS render runtime setModels"), Object.assign(this._models, e)
                        }, e.prototype.getModels = function() {
                            return console.debug("IRIS render runtime getModels"), Oy.__assign({}, this._models)
                        }, e.prototype.getModel = function(e) {
                            var t;
                            return console.debug("IRIS render runtime getModel", e), null !== (t = this._models[e]) && void 0 !== t ? t : null
                        }, e.prototype.getModelFactory = function(e) {
                            return this.resourceManager.getModelFactory(e)
                        }, e.prototype.setNodeModels = function(e, t) {
                            this._nodeModels.set(e, t)
                        }, e.prototype.getNodeModels = function(e) {
                            var t;
                            return null !== (t = this._nodeModels.get(e)) && void 0 !== t ? t : null
                        }, e.prototype.getNodeModel = function(e, t) {
                            var n, r = this._nodeModels.get(e);
                            return null !== (n = null === r || void 0 === r ? void 0 : r[t]) && void 0 !== n ? n : null
                        }, e.prototype.getTemplateComponent = function(e) {
                            var t, n;
                            return (null === (t = this._schema) || void 0 === t ? void 0 : t.templateComponents) ? null === (n = this._schema) || void 0 === n ? void 0 : n.templateComponents[null !== e && void 0 !== e ? e : ""] : null
                        }, e
                    }(),
                    Ly = jy,
                    zy = Object.defineProperty({
                        default: Ly
                    }, "__esModule", {
                        value: !0
                    }),
                    Ay = A(Fv),
                    Fy = F((function(e, t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.store = void 0, t.store = (0, Ay.doura)({
                            initialState: void 0
                        })
                    })),
                    Uy = F((function(e, t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.renderItem = void 0;
                        var n = Oy.__importStar(Ce);

                        function r(e) {
                            var t = e.children,
                                r = e.Component,
                                o = e.componentConfig,
                                i = e.style,
                                a = o.baseProps,
                                l = a.style,
                                u = a.hoverStyle,
                                s = (0, n.useState)(!1),
                                c = s[0],
                                f = s[1],
                                d = (0, n.useCallback)((function() {
                                    return f(!0)
                                }), []),
                                p = (0, n.useCallback)((function() {
                                    return f(!1)
                                }), []),
                                h = (0, n.useMemo)((function() {
                                    return c ? Oy.__assign(Oy.__assign(Oy.__assign(Oy.__assign({}, l), u), i), {
                                        boxSizing: "border-box"
                                    }) : Oy.__assign(Oy.__assign(Oy.__assign({}, l), i), {
                                        boxSizing: "border-box"
                                    })
                                }), [c, l, u, i]),
                                g = "iris-".concat(o.id);
                            return n.default.createElement("div", {
                                id: g,
                                key: g,
                                style: h,
                                onMouseEnter: d,
                                onMouseLeave: p
                            }, n.default.createElement(r, Oy.__assign({}, o.props), t))
                        }
                        var o = function(e) {
                            var t = e.componentConfig,
                                o = e.children,
                                i = e.resourceManager,
                                a = Oy.__rest(e, ["componentConfig", "children", "resourceManager"]),
                                l = i.getComponent(t);
                            if (!l) throw (0, Ny.errorLog)("000201"), "component" === t.type ? new Error("current component ".concat(t.componentId, " is not registered")) : new Error("current component ".concat(t.type, ":").concat(t.container, "  is not registered"));
                            return n.default.createElement(r, Oy.__assign({
                                Component: l,
                                componentConfig: t
                            }, a), o)
                        };
                        t.renderItem = o
                    })),
                    Vy = A(Bm),
                    By = A(Zm),
                    $y = Oy.__importStar(Ce),
                    Qy = Oy.__importDefault(zy),
                    Hy = "IRIS render runtime has not been initialized!";

                function Wy(e) {
                    var t = e.children,
                        n = e.context,
                        r = e.resourceManager;
                    return (0, $y.useEffect)((function() {
                        return r.runRuntimeMount(n),
                            function() {
                                try {
                                    return r.runRuntimeUnMount()
                                } catch (e) {
                                    (0, Ny.errorLog)("000211"), (0, Ny.debugLog)("runtime unmount failed ".concat(e.message))
                                }
                            }
                    }), []), $y.default.createElement($y.default.Fragment, null, t)
                }
                var Gy = function() {
                        function e() {
                            this._schema = null, this._renderStart = 0, this._preRenderStart = 0, this._performance = {
                                preRenderDuration: 0,
                                registerAssetsDuration: 0,
                                renderDuration: 0
                            }, this._resourceManager = new Ny.ResourceManager, this.resourceManager.registerComponents(By.builtInComponents)
                        }
                        return Object.defineProperty(e.prototype, "pf", {
                            get: function() {
                                return this._performance
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "schema", {
                            get: function() {
                                return this._schema
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "resourceManager", {
                            get: function() {
                                return this._resourceManager
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function(e) {
                            e ? e.config || (0, Ny.errorLog)("000004") : (0, Ny.errorLog)("000003"), this.resourceManager.addResourceInfo(e.resources)
                        }, e.prototype.initIrisApp = function(e, t) {
                            var n, r, o, i = t.context;
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                var t, a, l, u, s, c, f, d;
                                return Oy.__generator(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            return this.resourceManager.registerModulesToRender(), this._preRenderStart = Date.now(), this.init(e), this._runtime = new Qy.default(e, this.resourceManager), [4, this._runtime.init()];
                                        case 1:
                                            return p.sent(), Object.keys(this.resourceManager.uikit || {}).length > 0 ? [4, this.resourceManager.runUikit((null === (n = null === e || void 0 === e ? void 0 : e.config) || void 0 === n ? void 0 : n.uikit) || {})] : [3, 3];
                                        case 2:
                                            p.sent(), p.label = 3;
                                        case 3:
                                            return t = "", a = {}, Object.keys(this.resourceManager.getRuntime() || {}).length > 0 ? [4, this.resourceManager.runRuntime(Fy.store, !0, {
                                                context: i,
                                                runtimeConfigs: (null === (r = e.config) || void 0 === r ? void 0 : r.runtime) || {}
                                            })] : [3, 5];
                                        case 4:
                                            p.sent(), l = this.resourceManager.getRuntimeModels(), a = Oy.__assign(Oy.__assign({}, a), l), this._runtime.setModels(l), p.label = 5;
                                        case 5:
                                            return Object.keys(e.modelConfigs || {}).length > 0 ? (u = this.getGlobalStates(), s = void 0, s = null === (o = window.__IRIS_INITIAL_STATE_FROM_SERVER__) || void 0 === o ? void 0 : o.global, c = this.getModelDefinitions({
                                                modelConfigs: e.modelConfigs || {},
                                                globalStates: u,
                                                initialStatesFromServer: s
                                            }), f = this.initializeGlobalModels(c, Fy.store), a = Oy.__assign(Oy.__assign({}, a), f), this._runtime.setModels(f), e.config && e.config.onInit ? [4, this.executeComponentInit({
                                                onInit: e.config.onInit,
                                                globalModelInstances: f,
                                                globalStates: u
                                            })] : [3, 7]) : [3, 7];
                                        case 6:
                                            p.sent(), d = {}, Object.entries(c).forEach((function(e) {
                                                var t = e[0],
                                                    n = e[1].initialServerState;
                                                n && n.forEach((function(e) {
                                                    var n, r;
                                                    d[t] = ((n = {})[e] = null === (r = null === f || void 0 === f ? void 0 : f[t]) || void 0 === r ? void 0 : r[e], n)
                                                }))
                                            })), t = Object.keys(d).length ? "window.__IRIS_INITIAL_STATE_FROM_SERVER__=window.__IRIS_INITIAL_STATE_FROM_SERVER__||{};window.__IRIS_INITIAL_STATE_FROM_SERVER__.global=".concat(JSON.stringify(d)) : "", p.label = 7;
                                        case 7:
                                            return Object.keys(a).length > 0 && (0, Ny.subscribe)(a), [2, {
                                                processRenderString: this.resourceManager.getRuntimeProcessRenderString.bind(this.resourceManager),
                                                initialStatesFromServerFragment: t
                                            }]
                                    }
                                }))
                            }))
                        }, e.prototype.renderIrisApp = function(e) {
                            var t = this,
                                n = e.context,
                                r = e.device,
                                o = void 0 === r ? "unknown" : r,
                                i = this.resourceManager.getRuntimeTransformers(n);
                            return this._renderStart = Date.now(), this._performance.preRenderDuration = this._renderStart - this._preRenderStart, $y.default.createElement(Wy, {
                                context: n,
                                resourceManager: this.resourceManager
                            }, $y.default.createElement(Vy.RenderCore, {
                                transformers: i,
                                runtime: this._runtime,
                                id: Ny.NODE_ROOT_ID,
                                device: o,
                                renderItem: function(e) {
                                    var n = e.componentConfig,
                                        r = e.children,
                                        o = Oy.__rest(e, ["componentConfig", "children"]);
                                    return (0, Uy.renderItem)(Oy.__assign({
                                        componentConfig: n,
                                        children: r,
                                        resourceManager: t.resourceManager
                                    }, o))
                                },
                                resourceManager: this.resourceManager,
                                context: n
                            }))
                        }, e.prototype.registerComponent = function(e, t) {
                            return this.resourceManager.registerComponent([e, t])
                        }, e.prototype.registerI18nService = function(e, t) {
                            return this.resourceManager.registerI18nService([e, t])
                        }, e.prototype.registerRuntime = function(e, t) {
                            return this.resourceManager.registerRuntime([e, t])
                        }, e.prototype.registerUikit = function(e, t) {
                            return this.resourceManager.registerUikit([e, t])
                        }, e.prototype.registerModel = function(e, t) {
                            return this.resourceManager.registerModel([e, t])
                        }, e.prototype.registerBundle = function(e) {
                            return this.resourceManager.registerBundle(e)
                        }, e.prototype.computedPerformance = function() {
                            this._performance.renderDuration = Date.now() - this._renderStart;
                            var e = 0,
                                t = this.resourceManager.performance();
                            Object.keys(t || {}).forEach((function(n) {
                                e += t[n]
                            })), this._performance.registerAssetsDuration = e
                        }, e.prototype.getModels = function() {
                            if (!this._runtime) throw new Error(Hy);
                            return this._runtime.getModels()
                        }, e.prototype.getModel = function(e) {
                            if (!this._runtime) throw new Error(Hy);
                            return this._runtime.getModel(e)
                        }, e.prototype.getNodeModels = function(e) {
                            if (!this._runtime) throw new Error(Hy);
                            return this._runtime.getNodeModels(e)
                        }, e.prototype.getGlobalStates = function() {
                            var e, t;
                            return Object.entries(null !== (t = null === (e = this._runtime) || void 0 === e ? void 0 : e.getIrisStates()) && void 0 !== t ? t : {}).reduce((function(e, t) {
                                var n, r, o = t[0],
                                    i = t[1];
                                return e[o] = null !== (r = null !== (n = null === i || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : null === i || void 0 === i ? void 0 : i.body) && void 0 !== r ? r : i, e
                            }), Oy.__assign({}, this.getModels()))
                        }, e.prototype.getNodeModel = function(e, t) {
                            if (!this._runtime) throw new Error(Hy);
                            return this._runtime.getNodeModel(e, t)
                        }, e.prototype.initNodeModels = function(e, t) {
                            var n;
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                var r, o, i, a, l = this;
                                return Oy.__generator(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return r = e.nodeConfigs, o = {}, i = {}, a = [], Object.keys(r).forEach((function(e) {
                                                var n, u, s, c = r[e],
                                                    f = null === c || void 0 === c ? void 0 : c.modelConfigs,
                                                    d = c.rootNodeId,
                                                    p = {};
                                                if (d && (p = null !== (n = r[d].props) && void 0 !== n ? n : p), f) {
                                                    var h = l.getGlobalStates(),
                                                        g = Object.entries(null !== (u = null === c || void 0 === c ? void 0 : c.states) && void 0 !== u ? u : {}).reduce((function(e, t) {
                                                            var n, r, o = t[0],
                                                                i = t[1];
                                                            return e[o] = null !== (r = null !== (n = null === i || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : null === i || void 0 === i ? void 0 : i.body) && void 0 !== r ? r : i, e
                                                        }), {}),
                                                        v = "iris-".concat(e),
                                                        m = l.getModelDefinitions({
                                                            modelConfigs: f,
                                                            globalStates: h,
                                                            nodeStates: g,
                                                            customProps: p,
                                                            initialStatesFromServer: null === (s = null === t || void 0 === t ? void 0 : t.initialStatesFromServer) || void 0 === s ? void 0 : s[e],
                                                            nodeId: v
                                                        }),
                                                        y = l.initializeModels(m, e);
                                                    o[e] = y, i[e] = m, c.onInit && a.push(l.executeComponentInit({
                                                        onInit: c.onInit,
                                                        modelInstances: y,
                                                        customProps: p,
                                                        globalStates: h,
                                                        nodeStates: g,
                                                        nodeId: v
                                                    }))
                                                }
                                            })), [4, Promise.all(a)];
                                        case 1:
                                            return u.sent(), null === (n = null === t || void 0 === t ? void 0 : t.getInitialStatesFromServer) || void 0 === n || n.call(t, o, i), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.getModelDefinitions = function(e) {
                            var t = this,
                                n = e.modelConfigs,
                                r = e.globalStates,
                                o = e.nodeStates,
                                i = e.customProps,
                                a = e.initialStatesFromServer,
                                l = e.nodeId;
                            return Object.entries(n).reduce((function(e, n) {
                                var u, s = n[0],
                                    c = n[1],
                                    f = t._resourceManager.getModelFactory(c.modelId);
                                if (f) {
                                    var d = Object.entries(null !== (u = c.params) && void 0 !== u ? u : {}).reduce((function(n, a) {
                                        var u = a[0],
                                            s = a[1];
                                        try {
                                            n[u] = "string" === typeof s ? t._runtime.getVariable({
                                                statement: s,
                                                globalData: o ? Oy.__assign({}, r) : Oy.__assign(Oy.__assign({}, e), r),
                                                localData: o ? Oy.__assign(Oy.__assign(Oy.__assign({}, e), o), {
                                                    $customProps: i
                                                }) : void 0,
                                                nodeId: l
                                            }) : s
                                        } catch (c) {
                                            console.error("IRIS model initialization error (expression):", c), delete n[u]
                                        }
                                        return n
                                    }), {});
                                    e[s] = {
                                        model: f(d, {
                                            initialServerState: null === a || void 0 === a ? void 0 : a[s]
                                        }),
                                        initialServerState: c.initialServerState
                                    }
                                }
                                return e
                            }), {})
                        }, e.prototype.initializeGlobalModels = function(e, t) {
                            return Object.entries(e).reduce((function(e, n) {
                                var r = n[0],
                                    o = n[1];
                                return e[r] = t.getModel(r, o.model), e
                            }), {})
                        }, e.prototype.initializeModels = function(e, t) {
                            var n = (0, Ay.doura)(),
                                r = Object.entries(e).reduce((function(e, t) {
                                    var r = t[0],
                                        o = t[1],
                                        i = n.getModel(r, o.model);
                                    return e[r] = i, e
                                }), {});
                            return this._runtime.setNodeModels(t, r), r
                        }, e.prototype.executeComponentInit = function(e) {
                            var t = e.onInit,
                                n = e.modelInstances,
                                r = void 0 === n ? {} : n,
                                o = e.globalStates,
                                i = void 0 === o ? {} : o,
                                a = e.nodeStates,
                                l = e.customProps,
                                u = e.globalModelInstances,
                                s = void 0 === u ? {} : u,
                                c = e.nodeId;
                            return Oy.__awaiter(this, void 0, void 0, (function() {
                                var e = this;
                                return Oy.__generator(this, (function(n) {
                                    return [2, (0, Ty.executeOnInit)(t, Oy.__assign(Oy.__assign({}, s), r), (function(t) {
                                        return t.map((function(t) {
                                            return "string" === typeof t ? e._runtime.getVariable({
                                                statement: t,
                                                globalData: Oy.__assign(Oy.__assign({}, s), i),
                                                localData: a ? Oy.__assign(Oy.__assign(Oy.__assign({}, r), a), {
                                                    $customProps: l
                                                }) : void 0,
                                                nodeId: c
                                            }) : t
                                        }))
                                    }))]
                                }))
                            }))
                        }, e
                    }(),
                    Yy = Gy,
                    qy = Object.defineProperty({
                        default: Yy
                    }, "__esModule", {
                        value: !0
                    }),
                    Ky = F((function(e, t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ClientRender = void 0;
                        var n = Oy.__importDefault(qy),
                            r = Oy.__importStar(Ce),
                            o = Oy.__importStar(Xf);
                        window.__IRIS_GLOBAL_MODULES__ = {
                            React: r,
                            ReactDOM: o
                        }, window.__IRIS_RENDER_SERVICE__ = {
                            defineModel: Ay.defineModel
                        };
                        var i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return Oy.__extends(t, e), t.prototype.unmount = function() {}, t.prototype.hydrate = function(e) {
                                var t;
                                return Oy.__awaiter(this, void 0, void 0, (function() {
                                    var n, o, i, a = this;
                                    return Oy.__generator(this, (function(l) {
                                        switch (l.label) {
                                            case 0:
                                                if (!(n = document.getElementById(Ny.IRIS_ROOT_ID))) throw new Error("[iris] Root element cannot be found on the document.");
                                                return o = {}, [4, this.initIrisApp(e, {
                                                    context: o
                                                })];
                                            case 1:
                                                return l.sent(), [4, this.initNodeModels(e, {
                                                    initialStatesFromServer: null === (t = window.__IRIS_INITIAL_STATE_FROM_SERVER__) || void 0 === t ? void 0 : t.nodes
                                                })];
                                            case 2:
                                                return l.sent(), [4, this.renderIrisApp({
                                                    context: o
                                                })];
                                            case 3:
                                                return i = l.sent(), [2, new Promise((function(e, t) {
                                                    var o = null,
                                                        l = a,
                                                        u = function(n) {
                                                            function r(e) {
                                                                return n.call(this, e) || this
                                                            }
                                                            return Oy.__extends(r, n), r.prototype.componentDidMount = function() {
                                                                l.computedPerformance(), e(o)
                                                            }, r.prototype.componentDidCatch = function(e, n) {
                                                                l.computedPerformance(), t(e)
                                                            }, r.prototype.render = function() {
                                                                return i
                                                            }, r
                                                        }(r.Component);
                                                    o = (0, Jf.hydrateRoot)(n, r.createElement(u, null))
                                                }))]
                                        }
                                    }))
                                }))
                            }, t.prototype.performance = function() {
                                return Oy.__assign({}, this.pf)
                            }, t
                        }(n.default);
                        t.ClientRender = i
                    }));
                const Xy = "csr-000002";
                class Jy {
                    store;
                    constructor() {
                        const e = Math.round(performance ? .timeOrigin || Date.now());
                        this.store = {
                            timestamp: e,
                            renderTaskStart: e,
                            sdkVersion: Xy,
                            event: "client-hydrate",
                            containerType: "Browser",
                            reqId: "",
                            fileId: "",
                            fileVersion: "",
                            device: Dp(window ? .navigator ? .userAgent || ""),
                            initAssetsDuration: performance ? .now() || 0,
                            registerAssetsDuration: null,
                            preRenderDuration: null,
                            renderTaskDuration: null,
                            renderDuration: null,
                            customParams: {}
                        }
                    }
                    renderTaskStart() {
                        console.log("renderTaskStart"), this.store.renderTaskStart = Date.now()
                    }
                    end({
                        registerAssetsDuration: e,
                        preRenderDuration: t,
                        renderDuration: n
                    }) {
                        try {
                            const o = document.getElementById(md);
                            if (this.store.registerAssetsDuration = e, this.store.preRenderDuration = t, this.store.renderDuration = n, this.store.renderTaskDuration = Date.now() - this.store.renderTaskStart, this.store.duration = Math.round(performance ? .now() || Date.now() - this.store.timestamp), this.store.error = !!nd.error, this.store.errorCode = nd.errorCode, o) {
                                this.store.fileId = o ? .getAttribute(bd) || "", this.store.fileVersion = o ? .getAttribute(_d) || "", this.store.reqId = o ? .getAttribute(yd) || Cd(), this.store.projectName = o ? .getAttribute(wd) || "";
                                try {
                                    this.store.customParams = JSON.parse(o ? .getAttribute(Sd) || "{}")
                                } catch (r) {}
                            } else this.store.error = !0, this.store.errorMessage = "unable to find iris root"
                        } catch (o) {
                            console.error(o), this.store.error = !0, this.store.errorMessage = o.message
                        }
                        return cd(`ClientHydratePerformanceRecorder trackData: ${JSON.stringify(this.store)}`), this.store
                    }
                }
                class Zy {
                    store;
                    constructor() {
                        this.store = {
                            timestamp: Math.round(performance ? .timeOrigin || Date.now()),
                            sdkVersion: Xy,
                            event: "client-init",
                            containerType: "Browser",
                            reqId: "",
                            fileId: "",
                            fileVersion: "",
                            device: Dp(window ? .navigator ? .userAgent || ""),
                            error: !1,
                            customParams: {}
                        }
                    }
                    end() {
                        try {
                            this.store.duration = Math.round(performance ? .now() || Date.now() - this.store.timestamp);
                            const t = document.getElementById(md);
                            if (t) {
                                this.store.fileId = t.getAttribute(bd) || "", this.store.fileVersion = t.getAttribute(_d) || "", this.store.reqId = t.getAttribute(yd) || Cd(), this.store.projectName = t.getAttribute(wd) || "";
                                try {
                                    this.store.customParams = JSON.parse(t.getAttribute(Sd) || "{}")
                                } catch (e) {}
                            } else this.store.error = !0, this.store.errorMessage = "unable to find iris root"
                        } catch (t) {
                            console.error(t), this.store.error = !0, this.store.errorMessage = t.message
                        }
                        return cd(`ClientInitPerformanceRecorder trackData: ${JSON.stringify(this.store)}`), this.store
                    }
                }
                const eb = e => -1 === [void 0, null, ""].indexOf(e),
                    tb = () => {
                        const {
                            hostname: e
                        } = window.location, t = e.split(".");
                        return t.length > 2 ? t.slice(-2).join(".") : e
                    },
                    nb = e => {
                        try {
                            return decodeURIComponent(e)
                        } catch {
                            return e
                        }
                    },
                    rb = e => {
                        if (eb(e)) {
                            const t = `${e}=`.trim(),
                                {
                                    cookie: n
                                } = window.document || {},
                                r = (n || "").split(";");
                            for (let e = 0; e < r.length; e++) {
                                const n = (r[e] || "").trim();
                                if (0 === n.indexOf(t)) {
                                    const e = n.slice(t.length).trim();
                                    return nb('"' === e[0] ? e.slice(1, -1) : e)
                                }
                            }
                        }
                        return null
                    },
                    ob = (e, t, n = 365, r = !0) => {
                        const o = ["path=/"];
                        r && o.unshift(`Domain=${tb()}`), Number.isNaN(+n) || o.unshift(`Max-Age=${Math.floor(86400*n)}`), o.unshift(`${e}=${encodeURIComponent(t)}`), window.document.cookie = o.join("; ")
                    },
                    ib = () => {
                        let e = rb("bnc-uuid");
                        return e || (e = Cd(), ob("bnc-uuid", e, 1825, !0)), e
                    };
                class ab {
                    deviceId = ib();
                    track(e, t) {
                        if ("client-init" === e) {
                            const e = t,
                                {
                                    timestamp: n,
                                    sdkVersion: r,
                                    containerType: o,
                                    device: i,
                                    duration: a,
                                    fileId: l,
                                    fileVersion: u,
                                    reqId: s,
                                    projectName: c,
                                    error: f,
                                    errorMessage: d,
                                    customParams: p
                                } = e,
                                h = {
                                    id: `${Date.now()}-${Cd()}`,
                                    type: "polaris-web",
                                    biz: "",
                                    ts: n,
                                    data: JSON.stringify({
                                        b: "iris",
                                        t: "IRIS-CLIENT-INIT",
                                        p: window.location.href,
                                        project_name: c,
                                        error: f,
                                        errorMessage: d,
                                        duration: a,
                                        container_type: o,
                                        req_id: s,
                                        file_id: l,
                                        file_version: u,
                                        sdk_version: r,
                                        custom_params: p,
                                        device: i
                                    })
                                };
                            this.post("https://api.saasexch.com/bapi/fe/pda/v1/submit/web/batch?project=cc1ljun9gpbp8ciciolg", {
                                deviceId: this.deviceId,
                                sdkver: "1.0",
                                platformType: 3,
                                events: [h]
                            }).catch((e => {
                                cd(`trackMetricsWithPolarisWeb error: ${e.message}`)
                            }))
                        }
                        if ("client-hydrate" === e) {
                            const e = t,
                                {
                                    timestamp: n,
                                    sdkVersion: r,
                                    containerType: o,
                                    device: i,
                                    initAssetsDuration: a,
                                    registerAssetsDuration: l,
                                    preRenderDuration: u,
                                    renderDuration: s,
                                    renderTaskDuration: c,
                                    duration: f,
                                    fileId: d,
                                    fileVersion: p,
                                    reqId: h,
                                    projectName: g,
                                    error: v,
                                    errorMessage: m,
                                    customParams: y
                                } = e,
                                b = {
                                    id: `${Date.now()}-${Cd()}`,
                                    type: "polaris-web",
                                    biz: "",
                                    ts: n,
                                    data: JSON.stringify({
                                        b: "iris",
                                        t: "IRIS-CLIENT-HYDRATE",
                                        p: window.location.href,
                                        project_name: g,
                                        error: v,
                                        errorMessage: m,
                                        duration: f,
                                        container_type: o,
                                        req_id: h,
                                        file_id: d,
                                        file_version: p,
                                        sdk_version: r,
                                        custom_params: y,
                                        device: i,
                                        init_assets_duration: a,
                                        register_assets_duration: l,
                                        pre_render_duration: u,
                                        render_duration: s,
                                        render_task_duration: c
                                    })
                                };
                            this.post("https://api.saasexch.com/bapi/fe/pda/v1/submit/web/batch?project=cc1ljun9gpbp8ciciolg", {
                                deviceId: this.deviceId,
                                sdkver: "1.0",
                                platformType: 3,
                                events: [b]
                            }).catch((e => {
                                cd(`trackMetricsWithPolarisWeb error: ${e.message}`)
                            }))
                        }
                    }
                    async post(e, t) {
                        const n = JSON.stringify(t);
                        if ("function" === typeof window.navigator ? .sendBeacon) {
                            const t = new Blob([n], {
                                type: "text/plain"
                            });
                            navigator.sendBeacon(e, t)
                        } else if ("function" === typeof window.fetch) fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "text/plain"
                            },
                            body: n,
                            keepalive: !0
                        });
                        else if ("function" === typeof window.XMLHttpRequest) {
                            const t = new window.XMLHttpRequest;
                            t.open("POST", e, !0), t.setRequestHeader("Content-Type", "text/plain"), t.send(n)
                        }
                    }
                }
                const lb = new ab;
                class ub {
                    clientRender;
                    recorder;
                    constructor() {
                        const e = (new Zy).end();
                        lb.track(e.event, e), this.recorder = new Jy, this.recorder.renderTaskStart(), this.clientRender = new Ky.ClientRender
                    }
                    hydrate(e) {
                        this.clientRender.hydrate(e).catch((e => {
                            console.error("Iris hydrate error", e)
                        })).finally((() => {
                            const e = this.recorder.end(this.clientRender.performance());
                            lb.track(e.event, e)
                        }))
                    }
                    unmount() {
                        return this.clientRender.unmount()
                    }
                }
                e.ClientRender = ub, e.IrisRender = Ry, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        }
    }
]);
//# debugId=b02c5852-8971-5f98-b315-ab3530cd2559