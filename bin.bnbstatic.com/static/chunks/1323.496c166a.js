"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5d2806af-64e7-58ff-8c7f-41415497b32a")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1323], {
        K7MF: (t, e, n) => {
            function o(t) {
                var e, n, r = "";
                if ("string" == typeof t || "number" == typeof t) r += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t))
                        for (e = 0; e < t.length; e++) t[e] && (n = o(t[e])) && (r && (r += " "), r += n);
                    else
                        for (e in t) t[e] && (r && (r += " "), r += e);
                return r
            }

            function r() {
                for (var t, e, n = 0, r = ""; n < arguments.length;)(t = arguments[n++]) && (e = o(t)) && (r && (r += " "), r += e);
                return r
            }
            n.r(e), n.d(e, {
                clsx: () => r,
                default: () => a
            });
            const a = r
        },
        DMzc: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "DraggableCore", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), e.default = void 0;
            var o = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var n = p(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in t)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                            var i = r ? Object.getOwnPropertyDescriptor(t, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, a, i) : o[a] = t[a]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n("DTvD")),
                r = f(n("1YyT")),
                a = f(n("hTvQ")),
                i = f(n("K7MF")),
                s = n("JM1c"),
                l = n("sDv1"),
                u = n("6Blw"),
                c = f(n("ecmk")),
                d = f(n("Kile"));

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function p(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (p = function(t) {
                    return t ? n : e
                })(t)
            }

            function h() {
                return h = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                    }
                    return t
                }, h.apply(this, arguments)
            }

            function g(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(t, e || "default");
                            if ("object" !== typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            class m extends o.Component {
                static getDerivedStateFromProps(t, e) {
                    let {
                        position: n
                    } = t, {
                        prevPropsPosition: o
                    } = e;
                    return !n || o && n.x === o.x && n.y === o.y ? null : ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
                        position: n,
                        prevPropsPosition: o
                    }), {
                        x: n.x,
                        y: n.y,
                        prevPropsPosition: { ...n
                        }
                    })
                }
                constructor(t) {
                    super(t), g(this, "onDragStart", ((t, e) => {
                        (0, d.default)("Draggable: onDragStart: %j", e);
                        if (!1 === this.props.onStart(t, (0, l.createDraggableData)(this, e))) return !1;
                        this.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    })), g(this, "onDrag", ((t, e) => {
                        if (!this.state.dragging) return !1;
                        (0, d.default)("Draggable: onDrag: %j", e);
                        const n = (0, l.createDraggableData)(this, e),
                            o = {
                                x: n.x,
                                y: n.y,
                                slackX: 0,
                                slackY: 0
                            };
                        if (this.props.bounds) {
                            const {
                                x: t,
                                y: e
                            } = o;
                            o.x += this.state.slackX, o.y += this.state.slackY;
                            const [r, a] = (0, l.getBoundPosition)(this, o.x, o.y);
                            o.x = r, o.y = a, o.slackX = this.state.slackX + (t - o.x), o.slackY = this.state.slackY + (e - o.y), n.x = o.x, n.y = o.y, n.deltaX = o.x - this.state.x, n.deltaY = o.y - this.state.y
                        }
                        if (!1 === this.props.onDrag(t, n)) return !1;
                        this.setState(o)
                    })), g(this, "onDragStop", ((t, e) => {
                        if (!this.state.dragging) return !1;
                        if (!1 === this.props.onStop(t, (0, l.createDraggableData)(this, e))) return !1;
                        (0, d.default)("Draggable: onDragStop: %j", e);
                        const n = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (Boolean(this.props.position)) {
                            const {
                                x: t,
                                y: e
                            } = this.props.position;
                            n.x = t, n.y = e
                        }
                        this.setState(n)
                    })), this.state = {
                        dragging: !1,
                        dragged: !1,
                        x: t.position ? t.position.x : t.defaultPosition.x,
                        y: t.position ? t.position.y : t.defaultPosition.y,
                        prevPropsPosition: { ...t.position
                        },
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, !t.position || t.onDrag || t.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")
                }
                componentDidMount() {
                    "undefined" !== typeof window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                        isElementSVG: !0
                    })
                }
                componentWillUnmount() {
                    this.setState({
                        dragging: !1
                    })
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current) && void 0 !== t ? t : a.default.findDOMNode(this)
                }
                render() {
                    const {
                        axis: t,
                        bounds: e,
                        children: n,
                        defaultPosition: r,
                        defaultClassName: a,
                        defaultClassNameDragging: u,
                        defaultClassNameDragged: d,
                        position: f,
                        positionOffset: p,
                        scale: g,
                        ...m
                    } = this.props;
                    let y = {},
                        b = null;
                    const v = !Boolean(f) || this.state.dragging,
                        D = f || r,
                        S = {
                            x: (0, l.canDragX)(this) && v ? this.state.x : D.x,
                            y: (0, l.canDragY)(this) && v ? this.state.y : D.y
                        };
                    this.state.isElementSVG ? b = (0, s.createSVGTransform)(S, p) : y = (0, s.createCSSTransform)(S, p);
                    const w = (0, i.default)(n.props.className || "", a, {
                        [u]: this.state.dragging,
                        [d]: this.state.dragged
                    });
                    return o.createElement(c.default, h({}, m, {
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop
                    }), o.cloneElement(o.Children.only(n), {
                        className: w,
                        style: { ...n.props.style,
                            ...y
                        },
                        transform: b
                    }))
                }
            }
            e.default = m, g(m, "displayName", "Draggable"), g(m, "propTypes", { ...c.default.propTypes,
                axis: r.default.oneOf(["both", "x", "y", "none"]),
                bounds: r.default.oneOfType([r.default.shape({
                    left: r.default.number,
                    right: r.default.number,
                    top: r.default.number,
                    bottom: r.default.number
                }), r.default.string, r.default.oneOf([!1])]),
                defaultClassName: r.default.string,
                defaultClassNameDragging: r.default.string,
                defaultClassNameDragged: r.default.string,
                defaultPosition: r.default.shape({
                    x: r.default.number,
                    y: r.default.number
                }),
                positionOffset: r.default.shape({
                    x: r.default.oneOfType([r.default.number, r.default.string]),
                    y: r.default.oneOfType([r.default.number, r.default.string])
                }),
                position: r.default.shape({
                    x: r.default.number,
                    y: r.default.number
                }),
                className: u.dontSetMe,
                style: u.dontSetMe,
                transform: u.dontSetMe
            }), g(m, "defaultProps", { ...c.default.defaultProps,
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                scale: 1
            })
        },
        ecmk: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var n = d(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in t)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                            var i = r ? Object.getOwnPropertyDescriptor(t, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, a, i) : o[a] = t[a]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n("DTvD")),
                r = c(n("1YyT")),
                a = c(n("hTvQ")),
                i = n("JM1c"),
                s = n("sDv1"),
                l = n("6Blw"),
                u = c(n("Kile"));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function d(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (d = function(t) {
                    return t ? n : e
                })(t)
            }

            function f(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(t, e || "default");
                            if ("object" !== typeof o) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            const p = {
                    start: "touchstart",
                    move: "touchmove",
                    stop: "touchend"
                },
                h = {
                    start: "mousedown",
                    move: "mousemove",
                    stop: "mouseup"
                };
            let g = h;
            class m extends o.Component {
                constructor() {
                    super(...arguments), f(this, "dragging", !1), f(this, "lastX", NaN), f(this, "lastY", NaN), f(this, "touchIdentifier", null), f(this, "mounted", !1), f(this, "handleDragStart", (t => {
                        if (this.props.onMouseDown(t), !this.props.allowAnyClick && "number" === typeof t.button && 0 !== t.button) return !1;
                        const e = this.findDOMNode();
                        if (!e || !e.ownerDocument || !e.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
                        const {
                            ownerDocument: n
                        } = e;
                        if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, i.matchesSelectorAndParentsTo)(t.target, this.props.handle, e) || this.props.cancel && (0, i.matchesSelectorAndParentsTo)(t.target, this.props.cancel, e)) return;
                        "touchstart" === t.type && t.preventDefault();
                        const o = (0, i.getTouchIdentifier)(t);
                        this.touchIdentifier = o;
                        const r = (0, s.getControlPosition)(t, o, this);
                        if (null == r) return;
                        const {
                            x: a,
                            y: l
                        } = r, c = (0, s.createCoreData)(this, a, l);
                        (0, u.default)("DraggableCore: handleDragStart: %j", c), (0, u.default)("calling", this.props.onStart);
                        !1 !== this.props.onStart(t, c) && !1 !== this.mounted && (this.props.enableUserSelectHack && (0, i.addUserSelectStyles)(n), this.dragging = !0, this.lastX = a, this.lastY = l, (0, i.addEvent)(n, g.move, this.handleDrag), (0, i.addEvent)(n, g.stop, this.handleDragStop))
                    })), f(this, "handleDrag", (t => {
                        const e = (0, s.getControlPosition)(t, this.touchIdentifier, this);
                        if (null == e) return;
                        let {
                            x: n,
                            y: o
                        } = e;
                        if (Array.isArray(this.props.grid)) {
                            let t = n - this.lastX,
                                e = o - this.lastY;
                            if ([t, e] = (0, s.snapToGrid)(this.props.grid, t, e), !t && !e) return;
                            n = this.lastX + t, o = this.lastY + e
                        }
                        const r = (0, s.createCoreData)(this, n, o);
                        (0, u.default)("DraggableCore: handleDrag: %j", r);
                        if (!1 !== this.props.onDrag(t, r) && !1 !== this.mounted) this.lastX = n, this.lastY = o;
                        else try {
                            this.handleDragStop(new MouseEvent("mouseup"))
                        } catch (a) {
                            const t = document.createEvent("MouseEvents");
                            t.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(t)
                        }
                    })), f(this, "handleDragStop", (t => {
                        if (!this.dragging) return;
                        const e = (0, s.getControlPosition)(t, this.touchIdentifier, this);
                        if (null == e) return;
                        let {
                            x: n,
                            y: o
                        } = e;
                        if (Array.isArray(this.props.grid)) {
                            let t = n - this.lastX || 0,
                                e = o - this.lastY || 0;
                            [t, e] = (0, s.snapToGrid)(this.props.grid, t, e), n = this.lastX + t, o = this.lastY + e
                        }
                        const r = (0, s.createCoreData)(this, n, o);
                        if (!1 === this.props.onStop(t, r) || !1 === this.mounted) return !1;
                        const a = this.findDOMNode();
                        a && this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(a.ownerDocument), (0, u.default)("DraggableCore: handleDragStop: %j", r), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && ((0, u.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(a.ownerDocument, g.move, this.handleDrag), (0, i.removeEvent)(a.ownerDocument, g.stop, this.handleDragStop))
                    })), f(this, "onMouseDown", (t => (g = h, this.handleDragStart(t)))), f(this, "onMouseUp", (t => (g = h, this.handleDragStop(t)))), f(this, "onTouchStart", (t => (g = p, this.handleDragStart(t)))), f(this, "onTouchEnd", (t => (g = p, this.handleDragStop(t))))
                }
                componentDidMount() {
                    this.mounted = !0;
                    const t = this.findDOMNode();
                    t && (0, i.addEvent)(t, p.start, this.onTouchStart, {
                        passive: !1
                    })
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    const t = this.findDOMNode();
                    if (t) {
                        const {
                            ownerDocument: e
                        } = t;
                        (0, i.removeEvent)(e, h.move, this.handleDrag), (0, i.removeEvent)(e, p.move, this.handleDrag), (0, i.removeEvent)(e, h.stop, this.handleDragStop), (0, i.removeEvent)(e, p.stop, this.handleDragStop), (0, i.removeEvent)(t, p.start, this.onTouchStart, {
                            passive: !1
                        }), this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(e)
                    }
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = this.props) && void 0 !== t && t.nodeRef ? null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current : a.default.findDOMNode(this)
                }
                render() {
                    return o.cloneElement(o.Children.only(this.props.children), {
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd
                    })
                }
            }
            e.default = m, f(m, "displayName", "DraggableCore"), f(m, "propTypes", {
                allowAnyClick: r.default.bool,
                children: r.default.node.isRequired,
                disabled: r.default.bool,
                enableUserSelectHack: r.default.bool,
                offsetParent: function(t, e) {
                    if (t[e] && 1 !== t[e].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: r.default.arrayOf(r.default.number),
                handle: r.default.string,
                cancel: r.default.string,
                nodeRef: r.default.object,
                onStart: r.default.func,
                onDrag: r.default.func,
                onStop: r.default.func,
                onMouseDown: r.default.func,
                scale: r.default.number,
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe
            }), f(m, "defaultProps", {
                allowAnyClick: !1,
                disabled: !1,
                enableUserSelectHack: !0,
                onStart: function() {},
                onDrag: function() {},
                onStop: function() {},
                onMouseDown: function() {},
                scale: 1
            })
        },
        UADE: (t, e, n) => {
            const {
                default: o,
                DraggableCore: r
            } = n("DMzc");
            t.exports = o, t.exports.default = o, t.exports.DraggableCore = r
        },
        JM1c: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.addClassName = u, e.addEvent = function(t, e, n, o) {
                if (!t) return;
                const r = {
                    capture: !0,
                    ...o
                };
                t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
            }, e.addUserSelectStyles = function(t) {
                if (!t) return;
                let e = t.getElementById("react-draggable-style-el");
                e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", t.getElementsByTagName("head")[0].appendChild(e));
                t.body && u(t.body, "react-draggable-transparent-selection")
            }, e.createCSSTransform = function(t, e) {
                const n = l(t, e, "px");
                return {
                    [(0, r.browserPrefixToKey)("transform", r.default)]: n
                }
            }, e.createSVGTransform = function(t, e) {
                return l(t, e, "")
            }, e.getTouch = function(t, e) {
                return t.targetTouches && (0, o.findInArray)(t.targetTouches, (t => e === t.identifier)) || t.changedTouches && (0, o.findInArray)(t.changedTouches, (t => e === t.identifier))
            }, e.getTouchIdentifier = function(t) {
                if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier;
                if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier
            }, e.getTranslation = l, e.innerHeight = function(t) {
                let e = t.clientHeight;
                const n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(n.paddingTop), e -= (0, o.int)(n.paddingBottom), e
            }, e.innerWidth = function(t) {
                let e = t.clientWidth;
                const n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(n.paddingLeft), e -= (0, o.int)(n.paddingRight), e
            }, e.matchesSelector = s, e.matchesSelectorAndParentsTo = function(t, e, n) {
                let o = t;
                do {
                    if (s(o, e)) return !0;
                    if (o === n) return !1;
                    o = o.parentNode
                } while (o);
                return !1
            }, e.offsetXYFromParent = function(t, e, n) {
                const o = e === e.ownerDocument.body ? {
                        left: 0,
                        top: 0
                    } : e.getBoundingClientRect(),
                    r = (t.clientX + e.scrollLeft - o.left) / n,
                    a = (t.clientY + e.scrollTop - o.top) / n;
                return {
                    x: r,
                    y: a
                }
            }, e.outerHeight = function(t) {
                let e = t.clientHeight;
                const n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(n.borderTopWidth), e += (0, o.int)(n.borderBottomWidth), e
            }, e.outerWidth = function(t) {
                let e = t.clientWidth;
                const n = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(n.borderLeftWidth), e += (0, o.int)(n.borderRightWidth), e
            }, e.removeClassName = c, e.removeEvent = function(t, e, n, o) {
                if (!t) return;
                const r = {
                    capture: !0,
                    ...o
                };
                t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null
            }, e.removeUserSelectStyles = function(t) {
                if (!t) return;
                try {
                    if (t.body && c(t.body, "react-draggable-transparent-selection"), t.selection) t.selection.empty();
                    else {
                        const e = (t.defaultView || window).getSelection();
                        e && "Caret" !== e.type && e.removeAllRanges()
                    }
                } catch (e) {}
            };
            var o = n("6Blw"),
                r = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var n = a(e);
                    if (n && n.has(t)) return n.get(t);
                    var o = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                            var s = r ? Object.getOwnPropertyDescriptor(t, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = t[i]
                        }
                    o.default = t, n && n.set(t, o);
                    return o
                }(n("9ihD"));

            function a(t) {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (a = function(t) {
                    return t ? n : e
                })(t)
            }
            let i = "";

            function s(t, e) {
                return i || (i = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(e) {
                    return (0, o.isFunction)(t[e])
                }))), !!(0, o.isFunction)(t[i]) && t[i](e)
            }

            function l(t, e, n) {
                let {
                    x: o,
                    y: r
                } = t, a = "translate(".concat(o).concat(n, ",").concat(r).concat(n, ")");
                if (e) {
                    const t = "".concat("string" === typeof e.x ? e.x : e.x + n),
                        o = "".concat("string" === typeof e.y ? e.y : e.y + n);
                    a = "translate(".concat(t, ", ").concat(o, ")") + a
                }
                return a
            }

            function u(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e))
            }

            function c(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "")
            }
        },
        "9ihD": (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.browserPrefixToKey = r, e.browserPrefixToStyle = function(t, e) {
                return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t
            }, e.default = void 0, e.getPrefix = o;
            const n = ["Moz", "Webkit", "O", "ms"];

            function o() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" === typeof window) return "";
                const o = null === (t = window.document) || void 0 === t || null === (t = t.documentElement) || void 0 === t ? void 0 : t.style;
                if (!o) return "";
                if (e in o) return "";
                for (let a = 0; a < n.length; a++)
                    if (r(e, n[a]) in o) return n[a];
                return ""
            }

            function r(t, e) {
                return e ? "".concat(e).concat(function(t) {
                    let e = "",
                        n = !0;
                    for (let o = 0; o < t.length; o++) n ? (e += t[o].toUpperCase(), n = !1) : "-" === t[o] ? n = !0 : e += t[o];
                    return e
                }(t)) : t
            }
            e.default = o()
        },
        Kile: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                0
            }
        },
        sDv1: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.canDragX = function(t) {
                return "both" === t.props.axis || "x" === t.props.axis
            }, e.canDragY = function(t) {
                return "both" === t.props.axis || "y" === t.props.axis
            }, e.createCoreData = function(t, e, n) {
                const r = !(0, o.isNum)(t.lastX),
                    i = a(t);
                return r ? {
                    node: i,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: e,
                    lastY: n,
                    x: e,
                    y: n
                } : {
                    node: i,
                    deltaX: e - t.lastX,
                    deltaY: n - t.lastY,
                    lastX: t.lastX,
                    lastY: t.lastY,
                    x: e,
                    y: n
                }
            }, e.createDraggableData = function(t, e) {
                const n = t.props.scale;
                return {
                    node: e.node,
                    x: t.state.x + e.deltaX / n,
                    y: t.state.y + e.deltaY / n,
                    deltaX: e.deltaX / n,
                    deltaY: e.deltaY / n,
                    lastX: t.state.x,
                    lastY: t.state.y
                }
            }, e.getBoundPosition = function(t, e, n) {
                if (!t.props.bounds) return [e, n];
                let {
                    bounds: i
                } = t.props;
                i = "string" === typeof i ? i : function(t) {
                    return {
                        left: t.left,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom
                    }
                }(i);
                const s = a(t);
                if ("string" === typeof i) {
                    const {
                        ownerDocument: t
                    } = s, e = t.defaultView;
                    let n;
                    if (n = "parent" === i ? s.parentNode : t.querySelector(i), !(n instanceof e.HTMLElement)) throw new Error('Bounds selector "' + i + '" could not find an element.');
                    const a = n,
                        l = e.getComputedStyle(s),
                        u = e.getComputedStyle(a);
                    i = {
                        left: -s.offsetLeft + (0, o.int)(u.paddingLeft) + (0, o.int)(l.marginLeft),
                        top: -s.offsetTop + (0, o.int)(u.paddingTop) + (0, o.int)(l.marginTop),
                        right: (0, r.innerWidth)(a) - (0, r.outerWidth)(s) - s.offsetLeft + (0, o.int)(u.paddingRight) - (0, o.int)(l.marginRight),
                        bottom: (0, r.innerHeight)(a) - (0, r.outerHeight)(s) - s.offsetTop + (0, o.int)(u.paddingBottom) - (0, o.int)(l.marginBottom)
                    }
                }(0, o.isNum)(i.right) && (e = Math.min(e, i.right));
                (0, o.isNum)(i.bottom) && (n = Math.min(n, i.bottom));
                (0, o.isNum)(i.left) && (e = Math.max(e, i.left));
                (0, o.isNum)(i.top) && (n = Math.max(n, i.top));
                return [e, n]
            }, e.getControlPosition = function(t, e, n) {
                const o = "number" === typeof e ? (0, r.getTouch)(t, e) : null;
                if ("number" === typeof e && !o) return null;
                const i = a(n),
                    s = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
                return (0, r.offsetXYFromParent)(o || t, s, n.props.scale)
            }, e.snapToGrid = function(t, e, n) {
                const o = Math.round(e / t[0]) * t[0],
                    r = Math.round(n / t[1]) * t[1];
                return [o, r]
            };
            var o = n("6Blw"),
                r = n("JM1c");

            function a(t) {
                const e = t.findDOMNode();
                if (!e) throw new Error("<DraggableCore>: Unmounted during event!");
                return e
            }
        },
        "6Blw": (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dontSetMe = function(t, e, n) {
                if (t[e]) return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."))
            }, e.findInArray = function(t, e) {
                for (let n = 0, o = t.length; n < o; n++)
                    if (e.apply(e, [t[n], n, t])) return t[n]
            }, e.int = function(t) {
                return parseInt(t, 10)
            }, e.isFunction = function(t) {
                return "function" === typeof t || "[object Function]" === Object.prototype.toString.call(t)
            }, e.isNum = function(t) {
                return "number" === typeof t && !isNaN(t)
            }
        }
    }
]);
//# debugId=5d2806af-64e7-58ff-8c7f-41415497b32a