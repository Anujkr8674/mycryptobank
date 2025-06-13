! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1c4c54cd-a5c0-5a4b-9875-4dae76563ea6")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [9336], {
        cc4A: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("7zlU");
            const s = function(e) {
                return a().createElement(o.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.314 4.781l3.889 3.89-1.768 1.767-3.889-3.889 1.768-1.768zm-3.182 3.182l3.89 3.89-5.129 5.127H15v3H7.893l-.004.004H4v-3.889l8.132-8.132zM17 16.98h3v3h-3v-3z",
                    fill: "currentColor"
                }))
            }
        },
        SPzT: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("7zlU");
            const s = function(e) {
                return a().createElement(o.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 3h4v4h-4V3zm0 7h4v4h-4v-4zm4 7h-4v4h4v-4z",
                    fill: "currentColor"
                }))
            }
        },
        FGmr: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("7zlU");
            const s = function(e) {
                return a().createElement(o.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z",
                    fill: "currentColor"
                }))
            }
        },
        AMRt: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("9vxN"),
                s = r("wTDt"),
                l = r("hyZw"),
                c = r("o0Ko"),
                u = r.n(c),
                d = r("AGKK");
            const p = (0, i.forwardRef)((function(e, t) {
                var r = e.getPageHref,
                    o = e.children,
                    s = (0, n.__rest)(e, ["getPageHref", "children"]),
                    l = a().useMemo((function() {
                        if (r) return r(o)
                    }), [r, o]);
                return (0, i.createElement)("a", (0, n.__assign)((0, n.__assign)({}, s), {
                    children: o,
                    href: l,
                    ref: t
                }))
            }));
            var f = r("Prrn"),
                h = "0".repeat(5).split("").map((function(e, t) {
                    return t
                })),
                m = h.slice(-1)[0],
                v = ["seqPre", "seqNext"],
                g = {
                    ChevronLeft1C: o.A,
                    ChevronRight1C: s.A
                };
            const b = function(e) {
                var t = e.current,
                    r = e.total,
                    o = e.onChange,
                    s = void 0 === o ? l.es : o,
                    c = e.abbreviateThreshold,
                    b = void 0 === c ? 10 : c,
                    x = e.getPageHref,
                    y = (0, n.__rest)(e, ["current", "total", "onChange", "abbreviateThreshold", "getPageHref"]),
                    w = (0, f.r)(),
                    k = w.prefixCls,
                    A = w.isRTL,
                    S = "".concat(k, "-pagination"),
                    C = 1 === t,
                    _ = A ? "ChevronRight1C" : "ChevronLeft1C",
                    T = C ? "line" : "textSecondary",
                    B = u()("".concat(S, "-prev"), {
                        disabled: C
                    }),
                    E = t === r,
                    I = A ? "ChevronLeft1C" : "ChevronRight1C",
                    U = E ? "line" : "textSecondary",
                    L = u()("".concat(S, "-next"), {
                        disabled: E
                    }),
                    D = a().useMemo((function() {
                        return function(e) {
                            var t = e.current,
                                r = e.total,
                                n = e.threshold;
                            if (r <= n) return "0".repeat(r).split("").map((function(e, t) {
                                return t + 1
                            }));
                            var i = r - 2,
                                a = t <= m ? h.map((function(e) {
                                    return 1 + e
                                })) : [1, v[0]];
                            return [t > 2 && t < i ? h.map((function(e) {
                                return Math.max(1, t + e - 2)
                            })) : [], t >= r - m ? h.map((function(e) {
                                return r - e
                            })).reverse() : [v[1], r]].reduce((function(e, t) {
                                return e.concat(t.filter((function(t) {
                                    return -1 === e.indexOf(t)
                                })))
                            }), a)
                        }({
                            current: t,
                            total: r,
                            threshold: b
                        })
                    }), [t, r, b]),
                    P = (0, i.useCallback)((function(e, t) {
                        e.preventDefault(), s(t)
                    }), [s]);
                return a().createElement(d.Ay, (0, n.__assign)({}, y, {
                    className: u()(S, e.className)
                }), a().createElement(d.Ay, {
                    className: B,
                    onClick: function(e) {
                        return C || P(e, t - 1)
                    },
                    "aria-disabled": C
                }, (0, i.createElement)(g[_], {
                    name: _,
                    color: T
                })), a().createElement(d.Ay, {
                    className: "".concat(S, "-items")
                }, D.map((function(e) {
                    var r = v.indexOf(e) > -1,
                        n = u()("".concat(S, "-item"), r ? "abbreviate" : {
                            active: t === e
                        });
                    return r ? a().createElement(d.Ay, {
                        key: e,
                        className: n,
                        children: "..."
                    }) : a().createElement(p, {
                        key: e,
                        className: n,
                        children: e,
                        onClick: function(t) {
                            return P(t, e)
                        },
                        getPageHref: x,
                        "aria-current": t === e ? "page" : void 0
                    })
                }))), a().createElement(d.Ay, {
                    className: L,
                    onClick: function(e) {
                        return E || P(e, t + 1)
                    },
                    "aria-disabled": E
                }, (0, i.createElement)(g[I], {
                    name: I,
                    color: U
                })))
            }
        },
        "7NoT": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("MGB4"),
                s = r("o0Ko"),
                l = r.n(s),
                c = r("AGKK"),
                u = r("Prrn"),
                d = function(e) {
                    var t, r = e.value,
                        s = e.disabled,
                        d = e.checked,
                        p = e.defaultChecked,
                        f = e.onChange,
                        h = (0, n.__rest)(e, ["value", "disabled", "checked", "defaultChecked", "onChange"]),
                        m = (0, i.useCallback)((function(e) {
                            return f && f(r, e)
                        }), [f, r]),
                        v = (0, o.j)({
                            defaultChecked: p,
                            checked: d,
                            disabled: s,
                            onChange: m
                        }),
                        g = v.onChecked,
                        b = v.checked,
                        x = (0, u.r)(),
                        y = x.prefixCls,
                        w = x.isRTL,
                        k = "".concat(y, "-radio"),
                        A = l()(k, ((t = {})["".concat(k, "-rtl")] = !!w, t.disabled = !!s, t.checked = !!b, t), e.className),
                        S = {
                            role: "radio",
                            "aria-checked": b,
                            "aria-disabled": s,
                            tabIndex: s ? -1 : 0,
                            onKeyDown: function(e) {
                                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), g())
                            }
                        };
                    return a().createElement(c.Ay, (0, n.__assign)({}, S, h, {
                        onClick: function() {
                            return g(!0)
                        },
                        className: A
                    }), a().createElement(c.Ay, {
                        className: "".concat(k, "-icon")
                    }), e.children)
                };
            d.__name = "Radio";
            const p = d
        },
        "Jgw/": (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => p
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("jpnk"),
                s = r("o0Ko"),
                l = r.n(s),
                c = r("AGKK"),
                u = r("Prrn"),
                d = ["Radio", "Checkbox", "Subscript"];
            const p = function(e) {
                var t, r = e.value,
                    i = e.disabled,
                    s = e.type,
                    p = void 0 === s ? "single" : s,
                    f = e.direction,
                    h = void 0 === f ? "horizontal" : f,
                    m = e.onChange,
                    v = (0, n.__rest)(e, ["value", "disabled", "type", "direction", "onChange"]),
                    g = (0, u.r)().prefixCls,
                    b = "".concat(g, "-selection-group"),
                    x = l()(b, ((t = {})["data-dir-".concat(h)] = !!h, t), e.className),
                    y = "single" === p ? "radiogroup" : "group",
                    w = (0, o.W)({
                        type: p,
                        value: r,
                        onChange: m,
                        disabled: i
                    }),
                    k = w.selects,
                    A = w.onSelect,
                    S = a().Children.map(e.children, (function(e) {
                        var t;
                        if (!a().isValidElement(e)) return null;
                        if (-1 === d.indexOf(null === (t = null === e || void 0 === e ? void 0 : e.type) || void 0 === t ? void 0 : t.__name)) return null;
                        var r = e.props.disabled || i;
                        return a().cloneElement(e, {
                            onChange: A,
                            disabled: r,
                            checked: k.indexOf(e.props.value) > -1
                        })
                    })),
                    C = {
                        role: y,
                        "aria-disabled": i
                    };
                return a().createElement(c.Ay, (0, n.__assign)({}, C, v, {
                    className: x,
                    children: S
                }))
            }
        },
        lKJe: (e, t, r) => {
            "use strict";
            var n = r("DTvD");
            var i = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                a = n.useState,
                o = n.useEffect,
                s = n.useLayoutEffect,
                l = n.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (n) {
                    return !0
                }
            }
            var u = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = a({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    i = n[0].inst,
                    u = n[1];
                return s((function() {
                    i.value = r, i.getSnapshot = t, c(i) && u({
                        inst: i
                    })
                }), [e, r, t]), o((function() {
                    return c(i) && u({
                        inst: i
                    }), e((function() {
                        c(i) && u({
                            inst: i
                        })
                    }))
                }), [e]), l(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
        },
        at8e: (e, t, r) => {
            "use strict";
            e.exports = r("lKJe")
        },
        F80R: (e, t, r) => {
            "use strict";
            r.d(t, {
                $O: () => m,
                D6: () => y,
                FR: () => u,
                Hu: () => w,
                Pg: () => g,
                RV: () => v,
                Xy: () => b,
                eW: () => n,
                hE: () => x,
                lO: () => f,
                mx: () => p,
                yO: () => d,
                y_: () => h
            });
            var n, i = r("sViW"),
                a = r("BK7R"),
                o = r("QUKP"),
                s = r("Pz56"),
                l = r.n(s),
                c = r("VA12"),
                u = (function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r, n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/getAddress", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/getAddress", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/queryUserDepositAddress", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/createAddress", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                d = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r, n, i, a, o, s, u, d;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.coin, n = t.network, i = t.index, a = void 0 === i ? 1 : i, o = t.size, s = void 0 === o ? 100 : o, u = t.subUserId, e.next = 3, (0, c.post)("/bapi/capital/v1/private/capital/deposit/queryUserAddressList", {
                                        coin: r,
                                        network: n,
                                        index: a,
                                        size: s,
                                        subUserId: u
                                    });
                                case 3:
                                    return d = e.sent, e.abrupt("return", d);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/batchUpdateAddress", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r, n, i, a, o = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.coin, n = t.network, i = o.length > 1 && void 0 !== o[1] ? o[1] : {}, e.next = 3, (0, c.get)("/bapi/capital/v1/private/capital/deposit/getUserAddressConfig?coin=".concat(r, "&network=").concat(n), i);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/setDefaultAddress", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/address/download", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            (function() {
                var e = (0, i.A)(l().mark((function e(t) {
                    var r, n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/resetAddress", t);
                            case 2:
                                return r = e.sent, n = r.data, e.abrupt("return", n);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, i.A)(l().mark((function e(t) {
                    var r, n, i;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/resetAddress", t);
                            case 2:
                                return r = e.sent, n = r.data, i = r.code, e.abrupt("return", (0, o.A)((0, a.A)({}, n), {
                                    code: i
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            ! function(e) {
                e[e.NO_NEED_CONFIRM = 0] = "NO_NEED_CONFIRM", e[e.NEED_CONFIRM = 1] = "NEED_CONFIRM"
            }(n || (n = {}));
            var v = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r, n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/list", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r, n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/list", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/download", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, i.A)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.get)("/bapi/capital/v1/private/capital/deposit/get-status");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                y = (function() {
                    var e = (0, i.A)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/last", {
                                        coin: null,
                                        type: null
                                    });
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/inquiry/list", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(l().mark((function e(t) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/capital/deposit/credit-apply", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                w = function() {
                    var e = (0, i.A)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.get)("/bapi/capital/v1/private/capital/deposit/can-credit-apply");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, i.A)(l().mark((function e(t) {
                    var r, n, i;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, c.post)("/bapi/capital/v1/private/capital/deposit/check-internal-address", t);
                            case 3:
                                if (r = e.sent, n = r.data, !r.success) {
                                    e.next = 9;
                                    break
                                }
                                return i = n.isInternalAddress, e.abrupt("return", i);
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                return e.prev = 11, e.t0 = e.catch(0), e.abrupt("return", !1);
                            case 14:
                                return e.abrupt("return", !1);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 11]
                    ])
                })))
            }()
        },
        l77e: (e, t, r) => {
            "use strict";
            r.d(t, {
                Fz: () => h,
                PC: () => n,
                SG: () => p,
                iq: () => m,
                zS: () => c
            });
            var n, i = r("sViW"),
                a = r("Pz56"),
                o = r.n(a),
                s = r("VA12"),
                l = r("a59x");

            function c(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = (0, i.A)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, s.get)("/bapi/apex/v9/private/apex/market/portfolio/history/list?".concat((0, l.E2)(t))));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }! function(e) {
                e.ALL = "0", e.DEPOSIT_OR_WITHDRAW = "1", e.CONVERT = "2", e.OCBS = "3", e.earn = "4", e.DISTRIBUTION = "5", e.transfer = "6"
            }(n || (n = {}));
            var d = {
                arrearsStatus: "NORMAL"
            };

            function p() {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = (0, i.A)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, s.post)("/bapi/apex/v1/private/apex/marketing/withdrawBack/arrears");
                            case 3:
                                return t = e.sent.data, e.abrupt("return", t || d);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", d);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }
            var h = function(e) {
                return (0, s.post)("/bapi/apex/v1/private/apex/marketing/withdrawBack/repay", e)
            };

            function m() {
                return (0, s.get)("/bapi/apex/v2/private/apex/market/recent-deposit-withdraw")
            }
        },
        S8bp: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD"),
                i = r("VXBK"),
                a = r("NrY2");
            const o = function(e) {
                var t = e.children,
                    r = e.dir,
                    o = e.theme;
                return n.createElement(a.A.Consumer, null, (function(e) {
                    return n.createElement(a.A.Provider, {
                        value: r || e
                    }, n.createElement(i.NP, {
                        theme: o
                    }, t))
                }))
            }
        },
        Z2u4: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => U
            });
            var n = r("BK7R"),
                i = r("QUKP");
            var a = {
                    normal: {
                        height: "32px",
                        ".rc-picker": {
                            fontSize: "sm",
                            ".rc-picker-input > input": {
                                fontSize: "sm"
                            }
                        }
                    },
                    tiny: {
                        height: "20px",
                        ".rc-picker": {
                            fontSize: "xs",
                            ".rc-picker-input > input": {
                                fontSize: "xs"
                            }
                        }
                    }
                },
                o = {
                    ".rc-picker-range": {
                        "&:hover": {
                            ".rc-picker-clear": {
                                opacity: 1
                            }
                        }
                    },
                    ".rc-picker-clear": {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "t.third",
                        opacity: 0,
                        transition: ".3s opacity linear",
                        cursor: "pointer"
                    },
                    ".rc-picker-suffix": {
                        display: "flex",
                        alignItems: "center",
                        color: "t.third"
                    }
                },
                s = (0, n.A)({
                    display: "inline-flex",
                    minWidth: "240px",
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker": {
                        flexGrow: 1
                    },
                    ".rc-picker .rc-picker-input > input": {
                        py: "0px",
                        outline: "none",
                        border: "none",
                        color: "t.primary",
                        bg: "inherit",
                        textAlign: "center",
                        "&::placeholder": {
                            color: "t.placeholder"
                        }
                    }
                }, o),
                l = function(e) {
                    return Object.keys(a).reduce((function(t, r) {
                        return t[r] = (0, n.A)({}, e, a[r]), t
                    }), {})
                },
                c = (0, n.A)({
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    height: "48px",
                    bg: "transparent",
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "ls",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "246px",
                    py: "14px",
                    paddingRight: "ls",
                    "&.bn-picker-opened": {
                        borderColor: "primaryHover"
                    },
                    "&.bn-picker-disabled": {
                        backgroundColor: "line",
                        ".rc-picker-input input": {
                            cursor: "not-allowed",
                            color: "t.disabled"
                        },
                        "&:hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "line"
                        }
                    },
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker-active-bar": {
                        display: "none"
                    },
                    ".rc-picker-input input": {
                        border: "none",
                        color: "t.primary",
                        lineHeight: "20px",
                        background: "transparent",
                        padding: 0,
                        paddingLeft: "ls",
                        outline: "none",
                        "&::placeholder": {
                            color: "t.disabled"
                        }
                    }
                }, o);
            const u = {
                    rangePicker: {
                        default: s,
                        underline: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "line",
                            "&.bn-picker-opened": {
                                borderBottomColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        outline: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            height: "48px",
                            borderRadius: "small",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            pr: "xs",
                            "&.bn-picker-opened": {
                                borderColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        phantom: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            border: "none",
                            ".rc-picker-range.rc-picker-focused .rc-picker-active-bar": {
                                opacity: "0"
                            },
                            ".rc-picker-range .rc-picker-input:hover": {
                                border: "none",
                                input: {
                                    color: "t.yellow"
                                }
                            },
                            "&.bn-picker-opened": {
                                ".rc-picker-range.rc-picker-focused .rc-picker-input.rc-picker-input-active input": {
                                    color: "t.yellow"
                                }
                            },
                            ":hover": {
                                border: "none"
                            }
                        })),
                        line: {
                            md: (0, i.A)((0, n.A)({}, c), {
                                height: "40px"
                            }),
                            lg: (0, i.A)((0, n.A)({}, c), {
                                height: "48px"
                            })
                        }
                    }
                },
                d = {
                    text: {
                        extraHeadline: {
                            fontWeight: "semibold",
                            fontSize: "xxxxl",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "semibold",
                            fontSize: "xxxl",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "semibold",
                            fontSize: "xxl",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        mediumBody: {
                            fontWeight: "light",
                            fontSize: "minor",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        },
                        primaryNum1: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        primaryNum2: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        primaryNum3: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        secondaryNum1: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        secondaryNum2: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        tertiaryNum1: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        tertiaryNum2: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        tertiaryNum3: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        formLabel: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelSmall: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelDisabled: {
                            variant: "text.formLabel",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        formLabelSmallDisabled: {
                            variant: "text.formLabelSmall",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        checkbox: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: 1.43,
                            color: "t.primary",
                            cursor: "pointer"
                        },
                        checkboxDisabled: {
                            variant: "text.checkbox",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        infoHelperText: {
                            height: "24px",
                            lineHeight: "24px",
                            fontSize: "xs",
                            color: "t.third"
                        },
                        errorHelperText: {
                            variant: "text.infoHelperText",
                            color: "error"
                        },
                        dottedUnderline: {
                            variant: "text.formLabel",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            borderBottomColor: "t.third"
                        },
                        title2: {
                            fontWeight: "semibold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        title3: {
                            fontWeight: "semibold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        title4: {
                            fontWeight: "semibold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        title5: {
                            fontWeight: "semibold",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        largeText: {
                            fontWeight: "normal",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        title6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "24px"
                        },
                        heading: {
                            fontFamily: "heading",
                            lineHeight: "heading",
                            fontWeight: "heading"
                        },
                        display: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                            fontSize: [5, 6, 7]
                        },
                        caps: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                        },
                        h1: {
                            fontWeight: "semibold",
                            fontSize: [24, 28, 32],
                            lineHeight: ["30px", "32px", "40px"]
                        },
                        h2: {
                            fontWeight: "normal",
                            fontSize: 24,
                            lineHeight: "30px"
                        },
                        h3: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "28px"
                        },
                        h4: {
                            fontWeight: "semibold",
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        h5: {
                            fontWeight: "semibold",
                            fontSize: 2
                        },
                        h6: {
                            fontWeight: "semibold",
                            fontSize: 1
                        },
                        label1: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "26px"
                        },
                        label2: {
                            fontWeight: "medium",
                            fontSize: [16, 18],
                            lineHeight: ["22px", "24px"]
                        },
                        label3: {
                            fontWeight: ["normal", "medium"],
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        label4: {
                            fontWeight: "medium",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label5: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label6: {
                            fontWeight: "normal",
                            fontSize: 13,
                            lineHeight: "18px"
                        },
                        label7: {
                            fontWeight: "medium",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        label8: {
                            fontWeight: "normal",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        p1: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        p2: {
                            fontWeight: "normal",
                            fontSize: 0
                        }
                    }
                };
            var p = d.text,
                f = p.subtitle1,
                h = p.caption,
                m = p.body2,
                v = p.body1,
                g = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, n.A)({}, h),
                    " .bn-sdd-option": {
                        maxHeight: "40px",
                        px: "sm",
                        fontSize: "sm",
                        lineHeight: "20px"
                    },
                    " .bn-sdd-value": {
                        minHeight: "32px",
                        pl: "ls",
                        pr: "md",
                        py: "ls"
                    },
                    " .bn-sdd-noResults": {
                        p: "ls",
                        fontSize: "sm",
                        color: "t.primary"
                    },
                    " .bn-sdd-innerInputContainer": {
                        px: "ls",
                        py: "xs",
                        width: "100%"
                    },
                    " .bn-sdd-icon": {
                        cursor: "pointer",
                        verticalAlign: "middle"
                    }
                };
            const b = {
                searchDropdown: {
                    default: {
                        position: "relative",
                        outline: "none",
                        ".bn-sdd-dropdown": {
                            position: "absolute",
                            zIndex: "dropdown",
                            transition: "height 0.2s ease",
                            bg: "popupBg",
                            boxShadow: "elevation2",
                            borderRadius: "default"
                        },
                        ".bn-sdd-list": {
                            padding: 0,
                            overflowY: "scroll",
                            py: "minor",
                            borderBottomLeftRadius: "default",
                            borderBottomRightRadius: "default"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    },
                    drawer: {
                        px: "md",
                        bg: "modal.bg",
                        position: "relative",
                        flexDirection: "column",
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge",
                        ".bn-sdd-list": {
                            pl: 0,
                            listStyle: "none",
                            overflowY: "auto",
                            py: "minor"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        },
                        ".bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        }
                    },
                    outline: g,
                    filled: g,
                    line: g,
                    clear: g,
                    normal: g,
                    emphasizedGrouping: {
                        variant: "searchDropdown.default",
                        " .bn-sdd-optionGroupLabel": {
                            px: "sm",
                            py: "s",
                            "&.is-active .bn-sdd-optionGroupText": {
                                color: "t.yellow"
                            },
                            "&:hover": {
                                bg: "bg3"
                            },
                            "&:active": {
                                bg: "bg2"
                            },
                            "&.disabled": {
                                " .bn-sdd-optionGroupText": (0, n.A)({
                                    color: "t.disabled"
                                }, v)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, n.A)({
                            color: "t.primary"
                        }, f),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, n.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, m),
                        " .bn-sdd-value": {
                            minHeight: "32px",
                            pl: "ls",
                            pr: "md",
                            py: "ls"
                        },
                        " .bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        },
                        " .bn-sdd-innerInputContainer": {
                            px: "ls",
                            py: "xs",
                            width: "100%"
                        },
                        " .bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    }
                }
            };
            var x = {
                py: "xs",
                px: ["sm", "md"],
                fontWeight: "medium",
                fontSize: ["sm", "md"],
                lineHeight: ["20px", "24px"],
                marginRight: ["sm", "md"],
                userSelect: "none",
                color: "t.third",
                borderRadius: "default"
            };
            const y = {
                tabs: {
                    default: {
                        tab: {
                            padding: "10px 90px",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            "&.active": {
                                borderBottomWidth: "tiny",
                                borderBottomStyle: "solid",
                                borderBottom: "tiny solid",
                                borderColor: "primary",
                                color: "primary"
                            }
                        }
                    },
                    standard: {
                        container: {
                            boxShadow: "inset 0px -1px 0px currentColor",
                            color: "line"
                        },
                        normal: {
                            padding: "14px 0px",
                            marginRight: "28px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 0px -2px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.standard.normal",
                            padding: "20px 0px",
                            marginRight: "28px",
                            lineHeight: "24px",
                            fontSize: "md"
                        },
                        small: {
                            variant: "tabs.standard.normal",
                            padding: "8px 0px"
                        }
                    },
                    vertical: {
                        layout: {
                            display: "flex"
                        },
                        container: {
                            color: "line",
                            display: "flex",
                            flexDirection: "column",
                            width: "fit-content"
                        },
                        normal: {
                            padding: "10px 18px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 2px 0px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.vertical.normal",
                            margin: "4px 0",
                            "&.active": {
                                boxShadow: "inset 4px 0px 0px #F0B90B",
                                color: "t.primary"
                            }
                        }
                    },
                    flow: {
                        tab: {
                            fontWeight: "medium",
                            fontSize: ["14px", "16px"],
                            lineHeight: ["20px", "24px"],
                            letterSpacing: [".16px", ".32px"],
                            padding: ["8px 16px", "8px 24px"],
                            marginRight: "16px",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "extraLarger",
                            ":hover": {
                                bg: "bg3"
                            },
                            "&.active": {
                                bg: "tabs.flowBg",
                                color: "tabs.flowText"
                            }
                        }
                    },
                    filled: {
                        tab: {
                            primary: (0, i.A)((0, n.A)({}, x), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, i.A)((0, n.A)({}, x), {
                                "&.active": {
                                    bg: "bg3",
                                    color: "t.primary"
                                }
                            })
                        }
                    },
                    secondary: {
                        container: {
                            bg: "bg3",
                            borderRadius: "default",
                            height: "24px",
                            width: "fit-content"
                        },
                        tab: {
                            fontSize: "xs",
                            lineHeight: "16px",
                            px: "minor",
                            py: "minor",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "default",
                            minWidth: "82px",
                            textAlign: "center",
                            "&.active": {
                                bg: "primary",
                                color: "bg5",
                                fontWeight: "medium"
                            }
                        }
                    },
                    "trade-next": {
                        tab: {
                            padding: "16px 1px 10px 1px",
                            marginRight: "sm",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            fontSize: "sm",
                            color: "t.secondary",
                            "&.active": {
                                borderBottom: "2px solid",
                                borderColor: "primary",
                                color: "t.primary",
                                fontWeight: "semibold"
                            }
                        }
                    }
                }
            };
            var w = {
                default: {
                    borderBottom: "1px solid transparent",
                    borderColor: "line",
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {},
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "md",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        mr: "minor",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                helperText: {
                    default: {
                        variant: "text.body2"
                    },
                    info: {
                        variant: "textField.helperText.default",
                        color: "t.third"
                    },
                    error: {
                        variant: "textField.helperText.default",
                        color: "error"
                    }
                },
                outline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    "& .bn-input-label": {
                        fontSize: "xs"
                    },
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "xs",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                outlineLarge: {
                    variant: "textField.outline",
                    "&  input": {
                        px: "ls"
                    }
                },
                inline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "minor",
                        textAlign: "right",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        ml: "xs",
                        minWidth: "48px",
                        fontSize: "sm",
                        color: "t.secondary"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mr: "xs",
                        fontSize: "sm",
                        color: "t.third"
                    },
                    "& .bn-input-tooltip": {
                        position: "absolute",
                        bottom: "110%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "tooltip"
                    },
                    "& .bn-input-tooltip-arrow": {
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        left: "50%",
                        bottom: "-4px",
                        transform: "translateX(-50%) rotate(45deg)",
                        bg: "#FFFFFF",
                        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.08)"
                    },
                    "& .bn-input-tooltip-content": {
                        boxShadow: "card",
                        borderRadius: "default",
                        p: "xxs",
                        bg: "#FFFFFF",
                        fontSize: "sm",
                        lineHeight: "18px",
                        color: "t.secondary"
                    }
                }
            };
            const k = {
                textField: w,
                textFieldV2: (0, i.A)((0, n.A)({}, w), {
                    line: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        bg: "transparent",
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-focus": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            fontSize: "14px"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    filled: {
                        bg: "bg3",
                        borderRadius: "default",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        "&.bn-input-status-focus": {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            opacity: .7,
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            borderRadius: "default",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            mr: "minor",
                            fontSize: "sm"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    transparent: {
                        variant: "textField.line",
                        border: "none"
                    }
                })
            };
            var A = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const S = {
                toast: {
                    default: (0, i.A)((0, n.A)({}, A), {
                        color: "t.primary",
                        lineHeight: "18px",
                        fontSize: "sm",
                        maxHeight: "178px",
                        p: "sm"
                    }),
                    error: {
                        variant: "toast.default"
                    },
                    warning: {
                        variant: "toast.default"
                    },
                    success: {
                        variant: "toast.default"
                    },
                    info: {
                        variant: "toast.default"
                    },
                    tips: {
                        variant: "toast.default"
                    },
                    reset: (0, i.A)((0, n.A)({}, A), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var C = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const _ = {
                modal: {
                    default: (0, i.A)((0, n.A)({}, C), {
                        borderRadius: "large"
                    }),
                    drawer: (0, i.A)((0, n.A)({}, C), {
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge"
                    })
                },
                modaltitle: {
                    default: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    center: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                        ".modaltitle": {
                            flex: "1",
                            justifyContent: "center"
                        }
                    }
                },
                modalfooter: {
                    default: {
                        gap: "sm",
                        mb: "md",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    },
                    leftReverseOrder: {
                        mb: "md",
                        gap: "sm",
                        justifyContent: "flex-start",
                        ".btn": {
                            "&:nth-of-type(2)": {
                                order: 1
                            },
                            "&:first-of-type": {
                                order: 2
                            }
                        }
                    },
                    column: {
                        flexDirection: "column-reverse",
                        mb: "md",
                        gap: "xs",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    }
                }
            };
            var T = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                B = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const E = {
                    uploader: {
                        common: {
                            color: "t.primary",
                            fontSize: "sm",
                            lineHeight: "20px",
                            wordBreak: "keep-all",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none",
                            backgroundColor: "bg3",
                            fontFamily: "inherit",
                            "&:hover": {
                                backgroundColor: "line"
                            }
                        },
                        drag: {
                            default: {
                                position: "relative",
                                variant: "uploader.common",
                                minWidth: "164px",
                                maxWidth: "164px",
                                height: "164px",
                                py: "ls",
                                color: "t.secondary"
                            },
                            waiting: {
                                variant: "uploader.drag.default"
                            },
                            success: {
                                variant: "uploader.drag.default"
                            },
                            loading: {
                                variant: "uploader.drag.default"
                            },
                            error: {
                                variant: "uploader.drag.default",
                                color: "error"
                            },
                            pending: {
                                variant: "uploader.drag.default"
                            }
                        },
                        click: {
                            default: {
                                variant: "uploader.common",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            normal: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, T),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T)
                            },
                            small: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, B),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B)
                            }
                        }
                    }
                },
                I = (0, n.A)({}, E, {
                    alertV2: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            fontSize: 1
                        },
                        error: {
                            variant: "alertV2.default",
                            color: "alertV2.errorColor",
                            bg: "alertV2.errorBg"
                        },
                        warning: {
                            variant: "alertV2.default",
                            color: "alertV2.warningColor",
                            bg: "alertV2.warningBg"
                        },
                        success: {
                            variant: "alertV2.default",
                            color: "alertV2.successColor",
                            bg: "alertV2.successBg"
                        },
                        info: {
                            variant: "alertV2.default",
                            color: "alertV2.infoColor",
                            bg: "alertV2.infoBg"
                        }
                    }
                }, {
                    alert: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            lineHeight: "18px",
                            fontSize: 1
                        },
                        error: {
                            variant: "alert.default",
                            color: "error",
                            bg: "alert.errorBg"
                        },
                        warning: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        },
                        success: {
                            variant: "alert.default",
                            color: "secondary",
                            bg: "alert.successBg"
                        },
                        info: {
                            variant: "alert.default",
                            color: "t.blue",
                            bg: "alert.infoBg"
                        },
                        tips: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        }
                    }
                }, {
                    button: {
                        default: {
                            wordBreak: "keep-all",
                            color: "bg5",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            "&:disabled": {
                                cursor: "not-allowed",
                                backgroundImage: "none",
                                backgroundColor: "line",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active)": {
                                boxShadow: "none"
                            },
                            "&.inactive": {
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        primary: {
                            variant: "button.default",
                            backgroundImage: "none",
                            backgroundColor: "primaryHover",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "primaryHover",
                                opacity: .9
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "primary"
                            },
                            ":disabled:not(.inactive)": {
                                bg: "line",
                                color: "t.disabled",
                                cursor: "not-allowed"
                            },
                            "&.inactive": {
                                bg: "primaryHover",
                                opacity: .3,
                                color: "bg5",
                                cursor: "not-allowed"
                            }
                        },
                        secondary: {
                            variant: "button.default",
                            backgroundColor: "line",
                            color: "t.primary",
                            backgroundImage: "none",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                boxShadow: "none",
                                backgroundColor: "t.disabled",
                                color: "t.primary"
                            },
                            "&:disabled": {
                                cursor: "not-allowed",
                                boxShadow: "none",
                                color: "t.disabled",
                                bg: "bg3"
                            },
                            "&.inactive": {
                                backgroundColor: "line",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        quiet: {
                            variant: "button.default",
                            color: "t.primary",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        text: {
                            variant: "button.default",
                            color: "bg5",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        round: {
                            variant: "button.default",
                            color: "t.yellow",
                            bg: "bg3",
                            borderRadius: "xlarge",
                            ":disabled:not(.inactive)": {
                                bg: "bg3",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "line"
                            },
                            "&.inactive": {
                                bg: "bg3",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        graytype: {
                            variant: "button.default",
                            color: "t.white",
                            bg: "t.secondary",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&.inactive": {
                                bg: "bg4",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        }
                    },
                    buttons: {
                        default: {
                            default: {
                                variant: "button.primary"
                            },
                            primary: {
                                variant: "button.primary"
                            },
                            flatprimary: {
                                variant: "button.primary"
                            },
                            flatpure: {
                                variant: "button.secondary"
                            },
                            secondary: {
                                variant: "button.secondary"
                            },
                            buy: {
                                variant: "button.default",
                                bg: "buy",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "buyHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "buy"
                                }
                            },
                            sell: {
                                variant: "button.default",
                                bg: "sell",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "sellHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "t.sell"
                                }
                            },
                            negative: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            },
                            destructive: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            }
                        },
                        quiet: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        text: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        round: {
                            primary: {
                                variant: "button.round"
                            },
                            default: {
                                variant: "button.round"
                            }
                        },
                        graytype: {
                            primary: {
                                variant: "button.graytype"
                            },
                            default: {
                                variant: "button.graytype"
                            }
                        },
                        primary: {
                            default: {
                                variant: "button.primary"
                            }
                        }
                    }
                }, {
                    variants: {
                        inputCode: {
                            width: "inputCode",
                            marginRight: "xs"
                        },
                        avatar: {
                            width: "avatar",
                            height: "avatar",
                            borderRadius: "circle"
                        },
                        card: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        },
                        standardLink: {
                            fontSize: "sm",
                            color: "t.yellow"
                        },
                        defaultLink: {
                            fontSize: "xs",
                            color: "t.yellow",
                            textDecoration: "none"
                        },
                        secondaryLink: {
                            fontSize: "xs",
                            color: "t.primary"
                        },
                        link: {
                            color: "primary"
                        },
                        nav: {
                            fontSize: "sm",
                            fontWeight: "bold",
                            display: "inline-block",
                            p: "xs",
                            color: "inherit",
                            textDecoration: "none",
                            ":hover,:focus,.active": {
                                color: "primary"
                            }
                        },
                        badge: {
                            fontSize: "xs",
                            color: "#fff",
                            bg: "error",
                            fontWeight: "semibold",
                            borderRadius: "circle"
                        },
                        mask: {
                            bg: "rgba(0, 0, 0, 0.5)",
                            zIndex: "mask"
                        },
                        icon: {
                            fill: "t.primary"
                        },
                        balanceChart: {
                            fill: "bg1"
                        },
                        tooltip: {
                            variant: "text.caption",
                            fontSize: "xs",
                            color: "t.white",
                            backgroundColor: "bg4",
                            borderRadius: "default",
                            py: "xs",
                            px: "ls",
                            filter: "drop-shadow(0px 3px 6px rgba(20,21,26, 0.08)) drop-shadow(0px 7px 14px rgba(71,77,87,0.08)) drop-shadow(0px 0px 1px rgba(20,21,26,0.1))",
                            ".bn-tooltip-arrow::before": {
                                backgroundColor: "bg4"
                            }
                        }
                    }
                }, {
                    dividers: {
                        primary: {
                            bg: "lines.light"
                        },
                        reverse: {
                            bg: "lines.dark"
                        },
                        selected: {
                            bg: "primary"
                        },
                        disabled: {
                            bg: "lines.light"
                        },
                        error: {
                            bg: "error"
                        }
                    }
                }, {
                    forms: {
                        placeholder: {
                            color: "t.secondary",
                            fontSize: "md"
                        },
                        label: {
                            color: "t.secondary",
                            fontSize: "sm"
                        },
                        selectedLabel: {
                            variant: "forms.label",
                            color: "primary"
                        },
                        disabledLabel: {
                            variant: "forms.label",
                            color: "t.muted"
                        },
                        errorLabel: {
                            variant: "forms.label",
                            color: "error"
                        },
                        field: {
                            borderColor: "lightgray",
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 2px ".concat(e.colors.primary)
                                }
                            }
                        },
                        input: {
                            variant: "forms.field"
                        },
                        select: {
                            variant: "forms.field"
                        },
                        textarea: {
                            variant: "forms.field",
                            ":disabled": {
                                bg: "line",
                                cursor: "not-allowed"
                            }
                        },
                        radio: {},
                        slider: {
                            bg: "lightgray"
                        }
                    }
                }, {
                    textarea: {
                        grayflat: {
                            px: "xs",
                            py: "ls",
                            bg: "bg3",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            border: "none",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        },
                        line: {
                            px: "xs",
                            py: "ls",
                            bg: "transparent",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        }
                    }
                }, {
                    hint: {
                        default: {
                            fontSize: "sm",
                            color: "t.primary",
                            "&::before": {
                                mr: "xs"
                            }
                        },
                        circle: {
                            variant: "hint.default",
                            "&::before": {
                                borderRadius: "circle",
                                mr: "xs"
                            }
                        }
                    }
                }, {
                    inputs: {
                        primary: {
                            bg: "transparent",
                            color: "t.primary",
                            fontSize: "md",
                            "&:disabled": {
                                color: "t.muted",
                                "-webkit-text-fill-color": "currentcolor",
                                opacity: 1
                            },
                            "&:disabled + label": {
                                variant: "forms.disabledLabel"
                            },
                            "&:disabled ~ .bn-input-divider": {
                                variant: "dividers.disabled"
                            },
                            "&:focus + label, &:active + label": {
                                variant: "forms.selectedLabel"
                            },
                            "&:focus ~ .bn-input-divider, &:active ~ .bn-input-divider": {
                                variant: "dividers.selected"
                            }
                        },
                        error: {
                            variant: "inputs.primary",
                            "& + label": {
                                variant: "forms.errorLabel"
                            },
                            "& ~ .bn-input-divider": {
                                variant: "dividers.error"
                            },
                            "&:focus + label": {
                                variant: "forms.errorLabel"
                            },
                            "&:focus ~ .bn-input-divider": {
                                variant: "dividers.error"
                            }
                        }
                    }
                }, k, {
                    listGrid: {
                        default: {
                            borderBottomColor: "line",
                            color: "t.third",
                            fontSize: "sm"
                        },
                        header: {
                            mt: "sm",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: "medium",
                            padding: "0 10px 0 16px"
                        },
                        toggleIcon: {
                            color: "t.third",
                            fontSize: "minor",
                            verticalAlign: "middle"
                        },
                        leftHeader: {
                            variant: "text.body2",
                            marginRight: "md"
                        },
                        rightContent: {
                            variant: "text.body2",
                            color: "t.primary",
                            textAlign: "right"
                        },
                        checkbox: {
                            width: "26px",
                            "& svg": {
                                color: "icon",
                                size: "20px",
                                mt: "line"
                            }
                        }
                    }
                }, {
                    pagination: {
                        default: {
                            mx: "minor",
                            p: "0px",
                            bg: "transparent",
                            borderRadius: "default",
                            color: "t.secondary",
                            fontWeight: "normal",
                            "&:hover:not(:disabled)": {
                                bg: "line"
                            },
                            "&:disabled": {
                                cursor: "default"
                            }
                        },
                        current: {
                            variant: "pagination.default",
                            bg: "line",
                            color: "t.primary",
                            fontWeight: "medium"
                        }
                    }
                }, {
                    progress: {
                        outer: {
                            width: "100%",
                            height: 8,
                            borderRadius: "default",
                            bg: "lines.primary"
                        },
                        bar: {
                            borderRadius: "default",
                            background: function(e) {
                                return e.colors.primaryGradient
                            }
                        }
                    }
                }, u, {
                    tag: {
                        default: {
                            borderRadius: "default",
                            px: "xs",
                            py: "minor",
                            fontSize: "xs",
                            lineHeight: "16px",
                            bg: "tag.defaultBg",
                            color: "t.yellow"
                        },
                        blue: {
                            variant: "tag.default",
                            bg: "tag.blueBg",
                            color: "tag.blueTxt"
                        },
                        gray: {
                            variant: "tag.default",
                            bg: "tag.grayBg",
                            color: "tag.grayTxt"
                        },
                        green: {
                            variant: "tag.default",
                            bg: "tag.greenBg",
                            color: "tag.greenTxt"
                        },
                        red: {
                            variant: "tag.default",
                            bg: "tag.redBg",
                            color: "tag.redTxt"
                        }
                    }
                }, y, d, {
                    tabBarItem: {
                        primary: {
                            color: "t.third"
                        },
                        selected: {
                            color: "primary"
                        }
                    },
                    tabBar: {
                        default: {
                            bg: "background",
                            height: 56
                        }
                    }
                }, S, {
                    sideMenu: {
                        item: {
                            borderLeftWidth: "4px",
                            borderLeftColor: "primary",
                            cursor: "pointer",
                            alignItems: "center",
                            fontSize: 1,
                            ":hover": {
                                bg: "muted"
                            }
                        },
                        mainItem: {
                            variant: "sideMenu.item",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent",
                            height: "48px",
                            fontWeight: "medium",
                            "& > div": {
                                flexGrow: 1,
                                overflow: "hidden",
                                fontWeight: "medium",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            "& svg:first-of-type": {
                                flexShrink: 0,
                                marginLeft: "xs",
                                marginRight: "xs",
                                color: "icon"
                            }
                        },
                        activeMainItem: {
                            variant: "sideMenu.mainItem",
                            borderLeftColor: "primary",
                            bg: "muted"
                        },
                        activeLeftIcon: {
                            variant: "sideMenu.leftIcon",
                            color: "primary"
                        },
                        rightIcon: {
                            flexShrink: 0,
                            marginLeft: "minor",
                            marginRight: "sm",
                            color: "icon",
                            transition: "all 0.1s"
                        },
                        activeBlock: {
                            paddingLeft: "32px"
                        },
                        subItem: {
                            variant: "sideMenu.item",
                            pt: "xs",
                            pb: "xs",
                            minHeight: "40px",
                            wordBreak: "break-word",
                            fontWeight: "normal",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent"
                        },
                        activeSubItem: {
                            variant: "sideMenu.subItem",
                            bg: "muted",
                            fontWeight: "medium",
                            borderLeftColor: "primary"
                        }
                    }
                }, {
                    mobileMenu: {
                        container: {
                            bg: "black.header",
                            p: "sm"
                        },
                        noSubMenuContainer: {
                            variant: "mobileMenu.container",
                            pb: "xs"
                        },
                        tabs: {
                            height: "35px"
                        },
                        tab: {
                            marginRight: "md",
                            alignItems: "center",
                            color: "t.third",
                            "& >svg": {
                                marginRight: "minor"
                            },
                            "& >div": {
                                flexDirection: "column",
                                fontSize: "md",
                                lineHeight: 1.5,
                                position: "relative",
                                "& >div": {
                                    position: "absolute",
                                    bottom: "-2px",
                                    height: 2,
                                    width: "100%",
                                    bg: "primary"
                                }
                            }
                        },
                        activeTab: {
                            variant: "mobileMenu.tab",
                            "& > svg": {
                                color: "primary"
                            },
                            "& > div": {
                                color: "#fff"
                            }
                        },
                        dropdownContainer: {
                            width: "100%",
                            zIndex: 11,
                            whiteSpace: "nowrap",
                            fontSize: 1
                        },
                        dropdownBox: {
                            marginTop: "-1px",
                            bg: "background",
                            width: "100%",
                            borderRadius: "0 0 2px 2px",
                            color: "#212833"
                        },
                        dropdown: {
                            p: "0 xp",
                            lineHeight: "40px",
                            height: "40px",
                            bg: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "sm",
                            borderRadius: "small"
                        },
                        selectedDropDown: {
                            variant: "mobileMenu.dropdown",
                            bg: "#F5F5F5",
                            fontWeight: "medium"
                        },
                        dropdownInput: {
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            bg: "#fff",
                            borderRadius: "small",
                            padding: "0 md",
                            color: "#212833",
                            fontWeight: "medium",
                            "& >svg": {
                                marginLeft: "minor",
                                flexShrink: 0,
                                color: "icon"
                            },
                            "& >div": {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        }
                    }
                }, {
                    twoFactor: {
                        pointerText: {
                            cursor: "pointer",
                            textAlign: "center",
                            marginTop: "plus",
                            fontWeight: "normal",
                            fontSize: 1
                        },
                        lable: {
                            fontWeight: "normal",
                            fontSize: 1,
                            lineHeight: "32px",
                            marginBottom: "md"
                        },
                        tabItem: {
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [172, 192]
                        },
                        tabItemSingle: {
                            borderBottom: "2px solid",
                            borderColor: "primary",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [344, 384]
                        },
                        loading: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "lg",
                            color: "t.third",
                            fontSize: "2",
                            height: "100%",
                            width: "100%",
                            zIndex: "1",
                            userSelect: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                        },
                        error: {
                            color: "accent",
                            fontSize: "0",
                            marginTop: "minor"
                        },
                        googleActive: {
                            transform: ["translate3d(0px, 0px, 0px)"]
                        },
                        smsActive: {
                            transform: ["translate3d(172px, 0px, 0px)", "translate3d(192px, 0px, 0px)"]
                        }
                    },
                    Ensure2FA: {
                        title: {
                            color: "text",
                            fontWeight: "medium",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        },
                        desc: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        }
                    },
                    Enable2FA: {
                        wrap: {
                            width: [344, 384],
                            height: "342px",
                            position: "relative",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: "296px",
                            textAlign: "center",
                            lineHeight: "18px"
                        },
                        card: {
                            width: "160px",
                            height: "64px",
                            border: "1px solid #EAECEF",
                            borderRadius: "4px",
                            margin: "minor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            "&:hover": {
                                borderColor: "primary"
                            },
                            "&:active": {
                                backgroundColor: "#FBEAB6",
                                borderColor: "primary"
                            }
                        },
                        risk: {
                            color: "#F0B90A",
                            fontSize: "1",
                            lineHeight: "30px"
                        },
                        skip: {
                            color: "t.third",
                            fontSize: "1",
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        cardWrap: {
                            margin: "40px 0"
                        },
                        icon: {
                            width: "42px",
                            height: "42px",
                            marginRight: "sm"
                        },
                        front: {
                            zIndex: "1",
                            visibility: "visible"
                        },
                        back: {
                            zIndex: "0",
                            visibility: "hidden"
                        }
                    },
                    Modal: {
                        wrap: {
                            py: [40],
                            width: [344, 384],
                            height: [342],
                            borderRadius: "default"
                        }
                    }
                }, {
                    inputCode: {
                        default: {
                            width: "100%",
                            justifyContent: "space-between",
                            "& > div:not(:last-child)": {
                                mr: "minor"
                            },
                            ".bn-inputCode-input": {
                                width: ["inputCodeMobile", "inputCode"]
                            },
                            ".bn-inputCode-input input": {
                                textAlign: "center",
                                bottom: "xs",
                                position: "relative",
                                fontSize: "md"
                            }
                        },
                        outlineLarge: {
                            variant: "inputCode.default",
                            ".bn-inputCode-input  input": {
                                bottom: "0px",
                                fontSize: "md"
                            },
                            ".bn-inputCode-input > div": {
                                width: "40px"
                            }
                        }
                    }
                }, {
                    safety: {
                        container: {
                            alignItems: "baseline",
                            "& > div": {
                                transform: "translateY(-2px)"
                            },
                            "& > label": {
                                fontSize: "xs",
                                ml: "minor"
                            }
                        },
                        level: {
                            width: "8px",
                            height: "3px",
                            borderRadius: "small",
                            mr: "minor",
                            bg: "muted"
                        }
                    }
                }, {
                    styledSlider: {
                        default: {
                            mt: "sm",
                            mb: "sm",
                            paddingLeft: "ls",
                            paddingRight: "ls",
                            width: "100%",
                            ".bn-slider-container": {
                                position: "relative",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 14px)",
                                ml: "7px",
                                height: "25px",
                                "&:hover > label": {
                                    visibility: "visible",
                                    opacity: 1
                                }
                            },
                            ".bn-slider-available-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.line",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-progress-bar": {
                                bg: "slider.progressBar"
                            },
                            ".bn-slider-disabled-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.disabledBar",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-radio-button": {
                                position: "absolute",
                                width: "16px",
                                height: "16px",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "slider.tooltipText",
                                borderRadius: "default",
                                border: "4px solid",
                                borderColor: "slider.progressBar",
                                zIndex: 20,
                                cursor: "grab",
                                transition: "box-shadow 0.2s ease",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid",
                                    borderColor: "bg1",
                                    borderRadius: "default",
                                    background: "transparent",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                }
                            },
                            ".bn-slider-radio-tooltip": {
                                visibility: "hidden",
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                marginTop: "-24px",
                                padding: "2px 4px",
                                borderRadius: "small",
                                bg: "slider.progressBar",
                                color: "slider.tooltipText",
                                fontSize: 0,
                                verticalAlign: "top",
                                transform: "translateX(-50%)",
                                zIndex: 10,
                                userSelect: "none",
                                transition: "visibility 0.2s ease, opacity 0.2s ease"
                            },
                            ".bn-slider-stepper": {
                                boxSizing: "content-box",
                                position: "absolute",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "bg1",
                                color: "t.third",
                                width: "6px",
                                height: "6px",
                                borderRadius: "small",
                                border: "2px solid",
                                borderColor: "line",
                                zIndex: "10",
                                overflow: "visible",
                                cursor: "pointer",
                                ":hover": {
                                    bg: "line",
                                    borderColor: "bg1"
                                }
                            },
                            ".bn-slider-progress-stepper": {
                                bg: "slider.progressBar",
                                borderColor: "bg1",
                                ":hover": {
                                    bg: "slider.progressBar"
                                }
                            },
                            ".bn-slider-disabled-stepper": {
                                bg: "slider.disabledBar",
                                color: "slider.disabledBar",
                                ":hover": {
                                    bg: "slider.disabledBar"
                                }
                            },
                            ".bn-slider-scale": {
                                position: "absolute",
                                left: "20px",
                                top: "15px",
                                transform: "translateX(calc(-50% + 4px)) rotate(-45deg)",
                                fontSize: 1,
                                userSelect: "none"
                            }
                        },
                        primary: {
                            variant: "styledSlider.default",
                            " .bn-slider-progress-bar": {
                                bg: "primary"
                            },
                            " .bn-slider-radio-button": {
                                borderColor: "primary"
                            },
                            " .bn-slider-radio-tooltip": {
                                bg: "primary"
                            },
                            " .bn-slider-progress-stepper": {
                                bg: "primary"
                            }
                        }
                    }
                }, {
                    smartSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "xxs",
                            height: "25px",
                            "&:hover > label": {
                                display: "block"
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "#48515D",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        disabledBar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            height: "4px",
                            bg: "#cccccc",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "#76808F",
                            opacity: "0.2",
                            borderRadius: "circle",
                            border: "2px solid",
                            zIndex: 20,
                            cursor: "grab"
                        },
                        tooltip: {
                            display: "none",
                            position: "absolute",
                            top: 0,
                            marginTop: "-18px",
                            padding: "1px 2px",
                            borderRadius: "small",
                            color: "#FFFFFF",
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "#656D7B",
                            borderRadius: "circle",
                            zIndex: "10",
                            overflow: "visible"
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    tradeSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "7px",
                            height: "25px",
                            "&:hover > label": {
                                visibility: "visible",
                                opacity: 1
                            },
                            "&:hover > .bn-tradeSlider-ratioButton": {
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.slider.ratioButton, ", 0 0 0 4px ").concat(e.colors.lines.primary)
                                }
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "lines.primary",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "slider.ratioButton",
                            borderRadius: "circle",
                            border: "3px solid",
                            zIndex: 20,
                            cursor: "grab",
                            transition: "box-shadow 0.2s ease"
                        },
                        tooltip: {
                            visibility: "hidden",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            marginTop: "20px",
                            padding: "1px 2px",
                            borderRadius: 2,
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none",
                            bg: "transparent",
                            color: "slider.progress",
                            transition: "visibility 0.2s ease, opacity 0.2s ease"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "lines.primary",
                            borderRadius: "circle",
                            boxShadow: "0 0 0 2px",
                            color: "slider.ratioButton",
                            zIndex: "10",
                            overflow: "visible",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                width: "14px",
                                height: "14px"
                            }
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    select: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: 10,
                            padding: 0,
                            transition: "height 0.2s ease",
                            background: "#FFFFFF",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                background: "#F5F5F7"
                            }
                        }
                    }
                }, {
                    search: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            bg: "search.bg",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            bg: "search.bg",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                backgroundColor: "search.hoverBg"
                            }
                        },
                        icon: {
                            cursor: "pointer",
                            color: "t.third",
                            verticalAlign: "middle"
                        }
                    }
                }, b, {
                    pureSelect: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            boxShadow: "tooltip",
                            borderRadius: "default",
                            cursor: "pointer",
                            bg: "popupBg"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        icon: {
                            color: "icon",
                            position: "absolute",
                            right: "10px",
                            top: "50%"
                        }
                    }
                }, {
                    breadcrumb: {
                        container: {
                            alignItems: "center",
                            pl: "plus",
                            pr: "plus",
                            height: "48px",
                            fontSize: 0,
                            color: "t.secondary"
                        },
                        splitter: {
                            ml: "xs",
                            mr: "xs",
                            lineHeight: 1,
                            color: "line"
                        }
                    },
                    breadcrumbLink: {
                        default: {
                            textDecoration: "none",
                            fontSize: "sm",
                            lineHeight: 1
                        }
                    }
                }, {
                    radio: {
                        default: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "pointer",
                            "& svg:hover": {
                                color: "primary"
                            },
                            "& svg:active": {
                                color: "primary"
                            }
                        },
                        disabled: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "not-allowed",
                            color: "t.disabled",
                            "& svg, & label": {
                                cursor: "not-allowed"
                            }
                        }
                    }
                }, {
                    mediaBox: {
                        default: {
                            width: ["100%", "384px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            px: "md",
                            borderRadius: "default",
                            bg: "#fff"
                        },
                        rwdContentBox: {
                            textAlign: "center",
                            width: ["100%", "100%", "736px"],
                            m: [0, "24px auto", "24px auto"],
                            px: "md",
                            py: "xp",
                            borderRadius: "default",
                            bg: "#fff",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadow: {
                            width: ["100%", "750px", "970px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            p: ["md", "40px", "40px"],
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        topShadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"],
                            mt: ["0", "100px", "100px"]
                        },
                        newDSdefault: {
                            width: ["100%", "400px", "432px"],
                            m: ["40px auto", "48px auto", "48px auto"],
                            px: ["sm", "md"],
                            bg: "#fff"
                        }
                    }
                }, {
                    twoFAThreeCode: {
                        default: {
                            width: "484px",
                            position: "relative",
                            maxWidth: "100%",
                            height: "100%",
                            flexDirection: "column",
                            p: "sm",
                            "&.dialog": {
                                width: "436px",
                                p: 0
                            },
                            "&.safeWrap": {
                                width: ["300px", "384px", "384px"],
                                p: 0,
                                ".bn-2fa-title": {
                                    fontSize: "plus",
                                    mt: "xs"
                                }
                            },
                            ".bn-2fa-title": {
                                textAlign: "center"
                            },
                            ".bn-2fa-info": {
                                textAlign: "center",
                                mt: "ls",
                                mb: "plus",
                                color: "t.third",
                                lineHeight: "16px",
                                height: "auto"
                            },
                            ".bn-2fa-info.bn-2fa-table-info": {
                                mb: "27px"
                            },
                            "&.dialog .bn-2fa-title": {
                                lineHeight: "64px",
                                fontSize: "20px",
                                textAlign: "left"
                            },
                            "&.dialog .bn-2fa-info": {
                                textAlign: "left",
                                mt: 0,
                                mb: 4
                            },
                            ".bn-2fa-link": {
                                color: "t.yellow",
                                fontSize: "14px",
                                lineHeight: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                textAlign: "left",
                                mb: "md"
                            },
                            ".error .bn-2fa-field": {
                                borderColor: "toast.error"
                            },
                            ".bn-2fa-field": {
                                flex: 1
                            },
                            ".bn-2fa-field .bn-input-label": {
                                whiteSpace: "nowrap",
                                fontSize: "14px"
                            },
                            ".bn-2fa-fieldbutton": {
                                width: "104px",
                                ml: "xs",
                                "&.noCn": {
                                    flexDirection: "column",
                                    lineHeight: 1.15
                                },
                                "&:disabled": {
                                    color: "#D0980B"
                                },
                                "& .sub": {
                                    color: "t.third",
                                    fontSize: "xs",
                                    fontWeight: "normal"
                                }
                            },
                            ".bn-2fa-fieldInfo": {
                                mt: "minor",
                                mb: "20px",
                                lineHeight: "16px",
                                color: "t.third",
                                height: "auto",
                                "& .voiceGet": {
                                    color: "t.yellow",
                                    cursor: "pointer"
                                }
                            },
                            ".error .bn-2fa-fieldInfo": {
                                color: "toast.error"
                            },
                            ".bn-2fa-submit": {
                                mb: "md"
                            },
                            ".bn-2fa-fullscreenSubmit": {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.06)",
                                p: "md"
                            },
                            ".bn-2fa-cell": {
                                width: "148px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                lineHeight: "18px",
                                padding: "16px",
                                border: "none",
                                ":hover": {
                                    bg: "bg3",
                                    cursor: "pointer"
                                }
                            },
                            ".bn-2fa-cell:nth-of-type(n+2)": {
                                ml: ["sm", "md", "md"]
                            },
                            ".bn-2fa-celltext": {
                                mt: "ls",
                                fontWeight: "medium",
                                whiteSpace: "break-spaces"
                            },
                            ".bn-2fa-nextHit": {
                                fontSize: "xs",
                                textDecoration: "none",
                                color: "t.yellow",
                                "&:hover": {
                                    color: "t.yellow"
                                },
                                cursor: "pointer",
                                alignSelf: "flex-end",
                                mb: 3
                            },
                            ".bn-2fa-tabGroup": {
                                mb: "md"
                            },
                            ".bn-2fa-switchChoice": {
                                textDecoration: "none",
                                mb: "md",
                                color: "t.yellow",
                                width: "auto",
                                display: "inline-block",
                                cursor: "pointer"
                            },
                            ".bn-2fa-cellIconWrap": {
                                position: "relative",
                                width: "48px",
                                height: "48px",
                                lineHeight: "20px"
                            },
                            ".bn-2fa-cellIcon": {
                                position: "absolute"
                            }
                        }
                    }
                }, {
                    card: {
                        default: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        }
                    }
                }, _, {
                    backTop: {
                        default: {
                            borderRadius: "circle",
                            width: "40px",
                            height: "40px",
                            bg: "t.primary",
                            opacity: .5,
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            zIndex: "backTop",
                            "&:hover": {
                                opacity: .7
                            },
                            ".backTop-arrow-icon": {
                                color: "bg1"
                            }
                        }
                    }
                }, {
                    table: {
                        dimhead: {
                            ".bn-table th": {
                                backgroundColor: "bg2"
                            }
                        },
                        purehead: {
                            ".bn-table th": {
                                backgroundColor: "bg1"
                            }
                        }
                    }
                }, {
                    carousel: {
                        dot: {
                            bar: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "16px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "3px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            background: "#fff",
                                            border: 0,
                                            borderRadius: "1px",
                                            outline: "none",
                                            cursor: "pointer",
                                            opacity: .3,
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s",
                                            "&:hover": {
                                                opacity: .75
                                            },
                                            "&:focus": {
                                                opacity: .75
                                            }
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                background: "#fff",
                                                opacity: 1
                                            },
                                            "&:hover": {
                                                opacity: 1
                                            },
                                            "&:focus": {
                                                opacity: 1
                                            }
                                        }
                                    },
                                    "&.slick-dots-bottom": {
                                        bottom: "12px"
                                    },
                                    "&.slick-dots-top": {
                                        top: "12px"
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "3px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "3px",
                                            height: "16px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            "&.slick-active": {
                                                width: "3px",
                                                height: "24px",
                                                button: {
                                                    width: "3px",
                                                    height: "24px"
                                                }
                                            },
                                            button: {
                                                width: "3px",
                                                height: "16px"
                                            }
                                        },
                                        "&.slick-dots-left": {
                                            right: "auto",
                                            left: "12px"
                                        },
                                        "&.slick-dots-right": {
                                            right: "12px",
                                            left: "auto"
                                        }
                                    }
                                }
                            },
                            circle: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "8px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "8px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            backgroundColor: "line",
                                            border: 0,
                                            borderRadius: "8px",
                                            outline: "none",
                                            cursor: "pointer",
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s"
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                backgroundColor: "primary"
                                            }
                                        }
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots-left": {
                                        right: "auto",
                                        left: "12px"
                                    },
                                    ".slick-dots-right": {
                                        right: "12px",
                                        left: "auto"
                                    },
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "8px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "8px",
                                            height: "8px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            button: {
                                                width: "8px",
                                                height: "8px"
                                            },
                                            "&.slick-active": {
                                                width: "8px",
                                                height: "24px",
                                                button: {
                                                    width: "8px",
                                                    height: "24px"
                                                }
                                            }
                                        },
                                        "&.slick-dots-bottom": {
                                            bottom: "12px"
                                        },
                                        "&.slick-dots-top": {
                                            top: "12px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    formItem: {
                        default: {
                            width: "100%",
                            mb: "md"
                        },
                        label: {
                            variant: "text.body2",
                            width: "100%",
                            alignItems: "center",
                            mb: "minor",
                            color: "t.primary"
                        },
                        help_default: {
                            variant: "text.body2",
                            width: "100%",
                            mt: "minor",
                            color: "t.third"
                        },
                        help_error: {
                            variant: "formItem.help_default",
                            color: "t.sell"
                        },
                        help_warning: {
                            variant: "formItem.help_default",
                            color: "t.yellow"
                        },
                        content: {
                            width: "100%",
                            position: "relative",
                            minHeight: "12px",
                            "&.hide": {
                                height: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            }
                        },
                        crowded: {
                            variant: "formItem.default",
                            display: "flex",
                            alignItems: "center"
                        },
                        crowdedContent: {
                            variant: "formItem.content",
                            flex: 1
                        }
                    }
                }),
                U = (0, n.A)({
                    colors: {
                        greys: {
                            switch: "#C1C6CD",
                            risk: "#EAECEF"
                        },
                        black: {
                            header: "#12161C",
                            footer: "#0B0E11",
                            text: "#212833"
                        },
                        header: {
                            text: "white",
                            bg: "#12161C",
                            dropdown: "#1E2126",
                            gray: "#848E9C",
                            black: "#212833"
                        }
                    },
                    fonts: {
                        heading: "inherit",
                        monospace: "Menlo, monospace"
                    },
                    breakpoints: ["768px", "1024px", "1280px"],
                    fontSizes: (0, i.A)((0, n.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
                        xs: 12,
                        sm: 14,
                        md: 16,
                        minor: 18,
                        plus: 20,
                        xp: 24,
                        lg: 28,
                        xl: 32,
                        xxl: 40,
                        xxxl: 48,
                        xxxxl: 56
                    }),
                    fontWeights: {
                        extraLight: 200,
                        light: 300,
                        normal: 400,
                        regular: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    },
                    lineHeights: {
                        body: 1.5,
                        heading: 1.25
                    },
                    space: (0, i.A)((0, n.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
                        line: 1,
                        tiny: 2,
                        minor: 4,
                        xxs: 6,
                        xs: 8,
                        s: 10,
                        ls: 12,
                        sm: 16,
                        md: 24,
                        plus: 32,
                        xp: 40,
                        lg: 48,
                        xl: 64,
                        xxl: 80
                    }),
                    sizes: {
                        avatar: 48,
                        inputCode: 44,
                        inputCodeMobile: 40
                    },
                    radii: {
                        small: 2,
                        default: 4,
                        large: 6,
                        extra: 8,
                        larger: 10,
                        xlarge: 16,
                        extraLarger: 20,
                        xxlarge: 26,
                        circle: 99999
                    },
                    shadows: {
                        card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
                        tooltip: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        calendar: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        dialog: "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
                        area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                        dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    zIndices: {
                        mask: 10,
                        menu: 1e3,
                        header: 1001,
                        dropdown: 1100,
                        modal: 1200,
                        backTop: 1225,
                        calendar: 1250,
                        mobileDatePopup: 1275,
                        notification: 1300,
                        alert: 1350,
                        tooltip: 1400,
                        drawer: 9999
                    },
                    styles: {
                        root: {
                            fontWeight: "body",
                            lineHeight: "body"
                        }
                    }
                }, I)
        },
        "0vap": (e, t, r) => {
            "use strict";
            r.d(t, {
                D9: () => i,
                Oh: () => n,
                wL: () => o,
                wv: () => s,
                z1: () => a
            });
            var n = {
                    0: "#FFFFFF",
                    5: "#FAFAFA",
                    10: "#F5F5F5",
                    50: "#EAECEF",
                    100: "#D8DCE1",
                    200: "#B7BDC6",
                    250: "#929AA5",
                    300: "#848E9C",
                    400: "#707A8A",
                    500: "#5E6673",
                    600: "#474D57",
                    700: "#2B3139",
                    800: "#1E2329",
                    900: "#181A20",
                    1e3: "#0B0E11"
                },
                i = {
                    5: "#FFFDE6",
                    10: "#FEF6D8",
                    50: "#FFEF87",
                    100: "#FCD535",
                    200: "#F0B90B",
                    300: "#C99400",
                    400: "#A37200",
                    500: "#8D5F02",
                    600: "#6A4403",
                    700: "#3C2601",
                    800: "#281A00"
                },
                a = {
                    400: "#328DFD",
                    600: "#1D53AB"
                },
                o = {
                    5: "#F2FFF7",
                    10: "#E6FFF1",
                    50: "#B5FFD9",
                    100: "#85F2BE",
                    200: "#5AE6A7",
                    300: "#32D993",
                    400: "#0ECB81",
                    500: "#03A66D",
                    600: "#008057",
                    700: "#005940",
                    800: "#102821",
                    900: "#091F19"
                },
                s = {
                    5: "#FEF6F7",
                    10: "#FEF1F2",
                    50: "#FDDDDE",
                    100: "#FFC2C4",
                    200: "#FF99A0",
                    300: "#FF707E",
                    400: "#F6465D",
                    500: "#CF304A",
                    600: "#A81E3A",
                    700: "#82112B",
                    800: "#35141D",
                    900: "#2C1018"
                }
        },
        Ki6D: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => v
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                a = r("Z2u4"),
                o = r("0vap"),
                s = r("GYch"),
                l = r("RS8X"),
                c = (0, s.CE)(l.A).dark,
                u = (0, n.A)({
                    modalBg: o.Oh[800],
                    popupBg: o.Oh[800],
                    bg1: o.Oh[900],
                    bg2: o.Oh[1e3],
                    bg3: o.Oh[700],
                    bg4: o.Oh[500],
                    bg5: o.Oh[900],
                    bg6: o.Oh[1e3],
                    line: o.Oh[600],
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: o.Oh[50],
                        secondary: o.Oh[200],
                        third: o.Oh[300],
                        placeholder: o.Oh[500],
                        disabled: o.Oh[500],
                        yellow: o.D9[200],
                        buy: o.wL[400],
                        sell: o.wv[400],
                        toast: o.D9[400],
                        white: o.Oh[0]
                    },
                    iconNormal: o.Oh[300],
                    alertYellowBg: o.D9[800],
                    badgeYellowBg: o.D9[700],
                    outlineHover: o.D9[600],
                    primaryHover: o.D9[100],
                    primary: o.D9[200],
                    toastFailBg: o.wv[800],
                    depthSellBg: o.wv[800],
                    sellHover: o.wv[300],
                    sell: o.wv[400],
                    toastSuccessBg: o.wL[800],
                    depthBuyBg: o.wL[800],
                    buyHover: o.wL[300],
                    buy: o.wL[400],
                    invBg: o.Oh[700],
                    success: o.wL[400],
                    error: o.wv[400],
                    successBg: o.wL[800],
                    errorBg: o.wv[800],
                    disableBg: o.Oh[600]
                }, c),
                d = (0, s.LH)("dark")(u);
            const p = u;
            var f = function(e) {
                    return (0, i.A)((0, n.A)({}, a.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#444",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 3px 6px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.04), inset 0px 0px 1px rgba(94,102,115,0.8)",
                            shadow02: "0px 7px 14px rgba(0,0,0,.08), 0px 3px 6px rgba(0,0,0,.08), inset 0px 0px 1px rgba(94,102,115,.9)",
                            shadow03: "0px 16px 32px rgba(0,0,0,0.16), 0px 8px 16px rgba(0,0,0,0.16), inset 0px 0px 1px rgba(94,102,115,0.9)"
                        },
                        calendar: {
                            selected: o.Oh[400],
                            selectedRange: o.Oh[600],
                            disableColor: e.t.disabled,
                            shadow: o.Oh[1e3],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "0, 0, 0"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: o.Oh[500],
                            progressBar: o.Oh[10],
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: o.Oh[0],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: o.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: "#3B182B",
                            warningBg: "#3C351F",
                            successBg: "#17352F",
                            infoBg: "#1C2D40"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#1C2D40",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: o.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: o.D9[100],
                            flowText: o.Oh[800]
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: o.Oh[900],
                        secondary: "#2EBD85",
                        background: "#12161C",
                        accent: "#F23051",
                        muted: "#262626",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#1B1F25",
                        stress: "#1F2124",
                        lines: {
                            primary: "#272A2E",
                            light: "#272A2E",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                h = (0, i.A)((0, n.A)({}, a.A), {
                    shadows: (0, i.A)((0, n.A)({}, a.A.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                m = (0, s.CK)({
                    palette: p,
                    externalColors: f,
                    layout: h
                });
            (0, s.CK)({
                palette: d,
                externalColors: f,
                layout: h
            });
            const v = m
        },
        "8fYl": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => v
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                a = r("Z2u4"),
                o = r("0vap"),
                s = r("GYch"),
                l = r("RS8X"),
                c = (0, s.CE)(l.A).light,
                u = (0, n.A)({
                    modalBg: o.Oh[0],
                    popupBg: o.Oh[0],
                    bg1: o.Oh[0],
                    bg2: o.Oh[5],
                    bg3: o.Oh[10],
                    bg4: o.Oh[500],
                    bg5: o.Oh[900],
                    bg6: o.Oh[1e3],
                    line: o.Oh[50],
                    liteBg1: o.Oh[0],
                    liteBg2: o.Oh[5],
                    t: {
                        primary: o.Oh[800],
                        secondary: o.Oh[600],
                        third: o.Oh[400],
                        placeholder: o.Oh[200],
                        disabled: o.Oh[200],
                        yellow: o.D9[300],
                        buy: o.wL[500],
                        sell: o.wv[500],
                        toast: o.D9[500],
                        white: o.Oh[0]
                    },
                    iconNormal: o.Oh[250],
                    alertYellowBg: o.D9[5],
                    badgeYellowBg: o.D9[10],
                    outlineHover: o.D9[50],
                    primaryHover: o.D9[100],
                    primary: o.D9[200],
                    toastFailBg: o.wv[5],
                    depthSellBg: o.wv[10],
                    sellHover: o.wv[300],
                    sell: o.wv[400],
                    toastSuccessBg: o.wL[5],
                    depthBuyBg: o.wL[10],
                    buyHover: o.wL[300],
                    buy: o.wL[400],
                    invBg: o.Oh[5],
                    success: o.wL[400],
                    successBg: o.wL[5],
                    error: o.wv[400],
                    errorBg: o.wv[5],
                    disableBg: o.Oh[50]
                }, c),
                d = (0, s.LH)("light")(u);
            const p = u;
            var f = function(e) {
                    return (0, i.A)((0, n.A)({}, a.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#CCCCCC",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                            shadow02: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                            shadow03: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                        },
                        calendar: {
                            selected: o.D9[200],
                            selectedRange: o.D9[100],
                            disableColor: e.t.disabled,
                            shadow: o.Oh[50],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "255, 255, 255"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: o.Oh[100],
                            progressBar: o.Oh[700],
                            tooltipText: e.modalBg,
                            ratioButton: o.Oh[0],
                            progress: o.Oh[300],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: o.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: o.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: o.D9[100],
                            flowText: o.Oh[800]
                        },
                        advanced: {
                            downDropBg: o.Oh[0]
                        },
                        transInputBG: e.bg3,
                        maskBg: o.Oh[900],
                        secondary: "#2EBD85",
                        background: "#FAFAFA",
                        accent: "#F23051",
                        muted: "#F5F5F5",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#EAECEF",
                        stress: "#F2F2F2",
                        lines: {
                            primary: "#EAECEF",
                            light: "#EAECEF",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                h = (0, i.A)((0, n.A)({}, a.A), {
                    shadows: (0, i.A)((0, n.A)({}, a.A.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                m = (0, s.CK)({
                    palette: p,
                    externalColors: f,
                    layout: h
                });
            (0, s.CK)({
                palette: d,
                externalColors: f,
                layout: h
            });
            const v = m
        },
        RS8X: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const i = {
                primaryGradient: {
                    light: n,
                    dark: n
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            }
        },
        GYch: (e, t, r) => {
            "use strict";
            r.d(t, {
                LH: () => x,
                CK: () => w,
                CE: () => b
            });
            var n = r("aVXY"),
                i = r("tEf9"),
                a = r("veKZ"),
                o = r.n(a),
                s = r("3POh"),
                l = r.n(s),
                c = r("jPI1"),
                u = r.n(c),
                d = r("pL+m"),
                p = r.n(d),
                f = r("H8sf"),
                h = r.n(f);
            const m = {
                dark: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#1F8DF9"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#553821",
                        depthBuyBg: "#22384E",
                        toastFailBg: "#553821",
                        toastSuccessBg: "#22384E",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        successBg: "#22384E",
                        errorBg: "#553821"
                    }
                },
                light: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#297FD4"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#FFEFE2",
                        depthBuyBg: "#E6F3FF",
                        toastFailBg: "#FFEFE2",
                        toastSuccessBg: "#E6F2FF",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        errorBg: "#FFEFE2",
                        successBg: "#E6F2FF"
                    }
                }
            };
            var v = ["light", "dark"],
                g = l()(o()),
                b = function(e) {
                    return g({})((function(t, r) {
                        var i;
                        return t[r] = (i = r, u()([p(), g({})((function(e, t) {
                            var r = (0, n.A)(t, 2),
                                a = r[0],
                                o = r[1];
                            return e[a] = o[i], e
                        }))]))(e), t
                    }))(v)
                },
                x = function(e) {
                    return t = m[e].colors,
                        function(e) {
                            return h()({}, e, t)
                        };
                    var t
                },
                y = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return h().apply(void 0, [{}, t].concat((0, i.A)(e)))
                    }
                },
                w = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        n = e.layout;
                    return y([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(n)
                }
        },
        KsKd: (e, t, r) => {
            "use strict";
            r.d(t, {
                gb: () => Lr,
                NP: () => K,
                Ri: () => Er,
                CY: () => Dr
            });
            var n = r("aVXY"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("g80r"),
                s = r("9Fw3"),
                l = r("6p3b"),
                c = r("8fYl"),
                u = r("Ki6D"),
                d = r("S8bp"),
                p = r("ezuS"),
                f = r("BK7R"),
                h = r("QUKP"),
                m = r("gZfF"),
                v = r("tEf9"),
                g = r("Enqy"),
                b = function() {
                    if (Object.keys) return Object.keys;
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        n = r.length;
                    return function(i) {
                        if ("object" !== typeof i && "function" !== typeof i || null === i) throw new TypeError("Object.keys called on non-object");
                        var a = [];
                        for (var o in i) e.call(i, o) && a.push(o);
                        if (t)
                            for (var s = 0; s < n; s++) e.call(i, r[s]) && a.push(r[s]);
                        return a
                    }
                }(),
                x = r("pR+c"),
                y = r("M5j3"),
                w = r("5XPI"),
                k = r("C6y2"),
                A = {
                    default: "stretch",
                    left: "flex-start",
                    right: "flex-end",
                    center: "center"
                };
            const S = a().memo((function(e) {
                var t = e.anchorOrigin,
                    r = e.position,
                    n = e.enablePortal,
                    i = e.container,
                    o = (0, m.A)(e, ["anchorOrigin", "position", "enablePortal", "container"]),
                    s = {
                        position: r,
                        zIndex: "notification",
                        alignItems: A[t.horizontal] || A.default
                    };
                return "top" === t.vertical ? s.top = 12 : s.bottom = 12, "left" === t.horizontal ? s.left = 12 : "center" === t.horizontal ? (s.left = "50%", s.transform = "translateX(-50%)") : s.right = 12, n || i ? a().createElement(w.Ay, {
                    container: i
                }, a().createElement(k.A, (0, y.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, o, {
                    __css: s
                }))) : a().createElement(k.A, (0, y.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, o, {
                    __css: s
                }))
            }));
            var C = r("LCuF"),
                _ = r("yhUQ"),
                T = r("w/Qz");
            const B = function(e) {
                return a().createElement(T.A, (0, y.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M11.989 22H12c5.527 0 10-4.473 10-10 0-5.528-4.473-10-10-10-5.516 0-9.989 4.472-10 9.989-.011 5.527 4.461 10 9.989 10.011zM10.99 5.016h2.018v2.007h-2.018V5.016zm0 4.633h2.018v9.346h-2.018V9.65z",
                    fill: "currentColor"
                }))
            };
            const E = function(e) {
                return a().createElement(T.A, (0, y.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                    fill: "currentColor"
                }))
            };
            var I = r("BMA0"),
                U = r("1Ckn"),
                L = r("ypKN"),
                D = r("/Lz3"),
                P = {
                    info: B,
                    error: E,
                    warning: I.A,
                    success: L.A,
                    tips: U.A
                },
                R = (0, i.forwardRef)((function(e, t) {
                    var r = e.message,
                        n = e.header,
                        o = e.footer,
                        s = e.icon,
                        l = e.variant,
                        c = void 0 === l ? "tips" : l,
                        u = e.closable,
                        d = void 0 !== u && u,
                        p = e.showIcon,
                        h = void 0 === p || p,
                        v = e.onClose,
                        g = e.progress,
                        b = (e.showProgress, (0, m.A)(e, ["message", "header", "footer", "icon", "variant", "closable", "showIcon", "onClose", "progress", "showProgress"])),
                        x = P[c],
                        w = "toast.".concat(c),
                        A = (0, i.isValidElement)(s) ? a().cloneElement(s, (0, f.A)({
                            size: 20,
                            display: "block"
                        }, s.props), []) : x ? a().createElement(x, {
                            size: 20,
                            display: "block"
                        }) : null;
                    return a().createElement(k.A, (0, y.A)({
                        ref: t,
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        tx: "toast",
                        variant: c
                    }, b), a().createElement(C.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(g, "%"),
                            height: "3px",
                            bg: "primary"
                        }
                    }), a().createElement(k.A, {
                        alignItems: "flex-start",
                        __css: {
                            width: "100%"
                        }
                    }, h ? a().createElement(C.A, {
                        color: w,
                        __css: {
                            mr: "ls",
                            pt: "2px",
                            flexShrink: 0
                        }
                    }, A) : null, a().createElement(k.A, {
                        className: "bn-notification-body-wrapper",
                        __css: {
                            maxHeight: "146px",
                            flexDirection: "column",
                            width: "100%"
                        }
                    }, n ? a().createElement(_.A, {
                        sx: {
                            color: "t.primary",
                            mb: "2px",
                            flexShrink: 0
                        },
                        variant: "subtitle1"
                    }, n) : null, r ? a().createElement(_.A, {
                        className: "bn-notification-msg-wrapper",
                        variant: "body2",
                        sx: {
                            color: "t.secondary",
                            overflow: "auto",
                            maxHeight: 120,
                            pr: d ? "md" : 0,
                            wordWrap: "break-word"
                        }
                    }, r) : null, o ? a().createElement(_.A, {
                        variant: "label5",
                        sx: {
                            color: "toast.content",
                            flexShrink: 0,
                            pr: d ? "md" : 0
                        }
                    }, o) : null)), d ? a().createElement(C.A, {
                        __css: {
                            position: "absolute",
                            right: "sm",
                            alignItems: "flex-start",
                            flexShrink: 0,
                            p: "minor"
                        }
                    }, a().createElement(D.A, {
                        size: 20,
                        onClick: v,
                        display: "block",
                        cursor: "pointer",
                        color: "toast.closeColor"
                    })) : null)
                }));
            R.displayName = "Toast";
            const O = R;

            function M(e) {
                var t = (0, n.A)((0, i.useState)(0), 2),
                    r = t[0],
                    o = t[1],
                    s = e.onClose,
                    l = e.item,
                    c = e.style,
                    u = l.autoHideDuration,
                    d = l.open,
                    p = l.key,
                    f = l.showProgress,
                    h = l.onClose,
                    v = (0, m.A)(l, ["autoHideDuration", "open", "key", "showProgress", "onClose"]),
                    g = a().useRef(),
                    b = a().useCallback((function(e, t) {
                        h && h(e, t, p), s(e, t, p)
                    }), [p]),
                    x = a().useCallback((function() {
                        u && (clearTimeout(g.current), g.current = setTimeout((function() {
                            u && b(null, "timeout")
                        }), u))
                    }), [u, b]);
                return (0, i.useEffect)((function() {
                    return d && x(),
                        function() {
                            clearTimeout(g.current)
                        }
                }), [d, x]), (0, i.useEffect)((function() {
                    if (u && f) var e = setInterval((function() {
                        o((function(t) {
                            return t >= 100 ? (clearInterval(e), 100) : t + 1e3 / u
                        }))
                    }), 10)
                }), [u]), d ? a().createElement(O, (0, y.A)({
                    mb: "xs",
                    onClose: b,
                    progress: r,
                    showProgress: f
                }, v, {
                    style: c
                })) : null
            }
            var N = {
                    vertical: "top",
                    horizontal: "center"
                },
                j = function(e, t) {
                    var r;
                    return "object" !== typeof t[0] || i.isValidElement(t[0]) ? (r = t[1] || e).message = r.message || t[0] : r = t[0] || e, r
                };
            const z = function(e) {
                var t = e.anchorOrigin,
                    r = void 0 === t ? N : t,
                    a = e.autoHideDuration,
                    o = void 0 === a ? 4500 : a,
                    s = e.closable,
                    l = void 0 !== s && s,
                    c = e.disableAnimate,
                    u = void 0 !== c && c,
                    d = e.position,
                    y = void 0 === d ? "fixed" : d,
                    w = e.children,
                    k = e.queueSize,
                    A = void 0 === k ? 10 : k,
                    C = e.container,
                    _ = e.enablePortal,
                    T = (0, n.A)(i.useState(_), 2),
                    B = T[0],
                    E = T[1],
                    I = i.useMemo((function() {
                        return []
                    }), []),
                    U = (0, n.A)(i.useState([]), 2),
                    L = U[0],
                    D = U[1],
                    P = i.useCallback((function(t, r, n) {
                        e.onClose && e.onClose(t, r, n), D(void 0 !== n && null !== n ? function(e) {
                            return e.filter((function(e) {
                                return e.key !== n.toString()
                            }))
                        } : [])
                    }), [e]),
                    R = i.useRef(null),
                    O = i.useCallback((function() {
                        D((function(t) {
                            var r = t.length - A + 1;
                            if (r >= 1) {
                                for (var n = t.splice(0, r), i = 0; i < n.length; ++i) {
                                    var a = n[i];
                                    a && (a.onClose && a.onClose(null, "max", a.key), e.onClose && e.onClose(null, "max", a.key))
                                }
                                var o = I.splice(0, Math.min(r - 1, I.length));
                                if (o.length > 0) return (0, v.A)(t).concat((0, v.A)(o))
                            }
                            return (0, v.A)(t)
                        }))
                    }), [e, I, A]),
                    z = i.useCallback((function() {
                        I.length > 0 && D((function(e) {
                            var t = I.shift();
                            return t ? (0, v.A)(e).concat([t]) : e
                        }))
                    }), [I]),
                    F = i.useCallback((function() {
                        return O(), z()
                    }), [O, z]),
                    W = L.reduce((function(e, t) {
                        var n, i = (n = t.anchorOrigin || r, "".concat(n.vertical, "-").concat(n.horizontal)),
                            a = e[i] || [];
                        return (0, h.A)((0, f.A)({}, e), (0, p.A)({}, i, (0, v.A)(a).concat([t])))
                    }), {}),
                    H = i.useMemo((function() {
                        return {
                            enqueueNotification: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                if (void 0 !== t[0] || void 0 !== t[1]) {
                                    var i = j({
                                        anchorOrigin: r,
                                        autoHideDuration: o,
                                        closable: l,
                                        enablePortal: _
                                    }, t);
                                    i.enablePortal && E(i.enablePortal), i.container && (R.current = i.container);
                                    var a = i.key,
                                        s = i.anchorOrigin,
                                        c = void 0 === s ? r : s,
                                        u = i.autoHideDuration,
                                        d = void 0 === u ? o : u,
                                        p = i.closable,
                                        v = void 0 === p ? l : p,
                                        g = i.persist,
                                        b = i.message,
                                        x = (0, m.A)(i, ["key", "anchorOrigin", "autoHideDuration", "closable", "persist", "message"]),
                                        y = a && a.toString() || (new Date).getTime().toString() + Math.random().toString(),
                                        w = (0, h.A)((0, f.A)({
                                            key: y
                                        }, x), {
                                            persist: Boolean(g),
                                            autoHideDuration: g ? 0 : d,
                                            closable: v,
                                            open: !0,
                                            message: b,
                                            anchorOrigin: c
                                        });
                                    return I.push(w), F(), y
                                }
                            },
                            closeNotification: function(e) {
                                P(null, null, e)
                            }
                        }
                    }), [I, r, o, l, _, P, F]);
                return i.createElement(x.A.Provider, {
                    value: H
                }, w, function(e) {
                    if (Object.entries) return Object.entries(e);
                    for (var t = b(e), r = t.length, n = new Array(r); r--;) n[r] = [t[r], e[t[r]]];
                    return n
                }(W).map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0],
                        a = t[1],
                        o = a[0],
                        s = o.anchorOrigin,
                        l = o.style,
                        c = "top" === s.vertical ? -1 : 1;
                    return u ? i.createElement(S, {
                        key: r,
                        anchorOrigin: s,
                        position: y,
                        container: R.current || C,
                        enablePortal: B,
                        style: null !== l && void 0 !== l ? l : {}
                    }, a.map((function(e) {
                        return i.createElement(M, {
                            key: e.key,
                            item: e,
                            onClose: P
                        })
                    }))) : i.createElement(g.S6, {
                        key: r,
                        defaultStyles: a.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    opacity: 0,
                                    translateY: 60 * c
                                }
                            }
                        })),
                        styles: a.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    translateY: (0, g.oz)(0, g.v4.gentle),
                                    opacity: (0, g.oz)(1, g.v4.gentle)
                                }
                            }
                        })),
                        willLeave: function(e) {
                            var t = e.key;
                            return {
                                translateY: (0, g.oz)(-60 * c * (a[0].key === t ? 1 : -1)),
                                opacity: (0, g.oz)(0)
                            }
                        },
                        willEnter: function() {
                            return {
                                translateY: 60 * c,
                                opacity: 1
                            }
                        }
                    }, (function(e) {
                        return i.createElement(S, {
                            key: r,
                            anchorOrigin: s,
                            position: y,
                            container: R.current || C,
                            enablePortal: B,
                            style: (0, f.A)({
                                transform: "translate3d(".concat("center" === s.horizontal ? "-50%" : "0", ", ").concat(e[e.length - 1].style.translateY, "px, 0)")
                            }, null !== l && void 0 !== l ? l : {})
                        }, e.map((function(e) {
                            var t = e.key,
                                r = e.style.opacity,
                                n = e.data;
                            return i.createElement(M, {
                                key: t,
                                item: n,
                                onClose: P,
                                style: {
                                    opacity: r
                                }
                            })
                        })))
                    }))
                })))
            };
            var F = r("a75W"),
                W = r("tKUM"),
                H = r("HS2I"),
                V = (0, i.createContext)({});

            function K(e) {
                var t = e.children,
                    r = (0, H.useLanguage)().language,
                    p = (0, H.useTheme)().theme,
                    f = (0, n.A)((0, i.useState)(!1), 2),
                    h = f[0],
                    m = f[1],
                    v = (0, i.useMemo)((function() {
                        return "light" === p ? c.A : u.A
                    }), [p]);
                return a().createElement(o._y, {
                    value: (0, s.A)({
                        stylisPlugins: ["rtl" === (0, W.dir)(r) ? l.Ay : void 0]
                    })
                }, a().createElement(V.Provider, {
                    value: {
                        themeStatus: h,
                        setThemeStatus: m
                    }
                }, a().createElement(d.A, {
                    theme: v,
                    dir: (0, W.dir)(r)
                }, a().createElement(z, null, F.j7, t))))
            }
            var G = r("hTvQ"),
                q = r("888e"),
                Z = r("2PCm"),
                Y = r("VKAp");
            var X = function(e) {
                    e()
                },
                Q = function(e) {
                    return X = e
                },
                $ = function() {
                    function e(t) {
                        var r = this;
                        (0, q.A)(this, e), this._subscribers = [], this._isHot = !1, this._unsubscribe = null, this._runner = t, this._stubSubscriber = {
                            next: function(e) {
                                var t = r;
                                X((function() {
                                    return t._applyCallback(e)
                                }))
                            }
                        }
                    }
                    var t = e.prototype;
                    return t.subscribe = function(e) {
                        var t = this;
                        return this._subscribers.push(e), this._isHot || (this._isHot = !0, this._unsubscribe = this._runner(this._stubSubscriber)),
                            function() {
                                var r = t._subscribers.indexOf(e);
                                r >= 0 && t._subscribers.splice(r, 1), t._subscribers.length <= 0 && (t._isHot = !1, t._unsubscribe && (t._unsubscribe(), t._unsubscribe = null))
                            }
                    }, t._applyCallback = function(e) {
                        for (var t = this._subscribers, r = 0; r < t.length; r++) {
                            (0, t[r])(e)
                        }
                    }, e
                }();

            function J(e) {
                return new $(e)
            }

            function ee() {
                var e = Object.create(null);
                return {
                    on: function(t, r) {
                        (e[t] || (e[t] = [])).push(r)
                    },
                    once: function(e, t) {
                        this.on(e, t)
                    },
                    off: function(t, r) {
                        if (e[t])
                            if (r) {
                                var n = e[t].indexOf(r);
                                n >= 0 && e[t].splice(n, 1)
                            } else e[t].length = 0
                    },
                    emit: function(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        (e[t] || []).slice().forEach((function(e) {
                            e.apply(void 0, (0, v.A)(n))
                        }))
                    }
                }
            }
            var te = function() {
                    function e(t) {
                        var r = this;
                        (0, q.A)(this, e), this._eventEmitter = ee(), this._options = t, this._optionsStream = J((function(e) {
                            var t = r;
                            return r._eventEmitter.on("CHANGE_FIELD", (function(r) {
                                    var n = r.fieldName,
                                        i = r.value;
                                    t._options = (0, h.A)((0, f.A)({}, t._options), (0, p.A)({}, n, i)), e.next((0, h.A)((0, f.A)({}, t._options), (0, p.A)({}, n, i)))
                                })),
                                function() {
                                    t._eventEmitter.off("CHANGE_FIELD")
                                }
                        }))
                    }
                    var t = e.prototype;
                    return t.getOptions = function() {
                        return this._options
                    }, t.updateOptionField = function(e) {
                        this._eventEmitter.emit("CHANGE_FIELD", e)
                    }, t.withOptionsStream = function(e) {
                        var t = this;
                        return J((function(r) {
                            var n, i = e(t._options);
                            n = i.subscribe(r.next);
                            var a = t._optionsStream.subscribe((function(t) {
                                n && n();
                                var i = e(t);
                                n = i.subscribe(r.next)
                            }));
                            return function() {
                                a(), n && n()
                            }
                        }))
                    }, e
                }(),
                re = r("sViW"),
                ne = r("Pz56"),
                ie = r.n(ne),
                ae = r("VA12"),
                oe = function() {
                    function e() {
                        (0, q.A)(this, e), this._cache = Object.create(null)
                    }
                    var t = e.prototype;
                    return t.get = function(e) {
                        return Object.prototype.hasOwnProperty.call(this._cache, e) ? this._cache[e] : null
                    }, t.set = function(e, t) {
                        this._cache[e] = t
                    }, t.delete = function(e) {
                        delete this._cache[e]
                    }, e
                }(),
                se = r("2URn"),
                le = r("Bcqe"),
                ce = r.n(le),
                ue = r("nG1z"),
                de = 0,
                pe = 1,
                fe = 2,
                he = 3,
                me = 1,
                ve = function() {
                    function e(t) {
                        var r = this;
                        (0, q.A)(this, e), this._debugId = me++, this._wsInstance = null, this._reconnectAttempts = 0, this._maxReconnectTime = 300, this._socketEvents = ee(), this._readyState = de, this._timeout = 5e3, this._netWorkStatus = !0, this._url = t, window.addEventListener("offline", (function() {
                            r._netWorkStatus = !1
                        })), window.addEventListener("online", (function() {
                            r._netWorkStatus || r.open(), r._netWorkStatus = !0
                        }))
                    }
                    var t = e.prototype;
                    return t.open = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this;
                        if (this._readyState !== pe) {
                            this._readyState = de, e ? (this._reconnectAttempts += 1, this._socketEvents.emit("reConnecting", this._reconnectAttempts), console.log("WebSocket Reconnecting Attempts:", this._url, this._reconnectAttempts)) : this._reconnectAttempts = 0;
                            var r = this._wsInstance = new WebSocket(this._url),
                                n = !1,
                                i = setTimeout((function() {
                                    console.debug("WebSocket connection-timeout", t._url), n = !0, r.close(), n = !1
                                }), this._timeout),
                                a = function() {
                                    return clearTimeout(i)
                                };
                            r.onerror = function(e) {
                                console.error("socket error", t._url, e)
                            }, r.onclose = function(e) {
                                a(), t._wsInstance = null, t._readyState = de, t._reconnectAttempts <= 0 && !n && t._socketEvents.emit("close", e), t.reconnect()
                            }, r.onopen = function(e) {
                                a(), t._readyState = pe, t._reconnectAttempts > 0 && t._socketEvents.emit("reConnected", t._reconnectAttempts), t._reconnectAttempts = 0, t._socketEvents.emit("open", e)
                            }, r.onmessage = function(e) {
                                t._socketEvents.emit("message", e)
                            }
                        }
                    }, t.onOpen = function(e) {
                        var t = this;
                        return this._socketEvents.on("open", e),
                            function() {
                                t._socketEvents.off("open", e)
                            }
                    }, t.onReConnected = function(e) {
                        var t = this;
                        return this._socketEvents.on("reConnected", e),
                            function() {
                                t._socketEvents.off("reConnected", e)
                            }
                    }, t.onReConnecting = function(e) {
                        var t = this;
                        return this._socketEvents.on("reConnecting", e),
                            function() {
                                t._socketEvents.off("reConnecting", e)
                            }
                    }, t.onMessage = function(e) {
                        var t = this;
                        return this._socketEvents.on("message", e),
                            function() {
                                t._socketEvents.off("message", e)
                            }
                    }, t.onClose = function(e) {
                        var t = this;
                        return this._socketEvents.on("close", e),
                            function() {
                                t._socketEvents.off("close", e)
                            }
                    }, t.send = function(e) {
                        this._wsInstance && this.getStatus() === pe && this._wsInstance.send(e)
                    }, t.close = function() {
                        var e = this,
                            t = this._wsInstance;
                        t && (this._wsInstance = null, this._readyState = he, t.onopen = null, t.onerror = null, t.onmessage = null, t.onclose = function(t) {
                            e._socketEvents.emit("close", t)
                        }, t.close())
                    }, t.isValidStatus = function(e) {
                        return e === de || e === pe || e === fe || e === he
                    }, t.getStatus = function() {
                        var e;
                        return this.isValidStatus(null === (e = this._wsInstance) || void 0 === e ? void 0 : e.readyState) ? this._wsInstance.readyState : this._readyState
                    }, t.refresh = function() {
                        this.close(), this.reconnect()
                    }, t.reconnect = function() {
                        var e = this;
                        this._reconnectHandle || (this._reconnectHandle = setTimeout((function() {
                            e._reconnectHandle = null, e.open(!0)
                        }), this.calcReconnectTime()))
                    }, t.calcReconnectTime = function() {
                        return 1e3 * Math.min(this._maxReconnectTime, Math.pow(2, this._reconnectAttempts)) + Math.floor(1e3 * Math.random())
                    }, (0, ue.A)(e, [{
                        key: "readyState",
                        get: function() {
                            return this._readyState
                        }
                    }]), e
                }();

            function ge(e) {
                return new ve(e)
            }

            function be(e) {
                for (var t = Object.create(null), r = [], n = 0; n < e.length; n++) {
                    var i = e[n],
                        a = void 0;
                    switch (i.stream) {
                        case "aggSnap":
                            a = "".concat(i.symbol.toLowerCase(), "@aggSnap");
                            break;
                        case "tradeAggregate":
                        case "aggTrade":
                            a = "".concat(i.symbol.toLowerCase(), "@aggTrade");
                            break;
                        case "trade":
                            a = "".concat(i.symbol.toLowerCase(), "@trade");
                            break;
                        case "kline":
                            a = i.upperSymbolWithPrefix ? "".concat(i.symbol, "@kline_").concat(i.interval).concat(i.timeZone ? "@".concat(i.timeZone) : "") : "".concat(i.symbol.toLowerCase(), "@kline_").concat(i.interval).concat(i.timeZone ? "@".concat(i.timeZone) : "");
                            break;
                        case "tickerMiniOne":
                            a = "".concat(i.symbol.toLowerCase(), "@miniTicker");
                            break;
                        case "tickerMiniAll":
                        case "24hrMiniTicker":
                            a = "!miniTicker@arr", i.speed && (a = "".concat(a, "@").concat(i.speed, "ms"));
                            break;
                        case "tickerOne":
                            a = "".concat(i.symbol.toLowerCase(), "@ticker");
                            break;
                        case "tickerAll":
                            a = "!ticker@arr";
                            break;
                        case "tickerAllWindowSize":
                            a = "!ticker", i.windowSize && (a += "_".concat(i.windowSize)), a += "@arr", i.speed && (a += "@".concat(i.speed, "ms")), console.log("stream is ", a);
                            break;
                        case "bookTicker":
                            a = "".concat(i.symbol.toLowerCase(), "@bookTicker");
                            break;
                        case "bookTickerAll":
                            a = "!bookTicker";
                            break;
                        case "depth":
                        case "depthUpdate":
                            a = "".concat(i.symbol.toLowerCase(), "@depth"), i.level && (a = "".concat(a).concat(i.level)), "number" === typeof i.speed ? a = "".concat(a, "@").concat(i.speed, "ms") : i.fast && (a = "".concat(a, "@100ms"));
                            break;
                        case "ORDER_TRADE_UPDATE":
                        case "ALGO_UPDATE":
                        case "ACCOUNT_UPDATE":
                        case "ACCOUNT_CONFIG_UPDATE":
                        case "STRATEGY_UPDATE":
                        case "GRID_UPDATE":
                        case "userData":
                            a = i.key;
                            break;
                        case "markPrice":
                            a = "".concat(i.symbol.toLowerCase(), "@markPrice"), i.speed && (a = "".concat(a, "@").concat(i.speed));
                            break;
                        case "portfolioAssetPrice":
                            a = "!portfolioAssetPrice@arr";
                            break;
                        case "assetIndexAll":
                        case "assetIndexUpdate":
                            a = "!assetIndex@arr";
                            break;
                        case "markPriceAll":
                            a = "!markPrice@arr", i.speed && (a = "".concat(a, "@").concat(i.speed));
                            break;
                        case "markPriceUpdate":
                            a = i.isArr ? "!markPrice@arr" : "".concat(i.symbol.toLowerCase(), "@markPrice"), i.speed && (a = "".concat(a, "@").concat(i.speed));
                            break;
                        case "markPriceMini":
                            a = "!markPriceMini@arr", i.speed && (a = "".concat(a, "@").concat(i.speed));
                            break;
                        case "l_kline":
                            a = "".concat(i.symbol.toLowerCase(), "@nav_kline_").concat(i.interval);
                            break;
                        case "netValue":
                        case "nav":
                            a = "".concat(i.symbol.toUpperCase(), "@tokenNav");
                            break;
                        case "netValueAll":
                            a = "nav@tokenNavArr";
                            break;
                        case "continuous_kline":
                            a = "".concat(i.pair.toLowerCase(), "_").concat(i.contractType.toLowerCase(), "@continuousKline_").concat(i.interval);
                            break;
                        case "indexPrice_kline":
                        case "indexPriceKline":
                            a = "".concat(i.pair.toLowerCase(), "@indexPriceKline_").concat(i.interval);
                            break;
                        case "markPrice_kline":
                        case "markPriceKline":
                            a = "".concat(i.symbol.toLowerCase(), "@markPriceKline_").concat(i.interval);
                            break;
                        case "indexPriceUpdate":
                            a = "".concat(i.pair.toLowerCase(), "@indexPrice");
                            break;
                        case "priceIndex":
                            var o = null === i || void 0 === i ? void 0 : i.marginSymbol;
                            a = "string" === typeof o ? "".concat(o.toLocaleLowerCase(), "@priceIndex") : "!priceIndex@arr";
                            break;
                        case "convertTicker":
                            var s = null === i || void 0 === i ? void 0 : i.marginSymbol;
                            a = "string" === typeof s ? "".concat(s.toLocaleLowerCase(), "@convertTicker") : "!convertTicker@arr";
                            break;
                        case "contractInfo":
                            a = "!contractInfo";
                            break;
                        case "compositeIndex":
                            a = "".concat(i.symbol.toLowerCase(), "@compositeIndex");
                            break;
                        case "stockTokenDepth":
                            a = "".concat(i.symbol, "@stockTokenDepth");
                            break;
                        case "stockTokenMiniTicker":
                            a = "!stockTokenMiniTicker@arr";
                            break;
                        case "stockTokenKline":
                            a = "".concat(i.symbol, "@stockTokenKline_").concat(i.interval);
                            break;
                        case "stockTokenMiniTickerOne":
                            a = "".concat(i.symbol.toUpperCase(), "@stockTokenMiniTicker");
                            break;
                        case "marketStatusUpdate":
                            a = "marketStatusUpdate";
                            break;
                        case "eOptions":
                            a = i.streamName;
                            break;
                        case "topMovers":
                            a = i.stream;
                            break;
                        default:
                            i
                    }
                    a && (t[a] = i.stream, r.push(a))
                }
                return {
                    typeMaps: t,
                    streams: r
                }
            }
            var xe = {},
                ye = 1,
                we = {},
                ke = !0;
            if (window.Worker) try {
                var Ae = new Blob(["      onmessage = function (event) {        setTimeout(function () {          postMessage(event.data)        }, 150)      }    "]),
                    Se = window.URL.createObjectURL(Ae);
                (xe = new Worker(Se)).onmessage = function(e) {
                    we[e.data]()
                }
            } catch (Pr) {
                ke = !1
            }
            var Ce, _e = (Ce = function(e) {
                    window.Worker && ke ? (ye++, we[ye] = e, xe.postMessage("".concat(ye))) : setTimeout(e, 150)
                }, function(e, t) {
                    var r, n = t.init,
                        i = t.collect,
                        a = !1,
                        o = function() {
                            r = n()
                        },
                        s = function() {
                            a = !1;
                            var t = r;
                            o(), e(t)
                        };
                    return o(),
                        function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [r].concat((0, v.A)(t))), a || (a = !0, Ce(s))
                        }
                }),
                Te = r("q2ou"),
                Be = "undefined" !== typeof TextDecoder ? function(e) {
                    return (new TextDecoder).decode(e)
                } : function(e) {
                    return decodeURIComponent(String.fromCharCode.apply(null, e))
                },
                Ee = {
                    headerCheck: function(e) {
                        return 31 === e[0] && 139 === e[1] && 8 === e[2]
                    },
                    parser: function(e) {
                        return JSON.parse(Be(Te.ungzip(e, {})))
                    }
                },
                Ie = new oe,
                Ue = 1;

            function Le() {
                return Ue++
            }

            function De(e) {
                return Pe.apply(this, arguments)
            }

            function Pe() {
                return Pe = (0, re.A)(ie().mark((function e(t) {
                    return ie().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" !== typeof t.arrayBuffer) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, t.arrayBuffer();
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                                return e.abrupt("return", new Promise((function(e) {
                                    var r = new FileReader;
                                    r.readAsArrayBuffer(t), r.onload = function() {
                                        e(r.result)
                                    }
                                })));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), Pe.apply(this, arguments)
            }
            var Re = {},
                Oe = function() {},
                Me = ce()((function() {
                    Object.keys(Re).forEach((function(e) {
                        Re[e].subscribeStreamSet.size && (Re[e].subscribe || Oe)(Array.from(Re[e].subscribeStreamSet || new Set)), Re[e].unsubscribeStreamSet.size && (Re[e].unsubscribe || Oe)(Array.from(Re[e].unsubscribeStreamSet || new Set)), Re[e].subscribeStreamSet = new Set, Re[e].unsubscribeStreamSet = new Set
                    }))
                }), 500, {
                    leading: !1,
                    trailing: !0
                }),
                Ne = function(e) {
                    var t = e.baseUrl,
                        r = void 0 === t ? "" : t,
                        n = e.subscribeSet,
                        i = void 0 === n ? new Set : n,
                        a = e.unsubscribeSet,
                        o = void 0 === a ? new Set : a,
                        s = e.subscribe,
                        l = e.unsubscribe;
                    Re[r] || (Re[r] = {
                        subscribe: Oe,
                        unsubscribe: Oe,
                        subscribeStreamSet: new Set,
                        unsubscribeStreamSet: new Set
                    });
                    var c = Re[r].subscribeStreamSet,
                        u = Re[r].unsubscribeStreamSet;
                    Re[r] = {
                        subscribe: s || Re[r].subscribe,
                        unsubscribe: l || Re[r].unsubscribe,
                        subscribeStreamSet: new Set((0, v.A)(Array.from(c).filter((function(e) {
                            return !o.has(e)
                        }))).concat((0, v.A)(Array.from(i)))),
                        unsubscribeStreamSet: new Set((0, v.A)(Array.from(u).filter((function(e) {
                            return !i.has(e)
                        }))).concat((0, v.A)(Array.from(o).filter((function(e) {
                            return !c.has(e)
                        })))))
                    }, Me()
                };

            function je(e) {
                return ze.apply(this, arguments)
            }

            function ze() {
                return (ze = (0, re.A)(ie().mark((function e(t) {
                    var r;
                    return ie().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, se.A)(t, Blob) && "Blob" !== t.constructor.name) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 3, De(t);
                            case 3:
                                return r = e.sent, r = new Uint8Array(r), e.abrupt("return", Ee.parser(r));
                            case 6:
                                return e.abrupt("return", JSON.parse(t));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Fe = "wss://fe-wsreplayer.devfdg.net/ws";

            function We(e) {
                var t, r = (0, n.A)(null === (t = e.split("?")[1]) || void 0 === t ? void 0 : t.split("||"), 2),
                    i = r[0],
                    a = r[1];
                return {
                    id: i,
                    frequency: Number(a)
                }
            }

            function He(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = e.toLowerCase(),
                    n = e.includes(Fe),
                    i = Ie.get(e);
                if (!i) {
                    var a = ge(n ? Fe : "".concat(e, "/stream")),
                        o = {},
                        s = function() {
                            var e = Le();
                            a.send(JSON.stringify({
                                method: "GET_PROPERTY",
                                params: ["combined"],
                                id: e
                            }));
                            var t = setTimeout((function() {
                                u(), a.refresh()
                            }), 5e3);
                            return {
                                id: e,
                                resolve: function() {
                                    return clearTimeout(t)
                                }
                            }
                        },
                        l = null,
                        c = function() {
                            l = setInterval((function() {
                                var e = s(),
                                    t = e.id,
                                    r = e.resolve;
                                o[t] = r
                            }), 5e3)
                        },
                        u = function() {
                            clearInterval(l), Object.keys(o).forEach((function(e) {
                                o[e](e), delete o[e]
                            }))
                        };
                    a.onOpen((function() {
                        !0 === window.__WS_PING__ && c(), n && a.send(JSON.stringify(We(e)));
                        var t = Object.keys(i.streamStatus);
                        t.length && Ne({
                            baseUrl: e,
                            subscribeSet: new Set(t),
                            subscribe: function(e) {
                                a.send(JSON.stringify({
                                    method: "SUBSCRIBE",
                                    params: e,
                                    id: Le()
                                }))
                            }
                        })
                    }));
                    var d = J((function(e) {
                        var t = _e((function(t) {
                                return e.next(t)
                            }), {
                                init: function() {
                                    return []
                                },
                                collect: function(e, t) {
                                    e.push(t)
                                }
                            }),
                            n = a.onMessage(function() {
                                var e = (0, re.A)(ie().mark((function e(r) {
                                    var n, i;
                                    return ie().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, je(r.data);
                                            case 2:
                                                "result" in (n = e.sent) && "id" in n ? (i = o[n.id]) && (i(n.id), delete o[n.id]) : "error" in n || ("PING" === (null === n || void 0 === n ? void 0 : n.method) ? a.send(JSON.stringify({
                                                    method: "PONG",
                                                    E: n.E
                                                })) : n.stream || n.data ? t(n) : t({
                                                    stream: "",
                                                    data: n
                                                }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        return a.open(),
                            function() {
                                n(), u(), a.close(), Ie.delete(r)
                            }
                    }));
                    i = {
                        client: a,
                        wsStream: d,
                        streamStatus: {}
                    }, Ie.set(r, i)
                }
                for (var p = i.streamStatus, f = i.client, h = [], m = 0; m < t.length; m++) {
                    var v = t[m];
                    p[v] ? p[v] += 1 : (h.push(v), p[v] = 1)
                }
                return f.getStatus() === pe && h.length && Ne({
                    baseUrl: e,
                    subscribeSet: new Set(h),
                    subscribe: function(e) {
                        f.send(JSON.stringify({
                            method: "SUBSCRIBE",
                            params: e,
                            id: Le()
                        }))
                    }
                }), i
            }

            function Ve(e) {
                var t = He(e).client;
                return J((function(e) {
                    var r = t.onReConnected((function(t) {
                        e.next({
                            event: "reConnected",
                            data: t
                        })
                    }));
                    return function() {
                        r()
                    }
                }))
            }

            function Ke(e) {
                var t = He(e).client;
                return J((function(e) {
                    var r = t.onOpen((function() {
                            t.readyState === pe && e.next({
                                status: "connected"
                            })
                        })),
                        n = t.onClose((function() {
                            t.readyState === he && e.next({
                                status: "disconnected"
                            })
                        })),
                        i = t.onReConnecting((function(r) {
                            t.readyState === de && e.next({
                                status: "connecting",
                                times: r
                            })
                        }));
                    return e.next({
                            status: t.getStatus() === pe ? "connected" : "disconnected"
                        }),
                        function() {
                            r(), n(), i()
                        }
                }))
            }

            function Ge(e, t, r) {
                if (e.stream) return e.stream in t;
                var n = function(e) {
                    var t = Array.isArray(e),
                        r = (e = t ? e[0] : e) || {},
                        n = r.s,
                        i = r.k,
                        a = r.e,
                        o = r.ct,
                        s = r.ps,
                        l = r.i;
                    return a ? {
                        symbol: n || (null === i || void 0 === i ? void 0 : i.s),
                        stream: a,
                        interval: null === i || void 0 === i ? void 0 : i.i,
                        pair: s || l,
                        contractType: o,
                        isArr: t
                    } : void 0
                }(e.data);
                return !!n && be(r.map((function(e) {
                    return Object.assign({}, e, n)
                }))).streams.some((function(e) {
                    return e && e in t
                }))
            }

            function qe(e, t, r) {
                var n = r.transform,
                    i = r.filter,
                    a = be(t),
                    o = a.typeMaps,
                    s = a.streams;
                return J((function(r) {
                    var a = function(e) {
                            return r.next(e)
                        },
                        l = He(e, s).wsStream.subscribe((function(e) {
                            var r = e.filter((function(e) {
                                return Ge(e, o, t) && (!i || i(e))
                            }));
                            if (r.length) {
                                var s = r[0];
                                s.coalscedMsg = r;
                                var l = n(s);
                                "function" === typeof l ? l(a) : a(l)
                            }
                        }));
                    return function() {
                        ! function(e, t) {
                            var r = e.toLowerCase(),
                                n = Ie.get(r);
                            if (n) {
                                var i = n.client,
                                    a = n.streamStatus,
                                    o = [];
                                t.forEach((function(e) {
                                    var t = a[e];
                                    "undefined" !== typeof t && (a[e] = Math.max(0, t - 1), 0 === a[e] && (o.push(e), delete a[e]))
                                })), o.length && Ne({
                                    baseUrl: e,
                                    unsubscribeSet: new Set(o),
                                    unsubscribe: function(e) {
                                        i.send(JSON.stringify({
                                            method: "UNSUBSCRIBE",
                                            params: e,
                                            id: Le()
                                        }))
                                    }
                                })
                            }
                        }(e, s), l()
                    }
                }))
            }

            function Ze(e, t) {
                return qe(t.wssBaseUrl, [{
                    stream: "depth",
                    symbol: e,
                    speed: t.speed
                }], {
                    transform: function(e) {
                        var t = function(e) {
                            for (var t = [], r = 0; r < e.length; r++) {
                                var n = e[r].data;
                                t.push({
                                    asks: n.a || [],
                                    bids: n.b || [],
                                    symbol: n.s,
                                    lastUpdateId: n.u,
                                    firstUpdateId: n.U,
                                    preLastUpdateId: n.pu
                                })
                            }
                            return t
                        }(e.coalscedMsg);
                        return function(e) {
                            return t.forEach((function(t) {
                                return e(t)
                            }))
                        }
                    }
                })
            }
            var Ye = function(e, t) {
                return e - t
            };

            function Xe(e, t) {
                return Number(Math.abs(e - 0).toFixed(t)) < Math.pow(10, -1 * (t + 1))
            }

            function Qe(e, t) {
                return "".concat(e, "@").concat(t)
            }

            function $e(e, t) {
                for (var r, n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ye, a = e.length - 1, o = 0; a >= o;)
                    if ((n = i(e[r = (a + o) / 2 >>> 0], t)) < 0) o = r + 1;
                    else {
                        if (!(n > 0)) return r;
                        a = r - 1
                    }
                return -1
            }

            function Je(e, t) {
                for (var r, n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ye, a = e.length - 1, o = 0, s = -1; a >= o;)
                    if ((n = i(e[r = (a + o) / 2 >>> 0], t)) < 0) o = r + 1;
                    else {
                        if (!(n > 0)) {
                            s = r;
                            break
                        }
                        a = r - 1
                    }
                for (-1 === s && (s = a), s++, a = e.length - 1; s < a && 0 === i(t, e[s]);) s++;
                for (r = e.length; r > s;) e[r] = e[--r];
                return e[s] = t, s
            }

            function et(e) {
                var t = String(e),
                    r = t.indexOf(".");
                return r < 0 ? 0 : t.length - r - 1
            }

            function tt(e, t, r) {
                var n = e % t;
                switch (r) {
                    case "floor":
                        return e - n;
                    case "ceil":
                        return 0 === n ? e : e - n + t;
                    default:
                        return n < t / 2 ? e - n : e + t - n
                }
            }

            function rt(e, t, r) {
                var n = Number(t);
                if (n < 1) {
                    var i = et(t),
                        a = et(e);
                    return 0 === a ? e + "." + "0".repeat(i) : a <= i ? e + "0".repeat(i - a) : (tt(function(e, t) {
                        var r = t,
                            n = String(e).split("");
                        if (n.indexOf(".") < 0) return +e * Math.pow(10, t);
                        for (var i = 0; i < n.length && r > 0; i++) {
                            var a = n[i];
                            if ("." === a) {
                                var o = n[i + 1] || "0";
                                n[i] = o, n[i + 1] = a, r--
                            } else n[i] = a
                        }
                        return Number(n.join(""))
                    }(e, i), 1, r) * n).toFixed(i)
                }
                return tt(Number(e), n, r).toFixed(0)
            }

            function nt(e, t, r, n, i) {
                var a = e.entityById;
                t.forEach((function(t) {
                    var o = t[0],
                        s = Number(t[1]),
                        l = a[o];
                    if (l) {
                        0 === s && delete a[o];
                        var c = s - l.amount;
                        Xe(c, i) || (l.amount = s, function(e, t) {
                            for (var r = t.price, n = t.amountDelta, i = t.type, a = t.levels, o = t.quantityPrecision, s = e.levelById, l = {
                                    children: e.tree
                                }, c = -1; ++c < a.length;) {
                                var u = l.children;
                                if (!u) break;
                                var d = a[c],
                                    p = rt(r, d, i),
                                    f = Qe(d, p),
                                    h = s[f];
                                if (h) {
                                    if (l = h.treeNode, h.amount += n, Xe(h.amount, o)) {
                                        var m = $e(u, Number(p), (function(e, t) {
                                            return e.price - t
                                        }));
                                        if (m >= 0) {
                                            u.splice(m, 1), delete s[f];
                                            for (var v = c + 1; v < a.length; v++) {
                                                var g = a[v];
                                                delete s[Qe(g, rt(r, g, i))]
                                            }
                                            delete e.entityById[r]
                                        }
                                        return
                                    }
                                    h.total += +r * n
                                } else delete e.entityById[r]
                            }
                        }(e, {
                            price: o,
                            amountDelta: c,
                            levels: r,
                            type: n,
                            quantityPrecision: i
                        }))
                    } else 0 !== s && function(e, t) {
                        var r = t.price,
                            n = t.amount,
                            i = t.type,
                            a = t.levels,
                            o = e.entityById,
                            s = e.levelById,
                            l = e.tree;
                        o[r] = {
                            amount: n
                        };
                        for (var c = {
                                children: l
                            }, u = -1; ++u < a.length;) {
                            var d = c.children = c.children || [],
                                p = a[u],
                                f = rt(r, p, i),
                                h = Qe(p, f),
                                m = s[h];
                            m ? (c = m.treeNode, m.amount += n, m.total += +r * n) : (m = {
                                amount: n,
                                total: +r * n,
                                treeNode: c = {
                                    levelID: h,
                                    level: p,
                                    price: f,
                                    numberPrice: Number(f)
                                }
                            }, s[h] = m, Je(d, c, (function(e, t) {
                                return e.numberPrice - t.numberPrice
                            })))
                        }
                    }(e, {
                        price: o,
                        amount: s,
                        levels: r,
                        type: n
                    })
                }))
            }

            function it(e, t) {
                (t.asks.length || t.bids.length) && (t.asks.length && nt(e.ask, t.asks, e.levels, "ceil", e.quantityPrecision), t.bids.length && nt(e.bid, t.bids, e.levels, "floor", e.quantityPrecision))
            }

            function at(e, t) {
                return {
                    levels: e.sort((function(e, t) {
                        return Number(t) - Number(e)
                    })),
                    ask: {
                        tree: [],
                        entityById: Object.create({}),
                        levelById: Object.create({})
                    },
                    bid: {
                        tree: [],
                        entityById: Object.create({}),
                        levelById: Object.create({})
                    },
                    quantityPrecision: t
                }
            }

            function ot(e, t) {
                var r = (0, f.A)({}, e.entityById);
                return t.forEach((function(e) {
                    var t = (0, n.A)(e, 2),
                        i = t[0],
                        a = t[1],
                        o = Number(a);
                    0 === o ? delete r[i] : r[i] = {
                        amount: o
                    }
                })), r
            }

            function st(e) {
                var t, r, i = e.asks,
                    a = e.bids;
                return (t = Math).min.apply(t, (0, v.A)(i.map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0];
                    t[1];
                    return Number(r)
                })))) < (r = Math).max.apply(r, (0, v.A)(a.map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0];
                    t[1];
                    return Number(r)
                }))))
            }

            function lt(e, t) {
                console.log(e), window.SensorsSdk && window.SensorsSdk.track && window.SensorsSdk.track(e, t)
            }
            var ct = new oe,
                ut = -1 / 0,
                dt = at([], 1),
                pt = {
                    getState: function() {
                        return dt
                    },
                    subscribe: function() {
                        return function() {
                            return null
                        }
                    },
                    getSnapshot: function() {
                        return {
                            init: !0
                        }
                    }
                };

            function ft(e, t) {
                var r = t.apiBaseUrl,
                    n = t.wssBaseUrl,
                    i = t.levels,
                    a = t.speed,
                    o = t.quantityPrecision;
                if (i.length <= 0 || !e) return pt;
                var s = [e, r, n, i].map((function(e) {
                        return JSON.stringify(e)
                    })).join(""),
                    l = ct.get(s);
                if (l) return l;
                var c = at(i, o),
                    u = {
                        lastUpdateId: ut,
                        firstEvent: !0
                    },
                    d = J((function(t) {
                        var l = function() {
                                if (!p && 0 !== m.length) {
                                    var e = function(e, t) {
                                            var r = {
                                                    orderBookDelayed: !1,
                                                    buffer: []
                                                },
                                                n = t[0];
                                            if ("undefined" !== typeof n.preLastUpdateId) {
                                                if (e.firstEvent) {
                                                    var i = t.findIndex((function(t) {
                                                        return t.firstUpdateId <= e.lastUpdateId && t.lastUpdateId >= e.lastUpdateId
                                                    }));
                                                    return -1 !== i ? {
                                                        orderBookDelayed: !1,
                                                        buffer: t.slice(i)
                                                    } : n.firstUpdateId > e.lastUpdateId ? {
                                                        orderBookDelayed: !0,
                                                        buffer: t
                                                    } : r
                                                }
                                                var a = t.findIndex((function(t) {
                                                    return t.preLastUpdateId === e.lastUpdateId
                                                }));
                                                return -1 !== a ? {
                                                    orderBookDelayed: !1,
                                                    buffer: t.slice(a)
                                                } : n.preLastUpdateId && n.preLastUpdateId > e.lastUpdateId ? {
                                                    orderBookDelayed: !0,
                                                    buffer: t
                                                } : r
                                            }
                                            if (e.firstEvent) {
                                                var o = t.findIndex((function(t) {
                                                    return t.firstUpdateId <= e.lastUpdateId + 1 && t.lastUpdateId >= e.lastUpdateId + 1
                                                }));
                                                return -1 !== o ? {
                                                    orderBookDelayed: !1,
                                                    buffer: t.slice(o)
                                                } : n.firstUpdateId > e.lastUpdateId + 1 ? {
                                                    orderBookDelayed: !0,
                                                    buffer: t
                                                } : r
                                            }
                                            var s = t.findIndex((function(t) {
                                                return t.firstUpdateId === e.lastUpdateId + 1
                                            }));
                                            return -1 !== s ? {
                                                orderBookDelayed: !1,
                                                buffer: t.slice(s)
                                            } : n.firstUpdateId > e.lastUpdateId + 1 ? {
                                                orderBookDelayed: !0,
                                                buffer: t
                                            } : r
                                        }(u, m),
                                        r = e.orderBookDelayed,
                                        n = e.buffer;
                                    if (r) return lt("orderbook_shown_data_delayed", {
                                        cacheId: s,
                                        preLastUpdateId: u.lastUpdateId,
                                        wsPreLastUpdateId: m[0].preLastUpdateId
                                    }), b();
                                    if (0 === n.length) return lt("orderbook_ws_buffer_delayed", {
                                        cacheId: s,
                                        preLastUpdateId: u.lastUpdateId,
                                        wsPreLastUpdateId: m[m.length - 1].lastUpdateId
                                    }), void(m = []);
                                    if (function(e) {
                                            var t, r, n = e.ask.entityById,
                                                i = e.bid.entityById;
                                            return (t = Math).min.apply(t, (0, v.A)(Object.keys(n).map(Number))) < (r = Math).max.apply(r, (0, v.A)(Object.keys(i).map(Number)))
                                        }(n.reduce((function(e, t) {
                                            return function(e, t) {
                                                if (!t.asks.length && !t.bids.length) return e;
                                                var r = e.ask.entityById,
                                                    n = e.bid.entityById;
                                                return t.asks.length && (r = ot(e.ask, t.asks)), t.bids.length && (n = ot(e.bid, t.bids)), (0, h.A)((0, f.A)({}, e), {
                                                    ask: (0, h.A)((0, f.A)({}, e.ask), {
                                                        entityById: r
                                                    }),
                                                    bid: (0, h.A)((0, f.A)({}, e.bid), {
                                                        entityById: n
                                                    })
                                                })
                                            }(e, t)
                                        }), c))) return lt("orderbook_crossed", {
                                        cacheId: s
                                    }), b();
                                    u = {
                                        lastUpdateId: n[n.length - 1].lastUpdateId,
                                        firstEvent: !1
                                    }, n.forEach((function(e) {
                                        return it(c, e)
                                    })), t.next(c), m = []
                                }
                            },
                            d = !0,
                            p = !1,
                            m = [],
                            g = function(e, t) {
                                var r, n;
                                return function() {
                                    n ? (clearTimeout(r), r = setTimeout((function() {
                                        e(), n = Date.now()
                                    }), t - (Date.now() - n))) : (e(), n = Date.now())
                                }
                            }((0, re.A)(ie().mark((function n() {
                                var a, l;
                                return ie().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, d) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 3:
                                            return n.next = 5, (0, ae.get)("".concat(r, "?symbol=").concat(e.toUpperCase(), "&limit=").concat(1e3));
                                        case 5:
                                            if ("number" === typeof(a = n.sent).lastUpdateId) {
                                                n.next = 8;
                                                break
                                            }
                                            throw new Error("invalid response, lastUpdateId not a number");
                                        case 8:
                                            if (!(a.lastUpdateId <= u.lastUpdateId)) {
                                                n.next = 12;
                                                break
                                            }
                                            return lt("orderbook_api_delayed", {
                                                cacheId: s
                                            }), n.abrupt("return", b());
                                        case 12:
                                            if (!st(a)) {
                                                n.next = 16;
                                                break
                                            }
                                            return lt("orderbook_api_crossed", {
                                                cacheId: s
                                            }), n.abrupt("return", b());
                                        case 16:
                                            p = !1, lt(u.lastUpdateId === ut ? "orderbook_api_init" : "orderbook_api_sync", {
                                                cacheId: s
                                            }), u = {
                                                lastUpdateId: a.lastUpdateId,
                                                firstEvent: !0
                                            }, it(c = at(i, o), a), t.next(c), n.next = 32;
                                            break;
                                        case 24:
                                            if (n.prev = 24, n.t0 = n.catch(0), l = n.t0.code || n.t0.status, lt("orderbook_api_error", {
                                                    cacheId: s,
                                                    code: l,
                                                    msg: n.t0.message
                                                }), 419 !== l && 418 !== l && 429 !== l) {
                                                n.next = 31;
                                                break
                                            }
                                            return n.next = 31, new Promise((function(e) {
                                                return setTimeout(e, 6e4)
                                            }));
                                        case 31:
                                            p = !1;
                                        case 32:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 24]
                                ])
                            }))), 2e3),
                            b = function() {
                                p = !0, g()
                            };
                        b();
                        var x = Ze(e, {
                            wssBaseUrl: n,
                            speed: a
                        }).subscribe((function(e) {
                            if (0 === m.length) return m = [e], l();
                            var t = m[m.length - 1],
                                r = "undefined" !== typeof e.preLastUpdateId ? e.preLastUpdateId < t.lastUpdateId : e.firstUpdateId < t.lastUpdateId + 1,
                                n = "undefined" !== typeof e.preLastUpdateId ? e.preLastUpdateId === t.lastUpdateId : e.firstUpdateId === t.lastUpdateId + 1;
                            return r || (n ? (m.push(e), m = m.slice(-1e4)) : m = [e]), l()
                        }));
                        return function() {
                            ct.delete(s), d = !1, x()
                        }
                    })),
                    p = {
                        getState: function() {
                            return c
                        },
                        getSnapshot: function() {
                            return (0, f.A)({}, u)
                        },
                        subscribe: function(e) {
                            return d.subscribe((function() {
                                return e(c)
                            }))
                        }
                    };
                return ct.set(s, p), p
            }
            var ht = {
                isolated: !0,
                cross: !1
            };

            function mt(e) {
                var t = e.split(".");
                return function(e) {
                    for (var r = 0; r < t.length; r++) {
                        if (!e) return;
                        e = e[t[r]]
                    }
                    return e
                }
            }
            var vt = function(e) {
                    var t = mt(e);
                    return function(e) {
                        return Number(t(e))
                    }
                },
                gt = function(e) {
                    var t = mt(e);
                    return function(e) {
                        return t(e)
                    }
                },
                bt = function(e) {
                    var t = mt(e);
                    return function(e) {
                        return ht[t(e)]
                    }
                },
                xt = function() {
                    return function(e) {
                        return Date.now()
                    }
                };

            function yt(e, t) {
                for (var r = Object.keys(t), n = Object.create(null), i = 0; i < r.length; i++) {
                    var a = r[i],
                        o = t[a],
                        s = void 0;
                    s = "function" === typeof o ? o(e) : e[o], n[a] = s
                }
                return n
            }

            function wt(e) {
                return yt(e, {
                    eventType: "e",
                    pair: "ps",
                    eventTime: "E",
                    symbol: "s",
                    contractType: "ct",
                    deliveryDate: "dt",
                    onboardDate: "ot",
                    contractStatus: "cs",
                    brackets: "bks"
                })
            }

            function kt(e) {
                return yt(e, {
                    pair: "ps",
                    contractType: "ct",
                    eventTime: "E",
                    time: mt("k.t"),
                    open: vt("k.o"),
                    close: vt("k.c"),
                    high: vt("k.h"),
                    low: vt("k.l"),
                    volume: vt("k.v"),
                    quantity: vt("k.q")
                })
            }

            function At(e) {
                var t = e.pair,
                    r = e.contractType,
                    n = e.interval,
                    i = e.options,
                    a = i.type,
                    o = i.priceType,
                    s = i.symbol,
                    l = "UM" === a && "index" === o ? {
                        stream: "kline",
                        symbol: "i".concat(t.toUpperCase()),
                        interval: n,
                        upperSymbolWithPrefix: !0
                    } : "UM" === a && "mark" === o ? {
                        stream: "kline",
                        symbol: "m".concat(s.toUpperCase()),
                        interval: n,
                        upperSymbolWithPrefix: !0
                    } : "CM" === a && "index" === o ? {
                        stream: "indexPriceKline",
                        pair: t,
                        interval: n
                    } : "CM" === a && "mark" === o ? {
                        stream: "markPriceKline",
                        symbol: s,
                        interval: n
                    } : {
                        stream: "continuous_kline",
                        pair: t,
                        contractType: r,
                        interval: n
                    };
                return qe(i.wssBaseUrl, [l], {
                    transform: function(e) {
                        var t = e.coalscedMsg;
                        return 1 === t.length ? kt(t[0].data) : function(e) {
                            return t.forEach((function(t) {
                                return e(kt(t.data))
                            }))
                        }
                    }
                })
            }

            function St(e) {
                return yt(e, {
                    pair: "ps",
                    eventTime: "E",
                    symbol: "s",
                    contractType: "ct",
                    deliveryDate: "dt",
                    onboardDate: "ot",
                    contractStatus: "cs",
                    brackets: "bks"
                })
            }
            var Ct, _t = function(e) {
                var t = e.data,
                    r = e.eventType,
                    n = e.keys;
                return t.e === r && (!t.lk || n.some((function(e) {
                    return e.listenKey === t.lk
                })))
            };

            function Tt(e, t, r) {
                return t === Ct.ISOLATED ? (0, ae.post)(e, (0, f.A)({}, r)) : (0, ae.post)(e, t === Ct.CROSS ? (0, f.A)({
                    accountType: "MARGIN"
                }, r) : (0, f.A)({}, r)).then((function(e) {
                    return (0, h.A)((0, f.A)({}, e), {
                        data: [{
                            symbol: null,
                            listenKey: e.data
                        }]
                    })
                }))
            }

            function Bt(e, t, r, n) {
                if (t === Ct.ISOLATED || t === Ct.PM) return (0, ae.post)(e, (0, f.A)({}, n));
                var i = r.map((function(e) {
                    return e.listenKey
                })).join("");
                return (0, ae.post)(e, (0, f.A)({
                    listenKey: i
                }, n))
            }! function(e) {
                e.SPOT = "SPOT", e.CROSS = "CROSS", e.ISOLATED = "ISOLATED", e.FUTURES = "FUTURES", e.FUTURES_CM = "FUTURES_CM", e.PM = "PM"
            }(Ct || (Ct = {}));
            var Et, It = new oe;

            function Ut(e, t, r, n) {
                var i, a = e.apiGetKeyUrl,
                    o = e.apiRefreshKeyUrl,
                    s = e.wssBaseUrl,
                    l = t.type,
                    c = t.eventType,
                    u = t.transform,
                    d = !1,
                    m = l,
                    v = function() {
                        var e = (0, re.A)(ie().mark((function e(t) {
                            var n, v, g, b;
                            return ie().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return null === (n = It.get(m)) ? (v = Tt(a, l, r).then((function(e) {
                                            var t = e.data || [];
                                            return setInterval((function() {
                                                return Bt(o, l, t, r)
                                            }), 3e6), t
                                        })), It.set(m, v)) : v = n, e.next = 7, v;
                                    case 7:
                                        g = e.sent, b = g.reduce((function(e, t) {
                                            return (0, h.A)((0, f.A)({}, e), (0, p.A)({}, t.listenKey, t.symbol))
                                        }), {}), i = qe(s, g.map((function(e) {
                                            return {
                                                stream: "userData",
                                                key: e.listenKey
                                            }
                                        })), {
                                            filter: function(e) {
                                                return _t({
                                                    data: e.data,
                                                    eventType: c,
                                                    keys: g
                                                })
                                            },
                                            transform: function(e) {
                                                return u(e, b)
                                            }
                                        }).subscribe((function(e) {
                                            return t.next(e)
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return J((function(e) {
                    return v(e),
                        function() {
                            d = !0, i && (i(), Boolean(n) && It.delete(m))
                        }
                }))
            }

            function Lt(e, t) {
                return Ut(e, {
                    type: e.type,
                    eventType: "GRID_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    grid: yt(r.gu, {
                                        strategyId: vt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        symbol: gt("s"),
                                        gridProfit: vt("r"),
                                        unmatchedAvgPrice: vt("up"),
                                        unmatchedQty: vt("uq"),
                                        unmatchedFee: vt("uf"),
                                        matchedPnl: vt("mp"),
                                        updateTime: vt("ut")
                                    })
                                })
                            }))
                        }
                    }
                }, t)
            }

            function Dt(e) {
                var t = e.symbol;
                return qe(e.wssBaseUrl, [{
                    stream: "netValue",
                    symbol: t
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                            var i = yt(r[n].data, {
                                symbol: "s",
                                eventTime: "E",
                                circulation: "m",
                                netValue: "n",
                                lever: "l",
                                positions: function(e) {
                                    return (e.b || []).map((function(e) {
                                        return yt(e, {
                                            symbol: "s",
                                            amount: "n"
                                        })
                                    }))
                                },
                                liLunlever: "t"
                            });
                            t[i.symbol] = i
                        }
                        return t
                    }
                })
            }

            function Pt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "netValueAll"
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                var o = yt(i[a], {
                                    symbol: "s",
                                    amount: "n",
                                    realLeverage: "l"
                                });
                                t[o.symbol] = o
                            }
                        return t
                    }
                })
            }

            function Rt(e, t) {
                return qe(t.wssBaseUrl, [{
                    stream: "tradeAggregate",
                    symbol: e
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.map((function(e) {
                            return yt(e.data, {
                                symbol: "s",
                                eventTime: "E",
                                aggTradeId: "a",
                                price: "p",
                                quantity: "q",
                                firstTradeId: "f",
                                lastTradeId: "l",
                                tradeTime: "T",
                                buyerIsMaker: "m"
                            })
                        }))
                    }
                })
            }

            function Ot(e, t) {
                return qe(t.wssBaseUrl, [{
                    stream: "aggSnap",
                    symbol: e
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.map((function(e) {
                            return yt(e.data, {
                                price: "p",
                                quantity: "cq",
                                tradeTime: "T"
                            })
                        })).map((function(e) {
                            return (0, h.A)((0, f.A)({}, e), {
                                buyerIsMaker: Number(e.quantity) > 0,
                                quantity: String(Math.abs(Number(e.quantity)))
                            })
                        }))
                    }
                })
            }

            function Mt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "tickerMiniAll",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                var o = yt(i[a], {
                                    symbol: "s",
                                    eventTime: "E",
                                    openPrice: vt("o"),
                                    highPrice: vt("h"),
                                    lowPrice: vt("l"),
                                    lastPrice: vt("c"),
                                    volume: vt("v"),
                                    quoteVolume: vt("q")
                                });
                                t[o.symbol] = o
                            }
                        return t
                    }
                })
            }

            function Nt(e) {
                return yt(e, {
                    symbol: "s",
                    eventTime: "E",
                    time: mt("k.t"),
                    open: vt("k.o"),
                    close: vt("k.c"),
                    high: vt("k.h"),
                    low: vt("k.l"),
                    volume: vt("k.v"),
                    quantity: vt("k.q")
                })
            }

            function jt(e, t, r) {
                return qe(r.wssBaseUrl, [{
                    stream: r.leveragedToken ? "l_kline" : "kline",
                    symbol: e,
                    interval: t,
                    timeZone: r.timeZone
                }], {
                    transform: function(e) {
                        var t = function(e) {
                            if (e.length <= 1) return e;
                            for (var t = [], r = e[0], n = 1; n < e.length; n++) {
                                var i = e[n];
                                r.data.k.t !== i.data.k.t && t.push(r), r = i
                            }
                            return t.push(r), t
                        }(e.coalscedMsg);
                        return 1 === t.length ? Nt(t[0].data) : function(e) {
                            return t.forEach((function(t) {
                                return e(Nt(t.data))
                            }))
                        }
                    }
                })
            }

            function zt(e) {
                return yt(e, {
                    symbol: "s",
                    eventTime: "E",
                    time: mt("k.t"),
                    open: vt("k.o"),
                    close: vt("k.c"),
                    high: vt("k.h"),
                    low: vt("k.l"),
                    volume: vt("k.v"),
                    quantity: vt("k.q")
                })
            }

            function Ft(e) {
                return yt(e, {
                    symbol: "s",
                    updateTimestamp: "E",
                    id: "i",
                    noticeType: "n",
                    eventType: "e",
                    period: "P",
                    priceChange: "p",
                    openTime: "o",
                    createTimestamp: "c"
                })
            }

            function Wt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "tickerAllWindowSize",
                    windowSize: e.windowSize,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                var o = yt(i[a], {
                                    symbol: "s",
                                    eventTime: "E",
                                    openPrice: vt("o"),
                                    highPrice: vt("h"),
                                    lowPrice: vt("l"),
                                    lastPrice: vt("c"),
                                    volume: vt("v"),
                                    quoteVolume: vt("q")
                                });
                                t[o.symbol] = o
                            }
                        return t
                    }
                })
            }

            function Ht(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "tickerAllWindowSize",
                    windowSize: e.windowSize,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.reduce((function(e, t) {
                            return t.data.forEach((function(t) {
                                return e[t.s] = t
                            })), e
                        }), {})
                    }
                })
            }

            function Vt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "markPriceAll",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                var o = yt(i[a], {
                                    symbol: "s",
                                    eventTime: "E",
                                    markPrice: vt("p"),
                                    indexPrice: vt("i"),
                                    nextFundingTime: vt("T"),
                                    lastFundingRate: vt("r"),
                                    estimatedSettlePrice: vt("P")
                                });
                                t[o.symbol] = o
                            }
                        return t
                    }
                })
            }

            function Kt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "markPriceMini",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                var o = yt(i[a], {
                                    symbol: "s",
                                    markPrice: vt("p")
                                });
                                t[o.symbol] = o
                            }
                        return t
                    }
                })
            }

            function Gt(e) {
                return qe(e.wssBaseUrl, [{
                    stream: "markPrice",
                    symbol: e.symbol,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                            var i = yt(r[n].data, {
                                symbol: "s",
                                eventTime: "E",
                                markPrice: vt("p"),
                                indexPrice: vt("i"),
                                estimatedSettlePrice: vt("P"),
                                nextFundingTime: vt("T"),
                                lastFundingRate: vt("r")
                            });
                            t[i.symbol] = i
                        }
                        return t
                    }
                })
            }

            function qt(e, t, r) {
                if (t === Et.ISOLATED) return (0, ae.post)(e, {});
                var n = r.map((function(e) {
                    return e
                })).join("");
                return (0, ae.post)(e, {
                    listenKey: n
                })
            }

            function Zt(e, t) {
                var r, n = e.userListenKeys,
                    i = e.apiRefreshKeyUrl,
                    a = e.wssBaseUrl,
                    o = t.type,
                    s = t.eventType,
                    l = t.transform,
                    c = !1,
                    u = function() {
                        var e = (0, re.A)(ie().mark((function e(t) {
                            var u;
                            return ie().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!c) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        setInterval((function() {
                                            return qt(i, o, n)
                                        }), 3e6), u = n.reduce((function(e, t) {
                                            return (0, h.A)((0, f.A)({}, e), (0, p.A)({}, t, t))
                                        }), {}), r = qe(a, n.map((function(e) {
                                            return {
                                                stream: "userData",
                                                key: e
                                            }
                                        })), {
                                            filter: function(e) {
                                                return _t({
                                                    data: e.data,
                                                    eventType: s,
                                                    keys: n.map((function(e) {
                                                        return {
                                                            listenKey: e
                                                        }
                                                    }))
                                                })
                                            },
                                            transform: function(e) {
                                                return l(e, u)
                                            }
                                        }).subscribe((function(e) {
                                            return t.next(e)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return J((function(e) {
                    return u(e),
                        function() {
                            c = !0, r && r()
                        }
                }))
            }

            function Yt(e, t) {
                return Ut(e, {
                    type: e.type,
                    eventType: "STRATEGY_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    streategy: yt(r.su, {
                                        symbol: gt("s"),
                                        strategyId: vt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        updateTime: vt("ut"),
                                        code: vt("c")
                                    })
                                })
                            }))
                        }
                    }
                }, t)
            }

            function Xt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ACCOUNT_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return t({
                                listenKey: e.data.lk,
                                balances: e.data.a.B.map((function(e) {
                                    return yt(e, {
                                        asset: "a",
                                        walletBalance: vt("wb"),
                                        crossWalletBalance: vt("cw")
                                    })
                                })),
                                positions: e.data.a.P.map((function(e) {
                                    return yt(e, {
                                        symbol: "s",
                                        positionAmount: vt("pa"),
                                        entryPrice: vt("ep"),
                                        cumRealized: vt("cr"),
                                        unrealizedProfit: vt("up"),
                                        marginType: "mt",
                                        isolatedWallet: vt("iw"),
                                        positionSide: "ps",
                                        marginAsset: "ma",
                                        initialMarkPrice: 0
                                    })
                                }))
                            })
                        }
                    }
                })
            }

            function Qt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ACCOUNT_CONFIG_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data,
                                    n = yt(r, {
                                        event: gt("e"),
                                        eventTime: vt("E"),
                                        summaryTime: vt("T"),
                                        listenKey: gt("lk")
                                    });
                                return r.ac && (n.leverage = yt(r.ac, {
                                    symbol: "s",
                                    leverage: "l"
                                })), r.ai && (n.joinMargin = yt(r.ai, {
                                    open: "j"
                                })), t(n)
                            }))
                        }
                    }
                })
            }

            function $t(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "GRID_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    grid: yt(r.gu, {
                                        strategyId: vt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        symbol: gt("s"),
                                        gridProfit: vt("r"),
                                        unmatchedAvgPrice: vt("up"),
                                        unmatchedQty: vt("uq"),
                                        unmatchedFee: vt("uf"),
                                        matchedPnl: vt("mp"),
                                        updateTime: vt("ut")
                                    })
                                })
                            }))
                        }
                    }
                })
            }

            function Jt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ORDER_TRADE_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    order: yt(r.o, {
                                        symbol: "s",
                                        insertTime: "T",
                                        type: "o",
                                        side: "S",
                                        price: vt("p"),
                                        avgPrice: vt("ap"),
                                        executedPrice: vt("ap"),
                                        executedQty: vt("z"),
                                        origQty: "q",
                                        stopPrice: vt("sp"),
                                        operate: "x",
                                        status: "X",
                                        orderId: "i",
                                        clientOrderId: "c",
                                        orderType: "o",
                                        origType: "ot",
                                        timeInForce: "f",
                                        bidNotional: vt("b"),
                                        askNotional: vt("a"),
                                        workingType: "wt",
                                        positionSide: "ps",
                                        reduceOnly: "R",
                                        strategyId: "si",
                                        strategySubId: "ss",
                                        strategyType: "st",
                                        closePosition: "cp",
                                        activatePrice: vt("AP"),
                                        callbackRate: vt("cr")
                                    })
                                })
                            }))
                        }
                    }
                })
            }

            function er(e) {
                return Ut(e, {
                    type: e.type,
                    eventType: "outboundAccountPosition",
                    transform: function(e, t) {
                        return function(r) {
                            return e.coalscedMsg.forEach((function(e) {
                                var n = e.data,
                                    i = e.stream;
                                return r({
                                    symbol: t[i],
                                    balances: n.B.map((function(e) {
                                        return yt(e, {
                                            asset: "a",
                                            free: vt("f"),
                                            locked: vt("l")
                                        })
                                    }))
                                })
                            }))
                        }
                    }
                })
            }

            function tr(e, t, r) {
                return Ut(e, {
                    type: e.type,
                    eventType: "ACCOUNT_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) return r({
                                    balances: n.a.B.map((function(e) {
                                        return yt(e, {
                                            asset: "a",
                                            walletBalance: vt("wb"),
                                            crossWalletBalance: vt("cw")
                                        })
                                    })),
                                    positions: n.a.P.map((function(e) {
                                        return yt(e, {
                                            symbol: "s",
                                            positionSize: vt("pa"),
                                            entryPrice: vt("ep"),
                                            breakEvenPrice: vt("bep"),
                                            unrealizedPnl: vt("up"),
                                            isolated: bt("mt"),
                                            isolatedWallet: vt("iw"),
                                            positionSide: gt("ps"),
                                            marginAsset: gt("ma"),
                                            initialMarkPrice: 0
                                        })
                                    }))
                                })
                            }))
                        }
                    }
                }, t, r)
            }

            function rr(e, t, r) {
                return Ut(e, {
                    type: e.type,
                    eventType: "executionReport",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(yt(r, {
                                    symbol: "s",
                                    clientOrderId: "c",
                                    side: "S",
                                    orderType: "o",
                                    timeInForce: "f",
                                    quantity: vt("q"),
                                    price: vt("p"),
                                    stopPrice: vt("P"),
                                    icebergQuantity: vt("F"),
                                    orderListId: "g",
                                    originalClientOrderId: "C",
                                    executionType: "x",
                                    orderStatus: "X",
                                    orderRejectReason: "r",
                                    orderId: "i",
                                    LastExecutedQuantity: vt("l"),
                                    cumulativeFilledQuantity: vt("z"),
                                    lastPrice: vt("L"),
                                    commissionAmount: vt("n"),
                                    commissionAsset: "N",
                                    transactionTime: "T",
                                    tradeId: "t",
                                    isOnOrderBook: "w",
                                    isMaker: "m",
                                    orderCreationTime: "O",
                                    cumulativeQuoteQuantity: vt("Z"),
                                    lastQuoteQuantity: vt("Y"),
                                    quoteOrderQty: vt("Q"),
                                    activatePrice: vt("AP"),
                                    callbackRate: vt("cr"),
                                    trailingDelta: "d",
                                    trailingTime: "D",
                                    workingTime: "W",
                                    isSor: "uS"
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function nr(e, t, r) {
                return Ut(e, {
                    type: e.type,
                    eventType: "ORDER_TRADE_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) return r(yt(n.o, {
                                    symbol: "s",
                                    insertTime: "T",
                                    type: "o",
                                    side: "S",
                                    price: vt("p"),
                                    avgPrice: vt("ap"),
                                    executedPrice: vt("ap"),
                                    executedQty: vt("z"),
                                    origQty: "q",
                                    stopPrice: vt("sp"),
                                    operate: "x",
                                    status: "X",
                                    orderId: "i",
                                    clientOrderId: "c",
                                    orderType: "o",
                                    origType: "ot",
                                    timeInForce: "f",
                                    goodTillDate: vt("gtd"),
                                    bidNotional: vt("b"),
                                    askNotional: vt("a"),
                                    workingType: "wt",
                                    positionSide: "ps",
                                    reduceOnly: "R",
                                    strategyId: "si",
                                    strategySubId: "ss",
                                    strategyType: "st",
                                    closePosition: "cp",
                                    activatePrice: vt("AP"),
                                    callbackRate: vt("cr"),
                                    priceRate: vt("cr"),
                                    priceMatch: "pm"
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function ir(e, t, r) {
                return Ut(e, {
                    type: e.type,
                    eventType: "ALGO_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(yt(r.o, {
                                    algoId: "aid",
                                    clientAlgoId: "caid",
                                    algoType: "at",
                                    orderType: "o",
                                    symbol: "s",
                                    side: "S",
                                    positionSide: "ps",
                                    timeInForce: "f",
                                    quantity: "q",
                                    algoStatus: "X",
                                    actualOrderId: "ai",
                                    actualPrice: "ap",
                                    actualQty: "aq",
                                    actualType: "act",
                                    triggerPrice: "tp",
                                    price: "p",
                                    icebergQuantity: "iq",
                                    tpTriggerPrice: "tptp",
                                    tpPrice: "tpp",
                                    tpOrderType: "tpot",
                                    slTriggerPrice: "sltp",
                                    slPrice: "slp",
                                    slOrderType: "slot",
                                    selfTradePreventionMode: "V",
                                    workingType: "wt",
                                    priceMatch: "pm",
                                    closePosition: "cp",
                                    priceProtect: "pP",
                                    reduceOnly: "R",
                                    activatePrice: "AP",
                                    callbackRate: "cr",
                                    goodTillDate: vt("gtd"),
                                    triggerTime: vt("tt"),
                                    updateTime: xt()
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function ar(e, t, r) {
                return Ut(e, {
                    type: e.type,
                    eventType: "ACCOUNT_CONFIG_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) {
                                    var i = yt(n, {
                                        event: gt("e"),
                                        eventTime: vt("E"),
                                        summaryTime: vt("T")
                                    });
                                    return n.ac && (i.leverage = yt(n.ac, {
                                        symbol: "s",
                                        leverage: "l"
                                    })), n.ai && (i.joinMargin = yt(n.ai, {
                                        open: "j"
                                    })), r(i)
                                }
                            }))
                        }
                    }
                }, t, r)
            }

            function or(e, t) {
                return (0, ae.put)("".concat(e, "?listenKey=").concat(t))
            }! function(e) {
                e.SPOT = "SPOT", e.CROSS = "CROSS", e.ISOLATED = "ISOLATED", e.FUTURES = "FUTURES", e.FUTURES_CM = "FUTURES_CM", e.PM = "PM"
            }(Et || (Et = {}));
            var sr = new oe;

            function lr(e) {
                var t = function(e, t) {
                    var r, n = e.apiGetKeyUrl,
                        i = e.apiRefreshKeyUrl,
                        a = e.wssBaseUrl,
                        o = t.transform,
                        s = !1,
                        l = n,
                        c = function() {
                            var e = (0, re.A)(ie().mark((function e(t) {
                                var c, u, d;
                                return ie().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!s) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return null === (c = sr.get(l)) ? (u = (p = n, (0, ae.post)(p)).then((function(e) {
                                                var t = (e.data || {}).listenKey;
                                                return setInterval((function() {
                                                    return or(i, t)
                                                }), 3e6), t
                                            })), sr.set(l, u)) : u = c, e.next = 7, u;
                                        case 7:
                                            d = e.sent, r = qe(a, [{
                                                stream: "userData",
                                                key: d
                                            }], {
                                                transform: function(e) {
                                                    return o(e)
                                                }
                                            }).subscribe((function(e) {
                                                return t.next(e)
                                            }));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                    var p
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return J((function(e) {
                        return c(e),
                            function() {
                                s = !0, r && r()
                            }
                    }))
                }(e, {
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(r)
                            }))
                        }
                    }
                });
                return t
            }
            var cr = function(e) {
                    (0, Z.A)(r, e);
                    var t = (0, Y.A)(r);

                    function r(e) {
                        var n;
                        return (0, q.A)(this, r), (n = t.call(this, e)).pmSDK = e.pmSDK, n
                    }
                    var n = r.prototype;
                    return n.getOrderbookStatusStream = function() {
                        return this.withOptionsStream((function(e) {
                            return Ke(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getSocketEventsStream = function() {
                        return this.withOptionsStream((function(e) {
                            return Ve(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.speed,
                            a = void 0 === i ? 500 : i,
                            o = t.quantityPrecision,
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = function(e) {
                                return "".concat(e).concat(s ? "/dapi" : "/fapi", "/v1/depth")
                            },
                            c = this.getOptions(),
                            u = ft(e, {
                                apiBaseUrl: l(c.apiBaseUrl),
                                wssBaseUrl: c.marketWebsocketBaseUrl,
                                levels: n,
                                speed: a,
                                quantityPrecision: o
                            });
                        return this.withOptionsStream((function(t) {
                            var r = t.apiBaseUrl,
                                i = t.marketWebsocketBaseUrl;
                            return J((function() {
                                return u = ft(e, {
                                        apiBaseUrl: l(r),
                                        wssBaseUrl: i,
                                        levels: n,
                                        speed: a,
                                        quantityPrecision: o
                                    }),
                                    function() {}
                            }))
                        })), u
                    }, n.getStreamTrade = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Rt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTradeSnap = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Ot(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTickers = function() {
                        return this.withOptionsStream((function(e) {
                            return Mt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamDepth = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Ze(e, {
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getStreamKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return jt(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getStreamLeveragedTokenKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return jt(e, t, {
                                wssBaseUrl: n,
                                leveragedToken: !0
                            })
                        }))
                    }, n.getStreamNetValue = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Dt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamNetValueAll = function() {
                        return this.withOptionsStream((function(e) {
                            return Pt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceMiniStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return Kt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getMarkPriceAllStream = function() {
                        return this.withOptionsStream((function(e) {
                            return Vt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getContinuousKlineStream = function(e, t, r, n) {
                        return this.withOptionsStream((function(i) {
                            var a = i.marketWebsocketBaseUrl;
                            return At({
                                pair: e,
                                contractType: t,
                                interval: r,
                                options: {
                                    wssBaseUrl: (null === n || void 0 === n ? void 0 : n.wssBaseUrl) || a,
                                    type: "CM",
                                    priceType: (null === n || void 0 === n ? void 0 : n.priceType) || "last",
                                    symbol: (null === n || void 0 === n ? void 0 : n.symbol) || ""
                                }
                            })
                        }))
                    }, n.getContractInfoStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return qe(e.wssBaseUrl, [{
                                    stream: "contractInfo"
                                }], {
                                    transform: function(e) {
                                        var t = e.coalscedMsg;
                                        return 1 === t.length ? St(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(St(t.data))
                                            }))
                                        }
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserAssetsStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return tr((0, h.A)((0, f.A)({}, n), {
                                type: Ct.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserOrderStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return nr((0, h.A)((0, f.A)({}, n), {
                                type: Ct.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getAlgoOrderStream = function() {
                        return {
                            subscribe: function(e) {
                                return function() {}
                            }
                        }
                    }, n.getUserConditionalOrderStream = function() {
                        if (!this.pmSDK) throw "conditional order stream must pass PMSDK in";
                        return this.pmSDK.getCMUserConditionalOrderStream.bind(this.pmSDK)()
                    }, n.getUserAccountConfigUpdateStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserAccountConfigUpdateStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return ar((0, h.A)((0, f.A)({}, n), {
                                type: Ct.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getIndexPriceStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return function(e) {
                                var t = e.pair;
                                return qe(e.wssBaseUrl, [{
                                    stream: "indexPriceUpdate",
                                    pair: t
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                            var i = yt(r[n].data, {
                                                pair: "i",
                                                indexPrice: vt("p")
                                            });
                                            t[i.pair] = i
                                        }
                                        return t
                                    }
                                })
                            }({
                                pair: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getGridStream = function() {
                        var e = this;
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Lt((0, h.A)((0, f.A)({}, e._getUserKeyApiUrls()), {
                                type: Ct.FUTURES_CM,
                                wssBaseUrl: r
                            }))
                        }))
                    }, n.getStrategyStream = function() {
                        var e = this;
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Yt((0, h.A)((0, f.A)({}, e._getUserKeyApiUrls()), {
                                type: Ct.FUTURES_CM,
                                wssBaseUrl: r
                            }))
                        }))
                    }, n.getStrategyShadowAccountStream = function(e) {
                        var t = this.getOptions();
                        return Xt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: Et.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyAccountConfigStream = function(e) {
                        var t = this.getOptions();
                        return Qt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridUpdateStream = function(e) {
                        var t = this.getOptions();
                        return $t({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridOrderTradeUpdateStream = function(e) {
                        var t = this.getOptions();
                        return Jt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n._getUserKeyApiUrls = function() {
                        var e = this.getOptions();
                        return {
                            apiGetKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/delivery/user-data/user-listen-key"),
                            apiRefreshKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/delivery/user-data/listen-key-extend-insert")
                        }
                    }, r.setStreamBatch = function(e) {
                        Q(e)
                    }, r
                }(te),
                ur = function(e) {
                    (0, Z.A)(r, e);
                    var t = (0, Y.A)(r);

                    function r(e) {
                        var n;
                        return (0, q.A)(this, r), (n = t.call(this, e)).pmSDK = e.pmSDK, n
                    }
                    var n = r.prototype;
                    return n.getOrderbookStatusStream = function() {
                        return this.withOptionsStream((function(e) {
                            return Ke(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getSocketEventsStream = function() {
                        return this.withOptionsStream((function(e) {
                            return Ve(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.speed,
                            a = void 0 === i ? 500 : i,
                            o = t.quantityPrecision,
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = function(e) {
                                return "".concat(e).concat(s ? "/dapi" : "/fapi", "/v1/depth")
                            },
                            c = this.getOptions(),
                            u = ft(e, {
                                apiBaseUrl: l(c.apiBaseUrl),
                                wssBaseUrl: c.marketWebsocketBaseUrl,
                                levels: n,
                                speed: a,
                                quantityPrecision: o
                            });
                        return this.withOptionsStream((function(t) {
                            var r = t.apiBaseUrl,
                                i = t.marketWebsocketBaseUrl;
                            return J((function() {
                                return u = ft(e, {
                                        apiBaseUrl: l(r),
                                        wssBaseUrl: i,
                                        levels: n,
                                        speed: a,
                                        quantityPrecision: o
                                    }),
                                    function() {}
                            }))
                        })), u
                    }, n.getStreamTrade = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Rt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTradeSnap = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Ot(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTickers = function() {
                        return this.withOptionsStream((function(e) {
                            return Mt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamDepth = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Ze(e, {
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getStreamKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return jt(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getIndexKlineStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return function(e, t, r) {
                                return qe(r.wssBaseUrl, [{
                                    stream: "kline",
                                    symbol: "i".concat(e.toUpperCase()),
                                    interval: t,
                                    upperSymbolWithPrefix: !0
                                }], {
                                    transform: function(e) {
                                        var t = function(e) {
                                            if (e.length <= 1) return e;
                                            for (var t = [], r = e[0], n = 1; n < e.length; n++) {
                                                var i = e[n];
                                                r.data.k.t !== i.data.k.t && t.push(r), r = i
                                            }
                                            return t.push(r), t
                                        }(e.coalscedMsg);
                                        return 1 === t.length ? zt(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(zt(t.data))
                                            }))
                                        }
                                    }
                                })
                            }(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getContinuousKlineStream = function(e, t, r, n) {
                        return this.withOptionsStream((function(i) {
                            var a = i.marketWebsocketBaseUrl;
                            return At({
                                pair: e,
                                contractType: t,
                                interval: r,
                                options: {
                                    wssBaseUrl: (null === n || void 0 === n ? void 0 : n.wssBaseUrl) || a,
                                    type: "UM",
                                    priceType: (null === n || void 0 === n ? void 0 : n.priceType) || "last",
                                    symbol: (null === n || void 0 === n ? void 0 : n.symbol) || ""
                                }
                            })
                        }))
                    }, n.getStreamLeveragedTokenKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return jt(e, t, {
                                wssBaseUrl: n,
                                leveragedToken: !0
                            })
                        }))
                    }, n.getStreamNetValue = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Dt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamNetValueAll = function() {
                        return this.withOptionsStream((function(e) {
                            return Pt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getAssetIndexAllStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return qe(e.wssBaseUrl, [{
                                    stream: "assetIndexAll"
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                                var o = yt(i[a], {
                                                    symbol: "s",
                                                    index: vt("i"),
                                                    indexBidBuffer: vt("b"),
                                                    indexAskBuffer: vt("a"),
                                                    bidRate: vt("B"),
                                                    askRate: vt("A"),
                                                    time: "E"
                                                });
                                                t[o.symbol] = o
                                            }
                                        return t
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getPortfolioAssetIndexStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return qe(e.wssBaseUrl, [{
                                    stream: "portfolioAssetPrice"
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                                            for (var i = r[n].data, a = 0; a < i.length; a++) {
                                                var o = yt(i[a], {
                                                    symbol: "s",
                                                    index: vt("i"),
                                                    time: "E"
                                                });
                                                t[o.symbol] = o
                                            }
                                        return t
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceAllStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return Vt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getMarkPriceStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getMarkPriceMiniStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return Kt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = void 0 === n ? void 0 : n,
                            a = e.clearListenKeyCache,
                            o = void 0 !== a && a;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserAssetsStream.bind(this.pmSDK)();
                        var s = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return tr((0, h.A)((0, f.A)({}, s), {
                                type: Ct.FUTURES,
                                wssBaseUrl: t
                            }), i, o)
                        }))
                    }, n.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = e.clearListenKeyCache,
                            a = void 0 !== i && i;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserOrderStream.bind(this.pmSDK)();
                        var o = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return nr((0, h.A)((0, f.A)({}, o), {
                                type: Ct.FUTURES,
                                wssBaseUrl: t
                            }), n, a)
                        }))
                    }, n.getAlgoOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = e.clearListenKeyCache,
                            n = void 0 !== r && r,
                            i = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var r = e.marketWebsocketBaseUrl;
                            return ir((0, h.A)((0, f.A)({}, i), {
                                type: Ct.FUTURES,
                                wssBaseUrl: r
                            }), t, n)
                        }))
                    }, n.getUserConditionalOrderStream = function() {
                        if (!this.pmSDK) throw "conditional order stream must pass PMSDK in";
                        return this.pmSDK.getUMUserConditionalOrderStream.bind(this.pmSDK)()
                    }, n.getUserAccountConfigUpdateStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = void 0 === n ? void 0 : n,
                            a = e.clearListenKeyCache,
                            o = void 0 !== a && a;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserAccountConfigUpdateStream.bind(this.pmSDK)();
                        var s = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return ar((0, h.A)((0, f.A)({}, s), {
                                type: Ct.FUTURES,
                                wssBaseUrl: t
                            }), i, o)
                        }))
                    }, n.getIndexPriceStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getContractInfoStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return qe(e.wssBaseUrl, [{
                                    stream: "contractInfo"
                                }], {
                                    transform: function(e) {
                                        var t = e.coalscedMsg;
                                        return 1 === t.length ? wt(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(wt(t.data))
                                            }))
                                        }
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamCompositeIndex = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return function(e) {
                                var t = e.symbol;
                                return qe(e.wssBaseUrl, [{
                                    stream: "compositeIndex",
                                    symbol: t
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                            var i = yt(r[n].data, {
                                                symbol: "s",
                                                component: "C",
                                                assets: function(e) {
                                                    return (e.c || []).map((function(e) {
                                                        return yt(e, {
                                                            baseAsset: "b",
                                                            quoteAsset: "q",
                                                            weightQty: "w",
                                                            weightRatio: "W",
                                                            indexPrice: "i"
                                                        })
                                                    }))
                                                }
                                            });
                                            t[i.symbol] = i
                                        }
                                        return t
                                    }
                                })
                            }({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStrategyStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = void 0 === t ? void 0 : t,
                            n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return Yt((0, h.A)((0, f.A)({}, n), {
                                type: Ct.FUTURES,
                                wssBaseUrl: t
                            }), r)
                        }))
                    }, n.getStrategyShadowAccountStream = function(e) {
                        var t = this.getOptions();
                        return Xt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: Et.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyAccountConfigStream = function(e) {
                        var t = this.getOptions();
                        return Qt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridUpdateStream = function(e) {
                        var t = this.getOptions();
                        return $t({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridOrderTradeUpdateStream = function(e) {
                        var t = this.getOptions();
                        return Jt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getGridStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = void 0 === t ? void 0 : t,
                            n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return Lt((0, h.A)((0, f.A)({}, n), {
                                type: Ct.FUTURES,
                                wssBaseUrl: t
                            }), r)
                        }))
                    }, n.getTopMoversStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return qe(e.wssBaseUrl, [{
                                    stream: "topMovers"
                                }], {
                                    transform: function(e) {
                                        for (var t = e.coalscedMsg, r = [], n = 0; n < t.length; n++) {
                                            var i = t[n].data;
                                            r.push(Ft(i))
                                        }
                                        return r
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n._getUserKeyApiUrls = function() {
                        var e = this.getOptions();
                        return {
                            apiGetKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/future/user-data/user-listen-key"),
                            apiRefreshKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/future/user-data/listen-key-extend-insert")
                        }
                    }, r.setStreamBatch = function(e) {
                        Q(e)
                    }, r
                }(te),
                dr = function() {
                    function e(t) {
                        (0, q.A)(this, e), this._options = t
                    }
                    var t = e.prototype;
                    return t.getOrderbookStatusStream = function() {
                        return Ke(this._options.marketWebsocketBaseUrl)
                    }, t.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.quantityPrecision;
                        return ft(e, {
                            apiBaseUrl: "".concat(this._options.apiBaseUrl, "/api/v3/depth"),
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            levels: n,
                            quantityPrecision: i
                        })
                    }, t.getStreamTrade = function(e) {
                        return Rt(e, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, t.getStreamTickers = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                        return Mt({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            speed: e
                        })
                    }, t.getStreamTickersWithWindowSize = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "24h",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        return Wt({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            windowSize: e,
                            speed: t
                        })
                    }, t.getStreamTickersWithWindowSizeRaw = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "24h",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        return Ht({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            windowSize: e,
                            speed: t
                        })
                    }, t.getStreamDepth = function(e) {
                        return Ze(e, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, t.getStreamKline = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).timeZone;
                        return jt(e, t, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            timeZone: r
                        })
                    }, t.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct.SPOT,
                            t = e === Ct.ISOLATED ? this._getIsolatedUserKeyApiUrls() : this._getUserKeyApiUrls();
                        return er((0, h.A)((0, f.A)({}, t), {
                            type: e,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        }))
                    }, t.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct.SPOT,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            n = e === Ct.ISOLATED ? this._getIsolatedUserKeyApiUrls() : this._getUserKeyApiUrls();
                        return rr((0, h.A)((0, f.A)({}, n), {
                            type: e,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        }), t, r)
                    }, t.getMarginIndexStream = function(e) {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return function(e) {
                            var t = e.wssBaseUrl,
                                r = e.symbols;
                            return qe(t, Array.isArray(r) ? r.map((function(e) {
                                return {
                                    stream: "priceIndex",
                                    marginSymbol: e.toLocaleLowerCase()
                                }
                            })) : [{
                                stream: "priceIndex"
                            }], {
                                transform: function(e) {
                                    for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                        var i = r[n].data;
                                        if (Array.isArray(i))
                                            for (var a = 0; a < i.length; a++) {
                                                var o = yt(i[a], {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: vt("p")
                                                });
                                                t[o.symbol] = o
                                            } else {
                                                var s = yt(i, {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: vt("p")
                                                });
                                                t[s.symbol] = s
                                            }
                                    }
                                    return t
                                }
                            })
                        }({
                            wssBaseUrl: this._options.marginWebsocketBaseUrl,
                            symbols: e
                        })
                    }, t.getConvertTickerStream = function(e) {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return function(e) {
                            var t = e.wssBaseUrl,
                                r = e.symbols;
                            return qe(t, Array.isArray(r) ? r.map((function(e) {
                                return {
                                    stream: "convertTicker",
                                    marginSymbol: e.toLocaleLowerCase()
                                }
                            })) : [{
                                stream: "convertTicker"
                            }], {
                                transform: function(e) {
                                    for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                        var i = r[n].data;
                                        if (Array.isArray(i))
                                            for (var a = 0; a < i.length; a++) {
                                                var o = yt(i[a], {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: vt("p")
                                                });
                                                t[o.symbol] = o
                                            } else {
                                                var s = yt(i, {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: vt("p")
                                                });
                                                t[s.symbol] = s
                                            }
                                    }
                                    return t
                                }
                            })
                        }({
                            wssBaseUrl: this._options.marginWebsocketBaseUrl,
                            symbols: e
                        })
                    }, t.getUserDebtStream = function() {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        var e = this._getMarginApiUrls();
                        return lr((0, h.A)((0, f.A)({}, e), {
                            wssBaseUrl: this._options.marginWebsocketBaseUrl
                        }))
                    }, t.getMarginStatusStream = function() {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return Ke(this._options.marginWebsocketBaseUrl)
                    }, t._getIsolatedUserKeyApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/isolated-margin/start/batch"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/isolated-margin/ping/batch")
                        }
                    }, t._getUserKeyApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/start"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/ping")
                        }
                    }, t._getMarginApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/margin/v1/private/margin/user-data-stream"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/margin/v1/private/margin/user-data-stream")
                        }
                    }, e.setStreamBatch = function(e) {
                        Q(e)
                    }, e
                }(),
                pr = r("a59x"),
                fr = (0, r("Dz1D").PC)(),
                hr = fr.WS_HOST_TEMPLATE,
                mr = fr.DELIVERY_STREAM_HOST_TEMPLATE,
                vr = (fr.SITE_HOST, fr.FUTURES_STREAM_HOST_TEMPLATE),
                gr = (0, pr.bG)(2),
                br = "{{rootDomain}}";

            function xr() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return e ? e.replace(br, t) : e
            }
            var yr = xr(hr, gr),
                wr = xr(mr, gr),
                kr = xr(vr, gr),
                Ar = null,
                Sr = null,
                Cr = null,
                _r = function() {
                    return null === Sr ? (Sr = new cr({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: "".concat(wr, "/swift")
                    }), cr.setStreamBatch(G.unstable_batchedUpdates), Sr) : Sr
                },
                Tr = function() {
                    return null === Ar ? (Ar = new ur({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: "".concat(kr, "/swift")
                    }), ur.setStreamBatch(G.unstable_batchedUpdates), Ar) : Ar
                },
                Br = function() {
                    return null === Cr ? (Cr = new dr({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: yr
                    }), dr.setStreamBatch(G.unstable_batchedUpdates), Cr) : Cr
                },
                Er = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e ? Br() : t ? _r() : Tr()
                },
                Ir = r("i9es"),
                Ur = (0, i.createContext)(null),
                Lr = function(e) {
                    var t = e.biz,
                        r = e.needAlphaAsset,
                        o = void 0 !== r && r,
                        s = e.children,
                        l = (0, Ir.tZ)(t, o),
                        c = l.holdingList,
                        u = l.tokens,
                        d = l.refresh;
                    (0, Ir.Eb)(d);
                    var p = (0, Ir.fE)({
                            tokens: u
                        }).value,
                        m = (0, n.A)((0, i.useState)(), 2),
                        v = m[0],
                        g = m[1],
                        b = (0, n.A)((0, i.useState)(!0), 2),
                        x = b[0],
                        y = b[1];
                    (0, i.useEffect)((function() {
                        if (p && c) {
                            var e = null === c || void 0 === c ? void 0 : c.map((function(e) {
                                var t = null === p || void 0 === p ? void 0 : p.find((function(t) {
                                    return t.token === e.asset
                                }));
                                return (0, h.A)((0, f.A)({}, e), {
                                    avgBuyCost: null === t || void 0 === t ? void 0 : t.avgBuyCost
                                })
                            }));
                            g(e), y(!1)
                        }
                    }), [c, p]);
                    var w = (0, i.useMemo)((function() {
                        return {
                            holdingList: v,
                            loading: x,
                            refresh: d
                        }
                    }), [v, x, d]);
                    return a().createElement(Ur.Provider, {
                        value: w
                    }, s)
                },
                Dr = function() {
                    var e = (0, i.useContext)(Ur);
                    if (!e) throw new Error("useMarketsHoldingList must be used within a MarketsHoldingListProvider");
                    return e
                }
        },
        mKgd: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => h,
                fZ: () => d,
                vx: () => p
            });
            var n = r("TrCV"),
                i = r("DTvD"),
                a = r("9Uxs"),
                o = r("AGKK"),
                s = r("KAX1"),
                l = r("LEke"),
                c = r("ZSsA"),
                u = (0, i.createContext)({
                    searchKeyword: "",
                    setSearchKeyword: function() {},
                    searchCoinInput: "",
                    setSearchCoinInput: function() {}
                }),
                d = function(e) {
                    var t = e.children,
                        r = (0, i.useState)(""),
                        a = r[0],
                        o = r[1],
                        s = (0, i.useState)(""),
                        c = s[0],
                        d = s[1];
                    return (0, l.A)((function() {
                        d(a)
                    }), 50, [a]), (0, n.jsx)(u.Provider, {
                        value: {
                            searchCoinInput: a,
                            setSearchCoinInput: o,
                            searchKeyword: c,
                            setSearchKeyword: d
                        },
                        children: t
                    })
                },
                p = function() {
                    return (0, i.useContext)(u)
                },
                f = function() {};
            const h = function(e) {
                var t = e.trackFn,
                    r = e.trackOnChangeFn,
                    i = void 0 === r ? f : r,
                    u = (0, c.s9)("exchange-wallet").t,
                    d = p(),
                    h = d.searchCoinInput,
                    m = d.setSearchCoinInput;
                return (0, l.A)((function() {
                    h && i()
                }), 1e3, [h]), (0, n.jsx)(a.A, {
                    variant: "line",
                    value: h,
                    size: "small",
                    id: "asset-table-list-search-coin",
                    onMouseEnter: function() {
                        t()
                    },
                    className: "search-text-field mr-m !h-[32px] overflow-x-hidden rounded-s px-2xs hover:!border-line mobile:-mr-2xs hover:mobile:!mr-0 tablet:-mr-2xs hover:tablet:!mr-0 ".concat(h ? "w-[120px] !border-line" : "w-[34px] !border-transparent", " cursor-pointer hover:w-[120px]"),
                    onChange: function(e) {
                        m((e || "").replace(/\W/g, ""))
                    },
                    prefix: (0, n.jsx)(o.Ay, {
                        children: (0, n.jsx)(s.A, {
                            className: "search-text-field-icon h-6 text-xl text-t-primary pc:text-iconNormal"
                        })
                    }),
                    placeholder: u("exchange-wallet-searchCoin-placeholder", "Search")
                })
            }
        },
        "9pmv": (e, t, r) => {
            "use strict";
            r.d(t, {
                b1: () => L,
                NP: () => I,
                D4: () => U,
                HA: () => D
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                a = r("TrCV"),
                o = r("DTvD"),
                s = r.n(o),
                l = r("7zlU"),
                c = r("FGmr"),
                u = r("wIZF");
            const d = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M20.018 5.768L20 5.786V12l-3.107-3.107L5.768 20.018 4 18.25 15.125 7.125 12 4h8v1.75l.018.018z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    d: "M5.768 4l4.827 4.827-1.768 1.768L4 5.768 5.768 4zM13.423 15.19l1.768-1.767 4.827 4.827-1.768 1.768-4.827-4.827z",
                    fill: "currentColor"
                }))
            };
            const p = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M12.791 9.59c0-.498.28-.842.932-.97v1.889c-.651-.179-.932-.434-.932-.919zM15.739 13.342c0 .485-.28.88-.88 1.046v-2.016c.727.217.88.6.88.97z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.5 3H20v13a4 4 0 01-4 4H7.5A3.5 3.5 0 014 16.5V9h4.5V3zm0 8.5h-2v5a1 1 0 102 0v-5zm6.512 5.517v-1.225c1.697-.28 2.488-1.34 2.488-2.59 0-1.302-.855-2.03-2.642-2.438V8.646c.613.14 1.021.421 1.328.766l1.16-1.047c-.56-.638-1.314-1.034-2.334-1.148v-1.2h-1.455v1.2C11.91 7.408 11.03 8.3 11.03 9.64c0 1.238.779 2.08 2.693 2.476v2.297c-.715-.102-1.315-.447-1.8-.957l-1.148 1.046c.638.702 1.493 1.225 2.782 1.34v1.174h1.455z",
                    fill: "currentColor"
                }))
            };
            const f = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11.5-1.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3.5 16a3 3 0 013-3h11a3 3 0 013 3v4h-17v-4zm2 .5A1.5 1.5 0 017 15h2a1.5 1.5 0 011.5 1.5V18h-5v-1.5z",
                    fill: "currentColor"
                }))
            };
            const h = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.014 1a4.912 4.912 0 00-4.218 7.431 6.703 6.703 0 00-4.006 5.717H2v1.786h1.915a6.704 6.704 0 002.758 4.155l-1.648 1.648L6.287 23l2.07-2.07a6.694 6.694 0 002.118.342h5.304l1.591 1.591 1.263-1.262-1.34-1.34 4.35-4.35v-2.687h-1.934a6.126 6.126 0 00-1.398-2.915l2.435-2.435h-4.228A4.912 4.912 0 0012.014 1zM8.888 5.912a3.126 3.126 0 116.251 0 3.126 3.126 0 01-6.251 0zm1.786 0l1.34-1.34 1.34 1.34-1.34 1.34-1.34-1.34zm-.926 7.322h4.53v-1.786h-4.53v1.786z",
                    fill: "currentColor"
                }))
            };
            const m = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.282 5.597A13.941 13.941 0 007.5 2.5l5.94 5.94-10.5 10.5 2.12 2.12 10.5-10.5 5.94 5.94c0-3.326-1.16-6.38-3.096-8.782L20.56 5.56l-2.122-2.122-2.157 2.158zM14 17h4v4h-4v-4zM4.5 7L3 8.5 4.5 10 6 8.5 4.5 7z",
                    fill: "currentColor"
                }))
            };
            const v = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z",
                    fill: "currentColor"
                }))
            };
            const g = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M14.25 7.764L12.733 9.28l1.517 1.516 1.517-1.516-1.517-1.517z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm7.75 1.03a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm3.25 2v2.5H11v-2.5h6.5z",
                    fill: "currentColor"
                }))
            };
            const b = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM20 4h-8l3.125 3.125L4.061 18.19l1.768 1.768L16.893 8.893 20 12V4zm0 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z",
                    fill: "currentColor"
                }))
            };
            const x = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.438 8.178A4.91 4.91 0 003 11.649v1.987L5.864 16.5l1.864-2.864-.001-5.909h6.727V3H11.65a4.91 4.91 0 00-3.471 1.438l-3.74 3.74zM19.562 15.822A4.909 4.909 0 0021 12.351v-1.987l-2.863-2.865-1.864 2.865v5.909H9.545V21h2.806a4.91 4.91 0 003.47-1.438l3.74-3.74z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.454 12a2.454 2.454 0 11-4.908 0 2.454 2.454 0 014.908 0z",
                    fill: "currentColor"
                }))
            };
            const y = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm10.364 3.75H11.66v-7.5h5.203v1.7h-3.328v1.164h2.854v1.69h-2.854v1.246h3.328v1.7z",
                    fill: "currentColor"
                }))
            };
            const w = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M18 18.708a9 9 0 10-12 0V14h2.5v-4h2.25V6h2.5v4h2.25v4H18v4.708z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    d: "M10.75 20.914V14h2.5v6.914a9.088 9.088 0 01-2.5 0z",
                    fill: "currentColor"
                }))
            };
            const k = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 4h6v2h-2v1h7v4.5h2v4h-2V20H4v-4.5H2v-4h2V7h7V6H9V4zm1 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 3.703h6L13.704 16.5h-3.4L9 15.203zM15.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                    fill: "currentColor"
                }))
            };
            const A = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM3 3h9.5v3H6v3.996H3V3zm18 12v6h-7v-3h4v-3h3zm-5.667-6A2.333 2.333 0 0013 11.333V13h8v-1.667A2.333 2.333 0 0018.667 9h-3.334zM12 16.496a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-6.429 0L7.5 18.425l1.929-1.929L7.5 14.568l-1.929 1.928z",
                    fill: "currentColor"
                }))
            };
            const S = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 4.5H3v15h18v-15zM8.5 8.25H6v2.5h2.5v-2.5zm9.5 0h-7v2.5h7v-2.5zm-12 5h12v2.5H6v-2.5z",
                    fill: "currentColor"
                }))
            };
            const C = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.557 6.27L16.5 3h-9l2.943 3.27A7.003 7.003 0 005 13.096v7.875h14v-7.875a7.003 7.003 0 00-5.443-6.826zM12 17a4 4 0 100-8 4 4 0 000 8zm-2.121-4L12 10.879l2.121 2.12L12 15.122 9.879 13z",
                    fill: "currentColor"
                }))
            };
            const _ = function(e) {
                return s().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.456 3h6v6l-6-6zm-6 18h-6v-6l6 6zm3-16a7 7 0 110 14 7 7 0 010-14zm-2.5 4.5l2.5-2.5 2.5 2.5h-5zm0 5l-2.5-2.5 2.5-2.5v5zm5 0l-2.5 2.5-2.5-2.5h5zm0 0l2.5-2.5-2.5-2.5v5zM10.893 12l1.563 1.563L14.018 12l-1.562-1.563L10.893 12z",
                    fill: "currentColor"
                }))
            };
            var T = function(e) {
                    return (0, a.jsx)(l.A, (0, i.A)((0, n.A)({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M4 7.64l3.656 2.438L4.61 14.75 4 7.64zM7.656 15.563H5.422L11.922 5l3.656 4.875-7.922 5.688zM19.438 15.563H9.28l10.969-7.72-.813 7.72zM19.438 16.781H4.813V18h14.625v-1.219z",
                            fill: "currentColor"
                        })
                    }))
                },
                B = function(e) {
                    return (0, a.jsx)(l.A, (0, i.A)((0, n.A)({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M20.5051 15.8444V18.9251C19.9785 19.0831 19.3202 19.2148 18.346 19.2148C16.5028 19.2148 15.3442 18.5828 14.8176 17.1609C13.7906 18.3985 12.3161 19.3201 10.1306 19.3201C6.62854 19.3201 3.49512 16.7396 3.49512 12.0263V11.9737C3.49512 7.26037 6.57588 4.6799 9.91995 4.6799C12.0528 4.6799 13.3693 5.65416 14.3173 6.7864V4.94321H18.3196V14.4751C18.3196 15.5547 18.8199 15.9234 19.6888 15.9234C20.0048 15.9234 20.2945 15.897 20.5051 15.8444ZM10.9469 15.9234C12.8164 15.9234 14.3699 14.3698 14.3699 12.0263V11.9737C14.3699 9.63018 12.8164 8.07663 10.9469 8.07663C9.07735 8.07663 7.49747 9.60385 7.49747 11.9737V12.0263C7.49747 14.3698 9.07735 15.9234 10.9469 15.9234Z",
                            fill: "currentColor"
                        })
                    }))
                },
                E = "text-2xl text-t-primary",
                I = {
                    MAIN: (0, a.jsx)(c.A, {
                        className: E
                    }),
                    MARGIN: (0, a.jsx)(d, {
                        className: E
                    }),
                    FUTURE: (0, a.jsx)(p, {
                        className: E
                    }),
                    FIAT: (0, a.jsx)(f, {
                        className: E
                    }),
                    SAVING: (0, a.jsx)(h, {
                        className: E
                    }),
                    MINING: (0, a.jsx)(m, {
                        className: E
                    }),
                    CARD: (0, a.jsx)(v, {
                        className: E
                    }),
                    DELIVERY: (0, a.jsx)(g, {
                        className: E
                    }),
                    ISOLATED_MARGIN: (0, a.jsx)(b, {
                        className: E
                    }),
                    wazirx: (0, a.jsx)(T, {
                        className: E
                    }),
                    SWAP: (0, a.jsx)(x, {
                        className: E
                    }),
                    TOPTION: (0, a.jsx)(y, {
                        className: E
                    }),
                    STOCK: (0, a.jsx)(w, {
                        className: E
                    }),
                    STRATEGY: (0, a.jsx)(k, {
                        className: E
                    }),
                    COPY_TRADE: (0, a.jsx)(A, {
                        className: E
                    }),
                    PORTFOLIO_MARGIN: (0, a.jsx)(S, {
                        className: E
                    }),
                    LOAN: (0, a.jsx)(C, {
                        className: E
                    }),
                    NFT: (0, a.jsx)(_, {
                        className: E
                    }),
                    ALPHA: (0, a.jsx)(B, {
                        className: E
                    })
                },
                U = "Wallet_overview_v1",
                L = {
                    DEPOSIT: {
                        pageName: U,
                        elementID: "Wallet_overview_v1_balance_deposit"
                    },
                    WITHDRAW: {
                        pageName: U,
                        elementID: "Wallet_overview_v1_balance_withdraw"
                    },
                    TRANSFER: {
                        pageName: U,
                        elementID: "Wallet_overview_v1_balance_transfer"
                    }
                },
                D = {
                    MAIN: "spot",
                    MARGIN: "crossmargin",
                    FUTURE: "usdfutures",
                    FIAT: "",
                    SAVING: "earn",
                    MINING: "",
                    CARD: "funding",
                    DELIVERY: "coinfutures",
                    ISOLATED_MARGIN: "isolatedmargin",
                    SWAP: "",
                    TOPTION: "options",
                    STOCK: "",
                    STRATEGY: "tradingbots",
                    COPY_TRADE: "copytrading",
                    NFT: "nft",
                    PORTFOLIO_MARGIN: "portfolio",
                    LOAN: "loan",
                    ALPHA: "alpha"
                }
        },
        K9WZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                LR: () => w,
                f3: () => x,
                EY: () => Be,
                VW: () => f
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                a = r("aVXY"),
                o = r("DTvD"),
                s = r("i9es"),
                l = r("ah/i"),
                c = r("2eE9"),
                u = r("HS2I"),
                d = r("sKJi"),
                p = r("9pmv"),
                f = function(e) {
                    var t = e.walletAccounts,
                        r = e.hideMode,
                        f = e.totalQuoteAssetValue,
                        h = e.sortState,
                        m = (0, a.A)((0, u.useUserQuoteAssets)(), 1)[0],
                        v = (0, u.useCurrency)(),
                        g = v.currency,
                        b = v.currencyMap,
                        x = ((null === b || void 0 === b ? void 0 : b[g]) || {}).rate,
                        y = (0, u.useFiatPrice)(),
                        w = (0, s.pI)(),
                        k = h || {},
                        A = k.sortKey,
                        S = k.isDesc,
                        C = k.sortType,
                        _ = (0, o.useMemo)((function() {
                            var e;
                            if (!t) return [];
                            var a = null === t || void 0 === t ? void 0 : t.sort((function(e, t) {
                                    return Number(null === t || void 0 === t ? void 0 : t.balance) - Number(null === e || void 0 === e ? void 0 : e.balance)
                                })),
                                o = null === a || void 0 === a ? void 0 : a.map((function(e) {
                                    var t, r = y(+(null === e || void 0 === e ? void 0 : e.balance), m) || {},
                                        a = r.symbol,
                                        o = r.fiatPrice,
                                        s = r.fiatPriceNumber,
                                        c = r.code,
                                        u = null === (t = (0, l.k3)(s, x)) || void 0 === t ? void 0 : t.toNumber(),
                                        h = null === w || void 0 === w ? void 0 : w[(null === e || void 0 === e ? void 0 : e.accountType) || "MAIN"],
                                        v = +(null === e || void 0 === e ? void 0 : e.balance) >= f ? 1 : +(null === e || void 0 === e ? void 0 : e.balance) / f;
                                    return (0, i.A)((0, n.A)({}, e, h), {
                                        fiatPrice: s,
                                        ratio: +(null === e || void 0 === e ? void 0 : e.balance) / f,
                                        ratioPercentage: f ? (0, d.Ay)(v).format({
                                            output: "percent",
                                            mantissa: 2
                                        }) : "-",
                                        fiatPriceValue: o ? (0, d.vv)(s, {
                                            currencySymbol: a,
                                            currencyCode: c
                                        }) : 0,
                                        usdPrice: u,
                                        icon: p.NP[null === e || void 0 === e ? void 0 : e.accountType]
                                    })
                                }));
                            return null === (e = null === o || void 0 === o ? void 0 : o.filter((function(e) {
                                return !r || (null === e || void 0 === e ? void 0 : e.usdPrice) >= 1
                            }))) || void 0 === e ? void 0 : e.sort((0, c.xW)(A, S, C))
                        }), [t, r, f, A, S, C, y, x, m, w]);
                    return _
                },
                h = r("sViW"),
                m = r("Pz56"),
                v = r.n(m),
                g = r("VA12"),
                b = r("Hkrp"),
                x = function() {
                    return {
                        nftList: (0, b.s)((0, h.A)(v().mark((function e() {
                            var t;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, g.get)("/bapi/nft/v1/private/nft/nft-asset/wallet-asset");
                                    case 2:
                                        return t = e.sent, e.abrupt("return", (null === t || void 0 === t ? void 0 : t.data) || []);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [], {
                            value: []
                        }).value
                    }
                },
                y = r("KsKd"),
                w = function(e) {
                    var t = e.hideMode,
                        r = e.searchKeyword,
                        n = (0, y.CY)(),
                        i = n.holdingList,
                        a = n.loading,
                        l = (0, s.jm)(a),
                        c = (0, o.useMemo)((function() {
                            var e;
                            return null === (e = i || []) || void 0 === e ? void 0 : e.filter((function(e) {
                                return !t || (null === e || void 0 === e ? void 0 : e.valuationAmount) >= 1
                            }))
                        }), [i, t]);
                    return {
                        holdingList: (0, o.useMemo)((function() {
                            return null === c || void 0 === c ? void 0 : c.filter((function(e) {
                                var t = new RegExp(r, "i");
                                return t.test(null === e || void 0 === e ? void 0 : e.asset) || t.test(null === e || void 0 === e ? void 0 : e.assetName)
                            }))
                        }), [c, r]),
                        loading: a,
                        showSkeletonPlaceholder: l
                    }
                },
                k = r("6FIE"),
                A = r("ZSsA"),
                S = r("BQ33"),
                C = r.n(S),
                _ = r("F80R"),
                T = r("LQoT"),
                B = r("at8e");
            const E = () => {},
                I = E(),
                U = Object,
                L = e => e === I,
                D = e => "function" == typeof e,
                P = (e, t) => ({ ...e,
                    ...t
                }),
                R = new WeakMap;
            let O = 0;
            const M = e => {
                    const t = typeof e,
                        r = e && e.constructor,
                        n = r == Date;
                    let i, a;
                    if (U(e) !== e || n || r == RegExp) i = n ? e.toJSON() : "symbol" == t ? e.toString() : "string" == t ? JSON.stringify(e) : "" + e;
                    else {
                        if (i = R.get(e), i) return i;
                        if (i = ++O + "~", R.set(e, i), r == Array) {
                            for (i = "@", a = 0; a < e.length; a++) i += M(e[a]) + ",";
                            R.set(e, i)
                        }
                        if (r == U) {
                            i = "#";
                            const t = U.keys(e).sort();
                            for (; !L(a = t.pop());) L(e[a]) || (i += a + ":" + M(e[a]) + ",");
                            R.set(e, i)
                        }
                    }
                    return i
                },
                N = new WeakMap,
                j = {},
                z = {},
                F = "undefined",
                W = typeof document != F,
                H = (e, t) => {
                    const r = N.get(e);
                    return [() => !L(t) && e.get(t) || j, n => {
                        if (!L(t)) {
                            const i = e.get(t);
                            t in z || (z[t] = i), r[5](t, P(i, n), i || j)
                        }
                    }, r[6], () => !L(t) && t in z ? z[t] : !L(t) && e.get(t) || j]
                };
            let V = !0;
            const [K, G] = window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [E, E], q = {
                isOnline: () => V,
                isVisible: () => {
                    const e = W && document.visibilityState;
                    return L(e) || "hidden" !== e
                }
            }, Z = {
                initFocus: e => (W && document.addEventListener("visibilitychange", e), K("focus", e), () => {
                    W && document.removeEventListener("visibilitychange", e), G("focus", e)
                }),
                initReconnect: e => {
                    const t = () => {
                            V = !0, e()
                        },
                        r = () => {
                            V = !1
                        };
                    return K("online", t), K("offline", r), () => {
                        G("online", t), G("offline", r)
                    }
                }
            }, Y = !o.useId, X = "Deno" in window, Q = e => typeof window.requestAnimationFrame != F ? window.requestAnimationFrame(e) : setTimeout(e, 1), $ = X ? o.useEffect : o.useLayoutEffect, J = "undefined" !== typeof navigator && navigator.connection, ee = !X && J && (["slow-2g", "2g"].includes(J.effectiveType) || J.saveData), te = e => {
                if (D(e)) try {
                    e = e()
                } catch (r) {
                    e = ""
                }
                const t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? M(e) : "", t]
            };
            let re = 0;
            const ne = () => ++re;
            var ie = 3,
                ae = 0,
                oe = 2,
                se = 1;
            async function le(...e) {
                const [t, r, n, i] = e, a = P({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" === typeof i ? {
                    revalidate: i
                } : i || {});
                let o = a.populateCache;
                const s = a.rollbackOnError;
                let l = a.optimisticData;
                const c = a.throwOnError;
                if (D(r)) {
                    const e = r,
                        n = [],
                        i = t.keys();
                    for (const r of i) !/^\$(inf|sub)\$/.test(r) && e(t.get(r)._k) && n.push(r);
                    return Promise.all(n.map(u))
                }
                return u(r);
                async function u(r) {
                    const [i] = te(r);
                    if (!i) return;
                    const [u, d] = H(t, i), [p, f, h, m] = N.get(t), v = () => {
                        const e = p[i];
                        return (D(a.revalidate) ? a.revalidate(u().data, r) : !1 !== a.revalidate) && (delete h[i], delete m[i], e && e[0]) ? e[0](2).then((() => u().data)) : u().data
                    };
                    if (e.length < 3) return v();
                    let g, b = n;
                    const x = ne();
                    f[i] = [x, 0];
                    const y = !L(l),
                        w = u(),
                        k = w.data,
                        A = w._c,
                        S = L(A) ? k : A;
                    if (y && (l = D(l) ? l(S, k) : l, d({
                            data: l,
                            _c: S
                        })), D(b)) try {
                        b = b(S)
                    } catch (C) {
                        g = C
                    }
                    if (b && D(b.then)) {
                        if (b = await b.catch((e => {
                                g = e
                            })), x !== f[i][0]) {
                            if (g) throw g;
                            return b
                        }
                        g && y && (e => "function" === typeof s ? s(e) : !1 !== s)(g) && (o = !0, d({
                            data: S,
                            _c: I
                        }))
                    }
                    if (o && !g)
                        if (D(o)) {
                            const e = o(b, S);
                            d({
                                data: e,
                                error: I,
                                _c: I
                            })
                        } else d({
                            data: b,
                            error: I,
                            _c: I
                        });
                    if (f[i][1] = ne(), Promise.resolve(v()).then((() => {
                            d({
                                _c: I
                            })
                        })), !g) return b;
                    if (c) throw g
                }
            }
            const ce = (e, t) => {
                    for (const r in e) e[r][0] && e[r][0](t)
                },
                ue = (e, t) => {
                    if (!N.has(e)) {
                        const r = P(Z, t),
                            n = {},
                            i = le.bind(I, e);
                        let a = E;
                        const o = {},
                            s = (e, t) => {
                                const r = o[e] || [];
                                return o[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            l = (t, r, n) => {
                                e.set(t, r);
                                const i = o[t];
                                if (i)
                                    for (const e of i) e(r, n)
                            },
                            c = () => {
                                if (!N.has(e) && (N.set(e, [n, {}, {}, {}, i, l, s]), !X)) {
                                    const t = r.initFocus(setTimeout.bind(I, ce.bind(I, n, 0))),
                                        i = r.initReconnect(setTimeout.bind(I, ce.bind(I, n, 1)));
                                    a = () => {
                                        t && t(), i && i(), N.delete(e)
                                    }
                                }
                            };
                        return c(), [e, i, c, a]
                    }
                    return [e, N.get(e)[4]]
                },
                [de, pe] = ue(new Map),
                fe = P({
                    onLoadingSlow: E,
                    onSuccess: E,
                    onError: E,
                    onErrorRetry: (e, t, r, n, i) => {
                        const a = r.errorRetryCount,
                            o = i.retryCount,
                            s = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
                        !L(a) && o > a || setTimeout(n, s, i)
                    },
                    onDiscarded: E,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: ee ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: ee ? 5e3 : 3e3,
                    compare: (e, t) => M(e) == M(t),
                    isPaused: () => !1,
                    cache: de,
                    mutate: pe,
                    fallback: {}
                }, q),
                he = (e, t) => {
                    const r = P(e, t);
                    if (t) {
                        const {
                            use: n,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: o
                        } = t;
                        n && a && (r.use = n.concat(a)), i && o && (r.fallback = P(i, o))
                    }
                    return r
                },
                me = (0, o.createContext)({}),
                ve = window.__SWR_DEVTOOLS_USE__,
                ge = ve ? window.__SWR_DEVTOOLS_USE__ : [],
                be = e => D(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                xe = ge.concat((e => (t, r, n) => e(t, r && ((...e) => {
                    const [n] = te(t), [, , , i] = N.get(de);
                    if (n.startsWith("$inf$")) return r(...e);
                    const a = i[n];
                    return L(a) ? r(...e) : (delete i[n], a)
                }), n)));
            ve && (window.__SWR_DEVTOOLS_REACT__ = o);
            const ye = o.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    throw "rejected" === e.status ? e.reason : (e.status = "pending", e.then((t => {
                        e.status = "fulfilled", e.value = t
                    }), (t => {
                        e.status = "rejected", e.reason = t
                    })), e)
                }),
                we = {
                    dedupe: !0
                };
            U.defineProperty((e => {
                const {
                    value: t
                } = e, r = (0, o.useContext)(me), n = D(t), i = (0, o.useMemo)((() => n ? t(r) : t), [n, r, t]), a = (0, o.useMemo)((() => n ? i : he(r, i)), [n, r, i]), s = i && i.provider, l = (0, o.useRef)(I);
                s && !l.current && (l.current = ue(s(a.cache || de), i));
                const c = l.current;
                return c && (a.cache = c[0], a.mutate = c[1]), $((() => {
                    if (c) return c[2] && c[2](), c[3]
                }), []), (0, o.createElement)(me.Provider, P(e, {
                    value: a
                }))
            }), "defaultValue", {
                value: fe
            });
            const ke = (Ae = (e, t, r) => {
                const {
                    cache: n,
                    compare: i,
                    suspense: a,
                    fallbackData: s,
                    revalidateOnMount: l,
                    revalidateIfStale: c,
                    refreshInterval: u,
                    refreshWhenHidden: d,
                    refreshWhenOffline: p,
                    keepPreviousData: f
                } = r, [h, m, v, g] = N.get(n), [b, x] = te(e), y = (0, o.useRef)(!1), w = (0, o.useRef)(!1), k = (0, o.useRef)(b), A = (0, o.useRef)(t), S = (0, o.useRef)(r), C = () => S.current, _ = () => C().isVisible() && C().isOnline(), [T, E, U, R] = H(n, b), O = (0, o.useRef)({}).current, M = L(s) ? r.fallback[b] : s, j = (e, t) => {
                    for (const r in O) {
                        const n = r;
                        if ("data" === n) {
                            if (!i(e[n], t[n])) {
                                if (!L(e[n])) return !1;
                                if (!i(J, t[n])) return !1
                            }
                        } else if (t[n] !== e[n]) return !1
                    }
                    return !0
                }, z = (0, o.useMemo)((() => {
                    const e = !!b && !!t && (L(l) ? !C().isPaused() && !a && (!!L(c) || c) : l),
                        r = t => {
                            const r = P(t);
                            return delete r._k, e ? {
                                isValidating: !0,
                                isLoading: !0,
                                ...r
                            } : r
                        },
                        n = T(),
                        i = R(),
                        o = r(n),
                        s = n === i ? o : r(i);
                    let u = o;
                    return [() => {
                        const e = r(T());
                        return j(e, u) ? (u.data = e.data, u.isLoading = e.isLoading, u.isValidating = e.isValidating, u.error = e.error, u) : (u = e, e)
                    }, () => s]
                }), [n, b]), F = (0, B.useSyncExternalStore)((0, o.useCallback)((e => U(b, ((t, r) => {
                    j(r, t) || e()
                }))), [n, b]), z[0], z[1]), W = !y.current, V = h[b] && h[b].length > 0, K = F.data, G = L(K) ? M : K, q = F.error, Z = (0, o.useRef)(G), J = f ? L(K) ? Z.current : K : G, ee = !(V && !L(q)) && (W && !L(l) ? l : !C().isPaused() && (a ? !L(G) && c : L(G) || c)), re = !!(b && t && W && ee), ce = L(F.isValidating) ? re : F.isValidating, ue = L(F.isLoading) ? re : F.isLoading, de = (0, o.useCallback)((async e => {
                    const t = A.current;
                    if (!b || !t || w.current || C().isPaused()) return !1;
                    let n, a, o = !0;
                    const s = e || {},
                        l = !v[b] || !s.dedupe,
                        c = () => Y ? !w.current && b === k.current && y.current : b === k.current,
                        u = {
                            isValidating: !1,
                            isLoading: !1
                        },
                        d = () => {
                            E(u)
                        },
                        p = () => {
                            const e = v[b];
                            e && e[1] === a && delete v[b]
                        },
                        f = {
                            isValidating: !0
                        };
                    L(T().data) && (f.isLoading = !0);
                    try {
                        if (l && (E(f), r.loadingTimeout && L(T().data) && setTimeout((() => {
                                o && c() && C().onLoadingSlow(b, r)
                            }), r.loadingTimeout), v[b] = [t(x), ne()]), [n, a] = v[b], n = await n, l && setTimeout(p, r.dedupingInterval), !v[b] || v[b][1] !== a) return l && c() && C().onDiscarded(b), !1;
                        u.error = I;
                        const e = m[b];
                        if (!L(e) && (a <= e[0] || a <= e[1] || 0 === e[1])) return d(), l && c() && C().onDiscarded(b), !1;
                        const s = T().data;
                        u.data = i(s, n) ? s : n, l && c() && C().onSuccess(n, b, r)
                    } catch (g) {
                        p();
                        const e = C(),
                            {
                                shouldRetryOnError: t
                            } = e;
                        e.isPaused() || (u.error = g, l && c() && (e.onError(g, b, e), (!0 === t || D(t) && t(g)) && (C().revalidateOnFocus && C().revalidateOnReconnect && !_() || e.onErrorRetry(g, b, e, (e => {
                            const t = h[b];
                            t && t[0] && t[0](ie, e)
                        }), {
                            retryCount: (s.retryCount || 0) + 1,
                            dedupe: !0
                        }))))
                    }
                    return o = !1, d(), !0
                }), [b, n]), pe = (0, o.useCallback)(((...e) => le(n, k.current, ...e)), []);
                if ($((() => {
                        A.current = t, S.current = r, L(K) || (Z.current = K)
                    })), $((() => {
                        if (!b) return;
                        const e = de.bind(I, we);
                        let t = 0;
                        const r = ((e, t, r) => {
                            const n = t[e] || (t[e] = []);
                            return n.push(r), () => {
                                const e = n.indexOf(r);
                                e >= 0 && (n[e] = n[n.length - 1], n.pop())
                            }
                        })(b, h, ((r, n = {}) => {
                            if (r == ae) {
                                const r = Date.now();
                                C().revalidateOnFocus && r > t && _() && (t = r + C().focusThrottleInterval, e())
                            } else if (r == se) C().revalidateOnReconnect && _() && e();
                            else {
                                if (r == oe) return de();
                                if (r == ie) return de(n)
                            }
                        }));
                        return w.current = !1, k.current = b, y.current = !0, E({
                            _k: x
                        }), ee && (L(G) || X ? e() : Q(e)), () => {
                            w.current = !0, r()
                        }
                    }), [b]), $((() => {
                        let e;

                        function t() {
                            const t = D(u) ? u(T().data) : u;
                            t && -1 !== e && (e = setTimeout(r, t))
                        }

                        function r() {
                            T().error || !d && !C().isVisible() || !p && !C().isOnline() ? t() : de(we).then(t)
                        }
                        return t(), () => {
                            e && (clearTimeout(e), e = -1)
                        }
                    }), [u, d, p, b]), (0, o.useDebugValue)(J), a && L(G) && b) {
                    if (!Y && X) throw new Error("Fallback data is required when using suspense in SSR.");
                    A.current = t, S.current = r, w.current = !1;
                    const e = g[b];
                    if (!L(e)) {
                        const t = pe(e);
                        ye(t)
                    }
                    if (!L(q)) throw q; {
                        const e = de(we);
                        L(J) || (e.status = "fulfilled", e.value = !0), ye(e)
                    }
                }
                return {
                    mutate: pe,
                    get data() {
                        return O.data = !0, J
                    },
                    get error() {
                        return O.error = !0, q
                    },
                    get isValidating() {
                        return O.isValidating = !0, ce
                    },
                    get isLoading() {
                        return O.isLoading = !0, ue
                    }
                }
            }, function(...e) {
                const t = P(fe, (0, o.useContext)(me)),
                    [r, n, i] = be(e),
                    a = he(t, i);
                let s = Ae;
                const {
                    use: l
                } = a, c = (l || []).concat(xe);
                for (let o = c.length; o--;) s = c[o](s);
                return s(r, n || a.fetcher || null, a)
            });
            var Ae;
            const Se = ((e, t) => (...r) => {
                const [n, i, a] = be(r), o = (a.use || []).concat(t);
                return e(n, i, { ...a,
                    use: o
                })
            })(ke, (e => (t, r, n) => (n.revalidateOnFocus = !1, n.revalidateIfStale = !1, n.revalidateOnReconnect = !1, e(t, r, n))));
            var Ce = r("vW+O"),
                _e = C()().endOf("day").valueOf(),
                Te = {
                    startTime: C()(_e).subtract(90, "days").startOf("day").valueOf(),
                    endTime: _e,
                    page: {
                        limit: 5,
                        offset: 0
                    }
                },
                Be = function() {
                    (0, A.s9)("exchange-wallet").t;
                    var e = Se("capitalDepositList", (function() {
                            return (0, _.RV)(Te).then((function(e) {
                                return e.rows.map((function(e) {
                                    return {
                                        type: "Deposit",
                                        time: e.insertTime,
                                        timeStr: (0, Ce.Yq)(e.insertTime),
                                        coin: e.coin,
                                        id: e.id,
                                        statusName: "deposit-statusName-".concat(e.status),
                                        statusNameColor: "1" === String(e.status) ? "text-t-TextBuy" : "text-t-third",
                                        status: e.status,
                                        amount: e.transferAmount,
                                        gtrStatus: e.gtrStatus
                                    }
                                }))
                            }))
                        })),
                        t = e.data,
                        r = e.mutate,
                        n = e.isLoading,
                        i = Se("capitalWithdrawList", (function() {
                            return (0, T.hW)(Te).then((function(e) {
                                return e.rows.map((function(e) {
                                    return {
                                        type: "Withdraw",
                                        time: e.applyTime,
                                        timeStr: (0, Ce.Yq)(e.applyTime),
                                        coin: e.coin,
                                        id: e.id,
                                        statusName: "withdraw-statusName-".concat(e.status),
                                        statusNameColor: "6" === String(e.status) ? "text-t-TextBuy" : "text-t-third",
                                        status: e.status,
                                        amount: e.transferAmount
                                    }
                                }))
                            }))
                        })),
                        a = i.data,
                        s = i.isLoading,
                        l = i.mutate,
                        c = Se("AlphaTransfer", (function() {
                            return (0, k.post)("/bapi/asset/v1/private/asset-service/wallet/transfer-history", {
                                asset: "",
                                fromAccount: "ALPHA",
                                toAccount: "MAIN",
                                startTime: Te.startTime,
                                endTime: Te.endTime,
                                page: 1,
                                rows: 20
                            }).then((function(e) {
                                return e.data.map((function(e) {
                                    return {
                                        type: "AlphaTransfer",
                                        time: e.createTime,
                                        timeStr: (0, Ce.Yq)(e.createTime, "YMDHM"),
                                        coin: e.asset,
                                        id: e.createTime,
                                        statusName: "exchange-common-completed",
                                        statusNameColor: "text-t-TextBuy",
                                        status: 1,
                                        amount: e.amount
                                    }
                                }))
                            }))
                        })),
                        u = c.data,
                        d = c.isLoading,
                        p = c.mutate;
                    return {
                        listInfo: (0, o.useMemo)((function() {
                            var e = (t || []).concat(a || []).concat(u || []);
                            return e.sort((function(e, t) {
                                return t.time - e.time
                            })), e
                        }), [t, a, u]),
                        loading: n || s || d,
                        onRefresh: function() {
                            r(), l(), p()
                        }
                    }
                }
        },
        "d3/B": (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => $t
            });
            var n = r("TrCV"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("ZSsA"),
                s = r("i9es"),
                l = r("KsKd"),
                c = r("NoXm"),
                u = r("mUtb"),
                d = r("OFK0"),
                p = r("lGeg"),
                f = r("72cf"),
                h = r("HS2I"),
                m = r("9pmv"),
                v = r("aVXY"),
                g = r("nN5o"),
                b = r("IdNO"),
                x = r("sitK"),
                y = r("AGKK"),
                w = function() {
                    var e = (0, s.sx)(),
                        t = e.totalAssetBalance,
                        r = e.loading,
                        a = (0, i.useCallback)((function(e) {
                            (0, u.qL)({
                                pageName: m.D4,
                                elementID: e ? "Wallet_overview_v1_show_balance" : "Wallet_overview_v1_hide_balance"
                            })
                        }), []);
                    return (0, n.jsx)(p.H, {
                        supportSwitchAsset: !0,
                        isLoading: r,
                        totalQuoteAssetValue: t,
                        switchBalanceTrackFn: a,
                        onQuoteAssetChange: function() {
                            (0, u.qL)({
                                pageName: m.D4,
                                elementID: "Wallet_overview_v1_change_coin"
                            })
                        },
                        totalAssetBalance: t
                    })
                };
            const k = (0, i.memo)(w);
            var A = [{
                key: "exchange-dashboard-trend-1w",
                defaultValue: "1W",
                id: 7
            }, {
                key: "exchange-dashboard-trend-1m",
                defaultValue: "1M",
                id: 30
            }, {
                key: "exchange-dashboard-trend-3m",
                defaultValue: "3M",
                id: 90
            }, {
                key: "exchange-dashboard-trend-6m",
                defaultValue: "6M",
                id: 180
            }];
            const S = function(e) {
                var t = e.className,
                    r = e.onChange,
                    a = (0, o.s9)().t,
                    s = (0, i.useState)(30),
                    l = s[0],
                    c = s[1];
                return (0, n.jsx)(y.Ay, {
                    className: "flex items-center ".concat(t),
                    children: A.map((function(e) {
                        var t = e.id,
                            i = e.defaultValue,
                            o = e.key;
                        return (0, n.jsx)(y.Ay, {
                            className: "rounded-s mr-m px-2xs py-4xs cursor-pointer ".concat(l === t ? "text-t-primary" : "text-t-third", " ").concat(l === t ? "bg-bg3" : "bg-bg1", " hover:bg-bg3 hover:text-t-primary last:mr-0"),
                            children: (0, n.jsx)(y.Ay, {
                                id: "btn-DateTabs-setCurrentSelect-".concat(t),
                                className: l === t ? "caption1" : "caption2",
                                onClick: function() {
                                    c(t), r(t)
                                },
                                children: a(o, i)
                            })
                        }, t)
                    }))
                })
            };
            var C, _, T, B, E = r("tEf9"),
                I = r("BK7R"),
                U = r("gZfF"),
                L = r("LCuF"),
                D = r("sViW"),
                P = r("ezuS"),
                R = r("QUKP"),
                O = r("Pz56"),
                M = r.n(O),
                N = r("hTvQ"),
                j = r.n(N),
                z = r("RX+5"),
                F = r.n(z),
                W = r("nnRT"),
                H = r.n(W),
                V = r("LPC+"),
                K = r.n(V),
                G = r("Z3AG"),
                q = r.n(G),
                Z = r("Cl8C");

            function Y(e) {
                return "string" === typeof e
            }

            function X(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }

            function Q(e) {
                return "number" === typeof e
            }

            function $(e, t) {
                var r = parseFloat("".concat(e));
                return isNaN(r) || isNaN(t) ? "NaN" : t <= 0 ? r.toFixed(0) : new(F())(e).toFixed(t)
            }

            function J(e, t, r) {
                var n, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = [20, 50, 100],
                    o = (e - t) / r,
                    s = Math.floor(Math.log10(o) - 1),
                    l = o / (s = Math.pow(10, s)),
                    c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c] >= l) {
                        n = a[c] * s;
                        break
                    }
                var u = 0,
                    d = 0,
                    p = 0;
                return u = Math.ceil(e / n) * n, d = Math.floor(t / n) * n, (null === i || void 0 === i ? void 0 : i.bottom) && (u += .99 * n), (null === i || void 0 === i ? void 0 : i.top) && (p = .5 * n, d -= .5 * n), {
                    max: u,
                    min: d,
                    step: n,
                    startStep: p
                }
            }

            function ee() {
                return window.devicePixelRatio || 1
            }

            function te() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g,
                    r = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
                return t.test(e) || r.test(e)
            }

            function re() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = "".concat(t, "px sans-serif");
                if (!B) {
                    var i = document.createElement("canvas");
                    B = i.getContext("2d")
                }
                B.font = n;
                var a = Math.round(B.measureText(e.trim()).width);
                return r > 1 ? Math.round(a / r) * r : a
            }

            function ne(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.style && Object.keys(t).forEach((function(r) {
                    e.style[r] = t[r]
                }))
            }

            function ie(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e && Object.keys(t).forEach((function(r) {
                    e[r] = t[r]
                }))
            }

            function ae(e, t, r) {
                var n = ee(),
                    i = e.getContext("2d");
                e.style.width = "".concat(t, "px"), e.style.height = "".concat(r, "px"), e.width = t * n, e.height = r * n, null === i || void 0 === i || i.scale(n, n), i.font = "12px sans-serif"
            }

            function oe(e) {
                if (e.length < 1) return [];
                e.unshift(e[0]), e.push(e[e.length - 1], e[e.length - 1]);
                for (var t = [], r = 1; r < e.length - 2; r++) t.push({
                    dx: e[r].x,
                    dy: e[r].y,
                    cpx1: e[r].x + (e[r + 1].x - e[r - 1].x) / 4,
                    cpy1: e[r].y + (e[r + 1].y - e[r - 1].y) / 4,
                    cpx2: e[r + 1].x - (e[r + 2].x - e[r].x) / 4,
                    cpy2: e[r + 1].y - (e[r + 2].y - e[r].y) / 4
                });
                return t
            }

            function se(e, t, r, n, i, a) {
                var o = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                    s = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
                    l = o ? a : 0,
                    c = s ? a : 0;
                e.beginPath(), e.moveTo(t, r + l), e.arc(t + l, r + l, l, Math.PI, 1.5 * Math.PI), e.lineTo(t + n - l, r), e.arc(t + n - l, r + l, l, 1.5 * Math.PI, 2 * Math.PI), e.lineTo(t + n, r + i - c), e.arc(t + n - c, r + i - c, c, 0, .5 * Math.PI), e.lineTo(t + c, r + i), e.arc(t + c, r + i - c, c, .5 * Math.PI, Math.PI), e.closePath()
            }! function(e) {
                e[e.Circle = 0] = "Circle", e[e.Line = 1] = "Line", e[e.Path = 2] = "Path", e[e.Rect = 3] = "Rect", e[e.RoundRect = 4] = "RoundRect", e[e.Text = 5] = "Text", e[e.Area = 6] = "Area", e[e.ImageLayer = 7] = "ImageLayer", e[e.GroupLayer = 8] = "GroupLayer", e[e.Axis = 9] = "Axis"
            }(C || (C = {})),
            function(e) {
                e.Line = "LINE", e.Bar = "BAR", e.Area = "AREA"
            }(_ || (_ = {})),
            function(e) {
                e.Line = "LINE", e.DottedLine = "DOTTED-LINE", e.Shadow = "SHADOW", e.Cross = "CROSS", e.Snap = "SNAP"
            }(T || (T = {}));
            var le = '<svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.6096 30L6.83425 36.7383L0 30L6.83425 23.2031L13.6096 30ZM30.165 13.5352L41.8303 25.1367L48.6646 18.3398L30.165 0L11.6654 18.3984L18.4996 25.1953L30.165 13.5352ZM53.4957 23.2031L46.7203 30L53.5546 36.7969L60.3888 30L53.4957 23.2031ZM30.165 46.4648L18.4996 34.8047L11.6654 41.6016L30.165 60L48.6646 41.6016L41.8303 34.8047L30.165 46.4648ZM30.165 36.7383L36.9992 29.9414L30.165 23.2031L23.3307 30L30.165 36.7383ZM102.042 37.4414V37.3242C102.042 32.9297 99.6858 30.7031 95.8562 29.2383C98.2129 27.9492 100.216 25.8398 100.216 22.1484V22.0312C100.216 16.875 96.033 13.5352 89.3166 13.5352H73.9395V46.4062H89.6701C97.1524 46.4648 102.042 43.418 102.042 37.4414ZM92.9694 23.3789C92.9694 25.8398 90.9662 26.8359 87.7258 26.8359H81.0094V19.8633H88.1972C91.2608 19.8633 92.9694 21.0938 92.9694 23.2617V23.3789ZM94.7957 36.5039C94.7957 38.9648 92.8515 40.0781 89.6701 40.0781H81.0094V32.8711H89.4344C93.1461 32.8711 94.7957 34.2188 94.7957 36.4453V36.5039ZM117.302 46.4648V13.5352H109.996V46.4062H117.302V46.4648ZM156.422 46.4648V13.5352H149.234V33.8086L133.739 13.5352H127.023V46.4062H134.211V25.5469L150.236 46.4648H156.422ZM196.72 46.4648L182.522 13.3594H175.805L161.606 46.4648H169.089L172.093 39.082H186.057L189.061 46.4648H196.72ZM183.464 32.6953H174.686L179.104 22.0312L183.464 32.6953ZM231.422 46.4648V13.5352H224.234V33.8086L208.739 13.5352H202.023V46.4062H209.211V25.5469L225.236 46.4648H231.422ZM268.951 41.1328L264.297 36.5039C261.705 38.8477 259.407 40.3711 255.577 40.3711C249.921 40.3711 245.974 35.6836 245.974 30.0586V29.8828C245.974 24.2578 249.98 19.6289 255.577 19.6289C258.877 19.6289 261.469 21.0352 264.061 23.3203L268.716 17.9883C265.652 15 261.94 12.8906 255.695 12.8906C245.562 12.8906 238.433 20.5664 238.433 29.8828V30C238.433 39.4336 245.679 46.9336 255.401 46.9336C261.764 46.9922 265.534 44.7656 268.951 41.1328ZM300 46.4648V40.0195H282.031V33.1055H297.643V26.6602H282.031V19.9805H299.764V13.5352H274.843V46.4062H300V46.4648Z" fill="#1E2329"/>\n</svg>\n',
                ce = '<svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.6096 30L6.83425 36.7383L0 30L6.83425 23.2031L13.6096 30ZM30.165 13.5352L41.8303 25.1367L48.6646 18.3398L30.165 0L11.6654 18.3984L18.4996 25.1953L30.165 13.5352ZM53.4957 23.2031L46.7203 30L53.5546 36.7969L60.3888 30L53.4957 23.2031ZM30.165 46.4648L18.4996 34.8047L11.6654 41.6016L30.165 60L48.6646 41.6016L41.8303 34.8047L30.165 46.4648ZM30.165 36.7383L36.9992 29.9414L30.165 23.2031L23.3307 30L30.165 36.7383ZM102.042 37.4414V37.3242C102.042 32.9297 99.6858 30.7031 95.8562 29.2383C98.2129 27.9492 100.216 25.8398 100.216 22.1484V22.0312C100.216 16.875 96.033 13.5352 89.3166 13.5352H73.9395V46.4062H89.6701C97.1524 46.4648 102.042 43.418 102.042 37.4414ZM92.9694 23.3789C92.9694 25.8398 90.9662 26.8359 87.7258 26.8359H81.0094V19.8633H88.1972C91.2608 19.8633 92.9694 21.0938 92.9694 23.2617V23.3789ZM94.7957 36.5039C94.7957 38.9648 92.8515 40.0781 89.6701 40.0781H81.0094V32.8711H89.4344C93.1461 32.8711 94.7957 34.2188 94.7957 36.4453V36.5039ZM117.302 46.4648V13.5352H109.996V46.4062H117.302V46.4648ZM156.422 46.4648V13.5352H149.234V33.8086L133.739 13.5352H127.023V46.4062H134.211V25.5469L150.236 46.4648H156.422ZM196.72 46.4648L182.522 13.3594H175.805L161.606 46.4648H169.089L172.093 39.082H186.057L189.061 46.4648H196.72ZM183.464 32.6953H174.686L179.104 22.0312L183.464 32.6953ZM231.422 46.4648V13.5352H224.234V33.8086L208.739 13.5352H202.023V46.4062H209.211V25.5469L225.236 46.4648H231.422ZM268.951 41.1328L264.297 36.5039C261.705 38.8477 259.407 40.3711 255.577 40.3711C249.921 40.3711 245.974 35.6836 245.974 30.0586V29.8828C245.974 24.2578 249.98 19.6289 255.577 19.6289C258.877 19.6289 261.469 21.0352 264.061 23.3203L268.716 17.9883C265.652 15 261.94 12.8906 255.695 12.8906C245.562 12.8906 238.433 20.5664 238.433 29.8828V30C238.433 39.4336 245.679 46.9336 255.401 46.9336C261.764 46.9922 265.534 44.7656 268.951 41.1328ZM300 46.4648V40.0195H282.031V33.1055H297.643V26.6602H282.031V19.9805H299.764V13.5352H274.843V46.4062H300V46.4648Z" fill="#EAECEF"/>\n</svg>\n',
                ue = new Map;

            function de(e) {
                var t, r = function(e) {
                        var t = ee();
                        e.scale(t, t), ie(e, {
                            font: "12px sans-serif"
                        })
                    },
                    n = function(e, t) {
                        if (qe.has(e)) return qe.get(e);
                        var r = document.createElement("canvas"),
                            n = r.getContext("2d");
                        return t(r, n), qe.set(e, r), r
                    },
                    i = function(e, t, r) {
                        var n, i;
                        ue.has(e) ? n = null === (i = ue.get(e)) || void 0 === i ? void 0 : i.image : ((n = r ? new Image(r.width, r.height) : new Image).src = t, ue.set(e, {
                            url: t,
                            image: n
                        }));
                        return new Promise((function(e, t) {
                            n.complete ? e(n) : (n.onload = function() {
                                e(n)
                            }, n.onerror = function(e) {
                                t(e)
                            })
                        }))
                    },
                    o = function() {
                        qe.clear()
                    },
                    s = function() {
                        return We.visible && We.isLeft ? We.width : 0
                    },
                    l = function() {
                        return We.visible && We.isLeft ? 0 : Ne - We.width
                    },
                    c = function(e) {
                        return -(e - We.minValue) / (We.maxValue - We.minValue) * (je - Fe.height)
                    },
                    u = function(e) {
                        return We.maxValue - e / (je - Fe.height) * (We.maxValue - We.minValue)
                    },
                    d = function() {
                        return Q(Fe.boundaryGap) && Fe.boundaryGap > 0
                    },
                    p = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = h(),
                            n = t && We.isLeft ? We.width : 0;
                        return (n += d() ? Fe.boundaryGap : Fe.boundaryGap ? .5 * r : 0) + e * r
                    },
                    f = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = h(),
                            n = t && We.isLeft ? We.width : 0;
                        return n += d() ? Fe.boundaryGap : Fe.boundaryGap ? .5 * r : 0, Math.round((e - n) / r)
                    },
                    h = function() {
                        var e = g(),
                            t = Fe.data,
                            r = t.length - 1;
                        return d() && (e -= 2 * Fe.boundaryGap), !d() && Fe.boundaryGap && (r = t.length), r > 0 ? e / r : 0
                    },
                    m = function() {
                        return Fe.visible ? je - Fe.height : je
                    },
                    g = function() {
                        return Ne - We.width
                    },
                    b = function() {
                        return We.isLeft ? We.width : 0
                    },
                    x = function() {
                        return We.isLeft ? Ne : g()
                    },
                    y = function(e, t) {
                        return e - t <= 0
                    },
                    w = function(e, t) {
                        return e + t > g()
                    },
                    k = function(e, t) {
                        return e - t <= 0
                    },
                    A = function(e) {
                        var t = s();
                        return e > t && e <= t + g()
                    },
                    S = function(e) {
                        return e < m() && e >= 0
                    },
                    B = function(e, t) {
                        if (X(Fe.splitInterval)) return Fe.splitInterval(Fe.data[e], e, Fe.data);
                        var r = Q(Fe.splitInterval) ? Fe.splitInterval : Fe.tickInterval;
                        return void 0 !== t && t >= r
                    },
                    U = function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        var i;
                        return We.formmat ? (i = We).formmat.apply(i, [e].concat((0, E.A)(r))) : $(e, We.tickSize)
                    },
                    L = function(e) {
                        var t = Y(Fe.formmat) ? function(e) {
                            return function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD hh:mm:ss";
                                try {
                                    var r = new Date(e),
                                        n = {
                                            "M+": r.getMonth() + 1,
                                            "D+": r.getDate(),
                                            "h+": r.getHours(),
                                            "m+": r.getMinutes(),
                                            "s+": r.getSeconds()
                                        };
                                    return /(Y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(r.getFullYear()).substr(4 - RegExp.$1.length))), Object.keys(n).forEach((function(e) {
                                        if (new RegExp("(".concat(e, ")")).test(t)) {
                                            var r = n[e];
                                            t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? r : "00".concat(r).substr("".concat(r).length))
                                        }
                                    })), t
                                } catch (i) {
                                    return console.error(i.message), e
                                }
                            }(e, Fe.formmat)
                        } : Fe.formmat;
                        return t(Fe.data[e], e, Fe.data)
                    },
                    O = function(t, r) {
                        var n = e.getBoundingClientRect(),
                            i = n.width,
                            a = n.height;
                        t = t || i, r = r || a;
                        var o = ee();
                        Re.width = De.width = t * o, Re.height = De.height = r * o, Ne = t, je = r
                    },
                    N = function(e) {
                        Me.style.display = e ? "block" : "none"
                    },
                    z = function(e) {
                        var t = ee();
                        e.clearRect(0, 0, Ne * t, je * t)
                    },
                    F = function() {
                        var e, t = function() {
                                for (var e = [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], t = e[0], r = e[1], n = 0, i = Ke.length; n < i; n++) {
                                    var a = Ke[n].data,
                                        o = void 0 === a ? [] : a;
                                    t = Math.max(t, K()(o)), r = Math.min(r, q()(o))
                                }
                                if (Math.abs(t - r) <= Math.pow(10, -We.tickSize)) {
                                    var s = 0 === t ? 10 : Math.abs(t),
                                        l = Math.floor(Math.log(s) / Math.log(10)),
                                        c = Math.pow(10, l) / 2;
                                    t += c, r -= c
                                }
                                return {
                                    max: t,
                                    min: r
                                }
                            }(),
                            r = t.max,
                            n = t.min;
                        if (We.ticks = function(e, t) {
                                var r = Fe.visible ? je - Fe.height : je,
                                    n = Math.floor(r / We.tickInterval),
                                    i = Q(We.min) ? We.min : t,
                                    a = Q(We.max) ? We.max : e + (e - i) / r * 16,
                                    o = Math.abs(a - i),
                                    s = J(a + .01 * o, i - .01 * o, n, null === We || void 0 === We ? void 0 : We.parallel),
                                    l = s.max,
                                    u = s.min,
                                    d = s.step,
                                    p = s.startStep;
                                We.minValue = Q(We.min) && (We.min < u || 0 === We.min) ? We.min : u, We.maxValue = Q(We.max) && We.max > l ? We.max : l;
                                for (var f = [], h = u + p; h - l < 1e-8;) h >= We.minValue && We.minValue <= We.maxValue && f.push({
                                    p: c(h) - 5,
                                    v: h
                                }), h += d;
                                return f
                            }(r, n), "function" === typeof(null === We || void 0 === We ? void 0 : We.onTicksChange) && (null === (e = We.onTicksChange) || void 0 === e || e.call(We, We.ticks)), We.visible) {
                            var i, a = (0, E.A)(null !== (i = null === We || void 0 === We ? void 0 : We.ticks) && void 0 !== i ? i : []),
                                o = (0, E.A)((null === We || void 0 === We ? void 0 : We.parallel) ? function(e, t, r, n, i) {
                                    for (var a, o, s = i ? n - Fe.height : n, l = Math.floor(s / r), u = Math.abs(e - t), d = J(e + .01 * u, t - .01 * u, l, {
                                            top: null === We || void 0 === We || null === (a = We.parallel) || void 0 === a ? void 0 : a.bottom,
                                            bottom: null === We || void 0 === We || null === (o = We.parallel) || void 0 === o ? void 0 : o.top
                                        }), p = d.max, f = d.min, h = d.step, m = [], v = f + d.startStep; v - p < 1e-8;) v >= t && t <= e && m.push({
                                        p: c(v),
                                        v: v
                                    }), v += h;
                                    return m
                                }(We.parallel.max, null === We || void 0 === We ? void 0 : We.parallel.min, null === We || void 0 === We ? void 0 : We.parallel.interval, null === We || void 0 === We ? void 0 : We.parallel.height, null === We || void 0 === We ? void 0 : We.parallel.xAxisVisible) : []),
                                s = (0, E.A)(a.map((function(e) {
                                    var t = e.v;
                                    return re("".concat(U(t)), Ge.fontSize, 1)
                                }))).concat((0, E.A)(o.map((function(e) {
                                    var t, r = e.v;
                                    return re("".concat((null === We || void 0 === We || null === (t = We.parallel) || void 0 === t ? void 0 : t.formatter) ? null === We || void 0 === We ? void 0 : We.parallel.formatter(r) : U(r)), Ge.fontSize, 1)
                                }))));
                            We.width = s.length > 0 ? Math.ceil(K()(s)) + 10 : 0
                        } else We.width = 0
                    },
                    W = function() {
                        if (Ge.xAxisLayers.length = 0, !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) || Ge.isShowGrid) {
                            var e = function() {
                                for (var e, t, r = Fe.data, n = r.length, i = 0, a = -Number.MAX_SAFE_INTEGER, o = [], s = 0; s < n; s++) {
                                    var l = p(s);
                                    e = s, t = l - a, (Q(Fe.tickInterval) ? t >= Fe.tickInterval : X(Fe.tickInterval) && Fe.tickInterval(r[e], e, r)) && (0 === i && l > 1e-5 && (i = l - a), a = l, o.push({
                                        index: s,
                                        p: a
                                    }))
                                }
                                return o
                            }();
                            if (!(e.length <= 0)) {
                                var t, r, n, i, a, o, s, l, u, d = 10,
                                    f = {
                                        strokeStyle: Ge.gridLineColor,
                                        fillStyle: null !== (r = null !== (t = Ge.gridAxisTextColor) && void 0 !== t ? t : Ge.tickTextColor) && void 0 !== r ? r : Ge.timeTextColor,
                                        textAlign: "center",
                                        textBaseline: "top",
                                        font: "".concat(null !== (n = Fe.fontSize) && void 0 !== n ? n : "12", "px ").concat(null !== (i = Fe.fontStyle) && void 0 !== i ? i : "sans-serif")
                                    },
                                    h = {
                                        type: C.GroupLayer,
                                        layers: [],
                                        isStroke: !1,
                                        isFill: !1,
                                        style: (0, I.A)({}, f)
                                    },
                                    m = {
                                        type: C.GroupLayer,
                                        layers: [],
                                        isStroke: !0,
                                        isFill: !1,
                                        style: (0, R.A)((0, I.A)({}, f), {
                                            fillStyle: null !== (a = Ge.gridAxisTextColor) && void 0 !== a ? a : Ge.tickTextColor,
                                            strokeStyle: null !== (o = Ge.gridAxisTextColor) && void 0 !== o ? o : Ge.tickTextColor
                                        })
                                    },
                                    v = {
                                        type: C.GroupLayer,
                                        layers: [],
                                        isStroke: !0,
                                        isFill: !1,
                                        style: (0, R.A)((0, I.A)({}, f), {
                                            fillStyle: null !== (s = Ge.gridLineColor) && void 0 !== s ? s : Ge.tickTextColor
                                        })
                                    },
                                    b = c(We.maxValue),
                                    x = c(We.minValue),
                                    y = e[0],
                                    w = L(y.index);
                                if (!We.isLeft && y.p - .5 * re(w, 10, 1) < 0) !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Ge.xAxisLayers.push({
                                    type: C.Text,
                                    x: y.p,
                                    y: d + (null !== (l = null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && void 0 !== l ? l : 0),
                                    text: w,
                                    style: (0, R.A)((0, I.A)({}, f), {
                                        textAlign: "left"
                                    })
                                }), !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Fe.showAxis && m.layers.push({
                                    type: C.Line,
                                    x1: y.p,
                                    y1: 8,
                                    x2: y.p,
                                    y2: 2,
                                    width: 1
                                });
                                else !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && h.layers.push({
                                    type: C.Text,
                                    x: y.p,
                                    y: d + (null !== (u = null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && void 0 !== u ? u : 0),
                                    text: w
                                }), !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Fe.showAxis && m.layers.push({
                                    type: C.Line,
                                    x1: y.p,
                                    y1: 8,
                                    x2: y.p,
                                    y2: 2,
                                    width: 1
                                });
                                Ge.isShowGrid && Fe.showYGrid && v.layers.push({
                                    type: C.Line,
                                    x1: y.p,
                                    y1: x - 1.5,
                                    x2: y.p,
                                    y2: b,
                                    width: 1
                                });
                                for (var k = 1; k < e.length - 1; k++) {
                                    var A, S = e[k],
                                        _ = S.p,
                                        T = S.index;
                                    !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && h.layers.push({
                                        type: C.Text,
                                        x: _,
                                        y: d + (null !== (A = null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && void 0 !== A ? A : 0),
                                        text: L(T)
                                    }), Ge.isShowGrid && Fe.showYGrid && v.layers.push({
                                        type: C.Line,
                                        x1: _,
                                        y1: x - 1.5,
                                        x2: _,
                                        y2: b,
                                        width: 1
                                    }), !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Fe.showAxis && m.layers.push({
                                        type: C.Line,
                                        x1: _,
                                        y1: 8,
                                        x2: _,
                                        y2: 2,
                                        width: 1
                                    })
                                }
                                var B, E, U = e[e.length - 1],
                                    D = L(U.index);
                                if (Ge.xAxisLayers.push(h), .5 * re("".concat(D), 10, 1) + U.p > g()) !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Ge.xAxisLayers.push({
                                    type: C.Text,
                                    x: U.p,
                                    y: d + (null !== (B = null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && void 0 !== B ? B : 0),
                                    text: D,
                                    style: (0, R.A)((0, I.A)({}, f), {
                                        textAlign: "right"
                                    })
                                }), !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Fe.showAxis && m.layers.push({
                                    type: C.Line,
                                    x1: U.p + .5,
                                    y1: 8,
                                    x2: U.p + .5,
                                    y2: 2,
                                    width: 1
                                });
                                else !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && h.layers.push({
                                    type: C.Text,
                                    x: U.p,
                                    y: d + (null !== (E = null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && void 0 !== E ? E : 0),
                                    text: D
                                }), !1 !== (null === Fe || void 0 === Fe ? void 0 : Fe.visible) && Fe.showAxis && m.layers.push({
                                    type: C.Line,
                                    x1: U.p + .5,
                                    y1: 8,
                                    x2: U.p + .5,
                                    y2: 2,
                                    width: 1
                                });
                                Ge.isShowGrid && Fe.showYGrid && v.layers.push({
                                    type: C.Line,
                                    x1: U.p,
                                    y1: x - 1.5,
                                    x2: U.p,
                                    y2: b,
                                    width: 1
                                }), Ge.xAxisLayers.push(m), Ge.xAxisLayers.push(v)
                            }
                        }
                    },
                    V = function(e, t) {
                        if (He.isTrigger) {
                            var r = null !== e && void 0 !== e ? e : {},
                                n = r.offsetX,
                                i = r.offsetY;
                            if (z(Oe), !Fe.data || 0 === Ke.length || !t && 0 !== t && (!A(n) || !S(i))) return N(!1), void(He.onRender && He.onRender(void 0));
                            N(!0);
                            var a, o = (null === t || void 0 === t ? void 0 : t.index) || 0 === (null === t || void 0 === t ? void 0 : t.index) ? null === t || void 0 === t ? void 0 : t.index : f(n, !0),
                                s = null !== (a = null === t || void 0 === t ? void 0 : t.offsetX) && void 0 !== a ? a : p(o, !0),
                                l = Ke.filter((function(e) {
                                    return !e.hideTooltip
                                })).map((function(e) {
                                    var t = e.data,
                                        r = e.histBase,
                                        n = c(t[o]);
                                    return Q(r) ? Math.min(c(r), n) + m() : n + m()
                                })),
                                d = q()(l);
                            if (!t && 0 !== t && He.onRender) {
                                var h = !isNaN(o) && (d || 0 === d) && S(d) && A(s);
                                He.onRender(h ? {
                                    index: o,
                                    offsetX: n
                                } : void 0)
                            }
                            if (void 0 !== d) {
                                var v, g, b, x, y;
                                if (t || 0 === t) d = (null === We || void 0 === We || null === (v = We.parallel) || void 0 === v ? void 0 : v.bottom) ? d - (null !== (x = null === We || void 0 === We || null === (g = We.parallel) || void 0 === g ? void 0 : g.height) && void 0 !== x ? x : 0) : d + (null !== (y = null === We || void 0 === We || null === (b = We.parallel) || void 0 === b ? void 0 : b.height) && void 0 !== y ? y : 0);
                                var w, k = U(u(d)),
                                    C = re("".concat(k), We.fontSize, 5),
                                    _ = He.type.toUpperCase(),
                                    B = (w = {}, (0, P.A)(w, T.Cross, he.bind(null, s, d, i, o)), (0, P.A)(w, T.DottedLine, de.bind(null, s, d, o)), (0, P.A)(w, T.Line, G.bind(null, s, d, o)), (0, P.A)(w, T.Shadow, pe.bind(null, s, d, o)), (0, P.A)(w, T.Snap, me.bind(null, s, d, o, t || 0 === t, .5 * (We.width - C))), w);
                                He.hoverBarColor && fe(o);
                                var E = B[_];
                                E && E()
                            }
                        }
                    },
                    G = function(e, t, r) {
                        He.isShowHoverLine && (Oe.strokeStyle = He.lineColor, Oe.lineWidth = 2, Oe.beginPath(), Oe.moveTo(e, 0), Oe.lineTo(e, m()), Oe.stroke()), Xe(e, t), ke(e, t, r)
                    },
                    de = function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        He.isShowHoverLine && (Oe.setLineDash([2, 2]), ie(Oe, {
                            strokeStyle: He.lineColor,
                            lineWidth: 1
                        }), Oe.beginPath(), Oe.moveTo(e, 0), Oe.lineTo(e, m()), Oe.stroke()), He.isShowHoverCrossPoint && ve(e, t), Xe(e, t), ke(e, t, r, n, i)
                    },
                    pe = function(e, t, r) {
                        if (He.isShowHoverLine) {
                            Oe.fillStyle = He.shadowColor;
                            var n = h() * He.shadowWeight,
                                i = e - .5 * n;
                            Oe.fillRect(i, 0, n, m())
                        }
                        Xe(e, t), ke(e, t, r)
                    },
                    fe = function(e) {
                        Oe.save(), Oe.translate(s(), je - Fe.height), Ke.filter((function(e) {
                            return e.type.toUpperCase() === _.Bar
                        })).forEach((function(t) {
                            var r = t.data,
                                n = t.histBase,
                                i = t.barWeight,
                                a = void 0 === i ? .8 : i,
                                o = t.maxBarWidth,
                                s = p(e),
                                l = c(r[e]),
                                u = Ce(n),
                                d = Math.max(Math.abs(l - u), .5),
                                f = h() * a,
                                m = .5 * (Q(o) && o > 0 ? Math.min(f, o) : f),
                                v = Y(null === He || void 0 === He ? void 0 : He.hoverBarColor) ? He.hoverBarColor : He.hoverBarColor(r[e], e, r);
                            Oe.fillStyle = v, Ie(Oe, l <= u ? {
                                x: s - m,
                                y: l,
                                width: 2 * m,
                                height: d,
                                isFill: !0
                            } : {
                                x: s - m,
                                y: u,
                                width: 2 * m,
                                height: d,
                                isFill: !0
                            })
                        })), Oe.restore()
                    },
                    he = function(e, t, r, n) {
                        He.isShowHoverLine && (Oe.setLineDash([3, 3]), ie(Oe, {
                            strokeStyle: He.crossLineColor
                        }), Oe.beginPath(), Oe.moveTo(b(), r), Oe.lineTo(x(), r), Oe.moveTo(e, 0), Oe.lineTo(e, m()), Oe.stroke(), ve(e, r)), He.isShowAxisLabel && ge(e, r), Xe(e, r), ke(e, t, n)
                    },
                    me = function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        He.isShowHoverLine && (Oe.setLineDash([3, 3]), ie(Oe, {
                            strokeStyle: He.crossLineColor,
                            lineWidth: He.lineWidth || 2
                        }), Oe.beginPath(), Oe.moveTo(b(), t), Oe.lineTo(x(), t), Oe.moveTo(e, 0), Oe.lineTo(e, m()), Oe.stroke()), He.isShowHoverCrossPoint && ve(e, t), Xe(e, t), ke(e, t, r, n, i)
                    },
                    ve = function(e, t) {
                        var r = He.hoverCrossPointColor || "#F0B90B",
                            i = He.hoverCrossPointRadius || 4,
                            a = He.hoverCrossPointOffset || 6,
                            o = i + a,
                            s = n("s-".concat(r, "-r").concat(i, "-o-").concat(a), (function(e, t) {
                                t.save(), ae(e, 2 * o, 2 * o), t.fillStyle = r, t.globalAlpha = .3, t.arc(o, o, o, 0, 2 * Math.PI), t.fill(), t.globalAlpha = 1, t.beginPath(), t.arc(o, o, i, 0, 2 * Math.PI), t.fill(), t.restore()
                            }));
                        Oe.drawImage(s, e - o, t - o, 2 * o, 2 * o)
                    },
                    ge = function(e, t) {
                        var r = f(e, !0),
                            n = L(r),
                            i = U(u(t)),
                            a = 8,
                            o = m(),
                            s = re("".concat(n), Fe.fontSize, 5),
                            c = s + 2 * a,
                            d = 24;
                        Oe.fillStyle = Ge.labelBg;
                        var p = e - .5 * c;
                        if (y(e, .5 * c) ? p = e : w(e, .5 * c) && (p = e - c), se(Oe, p, o, c, d, 4), Oe.fill(), ie(Oe, {
                                textAlign: "center",
                                textBaseline: "middle",
                                fillStyle: Ge.labelColor
                            }), Oe.fillText(n, p + .5 * c, o + .5 * d), We.visible) {
                            s = re("".concat(i), We.fontSize, 5), a = .5 * (We.width - s), c = We.width, d = 24, Oe.fillStyle = Ge.labelBg;
                            var h = k(t, .5 * d) ? t : t - .5 * d;
                            se(Oe, l(), h, c, d, 4), Oe.fill(), ie(Oe, {
                                textAlign: "left",
                                textBaseline: "middle",
                                fillStyle: Ge.labelColor
                            }), Oe.fillText(i, l() + a, h + .5 * d)
                        }
                    },
                    be = function(e, t) {
                        var r = ee(),
                            i = Fe.formmatTooltip ? Fe.formmatTooltip(Fe.data[e], e, Fe.data) : L(e),
                            a = t.reduce((function(e, t) {
                                return "".concat(e, "-c-").concat(t.color, "-n-$").concat(t.label, "-v-").concat(t.value)
                            }), "".concat(i, "-").concat(He.isShowLegend)),
                            o = n("l-".concat(a), (function(e, r) {
                                e.setAttribute("class", "tooltip-content");
                                var n = 12,
                                    a = t.map((function(e) {
                                        return re(e.label, n, 5)
                                    })),
                                    o = K()(a) || 0,
                                    s = t.map((function(e) {
                                        var t = e.label,
                                            r = e.value;
                                        return o + re("".concat(r), n, 5) + (t ? 8 : 0)
                                    })),
                                    l = Math.max(K()(s) || 1, re(i, n, 1)),
                                    c = l + 16 + (He.isShowLegend ? 14 : 0),
                                    u = 18,
                                    d = s.length * u + 16,
                                    p = -1,
                                    f = i ? 4 : 0;
                                i && (d += f + u, p += u), ae(e, c, d), r.font = "".concat(n, "px sans-serif"), r.save(), r.fillStyle = Ge.labelBg, se(r, 0, 0, c, d, 4), r.fill(), r.restore(), ie(r, {
                                    fillStyle: Ge.labelColor,
                                    textBaseline: "middle",
                                    textAlign: "left"
                                }), i && r.fillText(i, 8, p);
                                var h = 8 + (He.isShowLegend ? 14 : 0),
                                    m = 0;
                                t.forEach((function(e, t) {
                                    var i = e.label,
                                        a = e.color;
                                    m = i ? Math.max(re(i, n) + 8, m) : m;
                                    var o = p + u * (t + 1) + f;
                                    if (He.isShowLegend) {
                                        var s = Se(3, a, "", 0),
                                            l = s.cacheCanvas,
                                            c = s.w,
                                            d = s.h;
                                        r.drawImage(l, 8, o - .5 * d, c, d)
                                    }
                                    r.fillText(i, h, o)
                                }));
                                var v = h + m;
                                t.forEach((function(e, t) {
                                    var n = e.value;
                                    r.fillText(n, v, p + u * (t + 1) + f)
                                }))
                            }));
                        return {
                            cacheCanvas: o,
                            w: o.width / r,
                            h: o.height / r
                        }
                    },
                    xe = function(e) {
                        var t = ee(),
                            r = e.reduce((function(e, t) {
                                return "".concat(e, "-").concat(t.color, "-").concat(t.name, "-").concat(t.type)
                            }), ""),
                            i = Math.ceil(Ne),
                            a = n("".concat(r), (function(t, r) {
                                for (var n = 1, a = 0, o = 0, s = 0; s < e.length; s++) {
                                    var l = re(e[s].name, 12),
                                        c = l + 20 + 4;
                                    e[s].textWidth = l, e[s].itemWidth = c, e[s].isWrap = 0 === s, o + c + 24 >= i && (o = 0, n++, e[s].isWrap = !0), o += 0 === o ? c : c + 24, a = Math.max(a, c, o)
                                }
                                ae(t, a, 16 * n), r.save(), ie(r, {
                                    font: "".concat(12, "px sans-serif"),
                                    textAlign: "left",
                                    textBaseline: "middle"
                                });
                                var u = 0,
                                    d = 0;
                                e.forEach((function(e, t) {
                                    var n = e.color,
                                        i = e.name,
                                        a = e.lineWidth,
                                        o = e.type,
                                        s = e.isWrap,
                                        l = e.textWidth;
                                    r.fillStyle = Ge.timeTextColor, s && (d += 0 === t ? 8 : 16, u = 0);
                                    var c = ye(20, 10, n, a, o).cacheCanvas;
                                    r.drawImage(c, u, d - 5, 20, 10), u += 24, r.fillText(i, u, d), u += l + 24
                                })), r.restore()
                            }));
                        return {
                            cacheCanvas: a,
                            w: a.width / t,
                            h: a.height / t
                        }
                    },
                    ye = function(e, t, r, i, a) {
                        var o = "w-".concat(e, "-h-").concat(t, "-c-").concat(r, "-t-").concat(a),
                            s = n(o, (function(n, o) {
                                if (ae(n, e, t), "rect" === a) o.fillStyle = r, o.fillRect(0, 0, e, t);
                                else if ("line" === a) {
                                    o.strokeStyle = r, o.lineWidth = i;
                                    var s = Ge.circleRadius;
                                    o.moveTo(0, .5 * t), o.lineTo(.5 * e - s, .5 * t), o.stroke(), o.beginPath(), o.arc(.5 * e, .5 * t, s, 0, 2 * Math.PI), o.stroke(), o.beginPath(), o.moveTo(.5 * e + s, .5 * t), o.lineTo(e, .5 * t), o.stroke()
                                }
                            }));
                        return {
                            cacheCanvas: s,
                            w: s.width / devicePixelRatio,
                            h: s.height / devicePixelRatio
                        }
                    },
                    we = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
                            i = ee(),
                            a = n("".concat(e, "-l-").concat(r, "-c-").concat(t), (function(n, i) {
                                var a = (0, v.A)("left" === e || "right" === e ? [r, 2 * r] : [2 * r, r], 2),
                                    o = a[0],
                                    s = a[1];
                                i.save(), ae(n, o, s);
                                var l = [];
                                "right" === e ? l.push({
                                    x: 0,
                                    y: 0
                                }, {
                                    x: 0,
                                    y: s
                                }, {
                                    x: o,
                                    y: .5 * s
                                }) : "top" === e ? l.push({
                                    x: 0,
                                    y: s
                                }, {
                                    x: o,
                                    y: s
                                }, {
                                    x: .5 * o,
                                    y: 0
                                }) : "left" === e ? l.push({
                                    x: 0,
                                    y: .5 * s
                                }, {
                                    x: o,
                                    y: 0
                                }, {
                                    x: o,
                                    y: s
                                }) : l.push({
                                    x: 0,
                                    y: 0
                                }, {
                                    x: .5 * o,
                                    y: s
                                }, {
                                    x: o,
                                    y: 0
                                });
                                for (var c = 0; c < l.length; c++) 0 === c ? i.moveTo(l[c].x, l[c].y) : i.lineTo(l[c].x, l[c].y);
                                i.closePath(), i.fillStyle = t, i.fill(), i.restore()
                            }));
                        return {
                            cacheCanvas: a,
                            w: a.width / i,
                            h: a.height / i
                        }
                    },
                    ke = function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            o = Ke.map((function(e) {
                                var t = e.type,
                                    n = e.name,
                                    i = e.data,
                                    a = e.color,
                                    o = void 0 === a ? Ge.mainLineColor : a,
                                    s = e.barColor,
                                    l = void 0 === s ? Ge.mainBarColor : s,
                                    c = e.borderColor,
                                    u = e.formmatTooltip,
                                    d = o;
                                return t.toUpperCase() === _.Bar ? d = X(l) ? l(i[r], r, i) : l : t.toUpperCase() === _.Area && (d = c || (Array.isArray(o) ? o[0][1] : o)), {
                                    color: d,
                                    label: n,
                                    value: u ? u(i[r], r, i) : U(i[r], r, i)
                                }
                            }));
                        if (He.render && X(He.render)) j().render(a().createElement(a().Fragment, null, He.render({
                            left: e,
                            top: t,
                            xValue: L(r),
                            labels: o,
                            isParrallel: n,
                            yOffset: i
                        }, r)), Me);
                        else {
                            var s = be(r, o),
                                l = s.cacheCanvas,
                                c = s.w,
                                u = s.h;
                            if (He.isFloat) {
                                Me.innerHTML = "";
                                var d = b(),
                                    p = x(),
                                    f = e,
                                    h = He.isFixTop ? -6 : t - 8;
                                e - .5 * c < d ? f = d + .5 * c : e + .5 * c > p && (f = p - .5 * c), ne(l, {
                                    position: "absolute",
                                    left: "".concat(f - 8, "px"),
                                    top: "".concat(h - 8, "px"),
                                    transform: "translate(-50%, -100%)"
                                });
                                var m = document.createElement("div");
                                ne(m, {
                                    position: "absolute",
                                    left: "".concat(e, "px"),
                                    top: "".concat(h - 8, "px"),
                                    transform: "translateX(-50%)",
                                    borderWidth: "6px 6px 0",
                                    borderColor: "transparent",
                                    borderTopColor: Ge.labelBg,
                                    borderStyle: "solid"
                                }), Me.append(l, m)
                            } else {
                                var v = 6,
                                    g = c + v,
                                    y = u + v,
                                    w = 8,
                                    k = w,
                                    C = .5 * -u,
                                    T = [0, 0, 0],
                                    B = [0, 0, 0];
                                if (A(e + w) && A(e + w + g) && (k = w, T[0] = 1), A(e - .5 * c) && A(e + .5 * c) && (k = .5 * -c, T[1] = 1), A(e - w - g) && A(e - w) && (k = -c - w, T[2] = 1), S(t - w - y) && S(t - w) && (B[0] = 1), S(t - .5 * u) && S(t + .5 * u) && (B[1] = 1), S(t + w) && S(t + w + y) && (B[2] = 1), 1 === B[0] && 1 === T[1]) {
                                    if (k = .5 * -c, C = -y - w, He.arrow) {
                                        var E = we("bottom", Ge.labelBg, v),
                                            I = E.cacheCanvas,
                                            D = E.w,
                                            P = E.h;
                                        Oe.drawImage(I, e - .5 * D, t - w - P, D, P)
                                    }
                                } else if (1 === B[1] && 1 === T[0]) {
                                    if (k = v + w, C = .5 * -u, He.arrow) {
                                        var R = we("left", Ge.labelBg, v),
                                            O = R.cacheCanvas,
                                            M = R.w,
                                            N = R.h;
                                        Oe.drawImage(O, e + w, t - .5 * N, M, N)
                                    }
                                } else if (1 === B[2] && 1 === T[1]) {
                                    if (k = .5 * -c, C = w + v, He.arrow) {
                                        var z = we("top", Ge.labelBg, v),
                                            F = z.cacheCanvas,
                                            W = z.w,
                                            H = z.h;
                                        Oe.drawImage(F, e - .5 * W, t + w, W, H)
                                    }
                                } else if (1 === B[1] && 1 === T[2]) {
                                    if (k = -g - w, C = .5 * -u, He.arrow) {
                                        var V = we("right", Ge.labelBg, v),
                                            K = V.cacheCanvas,
                                            G = V.w,
                                            q = V.h;
                                        Oe.drawImage(K, e - w - G, t - .5 * q, G, q)
                                    }
                                } else 1 === B[0] && 1 === T[0] ? (k = w, C = -u - w) : 1 === B[0] && 1 === T[2] ? (k = -c - w, C = -u - w) : 1 === B[2] && 1 === T[2] ? (k = -c - w, C = w) : 1 === B[2] && 1 === T[0] ? (k = w, C = w) : (T.includes(1) || (k = -e), C = -t);
                                Oe.drawImage(l, e + k, t + C, c, u)
                            }
                        }
                    },
                    Ae = function(e) {
                        var t = e.data,
                            r = void 0 === t ? [] : t,
                            a = e.isCurve,
                            o = void 0 !== a && a,
                            s = e.color,
                            l = void 0 === s ? Ge.mainLineColor : s,
                            u = e.isShowMarker,
                            d = void 0 === u || u,
                            f = e.icon,
                            h = e.iconSize,
                            v = void 0 === h ? {
                                width: 1,
                                height: 1
                            } : h,
                            g = e.lineWidth,
                            b = void 0 === g ? 2 : g,
                            x = e.isShowMaxMin,
                            A = void 0 !== x && x,
                            S = {
                                strokeStyle: l,
                                lineWidth: b,
                                fillStyle: Ge.bg
                            },
                            _ = {
                                type: C.GroupLayer,
                                layers: [],
                                isStroke: !0,
                                isFill: !1,
                                style: S,
                                zIndex: 100
                            },
                            T = r.map((function(e, t) {
                                return {
                                    x: p(t),
                                    y: c(e)
                                }
                            })),
                            L = -Number.MAX_SAFE_INTEGER,
                            D = {
                                type: C.GroupLayer,
                                layers: [],
                                isStroke: !0,
                                isFill: !1,
                                style: {
                                    fillStyle: Ge.bg,
                                    strokeStyle: l,
                                    lineWidth: b
                                },
                                zIndex: 500
                            },
                            P = o ? oe(T) : T;
                        if (_.layers.push({
                                type: C.Path,
                                data: P,
                                isCurve: o
                            }), d)
                            for (var O = function(e) {
                                    var t = o ? P[e].dx : P[e].x,
                                        a = o ? P[e].dy : P[e].y;
                                    if (B(e, t - L)) {
                                        if (f) {
                                            var s = X(v) ? v(r[e], e, r) : v,
                                                l = X(f) ? f(r[e], e, r) : f,
                                                c = "img-".concat(l, "-w-").concat(s.width, "-h-").concat(s.height);
                                            qe.has(c) ? D.layers.push({
                                                type: C.ImageLayer,
                                                x: t,
                                                y: a,
                                                image: qe.get(c),
                                                width: s.width || 0,
                                                height: s.height || 0
                                            }) : n(c, (function(e, t) {
                                                ae(e, s.width, s.height), i(l, l, s).then((function(e) {
                                                    t.drawImage(e, 0, 0), Le()
                                                }))
                                            }))
                                        } else D.layers.push({
                                            type: C.Circle,
                                            x: t,
                                            y: a,
                                            radius: Ge.circleRadius
                                        });
                                        L = t
                                    }
                                }, M = 0; M < P.length; M++) O(M);
                        if (Ge.mainLayers.push(_, D), A) {
                            var N = 14,
                                j = [],
                                z = [];
                            if (r.forEach((function(e, t) {
                                    var r, n; + e === +(null !== (r = We.max) && void 0 !== r ? r : 0) && j.push(t), +e === +(null !== (n = We.min) && void 0 !== n ? n : 0) && z.push(t)
                                })), !(1 === j.length && 1 === z.length && j[0] === z[0])) {
                                var F, W, H = [];
                                j.forEach((function(e) {
                                    var t, r, n = {
                                            type: C.Text,
                                            layers: [],
                                            style: {
                                                strokeStyle: Ge.gridLineColor,
                                                fillStyle: Ge.isLight ? "#202630" : "#EAECEF",
                                                font: "".concat(null !== (t = We.fontSize) && void 0 !== t ? t : "12", "px Binance PLEX")
                                            },
                                            zIndex: 600,
                                            text: U(null !== (r = We.max) && void 0 !== r ? r : 0),
                                            x: 0,
                                            y: 0
                                        },
                                        i = {
                                            x: e > -1 ? o ? P[e].dx : P[e].x : 0,
                                            y: e > -1 ? o ? P[e].dy : P[e].y : 0,
                                            tw: re("".concat(n.text), 14, 2),
                                            th: 0
                                        },
                                        a = i.tw;
                                    y(i.x, a) ? i.tw = i.x + 4 + .5 * a : w(i.x, a) ? i.tw = i.x - a : i.tw = i.x - .5 * a, i.th = k(i.y, 7) || Math.abs(i.y - 7) > m() ? Math.abs(i.y) >= m() ? i.y + N : i.y + 7 : i.y - 7, n = (0, R.A)((0, I.A)({}, n), {
                                        x: i.tw,
                                        y: i.th - 16
                                    }), (!H.length || H.length && H[H.length - 1] && !y(H[H.length - 1].x, n.x) && w(H[H.length - 1].x, n.x)) && H.push(n)
                                })), (F = Ge.mainLayers).push.apply(F, (0, E.A)(H));
                                var V = [];
                                z.forEach((function(e) {
                                    var t, r, n = {
                                            type: C.Text,
                                            layers: [],
                                            style: {
                                                strokeStyle: Ge.gridLineColor,
                                                fillStyle: Ge.isLight ? "#202630" : "#EAECEF",
                                                font: "".concat(null !== (t = We.fontSize) && void 0 !== t ? t : "12", "px Binance PLEX")
                                            },
                                            zIndex: 600,
                                            text: U(null !== (r = We.min) && void 0 !== r ? r : 0),
                                            x: 0,
                                            y: 0
                                        },
                                        i = {
                                            x: e > -1 ? o ? P[e].dx : P[e].x : 0,
                                            y: e > -1 ? o ? P[e].dy : P[e].y : 0,
                                            tw: re("".concat(n.text), 14, 2),
                                            th: 0
                                        },
                                        a = i.tw;
                                    i.th = i.y - N <= 0 ? i.y + 7 : i.y - N, y(i.x, a) ? i.tw = i.x + 4 + .5 * a : w(i.x, a) ? i.tw = i.x - a : i.tw = i.x - .5 * a, n = (0, R.A)((0, I.A)({}, n), {
                                        x: i.tw,
                                        y: i.th + 16
                                    }), (!V.length || V.length && V[V.length - 1] && !y(V[V.length - 1].x, n.x) && w(V[V.length - 1].x, n.x)) && V.push(n)
                                })), (W = Ge.mainLayers).push.apply(W, (0, E.A)(V))
                            }
                        }
                    },
                    Se = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            a = 2 * (e + i),
                            o = a,
                            s = n("r-".concat(e, "-f-").concat(t, "-b-").concat(r, "-bw-").concat(i), (function(n, s) {
                                ae(n, a, o), s.save(), s.beginPath(), ie(s, {
                                    fillStyle: t,
                                    strokeStyle: r,
                                    lineWidth: i
                                }), s.arc(.5 * a, .5 * o, e, 0, 2 * Math.PI), s.fill(), i > 0 && s.stroke(), s.restore()
                            }));
                        return {
                            cacheCanvas: s,
                            w: a,
                            h: o
                        }
                    },
                    Ce = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NaN;
                        c(We.minValue);
                        return We.maxValue >= e && We.minValue <= e ? c(e) : e > We.maxValue ? c(We.maxValue) : c(We.minValue)
                    },
                    _e = function(e) {
                        var t = e.data,
                            r = void 0 === t ? [] : t,
                            n = e.histBase,
                            i = void 0 === n ? NaN : n,
                            a = e.barWeight,
                            o = void 0 === a ? .8 : a,
                            s = e.maxBarWidth,
                            l = e.isShowValue,
                            c = void 0 !== l && l,
                            u = e.barColor,
                            d = void 0 === u ? Ge.mainBarColor : u,
                            p = e.textColor,
                            f = void 0 === p ? Ge.mainTextColor : p,
                            m = e.barRadius,
                            v = void 0 === m ? 0 : m,
                            g = Ce(i),
                            b = h() * o,
                            x = Q(s) && s > 0 ? Math.min(b, s) : b;
                        if (Y(d)) Be({
                            data: r,
                            color: d,
                            zeroY: g,
                            isShowValue: c,
                            textColor: f,
                            barWidth: x,
                            barRadius: v
                        });
                        else if (X(d)) {
                            var y = r.reduce((function(e, t, r, n) {
                                var i = d(t, r, n);
                                return e[i] ? e[i].push(r) : e[i] = [r], e
                            }), {});
                            Object.keys(y).forEach((function(e) {
                                Be({
                                    data: r,
                                    zeroY: g,
                                    isShowValue: c,
                                    textColor: f,
                                    color: e,
                                    barWidth: x,
                                    barRadius: v
                                }, y[e])
                            }))
                        }
                    },
                    Te = function(e, t) {
                        var r = t.data,
                            n = void 0 === r ? [] : r,
                            i = t.color,
                            a = void 0 === i ? "" : i,
                            o = t.isCurve,
                            s = void 0 !== o && o,
                            l = t.isShowBorder,
                            u = void 0 !== l && l,
                            d = t.isShowMarker,
                            f = void 0 !== d && d,
                            b = t.borderColor,
                            x = void 0 === b ? "" : b,
                            A = t.lineWidth,
                            S = void 0 === A ? 1 : A,
                            _ = t.isShowMaxMin,
                            T = void 0 !== _ && _;
                        if (0 !== n.length) {
                            var E = n.map((function(e, t) {
                                    return {
                                        x: p(t),
                                        y: c(e)
                                    }
                                })),
                                L = {
                                    strokeStyle: x,
                                    lineWidth: S
                                };
                            if (Y(a)) L.fillStyle = a;
                            else if (Array.isArray(a)) {
                                var D = q()(E.map((function(e) {
                                    return e.y
                                })));
                                if (void 0 !== D) {
                                    var P = e.createLinearGradient(0, D, 0, 0);
                                    a.forEach((function(e) {
                                        var t = (0, v.A)(e, 2),
                                            r = t[0],
                                            n = t[1];
                                        P.addColorStop(r, n)
                                    })), L.fillStyle = P
                                }
                            }
                            var O = s ? oe(E) : E,
                                M = {
                                    type: C.GroupLayer,
                                    layers: [],
                                    isStroke: !1,
                                    isFill: !1,
                                    style: L
                                },
                                N = {
                                    type: C.GroupLayer,
                                    layers: [],
                                    isStroke: !1,
                                    isFill: !1
                                };
                            if (f)
                                for (var j = -Number.MAX_SAFE_INTEGER, z = Se(Ge.circleRadius, Ge.bg, x, S), F = z.cacheCanvas, W = z.w, H = z.h, V = 0; V < O.length; V++) {
                                    var K = s ? O[V].dx : O[V].x,
                                        G = s ? O[V].dy : O[V].y;
                                    B(V, K - j) && (N.layers.push({
                                        type: C.ImageLayer,
                                        x: K - .5 * W,
                                        y: G - .5 * H,
                                        width: W,
                                        height: H,
                                        image: F
                                    }), j = K)
                                }
                            var Z = {
                                    type: C.Text,
                                    layers: [],
                                    style: {
                                        fillStyle: Ge.isLight ? "#202630" : "#EAECEF",
                                        font: "14px Binance PLEX"
                                    },
                                    zIndex: 600,
                                    text: U(We.maxValue),
                                    x: 0,
                                    y: 0
                                },
                                X = {
                                    type: C.Text,
                                    layers: [],
                                    style: {
                                        fillStyle: Ge.isLight ? "#202630" : "#EAECEF",
                                        font: "14px Binance PLEX"
                                    },
                                    zIndex: 600,
                                    text: U(We.minValue),
                                    x: 0,
                                    y: 0
                                },
                                Q = !1,
                                $ = !1,
                                J = !1;
                            if (T) {
                                var ee, te, ne = 14,
                                    ie = n.findIndex((function(e) {
                                        return +e === +(null !== (ee = We.max) && void 0 !== ee ? ee : We.maxValue)
                                    })),
                                    ae = n.findIndex((function(e) {
                                        return +e === +(null !== (te = We.min) && void 0 !== te ? te : We.minValue)
                                    }));
                                $ = ie < 0, J = ae < 0;
                                var se = {
                                        x: ie > -1 ? s ? O[ie].dx : O[ie].x : 0,
                                        y: ie > -1 ? s ? O[ie].dy : O[ie].y : 0,
                                        tw: re("".concat(Z.text), 16, 5),
                                        th: 0
                                    },
                                    le = {
                                        x: ae > -1 ? s ? O[ae].dx : O[ae].x : 0,
                                        y: ae > -1 ? s ? O[ae].dy : O[ae].y : 0,
                                        tw: re("".concat(X.text), 16, 5),
                                        th: 0
                                    },
                                    ce = se.tw + 16,
                                    ue = le.tw + 16;
                                Q = +We.maxValue === +We.minValue, y(se.x, .5 * ce) ? se.tw = se.x + 4 + .5 * ce : w(se.x, .5 * ce) ? se.tw = se.x - ce : se.tw = se.x - ce - 4, se.th = k(se.y, 7) || Math.abs(se.y - 7) > m() ? Math.abs(se.y) >= m() ? se.y + ne : se.y + 7 : se.y - 7, le.th = le.y - ne <= 0 ? le.y + 7 : le.y - ne, y(le.x, .5 * ue) ? le.tw = le.x + 4 + .5 * ue : w(le.x, .5 * ue) ? le.tw = le.x - ue : le.tw = le.x - ue - 4, Z = (0, R.A)((0, I.A)({}, Z), {
                                    x: se.tw,
                                    y: se.th
                                }), X = (0, R.A)((0, I.A)({}, X), {
                                    x: le.tw,
                                    y: le.th
                                })
                            }
                            var de = h(),
                                pe = Fe.boundaryGap ? [{
                                    x: g() - .5 * de,
                                    y: 0
                                }, {
                                    x: .5 * de,
                                    y: 0
                                }] : [{
                                    x: g(),
                                    y: 0
                                }, {
                                    x: 0,
                                    y: 0
                                }];
                            M.layers.push({
                                type: C.Area,
                                data: [{
                                    data: O,
                                    isCurve: s
                                }, {
                                    data: pe,
                                    isCurve: !1
                                }],
                                isFill: !0,
                                isStroke: !1
                            }), u && M.layers.push({
                                type: C.Path,
                                data: O,
                                isCurve: s,
                                isFill: !1,
                                isStroke: !0
                            }), Ge.mainLayers.push(M), T && !$ && Ge.mainLayers.push(Z), T && !Q && !J && Ge.mainLayers.push(X), f && Ge.mainLayers.push(N)
                        }
                    },
                    Be = function(e, t) {
                        for (var r = e.data, n = e.zeroY, i = e.isShowValue, a = e.textColor, o = e.color, s = e.barWidth, l = e.barRadius, u = {
                                type: C.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: o
                                }
                            }, d = {
                                type: C.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: a,
                                    textAlign: "center",
                                    textBaseline: "bottom"
                                }
                            }, f = {
                                type: C.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: a,
                                    textAlign: "center",
                                    textBaseline: "top"
                                }
                            }, h = .5 * s, m = t || r, v = 0; v < m.length; v++) {
                            var g = t ? t[v] : v,
                                b = p(g),
                                x = r[g],
                                y = c(x),
                                w = Math.abs(y - n),
                                k = x >= 0,
                                A = x < 0,
                                S = l;
                            (w = Math.max(w, .5)) < 2 * l && (S = w / 2), x >= 0 ? (u.layers.push({
                                type: C.RoundRect,
                                x: b - h,
                                y: n - w,
                                width: 2 * h,
                                height: w,
                                isFill: !0,
                                radius: S,
                                hasBottomRadius: !1,
                                hasTopRadius: k
                            }), d.layers.push({
                                type: C.Text,
                                x: b,
                                y: n - w - 3,
                                text: U(x)
                            })) : (u.layers.push({
                                type: C.RoundRect,
                                x: b - h,
                                y: n,
                                width: 2 * h,
                                height: w,
                                isFill: !0,
                                radius: S,
                                hasBottomRadius: A,
                                hasTopRadius: !1
                            }), f.layers.push({
                                type: C.Text,
                                x: b,
                                y: n + w + 3,
                                text: U(x)
                            }))
                        }
                        Ge.mainLayers.push(u), i && Ge.mainLayers.push(d, f)
                    },
                    Ee = function(e, t) {
                        t.sort((function(e, t) {
                            return (e.zIndex || 0) - (t.zIndex || 0)
                        }));
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r],
                                i = Ze[n.type];
                            i && (ie(e, n.style), n.isStroke && n.lineDash && e.setLineDash(n.lineDash), i(e, n))
                        }
                    },
                    Ie = function(e, t) {
                        var r = t.x,
                            n = void 0 === r ? 0 : r,
                            i = t.y,
                            a = void 0 === i ? 0 : i,
                            o = t.width,
                            s = void 0 === o ? 0 : o,
                            l = t.height,
                            c = void 0 === l ? 0 : l,
                            u = t.isStroke,
                            d = t.isFill;
                        u && e.strokeRect(n, a, s, c), d && e.fillRect(n, a, s, c)
                    },
                    Ue = function(e, t) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            n = t.data,
                            i = void 0 === n ? [] : n,
                            a = t.isStroke,
                            o = t.isCurve,
                            s = void 0 !== o && o;
                        if (r && e.beginPath(), s)
                            for (var l = 0; l < i.length; l++) {
                                var c = i[l],
                                    u = i[l - 1];
                                0 === l ? e.moveTo(c.dx, c.dy) : e.bezierCurveTo(u.cpx1, u.cpy1, u.cpx2, u.cpy2, c.dx, c.dy)
                            } else
                                for (var d = 0; d < i.length; d++) {
                                    var p = i[d],
                                        f = p.x,
                                        h = p.y;
                                    0 === d && r ? e.moveTo(f, h) : e.lineTo(f, h)
                                }
                        a && e.stroke()
                    },
                    Le = function() {
                        ze && cancelAnimationFrame(ze), ze = requestAnimationFrame((function() {
                            var e;
                            (z(Pe), z(Oe), Fe.data.length <= 0) || (Pe.save(), (e = Oe).resetTransform ? e.resetTransform() : e.setTransform(1, 0, 0, 1, 0, 0), r(Pe), Pe.fillStyle = Ge.bg, Pe.fillRect(0, 0, Ne, je), Ge.isShowLogo && function(e) {
                                Ye.apply(this, arguments)
                            }(Pe), r(Oe), Fe.height = Ve.show && !Ve.container ? 60 : (null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && (null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) > 24 ? (null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) + 10 : (null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) && (null === Fe || void 0 === Fe ? void 0 : Fe.axisGap) >= 10 ? 32 : 24, function() {
                                var e;
                                if (F(), Ge.yAxisLayers.length = 0, Ge.isShowGrid || We.visible) {
                                    var t = "left",
                                        r = 0,
                                        n = 5,
                                        i = -(Ne - We.width);
                                    We.showAxis && (n = 10);
                                    var a, o, l, u = We.isFloate ? We.width : 0;
                                    We.visible && We.isLeft && (t = "right", r = We.width, n = -5, i = Ne, u = We.isFloate ? 0 : We.width, We.showAxis && (n = -10));
                                    var d, p, f, h = {
                                            strokeStyle: Ge.gridLineColor,
                                            fillStyle: null !== (a = Ge.gridAxisTextColor) && void 0 !== a ? a : Ge.tickTextColor,
                                            textAlign: t,
                                            textBaseline: We.isFloate ? "bottom" : "middle",
                                            font: "".concat(null !== (o = We.fontSize) && void 0 !== o ? o : "12", "px ").concat(null !== (l = We.fontStyle) && void 0 !== l ? l : "sans-serif")
                                        },
                                        v = {
                                            type: C.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: h
                                        },
                                        g = {
                                            type: C.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: (0, R.A)((0, I.A)({}, h), {
                                                fillStyle: null !== (d = Ge.gridAxisTextColor) && void 0 !== d ? d : Ge.tickTextColor,
                                                strokeStyle: null !== (p = Ge.gridAxisTextColor) && void 0 !== p ? p : Ge.tickTextColor
                                            })
                                        },
                                        b = {
                                            type: C.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: (0, R.A)((0, I.A)({}, h), {
                                                fillStyle: null !== (f = Ge.gridLineColor) && void 0 !== f ? f : Ge.tickTextColor
                                            })
                                        },
                                        x = We.ticks,
                                        y = m();
                                    if (We.showAxis && Ge.yAxisLayers.push({
                                            type: C.Axis,
                                            x1: s(),
                                            x2: s(),
                                            y2: -Ne,
                                            y1: 2.5,
                                            width: 1
                                        }), null === We || void 0 === We || null === (e = We.parallel) || void 0 === e ? void 0 : e.showTop) {
                                        var w = c(We.maxValue);
                                        Ge.yAxisLayers.push({
                                            type: C.Axis,
                                            x1: -Ne,
                                            x2: u + We.width,
                                            y2: w,
                                            y1: w,
                                            width: 1
                                        })
                                    }
                                    if (null === Fe || void 0 === Fe ? void 0 : Fe.showAxis) {
                                        var k = c(We.minValue);
                                        Ge.yAxisLayers.push({
                                            type: C.Axis,
                                            x1: -Ne,
                                            x2: u,
                                            y2: k + 2,
                                            y1: k + 2,
                                            width: 1
                                        })
                                    }
                                    for (var A = 0, S = x.length; A < S; A++) {
                                        var _ = x[A],
                                            T = _.p,
                                            B = _.v;
                                        if (Ge.isShowGrid && b.layers.push({
                                                type: C.Line,
                                                x1: i,
                                                y1: T,
                                                x2: u,
                                                y2: T,
                                                width: 1
                                            }), We.showAxis && g.layers.push({
                                                type: C.Line,
                                                x1: u,
                                                y1: T,
                                                x2: u + 6,
                                                y2: T,
                                                width: 1
                                            }), Math.abs(T) >= y - 2) {
                                            if (We.isFloate) break;
                                            T += .5 * Ge.fontSize
                                        }
                                        We.visible && v.layers.push({
                                            type: C.Text,
                                            x: r + n,
                                            y: T,
                                            text: U(B)
                                        })
                                    }
                                    Ge.yAxisLayers.push(v), Ge.yAxisLayers.push(g), Ge.yAxisLayers.push(b)
                                }
                            }(), Pe.save(), Pe.translate(l(), m()), Ee(Pe, Ge.yAxisLayers), Pe.restore(), W(), Pe.save(), Pe.translate(s(), m()), Ee(Pe, Ge.xAxisLayers), Pe.restore(), function() {
                                Ge.mainLayers.length = 0;
                                for (var e = 0; e < Ke.length; e++) {
                                    var t = Ke[e],
                                        r = t.type.toUpperCase();
                                    r === _.Line ? Ae(t) : r === _.Bar ? _e(t) : r === _.Area && Te(Pe, t)
                                }
                            }(), Pe.save(), Pe.translate(s(), Fe.visible ? je - Fe.height : je), Ee(Pe, Ge.mainLayers), Pe.restore(), function() {
                                if (Ve.show) {
                                    var e = Ke.map((function(e) {
                                            var t = e.color,
                                                r = e.name,
                                                n = e.lineWidth;
                                            return {
                                                color: t,
                                                name: r,
                                                lineWidth: void 0 === n ? 2 : n,
                                                type: "line"
                                            }
                                        })),
                                        t = xe(e),
                                        r = t.cacheCanvas,
                                        n = t.w,
                                        i = t.h;
                                    Ve.container ? (Ve.container.innerHTML = "", Ve.container.appendChild(r)) : Pe.drawImage(r, .5 * Ne - .5 * n, je - i, n, i)
                                }
                            }(), Pe.restore(), ze = 0)
                        }))
                    },
                    De = document.createElement("canvas"),
                    Pe = De.getContext("2d"),
                    Re = document.createElement("canvas"),
                    Oe = Re.getContext("2d"),
                    Me = document.createElement("div"),
                    Ne = 0,
                    je = 0,
                    ze = 0,
                    Fe = {
                        data: [],
                        formmat: function(e) {
                            return "".concat(e)
                        },
                        boundaryGap: !0,
                        tickInterval: 70,
                        fontSize: 12,
                        height: 24
                    },
                    We = {
                        tickSize: 2,
                        isLeft: !1,
                        visible: !0,
                        isFloate: !1,
                        fontSize: 12,
                        ticks: [],
                        width: 0,
                        tickInterval: 40,
                        maxValue: 0,
                        minValue: 0
                    },
                    He = {
                        isTrigger: !0,
                        isFloat: !1,
                        isFixTop: !0,
                        type: T.Cross,
                        arrow: !0,
                        lineColor: "rgba(0, 0, 0, 0.05)",
                        crossLineColor: "#F0B90B",
                        shadowColor: "rgba(0, 0, 0, 0.05)",
                        shadowWeight: .8,
                        isShowAxisLabel: !0,
                        isShowHoverLine: !0,
                        isShowHoverCrossPoint: !0,
                        isShowLegend: !0,
                        lineWidth: 2
                    },
                    Ve = {
                        show: !1
                    },
                    Ke = [],
                    Ge = {
                        gridLineColor: "#EDEDED",
                        tickTextColor: "#76808F",
                        timeTextColor: "#76808F",
                        mainLineColor: "#F0B90B",
                        mainBarColor: "#02C076",
                        mainTextColor: "#474D57",
                        labelBg: "rgba(0, 0, 0, 0.75)",
                        labelColor: "#FFFFFF",
                        bg: "#ffffff",
                        fontSize: 12,
                        circleRadius: 2,
                        xAxisLayers: [],
                        yAxisLayers: [],
                        mainLayers: [],
                        isShowGrid: !0,
                        isShowLogo: !1,
                        isLight: !0
                    },
                    qe = new Map,
                    Ze = (t = {}, (0, P.A)(t, C.Circle, (function(e, t) {
                        e.beginPath();
                        var r = t.x,
                            n = void 0 === r ? 0 : r,
                            i = t.y,
                            a = void 0 === i ? 0 : i,
                            o = t.radius,
                            s = void 0 === o ? 0 : o,
                            l = t.isStroke,
                            c = void 0 === l || l,
                            u = t.isFill,
                            d = void 0 === u || u;
                        e.arc(n, a, s, 0, 2 * Math.PI), d && e.fill(), c && e.stroke()
                    })), (0, P.A)(t, C.Rect, Ie), (0, P.A)(t, C.RoundRect, (function(e, t) {
                        var r = t.x,
                            n = void 0 === r ? 0 : r,
                            i = t.y,
                            a = void 0 === i ? 0 : i,
                            o = t.width,
                            s = void 0 === o ? 0 : o,
                            l = t.height,
                            c = void 0 === l ? 0 : l,
                            u = t.hasTopRadius,
                            d = void 0 === u || u,
                            p = t.hasBottomRadius,
                            f = void 0 === p || p,
                            h = t.isStroke,
                            m = t.isFill,
                            v = t.radius;
                        se(e, n, a, s, c, void 0 === v ? 0 : v, d, f), h && e.stroke(), m && e.fill()
                    })), (0, P.A)(t, C.Line, (function(e, t) {
                        var r = t.x1,
                            n = void 0 === r ? 0 : r,
                            i = t.y1,
                            a = void 0 === i ? 0 : i,
                            o = t.x2,
                            s = void 0 === o ? 0 : o,
                            l = t.y2,
                            c = void 0 === l ? 0 : l,
                            u = t.isStroke;
                        e.moveTo(n, a), e.lineTo(s, c), t.width && (e.lineWidth = t.width), u && e.stroke()
                    })), (0, P.A)(t, C.Axis, (function(e, t) {
                        var r = t.x1,
                            n = void 0 === r ? 0 : r,
                            i = t.y1,
                            a = void 0 === i ? 0 : i,
                            o = t.x2,
                            s = void 0 === o ? 0 : o,
                            l = t.y2,
                            c = void 0 === l ? 0 : l;
                        e.strokeStyle = Ge.gridAxisColor, e.lineWidth = 1, e.moveTo(n, a), e.lineTo(s, c), e.stroke()
                    })), (0, P.A)(t, C.Path, Ue), (0, P.A)(t, C.Area, (function(e, t) {
                        var r = t.isFill,
                            n = void 0 === r || r;
                        e.beginPath();
                        for (var i = t.data, a = void 0 === i ? [] : i, o = 0; o < a.length; o++) {
                            var s = a[o],
                                l = s.data,
                                c = s.isCurve;
                            Ue(e, {
                                isStroke: !1,
                                data: l,
                                isCurve: c
                            }, !1)
                        }
                        e.closePath(), n && e.fill()
                    })), (0, P.A)(t, C.Text, (function(e, t) {
                        var r = t.x,
                            n = void 0 === r ? 0 : r,
                            i = t.y,
                            a = void 0 === i ? 0 : i,
                            o = t.text,
                            s = void 0 === o ? "" : o,
                            l = t.style,
                            c = void 0 === l ? {} : l;
                        c.fillStyle && (e.fillStyle = c.fillStyle), c.font && (e.font = c.font), e.fillText(s, n, a)
                    })), (0, P.A)(t, C.ImageLayer, (function(e, t) {
                        var r = t.x,
                            n = void 0 === r ? 0 : r,
                            i = t.y,
                            a = void 0 === i ? 0 : i,
                            o = t.width,
                            s = void 0 === o ? 0 : o,
                            l = t.height,
                            c = void 0 === l ? 0 : l,
                            u = t.image;
                        u && e.drawImage(u, n - .5 * s, a - .5 * c, s, c)
                    })), (0, P.A)(t, C.GroupLayer, (function(e, t) {
                        e.beginPath();
                        for (var r = t.layers, n = void 0 === r ? [] : r, i = t.isStroke, a = void 0 !== i && i, o = t.isFill, s = void 0 !== o && o, l = 0; l < n.length; l++) {
                            var c = n[l],
                                u = Ze[c.type];
                            u && u(e, c)
                        }
                        a && e.stroke(), s && e.fill()
                    })), t);

                function Ye() {
                    return (Ye = (0, D.A)(M().mark((function e(t) {
                        var r, n, a, o, s, l;
                        return M().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = ee(), n = 300 * r, a = 60 * r, o = Ge.isLight ? le : ce, s = URL.createObjectURL(new Blob([o], {
                                        type: "image/svg+xml"
                                    })), e.next = 7, i(o, s);
                                case 7:
                                    (l = e.sent) && (t.save(), t.globalAlpha = .04, t.drawImage(l, Ne * r * .5 - .5 * n, je * r * .5 - .5 * a, n, a), t.restore());
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Xe(e, t) {
                    var r = He.crossIcon,
                        a = He.crossIconSize,
                        o = void 0 === a ? {
                            width: 16,
                            height: 16
                        } : a;
                    if (r) {
                        var s = "img-".concat(r, "-w-").concat(o.width, "-h-").concat(o.height);
                        if (qe.has(s)) {
                            var l = qe.get(s);
                            Oe.drawImage(l, e - .5 * o.width, t - .5 * o.height, o.width, o.width)
                        } else n(s, function() {
                            var e = (0, D.A)(M().mark((function e(t, n) {
                                var a;
                                return M().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return ae(t, o.width, o.height), e.next = 3, i(r, r, o);
                                        case 3:
                                            a = e.sent, n.drawImage(a, 0, 0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()), Xe(e, t)
                    }
                }
                return function() {
                    if (e) {
                        var t = {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                        };
                        ne(De, t), ne(Re, t), ne(Me), e.appendChild(De), e.appendChild(Re), e.appendChild(Me),
                            function(e, t) {
                                var r = function() {
                                        var r = e.offsetWidth,
                                            n = e.offsetHeight,
                                            i = window.devicePixelRatio;
                                        a === r && o === n && s === i || (t && t({
                                            width: r,
                                            height: n
                                        }, {
                                            width: a,
                                            height: o
                                        }), a = r, o = n, s = i)
                                    },
                                    n = document.createElement("iframe");
                                n.style.cssText = "\n    position: absolute; left: 0; top: 0; width: 100%; height: 100%;\n        border: 0; margin: 0; display: block; z-index: -999;\n  ", e.appendChild(n);
                                var i, a = e.offsetWidth,
                                    o = e.offsetHeight,
                                    s = 1;
                                void 0 !== window && (s = window.devicePixelRatio, (i = window.matchMedia("(min-resolution: ".concat(window.devicePixelRatio, "dppx) and (max-resolution: ").concat(window.devicePixelRatio, "dppx)"))).addListener((function e() {
                                    i && i.removeListener(e), r(), (i = window.matchMedia("(min-resolution: ".concat(window.devicePixelRatio, "dppx) and (max-resolution: ").concat(window.devicePixelRatio, "dppx)"))).addListener(e)
                                }))), (n.contentWindow || n).onresize = (0, Z.n)(r, 10)
                            }(e, (function() {
                                o(), O(), Le()
                            }))
                    }
                }(), Re && (Re.addEventListener("mousemove", (0, Z.n)(V, 60)), e.addEventListener("mouseleave", (function() {
                    N(!1), He.onRender && He.onRender(void 0), z(Oe)
                })), Re.addEventListener("touchstart", (function(e) {
                    V(e, void 0)
                })), document.addEventListener("touchend", (function(e) {
                    e.target !== Re && (He.onRender && He.onRender(void 0), z(Oe))
                }))), Object.freeze({
                    setOptions: function(e) {
                        var t = e.xAxis,
                            r = e.yAxis,
                            n = e.series,
                            i = e.background,
                            a = e.tooltip,
                            o = e.legend,
                            s = e.gridLineColor,
                            l = e.gridAxisColor,
                            c = e.gridAxisTextColor,
                            u = e.isShowGrid,
                            d = void 0 === u || u,
                            p = e.isShowLogo,
                            f = void 0 !== p && p,
                            h = e.isLight,
                            m = void 0 === h || h,
                            v = e.parallelTooltip,
                            g = !1;
                        t && !H()(Fe, t) && (Fe = (0, I.A)({}, Fe, t), g = !0), r && !H()(We, r) && (We = (0, I.A)({}, We, r), g = !0), n && !H()(Ke, n) && (Ke = n, g = !0), o && !H()(Ve, o) && (Ve = o, g = !0), a && !H()(He, a) && (He = (0, I.A)({}, He, a)), te(i) && !H()(Ge.bg, i) && (Ge.bg = i), Ge.isShowGrid !== d && (Ge.isShowGrid = d, g = !0), Ge.isLight !== m && (Ge.isLight = m, g = !0), H()(Ge.isShowLogo, f) || (Ge.isShowLogo = f, g = !0), s && te(s) && !H()(Ge.gridLineColor, s) && (Ge.gridLineColor = s, g = !0), l && te(l) && !H()(Ge.gridAxisColor, l) && (Ge.gridAxisColor = l, g = !0), c && te(c) && !H()(Ge.gridAxisTextColor, c) && (Ge.gridAxisTextColor = c, g = !0), g && Le(), !H()(Ge.parallelTooltip, v) && v && (Ge.parallelTooltip = v, V(void 0, v))
                    },
                    setSize: O,
                    getChartData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "image/png",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .92,
                            r = De.toDataURL(e, t);
                        return r
                    }
                })
            }
            const pe = (0, i.forwardRef)((function(e, t) {
                var r = e.width,
                    n = void 0 === r ? 0 : r,
                    o = e.height,
                    s = void 0 === o ? 0 : o,
                    l = e.xAxis,
                    c = e.yAxis,
                    u = e.series,
                    d = void 0 === u ? [] : u,
                    p = e.background,
                    f = e.tooltip,
                    h = e.legend,
                    m = e.isShowGrid,
                    v = e.gridLineColor,
                    g = e.isShowLogo,
                    b = e.isLight,
                    x = (0, U.A)(e, ["width", "height", "xAxis", "yAxis", "series", "background", "tooltip", "legend", "isShowGrid", "gridLineColor", "isShowLogo", "isLight"]),
                    y = (0, i.useRef)(),
                    w = (0, i.useRef)(),
                    k = (0, i.useCallback)((function(e, t) {
                        return y.current ? y.current.getChartData(e, t) : ""
                    }), []);
                return (0, i.useImperativeHandle)(t, (function() {
                    return {
                        getChartData: k
                    }
                })), (0, i.useLayoutEffect)((function() {
                    !y.current && w.current && (y.current = de(w.current))
                }), []), (0, i.useEffect)((function() {
                    var e = y.current;
                    null === e || void 0 === e || e.setSize(n, s)
                }), [n, s]), (0, i.useEffect)((function() {
                    var e = y.current;
                    null === e || void 0 === e || e.setOptions((0, I.A)({
                        xAxis: l,
                        yAxis: c,
                        series: d,
                        tooltip: f,
                        background: p,
                        legend: h,
                        isShowGrid: m,
                        gridLineColor: v,
                        isShowLogo: g,
                        isLight: b
                    }, x))
                }), [l, c, d, f, p, h, m, v, g, b]), (0, i.useMemo)((function() {
                    return a().createElement(L.A, {
                        ref: w,
                        width: n || "100%",
                        height: s || "100%",
                        sx: {
                            position: "relative"
                        }
                    })
                }), [n, s])
            }));
            var fe = r("ah/i"),
                he = r("VXBK"),
                me = [
                    [0, "rgba(255, 239, 174, 1)"],
                    [1, "rgba(255, 246, 210, 0)"]
                ],
                ve = [
                    [0, "rgba(90, 87, 71, 1)"],
                    [1, "rgba(66, 65, 61, 0)"]
                ];
            const ge = function(e) {
                var t, r = e.data,
                    a = e.xAxisVisible,
                    o = void 0 === a || a,
                    s = e.tooltipVisible,
                    l = void 0 === s || s,
                    c = e.height,
                    u = void 0 === c ? 60 : c,
                    d = (0, h.useCurrency)(),
                    p = d.currency,
                    f = d.currencyMap,
                    m = (0, he.DP)(),
                    v = (0, h.useTheme)().isLight,
                    g = (0, i.useMemo)((function() {
                        return f[p] || {
                            rate: 1,
                            symbol: "$"
                        }
                    }), [p, f]),
                    b = g.rate,
                    x = g.symbol,
                    y = (0, i.useMemo)((function() {
                        return !!Array.isArray(r) && (null === r || void 0 === r ? void 0 : r.find((function(e) {
                            return (null === e || void 0 === e ? void 0 : e.total) > 0
                        })))
                    }), [r]),
                    w = (0, i.useMemo)((function() {
                        return (null === r || void 0 === r ? void 0 : r.length) ? null === r || void 0 === r ? void 0 : r.map((function(e) {
                            return +(0, fe.lw)(e.total, b).toFixed(2)
                        })) : []
                    }), [r, b]),
                    k = (t = Math).min.apply(t, (0, E.A)(w)),
                    A = (0, i.useMemo)((function() {
                        return {
                            data: (null === r || void 0 === r ? void 0 : r.length) ? r.map((function(e) {
                                return e.time
                            })) : [],
                            formmat: "MM-DD",
                            boundaryGap: !0,
                            visible: o
                        }
                    }), [r, o]),
                    S = (0, i.useMemo)((function() {
                        return {
                            visible: !1,
                            minValue: k,
                            min: k
                        }
                    }), [k]),
                    C = (0, i.useMemo)((function() {
                        return [{
                            name: "",
                            type: "Area",
                            isShowBorder: !0,
                            borderColor: "#FCD535",
                            lineWidth: 2,
                            data: w,
                            color: v ? me : ve,
                            formmatTooltip: function(e) {
                                return "".concat(x + e)
                            }
                        }]
                    }), [w, x, v]),
                    _ = (0, i.useMemo)((function() {
                        return {
                            isTrigger: l,
                            type: "snap",
                            isShowHoverLine: !1,
                            isShowAxisLabel: !1
                        }
                    }), [l]);
                return y && (null === r || void 0 === r ? void 0 : r.length) > 0 ? (0, n.jsx)(pe, {
                    height: u,
                    xAxis: A,
                    yAxis: S,
                    tooltip: _,
                    series: C,
                    isShowGrid: !1,
                    gridLineColor: m.colors.line,
                    background: m.colors.bg1
                }) : null
            };
            var be = {
                    from: "MAIN",
                    to: "CARD"
                },
                xe = function() {
                    var e = (0, i.useState)(30),
                        t = e[0],
                        r = e[1],
                        a = (0, b.n)().isDesktop,
                        o = (0, s.sx)(),
                        c = o.totalAssetBalance,
                        d = o.loading,
                        f = (0, s.eN)(),
                        h = f.depositUrl,
                        x = f.withdrawUrl,
                        w = (0, l.CY)().refresh,
                        A = (0, s.TF)(),
                        C = (0, s.d2)({
                            recentDays: t
                        }).totalBalanceTrend,
                        _ = (0, v.A)((0, s.Z4)(), 1)[0],
                        T = (0, i.useState)(!1),
                        B = T[0],
                        E = T[1],
                        I = (null === C || void 0 === C ? void 0 : C.length) > 0,
                        U = (0, i.useCallback)((function(e) {
                            r(e)
                        }), []),
                        L = (0, i.useCallback)((function() {
                            E((function(e) {
                                return !e
                            })), (0, u.qL)({
                                pageName: m.D4,
                                elementID: B ? "Wallet_overview_v1_balance_open_charts" : "Wallet_overview_v1_balance_collapse_charts"
                            })
                        }), [B]),
                        D = (0, s.jm)(d || void 0 === c);
                    return (0, n.jsxs)(y.Ay, {
                        className: "mb-16 rounded-xl border-line pc:mb-xl pc:flex pc:flex-col pc:justify-between pc:border pc:p-xl",
                        children: [(0, n.jsxs)(y.Ay, {
                            children: [(0, n.jsxs)(y.Ay, {
                                className: "flex justify-between mobile:flex-col tablet:flex-col",
                                children: [(0, n.jsxs)(y.Ay, {
                                    children: [(0, n.jsx)(k, {}), Number(c) > 0 && !D && (0, n.jsx)(p.Mp, {
                                        toadyPnlInfo: A
                                    })]
                                }), (0, n.jsxs)(y.Ay, {
                                    className: "flex flex-col justify-between mobile:mt-xl tablet:mt-xl",
                                    children: [(0, n.jsx)(p.wr, {
                                        depositUrl: h,
                                        withdrawUrl: x,
                                        position: g.Ob.WALLET_OVERVIEW_PAGE,
                                        depositTrackInfo: m.b1.DEPOSIT,
                                        withdrawTrackInfo: m.b1.WITHDRAW,
                                        transferTrackInfo: m.b1.TRANSFER,
                                        transferOptions: be,
                                        transferStoreKey: "overviewPage",
                                        onTransferSuccess: w
                                    }), a && (0, n.jsx)(y.Ay, {
                                        id: "btn-Balance-setIsExpend",
                                        onClick: function() {
                                            return E(!0)
                                        },
                                        className: "".concat(B ? "hidden" : "block", " h-[100px] cursor-pointer"),
                                        children: (0, n.jsx)(ge, {
                                            height: 100,
                                            xAxisVisible: !1,
                                            tooltipVisible: !1,
                                            data: C
                                        })
                                    }), I && (0, n.jsx)(y.Ay, {
                                        className: B || !a ? "block mobile:mt-xl tablet:mt-xl" : "hidden",
                                        children: (0, n.jsx)(S, {
                                            onChange: U,
                                            className: "pc:justify-end"
                                        })
                                    })]
                                })]
                            }), (0, n.jsx)(y.Ay, {
                                className: "".concat(B ? "pc:max-h-[160px]" : "pc:max-h-0", " overflow-hidden transition-all duration-500 ease-in-out"),
                                children: (0, n.jsx)(ge, {
                                    height: 160,
                                    xAxisVisible: !0,
                                    tooltipVisible: !_,
                                    data: C
                                })
                            })]
                        }), I && (0, n.jsx)(y.Ay, {
                            className: "mobile:hidden tablet:hidden",
                            children: (0, n.jsx)(p.OZ, {
                                onChange: L,
                                isExpend: B
                            })
                        })]
                    })
                };
            const ye = (0, x.Xc)((0, i.memo)(xe), {
                errorBoundaryProps: {
                    name: "Balance"
                }
            });
            var we = r("l77e"),
                ke = r("AXwM"),
                Ae = r("wIZF"),
                Se = r("7zlU");
            const Ce = function(e) {
                return a().createElement(Se.A, (0, Ae.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z",
                    fill: "currentColor"
                }))
            };
            var _e = r("wTDt"),
                Te = r("TprX"),
                Be = r("K9WZ"),
                Ee = r("2eE9"),
                Ie = r("aSbj"),
                Ue = r("qCH/"),
                Le = function(e) {
                    var t = e.className,
                        r = (0, o.s9)("exchange-wallet").t,
                        i = (0, Be.EY)().listInfo,
                        a = null === i || void 0 === i ? void 0 : i.filter((function(e) {
                            return 1 === e.gtrStatus
                        })).length;
                    return a > 0 ? (0, n.jsx)(y.Ay, {
                        className: "abnormal-credit rounded-s border border-PrimaryYellow p-m pc:ml-m pc:border-0 pc:border-line pc:bg-none pc:p-0 ".concat(t),
                        children: (0, n.jsxs)(Te.A, {
                            id: "btn-AbnormalCreditDeposit-handleClick",
                            className: "overview-module-hover cursor-pointer items-center justify-between text-[20px] text-t-Primary pc:justify-start pc:text-t-TextLink",
                            onClick: function() {
                                (0, Ie.u)("webClick", {
                                    pageName: m.D4,
                                    elementID: "Wallet_overview_v1_creditDeposit"
                                }), (0, Ee.D1)("/my/wallet/history/deposit-crypto")
                            },
                            children: [(0, n.jsxs)(y.Ay, {
                                className: "subtitle4 flex items-center",
                                children: [(0, n.jsx)(Ue.A, {
                                    className: "mr-2xs h-l w-l flex-shrink-0 text-t-TextLink"
                                }), r("pending-credit-alert", {
                                    defaultValue: "{{count}} Deposit Order pending credit, please provide the sender's information.",
                                    count: a
                                })]
                            }), (0, n.jsx)(_e.A, {
                                name: "chevron-right-f",
                                className: "module-hover-icon ml-2xs h-4 w-4 text-iconNormal hover:text-t-primary"
                            })]
                        })
                    }) : null
                };
            const De = (0, i.memo)(Le);
            var Pe, Re;
            ! function(e) {
                e.completed = "wallet_recent_withdrawal_status_completed", e.failed = "wallet_recent_withdrawal_status_failed", e.cancelled = "wallet_recent_withdrawal_status_cancelled", e.processing = "wallet_recent_withdrawal_status_processing"
            }(Pe || (Pe = {})),
            function(e) {
                e.completed = "wallet_recent_deposit_status_completed", e.failed = "wallet_recent_deposit_status_failed", e.processing = "wallet_recent_deposit_status_processing"
            }(Re || (Re = {}));
            var Oe = function(e) {
                    var t = e.list,
                        r = (0, o.s9)("exchange-wallet").t,
                        a = t || {},
                        s = a.transactionType,
                        l = a.status,
                        c = a.coin,
                        u = (0, i.useMemo)((function() {
                            return [0, 2, 4, 8].includes(+l) ? "processing" : [3, 5].includes(+l) ? "failed" : [1, 6].includes(+l) ? "completed" : ""
                        }), [l]);
                    return u ? (0, n.jsxs)(n.Fragment, {
                        children: ["DEPOSIT" === s && (0, n.jsx)(y.Ay, {
                            className: "subtitle4 text-t-primary",
                            children: r(Re[u], {
                                coin: c
                            })
                        }), "WITHDRAW" === s && (0, n.jsx)(y.Ay, {
                            className: "subtitle4 text-t-primary",
                            children: r(Pe[u], {
                                coin: c
                            })
                        })]
                    }) : null
                },
                Me = function() {
                    var e = (0, o.s9)("exchange-wallet").t,
                        t = (0, ke.rd)(),
                        r = (0, i.useState)({}),
                        a = r[0],
                        s = r[1],
                        l = 0;
                    "DEPOSIT" === (null === a || void 0 === a ? void 0 : a.transactionType) && (l = null === a || void 0 === a ? void 0 : a.insertTime), "WITHDRAW" === (null === a || void 0 === a ? void 0 : a.transactionType) && (l = null === a || void 0 === a ? void 0 : a.applyTime);
                    var c = function() {
                        var e = (0, D.A)(M().mark((function e() {
                            var t, r;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 4, (0, we.iq)();
                                    case 4:
                                        (r = e.sent) && s((null === r || void 0 === r || null === (t = r.data) || void 0 === t ? void 0 : t.recentDepositWithdrawVos[0]) || {}), e.next = 10;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    (0, i.useEffect)((function() {
                        c()
                    }), []);
                    var d = (0, i.useMemo)((function() {
                            var t, r, n, i, a = (new Date).getTime() - l,
                                o = Math.floor(a / 1e3),
                                s = Math.floor(o / 60),
                                c = Math.floor(s / 60),
                                u = Math.floor(c / 24);
                            return c > 24 ? "need_hidden" : u > 0 ? e("wallet_recent_transaction_d_timestamp", {
                                time: null === u || void 0 === u || null === (t = u.toString) || void 0 === t ? void 0 : t.call(u)
                            }) : c > 0 ? e("wallet_recent_transaction_h_timestamp", {
                                time: null === c || void 0 === c || null === (r = c.toString) || void 0 === r ? void 0 : r.call(c)
                            }) : s > 0 ? e("wallet_recent_transaction_m_timestamp", {
                                time: null === s || void 0 === s || null === (n = s.toString) || void 0 === n ? void 0 : n.call(s)
                            }) : e("wallet_recent_transaction_s_timestamp", {
                                time: null === o || void 0 === o || null === (i = o.toString) || void 0 === i ? void 0 : i.call(o)
                            })
                        }), [l, e]),
                        p = (0, i.useMemo)((function() {
                            var e;
                            return (null === (e = Object.keys(a)) || void 0 === e ? void 0 : e.length) > 0 && "need_hidden" !== d
                        }), [a, d]),
                        f = (0, i.useCallback)((function() {
                            var e = "";
                            e = "DEPOSIT" === (null === a || void 0 === a ? void 0 : a.transactionType) ? "/my/wallet/history/deposit-crypto" : "/my/wallet/history/withdraw-crypto", (0, u.qL)({
                                pageName: m.D4,
                                elementID: "Wallet_overview_v1_new_transaction"
                            }), t.push(e)
                        }), [a]);
                    return (0, i.useEffect)((function() {
                        p && (0, u.er)({
                            pageName: m.D4,
                            elementID: "Wallet_overview_v1_new_transaction_exposure"
                        })
                    }), [p]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(De, {
                            className: p ? "mb-m pc:mb-s" : "mb-xl"
                        }), p ? (0, n.jsx)(y.Ay, {
                            className: "mb-xl rounded-s border border-line p-m pc:ml-m pc:border-0 pc:p-0",
                            children: (0, n.jsxs)(Te.A, {
                                id: "btn-RecentlyDepositOrWithdraw-handleClick",
                                className: "overview-module-hover cursor-pointer items-center justify-between text-[20px] pc:justify-start",
                                onClick: f,
                                children: [(0, n.jsxs)(y.Ay, {
                                    className: "flex items-center",
                                    children: [(0, n.jsx)(Ce, {
                                        className: "mr-2xs h-l w-l flex-shrink-0 text-IconNormal"
                                    }), (0, n.jsxs)(Te.A, {
                                        className: "flex-col justify-start pc:flex-row pc:items-center",
                                        children: [(0, n.jsx)(Oe, {
                                            list: a
                                        }), "need_hidden" !== d && (0, n.jsx)(y.Ay, {
                                            className: "body3 text-t-third pc:px-2xs",
                                            children: d
                                        })]
                                    })]
                                }), (0, n.jsx)(_e.A, {
                                    name: "chevron-right-f",
                                    className: "module-hover-icon h-l w-l text-iconNormal hover:text-t-Primary"
                                })]
                            })
                        }) : null]
                    })
                };
            const Ne = (0, i.memo)(Me);
            var je = r("NsjG"),
                ze = r("+uTO"),
                Fe = r("mKgd"),
                We = [{
                    key: "wallet-overview-view-switch-coin-view",
                    id: "coin",
                    elementID: "Wallet_overview_v1_coin_view"
                }, {
                    key: "wallet-overview-view-switch-account-view",
                    id: "wallet",
                    elementID: "Wallet_overview_v1_wallet_view"
                }];
            const He = function(e) {
                var t = e.onChange,
                    r = (0, o.s9)("main-uc").t,
                    a = (0, i.useState)("coin"),
                    s = a[0],
                    l = a[1],
                    c = (0, i.useCallback)((function(e, r) {
                        l(e), t(e), (0, u.qL)({
                            pageName: m.D4,
                            elementID: r
                        })
                    }), [t]);
                return (0, n.jsx)(y.Ay, {
                    className: "flex items-center mobile:mb-xl tablet:mb-m",
                    children: We.map((function(e) {
                        var t = e.key,
                            i = e.id,
                            a = e.elementID;
                        return (0, n.jsxs)(y.Ay, {
                            onClick: function() {
                                return c(i, a)
                            },
                            id: a,
                            className: "mr-xl cursor-pointer ".concat(s === i ? "text-t-primary" : "text-t-third", " flex flex-col items-center last:mr-0"),
                            children: [(0, n.jsx)(y.Ay, {
                                className: "subtitle3 mb-3xs hover:text-t-primary",
                                children: r(t)
                            }), (0, n.jsx)(y.Ay, {
                                className: "h-[3px] bg-primary transition-all duration-150 ease-linear ".concat(s === i ? "w-4" : "w-0")
                            })]
                        }, t)
                    }))
                })
            };
            var Ve, Ke = r("2URn"),
                Ge = r("1WIh"),
                qe = r("Jk97"),
                Ze = r("SY8Q"),
                Ye = r("cc4A"),
                Xe = r("OSYd"),
                Qe = r("givH"),
                $e = r("ltya"),
                Je = r("QRnj"),
                et = r("+EOf"),
                tt = r("sKJi"),
                rt = r("n13J"),
                nt = r("ntfD"),
                it = r("ycr1"),
                at = r("Jgw/"),
                ot = r("7NoT"),
                st = r("9Uxs"),
                lt = r("qnnd"),
                ct = function(e) {
                    var t = e.t,
                        r = e.coin;
                    return (0, n.jsx)(n.Fragment, {
                        children: t("cost-price-edit-title", {
                            defaultValue: "Update {{coin}} Average Cost",
                            coin: r
                        })
                    })
                };
            ! function(e) {
                e.CostPrice = "cost-price", e.TotalInvestment = "total-investment"
            }(Ve || (Ve = {}));
            var ut = [Ve.CostPrice, Ve.TotalInvestment],
                dt = function(e) {
                    var t = e.asset,
                        r = e.logoUrl,
                        s = e.amount,
                        l = e.onClose,
                        c = (0, o.s9)("exchange-wallet").t,
                        u = (0, h.useCurrency)(),
                        d = u.currency,
                        p = u.currencyMap,
                        f = (0, i.useState)(),
                        m = f[0],
                        g = f[1],
                        b = (0, v.A)(a().useState("cost-price"), 2),
                        x = b[0],
                        w = b[1],
                        k = (0, it.A)().enqueueNotification,
                        A = (0, i.useCallback)((function(e) {
                            var t, r;
                            if (!(null === (t = p[d]) || void 0 === t ? void 0 : t.rate)) return 0;
                            var n = e / (null === (r = p[d]) || void 0 === r ? void 0 : r.rate);
                            return parseFloat(n.toFixed(8))
                        }), [d, p]),
                        S = (0, i.useCallback)((function(e) {
                            g(e)
                        }), [g]),
                        C = (0, i.useCallback)((0, D.A)(M().mark((function e() {
                            var r, n, i;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, r = Number(s), n = 0, x === Ve.CostPrice && m ? (i = Number(m) * r, n = A(i)) : x === Ve.TotalInvestment && m && (n = A(Number(m))), e.next = 6, (0, nt.lb)({
                                            asset: t,
                                            totalCost: n,
                                            amount: r
                                        });
                                    case 6:
                                        window.location.reload(), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), console.error(e.t0), k(c("cost-price-update-failed", {
                                            defaultValue: "Update failed, please try again later."
                                        }), {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "center"
                                            }
                                        });
                                    case 13:
                                        return e.prev = 13, l(), e.finish(13);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9, 13, 16]
                            ])
                        }))), [s, t, m, k, A, l, x, c]),
                        _ = (0, i.useMemo)((function() {
                            var e;
                            if (!m) return !1;
                            var t = Number(m);
                            if (isNaN(t) || t <= 0) return !1;
                            var r = null === m || void 0 === m ? void 0 : m.split(".");
                            return !((null === r || void 0 === r || null === (e = r[1]) || void 0 === e ? void 0 : e.length) > 8)
                        }), [m]);
                    return (0, n.jsxs)(Te.A, {
                        className: "flex-col",
                        children: [(0, n.jsx)(y.Ay, {
                            className: "body3 mb-4 text-left text-t-primary",
                            children: c("cost-price-edit-desc", {
                                defaultValue: "Please enter your average cost or total investment amount in this coin, and the system will recalculate the cost price based on the data you provide."
                            })
                        }), (0, n.jsx)(y.Ay, {
                            className: "caption1 mb-4 text-left font-normal text-t-third",
                            children: (0, n.jsxs)(at.Ay, {
                                id: "selectGroup-CostPriceEditContent-CostPriceEditRadioItems",
                                direction: "vertical",
                                type: "single",
                                value: ut,
                                onChange: function(e) {
                                    w(null === e || void 0 === e ? void 0 : e[0])
                                },
                                className: "!gap-2",
                                children: [(0, n.jsx)(ot.A, {
                                    direction: "vertical",
                                    type: "single",
                                    value: Ve.CostPrice,
                                    children: (0, n.jsx)("div", {
                                        className: "typography-body3 flex items-center text-t-Primary",
                                        children: c("cost-price-edit-option-price", {
                                            defaultValue: "Cost Price"
                                        })
                                    })
                                }, Ve.CostPrice), (0, n.jsx)(ot.A, {
                                    direction: "vertical",
                                    type: "single",
                                    value: Ve.TotalInvestment,
                                    children: (0, n.jsx)("div", {
                                        className: "typography-body3 flex items-center text-t-Primary",
                                        children: c("cost-price-edit-option-total", {
                                            defaultValue: "Total Investment"
                                        })
                                    })
                                }, Ve.TotalInvestment)]
                            })
                        }), (0, n.jsx)(y.Ay, {
                            className: "caption1 text-left font-normal text-t-third",
                            children: (0, n.jsx)(st.A, {
                                id: "input-CostPriceEditContent-customPrice",
                                size: "large",
                                className: "w-full border-transparent bg-Input ",
                                type: "number",
                                placeholder: c("exchange-validate-requireAmout", {
                                    defaultValue: "Please enter amount"
                                }),
                                value: m,
                                onChange: S,
                                prefix: r ? (0, n.jsx)("img", {
                                    alt: "coin-logo",
                                    src: r,
                                    loading: "lazy",
                                    className: "w-5"
                                }) : null,
                                suffix: (0, n.jsx)("div", {
                                    className: "typography-subtitle1 flex items-center",
                                    children: (0, n.jsx)("div", {
                                        className: "text-t-Primary",
                                        children: d
                                    })
                                })
                            })
                        }), (0, n.jsxs)(Te.A, {
                            className: "mt-6 gap-2",
                            children: [(0, n.jsx)(lt.A, {
                                id: "btn-CostPriceEditContent-Cancel",
                                variant: "secondary",
                                onClick: function() {
                                    l()
                                },
                                style: {
                                    flex: 1
                                },
                                children: c("common-action-cancel", {
                                    defaultValue: "Cancel"
                                })
                            }), (0, n.jsx)(lt.A, {
                                id: "btn-CostPriceEditContent-Confirm",
                                variant: "primary",
                                disabled: !_,
                                style: {
                                    flex: 1
                                },
                                onClick: C,
                                children: c("common-action-confirm", {
                                    defaultValue: "Confirm"
                                })
                            })]
                        })]
                    })
                },
                pt = (0, i.createContext)(void 0),
                ft = function(e) {
                    var t = e.children,
                        r = (0, i.useState)(),
                        a = r[0],
                        o = r[1],
                        s = (0, i.useState)(!1),
                        l = s[0],
                        c = s[1];
                    return (0, n.jsx)(pt.Provider, {
                        value: {
                            assetInfo: a,
                            isVisible: l,
                            onShow: function(e) {
                                e.asset && e.amount ? (c(!0), o(e)) : console.error("Need asset and amount info")
                            },
                            onHide: function() {
                                c(!1), o(void 0)
                            }
                        },
                        children: t
                    })
                },
                ht = function() {
                    var e = (0, i.useContext)(pt);
                    if (!e) throw new Error("useCostPriceEditable must be used within a CostPriceEditableProvider");
                    return e
                };
            const mt = function() {
                var e = (0, o.s9)("exchange-wallet").t,
                    t = ht(),
                    r = t.assetInfo,
                    i = t.isVisible,
                    a = t.onHide,
                    s = r || {},
                    l = s.asset,
                    c = void 0 === l ? "" : l,
                    u = s.logoUrl,
                    d = void 0 === u ? "" : u,
                    p = s.amount,
                    f = void 0 === p ? 0 : p;
                return (0, n.jsxs)(rt.Ay, {
                    visible: i,
                    children: [(0, n.jsx)(rt.Ay.Header, {
                        children: (0, n.jsx)(ct, {
                            t: e,
                            coin: c
                        })
                    }), (0, n.jsx)(rt.Ay.Content, {
                        className: "pt-2 ",
                        children: (0, n.jsx)(dt, {
                            logoUrl: d,
                            asset: c,
                            amount: f,
                            onClose: a
                        })
                    })]
                })
            };
            var vt = r("2Bze"),
                gt = r("uV6S");
            const bt = function() {
                var e = (0, o.s9)("exchange-wallet").t,
                    t = ht(),
                    r = t.assetInfo,
                    i = t.isVisible,
                    a = t.onHide,
                    s = r || {},
                    l = s.asset,
                    c = void 0 === l ? "" : l,
                    u = s.logoUrl,
                    d = void 0 === u ? "" : u,
                    p = s.amount,
                    f = void 0 === p ? 0 : p;
                return (0, n.jsxs)(gt.A, {
                    visible: i,
                    direction: "bottom",
                    size: "auto",
                    children: [(0, n.jsxs)(Te.A, {
                        className: "h-[50px] items-center justify-between p-m",
                        children: [(0, n.jsx)("div", {
                            className: "headline4 text-lg text-t-Primary",
                            children: (0, n.jsx)(ct, {
                                t: e,
                                coin: c
                            })
                        }), (0, n.jsx)(vt.A, {
                            id: "btn-CostPriceEditDrawer-onHide-".concat(c),
                            onClick: a,
                            className: "h-5 w-5 cursor-pointer text-t-Primary"
                        })]
                    }), (0, n.jsx)(Te.A, {
                        className: "mb-4 mt-2 px-m",
                        children: (0, n.jsx)(dt, {
                            asset: c,
                            amount: f,
                            logoUrl: d,
                            onClose: a
                        })
                    })]
                })
            };
            var xt = function(e) {
                var t = e.todayPnl,
                    r = (0, s.IL)()(t),
                    a = (0, v.A)((0, s.Z4)(), 1)[0],
                    o = (0, i.useMemo)((function() {
                        return a ? "text-t-primary" : 0 == t || Number.isNaN(t) ? "text-t-third" : t > 0 ? "text-t-buy" : "text-t-third"
                    }), [a, t]);
                return void 0 === t || isNaN(t) ? (0, n.jsx)(qe._, {
                    className: "w-[80px]"
                }) : (0, n.jsx)(qe.yA, {
                    className: "body2 ".concat(o),
                    number: r
                })
            };
            const yt = a().memo(xt);
            const wt = function(e) {
                var t = e.coin,
                    r = e.name,
                    i = e.item,
                    a = (0, (0, h.useAssets)().getAssetInfo)(t) || {},
                    o = a.pdAnnounceUrl,
                    s = a.delisted,
                    l = a.pdDepositDeadline,
                    c = a.pdTradeDeadline,
                    u = a.preDelist,
                    d = a.logoUrl,
                    f = a.swapTag,
                    v = a.swapAnnounceUrl,
                    g = a.newAssetCode,
                    b = a.oldAssetCode;
                return (0, n.jsx)(p.VN, {
                    item: (0, R.A)((0, I.A)({}, i), {
                        coin: t,
                        name: r,
                        logoUrl: d || i.logoUrl,
                        isDelist: s || !1,
                        predelisted: u || !1,
                        pdDepositDeadline: l,
                        pdTradeDeadline: c,
                        predelistAnnounceUrl: o,
                        pdAnnounceUrl: o,
                        swapTag: f,
                        swapAnnounceUrl: v,
                        newAssetCode: g,
                        oldAssetCode: b
                    }),
                    itemClickTrackInfo: {
                        pageName: m.D4,
                        elementID: "Wallet_overview_v1_coin_delist",
                        df_7: t
                    },
                    learnMoreClickInfo: {
                        pageName: m.D4,
                        elementID: "Wallet_overview_v1_coin_predelist",
                        df_7: t
                    }
                })
            };
            var kt = function(e) {
                var t = e.text,
                    r = e.onClick,
                    i = e.coin;
                return (0, n.jsx)(y.Ay, {
                    className: "flex justify-center",
                    children: (0, n.jsx)(lt.A, {
                        id: "btn-BuyActionMobile-onClick-".concat(i),
                        onClick: r,
                        className: "w-[106px]",
                        sz: "small",
                        variant: "secondary",
                        children: t
                    })
                })
            };
            const At = function(e) {
                var t = e.coin,
                    r = (0, o.s9)("exchange-wallet"),
                    a = r.t,
                    l = r.i18n.language,
                    c = (0, o.s9)("main-uc").t,
                    d = (0, h.useMediaState)().isDesktop,
                    p = (0, h.useCurrency)().currency,
                    f = (0, (0, h.useBusinessKeys)().validateBusinessKey)(["tradeC2C"]),
                    v = (0, s.kY)(),
                    g = (0, i.useCallback)((function(e) {
                        if (e.stopPropagation(), f) {
                            (0, u.qL)({
                                pageName: m.D4,
                                elementID: "Wallet_overview_v1_balance0_recommend_buy",
                                df_6: t
                            });
                            var r = "https://p2p.binance.com/".concat(l, "/express/buy/").concat(t, "/").concat(p);
                            window.location.href = r
                        } else {
                            var n = v(t).join("_");
                            (0, Ee.D1)("/trade/" + n + "?type=spot")
                        }
                    }), [f, v, t, l, p]),
                    b = f ? a("exchange-wallet-cash-in", "Cash In") : c("action-trade", "Trade");
                return d ? (0, n.jsx)(y.Ay, {
                    id: f ? "btn-BuyAction-cash-in-".concat(t) : "btn-BuyAction-trade-".concat(t),
                    className: "body3 cursor-pointer text-right underline hover:text-primary",
                    onClick: g,
                    children: b
                }) : (0, n.jsx)(kt, {
                    text: b,
                    onClick: g,
                    coin: t
                })
            };
            var St = r("VjLM"),
                Ct = function(e) {
                    var t = e.item,
                        r = t.avgBuyCost,
                        i = t.asset,
                        a = t.amount,
                        o = t.logoUrl,
                        s = ht().onShow,
                        l = (0, h.useFiatPrice)()(r),
                        c = l.symbol,
                        u = l.fiatPriceNumber,
                        d = l.code;
                    return (0, n.jsx)(y.Ay, {
                        className: "body3 group text-t-Tertiary",
                        children: (0, n.jsxs)(Te.A, {
                            id: "btn-AvgCostPriceEditable-handleShowAvgCostPriceEdit-".concat(i),
                            className: "items-center justify-end hover:cursor-pointer hover:text-t-primary",
                            onClick: function(e) {
                                null === e || void 0 === e || e.stopPropagation(), null === e || void 0 === e || e.preventDefault(), null === s || void 0 === s || s({
                                    asset: i,
                                    logoUrl: o,
                                    amount: a
                                })
                            },
                            children: [(0, n.jsx)(Ye.A, {
                                className: "mr-1 hidden h-4 w-4 group-hover:inline"
                            }), (0, n.jsx)(qe.yA, {
                                number: isFinite(u) ? (0, tt.vv)(u, {
                                    currencySymbol: c,
                                    currencyCode: d
                                }) : "--"
                            })]
                        })
                    })
                },
                _t = r("wRFv"),
                Tt = r("lo+C"),
                Bt = r("TSYQ"),
                Et = r.n(Bt),
                It = r("ip6v"),
                Ut = function(e) {
                    var t = e.accountType,
                        r = e.isDisabled,
                        a = e.onClick,
                        s = void 0 === a ? function() {} : a,
                        l = (0, o.s9)("exchange-wallet").t,
                        c = (0, o.s9)("main-uc").t,
                        u = (0, i.useMemo)((function() {
                            return t === _t.S5.LOAN ? l("exchange-wallet-loan-subscribe-action-button") : t === _t.S5.SAVING ? l("exchange-wallet-action-earn", "Subscribe") : c("action-trade", "Trade")
                        }), [l, c, t]);
                    return (0, n.jsx)(y.Ay, {
                        className: Et()("body3 pr-8 text-right", {
                            "cursor-not-allowed text-t-Disabled": r,
                            "text-t-TextLink underline hover:text-primary": !r
                        }),
                        onClick: s,
                        children: u
                    })
                };
            const Lt = function(e) {
                var t = e.assetItem,
                    r = e.assetDetails,
                    i = e.loading,
                    a = t || {},
                    l = a.asset,
                    c = a.specialAsset,
                    d = a.baseAsset,
                    f = a.quoteAsset,
                    v = a.notOnlineCoin,
                    g = (0, o.s9)("exchange-wallet").language,
                    b = (0, h.useAssets)().getAssetInfo,
                    x = (0, h.useCurrency)().currency,
                    w = (0, Tt.mq)({
                        convertWidgetParams: (0, R.A)((0, I.A)({}, _t.ES), {
                            fromCoin: l,
                            targetCoin: "BNB" === l ? "BTC" : "BNB",
                            walletType: "FUNDING",
                            lang: g
                        }),
                        handleSuccess: function() {
                            window.location.href = "/".concat(g, "/my/wallet/funding")
                        }
                    }).openConvertModal,
                    k = (0, s.Fr)().symbolList;
                return i ? (0, n.jsx)(p.Rh, {}) : (null === r || void 0 === r ? void 0 : r.length) ? (0, n.jsx)(y.Ay, {
                    className: "mb-4",
                    children: r.map((function(e) {
                        var r = e.accountType,
                            i = e.amount,
                            a = e.walletName;
                        return (0, n.jsxs)(y.Ay, {
                            id: "btn-assetDetails-".concat(a),
                            className: "-mx-s flex cursor-pointer flex-wrap rounded-m px-s py-2xs",
                            onClick: function() {
                                return function(e) {
                                    var r;
                                    if (!v) {
                                        if ((0, u.qL)({
                                                pageName: m.D4,
                                                elementID: "Wallet_overview_v1_coinview_detail_".concat(null === e || void 0 === e || null === (r = e.toLowerCase) || void 0 === r ? void 0 : r.call(e)),
                                                df_6: l,
                                                df_7: !0
                                            }), e === _t.S5.LOAN) return (0, Ee.D1)("/".concat(g, "/loan"), "_blank");
                                        if (e === _t.S5.CARD) return w();
                                        if ("Alpha" === e) return (0, It.He)(t.chainName, t.contractAddress, g);
                                        var n = function() {
                                                var e = null === k || void 0 === k ? void 0 : k.find((function(e) {
                                                    return e.baseAsset === (null === d || void 0 === d ? void 0 : d.toUpperCase())
                                                }));
                                                return null != e ? e.specialAsset ? [e.quoteAsset, e.baseAsset] : [e.baseAsset, e.quoteAsset] : c ? [f, d] : [d, f]
                                            }(),
                                            i = b(l),
                                            a = (null === i || void 0 === i ? void 0 : i.isLegalMoney) ? "/".concat(g, "/crypto/buy/").concat(x) : (0, Ee.X7)({
                                                accountType: e,
                                                asset: l,
                                                language: g,
                                                displayName: n
                                            });
                                        (0, Ee.D1)(a, "_blank")
                                    }
                                }(r)
                            },
                            children: [(0, n.jsx)(y.Ay, {
                                className: "body2 pr- flex w-2/5 justify-start pl-3xl",
                                children: a
                            }), (0, n.jsx)(qe.yA, {
                                className: "body2 flex w-1/5 justify-end pr-4",
                                number: (0, tt.hn)(i)
                            }), (0, n.jsx)(y.Ay, {
                                className: "flex flex-grow justify-end",
                                children: !v && (0, n.jsx)(Ut, {
                                    isDisabled: !1,
                                    accountType: r
                                })
                            })]
                        }, a)
                    }))
                }) : (0, n.jsx)(n.Fragment, {})
            };
            var Dt = {
                sortKey: "",
                sortType: "",
                isDesc: !1
            };
            const Pt = function(e) {
                var t = e.hideMode,
                    r = e.searchKeyword,
                    a = (0, o.s9)("exchange-wallet"),
                    l = a.t,
                    c = a.i18n.language,
                    d = (0, o.s9)("main-uc").t,
                    f = (0, h.useFiatPrice)(),
                    g = (0, Be.LR)({
                        hideMode: t,
                        searchKeyword: r
                    }),
                    b = g.holdingList,
                    x = g.loading,
                    w = (0, s.sx)().totalAssetBalance,
                    k = Number(w) > 0,
                    A = (0, i.useState)(Dt),
                    S = A[0],
                    C = A[1],
                    _ = (0, i.useState)(1),
                    T = _[0],
                    B = _[1],
                    E = (0, i.useState)({
                        asset: "",
                        isCexAsset: !0
                    }),
                    I = E[0],
                    U = E[1],
                    L = (0, i.useState)(!1),
                    P = L[0],
                    R = L[1],
                    O = (0, i.useState)([]),
                    N = O[0],
                    j = O[1],
                    z = (0, i.useState)(!1),
                    F = z[0],
                    W = z[1],
                    H = (0, i.useState)(-1),
                    V = H[0],
                    K = H[1],
                    G = (0, i.useState)(!1),
                    q = G[0],
                    Z = G[1],
                    Y = (0, i.useMemo)((function() {
                        var e = Math.ceil((null === b || void 0 === b ? void 0 : b.length) / 10);
                        return T <= e
                    }), [T, b]),
                    X = (0, s.eU)({
                        pairs: b,
                        isPair: !1,
                        sortState: S,
                        currentPage: T,
                        pageSize: 10,
                        language: c
                    }),
                    Q = k ? function(e) {
                        var t = e.t,
                            r = e.transToFiat,
                            i = e.tMainUC,
                            a = e.currentItem,
                            o = e.showDetail;
                        return [{
                            title: t("wallet-overview-assets-label-coin"),
                            dataIndex: "asset",
                            sortKey: "asset",
                            sortType: "string",
                            justifyContent: "justify-start",
                            width: "w-2/5",
                            render: function(e) {
                                var r = e || {},
                                    i = r.baseAsset,
                                    a = r.baseAssetName;
                                return !1 === e.isCexAsset ? (0, n.jsxs)(y.Ay, {
                                    id: "btn-CoinItem-handleClick-".concat(i),
                                    className: "flex items-center",
                                    children: [(0, n.jsx)(St.A, {
                                        className: "h-[20px] w-[20px] pc:h-[24px] pc:w-[24px]",
                                        src: e.logoUrl,
                                        chainIconUrl: e.chainIconUrl
                                    }), (0, n.jsxs)(y.Ay, {
                                        className: "ml-2xs flex-1",
                                        children: [(0, n.jsxs)(y.Ay, {
                                            className: "flex items-center",
                                            children: [(0, n.jsx)(y.Ay, {
                                                className: "subtitle3 pr-4xs",
                                                children: i
                                            }), (0, n.jsx)($e.A, {
                                                className: "no-flex whitespace-nowrap",
                                                label: t("exchange-wallet-Alpha", "Alpha"),
                                                variant: "warn",
                                                size: "middle"
                                            })]
                                        }), (0, n.jsx)(p.Tb, {
                                            className: "body3 tablet:body2 mobile:body2 max-w-[80px] text-t-third",
                                            children: a
                                        })]
                                    })]
                                }) : (0, n.jsx)(wt, {
                                    item: e,
                                    coin: i,
                                    name: a
                                })
                            }
                        }, {
                            title: t("wallet-overview-assets-label-amount"),
                            dataIndex: "amount",
                            sortKey: "valuationAmount",
                            sortType: "number",
                            justifyContent: "justify-end",
                            width: "w-1/5",
                            render: function(e) {
                                var t = e || {},
                                    i = t.amount,
                                    a = t.valuationAmount,
                                    o = t.fiatPriceNumber,
                                    s = t.fiatCode,
                                    l = t.fiatSymbol,
                                    c = (0, fe.lw)(i, o).toNumber();
                                if (!c && i) {
                                    var u = r(Number(a), "USDT");
                                    c = null === u || void 0 === u ? void 0 : u.fiatPriceNumber, s = null === u || void 0 === u ? void 0 : u.code, l = null === u || void 0 === u ? void 0 : u.symbol
                                }
                                return (0, n.jsxs)(y.Ay, {
                                    className: "text-right",
                                    children: [(0, n.jsx)(qe.yA, {
                                        className: "body2",
                                        number: !1 === e.isCexAsset ? (0, tt.qE)(i) : (0, tt.hn)(i)
                                    }), (0, n.jsx)(qe.yA, {
                                        className: "body3 text-t-Tertiary",
                                        number: !1 === e.isCexAsset ? (0, tt.lS)(c, tt._o, {
                                            currencySymbol: l,
                                            currencyCode: s
                                        }) : (0, tt.vv)(c, {
                                            currencySymbol: l,
                                            currencyCode: s
                                        })
                                    })]
                                })
                            }
                        }, {
                            title: (0, n.jsx)(qe.uz, {}),
                            dataIndex: "close",
                            disableSort: !0,
                            sortKey: "fiatPriceNumber",
                            sortType: "number",
                            justifyContent: "justify-end",
                            width: "w-1/5",
                            render: function(e) {
                                var t = e || {},
                                    r = t.fiatPriceFormat,
                                    i = t.isLegalMoney,
                                    a = t.isStableCoin;
                                return r ? (0, n.jsxs)(y.Ay, {
                                    className: "text-right",
                                    children: [(0, n.jsx)(y.Ay, {
                                        className: "body2",
                                        children: r
                                    }), i || a || !e.isCexAsset ? Ze.jr : (0, n.jsx)(Ct, {
                                        item: e
                                    })]
                                }) : Ze.jr
                            }
                        }, {
                            title: i("balance-pnl-todayPnl"),
                            dataIndex: "profitNumber",
                            sortKey: "profitNumber",
                            sortType: "number",
                            justifyContent: "justify-end",
                            width: "",
                            render: function(e) {
                                var t = e || {},
                                    r = t.profit,
                                    i = t.isLegalMoney,
                                    a = t.isStableCoin;
                                return (0, n.jsx)(Te.A, {
                                    className: "-mr-[6px] items-center text-right",
                                    children: i || a || !e.isCexAsset ? Ze.jr : (0, n.jsx)(yt, {
                                        todayPnl: Number(r)
                                    })
                                })
                            }
                        }, {
                            title: "",
                            dataIndex: "",
                            sortKey: "",
                            sortType: "",
                            justifyContent: "justify-end",
                            width: "w-[20px]",
                            render: function(e) {
                                var t = a.isCexAsset == e.isCexAsset && a.asset === e.asset;
                                return (0, n.jsx)(Te.A, {
                                    className: "-mr-2 items-center justify-end ",
                                    children: t && o ? (0, n.jsx)(Xe.A, {
                                        name: "ChevronUpF",
                                        className: "text-textPrimary h-5 w-5"
                                    }) : (0, n.jsx)(Qe.A, {
                                        name: "ChevronDownF",
                                        className: "h-5 w-5 text-iconNormal"
                                    })
                                })
                            }
                        }]
                    }({
                        t: l,
                        transToFiat: f,
                        tMainUC: d,
                        currentItem: I,
                        showDetail: F
                    }) : function(e) {
                        var t = e.t,
                            r = e.transToFiat,
                            i = e.tMainUC;
                        return [{
                            title: t("wallet-overview-assets-label-coin"),
                            dataIndex: "asset",
                            sortKey: "asset",
                            sortType: "string",
                            justifyContent: "justify-start",
                            width: "w-2/5",
                            render: function(e) {
                                var r = e || {},
                                    i = r.baseAsset,
                                    a = r.baseAssetName,
                                    o = r.logoUrl;
                                return !1 === e.isCexAsset ? (0, n.jsxs)(y.Ay, {
                                    id: "btn-CoinItem-handleClick-".concat(i),
                                    className: "flex items-center",
                                    children: [(0, n.jsx)(Je.A, {
                                        isRound: !0,
                                        src: e.logoUrl,
                                        className: "h-[20px] w-[20px] pc:h-[24px] pc:w-[24px]"
                                    }), (0, n.jsxs)(y.Ay, {
                                        className: "ml-2xs flex-1",
                                        children: [(0, n.jsxs)(y.Ay, {
                                            className: "flex items-center",
                                            children: [(0, n.jsx)(y.Ay, {
                                                className: "subtitle3 pr-4xs",
                                                children: i
                                            }), (0, n.jsx)($e.A, {
                                                className: "no-flex whitespace-nowrap",
                                                label: t("exchange-wallet-Alpha", "Alpha"),
                                                variant: "warn",
                                                size: "middle"
                                            })]
                                        }), (0, n.jsx)(p.Tb, {
                                            className: "body3 tablet:body2 mobile:body2 max-w-[80px] text-t-third",
                                            children: a
                                        })]
                                    })]
                                }) : (0, n.jsxs)(y.Ay, {
                                    className: "flex items-center",
                                    children: [(0, n.jsx)(Je.A, {
                                        isRound: !0,
                                        src: o,
                                        className: "h-[24px] w-[24px]"
                                    }), (0, n.jsxs)(y.Ay, {
                                        className: "ml-2xs flex-1",
                                        children: [(0, n.jsx)(y.Ay, {
                                            className: "subtitle3",
                                            children: i
                                        }), (0, n.jsx)(p.Tb, {
                                            className: "body3 max-w-[300px] text-t-Tertiary",
                                            children: a
                                        })]
                                    })]
                                })
                            }
                        }, {
                            title: t("wallet-overview-assets-label-amount"),
                            dataIndex: "amount",
                            sortKey: "valuationAmount",
                            sortType: "number",
                            justifyContent: "justify-end",
                            width: "w-1/5",
                            render: function(e) {
                                var t = e || {},
                                    i = t.amount,
                                    a = t.valuationAmount,
                                    o = t.fiatPriceNumber,
                                    s = t.fiatCode,
                                    l = t.fiatSymbol,
                                    c = (0, fe.lw)(i, o).toNumber();
                                if (!c && i) {
                                    var u = r(Number(a), "USDT");
                                    c = null === u || void 0 === u ? void 0 : u.fiatPriceNumber, s = null === u || void 0 === u ? void 0 : u.code, l = null === u || void 0 === u ? void 0 : u.symbol
                                }
                                return (0, n.jsxs)(y.Ay, {
                                    className: "text-right",
                                    children: [(0, n.jsx)(qe.yA, {
                                        className: "body2",
                                        number: !1 === e.isCexAsset ? (0, tt.qE)(i) : (0, tt.hn)(i)
                                    }), (0, n.jsx)(qe.yA, {
                                        className: "body3 text-t-Tertiary",
                                        number: !1 === e.isCexAsset ? (0, tt.lS)(c, tt._o, {
                                            currencySymbol: l,
                                            currencyCode: s
                                        }) : (0, tt.vv)(c, {
                                            currencySymbol: l,
                                            currencyCode: s
                                        })
                                    })]
                                })
                            }
                        }, {
                            title: t("common-th-coin-price", "Coin Price"),
                            dataIndex: "close",
                            sortKey: "fiatPriceNumber",
                            sortType: "number",
                            justifyContent: "justify-end",
                            width: "w-1/5",
                            render: function(e) {
                                var t = (e || {}).fiatPriceFormat;
                                return t ? (0, n.jsx)(y.Ay, {
                                    className: "-mr-4xs text-right",
                                    children: (0, n.jsx)(y.Ay, {
                                        className: "body2",
                                        children: t
                                    })
                                }) : Ze.jr
                            }
                        }, {
                            title: i("balance-th-action"),
                            dataIndex: "action",
                            sortKey: "",
                            sortType: "",
                            justifyContent: "justify-end",
                            width: "w-1/5",
                            render: function(e) {
                                var t = (e || {}).asset;
                                return !1 === e.isCexAsset ? (0, n.jsx)(y.Ay, {
                                    className: "mr-8",
                                    children: (0, n.jsx)(et.A, {
                                        useReactPopper: !0,
                                        arrow: !0,
                                        tooltips: (0, n.jsx)(y.Ay, {
                                            onClick: function(e) {
                                                e.stopPropagation()
                                            },
                                            children: (0, n.jsx)(o.x6, {
                                                t: i,
                                                i18nKey: "alpha-trade-tips",
                                                components: {
                                                    tLink: (0, n.jsx)("a", {
                                                        className: "BtnLink2 cursor-pointer underline",
                                                        href: "/download",
                                                        target: "_blank"
                                                    })
                                                },
                                                defaults: "The trading feature for Alpha tokens on Binance website is not yet available, if you need to trade Alpha tokens, can use <tLink>Binance App</tLink>."
                                            })
                                        }),
                                        placement: "top-end",
                                        bubbleFontSize: 14,
                                        delay: {
                                            click: 50,
                                            enter: 50,
                                            leave: 50
                                        },
                                        enableClickBubble: !0,
                                        offset: 12,
                                        trigger: "hover",
                                        variant: "gray",
                                        children: (0, n.jsx)(y.Ay, {
                                            className: "body3 cursor-not-allowed text-right text-t-Disabled",
                                            children: i("action-trade", "Trade")
                                        })
                                    })
                                }) : (0, n.jsx)(Te.A, {
                                    className: "items-center",
                                    children: (0, n.jsx)(At, {
                                        coin: t
                                    })
                                })
                            }
                        }]
                    }({
                        t: l,
                        transToFiat: f,
                        tMainUC: d
                    }),
                    $ = (0, i.useCallback)((function() {
                        B((function(e) {
                            return e + 1
                        }))
                    }), []),
                    J = (0, i.useCallback)(function() {
                        var e = (0, D.A)(M().mark((function e(t, r) {
                            var n;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((0, u.qL)({
                                                pageName: m.D4,
                                                elementID: "Wallet_overview_v1_coinview_detail",
                                                df_6: null === t || void 0 === t ? void 0 : t.asset,
                                                df_7: !0
                                            }), W((function(e) {
                                                return V !== r || !e
                                            })), K(r), U(t), !1 !== t.isCexAsset || "ALPHA" !== t.coinBusinessType) {
                                            e.next = 8;
                                            break
                                        }
                                        j([{
                                            accountType: "Alpha",
                                            walletName: d("enum-account-alpha", "Alpha"),
                                            amount: t.amount,
                                            valuationAmount: t.valuationAmount
                                        }]), e.next = 15;
                                        break;
                                    case 8:
                                        if (!1 !== I.isCexAsset && (null === I || void 0 === I ? void 0 : I.asset) === (null === t || void 0 === t ? void 0 : t.asset)) {
                                            e.next = 15;
                                            break
                                        }
                                        return R(!0), e.next = 12, (0, Ge.I9)({
                                            asset: null === t || void 0 === t ? void 0 : t.asset
                                        });
                                    case 12:
                                        n = e.sent, R(!1), j((null === n || void 0 === n ? void 0 : n.assetDetails) || []);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(), [I.isCexAsset, null === I || void 0 === I ? void 0 : I.asset, V, d]);
                return (0, i.useEffect)((function() {
                    if (!q && 1 === (null === b || void 0 === b ? void 0 : b.length)) {
                        var e = setInterval((function() {
                            var t, r = (0, v.A)((null === (t = document.querySelector(".pc-coin-view")) || void 0 === t ? void 0 : t.childNodes) || [], 1)[0];
                            !q && (0, Ke.A)(r, HTMLElement) && (r.click(), Z(!0), clearInterval(e))
                        }), 500);
                        return function() {
                            return clearInterval(e)
                        }
                    }
                }), [b, q]), (0, n.jsxs)(ft, {
                    children: [(0, n.jsx)(qe.B3, {
                        tableKey: "coin-view",
                        data: X,
                        columns: Q,
                        loading: x,
                        sortState: S,
                        setSortState: C,
                        canLoadMore: !0,
                        hasMoreData: Y,
                        onLoadMore: $,
                        infiniteScroll: k,
                        onRow: J,
                        wrapClassName: "pc-coin-view",
                        expandedRowRender: k ? (0, n.jsx)(Lt, {
                            loading: P,
                            assetItem: I,
                            assetDetails: N
                        }) : null,
                        skeletonPlaceholderRows: 9,
                        loadingStyle: "Skeleton"
                    }), (0, n.jsx)(mt, {})]
                })
            };
            var Rt = r("AMRt"),
                Ot = r("SPzT"),
                Mt = r("rO4t"),
                Nt = function(e) {
                    var t = e.label,
                        r = e.children,
                        i = (0, U.A)(e, ["label", "children"]);
                    return (0, n.jsxs)(y.Ay, (0, R.A)((0, I.A)({
                        id: "btn-TextItem-".concat(t),
                        className: "body3 mb-s flex justify-between last:mb-0"
                    }, i), {
                        children: [(0, n.jsx)(y.Ay, {
                            children: t
                        }), (0, n.jsx)(y.Ay, {
                            children: r
                        })]
                    }))
                };
            const jt = function(e) {
                var t = e.item,
                    r = (0, o.s9)("exchange-wallet"),
                    a = r.t,
                    l = r.i18n.language,
                    c = (0, o.s9)("main-uc").t,
                    d = (0, s.IO)(),
                    f = d.depositUrl,
                    v = d.withdrawUrl,
                    b = (0, s.sx)().totalAssetBalance,
                    x = (0, h.useAssets)().getAssetInfo,
                    w = (0, h.useCurrency)().currency,
                    k = (0, h.useFiatPrice)(),
                    A = t || {},
                    S = A.amount,
                    C = A.asset,
                    _ = A.valuationAmount,
                    T = A.fiatPriceFormat,
                    B = A.specialAsset,
                    E = A.baseAsset,
                    I = A.quoteAsset,
                    U = A.profit,
                    L = A.notOnlineCoin,
                    P = A.isStableCoin,
                    R = A.isLegalMoney,
                    O = A.avgBuyCost,
                    N = A.logoUrl,
                    j = (0, i.useState)(!1),
                    z = j[0],
                    F = j[1],
                    W = (0, i.useState)(!1),
                    H = W[0],
                    V = W[1],
                    K = (0, i.useState)([]),
                    G = K[0],
                    q = K[1],
                    Z = ht().onShow,
                    Y = (0, i.useCallback)((function() {
                        F((function(e) {
                            return !e
                        }))
                    }), []),
                    X = (0, i.useCallback)((0, D.A)(M().mark((function e() {
                        var r;
                        return M().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (F(!0), (0, u.qL)({
                                            pageName: m.D4,
                                            elementID: "Wallet_overview_v1_coinview_detail",
                                            df_6: C,
                                            df_7: !0
                                        }), !1 !== t.isCexAsset || "ALPHA" !== t.coinBusinessType) {
                                        e.next = 6;
                                        break
                                    }
                                    q([{
                                        accountType: "Alpha",
                                        walletName: c("enum-account-alpha", "Alpha"),
                                        amount: t.amount,
                                        valuationAmount: t.valuationAmount
                                    }]), e.next = 10;
                                    break;
                                case 6:
                                    return e.next = 8, (0, Ge.I9)({
                                        asset: C
                                    });
                                case 8:
                                    r = e.sent, q((null === r || void 0 === r ? void 0 : r.assetDetails) || []);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [C, t.amount, t.coinBusinessType, t.isCexAsset, t.valuationAmount, c]),
                    Q = (0, s.Fr)().symbolList,
                    $ = k(_, "USDT"),
                    J = (0, h.useFiatPrice)()(O),
                    ee = J.symbol,
                    te = J.fiatPrice,
                    re = !R && !P && O !== Ze.HO && t.isCexAsset;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(y.Ay, {
                        id: "btn-Detail-handleDetail-".concat(C),
                        onClick: X,
                        children: (0, n.jsx)(Ot.A, {
                            className: "text-base hover:text-primary"
                        })
                    }), (0, n.jsxs)(gt.A, {
                        visible: z,
                        direction: "bottom",
                        onClose: Y,
                        children: [(0, n.jsxs)(y.Ay, {
                            className: "flex items-center justify-between p-m",
                            children: [(0, n.jsx)(y.Ay, {
                                className: "subtitle3",
                                children: C
                            }), (0, n.jsx)(vt.A, {
                                id: "btn-Detail-toggleVisible-".concat(C),
                                className: "text-2xl text-iconNormal",
                                onClick: Y
                            })]
                        }), (0, n.jsxs)(y.Ay, {
                            className: "border-b border-line px-m pb-xl pt-2xs",
                            children: [(0, n.jsx)(Nt, {
                                label: a("wallet-overview-assets-label-amount"),
                                children: (0, n.jsxs)(y.Ay, {
                                    className: "text-right",
                                    children: [(0, n.jsx)(qe.yA, {
                                        className: "body3",
                                        number: !1 === t.isCexAsset ? (0, tt.qE)(S) : (0, tt.hn)(S)
                                    }), (0, n.jsx)(qe.yA, {
                                        className: "body3 text-t-third",
                                        number: !1 === t.isCexAsset ? (0, tt.lS)(null === $ || void 0 === $ ? void 0 : $.fiatPriceNumber, tt._o, {
                                            currencySymbol: null === $ || void 0 === $ ? void 0 : $.symbol,
                                            currencyCode: null === $ || void 0 === $ ? void 0 : $.code
                                        }) : (0, tt.vv)(null === $ || void 0 === $ ? void 0 : $.fiatPriceNumber, {
                                            currencySymbol: null === $ || void 0 === $ ? void 0 : $.symbol,
                                            currencyCode: null === $ || void 0 === $ ? void 0 : $.code
                                        })
                                    })]
                                })
                            }), null === G || void 0 === G ? void 0 : G.map((function(e) {
                                var t = e.accountType,
                                    r = e.amount,
                                    i = e.walletName;
                                return (0, n.jsx)(Nt, {
                                    label: i,
                                    onClick: function() {
                                        return function(e) {
                                            var t;
                                            if (!L) {
                                                var r = function() {
                                                        var e = null === Q || void 0 === Q ? void 0 : Q.find((function(e) {
                                                            return e.baseAsset === (null === E || void 0 === E ? void 0 : E.toUpperCase())
                                                        }));
                                                        return null != e ? e.specialAsset ? [e.quoteAsset, e.baseAsset] : [e.baseAsset, e.quoteAsset] : B ? [I, E] : [E, I]
                                                    }(),
                                                    n = x(C),
                                                    i = (null === n || void 0 === n ? void 0 : n.isLegalMoney) ? "/".concat(l, "/crypto/buy/").concat(w) : (0, Ee.X7)({
                                                        accountType: e,
                                                        asset: C,
                                                        language: l,
                                                        displayName: r
                                                    });
                                                (0, u.qL)({
                                                    pageName: m.D4,
                                                    elementID: "Wallet_overview_v1_coinview_detail_".concat(null === e || void 0 === e || null === (t = e.toLowerCase) || void 0 === t ? void 0 : t.call(e)),
                                                    df_6: C,
                                                    df_7: !0
                                                }), (0, Ee.D1)(i, "_blank")
                                            }
                                        }(t)
                                    },
                                    children: r
                                }, t)
                            })), (0, n.jsx)(Nt, {
                                label: a("common-th-coin-price", "Coin Price"),
                                children: T
                            }), Number(b) > 0 && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(Nt, {
                                    label: (0, n.jsxs)(Te.A, {
                                        id: "btn-th-cost-price-".concat(C),
                                        className: "items-center",
                                        onClick: function() {
                                            V(!0)
                                        },
                                        children: [a("common-th-cost-price", "Cost Price"), (0, n.jsx)(Mt.A, {
                                            className: "ml-1 text-iconNormal",
                                            size: 16
                                        })]
                                    }),
                                    children: (0, n.jsxs)(Te.A, {
                                        className: "items-center",
                                        children: [(0, n.jsx)(qe.yA, {
                                            number: "".concat(ee, " ").concat(te)
                                        }), re ? (0, n.jsx)(Ye.A, {
                                            id: "btn-handleShowAvgCostPriceEdit-".concat(C),
                                            className: "ml-2 h-4 w-4 text-iconNormal",
                                            onClick: function(e) {
                                                null === e || void 0 === e || e.stopPropagation(), null === e || void 0 === e || e.preventDefault(), null === Z || void 0 === Z || Z({
                                                    asset: C,
                                                    logoUrl: N,
                                                    amount: S
                                                })
                                            }
                                        }) : null]
                                    })
                                }), R || P || !t.isCexAsset ? null : (0, n.jsx)(Nt, {
                                    label: c("balance-pnl-todayPnl"),
                                    children: (0, n.jsx)(yt, {
                                        todayPnl: U
                                    })
                                })]
                            })]
                        }), (0, n.jsx)(y.Ay, {
                            className: "flex flex-col items-center p-m",
                            children: !1 === t.isCexAsset ? null : Number(b) > 0 ? (0, n.jsx)(p.wr, {
                                position: g.Ob.WALLET_OVERVIEW_PAGE,
                                depositUrl: f,
                                withdrawUrl: v,
                                onTransfer: Y,
                                depositTrackInfo: m.b1.DEPOSIT,
                                withdrawTrackInfo: m.b1.WITHDRAW,
                                transferTrackInfo: m.b1.TRANSFER
                            }) : (0, n.jsx)(At, {
                                coin: C
                            })
                        })]
                    }), (0, n.jsx)(qe.HC, {
                        isShow: H,
                        onClose: function() {
                            V(!1)
                        }
                    }), (0, n.jsx)(bt, {})]
                })
            };
            var zt = {
                    sortKey: "",
                    sortType: "",
                    isDesc: !1
                },
                Ft = new Array(5).fill({});
            const Wt = function(e) {
                var t = e.hideMode,
                    r = e.searchKeyword,
                    a = (0, o.s9)("exchange-wallet"),
                    l = a.t,
                    c = a.i18n.language,
                    u = (0, Be.LR)({
                        hideMode: t,
                        searchKeyword: r
                    }),
                    d = u.holdingList,
                    f = u.showSkeletonPlaceholder,
                    m = (0, i.useState)(1),
                    v = m[0],
                    g = m[1],
                    b = (0, h.useFiatPrice)(),
                    x = (0, s.eU)({
                        pairs: d,
                        isPair: !1,
                        sortState: zt,
                        currentPage: v,
                        pageSize: 10,
                        language: c
                    }),
                    w = (0, i.useMemo)((function() {
                        return Math.ceil((null === d || void 0 === d ? void 0 : d.length) / 10)
                    }), [null === d || void 0 === d ? void 0 : d.length]),
                    k = f ? Ft : x;
                return (0, n.jsxs)(y.Ay, {
                    className: "mt-m",
                    children: [null === k || void 0 === k ? void 0 : k.map((function(e, t) {
                        var r = b(null === e || void 0 === e ? void 0 : e.valuationAmount, "USDT");
                        return (0, n.jsxs)(y.Ay, {
                            className: "mb-2xs flex items-center justify-between py-xs last:mb-0",
                            children: [f ? (0, n.jsx)(qe.vY, {}) : !1 === e.isCexAsset ? (0, n.jsxs)(y.Ay, {
                                id: "btn-CoinItem-handleClick-".concat(null === e || void 0 === e ? void 0 : e.baseAsset),
                                className: "flex items-center",
                                children: [(0, n.jsx)(St.A, {
                                    className: "h-[20px] w-[20px] pc:h-[24px] pc:w-[24px]",
                                    src: e.logoUrl,
                                    chainIconUrl: e.chainIconUrl
                                }), (0, n.jsxs)(y.Ay, {
                                    className: "ml-2xs flex-1",
                                    children: [(0, n.jsxs)(y.Ay, {
                                        className: "flex items-center",
                                        children: [(0, n.jsx)(y.Ay, {
                                            className: "subtitle3 pr-4xs",
                                            children: null === e || void 0 === e ? void 0 : e.baseAsset
                                        }), (0, n.jsx)($e.A, {
                                            className: "no-flex whitespace-nowrap",
                                            label: l("exchange-wallet-Alpha", "Alpha"),
                                            variant: "warn",
                                            size: "middle"
                                        })]
                                    }), (0, n.jsx)(p.Tb, {
                                        className: "body3 tablet:body2 mobile:body2 max-w-[80px] text-t-third",
                                        children: null === e || void 0 === e ? void 0 : e.baseAssetName
                                    })]
                                })]
                            }) : (0, n.jsx)(wt, {
                                item: e,
                                coin: null === e || void 0 === e ? void 0 : e.baseAsset,
                                name: null === e || void 0 === e ? void 0 : e.baseAssetName
                            }), (0, n.jsxs)(y.Ay, {
                                className: "flex items-center",
                                children: [(0, n.jsx)(y.Ay, {
                                    className: "mr-s text-right",
                                    children: f ? (0, n.jsx)(qe.Ru, {}) : (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(qe.yA, {
                                            className: "body2",
                                            number: !1 === e.isCexAsset ? (0, tt.qE)((null === e || void 0 === e ? void 0 : e.amount) || 0) : (0, tt.hn)((null === e || void 0 === e ? void 0 : e.amount) || 0)
                                        }), (0, n.jsx)(qe.yA, {
                                            className: "body3 text-t-third",
                                            number: !1 === e.isCexAsset ? (0, tt.lS)(null === r || void 0 === r ? void 0 : r.fiatPriceNumber, tt._o, {
                                                currencySymbol: null === r || void 0 === r ? void 0 : r.symbol,
                                                currencyCode: null === r || void 0 === r ? void 0 : r.code
                                            }) : (0, tt.vv)(null === r || void 0 === r ? void 0 : r.fiatPriceNumber, {
                                                currencySymbol: null === r || void 0 === r ? void 0 : r.symbol,
                                                currencyCode: null === r || void 0 === r ? void 0 : r.code
                                            })
                                        })]
                                    })
                                }), (0, n.jsx)(ft, {
                                    children: (0, n.jsx)(jt, {
                                        item: e
                                    })
                                })]
                            })]
                        }, "".concat(null === e || void 0 === e ? void 0 : e.asset, "-").concat(e.isCexAsset, "-").concat(t))
                    })), w > 1 && (0, n.jsx)(y.Ay, {
                        className: "mt-xl flex justify-center",
                        children: (0, n.jsx)(Rt.A, {
                            total: w,
                            current: v,
                            onChange: function(e) {
                                return g(e)
                            }
                        })
                    })]
                })
            };
            const Ht = function(e) {
                var t = e.hideMode,
                    r = e.searchKeyword,
                    a = (0, h.useMediaState)().isDesktop,
                    o = (0, s.sx)().totalAssetBalance;
                return (0, i.useEffect)((function() {
                    0 === Number(o) && (0, u.er)({
                        pageName: m.D4,
                        elementID: "Wallet_overview_v1_balance0_recommend"
                    })
                }), [o]), a ? (0, n.jsx)(Pt, {
                    hideMode: t,
                    searchKeyword: r
                }) : (0, n.jsx)(Wt, {
                    hideMode: t,
                    searchKeyword: r
                })
            };
            const Vt = function() {
                var e = (0, o.s9)("exchange-wallet"),
                    t = e.t,
                    r = e.i18n.language,
                    a = (0, s.sx)(),
                    l = a.totalAssetBalance,
                    c = a.loading,
                    d = (0, i.useCallback)((function() {
                        (0, u.qL)({
                            pageName: m.D4,
                            elementID: "Wallet_overview_v1_balance0_more"
                        }), window.location.href = "/".concat(r, "/markets/overview")
                    }), [r]);
                return (0, n.jsxs)(y.Ay, {
                    className: "flex justify-between",
                    children: [(0, n.jsx)(y.Ay, {
                        className: "subtitle1 pc:headline6",
                        children: t("wallet-My-Assets")
                    }), 0 === Number(l) && !c && (0, n.jsxs)(y.Ay, {
                        id: "btn-HeadTitle-handleClick",
                        className: "overview-module-hover flex cursor-pointer items-center",
                        onClick: d,
                        children: [(0, n.jsx)(y.Ay, {
                            className: "subtitle4",
                            children: t("wallet-My-Assets-viewAllAssets", "View All 350+ Coins")
                        }), (0, n.jsx)(_e.A, {
                            className: "module-hover-icon text-base text-iconNormal"
                        })]
                    })]
                })
            };
            var Kt = (0, ze.Ay)((function() {
                    return r.e(3941).then(r.bind(r, "zxE0"))
                })),
                Gt = function(e) {
                    var t = e.hideMode,
                        r = e.changeHideMode,
                        a = (0, o.s9)("exchange-wallet").t,
                        s = (0, h.useMediaState)().isDesktop,
                        l = (0, Fe.vx)().searchKeyword,
                        c = (0, i.useState)("coin"),
                        d = c[0],
                        f = c[1],
                        v = (0, i.useCallback)((function(e) {
                            f(e)
                        }), []);
                    return (0, n.jsxs)(y.Ay, {
                        className: s ? "mt-xl flex flex-col justify-between rounded-xl border border-solid border-line p-xl" : "mt-[64px]",
                        children: [(0, n.jsx)(Vt, {}), (0, n.jsxs)(y.Ay, {
                            className: "mt-xl pc:flex pc:items-center pc:justify-between",
                            children: [(0, n.jsx)(He, {
                                onChange: v
                            }), (0, n.jsxs)(y.Ay, {
                                className: "mb-3xs flex items-center mobile:justify-between tablet:justify-between",
                                children: [(0, n.jsx)(y.Ay, {
                                    className: "order-2 pc:order-1 ".concat("coin" === d ? "visible" : "invisible"),
                                    children: (0, n.jsx)(Fe.Ay, {
                                        trackFn: function() {
                                            (0, u.qL)({
                                                pageName: m.D4,
                                                elementID: "Wallet_overview_v1_open_search"
                                            })
                                        }
                                    })
                                }), (0, n.jsx)(y.Ay, {
                                    className: "order-1 pc:order-2",
                                    children: (0, n.jsx)(p.yi, {
                                        value: t,
                                        setHideMode: r,
                                        text: a("wallet-hide-small-balance", "Hide assets <1 USD"),
                                        trackFn: function() {
                                            (0, u.qL)({
                                                elementId: "Wallet_overview_v1_hide_small_balance",
                                                pageName: m.D4
                                            })
                                        }
                                    })
                                })]
                            })]
                        }), "coin" === d && (0, n.jsx)(Ht, {
                            hideMode: t,
                            searchKeyword: l
                        }), "wallet" === d && (0, n.jsx)(i.Suspense, {
                            fallback: null,
                            children: (0, n.jsx)(Kt, {
                                hideMode: t
                            })
                        })]
                    })
                };
            const qt = function() {
                var e = je.IG.getItem("wallet_hide_0_balance", !1) || !1,
                    t = (0, i.useState)(e),
                    r = t[0],
                    a = t[1],
                    o = (0, i.useCallback)((function(e) {
                        a(e), je.IG.setItem("wallet_hide_0_balance", e)
                    }), []);
                return (0, n.jsx)(Fe.fZ, {
                    children: (0, n.jsx)(Gt, {
                        hideMode: r,
                        changeHideMode: o
                    })
                })
            };
            r("Hgnr");

            function Zt() {
                return null
            }
            var Yt = (0, d.A)((function() {
                    return r.e(5747).then(r.bind(r, "baTz"))
                }), {
                    webpack: function() {
                        return ["baTz"]
                    },
                    loading: Zt,
                    ssr: !0
                }),
                Xt = (0, d.A)((function() {
                    return r.e(4271).then(r.bind(r, "7VNp"))
                }), {
                    webpack: function() {
                        return ["7VNp"]
                    },
                    loading: Zt,
                    ssr: !0
                }),
                Qt = function() {
                    var e = (0, l.CY)().loading;
                    (0, h.useTheme)().theme;
                    return (0, n.jsxs)(f.LaunchTransferAssetProviderWrapLayout, {
                        closeDefaultToast: null,
                        children: [(0, n.jsx)(ye, {}), (0, n.jsx)(Ne, {}), (0, n.jsx)(qt, {}), !e && (0, n.jsxs)(i.Suspense, {
                            fallback: null,
                            children: [(0, n.jsx)(Yt, {}), (0, n.jsx)(Xt, {})]
                        })]
                    })
                };
            const $t = function() {
                var e = (0, o.s9)("main-uc"),
                    t = e.t,
                    r = e.language;
                return (0, i.useEffect)((function() {
                    (0, c.initTradeSDK)("tradeSDKData", (0, l.Ri)(!0))
                }), []), (0, i.useEffect)((function() {
                    var e = function() {
                        (0, u.oe)({
                            pageName: m.D4,
                            elementID: "Wallet_overview_v1_pageview"
                        })
                    };
                    window.requestIdleCallback ? window.requestIdleCallback(e) : setTimeout(e, 0)
                }), []), (0, s.ZV)(r), (0, n.jsx)(p.vW, {
                    pageTitle: "".concat(t("wallet-overview-docTitle"), " - ").concat(t("wallet-super-docTitle"), " - ").concat(t("binance-super-docTitle")),
                    children: (0, n.jsx)(p.J5, {
                        children: (0, n.jsx)(l.gb, {
                            needAlphaAsset: !0,
                            biz: "overview",
                            language: r,
                            children: (0, n.jsx)(Qt, {})
                        })
                    })
                })
            }
        },
        "RX+5": function(e, t, r) {
            var n;
            ! function(i) {
                "use strict";
                var a, o = 1e6,
                    s = 1e6,
                    l = "[big.js] ",
                    c = l + "Invalid ",
                    u = c + "decimal places",
                    d = c + "rounding mode",
                    p = l + "Division by zero",
                    f = {},
                    h = void 0,
                    m = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function v(e, t, r, n) {
                    var i = e.c,
                        a = e.e + t + 1;
                    if (a < i.length) {
                        if (1 === r) n = i[a] >= 5;
                        else if (2 === r) n = i[a] > 5 || 5 == i[a] && (n || a < 0 || i[a + 1] !== h || 1 & i[a - 1]);
                        else if (3 === r) n = n || !!i[0];
                        else if (n = !1, 0 !== r) throw Error(d);
                        if (a < 1) i.length = 1, n ? (e.e = -t, i[0] = 1) : i[0] = e.e = 0;
                        else {
                            if (i.length = a--, n)
                                for (; ++i[a] > 9;) i[a] = 0, a-- || (++e.e, i.unshift(1));
                            for (a = i.length; !i[--a];) i.pop()
                        }
                    } else if (r < 0 || r > 3 || r !== ~~r) throw Error(d);
                    return e
                }

                function g(e, t, r, n) {
                    var i, a, s = e.constructor,
                        l = !e.c[0];
                    if (r !== h) {
                        if (r !== ~~r || r < (3 == t) || r > o) throw Error(3 == t ? c + "precision" : u);
                        for (r = n - (e = new s(e)).e, e.c.length > ++n && v(e, r, s.RM), 2 == t && (n = e.e + r + 1); e.c.length < n;) e.c.push(0)
                    }
                    if (i = e.e, r = (a = e.c.join("")).length, 2 != t && (1 == t || 3 == t && n <= i || i <= s.NE || i >= s.PE)) a = a.charAt(0) + (r > 1 ? "." + a.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
                    else if (i < 0) {
                        for (; ++i;) a = "0" + a;
                        a = "0." + a
                    } else if (i > 0)
                        if (++i > r)
                            for (i -= r; i--;) a += "0";
                        else i < r && (a = a.slice(0, i) + "." + a.slice(i));
                    else r > 1 && (a = a.charAt(0) + "." + a.slice(1));
                    return e.s < 0 && (!l || 4 == t) ? "-" + a : a
                }
                f.abs = function() {
                    var e = new this.constructor(this);
                    return e.s = 1, e
                }, f.cmp = function(e) {
                    var t, r = this,
                        n = r.c,
                        i = (e = new r.constructor(e)).c,
                        a = r.s,
                        o = e.s,
                        s = r.e,
                        l = e.e;
                    if (!n[0] || !i[0]) return n[0] ? a : i[0] ? -o : 0;
                    if (a != o) return a;
                    if (t = a < 0, s != l) return s > l ^ t ? 1 : -1;
                    for (o = (s = n.length) < (l = i.length) ? s : l, a = -1; ++a < o;)
                        if (n[a] != i[a]) return n[a] > i[a] ^ t ? 1 : -1;
                    return s == l ? 0 : s > l ^ t ? 1 : -1
                }, f.div = function(e) {
                    var t = this,
                        r = t.constructor,
                        n = t.c,
                        i = (e = new r(e)).c,
                        a = t.s == e.s ? 1 : -1,
                        s = r.DP;
                    if (s !== ~~s || s < 0 || s > o) throw Error(u);
                    if (!i[0]) throw Error(p);
                    if (!n[0]) return new r(0 * a);
                    var l, c, d, f, m, g = i.slice(),
                        b = l = i.length,
                        x = n.length,
                        y = n.slice(0, l),
                        w = y.length,
                        k = e,
                        A = k.c = [],
                        S = 0,
                        C = s + (k.e = t.e - e.e) + 1;
                    for (k.s = a, a = C < 0 ? 0 : C, g.unshift(0); w++ < l;) y.push(0);
                    do {
                        for (d = 0; d < 10; d++) {
                            if (l != (w = y.length)) f = l > w ? 1 : -1;
                            else
                                for (m = -1, f = 0; ++m < l;)
                                    if (i[m] != y[m]) {
                                        f = i[m] > y[m] ? 1 : -1;
                                        break
                                    } if (!(f < 0)) break;
                            for (c = w == l ? i : g; w;) {
                                if (y[--w] < c[w]) {
                                    for (m = w; m && !y[--m];) y[m] = 9;
                                    --y[m], y[w] += 10
                                }
                                y[w] -= c[w]
                            }
                            for (; !y[0];) y.shift()
                        }
                        A[S++] = f ? d : ++d, y[0] && f ? y[w] = n[b] || 0 : y = [n[b]]
                    } while ((b++ < x || y[0] !== h) && a--);
                    return A[0] || 1 == S || (A.shift(), k.e--), S > C && v(k, s, r.RM, y[0] !== h), k
                }, f.eq = function(e) {
                    return !this.cmp(e)
                }, f.gt = function(e) {
                    return this.cmp(e) > 0
                }, f.gte = function(e) {
                    return this.cmp(e) > -1
                }, f.lt = function(e) {
                    return this.cmp(e) < 0
                }, f.lte = function(e) {
                    return this.cmp(e) < 1
                }, f.minus = f.sub = function(e) {
                    var t, r, n, i, a = this,
                        o = a.constructor,
                        s = a.s,
                        l = (e = new o(e)).s;
                    if (s != l) return e.s = -l, a.plus(e);
                    var c = a.c.slice(),
                        u = a.e,
                        d = e.c,
                        p = e.e;
                    if (!c[0] || !d[0]) return d[0] ? (e.s = -l, e) : new o(c[0] ? a : 0);
                    if (s = u - p) {
                        for ((i = s < 0) ? (s = -s, n = c) : (p = u, n = d), n.reverse(), l = s; l--;) n.push(0);
                        n.reverse()
                    } else
                        for (r = ((i = c.length < d.length) ? c : d).length, s = l = 0; l < r; l++)
                            if (c[l] != d[l]) {
                                i = c[l] < d[l];
                                break
                            } if (i && (n = c, c = d, d = n, e.s = -e.s), (l = (r = d.length) - (t = c.length)) > 0)
                        for (; l--;) c[t++] = 0;
                    for (l = t; r > s;) {
                        if (c[--r] < d[r]) {
                            for (t = r; t && !c[--t];) c[t] = 9;
                            --c[t], c[r] += 10
                        }
                        c[r] -= d[r]
                    }
                    for (; 0 === c[--l];) c.pop();
                    for (; 0 === c[0];) c.shift(), --p;
                    return c[0] || (e.s = 1, c = [p = 0]), e.c = c, e.e = p, e
                }, f.mod = function(e) {
                    var t, r = this,
                        n = r.constructor,
                        i = r.s,
                        a = (e = new n(e)).s;
                    if (!e.c[0]) throw Error(p);
                    return r.s = e.s = 1, t = 1 == e.cmp(r), r.s = i, e.s = a, t ? new n(r) : (i = n.DP, a = n.RM, n.DP = n.RM = 0, r = r.div(e), n.DP = i, n.RM = a, this.minus(r.times(e)))
                }, f.plus = f.add = function(e) {
                    var t, r = this,
                        n = r.constructor,
                        i = r.s,
                        a = (e = new n(e)).s;
                    if (i != a) return e.s = -a, r.minus(e);
                    var o = r.e,
                        s = r.c,
                        l = e.e,
                        c = e.c;
                    if (!s[0] || !c[0]) return c[0] ? e : new n(s[0] ? r : 0 * i);
                    if (s = s.slice(), i = o - l) {
                        for (i > 0 ? (l = o, t = c) : (i = -i, t = s), t.reverse(); i--;) t.push(0);
                        t.reverse()
                    }
                    for (s.length - c.length < 0 && (t = c, c = s, s = t), i = c.length, a = 0; i; s[i] %= 10) a = (s[--i] = s[i] + c[i] + a) / 10 | 0;
                    for (a && (s.unshift(a), ++l), i = s.length; 0 === s[--i];) s.pop();
                    return e.c = s, e.e = l, e
                }, f.pow = function(e) {
                    var t = this,
                        r = new t.constructor(1),
                        n = r,
                        i = e < 0;
                    if (e !== ~~e || e < -1e6 || e > s) throw Error(c + "exponent");
                    for (i && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;) t = t.times(t);
                    return i ? r.div(n) : n
                }, f.round = function(e, t) {
                    var r = this.constructor;
                    if (e === h) e = 0;
                    else if (e !== ~~e || e < -o || e > o) throw Error(u);
                    return v(new r(this), e, t === h ? r.RM : t)
                }, f.sqrt = function() {
                    var e, t, r, n = this,
                        i = n.constructor,
                        a = n.s,
                        o = n.e,
                        s = new i(.5);
                    if (!n.c[0]) return new i(n);
                    if (a < 0) throw Error(l + "No square root");
                    0 === (a = Math.sqrt(n + "")) || a === 1 / 0 ? ((t = n.c.join("")).length + o & 1 || (t += "0"), o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o), e = new i(((a = Math.sqrt(t)) == 1 / 0 ? "1e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + o)) : e = new i(a), o = e.e + (i.DP += 4);
                    do {
                        r = e, e = s.times(r.plus(n.div(r)))
                    } while (r.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
                    return v(e, i.DP -= 4, i.RM)
                }, f.times = f.mul = function(e) {
                    var t, r = this,
                        n = r.constructor,
                        i = r.c,
                        a = (e = new n(e)).c,
                        o = i.length,
                        s = a.length,
                        l = r.e,
                        c = e.e;
                    if (e.s = r.s == e.s ? 1 : -1, !i[0] || !a[0]) return new n(0 * e.s);
                    for (e.e = l + c, o < s && (t = i, i = a, a = t, c = o, o = s, s = c), t = new Array(c = o + s); c--;) t[c] = 0;
                    for (l = s; l--;) {
                        for (s = 0, c = o + l; c > l;) s = t[c] + a[l] * i[c - l - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
                        t[c] = (t[c] + s) % 10
                    }
                    for (s ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
                    return e.c = t, e
                }, f.toExponential = function(e) {
                    return g(this, 1, e, e)
                }, f.toFixed = function(e) {
                    return g(this, 2, e, this.e + e)
                }, f.toPrecision = function(e) {
                    return g(this, 3, e, e - 1)
                }, f.toString = function() {
                    return g(this)
                }, f.valueOf = f.toJSON = function() {
                    return g(this, 4)
                }, a = function e() {
                    function t(r) {
                        var n = this;
                        if (!(n instanceof t)) return r === h ? e() : new t(r);
                        r instanceof t ? (n.s = r.s, n.e = r.e, n.c = r.c.slice()) : function(e, t) {
                            var r, n, i;
                            if (0 === t && 1 / t < 0) t = "-0";
                            else if (!m.test(t += "")) throw Error(c + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length);
                            for (i = t.length, n = 0; n < i && "0" == t.charAt(n);) ++n;
                            if (n == i) e.c = [e.e = 0];
                            else {
                                for (; i > 0 && "0" == t.charAt(--i););
                                for (e.e = r - n - 1, e.c = [], r = 0; n <= i;) e.c[r++] = +t.charAt(n++)
                            }
                        }(n, r), n.constructor = t
                    }
                    return t.prototype = f, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.version = "5.2.2", t
                }(), a.default = a.Big = a, void 0 === (n = function() {
                    return a
                }.call(t, r, t, e)) || (e.exports = n)
            }()
        },
        fALc: (e, t) => {
            var r;

            function n(e, t) {
                var r = [],
                    n = 0;

                function i(e) {
                    return r.push(e), t
                }

                function a() {
                    return r[n++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), a)
                    }
                }
            }
            r = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    t = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    r = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + r + ")",
                    a = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    o = "((?:-?" + a + ")|(?:inherit|auto))",
                    s = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    l = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + r + ")*?",
                    c = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    u = "(?!" + l + "['\"]?\\s*\\))",
                    d = "(?=" + l + "['\"]?\\s*\\))",
                    p = "(\\s*(?:!important\\s*)?[;}])",
                    f = new RegExp("`TMP`", "g"),
                    h = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    m = new RegExp("(" + t + c + "[^;}]+;?)", "gi"),
                    v = new RegExp("(" + t + "[^\\}]*?})", "gi"),
                    g = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    b = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    x = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + c, "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + c, "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    k = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    A = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    S = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    C = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    _ = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    T = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + o + "(\\s+)" + o + "(\\s+)" + o + "(\\s+)" + o + p, "gi"),
                    B = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + p, "gi"),
                    E = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + a + ")", "gi"),
                    I = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    U = new RegExp("(border-radius\\s*:\\s*)" + o + "(?:(?:\\s+" + o + ")(?:\\s+" + o + ")?(?:\\s+" + o + ")?)?(?:(?:(?:\\s*\\/\\s*)" + o + ")(?:\\s+" + o + ")?(?:\\s+" + o + ")?(?:\\s+" + o + ")?)?" + p, "gi"),
                    L = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + o, "gi"),
                    D = new RegExp("(text-shadow\\s*:\\s*)" + o + "(\\s*)" + s, "gi"),
                    P = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + o, "gi"),
                    R = new RegExp("(text-shadow\\s*:\\s*)" + o, "gi"),
                    O = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + o + "(\\s*\\))", "gi"),
                    M = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + o + "((?:\\s*,\\s*" + o + "){0,2}\\s*\\))", "gi");

                function N(e, t, r) {
                    var n, i;
                    return "%" === r.slice(-1) && (-1 !== (n = r.indexOf(".")) ? (i = r.length - n - 2, r = (r = 100 - parseFloat(r)).toFixed(i) + "%") : r = 100 - parseFloat(r) + "%"), t + r
                }

                function j(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function z(e, t) {
                    var r = [].slice.call(arguments),
                        n = r.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = r.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        a = r[10] || "";
                    return t + (i.length ? j(n) + " / " + j(i) : j(n)) + a
                }

                function F(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function W(e, t, r) {
                    return t + F(r)
                }

                function H(e, t, r, n, i) {
                    return t + r + F(n) + i
                }

                function V(e, t, r, n, i) {
                    return t + r + n + F(i)
                }
                return {
                    transform: function(e, t) {
                        var r = new n(m, "`NOFLIP_SINGLE`"),
                            i = new n(v, "`NOFLIP_CLASS`"),
                            a = new n(h, "`COMMENT`");
                        return e = a.tokenize(i.tokenize(r.tokenize(e.replace("`", "%60")))), t.transformDirInUrl && (e = e.replace(A, "$1`TMP`").replace(S, "$1ltr").replace(f, "rtl")), t.transformEdgeInUrl && (e = e.replace(w, "$1`TMP`").replace(k, "$1left").replace(f, "right")), e = e.replace(g, "$1`TMP`").replace(b, "$1ltr").replace(f, "rtl").replace(x, "$1`TMP`").replace(y, "$1left").replace(f, "right").replace(C, "$1$2`TMP`").replace(_, "$1$2e-resize").replace(f, "w-resize").replace(U, z).replace(L, W).replace(D, V).replace(P, V).replace(R, W).replace(O, H).replace(M, H).replace(T, "$1$2$3$8$5$6$7$4$9").replace(B, "$1$2$3$8$5$6$7$4$9").replace(E, N).replace(I, N), e = r.detokenize(i.detokenize(a.detokenize(e)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, n) {
                var i;
                return "object" === typeof t ? i = t : (i = {}, "boolean" === typeof t && (i.transformDirInUrl = t), "boolean" === typeof n && (i.transformEdgeInUrl = n)), r.transform(e, i)
            } : window.cssjanus = r
        },
        VXBK: (e, t, r) => {
            "use strict";
            r.d(t, {
                NP: () => d,
                DP: () => p
            });
            var n = r("OHGK"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("g80r");
            const s = function(e) {
                var t = new WeakMap;
                return function(r) {
                    if (t.has(r)) return t.get(r);
                    var n = e(r);
                    return t.set(r, n), n
                }
            };
            r("oXkQ");

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var c = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(r, !0).forEach((function(t) {
                                (0, n.A)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(r).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                u = s((function(e) {
                    return s((function(t) {
                        return c(e, t)
                    }))
                })),
                d = function(e) {
                    return (0, i.createElement)(o.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = u(t)(e.theme)), (0, i.createElement)(o.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };

            function p() {
                return a().useContext(o.Dx)
            }
        },
        deT9: (e, t, r) => {
            var n = r("vGGS"),
                i = r("obGE");

            function a(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            a.prototype = n(i.prototype), a.prototype.constructor = a, e.exports = a
        },
        "0+c5": (e, t, r) => {
            var n = r("vGGS"),
                i = r("obGE");

            function a(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            a.prototype = n(i.prototype), a.prototype.constructor = a, e.exports = a
        },
        OfKG: (e, t, r) => {
            var n = r("c7Qd");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
            }
        },
        cPMt: e => {
            e.exports = function(e, t, r, n) {
                var i = -1,
                    a = null == e ? 0 : e.length;
                for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
                return r
            }
        },
        JElN: (e, t, r) => {
            var n = r("a88S");
            e.exports = function(e, t, r) {
                for (var i = -1, a = e.length; ++i < a;) {
                    var o = e[i],
                        s = t(o);
                    if (null != s && (void 0 === l ? s === s && !n(s) : r(s, l))) var l = s,
                        c = o
                }
                return c
            }
        },
        DuXo: e => {
            e.exports = function(e, t, r, n) {
                for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
                    if (t(e[a], a, e)) return a;
                return -1
            }
        },
        FaiA: e => {
            e.exports = function(e, t) {
                return e > t
            }
        },
        c7Qd: (e, t, r) => {
            var n = r("DuXo"),
                i = r("z9Jh"),
                a = r("n1QJ");
            e.exports = function(e, t, r) {
                return t === t ? a(e, t, r) : n(e, i, r)
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        "n+p3": e => {
            e.exports = function(e, t) {
                return e < t
            }
        },
        "5q8j": e => {
            e.exports = function(e, t, r, n, i) {
                return i(e, (function(e, i, a) {
                    r = n ? (n = !1, e) : t(r, e, i, a)
                })), r
            }
        },
        uA6v: (e, t, r) => {
            var n = r("zWgn"),
                i = r("BVx2"),
                a = i ? function(e, t) {
                    return i.set(e, t), e
                } : n;
            e.exports = a
        },
        vyvt: (e, t, r) => {
            var n = r("H87J");
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        I1fX: (e, t, r) => {
            var n = r("6XIJ"),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(i, "") : e
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, n, i) {
                for (var a = -1, o = e.length, s = n.length, l = -1, c = r.length, u = t(o - s, 0), d = Array(c + u), p = !i; ++l < c;) d[l] = r[l];
                for (; ++a < s;)(p || a < o) && (d[n[a]] = e[a]);
                for (; u--;) d[l++] = e[a++];
                return d
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, n, i) {
                for (var a = -1, o = e.length, s = -1, l = n.length, c = -1, u = r.length, d = t(o - l, 0), p = Array(d + u), f = !i; ++a < d;) p[a] = e[a];
                for (var h = a; ++c < u;) p[h + c] = r[c];
                for (; ++s < l;)(f || a < o) && (p[h + n[s]] = e[a++]);
                return p
            }
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                return n
            }
        },
        HCUT: (e, t, r) => {
            var n = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r) {
                var a = 1 & t,
                    o = n(e);
                return function t() {
                    var n = this && this !== i && this instanceof t ? o : e;
                    return n.apply(a ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var n = r("vGGS"),
                i = r("tQYX");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = n(e.prototype),
                        a = e.apply(r, t);
                    return i(a) ? a : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var n = r("zaNA"),
                i = r("iWTG"),
                a = r("JtPM"),
                o = r("kBvp"),
                s = r("4mQY"),
                l = r("AeOa"),
                c = r("IBsm");
            e.exports = function(e, t, r) {
                var u = i(e);
                return function i() {
                    for (var d = arguments.length, p = Array(d), f = d, h = s(i); f--;) p[f] = arguments[f];
                    var m = d < 3 && p[0] !== h && p[d - 1] !== h ? [] : l(p, h);
                    if ((d -= m.length) < r) return o(e, t, a, i.placeholder, void 0, p, m, void 0, void 0, r - d);
                    var v = this && this !== c && this instanceof i ? u : e;
                    return n(v, this, p)
                }
            }
        },
        tUbk: (e, t, r) => {
            var n = r("0+c5"),
                i = r("cH1A"),
                a = r("rjis"),
                o = r("rKb1"),
                s = r("wxYD"),
                l = r("/Bkq");
            e.exports = function(e) {
                return i((function(t) {
                    var r = t.length,
                        i = r,
                        c = n.prototype.thru;
                    for (e && t.reverse(); i--;) {
                        var u = t[i];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (c && !d && "wrapper" == o(u)) var d = new n([], !0)
                    }
                    for (i = d ? i : r; ++i < r;) {
                        u = t[i];
                        var p = o(u),
                            f = "wrapper" == p ? a(u) : void 0;
                        d = f && l(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? d[o(f[0])].apply(d, f[3]) : 1 == u.length && l(u) ? d[p]() : d.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (d && 1 == e.length && s(n)) return d.plant(n).value();
                        for (var i = 0, a = r ? t[i].apply(this, e) : n; ++i < r;) a = t[i].call(this, a);
                        return a
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var n = r("6sC/"),
                i = r("gGwV"),
                a = r("qFO/"),
                o = r("iWTG"),
                s = r("kBvp"),
                l = r("4mQY"),
                c = r("MRwE"),
                u = r("AeOa"),
                d = r("IBsm");
            e.exports = function e(t, r, p, f, h, m, v, g, b, x) {
                var y = 128 & r,
                    w = 1 & r,
                    k = 2 & r,
                    A = 24 & r,
                    S = 512 & r,
                    C = k ? void 0 : o(t);
                return function _() {
                    for (var T = arguments.length, B = Array(T), E = T; E--;) B[E] = arguments[E];
                    if (A) var I = l(_),
                        U = a(B, I);
                    if (f && (B = n(B, f, h, A)), m && (B = i(B, m, v, A)), T -= U, A && T < x) {
                        var L = u(B, I);
                        return s(t, r, e, _.placeholder, p, B, L, g, b, x - T)
                    }
                    var D = w ? p : this,
                        P = k ? D[t] : t;
                    return T = B.length, g ? B = c(B, g) : S && T > 1 && B.reverse(), y && b < T && (B.length = b), this && this !== d && this instanceof _ && (P = C || o(P)), P.apply(D, B)
                }
            }
        },
        I6tc: (e, t, r) => {
            var n = r("zaNA"),
                i = r("iWTG"),
                a = r("IBsm");
            e.exports = function(e, t, r, o) {
                var s = 1 & t,
                    l = i(e);
                return function t() {
                    for (var i = -1, c = arguments.length, u = -1, d = o.length, p = Array(d + c), f = this && this !== a && this instanceof t ? l : e; ++u < d;) p[u] = o[u];
                    for (; c--;) p[u++] = arguments[++i];
                    return n(f, s ? r : this, p)
                }
            }
        },
        kBvp: (e, t, r) => {
            var n = r("/Bkq"),
                i = r("SStt"),
                a = r("E2v+");
            e.exports = function(e, t, r, o, s, l, c, u, d, p) {
                var f = 8 & t;
                t |= f ? 32 : 64, 4 & (t &= ~(f ? 64 : 32)) || (t &= -4);
                var h = [e, t, s, f ? l : void 0, f ? c : void 0, f ? void 0 : l, f ? void 0 : c, u, d, p],
                    m = r.apply(void 0, h);
                return n(e) && i(m, h), m.placeholder = o, a(m, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var n = r("vyvt"),
                i = r("kkM+"),
                a = r("aURW"),
                o = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = i(t);
                    return "[object Map]" == r ? a(t) : "[object Set]" == r ? o(t) : n(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var n = r("uA6v"),
                i = r("HCUT"),
                a = r("LtMG"),
                o = r("JtPM"),
                s = r("I6tc"),
                l = r("rjis"),
                c = r("9Oiy"),
                u = r("SStt"),
                d = r("E2v+"),
                p = r("m2YG"),
                f = Math.max;
            e.exports = function(e, t, r, h, m, v, g, b) {
                var x = 2 & t;
                if (!x && "function" != typeof e) throw new TypeError("Expected a function");
                var y = h ? h.length : 0;
                if (y || (t &= -97, h = m = void 0), g = void 0 === g ? g : f(p(g), 0), b = void 0 === b ? b : p(b), y -= m ? m.length : 0, 64 & t) {
                    var w = h,
                        k = m;
                    h = m = void 0
                }
                var A = x ? void 0 : l(e),
                    S = [e, t, r, h, m, w, k, v, g, b];
                if (A && c(S, A), e = S[0], t = S[1], r = S[2], h = S[3], m = S[4], !(b = S[9] = void 0 === S[9] ? x ? 0 : e.length : f(S[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) C = 8 == t || 16 == t ? a(e, t, b) : 32 != t && 33 != t || m.length ? o.apply(void 0, S) : s(e, t, r, h);
                else var C = i(e, t, r);
                return d((A ? n : u)(C, S), e, t)
            }
        },
        rjis: (e, t, r) => {
            var n = r("BVx2"),
                i = r("nnm9"),
                a = n ? function(e) {
                    return n.get(e)
                } : i;
            e.exports = a
        },
        rKb1: (e, t, r) => {
            var n = r("QaiR"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = n[t], a = i.call(n, t) ? r.length : 0; a--;) {
                    var o = r[a],
                        s = o.func;
                    if (null == s || s == e) return o.name
                }
                return t
            }
        },
        "4mQY": e => {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var n = e.match(t);
                return n ? n[1].split(r) : []
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var n = r.length;
                if (!n) return e;
                var i = n - 1;
                return r[i] = (n > 1 ? "& " : "") + r[i], r = r.join(n > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        "/Bkq": (e, t, r) => {
            var n = r("deT9"),
                i = r("rjis"),
                a = r("rKb1"),
                o = r("jm4U");
            e.exports = function(e) {
                var t = a(e),
                    r = o[t];
                if ("function" != typeof r || !(t in n.prototype)) return !1;
                if (e === r) return !0;
                var s = i(r);
                return !!s && e === s[0]
            }
        },
        "9Oiy": (e, t, r) => {
            var n = r("6sC/"),
                i = r("gGwV"),
                a = r("AeOa"),
                o = "__lodash_placeholder__",
                s = 128,
                l = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    c = t[1],
                    u = r | c,
                    d = u < 131,
                    p = c == s && 8 == r || c == s && 256 == r && e[7].length <= t[8] || 384 == c && t[7].length <= t[8] && 8 == r;
                if (!d && !p) return e;
                1 & c && (e[2] = t[2], u |= 1 & r ? 0 : 4);
                var f = t[3];
                if (f) {
                    var h = e[3];
                    e[3] = h ? n(h, f, t[4]) : f, e[4] = h ? a(e[3], o) : t[4]
                }
                return (f = t[5]) && (h = e[5], e[5] = h ? i(h, f, t[6]) : f, e[6] = h ? a(e[5], o) : t[6]), (f = t[7]) && (e[7] = f), c & s && (e[8] = null == e[8] ? t[8] : l(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
            }
        },
        BVx2: (e, t, r) => {
            var n = r("4+Vk"),
                i = n && new n;
            e.exports = i
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var n = r("QT01"),
                i = r("pnw1"),
                a = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, o = a(t.length, r), s = n(e); o--;) {
                    var l = t[o];
                    e[o] = i(l, r) ? s[l] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var n = -1, i = e.length, a = 0, o = []; ++n < i;) {
                    var s = e[n];
                    s !== r && s !== t || (e[n] = t, o[a++] = n)
                }
                return o
            }
        },
        SStt: (e, t, r) => {
            var n = r("uA6v"),
                i = r("kG2z")(n);
            e.exports = i
        },
        "5KBi": e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = [e, e]
                })), r
            }
        },
        "E2v+": (e, t, r) => {
            var n = r("wafF"),
                i = r("kEP7"),
                a = r("7Pat"),
                o = r("p4bK");
            e.exports = function(e, t, r) {
                var s = t + "";
                return a(e, i(s, o(n(s), r)))
            }
        },
        n1QJ: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, i = e.length; ++n < i;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        "6XIJ": e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        p4bK: (e, t, r) => {
            var n = r("LmOH"),
                i = r("OfKG"),
                a = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return n(a, (function(r) {
                    var n = "_." + r[0];
                    t & r[1] && !i(e, n) && e.push(n)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var n = r("deT9"),
                i = r("0+c5"),
                a = r("QT01");
            e.exports = function(e) {
                if (e instanceof n) return e.clone();
                var t = new i(e.__wrapped__, e.__chain__);
                return t.__actions__ = a(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "3POh": (e, t, r) => {
            var n = r("P+cI");

            function i(e, t, r) {
                var a = n(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return a.placeholder = i.placeholder, a
            }
            i.placeholder = {}, e.exports = i
        },
        RNvQ: (e, t, r) => {
            var n = r("tQYX"),
                i = r("ENE1"),
                a = r("nvU9"),
                o = Math.max,
                s = Math.min;
            e.exports = function(e, t, r) {
                var l, c, u, d, p, f, h = 0,
                    m = !1,
                    v = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function b(t) {
                    var r = l,
                        n = c;
                    return l = c = void 0, h = t, d = e.apply(n, r)
                }

                function x(e) {
                    return h = e, p = setTimeout(w, t), m ? b(e) : d
                }

                function y(e) {
                    var r = e - f;
                    return void 0 === f || r >= t || r < 0 || v && e - h >= u
                }

                function w() {
                    var e = i();
                    if (y(e)) return k(e);
                    p = setTimeout(w, function(e) {
                        var r = t - (e - f);
                        return v ? s(r, u - (e - h)) : r
                    }(e))
                }

                function k(e) {
                    return p = void 0, g && l ? b(e) : (l = c = void 0, d)
                }

                function A() {
                    var e = i(),
                        r = y(e);
                    if (l = arguments, c = this, f = e, r) {
                        if (void 0 === p) return x(f);
                        if (v) return clearTimeout(p), p = setTimeout(w, t), b(f)
                    }
                    return void 0 === p && (p = setTimeout(w, t)), d
                }
                return t = a(t) || 0, n(r) && (m = !!r.leading, u = (v = "maxWait" in r) ? o(a(r.maxWait) || 0, t) : u, g = "trailing" in r ? !!r.trailing : g), A.cancel = function() {
                    void 0 !== p && clearTimeout(p), h = 0, l = f = c = p = void 0
                }, A.flush = function() {
                    return void 0 === p ? d : k(i())
                }, A
            }
        },
        jPI1: (e, t, r) => {
            var n = r("tUbk")();
            e.exports = n
        },
        "LPC+": (e, t, r) => {
            var n = r("JElN"),
                i = r("FaiA"),
                a = r("zWgn");
            e.exports = function(e) {
                return e && e.length ? n(e, a, i) : void 0
            }
        },
        Z3AG: (e, t, r) => {
            var n = r("JElN"),
                i = r("n+p3"),
                a = r("zWgn");
            e.exports = function(e) {
                return e && e.length ? n(e, a, i) : void 0
            }
        },
        nnm9: e => {
            e.exports = function() {}
        },
        ENE1: (e, t, r) => {
            var n = r("IBsm");
            e.exports = function() {
                return n.Date.now()
            }
        },
        veKZ: (e, t, r) => {
            var n = r("cPMt"),
                i = r("Q4oW"),
                a = r("S3pA"),
                o = r("5q8j"),
                s = r("wxYD");
            e.exports = function(e, t, r) {
                var l = s(e) ? n : o,
                    c = arguments.length < 3;
                return l(e, a(t, 4), r, c, i)
            }
        },
        Bcqe: (e, t, r) => {
            var n = r("RNvQ"),
                i = r("tQYX");
            e.exports = function(e, t, r) {
                var a = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return i(r) && (a = "leading" in r ? !!r.leading : a, o = "trailing" in r ? !!r.trailing : o), n(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        fWyh: (e, t, r) => {
            var n = r("nvU9"),
                i = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === i || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        m2YG: (e, t, r) => {
            var n = r("fWyh");
            e.exports = function(e) {
                var t = n(e),
                    r = t % 1;
                return t === t ? r ? t - r : t : 0
            }
        },
        nvU9: (e, t, r) => {
            var n = r("I1fX"),
                i = r("tQYX"),
                a = r("a88S"),
                o = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return NaN;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
            }
        },
        "pL+m": (e, t, r) => {
            var n = r("zWkt")(r("BlJA"));
            e.exports = n
        },
        jm4U: (e, t, r) => {
            var n = r("deT9"),
                i = r("0+c5"),
                a = r("obGE"),
                o = r("wxYD"),
                s = r("tLQN"),
                l = r("e+ll"),
                c = Object.prototype.hasOwnProperty;

            function u(e) {
                if (s(e) && !o(e) && !(e instanceof n)) {
                    if (e instanceof i) return e;
                    if (c.call(e, "__wrapped__")) return l(e)
                }
                return new i(e)
            }
            u.prototype = a.prototype, u.prototype.constructor = u, e.exports = u
        },
        Hgnr: () => {},
        q2ou: (e, t, r) => {
            "use strict";
            var n = r("PJv3"),
                i = r("sqFk"),
                a = r("nTxR"),
                o = r("Wd5o"),
                s = r("Qgn8"),
                l = r("rDFp"),
                c = r("WE2l"),
                u = Object.prototype.toString;

            function d(e) {
                if (!(this instanceof d)) return new d(e);
                this.options = i.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, e || {});
                var t = this.options;
                t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 === (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
                var r = n.inflateInit2(this.strm, t.windowBits);
                if (r !== o.Z_OK) throw new Error(s[r]);
                if (this.header = new c, n.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" === typeof t.dictionary ? t.dictionary = a.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = n.inflateSetDictionary(this.strm, t.dictionary)) !== o.Z_OK)) throw new Error(s[r])
            }

            function p(e, t) {
                var r = new d(t);
                if (r.push(e, !0), r.err) throw r.msg || s[r.err];
                return r.result
            }
            d.prototype.push = function(e, t) {
                var r, s, l, c, d, p = this.strm,
                    f = this.options.chunkSize,
                    h = this.options.dictionary,
                    m = !1;
                if (this.ended) return !1;
                s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, "string" === typeof e ? p.input = a.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? p.input = new Uint8Array(e) : p.input = e, p.next_in = 0, p.avail_in = p.input.length;
                do {
                    if (0 === p.avail_out && (p.output = new i.Buf8(f), p.next_out = 0, p.avail_out = f), (r = n.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (r = n.inflateSetDictionary(this.strm, h)), r === o.Z_BUF_ERROR && !0 === m && (r = o.Z_OK, m = !1), r !== o.Z_STREAM_END && r !== o.Z_OK) return this.onEnd(r), this.ended = !0, !1;
                    p.next_out && (0 !== p.avail_out && r !== o.Z_STREAM_END && (0 !== p.avail_in || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l = a.utf8border(p.output, p.next_out), c = p.next_out - l, d = a.buf2string(p.output, l), p.next_out = c, p.avail_out = f - c, c && i.arraySet(p.output, p.output, l, c, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), 0 === p.avail_in && 0 === p.avail_out && (m = !0)
                } while ((p.avail_in > 0 || 0 === p.avail_out) && r !== o.Z_STREAM_END);
                return r === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (r = n.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), p.avail_out = 0, !0)
            }, d.prototype.onData = function(e) {
                this.chunks.push(e)
            }, d.prototype.onEnd = function(e) {
                e === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            }, t.Inflate = d, t.inflate = p, t.inflateRaw = function(e, t) {
                return (t = t || {}).raw = !0, p(e, t)
            }, t.ungzip = p
        },
        sqFk: (e, t) => {
            "use strict";
            var r = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;

            function n(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.assign = function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                    var r = t.shift();
                    if (r) {
                        if ("object" !== typeof r) throw new TypeError(r + "must be non-object");
                        for (var i in r) n(r, i) && (e[i] = r[i])
                    }
                }
                return e
            }, t.shrinkBuf = function(e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
            };
            var i = {
                    arraySet: function(e, t, r, n, i) {
                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                        else
                            for (var a = 0; a < n; a++) e[i + a] = t[r + a]
                    },
                    flattenChunks: function(e) {
                        var t, r, n, i, a, o;
                        for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
                        for (o = new Uint8Array(n), i = 0, t = 0, r = e.length; t < r; t++) a = e[t], o.set(a, i), i += a.length;
                        return o
                    }
                },
                a = {
                    arraySet: function(e, t, r, n, i) {
                        for (var a = 0; a < n; a++) e[i + a] = t[r + a]
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e)
                    }
                };
            t.setTyped = function(e) {
                e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, i)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, a))
            }, t.setTyped(r)
        },
        nTxR: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = !0,
                a = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (c) {
                i = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (c) {
                a = !1
            }
            for (var o = new n.Buf8(256), s = 0; s < 256; s++) o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;

            function l(e, t) {
                if (t < 65534 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                for (var r = "", o = 0; o < t; o++) r += String.fromCharCode(e[o]);
                return r
            }
            o[254] = o[254] = 1, t.string2buf = function(e) {
                var t, r, i, a, o, s = e.length,
                    l = 0;
                for (a = 0; a < s; a++) 55296 === (64512 & (r = e.charCodeAt(a))) && a + 1 < s && 56320 === (64512 & (i = e.charCodeAt(a + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), a++), l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                for (t = new n.Buf8(l), o = 0, a = 0; o < l; a++) 55296 === (64512 & (r = e.charCodeAt(a))) && a + 1 < s && 56320 === (64512 & (i = e.charCodeAt(a + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), a++), r < 128 ? t[o++] = r : r < 2048 ? (t[o++] = 192 | r >>> 6, t[o++] = 128 | 63 & r) : r < 65536 ? (t[o++] = 224 | r >>> 12, t[o++] = 128 | r >>> 6 & 63, t[o++] = 128 | 63 & r) : (t[o++] = 240 | r >>> 18, t[o++] = 128 | r >>> 12 & 63, t[o++] = 128 | r >>> 6 & 63, t[o++] = 128 | 63 & r);
                return t
            }, t.buf2binstring = function(e) {
                return l(e, e.length)
            }, t.binstring2buf = function(e) {
                for (var t = new n.Buf8(e.length), r = 0, i = t.length; r < i; r++) t[r] = e.charCodeAt(r);
                return t
            }, t.buf2string = function(e, t) {
                var r, n, i, a, s = t || e.length,
                    c = new Array(2 * s);
                for (n = 0, r = 0; r < s;)
                    if ((i = e[r++]) < 128) c[n++] = i;
                    else if ((a = o[i]) > 4) c[n++] = 65533, r += a - 1;
                else {
                    for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < s;) i = i << 6 | 63 & e[r++], a--;
                    a > 1 ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i)
                }
                return l(c, n)
            }, t.utf8border = function(e, t) {
                var r;
                for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; r >= 0 && 128 === (192 & e[r]);) r--;
                return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t
            }
        },
        FkYz: e => {
            "use strict";
            e.exports = function(e, t, r, n) {
                for (var i = 65535 & e | 0, a = e >>> 16 & 65535 | 0, o = 0; 0 !== r;) {
                    r -= o = r > 2e3 ? 2e3 : r;
                    do {
                        a = a + (i = i + t[n++] | 0) | 0
                    } while (--o);
                    i %= 65521, a %= 65521
                }
                return i | a << 16 | 0
            }
        },
        Wd5o: e => {
            "use strict";
            e.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        },
        uF5w: e => {
            "use strict";
            var t = function() {
                for (var e, t = [], r = 0; r < 256; r++) {
                    e = r;
                    for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    t[r] = e
                }
                return t
            }();
            e.exports = function(e, r, n, i) {
                var a = t,
                    o = i + n;
                e ^= -1;
                for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ r[s])];
                return -1 ^ e
            }
        },
        WE2l: e => {
            "use strict";
            e.exports = function() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
        },
        tDiK: e => {
            "use strict";
            e.exports = function(e, t) {
                var r, n, i, a, o, s, l, c, u, d, p, f, h, m, v, g, b, x, y, w, k, A, S, C, _;
                r = e.state, n = e.next_in, C = e.input, i = n + (e.avail_in - 5), a = e.next_out, _ = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), l = r.dmax, c = r.wsize, u = r.whave, d = r.wnext, p = r.window, f = r.hold, h = r.bits, m = r.lencode, v = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
                e: do {
                    h < 15 && (f += C[n++] << h, h += 8, f += C[n++] << h, h += 8), x = m[f & g];
                    t: for (;;) {
                        if (f >>>= y = x >>> 24, h -= y, 0 === (y = x >>> 16 & 255)) _[a++] = 65535 & x;
                        else {
                            if (!(16 & y)) {
                                if (0 === (64 & y)) {
                                    x = m[(65535 & x) + (f & (1 << y) - 1)];
                                    continue t
                                }
                                if (32 & y) {
                                    r.mode = 12;
                                    break e
                                }
                                e.msg = "invalid literal/length code", r.mode = 30;
                                break e
                            }
                            w = 65535 & x, (y &= 15) && (h < y && (f += C[n++] << h, h += 8), w += f & (1 << y) - 1, f >>>= y, h -= y), h < 15 && (f += C[n++] << h, h += 8, f += C[n++] << h, h += 8), x = v[f & b];
                            r: for (;;) {
                                if (f >>>= y = x >>> 24, h -= y, !(16 & (y = x >>> 16 & 255))) {
                                    if (0 === (64 & y)) {
                                        x = v[(65535 & x) + (f & (1 << y) - 1)];
                                        continue r
                                    }
                                    e.msg = "invalid distance code", r.mode = 30;
                                    break e
                                }
                                if (k = 65535 & x, h < (y &= 15) && (f += C[n++] << h, (h += 8) < y && (f += C[n++] << h, h += 8)), (k += f & (1 << y) - 1) > l) {
                                    e.msg = "invalid distance too far back", r.mode = 30;
                                    break e
                                }
                                if (f >>>= y, h -= y, k > (y = a - o)) {
                                    if ((y = k - y) > u && r.sane) {
                                        e.msg = "invalid distance too far back", r.mode = 30;
                                        break e
                                    }
                                    if (A = 0, S = p, 0 === d) {
                                        if (A += c - y, y < w) {
                                            w -= y;
                                            do {
                                                _[a++] = p[A++]
                                            } while (--y);
                                            A = a - k, S = _
                                        }
                                    } else if (d < y) {
                                        if (A += c + d - y, (y -= d) < w) {
                                            w -= y;
                                            do {
                                                _[a++] = p[A++]
                                            } while (--y);
                                            if (A = 0, d < w) {
                                                w -= y = d;
                                                do {
                                                    _[a++] = p[A++]
                                                } while (--y);
                                                A = a - k, S = _
                                            }
                                        }
                                    } else if (A += d - y, y < w) {
                                        w -= y;
                                        do {
                                            _[a++] = p[A++]
                                        } while (--y);
                                        A = a - k, S = _
                                    }
                                    for (; w > 2;) _[a++] = S[A++], _[a++] = S[A++], _[a++] = S[A++], w -= 3;
                                    w && (_[a++] = S[A++], w > 1 && (_[a++] = S[A++]))
                                } else {
                                    A = a - k;
                                    do {
                                        _[a++] = _[A++], _[a++] = _[A++], _[a++] = _[A++], w -= 3
                                    } while (w > 2);
                                    w && (_[a++] = _[A++], w > 1 && (_[a++] = _[A++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (n < i && a < s);
                n -= w = h >> 3, f &= (1 << (h -= w << 3)) - 1, e.next_in = n, e.next_out = a, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), r.hold = f, r.bits = h
            }
        },
        PJv3: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = r("FkYz"),
                a = r("uF5w"),
                o = r("tDiK"),
                s = r("J2ks"),
                l = -2,
                c = 12,
                u = 30;

            function d(e) {
                return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
            }

            function p() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function f(e) {
                var t;
                return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new n.Buf32(852), t.distcode = t.distdyn = new n.Buf32(592), t.sane = 1, t.back = -1, 0) : l
            }

            function h(e) {
                var t;
                return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, f(e)) : l
            }

            function m(e, t) {
                var r, n;
                return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? l : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, h(e))) : l
            }

            function v(e, t) {
                var r, n;
                return e ? (n = new p, e.state = n, n.window = null, 0 !== (r = m(e, t)) && (e.state = null), r) : l
            }
            var g, b, x = !0;

            function y(e) {
                if (x) {
                    var t;
                    for (g = new n.Buf32(512), b = new n.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                    for (; t < 256;) e.lens[t++] = 9;
                    for (; t < 280;) e.lens[t++] = 7;
                    for (; t < 288;) e.lens[t++] = 8;
                    for (s(1, e.lens, 0, 288, g, 0, e.work, {
                            bits: 9
                        }), t = 0; t < 32;) e.lens[t++] = 5;
                    s(2, e.lens, 0, 32, b, 0, e.work, {
                        bits: 5
                    }), x = !1
                }
                e.lencode = g, e.lenbits = 9, e.distcode = b, e.distbits = 5
            }

            function w(e, t, r, i) {
                var a, o = e.state;
                return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new n.Buf8(o.wsize)), i >= o.wsize ? (n.arraySet(o.window, t, r - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((a = o.wsize - o.wnext) > i && (a = i), n.arraySet(o.window, t, r - i, a, o.wnext), (i -= a) ? (n.arraySet(o.window, t, r - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0
            }
            t.inflateReset = h, t.inflateReset2 = m, t.inflateResetKeep = f, t.inflateInit = function(e) {
                return v(e, 15)
            }, t.inflateInit2 = v, t.inflate = function(e, t) {
                var r, p, f, h, m, v, g, b, x, k, A, S, C, _, T, B, E, I, U, L, D, P, R, O, M = 0,
                    N = new n.Buf8(4),
                    j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return l;
                (r = e.state).mode === c && (r.mode = 13), m = e.next_out, f = e.output, g = e.avail_out, h = e.next_in, p = e.input, v = e.avail_in, b = r.hold, x = r.bits, k = v, A = g, P = 0;
                e: for (;;) switch (r.mode) {
                    case 1:
                        if (0 === r.wrap) {
                            r.mode = 13;
                            break
                        }
                        for (; x < 16;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if (2 & r.wrap && 35615 === b) {
                            r.check = 0, N[0] = 255 & b, N[1] = b >>> 8 & 255, r.check = a(r.check, N, 2, 0), b = 0, x = 0, r.mode = 2;
                            break
                        }
                        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
                            e.msg = "incorrect header check", r.mode = u;
                            break
                        }
                        if (8 !== (15 & b)) {
                            e.msg = "unknown compression method", r.mode = u;
                            break
                        }
                        if (x -= 4, D = 8 + (15 & (b >>>= 4)), 0 === r.wbits) r.wbits = D;
                        else if (D > r.wbits) {
                            e.msg = "invalid window size", r.mode = u;
                            break
                        }
                        r.dmax = 1 << D, e.adler = r.check = 1, r.mode = 512 & b ? 10 : c, b = 0, x = 0;
                        break;
                    case 2:
                        for (; x < 16;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if (r.flags = b, 8 !== (255 & r.flags)) {
                            e.msg = "unknown compression method", r.mode = u;
                            break
                        }
                        if (57344 & r.flags) {
                            e.msg = "unknown header flags set", r.mode = u;
                            break
                        }
                        r.head && (r.head.text = b >> 8 & 1), 512 & r.flags && (N[0] = 255 & b, N[1] = b >>> 8 & 255, r.check = a(r.check, N, 2, 0)), b = 0, x = 0, r.mode = 3;
                    case 3:
                        for (; x < 32;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        r.head && (r.head.time = b), 512 & r.flags && (N[0] = 255 & b, N[1] = b >>> 8 & 255, N[2] = b >>> 16 & 255, N[3] = b >>> 24 & 255, r.check = a(r.check, N, 4, 0)), b = 0, x = 0, r.mode = 4;
                    case 4:
                        for (; x < 16;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        r.head && (r.head.xflags = 255 & b, r.head.os = b >> 8), 512 & r.flags && (N[0] = 255 & b, N[1] = b >>> 8 & 255, r.check = a(r.check, N, 2, 0)), b = 0, x = 0, r.mode = 5;
                    case 5:
                        if (1024 & r.flags) {
                            for (; x < 16;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            r.length = b, r.head && (r.head.extra_len = b), 512 & r.flags && (N[0] = 255 & b, N[1] = b >>> 8 & 255, r.check = a(r.check, N, 2, 0)), b = 0, x = 0
                        } else r.head && (r.head.extra = null);
                        r.mode = 6;
                    case 6:
                        if (1024 & r.flags && ((S = r.length) > v && (S = v), S && (r.head && (D = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), n.arraySet(r.head.extra, p, h, S, D)), 512 & r.flags && (r.check = a(r.check, p, S, h)), v -= S, h += S, r.length -= S), r.length)) break e;
                        r.length = 0, r.mode = 7;
                    case 7:
                        if (2048 & r.flags) {
                            if (0 === v) break e;
                            S = 0;
                            do {
                                D = p[h + S++], r.head && D && r.length < 65536 && (r.head.name += String.fromCharCode(D))
                            } while (D && S < v);
                            if (512 & r.flags && (r.check = a(r.check, p, S, h)), v -= S, h += S, D) break e
                        } else r.head && (r.head.name = null);
                        r.length = 0, r.mode = 8;
                    case 8:
                        if (4096 & r.flags) {
                            if (0 === v) break e;
                            S = 0;
                            do {
                                D = p[h + S++], r.head && D && r.length < 65536 && (r.head.comment += String.fromCharCode(D))
                            } while (D && S < v);
                            if (512 & r.flags && (r.check = a(r.check, p, S, h)), v -= S, h += S, D) break e
                        } else r.head && (r.head.comment = null);
                        r.mode = 9;
                    case 9:
                        if (512 & r.flags) {
                            for (; x < 16;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            if (b !== (65535 & r.check)) {
                                e.msg = "header crc mismatch", r.mode = u;
                                break
                            }
                            b = 0, x = 0
                        }
                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = c;
                        break;
                    case 10:
                        for (; x < 32;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        e.adler = r.check = d(b), b = 0, x = 0, r.mode = 11;
                    case 11:
                        if (0 === r.havedict) return e.next_out = m, e.avail_out = g, e.next_in = h, e.avail_in = v, r.hold = b, r.bits = x, 2;
                        e.adler = r.check = 1, r.mode = c;
                    case c:
                        if (5 === t || 6 === t) break e;
                    case 13:
                        if (r.last) {
                            b >>>= 7 & x, x -= 7 & x, r.mode = 27;
                            break
                        }
                        for (; x < 3;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        switch (r.last = 1 & b, x -= 1, 3 & (b >>>= 1)) {
                            case 0:
                                r.mode = 14;
                                break;
                            case 1:
                                if (y(r), r.mode = 20, 6 === t) {
                                    b >>>= 2, x -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                r.mode = 17;
                                break;
                            case 3:
                                e.msg = "invalid block type", r.mode = u
                        }
                        b >>>= 2, x -= 2;
                        break;
                    case 14:
                        for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if ((65535 & b) !== (b >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", r.mode = u;
                            break
                        }
                        if (r.length = 65535 & b, b = 0, x = 0, r.mode = 15, 6 === t) break e;
                    case 15:
                        r.mode = 16;
                    case 16:
                        if (S = r.length) {
                            if (S > v && (S = v), S > g && (S = g), 0 === S) break e;
                            n.arraySet(f, p, h, S, m), v -= S, h += S, g -= S, m += S, r.length -= S;
                            break
                        }
                        r.mode = c;
                        break;
                    case 17:
                        for (; x < 14;) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if (r.nlen = 257 + (31 & b), b >>>= 5, x -= 5, r.ndist = 1 + (31 & b), b >>>= 5, x -= 5, r.ncode = 4 + (15 & b), b >>>= 4, x -= 4, r.nlen > 286 || r.ndist > 30) {
                            e.msg = "too many length or distance symbols", r.mode = u;
                            break
                        }
                        r.have = 0, r.mode = 18;
                    case 18:
                        for (; r.have < r.ncode;) {
                            for (; x < 3;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            r.lens[j[r.have++]] = 7 & b, b >>>= 3, x -= 3
                        }
                        for (; r.have < 19;) r.lens[j[r.have++]] = 0;
                        if (r.lencode = r.lendyn, r.lenbits = 7, R = {
                                bits: r.lenbits
                            }, P = s(0, r.lens, 0, 19, r.lencode, 0, r.work, R), r.lenbits = R.bits, P) {
                            e.msg = "invalid code lengths set", r.mode = u;
                            break
                        }
                        r.have = 0, r.mode = 19;
                    case 19:
                        for (; r.have < r.nlen + r.ndist;) {
                            for (; B = (M = r.lencode[b & (1 << r.lenbits) - 1]) >>> 16 & 255, E = 65535 & M, !((T = M >>> 24) <= x);) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            if (E < 16) b >>>= T, x -= T, r.lens[r.have++] = E;
                            else {
                                if (16 === E) {
                                    for (O = T + 2; x < O;) {
                                        if (0 === v) break e;
                                        v--, b += p[h++] << x, x += 8
                                    }
                                    if (b >>>= T, x -= T, 0 === r.have) {
                                        e.msg = "invalid bit length repeat", r.mode = u;
                                        break
                                    }
                                    D = r.lens[r.have - 1], S = 3 + (3 & b), b >>>= 2, x -= 2
                                } else if (17 === E) {
                                    for (O = T + 3; x < O;) {
                                        if (0 === v) break e;
                                        v--, b += p[h++] << x, x += 8
                                    }
                                    x -= T, D = 0, S = 3 + (7 & (b >>>= T)), b >>>= 3, x -= 3
                                } else {
                                    for (O = T + 7; x < O;) {
                                        if (0 === v) break e;
                                        v--, b += p[h++] << x, x += 8
                                    }
                                    x -= T, D = 0, S = 11 + (127 & (b >>>= T)), b >>>= 7, x -= 7
                                }
                                if (r.have + S > r.nlen + r.ndist) {
                                    e.msg = "invalid bit length repeat", r.mode = u;
                                    break
                                }
                                for (; S--;) r.lens[r.have++] = D
                            }
                        }
                        if (r.mode === u) break;
                        if (0 === r.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", r.mode = u;
                            break
                        }
                        if (r.lenbits = 9, R = {
                                bits: r.lenbits
                            }, P = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, R), r.lenbits = R.bits, P) {
                            e.msg = "invalid literal/lengths set", r.mode = u;
                            break
                        }
                        if (r.distbits = 6, r.distcode = r.distdyn, R = {
                                bits: r.distbits
                            }, P = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, R), r.distbits = R.bits, P) {
                            e.msg = "invalid distances set", r.mode = u;
                            break
                        }
                        if (r.mode = 20, 6 === t) break e;
                    case 20:
                        r.mode = 21;
                    case 21:
                        if (v >= 6 && g >= 258) {
                            e.next_out = m, e.avail_out = g, e.next_in = h, e.avail_in = v, r.hold = b, r.bits = x, o(e, A), m = e.next_out, f = e.output, g = e.avail_out, h = e.next_in, p = e.input, v = e.avail_in, b = r.hold, x = r.bits, r.mode === c && (r.back = -1);
                            break
                        }
                        for (r.back = 0; B = (M = r.lencode[b & (1 << r.lenbits) - 1]) >>> 16 & 255, E = 65535 & M, !((T = M >>> 24) <= x);) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if (B && 0 === (240 & B)) {
                            for (I = T, U = B, L = E; B = (M = r.lencode[L + ((b & (1 << I + U) - 1) >> I)]) >>> 16 & 255, E = 65535 & M, !(I + (T = M >>> 24) <= x);) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            b >>>= I, x -= I, r.back += I
                        }
                        if (b >>>= T, x -= T, r.back += T, r.length = E, 0 === B) {
                            r.mode = 26;
                            break
                        }
                        if (32 & B) {
                            r.back = -1, r.mode = c;
                            break
                        }
                        if (64 & B) {
                            e.msg = "invalid literal/length code", r.mode = u;
                            break
                        }
                        r.extra = 15 & B, r.mode = 22;
                    case 22:
                        if (r.extra) {
                            for (O = r.extra; x < O;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            r.length += b & (1 << r.extra) - 1, b >>>= r.extra, x -= r.extra, r.back += r.extra
                        }
                        r.was = r.length, r.mode = 23;
                    case 23:
                        for (; B = (M = r.distcode[b & (1 << r.distbits) - 1]) >>> 16 & 255, E = 65535 & M, !((T = M >>> 24) <= x);) {
                            if (0 === v) break e;
                            v--, b += p[h++] << x, x += 8
                        }
                        if (0 === (240 & B)) {
                            for (I = T, U = B, L = E; B = (M = r.distcode[L + ((b & (1 << I + U) - 1) >> I)]) >>> 16 & 255, E = 65535 & M, !(I + (T = M >>> 24) <= x);) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            b >>>= I, x -= I, r.back += I
                        }
                        if (b >>>= T, x -= T, r.back += T, 64 & B) {
                            e.msg = "invalid distance code", r.mode = u;
                            break
                        }
                        r.offset = E, r.extra = 15 & B, r.mode = 24;
                    case 24:
                        if (r.extra) {
                            for (O = r.extra; x < O;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            r.offset += b & (1 << r.extra) - 1, b >>>= r.extra, x -= r.extra, r.back += r.extra
                        }
                        if (r.offset > r.dmax) {
                            e.msg = "invalid distance too far back", r.mode = u;
                            break
                        }
                        r.mode = 25;
                    case 25:
                        if (0 === g) break e;
                        if (S = A - g, r.offset > S) {
                            if ((S = r.offset - S) > r.whave && r.sane) {
                                e.msg = "invalid distance too far back", r.mode = u;
                                break
                            }
                            S > r.wnext ? (S -= r.wnext, C = r.wsize - S) : C = r.wnext - S, S > r.length && (S = r.length), _ = r.window
                        } else _ = f, C = m - r.offset, S = r.length;
                        S > g && (S = g), g -= S, r.length -= S;
                        do {
                            f[m++] = _[C++]
                        } while (--S);
                        0 === r.length && (r.mode = 21);
                        break;
                    case 26:
                        if (0 === g) break e;
                        f[m++] = r.length, g--, r.mode = 21;
                        break;
                    case 27:
                        if (r.wrap) {
                            for (; x < 32;) {
                                if (0 === v) break e;
                                v--, b |= p[h++] << x, x += 8
                            }
                            if (A -= g, e.total_out += A, r.total += A, A && (e.adler = r.check = r.flags ? a(r.check, f, A, m - A) : i(r.check, f, A, m - A)), A = g, (r.flags ? b : d(b)) !== r.check) {
                                e.msg = "incorrect data check", r.mode = u;
                                break
                            }
                            b = 0, x = 0
                        }
                        r.mode = 28;
                    case 28:
                        if (r.wrap && r.flags) {
                            for (; x < 32;) {
                                if (0 === v) break e;
                                v--, b += p[h++] << x, x += 8
                            }
                            if (b !== (4294967295 & r.total)) {
                                e.msg = "incorrect length check", r.mode = u;
                                break
                            }
                            b = 0, x = 0
                        }
                        r.mode = 29;
                    case 29:
                        P = 1;
                        break e;
                    case u:
                        P = -3;
                        break e;
                    case 31:
                        return -4;
                    default:
                        return l
                }
                return e.next_out = m, e.avail_out = g, e.next_in = h, e.avail_in = v, r.hold = b, r.bits = x, (r.wsize || A !== e.avail_out && r.mode < u && (r.mode < 27 || 4 !== t)) && w(e, e.output, e.next_out, A - e.avail_out) ? (r.mode = 31, -4) : (k -= e.avail_in, A -= e.avail_out, e.total_in += k, e.total_out += A, r.total += A, r.wrap && A && (e.adler = r.check = r.flags ? a(r.check, f, A, e.next_out - A) : i(r.check, f, A, e.next_out - A)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === c ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 === k && 0 === A || 4 === t) && 0 === P && (P = -5), P)
            }, t.inflateEnd = function(e) {
                if (!e || !e.state) return l;
                var t = e.state;
                return t.window && (t.window = null), e.state = null, 0
            }, t.inflateGetHeader = function(e, t) {
                var r;
                return e && e.state ? 0 === (2 & (r = e.state).wrap) ? l : (r.head = t, t.done = !1, 0) : l
            }, t.inflateSetDictionary = function(e, t) {
                var r, n = t.length;
                return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? l : 11 === r.mode && i(1, t, n, 0) !== r.check ? -3 : w(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : l
            }, t.inflateInfo = "pako inflate (from Nodeca project)"
        },
        J2ks: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = 15,
                a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            e.exports = function(e, t, r, c, u, d, p, f) {
                var h, m, v, g, b, x, y, w, k, A = f.bits,
                    S = 0,
                    C = 0,
                    _ = 0,
                    T = 0,
                    B = 0,
                    E = 0,
                    I = 0,
                    U = 0,
                    L = 0,
                    D = 0,
                    P = null,
                    R = 0,
                    O = new n.Buf16(16),
                    M = new n.Buf16(16),
                    N = null,
                    j = 0;
                for (S = 0; S <= i; S++) O[S] = 0;
                for (C = 0; C < c; C++) O[t[r + C]]++;
                for (B = A, T = i; T >= 1 && 0 === O[T]; T--);
                if (B > T && (B = T), 0 === T) return u[d++] = 20971520, u[d++] = 20971520, f.bits = 1, 0;
                for (_ = 1; _ < T && 0 === O[_]; _++);
                for (B < _ && (B = _), U = 1, S = 1; S <= i; S++)
                    if (U <<= 1, (U -= O[S]) < 0) return -1;
                if (U > 0 && (0 === e || 1 !== T)) return -1;
                for (M[1] = 0, S = 1; S < i; S++) M[S + 1] = M[S] + O[S];
                for (C = 0; C < c; C++) 0 !== t[r + C] && (p[M[t[r + C]]++] = C);
                if (0 === e ? (P = N = p, x = 19) : 1 === e ? (P = a, R -= 257, N = o, j -= 257, x = 256) : (P = s, N = l, x = -1), D = 0, C = 0, S = _, b = d, E = B, I = 0, v = -1, g = (L = 1 << B) - 1, 1 === e && L > 852 || 2 === e && L > 592) return 1;
                for (;;) {
                    y = S - I, p[C] < x ? (w = 0, k = p[C]) : p[C] > x ? (w = N[j + p[C]], k = P[R + p[C]]) : (w = 96, k = 0), h = 1 << S - I, _ = m = 1 << E;
                    do {
                        u[b + (D >> I) + (m -= h)] = y << 24 | w << 16 | k | 0
                    } while (0 !== m);
                    for (h = 1 << S - 1; D & h;) h >>= 1;
                    if (0 !== h ? (D &= h - 1, D += h) : D = 0, C++, 0 === --O[S]) {
                        if (S === T) break;
                        S = t[r + p[C]]
                    }
                    if (S > B && (D & g) !== v) {
                        for (0 === I && (I = B), b += _, U = 1 << (E = S - I); E + I < T && !((U -= O[E + I]) <= 0);) E++, U <<= 1;
                        if (L += 1 << E, 1 === e && L > 852 || 2 === e && L > 592) return 1;
                        u[v = D & g] = B << 24 | E << 16 | b - d | 0
                    }
                }
                return 0 !== D && (u[b + D] = S - I << 24 | 64 << 16 | 0), f.bits = B, 0
            }
        },
        Qgn8: e => {
            "use strict";
            e.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        },
        rDFp: e => {
            "use strict";
            e.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        },
        FF9q: function(e, t, r) {
            var n = r("F63i");
            (function() {
                var t, r, i, a, o, s;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof n && null !== n && n.hrtime ? (e.exports = function() {
                    return (t() - o) / 1e6
                }, r = n.hrtime, a = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })(), s = 1e9 * n.uptime(), o = a - s) : Date.now ? (e.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        },
        "0xii": (e, t, r) => {
            for (var n = r("FF9q"), i = window, a = ["moz", "webkit"], o = "AnimationFrame", s = i["request" + o], l = i["cancel" + o] || i["cancelRequest" + o], c = 0; !s && c < a.length; c++) s = i[a[c] + "Request" + o], l = i[a[c] + "Cancel" + o] || i[a[c] + "CancelRequest" + o];
            if (!s || !l) {
                var u = 0,
                    d = 0,
                    p = [];
                s = function(e) {
                    if (0 === p.length) {
                        var t = n(),
                            r = Math.max(0, 16.666666666666668 - (t - u));
                        u = r + t, setTimeout((function() {
                            var e = p.slice(0);
                            p.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(u)
                                } catch (r) {
                                    setTimeout((function() {
                                        throw r
                                    }), 0)
                                }
                        }), Math.round(r))
                    }
                    return p.push({
                        handle: ++d,
                        callback: e,
                        cancelled: !1
                    }), d
                }, l = function(e) {
                    for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return s.call(i, e)
            }, e.exports.cancel = function() {
                l.apply(i, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = i), e.requestAnimationFrame = s, e.cancelAnimationFrame = l
            }
        },
        Z6fc: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(r("XwoM")),
                s = a(r("vmhH")),
                l = a(r("RU0+")),
                c = a(r("7k4P")),
                u = a(r("0xii")),
                d = a(r("KDEh")),
                p = a(r("DTvD")),
                f = a(r("aWzz")),
                h = 1e3 / 60,
                m = function(e) {
                    function t(r) {
                        var i = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
                            var t = !1,
                                r = i.state,
                                a = r.currentStyle,
                                o = r.currentVelocity,
                                s = r.lastIdealStyle,
                                l = r.lastIdealVelocity;
                            for (var c in e)
                                if (Object.prototype.hasOwnProperty.call(e, c)) {
                                    var u = e[c];
                                    "number" === typeof u && (t || (t = !0, a = n({}, a), o = n({}, o), s = n({}, s), l = n({}, l)), a[c] = u, o[c] = 0, s[c] = u, l[c] = 0)
                                }
                            t && i.setState({
                                currentStyle: a,
                                currentVelocity: o,
                                lastIdealStyle: s,
                                lastIdealVelocity: l
                            })
                        }, this.startAnimationIfNecessary = function() {
                            i.animationID = u.default((function(e) {
                                var t = i.props.style;
                                if (d.default(i.state.currentStyle, t, i.state.currentVelocity)) return i.wasAnimating && i.props.onRest && i.props.onRest(), i.animationID = null, i.wasAnimating = !1, void(i.accumulatedTime = 0);
                                i.wasAnimating = !0;
                                var r = e || c.default(),
                                    n = r - i.prevTime;
                                if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * h && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                                var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / h) * h) / h,
                                    o = Math.floor(i.accumulatedTime / h),
                                    s = {},
                                    u = {},
                                    p = {},
                                    f = {};
                                for (var m in t)
                                    if (Object.prototype.hasOwnProperty.call(t, m)) {
                                        var v = t[m];
                                        if ("number" === typeof v) p[m] = v, f[m] = 0, s[m] = v, u[m] = 0;
                                        else {
                                            for (var g = i.state.lastIdealStyle[m], b = i.state.lastIdealVelocity[m], x = 0; x < o; x++) {
                                                var y = l.default(h / 1e3, g, b, v.val, v.stiffness, v.damping, v.precision);
                                                g = y[0], b = y[1]
                                            }
                                            var w = l.default(h / 1e3, g, b, v.val, v.stiffness, v.damping, v.precision),
                                                k = w[0],
                                                A = w[1];
                                            p[m] = g + (k - g) * a, f[m] = b + (A - b) * a, s[m] = g, u[m] = b
                                        }
                                    }
                                i.animationID = null, i.accumulatedTime -= o * h, i.setState({
                                    currentStyle: p,
                                    currentVelocity: f,
                                    lastIdealStyle: s,
                                    lastIdealVelocity: u
                                }), i.unreadPropStyle = null, i.startAnimationIfNecessary()
                            }))
                        }, this.state = this.defaultState()
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), i(t, null, [{
                        key: "propTypes",
                        value: {
                            defaultStyle: f.default.objectOf(f.default.number),
                            style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired,
                            children: f.default.func.isRequired,
                            onRest: f.default.func
                        },
                        enumerable: !0
                    }]), t.prototype.defaultState = function() {
                        var e = this.props,
                            t = e.defaultStyle,
                            r = e.style,
                            n = t || s.default(r),
                            i = o.default(n);
                        return {
                            currentStyle: n,
                            currentVelocity: i,
                            lastIdealStyle: n,
                            lastIdealVelocity: i
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.prevTime = c.default(), this.startAnimationIfNecessary()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                    }, t.prototype.componentWillUnmount = function() {
                        null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                    }, t.prototype.render = function() {
                        var e = this.props.children(this.state.currentStyle);
                        return e && p.default.Children.only(e)
                    }, t
                }(p.default.Component);
            t.default = m, e.exports = t.default
        },
        "7Xug": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(r("XwoM")),
                s = a(r("vmhH")),
                l = a(r("RU0+")),
                c = a(r("7k4P")),
                u = a(r("0xii")),
                d = a(r("KDEh")),
                p = a(r("DTvD")),
                f = a(r("aWzz")),
                h = 1e3 / 60;
            var m = function(e) {
                function t(r) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = i.state, r = t.currentStyles, a = t.currentVelocities, o = t.lastIdealStyles, s = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
                            var u = e[c],
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, l = !0, r[c] = n({}, r[c]), a[c] = n({}, a[c]), o[c] = n({}, o[c]), s[c] = n({}, s[c])), r[c][p] = f, a[c][p] = 0, o[c][p] = f, s[c][p] = 0)
                                }
                        }
                        l && i.setState({
                            currentStyles: r,
                            currentVelocities: a,
                            lastIdealStyles: o,
                            lastIdealVelocities: s
                        })
                    }, this.startAnimationIfNecessary = function() {
                        i.animationID = u.default((function(e) {
                            var t = i.props.styles(i.state.lastIdealStyles);
                            if (function(e, t, r) {
                                    for (var n = 0; n < e.length; n++)
                                        if (!d.default(e[n], t[n], r[n])) return !1;
                                    return !0
                                }(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
                            var r = e || c.default(),
                                n = r - i.prevTime;
                            if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * h && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                            for (var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / h) * h) / h, o = Math.floor(i.accumulatedTime / h), s = [], u = [], p = [], f = [], m = 0; m < t.length; m++) {
                                var v = t[m],
                                    g = {},
                                    b = {},
                                    x = {},
                                    y = {};
                                for (var w in v)
                                    if (Object.prototype.hasOwnProperty.call(v, w)) {
                                        var k = v[w];
                                        if ("number" === typeof k) g[w] = k, b[w] = 0, x[w] = k, y[w] = 0;
                                        else {
                                            for (var A = i.state.lastIdealStyles[m][w], S = i.state.lastIdealVelocities[m][w], C = 0; C < o; C++) {
                                                var _ = l.default(h / 1e3, A, S, k.val, k.stiffness, k.damping, k.precision);
                                                A = _[0], S = _[1]
                                            }
                                            var T = l.default(h / 1e3, A, S, k.val, k.stiffness, k.damping, k.precision),
                                                B = T[0],
                                                E = T[1];
                                            g[w] = A + (B - A) * a, b[w] = S + (E - S) * a, x[w] = A, y[w] = S
                                        }
                                    }
                                p[m] = g, f[m] = b, s[m] = x, u[m] = y
                            }
                            i.animationID = null, i.accumulatedTime -= o * h, i.setState({
                                currentStyles: p,
                                currentVelocities: f,
                                lastIdealStyles: s,
                                lastIdealVelocities: u
                            }), i.unreadPropStyles = null, i.startAnimationIfNecessary()
                        }))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: f.default.arrayOf(f.default.objectOf(f.default.number)),
                        styles: f.default.func.isRequired,
                        children: f.default.func.isRequired
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        r = e.styles,
                        n = t || r().map(s.default),
                        i = n.map((function(e) {
                            return o.default(e)
                        }));
                    return {
                        currentStyles: n,
                        currentVelocities: i,
                        lastIdealStyles: n,
                        lastIdealVelocities: i
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = c.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = this.props.children(this.state.currentStyles);
                    return e && p.default.Children.only(e)
                }, t
            }(p.default.Component);
            t.default = m, e.exports = t.default
        },
        "9RcZ": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(r("XwoM")),
                s = a(r("vmhH")),
                l = a(r("RU0+")),
                c = a(r("F6G4")),
                u = a(r("7k4P")),
                d = a(r("0xii")),
                p = a(r("KDEh")),
                f = a(r("DTvD")),
                h = a(r("aWzz")),
                m = 1e3 / 60;

            function v(e, t, r) {
                var n = t;
                return null == n ? e.map((function(e, t) {
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                })) : e.map((function(e, t) {
                    for (var i = 0; i < n.length; i++)
                        if (n[i].key === e.key) return {
                            key: n[i].key,
                            data: n[i].data,
                            style: r[t]
                        };
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                }))
            }

            function g(e, t, r, n, i, a, s, l, u) {
                for (var d = c.default(n, i, (function(e, n) {
                        var i = t(n);
                        return null == i || p.default(a[e], i, s[e]) ? (r({
                            key: n.key,
                            data: n.data
                        }), null) : {
                            key: n.key,
                            data: n.data,
                            style: i
                        }
                    })), f = [], h = [], m = [], v = [], g = 0; g < d.length; g++) {
                    for (var b = d[g], x = null, y = 0; y < n.length; y++)
                        if (n[y].key === b.key) {
                            x = y;
                            break
                        }
                    if (null == x) {
                        var w = e(b);
                        f[g] = w, m[g] = w;
                        var k = o.default(b.style);
                        h[g] = k, v[g] = k
                    } else f[g] = a[x], m[g] = l[x], h[g] = s[x], v[g] = u[x]
                }
                return [d, f, h, m, v]
            }
            var b = function(e) {
                function t(r) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), r = t[0], a = t[1], o = t[2], s = t[3], l = t[4], c = 0; c < e.length; c++) {
                            var u = e[c].style,
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, a[c] = n({}, a[c]), o[c] = n({}, o[c]), s[c] = n({}, s[c]), l[c] = n({}, l[c]), r[c] = {
                                        key: r[c].key,
                                        data: r[c].data,
                                        style: n({}, r[c].style)
                                    }), a[c][p] = f, o[c][p] = 0, s[c][p] = f, l[c][p] = 0, r[c].style[p] = f)
                                }
                        }
                        i.setState({
                            currentStyles: a,
                            currentVelocities: o,
                            mergedPropsStyles: r,
                            lastIdealStyles: s,
                            lastIdealVelocities: l
                        })
                    }, this.startAnimationIfNecessary = function() {
                        i.unmounting || (i.animationID = d.default((function(e) {
                            if (!i.unmounting) {
                                var t = i.props.styles,
                                    r = "function" === typeof t ? t(v(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
                                if (function(e, t, r, n) {
                                        if (n.length !== t.length) return !1;
                                        for (var i = 0; i < n.length; i++)
                                            if (n[i].key !== t[i].key) return !1;
                                        for (i = 0; i < n.length; i++)
                                            if (!p.default(e[i], t[i].style, r[i])) return !1;
                                        return !0
                                    }(i.state.currentStyles, r, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
                                var n = e || u.default(),
                                    a = n - i.prevTime;
                                if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + a, i.accumulatedTime > 10 * m && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                                for (var o = (i.accumulatedTime - Math.floor(i.accumulatedTime / m) * m) / m, s = Math.floor(i.accumulatedTime / m), c = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, r, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), d = c[0], f = c[1], h = c[2], b = c[3], x = c[4], y = 0; y < d.length; y++) {
                                    var w = d[y].style,
                                        k = {},
                                        A = {},
                                        S = {},
                                        C = {};
                                    for (var _ in w)
                                        if (Object.prototype.hasOwnProperty.call(w, _)) {
                                            var T = w[_];
                                            if ("number" === typeof T) k[_] = T, A[_] = 0, S[_] = T, C[_] = 0;
                                            else {
                                                for (var B = b[y][_], E = x[y][_], I = 0; I < s; I++) {
                                                    var U = l.default(m / 1e3, B, E, T.val, T.stiffness, T.damping, T.precision);
                                                    B = U[0], E = U[1]
                                                }
                                                var L = l.default(m / 1e3, B, E, T.val, T.stiffness, T.damping, T.precision),
                                                    D = L[0],
                                                    P = L[1];
                                                k[_] = B + (D - B) * o, A[_] = E + (P - E) * o, S[_] = B, C[_] = E
                                            }
                                        }
                                    b[y] = S, x[y] = C, f[y] = k, h[y] = A
                                }
                                i.animationID = null, i.accumulatedTime -= s * m, i.setState({
                                    currentStyles: f,
                                    currentVelocities: h,
                                    lastIdealStyles: b,
                                    lastIdealVelocities: x,
                                    mergedPropsStyles: d
                                }), i.unreadPropStyles = null, i.startAnimationIfNecessary()
                            }
                        })))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: h.default.arrayOf(h.default.shape({
                            key: h.default.string.isRequired,
                            data: h.default.any,
                            style: h.default.objectOf(h.default.number).isRequired
                        })),
                        styles: h.default.oneOfType([h.default.func, h.default.arrayOf(h.default.shape({
                            key: h.default.string.isRequired,
                            data: h.default.any,
                            style: h.default.objectOf(h.default.oneOfType([h.default.number, h.default.object])).isRequired
                        }))]).isRequired,
                        children: h.default.func.isRequired,
                        willEnter: h.default.func,
                        willLeave: h.default.func,
                        didLeave: h.default.func
                    },
                    enumerable: !0
                }, {
                    key: "defaultProps",
                    value: {
                        willEnter: function(e) {
                            return s.default(e.style)
                        },
                        willLeave: function() {
                            return null
                        },
                        didLeave: function() {}
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        r = e.styles,
                        n = e.willEnter,
                        i = e.willLeave,
                        a = e.didLeave,
                        l = "function" === typeof r ? r(t) : r,
                        c = void 0;
                    c = null == t ? l : t.map((function(e) {
                        for (var t = 0; t < l.length; t++)
                            if (l[t].key === e.key) return l[t];
                        return e
                    }));
                    var u = null == t ? l.map((function(e) {
                            return s.default(e.style)
                        })) : t.map((function(e) {
                            return s.default(e.style)
                        })),
                        d = null == t ? l.map((function(e) {
                            return o.default(e.style)
                        })) : t.map((function(e) {
                            return o.default(e.style)
                        })),
                        p = g(n, i, a, c, l, u, d, u, d),
                        f = p[0];
                    return {
                        currentStyles: p[1],
                        currentVelocities: p[2],
                        lastIdealStyles: p[3],
                        lastIdealVelocities: p[4],
                        mergedPropsStyles: f
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = u.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                    var t = e.styles;
                    this.unreadPropStyles = "function" === typeof t ? t(v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0, null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                        t = this.props.children(e);
                    return t && f.default.Children.only(t)
                }, t
            }(f.default.Component);
            t.default = b, e.exports = t.default
        },
        XwoM: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = 0);
                return t
            }, e.exports = t.default
        },
        F6G4: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r) {
                for (var n = {}, i = 0; i < e.length; i++) n[e[i].key] = i;
                var a = {};
                for (i = 0; i < t.length; i++) a[t[i].key] = i;
                var o = [];
                for (i = 0; i < t.length; i++) o[i] = t[i];
                for (i = 0; i < e.length; i++)
                    if (!Object.prototype.hasOwnProperty.call(a, e[i].key)) {
                        var s = r(i, e[i]);
                        null != s && o.push(s)
                    }
                return o.sort((function(e, r) {
                    var i = a[e.key],
                        o = a[r.key],
                        s = n[e.key],
                        l = n[r.key];
                    if (null != i && null != o) return a[e.key] - a[r.key];
                    if (null != s && null != l) return n[e.key] - n[r.key];
                    if (null != i) {
                        for (var c = 0; c < t.length; c++) {
                            var u = t[c].key;
                            if (Object.prototype.hasOwnProperty.call(n, u)) {
                                if (i < a[u] && l > n[u]) return -1;
                                if (i > a[u] && l < n[u]) return 1
                            }
                        }
                        return 1
                    }
                    for (c = 0; c < t.length; c++) {
                        u = t[c].key;
                        if (Object.prototype.hasOwnProperty.call(n, u)) {
                            if (o < a[u] && s > n[u]) return 1;
                            if (o > a[u] && s < n[u]) return -1
                        }
                    }
                    return -1
                }))
            }, e.exports = t.default
        },
        "5p+V": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = {
                noWobble: {
                    stiffness: 170,
                    damping: 26
                },
                gentle: {
                    stiffness: 120,
                    damping: 14
                },
                wobbly: {
                    stiffness: 180,
                    damping: 12
                },
                stiff: {
                    stiffness: 210,
                    damping: 20
                }
            }, e.exports = t.default
        },
        Enqy: (e, t, r) => {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e.default : e
            }
            n(r("Z6fc")), n(r("7Xug"));
            var i = r("9RcZ");
            t.S6 = n(i);
            var a = r("a1xD");
            t.oz = n(a);
            var o = r("5p+V");
            t.v4 = n(o), n(r("vmhH")), n(r("xB03"))
        },
        xB03: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function() {
                0
            };
            e.exports = t.default
        },
        KDEh: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        if (0 !== r[n]) return !1;
                        var i = "number" === typeof t[n] ? t[n] : t[n].val;
                        if (e[n] !== i) return !1
                    }
                return !0
            }, e.exports = t.default
        },
        a1xD: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            };
            t.default = function(e, t) {
                return n({}, s, t, {
                    val: e
                })
            };
            var i, a = r("5p+V"),
                o = (i = a) && i.__esModule ? i : {
                    default: i
                },
                s = n({}, o.default.noWobble, {
                    precision: .01
                });
            e.exports = t.default
        },
        "RU0+": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n, i, a, o, s) {
                var l = n + (-a * (t - i) + -o * n) * e,
                    c = t + l * e;
                if (Math.abs(l) < s && Math.abs(c - i) < s) return r[0] = i, r[1] = 0, r;
                return r[0] = c, r[1] = l, r
            };
            var r = [0, 0];
            e.exports = t.default
        },
        vmhH: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = "number" === typeof e[r] ? e[r] : e[r].val);
                return t
            }, e.exports = t.default
        },
        "7k4P": function(e, t, r) {
            var n = r("F63i");
            (function() {
                var t, r, i;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof n && null !== n && n.hrtime ? (e.exports = function() {
                    return (t() - i) / 1e6
                }, r = n.hrtime, i = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })()) : Date.now ? (e.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        },
        "6p3b": (e, t, r) => {
            "use strict";
            var n, i = r("fALc"),
                a = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var o = -1;

            function s(e, t) {
                if (e === o) return a.default.transform(t)
            }
            t.Ay = s
        }
    }
]);
//# debugId=1c4c54cd-a5c0-5a4b-9875-4dae76563ea6