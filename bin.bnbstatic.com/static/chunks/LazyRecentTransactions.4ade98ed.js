"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16f22e87-ec5e-5396-bf5c-8b6d7eddc475")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [4271], {
        Y1zh: (e, t, s) => {
            s.d(t, {
                A: () => c
            });
            var l = s("wIZF"),
                a = s("DTvD"),
                n = s.n(a),
                r = s("7zlU");
            const c = function(e) {
                return n().createElement(r.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), n().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 9V6h13.5V2.5l5 5-5 5V9H3zm18 9v-3H7v-3.5l-5 5 5 5V18h14z",
                    fill: "currentColor"
                }))
            }
        },
        "7VNp": (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => D
            });
            var l = s("TrCV"),
                a = s("DTvD"),
                n = s.n(a),
                r = s("wIZF"),
                c = s("7zlU");
            const i = function(e) {
                return n().createElement(c.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), n().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.5 15.963h3V8.987l.312-.003 4.176-.01L12.013 3 6.038 8.975l4.159.04.303-.002v6.95zM6.5 14h-3v7h17v-7h-3v4h-11v-4z",
                    fill: "currentColor"
                }))
            };
            const o = function(e) {
                return n().createElement(c.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), n().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.5 3h-3v6.95l-.303-.003-4.159.04 5.975 5.976 5.975-5.975-4.176-.01-.312-.002V3zm-10 11h3v4h11v-4h3v7h-17v-7z",
                    fill: "currentColor"
                }))
            };
            var m = s("Y1zh"),
                h = s("wTDt"),
                x = s("AGKK"),
                d = s("TprX"),
                u = s("mUtb"),
                p = s("IdNO"),
                w = s("sKJi"),
                f = s("ZSsA"),
                j = s("AXwM"),
                v = s("Jk97"),
                A = s("9pmv"),
                N = s("K9WZ"),
                y = s("i9es"),
                g = {
                    Deposit: (0, l.jsx)(i, {
                        className: "h-6 w-6"
                    }),
                    Withdraw: (0, l.jsx)(o, {
                        className: "h-6 w-6"
                    }),
                    AlphaTransfer: (0, l.jsx)(m.A, {
                        className: "h-6 w-6"
                    })
                },
                b = function(e) {
                    var t = e.type;
                    return g[t]
                };

            function _(e) {
                var t = (0, f.s9)("exchange-wallet").t,
                    s = (0, p.n)().isDesktop,
                    a = e.type,
                    n = e.time,
                    r = e.coin,
                    c = e.amount,
                    i = e.statusName,
                    o = e.statusNameColor,
                    m = e.showSkeletonPlaceholder,
                    h = void 0 !== m && m,
                    u = "+",
                    j = "";
                switch (a) {
                    case "AlphaTransfer":
                        j = t("action-WALLET_TRANSFER"), u = "";
                        break;
                    case "FAQ":
                        j = t("wallet-deposit-not-arrived");
                        break;
                    case "Deposit":
                        j = t("exchange-deposit-titte"), u = "+";
                        break;
                    case "Withdraw":
                        j = t("wallet-ui-action-withdraw"), u = "-"
                }
                return s ? (0, l.jsx)(x.Ay, {
                    className: "-mx-s rounded-m px-s hover:bg-bg2",
                    children: (0, l.jsxs)(d.A, {
                        className: "primary-num1 h-16 w-full items-center text-base",
                        children: [(0, l.jsx)(d.A, {
                            className: "w-2/5 items-center pr-xl text-left",
                            children: h ? (0, l.jsx)(v.vY, {}) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(b, {
                                    type: a
                                }), (0, l.jsxs)(x.Ay, {
                                    className: "body2 ml-2",
                                    children: [j, " ", r]
                                })]
                            })
                        }), (0, l.jsx)(x.Ay, {
                            className: "w-1/5 pr-xl text-right font-normal",
                            children: h ? (0, l.jsx)(v.Ru, {}) : (0, l.jsxs)(l.Fragment, {
                                children: [u, (0, w.Ay)(c).format()]
                            })
                        }), (0, l.jsx)(x.Ay, {
                            className: "w-1/5 pr-xl text-right font-normal",
                            children: h ? (0, l.jsx)(v.Ru, {}) : n
                        }), (0, l.jsx)(x.Ay, {
                            className: "w-1/5 text-right font-normal ".concat(o),
                            children: h ? (0, l.jsx)(v.Ru, {}) : t(i)
                        })]
                    })
                }) : (0, l.jsxs)(d.A, {
                    className: "primary-num1 h-16 w-full items-center justify-between text-base",
                    children: [(0, l.jsxs)(d.A, {
                        className: "items-center text-left",
                        children: [(0, l.jsx)(b, {
                            type: a
                        }), (0, l.jsxs)(d.A, {
                            className: "ml-2 flex-col",
                            children: [(0, l.jsxs)(x.Ay, {
                                className: "body2 leading-6",
                                children: [j, " ", r]
                            }), (0, l.jsx)(x.Ay, {
                                className: "text-sm font-normal leading-5 text-t-third",
                                children: n
                            })]
                        })]
                    }), (0, l.jsxs)(d.A, {
                        className: "flex-col text-right",
                        children: [(0, l.jsxs)(x.Ay, {
                            className: "font-normal leading-6",
                            children: [u, c]
                        }), (0, l.jsx)(x.Ay, {
                            className: "text-sm font-normal leading-5 ".concat(o),
                            children: t(i)
                        })]
                    })]
                })
            }
            var k = new Array(4).fill({}),
                R = function() {
                    var e = (0, f.s9)("exchange-wallet").t,
                        t = (0, j.rd)(),
                        s = (0, p.n)().isDesktop,
                        a = s ? "mb-20 rounded-xl border border-solid border-line p-6" : "mb-16",
                        n = (0, N.EY)(),
                        r = n.listInfo,
                        c = n.loading,
                        i = (0, y.jm)(c),
                        o = i ? k : r;
                    return (0, l.jsxs)(d.A, {
                        id: "wallet-recent-transactions",
                        className: "".concat(a, " mt-[64px] flex-col pc:mt-xl"),
                        children: [(0, l.jsxs)(d.A, {
                            className: "mb-xl items-center justify-between",
                            children: [(0, l.jsx)(x.Ay, {
                                className: "subtitle1 pc:headline6 text-t-primary",
                                children: e("wallet-Recent-Transactions")
                            }), (0, l.jsxs)(d.A, {
                                id: "wallet-recent-transactions-view-more",
                                className: "overview-module-hover h-6 cursor-pointer items-center",
                                onClick: function() {
                                    t.push("/my/wallet/history/deposit-crypto"), (0, u.qL)({
                                        elementID: "Wallet_overview_v1_transactions_more",
                                        pageName: A.D4
                                    })
                                },
                                children: [(0, l.jsx)(x.Ay, {
                                    className: "subtitle4",
                                    children: e("exchange-common-learnMore")
                                }), (0, l.jsx)(h.A, {
                                    name: "chevron-right-f",
                                    className: "module-hover-icon h-4 w-4 text-iconNormal"
                                })]
                            })]
                        }), 0 !== o.length || i || c ? (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsxs)(d.A, {
                                className: "w-full flex-col justify-start",
                                children: [s && (0, l.jsxs)(d.A, {
                                    className: "h-10 w-full items-center text-xs text-t-third",
                                    children: [(0, l.jsx)(x.Ay, {
                                        className: "w-2/5 pr-xl text-left",
                                        children: e("wallet_recent_transaction_list_transaction")
                                    }), (0, l.jsx)(x.Ay, {
                                        className: "w-1/5 pr-xl text-right",
                                        children: e("common-th-amount")
                                    }), (0, l.jsx)(x.Ay, {
                                        className: "w-1/5 pr-xl text-right",
                                        children: e("common-th-time")
                                    }), (0, l.jsx)(x.Ay, {
                                        className: "w-1/5 text-right",
                                        children: e("Status")
                                    })]
                                }), o.slice(0, 3).map((function(e) {
                                    return (0, l.jsx)(_, {
                                        type: e.type,
                                        time: e.timeStr,
                                        coin: e.coin,
                                        amount: e.amount,
                                        statusName: e.statusName,
                                        statusNameColor: e.statusNameColor,
                                        gtrStatus: e.gtrStatus,
                                        status: e.status,
                                        showSkeletonPlaceholder: i
                                    }, e.id)
                                }))]
                            })
                        }) : (0, l.jsx)(v.WF, {
                            tips: "".concat(e("exchange-wallet-no-records"), " "),
                            className: "py-5xl pc:py-m"
                        })]
                    })
                };
            const D = n().memo(R)
        }
    }
]);
//# debugId=16f22e87-ec5e-5396-bf5c-8b6d7eddc475