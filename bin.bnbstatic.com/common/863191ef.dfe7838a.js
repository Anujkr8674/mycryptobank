! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7bc2af24-d8ea-56be-8c0d-d9729b784827")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [558], {
        "cr+I": (e, t, i) => {
            "use strict";
            const n = i("UM5q"),
                r = i("1Fob"),
                o = i("p/97"),
                a = i("c+mU"),
                l = Symbol("encodeFragmentIdentifier");

            function s(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function c(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function u(e, t) {
                return t.decode ? r(e) : e
            }

            function d(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? d(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function f(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function h(e) {
                const t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function v(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function p(e, t) {
                s((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const i = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, i, n) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = i) : n[e] = i
                                };
                            case "bracket":
                                return (e, i, n) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], i) : n[e] = [i] : n[e] = i
                                };
                            case "colon-list-separator":
                                return (e, i, n) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], i) : n[e] = [i] : n[e] = i
                                };
                            case "comma":
                            case "separator":
                                return (t, i, n) => {
                                    const r = "string" === typeof i && i.includes(e.arrayFormatSeparator),
                                        o = "string" === typeof i && !r && u(i, e).includes(e.arrayFormatSeparator);
                                    i = o ? u(i, e) : i;
                                    const a = r || o ? i.split(e.arrayFormatSeparator).map((t => u(t, e))) : null === i ? i : u(i, e);
                                    n[t] = a
                                };
                            case "bracket-separator":
                                return (t, i, n) => {
                                    const r = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !r) return void(n[t] = i ? u(i, e) : i);
                                    const o = null === i ? [] : i.split(e.arrayFormatSeparator).map((t => u(t, e)));
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], o) : n[t] = o
                                };
                            default:
                                return (e, t, i) => {
                                    void 0 !== i[e] ? i[e] = [].concat(i[e], t) : i[e] = t
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" !== typeof e) return n;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (const r of e.split("&")) {
                    if ("" === r) continue;
                    let [e, a] = o(t.decode ? r.replace(/\+/g, " ") : r, "=");
                    a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : u(a, t), i(u(e, t), a, n)
                }
                for (const r of Object.keys(n)) {
                    const e = n[r];
                    if ("object" === typeof e && null !== e)
                        for (const i of Object.keys(e)) e[i] = v(e[i], t);
                    else n[r] = v(e, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
                    const i = n[t];
                    return Boolean(i) && "object" === typeof i && !Array.isArray(i) ? e[t] = d(i) : e[t] = i, e
                }), Object.create(null))
            }
            t.extract = h, t.parse = p, t.stringify = (e, t) => {
                if (!e) return "";
                s((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const i = i => {
                        return t.skipNull && (null === (n = e[i]) || void 0 === n) || t.skipEmptyString && "" === e[i];
                        var n
                    },
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (i, n) => {
                                    const r = i.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : null === n ? [...i, [c(t, e), "[", r, "]"].join("")] : [...i, [c(t, e), "[", c(r, e), "]=", c(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : null === n ? [...i, [c(t, e), "[]"].join("")] : [...i, [c(t, e), "[]=", c(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : null === n ? [...i, [c(t, e), ":list="].join("")] : [...i, [c(t, e), ":list=", c(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return i => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : (r = null === r ? "" : r, 0 === n.length ? [
                                        [c(i, e), t, c(r, e)].join("")
                                    ] : [
                                        [n, c(r, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : null === n ? [...i, c(t, e)] : [...i, [c(t, e), "=", c(n, e)].join("")]
                        }
                    }(t),
                    r = {};
                for (const a of Object.keys(e)) i(a) || (r[a] = e[a]);
                const o = Object.keys(r);
                return !1 !== t.sort && o.sort(t.sort), o.map((i => {
                    const r = e[i];
                    return void 0 === r ? "" : null === r ? c(i, t) : Array.isArray(r) ? 0 === r.length && "bracket-separator" === t.arrayFormat ? c(i, t) + "[]" : r.reduce(n(i), []).join("&") : c(i, t) + "=" + c(r, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [i, n] = o(e, "#");
                return Object.assign({
                    url: i.split("?")[0] || "",
                    query: p(h(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: u(n, t)
                } : {})
            }, t.stringifyUrl = (e, i) => {
                i = Object.assign({
                    encode: !0,
                    strict: !0,
                    [l]: !0
                }, i);
                const n = f(e.url).split("?")[0] || "",
                    r = t.extract(e.url),
                    o = t.parse(r, {
                        sort: !1
                    }),
                    a = Object.assign(o, e.query);
                let s = t.stringify(a, i);
                s && (s = `?${s}`);
                let u = function(e) {
                    let t = "";
                    const i = e.indexOf("#");
                    return -1 !== i && (t = e.slice(i)), t
                }(e.url);
                return e.fragmentIdentifier && (u = `#${i[l]?c(e.fragmentIdentifier,i):e.fragmentIdentifier}`), `${n}${s}${u}`
            }, t.pick = (e, i, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [l]: !1
                }, n);
                const {
                    url: r,
                    query: o,
                    fragmentIdentifier: s
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: r,
                    query: a(o, i),
                    fragmentIdentifier: s
                }, n)
            }, t.exclude = (e, i, n) => {
                const r = Array.isArray(i) ? e => !i.includes(e) : (e, t) => !i(e, t);
                return t.pick(e, r, n)
            }
        },
        "1i6t": (e, t, i) => {
            "use strict";
            i.d(t, {
                y: () => c
            });
            var n = i("BK7R"),
                r = i("QUKP"),
                o = i("gZfF"),
                a = i("VP0d"),
                l = i("DTvD"),
                s = function(e, t) {
                    var i = t.payload;
                    return {
                        update: Date.now(),
                        tickers: Object.keys(i).reduce((function(t, a) {
                            var l = e[a] || {},
                                s = l.eventTime,
                                c = void 0 === s ? 0 : s,
                                u = (0, o.A)(l, ["eventTime"]),
                                d = i[a] || {},
                                f = d.eventTime,
                                h = (0, o.A)(d, ["eventTime"]);
                            return c < f && (t[a] = (0, r.A)((0, n.A)({}, u, h), {
                                eventTime: f
                            })), t
                        }), e.tickers || {})
                    }
                },
                c = function() {
                    var e = {
                            update: Date.now(),
                            tickers: {}
                        },
                        t = (0, a.A)((0, l.useReducer)(s, e), 2);
                    return {
                        value: t[0],
                        dispatch: t[1]
                    }
                }
        },
        "9Ps6": (e, t, i) => {
            "use strict";
            i.d(t, {
                t: () => a
            });
            var n = i("BK7R"),
                r = i("DTvD"),
                o = i("1i6t"),
                a = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3,
                        a = (0, o.y)(),
                        l = a.value,
                        s = a.dispatch,
                        c = (0, r.useCallback)((function(e) {
                            s({
                                payload: e
                            })
                        }), [s]);
                    return (0, r.useEffect)((function() {
                        if (t) return e.getStreamTickers(i).subscribe(c)
                    }), [e, t]), (0, n.A)({}, l)
                }
        },
        qPem: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => o
            });
            i("DTvD");
            var n = i("/OND"),
                r = function(e) {
                    return e.products || {}
                },
                o = function() {
                    return (0, n.d4)(r)
                }
        },
        "6jyQ": (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => q
            });
            var n, r, o, a, l = i("BK7R"),
                s = i("gZfF"),
                c = i("DTvD"),
                u = i.n(c),
                d = i("LCuF"),
                f = i("sViW"),
                h = i("ezuS"),
                v = i("QUKP"),
                p = i("VP0d"),
                y = i("tEf9"),
                x = i("Pz56"),
                g = i.n(x),
                m = i("hTvQ"),
                w = i.n(m),
                b = i("RX+5"),
                A = i.n(b),
                S = i("nnRT"),
                L = i.n(S),
                T = i("LPC+"),
                C = i.n(T),
                k = i("Z3AG"),
                M = i.n(k),
                P = i("Cl8C");

            function E(e) {
                return "string" === typeof e
            }

            function R(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }

            function F(e) {
                return "number" === typeof e
            }

            function I(e, t) {
                var i = parseFloat("".concat(e));
                return isNaN(i) || isNaN(t) ? "NaN" : t <= 0 ? i.toFixed(0) : new(A())(e).toFixed(t)
            }

            function V(e, t, i) {
                var n, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = [20, 50, 100],
                    a = (e - t) / i,
                    l = Math.floor(Math.log10(a) - 1),
                    s = a / (l = Math.pow(10, l)),
                    c = 0;
                for (c = 0; c < o.length; c++)
                    if (o[c] >= s) {
                        n = o[c] * l;
                        break
                    }
                var u = 0,
                    d = 0,
                    f = 0;
                return u = Math.ceil(e / n) * n, d = Math.floor(t / n) * n, (null === r || void 0 === r ? void 0 : r.bottom) && (u += .99 * n), (null === r || void 0 === r ? void 0 : r.top) && (f = .5 * n, d -= .5 * n), {
                    max: u,
                    min: d,
                    step: n,
                    startStep: f
                }
            }

            function D() {
                return window.devicePixelRatio || 1
            }

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g,
                    i = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
                return t.test(e) || i.test(e)
            }

            function N() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = "".concat(t, "px sans-serif");
                if (!a) {
                    var r = document.createElement("canvas");
                    a = r.getContext("2d")
                }
                a.font = n;
                var o = Math.round(a.measureText(e.trim()).width);
                return i > 1 ? Math.round(o / i) * i : o
            }

            function H(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.style && Object.keys(t).forEach((function(i) {
                    e.style[i] = t[i]
                }))
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e && Object.keys(t).forEach((function(i) {
                    e[i] = t[i]
                }))
            }

            function G(e, t, i) {
                var n = D(),
                    r = e.getContext("2d");
                e.style.width = "".concat(t, "px"), e.style.height = "".concat(i, "px"), e.width = t * n, e.height = i * n, null === r || void 0 === r || r.scale(n, n), r.font = "12px sans-serif"
            }

            function B(e) {
                if (e.length < 1) return [];
                e.unshift(e[0]), e.push(e[e.length - 1], e[e.length - 1]);
                for (var t = [], i = 1; i < e.length - 2; i++) t.push({
                    dx: e[i].x,
                    dy: e[i].y,
                    cpx1: e[i].x + (e[i + 1].x - e[i - 1].x) / 4,
                    cpy1: e[i].y + (e[i + 1].y - e[i - 1].y) / 4,
                    cpx2: e[i + 1].x - (e[i + 2].x - e[i].x) / 4,
                    cpy2: e[i + 1].y - (e[i + 2].y - e[i].y) / 4
                });
                return t
            }

            function z(e, t, i, n, r, o) {
                var a = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                    l = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
                    s = a ? o : 0,
                    c = l ? o : 0;
                e.beginPath(), e.moveTo(t, i + s), e.arc(t + s, i + s, s, Math.PI, 1.5 * Math.PI), e.lineTo(t + n - s, i), e.arc(t + n - s, i + s, s, 1.5 * Math.PI, 2 * Math.PI), e.lineTo(t + n, i + r - c), e.arc(t + n - c, i + r - c, c, 0, .5 * Math.PI), e.lineTo(t + c, i + r), e.arc(t + c, i + r - c, c, .5 * Math.PI, Math.PI), e.closePath()
            }! function(e) {
                e[e.Circle = 0] = "Circle", e[e.Line = 1] = "Line", e[e.Path = 2] = "Path", e[e.Rect = 3] = "Rect", e[e.RoundRect = 4] = "RoundRect", e[e.Text = 5] = "Text", e[e.Area = 6] = "Area", e[e.ImageLayer = 7] = "ImageLayer", e[e.GroupLayer = 8] = "GroupLayer", e[e.Axis = 9] = "Axis"
            }(n || (n = {})),
            function(e) {
                e.Line = "LINE", e.Bar = "BAR", e.Area = "AREA"
            }(r || (r = {})),
            function(e) {
                e.Line = "LINE", e.DottedLine = "DOTTED-LINE", e.Shadow = "SHADOW", e.Cross = "CROSS", e.Snap = "SNAP"
            }(o || (o = {}));
            var W = '<svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.6096 30L6.83425 36.7383L0 30L6.83425 23.2031L13.6096 30ZM30.165 13.5352L41.8303 25.1367L48.6646 18.3398L30.165 0L11.6654 18.3984L18.4996 25.1953L30.165 13.5352ZM53.4957 23.2031L46.7203 30L53.5546 36.7969L60.3888 30L53.4957 23.2031ZM30.165 46.4648L18.4996 34.8047L11.6654 41.6016L30.165 60L48.6646 41.6016L41.8303 34.8047L30.165 46.4648ZM30.165 36.7383L36.9992 29.9414L30.165 23.2031L23.3307 30L30.165 36.7383ZM102.042 37.4414V37.3242C102.042 32.9297 99.6858 30.7031 95.8562 29.2383C98.2129 27.9492 100.216 25.8398 100.216 22.1484V22.0312C100.216 16.875 96.033 13.5352 89.3166 13.5352H73.9395V46.4062H89.6701C97.1524 46.4648 102.042 43.418 102.042 37.4414ZM92.9694 23.3789C92.9694 25.8398 90.9662 26.8359 87.7258 26.8359H81.0094V19.8633H88.1972C91.2608 19.8633 92.9694 21.0938 92.9694 23.2617V23.3789ZM94.7957 36.5039C94.7957 38.9648 92.8515 40.0781 89.6701 40.0781H81.0094V32.8711H89.4344C93.1461 32.8711 94.7957 34.2188 94.7957 36.4453V36.5039ZM117.302 46.4648V13.5352H109.996V46.4062H117.302V46.4648ZM156.422 46.4648V13.5352H149.234V33.8086L133.739 13.5352H127.023V46.4062H134.211V25.5469L150.236 46.4648H156.422ZM196.72 46.4648L182.522 13.3594H175.805L161.606 46.4648H169.089L172.093 39.082H186.057L189.061 46.4648H196.72ZM183.464 32.6953H174.686L179.104 22.0312L183.464 32.6953ZM231.422 46.4648V13.5352H224.234V33.8086L208.739 13.5352H202.023V46.4062H209.211V25.5469L225.236 46.4648H231.422ZM268.951 41.1328L264.297 36.5039C261.705 38.8477 259.407 40.3711 255.577 40.3711C249.921 40.3711 245.974 35.6836 245.974 30.0586V29.8828C245.974 24.2578 249.98 19.6289 255.577 19.6289C258.877 19.6289 261.469 21.0352 264.061 23.3203L268.716 17.9883C265.652 15 261.94 12.8906 255.695 12.8906C245.562 12.8906 238.433 20.5664 238.433 29.8828V30C238.433 39.4336 245.679 46.9336 255.401 46.9336C261.764 46.9922 265.534 44.7656 268.951 41.1328ZM300 46.4648V40.0195H282.031V33.1055H297.643V26.6602H282.031V19.9805H299.764V13.5352H274.843V46.4062H300V46.4648Z" fill="#1E2329"/>\n</svg>\n',
                _ = '<svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M13.6096 30L6.83425 36.7383L0 30L6.83425 23.2031L13.6096 30ZM30.165 13.5352L41.8303 25.1367L48.6646 18.3398L30.165 0L11.6654 18.3984L18.4996 25.1953L30.165 13.5352ZM53.4957 23.2031L46.7203 30L53.5546 36.7969L60.3888 30L53.4957 23.2031ZM30.165 46.4648L18.4996 34.8047L11.6654 41.6016L30.165 60L48.6646 41.6016L41.8303 34.8047L30.165 46.4648ZM30.165 36.7383L36.9992 29.9414L30.165 23.2031L23.3307 30L30.165 36.7383ZM102.042 37.4414V37.3242C102.042 32.9297 99.6858 30.7031 95.8562 29.2383C98.2129 27.9492 100.216 25.8398 100.216 22.1484V22.0312C100.216 16.875 96.033 13.5352 89.3166 13.5352H73.9395V46.4062H89.6701C97.1524 46.4648 102.042 43.418 102.042 37.4414ZM92.9694 23.3789C92.9694 25.8398 90.9662 26.8359 87.7258 26.8359H81.0094V19.8633H88.1972C91.2608 19.8633 92.9694 21.0938 92.9694 23.2617V23.3789ZM94.7957 36.5039C94.7957 38.9648 92.8515 40.0781 89.6701 40.0781H81.0094V32.8711H89.4344C93.1461 32.8711 94.7957 34.2188 94.7957 36.4453V36.5039ZM117.302 46.4648V13.5352H109.996V46.4062H117.302V46.4648ZM156.422 46.4648V13.5352H149.234V33.8086L133.739 13.5352H127.023V46.4062H134.211V25.5469L150.236 46.4648H156.422ZM196.72 46.4648L182.522 13.3594H175.805L161.606 46.4648H169.089L172.093 39.082H186.057L189.061 46.4648H196.72ZM183.464 32.6953H174.686L179.104 22.0312L183.464 32.6953ZM231.422 46.4648V13.5352H224.234V33.8086L208.739 13.5352H202.023V46.4062H209.211V25.5469L225.236 46.4648H231.422ZM268.951 41.1328L264.297 36.5039C261.705 38.8477 259.407 40.3711 255.577 40.3711C249.921 40.3711 245.974 35.6836 245.974 30.0586V29.8828C245.974 24.2578 249.98 19.6289 255.577 19.6289C258.877 19.6289 261.469 21.0352 264.061 23.3203L268.716 17.9883C265.652 15 261.94 12.8906 255.695 12.8906C245.562 12.8906 238.433 20.5664 238.433 29.8828V30C238.433 39.4336 245.679 46.9336 255.401 46.9336C261.764 46.9922 265.534 44.7656 268.951 41.1328ZM300 46.4648V40.0195H282.031V33.1055H297.643V26.6602H282.031V19.9805H299.764V13.5352H274.843V46.4062H300V46.4648Z" fill="#EAECEF"/>\n</svg>\n',
                U = new Map;

            function Z(e) {
                var t, i = function(e) {
                        var t = D();
                        e.scale(t, t), j(e, {
                            font: "12px sans-serif"
                        })
                    },
                    a = function(e, t) {
                        if (qe.has(e)) return qe.get(e);
                        var i = document.createElement("canvas"),
                            n = i.getContext("2d");
                        return t(i, n), qe.set(e, i), i
                    },
                    s = function(e, t, i) {
                        var n, r;
                        U.has(e) ? n = null === (r = U.get(e)) || void 0 === r ? void 0 : r.image : ((n = i ? new Image(i.width, i.height) : new Image).src = t, U.set(e, {
                            url: t,
                            image: n
                        }));
                        return new Promise((function(e, t) {
                            n.complete ? e(n) : (n.onload = function() {
                                e(n)
                            }, n.onerror = function(e) {
                                t(e)
                            })
                        }))
                    },
                    c = function() {
                        qe.clear()
                    },
                    d = function() {
                        return ze.visible && ze.isLeft ? ze.width : 0
                    },
                    x = function() {
                        return ze.visible && ze.isLeft ? 0 : He - ze.width
                    },
                    m = function(e) {
                        return -(e - ze.minValue) / (ze.maxValue - ze.minValue) * (je - Be.height)
                    },
                    b = function(e) {
                        return ze.maxValue - e / (je - Be.height) * (ze.maxValue - ze.minValue)
                    },
                    A = function() {
                        return F(Be.boundaryGap) && Be.boundaryGap > 0
                    },
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = k(),
                            n = t && ze.isLeft ? ze.width : 0;
                        return (n += A() ? Be.boundaryGap : Be.boundaryGap ? .5 * i : 0) + e * i
                    },
                    T = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = k(),
                            n = t && ze.isLeft ? ze.width : 0;
                        return n += A() ? Be.boundaryGap : Be.boundaryGap ? .5 * i : 0, Math.round((e - n) / i)
                    },
                    k = function() {
                        var e = q(),
                            t = Be.data,
                            i = t.length - 1;
                        return A() && (e -= 2 * Be.boundaryGap), !A() && Be.boundaryGap && (i = t.length), i > 0 ? e / i : 0
                    },
                    Z = function() {
                        return Be.visible ? je - Be.height : je
                    },
                    q = function() {
                        return He - ze.width
                    },
                    K = function() {
                        return ze.isLeft ? ze.width : 0
                    },
                    $ = function() {
                        return ze.isLeft ? He : q()
                    },
                    Y = function(e, t) {
                        return e - t <= 0
                    },
                    X = function(e, t) {
                        return e + t > q()
                    },
                    Q = function(e, t) {
                        return e - t <= 0
                    },
                    J = function(e) {
                        var t = d();
                        return e > t && e <= t + q()
                    },
                    ee = function(e) {
                        return e < Z() && e >= 0
                    },
                    te = function(e, t) {
                        if (R(Be.splitInterval)) return Be.splitInterval(Be.data[e], e, Be.data);
                        var i = F(Be.splitInterval) ? Be.splitInterval : Be.tickInterval;
                        return void 0 !== t && t >= i
                    },
                    ie = function(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        var r;
                        return ze.formmat ? (r = ze).formmat.apply(r, [e].concat((0, y.A)(i))) : I(e, ze.tickSize)
                    },
                    ne = function(e) {
                        var t = E(Be.formmat) ? function(e) {
                            return function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD hh:mm:ss";
                                try {
                                    var i = new Date(e),
                                        n = {
                                            "M+": i.getMonth() + 1,
                                            "D+": i.getDate(),
                                            "h+": i.getHours(),
                                            "m+": i.getMinutes(),
                                            "s+": i.getSeconds()
                                        };
                                    return /(Y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(i.getFullYear()).substr(4 - RegExp.$1.length))), Object.keys(n).forEach((function(e) {
                                        if (new RegExp("(".concat(e, ")")).test(t)) {
                                            var i = n[e];
                                            t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i : "00".concat(i).substr("".concat(i).length))
                                        }
                                    })), t
                                } catch (r) {
                                    return console.error(r.message), e
                                }
                            }(e, Be.formmat)
                        } : Be.formmat;
                        return t(Be.data[e], e, Be.data)
                    },
                    re = function(t, i) {
                        var n = e.getBoundingClientRect(),
                            r = n.width,
                            o = n.height;
                        t = t || r, i = i || o;
                        var a = D();
                        De.width = Ie.width = t * a, De.height = Ie.height = i * a, He = t, je = i
                    },
                    oe = function(e) {
                        Ne.style.display = e ? "block" : "none"
                    },
                    ae = function(e) {
                        var t = D();
                        e.clearRect(0, 0, He * t, je * t)
                    },
                    le = function() {
                        var e, t = function() {
                                for (var e = [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], t = e[0], i = e[1], n = 0, r = Ue.length; n < r; n++) {
                                    var o = Ue[n].data,
                                        a = void 0 === o ? [] : o;
                                    t = Math.max(t, C()(a)), i = Math.min(i, M()(a))
                                }
                                if (Math.abs(t - i) <= Math.pow(10, -ze.tickSize)) {
                                    var l = 0 === t ? 10 : Math.abs(t),
                                        s = Math.floor(Math.log(l) / Math.log(10)),
                                        c = Math.pow(10, s) / 2;
                                    t += c, i -= c
                                }
                                return {
                                    max: t,
                                    min: i
                                }
                            }(),
                            i = t.max,
                            n = t.min;
                        if (ze.ticks = function(e, t) {
                                var i = Be.visible ? je - Be.height : je,
                                    n = Math.floor(i / ze.tickInterval),
                                    r = F(ze.min) ? ze.min : t,
                                    o = F(ze.max) ? ze.max : e + (e - r) / i * 16,
                                    a = Math.abs(o - r),
                                    l = V(o + .01 * a, r - .01 * a, n, null === ze || void 0 === ze ? void 0 : ze.parallel),
                                    s = l.max,
                                    c = l.min,
                                    u = l.step,
                                    d = l.startStep;
                                ze.minValue = F(ze.min) && (ze.min < c || 0 === ze.min) ? ze.min : c, ze.maxValue = F(ze.max) && ze.max > s ? ze.max : s;
                                for (var f = [], h = c + d; h - s < 1e-8;) h >= ze.minValue && ze.minValue <= ze.maxValue && f.push({
                                    p: m(h) - 5,
                                    v: h
                                }), h += u;
                                return f
                            }(i, n), "function" === typeof(null === ze || void 0 === ze ? void 0 : ze.onTicksChange) && (null === (e = ze.onTicksChange) || void 0 === e || e.call(ze, ze.ticks)), ze.visible) {
                            var r, o = (0, y.A)(null !== (r = null === ze || void 0 === ze ? void 0 : ze.ticks) && void 0 !== r ? r : []),
                                a = (0, y.A)((null === ze || void 0 === ze ? void 0 : ze.parallel) ? function(e, t, i, n, r) {
                                    for (var o, a, l = r ? n - Be.height : n, s = Math.floor(l / i), c = Math.abs(e - t), u = V(e + .01 * c, t - .01 * c, s, {
                                            top: null === ze || void 0 === ze || null === (o = ze.parallel) || void 0 === o ? void 0 : o.bottom,
                                            bottom: null === ze || void 0 === ze || null === (a = ze.parallel) || void 0 === a ? void 0 : a.top
                                        }), d = u.max, f = u.min, h = u.step, v = [], p = f + u.startStep; p - d < 1e-8;) p >= t && t <= e && v.push({
                                        p: m(p),
                                        v: p
                                    }), p += h;
                                    return v
                                }(ze.parallel.max, null === ze || void 0 === ze ? void 0 : ze.parallel.min, null === ze || void 0 === ze ? void 0 : ze.parallel.interval, null === ze || void 0 === ze ? void 0 : ze.parallel.height, null === ze || void 0 === ze ? void 0 : ze.parallel.xAxisVisible) : []),
                                l = (0, y.A)(o.map((function(e) {
                                    var t = e.v;
                                    return N("".concat(ie(t)), Ze.fontSize, 1)
                                }))).concat((0, y.A)(a.map((function(e) {
                                    var t, i = e.v;
                                    return N("".concat((null === ze || void 0 === ze || null === (t = ze.parallel) || void 0 === t ? void 0 : t.formatter) ? null === ze || void 0 === ze ? void 0 : ze.parallel.formatter(i) : ie(i)), Ze.fontSize, 1)
                                }))));
                            ze.width = l.length > 0 ? Math.ceil(C()(l)) + 10 : 0
                        } else ze.width = 0
                    },
                    se = function() {
                        if (Ze.xAxisLayers.length = 0, !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) || Ze.isShowGrid) {
                            var e = function() {
                                for (var e, t, i = Be.data, n = i.length, r = 0, o = -Number.MAX_SAFE_INTEGER, a = [], l = 0; l < n; l++) {
                                    var s = S(l);
                                    e = l, t = s - o, (F(Be.tickInterval) ? t >= Be.tickInterval : R(Be.tickInterval) && Be.tickInterval(i[e], e, i)) && (0 === r && s > 1e-5 && (r = s - o), o = s, a.push({
                                        index: l,
                                        p: o
                                    }))
                                }
                                return a
                            }();
                            if (!(e.length <= 0)) {
                                var t, i, r, o, a, s, c, u, d, f = 10,
                                    h = {
                                        strokeStyle: Ze.gridLineColor,
                                        fillStyle: null !== (i = null !== (t = Ze.gridAxisTextColor) && void 0 !== t ? t : Ze.tickTextColor) && void 0 !== i ? i : Ze.timeTextColor,
                                        textAlign: "center",
                                        textBaseline: "top",
                                        font: "".concat(null !== (r = Be.fontSize) && void 0 !== r ? r : "12", "px ").concat(null !== (o = Be.fontStyle) && void 0 !== o ? o : "sans-serif")
                                    },
                                    p = {
                                        type: n.GroupLayer,
                                        layers: [],
                                        isStroke: !1,
                                        isFill: !1,
                                        style: (0, l.A)({}, h)
                                    },
                                    y = {
                                        type: n.GroupLayer,
                                        layers: [],
                                        isStroke: !0,
                                        isFill: !1,
                                        style: (0, v.A)((0, l.A)({}, h), {
                                            fillStyle: null !== (a = Ze.gridAxisTextColor) && void 0 !== a ? a : Ze.tickTextColor,
                                            strokeStyle: null !== (s = Ze.gridAxisTextColor) && void 0 !== s ? s : Ze.tickTextColor
                                        })
                                    },
                                    x = {
                                        type: n.GroupLayer,
                                        layers: [],
                                        isStroke: !0,
                                        isFill: !1,
                                        style: (0, v.A)((0, l.A)({}, h), {
                                            fillStyle: null !== (c = Ze.gridLineColor) && void 0 !== c ? c : Ze.tickTextColor
                                        })
                                    },
                                    g = m(ze.maxValue),
                                    w = m(ze.minValue),
                                    b = e[0],
                                    A = ne(b.index);
                                if (!ze.isLeft && b.p - .5 * N(A, 10, 1) < 0) !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Ze.xAxisLayers.push({
                                    type: n.Text,
                                    x: b.p,
                                    y: f + (null !== (u = null === Be || void 0 === Be ? void 0 : Be.axisGap) && void 0 !== u ? u : 0),
                                    text: A,
                                    style: (0, v.A)((0, l.A)({}, h), {
                                        textAlign: "left"
                                    })
                                }), !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Be.showAxis && y.layers.push({
                                    type: n.Line,
                                    x1: b.p,
                                    y1: 8,
                                    x2: b.p,
                                    y2: 2,
                                    width: 1
                                });
                                else !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && p.layers.push({
                                    type: n.Text,
                                    x: b.p,
                                    y: f + (null !== (d = null === Be || void 0 === Be ? void 0 : Be.axisGap) && void 0 !== d ? d : 0),
                                    text: A
                                }), !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Be.showAxis && y.layers.push({
                                    type: n.Line,
                                    x1: b.p,
                                    y1: 8,
                                    x2: b.p,
                                    y2: 2,
                                    width: 1
                                });
                                Ze.isShowGrid && Be.showYGrid && x.layers.push({
                                    type: n.Line,
                                    x1: b.p,
                                    y1: w - 1.5,
                                    x2: b.p,
                                    y2: g,
                                    width: 1
                                });
                                for (var L = 1; L < e.length - 1; L++) {
                                    var T, C = e[L],
                                        k = C.p,
                                        M = C.index;
                                    !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && p.layers.push({
                                        type: n.Text,
                                        x: k,
                                        y: f + (null !== (T = null === Be || void 0 === Be ? void 0 : Be.axisGap) && void 0 !== T ? T : 0),
                                        text: ne(M)
                                    }), Ze.isShowGrid && Be.showYGrid && x.layers.push({
                                        type: n.Line,
                                        x1: k,
                                        y1: w - 1.5,
                                        x2: k,
                                        y2: g,
                                        width: 1
                                    }), !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Be.showAxis && y.layers.push({
                                        type: n.Line,
                                        x1: k,
                                        y1: 8,
                                        x2: k,
                                        y2: 2,
                                        width: 1
                                    })
                                }
                                var P, E, I = e[e.length - 1],
                                    V = ne(I.index);
                                if (Ze.xAxisLayers.push(p), .5 * N("".concat(V), 10, 1) + I.p > q()) !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Ze.xAxisLayers.push({
                                    type: n.Text,
                                    x: I.p,
                                    y: f + (null !== (P = null === Be || void 0 === Be ? void 0 : Be.axisGap) && void 0 !== P ? P : 0),
                                    text: V,
                                    style: (0, v.A)((0, l.A)({}, h), {
                                        textAlign: "right"
                                    })
                                }), !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Be.showAxis && y.layers.push({
                                    type: n.Line,
                                    x1: I.p + .5,
                                    y1: 8,
                                    x2: I.p + .5,
                                    y2: 2,
                                    width: 1
                                });
                                else !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && p.layers.push({
                                    type: n.Text,
                                    x: I.p,
                                    y: f + (null !== (E = null === Be || void 0 === Be ? void 0 : Be.axisGap) && void 0 !== E ? E : 0),
                                    text: V
                                }), !1 !== (null === Be || void 0 === Be ? void 0 : Be.visible) && Be.showAxis && y.layers.push({
                                    type: n.Line,
                                    x1: I.p + .5,
                                    y1: 8,
                                    x2: I.p + .5,
                                    y2: 2,
                                    width: 1
                                });
                                Ze.isShowGrid && Be.showYGrid && x.layers.push({
                                    type: n.Line,
                                    x1: I.p,
                                    y1: w - 1.5,
                                    x2: I.p,
                                    y2: g,
                                    width: 1
                                }), Ze.xAxisLayers.push(y), Ze.xAxisLayers.push(x)
                            }
                        }
                    },
                    ce = function(e, t) {
                        if (We.isTrigger) {
                            var i = null !== e && void 0 !== e ? e : {},
                                n = i.offsetX,
                                r = i.offsetY;
                            if (ae(Oe), !Be.data || 0 === Ue.length || !t && 0 !== t && (!J(n) || !ee(r))) return oe(!1), void(We.onRender && We.onRender(void 0));
                            oe(!0);
                            var a, l = (null === t || void 0 === t ? void 0 : t.index) || 0 === (null === t || void 0 === t ? void 0 : t.index) ? null === t || void 0 === t ? void 0 : t.index : T(n, !0),
                                s = null !== (a = null === t || void 0 === t ? void 0 : t.offsetX) && void 0 !== a ? a : S(l, !0),
                                c = Ue.filter((function(e) {
                                    return !e.hideTooltip
                                })).map((function(e) {
                                    var t = e.data,
                                        i = e.histBase,
                                        n = m(t[l]);
                                    return F(i) ? Math.min(m(i), n) + Z() : n + Z()
                                })),
                                u = M()(c);
                            if (!t && 0 !== t && We.onRender) {
                                var d = !isNaN(l) && (u || 0 === u) && ee(u) && J(s);
                                We.onRender(d ? {
                                    index: l,
                                    offsetX: n
                                } : void 0)
                            }
                            if (void 0 !== u) {
                                var f, v, p, y, x;
                                if (t || 0 === t) u = (null === ze || void 0 === ze || null === (f = ze.parallel) || void 0 === f ? void 0 : f.bottom) ? u - (null !== (y = null === ze || void 0 === ze || null === (v = ze.parallel) || void 0 === v ? void 0 : v.height) && void 0 !== y ? y : 0) : u + (null !== (x = null === ze || void 0 === ze || null === (p = ze.parallel) || void 0 === p ? void 0 : p.height) && void 0 !== x ? x : 0);
                                var g, w = ie(b(u)),
                                    A = N("".concat(w), ze.fontSize, 5),
                                    L = We.type.toUpperCase(),
                                    C = (g = {}, (0, h.A)(g, o.Cross, ve.bind(null, s, u, r, l)), (0, h.A)(g, o.DottedLine, de.bind(null, s, u, l)), (0, h.A)(g, o.Line, ue.bind(null, s, u, l)), (0, h.A)(g, o.Shadow, fe.bind(null, s, u, l)), (0, h.A)(g, o.Snap, pe.bind(null, s, u, l, t || 0 === t, .5 * (ze.width - A))), g);
                                We.hoverBarColor && he(l);
                                var k = C[L];
                                k && k()
                            }
                        }
                    },
                    ue = function(e, t, i) {
                        We.isShowHoverLine && (Oe.strokeStyle = We.lineColor, Oe.lineWidth = 2, Oe.beginPath(), Oe.moveTo(e, 0), Oe.lineTo(e, Z()), Oe.stroke()), Ye(e, t), Ae(e, t, i)
                    },
                    de = function(e, t, i) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        We.isShowHoverLine && (Oe.setLineDash([2, 2]), j(Oe, {
                            strokeStyle: We.lineColor,
                            lineWidth: 1
                        }), Oe.beginPath(), Oe.moveTo(e, 0), Oe.lineTo(e, Z()), Oe.stroke()), We.isShowHoverCrossPoint && ye(e, t), Ye(e, t), Ae(e, t, i, n, r)
                    },
                    fe = function(e, t, i) {
                        if (We.isShowHoverLine) {
                            Oe.fillStyle = We.shadowColor;
                            var n = k() * We.shadowWeight,
                                r = e - .5 * n;
                            Oe.fillRect(r, 0, n, Z())
                        }
                        Ye(e, t), Ae(e, t, i)
                    },
                    he = function(e) {
                        Oe.save(), Oe.translate(d(), je - Be.height), Ue.filter((function(e) {
                            return e.type.toUpperCase() === r.Bar
                        })).forEach((function(t) {
                            var i = t.data,
                                n = t.histBase,
                                r = t.barWeight,
                                o = void 0 === r ? .8 : r,
                                a = t.maxBarWidth,
                                l = S(e),
                                s = m(i[e]),
                                c = Te(n),
                                u = Math.max(Math.abs(s - c), .5),
                                d = k() * o,
                                f = .5 * (F(a) && a > 0 ? Math.min(d, a) : d),
                                h = E(null === We || void 0 === We ? void 0 : We.hoverBarColor) ? We.hoverBarColor : We.hoverBarColor(i[e], e, i);
                            Oe.fillStyle = h, Ee(Oe, s <= c ? {
                                x: l - f,
                                y: s,
                                width: 2 * f,
                                height: u,
                                isFill: !0
                            } : {
                                x: l - f,
                                y: c,
                                width: 2 * f,
                                height: u,
                                isFill: !0
                            })
                        })), Oe.restore()
                    },
                    ve = function(e, t, i, n) {
                        We.isShowHoverLine && (Oe.setLineDash([3, 3]), j(Oe, {
                            strokeStyle: We.crossLineColor
                        }), Oe.beginPath(), Oe.moveTo(K(), i), Oe.lineTo($(), i), Oe.moveTo(e, 0), Oe.lineTo(e, Z()), Oe.stroke(), ye(e, i)), We.isShowAxisLabel && xe(e, i), Ye(e, i), Ae(e, t, n)
                    },
                    pe = function(e, t, i) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        We.isShowHoverLine && (Oe.setLineDash([3, 3]), j(Oe, {
                            strokeStyle: We.crossLineColor,
                            lineWidth: We.lineWidth || 2
                        }), Oe.beginPath(), Oe.moveTo(K(), t), Oe.lineTo($(), t), Oe.moveTo(e, 0), Oe.lineTo(e, Z()), Oe.stroke()), We.isShowHoverCrossPoint && ye(e, t), Ye(e, t), Ae(e, t, i, n, r)
                    },
                    ye = function(e, t) {
                        var i = We.hoverCrossPointColor || "#F0B90B",
                            n = We.hoverCrossPointRadius || 4,
                            r = We.hoverCrossPointOffset || 6,
                            o = n + r,
                            l = a("s-".concat(i, "-r").concat(n, "-o-").concat(r), (function(e, t) {
                                t.save(), G(e, 2 * o, 2 * o), t.fillStyle = i, t.globalAlpha = .3, t.arc(o, o, o, 0, 2 * Math.PI), t.fill(), t.globalAlpha = 1, t.beginPath(), t.arc(o, o, n, 0, 2 * Math.PI), t.fill(), t.restore()
                            }));
                        Oe.drawImage(l, e - o, t - o, 2 * o, 2 * o)
                    },
                    xe = function(e, t) {
                        var i = T(e, !0),
                            n = ne(i),
                            r = ie(b(t)),
                            o = 8,
                            a = Z(),
                            l = N("".concat(n), Be.fontSize, 5),
                            s = l + 2 * o,
                            c = 24;
                        Oe.fillStyle = Ze.labelBg;
                        var u = e - .5 * s;
                        if (Y(e, .5 * s) ? u = e : X(e, .5 * s) && (u = e - s), z(Oe, u, a, s, c, 4), Oe.fill(), j(Oe, {
                                textAlign: "center",
                                textBaseline: "middle",
                                fillStyle: Ze.labelColor
                            }), Oe.fillText(n, u + .5 * s, a + .5 * c), ze.visible) {
                            l = N("".concat(r), ze.fontSize, 5), o = .5 * (ze.width - l), s = ze.width, c = 24, Oe.fillStyle = Ze.labelBg;
                            var d = Q(t, .5 * c) ? t : t - .5 * c;
                            z(Oe, x(), d, s, c, 4), Oe.fill(), j(Oe, {
                                textAlign: "left",
                                textBaseline: "middle",
                                fillStyle: Ze.labelColor
                            }), Oe.fillText(r, x() + o, d + .5 * c)
                        }
                    },
                    ge = function(e, t) {
                        var i = D(),
                            n = Be.formmatTooltip ? Be.formmatTooltip(Be.data[e], e, Be.data) : ne(e),
                            r = t.reduce((function(e, t) {
                                return "".concat(e, "-c-").concat(t.color, "-n-$").concat(t.label, "-v-").concat(t.value)
                            }), "".concat(n, "-").concat(We.isShowLegend)),
                            o = a("l-".concat(r), (function(e, i) {
                                e.setAttribute("class", "tooltip-content");
                                var r = 12,
                                    o = t.map((function(e) {
                                        return N(e.label, r, 5)
                                    })),
                                    a = C()(o) || 0,
                                    l = t.map((function(e) {
                                        var t = e.label,
                                            i = e.value;
                                        return a + N("".concat(i), r, 5) + (t ? 8 : 0)
                                    })),
                                    s = Math.max(C()(l) || 1, N(n, r, 1)),
                                    c = s + 16 + (We.isShowLegend ? 14 : 0),
                                    u = 18,
                                    d = l.length * u + 16,
                                    f = -1,
                                    h = n ? 4 : 0;
                                n && (d += h + u, f += u), G(e, c, d), i.font = "".concat(r, "px sans-serif"), i.save(), i.fillStyle = Ze.labelBg, z(i, 0, 0, c, d, 4), i.fill(), i.restore(), j(i, {
                                    fillStyle: Ze.labelColor,
                                    textBaseline: "middle",
                                    textAlign: "left"
                                }), n && i.fillText(n, 8, f);
                                var v = 8 + (We.isShowLegend ? 14 : 0),
                                    p = 0;
                                t.forEach((function(e, t) {
                                    var n = e.label,
                                        o = e.color;
                                    p = n ? Math.max(N(n, r) + 8, p) : p;
                                    var a = f + u * (t + 1) + h;
                                    if (We.isShowLegend) {
                                        var l = Le(3, o, "", 0),
                                            s = l.cacheCanvas,
                                            c = l.w,
                                            d = l.h;
                                        i.drawImage(s, 8, a - .5 * d, c, d)
                                    }
                                    i.fillText(n, v, a)
                                }));
                                var y = v + p;
                                t.forEach((function(e, t) {
                                    var n = e.value;
                                    i.fillText(n, y, f + u * (t + 1) + h)
                                }))
                            }));
                        return {
                            cacheCanvas: o,
                            w: o.width / i,
                            h: o.height / i
                        }
                    },
                    me = function(e) {
                        var t = D(),
                            i = e.reduce((function(e, t) {
                                return "".concat(e, "-").concat(t.color, "-").concat(t.name, "-").concat(t.type)
                            }), ""),
                            n = Math.ceil(He),
                            r = a("".concat(i), (function(t, i) {
                                for (var r = 1, o = 0, a = 0, l = 0; l < e.length; l++) {
                                    var s = N(e[l].name, 12),
                                        c = s + 20 + 4;
                                    e[l].textWidth = s, e[l].itemWidth = c, e[l].isWrap = 0 === l, a + c + 24 >= n && (a = 0, r++, e[l].isWrap = !0), a += 0 === a ? c : c + 24, o = Math.max(o, c, a)
                                }
                                G(t, o, 16 * r), i.save(), j(i, {
                                    font: "".concat(12, "px sans-serif"),
                                    textAlign: "left",
                                    textBaseline: "middle"
                                });
                                var u = 0,
                                    d = 0;
                                e.forEach((function(e, t) {
                                    var n = e.color,
                                        r = e.name,
                                        o = e.lineWidth,
                                        a = e.type,
                                        l = e.isWrap,
                                        s = e.textWidth;
                                    i.fillStyle = Ze.timeTextColor, l && (d += 0 === t ? 8 : 16, u = 0);
                                    var c = we(20, 10, n, o, a).cacheCanvas;
                                    i.drawImage(c, u, d - 5, 20, 10), u += 24, i.fillText(r, u, d), u += s + 24
                                })), i.restore()
                            }));
                        return {
                            cacheCanvas: r,
                            w: r.width / t,
                            h: r.height / t
                        }
                    },
                    we = function(e, t, i, n, r) {
                        var o = "w-".concat(e, "-h-").concat(t, "-c-").concat(i, "-t-").concat(r),
                            l = a(o, (function(o, a) {
                                if (G(o, e, t), "rect" === r) a.fillStyle = i, a.fillRect(0, 0, e, t);
                                else if ("line" === r) {
                                    a.strokeStyle = i, a.lineWidth = n;
                                    var l = Ze.circleRadius;
                                    a.moveTo(0, .5 * t), a.lineTo(.5 * e - l, .5 * t), a.stroke(), a.beginPath(), a.arc(.5 * e, .5 * t, l, 0, 2 * Math.PI), a.stroke(), a.beginPath(), a.moveTo(.5 * e + l, .5 * t), a.lineTo(e, .5 * t), a.stroke()
                                }
                            }));
                        return {
                            cacheCanvas: l,
                            w: l.width / devicePixelRatio,
                            h: l.height / devicePixelRatio
                        }
                    },
                    be = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
                            n = D(),
                            r = a("".concat(e, "-l-").concat(i, "-c-").concat(t), (function(n, r) {
                                var o = (0, p.A)("left" === e || "right" === e ? [i, 2 * i] : [2 * i, i], 2),
                                    a = o[0],
                                    l = o[1];
                                r.save(), G(n, a, l);
                                var s = [];
                                "right" === e ? s.push({
                                    x: 0,
                                    y: 0
                                }, {
                                    x: 0,
                                    y: l
                                }, {
                                    x: a,
                                    y: .5 * l
                                }) : "top" === e ? s.push({
                                    x: 0,
                                    y: l
                                }, {
                                    x: a,
                                    y: l
                                }, {
                                    x: .5 * a,
                                    y: 0
                                }) : "left" === e ? s.push({
                                    x: 0,
                                    y: .5 * l
                                }, {
                                    x: a,
                                    y: 0
                                }, {
                                    x: a,
                                    y: l
                                }) : s.push({
                                    x: 0,
                                    y: 0
                                }, {
                                    x: .5 * a,
                                    y: l
                                }, {
                                    x: a,
                                    y: 0
                                });
                                for (var c = 0; c < s.length; c++) 0 === c ? r.moveTo(s[c].x, s[c].y) : r.lineTo(s[c].x, s[c].y);
                                r.closePath(), r.fillStyle = t, r.fill(), r.restore()
                            }));
                        return {
                            cacheCanvas: r,
                            w: r.width / n,
                            h: r.height / n
                        }
                    },
                    Ae = function(e, t, i) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            a = Ue.map((function(e) {
                                var t = e.type,
                                    n = e.name,
                                    o = e.data,
                                    a = e.color,
                                    l = void 0 === a ? Ze.mainLineColor : a,
                                    s = e.barColor,
                                    c = void 0 === s ? Ze.mainBarColor : s,
                                    u = e.borderColor,
                                    d = e.formmatTooltip,
                                    f = l;
                                return t.toUpperCase() === r.Bar ? f = R(c) ? c(o[i], i, o) : c : t.toUpperCase() === r.Area && (f = u || (Array.isArray(l) ? l[0][1] : l)), {
                                    color: f,
                                    label: n,
                                    value: d ? d(o[i], i, o) : ie(o[i], i, o)
                                }
                            }));
                        if (We.render && R(We.render)) w().render(u().createElement(u().Fragment, null, We.render({
                            left: e,
                            top: t,
                            xValue: ne(i),
                            labels: a,
                            isParrallel: n,
                            yOffset: o
                        }, i)), Ne);
                        else {
                            var l = ge(i, a),
                                s = l.cacheCanvas,
                                c = l.w,
                                d = l.h;
                            if (We.isFloat) {
                                Ne.innerHTML = "";
                                var f = K(),
                                    h = $(),
                                    v = e,
                                    p = We.isFixTop ? -6 : t - 8;
                                e - .5 * c < f ? v = f + .5 * c : e + .5 * c > h && (v = h - .5 * c), H(s, {
                                    position: "absolute",
                                    left: "".concat(v - 8, "px"),
                                    top: "".concat(p - 8, "px"),
                                    transform: "translate(-50%, -100%)"
                                });
                                var y = document.createElement("div");
                                H(y, {
                                    position: "absolute",
                                    left: "".concat(e, "px"),
                                    top: "".concat(p - 8, "px"),
                                    transform: "translateX(-50%)",
                                    borderWidth: "6px 6px 0",
                                    borderColor: "transparent",
                                    borderTopColor: Ze.labelBg,
                                    borderStyle: "solid"
                                }), Ne.append(s, y)
                            } else {
                                var x = 6,
                                    g = c + x,
                                    m = d + x,
                                    b = 8,
                                    A = b,
                                    S = .5 * -d,
                                    L = [0, 0, 0],
                                    T = [0, 0, 0];
                                if (J(e + b) && J(e + b + g) && (A = b, L[0] = 1), J(e - .5 * c) && J(e + .5 * c) && (A = .5 * -c, L[1] = 1), J(e - b - g) && J(e - b) && (A = -c - b, L[2] = 1), ee(t - b - m) && ee(t - b) && (T[0] = 1), ee(t - .5 * d) && ee(t + .5 * d) && (T[1] = 1), ee(t + b) && ee(t + b + m) && (T[2] = 1), 1 === T[0] && 1 === L[1]) {
                                    if (A = .5 * -c, S = -m - b, We.arrow) {
                                        var C = be("bottom", Ze.labelBg, x),
                                            k = C.cacheCanvas,
                                            M = C.w,
                                            P = C.h;
                                        Oe.drawImage(k, e - .5 * M, t - b - P, M, P)
                                    }
                                } else if (1 === T[1] && 1 === L[0]) {
                                    if (A = x + b, S = .5 * -d, We.arrow) {
                                        var E = be("left", Ze.labelBg, x),
                                            F = E.cacheCanvas,
                                            I = E.w,
                                            V = E.h;
                                        Oe.drawImage(F, e + b, t - .5 * V, I, V)
                                    }
                                } else if (1 === T[2] && 1 === L[1]) {
                                    if (A = .5 * -c, S = b + x, We.arrow) {
                                        var D = be("top", Ze.labelBg, x),
                                            O = D.cacheCanvas,
                                            N = D.w,
                                            j = D.h;
                                        Oe.drawImage(O, e - .5 * N, t + b, N, j)
                                    }
                                } else if (1 === T[1] && 1 === L[2]) {
                                    if (A = -g - b, S = .5 * -d, We.arrow) {
                                        var G = be("right", Ze.labelBg, x),
                                            B = G.cacheCanvas,
                                            z = G.w,
                                            W = G.h;
                                        Oe.drawImage(B, e - b - z, t - .5 * W, z, W)
                                    }
                                } else 1 === T[0] && 1 === L[0] ? (A = b, S = -d - b) : 1 === T[0] && 1 === L[2] ? (A = -c - b, S = -d - b) : 1 === T[2] && 1 === L[2] ? (A = -c - b, S = b) : 1 === T[2] && 1 === L[0] ? (A = b, S = b) : (L.includes(1) || (A = -e), S = -t);
                                Oe.drawImage(s, e + A, t + S, c, d)
                            }
                        }
                    },
                    Se = function(e) {
                        var t = e.data,
                            i = void 0 === t ? [] : t,
                            r = e.isCurve,
                            o = void 0 !== r && r,
                            c = e.color,
                            u = void 0 === c ? Ze.mainLineColor : c,
                            d = e.isShowMarker,
                            f = void 0 === d || d,
                            h = e.icon,
                            p = e.iconSize,
                            x = void 0 === p ? {
                                width: 1,
                                height: 1
                            } : p,
                            g = e.lineWidth,
                            w = void 0 === g ? 2 : g,
                            b = e.isShowMaxMin,
                            A = void 0 !== b && b,
                            L = {
                                strokeStyle: u,
                                lineWidth: w,
                                fillStyle: Ze.bg
                            },
                            T = {
                                type: n.GroupLayer,
                                layers: [],
                                isStroke: !0,
                                isFill: !1,
                                style: L,
                                zIndex: 100
                            },
                            C = i.map((function(e, t) {
                                return {
                                    x: S(t),
                                    y: m(e)
                                }
                            })),
                            k = -Number.MAX_SAFE_INTEGER,
                            M = {
                                type: n.GroupLayer,
                                layers: [],
                                isStroke: !0,
                                isFill: !1,
                                style: {
                                    fillStyle: Ze.bg,
                                    strokeStyle: u,
                                    lineWidth: w
                                },
                                zIndex: 500
                            },
                            P = o ? B(C) : C;
                        if (T.layers.push({
                                type: n.Path,
                                data: P,
                                isCurve: o
                            }), f)
                            for (var E = function(e) {
                                    var t = o ? P[e].dx : P[e].x,
                                        r = o ? P[e].dy : P[e].y;
                                    if (te(e, t - k)) {
                                        if (h) {
                                            var l = R(x) ? x(i[e], e, i) : x,
                                                c = R(h) ? h(i[e], e, i) : h,
                                                u = "img-".concat(c, "-w-").concat(l.width, "-h-").concat(l.height);
                                            qe.has(u) ? M.layers.push({
                                                type: n.ImageLayer,
                                                x: t,
                                                y: r,
                                                image: qe.get(u),
                                                width: l.width || 0,
                                                height: l.height || 0
                                            }) : a(u, (function(e, t) {
                                                G(e, l.width, l.height), s(c, c, l).then((function(e) {
                                                    t.drawImage(e, 0, 0), Fe()
                                                }))
                                            }))
                                        } else M.layers.push({
                                            type: n.Circle,
                                            x: t,
                                            y: r,
                                            radius: Ze.circleRadius
                                        });
                                        k = t
                                    }
                                }, F = 0; F < P.length; F++) E(F);
                        if (Ze.mainLayers.push(T, M), A) {
                            var I = 14,
                                V = [],
                                D = [];
                            if (i.forEach((function(e, t) {
                                    var i, n; + e === +(null !== (i = ze.max) && void 0 !== i ? i : 0) && V.push(t), +e === +(null !== (n = ze.min) && void 0 !== n ? n : 0) && D.push(t)
                                })), !(1 === V.length && 1 === D.length && V[0] === D[0])) {
                                var O, H, j = [];
                                V.forEach((function(e) {
                                    var t, i, r = {
                                            type: n.Text,
                                            layers: [],
                                            style: {
                                                strokeStyle: Ze.gridLineColor,
                                                fillStyle: Ze.isLight ? "#202630" : "#EAECEF",
                                                font: "".concat(null !== (t = ze.fontSize) && void 0 !== t ? t : "12", "px Binance PLEX")
                                            },
                                            zIndex: 600,
                                            text: ie(null !== (i = ze.max) && void 0 !== i ? i : 0),
                                            x: 0,
                                            y: 0
                                        },
                                        a = {
                                            x: e > -1 ? o ? P[e].dx : P[e].x : 0,
                                            y: e > -1 ? o ? P[e].dy : P[e].y : 0,
                                            tw: N("".concat(r.text), 14, 2),
                                            th: 0
                                        },
                                        s = a.tw;
                                    Y(a.x, s) ? a.tw = a.x + 4 + .5 * s : X(a.x, s) ? a.tw = a.x - s : a.tw = a.x - .5 * s, a.th = Q(a.y, 7) || Math.abs(a.y - 7) > Z() ? Math.abs(a.y) >= Z() ? a.y + I : a.y + 7 : a.y - 7, r = (0, v.A)((0, l.A)({}, r), {
                                        x: a.tw,
                                        y: a.th - 16
                                    }), (!j.length || j.length && j[j.length - 1] && !Y(j[j.length - 1].x, r.x) && X(j[j.length - 1].x, r.x)) && j.push(r)
                                })), (O = Ze.mainLayers).push.apply(O, (0, y.A)(j));
                                var z = [];
                                D.forEach((function(e) {
                                    var t, i, r = {
                                            type: n.Text,
                                            layers: [],
                                            style: {
                                                strokeStyle: Ze.gridLineColor,
                                                fillStyle: Ze.isLight ? "#202630" : "#EAECEF",
                                                font: "".concat(null !== (t = ze.fontSize) && void 0 !== t ? t : "12", "px Binance PLEX")
                                            },
                                            zIndex: 600,
                                            text: ie(null !== (i = ze.min) && void 0 !== i ? i : 0),
                                            x: 0,
                                            y: 0
                                        },
                                        a = {
                                            x: e > -1 ? o ? P[e].dx : P[e].x : 0,
                                            y: e > -1 ? o ? P[e].dy : P[e].y : 0,
                                            tw: N("".concat(r.text), 14, 2),
                                            th: 0
                                        },
                                        s = a.tw;
                                    a.th = a.y - I <= 0 ? a.y + 7 : a.y - I, Y(a.x, s) ? a.tw = a.x + 4 + .5 * s : X(a.x, s) ? a.tw = a.x - s : a.tw = a.x - .5 * s, r = (0, v.A)((0, l.A)({}, r), {
                                        x: a.tw,
                                        y: a.th + 16
                                    }), (!z.length || z.length && z[z.length - 1] && !Y(z[z.length - 1].x, r.x) && X(z[z.length - 1].x, r.x)) && z.push(r)
                                })), (H = Ze.mainLayers).push.apply(H, (0, y.A)(z))
                            }
                        }
                    },
                    Le = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            r = 2 * (e + n),
                            o = r,
                            l = a("r-".concat(e, "-f-").concat(t, "-b-").concat(i, "-bw-").concat(n), (function(a, l) {
                                G(a, r, o), l.save(), l.beginPath(), j(l, {
                                    fillStyle: t,
                                    strokeStyle: i,
                                    lineWidth: n
                                }), l.arc(.5 * r, .5 * o, e, 0, 2 * Math.PI), l.fill(), n > 0 && l.stroke(), l.restore()
                            }));
                        return {
                            cacheCanvas: l,
                            w: r,
                            h: o
                        }
                    },
                    Te = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NaN;
                        m(ze.minValue);
                        return ze.maxValue >= e && ze.minValue <= e ? m(e) : e > ze.maxValue ? m(ze.maxValue) : m(ze.minValue)
                    },
                    Ce = function(e) {
                        var t = e.data,
                            i = void 0 === t ? [] : t,
                            n = e.histBase,
                            r = void 0 === n ? NaN : n,
                            o = e.barWeight,
                            a = void 0 === o ? .8 : o,
                            l = e.maxBarWidth,
                            s = e.isShowValue,
                            c = void 0 !== s && s,
                            u = e.barColor,
                            d = void 0 === u ? Ze.mainBarColor : u,
                            f = e.textColor,
                            h = void 0 === f ? Ze.mainTextColor : f,
                            v = e.barRadius,
                            p = void 0 === v ? 0 : v,
                            y = Te(r),
                            x = k() * a,
                            g = F(l) && l > 0 ? Math.min(x, l) : x;
                        if (E(d)) Me({
                            data: i,
                            color: d,
                            zeroY: y,
                            isShowValue: c,
                            textColor: h,
                            barWidth: g,
                            barRadius: p
                        });
                        else if (R(d)) {
                            var m = i.reduce((function(e, t, i, n) {
                                var r = d(t, i, n);
                                return e[r] ? e[r].push(i) : e[r] = [i], e
                            }), {});
                            Object.keys(m).forEach((function(e) {
                                Me({
                                    data: i,
                                    zeroY: y,
                                    isShowValue: c,
                                    textColor: h,
                                    color: e,
                                    barWidth: g,
                                    barRadius: p
                                }, m[e])
                            }))
                        }
                    },
                    ke = function(e, t) {
                        var i = t.data,
                            r = void 0 === i ? [] : i,
                            o = t.color,
                            a = void 0 === o ? "" : o,
                            s = t.isCurve,
                            c = void 0 !== s && s,
                            u = t.isShowBorder,
                            d = void 0 !== u && u,
                            f = t.isShowMarker,
                            h = void 0 !== f && f,
                            y = t.borderColor,
                            x = void 0 === y ? "" : y,
                            g = t.lineWidth,
                            w = void 0 === g ? 1 : g,
                            b = t.isShowMaxMin,
                            A = void 0 !== b && b;
                        if (0 !== r.length) {
                            var L = r.map((function(e, t) {
                                    return {
                                        x: S(t),
                                        y: m(e)
                                    }
                                })),
                                T = {
                                    strokeStyle: x,
                                    lineWidth: w
                                };
                            if (E(a)) T.fillStyle = a;
                            else if (Array.isArray(a)) {
                                var C = M()(L.map((function(e) {
                                    return e.y
                                })));
                                if (void 0 !== C) {
                                    var P = e.createLinearGradient(0, C, 0, 0);
                                    a.forEach((function(e) {
                                        var t = (0, p.A)(e, 2),
                                            i = t[0],
                                            n = t[1];
                                        P.addColorStop(i, n)
                                    })), T.fillStyle = P
                                }
                            }
                            var R = c ? B(L) : L,
                                F = {
                                    type: n.GroupLayer,
                                    layers: [],
                                    isStroke: !1,
                                    isFill: !1,
                                    style: T
                                },
                                I = {
                                    type: n.GroupLayer,
                                    layers: [],
                                    isStroke: !1,
                                    isFill: !1
                                };
                            if (h)
                                for (var V = -Number.MAX_SAFE_INTEGER, D = Le(Ze.circleRadius, Ze.bg, x, w), O = D.cacheCanvas, H = D.w, j = D.h, G = 0; G < R.length; G++) {
                                    var z = c ? R[G].dx : R[G].x,
                                        W = c ? R[G].dy : R[G].y;
                                    te(G, z - V) && (I.layers.push({
                                        type: n.ImageLayer,
                                        x: z - .5 * H,
                                        y: W - .5 * j,
                                        width: H,
                                        height: j,
                                        image: O
                                    }), V = z)
                                }
                            var _ = {
                                    type: n.Text,
                                    layers: [],
                                    style: {
                                        fillStyle: Ze.isLight ? "#202630" : "#EAECEF",
                                        font: "14px Binance PLEX"
                                    },
                                    zIndex: 600,
                                    text: ie(ze.maxValue),
                                    x: 0,
                                    y: 0
                                },
                                U = {
                                    type: n.Text,
                                    layers: [],
                                    style: {
                                        fillStyle: Ze.isLight ? "#202630" : "#EAECEF",
                                        font: "14px Binance PLEX"
                                    },
                                    zIndex: 600,
                                    text: ie(ze.minValue),
                                    x: 0,
                                    y: 0
                                },
                                K = !1,
                                $ = !1,
                                J = !1;
                            if (A) {
                                var ee, ne, re = 14,
                                    oe = r.findIndex((function(e) {
                                        return +e === +(null !== (ee = ze.max) && void 0 !== ee ? ee : ze.maxValue)
                                    })),
                                    ae = r.findIndex((function(e) {
                                        return +e === +(null !== (ne = ze.min) && void 0 !== ne ? ne : ze.minValue)
                                    }));
                                $ = oe < 0, J = ae < 0;
                                var le = {
                                        x: oe > -1 ? c ? R[oe].dx : R[oe].x : 0,
                                        y: oe > -1 ? c ? R[oe].dy : R[oe].y : 0,
                                        tw: N("".concat(_.text), 16, 5),
                                        th: 0
                                    },
                                    se = {
                                        x: ae > -1 ? c ? R[ae].dx : R[ae].x : 0,
                                        y: ae > -1 ? c ? R[ae].dy : R[ae].y : 0,
                                        tw: N("".concat(U.text), 16, 5),
                                        th: 0
                                    },
                                    ce = le.tw + 16,
                                    ue = se.tw + 16;
                                K = +ze.maxValue === +ze.minValue, Y(le.x, .5 * ce) ? le.tw = le.x + 4 + .5 * ce : X(le.x, .5 * ce) ? le.tw = le.x - ce : le.tw = le.x - ce - 4, le.th = Q(le.y, 7) || Math.abs(le.y - 7) > Z() ? Math.abs(le.y) >= Z() ? le.y + re : le.y + 7 : le.y - 7, se.th = se.y - re <= 0 ? se.y + 7 : se.y - re, Y(se.x, .5 * ue) ? se.tw = se.x + 4 + .5 * ue : X(se.x, .5 * ue) ? se.tw = se.x - ue : se.tw = se.x - ue - 4, _ = (0, v.A)((0, l.A)({}, _), {
                                    x: le.tw,
                                    y: le.th
                                }), U = (0, v.A)((0, l.A)({}, U), {
                                    x: se.tw,
                                    y: se.th
                                })
                            }
                            var de = k(),
                                fe = Be.boundaryGap ? [{
                                    x: q() - .5 * de,
                                    y: 0
                                }, {
                                    x: .5 * de,
                                    y: 0
                                }] : [{
                                    x: q(),
                                    y: 0
                                }, {
                                    x: 0,
                                    y: 0
                                }];
                            F.layers.push({
                                type: n.Area,
                                data: [{
                                    data: R,
                                    isCurve: c
                                }, {
                                    data: fe,
                                    isCurve: !1
                                }],
                                isFill: !0,
                                isStroke: !1
                            }), d && F.layers.push({
                                type: n.Path,
                                data: R,
                                isCurve: c,
                                isFill: !1,
                                isStroke: !0
                            }), Ze.mainLayers.push(F), A && !$ && Ze.mainLayers.push(_), A && !K && !J && Ze.mainLayers.push(U), h && Ze.mainLayers.push(I)
                        }
                    },
                    Me = function(e, t) {
                        for (var i = e.data, r = e.zeroY, o = e.isShowValue, a = e.textColor, l = e.color, s = e.barWidth, c = e.barRadius, u = {
                                type: n.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: l
                                }
                            }, d = {
                                type: n.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: a,
                                    textAlign: "center",
                                    textBaseline: "bottom"
                                }
                            }, f = {
                                type: n.GroupLayer,
                                layers: [],
                                isStroke: !1,
                                isFill: !0,
                                style: {
                                    fillStyle: a,
                                    textAlign: "center",
                                    textBaseline: "top"
                                }
                            }, h = .5 * s, v = t || i, p = 0; p < v.length; p++) {
                            var y = t ? t[p] : p,
                                x = S(y),
                                g = i[y],
                                w = m(g),
                                b = Math.abs(w - r),
                                A = g >= 0,
                                L = g < 0,
                                T = c;
                            (b = Math.max(b, .5)) < 2 * c && (T = b / 2), g >= 0 ? (u.layers.push({
                                type: n.RoundRect,
                                x: x - h,
                                y: r - b,
                                width: 2 * h,
                                height: b,
                                isFill: !0,
                                radius: T,
                                hasBottomRadius: !1,
                                hasTopRadius: A
                            }), d.layers.push({
                                type: n.Text,
                                x: x,
                                y: r - b - 3,
                                text: ie(g)
                            })) : (u.layers.push({
                                type: n.RoundRect,
                                x: x - h,
                                y: r,
                                width: 2 * h,
                                height: b,
                                isFill: !0,
                                radius: T,
                                hasBottomRadius: L,
                                hasTopRadius: !1
                            }), f.layers.push({
                                type: n.Text,
                                x: x,
                                y: r + b + 3,
                                text: ie(g)
                            }))
                        }
                        Ze.mainLayers.push(u), o && Ze.mainLayers.push(d, f)
                    },
                    Pe = function(e, t) {
                        t.sort((function(e, t) {
                            return (e.zIndex || 0) - (t.zIndex || 0)
                        }));
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i],
                                r = Ke[n.type];
                            r && (j(e, n.style), n.isStroke && n.lineDash && e.setLineDash(n.lineDash), r(e, n))
                        }
                    },
                    Ee = function(e, t) {
                        var i = t.x,
                            n = void 0 === i ? 0 : i,
                            r = t.y,
                            o = void 0 === r ? 0 : r,
                            a = t.width,
                            l = void 0 === a ? 0 : a,
                            s = t.height,
                            c = void 0 === s ? 0 : s,
                            u = t.isStroke,
                            d = t.isFill;
                        u && e.strokeRect(n, o, l, c), d && e.fillRect(n, o, l, c)
                    },
                    Re = function(e, t) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            n = t.data,
                            r = void 0 === n ? [] : n,
                            o = t.isStroke,
                            a = t.isCurve,
                            l = void 0 !== a && a;
                        if (i && e.beginPath(), l)
                            for (var s = 0; s < r.length; s++) {
                                var c = r[s],
                                    u = r[s - 1];
                                0 === s ? e.moveTo(c.dx, c.dy) : e.bezierCurveTo(u.cpx1, u.cpy1, u.cpx2, u.cpy2, c.dx, c.dy)
                            } else
                                for (var d = 0; d < r.length; d++) {
                                    var f = r[d],
                                        h = f.x,
                                        v = f.y;
                                    0 === d && i ? e.moveTo(h, v) : e.lineTo(h, v)
                                }
                        o && e.stroke()
                    },
                    Fe = function() {
                        Ge && cancelAnimationFrame(Ge), Ge = requestAnimationFrame((function() {
                            var e;
                            (ae(Ve), ae(Oe), Be.data.length <= 0) || (Ve.save(), (e = Oe).resetTransform ? e.resetTransform() : e.setTransform(1, 0, 0, 1, 0, 0), i(Ve), Ve.fillStyle = Ze.bg, Ve.fillRect(0, 0, He, je), Ze.isShowLogo && function(e) {
                                $e.apply(this, arguments)
                            }(Ve), i(Oe), Be.height = _e.show && !_e.container ? 60 : (null === Be || void 0 === Be ? void 0 : Be.axisGap) && (null === Be || void 0 === Be ? void 0 : Be.axisGap) > 24 ? (null === Be || void 0 === Be ? void 0 : Be.axisGap) + 10 : (null === Be || void 0 === Be ? void 0 : Be.axisGap) && (null === Be || void 0 === Be ? void 0 : Be.axisGap) >= 10 ? 32 : 24, function() {
                                var e;
                                if (le(), Ze.yAxisLayers.length = 0, Ze.isShowGrid || ze.visible) {
                                    var t = "left",
                                        i = 0,
                                        r = 5,
                                        o = -(He - ze.width);
                                    ze.showAxis && (r = 10);
                                    var a, s, c, u = ze.isFloate ? ze.width : 0;
                                    ze.visible && ze.isLeft && (t = "right", i = ze.width, r = -5, o = He, u = ze.isFloate ? 0 : ze.width, ze.showAxis && (r = -10));
                                    var f, h, p, y = {
                                            strokeStyle: Ze.gridLineColor,
                                            fillStyle: null !== (a = Ze.gridAxisTextColor) && void 0 !== a ? a : Ze.tickTextColor,
                                            textAlign: t,
                                            textBaseline: ze.isFloate ? "bottom" : "middle",
                                            font: "".concat(null !== (s = ze.fontSize) && void 0 !== s ? s : "12", "px ").concat(null !== (c = ze.fontStyle) && void 0 !== c ? c : "sans-serif")
                                        },
                                        x = {
                                            type: n.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: y
                                        },
                                        g = {
                                            type: n.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: (0, v.A)((0, l.A)({}, y), {
                                                fillStyle: null !== (f = Ze.gridAxisTextColor) && void 0 !== f ? f : Ze.tickTextColor,
                                                strokeStyle: null !== (h = Ze.gridAxisTextColor) && void 0 !== h ? h : Ze.tickTextColor
                                            })
                                        },
                                        w = {
                                            type: n.GroupLayer,
                                            layers: [],
                                            isStroke: !0,
                                            isFill: !1,
                                            style: (0, v.A)((0, l.A)({}, y), {
                                                fillStyle: null !== (p = Ze.gridLineColor) && void 0 !== p ? p : Ze.tickTextColor
                                            })
                                        },
                                        b = ze.ticks,
                                        A = Z();
                                    if (ze.showAxis && Ze.yAxisLayers.push({
                                            type: n.Axis,
                                            x1: d(),
                                            x2: d(),
                                            y2: -He,
                                            y1: 2.5,
                                            width: 1
                                        }), null === ze || void 0 === ze || null === (e = ze.parallel) || void 0 === e ? void 0 : e.showTop) {
                                        var S = m(ze.maxValue);
                                        Ze.yAxisLayers.push({
                                            type: n.Axis,
                                            x1: -He,
                                            x2: u + ze.width,
                                            y2: S,
                                            y1: S,
                                            width: 1
                                        })
                                    }
                                    if (null === Be || void 0 === Be ? void 0 : Be.showAxis) {
                                        var L = m(ze.minValue);
                                        Ze.yAxisLayers.push({
                                            type: n.Axis,
                                            x1: -He,
                                            x2: u,
                                            y2: L + 2,
                                            y1: L + 2,
                                            width: 1
                                        })
                                    }
                                    for (var T = 0, C = b.length; T < C; T++) {
                                        var k = b[T],
                                            M = k.p,
                                            P = k.v;
                                        if (Ze.isShowGrid && w.layers.push({
                                                type: n.Line,
                                                x1: o,
                                                y1: M,
                                                x2: u,
                                                y2: M,
                                                width: 1
                                            }), ze.showAxis && g.layers.push({
                                                type: n.Line,
                                                x1: u,
                                                y1: M,
                                                x2: u + 6,
                                                y2: M,
                                                width: 1
                                            }), Math.abs(M) >= A - 2) {
                                            if (ze.isFloate) break;
                                            M += .5 * Ze.fontSize
                                        }
                                        ze.visible && x.layers.push({
                                            type: n.Text,
                                            x: i + r,
                                            y: M,
                                            text: ie(P)
                                        })
                                    }
                                    Ze.yAxisLayers.push(x), Ze.yAxisLayers.push(g), Ze.yAxisLayers.push(w)
                                }
                            }(), Ve.save(), Ve.translate(x(), Z()), Pe(Ve, Ze.yAxisLayers), Ve.restore(), se(), Ve.save(), Ve.translate(d(), Z()), Pe(Ve, Ze.xAxisLayers), Ve.restore(), function() {
                                Ze.mainLayers.length = 0;
                                for (var e = 0; e < Ue.length; e++) {
                                    var t = Ue[e],
                                        i = t.type.toUpperCase();
                                    i === r.Line ? Se(t) : i === r.Bar ? Ce(t) : i === r.Area && ke(Ve, t)
                                }
                            }(), Ve.save(), Ve.translate(d(), Be.visible ? je - Be.height : je), Pe(Ve, Ze.mainLayers), Ve.restore(), function() {
                                if (_e.show) {
                                    var e = Ue.map((function(e) {
                                            var t = e.color,
                                                i = e.name,
                                                n = e.lineWidth;
                                            return {
                                                color: t,
                                                name: i,
                                                lineWidth: void 0 === n ? 2 : n,
                                                type: "line"
                                            }
                                        })),
                                        t = me(e),
                                        i = t.cacheCanvas,
                                        n = t.w,
                                        r = t.h;
                                    _e.container ? (_e.container.innerHTML = "", _e.container.appendChild(i)) : Ve.drawImage(i, .5 * He - .5 * n, je - r, n, r)
                                }
                            }(), Ve.restore(), Ge = 0)
                        }))
                    },
                    Ie = document.createElement("canvas"),
                    Ve = Ie.getContext("2d"),
                    De = document.createElement("canvas"),
                    Oe = De.getContext("2d"),
                    Ne = document.createElement("div"),
                    He = 0,
                    je = 0,
                    Ge = 0,
                    Be = {
                        data: [],
                        formmat: function(e) {
                            return "".concat(e)
                        },
                        boundaryGap: !0,
                        tickInterval: 70,
                        fontSize: 12,
                        height: 24
                    },
                    ze = {
                        tickSize: 2,
                        isLeft: !1,
                        visible: !0,
                        isFloate: !1,
                        fontSize: 12,
                        ticks: [],
                        width: 0,
                        tickInterval: 40,
                        maxValue: 0,
                        minValue: 0
                    },
                    We = {
                        isTrigger: !0,
                        isFloat: !1,
                        isFixTop: !0,
                        type: o.Cross,
                        arrow: !0,
                        lineColor: "rgba(0, 0, 0, 0.05)",
                        crossLineColor: "#F0B90B",
                        shadowColor: "rgba(0, 0, 0, 0.05)",
                        shadowWeight: .8,
                        isShowAxisLabel: !0,
                        isShowHoverLine: !0,
                        isShowHoverCrossPoint: !0,
                        isShowLegend: !0,
                        lineWidth: 2
                    },
                    _e = {
                        show: !1
                    },
                    Ue = [],
                    Ze = {
                        gridLineColor: "#EDEDED",
                        tickTextColor: "#76808F",
                        timeTextColor: "#76808F",
                        mainLineColor: "#F0B90B",
                        mainBarColor: "#02C076",
                        mainTextColor: "#474D57",
                        labelBg: "rgba(0, 0, 0, 0.75)",
                        labelColor: "#FFFFFF",
                        bg: "#ffffff",
                        fontSize: 12,
                        circleRadius: 2,
                        xAxisLayers: [],
                        yAxisLayers: [],
                        mainLayers: [],
                        isShowGrid: !0,
                        isShowLogo: !1,
                        isLight: !0
                    },
                    qe = new Map,
                    Ke = (t = {}, (0, h.A)(t, n.Circle, (function(e, t) {
                        e.beginPath();
                        var i = t.x,
                            n = void 0 === i ? 0 : i,
                            r = t.y,
                            o = void 0 === r ? 0 : r,
                            a = t.radius,
                            l = void 0 === a ? 0 : a,
                            s = t.isStroke,
                            c = void 0 === s || s,
                            u = t.isFill,
                            d = void 0 === u || u;
                        e.arc(n, o, l, 0, 2 * Math.PI), d && e.fill(), c && e.stroke()
                    })), (0, h.A)(t, n.Rect, Ee), (0, h.A)(t, n.RoundRect, (function(e, t) {
                        var i = t.x,
                            n = void 0 === i ? 0 : i,
                            r = t.y,
                            o = void 0 === r ? 0 : r,
                            a = t.width,
                            l = void 0 === a ? 0 : a,
                            s = t.height,
                            c = void 0 === s ? 0 : s,
                            u = t.hasTopRadius,
                            d = void 0 === u || u,
                            f = t.hasBottomRadius,
                            h = void 0 === f || f,
                            v = t.isStroke,
                            p = t.isFill,
                            y = t.radius;
                        z(e, n, o, l, c, void 0 === y ? 0 : y, d, h), v && e.stroke(), p && e.fill()
                    })), (0, h.A)(t, n.Line, (function(e, t) {
                        var i = t.x1,
                            n = void 0 === i ? 0 : i,
                            r = t.y1,
                            o = void 0 === r ? 0 : r,
                            a = t.x2,
                            l = void 0 === a ? 0 : a,
                            s = t.y2,
                            c = void 0 === s ? 0 : s,
                            u = t.isStroke;
                        e.moveTo(n, o), e.lineTo(l, c), t.width && (e.lineWidth = t.width), u && e.stroke()
                    })), (0, h.A)(t, n.Axis, (function(e, t) {
                        var i = t.x1,
                            n = void 0 === i ? 0 : i,
                            r = t.y1,
                            o = void 0 === r ? 0 : r,
                            a = t.x2,
                            l = void 0 === a ? 0 : a,
                            s = t.y2,
                            c = void 0 === s ? 0 : s;
                        e.strokeStyle = Ze.gridAxisColor, e.lineWidth = 1, e.moveTo(n, o), e.lineTo(l, c), e.stroke()
                    })), (0, h.A)(t, n.Path, Re), (0, h.A)(t, n.Area, (function(e, t) {
                        var i = t.isFill,
                            n = void 0 === i || i;
                        e.beginPath();
                        for (var r = t.data, o = void 0 === r ? [] : r, a = 0; a < o.length; a++) {
                            var l = o[a],
                                s = l.data,
                                c = l.isCurve;
                            Re(e, {
                                isStroke: !1,
                                data: s,
                                isCurve: c
                            }, !1)
                        }
                        e.closePath(), n && e.fill()
                    })), (0, h.A)(t, n.Text, (function(e, t) {
                        var i = t.x,
                            n = void 0 === i ? 0 : i,
                            r = t.y,
                            o = void 0 === r ? 0 : r,
                            a = t.text,
                            l = void 0 === a ? "" : a,
                            s = t.style,
                            c = void 0 === s ? {} : s;
                        c.fillStyle && (e.fillStyle = c.fillStyle), c.font && (e.font = c.font), e.fillText(l, n, o)
                    })), (0, h.A)(t, n.ImageLayer, (function(e, t) {
                        var i = t.x,
                            n = void 0 === i ? 0 : i,
                            r = t.y,
                            o = void 0 === r ? 0 : r,
                            a = t.width,
                            l = void 0 === a ? 0 : a,
                            s = t.height,
                            c = void 0 === s ? 0 : s,
                            u = t.image;
                        u && e.drawImage(u, n - .5 * l, o - .5 * c, l, c)
                    })), (0, h.A)(t, n.GroupLayer, (function(e, t) {
                        e.beginPath();
                        for (var i = t.layers, n = void 0 === i ? [] : i, r = t.isStroke, o = void 0 !== r && r, a = t.isFill, l = void 0 !== a && a, s = 0; s < n.length; s++) {
                            var c = n[s],
                                u = Ke[c.type];
                            u && u(e, c)
                        }
                        o && e.stroke(), l && e.fill()
                    })), t);

                function $e() {
                    return ($e = (0, f.A)(g().mark((function e(t) {
                        var i, n, r, o, a, l;
                        return g().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = D(), n = 300 * i, r = 60 * i, o = Ze.isLight ? W : _, a = URL.createObjectURL(new Blob([o], {
                                        type: "image/svg+xml"
                                    })), e.next = 7, s(o, a);
                                case 7:
                                    (l = e.sent) && (t.save(), t.globalAlpha = .04, t.drawImage(l, He * i * .5 - .5 * n, je * i * .5 - .5 * r, n, r), t.restore());
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ye(e, t) {
                    var i = We.crossIcon,
                        n = We.crossIconSize,
                        r = void 0 === n ? {
                            width: 16,
                            height: 16
                        } : n;
                    if (i) {
                        var o = "img-".concat(i, "-w-").concat(r.width, "-h-").concat(r.height);
                        if (qe.has(o)) {
                            var l = qe.get(o);
                            Oe.drawImage(l, e - .5 * r.width, t - .5 * r.height, r.width, r.width)
                        } else a(o, function() {
                            var e = (0, f.A)(g().mark((function e(t, n) {
                                var o;
                                return g().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return G(t, r.width, r.height), e.next = 3, s(i, i, r);
                                        case 3:
                                            o = e.sent, n.drawImage(o, 0, 0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, i) {
                                return e.apply(this, arguments)
                            }
                        }()), Ye(e, t)
                    }
                }
                return function() {
                    if (e) {
                        var t = {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                        };
                        H(Ie, t), H(De, t), H(Ne), e.appendChild(Ie), e.appendChild(De), e.appendChild(Ne),
                            function(e, t) {
                                var i = function() {
                                        var i = e.offsetWidth,
                                            n = e.offsetHeight,
                                            r = window.devicePixelRatio;
                                        o === i && a === n && l === r || (t && t({
                                            width: i,
                                            height: n
                                        }, {
                                            width: o,
                                            height: a
                                        }), o = i, a = n, l = r)
                                    },
                                    n = document.createElement("iframe");
                                n.style.cssText = "\n    position: absolute; left: 0; top: 0; width: 100%; height: 100%;\n        border: 0; margin: 0; display: block; z-index: -999;\n  ", e.appendChild(n);
                                var r, o = e.offsetWidth,
                                    a = e.offsetHeight,
                                    l = 1;
                                void 0 !== window && (l = window.devicePixelRatio, (r = window.matchMedia("(min-resolution: ".concat(window.devicePixelRatio, "dppx) and (max-resolution: ").concat(window.devicePixelRatio, "dppx)"))).addListener((function e() {
                                    r && r.removeListener(e), i(), (r = window.matchMedia("(min-resolution: ".concat(window.devicePixelRatio, "dppx) and (max-resolution: ").concat(window.devicePixelRatio, "dppx)"))).addListener(e)
                                }))), (n.contentWindow || n).onresize = (0, P.n)(i, 10)
                            }(e, (function() {
                                c(), re(), Fe()
                            }))
                    }
                }(), De && (De.addEventListener("mousemove", (0, P.n)(ce, 60)), e.addEventListener("mouseleave", (function() {
                    oe(!1), We.onRender && We.onRender(void 0), ae(Oe)
                })), De.addEventListener("touchstart", (function(e) {
                    ce(e, void 0)
                })), document.addEventListener("touchend", (function(e) {
                    e.target !== De && (We.onRender && We.onRender(void 0), ae(Oe))
                }))), Object.freeze({
                    setOptions: function(e) {
                        var t = e.xAxis,
                            i = e.yAxis,
                            n = e.series,
                            r = e.background,
                            o = e.tooltip,
                            a = e.legend,
                            s = e.gridLineColor,
                            c = e.gridAxisColor,
                            u = e.gridAxisTextColor,
                            d = e.isShowGrid,
                            f = void 0 === d || d,
                            h = e.isShowLogo,
                            v = void 0 !== h && h,
                            p = e.isLight,
                            y = void 0 === p || p,
                            x = e.parallelTooltip,
                            g = !1;
                        t && !L()(Be, t) && (Be = (0, l.A)({}, Be, t), g = !0), i && !L()(ze, i) && (ze = (0, l.A)({}, ze, i), g = !0), n && !L()(Ue, n) && (Ue = n, g = !0), a && !L()(_e, a) && (_e = a, g = !0), o && !L()(We, o) && (We = (0, l.A)({}, We, o)), O(r) && !L()(Ze.bg, r) && (Ze.bg = r), Ze.isShowGrid !== f && (Ze.isShowGrid = f, g = !0), Ze.isLight !== y && (Ze.isLight = y, g = !0), L()(Ze.isShowLogo, v) || (Ze.isShowLogo = v, g = !0), s && O(s) && !L()(Ze.gridLineColor, s) && (Ze.gridLineColor = s, g = !0), c && O(c) && !L()(Ze.gridAxisColor, c) && (Ze.gridAxisColor = c, g = !0), u && O(u) && !L()(Ze.gridAxisTextColor, u) && (Ze.gridAxisTextColor = u, g = !0), g && Fe(), !L()(Ze.parallelTooltip, x) && x && (Ze.parallelTooltip = x, ce(void 0, x))
                    },
                    setSize: re,
                    getChartData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "image/png",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .92,
                            i = Ie.toDataURL(e, t);
                        return i
                    }
                })
            }
            const q = (0, c.forwardRef)((function(e, t) {
                var i = e.width,
                    n = void 0 === i ? 0 : i,
                    r = e.height,
                    o = void 0 === r ? 0 : r,
                    a = e.xAxis,
                    f = e.yAxis,
                    h = e.series,
                    v = void 0 === h ? [] : h,
                    p = e.background,
                    y = e.tooltip,
                    x = e.legend,
                    g = e.isShowGrid,
                    m = e.gridLineColor,
                    w = e.isShowLogo,
                    b = e.isLight,
                    A = (0, s.A)(e, ["width", "height", "xAxis", "yAxis", "series", "background", "tooltip", "legend", "isShowGrid", "gridLineColor", "isShowLogo", "isLight"]),
                    S = (0, c.useRef)(),
                    L = (0, c.useRef)(),
                    T = (0, c.useCallback)((function(e, t) {
                        return S.current ? S.current.getChartData(e, t) : ""
                    }), []);
                return (0, c.useImperativeHandle)(t, (function() {
                    return {
                        getChartData: T
                    }
                })), (0, c.useLayoutEffect)((function() {
                    !S.current && L.current && (S.current = Z(L.current))
                }), []), (0, c.useEffect)((function() {
                    var e = S.current;
                    null === e || void 0 === e || e.setSize(n, o)
                }), [n, o]), (0, c.useEffect)((function() {
                    var e = S.current;
                    null === e || void 0 === e || e.setOptions((0, l.A)({
                        xAxis: a,
                        yAxis: f,
                        series: v,
                        tooltip: y,
                        background: p,
                        legend: x,
                        isShowGrid: g,
                        gridLineColor: m,
                        isShowLogo: w,
                        isLight: b
                    }, A))
                }), [a, f, v, y, p, x, g, m, w, b]), (0, c.useMemo)((function() {
                    return u().createElement(d.A, {
                        ref: L,
                        width: n || "100%",
                        height: o || "100%",
                        sx: {
                            position: "relative"
                        }
                    })
                }), [n, o])
            }))
        },
        FiYw: (e, t, i) => {
            "use strict";
            i.d(t, {
                _$: () => S,
                Ku: () => A
            });
            var n = i("TrCV"),
                r = i("DTvD"),
                o = i("dn+i"),
                a = i("N/Ki"),
                l = i("vflO"),
                s = i("ezuS"),
                c = i("BK7R"),
                u = i("QUKP"),
                d = i("Rc2H"),
                f = i("VP0d"),
                h = i("wgY5"),
                v = i.n(h),
                p = i("vCRf"),
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "spot",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        i = (0, f.A)((0, r.useState)({}), 2),
                        n = i[0],
                        o = i[1];
                    return (0, r.useEffect)((function() {
                        var i = v()().utcOffset(0).format("YYYYMMDD"),
                            n = {
                                timezone: "".concat(3600 * Number(t)),
                                business: e,
                                datetime: i
                            };
                        /^(\-|\+)?\d+(\.\d+)?$/.test("".concat(t)) && (0, p.q)(n).then((function(e) {
                            var t = null === e || void 0 === e ? void 0 : e.symbolKlines;
                            t && o(t)
                        }))
                    }), [t, e]), n
                },
                x = i("/OND"),
                g = i("2qHp"),
                m = {},
                w = i("Iw6/"),
                b = (0, r.createContext)({}),
                A = function() {
                    return (0, r.useContext)(b)
                },
                S = function(e) {
                    var t = e.children,
                        i = (0, o.Rm)().timezoneOpenPriceMap,
                        f = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.M7.SPOT,
                                t = (0, d.$H)().basisTimeZone,
                                i = (0, r.useRef)(null),
                                n = (0, o.Rm)(),
                                l = n.timezoneOpenPriceMap,
                                f = void 0 === l ? m : l,
                                h = n.isHasTimezoneOpenPrice,
                                v = n.timeZoneValue || ((0, g.Tr)(t) ? +t : ""),
                                p = (0, x.wA)(),
                                w = y(e, v),
                                b = (0, g.Tr)(v) && w || m;
                            return (0, r.useEffect)((function() {
                                var e, t;
                                null === (e = p.cookies) || void 0 === e || null === (t = e.loadBasisTimeZone) || void 0 === t || t.call(e)
                            }), [p.cookies]), (0, r.useEffect)((function() {
                                i.current !== b && (p.ssrStore.updateState({
                                    timezoneOpenPriceMap: (0, u.A)((0, c.A)({}, f), (0, s.A)({}, e, Object.keys(b).reduce((function(e, t) {
                                        var i, n;
                                        return t && (null === b || void 0 === b || null === (i = b[t]) || void 0 === i ? void 0 : i.openToday) && (e[t] = null === b || void 0 === b || null === (n = b[t]) || void 0 === n ? void 0 : n.openToday), e
                                    }), {})))
                                }), i.current = b)
                            }), [f, b, p.ssrStore, e]), {
                                isHasTimezoneOpenPrice: h || (0, g.Tr)(v)
                            }
                        }(a.M7.SPOT).isHasTimezoneOpenPrice,
                        h = (0, r.useDeferredValue)((0, l.At)(null === i || void 0 === i ? void 0 : i[a.M7.SPOT])),
                        v = h.nextTickerMap,
                        p = h.update,
                        A = h.marketTabs,
                        S = (0, r.useDeferredValue)((0, w.Q)(v, p)).spotDataByWindowSize;
                    return (0, n.jsx)(b.Provider, {
                        value: {
                            spotDataByWindowSize: S,
                            isHasTimezoneOpenPrice: f,
                            spotMap: v,
                            spotUpdate: p,
                            spotTabs: A,
                            openPriceMap: null === i || void 0 === i ? void 0 : i[a.M7.SPOT],
                            spotUpdateSignature: null === p || void 0 === p ? void 0 : p.reduce((function(e, t) {
                                return e + t
                            }), 0)
                        },
                        children: t
                    })
                }
        },
        zgUk: (e, t, i) => {
            "use strict";
            var n;
            i.d(t, {
                    S: () => n
                }),
                function(e) {
                    e.LIST = "list", e.CARD = "card"
                }(n || (n = {}))
        },
        "5f9E": (e, t, i) => {
            "use strict";
            i.d(t, {
                D: () => g,
                E: () => x
            });
            var n = i("VP0d"),
                r = i("TrCV"),
                o = i("DTvD"),
                a = i("WPrT"),
                l = i("eEXy"),
                s = i("N/Ki"),
                c = i("MxB8"),
                u = i("/I6J"),
                d = i("vflO"),
                f = i("BK7R"),
                h = i("QUKP"),
                v = {
                    widthList: [10, 6.5, 6.5].map((function(e) {
                        return 10 * e
                    })),
                    getStyle: function(e, t) {
                        var i = e[t] || 0;
                        return {
                            width: [i, "px"].join(""),
                            flex: i
                        }
                    },
                    getMinWidth: function(e) {
                        return e.reduce((function(e, t) {
                            return e + t + 6
                        }), 0)
                    }
                },
                p = function(e, t) {
                    switch (t.type) {
                        case s.Gs.FUTURES:
                            return (0, h.A)((0, f.A)({}, v), {
                                widthList: [10, 6.5, 6.5].map((function(e) {
                                    return 10 * e
                                })),
                                getStyle: function(e, t) {
                                    var i = e[t] || 0;
                                    return {
                                        width: [i, "px"].join(""),
                                        flex: i
                                    }
                                }
                            });
                        case s.Gs.INFO:
                            return (0, h.A)((0, f.A)({}, v), {
                                widthList: [11, 8, 8].map((function(e) {
                                    return 10 * e
                                })),
                                getStyle: function(e, t) {
                                    var i = e[t] || 0;
                                    return {
                                        width: [i, "px"].join(""),
                                        flex: i
                                    }
                                }
                            });
                        case s.Gs.NEWLISTING:
                            return (0, h.A)((0, f.A)({}, v), {
                                widthList: [14, 11, 11, 14].map((function(e) {
                                    return 10 * e
                                })),
                                getStyle: function(e, t) {
                                    var i = e[t] || 0;
                                    return {
                                        width: [i, "px"].join(""),
                                        flex: i
                                    }
                                }
                            });
                        case s.Gs.ZONES:
                            return (0, h.A)((0, f.A)({}, v), {
                                widthList: [12, 16, 16, 20].map((function(e) {
                                    return 10 * e
                                })),
                                getStyle: function(e, t) {
                                    var i = e[t] || 0;
                                    return {
                                        width: [i, "px"].join(""),
                                        flex: i
                                    }
                                }
                            });
                        default:
                            return v
                    }
                },
                y = (0, o.createContext)({}),
                x = function() {
                    return (0, o.useContext)(y)
                },
                g = function(e) {
                    var t = e.children;
                    (0, u._m)();
                    var i = (0, n.A)((0, a.l)(), 2),
                        f = i[0],
                        h = i[1];
                    (0, d.mz)({
                        active: [s.Gs.FAVORITE, s.Gs.SPOT].indexOf(f) > -1
                    });
                    var x = (0, l.Q)().isTablet,
                        g = (0, c.z)(),
                        m = g.state,
                        w = m.getColumnStyle,
                        b = m.minWidth,
                        A = g.dispatch,
                        S = function() {
                            var e = (0, o.useReducer)(p, v),
                                t = e[0],
                                i = t.widthList,
                                n = t.getStyle,
                                r = t.getMinWidth;
                            return {
                                dispatch: e[1],
                                state: {
                                    getMobileColumnStyle: n.bind(null, i),
                                    mobileMinWidth: r(i)
                                }
                            }
                        }(),
                        L = S.state,
                        T = L.getMobileColumnStyle,
                        C = L.mobileMinWidth,
                        k = S.dispatch;
                    return (0, o.useMemo)((function() {
                        A({
                            type: f,
                            payload: {
                                activeSubTab: h,
                                isTablet: x
                            }
                        }), k({
                            type: f,
                            payload: {
                                activeSubTab: h,
                                isTablet: x
                            }
                        })
                    }), [f, A, k, h, x]), (0, r.jsx)(y.Provider, {
                        value: {
                            getColumnStyle: w,
                            minWidth: b,
                            getMobileColumnStyle: T,
                            mobileMinWidth: C
                        },
                        children: t
                    })
                }
        },
        g8FI: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => g,
                m: () => m
            });
            var n = i("BK7R"),
                r = i("QUKP"),
                o = i("TrCV"),
                a = i("DTvD"),
                l = i("dn+i"),
                s = i("ZIan"),
                c = i("XvSY"),
                u = i("l1yP"),
                d = i("qhd6"),
                f = i("N/Ki"),
                h = i("zgUk"),
                v = i("3Wf2"),
                p = function(e) {
                    return function(t, i) {
                        i && "stopPropagation" in i && i.stopPropagation(), "function" === typeof e && e(t)
                    }
                },
                y = p,
                x = (0, a.createContext)({
                    tradeNowClick: y
                }),
                g = function() {
                    return (0, a.useContext)(x)
                },
                m = function(e) {
                    var t = e.children,
                        i = (0, s.Bl)(),
                        y = (0, l.Rm)().crossMargins,
                        g = (0, a.useCallback)((function(e, t, o, a) {
                            var l = e.baseAsset,
                                s = e.quoteAsset,
                                d = e.defaultClassicParams,
                                f = void 0 === d ? void 0 : d,
                                h = (0, v.A)((0, r.A)((0, n.A)({}, e), {
                                    _type_: t,
                                    defaultClassicParams: f
                                }), y, i);
                            (0, u.sx)("click_markets_trade_now", [l, s].join("/")), h && !o && (0, c.D)(a || h)
                        }), [i, y]),
                        m = (0, a.useMemo)((function() {
                            return p((function(e) {
                                var t = e.baseAsset,
                                    i = e.quoteAsset,
                                    n = e._type_,
                                    r = e.tabType,
                                    o = e.subTabType,
                                    a = e.index,
                                    l = e.title,
                                    s = e.isTradingData,
                                    c = e.market,
                                    u = e.disableOpenLink,
                                    v = e.customLink,
                                    p = f.lY.indexOf(e._type_) > -1;
                                s ? (0, d.tm)(d.D1.tradingDataTradingPairClick)({
                                    pageName: d.Jp,
                                    extraInfo: {
                                        trading_type: e.etf ? "etf" : n || "normal",
                                        trading_pair: "".concat(t, "/").concat(i),
                                        index: null != a ? a : "noIndex",
                                        title: l || "noTitle",
                                        market: c || "noMarket",
                                        df_9: e.etf ? "etf" : n || "normal",
                                        df_10: [t, i].join("/"),
                                        df_11: l || "noTitle"
                                    },
                                    df_10: [t, i].join("/")
                                }) : (0, d.tm)(d.D1.tradeClick)({
                                    df_9: h.S.LIST,
                                    trading_type: e.etf ? "etf" : n || "normal",
                                    trading_pair: [t, i].join("/"),
                                    extraInfo: {
                                        trading_type: e.etf ? "etf" : n || "normal",
                                        trading_pair: [t, i].join("/"),
                                        main_sector: r || "noTab",
                                        sub_filter: o || "noTab",
                                        index: null != a ? a : "noIndex",
                                        title: l || "noTitle",
                                        link: v || "",
                                        df_9: e.etf ? "etf" : n || "normal",
                                        df_10: r || "noTab",
                                        df_11: o || "noTab"
                                    },
                                    df_10: [t, i].join("/")
                                }), g(e, p ? n : "classic", u, v)
                            }))
                        }), [g]);
                    return (0, o.jsx)(x.Provider, {
                        value: {
                            tradeNowClick: m
                        },
                        children: t
                    })
                }
        },
        MxB8: (e, t, i) => {
            "use strict";
            i.d(t, {
                I: () => d,
                z: () => h
            });
            var n, r = i("ezuS"),
                o = i("BK7R"),
                a = i("QUKP"),
                l = i("tEf9"),
                s = i("DTvD"),
                c = i("N/Ki"),
                u = {
                    widthList: [167, 192, 144, 200, 132, 132, 152],
                    getStyle: function(e, t) {
                        var i = e[t] || 0;
                        return {
                            width: [i, "px"].join(""),
                            flex: [3, 8].includes(t) ? "none" : i
                        }
                    },
                    getMinWidth: function(e) {
                        return 1232
                    }
                },
                d = 216,
                f = (n = {}, (0, r.A)(n, c.Gs.FUTURES, [240, 237, 150, 216, 138, 0, 156]), (0, r.A)(n, c.PH, [240, 237, 150, 216, 138, 156, 156]), (0, r.A)(n, c.Gs.INFO, [340, 148, 148, 148, 148, 148]), (0, r.A)(n, c.Gs.NEWLISTING, [280, 120, 120, 120, 120, 120, 120]), (0, r.A)(n, c.Gs.ZONES, [282, 282, 282, 282]), (0, r.A)(n, c.Gs.SPOT, [170, 212, 128, 176, 132, 132, 105]), n),
                h = function() {
                    var e = (0, s.useCallback)((function(e, t) {
                            var i, n, r = null === (i = t.payload) || void 0 === i ? void 0 : i.activeSubTab,
                                s = (null !== (n = t.payload) && void 0 !== n ? n : {}).isTablet,
                                h = function() {
                                    switch (t.type) {
                                        case c.Gs.FUTURES:
                                            return r === c.PH ? (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.PH],
                                                getStyle: function(e, t) {
                                                    var i = e[t] || 0;
                                                    return (0, o.A)({
                                                        width: [i, "px"].join(""),
                                                        flex: [1, 2, 3, 8].includes(t) ? "none" : i
                                                    }, 0 === i && {
                                                        display: "none"
                                                    })
                                                }
                                            }) : (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.Gs.FUTURES],
                                                getStyle: function(e, t) {
                                                    var i = e[t] || 0;
                                                    return (0, o.A)({
                                                        width: [i, "px"].join(""),
                                                        flex: [1, 2, 3, 8].includes(t) ? "none" : i
                                                    }, 0 === i && {
                                                        display: "none"
                                                    })
                                                }
                                            });
                                        case c.Gs.INFO:
                                            return (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.Gs.INFO],
                                                getStyle: function(e, t) {
                                                    return {
                                                        width: [e[t] || 0, "px"].join("")
                                                    }
                                                },
                                                getMinWidth: function(e) {
                                                    return 1040
                                                }
                                            });
                                        case c.Gs.NEWLISTING:
                                            return (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.Gs.NEWLISTING],
                                                getStyle: function(e, t) {
                                                    return {
                                                        width: [e[t] || 0, "px"].join("")
                                                    }
                                                }
                                            });
                                        case c.Gs.ZONES:
                                            return (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.Gs.ZONES],
                                                getStyle: function(e, t) {
                                                    var i = e[t] || 0;
                                                    return {
                                                        width: [i, "px"].join(""),
                                                        flex: i
                                                    }
                                                }
                                            });
                                        default:
                                            return (0, a.A)((0, o.A)({}, u), {
                                                widthList: f[c.Gs.SPOT],
                                                getStyle: function(e, t) {
                                                    var i = e[t] || 0;
                                                    return {
                                                        width: [i, "px"].join(""),
                                                        flex: i
                                                    }
                                                }
                                            })
                                    }
                                }(),
                                v = h.widthList;
                            return (0, a.A)((0, o.A)({}, h), {
                                widthList: s ? [d].concat((0, l.A)(v.slice(1))) : v
                            })
                        }), []),
                        t = (0, s.useReducer)(e, (0, a.A)((0, o.A)({}, u), {
                            widthList: []
                        })),
                        i = t[0],
                        n = i.widthList,
                        r = i.getStyle,
                        h = i.getMinWidth;
                    return {
                        dispatch: t[1],
                        state: {
                            getColumnStyle: function(e) {
                                return r(n, e)
                            },
                            minWidth: h(n)
                        }
                    }
                }
        },
        vflO: (e, t, i) => {
            "use strict";
            i.d(t, {
                mz: () => P,
                At: () => k,
                hs: () => M
            });
            var n = i("BK7R"),
                r = i("DTvD"),
                o = i("nsO7"),
                a = i("/OND"),
                l = i("gZfF"),
                s = i("8JuV"),
                c = i("9Ps6"),
                u = i("1i6t"),
                d = i("qPem"),
                f = {
                    BUSD: {},
                    USDT: {},
                    BNB: {},
                    BTC: {},
                    ALTS: {},
                    FIAT: {}
                },
                h = function(e) {
                    var t, i, n = e.lowPrice,
                        r = e.lastPrice,
                        o = e.highPrice,
                        a = e.openPrice,
                        l = e.isShowDiff,
                        s = void 0 === l || l,
                        c = +r - +a,
                        u = [c >= 0 ? "+" : "", (a ? c / a * 100 : 0).toFixed(2)].join("");
                    return {
                        lowPrice: n,
                        lastPrice: r,
                        highPrice: o,
                        openPrice: a,
                        difference: s ? u : "-",
                        bigThan: (t = r, i = a, +t >= +i)
                    }
                },
                v = {},
                p = function(e, t) {
                    var i = (0, d.Q)(),
                        o = i.loading,
                        a = i.updateTime,
                        c = i.productMap,
                        v = (0, r.useMemo)((function() {
                            var e = Object.keys(c),
                                t = (0, s.N)({}, f);
                            return {
                                baseTicker: e.reduce((function(e, i) {
                                    var n = c[i] || {},
                                        r = n.low,
                                        o = n.high,
                                        a = n.close,
                                        u = n.open,
                                        d = (0, l.A)(n, ["low", "high", "close", "open"]),
                                        f = d.parentMarket,
                                        v = d.quoteAsset;
                                    return f && v && ("USD\u24c8" === f ? t.FIAT[v] = 1 : (t[f] || (t[f] = {}), t[f][v] = 1), e[i] = (0, s.N)(d, h({
                                        lowPrice: r,
                                        lastPrice: a,
                                        highPrice: o,
                                        openPrice: u,
                                        isShowDiff: !1
                                    }))), e
                                }), {}),
                                marketTabs: t
                            }
                        }), [c, a]),
                        p = v.baseTicker,
                        y = v.marketTabs,
                        x = function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3,
                                o = (0, u.y)(),
                                a = o.value,
                                l = o.dispatch,
                                s = (0, r.useCallback)((function(e) {
                                    l({
                                        payload: e
                                    })
                                }), [l]);
                            return (0, r.useEffect)((function() {
                                return e.getStreamTickersWithWindowSize(t, i).subscribe(s)
                            }), [e, t]), (0, n.A)({}, a)
                        }(e, t),
                        g = x.update,
                        m = x.tickers;
                    return {
                        loading: o,
                        marketTabs: y,
                        update: [a, g],
                        nextTickerMap: Object.keys(m).reduce((function(e, t) {
                            var i = e[t];
                            if (i && "object" === typeof i) {
                                var n = m[t],
                                    r = n.lowPrice,
                                    o = n.lastPrice,
                                    a = n.highPrice,
                                    l = n.openPrice;
                                (0, s.N)(e[t], m[t], h({
                                    lowPrice: r,
                                    lastPrice: o,
                                    highPrice: a,
                                    openPrice: l
                                }))
                            }
                            return e
                        }), p)
                    }
                },
                y = i("AcsR"),
                x = i("sViW"),
                g = i("ezuS"),
                m = i("VP0d"),
                w = i("Pz56"),
                b = i.n(w),
                A = i("rpWC"),
                S = i("/G+F"),
                L = i("N/Ki"),
                T = function(e) {
                    return "".concat(+e).replace(/(\.\d)\S*/, "$1")
                },
                C = function() {
                    var e = (0, x.A)(b().mark((function e(t) {
                        var i, r, o, a, l;
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = m.A, e.next = 3, Promise.all([(0, A.tY)(), (0, A.WC)()]);
                                case 3:
                                    e.t1 = e.sent, i = (0, e.t0)(e.t1, 2), r = i[0], o = i[1], a = o.reduce((function(e, t) {
                                        var i = t.marginRatio,
                                            n = t.symbol,
                                            r = T(i);
                                        return (0, S.N8)(e, (0, g.A)({}, n, {
                                            type: L.wP.ISOLATED,
                                            crossRatio: 5,
                                            marginRatio: r,
                                            isolatedRatio: r
                                        }))
                                    }), {}), l = r.reduce((function(e, t) {
                                        if (!t.isMarginTrade) return e;
                                        var i = t.symbol,
                                            n = a[i] || {},
                                            r = n.type,
                                            o = n.crossRatio,
                                            l = void 0 === o ? 5 : o,
                                            s = n.isolatedRatio,
                                            c = void 0 === s ? 0 : s,
                                            u = Math.max(l, c),
                                            d = r ? L.wP.BOTH : L.wP.CROSS;
                                        return (0, S.N8)(e, (0, g.A)({}, i, {
                                            type: d,
                                            crossRatio: l,
                                            marginRatio: u,
                                            isolatedRatio: c
                                        }))
                                    }), {}), t.ssrStore.updateState({
                                        margin: (0, n.A)({}, a, l)
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function(e) {
                    var t = (0, r.useDeferredValue)(function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                                i = (0, d.Q)(),
                                n = i.loading,
                                o = i.updateTime,
                                a = i.productMap,
                                u = (0, r.useMemo)((function() {
                                    var e = Object.keys(a),
                                        i = (0, s.N)({}, f);
                                    return {
                                        baseTicker: e.reduce((function(e, n) {
                                            var r = a[n] || {},
                                                o = r.low,
                                                c = r.high,
                                                u = r.close,
                                                d = r.open,
                                                f = (0, l.A)(r, ["low", "high", "close", "open"]),
                                                v = f.parentMarket,
                                                p = f.quoteAsset,
                                                y = f.symbol;
                                            if (v && p) {
                                                var x;
                                                "USD\u24c8" === v ? i.FIAT[p] = 1 : (i[v] || (i[v] = {}), i[v][p] = 1);
                                                var g = null !== (x = t[y]) && void 0 !== x ? x : d;
                                                e[n] = (0, s.N)(f, h({
                                                    lowPrice: o,
                                                    lastPrice: u,
                                                    highPrice: c,
                                                    openPrice: g
                                                }))
                                            }
                                            return e
                                        }), {}),
                                        marketTabs: i
                                    }
                                }), [a, o, t]),
                                p = u.baseTicker,
                                y = u.marketTabs,
                                x = (0, c.t)(e),
                                g = x.update,
                                m = x.tickers,
                                w = Object.keys(m).reduce((function(e, i) {
                                    var n = e[i];
                                    if (n && "object" === typeof n) {
                                        var r, o = m[i],
                                            a = o.lowPrice,
                                            l = o.lastPrice,
                                            c = o.highPrice,
                                            u = o.openPrice,
                                            d = o.symbol,
                                            f = null !== (r = t[d]) && void 0 !== r ? r : u;
                                        (0, s.N)(e[i], m[i], h({
                                            lowPrice: a,
                                            lastPrice: l,
                                            highPrice: c,
                                            openPrice: f
                                        }))
                                    }
                                    return e
                                }), p);
                            return {
                                loading: n,
                                marketTabs: y,
                                update: [o, g],
                                nextTickerMap: w
                            }
                        }(y.f0, e)),
                        i = t.loading,
                        n = t.update,
                        a = t.marketTabs,
                        u = t.nextTickerMap;
                    return {
                        loading: i,
                        update: n,
                        marketTabs: a,
                        nextTickerMap: (0, r.useMemo)((function() {
                            return e = u, (0, o.pickBy)(e, (function(e) {
                                return !e.hidden
                            }));
                            var e
                        }), [n])
                    }
                },
                M = function(e) {
                    var t = e.windowSize,
                        i = e.fieldsFixedToOneDayTickerMap,
                        a = (0, r.useDeferredValue)(p(y.f0, t)),
                        l = a.loading,
                        s = a.update,
                        c = a.nextTickerMap;
                    return {
                        loading: l,
                        update: s,
                        nextTickerMap: (0, r.useMemo)((function() {
                            return (0, o.mapValues)(i, (function(e, t) {
                                return (0, n.A)({}, c[t], e)
                            }))
                        }), [s, i])
                    }
                },
                P = function(e) {
                    var t = e.active,
                        i = (0, a.wA)(),
                        n = (0, r.useState)(!1),
                        o = n[0],
                        l = n[1];
                    (0, r.useMemo)((function() {
                        return t && l(!0)
                    }), [t]), (0, r.useEffect)((function() {
                        o && C(i)
                    }), [o])
                }
        },
        "Iw6/": (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => c
            });
            var n = i("ezuS"),
                r = i("DTvD"),
                o = i("nsO7"),
                a = i("N/Ki"),
                l = i("vflO"),
                s = ["highPrice", "lowPrice", "quoteVolume", "volume"],
                c = function(e, t) {
                    var i, c = (0, o.mapValues)(e, (function(e) {
                            return (0, o.pick)(e, s)
                        })),
                        u = (0, r.useDeferredValue)((0, l.hs)({
                            windowSize: a.DK["1H"],
                            fieldsFixedToOneDayTickerMap: c
                        })),
                        d = u.nextTickerMap,
                        f = u.update,
                        h = (0, r.useDeferredValue)((0, l.hs)({
                            windowSize: a.DK["4H"],
                            fieldsFixedToOneDayTickerMap: c
                        })),
                        v = h.nextTickerMap,
                        p = h.update;
                    return {
                        spotDataByWindowSize: (i = {}, (0, n.A)(i, a.DK["1H"], {
                            spotMap: d,
                            spotUpdate: f
                        }), (0, n.A)(i, a.DK["4H"], {
                            spotMap: v,
                            spotUpdate: p
                        }), (0, n.A)(i, a.DK["24H"], {
                            spotMap: e,
                            spotUpdate: t
                        }), i)
                    }
                }
        },
        "3Wf2": (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => l
            });
            var n = i("cr+I"),
                r = i("AcsR"),
                o = i("N/Ki"),
                a = function(e) {
                    return "perpetual" === e ? "" : "_".concat((0, o.hX)(e))
                };
            const l = function(e, t, i) {
                var o = e.baseAsset,
                    l = e.quoteAsset,
                    s = e.tabType,
                    c = e.specialAsset,
                    u = c ? [l, o] : [o, l];
                "USDT_BIDR" !== u.join("_") || c || "coinInfo" !== s || (u = ["FDUSD", "USDT"]);
                var d = function(e, t, i, o) {
                        var l, s = i._type_,
                            c = i.lowContractType,
                            u = i.tabType,
                            d = i.subTabType,
                            f = i.baseAsset,
                            h = i.quoteAsset,
                            v = i.defaultClassicParams,
                            p = void 0 === v ? {} : v,
                            y = i.underlying,
                            x = i.$symbolDisplay,
                            g = ["perpetual", "quarterly", "options"].indexOf(s) > -1 ? s : "classic",
                            m = "";
                        if ("classic" === g) {
                            var w = p;
                            if ("Favorites" === u && "margin" === d) {
                                var b = !!(null === o || void 0 === o ? void 0 : o.find((function(e) {
                                    var t = e.base,
                                        i = e.quote;
                                    return t === f && i === h
                                })));
                                w.type = b ? "cross" : "isolated"
                            }
                            m = r.cp ? "binance://trade/spot/".concat(e.join("_")) : "/trade/".concat(e.join("_")).concat((l = n.stringify(w)) ? "".concat("?").concat(l) : "")
                        } else "perpetual" === g ? m = r.cp ? "binance://trade/perpetual/".concat(e.join("")) : "/futures/".concat(e.join("")).concat(a(c)) : "quarterly" === g ? m = r.cp ? "binance://trade/quarterly/".concat(e.join("")).concat(a(c)) : "/delivery/".concat(e.join("")).concat(a(c)) : "options" === g && (m = r.cp ? "binance://trade/eoptions/".concat(y, "/").concat(x) : "/eoptions/".concat(y, "/").concat(x));
                        return m
                    }(u, 0, e, t),
                    f = n.parseUrl(d || "");
                return Object.assign(f.query, {
                    _from: "markets"
                }), n.stringifyUrl(f)
            }
        },
        WPrT: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => a,
                l: () => l
            });
            var n = i("/OND"),
                r = function(e) {
                    return e.markets.search
                },
                o = function(e) {
                    return e.markets.tabInfo
                },
                a = function() {
                    return {
                        search: (0, n.d4)(r)
                    }
                },
                l = function() {
                    return (0, n.d4)(o)
                }
        },
        XvSY: (e, t, i) => {
            "use strict";
            i.d(t, {
                D: () => d
            });
            const n = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                r = (e, t, i) => Object.defineProperty(e, t, {
                    value: i
                }),
                o = e => {
                    if ("string" !== typeof e) throw new TypeError("agent must be a string");
                    const t = e.match(n),
                        i = Object.create({
                            isHybrid: !1
                        });
                    if (t) {
                        const e = t[1];
                        r(i, "bridgeVersion", e), r(i, "clientType", t[2]), r(i, "clientVersion", t[3]), r(i, "isHybrid", !!e)
                    }
                    return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (i.isHybrid = !0), i
                };
            let a, l;
            const s = () => l || ("undefined" !== typeof navigator ? navigator.userAgent : "");
            var c = i("AcsR");
            var u = function(e) {
                return 0 === arguments.length ? a || (a = o(s())) : o(e)
            }().isHybrid;

            function d(e, t) {
                u ? window.location.href = e : t ? window.open(e) : c.cp ? window.location.href = e : window.open(e)
            }
        },
        "/G+F": (e, t, i) => {
            "use strict";
            i.d(t, {
                LB: () => r,
                N8: () => n,
                aI: () => l
            });
            var n = function(e) {
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    return e ? (i.forEach((function(t) {
                        Object.keys(t || {}).forEach((function(i) {
                            e[i] = t[i]
                        }))
                    })), e) : e
                },
                r = function(e, t) {
                    var i = Object.keys(e);
                    return function(n) {
                        return i.reduce((function(i, r) {
                            return n[r] && (i[t ? e[r] : r] = n[r]), i
                        }), {})
                    }
                },
                o = function(e) {
                    return e && "object" === typeof e
                },
                a = function(e) {
                    return "function" === typeof e
                };

            function l(e, t) {
                var i = o(e),
                    n = o(t);
                if (i && i === n) {
                    var r = Object.keys(e),
                        s = Object.keys(t);
                    if (r.length === s.length) return r.every((function(i) {
                        return l(e[i], t[i])
                    }))
                } else if (a(e) && a(t)) return !0;
                return "".concat(e) === "".concat(t)
            }
        },
        "RX+5": function(e, t, i) {
            var n;
            ! function(r) {
                "use strict";
                var o, a = 1e6,
                    l = 1e6,
                    s = "[big.js] ",
                    c = s + "Invalid ",
                    u = c + "decimal places",
                    d = c + "rounding mode",
                    f = s + "Division by zero",
                    h = {},
                    v = void 0,
                    p = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function y(e, t, i, n) {
                    var r = e.c,
                        o = e.e + t + 1;
                    if (o < r.length) {
                        if (1 === i) n = r[o] >= 5;
                        else if (2 === i) n = r[o] > 5 || 5 == r[o] && (n || o < 0 || r[o + 1] !== v || 1 & r[o - 1]);
                        else if (3 === i) n = n || !!r[0];
                        else if (n = !1, 0 !== i) throw Error(d);
                        if (o < 1) r.length = 1, n ? (e.e = -t, r[0] = 1) : r[0] = e.e = 0;
                        else {
                            if (r.length = o--, n)
                                for (; ++r[o] > 9;) r[o] = 0, o-- || (++e.e, r.unshift(1));
                            for (o = r.length; !r[--o];) r.pop()
                        }
                    } else if (i < 0 || i > 3 || i !== ~~i) throw Error(d);
                    return e
                }

                function x(e, t, i, n) {
                    var r, o, l = e.constructor,
                        s = !e.c[0];
                    if (i !== v) {
                        if (i !== ~~i || i < (3 == t) || i > a) throw Error(3 == t ? c + "precision" : u);
                        for (i = n - (e = new l(e)).e, e.c.length > ++n && y(e, i, l.RM), 2 == t && (n = e.e + i + 1); e.c.length < n;) e.c.push(0)
                    }
                    if (r = e.e, i = (o = e.c.join("")).length, 2 != t && (1 == t || 3 == t && n <= r || r <= l.NE || r >= l.PE)) o = o.charAt(0) + (i > 1 ? "." + o.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                    else if (r < 0) {
                        for (; ++r;) o = "0" + o;
                        o = "0." + o
                    } else if (r > 0)
                        if (++r > i)
                            for (r -= i; r--;) o += "0";
                        else r < i && (o = o.slice(0, r) + "." + o.slice(r));
                    else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
                    return e.s < 0 && (!s || 4 == t) ? "-" + o : o
                }
                h.abs = function() {
                    var e = new this.constructor(this);
                    return e.s = 1, e
                }, h.cmp = function(e) {
                    var t, i = this,
                        n = i.c,
                        r = (e = new i.constructor(e)).c,
                        o = i.s,
                        a = e.s,
                        l = i.e,
                        s = e.e;
                    if (!n[0] || !r[0]) return n[0] ? o : r[0] ? -a : 0;
                    if (o != a) return o;
                    if (t = o < 0, l != s) return l > s ^ t ? 1 : -1;
                    for (a = (l = n.length) < (s = r.length) ? l : s, o = -1; ++o < a;)
                        if (n[o] != r[o]) return n[o] > r[o] ^ t ? 1 : -1;
                    return l == s ? 0 : l > s ^ t ? 1 : -1
                }, h.div = function(e) {
                    var t = this,
                        i = t.constructor,
                        n = t.c,
                        r = (e = new i(e)).c,
                        o = t.s == e.s ? 1 : -1,
                        l = i.DP;
                    if (l !== ~~l || l < 0 || l > a) throw Error(u);
                    if (!r[0]) throw Error(f);
                    if (!n[0]) return new i(0 * o);
                    var s, c, d, h, p, x = r.slice(),
                        g = s = r.length,
                        m = n.length,
                        w = n.slice(0, s),
                        b = w.length,
                        A = e,
                        S = A.c = [],
                        L = 0,
                        T = l + (A.e = t.e - e.e) + 1;
                    for (A.s = o, o = T < 0 ? 0 : T, x.unshift(0); b++ < s;) w.push(0);
                    do {
                        for (d = 0; d < 10; d++) {
                            if (s != (b = w.length)) h = s > b ? 1 : -1;
                            else
                                for (p = -1, h = 0; ++p < s;)
                                    if (r[p] != w[p]) {
                                        h = r[p] > w[p] ? 1 : -1;
                                        break
                                    } if (!(h < 0)) break;
                            for (c = b == s ? r : x; b;) {
                                if (w[--b] < c[b]) {
                                    for (p = b; p && !w[--p];) w[p] = 9;
                                    --w[p], w[b] += 10
                                }
                                w[b] -= c[b]
                            }
                            for (; !w[0];) w.shift()
                        }
                        S[L++] = h ? d : ++d, w[0] && h ? w[b] = n[g] || 0 : w = [n[g]]
                    } while ((g++ < m || w[0] !== v) && o--);
                    return S[0] || 1 == L || (S.shift(), A.e--), L > T && y(A, l, i.RM, w[0] !== v), A
                }, h.eq = function(e) {
                    return !this.cmp(e)
                }, h.gt = function(e) {
                    return this.cmp(e) > 0
                }, h.gte = function(e) {
                    return this.cmp(e) > -1
                }, h.lt = function(e) {
                    return this.cmp(e) < 0
                }, h.lte = function(e) {
                    return this.cmp(e) < 1
                }, h.minus = h.sub = function(e) {
                    var t, i, n, r, o = this,
                        a = o.constructor,
                        l = o.s,
                        s = (e = new a(e)).s;
                    if (l != s) return e.s = -s, o.plus(e);
                    var c = o.c.slice(),
                        u = o.e,
                        d = e.c,
                        f = e.e;
                    if (!c[0] || !d[0]) return d[0] ? (e.s = -s, e) : new a(c[0] ? o : 0);
                    if (l = u - f) {
                        for ((r = l < 0) ? (l = -l, n = c) : (f = u, n = d), n.reverse(), s = l; s--;) n.push(0);
                        n.reverse()
                    } else
                        for (i = ((r = c.length < d.length) ? c : d).length, l = s = 0; s < i; s++)
                            if (c[s] != d[s]) {
                                r = c[s] < d[s];
                                break
                            } if (r && (n = c, c = d, d = n, e.s = -e.s), (s = (i = d.length) - (t = c.length)) > 0)
                        for (; s--;) c[t++] = 0;
                    for (s = t; i > l;) {
                        if (c[--i] < d[i]) {
                            for (t = i; t && !c[--t];) c[t] = 9;
                            --c[t], c[i] += 10
                        }
                        c[i] -= d[i]
                    }
                    for (; 0 === c[--s];) c.pop();
                    for (; 0 === c[0];) c.shift(), --f;
                    return c[0] || (e.s = 1, c = [f = 0]), e.c = c, e.e = f, e
                }, h.mod = function(e) {
                    var t, i = this,
                        n = i.constructor,
                        r = i.s,
                        o = (e = new n(e)).s;
                    if (!e.c[0]) throw Error(f);
                    return i.s = e.s = 1, t = 1 == e.cmp(i), i.s = r, e.s = o, t ? new n(i) : (r = n.DP, o = n.RM, n.DP = n.RM = 0, i = i.div(e), n.DP = r, n.RM = o, this.minus(i.times(e)))
                }, h.plus = h.add = function(e) {
                    var t, i = this,
                        n = i.constructor,
                        r = i.s,
                        o = (e = new n(e)).s;
                    if (r != o) return e.s = -o, i.minus(e);
                    var a = i.e,
                        l = i.c,
                        s = e.e,
                        c = e.c;
                    if (!l[0] || !c[0]) return c[0] ? e : new n(l[0] ? i : 0 * r);
                    if (l = l.slice(), r = a - s) {
                        for (r > 0 ? (s = a, t = c) : (r = -r, t = l), t.reverse(); r--;) t.push(0);
                        t.reverse()
                    }
                    for (l.length - c.length < 0 && (t = c, c = l, l = t), r = c.length, o = 0; r; l[r] %= 10) o = (l[--r] = l[r] + c[r] + o) / 10 | 0;
                    for (o && (l.unshift(o), ++s), r = l.length; 0 === l[--r];) l.pop();
                    return e.c = l, e.e = s, e
                }, h.pow = function(e) {
                    var t = this,
                        i = new t.constructor(1),
                        n = i,
                        r = e < 0;
                    if (e !== ~~e || e < -1e6 || e > l) throw Error(c + "exponent");
                    for (r && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;) t = t.times(t);
                    return r ? i.div(n) : n
                }, h.round = function(e, t) {
                    var i = this.constructor;
                    if (e === v) e = 0;
                    else if (e !== ~~e || e < -a || e > a) throw Error(u);
                    return y(new i(this), e, t === v ? i.RM : t)
                }, h.sqrt = function() {
                    var e, t, i, n = this,
                        r = n.constructor,
                        o = n.s,
                        a = n.e,
                        l = new r(.5);
                    if (!n.c[0]) return new r(n);
                    if (o < 0) throw Error(s + "No square root");
                    0 === (o = Math.sqrt(n + "")) || o === 1 / 0 ? ((t = n.c.join("")).length + a & 1 || (t += "0"), a = ((a + 1) / 2 | 0) - (a < 0 || 1 & a), e = new r(((o = Math.sqrt(t)) == 1 / 0 ? "1e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + a)) : e = new r(o), a = e.e + (r.DP += 4);
                    do {
                        i = e, e = l.times(i.plus(n.div(i)))
                    } while (i.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
                    return y(e, r.DP -= 4, r.RM)
                }, h.times = h.mul = function(e) {
                    var t, i = this,
                        n = i.constructor,
                        r = i.c,
                        o = (e = new n(e)).c,
                        a = r.length,
                        l = o.length,
                        s = i.e,
                        c = e.e;
                    if (e.s = i.s == e.s ? 1 : -1, !r[0] || !o[0]) return new n(0 * e.s);
                    for (e.e = s + c, a < l && (t = r, r = o, o = t, c = a, a = l, l = c), t = new Array(c = a + l); c--;) t[c] = 0;
                    for (s = l; s--;) {
                        for (l = 0, c = a + s; c > s;) l = t[c] + o[s] * r[c - s - 1] + l, t[c--] = l % 10, l = l / 10 | 0;
                        t[c] = (t[c] + l) % 10
                    }
                    for (l ? ++e.e : t.shift(), s = t.length; !t[--s];) t.pop();
                    return e.c = t, e
                }, h.toExponential = function(e) {
                    return x(this, 1, e, e)
                }, h.toFixed = function(e) {
                    return x(this, 2, e, this.e + e)
                }, h.toPrecision = function(e) {
                    return x(this, 3, e, e - 1)
                }, h.toString = function() {
                    return x(this)
                }, h.valueOf = h.toJSON = function() {
                    return x(this, 4)
                }, o = function e() {
                    function t(i) {
                        var n = this;
                        if (!(n instanceof t)) return i === v ? e() : new t(i);
                        i instanceof t ? (n.s = i.s, n.e = i.e, n.c = i.c.slice()) : function(e, t) {
                            var i, n, r;
                            if (0 === t && 1 / t < 0) t = "-0";
                            else if (!p.test(t += "")) throw Error(c + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (i = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (n = t.search(/e/i)) > 0 ? (i < 0 && (i = n), i += +t.slice(n + 1), t = t.substring(0, n)) : i < 0 && (i = t.length);
                            for (r = t.length, n = 0; n < r && "0" == t.charAt(n);) ++n;
                            if (n == r) e.c = [e.e = 0];
                            else {
                                for (; r > 0 && "0" == t.charAt(--r););
                                for (e.e = i - n - 1, e.c = [], i = 0; n <= r;) e.c[i++] = +t.charAt(n++)
                            }
                        }(n, i), n.constructor = t
                    }
                    return t.prototype = h, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.version = "5.2.2", t
                }(), o.default = o.Big = o, void 0 === (n = function() {
                    return o
                }.call(t, i, t, e)) || (e.exports = n)
            }()
        },
        "c+mU": e => {
            "use strict";
            e.exports = function(e, t) {
                for (var i = {}, n = Object.keys(e), r = Array.isArray(t), o = 0; o < n.length; o++) {
                    var a = n[o],
                        l = e[a];
                    (r ? -1 !== t.indexOf(a) : t(a, l, e)) && (i[a] = l)
                }
                return i
            }
        },
        JElN: (e, t, i) => {
            var n = i("a88S");
            e.exports = function(e, t, i) {
                for (var r = -1, o = e.length; ++r < o;) {
                    var a = e[r],
                        l = t(a);
                    if (null != l && (void 0 === s ? l === l && !n(l) : i(l, s))) var s = l,
                        c = a
                }
                return c
            }
        },
        FaiA: e => {
            e.exports = function(e, t) {
                return e > t
            }
        },
        "n+p3": e => {
            e.exports = function(e, t) {
                return e < t
            }
        },
        nnRT: (e, t, i) => {
            var n = i("NYSw");
            e.exports = function(e, t) {
                return n(e, t)
            }
        },
        "LPC+": (e, t, i) => {
            var n = i("JElN"),
                r = i("FaiA"),
                o = i("zWgn");
            e.exports = function(e) {
                return e && e.length ? n(e, o, r) : void 0
            }
        },
        Z3AG: (e, t, i) => {
            var n = i("JElN"),
                r = i("n+p3"),
                o = i("zWgn");
            e.exports = function(e) {
                return e && e.length ? n(e, o, r) : void 0
            }
        }
    }
]);
//# debugId=7bc2af24-d8ea-56be-8c0d-d9729b784827