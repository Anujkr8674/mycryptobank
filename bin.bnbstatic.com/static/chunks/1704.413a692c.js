"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1704], {
        o9gl: (e, t, n) => {
            n.d(t, {
                B: () => I,
                c: () => N
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("1YyT"),
                o = n.n(a),
                l = n("O3zE"),
                c = n("g77m"),
                d = n.n(c),
                x = n("Go92"),
                u = n.n(x),
                p = n("VLTf"),
                m = n.n(p),
                h = n("2IQ4"),
                f = n("xqbL"),
                v = n.n(f),
                y = n("KRuP"),
                g = n("pdXn"),
                b = n("tC4u");
            const j = {
                    fontSize: 0,
                    textAlign: "center",
                    padding: "8px 6px",
                    color: "t.third"
                },
                w = (0, s.memo)((({
                    children: e,
                    ...t
                }) => (0, i.jsx)(h.A, {
                    sx: j,
                    className: "emptyLine",
                    ...t,
                    children: e
                })));
            var S = n("afSR");
            l.Y1.displayName = "FixedSizeList";
            const N = (0, s.memo)((({
                    className: e,
                    children: t,
                    ...n
                }) => {
                    const s = v()("list-item-entity", e);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: s,
                            ...n,
                            children: t
                        }), (0, i.jsx)(y.mL, {
                            styles: {
                                ".list-item-entity": {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: " space-between",
                                    flex: 1
                                }
                            }
                        })]
                    })
                })),
                A = () => {},
                [T, k] = [38, 40];
            let C = class extends r().Component {
                componentDidMount() {
                    this.props.openShotCut && (this.eventAttached = !0, document.addEventListener("keydown", this.handleKeyDown), this.keyScroll())
                }
                componentDidUpdate() {
                    this.props.openShotCut && (this.eventAttached || document.addEventListener("keydown", this.handleKeyDown), this.keyScroll())
                }
                componentWillUnmount() {
                    this.eventAttached && (this.eventAttached = !1, document.removeEventListener("keydown", this.handleKeyDown)), this.clearTimer()
                }
                shouldComponentUpdate(e, t) {
                    if (this.props.openShotCut && t.activeId !== this.state.activeId) return !0;
                    const n = m()(e.dataSource, this.props.dataSource);
                    return n ? e.loading !== this.props.loading || e.itemHeight !== this.props.itemHeight || e.listSx !== this.props.listSx : !(n || !this.props.changeOnDataSourceUpdate) || (!t.isScrolling || !this.state.isScrolling) && t.isHover === this.state.isHover
                }
                handleMouseEnter() {
                    this.setState({
                        isHover: !0
                    })
                }
                handleMouseLeave() {
                    this.setState({
                        isHover: !1
                    })
                }
                handleScrollTop() {
                    this.outerListRef ? .current && this.outerListRef.current.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: "auto"
                    })
                }
                handleScroll() {
                    this.state.isHover && (this.setState({
                        isScrolling: !0
                    }), this.clearTimer(), this.timer = setTimeout((() => {
                        this.setState({
                            isScrolling: !1
                        })
                    }), 1e3))
                }
                clearTimer() {
                    this.timer && (clearTimeout(this.timer), this.timer = null)
                }
                handleKeyDown(e) {
                    const {
                        keyCode: t,
                        metaKey: n,
                        ctrlKey: i
                    } = e, {
                        itemHeight: s,
                        dataSource: r,
                        openShotCut: a,
                        onKeyDownCallback: o,
                        tradeType: l
                    } = this.props, {
                        activeId: c
                    } = this.state;
                    if (a && (13 === t || t === T || t === k)) {
                        e && e.preventDefault(), e.stopPropagation();
                        const a = this.getMaxHeight();
                        if (this.keys = {
                                [T]: Math.max(this.minHeight, this.state.scrollOffset - s),
                                [k]: Math.min(this.state.scrollOffset + s, a - s)
                            }, this.keys[t] && this.scrollItem(this.keys[t]), 13 === t) {
                            const e = r.filter(((e, t) => t === c)),
                                t = e.length ? e[0] : {};
                            u()(o) && o({
                                data: t,
                                metaKey: n,
                                ctrlKey: i,
                                tradeType: l
                            })
                        }
                    }
                }
                getMaxHeight() {
                    return this.innerListRef.current && (this.maxHeight = this.innerListRef.current.style.height.replace("px", "") || this.props.itemHeight), Number(this.maxHeight)
                }
                keyScroll() {
                    this.innerListRef.current && (this.maxHeight = this.innerListRef.current.style.height.replace("px", "") || this.props.itemHeight), this.outerListRef.current && this.outerListRef.current.scrollTo({
                        left: 0,
                        top: this.state.scrollOffset,
                        behavior: "auto"
                    })
                }
                scrollItem(e) {
                    this.setState({
                        activeId: Math.floor(e / this.props.itemHeight),
                        scrollOffset: e
                    })
                }
                render() {
                    const {
                        variant: e,
                        sx: t,
                        tx: n,
                        scrollPerf: s = !0,
                        className: r
                    } = this.props;
                    return (0, i.jsx)(h.A, {
                        onScroll: s ? this.handleScroll : A,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        __css: {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1
                        },
                        className: `list-container ${r||""}`,
                        variant: e,
                        sx: t,
                        tx: n,
                        children: this.renderChild()
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        isScrolling: !1,
                        isHover: !1,
                        activeId: 0,
                        scrollOffset: 0
                    }, this.renderItem = ({
                        index: e,
                        style: t
                    }) => {
                        const {
                            dataSource: n,
                            itemElement: s,
                            openShotCut: r
                        } = this.props, {
                            activeId: a
                        } = this.state, o = !!r && a === e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                style: t,
                                className: "list-item-container",
                                children: (0, i.jsx)(s, { ...n[e],
                                    activeId: a,
                                    active: o,
                                    index: e
                                })
                            }), (0, i.jsx)(y.mL, {
                                styles: {
                                    ".list-item-container": {
                                        display: "flex",
                                        alignItems: "center",
                                        overflowX: "hidden"
                                    }
                                }
                            })]
                        })
                    }, this.renderChild = () => {
                        const {
                            dataSource: e = [],
                            itemKey: t,
                            itemHeight: n,
                            loading: s = !1,
                            loadWithContent: r = !1,
                            direction: a,
                            listSx: o = {},
                            emptyText: c,
                            emptyChildren: d,
                            emptyState: x
                        } = this.props, {
                            isScrolling: u
                        } = this.state, p = !s && 0 === e.length;
                        this.ListStyle = {
                            direction: a,
                            ...o
                        };
                        const m = (0, i.jsx)(g.Ay, {
                            className: "list-auto-sizer",
                            children: ({
                                width: s,
                                height: r
                            }) => (0, i.jsx)(l.Y1, {
                                style: {
                                    direction: a,
                                    ...o
                                },
                                className: "fixed-size-list",
                                width: s,
                                height: r,
                                itemCount: e.length,
                                itemSize: n,
                                itemData: e,
                                itemKey: t,
                                overscanCount: u ? 10 : 1,
                                outerRef: this.outerListRef,
                                innerRef: this.innerListRef,
                                useIsScrolling: !0,
                                children: this.renderItem
                            })
                        });
                        return s ? r ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(b.A, {
                                fullScreen: !0,
                                inner: !0
                            }), m]
                        }) : (0, i.jsx)(b.A, {
                            fullScreen: !0,
                            inner: !0
                        }) : p ? x || (0, i.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexGrow: 1
                            },
                            children: d || (c ? (0, i.jsx)(w, {
                                children: c
                            }) : null)
                        }) : m
                    }, this.handleScroll = d()(this.handleScroll.bind(this), 200), this.handleMouseEnter = this.handleMouseEnter.bind(this), this.handleMouseLeave = this.handleMouseLeave.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.keyScroll = this.keyScroll.bind(this), this.outerListRef = r().createRef(null), this.innerListRef = r().createRef(null), this.maxHeight = e.itemHeight, this.minHeight = .1, this.eventAttached = !1, this.keys = {
                        [T]: 0,
                        [k]: 0
                    }, this.handleScrollTop = d()(this.handleScrollTop.bind(this), 200), this.props.onRef && this.props.onRef(this)
                }
            };
            C.propTypes = {
                dataSource: o().array.isRequired,
                itemElement: o().elementType.isRequired,
                itemHeight: o().number.isRequired,
                itemKey: o().func,
                sx: o().object,
                tx: o().string,
                variant: o().string,
                loading: o().bool,
                openShotCut: o().bool,
                onKeyDownCallback: o().func,
                emptyText: o().string,
                tradeType: o().string,
                changeOnDataSourceUpdate: o().bool,
                className: o().string
            };
            const I = (e => {
                const t = e.displayName || e.name || "Component",
                    n = t => {
                        const n = (0, S.j)();
                        return (0, i.jsx)(e, { ...t,
                            direction: n
                        })
                    };
                return n.displayName = `WithDirection(${t})`, n
            })(C)
        },
        tC4u: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("hTvQ"),
                o = n.n(a),
                l = n("d6PB");
            const c = {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                },
                d = (0, s.memo)((function({
                    show: e = !0,
                    fullScreen: t = !1,
                    inner: n,
                    children: s,
                    zIndex: a
                }) {
                    if (!e) return s || null;
                    const o = (0, i.jsx)(l.A, {
                        sx: {
                            zIndex: a || "100",
                            ...c
                        }
                    });
                    return t ? (0, i.jsxs)(r().Fragment, {
                        children: [s, (0, i.jsx)("div", {
                            style: {
                                position: n ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",
                                zIndex: 2e3
                            },
                            children: o
                        })]
                    }) : (0, i.jsxs)(r().Fragment, {
                        children: [s, o]
                    })
                }));
            let x;
            d.show = ({
                fullScreen: e = !1
            } = {}) => {
                x || (x = document.createElement("div"), document.body.appendChild(x)), o().render((0, i.jsx)(d, {
                    fullScreen: e
                }), x)
            }, d.hide = () => {
                x && o().render((0, i.jsx)(d, {
                    show: !1
                }), x)
            };
            const u = d
        },
        pG94: (e, t, n) => {
            n.d(t, {
                A: () => p,
                O: () => u
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("2IQ4"),
                o = n("Vhyo"),
                l = n("8aEf"),
                c = n("eulm"),
                d = n("VJ/1");
            const x = (0, s.memo)((({
                    trees: e,
                    getCoin: t,
                    activeTab: n,
                    tooltipProps: s
                }) => {
                    const x = e.length > 3;
                    return (0, i.jsx)(a.A, {
                        sx: x ? d.hE : d.oA,
                        children: e.map((({
                            description: e,
                            sectionKey: a,
                            display: d
                        }) => {
                            const x = e ? l.Ay : r().Fragment,
                                u = {
                                    arrow: !0,
                                    placement: "right",
                                    tip: e,
                                    container: () => {},
                                    sx: {
                                        display: "initial"
                                    },
                                    ...s
                                };
                            return (0, i.jsx)(x, { ...e ? u : {},
                                children: (0, i.jsx)("div", {
                                    className: "tabBtn",
                                    children: (0, i.jsx)(c.IN, {
                                        onClick: () => t({
                                            display: d,
                                            sectionKey: a
                                        }),
                                        active: a === n,
                                        children: (0, i.jsx)(o.A, {
                                            className: "tabText",
                                            children: d
                                        })
                                    }, a)
                                })
                            }, a)
                        }))
                    })
                })),
                u = (0, s.memo)((({
                    trees: e,
                    getCoin: t,
                    activeTab: n,
                    tooltipProps: s
                }) => (0, i.jsx)(a.A, {
                    sx: d.Dl,
                    children: e.map((({
                        description: e,
                        sectionKey: a,
                        display: o
                    }) => {
                        const d = e ? l.Ay : r().Fragment,
                            x = {
                                arrow: !0,
                                placement: "right",
                                tip: e,
                                container: () => {},
                                sx: {
                                    display: "initial"
                                },
                                ...s
                            };
                        return (0, i.jsx)(d, { ...e ? x : {},
                            children: (0, i.jsx)(c.Ez, {
                                active: a === n,
                                onClick: () => t({
                                    display: o,
                                    sectionKey: a
                                }),
                                className: "tabBtn",
                                children: o
                            })
                        }, a)
                    }))
                }))),
                p = x
        },
        eulm: (e, t, n) => {
            n.d(t, {
                Ay: () => d,
                Ez: () => l,
                IN: () => c
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("2IQ4"),
                o = n("VJ/1");
            const l = (0, s.forwardRef)((({
                    active: e,
                    ...t
                }, n) => {
                    const s = e ? { ...o.XR,
                        ...o.q7
                    } : o.XR;
                    return (0, i.jsx)(a.A, {
                        sx: s,
                        ...t,
                        ref: n
                    })
                })),
                c = (0, s.forwardRef)((({
                    active: e,
                    ...t
                }, n) => {
                    const s = e ? { ...o.XR,
                        ...o.q7
                    } : o.XR;
                    return (0, i.jsx)(a.A, {
                        sx: s,
                        ...t,
                        ref: n
                    })
                })),
                d = r().memo(l)
        },
        "4k1r": (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("8aEf"),
                o = n("2IQ4"),
                l = n("VJ/1"),
                c = n("eulm"),
                d = n("5XRN"),
                x = n("yZa/"),
                u = n("pG94");
            const p = ({
                    className: e,
                    trees: t,
                    display: n,
                    sectionKey: r,
                    defaultDisplay: a,
                    defaultSectionKey: o,
                    activeTab: l,
                    switchTab: p,
                    style: m
                }) => {
                    const h = (0, s.useCallback)((e => {
                            p(e)
                        }), [p]),
                        f = (0, s.useMemo)((() => {
                            const e = t.filter((e => e.sectionKey === r));
                            return e.length ? e[0].display : a
                        }), [t, n, a]),
                        v = (0, s.useMemo)((() => t.filter((e => e.sectionKey === r)).length ? r : o), [t, r, o]);
                    return (0, i.jsx)(d.Ay, {
                        enablePortal: !0,
                        trigger: "hover",
                        overlay: (0, i.jsx)(u.A, {
                            trees: t,
                            getCoin: h,
                            activeTab: l
                        }),
                        style: m,
                        children: (0, i.jsx)(c.Ay, {
                            "data-testid": `${l}Type`,
                            active: l === v,
                            className: e,
                            children: (0, i.jsxs)("div", {
                                className: "btnChildren",
                                children: [(0, i.jsx)("span", {
                                    children: f
                                }), (0, i.jsx)(x.A, {
                                    size: 16
                                })]
                            })
                        })
                    })
                },
                m = (0, s.memo)(p),
                h = ({
                    list: e,
                    activeTab: t,
                    switchTab: n,
                    tabsStyle: d
                }) => {
                    const [x, u] = (0, s.useState)(""), [p, h] = (0, s.useState)(t || ""), f = e => {
                        u(e.display), h(e.sectionKey), n(e.sectionKey)
                    };
                    return (0, i.jsx)(o.A, {
                        sx: l.iF,
                        className: "tabBoxWrap",
                        children: e.map((({
                            sectionKey: e,
                            display: s,
                            description: o,
                            trees: l
                        }) => {
                            const v = o ? a.Ay : r().Fragment,
                                y = {
                                    arrow: !0,
                                    tip: o,
                                    placement: "top",
                                    container: () => {}
                                };
                            return (0, i.jsx)(v, { ...o ? y : {},
                                children: l ? .length ? (0, i.jsx)(m, {
                                    className: "tabBoxBtn",
                                    trees: l,
                                    display: x,
                                    sectionKey: p,
                                    defaultDisplay: s,
                                    defaultSectionKey: e,
                                    activeTab: t,
                                    switchTab: f,
                                    style: d
                                }) : (0, i.jsx)(c.Ay, {
                                    active: e === t,
                                    onClick: () => {
                                        u(""), h(""), n(e)
                                    },
                                    style: d,
                                    className: "tabBtn " + (e === t ? "activeBtn" : ""),
                                    children: s
                                })
                            }, e)
                        }))
                    })
                },
                f = (0, s.memo)(h)
        },
        "VJ/1": (e, t, n) => {
            n.d(t, {
                Dl: () => s,
                XR: () => l,
                hE: () => a,
                iF: () => i,
                o9: () => o,
                oA: () => r,
                q7: () => c
            });
            const i = {
                    display: "flex",
                    flexWrap: "wrap",
                    fontWeight: "500"
                },
                s = {
                    bg: "popupBg",
                    color: "t.primary",
                    borderRadius: "4px",
                    boxShadow: "elevation2",
                    maxHeight: "320px",
                    overflow: "auto",
                    ".tabBtn": {
                        textAlign: "left",
                        padding: "8px 16px",
                        maxWidth: "227px",
                        "&:hover": {
                            bg: "bg3"
                        }
                    },
                    ".tabText": {
                        fontSize: "14px",
                        maxWidth: "227px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }
                },
                r = {
                    bg: "popupBg",
                    color: "t.primary",
                    borderRadius: "4px",
                    boxShadow: "elevation2",
                    ".tabBtn": {
                        textAlign: "left",
                        padding: "8px 16px",
                        maxWidth: "227px",
                        "&:hover": {
                            bg: "bg3"
                        }
                    },
                    ".tabText": {
                        fontSize: "14px",
                        maxWidth: "227px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }
                },
                a = {
                    display: "flex",
                    width: "259px",
                    flexWrap: "wrap",
                    bg: "popupBg",
                    color: "t.primary",
                    padding: "10px 16px 0 16px",
                    borderRadius: "4px",
                    boxShadow: "elevation2",
                    ".tabBtn": {
                        textAlign: "center",
                        minWidth: "48px",
                        padding: "0 4px",
                        mb: "16px",
                        maxWidth: "227px"
                    },
                    ".tabText": {
                        fontSize: "14px",
                        maxWidth: "227px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }
                },
                o = {
                    width: "100%",
                    height: "20px",
                    "& .spread-wrap": {
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    "& .collapse-wrap": {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        px: "4px",
                        borderRadius: "2px",
                        ":hover": {
                            bg: "bg3"
                        },
                        "&.active": {
                            bg: "line",
                            ".collapse-tab": {
                                fontWeight: 400
                            }
                        },
                        ".collapse-tab": {
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        }
                    }
                },
                l = {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    color: "t.third",
                    cursor: "pointer",
                    fontSize: "12px",
                    lineHeight: "16px",
                    px: "4px",
                    borderRadius: "2px",
                    height: "20px",
                    "&:hover": {
                        bg: "bg3"
                    },
                    "& .btnChildren": {
                        display: "flex",
                        alignItems: "center"
                    }
                },
                c = {
                    color: "t.primary",
                    bg: "line"
                }
        },
        ubRa: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var i = n("mXdx"),
                s = n("2IQ4"),
                r = n("unRV"),
                a = n("rEu4"),
                o = n("DTvD");
            const l = {
                    position: "absolute",
                    left: "0px",
                    height: "100%",
                    cursor: "pointer",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "icons.close"
                },
                c = {
                    position: "absolute",
                    cursor: "pointer",
                    width: "24px",
                    right: "0px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: "icons.close"
                };
            var d = n("Bl3H");
            const x = ({
                    children: e,
                    speed: t,
                    zIndex: n,
                    arrowSx: x,
                    scrollLeft: u,
                    ...p
                }) => {
                    const m = (0, o.useRef)(null),
                        [h, f] = (0, o.useState)(!1),
                        [v, y] = (0, o.useState)(!1),
                        g = m.current ? .clientWidth,
                        b = m.current ? .scrollWidth,
                        j = (0, d.r)((() => {
                            const {
                                scrollWidth: e = 0,
                                clientWidth: t = 0,
                                scrollLeft: n = 0
                            } = m.current || {}, i = e > Math.ceil(t + n);
                            f(i), y(Boolean(n))
                        }), [f, y, m.current], 1e3);
                    (0, o.useEffect)((function() {
                        j()
                    }), [j]);
                    const w = (0, o.useMemo)((() => () => ({
                        position: "relative",
                        display: "flex",
                        ".leftArrow": { ...l,
                            background: "linear-gradient(90deg, var(--color-BasicBg) 0%,var(--color-BasicBg) calc(24px / 2),transparent 100%)",
                            svg: {
                                "&:hover": {
                                    color: "var(--color-PrimaryText)"
                                }
                            }
                        },
                        ".rightArrow": { ...c,
                            background: "linear-gradient(270deg, var(--color-BasicBg) 0%,var(--color-BasicBg) calc(24px / 2),transparent 100%)",
                            svg: {
                                "&:hover": {
                                    color: "var(--color-PrimaryText)"
                                }
                            }
                        },
                        ".container": {
                            whiteSpace: "nowrap",
                            overflow: "auto",
                            "::-webkit-scrollbar": {
                                display: "none"
                            }
                        }
                    })), []);
                    (0, o.useEffect)((function() {
                        if ("ResizeObserver" in window) {
                            const e = new ResizeObserver(j);
                            return m.current && e.observe(m.current), () => e.disconnect()
                        }
                        return window.addEventListener("resize", j, {
                            capture: !1,
                            passive: !0
                        }), () => {
                            window.removeEventListener("resize", j)
                        }
                    }), [j, m.current]);
                    const S = (0, o.useCallback)((() => {
                            "number" === typeof m ? .current ? .scrollLeft && (m.current.scrollLeft -= t || 30, m.current.scrollLeft < 0 && (m.current.scrollLeft = 0), j())
                        }), [j, t]),
                        N = (0, o.useCallback)((() => {
                            "number" === typeof m ? .current ? .scrollLeft && (m.current.scrollLeft += t || 30, j())
                        }), [j, t]);
                    return (0, o.useEffect)((() => {
                        u && "number" === typeof m ? .current ? .scrollLeft && (m.current.scrollLeft = u, j())
                    }), [u, m.current]), (0, o.useEffect)((() => {
                        j()
                    }), [g, b]), (0, i.jsxs)(s.A, {
                        sx: w,
                        ...p,
                        children: [v && (0, i.jsx)("div", {
                            onClick: S,
                            className: "leftArrow",
                            style: { ...x,
                                zIndex: n
                            },
                            children: (0, i.jsx)(r.A, {
                                style: {
                                    width: "16px",
                                    color: "var(--color-IconNormal)"
                                }
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            ref: m,
                            onScroll: j,
                            children: e
                        }), h && (0, i.jsx)("div", {
                            className: "rightArrow",
                            onClick: N,
                            style: { ...x,
                                zIndex: n
                            },
                            children: (0, i.jsx)(a.A, {
                                style: {
                                    width: "16px",
                                    color: "var(--color-IconNormal)"
                                }
                            })
                        })]
                    })
                },
                u = (0, o.memo)(x)
        },
        afSR: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            var i = n("ZvZy"),
                s = n("+YAT");
            const r = () => {
                const e = (0, s.uU)();
                return (0, i.y)(e)
            }
        },
        "+YAT": (e, t, n) => {
            n.d(t, {
                BJ: () => c,
                Bl: () => a,
                G0: () => l,
                po: () => r,
                uU: () => o
            });
            var i = n("XgQ6"),
                s = n("T0Sc");
            const r = () => {
                    const {
                        i18n: e
                    } = (0, s.o)();
                    return e.language || "undefined" !== typeof window && window.localStorage.i18nextLng || "en"
                },
                a = () => {
                    const {
                        i18n: e
                    } = (0, s.o)();
                    return e.language || "undefined" !== typeof window && window.localStorage.i18nextLng || "en"
                },
                o = () => {
                    const e = r();
                    return (0, i.WX)(e)
                },
                l = () => {
                    const e = r();
                    return (0, i.o)(e)
                },
                c = () => "zh" === o()
        },
        Bl3H: (e, t, n) => {
            n.d(t, {
                r: () => a
            });
            var i = n("DTvD"),
                s = n("g77m"),
                r = n.n(s);
            const a = (e, ...t) => {
                const n = (0, i.useRef)((() => {}));
                return n.current = e, (0, i.useCallback)(r()((function(...e) {
                    return n.current.apply(this, e)
                }), ...t), [])
            }
        },
        l5KL: (e, t, n) => {
            n.d(t, {
                A: () => p
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n("Hfaf"),
                a = n("s9Ia"),
                o = n("OmPJ");
            const l = ["default", "descend", "ascend"],
                c = (0, s.memo)((({
                    sortDirections: e
                }) => null === e ? (0, i.jsx)(r.A, {
                    className: "flex-none text-IconNormal pointer-events-none text-[16px] ml-[-2px]"
                }) : "descend" === e ? (0, i.jsx)(a.A, {
                    className: "flex-none text-PrimaryText pointer-events-none text-[16px] ml-[-2px]"
                }) : "ascend" === e ? (0, i.jsx)(o.A, {
                    className: "flex-none text-PrimaryText pointer-events-none text-[16px] ml-[-2px]"
                }) : (0, i.jsx)(r.A, {
                    className: "flex-none text-IconNormal pointer-events-none text-[16px] ml-[-2px]"
                }))),
                d = ({
                    value: e,
                    label: t,
                    order: n,
                    getOrder: r,
                    style: a,
                    showSort: o,
                    postRender: d,
                    renderProps: x
                }) => {
                    const u = (0, s.useCallback)((t => () => {
                        let n = l.indexOf(t);
                        n < 2 ? n++ : n = 0, r({
                            [e]: l[n]
                        })
                    }), [r, e]);
                    return (0, i.jsxs)("div", {
                        className: "flex items-center max-w-full",
                        style: a,
                        children: [o ? (0, i.jsxs)("div", {
                            onClick: u(n),
                            className: "flex items-center cursor-pointer overflow-hidden",
                            children: [(0, i.jsx)("div", {
                                className: "overflow-hidden whitespace-nowrap ellipse text-TertiaryText text-[12px] truncate",
                                children: t
                            }), (0, i.jsx)(c, {
                                sortDirections: n
                            })]
                        }) : (0, i.jsx)("div", {
                            className: "flex cursor-pointer overflow-hidden",
                            children: (0, i.jsx)("div", {
                                className: "overflow-hidden whitespace-nowrap ellipse text-TertiaryText text-[12px] truncate",
                                children: t
                            })
                        }), x, d ? .()]
                    })
                },
                x = (0, s.memo)(d),
                u = ({
                    group: e,
                    getGroupOrderKey: t,
                    showSort: n,
                    active: s,
                    renderProps: r
                }) => {
                    const a = Object.keys(s).length && Object.keys(s)[0],
                        o = Object.values(s).length ? Object.values(s)[0] : "default",
                        l = e => {
                            t(e)
                        };
                    return (0, i.jsx)("div", {
                        className: "flex text-TertiaryText items-start",
                        children: e.map((({
                            key: t,
                            label: s = "",
                            postRender: c,
                            children: d,
                            ...u
                        }, p) => d ? (0, i.jsx)("div", {
                            className: "flex flex-wrap pr-[12px]",
                            style: u,
                            children: d.map((({
                                key: t,
                                label: s
                            }, u) => (0, i.jsxs)("div", {
                                className: "flex items-center max-w-full overflow-hidden truncate",
                                children: [u > 0 && (0, i.jsx)("div", {
                                    className: "mr-[2px]",
                                    children: "/"
                                }), (0, i.jsx)(x, {
                                    value: t,
                                    label: s,
                                    getOrder: l,
                                    showSort: n,
                                    order: a === t ? o : "default",
                                    renderProps: e.length - 1 === p && d.length - 1 === u ? r : "",
                                    postRender: c
                                })]
                            }, t)))
                        }, t) : (0, i.jsx)(x, {
                            value: t,
                            label: s,
                            getOrder: l,
                            showSort: n,
                            style: u,
                            order: a === t ? o : "default",
                            renderProps: e.length - 1 === p ? r : "",
                            postRender: c
                        }, t)))
                    })
                },
                p = (0, s.memo)(u)
        },
        xZXB: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n("mXdx"),
                s = (n("DTvD"), n("pdXn"));
            const r = function(e) {
                var t = e.width,
                    n = e.height,
                    r = e.extend,
                    a = e.children;
                return r ? a({
                    width: t,
                    height: n
                }) : (0, i.jsx)(s.Ay, {
                    children: a
                })
            }
        },
        "3sXV": (e, t, n) => {
            n.d(t, {
                p: () => M,
                A: () => D
            });
            var i = n("hrAD"),
                s = n("qoEP"),
                r = n("KrVi"),
                a = n("d12p"),
                o = n("mXdx"),
                l = n("x76r"),
                c = n("zHUU"),
                d = n("GIr8"),
                x = n("bqtE"),
                u = n("ZvZy"),
                p = n("DTvD"),
                m = n.n(p),
                h = n("tC4u"),
                f = n("kNHB"),
                v = n("Olbk"),
                y = n("xZXB"),
                g = n("Qhol"),
                b = n("Bkzn"),
                j = n("2/kH"),
                w = n("M9gu"),
                S = n("O3zE"),
                N = n("+Uhi"),
                A = n("2IQ4"),
                T = {
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
                k = function(e) {
                    return (0, o.jsx)(A.A, (0, i._)({
                        sx: T,
                        className: "grid-row-wrap",
                        __css: {
                            overflow: "hidden",
                            boxSizing: "border-box",
                            borderBottom: "1px solid"
                        }
                    }, e))
                },
                C = function(e) {
                    return (0, o.jsx)(A.A, (0, i._)({
                        sx: T,
                        __css: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "8px 0",
                            padding: "0 16px"
                        }
                    }, e))
                },
                I = function(e) {
                    (0, j._)(n, e);
                    var t = (0, w._)(n);

                    function n(e) {
                        var i;
                        return (0, b._)(this, n), (i = t.call(this, e)).displayName = "ListGrid", i.listRef = m().createRef(), i.getItemSize = function(e) {
                            var t = i.props.listGridConfig;
                            return void 0 === t.expandHeight ? t.collapseHeight : e === i.state.expandItemIndex ? t.expandHeight : t.collapseHeight
                        }, i.isItemLoaded = function(e) {
                            return e < i.props.data.length
                        }, i._row = function(e) {
                            var t = e.index,
                                n = e.style,
                                s = i.props,
                                r = s.columns,
                                a = s.data,
                                l = s.loadingPlaceholder;
                            if (!i.isItemLoaded(t)) return (0, o.jsx)(A.A, {
                                style: n,
                                children: l
                            });
                            var c = a[t];
                            return (0, o.jsx)(k, {
                                style: n,
                                children: r.map((function(e) {
                                    return (0, o.jsx)(C, {
                                        children: (0, o.jsx)(A.A, {
                                            sx: T,
                                            flex: 1,
                                            height: "100%",
                                            children: e.render(c[e.dataIndex], c, {
                                                collpase: function(e) {
                                                    return i.handleExpandAndCollapse(e || t)
                                                },
                                                isExpand: i.state.expandItemIndex === t,
                                                index: t,
                                                expandData: i.state.expandData,
                                                setExpandData: function(e) {
                                                    return i.setState({
                                                        expandData: e
                                                    })
                                                }
                                            })
                                        })
                                    }, t)
                                }))
                            })
                        }, i.state = {
                            expandItemIndex: -1,
                            expandData: null
                        }, i
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
                            c = void 0 === l ? function() {
                                return Promise.resolve()
                            } : l,
                            d = t.listGridConfig,
                            x = t.threshold,
                            u = void 0 === x ? 15 : x,
                            p = (0, r._)(t, ["data", "hasMore", "loadMore", "listGridConfig", "threshold"]),
                            m = a ? n.length + 1 : n.length;
                        return (0, o.jsx)(N.A, {
                            threshold: u,
                            isItemLoaded: this.isItemLoaded,
                            itemCount: m,
                            loadMoreItems: c,
                            children: function(t) {
                                var n = t.onItemsRendered,
                                    r = t.ref;
                                return (0, o.jsx)(S._m, (0, s._)((0, i._)({}, p), {
                                    height: d.height,
                                    itemCount: m,
                                    itemSize: e.getItemSize,
                                    onItemsRendered: n,
                                    ref: function(t) {
                                        r(t), e.listRef = {
                                            current: t
                                        }
                                    },
                                    width: d.width,
                                    children: e._row
                                }))
                            }
                        })
                    }, n
                }(p.PureComponent),
                P = {
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    color: "t.disabled",
                    fontSize: "12px"
                },
                M = function(e) {
                    var t = e.children,
                        n = e.i18nKey,
                        a = void 0 === n ? "nodata" : n,
                        l = e.i18nDefault,
                        c = void 0 === l ? "No Data" : l,
                        x = (0, r._)(e, ["children", "i18nKey", "i18nDefault"]),
                        u = (0, g.ok2)().getI18n;
                    return (0, o.jsxs)(d.A, {
                        sx: P,
                        children: [(0, o.jsx)(f.A, {
                            className: "!w-[64px] !h-[64px] mt-[48px] md:mt-[108px]"
                        }), (0, o.jsx)(v.Ay, (0, s._)((0, i._)({
                            className: "text-SecondaryText text-[14px] font-[500] mt-[10px]"
                        }, x), {
                            children: t || u(a, {
                                defaultValue: c
                            })
                        }))]
                    })
                },
                R = function(e) {
                    var t = e.loading,
                        n = void 0 !== t && t,
                        d = e.listGridProps,
                        m = void 0 === d ? {} : d,
                        f = e.header,
                        g = void 0 === f ? null : f,
                        b = e.getListGridConfig,
                        j = void 0 === b ? function(e) {
                            return e
                        } : b,
                        w = e.resetDeps,
                        S = void 0 === w ? [] : w,
                        N = e.emptyNode,
                        A = void 0 === N ? (0, o.jsx)(M, {}) : N,
                        T = e.autoSizerProps,
                        k = e.useExpandList,
                        C = void 0 !== k && k,
                        P = (0, r._)(e, ["loading", "listGridProps", "header", "getListGridConfig", "resetDeps", "emptyNode", "autoSizerProps", "useExpandList"]),
                        R = (0, p.useRef)(null),
                        D = m || {},
                        F = D.listGridConfig,
                        L = D.renderHeaderCell,
                        _ = D.data,
                        B = D.style,
                        E = (0, r._)(D, ["listGridConfig", "renderHeaderCell", "data", "style"]);
                    (0, l.A)((function() {
                        if (R && R.current) {
                            var e = R.current.listRef;
                            if (e && e.current) {
                                var t = e.current,
                                    n = e.current.state,
                                    i = Math.floor(n.scrollOffset / 32);
                                t.resetAfterIndex(i, !0)
                            }
                        }
                    }), 1e3 / 60, (0, a._)(S));
                    var O = (0, c.Bl)(),
                        H = (0, u.y)(O),
                        z = g ? [{
                            header: !0
                        }].concat(_) : _,
                        V = !n && !_.length,
                        W = C ? I : x.A;
                    return (0, o.jsxs)(v.Ay, (0, s._)((0, i._)({
                        style: {
                            position: "relative",
                            flex: 1
                        }
                    }, P), {
                        children: [(0, o.jsx)(h.A, {
                            fullScreen: !0,
                            inner: !0,
                            show: n
                        }), (0, o.jsx)(y.A, (0, s._)((0, i._)({}, T), {
                            children: function(e) {
                                var t = e.height,
                                    n = e.width;
                                return V ? (0, o.jsxs)(v.Ay, {
                                    style: {
                                        height: t,
                                        width: n,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: [g, A]
                                }) : (0, o.jsx)(W, (0, s._)((0, i._)({
                                    threshold: 5,
                                    style: (0, s._)((0, i._)({
                                        direction: H
                                    }, B), {
                                        overflow: "hidden auto"
                                    })
                                }, E), {
                                    className: "list-grid",
                                    ref: R,
                                    data: z,
                                    renderHeaderCell: L,
                                    listGridConfig: j((0, s._)((0, i._)({
                                        collapseHeight: 80
                                    }, F), {
                                        height: Math.max(t - 2, 0),
                                        width: n
                                    }))
                                }))
                            }
                        }))]
                    }))
                };
            const D = m().memo(R)
        },
        zamu: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => pn
            });
            var i = n("mguP"),
                s = n("mXdx"),
                r = n("DTvD"),
                a = n.n(r),
                o = n("MD8j"),
                l = n("Ov3/"),
                c = n("WT+B"),
                d = n("bQ69"),
                x = n("Qhol"),
                u = n("YRJq"),
                p = n("92Cd"),
                m = n("nxXE"),
                h = n("C7Nc"),
                f = n("l5KL");
            const v = (0, r.memo)((function(e) {
                var t = e.group,
                    n = e.active,
                    i = e.getGroupOrderKey,
                    r = e.showSort,
                    a = e.renderProps;
                return (0, s.jsx)("div", {
                    style: {
                        lineHeight: "16px"
                    },
                    children: (0, s.jsx)(f.A, {
                        group: t,
                        active: n,
                        getGroupOrderKey: i,
                        showSort: r,
                        renderProps: a
                    })
                })
            }));
            var y = n("GJ+9"),
                g = n("Djui"),
                b = n("tM9B"),
                j = n("hrAD"),
                w = n("qoEP"),
                S = n("KrVi"),
                N = n("tC4u"),
                A = n("u/9F"),
                T = n("Olbk"),
                k = function(e) {
                    var t = e.loading,
                        n = e.error,
                        i = e.onRefresh,
                        r = e.children,
                        a = (0, S._)(e, ["loading", "error", "onRefresh", "children"]),
                        o = {
                            inner: !0,
                            show: !!t
                        };
                    return (0, s.jsxs)(T.Ay, (0, w._)((0, j._)({}, a), {
                        children: [(0, s.jsx)(N.A, (0, j._)({}, o)), (0, s.jsx)(A.A, {
                            show: !t && !!n,
                            onRefresh: i
                        }), r]
                    }))
                };
            const C = a().memo(k);
            var I = n("Ra87"),
                P = n("tgKj"),
                M = function(e) {
                    var t = e.unExpandChildren,
                        n = e.expandChildren,
                        i = e.expand,
                        r = e.toggleExpand;
                    return (0, s.jsxs)(T.Ay, {
                        className: "overflow-y-auto overflow-x-hidden",
                        children: [(0, s.jsx)(T.Ay, {
                            className: "mb-[8px] mt-[4px]",
                            style: {
                                display: "block",
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)",
                                flex: "none"
                            }
                        }), (0, s.jsxs)(T.Ay, {
                            children: [(0, s.jsxs)(P.A, {
                                className: "text-TertiaryText [&_div:first-of-type]:flex-1",
                                style: {
                                    position: "relative",
                                    zIndex: 1,
                                    marginLeft: "16px",
                                    fontSize: "14px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontWeight: 600,
                                    flexShrink: 0,
                                    flexGrow: 0
                                },
                                children: [a().cloneElement(t, {
                                    expand: i
                                }), (0, s.jsx)(P.A, {
                                    className: "text-TertiaryText hover:text-PrimaryText mb-[6px]",
                                    style: {
                                        transition: "all 0.3s",
                                        cursor: "pointer",
                                        transform: "rotate(".concat(i ? 0 : 180, "deg)")
                                    },
                                    onClick: function() {
                                        r(!i)
                                    },
                                    children: (0, s.jsx)(I.A, {
                                        size: 16
                                    })
                                })]
                            }), (0, s.jsx)(T.Ay, {
                                className: "mx-[16px]",
                                style: {
                                    position: "relative",
                                    transition: "height 0.3s"
                                },
                                children: i ? n : null
                            })]
                        })]
                    })
                };
            const R = a().memo(M);
            var D = n("d/69"),
                F = n("3TJ4"),
                L = function(e) {
                    return "number" != typeof e ? d.l2 : (0, b.ZV)(e, void 0, 3)
                },
                _ = function(e) {
                    return (0, s.jsx)(E, {
                        expand: e.expand,
                        coin: e.coin,
                        currentBaseAsset: e.currentBaseAsset,
                        toggleExpand: e.toggleExpand
                    })
                },
                B = function(e) {
                    var t = e.coin,
                        n = (0, D.ok)().getI18n,
                        i = (0, x.fbc)(t),
                        a = i.coinInfo,
                        o = i.err,
                        l = a || {},
                        c = l.marketCap,
                        u = l.circulatingSupply,
                        p = l.maxSupply,
                        m = l.totalSupply,
                        h = (0, x.HQg)(),
                        f = (0, x.I7v)(),
                        v = (0, r.useMemo)((function() {
                            var e = d.l2,
                                t = "";
                            if (h[f]) {
                                var n = h[f],
                                    i = n.rate,
                                    s = n.symbol;
                                e = i * c, t = s
                            }
                            return [t, e]
                        }), [h, f, c]),
                        g = v[0],
                        b = v[1],
                        j = [{
                            label: n("infoMarketCap", {
                                defaultValue: "Market Cap"
                            }),
                            value: "".concat(g).concat(L(b))
                        }, {
                            label: n("infoCircSupply", {
                                defaultValue: "Circulation Supply"
                            }),
                            value: L(u)
                        }, {
                            label: n("infoMaxSupply", {
                                defaultValue: "Max Supply"
                            }),
                            value: L(p)
                        }, {
                            label: n("infoTotalSupply", {
                                defaultValue: "Total Supply"
                            }),
                            value: L(m)
                        }];
                    return (0, s.jsxs)(C, {
                        error: o,
                        style: {
                            paddingTop: "4px",
                            paddingBottom: "10px",
                            position: "relative"
                        },
                        children: [j.map((function(e) {
                            return (0, s.jsxs)("div", {
                                className: "flex flex-wrap justify-between items-center text-PrimaryText my-[3px] leading-[18px] text-[12px]",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-TertiaryText",
                                    children: e.label
                                }), (0, s.jsx)(T.Ay, {
                                    className: "text-PrimaryText font-medium",
                                    children: e.value
                                })]
                            }, e.label)
                        })), (0, s.jsx)(y.A, {
                            href: "/my/user-support/feedback/entry",
                            target: "_blank",
                            style: {
                                fontSize: "12px",
                                textDecoration: "none",
                                fontWeight: "semibold"
                            },
                            className: "!text-TertiaryText block my-[3px] leading-[18px]",
                            children: n("submit-feedback")
                        }), (0, s.jsxs)(P.A, {
                            className: "text-TertiaryText flex-row items-start mt-[14px]",
                            children: [(0, s.jsx)(T.Ay, {
                                className: "mr-[4px] text-[14px]",
                                children: "*"
                            }), (0, s.jsx)(T.Ay, {
                                className: "text-TertiaryText text-[12px] flex-1 [&_a]:text-TextLink [&_a]:no-underline [&_a]:block [&_a']:font-medium",
                                dangerouslySetInnerHTML: {
                                    __html: n("risk-warning", {
                                        defaultValue: 'The data presented is for informational purposes only. It is provided by CoinMarketCap, and shown on an \u201cas is\u201d basis, without representation or warranty of any kind. <a target="_blank" href="{{url}}">General Risk Warning here></a>',
                                        url: "/risk-warning"
                                    }) || ""
                                }
                            })]
                        })]
                    })
                },
                E = function(e) {
                    var t = e.coin,
                        n = e.expand,
                        r = e.currentBaseAsset,
                        a = e.toggleExpand,
                        o = (0, x.qkd)(r),
                        l = o.status,
                        c = o.link,
                        d = (0, x.fbc)(t),
                        u = d.coinInfo,
                        p = d.err,
                        m = u || {},
                        h = m.url,
                        f = m.alias,
                        v = m.symbol,
                        b = m.rank,
                        j = (0, i._)((0, x.Grl)(), 1)[0];
                    return (0, s.jsx)(C, {
                        error: p,
                        className: "overflow-x-hidden",
                        style: {
                            position: "relative"
                        },
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-wrap justify-between items-center text-PrimaryText mb-[8px] text-[12px]",
                            style: {
                                height: n ? "100%" : "26px",
                                overflow: n ? "" : "hidden"
                            },
                            children: [(0, s.jsx)(g.A, {
                                variant: "avatar",
                                src: h,
                                alt: "",
                                size: "16px"
                            }), (0, s.jsxs)(P.A, {
                                className: "font-medium items-center flex-1",
                                style: {
                                    height: n ? "100%" : "26px",
                                    minWidth: "70px",
                                    flexWrap: "wrap"
                                },
                                children: [(0, s.jsx)(y.A, {
                                    href: c,
                                    target: "_blank",
                                    disabled: l,
                                    onClick: function() {
                                        (0, F.hy)({
                                            tradeType: j
                                        })
                                    },
                                    className: "".concat(n ? "!mx-[4px] !text-PrimaryText text-[12px]" : "!mx-[4px] !text-PrimaryText trd-text-ellipsis text-ellipsis whitespace-nowrap overflow-hidden text-[12px]"),
                                    style: {
                                        textDecoration: "none",
                                        fontWeight: "semibold"
                                    },
                                    children: v
                                }), (0, s.jsx)(T.Ay, {
                                    className: "text-TertiaryText text-[12px]",
                                    style: {
                                        fontWeight: "semibold",
                                        flex: 1,
                                        flexBasis: "25px"
                                    },
                                    children: f
                                }), (0, s.jsx)(T.Ay, {
                                    onClick: function() {
                                        a(!n)
                                    },
                                    className: "text-PrimaryText cursor-pointer",
                                    children: "No.".concat(b || "-")
                                })]
                            })]
                        })
                    })
                },
                O = function(e) {
                    var t = e.coin,
                        n = e.currentBaseAsset,
                        r = (0, i._)((0, l.A)("expandCoin"), 2),
                        a = r[0],
                        o = r[1];
                    return (0, s.jsx)(R, {
                        unExpandChildren: (0, s.jsx)(_, {
                            coin: t,
                            currentBaseAsset: n,
                            expand: a,
                            toggleExpand: o
                        }),
                        expandChildren: (0, s.jsx)(B, {
                            coin: t
                        }),
                        expand: a,
                        toggleExpand: o
                    })
                };
            const H = a().memo(O);
            var z = function(e) {
                var t = e.symbolsInfo,
                    n = (0, x.sb7)(null === t || void 0 === t ? void 0 : t.currentBaseAsset),
                    i = (null === n || void 0 === n ? void 0 : n.assetCode) || "";
                return i ? (0, s.jsx)(H, {
                    coin: i,
                    currentBaseAsset: null === t || void 0 === t ? void 0 : t.currentBaseAsset
                }) : null
            };
            const V = (0, r.memo)(z);
            var W = n("nUN5"),
                K = n("o9gl"),
                q = function(e) {
                    var t = e.data,
                        n = (e.path, e.metaKey),
                        i = e.ctrlKey;
                    t.symbolDisplay;
                    /windows|win32/i.test(navigator.userAgent)
                },
                U = n("LWbc"),
                Y = function(e) {
                    var t = e.showLoding,
                        n = e.showRefresh,
                        i = e.onRefresh,
                        a = e.children,
                        o = e.onRefreshChildren,
                        l = e.style,
                        c = (0, S._)(e, ["showLoding", "showRefresh", "onRefresh", "children", "onRefreshChildren", "style"]),
                        d = (0, x.ok2)().getI18n,
                        u = (0, r.useMemo)((function() {
                            return d("trd-data-lost", {
                                defaultValue: "Data lost due to a connection issue, please refresh the page."
                            })
                        }), [d]),
                        p = (0, r.useMemo)((function() {
                            return d("trd-refresh-button", {
                                defaultValue: "Refresh"
                            })
                        }), [d]);
                    return t ? (0, s.jsx)(T.Ay, {
                        className: "refreshComponent top-[0px] left-[0px] w-full h-full text-TertiaryText z-1199 text-[12px] flex items-center justify-center",
                        style: l,
                        children: (0, s.jsx)(N.A, (0, j._)({}, c))
                    }) : n ? (0, s.jsx)(T.Ay, {
                        className: "refreshComponent top-[0px] left-[0px] w-full h-full text-TertiaryText z-1199 text-[12px] flex items-center justify-center",
                        style: l,
                        children: (0, s.jsxs)("div", {
                            className: "refresh-text",
                            children: [(0, s.jsxs)("div", {
                                children: [u, (0, s.jsx)("span", {
                                    className: "refresh-button",
                                    onClick: i,
                                    children: p
                                })]
                            }), o && o]
                        })
                    }) : (0, s.jsx)(s.Fragment, {
                        children: a && a
                    })
                };
            const G = a().memo(Y);
            var X = n("hAzz"),
                J = n("3sXV"),
                Q = n("FWGn"),
                $ = n("VLTf"),
                Z = n.n($),
                ee = n("zx3+"),
                te = n("oesP"),
                ne = function(e) {
                    var t = e.activeSubTab,
                        n = e.tickSize,
                        i = e.lastFlag,
                        s = e.baseAsset,
                        a = e.parentMarket,
                        l = e.lastPrice,
                        c = e.noFiat,
                        d = e.sign,
                        u = e.fiatPrice,
                        p = t === D.yt,
                        m = (0, x.xkU)(n),
                        h = (0, x.ttu)(m).format,
                        f = function(e, t) {
                            var n = ((0, o.d4)((function(e) {
                                    return e.market.netValueAll[t]
                                }), o.bN) || {}).amount,
                                i = void 0 === n ? 0 : n;
                            return (0, r.useMemo)((function() {
                                return e ? i : null
                            }), [e, i])
                        }(!0, s),
                        v = (0, r.useMemo)((function() {
                            return i > 0 ? "buy" : i < 0 ? "sell" : "normal"
                        }), [i]),
                        y = (0, r.useMemo)((function() {
                            var e = a === D.yt ? "/".concat((0, ee.ZV)(f, m)) : "";
                            return {
                                p: h(Number(l)),
                                unit: e
                            }
                        }), [h, l, f, a, m]),
                        g = (0, r.useMemo)((function() {
                            return !p && c
                        }), [p, c]);
                    return {
                        priceColor: v,
                        price: y,
                        fiatText: (0, r.useMemo)((function() {
                            return g ? ["/ ", d, u].join("") : ""
                        }), [u, g, d])
                    }
                },
                ie = function(e) {
                    var t = e.symbol,
                        n = e.marginRatio,
                        i = e.noMargin,
                        s = (0, h.RS)(),
                        a = s.favorites,
                        o = s.setFavorite,
                        l = a.indexOf(t),
                        c = (0, r.useMemo)((function() {
                            return l > -1 ? "primary" : ""
                        }), [l]),
                        d = (0, r.useMemo)((function() {
                            return Boolean(n && !i)
                        }), [n, i]),
                        x = (0, r.useCallback)((function(e) {
                            e.preventDefault(), e.stopPropagation(), o(t, l, a),
                                function(e) {
                                    e.status, e.symbol
                                }({
                                    status: l >= 0 ? "unfavourites" : "favourites",
                                    symbol: t
                                })
                        }), [l, o, t, a]);
                    return {
                        favoriteStyle: c,
                        showMarginRatio: d,
                        favoriteFunc: x
                    }
                },
                se = function(e) {
                    var t, n = e.difference,
                        i = (e.activeTab, e.quoteVolume),
                        s = e.bigThan,
                        a = (e.openForthLabel, (0, x.ttu)(0).format),
                        o = "change" === (0, te.v)(),
                        l = Number(i),
                        c = "".concat((t = n, Number.isNaN(Number(t)) ? "+0.0" : t), "%"),
                        d = "".concat(l ? (0, ee.kK)(l, {
                            digits: 2,
                            isUnit: !0
                        }) : a(l)),
                        u = (0, r.useMemo)((function() {
                            return o ? c : d
                        }), [o, c, d]),
                        p = (0, r.useMemo)((function() {
                            return s ? "buy" : "sell"
                        }), [s]);
                    return {
                        text: u,
                        changeText: c,
                        volumeText: d,
                        changeColor: p
                    }
                },
                re = function(e) {
                    var t = e.change,
                        n = e.price,
                        i = e.changeColor,
                        r = e.twoRow,
                        a = void 0 === r || r,
                        o = e.volumeText,
                        l = (0, x.Mjn)(),
                        c = (0, te.v)();
                    return l ? (0, s.jsxs)("div", {
                        className: "item-change-container flex flex-row justify-center items-end pt-[3px] gap-[8px]  text-[12px]",
                        children: [(0, s.jsx)(T.Ay, {
                            className: "item-vol-text text-PrimaryText max-w-[60px] xl:max-w-[120px]",
                            children: "".concat(null === n || void 0 === n ? void 0 : n.p).concat(null === n || void 0 === n ? void 0 : n.unit)
                        }), "change" === c ? (0, s.jsx)(T.Ay, {
                            className: "item-change-text min-w-[60px] text-right item-color-".concat(i),
                            children: t
                        }) : (0, s.jsx)(T.Ay, {
                            className: "item-change-text min-w-[60px] text-right ",
                            children: o
                        })]
                    }) : a ? (0, s.jsxs)("div", {
                        className: "item-change-container flex flex-col justify-center items-end ".concat(l ? "pt-[2px]" : "pt-[5px]"),
                        children: [(0, s.jsx)(T.Ay, {
                            className: "item-vol-text text-PrimaryText text-[14px]",
                            children: "".concat(null === n || void 0 === n ? void 0 : n.p).concat(null === n || void 0 === n ? void 0 : n.unit)
                        }), (0, s.jsx)(T.Ay, {
                            className: "item-change-text item-color-".concat(i),
                            children: t
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "item ".concat(l ? "pt-[2px]" : "pt-[5px]"),
                            style: {
                                flex: "5 1 0",
                                minWidth: "60px",
                                justifyContent: "flex-end",
                                flexWrap: "nowrap"
                            },
                            children: (0, s.jsx)("div", {
                                className: "text-PrimaryText text-[14px]",
                                children: "".concat(null === n || void 0 === n ? void 0 : n.p).concat(null === n || void 0 === n ? void 0 : n.unit)
                            })
                        }), (0, s.jsx)("div", {
                            className: "item item-change pt-[5px]",
                            style: {
                                flex: "5 1 0",
                                minWidth: "60px",
                                justifyContent: "flex-end",
                                flexWrap: "nowrap"
                            },
                            children: (0, s.jsx)(T.Ay, {
                                className: "item-color-".concat(i, "  text-PrimaryText !text-[14px]"),
                                children: t
                            })
                        })]
                    })
                };
            const ae = (0, r.memo)(re);
            var oe = n("Z6qc"),
                le = function(e) {
                    var t = e.children;
                    return (0, x.q$z)() ? null : (0, s.jsx)(s.Fragment, {
                        children: t
                    })
                };
            const ce = a().memo(le);
            var de = function(e) {
                var t = e.favoriteStyle,
                    n = e.favoriteFunc,
                    i = e.baseAsset,
                    r = e.quoteAsset,
                    a = e.marginRatio,
                    o = e.style,
                    l = e.volumeText,
                    c = e.getI18n,
                    d = (0, x.Mjn)(),
                    u = "".concat(i, "/").concat(r).length;
                return d ? (0, s.jsxs)("div", {
                    className: "item-symbol text-PrimaryText flex flex-row justify-start items-start pt-[4px] text-[12px]",
                    style: o,
                    children: [(0, s.jsx)("div", {
                        className: "favorite",
                        onClick: n,
                        children: (0, s.jsx)(oe.A, {
                            className: "!h-[16px] !w-[16px] ".concat("primary" === t ? "text-PrimaryYellow" : "text-DisableText")
                        })
                    }), (0, s.jsx)("div", {
                        className: "ml-[4px] item-symbol-container",
                        children: (0, s.jsxs)("div", {
                            className: "item-symbol-text leading-[16px]",
                            children: [(0, s.jsx)("span", {
                                className: "text-PrimaryText",
                                style: {
                                    fontSize: u > 16 ? "11px" : "12px"
                                },
                                children: i
                            }), (0, s.jsx)("span", {
                                className: "text-PrimaryText",
                                style: {
                                    fontSize: u > 16 ? "11px" : "12px"
                                },
                                children: "/".concat(r)
                            }), (0, s.jsx)(ce, {
                                children: a ? (0, s.jsx)("span", {
                                    className: "market-multiple box-border px-[4px] h-[16px] text-[12px] leading-[16px] rounded-[2px] ml-[4px] font-normal text-PrimaryText cursor-default bg-Input",
                                    children: a
                                }) : null
                            })]
                        })
                    })]
                }) : (0, s.jsxs)("div", {
                    className: "item-symbol text-PrimaryText flex flex-row justify-start items-start ".concat(d ? "pt-[2px]" : "pt-[4px]"),
                    style: o,
                    children: [(0, s.jsx)("div", {
                        className: "favorite py-[3px]",
                        onClick: n,
                        children: (0, s.jsx)(oe.A, {
                            className: "!h-[16px] !w-[16px] ".concat("primary" === t ? "text-PrimaryYellow" : "text-DisableText")
                        })
                    }), (0, s.jsxs)("div", {
                        className: "ml-[4px] item-symbol-container",
                        children: [(0, s.jsxs)("div", {
                            className: "item-symbol-text leading-[22px]",
                            children: [(0, s.jsx)("span", {
                                className: "text-PrimaryText text-[14px]",
                                children: i
                            }), (0, s.jsx)("span", {
                                className: "text-PrimaryText text-[14px]",
                                children: "/".concat(r)
                            }), (0, s.jsx)(ce, {
                                children: a ? (0, s.jsx)("span", {
                                    className: "market-multiple box-border px-[4px] h-[16px] text-[12px] leading-[16px] rounded-[2px] ml-[4px] font-normal text-PrimaryText cursor-default bg-Input",
                                    children: a
                                }) : null
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "leading-[16px] text-TertiaryText whitespace-nowrap overflow-ellipsis",
                            children: [c("trd-Vol"), " ", l]
                        })]
                    })]
                })
            };
            const xe = (0, r.memo)(de, Z());
            var ue = (0, r.memo)((function(e) {
                    var t = e.symbol,
                        n = e.symbolDisplay,
                        i = e.lastPrice,
                        a = e.baseAsset,
                        o = e.quoteAsset,
                        l = e.difference,
                        c = void 0 === l ? "--" : l,
                        u = e.quoteVolume,
                        p = e.bigThan,
                        m = e.tickSize,
                        f = void 0 === m ? 1e-7 : m,
                        v = e.noMargin,
                        y = e.noFiat,
                        g = e.changeSymbol,
                        b = e.lastFlag,
                        j = e.parentMarket,
                        w = e.activeTab,
                        S = e.getFiatPrice,
                        N = (e.isFoldSymbol, e.isSearchStatus),
                        A = (e.isFaitStatus, e.isNAVStatus, e.activeSubTab),
                        T = e.openForthLabel,
                        k = ((0, x.QsY)().isMobile, (0, h.cA)().symbolsMap),
                        C = (0, d.L2)().split("/").slice(0, -1),
                        I = k[t] || {},
                        P = I.crossRatio,
                        M = I.isolatedRatio,
                        R = I.defaultRatio,
                        F = I.type,
                        L = w == D.jS,
                        _ = (0, x.ok2)().getI18n,
                        B = L && !N ? A === d.Gr.ISOLATED ? M : "BOTH" === F || "CROSS" === F ? P : M : R,
                        E = S(i, o),
                        O = E.symbol,
                        H = E.fiatPrice,
                        z = C.concat("".concat(a, "_").concat(o)).join("/"),
                        V = (0, r.useCallback)((function(e) {
                            var t;
                            e.metaKey || e.ctrlKey || (e.preventDefault(), g({
                                symbol: [null === (t = null === n || void 0 === n ? void 0 : n.split("/")) || void 0 === t ? void 0 : t.join("_")],
                                base: a,
                                quote: o
                            }));
                            ! function(e) {
                                e.symbol, e.tab, e.subTab
                            }({
                                symbol: n,
                                tab: w,
                                subTab: A
                            })
                        }), [a, g, o, n]),
                        W = se({
                            difference: c,
                            activeTab: w,
                            quoteVolume: u,
                            bigThan: p,
                            openForthLabel: T
                        }),
                        K = W.changeColor,
                        q = W.volumeText,
                        U = W.changeText,
                        Y = ie({
                            symbol: t,
                            marginRatio: B,
                            noMargin: v
                        }),
                        G = Y.favoriteStyle,
                        X = Y.favoriteFunc,
                        J = ne({
                            activeSubTab: A,
                            tickSize: f,
                            lastFlag: b,
                            baseAsset: a,
                            parentMarket: j,
                            lastPrice: i,
                            noFiat: y,
                            sign: O,
                            fiatPrice: H
                        }),
                        Q = J.priceColor,
                        $ = J.price,
                        Z = (J.fiatText, D.N4);
                    return (0, s.jsxs)("a", {
                        className: "content overflow-y-hidden overflow-x-hidden",
                        href: z,
                        onClick: V,
                        children: [(0, s.jsx)(xe, {
                            favoriteStyle: G,
                            favoriteFunc: X,
                            baseAsset: a,
                            quoteAsset: o,
                            marginRatio: B,
                            style: Z.first,
                            volumeText: q,
                            getI18n: _
                        }), (0, s.jsx)(ae, {
                            priceColor: Q,
                            price: $,
                            change: U,
                            changeColor: K,
                            twoRow: !T,
                            style: Z.second,
                            volumeText: q
                        })]
                    })
                })),
                pe = n("kcvK"),
                me = n("+fos"),
                he = n("xqbL"),
                fe = n.n(he),
                ve = "tradeMarketColumnWrap w-full h-full",
                ye = function(e) {
                    var t = e.symbol,
                        n = e.symbolDisplay,
                        i = e.lastPrice,
                        a = e.baseAsset,
                        o = e.quoteAsset,
                        l = e.difference,
                        c = void 0 === l ? "--" : l,
                        x = e.quoteVolume,
                        u = e.bigThan,
                        p = e.tickSize,
                        m = void 0 === p ? 1e-7 : p,
                        h = e.noMargin,
                        f = e.noFiat,
                        v = (e.placement, e.changeSymbol),
                        y = e.lastFlag,
                        g = e.parentMarket,
                        b = e.active,
                        j = e.openShotCut,
                        w = e.activeTab,
                        S = e.getFiatPrice,
                        N = e.isFoldSymbol,
                        A = e.isSearchStatus,
                        k = e.isFaitStatus,
                        C = e.isNAVStatus,
                        I = e.activeSubTab,
                        P = e.openForthLabel,
                        M = e.showTips,
                        R = (0, d.L2)().split("/").slice(0, -1),
                        D = S(i, o),
                        F = D.symbol,
                        L = D.fiatPrice,
                        _ = R.concat("".concat(a, "_").concat(o)).join("/"),
                        B = (0, r.useMemo)((function() {
                            return j && b
                        }), [b, j]),
                        E = (0, r.useMemo)((function() {
                            return f ? null : (0, s.jsxs)(T.Ay, {
                                className: "flex items-center text-SecondaryBg",
                                children: [(0, s.jsx)("div", {
                                    children: [F, L].join("")
                                }), (0, s.jsx)("a", {
                                    className: "flex text-IconNormal ml-[4px]",
                                    href: _,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(me.A, {
                                        className: "text-[16px]"
                                    })
                                })]
                            })
                        }), [f, _]),
                        O = (0, s.jsx)(ue, {
                            symbol: t,
                            symbolDisplay: n,
                            lastPrice: i,
                            baseAsset: a,
                            quoteAsset: o,
                            difference: c,
                            quoteVolume: x,
                            bigThan: u,
                            tickSize: m,
                            noMargin: h,
                            noFiat: f,
                            changeSymbol: v,
                            lastFlag: y,
                            parentMarket: g,
                            activeTab: w,
                            getFiatPrice: S,
                            isFoldSymbol: N,
                            isSearchStatus: A,
                            isFaitStatus: k,
                            isNAVStatus: C,
                            activeSubTab: I,
                            openForthLabel: P
                        });
                    return M ? (0, s.jsx)(pe.A, {
                        className: fe()({
                            "bg-[#ffffff0a]": B
                        }, ve),
                        bubbleClassName: "ml-[-12px]",
                        tooltips: E,
                        placement: "right",
                        trigger: "hover",
                        arrow: !0,
                        enablePortal: !0,
                        disabled: f,
                        useReactPopper: !0,
                        children: O
                    }) : (0, s.jsx)(T.Ay, {
                        className: fe()({
                            "bg-[#ffffff0a]": B
                        }, ve),
                        children: O
                    })
                };
            const ge = a().memo(ye, Z());
            var be = n("D/Mc"),
                je = n("tCsc"),
                we = (0, je.Zj)((function(e) {
                    var t = e.itemElement,
                        n = e.itemData,
                        i = e.itemHeight;
                    return (0, s.jsx)(T.Ay, {
                        style: {
                            height: i,
                            zIndex: 2e3
                        },
                        children: (0, s.jsx)(t, (0, j._)({}, n))
                    })
                })),
                Se = (0, je.q6)((function(e) {
                    var t = e.items,
                        n = e.itemElement,
                        i = e.itemHeight,
                        r = e.disabled;
                    return (0, s.jsx)("div", {
                        style: {
                            overflow: "auto",
                            flex: 1
                        },
                        children: Boolean(null === t || void 0 === t ? void 0 : t.length) && (null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                            return (0, s.jsx)(we, {
                                index: t,
                                itemElement: n,
                                itemData: e,
                                itemHeight: i,
                                disabled: r
                            }, "".concat(e.symbolDisplay, "-").concat(e.symbol))
                        })))
                    })
                })),
                Ne = function(e) {
                    var t = e.itemElement,
                        n = e.itemHeight,
                        i = e.dataSource,
                        a = e.disabled,
                        o = (0, h.RS)(),
                        l = o.favorites,
                        c = void 0 === l ? [] : l,
                        d = o.updateFavorite,
                        x = (0, r.useCallback)((function(e) {
                            var t = e.oldIndex,
                                n = e.newIndex,
                                i = (0, be.p)(c, t, n);
                            d(i)
                        }), [c, d]);
                    return (0, s.jsx)(Se, {
                        distance: 1,
                        items: i,
                        onSortEnd: x,
                        itemElement: t,
                        itemHeight: n,
                        disabled: a
                    })
                };
            const Ae = (0, r.memo)(Ne);
            var Te = n("saUp"),
                ke = n("wtFP");
            var Ce = function(e) {
                var t = e.p2pSymbols,
                    n = e.keyword,
                    i = e.p2pUrl,
                    a = (0, x.ok2)().getI18n,
                    o = t[n].BUY ? "BUY" : "SELL",
                    l = function(e, t) {
                        var n = e;
                        return t.forEach((function(e) {
                            n = n.replace("%s", e)
                        })), n
                    }(i, [o, t[n][o][0], n]),
                    c = "".concat(d.Ur).concat(l);
                (0, r.useEffect)((function() {
                    (0, ke.u4)("ModuleView", {
                        eventName: "market_p2p_list",
                        df_source: "spot"
                    })
                }), []);
                var u = (0, r.useMemo)((function() {
                    var e = o;
                    return t[n].BUY && t[n].SELL && (e = "buysell"), "trd-p2p-trade-".concat(e.toLocaleLowerCase())
                }), [n, t, o]);
                return (0, s.jsxs)(T.Ay, {
                    as: "a",
                    target: "_blank",
                    href: c,
                    className: "hover:bg-bg3",
                    style: {
                        display: "flex",
                        position: "relative",
                        padding: "16px",
                        alignItems: "center",
                        margin: "12px 16px",
                        textDecoration: "none",
                        borderRadius: "12px",
                        backgroundColor: "inherit",
                        border: "1px solid",
                        borderColor: "var(--color-InputLine)"
                    },
                    onClick: function() {
                        (0, ke.u4)("$WebClick", {
                            eventName: "market_p2p_list_click",
                            $element_id: "market_p2p_element_click"
                        })
                    },
                    children: [(0, s.jsx)(Te.A, {
                        className: "w-[16px] h-[16px] text-PrimaryText"
                    }), (0, s.jsxs)("div", {
                        className: "p2p-content ml-[12px]",
                        children: [(0, s.jsx)("div", {
                            className: "p2p-content-title text-PrimaryText",
                            style: {
                                lineHeight: "20px",
                                fontSize: "14px",
                                fontWeight: "500"
                            },
                            children: a(u, {
                                fiat: n
                            })
                        }), (0, s.jsx)("div", {
                            className: "p2p-content-tips text-SecondaryText",
                            style: {
                                lineHeight: "16px",
                                fontSize: "12px",
                                fontWeight: "400"
                            },
                            children: a("trd-p2p-trade-tips")
                        })]
                    })]
                })
            };
            const Ie = (0, r.memo)(Ce);
            var Pe = n("lu7o"),
                Me = function(e) {
                    var t = e.linkUrl,
                        n = e.title,
                        i = e.subtitle,
                        r = (0, x.x$o)() === d.Pv;
                    return "" !== n && n ? (0, s.jsx)(T.Ay, {
                        as: "a",
                        target: "_blank",
                        href: t || void 0,
                        style: {
                            textDecoration: "initial",
                            display: "flex"
                        },
                        onClick: function() {
                            (0, ke.u4)("$WebClick", {
                                eventName: "market_delist_Tips_click\t",
                                $element_id: "market_delist_Tips_click"
                            })
                        },
                        children: (0, s.jsxs)(T.Ay, {
                            className: "container hover:bg-bg3",
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                margin: "12px 16px",
                                padding: "16px",
                                borderRadius: "12px",
                                border: "1px solid",
                                borderColor: "var(--color-InputLine)"
                            },
                            onMouseEnter: function(e) {
                                e && e.stopPropagation(), (0, ke.u4)("ModuleView", {
                                    eventName: "market_delist_Tips",
                                    df_source: "spot"
                                })
                            },
                            children: [(0, s.jsx)(T.Ay, {
                                style: {
                                    minWidth: "30px"
                                },
                                children: (0, s.jsx)(Pe.A, {
                                    className: "w-[16px] h-[16px] text-PrimaryText"
                                })
                            }), (0, s.jsxs)(T.Ay, {
                                className: "content flex-1",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "title text-PrimaryText",
                                    style: {
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        lineHeight: "20px"
                                    },
                                    children: n
                                }), (0, s.jsx)(T.Ay, {
                                    className: "subTitle",
                                    style: {
                                        fontSize: "12px",
                                        color: "var(--color-TertiaryText)",
                                        display: "-webkit-box",
                                        WebkitLineClamp: r ? "3" : "2",
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        wordWrap: "break-word",
                                        lineHeight: "16px"
                                    },
                                    children: i
                                })]
                            })]
                        })
                    }) : (0, s.jsx)(s.Fragment, {})
                };
            const Re = (0, r.memo)(Me);
            var De = n("Apcd"),
                Fe = n("J+v0"),
                Le = n.n(Fe),
                _e = n("5s+a"),
                Be = function(e) {
                    var t, n, a, o = e.symbol,
                        l = e.lastPrice,
                        c = e.baseAsset,
                        u = e.quoteAsset,
                        p = e.difference,
                        m = void 0 === p ? "--" : p,
                        h = e.quoteVolume,
                        f = e.bigThan,
                        v = e.tickSize,
                        y = void 0 === v ? 1e-7 : v,
                        g = e.noFiat,
                        j = e.lastFlag,
                        w = e.parentMarket,
                        S = e.activeTab,
                        N = e.activeSubTab,
                        A = e.openForthLabel,
                        k = e.balance,
                        C = e.changeSymbol,
                        I = e.symbolDisplay,
                        M = e.exchangeInfos,
                        R = e.isLogin,
                        D = e.isBasic,
                        F = (0, r.useState)({}),
                        L = F[0],
                        _ = F[1],
                        B = (null === L || void 0 === L ? void 0 : L.pmet) || (null === L || void 0 === L ? void 0 : L.preMarketEndTime),
                        E = (0, d.L2)().split("/").slice(0, -1).concat("".concat(c, "_").concat(u)).join("/"),
                        O = (0, x.ok2)().t,
                        H = (0, _e.No)((function(e) {
                            return e.hadSign
                        })),
                        z = (0, _e.No)((function(e) {
                            return e.fetched
                        })),
                        V = ie({
                            symbol: o,
                            marginRatio: "",
                            noMargin: !0
                        }),
                        W = V.favoriteStyle,
                        K = V.favoriteFunc,
                        q = se({
                            difference: m,
                            activeTab: S,
                            quoteVolume: h,
                            bigThan: f,
                            openForthLabel: A
                        }),
                        U = q.changeColor,
                        Y = q.volumeText,
                        G = q.changeText,
                        X = (0, te.v)(),
                        J = (null === k || void 0 === k || null === (t = k[c]) || void 0 === t ? void 0 : t.total) ? (0, b.ZV)(null === k || void 0 === k || null === (n = k[c]) || void 0 === n ? void 0 : n.total, 8) : "--",
                        Q = (null === M || void 0 === M || null === (a = M[o]) || void 0 === a ? void 0 : a.maxPosition) || "--",
                        $ = ne({
                            activeSubTab: N,
                            tickSize: y,
                            lastFlag: j,
                            baseAsset: c,
                            parentMarket: w,
                            lastPrice: l,
                            noFiat: g,
                            sign: "",
                            fiatPrice: ""
                        }).price,
                        Z = (0, r.useCallback)((function(e) {
                            var t;
                            e.metaKey || e.ctrlKey || (e.preventDefault(), C({
                                symbol: [null === (t = null === I || void 0 === I ? void 0 : I.split("/")) || void 0 === t ? void 0 : t.join("_")],
                                base: c,
                                quote: u
                            }))
                        }), [c, C, u, I]);
                    return (0, r.useEffect)((function() {
                        (0, De.tZ)({
                            symbol: o
                        }).then((function(e) {
                            var t = (0, i._)(e, 2)[1];
                            _((null === t || void 0 === t ? void 0 : t.data) || {})
                        }))
                    }), []), (0, s.jsx)("a", {
                        className: "no-underline content overflow-y-hidden overflow-x-hidden",
                        href: E,
                        onClick: Z,
                        children: (0, s.jsxs)(T.Ay, {
                            style: {
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)"
                            },
                            className: "leading-[".concat(A ? "22px" : "18px", "] text-[").concat(A ? "14px" : "12px", "] ").concat(A ? "py-[12px]" : "py-[8px]", " mx-[16px] text-PrimaryText"),
                            children: [(0, s.jsxs)(P.A, {
                                className: "justify-between items-center leading-[18px] mt-[4px]",
                                children: [(0, s.jsxs)(P.A, {
                                    className: "justify-start items-center",
                                    children: [(0, s.jsx)(oe.A, {
                                        onClick: K,
                                        className: "!h-[16px] ml-[-2px] !w-[16px] ".concat("primary" === W ? "text-PrimaryYellow" : "text-DisableText")
                                    }), (0, s.jsx)("div", {
                                        className: "ml-[4px] item-symbol-container",
                                        children: (0, s.jsxs)("div", {
                                            className: "item-symbol-text",
                                            children: [(0, s.jsx)("span", {
                                                className: "text-PrimaryText",
                                                children: c
                                            }), (0, s.jsx)("span", {
                                                className: "text-PrimaryText",
                                                children: "/".concat(u)
                                            })]
                                        })
                                    })]
                                }), (0, s.jsx)(T.Ay, {
                                    className: "item-vol-text text-PrimaryText",
                                    children: "".concat(null === $ || void 0 === $ ? void 0 : $.p).concat(null === $ || void 0 === $ ? void 0 : $.unit)
                                })]
                            }), (0, s.jsxs)(P.A, {
                                className: "justify-between items-center pl-[18px] leading-[18px] mb-[4px] [&_.item-color-buy]:text-Buy [&_.item-color-sell]:text-Sell",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-[12px] text-TertiaryText",
                                    children: A || !D ? Y : ""
                                }), "change" === X || A ? (0, s.jsx)(T.Ay, {
                                    className: "item-change-text min-w-[60px] text-right text-[12px] item-color-".concat(U),
                                    children: G
                                }) : (0, s.jsx)(T.Ay, {
                                    className: "item-change-text min-w-[60px] text-right text-[12px]",
                                    children: Y
                                })]
                            }), (0, s.jsxs)(P.A, {
                                className: "justify-between items-center pl-[18px]",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-SecondaryText",
                                    children: O("trd-pre-end-time")
                                }), (0, s.jsx)(T.Ay, {
                                    children: B ? Le()(B).format("YYYY-MM-DD HH:mm:ss") : "--"
                                })]
                            }), (0, s.jsxs)(P.A, {
                                className: "justify-between items-center pl-[18px]",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-SecondaryText",
                                    children: O("trd-pre-current-max", {
                                        default: "c/m"
                                    }).replace("/", " / ")
                                }), (0, s.jsxs)(T.Ay, {
                                    children: [J, " / ", Q, " ", c]
                                })]
                            }), (0, s.jsxs)(P.A, {
                                className: "".concat(R && z ? "flex" : "hidden", " justify-between items-center pl-[18px]"),
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-SecondaryText",
                                    children: O("trd-pre-permission")
                                }), (0, s.jsx)(T.Ay, {
                                    className: "".concat(H ? "text-Success" : "text-Error"),
                                    children: O(H ? "trd-openOrder-YES" : "trd-openOrder-NO")
                                })]
                            })]
                        })
                    })
                },
                Ee = function(e) {
                    var t = e.openForthLabel,
                        n = e.dataSource,
                        i = void 0 === n ? [] : n,
                        r = e.changeSymbol,
                        a = e.isBasic,
                        o = (0, x.dUb)(),
                        l = (0, x.ok2)().t,
                        c = (0, x.kao)(),
                        d = (0, x.vzt)().isLoggedIn;
                    return (0, _e.g8)({
                        no_need_dialog: !0,
                        forceFetch: !0,
                        no_need_fetch: !0
                    }), (0, s.jsxs)(P.A, {
                        className: "flex-col justify-between items-start flex-1 overflow-y-auto overflow-x-hidden w-full",
                        children: [(0, s.jsx)(T.Ay, {
                            className: "overflow-auto w-full",
                            children: i.map((function(e, n) {
                                return (0, s.jsx)(Be, (0, j._)({
                                    changeSymbol: r,
                                    openForthLabel: t,
                                    isBasic: a,
                                    balance: o,
                                    exchangeInfos: c,
                                    isLogin: d
                                }, e), n)
                            }))
                        }), (0, s.jsxs)(T.Ay, {
                            className: "text-TertiaryText text-[12px] px-[16px] py-[8px] w-full",
                            style: {
                                borderTop: "1px solid",
                                borderTopColor: "var(--color-Line)"
                            },
                            children: [(0, s.jsx)("span", {
                                className: "mr-[4px] text-[14px]",
                                children: "*"
                            }), l("trd-pre-market-what-is", {
                                default: "*"
                            }).replace("*", ""), (0, s.jsx)("a", {
                                href: "/support/faq/d4c5afbf4b804c63908a63d760be97f9",
                                target: "_blank",
                                className: "ml-[4px] no-underline text-TextLink font-medium",
                                rel: "noopener noreferrer",
                                children: l("trd-learn-more", {
                                    defaultValue: "Learn More"
                                })
                            })]
                        })]
                    })
                },
                Oe = function(e, t) {
                    var n = t[e];
                    return (null === n || void 0 === n ? void 0 : n.symbol) || e
                },
                He = function(e) {
                    var t = e.filterFunc,
                        n = void 0 === t ? function() {
                            return !0
                        } : t,
                        a = e.sortFunc,
                        l = void 0 === a ? function() {
                            return 0
                        } : a,
                        u = e.noFiat,
                        p = e.noMargin,
                        m = e.placement,
                        h = e.changeSymbol,
                        f = e.openShotCut,
                        v = e.activeTab,
                        y = e.keyword,
                        g = e.rectWidth,
                        b = e.activeSubTab,
                        S = e.openForthLabel,
                        N = e.simpleMarket,
                        A = e.showTips,
                        T = (0, x.QsY)().isMobile,
                        k = (0, i._)((0, x.Grl)(), 1)[0],
                        C = (0, o.d4)(U.makeP2pSymbols),
                        I = (0, o.d4)(U.makeP2pUrl),
                        P = (0, X.V$)(k) ? "MARGIN" : k,
                        M = (0, r.useMemo)((function() {
                            return function(e) {
                                var t = e.activeTab,
                                    n = e.keyword,
                                    i = e.noFiat,
                                    s = e.isMobile,
                                    r = e.rectWidth,
                                    a = e.activeSubTab === D.yt,
                                    o = t === D.YY,
                                    l = !1,
                                    c = !1,
                                    x = !1,
                                    u = 24;
                                return n && n.length > 0 ? {
                                    isSearchStatus: !0,
                                    isNAVStatus: !1,
                                    isFoldSymbol: !1,
                                    isFaitStatus: !1,
                                    itemHeight: 24
                                } : o ? (r && d.OL, {
                                    isSearchStatus: !0,
                                    isNAVStatus: !1,
                                    isFoldSymbol: !1,
                                    isFaitStatus: !1,
                                    itemHeight: 24
                                }) : (a && (r && r < d.OL ? (l = !0, u = 40, x = !0) : (l = !1, u = 24, x = !0)), !i || a || s || (c = !(r && r < d.OL)), {
                                    isFoldSymbol: l,
                                    isSearchStatus: !1,
                                    isFaitStatus: c,
                                    isNAVStatus: x,
                                    itemHeight: u
                                })
                            }({
                                activeTab: v,
                                keyword: y,
                                noFiat: u,
                                rectWidth: g,
                                isMobile: T,
                                activeSubTab: b
                            })
                        }), [v, y, u, g, T, b]),
                        R = M.isFoldSymbol,
                        F = M.isSearchStatus,
                        L = M.isFaitStatus,
                        _ = M.isNAVStatus,
                        B = (0, o.wA)(),
                        E = (0, x.Mjn)(),
                        O = (0, W.mR)(),
                        H = O.nextTickers,
                        z = void 0 === H ? [] : H,
                        V = O.loading,
                        Y = O.isError,
                        $ = (0, r.useMemo)((function() {
                            return z.filter(n)
                        }), [z, n]),
                        Z = (0, r.useMemo)((function() {
                            return $.sort(l)
                        }), [$, l]),
                        ee = (0, x.$X2)(),
                        te = (0, r.useCallback)(B.products.queryBizTags, []),
                        ne = (0, x.hUq)({
                            enable: !N && !!y,
                            keyword: y
                        }),
                        ie = ne.linkUrl,
                        se = ne.title,
                        re = ne.subtitle,
                        ae = Z && 0 === Z.length && !ie,
                        oe = (0, c.Z)((function(e) {
                            return (0, s.jsx)(ge, (0, w._)((0, j._)({}, e), {
                                getFiatPrice: ee,
                                noFiat: u,
                                noMargin: p,
                                placement: m,
                                openShotCut: f,
                                changeSymbol: h,
                                activeTab: v,
                                isFoldSymbol: R,
                                isSearchStatus: F,
                                isFaitStatus: L,
                                isNAVStatus: _,
                                activeSubTab: b,
                                openForthLabel: S,
                                showTips: A
                            }))
                        })),
                        le = (0, r.useRef)();
                    return (0, Q.C)({
                        name: "market",
                        shouldReport: !1 === V
                    }), (0, r.useEffect)((function() {
                        var e, t;
                        null === (e = le.current) || void 0 === e || null === (t = e.handleScrollTop) || void 0 === t || t.call(e)
                    }), [l]), y && 0 === Z.length && C[null === y || void 0 === y ? void 0 : y.toUpperCase()] && !se ? (0, s.jsx)(Ie, {
                        p2pSymbols: C,
                        keyword: y.toUpperCase(),
                        p2pUrl: I
                    }) : ae ? (0, s.jsx)(J.p, {}) : v !== D.YY || y && "" !== y ? v !== D.hr || y && "" !== y ? (0, s.jsxs)(G, {
                        showLoding: !!V,
                        inner: !0,
                        style: {
                            position: "relative",
                            height: "66%",
                            zIndex: "2"
                        },
                        showRefresh: Y,
                        onRefresh: te,
                        children: [se && "" !== se && (0, s.jsx)(Re, {
                            linkUrl: ie,
                            title: se,
                            subtitle: re
                        }), (0, s.jsx)(K.B, {
                            dataSource: Z,
                            loading: !!V,
                            itemElement: oe,
                            itemKey: Oe,
                            itemHeight: E ? 24 : 46,
                            openShotCut: f,
                            onKeyDownCallback: q,
                            tradeType: P,
                            scrollPerf: !1,
                            listSx: {
                                content: b
                            },
                            onRef: function(e) {
                                return le.current = e
                            }
                        })]
                    }) : (0, s.jsx)(Ee, {
                        dataSource: Z,
                        openForthLabel: S,
                        changeSymbol: h,
                        isBasic: E
                    }) : (0, s.jsx)(Ae, {
                        dataSource: Z,
                        itemElement: oe,
                        itemHeight: E ? 24 : 46,
                        disabled: Boolean(y)
                    })
                };
            const ze = a().memo(He);
            var Ve = n("Xz3K"),
                We = n("Rhdc"),
                Ke = n("NJD8"),
                qe = n("46Ff"),
                Ue = n("1tqE"),
                Ye = n("6vmL"),
                Ge = [
                    [Ve.mC.TRADING_SEARCH_PAIRS]
                ],
                Xe = function(e) {
                    var t = e.value,
                        n = e.search,
                        i = void 0 === n ? function() {} : n,
                        a = e.openShotCut,
                        o = e.setShowHotSearch,
                        l = void 0 === o ? function() {} : o,
                        c = e.showHotSearch,
                        d = void 0 !== c && c,
                        x = e.searchFocus,
                        u = void 0 !== x && x,
                        p = e.setSearchFocus,
                        m = (0, r.useRef)(),
                        h = (0, D.ok)().getI18n,
                        f = h("searchHolder", {
                            defaultValue: "Search"
                        }),
                        v = h("cancel", {
                            defaultValue: "Cancel"
                        }),
                        y = function(e) {
                            i(e)
                        };
                    (0, r.useEffect)((function() {
                        X.RR.on(X.qY.TRIGGER_MARKET_TEXT, y)
                    }), []), (0, r.useEffect)((function() {}), [a]), (0, r.useEffect)((function() {
                        return (0, We.r)((function(e) {
                            if (e === Ve.mC.TRADING_SEARCH_PAIRS) setTimeout((function() {
                                m.current && m.current.focus()
                            }), 100)
                        }))
                    }), []), (0, r.useEffect)((function() {
                        u && (p && p(!1), m.current && m.current.focus())
                    }), [u, p]);
                    var g = function() {
                        return t && "" !== t ? (0, s.jsx)(Ue.A, {
                            style: {
                                cursor: "pointer"
                            },
                            onClick: function() {
                                return i("")
                            }
                        }) : (0, s.jsx)(s.Fragment, {})
                    };
                    return (0, s.jsxs)(T.Ay, {
                        children: [(0, s.jsx)(T.Ay, {
                            className: "h-[12px] draggableHandle"
                        }), (0, s.jsxs)(T.Ay, {
                            className: "flex items-center justify-between px-[16px]",
                            children: [(0, s.jsx)(qe.A, {
                                className: "draggableCancel w-full !h-[32px] flex-1",
                                variant: "line",
                                size: "small",
                                prefix: (0, s.jsx)(Ye.A, {}),
                                suffix: (0, s.jsx)(g, {}),
                                value: t,
                                onChange: i,
                                placeholder: f,
                                ref: m,
                                onFocus: function() {
                                    return l(!0)
                                },
                                onBlur: function() {
                                    l(!1),
                                        function(e) {
                                            e.searchContent
                                        }({
                                            searchContent: t
                                        })
                                }
                            }), (0, s.jsx)(Ke.default, {
                                boxOffset: -204,
                                placement: "bottom",
                                tipWidth: 140,
                                shortcutKeys: Ge,
                                i18nKey: "widget-shortcuts-search-pairs",
                                froceShow: a
                            }), !d && (0, s.jsx)(T.Ay, {
                                onClick: function() {
                                    l(!1)
                                },
                                className: "draggableCancel text-TextLink text-[14px] ml-[16px] cursor-pointer font-medium",
                                children: v
                            })]
                        })]
                    })
                };
            const Je = (0, r.memo)(Xe);
            var Qe = n("8TKQ"),
                $e = n("SRNX"),
                Ze = n("lW1t"),
                et = n("/yno"),
                tt = n("Ub65"),
                nt = n("r2Gn"),
                it = nt.A.TabList,
                st = nt.A.Tab,
                rt = function(e) {
                    var t = e.itemType,
                        n = e.getI18n,
                        i = e.tagsMap,
                        r = e.getBaseI18n;
                    return t === D.hr ? r("trd-tag-pre-market", {
                        defaultValue: "Pre-Market"
                    }) : t === D.kM ? r("trd-tag-new-listing", {
                        defaultValue: "New Listing"
                    }) : t === D.YY ? (0, s.jsx)("div", {
                        className: "tab-icon flex items-center",
                        children: (0, s.jsx)(et.A, {
                            color: "iherit",
                            size: 16
                        })
                    }) : t === D.ID ? (0, s.jsx)(pe.A, {
                        tooltips: n("holding"),
                        arrow: !0,
                        placement: "top",
                        useReactPopper: !0,
                        children: (0, s.jsx)(tt.A, {
                            className: "tab-icon text-inherit flex items-center w-[16px] h-[16px]",
                            name: "HodlAndEarn1C"
                        })
                    }) : i[t] || n(t, {
                        defaultValue: t
                    })
                },
                at = function(e) {
                    var t = e.tabInfo,
                        n = e.activeTab,
                        a = e.setTab,
                        l = e.simpleMarket,
                        c = e.hasHolding,
                        u = e.isHoldingFetched,
                        p = e.isFirstInitialLocal,
                        m = e.keyword,
                        h = (0, x.q$z)(),
                        f = (0, D.ok)().getI18n,
                        v = (0, x.ok2)().getI18n,
                        y = (0, x.qgR)(),
                        g = (0, x.QsY)().isMobile,
                        b = (0, x.k0r)(),
                        j = (0, o.d4)(Ze.makeComplianceDisabledTags),
                        w = (0, i._)((0, $e.z)(Qe.p.MARKET_TABS, []), 2),
                        S = w[0],
                        N = w[1],
                        A = j.includes("spot_pre_market") || !!m,
                        k = (0, x.Bm2)("Web_new_listing"),
                        C = (0, x.zZc)(),
                        I = (0, r.useMemo)((function() {
                            return S.map((function(e) {
                                return {
                                    sectionKey: e,
                                    display: (0, s.jsx)(rt, {
                                        itemType: e,
                                        getI18n: f,
                                        tagsMap: C,
                                        getBaseI18n: v
                                    }),
                                    sortValue: 0
                                }
                            }))
                        }), [S, C, f, v, t]);
                    (0, r.useEffect)((function() {
                        if (t && b && !(b.length < 1) && u) {
                            var e = function(e) {
                                var t = e.tabs,
                                    n = void 0 === t ? [] : t,
                                    i = e.isOnlySupportSpot,
                                    s = e.isGridOpen,
                                    r = e.simpleMarket,
                                    a = e.hasHolding,
                                    o = e.tabInfo,
                                    l = void 0 === o ? {} : o,
                                    c = e.disablePreMarket,
                                    x = e.enableNewlisting,
                                    u = n.concat([]);
                                return r ? a ? [D.YY, D.ID].concat(d.pI) : [D.YY].concat(d.pI) : (x && !r && u.unshift(D.kM), a && u.unshift(D.ID), u.unshift(D.YY), l[D.z6] && u.push(D.z6), i || u.push(D.jS), s && u.push(D.Z), !c && l["Pre-Market"] || (u = u.filter((function(e) {
                                    return "Pre-Market" !== e
                                }))), u)
                            }({
                                tabs: b,
                                isOnlySupportSpot: h,
                                isGridOpen: y && !g,
                                simpleMarket: l,
                                hasHolding: c,
                                tabInfo: t,
                                disablePreMarket: A,
                                enableNewlisting: k
                            });
                            try {
                                JSON.stringify(e) === JSON.stringify(S) && 0 !== S.length || N(e)
                            } catch (n) {
                                console.error(n), N(e)
                            }
                        }
                    }), [t, h, y, g, l, c, b, u, j, A, k]), (0, r.useEffect)((function() {
                        var e = j.includes("JP_USDT"),
                            i = j.includes("MICA_spot_markets");
                        if (!((null === S || void 0 === S ? void 0 : S.length) <= 0) && t && 1 !== Object.keys(t).length && b && !(b.length < 1) && u && j && !(j.length <= 0)) {
                            if ((null === p || void 0 === p ? void 0 : p.current) && (e || i)) {
                                if (e && "JPY" !== n && S.indexOf("JPY") >= 0) return a("JPY"), void(p.current = !1);
                                if (e && "JPY" !== n && S.indexOf("JPY") < 0) return a("BTC"), void(p.current = !1);
                                if (i && "USDC" !== n && S.indexOf("USDC") >= 0) return a("USDC"), void(p.current = !1);
                                if (i && "USDC" !== n && S.indexOf("USDC") < 0) return a("BTC"), void(p.current = !1)
                            }
                            S && S.length > 5 && n && S.indexOf(n) < 0 && S.indexOf(D.g$) >= 0 ? a(D.g$) : S && n && S.indexOf(n) < 0 && S.indexOf(D.g$) < 0 && (S.length > 0 ? a(S[0]) : a(D.YY))
                        }
                    }), [n, S, b, j]);
                    var P = (0, r.useMemo)((function() {
                        var e = I.findIndex((function(e) {
                            return e.sectionKey === n
                        }));
                        return e < 0 && I.length > 2 ? 2 : e < 0 ? 0 : e
                    }), [n, I]);
                    return (0, s.jsx)(T.Ay, {
                        className: "old-bg-arrow [&_.bn-tab-list-shadow-left]:left-[12px] [&_.bn-tab-list-shadow-left]:!h-[38px] [&_.bn-tab-list-arrow-left]:left-[12px] [&_.bn-tab-list-arrow-left]:!h-[38px] [&_.bn-tab-list-shadow-right]:right-[12px] [&_.bn-tab-list-shadow-right]:!h-[38px] [&_.bn-tab-list-arrow-right]:right-[12px] [&_.bn-tab-list-arrow-right]:!h-[38px]",
                        style: {
                            padding: "0px 16px",
                            height: "38px",
                            position: "relative"
                        },
                        children: (0, s.jsx)(it, {
                            variant: "default",
                            fontSizeType: "3",
                            selectedIndex: P,
                            showSlideArrow: !0,
                            showSlideMasks: !0,
                            onTabClick: function(e) {
                                var t, n;
                                a(null === I || void 0 === I || null === (t = I[e]) || void 0 === t ? void 0 : t.sectionKey), (null === I || void 0 === I || null === (n = I[e]) || void 0 === n ? void 0 : n.sectionKey) === D.hr && (0, F.ai)()
                            },
                            style: {
                                gap: "16px"
                            },
                            children: I.map((function(e) {
                                var t = e.sectionKey,
                                    n = e.display;
                                return (0, s.jsx)(st, {
                                    size: "small",
                                    className: "!h-[38px] !font-medium",
                                    children: n
                                }, t)
                            }))
                        })
                    })
                };
            const ot = a().memo(at);
            var lt = n("ubRa"),
                ct = n("4k1r"),
                dt = function(e) {
                    var t = e.activeTab,
                        n = e.setTab,
                        i = e.list,
                        r = e.bgColor,
                        a = e.rectWidth;
                    return (0, s.jsx)(lt.A, {
                        speed: a - 100,
                        zIndex: 3,
                        bgColor: r,
                        marginTop: "8px",
                        children: (0, s.jsx)(T.Ay, {
                            className: "trdSubTab",
                            children: (0, s.jsx)(ct.A, {
                                list: i,
                                activeTab: t,
                                switchTab: n
                            })
                        })
                    })
                };
            const xt = a().memo(dt);
            var ut = n("mwnt"),
                pt = function(e) {
                    var t = e.onClick,
                        n = e.symbol,
                        i = e.defaultRatio;
                    return (0, s.jsxs)(T.Ay, {
                        className: "flex bg-Input px-[10px] rounded-[6px] mr-[8px] mt-[8px] text-[14px] cursor-pointer leading-[22px]",
                        onClick: t,
                        children: [(0, s.jsx)(T.Ay, {
                            className: "text-PrimaryText",
                            children: n
                        }), i && (0, s.jsx)(T.Ay, {
                            className: "text-TertiaryText ml-[4px] text-[12px] leading-[21px]",
                            children: i
                        })]
                    })
                },
                mt = function(e) {
                    var t = e.changeSymbol,
                        n = e.clearHistory,
                        i = e.historyData,
                        r = (0, x.CUO)().getI18n;
                    return i.length <= 0 ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsxs)(T.Ay, {
                        className: "mt-[12px] px-[16px]",
                        children: [(0, s.jsxs)(T.Ay, {
                            className: "search-history-header flex items-center justify-between text-[14px] font-medium leading-[22px]",
                            children: [(0, s.jsx)(T.Ay, {
                                children: r("search-history", {
                                    defaultValue: "Search History"
                                })
                            }), (0, s.jsx)(ut.A, {
                                className: "hover:text-PrimaryText",
                                onClick: function(e) {
                                    e && e.stopPropagation(), n()
                                },
                                size: 16,
                                color: "var(--color-IconNormal)",
                                cursor: "pointer"
                            })]
                        }), (0, s.jsx)(T.Ay, {
                            className: "search-history-content flex flex-wrap",
                            children: i.map((function(e) {
                                var n = e.baseAsset,
                                    i = e.quoteAsset,
                                    r = e.defaultRatio,
                                    a = e.symbol;
                                if (n && i) return (0, s.jsx)(pt, {
                                    symbol: "".concat(n, "/").concat(i),
                                    defaultRatio: r,
                                    onClick: function() {
                                        return function(e) {
                                            var n = e.symbol,
                                                i = e.base,
                                                s = e.quote;
                                            t({
                                                symbol: n,
                                                base: i,
                                                quote: s
                                            })
                                        }({
                                            symbol: ["".concat(n, "_").concat(i)],
                                            base: n,
                                            quote: i
                                        })
                                    }
                                }, a)
                            }))
                        })]
                    })
                },
                ht = function(e) {
                    var t = e.baseAsset,
                        n = e.quoteAsset,
                        i = e.defaultRatio,
                        r = e.change,
                        a = e.lastPrice,
                        o = e.rank,
                        l = e.bigThan,
                        c = e.symbol,
                        d = e.changeSymbol,
                        u = e.showThreeCol,
                        p = (0, h.RS)(),
                        m = p.favorites,
                        f = void 0 === m ? [] : m,
                        v = p.setFavorite,
                        y = f.indexOf(c),
                        g = y >= 0,
                        b = function(e) {
                            e && e.stopPropagation(), v(c, y, f)
                        },
                        j = function() {
                            d({
                                symbol: ["".concat(t, "_").concat(n)],
                                base: t,
                                quote: n
                            })
                        };
                    return (0, x.Mjn)() ? (0, s.jsxs)(T.Ay, {
                        onClick: j,
                        className: "flex justify-between items-center h-[24px] px-[16px] cursor-pointer text-[12px] hover:bg-bg3 [&>.rank-1]:text-[#FF693D] [&>.rank-2]:text-[#D0980B] [&>.rank-3]:text-[#F0B90B]",
                        children: [(0, s.jsx)(oe.A, {
                            onClick: b,
                            className: "h-[16px] w-[16px] ".concat(g ? "text-PrimaryYellow" : "text-DisableText"),
                            cursor: "pointer"
                        }), (0, s.jsx)(T.Ay, {
                            className: "rank text-TertiaryText pl-[4px] w-[16px] leading-[16px] rank-".concat(o),
                            children: o
                        }), (0, s.jsxs)(T.Ay, {
                            className: "price-container h-full ml-[8px] flex-1 flex flex-row items-center justify-start",
                            children: [(0, s.jsxs)(T.Ay, {
                                className: "symbol leading-[16px]",
                                children: [t, "/", n]
                            }), i && (0, s.jsx)(T.Ay, {
                                className: "ratio w-min h-[16px] leading-[16px] rounded-[2px] flex px-[4px] text-PrimaryText bg-Input text-[12px] ml-[3px]",
                                children: i
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "h-full flex-1 flex flex-row items-center justify-end",
                            children: [(0, s.jsx)(T.Ay, {
                                className: "leading-[16px] text-right",
                                children: a
                            }), (0, s.jsxs)(T.Ay, {
                                className: "change min-w-[65px] text-right leading-[18px] text-[12px]",
                                style: {
                                    color: l ? "var(--color-Buy)" : "var(--color-Sell)"
                                },
                                children: [r, "%"]
                            })]
                        })]
                    }) : u ? (0, s.jsxs)(T.Ay, {
                        onClick: j,
                        className: "flex justify-between items-center h-[34px] px-[16px] cursor-pointer text-[14px] hover:bg-bg3 [&>.rank-1]:text-[#FF693D] [&>.rank-2]:text-[#D0980B] [&>.rank-3]:text-[#F0B90B]",
                        children: [(0, s.jsx)(oe.A, {
                            onClick: b,
                            className: "h-[16px] w-[16px] ".concat(g ? "text-PrimaryYellow" : "text-DisableText"),
                            cursor: "pointer"
                        }), (0, s.jsx)(T.Ay, {
                            className: "rank text-TertiaryText pl-[4px] w-[16px] leading-[16px] rank-".concat(o),
                            children: o
                        }), (0, s.jsxs)(T.Ay, {
                            className: "price-container h-full ml-[8px] flex-1 flex flex-row items-center justify-start",
                            children: [(0, s.jsxs)(T.Ay, {
                                className: "symbol leading-[16px]",
                                children: [t, "/", n]
                            }), i && (0, s.jsx)(T.Ay, {
                                className: "ratio w-min h-[16px] leading-[16px] rounded-[2px] flex px-[4px] text-PrimaryText bg-Input ml-[3px]",
                                children: i
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "h-full flex-1 flex flex-row items-center justify-end",
                            children: [(0, s.jsx)(T.Ay, {
                                className: "leading-[16px] text-right",
                                children: a
                            }), (0, s.jsxs)(T.Ay, {
                                className: "change min-w-[96px] text-right leading-[18px]",
                                style: {
                                    color: l ? "var(--color-Buy)" : "var(--color-Sell)"
                                },
                                children: [r, "%"]
                            })]
                        })]
                    }) : (0, s.jsxs)(T.Ay, {
                        onClick: j,
                        className: "flex justify-between items-center h-[44px] px-[16px] cursor-pointer text-[14px] hover:bg-bg3",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-start justify-start h-full [&>.rank-1]:text-[#FF693D] [&>.rank-2]:text-[#D0980B] [&>.rank-3]:text-[#F0B90B]",
                            children: [(0, s.jsx)(oe.A, {
                                onClick: b,
                                className: "h-[16px] mt-[3px] w-[16px] ".concat(g ? "text-PrimaryYellow" : "text-DisableText"),
                                cursor: "pointer"
                            }), (0, s.jsx)(T.Ay, {
                                className: "rank text-TertiaryText pl-[4px] w-[16px] leading-[22px] rank-".concat(o),
                                children: o
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "price-container h-full ml-[8px] flex-1",
                            children: [(0, s.jsxs)(T.Ay, {
                                className: "symbol leading-[22px]",
                                children: [t, "/", n]
                            }), i && (0, s.jsx)(T.Ay, {
                                className: "ratio w-min h-[16px] leading-[16px] rounded-[2px] flex px-[4px] text-PrimaryText bg-Input text-[12px]",
                                children: i
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "h-full",
                            children: [(0, s.jsx)(T.Ay, {
                                className: "leading-[22px] text-right",
                                children: a
                            }), (0, s.jsxs)(T.Ay, {
                                className: "change min-w-[96px] text-right leading-[18px] text-[12px]",
                                style: {
                                    color: l ? "var(--color-Buy)" : "var(--color-Sell)"
                                },
                                children: [r, "%"]
                            })]
                        })]
                    })
                };
            const ft = function(e) {
                var t = e.changeSymbol,
                    n = e.clearHistory,
                    i = e.historyData,
                    r = e.setHistory,
                    a = e.showThreeCol,
                    o = (0, W.HQ)(),
                    l = (0, x.CUO)().getI18n,
                    c = function(e) {
                        var n = e.symbol,
                            i = e.base,
                            s = e.quote;
                        t({
                            symbol: n,
                            base: i,
                            quote: s
                        }), r("".concat(i).concat(s))
                    };
                return (0, s.jsxs)(T.Ay, {
                    className: "text-PrimaryText text-[12px] overflow-auto ",
                    onMouseDown: function(e) {
                        e && e.preventDefault(), e && e.stopPropagation()
                    },
                    children: [(0, s.jsx)(mt, {
                        changeSymbol: c,
                        clearHistory: n,
                        historyData: i
                    }), (0, s.jsx)(T.Ay, {
                        style: {
                            marginTop: "12px",
                            paddingLeft: "16px",
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "22px",
                            marginBottom: a ? "4px" : "8px"
                        },
                        children: l("top-search", {
                            defaultValue: "Top Search"
                        })
                    }), (0, s.jsx)(T.Ay, {
                        className: "hotsearch-container flex flex-col",
                        children: o.map((function(e, t) {
                            var n = e.baseAsset,
                                i = e.quoteAsset,
                                r = e.defaultRatio,
                                o = e.symbol,
                                l = e.change,
                                d = e.lastPrice,
                                x = e.bigThan;
                            return (0, s.jsx)(ht, {
                                baseAsset: n,
                                quoteAsset: i,
                                defaultRatio: r,
                                change: l,
                                lastPrice: d,
                                rank: t + 1,
                                bigThan: x,
                                symbol: o,
                                changeSymbol: c,
                                showThreeCol: a
                            }, o)
                        }))
                    })]
                })
            };
            var vt = function(e) {
                    var t = e.tip,
                        n = e.tipStyle,
                        i = e.title;
                    return (0, s.jsx)(pe.A, {
                        arrow: !0,
                        useReactPopper: !0,
                        tooltips: t,
                        offset: 4,
                        children: (0, s.jsx)(T.Ay, {
                            className: "title cursor-help text-TertiaryText text-[14px]",
                            style: (0, j._)({
                                borderBottom: "0.5px dashed",
                                borderColor: "var(--color-TertiaryText)"
                            }, n),
                            children: i
                        })
                    })
                },
                yt = n("S+0I"),
                gt = n("jbFV"),
                bt = n.n(gt),
                jt = n("yVd9"),
                wt = n("6JAD"),
                St = n("Najx"),
                Nt = n("EXwb"),
                At = function(e) {
                    var t = e.width,
                        n = e.color,
                        i = e.src,
                        a = e.height,
                        o = e.symbol,
                        l = void 0 === o ? "" : o,
                        c = (0, r.useState)(!1),
                        d = c[0],
                        x = c[1];
                    return i ? l.includes("undefined") || d ? (0, s.jsx)("div", {
                        className: "svg-container mt-[2px] overflow-hidden flex items-center justify-center",
                        style: {
                            width: "".concat(t, "px"),
                            height: "".concat(a, "px")
                        },
                        children: (0, s.jsx)("div", {
                            style: {
                                backgroundColor: "var(--color-Buy)",
                                height: "1px",
                                width: "100%"
                            }
                        })
                    }) : (0, s.jsx)("div", {
                        className: "svg-container mt-[2px] overflow-hidden",
                        children: (0, s.jsx)(g.A, {
                            style: {
                                filter: "drop-shadow(0px ".concat(t, "px ").concat(n, ")"),
                                transform: "translateY(-".concat(t, "px)")
                            },
                            width: "".concat(t, "px"),
                            height: "".concat(a, "px"),
                            src: i,
                            onError: function() {
                                x(!0)
                            }
                        })
                    }) : (0, s.jsx)(s.Fragment, {})
                },
                Tt = n("Rbm3"),
                kt = ["USDT", "FDUSD", "TUSD", "BUSD"],
                Ct = function(e) {
                    var t = e.coin,
                        n = e.logo,
                        i = e.assetName,
                        r = e.tickers,
                        a = e.onClick,
                        l = e.isFait,
                        c = (0, o.d4)((function(e) {
                            return e.market.logos
                        })),
                        x = function(e, t) {
                            var n = "",
                                i = "",
                                s = "";
                            if ("USDT" === t) return {
                                symbol: n = "FDUSDUSDT",
                                base: i = "FDUSD",
                                quote: s = "USDT"
                            };
                            var r = kt.find((function(n) {
                                    return e["".concat(t).concat(n)]
                                })),
                                a = kt.find((function(n) {
                                    return e["".concat(n).concat(t)]
                                }));
                            return r ? (n = "".concat(t).concat(r), i = "".concat(t), s = "".concat(r)) : (n = "".concat(a).concat(t), i = "".concat(a), s = "".concat(t)), {
                                symbol: n,
                                base: i,
                                quote: s
                            }
                        }(r, t),
                        u = x.symbol,
                        p = x.base,
                        m = x.quote,
                        h = r[u] || {},
                        f = h.difference,
                        v = void 0 === f ? 0 : f,
                        y = h.lastPrice,
                        g = void 0 === y ? "--" : y,
                        b = (0, Nt.e)(v),
                        j = Number(v) >= 0;
                    return "--" === g ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsxs)(P.A, {
                        onClick: a,
                        className: "flex-row items-center justify-between h-[46px] pl-[15px] text-[12px] text-PrimaryText cursor-pointer hover:bg-bg3 pt-[4px]",
                        children: [(0, s.jsxs)(P.A, {
                            className: "name items-start min-w-[62px] flex-1 h-full",
                            children: [l ? (0, s.jsxs)(T.Ay, {
                                className: "faitLogo h-[16px] w-[16px] min-w-[16px] mr-[4px] relative mt-[3px]",
                                children: [(0, s.jsx)(Tt.A, {
                                    className: "base w-full h-full",
                                    src: c[p]
                                }), (0, s.jsx)(Tt.A, {
                                    className: "quote absolute w-[10px] h-[10px] right-[0px] bottom-[0px]",
                                    src: c[m]
                                })]
                            }) : (0, s.jsx)(Tt.A, {
                                className: "logo h-[16px] w-[16px] min-w-[16px] mr-[4px] mt-[3px]",
                                src: n
                            }), (0, s.jsxs)(P.A, {
                                className: "coin flex-col flex-nowrap overflow-hidden",
                                children: [(0, s.jsx)(T.Ay, {
                                    className: "text-[14px] leading-[22px]",
                                    children: t
                                }), (0, s.jsx)(T.Ay, {
                                    className: "assetName text-TertiaryText leading-[16px]",
                                    style: {
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    children: i
                                })]
                            })]
                        }), (0, s.jsx)(T.Ay, {
                            className: "lastprice",
                            style: {
                                textAlign: "center",
                                fontSize: "14px",
                                height: "38px"
                            },
                            children: (0, X.T6)(g)
                        }), (0, s.jsx)(T.Ay, {
                            className: "chart",
                            style: {
                                minWidth: "54px",
                                flex: "1",
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingRight: "4px"
                            },
                            children: (0, s.jsxs)(T.Ay, {
                                className: "container",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flexBasis: "content"
                                },
                                children: [(0, s.jsx)(At, {
                                    width: 54,
                                    height: 18,
                                    color: b,
                                    src: "".concat(d.K5, "/kline/1day/").concat(u, ".svg"),
                                    symbol: u
                                }), (0, s.jsxs)(P.A, {
                                    className: "justify-start items-center",
                                    children: [j ? (0, s.jsx)(wt.A, {
                                        color: b,
                                        size: 12
                                    }) : (0, s.jsx)(St.A, {
                                        color: b,
                                        size: 12
                                    }), (0, s.jsx)(T.Ay, {
                                        style: {
                                            color: b
                                        },
                                        children: v
                                    })]
                                })]
                            })
                        })]
                    })
                };
            const It = a().memo(Ct);
            var Pt = function() {
                var e = (0, o.d4)(Ze.makeInfo),
                    t = (0, o.d4)((function(e) {
                        return e.tradecl.portfolioLoaded
                    })),
                    n = (0, W.mR)().nextTickers,
                    i = (0, X.G)(n, "symbol"),
                    a = (0, r.useState)([]),
                    l = a[0],
                    c = a[1],
                    d = (0, x.ok2)().getI18n,
                    u = (0, r.useCallback)((function(e, t) {
                        e && e.stopPropagation(), e && e.preventDefault(), X.RR.emit(X.qY.TRIGGER_MARKET_TEXT, t)
                    }), []);
                (0, r.useEffect)((function() {
                    function e() {
                        return e = (0, yt._)(bt().mark((function e() {
                            var t, n;
                            return bt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, jt.lX)({
                                            pageNumber: 1,
                                            pageSize: 10,
                                            hideSmallAsset: !1
                                        });
                                    case 2:
                                        (null === (t = e.sent) || void 0 === t ? void 0 : t.success) && c((null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.list) || []);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), e.apply(this, arguments)
                    }
                    t && function() {
                        e.apply(this, arguments)
                    }()
                }), [t]);
                var p = (0, r.useMemo)((function() {
                    return l.map((function(t) {
                        var n = e[t.asset.toLowerCase()] || {};
                        return {
                            name: t.asset,
                            assetName: null === n || void 0 === n ? void 0 : n.assetName,
                            logo: null === n || void 0 === n ? void 0 : n.logoUrl
                        }
                    }))
                }), [l, e]);
                return (0, s.jsx)(T.Ay, {
                    style: {
                        color: "var(--color-PrimaryText)",
                        fontSize: "14px",
                        overflow: "auto",
                        marginTop: "16px"
                    },
                    children: (0, s.jsxs)(T.Ay, {
                        className: "holding",
                        style: {
                            display: (null === p || void 0 === p ? void 0 : p.length) > 0 ? "block" : "none"
                        },
                        children: [(0, s.jsx)(vt, {
                            title: d("trd-holdings-crypto"),
                            tip: d("trd-holdings-crypto-tip"),
                            tipStyle: {
                                marginBottom: "4px",
                                marginLeft: "16px",
                                marginRight: "16px",
                                display: "inline-block",
                                color: "var(--color-PrimaryText)",
                                fontWeight: "500"
                            }
                        }), p.map((function(e) {
                            return (0, s.jsx)(It, {
                                coin: null === e || void 0 === e ? void 0 : e.name,
                                logo: null === e || void 0 === e ? void 0 : e.logo,
                                assetName: null === e || void 0 === e ? void 0 : e.assetName,
                                tickers: i,
                                onClick: function(t) {
                                    return u(t, null === e || void 0 === e ? void 0 : e.name)
                                }
                            })
                        }))]
                    })
                })
            };
            const Mt = a().memo(Pt);
            var Rt = n("px+e"),
                Dt = function(e) {
                    var t = e.top10Normal,
                        n = e.top5FAIT,
                        i = (0, W.mR)().nextTickers,
                        r = (0, X.G)(i, "symbol"),
                        a = (0, x.CUO)().getI18n,
                        o = function(e, t) {
                            e && e.stopPropagation(), e && e.preventDefault(), X.RR.emit(X.qY.TRIGGER_MARKET_TEXT, t)
                        };
                    (0, x.FCl)();
                    return (0, s.jsxs)(T.Ay, {
                        className: "text-PrimaryText font-[14px] overflow-auto mt-[12px]",
                        children: [(0, s.jsxs)(T.Ay, {
                            className: "holding relative",
                            style: {
                                display: (null === t || void 0 === t ? void 0 : t.length) > 0 ? "block" : "none"
                            },
                            children: [(0, s.jsx)(vt, {
                                title: a("holdings-crypto"),
                                tip: a("holdings-crypto-tip"),
                                tipStyle: {
                                    marginBottom: "4px",
                                    marginLeft: "16px",
                                    marginRight: "16px",
                                    display: "inline-block",
                                    color: "var(--color-PrimaryText)",
                                    fontWeight: "500"
                                }
                            }), t.map((function(e) {
                                return (0, s.jsx)(It, {
                                    coin: null === e || void 0 === e ? void 0 : e.name,
                                    logo: null === e || void 0 === e ? void 0 : e.logo,
                                    assetName: null === e || void 0 === e ? void 0 : e.assetName,
                                    tickers: r,
                                    onClick: function(t) {
                                        return o(t, null === e || void 0 === e ? void 0 : e.name)
                                    }
                                })
                            })), (0, s.jsx)(Rt.K, {
                                style: {
                                    right: "16px",
                                    top: "0px"
                                }
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "holding",
                            style: {
                                display: (null === n || void 0 === n ? void 0 : n.length) > 0 ? "block" : "none",
                                cursor: "pointer",
                                marginTop: "16px"
                            },
                            children: [(0, s.jsx)(vt, {
                                title: a("holdings-fait"),
                                tip: a("holdings-fait-tip"),
                                tipStyle: {
                                    marginBottom: "4px",
                                    marginLeft: "16px",
                                    marginRight: "16px",
                                    display: "inline-block",
                                    color: "var(--color-PrimaryText)",
                                    fontWeight: "500"
                                }
                            }), n.map((function(e, t) {
                                return (0, s.jsx)(It, {
                                    coin: null === e || void 0 === e ? void 0 : e.name,
                                    logo: null === e || void 0 === e ? void 0 : e.logo,
                                    assetName: null === e || void 0 === e ? void 0 : e.assetName,
                                    tickers: r,
                                    onClick: function(t) {
                                        return o(t, null === e || void 0 === e ? void 0 : e.name)
                                    },
                                    isFait: !0
                                })
                            }))]
                        })]
                    })
                },
                Ft = function(e) {
                    var t = e.simpleMarket,
                        n = (0, S._)(e, ["simpleMarket"]);
                    return t ? (0, s.jsx)(Mt, {}) : (0, s.jsx)(Dt, (0, j._)({}, n))
                };
            const Lt = a().memo(Ft);
            var _t = n("GqbV"),
                Bt = n("4hgs"),
                Et = ["MAIN", "CARD", "MARGIN"],
                Ot = function(e) {
                    var t = function(e) {
                            var t = (0, x.nHk)(),
                                n = (0, Bt.useQuery)("WALLET_BALNACE", (function() {
                                    return (0, _t.BW)({
                                        needBalanceDetail: !0,
                                        quoteAsset: "BTC"
                                    })
                                }), {
                                    enabled: e && Boolean(t),
                                    staleTime: 36e5
                                }),
                                i = n.isLoading;
                            return {
                                balance: n.data || [],
                                isLoading: i,
                                isFetched: n.isFetched
                            }
                        }(e),
                        n = t.balance,
                        s = t.isLoading,
                        r = t.isFetched,
                        a = (0, x.oOR)().FAITMap,
                        o = n.filter((function(e) {
                            return Et.indexOf(null === e || void 0 === e ? void 0 : e.accountType) >= 0 && (null === e || void 0 === e ? void 0 : e.assetBalances)
                        })).reduce((function(e, t) {
                            return t.assetBalances.map((function(t) {
                                (null === e || void 0 === e ? void 0 : e[null === t || void 0 === t ? void 0 : t.asset]) ? e[null === t || void 0 === t ? void 0 : t.asset] = {
                                    name: t.asset,
                                    assetName: t.assetName,
                                    logo: null === t || void 0 === t ? void 0 : t.logoUrl,
                                    btcValue: Number(e[null === t || void 0 === t ? void 0 : t.transferBtc] || 0) + Number(null === t || void 0 === t ? void 0 : t.transferBtc)
                                }: e[null === t || void 0 === t ? void 0 : t.asset] = {
                                    name: t.asset,
                                    assetName: t.assetName,
                                    logo: null === t || void 0 === t ? void 0 : t.logoUrl,
                                    btcValue: Number((null === t || void 0 === t ? void 0 : t.transferBtc) || 0)
                                }
                            })), e
                        }), {}),
                        l = Object.entries(o).sort((function(e, t) {
                            var n, i;
                            return Number(null === (n = t[1]) || void 0 === n ? void 0 : n.btcValue) - Number(null === (i = e[1]) || void 0 === i ? void 0 : i.btcValue)
                        })).map((function(e) {
                            var t = (0, i._)(e, 2);
                            t[0];
                            return t[1]
                        })).filter((function(e) {
                            return !a[null === e || void 0 === e ? void 0 : e.name]
                        })).slice(0, 10),
                        c = Object.entries(o).sort((function(e, t) {
                            var n, i;
                            return Number(null === (n = t[1]) || void 0 === n ? void 0 : n.btcValue) - Number(null === (i = e[1]) || void 0 === i ? void 0 : i.btcValue)
                        })).map((function(e) {
                            var t = (0, i._)(e, 2);
                            t[0];
                            return t[1]
                        })).filter((function(e) {
                            return a[null === e || void 0 === e ? void 0 : e.name]
                        })).slice(0, 5);
                    return {
                        isLoading: s,
                        isFetched: r,
                        top10: l,
                        top10Normal: l,
                        top5FAIT: c
                    }
                },
                Ht = n("O8av");
            const zt = (0, r.memo)((function(e) {
                var t = e.value,
                    n = e.change,
                    i = void 0 === n ? function() {
                        return !1
                    } : n;
                return (0, s.jsx)(Ht.A, {
                    className: "w-[16px] h-[16px] text-IconNormal cursor-pointer hover:text-PrimaryText",
                    onClick: function(e) {
                        e.stopPropagation(), i("change" === t ? "volume" : "change")
                    }
                })
            }));
            var Vt = function() {
                    var e = (0, x.ok2)().getI18n,
                        t = (0, x.DYq)();
                    return (0, s.jsxs)(P.A, {
                        className: "flex-row items-center justify-between px-[16px] mb-[8px] text-[12px] text-TertiaryText min-h-[18px]",
                        children: [(0, s.jsx)(P.A, {
                            className: "name items-start min-w-[62px]",
                            style: {
                                flex: "6 1 0px"
                            },
                            children: e("trd-funds-coin")
                        }), (0, s.jsx)(T.Ay, {
                            className: "lastprice",
                            style: {
                                textAlign: "end",
                                flex: "5 1 0px"
                            },
                            children: e("trd-market-price")
                        }), (0, s.jsx)(T.Ay, {
                            className: "chart",
                            style: {
                                minWidth: "80px",
                                display: "flex",
                                paddingRight: "4px",
                                justifyContent: "flex-end",
                                flex: "6 1 0px"
                            },
                            children: e(t ? "trd-market-change" : "trd-ticker-change")
                        })]
                    })
                },
                Wt = function(e) {
                    var t = e.coin,
                        n = e.logo,
                        i = (e.assetName, e.tickers),
                        r = e.getFiatPrice,
                        a = e.changeSymbol,
                        o = e.itemData,
                        l = o.symbol,
                        c = o.baseAsset,
                        d = o.quoteAsset,
                        u = i[l] || {},
                        p = u.difference,
                        m = void 0 === p ? 0 : p,
                        h = u.lastPrice,
                        f = void 0 === h ? "--" : h,
                        v = u.tickSize,
                        y = void 0 === v ? 1e-7 : v,
                        g = (0, x.xkU)(y),
                        b = (0, (0, x.ttu)(g).format)(Number(f)),
                        j = (0, Nt.e)(m),
                        w = r(f, d),
                        S = w.symbol,
                        N = w.fiatPrice;
                    return (0, s.jsxs)(P.A, {
                        onClick: function() {
                            a({
                                resPathList: ["".concat(c, "_").concat(d)]
                            })
                        },
                        className: "flex-row items-start justify-between h-[40px] px-[16px] mb-[4px] text-[12px] text-PrimaryText cursor-pointer hover:bg-bg3",
                        children: [(0, s.jsxs)(P.A, {
                            className: "name flex flex-row items-center min-w-[62px] leading-[22px]",
                            style: {
                                flex: "6 1 0px"
                            },
                            children: [(0, s.jsx)(Tt.A, {
                                className: "logo h-[16px] w-[16px] max-w-[16px] min-w-[16px] mr-[4px]",
                                src: n
                            }), (0, s.jsx)(T.Ay, {
                                className: "text-[12px] font-[400]",
                                children: t
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            className: "lastprice",
                            style: {
                                textAlign: "end",
                                fontSize: "14px",
                                flex: "5 1 0px"
                            },
                            children: [(0, s.jsx)(T.Ay, {
                                className: "text-PrimaryText leading-[22px] text-[12px] font-[400]",
                                children: b
                            }), (0, s.jsx)(T.Ay, {
                                className: "text-SecondaryText text-[12px]",
                                children: "--" === f ? "--" : "".concat(S).concat(N)
                            })]
                        }), (0, s.jsxs)(T.Ay, {
                            style: {
                                minWidth: "80px",
                                flex: "6 1 0px",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                color: j
                            },
                            className: "text-[12px] leading-[22px]",
                            children: [m, "%"]
                        })]
                    })
                };
            const Kt = a().memo(Wt);
            var qt = n("zHUU"),
                Ut = n("MiNH"),
                Yt = n("uk6W"),
                Gt = n("lhQG"),
                Xt = n.n(Gt),
                Jt = n("JL31"),
                Qt = n.n(Jt);
            Le().extend(Qt()), Le().extend(Xt());
            var $t = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC"];

            function Zt(e) {
                var t = Le()(),
                    n = Le()(e).diff(t);
                if (n <= 0) return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    noTime: !0
                };
                var i = Le().duration(n);
                return {
                    days: Math.floor(i.asDays()),
                    hours: i.hours(),
                    minutes: i.minutes(),
                    seconds: i.seconds(),
                    noTime: !1
                }
            }
            var en = function(e) {
                    var t = e.info,
                        n = e.comingListings,
                        i = void 0 === n ? [] : n,
                        r = t.currentIndex,
                        a = t.onClick;
                    return (0, s.jsx)("div", {
                        className: "flex w-full justify-center gap-[5px] relative bottom-[9px]",
                        children: i.length > 1 && i.map((function(e, t) {
                            return (0, s.jsx)("div", {
                                className: "!h-[3px] !w-[8px] cursor-pointer ".concat(r === t ? "bg-PrimaryText" : "bg-DisableBtn"),
                                "data-active": r === t,
                                onClick: function() {
                                    a(t)
                                }
                            }, t)
                        }))
                    })
                },
                tn = function(e) {
                    var t, n = e.item,
                        i = e.logos,
                        a = e.NotOpenCoinMap,
                        o = e.NotOpenSymbolMap,
                        l = e.changeSymbol,
                        c = e.reFresh,
                        d = null === n || void 0 === n ? void 0 : n.baseAsset,
                        u = (0, x.ok2)().getI18n,
                        p = (null === (t = a[d]) || void 0 === t ? void 0 : t.listingTime) || Le()().endOf("day"),
                        m = (0, r.useState)({
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        }),
                        h = m[0],
                        f = m[1],
                        v = h.days,
                        y = h.hours,
                        g = h.minutes,
                        b = h.seconds;
                    return (0, r.useEffect)((function() {
                        var e = Zt(p);
                        f(e);
                        var t = setInterval((function() {
                            var e = Zt(p);
                            0 == (null === e || void 0 === e ? void 0 : e.days) && 0 == (null === e || void 0 === e ? void 0 : e.hours) && 0 == (null === e || void 0 === e ? void 0 : e.minutes) && 0 == (null === e || void 0 === e ? void 0 : e.seconds) ? c() : f(e)
                        }), 1e3);
                        return function() {
                            clearInterval(t)
                        }
                    }), [p]), (0, s.jsxs)(P.A, {
                        className: "flex-row justify-between items-center mt-[12px] text-PrimaryText",
                        onClick: function(e) {
                            var t, n;
                            e && e.stopPropagation();
                            for (var i = 0; i < $t.length; i++)
                                if (o["".concat(d).concat($t[i])]) {
                                    t = $t[i], l({
                                        resPathList: ["".concat(d, "_").concat($t[i])]
                                    });
                                    break
                                }
                            t || l({
                                resPathList: ["".concat(d, "_").concat(null === (n = a[d]) || void 0 === n ? void 0 : n.quoteAsset)]
                            })
                        },
                        children: [(0, s.jsxs)(P.A, {
                            className: "flex-row justify-between items-center ml-[12px]",
                            children: [(0, s.jsx)("img", {
                                className: "coin-logo w-[16px] h-[16px]",
                                src: i[d]
                            }), (0, s.jsx)("div", {
                                className: "text-[12px] font-[500] ml-[4px]",
                                children: d
                            })]
                        }), (0, s.jsxs)(P.A, {
                            className: "flex-col justify-end items-end mr-[12px]",
                            children: [(0, s.jsx)("div", {
                                className: "text-[12px] text-SecondaryText",
                                children: u("trd-market-op-trade")
                            }), (0, s.jsxs)("div", {
                                className: "text-[12px] font-[500]",
                                children: [(0, s.jsxs)("span", {
                                    className: "".concat(v <= 0 ? "hidden" : ""),
                                    children: [v, u("trd-market-op-D", {
                                        defaultValue: "D"
                                    }), (0, s.jsx)("span", {
                                        className: "mx-[4px]",
                                        children: ":"
                                    })]
                                }), (0, s.jsxs)("span", {
                                    children: [y, u("trd-market-op-H", {
                                        defaultValue: "H"
                                    }), (0, s.jsx)("span", {
                                        className: "mx-[4px]",
                                        children: ":"
                                    })]
                                }), (0, s.jsxs)("span", {
                                    children: [g, u("trd-market-op-M", {
                                        defaultValue: "M"
                                    }), (0, s.jsx)("span", {
                                        className: "".concat(v > 0 ? "hidden" : "mx-[4px]"),
                                        children: ":"
                                    })]
                                }), (0, s.jsxs)("span", {
                                    className: "".concat(v > 0 ? "hidden" : ""),
                                    children: [b, u("trd-market-op-S", {
                                        defaultValue: "S"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                nn = function(e) {
                    var t = e.NotOpenCoinList,
                        n = e.NotOpenCoinMap,
                        i = e.ReFreshlist,
                        r = e.NotOpenSymbolMap,
                        a = e.logos,
                        o = (null === t || void 0 === t ? void 0 : t.length) > 0 || !1,
                        l = (0, m.o)();
                    return o ? (0, s.jsx)("div", {
                        className: "min-h-[64px] mx-[16px] mb-[8px] rounded-[12px] border-Line border-solid border-[1px]",
                        children: (0, s.jsx)(Yt.A, {
                            initialSlide: 0,
                            circular: !0,
                            autoplay: !0,
                            customPagination: function(e) {
                                return (0, s.jsx)(en, {
                                    info: e,
                                    comingListings: t
                                })
                            },
                            className: "cn",
                            children: t.map((function(e) {
                                return (0, s.jsx)(Yt.w, {
                                    children: (0, s.jsx)(tn, {
                                        item: e,
                                        logos: a,
                                        NotOpenCoinMap: n,
                                        reFresh: i,
                                        NotOpenSymbolMap: r,
                                        changeSymbol: l
                                    })
                                }, null === e || void 0 === e ? void 0 : e.symbol)
                            }))
                        })
                    }) : (0, s.jsx)(s.Fragment, {})
                },
                sn = function(e) {
                    var t = e.data,
                        n = e.logos,
                        i = e.getFiatPrice,
                        r = (0, W.mR)().nextTickers,
                        a = (0, X.G)(r, "symbol"),
                        o = (0, m.o)();
                    return (0, s.jsx)(T.Ay, {
                        className: "text-PrimaryText font-[14px] overflow-auto pb-[8px]",
                        children: t.map((function(e) {
                            return (0, s.jsx)(Kt, {
                                coin: null === e || void 0 === e ? void 0 : e.baseAsset,
                                logo: null === n || void 0 === n ? void 0 : n[null === e || void 0 === e ? void 0 : e.baseAsset],
                                assetName: null === e || void 0 === e ? void 0 : e.fullName,
                                tickers: a,
                                getFiatPrice: i,
                                changeSymbol: o,
                                itemData: e
                            })
                        }))
                    })
                },
                rn = function(e) {
                    var t = e.simpleMarket,
                        n = e.filterFunc,
                        i = (0, r.useState)([]),
                        a = i[0],
                        o = i[1],
                        l = function() {
                            var e = (0, r.useState)([]),
                                t = e[0],
                                n = e[1],
                                i = (0, r.useState)({}),
                                s = i[0],
                                a = i[1],
                                o = (0, r.useState)({}),
                                l = o[0],
                                c = o[1],
                                d = (0, r.useState)([]),
                                x = d[0],
                                u = d[1],
                                p = (0, r.useState)([]),
                                m = p[0],
                                h = p[1],
                                f = (0, r.useState)([]),
                                v = f[0],
                                y = f[1],
                                g = (0, r.useState)(0),
                                b = g[0],
                                j = g[1],
                                w = (0, r.useState)({}),
                                S = w[0],
                                N = w[1],
                                A = (0, r.useState)(!0),
                                T = A[0],
                                k = A[1],
                                C = (0, qt.Bl)();
                            return (0, r.useEffect)((function() {
                                var e = [],
                                    t = {},
                                    i = [],
                                    s = {},
                                    r = {},
                                    o = [],
                                    l = {};
                                (0, Ut.XW)().then((function(d) {
                                    d.map((function(n) {
                                        1 === n.listingCountdown && null != n.listingTime && Le()(n.listingTime).isAfter(Le()()) && (e.push(n), t[n.baseAsset] || i.push(n), t[n.baseAsset] = n, s["".concat(n.baseAsset).concat(n.quoteAsset)] = n), n.tagInfos && n.tagInfos.find((function(e) {
                                            return "newListing" === e.tag
                                        })) && !l[n.baseAsset] && (l[n.baseAsset] = n, o.push(n)), r["".concat(n.baseAsset).concat(n.quoteAsset)] = n
                                    })), n(e), c(t), u(i), a(s), h(d), N(r), y(o), k(!1)
                                })).catch((function() {
                                    k(!1)
                                }))
                            }), [C, b]), {
                                NotOpenSymbolList: t,
                                NotOpenCoinMap: l,
                                RawData: m,
                                NotOpenCoinList: x,
                                reFresh: function() {
                                    j((new Date).valueOf())
                                },
                                ReFreshlist: function() {
                                    var e = [],
                                        t = {},
                                        i = [];
                                    m.map((function(n) {
                                        1 === n.listingCountdown && null != n.listingTime && Le()(n.listingTime).isAfter(Le()()) && (e.push(n), t[n.baseAsset] || i.push(n), t[n.baseAsset] = n)
                                    })), n(e), c(t), u(i)
                                },
                                NotOpenSymbolMap: s,
                                RawDataMap: S,
                                Loading: T,
                                newListing: v
                            }
                        }(),
                        c = l.NotOpenCoinList,
                        d = l.NotOpenCoinMap,
                        u = l.ReFreshlist,
                        p = l.NotOpenSymbolMap,
                        m = l.RawDataMap,
                        f = l.Loading,
                        v = l.newListing,
                        y = (0, x.$X2)(),
                        g = (0, h.eY)();
                    return (0, r.useEffect)((function() {
                        if (!f) {
                            var e = c.map((function(e) {
                                    return null === e || void 0 === e ? void 0 : e.baseAsset
                                })),
                                t = v.sort((function(e, t) {
                                    var n, i;
                                    return Number((null === m || void 0 === m || null === (n = m[null === t || void 0 === t ? void 0 : t.symbol]) || void 0 === n ? void 0 : n.listingTime) || 0) - Number((null === m || void 0 === m || null === (i = m[null === e || void 0 === e ? void 0 : e.symbol]) || void 0 === i ? void 0 : i.listingTime) || 0)
                                })).filter((function(t) {
                                    return !e.includes(null === t || void 0 === t ? void 0 : t.baseAsset)
                                })).slice(0, 10);
                            o(t)
                        }
                    }), [n, m, c]), t || f ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsxs)("div", {
                        className: "text-PrimaryText font-[14px] overflow-hidden mt-[12px] flex flex-col",
                        children: [(0, s.jsx)(Vt, {}), (0, s.jsx)(nn, {
                            NotOpenCoinList: c,
                            NotOpenCoinMap: d,
                            ReFreshlist: u,
                            NotOpenSymbolMap: p,
                            logos: g
                        }), (0, s.jsx)(sn, {
                            data: a,
                            logos: g,
                            getFiatPrice: y
                        })]
                    })
                };
            const an = a().memo(rn);
            var on, ln = n("iKvg"),
                cn = (on = {}, (0, ln._)(on, D.YY, "Market_favorite"), (0, ln._)(on, D.ID, "Market_holdings"), (0, ln._)(on, D.kM, "Market_New"), on),
                dn = d.Gr.SPOT,
                xn = function(e) {
                    return e.stopPropagation()
                },
                un = function(e) {
                    var t = e.noFiat,
                        n = e.placement,
                        a = void 0 === n ? "right" : n,
                        f = e.showCoinInfo,
                        y = void 0 === f || f,
                        g = e.withVolume,
                        b = void 0 !== g && g,
                        j = e.h,
                        w = e.electronUpdateTabs,
                        S = e.openShotCut,
                        N = e.selectedCallback,
                        A = e.changeSymbolCb,
                        T = e.marginLeft,
                        k = void 0 === T ? 0 : T,
                        C = e.bgColor,
                        I = void 0 === C ? "moduleBg" : C,
                        P = e.simpleMarket,
                        M = e.symbolsInfo,
                        R = e.searchFocus,
                        F = e.setSearchFocus,
                        L = (0, r.useState)(0),
                        _ = L[0],
                        B = L[1],
                        E = (0, r.useState)(!1),
                        O = E[0],
                        H = E[1],
                        z = (0, x.i24)(),
                        K = (0, o.wA)(),
                        q = (0, x.vzt)(),
                        U = (0, u.h1)().putCoachMarkStep,
                        Y = (0, te.v)(),
                        G = (0, x.CUO)().getI18n,
                        X = (0, o.d4)((function(e) {
                            return e.setting.layout
                        })),
                        J = (0, i._)((0, l.A)("spotSortNewV2"), 2),
                        Q = J[0],
                        $ = J[1],
                        Z = (0, W.kz)(),
                        ee = (0, o.d4)((function(e) {
                            return e.market.sortInfo
                        })),
                        ne = (0, i._)((0, p.wY)(), 2),
                        ie = ne[0],
                        se = ne[1],
                        re = (0, r.useMemo)((function() {
                            return !!z
                        }), [z]),
                        ae = (0, r.useState)(!1),
                        oe = ae[0],
                        le = ae[1],
                        ce = se.height,
                        de = se.width,
                        xe = (0, r.useRef)(),
                        ue = (0, W._g)(),
                        pe = ue.setHistory,
                        me = ue.clearHistory,
                        he = ue.historyData;
                    (0, h.eY)(), (0, r.useEffect)((function() {
                        ce && B(ce)
                    }), [j, ce]), (0, r.useEffect)((function() {
                        X === d.Pv && U("tradeGuide", 0, {
                            title: G("ticker-guide-title"),
                            content: G("ticker-guide-content"),
                            target: xe,
                            position: "left-start"
                        })
                    }), [X, G, U, ie]);
                    var fe = (0, W.Qu)(Z),
                        ve = fe.tabState,
                        ye = ve.activeTab,
                        ge = ve.switchTab,
                        be = ve.isFirstInitialLocal,
                        je = fe.subTabState,
                        we = je.activeSubTab,
                        Se = je.switchSubTab,
                        Ne = je.subTabList,
                        Ae = fe.searchState,
                        Te = Ae.keyword,
                        Ce = Ae.search,
                        Ie = fe.filterFunc,
                        Pe = X !== d.Pv && !(de < 394),
                        Me = (0, W.WG)({
                            activeTab: ye,
                            activeSubTab: we,
                            withVolume: b,
                            noFiat: t,
                            disableSortHeaderRender: Pe,
                            isBasicLayout: X === d.Pv
                        }),
                        Re = Me.sortFunc,
                        De = Me.headers,
                        Fe = (0, m.o)();
                    Fe = A || Fe;
                    var Le = (0, c.Z)((function(e) {
                            var t = e.symbol,
                                n = e.base,
                                i = e.quote;
                            we === D.yt && K.userProfile.save({
                                key: "tradeType",
                                value: dn
                            }), Fe({
                                resPathList: t,
                                electronUpdateTabs: w,
                                activeSubTab: we,
                                activeTab: ye,
                                base: n,
                                quote: i
                            }), Te && "" !== Te && pe("".concat(n).concat(i)), N && N()
                        })),
                        _e = O && ("" === Te || !Te),
                        Be = ye === D.ID && ("" === Te || !Te),
                        Ee = ye === D.kM && ("" === Te || !Te),
                        Oe = Ot(!0),
                        He = Oe.top10,
                        Ve = Oe.top10Normal,
                        We = Oe.top5FAIT,
                        Ke = Oe.isFetched,
                        qe = !!q.isLoggedIn && (P || He && !!He.length),
                        Ue = q.isLoading ? void 0 : !q.isLoggedIn || Ke,
                        Ye = (0, r.useCallback)((function(e) {
                            K.market.updateState({
                                sortInfo: e
                            })
                        }), [K.market]),
                        Ge = (0, r.useCallback)((function(e) {
                            ge(e),
                                function(e) {
                                    var t = cn[e] || e;
                                    console.log("type", e, t), (0, ke.u4)("$WebClick", {
                                        module: "market",
                                        $element_id: t,
                                        element_id: t
                                    })
                                }(e)
                        }), [K.userProfile, ge, Z]);
                    (0, r.useEffect)((function() {
                        Q ? Ye(Q) : ye === D.YY ? Ye({
                            symbol: "default"
                        }) : Ye({
                            symbol: "ascend"
                        })
                    }), [ye, Q, Ye]);
                    return (0, s.jsxs)("div", {
                        className: "marketWrap flex flex-col h-full",
                        onMouseEnter: function() {
                            le(!0)
                        },
                        ref: ie,
                        style: {
                            marginLeft: k
                        },
                        children: [(0, s.jsxs)("div", {
                            onClick: xn,
                            children: [(0, s.jsx)(Je, {
                                value: Te,
                                search: Ce,
                                openShotCut: S,
                                setShowHotSearch: H,
                                searchFocus: R,
                                setSearchFocus: F,
                                showHotSearch: !_e
                            }), (0, s.jsxs)("div", {
                                style: _e ? {
                                    display: "none"
                                } : {},
                                children: [(0, s.jsx)("div", {
                                    className: "border-t-0 border-r-0 border-l-0 border-b-[1px] border-solid border-b-Line",
                                    ref: xe,
                                    children: (0, s.jsx)(ot, {
                                        tabInfo: Z,
                                        activeTab: ye,
                                        setTab: Ge,
                                        onClick: xn,
                                        bgColor: I,
                                        simpleMarket: P,
                                        hasHolding: qe,
                                        isHoldingFetched: Ue,
                                        isFirstInitialLocal: be,
                                        keyword: Te
                                    })
                                }), Ne.length > 0 && (0, s.jsx)("div", {
                                    className: "px-[16px]",
                                    children: (0, s.jsx)(xt, {
                                        activeTab: we,
                                        setTab: Se,
                                        list: Ne,
                                        onClick: xn,
                                        bgColor: I,
                                        rectWidth: de
                                    })
                                }), !Be && !Ee && (0, s.jsx)("div", {
                                    className: "px-[16px] ".concat(X === d.Pv ? "mt-[12px] mb-[8px]" : "mt-[12px] mb-[4px]"),
                                    children: (0, s.jsx)(v, {
                                        group: De,
                                        active: ee,
                                        getGroupOrderKey: function(e) {
                                            $(e), Ye(e)
                                        },
                                        showSort: !Te,
                                        showsubTab: Ne.length > 0,
                                        renderProps: X === d.Pv ? (0, s.jsx)(zt, {
                                            value: Y,
                                            change: function(e) {
                                                K.market.updateState({
                                                    radioWord: e
                                                })
                                            }
                                        }) : (0, s.jsx)(s.Fragment, {})
                                    })
                                })]
                            })]
                        }), _e && (0, s.jsx)(ft, {
                            changeSymbol: Le,
                            clearHistory: me,
                            setHistory: pe,
                            historyData: he,
                            showThreeCol: Pe
                        }), !_e && Be && (0, s.jsx)(Lt, {
                            top10Normal: Ve,
                            top5FAIT: We,
                            simpleMarket: P
                        }), !_e && Ee && (0, s.jsx)(an, {
                            simpleMarket: P,
                            filterFunc: Ie
                        }), !_e && !Be && !Ee && (0, s.jsx)(ze, {
                            filterFunc: Ie,
                            sortFunc: Re,
                            noFiat: t,
                            noMargin: re,
                            placement: a,
                            changeSymbol: Le,
                            openShotCut: S,
                            activeTab: ye,
                            activeSubTab: we,
                            keyword: Te,
                            rectWidth: de,
                            openForthLabel: Pe,
                            simpleMarket: P,
                            showTips: oe
                        }), !!y && _ > D.l7 && !_e && (0, s.jsx)(V, {
                            symbolsInfo: M
                        })]
                    })
                };
            const pn = a().memo(un)
        },
        "u/9F": (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var i = n("mXdx"),
                s = n("DTvD"),
                r = n.n(s),
                a = n("2IQ4"),
                o = n("zX7I"),
                l = function(e) {
                    var t = e.show,
                        n = e.onRefresh;
                    return t ? (0, i.jsx)(a.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.05), transparent)",
                            zIndex: 100
                        },
                        children: (0, i.jsx)(o.A, {
                            variant: "outline",
                            onClick: function(e) {
                                e.stopPropagation(), n && n()
                            },
                            sx: {
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                px: "xs",
                                py: "minor",
                                fontSize: 1,
                                bg: "background",
                                borderRadius: "default",
                                color: "t.primary"
                            },
                            children: "try again"
                        })
                    }) : null
                };
            const c = r().memo(l)
        }
    }
]);