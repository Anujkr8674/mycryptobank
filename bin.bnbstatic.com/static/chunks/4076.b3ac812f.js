"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4076], {
        uV5D: (e, n, t) => {
            t.d(n, {
                s: () => N
            });
            var r = t("S+0I"),
                i = t("hrAD"),
                s = t("qoEP"),
                o = t("jbFV"),
                a = t.n(o),
                d = t("mXdx"),
                c = t("DTvD"),
                x = t("GBQx"),
                l = t("2IQ4"),
                u = t("GIr8"),
                g = t("Vhyo"),
                m = t("zX7I"),
                h = t("bTgu"),
                p = t("cSeX"),
                f = t("oY5g"),
                w = t("NnZx"),
                b = t("Qhol"),
                j = t("6A/j"),
                y = t("9mKD"),
                I = t("Mnf7"),
                v = t("MDXB"),
                A = t("bQ69"),
                S = "trd-cm2-pro-quiz4-question",
                q = "trd-cm2-pro-quiz4-answer",
                N = function(e) {
                    var n = e.onClose,
                        t = e.onSubmit,
                        o = (0, c.useState)(!1),
                        N = o[0],
                        k = o[1],
                        z = (0, b.DPo)().isLight,
                        C = (0, b.ok2)().getI18n,
                        K = (0, x.mN)({}),
                        D = Object.keys(K.formState.dirtyFields).length,
                        _ = (0, y.I)((function(e) {
                            return e.setIsSigned
                        })),
                        T = D >= 14,
                        Q = function() {},
                        V = function() {
                            k(!1)
                        },
                        R = (0, c.useState)(!1),
                        B = R[0],
                        M = R[1],
                        O = (0, y.I)((function(e) {
                            return e.term_pass
                        })),
                        X = function() {
                            var e = (0, r._)(a().mark((function e() {
                                var n, t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (null === K || void 0 === K ? void 0 : K.handleSubmit(Q))();
                                        case 2:
                                            (n = !Object.keys(K.formState.errors).length) || null === (t = document.getElementById(Object.keys(K.formState.errors)[0])) || void 0 === t || t.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                                inline: "nearest"
                                            }), n && (O ? H() : k(!0));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        H = function() {
                            Promise.all([(0, j.SN)(), (0, j.GV)()]).then((function() {
                                O || (0, j.PC)(), t(), n(), _(!0)
                            }))
                        };
                    return (0, d.jsxs)(l.A, {
                        sx: {
                            paddingX: "24px"
                        },
                        children: [(0, d.jsx)(l.A, {
                            sx: {
                                fontSize: "20px",
                                fontWeight: "600",
                                marginY: "20px",
                                lineHeight: "28px",
                                color: "t.primary"
                            },
                            children: C("trd-cross-margin-pro-quiz")
                        }), (0, d.jsxs)(x.Op, (0, s._)((0, i._)({}, K), {
                            children: [(0, d.jsx)(w.v, {
                                index: 0,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 1,
                                getI18n: C
                            }, 0), (0, d.jsx)(w.v, {
                                index: 1,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 0,
                                getI18n: C
                            }, 1), (0, d.jsx)(w.v, {
                                index: 2,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 2,
                                rightAnswer: 0,
                                getI18n: C
                            }, 2), (0, d.jsx)(w.v, {
                                index: 3,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 3), (0, d.jsx)(w.v, {
                                index: 4,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 4), (0, d.jsx)(w.v, {
                                index: 5,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 1,
                                getI18n: C
                            }, 5), (0, d.jsx)(w.v, {
                                index: 6,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 2,
                                getI18n: C
                            }, 6), (0, d.jsx)(w.v, {
                                index: 7,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 7), (0, d.jsx)(w.v, {
                                index: 8,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 2,
                                getI18n: C
                            }, 8), (0, d.jsx)(w.v, {
                                index: 9,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 2,
                                rightAnswer: 0,
                                getI18n: C
                            }, 9), (0, d.jsx)(w.v, {
                                index: 10,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 10), (0, d.jsx)(w.v, {
                                index: 11,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 2,
                                getI18n: C
                            }, 11), (0, d.jsx)(w.v, {
                                index: 12,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 12), (0, d.jsx)(w.v, {
                                index: 13,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: C
                            }, 13), (0, d.jsxs)(u.A, {
                                sx: {
                                    paddingBottom: "70px",
                                    gap: "11px",
                                    justifyContent: "space-between",
                                    fontSize: "12px"
                                },
                                children: [(0, d.jsx)(g.A, {
                                    sx: {
                                        color: "t.third",
                                        maxWidth: "200px",
                                        fontSize: "12px"
                                    },
                                    children: C("trd-cross-margin-pro-quiz-mark")
                                }), (0, d.jsx)(m.A, {
                                    disabled: !T,
                                    sx: {
                                        flex: 1,
                                        height: "40px",
                                        maxWidth: "128px"
                                    },
                                    onClick: X,
                                    children: C("trd-cross-margin-pro-quiz-next")
                                })]
                            })]
                        })), (0, d.jsxs)(h.A, {
                            visible: N,
                            onMaskClick: V,
                            sx: {
                                width: "298px",
                                height: "260px",
                                bg: "popupBg",
                                p: "md",
                                borderRadius: "8px",
                                boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 2px rgba(94, 102, 115, 0.9)"
                            },
                            children: [(0, d.jsxs)(u.A, {
                                sx: {
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [z ? (0, d.jsx)(I.A, {
                                    size: 45
                                }) : (0, d.jsx)(v.A, {
                                    size: 45
                                }), (0, d.jsx)(g.A, {
                                    sx: {
                                        color: "t.primary",
                                        fontSize: "16px",
                                        mt: "md"
                                    },
                                    children: C("dialog-margin-service-terms", {
                                        defaultValue: "Service Terms"
                                    })
                                }), (0, d.jsxs)(p.A, {
                                    sx: {
                                        mt: 2,
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, d.jsx)(f.A, {
                                        sx: {
                                            mt: 1
                                        },
                                        checked: B,
                                        onChange: function(e) {
                                            M(e.currentTarget.checked)
                                        },
                                        defaultChecked: !1
                                    }), (0, d.jsx)(g.A, {
                                        sx: {
                                            color: "t.secondary",
                                            a: {
                                                textDecoration: "none",
                                                color: "primary"
                                            }
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: C("dialog-margin-terms-prompt-new", {
                                                defaultValue: 'I have read and agree to <a target="_blank" href="{{url}}">Margin service terms</a>',
                                                url: A.TP.MARGIN_TERMS_URL
                                            }) || ""
                                        }
                                    })]
                                })]
                            }), (0, d.jsxs)(u.A, {
                                width: "100%",
                                mt: "md",
                                children: [(0, d.jsx)(m.A, {
                                    flex: "1 0 0",
                                    variant: "outline",
                                    colorStyle: "second",
                                    sz: "l",
                                    mr: "xs",
                                    onClick: V,
                                    children: C("trd-dialog-cancel", {
                                        defaultValue: "Cancel"
                                    })
                                }), (0, d.jsx)(m.A, {
                                    flex: "1 0 0",
                                    sz: "l",
                                    disabled: !B,
                                    onClick: H,
                                    children: C("trd-dialog-confirm", {
                                        defaultValue: "Confirm"
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        qBqx: (e, n, t) => {
            t.d(n, {
                M: () => k
            });
            var r = t("S+0I"),
                i = t("hrAD"),
                s = t("qoEP"),
                o = t("jbFV"),
                a = t.n(o),
                d = t("mXdx"),
                c = t("DTvD"),
                x = t("GBQx"),
                l = t("2IQ4"),
                u = t("GIr8"),
                g = t("Vhyo"),
                m = t("zX7I"),
                h = t("bTgu"),
                p = t("cSeX"),
                f = t("oY5g"),
                w = t("NnZx"),
                b = t("HitQ"),
                j = t("Qhol"),
                y = t("6A/j"),
                I = t("Mnf7"),
                v = t("MDXB"),
                A = t("bQ69"),
                S = t("9mKD"),
                q = "trd-cm2-quiz4-question",
                N = "trd-cm2-quiz4-answer",
                k = function(e) {
                    var n = e.onClose,
                        t = e.onSubmit,
                        o = (0, j.ok2)().getI18n,
                        k = (0, x.mN)({}),
                        z = (0, j.DPo)().isLight,
                        C = (0, c.useState)(!1),
                        K = C[0],
                        D = C[1],
                        _ = function() {
                            D(!1)
                        },
                        T = Object.keys(k.formState.dirtyFields).length >= 14,
                        Q = function() {},
                        V = (0, c.useState)(!1),
                        R = V[0],
                        B = V[1],
                        M = (0, S.I)((function(e) {
                            return e.term_pass
                        })),
                        O = function() {
                            var e = (0, r._)(a().mark((function e() {
                                var n, t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (null === k || void 0 === k ? void 0 : k.handleSubmit(Q))();
                                        case 2:
                                            (n = !Object.keys(k.formState.errors).length) || null === (t = document.getElementById(Object.keys(k.formState.errors)[0])) || void 0 === t || t.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                                inline: "nearest"
                                            }), n && (M ? X() : D(!0));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        X = function() {
                            (0, y.GV)().then((function(e) {
                                e.success && (t(), n())
                            }))
                        };
                    return (0, d.jsxs)(l.A, {
                        sx: {
                            paddingX: "24px"
                        },
                        children: [(0, d.jsx)(l.A, {
                            sx: {
                                fontSize: "20px",
                                fontWeight: "600",
                                marginY: "20px",
                                lineHeight: "28px",
                                color: "t.primary"
                            },
                            children: o("trd-cross-margin-pro-quiz")
                        }), (0, d.jsxs)(x.Op, (0, s._)((0, i._)({}, k), {
                            children: [(0, d.jsx)(w.v, {
                                index: 0,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 3,
                                rightAnswer: 0,
                                getI18n: o
                            }, 0), (0, d.jsx)(b.X, {
                                index: 1,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: [1, 2, 3, 4],
                                getI18n: o
                            }, 1), (0, d.jsx)(w.v, {
                                index: 2,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 3,
                                rightAnswer: 1,
                                getI18n: o
                            }, 2), (0, d.jsx)(w.v, {
                                index: 3,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 3,
                                rightAnswer: 2,
                                getI18n: o
                            }, 3), (0, d.jsx)(w.v, {
                                index: 4,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 4), (0, d.jsx)(w.v, {
                                index: 5,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 3,
                                rightAnswer: 2,
                                getI18n: o
                            }, 5), (0, d.jsx)(w.v, {
                                index: 6,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 6), (0, d.jsx)(w.v, {
                                index: 7,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 3,
                                rightAnswer: 2,
                                getI18n: o
                            }, 7), (0, d.jsx)(w.v, {
                                index: 8,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 2,
                                rightAnswer: 0,
                                getI18n: o
                            }, 8), (0, d.jsx)(w.v, {
                                index: 9,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 9), (0, d.jsx)(w.v, {
                                index: 10,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 2,
                                getI18n: o
                            }, 10), (0, d.jsx)(w.v, {
                                index: 11,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 11), (0, d.jsx)(w.v, {
                                index: 12,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 12), (0, d.jsx)(w.v, {
                                index: 13,
                                questionStartNo: 0,
                                questionsIndex: q,
                                answerKey: N,
                                answerNumber: 4,
                                rightAnswer: 3,
                                getI18n: o
                            }, 13), (0, d.jsxs)(u.A, {
                                sx: {
                                    paddingBottom: "70px",
                                    gap: "11px",
                                    justifyContent: "space-between",
                                    fontSize: "12px"
                                },
                                children: [(0, d.jsx)(g.A, {
                                    sx: {
                                        color: "t.third",
                                        maxWidth: "200px",
                                        fontSize: "12px"
                                    },
                                    children: o("trd-cross-margin-pro-quiz-mark")
                                }), (0, d.jsx)(m.A, {
                                    disabled: !T,
                                    sx: {
                                        flex: 1,
                                        height: "40px",
                                        maxWidth: "128px"
                                    },
                                    onClick: O,
                                    children: o("trd-cross-margin-pro-quiz-next")
                                })]
                            })]
                        })), (0, d.jsxs)(h.A, {
                            visible: K,
                            onMaskClick: _,
                            sx: {
                                width: "298px",
                                height: "260px",
                                bg: "popupBg",
                                p: "md",
                                borderRadius: "8px",
                                boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 2px rgba(94, 102, 115, 0.9)"
                            },
                            children: [(0, d.jsxs)(u.A, {
                                sx: {
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [z ? (0, d.jsx)(I.A, {
                                    size: 45
                                }) : (0, d.jsx)(v.A, {
                                    size: 45
                                }), (0, d.jsx)(g.A, {
                                    sx: {
                                        color: "t.primary",
                                        fontSize: "16px",
                                        mt: "md"
                                    },
                                    children: o("dialog-margin-service-terms", {
                                        defaultValue: "Service Terms"
                                    })
                                }), (0, d.jsxs)(p.A, {
                                    sx: {
                                        mt: 2,
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, d.jsx)(f.A, {
                                        sx: {
                                            mt: 1
                                        },
                                        checked: R,
                                        onChange: function(e) {
                                            B(e.currentTarget.checked)
                                        },
                                        defaultChecked: !1
                                    }), (0, d.jsx)(g.A, {
                                        sx: {
                                            color: "t.secondary",
                                            a: {
                                                textDecoration: "none",
                                                color: "primary"
                                            }
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: o("dialog-margin-terms-prompt-new", {
                                                defaultValue: 'I have read and agree to <a target="_blank" href="{{url}}">Margin service terms</a>',
                                                url: A.TP.MARGIN_TERMS_URL
                                            }) || ""
                                        }
                                    })]
                                })]
                            }), (0, d.jsxs)(u.A, {
                                width: "100%",
                                mt: "md",
                                children: [(0, d.jsx)(m.A, {
                                    flex: "1 0 0",
                                    variant: "outline",
                                    colorStyle: "second",
                                    sz: "l",
                                    mr: "xs",
                                    onClick: _,
                                    children: o("trd-dialog-cancel", {
                                        defaultValue: "Cancel"
                                    })
                                }), (0, d.jsx)(m.A, {
                                    flex: "1 0 0",
                                    sz: "l",
                                    disabled: !R,
                                    onClick: X,
                                    children: o("trd-dialog-confirm", {
                                        defaultValue: "Confirm"
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        b9t6: (e, n, t) => {
            t.d(n, {
                A: () => z
            });
            var r = t("S+0I"),
                i = t("hrAD"),
                s = t("qoEP"),
                o = t("jbFV"),
                a = t.n(o),
                d = t("mXdx"),
                c = t("DTvD"),
                x = t("GBQx"),
                l = t("2IQ4"),
                u = t("Vhyo"),
                g = t("NnZx"),
                m = t("HitQ"),
                h = t("Qhol"),
                p = t("jwne"),
                f = t("H8jA"),
                w = t("Gz4J"),
                b = t("tgKj"),
                j = t("6A/j"),
                y = t("hcwF"),
                I = t("xj6P"),
                v = t("R6t6"),
                A = t("9mKD"),
                S = "trd-cm2-db-quiz-question",
                q = "trd-cm2-db-quiz-answer",
                N = function(e) {
                    var n = e.showDialog,
                        t = e.setShowDialog,
                        r = e.closeQuiz,
                        i = e.reset,
                        s = (0, h.ok2)().getI18n;
                    return (0, d.jsx)(p.Ay, {
                        enablePortal: !0,
                        visible: n,
                        onClose: function() {
                            return t(!1)
                        },
                        children: (0, d.jsx)(f.A, {
                            icon: (0, d.jsx)(y.A, {}),
                            title: s("trd-cm2-db-failed-title"),
                            description: s("trd-cm2-db-failed-description"),
                            actions: (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(w.A, {
                                    style: {
                                        width: "100%"
                                    },
                                    textVariant: "yellow",
                                    sz: "large",
                                    onClick: function() {
                                        t(!1), i()
                                    },
                                    children: s("trd-try-again")
                                }), (0, d.jsx)(w.A, {
                                    style: {
                                        width: "100%",
                                        marginTop: "8px"
                                    },
                                    sz: "large",
                                    variant: "text",
                                    onClick: r,
                                    children: s("trd-next-time")
                                })]
                            })
                        })
                    })
                },
                k = function(e) {
                    var n = e.showDialog,
                        t = e.setShowDialog,
                        r = e.closeQuiz,
                        i = (0, h.ok2)().getI18n;
                    return (0, d.jsx)(p.Ay, {
                        enablePortal: !0,
                        visible: n,
                        onClose: function() {
                            return t(!1)
                        },
                        children: (0, d.jsx)(f.A, {
                            icon: (0, d.jsx)(I.A, {}),
                            title: i("trd-cm2-db-success-title"),
                            description: i("trd-cm2-db-success-description"),
                            actions: (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)(w.A, {
                                    style: {
                                        width: "100%"
                                    },
                                    textVariant: "yellow",
                                    sz: "large",
                                    onClick: function() {
                                        t(!1), r()
                                    },
                                    children: i("Ok")
                                })
                            })
                        })
                    })
                },
                z = function(e) {
                    var n = e.onClose,
                        t = e.onSubmit,
                        o = (e.isSigned, (0, A.I)((function(e) {
                            return e.term_pass
                        }))),
                        p = (0, A.I)((function(e) {
                            return e.setTermPass
                        })),
                        f = (0, c.useState)(!1),
                        y = f[0],
                        I = f[1],
                        z = (0, c.useState)(!1),
                        C = z[0],
                        K = z[1],
                        D = (0, h.ok2)().getI18n,
                        _ = (0, x.mN)({}),
                        T = _.reset,
                        Q = (0, h.DPo)().isLight,
                        V = (0, c.useState)(1),
                        R = V[0],
                        B = V[1],
                        M = Object.keys(_.formState.dirtyFields).length >= 3,
                        O = (0, c.useState)(!1),
                        X = (O[0], O[1], function() {
                            var e = (0, r._)(a().mark((function e() {
                                var n;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = {
                                                answer: {
                                                    quizId: R,
                                                    answers: Object.values(_.getValues()).map((function(e) {
                                                        return Array.isArray(e) ? e.join(",") : Number(e) + 1
                                                    }))
                                                }
                                            }, o ? (0, j.fj)(n).then((function(e) {
                                                (e.data || {}).pass ? (I(!0), t()) : K(!0)
                                            })) : (0, v.y)({
                                                isLight: Q,
                                                getI18n: D,
                                                submitTerm: function() {
                                                    p(!0)
                                                },
                                                dontSign: !0,
                                                onSuccess: function() {
                                                    (0, j.fj)(n).then((function(e) {
                                                        (e.data || {}).pass ? (I(!0), t()) : K(!0)
                                                    }))
                                                }
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    return (0, c.useEffect)((function() {
                        (0, j.IL)({
                            quizType: "MARGIN_TRADE_PRO"
                        }).then((function(e) {
                            var n = (e.data || {}).quizId;
                            B(void 0 === n ? 1 : n)
                        }))
                    }), []), (0, d.jsxs)(l.A, {
                        sx: {
                            paddingX: "24px"
                        },
                        children: [(0, d.jsx)(l.A, {
                            sx: {
                                fontSize: "20px",
                                fontWeight: "600",
                                marginY: "20px",
                                lineHeight: "28px",
                                color: "t.primary"
                            },
                            children: D("trd-cross-margin-pro-quiz")
                        }), (0, d.jsxs)(x.Op, (0, s._)((0, i._)({}, _), {
                            children: [(0, d.jsx)(g.v, {
                                index: 0,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 0,
                                getI18n: D
                            }, 0), (0, d.jsx)(m.X, {
                                index: 1,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 4,
                                rightAnswer: [1, 2, 3, 4],
                                getI18n: D
                            }, 1), (0, d.jsx)(g.v, {
                                index: 2,
                                questionStartNo: 0,
                                questionsIndex: S,
                                answerKey: q,
                                answerNumber: 3,
                                rightAnswer: 1,
                                getI18n: D
                            }, 2), (0, d.jsx)(b.A, {
                                className: "mb-[12px] text-[12px]",
                                children: (0, d.jsx)(u.A, {
                                    sx: {
                                        color: "t.third",
                                        maxWidth: "200px",
                                        fontSize: "12px"
                                    },
                                    children: D("trd-cm2-db-quiz-mark")
                                })
                            }), (0, d.jsx)(b.A, {
                                className: "mb-[24px]",
                                children: (0, d.jsx)(w.A, {
                                    disabled: !M,
                                    style: {
                                        width: "100%"
                                    },
                                    textVariant: "yellow",
                                    sz: "large",
                                    onClick: X,
                                    children: D("trd-cross-margin-pro-quiz-next")
                                })
                            })]
                        })), (0, d.jsx)(k, {
                            showDialog: y,
                            setShowDialog: I,
                            closeQuiz: function() {
                                n()
                            }
                        }), (0, d.jsx)(N, {
                            showDialog: C,
                            setShowDialog: K,
                            closeQuiz: function() {
                                n()
                            },
                            reset: T
                        })]
                    })
                }
        },
        HitQ: (e, n, t) => {
            t.d(n, {
                X: () => x
            });
            var r = t("mXdx"),
                i = t("cSeX"),
                s = t("oY5g"),
                o = t("Vhyo"),
                a = t("2IQ4"),
                d = t("GBQx"),
                c = function(e) {
                    var n = e.className,
                        t = e.text,
                        a = e.onChange,
                        d = e.checked;
                    return (0, r.jsxs)(i.A, {
                        mb: "8px",
                        className: n,
                        children: [(0, r.jsx)(s.A, {
                            defaultChecked: !1,
                            onChange: a,
                            checked: d
                        }), (0, r.jsx)(o.A, {
                            sx: {
                                lineHeight: "20px"
                            },
                            variant: "formLabel",
                            children: t
                        })]
                    })
                },
                x = function(e) {
                    var n = e.index,
                        t = e.questionStartNo,
                        i = void 0 === t ? 0 : t,
                        s = e.questionsIndex,
                        x = e.answerKey,
                        l = e.answerNumber,
                        u = e.rightAnswer,
                        g = e.getI18n,
                        m = e.titleNumber,
                        h = i + n + 1,
                        p = Array.from({
                            length: l
                        }, (function(e, n) {
                            return n + 1
                        })).map((function(e) {
                            return (0, r.jsx)("div", {
                                className: "option-item",
                                children: g("".concat(x, "-").concat(h, "-").concat(e))
                            })
                        })),
                        f = (0, d.as)({
                            name: "".concat(s, "-").concat(h),
                            rules: {
                                required: !0,
                                validate: function(e) {
                                    return JSON.stringify(u) === JSON.stringify(e)
                                }
                            }
                        }),
                        w = f.field,
                        b = w.value,
                        j = w.onChange,
                        y = w.ref,
                        I = f.formState.isSubmitted,
                        v = f.fieldState.error;
                    return (0, r.jsxs)(a.A, {
                        className: "item",
                        ref: y,
                        id: "".concat(s, "-").concat(h),
                        sx: {
                            marginY: "24px",
                            color: "t.primary",
                            "question-content": {
                                padding: "16px"
                            },
                            ".item": {
                                paddingBottom: "16px",
                                color: "t.primary"
                            },
                            ".question": {
                                paddingBottom: "8px",
                                lineHeight: "20px",
                                fontSize: "16px",
                                fontWeight: "500",
                                ".inline-text": {
                                    display: "inline"
                                },
                                p: {
                                    display: "inline",
                                    color: "t.third"
                                }
                            },
                            ".answer": {
                                padding: "8px",
                                lineHeight: "20px",
                                border: "1px solid",
                                borderColor: "line",
                                borderRadius: "4px",
                                ".option-item": {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                ".icon": {
                                    display: "none",
                                    width: "20px",
                                    height: "20px"
                                },
                                "&.right": {
                                    color: "buy",
                                    background: "rgba(14, 203, 129, 0.1)",
                                    borderRadius: "4px",
                                    border: "none",
                                    ".right-icon": {
                                        display: "initial"
                                    }
                                },
                                "&.error": {
                                    color: "sell",
                                    background: "rgba(246, 70, 93, 0.1)",
                                    borderRadius: "4px",
                                    border: "none",
                                    ".error-icon": {
                                        display: "initial"
                                    }
                                },
                                "&.active": {
                                    background: "rgba(240, 185, 11, 0.1)",
                                    borderRadius: "4px"
                                }
                            }
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "question",
                            children: ["".concat(m || Number(n + 1), ". "), (0, r.jsx)(o.A, {
                                className: "inline-text",
                                dangerouslySetInnerHTML: {
                                    __html: g("".concat(s, "-").concat(h)) || ""
                                }
                            })]
                        }), (0, r.jsx)(a.A, {
                            children: p.map((function(e, n) {
                                var t = "";
                                return I && !v ? t = u.indexOf(n + 1) >= 0 ? "right" : "" : I && v && (t = u.indexOf(n + 1) >= 0 ? "right" : "error"), (0, r.jsx)(c, {
                                    className: "answer ".concat(t),
                                    onChange: function() {
                                        return function(e) {
                                            if (b && b.indexOf(e) >= 0) {
                                                var n = b.filter((function(n) {
                                                    return n !== e
                                                })).sort().filter((function(e) {
                                                    return !!e
                                                }));
                                                j(Array.from(new Set(n)))
                                            } else {
                                                var t = [e].concat(b).sort().filter((function(e) {
                                                    return !!e
                                                }));
                                                j(Array.from(new Set(t)))
                                            }
                                        }(n + 1)
                                    },
                                    text: e,
                                    checked: (b || []).includes(n + 1)
                                }, n)
                            }))
                        })]
                    })
                }
        },
        NnZx: (e, n, t) => {
            t.d(n, {
                v: () => c
            });
            var r = t("mXdx"),
                i = t("2IQ4"),
                s = t("Vhyo"),
                o = t("Jsxa"),
                a = t("tQzZ"),
                d = t("GBQx"),
                c = function(e) {
                    var n = e.index,
                        t = e.questionStartNo,
                        c = void 0 === t ? 0 : t,
                        x = e.questionsIndex,
                        l = e.answerKey,
                        u = e.answerNumber,
                        g = e.rightAnswer,
                        m = e.getI18n,
                        h = e.titleNumber,
                        p = e.isUk,
                        f = c + n + 1,
                        w = Array.from({
                            length: u
                        }, (function(e, n) {
                            return n + 1
                        })).map((function(e) {
                            return (0, r.jsx)("div", {
                                className: "option-item",
                                children: m("".concat(l, "-").concat(f, "-").concat(e))
                            })
                        })),
                        b = (0, d.as)({
                            name: p ? "".concat(x).concat(f) : "".concat(x, "-").concat(f),
                            rules: {
                                required: !0,
                                validate: function(e) {
                                    return g === e
                                }
                            }
                        }),
                        j = b.field,
                        y = j.value,
                        I = j.onChange,
                        v = j.ref,
                        A = b.formState.isSubmitted;
                    b.fieldState.error;
                    return (0, r.jsxs)(i.A, {
                        className: "item",
                        ref: v,
                        id: p ? "".concat(x).concat(f) : "".concat(x, "-").concat(f),
                        sx: {
                            marginY: "24px",
                            color: "t.primary",
                            "question-content": {
                                padding: "16px"
                            },
                            ".item": {
                                paddingBottom: "16px",
                                color: "t.primary"
                            },
                            ".question": {
                                paddingBottom: "8px",
                                lineHeight: "20px",
                                fontSize: "16px",
                                fontWeight: "500",
                                ".inline-text": {
                                    display: "inline"
                                },
                                p: {
                                    display: "inline",
                                    color: "t.third"
                                }
                            },
                            ".answer": {
                                padding: "8px",
                                lineHeight: "20px",
                                mb: "8px",
                                border: "1px solid",
                                borderColor: "line",
                                borderRadius: "4px",
                                ".option-item": {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                ".icon": {
                                    display: "none",
                                    width: "20px",
                                    height: "20px"
                                },
                                "&.right": {
                                    color: "buy",
                                    background: "rgba(14, 203, 129, 0.1)",
                                    borderRadius: "4px",
                                    border: "none",
                                    svg: {
                                        color: "buy",
                                        stroke: "currentcolor"
                                    },
                                    ".right-icon": {
                                        display: "initial"
                                    }
                                },
                                "&.error": {
                                    color: "sell",
                                    background: "rgba(246, 70, 93, 0.1)",
                                    borderRadius: "4px",
                                    border: "none",
                                    svg: {
                                        color: "sell",
                                        stroke: "currentcolor"
                                    },
                                    ".error-icon": {
                                        display: "initial"
                                    }
                                },
                                "&.active": {
                                    background: "rgba(240, 185, 11, 0.1)",
                                    borderRadius: "4px"
                                }
                            }
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "question",
                            children: ["".concat(h || Number(n + 1), ". "), (0, r.jsx)(s.A, {
                                className: "inline-text",
                                dangerouslySetInnerHTML: {
                                    __html: m(p ? "".concat(x).concat(f) : "".concat(x, "-").concat(f)) || ""
                                }
                            })]
                        }), (0, r.jsx)(o.Q$, {
                            name: "",
                            sx: a.z,
                            value: y,
                            onChange: I,
                            children: w.map((function(e, n) {
                                var t = "";
                                return A && (t = g === n ? "right" : +y === n ? "error" : ""), (0, r.jsx)(o.Ay, {
                                    className: "answer ".concat(t),
                                    value: n,
                                    label: w[n]
                                }, n)
                            }))
                        })]
                    })
                }
        },
        tQzZ: (e, n, t) => {
            t.d(n, {
                z: () => r
            });
            var r = {
                display: "flex",
                flexDirection: "column",
                "& label": {
                    alignItems: "flex-start",
                    "& svg": {
                        width: "14px",
                        height: "14px",
                        marginTop: "3px"
                    },
                    "& div": {
                        width: "calc(100% - 22px)"
                    }
                },
                "& .radio-item": {
                    borderRadius: "3px",
                    border: "1px solid",
                    borderColor: "optionsTutorial.radioColor1",
                    "& svg": {
                        color: "optionsTutorial.radioColor1"
                    }
                },
                "& .selected-item": {
                    borderColor: "primary",
                    bg: "optionsTutorial.radioActivedBg1",
                    "& svg": {
                        color: "primary"
                    },
                    animation: "buttonSelected .25s cubic-bezier(.42,0,.58,.1)"
                }
            }
        }
    }
]);