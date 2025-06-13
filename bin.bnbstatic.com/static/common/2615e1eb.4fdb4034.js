! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2b79e7f1-615d-5b0d-a4f3-7247eb686e16")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [650], {
        T9BW: (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            t("wIZF").__exportStar(t("hRh4"), n)
        },
        hRh4: function(e, n, t) {
            ! function(e, n) {
                "use strict";

                function t(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function r(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? t(Object(r), !0).forEach((function(n) {
                            s(e, n, r[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                        }))
                    }
                    return e
                }

                function a(e) {
                    return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }

                function i(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function c(e, n, t) {
                    return n && o(e.prototype, n), t && o(e, t), e
                }

                function s(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function u(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a
                }

                function l(e, n) {
                    if (null == e) return {};
                    var t, r, a = u(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                    return a
                }

                function f(e, n) {
                    return p(e) || d(e, n) || g(e, n) || h()
                }

                function p(e) {
                    if (Array.isArray(e)) return e
                }

                function d(e, n) {
                    var t = e && ("undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); o = !0);
                        } catch (s) {
                            c = !0, a = s
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }

                function g(e, n) {
                    if (e) {
                        if ("string" === typeof e) return m(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? m(e, n) : void 0
                    }
                }

                function m(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function h() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var v = {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    },
                    y = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

                function b(e) {
                    var n = {
                            type: "tag",
                            name: "",
                            voidElement: !1,
                            attrs: {},
                            children: []
                        },
                        t = e.match(/<\/?([^\s]+?)[/\s>]/);
                    if (t && (n.name = t[1], (v[t[1]] || "/" === e.charAt(e.length - 2)) && (n.voidElement = !0), n.name.startsWith("!--"))) {
                        var r = e.indexOf("--\x3e");
                        return {
                            type: "comment",
                            comment: -1 !== r ? e.slice(4, r) : ""
                        }
                    }
                    for (var a = new RegExp(y), i = null; null !== (i = a.exec(e));)
                        if (i[0].trim())
                            if (i[1]) {
                                var o = i[1].trim(),
                                    c = [o, ""];
                                o.indexOf("=") > -1 && (c = o.split("=")), n.attrs[c[0]] = c[1], a.lastIndex--
                            } else i[2] && (n.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
                    return n
                }
                var O = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                    x = /^\s*$/,
                    w = Object.create(null);

                function E(e, n) {
                    switch (n.type) {
                        case "text":
                            return e + n.content;
                        case "tag":
                            return e += "<" + n.name + (n.attrs ? function(e) {
                                var n = [];
                                for (var t in e) n.push(t + '="' + e[t] + '"');
                                return n.length ? " " + n.join(" ") : ""
                            }(n.attrs) : "") + (n.voidElement ? "/>" : ">"), n.voidElement ? e : e + n.children.reduce(E, "") + "</" + n.name + ">";
                        case "comment":
                            return e + "\x3c!--" + n.comment + "--\x3e"
                    }
                }
                var j, S = {
                        parse: function(e, n) {
                            n || (n = {}), n.components || (n.components = w);
                            var t, r = [],
                                a = [],
                                i = -1,
                                o = !1;
                            if (0 !== e.indexOf("<")) {
                                var c = e.indexOf("<");
                                r.push({
                                    type: "text",
                                    content: -1 === c ? e : e.substring(0, c)
                                })
                            }
                            return e.replace(O, (function(c, s) {
                                if (o) {
                                    if (c !== "</" + t.name + ">") return;
                                    o = !1
                                }
                                var u, l = "/" !== c.charAt(1),
                                    f = c.startsWith("\x3c!--"),
                                    p = s + c.length,
                                    d = e.charAt(p);
                                if (f) {
                                    var g = b(c);
                                    return i < 0 ? (r.push(g), r) : ((u = a[i]).children.push(g), r)
                                }
                                if (l && (i++, "tag" === (t = b(c)).type && n.components[t.name] && (t.type = "component", o = !0), t.voidElement || o || !d || "<" === d || t.children.push({
                                        type: "text",
                                        content: e.slice(p, e.indexOf("<", p))
                                    }), 0 === i && r.push(t), (u = a[i - 1]) && u.children.push(t), a[i] = t), (!l || t.voidElement) && (i > -1 && (t.voidElement || t.name === c.slice(2, -1)) && (i--, t = -1 === i ? r : a[i]), !o && "<" !== d && d)) {
                                    u = -1 === i ? r : a[i].children;
                                    var m = e.indexOf("<", p),
                                        h = e.slice(p, -1 === m ? void 0 : m);
                                    x.test(h) && (h = " "), (m > -1 && i + u.length >= 0 || " " !== h) && u.push({
                                        type: "text",
                                        content: h
                                    })
                                }
                            })), r
                        },
                        stringify: function(e) {
                            return e.reduce((function(e, n) {
                                return e + E("", n)
                            }), "")
                        }
                    },
                    k = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    N = {
                        "&amp;": "&",
                        "&#38;": "&",
                        "&lt;": "<",
                        "&#60;": "<",
                        "&gt;": ">",
                        "&#62;": ">",
                        "&apos;": "'",
                        "&#39;": "'",
                        "&quot;": '"',
                        "&#34;": '"',
                        "&nbsp;": " ",
                        "&#160;": " ",
                        "&copy;": "\xa9",
                        "&#169;": "\xa9",
                        "&reg;": "\xae",
                        "&#174;": "\xae",
                        "&hellip;": "\u2026",
                        "&#8230;": "\u2026",
                        "&#x2F;": "/",
                        "&#47;": "/"
                    },
                    I = function(e) {
                        return N[e]
                    },
                    P = {
                        bindI18n: "languageChanged",
                        bindI18nStore: "",
                        transEmptyNodeValue: "",
                        transSupportBasicHtmlNodes: !0,
                        transWrapTextNodes: "",
                        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                        useSuspense: !0,
                        unescape: function(e) {
                            return e.replace(k, I)
                        }
                    },
                    C = n.createContext();

                function R() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    P = r(r({}, P), e)
                }

                function T() {
                    return P
                }
                var A = function() {
                    function e() {
                        i(this, e), this.usedNamespaces = {}
                    }
                    return c(e, [{
                        key: "addUsedNamespaces",
                        value: function(e) {
                            var n = this;
                            e.forEach((function(e) {
                                n.usedNamespaces[e] || (n.usedNamespaces[e] = !0)
                            }))
                        }
                    }, {
                        key: "getUsedNamespaces",
                        value: function() {
                            return Object.keys(this.usedNamespaces)
                        }
                    }]), e
                }();

                function L(e) {
                    j = e
                }

                function z() {
                    return j
                }
                var B = {
                    type: "3rdParty",
                    init: function(e) {
                        R(e.options.react), L(e)
                    }
                };

                function D(e) {
                    return function(n) {
                        return new Promise((function(t) {
                            var a = F();
                            e.getInitialProps ? e.getInitialProps(n).then((function(e) {
                                t(r(r({}, e), a))
                            })) : t(a)
                        }))
                    }
                }

                function F() {
                    var e = z(),
                        n = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
                        t = {},
                        r = {};
                    return e.languages.forEach((function(t) {
                        r[t] = {}, n.forEach((function(n) {
                            r[t][n] = e.getResourceBundle(t, n) || {}
                        }))
                    })), t.initialI18nStore = r, t.initialLanguage = e.language, t
                }

                function U() {
                    if (console && console.warn) {
                        for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
                        "string" === typeof t[0] && (t[0] = "react-i18next:: ".concat(t[0])), (e = console).warn.apply(e, t)
                    }
                }
                var _ = {};

                function H() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    "string" === typeof n[0] && _[n[0]] || ("string" === typeof n[0] && (_[n[0]] = new Date), U.apply(void 0, n))
                }

                function K(e, n, t) {
                    e.loadNamespaces(n, (function() {
                        if (e.isInitialized) t();
                        else {
                            var n = function n() {
                                setTimeout((function() {
                                    e.off("initialized", n)
                                }), 0), t()
                            };
                            e.on("initialized", n)
                        }
                    }))
                }

                function V(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.languages[0],
                        a = !!n.options && n.options.fallbackLng,
                        i = n.languages[n.languages.length - 1];
                    if ("cimode" === r.toLowerCase()) return !0;
                    var o = function(e, t) {
                        var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
                        return -1 === r || 2 === r
                    };
                    return !(t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !o(n.isLanguageChangingTo, e)) && (!!n.hasResourceBundle(r, e) || !(n.services.backendConnector.backend && (!n.options.resources || n.options.partialBundledLanguages)) || !(!o(r, e) || a && !o(i, e)))
                }

                function W(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.languages && n.languages.length ? void 0 !== n.options.ignoreJSONStructure ? n.hasLoadedNamespace(e, {
                        precheck: function(n, r) {
                            if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !r(n.isLanguageChangingTo, e)) return !1
                        }
                    }) : V(e, n, t) : (H("i18n.languages were undefined or empty", n.languages), !0)
                }

                function M(e) {
                    return e.displayName || e.name || ("string" === typeof e && e.length > 0 ? e : "Unknown")
                }
                var $ = ["format"],
                    q = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

                function Y(e, n) {
                    if (!e) return !1;
                    var t = e.props ? e.props.children : e.children;
                    return n ? t.length > 0 : !!t
                }

                function Z(e) {
                    return e ? e.props ? e.props.children : e.children : []
                }

                function J(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) && e.every((function(e) {
                        return n.isValidElement(e)
                    }))
                }

                function G(e) {
                    return Array.isArray(e) ? e : [e]
                }

                function Q(e, n) {
                    var t = r({}, n);
                    return t.props = Object.assign(e.props, n.props), t
                }

                function X(e, t) {
                    if (!e) return "";
                    var r = "",
                        i = G(e),
                        o = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
                    return i.forEach((function(e, i) {
                        if ("string" === typeof e) r += "".concat(e);
                        else if (n.isValidElement(e)) {
                            var c = Object.keys(e.props).length,
                                s = o.indexOf(e.type) > -1,
                                u = e.props.children;
                            if (!u && s && 0 === c) r += "<".concat(e.type, "/>");
                            else if (u || s && 0 === c)
                                if (e.props.i18nIsDynamicList) r += "<".concat(i, "></").concat(i, ">");
                                else if (s && 1 === c && "string" === typeof u) r += "<".concat(e.type, ">").concat(u, "</").concat(e.type, ">");
                            else {
                                var f = X(u, t);
                                r += "<".concat(i, ">").concat(f, "</").concat(i, ">")
                            } else r += "<".concat(i, "></").concat(i, ">")
                        } else if (null === e) U("Trans: the passed in value is invalid - seems you passed in a null child.");
                        else if ("object" === a(e)) {
                            var p = e.format,
                                d = l(e, $),
                                g = Object.keys(d);
                            if (1 === g.length) {
                                var m = p ? "".concat(g[0], ", ").concat(p) : g[0];
                                r += "{{".concat(m, "}}")
                            } else U("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                        } else U("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                    })), r
                }

                function ee(e, t, i, o, c, s) {
                    if ("" === t) return [];
                    var u = o.transKeepBasicHtmlNodesFor || [],
                        l = t && new RegExp(u.join("|")).test(t);
                    if (!e && !l) return [t];
                    var f = {};

                    function p(e) {
                        G(e).forEach((function(e) {
                            "string" !== typeof e && (Y(e) ? p(Z(e)) : "object" !== a(e) || n.isValidElement(e) || Object.assign(f, e))
                        }))
                    }
                    p(e);
                    var d = S.parse("<0>".concat(t, "</0>")),
                        g = r(r({}, f), c);

                    function m(e, n, t) {
                        var r = Z(e),
                            a = v(r, n.children, t);
                        return J(r) && 0 === a.length ? r : a
                    }

                    function h(e, t, a, i, o) {
                        e.dummy && (e.children = t), a.push(n.cloneElement(e, r(r({}, e.props), {}, {
                            key: i
                        }), o ? void 0 : t))
                    }

                    function v(t, c, f) {
                        var p = G(t);
                        return G(c).reduce((function(t, c, d) {
                            var y = c.children && c.children[0] && c.children[0].content && i.services.interpolator.interpolate(c.children[0].content, g, i.language);
                            if ("tag" === c.type) {
                                var b = p[parseInt(c.name, 10)];
                                !b && 1 === f.length && f[0][c.name] && (b = f[0][c.name]), b || (b = {});
                                var O = 0 !== Object.keys(c.attrs).length ? Q({
                                        props: c.attrs
                                    }, b) : b,
                                    x = n.isValidElement(O),
                                    w = x && Y(c, !0) && !c.voidElement,
                                    E = l && "object" === a(O) && O.dummy && !x,
                                    j = "object" === a(e) && null !== e && Object.hasOwnProperty.call(e, c.name);
                                if ("string" === typeof O) {
                                    var S = i.services.interpolator.interpolate(O, g, i.language);
                                    t.push(S)
                                } else if (Y(O) || w) h(O, m(O, c, f), t, d);
                                else if (E) {
                                    var k = v(p, c.children, f);
                                    t.push(n.cloneElement(O, r(r({}, O.props), {}, {
                                        key: d
                                    }), k))
                                } else if (Number.isNaN(parseFloat(c.name)))
                                    if (j) h(O, m(O, c, f), t, d, c.voidElement);
                                    else if (o.transSupportBasicHtmlNodes && u.indexOf(c.name) > -1)
                                    if (c.voidElement) t.push(n.createElement(c.name, {
                                        key: "".concat(c.name, "-").concat(d)
                                    }));
                                    else {
                                        var N = v(p, c.children, f);
                                        t.push(n.createElement(c.name, {
                                            key: "".concat(c.name, "-").concat(d)
                                        }, N))
                                    }
                                else if (c.voidElement) t.push("<".concat(c.name, " />"));
                                else {
                                    var I = v(p, c.children, f);
                                    t.push("<".concat(c.name, ">").concat(I, "</").concat(c.name, ">"))
                                } else if ("object" !== a(O) || x) 1 === c.children.length && y ? t.push(n.cloneElement(O, r(r({}, O.props), {}, {
                                    key: d
                                }), y)) : t.push(n.cloneElement(O, r(r({}, O.props), {}, {
                                    key: d
                                })));
                                else {
                                    var P = c.children[0] ? y : null;
                                    P && t.push(P)
                                }
                            } else if ("text" === c.type) {
                                var C = o.transWrapTextNodes,
                                    R = s ? o.unescape(i.services.interpolator.interpolate(c.content, g, i.language)) : i.services.interpolator.interpolate(c.content, g, i.language);
                                C ? t.push(n.createElement(C, {
                                    key: "".concat(c.name, "-").concat(d)
                                }, R)) : t.push(R)
                            }
                            return t
                        }), [])
                    }
                    return Z(v([{
                        dummy: !0,
                        children: e || []
                    }], d, G(e || []))[0])
                }

                function ne(e) {
                    var t = e.children,
                        a = e.count,
                        i = e.parent,
                        o = e.i18nKey,
                        c = e.context,
                        s = e.tOptions,
                        u = void 0 === s ? {} : s,
                        f = e.values,
                        p = e.defaults,
                        d = e.components,
                        g = e.ns,
                        m = e.i18n,
                        h = e.t,
                        v = e.shouldUnescape,
                        y = l(e, q),
                        b = n.useContext(C) || {},
                        O = b.i18n,
                        x = b.defaultNS,
                        w = m || O || z();
                    if (!w) return H("You will need to pass in an i18next instance by using i18nextReactModule"), t;
                    var E = h || w.t.bind(w) || function(e) {
                        return e
                    };
                    c && (u.context = c);
                    var j = r(r({}, T()), w.options && w.options.react),
                        S = g || E.ns || x || w.options && w.options.defaultNS;
                    S = "string" === typeof S ? [S] : S || ["translation"];
                    var k = p || X(t, j) || j.transEmptyNodeValue || o,
                        N = j.hashTransKey,
                        I = o || (N ? N(k) : k),
                        P = f ? u.interpolation : {
                            interpolation: r(r({}, u.interpolation), {}, {
                                prefix: "#$?",
                                suffix: "?$#"
                            })
                        },
                        R = r(r(r(r({}, u), {}, {
                            count: a
                        }, f), P), {}, {
                            defaultValue: k,
                            ns: S
                        }),
                        A = ee(d || t, I ? E(I, R) : k, w, j, R, v),
                        L = void 0 !== i ? i : j.defaultTransParent;
                    return L ? n.createElement(L, y, A) : A
                }
                var te = function(e, t) {
                    var r = n.useRef();
                    return n.useEffect((function() {
                        r.current = t ? r.current : e
                    }), [e, t]), r.current
                };

                function re(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = t.i18n,
                        i = n.useContext(C) || {},
                        o = i.i18n,
                        c = i.defaultNS,
                        s = a || o || z();
                    if (s && !s.reportNamespaces && (s.reportNamespaces = new A), !s) {
                        H("You will need to pass in an i18next instance by using initReactI18next");
                        var u = function(e) {
                                return Array.isArray(e) ? e[e.length - 1] : e
                            },
                            l = [u, {}, !1];
                        return l.t = u, l.i18n = {}, l.ready = !1, l
                    }
                    s.options.react && void 0 !== s.options.react.wait && H("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    var p = r(r(r({}, T()), s.options.react), t),
                        d = p.useSuspense,
                        g = p.keyPrefix,
                        m = e || c || s.options && s.options.defaultNS;
                    m = "string" === typeof m ? [m] : m || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(m);
                    var h = (s.isInitialized || s.initializedStoreOnce) && m.every((function(e) {
                        return W(e, s, p)
                    }));

                    function v() {
                        return s.getFixedT(null, "fallback" === p.nsMode ? m : m[0], g)
                    }
                    var y = f(n.useState(v), 2),
                        b = y[0],
                        O = y[1],
                        x = m.join(),
                        w = te(x),
                        E = n.useRef(!0);
                    n.useEffect((function() {
                        var e = p.bindI18n,
                            n = p.bindI18nStore;

                        function t() {
                            E.current && O(v)
                        }
                        return E.current = !0, h || d || K(s, m, (function() {
                                E.current && O(v)
                            })), h && w && w !== x && E.current && O(v), e && s && s.on(e, t), n && s && s.store.on(n, t),
                            function() {
                                E.current = !1, e && s && e.split(" ").forEach((function(e) {
                                    return s.off(e, t)
                                })), n && s && n.split(" ").forEach((function(e) {
                                    return s.store.off(e, t)
                                }))
                            }
                    }), [s, x]);
                    var j = n.useRef(!0);
                    n.useEffect((function() {
                        E.current && !j.current && O(v), j.current = !1
                    }), [s, g]);
                    var S = [b, s, h];
                    if (S.t = b, S.i18n = s, S.ready = h, h) return S;
                    if (!h && !d) return S;
                    throw new Promise((function(e) {
                        K(s, m, (function() {
                            e()
                        }))
                    }))
                }
                var ae = ["forwardedRef"];

                function ie(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return function(a) {
                        function i(i) {
                            var o = i.forwardedRef,
                                c = l(i, ae),
                                s = f(re(e, r(r({}, c), {}, {
                                    keyPrefix: t.keyPrefix
                                })), 3),
                                u = s[0],
                                p = s[1],
                                d = s[2],
                                g = r(r({}, c), {}, {
                                    t: u,
                                    i18n: p,
                                    tReady: d
                                });
                            return t.withRef && o ? g.ref = o : !t.withRef && o && (g.forwardedRef = o), n.createElement(a, g)
                        }
                        i.displayName = "withI18nextTranslation(".concat(M(a), ")"), i.WrappedComponent = a;
                        var o = function(e, t) {
                            return n.createElement(i, Object.assign({}, e, {
                                forwardedRef: t
                            }))
                        };
                        return t.withRef ? n.forwardRef(o) : i
                    }
                }
                var oe = ["ns", "children"];

                function ce(e) {
                    var n = e.ns,
                        t = e.children,
                        r = f(re(n, l(e, oe)), 3),
                        a = r[0],
                        i = r[1],
                        o = r[2];
                    return t(a, {
                        i18n: i,
                        lng: i.language
                    }, o)
                }

                function se(e) {
                    var t = e.i18n,
                        r = e.defaultNS,
                        a = e.children,
                        i = n.useMemo((function() {
                            return {
                                i18n: t,
                                defaultNS: r
                            }
                        }), [t, r]);
                    return n.createElement(C.Provider, {
                        value: i
                    }, a)
                }

                function ue(e, t) {
                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).i18n,
                        a = (n.useContext(C) || {}).i18n,
                        i = r || a || z();
                    i.options && i.options.isClone || (e && !i.initializedStoreOnce && (i.services.resourceStore.data = e, i.options.ns = Object.values(e).reduce((function(e, n) {
                        return Object.keys(n).forEach((function(n) {
                            e.indexOf(n) < 0 && e.push(n)
                        })), e
                    }), i.options.ns), i.initializedStoreOnce = !0, i.isInitialized = !0), t && !i.initializedLanguageOnce && (i.changeLanguage(t), i.initializedLanguageOnce = !0))
                }
                var le = ["initialI18nStore", "initialLanguage"];

                function fe() {
                    return function(e) {
                        function t(t) {
                            var a = t.initialI18nStore,
                                i = t.initialLanguage,
                                o = l(t, le);
                            return ue(a, i), n.createElement(e, r({}, o))
                        }
                        return t.getInitialProps = D(e), t.displayName = "withI18nextSSR(".concat(M(e), ")"), t.WrappedComponent = e, t
                    }
                }
                var pe = function() {
                        return ""
                    },
                    de = function() {
                        return ""
                    },
                    ge = function() {
                        return ""
                    },
                    me = function() {
                        return ""
                    },
                    he = function() {
                        return ""
                    },
                    ve = function() {
                        return ""
                    };
                e.I18nContext = C, e.I18nextProvider = se, e.Trans = ne, e.Translation = ce, e.composeInitialProps = D, e.date = pe, e.getDefaults = T, e.getI18n = z, e.getInitialProps = F, e.initReactI18next = B, e.number = ge, e.plural = he, e.select = me, e.selectOrdinal = ve, e.setDefaults = R, e.setI18n = L, e.time = de, e.useSSR = ue, e.useTranslation = re, e.withSSR = fe, e.withTranslation = ie, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(n, t("DTvD"))
        }
    }
]);
//# debugId=2b79e7f1-615d-5b0d-a4f3-7247eb686e16