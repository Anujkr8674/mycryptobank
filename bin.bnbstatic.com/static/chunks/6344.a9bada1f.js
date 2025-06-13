"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [6344], {
        rLsV: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("PzHQ");
            const c = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        RG88: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("PzHQ");
            const c = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z",
                    fill: "currentColor"
                }))
            }
        },
        "yZa/": (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("PzHQ");
            const c = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z",
                    fill: "currentColor"
                }))
            }
        },
        "iTq/": (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("PzHQ");
            const c = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M3 10.982c0 3.845 3.137 6.982 6.982 6.982 1.518 0 3.036-.506 4.149-1.416L18.583 21 20 19.583l-4.452-4.452c.81-1.113 1.416-2.631 1.416-4.149 0-1.922-.81-3.643-2.023-4.958C13.726 4.81 11.905 4 9.982 4 6.137 4 3 7.137 3 10.982zM13.423 7.44a4.819 4.819 0 011.416 3.441c0 1.315-.506 2.53-1.416 3.44a4.819 4.819 0 01-3.44 1.417 4.819 4.819 0 01-3.441-1.417c-1.012-.81-1.518-2.023-1.518-3.339 0-1.315.506-2.53 1.416-3.44.911-1.012 2.227-1.518 3.542-1.518 1.316 0 2.53.506 3.44 1.416z",
                    fill: "currentColor"
                }))
            }
        },
        SBaW: (e, t, r) => {
            r.d(t, {
                A: () => g
            });
            var n = r("b6CO"),
                a = r("hrAD"),
                o = r("KrVi"),
                i = r("DTvD"),
                c = r.n(i),
                s = r("GIr8"),
                u = r("2IQ4"),
                l = r("oICd"),
                f = r("rLsV"),
                p = r("/Cny"),
                d = r("OLW9"),
                v = r("NSeK"),
                m = function(e) {
                    var t = e.isShow,
                        r = e.variant,
                        n = e.getValid,
                        o = e.customIcon,
                        i = {
                            info: f.A,
                            error: p.A,
                            warning: f.A,
                            success: d.A
                        }[r],
                        u = o && n(o) ? c().cloneElement(o, (0, a._)({
                            size: 20
                        }, o.props), []) : c().createElement(i, {
                            size: 20
                        });
                    return t ? c().createElement(s.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            mr: "xs",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0
                        }
                    }, u) : null
                },
                b = function(e) {
                    var t = e.isShow,
                        r = e.onClose;
                    return t ? c().createElement(s.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "t.disabled",
                            marginLeft: "auto"
                        }
                    }, c().createElement(v.A, {
                        size: 18,
                        onClick: r,
                        cursor: "pointer"
                    })) : null
                },
                h = (0, i.forwardRef)((function(e, t) {
                    var r = e.children,
                        l = e.icon,
                        f = e.variant,
                        p = void 0 === f ? "warning" : f,
                        d = e.closable,
                        v = void 0 !== d && d,
                        h = e.showIcon,
                        x = void 0 === h || h,
                        g = e.onClose,
                        y = e.title,
                        w = e.insideCenter,
                        E = void 0 !== w && w,
                        A = e.__css,
                        _ = (0, o._)(e, ["children", "icon", "variant", "closable", "showIcon", "onClose", "title", "insideCenter", "__css"]);
                    return c().createElement(s.A, (0, n._)({
                        tx: "alertV2",
                        variant: p,
                        alignItems: "flex-start",
                        ref: t,
                        width: "100%",
                        __css: (0, a._)({
                            p: "ls"
                        }, A)
                    }, _), c().createElement(s.A, {
                        justifyContent: E ? "center" : "",
                        flex: "1",
                        alignItems: "flex-start"
                    }, c().createElement(m, {
                        isShow: x,
                        variant: p,
                        getValid: i.isValidElement,
                        customIcon: l
                    }), c().createElement(u.A, {
                        __css: {
                            wordBreak: "break-word",
                            flexShrink: 1,
                            height: "auto",
                            lineHeight: "24px",
                            width: E ? "auto" : "100%",
                            color: "alertV2.".concat(p, "FontColor")
                        }
                    }, y && c().createElement(u.A, {
                        as: "p",
                        __css: {
                            fontWeight: "medium"
                        }
                    }, y), r)), c().createElement(b, {
                        isShow: v,
                        onClose: g
                    }))
                })),
                x = (0, i.forwardRef)((function(e, t) {
                    var r = e.enablePortal,
                        i = e.container,
                        s = e.topOfPage,
                        u = e.__css,
                        f = (0, o._)(e, ["enablePortal", "container", "topOfPage", "__css"]);
                    return s || r || i ? c().createElement(l.Ay, {
                        container: i
                    }, c().createElement(h, (0, n._)({
                        __css: s ? (0, a._)({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: "alert",
                            borderRadius: 0
                        }, u) : {}
                    }, f, {
                        ref: t
                    }))) : c().createElement(h, (0, n._)({}, f))
                }));
            x.displayName = "AlertV2";
            const g = x
        },
        TiUw: (e, t, r) => {
            r.d(t, {
                R: () => a,
                e: () => o
            });
            var n = r("DTvD"),
                a = (0, n.createContext)({}),
                o = function() {
                    return (0, n.useContext)(a)
                }
        },
        SmCU: (e, t, r) => {
            r.d(t, {
                z: () => Ot
            });
            var n, a = r("hrAD"),
                o = r("qoEP"),
                i = r("mguP"),
                c = r("DTvD"),
                s = r.n(c),
                u = r("nzy6"),
                l = r("ZLGz"),
                f = r("chLO"),
                p = r("S+0I"),
                d = r("66mo"),
                v = r.n(d),
                m = r("VA12"),
                b = r("GqbV"),
                h = r("0603"),
                x = function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.get)("/bapi/asset/v2/private/asset-service/wallet/get-all-config");
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
                g = r("iKvg"),
                y = r("Bkzn"),
                w = r("d12p"),
                E = function() {
                    function e(t, r, n) {
                        var a = this;
                        (0, y._)(this, e), this.nativeMediaQueryList = t.matchMedia(r), this.active = !0, this.cancellableListener = function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            a.matches = a.nativeMediaQueryList.matches, a.active && n.apply(void 0, (0, w._)(t))
                        }, this.nativeMediaQueryList.addListener(this.cancellableListener), this.matches = this.nativeMediaQueryList.matches
                    }
                    return e.prototype.cancel = function() {
                        this.active = !1, this.nativeMediaQueryList.removeListener(this.cancellableListener)
                    }, e
                }(),
                A = "mobile",
                _ = "tablet",
                k = "desktop",
                C = {
                    mobile: "(max-width: 767px)",
                    tablet: "(min-width: 768px) and (max-width: 1023px)",
                    desktop: "(min-width: 1024px)"
                },
                I = s().createContext((n = {}, (0, g._)(n, A, !1), (0, g._)(n, _, !1), (0, g._)(n, k, !0), n)),
                S = function(e) {
                    var t, r = e.children,
                        n = (0, i._)((0, c.useState)((t = {}, (0, g._)(t, A, !1), (0, g._)(t, _, !1), (0, g._)(t, k, !0), t)), 2),
                        u = n[0],
                        l = n[1],
                        f = (0, c.useRef)(),
                        p = (0, c.useCallback)((function() {
                            l(f.current.reduce((function(e, t) {
                                var r = t.name,
                                    n = t.mqListener;
                                return (0, o._)((0, a._)({}, e), (0, g._)({}, r, n.matches))
                            }), {}))
                        }), [l]);
                    return (0, c.useEffect)((function() {
                        f.current = Object.keys(C).map((function(e) {
                            return {
                                name: e,
                                mqListener: new E(window, C[e], p)
                            }
                        })), p()
                    }), [p]), s().createElement(I.Provider, {
                        value: (0, o._)((0, a._)({}, u), {
                            updateMedia: p
                        })
                    }, r)
                },
                T = function() {
                    var e = (0, c.useContext)(I),
                        t = e.mobile,
                        r = e.tablet,
                        n = e.desktop;
                    return (0, c.useMemo)((function() {
                        return {
                            isTablet: r,
                            isMobile: t,
                            isDesktop: n
                        }
                    }), [t, r, n])
                },
                M = r("d6PB"),
                N = r("Vhyo"),
                R = r("2IQ4"),
                z = r("GIr8"),
                B = r("zX7I"),
                F = r("5mL0"),
                D = r("tM9B"),
                P = r("TVsB"),
                L = r("HS2I"),
                O = r("x/RO"),
                U = r("MKCC"),
                V = r("HuzR"),
                q = (function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/future/user-data/user-balance", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v4/private/future/user-data/user-balance", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/delivery/user-data/user-balance", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        asset: ""
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v2/private/delivery/user-data/user-balance", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, m.get)("/bapi/futures/v1/private/delivery/user-data/get-all-max-withdraw-amount");
                                case 4:
                                    t = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === t || void 0 === t ? void 0 : t.data) || {});
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r, n, a = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] && a[1], e.prev = 2, e.next = 5, (0, m.post)(r ? "/bapi/futures/v1/private/spot/user-data/getMaxWithdrawAmount" : "/bapi/futures/v1/private/future/user-data/getMaxWithdrawAmount", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || 0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                G = (function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, m.post)("/bapi/futures/v4/private/future/user-data/get-max-coin-swap-amount", t);
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || 0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r, n, a;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/future/user-data/get-asset-residual-deposit", t);
                                case 5:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", null !== (a = null === n || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.residualDeposit) && void 0 !== a ? a : 0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                H = (function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/future/user-data/account-tier-commission", t);
                                case 5:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2);
                                case 10:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || {});
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/future/user-data/account-tier-commission", t);
                                case 5:
                                    r = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), r = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        name: "BTCUSDT"
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/delivery/user-data/account-tier-commission", t);
                                case 5:
                                    r = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), r = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t, r, n = arguments;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        symbol: ""
                                    }, e.prev = 2, e.next = 5, (0, m.post)("/bapi/futures/v1/private/future/user-data/brackets", t);
                                case 5:
                                    r = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), r = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, m.post)("/bapi/futures/v1/private/future/user-daily-profit/getLast30DaysProfitStatistic", t);
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", r);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, m.post)("/bapi/futures/v1/private/delivery/user-data/getMaxWithdrawAmount", t);
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || 0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                W = (function() {
                    var e = (0, p._)(v().mark((function e() {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, m.post)("/bapi/futures/v4/private/future/user-data/user-total-balance"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, m.post)("/bapi/futures/v1/private/future/portfolio/margin/get-user-max-withdraw", t);
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", (null === r || void 0 === r ? void 0 : r.data) || {});
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), r("lSUd")),
                j = (function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r, n, a, o, i;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/charge-withdraw-histroy", t);
                                case 2:
                                    return r = e.sent, n = r.data, a = n.data, o = n.total, i = n.direction, e.abrupt("return", {
                                        data: a,
                                        total: o,
                                        direction: i
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r, n;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-methods", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/payment-calculate", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-account-info", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/get-country-banks", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/apply-charge", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/charge-notify", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v2/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/re-send-withdraw-mail", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/remove-bank", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/bind-confirm", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/submit-offline-charge", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/get-share-kyc-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/share-kyc", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, m.post)("/bapi/fiat/v1/private/fiatpayment/etana/check", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, m.post)("/bapi/fiat/v1/private/fiatpayment/offline-charge-bank-list", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-charge-reference-code", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-withdrawal-bank-list", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/get-user-kyclimit-and-available", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/apply-nationality-and-estimated-value", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/cards/get-cards", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/cards/unbind-card", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/account/async-check-account-holder-name", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/private/fiatpayment/account/get-async-check-account-holder-name-result", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/sessionId");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                Q = function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/notifyDownload", t);
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
                Z = (function() {
                    var e = (0, p._)(v().mark((function e(t) {
                        var r;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/fiat/v1/friendly/fiatpayment/transactions/get-fiat-currencies", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", {
                                        result: (null === r || void 0 === r ? void 0 : r.fiatCurrencies) || []
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("1CC6")),
                K = r("+K15"),
                Y = new Set(["EUR", "GBP"]),
                J = "payRiskSafeInfo",
                $ = "payRiskSafeResult",
                X = r("x76r"),
                ee = r("WT+B"),
                te = r("b6CO"),
                re = r("PzHQ");
            const ne = function(e) {
                return s().createElement(re.A, (0, te._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.5 3h-3v6.95l-.303-.003-4.159.04 5.975 5.976 5.975-5.975-4.176-.01-.312-.002V3zm-10 11h3v4h11v-4h3v7h-17v-7z",
                    fill: "currentColor"
                }))
            };
            var ae = r("zIIt"),
                oe = r("QFAv"),
                ie = r("Brq1"),
                ce = r("ecWg"),
                se = r("HEid"),
                ue = r("tSdT"),
                le = r("TiUw"),
                fe = r("haD4"),
                pe = function(e) {
                    var t = (0, i._)((0, c.useState)({
                            creditStatus: 0
                        }), 2),
                        r = t[0],
                        n = t[1];
                    return (0, c.useEffect)((function() {
                        function t() {
                            return (t = (0, p._)(v().mark((function t() {
                                var r;
                                return v().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, (0, fe.UT)();
                                        case 4:
                                            (r = t.sent).success && n(r.data);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))).apply(this, arguments)
                        }! function() {
                            t.apply(this, arguments)
                        }()
                    }), [e]), r
                },
                de = r("KrVi"),
                ve = function() {
                    var e = (0, h.s)((0, p._)(v().mark((function e() {
                            var t;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, O.ko)();
                                    case 2:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [], {
                            value: []
                        }),
                        t = e.value,
                        r = (0, de._)(e, ["value"]);
                    return (0, o._)((0, a._)({}, r), {
                        marginAccountInfo: t
                    })
                },
                me = r("SBaW"),
                be = r("Wpmw"),
                he = function(e) {
                    var t = (0, be.B)("asset-transfer"),
                        r = t.t,
                        n = t.i18n,
                        a = (0, c.useCallback)((function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = e ? "".concat(e, "-").concat(t) : t;
                            return r(a, n)
                        }), [e, r]);
                    return {
                        i18n: n,
                        getI18n: a
                    }
                },
                xe = function(e, t, r) {
                    for (var n = [], a = e.length, o = t.length, i = 0; i < a; i++)
                        for (var c = r(e[i]), s = 0; s < o; s++) {
                            if (c === r(t[s])) {
                                n.push(e[i]);
                                break
                            }
                        }
                    return n
                },
                ge = function(e, t) {
                    for (var r = e.length, n = 0; n < r; n++) {
                        var a = e[n];
                        if (t.indexOf(a) >= 0) return !0
                    }
                    return !1
                },
                ye = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return e === t ? 0 : e > t ? -1 * r : r
                },
                we = function(e) {
                    var t = Number(e.free || 0) + Number(e.locked || 0) + Number(e.freeze || 0) + Number(e.withdrawing || 0);
                    return (0, D.Ww)(t)
                },
                Ee = "MARGIN",
                Ae = function(e) {
                    return (Math.ceil(100 * e) / 100).toFixed(2)
                };
            const _e = function() {
                var e = (0, le.e)(),
                    t = e.from,
                    r = e.fromIsoSymbol,
                    n = e.isolatedPairs,
                    a = he().getI18n,
                    o = ve().marginAccountInfo,
                    i = (0, c.useMemo)((function() {
                        var e;
                        return null === (e = n.filter((function(e) {
                            return e.symbol === r
                        }))) || void 0 === e ? void 0 : e[0]
                    }), [n, r]),
                    u = (t === Ee ? null === o || void 0 === o ? void 0 : o.transferOutBar : null === i || void 0 === i ? void 0 : i.transferOutBar) || "2",
                    l = parseFloat(Number(u || "2.0").toFixed(2)),
                    f = t === Ee ? null === o || void 0 === o ? void 0 : o.marginLevel : null === i || void 0 === i ? void 0 : i.marginLevel;
                return t === Ee || "ISOLATED_MARGIN" === t ? s().createElement(me.A, {
                    variant: "warning"
                }, s().createElement(N.A, {
                    lineHeight: "20px"
                }, a(t === Ee ? "margin-risk-collateral-tips" : "margin-risk-not-collateral-tips", {
                    collateralMarginLevel: Ae(null === o || void 0 === o ? void 0 : o.collateralMarginLevel),
                    marginLevel: Ae(f),
                    transferOutBar: l
                }))) : null
            };
            var ke = "error-available-low-level";
            const Ce = function(e) {
                var t = e.availableNone,
                    r = e.availableNoneI18nKey,
                    n = (0, le.e)(),
                    a = n.from,
                    o = n.fromIsoSymbol,
                    i = n.isolatedPairs,
                    u = he().getI18n,
                    l = ve().marginAccountInfo,
                    f = (0, c.useMemo)((function() {
                        var e;
                        return null === (e = i.filter((function(e) {
                            return e.symbol === o
                        }))) || void 0 === e ? void 0 : e[0]
                    }), [i, o]),
                    p = ("MARGIN" === a ? null === l || void 0 === l ? void 0 : l.transferOutBar : null === f || void 0 === f ? void 0 : f.transferOutBar) || "2",
                    d = parseFloat(Number(p || "2.0").toFixed(2));
                if ("MARGIN" !== a && "ISOLATED_MARGIN" !== a) return null;
                if (!t) return null;
                return s().createElement(z.A, {
                    sx: {
                        color: "error"
                    }
                }, function() {
                    if ("MARGIN" === a) {
                        var e = (null === l || void 0 === l ? void 0 : l.collateralMarginLevel) && Number(null === l || void 0 === l ? void 0 : l.collateralMarginLevel) > Number(p) ? "error-available-effect-high-level" : ke;
                        return u(e, {
                            transferOutBar: d
                        })
                    }
                    if ("ISOLATED_MARGIN" === a) {
                        var t = (null === f || void 0 === f ? void 0 : f.marginLevel) && Number(null === f || void 0 === f ? void 0 : f.marginLevel) > Number(p) ? "error-available-hight-level" : ke;
                        return u(t, {
                            transferOutBar: d
                        })
                    }
                    return u("assetTransfer-".concat(r))
                }())
            };
            var Ie = r("3tnw"),
                Se = r.n(Ie);

            function Te() {
                var e = (0, le.e)(),
                    t = e.from,
                    r = e.to,
                    n = e.isolatedPairs,
                    a = e.toIsoSymbol,
                    o = e.walletsBalance,
                    i = e.coin,
                    u = he("assetTransfer").getI18n,
                    l = "ISOLATED_MARGIN" === t || "ISOLATED_MARGIN" === r,
                    f = "MARGIN" === t || "MARGIN" === r,
                    p = (0, c.useMemo)((function() {
                        var e, t;
                        return null === n || void 0 === n || null === (e = n.filter) || void 0 === e || null === (t = e.call(n, (function(e) {
                            return e.symbol === a
                        }))) || void 0 === t ? void 0 : t[0]
                    }), [n, a]),
                    d = (0, c.useMemo)((function() {
                        var e, t, r, n, a;
                        return null === (a = null === (t = null === o || void 0 === o || null === (e = o.activate) || void 0 === e ? void 0 : e.filter((function(e) {
                            return "MARGIN" === e.accountType
                        }))) || void 0 === t || null === (r = t[0]) || void 0 === r || null === (n = r.assetBalances) || void 0 === n ? void 0 : n.filter((function(e) {
                            return e.asset === i
                        }))) || void 0 === a ? void 0 : a[0]
                    }), [o, i]);
                if (!f && !l) return null;
                if (f && !d) return null;
                if (l && !p) return null;
                if ("PREPARE_DELIST" === (f ? d.status : p.status)) {
                    var v = f ? d.asset : "".concat(p.base, "/").concat(p.quote),
                        m = f ? d.delistedTime : p.delistTime,
                        b = f ? "cross-delist" : "isolated-delist";
                    return s().createElement(me.A, {
                        variant: "error"
                    }, s().createElement(N.A, {
                        lineHeight: "20px",
                        fontSize: "14px"
                    }, u(b, {
                        interpolation: {
                            escapeValue: !1
                        },
                        pair: v,
                        delistTime: Se()(Number(m)).format("YYYY-MM-DD HH:mm (UTCZ)")
                    })))
                }
                return null
            }
            const Me = s().memo(Te);
            var Ne = r("Djui"),
                Re = r("nQqE"),
                ze = r("/APJ"),
                Be = r("vWh5"),
                Fe = function(e) {
                    var t = (0, i._)(function() {
                            var e = (0, l.xN)().userFiat,
                                t = (0, l.PC)()[(0, i._)((e || "USD_USD").split("_"), 1)[0]] || {
                                    rate: 1,
                                    symbol: "$"
                                };
                            return [t.rate, t.symbol]
                        }(), 2),
                        r = t[0],
                        n = t[1],
                        a = (0, i._)((0, c.useState)([]), 2),
                        o = a[0],
                        s = a[1],
                        u = (0, i._)((0, c.useState)(0), 2),
                        f = u[0],
                        d = u[1];
                    return (0, c.useEffect)((function() {
                        function t() {
                            return (t = (0, p._)(v().mark((function e() {
                                var t;
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, (0, Be.z6)();
                                        case 3:
                                            t = e.sent, s(t), e.next = 9;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))).apply(this, arguments)
                        }
                        e && function() {
                            t.apply(this, arguments)
                        }()
                    }), [s, e]), (0, c.useEffect)((function() {
                        if (o && o.length > 0) {
                            var e = o.find((function(e) {
                                return "BTCUSDT" === e.symbol
                            }));
                            if (e) {
                                var t = e.price;
                                d(Number(r) * Number(t))
                            } else {
                                var n = o.find((function(e) {
                                    return "USDTBTC" === e.symbol
                                }));
                                if (n) {
                                    var a = n.price;
                                    d(Number(r) / Number(a))
                                }
                            }
                        }
                    }), [o.length, r]), [f, n, o]
                },
                De = function(e, t, r) {
                    if ("BTC" === e) return t;
                    var n = new P.A(0),
                        a = new P.A(t),
                        o = r.find((function(t) {
                            return t.symbol === "".concat("BTC").concat(e)
                        }));
                    if (o && o.price) n = a.dividedBy(o.price);
                    else {
                        var i = r.find((function(t) {
                            return t.symbol === "".concat(e).concat("BTC")
                        }));
                        i && i.price && (n = a.times(i.price))
                    }
                    return n.toFixed(8)
                },
                Pe = r("TtvA"),
                Le = r("QCYV"),
                Oe = r("yZa/"),
                Ue = r("61q2"),
                Ve = r("iTq/"),
                qe = function(e) {
                    var t = e.value,
                        r = e.renderValue,
                        n = e.open,
                        a = (0, de._)(e, ["value", "renderValue", "open"]);
                    return s().createElement(z.A, (0, te._)({
                        sx: {
                            width: "100%",
                            height: "48px",
                            bg: "bg3",
                            px: "ls",
                            borderRadius: "4px",
                            cursor: "pointer",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    }, a), s().createElement(R.A, {
                        flex: "1"
                    }, r() || t), s().createElement(Oe.A, {
                        sx: {
                            transform: n ? "rotate(180deg)" : "rotate(0)",
                            color: "t.third"
                        },
                        size: 16
                    }))
                };
            const Ge = function(e) {
                var t = e.label,
                    r = e.listTitle,
                    n = e.value,
                    a = e.renderValue,
                    o = e.hideSearch,
                    u = void 0 !== o && o,
                    l = e.searchPlaceholder,
                    f = e.listData,
                    p = e.onChange,
                    d = (0, i._)((0, c.useState)(!1), 2),
                    v = d[0],
                    m = d[1],
                    b = (0, i._)((0, c.useState)(""), 2),
                    h = b[0],
                    x = b[1],
                    g = (0, c.useCallback)((function(e) {
                        m(!1), p && p(e)
                    }), []),
                    y = (0, c.useCallback)((function() {
                        m(!1), x("")
                    }), []),
                    w = (0, c.useMemo)((function() {
                        if (!h) return f;
                        var e = new RegExp(h, "i");
                        return f.filter((function(t) {
                            var r = t.name;
                            return e.test(r)
                        }))
                    }), [h, f]);
                return s().createElement(s().Fragment, null, t && s().createElement(N.A, {
                    sx: {
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "t.secondary",
                        mb: "minor"
                    }
                }, t), s().createElement(qe, {
                    value: n,
                    renderValue: a,
                    open: v,
                    onClick: function() {
                        return m(!0)
                    }
                }), s().createElement(Pe.A, {
                    visible: v,
                    onClick: y
                }), s().createElement(Le.A, {
                    visible: v,
                    direction: "bottom",
                    outerClick: y,
                    bg: "popupBg",
                    childProps: {
                        sx: {
                            borderRadius: "24px 24px 0 0"
                        }
                    }
                }, s().createElement(R.A, {
                    sx: {
                        maxHeight: "500px",
                        height: "500px",
                        overflow: "hidden"
                    }
                }, s().createElement(z.A, {
                    flexDirection: "column",
                    p: "sm",
                    height: "100%"
                }, s().createElement(z.A, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "4px",
                    mb: "10px"
                }, s().createElement(N.A, {
                    sx: {
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "t.primary"
                    }
                }, r), s().createElement(Ue.A, {
                    size: 16,
                    color: "t.third",
                    onClick: function() {
                        return m(!1)
                    }
                })), !u && s().createElement(R.A, {
                    mb: "xs",
                    width: 1
                }, s().createElement(se.A, {
                    variant: "filled",
                    boxProps: {
                        width: "100%"
                    },
                    placeholder: l,
                    value: h,
                    defaultValue: h,
                    onChange: function(e) {
                        return x((e.target.value || "").replace(/\W/g, ""))
                    },
                    autoComplete: "off",
                    prefix: s().createElement(Ve.A, {
                        color: "t.placeholder",
                        ml: "8px",
                        mr: "-8px",
                        sx: {
                            verticalAlign: "middle"
                        }
                    }),
                    suffix: !!h && s().createElement(F.A, {
                        size: 16,
                        color: "t.placeholder",
                        sx: {
                            cursor: "pointer",
                            verticalAlign: "middle",
                            mr: "xs"
                        },
                        onClick: function() {
                            return x("")
                        }
                    })
                })), s().createElement(R.A, {
                    flex: "1",
                    sx: {
                        overflow: "scroll",
                        li: {
                            listStyleType: "none",
                            "> div": {
                                height: "100%",
                                alignItems: "center"
                            }
                        }
                    }
                }, w.map((function(e) {
                    var t = e.value,
                        r = e.name,
                        a = e.desc,
                        o = e.prefix,
                        i = e.suffix,
                        c = e.disabled;
                    return s().createElement(ze.c, {
                        height: 48,
                        key: t,
                        value: "".concat(t),
                        onClick: function() {
                            c || g(t)
                        },
                        bg: "popupBg",
                        prefix: o,
                        suffix: i
                    }, s().createElement(N.A, {
                        sx: {
                            opacity: c ? .4 : 1,
                            fontSize: "14px",
                            color: t === n ? "t.yellow" : "t.primary"
                        }
                    }, r), (null === a || void 0 === a ? void 0 : a.length) ? s().createElement(N.A, {
                        sx: {
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "t.third"
                        }
                    }, a) : null)
                })))))))
            };
            const He = function(e) {
                var t = e.assetLogo,
                    r = e.assetCode,
                    n = e.assetName,
                    a = e.children,
                    o = e.logoSize,
                    i = void 0 === o ? 20 : o,
                    c = (0, de._)(e, ["assetLogo", "assetCode", "assetName", "children", "logoSize"]);
                return s().createElement(z.A, (0, te._)({}, c, {
                    __css: {
                        lineHeight: 1,
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }
                }), s().createElement(z.A, {
                    sx: {
                        alignItems: "center",
                        flex: "1"
                    }
                }, !!t && s().createElement(Ne.A, {
                    variant: "avatar",
                    src: t,
                    sx: {
                        mr: "xs",
                        flex: "none",
                        width: i,
                        height: i,
                        border: "1px solid",
                        borderColor: "lines.light"
                    }
                }), s().createElement(N.A, {
                    sx: {
                        color: "t.primary",
                        flex: "none"
                    },
                    children: r
                }), n ? s().createElement(N.A, {
                    as: "small",
                    sx: {
                        flex: 1,
                        ml: "xs",
                        mr: "sm",
                        mt: "2px",
                        color: "t.third",
                        display: "-webkit-box",
                        wordBreak: "break-all",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 1
                    },
                    children: "".concat(n)
                }) : null), a)
            };
            var We = {
                    "& .coin-name": {
                        fontSize: "12px",
                        color: "t.third",
                        lineHeight: "16px",
                        ml: "minor",
                        mb: "1px"
                    },
                    "& .price-free": {
                        fontSize: "12px",
                        color: "t.third",
                        lineHeight: "12px"
                    },
                    "& .coin-text-primary": {
                        color: "t.primary"
                    },
                    "& .coin-text-yellow": {
                        color: "t.yellow"
                    },
                    "& .coin-logo": {
                        width: "20px",
                        height: "20px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "line",
                        borderRadius: "99999px"
                    }
                },
                je = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        n = e.data,
                        a = e.fiatSymbol,
                        o = e.btcFiatPrice,
                        i = e.priceIndex,
                        u = T().isMobile,
                        l = he("assetTransfer").getI18n,
                        f = (0, c.useMemo)((function() {
                            return n.filter((function(e) {
                                return e.coin === t
                            }))[0] || {
                                coin: "",
                                logoUrl: "",
                                name: ""
                            }
                        }), [t, n]),
                        p = (0, c.useMemo)((function() {
                            return u ? n.map((function(e) {
                                var t = e.coin,
                                    r = e.name,
                                    n = e.logoUrl;
                                return {
                                    value: t,
                                    name: t,
                                    desc: r,
                                    prefix: s().createElement(Ne.A, {
                                        src: n,
                                        variant: "avatar",
                                        sx: {
                                            width: "20px",
                                            height: "20px",
                                            borderWidth: "1px",
                                            borderStyle: "solid",
                                            borderColor: "line"
                                        }
                                    })
                                }
                            })) : n
                        }), [u, n]);
                    return u ? s().createElement(Ge, {
                        listTitle: l("select-selectCoin"),
                        searchPlaceholder: l("input-placeholder-searchCoin"),
                        value: t,
                        renderValue: function() {
                            return s().createElement(He, {
                                assetLogo: f.logoUrl,
                                assetCode: f.coin,
                                assetName: f.name
                            })
                        },
                        listData: p,
                        onChange: r
                    }) : s().createElement(Re.A, {
                        size: "lg",
                        value: t,
                        onChange: r,
                        itemHeight: 52,
                        renderValue: function() {
                            return s().createElement(He, {
                                assetLogo: f.logoUrl,
                                assetCode: f.coin,
                                assetName: f.name
                            })
                        },
                        empty: null,
                        disabled: !p.length,
                        placeholder: l("select-placeholder"),
                        limit: 3,
                        lazy: !0,
                        sx: We
                    }, p.map((function(e) {
                        var r = e.coin,
                            n = e.logoUrl,
                            c = e.name,
                            u = e.free;
                        return s().createElement(ze.c, {
                            key: r,
                            prefix: s().createElement("img", {
                                className: "coin-logo",
                                src: n
                            }),
                            value: r
                        }, s().createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, s().createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, s().createElement("div", {
                            className: r === t ? "coin-text-yellow" : "coin-text-primary"
                        }, r), " ", s().createElement("div", {
                            className: "coin-name"
                        }, c)), a && s().createElement("div", {
                            style: {
                                textAlign: "right"
                            }
                        }, s().createElement("div", {
                            className: "coin-text-primary"
                        }, u || "0.00"), !!u && s().createElement("div", {
                            className: "price-free"
                        }, a, function(e) {
                            var t = e.coin,
                                r = e.amount,
                                n = e.btcFiatPrice,
                                a = e.priceIndex,
                                o = De(t, r, a);
                            return o ? (0, D.lw)(o, n).toFixed(2) : ""
                        }({
                            coin: r,
                            amount: u,
                            btcFiatPrice: o,
                            priceIndex: i
                        })))))
                    })))
                };
            const Qe = s().memo(je);
            var Ze = {
                    width: "49%",
                    padding: "12px 16px",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "bg3",
                    bg: "bg3",
                    cursor: "pointer",
                    "&.selected": {
                        borderColor: "primary"
                    }
                },
                Ke = {
                    color: "t.third",
                    fontSize: "12px",
                    lineHeight: "12px"
                },
                Ye = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        n = e.data,
                        a = e.fiatSymbol,
                        o = e.btcFiatPrice,
                        i = e.priceIndex;
                    return s().createElement(z.A, {
                        justifyContent: "space-between"
                    }, n.map((function(e) {
                        var n = e.logoUrl,
                            c = e.coin,
                            u = e.props;
                        return s().createElement(z.A, {
                            key: c,
                            sx: Ze,
                            className: t === c ? "selected" : "",
                            onClick: function() {
                                return r && r(c)
                            }
                        }, s().createElement(R.A, null, !!n && s().createElement(Ne.A, {
                            variant: "avatar",
                            src: n,
                            sx: {
                                mr: "xs",
                                flex: "none",
                                width: "32px",
                                height: "32px",
                                border: "1px solid",
                                borderColor: "lines.light"
                            }
                        })), s().createElement(R.A, null, s().createElement(z.A, {
                            alignItems: "center"
                        }, s().createElement(R.A, {
                            mr: "2px"
                        }, c)), s().createElement(R.A, {
                            fontSize: "16px"
                        }, we(u) || "0.00"), !!Number(u.free) && s().createElement(R.A, {
                            sx: Ke
                        }, a, function(e) {
                            var t = e.coin,
                                r = e.amount,
                                n = e.btcFiatPrice,
                                a = e.priceIndex,
                                o = De(t, r, a);
                            return o ? (0, D.lw)(o, n).toFixed(2) : ""
                        }({
                            coin: c,
                            amount: we(u),
                            btcFiatPrice: o,
                            priceIndex: i
                        }))))
                    })))
                };
            const Je = s().memo(Ye);

            function $e(e, t) {
                return Xe.apply(this, arguments)
            }

            function Xe() {
                return (Xe = (0, p._)(v().mark((function e(t, r) {
                    var n, a, o;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = [], e.t0 = t, e.next = "MAIN" === e.t0 ? 4 : "MARGIN" === e.t0 ? 11 : "ISOLATED_MARGIN" === e.t0 ? 16 : 23;
                                break;
                            case 4:
                                return e.next = 6, (0, b.m2)();
                            case 6:
                                if (e.t1 = e.sent, e.t1) {
                                    e.next = 9;
                                    break
                                }
                                e.t1 = [];
                            case 9:
                                return n = e.t1, e.abrupt("break", 24);
                            case 11:
                                return e.next = 13, (0, O.ko)();
                            case 13:
                                return a = e.sent, n = (null === a || void 0 === a ? void 0 : a.userAssets) || [], e.abrupt("break", 24);
                            case 16:
                                if (r) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return", n);
                            case 18:
                                return e.next = 20, (0, u.Wo)({
                                    requireCoupon: !0,
                                    symbols: "".concat(r)
                                });
                            case 20:
                                return o = e.sent, n = Array.isArray(o) ? [o[0].base, o[0].quote] : [], e.abrupt("break", 24);
                            case 23:
                                return e.abrupt("break", 24);
                            case 24:
                                return e.abrupt("return", n);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var et = r("cSeX");
            const tt = function(e) {
                var t = e.label,
                    r = e.children,
                    n = e.mt;
                return s().createElement(R.A, {
                    sx: {
                        mt: n || "md"
                    }
                }, t && s().createElement(et.A, null, t), r)
            };
            const rt = function(e) {
                return s().createElement(re.A, (0, te._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M7.5 3h3v18.5l-7-7h4V3zM16.5 21h-3V2.5l7 7h-4V21z",
                    fill: "currentColor"
                }))
            };
            var nt = function(e) {
                var t = e.color,
                    r = (0, de._)(e, ["color"]);
                return s().createElement(R.A, (0, te._)({
                    sx: {
                        width: "5px",
                        height: "5px",
                        borderRadius: "100%",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: t
                    }
                }, r))
            };
            const at = function(e) {
                var t = e.onClick;
                return s().createElement(z.A, {
                    sx: {
                        width: "32px",
                        position: "relative",
                        py: "md",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, s().createElement(nt, {
                    color: "buy"
                }), s().createElement(R.A, {
                    sx: {
                        flex: 1,
                        width: 0,
                        borderWidth: "0 1px 0 0",
                        borderStyle: "dashed",
                        borderColor: "line"
                    }
                }), s().createElement(nt, {
                    color: "sell"
                }), s().createElement(z.A, {
                    onClick: t,
                    sx: {
                        cursor: "pointer",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "32px",
                        bg: "bg3",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        "&:hover": {
                            "svg, svg > path": {
                                color: "primary",
                                fill: "primary"
                            }
                        }
                    }
                }, s().createElement(rt, {
                    size: 16,
                    color: "t.third"
                })))
            };
            const ot = function() {
                var e = he("assetTransfer").getI18n;
                return s().createElement(N.A, {
                    sx: {
                        ml: "sm",
                        fontSize: "12px",
                        color: "t.secondary",
                        ":before": {
                            content: "' '",
                            display: "inline-block",
                            width: "8px",
                            height: "8px",
                            borderRadius: "100%",
                            bg: "error",
                            opacity: "0.4",
                            mr: "minor"
                        }
                    }
                }, e("tag-inactive"))
            };
            var it = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return !(e.includes(t) || "PORTFOLIO_MARGIN" === t && e.includes("MARGIN"))
            };
            const ct = function(e) {
                var t = e.value,
                    r = e.onChange,
                    n = e.data,
                    o = e.activatdAccounts,
                    i = e.sx,
                    u = e.uni,
                    l = void 0 !== u && u,
                    f = T().isMobile,
                    p = he("assetTransfer").getI18n,
                    d = (0, c.useCallback)((function(e) {
                        if (!e) return null;
                        var t = e.toLocaleLowerCase();
                        if (l) return p("account-".concat(t).concat("main" !== t ? "-uni" : ""));
                        var r = t.split("_").join("");
                        return p("account-".concat(r))
                    }), [p]),
                    v = (0, c.useMemo)((function() {
                        return f ? n.map((function(e) {
                            var t = it(o, e),
                                r = t ? s().createElement(ot, null) : null;
                            return {
                                value: e,
                                name: d(e),
                                suffix: r,
                                disabled: t
                            }
                        })) : n
                    }), [f, n, o]);
                return (0, le.e)().fixWalletType ? s().createElement(z.A, {
                    sx: {
                        width: "100%",
                        height: "48px",
                        bg: "bg3",
                        px: "ls",
                        borderRadius: "4px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }, s().createElement(R.A, {
                    flex: "1"
                }, d(t))) : f ? s().createElement(Ge, {
                    hideSearch: !0,
                    listTitle: p("select-selectAccount"),
                    value: t,
                    renderValue: function() {
                        return d(t)
                    },
                    listData: v,
                    onChange: r
                }) : s().createElement(Re.A, {
                    hideSearch: !0,
                    size: "lg",
                    placeholder: p("select-placeholder"),
                    value: t,
                    onChange: r,
                    renderValue: function(e) {
                        return d(e)
                    },
                    limit: 5,
                    sx: (0, a._)({
                        li: {
                            opacity: 1
                        }
                    }, i)
                }, v.map((function(e) {
                    var r = it(o, e),
                        n = e === t;
                    return s().createElement(ze.c, {
                        key: e,
                        value: e,
                        disabled: r,
                        suffix: r ? s().createElement(ot, null) : null,
                        title: d(e)
                    }, s().createElement(N.A, {
                        sx: {
                            opacity: r ? .4 : 1,
                            color: n ? "t.yellow" : "t.primary"
                        }
                    }, d(e)))
                })))
            };
            var st = function(e) {
                var t = e.value,
                    r = e.onChange,
                    n = e.pairs,
                    a = T().isMobile,
                    o = he("assetTransfer").getI18n,
                    i = (0, c.useMemo)((function() {
                        return a ? n.map((function(e) {
                            var t = e.symbol;
                            return {
                                value: t,
                                name: t,
                                desc: ""
                            }
                        })) : n
                    }), [a, n]),
                    u = (0, c.useCallback)((function(e) {
                        return r(e)
                    }), [r]);
                return a ? s().createElement(Ge, {
                    listTitle: o("isolated-pair"),
                    searchPlaceholder: o("select-placeholder"),
                    value: t,
                    listData: i,
                    onChange: u,
                    renderValue: function(e) {
                        return e
                    }
                }) : s().createElement(Re.A, {
                    size: "lg",
                    value: t,
                    onChange: u,
                    empty: null,
                    disabled: !i.length,
                    placeholder: o("select-placeholder")
                }, i.map((function(e) {
                    var r = e.symbol,
                        n = e.baseProps,
                        a = e.quoteProps,
                        o = e.base,
                        i = e.quote;
                    return s().createElement(ze.c, {
                        key: r,
                        value: r
                    }, s().createElement(R.A, null, s().createElement(R.A, {
                        color: r === t ? "primary" : "t.primary"
                    }, o, "/", i), s().createElement(R.A, {
                        sx: {
                            fontSize: "12px",
                            color: "t.third",
                            lineHeight: "12px"
                        }
                    }, Number(null === n || void 0 === n ? void 0 : n.free).toFixed(2) || "0.00", "/", Number(null === a || void 0 === a ? void 0 : a.free).toFixed(2) || "0.00")))
                })))
            };
            const ut = s().memo(st);
            var lt = "ISOLATED_MARGIN",
                ft = function(e) {
                    var t = e.revertFromAndTo,
                        r = e.from,
                        n = e.to,
                        a = e.allFrom,
                        o = e.allTo,
                        i = e.fromIsoSymbol,
                        c = e.setFromIsoSymbol,
                        u = e.toIsoSymbol,
                        l = e.setToIsoSymbol,
                        f = e.filterFromSymbols,
                        p = e.filterToSymbols,
                        d = e.handleFromChange,
                        v = e.activatdAccounts,
                        m = e.handleToChange,
                        b = e.t,
                        h = T().isMobile,
                        x = (0, ee.Z)((function(e) {
                            return "from" === e && r === lt ? s().createElement(R.A, {
                                width: ["100%", "156px"],
                                flex: "none",
                                ml: [0, "16px"]
                            }, s().createElement(tt, {
                                label: h ? null : b("isolated-pair"),
                                mt: h ? "8px" : "0"
                            }, s().createElement(ut, {
                                value: i,
                                onChange: c,
                                pairs: f
                            }))) : "to" === e && n === lt ? s().createElement(R.A, {
                                width: ["100%", "156px"],
                                flex: "none",
                                ml: [0, "16px"]
                            }, s().createElement(tt, {
                                label: h ? null : b("isolated-pair"),
                                mt: h ? "8px" : "24px"
                            }, s().createElement(ut, {
                                value: u,
                                onChange: l,
                                pairs: p
                            }))) : null
                        }));
                    return s().createElement(z.A, {
                        sx: {
                            p: "md",
                            borderStyle: "solid",
                            borderWidth: "0 0 1px",
                            borderColor: "line"
                        }
                    }, s().createElement(z.A, {
                        mt: "20px",
                        mr: "xs"
                    }, s().createElement(at, {
                        onClick: t
                    })), s().createElement(R.A, {
                        flex: 1
                    }, s().createElement(z.A, {
                        width: "100%",
                        flexWrap: "wrap"
                    }, s().createElement(R.A, {
                        flex: ["none", "1"],
                        width: ["100%", "auto"]
                    }, s().createElement(tt, {
                        label: b("select-from"),
                        mt: "0"
                    }, s().createElement(ct, {
                        value: r,
                        data: Object.keys(a),
                        onChange: d,
                        activatdAccounts: v
                    }))), x("from")), s().createElement(z.A, {
                        width: "100%",
                        flexWrap: "wrap"
                    }, s().createElement(R.A, {
                        flex: ["none", "1"],
                        width: ["100%", "auto"]
                    }, s().createElement(tt, {
                        label: b("select-to")
                    }, s().createElement(ct, {
                        value: n,
                        data: Object.keys(o),
                        onChange: m,
                        activatdAccounts: v
                    }))), x("to"))))
                };
            const pt = s().memo(ft);
            var dt = r("RG88");
            const vt = function(e) {
                return s().createElement(re.A, (0, te._)({
                    width: "1em",
                    height: "1em",
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
            const mt = function(e) {
                return s().createElement(re.A, (0, te._)({
                    width: "1em",
                    height: "1em",
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
            var bt = r("fPTZ"),
                ht = r("boXg"),
                xt = r("0TaA");
            const gt = function(e) {
                return s().createElement(re.A, (0, te._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z",
                    fill: "currentColor"
                }))
            };
            var yt = {
                    width: "100%",
                    color: "t.third",
                    padding: "0 11px",
                    alignItems: "center"
                },
                wt = {
                    ml: "8px",
                    minWidth: "40px"
                },
                Et = {
                    CARD: dt.A,
                    DELIVERY: vt,
                    FUTURE: mt,
                    ISOLATED_MARGIN: bt.A,
                    MARGIN: ht.A,
                    MAIN: xt.A
                },
                At = function(e) {
                    var t = Et[e] || xt.A;
                    return s().createElement(t, {
                        size: 24
                    })
                },
                _t = function(e) {
                    var t = e.revertFromAndTo,
                        r = e.from,
                        n = e.to,
                        a = e.allFrom,
                        o = e.allTo,
                        i = e.handleFromChange,
                        c = e.activatdAccounts,
                        u = e.handleToChange,
                        l = e.t,
                        f = e.uni,
                        p = void 0 !== f && f;
                    return s().createElement(z.A, {
                        sx: {
                            p: "md",
                            borderStyle: "solid",
                            borderWidth: "0 0 1px",
                            borderColor: "line"
                        }
                    }, s().createElement(R.A, {
                        sx: {
                            flex: 1,
                            borderRadius: "4px",
                            bg: "bg3"
                        }
                    }, s().createElement(z.A, {
                        sx: yt
                    }, At(r), s().createElement(et.A, {
                        sx: wt
                    }, l("select-from")), s().createElement(ct, {
                        sx: {
                            flex: 1,
                            border: "none"
                        },
                        value: r,
                        data: Object.keys(a),
                        onChange: i,
                        activatdAccounts: c,
                        uni: p
                    })), s().createElement(z.A, {
                        sx: {
                            width: "100%",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0 16px"
                        }
                    }, s().createElement(gt, {
                        color: "t.disabled",
                        size: 16
                    }), s().createElement(rt, {
                        onClick: t,
                        color: "primary",
                        size: 20,
                        cursor: "pointer"
                    })), s().createElement(z.A, {
                        sx: yt
                    }, At(n), s().createElement(et.A, {
                        sx: wt
                    }, l("select-to")), s().createElement(ct, {
                        sx: {
                            flex: 1,
                            border: "none"
                        },
                        value: n,
                        data: Object.keys(o),
                        onChange: u,
                        activatdAccounts: c,
                        uni: p
                    }))))
                };
            const kt = s().memo(_t);
            var Ct = function() {
                    var e = (0, p._)(v().mark((function e() {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, m.post)("/bapi/margin/v1/private/margin/portfolio/fund-collection");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
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
                It = r("8aEf"),
                St = function(e, t, r) {
                    "function" === typeof e && e({
                        action: "user_convert_event",
                        options: (0, a._)({
                            $element_id: "front_failed",
                            df_type: t
                        }, r)
                    })
                },
                Tt = function(e, t, r) {
                    var n = (0, c.useRef)(!1),
                        i = (0, c.useRef)(!1),
                        s = e.open,
                        u = e.coin,
                        l = e.availableNone,
                        f = e.loadMaxAvailable;
                    return (0, c.useEffect)((function() {
                        i.current || s && u && (i.current = !0, function(e, t) {
                            "function" === typeof e && e({
                                action: "user_convert_event",
                                options: (0, o._)((0, a._)({
                                    $element_id: "trigger"
                                }, t), {
                                    from: "null",
                                    to: "null"
                                })
                            })
                        }(t, r()))
                    }), [r, s, t, u]), (0, c.useEffect)((function() {
                        s || (n.current = !1, i.current = !1)
                    }), [s]), (0, c.useEffect)((function() {
                        if (s && l)
                            if (n.current) {
                                if (!f) return;
                                St(t, "transfer_no_assets", r())
                            } else n.current = !0
                    }), [l, r, f, s, t]), (0, c.useMemo)((function() {
                        return {
                            trackConfirmStart: function() {
                                ! function(e, t) {
                                    "function" === typeof e && e({
                                        action: "user_convert_event",
                                        options: (0, a._)({
                                            $element_id: "confirm_start"
                                        }, t)
                                    })
                                }(t, r())
                            },
                            trackAPIStatus: function(e) {
                                ! function(e, t, r) {
                                    if ("function" === typeof e) {
                                        var n = t.success,
                                            o = t.code;
                                        e({
                                            action: "user_convert_event",
                                            options: (0, a._)({
                                                $element_id: n ? "successful" : "api_failed",
                                                df_status: n ? null : o
                                            }, r)
                                        })
                                    }
                                }(t, e, r())
                            },
                            trackFrontFailed: function(e) {
                                St(t, e, r())
                            }
                        }
                    }), [r, t])
                },
                Mt = function(e) {
                    e && e({
                        action: "webClick",
                        options: {
                            elementId: "click_wallet_transfer_popup_confirm"
                        }
                    })
                },
                Nt = "ISOLATED_MARGIN",
                Rt = [Nt, "MAIN", "MARGIN"],
                zt = "PORTFOLIO_MARGIN",
                Bt = ["EUR", "GBP"],
                Ft = function() {
                    return s().createElement(M.A, {
                        sx: {
                            height: 18,
                            width: 20
                        }
                    })
                },
                Dt = function() {
                    var e = (0, le.e)(),
                        t = e.open,
                        r = e.setOpen,
                        n = e.from,
                        u = e.setFrom,
                        l = e.to,
                        f = e.setTo,
                        d = e.coin,
                        m = e.setCoin,
                        h = e.walletsBalance,
                        x = e.loadingWalletsBalance,
                        y = e.freshBalance,
                        E = e.walletConfig,
                        A = e.onTransferSuccess,
                        _ = e.isolatedPairs,
                        k = e.logoMap,
                        C = e.fromIsoSymbol,
                        I = e.setFromIsoSymbol,
                        S = e.toIsoSymbol,
                        T = e.setToIsoSymbol,
                        te = e.afterTransfer,
                        re = e.needMargin,
                        fe = e.needFuturesJointMargin,
                        de = e.delay,
                        ve = e.btcFiatPrice,
                        me = e.priceIndex,
                        be = e.fiatSymbol,
                        Ee = e.closeDefaultToast,
                        Ae = void 0 !== Ee && Ee,
                        ke = e.sendLog,
                        Ie = e.disableCloseOnMaskClick,
                        Se = e.limitCoinList,
                        Te = e.customDesc,
                        Ne = e.onCollectionSuccess,
                        Re = e.showMarginTip,
                        ze = e.useUserBaseDetail,
                        Be = e.useAssets,
                        Fe = e.useCreditModeInfo,
                        De = "function" === typeof ze ? ze : L.useUserBaseDetail,
                        Pe = "function" === typeof Fe ? Fe : pe,
                        Le = ("function" === typeof Be ? Be : L.useAssets)().getAssetInfo,
                        Oe = 2 === Pe((De().value || {}).isExistFutureAccount).creditStatus,
                        Ue = function() {
                            var e = function() {
                                    var e = document.getElementById("paySafeResult");
                                    e && document.body.removeChild(e);
                                    var t = document.createElement("script");
                                    t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001"), t.type = "text/javascript", t.id = "paySafeResult", t.appendChild(document.createTextNode("\n    function tmx_profiling_complete(session_id) {  \n      if (session_id) {\n        const info = { isSuccess: true }\n        typeof window !== 'undefined' &&\n          window.localStorage &&\n          window.localStorage.setItem('payRiskSafeResult', JSON.stringify(info))\n      }\n    }\n    ")), document.body.appendChild(t)
                                },
                                t = function(e) {
                                    if (e) {
                                        var t = document.getElementById("paySafe");
                                        t && document.body.removeChild(t);
                                        var r = document.createElement("script");
                                        r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001"), r.type = "text/javascript", r.src = "https://h.online-metrix.net/fp/tags.js?org_id=".concat("3t5fmdir", "&session_id=").concat(e), r.id = "paySafe", document.body.appendChild(r)
                                    }
                                },
                                r = function() {
                                    var e = (0, p._)(v().mark((function e(t) {
                                        return v().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, Q(t);
                                                case 3:
                                                    e.next = 8;
                                                    break;
                                                case 5:
                                                    e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 5]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                n = function(e) {
                                    var t = e.disabledNotify,
                                        n = e.currency,
                                        a = e.source,
                                        o = "undefined" !== typeof window && new RegExp("^/([a-z]{2}(-[a-zA-Z]{2})?)?/?$").test(window.location.pathname),
                                        i = null === n || void 0 === n ? void 0 : n.some((function(e) {
                                            return Y.has(e)
                                        }));
                                    t || o || !i || r({
                                        source: a
                                    })
                                },
                                a = function() {
                                    var r = (0, p._)(v().mark((function r(a) {
                                        var o, i, c, s, u;
                                        return v().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    if (o = a.disabledNotify, i = a.currency, c = a.source, r.prev = 1, null === Z.U || void 0 === Z.U ? void 0 : Z.U.read("BNC_FV_KEY")) {
                                                        r.next = 5;
                                                        break
                                                    }
                                                    return r.abrupt("return");
                                                case 5:
                                                    return r.next = 7, j();
                                                case 7:
                                                    (s = r.sent.data) && (e(), t(s.sessionId), n({
                                                        disabledNotify: o,
                                                        currency: i,
                                                        source: c
                                                    }), u = {
                                                        sessionId: s.sessionId,
                                                        expiredTime: s.expiredTime
                                                    }, K.IG.setItem(J, u)), r.next = 14;
                                                    break;
                                                case 11:
                                                    r.prev = 11, r.t0 = r.catch(1), console.log(r.t0);
                                                case 14:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r, null, [
                                            [1, 11]
                                        ])
                                    })));
                                    return function(e) {
                                        return r.apply(this, arguments)
                                    }
                                }();
                            return function(r) {
                                var o = r.source,
                                    i = r.currency,
                                    c = r.disabledSessionId,
                                    s = r.disabledNotify,
                                    u = r.forceSessionId,
                                    l = Date.now() / 1e3,
                                    f = K.IG.getItem(J) || {},
                                    p = f.expiredTime,
                                    d = void 0 === p ? 0 : p,
                                    v = f.sessionId,
                                    m = (K.IG.getItem($) || {}).isSuccess;
                                c || (d < l || u ? (K.IG.setItem($, {
                                    isSuccess: !1
                                }), a({
                                    disabledNotify: s,
                                    currency: i,
                                    source: o
                                })) : (m || (e(), t(v)), n({
                                    disabledNotify: s,
                                    currency: i,
                                    source: o
                                })))
                            }
                        }(),
                        Ve = (0, ue.A)().enqueueNotification,
                        qe = he("assetTransfer").getI18n,
                        Ge = (0, i._)((0, c.useState)(""), 2),
                        He = Ge[0],
                        We = Ge[1],
                        je = (0, i._)((0, c.useState)(!1), 2),
                        Ze = je[0],
                        Ke = je[1],
                        Ye = (0, i._)((0, c.useState)(!1), 2),
                        Xe = Ye[0],
                        et = Ye[1],
                        rt = (0, i._)((0, c.useState)(!1), 2),
                        nt = rt[0],
                        at = rt[1],
                        ot = h.activate,
                        it = !!Se,
                        ct = (0, c.useMemo)((function() {
                            return E.reduce((function(e, t) {
                                var r = e.allFrom,
                                    i = e.allTo,
                                    c = t.fromAccount,
                                    s = t.toAccount,
                                    u = [s].indexOf(l) > -1,
                                    f = [c].indexOf(n) > -1;
                                return {
                                    allFrom: u ? (0, o._)((0, a._)({}, r), (0, g._)({}, c, !0)) : r,
                                    allTo: f ? (0, o._)((0, a._)({}, i), (0, g._)({}, s, !0)) : i
                                }
                            }), {
                                allFrom: {},
                                allTo: {}
                            })
                        }), [E, n, l]),
                        st = ct.allFrom,
                        ut = ct.allTo,
                        lt = (0, c.useMemo)((function() {
                            return n === Nt && l !== Nt || n !== Nt && l === Nt
                        }), [n, l]),
                        ft = (0, c.useMemo)((function() {
                            return n === Nt && l === Nt
                        }), [n, l]),
                        dt = (0, c.useMemo)((function() {
                            var e;
                            return null === (e = _.filter((function(e) {
                                return e.symbol === C
                            }))) || void 0 === e ? void 0 : e[0]
                        }), [_, C]),
                        vt = (0, c.useMemo)((function() {
                            var e;
                            return null === (e = _.filter((function(e) {
                                return e.symbol === S
                            }))) || void 0 === e ? void 0 : e[0]
                        }), [_, S]),
                        mt = (0, c.useMemo)((function() {
                            return function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = {};
                                return e.forEach((function(e) {
                                    "MARGIN" === (null === e || void 0 === e ? void 0 : e.accountType) && (t = (0, o._)((0, a._)({}, e), {
                                        accountType: zt
                                    }))
                                })), (0, w._)(e).concat([t])
                            }(ot)
                        }), [ot]),
                        bt = (0, c.useMemo)((function() {
                            return mt.reduce((function(e, t) {
                                var r = t.accountType;
                                return (t.assetBalances || []).forEach((function(t) {
                                    var n = t.asset;
                                    e[n] || (e[n] = {}), e[n][r] = t
                                })), e
                            }), {})
                        }), [mt]),
                        ht = (0, c.useMemo)((function() {
                            if (lt) {
                                var e, t, r = n === Nt,
                                    a = r ? dt : vt;
                                if (!a) return [];
                                var o, i = a.base,
                                    c = a.quote,
                                    s = a.baseProps,
                                    u = a.quoteProps,
                                    f = [i, c].map((function(e) {
                                        var t, n;
                                        return {
                                            name: (null === (t = bt[e]) || void 0 === t || null === (n = t.MAIN) || void 0 === n ? void 0 : n.assetName) || e,
                                            coin: e,
                                            logoUrl: k[e],
                                            props: r ? i === e ? s : u : void 0
                                        }
                                    })),
                                    p = r ? l : n,
                                    d = (null !== (o = null === (e = mt.filter((function(e) {
                                        return e.accountType === p
                                    }))) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.assetBalances) && void 0 !== o ? o : []).map((function(e) {
                                        return {
                                            coin: e.asset,
                                            name: e.assetName,
                                            logoUrl: e.logoUrl,
                                            props: r ? void 0 : {
                                                free: we(e),
                                                netAssetOfBtc: e.transferBtc,
                                                assetName: e.asset,
                                                locked: e.locked,
                                                transferInEnabled: !1
                                            }
                                        }
                                    }));
                                return xe(r ? f : d, r ? d : f, (function(e) {
                                    return e.coin
                                }))
                            }
                            if (ft) {
                                if (!dt || !vt) return [];
                                var v = dt.base,
                                    m = dt.quote,
                                    b = vt.base,
                                    h = vt.quote,
                                    x = [v, m].map((function(e) {
                                        var t, r;
                                        return {
                                            name: (null === (t = bt[e]) || void 0 === t || null === (r = t.MAIN) || void 0 === r ? void 0 : r.assetName) || e,
                                            coin: e,
                                            logoUrl: k[e],
                                            props: v === e ? dt.baseProps : dt.quoteProps
                                        }
                                    })),
                                    g = [b, h].map((function(e) {
                                        var t, r;
                                        return {
                                            name: (null === (t = bt[e]) || void 0 === t || null === (r = t.MAIN) || void 0 === r ? void 0 : r.assetName) || e,
                                            coin: e,
                                            logoUrl: k[e]
                                        }
                                    }));
                                return xe(x, g, (function(e) {
                                    return e.coin
                                }))
                            }
                            return Object.keys(bt).map((function(e) {
                                var t = bt[e];
                                return l in t && t[n]
                            })).filter((function(e) {
                                return Se ? !!e && Se.includes(null === e || void 0 === e ? void 0 : e.asset) : !!e
                            })).map((function(e) {
                                var t = e.asset;
                                return {
                                    name: e.assetName || t,
                                    coin: t,
                                    logoUrl: e.logoUrl,
                                    transferBtc: e.transferBtc,
                                    free: we(e)
                                }
                            })).sort((function(e, t) {
                                return ye(Number(e.transferBtc), Number(t.transferBtc)) + e.coin.localeCompare(t.coin)
                            }))
                        }), [bt, n, l, lt, _, k, ft, C, S, dt, vt, Se]),
                        xt = (0, c.useCallback)((0, p._)(v().mark((function e() {
                            var t, r, a, o, i, c, s, u, f;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!it) {
                                            e.next = 15;
                                            break
                                        }
                                        if (t = "0", "MARGIN" !== n || "FUTURE" !== l) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 6, (0, O.IE)({
                                            requireCoupon: !0
                                        });
                                    case 6:
                                        i = e.sent, t = (null === (o = null === i || void 0 === i || null === (r = i.data) || void 0 === r || null === (a = r.userAssets) || void 0 === a ? void 0 : a.find((function(e) {
                                            return "BNB" === e.asset
                                        }))) || void 0 === o ? void 0 : o.free) || "0";
                                    case 8:
                                        if ("FUTURE" !== n || "MARGIN" !== l) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 12, (0, U.yO)();
                                    case 12:
                                        u = e.sent, t = (null === (s = null === u || void 0 === u || null === (c = u.data) || void 0 === c ? void 0 : c.find((function(e) {
                                            return "BNB" === e.asset
                                        }))) || void 0 === s ? void 0 : s.walletBalance) || "0";
                                    case 14:
                                        return e.abrupt("return", t);
                                    case 15:
                                        if ("MARGIN" !== n && n !== zt) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 18, (0, V.qz)({
                                            asset: d
                                        }, {
                                            excludeErrorCode: ["051013"]
                                        });
                                    case 18:
                                        return e.abrupt("return", e.sent);
                                    case 19:
                                        if ("FUTURE" !== n) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 22, q({
                                            assetName: d
                                        });
                                    case 22:
                                        return e.abrupt("return", e.sent);
                                    case 23:
                                        if ("DELIVERY" !== n) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.next = 26, H({
                                            assetName: d
                                        });
                                    case 26:
                                        return e.abrupt("return", e.sent);
                                    case 27:
                                        if (n !== Nt || !d.length || !C.length) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.next = 30, (0, W.R0)({
                                            asset: d,
                                            symbol: C
                                        });
                                    case 30:
                                        return e.abrupt("return", e.sent);
                                    case 31:
                                        return f = bt[d] || {}, e.abrupt("return", (f[n] || {}).free || 0);
                                    case 33:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [n, d, bt, C]),
                        gt = (0, c.useCallback)((0, p._)(v().mark((function e() {
                            var t, r, n;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = null === (t = mt.find((function(e) {
                                                return "FUTURE" === e.accountType
                                            }))) || void 0 === t ? void 0 : t.assetBalances, n = null === r || void 0 === r ? void 0 : r.find((function(e) {
                                                return e.asset === d
                                            })), "FUTURE" !== l || !fe || !n) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, G({
                                            asset: d
                                        });
                                    case 6:
                                        return e.abrupt("return", e.sent);
                                    case 7:
                                        return e.abrupt("return", Number.MAX_SAFE_INTEGER);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [l, fe, d, mt]),
                        yt = (0, i._)((0, c.useState)(0), 2),
                        wt = yt[0],
                        Et = yt[1],
                        At = (0, i._)((0, c.useState)(!1), 2),
                        _t = At[0],
                        St = At[1],
                        Dt = (0, c.useMemo)((function() {
                            var e = {
                                asset: d,
                                amount: He
                            };
                            return lt && (e.symbol = n === Nt ? C : S), ft && (e.symbol = C, e.targetSymbol = S), it ? e.transferSide = "MARGIN" === n ? "ROLL_OUT" : "ROLL_IN" : e.kindType = [n, l].join("_"), e
                        }), [He, d, n, C, ft, it, lt, l, S]);
                    (0, c.useEffect)((function() {
                        t && ke && function(e) {
                            e && e({
                                action: "componentShow",
                                options: {
                                    elementId: "show_component_wallet_transfer_popup"
                                }
                            })
                        }(ke)
                    }), [t, ke]), (0, c.useEffect)((function() {
                        !0 !== t || "MARGIN" !== l && ut[l] || !ut[zt] || f(zt)
                    }), [t, ut]);
                    var Pt = (0, c.useCallback)((0, p._)(v().mark((function e() {
                        var t, r, n;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!x) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.t0 = i._, e.t1 = Promise, e.next = 6, gt();
                                case 6:
                                    return e.t2 = e.sent, e.next = 9, xt();
                                case 9:
                                    return e.t3 = e.sent, e.t4 = [e.t2, e.t3], e.next = 13, e.t1.all.call(e.t1, e.t4);
                                case 13:
                                    if (e.t5 = e.sent, t = (0, e.t0)(e.t5, 2), r = t[0], n = t[1], fe && "FUTURE" === l) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 19:
                                    if (!(r < 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 21:
                                    return e.abrupt("return", Math.min(r, n));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [gt, xt, x, fe]);
                    (0, X.A)((function() {
                        return t && (et(!0), St(!1), Pt().then((function(e) {
                                void 0 !== e && (Et(e), et(!1), St(!0))
                            })).catch((function() {
                                Et(0), et(!1), St(!0)
                            }))),
                            function() {
                                Et(0), St(!1)
                            }
                    }), 500, [Pt, t]);
                    var Lt = (0, c.useCallback)((0, p._)(v().mark((function e() {
                            var t, r, n, a, o, i, c, s;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = new Promise((function(e) {
                                            e((0, U.yO)())
                                        })), a = new Promise((function(e) {
                                            e((0, U.Dx)())
                                        })), e.next = 5, Promise.all([n, a]);
                                    case 5:
                                        o = e.sent, i = o[0], c = o[1], s = (null === i || void 0 === i || null === (t = i.data) || void 0 === t ? void 0 : t.find((function(e) {
                                            return +e.walletBalance < 0
                                        }))) || (null === c || void 0 === c || null === (r = c.data) || void 0 === r ? void 0 : r.find((function(e) {
                                            return +e.walletBalance < 0
                                        }))), at(s);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        Ot = (0, c.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_asset_from",
                                        extraInfo: {
                                            wallet: t
                                        }
                                    }
                                })
                            }(ke, e), u(e)
                        }), [u, ke]),
                        Ut = (0, c.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_asset_to",
                                        extraInfo: {
                                            wallet: t
                                        }
                                    }
                                })
                            }(ke, e), f(e)
                        }), [f, ke]),
                        Vt = (0, c.useCallback)((function(e) {
                            ! function(e, t) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_coin",
                                        extraInfo: {
                                            coin: t
                                        }
                                    }
                                })
                            }(ke, e), m(e), Bt.includes(e) && Ue({
                                currency: [e],
                                source: "transfer"
                            })
                        }), [m, ke]),
                        qt = (0, c.useMemo)((function() {
                            return _t && !Number(wt) || 0 === ht.length
                        }), [ht.length, _t, wt]),
                        Gt = (0, ee.Z)((function() {
                            return {
                                symbol: Dt.symbol,
                                from: n,
                                to: l,
                                pairs: d,
                                type: "transfer"
                            }
                        })),
                        Ht = (0, ee.Z)((function(e) {
                            "function" === typeof ke && ke(e)
                        })),
                        Wt = Tt({
                            open: t,
                            availableNone: qt,
                            loadMaxAvailable: _t,
                            coin: d
                        }, Ht, Gt),
                        jt = (0, c.useCallback)((function(e) {
                            var t, r = e.target.value,
                                n = Le(d) || {
                                    assetDigit: 8
                                },
                                a = new RegExp("[0]?(\\d){1,12}(?:\\.\\d{0,".concat((null === n || void 0 === n ? void 0 : n.assetDigit) || 8, "}){0,1}")),
                                o = (null === (t = r.match(a)) || void 0 === t ? void 0 : t[0]) || "";
                            We(!o || /\./.test(o) ? o : +o), o || Wt.trackFrontFailed("tranfer_zero_enter"), +o > +wt && Wt.trackFrontFailed("tranfer_more_than_max")
                        }), [d, Le, wt, Wt]),
                        Qt = (0, c.useCallback)((function() {
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_amountbox"
                                    }
                                })
                            }(ke)
                        }), [ke]),
                        Zt = (0, c.useCallback)((function() {
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_close"
                                    }
                                })
                            }(ke), r(!1), We(""), Wt.trackFrontFailed("user_leave")
                        }), [r, ke]),
                        Kt = (0, c.useCallback)((function() {
                            u(l), f(n), y(), l !== Nt && n !== Nt || (T(C), I(S))
                        }), [n, l, C, S]),
                        Yt = (0, c.useCallback)((function() {
                            ! function(e) {
                                e && e({
                                    action: "webClick",
                                    options: {
                                        elementId: "click_wallet_transfer_popup_amountmax"
                                    }
                                })
                            }(ke);
                            var e = Le(d) || {
                                assetDigit: 8
                            };
                            We(new P.A(wt).decimalPlaces((null === e || void 0 === e ? void 0 : e.assetDigit) || 8, P.A.ROUND_DOWN).toString()), 0 === +wt && Wt.trackFrontFailed("tranfer_max_amount_null")
                        }), [ke, Le, d, wt, Wt]),
                        Jt = (0, c.useMemo)((function() {
                            return !Oe || "FUTURE" !== l || "USDT" !== d && "FDUSD" !== d ? +He > +wt ? qe("validate-amountError") : "" : qe("validate-micaUserError")
                        }), [Oe, l, d, He, wt, qe]),
                        $t = (0, c.useMemo)((function() {
                            return mt.reduce((function(e, t) {
                                var r = t.accountType;
                                return (0, w._)(e).concat([r])
                            }), [])
                        }), [mt]),
                        Xt = (0, c.useCallback)((0, p._)(v().mark((function e() {
                            var t, n, a, o, i;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Dt, Mt(ke), Wt.trackConfirmStart(), e.prev = 3, Ke(!0), n = it ? b.CP : b.DJ, e.next = 8, n(t, !Ae);
                                    case 8:
                                        if (a = e.sent, o = a.success, i = a.message, Wt.trackAPIStatus(a), !te) {
                                            e.next = 14;
                                            break
                                        }
                                        return o ? setTimeout((function() {
                                            te(null, t, a), Ke(!1), r(!1), We(""), y(), !Ae && Ve(qe("notify-transferSuccessful"), {
                                                variant: "success",
                                                anchorOrigin: {
                                                    vertical: "top",
                                                    horizontal: "right"
                                                }
                                            })
                                        }), de) : (te(new Error(i), t, a), Ke(!1), We("")), e.abrupt("return");
                                    case 14:
                                        if (o) {
                                            e.next = 17;
                                            break
                                        }
                                        return Ke(!1), e.abrupt("return");
                                    case 17:
                                        setTimeout((function() {
                                            Ve(qe("notify-transferSuccessful"), {
                                                variant: "success",
                                                anchorOrigin: {
                                                    vertical: "top",
                                                    horizontal: "right"
                                                }
                                            }), y(), A && A(t), r(!1), We(""), Ke(!1)
                                        }), de), e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(3), Ke(!1);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 20]
                            ])
                        }))), [d, n, l, He, C, S, lt, ft, ke, it, Dt, Wt]),
                        er = (0, c.useMemo)((function() {
                            if (!lt || !ft) return !0;
                            if (!vt) return !1;
                            var e = vt.base,
                                t = vt.baseProps,
                                r = vt.quote,
                                n = vt.quoteProps;
                            return !!(d === e && t.transferInEnabled || d === r && n.transferInEnabled) || (d === e || d === r)
                        }), [lt, ft, d, vt]),
                        tr = !n || !l || !d || !+He || !!Jt || Ze || !er,
                        rr = (0, c.useRef)([]),
                        nr = (0, c.useRef)([]),
                        ar = (0, c.useMemo)((function() {
                            return _.map((function(e) {
                                return e.symbol
                            }))
                        }), [_]),
                        or = (0, i._)((0, c.useState)(0), 2)[1],
                        ir = (0, c.useCallback)((function() {
                            return or((function(e) {
                                return e + 1
                            }))
                        }), []);
                    (0, c.useEffect)((function() {
                        if (0 !== ar.length)
                            if (lt) {
                                var e, t;
                                if (n === Nt) rr.current = _, nr.current = [], I((function(t) {
                                    var r;
                                    return ar.indexOf(t) >= 0 ? t : null !== (e = null === (r = _[0]) || void 0 === r ? void 0 : r.symbol) && void 0 !== e ? e : "BTCBUSD"
                                })), T("");
                                if (l === Nt) rr.current = [], nr.current = _, T((function(e) {
                                    var r;
                                    return ar.indexOf(e) >= 0 ? e : null !== (t = null === (r = _[0]) || void 0 === r ? void 0 : r.symbol) && void 0 !== t ? t : "BTCBUSD"
                                })), I("");
                                ir()
                            } else if (ft) {
                            if (vt && !dt) {
                                var r = vt.base,
                                    a = vt.quote,
                                    o = vt.symbol,
                                    i = _.filter((function(e) {
                                        var t = e.base,
                                            n = e.quote,
                                            i = e.symbol;
                                        return ge([t, n], [r, a]) && o !== i
                                    })),
                                    c = i[0];
                                if (!c) return;
                                var s = c.base,
                                    u = c.quote,
                                    f = c.symbol,
                                    p = _.filter((function(e) {
                                        var t = e.base,
                                            r = e.quote,
                                            n = e.symbol;
                                        return ge([t, r], [s, u]) && f !== n
                                    }));
                                rr.current = i, nr.current = p, I(c.symbol)
                            }
                            if (!vt && dt) {
                                var d = dt.base,
                                    v = dt.quote,
                                    m = dt.symbol,
                                    b = _.filter((function(e) {
                                        var t = e.base,
                                            r = e.quote,
                                            n = e.symbol;
                                        return ge([t, r], [d, v]) && m !== n
                                    })),
                                    h = b[0];
                                if (!h) return;
                                var x = h.base,
                                    g = h.quote,
                                    y = h.symbol,
                                    w = _.filter((function(e) {
                                        var t = e.base,
                                            r = e.quote,
                                            n = e.symbol;
                                        return ge([t, r], [x, g]) && y !== n
                                    }));
                                rr.current = w, nr.current = b, T(h.symbol)
                            }
                            if (vt && dt) {
                                var E = vt.base,
                                    A = vt.quote,
                                    k = vt.symbol,
                                    C = dt.base,
                                    S = dt.quote,
                                    M = dt.symbol,
                                    N = _.filter((function(e) {
                                        var t = e.base,
                                            r = e.quote,
                                            n = e.symbol;
                                        return ge([t, r], [C, S]) && n !== M
                                    })),
                                    R = _.filter((function(e) {
                                        var t = e.base,
                                            r = e.quote,
                                            n = e.symbol;
                                        return ge([t, r], [E, A]) && n !== k
                                    }));
                                rr.current = R, nr.current = N
                            }
                            ir()
                        }
                    }), [lt, ft, n, l, dt, vt, ir, _, ar]), (0, c.useEffect)((function() {
                        n === zt && Lt()
                    }), [n]);
                    var cr = (0, c.useCallback)((function() {
                        return er ? null : s().createElement(N.A, {
                            lineHeight: "14px",
                            fontSize: "12px",
                            mt: "4px",
                            color: "error"
                        }, qe("coin-not-transfer"))
                    }), [er, qe]);
                    (0, c.useEffect)((function() {
                        var e = ht.some((function(e) {
                            return e.coin === d
                        }));
                        if (0 !== ht.length && !e)
                            if (ft) {
                                var t, r, n = null !== (r = null === (t = ht[0]) || void 0 === t ? void 0 : t.coin) && void 0 !== r ? r : "";
                                m(n)
                            } else m((ht[0] || {}).coin || ""), We("")
                    }), [d, ht, ft]);
                    var sr = function(e, t, r) {
                            var n = (0, i._)((0, c.useState)([]), 2),
                                a = n[0],
                                o = n[1];
                            return (0, c.useEffect)((function() {
                                function t() {
                                    return (t = (0, p._)(v().mark((function t() {
                                        var n;
                                        return v().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, $e(e, r);
                                                case 3:
                                                    n = t.sent, o(n), t.next = 9;
                                                    break;
                                                case 7:
                                                    t.prev = 7, t.t0 = t.catch(0);
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 7]
                                        ])
                                    })))).apply(this, arguments)
                                }! function() {
                                    t.apply(this, arguments)
                                }()
                            }), [e, r]), (0, c.useMemo)((function() {
                                var e = "0";
                                return Array.isArray(a) && a.forEach((function(r) {
                                    (null === r || void 0 === r ? void 0 : r.asset) !== t && (null === r || void 0 === r ? void 0 : r.assetName) !== t || (e = r.locked)
                                })), e
                            }), [a, t])
                        }(n, d, C),
                        ur = (0, c.useMemo)((function() {
                            if ((n === Nt || l === Nt) && (Array.isArray(ht) && ht.every((function(e) {
                                    var t;
                                    return 0 === Number(null === e || void 0 === e || null === (t = e.props) || void 0 === t ? void 0 : t.free)
                                })))) return "error\u2014available pair";
                            return "error-available-coin"
                        }), [ht, n, l]),
                        lr = (0, c.useCallback)((0, p._)(v().mark((function e() {
                            var t, r;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Ct();
                                    case 3:
                                        return t = e.sent.success, r = qe(t ? "collection-success" : "collection-fail"), t && (Ve(r, {
                                            variant: "success",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        }), Pt().then((function(e) {
                                            return Et(e)
                                        })), y(), Ne && Ne()), e.abrupt("return");
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), Ve(qe("collection-fail"), {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            }
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        }))), [Pt, Et, Ne]);
                    return s().createElement(ce.A, {
                        open: t,
                        title: s().createElement(N.A, null, qe("dialog-title")),
                        onCloseIconClick: Zt,
                        showTitleBottomLine: !1,
                        onMaskClick: Ie ? void 0 : Zt,
                        sx: {
                            width: ["100%", "484px", "484px"],
                            height: ["100%", "auto", "auto"]
                        },
                        contentSx: {
                            position: "relative",
                            height: "100%",
                            px: 0,
                            pt: 0,
                            scrollBehavior: "smooth",
                            pb: ["176px", "md"],
                            overflowY: ["auto", "auto", "auto"],
                            maxHeight: ["100vh", "calc(100vh - 80px)"]
                        },
                        closeIconProps: {
                            className: "AssetTransfer-close-icon"
                        },
                        dialogClassName: "AssetTransfer-StyledDialog"
                    }, s().createElement(Me, null), re && Re && s().createElement(_e, null), s().createElement(R.A, {
                        pt: "md"
                    }), s().createElement(N.A, {
                        sx: {
                            px: "md"
                        }
                    }, qe("dialog-tips")), n === Nt || l === Nt ? s().createElement(pt, {
                        t: qe,
                        revertFromAndTo: Kt,
                        from: n,
                        to: l,
                        allFrom: st,
                        allTo: ut,
                        handleFromChange: Ot,
                        activatdAccounts: $t,
                        handleToChange: Ut,
                        fromIsoSymbol: C,
                        setFromIsoSymbol: I,
                        toIsoSymbol: S,
                        setToIsoSymbol: T,
                        filterFromSymbols: rr.current,
                        filterToSymbols: nr.current
                    }) : s().createElement(kt, {
                        t: qe,
                        revertFromAndTo: Kt,
                        from: n,
                        to: l,
                        allFrom: st,
                        allTo: ut,
                        handleFromChange: Ot,
                        activatdAccounts: $t,
                        handleToChange: Ut
                    }), s().createElement(R.A, {
                        px: "md"
                    }, s().createElement(tt, {
                        label: qe("select-coin")
                    }, lt || ft ? s().createElement(s().Fragment, null, s().createElement(Je, {
                        value: d,
                        data: ht,
                        onChange: Vt,
                        btcFiatPrice: ve,
                        fiatSymbol: be,
                        priceIndex: me
                    }), cr()) : s().createElement(Qe, {
                        value: d,
                        data: ht,
                        onChange: Vt,
                        btcFiatPrice: ve,
                        fiatSymbol: be,
                        priceIndex: me
                    })), s().createElement(Ce, {
                        availableNone: qt,
                        availableNoneI18nKey: ur
                    }), s().createElement(tt, {
                        label: s().createElement(z.A, {
                            justifyContent: "space-between",
                            width: 1
                        }, s().createElement(N.A, null, qe("select-amount")), d && s().createElement(R.A, {
                            sx: {
                                fontSize: "14px",
                                color: "t.third",
                                lineHeight: "20px",
                                textAlign: "right"
                            }
                        }, n === zt && s().createElement(R.A, {
                            sx: {
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "flex-end"
                            }
                        }, s().createElement(N.A, {
                            as: "span",
                            sx: {
                                alignItems: "center",
                                color: "primary",
                                cursor: "pointer",
                                display: "flex"
                            },
                            onClick: lr
                        }, s().createElement(ne, {
                            size: 14,
                            sx: {
                                verticalAlign: "-3px"
                            }
                        }), qe("account-allocate", {
                            defaultValue: "Allocate Assets"
                        })), s().createElement(It.Ay, {
                            tip: qe("account-allocate-tips"),
                            arrow: !0,
                            enablePortal: !0
                        }, s().createElement(ae.A, {
                            size: 14,
                            sx: {
                                verticalAlign: "-3px"
                            }
                        }))), s().createElement(R.A, null, s().createElement(N.A, {
                            as: "span",
                            sx: {
                                color: "t.primary"
                            }
                        }, "".concat((0, D.ZV)(wt, 8), " ")), qe("label-available"), Rt.includes(n) && s().createElement(s().Fragment, null, " / ", s().createElement(N.A, {
                            as: "span",
                            sx: {
                                color: "t.primary"
                            }
                        }, "".concat((0, D.ZV)(sr, 8), " ")), qe("label-inorder", {
                            defaultValue: "in order"
                        }))), " "))
                    }, s().createElement(se.A, {
                        variant: "filled",
                        value: He,
                        defaultValue: He,
                        boxProps: {
                            fontSize: 1,
                            width: "100%",
                            height: "48px"
                        },
                        onChange: jt,
                        onClick: Qt,
                        error: !!Jt,
                        errorText: Jt,
                        autoComplete: "off",
                        suffix: s().createElement(z.A, {
                            mr: "xs",
                            alignItems: "center"
                        }, !!He && s().createElement(F.A, {
                            size: 16,
                            color: "t.placeholder",
                            sx: {
                                cursor: "pointer"
                            },
                            onClick: function() {
                                return We("")
                            }
                        }), s().createElement(N.A, {
                            onClick: Yt,
                            sx: {
                                fontSize: "16px",
                                color: "t.yellow",
                                lineHeight: "24px",
                                cursor: "pointer",
                                ml: "xs"
                            }
                        }, qe("action-max")))
                    })), n === zt && nt && s().createElement(z.A, {
                        sx: {
                            mt: "24px"
                        }
                    }, s().createElement(oe.A, {
                        icon: s().createElement(ae.A, {
                            size: 16,
                            color: "primary"
                        }),
                        message: qe("account-uni-desc-pm-negative"),
                        variant: "primary",
                        sz: "small"
                    })), (n === zt || l === zt) && s().createElement(z.A, {
                        alignItems: "start",
                        sx: {
                            mt: "24px",
                            color: "t.third"
                        }
                    }, "*", s().createElement(R.A, {
                        sx: {
                            color: "t.third",
                            fontSize: "12px",
                            lineHeight: "16px",
                            marginLeft: "6px",
                            flex: "1"
                        }
                    }, qe("account-uni-desc-pm"))), Te && s().createElement(z.A, {
                        alignItems: "start",
                        sx: {
                            padding: "16px 0 12px"
                        }
                    }, s().createElement(ae.A, {
                        size: 16,
                        color: "iconNormal"
                    }), s().createElement(R.A, {
                        sx: {
                            color: "t.third",
                            fontSize: "12px",
                            lineHeight: "16px",
                            marginLeft: "6px",
                            flex: "1"
                        }
                    }, Te)), s().createElement(ie.R, null, s().createElement(tt, {
                        mt: "0"
                    }, s().createElement(z.A, {
                        justifyContent: "flex-end"
                    }, s().createElement(B.A, {
                        variant: "default",
                        colorStyle: "flatprimary",
                        sz: "l",
                        onClick: Xt,
                        disabled: tr,
                        height: 40,
                        sx: {
                            width: "100%",
                            maxWidth: ["100%", "180px;"]
                        }
                    }, Ze ? s().createElement(Ft, null) : qe("action-confirm")))))), Xe && s().createElement(z.A, {
                        sx: {
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            bg: "black",
                            top: 0,
                            right: 0,
                            height: "100%",
                            width: "100%"
                        }
                    }, s().createElement(M.A, null)))
                };
            Dt.displayName = "TransferUI";
            const Pt = Dt;
            var Lt = function(e) {
                    Promise.all([(0, u.Wo)()]).then((function(t) {
                        var r = (0, i._)(t, 1)[0].map((function(e) {
                            var t = e.base.assetName + e.quote.assetName;
                            return (0, o._)((0, a._)({}, e), {
                                symbol: t,
                                transferOutBar: e.coeff.transferOutBar || "2",
                                base: e.base.assetName,
                                quote: e.quote.assetName,
                                baseProps: e.base,
                                quoteProps: e.quote
                            })
                        })).sort((function(e, t) {
                            return ye(Number(e.baseProps.free), Number(t.baseProps.free), 100) + ye(Number(e.quoteProps.free), Number(t.quoteProps.free), 10) + e.symbol.localeCompare(t.symbol)
                        }));
                        e(r)
                    }))
                },
                Ot = function(e) {
                    var t = e.children,
                        r = e.onTransferSuccess,
                        n = void 0 === r ? function() {} : r,
                        a = e.afterTransfer,
                        o = e.needMargin,
                        u = void 0 === o || o,
                        d = e.showMarginTip,
                        m = void 0 === d || d,
                        g = e.delay,
                        y = void 0 === g ? 1e3 : g,
                        w = e.needFuturesJointMargin,
                        E = void 0 !== w && w,
                        A = e.closeDefaultToast,
                        _ = void 0 !== A && A,
                        k = e.sendLog,
                        C = e.defaultLazyFetch,
                        I = void 0 !== C && C,
                        T = e.needChangeQuoteAsset,
                        M = void 0 !== T && T,
                        N = e.walletConfig,
                        R = e.limitCoinList,
                        z = e.customDesc,
                        B = e.onCollectionSuccess,
                        F = e.useUserBaseDetail,
                        D = e.useCreditModeInfo,
                        P = e.useAssets,
                        L = (0, l.eg)().userQuoteAsset,
                        O = (0, i._)((0, c.useState)(!1), 2),
                        U = O[0],
                        V = O[1],
                        q = (0, i._)((0, c.useState)(!1), 2),
                        G = q[0],
                        H = q[1],
                        W = (0, i._)((0, c.useState)(""), 2),
                        j = W[0],
                        Q = W[1],
                        Z = (0, i._)((0, c.useState)(""), 2),
                        K = Z[0],
                        Y = Z[1],
                        J = (0, i._)((0, c.useState)(""), 2),
                        $ = J[0],
                        X = J[1],
                        ee = (0, i._)((0, c.useState)([]), 2),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, i._)((0, c.useState)(""), 2),
                        ae = ne[0],
                        oe = ne[1],
                        ie = (0, i._)((0, c.useState)(""), 2),
                        ce = ie[0],
                        se = ie[1],
                        ue = (0, i._)((0, c.useState)(I), 2),
                        fe = ue[0],
                        pe = ue[1],
                        de = (0, i._)((0, c.useState)(!1), 2),
                        ve = de[0],
                        me = de[1],
                        be = (0, f.X)({
                            needBalanceDetail: !0,
                            quoteAsset: M ? L : "BTC"
                        }, {
                            needMargin: u,
                            lazyFetch: fe,
                            needChangeQuoteAsset: M
                        }),
                        he = be.data,
                        xe = be.loading,
                        ge = be.onRefresh,
                        ye = be.logoMap,
                        we = be.onSwitchQuoteAsset,
                        Ee = function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = "v2" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") ? x : b.Zo,
                                r = (0, h.s)((0, p._)(v().mark((function r() {
                                    var n;
                                    return v().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (e) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 2:
                                                return r.next = 4, t();
                                            case 4:
                                                return n = r.sent, r.abrupt("return", n);
                                            case 6:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                }))), [e], {
                                    value: []
                                });
                            return {
                                value: r.value,
                                loading: r.loading,
                                error: r.error
                            }
                        }(G, "v2"),
                        Ae = Ee.value,
                        _e = N || Ae,
                        ke = (0, c.useCallback)((function(e) {
                            var t = e.from,
                                r = e.to,
                                n = e.defaultCoin,
                                a = e.defaultIsoSymbol,
                                o = e.fixWalletType,
                                i = void 0 !== o && o,
                                c = e.disableCloseOnMaskClick,
                                s = void 0 !== c && c;
                            t && Q(t), r && Y(r), n && X(n), a && se(a), H(!0), V(i), me(s), fe && Lt(re)
                        }), [fe]);
                    (0, c.useEffect)((function() {
                        !0 === G && pe(!1)
                    }), [G]), (0, c.useEffect)((function() {
                        u && !1 === fe && Lt(re)
                    }), [fe, u]);
                    var Ce = (0, i._)(Fe(G), 3),
                        Ie = Ce[0],
                        Se = Ce[1],
                        Te = Ce[2],
                        Me = (0, c.useCallback)((function() {
                            ge(), u && Lt(re)
                        }), [u, ge, re]);
                    return s().createElement(le.R.Provider, {
                        value: {
                            open: G,
                            setOpen: H,
                            from: j,
                            setFrom: Q,
                            to: K,
                            setTo: Y,
                            coin: $,
                            setCoin: X,
                            loadingWalletsBalance: xe,
                            walletsBalance: he,
                            walletConfig: _e,
                            launchTransfer: ke,
                            freshBalance: Me,
                            onTransferSuccess: n,
                            afterTransfer: a,
                            isolatedPairs: te,
                            toIsoSymbol: ce,
                            setToIsoSymbol: se,
                            fromIsoSymbol: ae,
                            setFromIsoSymbol: oe,
                            logoMap: ye,
                            fixWalletType: U,
                            needMargin: u,
                            needFuturesJointMargin: E,
                            delay: y,
                            btcFiatPrice: Ie,
                            priceIndex: Te,
                            fiatSymbol: Se,
                            closeDefaultToast: _,
                            sendLog: k,
                            disableCloseOnMaskClick: ve,
                            onSwitchQuoteAsset: we,
                            limitCoinList: R,
                            customDesc: z,
                            onCollectionSuccess: B,
                            showMarginTip: m,
                            useUserBaseDetail: F,
                            useCreditModeInfo: D,
                            useAssets: P
                        }
                    }, s().createElement(S, null, s().createElement(Pt, null)), t)
                }
        }
    }
]);