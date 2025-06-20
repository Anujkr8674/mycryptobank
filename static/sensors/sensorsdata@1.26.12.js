! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : t()
}(this, function() {
    function e(e) {
        if (!e) return !1;
        var t = Object.prototype.toString.call(e);
        return "[object Function]" == t || "[object AsyncFunction]" == t
    }

    function t() {
        return Date.now && e(Date.now) ? Date.now() : (new Date).getTime()
    }

    function r(e) {
        return null != e && "[object Object]" == Object.prototype.toString.call(e)
    }

    function n() {
        if ("function" == typeof Uint32Array) {
            var e = "";
            if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto), r(e) && e.getRandomValues) {
                var t = new Uint32Array(1),
                    n = e.getRandomValues(t)[0],
                    i = Math.pow(2, 32);
                return n / i
            }
        }
        return Qi(1e19) / 1e19
    }

    function i(e) {
        var t = null;
        try {
            t = JSON.parse(e)
        } catch (r) {}
        return t
    }

    function a(e, t) {
        this.lockGetPrefix = e || "lock-get-prefix", this.lockSetPrefix = t || "lock-set-prefix"
    }

    function s(e) {
        return "function" == typeof e || !(!e || "object" != typeof e) && s(e.listener)
    }

    function l() {
        this._events = {}
    }

    function u(e) {
        var t = e;
        try {
            t = decodeURIComponent(e)
        } catch (r) {
            t = e
        }
        return t
    }

    function c() {
        function e() {}
        return "function" != typeof Object.create ? (e.prototype = null, new e) : Object.create(null)
    }

    function d(e) {
        e = e || "";
        for (var t = c(), r = e.substring(1), n = r.split("&"), i = 0; i < n.length; i++) {
            var a = n[i].indexOf("=");
            if (a !== -1) {
                var o = n[i].substring(0, a),
                    s = n[i].substring(a + 1);
                o = u(o), s = u(s), t[o] = s
            }
        }
        return t
    }

    function p(e) {
        return "[object String]" == Object.prototype.toString.call(e)
    }

    function f(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function g(e) {
        var t = function(e) {
            this._fields = {
                Username: 4,
                Password: 5,
                Port: 7,
                Protocol: 2,
                Host: 6,
                Path: 8,
                URL: 0,
                QueryString: 9,
                Fragment: 10
            }, this._values = {}, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, "undefined" != typeof e && this._parse(e)
        };
        return t.prototype.setUrl = function(e) {
            this._parse(e)
        }, t.prototype._initValues = function() {
            for (var e in this._fields) this._values[e] = ""
        }, t.prototype.addQueryString = function(e) {
            if ("object" != typeof e) return !1;
            var t = this._values.QueryString || "";
            for (var r in e) t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
            this._values.QueryString = t
        }, t.prototype.getUrl = function() {
            var e = "";
            return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : "", e += this._values.Fragment ? "#" + this._values.Fragment : ""
        }, t.prototype._parse = function(e) {
            this._initValues();
            var t = this._regex.exec(e);
            t || Zi.log("URLParser::_parse -> Invalid URL");
            var r = e.split("#"),
                n = r[0],
                i = r.slice(1).join("#");
            t = this._regex.exec(n);
            for (var a in this._fields) "undefined" != typeof t[this._fields[a]] && (this._values[a] = t[this._fields[a]]);
            this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname, this._values.Fragment = i
        }, new t(e)
    }

    function _(e) {
        var t = {},
            r = function() {
                var e;
                try {
                    return e = new URL("http://modernizr.com/"), "http://modernizr.com/" === e.href
                } catch (t) {
                    return !1
                }
            };
        if ("function" == typeof window.URL && r()) t = new URL(e), t.searchParams || (t.searchParams = function() {
            var e = d(t.search);
            return {
                get: function(t) {
                    return e[t]
                }
            }
        }());
        else {
            p(e) || (e = String(e)), e = f(e);
            var n = /^https?:\/\/.+/;
            if (n.test(e) === !1) return void Zi.log("Invalid URL");
            var i = g(e);
            t.hash = i._values.Fragment, t.host = i._values.Host ? i._values.Host + (i._values.Port ? ":" + i._values.Port : "") : "", t.href = i._values.URL, t.password = i._values.Password, t.pathname = i._values.Path, t.port = i._values.Port, t.search = i._values.QueryString ? "?" + i._values.QueryString : "", t.username = i._values.Username, t.hostname = i._values.Hostname, t.protocol = i._values.Protocol ? i._values.Protocol + ":" : "", t.origin = i._values.Origin ? i._values.Origin + (i._values.Port ? ":" + i._values.Port : "") : "", t.searchParams = function() {
                var e = d("?" + i._values.QueryString);
                return {
                    get: function(t) {
                        return e[t]
                    }
                }
            }()
        }
        return t
    }

    function h(e) {
        return !(!e || 1 !== e.nodeType)
    }

    function v(e) {
        return void 0 === e
    }

    function y(t) {
        return Array.isArray && e(y) ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
    }

    function b(e) {
        return new ea(e)
    }

    function w(e, t, r, n) {
        function i(e) {
            return e && (e.preventDefault = i.preventDefault, e.stopPropagation = i.stopPropagation, e._getPath = i._getPath), e
        }

        function a(e, t, r, n) {
            var a = function(a) {
                if (a = a || i(window.event)) {
                    a.target = a.srcElement;
                    var o, s, l = !0;
                    return "function" == typeof r && (o = r(a)), s = t.call(e, a), "beforeunload" !== n ? (!1 !== o && !1 !== s || (l = !1), l) : void 0
                }
            };
            return a
        }
        i._getPath = function() {
            var e = this;
            return this.path || this.composedPath && this.composedPath() || b(e.target).getParents()
        }, i.preventDefault = function() {
            this.returnValue = !1
        }, i.stopPropagation = function() {
            this.cancelBubble = !0
        };
        var o = function(e, t, r) {
            if (void 0 === n && "click" === t && (n = !0), e && e.addEventListener) e.addEventListener(t, function(e) {
                e._getPath = i._getPath, r.call(this, e)
            }, n);
            else {
                var o = "on" + t,
                    s = e[o];
                e[o] = a(e, r, s, t)
            }
        };
        o.apply(null, arguments)
    }

    function S(e) {
        var t = "pushState" in window.history ? "popstate" : "hashchange";
        w(window, t, e)
    }

    function k(e) {
        if (e) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
        if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
        if (window.ActiveXObject) try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
                Zi.log(t)
            }
        }
    }

    function P(e, t, r) {
        if (null == e) return !1;
        if (ra && e.forEach === ra) e.forEach(t, r);
        else if (y(e))
            for (var n = 0, i = e.length; n < i; n++) n in e && t.call(r, e[n], n, e);
        else
            for (var a in e) na.call(e, a) && t.call(r, e[a], a, e)
    }

    function C(e) {
        return P(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var r in t) ia.call(t, r) && void 0 !== t[r] && (e[r] = t[r])
        }), e
    }

    function O(e) {
        function t(e) {
            if (!e) return "";
            try {
                return JSON.parse(e)
            } catch (t) {
                return {}
            }
        }

        function n() {
            try {
                i && "object" == typeof i && i.abort && i.abort()
            } catch (t) {
                Zi.log(t)
            }
            a && (clearTimeout(a), a = null, e.error && e.error(), i.onreadystatechange = null, i.onload = null, i.onerror = null)
        }
        e.timeout = e.timeout || 2e4, e.credentials = "undefined" == typeof e.credentials || e.credentials;
        var i = k(e.cors);
        if (!i) return !1;
        e.type || (e.type = e.data ? "POST" : "GET"), e = C({
            success: function() {},
            error: function() {}
        }, e);
        var a, o = e.success,
            s = e.error;
        e.success = function(e) {
            o(e), a && (clearTimeout(a), a = null)
        }, e.error = function(e) {
            s(e), a && (clearTimeout(a), a = null)
        }, a = setTimeout(function() {
            n()
        }, e.timeout), "undefined" != typeof XDomainRequest && i instanceof XDomainRequest && (i.onload = function() {
            e.success && e.success(t(i.responseText)), i.onreadystatechange = null, i.onload = null, i.onerror = null
        }, i.onerror = function() {
            e.error && e.error(t(i.responseText), i.status), i.onreadystatechange = null, i.onerror = null, i.onload = null
        }), i.onreadystatechange = function() {
            try {
                4 == i.readyState && (i.status >= 200 && i.status < 300 || 304 == i.status ? e.success(t(i.responseText)) : e.error(t(i.responseText), i.status), i.onreadystatechange = null, i.onload = null)
            } catch (r) {
                i.onreadystatechange = null, i.onload = null
            }
        }, i.open(e.type, e.url, !0);
        try {
            e.credentials && (i.withCredentials = !0), r(e.header) && P(e.header, function(e, t) {
                i.setRequestHeader && i.setRequestHeader(t, e)
            }), e.data && (e.cors || i.setRequestHeader && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === e.contentType ? i.setRequestHeader && i.setRequestHeader("Content-type", "application/json; charset=UTF-8") : i.setRequestHeader && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        } catch (l) {
            Zi.log(l)
        }
        i.send(e.data || null)
    }

    function N(e, t) {
        var r = [];
        return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (P(e, function(e, n, i) {
            r.push(t(e, n, i))
        }), r)
    }

    function j(e) {
        var t = [];
        try {
            t = N(atob(e).split(""), function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            })
        } catch (r) {
            t = []
        }
        try {
            return decodeURIComponent(t.join(""))
        } catch (r) {
            return t.join("")
        }
    }

    function I(e) {
        var t = "";
        try {
            t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
                return String.fromCharCode("0x" + t)
            }))
        } catch (r) {
            t = e
        }
        return t
    }

    function T(e, t) {
        t = t || window;
        var r = !1,
            n = !0,
            i = t.document,
            a = i.documentElement,
            o = i.addEventListener,
            s = o ? "addEventListener" : "attachEvent",
            l = o ? "removeEventListener" : "detachEvent",
            u = o ? "" : "on",
            c = function(n) {
                "readystatechange" == n.type && "complete" != i.readyState || (("load" == n.type ? t : i)[l](u + n.type, c, !1), !r && (r = !0) && e.call(t, n.type || n))
            },
            d = function() {
                try {
                    a.doScroll("left")
                } catch (e) {
                    return void setTimeout(d, 50)
                }
                c("poll")
            };
        if ("complete" == i.readyState) e.call(t, "lazy");
        else {
            if (!o && a.doScroll) {
                try {
                    n = !t.frameElement
                } catch (p) {
                    Zi.log(p)
                }
                n && d()
            }
            i[s](u + "DOMContentLoaded", c, !1), i[s](u + "readystatechange", c, !1), t[s](u + "load", c, !1)
        }
    }

    function A(e) {
        return P(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
        }), e
    }

    function D(e) {
        var t = e;
        try {
            t = decodeURI(e)
        } catch (r) {
            t = e
        }
        return t
    }

    function $(e) {
        var t = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
            r = t.length - 1,
            n = {},
            i = 0;
        for (i = 0; i < t.length; i++) n[t.charAt(i)] = t.charAt(r - i);
        var a = "";
        for (i = 0; i < e.length; i++) a += e.charAt(i) in n ? n[e.charAt(i)] : e.charAt(i);
        return a
    }

    function x(e) {
        return "[object Date]" == Object.prototype.toString.call(e)
    }

    function E(e) {
        function t(e) {
            return e < 10 ? "0" + e : e
        }
        return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
    }

    function L(e) {
        return P(e, function(t, n) {
            x(t) ? e[n] = E(t) : r(t) && (e[n] = L(t))
        }), e
    }

    function U(e) {
        return P(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var n in t) void 0 !== t[n] && (r(t[n]) && r(e[n]) ? C(e[n], t[n]) : e[n] = t[n])
        }), e
    }

    function R(e, t, r) {
        var n = Object.prototype.hasOwnProperty;
        if (e.filter) return e.filter(t);
        for (var i = [], a = 0; a < e.length; a++)
            if (n.call(e, a)) {
                var o = e[a];
                t.call(r, o, a, e) && i.push(o)
            }
        return i
    }

    function B(e) {
        try {
            return JSON.stringify(e, null, "  ")
        } catch (t) {
            return JSON.stringify(e)
        }
    }

    function H(e) {
        return "string" == typeof e && e.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/) ? e : ""
    }

    function J(e, t, r) {
        e = e || location.hostname, t = t || "domain_test";
        var n = H(e),
            i = n.split(".");
        if (y(i) && i.length >= 2 && !/^(\d+\.)+\d+$/.test(n))
            for (var a = "." + i.splice(i.length - 1, 1); i.length > 0;)
                if (a = "." + i.splice(i.length - 1, 1) + a, aa.set(t, "true", 0, null, r, "; domain=" + a), document.cookie.indexOf(t + "=true") !== -1) return aa.set(t, "true", "-1s", null, r, "; domain=" + a), a;
        return ""
    }

    function M(e) {
        function t(e, t) {
            e = f(e);
            var r;
            if ("body" === e) return document.getElementsByTagName("body")[0];
            if (0 === e.indexOf("#")) e = e.slice(1), r = document.getElementById(e);
            else if (e.indexOf(":nth-of-type") > -1) {
                var n = e.split(":nth-of-type");
                if (!n[0] || !n[1]) return null;
                var i = n[0],
                    a = n[1].match(/\(([0-9]+)\)/);
                if (!a || !a[1]) return null;
                var o = Number(a[1]);
                if (!(h(t) && t.children && t.children.length > 0)) return null;
                for (var s = t.children, l = 0; l < s.length; l++)
                    if (h(s[l])) {
                        var u = s[l].tagName.toLowerCase();
                        if (u === i && (o--, 0 === o)) {
                            r = s[l];
                            break
                        }
                    }
                if (o > 0) return null
            }
            return r ? r : null
        }

        function r(e) {
            var i, a = n.shift();
            if (!a) return e;
            try {
                i = t(a, e)
            } catch (o) {
                Zi.log(o)
            }
            return i && h(i) ? r(i) : null
        }
        if (!p(e)) return null;
        var n = e.split(">"),
            i = null;
        return i = r(), i && h(i) ? i : null
    }

    function q(e, t) {
        var r = "",
            n = "";
        return e.textContent ? r = f(e.textContent) : e.innerText && (r = f(e.innerText)), r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n = r || "", "input" !== t && "INPUT" !== t || (n = e.value || ""), n
    }

    function K(e, t) {
        t && "string" == typeof t || (t = "hostname\u89e3\u6790\u5f02\u5e38");
        var r = null;
        try {
            r = _(e).hostname
        } catch (n) {
            Zi.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
        }
        return r || t
    }

    function F() {
        try {
            var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
            return e && e[1] ? Number.parseInt(e[1], 10) : ""
        } catch (t) {
            return ""
        }
    }

    function V(e, t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = u(e);
        var r = "[\\?&]" + t + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(e);
        return null === i || i && "string" != typeof i[1] && i[1].length ? "" : u(i[1])
    }

    function W(e) {
        var t = {},
            r = e.split("?"),
            n = r[1] || "";
        return n && (t = d("?" + n)), t
    }

    function z() {
        return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
    }

    function X() {
        var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
            t = "\u672a\u53d6\u5230\u503c";
        if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
        else if (z()) {
            var r = window.matchMedia || window.msMatchMedia;
            r("(orientation: landscape)").matches ? t = "landscape" : r("(orientation: portrait)").matches && (t = "portrait")
        }
        return t
    }

    function Z() {
        var e, t = {},
            r = navigator.userAgent.toLowerCase();
        return (e = r.match(/ qq\/([\d.]+)/)) ? t.qqBuildinBrowser = Number(e[1].split(".")[0]) : (e = r.match(/mqqbrowser\/([\d.]+)/)) ? t.qqBrowser = Number(e[1].split(".")[0]) : (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11), t
    }

    function G(e) {
        return p(e) ? (e = f(e), D(e)) : D(location.href)
    }

    function Q(e) {
        return p(e) ? (e = f(e), D(e)) : D(location.pathname)
    }

    function Y(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
    }

    function ee(e, t) {
        if ("string" == typeof t) return Y(e, t);
        if (y(t)) {
            for (var r = !1, n = 0; n < t.length; n++) {
                var i = Y(e, t[n]);
                if (i) {
                    r = !0;
                    break
                }
            }
            return r
        }
    }

    function te(e) {
        if ("string" != typeof e) return 0;
        var t = 0,
            r = null;
        if (0 == e.length) return t;
        for (var n = 0; n < e.length; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, t &= t;
        return t
    }

    function re(e) {
        var t = 9007199254740992,
            r = -9007199254740992,
            n = 31,
            i = 0;
        if (e.length > 0)
            for (var a = e.split(""), o = 0; o < a.length; o++) {
                var s = a[o].charCodeAt(),
                    l = n * i + s;
                if (l > t)
                    for (i = r + i; l = n * i + s, l < r;) i = i / 2 + s;
                if (l < r)
                    for (i = t + i; l = n * i + s, l > t;) i = i / 2 + s;
                i = n * i + s
            }
        return i
    }

    function ne(e, t) {
        var r = e.indexOf;
        if (r) return r.call(e, t);
        for (var n = 0; n < e.length; n++)
            if (t === e[n]) return n;
        return -1
    }

    function ie(e, t) {
        return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
    }

    function ae(e) {
        return !(!e || !oa.call(e, "callee"))
    }

    function oe(e) {
        return "[object Boolean]" == Object.prototype.toString.call(e)
    }

    function se(e) {
        if (r(e)) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0
        }
        return !1
    }

    function le(e) {
        if ("string" != typeof e) return !1;
        var t = /^https?:\/\/.+/;
        return t.test(e) !== !1 || (Zi.log("Invalid URL"), !1)
    }

    function ue() {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    }

    function ce(e) {
        try {
            JSON.parse(e)
        } catch (t) {
            return !1
        }
        return !0
    }

    function de(e) {
        return "[object Number]" == Object.prototype.toString.call(e) && /[\d\.]+/.test(String(e))
    }

    function pe() {
        var e = !1;
        if ("object" != typeof navigator || "function" != typeof navigator.sendBeacon) return e;
        var t = Z(),
            r = navigator.userAgent.toLowerCase();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var n = /os [\d._]*/gi,
                i = r.match(n),
                a = (i + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                o = a.split(".");
            "undefined" == typeof t.safari && (t.safari = o[0]), o[0] && (t.qqBuildinBrowser || t.qqBrowser) ? e = !1 : o[0] && o[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0) : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0)
        } else(t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
        return e
    }

    function fe() {
        return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
    }

    function ge(t) {
        if (!r(t) || !p(t.callbackName)) return Zi.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
        t.success = e(t.success) ? t.success : function() {}, t.error = e(t.error) ? t.error : function() {}, t.data = t.data || "";
        var n = document.createElement("script"),
            i = document.getElementsByTagName("head")[0],
            a = null,
            o = !1;
        if (i.appendChild(n), de(t.timeout) && (a = setTimeout(function() {
                return !o && (t.error("timeout"), window[t.callbackName] = function() {
                    Zi.log("call jsonp error")
                }, a = null, i.removeChild(n), void(o = !0))
            }, t.timeout)), window[t.callbackName] = function() {
                clearTimeout(a), a = null, t.success.apply(null, arguments), window[t.callbackName] = function() {
                    Zi.log("call jsonp error")
                }, i.removeChild(n)
            }, t.url.indexOf("?") > -1 ? t.url += "&callbackName=" + t.callbackName : t.url += "?callbackName=" + t.callbackName, r(t.data)) {
            var s = [];
            P(t.data, function(e, t) {
                s.push(t + "=" + e)
            }), t.data = s.join("&"), t.url += "&" + t.data
        }
        n.onerror = function(e) {
            return !o && (window[t.callbackName] = function() {
                Zi.log("call jsonp error")
            }, clearTimeout(a), a = null, i.removeChild(n), t.error(e), void(o = !0))
        }, n.src = t.url
    }

    function _e(t) {
        var r = {
            visibleHandler: e(t.visible) ? t.visible : function() {},
            hiddenHandler: e(t.hidden) ? t.hidden : function() {},
            visibilityChange: null,
            hidden: null,
            isSupport: function() {
                return "undefined" != typeof document[this.hidden]
            },
            init: function() {
                "undefined" != typeof document.hidden ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.listen()
            },
            listen: function() {
                if (this.isSupport()) {
                    var e = this;
                    w(document, this.visibilityChange, function() {
                        document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
                    }, 1)
                } else w(window, "focus", this.visibleHandler), w(window, "blur", this.hiddenHandler)
            }
        };
        r.init()
    }

    function he(e) {
        e = C({
            success: function() {},
            error: function() {},
            appendCall: function(e) {
                document.getElementsByTagName("head")[0].appendChild(e)
            }
        }, e);
        var t = null;
        "css" === e.type && (t = document.createElement("link"), t.rel = "stylesheet", t.href = e.url), "js" === e.type && (t = document.createElement("script"), t.async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), t.onload = t.onreadystatechange = null)
        }, t.onerror = function() {
            e.error(), t.onerror = null
        }, e.appendCall(t)
    }

    function me(e) {
        if ("string" != typeof e) return "";
        for (var t = /^\s*javascript/i; t.test(e);) e = e.replace(t, "");
        return e
    }

    function ve(e, t) {
        e = String(e), t = "number" == typeof t ? t : 13;
        for (var r = 126, n = e.split(""), i = 0, a = n.length; i < a; i++) {
            var o = n[i].charCodeAt(0);
            o < r && (n[i] = String.fromCharCode((n[i].charCodeAt(0) + t) % r))
        }
        return n.join("")
    }

    function ye(e) {
        var t = 13,
            r = 126;
        return e = String(e), ve(e, r - t)
    }

    function be(e) {
        r(e) && P(e, function(t, n) {
            r(t) ? be(e[n]) : x(t) && (e[n] = E(t))
        })
    }

    function we(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        try {
            t.appendChild(document.createTextNode(e))
        } catch (r) {
            t.styleSheet.cssText = e
        }
        var n = document.getElementsByTagName("head")[0],
            i = document.getElementsByTagName("script")[0];
        n ? n.children.length ? n.insertBefore(t, n.children[0]) : n.appendChild(t) : i.parentNode.insertBefore(t, i)
    }

    function Se(e) {
        if ("string" != typeof e) return Zi.log("\u8f6c\u6362unicode\u9519\u8bef", e), e;
        for (var t = "", r = 0; r < e.length; r++) t += "\\" + e.charCodeAt(r).toString(16);
        return t
    }

    function ke(e, r, n) {
        var i, a, o, s = null,
            l = 0;
        n || (n = {});
        var u = function() {
            l = n.leading === !1 ? 0 : t(), s = null, o = e.apply(i, a), s || (i = a = null)
        };
        return function() {
            var c = t();
            l || n.leading !== !1 || (l = c);
            var d = r - (c - l);
            return i = this, a = arguments, d <= 0 || d > r ? (s && (clearTimeout(s), s = null), l = c, o = e.apply(i, a), s || (i = a = null)) : s || n.trailing === !1 || (s = setTimeout(u, d)), o
        }
    }

    function Pe(e) {
        var t = [];
        return null == e ? t : (P(e, function(e) {
            t[t.length] = e
        }), t)
    }

    function Ce(e) {
        return e ? e.toArray ? e.toArray() : y(e) || ae(e) ? Array.prototype.slice.call(e) : Pe(e) : []
    }

    function Oe(e) {
        for (var t, r = [], n = {}, i = 0; i < e.length; i++) t = e[i], t in n || (n[t] = !0, r.push(t));
        return r
    }

    function Ne(e, t, r) {
        return r = r || 0, e.substr(r, t.length) === t
    }

    function je() {
        fa.msg.apply(fa, arguments).log()
    }

    function Ie() {
        fa.msg.apply(fa, arguments).level("warn").log()
    }

    function Te() {
        fa.msg.apply(fa, arguments).level("error").log()
    }

    function Ae(e) {
        var t = ga.current_domain;
        switch (typeof t) {
            case "function":
                var r = t();
                return "" === r || "" === f(r) ? "url\u89e3\u6790\u5931\u8d25" : r.indexOf(".") !== -1 ? r : "url\u89e3\u6790\u5931\u8d25";
            case "string":
                return "" === t || "" === f(t) ? "url\u89e3\u6790\u5931\u8d25" : t.indexOf(".") !== -1 ? t : "url\u89e3\u6790\u5931\u8d25";
            default:
                var n = J(null, va, ga.is_secure_cookie);
                return "" === e ? "url\u89e3\u6790\u5931\u8d25" : "" === n ? "url\u89e3\u6790\u5931\u8d25" : n
        }
    }

    function De(e, t) {
        var r = "";
        if (ga.cross_subdomain === !1) {
            try {
                if (t) r = _(t).hostname;
                else {
                    var n = location.host;
                    v(zi.para.white_list[n]) || (r = zi.para.white_list[n])
                }
            } catch (i) {
                Te(i)
            }
            r = "string" == typeof r && "" !== r ? "sajssdk_2015_" + ga.sdk_id + e + "_" + r.replace(/\./g, "_") : "sajssdk_2015_root_" + ga.sdk_id + e
        } else r = "sajssdk_2015_cross_" + ga.sdk_id + e;
        return r
    }

    function $e() {
        var e = "new_user";
        return ba.isSupport() ? null !== ba.get("sensorsdata_is_new_user") || null !== ba.get(De(e)) : null !== wa.get(wa.getNewUserFlagMemoryKey(e))
    }

    function xe(e, t, n) {
        var i = !(!r(ga.heatmap) || !ga.heatmap.useCapture);
        return r(ga.heatmap) && v(ga.heatmap.useCapture) && "click" === t && (i = !0), w(e, t, n, i)
    }

    function Ee() {
        var e = document.referrer,
            t = "baidu.com";
        if (!e) return !1;
        try {
            var r = _(e).hostname;
            return r && r.substring(r.length - t.length) === t
        } catch (n) {
            return !1
        }
    }

    function Le() {
        var e = W(document.referrer);
        if (se(e) || !e.eqid) {
            var t = W(location.href);
            return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
        }
        return "baidu_seo_keyword_id"
    }

    function Ue() {
        var e = W(document.referrer);
        return se(e) || !e.eqid ? Yi().replace(/-/g, "") : e.eqid
    }

    function Re(e, t) {
        return e = e || document.referrer, p(e) ? (e = f(e), e = D(e), 0 !== e.indexOf("https://www.baidu.com/") || t || (e = e.split("?")[0]), e = e.slice(0, ga.max_referrer_string_length), p(e) ? e : "") : "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
    }

    function Be(e) {
        if (e = e || document.referrer, "" === e) return !0;
        var t = J(null, va, ga.is_secure_cookie),
            r = K(e);
        return r = "." + r, r.indexOf(t) === -1 && "" !== t
    }

    function He(e, t) {
        e = e || document.referrer;
        var n = ga.source_type.keyword;
        if (document && p(e)) {
            if (0 === e.indexOf("http")) {
                var i = Je(e),
                    a = W(e);
                if (se(a)) return ga.preset_properties.search_keyword_baidu && Ee() ? void 0 : "\u672a\u53d6\u5230\u503c";
                var o = null;
                for (var s in n)
                    if (i === s && r(a))
                        if (o = n[s], y(o))
                            for (s = 0; s < o.length; s++) {
                                var l = a[o[s]];
                                if (l) return t ? {
                                    active: l
                                } : l
                            } else if (a[o]) return t ? {
                                active: a[o]
                            } : a[o];
                return ga.preset_properties.search_keyword_baidu && Ee() ? void 0 : "\u672a\u53d6\u5230\u503c"
            }
            return "" === e ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
        }
        return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
    }

    function Je(e) {
        var t = K(e);
        if (!t || "hostname\u89e3\u6790\u5f02\u5e38" === t) return "";
        var r = {
            baidu: [/^.*\.baidu\.com$/],
            bing: [/^.*\.bing\.com$/],
            google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
            sm: [/^m\.sm\.cn$/],
            so: [/^.+\.so\.com$/],
            sogou: [/^.*\.sogou\.com$/],
            yahoo: [/^.*\.yahoo\.com$/]
        };
        for (var n in r)
            for (var i = r[n], a = 0, o = i.length; a < o; a++)
                if (i[a].test(t)) return n;
        return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
    }

    function Me() {
        function e(e, t) {
            for (var r = 0; r < e.length; r++)
                if (t.split("?")[0].indexOf(e[r]) !== -1) return !0
        }
        var t = "(" + ga.source_type.utm.join("|") + ")\\=[^&]+",
            r = ga.source_type.search,
            n = ga.source_type.social,
            i = document.referrer || "",
            a = Oa.pageProp.url;
        if (a) {
            var o = a.match(new RegExp(t));
            return o && o[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : e(r, i) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" : e(n, i) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === i ? "\u76f4\u63a5\u6d41\u91cf" : "\u5f15\u8350\u6d41\u91cf"
        }
        return "\u83b7\u53d6url\u5f02\u5e38"
    }

    function qe(e) {
        var t = V(e, "gdt_vid"),
            r = V(e, "hash_key"),
            n = V(e, "callbacks"),
            i = {
                click_id: "",
                hash_key: "",
                callbacks: ""
            };
        return p(t) && t.length && (i.click_id = 16 == t.length || 18 == t.length ? t : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5", p(r) && r.length && (i.hash_key = r), p(n) && n.length && (i.callbacks = n)), i
    }

    function Ke(t) {
        var n = t.properties,
            i = JSON.parse(JSON.stringify(t));
        r(n) && P(n, function(t, r) {
            if (e(t)) try {
                n[r] = t(i), e(n[r]) && (Ie("\u60a8\u7684\u5c5e\u6027- " + r + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete n[r])
            } catch (a) {
                delete n[r], Ie("\u60a8\u7684\u5c5e\u6027- " + r + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
            }
        })
    }

    function Fe(e) {
        if (r(e) && e.$option) {
            var t = e.$option;
            return delete e.$option, t
        }
        return {}
    }

    function Ve(e) {
        var t = {};
        return P(e, function(e, r) {
            null != e && (t[r] = e)
        }), t
    }

    function We(e) {
        var t = !e.type || "profile" !== e.type.slice(0, 7),
            n = "\u53d6\u503c\u5f02\u5e38";
        r(e.properties) && t && ("$referrer" in e.properties && (e.properties.$referrer_host = "" === e.properties.$referrer ? "" : K(e.properties.$referrer, n)), ga.preset_properties.latest_referrer && ga.preset_properties.latest_referrer_host && (e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : K(e.properties.$latest_referrer, n)))
    }

    function ze(e) {
        var t = !e.type || "profile" !== e.type.slice(0, 7),
            r = ga.preset_properties && t;
        r && ga.preset_properties.url && v(e.properties.$url) && (e.properties.$url = G()), r && ga.preset_properties.title && v(e.properties.$title) && (e.properties.$title = document.title)
    }

    function Xe(e) {
        if (!h(e.target)) return !1;
        var t = e.target,
            r = p(t.tagName) ? t.tagName.toLowerCase() : "unknown",
            n = {};
        return n.$element_type = r, n.$element_name = t.getAttribute("name"), n.$element_id = t.getAttribute("id"), n.$element_class_name = p(t.className) ? t.className : null, n.$element_target_url = t.getAttribute("href"), n.$element_content = Ge(t, r), n = Ve(n), n.$url = G(), n.$url_path = Q(), n.$title = document.title, n
    }

    function Ze(t) {
        var r = ga.heatmap && e(ga.heatmap.collect_input) && ga.heatmap.collect_input(t);
        return "button" === t.type || "submit" === t.type || r ? t.value || "" : ""
    }

    function Ge(e, t) {
        return p(t) && "input" === t.toLowerCase() ? Ze(e) : q(e, t)
    }

    function Qe(e) {
        return Ca.protocol.ajax(e.url), O(e)
    }

    function Ye(e) {
        if ("string" == typeof e && (e = f(e), e && ("://" === e.slice(0, 3) ? e = location.protocol.slice(0, -1) + e : "//" === e.slice(0, 2) ? e = location.protocol + e : "http" !== e.slice(0, 4) && (e = ""))), y(e) && e.length)
            for (var t = 0; t < e.length; t++) /sa\.gif[^\/]*$/.test(e[t]) || (e[t] = e[t].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        else /sa\.gif[^\/]*$/.test(e) || "string" != typeof e || (e = e.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        return e
    }

    function et(e) {
        p(e) || (e = JSON.stringify(e));
        var t = I(e),
            r = "crc=" + te(t);
        return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r)
    }

    function tt(t) {
        var r = location.href,
            n = window.history.pushState,
            i = window.history.replaceState;
        e(window.history.pushState) && (window.history.pushState = function() {
            n.apply(window.history, arguments), t(r), r = location.href
        }), e(window.history.replaceState) && (window.history.replaceState = function() {
            i.apply(window.history, arguments), t(r), r = location.href
        });
        var a;
        a = window.document.documentMode ? "hashchange" : n ? "popstate" : "hashchange", w(window, a, function() {
            t(r), r = location.href
        })
    }

    function rt(e, t) {
        var r = [];
        "string" == typeof e && e in Na.EVENT_LIST && (r = Na.EVENT_LIST[e], Na[r[0]].on(r[1], t))
    }

    function nt() {
        this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1
    }

    function it(e, t) {
        for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r) && !Ba.check(r, e[r], t)) return !1;
        return !0
    }

    function at(t, n) {
        return r(t) ? (P(t, function(i, a) {
            if (y(i)) {
                var o = [];
                P(i, function(e) {
                    if (p(e)) o.push(e);
                    else if (v(e)) o.push("null");
                    else try {
                        o.push(JSON.stringify(e))
                    } catch (t) {
                        Ie("\u60a8\u7684\u6570\u636e-", a, i, "\u6570\u7ec4\u91cc\u503c\u6709\u9519\u8bef,\u5df2\u5c06\u5176\u5220\u9664")
                    }
                }), t[a] = o
            }
            var s = ne(n || [], a) > -1;
            if (r(i) && "$option" !== a && !s) try {
                t[a] = JSON.stringify(i)
            } catch (l) {
                delete t[a], Ie("\u60a8\u7684\u6570\u636e-", a, i, "\u6570\u636e\u503c\u6709\u9519\u8bef\uff0c\u5df2\u5c06\u5176\u5220\u9664")
            } else p(i) || de(i) || x(i) || oe(i) || y(i) || e(i) || "$option" === a || s || (Ie("\u60a8\u7684\u6570\u636e-", a, i, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete t[a])
        }), t) : t
    }

    function ot(e, t) {
        return de(t) && e.length > t ? (Ie("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, t)) : e
    }

    function st(e, t) {
        var n = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"];
        r(e) && P(n, function(r, n) {
            r in e && (ne(t || [], r) > -1 || (n < 3 ? (delete e[r], Ie("\u60a8\u7684\u5c5e\u6027- " + r + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")) : Ie("\u60a8\u7684\u5c5e\u6027- " + r + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d")))
        })
    }

    function lt(e) {
        var t = ["$element_selector", "$element_path"],
            n = ["sensorsdata_app_visual_properties"];
        r(e) && P(e, function(i, a) {
            if (r(i)) lt(e[a]);
            else if (p(i)) {
                if (ne(n, a) > -1) return;
                e[a] = ot(i, ne(t, a) > -1 ? 1024 : ga.max_string_length)
            }
        })
    }

    function ut(e) {
        "undefined" != typeof e.properties.$project && (e.project = e.properties.$project, delete e.properties.$project), "undefined" != typeof e.properties.$token && (e.token = e.properties.$token, delete e.properties.$token)
    }

    function ct(e) {
        if ("item_type" in e) {
            var t = e.item_type,
                r = function(t) {
                    return t || delete e.item_type, !0
                };
            it({
                item_type: t
            }, r)
        }
        if ("item_id" in e) {
            var n = e.item_id,
                i = function(t, r, n) {
                    return t || "string" !== n || delete e.item_id, !0
                };
            it({
                item_id: n
            }, i)
        }
    }

    function dt(e, t) {
        P(e, function(r, n) {
            var i = function(t, r, i) {
                return t || "keyLength" === i || delete e[n], !0
            };
            ne(t || [], n) === -1 && it({
                propertyKey: n
            }, i)
        })
    }

    function pt(e) {
        var t = e.properties;
        be(e), r(t) ? (at(t), st(t), ut(e), dt(t), lt(t)) : "properties" in e && (e.properties = {}), ct(e)
    }

    function ft(e, t) {
        var r = t.sensors;
        return e._track_id = Number(String(n()).slice(2, 5) + String(n()).slice(2, 4) + String((new Date).getTime()).slice(-4)), e._flush_time = (new Date).getTime(), r.events.tempAdd("send", e), e
    }

    function gt(e, t) {
        try {
            var n = t.sensors,
                i = {};
            r(e) && r(e.identities) && !se(e.identities) ? C(i, e.identities) : C(i, La.getIdentities());
            var a = {
                identities: i,
                distinct_id: La.getDistinctId(),
                lib: {
                    $lib: "js",
                    $lib_method: "code",
                    $lib_version: String(n.lib_version)
                },
                properties: {}
            };
            return r(e) && r(e.properties) && !se(e.properties) && (e.properties.$lib_detail && (a.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), e.properties.$lib_method && (a.lib.$lib_method = e.properties.$lib_method, delete e.properties.$lib_method)), U(a, La.getUnionId(), e), r(e.properties) && !se(e.properties) && C(a.properties, e.properties), "$UnbindID" === a.event && (a.login_id && delete a.login_id, a.anonymous_id && delete a.anonymous_id), e.type && "profile" === e.type.slice(0, 7) || (a.properties = C({}, Oa.properties(), La.getProps(), La.getSessionProps(), Oa.currentProps, a.properties), n.para.preset_properties.latest_referrer && !p(a.properties.$latest_referrer) && (a.properties.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"), n.para.preset_properties.latest_search_keyword && !p(a.properties.$latest_search_keyword) && (n.para.preset_properties.search_keyword_baidu && p(a.properties.$search_keyword_id) && de(a.properties.$search_keyword_id_hash) && p(a.properties.$search_keyword_id_type) || (a.properties.$latest_search_keyword = "\u53d6\u503c\u5f02\u5e38")), n.para.preset_properties.latest_traffic_source_type && !p(a.properties.$latest_traffic_source_type) && (a.properties.$latest_traffic_source_type = "\u53d6\u503c\u5f02\u5e38"), n.para.preset_properties.latest_landing_page && !p(a.properties.$latest_landing_page) && (a.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"), "not_collect" === n.para.preset_properties.latest_wx_ad_click_id ? (delete a.properties._latest_wx_ad_click_id, delete a.properties._latest_wx_ad_hash_key, delete a.properties._latest_wx_ad_callbacks) : n.para.preset_properties.latest_wx_ad_click_id && !p(a.properties._latest_wx_ad_click_id) && (a.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38", a.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38", a.properties._latest_wx_ad_callbacks = "\u53d6\u503c\u5f02\u5e38"), p(a.properties._latest_wx_ad_click_id) && (a.properties.$url = G())), a.properties.$time && x(a.properties.$time) ? (a.time = 1 * a.properties.$time, delete a.properties.$time) : a.time = 1 * new Date,
                function(e) {
                    if (n.bridge && "success" === n.bridge.bridge_info.verify_success) {
                        var t = Ma.customProp.geth5Props(JSON.parse(JSON.stringify(e)));
                        r(t) && !se(t) && (e.properties = C(e.properties, t))
                    }
                    var i = Fa.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)));
                    r(i) && !se(i) && (e.properties = C(e.properties, i))
                }(a), Ke(a), Sa.checkIsAddSign(a), Sa.checkIsFirstTime(a), We(a), ze(a), a
        } catch (o) {
            return {
                _debug_web_msg: String(o)
            }
        }
    }

    function _t(e) {
        return Wa.stage.process("basicProps", e)
    }

    function ht(e) {
        return Wa.stage.process("formatData", e)
    }

    function mt(e, t, r, n) {
        function i(e) {
            function i() {
                o || (o = !0, location.href = a.href)
            }
            e.stopPropagation(), e.preventDefault();
            var o = !1;
            setTimeout(i, 1e3), n(t, r, i)
        }
        e = e || {};
        var a = null;
        return e.ele && (a = e.ele), e.event && (a = e.target ? e.target : e.event.target), r = r || {}, !(!a || "object" != typeof a) && (!a.href || /^javascript/.test(a.href) || a.target || a.download || a.onclick ? (n(t, r), !1) : (e.event && i(e.event), void(e.ele && xe(e.ele, "click", function(e) {
            i(e)
        }))))
    }

    function vt() {
        var e = location.protocol;
        return "http:" === e || "https:" === e ? e : "http:"
    }

    function yt(e) {
        return Xa.stage.process("webClickEvent", e)
    }

    function bt(e) {
        return Xa.stage.process("webStayEvent", e)
    }

    function wt() {
        var e = Oa.campaignParams(),
            t = {};
        return P(e, function(e, r, n) {
            (" " + zi.source_channel_standard + " ").indexOf(" " + r + " ") !== -1 ? t["$" + r] = n[r] : t[r] = n[r]
        }), t
    }

    function St(e, t, r) {
        if (zi.is_first_visitor && r) {
            var n = {};
            zi.para.preset_properties.search_keyword_baidu && Be(document.referrer) && Ee() && (n.$search_keyword_id = Pa.id(), n.$search_keyword_id_type = Pa.type(), n.$search_keyword_id_hash = re(n.$search_keyword_id));
            var i = Re(null, t);
            e(C({
                $first_visit_time: new Date,
                $first_referrer: i,
                $first_referrer_host: i ? K(i, "\u53d6\u503c\u5f02\u5e38") : "",
                $first_browser_language: p(navigator.language) ? navigator.language.toLowerCase() : "\u53d6\u503c\u5f02\u5e38",
                $first_browser_charset: p(document.charset) ? document.charset.toUpperCase() : "\u53d6\u503c\u5f02\u5e38",
                $first_traffic_source_type: Me(),
                $first_search_keyword: He()
            }, wt(), n)), zi.is_first_visitor = !1
        }
    }

    function kt(e, t) {
        var n = e.id,
            i = e.callback,
            a = e.name,
            o = La.getFirstId(),
            s = La.getOriginDistinctId();
        if (!it({
                distinct_id: n
            })) return Te("login id is invalid"), !1;
        if (n === La.getOriginDistinctId() && !o) return Te("login id is equal to distinct_id"), !1;
        if (r(La._state.identities) && La._state.identities.hasOwnProperty(a) && n === La._state.first_id) return !1;
        var l = La._state.history_login_id.name !== a || n !== La._state.history_login_id.value;
        if (l) {
            La._state.identities[a] = n, La.set("history_login_id", {
                name: a,
                value: n
            }), o || La.set("first_id", s), t(n, "$SignUp", {}, i);
            var u = {
                $identity_cookie_id: La._state.identities.$identity_cookie_id
            };
            return u[a] = n, Pt(u), !0
        }
        return !1
    }

    function Pt(e) {
        var t = {};
        for (var r in e) t[r] = e[r];
        La._state.identities = t, La.save()
    }

    function Ct(e, t) {
        if (!it({
                unbindKey: e,
                bindValue: t
            })) return !1;
        if (r(La._state.identities) && La._state.identities.hasOwnProperty(e) && La._state.identities[e] === t) {
            var n = La.getUnionId().login_id;
            n && e + "+" + t === n && (La._state.distinct_id = La._state.first_id, La._state.first_id = "", La.set("history_login_id", {
                name: "",
                value: ""
            })), "$identity_cookie_id" !== e && (delete La._state.identities[e], La.save())
        }
        var i = {};
        return i[e] = t, i
    }

    function Ot() {
        zi._t = zi._t || 1 * new Date, zi.is_first_visitor = !1, zi.source_channel_standard = ha
    }

    function Nt(e) {
        C(ga, e || zi.para || {}), zi.para = ga;
        var t = {};
        if (r(zi.para.is_track_latest))
            for (var n in zi.para.is_track_latest) t["latest_" + n] = zi.para.is_track_latest[n];
        zi.para.preset_properties = C({}, _a.preset_properties, t, zi.para.preset_properties || {});
        var i;
        for (i in _a) void 0 === zi.para[i] && (zi.para[i] = _a[i]);
        "string" != typeof zi.para.web_url || "://" !== zi.para.web_url.slice(0, 3) && "//" !== zi.para.web_url.slice(0, 2) || ("://" === zi.para.web_url.slice(0, 3) ? zi.para.web_url = location.protocol.slice(0, -1) + zi.para.web_url : zi.para.web_url = location.protocol + zi.para.web_url), Ca.protocol.serverUrl(), zi.bridge && zi.bridge.initPara();
        var a = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
            o = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
            s = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
            l = {
                baidu: ["wd", "word", "kw", "keyword"],
                google: "q",
                bing: "q",
                yahoo: "p",
                sogou: ["query", "keyword"],
                so: "q",
                sm: "q"
            };
        "object" == typeof zi.para.source_type && (zi.para.source_type.utm = y(zi.para.source_type.utm) ? zi.para.source_type.utm.concat(a) : a, zi.para.source_type.search = y(zi.para.source_type.search) ? zi.para.source_type.search.concat(o) : o, zi.para.source_type.social = y(zi.para.source_type.social) ? zi.para.source_type.social.concat(s) : s, zi.para.source_type.keyword = r(zi.para.source_type.keyword) ? C(l, zi.para.source_type.keyword) : l);
        var u = {
                div: !1
            },
            c = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
        if (zi.para.heatmap && !r(zi.para.heatmap) && (zi.para.heatmap = {}), r(zi.para.heatmap)) {
            zi.para.heatmap.clickmap = zi.para.heatmap.clickmap || "default", zi.para.heatmap.scroll_notice_map = zi.para.heatmap.scroll_notice_map || "default", zi.para.heatmap.scroll_delay_time = zi.para.heatmap.scroll_delay_time || 4e3, zi.para.heatmap.scroll_event_duration = zi.para.heatmap.scroll_event_duration || 18e3, zi.para.heatmap.renderRefreshTime = zi.para.heatmap.renderRefreshTime || 1e3, zi.para.heatmap.loadTimeout = zi.para.heatmap.loadTimeout || 1e3, zi.para.heatmap.get_vtrack_config !== !0 && (zi.para.heatmap.get_vtrack_config = !1);
            var d = y(zi.para.heatmap.track_attr) ? R(zi.para.heatmap.track_attr, function(e) {
                return e && "string" == typeof e
            }) : [];
            if (d.push("data-sensors-click"), zi.para.heatmap.track_attr = d, r(zi.para.heatmap.collect_tags))
                if (zi.para.heatmap.collect_tags.div === !0) zi.para.heatmap.collect_tags.div = {
                    ignore_tags: c,
                    max_level: 1
                };
                else if (r(zi.para.heatmap.collect_tags.div)) {
                if (zi.para.heatmap.collect_tags.div.ignore_tags ? y(zi.para.heatmap.collect_tags.div.ignore_tags) || (Ie("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"), zi.para.heatmap.collect_tags.div.ignore_tags = c) : zi.para.heatmap.collect_tags.div.ignore_tags = c, zi.para.heatmap.collect_tags.div.max_level) {
                    var p = [1, 2, 3];
                    ne(p, zi.para.heatmap.collect_tags.div.max_level) === -1 && (zi.para.heatmap.collect_tags.div.max_level = 1)
                }
            } else zi.para.heatmap.collect_tags.div = !1;
            else zi.para.heatmap.collect_tags = u
        }
        zi.para.server_url = Ye(zi.para.server_url), zi.para.noCache === !0 ? zi.para.noCache = "?" + (new Date).getTime() : zi.para.noCache = "", zi.para.callback_timeout > zi.para.datasend_timeout && (zi.para.datasend_timeout = zi.para.callback_timeout), zi.para.heatmap && zi.para.heatmap.collect_tags && r(zi.para.heatmap.collect_tags) && P(zi.para.heatmap.collect_tags, function(e, t) {
            "div" !== t && e && zi.heatmap.otherTags.push(t)
        }), zi.para.heatmap && "default" === zi.para.heatmap.clickmap && zi.heatmap.initUnlimitedTags()
    }

    function jt() {
        var e = Array.prototype.slice.call(arguments),
            t = e[0],
            r = e.slice(1);
        return "string" == typeof t && Qa[t] ? Qa[t].apply(Qa, r) : void("function" == typeof t ? t.apply(zi, r) : Ie("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + e[0]))
    }

    function It(t, n) {
        function i() {
            return !a.plugin_is_init && a.init(zi, n), a.plugin_is_init = !0, zi.modules = zi.modules || {}, zi.modules[a.plugin_name || "unnamed_" + eo++] = a, a
        }
        if (!p(t) && !r(t)) return void Te("use's first arguments must be string or object.");
        var a;
        if (r(t)) {
            var o = zi.modules && zi.modules[t.plugin_name];
            o && o !== t && Ie(t.name + " is conflict with builtin plugin, and sdk uses builtin plugin."), a = o || t
        }
        return p(t) && (r(zi.modules) && r(zi.modules[t]) ? a = zi.modules[t] : r(window.SensorsDataWebJSSDKPlugin) && r(window.SensorsDataWebJSSDKPlugin[t]) ? a = window.SensorsDataWebJSSDKPlugin[t] : window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.modules[t] && (a = window.sensorsDataAnalytic201505.modules[t])), a && e(a.init) ? a.plugin_is_init ? a : (a.plugin_name || Ie("warning: invalid plugin, plugin_name required."), a.plugin_version ? a.plugin_version !== zi.lib_version && Ie("warning: plugin version not match SDK version. plugin may not work correctly. ") : Ie("warning: invalid plugin, plugin version required."), i()) : (Ie((t.plugin_name || t) + " is not found or it's not a standard plugin. Please check sensorsdata official documents."), a)
    }

    function Tt(e, t, r) {
        it({
            event: e,
            properties: t
        }) && za.send({
            type: "track",
            event: e,
            properties: t
        }, r)
    }

    function At(e, t) {
        return !!it({
            bindKey: e,
            bindValue: t
        }) && (La._state.identities[e] = t, La.save(), void za.send({
            type: "track_id_bind",
            event: "$BindID",
            properties: {}
        }))
    }

    function Dt(e, t) {
        var r = Ct(e, t);
        r && za.send({
            identities: r,
            type: "track_id_unbind",
            event: "$UnbindID",
            properties: {}
        })
    }

    function $t(e, t, r) {
        "object" == typeof e && e.tagName ? mt({
            ele: e
        }, t, r, zi.track) : "object" == typeof e && e.target && e.event && mt(e, t, r, zi.track)
    }

    function xt(e, t, r) {
        return r = r || {}, !(!e || "object" != typeof e) && !(!e.href || /^javascript/.test(e.href) || e.target) && void xe(e, "click", function(n) {
            function i() {
                a || (a = !0, location.href = e.href)
            }
            n.preventDefault();
            var a = !1;
            setTimeout(i, 1e3), zi.track(t, r, i)
        })
    }

    function Et(e, t, r) {
        it({
            item_type: e,
            item_id: t,
            properties: r
        }) && za.sendItem({
            type: "item_set",
            item_type: e,
            item_id: t,
            properties: r || {}
        })
    }

    function Lt(e, t) {
        it({
            item_type: e,
            item_id: t
        }) && za.sendItem({
            type: "item_delete",
            item_type: e,
            item_id: t
        })
    }

    function Ut(e, t) {
        it({
            propertiesMust: e
        }) && za.send({
            type: "profile_set",
            properties: e
        }, t)
    }

    function Rt(e, t) {
        it({
            propertiesMust: e
        }) && za.send({
            type: "profile_set_once",
            properties: e
        }, t)
    }

    function Bt(e, t) {
        it({
            propertiesMust: e
        }) && (P(e, function(t, r) {
            p(t) ? e[r] = [t] : y(t) ? e[r] = t : (delete e[r], Ie("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
        }), se(e) || za.send({
            type: "profile_append",
            properties: e
        }, t))
    }

    function Ht(e, t) {
        function r(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) return !1;
            return !0
        }
        var n = e;
        p(e) && (e = {}, e[n] = 1), it({
            propertiesMust: e
        }) && (r(e) ? za.send({
            type: "profile_increment",
            properties: e
        }, t) : Te("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"))
    }

    function Jt(e) {
        za.send({
            type: "profile_delete"
        }, e), La.set("distinct_id", Yi()), La.set("first_id", "")
    }

    function Mt(e, t) {
        var r = e,
            n = {};
        p(e) && (e = [], e.push(r)), y(e) ? (P(e, function(e) {
            p(e) ? n[e] = !0 : Ie("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389", e)
        }), za.send({
            type: "profile_unset",
            properties: n
        }, t)) : Te("profile_unset\u7684\u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4")
    }

    function qt(e) {
        "number" == typeof e && (e = String(e));
        var t = La.getFirstId();
        if ("undefined" == typeof e) {
            var r = Yi();
            t ? La.set("first_id", r) : La.set("distinct_id", r)
        } else it({
            distinct_id: e
        }) && (t ? La.set("first_id", e) : La.set("distinct_id", e))
    }

    function Kt(e) {
        var t = La.getFirstId();
        if (t) return Te("resetAnonymousIdentity must be used in a logout state \uff01"), !1;
        if ("number" == typeof e && (e = String(e)), "undefined" == typeof e) {
            var r = Yi();
            La._state.identities.$identity_cookie_id = r, La.set("distinct_id", r)
        } else it({
            distinct_id: e
        }) && (La._state.identities.$identity_cookie_id = e, La.set("distinct_id", e))
    }

    function Ft(e, t, r, n) {
        var i = La.getFirstId() || La.getDistinctId();
        La.set("distinct_id", e), za.send({
            original_id: i,
            distinct_id: La.getDistinctId(),
            type: "track_signup",
            event: t,
            properties: r
        }, n)
    }

    function Vt(e, t, r, n) {
        "number" == typeof e && (e = String(e)), it({
            distinct_id: e,
            event: t,
            properties: r
        }) && Ft(e, t, r, n)
    }

    function Wt(e) {
        it({
            properties: e
        }) ? C(Oa.currentProps, e) : Te("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }

    function zt(e) {
        La.clearAllProps(e)
    }

    function Xt(e) {
        var t;
        if (y(e) && e.length > 0)
            for (t = 0; t < e.length; t++) p(e[t]) && e[t] in Oa.currentProps && delete Oa.currentProps[e[t]];
        else if (e === !0)
            for (t in Oa.currentProps) delete Oa.currentProps[t]
    }

    function Zt(e) {
        it({
            properties: e
        }) ? La.setProps(e) : Te("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }

    function Gt(e) {
        it({
            properties: e
        }) ? La.setPropsOnce(e) : Te("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }

    function Qt(e) {
        zi.log("registerSession \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"), it({
            properties: e
        }) ? La.setSessionProps(e) : Te("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }

    function Yt(e) {
        zi.log("registerSessionOnce \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"), it({
            properties: e
        }) ? La.setSessionPropsOnce(e) : Te("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
    }

    function er(t, r) {
        "number" == typeof t && (t = String(t));
        var n = kt({
            id: t,
            callback: r,
            name: ya.LOGIN
        }, Ft);
        !n && e(r) && r()
    }

    function tr(e, t) {
        return Ie("loginWithKey is deprecated !!!"), "number" == typeof t && (t = String(t)), "number" == typeof e && (e = String(e)), !!it({
            loginIdKey: e
        }) && (ya.LOGIN === e ? (er(t), !1) : void kt({
            id: t,
            callback: null,
            name: e
        }, Ft))
    }

    function rr(e) {
        var t = La.getFirstId();
        if (t)
            if (La.set("first_id", ""), e === !0) {
                var r = Yi();
                La.set("distinct_id", r)
            } else La.set("distinct_id", t);
        Pt({
            $identity_cookie_id: La._state.identities.$identity_cookie_id
        }), La.set("history_login_id", {
            name: "",
            value: ""
        })
    }

    function nr() {
        function e() {
            var e = Oa.campaignParams(),
                t = {};
            return P(e, function(e, r, n) {
                (" " + zi.source_channel_standard + " ").indexOf(" " + r + " ") !== -1 ? t["$" + r] = n[r] : t[r] = n[r]
            }), t
        }
        var t = {
                $is_first_day: $e(),
                $is_first_time: Sa.is_page_first_visited,
                $referrer: Oa.pageProp.referrer || "",
                $referrer_host: Oa.pageProp.referrer ? K(Oa.pageProp.referrer) : "",
                $url: G(),
                $url_path: Q(),
                $title: document.title || "",
                _distinct_id: La.getDistinctId(),
                identities: La.getIdentities()
            },
            r = C({}, Oa.properties(), La.getProps(), e(), t);
        return zi.para.preset_properties.latest_referrer && zi.para.preset_properties.latest_referrer_host && (r.$latest_referrer_host = "" === r.$latest_referrer ? "" : K(r.$latest_referrer)), r
    }

    function ir() {
        var e = "",
            t = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
        zi.heatmap && y(zi.heatmap.otherTags) && P(zi.heatmap.otherTags, function(r) {
            e += r + t
        }), ue() && F() && F() < 13 && (zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div && we("div, [data-sensors-click]" + t), zi.para.heatmap && zi.para.heatmap.track_attr && we("[" + zi.para.heatmap.track_attr.join("], [") + "]" + t), "" !== e && we(e))
    }

    function ar(e) {
        var t = this;
        this.type = e, this.resultCbs = {}, this.timeoutCbs = {}, this.timerId = null, this.appCallJsCallback = null, window.sensorsdata_app_call_js || (window.sensorsdata_app_call_js = function(e, t) {
            if (e in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[e](t)
        }), window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}, window.sensorsdata_app_call_js.modules[this.type] = function(e) {
            try {
                var r = j(e) || e;
                try {
                    r = JSON.parse(r)
                } catch (n) {}
                var i = r && r.message_id;
                if (i && t.resultCbs[i]) {
                    if (e = r, t.timeoutCbs[i] && t.timeoutCbs[i].isTimeout) return void(t.resultCbs[i].callbacks.length = 0);
                    if (t.resultCbs[i]) {
                        t.resultCbs[i].result = e, clearTimeout(t.timerId), t.timeoutCbs[i].callbacks.length = 0;
                        for (var a in t.resultCbs[i].callbacks) t.resultCbs[i].callbacks[a].call(null, e), t.resultCbs[i].callbacks.splice(a, 1)
                    }
                    return
                }
                return t.appCallJsCallback && t.appCallJsCallback.call(null, e)
            } catch (o) {
                Te("app \u56de\u8c03 js \u5f02\u5e38", e)
            }
        }
    }

    function or(t) {
        try {
            if (zi.bridge.activeBridge && e(zi.bridge.activeBridge.handleCommand)) return zi.bridge.activeBridge.handleCommand(t)
        } catch (r) {
            Te("Error: handle command exception:" + r)
        }
        return Te("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge,type:" + t.callType), !1
    }

    function sr(e) {
        function t(e) {
            var t = {
                hostname: "",
                project: ""
            };
            try {
                e = _(e), t.hostname = e.hostname, t.project = e.searchParams.get("project") || "default"
            } catch (r) {
                Te("validateAppUrl:" + r)
            }
            return t
        }
        var r = t(e),
            n = t(zi.para.server_url);
        if (r.hostname === n.hostname && r.project === n.project) return !0;
        if (y(zi.para.app_js_bridge.white_list))
            for (var i = 0; i < zi.para.app_js_bridge.white_list.length; i++) {
                var a = t(zi.para.app_js_bridge.white_list[i]);
                if (a.hostname === r.hostname && a.project === r.project) return !0
            }
        return !1
    }

    function lr(e) {
        this.bridge = new ar(e.type)
    }

    function ur() {
        var e = Oa.pageProp.url_domain,
            t = {};
        "" === e && (e = "url\u89e3\u6790\u5931\u8d25");
        var n = He(document.referrer, !0);
        if (ga.preset_properties.search_keyword_baidu ? Be(document.referrer) && (!Ee() || r(n) && n.active ? La._state && La._state.props && (La._state.props.$search_keyword_id && delete La._state.props.$search_keyword_id, La._state.props.$search_keyword_id_type && delete La._state.props.$search_keyword_id_type, La._state.props.$search_keyword_id_hash && delete La._state.props.$search_keyword_id_hash) : (t.$search_keyword_id = Pa.id(), t.$search_keyword_id_type = Pa.type(), t.$search_keyword_id_hash = re(t.$search_keyword_id))) : La._state && La._state.props && (La._state.props.$search_keyword_id && delete La._state.props.$search_keyword_id, La._state.props.$search_keyword_id_type && delete La._state.props.$search_keyword_id_type, La._state.props.$search_keyword_id_hash && delete La._state.props.$search_keyword_id_hash), La.save(), P(ga.preset_properties, function(n, i) {
                if (i.indexOf("latest_") === -1) return !1;
                if (i = i.slice(7), n) {
                    if ("wx_ad_click_id" === i && "not_collect" === n) return !1;
                    if ("utm" !== i && "url\u89e3\u6790\u5931\u8d25" === e) "wx_ad_click_id" === i ? (t._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25", t._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25", t._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25") : t["$latest_" + i] = "url\u7684domain\u89e3\u6790\u5931\u8d25";
                    else if (Be(document.referrer)) switch (i) {
                        case "traffic_source_type":
                            t.$latest_traffic_source_type = Me();
                            break;
                        case "referrer":
                            t.$latest_referrer = Oa.pageProp.referrer;
                            break;
                        case "search_keyword":
                            He() ? t.$latest_search_keyword = He() : r(La._state) && r(La._state.props) && La._state.props.$latest_search_keyword && delete La._state.props.$latest_search_keyword;
                            break;
                        case "landing_page":
                            t.$latest_landing_page = G();
                            break;
                        case "wx_ad_click_id":
                            var a = qe(location.href);
                            t._latest_wx_ad_click_id = a.click_id, t._latest_wx_ad_hash_key = a.hash_key, t._latest_wx_ad_callbacks = a.callbacks
                    }
                } else if ("utm" === i && La._state && La._state.props)
                    for (var o in La._state.props)(0 === o.indexOf("$latest_utm") || 0 === o.indexOf("_latest_") && o.indexOf("_latest_wx_ad_") < 0) && delete La._state.props[o];
                else if (La._state && La._state.props && "$latest_" + i in La._state.props) delete La._state.props["$latest_" + i];
                else if ("wx_ad_click_id" == i && La._state && La._state.props && n === !1) {
                    var s = ["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"];
                    P(s, function(e) {
                        e in La._state.props && delete La._state.props[e]
                    })
                }
            }), ga.preset_properties.latest_utm) {
            var i = Oa.campaignParamsStandard("$latest_", "_latest_"),
                a = i.$utms,
                o = i.otherUtms;
            se(a) || C(t, a), se(o) || C(t, o)
        }
        Zt(t)
    }

    function cr(e) {
        var t = null;
        try {
            var r = JSON.parse(window.name);
            t = r[e] ? u(r[e]) : null
        } catch (n) {
            t = null
        }
        return null === t && (t = V(location.href, e) || null), t
    }

    function dr(e) {
        function t() {
            var e = [];
            n.touch_app_bridge || e.push(Ca.defineMode("1")), r(zi.para.app_js_bridge) || (e.push(Ca.defineMode("2")), n.verify_success = !1), r(zi.para.heatmap) && "default" == zi.para.heatmap.clickmap || e.push(Ca.defineMode("3")), "fail" === n.verify_success && e.push(Ca.defineMode("4")), new zi.SDKJSBridge("app_alert").notifyApp({
                data: e
            })
        }
        var n = zi.bridge.bridge_info;
        if (zi.bridge.hasVisualModeBridge())
            if (r(zi.para.heatmap) && "default" == zi.para.heatmap.clickmap)
                if (r(zi.para.app_js_bridge) && "success" === n.verify_success)
                    if (e) window.sa_jssdk_app_define_mode(zi, e);
                    else {
                        var i = location.protocol,
                            a = ["http:", "https:"];
                        i = ne(a, i) > -1 ? i : "https:", he({
                            success: function() {
                                setTimeout(function() {
                                    "undefined" != typeof sa_jssdk_app_define_mode && window.sa_jssdk_app_define_mode(zi, e)
                                }, 0)
                            },
                            error: function() {},
                            type: "js",
                            url: i + "//static.sensorsdata.cn/sdk/" + zi.lib_version + "/vapph5define.min.js"
                        })
                    }
        else t();
        else t()
    }

    function pr(t) {
        zi.para.is_track_single_page && ja.on("switch", function(n) {
            var i = function(r) {
                if (r = r || {}, n !== location.href) {
                    Oa.pageProp.referrer = G(n);
                    var i = C({
                        $url: G(),
                        $referrer: G(n)
                    }, r);
                    e(t) ? t(i) : zi.quick && zi.quick("autoTrack", i)
                }
            };
            if ("boolean" == typeof zi.para.is_track_single_page) i();
            else if ("function" == typeof zi.para.is_track_single_page) {
                var a = zi.para.is_track_single_page();
                r(a) ? i(a) : a === !0 && i()
            }
        })
    }

    function fr() {
        zi._q && y(zi._q) && zi._q.length > 0 && P(zi._q, function(e) {
            zi[e[0]].apply(zi, Array.prototype.slice.call(e[1]))
        }), r(zi.para.heatmap) && (Ga.initHeatmap(), Ga.initScrollmap())
    }

    function gr() {
        zi.readyState.setState(3), new zi.SDKJSBridge("visualized").onAppNotify(function() {
            dr("undefined" != typeof sa_jssdk_app_define_mode)
        }), dr(!1), zi.bridge.app_js_bridge_v1(), Oa.initPage(), pr(), La.init(), ur(), hr(), zi.readyState.setState(4), fr()
    }

    function _r() {
        io.isSeachHasKeyword() ? io.hasKeywordHandle() : window.parent !== self && ao.isSearchHasKeyword() ? ao.verifyVtrackMode() : io.isWindowNameHasKeyword() ? io.windowNameHasKeywordHandle() : io.isStorageHasKeyword() ? io.storageHasKeywordHandle() : window.parent !== self && ao.isStorageHasKeyword() ? ao.verifyVtrackMode() : (gr(), ao.notifyUser())
    }

    function hr() {
        Fa.init(), "success" === zi.bridge.bridge_info.verify_success && Ma.init()
    }

    function mr() {
        P(oo, function(t) {
            var r = zi[t];
            zi[t] = function() {
                return zi.readyState.state < 3 ? (y(zi._q) || (zi._q = []), Ie("calling sdk api before init is deprecated."), zi._q.push([t, arguments]), !1) : e(zi.getDisabled) && zi.getDisabled() ? void 0 : zi.readyState.getState() ? r.apply(zi, arguments) : void Te("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")
            }
        })
    }

    function vr(e, t) {
        this.cancel = function() {
            e = !0
        }, this.getCanceled = function() {
            return e || !1
        }, this.stop = function() {
            t = !0
        }, this.getStopped = function() {
            return t || !1
        }
    }

    function yr(e, t, r) {
        var n = null;
        try {
            n = JSON.parse(JSON.stringify(e || null))
        } catch (i) {}
        this.getOriginalData = function() {
            return n
        }, this.getPosition = function() {
            return t
        }, this.cancellationToken = new vr, this.sensors = r
    }

    function br(e) {
        if (!r(e)) throw "error: Stage constructor requires arguments.";
        this.processDef = e, this.registeredInterceptors = {}
    }

    function wr(e) {
        e && e.buildDataStage && uo.registerStageImplementation(e.buildDataStage), e && e.businessStage && go.registerStageImplementation(e.businessStage), e && e.sendDataStage && po.registerStageImplementation(e.sendDataStage), e && e.viewStage && ho.registerStageImplementation(e.viewStage)
    }

    function Sr(e, t) {
        mo[e] && mo[e](t)
    }

    function kr() {
        return vo.stage && vo.stage.process("getUtmData")
    }

    function Pr(e) {
        return yo.stage.process("send", e)
    }

    function Cr(e) {
        e.kit = bo, e.saEvent = za, this.buildDataStage = Wa, this.sendDataStage = yo, this.businessStage = vo
    }

    function Or(e) {
        e.heatmap = Ga, this.viewStage = Xa
    }

    function Nr(t) {
        if (!e(t.properties)) return void Te("registerPropertyPlugin arguments error, properties must be function");
        if (t.isMatchedWithFilter && !e(t.isMatchedWithFilter)) return void Te("registerPropertyPlugin arguments error, isMatchedWithFilter must be function");
        var r = {
            finalAdjustData: {
                priority: 100,
                entry: function(r) {
                    try {
                        if (e(t.isMatchedWithFilter)) return t.isMatchedWithFilter(r) && t.properties(r);
                        t.properties(r)
                    } catch (n) {
                        Te("execute registerPropertyPlugin callback error:" + n)
                    }
                }
            }
        };
        Sr("buildDataStage", r)
    }

    function jr(e) {
        e && (zi.events = Ea, zi.bridge = no, zi.SDKJSBridge = ar, zi.JSBridge = lr, zi.store = La, zi.unlimitedDiv = qa, zi.customProp = Ka, zi.vtrackcollect = Fa, zi.vapph5collect = Ma, zi.detectMode = _r, zi.registerFeature = wr, zi.registerInterceptor = Sr, zi.commonWays = Qa, wr(new Cr(zi)), wr(new Or(zi)), Sr("viewStage", wo));
        var t = e ? to : so;
        for (var r in t) zi[r] = t[r];
        zi.logger = fa, zi.log = je, zi._ = ro, zi.on = rt, zi.ee = Na, zi.use = It, zi.lib_version = ma, zi.registerPropertyPlugin = Nr
    }

    function Ir(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Tr(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Tr(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Ar(e, t, r) {
        return Ir(e, t, r), e.plugin_version = Mo, e
    }

    function Dr(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return $r(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function $r(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function xr(e, t, r) {
        return Dr(e, t, r), e.plugin_version = Fo, e
    }

    function Er(e) {
        return Zo && Zo.call(zo, JSON.stringify(e))
    }

    function Lr(e) {
        return Xo.call(zo) && Go && Go.call(zo, JSON.stringify(e))
    }

    function Ur(e, t) {
        return t && "function" == typeof t[e.callType] && t[e.callType]()
    }

    function Rr(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Br(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Br(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Hr(e, t, r) {
        return Rr(e, t, r), e.plugin_version = Yo, e
    }

    function Jr() {
        if (Po = window.SensorsData_APP_New_H5_Bridge, Co = Po && Po.sensorsdata_track, Oo = Co && Po.sensorsdata_get_server_url && Po.sensorsdata_get_server_url(), Io("---test---fail---", !No, No.bridge.activeBridge, !Oo), No && !No.bridge.activeBridge && Oo) return No.bridge.activeBridge = es, No.para.app_js_bridge && !No.para.app_js_bridge.is_mui && (No.bridge.is_verify_success = Oo && No.bridge.validateAppUrl(Oo), Io("---test---bridge-verify-", No.bridge.is_verify_success)), No.bridge.bridge_info = {
            touch_app_bridge: !0,
            platform: "android",
            verify_success: No.bridge.is_verify_success ? "success" : "fail",
            support_two_way_call: !!Po.sensorsdata_js_call_app
        }, No.para.app_js_bridge ? void No.registerInterceptor("sendDataStage", {
            send: {
                priority: 60,
                entry: Mr
            }
        }) : void Io("---test---app_js_bridge is not configured, data will not be sent by android bridge.")
    }

    function Mr(e, t) {
        if (Io("---test---datasend-", No.bridge.is_verify_success), No.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
        var r = e.callback;
        return No.bridge.is_verify_success ? (Io("---test---bridge-verify-success---", e.data), Co && Co.call(Po, JSON.stringify(jo.extend({
            server_url: No.para.server_url
        }, e.data))), jo.isFunction(r) && r(), t.cancellationToken.cancel(), e) : (Io("---test---bridge-verify-fail-----", No.bridge.is_verify_success), No.para.app_js_bridge.is_send ? (No.debug.apph5({
            data: e.data,
            step: "4.2",
            output: "all"
        }), e) : (jo.isFunction(r) && r(), t.cancellationToken.cancel(), e))
    }

    function qr(e) {
        var t = e.callType;
        return t in Qo.commands ? Qo.commands[t](e, Po) : void(Po && jo.isFunction(Po.sensorsdata_js_call_app) && Po.sensorsdata_js_call_app(JSON.stringify(e)))
    }

    function Kr(e) {
        return is && is.call(rs, JSON.stringify(e))
    }

    function Fr(e) {
        return ns.call(rs) && as && as.call(rs, JSON.stringify(e))
    }

    function Vr(e, t) {
        return t && "function" == typeof t[e.callType] && t[e.callType]()
    }

    function Wr(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return zr(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function zr(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Xr(e, t, r) {
        return Wr(e, t, r), e.plugin_version = ss, e
    }

    function Zr() {
        if (Lo("ObsoleteBridge---test---init---"), To = window.SensorsData_APP_JS_Bridge, Ao = To && To.sensorsdata_track, Do = To && To.sensorsdata_verify, $o = To && To.sensorsdata_visual_verify, Lo("ObsoleteBridge-", xo.bridge.activeBridge, Do, Ao, $o), xo && !xo.bridge.activeBridge && (Do || Ao || $o)) {
            xo.bridge.activeBridge = ls;
            var e = Do || Ao;
            if ($o && (e = !!$o.call(To, JSON.stringify({
                    server_url: xo.para.server_url
                })), Lo("ObsoleteBridge---called-return", e)), xo.bridge.bridge_info = {
                    touch_app_bridge: !0,
                    platform: "android",
                    verify_success: e ? "success" : "fail"
                }, !xo.para.app_js_bridge) return void Lo("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");
            xo.registerInterceptor("sendDataStage", {
                send: {
                    priority: 80,
                    entry: Gr
                }
            }), Lo("Android obsolete bridge inits succeed.")
        }
    }

    function Gr(e, t) {
        if (Lo("ObsoleteBridge---senddata"), xo.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
        var r = e.callback;
        if (Do) {
            var n = Do && Do.call(To, JSON.stringify(Eo.extend({
                server_url: xo.para.server_url
            }, e.data)));
            return Lo("ObsoleteBridge---anVerify-success", n), n ? (Eo.isFunction(r) && r(), t.cancellationToken.cancel(), e) : xo.para.app_js_bridge.is_send ? (xo.debug.apph5({
                data: e.data,
                step: "3.1",
                output: "all"
            }), e) : (Eo.isFunction(r) && r(), t.cancellationToken.cancel(), e)
        }
        return Lo("ObsoleteBridge---is-send-old-way", xo.para.app_js_bridge.is_send), Ao && Ao.call(To, JSON.stringify(Eo.extend({
            server_url: xo.para.server_url
        }, e.data))), Eo.isFunction(r) && r(), t.cancellationToken.cancel(), e
    }

    function Qr(e) {
        Lo("ObsoleteBridge---handleCommadn");
        var t = e.callType;
        return t in os.commands ? (Lo("ObsoleteBridge---", t, os.commands), os.commands[t](e, To)) : To && Eo.isFunction(To.sensorsdata_js_call_app) ? (Lo("ObsoleteBridge---handleCommadn-abridge"), To.sensorsdata_js_call_app(JSON.stringify(e))) : void 0
    }

    function Yr(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return en(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function en(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function tn(e, t, r) {
        return Yr(e, t, r), e.plugin_version = cs, e
    }

    function rn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return nn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function nn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function an(e, t, r) {
        return rn(e, t, r), e.plugin_version = fs, e
    }

    function on() {
        return "undefined" != typeof Jo && document[Jo]
    }

    function sn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return ln(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function ln(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function un(e, t, r) {
        return sn(e, t, r), e.plugin_version = xs, e
    }

    function cn() {
        if (_s = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url, hs = function() {
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker
            }, ms && !ms.bridge.activeBridge && hs() && hs().postMessage) {
            if (ms.bridge.activeBridge = Es, ms.para.app_js_bridge && !ms.para.app_js_bridge.is_mui && (ms.bridge.is_verify_success = _s && ms.bridge.validateAppUrl(_s)), ms.bridge.bridge_info = {
                    touch_app_bridge: !0,
                    platform: "ios",
                    verify_success: ms.bridge.is_verify_success ? "success" : "fail",
                    support_two_way_call: !0
                }, !ms.para.app_js_bridge) return void ys("app_js_bridge is not configured, data will not be sent by iOS bridge.");
            ms.registerInterceptor("sendDataStage", {
                send: {
                    priority: 70,
                    entry: dn
                }
            }), ys("IOS bridge inits succeed.")
        }
    }

    function dn(e, t) {
        if (ms.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
        var r = e.callback;
        return ms.bridge.is_verify_success ? (hs() && hs().postMessage(JSON.stringify({
            callType: "app_h5_track",
            data: vs.extend({
                server_url: ms.para.server_url
            }, e.data)
        })), vs.isFunction(r) && r(), t.cancellationToken.cancel(), e) : ms.para.app_js_bridge.is_send ? (ms.debug.apph5({
            data: e.data,
            step: "4.1",
            output: "all"
        }), e) : (vs.isFunction(r) && r(), t.cancellationToken.cancel(), e)
    }

    function pn(e) {
        var t = e.callType;
        return "page_info" !== t && "visualized_track" !== t || ms.bridge.hasVisualModeBridge() ? "sensorsdata_get_app_visual_config" === t ? vs.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge[t] : hs() && hs().postMessage(JSON.stringify(e)) : null
    }

    function fn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return gn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function gn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function _n(e, t, r) {
        return fn(e, t, r), e.plugin_version = Us, e
    }

    function hn() {
        if (bs && !bs.bridge.activeBridge && mn()) {
            if (bs.bridge.activeBridge = Rs, bs.bridge.bridge_info = {
                    touch_app_bridge: !0,
                    platform: "ios",
                    verify_success: vn() ? "success" : "fail"
                }, !bs.para.app_js_bridge) return void Ss("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge.");
            bs.registerInterceptor("sendDataStage", {
                send: {
                    priority: 90,
                    entry: yn
                }
            }), Ss("IOS obsolete bridge inits succeed.")
        }
    }

    function mn() {
        return (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream
    }

    function vn() {
        if (/sensors-verify/.test(navigator.userAgent)) {
            var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
            if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
                e = e[1].split("?");
                var t = null,
                    r = null;
                try {
                    t = ws.URL(bs.para.server_url).hostname, r = ws.URL(bs.para.server_url).searchParams.get("project") || "default"
                } catch (n) {
                    bs.log(n)
                }
                return !(!t || t !== e[0] || !r || r !== e[1])
            }
            return !1
        }
        return !!/sa-sdk-ios/.test(navigator.userAgent)
    }

    function yn(e, t) {
        function r(e) {
            var t = JSON.stringify(ws.extend({
                server_url: bs.para.server_url
            }, e));
            return t = t.replace(/\r\n/g, ""), t = encodeURIComponent(t), "sensorsanalytics://trackEvent?event=" + t
        }
        if (bs.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
        var n = e.callback;
        if (bs.bridge.bridge_info.verify_success) {
            var i = document.createElement("iframe"),
                a = r(e.data);
            return i.setAttribute("src", a), document.documentElement.appendChild(i), i.parentNode.removeChild(i), i = null, ws.isFunction(n) && n(), t.cancellationToken.cancel(), !0
        }
        return bs.para.app_js_bridge.is_send ? (bs.debug.apph5({
            data: e.data,
            step: "3.2",
            output: "all"
        }), e) : (ws.isFunction(n) && n(), t.cancellationToken.cancel(), e)
    }

    function bn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return wn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function wn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Sn(e, t, r) {
        return bn(e, t, r), e.plugin_version = Hs, e
    }

    function kn() {
        this.sd = null, this.start_time = +new Date, this.page_show_status = !0, this.page_hidden_status = !1, this._ = {}, this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.title = document.title || "", this.option = {}, this.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name = "sawebjssdkpageleave", this.max_duration = Ms
    }

    function Pn(e, t, r) {
        if (t && (e.plugin_name = t),
            r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Cn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Cn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function On(e, t, r) {
        return Pn(e, t, r), e.plugin_version = Fs, e
    }

    function Nn(e, t) {
        if ("track" !== e.type) return e;
        var r = t.sd,
            n = r._,
            i = r.saEvent.check,
            a = n.extend2Lev({
                properties: {}
            }, e),
            o = t.customRegister,
            s = a.properties,
            l = a.event,
            u = {};
        return n.each(o, function(e) {
            if (n.isObject(e)) n.indexOf(e.events, l) > -1 && i({
                properties: e.properties
            }) && (u = n.extend(u, e.properties));
            else if (n.isFunction(e)) {
                var t = e({
                    event: l,
                    properties: s,
                    data: a
                });
                n.isObject(t) && !n.isEmptyObject(t) && i({
                    properties: t
                }) && (u = n.extend(u, t))
            }
        }), e.properties = n.extend(s, u), e
    }

    function jn() {
        this.sd = null, this.log = window.console && window.console.log || function() {}, this.customRegister = []
    }

    function In(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Tn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Tn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function An(e, t, r) {
        return In(e, t, r), e.plugin_version = Xs, e
    }

    function Dn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return $n(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function $n(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function xn(e, t, r) {
        return Dn(e, t, r), e.plugin_version = el, e
    }

    function En(e) {
        try {
            if ("$pageview" !== e.event && (!e.type || "profile" !== e.type.slice(0, 7))) {
                var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                    r = document.documentElement.scrollHeight || 0,
                    n = {
                        $page_height: Math.max(t, r) || 0
                    };
                e.properties = Zs._.extend(e.properties || {}, n)
            }
        } catch (i) {
            tl("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")
        }
        return Gs.call(Zs.kit, e)
    }

    function Ln(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Un(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Un(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Rn(e, t, r) {
        return Ln(e, t, r), e.plugin_version = il, e
    }

    function Bn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Hn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Hn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Jn(e, t, r) {
        return Bn(e, t, r), e.plugin_version = wl, e
    }

    function Mn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return qn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function qn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Kn(e, t, r) {
        return Mn(e, t, r), e.plugin_version = Pl, e
    }

    function Fn() {
        Cl = !0
    }

    function Vn() {
        Cl = !1
    }

    function Wn() {
        return Cl
    }

    function zn(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Xn(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Xn(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Zn(e, t, r) {
        return zn(e, t, r), e.plugin_version = Il, e
    }

    function Gn(e) {
        var t = e,
            r = "";
        r = sl.para.debug_mode_url.indexOf("?") !== -1 ? sl.para.debug_mode_url + "&" + sl.kit.encodeTrackData(e) : sl.para.debug_mode_url + "?" + sl.kit.encodeTrackData(e), ll.ajax({
            url: r,
            type: "GET",
            cors: !0,
            header: {
                "Dry-Run": String(sl.para.debug_mode_upload)
            },
            success: function(e) {
                ll.isEmptyObject(e) === !0 ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + t) : alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e))
            }
        })
    }

    function Qn(e, t) {
        if (sl.para.debug_mode === !0) {
            var r = e.data;
            e.callback, Gn(JSON.stringify(r)), t.cancellationToken.stop()
        }
        return e
    }

    function Yn() {
        sl.para.debug_mode === !0 && (sl.para.debug_mode_upload = sl.para.debug_mode_upload || !1, ll.isString(sl.para.debug_mode_url) || (ll.isString(sl.para.server_url) ? sl.para.debug_mode_url = sl.para.server_url.replace("sa.gif", "debug") : ll.isArray(sl.para.server_url) && ll.isString(sl.para.server_url[0]) ? sl.para.debug_mode_url = sl.para.server_url[0].replace("sa.gif", "debug") : sl.para.debug_mode = !1))
    }

    function ei() {
        sl.on("sdkInitPara", function() {
            Yn()
        }), sl.on("sdkAfterInitPara", function() {
            sl.registerInterceptor("sendDataStage", {
                send: {
                    priority: 30,
                    entry: Qn
                }
            })
        })
    }

    function ti(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return ri(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function ri(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function ni(e, t, r) {
        return ti(e, t, r), e.plugin_version = Dl, e
    }

    function ii(e, t) {
        if (cl.isObject(ul.para.jsapp) && !ul.para.jsapp.isOnline && "function" == typeof ul.para.jsapp.setData) {
            var r = e;
            delete r.callback, r = JSON.stringify(r), ul.para.jsapp.setData(r), t.cancellationToken.stop()
        }
        return e
    }

    function ai() {
        ul.on("sdkAfterInitAPI", function() {
            cl.isObject(ul.commonWays) && (ul.commonWays.setOnlineState = oi), ul.registerInterceptor("sendDataStage", {
                send: {
                    priority: 40,
                    entry: ii
                }
            })
        })
    }

    function oi(e) {
        if (e === !0 && cl.isObject(ul.para.jsapp) && "function" == typeof ul.para.jsapp.getData) {
            ul.para.jsapp.isOnline = !0;
            var t = ul.para.jsapp.getData();
            cl.isArray(t) && t.length > 0 && cl.each(t, function(e) {
                cl.isJSONString(e) && ul.kit.sendData(JSON.parse(e))
            })
        } else ul.para.jsapp.isOnline = !1
    }

    function si(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return li(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function li(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function ui(e, t, r) {
        return si(e, t, r), e.plugin_version = El, e
    }

    function ci(e, t) {
        return !dl.para.app_js_bridge && dl.para.batch_send && pl.localStorage.isSupport() && localStorage.length < dl.para.batch_send.storage_length && (Ll.add(e.data), t.cancellationToken.stop()), e
    }

    function di() {
        var e = {
            datasend_timeout: 6e3,
            send_interval: 6e3,
            storage_length: 200
        };
        pl.localStorage.isSupport() && pl.isSupportCors() && "object" == typeof localStorage ? dl.para.batch_send === !0 ? dl.para.batch_send = pl.extend({}, e) : "object" == typeof dl.para.batch_send && (dl.para.batch_send = pl.extend({}, e, dl.para.batch_send)) : dl.para.batch_send = !1
    }

    function pi() {
        dl.on("sdkInitPara", function() {
            di()
        }), dl.on("sdkAfterInitPara", function() {
            !dl.para.app_js_bridge && dl.para.batch_send && pl.localStorage.isSupport() && (Ll || (Ll = new pl.BatchSend), Ll.batchInterval(), dl.registerInterceptor("sendDataStage", {
                send: {
                    priority: 100,
                    entry: ci
                }
            }))
        })
    }

    function fi(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return gi(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function gi(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function _i(e, t, r) {
        return fi(e, t, r), e.plugin_version = Bl, e
    }

    function hi(e) {
        var t = new gl.BeaconSend(e);
        t.start()
    }

    function mi(e, t) {
        var r = null,
            n = null;
        gl.isObject(e.config) && (r = e.config.send_type, n = gl.optimizeServerUrl(e.config.server_url));
        var i = "beacon" === r || !r && "beacon" === fl.para.send_type;
        if (i && gl.isSupportBeaconSend()) {
            var a = n || e.server_url;
            e.server_url = a, e.data = fl.kit.encodeTrackData(e.data), gl.isArray(a) && a.length ? gl.each(a, function(t) {
                e.callback = null, e.server_url = t, hi(e)
            }) : "string" == typeof a && "" !== a ? hi(e) : fl.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"), t.cancellationToken.stop()
        }
        return e
    }

    function vi() {
        "beacon" !== fl.para.send_type || gl.isSupportBeaconSend() || (fl.para.send_type = "image")
    }

    function yi() {
        fl.on("sdkInitPara", function() {
            vi()
        }), fl.on("sdkAfterInitPara", function() {
            fl.registerInterceptor("sendDataStage", {
                send: {
                    priority: 110,
                    entry: mi
                }
            })
        })
    }

    function bi(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return wi(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function wi(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Si(e, t, r) {
        return bi(e, t, r), e.plugin_version = Ml, e
    }

    function ki(e) {
        var t = new hl.AjaxSend(e);
        t.start()
    }

    function Pi(e, t) {
        var r = null,
            n = null;
        hl.isObject(e.config) && (r = e.config.send_type, n = hl.optimizeServerUrl(e.config.server_url));
        var i = "ajax" === r || !r && "ajax" === _l.para.send_type;
        if (i && hl.isSupportCors()) {
            var a = n || e.server_url;
            e.server_url = a, e.data = _l.kit.encodeTrackData(e.data), hl.isArray(a) && a.length ? hl.each(a, function(t) {
                e.callback = null, e.server_url = t, ki(e)
            }) : "string" == typeof a && "" !== a ? ki(e) : _l.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"), t.cancellationToken.stop()
        }
        return e
    }

    function Ci() {
        "ajax" !== _l.para.send_type || hl.isSupportCors() || (_l.para.send_type = "image")
    }

    function Oi() {
        _l.on("sdkInitPara", function() {
            Ci()
        }), _l.on("sdkAfterInitPara", function() {
            _l.registerInterceptor("sendDataStage", {
                send: {
                    priority: 120,
                    entry: Pi
                }
            })
        })
    }

    function Ni(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return ji(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function ji(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Ii(e, t, r) {
        return Ni(e, t, r), e.plugin_version = Fl, e
    }

    function Ti(e, t) {
        var r = ml.kit.encodeTrackData(t);
        return e.indexOf("?") !== -1 ? e + "&" + r : e + "?" + r
    }

    function Ai(e) {
        var t = new vl.ImageSend(e);
        t.start()
    }

    function Di(e, t) {
        var r = null;
        vl.isObject(e.config) && (r = vl.optimizeServerUrl(e.config.server_url));
        var n = r || e.server_url,
            i = e.data;
        e.server_url = n, vl.isArray(n) && n.length ? vl.each(n, function(t) {
            t && (e.data = Ti(t, i), e.callback = null, e.server_url = t, Ai(e))
        }) : "string" == typeof n && "" !== n ? (e.data = Ti(n, i), Ai(e)) : ml.logger && ml.logger.msg("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01").level("warn").log(), t.cancellationToken.stop()
    }

    function $i() {
        "image" !== ml.para.send_type && "ajax" !== ml.para.send_type && "beacon" !== ml.para.send_type && (ml.para.send_type = "image")
    }

    function xi() {
        ml.on("sdkInitPara", function() {
            $i()
        }), ml.on("sdkAfterInitPara", function() {
            ml.registerInterceptor("sendDataStage", {
                send: {
                    priority: 130,
                    entry: Di
                }
            })
        })
    }

    function Ei(e, t, r) {
        if (t && (e.plugin_name = t), r && e.init) {
            var n = e.init;
            e.init = function(i, a) {
                function o() {
                    n.call(e, i, a)
                }
                return Li(i, e, t), i.readyState && i.readyState.state >= 3 || !i.on ? o() : void i.on(r, o)
            }
        }
        return e
    }

    function Li(e, t, r) {
        function n(t, n) {
            e.logger ? e.logger.msg.apply(e.logger, n).module(r + "" || "").level(t).log() : e.log && e.log.apply(e, n)
        }
        t.log = function() {
            n("log", arguments)
        }, t.warn = function() {
            n("warn", arguments)
        }, t.error = function() {
            n("error", arguments)
        }
    }

    function Ui(e, t, r) {
        return Ei(e, t, r), e.plugin_version = ma, e
    }

    function Ri(e) {
        return null === Zl ? void Bi(e) : void Zl.push(e)
    }

    function Bi(e) {
        try {
            if ("log" === e.level && Hi()) return void qi(e);
            if ("warn" === e.level && Ji()) return void qi(e);
            if ("error" === e.level && Mi()) return void qi(e)
        } catch (t) {}
    }

    function Hi() {
        return !!Wi() || zl.para.show_log === !0 || Xl.isObject(zl.para.show_log) && "log" === zl.para.show_log.level
    }

    function Ji() {
        return !!Wi() || Hi() || Xl.isObject(zl.para.show_log) && "warn" === zl.para.show_log.level
    }

    function Mi() {
        return !!Wi() || !Xl.isObject(zl.para.show_log) || "none" !== zl.para.show_log.level
    }

    function qi(e) {
        var t = e.content,
            r = Xl.isObject(t[0]) ? Xl.formatJsonString(t[0]) : t[0],
            n = Ki(e);
        t[0] = n + (n.length > 0 ? ": " : "") + r;
        try {
            console && (Xl.isFunction(console[e.level]) ? console[e.level].apply(console, t) : Xl.isObject(console[e.level]) && console[e.level](t[0]))
        } catch (i) {}
    }

    function Ki(e) {
        var t = "",
            r = "",
            n = zl.para.show_log;
        return Xl.isObject(n) && n.show_brand === !1 || (t += e.brand), Xl.isObject(n) && n.show_level === !1 || (t += (t.length > 0 ? "-" : "") + e.level), t.length > 0 && (t = "[" + t + "]"), Xl.isObject(n) && n.show_module === !1 || (r = e.module), t + r
    }

    function Fi() {
        Xl.sessionStorage.isSupport() && sessionStorage.setItem(Yl, "true")
    }

    function Vi() {
        Xl.sessionStorage.isSupport() && sessionStorage.removeItem(Yl)
    }

    function Wi() {
        return Xl.sessionStorage.isSupport() && "true" === sessionStorage.getItem(Yl)
    }
    var zi = {};
    (function() {
        function e(n, i) {
            function a(e, t) {
                try {
                    e()
                } catch (r) {
                    t && t()
                }
            }

            function o(e) {
                if (null != o[e]) return o[e];
                var t;
                if ("bug-string-char-index" == e) t = "a" != "a" [0];
                else if ("json" == e) t = o("json-stringify") && o("date-serialization") && o("json-parse");
                else if ("date-serialization" == e) {
                    if (t = o("json-stringify") && b) {
                        var r = i.stringify;
                        a(function() {
                            t = '"-271821-04-20T00:00:00.000Z"' == r(new d((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == r(new d(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new d((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == r(new d((-1)))
                        })
                    }
                } else {
                    var n, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == e) {
                        var r = i.stringify,
                            c = "function" == typeof r;
                        c && ((n = function() {
                            return 1
                        }).toJSON = n, a(function() {
                            c = "0" === r(0) && "0" === r(new l) && '""' == r(new u) && r(v) === h && r(h) === h && r() === h && "1" === r(n) && "[1]" == r([n]) && "[null]" == r([h]) && "null" == r(null) && "[null,null,null]" == r([h, v, null]) && r({
                                a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                            }) == s && "1" === r(null, n) && "[\n 1,\n 2\n]" == r([1, 2], null, 1)
                        }, function() {
                            c = !1
                        })), t = c
                    }
                    if ("json-parse" == e) {
                        var p, f = i.parse;
                        "function" == typeof f && a(function() {
                            0 !== f("0") || f(!1) || (n = f(s), p = 5 == n.a.length && 1 === n.a[0], p && (a(function() {
                                p = !f('"\t"')
                            }), p && a(function() {
                                p = 1 !== f("01")
                            }), p && a(function() {
                                p = 1 !== f("1.")
                            })))
                        }, function() {
                            p = !1
                        }), t = p
                    }
                }
                return o[e] = !!t
            }

            function s(e) {
                return D(this)
            }
            n || (n = r.Object()), i || (i = r.Object());
            var l = n.Number || r.Number,
                u = n.String || r.String,
                c = n.Object || r.Object,
                d = n.Date || r.Date,
                p = n.SyntaxError || r.SyntaxError,
                f = n.TypeError || r.TypeError,
                g = n.Math || r.Math,
                _ = n.JSON || r.JSON;
            if ("object" == typeof _ && _) return i.stringify = _.stringify, i.parse = _.parse, i.runInContext = e, i;
            var h, m = c.prototype,
                v = m.toString,
                y = m.hasOwnProperty,
                b = new d((-0xc782b5b800cec));
            if (a(function() {
                    b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                }), o["bug-string-char-index"] = o["date-serialization"] = o.json = o["json-stringify"] = o["json-parse"] = null, !o("json")) {
                var w = "[object Function]",
                    S = "[object Date]",
                    k = "[object Number]",
                    P = "[object String]",
                    C = "[object Array]",
                    O = "[object Boolean]",
                    N = o("bug-string-char-index"),
                    j = function(e, r) {
                        var n, i, a, o = 0;
                        (n = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, i = new n;
                        for (a in i) y.call(i, a) && o++;
                        return n = i = null, o ? j = function(e, t) {
                            var r, n, i = v.call(e) == w;
                            for (r in e) i && "prototype" == r || !y.call(e, r) || (n = "constructor" === r) || t(r);
                            (n || y.call(e, r = "constructor")) && t(r)
                        } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], j = function(e, r) {
                            var n, a, o = v.call(e) == w,
                                s = !o && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty || y;
                            for (n in e) o && "prototype" == n || !s.call(e, n) || r(n);
                            for (a = i.length; n = i[--a];) s.call(e, n) && r(n)
                        }), j(e, r)
                    };
                if (!o("json-stringify") && !o("date-serialization")) {
                    var I = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        T = "000000",
                        A = function(e, t) {
                            return (T + (t || 0)).slice(-e)
                        },
                        D = function(e) {
                            var t, r, n, i, a, o, s, l, u;
                            if (b) t = function(e) {
                                r = e.getUTCFullYear(), n = e.getUTCMonth(), i = e.getUTCDate(), o = e.getUTCHours(), s = e.getUTCMinutes(), l = e.getUTCSeconds(), u = e.getUTCMilliseconds()
                            };
                            else {
                                var c = g.floor,
                                    d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    p = function(e, t) {
                                        return d[t] + 365 * (e - 1970) + c((e - 1969 + (t = +(t > 1))) / 4) - c((e - 1901 + t) / 100) + c((e - 1601 + t) / 400)
                                    };
                                t = function(e) {
                                    for (i = c(e / 864e5), r = c(i / 365.2425) + 1970 - 1; p(r + 1, 0) <= i; r++);
                                    for (n = c((i - p(r, 0)) / 30.42); p(r, n + 1) <= i; n++);
                                    i = 1 + i - p(r, n), a = (e % 864e5 + 864e5) % 864e5, o = c(a / 36e5) % 24, s = c(a / 6e4) % 60, l = c(a / 1e3) % 60, u = a % 1e3
                                }
                            }
                            return (D = function(e) {
                                return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (r <= 0 || r >= 1e4 ? (r < 0 ? "-" : "+") + A(6, r < 0 ? -r : r) : A(4, r)) + "-" + A(2, n + 1) + "-" + A(2, i) + "T" + A(2, o) + ":" + A(2, s) + ":" + A(2, l) + "." + A(3, u) + "Z", r = n = i = o = s = l = u = null) : e = null, e
                            })(e)
                        };
                    if (o("json-stringify") && !o("date-serialization")) {
                        var $ = i.stringify;
                        i.stringify = function(e, t, r) {
                            var n = d.prototype.toJSON;
                            d.prototype.toJSON = s;
                            var i = $(e, t, r);
                            return d.prototype.toJSON = n, i
                        }
                    } else {
                        var x = "\\u00",
                            E = function(e) {
                                var t = e.charCodeAt(0),
                                    r = I[t];
                                return r ? r : x + A(2, t.toString(16))
                            },
                            L = /[\x00-\x1f\x22\x5c]/g,
                            U = function(e) {
                                return L.lastIndex = 0, '"' + (L.test(e) ? e.replace(L, E) : e) + '"'
                            },
                            R = function(e, t, r, n, i, o, s) {
                                var l, u, c, p, g, _, m, y, b;
                                if (a(function() {
                                        l = t[e]
                                    }), "object" == typeof l && l && (l.getUTCFullYear && v.call(l) == S && l.toJSON === d.prototype.toJSON ? l = D(l) : "function" == typeof l.toJSON && (l = l.toJSON(e))), r && (l = r.call(t, e, l)), l == h) return l === h ? l : "null";
                                switch (u = typeof l, "object" == u && (c = v.call(l)), c || u) {
                                    case "boolean":
                                    case O:
                                        return "" + l;
                                    case "number":
                                    case k:
                                        return l > -1 / 0 && l < 1 / 0 ? "" + l : "null";
                                    case "string":
                                    case P:
                                        return U("" + l)
                                }
                                if ("object" == typeof l) {
                                    for (m = s.length; m--;)
                                        if (s[m] === l) throw f();
                                    if (s.push(l), p = [], y = o, o += i, c == C) {
                                        for (_ = 0, m = l.length; _ < m; _++) g = R(_, l, r, n, i, o, s), p.push(g === h ? "null" : g);
                                        b = p.length ? i ? "[\n" + o + p.join(",\n" + o) + "\n" + y + "]" : "[" + p.join(",") + "]" : "[]"
                                    } else j(n || l, function(e) {
                                        var t = R(e, l, r, n, i, o, s);
                                        t !== h && p.push(U(e) + ":" + (i ? " " : "") + t)
                                    }), b = p.length ? i ? "{\n" + o + p.join(",\n" + o) + "\n" + y + "}" : "{" + p.join(",") + "}" : "{}";
                                    return s.pop(), b
                                }
                            };
                        i.stringify = function(e, r, n) {
                            var i, a, o, s;
                            if (t[typeof r] && r)
                                if (s = v.call(r), s == w) a = r;
                                else if (s == C) {
                                o = {};
                                for (var l, u = 0, c = r.length; u < c;) l = r[u++], s = v.call(l), "[object String]" != s && "[object Number]" != s || (o[l] = 1)
                            }
                            if (n)
                                if (s = v.call(n), s == k) {
                                    if ((n -= n % 1) > 0)
                                        for (n > 10 && (n = 10), i = ""; i.length < n;) i += " "
                                } else s == P && (i = n.length <= 10 ? n : n.slice(0, 10));
                            return R("", (l = {}, l[""] = e, l), a, o, i, "", [])
                        }
                    }
                }
                if (!o("json-parse")) {
                    var B, H, J = u.fromCharCode,
                        M = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        q = function() {
                            throw B = H = null, p()
                        },
                        K = function() {
                            for (var e, t, r, n, i, a = H, o = a.length; B < o;) switch (i = a.charCodeAt(B)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    B++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = N ? a.charAt(B) : a[B], B++, e;
                                case 34:
                                    for (e = "@", B++; B < o;)
                                        if (i = a.charCodeAt(B), i < 32) q();
                                        else if (92 == i) switch (i = a.charCodeAt(++B)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            e += M[i], B++;
                                            break;
                                        case 117:
                                            for (t = ++B, r = B + 4; B < r; B++) i = a.charCodeAt(B), i >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || q();
                                            e += J("0x" + a.slice(t, B));
                                            break;
                                        default:
                                            q()
                                    } else {
                                        if (34 == i) break;
                                        for (i = a.charCodeAt(B), t = B; i >= 32 && 92 != i && 34 != i;) i = a.charCodeAt(++B);
                                        e += a.slice(t, B)
                                    }
                                    if (34 == a.charCodeAt(B)) return B++, e;
                                    q();
                                default:
                                    if (t = B, 45 == i && (n = !0, i = a.charCodeAt(++B)), i >= 48 && i <= 57) {
                                        for (48 == i && (i = a.charCodeAt(B + 1), i >= 48 && i <= 57) && q(), n = !1; B < o && (i = a.charCodeAt(B), i >= 48 && i <= 57); B++);
                                        if (46 == a.charCodeAt(B)) {
                                            for (r = ++B; r < o && (i = a.charCodeAt(r), !(i < 48 || i > 57)); r++);
                                            r == B && q(), B = r
                                        }
                                        if (i = a.charCodeAt(B), 101 == i || 69 == i) {
                                            for (i = a.charCodeAt(++B), 43 != i && 45 != i || B++, r = B; r < o && (i = a.charCodeAt(r), !(i < 48 || i > 57)); r++);
                                            r == B && q(), B = r
                                        }
                                        return +a.slice(t, B)
                                    }
                                    n && q();
                                    var s = a.slice(B, B + 4);
                                    if ("true" == s) return B += 4, !0;
                                    if ("fals" == s && 101 == a.charCodeAt(B + 4)) return B += 5, !1;
                                    if ("null" == s) return B += 4, null;
                                    q()
                            }
                            return "$"
                        },
                        F = function(e) {
                            var t, r;
                            if ("$" == e && q(), "string" == typeof e) {
                                if ("@" == (N ? e.charAt(0) : e[0])) return e.slice(1);
                                if ("[" == e) {
                                    for (t = []; e = K(), "]" != e;) r ? "," == e ? (e = K(), "]" == e && q()) : q() : r = !0, "," == e && q(), t.push(F(e));
                                    return t
                                }
                                if ("{" == e) {
                                    for (t = {}; e = K(), "}" != e;) r ? "," == e ? (e = K(), "}" == e && q()) : q() : r = !0, "," != e && "string" == typeof e && "@" == (N ? e.charAt(0) : e[0]) && ":" == K() || q(), t[e.slice(1)] = F(K());
                                    return t
                                }
                                q()
                            }
                            return e
                        },
                        V = function(e, t, r) {
                            var n = W(e, t, r);
                            n === h ? delete e[t] : e[t] = n
                        },
                        W = function(e, t, r) {
                            var n, i = e[t];
                            if ("object" == typeof i && i)
                                if (v.call(i) == C)
                                    for (n = i.length; n--;) V(v, j, i, n, r);
                                else j(i, function(e) {
                                    V(i, e, r)
                                });
                            return r.call(e, t, i)
                        };
                    i.parse = function(e, t) {
                        var r, n;
                        return B = 0, H = "" + e, r = F(K()), "$" != K() && q(), B = H = null, t && v.call(t) == w ? W((n = {}, n[""] = r, n), "", t) : r
                    }
                }
            }
            return i.runInContext = e, i
        }
        var t = {
                "function": !0,
                object: !0
            },
            r = t[typeof window] && window || this,
            n = r.JSON,
            i = r.JSON3,
            a = !1,
            o = e(r, r.JSON3 = {
                noConflict: function() {
                    return a || (a = !0, r.JSON = n, r.JSON3 = i, n = i = null), o
                }
            });
        r.JSON ? (r.JSON.parse = o.parse, r.JSON.stringify = o.stringify) : r.JSON = {
            parse: o.parse,
            stringify: o.stringify
        }
    }).call(window),
        function(e, t) {
            t(e)
        }(window, function(e) {
            if (e.atob) try {
                e.atob(" ")
            } catch (t) {
                e.atob = function(e) {
                    var t = function(t) {
                        return e(String(t).replace(/[\t\n\f\r ]+/g, ""))
                    };
                    return t.original = e, t
                }(e.atob)
            } else {
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
                e.btoa = function(e) {
                    e = String(e);
                    for (var t, n, i, a, o = "", s = 0, l = e.length % 3; s < e.length;) {
                        if ((n = e.charCodeAt(s++)) > 255 || (i = e.charCodeAt(s++)) > 255 || (a = e.charCodeAt(s++)) > 255) return "";
                        t = n << 16 | i << 8 | a, o += r.charAt(t >> 18 & 63) + r.charAt(t >> 12 & 63) + r.charAt(t >> 6 & 63) + r.charAt(63 & t)
                    }
                    return l ? o.slice(0, l - 3) + "===".substring(l) : o
                }, e.atob = function(e) {
                    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !n.test(e)) return "";
                    e += "==".slice(2 - (3 & e.length));
                    for (var t, i, a, o = "", s = 0; s < e.length;) t = r.indexOf(e.charAt(s++)) << 18 | r.indexOf(e.charAt(s++)) << 12 | (i = r.indexOf(e.charAt(s++))) << 6 | (a = r.indexOf(e.charAt(s++))), o += 64 === i ? String.fromCharCode(t >> 16 & 255) : 64 === a ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                    return o
                }
            }
        });
    var Xi, Zi = {
            setup: function(e) {
                Xi = e
            },
            log: function() {
                (Xi || console && console.log || function() {}).apply(null, arguments)
            }
        },
        Gi = {
            get: function(e) {
                return window.localStorage.getItem(e)
            },
            parse: function(e) {
                var t;
                try {
                    t = JSON.parse(Gi.get(e)) || null
                } catch (r) {
                    Zi.log(r)
                }
                return t
            },
            set: function(e, t) {
                try {
                    window.localStorage.setItem(e, t)
                } catch (r) {
                    Zi.log(r)
                }
            },
            remove: function(e) {
                window.localStorage.removeItem(e)
            },
            isSupport: function() {
                var e = !0;
                try {
                    var t = "__local_store_support__",
                        r = "testIsSupportStorage";
                    Gi.set(t, r), Gi.get(t) !== r && (e = !1), Gi.remove(t)
                } catch (n) {
                    e = !1
                }
                return e
            }
        },
        Qi = function() {
            function e() {
                return r = (9301 * r + 49297) % 233280, r / 233280
            }
            var t = new Date,
                r = t.getTime();
            return function(t) {
                return Math.ceil(e() * t)
            }
        }();
    a.prototype.get = function(e, r, a, o) {
        if (!e) throw new Error("key is must");
        r = r || 1e4, a = a || 1e3, o = o || function() {};
        var s = this.lockGetPrefix + e,
            l = Gi.get(s),
            u = String(n());
        return l && (l = i(l) || {
            randomNum: 0,
            expireTime: 0
        }, l.expireTime > t()) ? o(null) : (Gi.set(s, JSON.stringify({
            randomNum: u,
            expireTime: t() + r
        })), void setTimeout(function() {
            l = i(Gi.get(s)) || {
                randomNum: 0,
                expireTime: 0
            }, l && l.randomNum === u ? (o(Gi.get(e)), Gi.remove(e), Gi.remove(s)) : o(null)
        }, a))
    }, a.prototype.set = function(e, r, a, o, s) {
        if (!e || !r) throw new Error("key and val is must");
        a = a || 1e4, o = o || 1e3, s = s || function() {};
        var l = this.lockSetPrefix + e,
            u = Gi.get(l),
            c = String(n());
        return u && (u = i(u) || {
            randomNum: 0,
            expireTime: 0
        }, u.expireTime > t()) ? s({
            status: "fail",
            reason: "This key is locked"
        }) : (Gi.set(l, JSON.stringify({
            randomNum: c,
            expireTime: t() + a
        })), void setTimeout(function() {
            u = i(Gi.get(l)) || {
                randomNum: 0,
                expireTime: 0
            }, u.randomNum === c ? Gi.set(e, r) && s({
                status: "success"
            }) : s({
                status: "fail",
                reason: "This key is locked"
            })
        }, o))
    }, l.prototype.on = function(e, t) {
        if (!e || !t) return !1;
        if (!s(t)) throw new Error("listener must be a function");
        this._events[e] = this._events[e] || [];
        var r = "object" == typeof t;
        return this._events[e].push(r ? t : {
            listener: t,
            once: !1
        }), this
    }, l.prototype.prepend = function(e, t) {
        if (!e || !t) return !1;
        if (!s(t)) throw new Error("listener must be a function");
        this._events[e] = this._events[e] || [];
        var r = "object" == typeof t;
        return this._events[e].unshift(r ? t : {
            listener: t,
            once: !1
        }), this
    }, l.prototype.prependOnce = function(e, t) {
        return this.prepend(e, {
            listener: t,
            once: !0
        })
    }, l.prototype.once = function(e, t) {
        return this.on(e, {
            listener: t,
            once: !0
        })
    }, l.prototype.off = function(e, t) {
        var r = this._events[e];
        if (!r) return !1;
        if ("number" == typeof t) r.splice(t, 1);
        else if ("function" == typeof t)
            for (var n = 0, i = r.length; n < i; n++) r[n] && r[n].listener === t && r.splice(n, 1);
        return this
    }, l.prototype.emit = function(e, t) {
        var r = this._events[e];
        if (!r) return !1;
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            i && (i.listener.call(this, t || {}), i.once && this.off(e, n))
        }
        return this
    }, l.prototype.removeAllListeners = function(e) {
        e && this._events[e] ? this._events[e] = [] : this._events = {}
    }, l.prototype.listeners = function(e) {
        return e && "string" == typeof e ? this._events[e] : this._events
    };
    var Yi = function() {
            var e = function() {
                    for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                    return e.toString(16) + t.toString(16)
                },
                t = function() {
                    return n().toString(16).replace(".", "")
                },
                r = function() {
                    function e(e, t) {
                        var r, n = 0;
                        for (r = 0; r < t.length; r++) n |= i[r] << 8 * r;
                        return e ^ n
                    }
                    var t, r, n = navigator.userAgent,
                        i = [],
                        a = 0;
                    for (t = 0; t < n.length; t++) r = n.charCodeAt(t), i.unshift(255 & r), i.length >= 4 && (a = e(a, i), i = []);
                    return i.length > 0 && (a = e(a, i)), a.toString(16)
                };
            return function() {
                var i = String(screen.height * screen.width);
                i = i && /\d{5,}/.test(i) ? i.toString(16) : String(31242 * n()).replace(".", "").slice(0, 8);
                var a = e() + "-" + t() + "-" + r() + "-" + i + "-" + e();
                return a ? a : (String(n()) + String(n()) + String(n())).slice(2, 15)
            }
        }(),
        ea = function(e) {
            this.ele = e
        },
        ta = function(e, t) {
            for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
            return r
        };
    ea.prototype = {
        addClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this
        },
        removeClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this
        },
        hasClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1
        },
        attr: function(e, t) {
            return "string" == typeof e && v(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this)
        },
        offset: function() {
            var e = this.ele.getBoundingClientRect();
            if (e.width || e.height) {
                var t = this.ele.ownerDocument,
                    r = t.documentElement;
                return {
                    top: e.top + window.pageYOffset - r.clientTop,
                    left: e.left + window.pageXOffset - r.clientLeft
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        getSize: function() {
            if (!window.getComputedStyle) return {
                width: this.ele.offsetWidth,
                height: this.ele.offsetHeight
            };
            try {
                var e = this.ele.getBoundingClientRect();
                return {
                    width: e.width,
                    height: e.height
                }
            } catch (t) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        getStyle: function(e) {
            return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
        },
        wrap: function(e) {
            var t = document.createElement(e);
            return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), b(t)
        },
        getCssStyle: function(e) {
            var t = this.ele.style.getPropertyValue(e);
            if (t) return t;
            var r = null;
            if ("function" == typeof window.getMatchedCSSRules && (r = window.getMatchedCSSRules(this.ele)), !r || !y(r)) return null;
            for (var n = r.length - 1; n >= 0; n--) {
                var i = r[n];
                if (t = i.style.getPropertyValue(e)) return t
            }
        },
        sibling: function(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        },
        next: function() {
            return this.sibling(this.ele, "nextSibling")
        },
        prev: function() {
            return this.sibling(this.ele, "previousSibling")
        },
        siblings: function() {
            return ta((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function() {
            return ta(this.ele.firstChild)
        },
        parent: function() {
            var e = this.ele.parentNode;
            return e = e && 11 !== e.nodeType ? e : null, b(e)
        },
        previousElementSibling: function() {
            var e = this.ele;
            if ("previousElementSibling" in document.documentElement) return b(e.previousElementSibling);
            for (; e = e.previousSibling;)
                if (1 === e.nodeType) return b(e);
            return b(null)
        },
        getSameTypeSiblings: function() {
            for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), n = [], i = 0; i < t.children.length; i++) {
                var a = t.children[i];
                1 === a.nodeType && a.tagName.toLowerCase() === r && n.push(t.children[i])
            }
            return n
        },
        getParents: function() {
            try {
                var e = this.ele;
                if (!h(e)) return [];
                var t = [e];
                if (null === e || null === e.parentElement) return [];
                for (; null !== e.parentElement;) e = e.parentElement, t.push(e);
                return t
            } catch (r) {
                return []
            }
        }
    };
    var ra = Array.prototype.forEach,
        na = Object.prototype.hasOwnProperty,
        ia = Object.prototype.hasOwnProperty,
        aa = {
            get: function(e) {
                for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                    for (var i = r[n];
                        " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(t)) return u(i.substring(t.length, i.length))
                }
                return null
            },
            set: function(e, t, r, n, i, a) {
                function o(e) {
                    return !!e && e.replace(/\r\n/g, "")
                }
                var s = a,
                    l = "",
                    u = "",
                    c = "";
                if (r = null == r ? 73e3 : r, 0 !== r) {
                    var d = new Date;
                    "s" === String(r).slice(-1) ? d.setTime(d.getTime() + 1e3 * Number(String(r).slice(0, -1))) : d.setTime(d.getTime() + 24 * r * 60 * 60 * 1e3), l = "; expires=" + d.toGMTString()
                }
                n && "" !== n && (c = "; SameSite=" + n), i && (u = "; secure");
                var p = "",
                    f = "",
                    g = "";
                e && (p = o(e)), t && (f = o(t)), s && (g = o(s)), p && f && (document.cookie = p + "=" + encodeURIComponent(f) + l + "; path=/" + g + c + u)
            },
            remove: function(e, t) {
                this.set(e, "1", -1, t)
            },
            isSupport: function(e, t, r, n, i) {
                function a() {
                    o.set(e, t, r, n, i);
                    var a = o.get(e);
                    return a === t && (o.remove(e), !0)
                }
                e = e || "cookie_support_test", t = t || "1";
                var o = this;
                return navigator.cookieEnabled && a()
            }
        },
        oa = Object.prototype.hasOwnProperty,
        sa = {
            isSupport: function() {
                var e = !0,
                    t = "__session_storage_support__",
                    r = "testIsSupportStorage";
                try {
                    sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), e = !0) : e = !1
                } catch (n) {
                    e = !1
                }
                return e
            }
        },
        la = {
            "+": "-",
            "/": "_",
            "=": "."
        },
        ua = {
            "-": "+",
            _: "/",
            ".": "="
        },
        ca = {
            encode: function(e) {
                return e.replace(/[+\/=]/g, function(e) {
                    return la[e]
                })
            },
            decode: function(e) {
                return e.replace(/[-_.]/g, function(e) {
                    return ua[e]
                })
            },
            trim: function(e) {
                return e.replace(/[.=]{1,2}$/, "")
            },
            isBase64: function(e) {
                return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
            },
            isUrlSafeBase64: function(e) {
                return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
            }
        },
        da = {
            __proto__: null,
            ConcurrentStorage: a,
            EventEmitter: l,
            URL: _,
            UUID: Yi,
            addEvent: w,
            addHashEvent: S,
            ajax: O,
            base64Decode: j,
            base64Encode: I,
            bindReady: T,
            cookie: aa,
            coverExtend: A,
            decodeURI: D,
            decodeURIComponent: u,
            dfmapping: $,
            each: P,
            encodeDates: L,
            extend: C,
            extend2Lev: U,
            filter: R,
            formatDate: E,
            formatJsonString: B,
            getCookieTopLevelDomain: J,
            getDomBySelector: M,
            getElementContent: q,
            getHostname: K,
            getIOSVersion: F,
            getQueryParam: V,
            getQueryParamsFromUrl: W,
            getRandom: n,
            getRandomBasic: Qi,
            getScreenOrientation: X,
            getUA: Z,
            getURL: G,
            getURLPath: Q,
            getURLSearchParams: d,
            hasAttribute: Y,
            hasAttributes: ee,
            hashCode: te,
            hashCode53: re,
            indexOf: ne,
            inherit: ie,
            isArguments: ae,
            isArray: y,
            isBoolean: oe,
            isDate: x,
            isElement: h,
            isEmptyObject: se,
            isFunction: e,
            isHttpUrl: le,
            isIOS: ue,
            isJSONString: ce,
            isNumber: de,
            isObject: r,
            isString: p,
            isSupportBeaconSend: pe,
            isSupportCors: fe,
            isUndefined: v,
            jsonp: ge,
            listenPageState: _e,
            loadScript: he,
            localStorage: Gi,
            logger: Zi,
            map: N,
            mediaQueriesSupported: z,
            now: t,
            removeScriptProtocol: me,
            rot13defs: ye,
            rot13obfs: ve,
            ry: b,
            safeJSONParse: i,
            searchObjDate: be,
            sessionStorage: sa,
            setCssStyle: we,
            strToUnicode: Se,
            throttle: ke,
            toArray: Ce,
            trim: f,
            unique: Oe,
            urlParse: g,
            urlSafeBase64: ca,
            values: Pe,
            xhr: k,
            startsWith: Ne
        },
        pa = [],
        fa = {
            appendWriter: function(e) {
                pa.push(e)
            },
            msg: function() {
                var e = {
                    module: "",
                    level: "log",
                    brand: "web-sdk",
                    content: null
                };
                e.content = Array.prototype.slice.call(arguments);
                var t = {
                    module: function(t) {
                        return p(t) && (e.module = t), this
                    },
                    level: function(t) {
                        return p(t) && (e.level = t), this
                    },
                    brand: function(t) {
                        return p(t) && (e.brand = t), this
                    },
                    log: function() {
                        if (e.content && e.content.length)
                            for (var t = 0; t < pa.length; t++)
                                if ("function" == typeof pa[t]) try {
                                    pa[t].call(null, e)
                                } catch (r) {}
                        return this
                    }
                };
                return t
            }
        },
        ga = {},
        _a = {
            preset_properties: {
                search_keyword_baidu: !1,
                latest_utm: !0,
                latest_traffic_source_type: !0,
                latest_search_keyword: !0,
                latest_referrer: !0,
                latest_referrer_host: !1,
                latest_landing_page: !1,
                latest_wx_ad_click_id: void 0,
                url: !0,
                title: !0
            },
            encrypt_cookie: !1,
            enc_cookie: !1,
            img_use_crossorigin: !1,
            name: "sa",
            max_referrer_string_length: 200,
            max_string_length: 500,
            max_id_length: 255,
            max_key_length: 100,
            cross_subdomain: !0,
            show_log: !1,
            is_debug: !1,
            source_channel: [],
            sdk_id: "",
            vtrack_ignore: {},
            auto_init: !0,
            is_track_single_page: !1,
            is_single_page: !1,
            batch_send: !1,
            source_type: {},
            callback_timeout: 200,
            datasend_timeout: 8e3,
            is_track_device_id: !1,
            ignore_oom: !0,
            app_js_bridge: !1
        };
    _a.white_list = {}, _a.white_list[location.host] = _(location.href).hostname;
    var ha = "utm_source utm_medium utm_campaign utm_content utm_term",
        ma = "1.26.12",
        va = "sensorsdata_domain_test",
        ya = {
            EMAIL: "$identity_email",
            MOBILE: "$identity_mobile",
            LOGIN: "$identity_login_id"
        },
        ba = {
            get: function(e) {
                return aa.get(e)
            },
            set: function(e, t, r, n) {
                var i = "";
                if (n = v(n) ? ga.cross_subdomain : n) {
                    var a = Ae(location.href);
                    "url\u89e3\u6790\u5931\u8d25" === a && (a = ""), i = a ? "; domain=" + a : ""
                }
                return aa.set(e, t, r, ga.set_cookie_samesite, ga.is_secure_cookie, i)
            },
            remove: function(e, t) {
                return t = v(t) ? ga.cross_subdomain : t, aa.remove(e, t)
            },
            isSupport: function(e, t) {
                return e = e || "sajssdk_2015_cookie_access_test", t = t || "1", aa.isSupport(e, t, 0, null, ga.is_secure_cookie)
            }
        };
    ba.getNewUser = $e;
    var wa = {
            data: {},
            get: function(e) {
                var t = this.data[e];
                return void 0 === t ? null : void 0 !== t._expirationTimestamp_ ? (new Date).getTime() > t._expirationTimestamp_ ? null : t.value : t
            },
            set: function(e, t, r) {
                if (r) {
                    var n, i = new Date;
                    n = "s" === String(r).slice(-1) ? i.getTime() + 1e3 * Number(String(r).slice(0, -1)) : i.getTime() + 24 * r * 60 * 60 * 1e3, t = {
                        value: t,
                        _expirationTimestamp_: n
                    }
                }
                this.data[e] = t
            },
            getNewUserFlagMemoryKey: function(e) {
                return "sajssdk_2015_" + ga.sdk_id + e
            }
        },
        Sa = {
            checkIsAddSign: function(e) {
                "track" === e.type && ($e() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
            },
            is_first_visit_time: !1,
            is_page_first_visited: !1,
            checkIsFirstTime: function(e) {
                "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
            },
            setDeviceId: function() {},
            storeInitCheck: function() {
                if (zi.is_first_visitor) {
                    var e = new Date,
                        t = {
                            h: 23 - e.getHours(),
                            m: 59 - e.getMinutes(),
                            s: 59 - e.getSeconds()
                        };
                    ba.isSupport() ? ba.set(De("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s") : wa.set(wa.getNewUserFlagMemoryKey("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"), this.is_first_visit_time = !0, this.is_page_first_visited = !0
                } else $e() || (this.checkIsAddSign = function(e) {
                    "track" === e.type && (e.properties.$is_first_day = !1)
                }), this.checkIsFirstTime = function(e) {
                    "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
                }
            }
        },
        ka = function() {
            this._events = [], this.pendingEvents = []
        };
    ka.prototype = {
        emit: function(e) {
            var t = [].slice.call(arguments, 1);
            P(this._events, function(r) {
                r.type === e && r.callback.apply(r.context, t)
            }), this.pendingEvents.push({
                type: e,
                data: t
            }), this.pendingEvents.length > 20 ? this.pendingEvents.shift() : null
        },
        on: function(t, r, n, i) {
            e(r) && (this._events.push({
                type: t,
                callback: r,
                context: n || this
            }), i = i !== !1, this.pendingEvents.length > 0 && i && P(this.pendingEvents, function(e) {
                e.type === t && r.apply(n, e.data)
            }))
        },
        tempAdd: function(e, t) {
            if (t && e) return this.emit(e, t)
        },
        isReady: function() {}
    };
    var Pa = {
            data: {},
            id: function() {
                return this.data.id ? this.data.id : (this.data.id = Ue(), this.data.id)
            },
            type: function() {
                return this.data.type ? this.data.type : (this.data.type = Le(), this.data.type)
            }
        },
        Ca = {
            distinct_id: function() {},
            jssdkDebug: function() {},
            _sendDebug: function(e) {},
            apph5: function(e) {
                var t = "app_h5\u6253\u901a\u5931\u8d25-",
                    n = {
                        1: t + "use_app_track\u4e3afalse",
                        2: t + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
                        3.1: t + "Android\u6821\u9a8cserver_url\u5931\u8d25",
                        3.2: t + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
                        4.1: t + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
                        4.2: t + "H5 \u6821\u9a8c Android server_url \u5931\u8d25"
                    },
                    i = e.output,
                    a = e.step,
                    o = e.data || "";
                "all" !== i && "console" !== i || je(n[a]), ("all" === i || "code" === i) && r(ga.is_debug) && ga.is_debug.apph5 && (o.type && "profile" === o.type.slice(0, 7) || (o.properties._jssdk_debug_info = "apph5-" + String(a)))
            },
            defineMode: function(e) {
                var t = {
                    1: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "",
                        link_url: ""
                    },
                    2: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "",
                        link_url: ""
                    },
                    3: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "",
                        link_url: ""
                    },
                    4: {
                        title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
                        message: "Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
                        link_text: "",
                        link_url: ""
                    }
                };
                return !(!e || !t[e]) && t[e]
            },
            protocol: {
                protocolIsSame: function(e, t) {
                    try {
                        if (_(e).protocol !== _(t).protocol) return !1
                    } catch (r) {
                        return Ie("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"), !1
                    }
                    return !0
                },
                serverUrl: function() {
                    p(ga.server_url) && "" !== ga.server_url && !this.protocolIsSame(ga.server_url, location.href) && Ie("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")
                },
                ajax: function(e) {
                    return e !== ga.server_url && void(p(e) && "" !== e && !this.protocolIsSame(e, location.href) && Ie("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"))
                }
            }
        },
        Oa = {
            initPage: function() {
                var e = Re(),
                    t = G(),
                    r = Ae(t);
                r || Ca.jssdkDebug("url_domain\u5f02\u5e38_" + t + "_" + r), this.pageProp = {
                    referrer: e,
                    referrer_host: e ? K(e) : "",
                    url: t,
                    url_host: K(t, "url_host\u53d6\u503c\u5f02\u5e38"),
                    url_domain: r
                }
            },
            pageProp: {},
            campaignParams: function() {
                return zi.kit.getUtmData()
            },
            campaignParamsStandard: function(e, t) {
                e = e || "", t = t || "";
                var r = Oa.campaignParams(),
                    n = {},
                    i = {};
                return P(r, function(r, a, o) {
                    (" " + ha + " ").indexOf(" " + a + " ") !== -1 ? n[e + a] = o[a] : i[t + a] = o[a]
                }), {
                    $utms: n,
                    otherUtms: i
                }
            },
            properties: function() {
                var e = window.innerHeight || document.documentElement.clientHeight || document.body && document.body.clientHeight || 0,
                    t = window.innerWidth || document.documentElement.clientWidth || document.body && document.body.clientWidth || 0,
                    r = {
                        $timezone_offset: (new Date).getTimezoneOffset(),
                        $screen_height: Number(screen.height) || 0,
                        $screen_width: Number(screen.width) || 0,
                        $viewport_height: e,
                        $viewport_width: t,
                        $lib: "js",
                        $lib_version: ma
                    };
                return r
            },
            currentProps: {},
            register: function(e) {
                C(Oa.currentProps, e)
            }
        },
        Na = {},
        ja = new l;
    Na.spa = ja, Na.sdk = new l, Na.data = new l, Na.initSystemEvent = function() {
        tt(function(e) {
            ja.emit("switch", e)
        })
    }, Na.EVENT_LIST = {
        spaSwitch: ["spa", "switch"],
        sdkBeforeInit: ["sdk", "beforeInit"],
        sdkInitPara: ["sdk", "initPara"],
        sdkAfterInitPara: ["sdk", "afterInitPara"],
        sdkInitAPI: ["sdk", "initAPI"],
        sdkAfterInitAPI: ["sdk", "afterInitAPI"],
        sdkAfterInit: ["sdk", "afterInit"],
        sdkReady: ["sdk", "ready"],
        dataSendSuccess: ["data", "sendSuccess"],
        dataSendFail: ["data", "sendFail"]
    };
    var Ia = function(e) {
        this.callback = e.callback, this.server_url = e.server_url, this.data = e.data, this.origin_data = e.origin_data
    };
    Ia.prototype.start = function() {
        var e = this,
            t = new Date;
        Qe({
            url: this.server_url,
            type: "POST",
            data: e.data,
            credentials: !1,
            timeout: ga.datasend_timeout,
            cors: !0,
            success: function(r, n) {
                Na.data.emit("sendSuccess", {
                    status: String(n),
                    resText: r,
                    type: "ajax_single",
                    timeout_config: ga.datasend_timeout,
                    request_timeout: new Date - t,
                    data: e.origin_data
                }), e.end()
            },
            error: function(r, n) {
                Na.data.emit("sendFail", {
                    status: String(n),
                    resText: r,
                    type: "ajax_single",
                    timeout_config: ga.datasend_timeout,
                    request_timeout: new Date - t,
                    data: e.origin_data
                }), e.end()
            }
        })
    }, Ia.prototype.end = function() {
        if (this.callback) {
            if (je("warning: sdk callback is deprecated."), !e(this.callback)) return void je("error: sdk callback must be function.");
            this.callback()
        }
    };
    var Ta = "sawebjssdk-",
        Aa = "tab-sawebjssdk-";
    nt.prototype = {
        batchInterval: function() {
            "" === this.serverUrl && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this.hasTabStorage = !0);
            var e = this;
            e.timer = setTimeout(function() {
                e.updateExpireTime(), e.recycle(), e.send(), clearTimeout(e.timer), e.batchInterval()
            }, ga.batch_send.send_interval)
        },
        getServerUrl: function() {
            return p(ga.server_url) && "" !== ga.server_url || y(ga.server_url) && ga.server_url.length ? void(this.serverUrl = y(ga.server_url) ? ga.server_url[0] : ga.server_url) : Te("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")
        },
        send: function() {
            if (this.sendTimeStamp && t() - this.sendTimeStamp < ga.batch_send.send_interval) return !1;
            var e = Gi.get(this.tabKey);
            if (e) {
                this.sendTimeStamp = t(), e = i(e) || this.generateTabStorageVal();
                var r = Oe(e.data);
                if (r.length) {
                    for (var n = [], a = 0; a < r.length; a++) {
                        var o = zi.store.readObjectVal(r[a]);
                        o && (o._flush_time = (new Date).getTime(), n.push(o))
                    }
                    n.length && this.request(n, e.data)
                }
            }
        },
        updateExpireTime: function() {
            var e = Gi.get(this.tabKey);
            e && (e = i(e) || this.generateTabStorageVal(), e.expireTime = t() + 2 * ga.batch_send.send_interval, e.serverUrl = this.serverUrl, Gi.set(this.tabKey, JSON.stringify(e)))
        },
        request: function(e, t) {
            var r = this,
                n = new Date;
            Qe({
                url: this.serverUrl,
                type: "POST",
                data: "data_list=" + encodeURIComponent(I(JSON.stringify(e))),
                credentials: !1,
                timeout: ga.batch_send.datasend_timeout,
                cors: !0,
                success: function(i, a) {
                    Na.data.emit("sendSuccess", {
                        status: String(a),
                        resText: i,
                        type: "ajax_batch",
                        timeout_config: ga.batch_send.datasend_timeout,
                        request_timeout: new Date - n,
                        data: e
                    }), r.remove(t), r.sendTimeStamp = 0
                },
                error: function(t, i) {
                    Na.data.emit("sendFail", {
                        status: String(i),
                        resText: t,
                        type: "ajax_batch",
                        timeout_config: ga.batch_send.datasend_timeout,
                        request_timeout: new Date - n,
                        data: e
                    }), r.sendTimeStamp = 0
                }
            })
        },
        remove: function(e) {
            var t = Gi.get(this.tabKey);
            if (t) {
                for (var r = (i(t) || this.generateTabStorageVal()).data, n = 0; n < e.length; n++) {
                    var a = ne(r, e[n]);
                    a > -1 && r.splice(a, 1), Gi.remove(e[n])
                }
                r = Oe(r), Gi.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)))
            }
        },
        add: function(e) {
            var r = Ta + String(n()),
                a = Gi.get(this.tabKey);
            null === a ? (this.tabKey = Aa + String(n()), a = this.generateTabStorageVal()) : a = i(a) || this.generateTabStorageVal(), a.data.push(r), a.expireTime = t() + 2 * ga.batch_send.send_interval, Gi.set(this.tabKey, JSON.stringify(a)), zi.store.saveObjectVal(r, e), "track_signup" !== e.type && "$pageview" !== e.event || this.sendImmediately()
        },
        generateTabStorage: function() {
            this.tabKey = Aa + String(n()), Gi.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()))
        },
        generateTabStorageVal: function(e) {
            return e = e || [], {
                data: e,
                expireTime: t() + 2 * ga.batch_send.send_interval,
                serverUrl: this.serverUrl
            }
        },
        sendImmediately: function() {
            this.send()
        },
        recycle: function() {
            for (var e = {}, r = 1e4, n = "sajssdk-lock-get-", o = 0; o < localStorage.length; o++) {
                var s = localStorage.key(o),
                    l = this;
                if (0 === s.indexOf(Aa)) {
                    for (var u = i(Gi.get(s)) || this.generateTabStorageVal(), c = 0; c < u.data.length; c++) e[u.data[c]] = !0;
                    if (s !== l.tabKey && t() > u.expireTime && this.serverUrl === u.serverUrl) {
                        var d = new a(n);
                        d.get(s, r, 1e3, function(e) {
                            if (e) {
                                null === Gi.get(l.tabKey) && l.generateTabStorage();
                                var t = i(e) || l.generateTabStorageVal(),
                                    r = i(Gi.get(l.tabKey)) || l.generateTabStorageVal();
                                r.data = Oe(r.data.concat(t.data)), Gi.set(l.tabKey, JSON.stringify(r))
                            }
                        })
                    }
                } else if (0 === s.indexOf(n)) {
                    var p = i(Gi.get(s)) || {
                        expireTime: 0
                    };
                    t() - p.expireTime > r && Gi.remove(s)
                }
            }
            for (var f = 0; f < localStorage.length; f++) {
                var g = localStorage.key(f);
                0 !== g.indexOf(Ta) || e[g] || Gi.remove(g)
            }
        }
    };
    var Da = function(e) {
        this.callback = e.callback, this.server_url = e.server_url, this.data = e.data
    };
    Da.prototype.start = function() {
        var e = this;
        "object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this.server_url, this.data), setTimeout(function() {
            e.end()
        }, 40)
    }, Da.prototype.end = function() {
        if (this.callback) {
            if (je("warning: sdk callback is deprecated."), !e(this.callback)) return void je("error: sdk callback must be function.");
            this.callback()
        }
    };
    var $a = function(e) {
        this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, ga.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.server_url = e.data
    };
    $a.prototype.start = function() {
        var e = this;
        ga.ignore_oom && (this.img.onload = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.end()
        }, this.img.onerror = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.end()
        }, this.img.onabort = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.end()
        }), this.img.src = this.server_url
    }, $a.prototype.lastClear = function() {
        var e = Z();
        void 0 !== e.ie ? this.img.src = "about:blank" : this.img.src = ""
    }, $a.prototype.end = function() {
        if (this.callback) {
            if (je("warning: sdk callback is deprecated."), !e(this.callback)) return void je("error: sdk callback must be function.");
            this.callback()
        }
        var t = this;
        setTimeout(function() {
            t.lastClear && t.lastClear()
        }, ga.datasend_timeout - ga.callback_timeout)
    };
    var xa = {
            __proto__: null,
            addEvent: xe,
            EventEmitterSa: ka,
            cookie: ba,
            info: Oa,
            getReferrer: Re,
            getCurrentDomain: Ae,
            isBaiduTraffic: Ee,
            getReferrerEqid: Ue,
            getReferrerEqidType: Le,
            getBaiduKeyword: Pa,
            isReferralTraffic: Be,
            getKeywordFromReferrer: He,
            getReferSearchEngine: Je,
            getSourceFromReferrer: Me,
            getWxAdIdFromUrl: qe,
            parseSuperProperties: Ke,
            searchConfigData: Fe,
            strip_empty_properties: Ve,
            getEleInfo: Xe,
            getElementContent: Ge,
            ajax: Qe,
            optimizeServerUrl: Ye,
            encodeTrackData: et,
            AjaxSend: Ia,
            BatchSend: nt,
            BeaconSend: Da,
            ImageSend: $a
        },
        Ea = new ka,
        La = {
            requests: [],
            _sessionState: {},
            _state: {
                distinct_id: "",
                first_id: "",
                props: {},
                identities: {}
            },
            getProps: function() {
                return this._state.props || {}
            },
            getSessionProps: function() {
                return this._sessionState
            },
            getOriginDistinctId: function() {
                return this._state._distinct_id || this._state.distinct_id
            },
            getOriginUnionId: function(e) {
                var t = {};
                e = e || this._state;
                var r = e._first_id || e.first_id,
                    n = e._distinct_id || e.distinct_id;
                return r && n ? (t.login_id = n, t.anonymous_id = r) : t.anonymous_id = n, t
            },
            getIdentities: function() {
                var e = JSON.parse(JSON.stringify(this._state.identities));
                return e.$identity_anonymous_id = this.getAnonymousId(), e
            },
            getAnonymousId: function() {
                return La._state._first_id || La._state.first_id || La._state._distinct_id || La._state.distinct_id
            },
            getDistinctId: function() {
                var e = this.getUnionId();
                return e.login_id || e.anonymous_id
            },
            getUnionId: function(e) {
                var t = this.getOriginUnionId(e);
                return t.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== ya.LOGIN && (t.login_id = this._state.history_login_id.name + "+" + t.login_id), t
            },
            getFirstId: function() {
                return this._state._first_id || this._state.first_id
            },
            initSessionState: function() {
                var e = ba.get("sensorsdata2015session");
                e = zi.kit.userDecryptIfNeeded(e);
                var t = null;
                null !== e && "object" == typeof(t = i(e)) && (this._sessionState = t || {})
            },
            setOnce: function(e, t) {
                e in this._state || this.set(e, t)
            },
            set: function(e, t) {
                this._state = this._state || {};
                var r = this._state.distinct_id;
                this._state[e] = t, "first_id" === e ? delete this._state._first_id : "distinct_id" === e && delete this._state._distinct_id, this.save(), "distinct_id" === e && r && Ea.tempAdd("changeDistinctId", t)
            },
            change: function(e, t) {
                this._state["_" + e] = t
            },
            setSessionProps: function(e) {
                zi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");
                var t = this._sessionState;
                C(t, e), this.sessionSave(t)
            },
            setSessionPropsOnce: function(e) {
                zi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");
                var t = this._sessionState;
                A(t, e), this.sessionSave(t)
            },
            setProps: function(e, t) {
                var r = {};
                r = t ? e : C(this._state.props || {}, e);
                for (var n in r) "string" == typeof r[n] && (r[n] = r[n].slice(0, zi.para.max_referrer_string_length));
                this.set("props", r)
            },
            setPropsOnce: function(e) {
                var t = this._state.props || {};
                A(t, e), this.set("props", t)
            },
            clearAllProps: function(e) {
                this._sessionState = {};
                var t;
                if (y(e) && e.length > 0)
                    for (t = 0; t < e.length; t++) p(e[t]) && e[t].indexOf("latest_") === -1 && r(this._state.props) && e[t] in this._state.props && delete this._state.props[e[t]];
                else if (r(this._state.props))
                    for (t in this._state.props) 1 !== t.indexOf("latest_") && delete this._state.props[t];
                this.sessionSave({}), this.save()
            },
            sessionSave: function(e) {
                zi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee"), this._sessionState = e;
                var t = JSON.stringify(this._sessionState);
                zi.para.encrypt_cookie && (t = zi.kit.userEncrypt(t)), ba.set("sensorsdata2015session", t, 0)
            },
            save: function() {
                var e = JSON.parse(JSON.stringify(this._state));
                delete e._first_id, delete e._distinct_id, e.identities && (e.identities = I(JSON.stringify(e.identities)));
                var t = JSON.stringify(e);
                zi.para.encrypt_cookie && (t = zi.kit.userEncrypt(t)), ba.set(this.getCookieName(), t, 360, zi.para.cross_subdomain)
            },
            getCookieName: function() {
                var e = "";
                if (zi.para.cross_subdomain === !1) {
                    try {
                        var t = location.host;
                        v(zi.para.white_list[t]) || (e = zi.para.white_list[t])
                    } catch (r) {
                        Ie(r)
                    }
                    e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + zi.para.sdk_id + e.replace(/\./g, "_") : "sa_jssdk_2015_root" + zi.para.sdk_id
                } else e = "sensorsdata2015jssdkcross" + zi.para.sdk_id;
                return e
            },
            init: function() {
                function e(e) {
                    var t;
                    e.identities && (0 === e.identities.indexOf("\n/") ? e.identities = i(ye(e.identities)) : e.identities = i(j(e.identities)));
                    var n = La.getOriginUnionId(e);
                    e.identities && r(e.identities) && !se(e.identities) || (e.identities = {}, e.identities.$identity_cookie_id = Yi()), e.history_login_id = e.history_login_id || {};
                    var a = e.history_login_id,
                        o = a.name;
                    if (n.login_id)
                        if (o && e.identities.hasOwnProperty(o)) {
                            if (e.identities[o] !== n.login_id) {
                                e.identities[o] = n.login_id;
                                for (t in e.identities) e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== o && delete e.identities[t];
                                e.history_login_id.value = n.login_id
                            }
                        } else {
                            var s = o || ya.LOGIN;
                            e.identities[s] = n.login_id;
                            for (t in e.identities) e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== s && delete e.identities[t];
                            e.history_login_id = {
                                name: s,
                                value: n.login_id
                            }
                        }
                    else {
                        if (e.identities.hasOwnProperty("$identity_login_id") || e.identities.hasOwnProperty(o))
                            for (t in e.identities) e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && "$identity_anonymous_id" !== t && delete e.identities[t];
                        e.history_login_id = {
                            name: "",
                            value: ""
                        }
                    }
                    return e
                }

                function t(e) {
                    La.set("distinct_id", e), La.set("identities", {
                        $identity_cookie_id: e
                    }), La.set("history_login_id", {
                        name: "",
                        value: ""
                    })
                }
                this.initSessionState();
                var n, a, o = Yi();
                ba.isSupport() && (n = ba.get(this.getCookieName()), n = zi.kit.userDecryptIfNeeded(n), a = i(n)), ba.isSupport() && null !== n && ce(n) && r(a) && (!r(a) || a.distinct_id) ? (La._state = C(e(a)), La.save()) : (zi.is_first_visitor = !0, t(o)), Sa.setDeviceId(o, this), Sa.storeInitCheck()
            },
            saveObjectVal: function(e, t) {
                p(t) || (t = JSON.stringify(t)), 1 == zi.para.encrypt_cookie && (t = zi.kit.userEncrypt(t)), Gi.set(e, t)
            },
            readObjectVal: function(e) {
                var t = Gi.get(e);
                return t ? (t = zi.kit.userDecryptIfNeeded(t), i(t)) : null
            }
        },
        Ua = {
            string: function(e) {
                Ie(e + " must be string")
            },
            emptyString: function(e) {
                Ie(e + "'s is empty")
            },
            regexTest: function(e) {
                Ie(e + " is invalid")
            },
            idLength: function(e) {
                Ie(e + " length is longer than " + ga.max_id_length)
            },
            keyLength: function(e) {
                Ie(e + " length is longer than " + ga.max_key_length)
            },
            stringLength: function(e) {
                Ie(e + " length is longer than " + ga.max_string_length)
            },
            voidZero: function(e) {
                Ie(e + "'s is undefined")
            },
            reservedLoginId: function(e) {
                Ie(e + " is invalid")
            },
            reservedBind: function(e) {
                Ie(e + " is invalid")
            },
            reservedUnbind: function(e) {
                Ie(e + " is invalid")
            }
        },
        Ra = {
            regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
            loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
            bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
            unbindReservedNames: ["$identity_anonymous_id", ya.LOGIN],
            string: function(e) {
                return !!p(e)
            },
            emptyString: function(e) {
                return !(!p(e) || 0 === f(e).length)
            },
            regexTest: function(e) {
                return !(!p(e) || !this.regName.test(e))
            },
            idLength: function(e) {
                return !(!p(e) || e.length > ga.max_id_length)
            },
            keyLength: function(e) {
                return !(!p(e) || e.length > ga.max_key_length)
            },
            stringLength: function(e) {
                return !(!p(e) || e.length > ga.max_string_length)
            },
            voidZero: function(e) {
                return void 0 !== e
            },
            reservedLoginId: function(e) {
                return !(ne(this.loginIDReservedNames, e) > -1)
            },
            reservedUnbind: function(e) {
                return !(ne(this.unbindReservedNames, e) > -1)
            },
            reservedBind: function(e) {
                var t = La._state.history_login_id;
                return !(t && t.name && t.name === e || ne(this.bindReservedNames, e) > -1)
            }
        },
        Ba = {
            distinct_id: {
                rules: ["string", "emptyString", "idLength"],
                onComplete: function(t, r, n) {
                    return !t && ("emptyString" === n && (r = "Id"), e(Ua[n]) && Ua[n](r), "idLength" === n) || t
                }
            },
            event: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(t, r, n) {
                    return t || ("emptyString" === n && (r = "eventName"), e(Ua[n]) && Ua[n](r)), !0
                }
            },
            propertyKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(t, r, n) {
                    return t || ("emptyString" === n && (r = "Property key"), e(Ua[n]) && Ua[n](r)), !0
                }
            },
            propertyValue: {
                rules: ["voidZero"],
                onComplete: function(t, r, n) {
                    return t || (r = "Property Value", e(Ua[n]) && Ua[n](r)), !0
                }
            },
            properties: function(t) {
                return r(t) ? P(t, function(t, r) {
                    it({
                        propertyKey: r
                    });
                    var n = function(t, n, i) {
                        return t || (n = r + "'s Value", e(Ua[i]) && Ua[i](n)), !0
                    };
                    it({
                        propertyValue: t
                    }, n)
                }) : Ra.voidZero(t) && Ie("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"), !0
            },
            propertiesMust: function(e) {
                return void 0 !== e && r(e) && !se(e) ? this.properties.call(this, e) : Ie("properties\u5fc5\u987b\u662f\u5bf9\u8c61"), !0
            },
            item_type: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(t, r, n) {
                    return t || ("emptyString" === n && (r = "item_type"), e(Ua[n]) && Ua[n](r)), !0
                }
            },
            item_id: {
                rules: ["string", "emptyString", "stringLength"],
                onComplete: function(t, r, n) {
                    return t || ("emptyString" === n && (r = "item_id"), e(Ua[n]) && Ua[n](r)), !0
                }
            },
            loginIdKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
                onComplete: function(t, r, n) {
                    return !t && ("emptyString" === n && (r = "login_id_key"), e(Ua[n]) && Ua[n](r), "keyLength" === n) || t
                }
            },
            bindKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
                onComplete: function(t, r, n) {
                    return !t && ("emptyString" === n && (r = "Key"), e(Ua[n]) && Ua[n](r), "keyLength" === n) || t
                }
            },
            unbindKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
                onComplete: function(t, r, n) {
                    return !t && ("emptyString" === n && (r = "Key"), e(Ua[n]) && Ua[n](r), "keyLength" === n) || t
                }
            },
            bindValue: {
                rules: ["string", "emptyString", "idLength"],
                onComplete: function(t, r, n) {
                    return !t && ("emptyString" === n && (r = "Value"), e(Ua[n]) && Ua[n](r), "idLength" === n) || t
                }
            },
            check: function(t, r, n) {
                var i = this[t];
                if (e(i)) return i.call(this, r);
                if (!i) return !1;
                for (var a = 0; a < i.rules.length; a++) {
                    var o = i.rules[a],
                        s = Ra[o](r),
                        l = e(n) ? n(s, r, o) : i.onComplete(s, r, o);
                    if (!s) return l
                }
                return !0
            }
        },
        Ha = {};
    Ha.initUrl = function() {
        var e, t = {
            server_url: {
                project: "",
                host: ""
            },
            page_url: {
                host: "",
                pathname: ""
            }
        };
        if (!le(zi.para.server_url)) return Te("----vcollect---server_url\u5fc5\u987b\u4e3a\u6709\u6548 URL \u5b57\u7b26\u4e32"), !1;
        try {
            e = _(zi.para.server_url), t.server_url.project = e.searchParams.get("project") || "default", t.server_url.host = e.host
        } catch (r) {
            return Te("----vcollect---server_url\u89e3\u6790\u5f02\u5e38", r), !1
        }
        var n;
        try {
            n = _(location.href), t.page_url.host = n.hostname, t.page_url.pathname = n.pathname
        } catch (r) {
            return Te("----vcollect---\u9875\u9762\u5730\u5740\u89e3\u6790\u5f02\u5e38", r), !1
        }
        return t
    }, Ha.isDiv = function(e) {
        if (e.element_path) {
            var t = e.element_path.split(">"),
                r = f(t.pop());
            if ("div" !== r.slice(0, 3)) return !1
        }
        return !0
    }, Ha.configIsMatchNew = function(e, t) {
        if (p(e.$element_selector) && p(t.element_selector)) {
            if ("element_selector" === t.element_field && "equal" === t["function"]) return e.$element_selector === t.element_selector;
            if ("element_selector" === t.element_field && "contain" === t["function"]) return e.$element_selector.indexOf(t.element_selector) > -1
        }
        if (p(e.$element_path) && p(t.element_path)) {
            if ("element_path" === t.element_field && "equal" === t["function"]) return e.$element_path === t.element_path;
            if ("element_path" === t.element_field && "contain" === t["function"]) return e.$element_path.indexOf(t.element_path) > -1
        }
        return !1
    }, Ha.configIsMatch = function(e, t) {
        return (!t.limit_element_content || t.element_content === e.$element_content) && (!t.limit_element_position || t.element_position === String(e.$element_position)) && (t.element_field && t["function"] ? Ha.configIsMatchNew(e, t) : Ha.configIsMatchOldVersion(e, t))
    }, Ha.configIsMatchOldVersion = function(e, t) {
        if (!t.element_path) return !1;
        if (void 0 !== e.$element_position) {
            if (t.element_path !== e.$element_path) return !1
        } else if (Ha.isDiv({
                element_path: t.element_path
            })) {
            if (e.$element_path.indexOf(t.element_path) < 0) return !1
        } else if (t.element_path !== e.$element_path) return !1;
        return !0
    }, Ha.filterConfig = function(e, t, n) {
        var i = [];
        if (!n) {
            var a = Ha.initUrl();
            if (!a) return [];
            n = a.page_url
        }
        return "$WebClick" === e.event && P(t, function(t) {
            r(t) && ("webclick" === t.event_type || "appclick" === t.event_type) && r(t.event) && t.event.url_host === n.host && t.event.url_path === n.pathname && Ha.configIsMatch(e.properties, t.event) && i.push(t)
        }), i
    }, Ha.getPropElInLi = function(e, t) {
        if (!(e && h(e) && p(t))) return null;
        if ("li" !== e.tagName.toLowerCase()) return null;
        var r, n = zi.heatmap.getDomSelector(e);
        if (n) {
            r = n + t;
            var i = M(r);
            return i ? i : null
        }
        return Ie("----custom---\u83b7\u53d6\u540c\u7ea7\u5c5e\u6027\u5143\u7d20\u5931\u8d25\uff0cselector\u4fe1\u606f\u5f02\u5e38", n, t), null
    }, Ha.getProp = function(e, t) {
        if (!r(e)) return !1;
        if (!(p(e.name) && e.name.length > 0)) return Ie("----vcustom----\u5c5e\u6027\u540d\u4e0d\u5408\u6cd5,\u5c5e\u6027\u629b\u5f03", e.name), !1;
        var n, i, a = {};
        if ("content" === e.method) {
            var o;
            if (p(e.element_selector) && e.element_selector.length > 0) o = M(e.element_selector);
            else {
                if (!t || !p(e.list_selector)) return Ie("----vcustom----\u5c5e\u6027\u914d\u7f6e\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
                var s = M(t.properties.$element_selector);
                if (!s) return Ie("----vcustom----\u70b9\u51fb\u5143\u7d20\u83b7\u53d6\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
                var l = zi.heatmap.getClosestLi(s);
                o = Ha.getPropElInLi(l, e.list_selector)
            }
            if (!o || !h(o)) return Ie("----vcustom----\u5c5e\u6027\u5143\u7d20\u83b7\u53d6\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1;
            if ("input" === o.tagName.toLowerCase()) n = o.value || "";
            else if ("select" === o.tagName.toLowerCase()) {
                var u = o.selectedIndex;
                de(u) && h(o[u]) && (n = Ge(o[u], "select"))
            } else n = Ge(o, o.tagName.toLowerCase());
            if (e.regular) {
                try {
                    i = new RegExp(e.regular).exec(n)
                } catch (c) {
                    return Ie("----vcustom----\u6b63\u5219\u5904\u7406\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03", e.name), !1
                }
                if (null === i) return Ie("----vcustom----\u5c5e\u6027\u89c4\u5219\u5904\u7406\uff0c\u672a\u5339\u914d\u5230\u7ed3\u679c,\u5c5e\u6027\u629b\u5f03", e.name), !1;
                if (!y(i) || !p(i[0])) return Ie("----vcustom----\u6b63\u5219\u5904\u7406\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03", e.name, i), !1;
                n = i[0]
            }
            if ("STRING" === e.type) a[e.name] = n;
            else if ("NUMBER" === e.type) {
                if (n.length < 1) return Ie("----vcustom----\u672a\u83b7\u53d6\u5230\u6570\u5b57\u5185\u5bb9\uff0c\u5c5e\u6027\u629b\u5f03", e.name, n), !1;
                if (isNaN(Number(n))) return Ie("----vcustom----\u6570\u5b57\u7c7b\u578b\u5c5e\u6027\u8f6c\u6362\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03", e.name, n), !1;
                a[e.name] = Number(n)
            }
            return a
        }
        return Te("----vcustom----\u5c5e\u6027\u4e0d\u652f\u6301\u6b64\u83b7\u53d6\u65b9\u5f0f", e.name, e.method), !1
    }, Ha.getAssignConfigs = function(e, t) {
        var n = Ha.initUrl();
        if (!n || !n.page_url) return [];
        if (!r(t)) return [];
        var i = [];
        return t.events = t.events || t.eventList, y(t.events) && t.events.length > 0 ? (P(t.events, function(t) {
            r(t) && r(t.event) && t.event.url_host === n.page_url.host && t.event.url_path === n.page_url.pathname && e(t) && i.push(t)
        }), i) : []
    };
    var Ja = {
            events: [],
            getAssignConfigs: Ha.getAssignConfigs,
            filterConfig: Ha.filterConfig,
            getProp: Ha.getProp,
            initUrl: Ha.initUrl,
            updateEvents: function(e) {
                y(e) && (this.events = e)
            },
            init: function() {
                this.initAppGetPropsBridge()
            },
            geth5Props: function(e) {
                var t = {},
                    n = [],
                    i = this;
                if (!this.events.length) return {};
                if ("$WebClick" === e.event) {
                    var a = this.filterConfig(e, this.events);
                    if (!a.length) return {};
                    P(a, function(a) {
                        r(a) && (y(a.properties) && a.properties.length > 0 && P(a.properties, function(n) {
                            if (r(n))
                                if (n.h5 === !1) y(t.sensorsdata_app_visual_properties) || (t.sensorsdata_app_visual_properties = []), t.sensorsdata_app_visual_properties.push(n);
                                else {
                                    var a = i.getProp(n, e);
                                    r(a) && (t = C(t, a))
                                }
                        }), p(a.event_name) && n.push(a.event_name))
                    }), zi.bridge.hasVisualModeBridge() && (t.sensorsdata_web_visual_eventName = n)
                }
                return t.sensorsdata_app_visual_properties && (t.sensorsdata_app_visual_properties = I(JSON.stringify(t.sensorsdata_app_visual_properties))), t
            },
            initAppGetPropsBridge: function() {
                var e = this,
                    t = new zi.SDKJSBridge("getJSVisualProperties");
                return t.onAppNotify(function(n) {
                    var i = {};
                    try {
                        n = JSON.parse(j(n))
                    } catch (a) {
                        Te("getJSVisualProperties data parse error!")
                    }
                    if (r(n)) {
                        var o = n.sensorsdata_js_visual_properties,
                            s = e.initUrl();
                        s && (s = s.page_url, y(o) && o.length > 0 && P(o, function(t) {
                            if (r(t) && t.url_host === s.host && t.url_path === s.pathname && t.h5) {
                                var n = e.getProp(t);
                                r(n) && (i = C(i, n))
                            }
                        }))
                    }
                    var l = zi.bridge.bridge_info.platform;
                    return "android" === l && t.notifyApp({
                        data: i
                    }, n.message_id), i
                }), t
            }
        },
        Ma = {
            events: [],
            customProp: Ja,
            getAssignConfigs: Ha.getAssignConfigs,
            initUrl: Ha.initUrl,
            init: function() {
                if (this.initUrl()) {
                    var e = this.getConfigFromApp();
                    e && this.updateConfigs(e), this.customProp.init(), this.initAppUpdateConfigBridge()
                }
            },
            initAppUpdateConfigBridge: function() {
                var e = this;
                return new zi.SDKJSBridge("updateH5VisualConfig").onAppNotify(function(t) {
                    if (t) {
                        try {
                            t = JSON.parse(j(t))
                        } catch (r) {
                            return void Te("updateH5VisualConfig result parse error\uff01")
                        }
                        e.updateConfigs(t)
                    }
                })
            },
            getConfigFromApp: function() {
                var e = new zi.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp();
                if (e) try {
                    e = JSON.parse(j(e))
                } catch (t) {
                    e = null, Te("getAppVisualConfig result parse error\uff01")
                }
                return e
            },
            updateConfigs: function(e) {
                this.events = this.filterConfigs(e), this.customProp.updateEvents(this.events)
            },
            filterConfigs: function(e) {
                return this.getAssignConfigs(function(e) {
                    return !(!r(e) || e.h5 === !1)
                }, e)
            }
        },
        qa = {
            events: [],
            init: function(e) {
                this.filterWebClickEvents(e)
            },
            filterWebClickEvents: function(e) {
                this.events = Fa.getAssignConfigs(function(e) {
                    return !(!r(e) || e.event.unlimited_div !== !0 || "webclick" !== e.event_type)
                }, e)
            },
            isTargetEle: function(e) {
                var t = zi.heatmap.getEleDetail(e);
                if (!r(t) || !p(t.$element_path)) return !1;
                for (var n = 0; n < this.events.length; n++)
                    if (r(this.events[n]) && r(this.events[n].event) && Fa.configIsMatch(t, this.events[n].event)) return !0;
                return !1
            }
        },
        Ka = {
            events: [],
            configSwitch: !1,
            collectAble: function() {
                return this.configSwitch && r(zi.para.heatmap) && zi.para.heatmap.get_vtrack_config
            },
            updateEvents: function(e) {
                this.events = Fa.getAssignConfigs(function(e) {
                    return !!(r(e) && y(e.properties) && e.properties.length > 0)
                }, e), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1
            },
            getVtrackProps: function(e) {
                var t = {};
                return this.collectAble() ? ("$WebClick" === e.event && (t = this.clickCustomPropMaker(e, this.events)), t) : {}
            },
            clickCustomPropMaker: function(e, t, n) {
                var i = this;
                n = n || this.filterConfig(e, t, Fa.url_info.page_url);
                var a = {};
                return n.length ? (P(n, function(t) {
                    y(t.properties) && t.properties.length > 0 && P(t.properties, function(t) {
                        var n = i.getProp(t, e);
                        r(n) && C(a, n)
                    })
                }), a) : {}
            },
            getProp: Ha.getProp,
            getPropElInLi: Ha.getPropElInLi,
            filterConfig: Ha.filterConfig
        },
        Fa = {
            unlimitedDiv: qa,
            config: {},
            storageEnable: !0,
            storage_name: "webjssdkvtrackcollect",
            para: {
                session_time: 18e5,
                timeout: 5e3,
                update_interval: 18e5
            },
            url_info: {},
            timer: null,
            update_time: null,
            customProp: Ka,
            initUrl: function() {
                var e = Ha.initUrl();
                if (e) {
                    var t;
                    try {
                        t = new g(zi.para.server_url), t._values.Path = "/config/visualized/Web.conf", e.api_url = t.getUrl()
                    } catch (r) {
                        return Te("----vtrackcollect---API\u5730\u5740\u89e3\u6790\u5f02\u5e38", r), !1
                    }
                    this.url_info = e
                }
                return e
            },
            init: function() {
                if (!r(zi.para.heatmap) || !zi.para.heatmap.get_vtrack_config) return !1;
                if (Gi.isSupport() || (this.storageEnable = !1), !this.initUrl()) return Te("----vtrackcustom----\u521d\u59cb\u5316\u5931\u8d25\uff0curl\u4fe1\u606f\u89e3\u6790\u5931\u8d25"), !1;
                if (this.storageEnable) {
                    var e = La.readObjectVal(this.storage_name);
                    if (r(e) && r(e.data))
                        if (this.serverUrlIsSame(e.serverUrl)) {
                            this.config = e.data, this.update_time = e.updateTime, this.updateConfig(e.data);
                            var t = (new Date).getTime(),
                                n = t - this.update_time;
                            if (de(n) && n > 0 && n < this.para.session_time) {
                                var i = this.para.update_interval - n;
                                this.setNextFetch(i)
                            } else this.getConfigFromServer()
                        } else this.getConfigFromServer();
                    else this.getConfigFromServer()
                } else this.getConfigFromServer();
                this.pageStateListenner()
            },
            serverUrlIsSame: function(e) {
                return !!r(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project
            },
            getConfigFromServer: function() {
                var e = this,
                    t = function(t, n) {
                        e.update_time = (new Date).getTime();
                        var i = {};
                        200 === t ? n && r(n) && "Web" === n.os && (i = n, e.updateConfig(i)) : 205 === t ? e.updateConfig(i) : 304 === t ? i = e.config : (Te("----vtrackcustom----\u6570\u636e\u5f02\u5e38", t), e.updateConfig(i)), e.updateStorage(i), e.setNextFetch()
                    },
                    n = function(t) {
                        e.update_time = (new Date).getTime(), Te("----vtrackcustom----\u914d\u7f6e\u62c9\u53d6\u5931\u8d25", t), e.setNextFetch()
                    };
                this.sendRequest(t, n)
            },
            setNextFetch: function(e) {
                var t = this;
                this.timer && (clearTimeout(this.timer), this.timer = null), e = e || this.para.update_interval, this.timer = setTimeout(function() {
                    t.getConfigFromServer()
                }, e)
            },
            pageStateListenner: function() {
                var e = this;
                _e({
                    visible: function() {
                        var t = (new Date).getTime(),
                            r = t - e.update_time;
                        if (de(r) && r > 0 && r < e.para.update_interval) {
                            var n = e.para.update_interval - r;
                            e.setNextFetch(n)
                        } else e.getConfigFromServer()
                    },
                    hidden: function() {
                        e.timer && (clearTimeout(e.timer), e.timer = null)
                    }
                })
            },
            updateConfig: function(e) {
                return !!r(e) && (this.config = e, this.customProp.updateEvents(e), void this.unlimitedDiv.init(e))
            },
            updateStorage: function(e) {
                if (!this.storageEnable) return !1;
                if (!r(e)) return !1;
                var t;
                if (this.url_info.server_url) t = this.url_info.server_url;
                else {
                    var n = Fa.initUrl();
                    if (!n) return !1;
                    t = n.server_url
                }
                var i = {
                    updateTime: (new Date).getTime(),
                    data: e,
                    serverUrl: t
                };
                La.saveObjectVal(this.storage_name, i)
            },
            sendRequest: function(e, t) {
                var r = this,
                    n = {
                        app_id: this.url_info.page_url.host
                    };
                this.config.version && (n.v = this.config.version), ge({
                    url: r.url_info.api_url,
                    callbackName: "saJSSDKVtrackCollectConfig",
                    data: n,
                    timeout: r.para.timeout,
                    success: function(t, r) {
                        e(t, r)
                    },
                    error: function(e) {
                        t(e)
                    }
                })
            },
            getAssignConfigs: Ha.getAssignConfigs,
            configIsMatch: Ha.configIsMatch
        },
        Va = {
            basicProps: {
                priority: 0,
                entry: gt
            },
            formatData: {
                priority: 0,
                entry: pt
            },
            finalAdjustData: {
                priority: 0,
                entry: ft
            }
        },
        Wa = {
            stage: null,
            init: function(e) {
                this.stage = e
            },
            interceptor: Va
        },
        za = {};
    za.check = it, za.sendItem = function(e) {
        var t = {
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(zi.lib_version)
            },
            time: 1 * new Date
        };
        C(t, e), ht(t), zi.kit.sendData(t)
    }, za.send = function(e, t) {
        var r = zi.kit.buildData(e);
        zi.kit.sendData(r, t)
    };
    var Xa = {
            stage: null,
            init: function(e) {
                this.stage = e
            }
        },
        Za = {
            label: !1,
            li: !1,
            a: !0,
            button: !0
        },
        Ga = {
            otherTags: [],
            initUnlimitedTags: function() {
                P(Ga.otherTags, function(e) {
                    e in Za && (Za[e] = !0)
                })
            },
            isUnlimitedTag: function(e) {
                if (!e || 1 !== e.nodeType) return !1;
                var t = e.nodeName.toLowerCase();
                return Za[t] || ee(e, zi.para.heatmap.track_attr)
            },
            getTargetElement: function(e, t) {
                var r = this,
                    n = e;
                if ("object" != typeof n) return null;
                if ("string" != typeof n.tagName) return null;
                var i = n.tagName.toLowerCase();
                if ("body" === i.toLowerCase() || "html" === i.toLowerCase()) return null;
                if (!n || !n.parentNode || !n.parentNode.children) return null;
                var a = n.parentNode,
                    o = r.otherTags;
                if ("a" === i || "button" === i || "input" === i || "textarea" === i) return n;
                if (ne(o, i) > -1) return n;
                if ("area" === i && "map" === a.tagName.toLowerCase() && b(a).prev().tagName && "img" === b(a).prev().tagName.toLowerCase()) return b(a).prev();
                if ("div" === i && zi.para.heatmap.collect_tags.div && r.isDivLevelValid(n)) {
                    var s = zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div && zi.para.heatmap.collect_tags.div.max_level || 1;
                    if (s > 1 || r.isCollectableDiv(n)) return n
                }
                if (r.isStyleTag(i) && zi.para.heatmap.collect_tags.div) {
                    var l = r.getCollectableParent(n);
                    if (l && r.isDivLevelValid(l)) return l
                }
                var u = r.hasElement({
                    event: t && t.originalEvent || t,
                    element: e
                }, function(e) {
                    return r.isUnlimitedTag(e)
                });
                return u || null
            },
            getDivLevels: function(e, t) {
                var r = Ga.getElementPath(e, !0, t),
                    n = r.split(" > "),
                    i = 0;
                return P(n, function(e) {
                    "div" === e && i++
                }), i
            },
            isDivLevelValid: function(e) {
                for (var t = zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div && zi.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), n = r.length - 1; n >= 0; n--)
                    if (Ga.getDivLevels(r[n], e) > t) return !1;
                return !0
            },
            getElementPath: function(e, t, r) {
                for (var n = []; e.parentNode && h(e);) {
                    if (!p(e.tagName)) return "unknown";
                    if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
                        n.unshift(e.tagName.toLowerCase() + "#" + e.id);
                        break
                    }
                    if (r && e === r) {
                        n.unshift(e.tagName.toLowerCase());
                        break
                    }
                    if (e === document.body) {
                        n.unshift("body");
                        break
                    }
                    n.unshift(e.tagName.toLowerCase()), e = e.parentNode
                }
                return n.join(" > ")
            },
            getClosestLi: function(e) {
                var t = function(e, t) {
                    for (; e && e !== document && 1 === e.nodeType; e = e.parentNode)
                        if (e.tagName && p(e.tagName) && e.tagName.toLowerCase() === t) return e;
                    return null
                };
                return t(e, "li")
            },
            getElementPosition: function(e, t, r) {
                function n(e) {
                    var t = e.parentNode;
                    if (!t) return "";
                    var r = b(e).getSameTypeSiblings(),
                        n = r.length;
                    if (1 === n) return 0;
                    for (var i = 0, a = e; b(a).previousElementSibling().ele; a = b(a).previousElementSibling().ele, i++);
                    return i
                }
                var i = zi.heatmap.getClosestLi(e);
                if (!i || !h(e) || !p(e.tagName)) return null;
                var a = e.tagName.toLowerCase(),
                    o = i.getElementsByTagName(a),
                    s = o.length,
                    l = [];
                if (s > 1) {
                    for (var u = 0; u < s; u++) {
                        var c = zi.heatmap.getElementPath(o[u], r);
                        c === t && l.push(o[u])
                    }
                    if (l.length > 1) return ne(l, e)
                }
                return n(i)
            },
            setNotice: function(e) {
                zi.is_heatmap_render_mode = !0, zi.para.heatmap || (zi.errorMsg = "\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"), e && "http:" === e.slice(0, 5) && "https:" === location.protocol && (zi.errorMsg = "\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"), zi.para.heatmap_url || (zi.para.heatmap_url = vt() + "//static.sensorsdata.cn/sdk/" + zi.lib_version + "/heatmap.min.js")
            },
            getDomIndex: function(e) {
                if (!e.parentNode) return -1;
                for (var t = 0, r = e.tagName, n = e.parentNode.children, i = 0; i < n.length; i++)
                    if (n[i].tagName === r) {
                        if (e === n[i]) return t;
                        t++
                    }
                return -1
            },
            selector: function(e, t) {
                if (!e || !h(e) || !p(e.tagName)) return "";
                var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
                return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!zi.para.heatmap || zi.para.heatmap && "not_use_id" !== zi.para.heatmap.element_selector) && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
            },
            getDomSelector: function(e, t, r) {
                if (!(e && e.parentNode && e.parentNode.children && p(e.tagName))) return "unknown";
                t = t && t.join ? t : [];
                var n = e.nodeName.toLowerCase();
                return e && "body" !== n && 1 == e.nodeType ? (t.unshift(this.selector(e, r)), e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && zi.para.heatmap && "not_use_id" !== zi.para.heatmap.element_selector && !r ? t.join(" > ") : this.getDomSelector(e.parentNode, t, r)) : (t.unshift("body"), t.join(" > "))
            },
            na: function() {
                var e = document.documentElement.scrollLeft || window.pageXOffset;
                return parseInt(isNaN(e) ? 0 : e, 10)
            },
            i: function() {
                var e = 0;
                try {
                    e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e
                } catch (t) {
                    e = 0
                }
                return parseInt(e, 10)
            },
            getBrowserWidth: function() {
                var e = window.innerWidth || document.body.clientWidth;
                return isNaN(e) ? 0 : parseInt(e, 10)
            },
            getBrowserHeight: function() {
                var e = window.innerHeight || document.body.clientHeight;
                return isNaN(e) ? 0 : parseInt(e, 10)
            },
            getScrollWidth: function() {
                var e = parseInt(document.body.scrollWidth, 10);
                return isNaN(e) ? 0 : e
            },
            getEleDetail: function(e) {
                var t = this.getDomSelector(e),
                    r = Xe({
                        target: e
                    });
                r.$element_selector = t ? t : "", r.$element_path = zi.heatmap.getElementPath(e, zi.para.heatmap && "not_use_id" === zi.para.heatmap.element_selector);
                var n = zi.heatmap.getElementPosition(e, r.$element_path, zi.para.heatmap && "not_use_id" === zi.para.heatmap.element_selector);
                return de(n) && (r.$element_position = n), r
            },
            getPointerEventProp: function(e, t) {
                function r() {
                    var e = document.body.scrollLeft || document.documentElement.scrollLeft || 0,
                        t = document.body.scrollTop || document.documentElement.scrollTop || 0;
                    return {
                        scrollLeft: e,
                        scrollTop: t
                    }
                }

                function n(e) {
                    if (document.documentElement.getBoundingClientRect) {
                        var t = e.getBoundingClientRect();
                        return {
                            targetEleX: t.left + r().scrollLeft || 0,
                            targetEleY: t.top + r().scrollTop || 0
                        }
                    }
                }

                function i(e) {
                    return Number(Number(e).toFixed(3))
                }

                function a(e) {
                    var a = e.pageX || e.clientX + r().scrollLeft || e.offsetX + n(t).targetEleX || 0,
                        o = e.pageY || e.clientY + r().scrollTop || e.offsetY + n(t).targetEleY || 0;
                    return {
                        $page_x: i(a),
                        $page_y: i(o)
                    }
                }
                return e ? a(e) : {}
            },
            start: function(t, n, i, a, o) {
                if (r(zi.para.heatmap) && e(zi.para.heatmap.collect_element) && !zi.para.heatmap.collect_element(n)) return !1;
                var s = Ga.getBasicEleInfo(t, n, i, a, o);
                yt(s)
            },
            getBasicEleInfo: function(t, n, i, a, o) {
                var s = r(a) ? a : {},
                    l = e(o) ? o : e(a) ? a : void 0,
                    u = this.getEleDetail(n);
                if (zi.para.heatmap && zi.para.heatmap.custom_property) {
                    var c = zi.para.heatmap.custom_property(n);
                    r(c) && (u = C(u, c))
                }
                return u = C(u, this.getPointerEventProp(t, n), s), {
                    event: t,
                    target: n,
                    props: u,
                    tagName: i,
                    callback: l
                }
            },
            hasElement: function(e, t) {
                var r;
                if (e.event) {
                    var n = e.event;
                    r = n.path || n._getPath && n._getPath()
                } else e.element && (r = b(e.element).getParents());
                if (r && y(r) && r.length > 0)
                    for (var i = 0; i < r.length; i++)
                        if ("object" == typeof r[i] && 1 === r[i].nodeType && t(r[i])) return r[i]
            },
            isStyleTag: function(e, t) {
                var n = ["a", "div", "input", "button", "textarea"],
                    i = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
                return !(ne(n, e) > -1) && (!t || zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div ? !!(r(zi.para.heatmap) && r(zi.para.heatmap.collect_tags) && r(zi.para.heatmap.collect_tags.div) && y(zi.para.heatmap.collect_tags.div.ignore_tags) && ne(zi.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : ne(i, e) > -1)
            },
            isCollectableDiv: function(e, t) {
                try {
                    if (0 === e.children.length) return !0;
                    for (var r = 0; r < e.children.length; r++)
                        if (1 === e.children[r].nodeType) {
                            var n = p(e.children[r].tagName) ? e.children[r].tagName.toLowerCase() : "unknown",
                                i = zi.para && zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div && zi.para.heatmap.collect_tags.div.max_level;
                            if (!("div" === n && i > 1 || this.isStyleTag(n, t))) return !1;
                            if (!this.isCollectableDiv(e.children[r], t)) return !1
                        }
                    return !0
                } catch (a) {
                    Te("isCollectableDiv:" + a)
                }
                return !1
            },
            getCollectableParent: function(e, t) {
                try {
                    var r = e.parentNode,
                        n = r ? r.tagName.toLowerCase() : "";
                    if ("body" === n) return !1;
                    var i = zi.para && zi.para.heatmap && zi.para.heatmap.collect_tags && zi.para.heatmap.collect_tags.div && zi.para.heatmap.collect_tags.div.max_level;
                    if (n && "div" === n && (i > 1 || this.isCollectableDiv(r, t))) return r;
                    if (r && this.isStyleTag(n, t)) return this.getCollectableParent(r, t)
                } catch (a) {
                    Te("getCollectableParent:" + a)
                }
                return !1
            },
            listenUrlChange: function(e) {
                e(), zi.ee.spa.on("switch", function() {
                    e()
                })
            },
            initScrollmap: function() {
                if (!r(zi.para.heatmap) || "default" !== zi.para.heatmap.scroll_notice_map) return !1;
                var t = !0;
                zi.para.scrollmap && e(zi.para.scrollmap.collect_url) && this.listenUrlChange(function() {
                    t = !!zi.para.scrollmap.collect_url()
                });
                var n = function(e) {
                        var t = {};
                        return t.timeout = e.timeout || 1e3, t.func = e.func, t.hasInit = !1, t.inter = null, t.main = function(e, t) {
                            this.func(e, t), this.inter = null
                        }, t.go = function(e) {
                            var r = {};
                            this.inter || (r.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, r.$viewport_position = Math.round(r.$viewport_position) || 0, e ? t.main(r, !0) : this.inter = setTimeout(function() {
                                t.main(r)
                            }, this.timeout))
                        }, t
                    },
                    i = n({
                        timeout: 1e3,
                        func: function(e, t) {
                            var r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                                n = new Date,
                                i = n - this.current_time;
                            (i > zi.para.heatmap.scroll_delay_time && r - e.$viewport_position !== 0 || t) && (e.$url = G(), e.$title = document.title, e.$url_path = Q(), e.event_duration = Math.min(zi.para.heatmap.scroll_event_duration, parseInt(i) / 1e3), e.event_duration = e.event_duration < 0 ? 0 : e.event_duration, bt(e)), this.current_time = n
                        }
                    });
                i.current_time = new Date, xe(window, "scroll", function() {
                    return !!t && void i.go()
                }), xe(window, "beforeunload", function() {
                    return !!t && void i.go("notime")
                })
            },
            initHeatmap: function() {
                var t = this,
                    n = !0;
                return !(!r(zi.para.heatmap) || "default" !== zi.para.heatmap.clickmap) && (e(zi.para.heatmap.collect_url) && this.listenUrlChange(function() {
                    n = !!zi.para.heatmap.collect_url()
                }), "all" === zi.para.heatmap.collect_elements ? zi.para.heatmap.collect_elements = "all" : zi.para.heatmap.collect_elements = "interact", void("all" === zi.para.heatmap.collect_elements ? xe(document, "click", function(e) {
                    if (!n) return !1;
                    var r = e || window.event;
                    if (!r) return !1;
                    var i = r.target || r.srcElement;
                    if ("object" != typeof i) return !1;
                    if ("string" != typeof i.tagName) return !1;
                    var a = i.tagName.toLowerCase();
                    if ("body" === a || "html" === a) return !1;
                    if (!i || !i.parentNode || !i.parentNode.children) return !1;
                    var o = p(i.parentNode.tagName) ? i.parentNode.tagName.toLowerCase() : "unknown";
                    "a" === o || "button" === o ? t.start(r, i.parentNode, o) : t.start(r, i, a)
                }) : xe(document, "click", function(e) {
                    if (!n) return !1;
                    var i = e || window.event;
                    if (!i) return !1;
                    var a = i.target || i.srcElement,
                        o = zi.heatmap.getTargetElement(a, e);
                    return !(!h(o) && !p(a.tagName)) && void(h(o) && p(o.tagName) ? t.start(i, o, o.tagName.toLowerCase()) : h(a) && "div" === a.tagName.toLowerCase() && r(zi.para.heatmap) && zi.para.heatmap.get_vtrack_config && qa.events.length > 0 && qa.isTargetEle(a) && t.start(i, a, a.tagName.toLowerCase(), {
                        $lib_method: "vtrack"
                    }))
                })))
            }
        },
        Qa = {
            autoTrackIsUsed: !1,
            isReady: function(t) {
                return e(t) ? void t() : void zi.log("error: isReady callback must be function")
            },
            getUtm: function() {
                return Oa.campaignParams()
            },
            getStayTime: function() {
                return (new Date - zi._t) / 1e3
            },
            setProfileLocal: function(e) {
                if (!Gi.isSupport()) return zi.setProfile(e), !1;
                if (!r(e) || se(e)) return !1;
                var t = La.readObjectVal("sensorsdata_2015_jssdk_profile"),
                    n = !1;
                if (r(t) && !se(t)) {
                    for (var i in e) !(i in t && t[i] !== e[i]) && i in t || (t[i] = e[i], n = !0);
                    n && (La.saveObjectVal("sensorsdata_2015_jssdk_profile", t), zi.setProfile(e))
                } else La.saveObjectVal("sensorsdata_2015_jssdk_profile", e), zi.setProfile(e)
            },
            setInitReferrer: function() {
                var e = Re();
                zi.setOnceProfile({
                    _init_referrer: e,
                    _init_referrer_host: Oa.pageProp.referrer_host
                })
            },
            setSessionReferrer: function() {
                var e = Re();
                La.setSessionPropsOnce({
                    _session_referrer: e,
                    _session_referrer_host: Oa.pageProp.referrer_host
                })
            },
            setDefaultAttr: function() {
                Oa.register({
                    _current_url: location.href,
                    _referrer: Re(),
                    _referring_host: Oa.pageProp.referrer_host
                })
            },
            trackHeatMap: function(e, t, r) {
                if ("object" == typeof e && e.tagName && h(e.parentNode)) {
                    var n = e.tagName.toLowerCase(),
                        i = e.parentNode.tagName.toLowerCase(),
                        a = zi.para.heatmap && zi.para.heatmap.track_attr ? zi.para.heatmap.track_attr : ["data-sensors-click"];
                    "button" === n || "a" === n || "a" === i || "button" === i || "input" === n || "textarea" === n || ee(e, a) || Ga.start(null, e, n, t, r)
                }
            },
            trackAllHeatMap: function(e, t, r) {
                if ("object" == typeof e && e.tagName) {
                    var n = e.tagName.toLowerCase();
                    Ga.start(null, e, n, t, r)
                }
            },
            autoTrackSinglePage: function(e, t) {
                function n(e, t) {
                    zi.track("$pageview", C({
                        $referrer: i,
                        $url: G(),
                        $url_path: Q(),
                        $title: document.title
                    }, e, wt()), t), i = G()
                }
                var i;
                i = this.autoTrackIsUsed ? Oa.pageProp.url : Oa.pageProp.referrer, e = r(e) ? e : {};
                var a = !e.not_set_profile;
                e.not_set_profile && delete e.not_set_profile, n(e, t), this.autoTrackSinglePage = n, St(zi.setOnceProfile, !1, a)
            },
            autoTrackWithoutProfile: function(e, t) {
                e = r(e) ? e : {}, this.autoTrack(C(e, {
                    not_set_profile: !0
                }), t)
            },
            autoTrack: function(e, t) {
                e = r(e) ? e : {};
                var n = wt(),
                    i = !e.not_set_profile;
                e.not_set_profile && delete e.not_set_profile;
                var a = location.href;
                zi.para.is_single_page && S(function() {
                    var r = Re(a, !0);
                    zi.track("$pageview", C({
                        $referrer: r,
                        $url: G(),
                        $url_path: Q(),
                        $title: document.title
                    }, n, e), t), a = G()
                }), zi.track("$pageview", C({
                    $referrer: Re(null, !0),
                    $url: G(),
                    $url_path: Q(),
                    $title: document.title
                }, n, e), t), St(zi.setOnceProfile, !0, i), this.autoTrackIsUsed = !0
            },
            getAnonymousID: function() {
                return se(La._state) ? "SDK is not initialized." : La.getAnonymousId()
            },
            setPlugin: function(t) {
                return !!r(t) && void P(t, function(t, n) {
                    e(t) && (r(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[n] ? t(window.SensorsDataWebJSSDKPlugin[n]) : r(zi.modules) && zi.modules[n] ? t(window.SensorsDataWebJSSDKPlugin[n]) : Ie(n + "is not found,please check sensorsdata documents."))
                })
            },
            useModulePlugin: function() {
                zi.use.apply(zi, arguments)
            },
            useAppPlugin: function() {
                this.setPlugin.apply(this, arguments)
            }
        },
        Ya = {
            state: 0,
            historyState: [],
            stateType: {
                1: "1-init\u672a\u5f00\u59cb",
                2: "2-init\u5f00\u59cb",
                3: "3-store\u5b8c\u6210"
            },
            getState: function() {
                return this.historyState.join("\n")
            },
            setState: function(e) {
                String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e])
            }
        },
        eo = 1,
        to = {
            __proto__: null,
            setInitVar: Ot,
            initPara: Nt,
            quick: jt,
            use: It,
            track: Tt,
            bind: At,
            unbind: Dt,
            trackLink: $t,
            trackLinks: xt,
            setItem: Et,
            deleteItem: Lt,
            setProfile: Ut,
            setOnceProfile: Rt,
            appendProfile: Bt,
            incrementProfile: Ht,
            deleteProfile: Jt,
            unsetProfile: Mt,
            identify: qt,
            resetAnonymousIdentity: Kt,
            trackSignup: Vt,
            registerPage: Wt,
            clearAllRegister: zt,
            clearPageRegister: Xt,
            register: Zt,
            registerOnce: Gt,
            registerSession: Qt,
            registerSessionOnce: Yt,
            login: er,
            loginWithKey: tr,
            logout: rr,
            getPresetProperties: nr,
            readyState: Ya,
            debug: Ca,
            on: rt,
            log: je
        };
    Zi.setup(je);
    var ro = C({}, da, xa),
        no = {
            bridge_info: {
                touch_app_bridge: !1,
                verify_success: !1,
                platform: "",
                support_two_way_call: !1
            },
            is_verify_success: !1,
            initPara: function() {
                var e = {
                    is_send: zi.para.use_app_track_is_send !== !1 && "only" !== zi.para.use_app_track,
                    white_list: [],
                    is_mui: "mui" === zi.para.use_app_track
                };
                "object" == typeof zi.para.app_js_bridge ? zi.para.app_js_bridge = C({}, e, zi.para.app_js_bridge) : zi.para.use_app_track !== !0 && zi.para.app_js_bridge !== !0 && "only" !== zi.para.use_app_track && "mui" !== zi.para.use_app_track || (zi.para.app_js_bridge = C({}, e)), zi.para.app_js_bridge.is_send === !1 && Ie("\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03!")
            },
            app_js_bridge_v1: function() {
                function e(e) {
                    n = e, ce(n) && (n = JSON.parse(n)), i && (i(n), i = null, n = null)
                }

                function t() {
                    "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (n = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app(), ce(n) && (n = JSON.parse(n)))
                }

                function r() {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var e = document.createElement("iframe");
                        e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null
                    }
                }
                var n = null,
                    i = null;
                window.sensorsdata_app_js_bridge_call_js = function(t) {
                    e(t)
                }, zi.getAppStatus = function(e) {
                    return r(), t(), e ? void(null === n ? i = e : (e(n), n = null)) : n
                }
            },
            hasVisualModeBridge: function() {
                var e = window.SensorsData_App_Visual_Bridge,
                    t = "sensorsdata_visualized_mode";
                return r(e) && e[t] && (e[t] === !0 || e[t]())
            },
            validateAppUrl: sr
        };
    ar.prototype.call = function(e, t) {
        var r = this,
            i = (new Date).getTime().toString(16) + String(n()).replace(".", "").slice(1, 8);
        this.resultCbs[i] = r.resultCbs[i] || {
            result: null,
            callbacks: []
        }, this.timeoutCbs[i] = r.timeoutCbs[i] || {
            isTimeout: !1,
            callbacks: []
        }, e = e.data ? e : {
            data: e
        }, e.data.message_id = i;
        var a = C({
            callType: this.type
        }, e);
        return t && (this.timerId = setTimeout(function() {
            r.timeoutCbs[i].isTimeout = !0;
            for (var e in r.timeoutCbs[i].callbacks) r.timeoutCbs[i].callbacks[e].call(null), r.timeoutCbs[i].callbacks.splice(e, 1)
        }, t)), or(a), {
            onResult: function(e) {
                return r.resultCbs[i].result ? (e(r.resultCbs[i].result), this) : (!r.timeoutCbs[i].isTimeout && r.resultCbs[i].callbacks.push(e), this)
            },
            onTimeout: function(e) {
                return r.timeoutCbs[i].isTimeout ? (e(), this) : (!r.resultCbs[i].result && r.timeoutCbs[i].callbacks.push(e), this)
            }
        }
    }, ar.prototype.onAppNotify = function(e) {
        this.appCallJsCallback = e
    }, ar.prototype.notifyApp = function(e, t) {
        var r = C({
            callType: this.type
        }, e);
        return t && (r.message_id = t), or(r)
    }, lr.prototype = {
        "double": function() {},
        getAppData: function() {},
        hasAppBridge: function() {
            return zi.bridge.bridge_info.support_two_way_call
        },
        init: function() {},
        jsCallApp: function() {},
        requestToApp: function(t) {
            this.bridge.call(t, t.timeout.time).onResult(function(r) {
                e(t.callback) && t.callback(r)
            }).onTimeout(function() {
                e(t.timeout.callback) && t.timeout.callback()
            })
        }
    };
    var io = {
            isSeachHasKeyword: function() {
                return "" !== V(location.href, "sa-request-id") && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), !0)
            },
            hasKeywordHandle: function() {
                var e = location.href,
                    t = V(e, "sa-request-id") || null,
                    r = V(e, "sa-request-type") || null,
                    n = V(e, "sa-request-url") || null;
                if (Ga.setNotice(n), sa.isSupport())
                    if (null !== n && sessionStorage.setItem("sensors_heatmap_url", n), sessionStorage.setItem("sensors_heatmap_id", t), null !== r) "1" === r || "2" === r || "3" === r ? sessionStorage.setItem("sensors_heatmap_type", r) : r = null;
                    else {
                        var i = sessionStorage.getItem("sensors_heatmap_type");
                        r = null !== i ? i : null
                    }
                this.isReady(t, r)
            },
            isReady: function(e, t, r) {
                zi.para.heatmap_url ? he({
                    success: function() {
                        setTimeout(function() {
                            "undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(zi, e, t, r), "object" == typeof console && "function" == typeof console.log && (zi.heatmap_version && zi.heatmap_version === zi.lib_version || Ie("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))
                        }, 0)
                    },
                    error: function() {},
                    type: "js",
                    url: zi.para.heatmap_url
                }) : Te("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")
            },
            isStorageHasKeyword: function() {
                return sa.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
            },
            storageHasKeywordHandle: function() {
                Ga.setNotice(), io.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
            },
            isWindowNameHasKeyword: function() {
                try {
                    var e = JSON.parse(window.name),
                        t = p(e["sa-request-page-url"]) ? u(e["sa-request-page-url"]) : null;
                    return e["sa-request-id"] && p(e["sa-request-id"]) && t === location.href
                } catch (r) {
                    return !1
                }
            },
            windowNameHasKeywordHandle: function() {
                function e(e) {
                    var r = t[e];
                    return p(r) ? u(r) : null
                }
                var t = JSON.parse(window.name),
                    r = e("sa-request-id"),
                    n = e("sa-request-type"),
                    i = e("sa-request-url");
                Ga.setNotice(i), sa.isSupport() && (null !== i && sessionStorage.setItem("sensors_heatmap_url", i), sessionStorage.setItem("sensors_heatmap_id", r), null !== n ? "1" === n || "2" === n || "3" === n ? sessionStorage.setItem("sensors_heatmap_type", n) : n = null : n = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), io.isReady(r, n)
            }
        },
        ao = {
            isStorageHasKeyword: function() {
                return sa.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode")
            },
            isSearchHasKeyword: function() {
                return (cr("sa-visual-mode") === !0 || "true" === cr("sa-visual-mode")) && ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), !0)
            },
            loadVtrack: function() {
                he({
                    success: function() {},
                    error: function() {},
                    type: "js",
                    url: zi.para.vtrack_url ? zi.para.vtrack_url : vt() + "//static.sensorsdata.cn/sdk/" + zi.lib_version + "/vtrack.min.js"
                })
            },
            messageListener: function(e) {
                if (!e || !e.data || "sa-fe" !== e.data.source) return !1;
                if ("v-track-mode" === e.data.type) {
                    if (e.data.data && e.data.data.isVtrack)
                        if (sa.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), e.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
                            var t = e.data.data.userURL;
                            p(t) && (Ne(t, "http://") || Ne(t, "https://")) && (window.location.href = encodeURI(t))
                        } else ao.loadVtrack();
                    window.removeEventListener("message", ao.messageListener, !1)
                }
            },
            removeMessageHandle: function() {
                window.removeEventListener && window.removeEventListener("message", ao.messageListener, !1)
            },
            verifyVtrackMode: function() {
                window.addEventListener && window.addEventListener("message", ao.messageListener, !1), ao.postMessage()
            },
            postMessage: function() {
                try {
                    window.parent && window.parent.postMessage && window.parent.postMessage({
                        source: "sa-web-sdk",
                        type: "v-is-vtrack",
                        data: {
                            sdkversion: ma
                        }
                    }, "*")
                } catch (e) {
                    Te("\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301 postMessage API")
                }
            },
            notifyUser: function() {
                var e = function(t) {
                    return !(!t || !t.data || "sa-fe" !== t.data.source) && void("v-track-mode" === t.data.type && (t.data.data && t.data.data.isVtrack && alert("\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"), window.removeEventListener("message", e, !1)))
                };
                window.addEventListener && window.addEventListener("message", e, !1), ao.postMessage()
            }
        },
        oo = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "resetAnonymousIdentity", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister", "bind", "unbind", "loginWithKey"],
        so = {
            track: function(e, t, r) {},
            quick: function(e, t, r, n) {},
            register: function(e) {},
            registerPage: function(e) {},
            registerOnce: function(e) {},
            clearAllRegister: function(e) {},
            trackSignup: function(e, t, r, n) {},
            setProfile: function(e, t) {},
            setOnceProfile: function(e, t) {},
            appendProfile: function(e, t) {},
            incrementProfile: function(e, t) {},
            deleteProfile: function(e) {},
            unsetProfile: function(e, t) {},
            identify: function(e, t) {},
            resetAnonymousIdentity: function(e) {},
            login: function(e, t) {},
            logout: function(e) {},
            trackLink: function(e, t, r) {},
            deleteItem: function(e, t) {},
            setItem: function(e, t, r) {},
            getAppStatus: function(e) {},
            clearPageRegister: function(e) {}
        };
    br.prototype.process = function(e, t) {
        if (!(e && e in this.processDef)) return void Te("process [" + e + "] is not supported");
        var r = this.registeredInterceptors[e];
        if (r && y(r) && r.length > 0)
            for (var n = {
                    current: 0,
                    total: r.length
                }, i = new yr(t, n, zi), a = 0; a < r.length; a++) try {
                if (n.current = a + 1, t = r[a].call(null, t, i) || t, i.cancellationToken.getCanceled()) break;
                if (i.cancellationToken.getStopped()) return
            } catch (o) {
                Te("interceptor error:" + o)
            }
        return this.processDef[e] && this.processDef[e] in this.processDef && (t = this.process(this.processDef[e], t)), t
    }, br.prototype.registerStageImplementation = function(t) {
        t && t.init && e(t.init) && (t.init(this), t.interceptor && this.registerInterceptor(t.interceptor))
    }, br.prototype.registerInterceptor = function(t) {
        if (t)
            for (var n in t) {
                var i = t[n];
                if (i && r(i) && e(i.entry)) {
                    de(i.priority) || (i.priority = Number.MAX_VALUE), this.registeredInterceptors[n] || (this.registeredInterceptors[n] = []);
                    var a = this.registeredInterceptors[n];
                    i.entry.priority = i.priority, a.push(i.entry), a.sort(function(e, t) {
                        return e.priority - t.priority
                    })
                }
            }
    };
    var lo = {
            basicProps: "extendProps",
            extendProps: "formatData",
            formatData: "finalAdjustData",
            finalAdjustData: null
        },
        uo = new br(lo),
        co = {
            send: null
        },
        po = new br(co),
        fo = {
            getUtmData: null,
            callSchema: null
        },
        go = new br(fo),
        _o = {
            webClickEvent: null,
            webStayEvent: null
        },
        ho = new br(_o),
        mo = {
            buildDataStage: function(e) {
                e && uo.registerInterceptor(e)
            },
            businessStage: function(e) {
                e && go.registerInterceptor(e)
            },
            sendDataStage: function(e) {
                e && po.registerInterceptor(e)
            },
            viewStage: function(e) {
                e && ho.registerInterceptor(e)
            }
        },
        vo = {
            stage: null,
            init: function(e) {
                this.stage = e
            }
        },
        yo = {
            stage: null,
            init: function(e) {
                this.stage = e
            },
            interceptor: {
                send: {
                    entry: function(e) {
                        return e
                    }
                }
            }
        },
        bo = {};
    bo.buildData = function(e) {
        return _t(e)
    }, bo.sendData = function(e, t) {
        var r = Fe(e.properties),
            n = {
                origin_data: e,
                server_url: zi.para.server_url,
                data: e,
                config: r || {},
                callback: t
            };
        Pr(n), zi.log(e)
    }, bo.encodeTrackData = function(e) {
        return et(e)
    }, bo.getUtmData = function() {
        return kr()
    };
    var wo = {
            webClickEvent: {
                entry: function(e, t) {
                    var r = t.sensors;
                    "a" === e.tagName && r.para.heatmap && r.para.heatmap.isTrackLink === !0 ? r.trackLink({
                        event: e.event,
                        target: e.target
                    }, "$WebClick", e.props) : r.track("$WebClick", e.props, e.callback)
                }
            },
            webStayEvent: {
                entry: function(e, t) {
                    var r = t.sensors;
                    r.track("$WebStay", e)
                }
            }
        },
        So = window.sensors_data_pre_config,
        ko = !!ro.isObject(So) && So.is_compliance_enabled;
    zi.init = function(e) {
        return Na.sdk.emit("beforeInit"), !(zi.readyState && zi.readyState.state && zi.readyState.state >= 2) && (ko && (jr(!0), mr()), Na.initSystemEvent(), zi.setInitVar(), zi.readyState.setState(2), zi.initPara(e), Na.sdk.emit("initPara"), Na.sdk.emit("afterInitPara"), Na.sdk.emit("initAPI"), Na.sdk.emit("afterInitAPI"), zi.detectMode(), ir(), Na.sdk.emit("afterInit"), void Na.sdk.emit("ready"))
    }, ko ? jr(!1) : (jr(!0), mr());
    var Po, Co, Oo, No, jo, Io, To, Ao, Do, $o, xo, Eo, Lo, Uo, Ro, Bo, Ho, Jo, Mo = "1.26.12",
        qo = {
            init: function(e) {
                var t = e._.isString,
                    r = e._.rot13defs,
                    n = e._.dfmapping,
                    i = "data:enc;",
                    a = "dfm-enc-";
                e.ee.sdk.on("afterInitPara", function() {
                    e.kit.userEncrypt = function(e) {
                        return a + n(e)
                    }, e.kit.userDecrypt = function(e) {
                        return 0 === e.indexOf(i) ? (e = e.substring(i.length), e = r(e)) : 0 === e.indexOf(a) && (e = e.substring(a.length), e = n(e)), e
                    }, e.kit.userDecryptIfNeeded = function(r) {
                        return !t(r) || 0 !== r.indexOf(i) && 0 !== r.indexOf(a) || (r = e.kit.userDecrypt(r)), r
                    }
                })
            },
            plugin_name: "UserEncryptDefault"
        },
        Ko = Ar(qo),
        Fo = "1.26.12",
        Vo = {
            sd: null,
            init: function(e) {
                if (this.sd) return !1;
                if (this.sd = e, !this.sd || !this.sd._) return !1;
                var t = this.sd._.cookie.get("sensors_amp_id"),
                    r = this.sd.store._state.distinct_id;
                if (t && t.length > 0) {
                    var n = "amp-" === t.slice(0, 4);
                    if (t !== r) {
                        if (!n) return !1;
                        this.sd.store._state.first_id ? (this.sd.identify(t, !0), this.sd.saEvent.send({
                            original_id: t,
                            distinct_id: r,
                            type: "track_signup",
                            event: "$SignUp",
                            properties: {}
                        }, null), this.setAmpId(r)) : this.sd.identify(t, !0)
                    }
                } else this.setAmpId(r);
                this.addListener()
            },
            addListener: function() {
                var e = this;
                this.sd.events.on("changeDistinctId", function(t) {
                    e.setAmpId(t)
                }), this.sd.events.isReady()
            },
            setAmpId: function(e) {
                this.sd._.cookie.set("sensors_amp_id", e)
            }
        },
        Wo = xr(Vo, "Amp", "sdkReady"),
        zo = window.SensorsData_App_Visual_Bridge,
        Xo = zo && zo.sensorsdata_visualized_mode,
        Zo = zo && zo.sensorsdata_visualized_alert_info,
        Go = zo && zo.sensorsdata_hover_web_nodes,
        Qo = {
            isVerify: function() {
                return Xo && (Xo === !0 || Xo.call(zo))
            },
            commands: {
                app_alert: Er,
                visualized_track: Lr,
                page_info: Lr,
                sensorsdata_get_app_visual_config: Ur
            }
        },
        Yo = "1.26.12",
        es = {
            init: function(e) {
                No = e, jo = No && No._, Io = No && No.log || console && console.log || function() {}, Jr()
            },
            handleCommand: qr
        },
        ts = Hr(es, "AndroidBridge", "sdkAfterInitPara"),
        rs = window.SensorsData_App_Visual_Bridge,
        ns = rs && rs.sensorsdata_visualized_mode,
        is = rs && rs.sensorsdata_visualized_alert_info,
        as = rs && rs.sensorsdata_hover_web_nodes,
        os = {
            isVerify: function() {
                return ns && (ns === !0 || ns.call(rs))
            },
            commands: {
                app_alert: Kr,
                visualized_track: Fr,
                page_info: Fr,
                sensorsdata_get_app_visual_config: Vr
            }
        },
        ss = "1.26.12",
        ls = {
            init: function(e) {
                xo = e, Eo = xo && xo._, Lo = xo && xo.log || console && console.log || function() {}, Zr()
            },
            handleCommand: Qr
        },
        us = Xr(ls, "AndroidObsoleteBridge", "sdkAfterInitPara"),
        cs = "1.26.12",
        ds = {
            event_list: [],
            latest_event_initial_time: null,
            max_save_time: 2592e6,
            init: function(e, t) {
                function r() {
                    return Uo = Ro._, Bo = Ro.store, !!Uo.localStorage.isSupport() && (Ro.para.max_string_length = 1024, n.eventList.init(), n.addLatestChannelUrl(), void n.addIsChannelCallbackEvent())
                }
                if (Ro || !e) return !1;
                t = t || {}, Ho = t.cookie_name || "sensorsdata2015jssdkchannel", Ro = e;
                var n = this;
                r()
            },
            addIsChannelCallbackEvent: function() {
                Ro.registerPage({
                    $is_channel_callback_event: function(e) {
                        if (Uo.isObject(e) && e.event && "$WebClick" !== e.event && "$pageview" !== e.event && "$WebStay" !== e.event && "$SignUp" !== e.event) return !ds.eventList.hasEvent(e.event) && (ds.eventList.add(e.event), !0)
                    }
                })
            },
            addLatestChannelUrl: function() {
                var e = this.getUrlDomain(),
                    t = this.cookie.getChannel();
                if ("url\u89e3\u6790\u5931\u8d25" === e) this.registerAndSave({
                    _sa_channel_landing_url: "",
                    _sa_channel_landing_url_error: "url\u7684domain\u89e3\u6790\u5931\u8d25"
                });
                else if (Uo.isReferralTraffic(document.referrer)) {
                    var r = Uo.getQueryParam(location.href, "sat_cf");
                    Uo.isString(r) && r.length > 0 ? (this.registerAndSave({
                        _sa_channel_landing_url: location.href
                    }), ds.channelLinkHandler()) : this.registerAndSave({
                        _sa_channel_landing_url: ""
                    })
                } else t ? Ro.registerPage(t) : Ro.registerPage({
                    _sa_channel_landing_url: "",
                    _sa_channel_landing_url_error: "\u53d6\u503c\u5f02\u5e38"
                })
            },
            registerAndSave: function(e) {
                Ro.registerPage(e), this.cookie.saveChannel(e)
            },
            cookie: {
                getChannel: function() {
                    var e = Ro.kit.userDecryptIfNeeded(Uo.cookie.get(Ho));
                    return e = Uo.safeJSONParse(e), !(!Uo.isObject(e) || !e.prop) && e.prop
                },
                saveChannel: function(e) {
                    var t = {
                            prop: e
                        },
                        r = JSON.stringify(t);
                    Ro.para.encrypt_cookie && (r = Ro.kit.userEncrypt(r)), Uo.cookie.set(Ho, r)
                }
            },
            channelLinkHandler: function() {
                this.eventList.reset(), Ro.track("$ChannelLinkReaching")
            },
            getUrlDomain: function() {
                var e = Uo.info.pageProp.url_domain;
                return "" === e && (e = "url\u89e3\u6790\u5931\u8d25"), e
            },
            eventList: {
                init: function() {
                    var e = this.get(),
                        t = (new Date).getTime();
                    if (e && Uo.isNumber(e.latest_event_initial_time) && Uo.isArray(e.eventList)) {
                        var r = t - e.latest_event_initial_time;
                        r > 0 && r < ds.max_save_time ? (ds.event_list = e.eventList, ds.latest_event_initial_time = e.latest_event_initial_time) : this.reset()
                    } else this.reset()
                },
                get: function() {
                    var e = {};
                    try {
                        e = Bo.readObjectVal("sawebjssdkchannel")
                    } catch (t) {
                        Ro.log(t)
                    }
                    return e
                },
                add: function(e) {
                    ds.event_list.push(e), this.save()
                },
                save: function() {
                    var e = {
                        latest_event_initial_time: ds.latest_event_initial_time,
                        eventList: ds.event_list
                    };
                    Bo.saveObjectVal("sawebjssdkchannel", e)
                },
                reset: function() {
                    ds.event_list = [], ds.latest_event_initial_time = (new Date).getTime(), this.save()
                },
                hasEvent: function(e) {
                    var t = !1;
                    return Uo.each(ds.event_list, function(r) {
                        r === e && (t = !0)
                    }), t
                }
            }
        },
        ps = tn(ds, "SensorsChannel", "sdkAfterInitAPI"),
        fs = "1.26.12",
        gs = (/micromessenger\/([\d.]+)/i.test(navigator.userAgent || ""), function() {
            var e = {};
            return "undefined" != typeof document.hidden ? (e.hidden = "hidden", e.visibilityChange = "visibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e
        });
    Jo = gs().hidden;
    var _s, hs, ms, vs, ys, bs, ws, Ss, ks = {
            android: /Android/i,
            iOS: /iPhone|iPad|iPod/i
        },
        Ps = function() {
            for (var e in ks)
                if (navigator.userAgent.match(ks[e])) return e;
            return ""
        },
        Cs = Ps(),
        Os = function() {
            return ks.hasOwnProperty(Cs)
        },
        Ns = function(e) {
            return null != e && "[object Object]" == Object.prototype.toString.call(e)
        },
        js = function(e) {
            var t = /\/sd\/(\w+)\/(\w+)$/;
            return e.match(t)
        },
        Is = function(e) {
            var t = e._.URL(e.para.server_url);
            return {
                origin: t.origin,
                project: t.searchParams.get("project") || "default"
            }
        },
        Ts = function(e, t, r) {
            e.log("\u5c1d\u8bd5\u5524\u8d77 android app");
            var n = t;
            e.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + n), window.location = n, e.timer = setTimeout(function() {
                var t = on();
                return e.log("hide:" + Jo + ":" + document[Jo]), t ? (e.log("The page is hidden, stop navigating to download page"), !1) : (e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), void(window.location = r))
            }, e.timeout)
        },
        As = function(e, t, r) {
            e.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:" + t), window.location.href = t, e.timer = setTimeout(function() {
                var t = on();
                return t ? (e.log("The page is hidden, stop navigating to download page"), !1) : (e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), void(window.location.href = r))
            }, e.timeout), e.log("new timer:" + e.timer)
        },
        Ds = {
            key: null,
            timer: null,
            sd: null,
            data: null,
            timeout: 2500,
            apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
            init: function(e) {
                if (this.sd) return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"), !1;
                if (this.sd = e, this.log("deeplink init called"), null === this.sd) return this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"), !1;
                var t = {};
                if (arguments.length > 0 && (1 === arguments.length && Ns(arguments[0]) ? t = arguments[0] : arguments.length >= 2 && Ns(arguments[1]) && (t = arguments[1])), !Os()) return this.log("\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"), !1;
                if (Ns(t) && this.sd._.isNumber(t.timeout) && t.timeout >= 2500 && (this.timeout = t.timeout), !this.sd.para.server_url) return this.log("\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"), !1;
                var r = Is(this.sd);
                this.apiURL = this.apiURL.replace("{origin}", r.origin).replace("{project}", r.project);
                var n = this.sd._.getQueryParam(window.location.href, "deeplink");
                if (!n) return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"), !1;
                n = window.decodeURIComponent(n);
                var i = js(n);
                return i ? (this.key = i[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(i[2])), this.sd._.ajax({
                    url: this.apiURL,
                    type: "GET",
                    cors: !0,
                    credentials: !1,
                    success: function(e) {
                        return e.errorMsg ? (Ds.log("API\u62a5\u9519\uff1a" + e.errorMsg), !1) : (Ds.data = e, Ds.log("API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a" + JSON.stringify(e, null, "  ")), void(this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))))
                    }.bind(this),
                    error: function() {
                        Ds.log("API\u67e5\u8be2\u51fa\u9519")
                    }
                }), void this.addListeners()) : (this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"), !1)
            },
            openDeepLink: function() {
                if (this.log("openDeeplink()"), !this.data) return this.log("\u6ca1\u6709Deep link\u6570\u636e!"), !1;
                if ("iOS" === Cs) {
                    this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");
                    var e = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
                    this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + e), As(this, e, this.data.ios_info.download_url)
                } else this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"), Ts(this, this.data.android_info.url_schemes, this.data.android_info.download_url)
            },
            log: function(e) {
                this.sd && this.sd.log(e)
            },
            addListeners: function() {
                var e = gs().visibilityChange,
                    t = this;
                e && document.addEventListener(e, function() {
                    clearTimeout(t.timer), t.log("visibilitychange, clear timeout:" + t.timer)
                }, !1), window.addEventListener("pagehide", function() {
                    t.log("page hide, clear timeout:" + t.timer), clearTimeout(t.timer)
                }, !1)
            }
        },
        $s = an(Ds, "Deeplink", "sdkReady"),
        xs = "1.26.12",
        Es = {
            init: function(e) {
                ms = e, vs = ms && ms._, ys = ms && ms.log || console && console.log || function() {}, cn()
            },
            handleCommand: pn
        },
        Ls = un(Es, "IOSBridge", "sdkAfterInitPara"),
        Us = "1.26.12",
        Rs = {
            init: function(e) {
                bs = e, ws = bs && bs._, Ss = bs && bs.log || console && console.log || function() {}, hn()
            }
        },
        Bs = _n(Rs, "IOSObsoleteBridge", "sdkAfterInitPara"),
        Hs = "1.26.12",
        Js = 5e3,
        Ms = 432e3;
    kn.prototype.init = function(e, t) {
        if (e) {
            if (this.sd = e, this._ = this.sd._, t) {
                this.option = t;
                var r = t.heartbeat_interval_time;
                r && (this._.isNumber(r) || this._.isNumber(1 * r)) && 1 * r > 0 && (this.heartbeat_interval_time = 1e3 * r);
                var n = t.max_duration;
                n && (this._.isNumber(n) || this._.isNumber(1 * n)) && 1 * n > 0 && (this.max_duration = n)
            }
            this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String((new Date).getTime()).slice(-4)), this.addEventListener(), document.hidden === !0 ? this.page_show_status = !1 : this.addHeartBeatInterval(), this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")
        } else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
    }, kn.prototype.log = function(e) {
        this.sd && this.sd.log(e)
    }, kn.prototype.refreshPageEndTimer = function() {
        var e = this;
        this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
            e.page_hidden_status = !1
        }, Js)
    }, kn.prototype.hiddenStatusHandler = function() {
        clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1
    }, kn.prototype.pageStartHandler = function() {
        this.start_time = +new Date, 1 == !document.hidden ? this.page_show_status = !0 : this.page_show_status = !1, this.url = location.href, this.title = document.title
    }, kn.prototype.pageEndHandler = function() {
        if (this.page_hidden_status !== !0) {
            var e = this.getPageLeaveProperties();
            this.page_show_status === !1 && delete e.event_duration, this.page_show_status = !1, this.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", e), this.refreshPageEndTimer(), this.delHeartBeatData()
        }
    }, kn.prototype.addEventListener = function() {
        this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this.addPageEndListener()
    }, kn.prototype.addPageStartListener = function() {
        var e = this;
        "onpageshow" in window && this._.addEvent(window, "pageshow", function() {
            e.pageStartHandler(), e.hiddenStatusHandler()
        })
    }, kn.prototype.isCollectUrl = function(e) {
        return "function" != typeof this.option.isCollectUrl || "string" != typeof e || "" === e || this.option.isCollectUrl(e)
    }, kn.prototype.addSinglePageListener = function() {
        var e = this;
        this.sd.ee && this.sd.ee.spa.prepend("switch", function(t) {
            t !== location.href && (e.url = t, e.pageEndHandler(), e.stopHeartBeatInterval(), e.current_page_url = e.url, e.pageStartHandler(), e.hiddenStatusHandler(), e.addHeartBeatInterval())
        })
    }, kn.prototype.addPageEndListener = function() {
        var e = this;
        this._.each(["pagehide", "beforeunload", "unload"], function(t) {
            "on" + t in window && e._.addEvent(window, t, function() {
                e.pageEndHandler(), e.stopHeartBeatInterval()
            })
        })
    }, kn.prototype.addPageSwitchListener = function() {
        var e = this;
        this._.listenPageState({
            visible: function() {
                e.pageStartHandler(), e.hiddenStatusHandler(), e.addHeartBeatInterval()
            },
            hidden: function() {
                e.url = location.href, e.title = document.title, e.pageEndHandler(), e.stopHeartBeatInterval()
            }
        })
    }, kn.prototype.addHeartBeatInterval = function() {
        this._.localStorage.isSupport() && this.startHeartBeatInterval()
    }, kn.prototype.startHeartBeatInterval = function() {
        var e = this;
        this.heartbeat_interval_timer && this.stopHeartBeatInterval();
        var t = !0;
        this.isCollectUrl(this.url) || (t = !1), this.heartbeat_interval_timer = setInterval(function() {
            t && e.saveHeartBeatData()
        }, this.heartbeat_interval_time), t && this.saveHeartBeatData("is_first_heartbeat"), this.reissueHeartBeatData()
    }, kn.prototype.stopHeartBeatInterval = function() {
        clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null
    }, kn.prototype.saveHeartBeatData = function(e) {
        var t = this.getPageLeaveProperties(),
            r = new Date;
        t.$time = r, "is_first_heartbeat" === e && (t.event_duration = 3.14);
        var n = this.sd.kit.buildData({
            type: "track",
            event: "$WebPageLeave",
            properties: t
        });
        n.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, n)
    }, kn.prototype.delHeartBeatData = function(e) {
        this._.localStorage.isSupport() && this._.localStorage.remove(e || this.storage_name + "-" + this.page_id)
    }, kn.prototype.reissueHeartBeatData = function() {
        for (var e = window.localStorage.length, t = e - 1; t >= 0; t--) {
            var r = window.localStorage.key(t);
            if (r && r !== this.storage_name + "-" + this.page_id && 0 === r.indexOf(this.storage_name + "-")) {
                var n = this.sd.store.readObjectVal(r);
                this._.isObject(n) && 1 * new Date - n.time > n.heartbeat_interval_time + 5e3 && (delete n.heartbeat_interval_time, n._flush_time = (new Date).getTime(), this.sd.kit.sendData(n), this.delHeartBeatData(r))
            }
        }
    }, kn.prototype.getPageLeaveProperties = function() {
        var e = (+new Date - this.start_time) / 1e3;
        (isNaN(e) || e < 0 || e > this.max_duration) && (e = 0), e = Number(e.toFixed(3));
        var t = this._.getReferrer(this.current_page_url),
            r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0;
        r = Math.round(r) || 0;
        var n = {
            $title: this.title,
            $url: this._.getURL(this.url),
            $url_path: this._.getURLPath(this._.URL(this.url).pathname),
            $referrer_host: t ? this._.getHostname(t) : "",
            $referrer: t,
            $viewport_position: r
        };
        return 0 !== e && (n.event_duration = e), n = this._.extend(n, this.option.custom_props)
    };
    var qs = new kn,
        Ks = Sn(qs, "PageLeave", "sdkReady"),
        Fs = "1.26.12",
        Vs = !1,
        Ws = {
            init: function(e, t) {
                function r(t, r) {
                    if (t.getEntries && "function" == typeof t.getEntries) {
                        for (var n = t.getEntries(), i = null, a = 0; a < n.length; a++) "transferSize" in n[a] && (i += n[a].transferSize);
                        e._.isNumber(i) && i >= 0 && i < 10737418240 && (r.$page_resource_size = Number((i / 1024).toFixed(3)))
                    }
                }

                function n(t) {
                    var r = 0;
                    if (t.timing) {
                        var n = t.timing;
                        0 !== n.fetchStart && e._.isNumber(n.fetchStart) && 0 !== n.domContentLoadedEventEnd && e._.isNumber(n.domContentLoadedEventEnd) ? r = n.domContentLoadedEventEnd - n.fetchStart : e.log("performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38")
                    }
                    return r
                }

                function i(t) {
                    var r = 0;
                    if (e._.isFunction(t.getEntriesByType)) {
                        var n = t.getEntriesByType("navigation") || [{}];
                        r = (n[0] || {}).domContentLoadedEventEnd || 0
                    }
                    return r
                }

                function a() {
                    var o = 0,
                        s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
                        l = {
                            $url: e._.getURL(),
                            $title: document.title,
                            $url_path: e._.getURLPath(),
                            $referrer: e._.getReferrer(null, !0)
                        };
                    if (s ? (o = i(s) || n(s), r(s, l)) : e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API."), o > 0) {
                        var u = e._.isObject(t) && t.max_duration || 1800;
                        o = Number((o / 1e3).toFixed(3)), (!e._.isNumber(u) || u <= 0 || o <= u) && (l.event_duration = o)
                    }
                    Vs || (e.track("$WebPageLoad", l), Vs = !0), window.removeEventListener ? window.removeEventListener("load", a) : window.detachEvent && window.detachEvent("onload", a)
                }
                "complete" == document.readyState ? a() : window.addEventListener ? window.addEventListener("load", a) : window.attachEvent && window.attachEvent("onload", a)
            }
        },
        zs = On(Ws, "PageLoad", "sdkReady");
    jn.prototype.init = function(e) {
        if (e) {
            this.sd = e, this._ = e._, this.log = e.log;
            var t = this;
            e.registerInterceptor("buildDataStage", {
                extendProps: {
                    priority: 0,
                    entry: function(e) {
                        return Nn(e, t)
                    }
                }
            })
        } else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
    }, jn.prototype.register = function(e) {
        return this.sd ? void(this._.isObject(e) && this._.isArray(e.events) && e.events.length > 0 && this._.isObject(e.properties) && !this._.isEmptyObject(e.properties) ? this.customRegister.push(e) : this.log("RegisterProperties: register \u53c2\u6570\u9519\u8bef")) : void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
    }, jn.prototype.hookRegister = function(e) {
        return this.sd ? void(this._.isFunction(e) ? this.customRegister.push(e) : this.log("RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef")) : void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
    };
    var Xs = "1.26.12";
    jn.prototype.plugin_name = "RegisterProperties";
    var Zs, Gs, Qs = new jn,
        Ys = An(Qs),
        el = "1.26.12",
        tl = window.console && window.console.log || function() {},
        rl = {
            init: function(e) {
                return Zs = e, tl = Zs && Zs.log || tl, e && e.kit && e.kit.buildData ? (Gs = Zs.kit.buildData, Zs.kit.buildData = En, void tl("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")) : void tl("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")
            }
        },
        nl = xn(rl, "RegisterPropertyPageHeight", "sdkReady"),
        il = "1.26.12",
        al = {};
    al.getPart = function(e) {
        var t = !1,
            r = this.option.length;
        if (r)
            for (var n = 0; n < r; n++)
                if (e.indexOf(this.option[n].part_url) > -1) return !0;
        return t
    }, al.getPartHash = function(e) {
        var t = this.option.length,
            r = !1;
        if (t)
            for (var n = 0; n < t; n++)
                if (e.indexOf(this.option[n].part_url) > -1) return this.option[n].after_hash;
        return !!r
    }, al.getCurrenId = function() {
        var e = this.store.getDistinctId() || "",
            t = this.store.getFirstId() || "";
        this._.urlSafeBase64 && this._.urlSafeBase64.encode ? e = e ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(e))) : "" : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : "");
        var r = t ? "f" + e : "d" + e;
        return encodeURIComponent(r)
    }, al.rewriteUrl = function(e, t) {
        var r = this,
            n = /([^?#]+)(\?[^#]*)?(#.*)?/,
            i = n.exec(e),
            a = "";
        if (i) {
            var o, s = i[1] || "",
                l = i[2] || "",
                u = i[3] || "",
                c = "_sasdk=" + this.getCurrenId(),
                d = function(e) {
                    var t = e.split("&"),
                        n = [];
                    return r._.each(t, function(e) {
                        e.indexOf("_sasdk=") > -1 ? n.push(c) : n.push(e)
                    }), n.join("&")
                };
            if (this.getPartHash(e)) {
                o = u.indexOf("_sasdk");
                var p = u.indexOf("?");
                a = p > -1 ? o > -1 ? s + l + "#" + u.substring(1, o) + d(u.substring(o, u.length)) : s + l + u + "&" + c : s + l + "#" + u.substring(1) + "?" + c
            } else {
                o = l.indexOf("_sasdk");
                var f = /^\?(\w)+/.test(l);
                a = f ? o > -1 ? s + "?" + d(l.substring(1)) + u : s + l + "&" + c + u : s + "?" + c + u
            }
            return t && (t.href = a), a
        }
    }, al.getUrlId = function() {
        var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
        if (this._.isArray(e) && e[1]) {
            var t = decodeURIComponent(e[1]);
            return !t || "f" !== t.substring(0, 1) && "d" !== t.substring(0, 1) || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t) ? t = t.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(t.substring(1))) : this._.rot13defs && (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))), t
        }
        return ""
    }, al.setRefferId = function(e) {
        var t = this.store.getDistinctId(),
            r = this.getUrlId();
        if (r && "" !== r) {
            var n = "a" === r.substring(0, 1) || "d" === r.substring(0, 1);
            r = r.substring(1), r !== t && (n ? (this.sd.identify(r, !0), this.store.getFirstId() && this.sd.saEvent.send({
                original_id: r,
                distinct_id: t,
                type: "track_signup",
                event: "$SignUp",
                properties: {}
            }, null)) : this.store.getFirstId() && !e.re_login || this.sd.login(r))
        }
    }, al.addListen = function() {
        var e = this,
            t = function(t) {
                var r, n, i = t.target,
                    a = i.tagName.toLowerCase(),
                    o = i.parentNode;
                if ("a" === a && i.href || o && o.tagName && "a" === o.tagName.toLowerCase() && o.href) {
                    "a" === a && i.href ? (r = i.href, n = i) : (r = o.href, n = o);
                    var s = e._.URL(r),
                        l = s.protocol;
                    "http:" !== l && "https:" !== l || e.getPart(r) && e.rewriteUrl(r, n)
                }
            };
        e._.addEvent(document, "mousedown", t), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && e._.addEvent(document, "pointerdown", t)
    }, al.init = function(e, t) {
        function r(t) {
            for (var r = t.length, n = [], i = 0; i < r; i++) /[A-Za-z0-9]+\./.test(t[i].part_url) && "[object Boolean]" == Object.prototype.toString.call(t[i].after_hash) ? n.push(t[i]) : e.log("linker \u914d\u7f6e\u7684\u7b2c " + (i + 1) + " \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");
            return n
        }
        return this.sd = e, this._ = e._, this.store = e.store, this.para = e.para, this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0 ? (this.setRefferId(t), this.addListen(), this.option = t.linker, void(this.option = r(this.option))) : void e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")
    };
    var ol, sl, ll, ul, cl, dl, pl, fl, gl, _l, hl, ml, vl, yl = Rn(al, "SiteLinker", "sdkReady"),
        bl = "utm_source utm_medium utm_campaign utm_content utm_term",
        wl = "1.26.12",
        Sl = {
            init: function(e) {
                function t() {
                    var e = bl.split(" "),
                        t = "",
                        r = {};
                    return ol._.isArray(ol.para.source_channel) && ol.para.source_channel.length > 0 && (e = e.concat(ol.para.source_channel), e = ol._.unique(e)), ol._.each(e, function(e) {
                        t = ol._.getQueryParam(location.href, e), t.length && (r[e] = t)
                    }), r
                }
                e && !ol && (ol = e, ol.registerInterceptor("businessStage", {
                    getUtmData: {
                        priority: 0,
                        entry: function() {
                            return t()
                        }
                    }
                }))
            }
        },
        kl = Jn(Sl, "Utm", "sdkAfterInitPara"),
        Pl = "1.26.12",
        Cl = !1,
        Ol = null,
        Nl = {
            init: function(e) {
                Ol = e, Ol.disableSDK = Fn, Ol.enableSDK = Vn, Ol.getDisabled = Wn
            }
        },
        jl = Kn(Nl, "DisableSDK", "sdkInitAPI"),
        Il = "1.26.12",
        Tl = {
            plugin_name: "DebugSender",
            init: function(e) {
                sl = e, ll = sl._, ei()
            }
        },
        Al = Zn(Tl),
        Dl = "1.26.12",
        $l = {
            plugin_name: "JsappSender",
            init: function(e) {
                ul = e, cl = ul._, ai()
            }
        },
        xl = ni($l),
        El = "1.26.12",
        Ll = null,
        Ul = {
            plugin_name: "BatchSender",
            init: function(e) {
                dl = e, pl = dl._, pi()
            }
        },
        Rl = ui(Ul),
        Bl = "1.26.12",
        Hl = {
            plugin_name: "BeaconSender",
            init: function(e) {
                fl = e, gl = fl._, yi()
            }
        },
        Jl = _i(Hl),
        Ml = "1.26.12",
        ql = {
            plugin_name: "AjaxSender",
            init: function(e) {
                _l = e, hl = _l._, Oi()
            }
        },
        Kl = Si(ql),
        Fl = "1.26.12",
        Vl = {
            plugin_name: "ImageSender",
            init: function(e) {
                ml = e, vl = ml._, xi()
            }
        },
        Wl = Ii(Vl),
        zl = null,
        Xl = null,
        Zl = [],
        Gl = {
            init: function(e) {
                e && (zl = e, Xl = zl._, zl.logger && zl.logger.appendWriter(Ri), zl.on && zl.on("sdkAfterInitPara", function() {
                    for (var e = 0; e < Zl.length; e++) Bi(Zl[e]);
                    Zl = null
                }), zl.on && zl.on("sdkInitAPI", function() {
                    zl.enableLocalLog = Fi, zl.disableLocalLog = Vi
                }))
            }
        },
        Ql = Ui(Gl, "ConsoleLogger"),
        Yl = "sensorsdata_jssdk_debug";
    zi.modules = zi.modules || {};
    for (var eu = [Ql, Wo, ts, us, ps, $s, Ls, Bs, Ks, zs, Ys, nl, yl, kl, jl, Al, xl, Rl, Jl, Kl, Wl], tu = [Ql, Ko, kl, jl, xl, Al, ts, Ls, us, Bs, Rl, Jl, Kl, Wl], ru = 0; ru < eu.length; ru++) {
        var nu = eu[ru];
        zi._.isString(nu.plugin_name) ? zi.modules[nu.plugin_name] = nu : zi._.isArray(nu.plugin_name) && zi._.each(nu.plugin_name, function(e) {
            zi.modules[e] = nu
        })
    }
    for (ru = 0; ru < tu.length; ru++) zi.use(tu[ru]);
    var iu = zi;
    try {
        "string" == typeof window.sensorsDataAnalytic201505 ? (zi.para = window[sensorsDataAnalytic201505].para, zi._q = window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = zi, window.sensorsDataAnalytic201505 = zi, zi.init()) : "undefined" == typeof window.sensorsDataAnalytic201505 ? window.sensorsDataAnalytic201505 = zi : iu = window.sensorsDataAnalytic201505
    } catch (au) {
        Te(au)
    }
    var ou = iu;
    return ou
});