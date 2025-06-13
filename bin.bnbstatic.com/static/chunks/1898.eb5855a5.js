(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1898], {
        GmHf: e => {
            e.exports = function(e, t, r) {
                return e === t || e.className === t.className && r(e.style, t.style) && e.width === t.width && e.autoSize === t.autoSize && e.cols === t.cols && e.draggableCancel === t.draggableCancel && e.draggableHandle === t.draggableHandle && r(e.verticalCompact, t.verticalCompact) && r(e.compactType, t.compactType) && r(e.layout, t.layout) && r(e.margin, t.margin) && r(e.containerPadding, t.containerPadding) && e.rowHeight === t.rowHeight && e.maxRows === t.maxRows && e.isBounded === t.isBounded && e.isDraggable === t.isDraggable && e.isResizable === t.isResizable && e.allowOverlap === t.allowOverlap && e.preventCollision === t.preventCollision && e.useCSSTransforms === t.useCSSTransforms && e.transformScale === t.transformScale && e.isDroppable === t.isDroppable && r(e.resizeHandles, t.resizeHandles) && r(e.resizeHandle, t.resizeHandle) && e.onLayoutChange === t.onLayoutChange && e.onDragStart === t.onDragStart && e.onDrag === t.onDrag && e.onDragStop === t.onDragStop && e.onResizeStart === t.onResizeStart && e.onResize === t.onResize && e.onResizeStop === t.onResizeStop && e.onDrop === t.onDrop && r(e.droppingItem, t.droppingItem) && r(e.innerRef, t.innerRef)
            }
        },
        esg4: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ft: () => B,
                er: () => G
            });
            var n = r("pil5");

            function o(e, t) {
                for (var r = s(e), n = r[0], o = 1, a = r.length; o < a; o++) {
                    var i = r[o];
                    t > e[i] && (n = i)
                }
                return n
            }

            function a(e, t) {
                if (!t[e]) throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + e + " is missing!");
                return t[e]
            }

            function i(e, t, r, o, a, i) {
                if (e[r]) return (0, n.Su)(e[r]);
                for (var l = e[o], u = s(t), c = u.slice(u.indexOf(r)), p = 0, f = c.length; p < f; p++) {
                    var d = c[p];
                    if (e[d]) {
                        l = e[d];
                        break
                    }
                }
                return l = (0, n.Su)(l || []), (0, n.oE)((0, n.AR)(l, {
                    cols: a
                }), i, a)
            }

            function s(e) {
                return Object.keys(e).sort((function(t, r) {
                    return e[t] - e[r]
                }))
            }
            var l = r("Bkzn"),
                u = r("iKvg"),
                c = r("b6CO"),
                p = r("2/kH"),
                f = r("hrAD"),
                d = r("qoEP"),
                h = r("KrVi"),
                g = r("M9gu"),
                m = r("DTvD"),
                y = r.n(m),
                v = r("1YyT"),
                b = r.n(v),
                w = r("ZciU"),
                R = r("mguP"),
                z = r("d12p"),
                S = r("5W/k");

            function x(e) {
                var t = e.margin,
                    r = e.containerPadding,
                    n = e.containerWidth,
                    o = e.cols;
                return (n - t[0] * (o - 1) - 2 * r[0]) / o
            }

            function D(e, t, r) {
                return Number.isFinite(e) ? Math.round(t * e + Math.max(0, e - 1) * r) : e
            }

            function O(e, t, r, n, o, a) {
                var i = e.margin,
                    s = e.containerPadding,
                    l = e.rowHeight,
                    u = x(e),
                    c = {};
                return a && a.resizing ? (c.width = Math.round(a.resizing.width), c.height = Math.round(a.resizing.height)) : (c.width = D(n, u, i[0]), c.height = D(o, l, i[1])), a && a.dragging ? (c.top = Math.round(a.dragging.top), c.left = Math.round(a.dragging.left)) : a && a.resizing && "number" === typeof a.resizing.top && "number" === typeof a.resizing.left ? (c.top = Math.round(a.resizing.top), c.left = Math.round(a.resizing.left)) : (c.top = Math.round((l + i[1]) * r + s[1]), c.left = Math.round((u + i[0]) * t + s[0])), c
            }

            function P(e, t, r, n, o) {
                var a = e.margin,
                    i = e.cols,
                    s = e.rowHeight,
                    l = e.maxRows,
                    u = x(e),
                    c = Math.round((r - a[0]) / (u + a[0])),
                    p = Math.round((t - a[1]) / (s + a[1]));
                return {
                    x: c = C(c, 0, i - n),
                    y: p = C(p, 0, l - o)
                }
            }

            function C(e, t, r) {
                return Math.max(Math.min(e, r), t)
            }
            var E = r("Gnqa"),
                j = r("UADE"),
                H = r("u4Mn"),
                k = b().arrayOf(b().oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                M = b().oneOfType([b().node, b().func]);
            const _ = {
                className: b().string,
                style: b().object,
                width: b().number,
                autoSize: b().bool,
                cols: b().number,
                draggableCancel: b().string,
                draggableHandle: b().string,
                verticalCompact: function(e) {
                    e.verticalCompact, 0
                },
                compactType: b().oneOf(["vertical", "horizontal"]),
                layout: function(e) {
                    var t = e.layout;
                    void 0 !== t && r("pil5").F2(t, "layout")
                },
                margin: b().arrayOf(b().number),
                containerPadding: b().arrayOf(b().number),
                rowHeight: b().number,
                maxRows: b().number,
                isBounded: b().bool,
                isDraggable: b().bool,
                isResizable: b().bool,
                allowOverlap: b().bool,
                preventCollision: b().bool,
                useCSSTransforms: b().bool,
                transformScale: b().number,
                isDroppable: b().bool,
                resizeHandles: k,
                resizeHandle: M,
                onLayoutChange: b().func,
                onDragStart: b().func,
                onDrag: b().func,
                onDragStop: b().func,
                onResizeStart: b().func,
                onResize: b().func,
                onResizeStop: b().func,
                onDrop: b().func,
                droppingItem: b().shape({
                    i: b().string.isRequired,
                    w: b().number.isRequired,
                    h: b().number.isRequired
                }),
                children: function(e, t) {
                    var r = e[t],
                        n = {};
                    y().Children.forEach(r, (function(e) {
                        if (null != (null === e || void 0 === e ? void 0 : e.key)) {
                            if (n[e.key]) throw new Error('Duplicate child key "' + e.key + '" found! This will cause problems in ReactGridLayout.');
                            n[e.key] = !0
                        }
                    }))
                },
                innerRef: b().any
            };
            var q = function(e) {
                (0, p._)(r, e);
                var t = (0, g._)(r);

                function r() {
                    var e;
                    return (0, l._)(this, r), (e = t.apply(this, arguments)).state = {
                        resizing: null,
                        dragging: null,
                        className: ""
                    }, e.elementRef = y().createRef(), e.onDragStart = function(t, r) {
                        var n = r.node,
                            o = e.props,
                            a = o.onDragStart,
                            i = o.transformScale;
                        if (a) {
                            var s = {
                                    top: 0,
                                    left: 0
                                },
                                l = n.offsetParent;
                            if (l) {
                                var u = l.getBoundingClientRect(),
                                    c = n.getBoundingClientRect(),
                                    p = c.left / i,
                                    f = u.left / i,
                                    d = c.top / i,
                                    h = u.top / i;
                                s.left = p - f + l.scrollLeft, s.top = d - h + l.scrollTop, e.setState({
                                    dragging: s
                                });
                                var g = P(e.getPositionParams(), s.top, s.left, e.props.w, e.props.h),
                                    m = g.x,
                                    y = g.y;
                                return a.call((0, E._)(e), e.props.i, m, y, {
                                    e: t,
                                    node: n,
                                    newPosition: s
                                })
                            }
                        }
                    }, e.onDrag = function(t, r) {
                        var n = r.node,
                            o = r.deltaX,
                            a = r.deltaY,
                            i = e.props.onDrag;
                        if (i) {
                            if (!e.state.dragging) throw new Error("onDrag called before onDragStart.");
                            var s = e.state.dragging.top + a,
                                l = e.state.dragging.left + o,
                                u = e.props,
                                c = u.isBounded,
                                p = u.i,
                                f = u.w,
                                d = u.h,
                                h = u.containerWidth,
                                g = e.getPositionParams();
                            if (c) {
                                var m = n.offsetParent;
                                if (m) {
                                    var y = e.props,
                                        v = y.margin,
                                        b = y.rowHeight,
                                        w = y.containerPadding,
                                        R = m.clientHeight - D(d, b, v[1]);
                                    s = C(s - w[1], 0, R);
                                    var z = h - D(f, x(g), v[0]);
                                    l = C(l - w[0], 0, z)
                                }
                            }
                            var S = {
                                top: s,
                                left: l
                            };
                            e.setState({
                                dragging: S
                            });
                            var O = e.props.containerPadding,
                                j = P(g, s - O[1], l - O[0], f, d),
                                H = j.x,
                                k = j.y;
                            return i.call((0, E._)(e), p, H, k, {
                                e: t,
                                node: n,
                                newPosition: S
                            })
                        }
                    }, e.onDragStop = function(t, r) {
                        var n = r.node,
                            o = e.props.onDragStop;
                        if (o) {
                            if (!e.state.dragging) throw new Error("onDragEnd called before onDragStart.");
                            var a = e.props,
                                i = a.w,
                                s = a.h,
                                l = a.i,
                                u = a.containerPadding,
                                c = e.state.dragging,
                                p = c.left,
                                f = c.top,
                                d = {
                                    top: f,
                                    left: p
                                };
                            e.setState({
                                dragging: null
                            });
                            var h = P(e.getPositionParams(), f - u[1], p - u[0], i, s),
                                g = h.x,
                                m = h.y;
                            return o.call((0, E._)(e), l, g, m, {
                                e: t,
                                node: n,
                                newPosition: d
                            })
                        }
                    }, e.onResizeStop = function(t, r, n) {
                        return e.onResizeHandler(t, r, n, "onResizeStop")
                    }, e.onResizeStart = function(t, r, n) {
                        return e.onResizeHandler(t, r, n, "onResizeStart")
                    }, e.onResize = function(t, r, n) {
                        return e.onResizeHandler(t, r, n, "onResize")
                    }, e
                }
                var o = r.prototype;
                return o.shouldComponentUpdate = function(e, t) {
                    if (this.props.children !== e.children) return !0;
                    if (this.props.droppingPosition !== e.droppingPosition) return !0;
                    var r = O(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state),
                        o = O(this.getPositionParams(e), e.x, e.y, e.w, e.h, t);
                    return !(0, n.c3)(r, o) || this.props.useCSSTransforms !== e.useCSSTransforms
                }, o.componentDidMount = function() {
                    this.moveDroppingItem({})
                }, o.componentDidUpdate = function(e) {
                    this.moveDroppingItem(e)
                }, o.moveDroppingItem = function(e) {
                    var t = this.props.droppingPosition;
                    if (t) {
                        var r = this.elementRef.current;
                        if (r) {
                            var n = e.droppingPosition || {
                                    left: 0,
                                    top: 0
                                },
                                o = this.state.dragging,
                                a = o && t.left !== n.left || t.top !== n.top;
                            if (o) {
                                if (a) {
                                    var i = t.left - o.left,
                                        s = t.top - o.top;
                                    this.onDrag(t.e, {
                                        node: r,
                                        deltaX: i,
                                        deltaY: s
                                    })
                                }
                            } else this.onDragStart(t.e, {
                                node: r,
                                deltaX: t.left,
                                deltaY: t.top
                            })
                        }
                    }
                }, o.getPositionParams = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return {
                        cols: e.cols,
                        containerPadding: e.containerPadding,
                        containerWidth: e.containerWidth,
                        margin: e.margin,
                        maxRows: e.maxRows,
                        rowHeight: e.rowHeight
                    }
                }, o.createStyle = function(e) {
                    var t, r = this.props,
                        o = r.usePercentages,
                        a = r.containerWidth;
                    return r.useCSSTransforms ? t = (0, n.BM)(e) : (t = (0, n.hT)(e), o && (t.left = (0, n.rD)(e.left / a), t.width = (0, n.rD)(e.width / a))), t
                }, o.mixinDraggable = function(e, t) {
                    return y().createElement(j.DraggableCore, {
                        disabled: !t,
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop,
                        handle: this.props.handle,
                        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
                        scale: this.props.transformScale,
                        nodeRef: this.elementRef
                    }, e)
                }, o.curryResizeHandler = function(e, t) {
                    return function(r, n) {
                        return t(r, n, e)
                    }
                }, o.mixinResizable = function(e, t, r) {
                    var n = this.props,
                        o = n.cols,
                        a = n.minW,
                        i = n.minH,
                        s = n.maxW,
                        l = n.maxH,
                        u = n.transformScale,
                        c = n.resizeHandles,
                        p = n.resizeHandle,
                        f = this.getPositionParams(),
                        d = O(f, 0, 0, o, 0).width,
                        h = O(f, 0, 0, a, i),
                        g = O(f, 0, 0, s, l),
                        m = [h.width, h.height],
                        v = [Math.min(g.width, d), Math.min(g.height, 1 / 0)];
                    return y().createElement(H.Resizable, {
                        draggableOpts: {
                            disabled: !r
                        },
                        className: r ? void 0 : "react-resizable-hide",
                        width: t.width,
                        height: t.height,
                        minConstraints: m,
                        maxConstraints: v,
                        onResizeStop: this.curryResizeHandler(t, this.onResizeStop),
                        onResizeStart: this.curryResizeHandler(t, this.onResizeStart),
                        onResize: this.curryResizeHandler(t, this.onResize),
                        transformScale: u,
                        resizeHandles: c,
                        handle: p
                    }, e)
                }, o.onResizeHandler = function(e, t, r, o) {
                    var a = t.node,
                        i = t.size,
                        s = t.handle,
                        l = this.props[o];
                    if (l) {
                        var u = this.props,
                            c = u.x,
                            p = u.y,
                            f = u.i,
                            d = u.maxH,
                            h = u.minH,
                            g = u.containerWidth,
                            m = this.props,
                            y = m.minW,
                            v = m.maxW,
                            b = i;
                        a && (b = (0, n.M8)(s, r, i, g), this.setState({
                            resizing: "onResizeStop" === o ? null : b
                        }));
                        var w = function(e, t, r, n, o, a) {
                                var i = e.margin,
                                    s = e.maxRows,
                                    l = e.cols,
                                    u = e.rowHeight,
                                    c = x(e),
                                    p = Math.round((t + i[0]) / (c + i[0])),
                                    f = Math.round((r + i[1]) / (u + i[1])),
                                    d = C(p, 0, l - n),
                                    h = C(f, 0, s - o);
                                return -1 !== ["sw", "w", "nw"].indexOf(a) && (d = C(p, 0, l)), -1 !== ["nw", "n", "ne"].indexOf(a) && (h = C(f, 0, s)), {
                                    w: d,
                                    h: h
                                }
                            }(this.getPositionParams(), b.width, b.height, c, p, s),
                            R = w.w,
                            z = w.h;
                        R = C(R, Math.max(y, 1), v), z = C(z, h, d), l.call(this, f, R, z, {
                            e: e,
                            node: a,
                            size: b,
                            handle: s
                        })
                    }
                }, o.render = function() {
                    var e = this.props,
                        t = e.x,
                        r = e.y,
                        n = e.w,
                        o = e.h,
                        a = e.isDraggable,
                        i = e.isResizable,
                        s = e.droppingPosition,
                        l = e.useCSSTransforms,
                        u = O(this.getPositionParams(), t, r, n, o, this.state),
                        c = y().Children.only(this.props.children),
                        p = y().cloneElement(c, {
                            ref: this.elementRef,
                            className: (0, S.A)("react-grid-item", c.props.className, this.props.className, {
                                static: this.props.static,
                                resizing: Boolean(this.state.resizing),
                                "react-draggable": a,
                                "react-draggable-dragging": Boolean(this.state.dragging),
                                dropping: Boolean(s),
                                cssTransforms: l
                            }),
                            style: (0, f._)({}, this.props.style, c.props.style, this.createStyle(u))
                        });
                    return p = this.mixinResizable(p, u, i), p = this.mixinDraggable(p, a)
                }, r
            }(y().Component);
            q.propTypes = {
                children: b().element,
                cols: b().number.isRequired,
                containerWidth: b().number.isRequired,
                rowHeight: b().number.isRequired,
                margin: b().array.isRequired,
                maxRows: b().number.isRequired,
                containerPadding: b().array.isRequired,
                x: b().number.isRequired,
                y: b().number.isRequired,
                w: b().number.isRequired,
                h: b().number.isRequired,
                minW: function(e, t) {
                    var r = e[t];
                    return "number" !== typeof r ? new Error("minWidth not Number") : r > e.w || r > e.maxW ? new Error("minWidth larger than item width/maxWidth") : void 0
                },
                maxW: function(e, t) {
                    var r = e[t];
                    return "number" !== typeof r ? new Error("maxWidth not Number") : r < e.w || r < e.minW ? new Error("maxWidth smaller than item width/minWidth") : void 0
                },
                minH: function(e, t) {
                    var r = e[t];
                    return "number" !== typeof r ? new Error("minHeight not Number") : r > e.h || r > e.maxH ? new Error("minHeight larger than item height/maxHeight") : void 0
                },
                maxH: function(e, t) {
                    var r = e[t];
                    return "number" !== typeof r ? new Error("maxHeight not Number") : r < e.h || r < e.minH ? new Error("maxHeight smaller than item height/minHeight") : void 0
                },
                i: b().string.isRequired,
                resizeHandles: k,
                resizeHandle: M,
                onDragStop: b().func,
                onDragStart: b().func,
                onDrag: b().func,
                onResizeStop: b().func,
                onResizeStart: b().func,
                onResize: b().func,
                isDraggable: b().bool.isRequired,
                isResizable: b().bool.isRequired,
                isBounded: b().bool.isRequired,
                static: b().bool,
                useCSSTransforms: b().bool.isRequired,
                transformScale: b().number,
                className: b().string,
                handle: b().string,
                cancel: b().string,
                droppingPosition: b().shape({
                    e: b().object.isRequired,
                    left: b().number.isRequired,
                    top: b().number.isRequired
                })
            }, q.defaultProps = {
                className: "",
                cancel: "",
                handle: "",
                minH: 1,
                minW: 1,
                maxH: 1 / 0,
                maxW: 1 / 0,
                transformScale: 1
            };
            var T = "react-grid-layout",
                W = !1;
            try {
                W = /firefox/i.test(navigator.userAgent)
            } catch (F) {}
            var N = function(e) {
                (0, p._)(r, e);
                var t = (0, g._)(r);

                function r() {
                    var e;
                    return (0, l._)(this, r), (e = t.apply(this, arguments)).state = {
                        activeDrag: null,
                        layout: (0, n.gt)(e.props.layout, e.props.children, e.props.cols, (0, n.mj)(e.props), e.props.allowOverlap),
                        mounted: !1,
                        oldDragItem: null,
                        oldLayout: null,
                        oldResizeItem: null,
                        resizing: !1,
                        droppingDOMNode: null,
                        children: []
                    }, e.dragEnterCounter = 0, e.onDragStart = function(t, r, o, a) {
                        var i = a.e,
                            s = a.node,
                            l = e.state.layout,
                            u = (0, n.GN)(l, t);
                        if (u) {
                            var c = {
                                w: u.w,
                                h: u.h,
                                x: u.x,
                                y: u.y,
                                placeholder: !0,
                                i: t
                            };
                            return e.setState({
                                oldDragItem: (0, n.FN)(u),
                                oldLayout: l,
                                activeDrag: c
                            }), e.props.onDragStart(l, u, u, null, i, s)
                        }
                    }, e.onDrag = function(t, r, o, a) {
                        var i = a.e,
                            s = a.node,
                            l = e.state.oldDragItem,
                            u = e.state.layout,
                            c = e.props,
                            p = c.cols,
                            f = c.allowOverlap,
                            d = c.preventCollision,
                            h = (0, n.GN)(u, t);
                        if (h) {
                            var g = {
                                w: h.w,
                                h: h.h,
                                x: h.x,
                                y: h.y,
                                placeholder: !0,
                                i: t
                            };
                            u = (0, n.cZ)(u, h, r, o, !0, d, (0, n.mj)(e.props), p, f), e.props.onDrag(u, l, h, g, i, s), e.setState({
                                layout: f ? u : (0, n.oE)(u, (0, n.mj)(e.props), p),
                                activeDrag: g
                            })
                        }
                    }, e.onDragStop = function(t, r, o, a) {
                        var i = a.e,
                            s = a.node;
                        if (e.state.activeDrag) {
                            var l = e.state.oldDragItem,
                                u = e.state.layout,
                                c = e.props,
                                p = c.cols,
                                f = c.preventCollision,
                                d = c.allowOverlap,
                                h = (0, n.GN)(u, t);
                            if (h) {
                                u = (0, n.cZ)(u, h, r, o, !0, f, (0, n.mj)(e.props), p, d);
                                var g = d ? u : (0, n.oE)(u, (0, n.mj)(e.props), p);
                                e.props.onDragStop(g, l, h, null, i, s);
                                var m = e.state.oldLayout;
                                e.setState({
                                    activeDrag: null,
                                    layout: g,
                                    oldDragItem: null,
                                    oldLayout: null
                                }), e.onLayoutMaybeChanged(g, m)
                            }
                        }
                    }, e.onResizeStart = function(t, r, o, a) {
                        var i = a.e,
                            s = a.node,
                            l = e.state.layout,
                            u = (0, n.GN)(l, t);
                        u && (e.setState({
                            oldResizeItem: (0, n.FN)(u),
                            oldLayout: e.state.layout,
                            resizing: !0
                        }), e.props.onResizeStart(l, u, u, null, i, s))
                    }, e.onResize = function(t, r, o, a) {
                        var i, s, l, u = a.e,
                            c = a.node,
                            p = (a.size, a.handle),
                            h = e.state.oldResizeItem,
                            g = e.state.layout,
                            m = e.props,
                            y = m.cols,
                            v = m.preventCollision,
                            b = m.allowOverlap,
                            w = !1,
                            z = (0, R._)((0, n.cF)(g, t, (function(e) {
                                (s = e.x, l = e.y, -1 !== ["sw", "w", "nw", "n", "ne"].indexOf(p) && (-1 !== ["sw", "nw", "w"].indexOf(p) && (s = e.x + (e.w - r), r = e.x !== s && s < 0 ? e.w : r, s = s < 0 ? 0 : s), -1 !== ["ne", "n", "nw"].indexOf(p) && (l = e.y + (e.h - o), o = e.y !== l && l < 0 ? e.h : o, l = l < 0 ? 0 : l), w = !0), v && !b) && ((0, n.$U)(g, (0, d._)((0, f._)({}, e), {
                                    w: r,
                                    h: o,
                                    x: s,
                                    y: l
                                })).filter((function(t) {
                                    return t.i !== e.i
                                })).length > 0 && (l = e.y, o = e.h, s = e.x, r = e.w, w = !1));
                                return e.w = r, e.h = o, e
                            })), 2),
                            S = z[0],
                            x = z[1];
                        if (x) {
                            if (i = S, w) {
                                i = (0, n.cZ)(S, x, s, l, !0, e.props.preventCollision, (0, n.mj)(e.props), y, b)
                            }
                            var D = {
                                w: x.w,
                                h: x.h,
                                x: x.x,
                                y: x.y,
                                static: !0,
                                i: t
                            };
                            e.props.onResize(i, h, x, D, u, c), e.setState({
                                layout: b ? i : (0, n.oE)(i, (0, n.mj)(e.props), y),
                                activeDrag: D
                            })
                        }
                    }, e.onResizeStop = function(t, r, o, a) {
                        var i = a.e,
                            s = a.node,
                            l = e.state,
                            u = l.layout,
                            c = l.oldResizeItem,
                            p = e.props,
                            f = p.cols,
                            d = p.allowOverlap,
                            h = (0, n.GN)(u, t),
                            g = d ? u : (0, n.oE)(u, (0, n.mj)(e.props), f);
                        e.props.onResizeStop(g, c, h, null, i, s);
                        var m = e.state.oldLayout;
                        e.setState({
                            activeDrag: null,
                            layout: g,
                            oldResizeItem: null,
                            oldLayout: null,
                            resizing: !1
                        }), e.onLayoutMaybeChanged(g, m)
                    }, e.onDragOver = function(t) {
                        var r;
                        if (t.preventDefault(), t.stopPropagation(), W && !(null === (r = t.nativeEvent.target) || void 0 === r ? void 0 : r.classList.contains(T))) return !1;
                        var n = e.props,
                            o = n.droppingItem,
                            a = n.onDropDragOver,
                            i = n.margin,
                            s = n.cols,
                            l = n.rowHeight,
                            u = n.maxRows,
                            c = n.width,
                            p = n.containerPadding,
                            h = n.transformScale,
                            g = null === a || void 0 === a ? void 0 : a(t);
                        if (!1 === g) return e.state.droppingDOMNode && e.removeDroppingPlaceholder(), !1;
                        var y = (0, f._)({}, o, g),
                            v = e.state.layout,
                            b = t.currentTarget.getBoundingClientRect(),
                            w = t.clientX - b.left,
                            R = t.clientY - b.top,
                            S = {
                                left: w / h,
                                top: R / h,
                                e: t
                            };
                        if (e.state.droppingDOMNode) {
                            if (e.state.droppingPosition) {
                                var x = e.state.droppingPosition,
                                    D = x.left,
                                    O = x.top;
                                (D != w || O != R) && e.setState({
                                    droppingPosition: S
                                })
                            }
                        } else {
                            var C = P({
                                cols: s,
                                margin: i,
                                maxRows: u,
                                rowHeight: l,
                                containerWidth: c,
                                containerPadding: p || i
                            }, R, w, y.w, y.h);
                            e.setState({
                                droppingDOMNode: m.createElement("div", {
                                    key: y.i
                                }),
                                droppingPosition: S,
                                layout: (0, z._)(v).concat([(0, d._)((0, f._)({}, y), {
                                    x: C.x,
                                    y: C.y,
                                    static: !1,
                                    isDraggable: !0
                                })])
                            })
                        }
                    }, e.removeDroppingPlaceholder = function() {
                        var t = e.props,
                            r = t.droppingItem,
                            o = t.cols,
                            a = e.state.layout,
                            i = (0, n.oE)(a.filter((function(e) {
                                return e.i !== r.i
                            })), (0, n.mj)(e.props), o, e.props.allowOverlap);
                        e.setState({
                            layout: i,
                            droppingDOMNode: null,
                            activeDrag: null,
                            droppingPosition: void 0
                        })
                    }, e.onDragLeave = function(t) {
                        t.preventDefault(), t.stopPropagation(), e.dragEnterCounter--, 0 === e.dragEnterCounter && e.removeDroppingPlaceholder()
                    }, e.onDragEnter = function(t) {
                        t.preventDefault(), t.stopPropagation(), e.dragEnterCounter++
                    }, e.onDrop = function(t) {
                        t.preventDefault(), t.stopPropagation();
                        var r = e.props.droppingItem,
                            n = e.state.layout,
                            o = n.find((function(e) {
                                return e.i === r.i
                            }));
                        e.dragEnterCounter = 0, e.removeDroppingPlaceholder(), e.props.onDrop(n, o, t)
                    }, e
                }
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.onLayoutMaybeChanged(this.state.layout, this.props.layout)
                }, o.shouldComponentUpdate = function(e, t) {
                    return this.props.children !== e.children || !(0, n.C1)(this.props, e, w.deepEqual) || this.state.activeDrag !== t.activeDrag || this.state.mounted !== t.mounted || this.state.droppingPosition !== t.droppingPosition
                }, o.componentDidUpdate = function(e, t) {
                    if (!this.state.activeDrag) {
                        var r = this.state.layout,
                            n = t.layout;
                        this.onLayoutMaybeChanged(r, n)
                    }
                }, o.containerHeight = function() {
                    if (this.props.autoSize) {
                        var e = (0, n.sQ)(this.state.layout),
                            t = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
                        return e * this.props.rowHeight + (e - 1) * this.props.margin[1] + 2 * t + "px"
                    }
                }, o.onLayoutMaybeChanged = function(e, t) {
                    t || (t = this.state.layout), (0, w.deepEqual)(t, e) || this.props.onLayoutChange(e)
                }, o.placeholder = function() {
                    var e = this.state.activeDrag;
                    if (!e) return null;
                    var t = this.props,
                        r = t.width,
                        n = t.cols,
                        o = t.margin,
                        a = t.containerPadding,
                        i = t.rowHeight,
                        s = t.maxRows,
                        l = t.useCSSTransforms,
                        u = t.transformScale;
                    return m.createElement(q, {
                        w: e.w,
                        h: e.h,
                        x: e.x,
                        y: e.y,
                        i: e.i,
                        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
                        containerWidth: r,
                        cols: n,
                        margin: o,
                        containerPadding: a || o,
                        maxRows: s,
                        rowHeight: i,
                        isDraggable: !1,
                        isResizable: !1,
                        isBounded: !1,
                        useCSSTransforms: l,
                        transformScale: u
                    }, m.createElement("div", null))
                }, o.processGridItem = function(e, t) {
                    if (e && e.key) {
                        var r = (0, n.GN)(this.state.layout, String(e.key));
                        if (!r) return null;
                        var o = this.props,
                            a = o.width,
                            i = o.cols,
                            s = o.margin,
                            l = o.containerPadding,
                            u = o.rowHeight,
                            c = o.maxRows,
                            p = o.isDraggable,
                            f = o.isResizable,
                            d = o.isBounded,
                            h = o.useCSSTransforms,
                            g = o.transformScale,
                            y = o.draggableCancel,
                            v = o.draggableHandle,
                            b = o.resizeHandles,
                            w = o.resizeHandle,
                            R = this.state,
                            z = R.mounted,
                            S = R.droppingPosition,
                            x = "boolean" === typeof r.isDraggable ? r.isDraggable : !r.static && p,
                            D = "boolean" === typeof r.isResizable ? r.isResizable : !r.static && f,
                            O = r.resizeHandles || b,
                            P = x && d && !1 !== r.isBounded;
                        return m.createElement(q, {
                            containerWidth: a,
                            cols: i,
                            margin: s,
                            containerPadding: l || s,
                            maxRows: c,
                            rowHeight: u,
                            cancel: y,
                            handle: v,
                            onDragStop: this.onDragStop,
                            onDragStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onResizeStart: this.onResizeStart,
                            onResize: this.onResize,
                            onResizeStop: this.onResizeStop,
                            isDraggable: x,
                            isResizable: D,
                            isBounded: P,
                            useCSSTransforms: h && z,
                            usePercentages: !z,
                            transformScale: g,
                            w: r.w,
                            h: r.h,
                            x: r.x,
                            y: r.y,
                            i: r.i,
                            minH: r.minH,
                            minW: r.minW,
                            maxH: r.maxH,
                            maxW: r.maxW,
                            static: r.static,
                            droppingPosition: t ? S : void 0,
                            resizeHandles: O,
                            resizeHandle: w
                        }, e)
                    }
                }, o.render = function() {
                    var e = this,
                        t = this.props,
                        r = t.className,
                        o = t.style,
                        a = t.isDroppable,
                        i = t.innerRef,
                        s = (0, S.A)(T, r),
                        l = (0, f._)({
                            height: this.containerHeight()
                        }, o);
                    return m.createElement("div", {
                        ref: i,
                        className: s,
                        style: l,
                        onDrop: a ? this.onDrop : n.lQ,
                        onDragLeave: a ? this.onDragLeave : n.lQ,
                        onDragEnter: a ? this.onDragEnter : n.lQ,
                        onDragOver: a ? this.onDragOver : n.lQ
                    }, m.Children.map(this.props.children, (function(t) {
                        return e.processGridItem(t)
                    })), a && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder())
                }, r.getDerivedStateFromProps = function(e, t) {
                    var r;
                    return t.activeDrag ? null : ((0, w.deepEqual)(e.layout, t.propsLayout) && e.compactType === t.compactType ? (0, n.I)(e.children, t.children) || (r = t.layout) : r = e.layout, r ? {
                        layout: (0, n.gt)(r, e.children, e.cols, (0, n.mj)(e), e.allowOverlap),
                        compactType: e.compactType,
                        children: e.children,
                        propsLayout: e.layout
                    } : null)
                }, r
            }(m.Component);
            N.displayName = "ReactGridLayout", N.propTypes = _, N.defaultProps = {
                autoSize: !0,
                cols: 12,
                className: "",
                style: {},
                draggableHandle: "",
                draggableCancel: "",
                containerPadding: null,
                rowHeight: 150,
                maxRows: 1 / 0,
                layout: [],
                margin: [10, 10],
                isBounded: !1,
                isDraggable: !0,
                isResizable: !0,
                allowOverlap: !1,
                isDroppable: !1,
                useCSSTransforms: !0,
                transformScale: 1,
                verticalCompact: !0,
                compactType: "vertical",
                preventCollision: !1,
                droppingItem: {
                    i: "__dropping-elem__",
                    h: 1,
                    w: 1
                },
                resizeHandles: ["se"],
                onLayoutChange: n.lQ,
                onDragStart: n.lQ,
                onDrag: n.lQ,
                onDragStop: n.lQ,
                onResizeStart: n.lQ,
                onResize: n.lQ,
                onResizeStop: n.lQ,
                onDrop: n.lQ,
                onDropDragOver: n.lQ
            };
            var A = function(e) {
                return Object.prototype.toString.call(e)
            };

            function L(e, t) {
                return null == e ? null : Array.isArray(e) ? e : e[t]
            }
            var B = function(e) {
                (0, p._)(r, e);
                var t = (0, g._)(r);

                function r() {
                    var e;
                    return (0, l._)(this, r), (e = t.apply(this, arguments)).state = e.generateInitialState(), e.onLayoutChange = function(t) {
                        e.props.onLayoutChange(t, (0, d._)((0, f._)({}, e.props.layouts), (0, u._)({}, e.state.breakpoint, t)))
                    }, e
                }
                var s = r.prototype;
                return s.generateInitialState = function() {
                    var e = this.props,
                        t = e.width,
                        r = e.breakpoints,
                        n = e.layouts,
                        s = e.cols,
                        l = o(r, t),
                        u = a(l, s);
                    return {
                        layout: i(n, r, l, l, u, !1 === this.props.verticalCompact ? null : this.props.compactType),
                        breakpoint: l,
                        cols: u
                    }
                }, s.componentDidUpdate = function(e) {
                    this.props.width == e.width && this.props.breakpoint === e.breakpoint && (0, w.deepEqual)(this.props.breakpoints, e.breakpoints) && (0, w.deepEqual)(this.props.cols, e.cols) || this.onWidthChange(e)
                }, s.onWidthChange = function(e) {
                    var t = this.props,
                        r = t.breakpoints,
                        s = t.cols,
                        l = t.layouts,
                        u = t.compactType,
                        c = this.props.breakpoint || o(this.props.breakpoints, this.props.width),
                        p = this.state.breakpoint,
                        d = a(c, s),
                        h = (0, f._)({}, l);
                    if (p !== c || e.breakpoints !== r || e.cols !== s) {
                        p in h || (h[p] = (0, n.Su)(this.state.layout));
                        var g = i(h, r, c, p, d, u);
                        h[c] = g, this.props.onLayoutChange(g, h), this.props.onBreakpointChange(c, d), this.setState({
                            breakpoint: c,
                            layout: g,
                            cols: d
                        })
                    }
                    var m = L(this.props.margin, c),
                        y = L(this.props.containerPadding, c);
                    this.props.onWidthChange(this.props.width, m, d, y)
                }, s.render = function() {
                    var e = this.props,
                        t = (e.breakpoint, e.breakpoints, e.cols, e.layouts, e.margin),
                        r = e.containerPadding,
                        n = (e.onBreakpointChange, e.onLayoutChange, e.onWidthChange, (0, h._)(e, ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"]));
                    return m.createElement(N, (0, c._)({}, n, {
                        margin: L(t, this.state.breakpoint),
                        containerPadding: L(r, this.state.breakpoint),
                        onLayoutChange: this.onLayoutChange,
                        layout: this.state.layout,
                        cols: this.state.cols
                    }))
                }, r.getDerivedStateFromProps = function(e, t) {
                    if (!(0, w.deepEqual)(e.layouts, t.layouts)) {
                        var r = t.breakpoint,
                            n = t.cols;
                        return {
                            layout: i(e.layouts, e.breakpoints, r, r, n, e.compactType),
                            layouts: e.layouts
                        }
                    }
                    return null
                }, r
            }(m.Component);
            B.propTypes = {
                breakpoint: b().string,
                breakpoints: b().object,
                allowOverlap: b().bool,
                cols: b().object,
                margin: b().oneOfType([b().array, b().object]),
                containerPadding: b().oneOfType([b().array, b().object]),
                layouts: function(e, t) {
                    if ("[object Object]" !== A(e[t])) throw new Error("Layout property must be an object. Received: " + A(e[t]));
                    Object.keys(e[t]).forEach((function(t) {
                        if (!(t in e.breakpoints)) throw new Error("Each key in layouts must align with a key in breakpoints.");
                        (0, n.F2)(e.layouts[t], "layouts." + t)
                    }))
                },
                width: b().number.isRequired,
                onBreakpointChange: b().func,
                onLayoutChange: b().func,
                onWidthChange: b().func
            }, B.defaultProps = {
                breakpoints: {
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0
                },
                cols: {
                    lg: 12,
                    md: 10,
                    sm: 6,
                    xs: 4,
                    xxs: 2
                },
                containerPadding: {
                    lg: null,
                    md: null,
                    sm: null,
                    xs: null,
                    xxs: null
                },
                layouts: {},
                margin: [10, 10],
                allowOverlap: !1,
                onBreakpointChange: n.lQ,
                onLayoutChange: n.lQ,
                onWidthChange: n.lQ
            };
            var I = r("EnBZ"),
                Q = r("jd1c"),
                U = "react-grid-layout";

            function G(e) {
                var t, r;
                return r = function(t) {
                    (0, p._)(n, t);
                    var r = (0, g._)(n);

                    function n() {
                        var e;
                        return (0, l._)(this, n), (e = r.apply(this, arguments)).state = {
                            width: window.innerWidth
                        }, e.elementRef = m.createRef(), e.mounted = !1, e.updated = !1, e
                    }
                    var o = n.prototype;
                    return o.componentDidMount = function() {
                        var e = this;
                        this.mounted = !0, this.resizeObserver = new Q.default((function(t) {
                            var r = e.elementRef.current;
                            if ((0, I._)(r, HTMLElement)) {
                                var n = t[0].contentRect.width;
                                n && e.setState({
                                    width: n
                                })
                            }
                        }));
                        var t = this.elementRef.current;
                        (0, I._)(t, HTMLElement) && this.resizeObserver.observe(t)
                    }, o.componentDidUpdate = function(e, t) {
                        if (this.props.measureBeforeMount && !this.updated) {
                            var r = this;
                            this.updated = !0, this.resizeObserver.disconnect(), this.resizeObserver = new Q.default((function(e) {
                                var t = r.elementRef.current;
                                if ((0, I._)(t, HTMLElement)) {
                                    var n = e[0].contentRect.width;
                                    n && r.setState({
                                        width: n
                                    })
                                }
                            }));
                            var n = this.elementRef.current;
                            (0, I._)(n, HTMLElement) && this.resizeObserver.observe(n)
                        }
                    }, o.componentWillUnmount = function() {
                        this.mounted = !1;
                        var e = this.elementRef.current;
                        (0, I._)(e, HTMLElement) && this.resizeObserver.unobserve(e), this.resizeObserver.disconnect()
                    }, o.render = function() {
                        var t = this.props,
                            r = t.measureBeforeMount,
                            n = (0, h._)(t, ["measureBeforeMount"]);
                        return r && !this.mounted ? m.createElement("div", {
                            className: (0, S.A)(this.props.className, U),
                            style: this.props.style,
                            ref: this.elementRef
                        }) : m.createElement(e, (0, c._)({
                            innerRef: this.elementRef
                        }, n, this.state))
                    }, n
                }(m.Component), (t = r).defaultProps = {
                    measureBeforeMount: !1
                }, t.propTypes = {
                    measureBeforeMount: b().bool
                }, t
            }
        },
        pil5: (e, t, r) => {
            "use strict";
            r.d(t, {
                $U: () => O,
                AR: () => S,
                BM: () => B,
                C1: () => m,
                F2: () => G,
                FN: () => h,
                GN: () => x,
                I: () => g,
                M8: () => L,
                Su: () => f,
                c3: () => y,
                cF: () => d,
                cZ: () => C,
                gt: () => U,
                hT: () => I,
                lQ: () => Z,
                mj: () => F,
                oE: () => b,
                rD: () => j,
                sQ: () => p
            });
            var n = r("hrAD"),
                o = r("qoEP"),
                a = r("d12p"),
                i = r("ZciU"),
                s = r("DTvD"),
                l = r.n(s),
                u = !0,
                c = !1;

            function p(e) {
                for (var t, r = 0, n = 0, o = e.length; n < o; n++) e[n] && (t = e[n].y + e[n].h), t > r && (r = t);
                return r
            }

            function f(e) {
                for (var t = Array(e.length), r = 0, n = e.length; r < n; r++) t[r] = h(e[r]);
                return t
            }

            function d(e, t, r) {
                var n = x(e, t);
                return n ? [e = function(e, t) {
                    for (var r = Array(e.length), n = 0, o = e.length; n < o; n++) t.i === e[n].i ? r[n] = t : r[n] = e[n];
                    return r
                }(e, n = r(h(n))), n] : [e, null]
            }

            function h(e) {
                return {
                    w: e.w,
                    h: e.h,
                    x: e.x,
                    y: e.y,
                    i: e.i,
                    minW: e.minW,
                    maxW: e.maxW,
                    minH: e.minH,
                    maxH: e.maxH,
                    moved: Boolean(e.moved),
                    static: Boolean(e.static),
                    isDraggable: e.isDraggable,
                    isResizable: e.isResizable,
                    resizeHandles: e.resizeHandles,
                    isBounded: e.isBounded
                }
            }

            function g(e, t) {
                return (0, i.deepEqual)(l().Children.map(e, (function(e) {
                    return null === e || void 0 === e ? void 0 : e.key
                })), l().Children.map(t, (function(e) {
                    return null === e || void 0 === e ? void 0 : e.key
                }))) && (0, i.deepEqual)(l().Children.map(e, (function(e) {
                    return null === e || void 0 === e ? void 0 : e.props["data-grid"]
                })), l().Children.map(t, (function(e) {
                    return null === e || void 0 === e ? void 0 : e.props["data-grid"]
                })))
            }
            var m = r("GmHf");

            function y(e, t) {
                return e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height
            }

            function v(e, t) {
                return e.i !== t.i && (!(e.x + e.w <= t.x) && (!(e.x >= t.x + t.w) && (!(e.y + e.h <= t.y) && !(e.y >= t.y + t.h))))
            }

            function b(e, t, r, n) {
                for (var o = P(e), a = Q(e, t), i = Array(e.length), s = 0, l = a.length; s < l; s++) {
                    var u = h(a[s]);
                    u.static || (u = z(o, u, t, r, a, n), o.push(u)), i[e.indexOf(a[s])] = u, u.moved = !1
                }
                return i.filter(Boolean)
            }
            var w = {
                x: "w",
                y: "h"
            };

            function R(e, t, r, n) {
                var o = w[n];
                t[n] += 1;
                for (var a = e.map((function(e) {
                        return e.i
                    })).indexOf(t.i) + 1; a < e.length; a++) {
                    var i = e[a];
                    if (!i.static) {
                        if (i.y > t.y + t.h) break;
                        v(t, i) && R(e, i, r + t[o], n)
                    }
                }
                t[n] = r
            }

            function z(e, t, r, n, o, a) {
                var i, s = "horizontal" === r;
                if ("vertical" === r)
                    for (t.y = Math.min(p(e), t.y); t.y > 0 && !D(e, t);) t.y--;
                else if (s)
                    for (; t.x > 0 && !D(e, t);) t.x--;
                for (;
                    (i = D(e, t)) && (null !== r || !a);)
                    if (s ? R(o, t, i.x + i.w, "x") : R(o, t, i.y + i.h, "y"), s && t.x + t.w > n)
                        for (t.x = n - t.w, t.y++; t.x > 0 && !D(e, t);) t.x--;
                return t.y = Math.max(t.y, 0), t.x = Math.max(t.x, 0), t
            }

            function S(e, t) {
                for (var r = P(e), n = 0, o = e.length; n < o; n++) {
                    var a = e[n];
                    if (a.x + a.w > t.cols && (a.x = t.cols - a.w), a.x < 0 && (a.x = 0, a.w = t.cols), a.static)
                        for (; D(r, a);) a.y++;
                    else r.push(a)
                }
                return e
            }

            function x(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r].i === t) return e[r]
            }

            function D(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (v(e[r], t)) return e[r]
            }

            function O(e, t) {
                return e.filter((function(e) {
                    return v(e, t)
                }))
            }

            function P(e) {
                return e.filter((function(e) {
                    return e.static
                }))
            }

            function C(e, t, r, n, o, a, i, s, l) {
                if (t.static && !0 !== t.isDraggable) return e;
                if (t.y === n && t.x === r) return e;
                Y("Moving element ".concat(t.i, " to [").concat(String(r), ",").concat(String(n), "] from [").concat(t.x, ",").concat(t.y, "]"));
                var u = t.x,
                    c = t.y;
                "number" === typeof r && (t.x = r), "number" === typeof n && (t.y = n), t.moved = !0;
                var p = Q(e, i);
                ("vertical" === i && "number" === typeof n ? c >= n : "horizontal" === i && "number" === typeof r && u >= r) && (p = p.reverse());
                var d = O(p, t),
                    h = d.length > 0;
                if (h && l) return f(e);
                if (h && a) return Y("Collision prevented on ".concat(t.i, ", reverting.")), t.x = u, t.y = c, t.moved = !1, e;
                for (var g = 0, m = d.length; g < m; g++) {
                    var y = d[g];
                    Y("Resolving collision between ".concat(t.i, " at [").concat(t.x, ",").concat(t.y, "] and ").concat(y.i, " at [").concat(y.x, ",").concat(y.y, "]")), y.moved || (e = y.static ? E(e, y, t, o, i, s) : E(e, t, y, o, i, s))
                }
                return e
            }

            function E(e, t, r, n, o, a) {
                var i = "horizontal" === o,
                    s = "vertical" === o,
                    l = t.static;
                if (n) {
                    n = !1;
                    var u = {
                            x: i ? Math.max(t.x - r.w, 0) : r.x,
                            y: s ? Math.max(t.y - r.h, 0) : r.y,
                            w: r.w,
                            h: r.h,
                            i: "-1"
                        },
                        c = D(e, u),
                        p = c && c.y + c.h > t.y,
                        f = c && t.x + t.w > c.x;
                    if (!c) return Y("Doing reverse collision on ".concat(r.i, " up to [").concat(u.x, ",").concat(u.y, "].")), C(e, r, i ? u.x : void 0, s ? u.y : void 0, n, l, o, a);
                    if (p && s) return C(e, r, void 0, t.y + 1, n, l, o, a);
                    if (p && null == o) return t.y = r.y, r.y = r.y + r.h, e;
                    if (f && i) return C(e, t, r.x, void 0, n, l, o, a)
                }
                var d = i ? r.x + 1 : void 0,
                    h = s ? r.y + 1 : void 0;
                return null == d && null == h ? e : C(e, r, i ? r.x + 1 : void 0, s ? r.y + 1 : void 0, n, l, o, a)
            }

            function j(e) {
                return 100 * e + "%"
            }
            var H = function(e, t, r, n) {
                    return e + r > n ? t : r
                },
                k = function(e, t, r) {
                    return e < 0 ? t : r
                },
                M = function(e) {
                    return Math.max(0, e)
                },
                _ = function(e) {
                    return Math.max(0, e)
                },
                q = function(e, t, r) {
                    var n = t.left,
                        o = t.height,
                        a = t.width,
                        i = e.top - (o - e.height);
                    return {
                        left: n,
                        width: a,
                        height: k(i, e.height, o),
                        top: _(i)
                    }
                },
                T = function(e, t, r) {
                    var n = t.top,
                        o = t.left,
                        a = t.height,
                        i = t.width;
                    return {
                        top: n,
                        height: a,
                        width: H(e.left, e.width, i, r),
                        left: M(o)
                    }
                },
                W = function(e, t, r) {
                    var n = t.top,
                        o = t.height,
                        a = t.width,
                        i = e.left - (a - e.width);
                    return {
                        height: o,
                        width: i < 0 ? e.width : H(e.left, e.width, a, r),
                        top: _(n),
                        left: M(i)
                    }
                },
                N = function(e, t, r) {
                    var n = t.top,
                        o = t.left,
                        a = t.height;
                    return {
                        width: t.width,
                        left: o,
                        height: k(n, e.height, a),
                        top: _(n)
                    }
                },
                A = {
                    n: q,
                    ne: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return q(t[0], T.apply(void 0, (0, a._)(t)), t[2])
                    },
                    e: T,
                    se: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return N(t[0], T.apply(void 0, (0, a._)(t)), t[2])
                    },
                    s: N,
                    sw: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return N(t[0], W.apply(void 0, (0, a._)(t)), t[2])
                    },
                    w: W,
                    nw: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return q(t[0], W.apply(void 0, (0, a._)(t)), t[2])
                    }
                };

            function L(e, t, r, o) {
                var a = A[e];
                return a ? a(t, (0, n._)({}, t, r), o) : r
            }

            function B(e) {
                var t = e.top,
                    r = e.left,
                    n = e.width,
                    o = e.height,
                    a = "translate(".concat(r, "px,").concat(t, "px)");
                return {
                    transform: a,
                    WebkitTransform: a,
                    MozTransform: a,
                    msTransform: a,
                    OTransform: a,
                    width: "".concat(n, "px"),
                    height: "".concat(o, "px"),
                    position: "absolute"
                }
            }

            function I(e) {
                var t = e.top,
                    r = e.left,
                    n = e.width,
                    o = e.height;
                return {
                    top: "".concat(t, "px"),
                    left: "".concat(r, "px"),
                    width: "".concat(n, "px"),
                    height: "".concat(o, "px"),
                    position: "absolute"
                }
            }

            function Q(e, t) {
                return "horizontal" === t ? function(e) {
                    return e.slice(0).sort((function(e, t) {
                        return e.x > t.x || e.x === t.x && e.y > t.y ? 1 : -1
                    }))
                }(e) : "vertical" === t ? function(e) {
                    return e.slice(0).sort((function(e, t) {
                        return e.y > t.y || e.y === t.y && e.x > t.x ? 1 : e.y === t.y && e.x === t.x ? 0 : -1
                    }))
                }(e) : e
            }

            function U(e, t, r, a, i) {
                e = e || [];
                var s = [];
                l().Children.forEach(t, (function(t) {
                    if (null != (null === t || void 0 === t ? void 0 : t.key)) {
                        var r = x(e, String(t.key)),
                            a = t.props["data-grid"];
                        r && null == a ? s.push(h(r)) : a ? (u || G([a], "ReactGridLayout.children"), s.push(h((0, o._)((0, n._)({}, a), {
                            i: t.key
                        })))) : s.push(h({
                            w: 1,
                            h: 1,
                            x: 0,
                            y: p(s),
                            i: String(t.key)
                        }))
                    }
                }));
                var c = S(s, {
                    cols: r
                });
                return i ? c : b(c, a, r)
            }

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Layout",
                    r = ["x", "y", "w", "h"];
                if (!Array.isArray(e)) throw new Error(t + " must be an array!");
                for (var n = 0, o = e.length; n < o; n++)
                    for (var a = e[n], i = 0; i < r.length; i++)
                        if ("number" !== typeof a[r[i]]) throw new Error("ReactGridLayout: " + t + "[" + n + "]." + r[i] + " must be a number!")
            }

            function F(e) {
                var t = e || {},
                    r = t.verticalCompact,
                    n = t.compactType;
                return !1 === r ? null : n
            }

            function Y() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n;
                c && (n = console).log.apply(n, (0, a._)(t))
            }
            var Z = function() {}
        },
        gNVY: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r("b6CO"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("ZWPC"),
                s = r("2IQ4"),
                l = (0, i.UF)("uikit-core", "Slider"),
                u = (0, o.forwardRef)((function(e, t) {
                    var r = (0, n._)({}, e);
                    return l(), a().createElement(s.A, (0, n._)({
                        ref: t,
                        as: "input",
                        type: "range",
                        tx: "forms",
                        variant: "slider"
                    }, r, {
                        __css: {
                            display: "block",
                            width: "100%",
                            height: 4,
                            my: 2,
                            cursor: "pointer",
                            appearance: "none",
                            borderRadius: 9999,
                            color: "inherit",
                            bg: "gray",
                            ":focus": {
                                outline: "none",
                                color: "primary"
                            },
                            "&::-webkit-slider-thumb": {
                                appearance: "none",
                                width: 16,
                                height: 16,
                                bg: "currentcolor",
                                border: 0,
                                borderRadius: 9999,
                                variant: "forms.slider.thumb"
                            }
                        }
                    }))
                }));
            u.displayName = "Slider";
            const c = u
        },
        ZciU: function(e, t) {
            ! function(e) {
                "use strict";

                function t(e) {
                    return function(t, r, n, o, a, i, s) {
                        return e(t, r, s)
                    }
                }

                function r(e) {
                    return function(t, r, n, o) {
                        if (!t || !r || "object" !== typeof t || "object" !== typeof r) return e(t, r, n, o);
                        var a = o.get(t),
                            i = o.get(r);
                        if (a && i) return a === r && i === t;
                        o.set(t, r), o.set(r, t);
                        var s = e(t, r, n, o);
                        return o.delete(t), o.delete(r), s
                    }
                }

                function n(e, t) {
                    var r = {};
                    for (var n in e) r[n] = e[n];
                    for (var n in t) r[n] = t[n];
                    return r
                }

                function o(e) {
                    return e.constructor === Object || null == e.constructor
                }

                function a(e) {
                    return "function" === typeof e.then
                }

                function i(e, t) {
                    return e === t || e !== e && t !== t
                }
                var s = "[object Arguments]",
                    l = "[object Boolean]",
                    u = "[object Date]",
                    c = "[object RegExp]",
                    p = "[object Map]",
                    f = "[object Number]",
                    d = "[object Object]",
                    h = "[object Set]",
                    g = "[object String]",
                    m = Object.prototype.toString;

                function y(e) {
                    var t = e.areArraysEqual,
                        r = e.areDatesEqual,
                        n = e.areMapsEqual,
                        y = e.areObjectsEqual,
                        v = e.areRegExpsEqual,
                        b = e.areSetsEqual,
                        w = (0, e.createIsNestedEqual)(R);

                    function R(e, R, z) {
                        if (e === R) return !0;
                        if (!e || !R || "object" !== typeof e || "object" !== typeof R) return e !== e && R !== R;
                        if (o(e) && o(R)) return y(e, R, w, z);
                        var S = Array.isArray(e),
                            x = Array.isArray(R);
                        if (S || x) return S === x && t(e, R, w, z);
                        var D = m.call(e);
                        return D === m.call(R) && (D === u ? r(e, R, w, z) : D === c ? v(e, R, w, z) : D === p ? n(e, R, w, z) : D === h ? b(e, R, w, z) : D === d || D === s ? !a(e) && !a(R) && y(e, R, w, z) : (D === l || D === f || D === g) && i(e.valueOf(), R.valueOf()))
                    }
                    return R
                }

                function v(e, t, r, n) {
                    var o = e.length;
                    if (t.length !== o) return !1;
                    for (; o-- > 0;)
                        if (!r(e[o], t[o], o, o, e, t, n)) return !1;
                    return !0
                }
                var b = r(v);

                function w(e, t) {
                    return i(e.valueOf(), t.valueOf())
                }

                function R(e, t, r, n) {
                    var o = e.size === t.size;
                    if (!o) return !1;
                    if (!e.size) return !0;
                    var a = {},
                        i = 0;
                    return e.forEach((function(s, l) {
                        if (o) {
                            var u = !1,
                                c = 0;
                            t.forEach((function(o, p) {
                                u || a[c] || !(u = r(l, p, i, c, e, t, n) && r(s, o, l, p, e, t, n)) || (a[c] = !0), c++
                            })), i++, o = u
                        }
                    })), o
                }
                var z = r(R),
                    S = "_owner",
                    x = Object.prototype.hasOwnProperty;

                function D(e, t, r, n) {
                    var o, a = Object.keys(e),
                        i = a.length;
                    if (Object.keys(t).length !== i) return !1;
                    for (; i-- > 0;) {
                        if ((o = a[i]) === S) {
                            var s = !!e.$$typeof,
                                l = !!t.$$typeof;
                            if ((s || l) && s !== l) return !1
                        }
                        if (!x.call(t, o) || !r(e[o], t[o], o, o, e, t, n)) return !1
                    }
                    return !0
                }
                var O = r(D);

                function P(e, t) {
                    return e.source === t.source && e.flags === t.flags
                }

                function C(e, t, r, n) {
                    var o = e.size === t.size;
                    if (!o) return !1;
                    if (!e.size) return !0;
                    var a = {};
                    return e.forEach((function(i, s) {
                        if (o) {
                            var l = !1,
                                u = 0;
                            t.forEach((function(o, c) {
                                l || a[u] || !(l = r(i, o, s, c, e, t, n)) || (a[u] = !0), u++
                            })), o = l
                        }
                    })), o
                }
                var E = r(C),
                    j = Object.freeze({
                        areArraysEqual: v,
                        areDatesEqual: w,
                        areMapsEqual: R,
                        areObjectsEqual: D,
                        areRegExpsEqual: P,
                        areSetsEqual: C,
                        createIsNestedEqual: t
                    }),
                    H = Object.freeze({
                        areArraysEqual: b,
                        areDatesEqual: w,
                        areMapsEqual: z,
                        areObjectsEqual: O,
                        areRegExpsEqual: P,
                        areSetsEqual: E,
                        createIsNestedEqual: t
                    }),
                    k = y(j);

                function M(e, t) {
                    return k(e, t, void 0)
                }
                var _ = y(n(j, {
                    createIsNestedEqual: function() {
                        return i
                    }
                }));

                function q(e, t) {
                    return _(e, t, void 0)
                }
                var T = y(H);

                function W(e, t) {
                    return T(e, t, new WeakMap)
                }
                var N = y(n(H, {
                    createIsNestedEqual: function() {
                        return i
                    }
                }));

                function A(e, t) {
                    return N(e, t, new WeakMap)
                }

                function L(e) {
                    return y(n(j, e(j)))
                }

                function B(e) {
                    var t = y(n(H, e(H)));
                    return function(e, r, n) {
                        return void 0 === n && (n = new WeakMap), t(e, r, n)
                    }
                }
                e.circularDeepEqual = W, e.circularShallowEqual = A, e.createCustomCircularEqual = B, e.createCustomEqual = L, e.deepEqual = M, e.sameValueZeroEqual = i, e.shallowEqual = q, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        kcti: (e, t, r) => {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = l(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("DTvD")),
                o = r("0qUY"),
                a = r("gOvW"),
                i = r("nSBD"),
                s = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];

            function l(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (l = function(e) {
                    return e ? r : t
                })(e)
            }

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" !== typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function d(e, t) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }
            var h = function(e) {
                var t, r;

                function i() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(n)) || this).handleRefs = {}, t.lastHandleRect = null, t.slack = null, t
                }
                r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, d(t, r);
                var l = i.prototype;
                return l.componentWillUnmount = function() {
                    this.resetData()
                }, l.resetData = function() {
                    this.lastHandleRect = this.slack = null
                }, l.runConstraints = function(e, t) {
                    var r = this.props,
                        n = r.minConstraints,
                        o = r.maxConstraints,
                        a = r.lockAspectRatio;
                    if (!n && !o && !a) return [e, t];
                    if (a) {
                        var i = this.props.width / this.props.height,
                            s = e - this.props.width,
                            l = t - this.props.height;
                        Math.abs(s) > Math.abs(l * i) ? t = e / i : e = t * i
                    }
                    var u = e,
                        c = t,
                        p = this.slack || [0, 0],
                        f = p[0],
                        d = p[1];
                    return e += f, t += d, n && (e = Math.max(n[0], e), t = Math.max(n[1], t)), o && (e = Math.min(o[0], e), t = Math.min(o[1], t)), this.slack = [f + (u - e), d + (c - t)], [e, t]
                }, l.resizeHandler = function(e, t) {
                    var r = this;
                    return function(n, o) {
                        var a = o.node,
                            i = o.deltaX,
                            s = o.deltaY;
                        "onResizeStart" === e && r.resetData();
                        var l = ("both" === r.props.axis || "x" === r.props.axis) && "n" !== t && "s" !== t,
                            u = ("both" === r.props.axis || "y" === r.props.axis) && "e" !== t && "w" !== t;
                        if (l || u) {
                            var c = t[0],
                                p = t[t.length - 1],
                                f = a.getBoundingClientRect();
                            if (null != r.lastHandleRect) {
                                if ("w" === p) i += f.left - r.lastHandleRect.left;
                                if ("n" === c) s += f.top - r.lastHandleRect.top
                            }
                            r.lastHandleRect = f, "w" === p && (i = -i), "n" === c && (s = -s);
                            var d = r.props.width + (l ? i / r.props.transformScale : 0),
                                h = r.props.height + (u ? s / r.props.transformScale : 0),
                                g = r.runConstraints(d, h);
                            d = g[0], h = g[1];
                            var m = d !== r.props.width || h !== r.props.height,
                                y = "function" === typeof r.props[e] ? r.props[e] : null;
                            y && !("onResize" === e && !m) && (null == n.persist || n.persist(), y(n, {
                                node: a,
                                size: {
                                    width: d,
                                    height: h
                                },
                                handle: t
                            })), "onResizeStop" === e && r.resetData()
                        }
                    }
                }, l.renderResizeHandle = function(e, t) {
                    var r = this.props.handle;
                    if (!r) return n.createElement("span", {
                        className: "react-resizable-handle react-resizable-handle-" + e,
                        ref: t
                    });
                    if ("function" === typeof r) return r(e, t);
                    var o = p({
                        ref: t
                    }, "string" === typeof r.type ? {} : {
                        handleAxis: e
                    });
                    return n.cloneElement(r, o)
                }, l.render = function() {
                    var e = this,
                        t = this.props,
                        r = t.children,
                        i = t.className,
                        l = t.draggableOpts,
                        c = (t.width, t.height, t.handle, t.handleSize, t.lockAspectRatio, t.axis, t.minConstraints, t.maxConstraints, t.onResize, t.onResizeStop, t.onResizeStart, t.resizeHandles),
                        f = (t.transformScale, function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(t, s));
                    return (0, a.cloneElement)(r, p(p({}, f), {}, {
                        className: (i ? i + " " : "") + "react-resizable",
                        children: [].concat(r.props.children, c.map((function(t) {
                            var r, a = null != (r = e.handleRefs[t]) ? r : e.handleRefs[t] = n.createRef();
                            return n.createElement(o.DraggableCore, u({}, l, {
                                nodeRef: a,
                                key: "resizableHandle-" + t,
                                onStop: e.resizeHandler("onResizeStop", t),
                                onStart: e.resizeHandler("onResizeStart", t),
                                onDrag: e.resizeHandler("onResize", t)
                            }), e.renderResizeHandle(t, a))
                        })))
                    }))
                }, i
            }(n.Component);
            t.default = h, h.propTypes = i.resizableProps, h.defaultProps = {
                axis: "both",
                handleSize: [20, 20],
                lockAspectRatio: !1,
                minConstraints: [20, 20],
                maxConstraints: [1 / 0, 1 / 0],
                resizeHandles: ["se"],
                transformScale: 1
            }
        },
        eeFw: (e, t, r) => {
            "use strict";
            t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = u(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("DTvD")),
                o = l(r("1YyT")),
                a = l(r("kcti")),
                i = r("nSBD"),
                s = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (u = function(e) {
                    return e ? r : t
                })(e)
            }

            function c() {
                return c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        d(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" !== typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function h(e, t) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }
            var g = function(e) {
                var t, r;

                function o() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(n)) || this).state = {
                        width: t.props.width,
                        height: t.props.height,
                        propsWidth: t.props.width,
                        propsHeight: t.props.height
                    }, t.onResize = function(e, r) {
                        var n = r.size;
                        t.props.onResize ? (null == e.persist || e.persist(), t.setState(n, (function() {
                            return t.props.onResize && t.props.onResize(e, r)
                        }))) : t.setState(n)
                    }, t
                }
                return r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, h(t, r), o.getDerivedStateFromProps = function(e, t) {
                    return t.propsWidth !== e.width || t.propsHeight !== e.height ? {
                        width: e.width,
                        height: e.height,
                        propsWidth: e.width,
                        propsHeight: e.height
                    } : null
                }, o.prototype.render = function() {
                    var e = this.props,
                        t = e.handle,
                        r = e.handleSize,
                        o = (e.onResize, e.onResizeStart),
                        i = e.onResizeStop,
                        l = e.draggableOpts,
                        u = e.minConstraints,
                        p = e.maxConstraints,
                        d = e.lockAspectRatio,
                        h = e.axis,
                        g = (e.width, e.height, e.resizeHandles),
                        m = e.style,
                        y = e.transformScale,
                        v = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, s);
                    return n.createElement(a.default, {
                        axis: h,
                        draggableOpts: l,
                        handle: t,
                        handleSize: r,
                        height: this.state.height,
                        lockAspectRatio: d,
                        maxConstraints: p,
                        minConstraints: u,
                        onResizeStart: o,
                        onResize: this.onResize,
                        onResizeStop: i,
                        resizeHandles: g,
                        transformScale: y,
                        width: this.state.width
                    }, n.createElement("div", c({}, v, {
                        style: f(f({}, m), {}, {
                            width: this.state.width + "px",
                            height: this.state.height + "px"
                        })
                    })))
                }, o
            }(n.Component);
            t.default = g, g.propTypes = f(f({}, i.resizableProps), {}, {
                children: o.default.element
            })
        },
        nSBD: (e, t, r) => {
            "use strict";
            t.__esModule = !0, t.resizableProps = void 0;
            var n, o = (n = r("1YyT")) && n.__esModule ? n : {
                default: n
            };
            r("0qUY");
            var a = {
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                className: o.default.string,
                children: o.default.element.isRequired,
                draggableOpts: o.default.shape({
                    allowAnyClick: o.default.bool,
                    cancel: o.default.string,
                    children: o.default.node,
                    disabled: o.default.bool,
                    enableUserSelectHack: o.default.bool,
                    offsetParent: o.default.node,
                    grid: o.default.arrayOf(o.default.number),
                    handle: o.default.string,
                    nodeRef: o.default.object,
                    onStart: o.default.func,
                    onDrag: o.default.func,
                    onStop: o.default.func,
                    onMouseDown: o.default.func,
                    scale: o.default.number
                }),
                height: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n, a = t[0];
                    return "both" === a.axis || "y" === a.axis ? (n = o.default.number).isRequired.apply(n, t) : o.default.number.apply(o.default, t)
                },
                handle: o.default.oneOfType([o.default.node, o.default.func]),
                handleSize: o.default.arrayOf(o.default.number),
                lockAspectRatio: o.default.bool,
                maxConstraints: o.default.arrayOf(o.default.number),
                minConstraints: o.default.arrayOf(o.default.number),
                onResizeStop: o.default.func,
                onResizeStart: o.default.func,
                onResize: o.default.func,
                resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                transformScale: o.default.number,
                width: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n, a = t[0];
                    return "both" === a.axis || "x" === a.axis ? (n = o.default.number).isRequired.apply(n, t) : o.default.number.apply(o.default, t)
                }
            };
            t.resizableProps = a
        },
        gOvW: (e, t, r) => {
            "use strict";
            t.__esModule = !0, t.cloneElement = function(e, t) {
                t.style && e.props.style && (t.style = i(i({}, e.props.style), t.style));
                t.className && e.props.className && (t.className = e.props.className + " " + t.className);
                return o.default.cloneElement(e, t)
            };
            var n, o = (n = r("DTvD")) && n.__esModule ? n : {
                default: n
            };

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" !== typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
        },
        u4Mn: (e, t, r) => {
            "use strict";
            e.exports = function() {
                throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")
            }, e.exports.Resizable = r("kcti").default, e.exports.ResizableBox = r("eeFw").default
        },
        JqUx: (e, t, r) => {
            "use strict";

            function n(e) {
                throw e
            }
            r.d(t, {
                _: () => n
            })
        },
        "5W/k": (e, t, r) => {
            "use strict";

            function n(e) {
                var t, r, o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (o && (o += " "), o += r)
                    } else
                        for (r in e) e[r] && (o && (o += " "), o += r);
                return o
            }
            r.d(t, {
                A: () => o
            });
            const o = function() {
                for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = n(e)) && (o && (o += " "), o += t);
                return o
            }
        }
    }
]);