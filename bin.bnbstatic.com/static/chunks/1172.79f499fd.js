"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1172], {
        c2II: (e, t, s) => {
            s.d(t, {
                G: () => a
            });
            const a = (e = [], t, s) => e.reduce(((e, a) => (e[a[t]] = s ? a[s] : a, e)), {})
        },
        oFtQ: (e, t, s) => {
            s.d(t, {
                Ki: () => Te,
                by: () => qe,
                bI: () => we
            });
            var a = s("mXdx"),
                r = s("DTvD"),
                i = s("TiUw"),
                l = s("b5Ab"),
                o = s("nzy6"),
                n = s("4hgs"),
                c = s("aaF1");
            const d = () => (0, n.useQuery)(c.B.QUERY_ISOLATED_ACCOUNT_DETAIL, (() => (0, o.Wo)()), {
                notifyOnChangeProps: ["data"],
                cacheTime: 1 / 0,
                staleTime: 1 / 0
            }) ? .data || [];
            var m = s("r2Gn"),
                x = s("jwne"),
                u = s("fRXv"),
                b = s("1tqE"),
                h = s("T0Sc");
            const y = () => (0, h.o)("", "trade-ui");
            var g = s("TVsB"),
                f = s("Zc2P"),
                N = s("A4nT");
            const j = () => (0, n.useQuery)(N.Bz.QUERY_COIN_LOGO_LIST(), (() => (0, f.K1)()), {
                    notifyOnChangeProps: ["data"],
                    staleTime: 1 / 0
                }),
                v = () => {
                    const {
                        data: e = []
                    } = j();
                    return (0, r.useMemo)((() => e.reduce(((e, t) => ({ ...e,
                        [t.asset]: t.pic
                    })), {})), [e])
                };
            var p = s("yGel");
            const T = () => (0, n.useQuery)(c.B.QUERY_MARGIN_INTEREST_RATE, (() => (0, p.H)()), {
                    notifyOnChangeProps: ["data"],
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0
                }) ? .data || [],
                w = () => {
                    const {
                        data: e
                    } = (0, l.PU)(), {
                        userAssets: t = []
                    } = e || {}, {
                        data: {
                            data: s = []
                        } = {}
                    } = (0, l.Ed)(), a = v(), r = T(), i = {};
                    s.forEach((e => i[e.assetName] = e));
                    const o = {};
                    r.forEach((e => o[e.asset] = e.interestRate));
                    const n = [];
                    return t.forEach((e => {
                        let t = new g.A(e.free).plus(e.locked);
                        const s = new g.A(e.borrowed).plus(e.interest),
                            r = new g.A(t),
                            l = { ...e,
                                assetFullName: i[e.asset] ? .assetFullName,
                                assetLogo: a[e.asset],
                                leverage: i[e.asset] ? .leverage,
                                isBorrowable: i[e.asset] ? .isBorrowable,
                                total: t.toPrecision(8),
                                totalDebt: s.toFixed(8),
                                negativeBalance: "0.00000000",
                                maxRepayment: g.A.minimum(r, s).toFixed(8)
                            };
                        var c;
                        o[e.asset] && (l.hourlyInterestRate = (c = o[e.asset], `${new g.A(c).div(24).times(100).toFixed(8)}%`), l.hourlyInterestRateValue = (e => new g.A(e).div(24).toNumber())(o[e.asset]), l.annualInterestRate = (e => `${new g.A(e).times(36500).div(100).toFixed(8)}%`)(o[e.asset])), n.push(l)
                    })), n || []
                },
                C = (e, t) => {
                    const s = w(),
                        a = {},
                        r = {},
                        i = [];
                    s.forEach((e => {
                        a[e.asset] = parseFloat(e.netAssetOfBtc) + parseFloat(e.liabilityOfBtc), r[e.asset] = parseFloat(e.liabilityOfBtc), e.total && !new g.A(e.total).lte(0) || (e.total = "0.00000000"), i.push(e)
                    }));
                    const l = "asset";
                    if (e) {
                        const s = [];
                        let o, n;
                        if (t) {
                            const a = t.replace(e, "");
                            i.forEach((t => {
                                t.asset === e ? o = t : t.asset === a ? n = t : s.push(t)
                            }))
                        } else i.forEach((t => {
                            t.asset === e ? o = t : s.push(t)
                        }));
                        const c = s.sort(((e, t) => {
                                const s = a[t[l]] - a[e[l]];
                                if (0 === s) {
                                    const s = r[t[l]] - r[e[l]];
                                    if (0 === s) {
                                        return e[l].localeCompare(t[l])
                                    }
                                    return s
                                }
                                return s
                            })),
                            d = [];
                        return o && d.push(o), n && d.push(n), d.concat(c)
                    }
                    return i.sort(((e, t) => {
                        const s = a[t[l]] - a[e[l]];
                        if (0 === s) {
                            const s = r[t[l]] - r[e[l]];
                            if (0 === s) {
                                return e[l].localeCompare(t[l])
                            }
                            return s
                        }
                        return s
                    }))
                };
            var A = s("SPlc");
            const S = () => (0, n.useQuery)(c.B.QUERY_ISOLATED_INTEREST_RATE, (() => (0, A.qv)()), {
                    notifyOnChangeProps: ["data"],
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0
                }) ? .data || [],
                k = () => {
                    const e = d(),
                        t = S(),
                        s = v();
                    let a = [];
                    const r = e => `${new g.A(e).div(24).times(100).toFixed(8)}%`,
                        i = e => new g.A(e).div(24).toNumber(),
                        l = e => `${new g.A(e).times(36500).toFixed(8)}%`;
                    if (Array.isArray(t) && Array.isArray(e)) {
                        const o = {};
                        t.forEach((e => {
                            o[e.asset] = e
                        })), a = e.map((e => {
                            const t = new g.A(e.base.interest).plus(new g.A(e.base.borrowed)),
                                a = new g.A(e.quote.interest).plus(new g.A(e.quote.borrowed)),
                                n = { ...e,
                                    base: { ...e.base,
                                        interestRate: o[e.base.assetName] ? .interestRate ? ? "0",
                                        asset: e.base.assetName,
                                        assetLogo: s[e.base.assetName],
                                        isBorrowable: e.base.borrowEnabled,
                                        displaySymbol: `${e.base.assetName}/${e.quote.assetName}`,
                                        status: e.status,
                                        delistTime: e.delistTime,
                                        totalDebt: t.toFixed(8),
                                        maxRepayment: g.A.minimum(new g.A(e.base.total), t).toFixed(8)
                                    },
                                    quote: { ...e.quote,
                                        interestRate: o[e.quote.assetName] ? .interestRate ? ? "0",
                                        asset: e.quote.assetName,
                                        assetLogo: s[e.quote.assetName],
                                        isBorrowable: e.quote.borrowEnabled,
                                        displaySymbol: `${e.base.assetName}/${e.quote.assetName}`,
                                        status: e.status,
                                        delistTime: e.delistTime,
                                        totalDebt: a.toFixed(8),
                                        maxRepayment: g.A.minimum(new g.A(e.quote.total), a).toFixed(8)
                                    },
                                    symbol: `${e.base.assetName}${e.quote.assetName}`,
                                    displaySymbol: `${e.base.assetName}/${e.quote.assetName}`,
                                    borrowed: parseFloat(e.base.borrowed) + parseFloat(e.quote.borrowed),
                                    quoteName: e.quote.assetName,
                                    baseName: e.base.assetName,
                                    symbolForSearch: `${e.base.assetName.toLowerCase()}${e.quote.assetName.toLowerCase()}`
                                };
                            return n.base.interestRate && (n.base.hourlyInterestRate = r(n.base.interestRate), n.base.hourlyInterestRateValue = i(n.base.interestRate), n.base.annualInterestRate = l(n.base.interestRate)), n.quote.interestRate && (n.quote.hourlyInterestRate = r(n.quote.interestRate), n.quote.hourlyInterestRateValue = i(n.quote.interestRate), n.quote.annualInterestRate = l(n.quote.interestRate)), n
                        }))
                    }
                    return a || []
                },
                {
                    TabPane: q
                } = m.A,
                R = ({
                    types: e,
                    type: t,
                    onChangeType: s
                }) => {
                    const {
                        t: r
                    } = y();
                    return (0, a.jsxs)(m.A, {
                        className: "margin-type-switch w-full",
                        selectedIndex: e.indexOf(t),
                        variant: "segment-outline",
                        onChange: t => {
                            s(e[t])
                        },
                        children: [(0, a.jsx)(q, {
                            tabNode: r("trd-layout-crossMargin")
                        }), (0, a.jsx)(q, {
                            tabNode: r("trd-layout-isolatedMargin")
                        })]
                    })
                },
                E = (0, r.memo)(R);
            var B = s("J+v0"),
                D = s.n(B),
                F = s("jmB/"),
                P = s("kcvK"),
                M = s("Gz4J"),
                O = s("5qdK"),
                I = s("/snk"),
                L = s("tSdT"),
                $ = s("tM9B"),
                _ = s("vjpm"),
                U = s("HS2I"),
                Y = s("KzWS");
            const z = ({
                text: e
            }) => (0, a.jsxs)("div", {
                className: "bg-BadgeBg mt-6 p-3 rounded-xl flex items-start",
                children: [(0, a.jsx)(Y.A, {
                    className: "h-5 w-5"
                }), (0, a.jsx)("div", {
                    className: "t-body5 text-PrimaryText ml-1",
                    children: e
                })]
            });
            var X = s("9tGb"),
                Q = s("pPGf"),
                G = s("vWh5"),
                V = s("c2II"),
                H = s("+LY0");
            const K = {
                    USDTUSDT: "1.00000000",
                    USDCUSDT: "1.00000000",
                    BUSDUSDT: "1.00000000",
                    BTCBTC: "1.00000000"
                },
                W = [{
                    symbol: "BTCUSDT",
                    rSymbol: "USDTBTC"
                }, {
                    symbol: "BTCUSDC",
                    rSymbol: "USDCBTC"
                }, {
                    symbol: "BTCBUSD",
                    rSymbol: "BUSDBTC"
                }, {
                    symbol: "BTCEUR",
                    rSymbol: "EURBTC"
                }];
            const J = async () => {
                    const e = await (0, G.z6)(),
                        t = function(e) {
                            return W.forEach((({
                                symbol: t,
                                rSymbol: s
                            }) => {
                                "undefined" !== typeof e[t] && (e[s] = (0, $.k3)(1, e[t]).toFixed(20))
                            })), e
                        }({ ...(0, V.G)(e, "symbol", "price"),
                            ...K
                        });
                    if (e) return t;
                    throw new Error("queryIndexPriceMap failed")
                },
                Z = () => {
                    const e = (0, n.useQueryClient)(),
                        t = (0, n.useQuery)(c.B.QUERY_INDEX_PRICE_MAP, J);
                    return (0, r.useEffect)((() => {
                        const t = (({
                            queryClient: e
                        }) => (0, H.E)((t => {
                            const s = {};
                            (t.exchangeRate || []).forEach((({
                                baseAsset: e,
                                exchangeRate: t
                            }) => {
                                const a = t / 10 ** 10;
                                s[`${e}BTC`] = a.toFixed(12)
                            })), e.setQueryData(c.B.QUERY_INDEX_PRICE_MAP, (e => ({ ...e,
                                ...s
                            })))
                        })))({
                            queryClient: e
                        });
                        return t
                    }), [e]), t
                };
            var ee = s("VA12"),
                te = s("K6aR"),
                se = s("AaY9"),
                ae = s("9Fi+"),
                re = s("lguG");
            const ie = () => {
                    const {
                        data: e
                    } = (0, n.useQuery)("complianceLeverage", (() => (0, se.T)()), {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0
                    });
                    return e && e.maxLeverage && Number(e.maxLeverage) > 0 ? Number(e.maxLeverage) : 999
                },
                le = e => (0, n.useQuery)(["assetExchangeInfo", e], (() => (async e => await (0, te.o5)(e))(e))),
                oe = [0, 20, 40, 60, 80, 100],
                ne = ({
                    assets: e,
                    amount: t,
                    setAmount: s,
                    selectCoin: i,
                    setSelectCoin: l,
                    showLeverage: o = !1,
                    valueField: n = "total",
                    hasError: c = !1,
                    customPlaceholder: d
                }) => {
                    const {
                        data: m = {}
                    } = Z(), x = ie(), [u, b] = (0, r.useState)(!1), {
                        t: h
                    } = y(), g = (0, r.useCallback)(((e, t) => {
                        const s = `${e}USDT`;
                        return e && m && void 0 !== m[s] && t ? (0, $.lw)(t, m[s]).toFixed(2) : ""
                    }), [m]), f = (0, r.useMemo)((() => e.find((e => e.asset === i))), [e, i]), N = (0, r.useCallback)((({
                        selectedValue: e,
                        textFieldValue: t
                    }) => {
                        s(t), e[0] && l(e[0])
                    }), [s, l]), j = (0, r.useMemo)((() => e.map((e => ({
                        icon: (0, a.jsx)("img", {
                            style: {
                                height: "20px",
                                width: "20px"
                            },
                            src: e.assetLogo
                        }),
                        value: e.asset,
                        children: (0, a.jsxs)("div", {
                            className: "flex justify-between items-center w-full",
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("div", {
                                    className: "t-subtitle1 text-PrimaryText flex items-center",
                                    children: [(0, a.jsx)("span", {
                                        children: e.asset
                                    }), o && e.leverage && (0, a.jsxs)("span", {
                                        className: "bg-BadgeBg rounded-sm t-caption2 ml-1 px-1 text-TextLink",
                                        children: [Math.min(x, +e.leverage), "x"]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle3 text-SecondaryText",
                                    children: e.assetFullName
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "text-right",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body5 text-PrimaryText",
                                    children: e[n]
                                }), (0, a.jsxs)("div", {
                                    className: "t-caption1 text-SecondaryText",
                                    children: ["$", g(e.asset, e[n])]
                                })]
                            })]
                        })
                    })))), [e, e.length, g]);
                    return (0, a.jsx)("div", {
                        className: "max-h-60",
                        children: (0, a.jsx)(X.A, {
                            className: "w-full",
                            onValueChange: N,
                            options: j,
                            status: c ? "error" : "success",
                            selectProps: {
                                onVisibleChange: e => {
                                    b(e)
                                },
                                useReactPopper: !1,
                                customField: f && (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, a.jsx)("img", {
                                        className: "h-5 w-5 mr-[5px]",
                                        src: f.assetLogo
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsxs)("div", {
                                            className: "t-subtitle1 text-PrimaryText flex items-center",
                                            children: [(0, a.jsx)("span", {
                                                children: f.asset
                                            }), o && f.leverage && (0, a.jsxs)("span", {
                                                className: "bg-BadgeBg text-TextLink rounded-sm t-caption2 ml-1 px-1",
                                                children: [Math.min(x, +f.leverage), "x"]
                                            })]
                                        })
                                    }), (0, a.jsx)(Q.A, {
                                        className: `h-5 w-5 mx-[5px] transition-transform${u&&" rotate-180"}`
                                    }), (0, a.jsx)("div", {
                                        className: "w-[1px] h-6 bg-Line"
                                    })]
                                }),
                                searchPlaceholder: h("trd-market-searchHolder"),
                                listMaxHeight: 250
                            },
                            defaultSelectValue: i,
                            value: t,
                            placeholder: d || h("trd-dialog-enter-amount"),
                            size: "large"
                        })
                    })
                },
                ce = e => {
                    if (void 0 === e) return "-";
                    const t = Number(e);
                    if (0 === t) return "0";
                    if (e && !isNaN(t)) {
                        return (0, $.ZV)(new g.A(e), 8).toString().replace(/\.?0+$/, "")
                    }
                    return "-"
                },
                de = e => {
                    if ("." === e) return "";
                    if ("00" === e) return "0";
                    let t = e.replace(/[^0-9.]/g, "");
                    (t.match(/\./g) || []) ? .length > 1 && (t = t.replace(/\.$/, "")), /^\.\d/.test(t) && (t = `0${t}`);
                    const s = t.split(".");
                    return s.length > 1 && s[1].length > 8 && (s[1] = s[1].slice(0, 8), t = s.join(".")), t
                },
                me = ({
                    loading: e,
                    setLoading: t,
                    selectCoin: s,
                    setSelectCoin: i,
                    onCloseDialog: o,
                    refetchCross: n,
                    handleTransfer: c
                }) => {
                    const [d, m] = (0, r.useState)(""), [x, u] = (0, r.useState)(0), [b, h] = (0, r.useState)("0.00000000"), [f, N] = (0, r.useState)(!1), j = C(), v = (() => {
                        const {
                            data: e
                        } = (0, l.PU)(), {
                            userAssets: t,
                            ...s
                        } = e || {
                            coolingOff: {},
                            userAssets: []
                        };
                        return s
                    })(), {
                        isMobile: p
                    } = (0, _.Q)(), {
                        enqueueNotification: T
                    } = (0, L.A)(), {
                        t: w
                    } = y(), {
                        isOldPMAccount: A,
                        isNewPMAccount: S
                    } = (0, U.usePmAccountInfo)().value || {}, k = (0, r.useMemo)((() => j.find((e => e.asset === s))), [j, s]), q = (0, r.useMemo)((() => !!j.find((e => Number(e ? .total) > 0))), [j]), R = (0, r.useMemo)((() => !!(!s || !d || parseFloat(d) <= 0 || v && v.coolingOff && v.coolingOff.on || k && !k.isBorrowable || k && b && new g.A(d).gt(b))), [b, s, k, d]), E = (0, r.useMemo)((() => A || S || v && "MARGIN_2" === v.accountType), [A, S, v]), B = (0, r.useMemo)((() => {
                        let e = "";
                        return k && (k.isBorrowable ? !f && b && new g.A(d).gt(b) && (e = w("trd-dialog-ltBorrowLimit").replace("$maxBorrowAmount", (0, $.Xq)(b, 8))) : e = w("trd-dialog-uspensionOfLoan", {
                            asset: k.asset
                        })), e
                    }), [k, d, b, f]), Y = (0, r.useMemo)((() => {
                        let e = "0";
                        return k && k.hourlyInterestRateValue && d && (e = new g.A(d).times(k.hourlyInterestRateValue).toFixed(8)), e
                    }), [d, k]), X = (0, r.useMemo)((() => {
                        let e = "/support/faq/binance-cross-margin-trading-guide-360041505471?hl=en";
                        return "MARGIN_2" === v.accountType ? (e = "/support/faq/how-to-calculate-the-maximum-borrow-limit-on-cross-margin-pro-84aac4a694f54c55a95f721b33cfd174?hl=en", (0, a.jsxs)(a.Fragment, {
                            children: [w("trd-dialog-max-borrow-amount-tip-pro"), " ", (0, a.jsx)("a", {
                                target: "_blank",
                                className: "no-underline text-TextLink",
                                href: e,
                                style: {
                                    textDecoration: "none"
                                },
                                rel: "noreferrer",
                                children: w("trd-dialog-cross-max-leverage-learn-more")
                            })]
                        })) : "_3X" === v.marginBar ? (0, a.jsxs)(a.Fragment, {
                            children: [w("trd-dialog-max-borrow-amount-tip-3x"), " ", (0, a.jsx)("a", {
                                target: "_blank",
                                className: "no-underline text-TextLink",
                                href: e,
                                style: {
                                    textDecoration: "none"
                                },
                                rel: "noreferrer",
                                children: w("trd-dialog-cross-max-leverage-learn-more")
                            })]
                        }) : "_5X" === v.marginBar ? (0, a.jsxs)(a.Fragment, {
                            children: [w("trd-dialog-max-borrow-amount-tip-5x"), " ", (0, a.jsx)("a", {
                                target: "_blank",
                                className: "no-underline text-TextLink",
                                href: e,
                                style: {
                                    textDecoration: "none"
                                },
                                rel: "noreferrer",
                                children: w("trd-dialog-cross-max-leverage-learn-more")
                            })]
                        }) : null
                    }), [v, w]), Q = (0, r.useCallback)((e => {
                        const t = de(e);
                        m(t), u(0)
                    }), [b]), G = (0, r.useCallback)((e => {
                        (async e => {
                            const t = {
                                value: "0.00000000",
                                code: ""
                            };
                            if (e) {
                                const s = await (0, ee.get)(`/bapi/margin/v1/private/margin/max-borrowable?asset=${e}`);
                                s && (t.value = s.data ? .value || "0.00000000", t.code = s.code)
                            }
                            return t
                        })(e).then((e => {
                            h(e.value), "051061" === e.code ? N(!0) : N(!1)
                        }))
                    }), []), V = (0, r.useCallback)((e => {
                        s !== e && (i(e), G(e))
                    }), [s]), H = (0, r.useCallback)((() => {
                        m(b)
                    }), [b]), K = (0, r.useCallback)((e => {
                        if (!b) return;
                        const t = new g.A(b).times(e).div(100).toFixed(8);
                        m(t), u(e)
                    }), [b]), W = (0, r.useCallback)((async () => {
                        if (!e) {
                            t(!0);
                            const e = await (async (e, t) => await (0, ae.Ms)({
                                asset: e,
                                amount: t
                            }))(s, d);
                            e.success && (T(w("trd-dialog-requestApproved"), {
                                variant: "success",
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                }
                            }), m(""), o()), n(), t(!1)
                        }
                    }), [s, e, s, d]);
                    (0, r.useEffect)((() => {
                        G(s)
                    }), []);
                    return (0, a.jsx)(a.Fragment, {
                        children: q ? (0, a.jsxs)(a.Fragment, {
                            children: [f ? (0, a.jsx)(z, {
                                text: w("trd-dialog-fuse-borrowable", {
                                    asset: s
                                })
                            }) : v && v.coolingOff && v.coolingOff.endTime && (0, a.jsx)(z, {
                                text: w("trd-dialog-mcl-info", {
                                    date: D()(+v.coolingOff.endTime).format("YYYY-MM-DD HH:mm:ss")
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mt-6",
                                children: [(0, a.jsx)("div", {
                                    className: "t-subtitle2 text-SecondaryText",
                                    children: w("trd-dialog-borrow-amount")
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, a.jsxs)("div", {
                                        className: "t-body3 text-TertiaryText mr-1",
                                        children: [w("trd-dialog-avbl"), " ", k && (0, $.Xq)(k.total, 6), " ", s]
                                    }), (0, a.jsx)("div", {
                                        className: "flex items-center cursor-pointer",
                                        onClick: c,
                                        children: (0, a.jsx)(O.A, {
                                            className: "cursor-pointer text-PrimaryYellow"
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "my-1 relative pb-6",
                                children: [(0, a.jsx)(ne, {
                                    assets: j,
                                    amount: d,
                                    setAmount: Q,
                                    selectCoin: s,
                                    setSelectCoin: V,
                                    valueField: "total",
                                    showLeverage: E,
                                    hasError: !!B
                                }), B ? (0, a.jsx)("div", {
                                    className: "pt-1 t-body5 text-Error",
                                    children: B
                                }) : (0, a.jsxs)("div", {
                                    className: "pt-1 t-caption1 text-TertiaryText",
                                    children: [w("trd-dialog-estimated-hourly-interest"), ": ", `${Y} ${s}`]
                                }), (0, a.jsx)("div", {
                                    className: "absolute right-3 top-3 t-subtitle1 text-TextLink cursor-pointer",
                                    onClick: H,
                                    children: w("trd-dialog-max")
                                })]
                            }), !p && (0, a.jsx)("div", {
                                className: "pb-6",
                                children: (0, a.jsx)(F.A, {
                                    value: x,
                                    onChange: K,
                                    showStepMarks: !1,
                                    steppers: oe.map((e => ({
                                        value: e
                                    }))),
                                    renderFn: e => `${e}%`
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: w("trd-dialog-interestrate")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: k ? .hourlyInterestRate
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex text-TertiaryText t-caption1",
                                children: [(0, a.jsx)("div", {
                                    className: "mr-1",
                                    children: "*"
                                }), (0, a.jsx)("div", {
                                    children: w("trd-dialog-ratedesc")
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: w("trd-dialog-borrowed")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [k && k.borrowed && `${(0,$.Xq)(k.borrowed,8)}`, " ", k ? .asset]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [X ? (0, a.jsx)(P.A, {
                                    tooltips: X,
                                    enablePortal: !0,
                                    useReactPopper: !0,
                                    arrow: !0,
                                    once: !0,
                                    children: (0, a.jsx)("div", {
                                        className: "t-body3 text-TertiaryText underline decoration-dotted",
                                        children: w("trd-dialog-maximumBorrowAmount")
                                    })
                                }) : (0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: w("trd-dialog-maximumBorrowAmount")
                                }), f ? (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-Error text-right",
                                    children: w("trd-dialog-borrowable-zero")
                                }) : (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: b ? `${(0,$.Xq)(b,8)} ${s}` : "-"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: w("trd-dialog-CROSS-addon-v2")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: (0, a.jsx)("a", {
                                        href: "/margin-fee",
                                        target: "_blank",
                                        className: "text-TextLink no-underline",
                                        children: w("trd-openOrder-strategyView")
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "pt-6",
                                children: f ? (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    disabled: !0,
                                    children: w("trd-dialog-borrowable-zero")
                                }) : v && v.coolingOff && v.coolingOff.on ? (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    disabled: !0,
                                    children: w("trd-cooling-off-period")
                                }) : (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    inactive: R,
                                    onClick: W,
                                    children: w("confirm")
                                })
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [v && v.coolingOff && v.coolingOff.endTime && (0, a.jsx)(z, {
                                text: w("trd-dialog-mcl-info", {
                                    date: D()(+v.coolingOff.endTime).format("YYYY-MM-DD HH:mm:ss")
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex items-center justify-center mt-20",
                                children: (0, a.jsx)(I.A, {
                                    className: "h-24 w-24"
                                })
                            }), (0, a.jsx)("div", {
                                className: "t-body2 text-center mt-6 mx-8",
                                children: w("trd-dialog-cross-borrow-no-assets")
                            }), (0, a.jsx)("div", {
                                className: "flex items-center justify-center mt-6 mb-20",
                                children: (0, a.jsx)("div", {
                                    className: "flex items-center cursor-pointer",
                                    children: (0, a.jsx)(M.A, {
                                        className: "w-[200px]",
                                        onClick: c,
                                        children: w("trd-funds-transfer")
                                    })
                                })
                            })]
                        })
                    })
                },
                xe = (0, r.memo)(me);
            var ue = s("46Ff"),
                be = s("TaoO");
            const he = ({
                    assets: e,
                    symbol: t,
                    symbolEntry: s,
                    setSymbol: i
                }) => {
                    const {
                        data: l = {}
                    } = Z(), [o, n] = (0, r.useState)(""), c = (0, r.useCallback)(((e, t) => {
                        const s = `${e}USDT`;
                        return e && void 0 !== l[s] && t ? (0, $.lw)(t, l[s]).toFixed(2) : ""
                    }), [l]), d = (0, r.useMemo)((() => o ? e.filter((e => e.symbolForSearch.includes(o.replace("/", "")))) : e), [o, e]);
                    return (0, a.jsx)(be.A, {
                        trigger: "click",
                        variant: "full",
                        onChange: e => {
                            e[0] && i(String(e[0]))
                        },
                        value: [t],
                        size: "large",
                        type: "single",
                        renderFn: () => s ? (0, a.jsx)("div", {
                            className: "flex items-center",
                            children: (0, a.jsx)("div", {
                                className: "t-subtitle1 text-PrimaryText ml-1",
                                children: s.displaySymbol
                            })
                        }) : null,
                        onSearchFn: e => {
                            n(e)
                        },
                        listMaxHeight: 250,
                        children: d.map((e => (0, a.jsx)(be.A.Option, {
                            value: e.symbol,
                            children: (0, a.jsxs)("div", {
                                className: "flex justify-between items-center w-full ml-1",
                                children: [(0, a.jsx)("div", {
                                    className: "basis-1/3",
                                    children: (0, a.jsx)("div", {
                                        className: "t-subtitle1 text-PrimaryText",
                                        children: e.displaySymbol
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "basis-1/3 text-right",
                                    children: [(0, a.jsx)("div", {
                                        className: "t-body3 text-SecondaryText",
                                        children: ce(e ? .base ? .total)
                                    }), (0, a.jsxs)("div", {
                                        className: "t-body5 text-TertiaryText",
                                        children: ["$", c(e ? .baseName, e ? .base ? .total)]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "basis-1/3 text-right",
                                    children: [(0, a.jsx)("div", {
                                        className: "t-body3 text-SecondaryText",
                                        children: ce(e ? .quote ? .total)
                                    }), (0, a.jsxs)("div", {
                                        className: "t-body5 text-TertiaryText",
                                        children: ["$", c(e ? .quoteName, e ? .quote ? .total)]
                                    })]
                                })]
                            })
                        }, e.symbol)))
                    })
                },
                ye = ({
                    asset: e,
                    selected: t,
                    onSelectCoin: s
                }) => {
                    const {
                        data: i = {}
                    } = Z(), l = (0, r.useCallback)(((e, t) => {
                        const s = `${e}USDT`;
                        return e && i && void 0 !== i[s] && t ? (0, $.lw)(t, i[s]).toFixed(2) : ""
                    }), [i]);
                    return e ? (0, a.jsx)("div", {
                        className: "grow shrink-0 rounded-lg h-[88px] border border-solid p-3 " + (t ? "border-PrimaryText" : "border-InputLine"),
                        onClick: () => s(e.asset),
                        children: (0, a.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, a.jsx)("img", {
                                src: e.assetLogo,
                                className: "w-5 h-5 grow-0 shrink-0 mt-0.5 mr-2"
                            }), (0, a.jsxs)("div", {
                                className: "grow shrink-0",
                                children: [(0, a.jsx)("div", {
                                    className: "t-subtitle1 text-PrimaryText",
                                    children: e.assetName
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText",
                                    children: e.total
                                }), (0, a.jsxs)("div", {
                                    className: "t-caption1 text-TertiaryText",
                                    children: ["$", l(e.asset, e.total)]
                                })]
                            })]
                        })
                    }) : (0, a.jsx)("div", {
                        className: "grow shrink-0 rounded-lg h-[88px] border border-solid p-3 border-InputLine"
                    })
                },
                ge = ({
                    loading: e,
                    setLoading: t,
                    symbol: s,
                    selectCoin: i,
                    setSelectCoin: l,
                    setSymbol: o,
                    onCloseDialog: n,
                    refetchIsolated: c
                }) => {
                    const [d, m] = (0, r.useState)(""), [x, u] = (0, r.useState)("0.00000000"), [b, h] = (0, r.useState)(!1), f = k(), {
                        enqueueNotification: N
                    } = (0, L.A)(), {
                        t: j
                    } = y(), {
                        data: v = {
                            minTickSize: ""
                        }
                    } = le(s), p = (0, r.useMemo)((() => f.find((e => e.symbol === s))), [f, s]), T = (0, r.useMemo)((() => p ? .baseName === i ? p.base : p ? .quoteName === i ? p.quote : null), [p, s]), w = (0, r.useMemo)((() => p && (Number(p.base.total) > 0 || Number(p.quote.total) > 0)), [p]), C = (0, r.useMemo)((() => ((e, t, s, a) => {
                        if (!t) return 0;
                        const {
                            baseName: r,
                            coeff: {
                                forceLiquidationBar: i
                            },
                            base: {
                                borrowed: l,
                                free: o,
                                interest: n,
                                locked: c
                            },
                            quote: {
                                borrowed: d,
                                free: m,
                                interest: x,
                                locked: u
                            }
                        } = t, b = (e => {
                            const t = e.toString().match(/\.(\d+)/);
                            return t ? t[1].length : 0
                        })(a) || 8;
                        let h = 0;
                        return h = r === e ? (Number(i) * (Number(d) + Number(x)) - (Number(m) + Number(u))) / (Number(o) + Number(c) + Number(s) - Number(i) * (Number(l) + Number(n) + Number(s))) : (Number(i) * (Number(d) + Number(x) + Number(s)) - (Number(m) + Number(u) + Number(s))) / (Number(o) + Number(c) - Number(i) * (Number(l) + Number(n))), h = h && h > 0 ? +h.toFixed(b) : 0, h
                    })(i, p, d, "minTickSize" in v ? v.minTickSize : "")), [i, p, d, v]), A = (0, r.useMemo)((() => !!(!s || !d || parseFloat(d) <= 0 || T && !T.isBorrowable || T && x && new g.A(d).gt(x) || p && p.coolingOff && p.coolingOff.on)), [x, s, d, T, p]), S = (0, r.useMemo)((() => {
                        let e = "";
                        return T && (T.isBorrowable ? !b && x && new g.A(d).gt(x) && (e = j("trd-dialog-ltBorrowLimit").replace("$maxBorrowAmount", (0, $.Xq)(x, 8))) : e = j("trd-dialog-uspensionOfLoan", {
                            asset: T.asset
                        })), e
                    }), [T, d, x, b]), q = (0, r.useMemo)((() => (0, a.jsxs)(a.Fragment, {
                        children: [j("trd-dialog-max-borrow-amount-tip-iso"), " ", (0, a.jsx)("a", {
                            target: "_blank",
                            className: "no-underline text-TextLink",
                            href: "/support/faq/binance-isolated-margin-trading-guide-0135c8c00a4240f695ee71a0d18efb08?hl=en",
                            rel: "noreferrer",
                            children: j("trd-dialog-cross-max-leverage-learn-more")
                        })]
                    })), [j]), R = (0, r.useCallback)((e => {
                        const t = de(e);
                        m(t)
                    }), [x]), E = (0, r.useCallback)((() => {
                        m(x)
                    }), [x]), B = (0, r.useCallback)(((e, t) => {
                        (async (e, t) => {
                            const s = {
                                value: "0.00000000",
                                code: ""
                            };
                            if (e && t) {
                                const a = await (0, ee.get)(`/bapi/margin/v1/private/isolated-margin/borrowable/${t}?asset=${e}`);
                                a && (s.value = a.data || "0.00000000", s.code = a.code)
                            }
                            return s
                        })(e, t).then((e => {
                            u(e.value), "051061" === e.code ? h(!0) : h(!1)
                        }))
                    }), []), F = (0, r.useCallback)((e => {
                        o(e);
                        const t = f.find((t => t.symbol === e));
                        t && t.baseName !== i && t.quoteName !== i ? t.baseName && (l(t.baseName), B(t.baseName, e)) : B(i, e)
                    }), [i]), O = (0, r.useCallback)((e => {
                        i !== e && (l(e), B(e, s), m(""))
                    }), [i, s]), I = (0, r.useCallback)((async () => {
                        if (!e) {
                            t(!0);
                            const e = await (async (e, t, s) => await (0, re.TY)({
                                asset: e,
                                amount: t,
                                symbol: s
                            }))(i, d, s);
                            e.success && (N(j("trd-dialog-requestApproved"), {
                                variant: "success",
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                }
                            }), m(""), c(), n()), t(!1)
                        }
                    }), [i, e, i, d, s]);
                    (0, r.useEffect)((() => {
                        B(i, s)
                    }), []);
                    return (0, a.jsx)(a.Fragment, {
                        children: w ? (0, a.jsxs)(a.Fragment, {
                            children: [b ? (0, a.jsx)(z, {
                                text: j("trd-dialog-fuse-borrowable", {
                                    asset: i
                                })
                            }) : p && p.coolingOff && p.coolingOff.endTime && (0, a.jsx)(z, {
                                text: j("trd-dialog-mcl-info", {
                                    date: D()(+p.coolingOff.endTime).format("YYYY-MM-DD HH:mm:ss")
                                })
                            }), (0, a.jsx)("div", {
                                className: "mt-6 pb-1 t-subtitle2 text-SecondaryText",
                                children: j("isolated-margin-pair")
                            }), (0, a.jsx)("div", {
                                className: "my-1 relative",
                                children: (0, a.jsx)(he, {
                                    assets: f,
                                    symbol: s,
                                    symbolEntry: p,
                                    setSymbol: F
                                })
                            }), (0, a.jsx)("div", {
                                className: "pt-6 pb-1 t-subtitle2 text-SecondaryText",
                                children: j("isolated-margin-pair")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-x-2",
                                children: [(0, a.jsx)(ye, {
                                    asset: p ? .base,
                                    selected: p ? .baseName === i,
                                    onSelectCoin: O
                                }), (0, a.jsx)(ye, {
                                    asset: p ? .quote,
                                    selected: p ? .quoteName === i,
                                    onSelectCoin: O
                                })]
                            }), (0, a.jsx)("div", {
                                className: "pt-6 pb-1 t-subtitle2 text-SecondaryText",
                                children: j("trd-dialog-borrow-amount")
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(ue.A, {
                                    gapSize: "normal",
                                    onChange: R,
                                    size: "middle",
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-subtitle1 text-TextLink cursor-pointer",
                                        onClick: E,
                                        children: "MAX"
                                    }),
                                    value: d,
                                    variant: "line",
                                    className: "w-full",
                                    type: "text",
                                    placeholder: j("trd-dialog-enter-amount")
                                }), S ? (0, a.jsx)("div", {
                                    className: "pt-1 t-body5 text-Error",
                                    children: S
                                }) : ""]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1 mt-6",
                                children: [(0, a.jsx)(P.A, {
                                    tooltips: q,
                                    enablePortal: !0,
                                    useReactPopper: !0,
                                    arrow: !0,
                                    once: !0,
                                    children: (0, a.jsx)("div", {
                                        className: "t-body3 text-TertiaryText underline decoration-dotted",
                                        children: j("trd-dialog-maximumBorrowAmount")
                                    })
                                }), b ? (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-Error text-right",
                                    children: j("trd-dialog-borrowable-zero")
                                }) : (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: x ? `${(0,$.Xq)(x,8)} ${i}` : "-"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: j("trd-dialog-est-liq-price")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: C ? `${C} ${p?.quoteName}` : "-"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: j("trd-dialog-interestrate")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: T ? .hourlyInterestRate || ""
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex text-TertiaryText t-caption1",
                                children: [(0, a.jsx)("div", {
                                    className: "mr-1",
                                    children: "*"
                                }), (0, a.jsx)("div", {
                                    children: j("trd-dialog-ratedesc")
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: j("trd-dialog-interestrate-annual")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: T ? .annualInterestRate || ""
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: j("trd-dialog-borrowed")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [T && T.borrowed && `${(0,$.Xq)(T.borrowed,8)}`, " ", T ? .asset]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: j("trd-dialog-ISOLATED-addon-v2")
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: (0, a.jsx)("a", {
                                        href: "/margin-data",
                                        target: "_blank",
                                        className: "text-TextLink no-underline",
                                        children: j("trd-dialog-ISOLATED-addon-v2-click", {
                                            ladder: p ? .ladder
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "pt-6",
                                children: b ? (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    disabled: !0,
                                    children: j("trd-dialog-borrowable-zero")
                                }) : p && p.coolingOff && p.coolingOff.endTime ? (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    disabled: !0,
                                    children: j("trd-cooling-off-period")
                                }) : (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    inactive: A,
                                    onClick: I,
                                    children: j("confirm")
                                })
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [p && p.coolingOff && p.coolingOff.endTime && (0, a.jsx)(z, {
                                text: j("trd-dialog-mcl-info", {
                                    date: D()(+p.coolingOff.endTime).format("YYYY-MM-DD HH:mm:ss")
                                })
                            }), (0, a.jsx)("div", {
                                className: "mt-6 t-subtitle2 text-SecondaryText",
                                children: j("isolated-margin-pair")
                            }), (0, a.jsx)("div", {
                                className: "my-1 relative",
                                children: (0, a.jsx)(he, {
                                    assets: f,
                                    symbol: s,
                                    symbolEntry: p,
                                    setSymbol: o
                                })
                            }), (0, a.jsxs)("div", {
                                className: "mt-6 mb-[202px] p-3 flex items-start justify-center bg-Input rounded-xl",
                                children: [(0, a.jsx)(Y.A, {
                                    className: "h-5 w-5 mr-1"
                                }), (0, a.jsx)("div", {
                                    className: "t-body5",
                                    children: j("trd-dialog-isolated-borrow-no-assets", {
                                        base: p ? .base.asset,
                                        quote: p ? .quote.asset
                                    })
                                })]
                            })]
                        })
                    })
                },
                fe = (0, r.memo)(ge),
                Ne = ({
                    loading: e,
                    setLoading: t,
                    selectCoin: s,
                    setSelectCoin: i,
                    onCloseDialog: l,
                    refetchCross: o
                }) => {
                    const [n, c] = (0, r.useState)(""), d = ((e, t) => {
                        const s = w(),
                            a = {};
                        s.forEach((e => {
                            const t = parseFloat(e.liabilityOfBtc);
                            a[e.asset] = Math.abs(t)
                        }));
                        const r = "asset";
                        if (e) {
                            const i = [];
                            let l, o;
                            if (t) {
                                const a = t.replace(e, "");
                                s.forEach((t => {
                                    t.asset === e ? l = t : t.asset === a ? o = t : i.push(t)
                                }))
                            } else s.forEach((t => {
                                t.asset === e ? l = t : i.push(t)
                            }));
                            const n = i.sort(((e, t) => {
                                    const s = a[t[r]] - a[e[r]];
                                    return 0 === s ? e[r].localeCompare(t[r]) : s
                                })),
                                c = [];
                            return l && c.push(l), o && c.push(o), c.concat(n)
                        }
                        return s.sort(((e, t) => {
                            const s = a[t[r]] - a[e[r]];
                            return 0 === s ? e[r].localeCompare(t[r]) : s
                        }))
                    })(), {
                        t: m
                    } = y(), {
                        enqueueNotification: x
                    } = (0, L.A)(), u = (0, r.useMemo)((() => d.find((e => e.asset === s))), [d, s]), b = (0, r.useMemo)((() => !!(u && u.borrowed && new g.A(u.borrowed).plus(u.interest).gt(0))), [u]), h = (0, r.useMemo)((() => !!(!s || !n || parseFloat(n) <= 0 || u && u.total && new g.A(n).gt(u.total) || u && u.maxRepayment && new g.A(n).gt(u.maxRepayment))), [s, n, u]), f = (0, r.useMemo)((() => {
                        let e = "";
                        return u && (u.total && new g.A(n).gt(u.total) ? e = m("trd-dialog-ltbalance") : u.maxRepayment && new g.A(n).gt(u.maxRepayment) && (e = m("trd-dialog-ltTotalDebit"))), e
                    }), [u, n]), N = (0, r.useCallback)((e => {
                        let t;
                        t = (u && u.maxRepayment, de(e)), c(t)
                    }), [u]), j = (0, r.useCallback)((() => {
                        u && u.maxRepayment && c(u.maxRepayment)
                    }), [u]), v = (0, r.useCallback)((async () => {
                        if (!e) {
                            t(!0);
                            const e = await (async (e, t) => await (0, ae.yA)({
                                asset: e,
                                amount: t
                            }))(s, n);
                            e.success && (x(m("trd-dialog-requestApproved"), {
                                variant: "success",
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                }
                            }), c(""), o(), l()), t(!1)
                        }
                    }), [s, n]);
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("div", {
                            className: "mt-4 t-subtitle2 text-SecondaryText",
                            children: m("trd-repay-amount")
                        }), (0, a.jsxs)("div", {
                            className: "my-1 relative mb-6",
                            children: [(0, a.jsx)(ne, {
                                assets: d,
                                amount: n,
                                setAmount: N,
                                selectCoin: s,
                                setSelectCoin: i,
                                showLeverage: !1,
                                valueField: "totalDebt",
                                hasError: !!f,
                                customPlaceholder: b ? "" : m("trd-dialog-nothing-to-repay")
                            }), f ? (0, a.jsx)("div", {
                                className: "pt-1 t-body5 text-Error",
                                children: f
                            }) : "", u && b && (0, a.jsxs)("div", {
                                className: "pt-1 t-caption1 text-TertiaryText",
                                children: [m("trd-dialog-maximum-repayment"), " ", `${u.maxRepayment}`]
                            }), u && b && (0, a.jsx)("div", {
                                className: "absolute right-3 top-3 t-subtitle1 text-TextLink cursor-pointer",
                                onClick: j,
                                children: m("trd-dialog-max")
                            })]
                        }), u && b ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: m("trd-repay-available-balance")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(u ? .free, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsxs)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: [m("trd-dialog-interest"), " (A)"]
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(u ? .interest, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex text-TertiaryText t-subtitle3 pb-3",
                                children: [(0, a.jsx)("div", {
                                    className: "mr-1",
                                    children: "*"
                                }), (0, a.jsx)("div", {
                                    children: m("trd-dialog-ratedesc")
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsxs)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: [m("trd-dialog-borrowed"), " (B)"]
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(u ? .borrowed, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsxs)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: [m("trd-dialog-totalDebt"), " (A+B)"]
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(u ? .totalDebt, 8), " ", s]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "py-1 h-[60px]"
                            }), (0, a.jsx)("div", {
                                className: "pt-6",
                                children: (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    inactive: h,
                                    onClick: v,
                                    children: m("confirm")
                                })
                            })]
                        }) : (0, a.jsx)("div", {
                            className: "h-[296px]",
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center t-body5 text-PrimaryText h-[46px] mt-6 bg-Input rounded-xl px-3",
                                children: [(0, a.jsx)(Y.A, {}), m("trd-dialog-haventBorrowed", {
                                    asset: s
                                })]
                            })
                        })]
                    })
                },
                je = (0, r.memo)(Ne),
                ve = ({
                    loading: e,
                    setLoading: t,
                    selectCoin: s,
                    setSelectCoin: i,
                    symbol: l,
                    setSymbol: o,
                    onCloseDialog: n,
                    refetchIsolated: c
                }) => {
                    const [d, m] = (0, r.useState)(""), x = k(), {
                        enqueueNotification: u
                    } = (0, L.A)(), {
                        t: b
                    } = y(), h = (0, r.useMemo)((() => x.find((e => e.symbol === l))), [x, l]), f = (0, r.useMemo)((() => h ? .baseName === s ? h.base : h ? .quoteName === s ? h.quote : null), [h, l]), N = (0, r.useMemo)((() => f && f.borrowed && new g.A(f.borrowed).plus(f.interest).gt(0)), [f]), j = (0, r.useMemo)((() => !!(!s || !d || parseFloat(d) <= 0 || f && f.totalDebt && new g.A(d).gt(f.totalDebt) || f && f.total && new g.A(d).gt(f.total))), [s, d, f]), v = (0, r.useMemo)((() => {
                        let e = "";
                        return f && (f.total && new g.A(d).gt(f.total) ? e = b("trd-dialog-ltbalance") : f.totalDebt && new g.A(d).gt(f.totalDebt) && (e = b("trd-dialog-ltTotalDebit"))), e
                    }), [f, d]), p = (0, r.useCallback)((e => {
                        let t = e;
                        f && f.borrowed && (t = de(e)), m(t)
                    }), [f]), T = (0, r.useCallback)((() => {
                        f && f.maxRepayment && m(f.maxRepayment)
                    }), [f]), w = (0, r.useCallback)((e => {
                        o(e);
                        const t = x.find((t => t.symbol === e));
                        t && t.baseName !== s && t.quoteName !== s && t.baseName && i(t.baseName)
                    }), []), C = (0, r.useCallback)((e => {
                        s !== e && (i(e), m(""))
                    }), [s]), A = (0, r.useCallback)((async () => {
                        if (!e) {
                            t(!0);
                            const e = await (async (e, t, s) => await (0, re.td)({
                                asset: e,
                                amount: t,
                                symbol: s
                            }))(s, d, l);
                            e.success && (u(b("trd-dialog-requestApproved"), {
                                variant: "success",
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                }
                            }), m(""), c(), n()), t(!1)
                        }
                    }), [s, d]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mt-6 t-subtitle2 text-SecondaryText",
                            children: b("isolated-margin-pair")
                        }), (0, a.jsx)("div", {
                            className: "my-1 relative",
                            children: (0, a.jsx)(he, {
                                assets: x,
                                symbol: l,
                                symbolEntry: h,
                                setSymbol: w
                            })
                        }), (0, a.jsx)("div", {
                            className: "pt-6 pb-1 t-subtitle2 text-SecondaryText",
                            children: b("isolated-margin-pair")
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center gap-x-2",
                            children: [(0, a.jsx)(ye, {
                                asset: h ? .base,
                                selected: h ? .baseName === s,
                                onSelectCoin: C
                            }), (0, a.jsx)(ye, {
                                asset: h ? .quote,
                                selected: h ? .quoteName === s,
                                onSelectCoin: C
                            })]
                        }), f && N ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "pt-6 pb-1 t-subtitle2 text-SecondaryText",
                                children: b("trd-repay-amount")
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(ue.A, {
                                    gapSize: "normal",
                                    onChange: p,
                                    size: "middle",
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-subtitle1 text-TextLink cursor-pointer",
                                        onClick: T,
                                        children: "MAX"
                                    }),
                                    value: d,
                                    variant: "line",
                                    className: "w-full",
                                    type: "text",
                                    placeholder: b("trd-dialog-enter-amount")
                                })
                            }), v ? (0, a.jsx)("div", {
                                className: "pt-1 t-body5 text-Error",
                                children: v
                            }) : "", (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1 mt-6",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: b("trd-repay-available-balance")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(f ? .free, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: b("trd-dialog-interest")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(f ? .interest, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: b("trd-dialog-borrowed")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(f ? .borrowed, 8), " ", s]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between py-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: b("trd-dialog-totalDebt")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText text-right",
                                    children: [(0, $.Xq)(f ? .totalDebt, 8), " ", s]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "pt-6",
                                children: (0, a.jsx)(M.A, {
                                    className: "w-full",
                                    inactive: j,
                                    onClick: A,
                                    children: b("confirm")
                                })
                            })]
                        }) : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsxs)("div", {
                                className: "mt-6 mb-[202px] p-3 flex items-start bg-Input rounded-xl",
                                children: [(0, a.jsx)(Y.A, {
                                    className: "h-5 w-5 mr-1"
                                }), (0, a.jsx)("div", {
                                    className: "t-body5",
                                    children: b("trd-dialog-haventBorrowed", {
                                        asset: s
                                    })
                                })]
                            })
                        })]
                    })
                },
                pe = (0, r.memo)(ve),
                Te = (0, r.createContext)({}),
                we = () => (0, r.useContext)(Te),
                {
                    Tab: Ce,
                    TabList: Ae
                } = m.A,
                Se = ["BORROW", "REPAY"],
                ke = ["CROSS", "ISOLATED"],
                qe = ({
                    children: e
                }) => {
                    const [t, s] = (0, r.useState)(!1), [o, d] = (0, r.useState)(!1), [m, h] = (0, r.useState)("BNB"), [g, f] = (0, r.useState)("BNB"), [N, j] = (0, r.useState)("BNBUSDT"), [v, p] = (0, r.useState)(Se[0]), [T, w] = (0, r.useState)(ke[0]), {
                        t: A
                    } = y(), S = C(), q = k(), R = (0, l.Gp)(), B = (() => {
                        const e = (0, n.useQueryClient)();
                        return () => e.invalidateQueries(c.B.QUERY_ISOLATED_ACCOUNT_DETAIL)
                    })(), {
                        launchTransfer: D
                    } = (0, i.e)(), F = (0, r.useCallback)((e => {
                        const {
                            defaultSymbol: t,
                            type: a,
                            method: r,
                            defaultAsset: i
                        } = e;
                        h(i), f(i), j(t), w(a), p(r), s(!0)
                    }), []), P = (0, r.useCallback)((() => {
                        R(), B(), s(!0)
                    }), []), M = (0, r.useCallback)((() => {
                        D({
                            from: "MAIN",
                            to: "MARGIN",
                            defaultCoin: m,
                            onTransferSuccess: P
                        }), s(!1)
                    }), [D, m, P]), O = (0, r.useCallback)((() => {
                        s(!1)
                    }), []), I = (0, r.useCallback)((e => {
                        if (w(e), e === ke[0]) {
                            const e = q.find((e => e.symbol === N));
                            if (e) {
                                const {
                                    baseName: t = "",
                                    quoteName: s = ""
                                } = e;
                                let a, r;
                                S.forEach((e => {
                                    e.asset === t ? a = e : e.asset === s && (r = e)
                                })), h(a ? t : r ? s : S[0].asset)
                            }
                        }
                    }), [S, q, N]);
                    (0, r.useEffect)((() => {
                        t && (R(), B())
                    }), [t]);
                    const L = () => (0, a.jsxs)("div", {
                        className: "flex items-center justify-between mt-[10px]",
                        children: [(0, a.jsxs)(Ae, {
                            selectedIndex: Se.indexOf(v),
                            onTabClick: e => p(Se[String(e)]),
                            variant: "default",
                            children: [(0, a.jsx)(Ce, {
                                children: (0, a.jsx)("div", {
                                    className: "t-headline5",
                                    children: A("trd-dialog-manual-borrow")
                                })
                            }), (0, a.jsx)(Ce, {
                                children: (0, a.jsx)("div", {
                                    className: "t-headline5",
                                    children: A("trd-dialog-manual-repay")
                                })
                            })]
                        }), (0, a.jsx)(b.A, {
                            className: "cursor-pointer h-6 w-6 mt-1",
                            onClick: O
                        })]
                    });
                    return (0, a.jsxs)(Te.Provider, {
                        value: {
                            openModal: F
                        },
                        children: [(0, a.jsxs)(x.Ay, {
                            visible: t,
                            onClose: O,
                            size: "full",
                            modalSize: "middle",
                            enablePortal: !0,
                            responsive: !0,
                            children: [(0, a.jsxs)("div", {
                                className: "px-6 pb-6",
                                children: [(0, a.jsx)(L, {}), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("div", {
                                        className: "flex items-center justify-between mt-2",
                                        children: (0, a.jsx)(E, {
                                            types: ke,
                                            type: T,
                                            onChangeType: I
                                        })
                                    }), v === Se[0] && (0, a.jsxs)(a.Fragment, {
                                        children: [T === ke[0] && (0, a.jsx)(xe, {
                                            loading: o,
                                            setLoading: d,
                                            selectCoin: m,
                                            setSelectCoin: h,
                                            onCloseDialog: O,
                                            refetchCross: R,
                                            handleTransfer: M
                                        }), T === ke[1] && (0, a.jsx)(fe, {
                                            loading: o,
                                            setLoading: d,
                                            selectCoin: g,
                                            setSelectCoin: f,
                                            symbol: N,
                                            setSymbol: j,
                                            onCloseDialog: O,
                                            refetchIsolated: B
                                        })]
                                    }), v === Se[1] && (0, a.jsxs)(a.Fragment, {
                                        children: [T === ke[0] && (0, a.jsx)(je, {
                                            loading: o,
                                            setLoading: d,
                                            selectCoin: m,
                                            setSelectCoin: h,
                                            onCloseDialog: O,
                                            refetchCross: R
                                        }), T === ke[1] && (0, a.jsx)(pe, {
                                            loading: o,
                                            setLoading: d,
                                            selectCoin: g,
                                            setSelectCoin: f,
                                            symbol: N,
                                            setSymbol: j,
                                            onCloseDialog: O,
                                            refetchIsolated: B
                                        })]
                                    })]
                                })]
                            }), o && (0, a.jsx)("div", {
                                className: "absolute top-0 left-0 w-full h-full flex items-center justify-center",
                                children: (0, a.jsx)(u.A, {})
                            })]
                        }), e && e]
                    })
                }
        }
    }
]);