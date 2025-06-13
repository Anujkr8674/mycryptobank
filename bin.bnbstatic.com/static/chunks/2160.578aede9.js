(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2160], {
        wPB1: (e, n, t) => {
            "use strict";
            t.d(n, {
                g: () => N
            });
            var r = t("b6CO"),
                i = t("hrAD"),
                a = t("qoEP"),
                o = t("KrVi"),
                u = t("DTvD"),
                s = t.n(u),
                l = t("otdC"),
                c = t("S+0I"),
                d = t("mguP"),
                f = t("66mo"),
                g = t.n(f),
                p = t("7fqa"),
                v = t("1CC6"),
                m = function() {
                    var e = (0, c._)(g().mark((function e() {
                        var n;
                        return g().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 6;
                                    break;
                                case 4:
                                    return n = e.sent, e.abrupt("return", n["bnc-uuid"]);
                                case 6:
                                    return e.abrupt("return", v.U.read("bnc-uuid") || "");
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                b = "undefined" === typeof window,
                h = t("+K15"),
                y = t("VLTf"),
                k = t.n(y),
                T = t("RrWx"),
                w = t.n(T),
                E = function(e) {
                    var n = e.key,
                        t = e.data,
                        r = e.afterSave,
                        i = h.IG.getItem(n, {}).result;
                    k()(t, i) || (h.IG.setItem(n, t), r && r())
                },
                _ = function(e) {
                    var n, t = h.IG.getItem(e, {});
                    if (n = t, w()(n) && w()(n.result) && "boolean" === typeof n.isLoading) return t;
                    return {
                        result: {},
                        isLoading: !0
                    }
                },
                S = function(e, n) {
                    var t = e.THEMIS_ADDRESS,
                        r = e.THEMIS_AUTH_HEADER,
                        i = e.THEMIS_ENV,
                        a = e.uid,
                        o = e.trace_id,
                        s = e.strategy_ids,
                        l = e.os_version,
                        f = e.os,
                        v = e.app_version,
                        h = e.country,
                        y = n.lazyFetch,
                        k = void 0 !== y && y,
                        T = n.enabled,
                        w = void 0 === T || T,
                        S = n.enableLocalCache,
                        I = void 0 !== S && S,
                        N = n.app,
                        V = (0, d._)((0, u.useState)(null), 2),
                        x = V[0],
                        P = V[1],
                        M = (0, d._)((0, u.useState)(!1), 2),
                        A = M[0],
                        R = M[1],
                        F = "".concat(N, "_themis_gates_cache"),
                        O = "".concat(N, "_themis_experiments_cache");
                    (0, u.useEffect)((function() {
                        var e = function() {
                            var e = (0, c._)(g().mark((function e() {
                                var n, u;
                                return g().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (w && (!k || A)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, m();
                                        case 4:
                                            return n = e.sent, e.next = 7, p.Ay.initExpAndFg({
                                                trace_id: o || n,
                                                uid: a || void 0,
                                                strategy_ids: s,
                                                os_version: l,
                                                os: f,
                                                app_version: v,
                                                country: h,
                                                env: i
                                            }, {
                                                authHeader: r,
                                                baseUrl: t
                                            });
                                        case 7:
                                            u = e.sent, P(u);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [w, t, r, i, a, o, s, l, f, v, h, A]);
                    var C = function(e) {
                            var n = e.themisHelper,
                                t = e.enableLocalCache,
                                r = e.key,
                                i = (0, d._)((0, u.useState)((function() {
                                    return t && !b ? _(r) : {
                                        result: {},
                                        isLoading: !0
                                    }
                                })), 2),
                                a = i[0],
                                o = i[1];
                            return (0, u.useEffect)((function() {
                                if (n) {
                                    var e = {
                                            result: n.getStrategiesConfig().universals || {},
                                            isLoading: !1
                                        },
                                        i = function() {
                                            return o(e)
                                        };
                                    t ? b || E({
                                        key: r,
                                        data: e,
                                        afterSave: i
                                    }) : i()
                                }
                            }), [n]), {
                                experiments: a
                            }
                        }({
                            themisHelper: x,
                            enableLocalCache: I,
                            key: O
                        }).experiments,
                        z = function(e) {
                            var n = e.themisHelper,
                                t = e.enableLocalCache,
                                r = e.key,
                                i = (0, d._)((0, u.useState)((function() {
                                    return t && !b ? _(r) : {
                                        result: {},
                                        isLoading: !0
                                    }
                                })), 2),
                                a = i[0],
                                o = i[1];
                            return (0, u.useEffect)((function() {
                                function e() {
                                    return (e = (0, c._)(g().mark((function e() {
                                        var i, a, u;
                                        return g().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, n.getFeatureGateResults();
                                                case 2:
                                                    i = e.sent, a = {
                                                        result: i || {},
                                                        isLoading: !1
                                                    }, u = function() {
                                                        return o(a)
                                                    }, t ? b || E({
                                                        key: r,
                                                        data: a,
                                                        afterSave: u
                                                    }) : u();
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).apply(this, arguments)
                                }
                                n && function() {
                                    e.apply(this, arguments)
                                }()
                            }), [n]), {
                                featureGates: a
                            }
                        }({
                            themisHelper: x,
                            enableLocalCache: I,
                            key: F
                        }).featureGates,
                        J = (0, u.useCallback)((function() {
                            R(!0)
                        }), []);
                    return (0, u.useMemo)((function() {
                        return {
                            experiments: C,
                            featureGates: z,
                            lazyFetch: k,
                            fetch: J
                        }
                    }), [C, z, k, J])
                },
                I = function(e) {
                    var n = e.children,
                        t = (0, o._)(e, ["children"]),
                        r = t.app,
                        i = t.themisConfig,
                        a = t.lazyFetch,
                        u = t.enabled,
                        c = t.enableLocalCache,
                        d = S(i, {
                            lazyFetch: a,
                            enabled: u,
                            app: r,
                            enableLocalCache: c
                        }),
                        f = (0, l.e)(r);
                    return s().createElement(f.Provider, {
                        value: d
                    }, n)
                };
            var N = (0, u.memo)((function(e) {
                var n = e.children,
                    t = (0, o._)(e, ["children"]),
                    l = (0, u.useMemo)((function() {
                        return function(e) {
                            return function(n) {
                                var t = n.children,
                                    u = (0, o._)(n, ["children"]);
                                return s().createElement(s().Fragment, null, e.reduceRight((function(e, n) {
                                    var t = u.THEMIS_AUTH_HEADER_MAP,
                                        l = u.themisConfig,
                                        c = u.lazyFetch,
                                        d = void 0 !== c && c,
                                        f = (0, o._)(u, ["THEMIS_AUTH_HEADER_MAP", "themisConfig", "lazyFetch"]),
                                        g = t[n];
                                    if (!g) return e;
                                    var p = (0, a._)((0, i._)({}, f), {
                                        lazyFetch: d,
                                        app: n,
                                        themisConfig: (0, a._)((0, i._)({}, l), {
                                            THEMIS_AUTH_HEADER: g
                                        })
                                    });
                                    return s().createElement(I, (0, r._)({}, p), e)
                                }), t))
                            }
                        }(Object.keys(t.THEMIS_AUTH_HEADER_MAP))
                    }), [t.THEMIS_AUTH_HEADER_MAP]);
                return s().createElement(l, (0, r._)({}, t), n)
            }))
        },
        "379/": (e, n, t) => {
            "use strict";
            t.d(n, {
                Ay: () => _,
                P5: () => E
            });
            var r = t("Bkzn"),
                i = t("hrAD"),
                a = t("DtWm"),
                o = t("0DEq"),
                u = t("m0Iw"),
                s = t("jXbR");
            var l = t("g77m"),
                c = t.n(l),
                d = t("S+0I"),
                f = t("66mo"),
                g = t.n(f),
                p = t("VA12"),
                v = t("NPvb").hp,
                m = "/bapi/fe/usd/login",
                b = "/bapi/fe/usd/report/upload",
                h = function() {
                    function e(n, t) {
                        (0, r._)(this, e), this.appid = n, this.host = t || "https://api.saasexch.com"
                    }
                    var n = e.prototype;
                    return n.login = function() {
                        var e = this;
                        return (0, d._)(g().mark((function n() {
                            var t, r, i;
                            return g().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!e.appid) {
                                            n.next = 7;
                                            break
                                        }
                                        return t = e.host ? "".concat(e.host).concat(m, "?appid=").concat(e.appid) : "".concat(m, "?appid=").concat(e.appid), n.next = 4, (0, p.get)(t);
                                    case 4:
                                        r = n.sent, i = r.data.token, e.token = i;
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, n.uploadLog = function(e) {
                        var n = this;
                        return (0, d._)(g().mark((function t() {
                            var r, i;
                            return g().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, n.token) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, n.login();
                                    case 4:
                                        return r = "".concat(n.appid, ":").concat(n.token), i = n.host ? "".concat(n.host).concat(b) : b, t.next = 8, (0, p.post)(i, e, {
                                            headers: {
                                                Authorization: "Basic ".concat((a = r, "undefined" !== typeof btoa ? btoa(a) : v && v.from ? v.from(a).toString("base64") : a))
                                            }
                                        });
                                    case 8:
                                        t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(0), console.log("upload log error", t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                                var a
                            }), t, null, [
                                [0, 10]
                            ])
                        })))()
                    }, e
                }(),
                y = t("+K15");
            const k = function e(n, t) {
                var l = this;
                (0, r._)(this, e), this.addData = function(e) {
                    if ("undefined" !== typeof window) {
                        var n, t = e.ns,
                            r = e.key,
                            i = r.split(":") || [];
                        if (i.length > 1) {
                            var c = (n = i, (0, a._)(n) || (0, o._)(n) || (0, s._)(n) || (0, u._)()),
                                d = c[0];
                            r = c.slice(1).join(":"), t = d
                        }
                        l.data[t] || (l.data[t] = {}), l.data[t][r] || (l.data[t][r] = 1), l.pureCheck()
                    }
                }, this._pureCheck = function() {
                    l.logger(), l.clearData()
                }, this.logger = function() {
                    var e = l,
                        n = l.appId ? "_".concat(l.appId) : "",
                        t = "".concat("i18nKeyLog").concat(n),
                        r = y.IG.getItem(t) || {};
                    Object.keys(r).forEach((function(n) {
                        e.data[n] && (r[n] = (0, i._)({}, r[n], e.data[n]))
                    })), y.IG.setItem(t, (0, i._)({}, l.data, r)), l.reported || (l.reportI18nKeys(t), l.reported = !0)
                }, this.clearData = function() {
                    l.data = {}
                }, this.reportI18nKeys = function(e) {
                    try {
                        var n = l;
                        setTimeout((function() {
                            var t, r = y.IG.getItem(e),
                                i = {};
                            r && Object.keys(r).forEach((function(e) {
                                i[e] = Object.keys(null === r || void 0 === r ? void 0 : r[e])
                            })), n.translateUploader.uploadLog({
                                elementId: n.appId || "binance_use_i18n_key",
                                url: (null === window || void 0 === window || null === (t = window.location) || void 0 === t ? void 0 : t.href) || "",
                                extraInfo: i
                            }), y.IG.setItem(e, {})
                        }), 1e3)
                    } catch (t) {}
                }, this.data = {}, this.reported = !1, this.appId = t, this.translateUploader = function(e, n) {
                    return new h(n || "translate_data", e)
                }(n, t), this.pureCheck = c()(this._pureCheck, 1e3)
            };
            var T, w = function() {
                    function e() {
                        (0, r._)(this, e), this.type = "postProcessor", this.name = "i18n-clean-processor"
                    }
                    return e.prototype.process = function(e, n, t) {
                        return T && T.addData({
                            ns: t.ns,
                            key: n[0]
                        }), e
                    }, e
                }(),
                E = function(e, n) {
                    return T = new k(e, n)
                };
            const _ = new w
        },
        jCkx: (e, n, t) => {
            "use strict";
            t.d(n, {
                Lu: () => u
            });
            var r = t("S+0I"),
                i = t("66mo"),
                a = t.n(i),
                o = t("biWu"),
                u = function() {
                    var e = (0, r._)(a().mark((function e(n) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, o.$s)()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, o.lZ)({
                                        sourceUrl: n.sourceUrl,
                                        version: n.version || "V1",
                                        isHttp: n.isHttp,
                                        getWsToken: n.getWsToken,
                                        getSessionInfo: function(e) {
                                            return n.getSessionInfo().then((function(n) {
                                                return n[e]
                                            }))
                                        },
                                        track: n.track || function(e, n) {
                                            console.log(e + n.toString())
                                        },
                                        clientType: n.clientType
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        zPCU: (e, n, t) => {
            "use strict";
            t.d(n, {
                E: () => a
            });
            var r = t("EnBZ"),
                i = t("ey8F");
            var a = {
                key: "roamingWebAckPushMsg",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return void 0 !== e.userId && 0 !== e.userId && n.uint32(8).int64(e.userId), void 0 !== e.roamingFlowId && "" !== e.roamingFlowId && n.uint32(18).string(e.roamingFlowId), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, u = {
                            userId: 0,
                            roamingFlowId: ""
                        }; t.pos < a;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                if (8 !== s) break;
                                u.userId = o(t.int64());
                                continue;
                            case 2:
                                if (18 !== s) break;
                                u.roamingFlowId = t.string();
                                continue
                        }
                        if (4 === (7 & s) || 0 === s) break;
                        t.skip(7 & s)
                    }
                    return u
                },
                fromJSON: function(e) {
                    return {
                        userId: u(e.userId) ? globalThis.Number(e.userId) : 0,
                        roamingFlowId: u(e.roamingFlowId) ? globalThis.String(e.roamingFlowId) : ""
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return void 0 !== e.userId && 0 !== e.userId && (n.userId = Math.round(e.userId)), void 0 !== e.roamingFlowId && "" !== e.roamingFlowId && (n.roamingFlowId = e.roamingFlowId), n
                },
                create: function(e) {
                    return a.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r = {
                        userId: 0,
                        roamingFlowId: ""
                    };
                    return r.userId = null !== (n = e.userId) && void 0 !== n ? n : 0, r.roamingFlowId = null !== (t = e.roamingFlowId) && void 0 !== t ? t : "", r
                }
            };

            function o(e) {
                var n = globalThis.Number(e.toString());
                if (n > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (n < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return n
            }

            function u(e) {
                return null !== e && void 0 !== e
            }
        },
        "1luf": (e, n, t) => {
            "use strict";
            t.d(n, {
                ip: () => a
            });
            var r = t("EnBZ"),
                i = t("ey8F");
            var a = {
                key: "assetRateMsg",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    0 !== e.time && n.uint32(8).int64(e.time), "" !== e.quote && n.uint32(18).string(e.quote), 0 !== e.scale && n.uint32(24).int32(e.scale);
                    var t = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var u, s = e.rates[Symbol.iterator](); !(t = (u = s.next()).done); t = !0) {
                            var l = u.value;
                            o.encode(l, n.uint32(34).fork()).join()
                        }
                    } catch (c) {
                        r = !0, a = c
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, s = {
                            time: 0,
                            quote: "",
                            scale: 0,
                            rates: []
                        }; t.pos < a;) {
                        var l = t.uint32();
                        switch (l >>> 3) {
                            case 1:
                                if (8 !== l) break;
                                s.time = u(t.int64());
                                continue;
                            case 2:
                                if (18 !== l) break;
                                s.quote = t.string();
                                continue;
                            case 3:
                                if (24 !== l) break;
                                s.scale = t.int32();
                                continue;
                            case 4:
                                if (34 !== l) break;
                                s.rates.push(o.decode(t, t.uint32()));
                                continue
                        }
                        if (4 === (7 & l) || 0 === l) break;
                        t.skip(7 & l)
                    }
                    return s
                },
                fromJSON: function(e) {
                    return {
                        time: s(e.time) ? globalThis.Number(e.time) : 0,
                        quote: s(e.quote) ? globalThis.String(e.quote) : "",
                        scale: s(e.scale) ? globalThis.Number(e.scale) : 0,
                        rates: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.rates) ? e.rates.map((function(e) {
                            return o.fromJSON(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var n, t = {};
                    return 0 !== e.time && (t.time = Math.round(e.time)), "" !== e.quote && (t.quote = e.quote), 0 !== e.scale && (t.scale = Math.round(e.scale)), (null === (n = e.rates) || void 0 === n ? void 0 : n.length) && (t.rates = e.rates.map((function(e) {
                        return o.toJSON(e)
                    }))), t
                },
                create: function(e) {
                    return a.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r, i, a = {
                        time: 0,
                        quote: "",
                        scale: 0,
                        rates: []
                    };
                    return a.time = null !== (t = e.time) && void 0 !== t ? t : 0, a.quote = null !== (r = e.quote) && void 0 !== r ? r : "", a.scale = null !== (i = e.scale) && void 0 !== i ? i : 0, a.rates = (null === (n = e.rates) || void 0 === n ? void 0 : n.map((function(e) {
                        return o.fromPartial(e)
                    }))) || [], a
                }
            };
            var o = {
                key: "assetRateMsg_AssetRateMessage",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return "" !== e.base && n.uint32(10).string(e.base), 0 !== e.rate && n.uint32(16).int64(e.rate), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, o = {
                            base: "",
                            rate: 0
                        }; t.pos < a;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                if (10 !== s) break;
                                o.base = t.string();
                                continue;
                            case 2:
                                if (16 !== s) break;
                                o.rate = u(t.int64());
                                continue
                        }
                        if (4 === (7 & s) || 0 === s) break;
                        t.skip(7 & s)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        base: s(e.base) ? globalThis.String(e.base) : "",
                        rate: s(e.rate) ? globalThis.Number(e.rate) : 0
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return "" !== e.base && (n.base = e.base), 0 !== e.rate && (n.rate = Math.round(e.rate)), n
                },
                create: function(e) {
                    return o.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r = {
                        base: "",
                        rate: 0
                    };
                    return r.base = null !== (n = e.base) && void 0 !== n ? n : "", r.rate = null !== (t = e.rate) && void 0 !== t ? t : 0, r
                }
            };

            function u(e) {
                var n = globalThis.Number(e.toString());
                if (n > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (n < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return n
            }

            function s(e) {
                return null !== e && void 0 !== e
            }
        },
        D6JS: (e, n, t) => {
            "use strict";
            t.d(n, {
                pF: () => a
            });
            var r = t("EnBZ"),
                i = t("ey8F");
            var a = {
                key: "fundingBalanceMsg",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI,
                        t = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var u, s = e.b[Symbol.iterator](); !(t = (u = s.next()).done); t = !0) {
                            var l = u.value;
                            o.encode(l, n.uint32(10).fork()).join()
                        }
                    } catch (c) {
                        r = !0, a = c
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, u = {
                            b: []
                        }; t.pos < a;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                if (10 !== s) break;
                                u.b.push(o.decode(t, t.uint32()));
                                continue
                        }
                        if (4 === (7 & s) || 0 === s) break;
                        t.skip(7 & s)
                    }
                    return u
                },
                fromJSON: function(e) {
                    return {
                        b: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.b) ? e.b.map((function(e) {
                            return o.fromJSON(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var n, t = {};
                    return (null === (n = e.b) || void 0 === n ? void 0 : n.length) && (t.b = e.b.map((function(e) {
                        return o.toJSON(e)
                    }))), t
                },
                create: function(e) {
                    return a.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t = {
                        b: []
                    };
                    return t.b = (null === (n = e.b) || void 0 === n ? void 0 : n.map((function(e) {
                        return o.fromPartial(e)
                    }))) || [], t
                }
            };
            var o = {
                key: "fundingBalanceMsg_B",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return "" !== e.a && n.uint32(10).string(e.a), "" !== e.f && n.uint32(18).string(e.f), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, o = {
                            a: "",
                            f: ""
                        }; t.pos < a;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (10 !== u) break;
                                o.a = t.string();
                                continue;
                            case 2:
                                if (18 !== u) break;
                                o.f = t.string();
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        a: u(e.a) ? globalThis.String(e.a) : "",
                        f: u(e.f) ? globalThis.String(e.f) : ""
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return "" !== e.a && (n.a = e.a), "" !== e.f && (n.f = e.f), n
                },
                create: function(e) {
                    return o.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r = {
                        a: "",
                        f: ""
                    };
                    return r.a = null !== (n = e.a) && void 0 !== n ? n : "", r.f = null !== (t = e.f) && void 0 !== t ? t : "", r
                }
            };

            function u(e) {
                return null !== e && void 0 !== e
            }
        },
        agyp: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => a
            });
            var r = t("EnBZ"),
                i = t("ey8F");
            var a = {
                key: "balanceValuationReq",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return void 0 !== e.asset && "" !== e.asset && n.uint32(10).string(e.asset), void 0 !== e.needBtcValuation && !1 !== e.needBtcValuation && n.uint32(16).bool(e.needBtcValuation), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, o = {
                            asset: "",
                            needBtcValuation: !1
                        }; t.pos < a;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (10 !== u) break;
                                o.asset = t.string();
                                continue;
                            case 2:
                                if (16 !== u) break;
                                o.needBtcValuation = t.bool();
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        asset: o(e.asset) ? globalThis.String(e.asset) : "",
                        needBtcValuation: !!o(e.needBtcValuation) && globalThis.Boolean(e.needBtcValuation)
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return void 0 !== e.asset && "" !== e.asset && (n.asset = e.asset), void 0 !== e.needBtcValuation && !1 !== e.needBtcValuation && (n.needBtcValuation = e.needBtcValuation), n
                },
                create: function(e) {
                    return a.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r = {
                        asset: "",
                        needBtcValuation: !1
                    };
                    return r.asset = null !== (n = e.asset) && void 0 !== n ? n : "", r.needBtcValuation = null !== (t = e.needBtcValuation) && void 0 !== t && t, r
                }
            };

            function o(e) {
                return null !== e && void 0 !== e
            }
        },
        K81M: (e, n, t) => {
            "use strict";
            t.d(n, {
                Q1: () => a
            });
            var r = t("EnBZ"),
                i = t("ey8F");
            var a = {
                key: "balanceValuationResp",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI,
                        t = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var u, s = e.balanceValuation[Symbol.iterator](); !(t = (u = s.next()).done); t = !0) {
                            var l = u.value;
                            o.encode(l, n.uint32(10).fork()).join()
                        }
                    } catch (c) {
                        r = !0, a = c
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, u = {
                            balanceValuation: []
                        }; t.pos < a;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                if (10 !== s) break;
                                u.balanceValuation.push(o.decode(t, t.uint32()));
                                continue
                        }
                        if (4 === (7 & s) || 0 === s) break;
                        t.skip(7 & s)
                    }
                    return u
                },
                fromJSON: function(e) {
                    return {
                        balanceValuation: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.balanceValuation) ? e.balanceValuation.map((function(e) {
                            return o.fromJSON(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var n, t = {};
                    return (null === (n = e.balanceValuation) || void 0 === n ? void 0 : n.length) && (t.balanceValuation = e.balanceValuation.map((function(e) {
                        return o.toJSON(e)
                    }))), t
                },
                create: function(e) {
                    return a.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t = {
                        balanceValuation: []
                    };
                    return t.balanceValuation = (null === (n = e.balanceValuation) || void 0 === n ? void 0 : n.map((function(e) {
                        return o.fromPartial(e)
                    }))) || [], t
                }
            };
            var o = {
                key: "balanceValuationResp_BalanceValuation",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return "" !== e.asset && n.uint32(10).string(e.asset), void 0 !== e.assetName && "" !== e.assetName && n.uint32(18).string(e.assetName), "" !== e.free && n.uint32(26).string(e.free), "" !== e.locked && n.uint32(34).string(e.locked), "" !== e.freeze && n.uint32(42).string(e.freeze), "" !== e.withdrawing && n.uint32(50).string(e.withdrawing), 0 !== e.test && n.uint32(56).int32(e.test), "" !== e.plateType && n.uint32(66).string(e.plateType), void 0 !== e.btcValuation && "" !== e.btcValuation && n.uint32(74).string(e.btcValuation), void 0 !== e.ipoable && "" !== e.ipoable && n.uint32(82).string(e.ipoable), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, i.V5) ? e : new i.V5(e), a = void 0 === n ? t.len : t.pos + n, o = {
                            asset: "",
                            assetName: "",
                            free: "",
                            locked: "",
                            freeze: "",
                            withdrawing: "",
                            test: 0,
                            plateType: "",
                            btcValuation: "",
                            ipoable: ""
                        }; t.pos < a;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (10 !== u) break;
                                o.asset = t.string();
                                continue;
                            case 2:
                                if (18 !== u) break;
                                o.assetName = t.string();
                                continue;
                            case 3:
                                if (26 !== u) break;
                                o.free = t.string();
                                continue;
                            case 4:
                                if (34 !== u) break;
                                o.locked = t.string();
                                continue;
                            case 5:
                                if (42 !== u) break;
                                o.freeze = t.string();
                                continue;
                            case 6:
                                if (50 !== u) break;
                                o.withdrawing = t.string();
                                continue;
                            case 7:
                                if (56 !== u) break;
                                o.test = t.int32();
                                continue;
                            case 8:
                                if (66 !== u) break;
                                o.plateType = t.string();
                                continue;
                            case 9:
                                if (74 !== u) break;
                                o.btcValuation = t.string();
                                continue;
                            case 10:
                                if (82 !== u) break;
                                o.ipoable = t.string();
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        asset: u(e.asset) ? globalThis.String(e.asset) : "",
                        assetName: u(e.assetName) ? globalThis.String(e.assetName) : "",
                        free: u(e.free) ? globalThis.String(e.free) : "",
                        locked: u(e.locked) ? globalThis.String(e.locked) : "",
                        freeze: u(e.freeze) ? globalThis.String(e.freeze) : "",
                        withdrawing: u(e.withdrawing) ? globalThis.String(e.withdrawing) : "",
                        test: u(e.test) ? globalThis.Number(e.test) : 0,
                        plateType: u(e.plateType) ? globalThis.String(e.plateType) : "",
                        btcValuation: u(e.btcValuation) ? globalThis.String(e.btcValuation) : "",
                        ipoable: u(e.ipoable) ? globalThis.String(e.ipoable) : ""
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return "" !== e.asset && (n.asset = e.asset), void 0 !== e.assetName && "" !== e.assetName && (n.assetName = e.assetName), "" !== e.free && (n.free = e.free), "" !== e.locked && (n.locked = e.locked), "" !== e.freeze && (n.freeze = e.freeze), "" !== e.withdrawing && (n.withdrawing = e.withdrawing), 0 !== e.test && (n.test = Math.round(e.test)), "" !== e.plateType && (n.plateType = e.plateType), void 0 !== e.btcValuation && "" !== e.btcValuation && (n.btcValuation = e.btcValuation), void 0 !== e.ipoable && "" !== e.ipoable && (n.ipoable = e.ipoable), n
                },
                create: function(e) {
                    return o.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r, i, a, o, u, s, l, c, d = {
                        asset: "",
                        assetName: "",
                        free: "",
                        locked: "",
                        freeze: "",
                        withdrawing: "",
                        test: 0,
                        plateType: "",
                        btcValuation: "",
                        ipoable: ""
                    };
                    return d.asset = null !== (n = e.asset) && void 0 !== n ? n : "", d.assetName = null !== (t = e.assetName) && void 0 !== t ? t : "", d.free = null !== (r = e.free) && void 0 !== r ? r : "", d.locked = null !== (i = e.locked) && void 0 !== i ? i : "", d.freeze = null !== (a = e.freeze) && void 0 !== a ? a : "", d.withdrawing = null !== (o = e.withdrawing) && void 0 !== o ? o : "", d.test = null !== (u = e.test) && void 0 !== u ? u : 0, d.plateType = null !== (s = e.plateType) && void 0 !== s ? s : "", d.btcValuation = null !== (l = e.btcValuation) && void 0 !== l ? l : "", d.ipoable = null !== (c = e.ipoable) && void 0 !== c ? c : "", d
                }
            };

            function u(e) {
                return null !== e && void 0 !== e
            }
        },
        KfOe: (e, n, t) => {
            "use strict";
            t.d(n, {
                ud: () => o
            });
            var r = t("EnBZ"),
                i = t("mguP"),
                a = t("ey8F");
            var o = {
                key: "emergencyBroadcastMsg",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.emergencyMessage[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                            var l = o.value;
                            s.encode(l, n.uint32(10).fork()).join()
                        }
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            t || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, a.V5) ? e : new a.V5(e), i = void 0 === n ? t.len : t.pos + n, o = {
                            emergencyMessage: []
                        }; t.pos < i;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (10 !== u) break;
                                o.emergencyMessage.push(s.decode(t, t.uint32()));
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        emergencyMessage: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.emergencyMessage) ? e.emergencyMessage.map((function(e) {
                            return s.fromJSON(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var n, t = {};
                    return (null === (n = e.emergencyMessage) || void 0 === n ? void 0 : n.length) && (t.emergencyMessage = e.emergencyMessage.map((function(e) {
                        return s.toJSON(e)
                    }))), t
                },
                create: function(e) {
                    return o.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t = {
                        emergencyMessage: []
                    };
                    return t.emergencyMessage = (null === (n = e.emergencyMessage) || void 0 === n ? void 0 : n.map((function(e) {
                        return s.fromPartial(e)
                    }))) || [], t
                }
            };
            var u = {
                key: "tradingPairsMsg",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.tradingPair[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                            var s = o.value;
                            n.uint32(10).string(s)
                        }
                    } catch (l) {
                        r = !0, i = l
                    } finally {
                        try {
                            t || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, a.V5) ? e : new a.V5(e), i = void 0 === n ? t.len : t.pos + n, o = {
                            tradingPair: []
                        }; t.pos < i;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (10 !== u) break;
                                o.tradingPair.push(t.string());
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        tradingPair: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.tradingPair) ? e.tradingPair.map((function(e) {
                            return globalThis.String(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var n, t = {};
                    return (null === (n = e.tradingPair) || void 0 === n ? void 0 : n.length) && (t.tradingPair = e.tradingPair), t
                },
                create: function(e) {
                    return u.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t = {
                        tradingPair: []
                    };
                    return t.tradingPair = (null === (n = e.tradingPair) || void 0 === n ? void 0 : n.map((function(e) {
                        return e
                    }))) || [], t
                }
            };
            var s = {
                key: "emergencyMessage",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                    0 !== e.id && n.uint32(8).int64(e.id), "" !== e.title && n.uint32(18).string(e.title), void 0 !== e.url && "" !== e.url && n.uint32(26).string(e.url), 0 !== e.time && n.uint32(32).int64(e.time), void 0 !== e.lang && "" !== e.lang && n.uint32(42).string(e.lang), void 0 !== e.isTop && !1 !== e.isTop && n.uint32(48).bool(e.isTop), !1 !== e.isEmergency && n.uint32(56).bool(e.isEmergency), void 0 !== e.detail && "" !== e.detail && n.uint32(66).string(e.detail), void 0 !== e.type && "" !== e.type && n.uint32(74).string(e.type), void 0 !== e.picUrl && "" !== e.picUrl && n.uint32(82).string(e.picUrl), void 0 !== e.pair && "" !== e.pair && n.uint32(90).string(e.pair), void 0 !== e.endTime && 0 !== e.endTime && n.uint32(96).int64(e.endTime), void 0 !== e.code && "" !== e.code && n.uint32(106).string(e.code), void 0 !== e.actionType && "" !== e.actionType && n.uint32(114).string(e.actionType);
                    var t = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var u, s = e.scope[Symbol.iterator](); !(t = (u = s.next()).done); t = !0) {
                            var c = u.value;
                            n.uint32(122).string(c)
                        }
                    } catch (d) {
                        r = !0, o = d
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return Object.entries(e.tradingPairs).forEach((function(e) {
                        var t = (0, i._)(e, 2),
                            r = t[0],
                            a = t[1];
                        l.encode({
                            key: r,
                            value: a
                        }, n.uint32(130).fork()).join()
                    })), void 0 !== e.startTime && 0 !== e.startTime && n.uint32(136).int64(e.startTime), void 0 !== e.forcedEndTime && 0 !== e.forcedEndTime && n.uint32(144).int64(e.forcedEndTime), void 0 !== e.path && "" !== e.path && n.uint32(154).string(e.path), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, a.V5) ? e : new a.V5(e), i = void 0 === n ? t.len : t.pos + n, o = {
                            id: 0,
                            title: "",
                            url: "",
                            time: 0,
                            lang: "",
                            isTop: !1,
                            isEmergency: !1,
                            detail: "",
                            type: "",
                            picUrl: "",
                            pair: "",
                            endTime: 0,
                            code: "",
                            actionType: "",
                            scope: [],
                            tradingPairs: {},
                            startTime: 0,
                            forcedEndTime: 0,
                            path: ""
                        }; t.pos < i;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                if (8 !== u) break;
                                o.id = c(t.int64());
                                continue;
                            case 2:
                                if (18 !== u) break;
                                o.title = t.string();
                                continue;
                            case 3:
                                if (26 !== u) break;
                                o.url = t.string();
                                continue;
                            case 4:
                                if (32 !== u) break;
                                o.time = c(t.int64());
                                continue;
                            case 5:
                                if (42 !== u) break;
                                o.lang = t.string();
                                continue;
                            case 6:
                                if (48 !== u) break;
                                o.isTop = t.bool();
                                continue;
                            case 7:
                                if (56 !== u) break;
                                o.isEmergency = t.bool();
                                continue;
                            case 8:
                                if (66 !== u) break;
                                o.detail = t.string();
                                continue;
                            case 9:
                                if (74 !== u) break;
                                o.type = t.string();
                                continue;
                            case 10:
                                if (82 !== u) break;
                                o.picUrl = t.string();
                                continue;
                            case 11:
                                if (90 !== u) break;
                                o.pair = t.string();
                                continue;
                            case 12:
                                if (96 !== u) break;
                                o.endTime = c(t.int64());
                                continue;
                            case 13:
                                if (106 !== u) break;
                                o.code = t.string();
                                continue;
                            case 14:
                                if (114 !== u) break;
                                o.actionType = t.string();
                                continue;
                            case 15:
                                if (122 !== u) break;
                                o.scope.push(t.string());
                                continue;
                            case 16:
                                if (130 !== u) break;
                                var s = l.decode(t, t.uint32());
                                void 0 !== s.value && (o.tradingPairs[s.key] = s.value);
                                continue;
                            case 17:
                                if (136 !== u) break;
                                o.startTime = c(t.int64());
                                continue;
                            case 18:
                                if (144 !== u) break;
                                o.forcedEndTime = c(t.int64());
                                continue;
                            case 19:
                                if (154 !== u) break;
                                o.path = t.string();
                                continue
                        }
                        if (4 === (7 & u) || 0 === u) break;
                        t.skip(7 & u)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        id: d(e.id) ? globalThis.Number(e.id) : 0,
                        title: d(e.title) ? globalThis.String(e.title) : "",
                        url: d(e.url) ? globalThis.String(e.url) : "",
                        time: d(e.time) ? globalThis.Number(e.time) : 0,
                        lang: d(e.lang) ? globalThis.String(e.lang) : "",
                        isTop: !!d(e.isTop) && globalThis.Boolean(e.isTop),
                        isEmergency: !!d(e.isEmergency) && globalThis.Boolean(e.isEmergency),
                        detail: d(e.detail) ? globalThis.String(e.detail) : "",
                        type: d(e.type) ? globalThis.String(e.type) : "",
                        picUrl: d(e.picUrl) ? globalThis.String(e.picUrl) : "",
                        pair: d(e.pair) ? globalThis.String(e.pair) : "",
                        endTime: d(e.endTime) ? globalThis.Number(e.endTime) : 0,
                        code: d(e.code) ? globalThis.String(e.code) : "",
                        actionType: d(e.actionType) ? globalThis.String(e.actionType) : "",
                        scope: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.scope) ? e.scope.map((function(e) {
                            return globalThis.String(e)
                        })) : [],
                        tradingPairs: (n = e.tradingPairs, "object" === typeof n && null !== n ? Object.entries(e.tradingPairs).reduce((function(e, n) {
                            var t = (0, i._)(n, 2),
                                r = t[0],
                                a = t[1];
                            return e[r] = u.fromJSON(a), e
                        }), {}) : {}),
                        startTime: d(e.startTime) ? globalThis.Number(e.startTime) : 0,
                        forcedEndTime: d(e.forcedEndTime) ? globalThis.Number(e.forcedEndTime) : 0,
                        path: d(e.path) ? globalThis.String(e.path) : ""
                    };
                    var n
                },
                toJSON: function(e) {
                    var n, t = {};
                    if (0 !== e.id && (t.id = Math.round(e.id)), "" !== e.title && (t.title = e.title), void 0 !== e.url && "" !== e.url && (t.url = e.url), 0 !== e.time && (t.time = Math.round(e.time)), void 0 !== e.lang && "" !== e.lang && (t.lang = e.lang), void 0 !== e.isTop && !1 !== e.isTop && (t.isTop = e.isTop), !1 !== e.isEmergency && (t.isEmergency = e.isEmergency), void 0 !== e.detail && "" !== e.detail && (t.detail = e.detail), void 0 !== e.type && "" !== e.type && (t.type = e.type), void 0 !== e.picUrl && "" !== e.picUrl && (t.picUrl = e.picUrl), void 0 !== e.pair && "" !== e.pair && (t.pair = e.pair), void 0 !== e.endTime && 0 !== e.endTime && (t.endTime = Math.round(e.endTime)), void 0 !== e.code && "" !== e.code && (t.code = e.code), void 0 !== e.actionType && "" !== e.actionType && (t.actionType = e.actionType), (null === (n = e.scope) || void 0 === n ? void 0 : n.length) && (t.scope = e.scope), e.tradingPairs) {
                        var r = Object.entries(e.tradingPairs);
                        r.length > 0 && (t.tradingPairs = {}, r.forEach((function(e) {
                            var n = (0, i._)(e, 2),
                                r = n[0],
                                a = n[1];
                            t.tradingPairs[r] = u.toJSON(a)
                        })))
                    }
                    return void 0 !== e.startTime && 0 !== e.startTime && (t.startTime = Math.round(e.startTime)), void 0 !== e.forcedEndTime && 0 !== e.forcedEndTime && (t.forcedEndTime = Math.round(e.forcedEndTime)), void 0 !== e.path && "" !== e.path && (t.path = e.path), t
                },
                create: function(e) {
                    return s.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t, r, a, o, s, l, c, d, f, g, p, v, m, b, h, y, k, T, w = {
                        id: 0,
                        title: "",
                        url: "",
                        time: 0,
                        lang: "",
                        isTop: !1,
                        isEmergency: !1,
                        detail: "",
                        type: "",
                        picUrl: "",
                        pair: "",
                        endTime: 0,
                        code: "",
                        actionType: "",
                        scope: [],
                        tradingPairs: {},
                        startTime: 0,
                        forcedEndTime: 0,
                        path: ""
                    };
                    return w.id = null !== (t = e.id) && void 0 !== t ? t : 0, w.title = null !== (r = e.title) && void 0 !== r ? r : "", w.url = null !== (a = e.url) && void 0 !== a ? a : "", w.time = null !== (o = e.time) && void 0 !== o ? o : 0, w.lang = null !== (s = e.lang) && void 0 !== s ? s : "", w.isTop = null !== (l = e.isTop) && void 0 !== l && l, w.isEmergency = null !== (c = e.isEmergency) && void 0 !== c && c, w.detail = null !== (d = e.detail) && void 0 !== d ? d : "", w.type = null !== (f = e.type) && void 0 !== f ? f : "", w.picUrl = null !== (g = e.picUrl) && void 0 !== g ? g : "", w.pair = null !== (p = e.pair) && void 0 !== p ? p : "", w.endTime = null !== (v = e.endTime) && void 0 !== v ? v : 0, w.code = null !== (m = e.code) && void 0 !== m ? m : "", w.actionType = null !== (b = e.actionType) && void 0 !== b ? b : "", w.scope = (null === (n = e.scope) || void 0 === n ? void 0 : n.map((function(e) {
                        return e
                    }))) || [], w.tradingPairs = Object.entries(null !== (h = e.tradingPairs) && void 0 !== h ? h : {}).reduce((function(e, n) {
                        var t = (0, i._)(n, 2),
                            r = t[0],
                            a = t[1];
                        return void 0 !== a && (e[r] = u.fromPartial(a)), e
                    }), {}), w.startTime = null !== (y = e.startTime) && void 0 !== y ? y : 0, w.forcedEndTime = null !== (k = e.forcedEndTime) && void 0 !== k ? k : 0, w.path = null !== (T = e.path) && void 0 !== T ? T : "", w
                }
            };
            var l = {
                key: "emergencyMessage_TradingPairsEntry",
                encode: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                    return "" !== e.key && n.uint32(10).string(e.key), void 0 !== e.value && u.encode(e.value, n.uint32(18).fork()).join(), n
                },
                decode: function(e, n) {
                    for (var t = (0, r._)(e, a.V5) ? e : new a.V5(e), i = void 0 === n ? t.len : t.pos + n, o = {
                            key: "",
                            value: void 0
                        }; t.pos < i;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                if (10 !== s) break;
                                o.key = t.string();
                                continue;
                            case 2:
                                if (18 !== s) break;
                                o.value = u.decode(t, t.uint32());
                                continue
                        }
                        if (4 === (7 & s) || 0 === s) break;
                        t.skip(7 & s)
                    }
                    return o
                },
                fromJSON: function(e) {
                    return {
                        key: d(e.key) ? globalThis.String(e.key) : "",
                        value: d(e.value) ? u.fromJSON(e.value) : void 0
                    }
                },
                toJSON: function(e) {
                    var n = {};
                    return "" !== e.key && (n.key = e.key), void 0 !== e.value && (n.value = u.toJSON(e.value)), n
                },
                create: function(e) {
                    return l.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var n, t = {
                        key: "",
                        value: void 0
                    };
                    return t.key = null !== (n = e.key) && void 0 !== n ? n : "", t.value = void 0 !== e.value && null !== e.value ? u.fromPartial(e.value) : void 0, t
                }
            };

            function c(e) {
                var n = globalThis.Number(e.toString());
                if (n > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (n < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return n
            }

            function d(e) {
                return null !== e && void 0 !== e
            }
        },
        "gex/": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => s
            });
            var r = t("wIZF"),
                i = t("DTvD"),
                a = t.n(i),
                o = t("wROZ"),
                u = (0, i.createContext)({
                    getCoachMark: o.es,
                    showCoachMark: o.es,
                    preCoachMark: o.es,
                    nextCoachMark: o.es,
                    closeCoachMark: o.es
                });
            const s = function(e) {
                var n = e.children,
                    t = a().useState({}),
                    o = t[0],
                    s = t[1],
                    l = (0, i.useCallback)((function(e) {
                        s((function(n) {
                            var t = n.index,
                                i = void 0 === t ? 0 : t,
                                a = Math.max(i + e, 0);
                            return n.id ? (0, r.__assign)((0, r.__assign)({}, n), {
                                index: a
                            }) : n
                        }))
                    }), []),
                    c = {};
                return c.getCoachMark = (0, i.useCallback)((function(e) {
                    return o.id === e ? o.index : void 0
                }), [o]), c.showCoachMark = (0, i.useCallback)((function(e) {
                    return s({
                        id: e,
                        index: 0
                    })
                }), []), c.preCoachMark = (0, i.useCallback)((function() {
                    return l(-1)
                }), []), c.nextCoachMark = (0, i.useCallback)((function() {
                    return l(1)
                }), []), c.closeCoachMark = (0, i.useCallback)((function() {
                    return s({})
                }), []), a().createElement(u.Provider, {
                    value: c,
                    children: n
                })
            }
        },
        NYym: (e, n) => {
            var t;

            function r(e, n) {
                var t = [],
                    r = 0;

                function i(e) {
                    return t.push(e), n
                }

                function a() {
                    return t[r++]
                }
                return {
                    tokenize: function(n) {
                        return n.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + n + ")", "g"), a)
                    }
                }
            }
            t = new function() {
                var e = "`TMP`",
                    n = "[^\\u0020-\\u007e]",
                    t = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    i = "direction\\s*:\\s*",
                    a = "['\"]?\\s*",
                    o = "(^|[^a-zA-Z])",
                    u = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    s = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    l = "(?:[_a-z0-9-]|" + n + "|" + s + ")",
                    c = t + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + n + "|" + s + ")") + l + "*") + ")?",
                    d = "((?:-?" + c + ")|(?:inherit|auto))",
                    f = "(#?" + l + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    g = "(?:[!#$%&*-~]|" + n + "|" + s + ")*?",
                    p = "(?![a-zA-Z])",
                    v = "(?!(" + l + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    m = "(?!" + g + a + "\\))",
                    b = "(?=" + g + a + "\\))",
                    h = "(\\s*(?:!important\\s*)?[;}])",
                    y = new RegExp("`TMP`", "g"),
                    k = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    T = new RegExp("(" + u + v + "[^;}]+;?)", "gi"),
                    w = new RegExp("(" + u + "[^\\}]*?})", "gi"),
                    E = new RegExp("(" + i + ")ltr", "gi"),
                    _ = new RegExp("(" + i + ")rtl", "gi"),
                    S = new RegExp(o + "(left)" + p + m + v, "gi"),
                    I = new RegExp(o + "(right)" + p + m + v, "gi"),
                    N = new RegExp(o + "(left)" + b, "gi"),
                    V = new RegExp(o + "(right)" + b, "gi"),
                    x = new RegExp(o + "(ltr)" + b, "gi"),
                    P = new RegExp(o + "(rtl)" + b, "gi"),
                    M = new RegExp(o + "([ns]?)e-resize", "gi"),
                    A = new RegExp(o + "([ns]?)w-resize", "gi"),
                    R = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + d + "(\\s+)" + d + "(\\s+)" + d + "(\\s+)" + d + h, "gi"),
                    F = new RegExp("((?:-color|border-style)\\s*:\\s*)" + f + "(\\s+)" + f + "(\\s+)" + f + "(\\s+)" + f + h, "gi"),
                    O = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + c + ")", "gi"),
                    C = new RegExp("(background-position-x\\s*:\\s*)(-?" + t + "%)", "gi"),
                    z = new RegExp("(border-radius\\s*:\\s*)" + d + "(?:(?:\\s+" + d + ")(?:\\s+" + d + ")?(?:\\s+" + d + ")?)?(?:(?:(?:\\s*\\/\\s*)" + d + ")(?:\\s+" + d + ")?(?:\\s+" + d + ")?(?:\\s+" + d + ")?)?" + h, "gi"),
                    J = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + d, "gi"),
                    B = new RegExp("(text-shadow\\s*:\\s*)" + d + "(\\s*)" + f, "gi"),
                    U = new RegExp("(text-shadow\\s*:\\s*)" + f + "(\\s*)" + d, "gi"),
                    $ = new RegExp("(text-shadow\\s*:\\s*)" + d, "gi"),
                    H = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + d + "(\\s*\\))", "gi"),
                    D = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + d + "((?:\\s*,\\s*" + d + "){0,2}\\s*\\))", "gi");

                function G(e, n, t) {
                    var r, i;
                    return "%" === t.slice(-1) && (-1 !== (r = t.indexOf(".")) ? (i = t.length - r - 2, t = (t = 100 - parseFloat(t)).toFixed(i) + "%") : t = 100 - parseFloat(t) + "%"), n + t
                }

                function L(e) {
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

                function j(e, n) {
                    var t = [].slice.call(arguments),
                        r = t.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = t.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        a = t[10] || "";
                    return n + (i.length ? L(r) + " / " + L(i) : L(r)) + a
                }

                function q(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function Z(e, n, t) {
                    return n + q(t)
                }

                function K(e, n, t, r, i) {
                    return n + t + q(r) + i
                }

                function X(e, n, t, r, i) {
                    return n + t + r + q(i)
                }
                return {
                    transform: function(n, t) {
                        var i = new r(T, "`NOFLIP_SINGLE`"),
                            a = new r(w, "`NOFLIP_CLASS`"),
                            o = new r(k, "`COMMENT`");
                        return n = o.tokenize(a.tokenize(i.tokenize(n.replace("`", "%60")))), t.transformDirInUrl && (n = n.replace(x, "$1" + e).replace(P, "$1ltr").replace(y, "rtl")), t.transformEdgeInUrl && (n = n.replace(N, "$1" + e).replace(V, "$1left").replace(y, "right")), n = n.replace(E, "$1" + e).replace(_, "$1ltr").replace(y, "rtl").replace(S, "$1" + e).replace(I, "$1left").replace(y, "right").replace(M, "$1$2" + e).replace(A, "$1$2e-resize").replace(y, "w-resize").replace(z, j).replace(J, Z).replace(B, X).replace(U, X).replace($, Z).replace(H, K).replace(D, K).replace(R, "$1$2$3$8$5$6$7$4$9").replace(F, "$1$2$3$8$5$6$7$4$9").replace(O, G).replace(C, G), n = i.detokenize(a.detokenize(o.detokenize(n)))
                    }
                }
            }, e.exports ? n.transform = function(e, n, r) {
                var i;
                return "object" === typeof n ? i = n : (i = {}, "boolean" === typeof n && (i.transformDirInUrl = n), "boolean" === typeof r && (i.transformEdgeInUrl = r)), t.transform(e, i)
            } : "undefined" !== typeof window && (window.cssjanus = t)
        },
        "Zc+d": () => {},
        "90cZ": (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => a
            });
            var r = t("DTvD"),
                i = t("rWKu");

            function a(e) {
                var n = e.i18n,
                    t = e.defaultNS,
                    a = e.children,
                    o = (0, r.useMemo)((function() {
                        return {
                            i18n: n,
                            defaultNS: t
                        }
                    }), [n, t]);
                return (0, r.createElement)(i.gJ.Provider, {
                    value: o
                }, a)
            }
        },
        ypu0: (e, n, t) => {
            "use strict";
            var r, i = t("NYym"),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var o = 1;
            n.Ay = function(e, n) {
                if (e === o) return a.default.transform(n)
            }
        }
    }
]);