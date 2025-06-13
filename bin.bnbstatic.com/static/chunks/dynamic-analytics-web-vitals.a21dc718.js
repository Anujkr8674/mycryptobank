"use strict";
(self.webpackChunkresearch_new_ui = self.webpackChunkresearch_new_ui || []).push([
    [848], {
        Rvfj: (e, t, n) => {
            n.d(t, {
                onCLS: () => x,
                onFCP: () => B,
                onFID: () => U,
                onINP: () => te,
                onLCP: () => ie,
                onTTFB: () => ce
            });
            var r, i, a, o, u, c = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                s = function(e) {
                    if ("loading" === document.readyState) return "loading";
                    var t = c();
                    if (t) {
                        if (e < t.domInteractive) return "loading";
                        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                        if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                    }
                    return "complete"
                },
                f = function(e) {
                    var t = e.nodeName;
                    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                },
                d = function(e, t) {
                    var n = "";
                    try {
                        for (; e && 9 !== e.nodeType;) {
                            var r = e,
                                i = r.id ? "#" + r.id : f(r) + (r.className && r.className.trim().length ? "." + r.className.trim().replace(/\s+/g, ".") : "");
                            if (n.length + i.length > (t || 100) - 1) return n || i;
                            if (n = n ? i + ">" + n : i, r.id) break;
                            e = r.parentNode
                        }
                    } catch (e) {}
                    return n
                },
                l = -1,
                m = function() {
                    return l
                },
                v = function(e) {
                    addEventListener("pageshow", (function(t) {
                        t.persisted && (l = t.timeStamp, e(t))
                    }), !0)
                },
                p = function() {
                    var e = c();
                    return e && e.activationStart || 0
                },
                h = function(e, t) {
                    var n = c(),
                        r = "navigate";
                    return m() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || p() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                g = function(e, t, n) {
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
                T = function(e, t, n, r) {
                    var i, a;
                    return function(o) {
                        t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = a, t.rating = function(e, t) {
                            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                        }(t.value, n), e(t))
                    }
                },
                y = function(e) {
                    requestAnimationFrame((function() {
                        return requestAnimationFrame((function() {
                            return e()
                        }))
                    }))
                },
                E = function(e) {
                    var t = function(t) {
                        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                    };
                    addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
                },
                S = function(e) {
                    var t = !1;
                    return function(n) {
                        t || (e(n), t = !0)
                    }
                },
                b = -1,
                C = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                L = function(e) {
                    "hidden" === document.visibilityState && b > -1 && (b = "visibilitychange" === e.type ? e.timeStamp : 0, M())
                },
                w = function() {
                    addEventListener("visibilitychange", L, !0), addEventListener("prerenderingchange", L, !0)
                },
                M = function() {
                    removeEventListener("visibilitychange", L, !0), removeEventListener("prerenderingchange", L, !0)
                },
                F = function() {
                    return b < 0 && (b = C(), w(), v((function() {
                        setTimeout((function() {
                            b = C(), w()
                        }), 0)
                    }))), {
                        get firstHiddenTime() {
                            return b
                        }
                    }
                },
                k = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", (function() {
                        return e()
                    }), !0) : e()
                },
                A = [1800, 3e3],
                I = function(e, t) {
                    t = t || {}, k((function() {
                        var n, r = F(),
                            i = h("FCP"),
                            a = g("paint", (function(e) {
                                e.forEach((function(e) {
                                    "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - p(), 0), i.entries.push(e), n(!0)))
                                }))
                            }));
                        a && (n = T(e, i, A, t.reportAllChanges), v((function(r) {
                            i = h("FCP"), n = T(e, i, A, t.reportAllChanges), y((function() {
                                i.value = performance.now() - r.timeStamp, n(!0)
                            }))
                        })))
                    }))
                },
                P = [.1, .25],
                x = function(e, t) {
                    ! function(e, t) {
                        t = t || {}, I(S((function() {
                            var n, r = h("CLS", 0),
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
                                u = g("layout-shift", o);
                            u && (n = T(e, r, P, t.reportAllChanges), E((function() {
                                o(u.takeRecords()), n(!0)
                            })), v((function() {
                                i = 0, r = h("CLS", 0), n = T(e, r, P, t.reportAllChanges), y((function() {
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
                                        largestShiftTarget: d(n.node),
                                        largestShiftTime: t.startTime,
                                        largestShiftValue: t.value,
                                        largestShiftSource: n,
                                        largestShiftEntry: t,
                                        loadState: s(t.startTime)
                                    })
                                }
                            }
                            var r;
                            e.attribution = {}
                        }(t), e(t)
                    }), t)
                },
                B = function(e, t) {
                    I((function(t) {
                        ! function(e) {
                            if (e.entries.length) {
                                var t = c(),
                                    n = e.entries[e.entries.length - 1];
                                if (t) {
                                    var r = t.activationStart || 0,
                                        i = Math.max(0, t.responseStart - r);
                                    return void(e.attribution = {
                                        timeToFirstByte: i,
                                        firstByteToFCP: e.value - i,
                                        loadState: s(e.entries[0].startTime),
                                        navigationEntry: t,
                                        fcpEntry: n
                                    })
                                }
                            }
                            e.attribution = {
                                timeToFirstByte: 0,
                                firstByteToFCP: e.value,
                                loadState: s(m())
                            }
                        }(t), e(t)
                    }), t)
                },
                D = {
                    passive: !0,
                    capture: !0
                },
                R = new Date,
                N = function(e, t) {
                    r || (r = t, i = e, a = new Date, H(removeEventListener), q())
                },
                q = function() {
                    if (i >= 0 && i < a - R) {
                        var e = {
                            entryType: "first-input",
                            name: r.type,
                            target: r.target,
                            cancelable: r.cancelable,
                            startTime: r.timeStamp,
                            processingStart: r.timeStamp + i
                        };
                        o.forEach((function(t) {
                            t(e)
                        })), o = []
                    }
                },
                _ = function(e) {
                    if (e.cancelable) {
                        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        "pointerdown" == e.type ? function(e, t) {
                            var n = function() {
                                    N(e, t), i()
                                },
                                r = function() {
                                    i()
                                },
                                i = function() {
                                    removeEventListener("pointerup", n, D), removeEventListener("pointercancel", r, D)
                                };
                            addEventListener("pointerup", n, D), addEventListener("pointercancel", r, D)
                        }(t, e) : N(t, e)
                    }
                },
                H = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                        return e(t, _, D)
                    }))
                },
                O = [100, 300],
                j = function(e, t) {
                    t = t || {}, k((function() {
                        var n, a = F(),
                            u = h("FID"),
                            c = function(e) {
                                e.startTime < a.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), n(!0))
                            },
                            s = function(e) {
                                e.forEach(c)
                            },
                            f = g("first-input", s);
                        n = T(e, u, O, t.reportAllChanges), f && E(S((function() {
                            s(f.takeRecords()), f.disconnect()
                        }))), f && v((function() {
                            var a;
                            u = h("FID"), n = T(e, u, O, t.reportAllChanges), o = [], i = -1, r = null, H(addEventListener), a = c, o.push(a), q()
                        }))
                    }))
                },
                U = function(e, t) {
                    j((function(t) {
                        ! function(e) {
                            var t = e.entries[0];
                            e.attribution = {
                                eventTarget: d(t.target),
                                eventType: t.name,
                                eventTime: t.startTime,
                                eventEntry: t,
                                loadState: s(t.startTime)
                            }
                        }(t), e(t)
                    }), t)
                },
                V = 0,
                z = 1 / 0,
                G = 0,
                J = function(e) {
                    e.forEach((function(e) {
                        e.interactionId && (z = Math.min(z, e.interactionId), G = Math.max(G, e.interactionId), V = G ? (G - z) / 7 + 1 : 0)
                    }))
                },
                K = function() {
                    return u ? V : performance.interactionCount || 0
                },
                Q = function() {
                    "interactionCount" in performance || u || (u = g("event", J, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                W = [200, 500],
                X = 0,
                Y = function() {
                    return K() - X
                },
                Z = [],
                $ = {},
                ee = function(e) {
                    var t = Z[Z.length - 1],
                        n = $[e.interactionId];
                    if (n || Z.length < 10 || e.duration > t.latency) {
                        if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
                        else {
                            var r = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            $[r.id] = r, Z.push(r)
                        }
                        Z.sort((function(e, t) {
                            return t.latency - e.latency
                        })), Z.splice(10).forEach((function(e) {
                            delete $[e.id]
                        }))
                    }
                },
                te = function(e, t) {
                    ! function(e, t) {
                        t = t || {}, k((function() {
                            Q();
                            var n, r = h("INP"),
                                i = function(e) {
                                    e.forEach((function(e) {
                                        e.interactionId && ee(e), "first-input" === e.entryType && !Z.some((function(t) {
                                            return t.entries.some((function(t) {
                                                return e.duration === t.duration && e.startTime === t.startTime
                                            }))
                                        })) && ee(e)
                                    }));
                                    var t, i = (t = Math.min(Z.length - 1, Math.floor(Y() / 50)), Z[t]);
                                    i && i.latency !== r.value && (r.value = i.latency, r.entries = i.entries, n())
                                },
                                a = g("event", i, {
                                    durationThreshold: t.durationThreshold || 40
                                });
                            n = T(e, r, W, t.reportAllChanges), a && (a.observe({
                                type: "first-input",
                                buffered: !0
                            }), E((function() {
                                i(a.takeRecords()), r.value < 0 && Y() > 0 && (r.value = 0, r.entries = []), n(!0)
                            })), v((function() {
                                Z = [], X = K(), r = h("INP"), n = T(e, r, W, t.reportAllChanges)
                            })))
                        }))
                    }((function(t) {
                        ! function(e) {
                            if (e.entries.length) {
                                var t = e.entries.sort((function(e, t) {
                                    return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                                }))[0];
                                e.attribution = {
                                    eventTarget: d(t.target),
                                    eventType: t.name,
                                    eventTime: t.startTime,
                                    eventEntry: t,
                                    loadState: s(t.startTime)
                                }
                            } else e.attribution = {}
                        }(t), e(t)
                    }), t)
                },
                ne = [2500, 4e3],
                re = {},
                ie = function(e, t) {
                    ! function(e, t) {
                        t = t || {}, k((function() {
                            var n, r = F(),
                                i = h("LCP"),
                                a = function(e) {
                                    var t = e[e.length - 1];
                                    t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - p(), 0), i.entries = [t], n())
                                },
                                o = g("largest-contentful-paint", a);
                            if (o) {
                                n = T(e, i, ne, t.reportAllChanges);
                                var u = S((function() {
                                    re[i.id] || (a(o.takeRecords()), o.disconnect(), re[i.id] = !0, n(!0))
                                }));
                                ["keydown", "click"].forEach((function(e) {
                                    addEventListener(e, u, !0)
                                })), E(u), v((function(r) {
                                    i = h("LCP"), n = T(e, i, ne, t.reportAllChanges), y((function() {
                                        i.value = performance.now() - r.timeStamp, re[i.id] = !0, n(!0)
                                    }))
                                }))
                            }
                        }))
                    }((function(t) {
                        ! function(e) {
                            if (e.entries.length) {
                                var t = c();
                                if (t) {
                                    var n = t.activationStart || 0,
                                        r = e.entries[e.entries.length - 1],
                                        i = r.url && performance.getEntriesByType("resource").filter((function(e) {
                                            return e.name === r.url
                                        }))[0],
                                        a = Math.max(0, t.responseStart - n),
                                        o = Math.max(a, i ? (i.requestStart || i.startTime) - n : 0),
                                        u = Math.max(o, i ? i.responseEnd - n : 0),
                                        s = Math.max(u, r ? r.startTime - n : 0),
                                        f = {
                                            element: d(r.element),
                                            timeToFirstByte: a,
                                            resourceLoadDelay: o - a,
                                            resourceLoadTime: u - o,
                                            elementRenderDelay: s - u,
                                            navigationEntry: t,
                                            lcpEntry: r
                                        };
                                    return r.url && (f.url = r.url), i && (f.lcpResourceEntry = i), void(e.attribution = f)
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
                ae = [800, 1800],
                oe = function e(t) {
                    document.prerendering ? k((function() {
                        return e(t)
                    })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                        return e(t)
                    }), !0) : setTimeout(t, 0)
                },
                ue = function(e, t) {
                    t = t || {};
                    var n = h("TTFB"),
                        r = T(e, n, ae, t.reportAllChanges);
                    oe((function() {
                        var i = c();
                        if (i) {
                            var a = i.responseStart;
                            if (a <= 0 || a > performance.now()) return;
                            n.value = Math.max(a - p(), 0), n.entries = [i], r(!0), v((function() {
                                n = h("TTFB", 0), (r = T(e, n, ae, t.reportAllChanges))(!0)
                            }))
                        }
                    }))
                },
                ce = function(e, t) {
                    ue((function(t) {
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
                }
        }
    }
]);