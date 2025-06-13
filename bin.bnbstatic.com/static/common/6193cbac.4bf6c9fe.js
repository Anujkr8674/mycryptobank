(self.webpackChunkresearch_new_ui = self.webpackChunkresearch_new_ui || []).push([
    [331], {
        KXiG: (e, r, t) => {
            "use strict";
            t.d(r, {
                mL: () => b,
                Dx: () => g,
                AH: () => y,
                i7: () => S,
                ic: () => h
            });
            var o = t("XDNX");
            var n = t("DTvD");
            var i = function() {
                    function e(e) {
                        this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
                    }
                    var r = e.prototype;
                    return r.insert = function(e) {
                        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
                            var r, t = function(e) {
                                var r = document.createElement("style");
                                return r.setAttribute("data-emotion", e.key), void 0 !== e.nonce && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r
                            }(this);
                            r = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(t, r), this.tags.push(t)
                        }
                        var o = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var r = 0; r < document.styleSheets.length; r++)
                                    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r]
                            }(o);
                            try {
                                var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                                n.insertRule(e, i ? 0 : n.cssRules.length)
                            } catch (a) {
                                0
                            }
                        } else o.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, r.flush = function() {
                        this.tags.forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        })), this.tags = [], this.ctr = 0
                    }, e
                }(),
                a = t("AbK1"),
                s = "/*|*/";

            function l(e) {
                e && c.current.insert(e + "}")
            }
            var c = {
                    current: null
                },
                d = function(e, r, t, o, n, i, a, d, p, u) {
                    switch (e) {
                        case 1:
                            switch (r.charCodeAt(0)) {
                                case 64:
                                    return c.current.insert(r + ";"), "";
                                case 108:
                                    if (98 === r.charCodeAt(2)) return ""
                            }
                            break;
                        case 2:
                            if (0 === d) return r + s;
                            break;
                        case 3:
                            switch (d) {
                                case 102:
                                case 112:
                                    return c.current.insert(t[0] + r), "";
                                default:
                                    return r + (0 === u ? s : "")
                            }
                        case -2:
                            r.split("/*|*/}").forEach(l)
                    }
                };
            const p = function(e) {
                void 0 === e && (e = {});
                var r, t = e.key || "css";
                void 0 !== e.prefix && (r = {
                    prefix: e.prefix
                });
                var o = new a.A(r);
                var n, s = {};
                n = e.container || document.head;
                var l, p = document.querySelectorAll("style[data-emotion-" + t + "]");
                Array.prototype.forEach.call(p, (function(e) {
                    e.getAttribute("data-emotion-" + t).split(" ").forEach((function(e) {
                        s[e] = !0
                    })), e.parentNode !== n && n.appendChild(e)
                })), o.use(e.stylisPlugins)(d), l = function(e, r, t, n) {
                    var i = r.name;
                    c.current = t, o(e, r.styles), n && (u.inserted[i] = !0)
                };
                var u = {
                    key: t,
                    sheet: new i({
                        key: t,
                        container: n,
                        nonce: e.nonce,
                        speedy: e.speedy
                    }),
                    nonce: e.nonce,
                    inserted: s,
                    registered: {},
                    insert: l
                };
                return u
            };
            var u = t("xOtz"),
                f = (Object.prototype.hasOwnProperty, (0, n.createContext)("undefined" !== typeof HTMLElement ? p() : null)),
                g = (0, n.createContext)({}),
                h = (f.Provider, function(e) {
                    var r = function(r, t) {
                        return (0, n.createElement)(f.Consumer, null, (function(o) {
                            return e(r, o, t)
                        }))
                    };
                    return (0, n.forwardRef)(r)
                });
            var m = t("3xeB");
            const y = function() {
                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return (0, u.J)(r)
            };
            var b = h((function(e, r) {
                    var t = e.styles;
                    if ("function" === typeof t) return (0, n.createElement)(g.Consumer, null, (function(e) {
                        var o = (0, u.J)([t(e)]);
                        return (0, n.createElement)(v, {
                            serialized: o,
                            cache: r
                        })
                    }));
                    var o = (0, u.J)([t]);
                    return (0, n.createElement)(v, {
                        serialized: o,
                        cache: r
                    })
                })),
                v = function(e) {
                    var r, t;

                    function n(r, t, o) {
                        return e.call(this, r, t, o) || this
                    }
                    t = e, (r = n).prototype = Object.create(t.prototype), r.prototype.constructor = r, (0, o.A)(r, t);
                    var a = n.prototype;
                    return a.componentDidMount = function() {
                        this.sheet = new i({
                            key: this.props.cache.key + "-global",
                            nonce: this.props.cache.sheet.nonce,
                            container: this.props.cache.sheet.container
                        });
                        var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
                        null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
                    }, a.componentDidUpdate = function(e) {
                        e.serialized.name !== this.props.serialized.name && this.insertStyles()
                    }, a.insertStyles = function() {
                        if (void 0 !== this.props.serialized.next && (0, m.s)(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                            var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                            this.sheet.before = e, this.sheet.flush()
                        }
                        this.props.cache.insert("", this.props.serialized, this.sheet, !1)
                    }, a.componentWillUnmount = function() {
                        this.sheet.flush()
                    }, a.render = function() {
                        return null
                    }, n
                }(n.Component),
                S = function() {
                    var e = y.apply(void 0, arguments),
                        r = "animation-" + e.name;
                    return {
                        name: r,
                        styles: "@keyframes " + r + "{" + e.styles + "}",
                        anim: 1,
                        toString: function() {
                            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                        }
                    }
                },
                x = function e(r) {
                    for (var t = r.length, o = 0, n = ""; o < t; o++) {
                        var i = r[o];
                        if (null != i) {
                            var a = void 0;
                            switch (typeof i) {
                                case "boolean":
                                    break;
                                case "object":
                                    if (Array.isArray(i)) a = e(i);
                                    else
                                        for (var s in a = "", i) i[s] && s && (a && (a += " "), a += s);
                                    break;
                                default:
                                    a = i
                            }
                            a && (n && (n += " "), n += a)
                        }
                    }
                    return n
                };

            function w(e, r, t) {
                var o = [],
                    n = (0, m.R)(e, o, t);
                return o.length < 2 ? t : n + r(o)
            }
            h((function(e, r) {
                return (0, n.createElement)(g.Consumer, null, (function(t) {
                    var o = function() {
                            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                            var n = (0, u.J)(t, r.registered);
                            return (0, m.s)(r, n, !1), r.key + "-" + n.name
                        },
                        n = {
                            css: o,
                            cx: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return w(r.registered, o, x(t))
                            },
                            theme: t
                        },
                        i = e.children(n);
                    return !0, i
                }))
            }))
        },
        DY47: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => i
            });
            var o = t("jjD+"),
                n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const i = (0, o.A)((function(e) {
                return n.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }))
        },
        "jjD+": (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => o
            });
            const o = function(e) {
                var r = {};
                return function(t) {
                    return void 0 === r[t] && (r[t] = e(t)), r[t]
                }
            }
        },
        xOtz: (e, r, t) => {
            "use strict";
            t.d(r, {
                J: () => h
            });
            const o = function(e) {
                for (var r, t = 0, o = 0, n = e.length; n >= 4; ++o, n -= 4) r = 1540483477 * (65535 & (r = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24)) + (59797 * (r >>> 16) << 16), t = 1540483477 * (65535 & (r ^= r >>> 24)) + (59797 * (r >>> 16) << 16) ^ 1540483477 * (65535 & t) + (59797 * (t >>> 16) << 16);
                switch (n) {
                    case 3:
                        t ^= (255 & e.charCodeAt(o + 2)) << 16;
                    case 2:
                        t ^= (255 & e.charCodeAt(o + 1)) << 8;
                    case 1:
                        t = 1540483477 * (65535 & (t ^= 255 & e.charCodeAt(o))) + (59797 * (t >>> 16) << 16)
                }
                return (((t = 1540483477 * (65535 & (t ^= t >>> 13)) + (59797 * (t >>> 16) << 16)) ^ t >>> 15) >>> 0).toString(36)
            };
            var n = t("T4+q"),
                i = t("jjD+"),
                a = /[A-Z]|^ms/g,
                s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                l = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                c = function(e) {
                    return null != e && "boolean" !== typeof e
                },
                d = (0, i.A)((function(e) {
                    return l(e) ? e : e.replace(a, "-$&").toLowerCase()
                })),
                p = function(e, r) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" === typeof r) return r.replace(s, (function(e, r, t) {
                                return f = {
                                    name: r,
                                    styles: t,
                                    next: f
                                }, r
                            }))
                    }
                    return 1 === n.A[e] || l(e) || "number" !== typeof r || 0 === r ? r : r + "px"
                };

            function u(e, r, t, o) {
                if (null == t) return "";
                if (void 0 !== t.__emotion_styles) return t;
                switch (typeof t) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === t.anim) return f = {
                            name: t.name,
                            styles: t.styles,
                            next: f
                        }, t.name;
                        if (void 0 !== t.styles) {
                            var n = t.next;
                            if (void 0 !== n)
                                for (; void 0 !== n;) f = {
                                    name: n.name,
                                    styles: n.styles,
                                    next: f
                                }, n = n.next;
                            return t.styles + ";"
                        }
                        return function(e, r, t) {
                            var o = "";
                            if (Array.isArray(t))
                                for (var n = 0; n < t.length; n++) o += u(e, r, t[n], !1);
                            else
                                for (var i in t) {
                                    var a = t[i];
                                    if ("object" !== typeof a) null != r && void 0 !== r[a] ? o += i + "{" + r[a] + "}" : c(a) && (o += d(i) + ":" + p(i, a) + ";");
                                    else if (!Array.isArray(a) || "string" !== typeof a[0] || null != r && void 0 !== r[a[0]]) {
                                        var s = u(e, r, a, !1);
                                        switch (i) {
                                            case "animation":
                                            case "animationName":
                                                o += d(i) + ":" + s + ";";
                                                break;
                                            default:
                                                o += i + "{" + s + "}"
                                        }
                                    } else
                                        for (var l = 0; l < a.length; l++) c(a[l]) && (o += d(i) + ":" + p(i, a[l]) + ";")
                                }
                            return o
                        }(e, r, t);
                    case "function":
                        if (void 0 !== e) {
                            var i = f,
                                a = t(e);
                            return f = i, u(e, r, a, o)
                        }
                }
                if (null == r) return t;
                var s = r[t];
                return void 0 === s || o ? t : s
            }
            var f, g = /label:\s*([^\s;\n{]+)\s*;/g;
            var h = function(e, r, t) {
                if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                var n = !0,
                    i = "";
                f = void 0;
                var a = e[0];
                null == a || void 0 === a.raw ? (n = !1, i += u(t, r, a, !1)) : i += a[0];
                for (var s = 1; s < e.length; s++) i += u(t, r, e[s], 46 === i.charCodeAt(i.length - 1)), n && (i += a[s]);
                g.lastIndex = 0;
                for (var l, c = ""; null !== (l = g.exec(i));) c += "-" + l[1];
                return {
                    name: o(i) + c,
                    styles: i,
                    next: f
                }
            }
        },
        "Y7o/": (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                default: () => m
            });
            var o = t("OHGK"),
                n = t("DTvD"),
                i = t("DY47"),
                a = t("KXiG"),
                s = t("3xeB"),
                l = t("xOtz"),
                c = i.A,
                d = function(e) {
                    return "theme" !== e && "innerRef" !== e
                },
                p = function(e) {
                    return "string" === typeof e && e.charCodeAt(0) > 96 ? c : d
                };

            function u(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? u(t, !0).forEach((function(r) {
                        (0, o.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(t).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            const g = function e(r, t) {
                var o, i, c;
                void 0 !== t && (o = t.label, c = t.target, i = r.__emotion_forwardProp && t.shouldForwardProp ? function(e) {
                    return r.__emotion_forwardProp(e) && t.shouldForwardProp(e)
                } : t.shouldForwardProp);
                var d = r.__emotion_real === r,
                    u = d && r.__emotion_base || r;
                "function" !== typeof i && d && (i = r.__emotion_forwardProp);
                var g = i || p(u),
                    h = !g("as");
                return function() {
                    var m = arguments,
                        y = d && void 0 !== r.__emotion_styles ? r.__emotion_styles.slice(0) : [];
                    if (void 0 !== o && y.push("label:" + o + ";"), null == m[0] || void 0 === m[0].raw) y.push.apply(y, m);
                    else {
                        0,
                        y.push(m[0][0]);
                        for (var b = m.length, v = 1; v < b; v++) y.push(m[v], m[0][v])
                    }
                    var S = (0, a.ic)((function(e, r, t) {
                        return (0, n.createElement)(a.Dx.Consumer, null, (function(o) {
                            var a = h && e.as || u,
                                d = "",
                                f = [],
                                m = e;
                            if (null == e.theme) {
                                for (var b in m = {}, e) m[b] = e[b];
                                m.theme = o
                            }
                            "string" === typeof e.className ? d = (0, s.R)(r.registered, f, e.className) : null != e.className && (d = e.className + " ");
                            var v = (0, l.J)(y.concat(f), r.registered, m);
                            (0, s.s)(r, v, "string" === typeof a);
                            d += r.key + "-" + v.name, void 0 !== c && (d += " " + c);
                            var S = h && void 0 === i ? p(a) : g,
                                x = {};
                            for (var w in e) h && "as" === w || S(w) && (x[w] = e[w]);
                            return x.className = d, x.ref = t || e.innerRef, (0, n.createElement)(a, x)
                        }))
                    }));
                    return S.displayName = void 0 !== o ? o : "Styled(" + ("string" === typeof u ? u : u.displayName || u.name || "Component") + ")", S.defaultProps = r.defaultProps, S.__emotion_real = S, S.__emotion_base = u, S.__emotion_styles = y, S.__emotion_forwardProp = i, Object.defineProperty(S, "toString", {
                        value: function() {
                            return "." + c
                        }
                    }), S.withComponent = function(r, o) {
                        return e(r, void 0 !== o ? f({}, t || {}, {}, o) : t).apply(void 0, y)
                    }, S
                }
            };
            var h = g.bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
                h[e] = h(e)
            }));
            const m = h
        },
        "3xeB": (e, r, t) => {
            "use strict";
            t.d(r, {
                R: () => o,
                s: () => n
            });

            function o(e, r, t) {
                var o = "";
                return t.split(" ").forEach((function(t) {
                    void 0 !== e[t] ? r.push(e[t]) : o += t + " "
                })), o
            }
            var n = function(e, r, t) {
                var o = e.key + "-" + r.name;
                if (!1 === t && void 0 === e.registered[o] && (e.registered[o] = r.styles), void 0 === e.inserted[r.name]) {
                    var n = r;
                    do {
                        e.insert("." + o, n, e.sheet, !0);
                        n = n.next
                    } while (void 0 !== n)
                }
            }
        },
        OBVT: (e, r, t) => {
            "use strict";

            function o() {
                return o = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                    }
                    return e
                }, o.apply(this, arguments)
            }
            t.r(r), t.d(r, {
                css: () => f,
                default: () => g,
                get: () => n,
                responsive: () => u
            });
            var n = function(e, r, t, o, n) {
                    for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++) e = e ? e[r[o]] : n;
                    return e === n ? t : e
                },
                i = [40, 52, 64].map((function(e) {
                    return e + "em"
                })),
                a = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                s = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY"
                },
                l = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"]
                },
                c = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors"
                },
                d = function(e, r) {
                    if ("number" !== typeof r || r >= 0) return n(e, r, r);
                    var t = Math.abs(r),
                        o = n(e, t, t);
                    return "string" === typeof o ? "-" + o : -1 * o
                },
                p = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((function(e, r) {
                    var t;
                    return o({}, e, ((t = {})[r] = d, t))
                }), {}),
                u = function(e) {
                    return function(r) {
                        var t = {},
                            o = n(r, "breakpoints", i),
                            a = [null].concat(o.map((function(e) {
                                return "@media screen and (min-width: " + e + ")"
                            })));
                        for (var s in e) {
                            var l = "function" === typeof e[s] ? e[s](r) : e[s];
                            if (null != l)
                                if (Array.isArray(l))
                                    for (var c = 0; c < l.slice(0, a.length).length; c++) {
                                        var d = a[c];
                                        d ? (t[d] = t[d] || {}, null != l[c] && (t[d][s] = l[c])) : t[s] = l[c]
                                    } else t[s] = l
                        }
                        return t
                    }
                },
                f = function e(r) {
                    return function(t) {
                        void 0 === t && (t = {});
                        var i = o({}, a, {}, t.theme || t),
                            d = {},
                            f = "function" === typeof r ? r(i) : r,
                            g = u(f)(i);
                        for (var h in g) {
                            var m = g[h],
                                y = "function" === typeof m ? m(i) : m;
                            if ("variant" !== h)
                                if (y && "object" === typeof y) d[h] = e(y)(i);
                                else {
                                    var b = n(s, h, h),
                                        v = n(c, b),
                                        S = n(i, v, n(i, b, {})),
                                        x = n(p, b, n)(S, y, y);
                                    if (l[b])
                                        for (var w = l[b], k = 0; k < w.length; k++) d[w[k]] = x;
                                    else d[b] = x
                                }
                            else d = o({}, d, {}, e(n(i, y))(i))
                        }
                        return d
                    }
                };
            const g = f
        },
        "9Bf3": (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                createShouldForwardProp: () => s,
                default: () => l,
                props: () => a
            });
            const o = function(e) {
                var r = Object.create(null);
                return function(t) {
                    return void 0 === r[t] && (r[t] = e(t)), r[t]
                }
            };
            var n = t("DY47"),
                i = t("8nle"),
                a = (0, i.compose)(i.space, i.typography, i.color, i.layout, i.flexbox, i.border, i.background, i.position, i.grid, i.shadow, i.buttonStyle, i.textStyle, i.colorStyle).propNames,
                s = function(e) {
                    var r = new RegExp("^(" + e.join("|") + ")$");
                    return o((function(e) {
                        return (0, n.A)(e) && !r.test(e)
                    }))
                };
            const l = s(a)
        },
        amiU: (e, r, t) => {
            var o = t("wC3K"),
                n = t("pPzx");
            e.exports = function(e, r, t) {
                (void 0 !== t && !n(e[r], t) || void 0 === t && !(r in e)) && o(e, r, t)
            }
        },
        MzY2: (e, r, t) => {
            var o = t("HsnV"),
                n = t("amiU"),
                i = t("UdtX"),
                a = t("cb1R"),
                s = t("tQYX"),
                l = t("zH+d"),
                c = t("LL3N");
            e.exports = function e(r, t, d, p, u) {
                r !== t && i(t, (function(i, l) {
                    if (u || (u = new o), s(i)) a(r, t, l, d, e, p, u);
                    else {
                        var f = p ? p(c(r, l), i, l + "", r, t, u) : void 0;
                        void 0 === f && (f = i), n(r, l, f)
                    }
                }), l)
            }
        },
        cb1R: (e, r, t) => {
            var o = t("amiU"),
                n = t("Grae"),
                i = t("6Rtw"),
                a = t("QT01"),
                s = t("sD1O"),
                l = t("bvyN"),
                c = t("wxYD"),
                d = t("Ndl3"),
                p = t("3ajY"),
                u = t("2q8g"),
                f = t("tQYX"),
                g = t("Kkar"),
                h = t("Qd2C"),
                m = t("LL3N"),
                y = t("4ScB");
            e.exports = function(e, r, t, b, v, S, x) {
                var w = m(e, t),
                    k = m(r, t),
                    R = x.get(k);
                if (R) o(e, t, R);
                else {
                    var C = S ? S(w, k, t + "", e, r, x) : void 0,
                        A = void 0 === C;
                    if (A) {
                        var T = c(k),
                            O = !T && p(k),
                            j = !T && !O && h(k);
                        C = k, T || O || j ? c(w) ? C = w : d(w) ? C = a(w) : O ? (A = !1, C = n(k, !0)) : j ? (A = !1, C = i(k, !0)) : C = [] : g(k) || l(k) ? (C = w, l(w) ? C = y(w) : f(w) && !u(w) || (C = s(k))) : A = !1
                    }
                    A && (x.set(k, C), v(C, k, b, S, x), x.delete(k)), o(e, t, C)
                }
            }
        },
        R3TX: (e, r, t) => {
            var o = t("zWgn"),
                n = t("UAs9"),
                i = t("7Pat");
            e.exports = function(e, r) {
                return i(n(e, r, o), e + "")
            }
        },
        wpQC: (e, r, t) => {
            var o = t("R3TX"),
                n = t("R5u7");
            e.exports = function(e) {
                return o((function(r, t) {
                    var o = -1,
                        i = t.length,
                        a = i > 1 ? t[i - 1] : void 0,
                        s = i > 2 ? t[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && n(t[0], t[1], s) && (a = i < 3 ? void 0 : a, i = 1), r = Object(r); ++o < i;) {
                        var l = t[o];
                        l && e(r, l, o, a)
                    }
                    return r
                }))
            }
        },
        R5u7: (e, r, t) => {
            var o = t("pPzx"),
                n = t("9y2L"),
                i = t("pnw1"),
                a = t("tQYX");
            e.exports = function(e, r, t) {
                if (!a(t)) return !1;
                var s = typeof r;
                return !!("number" == s ? n(t) && i(r, t.length) : "string" == s && r in t) && o(t[r], e)
            }
        },
        LL3N: e => {
            e.exports = function(e, r) {
                if (("constructor" !== r || "function" !== typeof e[r]) && "__proto__" != r) return e[r]
            }
        },
        Ndl3: (e, r, t) => {
            var o = t("9y2L"),
                n = t("tLQN");
            e.exports = function(e) {
                return n(e) && o(e)
            }
        },
        H8sf: (e, r, t) => {
            var o = t("MzY2"),
                n = t("wpQC")((function(e, r, t) {
                    o(e, r, t)
                }));
            e.exports = n
        },
        "4ScB": (e, r, t) => {
            var o = t("LtXa"),
                n = t("zH+d");
            e.exports = function(e) {
                return o(e, n(e))
            }
        },
        maj8: e => {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;

            function n(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var r = {}, t = 0; t < 10; t++) r["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(r).map((function(e) {
                            return r[e]
                        })).join("")) return !1;
                    var o = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        o[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
                } catch (n) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var a, s, l = n(e), c = 1; c < arguments.length; c++) {
                    for (var d in a = Object(arguments[c])) t.call(a, d) && (l[d] = a[d]);
                    if (r) {
                        s = r(a);
                        for (var p = 0; p < s.length; p++) o.call(a, s[p]) && (l[s[p]] = a[s[p]])
                    }
                }
                return l
            }
        },
        vTXz: (e, r, t) => {
            "use strict";
            r.az = void 0;
            l(t("DTvD"));
            var o = l(t("Y7o/")),
                n = t("8nle"),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    var r = s();
                    if (r && r.has(e)) return r.get(e);
                    var t = {};
                    if (null != e) {
                        var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var i = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                                i && (i.get || i.set) ? Object.defineProperty(t, n, i) : t[n] = e[n]
                            }
                    }
                    t.default = e, r && r.set(e, t);
                    return t
                }(t("OBVT")),
                a = l(t("9Bf3"));

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = (0, o.default)("div", {
                shouldForwardProp: a.default
            })({
                boxSizing: "border-box",
                margin: 0,
                minWidth: 0
            }, (function(e) {
                return (0, i.default)(e.__css)(e.theme)
            }), (function(e) {
                var r = e.theme,
                    t = e.variant,
                    o = e.tx,
                    n = void 0 === o ? "variants" : o;
                return (0, i.default)((0, i.get)(r, n + "." + t, (0, i.get)(r, t)))(r)
            }), (function(e) {
                return (0, i.default)(e.sx)(e.theme)
            }), (function(e) {
                return e.css
            }), (0, n.compose)(n.space, n.layout, n.typography, n.color, n.flexbox));
            r.az = c, (0, o.default)(c)({
                display: "flex"
            })
        },
        "8nle": (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                alignContent: () => be,
                alignItems: () => ye,
                alignSelf: () => Oe,
                background: () => B,
                backgroundImage: () => Ke,
                backgroundPosition: () => $e,
                backgroundRepeat: () => Ze,
                backgroundSize: () => Je,
                border: () => j,
                borderBottom: () => qe,
                borderColor: () => Ge,
                borderLeft: () => Ve,
                borderRadius: () => Qe,
                borderRight: () => Ue,
                borderStyle: () => Me,
                borderTop: () => Fe,
                borderWidth: () => Ie,
                borders: () => z,
                bottom: () => or,
                boxShadow: () => F,
                buttonStyle: () => V,
                color: () => v,
                colorStyle: () => K,
                compose: () => h,
                createParser: () => d,
                createStyleFunction: () => f,
                display: () => ie,
                flex: () => ke,
                flexBasis: () => Ae,
                flexDirection: () => we,
                flexGrow: () => Re,
                flexShrink: () => Ce,
                flexWrap: () => xe,
                flexbox: () => k,
                fontFamily: () => pe,
                fontSize: () => de,
                fontStyle: () => he,
                fontWeight: () => ue,
                get: () => c,
                grid: () => A,
                gridArea: () => Ye,
                gridAutoColumns: () => Ee,
                gridAutoFlow: () => We,
                gridAutoRows: () => De,
                gridColumn: () => Pe,
                gridColumnGap: () => Le,
                gridGap: () => ze,
                gridRow: () => _e,
                gridRowGap: () => Be,
                gridTemplateAreas: () => Xe,
                gridTemplateColumns: () => He,
                gridTemplateRows: () => Ne,
                height: () => $,
                justifyContent: () => Se,
                justifyItems: () => ve,
                justifySelf: () => Te,
                layout: () => m,
                left: () => nr,
                letterSpacing: () => me,
                lineHeight: () => fe,
                margin: () => Y,
                maxHeight: () => te,
                maxWidth: () => re,
                minHeight: () => ee,
                minWidth: () => Z,
                opacity: () => ce,
                order: () => je,
                overflow: () => ae,
                overflowX: () => se,
                overflowY: () => le,
                padding: () => I,
                position: () => W,
                right: () => tr,
                shadow: () => G,
                size: () => oe,
                space: () => M,
                style: () => ir,
                system: () => g,
                textAlign: () => ge,
                textShadow: () => F,
                textStyle: () => Q,
                top: () => rr,
                typography: () => x,
                variant: () => q,
                verticalAlign: () => ne,
                width: () => J,
                zIndex: () => er
            });
            var o = t("maj8"),
                n = t.n(o),
                i = function(e, r) {
                    var t = n()({}, e, r);
                    for (var o in e) {
                        var i;
                        e[o] && "object" === typeof r[o] && n()(t, ((i = {})[o] = n()(e[o], r[o]), i))
                    }
                    return t
                },
                a = {
                    breakpoints: [40, 52, 64].map((function(e) {
                        return e + "em"
                    }))
                },
                s = function(e) {
                    return "@media screen and (min-width: " + e + ")"
                },
                l = function(e, r) {
                    return c(r, e, e)
                },
                c = function(e, r, t, o, n) {
                    for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++) e = e ? e[r[o]] : n;
                    return e === n ? t : e
                },
                d = function e(r) {
                    var t = {},
                        o = function(e) {
                            var o = {},
                                l = !1,
                                d = e.theme && e.theme.disableStyledSystemCache;
                            for (var f in e)
                                if (r[f]) {
                                    var g = r[f],
                                        h = e[f],
                                        m = c(e.theme, g.scale, g.defaults);
                                    if ("object" !== typeof h) n()(o, g(h, m, e));
                                    else {
                                        if (t.breakpoints = !d && t.breakpoints || c(e.theme, "breakpoints", a.breakpoints), Array.isArray(h)) {
                                            t.media = !d && t.media || [null].concat(t.breakpoints.map(s)), o = i(o, p(t.media, g, m, h, e));
                                            continue
                                        }
                                        null !== h && (o = i(o, u(t.breakpoints, g, m, h, e)), l = !0)
                                    }
                                }
                            return l && (o = function(e) {
                                var r = {};
                                return Object.keys(e).sort((function(e, r) {
                                    return e.localeCompare(r, void 0, {
                                        numeric: !0,
                                        sensitivity: "base"
                                    })
                                })).forEach((function(t) {
                                    r[t] = e[t]
                                })), r
                            }(o)), o
                        };
                    o.config = r, o.propNames = Object.keys(r), o.cache = t;
                    var l = Object.keys(r).filter((function(e) {
                        return "config" !== e
                    }));
                    return l.length > 1 && l.forEach((function(t) {
                        var n;
                        o[t] = e(((n = {})[t] = r[t], n))
                    })), o
                },
                p = function(e, r, t, o, i) {
                    var a = {};
                    return o.slice(0, e.length).forEach((function(o, s) {
                        var l, c = e[s],
                            d = r(o, t, i);
                        c ? n()(a, ((l = {})[c] = n()({}, a[c], d), l)) : n()(a, d)
                    })), a
                },
                u = function(e, r, t, o, i) {
                    var a = {};
                    for (var l in o) {
                        var c = e[l],
                            d = r(o[l], t, i);
                        if (c) {
                            var p, u = s(c);
                            n()(a, ((p = {})[u] = n()({}, a[u], d), p))
                        } else n()(a, d)
                    }
                    return a
                },
                f = function(e) {
                    var r = e.properties,
                        t = e.property,
                        o = e.scale,
                        n = e.transform,
                        i = void 0 === n ? l : n,
                        a = e.defaultScale;
                    r = r || [t];
                    var s = function(e, t, o) {
                        var n = {},
                            a = i(e, t, o);
                        if (null !== a) return r.forEach((function(e) {
                            n[e] = a
                        })), n
                    };
                    return s.scale = o, s.defaults = a, s
                },
                g = function(e) {
                    void 0 === e && (e = {});
                    var r = {};
                    return Object.keys(e).forEach((function(t) {
                        var o = e[t];
                        r[t] = !0 !== o ? "function" !== typeof o ? f(o) : o : f({
                            property: t,
                            scale: t
                        })
                    })), d(r)
                },
                h = function() {
                    for (var e = {}, r = arguments.length, t = new Array(r), o = 0; o < r; o++) t[o] = arguments[o];
                    t.forEach((function(r) {
                        r && r.config && n()(e, r.config)
                    }));
                    var i = d(e);
                    return i
                },
                m = g({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function(e, r) {
                            return c(r, e, ! function(e) {
                                return "number" === typeof e && !isNaN(e)
                            }(e) || e > 1 ? e : 100 * e + "%")
                        }
                    },
                    height: {
                        property: "height",
                        scale: "sizes"
                    },
                    minWidth: {
                        property: "minWidth",
                        scale: "sizes"
                    },
                    minHeight: {
                        property: "minHeight",
                        scale: "sizes"
                    },
                    maxWidth: {
                        property: "maxWidth",
                        scale: "sizes"
                    },
                    maxHeight: {
                        property: "maxHeight",
                        scale: "sizes"
                    },
                    size: {
                        properties: ["width", "height"],
                        scale: "sizes"
                    },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                });
            const y = m;
            var b = {
                color: {
                    property: "color",
                    scale: "colors"
                },
                backgroundColor: {
                    property: "backgroundColor",
                    scale: "colors"
                },
                opacity: !0
            };
            b.bg = b.backgroundColor;
            var v = g(b);
            const S = v;
            var x = g({
                fontFamily: {
                    property: "fontFamily",
                    scale: "fonts"
                },
                fontSize: {
                    property: "fontSize",
                    scale: "fontSizes",
                    defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                fontWeight: {
                    property: "fontWeight",
                    scale: "fontWeights"
                },
                lineHeight: {
                    property: "lineHeight",
                    scale: "lineHeights"
                },
                letterSpacing: {
                    property: "letterSpacing",
                    scale: "letterSpacings"
                },
                textAlign: !0,
                fontStyle: !0
            });
            const w = x;
            var k = g({
                alignItems: !0,
                alignContent: !0,
                justifyItems: !0,
                justifyContent: !0,
                flexWrap: !0,
                flexDirection: !0,
                flex: !0,
                flexGrow: !0,
                flexShrink: !0,
                flexBasis: !0,
                justifySelf: !0,
                alignSelf: !0,
                order: !0
            });
            const R = k;
            var C = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                A = g({
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: C.space
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: C.space
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: C.space
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0
                });
            const T = A;
            var O = {
                border: {
                    property: "border",
                    scale: "borders"
                },
                borderWidth: {
                    property: "borderWidth",
                    scale: "borderWidths"
                },
                borderStyle: {
                    property: "borderStyle",
                    scale: "borderStyles"
                },
                borderColor: {
                    property: "borderColor",
                    scale: "colors"
                },
                borderRadius: {
                    property: "borderRadius",
                    scale: "radii"
                },
                borderTop: {
                    property: "borderTop",
                    scale: "borders"
                },
                borderTopLeftRadius: {
                    property: "borderTopLeftRadius",
                    scale: "radii"
                },
                borderTopRightRadius: {
                    property: "borderTopRightRadius",
                    scale: "radii"
                },
                borderRight: {
                    property: "borderRight",
                    scale: "borders"
                },
                borderBottom: {
                    property: "borderBottom",
                    scale: "borders"
                },
                borderBottomLeftRadius: {
                    property: "borderBottomLeftRadius",
                    scale: "radii"
                },
                borderBottomRightRadius: {
                    property: "borderBottomRightRadius",
                    scale: "radii"
                },
                borderLeft: {
                    property: "borderLeft",
                    scale: "borders"
                },
                borderX: {
                    properties: ["borderLeft", "borderRight"],
                    scale: "borders"
                },
                borderY: {
                    properties: ["borderTop", "borderBottom"],
                    scale: "borders"
                },
                borderTopWidth: {
                    property: "borderTopWidth",
                    scale: "borderWidths"
                },
                borderTopColor: {
                    property: "borderTopColor",
                    scale: "colors"
                },
                borderTopStyle: {
                    property: "borderTopStyle",
                    scale: "borderStyles"
                }
            };
            O.borderTopLeftRadius = {
                property: "borderTopLeftRadius",
                scale: "radii"
            }, O.borderTopRightRadius = {
                property: "borderTopRightRadius",
                scale: "radii"
            }, O.borderBottomWidth = {
                property: "borderBottomWidth",
                scale: "borderWidths"
            }, O.borderBottomColor = {
                property: "borderBottomColor",
                scale: "colors"
            }, O.borderBottomStyle = {
                property: "borderBottomStyle",
                scale: "borderStyles"
            }, O.borderBottomLeftRadius = {
                property: "borderBottomLeftRadius",
                scale: "radii"
            }, O.borderBottomRightRadius = {
                property: "borderBottomRightRadius",
                scale: "radii"
            }, O.borderLeftWidth = {
                property: "borderLeftWidth",
                scale: "borderWidths"
            }, O.borderLeftColor = {
                property: "borderLeftColor",
                scale: "colors"
            }, O.borderLeftStyle = {
                property: "borderLeftStyle",
                scale: "borderStyles"
            }, O.borderRightWidth = {
                property: "borderRightWidth",
                scale: "borderWidths"
            }, O.borderRightColor = {
                property: "borderRightColor",
                scale: "colors"
            }, O.borderRightStyle = {
                property: "borderRightStyle",
                scale: "borderStyles"
            };
            var j = g(O);
            const z = j;
            var L = {
                background: !0,
                backgroundImage: !0,
                backgroundSize: !0,
                backgroundPosition: !0,
                backgroundRepeat: !0
            };
            L.bgImage = L.backgroundImage, L.bgSize = L.backgroundSize, L.bgPosition = L.backgroundPosition, L.bgRepeat = L.backgroundRepeat;
            var B = g(L);
            const P = B;
            var _ = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                W = g({
                    position: !0,
                    zIndex: {
                        property: "zIndex",
                        scale: "zIndices"
                    },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: _.space
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: _.space
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: _.space
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: _.space
                    }
                });
            const E = W;
            var D = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                H = function(e) {
                    return "number" === typeof e && !isNaN(e)
                },
                N = function(e, r) {
                    if (!H(e)) return c(r, e, e);
                    var t = e < 0,
                        o = Math.abs(e),
                        n = c(r, o, o);
                    return H(n) ? n * (t ? -1 : 1) : t ? "-" + n : n
                },
                X = {};
            X.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: N,
                    defaultScale: D.space
                }
            }, X.margin.m = X.margin.margin, X.margin.mt = X.margin.marginTop, X.margin.mr = X.margin.marginRight, X.margin.mb = X.margin.marginBottom, X.margin.ml = X.margin.marginLeft, X.margin.mx = X.margin.marginX, X.margin.my = X.margin.marginY, X.padding = {
                padding: {
                    property: "padding",
                    scale: "space",
                    defaultScale: D.space
                },
                paddingTop: {
                    property: "paddingTop",
                    scale: "space",
                    defaultScale: D.space
                },
                paddingRight: {
                    property: "paddingRight",
                    scale: "space",
                    defaultScale: D.space
                },
                paddingBottom: {
                    property: "paddingBottom",
                    scale: "space",
                    defaultScale: D.space
                },
                paddingLeft: {
                    property: "paddingLeft",
                    scale: "space",
                    defaultScale: D.space
                },
                paddingX: {
                    properties: ["paddingLeft", "paddingRight"],
                    scale: "space",
                    defaultScale: D.space
                },
                paddingY: {
                    properties: ["paddingTop", "paddingBottom"],
                    scale: "space",
                    defaultScale: D.space
                }
            }, X.padding.p = X.padding.padding, X.padding.pt = X.padding.paddingTop, X.padding.pr = X.padding.paddingRight, X.padding.pb = X.padding.paddingBottom, X.padding.pl = X.padding.paddingLeft, X.padding.px = X.padding.paddingX, X.padding.py = X.padding.paddingY;
            var Y = g(X.margin),
                I = g(X.padding),
                M = h(Y, I);
            var G = g({
                boxShadow: {
                    property: "boxShadow",
                    scale: "shadows"
                },
                textShadow: {
                    property: "textShadow",
                    scale: "shadows"
                }
            });
            const F = G;
            var U = t("OBVT"),
                q = function(e) {
                    var r, t, o = e.scale,
                        n = e.prop,
                        i = void 0 === n ? "variant" : n,
                        a = e.variants,
                        s = void 0 === a ? {} : a,
                        l = e.key;
                    t = Object.keys(s).length ? function(e, r, t) {
                        return (0, U.default)(c(r, e, null))(t.theme)
                    } : function(e, r) {
                        return c(r, e, null)
                    }, t.scale = o || l, t.defaults = s;
                    var p = ((r = {})[i] = t, r);
                    return d(p)
                };
            var V = q({
                    key: "buttons"
                }),
                Q = q({
                    key: "textStyles",
                    prop: "textStyle"
                }),
                K = q({
                    key: "colorStyles",
                    prop: "colors"
                }),
                J = y.width,
                $ = y.height,
                Z = y.minWidth,
                ee = y.minHeight,
                re = y.maxWidth,
                te = y.maxHeight,
                oe = y.size,
                ne = y.verticalAlign,
                ie = y.display,
                ae = y.overflow,
                se = y.overflowX,
                le = y.overflowY,
                ce = S.opacity,
                de = w.fontSize,
                pe = w.fontFamily,
                ue = w.fontWeight,
                fe = w.lineHeight,
                ge = w.textAlign,
                he = w.fontStyle,
                me = w.letterSpacing,
                ye = R.alignItems,
                be = R.alignContent,
                ve = R.justifyItems,
                Se = R.justifyContent,
                xe = R.flexWrap,
                we = R.flexDirection,
                ke = R.flex,
                Re = R.flexGrow,
                Ce = R.flexShrink,
                Ae = R.flexBasis,
                Te = R.justifySelf,
                Oe = R.alignSelf,
                je = R.order,
                ze = T.gridGap,
                Le = T.gridColumnGap,
                Be = T.gridRowGap,
                Pe = T.gridColumn,
                _e = T.gridRow,
                We = T.gridAutoFlow,
                Ee = T.gridAutoColumns,
                De = T.gridAutoRows,
                He = T.gridTemplateColumns,
                Ne = T.gridTemplateRows,
                Xe = T.gridTemplateAreas,
                Ye = T.gridArea,
                Ie = z.borderWidth,
                Me = z.borderStyle,
                Ge = z.borderColor,
                Fe = z.borderTop,
                Ue = z.borderRight,
                qe = z.borderBottom,
                Ve = z.borderLeft,
                Qe = z.borderRadius,
                Ke = P.backgroundImage,
                Je = P.backgroundSize,
                $e = P.backgroundPosition,
                Ze = P.backgroundRepeat,
                er = E.zIndex,
                rr = E.top,
                tr = E.right,
                or = E.bottom,
                nr = E.left,
                ir = function(e) {
                    var r = e.prop,
                        t = e.cssProperty,
                        o = e.alias,
                        n = e.key,
                        i = e.transformValue,
                        a = e.scale,
                        s = e.properties,
                        l = {};
                    return l[r] = f({
                        properties: s,
                        property: t || r,
                        scale: n,
                        defaultScale: a,
                        transform: i
                    }), o && (l[o] = l[r]), d(l)
                }
        }
    }
]);