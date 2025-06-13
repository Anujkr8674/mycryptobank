"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7623], {
        ofJc: (e, r, t) => {
            t.d(r, {
                $5: () => s,
                EI: () => u,
                bT: () => c,
                zL: () => l
            });
            var n = t("S+0I"),
                a = t("66mo"),
                o = t.n(a),
                i = t("VA12"),
                l = (function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/capital/v1/private/streamer/order/get-open-orders", r);
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/mbx/v2/private/mbxgateway/order/delall", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/mbx/v1/private/mbxgateway/order/del", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/capital/v1/private/streamer/order/get-trade-orders", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/capital/v1/private/streamer/trade/get-user-trade-detail", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }()),
                c = (function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/capital/v1/private/streamer/trade/get-user-trades", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, i.post)("/bapi/mbx/v1/private/streamer/order/order/get-list-orders", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }()),
                s = function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, i.post)("/bapi/capital/v1/private/streamer/order/get-trade-orders", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        data: [],
                                        total: 0,
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", t);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, i.post)("/bapi/capital/v2/private/streamer/order/fetch-tran-orders", r));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        rEu4: (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        mwnt: (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fill: "currentColor",
                    d: "M3 4h18v3H3z"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 2H9v2h6V2zm4 5H5v14h14V7zm-8.5 2H8v9h2.5V9zm3 0H16v9h-2.5V9z",
                    fill: "currentColor"
                }))
            }
        },
        Fyn1: (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.879 3.293l2.828 2.828-2.12 2.121-2.83-2.828 2.122-2.121zm-3.183 3.182l2.829 2.829-4.667 4.666H10.03v-2.828l4.666-4.667zM7 4h4v3H7v10h10v-4h3v7H4V4h3z",
                    fill: "currentColor"
                }))
            }
        },
        xWya: (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: e.color
                }, e), o().createElement("path", {
                    d: "M16 9v2l-4 4.24L8 11V9h8z",
                    fill: "currentColor"
                }))
            }
        },
        "Ak+K": (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: e.color
                }, e), o().createElement("path", {
                    d: "M8 15.24v-2L12.24 9l4.24 4.24v2H8z",
                    fill: "currentColor"
                }))
            }
        },
        "yZa/": (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("PzHQ");
            const l = function(e) {
                return o().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z",
                    fill: "currentColor"
                }))
            }
        },
        "l2+Y": (e, r, t) => {
            t.r(r), t.d(r, {
                default: () => te
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("S+0I"),
                l = t("mguP"),
                c = t("d12p"),
                s = t("jbFV"),
                u = t.n(s),
                d = t("MD8j"),
                p = t("Vhyo"),
                f = t("kU6N"),
                x = t("bQ69"),
                h = t("Qhol"),
                v = t("OCZr"),
                m = t("MiRG"),
                g = t("nxXE"),
                y = t("Rlgd"),
                b = t("K9c2"),
                C = t("FWGn"),
                w = t("cL68"),
                T = t("mnvu"),
                A = t("rit8"),
                k = t("/4Sa"),
                j = t("mKaV"),
                S = t("idM8"),
                O = t("TQk5"),
                _ = t("2IQ4"),
                z = t("NRnv"),
                I = t("cDUC"),
                P = function() {
                    var e = (0, a.useContext)(T.A).actionCancel,
                        r = (0, l._)((0, h.Grl)(), 1)[0],
                        t = (0, h.ok2)().getI18n,
                        o = (0, d.d4)((function(e) {
                            return e.setting.layout
                        })),
                        i = (0, a.useMemo)((function() {
                            return t("trd-cancel-all", {
                                defaultValue: "Click to cancel all here if you want."
                            })
                        }), [t]),
                        c = (0, a.useMemo)((function() {
                            return t("trd-openOrder-action", {
                                defaultValue: "Cancel All"
                            })
                        }), [t]);
                    return (0, n.jsxs)(_.A, {
                        sx: {
                            marginTop: ["0px", "16px"]
                        },
                        children: [i, (0, n.jsx)("span", {
                            className: "refresh-button",
                            id: "cancel-all-orders-in-error-container",
                            onClick: function() {
                                e((function() {
                                    return !0
                                }), t("trd-openOrder-actionAllMsg", {
                                    defaultValue: "Are you sure you want to cancel all?"
                                }), 0), (0, z.US)({
                                    layout: o,
                                    elementid: "cancel-all-orders-in-error-container"
                                }), (0, I.Nb)(r)
                            },
                            children: c
                        })]
                    })
                };
            const H = o().memo(P);
            var V = t("GIr8"),
                E = t("zxgP"),
                L = function(e) {
                    var r = e.hasData,
                        t = (0, w.ok)().getI18n,
                        o = (0, a.useContext)(T.A),
                        i = o.handleHideOtherPairs,
                        l = o.checked,
                        c = o.actionCancel,
                        s = (0, h.nHk)();
                    return (0, n.jsxs)(V.A, {
                        style: {
                            height: "40px",
                            borderBottom: "1px solid var(--color-Line)",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [(0, n.jsx)(E.A, {
                            name: "hidePairs",
                            checked: l,
                            onChange: function() {
                                return i(!l)
                            },
                            children: (0, n.jsx)(p.A, {
                                sx: {
                                    userSelect: "none",
                                    fontSize: "12px"
                                },
                                children: t("hideSymbols", {
                                    defaultValue: "Hide Other Symbols"
                                })
                            })
                        }), (0, n.jsx)(_.A, {
                            sx: {
                                alignItems: "center",
                                fontSize: 1
                            },
                            children: s && (0, n.jsx)("div", {
                                style: {
                                    color: "var(--color-PrimaryText)",
                                    backgroundColor: "var(--color-Line)",
                                    borderRadius: "6px",
                                    height: "24px",
                                    lineHeight: "24px",
                                    padding: "0 8px",
                                    fontSize: "12px",
                                    marginLeft: "4px"
                                },
                                onClick: r ? function() {
                                    c((function() {
                                        return !0
                                    }), t("actionAllMsg", {
                                        defaultValue: "Are you sure you want to cancel all?"
                                    }), 0)
                                } : void 0,
                                children: t("action", {
                                    defaultValue: "Cancel All"
                                })
                            })
                        })]
                    })
                };
            const R = o().memo(L);
            var D = t("dRNT"),
                M = t("B8MU"),
                B = t("b2AH"),
                Q = t("ns3d"),
                F = t("yUtd"),
                N = t("yhot"),
                G = t("wgCx");
            const U = function(e) {
                var r = e.orderId,
                    t = e.side,
                    o = (e.contingencyType, e.orderListId),
                    i = (e.userId, e.time),
                    l = (0, w.ok)().getI18n,
                    c = (0, B.ok)().getI18n,
                    s = (0, a.useContext)(T.A).actionCancel,
                    u = (0, A.i7)(e),
                    d = u.nextDate,
                    f = u.nextPair,
                    h = u.nextPrice,
                    v = u.nextAmount,
                    m = u.nextType,
                    g = u.nextFilled,
                    y = u.nextTriggerConditions,
                    b = u.nextTrailingDelta,
                    C = u.nextTrailingTime,
                    k = u.nextWorkingTime,
                    j = u.nextOrderType,
                    S = u.nextSor,
                    O = u.isOTOType,
                    _ = u.nextExecutedQty,
                    z = [{
                        label: "".concat(l("filled"), " / ").concat(l("amount")),
                        value: "".concat(_, " / ").concat(v)
                    }, {
                        label: l("price", {
                            defaultValue: "Price"
                        }),
                        value: h
                    }];
                y && y !== x.jr && z.push({
                    label: (0, n.jsx)(N.Q, {
                        nextTriggerConditions: y,
                        trailingTime: C,
                        workingTime: k,
                        nextOrderType: j,
                        nextTrailingDelta: b,
                        children: l("Conditions", {
                            defaultValue: "Conditions"
                        })
                    }),
                    value: (0, n.jsxs)(p.A, {
                        sx: {
                            ".status-tip-container": {
                                display: "inline"
                            }
                        },
                        children: [y, (0, n.jsx)(F.A, {
                            trailingDelta: b
                        }), (!!C || !!k) && (0, n.jsx)(M.A, {
                            size: 12,
                            className: "text-Success ml-[4px] align-[-2px]"
                        })]
                    })
                }), b && z.push({
                    label: c("trd-orderForm-trailing-delta", {
                        defaultValue: "Trailing Delta"
                    }),
                    value: "".concat(b, "%")
                }), S && "-" !== S && z.push({
                    label: c("trd-orderform-sor", {
                        defaultValue: "SOR"
                    }),
                    value: S
                }), O && z.push({
                    label: c("trd-orderForm-tpsl"),
                    value: (0, n.jsx)(G.A, {
                        orderListId: o,
                        time: i,
                        symbol: f.trim().split("/").join(""),
                        side: t
                    })
                });
                var I = "BUY" === t ? "var(--color-Buy)" : "var(--color-Sell)";
                return (0, n.jsxs)("div", {
                    style: {
                        color: "var(--color-PrimaryText)",
                        paddingBottom: "12px",
                        borderBottom: "1px solid",
                        borderBottomColor: "var(--color-Line)"
                    },
                    children: [(0, n.jsxs)("div", {
                        style: {
                            padding: "12px 0"
                        },
                        children: [(0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                fontSize: "14px",
                                justifyContent: "space-between"
                            },
                            children: [(0, n.jsx)("div", {
                                style: {
                                    fontWeight: "500",
                                    fontSize: "16px"
                                },
                                children: f.split("/").join(" / ")
                            }), (0, n.jsxs)("div", {
                                style: {
                                    display: "flex"
                                },
                                children: [(0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("div", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: g
                                    }), (0, n.jsx)("div", {
                                        style: {
                                            position: "relative",
                                            width: "28px",
                                            height: "3px",
                                            borderRadius: "3px",
                                            backgroundColor: "var(--color-Line)"
                                        },
                                        children: (0, n.jsx)("div", {
                                            style: {
                                                height: "100%",
                                                borderRadius: "3px",
                                                backgroundColor: I,
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: g
                                            }
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    style: {
                                        color: "var(--color-PrimaryText)",
                                        backgroundColor: "var(--color-Line)",
                                        borderRadius: "6px",
                                        height: "24px",
                                        lineHeight: "24px",
                                        padding: "0 8px",
                                        fontSize: "12px",
                                        marginLeft: "4px"
                                    },
                                    onClick: function() {
                                        s((function(e) {
                                            var t = e.orderId;
                                            return r === t
                                        }))
                                    },
                                    children: l("cancel", {
                                        defaultValue: "Cancel"
                                    })
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                fontWeight: "400",
                                fontSize: "12px",
                                lineHeight: "18px",
                                gap: "4px"
                            },
                            children: [(0, n.jsx)("div", {
                                style: {
                                    color: I
                                },
                                children: "BUY" === t ? "".concat(m, " / ").concat(l("sideBuy", {
                                    defaultValue: "Buy"
                                })) : "".concat(m, " / ").concat(l("sideSell", {
                                    defaultValue: "Sell"
                                }))
                            }), (0, n.jsx)("div", {
                                style: {
                                    color: "var(--color-SecondaryText)"
                                },
                                children: d
                            })]
                        })]
                    }), (0, n.jsx)(Q.$_, {
                        listArray: z
                    })]
                })
            };
            var W = function(e) {
                var r = e.outLoading,
                    t = e.items,
                    a = e.girdLoading,
                    i = e.isError,
                    l = e.onRefresh;
                o().useContext(T.A).emptyText;
                return (0, n.jsx)(S.A, {
                    sx: {
                        padding: "0 16px 25px 16px"
                    },
                    children: (0, n.jsxs)(O.A, {
                        inner: !0,
                        sx: {
                            position: "initial"
                        },
                        fullScreen: !0,
                        showLoding: r,
                        showRefresh: i,
                        onRefresh: l,
                        onRefreshChildren: (0, n.jsx)(H, {}),
                        children: [(0, n.jsx)(R, {
                            hasData: (null === t || void 0 === t ? void 0 : t.length) > 0
                        }), (0, n.jsx)(D.A, {
                            data: t,
                            loading: a,
                            Column: U
                        })]
                    })
                })
            };
            const X = o().memo(W);
            var Y = t("b9LU"),
                $ = t("wtFP"),
                K = function(e) {
                    var r = e.tradeType,
                        t = e.type;
                    (0, $.u4)("$WebClick", {
                        module: "oop",
                        $element_id: "cancel_order_type",
                        pageName: $.$1[r],
                        df_source: $.Yx[r],
                        type: t || "cancel"
                    })
                },
                Z = t("nPYQ"),
                J = [void 0, "LIMIT", "STOP_LIMIT", "LIMIT_MAKER"],
                q = function(e) {
                    var r = e.headers,
                        t = void 0 === r ? [] : r,
                        o = e.searchSX,
                        s = (0, a.useContext)(Y.x),
                        S = s.currentSymbol,
                        O = s.currentGroup,
                        _ = (0, d.wA)(),
                        z = (0, w.ok)().getI18n,
                        I = (0, l._)((0, h.Grl)(), 1)[0],
                        P = (0, a.useRef)(null),
                        H = (0, h.l6p)().getFormatSize,
                        V = (0, A.IT)(I),
                        E = V.preOrders,
                        L = V.loading,
                        R = V.updateTime,
                        D = V.isError,
                        M = V.onRefresh,
                        B = (0, A.xD)(),
                        Q = B.orderSide,
                        F = B.setOrderSide,
                        N = (0, A.SO)(),
                        G = N.orderType,
                        U = N.setOrderType,
                        W = (0, k.Q)(I),
                        $ = W.loading,
                        q = W.delOpenOrders,
                        ee = (0, h.FH0)().isOrderHideOtherPairs,
                        re = (0, a.useState)(ee),
                        te = re[0],
                        ne = re[1],
                        ae = (0, a.useCallback)((function(e) {
                            ne(e), _.userProfile.save({
                                key: "isOrderHideOtherPairs",
                                value: e
                            })
                        }), [_.userProfile]),
                        oe = "0" === O ? (0, y.hy)(E) : (0, y.hy)(E, te, S, Q, G),
                        ie = (0, Z.C)().side,
                        le = oe.sort((function(e, r) {
                            return "asc" === ie ? Number(e.price) - Number(r.price) : "desc" === ie ? Number(r.price) - Number(e.price) : 0
                        })),
                        ce = (0, g.o)(),
                        se = (0, a.useCallback)(function() {
                            var e = (0, i._)(u().mark((function e(r, t) {
                                var n, a, o, i, l;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = [], a = [], o = 0 === t, le.forEach((function(e) {
                                                e && r(e) && (n.push(e.symbol), a.push(e.orderId))
                                            })), n.length && a.length && (i = o && I === x.Gr.SPOT ? Array.from(new Set((0, c._)(n))) : n, l = I === x.Gr.SPOT ? o : "number" === typeof t, q({
                                                symbols: i,
                                                orderIds: a,
                                                isAll: l,
                                                hideOtherSymbol: te,
                                                type: J[t]
                                            })), K({
                                                tradeType: I,
                                                type: o ? "cancel_all" : "cancel"
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(r, t) {
                                return e.apply(this, arguments)
                            }
                        }(), [le, q, te, I]),
                        ue = se,
                        de = function(e) {
                            var r = e.message,
                                t = e.onOk,
                                a = e.okText,
                                o = e.cancelText,
                                i = (0, f.aF)({
                                    content: (0, n.jsx)(v.A, {
                                        message: r,
                                        onOk: function() {
                                            t(), i()
                                        },
                                        onCancel: function() {
                                            return i()
                                        },
                                        okText: (0, n.jsx)(p.A, {
                                            ref: P,
                                            "data-testid": "confirmButton",
                                            children: a
                                        }),
                                        cancelText: o
                                    }),
                                    sx: {
                                        bg: "modalBg",
                                        color: "t.primary",
                                        boxShadow: "elevation3"
                                    },
                                    needCloseIcon: !1
                                }).close;
                            b.r.close = i, b.r.confirm = function() {
                                P.current && (t(), i())
                            }
                        },
                        pe = (0, a.useCallback)(function() {
                            var e = (0, i._)(u().mark((function e(r, t, n) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t ? de({
                                                message: t,
                                                onOk: function() {
                                                    return ue(r, n)
                                                },
                                                cancelText: z("dialog-cancel", {
                                                    defaultValue: "Cancel"
                                                }),
                                                okText: z("dialog-confirm", {
                                                    defaultValue: "Confirm"
                                                })
                                            }) : ue(r, n);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(r, t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), [ue, z]),
                        fe = !le.length && L,
                        xe = !fe && (L || $),
                        he = z("nodata", {
                            defaultValue: "You have no open orders."
                        });
                    (0, a.useEffect)((function() {
                        return function() {
                            b.r.close = null, b.r.confirm = null
                        }
                    }), []), (0, a.useEffect)((function() {
                        F("All"), U("All")
                    }), [S]);
                    var ve = function() {
                        _.orders.mergeState({
                            type: "openOrder.merge",
                            payload: {
                                isError: !1
                            }
                        }), M && M()
                    };
                    return (0, C.C)({
                        name: "openOrder",
                        shouldReport: !fe
                    }), (0, n.jsxs)(T.A.Provider, {
                        value: {
                            symbol: S,
                            emptyText: he,
                            actionCancel: pe,
                            getFormatSize: H,
                            changeSymbol: ce,
                            handleHideOtherPairs: ae,
                            checked: te,
                            group: O
                        },
                        children: [f.j7, (0, n.jsx)(m.A, {
                            children: function(e) {
                                var r = e.isMobile,
                                    a = e.isIPad;
                                return r || a ? (0, n.jsx)(X, {
                                    items: le,
                                    girdLoading: fe,
                                    outLoading: L || $,
                                    isError: D,
                                    onRefresh: ve
                                }) : (0, n.jsx)(j.A, {
                                    items: le,
                                    headers: t,
                                    girdLoading: fe,
                                    outLoading: xe,
                                    updateTime: R,
                                    isError: D,
                                    onRefresh: ve,
                                    searchSX: o,
                                    tradeType: I
                                })
                            }
                        })]
                    })
                };
            const ee = o().memo(q);
            var re = function(e) {
                var r = e.searchSX,
                    t = (0, A.PV)();
                return (0, n.jsx)(ee, {
                    headers: t,
                    searchSX: r
                })
            };
            const te = o().memo(re)
        }
    }
]);