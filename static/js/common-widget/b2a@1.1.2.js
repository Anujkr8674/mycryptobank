! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.b2aSDK = t() : e.b2aSDK = t()
}(self, (() => (() => {
    "use strict";
    var e = {
            d: (t, o) => {
                for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: o[r]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    e.r(t), e.d(t, {
        atob: () => f,
        atobu: () => l,
        btoa: () => c,
        btoau: () => d,
        default: () => b
    });
    const o = e => {
            function t() {
                this.message = e
            }
            return t.prototype = new Error, t.prototype.name = "InvalidCharacterError", t.prototype.code = 5, t
        },
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        n = o("The string to be encoded contains characters out of range"),
        a = "undefined" != typeof btoa ? e => btoa(e) : e => {
            const t = String(e);
            let o = "";
            for (let e, a, c = 0, d = r; t.charAt(0 | c) || (d = "=", c % 1); o += d.charAt(63 & e >> 8 - c % 1 * 8)) {
                if (a = t.charCodeAt(c += 3 / 4), a > 255) throw new n;
                e = e << 8 | a
            }
            return o
        },
        c = e => a((e => encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode("0x" + t))))(e)),
        d = e => c(e).replace(/\+/g, "-").replace(/\//g, "_"),
        i = o("The string to be decoded is not correctly encoded"),
        p = "undefined" != typeof atob ? e => atob(e) : e => {
            const t = String(e).replace(/[=]+$/, "");
            if (t.length % 4 == 1) throw new i;
            let o = "";
            for (let e, n, a = 0, c = 0; n = t.charAt(c++); ~n && (e = a % 4 ? 64 * e + n : n, a++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * a & 6)) : 0) n = r.indexOf(n);
            return o
        },
        f = e => (e => decodeURIComponent(e.split("").map((e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))).join("")))(p(e)),
        l = e => f(e.replace(/-/g, "+").replace(/_/g, "/")),
        b = c;
    return t
})()));