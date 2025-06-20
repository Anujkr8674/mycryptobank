/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
(function(d, r) {
    "object" === typeof exports && "undefined" !== typeof module ? r(exports) : "function" === typeof define && define.amd ? define(["exports"], r) : (d = d || self, r(d.React = {}))
})(this, function(d) {
    function r(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function w(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = ba;
        this.updater = c || ca
    }

    function da() {}

    function L(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = ba;
        this.updater = c || ca
    }

    function ea(a, b, c) {
        var g, e = {},
            fa = null,
            d = null;
        if (null != b)
            for (g in void 0 !== b.ref && (d = b.ref), void 0 !== b.key && (fa = "" + b.key), b) ha.call(b, g) && !ia.hasOwnProperty(g) && (e[g] = b[g]);
        var h = arguments.length - 2;
        if (1 === h) e.children = c;
        else if (1 < h) {
            for (var k = Array(h), f = 0; f < h; f++) k[f] = arguments[f + 2];
            e.children = k
        }
        if (a && a.defaultProps)
            for (g in h = a.defaultProps,
                h) void 0 === e[g] && (e[g] = h[g]);
        return {
            $$typeof: x,
            type: a,
            key: fa,
            ref: d,
            props: e,
            _owner: M.current
        }
    }

    function va(a, b) {
        return {
            $$typeof: x,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner
        }
    }

    function N(a) {
        return "object" === typeof a && null !== a && a.$$typeof === x
    }

    function wa(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + a).replace(/[=:]/g, function(a) {
            return b[a]
        })
    }

    function ja(a, b, c, g) {
        if (C.length) {
            var e = C.pop();
            e.result = a;
            e.keyPrefix = b;
            e.func = c;
            e.context = g;
            e.count = 0;
            return e
        }
        return {
            result: a,
            keyPrefix: b,
            func: c,
            context: g,
            count: 0
        }
    }

    function ka(a) {
        a.result = null;
        a.keyPrefix = null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > C.length && C.push(a)
    }

    function O(a, b, c, g) {
        var e = typeof a;
        if ("undefined" === e || "boolean" === e) a = null;
        var d = !1;
        if (null === a) d = !0;
        else switch (e) {
            case "string":
            case "number":
                d = !0;
                break;
            case "object":
                switch (a.$$typeof) {
                    case x:
                    case xa:
                        d = !0
                }
        }
        if (d) return c(g, a, "" === b ? "." + P(a, 0) : b), 1;
        d = 0;
        b = "" === b ? "." : b + ":";
        if (Array.isArray(a))
            for (var f = 0; f < a.length; f++) {
                e = a[f];
                var h = b + P(e, f);
                d += O(e, h, c, g)
            } else if (null === a ||
                "object" !== typeof a ? h = null : (h = la && a[la] || a["@@iterator"], h = "function" === typeof h ? h : null), "function" === typeof h)
                for (a = h.call(a), f = 0; !(e = a.next()).done;) e = e.value, h = b + P(e, f++), d += O(e, h, c, g);
            else if ("object" === e) throw c = "" + a, Error(r(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
        return d
    }

    function Q(a, b, c) {
        return null == a ? 0 : O(a, "", b, c)
    }

    function P(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? wa(a.key) : b.toString(36)
    }

    function ya(a, b, c) {
        a.func.call(a.context, b,
            a.count++)
    }

    function za(a, b, c) {
        var g = a.result,
            e = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a) ? R(a, g, c, function(a) {
            return a
        }) : null != a && (N(a) && (a = va(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(ma, "$&/") + "/") + c)), g.push(a))
    }

    function R(a, b, c, g, e) {
        var d = "";
        null != c && (d = ("" + c).replace(ma, "$&/") + "/");
        b = ja(b, d, g, e);
        Q(a, za, b);
        ka(b)
    }

    function t() {
        var a = na.current;
        if (null === a) throw Error(r(321));
        return a
    }

    function S(a, b) {
        var c = a.length;
        a.push(b);
        a: for (;;) {
            var g = c - 1 >>> 1,
                e = a[g];
            if (void 0 !==
                e && 0 < D(e, b)) a[g] = b, a[c] = e, c = g;
            else break a
        }
    }

    function n(a) {
        a = a[0];
        return void 0 === a ? null : a
    }

    function E(a) {
        var b = a[0];
        if (void 0 !== b) {
            var c = a.pop();
            if (c !== b) {
                a[0] = c;
                a: for (var g = 0, e = a.length; g < e;) {
                    var d = 2 * (g + 1) - 1,
                        f = a[d],
                        h = d + 1,
                        k = a[h];
                    if (void 0 !== f && 0 > D(f, c)) void 0 !== k && 0 > D(k, f) ? (a[g] = k, a[h] = c, g = h) : (a[g] = f, a[d] = c, g = d);
                    else if (void 0 !== k && 0 > D(k, c)) a[g] = k, a[h] = c, g = h;
                    else break a
                }
            }
            return b
        }
        return null
    }

    function D(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id
    }

    function F(a) {
        for (var b = n(u); null !==
            b;) {
            if (null === b.callback) E(u);
            else if (b.startTime <= a) E(u), b.sortIndex = b.expirationTime, S(p, b);
            else break;
            b = n(u)
        }
    }

    function T(a) {
        y = !1;
        F(a);
        if (!v)
            if (null !== n(p)) v = !0, z(U);
            else {
                var b = n(u);
                null !== b && G(T, b.startTime - a)
            }
    }

    function U(a, b) {
        v = !1;
        y && (y = !1, V());
        H = !0;
        var c = m;
        try {
            F(b);
            for (l = n(p); null !== l && (!(l.expirationTime > b) || a && !W());) {
                var g = l.callback;
                if (null !== g) {
                    l.callback = null;
                    m = l.priorityLevel;
                    var e = g(l.expirationTime <= b);
                    b = q();
                    "function" === typeof e ? l.callback = e : l === n(p) && E(p);
                    F(b)
                } else E(p);
                l = n(p)
            }
            if (null !==
                l) var d = !0;
            else {
                var f = n(u);
                null !== f && G(T, f.startTime - b);
                d = !1
            }
            return d
        } finally {
            l = null, m = c, H = !1
        }
    }

    function oa(a) {
        switch (a) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1E4;
            default:
                return 5E3
        }
    }
    var f = "function" === typeof Symbol && Symbol.for,
        x = f ? Symbol.for("react.element") : 60103,
        xa = f ? Symbol.for("react.portal") : 60106,
        Aa = f ? Symbol.for("react.fragment") : 60107,
        Ba = f ? Symbol.for("react.strict_mode") : 60108,
        Ca = f ? Symbol.for("react.profiler") : 60114,
        Da = f ? Symbol.for("react.provider") : 60109,
        Ea = f ? Symbol.for("react.context") : 60110,
        Fa = f ? Symbol.for("react.forward_ref") : 60112,
        Ga = f ? Symbol.for("react.suspense") : 60113,
        Ha = f ? Symbol.for("react.memo") : 60115,
        Ia = f ? Symbol.for("react.lazy") : 60116,
        la = "function" === typeof Symbol && Symbol.iterator,
        pa = Object.getOwnPropertySymbols,
        Ja = Object.prototype.hasOwnProperty,
        Ka = Object.prototype.propertyIsEnumerable,
        I = function() {
            try {
                if (!Object.assign) return !1;
                var a = new String("abc");
                a[5] = "de";
                if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
                var b = {};
                for (a = 0; 10 > a; a++) b["_" +
                    String.fromCharCode(a)] = a;
                if ("0123456789" !== Object.getOwnPropertyNames(b).map(function(a) {
                        return b[a]
                    }).join("")) return !1;
                var c = {};
                "abcdefghijklmnopqrst".split("").forEach(function(a) {
                    c[a] = a
                });
                return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, c)).join("") ? !1 : !0
            } catch (g) {
                return !1
            }
        }() ? Object.assign : function(a, b) {
            if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
            var c = Object(a);
            for (var g, e = 1; e < arguments.length; e++) {
                var d = Object(arguments[e]);
                for (var f in d) Ja.call(d, f) && (c[f] = d[f]);
                if (pa) {
                    g = pa(d);
                    for (var h = 0; h < g.length; h++) Ka.call(d, g[h]) && (c[g[h]] = d[g[h]])
                }
            }
            return c
        },
        ca = {
            isMounted: function(a) {
                return !1
            },
            enqueueForceUpdate: function(a, b, c) {},
            enqueueReplaceState: function(a, b, c, d) {},
            enqueueSetState: function(a, b, c, d) {}
        },
        ba = {};
    w.prototype.isReactComponent = {};
    w.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(r(85));
        this.updater.enqueueSetState(this, a, b, "setState")
    };
    w.prototype.forceUpdate =
        function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate")
        };
    da.prototype = w.prototype;
    f = L.prototype = new da;
    f.constructor = L;
    I(f, w.prototype);
    f.isPureReactComponent = !0;
    var M = {
            current: null
        },
        ha = Object.prototype.hasOwnProperty,
        ia = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        ma = /\/+/g,
        C = [],
        na = {
            current: null
        },
        X;
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        var A = null,
            qa = null,
            ra = function() {
                if (null !== A) try {
                    var a = q();
                    A(!0, a);
                    A = null
                } catch (b) {
                    throw setTimeout(ra, 0), b;
                }
            },
            La = Date.now();
        var q =
            function() {
                return Date.now() - La
            };
        var z = function(a) {
            null !== A ? setTimeout(z, 0, a) : (A = a, setTimeout(ra, 0))
        };
        var G = function(a, b) {
            qa = setTimeout(a, b)
        };
        var V = function() {
            clearTimeout(qa)
        };
        var W = function() {
            return !1
        };
        f = X = function() {}
    } else {
        var Y = window.performance,
            sa = window.Date,
            Ma = window.setTimeout,
            Na = window.clearTimeout;
        "undefined" !== typeof console && (f = window.cancelAnimationFrame, "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
            "function" !== typeof f && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
        if ("object" === typeof Y && "function" === typeof Y.now) q = function() {
            return Y.now()
        };
        else {
            var Oa = sa.now();
            q = function() {
                return sa.now() - Oa
            }
        }
        var J = !1,
            K = null,
            Z = -1,
            ta = 5,
            ua = 0;
        W = function() {
            return q() >= ua
        };
        f = function() {};
        X = function(a) {
            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") :
                ta = 0 < a ? Math.floor(1E3 / a) : 5
        };
        var B = new MessageChannel,
            aa = B.port2;
        B.port1.onmessage = function() {
            if (null !== K) {
                var a = q();
                ua = a + ta;
                try {
                    K(!0, a) ? aa.postMessage(null) : (J = !1, K = null)
                } catch (b) {
                    throw aa.postMessage(null), b;
                }
            } else J = !1
        };
        z = function(a) {
            K = a;
            J || (J = !0, aa.postMessage(null))
        };
        G = function(a, b) {
            Z = Ma(function() {
                a(q())
            }, b)
        };
        V = function() {
            Na(Z);
            Z = -1
        }
    }
    var p = [],
        u = [],
        Pa = 1,
        l = null,
        m = 3,
        H = !1,
        v = !1,
        y = !1,
        Qa = 0;
    B = {
        ReactCurrentDispatcher: na,
        ReactCurrentOwner: M,
        IsSomeRendererActing: {
            current: !1
        },
        assign: I
    };
    I(B, {
        Scheduler: {
            __proto__: null,
            unstable_ImmediatePriority: 1,
            unstable_UserBlockingPriority: 2,
            unstable_NormalPriority: 3,
            unstable_IdlePriority: 5,
            unstable_LowPriority: 4,
            unstable_runWithPriority: function(a, b) {
                switch (a) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        a = 3
                }
                var c = m;
                m = a;
                try {
                    return b()
                } finally {
                    m = c
                }
            },
            unstable_next: function(a) {
                switch (m) {
                    case 1:
                    case 2:
                    case 3:
                        var b = 3;
                        break;
                    default:
                        b = m
                }
                var c = m;
                m = b;
                try {
                    return a()
                } finally {
                    m = c
                }
            },
            unstable_scheduleCallback: function(a, b, c) {
                var d = q();
                if ("object" === typeof c && null !== c) {
                    var e = c.delay;
                    e = "number" === typeof e && 0 < e ? d + e : d;
                    c = "number" === typeof c.timeout ? c.timeout : oa(a)
                } else c = oa(a), e = d;
                c = e + c;
                a = {
                    id: Pa++,
                    callback: b,
                    priorityLevel: a,
                    startTime: e,
                    expirationTime: c,
                    sortIndex: -1
                };
                e > d ? (a.sortIndex = e, S(u, a), null === n(p) && a === n(u) && (y ? V() : y = !0, G(T, e - d))) : (a.sortIndex = c, S(p, a), v || H || (v = !0, z(U)));
                return a
            },
            unstable_cancelCallback: function(a) {
                a.callback = null
            },
            unstable_wrapCallback: function(a) {
                var b = m;
                return function() {
                    var c = m;
                    m = b;
                    try {
                        return a.apply(this, arguments)
                    } finally {
                        m = c
                    }
                }
            },
            unstable_getCurrentPriorityLevel: function() {
                return m
            },
            unstable_shouldYield: function() {
                var a = q();
                F(a);
                var b = n(p);
                return b !== l && null !== l && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < l.expirationTime || W()
            },
            unstable_requestPaint: f,
            unstable_continueExecution: function() {
                v || H || (v = !0, z(U))
            },
            unstable_pauseExecution: function() {},
            unstable_getFirstCallbackNode: function() {
                return n(p)
            },
            get unstable_now() {
                return q
            },
            get unstable_forceFrameRate() {
                return X
            },
            unstable_Profiling: null
        },
        SchedulerTracing: {
            __proto__: null,
            __interactionsRef: null,
            __subscriberRef: null,
            unstable_clear: function(a) {
                return a()
            },
            unstable_getCurrent: function() {
                return null
            },
            unstable_getThreadID: function() {
                return ++Qa
            },
            unstable_trace: function(a, b, c) {
                return c()
            },
            unstable_wrap: function(a) {
                return a
            },
            unstable_subscribe: function(a) {},
            unstable_unsubscribe: function(a) {}
        }
    });
    d.Children = {
        map: function(a, b, c) {
            if (null == a) return a;
            var d = [];
            R(a, d, null, b, c);
            return d
        },
        forEach: function(a, b, c) {
            if (null == a) return a;
            b = ja(null, null, b, c);
            Q(a, ya, b);
            ka(b)
        },
        count: function(a) {
            return Q(a, function() {
                return null
            }, null)
        },
        toArray: function(a) {
            var b = [];
            R(a, b, null, function(a) {
                return a
            });
            return b
        },
        only: function(a) {
            if (!N(a)) throw Error(r(143));
            return a
        }
    };
    d.Component = w;
    d.Fragment = Aa;
    d.Profiler = Ca;
    d.PureComponent = L;
    d.StrictMode = Ba;
    d.Suspense = Ga;
    d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B;
    d.cloneElement = function(a, b, c) {
        if (null === a || void 0 === a) throw Error(r(267, a));
        var d = I({}, a.props),
            e = a.key,
            f = a.ref,
            m = a._owner;
        if (null != b) {
            void 0 !== b.ref && (f = b.ref, m = M.current);
            void 0 !== b.key && (e = "" + b.key);
            if (a.type && a.type.defaultProps) var h =
                a.type.defaultProps;
            for (k in b) ha.call(b, k) && !ia.hasOwnProperty(k) && (d[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k])
        }
        var k = arguments.length - 2;
        if (1 === k) d.children = c;
        else if (1 < k) {
            h = Array(k);
            for (var l = 0; l < k; l++) h[l] = arguments[l + 2];
            d.children = h
        }
        return {
            $$typeof: x,
            type: a.type,
            key: e,
            ref: f,
            props: d,
            _owner: m
        }
    };
    d.createContext = function(a, b) {
        void 0 === b && (b = null);
        a = {
            $$typeof: Ea,
            _calculateChangedBits: b,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        a.Provider = {
            $$typeof: Da,
            _context: a
        };
        return a.Consumer =
            a
    };
    d.createElement = ea;
    d.createFactory = function(a) {
        var b = ea.bind(null, a);
        b.type = a;
        return b
    };
    d.createRef = function() {
        return {
            current: null
        }
    };
    d.forwardRef = function(a) {
        return {
            $$typeof: Fa,
            render: a
        }
    };
    d.isValidElement = N;
    d.lazy = function(a) {
        return {
            $$typeof: Ia,
            _ctor: a,
            _status: -1,
            _result: null
        }
    };
    d.memo = function(a, b) {
        return {
            $$typeof: Ha,
            type: a,
            compare: void 0 === b ? null : b
        }
    };
    d.useCallback = function(a, b) {
        return t().useCallback(a, b)
    };
    d.useContext = function(a, b) {
        return t().useContext(a, b)
    };
    d.useDebugValue = function(a, b) {};
    d.useEffect = function(a, b) {
        return t().useEffect(a, b)
    };
    d.useImperativeHandle = function(a, b, c) {
        return t().useImperativeHandle(a, b, c)
    };
    d.useLayoutEffect = function(a, b) {
        return t().useLayoutEffect(a, b)
    };
    d.useMemo = function(a, b) {
        return t().useMemo(a, b)
    };
    d.useReducer = function(a, b, c) {
        return t().useReducer(a, b, c)
    };
    d.useRef = function(a) {
        return t().useRef(a)
    };
    d.useState = function(a) {
        return t().useState(a)
    };
    d.version = "16.14.0"
});