"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "28dba31a-194d-5738-8f5c-919231c84b0a")
    } catch (e) {}
}();

(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [654], {

        /***/
        "lfY8":
            /***/
            ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    "onCLS": () => ( /* binding */ F),
                    /* harmony export */
                    "onFCP": () => ( /* binding */ I),
                    /* harmony export */
                    "onFID": () => ( /* binding */ O),
                    /* harmony export */
                    "onINP": () => ( /* binding */ $),
                    /* harmony export */
                    "onLCP": () => ( /* binding */ ne),
                    /* harmony export */
                    "onTTFB": () => ( /* binding */ oe)
                    /* harmony export */
                });
                /* unused harmony exports CLSThresholds, FCPThresholds, FIDThresholds, INPThresholds, LCPThresholds, TTFBThresholds */
                var e, t, n, r, i, a = function() {
                        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                    },
                    o = function(e) {
                        if ("loading" === document.readyState) return "loading";
                        var t = a();
                        if (t) {
                            if (e < t.domInteractive) return "loading";
                            if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                            if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                        }
                        return "complete"
                    },
                    u = function(e) {
                        var t = e.nodeName;
                        return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                    },
                    c = function(e, t) {
                        var n = "";
                        try {
                            for (; e && 9 !== e.nodeType;) {
                                var r = e,
                                    i = r.id ? "#" + r.id : u(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                                if (n.length + i.length > (t || 100) - 1) return n || i;
                                if (n = n ? i + ">" + n : i, r.id) break;
                                e = r.parentNode
                            }
                        } catch (e) {}
                        return n
                    },
                    s = -1,
                    f = function() {
                        return s
                    },
                    d = function(e) {
                        addEventListener("pageshow", (function(t) {
                            t.persisted && (s = t.timeStamp, e(t))
                        }), !0)
                    },
                    l = function() {
                        var e = a();
                        return e && e.activationStart || 0
                    },
                    m = function(e, t) {
                        var n = a(),
                            r = "navigate";
                        f() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || l() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-")));
                        return {
                            name: e,
                            value: void 0 === t ? -1 : t,
                            rating: "good",
                            delta: 0,
                            entries: [],
                            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                            navigationType: r
                        }
                    },
                    v = function(e, t, n) {
                        try {
                            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                                var r = new PerformanceObserver((function(e) {
                                    Promise.resolve().then((function() {
                                        t(e.getEntries())
                                    }))
                                }));
                                return r.observe(Object.assign({
                                    type: e,
                                    buffered: !0
                                }, n || {})), r
                            }
                        } catch (e) {}
                    },
                    p = function(e, t, n, r) {
                        var i, a;
                        return function(o) {
                            t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = a, t.rating = function(e, t) {
                                return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                            }(t.value, n), e(t))
                        }
                    },
                    h = function(e) {
                        requestAnimationFrame((function() {
                            return requestAnimationFrame((function() {
                                return e()
                            }))
                        }))
                    },
                    g = function(e) {
                        var t = function(t) {
                            "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                        };
                        addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
                    },
                    T = function(e) {
                        var t = !1;
                        return function(n) {
                            t || (e(n), t = !0)
                        }
                    },
                    y = -1,
                    E = function() {
                        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                    },
                    S = function(e) {
                        "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === e.type ? e.timeStamp : 0, b())
                    },
                    L = function() {
                        addEventListener("visibilitychange", S, !0), addEventListener("prerenderingchange", S, !0)
                    },
                    b = function() {
                        removeEventListener("visibilitychange", S, !0), removeEventListener("prerenderingchange", S, !0)
                    },
                    C = function() {
                        return y < 0 && (y = E(), L(), d((function() {
                            setTimeout((function() {
                                y = E(), L()
                            }), 0)
                        }))), {
                            get firstHiddenTime() {
                                return y
                            }
                        }
                    },
                    w = function(e) {
                        document.prerendering ? addEventListener("prerenderingchange", (function() {
                            return e()
                        }), !0) : e()
                    },
                    M = [1800, 3e3],
                    x = function(e, t) {
                        t = t || {}, w((function() {
                            var n, r = C(),
                                i = m("FCP"),
                                a = v("paint", (function(e) {
                                    e.forEach((function(e) {
                                        "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - l(), 0), i.entries.push(e), n(!0)))
                                    }))
                                }));
                            a && (n = p(e, i, M, t.reportAllChanges), d((function(r) {
                                i = m("FCP"), n = p(e, i, M, t.reportAllChanges), h((function() {
                                    i.value = performance.now() - r.timeStamp, n(!0)
                                }))
                            })))
                        }))
                    },
                    A = [.1, .25],
                    F = function(e, t) {
                        ! function(e, t) {
                            t = t || {}, x(T((function() {
                                var n, r = m("CLS", 0),
                                    i = 0,
                                    a = [],
                                    o = function(e) {
                                        e.forEach((function(e) {
                                            if (!e.hadRecentInput) {
                                                var t = a[0],
                                                    n = a[a.length - 1];
                                                i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, a.push(e)) : (i = e.value, a = [e])
                                            }
                                        })), i > r.value && (r.value = i, r.entries = a, n())
                                    },
                                    u = v("layout-shift", o);
                                u && (n = p(e, r, A, t.reportAllChanges), g((function() {
                                    o(u.takeRecords()), n(!0)
                                })), d((function() {
                                    i = 0, r = m("CLS", 0), n = p(e, r, A, t.reportAllChanges), h((function() {
                                        return n()
                                    }))
                                })), setTimeout(n, 0))
                            })))
                        }((function(t) {
                            ! function(e) {
                                if (e.entries.length) {
                                    var t = e.entries.reduce((function(e, t) {
                                        return e && e.value > t.value ? e : t
                                    }));
                                    if (t && t.sources && t.sources.length) {
                                        var n = (r = t.sources).find((function(e) {
                                            return e.node && 1 === e.node.nodeType
                                        })) || r[0];
                                        if (n) return void(e.attribution = {
                                            largestShiftTarget: c(n.node),
                                            largestShiftTime: t.startTime,
                                            largestShiftValue: t.value,
                                            largestShiftSource: n,
                                            largestShiftEntry: t,
                                            loadState: o(t.startTime)
                                        })
                                    }
                                }
                                var r;
                                e.attribution = {}
                            }(t), e(t)
                        }), t)
                    },
                    I = function(e, t) {
                        x((function(t) {
                            ! function(e) {
                                if (e.entries.length) {
                                    var t = a(),
                                        n = e.entries[e.entries.length - 1];
                                    if (t) {
                                        var r = t.activationStart || 0,
                                            i = Math.max(0, t.responseStart - r);
                                        return void(e.attribution = {
                                            timeToFirstByte: i,
                                            firstByteToFCP: e.value - i,
                                            loadState: o(e.entries[0].startTime),
                                            navigationEntry: t,
                                            fcpEntry: n
                                        })
                                    }
                                }
                                e.attribution = {
                                    timeToFirstByte: 0,
                                    firstByteToFCP: e.value,
                                    loadState: o(f())
                                }
                            }(t), e(t)
                        }), t)
                    },
                    P = {
                        passive: !0,
                        capture: !0
                    },
                    B = new Date,
                    D = function(r, i) {
                        e || (e = i, t = r, n = new Date, q(removeEventListener), k())
                    },
                    k = function() {
                        if (t >= 0 && t < n - B) {
                            var i = {
                                entryType: "first-input",
                                name: e.type,
                                target: e.target,
                                cancelable: e.cancelable,
                                startTime: e.timeStamp,
                                processingStart: e.timeStamp + t
                            };
                            r.forEach((function(e) {
                                e(i)
                            })), r = []
                        }
                    },
                    R = function(e) {
                        if (e.cancelable) {
                            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                            "pointerdown" == e.type ? function(e, t) {
                                var n = function() {
                                        D(e, t), i()
                                    },
                                    r = function() {
                                        i()
                                    },
                                    i = function() {
                                        removeEventListener("pointerup", n, P), removeEventListener("pointercancel", r, P)
                                    };
                                addEventListener("pointerup", n, P), addEventListener("pointercancel", r, P)
                            }(t, e) : D(t, e)
                        }
                    },
                    q = function(e) {
                        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                            return e(t, R, P)
                        }))
                    },
                    H = [100, 300],
                    N = function(n, i) {
                        i = i || {}, w((function() {
                            var a, o = C(),
                                u = m("FID"),
                                c = function(e) {
                                    e.startTime < o.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), a(!0))
                                },
                                s = function(e) {
                                    e.forEach(c)
                                },
                                f = v("first-input", s);
                            a = p(n, u, H, i.reportAllChanges), f && g(T((function() {
                                s(f.takeRecords()), f.disconnect()
                            }))), f && d((function() {
                                var o;
                                u = m("FID"), a = p(n, u, H, i.reportAllChanges), r = [], t = -1, e = null, q(addEventListener), o = c, r.push(o), k()
                            }))
                        }))
                    },
                    O = function(e, t) {
                        N((function(t) {
                            ! function(e) {
                                var t = e.entries[0];
                                e.attribution = {
                                    eventTarget: c(t.target),
                                    eventType: t.name,
                                    eventTime: t.startTime,
                                    eventEntry: t,
                                    loadState: o(t.startTime)
                                }
                            }(t), e(t)
                        }), t)
                    },
                    j = 0,
                    U = 1 / 0,
                    V = 0,
                    _ = function(e) {
                        e.forEach((function(e) {
                            e.interactionId && (U = Math.min(U, e.interactionId), V = Math.max(V, e.interactionId), j = V ? (V - U) / 7 + 1 : 0)
                        }))
                    },
                    z = function() {
                        return i ? j : performance.interactionCount || 0
                    },
                    G = function() {
                        "interactionCount" in performance || i || (i = v("event", _, {
                            type: "event",
                            buffered: !0,
                            durationThreshold: 0
                        }))
                    },
                    J = [200, 500],
                    K = 0,
                    Q = function() {
                        return z() - K
                    },
                    W = [],
                    X = {},
                    Y = function(e) {
                        var t = W[W.length - 1],
                            n = X[e.interactionId];
                        if (n || W.length < 10 || e.duration > t.latency) {
                            if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
                            else {
                                var r = {
                                    id: e.interactionId,
                                    latency: e.duration,
                                    entries: [e]
                                };
                                X[r.id] = r, W.push(r)
                            }
                            W.sort((function(e, t) {
                                return t.latency - e.latency
                            })), W.splice(10).forEach((function(e) {
                                delete X[e.id]
                            }))
                        }
                    },
                    Z = function(e, t) {
                        t = t || {}, w((function() {
                            var n;
                            G();
                            var r, i = m("INP"),
                                a = function(e) {
                                    e.forEach((function(e) {
                                        (e.interactionId && Y(e), "first-input" === e.entryType) && (!W.some((function(t) {
                                            return t.entries.some((function(t) {
                                                return e.duration === t.duration && e.startTime === t.startTime
                                            }))
                                        })) && Y(e))
                                    }));
                                    var t, n = (t = Math.min(W.length - 1, Math.floor(Q() / 50)), W[t]);
                                    n && n.latency !== i.value && (i.value = n.latency, i.entries = n.entries, r())
                                },
                                o = v("event", a, {
                                    durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
                                });
                            r = p(e, i, J, t.reportAllChanges), o && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && o.observe({
                                type: "first-input",
                                buffered: !0
                            }), g((function() {
                                a(o.takeRecords()), i.value < 0 && Q() > 0 && (i.value = 0, i.entries = []), r(!0)
                            })), d((function() {
                                W = [], K = z(), i = m("INP"), r = p(e, i, J, t.reportAllChanges)
                            })))
                        }))
                    },
                    $ = function(e, t) {
                        Z((function(t) {
                            ! function(e) {
                                if (e.entries.length) {
                                    var t = e.entries.sort((function(e, t) {
                                            return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                                        }))[0],
                                        n = e.entries.find((function(e) {
                                            return e.target
                                        }));
                                    e.attribution = {
                                        eventTarget: c(n && n.target),
                                        eventType: t.name,
                                        eventTime: t.startTime,
                                        eventEntry: t,
                                        loadState: o(t.startTime)
                                    }
                                } else e.attribution = {}
                            }(t), e(t)
                        }), t)
                    },
                    ee = [2500, 4e3],
                    te = {},
                    ne = function(e, t) {
                        ! function(e, t) {
                            t = t || {}, w((function() {
                                var n, r = C(),
                                    i = m("LCP"),
                                    a = function(e) {
                                        var t = e[e.length - 1];
                                        t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - l(), 0), i.entries = [t], n())
                                    },
                                    o = v("largest-contentful-paint", a);
                                if (o) {
                                    n = p(e, i, ee, t.reportAllChanges);
                                    var u = T((function() {
                                        te[i.id] || (a(o.takeRecords()), o.disconnect(), te[i.id] = !0, n(!0))
                                    }));
                                    ["keydown", "click"].forEach((function(e) {
                                        addEventListener(e, (function() {
                                            return setTimeout(u, 0)
                                        }), !0)
                                    })), g(u), d((function(r) {
                                        i = m("LCP"), n = p(e, i, ee, t.reportAllChanges), h((function() {
                                            i.value = performance.now() - r.timeStamp, te[i.id] = !0, n(!0)
                                        }))
                                    }))
                                }
                            }))
                        }((function(t) {
                            ! function(e) {
                                if (e.entries.length) {
                                    var t = a();
                                    if (t) {
                                        var n = t.activationStart || 0,
                                            r = e.entries[e.entries.length - 1],
                                            i = r.url && performance.getEntriesByType("resource").filter((function(e) {
                                                return e.name === r.url
                                            }))[0],
                                            o = Math.max(0, t.responseStart - n),
                                            u = Math.max(o, i ? (i.requestStart || i.startTime) - n : 0),
                                            s = Math.max(u, i ? i.responseEnd - n : 0),
                                            f = Math.max(s, r ? r.startTime - n : 0),
                                            d = {
                                                element: c(r.element),
                                                timeToFirstByte: o,
                                                resourceLoadDelay: u - o,
                                                resourceLoadTime: s - u,
                                                elementRenderDelay: f - s,
                                                navigationEntry: t,
                                                lcpEntry: r
                                            };
                                        return r.url && (d.url = r.url), i && (d.lcpResourceEntry = i), void(e.attribution = d)
                                    }
                                }
                                e.attribution = {
                                    timeToFirstByte: 0,
                                    resourceLoadDelay: 0,
                                    resourceLoadTime: 0,
                                    elementRenderDelay: e.value
                                }
                            }(t), e(t)
                        }), t)
                    },
                    re = [800, 1800],
                    ie = function e(t) {
                        document.prerendering ? w((function() {
                            return e(t)
                        })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                            return e(t)
                        }), !0) : setTimeout(t, 0)
                    },
                    ae = function(e, t) {
                        t = t || {};
                        var n = m("TTFB"),
                            r = p(e, n, re, t.reportAllChanges);
                        ie((function() {
                            var i = a();
                            if (i) {
                                var o = i.responseStart;
                                if (o <= 0 || o > performance.now()) return;
                                n.value = Math.max(o - l(), 0), n.entries = [i], r(!0), d((function() {
                                    n = m("TTFB", 0), (r = p(e, n, re, t.reportAllChanges))(!0)
                                }))
                            }
                        }))
                    },
                    oe = function(e, t) {
                        ae((function(t) {
                            ! function(e) {
                                if (e.entries.length) {
                                    var t = e.entries[0],
                                        n = t.activationStart || 0,
                                        r = Math.max(t.domainLookupStart - n, 0),
                                        i = Math.max(t.connectStart - n, 0),
                                        a = Math.max(t.requestStart - n, 0);
                                    e.attribution = {
                                        waitingTime: r,
                                        dnsTime: i - r,
                                        connectionTime: a - i,
                                        requestTime: e.value - a,
                                        navigationEntry: t
                                    }
                                } else e.attribution = {
                                    waitingTime: 0,
                                    dnsTime: 0,
                                    connectionTime: 0,
                                    requestTime: 0
                                }
                            }(t), e(t)
                        }), t)
                    };


                /***/
            })

    }
]);
//# debugId=28dba31a-194d-5738-8f5c-919231c84b0a