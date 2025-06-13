! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29d32063-cf5b-5936-8cf8-525e2a7a1faa")
    } catch (e) {}
}();
(self.webpackChunkmini_notification_center = self.webpackChunkmini_notification_center || []).push([
    [364], {
        TprX: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                s = n.n(i),
                o = n("W1Th"),
                a = n("o0Ko"),
                c = n.n(a),
                l = n("Prrn"),
                u = s().forwardRef((function(e, t) {
                    var n = (0, l.r)().prefixCls,
                        i = c()("".concat(n, "-flex"), e.className);
                    return s().createElement(o.A, (0, r.__assign)({}, e, {
                        ref: t,
                        className: i
                    }))
                }));
            u.displayName = "Flex";
            const h = u
        },
        TgxR: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                s = n.n(i),
                o = n("/nhe"),
                a = n("1sVx"),
                c = n("7zlU");
            const l = function(e) {
                return s().createElement(c.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 5H3v14h18V5zm-7.5 10.267l5.5-5.5L17.23 8l-3.73 3.731-3-3L5 14.231 6.768 16l3.732-3.732 3 3z",
                    fill: "currentColor"
                }))
            };
            const u = function(e) {
                return s().createElement(c.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.412 19.191A9 9 0 1110.75 3.086v5.11a4.005 4.005 0 103.048 7.381l3.614 3.614zm1.77-1.766a9.002 9.002 0 00-5.932-14.34v5.111a4.005 4.005 0 012.32 5.617l3.612 3.612z",
                    fill: "currentColor"
                }))
            };
            var h = n("o0Ko"),
                d = n.n(h),
                f = n("AGKK"),
                p = n("Prrn"),
                m = s().createElement(l, null),
                y = s().createElement(u, null);
            const v = function(e) {
                var t, n = e.disabled,
                    c = e.onChange,
                    l = e.size,
                    u = void 0 === l ? "middle" : l,
                    h = e.variant,
                    v = void 0 === h ? "regular" : h,
                    g = e.styleVariant,
                    b = void 0 === g ? "line" : g,
                    x = e.checked,
                    A = e.defaultChecked,
                    _ = e.leftContent,
                    w = void 0 === _ ? m : _,
                    T = e.rightContent,
                    M = void 0 === T ? y : T,
                    S = (0, r.__rest)(e, ["disabled", "onChange", "size", "variant", "styleVariant", "checked", "defaultChecked", "leftContent", "rightContent"]),
                    D = function(e) {
                        var t = e.checked,
                            n = e.defaultChecked,
                            r = e.onChange,
                            c = e.disabled,
                            l = s().useState(!!n),
                            u = l[0],
                            h = l[1];
                        (0, o.op)((function() {
                            "undefined" !== typeof t && u !== !!t && h(!u)
                        }));
                        var d = (0, a.d)({
                                fn: r
                            }).debounceFn,
                            f = (0, i.useCallback)((function(e) {
                                c || h((function(t) {
                                    var n = "boolean" === typeof e ? e : !t;
                                    return t !== n && d(n), t !== n ? n : t
                                }))
                            }), [d, c]);
                        return {
                            checked: u,
                            onChecked: f
                        }
                    }({
                        defaultChecked: A,
                        checked: x,
                        disabled: n,
                        onChange: c
                    }),
                    E = D.onChecked,
                    N = D.checked,
                    k = (0, p.r)(),
                    C = k.prefixCls,
                    j = k.isRTL,
                    O = "".concat(C, "-switch"),
                    $ = d()(O, ((t = {})["".concat(O, "-rtl")] = !!j, t["".concat(O, "__").concat(v)] = !!v, t["".concat(O, "__content__").concat(b)] = "content" === v && !!b, t["data-size-".concat(u)] = !!u, t.disabled = !!n, t.checked = !!N, t), e.className),
                    L = {
                        role: "switch",
                        "aria-checked": N,
                        "aria-disabled": n,
                        "aria-label": "switch",
                        tabIndex: n ? -1 : 0,
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), E())
                        }
                    };
                return s().createElement(f.Ay, (0, r.__assign)({}, L, S, {
                    onClick: E,
                    className: $
                }), "content" === v ? s().createElement(s().Fragment, null, s().createElement(f.Ay, {
                    className: "".concat(O, "__content-left")
                }, w), s().createElement(f.Ay, {
                    className: "".concat(O, "__content-right")
                }, M)) : null, s().createElement(f.Ay, {
                    className: "".concat(O, "-dot"),
                    children: e.children
                }))
            }
        },
        "09Dg": function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    t = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    i = "second",
                    s = "minute",
                    o = "hour",
                    a = "day",
                    c = "week",
                    l = "month",
                    u = "quarter",
                    h = "year",
                    d = "date",
                    f = "Invalid Date",
                    p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    y = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(e) {
                            var t = ["th", "st", "nd", "rd"],
                                n = e % 100;
                            return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                        }
                    },
                    v = function(e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    g = {
                        s: v,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                i = n % 60;
                            return (t <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(i, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                i = t.clone().add(r, l),
                                s = n - i < 0,
                                o = t.clone().add(r + (s ? -1 : 1), l);
                            return +(-(r + (n - i) / (s ? i - o : o - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: l,
                                y: h,
                                w: c,
                                d: a,
                                D: d,
                                h: o,
                                m: s,
                                s: i,
                                ms: r,
                                Q: u
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    b = "en",
                    x = {};
                x[b] = y;
                var A = "$isDayjsObject",
                    _ = function(e) {
                        return e instanceof S || !(!e || !e[A])
                    },
                    w = function e(t, n, r) {
                        var i;
                        if (!t) return b;
                        if ("string" == typeof t) {
                            var s = t.toLowerCase();
                            x[s] && (i = s), n && (x[s] = n, i = s);
                            var o = t.split("-");
                            if (!i && o.length > 1) return e(o[0])
                        } else {
                            var a = t.name;
                            x[a] = t, i = a
                        }
                        return !r && i && (b = i), i || !r && b
                    },
                    T = function(e, t) {
                        if (_(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new S(n)
                    },
                    M = g;
                M.l = w, M.i = _, M.w = function(e, t) {
                    return T(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var S = function() {
                        function y(e) {
                            this.$L = w(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[A] = !0
                        }
                        var v = y.prototype;
                        return v.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (M.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(p);
                                    if (r) {
                                        var i = r[2] - 1 || 0,
                                            s = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                    }
                                }
                                return new Date(t)
                            }(e), this.init()
                        }, v.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, v.$utils = function() {
                            return M
                        }, v.isValid = function() {
                            return !(this.$d.toString() === f)
                        }, v.isSame = function(e, t) {
                            var n = T(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, v.isAfter = function(e, t) {
                            return T(e) < this.startOf(t)
                        }, v.isBefore = function(e, t) {
                            return this.endOf(t) < T(e)
                        }, v.$g = function(e, t, n) {
                            return M.u(e) ? this[t] : this.set(n, e)
                        }, v.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, v.valueOf = function() {
                            return this.$d.getTime()
                        }, v.startOf = function(e, t) {
                            var n = this,
                                r = !!M.u(t) || t,
                                u = M.p(e),
                                f = function(e, t) {
                                    var i = M.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return r ? i : i.endOf(a)
                                },
                                p = function(e, t) {
                                    return M.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                },
                                m = this.$W,
                                y = this.$M,
                                v = this.$D,
                                g = "set" + (this.$u ? "UTC" : "");
                            switch (u) {
                                case h:
                                    return r ? f(1, 0) : f(31, 11);
                                case l:
                                    return r ? f(1, y) : f(0, y + 1);
                                case c:
                                    var b = this.$locale().weekStart || 0,
                                        x = (m < b ? m + 7 : m) - b;
                                    return f(r ? v - x : v + (6 - x), y);
                                case a:
                                case d:
                                    return p(g + "Hours", 0);
                                case o:
                                    return p(g + "Minutes", 1);
                                case s:
                                    return p(g + "Seconds", 2);
                                case i:
                                    return p(g + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, v.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, v.$set = function(e, t) {
                            var n, c = M.p(e),
                                u = "set" + (this.$u ? "UTC" : ""),
                                f = (n = {}, n[a] = u + "Date", n[d] = u + "Date", n[l] = u + "Month", n[h] = u + "FullYear", n[o] = u + "Hours", n[s] = u + "Minutes", n[i] = u + "Seconds", n[r] = u + "Milliseconds", n)[c],
                                p = c === a ? this.$D + (t - this.$W) : t;
                            if (c === l || c === h) {
                                var m = this.clone().set(d, 1);
                                m.$d[f](p), m.init(), this.$d = m.set(d, Math.min(this.$D, m.daysInMonth())).$d
                            } else f && this.$d[f](p);
                            return this.init(), this
                        }, v.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, v.get = function(e) {
                            return this[M.p(e)]()
                        }, v.add = function(r, u) {
                            var d, f = this;
                            r = Number(r);
                            var p = M.p(u),
                                m = function(e) {
                                    var t = T(f);
                                    return M.w(t.date(t.date() + Math.round(e * r)), f)
                                };
                            if (p === l) return this.set(l, this.$M + r);
                            if (p === h) return this.set(h, this.$y + r);
                            if (p === a) return m(1);
                            if (p === c) return m(7);
                            var y = (d = {}, d[s] = t, d[o] = n, d[i] = e, d)[p] || 1,
                                v = this.$d.getTime() + r * y;
                            return M.w(v, this)
                        }, v.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, v.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = M.z(this),
                                s = this.$H,
                                o = this.$m,
                                a = this.$M,
                                c = n.weekdays,
                                l = n.months,
                                u = n.meridiem,
                                h = function(e, n, i, s) {
                                    return e && (e[n] || e(t, r)) || i[n].slice(0, s)
                                },
                                d = function(e) {
                                    return M.s(s % 12 || 12, e, "0")
                                },
                                p = u || function(e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace(m, (function(e, r) {
                                return r || function(e) {
                                    switch (e) {
                                        case "YY":
                                            return String(t.$y).slice(-2);
                                        case "YYYY":
                                            return M.s(t.$y, 4, "0");
                                        case "M":
                                            return a + 1;
                                        case "MM":
                                            return M.s(a + 1, 2, "0");
                                        case "MMM":
                                            return h(n.monthsShort, a, l, 3);
                                        case "MMMM":
                                            return h(l, a);
                                        case "D":
                                            return t.$D;
                                        case "DD":
                                            return M.s(t.$D, 2, "0");
                                        case "d":
                                            return String(t.$W);
                                        case "dd":
                                            return h(n.weekdaysMin, t.$W, c, 2);
                                        case "ddd":
                                            return h(n.weekdaysShort, t.$W, c, 3);
                                        case "dddd":
                                            return c[t.$W];
                                        case "H":
                                            return String(s);
                                        case "HH":
                                            return M.s(s, 2, "0");
                                        case "h":
                                            return d(1);
                                        case "hh":
                                            return d(2);
                                        case "a":
                                            return p(s, o, !0);
                                        case "A":
                                            return p(s, o, !1);
                                        case "m":
                                            return String(o);
                                        case "mm":
                                            return M.s(o, 2, "0");
                                        case "s":
                                            return String(t.$s);
                                        case "ss":
                                            return M.s(t.$s, 2, "0");
                                        case "SSS":
                                            return M.s(t.$ms, 3, "0");
                                        case "Z":
                                            return i
                                    }
                                    return null
                                }(e) || i.replace(":", "")
                            }))
                        }, v.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, v.diff = function(r, d, f) {
                            var p, m = this,
                                y = M.p(d),
                                v = T(r),
                                g = (v.utcOffset() - this.utcOffset()) * t,
                                b = this - v,
                                x = function() {
                                    return M.m(m, v)
                                };
                            switch (y) {
                                case h:
                                    p = x() / 12;
                                    break;
                                case l:
                                    p = x();
                                    break;
                                case u:
                                    p = x() / 3;
                                    break;
                                case c:
                                    p = (b - g) / 6048e5;
                                    break;
                                case a:
                                    p = (b - g) / 864e5;
                                    break;
                                case o:
                                    p = b / n;
                                    break;
                                case s:
                                    p = b / t;
                                    break;
                                case i:
                                    p = b / e;
                                    break;
                                default:
                                    p = b
                            }
                            return f ? p : M.a(p)
                        }, v.daysInMonth = function() {
                            return this.endOf(l).$D
                        }, v.$locale = function() {
                            return x[this.$L]
                        }, v.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = w(e, t, !0);
                            return r && (n.$L = r), n
                        }, v.clone = function() {
                            return M.w(this.$d, this)
                        }, v.toDate = function() {
                            return new Date(this.valueOf())
                        }, v.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, v.toISOString = function() {
                            return this.$d.toISOString()
                        }, v.toString = function() {
                            return this.$d.toUTCString()
                        }, y
                    }(),
                    D = S.prototype;
                return T.prototype = D, [
                    ["$ms", r],
                    ["$s", i],
                    ["$m", s],
                    ["$H", o],
                    ["$W", a],
                    ["$M", l],
                    ["$y", h],
                    ["$D", d]
                ].forEach((function(e) {
                    D[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), T.extend = function(e, t) {
                    return e.$i || (e(t, S, T), e.$i = !0), T
                }, T.locale = w, T.isDayjs = _, T.unix = function(e) {
                    return T(1e3 * e)
                }, T.en = x[b], T.Ls = x, T.p = {}, T
            }()
        },
        "/I5v": function(e) {
            e.exports = function() {
                "use strict";
                var e = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };
                return function(t, n, r) {
                    var i = n.prototype,
                        s = i.format;
                    r.en.formats = e, i.format = function(t) {
                        void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                        var n = this.$locale().formats,
                            r = function(t, n) {
                                return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t, r, i) {
                                    var s = i && i.toUpperCase();
                                    return r || n[i] || e[i] || n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
                                        return t || n.slice(1)
                                    }))
                                }))
                            }(t, void 0 === n ? {} : n);
                        return s.call(this, r)
                    }
                }
            }()
        },
        tkCt: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => o
            });
            var r = n("DTvD"),
                i = n.n(r),
                s = "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? i().useLayoutEffect : i().useEffect;

            function o(e) {
                var t = i().useRef(e);
                return s((function() {
                    t.current = e
                })), i().useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    var i;
                    return null === (i = t.current) || void 0 === i ? void 0 : i.apply(null, n)
                }), [])
            }
        },
        ciA0: (e, t, n) => {
            "use strict";
            n.d(t, {
                _V: () => i,
                BM: () => r,
                BS: () => s
            });
            n("DTvD");
            const r = "scroll-view",
                i = "image",
                s = "svg"
        },
        eKOD: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                s = n("gZfF"),
                o = n("TrCV"),
                a = n("AGKK"),
                c = n("wIZF"),
                l = n("DTvD"),
                u = n.n(l),
                h = n("7zlU");
            const d = function(e) {
                return u().createElement(h.A, (0, c.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), u().createElement("path", {
                    opacity: .5,
                    d: "M84 28H64V8l20 20z",
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    opacity: .2,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24 8h40v20h20v60H24V8zm10 30h40v4H34v-4zm40 8H34v4h40v-4zm-40 8h40v4H34v-4z",
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.137 64.105c7.828 5.781 18.916 5.127 26.005-1.963 7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.284 0-7.09 7.09-7.744 18.177-1.964 26.005l-14.3 14.3 4.243 4.243 14.3-14.3zM43.9 57.9c-5.467 5.468-14.331 5.468-19.799 0-5.467-5.467-5.467-14.331 0-19.799 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8z",
                    fill: "#AEB4BC"
                }))
            };
            var f = function(e) {
                var t = e.className,
                    n = e.emptyText,
                    c = e.children,
                    l = (0, s.A)(e, ["className", "emptyText", "children"]);
                return (0, o.jsxs)(a.Ay, (0, i.A)((0, r.A)({
                    className: "flex flex-col items-center ".concat(t)
                }, l), {
                    children: [(0, o.jsx)(d, {
                        name: "NotFoundData",
                        className: "h-[64px] w-[64px]"
                    }), n ? (0, o.jsx)(a.Ay, {
                        className: "typography-body2 mt-l text-center text-t-Secondary",
                        children: n
                    }) : c]
                }))
            };
            f.displayName = "Empty";
            const p = f
        },
        "NY/y": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                s = n("gZfF"),
                o = n("TrCV"),
                a = n("DTvD"),
                c = n.n(a),
                l = n("TSYQ"),
                u = n.n(l),
                h = n("AGKK"),
                d = n("qBxT"),
                f = n("jhL5"),
                p = function(e) {
                    var t = e.className,
                        n = e.borderBottom,
                        c = void 0 === n || n,
                        l = e.actions,
                        p = e.children,
                        m = (0, s.A)(e, ["className", "borderBottom", "actions", "children"]),
                        y = (0, (0, a.useContext)(d.Q).getPrefixCls)("list"),
                        v = u()("".concat(y, "-item"), {
                            "hover:bg-Input": !f.rZ
                        }, t);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(h.Ay, (0, i.A)((0, r.A)({
                            "hover-class": "hover:bg-Input",
                            className: v
                        }, m), {
                            children: [p, l && 0 !== l.length ? (0, o.jsx)(h.Ay, {
                                as: "ul",
                                className: "".concat(y, "-item-actiongroup"),
                                children: l.map((function(e, t) {
                                    return (0, o.jsx)(h.Ay, {
                                        as: "li",
                                        className: "".concat(y, "-item-action"),
                                        children: e
                                    }, "".concat(y, "-item-action-").concat(t))
                                }))
                            }) : null]
                        })), c ? (0, o.jsx)(h.Ay, {
                            className: "half-pixel-border"
                        }) : null]
                    })
                };
            p.Meta = function(e) {
                var t = e.className,
                    n = e.avatar,
                    c = e.title,
                    l = e.description,
                    f = e.extra,
                    p = e.append,
                    m = (0, s.A)(e, ["className", "avatar", "title", "description", "extra", "append"]),
                    y = (0, (0, a.useContext)(d.Q).getPrefixCls)("list"),
                    v = u()("".concat(y, "-item-meta"), t),
                    g = c || l,
                    b = (0, a.useMemo)((function() {
                        return {
                            title: u()("".concat(y, "-item-meta-title"), "typography-subtitle1"),
                            description: u()("".concat(y, "-item-meta-description"), "typography-body2"),
                            extra: u()("".concat(y, "-item-meta-extra"), "typography-caption1")
                        }
                    }), []);
                return (0, o.jsxs)(h.Ay, (0, i.A)((0, r.A)({
                    className: v
                }, m), {
                    children: [n && (0, o.jsx)(h.Ay, {
                        className: "".concat(y, "-item-meta-avatar"),
                        children: n
                    }), g && (0, o.jsxs)(h.Ay, {
                        className: "".concat(y, "-item-meta-content"),
                        children: [c && (0, o.jsx)(h.Ay, {
                            as: "h4",
                            className: b.title,
                            children: c
                        }), l && (0, o.jsx)(h.Ay, {
                            className: "typography-body2 truncate text-t-Secondary ".concat(b.description),
                            children: l
                        }), f && (0, o.jsx)(h.Ay, {
                            className: b.extra,
                            children: f
                        })]
                    }), p]
                }))
            }, p.displayName = "List.Item";
            const m = p;
            var y, v = n("TprX"),
                g = n("Jfxg"),
                b = n("ciA0"),
                x = n("V0mm"),
                A = n("MH8b");
            ! function(e) {
                e[e.INIT = 0] = "INIT", e[e.PULLING = 1] = "PULLING", e[e.READY_REFRESH = 2] = "READY_REFRESH", e[e.LOADING = 3] = "LOADING", e[e.DONE = 4] = "DONE"
            }(y || (y = {}));
            const _ = {
                "icon-wrapper": "style_icon-wrapper__CDx6k",
                loading: "style_loading__2vM0A",
                "default-logo-wrapper": "style_default-logo-wrapper__2-kfi",
                "default-logo": "style_default-logo__3EP_x",
                "default-logo-name": "style_default-logo-name__3s2IU",
                body: "style_body__3--y8",
                rotate: "style_rotate__2DxxS"
            };
            var w = n("OShd"),
                T = (0, f.yV)(),
                M = T.screenHeight,
                S = T.screenWidth;
            const D = function(e) {
                var t = (0, x.fn)(w.U, w.P),
                    n = t.customNavigatorContentHeight,
                    c = t.statusBarHeight,
                    l = e.children,
                    d = e.onRefresh,
                    f = void 0 === d ? function() {} : d,
                    p = e.refreshing,
                    m = void 0 !== p && p,
                    T = e.scrollViewHeight,
                    D = void 0 === T ? M - (n + c) - 44 : T,
                    E = e.refreshNode,
                    N = e.validHeight,
                    k = void 0 === N ? 30 : N,
                    C = e.onScrollToLower,
                    j = void 0 === C ? function() {} : C,
                    O = e.className,
                    $ = (0, s.A)(e, ["children", "onRefresh", "refreshing", "scrollViewHeight", "refreshNode", "validHeight", "onScrollToLower", "className"]),
                    L = function(e, t) {
                        return e * function(e) {
                            return 750 / e
                        }(t)
                    }(D, S),
                    H = (0, a.useState)(0),
                    R = H[0],
                    I = H[1],
                    F = (0, a.useState)(y.INIT),
                    z = F[0],
                    P = F[1],
                    Y = (0, a.useState)(0),
                    V = Y[0],
                    G = Y[1],
                    B = (0, a.useState)(!0),
                    K = B[0],
                    U = B[1];
                return (0, a.useEffect)((function() {
                    I(0);
                    var e = setTimeout((function() {
                        P(y.DONE)
                    }), 200);
                    return function() {
                        clearTimeout(e)
                    }
                }), [m]), (0, o.jsxs)(b.BM, (0, i.A)((0, r.A)({
                    onScrollToUpper: function() {
                        U(!0)
                    },
                    onScrollToLower: function() {
                        z !== y.LOADING && j && j()
                    },
                    onScroll: function(e) {
                        var t;
                        0 === (null === (t = e.detail) || void 0 === t ? void 0 : t.scrollTop) ? U(!0) : U(!1)
                    },
                    scrollY: !0,
                    style: {
                        height: "".concat(L, "rpx")
                    },
                    enhanced: !0,
                    showScrollbar: !1,
                    className: u()("hide-scrollbar", O)
                }, $), {
                    children: [R > 0 ? (0, o.jsx)(h.Ay, {
                        className: "".concat(_["icon-wrapper"], " ").concat(z === y.LOADING ? "loading" : ""),
                        style: {
                            height: "".concat(R, "px")
                        },
                        children: E || (0, o.jsxs)(v.A, {
                            className: "".concat(_["default-logo-wrapper"]),
                            children: [(0, o.jsx)(g.A, {
                                className: "".concat(_.icon, " ").concat(_["default-logo"]),
                                src: (0, A.g)("static/illustrations/binance-logo/binance-icon.svg")
                            }), (0, o.jsx)(h.Ay, {
                                className: "typography-Caption1 ".concat(_["default-logo-name"]),
                                children: "Binance.com"
                            })]
                        })
                    }) : (0, o.jsx)(h.Ay, {}), (0, o.jsx)(h.Ay, {
                        className: _.body,
                        onTouchMove: function(e) {
                            var t = e.touches[0];
                            if (t) {
                                var n = .3 * (t.pageY - V);
                                !K || n < 0 || n > 100 || z === y.LOADING || (n < k ? (I(n), P(y.PULLING)) : (I(n), P(y.READY_REFRESH)))
                            }
                        },
                        onTouchStart: function(e) {
                            var t = e.touches[0];
                            t && G(t.pageY)
                        },
                        onTouchEnd: function() {
                            G(0), z === y.READY_REFRESH ? (P(y.LOADING), I(50), f && f()) : I(0)
                        },
                        children: l
                    })]
                }))
            };
            var E = c().createContext({}),
                N = n("eKOD");

            function k(e) {
                var t, n = e.className,
                    c = e.dataSource,
                    l = e.rowKey,
                    f = e.renderItem,
                    p = e.loading,
                    m = void 0 !== p && p,
                    y = e.loadMore,
                    v = e.header,
                    g = e.footer,
                    b = e.emptyText,
                    x = e.children,
                    A = e.enableRefresh,
                    _ = e.refreshing,
                    w = e.onRefresh,
                    T = e.scrollViewHeight,
                    M = (0, s.A)(e, ["className", "dataSource", "rowKey", "renderItem", "loading", "loadMore", "header", "footer", "emptyText", "children", "enableRefresh", "refreshing", "onRefresh", "scrollViewHeight"]),
                    S = (0, a.useContext)(d.Q),
                    k = S.getPrefixCls,
                    C = S.renderEmpty,
                    j = k("list"),
                    O = u()(j, n),
                    $ = (0, a.useMemo)((function() {
                        return {}
                    }), []),
                    L = function(e, t) {
                        return f && (0, o.jsx)(a.Fragment, {
                            children: f(e, t)
                        }, function(e, t) {
                            var n;
                            return "function" === typeof l ? n = l(e, t) : l && (n = e[l]), n || (n = "list-item-".concat(t)), n
                        }(e, t))
                    };
                if (c && c.length > 0) {
                    var H = c.map((function(e, t) {
                        return L(e, t)
                    }));
                    t = (0, o.jsx)(h.Ay, {
                        as: "ul",
                        className: "".concat(j, "-items"),
                        children: H
                    })
                } else x || m || (t = (0, o.jsx)(h.Ay, {
                    className: "".concat(j, "-empty"),
                    children: (null === C || void 0 === C ? void 0 : C("List")) || (0, o.jsx)(N.A, {
                        emptyText: b || "No data found"
                    })
                }));
                var R = (0, o.jsxs)(h.Ay, (0, i.A)((0, r.A)({
                    className: O
                }, M), {
                    children: [v && (0, o.jsx)(h.Ay, {
                        className: "".concat(j, "-header"),
                        children: v
                    }), (0, o.jsxs)(h.Ay, {
                        className: "".concat(j, "-content"),
                        children: [t, x]
                    }), g && (0, o.jsx)(h.Ay, {
                        className: "".concat(j, "-footer"),
                        children: g
                    }), y]
                }));
                return (0, o.jsx)(E.Provider, {
                    value: $,
                    children: A ? (0, o.jsx)(D, {
                        scrollViewHeight: T,
                        onRefresh: w,
                        refreshing: _,
                        children: R
                    }) : R
                })
            }
            k.Item = m, k.displayName = "List";
            const C = k
        },
        "A+wf": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                s = n("AGKK"),
                o = n("ZSsA"),
                a = n("V0mm"),
                c = n("BMtS"),
                l = n("OShd");
            const u = function(e) {
                var t = e.href,
                    n = e.children,
                    o = (0, a.fn)(l.U, l.P).systemInfo,
                    u = (0, i.useCallback)((function() {
                        var e = o.language,
                            n = t ? t.replace(/#+/, null !== e && void 0 !== e ? e : "en").replace("${lang}", null !== e && void 0 !== e ? e : "en").replace("${en}", null !== e && void 0 !== e ? e : "en") : null;
                        n && (0, c.D)(n)
                    }), [t, o]);
                return (0, r.jsx)(s.Ay, {
                    onClick: u,
                    className: "notification-center__link typography-btnLink1",
                    children: n
                })
            };
            var h = function(e) {
                var t = e.text;
                return t ? (0, r.jsx)(o.x6, {
                    defaults: String(t || "").replace(/(\r\n|\r|\n|<br\s*\/?>)/g, "<br/>"),
                    components: {
                        a: (0, r.jsx)(u, {}),
                        br: (0, r.jsx)(s.Ay, {
                            style: {
                                height: "4px"
                            }
                        })
                    }
                }) : null
            };
            const d = (0, i.memo)(h)
        },
        qBxT: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => i
            });
            var r = n("DTvD"),
                i = (0, r.createContext)({
                    getPrefixCls: function(e, t) {
                        return t || (e ? "nc-".concat(e) : "nc")
                    }
                })
        },
        "43Uo": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("HS2I");
            const i = function() {
                var e = (0, r.useMediaState)();
                return {
                    isMobile: e.isMobile,
                    isTablet: e.isTablet,
                    isDesktop: e.isDesktop
                }
            }
        },
        "0Pr3": (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => o
            });
            var r = n("DTvD"),
                i = n("BMtS"),
                s = n("HoNV"),
                o = function() {
                    var e = (0, s.ok)().locale;
                    return (0, r.useCallback)((function(t) {
                        var n = t ? t.replace(/#+/, null !== e && void 0 !== e ? e : "en").replace("${lang}", null !== e && void 0 !== e ? e : "en").replace("${en}", null !== e && void 0 !== e ? e : "en").replace("{{lang}}", null !== e && void 0 !== e ? e : "en") : null;
                        return n && (0, i.D)(n)
                    }), [e])
                }
        },
        fUaI: (e, t, n) => {
            "use strict";
            n.d(t, {
                L3: () => r,
                VZ: () => o,
                Yn: () => s
            });
            var r, i = n("VyXn");
            ! function(e) {
                e.Announcement = "announcement", e.Campaign = "campaign", e.Chat = "chat", e.SystemMessage = "systemMessage", e.ServiceGroup = "serviceGroup", e.ServiceGroupSetting = "serviceGroupSetting", e.ServiceGroupMembers = "serviceGroupMembers", e.ServiceGroupMemberProfile = "serviceGroupMemberProfile", e.Preview = "preview", e.PinnedMessages = "pinnedMessages", e.SearchChatHistory = "searchChatHistory"
            }(r || (r = {}));
            var s = "home",
                o = (0, i.NP)({
                    state: {
                        currentGroupId: "",
                        isInEdit: !1
                    },
                    actions: {
                        toggleEditStatus: function(e) {
                            this.isInEdit = "undefined" === typeof e ? !this.isInEdit : !!e
                        },
                        setCurrentGroupId: function(e) {
                            this.currentGroupId = e
                        }
                    }
                })
        },
        VEmo: (e, t, n) => {
            "use strict";
            var r, i;
            n.d(t, {
                    K: () => i
                }),
                function(e) {
                    e[e.DEFAULT = 0] = "DEFAULT", e[e.TEXT = 1] = "TEXT", e[e.HINT = 2] = "HINT", e[e.STRUCTED = 3] = "STRUCTED"
                }(r || (r = {})),
                function(e) {
                    e[e.IMAGE = 1] = "IMAGE", e[e.VIDEO = 2] = "VIDEO", e[e.PAIRS = 3] = "PAIRS", e[e.TEXT = 4] = "TEXT"
                }(i || (i = {}))
        },
        "dO/3": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                s = n("AGKK"),
                o = function(e) {
                    var t = e.pairs;
                    return Array.isArray(t) && t.length ? (0, r.jsx)(s.Ay, {
                        children: t.map((function(e) {
                            var t = e.key,
                                n = e.value;
                            return (0, r.jsxs)(s.Ay, {
                                className: "typography-body2 noH5:Body3 pb-2xs mobile:justify-between mobile:pb-3xs flex",
                                children: [(0, r.jsx)(s.Ay, {
                                    className: "mr-xl text-t-Secondary noH5:text-t-Tertiary w-[128px] break-all",
                                    children: t
                                }), (0, r.jsx)(s.Ay, {
                                    className: "text-t-Primary noH5:text-t-Tertiary flex-1",
                                    style: {
                                        maxHeight: "50px",
                                        display: "inline-flex"
                                    },
                                    children: n
                                })]
                            }, t)
                        }))
                    }) : null
                };
            const a = (0, i.memo)(o)
        },
        PzoT: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                s = n("AGKK"),
                o = n("Jfxg"),
                a = n("aCc/"),
                c = function(e) {
                    var t = e.data;
                    return t ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(s.Ay, {
                            className: "w-full",
                            children: (0, r.jsx)(o.A, {
                                className: "w-full",
                                lazyLoad: !0,
                                src: (0, a.gf)(t)
                            })
                        })
                    }) : null
                };
            const l = (0, i.memo)(c)
        },
        sGBW: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                s = n("TrCV"),
                o = n("DTvD"),
                a = n("AGKK"),
                c = n("A+wf"),
                l = function(e) {
                    var t = e.data,
                        n = e.attribute,
                        l = (0, o.useMemo)((function() {
                            var e = (0, i.A)((0, r.A)({}, n), {
                                className: "typography-body2"
                            });
                            if (n && n.style) {
                                var t = n.style.split(" ");
                                e.className = t.includes("heading") ? "typography-subtitle1" : "typography-body2"
                            }
                            return e
                        }), [n]);
                    return t ? (0, s.jsx)(a.Ay, {
                        className: "noH5:Body3 mb-2xs break-normal text-t-Secondary mobile:mb-3xs noH5:text-t-Tertiary ".concat(l.className),
                        children: (0, s.jsx)(c.A, {
                            text: t
                        })
                    }) : null
                };
            const u = (0, o.memo)(l)
        },
        jX8V: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => be
            });
            var r = n("gZfF"),
                i = n("TrCV"),
                s = n("DTvD"),
                o = n.n(s),
                a = n("AGKK"),
                c = n("tkCt"),
                l = Number.isNaN || function(e) {
                    return "number" === typeof e && e !== e
                };

            function u(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (r = e[n], i = t[n], !(r === i || l(r) && l(i))) return !1;
                var r, i;
                return !0
            }
            const h = function(e, t) {
                var n;
                void 0 === t && (t = u);
                var r, i = [],
                    s = !1;
                return function() {
                    for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                    return s && n === this && t(o, i) || (r = e.apply(this, o), s = !0, n = this, i = o), r
                }
            };
            n("aWzz");
            var d = n("laCo"),
                f = n.n(d),
                p = function() {
                    if ("undefined" !== typeof Map) return Map;

                    function e(e, t) {
                        var n = -1;
                        return e.some((function(e, r) {
                            return e[0] === t && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var n = e(this.__entries__, t),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, t.prototype.set = function(t, n) {
                            var r = e(this.__entries__, t);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                        }, t.prototype.delete = function(t) {
                            var n = this.__entries__,
                                r = e(n, t);
                            ~r && n.splice(r, 1)
                        }, t.prototype.has = function(t) {
                            return !!~e(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var i = r[n];
                                e.call(t, i[1], i[0])
                            }
                        }, t
                    }()
                }(),
                m = "undefined" !== typeof document && window.document === document,
                y = "undefined" !== typeof n.g && n.g.Math === Math ? n.g : "undefined" !== typeof self && self.Math === Math ? self : window.Math === Math ? window : Function("return this")(),
                v = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(y) : function(e) {
                    return setTimeout((function() {
                        return e(Date.now())
                    }), 1e3 / 60)
                };
            var g = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                b = "undefined" !== typeof MutationObserver,
                x = function() {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                            var n = !1,
                                r = !1,
                                i = 0;

                            function s() {
                                n && (n = !1, e()), r && a()
                            }

                            function o() {
                                v(s)
                            }

                            function a() {
                                var e = Date.now();
                                if (n) {
                                    if (e - i < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(o, t);
                                i = e
                            }
                            return a
                        }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter((function(e) {
                            return e.gatherActive(), e.hasActive()
                        }));
                        return e.forEach((function(e) {
                            return e.broadcastActive()
                        })), e.length > 0
                    }, e.prototype.connect_ = function() {
                        m && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), b ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function() {
                        m && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        g.some((function(e) {
                            return !!~n.indexOf(e)
                        })) && this.refresh()
                    }, e.getInstance = function() {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                A = function(e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(e, i, {
                            value: t[i],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                _ = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || y
                },
                w = N(0, 0, 0, 0);

            function T(e) {
                return parseFloat(e) || 0
            }

            function M(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce((function(t, n) {
                    return t + T(e["border-" + n + "-width"])
                }), 0)
            }

            function S(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return w;
                var r = _(e).getComputedStyle(e),
                    i = function(e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var i = r[n],
                                s = e["padding-" + i];
                            t[i] = T(s)
                        }
                        return t
                    }(r),
                    s = i.left + i.right,
                    o = i.top + i.bottom,
                    a = T(r.width),
                    c = T(r.height);
                if ("border-box" === r.boxSizing && (Math.round(a + s) !== t && (a -= M(r, "left", "right") + s), Math.round(c + o) !== n && (c -= M(r, "top", "bottom") + o)), ! function(e) {
                        return e === _(e).document.documentElement
                    }(e)) {
                    var l = Math.round(a + s) - t,
                        u = Math.round(c + o) - n;
                    1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u)
                }
                return N(i.left, i.top, a, c)
            }
            var D = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                return e instanceof _(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof _(e).SVGElement && "function" === typeof e.getBBox
            };

            function E(e) {
                return m ? D(e) ? function(e) {
                    var t = e.getBBox();
                    return N(0, 0, t.width, t.height)
                }(e) : S(e) : w
            }

            function N(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var k = function() {
                    function e(e) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = N(0, 0, 0, 0), this.target = e
                    }
                    return e.prototype.isActive = function() {
                        var e = E(this.target);
                        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    }, e.prototype.broadcastRect = function() {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                    }, e
                }(),
                C = function(e, t) {
                    var n = function(e) {
                        var t = e.x,
                            n = e.y,
                            r = e.width,
                            i = e.height,
                            s = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                            o = Object.create(s.prototype);
                        return A(o, {
                            x: t,
                            y: n,
                            width: r,
                            height: i,
                            top: n,
                            right: t + r,
                            bottom: i + n,
                            left: t
                        }), o
                    }(t);
                    A(this, {
                        target: e,
                        contentRect: n
                    })
                },
                j = function() {
                    function e(e, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new p, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return e.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" !== typeof Element && Element instanceof Object) {
                            if (!(e instanceof _(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new k(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" !== typeof Element && Element instanceof Object) {
                            if (!(e instanceof _(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach((function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        }))
                    }, e.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map((function(e) {
                                    return new C(e.target, e.broadcastRect())
                                }));
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                O = "undefined" !== typeof WeakMap ? new WeakMap : new p,
                $ = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = x.getInstance(),
                        r = new j(t, n, this);
                    O.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(e) {
                $.prototype[e] = function() {
                    var t;
                    return (t = O.get(this))[e].apply(t, arguments)
                }
            }));
            const L = "undefined" !== typeof y.ResizeObserver ? y.ResizeObserver : $;
            const H = {
                characters: {
                    tokenizeString: null,
                    isAtomic: function(e) {
                        return e.length <= 1
                    }
                },
                words: {
                    tokenizeString: function(e) {
                        return e.match(/(\s*\S[\S\xA0]*)/g)
                    },
                    isAtomic: function(e) {
                        return /^\s*[\S\xA0]*\s*$/.test(e)
                    }
                }
            };
            var R = function(e) {
                return e.children || null
            };
            R.__rtm_atom = !0;
            var I, F, z = function(e) {
                    return !(!e || !e.type || !0 !== e.type.__rtm_atom)
                },
                P = "<Atom>",
                Y = function() {
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
                V = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                G = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
            var B = !0,
                K = !1,
                U = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (!t) return n;
                    if ("string" === typeof t) return n + t;
                    if (z(t)) return n + P;
                    var r = Array.isArray(t) ? t : t.props.children || "";
                    return n + o().Children.map(r, (function(t) {
                        return e(t)
                    })).join("")
                },
                W = function(e, t, n, r) {
                    return G({}, e, {
                        props: G({}, e.props, {
                            style: G({}, e.props.style, n ? {
                                display: (e.props.style || {}).display || "block"
                            } : 2 === r ? {
                                display: (e.props.style || {}).display || "inline-block"
                            } : {}),
                            children: t
                        })
                    })
                },
                q = function e(t) {
                    return !(null != t && !["string", "number"].includes("undefined" === typeof t ? "undefined" : V(t)) && !z(t)) || "function" !== typeof t.type && (!t.props || !t.props.children || o().Children.toArray(t.props.children).reduce((function(t, n) {
                        return t && e(n)
                    }), !0))
                },
                Z = (F = I = function(e) {
                    function t(n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var r = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.call(this, n));
                        return r.lineHeight = null, r.splitDirectionSeq = [], r.shouldTruncate = !0, r.wasLastCharTested = !1, r.endFound = !1, r.latestThatFits = null, r.onTruncateCalled = !1, r.toStringMemo = h(U), r.childrenWithRefMemo = h(r.childrenElementWithRef), r.validateTreeMemo = h(q), r.onTruncate = function(e) {
                            r.onTruncateCalled || (r.onTruncateCalled = !0, r.props.onTruncate(e))
                        }, r.handleResize = function(e, t) {
                            if (t && t.disconnect(), !e) return null;
                            var n = !0,
                                i = t || new L((function() {
                                    n ? n = !1 : (r.shouldTruncate = !1, r.latestThatFits = null, r.setState({
                                        text: r.origText
                                    }, (function() {
                                        r.shouldTruncate = !0, r.onTruncateCalled = !1, r.truncate()
                                    })))
                                }));
                            return i.observe(e), i
                        }, r.setRef = function(e) {
                            var t = r.el !== e;
                            r.el = e, t && (r.resizeObserver = r.handleResize(e, r.resizeObserver))
                        }, r.state = {
                            text: r.childrenWithRefMemo(r.props.children)
                        }, r
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
                    }(t, e), t.prototype.componentDidMount = function() {
                        this.isValid && (this.lineHeight = this.props.lineHeight || f()(this.el), this.truncate())
                    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                        var t = this;
                        this.shouldTruncate = !1, this.latestThatFits = null, this.setState({
                            text: this.childrenWithRefMemo(e.children)
                        }, (function() {
                            t.isValid && (t.lineHeight = e.lineHeight || f()(t.el), t.shouldTruncate = !0, t.truncate())
                        }))
                    }, t.prototype.componentDidUpdate = function() {
                        if (!1 !== this.shouldTruncate && !1 !== this.isValid) return this.endFound ? null !== this.latestThatFits && this.state.text !== this.latestThatFits ? void this.setState({
                            text: this.latestThatFits
                        }) : void this.onTruncate(!0) : void(this.splitDirectionSeq.length && (this.fits() ? (this.latestThatFits = this.state.text, this.splitDirectionSeq.splice(this.splitDirectionSeq.length - 1, 1, K, B)) : this.splitDirectionSeq.push(B), this.tryToFit(this.origText, this.splitDirectionSeq)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.lineHeight = null, this.latestThatFits = null, this.splitDirectionSeq = []
                    }, t.prototype.truncate = function() {
                        if (this.fits()) return this.shouldTruncate = !1, void this.onTruncate(!1);
                        this.truncateOriginalText()
                    }, t.prototype.childrenElementWithRef = function(e) {
                        var t = o().Children.only(e);
                        return o().cloneElement(t, {
                            ref: this.setRef,
                            style: G({
                                wordWrap: "break-word"
                            }, t.props.style)
                        })
                    }, t.prototype.truncateOriginalText = function() {
                        this.endFound = !1, this.splitDirectionSeq = [B], this.wasLastCharTested = !1, this.tryToFit(this.origText, this.splitDirectionSeq)
                    }, t.prototype.tryToFit = function(e, t) {
                        if (e.props.children) {
                            var n = this.split(e, t, !0),
                                r = "function" === typeof this.props.ellipsis ? this.props.ellipsis(n) : this.props.ellipsis;
                            r = "object" === ("undefined" === typeof r ? "undefined" : V(r)) ? o().cloneElement(r, {
                                key: "ellipsis"
                            }) : r;
                            var i = n.props.children,
                                s = [].concat(i, r),
                                a = U(i) !== this.toStringMemo(this.props.children);
                            this.setState({
                                text: G({}, n, {
                                    props: G({}, n.props, {
                                        children: a ? s : i
                                    })
                                })
                            })
                        }
                    }, t.prototype.split = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                        if (!e || z(e)) return this.endFound = !0, e;
                        if ("string" === typeof e) return this.splitString(e, t, r);
                        if (Array.isArray(e)) return this.splitArray(e, t, r);
                        var i = this.split(e.props.children, t, !1, r + 1);
                        return W(e, i, n, r)
                    }, t.prototype.splitString = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments[2];
                        if (!t.length) return e;
                        if (t.length && this.policy.isAtomic(e)) return this.wasLastCharTested ? this.endFound = !0 : this.wasLastCharTested = !0, e;
                        if (this.policy.tokenizeString) {
                            var r = this.splitArray(this.policy.tokenizeString(e), t, n);
                            return r.join("")
                        }
                        var i = t[0],
                            s = t.slice(1),
                            o = Math.ceil(e.length / 2),
                            a = e.substring(0, o);
                        if (i === B) return this.splitString(a, s, n);
                        var c = e.substring(o);
                        return a + this.splitString(c, s, n)
                    }, t.prototype.splitArray = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments[2];
                        if (!t.length) return e;
                        if (1 === e.length) return [this.split(e[0], t, !1, n)];
                        var r = t[0],
                            i = t.slice(1),
                            s = Math.ceil(e.length / 2),
                            o = e.slice(0, s);
                        if (r === B) return this.splitArray(o, i, n);
                        var a = e.slice(s);
                        return o.concat(this.splitArray(a, i, n))
                    }, t.prototype.fits = function() {
                        var e = this.props.lines,
                            t = this.el.getBoundingClientRect().height;
                        return e >= Math.round(t / parseFloat(this.lineHeight))
                    }, t.prototype.render = function() {
                        return this.state.text
                    }, Y(t, [{
                        key: "isValid",
                        get: function() {
                            return this.validateTreeMemo(this.props.children)
                        }
                    }, {
                        key: "origText",
                        get: function() {
                            return this.childrenWithRefMemo(this.props.children)
                        }
                    }, {
                        key: "policy",
                        get: function() {
                            return H[this.props.tokenize] || H.characters
                        }
                    }]), t
                }(o().Component), I.Atom = R, I.defaultProps = {
                    lines: 1,
                    ellipsis: "...",
                    lineHeight: "",
                    onTruncate: function() {},
                    tokenize: "characters"
                }, F);
            Z.propTypes = {};
            var Q = n("HoNV"),
                X = n("A+wf"),
                J = function(e) {
                    var t = e.content,
                        n = (0, Q.ok)().t,
                        r = (0, s.useState)(!0),
                        o = r[0],
                        c = r[1],
                        l = (0, s.useState)(""),
                        u = l[0],
                        h = l[1],
                        d = (0, s.useCallback)((function(e) {
                            return e.stopPropagation(), c((function(e) {
                                return !e
                            })), !1
                        }), []),
                        f = (0, s.useMemo)((function() {
                            return (0, i.jsx)(a.Ay, {
                                className: "typography-btnLink2 cursor-pointer pt-2xs text-t-Primary underline hover:text-t-TextLink",
                                onClick: d,
                                children: n("view-less")
                            })
                        }), []);
                    return (0, i.jsx)(a.Ay, {
                        className: "typography-body3 pt-2xs text-t-Tertiary ".concat(o ? u : ""),
                        children: o ? (0, i.jsx)(Z, {
                            lines: 1,
                            lineHeight: "20px",
                            ellipsis: function(e) {
                                return e.props.children.length < t.length && h("pb-2xl"), (0, i.jsxs)(i.Fragment, {
                                    children: ["...", (0, i.jsx)(a.Ay, {
                                        className: "typography-btnLink2 absolute cursor-pointer pt-2xs text-t-Primary underline hover:text-t-TextLink",
                                        onClick: d,
                                        children: n("mini-notification-view-more")
                                    })]
                                })
                            },
                            children: (0, i.jsx)(a.Ay, {
                                className: "relative break-all",
                                children: t
                            })
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.Ay, {
                                className: "break-normal",
                                children: (0, i.jsx)(X.A, {
                                    text: t
                                })
                            }), f]
                        })
                    })
                };
            const ee = (0, s.memo)(J);
            var te = n("wTDt"),
                ne = n("vW+O"),
                re = function(e) {
                    var t = e.title,
                        n = e.time,
                        r = e.read,
                        s = void 0 !== r && r,
                        o = e.link;
                    return (0, i.jsxs)(a.Ay, {
                        className: "flex items-center",
                        children: [(0, i.jsx)(a.Ay, {
                            className: "w-0 min-w-[128px] flex-shrink-0 flex-grow basis-0",
                            children: (0, i.jsx)(a.Ay, {
                                className: "hover-underline typography-subtitle1 truncate text-t-Primary",
                                children: t
                            })
                        }), n ? (0, i.jsx)(a.Ay, {
                            className: "typography-caption1 ml-3xl text-t-Tertiary",
                            children: (0, ne.Yq)(n, "YMDHMS")
                        }) : null, o && (0, i.jsx)(te.A, {
                            name: "ChevronRightF",
                            className: "ml-2xs h-m w-m hover:text-t-Primary ".concat(s ? "text-IconNormal" : "text-t-Tertiary")
                        })]
                    })
                };
            const ie = (0, s.memo)(re);
            var se, oe = n("ezuS"),
                ae = n("BK7R"),
                ce = n("QUKP"),
                le = n("VEmo"),
                ue = n("dO/3"),
                he = n("sGBW"),
                de = n("PzoT"),
                fe = (se = {}, (0, oe.A)(se, le.K.PAIRS, ue.A), (0, oe.A)(se, le.K.TEXT, he.A), (0, oe.A)(se, le.K.IMAGE, de.A), se),
                pe = function(e) {
                    var t = e.blocks,
                        n = e.messageId,
                        r = (0, Q.ok)().t,
                        o = (0, s.useState)(!0),
                        c = o[0],
                        l = o[1],
                        u = (0, s.useState)(""),
                        h = u[0],
                        d = u[1],
                        f = (0, s.useCallback)((function(e) {
                            return e.stopPropagation(), l((function(e) {
                                return !e
                            })), !1
                        }), []),
                        p = (0, s.useMemo)((function() {
                            return (0, i.jsx)(a.Ay, {
                                className: "typography-btnLink2 cursor-pointer pt-2xs text-t-Primary underline",
                                onClick: f,
                                children: r("view-less")
                            })
                        }), []);
                    return (0, i.jsx)(a.Ay, {
                        className: "pt-2xs ".concat(c ? h : ""),
                        children: c ? (0, i.jsx)(Z, {
                            lines: 1,
                            lineHeight: "20px",
                            ellipsis: function(e) {
                                return e.props.children.length < t.length && d("pb-l"), (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)(a.Ay, {
                                        className: "typography-btnLink2 absolute cursor-pointer text-t-Primary underline",
                                        onClick: f,
                                        children: r("mini-notification-view-more")
                                    })
                                })
                            },
                            children: (0, i.jsx)(a.Ay, {
                                className: "relative",
                                children: t.map((function(e, t) {
                                    var r = fe[e.resType];
                                    return (0, i.jsx)(Z.Atom, {
                                        children: (0, i.jsx)(r, (0, ce.A)((0, ae.A)({}, e), {
                                            id: n
                                        }))
                                    }, t)
                                }))
                            })
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [t.map((function(e, t) {
                                var r = fe[e.resType];
                                return (0, i.jsx)(r, (0, ce.A)((0, ae.A)({}, e), {
                                    id: n
                                }), t)
                            })), p]
                        })
                    })
                };
            const me = (0, s.memo)(pe);
            var ye = n("0Pr3"),
                ve = n("aCc/"),
                ge = function(e) {
                    var t, n, s = e.borderBottom,
                        o = void 0 === s || s,
                        l = e.bizScene,
                        u = void 0 === l ? "" : l,
                        h = (0, r.A)(e, ["borderBottom", "bizScene"]),
                        d = (0, ye.q)(),
                        f = (0, c.D)((function() {
                            "function" === typeof h.payload.webLink && ((0, ve.Br)("app_click_notification_".concat(null === u || void 0 === u ? void 0 : u.toLowerCase(), "_list")), h.payload.webLink()), "string" === typeof h.payload.webLink && d(h.payload.webLink)
                        }));
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(a.Ay, {
                            onClick: f,
                            className: "underline-wrapper flex flex-1 cursor-pointer p-xl hover:bg-Vessel",
                            children: ["number" === typeof(null === (t = h.payload) || void 0 === t ? void 0 : t.unreadCount) && (null === (n = h.payload) || void 0 === n ? void 0 : n.unreadCount) > 0 && (0, i.jsx)(a.Ay, {
                                className: "message-unread-dot"
                            }), (0, i.jsxs)(a.Ay, {
                                className: "flex-1",
                                children: [(0, i.jsx)(ie, {
                                    title: h.payload.subject,
                                    read: h.read,
                                    link: h.payload.webLink,
                                    time: h.time
                                }), h.payload.blocks && h.payload.blocks.length > 0 ? (0, i.jsx)(me, {
                                    blocks: h.payload.blocks,
                                    messageId: h.messageId
                                }) : h.payload.content ? (0, i.jsx)(ee, {
                                    content: h.payload.content
                                }) : null]
                            })]
                        }), o ? (0, i.jsx)(a.Ay, {
                            className: "half-pixel-border"
                        }) : null]
                    })
                };
            const be = (0, s.memo)(ge)
        },
        "AK+k": e => {
            e.exports = function(e, t, n) {
                return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
                    return t.toUpperCase()
                }))]
            }
        },
        laCo: (e, t, n) => {
            var r = n("AK+k");
            e.exports = function(e) {
                var t = r(e, "line-height"),
                    n = parseFloat(t, 10);
                if (t === n + "") {
                    var i = e.style.lineHeight;
                    e.style.lineHeight = t + "em", t = r(e, "line-height"), n = parseFloat(t, 10), i ? e.style.lineHeight = i : delete e.style.lineHeight
                }
                if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
                    var s = e.nodeName,
                        o = document.createElement(s);
                    o.innerHTML = "&nbsp;", "TEXTAREA" === s.toUpperCase() && o.setAttribute("rows", "1");
                    var a = r(e, "font-size");
                    o.style.fontSize = a, o.style.padding = "0px", o.style.border = "0px";
                    var c = document.body;
                    c.appendChild(o), n = o.offsetHeight, c.removeChild(o)
                }
                return n
            }
        }
    }
]);
//# debugId=29d32063-cf5b-5936-8cf8-525e2a7a1faa