"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5355e194-0365-50fa-90e8-9f80d4cb10c2")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [175], {
        RGyw: (e, r, o) => {
            o.d(r, {
                A: () => s
            });
            var t = o("wIZF"),
                n = o("DTvD"),
                i = o.n(n),
                l = o("9xbI"),
                a = (0, n.forwardRef)((function(e, r) {
                    return i().createElement(l.A, (0, t.__assign)({}, e, {
                        ref: r
                    }))
                }));
            a.displayName = "Box";
            const s = a
        },
        ZCCp: (e, r, o) => {
            o.d(r, {
                A: () => n
            });
            var t = o("DTvD");
            const n = (0, t.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        Y4uf: (e, r, o) => {
            o.d(r, {
                A: () => d
            });
            var t = o("wIZF"),
                n = o("DTvD"),
                i = o.n(n),
                l = o("O94r"),
                a = o.n(l),
                s = o("RGyw"),
                c = o("ZCCp");
            const d = function(e) {
                var r = (0, n.useContext)(c.A).prefixCls,
                    o = e.color,
                    l = (e.name, e.viewBox),
                    d = void 0 === l ? "0 0 96 96" : l,
                    u = e.children,
                    p = (0, t.__rest)(e, ["color", "name", "viewBox", "children"]),
                    f = a()("".concat(r, "-svg"), e.className),
                    b = {
                        as: "svg",
                        viewBox: d,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: o
                    };
                return i().createElement(s.A, (0, t.__assign)({}, p, b, {
                    className: f,
                    children: u
                }))
            }
        },
        vtOj: (e, r, o) => {
            o.d(r, {
                A: () => a
            });
            var t = o("wIZF"),
                n = o("DTvD"),
                i = o.n(n),
                l = o("Y4uf");
            const a = function(e) {
                return i().createElement(l.A, (0, t.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    opacity: .5,
                    d: "M84 28H64V8l20 20z",
                    fill: "#AEB4BC"
                }), i().createElement("path", {
                    opacity: .2,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24 8h40v20h20v60H24V8zm10 30h40v4H34v-4zm40 8H34v4h40v-4zm-40 8h40v4H34v-4z",
                    fill: "#AEB4BC"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.137 64.105c7.828 5.781 18.916 5.127 26.005-1.963 7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.284 0-7.09 7.09-7.744 18.177-1.964 26.005l-14.3 14.3 4.243 4.243 14.3-14.3zM43.9 57.9c-5.467 5.468-14.331 5.468-19.799 0-5.467-5.467-5.467-14.331 0-19.799 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8z",
                    fill: "#AEB4BC"
                }))
            }
        },
        "9xbI": (e, r, o) => {
            o.d(r, {
                A: () => l
            });
            var t = o("wIZF"),
                n = o("DTvD"),
                i = o.n(n);
            const l = (0, n.forwardRef)((function(e, r) {
                var o = e.as,
                    n = void 0 === o ? "div" : o,
                    l = (0, t.__rest)(e, ["as"]);
                return i().createElement(n, (0, t.__assign)((0, t.__assign)({}, l), {
                    ref: r
                }))
            }))
        },
        "7O4Y": (e, r, o) => {
            function t(e) {
                var r, o, n = "";
                if ("string" === typeof e || "number" === typeof e) n += e;
                else if ("object" === typeof e)
                    if (Array.isArray(e))
                        for (r = 0; r < e.length; r++) e[r] && (o = t(e[r])) && (n && (n += " "), n += o);
                    else
                        for (r in e) e[r] && (n && (n += " "), n += r);
                return n
            }

            function n() {
                for (var e, r, o = 0, n = ""; o < arguments.length;)(e = arguments[o++]) && (r = t(e)) && (n && (n += " "), n += r);
                return n
            }
            o.d(r, {
                A: () => n
            })
        },
        VXBK: (e, r, o) => {
            o.d(r, {
                NP: () => u,
                DP: () => p
            });
            var t = o("OHGK"),
                n = o("DTvD"),
                i = o.n(n),
                l = o("06hb");
            const a = function(e) {
                var r = new WeakMap;
                return function(o) {
                    if (r.has(o)) return r.get(o);
                    var t = e(o);
                    return r.set(o, t), t
                }
            };
            o("oXkQ");

            function s(e, r) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }
            var c = function(e, r) {
                    return "function" === typeof r ? r(e) : function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var o = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? s(o, !0).forEach((function(r) {
                                (0, t.A)(e, r, o[r])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : s(o).forEach((function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r))
                            }))
                        }
                        return e
                    }({}, e, {}, r)
                },
                d = a((function(e) {
                    return a((function(r) {
                        return c(e, r)
                    }))
                })),
                u = function(e) {
                    return (0, n.createElement)(l.ThemeContext.Consumer, null, (function(r) {
                        return e.theme !== r && (r = d(r)(e.theme)), (0, n.createElement)(l.ThemeContext.Provider, {
                            value: r
                        }, e.children)
                    }))
                };

            function p() {
                return i().useContext(l.ThemeContext)
            }
        },
        "9EqV": (e, r, o) => {
            o.d(r, {
                Q: () => F
            });

            function t(e) {
                var r = function(e) {
                        var r = e.theme,
                            o = e.prefix,
                            t = {
                                nextPart: new Map,
                                validators: []
                            };
                        return s(Object.entries(e.classGroups), o).forEach((function(e) {
                            var o = e[0];
                            l(e[1], t, o, r)
                        })), t
                    }(e),
                    o = e.conflictingClassGroups,
                    t = e.conflictingClassGroupModifiers,
                    a = void 0 === t ? {} : t;
                return {
                    getClassGroupId: function(e) {
                        var o = e.split("-");
                        return "" === o[0] && 1 !== o.length && o.shift(), n(o, r) || function(e) {
                            if (i.test(e)) {
                                var r = i.exec(e)[1],
                                    o = r ? .substring(0, r.indexOf(":"));
                                if (o) return "arbitrary.." + o
                            }
                        }(e)
                    },
                    getConflictingClassGroupIds: function(e, r) {
                        var t = o[e] || [];
                        return r && a[e] ? [].concat(t, a[e]) : t
                    }
                }
            }

            function n(e, r) {
                if (0 === e.length) return r.classGroupId;
                var o = e[0],
                    t = r.nextPart.get(o),
                    i = t ? n(e.slice(1), t) : void 0;
                if (i) return i;
                if (0 !== r.validators.length) {
                    var l = e.join("-");
                    return r.validators.find((function(e) {
                        return (0, e.validator)(l)
                    })) ? .classGroupId
                }
            }
            var i = /^\[(.+)\]$/;

            function l(e, r, o, t) {
                e.forEach((function(e) {
                    if ("string" !== typeof e) {
                        if ("function" === typeof e) return e.isThemeGetter ? void l(e(t), r, o, t) : void r.validators.push({
                            validator: e,
                            classGroupId: o
                        });
                        Object.entries(e).forEach((function(e) {
                            var n = e[0];
                            l(e[1], a(r, n), o, t)
                        }))
                    } else {
                        ("" === e ? r : a(r, e)).classGroupId = o
                    }
                }))
            }

            function a(e, r) {
                var o = e;
                return r.split("-").forEach((function(e) {
                    o.nextPart.has(e) || o.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), o = o.nextPart.get(e)
                })), o
            }

            function s(e, r) {
                return r ? e.map((function(e) {
                    return [e[0], e[1].map((function(e) {
                        return "string" === typeof e ? r + e : "object" === typeof e ? Object.fromEntries(Object.entries(e).map((function(e) {
                            var o = e[0],
                                t = e[1];
                            return [r + o, t]
                        }))) : e
                    }))]
                })) : e
            }

            function c(e) {
                if (e < 1) return {
                    get: function() {},
                    set: function() {}
                };
                var r = 0,
                    o = new Map,
                    t = new Map;

                function n(n, i) {
                    o.set(n, i), ++r > e && (r = 0, t = o, o = new Map)
                }
                return {
                    get: function(e) {
                        var r = o.get(e);
                        return void 0 !== r ? r : void 0 !== (r = t.get(e)) ? (n(e, r), r) : void 0
                    },
                    set: function(e, r) {
                        o.has(e) ? o.set(e, r) : n(e, r)
                    }
                }
            }

            function d(e) {
                var r = e.separator || ":",
                    o = 1 === r.length,
                    t = r[0],
                    n = r.length;
                return function(e) {
                    for (var i, l = [], a = 0, s = 0, c = 0; c < e.length; c++) {
                        var d = e[c];
                        if (0 === a) {
                            if (d === t && (o || e.slice(c, c + n) === r)) {
                                l.push(e.slice(s, c)), s = c + n;
                                continue
                            }
                            if ("/" === d) {
                                i = c;
                                continue
                            }
                        }
                        "[" === d ? a++ : "]" === d && a--
                    }
                    var u = 0 === l.length ? e : e.substring(s),
                        p = u.startsWith("!");
                    return {
                        modifiers: l,
                        hasImportantModifier: p,
                        baseClassName: p ? u.substring(1) : u,
                        maybePostfixModifierPosition: i && i > s ? i - s : void 0
                    }
                }
            }

            function u(e) {
                return {
                    cache: c(e.cacheSize),
                    splitModifiers: d(e),
                    ...t(e)
                }
            }
            var p = /\s+/;

            function f(e, r) {
                var o = r.splitModifiers,
                    t = r.getClassGroupId,
                    n = r.getConflictingClassGroupIds,
                    i = new Set;
                return e.trim().split(p).map((function(e) {
                    var r = o(e),
                        n = r.modifiers,
                        i = r.hasImportantModifier,
                        l = r.baseClassName,
                        a = r.maybePostfixModifierPosition,
                        s = t(a ? l.substring(0, a) : l),
                        c = Boolean(a);
                    if (!s) {
                        if (!a) return {
                            isTailwindClass: !1,
                            originalClassName: e
                        };
                        if (!(s = t(l))) return {
                            isTailwindClass: !1,
                            originalClassName: e
                        };
                        c = !1
                    }
                    var d = function(e) {
                        if (e.length <= 1) return e;
                        var r = [],
                            o = [];
                        return e.forEach((function(e) {
                            "[" === e[0] ? (r.push.apply(r, o.sort().concat([e])), o = []) : o.push(e)
                        })), r.push.apply(r, o.sort()), r
                    }(n).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: i ? d + "!" : d,
                        classGroupId: s,
                        originalClassName: e,
                        hasPostfixModifier: c
                    }
                })).reverse().filter((function(e) {
                    if (!e.isTailwindClass) return !0;
                    var r = e.modifierId,
                        o = e.classGroupId,
                        t = e.hasPostfixModifier,
                        l = r + o;
                    return !i.has(l) && (i.add(l), n(o, t).forEach((function(e) {
                        return i.add(r + e)
                    })), !0)
                })).reverse().map((function(e) {
                    return e.originalClassName
                })).join(" ")
            }

            function b() {
                for (var e, r, o = 0, t = ""; o < arguments.length;)(e = arguments[o++]) && (r = m(e)) && (t && (t += " "), t += r);
                return t
            }

            function m(e) {
                if ("string" === typeof e) return e;
                for (var r, o = "", t = 0; t < e.length; t++) e[t] && (r = m(e[t])) && (o && (o += " "), o += r);
                return o
            }

            function g() {
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                var t, n, i, l = a;

                function a(e) {
                    var o = r[0],
                        a = r.slice(1).reduce((function(e, r) {
                            return r(e)
                        }), o());
                    return t = u(a), n = t.cache.get, i = t.cache.set, l = s, s(e)
                }

                function s(e) {
                    var r = n(e);
                    if (r) return r;
                    var o = f(e, t);
                    return i(e, o), o
                }
                return function() {
                    return l(b.apply(null, arguments))
                }
            }

            function v(e) {
                var r = function(r) {
                    return r[e] || []
                };
                return r.isThemeGetter = !0, r
            }
            var h = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                y = /^\d+\/\d+$/,
                x = new Set(["px", "full", "screen"]),
                w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                k = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                C = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function z(e) {
                return G(e) || x.has(e) || y.test(e) || j(e)
            }

            function j(e) {
                return B(e, "length", R)
            }

            function P(e) {
                return B(e, "size", S)
            }

            function O(e) {
                return B(e, "position", S)
            }

            function E(e) {
                return B(e, "url", H)
            }

            function I(e) {
                return B(e, "number", G)
            }

            function G(e) {
                return !Number.isNaN(Number(e))
            }

            function M(e) {
                return e.endsWith("%") && G(e.slice(0, -1))
            }

            function A(e) {
                return W(e) || B(e, "number", W)
            }

            function D(e) {
                return h.test(e)
            }

            function _() {
                return !0
            }

            function N(e) {
                return w.test(e)
            }

            function T(e) {
                return B(e, "", Z)
            }

            function B(e, r, o) {
                var t = h.exec(e);
                return !!t && (t[1] ? t[1] === r : o(t[2]))
            }

            function R(e) {
                return k.test(e)
            }

            function S() {
                return !1
            }

            function H(e) {
                return e.startsWith("url(")
            }

            function W(e) {
                return Number.isInteger(Number(e))
            }

            function Z(e) {
                return C.test(e)
            }

            function $() {
                var e = v("colors"),
                    r = v("spacing"),
                    o = v("blur"),
                    t = v("brightness"),
                    n = v("borderColor"),
                    i = v("borderRadius"),
                    l = v("borderSpacing"),
                    a = v("borderWidth"),
                    s = v("contrast"),
                    c = v("grayscale"),
                    d = v("hueRotate"),
                    u = v("invert"),
                    p = v("gap"),
                    f = v("gradientColorStops"),
                    b = v("gradientColorStopPositions"),
                    m = v("inset"),
                    g = v("margin"),
                    h = v("opacity"),
                    y = v("padding"),
                    x = v("saturate"),
                    w = v("scale"),
                    k = v("sepia"),
                    C = v("skew"),
                    B = v("space"),
                    R = v("translate"),
                    S = function() {
                        return ["auto", D, r]
                    },
                    H = function() {
                        return [D, r]
                    },
                    W = function() {
                        return ["", z]
                    },
                    Z = function() {
                        return ["auto", G, D]
                    },
                    $ = function() {
                        return ["", "0", D]
                    },
                    F = function() {
                        return [G, I]
                    },
                    V = function() {
                        return [G, D]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [_],
                        spacing: [z],
                        blur: ["none", "", N, D],
                        brightness: F(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", N, D],
                        borderSpacing: H(),
                        borderWidth: W(),
                        contrast: F(),
                        grayscale: $(),
                        hueRotate: V(),
                        invert: $(),
                        gap: H(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [M, j],
                        inset: S(),
                        margin: S(),
                        opacity: F(),
                        padding: H(),
                        saturate: F(),
                        scale: F(),
                        sepia: $(),
                        skew: V(),
                        space: H(),
                        translate: H()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", D]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [N]
                        }],
                        "break-after": [{
                            "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                        }],
                        "break-before": [{
                            "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [D])
                        }],
                        overflow: [{
                            overflow: ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        "overflow-x": [{
                            "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        "overflow-y": [{
                            "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        overscroll: [{
                            overscroll: ["auto", "contain", "none"]
                        }],
                        "overscroll-x": [{
                            "overscroll-x": ["auto", "contain", "none"]
                        }],
                        "overscroll-y": [{
                            "overscroll-y": ["auto", "contain", "none"]
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", A]
                        }],
                        basis: [{
                            basis: S()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", D]
                        }],
                        grow: [{
                            grow: $()
                        }],
                        shrink: [{
                            shrink: $()
                        }],
                        order: [{
                            order: ["first", "last", "none", A]
                        }],
                        "grid-cols": [{
                            "grid-cols": [_]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", A]
                            }, D]
                        }],
                        "col-start": [{
                            "col-start": Z()
                        }],
                        "col-end": [{
                            "col-end": Z()
                        }],
                        "grid-rows": [{
                            "grid-rows": [_]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [A]
                            }, D]
                        }],
                        "row-start": [{
                            "row-start": Z()
                        }],
                        "row-end": [{
                            "row-end": Z()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", D]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", D]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(["start", "end", "center", "between", "around", "evenly", "stretch"])
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(["start", "end", "center", "between", "around", "evenly", "stretch"], ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(["start", "end", "center", "between", "around", "evenly", "stretch"], ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [y]
                        }],
                        px: [{
                            px: [y]
                        }],
                        py: [{
                            py: [y]
                        }],
                        ps: [{
                            ps: [y]
                        }],
                        pe: [{
                            pe: [y]
                        }],
                        pt: [{
                            pt: [y]
                        }],
                        pr: [{
                            pr: [y]
                        }],
                        pb: [{
                            pb: [y]
                        }],
                        pl: [{
                            pl: [y]
                        }],
                        m: [{
                            m: [g]
                        }],
                        mx: [{
                            mx: [g]
                        }],
                        my: [{
                            my: [g]
                        }],
                        ms: [{
                            ms: [g]
                        }],
                        me: [{
                            me: [g]
                        }],
                        mt: [{
                            mt: [g]
                        }],
                        mr: [{
                            mr: [g]
                        }],
                        mb: [{
                            mb: [g]
                        }],
                        ml: [{
                            ml: [g]
                        }],
                        "space-x": [{
                            "space-x": [B]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [B]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", D, r]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", D, z]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [N]
                            }, N, D]
                        }],
                        h: [{
                            h: [D, r, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", D, z]
                        }],
                        "max-h": [{
                            "max-h": [D, r, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", N, j]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", I]
                        }],
                        "font-family": [{
                            font: [_]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", G, I]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", D, z]
                        }],
                        "list-image": [{
                            "list-image": ["none", D]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", D]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [h]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [h]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(["solid", "dashed", "dotted", "double", "none"], ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", z]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", D, z]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: H()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", D]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [h]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [O])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", P]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, E]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [b]
                        }],
                        "gradient-via-pos": [{
                            via: [b]
                        }],
                        "gradient-to-pos": [{
                            to: [b]
                        }],
                        "gradient-from": [{
                            from: [f]
                        }],
                        "gradient-via": [{
                            via: [f]
                        }],
                        "gradient-to": [{
                            to: [f]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [a]
                        }],
                        "border-w-x": [{
                            "border-x": [a]
                        }],
                        "border-w-y": [{
                            "border-y": [a]
                        }],
                        "border-w-s": [{
                            "border-s": [a]
                        }],
                        "border-w-e": [{
                            "border-e": [a]
                        }],
                        "border-w-t": [{
                            "border-t": [a]
                        }],
                        "border-w-r": [{
                            "border-r": [a]
                        }],
                        "border-w-b": [{
                            "border-b": [a]
                        }],
                        "border-w-l": [{
                            "border-l": [a]
                        }],
                        "border-opacity": [{
                            "border-opacity": [h]
                        }],
                        "border-style": [{
                            border: [].concat(["solid", "dashed", "dotted", "double", "none"], ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [a]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [a]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [h]
                        }],
                        "divide-style": [{
                            divide: ["solid", "dashed", "dotted", "double", "none"]
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: [""].concat(["solid", "dashed", "dotted", "double", "none"])
                        }],
                        "outline-offset": [{
                            "outline-offset": [D, z]
                        }],
                        "outline-w": [{
                            outline: [z]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: W()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [h]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [z]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", N, T]
                        }],
                        "shadow-color": [{
                            shadow: [_]
                        }],
                        opacity: [{
                            opacity: [h]
                        }],
                        "mix-blend": [{
                            "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [o]
                        }],
                        brightness: [{
                            brightness: [t]
                        }],
                        contrast: [{
                            contrast: [s]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", N, D]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [d]
                        }],
                        invert: [{
                            invert: [u]
                        }],
                        saturate: [{
                            saturate: [x]
                        }],
                        sepia: [{
                            sepia: [k]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [o]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [t]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [s]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [d]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [u]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [h]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [x]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [k]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
                        }],
                        duration: [{
                            duration: V()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", D]
                        }],
                        delay: [{
                            delay: V()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", D]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [A, D]
                        }],
                        "translate-x": [{
                            "translate-x": [R]
                        }],
                        "translate-y": [{
                            "translate-y": [R]
                        }],
                        "skew-x": [{
                            "skew-x": [C]
                        }],
                        "skew-y": [{
                            "skew-y": [C]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": H()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": H()
                        }],
                        "scroll-my": [{
                            "scroll-my": H()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": H()
                        }],
                        "scroll-me": [{
                            "scroll-me": H()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": H()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": H()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": H()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": H()
                        }],
                        "scroll-p": [{
                            "scroll-p": H()
                        }],
                        "scroll-px": [{
                            "scroll-px": H()
                        }],
                        "scroll-py": [{
                            "scroll-py": H()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": H()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": H()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": H()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": H()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": H()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": H()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", D]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [z, I]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            var F = g($)
        }
    }
]);
//# debugId=5355e194-0365-50fa-90e8-9f80d4cb10c2