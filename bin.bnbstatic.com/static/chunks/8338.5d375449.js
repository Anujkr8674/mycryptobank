! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fc015b77-ff78-5d5d-b926-2b3d5a693d96")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [8338, 6635, 1651], {
        Ctxr: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var n = r("BK7R"),
                o = r("TrCV"),
                s = r("DTvD"),
                i = r("Pgl2"),
                a = r.n(i),
                c = r("PZQm"),
                l = r.n(c),
                u = r("yhUQ");
            const p = function(e) {
                var t = e.children,
                    r = e.linkSx,
                    i = e.linkTrackingId,
                    c = e.as,
                    p = void 0 === c ? "div" : c,
                    h = e.html,
                    f = void 0 !== h && h,
                    d = (0, s.useRef)(null),
                    m = (0, s.useMemo)((function() {
                        if ("string" !== typeof t) return t;
                        var e = l()({
                            html: f,
                            linkify: !0
                        }).renderInline(t);
                        return a().addHook("afterSanitizeAttributes", (function(e) {
                            "A" === e.tagName && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener"), i && e.setAttribute("id", i))
                        })), a().sanitize(e)
                    }), [t, f, i]);
                return (0, o.jsx)(u.A, {
                    ref: d,
                    as: p,
                    sx: {
                        a: (0, n.A)({
                            cursor: "pointer",
                            color: "t.link",
                            fontWeight: 400,
                            textDecoration: "underline"
                        }, r)
                    },
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })
            }
        },
        qiQk: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => k
            });
            var n = r("ezuS"),
                o = r("BK7R"),
                s = r("QUKP"),
                i = r("TrCV"),
                a = r("DTvD"),
                c = r("HcTV"),
                l = r("yhUQ"),
                u = r("LCuF"),
                p = r("cJDP"),
                h = r("r4I4"),
                f = r("W0Zr"),
                d = r("U4lP"),
                m = r("eM92"),
                g = r("Ctxr"),
                _ = "last-time-show-show-down-fiat-notice",
                b = function(e) {
                    var t, r = e.visible,
                        n = e.onClose,
                        o = e.tipConfig,
                        s = (0, c.Ay)().t,
                        f = (0, a.useState)(!1),
                        _ = f[0],
                        b = f[1],
                        k = (0, d.A)({
                            countFrom: null === o || void 0 === o ? void 0 : o.beforeClosureTime,
                            onEnd: function() {
                                return b(!0)
                            }
                        }).timeLeft;
                    return (0, a.useEffect)((function() {
                        r || b(!1)
                    }), [r]), (0, i.jsxs)(h.Ay.Modal, {
                        visible: r,
                        sx: {
                            width: ["298px", "360px"],
                            p: 4,
                            pb: 3
                        },
                        responsive: !1,
                        children: [(0, i.jsx)(l.A, {
                            mb: 2,
                            variant: "subtitle1",
                            fontSize: "20px",
                            textAlign: "center",
                            children: s("c2c-ui-shutdown-fiat-region-notice-title")
                        }), (0, i.jsx)(l.A, {
                            variant: "body2",
                            sx: {
                                a: {
                                    color: "t.link"
                                },
                                color: "t.secondary",
                                wordBreak: "break-word"
                            },
                            mb: 4,
                            children: (0, i.jsx)(g.A, {
                                as: "span",
                                html: !0,
                                children: null !== (t = null === o || void 0 === o ? void 0 : o.content) && void 0 !== t ? t : ""
                            })
                        }), (0, i.jsxs)(u.A, {
                            children: [(0, i.jsx)(p.A, {
                                id: "c2c_offerList_fiatRedirection_btn_startTrade",
                                as: "a",
                                href: null === o || void 0 === o ? void 0 : o.targetUrl,
                                target: "__blank",
                                sx: {
                                    width: "100%",
                                    py: 2,
                                    mb: "s"
                                },
                                children: (null === o || void 0 === o ? void 0 : o.targetBtnContent) || s("c2c-ui-shutdown-fiat-region-notice-go-to-trade")
                            }), (0, i.jsxs)(p.A, {
                                id: "c2c_offerList_fiatRedirection_btn_ok",
                                sx: {
                                    width: "100%",
                                    py: 2
                                },
                                variant: "quiet",
                                disabled: !_,
                                onClick: n,
                                children: [(0, i.jsx)(l.A, {
                                    color: _ ? "t.yellow" : "t.disabled",
                                    sx: {
                                        textTransform: "uppercase"
                                    },
                                    children: s(m.o.ok)
                                }), k > 0 && (0, i.jsx)(l.A, {
                                    color: "t.yellow",
                                    ml: 2,
                                    children: s("c2c-ui-shutdown-fiat-region-notice-timer", {
                                        time: k
                                    })
                                })]
                            })]
                        })]
                    })
                };
            const k = function(e) {
                var t, r = e.fiat,
                    c = (0, a.useState)(!1),
                    l = c[0],
                    u = c[1],
                    p = (0, f.k)(r, {
                        enabled: !!r
                    });
                return (0, a.useEffect)((function() {
                    var e, t, i;
                    if ((null === p || void 0 === p ? void 0 : p.isSuccess) && (null === p || void 0 === p || null === (e = p.data) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.isShowTips)) {
                        var a, c = (null !== (a = null === p || void 0 === p || null === (i = p.data) || void 0 === i ? void 0 : i.data) && void 0 !== a ? a : {}).validTime,
                            l = {};
                        try {
                            l = localStorage.getItem(_) ? JSON.parse(localStorage.getItem(_)) : {}
                        } catch (f) {
                            l = {}
                        }
                        var h = l[r];
                        (new Date).getTime() - (h || 0) > 60 * c * 1e3 && (u(!0), localStorage.setItem(_, JSON.stringify((0, s.A)((0, o.A)({}, l), (0, n.A)({}, r, +new Date)))))
                    }
                }), [null === p || void 0 === p ? void 0 : p.data, null === p || void 0 === p ? void 0 : p.isSuccess, r]), (0, i.jsx)(b, {
                    visible: l,
                    onClose: function() {
                        return u(!1)
                    },
                    tipConfig: null === p || void 0 === p || null === (t = p.data) || void 0 === t ? void 0 : t.data
                })
            }
        },
        W0Zr: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => c,
                k: () => l
            });
            var n = r("tEf9"),
                o = r("FYhw"),
                s = r("V3BA"),
                i = r("+bTb"),
                a = {
                    all: ["sysConfig"],
                    sellerCancelReasonTtl: function(e) {
                        return (0, n.A)(a.all).concat(["sellerCancelReasonTtl", e])
                    },
                    tipConfig: function(e) {
                        return (0, n.A)(a.all).concat(["tipConfig", e])
                    }
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.I)([a.sellerCancelReasonTtl(e)], (function() {
                        return (0, i.Vo)(s.A.GET_SELLER_CANCEL_REASON_TTL, {
                            fiat: e
                        })
                    }), t)
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.I)([a.tipConfig(e)], (function() {
                        return (0, i.fH)(s.A.GET_ALERT_STATS, {
                            fiatUnit: e
                        })
                    }), t)
                }
        },
        U4lP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("DTvD"),
                o = r("71ih");
            const s = function(e) {
                var t = e.countFrom,
                    r = void 0 === t ? 0 : t,
                    s = e.onEnd,
                    i = void 0 === s ? function() {} : s,
                    a = (0, n.useState)(r),
                    c = a[0],
                    l = a[1],
                    u = (0, n.useRef)(i),
                    p = (0, n.useRef)();
                (0, n.useEffect)((function() {
                    u.current = i
                }), [i]), (0, n.useEffect)((function() {
                    l(r)
                }), [r]);
                var h = function() {
                    p.current = setInterval((function() {
                        l((function(e) {
                            var t;
                            return e - 1 >= 0 ? e - 1 : (null === (t = u.current) || void 0 === t || t.call(u), clearInterval(p.current), e)
                        }))
                    }), 1e3)
                };
                (0, n.useEffect)((function() {
                    return r > 0 && h(),
                        function() {
                            p.current && clearInterval(p.current)
                        }
                }), [r]);
                return {
                    countdownTimer: (0, n.useMemo)((function() {
                        return (0, o.lp)(c)
                    }), [c]),
                    timeLeft: c,
                    reset: function() {
                        l(r), h()
                    }
                }
            }
        },
        "71ih": (e, t, r) => {
            "use strict";
            r.d(t, {
                _3: () => s,
                lp: () => a,
                td: () => i
            });
            var n = r("wgY5"),
                o = r.n(n),
                s = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
                i = function(e) {
                    return null === s || void 0 === s ? void 0 : s[e]
                },
                a = function(e) {
                    if (e <= 0) return "00:00:00";
                    var t = o()().add(e, "seconds").diff(o()()),
                        r = Math.floor(o().duration(t).asHours());
                    return "".concat(r > 0 ? "".concat(r, ":") : "").concat(o()(t).format("mm:ss"))
                }
        },
        Pgl2: function(e) {
            e.exports = function() {
                "use strict";

                function e(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }
                var t = Object.hasOwnProperty,
                    r = Object.setPrototypeOf,
                    n = Object.isFrozen,
                    o = Object.getPrototypeOf,
                    s = Object.getOwnPropertyDescriptor,
                    i = Object.freeze,
                    a = Object.seal,
                    c = Object.create,
                    l = "undefined" !== typeof Reflect && Reflect,
                    u = l.apply,
                    p = l.construct;
                u || (u = function(e, t, r) {
                    return e.apply(t, r)
                }), i || (i = function(e) {
                    return e
                }), a || (a = function(e) {
                    return e
                }), p || (p = function(t, r) {
                    return new(Function.prototype.bind.apply(t, [null].concat(e(r))))
                });
                var h = x(Array.prototype.forEach),
                    f = x(Array.prototype.pop),
                    d = x(Array.prototype.push),
                    m = x(String.prototype.toLowerCase),
                    g = x(String.prototype.match),
                    _ = x(String.prototype.replace),
                    b = x(String.prototype.indexOf),
                    k = x(String.prototype.trim),
                    v = x(RegExp.prototype.test),
                    y = A(TypeError);

                function x(e) {
                    return function(t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return u(e, t, n)
                    }
                }

                function A(e) {
                    return function() {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return p(e, r)
                    }
                }

                function C(e, t) {
                    r && r(e, null);
                    for (var o = t.length; o--;) {
                        var s = t[o];
                        if ("string" === typeof s) {
                            var i = m(s);
                            i !== s && (n(t) || (t[o] = i), s = i)
                        }
                        e[s] = !0
                    }
                    return e
                }

                function w(e) {
                    var r = c(null),
                        n = void 0;
                    for (n in e) u(t, e, [n]) && (r[n] = e[n]);
                    return r
                }

                function D(e, t) {
                    for (; null !== e;) {
                        var r = s(e, t);
                        if (r) {
                            if (r.get) return x(r.get);
                            if ("function" === typeof r.value) return x(r.value)
                        }
                        e = o(e)
                    }

                    function n(e) {
                        return console.warn("fallback value for", e), null
                    }
                    return n
                }
                var E = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    S = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    T = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    L = i(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    q = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    F = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    z = i(["#text"]),
                    R = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                    I = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    M = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    N = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    O = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    B = a(/<%[\s\S]*|[\s\S]*%>/gm),
                    U = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                    j = a(/^aria-[\-\w]+$/),
                    P = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    V = a(/^(?:\w+script|data):/i),
                    H = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    Z = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                function G(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }
                var $ = function() {
                        return window
                    },
                    W = function(e, t) {
                        if ("object" !== ("undefined" === typeof e ? "undefined" : Z(e)) || "function" !== typeof e.createPolicy) return null;
                        var r = null,
                            n = "data-tt-policy-suffix";
                        t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
                        var o = "dompurify" + (r ? "#" + r : "");
                        try {
                            return e.createPolicy(o, {
                                createHTML: function(e) {
                                    return e
                                }
                            })
                        } catch (s) {
                            return console.warn("TrustedTypes policy " + o + " could not be created."), null
                        }
                    };

                function J() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(),
                        t = function(e) {
                            return J(e)
                        };
                    if (t.version = "2.3.1", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
                    var r = e.document,
                        n = e.document,
                        o = e.DocumentFragment,
                        s = e.HTMLTemplateElement,
                        a = e.Node,
                        c = e.Element,
                        l = e.NodeFilter,
                        u = e.NamedNodeMap,
                        p = void 0 === u ? e.NamedNodeMap || e.MozNamedAttrMap : u,
                        x = e.Text,
                        A = e.Comment,
                        Y = e.DOMParser,
                        Q = e.trustedTypes,
                        K = c.prototype,
                        X = D(K, "cloneNode"),
                        ee = D(K, "nextSibling"),
                        te = D(K, "childNodes"),
                        re = D(K, "parentNode");
                    if ("function" === typeof s) {
                        var ne = n.createElement("template");
                        ne.content && ne.content.ownerDocument && (n = ne.content.ownerDocument)
                    }
                    var oe = W(Q, r),
                        se = oe && Ne ? oe.createHTML("") : "",
                        ie = n,
                        ae = ie.implementation,
                        ce = ie.createNodeIterator,
                        le = ie.createDocumentFragment,
                        ue = ie.getElementsByTagName,
                        pe = r.importNode,
                        he = {};
                    try {
                        he = w(n).documentMode ? n.documentMode : {}
                    } catch (bt) {}
                    var fe = {};
                    t.isSupported = "function" === typeof re && ae && "undefined" !== typeof ae.createHTMLDocument && 9 !== he;
                    var de = O,
                        me = B,
                        ge = U,
                        _e = j,
                        be = V,
                        ke = H,
                        ve = P,
                        ye = null,
                        xe = C({}, [].concat(G(E), G(S), G(T), G(q), G(z))),
                        Ae = null,
                        Ce = C({}, [].concat(G(R), G(I), G(M), G(N))),
                        we = null,
                        De = null,
                        Ee = !0,
                        Se = !0,
                        Te = !1,
                        Le = !1,
                        qe = !1,
                        Fe = !1,
                        ze = !1,
                        Re = !1,
                        Ie = !1,
                        Me = !0,
                        Ne = !1,
                        Oe = !0,
                        Be = !0,
                        Ue = !1,
                        je = {},
                        Pe = null,
                        Ve = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        He = null,
                        Ze = C({}, ["audio", "video", "img", "source", "image", "track"]),
                        Ge = null,
                        $e = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        We = "http://www.w3.org/1998/Math/MathML",
                        Je = "http://www.w3.org/2000/svg",
                        Ye = "http://www.w3.org/1999/xhtml",
                        Qe = Ye,
                        Ke = !1,
                        Xe = null,
                        et = n.createElement("form"),
                        tt = function(e) {
                            Xe && Xe === e || (e && "object" === ("undefined" === typeof e ? "undefined" : Z(e)) || (e = {}), e = w(e), ye = "ALLOWED_TAGS" in e ? C({}, e.ALLOWED_TAGS) : xe, Ae = "ALLOWED_ATTR" in e ? C({}, e.ALLOWED_ATTR) : Ce, Ge = "ADD_URI_SAFE_ATTR" in e ? C(w($e), e.ADD_URI_SAFE_ATTR) : $e, He = "ADD_DATA_URI_TAGS" in e ? C(w(Ze), e.ADD_DATA_URI_TAGS) : Ze, Pe = "FORBID_CONTENTS" in e ? C({}, e.FORBID_CONTENTS) : Ve, we = "FORBID_TAGS" in e ? C({}, e.FORBID_TAGS) : {}, De = "FORBID_ATTR" in e ? C({}, e.FORBID_ATTR) : {}, je = "USE_PROFILES" in e && e.USE_PROFILES, Ee = !1 !== e.ALLOW_ARIA_ATTR, Se = !1 !== e.ALLOW_DATA_ATTR, Te = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Le = e.SAFE_FOR_TEMPLATES || !1, qe = e.WHOLE_DOCUMENT || !1, Re = e.RETURN_DOM || !1, Ie = e.RETURN_DOM_FRAGMENT || !1, Me = !1 !== e.RETURN_DOM_IMPORT, Ne = e.RETURN_TRUSTED_TYPE || !1, ze = e.FORCE_BODY || !1, Oe = !1 !== e.SANITIZE_DOM, Be = !1 !== e.KEEP_CONTENT, Ue = e.IN_PLACE || !1, ve = e.ALLOWED_URI_REGEXP || ve, Qe = e.NAMESPACE || Ye, Le && (Se = !1), Ie && (Re = !0), je && (ye = C({}, [].concat(G(z))), Ae = [], !0 === je.html && (C(ye, E), C(Ae, R)), !0 === je.svg && (C(ye, S), C(Ae, I), C(Ae, N)), !0 === je.svgFilters && (C(ye, T), C(Ae, I), C(Ae, N)), !0 === je.mathMl && (C(ye, q), C(Ae, M), C(Ae, N))), e.ADD_TAGS && (ye === xe && (ye = w(ye)), C(ye, e.ADD_TAGS)), e.ADD_ATTR && (Ae === Ce && (Ae = w(Ae)), C(Ae, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && C(Ge, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (Pe === Ve && (Pe = w(Pe)), C(Pe, e.FORBID_CONTENTS)), Be && (ye["#text"] = !0), qe && C(ye, ["html", "head", "body"]), ye.table && (C(ye, ["tbody"]), delete we.tbody), i && i(e), Xe = e)
                        },
                        rt = C({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        nt = C({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        ot = C({}, S);
                    C(ot, T), C(ot, L);
                    var st = C({}, q);
                    C(st, F);
                    var it = function(e) {
                            var t = re(e);
                            t && t.tagName || (t = {
                                namespaceURI: Ye,
                                tagName: "template"
                            });
                            var r = m(e.tagName),
                                n = m(t.tagName);
                            if (e.namespaceURI === Je) return t.namespaceURI === Ye ? "svg" === r : t.namespaceURI === We ? "svg" === r && ("annotation-xml" === n || rt[n]) : Boolean(ot[r]);
                            if (e.namespaceURI === We) return t.namespaceURI === Ye ? "math" === r : t.namespaceURI === Je ? "math" === r && nt[n] : Boolean(st[r]);
                            if (e.namespaceURI === Ye) {
                                if (t.namespaceURI === Je && !nt[n]) return !1;
                                if (t.namespaceURI === We && !rt[n]) return !1;
                                var o = C({}, ["title", "style", "font", "a", "script"]);
                                return !st[r] && (o[r] || !ot[r])
                            }
                            return !1
                        },
                        at = function(e) {
                            d(t.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (bt) {
                                try {
                                    e.outerHTML = se
                                } catch (bt) {
                                    e.remove()
                                }
                            }
                        },
                        ct = function(e, r) {
                            try {
                                d(t.removed, {
                                    attribute: r.getAttributeNode(e),
                                    from: r
                                })
                            } catch (bt) {
                                d(t.removed, {
                                    attribute: null,
                                    from: r
                                })
                            }
                            if (r.removeAttribute(e), "is" === e && !Ae[e])
                                if (Re || Ie) try {
                                    at(r)
                                } catch (bt) {} else try {
                                    r.setAttribute(e, "")
                                } catch (bt) {}
                        },
                        lt = function(e) {
                            var t = void 0,
                                r = void 0;
                            if (ze) e = "<remove></remove>" + e;
                            else {
                                var o = g(e, /^[\r\n\t ]+/);
                                r = o && o[0]
                            }
                            var s = oe ? oe.createHTML(e) : e;
                            if (Qe === Ye) try {
                                t = (new Y).parseFromString(s, "text/html")
                            } catch (bt) {}
                            if (!t || !t.documentElement) {
                                t = ae.createDocument(Qe, "template", null);
                                try {
                                    t.documentElement.innerHTML = Ke ? "" : s
                                } catch (bt) {}
                            }
                            var i = t.body || t.documentElement;
                            return e && r && i.insertBefore(n.createTextNode(r), i.childNodes[0] || null), Qe === Ye ? ue.call(t, qe ? "html" : "body")[0] : qe ? t.documentElement : i
                        },
                        ut = function(e) {
                            return ce.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT, null, !1)
                        },
                        pt = function(e) {
                            return !(e instanceof x || e instanceof A) && !("string" === typeof e.nodeName && "string" === typeof e.textContent && "function" === typeof e.removeChild && e.attributes instanceof p && "function" === typeof e.removeAttribute && "function" === typeof e.setAttribute && "string" === typeof e.namespaceURI && "function" === typeof e.insertBefore)
                        },
                        ht = function(e) {
                            return "object" === ("undefined" === typeof a ? "undefined" : Z(a)) ? e instanceof a : e && "object" === ("undefined" === typeof e ? "undefined" : Z(e)) && "number" === typeof e.nodeType && "string" === typeof e.nodeName
                        },
                        ft = function(e, r, n) {
                            fe[e] && h(fe[e], (function(e) {
                                e.call(t, r, n, Xe)
                            }))
                        },
                        dt = function(e) {
                            var r = void 0;
                            if (ft("beforeSanitizeElements", e, null), pt(e)) return at(e), !0;
                            if (g(e.nodeName, /[\u0080-\uFFFF]/)) return at(e), !0;
                            var n = m(e.nodeName);
                            if (ft("uponSanitizeElement", e, {
                                    tagName: n,
                                    allowedTags: ye
                                }), !ht(e.firstElementChild) && (!ht(e.content) || !ht(e.content.firstElementChild)) && v(/<[/\w]/g, e.innerHTML) && v(/<[/\w]/g, e.textContent)) return at(e), !0;
                            if ("select" === n && v(/<template/i, e.innerHTML)) return at(e), !0;
                            if (!ye[n] || we[n]) {
                                if (Be && !Pe[n]) {
                                    var o = re(e) || e.parentNode,
                                        s = te(e) || e.childNodes;
                                    if (s && o)
                                        for (var i = s.length - 1; i >= 0; --i) o.insertBefore(X(s[i], !0), ee(e))
                                }
                                return at(e), !0
                            }
                            return e instanceof c && !it(e) ? (at(e), !0) : "noscript" !== n && "noembed" !== n || !v(/<\/no(script|embed)/i, e.innerHTML) ? (Le && 3 === e.nodeType && (r = e.textContent, r = _(r, de, " "), r = _(r, me, " "), e.textContent !== r && (d(t.removed, {
                                element: e.cloneNode()
                            }), e.textContent = r)), ft("afterSanitizeElements", e, null), !1) : (at(e), !0)
                        },
                        mt = function(e, t, r) {
                            if (Oe && ("id" === t || "name" === t) && (r in n || r in et)) return !1;
                            if (Se && !De[t] && v(ge, t));
                            else if (Ee && v(_e, t));
                            else {
                                if (!Ae[t] || De[t]) return !1;
                                if (Ge[t]);
                                else if (v(ve, _(r, ke, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== b(r, "data:") || !He[e])
                                    if (Te && !v(be, _(r, ke, "")));
                                    else if (r) return !1
                            }
                            return !0
                        },
                        gt = function(e) {
                            var r = void 0,
                                n = void 0,
                                o = void 0,
                                s = void 0;
                            ft("beforeSanitizeAttributes", e, null);
                            var i = e.attributes;
                            if (i) {
                                var a = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: Ae
                                };
                                for (s = i.length; s--;) {
                                    var c = r = i[s],
                                        l = c.name,
                                        u = c.namespaceURI;
                                    if (n = k(r.value), o = m(l), a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, ft("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr && (ct(l, e), a.keepAttr))
                                        if (v(/\/>/i, n)) ct(l, e);
                                        else {
                                            Le && (n = _(n, de, " "), n = _(n, me, " "));
                                            var p = e.nodeName.toLowerCase();
                                            if (mt(p, o, n)) try {
                                                u ? e.setAttributeNS(u, l, n) : e.setAttribute(l, n), f(t.removed)
                                            } catch (bt) {}
                                        }
                                }
                                ft("afterSanitizeAttributes", e, null)
                            }
                        },
                        _t = function e(t) {
                            var r = void 0,
                                n = ut(t);
                            for (ft("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) ft("uponSanitizeShadowNode", r, null), dt(r) || (r.content instanceof o && e(r.content), gt(r));
                            ft("afterSanitizeShadowDOM", t, null)
                        };
                    return t.sanitize = function(n, s) {
                        var i = void 0,
                            c = void 0,
                            l = void 0,
                            u = void 0,
                            p = void 0;
                        if ((Ke = !n) && (n = "\x3c!--\x3e"), "string" !== typeof n && !ht(n)) {
                            if ("function" !== typeof n.toString) throw y("toString is not a function");
                            if ("string" !== typeof(n = n.toString())) throw y("dirty is not a string, aborting")
                        }
                        if (!t.isSupported) {
                            if ("object" === Z(e.toStaticHTML) || "function" === typeof e.toStaticHTML) {
                                if ("string" === typeof n) return e.toStaticHTML(n);
                                if (ht(n)) return e.toStaticHTML(n.outerHTML)
                            }
                            return n
                        }
                        if (Fe || tt(s), t.removed = [], "string" === typeof n && (Ue = !1), Ue);
                        else if (n instanceof a) 1 === (c = (i = lt("\x3c!----\x3e")).ownerDocument.importNode(n, !0)).nodeType && "BODY" === c.nodeName || "HTML" === c.nodeName ? i = c : i.appendChild(c);
                        else {
                            if (!Re && !Le && !qe && -1 === n.indexOf("<")) return oe && Ne ? oe.createHTML(n) : n;
                            if (!(i = lt(n))) return Re ? null : se
                        }
                        i && ze && at(i.firstChild);
                        for (var h = ut(Ue ? n : i); l = h.nextNode();) 3 === l.nodeType && l === u || dt(l) || (l.content instanceof o && _t(l.content), gt(l), u = l);
                        if (u = null, Ue) return n;
                        if (Re) {
                            if (Ie)
                                for (p = le.call(i.ownerDocument); i.firstChild;) p.appendChild(i.firstChild);
                            else p = i;
                            return Me && (p = pe.call(r, p, !0)), p
                        }
                        var f = qe ? i.outerHTML : i.innerHTML;
                        return Le && (f = _(f, de, " "), f = _(f, me, " ")), oe && Ne ? oe.createHTML(f) : f
                    }, t.setConfig = function(e) {
                        tt(e), Fe = !0
                    }, t.clearConfig = function() {
                        Xe = null, Fe = !1
                    }, t.isValidAttribute = function(e, t, r) {
                        Xe || tt({});
                        var n = m(e),
                            o = m(t);
                        return mt(n, o, r)
                    }, t.addHook = function(e, t) {
                        "function" === typeof t && (fe[e] = fe[e] || [], d(fe[e], t))
                    }, t.removeHook = function(e) {
                        fe[e] && f(fe[e])
                    }, t.removeHooks = function(e) {
                        fe[e] && (fe[e] = [])
                    }, t.removeAllHooks = function() {
                        fe = {}
                    }, t
                }
                return J()
            }()
        },
        mpTe: (e, t, r) => {
            "use strict";

            function n(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return t.forEach((function(t) {
                    t && Object.keys(t).forEach((function(r) {
                        e[r] = t[r]
                    }))
                })), e
            }

            function o(e) {
                return Object.prototype.toString.call(e)
            }

            function s(e) {
                return "[object Function]" === o(e)
            }

            function i(e) {
                return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            var a = {
                fuzzyLink: !0,
                fuzzyEmail: !0,
                fuzzyIP: !1
            };
            var c = {
                    "http:": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
                        }
                    },
                    "https:": "http:",
                    "ftp:": "http:",
                    "//": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] || t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
                        }
                    },
                    "mailto:": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
                        }
                    }
                },
                l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");

            function u(e) {
                var t = e.re = r("vn14")(e.__opts__),
                    n = e.__tlds__.slice();

                function a(e) {
                    return e.replace("%TLDS%", t.src_tlds)
                }
                e.onCompile(), e.__tlds_replaced__ || n.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
                var c = [];

                function l(e, t) {
                    throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
                }
                e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
                    var r = e.__schemas__[t];
                    if (null !== r) {
                        var n = {
                            validate: null,
                            link: null
                        };
                        if (e.__compiled__[t] = n, "[object Object]" === o(r)) return ! function(e) {
                            return "[object RegExp]" === o(e)
                        }(r.validate) ? s(r.validate) ? n.validate = r.validate : l(t, r) : n.validate = function(e) {
                            return function(t, r) {
                                var n = t.slice(r);
                                return e.test(n) ? n.match(e)[0].length : 0
                            }
                        }(r.validate), void(s(r.normalize) ? n.normalize = r.normalize : r.normalize ? l(t, r) : n.normalize = function(e, t) {
                            t.normalize(e)
                        });
                        ! function(e) {
                            return "[object String]" === o(e)
                        }(r) ? l(t, r): c.push(t)
                    }
                })), c.forEach((function(t) {
                    e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
                })), e.__compiled__[""] = {
                    validate: null,
                    normalize: function(e, t) {
                        t.normalize(e)
                    }
                };
                var u = Object.keys(e.__compiled__).filter((function(t) {
                    return t.length > 0 && e.__compiled__[t]
                })).map(i).join("|");
                e.re.schema_test = RegExp("(^|(?!_)(?:[><\uff5c]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><\uff5c]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
                    function(e) {
                        e.__index__ = -1, e.__text_cache__ = ""
                    }(e)
            }

            function p(e, t) {
                var r = e.__index__,
                    n = e.__last_index__,
                    o = e.__text_cache__.slice(r, n);
                this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
            }

            function h(e, t) {
                var r = new p(e, t);
                return e.__compiled__[r.schema].normalize(r, e), r
            }

            function f(e, t) {
                if (!(this instanceof f)) return new f(e, t);
                var r;
                t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
                    return e || a.hasOwnProperty(t)
                }), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
            }
            f.prototype.add = function(e, t) {
                return this.__schemas__[e] = t, u(this), this
            }, f.prototype.set = function(e) {
                return this.__opts__ = n(this.__opts__, e), this
            }, f.prototype.test = function(e) {
                if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
                var t, r, n, o, s, i, a, c;
                if (this.re.schema_test.test(e))
                    for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
                        if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
                            this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
                            break
                        }
                return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = r.index + r[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (s = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = i)), this.__index__ >= 0
            }, f.prototype.pretest = function(e) {
                return this.re.pretest.test(e)
            }, f.prototype.testSchemaAt = function(e, t, r) {
                return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
            }, f.prototype.match = function(e) {
                var t = 0,
                    r = [];
                this.__index__ >= 0 && this.__text_cache__ === e && (r.push(h(this, t)), t = this.__last_index__);
                for (var n = t ? e.slice(t) : e; this.test(n);) r.push(h(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
                return r.length ? r : null
            }, f.prototype.tlds = function(e, t) {
                return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
                    return e !== r[t - 1]
                })).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
            }, f.prototype.normalize = function(e) {
                e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
            }, f.prototype.onCompile = function() {}, e.exports = f
        },
        vn14: (e, t, r) => {
            "use strict";
            e.exports = function(e) {
                var t = {};
                t.src_Any = r("7EA0").source, t.src_Cc = r("RYQf").source, t.src_Z = r("Ckiu").source, t.src_P = r("gtbP").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
                return t.src_pseudo_letter = "(?:(?![><\uff5c]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><\uff5c]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + "[><\uff5c]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = '(^|[><\uff5c]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + t.src_ZPCc + "))((?![$+<=>^`|\uff5c])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + t.src_ZPCc + "))((?![$+<=>^`|\uff5c])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
            }
        },
        PZQm: (e, t, r) => {
            "use strict";
            e.exports = r("vtBm")
        },
        JzjW: (e, t, r) => {
            "use strict";
            e.exports = r("e5U8")
        },
        "36MB": e => {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        OqJb: e => {
            "use strict";
            var t = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
                r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
                n = new RegExp("^(?:" + t + "|" + r + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
                o = new RegExp("^(?:" + t + "|" + r + ")");
            e.exports.l = n, e.exports.p = o
        },
        T1Ll: (e, t, r) => {
            "use strict";
            var n = Object.prototype.hasOwnProperty;

            function o(e, t) {
                return n.call(e, t)
            }

            function s(e) {
                return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
            }

            function i(e) {
                if (e > 65535) {
                    var t = 55296 + ((e -= 65536) >> 10),
                        r = 56320 + (1023 & e);
                    return String.fromCharCode(t, r)
                }
                return String.fromCharCode(e)
            }
            var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
                c = new RegExp(a.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
                l = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
                u = r("JzjW");
            var p = /[&<>"]/,
                h = /[&<>"]/g,
                f = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;"
                };

            function d(e) {
                return f[e]
            }
            var m = /[.?*+^$[\]\\(){}|-]/g;
            var g = r("gtbP");
            t.lib = {}, t.lib.mdurl = r("BmNk"), t.lib.ucmicro = r("vu0X"), t.assign = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return t.forEach((function(t) {
                    if (t) {
                        if ("object" !== typeof t) throw new TypeError(t + "must be object");
                        Object.keys(t).forEach((function(r) {
                            e[r] = t[r]
                        }))
                    }
                })), e
            }, t.isString = function(e) {
                return "[object String]" === function(e) {
                    return Object.prototype.toString.call(e)
                }(e)
            }, t.has = o, t.unescapeMd = function(e) {
                return e.indexOf("\\") < 0 ? e : e.replace(a, "$1")
            }, t.unescapeAll = function(e) {
                return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(c, (function(e, t, r) {
                    return t || function(e, t) {
                        var r = 0;
                        return o(u, t) ? u[t] : 35 === t.charCodeAt(0) && l.test(t) && s(r = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10)) ? i(r) : e
                    }(e, r)
                }))
            }, t.isValidEntityCode = s, t.fromCodePoint = i, t.escapeHtml = function(e) {
                return p.test(e) ? e.replace(h, d) : e
            }, t.arrayReplaceAt = function(e, t, r) {
                return [].concat(e.slice(0, t), r, e.slice(t + 1))
            }, t.isSpace = function(e) {
                switch (e) {
                    case 9:
                    case 32:
                        return !0
                }
                return !1
            }, t.isWhiteSpace = function(e) {
                if (e >= 8192 && e <= 8202) return !0;
                switch (e) {
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 32:
                    case 160:
                    case 5760:
                    case 8239:
                    case 8287:
                    case 12288:
                        return !0
                }
                return !1
            }, t.isMdAsciiPunct = function(e) {
                switch (e) {
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 41:
                    case 42:
                    case 43:
                    case 44:
                    case 45:
                    case 46:
                    case 47:
                    case 58:
                    case 59:
                    case 60:
                    case 61:
                    case 62:
                    case 63:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 124:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }, t.isPunctChar = function(e) {
                return g.test(e)
            }, t.escapeRE = function(e) {
                return e.replace(m, "\\$&")
            }, t.normalizeReference = function(e) {
                return e = e.trim().replace(/\s+/g, " "), "\u1e7e" === "\u1e9e".toLowerCase() && (e = e.replace(/\u1e9e/g, "\xdf")), e.toLowerCase().toUpperCase()
            }
        },
        WQPC: (e, t, r) => {
            "use strict";
            t.parseLinkLabel = r("AsbT"), t.parseLinkDestination = r("eO16"), t.parseLinkTitle = r("YdLh")
        },
        eO16: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").unescapeAll;
            e.exports = function(e, t, r) {
                var o, s, i = t,
                    a = {
                        ok: !1,
                        pos: 0,
                        lines: 0,
                        str: ""
                    };
                if (60 === e.charCodeAt(t)) {
                    for (t++; t < r;) {
                        if (10 === (o = e.charCodeAt(t))) return a;
                        if (62 === o) return a.pos = t + 1, a.str = n(e.slice(i + 1, t)), a.ok = !0, a;
                        92 === o && t + 1 < r ? t += 2 : t++
                    }
                    return a
                }
                for (s = 0; t < r && 32 !== (o = e.charCodeAt(t)) && !(o < 32 || 127 === o);)
                    if (92 === o && t + 1 < r) t += 2;
                    else {
                        if (40 === o && s++, 41 === o) {
                            if (0 === s) break;
                            s--
                        }
                        t++
                    }
                return i === t || 0 !== s || (a.str = n(e.slice(i, t)), a.lines = 0, a.pos = t, a.ok = !0), a
            }
        },
        AsbT: e => {
            "use strict";
            e.exports = function(e, t, r) {
                var n, o, s, i, a = -1,
                    c = e.posMax,
                    l = e.pos;
                for (e.pos = t + 1, n = 1; e.pos < c;) {
                    if (93 === (s = e.src.charCodeAt(e.pos)) && 0 === --n) {
                        o = !0;
                        break
                    }
                    if (i = e.pos, e.md.inline.skipToken(e), 91 === s)
                        if (i === e.pos - 1) n++;
                        else if (r) return e.pos = l, -1
                }
                return o && (a = e.pos), e.pos = l, a
            }
        },
        YdLh: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").unescapeAll;
            e.exports = function(e, t, r) {
                var o, s, i = 0,
                    a = t,
                    c = {
                        ok: !1,
                        pos: 0,
                        lines: 0,
                        str: ""
                    };
                if (t >= r) return c;
                if (34 !== (s = e.charCodeAt(t)) && 39 !== s && 40 !== s) return c;
                for (t++, 40 === s && (s = 41); t < r;) {
                    if ((o = e.charCodeAt(t)) === s) return c.pos = t + 1, c.lines = i, c.str = n(e.slice(a + 1, t)), c.ok = !0, c;
                    10 === o ? i++ : 92 === o && t + 1 < r && (t++, 10 === e.charCodeAt(t) && i++), t++
                }
                return c
            }
        },
        vtBm: (e, t, r) => {
            "use strict";
            var n = r("T1Ll"),
                o = r("WQPC"),
                s = r("mVB+"),
                i = r("Nc4I"),
                a = r("IYLv"),
                c = r("s1lm"),
                l = r("mpTe"),
                u = r("BmNk"),
                p = r("ZbjU"),
                h = {
                    default: r("20jC"),
                    zero: r("45E7"),
                    commonmark: r("atAw")
                },
                f = /^(vbscript|javascript|file|data):/,
                d = /^data:image\/(gif|png|jpeg|webp);/;

            function m(e) {
                var t = e.trim().toLowerCase();
                return !f.test(t) || !!d.test(t)
            }
            var g = ["http:", "https:", "mailto:"];

            function _(e) {
                var t = u.parse(e, !0);
                if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0)) try {
                    t.hostname = p.toASCII(t.hostname)
                } catch (r) {}
                return u.encode(u.format(t))
            }

            function b(e) {
                var t = u.parse(e, !0);
                if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0)) try {
                    t.hostname = p.toUnicode(t.hostname)
                } catch (r) {}
                return u.decode(u.format(t))
            }

            function k(e, t) {
                if (!(this instanceof k)) return new k(e, t);
                t || n.isString(e) || (t = e || {}, e = "default"), this.inline = new c, this.block = new a, this.core = new i, this.renderer = new s, this.linkify = new l, this.validateLink = m, this.normalizeLink = _, this.normalizeLinkText = b, this.utils = n, this.helpers = n.assign({}, o), this.options = {}, this.configure(e), t && this.set(t)
            }
            k.prototype.set = function(e) {
                return n.assign(this.options, e), this
            }, k.prototype.configure = function(e) {
                var t, r = this;
                if (n.isString(e) && !(e = h[t = e])) throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
                if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
                return e.options && r.set(e.options), e.components && Object.keys(e.components).forEach((function(t) {
                    e.components[t].rules && r[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && r[t].ruler2.enableOnly(e.components[t].rules2)
                })), this
            }, k.prototype.enable = function(e, t) {
                var r = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach((function(t) {
                    r = r.concat(this[t].ruler.enable(e, !0))
                }), this), r = r.concat(this.inline.ruler2.enable(e, !0));
                var n = e.filter((function(e) {
                    return r.indexOf(e) < 0
                }));
                if (n.length && !t) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
                return this
            }, k.prototype.disable = function(e, t) {
                var r = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach((function(t) {
                    r = r.concat(this[t].ruler.disable(e, !0))
                }), this), r = r.concat(this.inline.ruler2.disable(e, !0));
                var n = e.filter((function(e) {
                    return r.indexOf(e) < 0
                }));
                if (n.length && !t) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
                return this
            }, k.prototype.use = function(e) {
                var t = [this].concat(Array.prototype.slice.call(arguments, 1));
                return e.apply(e, t), this
            }, k.prototype.parse = function(e, t) {
                if ("string" !== typeof e) throw new Error("Input data should be a String");
                var r = new this.core.State(e, this, t);
                return this.core.process(r), r.tokens
            }, k.prototype.render = function(e, t) {
                return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t)
            }, k.prototype.parseInline = function(e, t) {
                var r = new this.core.State(e, this, t);
                return r.inlineMode = !0, this.core.process(r), r.tokens
            }, k.prototype.renderInline = function(e, t) {
                return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t)
            }, e.exports = k
        },
        IYLv: (e, t, r) => {
            "use strict";
            var n = r("1798"),
                o = [
                    ["table", r("98cI"), ["paragraph", "reference"]],
                    ["code", r("u+Vw")],
                    ["fence", r("2d0V"), ["paragraph", "reference", "blockquote", "list"]],
                    ["blockquote", r("/NnR"), ["paragraph", "reference", "blockquote", "list"]],
                    ["hr", r("htpI"), ["paragraph", "reference", "blockquote", "list"]],
                    ["list", r("jyDn"), ["paragraph", "reference", "blockquote"]],
                    ["reference", r("eR5l")],
                    ["heading", r("5akD"), ["paragraph", "reference", "blockquote"]],
                    ["lheading", r("GKbP")],
                    ["html_block", r("ssre"), ["paragraph", "reference", "blockquote"]],
                    ["paragraph", r("Vt6h")]
                ];

            function s() {
                this.ruler = new n;
                for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1], {
                    alt: (o[e][2] || []).slice()
                })
            }
            s.prototype.tokenize = function(e, t, r) {
                for (var n, o = this.ruler.getRules(""), s = o.length, i = t, a = !1, c = e.md.options.maxNesting; i < r && (e.line = i = e.skipEmptyLines(i), !(i >= r)) && !(e.sCount[i] < e.blkIndent);) {
                    if (e.level >= c) {
                        e.line = r;
                        break
                    }
                    for (n = 0; n < s && !o[n](e, i, r, !1); n++);
                    e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), (i = e.line) < r && e.isEmpty(i) && (a = !0, i++, e.line = i)
                }
            }, s.prototype.parse = function(e, t, r, n) {
                var o;
                e && (o = new this.State(e, t, r, n), this.tokenize(o, o.line, o.lineMax))
            }, s.prototype.State = r("XHA8"), e.exports = s
        },
        Nc4I: (e, t, r) => {
            "use strict";
            var n = r("1798"),
                o = [
                    ["normalize", r("Dsb4")],
                    ["block", r("pAx/")],
                    ["inline", r("mUT7")],
                    ["linkify", r("HlfJ")],
                    ["replacements", r("DDxP")],
                    ["smartquotes", r("AXp1")]
                ];

            function s() {
                this.ruler = new n;
                for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1])
            }
            s.prototype.process = function(e) {
                var t, r, n;
                for (t = 0, r = (n = this.ruler.getRules("")).length; t < r; t++) n[t](e)
            }, s.prototype.State = r("t+9L"), e.exports = s
        },
        s1lm: (e, t, r) => {
            "use strict";
            var n = r("1798"),
                o = [
                    ["text", r("Bpyo")],
                    ["newline", r("OOYR")],
                    ["escape", r("XWar")],
                    ["backticks", r("Vtgc")],
                    ["strikethrough", r("/t9N").q],
                    ["emphasis", r("pVcW").q],
                    ["link", r("otMq")],
                    ["image", r("UKA5")],
                    ["autolink", r("mURL")],
                    ["html_inline", r("j4SW")],
                    ["entity", r("DIje")]
                ],
                s = [
                    ["balance_pairs", r("I+gj")],
                    ["strikethrough", r("/t9N").g],
                    ["emphasis", r("pVcW").g],
                    ["text_collapse", r("mLjB")]
                ];

            function i() {
                var e;
                for (this.ruler = new n, e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
                for (this.ruler2 = new n, e = 0; e < s.length; e++) this.ruler2.push(s[e][0], s[e][1])
            }
            i.prototype.skipToken = function(e) {
                var t, r, n = e.pos,
                    o = this.ruler.getRules(""),
                    s = o.length,
                    i = e.md.options.maxNesting,
                    a = e.cache;
                if ("undefined" === typeof a[n]) {
                    if (e.level < i)
                        for (r = 0; r < s && (e.level++, t = o[r](e, !0), e.level--, !t); r++);
                    else e.pos = e.posMax;
                    t || e.pos++, a[n] = e.pos
                } else e.pos = a[n]
            }, i.prototype.tokenize = function(e) {
                for (var t, r, n = this.ruler.getRules(""), o = n.length, s = e.posMax, i = e.md.options.maxNesting; e.pos < s;) {
                    if (e.level < i)
                        for (r = 0; r < o && !(t = n[r](e, !1)); r++);
                    if (t) {
                        if (e.pos >= s) break
                    } else e.pending += e.src[e.pos++]
                }
                e.pending && e.pushPending()
            }, i.prototype.parse = function(e, t, r, n) {
                var o, s, i, a = new this.State(e, t, r, n);
                for (this.tokenize(a), i = (s = this.ruler2.getRules("")).length, o = 0; o < i; o++) s[o](a)
            }, i.prototype.State = r("zwr4"), e.exports = i
        },
        atAw: e => {
            "use strict";
            e.exports = {
                options: {
                    html: !0,
                    xhtmlOut: !0,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                    },
                    inline: {
                        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                        rules2: ["balance_pairs", "emphasis", "text_collapse"]
                    }
                }
            }
        },
        "20jC": e => {
            "use strict";
            e.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 100
                },
                components: {
                    core: {},
                    block: {},
                    inline: {}
                }
            }
        },
        "45E7": e => {
            "use strict";
            e.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["paragraph"]
                    },
                    inline: {
                        rules: ["text"],
                        rules2: ["balance_pairs", "text_collapse"]
                    }
                }
            }
        },
        "mVB+": (e, t, r) => {
            "use strict";
            var n = r("T1Ll").assign,
                o = r("T1Ll").unescapeAll,
                s = r("T1Ll").escapeHtml,
                i = {};

            function a() {
                this.rules = n({}, i)
            }
            i.code_inline = function(e, t, r, n, o) {
                var i = e[t];
                return "<code" + o.renderAttrs(i) + ">" + s(e[t].content) + "</code>"
            }, i.code_block = function(e, t, r, n, o) {
                var i = e[t];
                return "<pre" + o.renderAttrs(i) + "><code>" + s(e[t].content) + "</code></pre>\n"
            }, i.fence = function(e, t, r, n, i) {
                var a, c, l, u, p = e[t],
                    h = p.info ? o(p.info).trim() : "",
                    f = "";
                return h && (f = h.split(/\s+/g)[0]), 0 === (a = r.highlight && r.highlight(p.content, f) || s(p.content)).indexOf("<pre") ? a + "\n" : h ? (c = p.attrIndex("class"), l = p.attrs ? p.attrs.slice() : [], c < 0 ? l.push(["class", r.langPrefix + f]) : l[c][1] += " " + r.langPrefix + f, u = {
                    attrs: l
                }, "<pre><code" + i.renderAttrs(u) + ">" + a + "</code></pre>\n") : "<pre><code" + i.renderAttrs(p) + ">" + a + "</code></pre>\n"
            }, i.image = function(e, t, r, n, o) {
                var s = e[t];
                return s.attrs[s.attrIndex("alt")][1] = o.renderInlineAsText(s.children, r, n), o.renderToken(e, t, r)
            }, i.hardbreak = function(e, t, r) {
                return r.xhtmlOut ? "<br />\n" : "<br>\n"
            }, i.softbreak = function(e, t, r) {
                return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
            }, i.text = function(e, t) {
                return s(e[t].content)
            }, i.html_block = function(e, t) {
                return e[t].content
            }, i.html_inline = function(e, t) {
                return e[t].content
            }, a.prototype.renderAttrs = function(e) {
                var t, r, n;
                if (!e.attrs) return "";
                for (n = "", t = 0, r = e.attrs.length; t < r; t++) n += " " + s(e.attrs[t][0]) + '="' + s(e.attrs[t][1]) + '"';
                return n
            }, a.prototype.renderToken = function(e, t, r) {
                var n, o = "",
                    s = !1,
                    i = e[t];
                return i.hidden ? "" : (i.block && -1 !== i.nesting && t && e[t - 1].hidden && (o += "\n"), o += (-1 === i.nesting ? "</" : "<") + i.tag, o += this.renderAttrs(i), 0 === i.nesting && r.xhtmlOut && (o += " /"), i.block && (s = !0, 1 === i.nesting && t + 1 < e.length && ("inline" === (n = e[t + 1]).type || n.hidden || -1 === n.nesting && n.tag === i.tag) && (s = !1)), o += s ? ">\n" : ">")
            }, a.prototype.renderInline = function(e, t, r) {
                for (var n, o = "", s = this.rules, i = 0, a = e.length; i < a; i++) "undefined" !== typeof s[n = e[i].type] ? o += s[n](e, i, t, r, this) : o += this.renderToken(e, i, t);
                return o
            }, a.prototype.renderInlineAsText = function(e, t, r) {
                for (var n = "", o = 0, s = e.length; o < s; o++) "text" === e[o].type ? n += e[o].content : "image" === e[o].type && (n += this.renderInlineAsText(e[o].children, t, r));
                return n
            }, a.prototype.render = function(e, t, r) {
                var n, o, s, i = "",
                    a = this.rules;
                for (n = 0, o = e.length; n < o; n++) "inline" === (s = e[n].type) ? i += this.renderInline(e[n].children, t, r) : "undefined" !== typeof a[s] ? i += a[e[n].type](e, n, t, r, this) : i += this.renderToken(e, n, t, r);
                return i
            }, e.exports = a
        },
        1798: e => {
            "use strict";

            function t() {
                this.__rules__ = [], this.__cache__ = null
            }
            t.prototype.__find__ = function(e) {
                for (var t = 0; t < this.__rules__.length; t++)
                    if (this.__rules__[t].name === e) return t;
                return -1
            }, t.prototype.__compile__ = function() {
                var e = this,
                    t = [""];
                e.__rules__.forEach((function(e) {
                    e.enabled && e.alt.forEach((function(e) {
                        t.indexOf(e) < 0 && t.push(e)
                    }))
                })), e.__cache__ = {}, t.forEach((function(t) {
                    e.__cache__[t] = [], e.__rules__.forEach((function(r) {
                        r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn))
                    }))
                }))
            }, t.prototype.at = function(e, t, r) {
                var n = this.__find__(e),
                    o = r || {};
                if (-1 === n) throw new Error("Parser rule not found: " + e);
                this.__rules__[n].fn = t, this.__rules__[n].alt = o.alt || [], this.__cache__ = null
            }, t.prototype.before = function(e, t, r, n) {
                var o = this.__find__(e),
                    s = n || {};
                if (-1 === o) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(o, 0, {
                    name: t,
                    enabled: !0,
                    fn: r,
                    alt: s.alt || []
                }), this.__cache__ = null
            }, t.prototype.after = function(e, t, r, n) {
                var o = this.__find__(e),
                    s = n || {};
                if (-1 === o) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(o + 1, 0, {
                    name: t,
                    enabled: !0,
                    fn: r,
                    alt: s.alt || []
                }), this.__cache__ = null
            }, t.prototype.push = function(e, t, r) {
                var n = r || {};
                this.__rules__.push({
                    name: e,
                    enabled: !0,
                    fn: t,
                    alt: n.alt || []
                }), this.__cache__ = null
            }, t.prototype.enable = function(e, t) {
                Array.isArray(e) || (e = [e]);
                var r = [];
                return e.forEach((function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (t) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !0, r.push(e)
                }), this), this.__cache__ = null, r
            }, t.prototype.enableOnly = function(e, t) {
                Array.isArray(e) || (e = [e]), this.__rules__.forEach((function(e) {
                    e.enabled = !1
                })), this.enable(e, t)
            }, t.prototype.disable = function(e, t) {
                Array.isArray(e) || (e = [e]);
                var r = [];
                return e.forEach((function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (t) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !1, r.push(e)
                }), this), this.__cache__ = null, r
            }, t.prototype.getRules = function(e) {
                return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
            }, e.exports = t
        },
        "/NnR": (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;
            e.exports = function(e, t, r, o) {
                var s, i, a, c, l, u, p, h, f, d, m, g, _, b, k, v, y, x, A, C, w = e.lineMax,
                    D = e.bMarks[t] + e.tShift[t],
                    E = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (62 !== e.src.charCodeAt(D++)) return !1;
                if (o) return !0;
                for (c = f = e.sCount[t] + D - (e.bMarks[t] + e.tShift[t]), 32 === e.src.charCodeAt(D) ? (D++, c++, f++, s = !1, v = !0) : 9 === e.src.charCodeAt(D) ? (v = !0, (e.bsCount[t] + f) % 4 === 3 ? (D++, c++, f++, s = !1) : s = !0) : v = !1, d = [e.bMarks[t]], e.bMarks[t] = D; D < E && (i = e.src.charCodeAt(D), n(i));) 9 === i ? f += 4 - (f + e.bsCount[t] + (s ? 1 : 0)) % 4 : f++, D++;
                for (m = [e.bsCount[t]], e.bsCount[t] = e.sCount[t] + 1 + (v ? 1 : 0), u = D >= E, b = [e.sCount[t]], e.sCount[t] = f - c, k = [e.tShift[t]], e.tShift[t] = D - e.bMarks[t], x = e.md.block.ruler.getRules("blockquote"), _ = e.parentType, e.parentType = "blockquote", C = !1, h = t + 1; h < r && (e.sCount[h] < e.blkIndent && (C = !0), !((D = e.bMarks[h] + e.tShift[h]) >= (E = e.eMarks[h]))); h++)
                    if (62 !== e.src.charCodeAt(D++) || C) {
                        if (u) break;
                        for (y = !1, a = 0, l = x.length; a < l; a++)
                            if (x[a](e, h, r, !0)) {
                                y = !0;
                                break
                            }
                        if (y) {
                            e.lineMax = h, 0 !== e.blkIndent && (d.push(e.bMarks[h]), m.push(e.bsCount[h]), k.push(e.tShift[h]), b.push(e.sCount[h]), e.sCount[h] -= e.blkIndent);
                            break
                        }
                        d.push(e.bMarks[h]), m.push(e.bsCount[h]), k.push(e.tShift[h]), b.push(e.sCount[h]), e.sCount[h] = -1
                    } else {
                        for (c = f = e.sCount[h] + D - (e.bMarks[h] + e.tShift[h]), 32 === e.src.charCodeAt(D) ? (D++, c++, f++, s = !1, v = !0) : 9 === e.src.charCodeAt(D) ? (v = !0, (e.bsCount[h] + f) % 4 === 3 ? (D++, c++, f++, s = !1) : s = !0) : v = !1, d.push(e.bMarks[h]), e.bMarks[h] = D; D < E && (i = e.src.charCodeAt(D), n(i));) 9 === i ? f += 4 - (f + e.bsCount[h] + (s ? 1 : 0)) % 4 : f++, D++;
                        u = D >= E, m.push(e.bsCount[h]), e.bsCount[h] = e.sCount[h] + 1 + (v ? 1 : 0), b.push(e.sCount[h]), e.sCount[h] = f - c, k.push(e.tShift[h]), e.tShift[h] = D - e.bMarks[h]
                    }
                for (g = e.blkIndent, e.blkIndent = 0, (A = e.push("blockquote_open", "blockquote", 1)).markup = ">", A.map = p = [t, 0], e.md.block.tokenize(e, t, h), (A = e.push("blockquote_close", "blockquote", -1)).markup = ">", e.lineMax = w, e.parentType = _, p[1] = e.line, a = 0; a < k.length; a++) e.bMarks[a + t] = d[a], e.tShift[a + t] = k[a], e.sCount[a + t] = b[a], e.bsCount[a + t] = m[a];
                return e.blkIndent = g, !0
            }
        },
        "u+Vw": e => {
            "use strict";
            e.exports = function(e, t, r) {
                var n, o, s;
                if (e.sCount[t] - e.blkIndent < 4) return !1;
                for (o = n = t + 1; n < r;)
                    if (e.isEmpty(n)) n++;
                    else {
                        if (!(e.sCount[n] - e.blkIndent >= 4)) break;
                        o = ++n
                    }
                return e.line = o, (s = e.push("code_block", "code", 0)).content = e.getLines(t, o, 4 + e.blkIndent, !0), s.map = [t, e.line], !0
            }
        },
        "2d0V": e => {
            "use strict";
            e.exports = function(e, t, r, n) {
                var o, s, i, a, c, l, u, p = !1,
                    h = e.bMarks[t] + e.tShift[t],
                    f = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (h + 3 > f) return !1;
                if (126 !== (o = e.src.charCodeAt(h)) && 96 !== o) return !1;
                if (c = h, (s = (h = e.skipChars(h, o)) - c) < 3) return !1;
                if (u = e.src.slice(c, h), i = e.src.slice(h, f), 96 === o && i.indexOf(String.fromCharCode(o)) >= 0) return !1;
                if (n) return !0;
                for (a = t; !(++a >= r) && !((h = c = e.bMarks[a] + e.tShift[a]) < (f = e.eMarks[a]) && e.sCount[a] < e.blkIndent);)
                    if (e.src.charCodeAt(h) === o && !(e.sCount[a] - e.blkIndent >= 4) && !((h = e.skipChars(h, o)) - c < s) && !((h = e.skipSpaces(h)) < f)) {
                        p = !0;
                        break
                    }
                return s = e.sCount[t], e.line = a + (p ? 1 : 0), (l = e.push("fence", "code", 0)).info = i, l.content = e.getLines(t + 1, a, s, !0), l.markup = u, l.map = [t, e.line], !0
            }
        },
        "5akD": (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;
            e.exports = function(e, t, r, o) {
                var s, i, a, c, l = e.bMarks[t] + e.tShift[t],
                    u = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (35 !== (s = e.src.charCodeAt(l)) || l >= u) return !1;
                for (i = 1, s = e.src.charCodeAt(++l); 35 === s && l < u && i <= 6;) i++, s = e.src.charCodeAt(++l);
                return !(i > 6 || l < u && !n(s)) && (o || (u = e.skipSpacesBack(u, l), (a = e.skipCharsBack(u, 35, l)) > l && n(e.src.charCodeAt(a - 1)) && (u = a), e.line = t + 1, (c = e.push("heading_open", "h" + String(i), 1)).markup = "########".slice(0, i), c.map = [t, e.line], (c = e.push("inline", "", 0)).content = e.src.slice(l, u).trim(), c.map = [t, e.line], c.children = [], (c = e.push("heading_close", "h" + String(i), -1)).markup = "########".slice(0, i)), !0)
            }
        },
        htpI: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;
            e.exports = function(e, t, r, o) {
                var s, i, a, c, l = e.bMarks[t] + e.tShift[t],
                    u = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (42 !== (s = e.src.charCodeAt(l++)) && 45 !== s && 95 !== s) return !1;
                for (i = 1; l < u;) {
                    if ((a = e.src.charCodeAt(l++)) !== s && !n(a)) return !1;
                    a === s && i++
                }
                return !(i < 3) && (o || (e.line = t + 1, (c = e.push("hr", "hr", 0)).map = [t, e.line], c.markup = Array(i + 1).join(String.fromCharCode(s))), !0)
            }
        },
        ssre: (e, t, r) => {
            "use strict";
            var n = r("36MB"),
                o = r("OqJb").p,
                s = [
                    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
                    [/^<!--/, /-->/, !0],
                    [/^<\?/, /\?>/, !0],
                    [/^<![A-Z]/, />/, !0],
                    [/^<!\[CDATA\[/, /\]\]>/, !0],
                    [new RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
                    [new RegExp(o.source + "\\s*$"), /^$/, !1]
                ];
            e.exports = function(e, t, r, n) {
                var o, i, a, c, l = e.bMarks[t] + e.tShift[t],
                    u = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (!e.md.options.html) return !1;
                if (60 !== e.src.charCodeAt(l)) return !1;
                for (c = e.src.slice(l, u), o = 0; o < s.length && !s[o][0].test(c); o++);
                if (o === s.length) return !1;
                if (n) return s[o][2];
                if (i = t + 1, !s[o][1].test(c))
                    for (; i < r && !(e.sCount[i] < e.blkIndent); i++)
                        if (l = e.bMarks[i] + e.tShift[i], u = e.eMarks[i], c = e.src.slice(l, u), s[o][1].test(c)) {
                            0 !== c.length && i++;
                            break
                        }
                return e.line = i, (a = e.push("html_block", "", 0)).map = [t, i], a.content = e.getLines(t, i, e.blkIndent, !0), !0
            }
        },
        GKbP: e => {
            "use strict";
            e.exports = function(e, t, r) {
                var n, o, s, i, a, c, l, u, p, h, f = t + 1,
                    d = e.md.block.ruler.getRules("paragraph");
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                for (h = e.parentType, e.parentType = "paragraph"; f < r && !e.isEmpty(f); f++)
                    if (!(e.sCount[f] - e.blkIndent > 3)) {
                        if (e.sCount[f] >= e.blkIndent && (c = e.bMarks[f] + e.tShift[f]) < (l = e.eMarks[f]) && (45 === (p = e.src.charCodeAt(c)) || 61 === p) && (c = e.skipChars(c, p), (c = e.skipSpaces(c)) >= l)) {
                            u = 61 === p ? 1 : 2;
                            break
                        }
                        if (!(e.sCount[f] < 0)) {
                            for (o = !1, s = 0, i = d.length; s < i; s++)
                                if (d[s](e, f, r, !0)) {
                                    o = !0;
                                    break
                                }
                            if (o) break
                        }
                    }
                return !!u && (n = e.getLines(t, f, e.blkIndent, !1).trim(), e.line = f + 1, (a = e.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p), a.map = [t, e.line], (a = e.push("inline", "", 0)).content = n, a.map = [t, e.line - 1], a.children = [], (a = e.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p), e.parentType = h, !0)
            }
        },
        jyDn: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;

            function o(e, t) {
                var r, o, s, i;
                return o = e.bMarks[t] + e.tShift[t], s = e.eMarks[t], 42 !== (r = e.src.charCodeAt(o++)) && 45 !== r && 43 !== r || o < s && (i = e.src.charCodeAt(o), !n(i)) ? -1 : o
            }

            function s(e, t) {
                var r, o = e.bMarks[t] + e.tShift[t],
                    s = o,
                    i = e.eMarks[t];
                if (s + 1 >= i) return -1;
                if ((r = e.src.charCodeAt(s++)) < 48 || r > 57) return -1;
                for (;;) {
                    if (s >= i) return -1;
                    if (!((r = e.src.charCodeAt(s++)) >= 48 && r <= 57)) {
                        if (41 === r || 46 === r) break;
                        return -1
                    }
                    if (s - o >= 10) return -1
                }
                return s < i && (r = e.src.charCodeAt(s), !n(r)) ? -1 : s
            }
            e.exports = function(e, t, r, n) {
                var i, a, c, l, u, p, h, f, d, m, g, _, b, k, v, y, x, A, C, w, D, E, S, T, L, q, F, z, R = !1,
                    I = !0;
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent) return !1;
                if (n && "paragraph" === e.parentType && e.tShift[t] >= e.blkIndent && (R = !0), (S = s(e, t)) >= 0) {
                    if (h = !0, L = e.bMarks[t] + e.tShift[t], b = Number(e.src.substr(L, S - L - 1)), R && 1 !== b) return !1
                } else {
                    if (!((S = o(e, t)) >= 0)) return !1;
                    h = !1
                }
                if (R && e.skipSpaces(S) >= e.eMarks[t]) return !1;
                if (_ = e.src.charCodeAt(S - 1), n) return !0;
                for (g = e.tokens.length, h ? (z = e.push("ordered_list_open", "ol", 1), 1 !== b && (z.attrs = [
                        ["start", b]
                    ])) : z = e.push("bullet_list_open", "ul", 1), z.map = m = [t, 0], z.markup = String.fromCharCode(_), v = t, T = !1, F = e.md.block.ruler.getRules("list"), A = e.parentType, e.parentType = "list"; v < r;) {
                    for (E = S, k = e.eMarks[v], p = y = e.sCount[v] + S - (e.bMarks[t] + e.tShift[t]); E < k;) {
                        if (9 === (i = e.src.charCodeAt(E))) y += 4 - (y + e.bsCount[v]) % 4;
                        else {
                            if (32 !== i) break;
                            y++
                        }
                        E++
                    }
                    if ((u = (a = E) >= k ? 1 : y - p) > 4 && (u = 1), l = p + u, (z = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(_), z.map = f = [t, 0], D = e.tight, w = e.tShift[t], C = e.sCount[t], x = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = l, e.tight = !0, e.tShift[t] = a - e.bMarks[t], e.sCount[t] = y, a >= k && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, t, r, !0), e.tight && !T || (I = !1), T = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = x, e.tShift[t] = w, e.sCount[t] = C, e.tight = D, (z = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(_), v = t = e.line, f[1] = v, a = e.bMarks[t], v >= r) break;
                    if (e.sCount[v] < e.blkIndent) break;
                    if (e.sCount[t] - e.blkIndent >= 4) break;
                    for (q = !1, c = 0, d = F.length; c < d; c++)
                        if (F[c](e, v, r, !0)) {
                            q = !0;
                            break
                        }
                    if (q) break;
                    if (h) {
                        if ((S = s(e, v)) < 0) break
                    } else if ((S = o(e, v)) < 0) break;
                    if (_ !== e.src.charCodeAt(S - 1)) break
                }
                return (z = h ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_), m[1] = v, e.line = v, e.parentType = A, I && function(e, t) {
                    var r, n, o = e.level + 2;
                    for (r = t + 2, n = e.tokens.length - 2; r < n; r++) e.tokens[r].level === o && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].hidden = !0, e.tokens[r].hidden = !0, r += 2)
                }(e, g), !0
            }
        },
        Vt6h: e => {
            "use strict";
            e.exports = function(e, t) {
                var r, n, o, s, i, a, c = t + 1,
                    l = e.md.block.ruler.getRules("paragraph"),
                    u = e.lineMax;
                for (a = e.parentType, e.parentType = "paragraph"; c < u && !e.isEmpty(c); c++)
                    if (!(e.sCount[c] - e.blkIndent > 3) && !(e.sCount[c] < 0)) {
                        for (n = !1, o = 0, s = l.length; o < s; o++)
                            if (l[o](e, c, u, !0)) {
                                n = !0;
                                break
                            }
                        if (n) break
                    }
                return r = e.getLines(t, c, e.blkIndent, !1).trim(), e.line = c, (i = e.push("paragraph_open", "p", 1)).map = [t, e.line], (i = e.push("inline", "", 0)).content = r, i.map = [t, e.line], i.children = [], i = e.push("paragraph_close", "p", -1), e.parentType = a, !0
            }
        },
        eR5l: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").normalizeReference,
                o = r("T1Ll").isSpace;
            e.exports = function(e, t, r, s) {
                var i, a, c, l, u, p, h, f, d, m, g, _, b, k, v, y, x = 0,
                    A = e.bMarks[t] + e.tShift[t],
                    C = e.eMarks[t],
                    w = t + 1;
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if (91 !== e.src.charCodeAt(A)) return !1;
                for (; ++A < C;)
                    if (93 === e.src.charCodeAt(A) && 92 !== e.src.charCodeAt(A - 1)) {
                        if (A + 1 === C) return !1;
                        if (58 !== e.src.charCodeAt(A + 1)) return !1;
                        break
                    }
                for (l = e.lineMax, v = e.md.block.ruler.getRules("reference"), m = e.parentType, e.parentType = "reference"; w < l && !e.isEmpty(w); w++)
                    if (!(e.sCount[w] - e.blkIndent > 3) && !(e.sCount[w] < 0)) {
                        for (k = !1, p = 0, h = v.length; p < h; p++)
                            if (v[p](e, w, l, !0)) {
                                k = !0;
                                break
                            }
                        if (k) break
                    }
                for (C = (b = e.getLines(t, w, e.blkIndent, !1).trim()).length, A = 1; A < C; A++) {
                    if (91 === (i = b.charCodeAt(A))) return !1;
                    if (93 === i) {
                        d = A;
                        break
                    }(10 === i || 92 === i && ++A < C && 10 === b.charCodeAt(A)) && x++
                }
                if (d < 0 || 58 !== b.charCodeAt(d + 1)) return !1;
                for (A = d + 2; A < C; A++)
                    if (10 === (i = b.charCodeAt(A))) x++;
                    else if (!o(i)) break;
                if (!(g = e.md.helpers.parseLinkDestination(b, A, C)).ok) return !1;
                if (u = e.md.normalizeLink(g.str), !e.md.validateLink(u)) return !1;
                for (a = A = g.pos, c = x += g.lines, _ = A; A < C; A++)
                    if (10 === (i = b.charCodeAt(A))) x++;
                    else if (!o(i)) break;
                for (g = e.md.helpers.parseLinkTitle(b, A, C), A < C && _ !== A && g.ok ? (y = g.str, A = g.pos, x += g.lines) : (y = "", A = a, x = c); A < C && (i = b.charCodeAt(A), o(i));) A++;
                if (A < C && 10 !== b.charCodeAt(A) && y)
                    for (y = "", A = a, x = c; A < C && (i = b.charCodeAt(A), o(i));) A++;
                return !(A < C && 10 !== b.charCodeAt(A)) && (!!(f = n(b.slice(1, d))) && (s || ("undefined" === typeof e.env.references && (e.env.references = {}), "undefined" === typeof e.env.references[f] && (e.env.references[f] = {
                    title: y,
                    href: u
                }), e.parentType = m, e.line = t + x + 1), !0))
            }
        },
        XHA8: (e, t, r) => {
            "use strict";
            var n = r("5z8k"),
                o = r("T1Ll").isSpace;

            function s(e, t, r, n) {
                var s, i, a, c, l, u, p, h;
                for (this.src = e, this.md = t, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", h = !1, a = c = u = p = 0, l = (i = this.src).length; c < l; c++) {
                    if (s = i.charCodeAt(c), !h) {
                        if (o(s)) {
                            u++, 9 === s ? p += 4 - p % 4 : p++;
                            continue
                        }
                        h = !0
                    }
                    10 !== s && c !== l - 1 || (10 !== s && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(u), this.sCount.push(p), this.bsCount.push(0), h = !1, u = 0, p = 0, a = c + 1)
                }
                this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1
            }
            s.prototype.push = function(e, t, r) {
                var o = new n(e, t, r);
                return o.block = !0, r < 0 && this.level--, o.level = this.level, r > 0 && this.level++, this.tokens.push(o), o
            }, s.prototype.isEmpty = function(e) {
                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
            }, s.prototype.skipEmptyLines = function(e) {
                for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
                return e
            }, s.prototype.skipSpaces = function(e) {
                for (var t, r = this.src.length; e < r && (t = this.src.charCodeAt(e), o(t)); e++);
                return e
            }, s.prototype.skipSpacesBack = function(e, t) {
                if (e <= t) return e;
                for (; e > t;)
                    if (!o(this.src.charCodeAt(--e))) return e + 1;
                return e
            }, s.prototype.skipChars = function(e, t) {
                for (var r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++);
                return e
            }, s.prototype.skipCharsBack = function(e, t, r) {
                if (e <= r) return e;
                for (; e > r;)
                    if (t !== this.src.charCodeAt(--e)) return e + 1;
                return e
            }, s.prototype.getLines = function(e, t, r, n) {
                var s, i, a, c, l, u, p, h = e;
                if (e >= t) return "";
                for (u = new Array(t - e), s = 0; h < t; h++, s++) {
                    for (i = 0, p = c = this.bMarks[h], l = h + 1 < t || n ? this.eMarks[h] + 1 : this.eMarks[h]; c < l && i < r;) {
                        if (a = this.src.charCodeAt(c), o(a)) 9 === a ? i += 4 - (i + this.bsCount[h]) % 4 : i++;
                        else {
                            if (!(c - p < this.tShift[h])) break;
                            i++
                        }
                        c++
                    }
                    u[s] = i > r ? new Array(i - r + 1).join(" ") + this.src.slice(c, l) : this.src.slice(c, l)
                }
                return u.join("")
            }, s.prototype.Token = n, e.exports = s
        },
        "98cI": (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;

            function o(e, t) {
                var r = e.bMarks[t] + e.blkIndent,
                    n = e.eMarks[t];
                return e.src.substr(r, n - r)
            }

            function s(e) {
                var t, r = [],
                    n = 0,
                    o = e.length,
                    s = 0,
                    i = 0,
                    a = !1,
                    c = 0;
                for (t = e.charCodeAt(n); n < o;) 96 === t ? a ? (a = !1, c = n) : s % 2 === 0 && (a = !0, c = n) : 124 !== t || s % 2 !== 0 || a || (r.push(e.substring(i, n)), i = n + 1), 92 === t ? s++ : s = 0, ++n === o && a && (a = !1, n = c + 1), t = e.charCodeAt(n);
                return r.push(e.substring(i)), r
            }
            e.exports = function(e, t, r, i) {
                var a, c, l, u, p, h, f, d, m, g, _, b;
                if (t + 2 > r) return !1;
                if (p = t + 1, e.sCount[p] < e.blkIndent) return !1;
                if (e.sCount[p] - e.blkIndent >= 4) return !1;
                if ((l = e.bMarks[p] + e.tShift[p]) >= e.eMarks[p]) return !1;
                if (124 !== (a = e.src.charCodeAt(l++)) && 45 !== a && 58 !== a) return !1;
                for (; l < e.eMarks[p];) {
                    if (124 !== (a = e.src.charCodeAt(l)) && 45 !== a && 58 !== a && !n(a)) return !1;
                    l++
                }
                for (h = (c = o(e, t + 1)).split("|"), m = [], u = 0; u < h.length; u++) {
                    if (!(g = h[u].trim())) {
                        if (0 === u || u === h.length - 1) continue;
                        return !1
                    }
                    if (!/^:?-+:?$/.test(g)) return !1;
                    58 === g.charCodeAt(g.length - 1) ? m.push(58 === g.charCodeAt(0) ? "center" : "right") : 58 === g.charCodeAt(0) ? m.push("left") : m.push("")
                }
                if (-1 === (c = o(e, t).trim()).indexOf("|")) return !1;
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                if ((f = (h = s(c.replace(/^\||\|$/g, ""))).length) > m.length) return !1;
                if (i) return !0;
                for ((d = e.push("table_open", "table", 1)).map = _ = [t, 0], (d = e.push("thead_open", "thead", 1)).map = [t, t + 1], (d = e.push("tr_open", "tr", 1)).map = [t, t + 1], u = 0; u < h.length; u++)(d = e.push("th_open", "th", 1)).map = [t, t + 1], m[u] && (d.attrs = [
                    ["style", "text-align:" + m[u]]
                ]), (d = e.push("inline", "", 0)).content = h[u].trim(), d.map = [t, t + 1], d.children = [], d = e.push("th_close", "th", -1);
                for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), (d = e.push("tbody_open", "tbody", 1)).map = b = [t + 2, 0], p = t + 2; p < r && !(e.sCount[p] < e.blkIndent) && -1 !== (c = o(e, p).trim()).indexOf("|") && !(e.sCount[p] - e.blkIndent >= 4); p++) {
                    for (h = s(c.replace(/^\||\|$/g, "")), d = e.push("tr_open", "tr", 1), u = 0; u < f; u++) d = e.push("td_open", "td", 1), m[u] && (d.attrs = [
                        ["style", "text-align:" + m[u]]
                    ]), (d = e.push("inline", "", 0)).content = h[u] ? h[u].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
                    d = e.push("tr_close", "tr", -1)
                }
                return d = e.push("tbody_close", "tbody", -1), d = e.push("table_close", "table", -1), _[1] = b[1] = p, e.line = p, !0
            }
        },
        "pAx/": e => {
            "use strict";
            e.exports = function(e) {
                var t;
                e.inlineMode ? ((t = new e.Token("inline", "", 0)).content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
            }
        },
        mUT7: e => {
            "use strict";
            e.exports = function(e) {
                var t, r, n, o = e.tokens;
                for (r = 0, n = o.length; r < n; r++) "inline" === (t = o[r]).type && e.md.inline.parse(t.content, e.md, e.env, t.children)
            }
        },
        HlfJ: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").arrayReplaceAt;

            function o(e) {
                return /^<\/a\s*>/i.test(e)
            }
            e.exports = function(e) {
                var t, r, s, i, a, c, l, u, p, h, f, d, m, g, _, b, k, v, y = e.tokens;
                if (e.md.options.linkify)
                    for (r = 0, s = y.length; r < s; r++)
                        if ("inline" === y[r].type && e.md.linkify.pretest(y[r].content))
                            for (m = 0, t = (i = y[r].children).length - 1; t >= 0; t--)
                                if ("link_close" !== (c = i[t]).type) {
                                    if ("html_inline" === c.type && (v = c.content, /^<a[>\s]/i.test(v) && m > 0 && m--, o(c.content) && m++), !(m > 0) && "text" === c.type && e.md.linkify.test(c.content)) {
                                        for (p = c.content, k = e.md.linkify.match(p), l = [], d = c.level, f = 0, u = 0; u < k.length; u++) g = k[u].url, _ = e.md.normalizeLink(g), e.md.validateLink(_) && (b = k[u].text, b = k[u].schema ? "mailto:" !== k[u].schema || /^mailto:/i.test(b) ? e.md.normalizeLinkText(b) : e.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), (h = k[u].index) > f && ((a = new e.Token("text", "", 0)).content = p.slice(f, h), a.level = d, l.push(a)), (a = new e.Token("link_open", "a", 1)).attrs = [
                                            ["href", _]
                                        ], a.level = d++, a.markup = "linkify", a.info = "auto", l.push(a), (a = new e.Token("text", "", 0)).content = b, a.level = d, l.push(a), (a = new e.Token("link_close", "a", -1)).level = --d, a.markup = "linkify", a.info = "auto", l.push(a), f = k[u].lastIndex);
                                        f < p.length && ((a = new e.Token("text", "", 0)).content = p.slice(f), a.level = d, l.push(a)), y[r].children = i = n(i, t, l)
                                    }
                                } else
                                    for (t--; i[t].level !== c.level && "link_open" !== i[t].type;) t--
            }
        },
        Dsb4: e => {
            "use strict";
            var t = /\r\n?|\n/g,
                r = /\0/g;
            e.exports = function(e) {
                var n;
                n = (n = e.src.replace(t, "\n")).replace(r, "\ufffd"), e.src = n
            }
        },
        DDxP: e => {
            "use strict";
            var t = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
                r = /\((c|tm|r|p)\)/i,
                n = /\((c|tm|r|p)\)/gi,
                o = {
                    c: "\xa9",
                    r: "\xae",
                    p: "\xa7",
                    tm: "\u2122"
                };

            function s(e, t) {
                return o[t.toLowerCase()]
            }

            function i(e) {
                var t, r, o = 0;
                for (t = e.length - 1; t >= 0; t--) "text" !== (r = e[t]).type || o || (r.content = r.content.replace(n, s)), "link_open" === r.type && "auto" === r.info && o--, "link_close" === r.type && "auto" === r.info && o++
            }

            function a(e) {
                var r, n, o = 0;
                for (r = e.length - 1; r >= 0; r--) "text" !== (n = e[r]).type || o || t.test(n.content) && (n.content = n.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "\u2026").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1\u2014$2").replace(/(^|\s)--(\s|$)/gm, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1\u2013$2")), "link_open" === n.type && "auto" === n.info && o--, "link_close" === n.type && "auto" === n.info && o++
            }
            e.exports = function(e) {
                var n;
                if (e.md.options.typographer)
                    for (n = e.tokens.length - 1; n >= 0; n--) "inline" === e.tokens[n].type && (r.test(e.tokens[n].content) && i(e.tokens[n].children), t.test(e.tokens[n].content) && a(e.tokens[n].children))
            }
        },
        AXp1: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isWhiteSpace,
                o = r("T1Ll").isPunctChar,
                s = r("T1Ll").isMdAsciiPunct,
                i = /['"]/,
                a = /['"]/g;

            function c(e, t, r) {
                return e.substr(0, t) + r + e.substr(t + 1)
            }

            function l(e, t) {
                var r, i, l, u, p, h, f, d, m, g, _, b, k, v, y, x, A, C, w, D, E;
                for (w = [], r = 0; r < e.length; r++) {
                    for (i = e[r], f = e[r].level, A = w.length - 1; A >= 0 && !(w[A].level <= f); A--);
                    if (w.length = A + 1, "text" === i.type) {
                        p = 0, h = (l = i.content).length;
                        e: for (; p < h && (a.lastIndex = p, u = a.exec(l));) {
                            if (y = x = !0, p = u.index + 1, C = "'" === u[0], m = 32, u.index - 1 >= 0) m = l.charCodeAt(u.index - 1);
                            else
                                for (A = r - 1; A >= 0 && ("softbreak" !== e[A].type && "hardbreak" !== e[A].type); A--)
                                    if ("text" === e[A].type) {
                                        m = e[A].content.charCodeAt(e[A].content.length - 1);
                                        break
                                    } if (g = 32, p < h) g = l.charCodeAt(p);
                            else
                                for (A = r + 1; A < e.length && ("softbreak" !== e[A].type && "hardbreak" !== e[A].type); A++)
                                    if ("text" === e[A].type) {
                                        g = e[A].content.charCodeAt(0);
                                        break
                                    } if (_ = s(m) || o(String.fromCharCode(m)), b = s(g) || o(String.fromCharCode(g)), k = n(m), (v = n(g)) ? y = !1 : b && (k || _ || (y = !1)), k ? x = !1 : _ && (v || b || (x = !1)), 34 === g && '"' === u[0] && m >= 48 && m <= 57 && (x = y = !1), y && x && (y = !1, x = b), y || x) {
                                if (x)
                                    for (A = w.length - 1; A >= 0 && (d = w[A], !(w[A].level < f)); A--)
                                        if (d.single === C && w[A].level === f) {
                                            d = w[A], C ? (D = t.md.options.quotes[2], E = t.md.options.quotes[3]) : (D = t.md.options.quotes[0], E = t.md.options.quotes[1]), i.content = c(i.content, u.index, E), e[d.token].content = c(e[d.token].content, d.pos, D), p += E.length - 1, d.token === r && (p += D.length - 1), h = (l = i.content).length, w.length = A;
                                            continue e
                                        }
                                y ? w.push({
                                    token: r,
                                    pos: u.index,
                                    single: C,
                                    level: f
                                }) : x && C && (i.content = c(i.content, u.index, "\u2019"))
                            } else C && (i.content = c(i.content, u.index, "\u2019"))
                        }
                    }
                }
            }
            e.exports = function(e) {
                var t;
                if (e.md.options.typographer)
                    for (t = e.tokens.length - 1; t >= 0; t--) "inline" === e.tokens[t].type && i.test(e.tokens[t].content) && l(e.tokens[t].children, e)
            }
        },
        "t+9L": (e, t, r) => {
            "use strict";
            var n = r("5z8k");

            function o(e, t, r) {
                this.src = e, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = t
            }
            o.prototype.Token = n, e.exports = o
        },
        mURL: e => {
            "use strict";
            var t = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
                r = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
            e.exports = function(e, n) {
                var o, s, i, a, c, l, u = e.pos;
                return 60 === e.src.charCodeAt(u) && (!((o = e.src.slice(u)).indexOf(">") < 0) && (r.test(o) ? (a = (s = o.match(r))[0].slice(1, -1), c = e.md.normalizeLink(a), !!e.md.validateLink(c) && (n || ((l = e.push("link_open", "a", 1)).attrs = [
                    ["href", c]
                ], l.markup = "autolink", l.info = "auto", (l = e.push("text", "", 0)).content = e.md.normalizeLinkText(a), (l = e.push("link_close", "a", -1)).markup = "autolink", l.info = "auto"), e.pos += s[0].length, !0)) : !!t.test(o) && (a = (i = o.match(t))[0].slice(1, -1), c = e.md.normalizeLink("mailto:" + a), !!e.md.validateLink(c) && (n || ((l = e.push("link_open", "a", 1)).attrs = [
                    ["href", c]
                ], l.markup = "autolink", l.info = "auto", (l = e.push("text", "", 0)).content = e.md.normalizeLinkText(a), (l = e.push("link_close", "a", -1)).markup = "autolink", l.info = "auto"), e.pos += i[0].length, !0))))
            }
        },
        Vtgc: e => {
            "use strict";
            e.exports = function(e, t) {
                var r, n, o, s, i, a, c = e.pos;
                if (96 !== e.src.charCodeAt(c)) return !1;
                for (r = c, c++, n = e.posMax; c < n && 96 === e.src.charCodeAt(c);) c++;
                for (o = e.src.slice(r, c), s = i = c; - 1 !== (s = e.src.indexOf("`", i));) {
                    for (i = s + 1; i < n && 96 === e.src.charCodeAt(i);) i++;
                    if (i - s === o.length) return t || ((a = e.push("code_inline", "code", 0)).markup = o, a.content = e.src.slice(c, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = i, !0
                }
                return t || (e.pending += o), e.pos += o.length, !0
            }
        },
        "I+gj": e => {
            "use strict";

            function t(e, t) {
                var r, n, o, s, i, a, c, l, u = {},
                    p = t.length;
                for (r = 0; r < p; r++)
                    if ((o = t[r]).length = o.length || 0, o.close) {
                        for (u.hasOwnProperty(o.marker) || (u[o.marker] = [-1, -1, -1]), i = u[o.marker][o.length % 3], a = -1, n = r - o.jump - 1; n > i; n -= s.jump + 1)
                            if ((s = t[n]).marker === o.marker && (-1 === a && (a = n), s.open && s.end < 0 && s.level === o.level && (c = !1, (s.close || o.open) && (s.length + o.length) % 3 === 0 && (s.length % 3 === 0 && o.length % 3 === 0 || (c = !0)), !c))) {
                                l = n > 0 && !t[n - 1].open ? t[n - 1].jump + 1 : 0, o.jump = r - n + l, o.open = !1, s.end = r, s.jump = l, s.close = !1, a = -1;
                                break
                            } - 1 !== a && (u[o.marker][(o.length || 0) % 3] = a)
                    }
            }
            e.exports = function(e) {
                var r, n = e.tokens_meta,
                    o = e.tokens_meta.length;
                for (t(0, e.delimiters), r = 0; r < o; r++) n[r] && n[r].delimiters && t(0, n[r].delimiters)
            }
        },
        pVcW: e => {
            "use strict";

            function t(e, t) {
                var r, n, o, s, i, a;
                for (r = t.length - 1; r >= 0; r--) 95 !== (n = t[r]).marker && 42 !== n.marker || -1 !== n.end && (o = t[n.end], a = r > 0 && t[r - 1].end === n.end + 1 && t[r - 1].token === n.token - 1 && t[n.end + 1].token === o.token + 1 && t[r - 1].marker === n.marker, i = String.fromCharCode(n.marker), (s = e.tokens[n.token]).type = a ? "strong_open" : "em_open", s.tag = a ? "strong" : "em", s.nesting = 1, s.markup = a ? i + i : i, s.content = "", (s = e.tokens[o.token]).type = a ? "strong_close" : "em_close", s.tag = a ? "strong" : "em", s.nesting = -1, s.markup = a ? i + i : i, s.content = "", a && (e.tokens[t[r - 1].token].content = "", e.tokens[t[n.end + 1].token].content = "", r--))
            }
            e.exports.q = function(e, t) {
                var r, n, o = e.pos,
                    s = e.src.charCodeAt(o);
                if (t) return !1;
                if (95 !== s && 42 !== s) return !1;
                for (n = e.scanDelims(e.pos, 42 === s), r = 0; r < n.length; r++) e.push("text", "", 0).content = String.fromCharCode(s), e.delimiters.push({
                    marker: s,
                    length: n.length,
                    jump: r,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: n.can_open,
                    close: n.can_close
                });
                return e.pos += n.length, !0
            }, e.exports.g = function(e) {
                var r, n = e.tokens_meta,
                    o = e.tokens_meta.length;
                for (t(e, e.delimiters), r = 0; r < o; r++) n[r] && n[r].delimiters && t(e, n[r].delimiters)
            }
        },
        DIje: (e, t, r) => {
            "use strict";
            var n = r("JzjW"),
                o = r("T1Ll").has,
                s = r("T1Ll").isValidEntityCode,
                i = r("T1Ll").fromCodePoint,
                a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
                c = /^&([a-z][a-z0-9]{1,31});/i;
            e.exports = function(e, t) {
                var r, l, u = e.pos,
                    p = e.posMax;
                if (38 !== e.src.charCodeAt(u)) return !1;
                if (u + 1 < p)
                    if (35 === e.src.charCodeAt(u + 1)) {
                        if (l = e.src.slice(u).match(a)) return t || (r = "x" === l[1][0].toLowerCase() ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10), e.pending += s(r) ? i(r) : i(65533)), e.pos += l[0].length, !0
                    } else if ((l = e.src.slice(u).match(c)) && o(n, l[1])) return t || (e.pending += n[l[1]]), e.pos += l[0].length, !0;
                return t || (e.pending += "&"), e.pos++, !0
            }
        },
        XWar: (e, t, r) => {
            "use strict";
            for (var n = r("T1Ll").isSpace, o = [], s = 0; s < 256; s++) o.push(0);
            "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e) {
                o[e.charCodeAt(0)] = 1
            })), e.exports = function(e, t) {
                var r, s = e.pos,
                    i = e.posMax;
                if (92 !== e.src.charCodeAt(s)) return !1;
                if (++s < i) {
                    if ((r = e.src.charCodeAt(s)) < 256 && 0 !== o[r]) return t || (e.pending += e.src[s]), e.pos += 2, !0;
                    if (10 === r) {
                        for (t || e.push("hardbreak", "br", 0), s++; s < i && (r = e.src.charCodeAt(s), n(r));) s++;
                        return e.pos = s, !0
                    }
                }
                return t || (e.pending += "\\"), e.pos++, !0
            }
        },
        j4SW: (e, t, r) => {
            "use strict";
            var n = r("OqJb").l;
            e.exports = function(e, t) {
                var r, o, s, i = e.pos;
                return !!e.md.options.html && (s = e.posMax, !(60 !== e.src.charCodeAt(i) || i + 2 >= s) && (!(33 !== (r = e.src.charCodeAt(i + 1)) && 63 !== r && 47 !== r && ! function(e) {
                    var t = 32 | e;
                    return t >= 97 && t <= 122
                }(r)) && (!!(o = e.src.slice(i).match(n)) && (t || (e.push("html_inline", "", 0).content = e.src.slice(i, i + o[0].length)), e.pos += o[0].length, !0))))
            }
        },
        UKA5: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").normalizeReference,
                o = r("T1Ll").isSpace;
            e.exports = function(e, t) {
                var r, s, i, a, c, l, u, p, h, f, d, m, g, _ = "",
                    b = e.pos,
                    k = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos)) return !1;
                if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                if (l = e.pos + 2, (c = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0) return !1;
                if ((u = c + 1) < k && 40 === e.src.charCodeAt(u)) {
                    for (u++; u < k && (s = e.src.charCodeAt(u), o(s) || 10 === s); u++);
                    if (u >= k) return !1;
                    for (g = u, (h = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok && (_ = e.md.normalizeLink(h.str), e.md.validateLink(_) ? u = h.pos : _ = ""), g = u; u < k && (s = e.src.charCodeAt(u), o(s) || 10 === s); u++);
                    if (h = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < k && g !== u && h.ok)
                        for (f = h.str, u = h.pos; u < k && (s = e.src.charCodeAt(u), o(s) || 10 === s); u++);
                    else f = "";
                    if (u >= k || 41 !== e.src.charCodeAt(u)) return e.pos = b, !1;
                    u++
                } else {
                    if ("undefined" === typeof e.env.references) return !1;
                    if (u < k && 91 === e.src.charCodeAt(u) ? (g = u + 1, (u = e.md.helpers.parseLinkLabel(e, u)) >= 0 ? a = e.src.slice(g, u++) : u = c + 1) : u = c + 1, a || (a = e.src.slice(l, c)), !(p = e.env.references[n(a)])) return e.pos = b, !1;
                    _ = p.href, f = p.title
                }
                return t || (i = e.src.slice(l, c), e.md.inline.parse(i, e.md, e.env, m = []), (d = e.push("image", "img", 0)).attrs = r = [
                    ["src", _],
                    ["alt", ""]
                ], d.children = m, d.content = i, f && r.push(["title", f])), e.pos = u, e.posMax = k, !0
            }
        },
        otMq: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").normalizeReference,
                o = r("T1Ll").isSpace;
            e.exports = function(e, t) {
                var r, s, i, a, c, l, u, p, h, f = "",
                    d = e.pos,
                    m = e.posMax,
                    g = e.pos,
                    _ = !0;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                if (c = e.pos + 1, (a = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0) return !1;
                if ((l = a + 1) < m && 40 === e.src.charCodeAt(l)) {
                    for (_ = !1, l++; l < m && (s = e.src.charCodeAt(l), o(s) || 10 === s); l++);
                    if (l >= m) return !1;
                    for (g = l, (u = e.md.helpers.parseLinkDestination(e.src, l, e.posMax)).ok && (f = e.md.normalizeLink(u.str), e.md.validateLink(f) ? l = u.pos : f = ""), g = l; l < m && (s = e.src.charCodeAt(l), o(s) || 10 === s); l++);
                    if (u = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < m && g !== l && u.ok)
                        for (h = u.str, l = u.pos; l < m && (s = e.src.charCodeAt(l), o(s) || 10 === s); l++);
                    else h = "";
                    (l >= m || 41 !== e.src.charCodeAt(l)) && (_ = !0), l++
                }
                if (_) {
                    if ("undefined" === typeof e.env.references) return !1;
                    if (l < m && 91 === e.src.charCodeAt(l) ? (g = l + 1, (l = e.md.helpers.parseLinkLabel(e, l)) >= 0 ? i = e.src.slice(g, l++) : l = a + 1) : l = a + 1, i || (i = e.src.slice(c, a)), !(p = e.env.references[n(i)])) return e.pos = d, !1;
                    f = p.href, h = p.title
                }
                return t || (e.pos = c, e.posMax = a, e.push("link_open", "a", 1).attrs = r = [
                    ["href", f]
                ], h && r.push(["title", h]), e.md.inline.tokenize(e), e.push("link_close", "a", -1)), e.pos = l, e.posMax = m, !0
            }
        },
        OOYR: (e, t, r) => {
            "use strict";
            var n = r("T1Ll").isSpace;
            e.exports = function(e, t) {
                var r, o, s = e.pos;
                if (10 !== e.src.charCodeAt(s)) return !1;
                for (r = e.pending.length - 1, o = e.posMax, t || (r >= 0 && 32 === e.pending.charCodeAt(r) ? r >= 1 && 32 === e.pending.charCodeAt(r - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), s++; s < o && n(e.src.charCodeAt(s));) s++;
                return e.pos = s, !0
            }
        },
        zwr4: (e, t, r) => {
            "use strict";
            var n = r("5z8k"),
                o = r("T1Ll").isWhiteSpace,
                s = r("T1Ll").isPunctChar,
                i = r("T1Ll").isMdAsciiPunct;

            function a(e, t, r, n) {
                this.src = e, this.env = r, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = []
            }
            a.prototype.pushPending = function() {
                var e = new n("text", "", 0);
                return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e
            }, a.prototype.push = function(e, t, r) {
                this.pending && this.pushPending();
                var o = new n(e, t, r),
                    s = null;
                return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), o.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = {
                    delimiters: this.delimiters
                }), this.pendingLevel = this.level, this.tokens.push(o), this.tokens_meta.push(s), o
            }, a.prototype.scanDelims = function(e, t) {
                var r, n, a, c, l, u, p, h, f, d = e,
                    m = !0,
                    g = !0,
                    _ = this.posMax,
                    b = this.src.charCodeAt(e);
                for (r = e > 0 ? this.src.charCodeAt(e - 1) : 32; d < _ && this.src.charCodeAt(d) === b;) d++;
                return a = d - e, n = d < _ ? this.src.charCodeAt(d) : 32, p = i(r) || s(String.fromCharCode(r)), f = i(n) || s(String.fromCharCode(n)), u = o(r), (h = o(n)) ? m = !1 : f && (u || p || (m = !1)), u ? g = !1 : p && (h || f || (g = !1)), t ? (c = m, l = g) : (c = m && (!g || p), l = g && (!m || f)), {
                    can_open: c,
                    can_close: l,
                    length: a
                }
            }, a.prototype.Token = n, e.exports = a
        },
        "/t9N": e => {
            "use strict";

            function t(e, t) {
                var r, n, o, s, i, a = [],
                    c = t.length;
                for (r = 0; r < c; r++) 126 === (o = t[r]).marker && -1 !== o.end && (s = t[o.end], (i = e.tokens[o.token]).type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", (i = e.tokens[s.token]).type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === e.tokens[s.token - 1].type && "~" === e.tokens[s.token - 1].content && a.push(s.token - 1));
                for (; a.length;) {
                    for (n = (r = a.pop()) + 1; n < e.tokens.length && "s_close" === e.tokens[n].type;) n++;
                    r !== --n && (i = e.tokens[n], e.tokens[n] = e.tokens[r], e.tokens[r] = i)
                }
            }
            e.exports.q = function(e, t) {
                var r, n, o, s, i = e.pos,
                    a = e.src.charCodeAt(i);
                if (t) return !1;
                if (126 !== a) return !1;
                if (o = (n = e.scanDelims(e.pos, !0)).length, s = String.fromCharCode(a), o < 2) return !1;
                for (o % 2 && (e.push("text", "", 0).content = s, o--), r = 0; r < o; r += 2) e.push("text", "", 0).content = s + s, e.delimiters.push({
                    marker: a,
                    length: 0,
                    jump: r,
                    token: e.tokens.length - 1,
                    end: -1,
                    open: n.can_open,
                    close: n.can_close
                });
                return e.pos += n.length, !0
            }, e.exports.g = function(e) {
                var r, n = e.tokens_meta,
                    o = e.tokens_meta.length;
                for (t(e, e.delimiters), r = 0; r < o; r++) n[r] && n[r].delimiters && t(e, n[r].delimiters)
            }
        },
        Bpyo: e => {
            "use strict";

            function t(e) {
                switch (e) {
                    case 10:
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }
            e.exports = function(e, r) {
                for (var n = e.pos; n < e.posMax && !t(e.src.charCodeAt(n));) n++;
                return n !== e.pos && (r || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0)
            }
        },
        mLjB: e => {
            "use strict";
            e.exports = function(e) {
                var t, r, n = 0,
                    o = e.tokens,
                    s = e.tokens.length;
                for (t = r = 0; t < s; t++) o[t].nesting < 0 && n--, o[t].level = n, o[t].nesting > 0 && n++, "text" === o[t].type && t + 1 < s && "text" === o[t + 1].type ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== r && (o[r] = o[t]), r++);
                t !== r && (o.length = r)
            }
        },
        "5z8k": e => {
            "use strict";

            function t(e, t, r) {
                this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
            }
            t.prototype.attrIndex = function(e) {
                var t, r, n;
                if (!this.attrs) return -1;
                for (r = 0, n = (t = this.attrs).length; r < n; r++)
                    if (t[r][0] === e) return r;
                return -1
            }, t.prototype.attrPush = function(e) {
                this.attrs ? this.attrs.push(e) : this.attrs = [e]
            }, t.prototype.attrSet = function(e, t) {
                var r = this.attrIndex(e),
                    n = [e, t];
                r < 0 ? this.attrPush(n) : this.attrs[r] = n
            }, t.prototype.attrGet = function(e) {
                var t = this.attrIndex(e),
                    r = null;
                return t >= 0 && (r = this.attrs[t][1]), r
            }, t.prototype.attrJoin = function(e, t) {
                var r = this.attrIndex(e);
                r < 0 ? this.attrPush([e, t]) : this.attrs[r][1] = this.attrs[r][1] + " " + t
            }, e.exports = t
        },
        VMHS: e => {
            "use strict";
            var t = {};

            function r(e, n) {
                var o;
                return "string" !== typeof n && (n = r.defaultChars), o = function(e) {
                    var r, n, o = t[e];
                    if (o) return o;
                    for (o = t[e] = [], r = 0; r < 128; r++) n = String.fromCharCode(r), o.push(n);
                    for (r = 0; r < e.length; r++) o[n = e.charCodeAt(r)] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
                    return o
                }(n), e.replace(/(%[a-f0-9]{2})+/gi, (function(e) {
                    var t, r, n, s, i, a, c, l = "";
                    for (t = 0, r = e.length; t < r; t += 3)(n = parseInt(e.slice(t + 1, t + 3), 16)) < 128 ? l += o[n] : 192 === (224 & n) && t + 3 < r && 128 === (192 & (s = parseInt(e.slice(t + 4, t + 6), 16))) ? (l += (c = n << 6 & 1984 | 63 & s) < 128 ? "\ufffd\ufffd" : String.fromCharCode(c), t += 3) : 224 === (240 & n) && t + 6 < r && (s = parseInt(e.slice(t + 4, t + 6), 16), i = parseInt(e.slice(t + 7, t + 9), 16), 128 === (192 & s) && 128 === (192 & i)) ? (l += (c = n << 12 & 61440 | s << 6 & 4032 | 63 & i) < 2048 || c >= 55296 && c <= 57343 ? "\ufffd\ufffd\ufffd" : String.fromCharCode(c), t += 6) : 240 === (248 & n) && t + 9 < r && (s = parseInt(e.slice(t + 4, t + 6), 16), i = parseInt(e.slice(t + 7, t + 9), 16), a = parseInt(e.slice(t + 10, t + 12), 16), 128 === (192 & s) && 128 === (192 & i) && 128 === (192 & a)) ? ((c = n << 18 & 1835008 | s << 12 & 258048 | i << 6 & 4032 | 63 & a) < 65536 || c > 1114111 ? l += "\ufffd\ufffd\ufffd\ufffd" : (c -= 65536, l += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), t += 9) : l += "\ufffd";
                    return l
                }))
            }
            r.defaultChars = ";/?:@&=+$,#", r.componentChars = "", e.exports = r
        },
        C8ig: e => {
            "use strict";
            var t = {};

            function r(e, n, o) {
                var s, i, a, c, l, u = "";
                for ("string" !== typeof n && (o = n, n = r.defaultChars), "undefined" === typeof o && (o = !0), l = function(e) {
                        var r, n, o = t[e];
                        if (o) return o;
                        for (o = t[e] = [], r = 0; r < 128; r++) n = String.fromCharCode(r), /^[0-9a-z]$/i.test(n) ? o.push(n) : o.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
                        for (r = 0; r < e.length; r++) o[e.charCodeAt(r)] = e[r];
                        return o
                    }(n), s = 0, i = e.length; s < i; s++)
                    if (a = e.charCodeAt(s), o && 37 === a && s + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(s + 1, s + 3))) u += e.slice(s, s + 3), s += 2;
                    else if (a < 128) u += l[a];
                else if (a >= 55296 && a <= 57343) {
                    if (a >= 55296 && a <= 56319 && s + 1 < i && (c = e.charCodeAt(s + 1)) >= 56320 && c <= 57343) {
                        u += encodeURIComponent(e[s] + e[s + 1]), s++;
                        continue
                    }
                    u += "%EF%BF%BD"
                } else u += encodeURIComponent(e[s]);
                return u
            }
            r.defaultChars = ";/?:@&=+$,-_.!~*'()#", r.componentChars = "-_.!~*'()", e.exports = r
        },
        vtGW: e => {
            "use strict";
            e.exports = function(e) {
                var t = "";
                return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && -1 !== e.hostname.indexOf(":") ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || ""
            }
        },
        BmNk: (e, t, r) => {
            "use strict";
            e.exports.encode = r("C8ig"), e.exports.decode = r("VMHS"), e.exports.format = r("vtGW"), e.exports.parse = r("ucQ5")
        },
        ucQ5: e => {
            "use strict";

            function t() {
                this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
            }
            var r = /^([a-z0-9.+-]+:)/i,
                n = /:[0-9]*$/,
                o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                s = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                i = ["'"].concat(s),
                a = ["%", "/", "?", ";", "#"].concat(i),
                c = ["/", "?", "#"],
                l = /^[+a-z0-9A-Z_-]{0,63}$/,
                u = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                p = {
                    javascript: !0,
                    "javascript:": !0
                },
                h = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                };
            t.prototype.parse = function(e, t) {
                var n, s, i, f, d, m = e;
                if (m = m.trim(), !t && 1 === e.split("#").length) {
                    var g = o.exec(m);
                    if (g) return this.pathname = g[1], g[2] && (this.search = g[2]), this
                }
                var _ = r.exec(m);
                if (_ && (i = (_ = _[0]).toLowerCase(), this.protocol = _, m = m.substr(_.length)), (t || _ || m.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(d = "//" === m.substr(0, 2)) || _ && p[_] || (m = m.substr(2), this.slashes = !0)), !p[_] && (d || _ && !h[_])) {
                    var b, k, v = -1;
                    for (n = 0; n < c.length; n++) - 1 !== (f = m.indexOf(c[n])) && (-1 === v || f < v) && (v = f);
                    for (-1 !== (k = -1 === v ? m.lastIndexOf("@") : m.lastIndexOf("@", v)) && (b = m.slice(0, k), m = m.slice(k + 1), this.auth = b), v = -1, n = 0; n < a.length; n++) - 1 !== (f = m.indexOf(a[n])) && (-1 === v || f < v) && (v = f); - 1 === v && (v = m.length), ":" === m[v - 1] && v--;
                    var y = m.slice(0, v);
                    m = m.slice(v), this.parseHost(y), this.hostname = this.hostname || "";
                    var x = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!x) {
                        var A = this.hostname.split(/\./);
                        for (n = 0, s = A.length; n < s; n++) {
                            var C = A[n];
                            if (C && !C.match(l)) {
                                for (var w = "", D = 0, E = C.length; D < E; D++) C.charCodeAt(D) > 127 ? w += "x" : w += C[D];
                                if (!w.match(l)) {
                                    var S = A.slice(0, n),
                                        T = A.slice(n + 1),
                                        L = C.match(u);
                                    L && (S.push(L[1]), T.unshift(L[2])), T.length && (m = T.join(".") + m), this.hostname = S.join(".");
                                    break
                                }
                            }
                        }
                    }
                    this.hostname.length > 255 && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
                }
                var q = m.indexOf("#"); - 1 !== q && (this.hash = m.substr(q), m = m.slice(0, q));
                var F = m.indexOf("?");
                return -1 !== F && (this.search = m.substr(F), m = m.slice(0, F)), m && (this.pathname = m), h[i] && this.hostname && !this.pathname && (this.pathname = ""), this
            }, t.prototype.parseHost = function(e) {
                var t = n.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }, e.exports = function(e, r) {
                if (e && e instanceof t) return e;
                var n = new t;
                return n.parse(e, r), n
            }
        },
        ZbjU: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                decode: () => _,
                default: () => y,
                encode: () => b,
                toASCII: () => v,
                toUnicode: () => k,
                ucs2decode: () => f,
                ucs2encode: () => d
            });
            const n = 2147483647,
                o = 36,
                s = /^xn--/,
                i = /[^\0-\x7E]/,
                a = /[\x2E\u3002\uFF0E\uFF61]/g,
                c = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                l = Math.floor,
                u = String.fromCharCode;

            function p(e) {
                throw new RangeError(c[e])
            }

            function h(e, t) {
                const r = e.split("@");
                let n = "";
                r.length > 1 && (n = r[0] + "@", e = r[1]);
                const o = function(e, t) {
                    const r = [];
                    let n = e.length;
                    for (; n--;) r[n] = t(e[n]);
                    return r
                }((e = e.replace(a, ".")).split("."), t).join(".");
                return n + o
            }

            function f(e) {
                const t = [];
                let r = 0;
                const n = e.length;
                for (; r < n;) {
                    const o = e.charCodeAt(r++);
                    if (o >= 55296 && o <= 56319 && r < n) {
                        const n = e.charCodeAt(r++);
                        56320 == (64512 & n) ? t.push(((1023 & o) << 10) + (1023 & n) + 65536) : (t.push(o), r--)
                    } else t.push(o)
                }
                return t
            }
            const d = e => String.fromCodePoint(...e),
                m = function(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                },
                g = function(e, t, r) {
                    let n = 0;
                    for (e = r ? l(e / 700) : e >> 1, e += l(e / t); e > 455; n += o) e = l(e / 35);
                    return l(n + 36 * e / (e + 38))
                },
                _ = function(e) {
                    const t = [],
                        r = e.length;
                    let s = 0,
                        i = 128,
                        a = 72,
                        c = e.lastIndexOf("-");
                    c < 0 && (c = 0);
                    for (let n = 0; n < c; ++n) e.charCodeAt(n) >= 128 && p("not-basic"), t.push(e.charCodeAt(n));
                    for (let h = c > 0 ? c + 1 : 0; h < r;) {
                        let c = s;
                        for (let t = 1, i = o;; i += o) {
                            h >= r && p("invalid-input");
                            const c = (u = e.charCodeAt(h++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : o;
                            (c >= o || c > l((n - s) / t)) && p("overflow"), s += c * t;
                            const f = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
                            if (c < f) break;
                            const d = o - f;
                            t > l(n / d) && p("overflow"), t *= d
                        }
                        const f = t.length + 1;
                        a = g(s - c, f, 0 == c), l(s / f) > n - i && p("overflow"), i += l(s / f), s %= f, t.splice(s++, 0, i)
                    }
                    var u;
                    return String.fromCodePoint(...t)
                },
                b = function(e) {
                    const t = [];
                    let r = (e = f(e)).length,
                        s = 128,
                        i = 0,
                        a = 72;
                    for (const n of e) n < 128 && t.push(u(n));
                    let c = t.length,
                        h = c;
                    for (c && t.push("-"); h < r;) {
                        let r = n;
                        for (const t of e) t >= s && t < r && (r = t);
                        const f = h + 1;
                        r - s > l((n - i) / f) && p("overflow"), i += (r - s) * f, s = r;
                        for (const d of e)
                            if (d < s && ++i > n && p("overflow"), d == s) {
                                let e = i;
                                for (let r = o;; r += o) {
                                    const n = r <= a ? 1 : r >= a + 26 ? 26 : r - a;
                                    if (e < n) break;
                                    const s = e - n,
                                        i = o - n;
                                    t.push(u(m(n + s % i, 0))), e = l(s / i)
                                }
                                t.push(u(m(e, 0))), a = g(i, f, h == c), i = 0, ++h
                            }++i, ++s
                    }
                    return t.join("")
                },
                k = function(e) {
                    return h(e, (function(e) {
                        return s.test(e) ? _(e.slice(4).toLowerCase()) : e
                    }))
                },
                v = function(e) {
                    return h(e, (function(e) {
                        return i.test(e) ? "xn--" + b(e) : e
                    }))
                },
                y = {
                    version: "2.1.0",
                    ucs2: {
                        decode: f,
                        encode: d
                    },
                    decode: _,
                    encode: b,
                    toASCII: v,
                    toUnicode: k
                }
        },
        RYQf: e => {
            e.exports = /[\0-\x1F\x7F-\x9F]/
        },
        bUrk: e => {
            e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
        },
        gtbP: e => {
            e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
        },
        Ckiu: e => {
            e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
        },
        vu0X: (e, t, r) => {
            "use strict";
            t.Any = r("7EA0"), t.Cc = r("RYQf"), t.Cf = r("bUrk"), t.P = r("gtbP"), t.Z = r("Ckiu")
        },
        "7EA0": e => {
            e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
        },
        e5U8: e => {
            "use strict";
            e.exports = JSON.parse('{"Aacute":"\xc1","aacute":"\xe1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223e","acd":"\u223f","acE":"\u223e\u0333","Acirc":"\xc2","acirc":"\xe2","acute":"\xb4","Acy":"\u0410","acy":"\u0430","AElig":"\xc6","aelig":"\xe6","af":"\u2061","Afr":"\ud835\udd04","afr":"\ud835\udd1e","Agrave":"\xc0","agrave":"\xe0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03b1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2a3f","amp":"&","AMP":"&","andand":"\u2a55","And":"\u2a53","and":"\u2227","andd":"\u2a5c","andslope":"\u2a58","andv":"\u2a5a","ang":"\u2220","ange":"\u29a4","angle":"\u2220","angmsdaa":"\u29a8","angmsdab":"\u29a9","angmsdac":"\u29aa","angmsdad":"\u29ab","angmsdae":"\u29ac","angmsdaf":"\u29ad","angmsdag":"\u29ae","angmsdah":"\u29af","angmsd":"\u2221","angrt":"\u221f","angrtvb":"\u22be","angrtvbd":"\u299d","angsph":"\u2222","angst":"\xc5","angzarr":"\u237c","Aogon":"\u0104","aogon":"\u0105","Aopf":"\ud835\udd38","aopf":"\ud835\udd52","apacir":"\u2a6f","ap":"\u2248","apE":"\u2a70","ape":"\u224a","apid":"\u224b","apos":"\'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224a","Aring":"\xc5","aring":"\xe5","Ascr":"\ud835\udc9c","ascr":"\ud835\udcb6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224d","Atilde":"\xc3","atilde":"\xe3","Auml":"\xc4","auml":"\xe4","awconint":"\u2233","awint":"\u2a11","backcong":"\u224c","backepsilon":"\u03f6","backprime":"\u2035","backsim":"\u223d","backsimeq":"\u22cd","Backslash":"\u2216","Barv":"\u2ae7","barvee":"\u22bd","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23b5","bbrktbrk":"\u23b6","bcong":"\u224c","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201e","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29b0","bepsi":"\u03f6","bernou":"\u212c","Bernoullis":"\u212c","Beta":"\u0392","beta":"\u03b2","beth":"\u2136","between":"\u226c","Bfr":"\ud835\udd05","bfr":"\ud835\udd1f","bigcap":"\u22c2","bigcirc":"\u25ef","bigcup":"\u22c3","bigodot":"\u2a00","bigoplus":"\u2a01","bigotimes":"\u2a02","bigsqcup":"\u2a06","bigstar":"\u2605","bigtriangledown":"\u25bd","bigtriangleup":"\u25b3","biguplus":"\u2a04","bigvee":"\u22c1","bigwedge":"\u22c0","bkarow":"\u290d","blacklozenge":"\u29eb","blacksquare":"\u25aa","blacktriangle":"\u25b4","blacktriangledown":"\u25be","blacktriangleleft":"\u25c2","blacktriangleright":"\u25b8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20e5","bnequiv":"\u2261\u20e5","bNot":"\u2aed","bnot":"\u2310","Bopf":"\ud835\udd39","bopf":"\ud835\udd53","bot":"\u22a5","bottom":"\u22a5","bowtie":"\u22c8","boxbox":"\u29c9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250c","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252c","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229f","boxplus":"\u229e","boxtimes":"\u22a0","boxul":"\u2518","boxuL":"\u255b","boxUl":"\u255c","boxUL":"\u255d","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255a","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253c","boxvH":"\u256a","boxVh":"\u256b","boxVH":"\u256c","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251c","boxvR":"\u255e","boxVr":"\u255f","boxVR":"\u2560","bprime":"\u2035","breve":"\u02d8","Breve":"\u02d8","brvbar":"\xa6","bscr":"\ud835\udcb7","Bscr":"\u212c","bsemi":"\u204f","bsim":"\u223d","bsime":"\u22cd","bsolb":"\u29c5","bsol":"\\\\","bsolhsub":"\u27c8","bull":"\u2022","bullet":"\u2022","bump":"\u224e","bumpE":"\u2aae","bumpe":"\u224f","Bumpeq":"\u224e","bumpeq":"\u224f","Cacute":"\u0106","cacute":"\u0107","capand":"\u2a44","capbrcup":"\u2a49","capcap":"\u2a4b","cap":"\u2229","Cap":"\u22d2","capcup":"\u2a47","capdot":"\u2a40","CapitalDifferentialD":"\u2145","caps":"\u2229\ufe00","caret":"\u2041","caron":"\u02c7","Cayleys":"\u212d","ccaps":"\u2a4d","Ccaron":"\u010c","ccaron":"\u010d","Ccedil":"\xc7","ccedil":"\xe7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2a4c","ccupssm":"\u2a50","Cdot":"\u010a","cdot":"\u010b","cedil":"\xb8","Cedilla":"\xb8","cemptyv":"\u29b2","cent":"\xa2","centerdot":"\xb7","CenterDot":"\xb7","cfr":"\ud835\udd20","Cfr":"\u212d","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03a7","chi":"\u03c7","circ":"\u02c6","circeq":"\u2257","circlearrowleft":"\u21ba","circlearrowright":"\u21bb","circledast":"\u229b","circledcirc":"\u229a","circleddash":"\u229d","CircleDot":"\u2299","circledR":"\xae","circledS":"\u24c8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25cb","cirE":"\u29c3","cire":"\u2257","cirfnint":"\u2a10","cirmid":"\u2aef","cirscir":"\u29c2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201d","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2a74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2a6d","Congruent":"\u2261","conint":"\u222e","Conint":"\u222f","ContourIntegral":"\u222e","copf":"\ud835\udd54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\xa9","COPY":"\xa9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21b5","cross":"\u2717","Cross":"\u2a2f","Cscr":"\ud835\udc9e","cscr":"\ud835\udcb8","csub":"\u2acf","csube":"\u2ad1","csup":"\u2ad0","csupe":"\u2ad2","ctdot":"\u22ef","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22de","cuesc":"\u22df","cularr":"\u21b6","cularrp":"\u293d","cupbrcap":"\u2a48","cupcap":"\u2a46","CupCap":"\u224d","cup":"\u222a","Cup":"\u22d3","cupcup":"\u2a4a","cupdot":"\u228d","cupor":"\u2a45","cups":"\u222a\ufe00","curarr":"\u21b7","curarrm":"\u293c","curlyeqprec":"\u22de","curlyeqsucc":"\u22df","curlyvee":"\u22ce","curlywedge":"\u22cf","curren":"\xa4","curvearrowleft":"\u21b6","curvearrowright":"\u21b7","cuvee":"\u22ce","cuwed":"\u22cf","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232d","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21a1","dArr":"\u21d3","dash":"\u2010","Dashv":"\u2ae4","dashv":"\u22a3","dbkarow":"\u290f","dblac":"\u02dd","Dcaron":"\u010e","dcaron":"\u010f","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21ca","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2a77","deg":"\xb0","Del":"\u2207","Delta":"\u0394","delta":"\u03b4","demptyv":"\u29b1","dfisht":"\u297f","Dfr":"\ud835\udd07","dfr":"\ud835\udd21","dHar":"\u2965","dharl":"\u21c3","dharr":"\u21c2","DiacriticalAcute":"\xb4","DiacriticalDot":"\u02d9","DiacriticalDoubleAcute":"\u02dd","DiacriticalGrave":"`","DiacriticalTilde":"\u02dc","diam":"\u22c4","diamond":"\u22c4","Diamond":"\u22c4","diamondsuit":"\u2666","diams":"\u2666","die":"\xa8","DifferentialD":"\u2146","digamma":"\u03dd","disin":"\u22f2","div":"\xf7","divide":"\xf7","divideontimes":"\u22c7","divonx":"\u22c7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231e","dlcrop":"\u230d","dollar":"$","Dopf":"\ud835\udd3b","dopf":"\ud835\udd55","Dot":"\xa8","dot":"\u02d9","DotDot":"\u20dc","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22a1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222f","DoubleDot":"\xa8","DoubleDownArrow":"\u21d3","DoubleLeftArrow":"\u21d0","DoubleLeftRightArrow":"\u21d4","DoubleLeftTee":"\u2ae4","DoubleLongLeftArrow":"\u27f8","DoubleLongLeftRightArrow":"\u27fa","DoubleLongRightArrow":"\u27f9","DoubleRightArrow":"\u21d2","DoubleRightTee":"\u22a8","DoubleUpArrow":"\u21d1","DoubleUpDownArrow":"\u21d5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21d3","DownArrowUpArrow":"\u21f5","DownBreve":"\u0311","downdownarrows":"\u21ca","downharpoonleft":"\u21c3","downharpoonright":"\u21c2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295e","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21bd","DownRightTeeVector":"\u295f","DownRightVectorBar":"\u2957","DownRightVector":"\u21c1","DownTeeArrow":"\u21a7","DownTee":"\u22a4","drbkarow":"\u2910","drcorn":"\u231f","drcrop":"\u230c","Dscr":"\ud835\udc9f","dscr":"\ud835\udcb9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29f6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22f1","dtri":"\u25bf","dtrif":"\u25be","duarr":"\u21f5","duhar":"\u296f","dwangle":"\u29a6","DZcy":"\u040f","dzcy":"\u045f","dzigrarr":"\u27ff","Eacute":"\xc9","eacute":"\xe9","easter":"\u2a6e","Ecaron":"\u011a","ecaron":"\u011b","Ecirc":"\xca","ecirc":"\xea","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042d","ecy":"\u044d","eDDot":"\u2a77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\ud835\udd08","efr":"\ud835\udd22","eg":"\u2a9a","Egrave":"\xc8","egrave":"\xe8","egs":"\u2a96","egsdot":"\u2a98","el":"\u2a99","Element":"\u2208","elinters":"\u23e7","ell":"\u2113","els":"\u2a95","elsdot":"\u2a97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25fb","emptyv":"\u2205","EmptyVerySmallSquare":"\u25ab","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014a","eng":"\u014b","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\ud835\udd3c","eopf":"\ud835\udd56","epar":"\u22d5","eparsl":"\u29e3","eplus":"\u2a71","epsi":"\u03b5","Epsilon":"\u0395","epsilon":"\u03b5","epsiv":"\u03f5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2a96","eqslantless":"\u2a95","Equal":"\u2a75","equals":"=","EqualTilde":"\u2242","equest":"\u225f","Equilibrium":"\u21cc","equiv":"\u2261","equivDD":"\u2a78","eqvparsl":"\u29e5","erarr":"\u2971","erDot":"\u2253","escr":"\u212f","Escr":"\u2130","esdot":"\u2250","Esim":"\u2a73","esim":"\u2242","Eta":"\u0397","eta":"\u03b7","ETH":"\xd0","eth":"\xf0","Euml":"\xcb","euml":"\xeb","euro":"\u20ac","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\ufb03","fflig":"\ufb00","ffllig":"\ufb04","Ffr":"\ud835\udd09","ffr":"\ud835\udd23","filig":"\ufb01","FilledSmallSquare":"\u25fc","FilledVerySmallSquare":"\u25aa","fjlig":"fj","flat":"\u266d","fllig":"\ufb02","fltns":"\u25b1","fnof":"\u0192","Fopf":"\ud835\udd3d","fopf":"\ud835\udd57","forall":"\u2200","ForAll":"\u2200","fork":"\u22d4","forkv":"\u2ad9","Fouriertrf":"\u2131","fpartint":"\u2a0d","frac12":"\xbd","frac13":"\u2153","frac14":"\xbc","frac15":"\u2155","frac16":"\u2159","frac18":"\u215b","frac23":"\u2154","frac25":"\u2156","frac34":"\xbe","frac35":"\u2157","frac38":"\u215c","frac45":"\u2158","frac56":"\u215a","frac58":"\u215d","frac78":"\u215e","frasl":"\u2044","frown":"\u2322","fscr":"\ud835\udcbb","Fscr":"\u2131","gacute":"\u01f5","Gamma":"\u0393","gamma":"\u03b3","Gammad":"\u03dc","gammad":"\u03dd","gap":"\u2a86","Gbreve":"\u011e","gbreve":"\u011f","Gcedil":"\u0122","Gcirc":"\u011c","gcirc":"\u011d","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2a8c","gel":"\u22db","geq":"\u2265","geqq":"\u2267","geqslant":"\u2a7e","gescc":"\u2aa9","ges":"\u2a7e","gesdot":"\u2a80","gesdoto":"\u2a82","gesdotol":"\u2a84","gesl":"\u22db\ufe00","gesles":"\u2a94","Gfr":"\ud835\udd0a","gfr":"\ud835\udd24","gg":"\u226b","Gg":"\u22d9","ggg":"\u22d9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2aa5","gl":"\u2277","glE":"\u2a92","glj":"\u2aa4","gnap":"\u2a8a","gnapprox":"\u2a8a","gne":"\u2a88","gnE":"\u2269","gneq":"\u2a88","gneqq":"\u2269","gnsim":"\u22e7","Gopf":"\ud835\udd3e","gopf":"\ud835\udd58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22db","GreaterFullEqual":"\u2267","GreaterGreater":"\u2aa2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2a7e","GreaterTilde":"\u2273","Gscr":"\ud835\udca2","gscr":"\u210a","gsim":"\u2273","gsime":"\u2a8e","gsiml":"\u2a90","gtcc":"\u2aa7","gtcir":"\u2a7a","gt":">","GT":">","Gt":"\u226b","gtdot":"\u22d7","gtlPar":"\u2995","gtquest":"\u2a7c","gtrapprox":"\u2a86","gtrarr":"\u2978","gtrdot":"\u22d7","gtreqless":"\u22db","gtreqqless":"\u2a8c","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\ufe00","gvnE":"\u2269\ufe00","Hacek":"\u02c7","hairsp":"\u200a","half":"\xbd","hamilt":"\u210b","HARDcy":"\u042a","hardcy":"\u044a","harrcir":"\u2948","harr":"\u2194","hArr":"\u21d4","harrw":"\u21ad","Hat":"^","hbar":"\u210f","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22b9","hfr":"\ud835\udd25","Hfr":"\u210c","HilbertSpace":"\u210b","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21ff","homtht":"\u223b","hookleftarrow":"\u21a9","hookrightarrow":"\u21aa","hopf":"\ud835\udd59","Hopf":"\u210d","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\ud835\udcbd","Hscr":"\u210b","hslash":"\u210f","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224e","HumpEqual":"\u224f","hybull":"\u2043","hyphen":"\u2010","Iacute":"\xcd","iacute":"\xed","ic":"\u2063","Icirc":"\xce","icirc":"\xee","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\xa1","iff":"\u21d4","ifr":"\ud835\udd26","Ifr":"\u2111","Igrave":"\xcc","igrave":"\xec","ii":"\u2148","iiiint":"\u2a0c","iiint":"\u222d","iinfin":"\u29dc","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012a","imacr":"\u012b","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22b7","imped":"\u01b5","Implies":"\u21d2","incare":"\u2105","in":"\u2208","infin":"\u221e","infintie":"\u29dd","inodot":"\u0131","intcal":"\u22ba","int":"\u222b","Int":"\u222c","integers":"\u2124","Integral":"\u222b","intercal":"\u22ba","Intersection":"\u22c2","intlarhk":"\u2a17","intprod":"\u2a3c","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012e","iogon":"\u012f","Iopf":"\ud835\udd40","iopf":"\ud835\udd5a","Iota":"\u0399","iota":"\u03b9","iprod":"\u2a3c","iquest":"\xbf","iscr":"\ud835\udcbe","Iscr":"\u2110","isin":"\u2208","isindot":"\u22f5","isinE":"\u22f9","isins":"\u22f4","isinsv":"\u22f3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\xcf","iuml":"\xef","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\ud835\udd0d","jfr":"\ud835\udd27","jmath":"\u0237","Jopf":"\ud835\udd41","jopf":"\ud835\udd5b","Jscr":"\ud835\udca5","jscr":"\ud835\udcbf","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039a","kappa":"\u03ba","kappav":"\u03f0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041a","kcy":"\u043a","Kfr":"\ud835\udd0e","kfr":"\ud835\udd28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040c","kjcy":"\u045c","Kopf":"\ud835\udd42","kopf":"\ud835\udd5c","Kscr":"\ud835\udca6","kscr":"\ud835\udcc0","lAarr":"\u21da","Lacute":"\u0139","lacute":"\u013a","laemptyv":"\u29b4","lagran":"\u2112","Lambda":"\u039b","lambda":"\u03bb","lang":"\u27e8","Lang":"\u27ea","langd":"\u2991","langle":"\u27e8","lap":"\u2a85","Laplacetrf":"\u2112","laquo":"\xab","larrb":"\u21e4","larrbfs":"\u291f","larr":"\u2190","Larr":"\u219e","lArr":"\u21d0","larrfs":"\u291d","larrhk":"\u21a9","larrlp":"\u21ab","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21a2","latail":"\u2919","lAtail":"\u291b","lat":"\u2aab","late":"\u2aad","lates":"\u2aad\ufe00","lbarr":"\u290c","lBarr":"\u290e","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298b","lbrksld":"\u298f","lbrkslu":"\u298d","Lcaron":"\u013d","lcaron":"\u013e","Lcedil":"\u013b","lcedil":"\u013c","lceil":"\u2308","lcub":"{","Lcy":"\u041b","lcy":"\u043b","ldca":"\u2936","ldquo":"\u201c","ldquor":"\u201e","ldrdhar":"\u2967","ldrushar":"\u294b","ldsh":"\u21b2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27e8","LeftArrowBar":"\u21e4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21d0","LeftArrowRightArrow":"\u21c6","leftarrowtail":"\u21a2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27e6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21c3","LeftFloor":"\u230a","leftharpoondown":"\u21bd","leftharpoonup":"\u21bc","leftleftarrows":"\u21c7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21d4","leftrightarrows":"\u21c6","leftrightharpoons":"\u21cb","leftrightsquigarrow":"\u21ad","LeftRightVector":"\u294e","LeftTeeArrow":"\u21a4","LeftTee":"\u22a3","LeftTeeVector":"\u295a","leftthreetimes":"\u22cb","LeftTriangleBar":"\u29cf","LeftTriangle":"\u22b2","LeftTriangleEqual":"\u22b4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21bf","LeftVectorBar":"\u2952","LeftVector":"\u21bc","lEg":"\u2a8b","leg":"\u22da","leq":"\u2264","leqq":"\u2266","leqslant":"\u2a7d","lescc":"\u2aa8","les":"\u2a7d","lesdot":"\u2a7f","lesdoto":"\u2a81","lesdotor":"\u2a83","lesg":"\u22da\ufe00","lesges":"\u2a93","lessapprox":"\u2a85","lessdot":"\u22d6","lesseqgtr":"\u22da","lesseqqgtr":"\u2a8b","LessEqualGreater":"\u22da","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2aa1","lesssim":"\u2272","LessSlantEqual":"\u2a7d","LessTilde":"\u2272","lfisht":"\u297c","lfloor":"\u230a","Lfr":"\ud835\udd0f","lfr":"\ud835\udd29","lg":"\u2276","lgE":"\u2a91","lHar":"\u2962","lhard":"\u21bd","lharu":"\u21bc","lharul":"\u296a","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21c7","ll":"\u226a","Ll":"\u22d8","llcorner":"\u231e","Lleftarrow":"\u21da","llhard":"\u296b","lltri":"\u25fa","Lmidot":"\u013f","lmidot":"\u0140","lmoustache":"\u23b0","lmoust":"\u23b0","lnap":"\u2a89","lnapprox":"\u2a89","lne":"\u2a87","lnE":"\u2268","lneq":"\u2a87","lneqq":"\u2268","lnsim":"\u22e6","loang":"\u27ec","loarr":"\u21fd","lobrk":"\u27e6","longleftarrow":"\u27f5","LongLeftArrow":"\u27f5","Longleftarrow":"\u27f8","longleftrightarrow":"\u27f7","LongLeftRightArrow":"\u27f7","Longleftrightarrow":"\u27fa","longmapsto":"\u27fc","longrightarrow":"\u27f6","LongRightArrow":"\u27f6","Longrightarrow":"\u27f9","looparrowleft":"\u21ab","looparrowright":"\u21ac","lopar":"\u2985","Lopf":"\ud835\udd43","lopf":"\ud835\udd5d","loplus":"\u2a2d","lotimes":"\u2a34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25ca","lozenge":"\u25ca","lozf":"\u29eb","lpar":"(","lparlt":"\u2993","lrarr":"\u21c6","lrcorner":"\u231f","lrhar":"\u21cb","lrhard":"\u296d","lrm":"\u200e","lrtri":"\u22bf","lsaquo":"\u2039","lscr":"\ud835\udcc1","Lscr":"\u2112","lsh":"\u21b0","Lsh":"\u21b0","lsim":"\u2272","lsime":"\u2a8d","lsimg":"\u2a8f","lsqb":"[","lsquo":"\u2018","lsquor":"\u201a","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2aa6","ltcir":"\u2a79","lt":"<","LT":"<","Lt":"\u226a","ltdot":"\u22d6","lthree":"\u22cb","ltimes":"\u22c9","ltlarr":"\u2976","ltquest":"\u2a7b","ltri":"\u25c3","ltrie":"\u22b4","ltrif":"\u25c2","ltrPar":"\u2996","lurdshar":"\u294a","luruhar":"\u2966","lvertneqq":"\u2268\ufe00","lvnE":"\u2268\ufe00","macr":"\xaf","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21a6","mapsto":"\u21a6","mapstodown":"\u21a7","mapstoleft":"\u21a4","mapstoup":"\u21a5","marker":"\u25ae","mcomma":"\u2a29","Mcy":"\u041c","mcy":"\u043c","mdash":"\u2014","mDDot":"\u223a","measuredangle":"\u2221","MediumSpace":"\u205f","Mellintrf":"\u2133","Mfr":"\ud835\udd10","mfr":"\ud835\udd2a","mho":"\u2127","micro":"\xb5","midast":"*","midcir":"\u2af0","mid":"\u2223","middot":"\xb7","minusb":"\u229f","minus":"\u2212","minusd":"\u2238","minusdu":"\u2a2a","MinusPlus":"\u2213","mlcp":"\u2adb","mldr":"\u2026","mnplus":"\u2213","models":"\u22a7","Mopf":"\ud835\udd44","mopf":"\ud835\udd5e","mp":"\u2213","mscr":"\ud835\udcc2","Mscr":"\u2133","mstpos":"\u223e","Mu":"\u039c","mu":"\u03bc","multimap":"\u22b8","mumap":"\u22b8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20d2","nap":"\u2249","napE":"\u2a70\u0338","napid":"\u224b\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266e","naturals":"\u2115","natur":"\u266e","nbsp":"\xa0","nbump":"\u224e\u0338","nbumpe":"\u224f\u0338","ncap":"\u2a43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2a6d\u0338","ncup":"\u2a42","Ncy":"\u041d","ncy":"\u043d","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21d7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200b","NegativeThickSpace":"\u200b","NegativeThinSpace":"\u200b","NegativeVeryThinSpace":"\u200b","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226b","NestedLessLess":"\u226a","NewLine":"\\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\ud835\udd11","nfr":"\ud835\udd2b","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2a7e\u0338","nges":"\u2a7e\u0338","nGg":"\u22d9\u0338","ngsim":"\u2275","nGt":"\u226b\u20d2","ngt":"\u226f","ngtr":"\u226f","nGtv":"\u226b\u0338","nharr":"\u21ae","nhArr":"\u21ce","nhpar":"\u2af2","ni":"\u220b","nis":"\u22fc","nisd":"\u22fa","niv":"\u220b","NJcy":"\u040a","njcy":"\u045a","nlarr":"\u219a","nlArr":"\u21cd","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219a","nLeftarrow":"\u21cd","nleftrightarrow":"\u21ae","nLeftrightarrow":"\u21ce","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2a7d\u0338","nles":"\u2a7d\u0338","nless":"\u226e","nLl":"\u22d8\u0338","nlsim":"\u2274","nLt":"\u226a\u20d2","nlt":"\u226e","nltri":"\u22ea","nltrie":"\u22ec","nLtv":"\u226a\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\xa0","nopf":"\ud835\udd5f","Nopf":"\u2115","Not":"\u2aec","not":"\xac","NotCongruent":"\u2262","NotCupCap":"\u226d","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226f","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226b\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2a7e\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224e\u0338","NotHumpEqual":"\u224f\u0338","notin":"\u2209","notindot":"\u22f5\u0338","notinE":"\u22f9\u0338","notinva":"\u2209","notinvb":"\u22f7","notinvc":"\u22f6","NotLeftTriangleBar":"\u29cf\u0338","NotLeftTriangle":"\u22ea","NotLeftTriangleEqual":"\u22ec","NotLess":"\u226e","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226a\u0338","NotLessSlantEqual":"\u2a7d\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2aa2\u0338","NotNestedLessLess":"\u2aa1\u0338","notni":"\u220c","notniva":"\u220c","notnivb":"\u22fe","notnivc":"\u22fd","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2aaf\u0338","NotPrecedesSlantEqual":"\u22e0","NotReverseElement":"\u220c","NotRightTriangleBar":"\u29d0\u0338","NotRightTriangle":"\u22eb","NotRightTriangleEqual":"\u22ed","NotSquareSubset":"\u228f\u0338","NotSquareSubsetEqual":"\u22e2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22e3","NotSubset":"\u2282\u20d2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2ab0\u0338","NotSucceedsSlantEqual":"\u22e1","NotSucceedsTilde":"\u227f\u0338","NotSuperset":"\u2283\u20d2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2afd\u20e5","npart":"\u2202\u0338","npolint":"\u2a14","npr":"\u2280","nprcue":"\u22e0","nprec":"\u2280","npreceq":"\u2aaf\u0338","npre":"\u2aaf\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219b","nrArr":"\u21cf","nrarrw":"\u219d\u0338","nrightarrow":"\u219b","nRightarrow":"\u21cf","nrtri":"\u22eb","nrtrie":"\u22ed","nsc":"\u2281","nsccue":"\u22e1","nsce":"\u2ab0\u0338","Nscr":"\ud835\udca9","nscr":"\ud835\udcc3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22e2","nsqsupe":"\u22e3","nsub":"\u2284","nsubE":"\u2ac5\u0338","nsube":"\u2288","nsubset":"\u2282\u20d2","nsubseteq":"\u2288","nsubseteqq":"\u2ac5\u0338","nsucc":"\u2281","nsucceq":"\u2ab0\u0338","nsup":"\u2285","nsupE":"\u2ac6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20d2","nsupseteq":"\u2289","nsupseteqq":"\u2ac6\u0338","ntgl":"\u2279","Ntilde":"\xd1","ntilde":"\xf1","ntlg":"\u2278","ntriangleleft":"\u22ea","ntrianglelefteq":"\u22ec","ntriangleright":"\u22eb","ntrianglerighteq":"\u22ed","Nu":"\u039d","nu":"\u03bd","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224d\u20d2","nvdash":"\u22ac","nvDash":"\u22ad","nVdash":"\u22ae","nVDash":"\u22af","nvge":"\u2265\u20d2","nvgt":">\u20d2","nvHarr":"\u2904","nvinfin":"\u29de","nvlArr":"\u2902","nvle":"\u2264\u20d2","nvlt":"<\u20d2","nvltrie":"\u22b4\u20d2","nvrArr":"\u2903","nvrtrie":"\u22b5\u20d2","nvsim":"\u223c\u20d2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21d6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\xd3","oacute":"\xf3","oast":"\u229b","Ocirc":"\xd4","ocirc":"\xf4","ocir":"\u229a","Ocy":"\u041e","ocy":"\u043e","odash":"\u229d","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2a38","odot":"\u2299","odsold":"\u29bc","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29bf","Ofr":"\ud835\udd12","ofr":"\ud835\udd2c","ogon":"\u02db","Ograve":"\xd2","ograve":"\xf2","ogt":"\u29c1","ohbar":"\u29b5","ohm":"\u03a9","oint":"\u222e","olarr":"\u21ba","olcir":"\u29be","olcross":"\u29bb","oline":"\u203e","olt":"\u29c0","Omacr":"\u014c","omacr":"\u014d","Omega":"\u03a9","omega":"\u03c9","Omicron":"\u039f","omicron":"\u03bf","omid":"\u29b6","ominus":"\u2296","Oopf":"\ud835\udd46","oopf":"\ud835\udd60","opar":"\u29b7","OpenCurlyDoubleQuote":"\u201c","OpenCurlyQuote":"\u2018","operp":"\u29b9","oplus":"\u2295","orarr":"\u21bb","Or":"\u2a54","or":"\u2228","ord":"\u2a5d","order":"\u2134","orderof":"\u2134","ordf":"\xaa","ordm":"\xba","origof":"\u22b6","oror":"\u2a56","orslope":"\u2a57","orv":"\u2a5b","oS":"\u24c8","Oscr":"\ud835\udcaa","oscr":"\u2134","Oslash":"\xd8","oslash":"\xf8","osol":"\u2298","Otilde":"\xd5","otilde":"\xf5","otimesas":"\u2a36","Otimes":"\u2a37","otimes":"\u2297","Ouml":"\xd6","ouml":"\xf6","ovbar":"\u233d","OverBar":"\u203e","OverBrace":"\u23de","OverBracket":"\u23b4","OverParenthesis":"\u23dc","para":"\xb6","parallel":"\u2225","par":"\u2225","parsim":"\u2af3","parsl":"\u2afd","part":"\u2202","PartialD":"\u2202","Pcy":"\u041f","pcy":"\u043f","percnt":"%","period":".","permil":"\u2030","perp":"\u22a5","pertenk":"\u2031","Pfr":"\ud835\udd13","pfr":"\ud835\udd2d","Phi":"\u03a6","phi":"\u03c6","phiv":"\u03d5","phmmat":"\u2133","phone":"\u260e","Pi":"\u03a0","pi":"\u03c0","pitchfork":"\u22d4","piv":"\u03d6","planck":"\u210f","planckh":"\u210e","plankv":"\u210f","plusacir":"\u2a23","plusb":"\u229e","pluscir":"\u2a22","plus":"+","plusdo":"\u2214","plusdu":"\u2a25","pluse":"\u2a72","PlusMinus":"\xb1","plusmn":"\xb1","plussim":"\u2a26","plustwo":"\u2a27","pm":"\xb1","Poincareplane":"\u210c","pointint":"\u2a15","popf":"\ud835\udd61","Popf":"\u2119","pound":"\xa3","prap":"\u2ab7","Pr":"\u2abb","pr":"\u227a","prcue":"\u227c","precapprox":"\u2ab7","prec":"\u227a","preccurlyeq":"\u227c","Precedes":"\u227a","PrecedesEqual":"\u2aaf","PrecedesSlantEqual":"\u227c","PrecedesTilde":"\u227e","preceq":"\u2aaf","precnapprox":"\u2ab9","precneqq":"\u2ab5","precnsim":"\u22e8","pre":"\u2aaf","prE":"\u2ab3","precsim":"\u227e","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2ab9","prnE":"\u2ab5","prnsim":"\u22e8","prod":"\u220f","Product":"\u220f","profalar":"\u232e","profline":"\u2312","profsurf":"\u2313","prop":"\u221d","Proportional":"\u221d","Proportion":"\u2237","propto":"\u221d","prsim":"\u227e","prurel":"\u22b0","Pscr":"\ud835\udcab","pscr":"\ud835\udcc5","Psi":"\u03a8","psi":"\u03c8","puncsp":"\u2008","Qfr":"\ud835\udd14","qfr":"\ud835\udd2e","qint":"\u2a0c","qopf":"\ud835\udd62","Qopf":"\u211a","qprime":"\u2057","Qscr":"\ud835\udcac","qscr":"\ud835\udcc6","quaternions":"\u210d","quatint":"\u2a16","quest":"?","questeq":"\u225f","quot":"\\"","QUOT":"\\"","rAarr":"\u21db","race":"\u223d\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221a","raemptyv":"\u29b3","rang":"\u27e9","Rang":"\u27eb","rangd":"\u2992","range":"\u29a5","rangle":"\u27e9","raquo":"\xbb","rarrap":"\u2975","rarrb":"\u21e5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21a0","rArr":"\u21d2","rarrfs":"\u291e","rarrhk":"\u21aa","rarrlp":"\u21ac","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21a3","rarrw":"\u219d","ratail":"\u291a","rAtail":"\u291c","ratio":"\u2236","rationals":"\u211a","rbarr":"\u290d","rBarr":"\u290f","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298c","rbrksld":"\u298e","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201d","rdquor":"\u201d","rdsh":"\u21b3","real":"\u211c","realine":"\u211b","realpart":"\u211c","reals":"\u211d","Re":"\u211c","rect":"\u25ad","reg":"\xae","REG":"\xae","ReverseElement":"\u220b","ReverseEquilibrium":"\u21cb","ReverseUpEquilibrium":"\u296f","rfisht":"\u297d","rfloor":"\u230b","rfr":"\ud835\udd2f","Rfr":"\u211c","rHar":"\u2964","rhard":"\u21c1","rharu":"\u21c0","rharul":"\u296c","Rho":"\u03a1","rho":"\u03c1","rhov":"\u03f1","RightAngleBracket":"\u27e9","RightArrowBar":"\u21e5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21d2","RightArrowLeftArrow":"\u21c4","rightarrowtail":"\u21a3","RightCeiling":"\u2309","RightDoubleBracket":"\u27e7","RightDownTeeVector":"\u295d","RightDownVectorBar":"\u2955","RightDownVector":"\u21c2","RightFloor":"\u230b","rightharpoondown":"\u21c1","rightharpoonup":"\u21c0","rightleftarrows":"\u21c4","rightleftharpoons":"\u21cc","rightrightarrows":"\u21c9","rightsquigarrow":"\u219d","RightTeeArrow":"\u21a6","RightTee":"\u22a2","RightTeeVector":"\u295b","rightthreetimes":"\u22cc","RightTriangleBar":"\u29d0","RightTriangle":"\u22b3","RightTriangleEqual":"\u22b5","RightUpDownVector":"\u294f","RightUpTeeVector":"\u295c","RightUpVectorBar":"\u2954","RightUpVector":"\u21be","RightVectorBar":"\u2953","RightVector":"\u21c0","ring":"\u02da","risingdotseq":"\u2253","rlarr":"\u21c4","rlhar":"\u21cc","rlm":"\u200f","rmoustache":"\u23b1","rmoust":"\u23b1","rnmid":"\u2aee","roang":"\u27ed","roarr":"\u21fe","robrk":"\u27e7","ropar":"\u2986","ropf":"\ud835\udd63","Ropf":"\u211d","roplus":"\u2a2e","rotimes":"\u2a35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2a12","rrarr":"\u21c9","Rrightarrow":"\u21db","rsaquo":"\u203a","rscr":"\ud835\udcc7","Rscr":"\u211b","rsh":"\u21b1","Rsh":"\u21b1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22cc","rtimes":"\u22ca","rtri":"\u25b9","rtrie":"\u22b5","rtrif":"\u25b8","rtriltri":"\u29ce","RuleDelayed":"\u29f4","ruluhar":"\u2968","rx":"\u211e","Sacute":"\u015a","sacute":"\u015b","sbquo":"\u201a","scap":"\u2ab8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2abc","sc":"\u227b","sccue":"\u227d","sce":"\u2ab0","scE":"\u2ab4","Scedil":"\u015e","scedil":"\u015f","Scirc":"\u015c","scirc":"\u015d","scnap":"\u2aba","scnE":"\u2ab6","scnsim":"\u22e9","scpolint":"\u2a13","scsim":"\u227f","Scy":"\u0421","scy":"\u0441","sdotb":"\u22a1","sdot":"\u22c5","sdote":"\u2a66","searhk":"\u2925","searr":"\u2198","seArr":"\u21d8","searrow":"\u2198","sect":"\xa7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\ud835\udd16","sfr":"\ud835\udd30","sfrown":"\u2322","sharp":"\u266f","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\xad","Sigma":"\u03a3","sigma":"\u03c3","sigmaf":"\u03c2","sigmav":"\u03c2","sim":"\u223c","simdot":"\u2a6a","sime":"\u2243","simeq":"\u2243","simg":"\u2a9e","simgE":"\u2aa0","siml":"\u2a9d","simlE":"\u2a9f","simne":"\u2246","simplus":"\u2a24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2a33","smeparsl":"\u29e4","smid":"\u2223","smile":"\u2323","smt":"\u2aaa","smte":"\u2aac","smtes":"\u2aac\ufe00","SOFTcy":"\u042c","softcy":"\u044c","solbar":"\u233f","solb":"\u29c4","sol":"/","Sopf":"\ud835\udd4a","sopf":"\ud835\udd64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\ufe00","sqcup":"\u2294","sqcups":"\u2294\ufe00","Sqrt":"\u221a","sqsub":"\u228f","sqsube":"\u2291","sqsubset":"\u228f","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25a1","Square":"\u25a1","SquareIntersection":"\u2293","SquareSubset":"\u228f","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25aa","squ":"\u25a1","squf":"\u25aa","srarr":"\u2192","Sscr":"\ud835\udcae","sscr":"\ud835\udcc8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22c6","Star":"\u22c6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03f5","straightphi":"\u03d5","strns":"\xaf","sub":"\u2282","Sub":"\u22d0","subdot":"\u2abd","subE":"\u2ac5","sube":"\u2286","subedot":"\u2ac3","submult":"\u2ac1","subnE":"\u2acb","subne":"\u228a","subplus":"\u2abf","subrarr":"\u2979","subset":"\u2282","Subset":"\u22d0","subseteq":"\u2286","subseteqq":"\u2ac5","SubsetEqual":"\u2286","subsetneq":"\u228a","subsetneqq":"\u2acb","subsim":"\u2ac7","subsub":"\u2ad5","subsup":"\u2ad3","succapprox":"\u2ab8","succ":"\u227b","succcurlyeq":"\u227d","Succeeds":"\u227b","SucceedsEqual":"\u2ab0","SucceedsSlantEqual":"\u227d","SucceedsTilde":"\u227f","succeq":"\u2ab0","succnapprox":"\u2aba","succneqq":"\u2ab6","succnsim":"\u22e9","succsim":"\u227f","SuchThat":"\u220b","sum":"\u2211","Sum":"\u2211","sung":"\u266a","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","sup":"\u2283","Sup":"\u22d1","supdot":"\u2abe","supdsub":"\u2ad8","supE":"\u2ac6","supe":"\u2287","supedot":"\u2ac4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27c9","suphsub":"\u2ad7","suplarr":"\u297b","supmult":"\u2ac2","supnE":"\u2acc","supne":"\u228b","supplus":"\u2ac0","supset":"\u2283","Supset":"\u22d1","supseteq":"\u2287","supseteqq":"\u2ac6","supsetneq":"\u228b","supsetneqq":"\u2acc","supsim":"\u2ac8","supsub":"\u2ad4","supsup":"\u2ad6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21d9","swarrow":"\u2199","swnwar":"\u292a","szlig":"\xdf","Tab":"\\t","target":"\u2316","Tau":"\u03a4","tau":"\u03c4","tbrk":"\u23b4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20db","telrec":"\u2315","Tfr":"\ud835\udd17","tfr":"\ud835\udd31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03b8","thetasym":"\u03d1","thetav":"\u03d1","thickapprox":"\u2248","thicksim":"\u223c","ThickSpace":"\u205f\u200a","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223c","THORN":"\xde","thorn":"\xfe","tilde":"\u02dc","Tilde":"\u223c","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2a31","timesb":"\u22a0","times":"\xd7","timesd":"\u2a30","tint":"\u222d","toea":"\u2928","topbot":"\u2336","topcir":"\u2af1","top":"\u22a4","Topf":"\ud835\udd4b","topf":"\ud835\udd65","topfork":"\u2ada","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25b5","triangledown":"\u25bf","triangleleft":"\u25c3","trianglelefteq":"\u22b4","triangleq":"\u225c","triangleright":"\u25b9","trianglerighteq":"\u22b5","tridot":"\u25ec","trie":"\u225c","triminus":"\u2a3a","TripleDot":"\u20db","triplus":"\u2a39","trisb":"\u29cd","tritime":"\u2a3b","trpezium":"\u23e2","Tscr":"\ud835\udcaf","tscr":"\ud835\udcc9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040b","tshcy":"\u045b","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226c","twoheadleftarrow":"\u219e","twoheadrightarrow":"\u21a0","Uacute":"\xda","uacute":"\xfa","uarr":"\u2191","Uarr":"\u219f","uArr":"\u21d1","Uarrocir":"\u2949","Ubrcy":"\u040e","ubrcy":"\u045e","Ubreve":"\u016c","ubreve":"\u016d","Ucirc":"\xdb","ucirc":"\xfb","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21c5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296e","ufisht":"\u297e","Ufr":"\ud835\udd18","ufr":"\ud835\udd32","Ugrave":"\xd9","ugrave":"\xf9","uHar":"\u2963","uharl":"\u21bf","uharr":"\u21be","uhblk":"\u2580","ulcorn":"\u231c","ulcorner":"\u231c","ulcrop":"\u230f","ultri":"\u25f8","Umacr":"\u016a","umacr":"\u016b","uml":"\xa8","UnderBar":"_","UnderBrace":"\u23df","UnderBracket":"\u23b5","UnderParenthesis":"\u23dd","Union":"\u22c3","UnionPlus":"\u228e","Uogon":"\u0172","uogon":"\u0173","Uopf":"\ud835\udd4c","uopf":"\ud835\udd66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21d1","UpArrowDownArrow":"\u21c5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21d5","UpEquilibrium":"\u296e","upharpoonleft":"\u21bf","upharpoonright":"\u21be","uplus":"\u228e","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03c5","Upsi":"\u03d2","upsih":"\u03d2","Upsilon":"\u03a5","upsilon":"\u03c5","UpTeeArrow":"\u21a5","UpTee":"\u22a5","upuparrows":"\u21c8","urcorn":"\u231d","urcorner":"\u231d","urcrop":"\u230e","Uring":"\u016e","uring":"\u016f","urtri":"\u25f9","Uscr":"\ud835\udcb0","uscr":"\ud835\udcca","utdot":"\u22f0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25b5","utrif":"\u25b4","uuarr":"\u21c8","Uuml":"\xdc","uuml":"\xfc","uwangle":"\u29a7","vangrt":"\u299c","varepsilon":"\u03f5","varkappa":"\u03f0","varnothing":"\u2205","varphi":"\u03d5","varpi":"\u03d6","varpropto":"\u221d","varr":"\u2195","vArr":"\u21d5","varrho":"\u03f1","varsigma":"\u03c2","varsubsetneq":"\u228a\ufe00","varsubsetneqq":"\u2acb\ufe00","varsupsetneq":"\u228b\ufe00","varsupsetneqq":"\u2acc\ufe00","vartheta":"\u03d1","vartriangleleft":"\u22b2","vartriangleright":"\u22b3","vBar":"\u2ae8","Vbar":"\u2aeb","vBarv":"\u2ae9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22a2","vDash":"\u22a8","Vdash":"\u22a9","VDash":"\u22ab","Vdashl":"\u2ae6","veebar":"\u22bb","vee":"\u2228","Vee":"\u22c1","veeeq":"\u225a","vellip":"\u22ee","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200a","Vfr":"\ud835\udd19","vfr":"\ud835\udd33","vltri":"\u22b2","vnsub":"\u2282\u20d2","vnsup":"\u2283\u20d2","Vopf":"\ud835\udd4d","vopf":"\ud835\udd67","vprop":"\u221d","vrtri":"\u22b3","Vscr":"\ud835\udcb1","vscr":"\ud835\udccb","vsubnE":"\u2acb\ufe00","vsubne":"\u228a\ufe00","vsupnE":"\u2acc\ufe00","vsupne":"\u228b\ufe00","Vvdash":"\u22aa","vzigzag":"\u299a","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2a5f","wedge":"\u2227","Wedge":"\u22c0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\ud835\udd1a","wfr":"\ud835\udd34","Wopf":"\ud835\udd4e","wopf":"\ud835\udd68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\ud835\udcb2","wscr":"\ud835\udccc","xcap":"\u22c2","xcirc":"\u25ef","xcup":"\u22c3","xdtri":"\u25bd","Xfr":"\ud835\udd1b","xfr":"\ud835\udd35","xharr":"\u27f7","xhArr":"\u27fa","Xi":"\u039e","xi":"\u03be","xlarr":"\u27f5","xlArr":"\u27f8","xmap":"\u27fc","xnis":"\u22fb","xodot":"\u2a00","Xopf":"\ud835\udd4f","xopf":"\ud835\udd69","xoplus":"\u2a01","xotime":"\u2a02","xrarr":"\u27f6","xrArr":"\u27f9","Xscr":"\ud835\udcb3","xscr":"\ud835\udccd","xsqcup":"\u2a06","xuplus":"\u2a04","xutri":"\u25b3","xvee":"\u22c1","xwedge":"\u22c0","Yacute":"\xdd","yacute":"\xfd","YAcy":"\u042f","yacy":"\u044f","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042b","ycy":"\u044b","yen":"\xa5","Yfr":"\ud835\udd1c","yfr":"\ud835\udd36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\ud835\udd50","yopf":"\ud835\udd6a","Yscr":"\ud835\udcb4","yscr":"\ud835\udcce","YUcy":"\u042e","yucy":"\u044e","yuml":"\xff","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017a","Zcaron":"\u017d","zcaron":"\u017e","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017b","zdot":"\u017c","zeetrf":"\u2128","ZeroWidthSpace":"\u200b","Zeta":"\u0396","zeta":"\u03b6","zfr":"\ud835\udd37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21dd","zopf":"\ud835\udd6b","Zopf":"\u2124","Zscr":"\ud835\udcb5","zscr":"\ud835\udccf","zwj":"\u200d","zwnj":"\u200c"}')
        }
    }
]);
//# debugId=fc015b77-ff78-5d5d-b926-2b3d5a693d96