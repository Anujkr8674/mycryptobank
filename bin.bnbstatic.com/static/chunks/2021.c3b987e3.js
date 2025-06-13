"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2021], {
        CSRd: (e, t, n) => {
            n.d(t, {
                I: () => l
            });
            var r = n("S+0I"),
                i = n("66mo"),
                a = n.n(i),
                o = n("VA12"),
                l = function() {
                    var e = (0, r._)(a().mark((function e(t) {
                        var n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        data: []
                                    }, e.prev = 1, e.next = 4, (0, o.get)("/bapi/margin/v1/friendly/isolated-margin/ladder/".concat(t));
                                case 4:
                                    n = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", n);
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
                }()
        },
        "dNK/": (e, t, n) => {
            n.d(t, {
                A: () => f
            });
            var r = n("b6CO"),
                i = n("KrVi"),
                a = n("mguP"),
                o = n("DTvD"),
                l = n.n(o),
                s = n("ZWPC"),
                c = n("2IQ4"),
                u = n("GIr8"),
                d = (0, s.UF)("uikit-core", "Switch"),
                h = (0, o.forwardRef)((function(e, t) {
                    var n = e.defaultChecked,
                        o = void 0 !== n && n,
                        s = e.checked,
                        h = e.size,
                        f = void 0 === h ? 24 : h,
                        p = e.color,
                        v = void 0 === p ? "primaryGradient" : p,
                        m = e.onClick,
                        b = e.onChange,
                        g = e.name,
                        x = e.disabled,
                        C = e.icon,
                        y = void 0 === C ? null : C,
                        w = e.reverseDirection,
                        _ = (0, i._)(e, ["defaultChecked", "checked", "size", "color", "onClick", "onChange", "name", "disabled", "icon", "reverseDirection"]);
                    d();
                    var E = l().useRef(null != s).current,
                        B = (0, a._)(l().useState(o), 2),
                        A = B[0],
                        k = B[1];
                    E && s !== A && k(void 0 !== s && s);
                    var N = Math.abs(f),
                        S = Math.round(5 * N / 3),
                        R = 18 * N / 24,
                        K = N / 24 * 3;
                    return l().createElement(c.A, (0, r._)({
                        ref: t,
                        as: "button",
                        type: "button",
                        role: "switch",
                        style: {
                            direction: "ltr"
                        },
                        disabled: x,
                        "aria-checked": A,
                        onClick: function(e) {
                            if (!x) {
                                var t = !A;
                                E || k(t), e.target.checked = t, m && m(e), b && b(e)
                            }
                        }
                    }, _, {
                        sx: {
                            cursor: "pointer",
                            appearance: "none",
                            m: 0,
                            p: 0,
                            width: S,
                            height: N,
                            bg: function(e) {
                                return e.colors && e.colors.disableBg
                            },
                            backgroundImage: function(e) {
                                return e.colors && e.colors.disableBg
                            },
                            border: "none",
                            borderRadius: 9999,
                            "&[aria-checked=true]": {
                                bg: function(e) {
                                    return e.colors && e.colors[v] || v
                                },
                                backgroundImage: function(e) {
                                    return e.colors && e.colors[v]
                                }
                            },
                            ":focus": {
                                outline: "none"
                            },
                            ":disabled": {
                                cursor: "not-allowed",
                                opacity: .7
                            }
                        }
                    }), l().createElement(u.A, {
                        style: {
                            transform: "translateX(".concat(A ? w ? 0 : S - 2 * K - R : w ? S - 2 * K - R : 0, "px)")
                        },
                        sx: {
                            mx: "".concat(K, "px"),
                            width: R,
                            height: R,
                            borderRadius: 9999,
                            boxShadow: "card",
                            bg: "t.white",
                            transitionProperty: "transform, border-color",
                            transitionTimingFunction: "ease-in-out",
                            transitionDuration: "".concat(.2, "s"),
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, y), l().createElement(c.A, {
                        as: "input",
                        type: "checkbox",
                        "data-bn-type": "checkbox",
                        onChange: function() {},
                        name: g,
                        checked: A,
                        __css: {
                            display: "none"
                        }
                    }))
                }));
            h.displayName = "Switch";
            const f = h
        },
        k8Ym: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("b6CO"),
                i = n("DTvD"),
                a = n.n(i),
                o = n("PzHQ");
            const l = function(e) {
                return a().createElement(o.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        Pc2Y: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var r = n("b6CO"),
                i = n("KrVi"),
                a = n("mguP"),
                o = n("DTvD"),
                l = n.n(o),
                s = n("2IQ4"),
                c = n("GIr8"),
                u = n("Vhyo"),
                d = n("xqbL"),
                h = n.n(d),
                f = "32px",
                p = "24px",
                v = (0, o.forwardRef)((function(e, t) {
                    var n = e.children,
                        i = e.labelMarginLeft,
                        a = e.moveUp,
                        o = e.isLargeOutline,
                        c = e.required;
                    return n ? l().createElement(s.A, (0, r._)({
                        ref: t,
                        as: "label",
                        className: h()({
                            "bn-input-label-required": c
                        }, "bn-input-label"),
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            pointerEvents: a ? "" : "none",
                            top: a ? "-".concat(o ? p : f) : 0,
                            left: i,
                            lineHeight: o ? p : f,
                            transitionProperty: "top,font-size",
                            transitionDuration: ".3s",
                            transitionTimingFunction: "ease",
                            zIndex: "1",
                            cursor: "text",
                            "&.bn-input-label-required::before": {
                                display: "inline-block",
                                marginRight: "minor",
                                color: "error",
                                content: '"*"'
                            }
                        }
                    })) : null
                }));
            v.displayName = "TextFieldLabel";
            var m = (0, o.forwardRef)((function(e, t) {
                var n = e.onFocus,
                    a = e.onBlur,
                    o = e.onChange,
                    c = e.type,
                    u = (0, i._)(e, ["onFocus", "onBlur", "onChange", "type"]),
                    d = "number" === c ? {
                        lang: "en"
                    } : {};
                return l().createElement(s.A, (0, r._)({
                    ref: t,
                    as: "input",
                    "data-bn-type": "input"
                }, d, u, {
                    type: c,
                    onFocus: n,
                    onBlur: a,
                    onChange: o,
                    __css: {
                        width: "100%",
                        height: "100%",
                        padding: "0",
                        outline: "none",
                        border: "none",
                        bg: "inherit",
                        opacity: 1,
                        "&::placeholder": {
                            color: "t.placeholder",
                            fontSize: "14px"
                        }
                    }
                }))
            }));
            m.displayName = "TextFieldInput";
            var b = (0, o.forwardRef)((function(e, t) {
                var n = e.variant,
                    o = void 0 === n ? "default" : n,
                    d = e.id,
                    h = e.value,
                    b = e.defaultValue,
                    g = e.label,
                    x = e.labelFixed,
                    C = void 0 !== x && x,
                    y = e.placeholder,
                    w = e.error,
                    _ = e.disabled,
                    E = e.prefix,
                    B = e.suffix,
                    A = e.infoText,
                    k = void 0 === A ? "" : A,
                    N = e.errorText,
                    S = void 0 === N ? "" : N,
                    R = e.onFocus,
                    K = e.onBlur,
                    D = e.onChange,
                    T = e.boxProps,
                    M = e.required,
                    L = e.sx,
                    F = void 0 === L ? {} : L,
                    z = (0, i._)(e, ["variant", "id", "value", "defaultValue", "label", "labelFixed", "placeholder", "error", "disabled", "prefix", "suffix", "infoText", "errorText", "onFocus", "onBlur", "onChange", "boxProps", "required", "sx"]),
                    V = (0, a._)(l().useState(""), 2),
                    I = V[0],
                    P = V[1],
                    O = l().useRef(null !== h && void 0 !== h).current,
                    q = (0, a._)(l().useState(b), 2),
                    U = q[0],
                    W = q[1];
                O && h !== U && W(h);
                var H = !g || C ? y : "",
                    Q = "outline" !== o && "outlineLarge" !== o || C ? "0px" : "xs",
                    G = w ? "error" : "info",
                    Y = "inline" === o ? "" : w ? S : k,
                    Z = "inline" !== o ? "" : w ? S : "focus" === I ? k : "",
                    j = "outlineLarge" === o,
                    X = _ ? "disabled" : w ? "error" : I;
                "" !== X && (X = "bn-input-status-".concat(X));
                var J = "string" === typeof g ? g : z["area-label"];
                return l().createElement(c.A, (0, r._)({
                    tx: "textField",
                    className: X,
                    variant: o
                }, T, {
                    __css: {
                        display: "inline-flex",
                        position: "relative",
                        height: j ? "40px" : f,
                        mt: g ? j ? p : f : "minor",
                        mb: Y.length > 0 ? "".concat(16, "px") : "0px",
                        alignItems: "center",
                        lineHeight: 1.6,
                        "&.bn-input-status-focus .bn-input-label": {
                            top: "-".concat(j ? p : f)
                        }
                    }
                }), E && l().createElement(s.A, {
                    className: "bn-input-prefix"
                }, E), l().createElement(m, (0, r._)({
                    id: d,
                    onFocus: function(e) {
                        P("focus"), R && R(e)
                    },
                    onBlur: function(e) {
                        P(""), K && K(e)
                    },
                    onChange: function(e) {
                        O || W(e.target.value), D && D(e)
                    },
                    ref: t,
                    value: U,
                    "aria-label": J,
                    disabled: _,
                    placeholder: H,
                    sx: F,
                    required: M
                }, z)), B && l().createElement(s.A, {
                    className: "bn-input-suffix"
                }, B), l().createElement(v, {
                    htmlFor: d,
                    labelMarginLeft: Q,
                    moveUp: C || !!U && "" !== U,
                    isLargeOutline: j,
                    required: M
                }, g), Y.length > 0 && l().createElement(u.A, {
                    className: "bn-input-helper-text",
                    variant: "textField.helperText.".concat(G),
                    __css: {
                        position: "absolute",
                        bottom: "".concat(-20, "px"),
                        lineHeight: "".concat(16, "px")
                    }
                }, Y), Z.length > 0 && l().createElement(s.A, {
                    className: "bn-input-tooltip"
                }, l().createElement(s.A, {
                    className: "bn-input-tooltip-arrow"
                }), l().createElement(s.A, {
                    className: "bn-input-tooltip-content"
                }, Z)))
            }));
            b.displayName = "TextField";
            const g = b
        },
        "8qFz": (e, t, n) => {
            n.d(t, {
                A: () => b
            });
            var r = n("Bkzn"),
                i = n("b6CO"),
                a = n("2/kH"),
                o = n("KrVi"),
                l = n("M9gu"),
                s = n("DTvD"),
                c = n.n(s),
                u = n("KRuP"),
                d = n("H8rm"),
                h = n("GIr8"),
                f = n("2IQ4"),
                p = n("ZWPC"),
                v = (0, d.A)(),
                m = (0, p.UF)("uikit-widget", "StyledSlider"),
                b = function(e) {
                    (0, a._)(n, e);
                    var t = (0, l._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), (e = t.apply(this, arguments)).displayName = "StyledSlider", e.start = 0, e.width = 0, e.isButtonMoving = !1, e.bar = c().createRef(), e.wrapper = c().createRef(), e.handleButtonDown = function() {
                            e.isButtonMoving = !0
                        }, e.handleButtonMove = function(t) {
                            e.isButtonMoving && e.handleProgressChange(t)
                        }, e.handleButtonUp = function() {
                            e.isButtonMoving = !1
                        }, e.handleProgressChange = function(t) {
                            e.setBarStartAndWidth();
                            var n = e.props,
                                r = n.progress,
                                i = n.range,
                                a = n.max,
                                o = void 0 === a ? i.max : a,
                                l = n.onChange,
                                s = ((t.pageX || t.touches && t.touches[0].pageX) - e.start) / e.width,
                                c = Math.round((i.max - i.min) * s + i.min);
                            c < i.min && (c = i.min), c > o && (c = o), c === r || Number.isNaN(c) || (requestAnimationFrame ? requestAnimationFrame((function() {
                                return l(c)
                            })) : l(c))
                        }, e
                    }
                    var s = n.prototype;
                    return s.componentDidMount = function() {
                        var e;
                        m("Slider"), this.setBarStartAndWidth(), null === (e = this.wrapper.current) || void 0 === e || e.addEventListener("mouseleave", this.handleButtonUp), window.addEventListener("mousemove", this.handleButtonMove), window.addEventListener("mouseup", this.handleButtonUp), window.addEventListener("touchmove", this.handleButtonMove), window.addEventListener("touchend", this.handleButtonUp), window.addEventListener("touchcancel", this.handleButtonUp)
                    }, s.componentWillUnmount = function() {
                        var e;
                        null === (e = this.wrapper.current) || void 0 === e || e.removeEventListener("mouseleave", this.handleButtonUp), window.removeEventListener("mousemove", this.handleButtonMove), window.removeEventListener("mouseup", this.handleButtonUp), window.removeEventListener("touchmove", this.handleButtonMove), window.removeEventListener("touchend", this.handleButtonUp), window.removeEventListener("touchcancel", this.handleButtonUp)
                    }, s.setBarStartAndWidth = function() {
                        if (this.bar.current) {
                            var e = document.documentElement.scrollLeft || document.body.scrollLeft,
                                t = this.bar.current.getBoundingClientRect();
                            this.start = t.left + e, this.width = t.right - t.left
                        }
                    }, s.render = function() {
                        var e = this.props,
                            t = e.variant,
                            n = void 0 === t ? "default" : t,
                            r = e.progress,
                            a = e.range,
                            l = e.max,
                            s = void 0 === l ? a.max : l,
                            d = e.onChange,
                            p = e.unit,
                            m = void 0 === p ? "" : p,
                            b = e.steppers,
                            g = void 0 === b ? [] : b,
                            x = e.showScales,
                            C = void 0 !== x && x,
                            y = (0, o._)(e, ["variant", "progress", "range", "max", "onChange", "unit", "steppers", "showScales"]),
                            w = Math.round((s - a.min) / (a.max - a.min) * 100),
                            _ = Math.round((r - a.min) / (s - a.min) * 100),
                            E = Math.round((r - a.min) / (a.max - a.min) * 100);
                        return c().createElement(u._y, {
                            value: v
                        }, c().createElement(h.A, (0, i._)({
                            ref: this.wrapper,
                            tx: "styledSlider",
                            variant: n
                        }, y, {
                            dir: "ltr"
                        }), c().createElement(h.A, {
                            ref: this.bar,
                            className: "bn-slider-container"
                        }, c().createElement(f.A, {
                            className: "bn-slider-available-bar",
                            width: "".concat(w, "%"),
                            onClick: this.handleProgressChange
                        }, c().createElement(f.A, {
                            className: "bn-slider-progress-bar",
                            height: "100%",
                            width: "".concat(_, "%")
                        })), c().createElement(f.A, {
                            className: "bn-slider-disabled-bar",
                            ml: "".concat(w, "%"),
                            width: "".concat(100 - w, "%")
                        }), c().createElement(f.A, {
                            className: "bn-slider-radio-button",
                            onMouseDown: this.handleButtonDown,
                            onTouchStart: this.handleButtonDown,
                            sx: {
                                ml: "".concat(E, "%")
                            }
                        }), c().createElement(f.A, {
                            className: "bn-slider-radio-tooltip",
                            as: "label",
                            sx: {
                                ml: "".concat(E, "%")
                            }
                        }, r + m), c().createElement(f.A, {
                            className: "bn-slider-stepper bn-slider-split-stepper",
                            ml: "".concat(w, "%"),
                            onClick: this.handleProgressChange
                        }), g.map((function(e) {
                            var t = Math.round((e - a.min) / (a.max - a.min) * 100),
                                n = "bn-slider-stepper";
                            return e > s && (n += " bn-slider-disabled-stepper"), e <= r && (n += " bn-slider-progress-stepper"), c().createElement(f.A, {
                                className: n,
                                key: e,
                                ml: "".concat(t, "%"),
                                onClick: function() {
                                    return e <= s && d(e)
                                }
                            }, C && c().createElement(f.A, {
                                className: "bn-slider-scale"
                            }, e + m))
                        })))))
                    }, n
                }(s.PureComponent)
        },
        "HK/T": (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var r = n("Bkzn"),
                i = n("2/kH"),
                a = n("M9gu"),
                o = n("DTvD"),
                l = n("2IQ4"),
                s = function(e) {
                    (0, i._)(n, e);
                    var t = (0, a._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), (e = t.apply(this, arguments))._rendered = !1, e
                    }
                    return n.prototype.render = function() {
                        var e = this.props,
                            t = e.tabKey,
                            n = e.sx,
                            r = e.unmountOnBlur,
                            i = void 0 !== r && r,
                            a = e.testId,
                            s = this.props,
                            c = s.activeKey === t,
                            u = !s.lazy || (!!c || !i && this._rendered);
                        return this._rendered = this._rendered || u, o.createElement(l.A, {
                            sx: n,
                            __css: {
                                display: c ? "block" : "none"
                            },
                            "data-testid": a
                        }, u && this.props.children)
                    }, n
                }(o.PureComponent)
        },
        EYCY: (e, t, n) => {
            n.d(t, {
                A: () => z
            });
            var r = n("Bkzn"),
                i = n("b6CO"),
                a = n("2/kH"),
                o = n("KrVi"),
                l = n("M9gu"),
                s = n("DTvD"),
                c = n("OlNZ"),
                u = n.n(c),
                d = n("2IQ4"),
                h = n("ZWPC"),
                f = n("hrAD"),
                p = n("qoEP"),
                v = n("k8Ym"),
                m = n("GIr8"),
                b = n("v0k2"),
                g = n.n(b);

            function x(e) {
                if (!e) return 0;
                var t = e.parentElement;
                if (!t) return 0;
                for (var n = 0, r = 0; r < t.children.length; ++r) {
                    var i = t.children[r];
                    if (e.isSameNode(i)) break;
                    n += i.getBoundingClientRect().width
                }
                var a = t.getBoundingClientRect().width;
                return n + e.getBoundingClientRect().width / 2 - a / 2
            }

            function C(e, t, n, r) {
                if (e) {
                    var i, a, o, l = e.scrollLeft,
                        s = t - l,
                        c = performance.now();
                    window.requestAnimationFrame ? function t() {
                        e && (i = performance.now(), a = (i - c) / 1e3, o = Math.min(a / n, 1), e.scrollLeft = l + s * function(e) {
                            return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                        }(o), o < 1 ? window.requestAnimationFrame(t) : r && r())
                    }() : e.scrollLeft = t
                }
            }
            var y = function(e, t) {
                    if (t && t.current) {
                        var n, r, i = t.current,
                            a = i.scrollLeft,
                            o = i.children,
                            l = Array.from(o).map((function(e) {
                                return e.offsetLeft
                            })),
                            s = (n = e, function(e) {
                                return "next" === n ? e : -1 * e
                            })(4),
                            c = (r = s, function(e) {
                                return g()([function(t) {
                                    return e.findIndex((function(e) {
                                        return t <= e
                                    }))
                                }, function(e) {
                                    return e + r
                                }, function(t) {
                                    return e[t]
                                }])
                            })(l)(a);
                        C(t.current, c, .3)
                    }
                },
                w = {
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    alignItems: "center"
                },
                _ = {
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    bg: "transparent",
                    color: "t.third",
                    cursor: "pointer"
                },
                E = function(e) {
                    var t = e.handleClick,
                        n = e.rightNode;
                    return n ? s.createElement(d.A, {
                        __css: (0, p._)((0, f._)({}, w), {
                            right: 0
                        }),
                        onClick: t
                    }, n) : s.createElement(m.A, {
                        __css: (0, p._)((0, f._)({}, w), {
                            bg: "bg1",
                            right: 0,
                            pl: "xs"
                        })
                    }, s.createElement(m.A, {
                        size: "24px",
                        __css: _,
                        onClick: function() {
                            return t()
                        }
                    }, s.createElement(v.A, {
                        size: 16
                    })))
                },
                B = function(e) {
                    var t = e.handleClick,
                        n = e.leftNode;
                    return n ? s.createElement(d.A, {
                        __css: (0, p._)((0, f._)({}, w), {
                            left: 0
                        }),
                        onClick: t
                    }, n) : s.createElement(m.A, {
                        __css: (0, p._)((0, f._)({}, w), {
                            bg: "bg1",
                            left: 0,
                            pr: "xs"
                        })
                    }, s.createElement(m.A, {
                        size: "24px",
                        __css: (0, p._)((0, f._)({}, _), {
                            transform: "rotate(180deg)"
                        }),
                        onClick: t
                    }, s.createElement(v.A, {
                        size: 16
                    })))
                },
                A = function(e) {
                    var t = e.leftBtnVisible,
                        n = e.rightBtnVisible,
                        r = e.scrollingContainer,
                        i = e.sliderButtonsConfig,
                        a = s.useCallback((function() {
                            return y("next", r)
                        }), [r]),
                        o = s.useCallback((function() {
                            return y("prev", r)
                        }), [r]),
                        l = i.leftNode,
                        c = i.rightNode;
                    return s.createElement(s.Fragment, null, t && s.createElement(B, {
                        handleClick: o,
                        leftNode: l
                    }), n && s.createElement(E, {
                        handleClick: a,
                        rightNode: c
                    }))
                };
            const k = s.memo(A);
            var N = n("j+bC"),
                S = n.n(N),
                R = n("2TFz"),
                K = n.n(R),
                D = n("FB3O"),
                T = n.n(D);
            const M = s.forwardRef((function(e, t) {
                var n = e.onClick,
                    r = e.content,
                    i = e.tabKey,
                    a = e.activeKey,
                    o = e.sx,
                    l = e.tabDefaultNodeSx,
                    c = e.className,
                    u = e.variant,
                    h = void 0 === u ? "default" : u,
                    f = e.size,
                    p = void 0 === f ? "normal" : f,
                    v = e.id,
                    m = e.type,
                    b = i === a,
                    g = s.useCallback(S()([
                        [function(e) {
                            return "filled" === e
                        }, K()("".concat(h, ".tab.").concat(m))],
                        [function(e) {
                            return "standard" === e || "vertical" === e
                        }, K()("".concat(h, ".").concat(p))],
                        [T(), K()("".concat(h, ".tab"))]
                    ]), [h, m, p]);
                return s.createElement(d.A, {
                    id: v,
                    sx: o,
                    __css: {
                        cursor: "pointer",
                        minWidth: "auto"
                    },
                    className: c,
                    ref: t,
                    onClick: function() {
                        n && n()
                    }
                }, "function" === typeof r ? r(b) : s.createElement(d.A, {
                    tx: "tabs",
                    variant: g(h),
                    className: b ? "active" : "",
                    active: b,
                    sx: l
                }, r))
            }));
            var L = "undefined" !== typeof BN,
                F = (0, h.UF)("uikit-widget", "Tabs"),
                z = function(e) {
                    (0, a._)(n, e);
                    var t = (0, l._)(n);

                    function n(e) {
                        var i;
                        return (0, r._)(this, n), (i = t.call(this, e)).displayName = "Tabs", i.handleActiveTabChange = function(e) {
                            var t = e.activeKey,
                                n = e.tabsElement,
                                r = e.activeElement;
                            i.setState({
                                activeKey: t
                            }), L || C(n, x(r), .3)
                        }, i.triggerSliderButtonsVisible = function(e) {
                            var t = e.containerRef,
                                n = e.visibleOffset;
                            if (t && t.current) {
                                var r = t.current,
                                    a = r.scrollLeft,
                                    o = r.scrollWidth,
                                    l = r.clientWidth;
                                i.setState({
                                    rightBtnVisible: o > l + a + n,
                                    leftBtnVisible: a > n,
                                    tabsScrollWidth: o
                                })
                            }
                        }, i.state = {
                            activeKey: e.controlledKey || e.defaultActiveKey,
                            leftBtnVisible: !1,
                            rightBtnVisible: !1,
                            tabsScrollWidth: 0
                        }, i
                    }
                    var c = n.prototype;
                    return c.componentDidMount = function() {
                        var e, t;
                        if (this.currentTabRef && this.currentTabRef.current && !L && !this.props.disableScroll) {
                            var n = this.currentTabRef.current;
                            C(n.parentElement, x(n), .3)
                        }
                        this.props.showSlideButtons && this.triggerSliderButtonsVisible({
                            containerRef: this.tabsContainerRef,
                            visibleOffset: null !== (t = null === (e = this.props.sliderButtonsConfig) || void 0 === e ? void 0 : e.visibleOffset) && void 0 !== t ? t : 30
                        })
                    }, c.componentDidUpdate = function(e) {
                        var t, n, r = this.props,
                            i = r.showSlideButtons,
                            a = r.sliderButtonsConfig,
                            o = this.state.tabsScrollWidth,
                            l = (null !== (t = this.tabsContainerRef) && void 0 !== t ? t : {}).current;
                        i && (null === l || void 0 === l ? void 0 : l.scrollWidth) !== o && this.triggerSliderButtonsVisible({
                            containerRef: this.tabsContainerRef,
                            visibleOffset: null !== (n = null === a || void 0 === a ? void 0 : a.visibleOffset) && void 0 !== n ? n : 30
                        });
                        if (this.props.controlledKey && this.props.controlledKey !== e.controlledKey) {
                            var s, c = null === (s = this.eleMap[this.props.controlledKey]) || void 0 === s ? void 0 : s.current;
                            c && c.parentElement && this.handleActiveTabChange({
                                activeKey: this.props.controlledKey,
                                tabsElement: c.parentElement,
                                activeElement: c
                            })
                        }
                    }, c.render = function() {
                        var e = this;
                        F();
                        var t = this.props,
                            n = t.children,
                            r = t.onChange,
                            a = t.onTabClick,
                            l = t.lazy,
                            c = t.tabSx,
                            h = t.tabClassName,
                            f = t.tabsSx,
                            p = t.tabsClassName,
                            v = t.tabDefaultNodeSx,
                            m = t.variant,
                            b = t.size,
                            g = (t.controlledKey, t.type),
                            x = void 0 === g ? "secondary" : g,
                            C = t.showSlideButtons,
                            y = t.sliderButtonsConfig,
                            w = void 0 === y ? {} : y,
                            _ = (0, o._)(t, ["children", "onChange", "onTabClick", "lazy", "tabSx", "tabClassName", "tabsSx", "tabsClassName", "tabDefaultNodeSx", "variant", "size", "controlledKey", "type", "showSlideButtons", "sliderButtonsConfig"]),
                            E = this.state,
                            B = E.activeKey,
                            A = E.rightBtnVisible,
                            N = E.leftBtnVisible;
                        this.tabs = [], this.eleMap = {};
                        var S = s.Children.map(n, (function(t) {
                            if (s.isValidElement(t)) {
                                var n = t.props,
                                    r = n.tab,
                                    i = n.tabKey;
                                return e.tabs.push({
                                    tab: r,
                                    tabKey: i
                                }), s.cloneElement(t, {
                                    activeKey: B,
                                    lazy: l
                                })
                            }
                        }));
                        this.tabsContainerRef = s.createRef();
                        var R = u()((function() {
                                var t, n;
                                e.triggerSliderButtonsVisible({
                                    containerRef: e.tabsContainerRef,
                                    visibleOffset: null !== (n = null === (t = e.props.sliderButtonsConfig) || void 0 === t ? void 0 : t.visibleOffset) && void 0 !== n ? n : 30
                                })
                            }), 500),
                            K = C && {
                                onScroll: function() {
                                    R()
                                }
                            };
                        return s.createElement(d.A, (0, i._)({
                            as: "div",
                            tx: "tabs",
                            variant: "".concat(m, ".layout"),
                            __css: {
                                position: "relative"
                            }
                        }, _), s.createElement(d.A, (0, i._)({
                            ref: this.tabsContainerRef,
                            tx: "tabs"
                        }, K, {
                            variant: "".concat(m, ".container"),
                            sx: f,
                            className: p,
                            __css: {
                                width: "100%",
                                whiteSpace: "nowrap",
                                display: "flex",
                                flexDirection: "row",
                                overflow: "scroll",
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                                "&::-webkit-scrollbar": {
                                    display: "none"
                                }
                            }
                        }), this.tabs.map((function(t, n) {
                            var i = t.tab,
                                o = t.tabKey,
                                l = e,
                                u = s.createRef();
                            return B === o && (e.currentTabRef = u), e.eleMap[o] = u, s.createElement(M, {
                                size: b,
                                content: i,
                                tabKey: o,
                                activeKey: B,
                                key: n,
                                ref: u,
                                sx: c,
                                className: h,
                                tabDefaultNodeSx: v,
                                variant: m,
                                type: x,
                                id: "tab-".concat(o),
                                onClick: function() {
                                    l.handleActiveTabChange({
                                        activeKey: o,
                                        tabsElement: u.current.parentElement,
                                        activeElement: u.current
                                    }), o !== B && r && r(o, n), a && a(o, n)
                                }
                            })
                        }))), S, C && s.createElement(k, {
                            leftBtnVisible: N,
                            rightBtnVisible: A,
                            scrollingContainer: this.tabsContainerRef,
                            sliderButtonsConfig: w
                        }))
                    }, n
                }(s.PureComponent)
        },
        "5qdK": (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                a = n.n(i),
                o = n("qqbu");
            const l = function(e) {
                return a().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);