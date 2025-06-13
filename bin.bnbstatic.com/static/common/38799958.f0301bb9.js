"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3023f071-79e0-5fd5-9413-29df0cd4ca94")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [523], {
        "//eO": (e, t, a) => {
            a.d(t, {
                n: () => c
            });
            var n = a("DTvD"),
                r = a("hob6");
            const s = function(e, t) {
                void 0 === t && (t = !1);
                var a = (0, n.useState)(r.Bd ? function() {
                        return window.matchMedia(e).matches
                    } : t),
                    s = a[0],
                    i = a[1];
                return (0, n.useEffect)((function() {
                    var t = !0,
                        a = window.matchMedia(e),
                        n = function() {
                            t && i(!!a.matches)
                        };
                    return a.addListener(n), i(a.matches),
                        function() {
                            t = !1, a.removeListener(n)
                        }
                }), [e]), s
            };
            var i = "(max-width: 767px)",
                l = "(min-width: 768px) and (max-width: 1023px)",
                o = "(min-width: 1024px)",
                c = function() {
                    return {
                        isMobile: s(i, !1),
                        isTablet: s(l, !1),
                        isDesktop: s(o, !0)
                    }
                }
        },
        lIgU: (e, t, a) => {
            a.d(t, {
                A: () => p
            });
            var n = a("ezuS"),
                r = a("BK7R"),
                s = a("gZfF"),
                i = a("TrCV"),
                l = a("eheR"),
                o = a("QUKP"),
                c = a("Y4uf"),
                d = a("DTvD");
            const u = function(e) {
                var t = (0, d.useMemo)((function() {
                        return Math.random()
                    }), []),
                    a = "paint0_linear_7085_14901_".concat(t);
                return (0, i.jsxs)(c.A, (0, o.A)((0, r.A)({
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16"
                }, e), {
                    children: [(0, i.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.3332 6.99967C12.3332 9.94519 9.94539 12.333 6.99987 12.333C4.05435 12.333 1.66654 9.94519 1.66654 6.99967C1.66654 4.05416 4.05435 1.66634 6.99987 1.66634C9.94539 1.66634 12.3332 4.05416 12.3332 6.99967ZM13.6665 6.99967C13.6665 10.6816 10.6818 13.6663 6.99987 13.6663C3.31797 13.6663 0.333206 10.6816 0.333206 6.99967C0.333206 3.31778 3.31797 0.333008 6.99987 0.333008C10.6818 0.333008 13.6665 3.31778 13.6665 6.99967ZM7.34102 2.72756L6.63214 2.73057L5.58551 4.99928L3.22022 5.36808L2.99989 6.03262L4.72707 7.81437L4.30634 10.3174L4.8826 10.7276L6.98729 9.55051L9.09197 10.7276L9.66881 10.321L9.27114 7.81599L10.9999 6.03261L10.7796 5.36808L8.41218 4.99895L7.34102 2.72756Z",
                        fill: "url(#".concat(a, ")")
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: a,
                            x1: "6.99987",
                            y1: "0.333008",
                            x2: "6.99987",
                            y2: "13.6663",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                "stop-color": "#F0B90B"
                            }), (0, i.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#F8D33A"
                            })]
                        })
                    })]
                }))
            };
            const m = function(e) {
                var t = (0, d.useMemo)((function() {
                        return Math.random()
                    }), []),
                    a = "paint0_linear_421_39224_".concat(t);
                return (0, i.jsxs)(c.A, (0, o.A)((0, r.A)({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: [(0, i.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M2 3.33325H14V5.99992C12.8954 5.99992 12 6.89535 12 7.99992C12 9.10449 12.8954 9.99992 14 9.99992V12.6666H2V9.99992C3.10457 9.99992 4 9.10449 4 7.99992C4 6.89535 3.10457 5.99992 2 5.99992V3.33325ZM10.3333 4.99992H8.66667V10.9999H10.3333V4.99992Z",
                        fill: "url(#".concat(a, ")")
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: a,
                            x1: "8",
                            y1: "3.33325",
                            x2: "8",
                            y2: "12.6666",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                "stop-color": "#F8D12F"
                            }), (0, i.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#F0B90B"
                            })]
                        })
                    })]
                }))
            };
            var h, f = (h = {}, (0, n.A)(h, l.E.Points, u), (0, n.A)(h, l.E.Voucher, m), h);
            const p = function(e) {
                var t = e.type,
                    a = void 0 === t ? l.E.Points : t,
                    n = (0, s.A)(e, ["type"]),
                    o = f[a];
                return (0, i.jsx)(o, (0, r.A)({}, n))
            }
        },
        "+cpL": (e, t, a) => {
            a.d(t, {
                ey: () => L,
                mR: () => _,
                D3: () => R,
                _y: () => E,
                dS: () => b
            });
            var n = a("sViW"),
                r = a("BK7R"),
                s = a("QUKP"),
                i = a("tEf9"),
                l = a("Pz56"),
                o = a.n(l),
                c = a("LZsd"),
                d = a("DTvD"),
                u = a("V0mm"),
                m = a("/Q1k"),
                h = a("AUe6"),
                f = a("BK9r"),
                p = a("1T48"),
                A = a("8/Bc"),
                v = a("N1LS"),
                C = a("JuBR"),
                x = a("mrqE");

            function g(e, t) {
                (0, x.A)(2, arguments);
                var a = (0, C.A)(e),
                    n = (0, v.A)(t);
                return isNaN(n) ? new Date(NaN) : n ? (a.setDate(a.getDate() + n), a) : a
            }

            function T(e, t) {
                (0, x.A)(2, arguments);
                var a = (0, C.A)(e),
                    n = (0, v.A)(t);
                if (isNaN(n)) return new Date(NaN);
                if (!n) return a;
                var r = a.getDate(),
                    s = new Date(a.getTime());
                s.setMonth(a.getMonth() + n + 1, 0);
                var i = s.getDate();
                return r >= i ? s : (a.setFullYear(s.getFullYear(), s.getMonth(), r), a)
            }

            function w(e, t) {
                if ((0, x.A)(2, arguments), !t || "object" !== typeof t) return new Date(NaN);
                var a = "years" in t ? (0, v.A)(t.years) : 0,
                    n = "months" in t ? (0, v.A)(t.months) : 0,
                    r = "weeks" in t ? (0, v.A)(t.weeks) : 0,
                    s = "days" in t ? (0, v.A)(t.days) : 0,
                    i = "hours" in t ? (0, v.A)(t.hours) : 0,
                    l = "minutes" in t ? (0, v.A)(t.minutes) : 0,
                    o = "seconds" in t ? (0, v.A)(t.seconds) : 0,
                    c = (0, C.A)(e),
                    d = n || a ? T(c, n + 12 * a) : c,
                    u = s || r ? g(d, s + 7 * r) : d,
                    m = l + 60 * i,
                    h = o + 60 * m,
                    f = 1e3 * h,
                    p = new Date(u.getTime() + f);
                return p
            }
            var k = a("VyXn"),
                y = a("nsO7"),
                j = a("Mu1M"),
                N = (0, k.NP)({
                    state: {
                        challenges: [],
                        newTaskCompleted: {
                            popup: !1,
                            title: "",
                            desc: ""
                        }
                    },
                    views: {
                        onGoingChallenges: function() {
                            return this.challenges.filter((function(e) {
                                return !(0, j.EA)(e) || "ONE_REWARD_PER_TASK" === e.rewardMethodType && e.taskList.some((function(e) {
                                    return !(0, j.EA)(e)
                                }))
                            }))
                        },
                        pastChallenges: function() {
                            return this.challenges.filter((function(e) {
                                var t = e.taskList.filter(j.EA);
                                return (0, j.EA)(e) || "ONE_REWARD_PER_TASK" === e.rewardMethodType && t.length > 0
                            }))
                        },
                        onGoingBigRewardChallenges: function() {
                            return this.onGoingChallenges.filter((function(e) {
                                return "ONE_REWARD_PER_CHALLENGE" === e.rewardMethodType
                            }))
                        },
                        onGoingSmallRewardChallenges: function() {
                            return this.onGoingChallenges.filter((function(e) {
                                return "ONE_REWARD_PER_TASK" === e.rewardMethodType
                            }))
                        }
                    },
                    actions: {
                        setChallenges: function(e) {
                            this.challenges = (0, y.uniqBy)(e, "id")
                        },
                        updateTask: function(e) {
                            var t = this;
                            this.challenges = this.challenges.map((function(a) {
                                return a.taskList = a.taskList.map((function(t) {
                                    return t.id === e.id ? e : t
                                })), "ONE_REWARD_PER_CHALLENGE" === a.rewardMethodType && (a.completedTaskNum = a.taskList.filter((function(e) {
                                    return "COMPLETED" === e.status
                                })).length, a.completedTaskNum === a.taskList.length && t.completeChallenge(a)), a
                            }))
                        },
                        updateChallenge: function(e) {
                            this.challenges = this.challenges.map((function(t) {
                                return t.id === e.id ? e : t
                            }))
                        },
                        completeTask: function(e) {
                            var t = e.reward;
                            t ? this.updateTask((0, s.A)((0, r.A)({}, e), {
                                status: "COMPLETED",
                                reward: (0, s.A)((0, r.A)({}, t), {
                                    expireTime: w(Date.now(), {
                                        days: 2
                                    }).getTime()
                                })
                            })) : this.updateTask((0, s.A)((0, r.A)({}, e), {
                                status: "COMPLETED"
                            }))
                        },
                        completeChallenge: function(e) {
                            e.status = "COMPLETED", e.reward.expireTime = w(Date.now(), {
                                days: 2
                            }).getTime()
                        },
                        setNewTaskCompleted: function(e) {
                            e.timestamp = Date.now(), this.newTaskCompleted = e
                        }
                    }
                }),
                L = {
                    FetchTasks: ["fetchTasks"],
                    FetchTaskPreview: ["fetchTaskPreview"],
                    FetchCompletedTasks: ["fetchCompletedTasks"],
                    FetchDashboardTasks: ["fetchDashboardTasks"]
                },
                _ = function() {
                    return (0, u.fn)("challengeModel", N)
                },
                E = function(e) {
                    var t = (0, m.d4)(p.ls),
                        a = e.taskQueryKey,
                        l = e.taskQueryFnc,
                        u = (0, c.I)({
                            queryKey: (0, i.A)(L.FetchTasks).concat((0, i.A)(a)),
                            queryFn: l
                        }),
                        h = u.isLoading,
                        f = u.error,
                        v = u.data,
                        C = u.refetch,
                        x = _(),
                        g = (0, d.useCallback)((function(e) {
                            return e.find((function(e) {
                                return e.challengeCfgId === Number(null === t || void 0 === t ? void 0 : t["rwHub.ALWAYS_ON_MICA_REFERRAL_CHALLENGE_ID"])
                            })) ? e.filter((function(e) {
                                return e.challengeCfgId !== Number(null === t || void 0 === t ? void 0 : t["rwHub.ALWAYS_ON_NON_MICA_REFERRAL_CHALLENGE_ID"])
                            })) : e
                        }), [t]);
                    return (0, d.useEffect)((function() {
                            if (!h) {
                                var e = v || {},
                                    t = e.onGoingChallenges,
                                    a = void 0 === t ? [] : t,
                                    n = e.pastChallenges,
                                    r = void 0 === n ? [] : n;
                                x.setChallenges(g((0, i.A)(a).concat((0, i.A)(r))))
                            }
                        }), [h, v, g]),
                        function(e) {
                            (0, c.I)((0, s.A)((0, r.A)({}, e), {
                                queryKey: L.FetchCompletedTasks,
                                queryFn: (0, n.A)(o().mark((function e() {
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, A.AW)());
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                refetchInterval: 6e4
                            }))
                        }({
                            onSuccess: function(e) {
                                (null === e || void 0 === e ? void 0 : e.newTaskCompleted) && x.setNewTaskCompleted(e.newTaskCompleted)
                            }
                        }), {
                            isLoading: h,
                            error: f,
                            model: x,
                            refetch: C
                        }
                },
                D = function() {
                    var e, t = (0, c.I)({
                        queryKey: L.FetchDashboardTasks,
                        queryFn: (0, n.A)(o().mark((function e() {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", (0, A.j7)());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }).data;
                    return null === (e = null === t || void 0 === t ? void 0 : t.find((function(e) {
                        return "COMPLETED" === e.status
                    }))) || void 0 === e ? void 0 : e.challengeId
                },
                b = function(e) {
                    var t = (0, f.K7)().query,
                        a = D(),
                        n = (0, d.useRef)(null);
                    return (0, d.useEffect)((function() {
                        var r;
                        return "true" !== (null === t || void 0 === t ? void 0 : t.focusOnDashboardTask) && "task" !== (null === t || void 0 === t ? void 0 : t.focus) || e !== a || (r = setTimeout((function() {
                                var e;
                                null === n || void 0 === n || null === (e = n.current) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth"
                                });
                                var t = (0, h.bk)(["focusOnDashboardTask", "focus"]);
                                window.history.replaceState({}, document.title, t)
                            }), 300)),
                            function() {
                                r && clearTimeout(r)
                            }
                    }), [e, t, a]), {
                        ref: n
                    }
                },
                R = function(e) {
                    return (0, c.I)({
                        queryKey: [L.FetchTaskPreview, e],
                        queryFn: (0, n.A)(o().mark((function t() {
                            var a;
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, A.tq)(e);
                                    case 2:
                                        if (!(a = t.sent)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return", (0, s.A)((0, r.A)({}, a), {
                                            expiredTime: Date.now() + 864e5,
                                            taskList: a.taskList.map((function(e) {
                                                return (0, s.A)((0, r.A)({}, e), {
                                                    status: "ONGOING",
                                                    expiredTime: Date.now() + 864e5
                                                })
                                            }))
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    })
                }
        },
        "7bKP": (e, t, a) => {
            a.d(t, {
                U: () => i,
                n: () => l
            });
            var n = a("TrCV"),
                r = a("DTvD"),
                s = (0, r.createContext)({}),
                i = function() {
                    return (0, r.useContext)(s)
                },
                l = function(e) {
                    var t = e.onClickTaskDone,
                        a = e.isPreviewMode,
                        r = void 0 !== a && a,
                        i = e.children;
                    return (0, n.jsx)(s.Provider, {
                        value: {
                            onClickTaskDone: t,
                            isPreviewMode: r
                        },
                        children: i
                    })
                }
        },
        Mu1M: (e, t, a) => {
            a.d(t, {
                RA: () => L,
                pF: () => R,
                Fx: () => E,
                Ll: () => D,
                EA: () => _,
                pJ: () => b
            });
            var n = a("zHQE"),
                r = a("VFw1");
            const s = function(e, t, a) {
                var n = e.length;
                return a = void 0 === a ? n : a, !t && a >= n ? e : (0, r.A)(e, t, a)
            };
            var i = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            const l = function(e) {
                return i.test(e)
            };
            const o = function(e) {
                return e.split("")
            };
            var c = "[\\ud800-\\udfff]",
                d = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                u = "\\ud83c[\\udffb-\\udfff]",
                m = "[^\\ud800-\\udfff]",
                h = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                f = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                p = "(?:" + d + "|" + u + ")" + "?",
                A = "[\\ufe0e\\ufe0f]?",
                v = A + p + ("(?:\\u200d(?:" + [m, h, f].join("|") + ")" + A + p + ")*"),
                C = "(?:" + [m + d + "?", d, h, f, c].join("|") + ")",
                x = RegExp(u + "(?=" + u + ")|" + C + v, "g");
            const g = function(e) {
                return e.match(x) || []
            };
            const T = function(e) {
                return l(e) ? g(e) : o(e)
            };
            const w = function(e) {
                return function(t) {
                    t = (0, n.A)(t);
                    var a = l(t) ? T(t) : void 0,
                        r = a ? a[0] : t.charAt(0),
                        i = a ? s(a, 1).join("") : t.slice(1);
                    return r[e]() + i
                }
            }("toUpperCase");
            const k = function(e) {
                return w((0, n.A)(e).toLowerCase())
            };
            var y = a("CffR"),
                j = a("RApW"),
                N = a("eNvi"),
                L = function(e) {
                    var t = e.status,
                        a = e.reward,
                        n = e.expiredTime;
                    return "COMPLETED" === t && a ? a.expireTime || Date.now() : n
                },
                _ = function(e) {
                    var t = Date.now(),
                        a = L(e);
                    return ["CLAIMED", "EXPIRED"].includes(e.status) || a <= t
                },
                E = function(e, t) {
                    var a = t.completedTime,
                        n = t.rewardedTime,
                        r = t.expiredTime,
                        s = t.status,
                        i = _(t);
                    return "EXPIRED" === s ? {
                        title: e("taskInfoCaption-expired", "Task Expired On"),
                        time: (0, j.r6)(r),
                        timestamp: r
                    } : "CLAIMED" === s ? {
                        title: e("taskInfoCaption-claimed", "Claimed Reward On"),
                        time: (0, j.r6)(n),
                        timestamp: n
                    } : "ONGOING" === s ? {
                        title: e("taskInfoCaption-ongoing", "Time Left to Complete Task"),
                        time: (0, j.r6)(r),
                        timestamp: r
                    } : "COMPLETED" === s ? i ? {
                        title: e("taskInfoCaption-past-completed", "Task Completed On"),
                        time: (0, j.r6)(a),
                        timestamp: a
                    } : {
                        title: e("taskInfoCaption-ongoing-completed", "Time Left to Claim Reward"),
                        time: (0, j.r6)(r),
                        timestamp: r
                    } : {
                        title: "",
                        time: "",
                        timestamp: 0
                    }
                },
                D = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "C",
                        n = t.type,
                        r = t.reward,
                        s = t.ttTotalTradingAmount,
                        i = t.ttTradingEligibleProducts,
                        l = void 0 === i ? [] : i,
                        o = t.contentName,
                        c = t.title;
                    if (c) return (0, y.Z5)(e, c);
                    if ("KYC" === n) return e("taskName-kyc", "Complete personal verification");
                    if ("DEPOSIT" === n) {
                        var d = t.ttDepositTypes,
                            u = t.ttTotalDepositAmount,
                            m = t.tradeUnit,
                            h = m;
                        if (r) {
                            if (1 === (null === d || void 0 === d ? void 0 : d.length)) {
                                if ("C2C" === d[0]) return e("taskNameWithReward-deposit-c2c", "Buy {{totalAmount}} {{amountUnit}} worth of crypto via P2P", {
                                    totalAmount: u,
                                    amountUnit: h
                                });
                                if ("CAPITAL_DEPOSIT" === d[0]) return e("taskNameWithReward-deposit-crypto", "Deposit {{totalAmount}} {{amountUnit}} worth of crypto on blockchain", {
                                    totalAmount: u,
                                    amountUnit: h
                                });
                                if ("BUY_WITH_THIRD_PARTY" === d[0]) return e("taskNameWithReward-deposit-thirdParty", "Deposit {{totalAmount}} {{amountUnit}} worth of crypto with select Third Party Payments", {
                                    totalAmount: u,
                                    amountUnit: h
                                });
                                if ("BUY_WITH_CARD" === d[0]) return e("taskNameWithReward-deposit-card", "Buy {{totalAmount}} {{amountUnit}} worth of crypto with Card", {
                                    totalAmount: u,
                                    amountUnit: h
                                });
                                if ("FIAT_DEPOSIT" === d[0]) return e("taskNameWithReward-deposit-bankTransfer", "Buy {{totalAmount}} {{amountUnit}} worth of crypto with Bank Transfer", {
                                    totalAmount: u,
                                    amountUnit: h
                                })
                            }
                            return (null === d || void 0 === d ? void 0 : d.includes("CAPITAL_DEPOSIT")) || (null === d || void 0 === d ? void 0 : d.includes("FIAT_DEPOSIT")) ? e("taskNameWithReward-deposit-buyOrDeposit", "Buy or deposit {{totalAmount}} {{amountUnit}} worth of crypto", {
                                totalAmount: u,
                                amountUnit: h
                            }) : e("taskNameWithReward-deposit-buy", "Buy {{totalAmount}} {{amountUnit}} worth of crypto", {
                                totalAmount: u,
                                amountUnit: h
                            })
                        }
                        if (1 === (null === d || void 0 === d ? void 0 : d.length)) {
                            if ("C2C" === d[0]) return e("taskName-deposit-c2c", "Buy {{totalAmount}} {{amountUnit}} worth of crypto via P2P", {
                                totalAmount: u,
                                amountUnit: h
                            });
                            if ("CAPITAL_DEPOSIT" === d[0]) return e("taskName-deposit-crypto", "Deposit {{totalAmount}} {{amountUnit}} worth of crypto on blockchain", {
                                totalAmount: u,
                                amountUnit: h
                            });
                            if ("BUY_WITH_THIRD_PARTY" === d[0]) return e("taskName-deposit-thirdParty", "Buy {{totalAmount}} {{amountUnit}} worth of crypto with select Third Party Payments", {
                                totalAmount: u,
                                amountUnit: h
                            });
                            if ("BUY_WITH_CARD" === d[0]) return e("taskName-deposit-card", "Buy {{totalAmount}} {{amountUnit}} worth of crypto with Card", {
                                totalAmount: u,
                                amountUnit: h
                            });
                            if ("FIAT_DEPOSIT" === d[0]) return e("taskName-deposit-bankTransfer", "Buy {{totalAmount}} {{amountUnit}} worth of crypto with Bank Transfer", {
                                totalAmount: u,
                                amountUnit: h
                            })
                        }
                        return (null === d || void 0 === d ? void 0 : d.includes("CAPITAL_DEPOSIT")) || (null === d || void 0 === d ? void 0 : d.includes("FIAT_DEPOSIT")) ? e("taskName-deposit-buyOrDeposit", "Buy or deposit {{totalAmount}} {{amountUnit}} worth of crypto", {
                            totalAmount: u,
                            amountUnit: h
                        }) : e("taskName-deposit-buy", "Buy {{totalAmount}} {{amountUnit}} worth of crypto", {
                            totalAmount: u,
                            amountUnit: h
                        })
                    }
                    if ("TRADING" === n) {
                        var f = (0, j.Tk)((null === l || void 0 === l ? void 0 : l.map((function(t) {
                            return (0, N.V)(t, e)
                        }))) || []);
                        return e(r ? "taskNameWithReward-trading" : "taskName-trading", "Trade {{totalAmount}} {{amountUnit}} worth of crypto on {{products}}", {
                            totalAmount: s,
                            amountUnit: t.tradeUnit,
                            products: f
                        })
                    }
                    if ("OPEN_ACCOUNT" === n) {
                        var p = t.ttAccountTypes,
                            A = (0, j.Tk)((null === p || void 0 === p ? void 0 : p.map((function(e) {
                                return k(e)
                            }))) || [], "/");
                        return e(r ? "taskNameWithReward-openAccount" : "taskName-openAccount", "Open {{accountTypes}} Account", {
                            accountTypes: A
                        })
                    }
                    return "CLICK" === n ? "T" === a ? e("taskName-click-oldSystem", 'Click "Do Task"') : e(r ? "taskNameWithReward-click" : "taskName-click", "View {{contentName}}", {
                        contentName: o
                    }) : c
                },
                b = function(e) {
                    return null != e.tradeRequireAmount && Number(e.tradeRequireAmount) > 0
                },
                R = function(e) {
                    return "ONE_REWARD_PER_TASK" === e.rewardMethodType ? L(e) || 0 : E((function() {}), e).timestamp || 0
                }
        },
        ExeA: (e, t, a) => {
            a.d(t, {
                g: () => ke
            });
            var n = a("BK7R"),
                r = a("QUKP"),
                s = a("TrCV"),
                i = a("eeEA"),
                l = a("O94r"),
                o = a.n(l),
                c = a("Q755"),
                d = a("fLtG"),
                u = a("DTvD"),
                m = a("UgDF"),
                h = a("MXiP"),
                f = a("RGyw"),
                p = a("//eO"),
                A = a("yiIT"),
                v = a("GfFo"),
                C = a("mQvl"),
                x = a("9mmq"),
                g = a("B35M"),
                T = a("D4P9");
            const w = function(e) {
                var t = e.type,
                    a = void 0 === t ? "normal" : t,
                    n = e.className,
                    r = (0, C.B)().t;
                return "mini" === a ? (0, s.jsx)(f.A, {
                    as: "span",
                    className: o()("TaskRuleTrigger ul-svg-container", n),
                    children: (0, s.jsx)(x.A, {
                        size: 12
                    })
                }) : (0, s.jsx)(f.A, {
                    as: "span",
                    className: o()("TaskRuleTrigger", n, "bn-span"),
                    children: (0, s.jsxs)(T.A, {
                        variant: "secondary",
                        sz: "small",
                        className: "TaskRuleTrigger-button",
                        children: [(0, s.jsx)(g.A, {
                            className: "TaskRuleTrigger-icon ul-svg-container"
                        }), "large" === a && r("rules", "Rules")]
                    })
                })
            };
            var k = a("+cpL"),
                y = a("eheR"),
                j = a("Mu1M");
            const N = function(e) {
                var t = e.challenge,
                    a = e.className,
                    n = t.taskLabel,
                    r = (0, C.B)().t;
                return (0, s.jsxs)(f.A, {
                    className: o()("ChallengeLabel", "typography-Caption2", a, {
                        "ChallengeLabel--onboarding": n === y.jr.Onboarding,
                        "ChallengeLabel--daily": n === y.jr.Daily
                    }),
                    children: [n === y.jr.Onboarding && r("ChallengeLabel-Onboarding", "Onboarding Task"), n === y.jr.Daily && r("ChallengeLabel-Daily", "Daily Task")]
                })
            };
            var L = a("sViW"),
                _ = a("gZfF"),
                E = a("Pz56"),
                D = a.n(E),
                b = a("GuDP"),
                R = a("R2Ip"),
                M = a("xE8/"),
                P = a("7bKP"),
                I = a("8/Bc"),
                O = a("tYhB"),
                F = a("XxiJ"),
                B = a("Y1+p"),
                U = a("/NP1"),
                S = a("B0yh"),
                V = a("5/aQ"),
                G = {
                    300020: {
                        icon: (0, s.jsx)(F.A, {}),
                        title: {
                            key: "CannotDoTask",
                            defaultValue: "Cannot Do Task"
                        },
                        desc: {
                            key: "CannotDoTask-kyc",
                            defaultValue: "You are not eligible to do this task. Please check out other activities."
                        }
                    }
                },
                H = {
                    icon: (0, s.jsx)(V.v, {}),
                    title: {
                        key: "UnexpectedError",
                        defaultValue: "Unexpected Error"
                    },
                    desc: {
                        key: "UnexpectedError-desc",
                        defaultValue: "An unexpected error has occurred. Please try again later."
                    }
                },
                Z = function(e) {
                    var t = e.code,
                        a = (0, S.Bd)().t,
                        n = (0, u.useState)(!0),
                        r = n[0],
                        l = n[1],
                        o = G[t] || H,
                        c = o.cta && o.cta(a);
                    return (0, s.jsx)(B.J, {
                        showClose: !0,
                        visible: r && o,
                        onClose: function() {
                            l(!1)
                        },
                        header: (0, s.jsx)(i.Ay, {
                            style: {
                                height: "24px"
                            }
                        }),
                        children: (0, s.jsx)(U.A, {
                            icon: (0, s.jsx)(i.Ay, {
                                style: {
                                    fontSize: "96px",
                                    width: "100%",
                                    height: "96px"
                                },
                                children: null === o || void 0 === o ? void 0 : o.icon
                            }),
                            title: a(null === o || void 0 === o ? void 0 : o.title.key, null === o || void 0 === o ? void 0 : o.title.defaultValue),
                            description: a(null === o || void 0 === o ? void 0 : o.desc.key, null === o || void 0 === o ? void 0 : o.desc.defaultValue),
                            actions: c || (0, s.jsx)(T.A, {
                                className: "ul-width-full",
                                variant: "primary",
                                onClick: function() {
                                    l(!1)
                                },
                                children: a("ok", "OK")
                            })
                        })
                    })
                },
                z = function(e) {
                    var t = e.task,
                        a = e.isPast,
                        i = void 0 !== a && a,
                        l = e.systemTag,
                        c = void 0 === l ? "C" : l,
                        d = (0, _.A)(e, ["task", "isPast", "systemTag"]),
                        u = (0, C.B)().t,
                        h = (0, P.U)(),
                        f = h.onClickTaskDone,
                        A = h.isPreviewMode,
                        v = (0, m.jE)(),
                        x = (0, k.mR)().updateTask,
                        g = t.webLink,
                        w = t.iosLink,
                        y = t.androidLink,
                        j = t.electronLink,
                        N = t.status,
                        E = t.reward,
                        F = (0, p.n)().isMobile,
                        B = d.className,
                        U = (0, b.n)({
                            mutationFn: (0, L.A)(D().mark((function e() {
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", (0, I.W_)({
                                                taskId: t.id,
                                                version: "T" === c ? 1 : 2
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            onSuccess: function(e) {
                                e.success && (v.invalidateQueries({
                                    queryKey: k.ey.FetchTasks
                                }), f && f(t))
                            }
                        }),
                        S = U.mutate,
                        V = U.isLoading,
                        G = U.data,
                        H = function() {
                            "CLICK" !== t.type || A || S()
                        },
                        z = "CLICK" === t.type && (null === g || void 0 === g ? void 0 : g.includes("/rewards-hub"));
                    return E ? (0, s.jsxs)(s.Fragment, {
                        children: [G && !1 === G.success && (0, s.jsx)(Z, {
                            success: G.success,
                            code: G.code
                        }), "ONGOING" === t.status && (0, s.jsxs)(s.Fragment, {
                            children: [!z && (0, s.jsx)(M.qO, {
                                className: "ul-decoration-none",
                                to: g,
                                ios: w,
                                android: y,
                                electron: j,
                                target: "_blank",
                                children: (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                    variant: "primary",
                                    loading: V,
                                    sz: "small"
                                }, d), {
                                    as: "div",
                                    className: o()("TaskAction", B),
                                    onClick: H,
                                    children: u("doTask", "Do Task")
                                }))
                            }), z && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                variant: "primary",
                                loading: V,
                                sz: "small"
                            }, d), {
                                as: "div",
                                className: o()("TaskAction", B),
                                onClick: H,
                                children: u("doTask", "Do Task")
                            }))]
                        }), "COMPLETED" === N && !i && !!(null === E || void 0 === E ? void 0 : E.rewardLeft) && (0, s.jsx)(O.S, (0, r.A)((0, n.A)({
                            onSuccess: function() {
                                x((0, r.A)((0, n.A)({}, t), {
                                    status: "CLAIMED"
                                }))
                            },
                            variant: "primary",
                            sz: "small"
                        }, d), {
                            reward: E,
                            className: o()("TaskAction", B)
                        })), "COMPLETED" === N && i && (0, s.jsx)(R.A, {
                            trigger: "hover",
                            variant: "gray",
                            placement: F ? "top-end" : "top",
                            tooltips: u("challenge-action-past-completed-tooltip", "You did not claim reward before it expired"),
                            children: (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                sz: "small"
                            }, d), {
                                variant: "primary",
                                disabled: !0,
                                className: o()("TaskAction TaskAction-elevated", B),
                                children: u("claimReward", "Claim Reward")
                            }))
                        }), "COMPLETED" === N && E && !(null === E || void 0 === E ? void 0 : E.rewardLeft) && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, d), {
                            variant: "primary",
                            inactive: !0,
                            className: o()("TaskAction TaskAction-elevated", B),
                            children: u("fullyClaimed", "Fully Claimed")
                        })), "CLAIMED" === N && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, d), {
                            variant: "primary",
                            disabled: !0,
                            className: o()("TaskAction", B),
                            children: u("rewarded", "Rewarded")
                        })), "EXPIRED" === N && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            variant: "primary",
                            sz: "small"
                        }, d), {
                            inactive: !0,
                            className: o()("TaskAction", B),
                            children: u("expired", "Expired")
                        }))]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [G && !1 === G.success && (0, s.jsx)(Z, {
                            success: G.success,
                            code: G.code
                        }), "ONGOING" === t.status && (0, s.jsxs)(s.Fragment, {
                            children: [!z && (0, s.jsx)(M.qO, {
                                className: "ul-decoration-none",
                                to: g,
                                ios: w,
                                android: y,
                                electron: j,
                                target: "_blank",
                                children: (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                    variant: "primary",
                                    sz: "small"
                                }, d), {
                                    as: "div",
                                    className: o()("TaskAction TaskAction--childTask", B),
                                    onClick: H,
                                    children: u("doTask", "Do Task")
                                }))
                            }), z && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                variant: "primary",
                                sz: "small"
                            }, d), {
                                as: "div",
                                className: o()("TaskAction TaskAction--childTask", B),
                                onClick: H,
                                children: u("doTask", "Do Task")
                            }))]
                        }), "COMPLETED" === N && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, d), {
                            variant: "primary",
                            inactive: !0,
                            className: o()("TaskAction TaskAction--childTask", B),
                            children: u("complelted", "Completed")
                        })), "CLAIMED" === N && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, d), {
                            variant: "primary",
                            inactive: !0,
                            className: o()("TaskAction TaskAction--childTask", B),
                            children: u("complelted", "Completed")
                        })), "EXPIRED" === N && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            variant: "primary",
                            sz: "small"
                        }, d), {
                            inactive: !0,
                            className: o()("TaskAction", B),
                            children: u("expired", "Expired")
                        }))]
                    })
                },
                W = a("Ca1D"),
                K = a("Y4uf"),
                Y = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.81077 16.3107L7.68945 14.1893L14.1895 7.68933L16.3108 9.81065L9.81077 16.3107Z",
                            fill: "#929AA5"
                        }), (0, s.jsx)("path", {
                            d: "M6.37869 8.5L4.43938 10.4393C1.9206 12.9581 1.9206 17.0418 4.43938 19.5606C6.95816 22.0794 11.0419 22.0794 13.5607 19.5606L15.5 17.6213L13.3787 15.5L11.4394 17.4393C10.0922 18.7865 7.90791 18.7865 6.5607 17.4393C5.21349 16.0921 5.21349 13.9078 6.5607 12.5606L8.50001 10.6213L6.37869 8.5Z",
                            fill: "url(#paint0_linear_252_29460_".concat(t, ")")
                        }), (0, s.jsx)("path", {
                            d: "M12.5607 6.5607C13.9079 5.21349 16.0921 5.21349 17.4394 6.5607C18.7866 7.90791 18.7866 10.0922 17.4394 11.4394L15.5 13.3787L17.6214 15.5L19.5607 13.5607C22.0795 11.0419 22.0795 6.95816 19.5607 4.43938C17.0419 1.92059 12.9581 1.9206 10.4394 4.43938L8.50003 6.3787L10.6214 8.50002L12.5607 6.5607Z",
                            fill: "url(#paint1_linear_252_29460_".concat(t, ")")
                        }), (0, s.jsxs)("defs", {
                            children: [(0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29460_".concat(t),
                                x1: "12",
                                y1: "2.55029",
                                x2: "12",
                                y2: "21.4497",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint1_linear_252_29460_".concat(t),
                                x1: "12",
                                y1: "2.55029",
                                x2: "12",
                                y2: "21.4497",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    })
                },
                q = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("rect", {
                            width: "18",
                            height: "11",
                            transform: "matrix(1 0 0 -1 3 21)",
                            fill: "url(#paint0_linear_252_29456_".concat(t, ")")
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.6997 2.00012L10.6997 2.00012L10.6997 13.362L10.3967 13.3593L6.23779 13.4001L12.2126 19.375L18.1875 13.4001L14.0112 13.3911L13.6997 13.3883L13.6997 2.00012Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29456_".concat(t),
                                x1: "9",
                                y1: "0",
                                x2: "9",
                                y2: "11",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })
                        })]
                    })
                },
                Q = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 20H22V15H2V20ZM2 13V4H22V13H11V7H4V13H2ZM17 7H13V9H17V7Z",
                            fill: "url(#paint0_linear_252_29455_".concat(t, ")")
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.5 10C9.5 11.1046 8.60457 12 7.5 12C6.39543 12 5.5 11.1046 5.5 10C5.5 8.89543 6.39543 8 7.5 8C8.60457 8 9.5 8.89543 9.5 10ZM11 15V17H4V15H11ZM13 15V17H20V15H13ZM20 13V11H13V13H20Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("rect", {
                            x: "1",
                            y: "11",
                            width: "22",
                            height: "2",
                            fill: "#76808F"
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29455_".concat(t),
                                x1: "12",
                                y1: "4",
                                x2: "12",
                                y2: "20",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })
                        })]
                    })
                },
                X = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("rect", {
                            x: "2",
                            y: "6",
                            width: "20",
                            height: "2",
                            fill: "#76808F"
                        }), (0, s.jsx)("rect", {
                            x: "2",
                            y: "16",
                            width: "20",
                            height: "2",
                            fill: "#76808F"
                        }), (0, s.jsx)("circle", {
                            cx: "4",
                            cy: "4",
                            r: "4",
                            transform: "matrix(1 0 0 -1 5 11)",
                            fill: "url(#paint0_linear_252_29458_".concat(t, ")")
                        }), (0, s.jsx)("circle", {
                            cx: "4",
                            cy: "4",
                            r: "4",
                            transform: "matrix(1 0 0 -1 11 21)",
                            fill: "url(#paint1_linear_252_29458_".concat(t, ")")
                        }), (0, s.jsx)("path", {
                            d: "M9 5.5L7.5 7L9 8.5L10.5 7L9 5.5Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("path", {
                            d: "M15 15.5L13.5 17L15 18.5L16.5 17L15 15.5Z",
                            fill: "#76808F"
                        }), (0, s.jsxs)("defs", {
                            children: [(0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29458_".concat(t),
                                x1: "4",
                                y1: "0",
                                x2: "4",
                                y2: "8",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint1_linear_252_29458_".concat(t),
                                x1: "4",
                                y1: "0",
                                x2: "4",
                                y2: "8",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    })
                },
                J = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            d: "M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9L15 16Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9 8C12.866 8 16 11.134 16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8ZM9 18L6 15L9 12L12 15L9 18Z",
                            fill: "url(#paint0_linear_252_29453_".concat(t, ")")
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29453_".concat(t),
                                x1: "9",
                                y1: "22",
                                x2: "9",
                                y2: "8",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })
                        })]
                    })
                },
                $ = function(e) {
                    var t = (0, u.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 13C4.79086 13 3 14.7909 3 17V21H21V17C21 14.7909 19.2091 13 17 13H15L12 16L9 13L7 13Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5Z",
                            fill: "url(#paint0_linear_252_29457_".concat(t, ")")
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_252_29457_".concat(t),
                                x1: "12",
                                y1: "11",
                                x2: "12",
                                y2: "2",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })
                        })]
                    })
                },
                ee = function(e) {
                    var t = (0, u.useMemo)((function() {
                            return Math.random()
                        }), []),
                        a = "paint0_linear_7109_103483_".concat(t);
                    return (0, s.jsxs)(K.A, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M22.0002 5.99988L2.00024 5.99988L2.00024 19.9999L22.0002 19.9999L22.0002 5.99988ZM4.00024 9.99988L20.0002 9.99988L20.0002 7.99988L4.00024 7.99988L4.00024 9.99988ZM12.0002 11.9999L20.0002 11.9999L20.0002 13.9999L12.0002 13.9999L12.0002 11.9999ZM12.0002 15.9999L16.0002 15.9999L16.0002 17.9999L12.0002 17.9999L12.0002 15.9999ZM4.00024 11.9999L10.0002 11.9999L10.0002 17.9999L4.00024 17.9999L4.00024 11.9999Z",
                            fill: "url(#".concat(a, ")")
                        }), (0, s.jsx)("path", {
                            d: "M2 3.99805L22 3.99805L22 5.99805L2 5.99805L2 3.99805Z",
                            fill: "#76808F"
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: a,
                                x1: "2.00024",
                                y1: "12.9999",
                                x2: "22.0002",
                                y2: "12.9999",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    "stop-color": "#F0B90B"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    "stop-color": "#F8D33A"
                                })]
                            })
                        })]
                    })
                },
                te = function(e) {
                    var t = e.taskType,
                        a = (0, _.A)(e, ["taskType"]);
                    return "KYC" === t ? (0, s.jsx)(Q, (0, n.A)({}, a)) : "OPEN_ACCOUNT" === t ? (0, s.jsx)($, (0, n.A)({}, a)) : "DEPOSIT" === t ? (0, s.jsx)(q, (0, n.A)({}, a)) : "TRADING" === t ? (0, s.jsx)(J, (0, n.A)({}, a)) : "CLICK" === t ? (0, s.jsx)(Y, (0, n.A)({}, a)) : "CUSTOMIZED" === t ? (0, s.jsx)(X, (0, n.A)({}, a)) : "PAGE_VIEW" === t ? (0, s.jsx)(ee, (0, n.A)({}, a)) : (0, s.jsx)(s.Fragment, {})
                },
                ae = a("/Q1k"),
                ne = a("28x1"),
                re = function(e) {
                    var t = e.lineClamp,
                        a = void 0 === t ? 2 : t,
                        i = e.tooltip,
                        l = e.tooltipProps,
                        c = void 0 === l ? {
                            placement: "top"
                        } : l,
                        d = (0, _.A)(e, ["lineClamp", "tooltip", "tooltipProps"]),
                        u = d.children,
                        m = d.className;
                    return (0, s.jsx)(R.A, (0, r.A)((0, n.A)({}, c), {
                        tooltips: i || u,
                        arrow: !0,
                        className: "TruncatedText-tooltip",
                        children: (0, s.jsx)(f.A, (0, r.A)((0, n.A)({}, d), {
                            className: o()("TruncatedText", m),
                            style: {
                                WebkitLineClamp: a,
                                lineClamp: a
                            }
                        }))
                    }))
                },
                se = a("lIgU"),
                ie = a("1T48"),
                le = a("3Pj3"),
                oe = a("+bWL"),
                ce = (a("xQnI"), function(e) {
                    var t = e.label,
                        a = e.children;
                    return (0, s.jsxs)(f.A, {
                        className: o()("TaskCard-info-field"),
                        children: [(0, s.jsx)(f.A, {
                            as: "label",
                            className: o()("TaskCard-info-field-label"),
                            children: t
                        }), (0, s.jsx)(f.A, {
                            className: o()("TaskCard-info-field-value"),
                            children: a
                        })]
                    })
                });
            const de = function(e) {
                var t = e.task,
                    a = e.counterTime,
                    n = e.onTimeUp,
                    r = e.showTimer,
                    i = e.simplifiedTime,
                    l = (0, ae.d4)(ie.ls),
                    o = (0, C.B)().t,
                    c = t.reward,
                    d = t.challengeTaskCfgId,
                    u = (0, j.Fx)(o, t),
                    m = (0, j.EA)(t),
                    h = (0, S.Od)().data,
                    p = [Number(null === l || void 0 === l ? void 0 : l["rwHub.ALWAYS_ON_MICA_REFERRAL_TASK_ID"]), Number(null === l || void 0 === l ? void 0 : l["rwHub.ALWAYS_ON_NON_MICA_REFERRAL_TASK_ID"])].includes(d);
                return (0, s.jsxs)(f.A, {
                    className: "TaskCard-info",
                    children: [p && (0, s.jsx)(ce, {
                        label: o("progress", "Progress"),
                        children: (0, s.jsx)(f.A, {
                            children: o("referralProgress", "{{number}} Referrals", {
                                number: (null === h || void 0 === h ? void 0 : h.totalSuccessfulInvited) || 0
                            })
                        })
                    }), (0, j.pJ)(t) && (0, s.jsx)(ce, {
                        label: o("progress", "Progress"),
                        children: (0, s.jsx)(oe.V, {
                            task: t
                        })
                    }), (0, s.jsxs)(ce, {
                        label: o("reward", "Reward"),
                        children: [(0, s.jsx)(f.A, {
                            className: "TaskCard-info-rewardIcon ul-svg-container",
                            children: (0, s.jsx)(se.A, {
                                type: c.rewardType
                            })
                        }), (0, s.jsxs)(re, {
                            children: [null === c || void 0 === c ? void 0 : c.value, " ", null === c || void 0 === c ? void 0 : c.unit, " ", (0, le.R5)(c, o)]
                        })]
                    }), !p && (0, s.jsxs)(ce, {
                        label: u.title,
                        children: [r && (0, s.jsx)(ne.K, {
                            className: "TaskCard-info-field-value",
                            duration: a - Date.now(),
                            onCompleted: n,
                            simplified: i
                        }), m && u.time]
                    })]
                })
            };
            var ue = function(e) {
                    var t = e.challenge,
                        a = e.task,
                        i = e.enableLabel,
                        l = void 0 !== i && i,
                        c = t.id,
                        d = t.systemTag,
                        u = t.titleTranslation,
                        x = t.ruleTranslation,
                        g = t.taskLabel,
                        T = (0, C.B)().t,
                        L = (0, p.n)(),
                        _ = L.isMobile,
                        E = L.isTablet,
                        D = (0, m.jE)(),
                        b = (0, k.mR)().updateTask,
                        R = (0, h.j)().isRtl,
                        M = a.reward,
                        P = a.status,
                        I = a.ruleTranslation,
                        O = (a.id, (0, j.EA)(a)),
                        F = {
                            elementID: A.M7.CHALLENGE,
                            extraInfo: {
                                id: "".concat(c)
                            }
                        },
                        B = "C" === d ? (0, j.Ll)(T, a) : u,
                        U = (0, j.RA)(a),
                        S = (0, v.HT)(F);
                    (0, v.QN)(F);
                    var V = (0, k.dS)(c).ref,
                        G = !O && ["ONGOING", "COMPLETED"].includes(P),
                        H = l && g && [y.jr.Onboarding, y.jr.Daily].includes(g),
                        Z = function() {
                            return (0, s.jsxs)(f.A, {
                                className: "TaskCard-actions",
                                children: [(0, s.jsx)(W.o, {
                                    trigger: (0, s.jsx)(w, {
                                        type: _ ? "mini" : "large"
                                    }),
                                    task: a,
                                    reward: M,
                                    systemTag: d,
                                    titleTranslation: u,
                                    ruleTranslation: I || x
                                }), (0, s.jsx)(z, {
                                    task: a,
                                    isPast: O,
                                    systemTag: d,
                                    className: "TaskCard-actions-act ul-decoration-none"
                                })]
                            })
                        },
                        K = function() {
                            return (0, s.jsx)(de, {
                                showTimer: G,
                                counterTime: U,
                                task: a,
                                onTimeUp: function() {
                                    "ONGOING" === P ? D.invalidateQueries({
                                        queryKey: k.ey.FetchTasks
                                    }) : "COMPLETED" === P && b((0, r.A)((0, n.A)({}, a), {
                                        reward: (0, r.A)((0, n.A)({}, M), {
                                            expireTime: Date.now() - 1e3
                                        })
                                    }))
                                },
                                simplifiedTime: _
                            })
                        },
                        Y = function() {
                            return (0, s.jsx)(f.A, {
                                className: "TaskCard-taskIcon",
                                children: (0, s.jsx)(te, {
                                    taskType: a.type
                                })
                            })
                        };
                    return (0, s.jsxs)(f.A, {
                        ref: V,
                        onClick: S,
                        className: o()("TaskCard", {
                            "TaskCard--disabled": O,
                            "TaskCard--rtl": R,
                            "TaskCard--withLabel": H
                        }),
                        children: [H && (0, s.jsx)(N, {
                            className: "TaskCard-taskLabel",
                            challenge: t
                        }), !_ && Y(), (0, s.jsxs)(f.A, {
                            className: "ul-flex TaskCard-header",
                            children: [_ && Y(), (0, s.jsx)(f.A, {
                                className: o()("TaskCard-taskName", "ul-line-clamp-2"),
                                children: B
                            }), !_ && K(), E && Z()]
                        }), _ && K(), !E && Z()]
                    })
                },
                me = a("HyIL");
            const he = function(e) {
                var t = e.value,
                    a = e.total;
                return (0, s.jsxs)(f.A, {
                    className: "ProgressBar",
                    children: [(0, s.jsx)(me.Ay, (0, n.A)({
                        className: o()("ProgressBar-main", {
                            isZero: 0 === +t
                        }),
                        strokeWidth: 4
                    }, e)), (0, s.jsxs)(f.A, {
                        as: "label",
                        className: o()("ProgressBar-value", {
                            isFull: +t === a
                        }),
                        children: [(0, s.jsxs)(f.A, {
                            className: "ProgressBar-value-active",
                            children: [t, "/"]
                        }), (0, s.jsx)(f.A, {
                            className: "ProgressBar-value-max",
                            children: a
                        })]
                    })]
                })
            };
            var fe = a("YZ1P"),
                pe = function(e) {
                    var t = e.challengeData,
                        a = e.isPast,
                        i = (0, _.A)(e, ["challengeData", "isPast"]),
                        l = (0, C.B)().t,
                        c = (0, k.mR)().updateChallenge,
                        d = t.status,
                        u = t.reward,
                        m = i.className;
                    return (0, s.jsxs)(s.Fragment, {
                        children: ["ONGOING" === d && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, i), {
                            disabled: !0,
                            variant: "secondary",
                            className: o()("ChallengeAction", m),
                            children: l("claimReward", "Claim Reward")
                        })), "COMPLETED" === d && !a && !!(null === u || void 0 === u ? void 0 : u.rewardLeft) && (0, s.jsx)(O.S, (0, r.A)((0, n.A)({
                            onSuccess: function() {
                                c((0, r.A)((0, n.A)({}, t), {
                                    status: "CLAIMED"
                                }))
                            },
                            variant: "primary",
                            sz: "small"
                        }, i), {
                            reward: u,
                            className: o()("ChallengeAction", m)
                        })), "COMPLETED" === d && a && (0, s.jsx)(R.A, {
                            className: "ul-width-full",
                            trigger: "hover",
                            variant: "gray",
                            placement: "top",
                            tooltips: l("challenge-action-past-completed-tooltip", "You did not claim reward before it expired"),
                            children: (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                                sz: "small"
                            }, i), {
                                variant: "primary",
                                disabled: !0,
                                className: o()("ChallengeAction ChallengeAction-elevated", m),
                                children: l("claimReward", "Claim Reward")
                            }))
                        }), "COMPLETED" === d && u && !(null === u || void 0 === u ? void 0 : u.rewardLeft) && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, i), {
                            variant: "primary",
                            inactive: !0,
                            className: o()("ChallengeAction ChallengeAction-elevated", m),
                            children: l("fullyClaimed", "Fully Claimed")
                        })), "CLAIMED" === d && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "small"
                        }, i), {
                            variant: "primary",
                            disabled: !0,
                            className: o()("ChallengeAction", m),
                            children: l("rewarded", "Rewarded")
                        })), "EXPIRED" === d && (0, s.jsx)(T.A, (0, r.A)((0, n.A)({
                            sz: "middle"
                        }, i), {
                            variant: "secondary",
                            disabled: !0,
                            className: o()("ChallengeAction", m),
                            children: l("expired", "Expired")
                        }))]
                    })
                },
                Ae = a("I6V/"),
                ve = a("HytR"),
                Ce = {
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 2,
                        slidesToSlide: 2
                    },
                    tablet: {
                        breakpoint: {
                            max: 1023,
                            min: 768
                        },
                        items: 2,
                        slidesToSlide: 2
                    }
                },
                xe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return e === t ? "top-start" : e === a ? "top-end" : "top"
                },
                ge = function(e) {
                    var t, a, n = e.taskList,
                        r = void 0 === n ? [] : n,
                        i = e.reward,
                        l = e.isPast,
                        c = void 0 !== l && l,
                        d = e.systemTag,
                        m = void 0 === d ? "C" : d,
                        h = e.titleTranslation,
                        A = (0, C.B)().t,
                        v = (0, u.useRef)(null),
                        x = (0, p.n)(),
                        g = x.isDesktop,
                        k = x.isMobile,
                        y = g ? null === Ce || void 0 === Ce || null === (t = Ce.desktop) || void 0 === t ? void 0 : t.items : null === Ce || void 0 === Ce || null === (a = Ce.tablet) || void 0 === a ? void 0 : a.items,
                        N = (0, u.useState)(!1),
                        L = N[0],
                        _ = N[1],
                        E = (0, u.useState)(!0),
                        D = E[0],
                        b = E[1],
                        R = (0, u.useState)(0),
                        P = R[0],
                        I = R[1],
                        O = (0, u.useState)(y - 1),
                        F = O[0],
                        B = O[1],
                        U = !k && r.length > y,
                        S = function(e) {
                            return (0, s.jsxs)(f.A, {
                                className: o()("ChallengeCard-taskList-card-progress-wrap", {
                                    "ul-invisible": !(0, j.pJ)(e)
                                }),
                                children: [(0, s.jsx)(f.A, {
                                    className: "ChallengeCard-taskList-card-progress",
                                    children: A("progress", "Progress")
                                }), (0, s.jsx)(oe.V, {
                                    className: "ChallengeCard-taskList-card-accumulation",
                                    task: e
                                })]
                            })
                        },
                        V = k ? "mini" : g ? "large" : "medium",
                        G = r.map((function(e, t) {
                            return (0, s.jsxs)(u.Fragment, {
                                children: [k && t > 0 && (0, s.jsx)(f.A, {
                                    className: "ChallengeCard-taskList-separator"
                                }), (0, s.jsxs)(f.A, {
                                    className: "ChallengeCard-taskList-card",
                                    children: [(0, s.jsxs)(f.A, {
                                        className: "ChallengeCard-taskList-card-main",
                                        children: [(0, s.jsx)(f.A, {
                                            className: "ChallengeCard-taskList-card-icon-wrap ul-svg-container",
                                            children: (0, s.jsx)(te, {
                                                taskType: e.type,
                                                className: "ChallengeCard-taskList-card-icon"
                                            })
                                        }), (0, s.jsxs)(f.A, {
                                            children: [(0, s.jsx)(re, {
                                                className: "ChallengeCard-taskList-card-title",
                                                tooltipProps: {
                                                    placement: U ? xe(t, P, F) : "top"
                                                },
                                                lineClamp: 2,
                                                children: "".concat(t + 1, ". ").concat((0, j.Ll)(A, e, m))
                                            }), !k && S(e)]
                                        })]
                                    }), (0, s.jsxs)(f.A, {
                                        className: "ChallengeCard-taskList-card-footer",
                                        children: [k && (0, j.pJ)(e) && S(e), (0, s.jsxs)(f.A, {
                                            className: o()("ChallengeCard-taskList-card-action-wrap", {
                                                "ul-flex-1": !(0, j.pJ)(e),
                                                "ul-flex-justify-end": !(0, j.pJ)(e)
                                            }),
                                            children: [(0, s.jsx)(W.o, {
                                                trigger: (0, s.jsx)(w, {
                                                    type: V
                                                }),
                                                task: e,
                                                reward: i,
                                                systemTag: m,
                                                titleTranslation: h,
                                                ruleTranslation: null === e || void 0 === e ? void 0 : e.ruleTranslation,
                                                claimRewardAfterAllTaskCompleted: !0
                                            }), (0, s.jsx)(z, {
                                                className: "ul-decoration-none",
                                                task: e,
                                                isPast: c
                                            })]
                                        })]
                                    })]
                                })]
                            }, e.id)
                        }));
                    return U ? (0, s.jsxs)(f.A, {
                        className: "ChallengeCard-taskList ChallengeCard-taskList--Carousel",
                        children: [L && (0, s.jsx)(T.A, {
                            onClick: function() {
                                var e;
                                null === v || void 0 === v || null === (e = v.current) || void 0 === e || e.slickPrev()
                            },
                            className: "ChallengeCard-taskList-arrow ChallengeCard-taskList-arrow--left",
                            children: (0, s.jsx)(Ae.A, {})
                        }), (0, s.jsx)(M.r3, {
                            ref: v,
                            arrows: !1,
                            dots: !1,
                            infinite: !1,
                            speed: 1e3,
                            slidesToShow: y,
                            slidesToScroll: y,
                            beforeChange: function(e, t) {
                                var a = null === v || void 0 === v ? void 0 : v.current.props,
                                    n = a.children,
                                    r = a.slidesToShow,
                                    s = Math.round(n.length / r);
                                _(t > 0), b(t < s);
                                var i = t > 0 ? t - 1 : t,
                                    l = (i + 1) * y >= n.length,
                                    o = (i + 1) * y - 1,
                                    c = n.length - 1 - o;
                                I(l ? i * y + c : i * y), B(o >= n.length ? n.length - 1 : o)
                            },
                            children: G
                        }), D && (0, s.jsx)(T.A, {
                            onClick: function() {
                                var e;
                                null === v || void 0 === v || null === (e = v.current) || void 0 === e || e.slickNext()
                            },
                            className: "ChallengeCard-taskList-arrow ChallengeCard-taskList-arrow--right",
                            children: (0, s.jsx)(ve.A, {})
                        })]
                    }) : (0, s.jsx)(f.A, {
                        className: "ChallengeCard-taskList",
                        children: G
                    })
                },
                Te = function(e) {
                    var t = e.label,
                        a = e.children;
                    return (0, s.jsxs)(f.A, {
                        className: o()("ChallengeCardField"),
                        children: [(0, s.jsx)(re, {
                            as: "label",
                            className: o()("ChallengeCardField-label"),
                            children: t
                        }), (0, s.jsx)(f.A, {
                            className: o()("ChallengeCardField-value"),
                            children: a
                        })]
                    })
                },
                we = function(e) {
                    var t = e.challenge,
                        a = e.enableLabel,
                        i = void 0 !== a && a,
                        l = (0, C.B)().t,
                        c = t.reward,
                        d = t.taskList,
                        u = void 0 === d ? [] : d,
                        x = t.id,
                        g = void 0 === x ? "" : x,
                        T = t.systemTag,
                        w = t.titleTranslation,
                        L = t.status,
                        _ = t.taskLabel,
                        E = i && _ && [fe.j.Onboarding, fe.j.Daily].includes(_),
                        D = (0, k.mR)().updateChallenge,
                        b = (0, j.EA)(t),
                        R = u.filter((function(e) {
                            return ["COMPLETED", "CLAIMED"].includes(e.status)
                        })),
                        M = (0, h.j)().isRtl,
                        P = {
                            elementID: A.M7.CHALLENGE,
                            extraInfo: {
                                id: g
                            }
                        },
                        I = (0, m.jE)(),
                        O = (0, j.RA)(t),
                        F = (0, v.HT)(P);
                    (0, v.QN)(P);
                    var B = (0, p.n)().isMobile,
                        U = !b && ["ONGOING", "COMPLETED"].includes(L),
                        S = (0, j.Fx)(l, t),
                        V = (0, k.dS)(g).ref,
                        G = function(e) {
                            var a = t.status;
                            return (0, s.jsxs)(s.Fragment, {
                                children: [U && (0, s.jsx)(ne.K, {
                                    className: e,
                                    duration: O - Date.now(),
                                    onCompleted: function() {
                                        "ONGOING" === a ? I.invalidateQueries({
                                            queryKey: k.ey.FetchTasks
                                        }) : "COMPLETED" === a && D((0, r.A)((0, n.A)({}, t), {
                                            reward: (0, r.A)((0, n.A)({}, c), {
                                                expireTime: Date.now() - 1e3
                                            })
                                        }))
                                    },
                                    simplified: B
                                }), b && (0, s.jsx)(f.A, {
                                    className: e,
                                    children: S.time
                                })]
                            })
                        },
                        H = function() {
                            return (0, s.jsx)(ge, {
                                taskList: u,
                                reward: c,
                                isPast: b,
                                systemTag: T,
                                titleTranslation: w
                            })
                        },
                        Z = function() {
                            return (0, s.jsx)(pe, {
                                className: "ChallengeCard-action ul-decoration-none",
                                challengeData: t,
                                isPast: b
                            })
                        };
                    return (0, s.jsxs)(f.A, {
                        ref: V,
                        onClick: F,
                        className: o()("ChallengeCard", {
                            "ChallengeCard--disabled": b,
                            "ChallengeCard--rtl": M,
                            "ChallengeCard--withLabel": E
                        }),
                        children: [E && (0, s.jsx)(N, {
                            className: "ChallengeCard-taskLabel",
                            challenge: t
                        }), !B && (0, s.jsxs)(f.A, {
                            className: "ChallengeCard-timeStatus",
                            children: [(0, s.jsx)(f.A, {
                                as: "span",
                                className: "ChallengeCard-timeStatus-title bn-span",
                                children: S.title
                            }), (0, s.jsx)(f.A, {
                                as: "span",
                                className: "bn-span",
                                children: G()
                            })]
                        }), (0, s.jsxs)(f.A, {
                            className: "ChallengeCard-main",
                            children: [(0, s.jsxs)(f.A, {
                                className: "ChallengeCard-infor",
                                children: [(0, s.jsx)(re, {
                                    as: "h4",
                                    className: "ChallengeCard-infor-title",
                                    children: l("ChallengeName", "Complete {{numberOfTasks}} tasks", {
                                        numberOfTasks: u.length
                                    })
                                }), (0, s.jsxs)(f.A, {
                                    className: "ChallengeCard-infor-content",
                                    children: [B && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsxs)(Te, {
                                            label: l("reward", "Reward"),
                                            children: [(0, s.jsx)(f.A, {
                                                className: "ChallengeCard-rewardIcon ul-svg-container",
                                                children: (0, s.jsx)(se.A, {
                                                    type: c.rewardType
                                                })
                                            }), (0, s.jsxs)(re, {
                                                children: [null === c || void 0 === c ? void 0 : c.value, " ", null === c || void 0 === c ? void 0 : c.unit, " ", (0, le.R5)(c, l)]
                                            })]
                                        }), (0, s.jsx)(Te, {
                                            label: S.title,
                                            children: G("TaskCard-info-field-value")
                                        })]
                                    }), !B && (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsxs)(f.A, {
                                            className: "ChallengeCard-rewards-wrap",
                                            children: [(0, s.jsxs)(f.A, {
                                                className: "ChallengeCard-rewards-amount-wrap",
                                                children: [(0, s.jsx)(f.A, {
                                                    className: "ChallengeCard-rewards-amount",
                                                    children: null === c || void 0 === c ? void 0 : c.value
                                                }), (0, s.jsx)(f.A, {
                                                    className: "ChallengeCard-rewards-currency",
                                                    children: null === c || void 0 === c ? void 0 : c.unit
                                                })]
                                            }), (null === c || void 0 === c ? void 0 : c.rewardType) === y.E.Voucher && (0, s.jsxs)(f.A, {
                                                className: o()("ChallengeCard-rewards-type"),
                                                children: [(0, s.jsx)(f.A, {
                                                    className: "ChallengeCard-rewards-type-icon ul-svg-container",
                                                    children: (0, s.jsx)(se.A, {
                                                        type: c.rewardType
                                                    })
                                                }), (0, le.R5)(c, l)]
                                            })]
                                        })
                                    })]
                                }), (0, s.jsx)(f.A, {
                                    className: "ChallengeCard-infor-progress",
                                    children: (0, s.jsx)(he, {
                                        value: R.length,
                                        total: u.length
                                    })
                                }), !B && Z()]
                            }), !B && H()]
                        }), B && H(), B && Z()]
                    })
                },
                ke = function(e) {
                    var t = e.challenges,
                        a = void 0 === t ? [] : t,
                        l = e.isPastList,
                        m = void 0 !== l && l,
                        h = e.emptySection,
                        f = e.className,
                        p = e.enableLabel;
                    (0, c.A)((function() {
                        a.map((function(e) {
                            (0, d.u)(A.WW.MODULE_VIEW, {
                                elementID: "rewardshub_challenges",
                                pageName: "/rewards-hub",
                                id: e.id
                            })
                        }))
                    }));
                    var v = (0, u.useMemo)((function() {
                        return a.sort((function(e, t) {
                            var a = (0, j.pF)(e) >= (0, j.pF)(t);
                            return m ? a ? -1 : 1 : a ? 1 : -1
                        })) || []
                    }), [a, m]);
                    return (0, s.jsxs)(i.Ay, {
                        className: o()("ChallengeList", f),
                        children: [v.length > 0 && (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(i.Ay, {
                                className: "ChallengeList-section",
                                children: (0, s.jsx)(i.Ay, {
                                    className: "ChallengeList-section-content",
                                    children: v.map((function(e) {
                                        var t = e.rewardMethodType;
                                        return "ONE_REWARD_PER_TASK" === t ? function(e) {
                                            return e.taskList.map((function(t) {
                                                return (0, r.A)((0, n.A)({}, t), {
                                                    challenge: e
                                                })
                                            })).filter((function(e) {
                                                var t = (0, j.EA)(e);
                                                return m ? t : !t
                                            }))
                                        }(e).map((function(e) {
                                            return (0, s.jsx)(ue, {
                                                task: e,
                                                challenge: e.challenge,
                                                enableLabel: p
                                            }, e.id)
                                        })) : "ONE_REWARD_PER_CHALLENGE" === t ? (0, s.jsx)(we, {
                                            challenge: e,
                                            enableLabel: p
                                        }, e.id) : void 0
                                    }))
                                })
                            })
                        }), 0 === v.length && (0, s.jsx)(s.Fragment, {
                            children: h
                        })]
                    })
                }
        },
        "I6V/": (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("Y4uf");
            const l = function(e) {
                return s().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        HytR: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("Y4uf");
            const l = function(e) {
                return s().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        G9To: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("Y4uf");
            const l = function(e) {
                return s().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            }
        },
        X4b0: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("Y4uf");
            const l = function(e) {
                return s().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        Lp65: (e, t, a) => {
            a.d(t, {
                A: () => u
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("RGyw"),
                l = a("O94r"),
                o = a.n(l),
                c = a("fvKX"),
                d = s().forwardRef((function(e, t) {
                    var a = (0, c.r)().prefixCls,
                        r = o()("".concat(a, "-flex"), e.className);
                    return s().createElement(i.A, (0, n.__assign)({}, e, {
                        ref: t,
                        className: r
                    }))
                }));
            d.displayName = "Flex";
            const u = d
        },
        cZx9: (e, t, a) => {
            a.d(t, {
                A: () => C
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("O94r"),
                l = a.n(i),
                o = a("QFE7"),
                c = a("9xbI");
            const d = function(e) {
                var t = e.direction,
                    a = void 0 === t ? "left" : t,
                    i = e.children,
                    l = e.className,
                    o = e.onClose,
                    d = (e.visible, e.draggable, (0, n.__rest)(e, ["direction", "children", "className", "onClose", "visible", "draggable"])),
                    u = (0, r.useState)(!1),
                    m = u[0],
                    h = u[1],
                    f = (0, r.useState)({
                        x: 0,
                        y: 0
                    }),
                    p = f[0],
                    A = f[1],
                    v = (0, r.useState)(0),
                    C = v[0],
                    x = v[1],
                    g = (0, r.useRef)(null),
                    T = (0, r.useMemo)((function() {
                        var e = "top" === a || "bottom" === a;
                        return {
                            isVertical: e,
                            getTransform: function(t) {
                                var a = "".concat(t, "px");
                                return "translate3d(".concat(e ? "0, ".concat(a) : "".concat(a, ", 0"), ", 0)")
                            },
                            getOffset: function(t) {
                                var n = e ? t.y - p.y : t.x - p.x;
                                switch (a) {
                                    case "top":
                                    case "left":
                                        return Math.min(n, 0);
                                    default:
                                        return Math.max(n, 0)
                                }
                            }
                        }
                    }), [a, p]),
                    w = T.isVertical,
                    k = T.getTransform,
                    y = T.getOffset,
                    j = (0, r.useCallback)((function(e, t) {
                        return Math.abs(e) / t
                    }), []),
                    N = (0, r.useCallback)((function() {
                        return {
                            top: "translate3d(0, -100%, 0)",
                            right: "translate3d(100%, 0, 0)",
                            bottom: "translate3d(0, 100%, 0)",
                            left: "translate3d(-100%, 0, 0)"
                        }[a]
                    }), [a]),
                    L = (0, r.useCallback)((function(e) {
                        if (!m) {
                            var t = e.touches[0];
                            h(!0), A({
                                x: t.pageX,
                                y: t.pageY
                            }), x(e.timeStamp), g.current && (g.current.style.transition = "none")
                        }
                    }), [m]),
                    _ = (0, r.useCallback)((function(e) {
                        if (m && g.current) {
                            var t = e.touches[0],
                                a = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                n = y(a);
                            g.current.style.transform = k(n)
                        }
                    }), [m, y, k]),
                    E = (0, r.useCallback)((function(e) {
                        if (m && g.current) {
                            var t = e.changedTouches[0],
                                a = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                n = g.current.getBoundingClientRect(),
                                r = e.timeStamp - C;
                            g.current.style.transition = "";
                            var s = Math.abs(y(a)),
                                i = j(s, r);
                            s > (w ? n.height / 2 : n.width / 2) || i > 1.5 ? (g.current.style.transform = N(), null === o || void 0 === o || o()) : g.current.style.transform = "", h(!1)
                        }
                    }), [m, C, y, j, w, N, o]);
                return s().createElement(c.A, (0, n.__assign)({
                    ref: g,
                    className: l,
                    onTouchStart: L,
                    onTouchMove: _,
                    onTouchEnd: E
                }, d), i)
            };
            var u = a("mk7A"),
                m = a("eeEA"),
                h = a("fvKX"),
                f = function(e) {
                    var t, a = e.direction,
                        r = e.className,
                        i = (0, n.__rest)(e, ["direction", "className"]),
                        o = (0, h.r)().prefixCls,
                        c = "".concat(o, "-drawer-handle"),
                        d = "".concat(c, "-icon"),
                        u = l()(c, ((t = {})["data-dir-".concat(a)] = !!a, t), r);
                    return s().createElement(m.Ay, (0, n.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, i, {
                        className: u
                    }), s().createElement(m.Ay, {
                        className: d,
                        "aria-hidden": "true"
                    }))
                },
                p = function(e) {
                    var t = e.direction,
                        a = void 0 === t ? "left" : t,
                        r = e.children,
                        i = e.onClose,
                        l = e.maskClz,
                        o = e.wrapClz,
                        c = (0, n.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]);
                    return s().createElement(u.A, (0, n.__assign)({}, c, {
                        onClose: i,
                        className: l
                    }), s().createElement(d, {
                        direction: a,
                        className: o,
                        onClose: i
                    }, s().createElement(f, {
                        direction: a
                    }), r))
                };
            p.displayName = "Drawer";
            const A = p;
            var v = function(e) {
                var t, a = e.direction,
                    i = void 0 === a ? "left" : a,
                    c = e.className,
                    d = e.children,
                    f = e.size,
                    p = void 0 === f ? "auto" : f,
                    v = e.once,
                    C = e.onVisibleChange,
                    x = e.draggable,
                    g = e.onClose,
                    T = (0, n.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    w = (0, h.r)().prefixCls,
                    k = "".concat(w, "-drawer"),
                    y = l()("".concat(k, "-wrap"), ((t = {})["data-size-".concat(p)] = "auto" !== p, t["data-dir-".concat(i)] = !!i, t["data-draggable"] = !!x, t)),
                    j = l()(k, c),
                    N = (0, o.d)({
                        fn: C,
                        time: 50
                    }).debounceFn,
                    L = (0, r.useCallback)((function() {
                        null === g || void 0 === g || g(), N(!1)
                    }), [g, N]),
                    _ = (0, r.useCallback)((function() {
                        v && L()
                    }), [v, L]),
                    E = {
                        "aria-modal": !0,
                        role: "dialog",
                        "aria-label": e.title || "drawer"
                    };
                return x ? s().createElement(A, (0, n.__assign)({}, E, {
                    onClose: L,
                    maskClz: j,
                    wrapClz: y
                }, e)) : s().createElement(u.A, (0, n.__assign)({}, T, {
                    onClose: L,
                    className: j
                }), s().createElement(m.Ay, (0, n.__assign)({}, E, {
                    className: y,
                    children: d,
                    onClick: _
                })))
            };
            v.displayName = "Drawer";
            const C = v
        },
        k5JY: (e, t, a) => {
            a.d(t, {
                Ay: () => A
            });
            var n = a("wIZF"),
                r = a("DTvD"),
                s = a.n(r),
                i = a("O94r"),
                l = a.n(i),
                o = a("eeEA"),
                c = a("mk7A"),
                d = a("fvKX"),
                u = a("I6V/"),
                m = a("X4b0"),
                h = a("hyZw"),
                f = a("cZx9"),
                p = function(e) {
                    var t, a = e.children,
                        r = e.className,
                        i = e.responsive,
                        u = e.direction,
                        m = void 0 === u ? "bottom" : u,
                        h = e.modalSize,
                        p = void 0 === h ? "small" : h,
                        A = (0, n.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        v = (0, d.r)(),
                        C = v.prefixCls,
                        x = v.isMobile,
                        g = "".concat(C, "-modal"),
                        T = l()(g, r),
                        w = l()("".concat(g, "-wrap"), ((t = {})["data-size-".concat(p)] = !!p, t));
                    if (i && x) return s().createElement(f.A, (0, n.__assign)({}, A, {
                        direction: m,
                        className: r,
                        children: a
                    }));
                    var k = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": A["aria-label"] || "modal"
                    };
                    return s().createElement(c.A, (0, n.__assign)({}, A, {
                        className: T
                    }), s().createElement(o.Ay, (0, n.__assign)({}, k, {
                        className: w,
                        children: a
                    })))
                };
            p.Header = function(e) {
                var t, a, r = e.showPre,
                    i = e.prev,
                    c = e.onPreClick,
                    f = void 0 === c ? h.es : c,
                    p = e.showNext,
                    A = e.next,
                    v = e.onNextClick,
                    C = void 0 === v ? h.es : v,
                    x = (0, n.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    g = (0, d.r)().prefixCls,
                    T = "".concat(g, "-modal-header"),
                    w = l()(T, ((t = {})["".concat(T, "-pre")] = !!r, t["".concat(T, "-pre-hidden")] = "hidden" === r, t), e.className);
                return r && void 0 === i && (i = s().createElement(u.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), s().createElement(o.Ay, (0, n.__assign)({}, x, {
                    className: w
                }), r ? s().createElement(o.Ay, {
                    className: l()("".concat(T, "-prev")),
                    onClick: f,
                    children: i,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, s().createElement(o.Ay, {
                    className: "".concat(T, "-main"),
                    children: e.children
                }), p ? s().createElement(o.Ay, {
                    className: l()("".concat(T, "-next"), (a = {}, a["".concat(T, "-next-hidden")] = "hidden" === p, a)),
                    onClick: C,
                    children: A || s().createElement(m.A, {
                        name: "Close1C",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": A ? "Next" : "Close"
                }) : null)
            }, p.Content = function(e) {
                var t = (0, d.r)().prefixCls,
                    a = "".concat(t, "-modal-content"),
                    r = l()(a, e.className);
                return s().createElement(o.Ay, (0, n.__assign)({}, e, {
                    className: r
                }))
            }, p.Footer = function(e) {
                var t, a = e.layout,
                    r = (0, n.__rest)(e, ["layout"]),
                    i = (0, d.r)().prefixCls,
                    c = "".concat(i, "-modal-footer"),
                    u = l()(c, ((t = {})["".concat(c, "-").concat(a)] = !!a, t), r.className);
                return s().createElement(o.Ay, (0, n.__assign)({}, r, {
                    className: u
                }))
            };
            const A = p
        },
        hob6: (e, t, a) => {
            a.d(t, {
                AU: () => r,
                Bd: () => s,
                on: () => n
            });

            function n(e) {
                for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
                e && e.addEventListener && e.addEventListener.apply(e, t)
            }

            function r(e) {
                for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
                e && e.removeEventListener && e.removeEventListener.apply(e, t)
            }
            var s = !0
        },
        Q755: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var n = a("DTvD");
            const r = function(e) {
                (0, n.useEffect)(e, [])
            }
        }
    }
]);
//# debugId=3023f071-79e0-5fd5-9413-29df0cd4ca94