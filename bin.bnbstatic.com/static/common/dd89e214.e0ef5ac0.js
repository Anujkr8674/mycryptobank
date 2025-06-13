"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ffea8a7c-2d19-5df0-a04b-8df9fc7e5d7b")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [184], {
        "/NP1": (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var r = a("BK7R"),
                n = a("QUKP"),
                i = a("TrCV"),
                s = a("YgAF"),
                l = function(e) {
                    return (0, i.jsx)(s.A, (0, n.A)((0, r.A)({}, e), {
                        className: "ErrorModal"
                    }))
                }
        },
        cNpm: (e, t, a) => {
            a.d(t, {
                jZ: () => l,
                XL: () => o,
                Ou: () => c,
                Ch: () => d
            });
            var r = a("sViW"),
                n = a("Pz56"),
                i = a.n(n),
                s = a("3qxK"),
                l = function() {
                    var e = (0, r.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.b)("/bapi/composite/v1/private/promo/voucherV2/scratchcard/checkEligible");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.data);
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
                o = function() {
                    var e = (0, r.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.b)("/bapi/composite/v1/private/promo/voucherV2/scratchcard/info");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.data);
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
                c = function() {
                    var e = (0, r.A)(i().mark((function e(t) {
                        var a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.b)("/bapi/composite/v1/private/promo/voucherV2/scratchcard/remindMe", t);
                                case 2:
                                    return a = e.sent, e.abrupt("return", a);
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
                d = function() {
                    var e = (0, r.A)(i().mark((function e(t) {
                        var a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.b)("/bapi/composite/v1/private/promo/voucherV2/scratchcard/scratch", t);
                                case 2:
                                    return a = e.sent, e.abrupt("return", a);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        Wffw: (e, t, a) => {
            a.d(t, {
                b: () => A,
                w: () => C
            });
            var r = a("BK7R"),
                n = a("QUKP"),
                i = a("gZfF"),
                s = a("TrCV"),
                l = a("DTvD"),
                o = a("qMwq"),
                c = a("XxiJ"),
                d = a("eeEA"),
                u = a("D4P9"),
                h = a("YgAF"),
                p = a("xE8/"),
                m = a("Y1+p"),
                f = a("/NP1"),
                y = a("B0yh"),
                g = a("Y4uf"),
                v = function(e) {
                    return (0, s.jsxs)(g.A, {
                        width: "97",
                        height: "96",
                        viewBox: "0 0 97 96",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            d: "M36.5 54L48.5 66L60.5 54V84H36.5V54Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("path", {
                            d: "M48.498 10C58.439 10.0002 66.4977 18.0597 66.4977 28.0007C66.4977 37.9418 58.4391 46.001 48.498 46.001C38.557 46.0008 30.498 37.941 30.498 28C30.498 18.0589 38.5569 10 48.498 10Z",
                            fill: "#E6E8EA"
                        }), (0, s.jsx)("path", {
                            d: "M36.5 54H28.5C19.6634 54 12.5 61.1634 12.5 70V84H36.5V54Z",
                            fill: "url(#paint0_linear_1935_65707)"
                        }), (0, s.jsx)("path", {
                            d: "M60.5 84H84.5V70C84.5 61.1634 77.3366 54 68.5 54H60.5V84Z",
                            fill: "url(#paint1_linear_1935_65707)"
                        }), (0, s.jsx)("path", {
                            d: "M72.5 48C64.2157 48 57.5 54.7157 57.5 63C57.5 71.2843 64.2157 78 72.5 78C80.7843 78 87.5 71.2843 87.5 63C87.5 54.7157 80.7843 48 72.5 48Z",
                            fill: "url(#paint2_linear_1935_65707)"
                        }), (0, s.jsx)("path", {
                            d: "M74 72H71V69H74V72Z",
                            fill: "#14151A"
                        }), (0, s.jsx)("path", {
                            d: "M71 66V54H74V66L71 66Z",
                            fill: "#14151A"
                        }), (0, s.jsxs)("defs", {
                            children: [(0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_1935_65707",
                                x1: "48.5",
                                y1: "84",
                                x2: "48.5",
                                y2: "54",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#929AA5"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76808F"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint1_linear_1935_65707",
                                x1: "48.5",
                                y1: "84",
                                x2: "48.5",
                                y2: "54",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#929AA5"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76808F"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint2_linear_1935_65707",
                                x1: "57.5",
                                y1: "63",
                                x2: "87.5",
                                y2: "63",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    })
                },
                x = a("5/aQ"),
                w = {
                    11080: {
                        icon: (0, s.jsx)(c.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "CannotClaimReward-campaignUnavailable",
                            defaultValue: "This campaign is unavailable in your region."
                        }
                    },
                    11023: {
                        icon: (0, s.jsx)(c.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "RiskUser-desc",
                            defaultValue: "Your account did not pass the risk assessment for this activity. In case of any objections, you may <AppealLink>submit an appeal</AppealLink>.",
                            components: {
                                AppealLink: (0, s.jsx)(p.qO, {
                                    className: "ul-text-link",
                                    target: "_blank",
                                    to: "/my/risk/appeal?templateId=T4adc24fe0"
                                })
                            }
                        }
                    },
                    12e3: {
                        icon: (0, s.jsx)(x.v, {}),
                        title: {
                            key: "SystemMaintenance\t",
                            defaultValue: "System Maintenance"
                        },
                        desc: {
                            key: "SystemMaintenance-desc",
                            defaultValue: "This function is temporarily suspended. Please try again later."
                        }
                    }
                },
                C = {
                    icon: (0, s.jsx)(x.v, {}),
                    title: {
                        key: "UnexpectedError",
                        defaultValue: "Unexpected Error"
                    },
                    desc: {
                        key: "UnexpectedError-desc",
                        defaultValue: "An unexpected error has occurred. Please try again later."
                    }
                },
                A = function(e) {
                    var t, a = e.code,
                        c = (0, i.A)(e, ["code"]),
                        g = (0, y.Bd)().t,
                        x = (0, l.useState)(!0),
                        A = x[0],
                        T = x[1],
                        k = (0, o.hL)("/my/settings/profile"),
                        b = w[a] || C,
                        L = c.onClose;
                    return "11061" === a ? (0, s.jsx)(m.J, {
                        visible: A,
                        showClose: !0,
                        onClose: function() {
                            T(!1), L && L()
                        },
                        header: (0, s.jsx)(d.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, s.jsx)(f.A, {
                            icon: (0, s.jsx)(d.Ay, {
                                style: {
                                    fontSize: "96px",
                                    width: "100%",
                                    height: "96px"
                                },
                                children: (0, s.jsx)(v, {})
                            }),
                            title: g("CannotClaimReward", "Cannot Claim Reward"),
                            description: g("CannotClaimReward-needKyc", "You can only claim this reward after completing identity verification."),
                            actions: (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)(p.qO, {
                                    to: k,
                                    hybrid: "bnc://app.binance.com/account/identityAuthentication",
                                    className: "ul-width-full",
                                    children: (0, s.jsx)(u.A, {
                                        as: "div",
                                        variant: "primary",
                                        className: "ul-width-full",
                                        children: g("verifyIdentityNow", "Verify Identity Now")
                                    })
                                })
                            })
                        })
                    }) : (0, s.jsx)(m.J, (0, n.A)((0, r.A)({}, c), {
                        visible: A,
                        header: (0, s.jsx)(d.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, s.jsx)(h.A, {
                            icon: (0, s.jsx)(d.Ay, {
                                style: {
                                    fontSize: "96px",
                                    width: "100%",
                                    height: "96px"
                                },
                                children: b.icon
                            }),
                            title: g(b.title.key, b.title.defaultValue),
                            description: g(b.desc.key, b.desc.defaultValue, {}, null === b || void 0 === b || null === (t = b.desc) || void 0 === t ? void 0 : t.components),
                            actions: (0, s.jsx)(u.A, {
                                className: "ul-width-full",
                                variant: "primary",
                                onClick: function() {
                                    T(!1)
                                },
                                children: g("ok", "OK")
                            })
                        })
                    }))
                }
        },
        epnA: (e, t, a) => {
            a.d(t, {
                X: () => Ne
            });
            var r = a("TrCV"),
                n = a("eeEA"),
                i = a("O94r"),
                s = a.n(i),
                l = a("B0yh"),
                o = a("DTvD"),
                c = a.n(o),
                d = a("X4b0"),
                u = a("wIZF");

            function h(e) {
                var t = e.img;
                return new Promise((function(e, a) {
                    (function(e) {
                        var t = e.img;
                        return new Promise((function(e) {
                            return e(t)
                        }))
                    })({
                        img: t
                    }).then((function(t) {
                        if (/^http/i.test(t)) {
                            var r = new Image;
                            r.addEventListener("load", (function() {
                                return e(t)
                            })), r.addEventListener("error", (function() {
                                return a(new Error("img load error"))
                            })), r.src = t
                        } else a("image path is null")
                    }))
                }))
            }
            var p = a("4kma"),
                m = a("9xbI");
            const f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inViewPort = function() {
                            var e = t.$refs.root,
                                a = t.props,
                                r = a.isBackground;
                            h({
                                img: a.src
                            }).then((function(t) {
                                e.style.backgroundColor = "transparent", r ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(t, "')")) : e.src = t
                            })).catch((function() {
                                return null
                            }))
                        }, t
                    }
                    return (0, u.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            a = (e.check, e.lazyLoad, e.isBackground),
                            r = (0, u.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return c().createElement(m.A, (0, u.__assign)({}, r, {
                            "data-src": t,
                            ref: this.setRefs("root"),
                            as: a ? "div" : "img"
                        }))
                    }, t
                }(p.A),
                y = (0, o.forwardRef)((function(e, t) {
                    var a = e.lazyLoad,
                        r = e.src,
                        n = e.isBackground,
                        i = e.check,
                        s = (0, u.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return a || n ? c().createElement(f, (0, u.__assign)({
                        lazyLoad: a,
                        src: r,
                        isBackground: n,
                        check: i
                    }, s)) : c().createElement(m.A, (0, u.__assign)({}, s, {
                        as: "img",
                        ref: t,
                        src: r,
                        "data-src": r
                    }))
                }));
            var g = a("qrIQ"),
                v = a("fvKX"),
                x = a("GmLw").hp,
                w = "/bapi/fe/resource/image",
                C = "https://www.binance.com",
                A = function(e) {
                    var t, a = e.isRound,
                        r = e.isMask,
                        i = e.mode,
                        l = e.responsive,
                        d = e.src,
                        h = (0, u.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        p = (0, o.useState)(!1),
                        m = p[0],
                        f = p[1],
                        A = (0, v.r)().prefixCls,
                        T = s()("".concat(A, "-lazy-img"), ((t = {
                            "data-mask": !!r,
                            "data-round": !!a,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === i || void 0 === i ? void 0 : i.replace(/\s+/g, "-"))] = !!i, t), e.className),
                        k = (0, o.useCallback)((function() {
                            return f(!0)
                        }), []),
                        b = (0, o.useMemo)((function() {
                            return !(l && (l.mobile || l.tablet || l.desktop)) || m ? {
                                default: d
                            } : Object.keys(l).reduce((function(e, t) {
                                return e[t] = function(e, t) {
                                    var a = x.from(e).toString("base64");
                                    try {
                                        var r = new URL(w, "https://www.binance.com");
                                        return r.searchParams.set("image", a), Object.entries(t).forEach((function(e) {
                                            var t = e[0],
                                                a = e[1];
                                            void 0 !== a && r.searchParams.set(t, String(a))
                                        })), "".concat(r.pathname).concat(r.search)
                                    } catch (n) {
                                        return "".concat(w, "?image=").concat(a, "&w=").concat(t.w, "&h=").concat(t.h)
                                    }
                                }(d, l[t]), e
                            }), {})
                        }), [d, l, m]),
                        L = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in b) return c().createElement(y, (0, u.__assign)({}, L, h, {
                        className: T,
                        mode: i,
                        src: b.default
                    }));
                    var j = b.mobile,
                        S = b.tablet,
                        _ = b.desktop;
                    if (g.lq) {
                        var E = env.API_HOST || C,
                            M = "".concat(E).concat(j || S || _);
                        return c().createElement(y, (0, u.__assign)({}, L, {
                            onError: k
                        }, h, {
                            className: T,
                            mode: i,
                            src: M
                        }))
                    }
                    return c().createElement(n.Ay, {
                        as: "picture"
                    }, c().createElement(n.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: _
                    }), S && c().createElement(n.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: S
                    }), j && c().createElement(n.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: j
                    }), c().createElement(y, (0, u.__assign)({}, L, {
                        onError: k
                    }, h, {
                        className: T,
                        mode: i,
                        src: _ || d
                    })))
                };
            A.displayName = "Image";
            const T = A;
            var k = a("W2aP"),
                b = a("HyIL"),
                L = a("GlkT"),
                j = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, u.__extends)(t, e), t.prototype.trackPath = function(e) {
                        var t = parseInt("".concat(50 - e / 2), 10);
                        return "M 50 50 m 0 -".concat(t, " a ").concat(t, " ").concat(t, " 0 1 1 0 ").concat(2 * t, " a ").concat(t, " ").concat(t, " 0 1 1 0 -").concat(2 * t)
                    }, t.prototype.perimeter = function(e) {
                        return 2 * Math.PI * (50 - e / 2)
                    }, t.prototype.circlePathStyle = function(e, t, a) {
                        var r = this.props.total,
                            n = this.perimeter(a);
                        return {
                            strokeDasharray: "".concat(n, "px,").concat(n, "px"),
                            strokeDashoffset: "".concat((1 - e / r) * n, "px"),
                            transition: "stroke-dashoffset ".concat(t, ", stroke ").concat(t)
                        }
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            a = e.color,
                            r = e.strokeWidth,
                            n = void 0 === r ? 5.8 : r,
                            i = e.outerColor,
                            s = void 0 === i ? "#E5E9F2" : i,
                            l = e.total,
                            o = this.state.value,
                            d = this.trackPath(n),
                            h = "".concat(this.getTime() || 0, "ms"),
                            p = {
                                d: d,
                                strokeWidth: n,
                                stroke: s
                            },
                            m = {
                                d: d,
                                strokeWidth: n,
                                stroke: a,
                                style: this.circlePathStyle(o, h, n)
                            },
                            f = (0, L.q)({
                                percent: o,
                                total: l
                            });
                        return c().createElement("div", (0, u.__assign)({}, f, {
                            className: t,
                            ref: this.setRefs("root")
                        }), c().createElement("svg", {
                            viewBox: "0 0 100 100"
                        }, c().createElement("path", (0, u.__assign)({}, p, {
                            fill: "none"
                        })), c().createElement("path", (0, u.__assign)({}, m, {
                            fill: "none",
                            strokeLinecap: "round"
                        }))), this.props.children)
                    }, t
                }(L.A);
            const S = j;
            var _ = 1e3 / 60,
                E = function(e) {
                    return "function" === typeof e
                },
                M = function(e, t, a, r, n) {
                    var i = e / r - 1,
                        s = a * (i * i * i + 1) + t;
                    return n ? s.toFixed(n) : Math.round(s)
                },
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.$rafFunc = null, t.step = function() {
                            var e = t,
                                a = e.state,
                                r = a.value,
                                n = a.distance,
                                i = ("".concat(r).split(".")[1] || "".concat(n).split(".")[1] || "").length,
                                s = r - n;
                            E(t.$rafFunc) && t.$rafFunc();
                            var l = t.getTime(),
                                o = 1,
                                c = Math.ceil(l / _);
                            ! function t() {
                                var a = e.$refs.root,
                                    l = o >= c ? r : M(o++, s, n, c, i),
                                    d = n > 0 ? l >= r : l <= r;
                                e.$rafFunc = d ? null : requestAnimationFrame(t), a instanceof Element && (a.innerHTML = d ? r : o % 2 === 0 ? l : a.innerHTML)
                            }()
                        }, t
                    }
                    return (0, u.__extends)(t, e), t.prototype.componentWillUnmount = function() {
                        e.prototype.componentWillUnmount.call(this), E(this.$rafFunc) && this.$rafFunc()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            a = e.total,
                            r = e.value,
                            n = (0, L.q)({
                                percent: r,
                                total: a
                            });
                        return c().createElement("span", (0, u.__assign)({}, n, {
                            className: t,
                            ref: this.setRefs("root")
                        }))
                    }, t
                }(L.A);
            const N = R;
            var B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, u.__extends)(t, e), t.prototype.lineStyle = function(e, t) {
                    var a = this.props,
                        r = a.color,
                        n = (100 * e / a.total).toFixed(2);
                    return {
                        background: r,
                        width: "".concat(n || 0, "%"),
                        transitionDuration: t
                    }
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.outerColor,
                        r = e.total,
                        n = this.state.value,
                        i = "".concat(this.getTime() || 0, "ms"),
                        s = this.lineStyle(n, i),
                        l = {
                            background: a
                        },
                        o = (0, L.q)({
                            percent: n,
                            total: r
                        });
                    return c().createElement("div", (0, u.__assign)({}, o, {
                        className: t,
                        style: l,
                        ref: this.setRefs("root")
                    }), c().createElement("div", {
                        className: "bar-inner",
                        style: s
                    }), this.props.children)
                }, t
            }(L.A);
            const V = B;
            const D = function(e) {
                var t = e.type,
                    a = void 0 === t ? "bar" : t,
                    r = e.className,
                    n = (0, u.__rest)(e, ["type", "className"]),
                    i = (0, v.r)().prefixCls,
                    l = s()("".concat(i, "-progress__").concat(a), r);
                if (g.lq) throw new Error("this component only use Web side");
                return "circle" === a ? c().createElement(S, (0, u.__assign)({}, n, {
                    className: l
                })) : "number" === a ? c().createElement(N, (0, u.__assign)({}, n, {
                    className: l
                })) : c().createElement(V, (0, u.__assign)({}, n, {
                    className: l
                }))
            };
            var O = function(e) {
                    var t = e.rootClz,
                        a = e.percent,
                        r = e.style,
                        i = "".concat(t, "-bar"),
                        s = {
                            total: 100,
                            color: "var(--color-TextOnGray)",
                            outerColor: "var(--color-SecondaryText)",
                            className: "".concat(i, "-progress")
                        };
                    return c().createElement(n.Ay, {
                        className: i,
                        style: r
                    }, c().createElement(n.Ay, {
                        className: "".concat(i, "-percent"),
                        children: "".concat(a, "%")
                    }), c().createElement(b.Ay, (0, u.__assign)({}, s, {
                        value: a,
                        strokeWidth: 4
                    })))
                },
                P = g.lq ? O : function(e) {
                    var t = e.rootClz,
                        a = e.percent,
                        r = e.variant,
                        i = e.style,
                        s = "".concat(t, "-circle"),
                        l = "circle-secondary" === r,
                        o = function(e, t, a) {
                            return e ? a : t
                        },
                        d = {
                            total: 100,
                            color: o(l, "var(--color-RedGreenBgText)", "var(--color-BtnBg)"),
                            outerColor: o(l, "var(--color-DisableText)", "var(--color-DisableBtn)"),
                            className: "".concat(s, "-progress")
                        };
                    return c().createElement(n.Ay, {
                        className: s,
                        style: (0, u.__assign)({
                            width: "52px",
                            height: "52px"
                        }, i)
                    }, !l && c().createElement(n.Ay, {
                        className: "".concat(s, "-percent"),
                        children: "".concat(a, "%")
                    }), c().createElement(D, (0, u.__assign)({}, d, {
                        type: "circle",
                        value: a,
                        strokeWidth: 8
                    })))
                },
                U = function(e) {
                    var t = e.rootClz,
                        a = e.percent,
                        r = e.style,
                        i = "".concat(t, "-dot"),
                        s = "a".repeat(15).split(""),
                        l = (0, o.useCallback)((function(e) {
                            return a > e * Math.round(100 / 15) ? "active" : ""
                        }), [a]),
                        d = (0, L.q)({
                            percent: a,
                            total: 100
                        });
                    return c().createElement(n.Ay, (0, u.__assign)({}, d, {
                        className: i,
                        style: r
                    }), c().createElement(n.Ay, {
                        className: "".concat(i, "-percent"),
                        children: "".concat(a, "%")
                    }), c().createElement(n.Ay, {
                        className: "".concat(i, "-progress")
                    }, s.map((function(e, t) {
                        return c().createElement(n.Ay, {
                            key: t,
                            className: l(t)
                        })
                    }))))
                };
            const I = function(e) {
                var t, a = e.variant,
                    r = void 0 === a ? "primary" : a,
                    i = e.percent,
                    l = void 0 === i ? 0 : i,
                    o = e.message,
                    d = void 0 === o ? "Loading" : o,
                    h = e.progressStyle,
                    p = (0, u.__rest)(e, ["variant", "percent", "message", "progressStyle"]),
                    m = (0, v.r)(),
                    f = m.prefixCls,
                    y = m.isRTL,
                    g = "".concat(f, "-loading"),
                    x = s()(g, ((t = {})["".concat(g, "-rtl")] = !!y, t["".concat(g, "__").concat(r)] = r, t), e.className);
                if (["primary", "secondary"].includes(r)) return c().createElement(n.Ay, (0, u.__assign)({}, p, {
                    className: x
                }), "primary" === r && c().createElement(n.Ay, {
                    className: "".concat(g, "-box")
                }), c().createElement(k.A, {
                    className: "".concat(g, "-nezha")
                }));
                var w = {
                    bar: O,
                    dot: U,
                    circle: P,
                    "circle-secondary": P
                }[r] || O;
                return c().createElement(n.Ay, (0, u.__assign)({}, p, {
                    className: x
                }), c().createElement(w, {
                    rootClz: g,
                    percent: l,
                    variant: r,
                    style: h
                }), d && c().createElement(n.Ay, {
                    className: "".concat(g, "-message"),
                    children: d
                }))
            };
            var F = a("D4P9"),
                Z = a("xE8/"),
                H = a("k5JY"),
                G = a("28x1"),
                W = a("yiIT"),
                K = a("GfFo"),
                q = a("Y4uf"),
                Y = function(e) {
                    return (0, r.jsxs)(q.A, {
                        width: "247",
                        height: "130",
                        viewBox: "0 0 247 130",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("mask", {
                            id: "mask0_3254_85385",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "0",
                            y: "0",
                            width: "247",
                            height: "130",
                            children: (0, r.jsx)("rect", {
                                width: "247",
                                height: "130",
                                fill: "#D9D9D9"
                            })
                        }), (0, r.jsxs)("g", {
                            mask: "url(#mask0_3254_85385)",
                            children: [(0, r.jsx)("path", {
                                d: "M165.039 75.3367L165.051 80.1575L169.872 80.1693L169.86 75.3485L165.039 75.3367Z",
                                fill: "#F0B90B"
                            }), (0, r.jsx)("path", {
                                d: "M91.3379 99.2105L97.6864 99.1949L97.7019 92.8465L91.3534 92.862L91.3379 99.2105Z",
                                fill: "#F0B90B"
                            }), (0, r.jsx)("path", {
                                d: "M185.98 57.5785H188.934V54.6387H185.98V57.5785Z",
                                fill: "#F0B90B"
                            }), (0, r.jsx)("path", {
                                d: "M178.213 105.317H181.167V102.377H178.213V105.317Z",
                                fill: "#F0B90B"
                            }), (0, r.jsx)("path", {
                                opacity: "0.5",
                                d: "M144.447 81.169L162.169 63.5336C166.558 59.1653 169.024 53.5717 169.024 47.394L169.024 39.2414H136.254V123.097H169.024V114.944C169.024 108.766 166.558 103.173 162.169 98.8044L144.447 81.169Z",
                                fill: "url(#paint0_linear_3254_85385)"
                            }), (0, r.jsx)("path", {
                                opacity: "0.5",
                                d: "M103.485 123.097V114.944C103.485 108.766 105.951 103.173 110.34 98.8043L128.062 81.1689L110.34 63.5335C105.951 59.1652 103.485 53.5715 103.485 47.3938L103.485 39.2412L136.255 39.2412L136.255 123.097H103.485Z",
                                fill: "#AEB4BC"
                            }), (0, r.jsx)("path", {
                                d: "M169.024 123.097L103.484 123.097L103.484 127.755L169.024 127.755L169.024 123.097Z",
                                fill: "#D0980B"
                            }), (0, r.jsx)("path", {
                                d: "M169.024 34.582L103.484 34.582L103.484 39.2407L169.024 39.2407L169.024 34.582Z",
                                fill: "#D0980B"
                            }), (0, r.jsx)("path", {
                                d: "M151.469 67.5928L138.595 80.404L138.595 102.132L147.958 111.45L164.001 111.45C164.228 112.584 164.343 113.751 164.343 114.944L164.343 123.097L108.166 123.097L108.166 115.275C108.166 113.98 108.301 112.699 108.564 111.45L124.551 111.45L133.914 102.132L133.914 80.404L121.04 67.5928L151.469 67.5928Z",
                                fill: "url(#paint1_linear_3254_85385)"
                            }), (0, r.jsx)("path", {
                                d: "M86.5945 37.0575L71.524 37.0575C68.4028 37.0576 65.8726 34.5273 65.8726 31.4061V21.6104",
                                stroke: "#181A20",
                                strokeWidth: "12.0564"
                            }), (0, r.jsx)("g", {
                                style: {
                                    mixBlendMode: "soft-light"
                                },
                                opacity: "0.6",
                                children: (0, r.jsx)("path", {
                                    d: "M86.5945 37.0575L71.524 37.0575C68.4028 37.0576 65.8726 34.5273 65.8726 31.4061V21.6104",
                                    stroke: "url(#paint2_linear_3254_85385)",
                                    strokeWidth: "12.0564"
                                })
                            }), (0, r.jsx)("rect", {
                                x: "103.571",
                                y: "113.678",
                                width: "10.5498",
                                height: "3.39102",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("rect", {
                                width: "10.5498",
                                height: "3.39102",
                                transform: "matrix(-1 0 0 1 99.0486 113.678)",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("path", {
                                d: "M103.571 127.618V117.068H114.12L124.67 127.618H103.571Z",
                                fill: "#935A30"
                            }), (0, r.jsx)("path", {
                                d: "M99.0486 127.618V117.068H88.4987L77.9489 127.618H99.0486Z",
                                fill: "#935A30"
                            }), (0, r.jsx)("path", {
                                d: "M106.585 113.678L106.585 83.0716L106.585 63.9428",
                                stroke: "#328DFD",
                                strokeWidth: "15.0705"
                            }), (0, r.jsx)("g", {
                                style: {
                                    mixBlendMode: "soft-light"
                                },
                                opacity: "0.6",
                                children: (0, r.jsx)("path", {
                                    d: "M106.585 63.9424L106.585 94.5485L106.585 113.677",
                                    stroke: "url(#paint3_linear_3254_85385)",
                                    strokeWidth: "15.0712"
                                })
                            }), (0, r.jsx)("path", {
                                d: "M91.5137 63.9424L91.5137 113.677",
                                stroke: "#328DFD",
                                strokeWidth: "15.0712"
                            }), (0, r.jsx)("path", {
                                d: "M113.803 37.0581L129.034 37.0581C134.031 37.0581 136.533 43.0998 133 46.6334L121.928 57.7049",
                                stroke: "#181A20",
                                strokeWidth: "12.0564"
                            }), (0, r.jsx)("g", {
                                style: {
                                    mixBlendMode: "soft-light"
                                },
                                opacity: "0.6",
                                children: (0, r.jsx)("path", {
                                    d: "M113.803 37.0581L129.034 37.0581C134.031 37.0581 136.533 43.0998 133 46.6334L121.928 57.7049",
                                    stroke: "url(#paint4_linear_3254_85385)",
                                    strokeWidth: "12.0564"
                                })
                            }), (0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M93.2281 31.0293L99.6596 37.4611L106.091 31.0293L115.863 31.0293L115.863 64.1843L82.7083 64.1843L82.7083 31.0293L93.2281 31.0293Z",
                                fill: "#181A20"
                            }), (0, r.jsx)("rect", {
                                x: "114.042",
                                y: "60.0967",
                                width: "5.65142",
                                height: "13.1866",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("path", {
                                d: "M65.8162 2.9043L58.3567 10.3638L65.8162 17.8233L73.2757 10.3638L65.8162 2.9043Z",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("circle", {
                                cx: "97.7533",
                                cy: "14.0458",
                                r: "9.79579",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("path", {
                                d: "M107.549 14.0184C107.549 19.4285 103.163 23.8142 97.7533 23.8142C92.3432 23.8142 87.9575 19.4285 87.9575 14.0184C87.9575 8.60838 92.3432 4.22266 97.7533 4.22266C103.163 4.22266 107.549 8.60838 107.549 14.0184Z",
                                fill: "#E8A37D"
                            }), (0, r.jsx)("path", {
                                d: "M97.7533 4.22461C92.3432 4.22461 87.9575 8.61034 87.9575 14.0204L107.549 14.0204C107.549 8.61033 103.163 4.22461 97.7533 4.22461Z",
                                fill: "#E56700"
                            }), (0, r.jsx)("g", {
                                style: {
                                    mixBlendMode: "soft-light"
                                },
                                opacity: "0.6",
                                children: (0, r.jsx)("path", {
                                    d: "M97.7533 4.22461C92.3432 4.22461 87.9575 8.61034 87.9575 14.0204L107.549 14.0204C107.549 8.61033 103.163 4.22461 97.7533 4.22461Z",
                                    fill: "url(#paint5_linear_3254_85385)"
                                })
                            }), (0, r.jsx)("g", {
                                style: {
                                    mixBlendMode: "soft-light"
                                },
                                opacity: "0.6",
                                children: (0, r.jsx)("path", {
                                    d: "M97.7533 23.8154C92.3432 23.8154 87.9575 19.4297 87.9575 14.0196L107.549 14.0196C107.549 19.4297 103.163 23.8154 97.7533 23.8154Z",
                                    fill: "url(#paint6_linear_3254_85385)"
                                })
                            })]
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_3254_85385",
                                x1: "169.024",
                                y1: "39.2414",
                                x2: "169.024",
                                y2: "123.097",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#AEB4BC",
                                    stopOpacity: "0.1"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.700556",
                                    stopColor: "#80858B"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint1_linear_3254_85385",
                                x1: "108.166",
                                y1: "95.3447",
                                x2: "164.343",
                                y2: "95.3447",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint2_linear_3254_85385",
                                x1: "84.6031",
                                y1: "44.5925",
                                x2: "66.5177",
                                y2: "26.507",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {}), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint3_linear_3254_85385",
                                x1: "106.585",
                                y1: "74.6348",
                                x2: "106.585",
                                y2: "99.6307",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {}), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint4_linear_3254_85385",
                                x1: "137.164",
                                y1: "52.2937",
                                x2: "121.927",
                                y2: "37.0572",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {}), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint5_linear_3254_85385",
                                x1: "107.398",
                                y1: "14.0739",
                                x2: "95.3415",
                                y2: "14.0739",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {}), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint6_linear_3254_85385",
                                x1: "107.398",
                                y1: "14.3694",
                                x2: "95.3415",
                                y2: "14.3694",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {}), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                },
                z = a("RApW"),
                Q = a("SDpl"),
                J = a("BK7R"),
                X = a("QUKP"),
                $ = a("LZsd"),
                ee = a("GuDP"),
                te = a("cNpm"),
                ae = {
                    checkScratchCardEligible: ["checkScratchCardEligible"],
                    getScratchCardInfo: ["getScratchCardInfo"],
                    remindMeWhenScratchCardStart: ["remindMeWhenScratchCardStart"],
                    claimScratchCardReward: ["claimScratchCardReward"]
                },
                re = a("2URn"),
                ne = {
                    mouse: {
                        down: "mousedown",
                        move: "mousemove",
                        up: "mouseup"
                    },
                    touch: {
                        down: "touchstart",
                        move: "touchmove",
                        up: "touchend"
                    }
                },
                ie = "StartScratching",
                se = "EndScratching",
                le = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = a.pixelRatio || 1,
                        n = e.clientWidth,
                        i = e.clientHeight;
                    e.width = n * r, e.height = i * r, t.scale(r, r), t.fillStyle = a.bgStyle || "", t.fillRect(0, 0, e.width, e.height), t.textAlign = a.textAlign || "center", t.font = a.font || "", t.fillStyle = a.textStyle || "", fe(t, a.caption || "", n / 2, i / 2 - 6, n - 24, 24)
                },
                oe = function(e, t) {
                    var a = t.x,
                        r = t.y;
                    e.globalCompositeOperation = "destination-out", e.beginPath(), e.arc(a, r, 12, 0, 2 * Math.PI), e.fill()
                },
                ce = function(e, t) {
                    var a = t.getBoundingClientRect(),
                        r = a.x,
                        n = a.y;
                    return {
                        x: ((0, re.A)(e, MouseEvent) ? e.clientX : e.touches[0].clientX) - r + 25,
                        y: ((0, re.A)(e, MouseEvent) ? e.clientY : e.touches[0].clientY) - n + 25
                    }
                },
                de = function() {
                    try {
                        return document.createEvent("TouchEvent"), "touch"
                    } catch (e) {
                        return "mouse"
                    }
                };

            function ue(e, t) {
                (t = t || 0) > 30 && e.parentNode && e.dispatchEvent(new Event(se))
            }

            function he(e, t) {
                (!t || t < 1) && (t = 1);
                for (var a = e.getImageData(0, 0, e.canvas.width, e.canvas.height).data, r = a.length, n = r / t, i = 0, s = i = 0; s < r; s += t) 0 === parseInt(a[s] + "") && i++;
                return Math.round(i / n * 100)
            }

            function pe(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }

            function me(e, t) {
                return Math.atan2(t.x - e.x, t.y - e.y)
            }

            function fe(e, t, a, r, n, i) {
                for (var s = t.split(" "), l = "", o = 0; o < s.length; o++) {
                    var c = l + s[o] + " ";
                    e.measureText(c).width > n && o > 0 ? (e.fillText(l, a, r), l = s[o] + " ", r += i) : l = c
                }
                e.fillText(l, a, r)
            }
            var ye = a("Q755"),
                ge = a("xrNQ"),
                ve = "".concat(W.K5, "/static/images/rewards-hub-ui/hand-cursor-light.svg"),
                xe = function(e) {
                    var t = e.caption,
                        a = e.children,
                        i = e.onStarted,
                        l = e.onCompleted,
                        c = e.showContent,
                        d = void 0 !== c && c,
                        u = (0, o.useRef)(),
                        h = (0, o.useState)(!d),
                        p = h[0],
                        m = h[1];
                    (0, ge.D)().isLight;
                    return (0, ye.A)((function() {
                        u.current && (! function(e) {
                            var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = e.getContext("2d"),
                                n = !1,
                                i = de(),
                                s = !1;
                            if (r) return le(e, r, a), e.addEventListener(ne[i].move, (function(a) {
                                if ((0, re.A)(a, TouchEvent) && a.preventDefault(), n) {
                                    for (var i, s, l = ce(a, e), o = pe(t, l), c = me(t, l), d = 0; d < o; d++) i = t.x + Math.sin(c) * d - 25, s = t.y + Math.cos(c) * d - 25, oe(r, {
                                        x: i,
                                        y: s
                                    });
                                    t = l, ue(e, he(r, 32))
                                }
                            })), e.addEventListener(ne[i].down, (function(a) {
                                n = !0, s || (e.dispatchEvent(new Event(ie)), s = !0), t = ce(a, e)
                            })), e.addEventListener(ne[i].up, (function() {
                                n = !1
                            })), e.addEventListener("mouseleave", (function() {
                                n = !1
                            })), r;
                            throw "Canvas has another contextId"
                        }(u.current, {
                            font: "16px BinancePlex",
                            textAlign: "center",
                            bgStyle: "#848E9C",
                            textStyle: "#EAECEF",
                            caption: t,
                            pixelRatio: window.devicePixelRatio
                        }), u.current.addEventListener(ie, (function() {
                            i && i()
                        })), u.current.addEventListener(se, (function() {
                            m(!1), l && l()
                        })))
                    })), (0, r.jsxs)(n.Ay, {
                        className: s()("ScratchCard", {
                            "ScratchCard--withCover": p
                        }),
                        children: [p && (0, r.jsx)(n.Ay, {
                            className: "ScratchCard-cover",
                            style: {
                                cursor: "url(".concat(ve, "), grabbing")
                            },
                            width: 264,
                            height: 116,
                            as: "canvas",
                            ref: u
                        }), (0, r.jsx)(n.Ay, {
                            className: "ScratchCard-content",
                            children: a
                        })]
                    })
                },
                we = a("Wffw"),
                Ce = a("gZfF"),
                Ae = a("Y1+p"),
                Te = function(e) {
                    return (0, r.jsxs)(q.A, (0, X.A)((0, J.A)({
                        viewBox: "0 0 96 96",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {
                        children: [(0, r.jsx)("path", {
                            opacity: "0.3",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M84.5005 68.0429L48.5005 92V8H84.5005V68.0429ZM73.4995 17.501L75.9995 20.001L78.4995 17.501L75.9995 15.001L73.4995 17.501ZM71.5005 57H74.5005V54H71.5005V57Z",
                            fill: "#AEB4BC"
                        }), (0, r.jsx)("path", {
                            opacity: "0.3",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48.5005 8L48.5005 92L12.5005 68V8.00001L48.5005 8ZM18.4995 46.501L22.9995 51.001L27.4995 46.501L22.9995 42.001L18.4995 46.501Z",
                            fill: "url(#paint0_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M65.4995 65.001L32.4995 65.001L32.4995 22.001L65.4995 22.001L65.4995 65.001Z",
                            fill: "url(#paint1_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M32.4995 72.001L65.4995 72.001L65.4995 65.001L32.4995 65.001L32.4995 72.001Z",
                            fill: "url(#paint2_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M32.4995 22.001L65.4995 22.001L65.4995 15.001L32.4995 15.001L32.4995 22.001Z",
                            fill: "url(#paint3_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M77.4995 27.001L39.4995 27.001L39.4995 47.001L48.4995 47.001L48.4995 59.001L60.4995 47.001L77.4995 47.001L77.4995 27.001Z",
                            fill: "url(#paint4_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M73.4995 31.001L43.4995 31.001L43.4995 35.001L73.4995 35.001L73.4995 31.001Z",
                            fill: "url(#paint5_linear_2002_64772)"
                        }), (0, r.jsx)("path", {
                            d: "M65.5005 39.001L43.4995 39.001L43.4995 43.001L65.5005 43.001L65.5005 39.001Z",
                            fill: "url(#paint6_linear_2002_64772)"
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_2002_64772",
                                x1: "48.5005",
                                y1: "92",
                                x2: "48.5005",
                                y2: "8",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#AEB4BC",
                                    stopOpacity: "0.1"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.700556",
                                    stopColor: "#AEB4BC"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint1_linear_2002_64772",
                                x1: "32.4995",
                                y1: "43.501",
                                x2: "65.4995",
                                y2: "43.501",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint2_linear_2002_64772",
                                x1: "65.4995",
                                y1: "43.501",
                                x2: "32.4995",
                                y2: "43.501",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#929AA5"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76808F"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint3_linear_2002_64772",
                                x1: "65.4995",
                                y1: "43.501",
                                x2: "32.4995",
                                y2: "43.501",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#929AA5"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76808F"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint4_linear_2002_64772",
                                x1: "77.4995",
                                y1: "43.001",
                                x2: "39.4995",
                                y2: "43.001",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#929AA5"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#76808F"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint5_linear_2002_64772",
                                x1: "43.4995",
                                y1: "37.001",
                                x2: "73.4995",
                                y2: "37.001",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint6_linear_2002_64772",
                                x1: "43.4995",
                                y1: "37.001",
                                x2: "73.4995",
                                y2: "37.001",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    }))
                },
                ke = a("fCDO"),
                be = a("XxiJ"),
                Le = function(e) {
                    var t = e.scratchcardId,
                        a = e.trigger,
                        i = e.triggerClass,
                        c = e.onClose,
                        d = e.onSuccess,
                        u = void 0 === d ? function() {} : d,
                        h = (0, Ce.A)(e, ["scratchcardId", "trigger", "triggerClass", "onClose", "onSuccess"]),
                        p = (0, l.Bd)().t,
                        m = (0, o.useState)(!1),
                        f = m[0],
                        y = m[1],
                        g = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (0, ee.n)((0, J.A)({
                                mutationKey: ae.remindMeWhenScratchCardStart,
                                mutationFn: function(e) {
                                    return (0, te.Ou)(e)
                                }
                            }, e))
                        }(),
                        v = g.isLoading,
                        x = g.mutate,
                        w = g.data,
                        C = g.reset,
                        A = (0, K.HT)({
                            elementID: W.M7.FLASHVOUCHER_REMINDER
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n.Ay, {
                            role: "button",
                            className: s()(i),
                            onClick: function() {
                                y(!0)
                            },
                            children: (0, r.jsx)(r.Fragment, {
                                children: a
                            })
                        }), (0, r.jsxs)(Ae.J, (0, X.A)((0, J.A)({}, h), {
                            className: "ScratchCardRemindMeModal",
                            visible: f,
                            showClose: !0,
                            onClose: function() {
                                y(!1), C(), c && c()
                            },
                            footer: (0, r.jsxs)(n.Ay, {
                                className: "ScratchCardRemindMeModal-footer",
                                children: [!w && (0, r.jsx)(r.Fragment, {
                                    children: (0, r.jsx)(F.A, {
                                        loading: v,
                                        variant: "primary",
                                        className: "ul-flex-1",
                                        onClick: function() {
                                            x({
                                                scratchcardId: t
                                            }), A()
                                        },
                                        children: p("confirm", "Confirm")
                                    })
                                }), w && (0, r.jsx)(F.A, {
                                    variant: "primary",
                                    className: "ul-flex-1",
                                    onClick: u,
                                    children: p("ok", "OK")
                                })]
                            }),
                            children: [(0, r.jsxs)(n.Ay, {
                                className: "ScratchCardRemindMeModal-logo",
                                children: [!w && (0, r.jsx)(Te, {}), (null === w || void 0 === w ? void 0 : w.code) === W.Uc.SUCCESS && (0, r.jsx)(ke.G, {}), w && w.code !== W.Uc.SUCCESS && (0, r.jsx)(be.A, {})]
                            }), (0, r.jsxs)(n.Ay, {
                                className: "ScratchCardRemindMeModal-title",
                                children: [!w && p("ScratchCardRemindMeModal-title", "Create notification?"), (null === w || void 0 === w ? void 0 : w.code) === W.Uc.SUCCESS && p("ScratchCardRemindMeModal-success", "Notification Created"), w && w.code !== W.Uc.SUCCESS && p("error", "Error")]
                            }), (0, r.jsxs)(n.Ay, {
                                className: "ScratchCardRemindMeModal-subTitle",
                                children: [!w && p("ScratchCardRemindMeModal-subTitle", "We will notify you 10 minutes before you could claim the voucher."), (null === w || void 0 === w ? void 0 : w.code) === W.Uc.SUCCESS && p("ScratchCardRemindMeModal-success-desc", "You will receive a notification 10 minutes before you could claim the voucher."), w && w.code !== W.Uc.SUCCESS && p("ScratchCardRemindMeModal-error-desc", "Failed to create the notification. Please try again later.")]
                            })]
                        }))]
                    })
                },
                je = a("tY2v"),
                Se = [{
                    key: "scratchCard-rule-1",
                    defaultValue: "This campaign will run from 2023-05-22 to 2023-05-28."
                }, {
                    key: "scratchCard-rule-2",
                    defaultValue: "During the campaign period, there will be 3 rounds each day for users to claim vouchers (00:00, 08:00, and 16:00 UTC+0)."
                }, {
                    key: "scratchCard-rule-3",
                    defaultValue: "Each user will be able to claim one voucher in each round."
                }, {
                    key: "scratchCard-rule-4",
                    defaultValue: "Vouchers in this campaign are available on a first-come, first-served basis."
                }, {
                    key: "scratchCard-rule-5",
                    defaultValue: "Vouchers in this campaign are allocated to users on a completely random basis."
                }, {
                    key: "scratchCard-rule-6",
                    defaultValue: "Users who have not completed their identity verification are not allowed to participate in this campaign. Please ensure that you have completed your identity verification before claiming the vouchers."
                }, {
                    key: "scratchCard-rule-7",
                    defaultValue: "This campaign is open to users registered and located in all regions, except for: BD, ID, IN, NG, AR, SG."
                }],
                _e = function(e) {
                    var t = e.trigger,
                        a = e.onVisibleChange,
                        i = (0, l.Bd)().t;
                    return (0, r.jsx)(je.J, {
                        title: i("rules", "Rules"),
                        okText: i("ok", "OK"),
                        trigger: t,
                        onVisibleChange: a,
                        children: (0, r.jsx)(n.Ay, {
                            as: "ul",
                            className: "ScratchCardRulesModal-ruleList",
                            children: Se.map((function(e, t) {
                                return (0, r.jsx)(n.Ay, {
                                    as: "li",
                                    className: "ScratchCardRulesModal-rule",
                                    children: "".concat(t + 1, ". ").concat(i(e.key, e.defaultValue))
                                }, e.key)
                            }))
                        })
                    })
                },
                Ee = "".concat(W.K5, "/static/images/rewards-hub-ui/scratch-card-logo.svg"),
                Me = function(e) {
                    var t, a, i, c = e.trigger,
                        u = e.triggerClassName,
                        h = (0, o.useState)(!1),
                        p = h[0],
                        m = h[1],
                        f = (0, l.Bd)().t,
                        y = (0, l.eC)("/vouchers"),
                        g = (0, o.useState)(!0),
                        v = g[0],
                        x = g[1],
                        w = (0, o.useState)(!1),
                        C = w[0],
                        A = w[1],
                        k = (0, o.useState)("not-started"),
                        b = k[0],
                        L = k[1],
                        j = (i = {
                            onSuccess: function(e) {
                                var t = Date.now();
                                if (null === e || void 0 === e ? void 0 : e.scratchcardInfo) {
                                    var a = e.scratchcardInfo,
                                        r = a.startTime,
                                        n = a.endTime;
                                    r <= t && t <= n && L("started"), t > n && L("completed"), x(e.scratchcardInfo.startTime - Date.now() <= 6e5), A(e.scratchcardInfo.isRemindMeEnable)
                                }
                            }
                        }, (0, $.I)((0, X.A)((0, J.A)({}, i), {
                            queryKey: ae.getScratchCardInfo,
                            queryFn: function() {
                                return (0, te.XL)()
                            }
                        }))),
                        S = j.data,
                        _ = j.isLoading,
                        E = j.refetch,
                        M = j.remove,
                        R = (0, ee.n)({
                            mutationKey: ae.claimScratchCardReward,
                            mutationFn: function(e) {
                                return (0, te.Ch)(e)
                            }
                        }),
                        N = R.mutate,
                        B = R.data,
                        V = R.isLoading,
                        D = R.reset,
                        O = null === B || void 0 === B || null === (t = B.data) || void 0 === t ? void 0 : t.voucherInfo,
                        P = null === (a = S) || void 0 === a ? void 0 : a.scratchcardInfo;
                    (0, K.QN)({
                        elementID: W.M7.FLASHVOUCHER_BANNER
                    });
                    var U = (0, K.HT)({
                            elementID: W.M7.FLASHVOUCHER_BANNER
                        }),
                        q = (0, K.Bk)(W.WW.MODULE_VIEW, {
                            elementID: W.M7.FLASHVOUCHER_POPUP
                        }),
                        re = (0, K.HT)({
                            elementID: W.M7.FLASHVOUCHER_POPUP
                        }),
                        ne = function() {
                            m(!1), D(), L("not-started"), x(!0), M()
                        };
                    return (0, o.useEffect)((function() {
                        !_ && p && q()
                    }), [_, p]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n.Ay, {
                            role: "button",
                            className: s()(u),
                            onClick: function() {
                                m(!0), E(), U()
                            },
                            children: (0, r.jsx)(r.Fragment, {
                                children: c
                            })
                        }), (0, r.jsxs)(H.Ay, {
                            visible: p,
                            className: "ScratchCardModal",
                            enablePortal: !0,
                            children: [(0, r.jsx)(n.Ay, {
                                className: "ScratchCardModal-logo",
                                children: (0, r.jsx)(n.Ay, {
                                    className: "ScratchCardModal-logo-layerOne",
                                    children: (0, r.jsx)(T, {
                                        src: Ee,
                                        mode: "widthFix"
                                    })
                                })
                            }), (0, r.jsx)(H.Ay.Header, {
                                className: "ScratchCardModal-header",
                                children: (0, r.jsx)(n.Ay, {
                                    onClick: ne,
                                    role: "button",
                                    className: s()("ScratchCardModal-header-closeMark", {
                                        "ul-hidden": "scratching" === b
                                    }),
                                    children: (0, r.jsx)(d.A, {
                                        name: "CloseF"
                                    })
                                })
                            }), (0, r.jsxs)(n.Ay, {
                                className: "ScratchCardModal-wrap",
                                children: [_ && (0, r.jsx)(I, {
                                    variant: "primary"
                                }), !_ && P && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsxs)(H.Ay.Content, {
                                        className: "ScratchCardModal-content",
                                        children: [(0, r.jsx)(n.Ay, {
                                            className: "ScratchCardModal-title",
                                            children: f("ScratchCardModal-title", "Flash Vouchers")
                                        }), "not-started" === b && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(n.Ay, {
                                                className: "ScratchCardModal-subTitle",
                                                children: [f("startsIn", "Starts In"), ":"]
                                            }), (0, r.jsx)(G.K, {
                                                className: "ul-justify-center",
                                                duration: P.startTime - Date.now(),
                                                variant: "secondary",
                                                onCompleted: function() {
                                                    L("started")
                                                }
                                            }, P.startTime)]
                                        }), ("started" === b || "scratching" === b) && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(n.Ay, {
                                                className: "ScratchCardModal-subTitle",
                                                children: [f("endsIn", "Ends In"), ":"]
                                            }), (0, r.jsx)(G.K, {
                                                className: "ul-justify-center",
                                                duration: P.endTime - Date.now(),
                                                variant: "secondary",
                                                onCompleted: function() {
                                                    L("completed")
                                                }
                                            }, P.endTime)]
                                        }), "completed" === b && (0, r.jsx)(r.Fragment, {
                                            children: (0, r.jsx)(n.Ay, {
                                                className: "ScratchCardModal-subTitle",
                                                children: O ? (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsx)(n.Ay, {
                                                        children: f("ScratchCard-congratulation", "Congratulations!")
                                                    }), (0, r.jsx)(n.Ay, {
                                                        children: f("ScratchCard-youClaimedAMysteryVoucher", "You claimed a mystery voucher.")
                                                    })]
                                                }) : (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsx)(n.Ay, {
                                                        children: f("ScratchCard-noMoreVoucher", "All vouchers have been claimed.")
                                                    }), P.nextStartTime && (0, r.jsx)(n.Ay, {
                                                        children: f("ScratchCard-catchNextVoucher", "Catch the next vouchers drop at {{nextStartTime}}.", {
                                                            nextStartTime: (0, z.r6)(P.nextStartTime)
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0, r.jsx)(n.Ay, {
                                            className: "ScratchCardModal-card",
                                            children: (0, r.jsxs)(n.Ay, {
                                                className: "ScratchCardModal-card-wrap",
                                                children: ["not-started" === b && (0, r.jsxs)(n.Ay, {
                                                    className: "ScratchCardModal-card-messageBox",
                                                    children: [(0, r.jsx)(n.Ay, {
                                                        className: "ScratchCardModal-card-message is-primary",
                                                        children: f("notTimeToScratch-title", "It\u2019s not time to scratch yet!")
                                                    }), (0, r.jsx)(n.Ay, {
                                                        className: "ScratchCardModal-card-subMessage",
                                                        children: f("notTimeToScratch-desc", "Be prepared to scratch off this area to reveal and claim your mystery voucher.")
                                                    })]
                                                }), "not-started" !== b && (0, r.jsxs)(xe, {
                                                    caption: f("ScartchCard-caption", "Scratch off here to reveal and claim your mystery voucher!"),
                                                    showContent: "completed" === b,
                                                    onStarted: function() {
                                                        N({
                                                            scratchcardId: P.cardId
                                                        }), L("scratching"), re()
                                                    },
                                                    onCompleted: function() {
                                                        L("completed")
                                                    },
                                                    children: [V && (0, r.jsx)(n.Ay, {
                                                        className: "ScratchCardModal-card-messageBox",
                                                        children: (0, r.jsx)(I, {
                                                            variant: "primary"
                                                        })
                                                    }), !V && !O && (0, r.jsx)(n.Ay, {
                                                        className: "ScratchCardModal-card-messageBox",
                                                        children: (0, r.jsxs)(n.Ay, {
                                                            className: "ScratchCardModal-card-message",
                                                            children: [f("betterLuckNextTime", "Better luck next time"), "..."]
                                                        })
                                                    }), O && (0, r.jsx)(Q.X, {
                                                        voucher: O,
                                                        variant: "minimized"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, r.jsx)(H.Ay.Footer, {
                                        className: "ScratchCardModal-footer",
                                        children: (0, r.jsxs)(r.Fragment, {
                                            children: ["not-started" === b && (0, r.jsxs)(r.Fragment, {
                                                children: [!v && !C && (0, r.jsx)(Le, {
                                                    scratchcardId: P.cardId,
                                                    triggerClass: "ScratchCardModal-cta",
                                                    onSuccess: function() {
                                                        A(!0)
                                                    },
                                                    trigger: (0, r.jsx)(F.A, {
                                                        variant: "primary",
                                                        className: "ul-width-full",
                                                        children: f("remindMe", "Remind Me")
                                                    })
                                                }), C && (0, r.jsx)(F.A, {
                                                    variant: "primary",
                                                    disabled: !0,
                                                    className: "ul-width-full",
                                                    children: f("notification-created", "Notification Created")
                                                })]
                                            }), "completed" === b && O && (0, r.jsx)(Z.qO, {
                                                to: y,
                                                className: "ScratchCardModal-cta ul-decoration-none",
                                                children: (0, r.jsx)(F.A, {
                                                    variant: "primary",
                                                    className: "ul-width-full",
                                                    children: f("viewVoucher", "View Voucher in Vouchers Page")
                                                })
                                            }), ("completed" !== b || "completed" === b && !O) && (0, r.jsx)(_e, {
                                                trigger: (0, r.jsx)(F.A, {
                                                    variant: "text",
                                                    className: "ScratchCardModal-viewRules",
                                                    children: f("viewRules", "View Rules")
                                                })
                                            })]
                                        })
                                    })]
                                }), !_ && !P && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsxs)(H.Ay.Content, {
                                        className: "ScratchCardModal-content",
                                        children: [(0, r.jsx)(n.Ay, {
                                            className: "ScratchCardModal-icon",
                                            children: (0, r.jsx)(Y, {})
                                        }), (0, r.jsx)(n.Ay, {
                                            className: "ScratchCardModal-title",
                                            children: f("ScratchCard-campaignEnded-title", "Campaign Ended")
                                        }), (0, r.jsx)(n.Ay, {
                                            className: "ScratchCardModal-subTitle",
                                            children: f("ScratchCard-campaignEnded-desc", "Flash Vouchers campaign has ended. See you next time!")
                                        })]
                                    }), (0, r.jsx)(H.Ay.Footer, {
                                        className: "ScratchCardModal-footer",
                                        children: (0, r.jsx)(F.A, {
                                            variant: "primary",
                                            className: "ul-width-full",
                                            onClick: ne,
                                            children: f("ok", "OK")
                                        })
                                    })]
                                })]
                            })]
                        }), !1 === (null === B || void 0 === B ? void 0 : B.success) && "210202" !== B.code && (0, r.jsx)(we.b, {
                            code: B.code,
                            onClose: ne
                        })]
                    })
                };
            const Re = function(e) {
                return (0, r.jsxs)(q.A, (0, X.A)((0, J.A)({
                    width: "91",
                    height: "91"
                }, e), {
                    viewBox: "0 0 91 91",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("g", {
                        filter: "url(#filter0_f_7078_23960)",
                        children: (0, r.jsx)("circle", {
                            cx: "44.6743",
                            cy: "46.1875",
                            r: "16.9201",
                            fill: "#F0B90B"
                        })
                    }), (0, r.jsx)("path", {
                        opacity: "0.9",
                        d: "M90.0962 45.9949C90.0962 70.8477 69.949 90.9949 45.0962 90.9949C20.2433 90.9949 0.0961609 70.8477 0.0961609 45.9949C0.0961609 21.1421 20.2433 0.994873 45.0962 0.994873C69.949 0.994873 90.0962 21.1421 90.0962 45.9949Z",
                        fill: "#1E2026"
                    }), (0, r.jsx)("path", {
                        opacity: "0.9",
                        d: "M90.0962 45.9949C90.0962 70.8477 69.949 90.9949 45.0962 90.9949C20.2433 90.9949 0.0961609 70.8477 0.0961609 45.9949C0.0961609 21.1421 20.2433 0.994873 45.0962 0.994873C69.949 0.994873 90.0962 21.1421 90.0962 45.9949Z",
                        fill: "#1E2026"
                    }), (0, r.jsx)("g", {
                        filter: "url(#filter1_f_7078_23960)",
                        children: (0, r.jsx)("ellipse", {
                            cx: "45.1478",
                            cy: "45.8834",
                            rx: "18.8159",
                            ry: "18.8159",
                            fill: "#F0B90B"
                        })
                    }), (0, r.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M55.1255 17.7521L55.126 17.7517L55.1261 17.7518L57.5215 15.3564L59.9137 17.7485L57.5183 20.1439L59.92 22.5457L62.3158 20.1499L64.7168 22.5509L62.3211 24.9467L64.5561 27.1818L66.9516 24.7863L69.3527 27.1873L66.9571 29.5828L69.3584 31.9841L71.7538 29.5886L74.2009 32.0356L71.7762 34.4603L71.7742 34.4584C70.3385 35.925 70.348 38.2778 71.8029 39.7326L71.8031 39.7329L38.5193 73.0167L38.5191 73.0164C37.0684 71.5657 34.7249 71.5521 33.2574 72.9755L33.2591 72.9772L30.8164 75.42L28.3693 72.9729L30.771 70.5713L28.3698 68.1702L25.9683 70.5717L23.5673 68.1706L25.9688 65.7691L23.7337 63.5341L21.3323 65.9355L18.9313 63.5345L21.3327 61.1331L18.9309 58.7313L16.5294 61.1328L14.1372 58.7406L16.589 56.2888C18.0032 54.8208 17.9865 52.4843 16.539 51.0367L49.823 17.7527C51.2875 19.2165 53.6613 19.2163 55.1255 17.7521Z",
                        fill: "#F0B90B"
                    }), (0, r.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M16.5389 51.0375L49.8229 17.7536C51.2873 19.2175 53.6612 19.2173 55.1255 17.753L55.126 17.7525L71.8034 34.4298C71.8032 34.43 71.803 34.4302 71.8028 34.4303C70.3384 35.8948 70.3384 38.2691 71.8028 39.7335C71.8029 39.7336 71.8029 39.7336 71.803 39.7337L38.5192 73.0175L38.519 73.0173C37.0546 71.5529 34.6804 71.5529 33.216 73.0172L16.5392 56.3404C18.0033 54.8759 18.0032 52.5019 16.5389 51.0375L16.5389 51.0375Z",
                        fill: "#F0B90B"
                    }), (0, r.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M67.427 38.807L38.3607 67.8732L38.3418 67.8541C37.1191 66.6314 35.1367 66.6314 33.914 67.854L21.6651 55.6052C22.8816 54.3887 22.8878 52.4203 21.6838 51.1961L50.731 22.1489C51.9552 23.3528 53.9236 23.3465 55.14 22.1301L55.1585 22.1115L67.4078 34.3607C66.1854 35.5835 66.1855 37.5657 67.4082 38.7883L67.427 38.807Z",
                        fill: "#F8D33A"
                    }), (0, r.jsx)("path", {
                        d: "M34.5437 58.7292L33.7512 57.9365L34.7245 56.9629L32.5332 54.771L32.48 54.8242L32.8949 56.5267L31.762 56.7235L31.2781 54.5688L32.8151 53.0313L35.735 55.9521L36.4211 55.2658L37.2136 56.0585L34.5437 58.7292Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M38.8709 54.5284C37.8444 55.5552 36.6424 55.3423 35.4298 54.1294C34.2171 52.9164 34.0044 51.714 35.0309 50.6872C36.0574 49.6604 37.2594 49.8732 38.472 51.0862C39.6846 52.2992 39.8974 53.5016 38.8709 54.5284ZM38.0252 53.6825C38.3603 53.3473 38.2167 53.044 37.7434 52.5706L36.9881 51.8151C36.5148 51.3416 36.2116 51.198 35.8765 51.5331C35.5415 51.8683 35.6851 52.1715 36.1584 52.645L36.9137 53.4005C37.387 53.874 37.6902 54.0176 38.0252 53.6825Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M42.06 51.3384C41.0335 52.3651 39.8315 52.1523 38.6188 50.9393C37.4062 49.7264 37.1935 48.524 38.22 47.4972C39.2464 46.4704 40.4484 46.6832 41.6611 47.8962C42.8737 49.1092 43.0864 50.3116 42.06 51.3384ZM41.2143 50.4925C41.5494 50.1573 41.4058 49.854 40.9324 49.3805L40.1772 48.6251C39.7038 48.1516 39.4007 48.0079 39.0656 48.3431C38.7305 48.6783 38.8741 48.9815 39.3475 49.455L40.1027 50.2105C40.5761 50.684 40.8792 50.8276 41.2143 50.4925Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M46.7932 46.6038C45.6816 47.7157 44.7721 47.6678 43.6658 46.5612L41.4746 44.3693L42.4638 43.3797L44.7296 45.6461C45.1391 46.0558 45.5007 46.0771 45.873 45.7047C46.24 45.3376 46.2188 44.9758 45.8092 44.5661L43.5435 42.2998L44.5381 41.3049L46.7293 43.4968C47.8356 44.6034 47.8994 45.4972 46.7932 46.6038Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M50.3093 43.0866C49.6285 43.7676 48.9211 43.9644 48.2723 43.9751L48.2297 42.6344C48.719 42.6344 49.1605 42.4269 49.4849 42.1024C49.7934 41.7938 49.8093 41.5438 49.6338 41.3682C49.5221 41.2565 49.3732 41.1394 49.102 41.3895L48.6605 41.7566C47.7457 42.5333 46.9692 42.4482 46.315 41.7938C45.6449 41.1235 45.6502 40.0648 46.6075 39.1071C47.166 38.5485 47.783 38.2719 48.3999 38.2506L48.4637 39.6338C48.1393 39.6285 47.8042 39.7189 47.4479 40.0754C47.1554 40.368 47.1447 40.5702 47.2617 40.6872C47.4638 40.8894 47.5915 40.8681 47.8202 40.6713L48.2776 40.3201C49.1605 39.6285 49.9104 39.5806 50.6018 40.2722C51.3304 41.0011 51.3145 42.0811 50.3093 43.0866Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M52.4069 40.8607L48.6945 37.1472L50.189 35.6523C51.2049 34.6361 52.5132 34.5829 53.7418 35.8119C54.9704 37.0408 54.9172 38.3496 53.9014 39.3657L52.4069 40.8607ZM52.5186 38.9188L52.9866 38.4507C53.3855 38.0517 53.444 37.6739 52.9387 37.1685L52.3856 36.6152C51.8803 36.1098 51.5027 36.1683 51.1038 36.5673L50.6358 37.0355L52.5186 38.9188Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        d: "M56.7706 36.4956L53.9731 33.6972L53.0742 34.5964L52.1594 33.6813L54.9836 30.8563L55.8984 31.7714L54.9996 32.6705L57.7971 35.4689L56.7706 36.4956Z",
                        fill: "#2B2F36"
                    }), (0, r.jsx)("path", {
                        opacity: "0.9",
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M45.0962 90.9949C69.949 90.9949 90.0962 70.8477 90.0962 45.9949C90.0962 21.1421 69.949 0.994873 45.0962 0.994873C20.2433 0.994873 0.0961609 21.1421 0.0961609 45.9949C0.0961609 70.8477 20.2433 90.9949 45.0962 90.9949ZM45.0962 87.9949C68.2921 87.9949 87.0962 69.1908 87.0962 45.9949C87.0962 22.7989 68.2921 3.99488 45.0962 3.99488C21.9002 3.99488 3.09616 22.7989 3.09616 45.9949C3.09616 69.1908 21.9002 87.9949 45.0962 87.9949Z",
                        fill: "#F8D33A"
                    }), (0, r.jsxs)("defs", {
                        children: [(0, r.jsxs)("filter", {
                            id: "filter0_f_7078_23960",
                            x: "7.89197",
                            y: "9.40513",
                            width: "73.5647",
                            height: "73.5647",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, r.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: "9.9311",
                                result: "effect1_foregroundBlur_7078_23960"
                            })]
                        }), (0, r.jsxs)("filter", {
                            id: "filter1_f_7078_23960",
                            x: "5.52823",
                            y: "6.26377",
                            width: "79.2392",
                            height: "79.2392",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, r.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: "10.4018",
                                result: "effect1_foregroundBlur_7078_23960"
                            })]
                        })]
                    })]
                }))
            };
            var Ne = function() {
                var e = (0, l.Bd)().t;
                return (0, r.jsx)(Me, {
                    triggerClassName: "ul-height-full",
                    trigger: (0, r.jsxs)(n.Ay, {
                        className: "ScratchCardBanner",
                        children: [(0, r.jsx)(n.Ay, {
                            className: s()("ScratchCardBanner-logo"),
                            children: (0, r.jsx)(Re, {
                                className: "ScratchCardBanner-logo-image"
                            })
                        }), (0, r.jsx)(n.Ay, {
                            className: "ScratchCardBanner-title",
                            children: e("ScratchCardBanner-title", "Flash  Vouchers")
                        })]
                    })
                })
            }
        },
        "2+37": (e, t, a) => {
            a.d(t, {
                O: () => c,
                v: () => l
            });
            var r = a("sViW"),
                n = a("Pz56"),
                i = a.n(n),
                s = a("xj71"),
                l = function() {
                    var e = (0, r.A)(i().mark((function e() {
                        var t, a, r, n, l, o, c, d, u, h, p = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.length > 0 && void 0 !== p[0] ? p[0] : "en", e.next = 4, (0, s.Jt)("/bapi/apex/v1/public/apex/cms/article/list/query", {
                                        type: 2,
                                        pageNo: 1,
                                        pageSize: 50,
                                        catalogId: 102
                                    }, {
                                        lang: t
                                    });
                                case 4:
                                    return n = e.sent, l = (null === (r = null === n || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.catalogs[0]) || void 0 === r ? void 0 : r.catalogs) || [], o = l.find((function(e) {
                                        return 217 === e.catalogId
                                    })), c = null === o || void 0 === o ? void 0 : o.catalogs.find((function(e) {
                                        return 218 === e.catalogId
                                    })), d = null === o || void 0 === o ? void 0 : o.catalogs.find((function(e) {
                                        return 219 === e.catalogId
                                    })), u = null === o || void 0 === o ? void 0 : o.catalogs.find((function(e) {
                                        return 220 === e.catalogId
                                    })), h = null === o || void 0 === o ? void 0 : o.catalogs.find((function(e) {
                                        return 237 === e.catalogId
                                    })), e.abrupt("return", [c, d, u, h].filter(Boolean));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                o = a("3qxK"),
                c = function() {
                    var e = (0, r.A)(i().mark((function e(t) {
                        var a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.b)("/bapi/composite/v1/private/growth/activity/banner/list", t, {});
                                case 2:
                                    return a = e.sent, e.abrupt("return", a.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        weQG: (e, t, a) => {
            a.d(t, {
                ZD: () => y,
                gM: () => f,
                hR: () => g
            });
            var r = a("sViW"),
                n = a("VP0d"),
                i = a("tEf9"),
                s = a("Pz56"),
                l = a.n(s),
                o = a("TrCV"),
                c = a("LZsd"),
                d = a("cNpm"),
                u = a("epnA"),
                h = a("dh/N"),
                p = a("TPNB"),
                m = a("2+37"),
                f = {
                    fetchVoucherSummary: (0, i.A)(p.Vb.fetchUserVouchers).concat(["voucherSumary"]),
                    fetchBanners: ["fetchBanners"]
                },
                y = function() {
                    return (0, c.I)({
                        queryKey: f.fetchVoucherSummary,
                        queryFn: function() {
                            return (0, h.zl)()
                        }
                    })
                },
                g = function() {
                    return (0, c.I)({
                        queryKey: f.fetchBanners,
                        queryFn: (0, r.A)(l().mark((function e() {
                            var t, a, r, s;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = n.A, e.next = 3, Promise.all([(0, m.O)({
                                            listType: "WEB"
                                        }), (0, d.jZ)()]);
                                    case 3:
                                        return e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), a = t[0], r = t[1], s = ((null === a || void 0 === a ? void 0 : a.list) || []).map((function(e) {
                                            return {
                                                type: "link",
                                                data: e
                                            }
                                        })), (null === r || void 0 === r ? void 0 : r.result) && (s = [{
                                            type: "custom",
                                            component: (0, o.jsx)(u.X, {})
                                        }].concat((0, i.A)(s))), e.abrupt("return", s);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })
                }
        },
        "8/Bc": (e, t, a) => {
            a.d(t, {
                _U: () => g,
                W_: () => v,
                aq: () => w,
                tq: () => T,
                j7: () => A,
                Oz: () => C,
                AW: () => x
            });
            var r = {};
            a.r(r), a.d(r, {
                DAILY_TASKS: () => m,
                ONBOARDING_TASKS: () => p,
                OTHER_TASKS: () => f
            });
            var n = a("sViW"),
                i = a("VP0d"),
                s = a("tEf9"),
                l = a("Pz56"),
                o = a.n(l),
                c = a("dmbe"),
                d = a("xj71"),
                u = a("3qxK"),
                h = (a("HjzO"), a("eheR")),
                p = {
                    code: "000000",
                    message: null,
                    messageDetail: null,
                    data: {
                        challengeList: {
                            list: [{
                                systemTag: "T",
                                id: 1601,
                                title: "Buy or deposit any crypto worth at least 10 USDT",
                                status: "COMPLETED",
                                taskNum: 1,
                                completedTaskNum: 0,
                                completedTime: null,
                                rewardedTime: null,
                                expiredTime: 1699968142e3,
                                rewardMethodType: "ONE_REWARD_PER_TASK",
                                reward: null,
                                taskList: [{
                                    id: 1661,
                                    title: "Buy or deposit any crypto worth at least 10 USDT",
                                    ruleTranslation: "1. Buying crypto on Binance P2P, purchasing crypto with a credit/debit card or bank transfer, and depositing crypto to your Binance account vna blockchain are all qualified\n2. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.\n3. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions. \n4. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice, including but not limited to canceling, extending, terminating or suspending this task and reward, the eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all participants shall be bound by these amendments. \n5. Only the main account holder is eligible to participate in this task and reward. Sub-account holders are ineligible for this task and reward.\n6 Where any discrepancy arises between the translated versions and the original English version, the English version shall prevail.",
                                    status: "COMPLETED",
                                    type: "DEPOSIT",
                                    tradeRequireAmount: "10",
                                    tradeAmount: "0",
                                    tradeUnit: "USDT",
                                    contentName: null,
                                    completedTime: null,
                                    rewardedTime: null,
                                    expiredTime: 1699968142e3,
                                    canClaimTime: 1700054542e3,
                                    webLink: "https://www.%domain%/%locale%/buy-sell-crypto",
                                    iosLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    androidLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    electronLink: "https://www.binance.com/en/buy-sell-crypto?fiat=USD&crypto=BTC",
                                    taskLabel: "OTHER_TASKS",
                                    reward: {
                                        rewardId: null,
                                        rewardType: "VOUCHER",
                                        showType: "AMOUNT",
                                        unit: "USDT",
                                        value: "30",
                                        rewardLeft: 73610,
                                        products: "SPOT",
                                        voucherType: "FEE_REBATE",
                                        expireTime: null
                                    },
                                    ttAccountTypes: null,
                                    ttTradingEligibleProducts: null,
                                    ttTradingTypes: null,
                                    ttTotalTradingAmount: null,
                                    ttEligiblePairMode: null,
                                    ttExcludeTradingPairs: null,
                                    ttSpecifiedTradingPairs: null,
                                    ttDepositTypes: ["BUY_WITH_CARD", "BUY_WITH_THIRD_PARTY", "FIAT_DEPOSIT", "CAPITAL_DEPOSIT", "C2C"],
                                    ttEligibleCoins: ["ALL_COINS"],
                                    ttEligibleDepositChannels: null,
                                    ttTotalDepositAmount: 10
                                }],
                                titleTranslation: "Buy or deposit any crypto worth at least 10 USDT",
                                ruleTranslation: "1. Buying crypto on Binance P2P, purchasing crypto with a credit/debit card or bank transfer, and depositing crypto to your Binance account vna blockchain are all qualified\n2. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.\n3. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions. \n4. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice, including but not limited to canceling, extending, terminating or suspending this task and reward, the eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all participants shall be bound by these amendments. \n5. Only the main account holder is eligible to participate in this task and reward. Sub-account holders are ineligible for this task and reward.\n6 Where any discrepancy arises between the translated versions and the original English version, the English version shall prevail.",
                                taskLabel: "ONBOARDING_TASKS"
                            }]
                        },
                        newTaskCompleted: {
                            popup: !1,
                            title: "",
                            desc: ""
                        }
                    },
                    success: !0
                },
                m = {
                    code: "000000",
                    message: null,
                    messageDetail: null,
                    data: {
                        challengeList: {
                            list: [{
                                systemTag: "C",
                                id: 45,
                                challengeCfgId: 700,
                                title: "Always on Referral Task",
                                status: "ONGOING",
                                taskNum: 1,
                                completedTaskNum: 0,
                                completedTime: 0,
                                rewardedTime: 0,
                                expiredTime: 1738120596234,
                                rewardMethodType: "ONE_REWARD_PER_TASK",
                                reward: null,
                                taskList: [{
                                    id: 79,
                                    challengeTaskCfgId: 1203,
                                    title: "Refer a friend to Binance",
                                    ruleTranslation: "",
                                    status: "ONGOING",
                                    type: "CUSTOMIZED",
                                    tradeRequireAmount: null,
                                    tradeAmount: null,
                                    tradeUnit: null,
                                    contentName: null,
                                    completedTime: 0,
                                    rewardedTime: 0,
                                    expiredTime: 1738120596236,
                                    canClaimTime: 0,
                                    webLink: "https://www.google.com",
                                    iosLink: "https://www.google.com",
                                    androidLink: "https://www.google.com",
                                    electronLink: "",
                                    taskLabel: "DAILY_TASKS",
                                    reward: {
                                        rewardId: null,
                                        rewardType: "VOUCHER",
                                        showType: "AMOUNT",
                                        unit: "USD",
                                        value: "100",
                                        rewardLeft: 100,
                                        products: "SPOT",
                                        voucherType: "FEE_REBATE",
                                        expireTime: null
                                    },
                                    ttAccountTypes: null,
                                    ttTradingEligibleProducts: null,
                                    ttTradingTypes: null,
                                    ttTotalTradingAmount: null,
                                    ttEligiblePairMode: null,
                                    ttExcludeTradingPairs: null,
                                    ttSpecifiedTradingPairs: null,
                                    ttDepositTypes: null,
                                    ttEligibleCoins: null,
                                    ttEligibleDepositChannels: null,
                                    ttTotalDepositAmount: null
                                }],
                                titleTranslation: null,
                                ruleTranslation: "",
                                taskLabel: "DAILY_TASKS",
                                deliveryKey: null
                            }, {
                                systemTag: "C",
                                id: 46,
                                challengeCfgId: 713,
                                title: "Always on Referral Task",
                                status: "ONGOING",
                                taskNum: 1,
                                completedTaskNum: 0,
                                completedTime: 0,
                                rewardedTime: 0,
                                expiredTime: 1738120596234,
                                rewardMethodType: "ONE_REWARD_PER_TASK",
                                reward: null,
                                taskList: [{
                                    id: 80,
                                    challengeTaskCfgId: 1220,
                                    title: "Refer a friend to Binance",
                                    ruleTranslation: "",
                                    status: "ONGOING",
                                    type: "CUSTOMIZED",
                                    tradeRequireAmount: null,
                                    tradeAmount: null,
                                    tradeUnit: null,
                                    contentName: null,
                                    completedTime: 0,
                                    rewardedTime: 0,
                                    expiredTime: 1738120596236,
                                    canClaimTime: 0,
                                    webLink: "https://www.google.com",
                                    iosLink: "https://www.google.com",
                                    androidLink: "https://www.google.com",
                                    electronLink: "",
                                    taskLabel: "DAILY_TASKS",
                                    reward: {
                                        rewardId: null,
                                        rewardType: "VOUCHER",
                                        showType: "AMOUNT",
                                        unit: "USD",
                                        value: "100",
                                        rewardLeft: 100,
                                        products: "SPOT",
                                        voucherType: "FEE_REBATE",
                                        expireTime: null
                                    },
                                    ttAccountTypes: null,
                                    ttTradingEligibleProducts: null,
                                    ttTradingTypes: null,
                                    ttTotalTradingAmount: null,
                                    ttEligiblePairMode: null,
                                    ttExcludeTradingPairs: null,
                                    ttSpecifiedTradingPairs: null,
                                    ttDepositTypes: null,
                                    ttEligibleCoins: null,
                                    ttEligibleDepositChannels: null,
                                    ttTotalDepositAmount: null
                                }],
                                titleTranslation: null,
                                ruleTranslation: "",
                                taskLabel: "DAILY_TASKS",
                                deliveryKey: null
                            }]
                        },
                        newTaskCompleted: {
                            popup: !1,
                            title: "",
                            desc: ""
                        }
                    },
                    success: !0
                },
                f = {
                    code: "000000",
                    message: null,
                    messageDetail: null,
                    data: {
                        challengeList: {
                            list: [{
                                systemTag: "T",
                                id: 1602,
                                title: "Buy or deposit any crypto worth at least 10 USDT",
                                status: "ONGOING",
                                taskNum: 1,
                                completedTaskNum: 0,
                                completedTime: null,
                                rewardedTime: null,
                                expiredTime: 1699968142e6,
                                rewardMethodType: "ONE_REWARD_PER_TASK",
                                reward: null,
                                taskList: [{
                                    id: 0,
                                    title: "Buy or deposit any crypto worth at least 10 USDT",
                                    ruleTranslation: "1. Buying crypto on Binance P2P, purchasing crypto with a credit/debit card or bank transfer, and depositing crypto to your Binance account vna blockchain are all qualified\n2. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.\n3. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions. \n4. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice, including but not limited to canceling, extending, terminating or suspending this task and reward, the eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all participants shall be bound by these amendments. \n5. Only the main account holder is eligible to participate in this task and reward. Sub-account holders are ineligible for this task and reward.\n6 Where any discrepancy arises between the translated versions and the original English version, the English version shall prevail.",
                                    status: "COMPLETED",
                                    type: "CUSTOMIZED",
                                    tradeRequireAmount: "10",
                                    tradeAmount: "0",
                                    tradeUnit: "USDT",
                                    contentName: null,
                                    completedTime: null,
                                    rewardedTime: null,
                                    expiredTime: 1699968142e6,
                                    canClaimTime: 1700054542e3,
                                    webLink: "https://www.%domain%/%locale%/buy-sell-crypto",
                                    iosLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    androidLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    electronLink: "https://www.binance.com/en/buy-sell-crypto?fiat=USD&crypto=BTC",
                                    taskLabel: "OTHER_TASKS",
                                    reward: {
                                        rewardId: null,
                                        rewardType: "VOUCHER",
                                        showType: "AMOUNT",
                                        unit: "USDT",
                                        value: "30",
                                        rewardLeft: 100,
                                        products: "SPOT",
                                        voucherType: "FEE_REBATE",
                                        expireTime: 1699968142e5
                                    },
                                    ttAccountTypes: null,
                                    ttTradingEligibleProducts: null,
                                    ttTradingTypes: null,
                                    ttTotalTradingAmount: null,
                                    ttEligiblePairMode: null,
                                    ttExcludeTradingPairs: null,
                                    ttSpecifiedTradingPairs: null,
                                    ttDepositTypes: ["BUY_WITH_CARD", "BUY_WITH_THIRD_PARTY", "FIAT_DEPOSIT", "CAPITAL_DEPOSIT", "C2C"],
                                    ttEligibleCoins: ["ALL_COINS"],
                                    ttEligibleDepositChannels: null,
                                    ttTotalDepositAmount: 10
                                }, {
                                    id: 100,
                                    title: "Buy or deposit any crypto worth at least 10 USDT",
                                    ruleTranslation: "1. Buying crypto on Binance P2P, purchasing crypto with a credit/debit card or bank transfer, and depositing crypto to your Binance account vna blockchain are all qualified\n2. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.\n3. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions. \n4. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice, including but not limited to canceling, extending, terminating or suspending this task and reward, the eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all participants shall be bound by these amendments. \n5. Only the main account holder is eligible to participate in this task and reward. Sub-account holders are ineligible for this task and reward.\n6 Where any discrepancy arises between the translated versions and the original English version, the English version shall prevail.",
                                    status: "COMPLETED",
                                    type: "DEPOSIT",
                                    tradeRequireAmount: "10",
                                    tradeAmount: "0",
                                    tradeUnit: "USDT",
                                    contentName: null,
                                    completedTime: null,
                                    rewardedTime: null,
                                    expiredTime: 1699968142e6,
                                    canClaimTime: 1700054542e3,
                                    webLink: "https://www.%domain%/%locale%/buy-sell-crypto",
                                    iosLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    androidLink: "bnc://app.binance.com/funds/fiatDeposit",
                                    electronLink: "https://www.binance.com/en/buy-sell-crypto?fiat=USD&crypto=BTC",
                                    taskLabel: "OTHER_TASKS",
                                    reward: {
                                        rewardId: null,
                                        rewardType: "VOUCHER",
                                        showType: "AMOUNT",
                                        unit: "USDT",
                                        value: "30",
                                        rewardLeft: 100,
                                        products: "SPOT",
                                        voucherType: "FEE_REBATE",
                                        expireTime: 1699968142e5
                                    },
                                    ttAccountTypes: null,
                                    ttTradingEligibleProducts: null,
                                    ttTradingTypes: null,
                                    ttTotalTradingAmount: null,
                                    ttEligiblePairMode: null,
                                    ttExcludeTradingPairs: null,
                                    ttSpecifiedTradingPairs: null,
                                    ttDepositTypes: ["BUY_WITH_CARD", "BUY_WITH_THIRD_PARTY", "FIAT_DEPOSIT", "CAPITAL_DEPOSIT", "C2C"],
                                    ttEligibleCoins: ["ALL_COINS"],
                                    ttEligibleDepositChannels: null,
                                    ttTotalDepositAmount: 10
                                }],
                                titleTranslation: "Buy or deposit any crypto worth at least 10 USDT",
                                ruleTranslation: "1. Buying crypto on Binance P2P, purchasing crypto with a credit/debit card or bank transfer, and depositing crypto to your Binance account vna blockchain are all qualified\n2. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.\n3. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions. \n4. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice, including but not limited to canceling, extending, terminating or suspending this task and reward, the eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all participants shall be bound by these amendments. \n5. Only the main account holder is eligible to participate in this task and reward. Sub-account holders are ineligible for this task and reward.\n6 Where any discrepancy arises between the translated versions and the original English version, the English version shall prevail.",
                                taskLabel: "OTHER_TASKS"
                            }]
                        },
                        newTaskCompleted: {
                            popup: !1,
                            title: "",
                            desc: ""
                        }
                    },
                    success: !0
                },
                y = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var a;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return e.next = 4, (0, u.b)("/bapi/composite/v2/private/usertask/challenge/list", t, {});
                                case 4:
                                    return a = e.sent, e.abrupt("return", a.data);
                                case 6:
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
                    var e = (0, n.A)(o().mark((function e(t) {
                        var a, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 5;
                                    break;
                                case 3:
                                    return a = e.sent, e.abrupt("return", a);
                                case 5:
                                    return e.next = 7, (0, u.b)("/bapi/composite/v2/private/usertask/challenge/claim-reward", t, {});
                                case 7:
                                    return r = e.sent, e.abrupt("return", r);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var a;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.b)("/bapi/composite/v2/private/usertask/challenge/clickCompleteTask", t, {});
                                case 2:
                                    return a = e.sent, e.abrupt("return", a);
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
                    var e = (0, n.A)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return e.next = 4, (0, u.b)("/bapi/composite/v2/private/usertask/challenge/newTaskCompleted", {}, {});
                                case 4:
                                    return t = e.sent, e.abrupt("return", t.data);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t, a, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = i.A, e.next = 3, Promise.all([y({
                                        listType: "Ongoing"
                                    }), y({
                                        listType: "Past"
                                    })]);
                                case 3:
                                    return e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), a = t[0], r = t[1], e.abrupt("return", {
                                        onGoingChallenges: (0, c.A)(a, "challengeList.list", []),
                                        pastChallenges: (0, c.A)(r, "challengeList.list", [])
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([y({
                                        listType: "Ongoing",
                                        size: 6,
                                        tasksLabel: h.jr.Onboarding
                                    }), y({
                                        listType: "Ongoing",
                                        size: 6,
                                        tasksLabel: h.jr.Daily
                                    }), y({
                                        listType: "Ongoing",
                                        size: 6,
                                        tasksLabel: h.jr.Other
                                    })]);
                                case 2:
                                    return t = e.sent, e.abrupt("return", {
                                        onGoingChallenges: t.reduce((function(e, t) {
                                            return (0, s.A)(e).concat((0, s.A)((0, c.A)(t, "challengeList.list", [])))
                                        }), []),
                                        pastChallenges: []
                                    });
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
                A = function() {
                    var e = (0, n.A)(o().mark((function e() {
                        var t, a, r, n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 7;
                                    break;
                                case 5:
                                    return r = e.sent, e.abrupt("return", (null === r || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.taskList) || []);
                                case 7:
                                    return e.next = 9, (0, u.b)("/bapi/composite/v2/private/usertask/challenge/dashboardTasks", {}, {});
                                case 9:
                                    return n = e.sent, e.abrupt("return", (null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.taskList) || []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = (0, n.A)(o().mark((function e(t) {
                        var a, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 5;
                                    break;
                                case 3:
                                    return a = e.sent, e.abrupt("return", a.data);
                                case 5:
                                    return e.next = 7, (0, d.Jt)("/bapi/composite/v2/private/usertask/challenge/getChallengeForPreview", {
                                        challengeKey: t
                                    });
                                case 7:
                                    return r = e.sent, e.abrupt("return", r.data);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        tYhB: (e, t, a) => {
            a.d(t, {
                S: () => R
            });
            var r = a("sViW"),
                n = a("BK7R"),
                i = a("QUKP"),
                s = a("gZfF"),
                l = a("Pz56"),
                o = a.n(l),
                c = a("TrCV"),
                d = a("UgDF"),
                u = a("GuDP"),
                h = a("D4P9"),
                p = a("yiIT"),
                m = a("mQvl"),
                f = a("weQG"),
                y = a("8/Bc"),
                g = a("DTvD"),
                v = a("XxiJ"),
                x = a("eeEA"),
                w = a("YgAF"),
                C = a("xE8/"),
                A = a("Y1+p"),
                T = a("/NP1"),
                k = a("brFs"),
                b = a("5/aQ"),
                L = a("lR91"),
                j = a("Apzs"),
                S = a("eheR"),
                _ = {
                    501011: {
                        icon: (0, c.jsx)(v.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "CannotClaimReward-kyc",
                            defaultValue: "You are not eligible to claim this reward as you do not meet the KYC criteria."
                        }
                    },
                    501012: {
                        icon: (0, c.jsx)(v.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "CannotClaimReward-future",
                            defaultValue: "You are not eligible to claim this reward as you do not meet the Futures Account criteria."
                        }
                    },
                    501014: {
                        icon: (0, c.jsx)(v.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "CannotClaimReward-region",
                            defaultValue: "{{product}} service is unavailable in your region."
                        }
                    },
                    501015: {
                        icon: (0, c.jsx)(v.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "RiskUser-desc",
                            defaultValue: "Your account did not pass the risk assessment for this activity. In case of any objections, you may <AppealLink>submit an appeal</AppealLink>.",
                            components: {
                                AppealLink: (0, c.jsx)(C.qO, {
                                    className: "ul-text-link",
                                    target: "_blank",
                                    to: "/my/risk/appeal?templateId=T4adc24fe0"
                                })
                            }
                        }
                    },
                    501020: {
                        icon: (0, c.jsx)(b.v, {}),
                        title: {
                            key: "RewardSuspension",
                            defaultValue: "Reward Suspension"
                        },
                        desc: {
                            key: "RewardSuspension-desc",
                            defaultValue: "This reward is temporarily suspended. Please try again later."
                        }
                    },
                    501016: {
                        icon: (0, c.jsx)(b.v, {}),
                        title: {
                            key: "SystemMaintenance\t",
                            defaultValue: "System Maintenance"
                        },
                        desc: {
                            key: "SystemMaintenance-desc",
                            defaultValue: "This function is temporarily suspended. Please try again later."
                        }
                    },
                    501017: {
                        icon: (0, c.jsx)(b.v, {}),
                        title: {
                            key: "RewardClaimed",
                            defaultValue: "Reward Claimed"
                        },
                        desc: {
                            key: "RewardClaimed-desc",
                            defaultValue: "You have already claimed this reward successfully."
                        }
                    },
                    300014: {
                        icon: (0, c.jsx)(b.v, {}),
                        title: {
                            key: "RewardClaimed",
                            defaultValue: "Reward Claimed"
                        },
                        desc: {
                            key: "RewardClaimed-desc",
                            defaultValue: "You have already claimed this reward successfully."
                        }
                    },
                    300029: {
                        icon: (0, c.jsx)(v.A, {}),
                        title: {
                            key: "CannotClaimReward",
                            defaultValue: "Cannot Claim Reward"
                        },
                        desc: {
                            key: "CannotClaimReward-riskUser",
                            defaultValue: "Your account did not pass the risk assessment for this activity. Refer to FAQ for more details."
                        }
                    }
                },
                E = {
                    icon: (0, c.jsx)(b.v, {}),
                    title: {
                        key: "UnexpectedError",
                        defaultValue: "Unexpected Error"
                    },
                    desc: {
                        key: "UnexpectedError-desc",
                        defaultValue: "An unexpected error has occurred. Please try again later."
                    }
                },
                M = function(e) {
                    var t, a = e.rewardType,
                        r = e.code,
                        l = e.onClose,
                        o = (0, s.A)(e, ["rewardType", "code", "onClose"]),
                        d = (0, m.B)().t,
                        u = (0, k.e)(a === S.E.Points ? "/points" : "/vouchers"),
                        f = (0, k.e)("/"),
                        y = (0, k.O)() === p.L3.RewardsHub,
                        v = (0, g.useState)(!0),
                        b = v[0],
                        M = v[1];
                    if (r === p.Uc.SUCCESS) return (0, c.jsx)(A.J, (0, i.A)((0, n.A)({
                        visible: b
                    }, o), {
                        showClose: !0,
                        onClose: function() {
                            M(!1), l && l()
                        },
                        header: (0, c.jsx)(x.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, c.jsx)(w.A, {
                            icon: (0, c.jsx)(j.m, {
                                style: {
                                    width: "100%",
                                    fontSize: "168px",
                                    height: "168px"
                                }
                            }),
                            title: d("congratulation", "Congratulations!"),
                            description: d("claimRewardSuccessfully", "You have claimed this reward successfully. View or use it now."),
                            actions: (0, c.jsx)(C.qO, {
                                to: u,
                                className: "ul-width-full ul-decoration-none",
                                children: (0, c.jsx)(h.A, {
                                    as: "div",
                                    variant: "primary",
                                    className: "ul-width-full",
                                    children: d("viewReward", "View Reward")
                                })
                            })
                        })
                    }));
                    if ("501013" === r || "300028" === r) return (0, c.jsx)(A.J, {
                        visible: b,
                        showClose: !0,
                        onClose: function() {
                            M(!1), l && l()
                        },
                        header: (0, c.jsx)(x.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, c.jsx)(T.A, {
                            icon: (0, c.jsx)(L.O, {
                                style: {
                                    width: "100%",
                                    fontSize: "124px",
                                    height: "124px",
                                    fill: "none"
                                }
                            }),
                            title: d("NoMoreReward", "No More Reward"),
                            description: d("NoMoreReward-desc", "This reward is fully claimed. Please check out other activities and rewards."),
                            actions: (0, c.jsxs)(c.Fragment, {
                                children: [!y && (0, c.jsx)(C.qO, {
                                    to: f,
                                    className: "ul-width-full ul-decoration-none",
                                    children: (0, c.jsx)(h.A, {
                                        as: "div",
                                        variant: "primary",
                                        className: "ul-width-full",
                                        children: d("GotoRewardHub", "Go to Rewards Hub")
                                    })
                                }), y && (0, c.jsx)(h.A, {
                                    className: "ul-width-full",
                                    variant: "primary",
                                    onClick: function() {
                                        M(!1)
                                    },
                                    children: d("ok", "OK")
                                })]
                            })
                        })
                    });
                    var R = _[r] || E;
                    return (0, c.jsx)(A.J, {
                        visible: b && R,
                        header: (0, c.jsx)(x.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, c.jsx)(w.A, {
                            icon: (0, c.jsx)(x.Ay, {
                                style: {
                                    fontSize: "96px",
                                    width: "100%",
                                    height: "96px"
                                },
                                children: null === R || void 0 === R ? void 0 : R.icon
                            }),
                            title: d(null === R || void 0 === R ? void 0 : R.title.key, null === R || void 0 === R ? void 0 : R.title.defaultValue),
                            description: d(null === R || void 0 === R ? void 0 : R.desc.key, null === R || void 0 === R ? void 0 : R.desc.defaultValue, {}, null === R || void 0 === R || null === (t = R.desc) || void 0 === t ? void 0 : t.components),
                            actions: (0, c.jsx)(h.A, {
                                className: "ul-width-full",
                                variant: "primary",
                                onClick: function() {
                                    M(!1)
                                },
                                children: d("ok", "OK")
                            })
                        })
                    })
                },
                R = function(e) {
                    var t = e.reward,
                        a = e.onSuccess,
                        l = (0, s.A)(e, ["reward", "onSuccess"]),
                        g = (0, m.B)().t,
                        v = (0, d.jE)(),
                        x = (0, u.n)({
                            mutationFn: (0, r.A)(o().mark((function e() {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", (0, y._U)({
                                                rewardId: null === t || void 0 === t ? void 0 : t.rewardId
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            onSuccess: function(e) {
                                e.code === p.Uc.SUCCESS && !0 === e.success && v.invalidateQueries({
                                    queryKey: f.gM.fetchVoucherSummary
                                })
                            }
                        }),
                        w = x.mutate,
                        C = x.isLoading,
                        A = x.data;
                    return (0, c.jsxs)(c.Fragment, {
                        children: [A && (0, c.jsx)(M, {
                            code: A.code,
                            onClose: function() {
                                A.code === p.Uc.SUCCESS && !0 === A.success && a && a()
                            },
                            rewardType: t.rewardType
                        }), (0, c.jsx)(h.A, (0, i.A)((0, n.A)({
                            variant: "secondary"
                        }, l), {
                            loading: C,
                            inactive: C,
                            onClick: function() {
                                w()
                            },
                            children: g("claimReward", "Claim Reward")
                        }))]
                    })
                }
        },
        "+bWL": (e, t, a) => {
            a.d(t, {
                V: () => l
            });
            var r = a("TrCV"),
                n = a("O94r"),
                i = a.n(n),
                s = a("RGyw"),
                l = (a("xQnI"), function(e) {
                    var t = e.className,
                        a = e.task,
                        n = a.tradeAmount,
                        l = void 0 === n ? 0 : n,
                        o = a.tradeRequireAmount,
                        c = void 0 === o ? 0 : o,
                        d = a.tradeUnit,
                        u = void 0 === d ? "USD" : d,
                        h = (a.status, l || 0),
                        p = c || 0,
                        m = u;
                    return (0, r.jsx)(r.Fragment, {
                        children: +p > 0 && (0, r.jsxs)(s.A, {
                            className: i()("TaskCard-info-Accumulation", t),
                            children: [(0, r.jsxs)(s.A, {
                                className: "TaskCard-info-Accumulation-progress",
                                children: [(0, r.jsx)(s.A, {
                                    style: {
                                        color: "var(--color-textBuy)"
                                    },
                                    children: h
                                }), "/", (0, r.jsx)(s.A, {
                                    children: p
                                })]
                            }), (0, r.jsx)(s.A, {
                                className: "TaskCard-info-Accumulation-unit",
                                children: m
                            })]
                        })
                    })
                })
        },
        Ca1D: (e, t, a) => {
            a.d(t, {
                o: () => v
            });
            var r = a("BK7R"),
                n = a("QUKP"),
                i = a("gZfF"),
                s = a("TrCV"),
                l = a("nsO7"),
                o = a("CffR"),
                c = a("RGyw"),
                d = a("tY2v"),
                u = a("mQvl"),
                h = a("RApW"),
                p = a("eNvi"),
                m = a("3Pj3"),
                f = a("eheR"),
                y = a("Yhem"),
                g = {
                    KYC: {
                        rules: [{
                            key: "kyc-rule-1",
                            defaultValue: "Rewards for this activity are available on a first-come, first-served basis. Once the reward has been fully claimed, you will be unable to claim the reward - please keep a look out for other activities and rewards."
                        }, {
                            key: "kyc-rule-2",
                            defaultValue: "Where any discrepancy arises between the translated copywriting and the original English copywriting, the English version shall prevail."
                        }]
                    },
                    OPEN_ACCOUNT: {
                        criterias: [{
                            key: "openAccount-criteria-AccountType",
                            defaultValue: "Account Type(s): {{accountTypes}}"
                        }],
                        rules: [{
                            key: "openAccount-rule-1",
                            defaultValue: "Rewards for this activity are available on a first-come, first-served basis. Once the reward has been fully claimed, you will be unable to claim the reward - please keep a look out for other activities and rewards."
                        }, {
                            key: "openAccount-rule-2",
                            defaultValue: "Where any discrepancy arises between the translated copywriting and the original English copywriting, the English version shall prevail."
                        }]
                    },
                    TRADING: {
                        criterias: [{
                            key: "trading-criteria-Product",
                            defaultValue: "Eligible Product(s): {{products}}"
                        }, {
                            key: "trading-criteria-TradingType",
                            defaultValue: "Trading Type(s): {{tradingTypes}}"
                        }, {
                            key: "trading-criteria-TradingAmount",
                            defaultValue: "Total Trading Amount: {{tradingAmount}} {{tradingUnit}}"
                        }, {
                            key: "trading-criteria-TradingPairsAll",
                            defaultValue: "Eligible Trading Pair(s): All",
                            checkVisible: function(e) {
                                return "ALL_TRADING_PAIRS" === e.ttEligiblePairMode
                            }
                        }, {
                            key: "trading-criteria-TradingPairs",
                            defaultValue: "Eligible Trading Pair(s): {{eligibleTradingPairs}}",
                            checkVisible: function(e) {
                                return !!e.ttSpecifiedTradingPairs && e.ttSpecifiedTradingPairs.length > 0
                            }
                        }, {
                            key: "trading-criteria-excludedTradingPairs",
                            defaultValue: "Eligible Trading Pair(s): All except {{excludeTradingPairs}}",
                            checkVisible: function(e) {
                                return !!e.ttExcludeTradingPairs && e.ttExcludeTradingPairs.length > 0
                            }
                        }],
                        rules: [{
                            key: "trading-rule-1",
                            defaultValue: "Rewards for this activity are available on a first-come, first-served basis. Once the reward has been fully claimed, you will be unable to claim the reward - please keep a look out for other activities and rewards."
                        }, {
                            key: "trading-rule-2",
                            defaultValue: "Where any discrepancy arises between the translated copywriting and the original English copywriting, the English version shall prevail."
                        }]
                    },
                    CLICK: {
                        criterias: [{
                            key: "click-criteria",
                            defaultValue: 'Click "Do Task" and view the content.'
                        }],
                        rules: [{
                            key: "click-rule-1",
                            defaultValue: "Rewards for this activity are available on a first-come, first-served basis. Once the reward has been fully claimed, you will be unable to claim the reward - please keep a look out for other activities and rewards."
                        }, {
                            key: "click-rule-2",
                            defaultValue: "Where any discrepancy arises between the translated copywriting and the original English copywriting, the English version shall prevail."
                        }]
                    },
                    DEPOSIT: {
                        criterias: [{
                            key: "deposite-criteria-type",
                            defaultValue: "Deposit Type(s): {{depositeTypes}}"
                        }, {
                            key: "deposite-criteria-coins",
                            defaultValue: "Eligible Coin(s): {{coins}}"
                        }, {
                            key: "deposite-criteria-depositChannel",
                            defaultValue: "Eligible Deposit Channel(s): {{depositeChannels}}",
                            checkVisible: function(e) {
                                return !!e.ttEligibleDepositChannels && e.ttEligibleDepositChannels.length > 0
                            }
                        }, {
                            key: "deposite-criteria-depositAmount",
                            defaultValue: "Total Deposit Amount: {{depositAmount}} {{depositeUnit}}"
                        }],
                        rules: [{
                            key: "deposit-rule-1",
                            defaultValue: "Rewards for this activity are available on a first-come, first-served basis. Once the reward has been fully claimed, you will be unable to claim the reward - please keep a look out for other activities and rewards."
                        }, {
                            key: "deposit-rule-2",
                            defaultValue: "Where any discrepancy arises between the translated copywriting and the original English copywriting, the English version shall prevail."
                        }]
                    },
                    CUSTOMIZED: {
                        rules: []
                    }
                },
                v = function(e) {
                    var t = e.task,
                        a = e.reward,
                        v = (e.titleTranslation, e.ruleTranslation),
                        x = e.systemTag,
                        w = void 0 === x ? "C" : x,
                        C = e.claimRewardAfterAllTaskCompleted,
                        A = void 0 !== C && C,
                        T = (0, i.A)(e, ["task", "reward", "titleTranslation", "ruleTranslation", "systemTag", "claimRewardAfterAllTaskCompleted"]),
                        k = (0, u.B)().t,
                        b = t.type,
                        L = t.ttAccountTypes,
                        j = t.ttTradingEligibleProducts,
                        S = t.ttTradingTypes,
                        _ = t.ttTotalTradingAmount,
                        E = t.ttSpecifiedTradingPairs,
                        M = t.ttExcludeTradingPairs,
                        R = t.ttDepositTypes,
                        N = t.ttEligibleCoins,
                        B = t.ttTotalDepositAmount,
                        V = t.ttEligibleDepositChannels,
                        D = t.tradeUnit,
                        O = {
                            accountTypes: (0, h.Tk)((null === L || void 0 === L ? void 0 : L.map((function(e) {
                                return (0, l.capitalize)(e)
                            }))) || []),
                            products: (0, h.Tk)((null === j || void 0 === j ? void 0 : j.map((function(e) {
                                return (0, p.V)(e, k)
                            }))) || []),
                            tradingTypes: (0, h.Tk)((null === S || void 0 === S ? void 0 : S.map((function(e) {
                                return (0, l.capitalize)(e)
                            }))) || []),
                            tradingAmount: _,
                            tradingUnit: D,
                            eligibleTradingPairs: (0, h.Tk)(E || []),
                            excludeTradingPairs: (0, h.Tk)(M || []),
                            depositeTypes: (0, h.Tk)((null === R || void 0 === R ? void 0 : R.map((function(e) {
                                return (0, y.u)(e, k)
                            }))) || []),
                            coins: (0, h.Tk)((null === N || void 0 === N ? void 0 : N.map((function(e) {
                                return function(e, t) {
                                    return "ALL_COINS" === e ? t("AllCoins", "All Coins") : e
                                }(e, k)
                            }))) || []),
                            depositeChannels: (0, h.Tk)(V || []),
                            depositAmount: B,
                            depositeUnit: D
                        },
                        P = g[b];
                    if (!P) return (0, s.jsx)(s.Fragment, {});
                    var U = P.criterias,
                        I = void 0 === U ? [] : U,
                        F = P.rules,
                        Z = void 0 === F ? [] : F,
                        H = (a || {}).products,
                        G = void 0 === H ? [] : H,
                        W = Array.isArray(G) ? G : [G],
                        K = (0, h.Tk)(W.map((function(e) {
                            return (0, p.V)(e, k)
                        }))),
                        q = (0, o.Z5)(k, v);
                    return (0, s.jsx)(d.J, (0, n.A)((0, r.A)({}, T), {
                        title: k("TaskRules-title", "Task Rules"),
                        okText: k("ok", "OK"),
                        children: (0, s.jsxs)(c.A, {
                            className: "TaskRulesModal-content",
                            children: [I.length > 0 && "C" === w && (0, s.jsxs)(c.A, {
                                className: "TaskRulesModal-section",
                                children: [(0, s.jsx)(c.A, {
                                    as: "h2",
                                    className: "TaskRulesModal-section-title",
                                    children: k("Criteria", "Criteria")
                                }), (0, s.jsx)(c.A, {
                                    as: "ul",
                                    children: I.filter((function(e) {
                                        return !e.checkVisible || e.checkVisible(t)
                                    })).map((function(e) {
                                        return (0, s.jsx)(c.A, {
                                            as: "li",
                                            children: k(e.key, e.defaultValue, O)
                                        }, e.key)
                                    }))
                                })]
                            }), (0, s.jsxs)(c.A, {
                                className: "TaskRulesModal-section",
                                children: [(0, s.jsx)(c.A, {
                                    as: "h2",
                                    className: "TaskRulesModal-section-title",
                                    children: k("Reward", "Reward")
                                }), (0, s.jsxs)(c.A, {
                                    as: "ul",
                                    children: [(0, s.jsx)(c.A, {
                                        as: "li",
                                        children: k("RewardRule-type", "Reward: {{value}} {{unit}} {{voucherName}} {{productName}}", (0, n.A)((0, r.A)({}, a), {
                                            voucherName: (0, m.R5)(a, k),
                                            productName: a.rewardType === f.E.Voucher ? "(".concat(K, ")") : ""
                                        }))
                                    }), (null === a || void 0 === a ? void 0 : a.rewardLeft) < 1e3 && (0, s.jsx)(c.A, {
                                        as: "li",
                                        children: k("RewardRule-rewardLeft", "Reward Left: {{rewardLeft}}", a)
                                    }), A && (0, s.jsx)(c.A, {
                                        as: "li",
                                        children: k("RewardRule-instruction", "You may claim the reward only after you completed all tasks in this activity.")
                                    })]
                                })]
                            }), (0, s.jsxs)(c.A, {
                                className: "TaskRulesModal-section",
                                children: [(0, s.jsx)(c.A, {
                                    as: "h2",
                                    className: "TaskRulesModal-section-title",
                                    children: k("GeneralRules", "General Rules")
                                }), q && (0, s.jsx)(c.A, {
                                    as: "ul",
                                    children: q.split("\n").map((function(e, t) {
                                        return (0, s.jsx)(c.A, {
                                            as: "li",
                                            children: e
                                        }, t)
                                    }))
                                }), !q && (null === Z || void 0 === Z ? void 0 : Z.length) > 0 && (0, s.jsx)(c.A, {
                                    as: "ul",
                                    children: Z.filter((function(e) {
                                        return !e.checkVisible || e.checkVisible(t)
                                    })).map((function(e, t) {
                                        return (0, s.jsxs)(c.A, {
                                            as: "li",
                                            children: [t + 1, ". ", k(e.key, e.defaultValue)]
                                        }, e.key)
                                    }))
                                })]
                            })]
                        })
                    }))
                }
        },
        B35M: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var r = a("wIZF"),
                n = a("DTvD"),
                i = a.n(n),
                s = a("Y4uf");
            const l = function(e) {
                return i().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        HyIL: (e, t, a) => {
            a.d(t, {
                Ay: () => u
            });
            var r = a("wIZF"),
                n = a("DTvD"),
                i = a.n(n),
                s = a("O94r"),
                l = a.n(s),
                o = a("eeEA"),
                c = a("fvKX"),
                d = a("GlkT");
            const u = function(e) {
                var t = e.className,
                    a = e.value,
                    s = e.total,
                    u = e.color,
                    h = e.outerColor,
                    p = e.strokeWidth,
                    m = (0, c.r)().prefixCls,
                    f = l()("".concat(m, "-progress__bar"), t),
                    y = (0, n.useState)({
                        value: 0,
                        distance: 0
                    }),
                    g = y[0],
                    v = g.value,
                    x = g.distance,
                    w = y[1];
                i().useEffect((function() {
                    var e = Math.min(a, s);
                    w((function(t) {
                        var a = t.value;
                        return e !== a ? {
                            distance: Math.abs(e - a),
                            value: Number((+e).toFixed(2))
                        } : t
                    }))
                }), [a, s]);
                var C = 100 * v / s,
                    A = {
                        background: h,
                        height: p
                    },
                    T = Math.floor(200 * Math.sqrt(x / s * 100)),
                    k = (0, d.q)({
                        percent: v,
                        total: s
                    });
                return i().createElement(o.Ay, (0, r.__assign)({}, k, {
                    className: f,
                    style: A
                }), i().createElement(o.Ay, {
                    className: "bar-inner",
                    style: {
                        background: u,
                        transitionDuration: "".concat(T, "ms"),
                        width: "".concat((C || 0).toFixed(2), "%")
                    }
                }), e.children)
            }
        },
        GlkT: (e, t, a) => {
            a.d(t, {
                A: () => s,
                q: () => i
            });
            var r = a("wIZF"),
                n = a("hyZw");

            function i(e) {
                return {
                    role: "progressbar",
                    "aria-label": "loading",
                    "aria-valuenow": e.percent,
                    "aria-valuemin": 0,
                    "aria-valuemax": e.total
                }
            }
            const s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.step = n.es, t.state = {
                        value: 0,
                        distance: 0
                    }, t.getTime = function() {
                        var e = t.state.distance,
                            a = t.props,
                            r = a.realTime,
                            n = a.total,
                            i = Math.abs(e / n * 100);
                        return r ? 0 : Math.floor(200 * Math.sqrt(i))
                    }, t.inViewPort = function() {
                        var e = t.props,
                            a = e.value,
                            r = e.total,
                            n = Math.min(a, r),
                            i = t.state.value;
                        n !== i && t.setState({
                            value: Number((+n).toFixed(2)),
                            distance: n - i
                        }, (function() {
                            return t.step()
                        }))
                    }, t
                }
                return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                    var t = this.props,
                        a = t.total,
                        r = t.value,
                        n = e.total,
                        i = e.value;
                    this.equalUpdate({
                        total: a,
                        value: r
                    }, {
                        total: n,
                        value: i
                    })
                }, t.defaultProps = {
                    total: 100
                }, t
            }(a("4kma").A)
        },
        xQnI: () => {}
    }
]);
//# debugId=ffea8a7c-2d19-5df0-a04b-8df9fc7e5d7b