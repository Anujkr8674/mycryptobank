"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7296], {
        edJa: (e, t, r) => {
            r.d(t, {
                GX: () => d,
                YM: () => s,
                kT: () => l,
                l8: () => c,
                xH: () => u,
                zv: () => a
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = {
                    eventCategory: "trade"
                },
                l = ((0, i._)((0, n._)({}, o), {
                    event: "trade",
                    eventAction: "click"
                }), (0, i._)((0, n._)({}, o), {
                    event: "trade",
                    eventAction: "popup_view"
                }), function(e) {
                    e.tab, e.clickContent
                }),
                a = function(e) {
                    e.tab, e.clickContent
                },
                s = function(e) {
                    e.tab, e.clickContent
                },
                d = function(e) {
                    e.tab, e.dateTime
                },
                c = function(e) {
                    e.tab
                },
                u = function(e) {
                    e.col, e.type
                }
        },
        TQk5: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var n = r("hrAD"),
                i = r("KrVi"),
                o = r("mXdx"),
                l = r("DTvD"),
                a = r.n(l),
                s = r("2IQ4"),
                d = r("tC4u"),
                c = {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    color: "t.secondary",
                    zIndex: 1199,
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "& >.refresh-text": {
                        px: "16px"
                    },
                    ".refresh-button": {
                        color: "t.yellow",
                        cursor: "pointer",
                        ml: "8px"
                    }
                },
                u = r("Qhol"),
                x = function(e) {
                    var t = e.showLoding,
                        r = e.showRefresh,
                        a = e.onRefresh,
                        x = e.children,
                        p = e.onRefreshChildren,
                        m = e.sx,
                        y = (0, i._)(e, ["showLoding", "showRefresh", "onRefresh", "children", "onRefreshChildren", "sx"]),
                        h = (0, u.ok2)().getI18n,
                        v = (0, l.useMemo)((function() {
                            return h("trd-data-lost", {
                                defaultValue: "Data lost due to a connection issue, please refresh the page."
                            })
                        }), [h]),
                        f = (0, l.useMemo)((function() {
                            return h("trd-refresh-button", {
                                defaultValue: "Refresh"
                            })
                        }), [h]);
                    return t ? (0, o.jsx)(s.A, {
                        className: "refreshComponent",
                        sx: (0, n._)({}, c, m),
                        children: (0, o.jsx)(d.A, (0, n._)({}, y))
                    }) : r ? (0, o.jsx)(s.A, {
                        className: "refreshComponent",
                        sx: (0, n._)({}, c, m),
                        children: (0, o.jsxs)("div", {
                            className: "refresh-text",
                            children: [(0, o.jsxs)("div", {
                                children: [v, (0, o.jsx)("span", {
                                    className: "refresh-button",
                                    onClick: a,
                                    children: f
                                })]
                            }), p && p]
                        })
                    }) : (0, o.jsx)(o.Fragment, {
                        children: x && x
                    })
                };
            const p = a().memo(x)
        },
        MiRG: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = r("UWKL");
            const i = function(e) {
                var t = e.children,
                    r = (0, n.Q)(),
                    i = r.isMobile,
                    o = r.isIPad;
                return t ? t({
                    isMobile: i,
                    isIPad: o
                }) : null
            }
        },
        RCJN: (e, t, r) => {
            r.d(t, {
                A: () => m
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r("8Qyq"),
                l = r("Qhol"),
                a = r("b9LU"),
                s = r("edJa"),
                d = r("tgKj"),
                c = r("Olbk"),
                u = r("vRrZ"),
                x = r("pPGf"),
                p = function(e) {
                    e.status;
                    var t = e.handleStatusFilter,
                        r = e.textArrayMap,
                        i = e.dropDownKey;
                    return (0, n.jsx)(d.A, {
                        style: {
                            backgroundColor: "var(--color-CardBg)",
                            boxShadow: "var(--shadow-shadow2)",
                            borderRadius: "12px",
                            flexDirection: "column",
                            padding: "10px 0px"
                        },
                        children: Object.keys(r).map((function(e) {
                            return (0, n.jsxs)(d.A, {
                                style: {
                                    whiteSpace: "nowrap",
                                    height: "38px",
                                    width: "232px",
                                    borderRadius: "0px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    color: i === e ? "var(--color-PrimaryText)" : "var(--color-SecondaryText)",
                                    justifyContent: "space-between",
                                    fontSize: "14px",
                                    fontWeight: i === e ? "500" : "400",
                                    alignItems: "center"
                                },
                                className: "hover:bg-Line",
                                onClick: function() {
                                    return t(e)
                                },
                                children: [(0, n.jsx)(c.Ay, {
                                    children: r[e].label
                                }), i === e ? (0, n.jsx)(u.A, {
                                    style: {
                                        color: "var(--color-PrimaryText)"
                                    }
                                }) : (0, n.jsx)(n.Fragment, {})]
                            }, e)
                        }))
                    })
                };
            const m = function(e) {
                var t = e.handleClick,
                    r = void 0 === t ? function() {} : t,
                    u = e.area,
                    m = (0, l.ok2)().getI18n,
                    y = (0, i.useContext)(a.x).currentSymbol,
                    h = m("trd-orderHistory-sideSell"),
                    v = m("trd-orderHistory-sideBuy"),
                    f = m("trd-orderHistory-side"),
                    g = {
                        All: {
                            label: m("trd-orderHistory-all"),
                            title: f
                        },
                        Buy: {
                            label: v,
                            title: v
                        },
                        Sell: {
                            label: h,
                            title: h
                        }
                    },
                    j = (0, i.useState)(g.All.title),
                    T = j[0],
                    A = j[1],
                    b = (0, i.useState)("All"),
                    I = b[0],
                    w = b[1],
                    C = (0, i.useState)("down"),
                    k = C[0],
                    S = C[1];
                return (0, i.useEffect)((function() {
                    A(g.All.title), w("All")
                }), [y]), (0, n.jsx)(o.A, {
                    trigger: "click",
                    sx: {
                        userSelect: "none",
                        display: "flex"
                    },
                    overlay: (0, n.jsx)(p, {
                        status: T,
                        dropDownKey: I,
                        handleStatusFilter: function(e) {
                            A(g[e].title), w(e), (0, s.zv)({
                                clickContent: g[e].title,
                                tab: "".concat(u)
                            }), r(e)
                        },
                        textArrayMap: g
                    }),
                    enablePortal: !0,
                    onVisibleChange: function() {
                        S("down" === k ? "up" : "down")
                    },
                    children: (0, n.jsxs)(d.A, {
                        "data-area": "left",
                        style: {
                            alignItems: "center",
                            cursor: "pointer",
                            borderRadius: "2px",
                            height: "24px"
                        },
                        children: [(0, n.jsx)(c.Ay, {
                            style: {
                                color: "var(--color-TertiaryText)",
                                fontSize: "12px"
                            },
                            children: T
                        }), (0, n.jsx)(x.A, {
                            style: {
                                transform: "up" === k ? "rotate(180deg)" : "rotate(0deg)",
                                color: "var(--color-TertiaryText)"
                            }
                        })]
                    })
                })
            }
        },
        yhot: (e, t, r) => {
            r.d(t, {
                A: () => y,
                Q: () => m
            });
            var n = r("mXdx"),
                i = r("8aEf"),
                o = r("2IQ4"),
                l = r("Vhyo"),
                a = r("Qhol"),
                s = r("J+v0"),
                d = r.n(s),
                c = r("bQ69"),
                u = r("EpzF"),
                x = function(e) {
                    var t = e.trailingTime,
                        r = e.workingTime,
                        i = e.status,
                        s = e.nextOrderType,
                        c = void 0 === s ? "" : s,
                        x = e.nextTrailingDelta,
                        p = void 0 === x ? "" : x,
                        m = (0, a.ok2)().getI18n,
                        y = d()(t).format("YYYY-MM-DD HH:mm"),
                        h = d()(r).format("YYYY-MM-DD HH:mm"),
                        v = (0, u.R)(c, p),
                        f = "Trailing-Stop" === v || "TRAILING_STOP" === v;
                    return (0, n.jsxs)(o.A, {
                        children: ["active" !== i && "worked" !== i || !f ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.A, {
                                children: m("trd-order-activated", {
                                    defaultValue: "Order activated."
                                })
                            }), (0, n.jsxs)(l.A, {
                                children: [m("trd-tradeHistory-time"), ":", (0, n.jsx)(l.A, {
                                    ml: "2px",
                                    display: "inline",
                                    children: t ? y : h
                                })]
                            })]
                        }), "worked" === i ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.A, {
                                mt: f ? "10px" : "0px",
                                children: m("trd-order-has-been-submitted", {
                                    defaultValue: "Order worked and has been submitted to orderbook."
                                })
                            }), (0, n.jsxs)(l.A, {
                                children: [m("trd-tradeHistory-time"), ":", (0, n.jsx)(l.A, {
                                    ml: "2px",
                                    display: "inline",
                                    children: r ? h : y
                                })]
                            })]
                        }) : (0, n.jsx)(n.Fragment, {})]
                    })
                },
                p = function(e) {
                    var t = e.trailingTime;
                    return e.workingTime ? "worked" : t ? "active" : void 0
                },
                m = function(e) {
                    var t = e.nextTriggerConditions,
                        r = e.trailingTime,
                        a = e.workingTime,
                        s = e.nextOrderType,
                        d = e.nextTrailingDelta,
                        u = e.children,
                        m = p({
                            trailingTime: r,
                            workingTime: a
                        }),
                        y = (0, n.jsx)(x, {
                            trailingTime: r,
                            workingTime: a,
                            status: m,
                            nextOrderType: s,
                            nextTrailingDelta: d
                        });
                    return m && t !== c.jr ? (0, n.jsx)(o.A, {
                        className: "status-tip-container",
                        children: (0, n.jsx)(i.Ay, {
                            tip: y,
                            arrow: !0,
                            sx: {
                                ml: "2px"
                            },
                            enablePortal: !0,
                            children: (0, n.jsx)(l.A, {
                                sx: {
                                    textDecorationLine: "underline",
                                    textDecorationColor: "t.secondary",
                                    textDecorationStyle: "dotted"
                                },
                                children: u
                            })
                        })
                    }) : (0, n.jsx)(n.Fragment, {
                        children: u
                    })
                };
            const y = function(e) {
                var t = e.nextTriggerConditions,
                    r = e.trailingTime,
                    s = e.workingTime,
                    d = e.nextOrderType,
                    u = e.nextTrailingDelta,
                    m = (0, a.ok2)().getI18n,
                    y = p({
                        trailingTime: r,
                        workingTime: s
                    }),
                    h = (0, n.jsx)(x, {
                        trailingTime: r,
                        workingTime: s,
                        status: y,
                        nextOrderType: d,
                        nextTrailingDelta: u
                    }),
                    v = m("trd-order-status-".concat(y), {
                        defaultValue: y
                    });
                return y && t !== c.jr ? (0, n.jsx)(o.A, {
                    className: "status-tip-container",
                    children: (0, n.jsx)(i.Ay, {
                        tip: h,
                        arrow: !0,
                        sx: {
                            ml: "2px"
                        },
                        enablePortal: !0,
                        children: (0, n.jsx)(l.A, {
                            sx: {
                                textDecorationLine: "underline",
                                textDecorationColor: "t.secondary",
                                textDecorationStyle: "dotted"
                            },
                            children: v
                        })
                    })
                }) : (0, n.jsx)(n.Fragment, {})
            }
        },
        NRnv: (e, t, r) => {
            r.d(t, {
                US: () => n,
                u$: () => i
            });
            var n = function(e) {
                    e.layout, e.elementid
                },
                i = function(e) {
                    e.layout, e.elementid
                }
        },
        qGr6: (e, t, r) => {
            r.d(t, {
                t: () => i
            });
            var n = r("Qhol"),
                i = function() {
                    (0, n.jH7)();
                    return {
                        right: "16px"
                    }
                }
        },
        N3Ul: (e, t, r) => {
            r.d(t, {
                L: () => y
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                l = r("2IQ4"),
                a = r("GIr8"),
                s = r("oY5g"),
                d = r("Vhyo"),
                c = r("KzWS"),
                u = r("0vT3"),
                x = r("Qhol"),
                p = r("I25Y"),
                m = function(e) {
                    var t = e.getI18n,
                        r = e.submitData,
                        o = (0, x.BkF)().changeStatus,
                        m = r.side,
                        y = r.origQty,
                        h = r.quoteAsset,
                        v = r.baseAsset,
                        f = r.price,
                        g = r.initPrice,
                        j = r.initOrigQty,
                        T = r.contingencyType,
                        A = "BUY" === m;
                    return (0, i.useEffect)((function() {
                        (0, u.pr)("confirm")
                    }), []), (0, n.jsxs)("div", {
                        className: "mb-[16px]",
                        children: [(0, n.jsxs)(l.A, {
                            children: [(0, n.jsx)(a.A, {
                                sx: {
                                    color: A ? "t.buy" : "t.sell",
                                    justifyContent: "flex-end",
                                    marginTop: "16px",
                                    marginBottom: "16px"
                                },
                                children: t("trd-openOrde-side".concat(A ? "Buy" : "Sell"))
                            }), (0, n.jsxs)(a.A, {
                                sx: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    fontSize: "14px"
                                },
                                children: [(0, n.jsx)(l.A, {
                                    color: "t.third",
                                    children: t("trd-openOrder-price".concat(Number(f) !== Number(g) ? "-adjusted" : ""))
                                }), (0, n.jsx)(l.A, {
                                    color: "t.primary",
                                    children: "".concat(f, " ").concat(h)
                                })]
                            }), (0, n.jsxs)(a.A, {
                                sx: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    fontSize: "14px",
                                    marginTop: "8px"
                                },
                                children: [(0, n.jsx)(l.A, {
                                    color: "t.third",
                                    children: t("trd-openOrder-amount".concat(Number(j) === Number(y) ? "" : "-adjusted"))
                                }), (0, n.jsx)(l.A, {
                                    color: "t.primary",
                                    children: "".concat(y, " ").concat(v)
                                })]
                            })]
                        }), "OTO" === T && (0, n.jsxs)("div", {
                            className: "bg-[--color-BadgeBg] flex rounded-xl ",
                            style: {
                                padding: "12px",
                                marginTop: "16px"
                            },
                            children: [(0, n.jsx)(c.A, {
                                className: "w-5 h-5 text-[--color-PrimaryText]",
                                color: "PrimaryText",
                                name: "CircledWarningF"
                            }), (0, n.jsx)("div", {
                                className: "typography-body5 text-[--color-PrimaryText] flex-1",
                                children: t("trd-orderconfirm-tpsl-tips")
                            })]
                        }), (0, n.jsx)(p.A, {
                            base: v,
                            quote: h
                        }), (0, n.jsxs)("label", {
                            style: {
                                display: "flex",
                                marginTop: "12px",
                                fontSize: "14px"
                            },
                            htmlFor: "openorder-checked-reminders",
                            "data-sensors-click": !0,
                            children: [(0, n.jsx)(s.A, {
                                id: "openorder-checked-reminders",
                                size: 20,
                                onChange: function(e) {
                                    var t;
                                    t = e.target.checked, o(!t)
                                }
                            }), (0, n.jsx)(d.A, {
                                children: t("trd-adjustment-confirmation-checkbox")
                            })]
                        })]
                    })
                },
                y = function(e, t) {
                    var r = e.modalRef,
                        n = e.getI18n,
                        i = e.submitData,
                        l = e.onCancel,
                        a = e.isNoReminder;
                    if (void 0 === a || a) t();
                    else {
                        var s = o().createElement(m, {
                            getI18n: n,
                            submitData: i
                        });
                        r.current.create({
                            title: n("trd-orderForm-orderconfirm"),
                            content: s,
                            onOk: function() {
                                (0, u.qL)({
                                    title: "adjust_confirm_popup",
                                    element_id: "confirm"
                                }), t()
                            },
                            onCancel: function() {
                                (0, u.qL)({
                                    title: "adjust_confirm_popup",
                                    element_id: "cancel"
                                }), null === l || void 0 === l || l()
                            },
                            okText: n("trd-dialog-confirm"),
                            cancelText: n("trd-dialog-cancel")
                        })
                    }
                }
        },
        U6VI: (e, t, r) => {
            r.d(t, {
                A: () => k
            });
            var n = r("hrAD"),
                i = r("KrVi"),
                o = r("mguP"),
                l = r("mXdx"),
                a = r("DTvD"),
                s = r.n(a),
                d = r("GIr8"),
                c = r("zX7I"),
                u = r("2IQ4"),
                x = r("tM9B"),
                p = r("KzWS"),
                m = r("UXyB"),
                y = r("12iX"),
                h = r("p6uk"),
                v = r("dEVk"),
                f = r("Qhol"),
                g = r("rOIZ"),
                j = r("N3Ul"),
                T = r("0vT3"),
                A = r("cmpa"),
                b = r("I25Y"),
                I = r("DcxV"),
                w = function(e) {
                    var t = e.getI18n,
                        r = e.setOpen,
                        n = e.entryType,
                        i = (0, a.useCallback)((function(e) {
                            e.preventDefault(), r && r(!1), (0, T.qL)({
                                title: "adjust_".concat(n, "_popup"),
                                element_id: "cancel"
                            })
                        }), [r]);
                    return (0, l.jsxs)(d.A, {
                        sx: {
                            marginTop: "16px"
                        },
                        children: [(0, l.jsx)(c.A, {
                            flexGrow: 1,
                            sz: "l",
                            variant: "default",
                            colorStyle: "secondary",
                            sx: {
                                mr: "8px",
                                width: .5
                            },
                            onClick: i,
                            children: t("trd-dialog-cancel")
                        }), (0, l.jsx)(c.A, {
                            sx: {
                                width: .5
                            },
                            type: "submit",
                            sz: "l",
                            flexGrow: 1,
                            children: t("trd-dialog-confirm")
                        })]
                    })
                },
                C = function(e) {
                    var t = e.setOpen,
                        r = e.onPlaceOrderSuccess,
                        s = (0, i._)(e, ["setOpen", "onPlaceOrderSuccess"]),
                        d = (0, f.ok2)().getI18n,
                        c = (0, f.jH7)(),
                        C = (0, a.useRef)({}),
                        k = s.symbol,
                        S = s.price,
                        _ = s.origQty,
                        O = s.entryType,
                        N = s.side,
                        D = s.baseAsset,
                        P = s.quoteAsset,
                        L = s.executedQty,
                        M = s.orderId,
                        Q = (0, a.useState)(M || ""),
                        U = Q[0],
                        R = Q[1],
                        B = (0, f.BkF)().status,
                        E = (0, o._)((0, A.E)({
                            onSuccess: function() {
                                null === t || void 0 === t || t(!1), null === r || void 0 === r || r()
                            },
                            symbol: k
                        }), 2),
                        F = E[0],
                        z = E[1],
                        V = (0, f.hFK)()[k] || {},
                        K = {
                            price: {
                                value: S,
                                invalid: !1,
                                errorMsg: ""
                            },
                            origQty: {
                                value: (0, x.Rd)(Number(_), Number(L)).toNumber(),
                                invalid: !1,
                                errorMsg: ""
                            }
                        },
                        G = (0, a.useState)(K),
                        W = G[0],
                        Y = G[1],
                        q = V.minQty,
                        X = V.tickSize,
                        H = (0, g.XV)(X),
                        J = (0, g.XV)(q),
                        Z = (0, f.$X2)()(+W.price.value, P),
                        $ = Z.symbol,
                        ee = Z.fiatPrice;
                    (0, a.useEffect)((function() {
                        (0, T.pr)(O)
                    }), []);
                    var te = (0, a.useCallback)((function(e, t, r) {
                            var n = !1,
                                i = "",
                                o = "price" === t ? W.origQty.value : r,
                                l = "price" === t ? r : W.price.value,
                                a = z({
                                    symbol: k,
                                    side: N,
                                    price: l,
                                    origQty: _
                                }); + o > +a && (n = !0, i = d("trd-orderForm-most".concat(N), {
                                amount: a
                            }) || ""), Y({
                                price: {
                                    value: l,
                                    invalid: !1,
                                    errorMsg: ""
                                },
                                origQty: {
                                    value: o,
                                    invalid: n,
                                    errorMsg: i
                                }
                            })
                        }), [Y, N, d, z, W]),
                        re = (0, a.useCallback)((function(e, t) {
                            if (e.preventDefault(), (0, T.qL)({
                                    title: "adjust_".concat(s.entryType, "_popup"),
                                    element_id: "confirm"
                                }), !W.origQty.invalid && !W.price.invalid) {
                                var r = (0, I.i)(t, W),
                                    i = (0, n._)({}, s, r),
                                    o = {
                                        price: null === s || void 0 === s ? void 0 : s.price,
                                        origQty: null === s || void 0 === s ? void 0 : s.origQty
                                    };
                                (0, j.L)({
                                    modalRef: C,
                                    getI18n: d,
                                    submitData: (0, n._)({}, o, i),
                                    isNoReminder: !B
                                }, (function() {
                                    return F(i, o)
                                }))
                            }
                        }), [W, C, d, s]);
                    return (0, m.A)((function() {
                        M ? M !== U && (null === t || void 0 === t || t(!1)) : R(M)
                    }), [M]), (0, l.jsxs)(u.A, {
                        className: "trd-orderform-container",
                        sx: {
                            bg: "modalBg",
                            width: "360px",
                            padding: "16px",
                            borderRadius: "8px",
                            boxShadow: "elevation3"
                        },
                        children: [(0, l.jsxs)(y.A, {
                            onSubmit: re,
                            trim: !0,
                            noValidate: !0,
                            autoComplete: "off",
                            children: [(0, l.jsx)(v.A, {
                                name: "price",
                                className: "price",
                                autoZero: !1,
                                symbol: N,
                                min: X,
                                step: X,
                                precision: H,
                                before: d("trd-orderForm-price"),
                                after: P,
                                helperText: "rtl" === c ? "".concat($).concat(ee, " \u2248") : "\u2248 ".concat($).concat(ee),
                                value: "".concat(W.price.value),
                                invalid: W.price.invalid,
                                errorText: W.price.errorMsg,
                                handleChange: te
                            }, "price"), (0, l.jsx)(v.A, {
                                name: "origQty",
                                className: "origQty",
                                autoZero: !0,
                                symbol: N,
                                min: q,
                                step: q,
                                precision: J,
                                before: d("trd-orderForm-quantity"),
                                after: D,
                                helperText: "",
                                boxStyle: {
                                    marginTop: "10px"
                                },
                                value: "".concat(W.origQty.value),
                                invalid: W.origQty.invalid,
                                errorText: W.origQty.errorMsg,
                                handleChange: te
                            }, "origQty"), "OTO" === (null === s || void 0 === s ? void 0 : s.contingencyType) && (0, l.jsxs)("div", {
                                className: "bg-[--color-BadgeBg] flex rounded-xl ",
                                style: {
                                    padding: "12px",
                                    marginTop: "16px"
                                },
                                children: [(0, l.jsx)(p.A, {
                                    className: "w-5 h-5 text-[--color-PrimaryText]",
                                    color: "PrimaryText",
                                    name: "CircledWarningF"
                                }), (0, l.jsx)("div", {
                                    className: "typography-body5 text-[--color-PrimaryText] flex-1",
                                    children: d("trd-orderconfirm-tpsl-tips")
                                })]
                            }), (0, l.jsx)(b.A, {
                                base: D,
                                quote: P
                            }), (0, l.jsx)(w, {
                                getI18n: d,
                                setOpen: t,
                                entryType: O
                            })]
                        }), (0, l.jsx)(h.A, {
                            ref: C,
                            canMaskClick: !0
                        })]
                    })
                };
            const k = s().memo(C)
        },
        cmpa: (e, t, r) => {
            r.d(t, {
                E: () => y
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                l = r("DTvD"),
                a = r("tM9B"),
                s = r("Qhol"),
                d = r("rOIZ"),
                c = r("Bz5g"),
                u = r("wcOk"),
                x = r("8iyE"),
                p = r("bQ69"),
                m = r("MIKm"),
                y = function(e) {
                    var t = e.onSuccess,
                        r = e.symbol,
                        i = (0, s.ok2)().getI18n,
                        y = (0, s._ar)().setMessageInfo,
                        h = function(e) {
                            var t = (0, s.hFK)(),
                                r = t[e] || {},
                                n = r.baseAsset,
                                i = r.quoteAsset,
                                o = (0, u.Wr)(n),
                                c = o.maxAvaliable,
                                x = o.balanceWallet,
                                p = (0, u.Wr)(i),
                                m = p.maxAvaliable,
                                y = p.balanceWallet;
                            return {
                                getMostAmount: (0, l.useCallback)((function(e) {
                                    var r = e.symbol,
                                        n = e.side,
                                        i = e.price,
                                        o = e.origQty,
                                        l = (t[r] || {}).minQty,
                                        s = (0, d.XV)(l);
                                    if ("BUY" === n) {
                                        var u = (0, a.lw)(i, o).toNumber(),
                                            x = (0, a.tY)(u, m || 0).toNumber();
                                        return (0, a.k3)(x, i).toFixed(s)
                                    }
                                    return (0, a.tY)(o, c || 0).toFixed(s)
                                }), [t, c, m]),
                                baseBalanceWallet: x,
                                quoteBalanceWallet: y
                            }
                        }(r),
                        v = h.getMostAmount,
                        f = h.baseBalanceWallet,
                        g = h.quoteBalanceWallet,
                        j = (0, m.GO)((function(e) {
                            return e.kycStatus
                        })),
                        T = (0, m.GO)((function(e) {
                            return e.setShowDialog
                        })),
                        A = (0, l.useCallback)(function() {
                            var e = (0, n._)(o().mark((function e(r, n) {
                                var l, s, d, u, m, h, A;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (l = v({
                                                    symbol: r.symbol,
                                                    side: r.side,
                                                    price: r.price.toString(),
                                                    origQty: r.origQty.toString()
                                                }), "PASS" === j) {
                                                e.next = 4;
                                                break
                                            }
                                            return T(!0), e.abrupt("return");
                                        case 4:
                                            if (!(+r.origQty > +l)) {
                                                e.next = 7;
                                                break
                                            }
                                            return y(i("trd-openOrder-amount-lack-msg")), e.abrupt("return");
                                        case 7:
                                            return s = r.side === p.Vl.BUY ? r.quoteAsset : r.baseAsset, d = r.side === p.Vl.BUY ? g : f, u = r.side === p.Vl.BUY ? (0, a.lw)(n.price, n.origQty).toNumber() : n.origQty, m = {
                                                tradeType: p.Gr.SPOT,
                                                quantity: r.origQty,
                                                side: r.side,
                                                price: r.price,
                                                orderType: r.type,
                                                asset: s,
                                                balanceWallet: d,
                                                total: "",
                                                marketPrice: "",
                                                stopLimitPrice: ""
                                            }, (0, x.l)(m), h = (0, x.S)(m, u), A = {
                                                symbol: r.symbol,
                                                side: r.side,
                                                type: r.type,
                                                timeInForce: r.timeInForce,
                                                price: r.price,
                                                quantity: r.origQty,
                                                cancelOrderId: r.orderId,
                                                cancelOrigClientOrderId: r.clientOrderId,
                                                icebergQty: (null === r || void 0 === r ? void 0 : r.icebergQty) || null,
                                                newClientOrderId: r.clientOrderId,
                                                cancelNewClientOrderId: r.clientOrderId
                                            }, h && (A.assetCollectArg = h), e.next = 17, (0, c.b)(A);
                                        case 17:
                                            e.sent.success && (y({
                                                header: i("trd-orderForm-re-ordertitle"),
                                                message: "",
                                                variant: "success"
                                            }), null === t || void 0 === t || t());
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [i, v, t, f, g, j, T]);
                    return [A, v]
                }
        },
        "0vT3": (e, t, r) => {
            r.d(t, {
                oD: () => i,
                pr: () => o,
                qL: () => l
            });
            var n = r("wtFP"),
                i = function(e) {
                    (0, n.u4)("ModuleView", {
                        title: "open_order_list",
                        eventName: "spot_adjust_order",
                        $element_id: e,
                        df_source: "spot"
                    })
                },
                o = function(e) {
                    (0, n.u4)("PopupView", {
                        title: "adjust_".concat(e, "_popup"),
                        eventName: "spot_adjust_order",
                        df_source: "spot"
                    })
                },
                l = function(e) {
                    var t = e.title,
                        r = e.element_id;
                    (0, n.u4)("$WebClick", {
                        title: t,
                        $element_id: r,
                        eventName: "spot_adjust_order",
                        df_source: "spot"
                    })
                }
        },
        yUtd: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                l = r("8aEf"),
                a = r("zIIt"),
                s = r("b2AH"),
                d = function(e) {
                    var t = e.trailingDelta,
                        r = (0, s.ok)().getI18n;
                    if (!t) return (0, n.jsx)(n.Fragment, {});
                    var i = "".concat(r("trd-orderForm-trailing-delta"), " ").concat(t, "%");
                    return (0, n.jsxs)(n.Fragment, {
                        children: ["(", "".concat(t, "%"), (0, n.jsx)(l.Ay, {
                            tip: i,
                            arrow: !0,
                            sx: {
                                ml: "2px"
                            },
                            enablePortal: !0,
                            children: (0, n.jsx)(a.A, {
                                size: 14,
                                sx: {
                                    verticalAlign: "-3px"
                                }
                            })
                        }), ")"]
                    })
                };
            const c = o().memo(d)
        },
        nPYQ: (e, t, r) => {
            r.d(t, {
                C: () => n
            });
            var n = (0, r("eAFj").A)((function(e) {
                return {
                    side: "default",
                    setSide: function(t) {
                        return e((function() {
                            return {
                                side: t
                            }
                        }))
                    }
                }
            }))
        },
        mKaV: (e, t, r) => {
            r.d(t, {
                A: () => we
            });
            var n = r("mXdx"),
                i = r("2IQ4"),
                o = r("DTvD"),
                l = r.n(o),
                a = r("xZXB"),
                s = r("idM8"),
                d = r("3sXV"),
                c = r("TQk5"),
                u = r("mnvu"),
                x = r("hrAD"),
                p = r("qoEP"),
                m = r("KrVi"),
                y = r("mguP"),
                h = r("BiCW"),
                v = r("5XRN"),
                f = r("JI82"),
                g = r("Xz3K"),
                j = r("MD8j"),
                T = r("Olbk"),
                A = r("kcvK"),
                b = r("tgKj"),
                I = r("cL68"),
                w = r("NRnv"),
                C = r("RCJN"),
                k = r("rit8"),
                S = r("8Qyq"),
                _ = r("Qhol"),
                O = r("b9LU"),
                N = r("vRrZ"),
                D = r("pPGf"),
                P = function(e) {
                    e.status;
                    var t = e.handleStatusFilter,
                        r = e.textArrayMap,
                        i = e.dropDownKey;
                    return (0, n.jsx)(b.A, {
                        style: {
                            backgroundColor: "var(--color-CardBg)",
                            boxShadow: "var(--shadow-shadow2)",
                            borderRadius: "12px",
                            flexDirection: "column",
                            padding: "10px 0px"
                        },
                        children: Object.keys(r).map((function(e) {
                            return (0, n.jsxs)(b.A, {
                                style: {
                                    whiteSpace: "nowrap",
                                    height: "38px",
                                    width: "232px",
                                    borderRadius: "0px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    color: i === e ? "var(--color-PrimaryText)" : "var(--color-SecondaryText)",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "14px",
                                    fontWeight: i === e ? "500" : "400"
                                },
                                className: "hover:bg-Line",
                                onClick: function() {
                                    return t(e)
                                },
                                children: [(0, n.jsx)(T.Ay, {
                                    children: r[e].label
                                }), i === e ? (0, n.jsx)(N.A, {
                                    style: {
                                        color: "var(--color-PrimaryText)"
                                    }
                                }) : (0, n.jsx)(n.Fragment, {})]
                            }, e)
                        }))
                    })
                };
            const L = function(e) {
                var t = e.handleClick,
                    r = void 0 === t ? function() {} : t,
                    i = (0, _.ok2)().getI18n,
                    l = (0, o.useContext)(O.x).currentSymbol,
                    a = i("trd-openOrder-type"),
                    s = i("trd-orderHistory-all"),
                    d = i("trd-openOrder-type-LIMIT"),
                    c = i("trd-openOrder-type-STOP_LIMIT"),
                    u = i("trd-openOrder-type-LIMIT_MAKER"),
                    x = i("trd-openOrder-type-TRAILING_STOP"),
                    p = i("trd-openOrder-type-STOP_MARKET"),
                    m = {
                        All: {
                            label: s,
                            title: a
                        },
                        LIMIT: {
                            label: d,
                            title: d
                        },
                        STOP_LIMIT: {
                            label: c,
                            title: c
                        },
                        STOP_MARKET: {
                            label: p,
                            title: p
                        },
                        LIMIT_MAKER: {
                            label: u,
                            title: u
                        },
                        TRAILING_STOP: {
                            label: x,
                            title: x
                        }
                    },
                    y = (0, o.useState)("All"),
                    h = y[0],
                    v = y[1],
                    f = (0, o.useState)(m.All.title),
                    g = f[0],
                    j = f[1],
                    A = (0, o.useState)("down"),
                    I = A[0],
                    w = A[1];
                return (0, o.useEffect)((function() {
                    j(m.All.title), v("All")
                }), [l]), (0, n.jsx)(S.A, {
                    trigger: "click",
                    sx: {
                        userSelect: "none",
                        display: "flex"
                    },
                    overlay: (0, n.jsx)(P, {
                        status: g,
                        dropDownKey: h,
                        handleStatusFilter: function(e) {
                            j(m[e].title), v(e), r(e)
                        },
                        textArrayMap: m
                    }),
                    enablePortal: !0,
                    onVisibleChange: function() {
                        w("down" === I ? "up" : "down")
                    },
                    children: (0, n.jsxs)(b.A, {
                        "data-area": "left",
                        style: {
                            alignItems: "center",
                            cursor: "pointer",
                            borderRadius: "2px",
                            height: "24px"
                        },
                        children: [(0, n.jsx)(T.Ay, {
                            style: {
                                color: "var(--color-TertiaryText)",
                                fontSize: "12px"
                            },
                            children: g
                        }), (0, n.jsx)(D.A, {
                            style: {
                                transform: "up" === I ? "rotate(180deg)" : "rotate(0deg)",
                                color: "var(--color-TertiaryText)"
                            }
                        })]
                    })
                })
            };
            var M = r("cDUC"),
                Q = r("nPYQ"),
                U = r("S4PE"),
                R = function() {
                    var e = (0, _.ok2)().getI18n,
                        t = (0, Q.C)(),
                        r = t.setSide,
                        i = t.side;
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center justify-start text-[12px] text-TertiaryText cursor-pointer",
                        onClick: function() {
                            return r("asc" === i ? "desc" : "desc" === i ? "default" : "asc")
                        },
                        children: [(0, n.jsx)("div", {
                            children: e("trd-openOrder-price")
                        }), (0, n.jsx)(U.A, {
                            active: "default" !== i,
                            isUp: "asc" === i
                        })]
                    })
                },
                B = (0, h.A)((function() {
                    return Promise.resolve().then(r.bind(r, "NJD8"))
                }), {
                    webpack: function() {
                        return ["NJD8"]
                    }
                }),
                E = [
                    [g.mC.TRADING_CANCEL_ALL]
                ],
                F = function(e) {
                    var t = e.overlay,
                        r = e.text,
                        i = e.index,
                        o = e.hasData,
                        l = e.handleCancelAll;
                    return (0, n.jsx)(v.Ay, {
                        trigger: "hover",
                        placement: "bottom-end",
                        enablePortal: !0,
                        overlay: o ? t : null,
                        sx: {
                            userSelect: "none",
                            display: "flex"
                        },
                        children: (0, n.jsxs)(T.Ay, {
                            style: {
                                display: "flex",
                                height: "24px",
                                alignItems: "center",
                                justifyContent: "flex-end"
                            },
                            children: [(0, n.jsx)(T.Ay, {
                                title: r,
                                id: "cancel-all-orders",
                                style: {
                                    fontSize: "12px",
                                    color: "var(--color-TextLink)",
                                    display: 8 === i ? "inline" : "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    cursor: "pointer"
                                },
                                onClick: t && o ? l : void 0,
                                children: r
                            }), (0, n.jsx)(f.A, {
                                size: 20,
                                sx: {
                                    color: "t.third",
                                    cursor: "pointer",
                                    display: "inline-block"
                                }
                            })]
                        })
                    }, i)
                },
                z = function(e) {
                    var t = e.hasData,
                        r = e.headers,
                        i = void 0 === r ? [] : r,
                        l = (0, o.useContext)(u.A).actionCancel,
                        a = (0, j.d4)((function(e) {
                            return e.setting.layout
                        })),
                        s = (0, k.xD)().setOrderSide,
                        d = (0, k.SO)().setOrderType,
                        c = (0, I.ok)().getI18n,
                        h = (0, y._)((0, _.Grl)(), 1)[0],
                        v = function() {
                            l((function() {
                                return !0
                            }), c("actionAllMsg", {
                                defaultValue: "Are you sure you want to cancel all?"
                            }), 0), (0, w.US)({
                                layout: a,
                                elementid: "cancel-all-orders"
                            }), (0, M.Nb)(h)
                        },
                        f = function(e) {
                            s(e)
                        },
                        g = function(e) {
                            d(e)
                        },
                        S = function(e) {
                            var r = e.key,
                                i = e.overlay,
                                o = e.text,
                                l = e.tooltip,
                                a = e.textKey;
                            if (i) return (0, n.jsx)(F, {
                                index: r,
                                overlay: i,
                                text: o,
                                hasData: t,
                                handleCancelAll: v
                            }, r);
                            if (2 == r && "type" === a) return (0, n.jsx)(L, {
                                handleClick: g
                            });
                            if (3 === r && "side" === a) return (0, n.jsx)(C.A, {
                                handleClick: f,
                                area: "Open Order"
                            });
                            if (4 === r && "price" === a) return (0, n.jsx)(R, {});
                            var s = (0, n.jsx)(T.Ay, {
                                title: o,
                                style: {
                                    fontSize: "12px",
                                    display: 8 === r ? "inline" : "inline-flex",
                                    alignItems: "center",
                                    whiteSpace: "break-spaces",
                                    justifyContent: "flex-start",
                                    color: "var(--color-TertiaryText)"
                                },
                                className: l ? "underline decoration-dotted" : "",
                                children: o
                            });
                            return l ? (0, n.jsx)(A.A, {
                                tooltips: l,
                                arrow: !0,
                                useReactPopper: !0,
                                enablePortal: !0,
                                children: (0, n.jsxs)("div", {
                                    style: {
                                        cursor: "help"
                                    },
                                    children: [" ", s]
                                })
                            }) : s
                        };
                    return (0, n.jsx)(b.A, {
                        style: {
                            color: "t.third",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            height: "32px",
                            padding: "4px 0px"
                        },
                        children: i.map((function(e, t) {
                            var r = e.text,
                                i = e.overlay,
                                o = e.tooltip,
                                l = e.textKey,
                                a = (0, m._)(e, ["text", "overlay", "tooltip", "textKey"]);
                            return (0, n.jsxs)(b.A, (0, p._)((0, x._)({
                                "data-area": i ? "center" : "left",
                                style: i ? (0, I.Uw)(t, !0) : (0, I.Uw)(t)
                            }, a), {
                                children: [S({
                                    key: t,
                                    overlay: i,
                                    text: r,
                                    tooltip: o,
                                    textKey: l
                                }), a && a["data-testid"] && "openOrderCancelAll" === a["data-testid"] && (0, n.jsx)(B, {
                                    boxOffset: -70,
                                    placement: "top",
                                    tipWidth: 180,
                                    shortcutKeys: E,
                                    i18nKey: "widget-shortcuts-cancelall-order",
                                    positionTop: "-10px"
                                })]
                            }), t)
                        }))
                    })
                };
            const V = l().memo(z);
            var K = r("rEu4"),
                G = r("mwnt"),
                W = {
                    "& .normal": {
                        display: "initial"
                    },
                    "& .active": {
                        display: "none"
                    },
                    "&:hover": {
                        "& .normal": {
                            display: "none"
                        },
                        "& .active": {
                            display: "initial"
                        }
                    }
                },
                Y = function(e) {
                    var t = e.onClick,
                        r = e.size,
                        o = e.sx,
                        l = (0, m._)(e, ["onClick", "size", "sx"]);
                    return (0, n.jsxs)(i.A, (0, p._)((0, x._)({
                        sx: (0, x._)({}, W, o)
                    }, l), {
                        children: [(0, n.jsx)(G.A, {
                            className: "normal",
                            color: "t.third",
                            size: r,
                            onClick: t
                        }), (0, n.jsx)(G.A, {
                            className: "active",
                            color: "t.primary",
                            size: r,
                            onClick: t
                        })]
                    }))
                },
                q = r("Fyn1"),
                X = r("bQ69"),
                H = r("U6VI"),
                J = r("0vT3"),
                Z = r("d12p"),
                $ = (0, r("eAFj").A)((function(e) {
                    return {
                        events: [],
                        addEvents: function(t) {
                            return e((function(e) {
                                return {
                                    events: (0, Z._)(e.events).concat([t])
                                }
                            }))
                        },
                        tirggerEvents: function() {
                            return e((function(e) {
                                e.events.forEach((function(e) {
                                    return e()
                                }))
                            }))
                        }
                    }
                })),
                ee = r("MIKm"),
                te = l().memo((function(e) {
                    var t = (0, o.useState)(!1),
                        r = t[0],
                        i = t[1],
                        l = (0, y._)(function(e) {
                            var t = $((function(e) {
                                    return e.addEvents
                                })),
                                r = $((function(e) {
                                    return e.tirggerEvents
                                }));
                            return (0, o.useEffect)((function() {
                                t(e)
                            }), []), [r]
                        }((function() {
                            return i(!1)
                        })), 1)[0],
                        a = (0, ee.GO)((function(e) {
                            return e.kycStatus
                        })),
                        s = (0, ee.GO)((function(e) {
                            return e.setShowDialog
                        }));
                    return (0, o.useEffect)((function() {
                        (0, J.oD)("price" === e.entryType ? "adjust_price" : "adjust_amount")
                    }), []), (0, n.jsx)(v.Ay, {
                        enablePortal: !0,
                        trigger: "click",
                        open: r,
                        onVisibleChange: i,
                        overlay: (0, n.jsx)(H.A, (0, p._)((0, x._)({}, e), {
                            setOpen: i
                        })),
                        placement: "top",
                        children: (0, n.jsx)(q.A, {
                            onClick: function() {
                                "PASS" === a ? (l(), i(!0), (0, J.qL)({
                                    title: "open_order_list",
                                    element_id: "adjust_".concat(e.entryType)
                                }), (0, M.Nj)()) : s(!0)
                            },
                            "aria-label": "Edit Order",
                            sx: {
                                fontSize: "16px",
                                verticalAlign: "text-bottom",
                                cursor: "pointer",
                                "&: hover": {
                                    color: "t.primary"
                                }
                            }
                        })
                    })
                })),
                re = function(e) {
                    var t, r = e.tradeType,
                        i = e.type,
                        o = e.clientOrderId,
                        l = (null === (t = "".concat(o)) || void 0 === t ? void 0 : t.indexOf("grid_sub")) >= 0;
                    return r === X.Gr.SPOT && "LIMIT" === i && !l ? (0, n.jsx)(te, (0, x._)({}, e)) : null
                };
            const ne = l().memo(re);
            var ie = r("yUtd"),
                oe = r("yhot"),
                le = r("CLKF"),
                ae = r("wgCx"),
                se = function(e) {
                    return (0, n.jsx)(T.Ay, (0, x._)({}, e))
                },
                de = function(e) {
                    var t = e.orderId,
                        r = e.side,
                        i = e.orderListId,
                        l = (e.userId, e.time),
                        a = (0, I.ok)().getI18n,
                        s = (0, le.O)(),
                        d = (0, o.useContext)(u.A),
                        c = d.actionCancel,
                        m = d.changeSymbol,
                        y = d.group,
                        h = ((0, j.d4)((function(e) {
                            return e.setting.layout
                        })), "BUY" === r ? {
                            children: a("sideBuy".concat(""), {
                                defaultValue: "Buy"
                            })
                        } : {
                            children: a("sideSell".concat(""), {
                                defaultValue: "Sell"
                            })
                        }),
                        v = (0, k.i7)(e),
                        f = v.nextDate,
                        g = v.nextPair,
                        w = void 0 === g ? "" : g,
                        C = v.nextPrice,
                        S = v.nextAmount,
                        _ = v.nextType,
                        O = v.nextFilled,
                        N = v.nextTotal,
                        D = v.nextTriggerConditions,
                        P = v.nextTrailingDelta,
                        L = v.nextTrailingTime,
                        Q = v.nextWorkingTime,
                        U = v.nextOrderType,
                        R = v.nextIceBergQty,
                        B = v.nextSor,
                        E = v.isOTOType,
                        F = {
                            type: _,
                            symbol: w,
                            mode: null === e || void 0 === e ? void 0 : e.tradeType,
                            side: r
                        },
                        z = 0;
                    return (0, n.jsxs)(b.A, {
                        style: {
                            padding: 0,
                            flex: 1,
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            height: "32px",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            fontWeight: "400"
                        },
                        children: [(0, n.jsx)(T.Ay, {
                            "data-area": "left",
                            style: (0, x._)({}, (0, I.Uw)(z++)),
                            title: f,
                            children: f
                        }), (0, n.jsxs)(T.Ay, {
                            "data-area": "left",
                            style: (0, p._)((0, x._)({}, (0, I.Uw)(z++)), {
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center"
                            }),
                            className: "link",
                            onClick: function() {
                                return m({
                                    resPathList: [w.trim().split("/").join("_")],
                                    group: y
                                })
                            },
                            children: [w, (0, n.jsx)(K.A, {
                                className: "link activeIcon",
                                size: 16,
                                style: {
                                    display: "none"
                                }
                            })]
                        }), (0, n.jsx)(T.Ay, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: _,
                            children: _
                        }), (0, n.jsx)(T.Ay, (0, p._)((0, x._)({
                            "data-area": "left"
                        }, h), {
                            style: (0, p._)((0, x._)({}, (0, I.Uw)(z++)), {
                                color: "BUY" === r ? "var(--color-Buy)" : "var(--color-Sell)"
                            }),
                            title: h.children
                        })), (0, n.jsxs)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: C,
                            className: "trd-text-ellipsis",
                            children: [C, s ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(ne, (0, p._)((0, x._)({}, e), {
                                entryType: "price"
                            }))]
                        }), (0, n.jsxs)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: S,
                            className: "trd-text-ellipsis",
                            children: [S, s ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(ne, (0, p._)((0, x._)({}, e), {
                                entryType: "amount"
                            }))]
                        }), (0, n.jsx)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: R,
                            className: "trd-text-ellipsis",
                            children: R
                        }), (0, n.jsx)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: O,
                            className: "trd-text-ellipsis",
                            children: O
                        }), (0, n.jsx)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: N,
                            className: "trd-text-ellipsis",
                            children: N
                        }), (0, n.jsxs)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: D,
                            className: "trd-text-ellipsis",
                            children: [D, (0, n.jsx)(ie.A, {
                                trailingDelta: P
                            }), (0, n.jsx)(oe.A, {
                                nextTriggerConditions: D,
                                trailingTime: L,
                                workingTime: Q,
                                nextOrderType: U,
                                nextTrailingDelta: P
                            })]
                        }), (0, n.jsx)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            title: B,
                            className: "trd-text-ellipsis",
                            children: B
                        }), (0, n.jsx)(se, {
                            "data-area": "left",
                            style: (0, I.Uw)(z++),
                            className: "trd-text-ellipsis",
                            children: E ? (0, n.jsx)(ae.A, {
                                orderListId: i,
                                time: l,
                                side: r,
                                symbol: w.trim().split("/").join("")
                            }) : "-"
                        }), (0, n.jsx)("div", {
                            className: "cancel-order",
                            style: (0, p._)((0, x._)({
                                justifyContent: "flex-start",
                                right: 0
                            }, (0, I.Uw)(z++)), {
                                maxWidth: "100px",
                                padding: "0px 8px"
                            }),
                            children: (0, n.jsx)(A.A, {
                                arrow: !0,
                                tooltips: a("cancel", {
                                    defaultValue: "Cancel"
                                }),
                                placement: "left",
                                children: (0, n.jsx)(Y, {
                                    size: 18,
                                    sx: {
                                        cursor: "pointer",
                                        mr: "8px",
                                        verticalAlign: "middle",
                                        marginTop: "4px"
                                    },
                                    "aria-label": "Cancel Order",
                                    onClick: function() {
                                        c((function(e) {
                                            var r = e.orderId;
                                            return t === r
                                        })), (0, M.Kv)((null === e || void 0 === e ? void 0 : e.tradeType) || "SPOT", F)
                                    }
                                })
                            })
                        })]
                    })
                };
            const ce = l().memo(de);
            var ue = function(e) {
                    return (0, n.jsx)(T.Ay, (0, x._)({}, e))
                },
                xe = function(e) {
                    var t = e.orderId,
                        r = e.side,
                        i = (0, I.ok)().getI18n,
                        l = (0, o.useContext)(u.A).actionCancel,
                        a = "BUY" === r ? {
                            children: i("sideBuy".concat(""), {
                                defaultValue: "Buy"
                            })
                        } : {
                            children: i("sideSell".concat(""), {
                                defaultValue: "Sell"
                            })
                        },
                        s = (0, k.i7)(e),
                        d = s.nextDate,
                        c = s.nextPrice,
                        m = s.nextType,
                        y = s.nextTotal,
                        h = s.nextTriggerConditions,
                        v = s.nextTrailingDelta,
                        f = s.nextTrailingTime,
                        g = s.nextWorkingTime,
                        j = s.nextOrderType;
                    return (0, n.jsxs)(b.A, {
                        style: {
                            padding: 0,
                            flex: 1,
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            height: "32px",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            fontWeight: "400"
                        },
                        children: [(0, n.jsx)(T.Ay, {
                            "data-area": "left",
                            style: (0, x._)({}, (0, I.Uw)(0)),
                            title: d,
                            children: d
                        }), (0, n.jsx)(T.Ay, {
                            "data-area": "left",
                            style: (0, I.Uw)(1),
                            title: m,
                            children: m
                        }), (0, n.jsx)(T.Ay, (0, p._)((0, x._)({
                            "data-area": "left"
                        }, a), {
                            style: (0, p._)((0, x._)({}, (0, I.Uw)(2)), {
                                color: "BUY" === r ? "var(--color-Buy)" : "var(--color-Sell)"
                            }),
                            title: a.children
                        })), (0, n.jsx)(ue, {
                            "data-area": "left",
                            style: (0, I.Uw)(3),
                            title: c,
                            className: "trd-text-ellipsis",
                            children: c
                        }), (0, n.jsx)(ue, {
                            "data-area": "left",
                            style: (0, I.Uw)(4),
                            title: y,
                            className: "trd-text-ellipsis",
                            children: y
                        }), (0, n.jsxs)(ue, {
                            "data-area": "left",
                            style: (0, I.Uw)(5),
                            title: h,
                            className: "trd-text-ellipsis",
                            children: [h, (0, n.jsx)(ie.A, {
                                trailingDelta: v
                            }), (0, n.jsx)(oe.A, {
                                nextTriggerConditions: h,
                                trailingTime: f,
                                workingTime: g,
                                nextOrderType: j,
                                nextTrailingDelta: v
                            })]
                        }), (0, n.jsx)("div", {
                            className: "cancel-order",
                            style: (0, p._)((0, x._)({
                                justifyContent: "flex-start",
                                right: 0
                            }, (0, I.Uw)(6)), {
                                maxWidth: "100px",
                                padding: "0px 8px"
                            }),
                            children: (0, n.jsx)(A.A, {
                                arrow: !0,
                                tooltips: i("cancel", {
                                    defaultValue: "Cancel"
                                }),
                                placement: "left",
                                children: (0, n.jsx)(Y, {
                                    size: 18,
                                    sx: {
                                        cursor: "pointer",
                                        mr: "8px",
                                        verticalAlign: "middle",
                                        marginTop: "4px"
                                    },
                                    "aria-label": "Cancel Order",
                                    onClick: function() {
                                        l((function(e) {
                                            var r = e.orderId;
                                            return t === r
                                        }))
                                    }
                                })
                            })
                        })]
                    })
                };
            const pe = l().memo(xe);
            var me = function(e, t) {
                    return t ? [{
                        title: "",
                        dataIndex: "",
                        hideTitle: !0,
                        render: function(t, r) {
                            return (0, n.jsx)(pe, (0, p._)((0, x._)({}, r), {
                                tradeType: e
                            }))
                        }
                    }] : [{
                        title: "",
                        dataIndex: "",
                        hideTitle: !0,
                        render: function(t, r) {
                            return (0, n.jsx)(ce, (0, p._)((0, x._)({}, r), {
                                tradeType: e
                            }))
                        }
                    }]
                },
                ye = function(e) {
                    var t = e.loading,
                        r = e.data,
                        i = void 0 === r ? [] : r,
                        o = e.updateTime,
                        l = e.tradeType,
                        a = e.tpslMode,
                        s = void 0 !== a && a,
                        c = (0, m._)(e, ["loading", "data", "updateTime", "tradeType", "tpslMode"]);
                    return (0, n.jsx)(d.A, (0, p._)((0, x._)({}, c), {
                        variant: "girdList.wrapperBase",
                        loading: t,
                        resetDeps: [o],
                        listGridProps: {
                            data: i,
                            columns: me(l, s)
                        },
                        getListGridConfig: function(e) {
                            var t = e.width,
                                r = (0, m._)(e, ["width"]);
                            return (0, p._)((0, x._)({}, r), {
                                collapseHeight: 40,
                                width: s ? t : Math.max(t, I.bV)
                            })
                        }
                    }))
                };
            const he = l().memo(ye);
            var ve = r("GIr8"),
                fe = r("Vhyo"),
                ge = r("UWKL"),
                je = r("qGr6"),
                Te = r("zxgP"),
                Ae = {
                    alignItems: "center"
                },
                be = {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    position: "absolute",
                    top: "-43px",
                    zIndex: "9",
                    height: "42px"
                };
            const Ie = function(e) {
                var t = e.searchSX,
                    r = (0, I.ok)().getI18n,
                    i = (0, ge.Q)().isIPad,
                    l = (0, o.useContext)(u.A),
                    a = l.handleHideOtherPairs,
                    s = l.checked,
                    d = (0, o.useContext)(O.x).hideCurrentSymbol,
                    c = (0, je.t)(),
                    p = (0, o.useMemo)((function() {
                        return i ? Ae : t ? (0, x._)({}, be, t) : be
                    }), [i, t]);
                return d ? null : (0, n.jsx)(ve.A, {
                    sx: (0, x._)({}, c, p),
                    children: (0, n.jsx)(ve.A, {
                        className: "rightContainer",
                        sx: {
                            alignItems: "center",
                            color: "t.third",
                            cursor: ["auto", "pointer"],
                            lineHeight: ["30px", "24px"],
                            paddingLeft: "40px",
                            background: function(e) {
                                return "linear-gradient(to right, transparent, ".concat(e.colors.moduleBg, " 40px,  ").concat(e.colors.moduleBg, " 100%)")
                            }
                        },
                        onClick: function() {
                            return a(!s)
                        },
                        children: (0, n.jsx)(Te.A, {
                            value: "hidePairs",
                            sz: "lg",
                            checked: s,
                            onChange: function() {
                                return !1
                            },
                            children: (0, n.jsx)(fe.A, {
                                sx: {
                                    userSelect: "none",
                                    fontSize: "12px"
                                },
                                children: r("hidePairs", {
                                    defaultValue: "Hide Other Pairs"
                                })
                            })
                        })
                    })
                })
            };
            const we = function(e) {
                var t = e.items,
                    r = e.headers,
                    o = void 0 === r ? [] : r,
                    x = e.girdLoading,
                    p = void 0 === x || x,
                    m = e.updateTime,
                    y = e.isError,
                    h = e.onRefresh,
                    v = e.searchSX,
                    f = e.tradeType,
                    g = e.tpslMode,
                    j = l().useContext(u.A).emptyText;
                return (0, n.jsxs)(s.A, {
                    sx: {
                        position: "relative"
                    },
                    "data-testid": "DataTable",
                    className: "openOrderWeb",
                    children: [!g && (0, n.jsx)(Ie, {
                        searchSX: v
                    }), (0, n.jsx)(c.A, {
                        inner: !0,
                        showLoding: p,
                        showRefresh: y,
                        onRefresh: h,
                        children: (0, n.jsx)(a.A, {
                            children: function(e) {
                                var r = e.width,
                                    l = e.height;
                                return (0, n.jsxs)(i.A, {
                                    sx: {
                                        height: l,
                                        width: r,
                                        overflow: "auto hidden"
                                    },
                                    children: [(0, n.jsx)(V, {
                                        hasData: (null === t || void 0 === t ? void 0 : t.length) > 0,
                                        headers: o
                                    }), (0, n.jsx)(he, {
                                        sx: {
                                            position: "relative"
                                        },
                                        "data-testid": "tradeInfoTable",
                                        data: t,
                                        loading: p,
                                        updateTime: m,
                                        tradeType: f,
                                        autoSizerProps: {
                                            width: Math.max(r, 0),
                                            height: Math.max(l - 32, 0),
                                            extend: !0,
                                            overflow: "initial"
                                        },
                                        emptyNode: (0, n.jsx)(d.p, {
                                            children: j
                                        }),
                                        tpslMode: g
                                    })]
                                })
                            }
                        })
                    })]
                })
            }
        },
        S4PE: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                l = r("GIr8"),
                a = r("Ak+K"),
                s = r("xWya"),
                d = function(e) {
                    var t = e.active,
                        r = e.isUp;
                    return (0, n.jsxs)(l.A, {
                        sx: {
                            flexDirection: "column",
                            ml: "4px",
                            mr: "5px"
                        },
                        children: [(0, n.jsx)(a.A, {
                            transform: "scale(3)",
                            mb: "1px",
                            style: {
                                fontSize: "5px"
                            },
                            color: t && r ? "t.yellow" : "var(--color-IconNormal)"
                        }), (0, n.jsx)(s.A, {
                            transform: "scale(3)",
                            style: {
                                fontSize: "5px"
                            },
                            color: t ? r ? "var(--color-IconNormal)" : "t.yellow" : "var(--color-IconNormal)"
                        })]
                    })
                };
            const c = o().memo(d)
        },
        wgCx: (e, t, r) => {
            r.d(t, {
                A: () => T
            });
            var n = r("S+0I"),
                i = r("mguP"),
                o = r("jbFV"),
                l = r.n(o),
                a = r("mXdx"),
                s = r("DTvD"),
                d = r.n(s),
                c = r("ofJc"),
                u = r("kU6N"),
                x = r("Gz4J"),
                p = r("Qhol"),
                m = r("hAzz"),
                y = r("bQ69"),
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return ["PENDING_NEW", "PENDING"].includes(e) ? "trd-openOrder-status-pending" : ["NEW"].includes(e) ? "trd-openOrder-status-" + e.toLowerCase() : "trd-orderHistory-status-" + (0, m.M1)(e)
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "FILLED" === e ? "Success" : "CANCELED" === e ? "DisableText" : "EXPIRED" === e || "REJECTED" === e ? "Error" : "PrimaryText"
                },
                f = function(e) {
                    var t = e.type,
                        r = e.descKey,
                        n = e.orderType,
                        i = e.data,
                        o = e.showDesc,
                        l = e.side,
                        s = (0, p.ok2)().getI18n;
                    return (0, a.jsxs)("div", {
                        className: "panel-item",
                        children: [o && (0, a.jsx)("div", {
                            className: "content-desc",
                            children: s("trd-openOrder-order".concat(t, "-").concat(r, "-desc2"))
                        }), (0, a.jsxs)("div", {
                            className: "panel-content",
                            children: [(0, a.jsxs)("div", {
                                className: "content-title",
                                children: [s("trd-openOrder-order".concat(t)), n && ": ".concat(s("trd-Position-".concat(n).concat(l === y.Vl.BUY ? "" : "-sell")))]
                            }), (0, a.jsxs)("div", {
                                className: "content-item-container",
                                children: [(0, a.jsxs)("div", {
                                    className: "content-item",
                                    children: [(0, a.jsx)("div", {
                                        children: s("trd-openOrder-type-".concat(null === i || void 0 === i ? void 0 : i.type))
                                    }), (0, a.jsx)("div", {
                                        style: {
                                            color: "var(--color-".concat(v(null === i || void 0 === i ? void 0 : i.origStatus), ")")
                                        },
                                        children: s("".concat(h(null === i || void 0 === i ? void 0 : i.origStatus)))
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "content-item",
                                    children: [(0, a.jsx)("div", {
                                        children: s("trd-position-direction")
                                    }), (0, a.jsx)("div", {
                                        style: {
                                            color: "var(--color-".concat("BUY" === (null === i || void 0 === i ? void 0 : i.side) ? "Buy" : "Sell", ")")
                                        },
                                        children: s("trd-orderForm-".concat(null === i || void 0 === i ? void 0 : i.side))
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "content-item",
                                    children: [(0, a.jsx)("div", {
                                        children: s("trd-openOrder-amount")
                                    }), (0, a.jsxs)("div", {
                                        children: [null === i || void 0 === i ? void 0 : i.origQty, " ", null === i || void 0 === i ? void 0 : i.baseAsset]
                                    })]
                                }), "stopLoss" === n && (0, a.jsxs)("div", {
                                    className: "content-item",
                                    children: [(0, a.jsx)("div", {
                                        children: s("trd-openOrder-trigger")
                                    }), (0, a.jsxs)("div", {
                                        children: [null === i || void 0 === i ? void 0 : i.stopPrice, " ", null === i || void 0 === i ? void 0 : i.quoteAsset]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "content-item",
                                    children: [(0, a.jsx)("div", {
                                        children: s("trd-openOrder-price")
                                    }), (0, a.jsx)("div", {
                                        children: "STOP_LOSS" === (null === i || void 0 === i ? void 0 : i.type) ? s("trd-orderForm-marketprice") : "".concat(null === i || void 0 === i ? void 0 : i.price, " ").concat(null === i || void 0 === i ? void 0 : i.quoteAsset)
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                g = function(e) {
                    var t = e.orderListId,
                        r = e.time,
                        o = e.onClose,
                        d = e.symbol,
                        u = e.side,
                        h = (0, s.useState)({}),
                        v = h[0],
                        g = h[1],
                        j = (0, s.useState)({}),
                        T = j[0],
                        A = j[1],
                        b = (0, s.useState)({}),
                        I = b[0],
                        w = b[1],
                        C = (0, p.ok2)().getI18n,
                        k = (0, p.QsY)().isMobile,
                        S = (0, i._)((0, p.Grl)(), 1)[0],
                        _ = (null === T || void 0 === T ? void 0 : T.symbol) ? (null === I || void 0 === I ? void 0 : I.symbol) ? "OTOCO" : "OTOB" : "OTOC";
                    return (0, s.useEffect)((function() {
                        function e() {
                            return e = (0, n._)(l().mark((function e() {
                                var n, i, o;
                                return l().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, c.bT)({
                                                orderListId: t,
                                                insertTime: r,
                                                accountType: (0, m.V$)(S) ? (0, m.ed)(S) ? "ISOLATED_MARGIN" : "MARGIN" : "",
                                                symbol: (0, m.ed)(S) ? d : ""
                                            });
                                        case 2:
                                            n = e.sent, i = n.data, n.success && (null === i || void 0 === i ? void 0 : i.orders) && (null === (o = i.orders) || void 0 === o || o.forEach((function(e) {
                                                "LIMIT" === (null === e || void 0 === e ? void 0 : e.type) && g(e), "LIMIT_MAKER" === (null === e || void 0 === e ? void 0 : e.type) && A(e), "STOP_LOSS_LIMIT" !== (null === e || void 0 === e ? void 0 : e.type) && "STOP_LOSS" !== (null === e || void 0 === e ? void 0 : e.type) || w(e)
                                            })));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), e.apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [t, r, S]), (0, a.jsxs)("div", {
                        className: "trd-otopanel",
                        children: [(0, a.jsx)("div", {
                            className: "panel-title",
                            children: C("trd-Position-tpSlTitle".concat(u === y.Vl.BUY ? "" : "-sell"))
                        }), (0, a.jsxs)("div", {
                            className: "panel-container",
                            children: [(null === v || void 0 === v ? void 0 : v.symbol) && (0, a.jsx)(f, {
                                type: "A",
                                descKey: _,
                                data: v,
                                side: u,
                                showDesc: !0
                            }), (0, a.jsxs)("div", {
                                className: "panel-orderline",
                                children: [(0, a.jsx)("div", {
                                    className: (null === v || void 0 === v ? void 0 : v.symbol) ? "line1" : ""
                                }), (0, a.jsxs)("div", {
                                    className: "line-sub",
                                    children: [(0, a.jsx)("div", {
                                        className: (null === T || void 0 === T ? void 0 : T.symbol) ? "line2" : "flex-1"
                                    }), (0, a.jsx)("div", {
                                        className: (null === I || void 0 === I ? void 0 : I.symbol) ? "line3" : "flex-1"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "order-sub",
                                children: [(null === T || void 0 === T ? void 0 : T.symbol) ? (0, a.jsx)(f, {
                                    type: "B",
                                    descKey: "OTOCO",
                                    orderType: "takeProfit",
                                    data: T,
                                    side: u,
                                    showDesc: null === I || void 0 === I ? void 0 : I.symbol
                                }) : k ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)("div", {}), (null === I || void 0 === I ? void 0 : I.symbol) ? (0, a.jsx)(f, {
                                    type: "C",
                                    descKey: "OTOCO",
                                    orderType: "stopLoss",
                                    data: I,
                                    side: u,
                                    showDesc: null === T || void 0 === T ? void 0 : T.symbol
                                }) : (0, a.jsx)("div", {})]
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                textAlign: "right"
                            },
                            children: (0, a.jsx)(x.A, {
                                type: "button",
                                sz: "middle",
                                variant: "primary",
                                style: {
                                    width: "160px",
                                    height: "40px",
                                    minHeight: "40px",
                                    borderRadius: "8px"
                                },
                                onClick: function() {
                                    return o()
                                },
                                children: C("Ok")
                            })
                        })]
                    })
                },
                j = function(e) {
                    var t = e.orderListId,
                        r = e.time,
                        n = e.symbol,
                        i = e.side,
                        o = (0, p.ok2)().getI18n,
                        l = (0, s.useCallback)((function() {
                            var e = (0, u.aF)({
                                needCloseIcon: !0,
                                closeSx: {
                                    color: "var(--color-PrimaryText)"
                                },
                                sx: {
                                    bg: "modalBg",
                                    width: ["92vw", "720px"],
                                    padding: "24px",
                                    borderRadius: "16px"
                                },
                                content: (0, a.jsx)(g, {
                                    orderListId: t,
                                    time: r,
                                    symbol: n,
                                    side: i,
                                    onClose: function() {
                                        return e()
                                    }
                                })
                            }).close
                        }), [t, r, i]);
                    return (0, a.jsx)("div", {
                        onClick: l,
                        style: {
                            color: "var(--color-TextLink)",
                            cursor: "pointer"
                        },
                        children: o("trd-openOrder-strategyView")
                    })
                };
            const T = d().memo(j)
        }
    }
]);