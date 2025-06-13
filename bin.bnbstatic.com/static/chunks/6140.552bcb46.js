"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [6140], {
        pdXn: (e, t, i) => {
            i.d(t, {
                Ay: () => u
            });
            var n = i("DTvD");
            let r;
            r = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : i.g;
            let o = null,
                s = null;
            const a = r.clearTimeout,
                l = r.setTimeout,
                c = r.cancelAnimationFrame || r.mozCancelAnimationFrame || r.webkitCancelAnimationFrame,
                d = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame;

            function h(e) {
                let t, i, n, a, l, c, d;
                const h = "undefined" !== typeof document && document.attachEvent;
                if (!h) {
                    c = function(e) {
                        const t = e.__resizeTriggers__,
                            i = t.firstElementChild,
                            n = t.lastElementChild,
                            r = i.firstElementChild;
                        n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, r.style.width = i.offsetWidth + 1 + "px", r.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
                    }, l = function(e) {
                        return e.offsetWidth !== e.__resizeLast__.width || e.offsetHeight !== e.__resizeLast__.height
                    }, d = function(e) {
                        if (e.target.className && "function" === typeof e.target.className.indexOf && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) return;
                        const t = this;
                        c(this), this.__resizeRAF__ && o(this.__resizeRAF__), this.__resizeRAF__ = s((function() {
                            l(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach((function(i) {
                                i.call(t, e)
                            })))
                        }))
                    };
                    let e = !1,
                        r = "";
                    n = "animationstart";
                    const h = "Webkit Moz O ms".split(" ");
                    let u = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                        f = ""; {
                        const t = document.createElement("fakeelement");
                        if (void 0 !== t.style.animationName && (e = !0), !1 === e)
                            for (let i = 0; i < h.length; i++)
                                if (void 0 !== t.style[h[i] + "AnimationName"]) {
                                    f = h[i], r = "-" + f.toLowerCase() + "-", n = u[i], e = !0;
                                    break
                                }
                    }
                    i = "resizeanim", t = "@" + r + "keyframes " + i + " { from { opacity: 0; } to { opacity: 0; } } ", a = r + "animation: 1ms " + i + "; "
                }
                return {
                    addResizeListener: function(o, s) {
                        if (h) o.attachEvent("onresize", s);
                        else {
                            if (!o.__resizeTriggers__) {
                                const s = o.ownerDocument,
                                    l = r.getComputedStyle(o);
                                l && "static" === l.position && (o.style.position = "relative"),
                                    function(i) {
                                        if (!i.getElementById("detectElementResize")) {
                                            const n = (t || "") + ".resize-triggers { " + (a || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                                r = i.head || i.getElementsByTagName("head")[0],
                                                o = i.createElement("style");
                                            o.id = "detectElementResize", o.type = "text/css", null != e && o.setAttribute("nonce", e), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(i.createTextNode(n)), r.appendChild(o)
                                        }
                                    }(s), o.__resizeLast__ = {}, o.__resizeListeners__ = [], (o.__resizeTriggers__ = s.createElement("div")).className = "resize-triggers";
                                const h = s.createElement("div");
                                h.className = "expand-trigger", h.appendChild(s.createElement("div"));
                                const u = s.createElement("div");
                                u.className = "contract-trigger", o.__resizeTriggers__.appendChild(h), o.__resizeTriggers__.appendChild(u), o.appendChild(o.__resizeTriggers__), c(o), o.addEventListener("scroll", d, !0), n && (o.__resizeTriggers__.__animationListener__ = function(e) {
                                    e.animationName === i && c(o)
                                }, o.__resizeTriggers__.addEventListener(n, o.__resizeTriggers__.__animationListener__))
                            }
                            o.__resizeListeners__.push(s)
                        }
                    },
                    removeResizeListener: function(e, t) {
                        if (h) e.detachEvent("onresize", t);
                        else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), !e.__resizeListeners__.length) {
                            e.removeEventListener("scroll", d, !0), e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(n, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
                            try {
                                e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__)
                            } catch (i) {}
                        }
                    }
                }
            }
            null == c || null == d ? (o = a, s = function(e) {
                return l(e, 20)
            }) : (o = function([e, t]) {
                c(e), a(t)
            }, s = function(e) {
                const t = d((function() {
                        a(i), e()
                    })),
                    i = l((function() {
                        c(t), e()
                    }), 20);
                return [t, i]
            });
            class u extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        height: this.props.defaultHeight || 0,
                        scaledHeight: this.props.defaultHeight || 0,
                        scaledWidth: this.props.defaultWidth || 0,
                        width: this.props.defaultWidth || 0
                    }, this._autoSizer = null, this._detectElementResize = null, this._parentNode = null, this._resizeObserver = null, this._timeoutId = null, this._onResize = () => {
                        this._timeoutId = null;
                        const {
                            disableHeight: e,
                            disableWidth: t,
                            onResize: i
                        } = this.props;
                        if (this._parentNode) {
                            const n = window.getComputedStyle(this._parentNode) || {},
                                r = parseFloat(n.paddingLeft || "0"),
                                o = parseFloat(n.paddingRight || "0"),
                                s = parseFloat(n.paddingTop || "0"),
                                a = parseFloat(n.paddingBottom || "0"),
                                l = this._parentNode.getBoundingClientRect(),
                                c = l.height - s - a,
                                d = l.width - r - o,
                                h = this._parentNode.offsetHeight - s - a,
                                u = this._parentNode.offsetWidth - r - o;
                            (e || this.state.height === h && this.state.scaledHeight === c) && (t || this.state.width === u && this.state.scaledWidth === d) || (this.setState({
                                height: h,
                                width: u,
                                scaledHeight: c,
                                scaledWidth: d
                            }), "function" === typeof i && i({
                                height: h,
                                scaledHeight: c,
                                scaledWidth: d,
                                width: u
                            }))
                        }
                    }, this._setRef = e => {
                        this._autoSizer = e
                    }
                }
                componentDidMount() {
                    const {
                        nonce: e
                    } = this.props, t = this._autoSizer ? this._autoSizer.parentNode : null;
                    if (null != t && t.ownerDocument && t.ownerDocument.defaultView && t instanceof t.ownerDocument.defaultView.HTMLElement) {
                        this._parentNode = t;
                        const i = t.ownerDocument.defaultView.ResizeObserver;
                        null != i ? (this._resizeObserver = new i((() => {
                            this._timeoutId = setTimeout(this._onResize, 0)
                        })), this._resizeObserver.observe(t)) : (this._detectElementResize = h(e), this._detectElementResize.addResizeListener(t, this._onResize)), this._onResize()
                    }
                }
                componentWillUnmount() {
                    this._parentNode && (this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize), null !== this._timeoutId && clearTimeout(this._timeoutId), this._resizeObserver && this._resizeObserver.disconnect())
                }
                render() {
                    const {
                        children: e,
                        defaultHeight: t,
                        defaultWidth: i,
                        disableHeight: r = !1,
                        disableWidth: o = !1,
                        doNotBailOutOnEmptyChildren: s = !1,
                        nonce: a,
                        onResize: l,
                        style: c = {},
                        tagName: d = "div",
                        ...h
                    } = this.props, {
                        height: u,
                        scaledHeight: f,
                        scaledWidth: m,
                        width: _
                    } = this.state, p = {
                        overflow: "visible"
                    }, g = {};
                    let v = !1;
                    return r || (0 === u && (v = !0), p.height = 0, g.height = u, g.scaledHeight = f), o || (0 === _ && (v = !0), p.width = 0, g.width = _, g.scaledWidth = m), s && (v = !1), (0, n.createElement)(d, {
                        ref: this._setRef,
                        style: { ...p,
                            ...c
                        },
                        ...h
                    }, !v && e(g))
                }
            }
        },
        O3zE: (e, t, i) => {
            i.d(t, {
                Y1: () => x,
                _m: () => R
            });
            var n = i("6bae"),
                r = i("jgZO"),
                o = i("giWm"),
                s = Number.isNaN || function(e) {
                    return "number" === typeof e && e !== e
                };

            function a(e, t) {
                if (e.length !== t.length) return !1;
                for (var i = 0; i < e.length; i++)
                    if (n = e[i], r = t[i], !(n === r || s(n) && s(r))) return !1;
                var n, r;
                return !0
            }
            const l = function(e, t) {
                var i;
                void 0 === t && (t = a);
                var n, r = [],
                    o = !1;
                return function() {
                    for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
                    return o && i === this && t(s, r) || (n = e.apply(this, s), o = !0, i = this, r = s), n
                }
            };
            var c = i("DTvD"),
                d = "object" === typeof performance && "function" === typeof performance.now ? function() {
                    return performance.now()
                } : function() {
                    return Date.now()
                };

            function h(e) {
                cancelAnimationFrame(e.id)
            }

            function u(e, t) {
                var i = d();
                var n = {
                    id: requestAnimationFrame((function r() {
                        d() - i >= t ? e.call(null) : n.id = requestAnimationFrame(r)
                    }))
                };
                return n
            }
            var f = -1;

            function m(e) {
                if (void 0 === e && (e = !1), -1 === f || e) {
                    var t = document.createElement("div"),
                        i = t.style;
                    i.width = "50px", i.height = "50px", i.overflow = "scroll", document.body.appendChild(t), f = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return f
            }
            var _ = null;

            function p(e) {
                if (void 0 === e && (e = !1), null === _ || e) {
                    var t = document.createElement("div"),
                        i = t.style;
                    i.width = "50px", i.height = "50px", i.overflow = "scroll", i.direction = "rtl";
                    var n = document.createElement("div"),
                        r = n.style;
                    return r.width = "100px", r.height = "100px", t.appendChild(n), document.body.appendChild(t), t.scrollLeft > 0 ? _ = "positive-descending" : (t.scrollLeft = 1, _ = 0 === t.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(t), _
                }
                return _
            }
            var g = function(e, t) {
                return e
            };

            function v(e) {
                var t, i = e.getItemOffset,
                    s = e.getEstimatedTotalSize,
                    a = e.getItemSize,
                    d = e.getOffsetForIndexAndAlignment,
                    f = e.getStartIndexForOffset,
                    _ = e.getStopIndexForStartIndex,
                    v = e.initInstanceProps,
                    S = e.shouldResetStyleCacheOnItemSizeChange,
                    I = e.validateProps;
                return t = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this)._instanceProps = v(n.props, (0, r.A)(n)), n._outerRef = void 0, n._resetIsScrollingTimeoutId = null, n.state = {
                            instance: (0, r.A)(n),
                            isScrolling: !1,
                            scrollDirection: "forward",
                            scrollOffset: "number" === typeof n.props.initialScrollOffset ? n.props.initialScrollOffset : 0,
                            scrollUpdateWasRequested: !1
                        }, n._callOnItemsRendered = void 0, n._callOnItemsRendered = l((function(e, t, i, r) {
                            return n.props.onItemsRendered({
                                overscanStartIndex: e,
                                overscanStopIndex: t,
                                visibleStartIndex: i,
                                visibleStopIndex: r
                            })
                        })), n._callOnScroll = void 0, n._callOnScroll = l((function(e, t, i) {
                            return n.props.onScroll({
                                scrollDirection: e,
                                scrollOffset: t,
                                scrollUpdateWasRequested: i
                            })
                        })), n._getItemStyle = void 0, n._getItemStyle = function(e) {
                            var t, r = n.props,
                                o = r.direction,
                                s = r.itemSize,
                                l = r.layout,
                                c = n._getItemStyleCache(S && s, S && l, S && o);
                            if (c.hasOwnProperty(e)) t = c[e];
                            else {
                                var d = i(n.props, e, n._instanceProps),
                                    h = a(n.props, e, n._instanceProps),
                                    u = "horizontal" === o || "horizontal" === l,
                                    f = "rtl" === o,
                                    m = u ? d : 0;
                                c[e] = t = {
                                    position: "absolute",
                                    left: f ? void 0 : m,
                                    right: f ? m : void 0,
                                    top: u ? 0 : d,
                                    height: u ? "100%" : h,
                                    width: u ? h : "100%"
                                }
                            }
                            return t
                        }, n._getItemStyleCache = void 0, n._getItemStyleCache = l((function(e, t, i) {
                            return {}
                        })), n._onScrollHorizontal = function(e) {
                            var t = e.currentTarget,
                                i = t.clientWidth,
                                r = t.scrollLeft,
                                o = t.scrollWidth;
                            n.setState((function(e) {
                                if (e.scrollOffset === r) return null;
                                var t = n.props.direction,
                                    s = r;
                                if ("rtl" === t) switch (p()) {
                                    case "negative":
                                        s = -r;
                                        break;
                                    case "positive-descending":
                                        s = o - i - r
                                }
                                return s = Math.max(0, Math.min(s, o - i)), {
                                    isScrolling: !0,
                                    scrollDirection: e.scrollOffset < s ? "forward" : "backward",
                                    scrollOffset: s,
                                    scrollUpdateWasRequested: !1
                                }
                            }), n._resetIsScrollingDebounced)
                        }, n._onScrollVertical = function(e) {
                            var t = e.currentTarget,
                                i = t.clientHeight,
                                r = t.scrollHeight,
                                o = t.scrollTop;
                            n.setState((function(e) {
                                if (e.scrollOffset === o) return null;
                                var t = Math.max(0, Math.min(o, r - i));
                                return {
                                    isScrolling: !0,
                                    scrollDirection: e.scrollOffset < t ? "forward" : "backward",
                                    scrollOffset: t,
                                    scrollUpdateWasRequested: !1
                                }
                            }), n._resetIsScrollingDebounced)
                        }, n._outerRefSetter = function(e) {
                            var t = n.props.outerRef;
                            n._outerRef = e, "function" === typeof t ? t(e) : null != t && "object" === typeof t && t.hasOwnProperty("current") && (t.current = e)
                        }, n._resetIsScrollingDebounced = function() {
                            null !== n._resetIsScrollingTimeoutId && h(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = u(n._resetIsScrolling, 150)
                        }, n._resetIsScrolling = function() {
                            n._resetIsScrollingTimeoutId = null, n.setState({
                                isScrolling: !1
                            }, (function() {
                                n._getItemStyleCache(-1, null)
                            }))
                        }, n
                    }(0, o.A)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return z(e, t), I(e), null
                    };
                    var y = t.prototype;
                    return y.scrollTo = function(e) {
                        e = Math.max(0, e), this.setState((function(t) {
                            return t.scrollOffset === e ? null : {
                                scrollDirection: t.scrollOffset < e ? "forward" : "backward",
                                scrollOffset: e,
                                scrollUpdateWasRequested: !0
                            }
                        }), this._resetIsScrollingDebounced)
                    }, y.scrollToItem = function(e, t) {
                        void 0 === t && (t = "auto");
                        var i = this.props,
                            n = i.itemCount,
                            r = i.layout,
                            o = this.state.scrollOffset;
                        e = Math.max(0, Math.min(e, n - 1));
                        var s = 0;
                        if (this._outerRef) {
                            var a = this._outerRef;
                            s = "vertical" === r ? a.scrollWidth > a.clientWidth ? m() : 0 : a.scrollHeight > a.clientHeight ? m() : 0
                        }
                        this.scrollTo(d(this.props, e, t, o, this._instanceProps, s))
                    }, y.componentDidMount = function() {
                        var e = this.props,
                            t = e.direction,
                            i = e.initialScrollOffset,
                            n = e.layout;
                        if ("number" === typeof i && null != this._outerRef) {
                            var r = this._outerRef;
                            "horizontal" === t || "horizontal" === n ? r.scrollLeft = i : r.scrollTop = i
                        }
                        this._callPropsCallbacks()
                    }, y.componentDidUpdate = function() {
                        var e = this.props,
                            t = e.direction,
                            i = e.layout,
                            n = this.state,
                            r = n.scrollOffset;
                        if (n.scrollUpdateWasRequested && null != this._outerRef) {
                            var o = this._outerRef;
                            if ("horizontal" === t || "horizontal" === i)
                                if ("rtl" === t) switch (p()) {
                                    case "negative":
                                        o.scrollLeft = -r;
                                        break;
                                    case "positive-ascending":
                                        o.scrollLeft = r;
                                        break;
                                    default:
                                        var s = o.clientWidth,
                                            a = o.scrollWidth;
                                        o.scrollLeft = a - s - r
                                } else o.scrollLeft = r;
                                else o.scrollTop = r
                        }
                        this._callPropsCallbacks()
                    }, y.componentWillUnmount = function() {
                        null !== this._resetIsScrollingTimeoutId && h(this._resetIsScrollingTimeoutId)
                    }, y.render = function() {
                        var e = this.props,
                            t = e.children,
                            i = e.className,
                            r = e.direction,
                            o = e.height,
                            a = e.innerRef,
                            l = e.innerElementType,
                            d = e.innerTagName,
                            h = e.itemCount,
                            u = e.itemData,
                            f = e.itemKey,
                            m = void 0 === f ? g : f,
                            _ = e.layout,
                            p = e.outerElementType,
                            v = e.outerTagName,
                            z = e.style,
                            S = e.useIsScrolling,
                            I = e.width,
                            y = this.state.isScrolling,
                            w = "horizontal" === r || "horizontal" === _,
                            R = w ? this._onScrollHorizontal : this._onScrollVertical,
                            x = this._getRangeToRender(),
                            b = x[0],
                            M = x[1],
                            T = [];
                        if (h > 0)
                            for (var C = b; C <= M; C++) T.push((0, c.createElement)(t, {
                                data: u,
                                key: m(C, u),
                                index: C,
                                isScrolling: S ? y : void 0,
                                style: this._getItemStyle(C)
                            }));
                        var O = s(this.props, this._instanceProps);
                        return (0, c.createElement)(p || v || "div", {
                            className: i,
                            onScroll: R,
                            ref: this._outerRefSetter,
                            style: (0, n.A)({
                                position: "relative",
                                height: o,
                                width: I,
                                overflow: "auto",
                                WebkitOverflowScrolling: "touch",
                                willChange: "transform",
                                direction: r
                            }, z)
                        }, (0, c.createElement)(l || d || "div", {
                            children: T,
                            ref: a,
                            style: {
                                height: w ? "100%" : O,
                                pointerEvents: y ? "none" : void 0,
                                width: w ? O : "100%"
                            }
                        }))
                    }, y._callPropsCallbacks = function() {
                        if ("function" === typeof this.props.onItemsRendered && this.props.itemCount > 0) {
                            var e = this._getRangeToRender(),
                                t = e[0],
                                i = e[1],
                                n = e[2],
                                r = e[3];
                            this._callOnItemsRendered(t, i, n, r)
                        }
                        if ("function" === typeof this.props.onScroll) {
                            var o = this.state,
                                s = o.scrollDirection,
                                a = o.scrollOffset,
                                l = o.scrollUpdateWasRequested;
                            this._callOnScroll(s, a, l)
                        }
                    }, y._getRangeToRender = function() {
                        var e = this.props,
                            t = e.itemCount,
                            i = e.overscanCount,
                            n = this.state,
                            r = n.isScrolling,
                            o = n.scrollDirection,
                            s = n.scrollOffset;
                        if (0 === t) return [0, 0, 0, 0];
                        var a = f(this.props, s, this._instanceProps),
                            l = _(this.props, a, s, this._instanceProps),
                            c = r && "backward" !== o ? 1 : Math.max(1, i),
                            d = r && "forward" !== o ? 1 : Math.max(1, i);
                        return [Math.max(0, a - c), Math.max(0, Math.min(t - 1, l + d)), a, l]
                    }, t
                }(c.PureComponent), t.defaultProps = {
                    direction: "ltr",
                    itemData: void 0,
                    layout: "vertical",
                    overscanCount: 2,
                    useIsScrolling: !1
                }, t
            }
            var z = function(e, t) {
                    e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, t.instance
                },
                S = function(e, t, i) {
                    var n = e.itemSize,
                        r = i.itemMetadataMap,
                        o = i.lastMeasuredIndex;
                    if (t > o) {
                        var s = 0;
                        if (o >= 0) {
                            var a = r[o];
                            s = a.offset + a.size
                        }
                        for (var l = o + 1; l <= t; l++) {
                            var c = n(l);
                            r[l] = {
                                offset: s,
                                size: c
                            }, s += c
                        }
                        i.lastMeasuredIndex = t
                    }
                    return r[t]
                },
                I = function(e, t, i, n, r) {
                    for (; n <= i;) {
                        var o = n + Math.floor((i - n) / 2),
                            s = S(e, o, t).offset;
                        if (s === r) return o;
                        s < r ? n = o + 1 : s > r && (i = o - 1)
                    }
                    return n > 0 ? n - 1 : 0
                },
                y = function(e, t, i, n) {
                    for (var r = e.itemCount, o = 1; i < r && S(e, i, t).offset < n;) i += o, o *= 2;
                    return I(e, t, Math.min(i, r - 1), Math.floor(i / 2), n)
                },
                w = function(e, t) {
                    var i = e.itemCount,
                        n = t.itemMetadataMap,
                        r = t.estimatedItemSize,
                        o = t.lastMeasuredIndex,
                        s = 0;
                    if (o >= i && (o = i - 1), o >= 0) {
                        var a = n[o];
                        s = a.offset + a.size
                    }
                    return s + (i - o - 1) * r
                },
                R = v({
                    getItemOffset: function(e, t, i) {
                        return S(e, t, i).offset
                    },
                    getItemSize: function(e, t, i) {
                        return i.itemMetadataMap[t].size
                    },
                    getEstimatedTotalSize: w,
                    getOffsetForIndexAndAlignment: function(e, t, i, n, r, o) {
                        var s = e.direction,
                            a = e.height,
                            l = e.layout,
                            c = e.width,
                            d = "horizontal" === s || "horizontal" === l ? c : a,
                            h = S(e, t, r),
                            u = w(e, r),
                            f = Math.max(0, Math.min(u - d, h.offset)),
                            m = Math.max(0, h.offset - d + h.size + o);
                        switch ("smart" === i && (i = n >= m - d && n <= f + d ? "auto" : "center"), i) {
                            case "start":
                                return f;
                            case "end":
                                return m;
                            case "center":
                                return Math.round(m + (f - m) / 2);
                            default:
                                return n >= m && n <= f ? n : n < m ? m : f
                        }
                    },
                    getStartIndexForOffset: function(e, t, i) {
                        return function(e, t, i) {
                            var n = t.itemMetadataMap,
                                r = t.lastMeasuredIndex;
                            return (r > 0 ? n[r].offset : 0) >= i ? I(e, t, r, 0, i) : y(e, t, Math.max(0, r), i)
                        }(e, i, t)
                    },
                    getStopIndexForStartIndex: function(e, t, i, n) {
                        for (var r = e.direction, o = e.height, s = e.itemCount, a = e.layout, l = e.width, c = "horizontal" === r || "horizontal" === a ? l : o, d = S(e, t, n), h = i + c, u = d.offset + d.size, f = t; f < s - 1 && u < h;) f++, u += S(e, f, n).size;
                        return f
                    },
                    initInstanceProps: function(e, t) {
                        var i = {
                            itemMetadataMap: {},
                            estimatedItemSize: e.estimatedItemSize || 50,
                            lastMeasuredIndex: -1
                        };
                        return t.resetAfterIndex = function(e, n) {
                            void 0 === n && (n = !0), i.lastMeasuredIndex = Math.min(i.lastMeasuredIndex, e - 1), t._getItemStyleCache(-1), n && t.forceUpdate()
                        }, i
                    },
                    shouldResetStyleCacheOnItemSizeChange: !1,
                    validateProps: function(e) {
                        e.itemSize
                    }
                }),
                x = v({
                    getItemOffset: function(e, t) {
                        return t * e.itemSize
                    },
                    getItemSize: function(e, t) {
                        return e.itemSize
                    },
                    getEstimatedTotalSize: function(e) {
                        var t = e.itemCount;
                        return e.itemSize * t
                    },
                    getOffsetForIndexAndAlignment: function(e, t, i, n, r, o) {
                        var s = e.direction,
                            a = e.height,
                            l = e.itemCount,
                            c = e.itemSize,
                            d = e.layout,
                            h = e.width,
                            u = "horizontal" === s || "horizontal" === d ? h : a,
                            f = Math.max(0, l * c - u),
                            m = Math.min(f, t * c),
                            _ = Math.max(0, t * c - u + c + o);
                        switch ("smart" === i && (i = n >= _ - u && n <= m + u ? "auto" : "center"), i) {
                            case "start":
                                return m;
                            case "end":
                                return _;
                            case "center":
                                var p = Math.round(_ + (m - _) / 2);
                                return p < Math.ceil(u / 2) ? 0 : p > f + Math.floor(u / 2) ? f : p;
                            default:
                                return n >= _ && n <= m ? n : n < _ ? _ : m
                        }
                    },
                    getStartIndexForOffset: function(e, t) {
                        var i = e.itemCount,
                            n = e.itemSize;
                        return Math.max(0, Math.min(i - 1, Math.floor(t / n)))
                    },
                    getStopIndexForStartIndex: function(e, t, i) {
                        var n = e.direction,
                            r = e.height,
                            o = e.itemCount,
                            s = e.itemSize,
                            a = e.layout,
                            l = e.width,
                            c = t * s,
                            d = "horizontal" === n || "horizontal" === a ? l : r,
                            h = Math.ceil((d + i - c) / s);
                        return Math.max(0, Math.min(o - 1, t + h - 1))
                    },
                    initInstanceProps: function(e) {},
                    shouldResetStyleCacheOnItemSizeChange: !0,
                    validateProps: function(e) {
                        e.itemSize
                    }
                })
        }
    }
]);