! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f5d1fd5a-1090-5d76-b7f1-1083aa30d25e")
    } catch (e) {}
}();
(self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || []).push([
    [4105], {
        hOvy: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => s
            });
            var r = t("M5j3"),
                i = t("DTvD"),
                o = t.n(i),
                a = t("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        YdKO: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => s
            });
            var r = t("M5j3"),
                i = t("DTvD"),
                o = t.n(i),
                a = t("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z",
                    fill: "url(#not-found-data-light_svg__paint0_linear)"
                }), o().createElement("path", {
                    d: "M62 71l4-4 4 4-4 4-4-4z",
                    fill: "#fff"
                }), o().createElement("path", {
                    d: "M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z",
                    fill: "#E6E8EA"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.171 73.171l14.5-14.5 5.657 5.658-14.5 14.5-5.657-5.657z",
                    fill: "url(#not-found-data-light_svg__paint1_linear)"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z",
                    fill: "url(#not-found-data-light_svg__paint2_linear)"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "not-found-data-light_svg__paint0_linear",
                    x1: 84,
                    y1: 10.162,
                    x2: 84,
                    y2: 88,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F5F5F5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#E6E8EA"
                })), o().createElement("linearGradient", {
                    id: "not-found-data-light_svg__paint1_linear",
                    x1: 4.171,
                    y1: 68.75,
                    x2: 24.328,
                    y2: 68.75,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), o().createElement("linearGradient", {
                    id: "not-found-data-light_svg__paint2_linear",
                    x1: 15,
                    y1: 48,
                    x2: 55,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#929AA5"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            }
        },
        "S+a5": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => m
            });
            var r = t("M5j3"),
                i = t("gZfF"),
                o = t("tEf9"),
                a = t("DTvD"),
                s = t("LCuF"),
                c = t("hOvy"),
                l = t("7Yse"),
                u = t("6aZm"),
                d = function(e) {
                    var n = e.isCurrent,
                        t = (0, i.A)(e, ["isCurrent"]);
                    return a.createElement(s.A, (0, r.A)({
                        as: "button",
                        "data-bn-type": "button",
                        tx: "pagination",
                        variant: n ? "current" : "default"
                    }, t, {
                        __css: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "14px",
                            border: "none",
                            outline: "none",
                            minWidth: "28px",
                            height: "28px"
                        }
                    }))
                },
                f = (0, u.UF)("uikit-widget", "Pagination"),
                p = a.forwardRef((function(e, n) {
                    var t = e.total,
                        u = e.current,
                        p = e.onMoveToPage,
                        m = e.abbreviatedNumber,
                        h = e.offset,
                        x = e.idPrefix,
                        g = void 0 === x ? "" : x,
                        v = (0, i.A)(e, ["total", "current", "onMoveToPage", "abbreviatedNumber", "offset", "idPrefix"]);
                    f();
                    var A = function(e, n) {
                            var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                            if (n < (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10)) return (0, o.A)(Array(n)).map((function(e, n) {
                                return n + 1
                            }));
                            for (var r = e - t, i = e + t, a = [], s = 1; s <= n; s++) 1 === s || s === n || s >= r && s <= i ? a.push(s) : -1 !== a[a.length - 1] && a.push(-1);
                            return a
                        }(u, t, m, h),
                        w = g ? "".concat(g, "-") : "";
                    return a.createElement(s.A, (0, r.A)({
                        ref: n,
                        as: "div"
                    }, v, {
                        __css: {
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }
                    }), a.createElement(d, {
                        className: "mirror",
                        id: "".concat(w, "previous-page"),
                        onClick: function() {
                            return p(u - 1)
                        },
                        disabled: 1 === u,
                        color: 1 === u ? "line" : "t.secondary",
                        "aria-label": "Previous page",
                        sx: {
                            minWidth: "16px"
                        }
                    }, a.createElement(c.A, {
                        size: 24
                    })), A.map((function(e, n) {
                        return a.createElement(d, {
                            key: "".concat(e, " - ").concat(n),
                            outline: !0,
                            isCurrent: e === u,
                            id: "".concat(w, "page-").concat(e),
                            onClick: function() {
                                return p(e)
                            },
                            "aria-label": "Page number ".concat(e),
                            disabled: -1 === e || e === u
                        }, -1 === e ? "..." : e)
                    })), a.createElement(d, {
                        className: "mirror",
                        id: "".concat(w, "next-page"),
                        onClick: function() {
                            return p(u + 1)
                        },
                        disabled: u === t,
                        color: u === t ? "line" : "t.secondary",
                        "aria-label": "Next page",
                        sx: {
                            minWidth: "16px"
                        }
                    }, a.createElement(l.A, {
                        size: 24
                    })))
                }));
            p.displayName = "Pagination";
            const m = p
        },
        jMfh: (e, n, t) => {
            "use strict";
            t.d(n, {
                Pp: () => Oe,
                _o: () => ye,
                pA: () => Ce,
                gD: () => R,
                Od: () => Z,
                VZ: () => xe,
                uO: () => Y,
                Rh: () => ue,
                YQ: () => S,
                $T: () => ze,
                Ap: () => Ee,
                ui: () => Ae,
                cO: () => ve
            });
            var r = t("sViW"),
                i = t("ezuS"),
                o = t("BK7R"),
                a = t("QUKP"),
                s = t("0GOp"),
                c = t.n(s),
                l = t("jg1C"),
                u = t("DTvD"),
                d = t.n(u),
                f = t("7xnE"),
                p = t("GjVY"),
                m = t("jLkM"),
                h = t.n(m),
                x = t("xd4N"),
                g = d().createContext({
                    values: [],
                    hasMore: !1,
                    loading: !1,
                    showMore: function() {
                        return Promise.resolve()
                    }
                }),
                v = "".concat(p.j0, "/stream?streams=abnormaltradingnotices"),
                A = function(e) {
                    var n = e.baseAsset,
                        t = e.quotaAsset,
                        r = e.priceChange,
                        i = e.eventType,
                        o = e.createTimestamp,
                        a = e.updateTimestamp,
                        s = e.sendTimestamp;
                    return {
                        ba: n,
                        qa: t,
                        change: r,
                        type: i,
                        time: a || o || s,
                        period: e.period,
                        volume: e.volume
                    }
                },
                w = function() {},
                y = function(e) {
                    var n = e.noticeType,
                        t = e.symbol;
                    return "".concat(n, "#").concat(t)
                },
                E = Date.now(),
                _ = E - 864e5,
                b = function(e) {
                    var n = e.children,
                        t = d().useRef(w),
                        s = d().useRef(!1),
                        p = (0, u.useState)(1),
                        m = p[0],
                        b = p[1],
                        R = (0, u.useState)([]),
                        k = R[0],
                        j = R[1],
                        z = (0, u.useState)([]),
                        M = z[0],
                        C = z[1],
                        O = (0, f.s)((0, r.A)(c().mark((function e() {
                            var n, r, i, o, a;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, x.T)({
                                            pageIndex: m,
                                            pageSize: 100,
                                            startTime: _,
                                            endTime: E
                                        });
                                    case 2:
                                        n = e.sent, r = n.data, i = void 0 === r ? [] : r, o = n.total, a = i.reduceRight((function(e, n) {
                                            return e[y(n)] = A(n), e
                                        }), {}), j(a), C((function(e) {
                                            var n = e.concat(i.map(y)),
                                                r = n.length;
                                            return s.current = r < Math.min(1e3, o), setTimeout(t.current, 1e3 / 3), h()(n)
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [m], {
                            value: 0
                        }).loading;
                    return (0, u.useEffect)((function() {
                        var e = new x.xn(v, {
                            onmessage: function(e) {
                                var n = JSON.parse(e.data).data,
                                    t = y(n);
                                j(function(e, n) {
                                    return function(t) {
                                        return t[e] ? (0, a.A)((0, o.A)({}, t), (0, i.A)({}, e, A(n))) : t
                                    }
                                }(t, n))
                            }
                        });
                        return function() {
                            return e.close()
                        }
                    }), []), (0, l.jsx)(g.Provider, {
                        value: {
                            loading: O,
                            hasMore: s.current,
                            showMore: (0, u.useCallback)((function() {
                                return b((function(e) {
                                    return e + 1
                                })), new Promise((function(e) {
                                    t.current = e
                                }))
                            })),
                            values: M.map((function(e) {
                                return k[e]
                            }))
                        },
                        children: n
                    })
                };
            b.useJPushList = function() {
                return d().useContext(g)
            };
            const R = b;
            var k = t("gZfF"),
                j = t("YdKO"),
                z = t("yhUQ"),
                M = t("C6y2"),
                C = t("LCuF"),
                O = t("FAev");
            const S = function(e) {
                var n = e.namespace,
                    t = e.children,
                    r = e.textDesc,
                    i = (0, k.A)(e, ["namespace", "children", "textDesc"]),
                    s = (0, O.ok)("", n).getI18n,
                    c = t || (0, l.jsx)(z.A, {
                        sx: {
                            fontSize: 1
                        },
                        children: r || s("common-noRecord")
                    });
                return (0, l.jsx)(M.A, (0, a.A)((0, o.A)({}, i), {
                    __css: {
                        flex: 1,
                        justifyContent: "center"
                    },
                    children: (0, l.jsxs)(C.A, {
                        sx: {
                            textAlign: "center",
                            my: ["sm", "md"],
                            color: "t.third"
                        },
                        className: "noDataClass",
                        children: [(0, l.jsx)(j.A, {
                            className: "icon-dir",
                            sx: {
                                m: "sm",
                                mb: "md"
                            },
                            size: [96]
                        }), c]
                    })
                }))
            };
            var U = t("uqCI"),
                T = t("888e"),
                I = t("nG1z"),
                P = t("2PCm"),
                L = t("VKAp"),
                N = t("xaLX"),
                H = function(e) {
                    return "function" === typeof e
                },
                D = {
                    offset: 0,
                    x: !0
                },
                $ = function(e) {
                    return e && "object" === typeof e && !(0, u.isValidElement)(e)
                },
                V = function(e, n) {
                    var t = $(e),
                        r = $(n);
                    if (t && t === r) {
                        var i = Object.keys(e),
                            o = Object.keys(n);
                        if (i.length === o.length) return Number(i.every((function(t) {
                            return V(e[t], n[t])
                        })))
                    } else if (H(e) && H(n) || (0, u.isValidElement)(e) && (0, u.isValidElement)(n)) return !0;
                    return Number(e === n)
                },
                F = function(e) {
                    (0, P.A)(t, e);
                    var n = (0, L.A)(t);

                    function t(e) {
                        var r;
                        return (0, T.A)(this, t), r = n.call(this, e), (0, i.A)((0, U.A)(r), "setRefs", (function(e) {
                            return function(n) {
                                r.$refs[e] = n
                            }
                        })), (0, i.A)((0, U.A)(r), "checkUpdate", (function() {
                            return r.$refs.root && !r.unmount
                        })), (0, i.A)((0, U.A)(r), "checkViewport", (function(e) {
                            var n = r.props,
                                i = n.check,
                                a = n.noLazy,
                                s = (0, U.A)(r),
                                c = s.$refs.root,
                                l = s.index;
                            if (r.checkUpdate()) {
                                var u = (0, o.A)({}, D, i),
                                    d = u.offset,
                                    f = u.x;
                                a || (0, N.cH)(c, d, f) ? (delete t.instances[l], r.inViewPort(e)) : t.instances[l] = (0, U.A)(r)
                            }
                        })), (0, i.A)((0, U.A)(r), "inViewPort", (function() {})), (0, i.A)((0, U.A)(r), "equalUpdate", (function(e, n) {
                            V(e, n) || r.checkViewport()
                        })), r.$refs = {}, r.index = t.count, t.count += 1, r
                    }
                    return (0, I.A)(t, [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            var n = (0, a.A)((0, o.A)({}, this.props), {
                                    check: null
                                }),
                                t = (0, a.A)((0, o.A)({}, e), {
                                    check: null
                                });
                            this.equalUpdate(t, n)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.checkViewport()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            delete t.instances[this.index], this.unmount = !0
                        }
                    }]), t
                }(u.PureComponent);
            (0, i.A)(F, "instances", {}), (0, i.A)(F, "count", 0), (0, i.A)(F, "checkViewport", (function() {
                var e = F.instances;
                Object.keys(e).forEach((function(n) {
                    var t = e[n];
                    t && t.checkViewport()
                }))
            }));
            var B = (0, N.nF)(F.checkViewport, 200);
            window.addEventListener("resize", B, !0), document.addEventListener("scroll", B, !0), document.addEventListener("transitionend", B, !0);
            const W = F;
            var G = function(e) {
                    (0, P.A)(t, e);
                    var n = (0, L.A)(t);

                    function t() {
                        var e;
                        return (0, T.A)(this, t), e = n.apply(this, arguments), (0, i.A)((0, U.A)(e), "state", {
                            loading: !1,
                            error: !1
                        }), (0, i.A)((0, U.A)(e), "checkUpdate", (function() {
                            var n = e.$refs.root,
                                t = e.state.loading;
                            return !e.props.fetching && n && !t && !e.unmount
                        })), (0, i.A)((0, U.A)(e), "inViewPort", (function() {
                            var n = e.props.showMore;
                            e.setState({
                                loading: !0,
                                error: !1
                            }, (function() {
                                W.instances[e.index] = (0, U.A)(e), new Promise((function(e) {
                                    n().then((function() {
                                        return e(!1)
                                    })).catch((function() {
                                        return e(!0)
                                    }))
                                })).then((function(n) {
                                    e.unmount || e.setState({
                                        loading: !1,
                                        error: n
                                    })
                                }))
                            }))
                        })), e
                    }
                    return (0, I.A)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.state.error;
                            return (0, l.jsx)("div", {
                                className: "mica-load-more",
                                ref: this.setRefs("root"),
                                children: e ? (0, l.jsx)("span", {
                                    onClick: this.inViewPort,
                                    children: "load error"
                                }) : (0, l.jsx)("i", {})
                            })
                        }
                    }]), t
                }(W),
                Z = function(e) {
                    (0, P.A)(t, e);
                    var n = (0, L.A)(t);

                    function t() {
                        var e;
                        return (0, T.A)(this, t), e = n.apply(this, arguments), (0, i.A)((0, U.A)(e), "inViewPort", (function() {
                            var n = e.props,
                                t = n.isSvg,
                                r = n.src,
                                i = e.$refs.root;
                            t ? (i.style.backgroundImage = "url('".concat(r, "')"), i.style.backgroundRepeat = "no-repeat", i.style.backgroundSize = "100%", i.style.backgroundPosition = "center") : i.src = e.props.src, i.classList.add("lozad-loaded")
                        })), e
                    }
                    return (0, I.A)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.src,
                                t = e.alt,
                                r = e.isSvg,
                                i = (0, k.A)(e, ["src", "alt", "isSvg"]);
                            return (0, l.jsx)(C.A, (0, a.A)((0, o.A)({}, i), {
                                ref: this.setRefs("root"),
                                as: r ? "div" : "img",
                                className: "lozad-load",
                                alt: t || "",
                                "data-src": n
                            }))
                        }
                    }]), t
                }(W),
                K = function(e) {
                    var n = e.item,
                        t = e.columns,
                        r = e.expandedRowRender,
                        i = (0, u.useState)(!1),
                        o = i[0],
                        a = i[1],
                        s = o && "function" === typeof r;
                    return (0, l.jsxs)(C.A, {
                        "data-type": "list-row",
                        sx: {
                            py: "sm",
                            borderBottom: "1px solid #E6E8EA"
                        },
                        children: [(0, l.jsx)(C.A, {
                            sx: {
                                alignItems: "center",
                                my: "minor",
                                fontSize: 1
                            },
                            children: (t || []).map((function(e) {
                                var t = e.title,
                                    r = e.hideTitle,
                                    i = e.dataIndex,
                                    s = e.expandCol,
                                    c = e.render,
                                    u = (void 0 === c ? function() {
                                        return null
                                    } : c)(n[i], n, {
                                        expand: o,
                                        setExpand: a
                                    }) || n[i];
                                return s && !o ? null : (0, l.jsxs)(M.A, {
                                    "data-type": "list-min-row",
                                    sx: {
                                        mb: "xs",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [t && !r ? (0, l.jsx)(z.A, {
                                        "data-type": "list-row-lf",
                                        sx: {
                                            flex: "none",
                                            color: "t.third"
                                        },
                                        children: t
                                    }) : null, (0, l.jsx)(C.A, {
                                        "data-type": "list-row-rt",
                                        sx: {
                                            flex: 1,
                                            textAlign: "right"
                                        },
                                        children: u
                                    })]
                                }, i)
                            }))
                        }), s ? r(n) : null]
                    })
                };
            const Y = function(e) {
                var n = e.list,
                    t = void 0 === n ? [] : n,
                    r = e.hasMore,
                    i = e.fetching,
                    s = e.showMore,
                    c = e.children,
                    u = e.columns,
                    f = e.expandedRowRender,
                    p = e.noDataText,
                    m = (0, k.A)(e, ["list", "hasMore", "fetching", "showMore", "children", "columns", "expandedRowRender", "noDataText"]);
                if ("function" === typeof f && !Array.isArray(u)) throw new Error("expandRowRender is function,columns must be array");
                var h = null;
                return r ? h = (0, l.jsx)(G, {
                    showMore: s,
                    fetching: i
                }) : t.length ? void 0 !== r && (h = (0, l.jsx)(z.A, {
                    __css: {
                        color: "t.third",
                        fontSize: 1
                    },
                    sx: {
                        py: "sm",
                        textAlign: "center"
                    },
                    children: "No more data"
                })) : h = (0, l.jsx)(S, {
                    textDesc: p,
                    sx: {
                        py: "md"
                    }
                }), (0, l.jsxs)(C.A, (0, a.A)((0, o.A)({
                    __css: {
                        flex: 1
                    }
                }, m), {
                    children: [t.map((function(e, n) {
                        return Array.isArray(u) ? d().createElement(K, {
                            key: n,
                            item: e,
                            columns: u,
                            expandedRowRender: f
                        }) : d().cloneElement(c, {
                            key: n,
                            item: e
                        })
                    })), h]
                }))
            };
            var q = t("S+a5"),
                Q = t("N/Z2"),
                X = t("hTvQ"),
                J = t.n(X),
                ee = t("06hb"),
                ne = t("Y7o/");

            function te() {
                var e = (0, Q.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return te = function() {
                    return e
                }, e
            }

            function re() {
                var e = (0, Q.A)(["\n  position: ", ";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent);\n  z-index: 2000;\n"]);
                return re = function() {
                    return e
                }, e
            }

            function ie() {
                var e = (0, Q.A)(["\n  width: 50px;\n  height: 35px;\n  text-align: center;\n  font-size: 10px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n\n  & > div {\n    background-color: #f5bc00;\n    height: 100%;\n    width: 3px;\n    display: inline-block;\n    margin: 0 3px;\n    animation: ", " 1.2s infinite ease-in-out;\n  }\n\n  & > .rect2 {\n    animation-delay: -1.1s;\n  }\n\n  & > .rect3 {\n    animation-delay: -1s;\n  }\n\n  & > .rect4 {\n    animation-delay: -0.9s;\n  }\n\n  & > .rect5 {\n    animation-delay: -0.8s;\n  }\n"]);
                return ie = function() {
                    return e
                }, e
            }
            var oe, ae = (0, ee.keyframes)(te()),
                se = ne.default.div(re(), (function(e) {
                    return e.inner ? "absolute" : "fixed"
                })),
                ce = ne.default.div(ie(), ae),
                le = function(e) {
                    var n = e.show,
                        t = void 0 === n || n,
                        r = e.fullScreen,
                        i = void 0 !== r && r,
                        o = e.inner,
                        a = e.children,
                        s = void 0 === a ? null : a;
                    if (!t) return s || null;
                    var c = (0, l.jsxs)(ce, {
                        children: [(0, l.jsx)("div", {
                            className: "rect2"
                        }), (0, l.jsx)("div", {
                            className: "rect3"
                        }), (0, l.jsx)("div", {
                            className: "rect4"
                        }), (0, l.jsx)("div", {
                            className: "rect5"
                        })]
                    });
                    return i ? (0, l.jsxs)(d().Fragment, {
                        children: [s, (0, l.jsx)(se, {
                            inner: o,
                            children: c
                        })]
                    }) : (0, l.jsxs)(d().Fragment, {
                        children: [s, c]
                    })
                };
            le.show = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.fullScreen,
                    t = void 0 !== n && n;
                oe || (oe = document.createElement("div"), document.body.appendChild(oe)), J().render((0, l.jsx)(le, {
                    fullScreen: t
                }), oe)
            }, le.hide = function() {
                oe && J().render((0, l.jsx)(le, {
                    show: !1
                }), oe)
            };
            const ue = le;
            var de = t("2URn"),
                fe = {
                    count: 0,
                    fns: {}
                },
                pe = (0, N.nF)((function() {
                    var e = fe.fns;
                    try {
                        Object.keys(e).forEach((function(n) {
                            "function" === typeof e[n] && e[n]()
                        }))
                    } catch (n) {}
                }), 200);
            window.addEventListener("resize", pe, !0);
            var me = function() {},
                he = function(e) {
                    var n = e.type,
                        t = e.item,
                        r = e.columns,
                        s = e.isRowExpand,
                        c = e.onClick,
                        d = void 0 === c ? me : c,
                        f = e.expandedRowRender,
                        p = (0, k.A)(e, ["type", "item", "columns", "isRowExpand", "onClick", "expandedRowRender"]),
                        m = "header" === n,
                        h = (0, u.useState)(!1),
                        x = h[0],
                        g = h[1],
                        v = x && "function" === typeof f;
                    return (0, l.jsxs)(C.A, (0, a.A)((0, o.A)({}, p), {
                        "data-type": m ? "table-th" : "table-td",
                        sx: {
                            mb: m ? "minor" : 0
                        },
                        children: [(0, l.jsx)(M.A, {
                            __css: {
                                bg: "inherit"
                            },
                            onClick: !m && s ? function() {
                                return g(!x)
                            } : function() {
                                return d(t, p.keyIndex)
                            },
                            children: (r || []).map((function(e, n) {
                                var r, s = e.title,
                                    c = e.dataIndex,
                                    l = e.width,
                                    d = e.sticky,
                                    f = e.style,
                                    h = e.render,
                                    v = m ? s : (void 0 === h ? function() {
                                        return null
                                    } : h)(t[c], t, {
                                        expand: x,
                                        setExpand: g
                                    }, p.keyIndex) || t[c],
                                    A = {
                                        "data-type": "table-min-row"
                                    },
                                    w = "left" === d;
                                return A.style = (0, o.A)((0, a.A)((0, o.A)({}, f), {
                                    flex: l,
                                    minWidth: l
                                }), d ? (r = w, (0, i.A)({
                                    position: "sticky"
                                }, r ? "left" : "right", 0)) : {}), d && (A["data-sticky"] = w ? "left" : "right"), (0, u.createElement)(M.A, (0, a.A)((0, o.A)({}, A), {
                                    key: c || n,
                                    __css: {
                                        alignItems: "flex-start",
                                        lineHeight: "20px"
                                    },
                                    sx: {
                                        bg: "inherit",
                                        py: 12,
                                        px: "sm"
                                    },
                                    children: v
                                }))
                            }))
                        }), v ? f(t) : null]
                    }))
                };
            const xe = function(e) {
                var n = e.loading,
                    t = e.columns,
                    r = e.list,
                    i = void 0 === r ? [] : r,
                    s = e.rowStyle,
                    c = void 0 === s ? {} : s,
                    f = e.onRowClick,
                    p = void 0 === f ? me : f,
                    m = e.isRowExpand,
                    h = void 0 !== m && m,
                    x = e.expandedRowRender,
                    g = e.paginationProps,
                    v = e.hasBorder,
                    A = void 0 === v || v,
                    w = e.noDataText,
                    y = i.length,
                    E = t.reduce((function(e, n) {
                        return +e + n.width + 16
                    }), 0),
                    _ = function(e) {
                        var n = (0, u.useRef)(null),
                            t = (0, u.useRef)(null);
                        return (0, u.useEffect)((function() {
                            var r = fe.count++;
                            return fe.fns[r] = function() {
                                    var r = n.current,
                                        i = t.current;
                                    if ((0, de.A)(r, Element) && (0, de.A)(i, Element)) {
                                        var o = r.offsetWidth < i.offsetWidth;
                                        i.classList[o ? "add" : "remove"](e)
                                    }
                                }, fe.fns[r](),
                                function() {
                                    return delete fe.fns[r]
                                }
                        }), [e]), {
                            wrapRef: n,
                            innerRef: t
                        }
                    }("table-sticky"),
                    b = _.wrapRef,
                    R = _.innerRef,
                    k = "#ffffff";
                return (0, l.jsxs)(d().Fragment, {
                    children: [(0, l.jsxs)(C.A, {
                        ref: b,
                        style: {
                            overflowX: "auto",
                            position: "relative",
                            minWidth: E
                        },
                        children: [(0, l.jsxs)(C.A, {
                            ref: R,
                            "data-type": "list-table",
                            "data-border": A,
                            style: {
                                minWidth: E
                            },
                            sx: {
                                fontSize: 1,
                                "&[data-border=true]": {
                                    border: "1px solid",
                                    borderColor: "#F5F5F5",
                                    borderRadius: 2,
                                    ">[data-type]:last-of-type": {
                                        borderBottom: "none"
                                    }
                                },
                                ">[data-type=table-th]": {
                                    fontSize: 0,
                                    bg: "rgb(249, 249, 250)",
                                    color: "header.gray"
                                },
                                ">[data-type=table-td]": {
                                    bg: k,
                                    borderBottom: "1px solid",
                                    borderBottomColor: "#F5F5F5",
                                    "&:hover": {
                                        bg: "rgba(249,249,250,0.7)"
                                    }
                                },
                                "&.table-sticky": {
                                    "> [data-type] > div > [data-sticky=left]": {
                                        boxShadow: "1px 0 1px rgba(0,0,0,0.05)"
                                    },
                                    "> [data-type] > div > [data-sticky=right]": {
                                        boxShadow: "-1px 0 1px rgba(0,0,0,0.05)"
                                    },
                                    "> [data-type=table-td] > div > [data-sticky]": {
                                        bg: k
                                    }
                                }
                            },
                            children: [(0, l.jsx)(he, {
                                columns: t,
                                type: "header"
                            }), (i || []).map((function(e, n) {
                                var r = {
                                        item: e,
                                        columns: t,
                                        isRowExpand: h,
                                        expandedRowRender: x
                                    },
                                    i = "function" === typeof c ? c(e) : {};
                                return (0, u.createElement)(he, (0, a.A)((0, o.A)({}, r), {
                                    onClick: function() {
                                        return p(e, n)
                                    },
                                    keyIndex: n,
                                    key: n,
                                    type: "td",
                                    style: i
                                }))
                            })), n || y ? null : (0, l.jsx)(S, {
                                textDesc: w,
                                sx: {
                                    py: "md"
                                }
                            })]
                        }), n ? (0, l.jsx)(ue, {
                            inner: !0,
                            fullScreen: !0
                        }) : null]
                    }), g ? (0, l.jsx)(q.A, (0, o.A)({
                        mt: ["sm", "sm", "md"],
                        justifyContent: ["center", "flex-end"]
                    }, g)) : null]
                })
            };

            function ge(e) {
                var n = (0, u.useRef)(null),
                    t = (0, u.useRef)(null);
                return (0, u.useEffect)((function() {
                    var e = n.current,
                        r = t.current;
                    if (e && r) {
                        var i = r.getBoundingClientRect().height;
                        e.style.height = "".concat(i, "px"), r.style.paddingBottom = "10px"
                    }
                }), []), (0, l.jsx)(C.A, {
                    sx: {
                        overflow: "hidden"
                    },
                    ref: n,
                    children: (0, l.jsx)(M.A, (0, a.A)((0, o.A)({
                        __css: {
                            overflow: "auto"
                        }
                    }, e), {
                        ref: t
                    }))
                })
            }
            const ve = d().memo(ge);
            t("T9BW");
            const Ae = d().memo((function(e) {
                var n = e.value,
                    t = e.line,
                    r = e.direction,
                    i = void 0 === r ? null : r,
                    s = (0, k.A)(e, ["value", "line", "direction"]);
                return (0, l.jsx)(z.A, (0, a.A)((0, o.A)({
                    title: n
                }, s), {
                    __css: {
                        display: "-webkit-box",
                        wordBreak: "break-word",
                        WebkitBoxOrient: "vertical"
                    },
                    style: {
                        direction: i,
                        overflow: "hidden",
                        WebkitLineClamp: t || 1,
                        lineHeight: "16px"
                    },
                    children: n
                }))
            }));
            var we = t("dn+i");
            const ye = d().memo((function(e) {
                    var n = e.boxCss,
                        t = (0, k.A)(e, ["boxCss"]),
                        r = (0, we.Rm)().layoutMax,
                        i = {
                            mx: "auto",
                            maxWidth: void 0 === r ? 1136 : r
                        };
                    return (0, l.jsx)(C.A, {
                        __css: n,
                        children: (0, l.jsx)(C.A, (0, a.A)((0, o.A)({}, t), {
                            __css: i
                        }))
                    })
                })),
                Ee = d().memo((function(e) {
                    var n = e.style,
                        t = void 0 === n ? {} : n,
                        r = (0, k.A)(e, ["style"]);
                    return t.direction = "ltr", (0, l.jsx)(C.A, (0, a.A)((0, o.A)({}, r), {
                        style: t
                    }))
                }));
            var _e = t("BMA0"),
                be = t("g2tk"),
                Re = t("qEWw"),
                ke = {},
                je = function(e) {
                    var n = e.lng,
                        t = (0, O.ok)("").getI18n,
                        i = (0, u.useState)(!0),
                        o = i[0],
                        a = i[1],
                        s = (0, f.s)((0, r.A)(c().mark((function e() {
                            var t, r;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, Re.Nx)(n);
                                    case 2:
                                        t = e.sent, r = 0;
                                    case 4:
                                        if (!(r < t.length)) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!t[r].isEmergency) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", t[r]);
                                    case 7:
                                        r++, e.next = 4;
                                        break;
                                    case 10:
                                        return e.abrupt("return", ke);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [n], {
                            value: ke
                        }).value,
                        d = s.detail,
                        p = s.url;
                    return d && o ? (0, l.jsx)(M.A, {
                        sx: {
                            bg: "badgeYellowBg",
                            py: "ls",
                            px: ["ls", "md", "md"]
                        },
                        children: (0, l.jsxs)(M.A, {
                            sx: {
                                fontSize: 1,
                                margin: "0 auto",
                                alignItems: ["flex-start", "center"],
                                width: "1152px",
                                borderRadius: "default",
                                justifyContent: "space-between"
                            },
                            children: [(0, l.jsxs)(M.A, {
                                sx: {
                                    alignItems: ["flex-start", "center"],
                                    flex: 1,
                                    flexWrap: "nowrap"
                                },
                                children: [(0, l.jsx)(_e.A, {
                                    size: 20,
                                    sx: {
                                        flex: "none",
                                        color: "primary"
                                    }
                                }), (0, l.jsxs)(M.A, {
                                    flexDirection: ["column", "row"],
                                    ml: ["xs", 0],
                                    children: [(0, l.jsx)(z.A, {
                                        sx: {
                                            px: [0, "xs"],
                                            wordBreak: "break-all",
                                            color: "t.primary",
                                            fontSize: ["14px"],
                                            lineHeight: ["20px"]
                                        },
                                        children: d
                                    }), (0, l.jsx)(z.A, {
                                        as: "a",
                                        href: p,
                                        __css: {
                                            ml: [0, "sm"],
                                            flex: "none",
                                            color: "t.yellow",
                                            fontSize: ["14px"],
                                            lineHeight: ["20px"]
                                        },
                                        children: t("common-more", "More") + "  >"
                                    })]
                                })]
                            }), (0, l.jsx)(be.A, {
                                size: 16,
                                sx: {
                                    ml: "md",
                                    flex: "none",
                                    color: "t.disabled",
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return a(!1)
                                }
                            })]
                        })
                    }) : null
                };
            const ze = d().memo(je);
            t("zEpV"), t("6p3b");

            function Me() {
                var e = (0, Q.A)(["\n        #__APP {\n          main {\n            overflow: auto;\n          }\n        }\n      "]);
                return Me = function() {
                    return e
                }, e
            }

            function Ce() {
                return (0, l.jsx)(ee.Global, {
                    styles: (0, ee.css)(Me())
                })
            }
            const Oe = function(e) {
                var n = e.children,
                    t = (0, k.A)(e, ["children"]);
                return (0, l.jsx)(C.A, (0, a.A)((0, o.A)({
                    minHeight: "calc(100% - 64px)",
                    width: "100%"
                }, t), {
                    children: (0, l.jsx)(C.A, {
                        width: "1200px",
                        maxWidth: ["calc(100% - 32px)", "calc(100% - 48px)"],
                        my: "0",
                        mx: "auto",
                        children: n
                    })
                }))
            }
        },
        xd4N: (e, n, t) => {
            "use strict";
            t.d(n, {
                T: () => c,
                de: () => u,
                xn: () => f
            });
            var r = t("sViW"),
                i = t("0GOp"),
                o = t.n(i),
                a = t("a59x"),
                s = t("xaLX"),
                c = function() {
                    var e = (0, r.A)(o().mark((function e(n) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, s.i8)((0, a.Eg)("/bapi/composite/v1/public/marketing/indicator/abnormal-trading-notice/pageList", n || {})));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = {
                    UP_BREAKTHROUGH: {
                        DAY_1: "jpush-dayHigh",
                        WEEK_1: "jpush-weekHigh",
                        MONTH_1: "jpush-monthHigh"
                    },
                    DOWN_BREAKTHROUGH: {
                        DAY_1: "jpush-dayLow",
                        WEEK_1: "jpush-weekLow",
                        MONTH_1: "jpush-monthLow"
                    },
                    DROP_BACK: "jpush-dropBack",
                    RISE_AGAIN: "jpush-riseAgain",
                    HIGH_VOLUME_RISE_3: "jpush-volumeRise3",
                    HIGH_VOLUME_RISE_2: "jpush-volumeRise2",
                    HIGH_VOLUME_RISE_1: "jpush-volumeRise1",
                    HIGH_VOLUME_DROP_3: "jpush-volumeDrop3",
                    HIGH_VOLUME_DROP_2: "jpush-volumeDrop2",
                    HIGH_VOLUME_DROP_1: "jpush-volumeDrop1",
                    BLOCK_TRADES_BUY: "jpush-largeBuy",
                    BLOCK_TRADES_SELL: "jpush-largeSell",
                    UP_1: {
                        MINUTE_5: "trd-remind-up1m5",
                        HOUR_2: "trd-remind-up1h2"
                    },
                    UP_2: {
                        MINUTE_5: "trd-remind-up2m5",
                        HOUR_2: "trd-remind-up2h2"
                    },
                    UP_3: {
                        MINUTE_5: "trd-remind-up3m5",
                        HOUR_2: "trd-remind-up3h2"
                    },
                    DOWN_1: {
                        MINUTE_5: "trd-remind-down1m5",
                        HOUR_2: "trd-remind-down1h2"
                    },
                    DOWN_2: {
                        MINUTE_5: "trd-remind-down2m5",
                        HOUR_2: "trd-remind-down2h2"
                    },
                    DOWN_3: {
                        MINUTE_5: "trd-remind-down3m5",
                        HOUR_2: "trd-remind-down3h2"
                    },
                    default: {
                        MINUTE_5: "jpush-5Min",
                        HOUR_2: "jpush-2Hours"
                    }
                },
                u = function(e, n) {
                    var t = l[e];
                    return t ? (t[n] && (t = t[n]), "string" !== typeof t ? n : t) : l.default[n]
                },
                d = {
                    1e3: "NORMAL_CLOSURE",
                    1005: "NO_STATUS_RECEIVED"
                };

            function f(e) {
                var n, t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this;
                return this.open = function() {
                    (n = new WebSocket(e)).onmessage = r.onmessage, n.onclose = function(e) {
                        return i.reconnect(e)
                    }, n.onerror = function(e) {
                        return i.reconnect(e)
                    }
                }, this.reconnect = function(e) {
                    e.code in d || n._hand_close_ || t || (t = setTimeout((function() {
                        return i.open()
                    }), r.timeout || 3e3))
                }, this.close = function() {
                    n._hand_close_ = !0, n.close()
                }, this.open(), this
            }
        },
        fALc: (e, n) => {
            var t;

            function r(e, n) {
                var t = [],
                    r = 0;

                function i(e) {
                    return t.push(e), n
                }

                function o() {
                    return t[r++]
                }
                return {
                    tokenize: function(n) {
                        return n.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + n + ")", "g"), o)
                    }
                }
            }
            t = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    n = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    t = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + t + ")",
                    o = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    a = "((?:-?" + o + ")|(?:inherit|auto))",
                    s = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    c = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + t + ")*?",
                    l = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    u = "(?!" + c + "['\"]?\\s*\\))",
                    d = "(?=" + c + "['\"]?\\s*\\))",
                    f = "(\\s*(?:!important\\s*)?[;}])",
                    p = new RegExp("`TMP`", "g"),
                    m = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    h = new RegExp("(" + n + l + "[^;}]+;?)", "gi"),
                    x = new RegExp("(" + n + "[^\\}]*?})", "gi"),
                    g = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    v = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    A = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + l, "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + l, "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    E = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    _ = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    b = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    R = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    k = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    j = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + f, "gi"),
                    z = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + f, "gi"),
                    M = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + o + ")", "gi"),
                    C = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    O = new RegExp("(border-radius\\s*:\\s*)" + a + "(?:(?:\\s+" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?(?:(?:(?:\\s*\\/\\s*)" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?" + f, "gi"),
                    S = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + a, "gi"),
                    U = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                    T = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                    I = new RegExp("(text-shadow\\s*:\\s*)" + a, "gi"),
                    P = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + a + "(\\s*\\))", "gi"),
                    L = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + a + "((?:\\s*,\\s*" + a + "){0,2}\\s*\\))", "gi");

                function N(e, n, t) {
                    var r, i;
                    return "%" === t.slice(-1) && (-1 !== (r = t.indexOf(".")) ? (i = t.length - r - 2, t = (t = 100 - parseFloat(t)).toFixed(i) + "%") : t = 100 - parseFloat(t) + "%"), n + t
                }

                function H(e) {
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

                function D(e, n) {
                    var t = [].slice.call(arguments),
                        r = t.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = t.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        o = t[10] || "";
                    return n + (i.length ? H(r) + " / " + H(i) : H(r)) + o
                }

                function $(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function V(e, n, t) {
                    return n + $(t)
                }

                function F(e, n, t, r, i) {
                    return n + t + $(r) + i
                }

                function B(e, n, t, r, i) {
                    return n + t + r + $(i)
                }
                return {
                    transform: function(e, n) {
                        var t = new r(h, "`NOFLIP_SINGLE`"),
                            i = new r(x, "`NOFLIP_CLASS`"),
                            o = new r(m, "`COMMENT`");
                        return e = o.tokenize(i.tokenize(t.tokenize(e.replace("`", "%60")))), n.transformDirInUrl && (e = e.replace(_, "$1`TMP`").replace(b, "$1ltr").replace(p, "rtl")), n.transformEdgeInUrl && (e = e.replace(y, "$1`TMP`").replace(E, "$1left").replace(p, "right")), e = e.replace(g, "$1`TMP`").replace(v, "$1ltr").replace(p, "rtl").replace(A, "$1`TMP`").replace(w, "$1left").replace(p, "right").replace(R, "$1$2`TMP`").replace(k, "$1$2e-resize").replace(p, "w-resize").replace(O, D).replace(S, V).replace(U, B).replace(T, B).replace(I, V).replace(P, F).replace(L, F).replace(j, "$1$2$3$8$5$6$7$4$9").replace(z, "$1$2$3$8$5$6$7$4$9").replace(M, N).replace(C, N), e = t.detokenize(i.detokenize(o.detokenize(e)))
                    }
                }
            }, e.exports ? n.transform = function(e, n, r) {
                var i;
                return "object" === typeof n ? i = n : (i = {}, "boolean" === typeof n && (i.transformDirInUrl = n), "boolean" === typeof r && (i.transformEdgeInUrl = r)), t.transform(e, i)
            } : window.cssjanus = t
        },
        "sCL+": e => {
            e.exports = function(e, n, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                    if (t(n, e[r])) return !0;
                return !1
            }
        },
        "s+R0": (e, n, t) => {
            var r = t("JBn+"),
                i = t("OfKG"),
                o = t("sCL+"),
                a = t("S0iI"),
                s = t("9TP6"),
                c = t("XlL0");
            e.exports = function(e, n, t) {
                var l = -1,
                    u = i,
                    d = e.length,
                    f = !0,
                    p = [],
                    m = p;
                if (t) f = !1, u = o;
                else if (d >= 200) {
                    var h = n ? null : s(e);
                    if (h) return c(h);
                    f = !1, u = a, m = new r
                } else m = n ? [] : p;
                e: for (; ++l < d;) {
                    var x = e[l],
                        g = n ? n(x) : x;
                    if (x = t || 0 !== x ? x : 0, f && g === g) {
                        for (var v = m.length; v--;)
                            if (m[v] === g) continue e;
                        n && m.push(g), p.push(x)
                    } else u(m, g, t) || (m !== p && m.push(g), p.push(x))
                }
                return p
            }
        },
        "9TP6": (e, n, t) => {
            var r = t("OBn4"),
                i = t("nnm9"),
                o = t("XlL0"),
                a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : i;
            e.exports = a
        },
        jLkM: (e, n, t) => {
            var r = t("s+R0");
            e.exports = function(e) {
                return e && e.length ? r(e) : []
            }
        },
        "6p3b": (e, n, t) => {
            "use strict";
            var r, i = t("fALc"),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var a = -1;

            function s(e, n) {
                if (e === a) return o.default.transform(n)
            }
        }
    }
]);
//# debugId=f5d1fd5a-1090-5d76-b7f1-1083aa30d25e