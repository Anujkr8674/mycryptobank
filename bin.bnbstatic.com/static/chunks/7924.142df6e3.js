"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7924], {
        tC4u: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n("mXdx"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("hTvQ"),
                s = n.n(a),
                l = n("d6PB");
            const d = {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                },
                c = (0, i.memo)((function({
                    show: e = !0,
                    fullScreen: t = !1,
                    inner: n,
                    children: i,
                    zIndex: a
                }) {
                    if (!e) return i || null;
                    const s = (0, r.jsx)(l.A, {
                        sx: {
                            zIndex: a || "100",
                            ...d
                        }
                    });
                    return t ? (0, r.jsxs)(o().Fragment, {
                        children: [i, (0, r.jsx)("div", {
                            style: {
                                position: n ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",
                                zIndex: 2e3
                            },
                            children: s
                        })]
                    }) : (0, r.jsxs)(o().Fragment, {
                        children: [i, s]
                    })
                }));
            let u;
            c.show = ({
                fullScreen: e = !1
            } = {}) => {
                u || (u = document.createElement("div"), document.body.appendChild(u)), s().render((0, r.jsx)(c, {
                    fullScreen: e
                }), u)
            }, c.hide = () => {
                u && s().render((0, r.jsx)(c, {
                    show: !1
                }), u)
            };
            const h = c
        },
        bqtE: (e, t, n) => {
            n.d(t, {
                A: () => S
            });
            var r = n("Bkzn"),
                i = n("b6CO"),
                o = n("2/kH"),
                a = n("KrVi"),
                s = n("M9gu"),
                l = n("DTvD"),
                d = n.n(l),
                c = n("O3zE"),
                u = n("+Uhi"),
                h = n("2IQ4"),
                f = n("GIr8"),
                p = n("cSeX"),
                x = n("oY5g"),
                m = n("PzHQ");
            const v = function(e) {
                return d().createElement(m.A, (0, i._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), d().createElement("path", {
                    d: "M5 10V8.6l2.8-2.968L10.6 8.6V10H5z",
                    fill: "currentColor"
                }))
            };
            var g = n("yZa/"),
                I = function(e) {
                    return d().createElement(h.A, (0, i._)({
                        tx: "listGrid",
                        variant: "default",
                        __css: {
                            overflow: "hidden",
                            boxSizing: "border-box",
                            borderBottom: "1px solid",
                            transition: "all 0.2s ease-in"
                        }
                    }, e))
                },
                _ = function(e) {
                    return d().createElement(h.A, (0, i._)({
                        tx: "listGrid",
                        variant: "default",
                        __css: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "8px 0",
                            padding: "0 16px"
                        }
                    }, e))
                },
                y = function(e) {
                    return d().createElement(_, (0, i._)({
                        tx: "listGrid",
                        mt: "24px",
                        mb: "16px",
                        variant: "header"
                    }, e))
                },
                S = function(e) {
                    (0, o._)(n, e);
                    var t = (0, s._)(n);

                    function n(e) {
                        var i;
                        return (0, r._)(this, n), (i = t.call(this, e)).displayName = "ListGrid", i.listRef = d().createRef(), i.getSelectKey = function(e) {
                            var t = i.props.rowKey;
                            return -1 === e ? -1 : t ? "function" === typeof t ? t(e) : e[t] : e.key
                        }, i.getSelectKeyWithIndex = function(e, t) {
                            var n = i.getSelectKey(e);
                            return void 0 === n ? t : n
                        }, i.getItemSize = function(e) {
                            var t = i.props.listGridConfig;
                            return 0 === e && t.headerCellHeight ? t.headerCellHeight : e === i.getEmptyDataIndex() && t.emptyCellHeight ? t.emptyCellHeight : void 0 === t.expandHeight ? t.collapseHeight : e === i.state.expandItemIndex ? t.expandHeight : t.collapseHeight
                        }, i.isItemLoaded = function(e) {
                            return e < i.props.data.length
                        }, i.getEmptyDataIndex = function() {
                            var e = i.props,
                                t = e.data,
                                n = e.renderHeaderCell;
                            if ("function" === typeof e.renderEmptyCell) {
                                if (0 === t.length) return 0;
                                if (1 === t.length && n) return 1
                            }
                            return -1
                        }, i._row = function(e) {
                            var t = e.index,
                                n = e.style,
                                r = i.props,
                                o = r.columns,
                                a = r.data,
                                s = r.loadingPlaceholder,
                                l = r.listGridConfig,
                                c = r.renderHeaderCell,
                                u = r.renderEmptyCell,
                                p = r.onSelect;
                            if (0 === t && "function" === typeof c) return c();
                            if (i.getEmptyDataIndex() === t && "function" === typeof u) return u();
                            if (!i.isItemLoaded(t)) return d().createElement(h.A, {
                                style: n
                            }, s);
                            var x = a[t],
                                m = i.getSelectKeyWithIndex(x, t);
                            return d().createElement(I, {
                                className: "grid-row-wrap",
                                style: n
                            }, o.map((function(e, n) {
                                return 0 === n ? d().createElement(y, {
                                    key: n,
                                    className: "grid-row-header",
                                    onClick: function() {
                                        return i.handleExpandAndCollapse(t)
                                    }
                                }, d().createElement(f.A, {
                                    flex: 1,
                                    alignItems: "center",
                                    onClick: p ? function(e) {
                                        e.stopPropagation(), e.preventDefault(), i.handleSelectRow(m)
                                    } : void 0
                                }, p && i._checkbox(x, t), " ", i._cell(x, e)), l.expandHeight && d().createElement(h.A, {
                                    pl: "20px"
                                }, t === i.state.expandItemIndex ? d().createElement(v, {
                                    tx: "listGrid",
                                    variant: "toggleIcon"
                                }) : d().createElement(g.A, {
                                    tx: "listGrid",
                                    variant: "toggleIcon"
                                }))) : d().createElement(_, {
                                    className: "grid-row",
                                    alignItems: "flex-start",
                                    key: n
                                }, !o[n].hideTitle && d().createElement(h.A, {
                                    tx: "listGrid",
                                    variant: "leftHeader",
                                    __css: {
                                        whiteSpace: "nowrap",
                                        flexShrink: 0
                                    }
                                }, o[n].title), d().createElement(h.A, {
                                    tx: "listGrid",
                                    flex: 1,
                                    variant: o[n].hideTitle ? "" : "rightContent"
                                }, i._cell(x, e)))
                            })))
                        }, i._cell = function(e, t) {
                            return "function" === typeof t.render ? t.render(e[t.dataIndex], e) : e[t.dataIndex]
                        }, i._checkbox = function(e, t) {
                            var n = i.getSelectKeyWithIndex(e, t);
                            return d().createElement(p.A, {
                                tx: "listGrid",
                                variant: "checkbox"
                            }, d().createElement(x.A, {
                                checked: i.state.selectedKeySet.has(n),
                                readOnly: !0
                            }))
                        }, i.toggleAllSelection = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = i.props,
                                n = t.data,
                                r = t.renderHeaderCell,
                                o = i.state.selectedKeySet;
                            if (e)
                                for (var a = 0; a < n.length; a++) 0 === a && r || o.add(i.getSelectKeyWithIndex(n[a], a));
                            else o.clear();
                            i.renderAndOnSelect()
                        }, i.state = {
                            expandItemIndex: -1,
                            selectedKeySet: new Set
                        }, i
                    }
                    var l = n.prototype;
                    return l.handleExpandAndCollapse = function(e) {
                        var t = Math.min(e, this.state.expandItemIndex);
                        t < 0 && (t = 0), this.state.expandItemIndex === e ? this.setState({
                            expandItemIndex: -1
                        }) : this.setState({
                            expandItemIndex: e
                        }), this.listRef.current && this.listRef.current.resetAfterIndex(t, !0)
                    }, l.handleSelectRow = function(e) {
                        var t = this.state.selectedKeySet;
                        t.has(e) ? t.delete(e) : t.add(e), this.renderAndOnSelect()
                    }, l.renderAndOnSelect = function() {
                        var e = this,
                            t = this.state.selectedKeySet,
                            n = this.props,
                            r = n.data,
                            i = n.onSelect,
                            o = n.renderHeaderCell,
                            a = Array.from(t).sort((function(e, t) {
                                return e - t
                            })),
                            s = [];
                        r.forEach((function(n, r) {
                            t.has(e.getSelectKeyWithIndex(n, r)) && s.push(r)
                        })), i && i(o ? s.map((function(e) {
                            return e - 1
                        })) : s, a), this.setState({
                            selectedKeySet: new Set(a)
                        }), this.listRef.current && this.listRef.current.resetAfterIndex(0, !0)
                    }, l.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.data,
                            r = t.hasMore,
                            o = t.loadMore,
                            s = void 0 === o ? function() {
                                return Promise.resolve()
                            } : o,
                            l = t.listGridConfig,
                            h = t.threshold,
                            f = void 0 === h ? 15 : h,
                            p = (0, a._)(t, ["data", "hasMore", "loadMore", "listGridConfig", "threshold"]),
                            x = r ? n.length + 1 : n.length;
                        return -1 !== this.getEmptyDataIndex() && x++, d().createElement(u.A, {
                            threshold: f,
                            isItemLoaded: this.isItemLoaded,
                            itemCount: x,
                            loadMoreItems: s
                        }, (function(t) {
                            var n = t.onItemsRendered,
                                r = t.ref;
                            return d().createElement(c._m, (0, i._)({}, p, {
                                height: l.height,
                                itemCount: x,
                                itemSize: e.getItemSize,
                                onItemsRendered: n,
                                ref: function(t) {
                                    r(t), e.listRef = {
                                        current: t
                                    }
                                },
                                width: l.width
                            }), e._row)
                        }))
                    }, n.getDerivedStateFromProps = function(e) {
                        return e.selectedKeys ? {
                            selectedKeySet: new Set(e.selectedKeys)
                        } : null
                    }, n
                }(l.PureComponent)
        },
        xZXB: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n("mXdx"),
                i = (n("DTvD"), n("pdXn"));
            const o = function(e) {
                var t = e.width,
                    n = e.height,
                    o = e.extend,
                    a = e.children;
                return o ? a({
                    width: t,
                    height: n
                }) : (0, r.jsx)(i.Ay, {
                    children: a
                })
            }
        },
        "1T/z": (e, t, n) => {
            n.d(t, {
                A: () => y
            });
            var r = n("Gnqa"),
                i = n("Bkzn"),
                o = n("2/kH"),
                a = n("M9gu"),
                s = n("mXdx"),
                l = n("DTvD"),
                d = n("GIr8"),
                c = n("Vhyo"),
                u = n("hrAD"),
                h = n("qoEP"),
                f = {
                    offset: 0,
                    x: !0
                },
                p = function(e) {
                    return "function" === typeof e
                },
                x = function(e) {
                    return e && "object" === typeof e && !(0, l.isValidElement)(e)
                },
                m = function(e, t) {
                    var n = x(e),
                        r = x(t);
                    if (n && n === r) {
                        var i = Object.keys(e),
                            o = Object.keys(t);
                        if (i.length === o.length) return Number(i.every((function(n) {
                            return m(e[n], t[n])
                        })))
                    } else if (p(e) && p(t) || (0, l.isValidElement)(e) && (0, l.isValidElement)(t)) return !0;
                    return Number(e === t)
                };

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = (null === e || void 0 === e ? void 0 : e.getBoundingClientRect()) || {},
                    i = r.top,
                    o = void 0 === i ? 0 : i,
                    a = r.right,
                    s = void 0 === a ? 0 : a,
                    l = r.bottom,
                    d = void 0 === l ? 0 : l,
                    c = r.left,
                    u = void 0 === c ? 0 : c,
                    h = r.width,
                    f = void 0 === h ? 0 : h,
                    p = r.height,
                    x = void 0 === p ? 0 : p,
                    m = document.documentElement,
                    v = m.clientWidth,
                    g = m.clientHeight;
                return (f > 0 || x > 0) && d >= -t && o < g + t && (!n || s >= -t && u < v + t)
            }
            var g = function(e) {
                (0, o._)(n, e);
                var t = (0, a._)(n);

                function n(e) {
                    var o;
                    return (0, i._)(this, n), (o = t.call(this, e)).rootRef = (0, l.createRef)(), o.unmount = !1, o.checkUpdate = function() {
                        return o.rootRef.current && !o.unmount
                    }, o.checkViewport = function(e) {
                        var t = (0, r._)(o).index,
                            i = o.rootRef.current,
                            a = o.props,
                            s = a.check,
                            l = a.noLazy;
                        if (o.checkUpdate()) {
                            var d = (0, u._)({}, f, s),
                                c = d.offset,
                                h = d.x;
                            l || v(i, c, h) ? (delete n.instances[t], o.inViewPort(e)) : n.instances[t] = (0, r._)(o)
                        }
                    }, o.inViewPort = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    }, o.equalUpdate = function(e, t) {
                        m(e, t) || o.checkViewport()
                    }, o.index = n.count, n.count += 1, o
                }
                var s = n.prototype;
                return s.componentDidUpdate = function(e) {
                    var t = (0, h._)((0, u._)({}, this.props), {
                            check: null
                        }),
                        n = (0, h._)((0, u._)({}, e), {
                            check: null
                        });
                    this.equalUpdate(n, t)
                }, s.componentDidMount = function() {
                    this.checkViewport()
                }, s.componentWillUnmount = function() {
                    delete n.instances[this.index], this.unmount = !0
                }, n
            }(l.PureComponent);
            g.instances = {}, g.count = 0, g.reactEquals = m, g.isInViewport = v, g.checkViewport = function() {
                var e = g.instances;
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    n && n.checkViewport()
                }))
            };
            var I = function(e, t) {
                var n = null;
                return function() {
                    var r = this,
                        i = arguments;
                    n || (n = setTimeout((function() {
                        e.apply(r, [].slice.call(i, 0)), n = null
                    }), t))
                }
            }(g.checkViewport, 100);
            document.addEventListener("scroll", I, !0), document.addEventListener("transitionend", I, !0);
            const _ = g;
            const y = function(e) {
                (0, o._)(n, e);
                var t = (0, a._)(n);

                function n() {
                    var e;
                    return (0, i._)(this, n), (e = t.apply(this, arguments)).state = {
                        loading: !1
                    }, e.checkUpdate = function() {
                        var t = e.state.loading;
                        return e.rootRef.current && !t && !e.unmount
                    }, e.inViewPort = function() {
                        var t = e.props.showMore;
                        e.setState({
                            loading: !0
                        }, (function() {
                            new Promise((function(e) {
                                t().then((function() {
                                    return e(!1)
                                })).catch((function() {
                                    return e(!0)
                                }))
                            })).then((function() {
                                _.instances[e.index] = (0, r._)(e)
                            }))
                        }))
                    }, e
                }
                var l = n.prototype;
                return l.componentWillReceiveProps = function(e) {
                    var t = e.loading,
                        n = e.error,
                        r = this;
                    this.state.loading !== t && setTimeout((function() {
                        r.setState({
                            loading: t,
                            error: n
                        })
                    }), 2e3)
                }, l.render = function() {
                    var e = this.rootRef,
                        t = this.props;
                    return (0, s.jsx)(d.A, {
                        sx: {
                            width: "100%",
                            minHeight: "2px",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "t.secondaryOld"
                        },
                        ref: e,
                        children: t.error ? (0, s.jsx)(c.A, {
                            onClick: this.inViewPort,
                            children: "\u52a0\u8f7d\u5931\u8d25\uff0c\u70b9\u51fb\u91cd\u8bd5"
                        }) : null
                    })
                }, n
            }(_)
        },
        idM8: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n("hrAD"),
                i = n("mXdx"),
                o = (n("DTvD"), n("GIr8"));

            function a(e) {
                return (0, i.jsx)(o.A, (0, r._)({
                    __css: {
                        flexDirection: "column",
                        height: "100%",
                        px: "sm"
                    }
                }, e))
            }
        },
        "3sXV": (e, t, n) => {
            n.d(t, {
                p: () => D,
                A: () => M
            });
            var r = n("hrAD"),
                i = n("qoEP"),
                o = n("KrVi"),
                a = n("d12p"),
                s = n("mXdx"),
                l = n("x76r"),
                d = n("zHUU"),
                c = n("GIr8"),
                u = n("bqtE"),
                h = n("ZvZy"),
                f = n("DTvD"),
                p = n.n(f),
                x = n("tC4u"),
                m = n("kNHB"),
                v = n("Olbk"),
                g = n("xZXB"),
                I = n("Qhol"),
                _ = n("Bkzn"),
                y = n("2/kH"),
                S = n("M9gu"),
                A = n("O3zE"),
                w = n("+Uhi"),
                R = n("2IQ4"),
                C = {
                    borderBottomColor: "var(--color-Line)",
                    color: "var(--color-TertiaryText)",
                    fontSize: 1,
                    overflow: "initial",
                    ":hover": {
                        bg: "bg3",
                        ".link": {
                            color: "t.yellow"
                        },
                        ".activeIcon": {
                            display: "initial!important"
                        }
                    }
                },
                b = function(e) {
                    return (0, s.jsx)(R.A, (0, r._)({
                        sx: C,
                        className: "grid-row-wrap",
                        __css: {
                            overflow: "hidden",
                            boxSizing: "border-box",
                            borderBottom: "1px solid"
                        }
                    }, e))
                },
                j = function(e) {
                    return (0, s.jsx)(R.A, (0, r._)({
                        sx: C,
                        __css: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "8px 0",
                            padding: "0 16px"
                        }
                    }, e))
                },
                E = function(e) {
                    (0, y._)(n, e);
                    var t = (0, S._)(n);

                    function n(e) {
                        var r;
                        return (0, _._)(this, n), (r = t.call(this, e)).displayName = "ListGrid", r.listRef = p().createRef(), r.getItemSize = function(e) {
                            var t = r.props.listGridConfig;
                            return void 0 === t.expandHeight ? t.collapseHeight : e === r.state.expandItemIndex ? t.expandHeight : t.collapseHeight
                        }, r.isItemLoaded = function(e) {
                            return e < r.props.data.length
                        }, r._row = function(e) {
                            var t = e.index,
                                n = e.style,
                                i = r.props,
                                o = i.columns,
                                a = i.data,
                                l = i.loadingPlaceholder;
                            if (!r.isItemLoaded(t)) return (0, s.jsx)(R.A, {
                                style: n,
                                children: l
                            });
                            var d = a[t];
                            return (0, s.jsx)(b, {
                                style: n,
                                children: o.map((function(e) {
                                    return (0, s.jsx)(j, {
                                        children: (0, s.jsx)(R.A, {
                                            sx: C,
                                            flex: 1,
                                            height: "100%",
                                            children: e.render(d[e.dataIndex], d, {
                                                collpase: function(e) {
                                                    return r.handleExpandAndCollapse(e || t)
                                                },
                                                isExpand: r.state.expandItemIndex === t,
                                                index: t,
                                                expandData: r.state.expandData,
                                                setExpandData: function(e) {
                                                    return r.setState({
                                                        expandData: e
                                                    })
                                                }
                                            })
                                        })
                                    }, t)
                                }))
                            })
                        }, r.state = {
                            expandItemIndex: -1,
                            expandData: null
                        }, r
                    }
                    var a = n.prototype;
                    return a.handleExpandAndCollapse = function(e) {
                        var t = Math.min(e, this.state.expandItemIndex);
                        t < 0 && (t = 0), this.state.expandItemIndex === e ? this.setState({
                            expandItemIndex: -1
                        }) : this.setState({
                            expandItemIndex: e
                        }), this.listRef.current && this.listRef.current.resetAfterIndex(t, !0)
                    }, a.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.data,
                            a = t.hasMore,
                            l = t.loadMore,
                            d = void 0 === l ? function() {
                                return Promise.resolve()
                            } : l,
                            c = t.listGridConfig,
                            u = t.threshold,
                            h = void 0 === u ? 15 : u,
                            f = (0, o._)(t, ["data", "hasMore", "loadMore", "listGridConfig", "threshold"]),
                            p = a ? n.length + 1 : n.length;
                        return (0, s.jsx)(w.A, {
                            threshold: h,
                            isItemLoaded: this.isItemLoaded,
                            itemCount: p,
                            loadMoreItems: d,
                            children: function(t) {
                                var n = t.onItemsRendered,
                                    o = t.ref;
                                return (0, s.jsx)(A._m, (0, i._)((0, r._)({}, f), {
                                    height: c.height,
                                    itemCount: p,
                                    itemSize: e.getItemSize,
                                    onItemsRendered: n,
                                    ref: function(t) {
                                        o(t), e.listRef = {
                                            current: t
                                        }
                                    },
                                    width: c.width,
                                    children: e._row
                                }))
                            }
                        })
                    }, n
                }(f.PureComponent),
                k = {
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    color: "t.disabled",
                    fontSize: "12px"
                },
                D = function(e) {
                    var t = e.children,
                        n = e.i18nKey,
                        a = void 0 === n ? "nodata" : n,
                        l = e.i18nDefault,
                        d = void 0 === l ? "No Data" : l,
                        u = (0, o._)(e, ["children", "i18nKey", "i18nDefault"]),
                        h = (0, I.ok2)().getI18n;
                    return (0, s.jsxs)(c.A, {
                        sx: k,
                        children: [(0, s.jsx)(m.A, {
                            className: "!w-[64px] !h-[64px] mt-[48px] md:mt-[108px]"
                        }), (0, s.jsx)(v.Ay, (0, i._)((0, r._)({
                            className: "text-SecondaryText text-[14px] font-[500] mt-[10px]"
                        }, u), {
                            children: t || h(a, {
                                defaultValue: d
                            })
                        }))]
                    })
                },
                z = function(e) {
                    var t = e.loading,
                        n = void 0 !== t && t,
                        c = e.listGridProps,
                        p = void 0 === c ? {} : c,
                        m = e.header,
                        I = void 0 === m ? null : m,
                        _ = e.getListGridConfig,
                        y = void 0 === _ ? function(e) {
                            return e
                        } : _,
                        S = e.resetDeps,
                        A = void 0 === S ? [] : S,
                        w = e.emptyNode,
                        R = void 0 === w ? (0, s.jsx)(D, {}) : w,
                        C = e.autoSizerProps,
                        b = e.useExpandList,
                        j = void 0 !== b && b,
                        k = (0, o._)(e, ["loading", "listGridProps", "header", "getListGridConfig", "resetDeps", "emptyNode", "autoSizerProps", "useExpandList"]),
                        z = (0, f.useRef)(null),
                        M = p || {},
                        H = M.listGridConfig,
                        G = M.renderHeaderCell,
                        P = M.data,
                        T = M.style,
                        L = (0, o._)(M, ["listGridConfig", "renderHeaderCell", "data", "style"]);
                    (0, l.A)((function() {
                        if (z && z.current) {
                            var e = z.current.listRef;
                            if (e && e.current) {
                                var t = e.current,
                                    n = e.current.state,
                                    r = Math.floor(n.scrollOffset / 32);
                                t.resetAfterIndex(r, !0)
                            }
                        }
                    }), 1e3 / 60, (0, a._)(A));
                    var N = (0, d.Bl)(),
                        O = (0, h.y)(N),
                        V = I ? [{
                            header: !0
                        }].concat(P) : P,
                        K = !n && !P.length,
                        U = j ? E : u.A;
                    return (0, s.jsxs)(v.Ay, (0, i._)((0, r._)({
                        style: {
                            position: "relative",
                            flex: 1
                        }
                    }, k), {
                        children: [(0, s.jsx)(x.A, {
                            fullScreen: !0,
                            inner: !0,
                            show: n
                        }), (0, s.jsx)(g.A, (0, i._)((0, r._)({}, C), {
                            children: function(e) {
                                var t = e.height,
                                    n = e.width;
                                return K ? (0, s.jsxs)(v.Ay, {
                                    style: {
                                        height: t,
                                        width: n,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [I, R]
                                }) : (0, s.jsx)(U, (0, i._)((0, r._)({
                                    threshold: 5,
                                    style: (0, i._)((0, r._)({
                                        direction: O
                                    }, T), {
                                        overflow: "hidden auto"
                                    })
                                }, L), {
                                    className: "list-grid",
                                    ref: z,
                                    data: V,
                                    renderHeaderCell: G,
                                    listGridConfig: y((0, i._)((0, r._)({
                                        collapseHeight: 80
                                    }, H), {
                                        height: Math.max(t - 2, 0),
                                        width: n
                                    }))
                                }))
                            }
                        }))]
                    }))
                };
            const M = p().memo(z)
        },
        dRNT: (e, t, n) => {
            n.d(t, {
                A: () => x
            });
            var r = n("hrAD"),
                i = n("KrVi"),
                o = n("mXdx"),
                a = n("DTvD"),
                s = n.n(a),
                l = n("3sXV"),
                d = n("2IQ4"),
                c = n("1T/z"),
                u = n("hAzz"),
                h = n("bQ69"),
                f = n("ugWk"),
                p = function(e) {
                    var t = e.loading,
                        n = e.data,
                        s = void 0 === n ? [] : n,
                        p = e.Column,
                        x = e.hasMore,
                        m = e.hasSearch,
                        v = e.loadMore,
                        g = void 0 === v ? function() {
                            return Promise.resolve()
                        } : v,
                        I = (0, i._)(e, ["loading", "data", "Column", "hasMore", "hasSearch", "loadMore"]),
                        _ = t || s && s.length,
                        y = (0, a.useState)(-1),
                        S = y[0],
                        A = y[1],
                        w = (0, a.useCallback)((function(e) {
                            var t = {
                                from: "MAIN",
                                to: "MARGIN",
                                defaultCoin: e
                            };
                            u.RR.emit("triggerModal", f.cP.TRANSTER, h.Gr.CROSS, t)
                        }), []),
                        R = (0, a.useCallback)((function(e) {
                            var t = {
                                from: "MAIN",
                                to: "ISOLATED_MARGIN",
                                defaultIsoSymbol: e
                            };
                            u.RR.emit("triggerModal", f.cP.TRANSTER, h.Gr.ISOLATED, t)
                        }), []),
                        C = s.map((function(e, t) {
                            return (0, o.jsx)(p, (0, r._)({
                                index: t,
                                expandItemIndex: S,
                                setExpandItemIndex: A,
                                triggerCrossModal: w,
                                triggerIsolatedModal: R
                            }, e, I), t)
                        }));
                    return (0, o.jsxs)(d.A, {
                        sx: {
                            height: ["auto", m ? "210px" : "250px"],
                            overflowY: ["auto", "scroll"]
                        },
                        children: [_ ? C : (0, o.jsx)(l.p, {
                            children: null,
                            i18nKey: "trd-TRS-no-records"
                        }), x ? (0, o.jsx)(c.A, {
                            showMore: g,
                            check: {
                                offset: 200
                            },
                            loading: t
                        }) : null]
                    })
                };
            const x = s().memo(p)
        },
        ns3d: (e, t, n) => {
            n.d(t, {
                $_: () => f
            });
            var r = n("hrAD"),
                i = n("mXdx"),
                o = (n("DTvD"), n("GIr8")),
                a = n("Vhyo"),
                s = n("8aEf"),
                l = n("zIIt"),
                d = function(e) {
                    var t = e.tip;
                    return (0, i.jsx)(s.Ay, {
                        tip: t,
                        sx: {
                            pt: "2px",
                            ml: "3px"
                        },
                        children: (0, i.jsx)(l.A, {
                            size: 14
                        })
                    })
                },
                c = function(e) {
                    return (0, i.jsx)(o.A, (0, r._)({
                        __css: {
                            fontSize: 1,
                            flexGrow: "0",
                            flexShrink: "0",
                            flexBasis: ["100%", "33.33333333%"],
                            mb: ["0px", "12px"],
                            flexWrap: ["wrap"],
                            flexDirection: ["row", "column"],
                            justifyContent: ["space-between", "flex-start"],
                            alignItems: "flex-start",
                            lineHeight: ["24px", "28px"]
                        }
                    }, e))
                },
                u = function(e) {
                    return (0, i.jsx)(a.A, (0, r._)({
                        __css: {
                            fontSize: "12px",
                            color: "t.third"
                        }
                    }, e))
                },
                h = function(e) {
                    return (0, i.jsx)(a.A, (0, r._)({
                        __css: {
                            fontSize: "12px",
                            color: "t.primary"
                        }
                    }, e))
                },
                f = function(e) {
                    var t = e.listArray,
                        n = e.t;
                    return (0, i.jsx)(o.A, {
                        sx: {
                            flexWrap: ["wrap"],
                            "& :nth-of-type(3n+0)": {
                                alignItems: ["initial", "flex-end"]
                            }
                        },
                        children: t.map((function(e) {
                            var t = e.label,
                                r = e.value,
                                o = e.tooltip,
                                s = e.renderBase;
                            return (0, i.jsxs)(c, {
                                children: [o ? (0, i.jsxs)(u, {
                                    sx: {
                                        display: "flex",
                                        alignItems: ["flex-start", "center"]
                                    },
                                    children: [t, (0, i.jsx)(d, {
                                        tip: o
                                    })]
                                }) : (0, i.jsx)(u, {
                                    children: t
                                }), r && "object" === typeof r && r.base ? (0, i.jsxs)(a.A, {
                                    sx: {
                                        textAlign: ["right", "left"],
                                        fontSize: "12px",
                                        minHeight: ["40px"],
                                        "& .item-total": {
                                            color: "t.third"
                                        }
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        style: {
                                            lineHeight: "20px"
                                        },
                                        children: [r && (null === r || void 0 === r ? void 0 : r.base), " ", r.baseName, " ", s]
                                    }), (0, i.jsxs)("div", {
                                        children: [r.quote, " ", r.quoteName]
                                    }), r.total && n && (0, i.jsx)("div", {
                                        className: "item-total",
                                        children: "".concat(n("trd-tradeHistory-total"), ": ").concat(r.total)
                                    })]
                                }) : (0, i.jsx)(h, {
                                    sx: {
                                        minHeight: ["24px", "28px"]
                                    },
                                    children: r
                                })]
                            }, t)
                        }))
                    })
                }
        },
        "+Uhi": (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD");
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                };
            const a = function(e) {
                function t() {
                    var e, n, r;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    return n = r = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r._lastRenderedStartIndex = -1, r._lastRenderedStopIndex = -1, r._memoizedUnloadedRanges = [], r._onItemsRendered = function(e) {
                        var t = e.visibleStartIndex,
                            n = e.visibleStopIndex;
                        r._lastRenderedStartIndex = t, r._lastRenderedStopIndex = n, r._ensureRowsLoaded(t, n)
                    }, r._setRef = function(e) {
                        r._listRef = e
                    }, o(r, n)
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
                }(t, e), i(t, [{
                    key: "resetloadMoreItemsCache",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._memoizedUnloadedRanges = [], e && this._ensureRowsLoaded(this._lastRenderedStartIndex, this._lastRenderedStopIndex)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        0
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, this.props.children)({
                            onItemsRendered: this._onItemsRendered,
                            ref: this._setRef
                        })
                    }
                }, {
                    key: "_ensureRowsLoaded",
                    value: function(e, t) {
                        var n = this.props,
                            r = n.isItemLoaded,
                            i = n.itemCount,
                            o = n.minimumBatchSize,
                            a = void 0 === o ? 10 : o,
                            s = n.threshold,
                            l = void 0 === s ? 15 : s,
                            d = function(e) {
                                for (var t = e.isItemLoaded, n = e.itemCount, r = e.minimumBatchSize, i = e.startIndex, o = e.stopIndex, a = [], s = null, l = null, d = i; d <= o; d++) t(d) ? null !== l && (a.push(s, l), s = l = null) : (l = d, null === s && (s = d));
                                if (null !== l) {
                                    for (var c = Math.min(Math.max(l, s + r - 1), n - 1), u = l + 1; u <= c && !t(u); u++) l = u;
                                    a.push(s, l)
                                }
                                if (a.length)
                                    for (; a[1] - a[0] + 1 < r && a[0] > 0;) {
                                        var h = a[0] - 1;
                                        if (t(h)) break;
                                        a[0] = h
                                    }
                                return a
                            }({
                                isItemLoaded: r,
                                itemCount: i,
                                minimumBatchSize: a,
                                startIndex: Math.max(0, e - l),
                                stopIndex: Math.min(i - 1, t + l)
                            });
                        (this._memoizedUnloadedRanges.length !== d.length || this._memoizedUnloadedRanges.some((function(e, t) {
                            return d[t] !== e
                        }))) && (this._memoizedUnloadedRanges = d, this._loadUnloadedRanges(d))
                    }
                }, {
                    key: "_loadUnloadedRanges",
                    value: function(e) {
                        for (var t = this, n = this.props.loadMoreItems || this.props.loadMoreRows, r = function(r) {
                                var i = e[r],
                                    o = e[r + 1],
                                    a = n(i, o);
                                null != a && a.then((function() {
                                    if (function(e) {
                                            var t = e.lastRenderedStartIndex,
                                                n = e.lastRenderedStopIndex,
                                                r = e.startIndex,
                                                i = e.stopIndex;
                                            return !(r > n || i < t)
                                        }({
                                            lastRenderedStartIndex: t._lastRenderedStartIndex,
                                            lastRenderedStopIndex: t._lastRenderedStopIndex,
                                            startIndex: i,
                                            stopIndex: o
                                        })) {
                                        if (null == t._listRef) return;
                                        "function" === typeof t._listRef.resetAfterIndex ? t._listRef.resetAfterIndex(i, !0) : ("function" === typeof t._listRef._getItemStyleCache && t._listRef._getItemStyleCache(-1), t._listRef.forceUpdate())
                                    }
                                }))
                            }, i = 0; i < e.length; i += 2) r(i)
                    }
                }]), t
            }(r.PureComponent)
        }
    }
]);