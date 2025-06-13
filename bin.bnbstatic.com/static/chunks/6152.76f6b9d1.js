"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [6152], {
        MKCC: (e, r, t) => {
            t.d(r, {
                Dx: () => p,
                yO: () => c
            });
            var n = t("S+0I"),
                a = t("66mo"),
                s = t.n(a),
                u = t("VA12"),
                c = (function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-data/user-balance", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v6/private/future/user-data/user-balance", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                }()),
                p = (function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/user-balance", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v2/private/delivery/user-data/user-balance", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                }())
        },
        haD4: (e, r, t) => {
            t.d(r, {
                HO: () => c,
                UT: () => i,
                X5: () => p
            });
            var n = t("S+0I"),
                a = t("66mo"),
                s = t.n(a),
                u = t("VA12"),
                c = (function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/get-orderConfirmation");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-setting/get-orderConfirmation");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-data/get-position-side");
                                case 4:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {
                                        data: {
                                            dualSidePosition: !0
                                        }
                                    };
                                case 7:
                                    r = e.t0, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t1 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 13:
                                    return e.abrupt("return", r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/get-position-side");
                                case 4:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {
                                        data: {
                                            dualSidePosition: !0
                                        }
                                    };
                                case 7:
                                    r = e.t0, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t1 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 13:
                                    return e.abrupt("return", r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-setting/get-unit");
                                case 4:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {
                                        data: {
                                            unit: "cont"
                                        }
                                    };
                                case 7:
                                    r = e.t0, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t1 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 13:
                                    return e.abrupt("return", r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/update-orderConfirmation", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-setting/update-orderConfirmation", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t, n, a = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/future/user-data/change-position-side", r, t);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t, n, a = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/change-position-side", r, t);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/update-unit", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-setting/update-unit", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-data/get-join-margin");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: {
                                            joinMargin: !1
                                        }
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/get-join-margin");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-data/change-join-margin", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/change-join-margin", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/responsible/get-responsible-config");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/responsible/save-responsible-config", r);
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/common/user-setting/get-perpetual-price-differ-switch");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/get-margin-call-config");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.marginCallLevel, n = r.marginCallInterval, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/future/user-setting/update-margin-call-config", {
                                        marginCallLevel: t,
                                        marginCallInterval: n
                                    });
                                case 5:
                                    a = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), a = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", a);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.get)("/bapi/futures/v1/public/future/common/future-latest-config");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/common/user-setting/get-delivery-price-differ-switch");
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r, t, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/future/user-data/symbol-config", r);
                                case 5:
                                    t = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), t = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", t);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                p = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r, t, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/delivery/user-data/symbol-config", r);
                                case 5:
                                    t = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), t = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", t);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                i = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r, t, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/future/user-setting/get-account-credit-config", r);
                                case 5:
                                    t = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    throw e.prev = 8, e.t0 = e.catch(2), new Error("get credit status error");
                                case 11:
                                    return e.abrupt("return", t);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            (function() {
                var e = (0, n._)(s().mark((function e() {
                    var r, t, n = arguments;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.prev = 2, e.next = 5, (0, u.post)("/bapi/futures/v1/private/future/user-setting/switch-user-credit-status", r);
                            case 5:
                                t = e.sent, e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(2), t = {
                                    success: !1
                                };
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8]
                    ])
                })))
            })(),
            function() {
                var e = (0, n._)(s().mark((function e() {
                    var r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/get-BFUSD-confirmation");
                            case 4:
                                r = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), r = {
                                    success: !1,
                                    "BFUSD-Confirmation": null
                                };
                            case 10:
                                return e.abrupt("return", r);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(s().mark((function e() {
                    var r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, u.post)("/bapi/futures/v1/private/future/user-setting/update-BFUSD-confirmation", {
                                    confirmation: {
                                        agreed: !0
                                    }
                                });
                            case 4:
                                r = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), r = {
                                    success: !1
                                };
                            case 10:
                                return e.abrupt("return", r);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }()
        }
    }
]);