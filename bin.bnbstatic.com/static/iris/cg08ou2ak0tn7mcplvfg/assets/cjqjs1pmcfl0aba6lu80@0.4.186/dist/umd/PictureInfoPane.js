(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_PictureInfoPane;
            (() => {
                var t, e = {
                        48202: (t, e, i) => {
                            "use strict";
                            i.r(e), i.d(e, {
                                default: () => W
                            });
                            var n = i(89575),
                                r = i(24586),
                                o = i(43477),
                                s = i.n(o),
                                a = i(20398),
                                l = i(92929),
                                c = i(98424),
                                u = i(79798),
                                h = i(30351),
                                d = i(37640),
                                p = i(60076),
                                f = i(54069),
                                m = i(59178),
                                g = i(79299),
                                v = i(84386),
                                x = i(29682),
                                b = i.n(x),
                                y = i(64382),
                                w = i(50680),
                                T = i(96041),
                                S = i(42231),
                                P = i(32336);

                            function E() {
                                var t = (0, S.A)(["\n      .mica-slider {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        box-sizing: border-box;\n\n        .slide-wrapper {\n          display: flex;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n\n          .slide {\n            flex: none;\n            width: 100%;\n            height: 100%;\n            box-sizing: border-box;\n          }\n        }\n      }\n\n      &[data-direction='vertical'] {\n        .slide-wrapper {\n          flex-direction: column;\n        }\n      }\n    "]);
                                return E = function() {
                                    return t
                                }, t
                            }
                            var _ = function() {
                                return s().createElement(P.Global, {
                                    styles: (0, P.css)(E())
                                })
                            };
                            const k = s().memo(_);
                            var I = Math.floor,
                                O = function(t) {
                                    return I(100 * t) / 100
                                },
                                D = !(0, y.dg)() || {
                                    passive: !0,
                                    capture: !0
                                },
                                A = function(t) {
                                    (0, m.A)(i, t);
                                    var e = (0, v.A)(i);

                                    function i(t) {
                                        var n;
                                        (0, p.A)(this, i), (n = e.call(this, t)).count = 0, n.timer = -1, n.pulling = !1, n.unmount = !1, n.pullElement = null, n.$refs = {}, n.setRefs = function(t) {
                                            return function(e) {
                                                n.$refs[t] = e
                                            }
                                        }, n.onMouse = function(t) {
                                            var e = n.props.autoplay,
                                                i = t.type;
                                            t.currentTarget === t.target && e && ("mouseenter" === i ? n.pause() : n.autoplay())
                                        }, n.onResize = (0, w.n)((function() {
                                            n.unmount || n.switchSlide(n.state.activeIndex, !1)
                                        }), 100 / 6), n.autoplay = function() {
                                            var t = n.props.autoplay;
                                            n.pulling || -1 !== n.timer || (n.timer = setTimeout((function() {
                                                n.unmount || (n.switchNext(!0), n.timer = -1, n.autoplay())
                                            }), t))
                                        }, n.pause = function() {
                                            -1 !== n.timer && (clearTimeout(n.timer), n.timer = -1)
                                        }, n.getTranslateIndex = function(t) {
                                            var e = n.getLoop(),
                                                i = n.props.slidesPerGroup;
                                            return e ? t + i : t
                                        }, n.indexGetter = function(t) {
                                            var e = (0, d.A)(n),
                                                i = e.count,
                                                r = e.props,
                                                o = r.slidesPerGroup,
                                                s = r.slidesPerView,
                                                a = n.getLoop(),
                                                l = I(s),
                                                c = Math.max(0, i - l),
                                                u = t,
                                                h = t;
                                            return u > 0 && o > 1 && (u += 1), a ? u < 0 ? h = u % i + i : u > c && (h = u % i) : (u < 0 ? u = 0 : u > c && (u = c), h = u), {
                                                current: I(u / o) * o,
                                                activeIndex: I(h / o) * o
                                            }
                                        }, n.switchPrev = function(t) {
                                            var e = n.props.slidesPerGroup,
                                                i = n.state.activeIndex;
                                            n.switchSlide(i - e, t)
                                        }, n.switchNext = function(t) {
                                            var e = n.props.slidesPerGroup,
                                                i = n.state.activeIndex;
                                            n.switchSlide(i + e, t)
                                        }, n.switchSlide = function(t, e) {
                                            var i = n.props.onSlide,
                                                r = n.indexGetter(t),
                                                o = r.current,
                                                s = r.activeIndex,
                                                a = n.calculateDistance({
                                                    translateIndex: n.getTranslateIndex(o)
                                                }),
                                                l = a.translateX,
                                                c = a.translateY,
                                                u = function() {
                                                    !n.unmount && n.pullElement && (n.setState({
                                                        activeIndex: s
                                                    }), n.pullElement.animateTo(l, c).then((function() {
                                                        i(s), o !== s && n.switchSlide(s, !1)
                                                    })))
                                                };
                                            e || [null, void 0].indexOf(e) > -1 ? u() : (n.pullElement.setTranslate(l, c), T.A.checkViewport(), setTimeout((function() {
                                                return u()
                                            }), 100))
                                        }, n.calculateDistance = function(t) {
                                            var e = n.isLtr(),
                                                i = n.pxGetter(n.props.gap),
                                                r = n.isHorizontal(),
                                                o = n.getPadOffset(),
                                                s = o.width,
                                                a = o.height,
                                                l = e ? t.translateIndex : -t.translateIndex,
                                                c = O((+s + i) * l),
                                                u = O((+a + i) * l);
                                            return {
                                                translateX: r ? -c : 0,
                                                translateY: r ? 0 : -u
                                            }
                                        };
                                        var r = t.initialSlide,
                                            o = t.loop;
                                        if (t.autoplay && !o) throw new Error("autoplay must be loop");
                                        return n.state = {
                                            activeIndex: r,
                                            isClient: !1
                                        }, n
                                    }
                                    var n = i.prototype;
                                    return n.componentDidMount = function() {
                                        this.setState({
                                            isClient: !0
                                        }), this.initPullElement(), this.onResize(), this.eventConvert(!0)
                                    }, n.eventConvert = function(t) {
                                        var e = this.$refs.target,
                                            i = t ? "addEventListener" : "removeEventListener";
                                        if (window[i]("resize", this.onResize, D), i in e) {
                                            var n = e.parentNode;
                                            n[i]("mouseenter", this.onMouse, D), n[i]("mouseleave", this.onMouse, D)
                                        }
                                    }, n.componentDidUpdate = function(t) {
                                        var e = this.props,
                                            i = e.slidesPerView,
                                            n = e.ltr;
                                        s().Children.count(t.children) === this.count && n === t.ltr || (this.pullElement && this.pullElement.destroy(), this.initPullElement()), i !== t.slidesPerView && this.onResize()
                                    }, n.componentWillUnmount = function() {
                                        this.pause(), this.eventConvert(), this.unmount = !0, this.pullElement && this.pullElement.destroy()
                                    }, n.getPadOffset = function() {
                                        var t = this.props.slidesPerView,
                                            e = this.getGapPx(),
                                            i = this.isHorizontal(),
                                            n = this.$refs.target || {
                                                clientWidth: 0,
                                                clientHeight: 0
                                            },
                                            r = n.clientWidth,
                                            o = n.clientHeight,
                                            s = (t - 1) * e;
                                        return {
                                            height: i ? 0 : O((o - s) / t),
                                            width: i ? O((r - s) / t) : 0
                                        }
                                    }, n.initPullElement = function() {
                                        var t, e = function() {
                                                n.pulling = !0, n.pause()
                                            },
                                            i = function(t) {
                                                var e = t.translateX,
                                                    i = t.translateY;
                                                this.preventDefault();
                                                var r = n.state.activeIndex,
                                                    s = n.calculateDistance({
                                                        translateIndex: n.getTranslateIndex(r)
                                                    }),
                                                    c = s.translateX,
                                                    u = s.translateY,
                                                    h = a ? e - c : i - u;
                                                h > 20 ? n[l ? "switchPrev" : "switchNext"](!0) : h < -20 ? n[l ? "switchNext" : "switchPrev"](!0) : n.switchSlide(r, !0), n.pulling = !1, o && n.autoplay()
                                            },
                                            n = this,
                                            r = this.props,
                                            o = r.autoplay,
                                            s = r.initialSlide,
                                            a = this.isHorizontal(),
                                            l = this.isLtr(),
                                            c = a ? "Left" : "Up",
                                            u = a ? "Right" : "Down";
                                        this.pullElement = new(b())((t = {
                                            wait: !1,
                                            target: this.$refs.target,
                                            transitionProperty: "transform"
                                        }, (0, f.A)(t, "onPull".concat(c), e), (0, f.A)(t, "onPull".concat(u), e), (0, f.A)(t, "onPull".concat(c, "End"), i), (0, f.A)(t, "onPull".concat(u, "End"), i), (0, f.A)(t, "translateZ", this.props.translateZ), t)), this.pullElement.init(), this.switchSlide(s, !1), o && this.autoplay()
                                    }, n.render = function() {
                                        var t = this.props,
                                            e = t.slidesPerView,
                                            i = t.slidesPerGroup,
                                            n = t.children,
                                            r = t.direction,
                                            o = t.customPagination,
                                            a = this.state.activeIndex,
                                            l = s().Children.count(n);
                                        this.count = l;
                                        var c = s().Children.toArray(n),
                                            u = this.getLoop();
                                        if (u) {
                                            var h, d, p = c.slice(0, i),
                                                f = c.slice(-i);
                                            (h = c).push.apply(h, (0, g.A)(p)), (d = c).unshift.apply(d, (0, g.A)(f))
                                        }
                                        var m, v = this.isLtr(),
                                            x = this.getGapPx(),
                                            b = this.isHorizontal(),
                                            y = O((e - 1) * x / e),
                                            w = c.map((function(t, n) {
                                                var r = a === n;
                                                u && (r = 0 === a ? n === i || n === l + i : a === l - 1 ? n === l + (i - 1) || n === i - 1 : a === n - i);
                                                var o = {
                                                    width: "calc(".concat(O(100 / e), "% - ").concat(y, "px)")
                                                };
                                                return o[b ? v ? "marginRight" : "marginLeft" : "marginBottom"] = "".concat(x, "px"), s().createElement("div", {
                                                    key: n,
                                                    "data-active": r,
                                                    className: "slide",
                                                    style: o,
                                                    children: t
                                                })
                                            }));
                                        if ("function" == typeof o) {
                                            var T = this;
                                            m = o({
                                                total: l,
                                                currentIndex: a,
                                                onClick: function(t) {
                                                    return T.switchSlide(t, !0)
                                                }
                                            })
                                        }
                                        return s().createElement(s().Fragment, null, s().createElement(k, null), s().createElement("div", {
                                            className: "mica-slider",
                                            "data-direction": r
                                        }, s().createElement("div", {
                                            className: "slide-wrapper",
                                            ref: this.setRefs("target")
                                        }, w), m))
                                    }, n.getLoop = function() {
                                        var t = this.props,
                                            e = t.loop,
                                            i = t.slidesPerGroup;
                                        return this.state.isClient && e && this.count > i
                                    }, n.isHorizontal = function() {
                                        return "horizontal" === this.props.direction
                                    }, n.isLtr = function() {
                                        return "ltr" === this.props.dir
                                    }, n.getGapPx = function() {
                                        return parseFloat(this.props.gap)
                                    }, n.pxGetter = function(t) {
                                        return parseFloat(t)
                                    }, i
                                }(s().PureComponent);
                            A.defaultProps = {
                                gap: "0px",
                                initialSlide: 0,
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                direction: "horizontal",
                                customPagination: !1,
                                translateZ: !0,
                                onSlide: function() {
                                    return !1
                                },
                                dir: "ltr"
                            };
                            const M = A;
                            var L = i(88238),
                                R = i(92484),
                                C = i(4139),
                                j = i(6668),
                                G = i(66982),
                                z = i(750),
                                U = i(30052);

                            function X(t, e) {
                                var i = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    e && (n = n.filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))), i.push.apply(i, n)
                                }
                                return i
                            }
                            var Y = {
                                    pt: ["sm", "md"],
                                    justifyContent: "center",
                                    display: ["flex", "flex", "flex"],
                                    pointerEvents: "auto",
                                    ">div[data-active=true]": {
                                        width: 20,
                                        bg: "t.primary"
                                    },
                                    ">div": {
                                        height: [3, 4],
                                        width: 14,
                                        mx: "3px",
                                        bg: "t.disabled",
                                        cursor: "pointer",
                                        transition: "all 0.2s"
                                    }
                                },
                                N = t => {
                                    var {
                                        description: e,
                                        link: i,
                                        imgUrl: c,
                                        track: d,
                                        index: p,
                                        editorTheme: f,
                                        isMarketing: m
                                    } = t, {
                                        getImageURL: g
                                    } = (0, G.CV)(), {
                                        primaryColor: v
                                    } = (0, z.cm)(f), x = g(c), b = (0, U.cZ)(x), y = (0, o.useMemo)((() => function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var i = null != arguments[e] ? arguments[e] : {};
                                            e % 2 ? X(Object(i), !0).forEach((function(e) {
                                                (0, r.A)(t, e, i[e])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : X(Object(i)).forEach((function(e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                            }))
                                        }
                                        return t
                                    }({}, i && {
                                        onClick: t => {
                                            "function" == typeof d && d(t, i, p)
                                        },
                                        href: i
                                    })), [i, p]), w = (0, o.useMemo)((() => m ? {
                                        borderRadius: 24,
                                        overflow: "hidden",
                                        mb: "24px",
                                        "& iframe": {
                                            borderRadius: "24px",
                                            bg: "rgba(0, 0, 0, 0.2)"
                                        },
                                        "& .mica-lazy-img": {
                                            bg: "rgba(0, 0, 0, 0.2)",
                                            borderRadius: 24,
                                            backgroundSize: "cover !important"
                                        }
                                    } : {
                                        borderRadius: 8,
                                        mb: "sm",
                                        overflow: "hidden"
                                    }), [m]), T = (0, z._L)({
                                        isMarketing: m,
                                        primaryColor: v,
                                        extraSx: {
                                            height: 48
                                        }
                                    });
                                    return s().createElement(a.A, (0, n.A)({}, y, {
                                        as: i ? l.N : a.A,
                                        __css: {
                                            display: "block",
                                            fontSize: "md",
                                            color: "t.primary",
                                            textDecoration: "none"
                                        },
                                        sx: {
                                            lineHeight: "24px",
                                            "&:hover .link": {
                                                display: "flex"
                                            }
                                        }
                                    }), s().createElement(a.A, {
                                        sx: w,
                                        children: s().createElement(u.A, {
                                            mask: !0,
                                            showImg: !b,
                                            imgUrl: x,
                                            videoUrl: x
                                        })
                                    }), s().createElement(h.A, {
                                        line: 2,
                                        sx: T,
                                        value: e
                                    }))
                                },
                                H = t => {
                                    var {
                                        list: e,
                                        title: i,
                                        editorTheme: r,
                                        isMarketing: l
                                    } = t, u = (0, L.B)(), h = (0, R.jH)(), {
                                        isDesktop: d
                                    } = (0, R.Qs)(), p = d ? 3 : 1, f = e.concat(d ? [null, null] : []), m = Math.floor(f.length / p), g = "a".repeat(m).split(""), v = (0, o.useCallback)(((t, e, n) => {
                                        u({
                                            elementId: "pictureInfo",
                                            extraInfo: {
                                                link: e,
                                                index: n,
                                                title: i,
                                                ModuleTitle: "PictureInfo"
                                            }
                                        })
                                    }), [i]), x = (0, o.useCallback)((t => {
                                        var {
                                            total: e,
                                            currentIndex: i,
                                            onClick: n
                                        } = t, r = "a".repeat(e).split("").map(((t, e) => s().createElement(a.A, {
                                            key: e,
                                            onClick: () => n(e),
                                            "data-active": i === e
                                        })));
                                        return e > 1 ? s().createElement(c.A, {
                                            sx: Y,
                                            children: r
                                        }) : null
                                    }), []);
                                    return s().createElement(M, {
                                        gap: 24,
                                        loop: !0,
                                        customPagination: x,
                                        dir: h
                                    }, g.map(((t, e) => s().createElement(c.A, {
                                        key: e,
                                        sx: {
                                            justifyContent: "space-between"
                                        }
                                    }, ((t, e, i) => t.slice(e * i, (+e + 1) * i))(f, e, p).map(((t, e) => s().createElement(a.A, {
                                        key: e,
                                        sx: {
                                            width: ["auto", "auto", "384px"],
                                            flex: [1, 1, "none"],
                                            mr: [0, "sm"],
                                            "&:last-of-type": {
                                                mr: 0
                                            }
                                        },
                                        children: t ? s().createElement(N, (0, n.A)({}, t, {
                                            index: e,
                                            track: v,
                                            editorTheme: r,
                                            isMarketing: l
                                        })) : null
                                    })))))))
                                };
                            const W = (0, C.j)((t => {
                                var {
                                    editorTheme: e,
                                    isMarketing: i,
                                    title: n,
                                    subTitle: r,
                                    alignTitle: o,
                                    infos: a
                                } = t;
                                return s().createElement(j.R, {
                                    editorTheme: e,
                                    isMarketing: i,
                                    title: n,
                                    subTitle: r,
                                    alignTitle: o
                                }, s().createElement(H, {
                                    title: n,
                                    list: a,
                                    editorTheme: e,
                                    isMarketing: i
                                }))
                            }), {
                                trackCompName: "PictureCards",
                                layoutBoxCss: {
                                    overflow: "hidden"
                                }
                            })
                        },
                        29682: function(t) {
                            t.exports = function() {
                                "use strict";

                                function t(t) {
                                    for (var e = arguments, i = e.length, n = 1; n < i; n++) {
                                        var r = e[n];
                                        for (var o in r) t[o] = r[o]
                                    }
                                    return t
                                }

                                function e(t) {
                                    return "number" == typeof t && !isNaN(t)
                                }

                                function i(t) {
                                    return "function" == typeof t
                                }

                                function n(t, e) {
                                    var i, n, r, o, s = t.scrollWidth,
                                        a = t.scrollHeight;
                                    if (e) {
                                        var l = document.documentElement,
                                            c = document.body;
                                        r = l.clientWidth, o = l.clientHeight, i = c.scrollTop || l.scrollTop, n = c.scrollLeft || l.scrollLeft
                                    } else r = t.offsetWidth, o = t.offsetHeight, i = t.scrollTop, n = t.scrollLeft;
                                    return {
                                        isScrollTopEnd: i <= 0,
                                        isScrollBottomEnd: o + i >= a,
                                        isScrollLeftEnd: n <= 0,
                                        isScrollRightEnd: r + n >= s
                                    }
                                }

                                function r(t) {
                                    return "string" == typeof t ? document.querySelector(t) : t
                                }

                                function o(t, e, i, n) {
                                    t.addEventListener(e, i, n)
                                }

                                function s(t, e, i) {
                                    t.removeEventListener(e, i)
                                }

                                function a(t) {
                                    var e = t.touches[0];
                                    return {
                                        x: e.clientX,
                                        y: e.clientY
                                    }
                                }

                                function l(t, n) {
                                    return i(n) ? n(t) : e(n) ? t / n : t
                                }

                                function c(t, e, i) {
                                    var n = i ? "translate(" + t + "px," + e + "px) translateZ(0)" : "translate(" + t + "px," + e + "px)";
                                    return {
                                        transform: n,
                                        webkitTransform: n
                                    }
                                }
                                var u = {
                                        passive: !1
                                    },
                                    h = {
                                        transition: "",
                                        transform: "",
                                        webkitTransform: "",
                                        webkitTransition: ""
                                    },
                                    d = {
                                        transition: "",
                                        webkitTransition: ""
                                    },
                                    p = {
                                        pullDown: "onPullDown",
                                        pullUp: "onPullUp",
                                        pullRight: "onPullRight",
                                        pullLeft: "onPullLeft"
                                    },
                                    f = {
                                        pullDown: "isScrollTopEnd",
                                        pullUp: "isScrollBottomEnd",
                                        pullRight: "isScrollLeftEnd",
                                        pullLeft: "isScrollRightEnd"
                                    },
                                    m = {
                                        action: "",
                                        axis: "",
                                        translateX: 0,
                                        translateY: 0
                                    },
                                    g = t({
                                        isScrollTopEnd: !0,
                                        isScrollLeftEnd: !0,
                                        isScrollBottomEnd: !0,
                                        isScrollRightEnd: !0,
                                        clientX: 0,
                                        clientY: 0
                                    }, m),
                                    v = {
                                        target: "body",
                                        scroller: "",
                                        trigger: "",
                                        damping: 1.6,
                                        wait: !0,
                                        pullUp: !1,
                                        pullDown: !1,
                                        pullLeft: !1,
                                        pullRight: !1,
                                        detectScroll: !1,
                                        detectScrollOnStart: !1,
                                        stopPropagation: !1,
                                        drag: !1,
                                        transitionProperty: "transform",
                                        transitionDuration: "0.3s",
                                        transitionTimingFunction: "ease-out",
                                        translateZ: !0
                                    },
                                    x = "function" == typeof Promise;

                                function b(e) {
                                    this.options = t({}, v, e), this.state = t({}, g), this.target = null, this.scroller = null, this.trigger = null, this.transitionStyle = null, this.isTouching = !1, this.isPreventDefault = !1, this.isWaiting = !1, this.isGlobalScroller = !1, this.transitionDuration = 0, this.handleTouchStart = this.handleTouchStart.bind(this), this.handleTouchMove = this.handleTouchMove.bind(this), this.handleTouchEnd = this.handleTouchEnd.bind(this)
                                }
                                return t(b.prototype, {
                                    init: function() {
                                        var t = this.options,
                                            e = r(t.target),
                                            i = t.scroller ? r(t.scroller) : e,
                                            n = t.trigger ? r(t.trigger) : e;
                                        this.target = e, this.scroller = i, this.trigger = n, this.isGlobalScroller = i === document.body || i === window || i === document.documentElement, this.transitionStyle = {
                                            transitionProperty: t.transitionProperty,
                                            transitionDuration: t.transitionDuration,
                                            transitionTimingFunction: t.transitionTimingFunction,
                                            webkitTransitionProperty: t.transitionProperty,
                                            webkitTransitionDuration: t.transitionDuration,
                                            webkitTransitionTimingFunction: t.transitionTimingFunction
                                        };
                                        var o = Number(t.transitionDuration.replace(/[^.\d]+/g, ""));
                                        /[\d\.]+s$/.test(t.transitionDuration) && (o *= 1e3), this.transitionDuration = o, this.enable()
                                    },
                                    destroy: function() {
                                        this.disable()
                                    },
                                    setTranslate: function(e, i) {
                                        t(this.target.style, d, c(e, i, this.options.translateZ))
                                    },
                                    animateTo: function(e, i, n) {
                                        var r = this.state,
                                            o = this.target,
                                            s = this.transitionDuration,
                                            a = this.transitionStyle,
                                            l = c(e, i, this.options.translateZ);
                                        r.translateX = e, r.translateY = i;
                                        var u = function(e) {
                                            t(o.style, a, l), setTimeout(e, s)
                                        };
                                        if (x) return new Promise(u).then(n);
                                        u(n)
                                    },
                                    animateToOrigin: function(e) {
                                        var i = this,
                                            n = function() {
                                                t(i.target.style, h), t(i.state, m), i.isWaiting = !1, e && e()
                                            };
                                        return this.animateTo(0, 0, n)
                                    },
                                    enable: function() {
                                        o(this.trigger, "touchstart", this.handleTouchStart), o(document, "touchmove", this.handleTouchMove, u), o(document, "touchend", this.handleTouchEnd), o(document, "touchcancel", this.handleTouchEnd)
                                    },
                                    disable: function() {
                                        s(this.trigger, "touchstart", this.handleTouchStart), s(document, "touchmove", this.handleTouchMove, u), s(document, "touchend", this.handleTouchEnd), s(document, "touchcancel", this.handleTouchEnd)
                                    },
                                    preventDefault: function() {
                                        this.isPreventDefault = !0
                                    },
                                    getScrollInfo: function() {
                                        return n(this.scroller, this.isGlobalScroller)
                                    },
                                    isActiveAction: function(t) {
                                        var e = this.options,
                                            i = p[t];
                                        return e[i] || e[i + "End"] || e[t]
                                    },
                                    emit: function(t, e) {
                                        var n = this.options[t];
                                        i(n) && n.call(this, e)
                                    },
                                    handleTouchStart: function(e) {
                                        if (!this.isTouching && !this.isWaiting) {
                                            var i = this.options,
                                                n = a(e);
                                            t(this.state, {
                                                clientX: n.x,
                                                clientY: n.y,
                                                axis: "",
                                                action: ""
                                            }), (i.detectScroll || i.detectScrollOnStart) && t(this.state, this.getScrollInfo()), i.stopPropagation && e.stopPropagation(), this.isTouching = !0
                                        }
                                    },
                                    handleTouchMove: function(e) {
                                        if (this.isTouching) {
                                            var i = a(e),
                                                n = this.options,
                                                r = this.state,
                                                o = i.x,
                                                s = i.y,
                                                c = o - r.clientX,
                                                u = s - r.clientY,
                                                h = r.translateX,
                                                d = r.translateY,
                                                m = r.axis,
                                                g = r.action;
                                            m || (m = Math.abs(u) >= Math.abs(c) ? "y" : "x"), g || ("y" === m ? u > 0 ? g = "pullDown" : u < 0 && (g = "pullUp") : "x" === m && (c > 0 ? g = "pullRight" : c < 0 && (g = "pullLeft")));
                                            var v = this.isActiveAction(g);
                                            v && n.detectScroll && !r[f[g]] && (t(r, this.getScrollInfo()), r[f[g]] && (c = 0, u = 0));
                                            var x = v && r[f[g]];
                                            x && (h += l(c, n.damping), d += l(u, n.damping)), t(r, {
                                                clientX: o,
                                                clientY: s,
                                                translateX: h,
                                                translateY: d,
                                                action: g,
                                                axis: m
                                            }), x && (n.drag || ("y" === m ? h = 0 : "x" === m && (d = 0)), this.emit(p[g], {
                                                translateX: h,
                                                translateY: d
                                            }), this.isPreventDefault ? this.isPreventDefault = !1 : (n.wait && (this.isWaiting = !0), e.preventDefault(), this.setTranslate(h, d)))
                                        }
                                    },
                                    handleTouchEnd: function() {
                                        if (this.isTouching) {
                                            this.isTouching = !1;
                                            var t = this.state,
                                                e = t.action;
                                            this.isActiveAction(e) && t[f[e]] && (this.emit(p[e] + "End", {
                                                translateX: t.translateX,
                                                translateY: t.translateY
                                            }), this.isPreventDefault ? this.isPreventDefault = !1 : this.animateToOrigin())
                                        }
                                    }
                                }), b
                            }()
                        },
                        43477: t => {
                            "use strict";
                            t.exports = __IRIS_GLOBAL_MODULES__.React
                        },
                        11027: t => {
                            "use strict";
                            t.exports = __IRIS_MUSES__.BinanceTrack
                        },
                        32336: t => {
                            "use strict";
                            t.exports = __IRIS_MUSES__.EmotionCore
                        },
                        8913: t => {
                            "use strict";
                            t.exports = __IRIS_MUSES__.MusesComponentTrack
                        },
                        48753: t => {
                            "use strict";
                            t.exports = __IRIS_MUSES__.ReactRedux
                        }
                    },
                    i = {};

                function n(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var o = i[t] = {
                        id: t,
                        loaded: !1,
                        exports: {}
                    };
                    return e[t].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
                }
                n.m = e, t = [], n.O = (e, i, r, o) => {
                    if (!i) {
                        var s = 1 / 0;
                        for (u = 0; u < t.length; u++) {
                            for (var [i, r, o] = t[u], a = !0, l = 0; l < i.length; l++)(!1 & o || s >= o) && Object.keys(n.O).every((t => n.O[t](i[l]))) ? i.splice(l--, 1) : (a = !1, o < s && (s = o));
                            if (a) {
                                t.splice(u--, 1);
                                var c = r();
                                void 0 !== c && (e = c)
                            }
                        }
                        return e
                    }
                    o = o || 0;
                    for (var u = t.length; u > 0 && t[u - 1][2] > o; u--) t[u] = t[u - 1];
                    t[u] = [i, r, o]
                }, n.n = t => {
                    var e = t && t.__esModule ? () => t.default : () => t;
                    return n.d(e, {
                        a: e
                    }), e
                }, n.d = (t, e) => {
                    for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }, n.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (t) {
                        if ("object" == typeof window) return window
                    }
                }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.nmd = t => (t.paths = [], t.children || (t.children = []), t), n.j = 29, (() => {
                    var t = {
                        29: 0
                    };
                    n.O.j = e => 0 === t[e];
                    var e = (e, i) => {
                            var r, o, [s, a, l] = i,
                                c = 0;
                            if (s.some((e => 0 !== t[e]))) {
                                for (r in a) n.o(a, r) && (n.m[r] = a[r]);
                                if (l) var u = l(n)
                            }
                            for (e && e(i); c < s.length; c++) o = s[c], n.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                            return n.O(u)
                        },
                        i = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
                })();
                var r = n.O(void 0, [121], (() => n(48202)));
                r = n.O(r), _iris__binance_iris_muses_PictureInfoPane = r
            })();
            return _iris__binance_iris_muses_PictureInfoPane.default ? _iris__binance_iris_muses_PictureInfoPane.default : _iris__binance_iris_muses_PictureInfoPane
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "PictureInfoPane"], factory()
    ])
})()