var __webpack_modules__ = [, , , (e, t, i) => {
        i.d(t, {
            elemBind: () => d,
            elemHasClass: () => c,
            elemMutationObserver: () => m
        });
        i(4), i(6), i(8);
        var n, r = i(9),
            a = (i(12), i(19), i(20), i(26)),
            o = i(16),
            s = (o.Wistia, (0, r.cachedDetect)()),
            c = function(e, t) {
                var i = null != e && "function" == typeof e.getAttribute && e.getAttribute("class");
                if (!i && e && "string" == typeof e.className && (i = e.className), !i) return !1;
                var n = !1;
                return u(i, t, (function(e) {
                    var r = 0 === e || " " === i.charAt(e - 1),
                        a = e + t.length === i.length,
                        o = " " === i.charAt(e + t.length);
                    if (r && (a || o)) return n = !0, l
                })), n
            },
            l = {},
            u = function(e, t, i) {
                for (var n = -1; - 1 != (n = e.indexOf(t, n + 1)) && i(n) !== l;);
            },
            d = function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = function(n) {
                        (n = n || window.event).pageX || n.pageY || !n.clientX && !n.clientY || (n.pageX = n.clientX + v(), n.pageY = n.clientY + h()), n.preventDefault || (n.preventDefault = function() {
                            n.returnValue = !1
                        }), n.stopPropagation || (n.stopPropagation = function() {
                            n.cancelBubble = !0
                        }), null == n.which && (n.which = null != n.charCode ? n.charCode : n.keyCode), null == n.which && null != n.button && (1 & n.button ? n.which = 1 : 2 & n.button ? n.which = 3 : 4 & n.button ? n.which = 2 : n.which = 0), n.target || n.srcElement && (n.target = n.srcElement), n.target && 3 === n.target.nodeType && (n.target = n.target.parentNode);
                        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
                        var s = i.apply(n.target, [n].concat(a));
                        return s === f && f(e, t, i), s
                    };
                o.Wistia._elemBind = o.Wistia._elemBind || {};
                var a = p(e, t, i);
                return o.Wistia._elemBind[a] = r, r.elem = e, r.event = t, e.addEventListener(t, r, n),
                    function() {
                        f(e, t, i, n)
                    }
            },
            f = function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e && null != e._wistiaElemId && null != i && i._wistiaBindId) {
                    var r = p(e, t, i),
                        a = o.Wistia._elemBind[r];
                    return a && (e.removeEventListener(t, a, n), a.elem = null, a.event = null), delete o.Wistia._elemBind[r]
                }
            },
            p = function(e, t, i) {
                return e._wistiaElemId = e._wistiaElemId || (0, a.seqId)("wistia_elem_"), i._wistiaBindId = i._wistiaBindId || (0, a.seqId)("wistia_bind_"), "".concat(e._wistiaElemId, ".").concat(t, ".").concat(i._wistiaBindId)
            },
            m = function(e) {
                var t = s.mutationObserver;
                return t ? new window[t](e) : null
            },
            h = function(e) {
                var t = document.body,
                    i = document.documentElement;
                if (null == e) return i && i.scrollTop || t && t.scrollTop || 0;
                t && (t.scrollTop = e), i && (i.scrollTop = e)
            },
            v = function(e) {
                var t = document.body,
                    i = document.documentElement;
                if (null == e) return i && i.scrollLeft || t && t.scrollLeft || 0;
                t && (t.scrollLeft = e), i && (i.scrollLeft = e)
            };
        ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(e) {
            d(document, e, (function(e) {
                n = e, Date.now(), setTimeout((function() {
                    n === e && (n = void 0)
                }), 0)
            }), !s.passiveSupported || {
                capture: !0,
                passive: !0
            })
        }))
    }, (e, t, i) => {
        i.r(t), i.d(t, {
            assign: () => n.assign,
            cast: () => g,
            castDeep: () => w,
            clone: () => u,
            eachDeep: () => B,
            eachLeaf: () => V,
            equalsDeep: () => R,
            except: () => E,
            exists: () => v,
            filter: () => A,
            getDeep: () => d,
            identityFunc: () => c,
            indexOf: () => q,
            isArray: () => k,
            isBasicType: () => D,
            isEmpty: () => j,
            isFunction: () => O,
            isObject: () => M,
            isRegExp: () => N,
            isSubsetDeep: () => C,
            keys: () => U,
            legacyShouldDeleteFromMerge: () => l,
            merge: () => o,
            mergeOne: () => s,
            only: () => _,
            pick: () => H,
            select: () => y,
            setAndPreserveUndefined: () => p,
            setDeep: () => f,
            sort: () => S,
            unsetDeep: () => h,
            values: () => W
        });
        var n = i(5),
            r = function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            },
            a = Array.prototype.slice,
            o = function(e) {
                if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1)) return e;
                for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t++) s(e, t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
                return e
            },
            s = function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                if (k(t)) {
                    k(e) || (e = []);
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a];
                        null == e[a] && null != o && (k(o) ? e[a] = [] : M(o) && (e[a] = {}));
                        var u = s(e[a], o, i);
                        n(t, a, u) ? delete e[a] : e[a] = u
                    }
                    return i(e)
                }
                if (M(t)) {
                    for (var d in t)
                        if (r(t, d) && (r(e, d) || null == e[d])) {
                            var f = t[d];
                            k(f) ? (k(e[d]) || (e[d] = []), s(e[d], f, i), e[d] = i(e[d])) : M(f) ? (M(e[d]) || (e[d] = {}), s(e[d], f, i), e[d] = i(e[d])) : null == e ? (e = {}, n(t, d, f) || (e[d] = i(f))) : n(t, d, f) ? delete e[d] : e[d] = i(f)
                        }
                    return i(e)
                }
                return i(t)
            },
            c = function(e) {
                return e
            },
            l = function(e, t, i) {
                return null == i
            },
            u = function(e, t) {
                return k(e) ? s([], e, t) : s({}, e, t)
            },
            d = function(e, t, i) {
                t = "string" == typeof t ? t.split(".") : a.call(t);
                for (var n, o = e; null != e && t.length;) {
                    var s = t.shift();
                    void 0 !== e[s] && (M(e[s]) || k(e[s])) || !i || (0 === s ? (e = o[n] = [])[s] = {} : e[s] = {}), o = e, n = s, e = r(e, s) ? e[s] : void 0
                }
                return e
            },
            f = function(e, t, i) {
                return m(e, t, i, !0)
            },
            p = function(e, t, i) {
                return m(e, t, i, !1)
            },
            m = function(e, t, i) {
                var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = (t = "string" == typeof t ? t.split(".") : a.call(t)).pop();
                null != (e = d(e, t, !0)) && (M(e) || k(e)) && null != r && (n && null == i ? delete e[r] : e[r] = i)
            },
            h = function(e, t) {
                return f(e, t)
            },
            v = function(e, t) {
                return void 0 !== d(e, t)
            },
            g = function(e) {
                return null == e ? e : M(e) || k(e) ? w(e) : b("".concat(e), e)
            },
            b = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                return /^-?[1-9]\d*?$/.test(e) ? parseInt(e, 10) : "0" === e || "-0" === e ? 0 : /^-?\d*\.\d+$/.test(e) ? parseFloat(e) : !!/^true$/i.test(e) || !/^false$/i.test(e) && t
            },
            w = function(e) {
                return s(e, e, (function(e) {
                    return "string" == typeof e ? b(e) : e
                }), (function() {
                    return !1
                }))
            },
            _ = function(e, t) {
                for (var i = {}, n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
                for (var a in e) n[a] && (i[a] = e[a]);
                return i
            },
            E = function(e, t) {
                for (var i = {}, n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
                for (var a in e) n[a] || (i[a] = e[a]);
                return i
            },
            y = function(e, t) {
                for (var i = [], n = "function" == typeof t, r = n ? t : null, a = 0; a < e.length; a++) {
                    var o = e[a];
                    if (n) r(o) && i.push(o);
                    else {
                        var s = !0;
                        for (var c in t) {
                            var l = t[c];
                            if (l instanceof Array) {
                                if (!o[c] || o[c] < l[0] || o[c] > l[1]) {
                                    s = !1;
                                    break
                                }
                            } else if (l instanceof RegExp) {
                                if (!l.test(o[c])) {
                                    s = !1;
                                    break
                                }
                            } else if (l instanceof T) {
                                for (var u = !1, d = 0; d < l.values.length; d++) {
                                    var f = l.values[d];
                                    if (o[c] === f) {
                                        u = !0;
                                        break
                                    }
                                }
                                if (!u) {
                                    s = !1;
                                    break
                                }
                            } else if ("function" == typeof l) {
                                if (null == o[c] || !l(o[c])) {
                                    s = !1;
                                    break
                                }
                            } else if (o[c] !== l) {
                                s = !1;
                                break
                            }
                        }
                        s && i.push(o)
                    }
                }
                return i
            },
            T = function(e) {
                var t = this;
                return t.values = e, t
            },
            W = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return new T(t)
            },
            S = function(e, t) {
                var i = "function" == typeof t,
                    n = i ? t : null,
                    r = a.call(e);
                return i ? r.sort(n) : r.sort((function(e, i) {
                    var n;
                    n = t instanceof Array ? u(t) : t.split(/\s*,\s*/);
                    for (var r = 0; 0 === r && n.length > 0;) {
                        var a = n.shift().split(/\s+/),
                            o = a[0],
                            s = a[1];
                        if (s = "desc" === s ? -1 : 1, e[o] < i[o]) {
                            r = -1 * s;
                            break
                        }
                        if (e[o] !== i[o]) {
                            r = 1 * s;
                            break
                        }
                        r = 0
                    }
                    return r
                })), r
            },
            A = function(e, t, i) {
                for (var n = void 0 === i ? undefined : i, r = [], a = 0; a < e.length; a++) t.call(n, e[a], a, e) && r.push(e[a]);
                return r
            },
            P = /^\s*function Array()/,
            k = function(e) {
                return null != e && e.push && P.test(e.constructor)
            },
            L = /^\s*function Object()/,
            M = function(e) {
                return null != e && "object" == typeof e && L.test(e.constructor)
            },
            O = function(e) {
                return null != e && "function" == typeof e
            },
            I = /^\s*function RegExp()/,
            N = function(e) {
                return null != e && I.test(e.constructor)
            },
            x = /^string|number|boolean|function$/i,
            D = function(e) {
                return null != e && (x.test(typeof e) || N(e))
            },
            j = function(e) {
                return null == e || (!(!k(e) || e.length) || !!M(e) && !Object.keys(e).length)
            },
            C = function(e, t) {
                if (e === t) return !0;
                if (null != e && null == t || null == e && null != t) return !1;
                var i = !0;
                return V(e, (function(e, n) {
                    e !== d(t, n) && (i = !1)
                })), i
            },
            R = function(e, t) {
                return C(e, t) && C(t, e)
            },
            B = function(e, t, i, n, o) {
                if (null == i && (i = []), D(e)) t(e, i, n, o);
                else if (M(e) || k(e)) {
                    for (var s in t(e, i, n, o), e)
                        if (r(e, s)) {
                            var c = a.call(i);
                            c.push(s), B(e[s], t, c, e, s)
                        }
                } else t(e, i, n, o)
            },
            V = function(e, t) {
                B(e, (function(e, i, n, r) {
                    k(e) || M(e) || t(e, i, n, r)
                }))
            },
            H = function(e, t) {
                for (var i = {}, n = 0; n < t.length; n++) {
                    var r = t[n];
                    e[r] && (i[r] = e[r])
                }
                return i
            },
            q = function(e, t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t) return i;
                return -1
            },
            U = function(e) {
                if (Object.keys) return Object.keys(e);
                var t = [];
                for (var i in e) r(e, i) && t.push(i);
                return t
            }
    }, (e, t, i) => {
        i.d(t, {
            assign: () => r
        });
        var n = function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            },
            r = function(e) {
                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                for (var r = 0; r < i.length; r++) a(e, i[r]);
                return e
            },
            a = function(e, t) {
                for (var i in t) n(t, i) && (e[i] = t[i]);
                return e
            }
    }, (e, t, i) => {
        i.d(t, {
            isDocReady: () => r,
            onDocReady: () => a
        });
        var n = i(7),
            r = function() {
                return /loaded|complete/.test(document.readyState)
            },
            a = function() {
                var e, t;
                if (arguments.length > 1 ? (e = arguments[0], t = arguments[1]) : (e = 1e4, t = arguments[0]), r()) t();
                else if (top === self && document.documentElement.doScroll) {
                    (0, n.poll)((function() {
                        try {
                            return document.documentElement.doScroll("left"), !0
                        } catch (e) {
                            return !1
                        }
                    }), t, 50, e, t)
                } else {
                    var i = function() {
                            r() && (clearTimeout(o), a(), t())
                        },
                        a = function() {
                            document.removeEventListener("DOMContentLoaded", i, !1), document.removeEventListener("readystatechange", i, !1), window.removeEventListener("load", i, !1)
                        },
                        o = setTimeout((function() {
                            a(), t()
                        }), e);
                    document.addEventListener("DOMContentLoaded", i, !1), document.addEventListener("readystatechange", i, !1), window.addEventListener("load", i, !1)
                }
            }
    }, (e, t, i) => {
        i.d(t, {
            poll: () => n
        });
        var n = function(e, t, i, n, r) {
            var a = null,
                o = (new Date).getTime(),
                s = function() {
                    (new Date).getTime() - o > n ? "function" == typeof r && r() : e() ? t() : (clearTimeout(a), a = setTimeout(s, i))
                };
            a = setTimeout(s, 1)
        }
    }, (e, t, i) => {}, (e, t, i) => {
        i.d(t, {
            cachedDetect: () => B
        });
        var n, r = i(10),
            a = i(11),
            o = navigator.userAgent,
            s = null,
            c = /(webkit)[ /]([^\s]+)/i,
            l = /OPR\/([^\s]+)/i,
            u = /(edge)\/(\d+(?:\.\d+)?)/i,
            d = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
            f = /(android) ([^;]+)/i,
            p = /(iphone)/i,
            m = /(Windows Phone OS (\d+(?:\.\d+)?))/,
            h = /OS (\d+)_(\d+)/i,
            v = /(firefox)/i,
            g = /Mobile VR/i,
            b = /Version\/([^\s]+)/i,
            w = function() {
                return (E()[1] || "webkit").toLowerCase()
            },
            _ = function() {
                return E()[2]
            },
            E = function() {
                var e;
                return (e = o.match(u)) || (e = o.match(c)) || (e = o.match(l)) ? e : e ? (null != document.documentMode && (e[2] = document.documentMode), e) : (e = o.match(d)) || []
            },
            y = function() {
                var e = o.match(f);
                return null != e && {
                    version: e[2]
                }
            },
            T = function() {
                return p.test(o)
            },
            W = function() {
                return M() > 0 || y() || A()
            },
            S = function() {
                try {
                    var e = matchMedia("(hover:hover)");
                    if ("not all" !== e.media) return e.matches
                } catch (e) {}
                return !W()
            },
            A = function() {
                return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
            },
            P = function() {
                return c.test(o) && !/chrome/i.test(o) && !A() && !T()
            },
            k = function() {
                return !(!/Chrome/.test(o) || !/Google Inc/.test(navigator.vendor)) && {
                    version: L()
                }
            },
            L = function() {
                var e = o.match(/\bChrome\/([^\s]+)/);
                return e && e[1]
            },
            M = function() {
                var e = o.match(h),
                    t = o.match(b);
                return null != e ? parseFloat("".concat(e[1], ".").concat(e[2])) : null != t && t[1] && A() ? parseFloat(t[1]) : 0
            },
            O = function() {
                return u.test(o)
            },
            I = function() {
                return v.test(o)
            },
            N = function() {
                var e = document.createElement("video"),
                    t = !1;
                try {
                    if (e.canPlayType) {
                        var i = 'video/mp4; codecs="avc1.42E01E';
                        (t = {}).h264 = !!e.canPlayType("".concat(i, '"')) || !!e.canPlayType("".concat(i, ', mp4a.40.2"')), t.webm = !!e.canPlayType('video/webm; codecs="vp9, vorbis"'), t.nativeHls = !!e.canPlayType("application/vnd.apple.mpegURL")
                    }
                } catch (e) {
                    t = {
                        ogg: !1,
                        h264: !1,
                        webm: !1,
                        nativeHls: !1
                    }
                }
                return t
            },
            x = function() {
                try {
                    return "localStorage" in r.root && null != r.root.localStorage
                } catch (e) {
                    return !1
                }
            },
            D = ["WebKit", "Moz", "O", "Ms", ""],
            j = function() {
                for (var e = 0; e < D.length; e++) {
                    var t = "".concat(D[e], "MutationObserver");
                    if (r.root[t]) return t
                }
                return null
            },
            C = function() {
                if (null != n) return n;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            n = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (e) {
                    n = !1
                }
                return n
            },
            R = function() {
                var e = k(),
                    t = I(),
                    i = O(),
                    n = l.test(o),
                    r = e && _() >= 32,
                    a = e && _() >= 75 && y(),
                    s = t && _() >= 65,
                    c = t && _() >= 67 && y(),
                    u = i && _() >= 18,
                    d = n && _() >= 19;
                return r || a || s || c || u || d
            },
            B = function() {
                return s || (s = V())
            },
            V = function() {
                var e, t, i, n = {
                    browser: {
                        version: _()
                    },
                    edge: O(),
                    firefox: I(),
                    gearvr: g.test(o),
                    hdr: !(null === (t = (i = window).matchMedia) || void 0 === t || !t.call(i, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                    android: y(),
                    oldandroid: y() && parseFloat(y().version) < 4.1,
                    iphone: T(),
                    ipad: A(),
                    safari: P(),
                    chrome: k(),
                    winphone: {
                        version: m.test(o)[2]
                    },
                    ios: {
                        version: M()
                    },
                    windows: /win/i.test(navigator.platform),
                    mac: /mac/i.test(navigator.platform),
                    retina: null != r.root.devicePixelRatio && r.root.devicePixelRatio > 1,
                    hoverIsNatural: S(),
                    touchScreen: W(),
                    video: N(),
                    mediaSource: r.root.MediaSource && r.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                    nativeHls: (T() || A() || P()) && N().nativeHls,
                    localstorage: x(),
                    fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                    vulcanV2Support: (e = /webkit|mozilla|edge/.test(w()), !!(T() || A() || y()) || Boolean(e && N().h264 && Object.defineProperties)),
                    mutationObserver: j(),
                    callingPlayRequiresEventContext: M() > 0 || y() || P(),
                    passiveSupported: C(),
                    webp: R(),
                    performanceMeasure: (0, a.hasPerformanceMeasureSupport)()
                };
                return n.browser[w()] = !0, n
            }
    }, (e, t, i) => {
        var n;
        i.d(t, {
            root: () => r
        });
        try {
            (n = self).self !== n && void 0 !== n.self && "undefined" != typeof window && (n = window)
        } catch (e) {
            n = "undefined" != typeof globalThis ? globalThis : window
        }
        var r = n
    }, (e, t, i) => {
        i.d(t, {
            hasPerformanceMeasureSupport: () => n
        });
        var n = function() {
            var e = window.performance;
            return Boolean(e) && Boolean(e.measure)
        }
    }, (e, t, i) => {
        i.d(t, {
            wlog: () => v
        });
        var n = i(13),
            r = i(16);

        function a(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var s = {
                ERROR: 0,
                WARNING: 1,
                NOTICE: 2,
                INFO: 3,
                DEBUG: 4,
                error: 0,
                warning: 1,
                notice: 2,
                info: 3,
                debug: 4
            },
            c = function() {},
            l = function(e) {
                var t = this;
                null == e && (e = {});
                return t.error = function() {
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t.log(0, i)
                }, t.warn = function() {
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t.log(1, i)
                }, t.notice = function() {
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t.log(1, i)
                }, t.info = function() {
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t.log(3, i)
                }, t.debug = function() {
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return t.log(4, i)
                }, t.ctx = e, t.ctx.initializedAt || t.reset(), t
            },
            u = l.prototype;
        u.reset = function() {
            this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
        }, u.setLevel = function(e) {
            var t = this.logFunc(3);
            null != s[e] ? (this.ctx.level = s[e], t('Log level set to "'.concat(e, '" (').concat(s[e], ")"))) : t('Unknown log level "'.concat(e, '"'))
        }, u.setGrep = function(e) {
            this.ctx.grep = e
        }, u.setGrepv = function(e) {
            this.ctx.grepv = e
        }, u.first1000LogLines = function() {
            return this.ctx.first1000LogLines
        }, u.last1000LogLines = function() {
            return this.ctx.last1000LogLines
        }, u.matchedGrep = function(e) {
            var t = !1;
            if (this.ctx.grep || this.ctx.grepv) {
                for (var i = [], n = 0; n < e.length; n++) try {
                    var r = e[n];
                    i.push(r.toString && r.toString())
                } catch (e) {
                    i.push("")
                }
                var a = i.join(" "),
                    o = !this.ctx.grep || a.match(this.ctx.grep),
                    s = !this.ctx.grepv || !a.match(this.ctx.grepv);
                t = o && s
            } else t = !0;
            return t
        }, u.now = function() {
            return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
        }, u.messagesToLogLine = function(e, t, i) {
            var n, r = [e, t];
            r = r.concat(i);
            try {
                (n = r.join(" ") || "").length > 200 && (n = n.slice(0, 200))
            } catch (e) {
                n = "could not serialize"
            }
            return n
        }, u.persistLine = function(e) {
            this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(e) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(e))
        }, u.log = function(e, t) {
            var i, r = e <= this.ctx.level,
                o = e < 4,
                s = (r || o) && this.matchedGrep(t);
            if (0 === e && (0, n.globalTrigger)("problem", {
                    type: "error-logged",
                    data: {
                        messages: t
                    }
                }), s && (r || o) && (i = this.now()), o && s) {
                var c = this.messagesToLogLine(e, i, t);
                this.persistLine(c)
            }
            if (r && s) {
                var l, u = this.logFunc(e);
                1 === t.length && (l = t[0]) instanceof Error ? (u(l.message), l.stack && u(l.stack)) : u.apply(void 0, a(t))
            }
        };
        var d = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                console.error.apply(console, t)
            },
            f = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                console.warn.apply(console, t)
            },
            p = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                console.info.apply(console, t)
            },
            m = function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                console.debug.apply(console, t)
            },
            h = function(e) {
                console.log.apply(console, e)
            };
        u.logFunc = function(e) {
            return null == e && (e = this.level), console ? (0 === e ? t = d : 1 === e ? t = f : 3 === e ? t = p : 4 === e && (t = m), t || (t = h), "function" != typeof t && (this.noConsoleLog = !0, t = c), t) : c;
            var t
        }, u.maybePrefix = function(e, t) {
            if (e) {
                if ("function" == typeof e) try {
                    e = e()
                } catch (t) {
                    e = 'prefix err "'.concat(t.message, '"')
                }
                return e instanceof Array ? e.concat(t) : [e].concat(t)
            }
            return t
        }, u.getPrefixedFunctions = function(e) {
            var t = this;
            return {
                log: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(0, t.maybePrefix(e, n))
                },
                error: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(0, t.maybePrefix(e, n))
                },
                warn: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(1, t.maybePrefix(e, n))
                },
                notice: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(1, t.maybePrefix(e, n))
                },
                info: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(3, t.maybePrefix(e, n))
                },
                debug: function() {
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t.log(4, t.maybePrefix(e, n))
                }
            }
        }, r.Wistia && null == r.Wistia.wlogCtx && (r.Wistia.wlogCtx = {});
        var v = new l(r.Wistia.wlogCtx)
    }, (e, t, i) => {
        i.d(t, {
            globalTrigger: () => a
        });
        var n = i(14),
            r = i(16);
        (0, n.makeWbindable)(r.Wistia);
        r.Wistia.bind.bind(r.Wistia), r.Wistia.on.bind(r.Wistia), r.Wistia.off.bind(r.Wistia), r.Wistia.rebind.bind(r.Wistia);
        var a = r.Wistia.trigger.bind(r.Wistia);
        r.Wistia.unbind.bind(r.Wistia)
    }, (e, t, i) => {
        i.d(t, {
            makeWbindable: () => o
        });
        var n = i(15),
            r = i(16),
            a = i(17);
        r.Wistia.bindable || (r.Wistia.EventShepherdManager || (r.Wistia.EventShepherdManager = {}), r.Wistia.bindable = {
            bind: function(e, t) {
                if ("crosstime" === e && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]), this;
                if ("betweentimes" === e && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), this;
                var i = this.embedElement || this.container;
                if (Object.keys(a.convertedEventNames).includes(e) && i) {
                    var o = s(i);
                    return void 0 === r.Wistia.EventShepherdManager[o] && (r.Wistia.EventShepherdManager[o] = new a.EventShepherd), r.Wistia.EventShepherdManager[o].addListener(e, i, t), this
                }
                if (t) return n.bind.call(this, e, t), this;
                r.Wistia.warn && r.Wistia.warn(this.constructor.name, "bind", "falsey value passed in as callback:", t)
            },
            unbind: function(e, t) {
                if ("crosstime" === e && this.crossTime) return t ? this.crossTime.removeBinding(arguments[1], arguments[2]) : this.crossTime.removeAllBindings(), this;
                if ("betweentimes" === e && this.betweenTimes) return t ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : this.betweenTimes.removeAllBindings(), this;
                var i = this.embedElement || this.container;
                if (Object.keys(a.convertedEventNames).includes(e) && i) {
                    var o = s(i);
                    return void 0 === r.Wistia.EventShepherdManager[o] || r.Wistia.EventShepherdManager[o].removeListener(e, i, t), this
                }
                return t ? n.unbind.call(this, e, t) : this._bindings && (this._bindings[e] = []), this._bindings && this._bindings[e] && !this._bindings[e].length && (this._bindings[e] = null, delete this._bindings[e]), this
            },
            on: function(e, t) {
                var i = arguments,
                    o = this;
                if ("crosstime" === e && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]),
                    function() {
                        o.crossTime.removeBinding(i[1], i[2])
                    };
                if ("betweentimes" === e && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]),
                    function() {
                        o.betweenTimes.removeBinding(i[1], i[2], i[3])
                    };
                var c = this.embedElement || this.container;
                if (Object.keys(a.convertedEventNames).includes(e) && c) {
                    var l = s(c);
                    return void 0 === r.Wistia.EventShepherdManager[l] && (r.Wistia.EventShepherdManager[l] = new a.EventShepherd(c)), r.Wistia.EventShepherdManager[l].addListener(e, c, t),
                        function() {
                            r.Wistia.EventShepherdManager[l].removeListener(e, c, t)
                        }
                }
                return n.bind.call(this, e, t)
            },
            off: function(e, t) {
                if ("crosstime" === e && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                if ("betweentimes" === e && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                var i = this.embedElement || this.container;
                if (Object.keys(a.convertedEventNames).includes(e) && i) {
                    var o = s(i);
                    return void 0 === r.Wistia.EventShepherdManager[o] ? function() {} : r.Wistia.EventShepherdManager[o].removeListener(e, i, t)
                }
                return n.unbind.call(this, e, t)
            },
            rebind: function(e, t) {
                return this.unbind(e, t), this.bind(e, t), this
            },
            trigger: function(e) {
                for (var t, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                return (t = n.trigger).call.apply(t, [this, e].concat(r)), this
            },
            bindNamed: function() {
                return n.bindNamed.apply(this, arguments)
            },
            unbindNamed: function() {
                return n.unbindNamed.apply(this, arguments)
            },
            unbindAllInNamespace: function() {
                return n.unbindAllInNamespace.apply(this, arguments)
            }
        });
        var o = function(e) {
                for (var t in r.Wistia.bindable) {
                    var i = r.Wistia.bindable[t];
                    e[t] || (e[t] = i)
                }
            },
            s = function(e) {
                return null != e && e.mediaId ? e.mediaId : null != e && e.id ? e.id : void 0
            }
    }, (e, t, i) => {
        i.d(t, {
            bind: () => l,
            bindNamed: () => h,
            trigger: () => f,
            unbind: () => u,
            unbindAllInNamespace: () => g,
            unbindNamed: () => v
        });
        var n = i(16),
            r = function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };

        function a(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var s, c = Array.prototype.slice,
            l = function(e, t) {
                var i = this;
                return i._bindings || (i._bindings = {}), i._bindings[e] || (i._bindings[e] = []), i._bindings[e].push(t),
                    function() {
                        i.unbind(e, t)
                    }
            },
            u = function(e, t) {
                if (!this._bindings) return this;
                if (!this._bindings[e]) return this;
                for (var i = [], n = 0; n < this._bindings[e].length; n++) {
                    var r = this._bindings[e][n];
                    r !== t && i.push(r)
                }
                this._bindings[e] = i
            },
            d = function(e, t) {
                return this.unbind(e, t), this.bind(e, t), {
                    event: e,
                    fn: t
                }
            },
            f = function(e) {
                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                return this._bindings && null != this._bindings.all && p.apply(this, ["all", e].concat(i)), p.apply(this, [e].concat(i))
            },
            p = function(e) {
                if (!this._bindings) return this;
                if (!this._bindings[e]) return this;
                for (var t, i = c.call(arguments, 1), r = a(this._bindings[e]), o = 0; o < r.length; o++) {
                    var s = r[o];
                    try {
                        s.apply(this, i) === this.unbind && (null == t && (t = []), t.push({
                            event: e,
                            fn: s
                        }))
                    } catch (e) {
                        if (this._throwTriggerErrors) throw e;
                        n.Wistia.error && n.Wistia.error(e)
                    }
                }
                if (t)
                    for (var l = 0; l < t.length; l++) {
                        var u = t[l];
                        this.unbind(u.event, u.fn)
                    }
                return this
            },
            m = function(e, t) {
                null == e._namedBindings && (e._namedBindings = {}), null == e._namedBindings[t] && (e._namedBindings[t] = {})
            },
            h = function(e, t, i, n) {
                return this.unbindNamed(e, t),
                    function(e, t, i, n, r) {
                        m(e, t), e._namedBindings[t][i] = {
                            event: n,
                            fn: r
                        }
                    }(this, e, t, i, n), this.bind(i, n),
                    function() {
                        this.unbindNamed(e, t)
                    }
            },
            v = function(e, t) {
                m(this, e);
                var i = function(e, t, i) {
                    return m(e, t), e._namedBindings[t][i]
                }(this, e, t);
                if (i) {
                    var n = i.event,
                        r = i.fn;
                    this.unbind(n, r)
                }
                var a = this._namedBindings;
                return delete a[e][t], b(a[e]) && delete a[e], this
            },
            g = function(e) {
                var t = this._namedBindings && this._namedBindings[e];
                if (null == t) return this;
                for (var i in t) r(t, i) && this.unbindNamed(e, i)
            },
            b = function(e) {
                for (var t in e)
                    if (r(e, t)) return !1;
                return !0
            };
        (s = function() {}.prototype).bind = l, s.unbind = u, s.on = l, s.off = u, s.rebind = d, s.trigger = f, s.bindNamed = h, s.unbindNamed = v, s.unbindAllInNamespace = g
    }, (e, t, i) => {
        i.d(t, {
            Wistia: () => r
        });
        var n = i(10);
        null == n.root.Wistia && (n.root.Wistia = {}), null == n.root.Wistia._destructors && (n.root.Wistia._destructors = {}), null == n.root.Wistia._initializers && (n.root.Wistia._initializers = {}), null == n.root.Wistia._remoteData && (n.root.Wistia._remoteData = new Map), null == n.root.Wistia.api && (n.root.Wistia.api = function() {
            return console.error("Accessed Wistia.api() before it was initialized"), null
        }), null == n.root.Wistia.defineControl && (n.root.Wistia.defineControl = function() {
            return console.error("Accessed Wistia.defineControl() before it was initialized"), null
        }), null == n.root.Wistia.EventShepherdManager && (n.root.Wistia.EventShepherdManager = {}), null == n.root.Wistia.mixin && (n.root.Wistia.mixin = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Object.keys(t).forEach((function(i) {
                (function(e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(e), t)
                })(t, i) && (e[i] = t[i])
            }))
        }), null == n.root.Wistia.playlistMethods && (n.root.Wistia.playlistMethods = new Map), null == n.root.Wistia.PublicApi && (n.root.Wistia.PublicApi = null), null == n.root.Wistia.uncacheMedia && (n.root.Wistia.uncacheMedia = function() {
            return console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null
        }), null == n.root.Wistia.VisitorKey && (n.root.Wistia.VisitorKey = null), null == n.root.Wistia.visitorKey && (n.root.Wistia.visitorKey = null), null == n.root.Wistia.wistia && (n.root.Wistia.wistia = void 0), null == n.root.Wistia._mediaDataPromises && (n.root.Wistia._mediaDataPromises = {}), null == n.root.Wistia._liveStreamPollingPromises && (n.root.Wistia._liveStreamPollingPromises = {}), null == n.root.Wistia.first && (n.root.Wistia.first = function() {
            var e;
            return null !== (e = n.root.Wistia.api()) && void 0 !== e ? e : document.querySelector("wistia-player")
        });
        var r = n.root.Wistia
    }, (e, t, i) => {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, r(n.key), n)
            }
        }

        function r(e) {
            var t = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var n = i.call(e, t || "default");
                    if ("object" != typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : t + ""
        }
        i.d(t, {
            EventShepherd: () => s,
            convertedEventNames: () => a
        });
        var a = {
                mutechange: i(18).MUTE_CHANGE_EVENT
            },
            o = {
                mutechange: function(e) {
                    return e.isMuted
                }
            },
            s = function() {
                return e = function e() {
                    var t, i, n;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), t = this, n = {}, (i = r(i = "convertedEventsMap")) in t ? Object.defineProperty(t, i, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[i] = n
                }, (t = [{
                    key: "addListener",
                    value: function(e, t, i) {
                        var n, r = null !== (n = a[e]) && void 0 !== n ? n : e;
                        this.convertedEventsMap[r] || (this.convertedEventsMap[r] = []);
                        var s = function(t) {
                            if (o[e]) {
                                var n = o[e](t.detail);
                                i(n)
                            } else i()
                        };
                        this.convertedEventsMap[r].push({
                            givenCallback: i,
                            eventListenerCallback: s
                        }), t.addEventListener(r, s)
                    }
                }, {
                    key: "removeAllListeners",
                    value: function(e) {
                        var t = this;
                        Object.keys(this.convertedEventsMap).forEach((function(i) {
                            var n;
                            null === (n = t.convertedEventsMap[i]) || void 0 === n || n.forEach((function(t) {
                                e.removeEventListener(i, t.eventListenerCallback)
                            })), t.convertedEventsMap[i] = []
                        }))
                    }
                }, {
                    key: "removeListener",
                    value: function(e, t, i) {
                        var n, r = this,
                            o = null !== (n = a[e]) && void 0 !== n ? n : e,
                            s = [];
                        i ? (t.removeEventListener(o, i), this.convertedEventsMap[o] && (this.convertedEventsMap[o].forEach((function(e, n) {
                            e.givenCallback === i && (s.push(n), t.removeEventListener(o, e.eventListenerCallback))
                        })), s.forEach((function(e) {
                            r.convertedEventsMap[o] && r.convertedEventsMap[o].splice(e, 1)
                        })))) : this.convertedEventsMap[o] = []
                    }
                }]) && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t, i
            }()
    }, (e, t, i) => {
        i.r(t), i.d(t, {
            AFTER_REPLACE_EVENT: () => n,
            API_READY_EVENT: () => r,
            BEFORE_REPLACE_EVENT: () => a,
            BETWEENTIMES_EVENT_EV1: () => o,
            CROSSTIME_EVENT_EV1: () => s,
            IMPL_CREATED_EVENT: () => c,
            INIT_EMBED_EVENT: () => l,
            INPUT_CONTEXT_CHANGE_EVENT: () => u,
            INTERNAL_API_ON_FIND_EVENT: () => d,
            LOADED_MEDIA_DATA_EVENT: () => f,
            MUTE_CHANGE_EVENT: () => p
        });
        var n = "after-replace",
            r = "api-ready",
            a = "before-replace",
            o = "betweentimes",
            s = "crosstime",
            c = "impl-created",
            l = "initembed",
            u = "input-context-change",
            d = "internal-api-on-find",
            f = "loaded-media-data",
            p = "mute-change"
    }, (e, t, i) => {
        var n;
        i.d(t, {
            elemOffset: () => a
        });
        var r = function() {
                if (null != n) return n;
                var e = document.createElement("div");
                return e.style.paddingLeft = e.style.width = "1px", document.body.appendChild(e), n = 2 === e.offsetWidth, document.body.removeChild(e), n
            },
            a = function(e) {
                var t, i, n = document.body,
                    a = document.defaultView,
                    s = document.documentElement,
                    c = e.getBoundingClientRect(),
                    l = s.clientTop || n.clientTop || 0,
                    u = s.clientLeft || n.clientLeft || 0;
                t = a && null != a.pageYOffset ? a.pageYOffset : r() && s && null != s.scrollTop ? s.scrollTop : n.scrollTop, i = a && null != a.pageXOffset ? a.pageXOffset : r() && s && null != s.scrollLeft ? s.scrollLeft : n.scrollLeft;
                var d = o(e);
                return {
                    height: c.height * d,
                    top: c.top * d + t - l,
                    left: c.left * d + i - u,
                    width: c.width * d,
                    zoom: d
                }
            },
            o = function(e) {
                return e && e !== document.documentElement ? o(e.parentElement) * (getComputedStyle(e).zoom || 1) : 1
            }
    }, (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            execScriptTags: () => execScriptTags,
            getScriptTags: () => getScriptTags,
            removeScriptTags: () => removeScriptTags
        });
        var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
            getScriptTags = function(e) {
                return e.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
            },
            scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
                if (!scriptTags) return [];
                scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
                for (var hashes = [], _loop = function _loop() {
                        var scriptTag = scriptTags[i],
                            hash = {},
                            matches = scriptTag.match(/<script.*?>/i);
                        if (matches && (matches = matches[0].match(/src="([^"]+)"/i), matches && (hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")))), !matches && (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i), matches)) {
                            var src = matches[1];
                            hash.fn = function() {
                                return eval(src)
                            }
                        }
                        hashes.push(hash)
                    }, i = 0; i < scriptTags.length; i++) _loop();
                return hashes
            },
            execScriptTags = function(e, t) {
                if (!e) return null;
                var i = scriptTagsToRunScriptsInput(e);
                return (0, utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(i).then(t)
            },
            removeScriptTags = function(e) {
                return e.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
            }
    }, (e, t, i) => {
        i.d(t, {
            runScripts: () => u
        });
        var n = i(12),
            r = i(4),
            a = i(22);

        function o(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function s(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        var c = function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = document.getElementsByTagName("script"), n = 0; n < i.length; n++) {
                    var r = i[n],
                        a = r.getAttribute("src") || "";
                    if (t.ignoreQueryParams) {
                        var o = a.split("?");
                        a = o[0]
                    }
                    if (!t.scriptRegex && t.ignoreProtocol && (a = a.replace(/^https?:/, ""), e = e.replace(/^https?:/, "")), t.scriptRegex && t.scriptRegex.test(a)) return r;
                    if (t.testStartsWith && 0 === a.indexOf(e)) return r;
                    if (a === e) return r
                }
                return null
            },
            l = function(e) {
                var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8e3,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return null == n && (n = 8e3), null == r && (r = {}), new Promise((function(o) {
                    !0 === r.once && (t = c(e)) && (i = !0), r.once && i ? t.readyState && !/loaded|complete/.test(t.readyState) || setTimeout((function() {
                        o()
                    }), 1) : (0, a.runScript)(e, n).then(o).catch((function(e) {
                        o(e), setTimeout((function() {
                            console.error(e)
                        }), 1)
                    }))
                }))
            },
            u = function() {
                for (var e, t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                e = i[0] instanceof Array ? i[0] : i, e = d(e);
                var a = [],
                    c = [],
                    u = [];
                return e.forEach((function(e) {
                    var t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(i), !0).forEach((function(t) {
                                    s(e, t, i[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                }))
                            }
                            return e
                        }({}, e),
                        i = new Promise((function(e) {
                            t.resolve = e
                        }));
                    t.promise = i, u.push(t.promise), e.async ? a.push(t) : c.push(t)
                })), c.reduce((function(e, t) {
                    if (t.fn) try {
                        t.fn()
                    } catch (e) {
                        n.wlog.error(e)
                    } finally {
                        t.resolve()
                    } else t.src && l(t.src, null, t).then(t.resolve);
                    return e.then(t.promise)
                }), Promise.resolve()), setTimeout((function() {
                    a.forEach((function(e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (e) {
                            n.wlog.error(e)
                        } finally {
                            e.resolve()
                        } else e.src && l(e.src, null, e).then(e.resolve)
                    }))
                }), 1), Promise.all(u)
            },
            d = function(e) {
                for (var t = [], i = 0; i < e.length; i++) {
                    var n = e[i];
                    "string" == typeof n ? t.push({
                        src: n,
                        async: !1
                    }) : (0, r.isObject)(n) ? t.push(n) : t.push({
                        fn: n,
                        async: !1
                    })
                }
                return t
            }
    }, (e, t, i) => {
        i.d(t, {
            runScript: () => r
        });
        var n = i(23),
            r = function(e, t) {
                var i = n.TAGGED_VERSION;
                return new Promise((function(n, r) {
                    var a;
                    null == t && (t = 8e3), (a = document.createElement("script")).src = e, a.async = !0, a.type = "text/javascript", /https?:\/\/fast\.wistia\./.test(a.src) && "" !== i && i.length > 0 && (a.src = "".concat(a.src, "@").concat(i));
                    var o = null,
                        s = !1,
                        c = function() {
                            a.onerror = a.onreadystatechange = a.onload = null, clearTimeout(o), clearTimeout(u), o = setTimeout((function() {
                                a && a.parentNode && a.parentNode.removeChild(a)
                            }), 500)
                        },
                        l = function() {
                            var e = a.readyState;
                            s || e && !/loaded|complete/.test(e) || (s = !0, setTimeout((function() {
                                n(), c()
                            }), 1))
                        },
                        u = setTimeout((function() {
                            s = !0, c(), r(new Error("timeout"))
                        }), t);
                    a.onerror = function(e) {
                        s = !0, c(), r(e)
                    }, a.onreadystatechange = l, a.onload = l, (document.body || document.head).appendChild(a)
                }))
            }
    }, (e, t, i) => {
        i.d(t, {
            TAGGED_VERSION: () => s
        });
        var n = i(10),
            r = i(24),
            a = i(25),
            o = ((0, a.appHostname)("app"), (0, a.appHostname)("fast-protected"), (0, a.appHostname)("fast")),
            s = "",
            c = ("undefined" != typeof window && n.root === window && n.root.location && n.root.location.protocol, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return e || o
            }),
            l = function() {
                return "fast.".concat("wistia.net")
            },
            u = (function() {
                for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                    var i = e[t];
                    if (i.src) {
                        var n = new r.Url(i.src),
                            a = /\/assets\/external\/E-v1?\.js$/.test(n.rawPath),
                            o = n.host === c() || n.host === l() || "fast-canary.wistia.net" === n.host,
                            s = "https:" === location.protocol && "https:" === n.protocol,
                            u = "" === n.protocol || null == n.protocol,
                            d = s || u || "http:" === location.protocol,
                            f = !i.readyState || /loaded|complete/.test(i.readyState);
                        if (a && o && d && f) return n
                    }
                }
                new r.Url("".concat((0, r.proto)(), "//").concat(l(), "/E-v1.js"))
            }(), [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]));
        new RegExp("(".concat(u.map((function(e) {
            return "\\.".concat(e.replace(".", "\\."))
        })).join("|"), ")$"))
    }, (e, t, i) => {
        i.d(t, {
            Url: () => u,
            parseUrl: () => f,
            proto: () => a
        });
        var n = i(4),
            r = i(12),
            a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href;
                return /^http:\/\//.test(e) ? "http:" : "https:"
            },
            o = function(e) {
                if (null == e) return e;
                var t;
                try {
                    t = decodeURIComponent(e)
                } catch (i) {
                    setTimeout((function() {
                        r.wlog.notice(i)
                    }), 50), t = e
                }
                return t
            },
            s = function(e) {
                for (var t = e[0], i = 1; i < e.length; i++) t += "[".concat(e[i], "]");
                return t
            },
            c = function(e) {
                return e.match(/([\w\-_]+)/g)
            },
            l = ["protocol", "host", "port", "params", "path"],
            u = function(e) {
                var t = this;
                t.params = {}, t.path = [], t.host = "", "object" == typeof e ? t.fromOptions(e) : e && t.fromRaw(e)
            },
            d = u.prototype;
        d.fromOptions = function(e) {
            for (var t = 0; t < l.length; t++) {
                var i = l[t];
                null != e[i] && (this[i] = e[i])
            }
            return this
        }, d.fromRaw = function(e) {
            var t;
            return this.rawUrl = e, (t = e.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) && (this.protocol = t[1] || void 0), (t = e.match(/\/\/([^:?#/]*)/)) && (this.host = t[1] || void 0), (t = e.match(/\/\/.*?(\/[^?#$]+)/) || e.match(/(^\/[^/][^?#$]+)/)) && this.setPath(t[1]), (t = e.match(/:(\d+)/)) && (this.port = parseInt(t[1], 10)), (t = e.match(/\?([^#]+)/)) && (this.rawParams = t[1], this.params = function(e) {
                var t = {};
                if (!e) return t;
                for (var i = e.split("&"), a = function() {
                        var e = i[s].split("="),
                            a = e[0],
                            l = e[1];
                        try {
                            a = c(decodeURIComponent(a)) || ""
                        } catch (e) {
                            setTimeout((function() {
                                r.wlog.notice(e)
                            }), 50), a = ""
                        }(0, n.cast)(a);
                        var u = (0, n.getDeep)(t, a);
                        if (null != u)
                            if ((0, n.isArray)(u)) u.push(o(l));
                            else {
                                var d = [u];
                                d.push(o(l)), (0, n.setAndPreserveUndefined)(t, a, d)
                            }
                        else(0, n.setAndPreserveUndefined)(t, a, o(l))
                    }, s = 0; s < i.length; s++) a();
                return t
            }(this.rawParams)), (t = e.match(/#(.*)$/)) && (this.anchor = t[1]), this
        }, d.clone = function() {
            return new u({
                protocol: this.protocol,
                host: this.host,
                port: this.port,
                path: (0, n.clone)(this.path),
                params: (0, n.clone)(this.params),
                anchor: this.anchor
            })
        }, d.ext = function(e) {
            if (null != e) {
                var t = this.ext(),
                    i = this.path.length - 1,
                    n = new RegExp("\\.".concat(t), "g");
                return t && (this.path[i] = "".concat(this.path[i].replace(n, ""))), this.path[i] = "".concat(this.path[i], ".").concat(e)
            }
            var r = this.path[this.path.length - 1].match(/\.(.*)$/);
            return null != r && r[1] || null
        }, d.isRelative = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                t = this.protocol,
                i = this.host;
            return !(null != t && "" !== t && t !== e.protocol || i && i !== e.hostname)
        }, d.toString = function() {
            return this.isRelative() ? this.relative() : this.absolute()
        }, d.absolute = function() {
            var e = "";
            null != this.protocol && (e = this.protocol);
            var t = "";
            return null != this.port && (t = ":".concat(this.port)), "".concat(e, "//").concat(this.host || location.host).concat(t).concat(this.relative())
        }, d.relative = function() {
            var e, t = "";
            this.path.length > 0 && ("string" == typeof(e = this.path) && (e = e.split("/")), t = null == e ? "" : "/".concat(e.join("/")), this._hasTrailingSlash && (t += "/"));
            var i, r, a = "?".concat((i = this.params, r = [], (0, n.eachLeaf)(i, (function(e, t) {
                null != e ? r.push("".concat(encodeURIComponent(s(t)), "=").concat(encodeURIComponent(e))) : r.push(encodeURIComponent(s(t)))
            })), r.join("&")));
            return 1 === a.length && (a = ""), "".concat(t).concat(a).concat(this.relativeAnchor())
        }, d.authority = function() {
            var e = null != this.port ? ":".concat(this.port) : "";
            return "".concat(this.host).concat(e)
        }, d.relativeProtocol = function() {
            var e = "";
            return null != this.port && (e = ":".concat(this.port)), "//".concat(this.host).concat(e).concat(this.relative())
        }, d.relativeAnchor = function() {
            var e = "";
            return null != this.anchor && (e = "#".concat(this.anchor)), "".concat(e)
        }, d.setPath = function(e) {
            this.rawPath = e, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = function(e) {
                var t = [];
                if (null == e) return t;
                for (var i = e.split(/\/+/), n = 0; n < i.length; n++) {
                    var r = i[n];
                    null != r && "" !== r && t.push(r)
                }
                return t
            }(this.rawPath)
        }, u.create = function(e) {
            return new u(e)
        };
        u.create;
        u.parse = function(e) {
            return new u(e)
        };
        var f = u.parse
    }, (e, t, i) => {
        i.d(t, {
            appHostname: () => n
        });
        var n = function() {
            return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app", ".").concat("wistia.com")
        }
    }, (e, t, i) => {
        i.d(t, {
            seqId: () => r
        });
        var n = i(16),
            r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = n.Wistia._sequenceVal || 1,
                    r = "".concat(e).concat(i).concat(t);
                return n.Wistia._sequenceVal = i + 1, r
            }
    }, , , , , , , , , , , , (e, t, i) => {
        i.r(t), i.d(t, {
            consent: () => u,
            isVisitorTrackingEnabled: () => f,
            migrateLegacyVisitorTracking: () => l,
            setVisitorTrackingEnabled: () => d
        });
        var n = i(13),
            r = i(39),
            a = i(41),
            o = i(16);

        function s(e) {
            return function(e) {
                if (Array.isArray(e)) return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var l = function() {
            var e = (0, r.getWistiaLocalStorage)().visitorTrackingEnabled;
            null != e && ((0, r.updateWistiaLocalStorage)((function(e) {
                return delete e.visitorTrackingEnabled
            })), o.Wistia._visitorTracking = {}, o.Wistia._visitorTracking[o.Wistia._visitorTrackingDomain] = {
                isEnabled: e,
                updatedAt: Date.now()
            }, (0, r.updateWistiaLocalStorage)((function(e) {
                return e.visitorTracking = o.Wistia._visitorTracking
            })))
        };
        o.Wistia._visitorTrackingDomain || (o.Wistia._visitorTrackingDomain = location.hostname || ""), o.Wistia._visitorTracking || (l(), o.Wistia._visitorTracking = (0, r.getWistiaLocalStorage)().visitorTracking || {});
        var u = function(e) {
            return null == e ? f() : d(e)
        };
        o.Wistia.consent = u;
        var d = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Wistia._visitorTrackingDomain;
                "default" === e ? delete o.Wistia._visitorTracking[t] : o.Wistia._visitorTracking[t] = {
                    isEnabled: "true" === "".concat(e),
                    updatedAt: Date.now()
                }, (0, r.updateWistiaLocalStorage)((function(e) {
                    return e.visitorTracking = o.Wistia._visitorTracking
                })), (0, n.globalTrigger)("visitortrackingchange", e), s(document.getElementsByTagName("wistia-player")).forEach((function(t) {
                    t.dispatchEvent(new CustomEvent("visitor-tracking-change", {
                        detail: {
                            isTrackingEnabled: e
                        }
                    }))
                }))
            },
            f = function() {
                if ("boolean" == typeof o.Wistia._visitorTracking) return o.Wistia._visitorTracking;
                if (o.Wistia._visitorTracking) {
                    var e = function() {
                        if (o.Wistia._visitorTrackingDomain)
                            for (var e = o.Wistia._visitorTrackingDomain.split("."); e.length > 0;) {
                                var t = o.Wistia._visitorTracking[e.join(".")],
                                    i = t && t.isEnabled;
                                if (null != i) return i;
                                e.shift()
                            }
                    }();
                    if (null != e) return Boolean(e)
                }
                var t = (0, a.getAllApiHandles)();
                if (o.Wistia.channel && o.Wistia.channel.all) try {
                    t.push.apply(t, s(o.Wistia.channel.all()))
                } catch (e) {}
                return !t.some((function(e) {
                    return !0 === (e._mediaData || e._galleryData || {}).privacyMode
                }))
            }
    }, (e, t, i) => {
        i.d(t, {
            getWistiaLocalStorage: () => o,
            updateWistiaLocalStorage: () => s
        });
        var n = i(40),
            r = i(16),
            a = "wistia",
            o = function() {
                return (0, n.getLocalStorage)(a)
            },
            s = function(e) {
                return r.Wistia._localStorage = (0, n.updateLocalStorage)(a, e), r.Wistia._localStorage
            }
    }, (e, t, i) => {
        i.d(t, {
            getLocalStorage: () => c,
            removeLocalStorage: () => l,
            setLocalStorage: () => u,
            updateLocalStorage: () => d
        });
        var n = i(16),
            r = function(e) {
                setTimeout((function() {
                    throw e
                }), 0)
            },
            a = "_namespacedLocalStorage",
            o = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia-test-localstorage";
                if (null != n.Wistia._localStorageWorks) return n.Wistia._localStorageWorks;
                try {
                    var t = localStorage.getItem(e);
                    localStorage.removeItem(e), localStorage.setItem(e, t), localStorage.removeItem(e), n.Wistia._localStorageWorks = !0
                } catch (e) {
                    n.Wistia._localStorageWorks = !1
                }
                return n.Wistia._localStorageWorks
            },
            s = function() {
                return null == n.Wistia[a] && (n.Wistia[a] = {}), n.Wistia[a]
            },
            c = function(e) {
                if (!o()) return s()[e] || {};
                if (localStorage[e]) try {
                    return "null" === localStorage[e] ? {} : JSON.parse(localStorage[e])
                } catch (e) {
                    r(e)
                }
                return {}
            },
            l = function(e) {
                if (o()) try {
                    localStorage.removeItem(e)
                } catch (e) {
                    r(e)
                } else s()[e] = {}
            },
            u = function(e, t) {
                if (!o()) return null != t && "object" == typeof t && (s()[e] = t), t;
                try {
                    s()[e] = t, localStorage[e] = JSON.stringify(t)
                } catch (e) {
                    r(e)
                }
                return t
            },
            d = function(e, t) {
                var i = c(e);
                try {
                    t(i)
                } catch (e) {
                    r(e)
                }
                return u(e, i)
            }
    }, (e, t, i) => {
        i.d(t, {
            getAllApiHandles: () => a,
            getOneApiHandle: () => o
        });
        i(42);
        var n = i(12),
            r = i(43);
        var a = function() {
                return (void 0 === (0, r.wData)("video") ? [] : Object.values((0, r.wData)("video"))).concat(void 0 === (0, r.wData)("iframe_api") ? [] : Object.values((0, r.wData)("iframe_api")))
            },
            o = function(e) {
                var t, i, r;
                if (void 0 === e) return null !== (r = a()[0]) && void 0 !== r ? r : null;
                var o = null;
                if ("string" == typeof e) {
                    var s, c = e;
                    if (null === (o = null !== (s = document.querySelector("[unique-id='".concat(c, "']"))) && void 0 !== s ? s : document.getElementById(c))) {
                        var l, u = a().find((function(e) {
                            var t, i;
                            return null !== (t = e.hashedId()) && void 0 !== t && t.startsWith(c) || null !== (i = e.container) && void 0 !== i && i.id.startsWith(c) ? e : null
                        }));
                        if ("removed" !== u) o = null !== (l = null == u ? void 0 : u.container) && void 0 !== l ? l : null
                    }
                } else if ("number" == typeof e) {
                    var d = e,
                        f = a();
                    d < 0 && (d = f.length + d);
                    var p, m = f[d];
                    if (void 0 !== m && "removed" !== m) o = null !== (p = m.container) && void 0 !== p ? p : null
                } else e instanceof HTMLElement ? o = e : n.wlog.error("Unrecognized matcher", e);
                return "WISTIA-PLAYER" === (null === (t = o) || void 0 === t ? void 0 : t.tagName) ? o.deprecatedApiDoNotUse : void 0 !== (null === (i = o) || void 0 === i ? void 0 : i.wistiaApi) && "removed" !== o.wistiaApi ? o.wistiaApi : null
            }
    }, (e, t, i) => {
        i.d(t, {
            getAllApiEmbedElements: () => n
        });
        var n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_embed",
                t = document.querySelectorAll("div.".concat(e, ",span.").concat(e, ",iframe.").concat(e));
            return Array.from(t).map((function(e) {
                var t;
                return "WISTIA-PLAYER" === (null === (t = e.lastChild) || void 0 === t ? void 0 : t.nodeName) ? e.lastChild : e
            }))
        }
    }, (e, t, i) => {
        i.d(t, {
            wData: () => a
        });
        var n = i(4),
            r = i(16),
            a = function(e, t) {
                return (0, n.isArray)(e) || (e = e.split(".")), null != t && (0, n.setDeep)(r.Wistia, ["_data"].concat(e), t), (0, n.getDeep)(r.Wistia, ["_data"].concat(e))
            }
    }, , , , , , , , , , (e, t, i) => {
        i.d(t, {
            parentFramesLength: () => r
        });
        i(7), i(54), i(55);
        var n = i(16),
            r = function() {
                try {
                    return parent.frames.length
                } catch (e) {
                    return n.Wistia.warn(e), 1
                }
            }
    }, (e, t, i) => {}, (e, t, i) => {}, , , , , , , , , , , , , , , , (e, t, i) => {
        i.d(t, {
            doTimeout: () => a
        });
        var n = i(4),
            r = i(16);
        r.Wistia;
        null == r.Wistia._timeouts && (r.Wistia._timeouts = {});
        var a = function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                (0, n.isArray)(e) && (e = e.join("."));
                var a = c(e);
                if (o(e, a), t) {
                    var s = r.Wistia._timeouts[a];
                    null == s && (s = r.Wistia._timeouts[a] = {});
                    var l = setTimeout((function() {
                        delete s[e], t()
                    }), i);
                    return s[e] = l, l
                }
                return r.Wistia._timeouts[a][e]
            },
            o = function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, n.isArray)(e) && (e = e.join(".")), "__global__" === (i = i || c(e)) && (t = r.Wistia._timeouts[e]))
                    for (var a in t) {
                        var o = t[a];
                        clearTimeout(o), delete t[a]
                    }
                if (t = r.Wistia._timeouts[i])
                    for (var l in t) {
                        var u = t[l];
                        !l.indexOf || 0 !== l.indexOf(e) || l.length !== e.length && "." !== l.charAt(e.length) || (clearTimeout(u), delete t[l])
                    }
                r.Wistia.blockSweepTimeouts || (r.Wistia.blockSweepTimeouts = !0, setTimeout(s, 0), setTimeout((function() {
                    r.Wistia.blockSweepTimeouts = !1
                }), 5e3))
            },
            s = function() {
                for (var e in r.Wistia._timeouts) {
                    var t = r.Wistia._timeouts[e];
                    (0, n.isEmpty)(t) && delete r.Wistia._timeouts[e]
                }
            },
            c = function(e) {
                var t = e.indexOf(".");
                return t > 0 ? e.substring(0, t) : "__global__"
            }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (e, t, i) => {
        i.r(t), i.d(t, {
            ALL_API_HANDLES_KEY: () => f,
            onFindApiHandle: () => w,
            onFindApiHandleRunOnce: () => _
        });
        var n = i(7),
            r = i(41),
            a = i(42),
            o = i(3),
            s = i(6),
            c = i(12),
            l = i(18);

        function u(e) {
            return function(e) {
                if (Array.isArray(e)) return d(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? d(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var f = "_all",
            p = null,
            m = [],
            h = [],
            v = function(e, t) {
                var i, n, r = null !== (i = null !== (n = e.wistiaApi) && void 0 !== n ? n : e.deprecatedApiDoNotUse) && void 0 !== i ? i : null;
                null !== r && "removed" !== r && t(r)
            },
            g = function(e, t) {
                return e.addEventListener(l.INIT_EMBED_EVENT, t), e.addEventListener(l.INTERNAL_API_ON_FIND_EVENT, t), e.addEventListener(l.AFTER_REPLACE_EVENT, t), [function() {
                    return e.removeEventListener(l.INIT_EMBED_EVENT, t)
                }, function() {
                    return e.removeEventListener(l.INTERNAL_API_ON_FIND_EVENT, t)
                }, function() {
                    return e.removeEventListener(l.AFTER_REPLACE_EVENT, t)
                }]
            },
            b = function(e, t, i, n) {
                null !== e && "removed" !== e && void 0 !== e && (t !== f && e !== (0, r.getOneApiHandle)(t) || (n ? e.up((function() {
                    return i(e)
                })) : i(e)))
            },
            w = function(e) {
                var t = e.matcher,
                    i = e.functionToRun,
                    r = e.shouldOnlyRunWhenVisible,
                    l = void 0 !== r && r,
                    d = function(e) {
                        b(e, t, i, l)
                    },
                    f = function(e) {
                        var n = e.detail,
                            r = n.api,
                            a = n.deprecatedApiDoNotUse;
                        b(null != r ? r : a, t, i, l)
                    };
                m.push(d), h.push(f), null === p && (p = (0, o.elemMutationObserver)((function(e) {
                    e.forEach((function(e) {
                        e.addedNodes.forEach((function(e) {
                            if (e instanceof HTMLElement) {
                                var t = null;
                                "WISTIA-PLAYER" === e.tagName || (0, o.elemHasClass)(e, "wistia_embed") ? t = e : e.querySelector("wistia-player") ? t = e.querySelector("wistia-player") : e.querySelector(".wistia_embed") && (t = e.querySelector(".wistia_embed")), null !== t && (m.forEach((function(e) {
                                    v(t, e)
                                })), h.forEach((function(e) {
                                    g(t, e)
                                })))
                            }
                        }))
                    }))
                })), (0, s.onDocReady)((function() {
                    if (null !== p) try {
                        p.observe(document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    } catch (e) {
                        c.wlog.error(e)
                    }
                })));
                var w = function() {
                    var e = function(e, t) {
                        var i = Array.from((0, a.getAllApiEmbedElements)()),
                            n = Array.from(document.getElementsByTagName("wistia-player"));
                        return i.concat(n).reduce((function(i, n) {
                            return v(n, e), [].concat(u(i), u(g(n, t)))
                        }), [])
                    }(d, f);
                    return function() {
                        return e.map((function(e) {
                            return e()
                        }))
                    }
                };
                w(), (0, n.poll)(s.isDocReady, w, 300, 1e4)
            },
            _ = function(e) {
                var t = e.matcher,
                    i = e.functionToRun,
                    n = e.shouldOnlyRunWhenVisible,
                    r = void 0 !== n && n,
                    a = new Set;
                w({
                    matcher: t,
                    shouldOnlyRunWhenVisible: r,
                    functionToRun: function(e) {
                        a.has(e) || (a.add(e), i(e))
                    }
                })
            }
    }],
    __webpack_module_cache__ = {};

function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var i = __webpack_module_cache__[e] = {
        exports: {}
    };
    return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports
}
__webpack_require__.d = (e, t) => {
    for (var i in t) __webpack_require__.o(t, i) && !__webpack_require__.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
    })
}, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }), Object.defineProperty(e, "__esModule", {
        value: !0
    })
};
var __webpack_exports__ = {};
(() => {
    __webpack_require__.d(__webpack_exports__, {
        iframeInit: () => T
    });
    var e, t, i, n, r, a, o, s, c, l, u, d, f, p, m, h, v, g, b, w, _, E, y = [].slice;
    r = __webpack_require__(16).Wistia, (v = __webpack_require__(38)).isVisitorTrackingEnabled, E = v.setVisitorTrackingEnabled, m = __webpack_require__(53).parentFramesLength, h = __webpack_require__(24).parseUrl, s = __webpack_require__(71).doTimeout, g = __webpack_require__(4), a = g.castDeep, u = g.getDeep, _ = g.setDeep, d = g.isObject, f = g.merge, c = g.eachLeaf, l = __webpack_require__(3).elemBind, b = __webpack_require__(118), p = b.onFindApiHandleRunOnce, e = b.ALL_API_HANDLES_KEY, w = __webpack_require__(18), i = w.CROSSTIME_EVENT_EV1, t = w.BETWEENTIMES_EVENT_EV1, n = w.MUTE_CHANGE_EVENT, o = __webpack_require__(17).convertedEventNames,
        function() {
            if (document.querySelectorAll("wistia-player").length > 0) p({
                matcher: e,
                functionToRun: function(e) {
                    return T(e._mediaData, e._opts, e)
                }
            })
        }();
    var T = function(e, p, v) {
        var g, b, w, T, W, S, A, P, k, L, M, O, I, N, x, D, j;
        for (S in D = h(location.href), b = f(p, D.params), b.pageTitle = document.title, a(b), b.container = "wistia_video", b.canonicalUrl || (b.canonicalUrl = b.pageUrl), b.canonicalTitle || (b.canonicalTitle = b.pageTitle), O = b.plugin || {}) j = O[S], b.plugin[S].outsideIframe && (b.plugin[S] = null, delete b.plugin[S]);
        for (D.params.popover && (u(D.params, "plugin.requireEmail") ? b.autoPlay = !1 : b.autoPlay = !0), !1 !== b.autoPlay && b.autoplay && (b.autoPlay = !0), D.params.twitter && !1 !== b.autoPlay && (b.autoPlay = !!b.autoplay), b._inIframe = !0, window.wistiaEmbed = v || r.embed(e, b), wistiaEmbed._iframeBindings = {}, (N = function() {
                var e, t;
                return e = document.querySelector("html"), t = wistiaEmbed.playerLanguage(), e.setAttribute("lang", t.code)
            })(), s(wistiaEmbed.uuid + ".fit_later", (function() {
                return window.wistiaEmbed.fit()
            }), 100), (r.detect.iphone || r.detect.ipad) && wistiaEmbed.ready((function() {
                return setInterval((function() {
                    return wistiaEmbed.elem().style.zoom = "", wistiaEmbed.elem().style.zoom = 1
                }), 3e3)
            })), M = function(e) {
                var n, a, s, c, l, u, d, f, p;
                if ("remove" !== e.data) {
                    if (!/^(visitor_key|send_visitor_key|clear_visitor_key)/.test(e.data))
                        if (/^wistia-iframe-/.test(e.data)) window._allIframes.join(" ").indexOf(e.data) < 0 && window._allIframes.push(e.data);
                        else if ("declare-existing-wistia-iframe" !== e.data) {
                        if (/^set-visitor-tracking-enabled=/.test(e.data)) return c = e.data.match(/^set-visitor-tracking-enabled=([^\|]+)\|(.*)/), r._visitorTrackingDomain = c[2], void E(c[1], c[2]);
                        if ("amp-listening" !== e.data)
                            if ("amp-play" !== e.data)
                                if ("amp-pause" !== e.data)
                                    if ("amp-mute" !== e.data)
                                        if ("amp-unmute" !== e.data) {
                                            if ("string" == typeof e.data) try {
                                                u = JSON.parse(e.data)
                                            } catch (t) {
                                                r.notice("inside_iframe", "receiveMessage", "Could not parse message from " + e.origin), r.notice("inside_iframe", "receiveMessage", e.data), u = {}
                                            } else u = e.data;
                                            if (d = u.method, n = u.args, e.source === parent) {
                                                if ("startIframeHandshake" === d) {
                                                    if (window.apiSignature = n[0], !window.wistiaEmbed) return;
                                                    return wistiaEmbed.postMessage("relay.trigger", "iframebound"), wistiaEmbed.postMessage("updateProperties", {
                                                        options: x(wistiaEmbed.options),
                                                        params: x(wistiaEmbed.params),
                                                        _embedType: wistiaEmbed.embedType,
                                                        _hashedId: wistiaEmbed.hashedId(),
                                                        _width: wistiaEmbed.width(),
                                                        _height: wistiaEmbed.height(),
                                                        _videoWidth: wistiaEmbed.videoWidth(),
                                                        _videoHeight: wistiaEmbed.videoHeight(),
                                                        _playerColor: wistiaEmbed.playerColor()
                                                    }), wistiaEmbed._hasImpl((function() {
                                                        return wistiaEmbed.postMessage("_hasImpl", !0)
                                                    })), wistiaEmbed.hasData((function() {
                                                        return wistiaEmbed.postMessage("updateProperties", {
                                                            _embedType: wistiaEmbed.embedType,
                                                            options: x(wistiaEmbed.options),
                                                            params: x(wistiaEmbed.params),
                                                            _language: wistiaEmbed.language(),
                                                            _languages: wistiaEmbed.languages(),
                                                            _name: wistiaEmbed.name(),
                                                            _duration: wistiaEmbed.duration(),
                                                            _videoWidth: wistiaEmbed.videoWidth(),
                                                            _videoHeight: wistiaEmbed.videoHeight(),
                                                            _mediaData: wistiaEmbed._mediaData,
                                                            _playerColor: wistiaEmbed.playerColor()
                                                        }), wistiaEmbed.postMessage("hasData", !0)
                                                    })), wistiaEmbed.embedded((function() {
                                                        return wistiaEmbed.postMessage("updateProperties", {
                                                            _embedType: wistiaEmbed.embedType,
                                                            options: x(wistiaEmbed.options),
                                                            params: x(wistiaEmbed.params),
                                                            origAspectRatio: wistiaEmbed.aspect(),
                                                            origVideoHeight: wistiaEmbed.videoHeight(),
                                                            origVideoWidth: wistiaEmbed.videoWidth(),
                                                            origHeight: wistiaEmbed.height(),
                                                            origWidth: wistiaEmbed.width(),
                                                            origPluginWidth: wistiaEmbed.extraWidth(),
                                                            origPluginHeight: wistiaEmbed.extraHeight(),
                                                            _videoWidth: wistiaEmbed.videoWidth(),
                                                            _videoHeight: wistiaEmbed.videoHeight(),
                                                            _width: wistiaEmbed.width(),
                                                            _height: wistiaEmbed.height(),
                                                            _playerLanguage: wistiaEmbed.playerLanguage(),
                                                            _playerColor: wistiaEmbed.playerColor()
                                                        }), wistiaEmbed.postMessage("embedded", !0)
                                                    })), wistiaEmbed.ready((function() {
                                                        return wistiaEmbed.postMessage("updateProperties", {
                                                            options: x(wistiaEmbed.options),
                                                            params: x(wistiaEmbed.params),
                                                            _embedType: wistiaEmbed.embedType,
                                                            _visitorKey: wistiaEmbed.visitorKey(),
                                                            _eventKey: wistiaEmbed.eventKey(),
                                                            _width: wistiaEmbed.width(),
                                                            _height: wistiaEmbed.height(),
                                                            _videoWidth: wistiaEmbed.videoWidth(),
                                                            _videoHeight: wistiaEmbed.videoHeight(),
                                                            _state: wistiaEmbed.state(),
                                                            _time: wistiaEmbed.time(),
                                                            _isMuted: wistiaEmbed.isMuted(),
                                                            _volume: wistiaEmbed.volume(),
                                                            _playerLanguage: wistiaEmbed.playerLanguage(),
                                                            _playerColor: wistiaEmbed.playerColor()
                                                        }), wistiaEmbed.postMessage("relay.trigger", "videoready"), r.visitorKey.ready().then((function() {
                                                            return wistiaEmbed.postMessage("updateProperties", {
                                                                _visitorKey: wistiaEmbed.visitorKey()
                                                            })
                                                        }))
                                                    }))
                                                }
                                                return "bind" === d || "unbind" === d ? (s = n[0], "bind" !== d || s !== i && s !== t && !o[s] || (a = new Function("return " + n[n.length - 1])(), null != ("undefined" != typeof wistiaEmbed && null !== wistiaEmbed ? wistiaEmbed._iframeBindings[s] : void 0) ? "undefined" != typeof wistiaEmbed && null !== wistiaEmbed && wistiaEmbed._iframeBindings[s].push(a) : "undefined" != typeof wistiaEmbed && null !== wistiaEmbed && (wistiaEmbed._iframeBindings[s] = [a])), f = n[n.length - 1], l = wistiaEmbed._iframeBindings[s].findIndex((function(e) {
                                                    return e.toString() === f
                                                })), n[n.length - 1] = null != (p = wistiaEmbed._iframeBindings[s][l]) ? p : new Function("return " + f)(), "unbind" === d && l > -1 && wistiaEmbed._iframeBindings[s].splice(l, 1), "undefined" != typeof wistiaEmbed && null !== wistiaEmbed ? wistiaEmbed[d].apply(wistiaEmbed, n) : void 0) : d && "undefined" != typeof wistiaEmbed && null !== wistiaEmbed ? wistiaEmbed[d].apply(wistiaEmbed, n) : void 0
                                            }
                                        } else wistiaEmbed.unmute();
                        else wistiaEmbed.mute();
                        else wistiaEmbed.pause();
                        else wistiaEmbed.play();
                        else 0
                    } else e.source.postMessage("wistia-iframe-" + iframeUuid, "*")
                } else wistiaEmbed.remove()
            }, x = function(e) {
                var t;
                return t = {}, c(e, (function(e, i) {
                    if (/^string|number|boolean$/i.test(typeof e)) return _(t, i, e)
                })), t
            }, window.apiSignature = null, window.iframeUuid = Math.random().toString(36).replace(/[^a-z0-9]+/g, ""), window._allIframes = ["wistia-iframe-" + iframeUuid], wistiaEmbed.postMessage = function() {
                var e, t, i;
                if (i = arguments[0], e = 2 <= arguments.length ? y.call(arguments, 1) : [], parent !== self) return t = {
                    method: i,
                    args: e
                }, apiSignature && (t.signature = apiSignature), t = JSON.stringify(t), parent.postMessage(t, "*")
            }, wistiaEmbed.ping = function() {
                var e;
                return e = 1 <= arguments.length ? y.call(arguments, 0) : [], wistiaEmbed.postMessage.apply(wistiaEmbed, ["pong"].concat(y.call(e)))
            }, wistiaEmbed.updateProperties = function(e) {
                for (S in e) j = e[S], d(j) ? this[S] = f({}, this[S], j) : this[S] = j;
                return this.postMessage("updateProperties", x(e))
            }, T = 0, A = (L = window.wistiaPostMessageQueue || []).length; T < A; T++) {
            k = L[T];
            try {
                M(k)
            } catch (e) {
                g = e, r.error(g)
            }
        }
        if (window.wistiaPostMessageQueue = [], parent !== self) {
            if (parent.postMessage("new-wistia-iframe", "*"), m() <= 25)
                for (W = 0, P = (I = parent.frames).length; W < P; W++)(w = I[W]) !== self && w !== parent && (w.postMessage("wistia-iframe-" + iframeUuid, "*"), w.postMessage("declare-existing-wistia-iframe", "*"));
            return (("undefined" != typeof wistiaEmbed && null !== wistiaEmbed ? wistiaEmbed.embedElement : void 0) || ("undefined" != typeof wistiaEmbed && null !== wistiaEmbed ? wistiaEmbed.container : void 0)).addEventListener(n, (function(e) {
                var t;
                return wistiaEmbed.postMessage("updateProperties", {
                    _isMuted: null != (t = e.detail) ? t.isMuted : void 0
                })
            })), wistiaEmbed.bind("down", (function() {
                return wistiaEmbed.postMessage("updateProperties", {
                    _down: !0
                })
            })), wistiaEmbed.bind("up", (function() {
                return wistiaEmbed.postMessage("updateProperties", {
                    _down: !1
                })
            })), wistiaEmbed.bind("volumechange", (function(e, t) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _volume: e,
                    _isMuted: t
                })
            })), wistiaEmbed.container.addEventListener("emailchange", (function(e) {
                var t;
                return t = e.detail.email, wistiaEmbed.postMessage("updateProperties", {
                    _email: t,
                    params: {
                        trackEmail: t
                    }
                })
            })), wistiaEmbed.bind("playpending", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _lastPlayInfo: wistiaEmbed.lastPlayInfo()
                })
            })), wistiaEmbed.bind("play", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _lastPlayInfo: wistiaEmbed.lastPlayInfo()
                })
            })), wistiaEmbed.bind("playrejected", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _lastPlayInfo: wistiaEmbed.lastPlayInfo()
                })
            })), wistiaEmbed.bind("timechange", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _time: e
                })
            })), wistiaEmbed.bind("statechange", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _state: e
                })
            })), wistiaEmbed.bind("widthchange", (function() {
                return wistiaEmbed.postMessage("updateProperties", {
                    _videoWidth: wistiaEmbed.videoWidth(),
                    _width: wistiaEmbed.width()
                })
            })), wistiaEmbed.bind("heightchange", (function() {
                return wistiaEmbed.postMessage("updateProperties", {
                    _videoHeight: wistiaEmbed.videoHeight(),
                    _height: wistiaEmbed.height()
                })
            })), wistiaEmbed.bind("foreigndatachange", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _foreignData: e
                })
            })), wistiaEmbed.bind("percentwatchedchanged", (function(e) {
                return wistiaEmbed.postMessage("updateProperties", {
                    _percentWatched: e
                })
            })), wistiaEmbed.bind("playerlanguagechange", (function(e) {
                return N(), wistiaEmbed.postMessage("updateProperties", {
                    _playerLanguage: e
                })
            })), wistiaEmbed.bind("all", (function() {
                var e;
                return "afterremove" === (e = 1 <= arguments.length ? y.call(arguments, 0) : [])[0] ? wistiaEmbed.postMessage("relay.trigger", "_afterremove") : /^up|down$/.test(e[0]) ? void 0 : wistiaEmbed.postMessage.apply(wistiaEmbed, ["_trigger"].concat(y.call(e)))
            })), l(window, "message", M)
        }
    }
})();
var __webpack_exports__iframeInit = __webpack_exports__.iframeInit;
export {
    __webpack_exports__iframeInit as iframeInit
};
//# sourceMappingURL=insideIframe.js.map