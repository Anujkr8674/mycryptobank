! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "547a918d-f5a2-56b6-9130-64552496bf9b")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9461], {
        qGMf: function(e, t, n) {
            var a, r;
            ! function(i, o, l) {
                "use strict";
                "undefined" !== typeof window && n.amdO ? void 0 === (r = "function" === typeof(a = l) ? a.call(t, n, t, e) : a) || (e.exports = r) : e.exports ? e.exports = l() : o.exports ? o.exports = l() : o.Fingerprint2 = l()
            }(0, this, (function() {
                "use strict";
                "undefined" === typeof Array.isArray && (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                });
                var e = function(e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var n = [0, 0, 0, 0];
                        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                    },
                    t = function(e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var n = [0, 0, 0, 0];
                        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                    },
                    n = function(e, t) {
                        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                    },
                    a = function(e, t) {
                        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                    },
                    r = function(e, t) {
                        return [e[0] ^ t[0], e[1] ^ t[1]]
                    },
                    i = function(e) {
                        return e = r(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = r(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = r(e, [0, e[0] >>> 1])
                    },
                    o = function(o, l) {
                        l = l || 0;
                        for (var s = (o = o || "").length % 16, c = o.length - s, u = [0, l], d = [0, l], f = [0, 0], g = [0, 0], h = [2277735313, 289559509], m = [1291169091, 658871167], p = 0; p < c; p += 16) f = [255 & o.charCodeAt(p + 4) | (255 & o.charCodeAt(p + 5)) << 8 | (255 & o.charCodeAt(p + 6)) << 16 | (255 & o.charCodeAt(p + 7)) << 24, 255 & o.charCodeAt(p) | (255 & o.charCodeAt(p + 1)) << 8 | (255 & o.charCodeAt(p + 2)) << 16 | (255 & o.charCodeAt(p + 3)) << 24], g = [255 & o.charCodeAt(p + 12) | (255 & o.charCodeAt(p + 13)) << 8 | (255 & o.charCodeAt(p + 14)) << 16 | (255 & o.charCodeAt(p + 15)) << 24, 255 & o.charCodeAt(p + 8) | (255 & o.charCodeAt(p + 9)) << 8 | (255 & o.charCodeAt(p + 10)) << 16 | (255 & o.charCodeAt(p + 11)) << 24], f = t(f, h), f = n(f, 31), f = t(f, m), u = r(u, f), u = n(u, 27), u = e(u, d), u = e(t(u, [0, 5]), [0, 1390208809]), g = t(g, m), g = n(g, 33), g = t(g, h), d = r(d, g), d = n(d, 31), d = e(d, u), d = e(t(d, [0, 5]), [0, 944331445]);
                        switch (f = [0, 0], g = [0, 0], s) {
                            case 15:
                                g = r(g, a([0, o.charCodeAt(p + 14)], 48));
                            case 14:
                                g = r(g, a([0, o.charCodeAt(p + 13)], 40));
                            case 13:
                                g = r(g, a([0, o.charCodeAt(p + 12)], 32));
                            case 12:
                                g = r(g, a([0, o.charCodeAt(p + 11)], 24));
                            case 11:
                                g = r(g, a([0, o.charCodeAt(p + 10)], 16));
                            case 10:
                                g = r(g, a([0, o.charCodeAt(p + 9)], 8));
                            case 9:
                                g = r(g, [0, o.charCodeAt(p + 8)]), g = t(g, m), g = n(g, 33), g = t(g, h), d = r(d, g);
                            case 8:
                                f = r(f, a([0, o.charCodeAt(p + 7)], 56));
                            case 7:
                                f = r(f, a([0, o.charCodeAt(p + 6)], 48));
                            case 6:
                                f = r(f, a([0, o.charCodeAt(p + 5)], 40));
                            case 5:
                                f = r(f, a([0, o.charCodeAt(p + 4)], 32));
                            case 4:
                                f = r(f, a([0, o.charCodeAt(p + 3)], 24));
                            case 3:
                                f = r(f, a([0, o.charCodeAt(p + 2)], 16));
                            case 2:
                                f = r(f, a([0, o.charCodeAt(p + 1)], 8));
                            case 1:
                                f = r(f, [0, o.charCodeAt(p)]), f = t(f, h), f = n(f, 31), f = t(f, m), u = r(u, f)
                        }
                        return u = r(u, [0, o.length]), d = r(d, [0, o.length]), u = e(u, d), d = e(d, u), u = i(u), d = i(d), u = e(u, d), d = e(d, u), ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                    },
                    l = {
                        preprocessor: null,
                        audio: {
                            timeout: 1e3,
                            excludeIOS11: !0
                        },
                        fonts: {
                            swfContainerId: "fingerprintjs2",
                            swfPath: "flash/compiled/FontList.swf",
                            userDefinedFonts: [],
                            extendedJsFonts: !1
                        },
                        screen: {
                            detectScreenOrientation: !0
                        },
                        plugins: {
                            sortPluginsFor: [/palemoon/i],
                            excludeIE: !1
                        },
                        extraComponents: [],
                        excludes: {
                            enumerateDevices: !0,
                            pixelRatio: !0,
                            doNotTrack: !0,
                            fontsFlash: !0,
                            adBlock: !0
                        },
                        NOT_AVAILABLE: "not available",
                        ERROR: "error",
                        EXCLUDED: "excluded"
                    },
                    s = function(e, t) {
                        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                        else if (e.length === +e.length)
                            for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e);
                        else
                            for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
                    },
                    c = function(e, t) {
                        var n = [];
                        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (s(e, (function(e, a, r) {
                            n.push(t(e, a, r))
                        })), n)
                    },
                    u = function() {
                        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
                    },
                    d = function(e) {
                        var t = [window.screen.width, window.screen.height];
                        return e.screen.detectScreenOrientation && t.sort().reverse(), t
                    },
                    f = function(e) {
                        if (window.screen.availWidth && window.screen.availHeight) {
                            var t = [window.screen.availHeight, window.screen.availWidth];
                            return e.screen.detectScreenOrientation && t.sort().reverse(), t
                        }
                        return e.NOT_AVAILABLE
                    },
                    g = function(e) {
                        if (null == navigator.plugins) return e.NOT_AVAILABLE;
                        for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                        return m(e) && (t = t.sort((function(e, t) {
                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                        }))), c(t, (function(e) {
                            var t = c(e, (function(e) {
                                return [e.type, e.suffixes]
                            }));
                            return [e.name, e.description, t]
                        }))
                    },
                    h = function(e) {
                        var t = [];
                        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                            t = c(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                                try {
                                    return new window.ActiveXObject(t), t
                                } catch (n) {
                                    return e.ERROR
                                }
                            }))
                        } else t.push(e.NOT_AVAILABLE);
                        return navigator.plugins && (t = t.concat(g(e))), t
                    },
                    m = function(e) {
                        for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
                            var r = e.plugins.sortPluginsFor[n];
                            if (navigator.userAgent.match(r)) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    },
                    p = function(e) {
                        try {
                            return !!window.sessionStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    T = function(e) {
                        try {
                            return !!window.localStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    A = function(e) {
                        if (R()) return e.EXCLUDED;
                        try {
                            return !!window.indexedDB
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    v = function(e) {
                        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                    },
                    S = function(e) {
                        return navigator.cpuClass || e.NOT_AVAILABLE
                    },
                    C = function(e) {
                        return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                    },
                    w = function(e) {
                        return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                    },
                    y = function() {
                        var e, t = 0;
                        "undefined" !== typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" !== typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                        try {
                            document.createEvent("TouchEvent"), e = !0
                        } catch (n) {
                            e = !1
                        }
                        return [t, e, "ontouchstart" in window]
                    },
                    B = function(e) {
                        var t = [],
                            n = document.createElement("canvas");
                        n.width = 2e3, n.height = 200, n.style.display = "inline";
                        var a = n.getContext("2d");
                        return a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(125, 1, 62, 20), a.fillStyle = "#069", e.dontUseFakeFontInCanvas ? a.font = "11pt Arial" : a.font = "11pt no-real-font-123", a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, 2 * Math.PI, !0), a.arc(75, 75, 25, 0, 2 * Math.PI, !0), a.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
                    },
                    E = function() {
                        var e, t = function(t) {
                            return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                        };
                        if (!(e = G())) return null;
                        var n = [],
                            a = e.createBuffer();
                        e.bindBuffer(e.ARRAY_BUFFER, a);
                        var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                        e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), a.itemSize = 3, a.numItems = 3;
                        var i = e.createProgram(),
                            o = e.createShader(e.VERTEX_SHADER);
                        e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
                        var l = e.createShader(e.FRAGMENT_SHADER);
                        e.shaderSource(l, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(l), e.attachShader(i, o), e.attachShader(i, l), e.linkProgram(i), e.useProgram(i), i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex"), i.offsetUniform = e.getUniformLocation(i, "uniformOffset"), e.enableVertexAttribArray(i.vertexPosArray), e.vertexAttribPointer(i.vertexPosAttrib, a.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(i.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, a.numItems);
                        try {
                            n.push(e.canvas.toDataURL())
                        } catch (u) {}
                        n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                            if (t) {
                                var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                return 0 === n && (n = 2), n
                            }
                            return null
                        }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                        try {
                            var c = e.getExtension("WEBGL_debug_renderer_info");
                            c && (n.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                        } catch (u) {}
                        return e.getShaderPrecisionFormat ? (s(["FLOAT", "INT"], (function(t) {
                            s(["VERTEX", "FRAGMENT"], (function(a) {
                                s(["HIGH", "MEDIUM", "LOW"], (function(r) {
                                    s(["precision", "rangeMin", "rangeMax"], (function(i) {
                                        var o = e.getShaderPrecisionFormat(e[a + "_SHADER"], e[r + "_" + t])[i];
                                        "precision" !== i && (i = "precision " + i);
                                        var l = ["webgl ", a.toLowerCase(), " shader ", r.toLowerCase(), " ", t.toLowerCase(), " ", i, ":", o].join("");
                                        n.push(l)
                                    }))
                                }))
                            }))
                        })), U(e), n) : (U(e), n)
                    },
                    x = function() {
                        try {
                            var e = G(),
                                t = e.getExtension("WEBGL_debug_renderer_info"),
                                n = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                            return U(e), n
                        } catch (a) {
                            return null
                        }
                    },
                    O = function() {
                        var e = document.createElement("div");
                        e.innerHTML = "&nbsp;", e.className = "adsbox";
                        var t = !1;
                        try {
                            document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                        } catch (n) {
                            t = !1
                        }
                        return t
                    },
                    M = function() {
                        if ("undefined" !== typeof navigator.languages) try {
                            if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                        } catch (e) {
                            return !0
                        }
                        return !1
                    },
                    b = function() {
                        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                    },
                    P = function() {
                        var e, t = navigator.userAgent.toLowerCase(),
                            n = navigator.oscpu,
                            a = navigator.platform.toLowerCase();
                        if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("windows") >= 0 || t.indexOf("win16") >= 0 || t.indexOf("win32") >= 0 || t.indexOf("win64") >= 0 || t.indexOf("win95") >= 0 || t.indexOf("win98") >= 0 || t.indexOf("winnt") >= 0 || t.indexOf("wow64") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 || t.indexOf("x11") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0 || t.indexOf("crios") >= 0 || t.indexOf("fxios") >= 0 ? "iOS" : t.indexOf("macintosh") >= 0 || t.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows" !== e && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e && -1 === t.indexOf("cros")) return !0;
                        if ("undefined" !== typeof n) {
                            if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                            if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                            if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                            if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) !== ("Other" === e)) return !0
                        }
                        return a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || !(a.indexOf("arm") >= 0 && "Windows Phone" === e) && (!(a.indexOf("pike") >= 0 && t.indexOf("opera mini") >= 0) && ((a.indexOf("win") < 0 && a.indexOf("linux") < 0 && a.indexOf("mac") < 0 && a.indexOf("iphone") < 0 && a.indexOf("ipad") < 0 && a.indexOf("ipod") < 0) !== ("Other" === e) || "undefined" === typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e))))
                    },
                    L = function() {
                        var e, t = navigator.userAgent.toLowerCase(),
                            n = navigator.productSub;
                        if (t.indexOf("edge/") >= 0 || t.indexOf("iemobile/") >= 0) return !1;
                        if (t.indexOf("opera mini") >= 0) return !1;
                        if (("Chrome" === (e = t.indexOf("firefox/") >= 0 ? "Firefox" : t.indexOf("opera/") >= 0 || t.indexOf(" opr/") >= 0 ? "Opera" : t.indexOf("chrome/") >= 0 ? "Chrome" : t.indexOf("safari/") >= 0 ? t.indexOf("android 1.") >= 0 || t.indexOf("android 2.") >= 0 || t.indexOf("android 3.") >= 0 || t.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : t.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                        var a, r = eval.toString().length;
                        if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                        if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
                        if (33 === r && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
                        try {
                            throw "a"
                        } catch (i) {
                            try {
                                i.toSource(), a = !0
                            } catch (o) {
                                a = !1
                            }
                        }
                        return a && "Firefox" !== e && "Other" !== e
                    },
                    k = function() {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    },
                    I = function() {
                        if (!k()) return !1;
                        var e = G(),
                            t = !!window.WebGLRenderingContext && !!e;
                        return U(e), t
                    },
                    D = function() {
                        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                    },
                    R = function() {
                        return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2
                    },
                    _ = function() {
                        return "undefined" !== typeof window.swfobject
                    },
                    N = function() {
                        return window.swfobject.hasFlashPlayerVersion("9.0.0")
                    },
                    F = function(e, t) {
                        var n = "___fp_swf_loaded";
                        window[n] = function(t) {
                            e(t)
                        };
                        var a = t.fonts.swfContainerId;
                        ! function(e) {
                            var t = document.createElement("div");
                            t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                        }();
                        var r = {
                            onReady: n
                        };
                        window.swfobject.embedSWF(t.fonts.swfPath, a, "1", "1", "9.0.0", !1, r, {
                            allowScriptAccess: "always",
                            menu: "false"
                        }, {})
                    },
                    G = function() {
                        var e = document.createElement("canvas"),
                            t = null;
                        try {
                            t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (n) {}
                        return t || (t = null), t
                    },
                    U = function(e) {
                        var t = e.getExtension("WEBGL_lose_context");
                        null != t && t.loseContext()
                    },
                    V = [{
                        key: "userAgent",
                        getData: function(e) {
                            e(navigator.userAgent)
                        }
                    }, {
                        key: "webdriver",
                        getData: function(e, t) {
                            e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                        }
                    }, {
                        key: "language",
                        getData: function(e, t) {
                            e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "colorDepth",
                        getData: function(e, t) {
                            e(window.screen.colorDepth || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "deviceMemory",
                        getData: function(e, t) {
                            e(navigator.deviceMemory || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "pixelRatio",
                        getData: function(e, t) {
                            e(window.devicePixelRatio || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "hardwareConcurrency",
                        getData: function(e, t) {
                            e(v(t))
                        }
                    }, {
                        key: "screenResolution",
                        getData: function(e, t) {
                            e(d(t))
                        }
                    }, {
                        key: "availableScreenResolution",
                        getData: function(e, t) {
                            e(f(t))
                        }
                    }, {
                        key: "timezoneOffset",
                        getData: function(e) {
                            e((new Date).getTimezoneOffset())
                        }
                    }, {
                        key: "timezone",
                        getData: function(e, t) {
                            window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || t.NOT_AVAILABLE) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "sessionStorage",
                        getData: function(e, t) {
                            e(p(t))
                        }
                    }, {
                        key: "localStorage",
                        getData: function(e, t) {
                            e(T(t))
                        }
                    }, {
                        key: "indexedDb",
                        getData: function(e, t) {
                            e(A(t))
                        }
                    }, {
                        key: "addBehavior",
                        getData: function(e) {
                            e(!!window.HTMLElement.prototype.addBehavior)
                        }
                    }, {
                        key: "openDatabase",
                        getData: function(e) {
                            e(!!window.openDatabase)
                        }
                    }, {
                        key: "cpuClass",
                        getData: function(e, t) {
                            e(S(t))
                        }
                    }, {
                        key: "platform",
                        getData: function(e, t) {
                            e(C(t))
                        }
                    }, {
                        key: "doNotTrack",
                        getData: function(e, t) {
                            e(w(t))
                        }
                    }, {
                        key: "plugins",
                        getData: function(e, t) {
                            D() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(h(t)) : e(g(t))
                        }
                    }, {
                        key: "canvas",
                        getData: function(e, t) {
                            k() ? e(B(t)) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webgl",
                        getData: function(e, t) {
                            I() ? e(E()) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webglVendorAndRenderer",
                        getData: function(e) {
                            I() ? e(x()) : e()
                        }
                    }, {
                        key: "adBlock",
                        getData: function(e) {
                            e(O())
                        }
                    }, {
                        key: "hasLiedLanguages",
                        getData: function(e) {
                            e(M())
                        }
                    }, {
                        key: "hasLiedResolution",
                        getData: function(e) {
                            e(b())
                        }
                    }, {
                        key: "hasLiedOs",
                        getData: function(e) {
                            e(P())
                        }
                    }, {
                        key: "hasLiedBrowser",
                        getData: function(e) {
                            e(L())
                        }
                    }, {
                        key: "touchSupport",
                        getData: function(e) {
                            e(y())
                        }
                    }, {
                        key: "fonts",
                        getData: function(e, t) {
                            var n = ["monospace", "sans-serif", "serif"],
                                a = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                            if (t.fonts.extendedJsFonts) {
                                a = a.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                            }
                            a = (a = a.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                                return a.indexOf(e) === t
                            }));
                            var r = document.getElementsByTagName("body")[0],
                                i = document.createElement("div"),
                                o = document.createElement("div"),
                                l = {},
                                s = {},
                                c = function() {
                                    var e = document.createElement("span");
                                    return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                                },
                                u = function(e, t) {
                                    var n = c();
                                    return n.style.fontFamily = "'" + e + "'," + t, n
                                },
                                d = function(e) {
                                    for (var t = !1, a = 0; a < n.length; a++)
                                        if (t = e[a].offsetWidth !== l[n[a]] || e[a].offsetHeight !== s[n[a]]) return t;
                                    return t
                                },
                                f = function() {
                                    for (var e = [], t = 0, a = n.length; t < a; t++) {
                                        var r = c();
                                        r.style.fontFamily = n[t], i.appendChild(r), e.push(r)
                                    }
                                    return e
                                }();
                            r.appendChild(i);
                            for (var g = 0, h = n.length; g < h; g++) l[n[g]] = f[g].offsetWidth, s[n[g]] = f[g].offsetHeight;
                            var m = function() {
                                for (var e = {}, t = 0, r = a.length; t < r; t++) {
                                    for (var i = [], l = 0, s = n.length; l < s; l++) {
                                        var c = u(a[t], n[l]);
                                        o.appendChild(c), i.push(c)
                                    }
                                    e[a[t]] = i
                                }
                                return e
                            }();
                            r.appendChild(o);
                            for (var p = [], T = 0, A = a.length; T < A; T++) d(m[a[T]]) && p.push(a[T]);
                            r.removeChild(o), r.removeChild(i), e(p)
                        },
                        pauseBefore: !0
                    }, {
                        key: "fontsFlash",
                        getData: function(e, t) {
                            return _() ? N() ? t.fonts.swfPath ? void F((function(t) {
                                e(t)
                            }), t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                        },
                        pauseBefore: !0
                    }, {
                        key: "audio",
                        getData: function(e, t) {
                            var n = t.audio;
                            if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                            var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                            if (null == a) return e(t.NOT_AVAILABLE);
                            var r = new a(1, 44100, 44100),
                                i = r.createOscillator();
                            i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
                            var o = r.createDynamicsCompressor();
                            s([
                                ["threshold", -50],
                                ["knee", 40],
                                ["ratio", 12],
                                ["reduction", -20],
                                ["attack", 0],
                                ["release", .25]
                            ], (function(e) {
                                void 0 !== o[e[0]] && "function" === typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
                            })), i.connect(o), o.connect(r.destination), i.start(0), r.startRendering();
                            var l = setTimeout((function() {
                                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".'), r.oncomplete = function() {}, r = null, e("audioTimeout")
                            }), n.timeout);
                            r.oncomplete = function(t) {
                                var n;
                                try {
                                    clearTimeout(l), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                                        return e + Math.abs(t)
                                    }), 0).toString(), i.disconnect(), o.disconnect()
                                } catch (a) {
                                    return void e(a)
                                }
                                e(n)
                            }
                        }
                    }, {
                        key: "enumerateDevices",
                        getData: function(e, t) {
                            if (!u()) return e(t.NOT_AVAILABLE);
                            navigator.mediaDevices.enumerateDevices().then((function(t) {
                                e(t.map((function(e) {
                                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                                })))
                            })).catch((function(t) {
                                e(t)
                            }))
                        }
                    }],
                    H = function(e) {
                        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
                    };
                return H.get = function(e, t) {
                    t ? e || (e = {}) : (t = e, e = {}),
                        function(e, t) {
                            if (null == t) return e;
                            var n, a;
                            for (a in t) null == (n = t[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = n)
                        }(e, l), e.components = e.extraComponents.concat(V);
                    var n = {
                            data: [],
                            addPreprocessedComponent: function(t, a) {
                                "function" === typeof e.preprocessor && (a = e.preprocessor(t, a)), n.data.push({
                                    key: t,
                                    value: a
                                })
                            }
                        },
                        a = -1,
                        r = function(i) {
                            if ((a += 1) >= e.components.length) t(n.data);
                            else {
                                var o = e.components[a];
                                if (e.excludes[o.key]) r(!1);
                                else {
                                    if (!i && o.pauseBefore) return a -= 1, void setTimeout((function() {
                                        r(!0)
                                    }), 1);
                                    try {
                                        o.getData((function(e) {
                                            n.addPreprocessedComponent(o.key, e), r(!1)
                                        }), e)
                                    } catch (l) {
                                        n.addPreprocessedComponent(o.key, String(l)), r(!1)
                                    }
                                }
                            }
                        };
                    r(!1)
                }, H.getPromise = function(e) {
                    return new Promise((function(t, n) {
                        H.get(e, t)
                    }))
                }, H.getV18 = function(e, t) {
                    return null == t && (t = e, e = {}), H.get(e, (function(n) {
                        for (var a = [], r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i.value === (e.NOT_AVAILABLE || "not available")) a.push({
                                key: i.key,
                                value: "unknown"
                            });
                            else if ("plugins" === i.key) a.push({
                                key: "plugins",
                                value: c(i.value, (function(e) {
                                    var t = c(e[2], (function(e) {
                                        return e.join ? e.join("~") : e
                                    })).join(",");
                                    return [e[0], e[1], t].join("::")
                                }))
                            });
                            else if (-1 !== ["canvas", "webgl"].indexOf(i.key) && Array.isArray(i.value)) a.push({
                                key: i.key,
                                value: i.value.join("~")
                            });
                            else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                                if (!i.value) continue;
                                a.push({
                                    key: i.key,
                                    value: 1
                                })
                            } else i.value ? a.push(i.value.join ? {
                                key: i.key,
                                value: i.value.join(";")
                            } : i) : a.push({
                                key: i.key,
                                value: i.value
                            })
                        }
                        var l = o(c(a, (function(e) {
                            return e.value
                        })).join("~~~"), 31);
                        t(l, a)
                    }))
                }, H.x64hash128 = o, H.VERSION = "2.1.4", H
            }))
        }
    }
]);
//# debugId=547a918d-f5a2-56b6-9130-64552496bf9b